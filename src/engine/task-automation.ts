/**
 * Task automation: auto-complete on Stop + chaining to next pending task.
 *
 * Listens for feed events:
 * - Stop / SessionEnd / SubagentStop → mark agent's in_progress task as completed
 * - On completion → dispatch next pending task in same team (if any)
 */

import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { homedir, hostname } from "os";
import type { FeedEvent } from "../lib/feed";
import { pushFeedEvent } from "../api/feed";

const TEAMS_DIR = join(homedir(), ".claude/teams");
const TASKS_DIR = join(homedir(), ".claude/tasks");

const STOP_EVENTS = new Set(["Stop", "SessionEnd", "SubagentStop"]);

/** Debounce: avoid processing same agent Stop multiple times within 5s */
const lastProcessed = new Map<string, number>();
const DEBOUNCE_MS = 5_000;

interface TaskData {
  id: string;
  subject: string;
  status: string;
  owner: string | null;
  createdAt: number;
}

function loadTeamsWithTasks(): { name: string; tasks: TaskData[] }[] {
  try {
    const dirs = readdirSync(TEAMS_DIR).filter(d => {
      try { return require("fs").existsSync(join(TEAMS_DIR, d, "config.json")); }
      catch { return false; }
    });
    return dirs.map(d => {
      const td = join(TASKS_DIR, d);
      let tasks: TaskData[] = [];
      try {
        tasks = readdirSync(td)
          .filter(f => f.endsWith(".json"))
          .map(f => {
            try { return JSON.parse(readFileSync(join(td, f), "utf-8")); }
            catch { return null; }
          })
          .filter(Boolean);
      } catch { /* no tasks dir */ }
      return { name: d, tasks };
    });
  } catch { return []; }
}

function saveTask(teamName: string, task: TaskData): void {
  const { writeFileSync, mkdirSync } = require("fs");
  const dir = join(TASKS_DIR, teamName);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${task.id}.json`), JSON.stringify(task, null, 2) + "\n");
}

/**
 * Handle a feed event: auto-complete + chain.
 * Called from feedListeners in engine.
 */
export function handleTaskAutomation(event: FeedEvent): void {
  if (!STOP_EVENTS.has(event.event)) return;
  // Skip self-generated events (from task automation itself)
  if (event.message?.startsWith("Task auto-completed:") || event.message?.startsWith("Task dispatched:")) return;

  const agent = event.oracle; // e.g. "scout"
  if (!agent) return;

  // Debounce: avoid processing same agent Stop multiple times within window
  const now = Date.now();
  const last = lastProcessed.get(agent) || 0;
  if (now - last < DEBOUNCE_MS) return;
  lastProcessed.set(agent, now);

  const teams = loadTeamsWithTasks();

  for (const team of teams) {
    // Find in_progress task owned by this agent
    const active = team.tasks.find(t => t.owner === agent && t.status === "in_progress");
    if (!active) continue;

    // Auto-complete
    active.status = "completed";
    saveTask(team.name, active);

    console.log(`\x1b[32m✓\x1b[0m [task-auto] ${active.id} completed (agent ${agent} stopped)`);

    pushFeedEvent({
      timestamp: new Date().toISOString(),
      oracle: agent,
      host: hostname(),
      event: "TaskCompleted",
      project: team.name,
      sessionId: active.id,
      message: `Task auto-completed: "${active.subject}"`,
      ts: Date.now(),
    });

    // Chain: find next pending task in this team (any owner, or same agent preferred)
    const nextForAgent = team.tasks.find(t => t.owner === agent && t.status === "pending");
    const nextAny = team.tasks.find(t => t.status === "pending" && t.owner);
    const next = nextForAgent || nextAny;

    if (next && next.owner) {
      // Dispatch async (don't block feed listener)
      dispatchNext(team.name, next).catch(e =>
        console.error(`\x1b[31m✗\x1b[0m [task-auto] chain dispatch failed: ${e.message}`)
      );
    }
  }
}

async function dispatchNext(teamName: string, task: TaskData): Promise<void> {
  // Lazy import to avoid circular deps at module load time
  const { dispatchTask } = await import("../commands/team");
  console.log(`\x1b[36m↻\x1b[0m [task-auto] chaining → ${task.owner}: "${task.subject}"`);
  await dispatchTask(teamName, task);
}
