import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { homedir } from "os";
import { scanTeams } from "../engine/teams";

const TEAMS_DIR = join(homedir(), ".claude/teams");
const TASKS_DIR = join(homedir(), ".claude/tasks");

/** Validate and sanitize team/task name — reject path traversal */
export function sanitizeName(name: string): string {
  if (!name || typeof name !== "string") throw new Error("name is required");
  if (/[\/\\]|\.\./.test(name)) throw new Error("invalid name: must not contain / \\ or ..");
  const trimmed = name.trim();
  if (!trimmed || trimmed.length > 100) throw new Error("invalid name: empty or too long");
  return trimmed;
}

/** Assert resolved path is inside expected base dir */
function assertInsideDir(base: string, target: string): void {
  const resolved = resolve(target);
  if (!resolved.startsWith(resolve(base) + "/") && resolved !== resolve(base)) {
    throw new Error(`path escape detected: ${resolved} is outside ${base}`);
  }
}

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

export function teamDir(name: string) { const d = join(TEAMS_DIR, sanitizeName(name)); assertInsideDir(TEAMS_DIR, d); return d; }
function teamConfigPath(name: string) { return join(teamDir(name), "config.json"); }
export function tasksDir(name: string) { const d = join(TASKS_DIR, sanitizeName(name)); assertInsideDir(TASKS_DIR, d); return d; }

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

/** Normalize member input — accepts string name or partial object */
export function normalizeMember(m: any): TeamMember {
  const name = typeof m === "string" ? m : String(m?.name ?? "");
  if (!name) throw new Error("member name is required");
  return {
    name,
    color: typeof m?.color === "string" ? m.color : null,
    backendType: typeof m?.backendType === "string" ? m.backendType : "tmux",
    isActive: typeof m?.isActive === "boolean" ? m.isActive : null,
    tmuxPaneId: typeof m?.tmuxPaneId === "string" ? m.tmuxPaneId : "",
    model: typeof m?.model === "string" ? m.model : "",
    cwd: typeof m?.cwd === "string" ? m.cwd : undefined,
    agentType: typeof m?.agentType === "string" ? m.agentType : undefined,
    joinedAt: typeof m?.joinedAt === "number" ? m.joinedAt : Date.now(),
  };
}

export function saveTask(teamName: string, task: TaskData): void {
  const dir = tasksDir(teamName);
  mkdirSync(dir, { recursive: true });
  const taskPath = join(dir, `${sanitizeName(task.id)}.json`);
  assertInsideDir(dir, taskPath);
  writeFileSync(taskPath, JSON.stringify(task, null, 2) + "\n");
}

export function loadTask(teamName: string, taskId: string): TaskData | null {
  const dir = tasksDir(teamName);
  const p = join(dir, `${sanitizeName(taskId)}.json`);
  assertInsideDir(dir, p);
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
  const members: TeamMember[] = (opts.members || []).map(m => normalizeMember(m));
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
