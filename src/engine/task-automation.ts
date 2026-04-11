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
  dispatched_by?: string | null;
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

const NJ_SENDERS = new Set(["nj", "j", "forge", "api"]);
const NJ_INBOX = "/data/workspace/nj-inbox";
const TASK_LOG = "/data/workspace/reports/task-log.jsonl";

// --- Hierarchy map: agent → dept_head → forge → nj-inbox ---
const DEPT_HEADS: Record<string, string> = {
  // engineering
  hammer: "keeper", mill: "keeper", clock: "keeper",
  // qa
  audit: "proof", whet: "proof",
  // rnd
  lens: "scout", sage: "scout", weave: "scout",
  // hr
  mold: "mirror", anvil: "mirror",
  // comms
  bridge: "voice", cipher: "voice", pact: "voice",
  // creative
  draft: "spark",
  // intel
  sieve: "watch", tag: "watch",
};
const DEPT_HEAD_SET = new Set(["keeper", "proof", "scout", "mirror", "voice", "spark", "watch"]);

function getReportTarget(agent: string): string | null {
  // agent → dept_head
  if (DEPT_HEADS[agent]) return DEPT_HEADS[agent];
  // dept_head → forge
  if (DEPT_HEAD_SET.has(agent)) return "forge";
  // forge → nj-inbox (handled separately)
  if (agent === "forge") return null; // special: writes nj-inbox
  return null;
}

/** Append task completion to JSONL log */
function logTaskCompletion(task: TaskData, teamName: string, agent: string): void {
  try {
    const { appendFileSync, mkdirSync } = require("fs");
    const { dirname } = require("path");
    mkdirSync(dirname(TASK_LOG), { recursive: true });
    const entry = {
      ts: new Date().toISOString(),
      team: teamName,
      task_id: task.id,
      subject: task.subject,
      owner: agent,
      dispatched_by: task.dispatched_by || null,
      status: "completed",
      duration_ms: task.createdAt ? Date.now() - task.createdAt : null,
    };
    appendFileSync(TASK_LOG, JSON.stringify(entry) + "\n");
  } catch (e: any) {
    console.error(`[report] task-log write failed: ${e.message}`);
  }
}

/** Report up 1 level in hierarchy */
async function reportUpward(agent: string, task: TaskData, teamName: string): Promise<void> {
  const target = getReportTarget(agent);

  // forge → nj-inbox
  if (agent === "forge") {
    try {
      const { mkdirSync, writeFileSync } = require("fs");
      mkdirSync(NJ_INBOX, { recursive: true });
      const file = join(NJ_INBOX, `${agent}-report-${task.id.slice(0, 12)}.md`);
      writeFileSync(file, [
        `# Report: ${task.subject}`,
        `**From**: ${agent} (upward report)`,
        `**Team**: ${teamName}`,
        `**Task**: ${task.id}`,
        `**Completed**: ${new Date().toISOString()}`,
        "",
      ].join("\n"));
      console.log(`\x1b[32m✓\x1b[0m [report] forge → nj-inbox`);
    } catch (e: any) {
      console.error(`\x1b[31m✗\x1b[0m [report] nj-inbox failed: ${e.message}`);
    }
    return;
  }

  if (!target) return;

  try {
    const { cmdSend } = await import("../commands/comm");
    const msg = `📊 ${agent} completed "${task.subject}" (${teamName})`;
    await cmdSend(target, msg, true);
    console.log(`\x1b[32m✓\x1b[0m [report] ${agent} → ${target}`);
  } catch (e: any) {
    console.error(`\x1b[31m✗\x1b[0m [report] ${agent} → ${target} failed: ${e.message}`);
  }
}

/** Send feedback to the person who dispatched the task */
async function feedbackToSender(task: TaskData, teamName: string, agent: string, outputPath?: string): Promise<void> {
  const sender = task.dispatched_by;
  if (!sender) return;

  const summary = `✅ ${agent} completed "${task.subject}" (${teamName})${outputPath ? ` → ${outputPath}` : ""}`;

  // Write to nj-inbox if sender is NJ/J/forge/api
  if (NJ_SENDERS.has(sender.toLowerCase())) {
    try {
      const { mkdirSync, writeFileSync } = require("fs");
      mkdirSync(NJ_INBOX, { recursive: true });
      const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
      const file = join(NJ_INBOX, `${agent}-${task.id.slice(0, 12)}.md`);
      writeFileSync(file, [
        `# Task Completed: ${task.subject}`,
        `**From**: ${agent}`,
        `**Team**: ${teamName}`,
        `**Task ID**: ${task.id}`,
        `**Dispatched by**: ${sender}`,
        `**Completed**: ${new Date().toISOString()}`,
        "",
        `## Result`,
        outputPath ? `Output saved to: \`${outputPath}\`` : "Task completed successfully.",
        "",
      ].join("\n"));
      console.log(`\x1b[32m✓\x1b[0m [feedback] wrote ${file}`);
    } catch (e: any) {
      console.error(`\x1b[31m✗\x1b[0m [feedback] nj-inbox write failed: ${e.message}`);
    }
  }

  // maw hey back to sender agent (if sender is an oracle agent, not nj/j/api)
  if (!NJ_SENDERS.has(sender.toLowerCase())) {
    try {
      const { cmdSend } = await import("../commands/comm");
      await cmdSend(sender, summary, true);
      console.log(`\x1b[32m✓\x1b[0m [feedback] maw hey → ${sender}`);
    } catch (e: any) {
      console.error(`\x1b[31m✗\x1b[0m [feedback] maw hey ${sender} failed: ${e.message}`);
    }
  }
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

/** Call record-learning.sh to append learning to agent's CLAUDE.md */
function recordLearning(agent: string, learning: string): void {
  try {
    const { execSync } = require("child_process");
    const date = new Date().toISOString().slice(0, 10);
    const safe = learning.replace(/"/g, '\\"').replace(/\n/g, " ").slice(0, 200);
    execSync(`bash /data/workspace/scripts/record-learning.sh "${agent}" "${date}" "${safe}"`, { timeout: 5000 });
    console.log(`\x1b[33m📝\x1b[0m [learning] recorded for ${agent}`);
  } catch (e: any) {
    console.error(`\x1b[31m✗\x1b[0m [learning] record failed: ${e.message}`);
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
        recordLearning(event.oracle, `Task "${active.subject}" failed: ${event.message?.slice(0, 150) || "unknown error"}`);
        console.log(`\x1b[31m⚠\x1b[0m [task-auto] critical alert + learning recorded for ${event.oracle}`);
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

    // Log to JSONL
    logTaskCompletion(active, team.name, agent);

    // Feedback chain: notify whoever dispatched this task
    feedbackToSender(active, team.name, agent).catch(e =>
      console.error(`\x1b[31m✗\x1b[0m [feedback] failed: ${e.message}`)
    );

    // Report up 1 level in hierarchy
    reportUpward(agent, active, team.name).catch(e =>
      console.error(`\x1b[31m✗\x1b[0m [report] upward failed: ${e.message}`)
    );

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
