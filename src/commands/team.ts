import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync, readdirSync } from "fs";
import { join } from "path";
import { homedir } from "os";
import { scanTeams } from "../engine/teams";

const TEAMS_DIR = join(homedir(), ".claude/teams");
const TASKS_DIR = join(homedir(), ".claude/tasks");

interface TeamConfig {
  name: string;
  description: string;
  members: TeamMember[];
  createdAt: number;
}

interface TeamMember {
  name: string;
  color: string | null;
  backendType: string | null;
  isActive: boolean | null;
  tmuxPaneId: string;
  model: string;
  cwd?: string;
  agentType?: string;
  joinedAt?: number;
}

interface TaskData {
  id: string;
  subject: string;
  status: string;
  owner: string | null;
  createdAt: number;
}

function teamDir(name: string) { return join(TEAMS_DIR, name); }
function teamConfigPath(name: string) { return join(teamDir(name), "config.json"); }
function tasksDir(name: string) { return join(TASKS_DIR, name); }

export function loadTeamConfig(name: string): TeamConfig | null {
  const p = teamConfigPath(name);
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, "utf-8")); }
  catch { return null; }
}

export function saveTeamConfig(config: TeamConfig): void {
  const dir = teamDir(config.name);
  mkdirSync(dir, { recursive: true });
  writeFileSync(teamConfigPath(config.name), JSON.stringify(config, null, 2) + "\n");
}

export function saveTask(teamName: string, task: TaskData): void {
  const dir = tasksDir(teamName);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${task.id}.json`), JSON.stringify(task, null, 2) + "\n");
}

export function loadTask(teamName: string, taskId: string): TaskData | null {
  const p = join(tasksDir(teamName), `${taskId}.json`);
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, "utf-8")); }
  catch { return null; }
}

function genId(): string {
  return `t-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

// --- CLI commands ---

export async function cmdTeamCreate(name: string, opts: { members?: string[]; desc?: string }) {
  if (loadTeamConfig(name)) {
    console.error(`\x1b[31m\u2717\x1b[0m team \x1b[33m${name}\x1b[0m already exists`);
    process.exit(1);
  }
  const members: TeamMember[] = (opts.members || []).map(m => ({
    name: m,
    color: null,
    backendType: "tmux",
    isActive: null,
    tmuxPaneId: "",
    model: "",
    joinedAt: Date.now(),
  }));
  const config: TeamConfig = {
    name,
    description: opts.desc || "",
    members,
    createdAt: Date.now(),
  };
  saveTeamConfig(config);
  console.log(`\x1b[32m\u2713\x1b[0m team \x1b[33m${name}\x1b[0m created (${members.length} members)`);
}

export async function cmdTeamList() {
  const teams = await scanTeams();
  if (teams.length === 0) {
    console.log("\x1b[90mNo teams\x1b[0m");
    return;
  }
  console.log(`\n\x1b[36mTEAMS\x1b[0m (${teams.length}):\n`);
  for (const t of teams) {
    const status = t.alive ? "\x1b[32m\u25cf\x1b[0m" : "\x1b[90m\u25cb\x1b[0m";
    const tasks = t.tasks?.length || 0;
    console.log(`  ${status} \x1b[33m${t.name.padEnd(20)}\x1b[0m ${String(t.members?.length || 0).padStart(2)} members  ${String(tasks).padStart(2)} tasks  \x1b[90m${t.description || ""}\x1b[0m`);
  }
  console.log();
}

export async function cmdTeamDelete(name: string) {
  if (!loadTeamConfig(name)) {
    console.error(`\x1b[31m\u2717\x1b[0m team \x1b[33m${name}\x1b[0m not found`);
    process.exit(1);
  }
  rmSync(teamDir(name), { recursive: true, force: true });
  // Also remove tasks dir if exists
  const td = tasksDir(name);
  if (existsSync(td)) rmSync(td, { recursive: true, force: true });
  console.log(`\x1b[32m\u2713\x1b[0m team \x1b[33m${name}\x1b[0m deleted`);
}

export async function cmdTeamTaskAdd(teamName: string, subject: string, opts: { assign?: string }) {
  const config = loadTeamConfig(teamName);
  if (!config) {
    console.error(`\x1b[31m\u2717\x1b[0m team \x1b[33m${teamName}\x1b[0m not found`);
    process.exit(1);
  }
  const task: TaskData = {
    id: genId(),
    subject,
    status: "pending",
    owner: opts.assign || null,
    createdAt: Date.now(),
  };
  saveTask(teamName, task);
  console.log(`\x1b[32m\u2713\x1b[0m task \x1b[33m${task.id}\x1b[0m added to \x1b[33m${teamName}\x1b[0m${opts.assign ? ` (assigned: ${opts.assign})` : ""}`);
}

export async function cmdTeamTaskUpdate(teamName: string, taskId: string, status: string) {
  const task = loadTask(teamName, taskId);
  if (!task) {
    console.error(`\x1b[31m\u2717\x1b[0m task \x1b[33m${taskId}\x1b[0m not found in team \x1b[33m${teamName}\x1b[0m`);
    process.exit(1);
  }
  task.status = status;
  saveTask(teamName, task);
  console.log(`\x1b[32m\u2713\x1b[0m task \x1b[33m${taskId}\x1b[0m \u2192 \x1b[36m${status}\x1b[0m`);
}
