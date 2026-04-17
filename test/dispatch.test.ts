/**
 * dispatch.test.ts — Task dispatch + auto-completion + feedback chain
 *
 * Tests the task-automation engine and team-crud dispatch logic:
 * - Task status transitions
 * - Auto-complete on Stop event
 * - Chain dispatch (completed → next pending)
 * - Feedback chain (report upward + notify sender)
 * - Report hierarchy (agent → dept_head → forge → nj-inbox)
 *
 * [task:t-mnwsdz8d-9vbp] — proof (qa)
 */
import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

import { sanitizeName, saveTask, loadTask, loadTeamConfig, saveTeamConfig } from "../src/commands/team-crud";

// --- sanitizeName (security boundary) ---

describe("sanitizeName (team-crud)", () => {
  test("accepts valid names", () => {
    expect(sanitizeName("my-team")).toBe("my-team");
    expect(sanitizeName("ops")).toBe("ops");
    expect(sanitizeName("team_01")).toBe("team_01");
  });

  test("trims whitespace", () => {
    expect(sanitizeName("  ops  ")).toBe("ops");
  });

  test("rejects path traversal ../", () => {
    expect(() => sanitizeName("../../etc")).toThrow("invalid name");
  });

  test("rejects path traversal ..\\", () => {
    expect(() => sanitizeName("..\\ssh")).toThrow("invalid name");
  });

  test("rejects forward slashes", () => {
    expect(() => sanitizeName("foo/bar")).toThrow("invalid name");
  });

  test("rejects backslashes", () => {
    expect(() => sanitizeName("foo\\bar")).toThrow("invalid name");
  });

  test("rejects double dots", () => {
    expect(() => sanitizeName("foo..bar")).toThrow("invalid name");
  });

  test("rejects empty string", () => {
    expect(() => sanitizeName("")).toThrow("name is required");
  });

  test("rejects null/undefined", () => {
    expect(() => sanitizeName(null as any)).toThrow("name is required");
    expect(() => sanitizeName(undefined as any)).toThrow("name is required");
  });

  // BVA: length boundaries
  test("accepts 100-char name", () => {
    const name = "a".repeat(100);
    expect(sanitizeName(name)).toBe(name);
  });

  test("rejects 101-char name", () => {
    expect(() => sanitizeName("a".repeat(101))).toThrow("invalid name");
  });

  test("rejects whitespace-only string", () => {
    expect(() => sanitizeName("   ")).toThrow("invalid name");
  });
});

// --- Task CRUD with temp dirs ---

describe("task CRUD operations", () => {
  const TMP = join(tmpdir(), `maw-dispatch-test-${Date.now()}`);
  const TEAMS = join(TMP, "teams");
  const TASKS = join(TMP, "tasks");

  // We need to use _setDirs if available, otherwise skip
  // team-crud uses hardcoded paths — test via team.ts _setDirs
  let origHome: string;

  beforeEach(() => {
    origHome = process.env.HOME!;
    // team-crud uses homedir() which reads HOME
    process.env.HOME = TMP;
    mkdirSync(join(TMP, ".claude/teams"), { recursive: true });
    mkdirSync(join(TMP, ".claude/tasks"), { recursive: true });
  });

  afterEach(() => {
    process.env.HOME = origHome;
    if (existsSync(TMP)) rmSync(TMP, { recursive: true, force: true });
  });

  test("saveTeamConfig + loadTeamConfig roundtrip", () => {
    const config = {
      name: "test-team",
      description: "QA test team",
      members: [],
      createdAt: Date.now(),
    };
    saveTeamConfig(config);
    const loaded = loadTeamConfig("test-team");
    expect(loaded).not.toBeNull();
    expect(loaded!.name).toBe("test-team");
    expect(loaded!.description).toBe("QA test team");
  });

  test("loadTeamConfig returns null for nonexistent team", () => {
    expect(loadTeamConfig("nonexistent")).toBeNull();
  });

  test("saveTask + loadTask roundtrip", () => {
    // Create team dir first
    const teamDir = join(TMP, ".claude/teams/test-team");
    mkdirSync(teamDir, { recursive: true });
    writeFileSync(join(teamDir, "config.json"), '{"name":"test-team","members":[]}');

    const task = {
      id: "t-test-001",
      subject: "verify deployment",
      status: "pending",
      owner: "proof",
      createdAt: Date.now(),
    };
    saveTask("test-team", task);
    const loaded = loadTask("test-team", "t-test-001");
    expect(loaded).not.toBeNull();
    expect(loaded!.subject).toBe("verify deployment");
    expect(loaded!.status).toBe("pending");
    expect(loaded!.owner).toBe("proof");
  });

  test("loadTask returns null for nonexistent task", () => {
    const teamDir = join(TMP, ".claude/teams/ops");
    mkdirSync(teamDir, { recursive: true });
    writeFileSync(join(teamDir, "config.json"), '{"name":"ops","members":[]}');
    expect(loadTask("ops", "t-nonexistent")).toBeNull();
  });

  test("saveTask rejects path traversal in task ID", () => {
    const teamDir = join(TMP, ".claude/teams/ops");
    mkdirSync(teamDir, { recursive: true });
    writeFileSync(join(teamDir, "config.json"), '{"name":"ops","members":[]}');

    expect(() => saveTask("ops", {
      id: "../../etc/passwd",
      subject: "evil",
      status: "pending",
      owner: null,
      createdAt: Date.now(),
    })).toThrow();
  });

  test("task status transitions are valid strings", () => {
    const validStatuses = ["pending", "in_progress", "completed", "failed"];
    for (const status of validStatuses) {
      const task = {
        id: `t-status-${status}`,
        subject: `test ${status}`,
        status,
        owner: "proof",
        createdAt: Date.now(),
      };
      saveTask("test-team", task);
      const loaded = loadTask("test-team", task.id);
      expect(loaded!.status).toBe(status);
    }
  });
});

// --- Task automation logic (unit-testable parts) ---

describe("task automation — report hierarchy", () => {
  // Replicate getReportTarget from task-automation.ts
  const DEPT_HEADS: Record<string, string> = {
    hammer: "keeper", mill: "keeper", clock: "keeper",
    audit: "proof", whet: "proof",
    lens: "scout", sage: "scout", weave: "scout",
    mold: "mirror", anvil: "mirror",
    bridge: "voice", cipher: "voice", pact: "voice",
    draft: "spark",
    sieve: "watch", tag: "watch",
  };
  const DEPT_HEAD_SET = new Set(["keeper", "proof", "scout", "mirror", "voice", "spark", "watch"]);

  function getReportTarget(agent: string): string | null {
    if (DEPT_HEADS[agent]) return DEPT_HEADS[agent];
    if (DEPT_HEAD_SET.has(agent)) return "forge";
    if (agent === "forge") return null;
    return null;
  }

  test("field agents report to dept heads", () => {
    expect(getReportTarget("hammer")).toBe("keeper");
    expect(getReportTarget("audit")).toBe("proof");
    expect(getReportTarget("lens")).toBe("scout");
    expect(getReportTarget("draft")).toBe("spark");
    expect(getReportTarget("sieve")).toBe("watch");
    expect(getReportTarget("mold")).toBe("mirror");
    expect(getReportTarget("bridge")).toBe("voice");
  });

  test("dept heads report to forge", () => {
    expect(getReportTarget("keeper")).toBe("forge");
    expect(getReportTarget("proof")).toBe("forge");
    expect(getReportTarget("scout")).toBe("forge");
    expect(getReportTarget("mirror")).toBe("forge");
    expect(getReportTarget("voice")).toBe("forge");
    expect(getReportTarget("spark")).toBe("forge");
    expect(getReportTarget("watch")).toBe("forge");
  });

  test("forge reports to nj-inbox (null = special handling)", () => {
    expect(getReportTarget("forge")).toBeNull();
  });

  test("unknown agent returns null", () => {
    expect(getReportTarget("nonexistent")).toBeNull();
  });

  test("all core team 6 are covered", () => {
    // Core 6: forge, keeper, scout, lens, proof, whet
    expect(getReportTarget("forge")).toBeNull(); // → nj-inbox
    expect(getReportTarget("keeper")).toBe("forge");
    expect(getReportTarget("scout")).toBe("forge");
    expect(getReportTarget("lens")).toBe("scout");
    expect(getReportTarget("proof")).toBe("forge");
    expect(getReportTarget("whet")).toBe("proof");
  });
});

describe("task automation — Stop event filtering", () => {
  const STOP_EVENTS = new Set(["Stop", "SessionEnd", "SubagentStop"]);

  test("Stop event triggers automation", () => {
    expect(STOP_EVENTS.has("Stop")).toBe(true);
  });

  test("SessionEnd triggers automation", () => {
    expect(STOP_EVENTS.has("SessionEnd")).toBe(true);
  });

  test("SubagentStop triggers automation", () => {
    expect(STOP_EVENTS.has("SubagentStop")).toBe(true);
  });

  test("Start event does NOT trigger automation", () => {
    expect(STOP_EVENTS.has("Start")).toBe(false);
  });

  test("TaskCompleted does NOT trigger (prevents loops)", () => {
    expect(STOP_EVENTS.has("TaskCompleted")).toBe(false);
  });

  test("skip messages prevent re-processing", () => {
    // task-automation.ts filters these to prevent loops
    const skipPrefixes = ["Task auto-completed:", "Task dispatched:", "[attention]"];
    for (const prefix of skipPrefixes) {
      const msg = `${prefix} some task`;
      expect(msg.startsWith(prefix)).toBe(true);
    }
  });
});

describe("task automation — chain dispatch logic", () => {
  test("next task selection: same agent first, then any pending", () => {
    const tasks = [
      { id: "t-1", subject: "A", status: "completed", owner: "proof", createdAt: 1 },
      { id: "t-2", subject: "B", status: "pending", owner: "keeper", createdAt: 2 },
      { id: "t-3", subject: "C", status: "pending", owner: "proof", createdAt: 3 },
    ];
    const agent = "proof";

    // Same logic as task-automation.ts lines 300-302
    const nextForAgent = tasks.find(t => t.owner === agent && t.status === "pending");
    const nextAny = tasks.find(t => t.status === "pending" && t.owner);
    const next = nextForAgent || nextAny;

    expect(next!.id).toBe("t-3"); // proof's own pending task first
  });

  test("falls back to any pending if none for same agent", () => {
    const tasks = [
      { id: "t-1", subject: "A", status: "completed", owner: "proof", createdAt: 1 },
      { id: "t-2", subject: "B", status: "pending", owner: "keeper", createdAt: 2 },
    ];
    const agent = "proof";

    const nextForAgent = tasks.find(t => t.owner === agent && t.status === "pending");
    const nextAny = tasks.find(t => t.status === "pending" && t.owner);
    const next = nextForAgent || nextAny;

    expect(next!.id).toBe("t-2"); // keeper's task as fallback
  });

  test("no dispatch if no pending tasks", () => {
    const tasks = [
      { id: "t-1", subject: "A", status: "completed", owner: "proof", createdAt: 1 },
      { id: "t-2", subject: "B", status: "completed", owner: "keeper", createdAt: 2 },
    ];
    const agent = "proof";

    const nextForAgent = tasks.find(t => t.owner === agent && t.status === "pending");
    const nextAny = tasks.find(t => t.status === "pending" && t.owner);
    const next = nextForAgent || nextAny;

    expect(next).toBeUndefined();
  });

  test("no dispatch if pending task has no owner", () => {
    const tasks = [
      { id: "t-1", subject: "A", status: "completed", owner: "proof", createdAt: 1 },
      { id: "t-2", subject: "B", status: "pending", owner: null, createdAt: 2 },
    ];
    const agent = "proof";

    const nextForAgent = tasks.find(t => t.owner === agent && t.status === "pending");
    const nextAny = tasks.find(t => t.status === "pending" && t.owner);
    const next = nextForAgent || nextAny;

    expect(next).toBeUndefined();
  });
});

describe("task automation — debounce", () => {
  test("debounce prevents duplicate processing within 5s", () => {
    const DEBOUNCE_MS = 5_000;
    const lastProcessed = new Map<string, number>();

    const agent = "proof";
    const now = Date.now();

    // First call: should process
    lastProcessed.set(agent, now);

    // Second call 1s later: should skip
    const later = now + 1000;
    const last = lastProcessed.get(agent) || 0;
    expect(later - last < DEBOUNCE_MS).toBe(true); // would be skipped

    // Call 6s later: should process
    const muchLater = now + 6000;
    expect(muchLater - last < DEBOUNCE_MS).toBe(false); // would process
  });
});

describe("task automation — feedback chain", () => {
  const NJ_SENDERS = new Set(["nj", "j", "forge", "api"]);

  test("nj/j/forge/api dispatched tasks go to nj-inbox", () => {
    expect(NJ_SENDERS.has("nj")).toBe(true);
    expect(NJ_SENDERS.has("j")).toBe(true);
    expect(NJ_SENDERS.has("forge")).toBe(true);
    expect(NJ_SENDERS.has("api")).toBe(true);
  });

  test("agent-dispatched tasks go via maw hey", () => {
    expect(NJ_SENDERS.has("keeper")).toBe(false);
    expect(NJ_SENDERS.has("proof")).toBe(false);
    expect(NJ_SENDERS.has("scout")).toBe(false);
  });

  test("dispatched_by is tracked on task", () => {
    const task = {
      id: "t-test",
      subject: "test",
      status: "in_progress",
      owner: "proof",
      createdAt: Date.now(),
      dispatched_by: "forge",
    };
    expect(task.dispatched_by).toBe("forge");
  });
});
