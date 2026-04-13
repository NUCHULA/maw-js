/**
 * maw log — Activity log CLI (reads/writes via forge-dashboard API :3457)
 *
 * Usage:
 *   maw log                          — show my recent activity
 *   maw log --agent proof            — show specific agent
 *   maw log --action deploy          — filter by action
 *   maw log --limit 20              — limit results
 *   maw log add <action> <detail>    — add entry (auto-detects agent from cwd)
 */

const DASHBOARD_API = process.env.DASHBOARD_API || "http://127.0.0.1:3457";

function detectAgent(): string {
  const base = process.cwd().split("/").pop() || "";
  const name = base.replace(/-nj-engine$/, "").replace(/-oracle$/, "");
  return name || "unknown";
}

export async function cmdLogList(opts: { agent?: string; action?: string; limit?: number }) {
  const params = new URLSearchParams();
  if (opts.agent) params.set("agent", opts.agent);
  if (opts.action) params.set("action", opts.action);
  params.set("limit", String(opts.limit || 15));

  const res = await fetch(`${DASHBOARD_API}/api/log?${params}`);
  if (!res.ok) {
    console.error(`\x1b[31m✗\x1b[0m Dashboard API unreachable (${DASHBOARD_API})`);
    process.exit(1);
  }

  const rows = await res.json() as any[];
  if (rows.length === 0) {
    console.log("\x1b[90mNo activity\x1b[0m");
    return;
  }

  console.log();
  console.log(`  \x1b[36;1m${"TIME".padEnd(14)}${"AGENT".padEnd(10)}${"ACTION".padEnd(14)}DETAIL\x1b[0m`);

  for (const r of rows) {
    const ts = new Date(r.ts);
    const time = `${String(ts.getHours()).padStart(2, "0")}:${String(ts.getMinutes()).padStart(2, "0")} ${String(ts.getMonth() + 1).padStart(2, "0")}/${String(ts.getDate()).padStart(2, "0")}`;
    const actionColor = r.action === "task-done" || r.action === "done" ? "\x1b[32m"
      : r.action === "blocked" || r.action === "error" ? "\x1b[31m"
      : r.action === "deploy" ? "\x1b[36m"
      : "\x1b[0m";
    console.log(`  ${time.padEnd(14)}${(r.agent || "?").padEnd(10)}${actionColor}${(r.action || "?").padEnd(14)}\x1b[0m${(r.detail || "").slice(0, 60)}`);
  }
  console.log();
}

export async function cmdLogAdd(action: string, detail: string, opts: { agent?: string; project?: string }) {
  const agent = opts.agent || detectAgent();

  const VALID = new Set(["task-start", "task-done", "blocked", "escalate", "deploy", "learning", "decision", "done", "start", "received", "error", "learn"]);
  if (!VALID.has(action)) {
    console.error(`\x1b[31m✗\x1b[0m Invalid action: ${action}`);
    console.error(`  Valid: ${[...VALID].join(", ")}`);
    process.exit(1);
  }

  const res = await fetch(`${DASHBOARD_API}/api/log`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ agent, action, detail, project: opts.project || null }),
  });

  if (!res.ok) {
    console.error(`\x1b[31m✗\x1b[0m Failed to log activity`);
    process.exit(1);
  }

  const data = await res.json() as any;
  console.log(`\x1b[32m✓\x1b[0m logged: \x1b[33m${agent}\x1b[0m ${action} — ${detail.slice(0, 60)}`);
}
