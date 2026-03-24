import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";
import { homedir } from "os";
import type { MawWS } from "./types";

interface TeamData {
  name: string;
  description: string;
  members: any[];
  tasks: any[];
}

const TEAMS_DIR = join(homedir(), ".claude/teams");
const TASKS_DIR = join(homedir(), ".claude/tasks");

/** Scan all teams + tasks, return current state */
export function scanTeams(): TeamData[] {
  try {
    const dirs = readdirSync(TEAMS_DIR).filter(d =>
      existsSync(join(TEAMS_DIR, d, "config.json"))
    );
    return dirs.map(d => {
      try {
        const config = JSON.parse(readFileSync(join(TEAMS_DIR, d, "config.json"), "utf-8"));
        const tasksDir = join(TASKS_DIR, d);
        let tasks: any[] = [];
        try {
          tasks = readdirSync(tasksDir)
            .filter(f => f.endsWith(".json"))
            .map(f => {
              try { return JSON.parse(readFileSync(join(tasksDir, f), "utf-8")); }
              catch { return null; }
            })
            .filter(Boolean);
        } catch {}
        return { ...config, tasks };
      } catch { return null; }
    }).filter(Boolean) as TeamData[];
  } catch { return []; }
}

/** Broadcast teams to all clients if changed */
export function broadcastTeams(
  clients: Set<MawWS>,
  lastJson: { value: string },
): void {
  if (clients.size === 0) return;
  const teams = scanTeams();
  const json = JSON.stringify(teams);
  if (json === lastJson.value) return;
  lastJson.value = json;
  const msg = JSON.stringify({ type: "teams", teams });
  for (const ws of clients) ws.send(msg);
}
