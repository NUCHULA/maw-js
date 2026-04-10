import { Hono } from "hono";
import { readFileSync, readdirSync, rmSync, existsSync } from "fs";
import { join } from "path";
import { scanTeams } from "../engine/teams";
import { sanitizeName, normalizeMember, loadTeamConfig, saveTeamConfig, saveTask, loadTask, teamDir, tasksDir } from "../commands/team";

export const teamsApi = new Hono();

teamsApi.get("/teams", async (c) => {
  const teams = await scanTeams();
  return c.json({ teams, total: teams.length });
});

teamsApi.get("/teams/:name", (c) => {
  try {
    const config = loadTeamConfig(c.req.param("name"));
    if (!config) return c.json({ error: "team not found" }, 404);
    return c.json(config);
  } catch (e: any) { return c.json({ error: e.message }, 400); }
});

teamsApi.get("/teams/:name/tasks", (c) => {
  try {
    const name = c.req.param("name");
    const dir = tasksDir(name);
    const files = readdirSync(dir).filter(f => f.endsWith(".json"));
    const tasks = files.map(f => {
      try { return JSON.parse(readFileSync(join(dir, f), "utf-8")); }
      catch { return null; }
    }).filter(Boolean);
    return c.json({ tasks, total: tasks.length });
  } catch { return c.json({ tasks: [], total: 0 }); }
});

teamsApi.post("/teams", async (c) => {
  try {
    const body = await c.req.json();
    const { name, description, members } = body;
    if (!name) return c.json({ error: "name is required" }, 400);
    const safeName = sanitizeName(name);
    if (loadTeamConfig(safeName)) return c.json({ error: "team already exists" }, 409);
    const config = {
      name: safeName,
      description: description || "",
      members: (members || []).map((m: any) => normalizeMember(m)),
      createdAt: Date.now(),
    };
    saveTeamConfig(config);
    return c.json({ ok: true, team: config }, 201);
  } catch (e: any) { return c.json({ error: e.message }, 400); }
});

teamsApi.delete("/teams/:name", (c) => {
  try {
    const name = c.req.param("name");
    if (!loadTeamConfig(name)) return c.json({ error: "team not found" }, 404);
    const td = teamDir(name);
    const tkd = tasksDir(name);
    rmSync(td, { recursive: true, force: true });
    if (existsSync(tkd)) rmSync(tkd, { recursive: true, force: true });
    return c.json({ ok: true });
  } catch (e: any) { return c.json({ error: e.message }, 400); }
});

teamsApi.post("/teams/:name/tasks", async (c) => {
  try {
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
  } catch (e: any) { return c.json({ error: e.message }, 400); }
});

teamsApi.patch("/teams/:name/tasks/:id", async (c) => {
  try {
    const name = c.req.param("name");
    const id = c.req.param("id");
    const task = loadTask(name, id);
    if (!task) return c.json({ error: "task not found" }, 404);
    const body = await c.req.json();
    if (body.status) task.status = body.status;
    if (body.owner !== undefined) task.owner = body.owner;
    saveTask(name, task);
    return c.json({ ok: true, task });
  } catch (e: any) { return c.json({ error: e.message }, 400); }
});
