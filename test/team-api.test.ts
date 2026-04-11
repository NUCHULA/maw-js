import { describe, it, expect } from "bun:test";
import { validateTeamName, loadTeam, _setDirs } from "../src/commands/team";
import { mkdirSync, writeFileSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

const TMP = join(tmpdir(), `maw-team-test-${Date.now()}`);
const TEAMS = join(TMP, "teams");
const TASKS = join(TMP, "tasks");

describe("validateTeamName", () => {
  it("accepts valid names", () => {
    expect(validateTeamName("my-team")).toBe("my-team");
    expect(validateTeamName("team_01")).toBe("team_01");
    expect(validateTeamName("Research")).toBe("Research");
  });

  it("rejects path traversal: ../../etc", () => {
    expect(() => validateTeamName("../../etc")).toThrow("invalid team name");
  });

  it("rejects path traversal: ../ssh", () => {
    expect(() => validateTeamName("../ssh")).toThrow("invalid team name");
  });

  it("rejects slashes", () => {
    expect(() => validateTeamName("foo/bar")).toThrow("invalid team name");
    expect(() => validateTeamName("foo\\bar")).toThrow("invalid team name");
  });

  it("rejects dots", () => {
    expect(() => validateTeamName("..")).toThrow("invalid team name");
    expect(() => validateTeamName("foo..bar")).toThrow("invalid team name");
  });

  it("rejects empty", () => {
    expect(() => validateTeamName("")).toThrow("team name is required");
  });

  it("rejects spaces and special chars", () => {
    expect(() => validateTeamName("my team")).toThrow("invalid team name");
    expect(() => validateTeamName("team;rm -rf")).toThrow("invalid team name");
  });
});

describe("loadTeam", () => {
  it("throws on path traversal instead of returning null", () => {
    expect(() => loadTeam("../../etc")).toThrow("invalid team name");
  });

  it("returns null for nonexistent valid team", () => {
    _setDirs(TEAMS, TASKS);
    mkdirSync(TEAMS, { recursive: true });
    expect(loadTeam("nonexistent")).toBeNull();
    rmSync(TMP, { recursive: true, force: true });
  });

  it("loads valid team config", () => {
    _setDirs(TEAMS, TASKS);
    const teamDir = join(TEAMS, "test-team");
    mkdirSync(teamDir, { recursive: true });
    writeFileSync(join(teamDir, "config.json"), JSON.stringify({ name: "test-team", members: [] }));
    const result = loadTeam("test-team");
    expect(result).not.toBeNull();
    expect(result!.name).toBe("test-team");
    rmSync(TMP, { recursive: true, force: true });
  });
});
