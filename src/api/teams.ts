import { Hono } from "hono";
import { readFileSync, readdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
import { homedir } from "os";
import { scanTeams } from "../engine/teams";
import { loadTeamConfig, saveTeamConfig, saveTask, loadTask } from "../commands/team";

export const teamsApi = new Hono();

teamsApi.get("/teams", async (c) => {
  const teams = await scanTeams();
  return c.json({ teams, total: teams.length });
});

teamsApi.get("/teams/:name", (c) => {
  const name = c.req.param("name");
  const configPath = join(homedir(), ".claude/teams", name, "config.json");
  try { return c.json(JSON.parse(readFileSync(configPath, "utf-8"))); }
  catch { return c.json({ error: "team not found" }, 404); }
});

teamsApi.get("/teams/:name/tasks", (c) => {
  const name = c.req.param("name");
  const tasksDir = join(homedir(), ".claude/tasks", name);
  try {
    const files = readdirSync(tasksDir).filter(f => f.endsWith(".json"));
    const tasks = files.map(f => {
      try { return JSON.parse(readFileSync(join(tasksDir, f), "utf-8")); }
      catch { return null; }
    }).filter(Boolean);
    return c.json({ tasks, total: tasks.length });
  } catch { return c.json({ tasks: [], total: 0 }); }
});

teamsApi.post("/teams", async (c) => {
  const body = await c.req.json();
  const { name, description, members } = body;
  if (!name) return c.json({ error: "name is required" }, 400);
  if (loadTeamConfig(name)) return c.json({ error: "team already exists" }, 409);
  const config = {
    name,
    description: description || "",
    members: (members || []).map((m: any) => ({
      name: typeof m === "string" ? m : m.name,
      color: m.color ?? null,
      backendType: m.backendType ?? "tmux",
      isActive: m.isActive ?? null,
      tmuxPaneId: m.tmuxPaneId ?? "",
      model: m.model ?? "",
      cwd: m.cwd,
      agentType: m.agentType,
      joinedAt: m.joinedAt ?? Date.now(),
    })),
    createdAt: Date.now(),
  };
  saveTeamConfig(config);
  return c.json({ ok: true, team: config }, 201);
});

teamsApi.delete("/teams/:name", (c) => {
  const name = c.req.param("name");
  if (!loadTeamConfig(name)) return c.json({ error: "team not found" }, 404);
  const { rmSync } = require("fs");
  const teamDir = join(homedir(), ".claude/teams", name);
  const tasksDir = join(homedir(), ".claude/tasks", name);
  rmSync(teamDir, { recursive: true, force: true });
  if (existsSync(tasksDir)) rmSync(tasksDir, { recursive: true, force: true });
  return c.json({ ok: true });
});

teamsApi.post("/teams/:name/tasks", async (c) => {
  const name = c.req.param("name");
  if (!loadTeamConfig(name)) return c.json({ error: "team not found" }, 404);
  const body = await c.req.json();
  const { subject, owner } = body;
  if (!subject) return c.json({ error: "subject is required" }, 400);
  const task = {
    id: `t-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    subject,
    status: "pending",
    owner: owner || null,
    createdAt: Date.now(),
  };
  saveTask(name, task);
  return c.json({ ok: true, task }, 201);
});

teamsApi.patch("/teams/:name/tasks/:id", async (c) => {
  const name = c.req.param("name");
  const id = c.req.param("id");
  const task = loadTask(name, id);
  if (!task) return c.json({ error: "task not found" }, 404);
  const body = await c.req.json();
  if (body.status) task.status = body.status;
  if (body.owner !== undefined) task.owner = body.owner;
  saveTask(name, task);
  return c.json({ ok: true, task });
});
