/**
 * team-api.test.ts — Team CRUD unit tests
 *
 * Tests team creation, loading, deletion, and shutdown request logic
 * using isolated temp directories via _setDirs().
 */
import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { mkdirSync, writeFileSync, readFileSync, existsSync, rmSync, readdirSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { loadTeam, writeShutdownRequest, _setDirs } from "../src/commands/team";

let testDir: string;
let teamsDir: string;
let tasksDir: string;

beforeEach(() => {
  testDir = join(tmpdir(), `maw-team-api-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  teamsDir = join(testDir, "teams");
  tasksDir = join(testDir, "tasks");
  mkdirSync(teamsDir, { recursive: true });
  mkdirSync(tasksDir, { recursive: true });
  _setDirs(teamsDir, tasksDir);
});

afterEach(() => {
  rmSync(testDir, { recursive: true, force: true });
});

function createTeamOnDisk(name: string, opts: { members?: any[]; description?: string } = {}) {
  const teamDir = join(teamsDir, name);
  mkdirSync(join(teamDir, "inboxes"), { recursive: true });
  writeFileSync(join(teamDir, "config.json"), JSON.stringify({
    name,
    description: opts.description || `test team ${name}`,
    members: opts.members || [],
    createdAt: Date.now(),
  }));
}

function createTaskOnDisk(teamName: string, taskId: string, task: Record<string, unknown>) {
  const dir = join(tasksDir, teamName);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${taskId}.json`), JSON.stringify({
    id: taskId,
    subject: "test task",
    status: "pending",
    owner: null,
    createdAt: Date.now(),
    ...task,
  }));
}

// ─── Team CRUD ───

describe("team CRUD operations", () => {
  test("create team → config.json written on disk", () => {
    createTeamOnDisk("alpha", {
      members: [{ name: "scout", agentType: "general-purpose" }],
      description: "alpha team",
    });
    const config = JSON.parse(readFileSync(join(teamsDir, "alpha/config.json"), "utf-8"));
    expect(config.name).toBe("alpha");
    expect(config.description).toBe("alpha team");
    expect(config.members).toHaveLength(1);
    expect(config.members[0].name).toBe("scout");
  });

  test("loadTeam returns created team", () => {
    createTeamOnDisk("bravo", { members: [{ name: "keeper", agentType: "general-purpose" }] });
    const team = loadTeam("bravo");
    expect(team).not.toBeNull();
    expect(team!.name).toBe("bravo");
    expect(team!.members).toHaveLength(1);
  });

  test("loadTeam returns null for non-existent", () => {
    expect(loadTeam("ghost")).toBeNull();
  });

  test("delete team → loadTeam returns null", () => {
    createTeamOnDisk("charlie");
    expect(loadTeam("charlie")).not.toBeNull();
    rmSync(join(teamsDir, "charlie"), { recursive: true, force: true });
    expect(loadTeam("charlie")).toBeNull();
  });

  test("delete team also removes tasks dir", () => {
    createTeamOnDisk("delta");
    createTaskOnDisk("delta", "t-001", { subject: "task 1" });
    expect(existsSync(join(tasksDir, "delta/t-001.json"))).toBe(true);
    rmSync(join(teamsDir, "delta"), { recursive: true, force: true });
    rmSync(join(tasksDir, "delta"), { recursive: true, force: true });
    expect(existsSync(join(tasksDir, "delta"))).toBe(false);
  });
});

// ─── Task file operations ───

describe("task file operations", () => {
  test("task JSON written correctly", () => {
    createTeamOnDisk("echo");
    createTaskOnDisk("echo", "t-100", { subject: "verify build", status: "pending", owner: "proof" });
    const task = JSON.parse(readFileSync(join(tasksDir, "echo/t-100.json"), "utf-8"));
    expect(task.id).toBe("t-100");
    expect(task.subject).toBe("verify build");
    expect(task.status).toBe("pending");
    expect(task.owner).toBe("proof");
  });

  test("multiple tasks for same team", () => {
    createTeamOnDisk("foxtrot");
    createTaskOnDisk("foxtrot", "t-a", { subject: "task A" });
    createTaskOnDisk("foxtrot", "t-b", { subject: "task B" });
    const files = readdirSync(join(tasksDir, "foxtrot")).filter(f => f.endsWith(".json"));
    expect(files).toHaveLength(2);
  });

  test("task status update persists", () => {
    createTeamOnDisk("golf");
    createTaskOnDisk("golf", "t-200", { subject: "deploy", status: "pending" });
    // Simulate status update
    const taskPath = join(tasksDir, "golf/t-200.json");
    const task = JSON.parse(readFileSync(taskPath, "utf-8"));
    task.status = "completed";
    writeFileSync(taskPath, JSON.stringify(task));
    const updated = JSON.parse(readFileSync(taskPath, "utf-8"));
    expect(updated.status).toBe("completed");
  });
});

// ─── Shutdown request ───

describe("shutdown request protocol", () => {
  test("creates inbox with correct structure", () => {
    createTeamOnDisk("hotel", { members: [{ name: "worker", agentType: "general-purpose" }] });
    writeShutdownRequest("hotel", "worker", "test shutdown");
    const inboxPath = join(teamsDir, "hotel/inboxes/worker.json");
    expect(existsSync(inboxPath)).toBe(true);
    const msgs = JSON.parse(readFileSync(inboxPath, "utf-8"));
    expect(msgs).toHaveLength(1);
    expect(msgs[0].from).toBe("maw-team-shutdown");
    expect(msgs[0].read).toBe(false);
    const payload = JSON.parse(msgs[0].text);
    expect(payload.type).toBe("shutdown_request");
    expect(payload.reason).toBe("test shutdown");
  });

  test("appends to existing messages without overwrite", () => {
    createTeamOnDisk("india", { members: [{ name: "agent", agentType: "general-purpose" }] });
    const inboxPath = join(teamsDir, "india/inboxes/agent.json");
    writeFileSync(inboxPath, JSON.stringify([
      { from: "lead", text: "hello", timestamp: "2026-01-01T00:00:00Z", read: true },
    ]));
    writeShutdownRequest("india", "agent", "shutting down");
    const msgs = JSON.parse(readFileSync(inboxPath, "utf-8"));
    expect(msgs).toHaveLength(2);
    expect(msgs[0].from).toBe("lead");
    expect(msgs[1].from).toBe("maw-team-shutdown");
  });
});

// ─── Path traversal guard ───

describe("path traversal safety", () => {
  test("team name with .. resolves outside teams dir (known vulnerability)", () => {
    // This test documents the path traversal issue flagged in PR #3 review.
    // loadTeam does NOT sanitize the name — join() resolves ".." components.
    const maliciousName = "../../etc";
    const resolved = join(teamsDir, maliciousName, "config.json");
    // The resolved path should NOT be inside teamsDir
    const normalizedTeamsDir = join(teamsDir, "/");
    expect(resolved.startsWith(normalizedTeamsDir)).toBe(false);
    // loadTeam should return null (file doesn't exist) but does NOT reject the traversal
    expect(loadTeam(maliciousName)).toBeNull();
  });
});
