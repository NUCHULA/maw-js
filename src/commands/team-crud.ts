/**
 * Team CRUD operations + task management + dispatch.
 * Extends upstream team.ts (shutdown/list/zombie) with create/delete/task.
 * NUCHULA patch — kept separate from upstream team.ts to minimize merge conflicts.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { homedir, hostname } from "os";
import { scanTeams } from "../engine/teams";
import { pushFeedEvent } from "../api/feed";
import type { FeedEvent } from "../lib/feed";

const TEAMS_DIR = join(homedir(), ".claude/teams");
const TASKS_DIR = join(homedir(), ".claude/tasks");

// --- Interfaces ---

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
  dispatched_by?: string | null;
}

// --- Validation ---

export function sanitizeName(name: string): string {
  if (!name || typeof name !== "string") throw new Error("name is required");
  if (/[\/\\]|\.\./.test(name)) throw new Error("invalid name: must not contain / \\ or ..");
  const trimmed = name.trim();
  if (!trimmed || trimmed.length > 100) throw new Error("invalid name: empty or too long");
  return trimmed;
}

function assertInsideDir(base: string, target: string): void {
  const resolved = resolve(target);
  if (!resolved.startsWith(resolve(base) + "/") && resolved !== resolve(base)) {
    throw new Error(`path escape detected: ${resolved} is outside ${base}`);
  }
}

// --- Path helpers ---

export function teamDir(name: string) { const d = join(TEAMS_DIR, sanitizeName(name)); assertInsideDir(TEAMS_DIR, d); return d; }
export function tasksDir(name: string) { const d = join(TASKS_DIR, sanitizeName(name)); assertInsideDir(TASKS_DIR, d); return d; }

// --- CRUD ---

export function loadTeamConfig(name: string): TeamConfig | null {
  const p = join(teamDir(name), "config.json");
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, "utf-8")); }
  catch { return null; }
}

export function saveTeamConfig(config: TeamConfig): void {
  const dir = teamDir(config.name);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "config.json"), JSON.stringify(config, null, 2) + "\n");
}

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

// --- Dispatch ---

/** Detect current oracle name from cwd (e.g. /root/.../keeper-nj-engine → keeper) */
function detectSender(): string {
  try {
    const cwd = process.cwd();
    const base = cwd.split("/").pop() || "";
    const name = base.replace(/-nj-engine$/, "").replace(/-oracle$/, "");
    return name || "unknown";
  } catch { return "unknown"; }
}

export async function dispatchTask(teamName: string, task: TaskData, sender?: string): Promise<boolean> {
  if (!task.owner) return false;
  const agent = task.owner;
  try {
    const { cmdWake } = await import("./wake");
    const { cmdSend } = await import("./comm");

    // Record who dispatched this task
    task.dispatched_by = sender || detectSender();

    console.log(`\x1b[36m\u21bb\x1b[0m waking \x1b[33m${agent}\x1b[0m ...`);
    await cmdWake(agent, {});

    console.log(`\x1b[36m\u21bb\x1b[0m sending task to \x1b[33m${agent}\x1b[0m ...`);
    await cmdSend(agent, `[task:${task.id}] ${task.subject}`, true);

    task.status = "in_progress";
    saveTask(teamName, task);

    pushFeedEvent({
      timestamp: new Date().toISOString(),
      oracle: agent,
      host: hostname(),
      event: "Notification",
      project: teamName,
      sessionId: task.id,
      message: `Task dispatched: "${task.subject}" → ${agent}`,
      ts: Date.now(),
    });

    console.log(`\x1b[32m\u2713\x1b[0m dispatched to \x1b[33m${agent}\x1b[0m \u2014 status \u2192 in_progress`);
    return true;
  } catch (e: any) {
    console.error(`\x1b[31m\u2717\x1b[0m dispatch to \x1b[33m${agent}\x1b[0m failed: ${e.message}`);
    return false;
  }
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

export async function cmdTeamDelete(name: string) {
  if (!loadTeamConfig(name)) {
    console.error(`\x1b[31m\u2717\x1b[0m team \x1b[33m${name}\x1b[0m not found`);
    process.exit(1);
  }
  rmSync(teamDir(name), { recursive: true, force: true });
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

  if (opts.assign) {
    await dispatchTask(teamName, task);
  }
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
