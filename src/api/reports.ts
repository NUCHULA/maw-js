import { Hono } from "hono";
import { existsSync, readFileSync } from "fs";

const TASK_LOG = "/data/workspace/reports/task-log.jsonl";

export const reportsApi = new Hono();

/** GET /reports/tasks — query task completion log
 *  ?team=xxx  — filter by team
 *  ?agent=xxx — filter by owner
 *  ?since=ISO — filter by date (>= since)
 *  ?limit=N   — max entries (default 100)
 */
reportsApi.get("/reports/tasks", (c) => {
  if (!existsSync(TASK_LOG)) return c.json({ entries: [], total: 0 });

  const team = c.req.query("team");
  const agent = c.req.query("agent");
  const since = c.req.query("since");
  const limit = Math.min(500, +(c.req.query("limit") || "100"));

  try {
    const lines = readFileSync(TASK_LOG, "utf-8").trim().split("\n").filter(Boolean);
    let entries = lines.map(line => {
      try { return JSON.parse(line); }
      catch { return null; }
    }).filter(Boolean);

    if (team) entries = entries.filter((e: any) => e.team === team);
    if (agent) entries = entries.filter((e: any) => e.owner === agent);
    if (since) entries = entries.filter((e: any) => e.ts >= since);

    // Newest first
    entries.reverse();
    const total = entries.length;
    entries = entries.slice(0, limit);

    return c.json({ entries, total });
  } catch {
    return c.json({ entries: [], total: 0 });
  }
});
