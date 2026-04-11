/**
 * Task automation: auto-complete on Stop + chaining + notifications.
 *
 * Listens for feed events:
 * - Stop / SessionEnd / SubagentStop → mark agent's in_progress task as completed
 * - On completion → dispatch next pending task in same team (if any)
 * - On completion → push Notification (attention) to Inbox via feed
 * - On critical (fail/error) → publish MQTT to oracle/claude/request for LINE alert
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

/** Count completed/total tasks in a team */
function taskProgress(tasks: TaskData[]): string {
  const done = tasks.filter(t => t.status === "completed").length;
  return `${done}/${tasks.length}`;
}

/** Push Inbox notification (Notification event with "attention" keyword → UI auto-creates ask) */
function notifyInbox(agent: string, message: string, teamName: string, taskId: string): void {
  pushFeedEvent({
    timestamp: new Date().toISOString(),
    oracle: agent,
    host: hostname(),
    event: "Notification",
    project: teamName,
    sessionId: taskId,
    message: `[attention] ${message}`,
    ts: Date.now(),
  });
}

/** Publish critical alert to MQTT for LINE notification via claude-bridge */
function publishMqttAlert(message: string): void {
  try {
    const mqtt = require("mqtt");
    const { loadConfig } = require("../config");
    const config = loadConfig();
    const broker = config.mqtt?.broker;
    if (!broker) return;
    const client = mqtt.connect(broker, { connectTimeout: 3000 });
    client.on("connect", () => {
      client.publish("oracle/claude/request", JSON.stringify({
        type: "line_notify",
        message,
        ts: Date.now(),
      }), { qos: 1 }, () => {
        client.end();
      });
    });
    client.on("error", () => client.end());
    // Auto-close after 5s if connect hangs
    setTimeout(() => { try { client.end(); } catch {} }, 5000);
  } catch (e) {
    console.error(`[task-auto] MQTT publish failed: ${e}`);
  }
}

/**
 * Handle a feed event: auto-complete + chain + notify.
 * Called from feedListeners in engine.
 */
export function handleTaskAutomation(event: FeedEvent): void {
  // --- Critical alert: agent errors/failures → MQTT for LINE ---
  if (event.event === "PostToolUseFailure" || event.event === "Error") {
    // Check if this agent has an in_progress task
    const teams = loadTeamsWithTasks();
    for (const team of teams) {
      const active = team.tasks.find(t => t.owner === event.oracle && t.status === "in_progress");
      if (active) {
        const msg = `⚠️ ${event.oracle} error on task "${active.subject}" in ${team.name}: ${event.message?.slice(0, 100) || "unknown error"}`;
        publishMqttAlert(msg);
        notifyInbox(event.oracle, msg, team.name, active.id);
        console.log(`\x1b[31m⚠\x1b[0m [task-auto] critical alert sent for ${event.oracle}`);
        break;
      }
    }
    return;
  }

  if (!STOP_EVENTS.has(event.event)) return;
  // Skip self-generated events (from task automation itself)
  if (event.message?.startsWith("Task auto-completed:") || event.message?.startsWith("Task dispatched:")) return;
  if (event.message?.startsWith("[attention]")) return;

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

    // Chain: find next pending task in this team for same agent
    const nextForAgent = team.tasks.find(t => t.owner === agent && t.status === "pending");
    const nextAny = team.tasks.find(t => t.status === "pending" && t.owner);
    const next = nextForAgent || nextAny;

    // --- Inbox notification ---
    const progress = taskProgress(team.tasks);
    let inboxMsg = `${agent} completed "${active.subject}" (${team.name} ${progress})`;
    if (next && next.owner) {
      inboxMsg += ` → chaining "${next.subject}" to ${next.owner}`;
    }
    notifyInbox(agent, inboxMsg, team.name, active.id);

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
