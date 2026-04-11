/**
 * Task automation: auto-complete on Stop + chaining + notifications.
 * NUCHULA patch.
 */

import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { homedir, hostname } from "os";
import type { FeedEvent } from "../lib/feed";
import { pushFeedEvent } from "../api/feed";

const TEAMS_DIR = join(homedir(), ".claude/teams");
const TASKS_DIR = join(homedir(), ".claude/tasks");

const STOP_EVENTS = new Set(["Stop", "SessionEnd", "SubagentStop"]);

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

function taskProgress(tasks: TaskData[]): string {
  const done = tasks.filter(t => t.status === "completed").length;
  return `${done}/${tasks.length}`;
}

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
      }), { qos: 1 }, () => { client.end(); });
    });
    client.on("error", () => client.end());
    setTimeout(() => { try { client.end(); } catch {} }, 5000);
  } catch (e) {
    console.error(`[task-auto] MQTT publish failed: ${e}`);
  }
}

export function handleTaskAutomation(event: FeedEvent): void {
  // Critical alert: agent errors with active task → MQTT + Inbox
  if (event.event === "PostToolUseFailure" || event.event === "Error") {
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
  if (event.message?.startsWith("Task auto-completed:") || event.message?.startsWith("Task dispatched:")) return;
  if (event.message?.startsWith("[attention]")) return;

  const agent = event.oracle;
  if (!agent) return;

  const now = Date.now();
  const last = lastProcessed.get(agent) || 0;
  if (now - last < DEBOUNCE_MS) return;
  lastProcessed.set(agent, now);

  const teams = loadTeamsWithTasks();

  for (const team of teams) {
    const active = team.tasks.find(t => t.owner === agent && t.status === "in_progress");
    if (!active) continue;

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

    const nextForAgent = team.tasks.find(t => t.owner === agent && t.status === "pending");
    const nextAny = team.tasks.find(t => t.status === "pending" && t.owner);
    const next = nextForAgent || nextAny;

    const progress = taskProgress(team.tasks);
    let inboxMsg = `${agent} completed "${active.subject}" (${team.name} ${progress})`;
    if (next && next.owner) {
      inboxMsg += ` → chaining "${next.subject}" to ${next.owner}`;
    }
    notifyInbox(agent, inboxMsg, team.name, active.id);

    if (next && next.owner) {
      dispatchNext(team.name, next).catch(e =>
        console.error(`\x1b[31m✗\x1b[0m [task-auto] chain dispatch failed: ${e.message}`)
      );
    }
  }
}

async function dispatchNext(teamName: string, task: TaskData): Promise<void> {
  const { dispatchTask } = await import("../commands/team-crud");
  console.log(`\x1b[36m↻\x1b[0m [task-auto] chaining → ${task.owner}: "${task.subject}"`);
  await dispatchTask(teamName, task);
}
