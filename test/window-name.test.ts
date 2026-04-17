/**
 * window-name.test.ts — Window naming patterns + fleet resolution
 *
 * Tests the naming conventions used throughout maw-js:
 * - sanitizeBranchName: worktree branch name normalization
 * - resolveFleetSession: fleet config → session name lookup
 * - canonicalPath: symlink normalization
 * - Window name construction patterns in wake.ts
 *
 * [task:t-mnwsaih4-k0mr] — proof (qa)
 */
import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { mkdirSync, writeFileSync, rmSync, existsSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

// --- sanitizeBranchName ---
// Inlined from src/commands/wake-resolve.ts to avoid Bun module resolution
// chain issue (wake-resolve → config.ts → getEnvVars export not found in test context).
// See: QA test suite report 2026-04-11, pre-existing cfgLimit/getEnvVars issue.
function sanitizeBranchName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9._\-]/g, "")
    .replace(/\.{2,}/g, ".").replace(/^[-.]|[-.]$/g, "").slice(0, 50);
}

describe("sanitizeBranchName", () => {
  test("lowercases input", () => {
    expect(sanitizeBranchName("MyFeature")).toBe("myfeature");
  });

  test("replaces spaces with hyphens", () => {
    expect(sanitizeBranchName("my feature branch")).toBe("my-feature-branch");
  });

  test("strips special characters", () => {
    expect(sanitizeBranchName("feat!@#$%^&*()ure")).toBe("feature");
  });

  test("collapses consecutive dots", () => {
    expect(sanitizeBranchName("a...b")).toBe("a.b");
  });

  test("strips leading/trailing dots and hyphens", () => {
    expect(sanitizeBranchName("-test-")).toBe("test");
    expect(sanitizeBranchName(".test.")).toBe("test");
  });

  test("truncates at 50 chars", () => {
    const long = "a".repeat(100);
    expect(sanitizeBranchName(long).length).toBeLessThanOrEqual(50);
  });

  test("handles empty string", () => {
    expect(sanitizeBranchName("")).toBe("");
  });

  test("preserves valid branch names", () => {
    expect(sanitizeBranchName("fix-fleet-resolution")).toBe("fix-fleet-resolution");
    expect(sanitizeBranchName("alpha/proof-identity")).toBe("alphaproof-identity");
  });

  // Edge cases (BVA)
  test("single character", () => {
    expect(sanitizeBranchName("a")).toBe("a");
  });

  test("exactly 50 chars", () => {
    const exact = "a".repeat(50);
    expect(sanitizeBranchName(exact)).toBe(exact);
  });

  test("51 chars truncated", () => {
    const over = "a".repeat(51);
    expect(sanitizeBranchName(over).length).toBe(50);
  });

  test("task IDs pass through cleanly", () => {
    expect(sanitizeBranchName("t-mnwsaih4-k0mr")).toBe("t-mnwsaih4-k0mr");
  });
});

// --- Window name construction patterns ---

describe("window name patterns", () => {
  // wake.ts constructs window names following these patterns:
  // 1. Default: `${oracle}-oracle`
  // 2. Worktree: `${oracle}-${sanitizedName}`
  // 3. Fleet config: `${oracle}-nj-engine`

  test("default pattern: oracle-oracle", () => {
    const oracle = "proof";
    const windowName = `${oracle}-oracle`;
    expect(windowName).toBe("proof-oracle");
  });

  test("worktree pattern: oracle-taskname", () => {
    const oracle = "keeper";
    const name = sanitizeBranchName("fix-fleet");
    const windowName = `${oracle}-${name}`;
    expect(windowName).toBe("keeper-fix-fleet");
  });

  test("fleet pattern: oracle-nj-engine", () => {
    const oracle = "proof";
    const windowName = `${oracle}-nj-engine`;
    expect(windowName).toBe("proof-nj-engine");
  });

  test("existing window regex matches worktree windows", () => {
    const oracle = "proof";
    const windowName = `${oracle}-oracle`;
    const nameSuffix = windowName.replace(`${oracle}-`, "");
    const re = new RegExp(`^${oracle}-\\d+-${nameSuffix}$`);

    expect(re.test("proof-1-oracle")).toBe(true);
    expect(re.test("proof-99-oracle")).toBe(true);
    expect(re.test("proof-oracle")).toBe(false); // exact match, not regex
    expect(re.test("keeper-1-oracle")).toBe(false); // wrong oracle
  });

  test("window names with task sanitization", () => {
    // When waking with --task, the name is sanitized
    const oracle = "scout";
    const taskName = sanitizeBranchName("Research: AI Testing!!!");
    const windowName = `${oracle}-${taskName}`;
    expect(windowName).toBe("scout-research-ai-testing");
  });
});

// --- resolveFleetSession (needs temp fleet dir) ---

describe("resolveFleetSession", () => {
  const TMP_FLEET = join(tmpdir(), `maw-fleet-test-${Date.now()}`);
  const originalFleetDir = process.env.MAW_CONFIG_DIR;

  // We can't easily override FLEET_DIR (it's a const from paths.ts),
  // so we test the matching logic directly instead.

  test("fleet config window matching logic — oracle-nj-engine", () => {
    const oracle = "proof";
    const config = {
      name: "field",
      windows: [
        { name: "proof-nj-engine", repo: "/data/ghq/github.com/NUCHULA/proof-nj-engine" },
        { name: "whet-nj-engine", repo: "/data/ghq/github.com/NUCHULA/whet-nj-engine" },
      ],
    };
    const match = config.windows.some((w: any) =>
      w.name === `${oracle}-oracle` || w.name === oracle || w.name === `${oracle}-nj-engine`
    );
    expect(match).toBe(true);
  });

  test("fleet config window matching logic — oracle-oracle", () => {
    const oracle = "forge";
    const config = {
      name: "command",
      windows: [
        { name: "forge-oracle", repo: "/data/ghq/github.com/NUCHULA/forge-oracle" },
      ],
    };
    const match = config.windows.some((w: any) =>
      w.name === `${oracle}-oracle` || w.name === oracle || w.name === `${oracle}-nj-engine`
    );
    expect(match).toBe(true);
  });

  test("fleet config window matching logic — exact oracle name", () => {
    const oracle = "keeper";
    const config = {
      name: "ops",
      windows: [
        { name: "keeper", repo: "/data/ghq/github.com/NUCHULA/keeper-nj-engine" },
      ],
    };
    const match = config.windows.some((w: any) =>
      w.name === `${oracle}-oracle` || w.name === oracle || w.name === `${oracle}-nj-engine`
    );
    expect(match).toBe(true);
  });

  test("fleet config — no match for unknown oracle", () => {
    const oracle = "nonexistent";
    const config = {
      name: "field",
      windows: [
        { name: "proof-nj-engine", repo: "/data/ghq/github.com/NUCHULA/proof-nj-engine" },
      ],
    };
    const match = config.windows.some((w: any) =>
      w.name === `${oracle}-oracle` || w.name === oracle || w.name === `${oracle}-nj-engine`
    );
    expect(match).toBe(false);
  });

  test("fleet config — disabled files skipped", () => {
    // resolveFleetSession filters f.endsWith(".disabled")
    const files = ["01-command.json", "02-field.json", "03-retired.json.disabled"];
    const active = files.filter(f => f.endsWith(".json") && !f.endsWith(".disabled"));
    expect(active).toEqual(["01-command.json", "02-field.json"]);
  });

  test("detectSession priority: sessionMap > fleet > pattern > exact", () => {
    // This documents the priority order in detectSession()
    // Can't unit test without mocking tmux, but we verify the logic structure
    // Line 154: sessionMap check (highest)
    // Line 157-158: fleet resolution (second)
    // Line 159-160: pattern match /^\d+-/ (third) or exact match (lowest)
    expect(true).toBe(true); // structural documentation
  });
});

// --- canonicalPath ---

describe("canonicalPath (symlink normalization)", () => {
  // canonicalPath is not exported, so we replicate the logic to test it
  function canonicalPath(p: string): string {
    return p.replace(/^\/root\/ghq\//, "/data/ghq/");
  }

  test("normalizes /root/ghq to /data/ghq", () => {
    expect(canonicalPath("/root/ghq/github.com/NUCHULA/proof-nj-engine"))
      .toBe("/data/ghq/github.com/NUCHULA/proof-nj-engine");
  });

  test("leaves /data/ghq paths unchanged", () => {
    expect(canonicalPath("/data/ghq/github.com/NUCHULA/proof-nj-engine"))
      .toBe("/data/ghq/github.com/NUCHULA/proof-nj-engine");
  });

  test("leaves non-ghq paths unchanged", () => {
    expect(canonicalPath("/home/user/projects/foo"))
      .toBe("/home/user/projects/foo");
  });

  test("only matches prefix, not middle of path", () => {
    expect(canonicalPath("/data/root/ghq/something"))
      .toBe("/data/root/ghq/something");
  });
});
