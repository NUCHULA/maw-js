/**
 * BVA contract tests for TaskData acceptance_criteria + report_to fields.
 * Tests: save/load round-trip (with + without new fields) and dispatch message format (3 cases).
 */
import { describe, it, expect, afterAll } from "bun:test";
import { existsSync, rmSync } from "fs";
import { join } from "path";
import { homedir } from "os";
import { saveTask, loadTask } from "./team-crud";

// Unique team name isolates test data from any live state
const TEST_TEAM = `bva-contract-${Date.now()}`;
const TASKS_BASE = join(homedir(), ".claude/tasks");

afterAll(() => {
  const dir = join(TASKS_BASE, TEST_TEAM);
  if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
});

// Mirror of dispatchTask message template (line 168 of team-crud.ts)
function buildMsg(task: {
  id: string;
  subject: string;
  acceptance_criteria?: string;
  report_to?: string;
}): string {
  return `[task:${task.id}] ${task.subject}${task.acceptance_criteria ? `\nDone when: ${task.acceptance_criteria}` : ""}${task.report_to ? `\nReport to: ${task.report_to}` : ""}`;
}

// ── Round-trip tests ──────────────────────────────────────────────────────────

describe("T1: saveTask/loadTask WITH acceptance_criteria + report_to", () => {
  it("persists both new fields and reads them back intact", () => {
    const task = {
      id: "t-bva-001",
      subject: "verify pipeline",
      status: "pending",
      owner: "keeper",
      createdAt: 1746057600000,
      acceptance_criteria: "all bun tests green",
      report_to: "forge",
    };
    saveTask(TEST_TEAM, task);
    const loaded = loadTask(TEST_TEAM, task.id);

    expect(loaded).not.toBeNull();
    expect(loaded!.acceptance_criteria).toBe("all bun tests green");
    expect(loaded!.report_to).toBe("forge");
    expect(loaded!.subject).toBe("verify pipeline");
    expect(loaded!.status).toBe("pending");
    expect(loaded!.owner).toBe("keeper");
  });
});

describe("T2: saveTask/loadTask WITHOUT new fields (backward compat)", () => {
  it("fields are absent from JSON — not present as undefined, truly absent", () => {
    const task = {
      id: "t-bva-002",
      subject: "legacy task",
      status: "pending",
      owner: null,
      createdAt: 1746057600000,
    };
    saveTask(TEST_TEAM, task);
    const loaded = loadTask(TEST_TEAM, task.id);

    expect(loaded).not.toBeNull();
    expect("acceptance_criteria" in loaded!).toBe(false);
    expect("report_to" in loaded!).toBe(false);
    // Verify core fields unaffected
    expect(loaded!.subject).toBe("legacy task");
    expect(loaded!.status).toBe("pending");
  });
});

// ── Dispatch message format tests ─────────────────────────────────────────────

describe("T3: dispatch message — BOTH fields set", () => {
  it("includes 'Done when:' and 'Report to:' lines", () => {
    const task = {
      id: "t-123",
      subject: "test task",
      acceptance_criteria: "X done when Y",
      report_to: "forge",
    };
    const msg = buildMsg(task);

    expect(msg).toContain("[task:t-123] test task");
    expect(msg).toContain("\nDone when: X done when Y");
    expect(msg).toContain("\nReport to: forge");
    // Exact structure: subject line, then Done when, then Report to
    expect(msg).toBe("[task:t-123] test task\nDone when: X done when Y\nReport to: forge");
  });
});

describe("T4: dispatch message — ONLY acceptance_criteria", () => {
  it("includes 'Done when:' but NOT 'Report to:'", () => {
    const task = {
      id: "t-124",
      subject: "partial task",
      acceptance_criteria: "X done when Z",
    };
    const msg = buildMsg(task);

    expect(msg).toContain("Done when: X done when Z");
    expect(msg).not.toContain("Report to:");
    expect(msg).toBe("[task:t-124] partial task\nDone when: X done when Z");
  });
});

describe("T5: dispatch message — NEITHER field (original format)", () => {
  it("produces exactly '[task:id] subject' with no extra lines", () => {
    const task = {
      id: "t-125",
      subject: "simple task",
    };
    const msg = buildMsg(task);

    expect(msg).toBe("[task:t-125] simple task");
    expect(msg).not.toContain("Done when:");
    expect(msg).not.toContain("Report to:");
    expect(msg).not.toContain("\n");
  });
});
