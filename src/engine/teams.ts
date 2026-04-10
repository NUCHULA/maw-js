import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";
import { homedir } from "os";
import { tmux } from "../tmux";
import { capture } from "../ssh";
import type { MawWS } from "../types";

interface TeamData {
  name: string;
  description: string;
  members: any[];
  tasks: any[];
  alive: boolean;
}

const TEAMS_DIR = join(homedir(), ".claude/teams");
const TASKS_DIR = join(homedir(), ".claude/tasks");

const COLORS = ["blue", "green", "red", "yellow", "purple", "cyan", "orange", "pink"];

/** Deterministic color from name */
function autoColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = ((h << 5) - h + name.charCodeAt(i)) | 0;
  return COLORS[Math.abs(h) % COLORS.length];
}

/** Extract model from statusline capture (e.g. "❯ opus · ctx 82K/1M") */
function extractModel(content: string): string {
  const lines = content.split("\n");
  for (let i = lines.length - 1; i >= 0; i--) {
    const plain = lines[i].replace(/\x1b\[[0-9;]*m/g, "");
    const m = plain.match(/❯\s+(\S+)\s+·/);
    if (m) return m[1]; // "opus", "sonnet", "haiku"
  }
  return "";
}

/** Build a lookup of tmux agents: name → { target, paneId, cwd, cmd, isActive } */
async function buildTmuxLookup(): Promise<Map<string, { target: string; paneId: string; cwd: string; isActive: boolean }>> {
  const lookup = new Map<string, { target: string; paneId: string; cwd: string; isActive: boolean }>();
  try {
    // Get windows + pane IDs in one call
    const raw = await tmux.run(
      "list-panes", "-a", "-F",
      "#{session_name}:#{window_index}|||#{window_name}|||#{pane_id}|||#{pane_current_path}|||#{pane_current_command}"
    );
    for (const line of raw.split("\n").filter(Boolean)) {
      const [target, winName, paneId, cwd, cmd] = line.split("|||");
      // Derive agent name: "scout-oracle" → "scout"
      const agentName = winName.replace(/-oracle$/, "").replace(/-nj-engine$/, "");
      const isActive = /claude|codex|node/i.test(cmd || "");
      lookup.set(agentName, { target, paneId, cwd: cwd || "", isActive });
    }
  } catch { /* tmux not running */ }
  return lookup;
}

/** Capture model from statusline for active agents (batch, max 5 concurrent) */
async function batchExtractModels(agents: { name: string; target: string }[]): Promise<Map<string, string>> {
  const models = new Map<string, string>();
  const results = await Promise.allSettled(
    agents.map(async ({ name, target }) => {
      const content = await capture(target, 5);
      return { name, model: extractModel(content) };
    })
  );
  for (const r of results) {
    if (r.status === "fulfilled" && r.value.model) {
      models.set(r.value.name, r.value.model);
    }
  }
  return models;
}

/** Scan all teams + tasks, return current state with liveness + enriched members */
export async function scanTeams(): Promise<TeamData[]> {
  try {
    const dirs = readdirSync(TEAMS_DIR).filter(d =>
      existsSync(join(TEAMS_DIR, d, "config.json"))
    );
    if (dirs.length === 0) return [];

    const tmuxLookup = await buildTmuxLookup();

    // Collect active agents that need model extraction
    const needModel: { name: string; target: string }[] = [];

    // First pass: find which members are active and need model capture
    const teamConfigs = dirs.map(d => {
      try { return JSON.parse(readFileSync(join(TEAMS_DIR, d, "config.json"), "utf-8")); }
      catch { return null; }
    }).filter(Boolean);

    for (const config of teamConfigs) {
      for (const m of config.members || []) {
        const info = tmuxLookup.get(m.name);
        if (info?.isActive) {
          needModel.push({ name: m.name, target: info.target });
        }
      }
    }

    // Batch capture models (only for active agents)
    const models = needModel.length > 0 ? await batchExtractModels(needModel) : new Map<string, string>();

    // Second pass: build enriched teams
    return teamConfigs.map(config => {
      const tasksDir = join(TASKS_DIR, config.name);
      let tasks: any[] = [];
      try {
        tasks = readdirSync(tasksDir)
          .filter(f => f.endsWith(".json"))
          .map(f => {
            try { return JSON.parse(readFileSync(join(tasksDir, f), "utf-8")); }
            catch { return null; }
          })
          .filter(Boolean);
      } catch { /* tasks dir may not exist */ }

      let alive = false;
      const members = (config.members || []).map((m: any) => {
        const info = tmuxLookup.get(m.name);
        const isActive = info?.isActive ?? false;
        if (isActive) alive = true;

        return {
          ...m,
          isActive,
          tmuxPaneId: info?.paneId || m.tmuxPaneId || "",
          cwd: info?.cwd || m.cwd || "",
          model: models.get(m.name) || m.model || "",
          color: m.color || autoColor(m.name),
        };
      });

      return { ...config, members, tasks, alive };
    });
  } catch { return []; }
}

/** Broadcast teams to all clients if changed */
export async function broadcastTeams(
  clients: Set<MawWS>,
  lastJson: { value: string },
): Promise<void> {
  if (clients.size === 0) return;
  const teams = await scanTeams();
  const json = JSON.stringify(teams);
  if (json === lastJson.value) return;
  lastJson.value = json;
  const msg = JSON.stringify({ type: "teams", teams });
  for (const ws of clients) ws.send(msg);
}
