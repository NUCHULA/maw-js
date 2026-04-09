import { Hono } from "hono";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { homedir } from "os";

export const deprecatedApi = new Hono();

// Token API stays removed
deprecatedApi.get("/tokens", (c) => c.json({ error: "removed — use /api/feed" }, 410));
deprecatedApi.get("/tokens/rate", (c) =>
  c.json({
    totalTokens: 0,
    totalPerMin: 0,
    inputPerMin: 0,
    outputPerMin: 0,
    inputTokens: 0,
    outputTokens: 0,
    turns: 0,
  }),
);

// /maw-log: read from ~/.oracle/maw-log.jsonl (filter chat-style entries with from/to/msg)
// Keeps ChatView (/#chat) working without requiring a rewrite to /api/feed.
const MAW_LOG_FILE = process.env.MAW_LOG_FILE || join(homedir(), ".oracle", "maw-log.jsonl");

deprecatedApi.get("/maw-log", (c) => {
  const limit = Math.min(2000, +(c.req.query("limit") || "500"));
  if (!existsSync(MAW_LOG_FILE)) {
    return c.json({ entries: [], total: 0 });
  }
  try {
    const raw = readFileSync(MAW_LOG_FILE, "utf-8");
    const lines = raw.trim().split("\n").filter(Boolean);
    const entries: any[] = [];
    for (const line of lines) {
      try {
        const e = JSON.parse(line);
        // Chat-style entries have from + to + msg
        if (e && typeof e === "object" && e.from && e.to && typeof e.msg === "string") {
          entries.push({
            ts: typeof e.ts === "string" ? new Date(e.ts).getTime() : e.ts,
            from: e.from,
            to: e.to,
            msg: e.msg,
            target: e.target || null,
            host: e.host || "local",
            ch: e.ch || null,
            sid: e.sid || null,
          });
        }
      } catch {
        // skip malformed line
      }
    }
    // Return newest-first, capped at limit
    const tail = entries.slice(-limit);
    return c.json({ entries: tail, total: entries.length });
  } catch (e: any) {
    return c.json({ entries: [], total: 0, error: e.message }, 500);
  }
});
