/**
 * api.test.ts — Integration tests for maw-js API endpoints
 *
 * Requires running maw-js on localhost:3456.
 *
 * Behavior:
 *   - MAW_REQUIRE_SERVER=1 (integration mode): fails if server not running
 *   - default: skips gracefully if server not running
 *
 * Run via: `bun run test:integration` (sets MAW_REQUIRE_SERVER=1)
 */
import { describe, test, expect, beforeAll } from "bun:test";

const BASE = "http://127.0.0.1:3456";
const REQUIRE_SERVER = process.env.MAW_REQUIRE_SERVER === "1";
let serverUp = false;

beforeAll(async () => {
  try {
    const r = await fetch(`${BASE}/api/sessions`, { signal: AbortSignal.timeout(2000) });
    serverUp = r.ok;
  } catch {
    serverUp = false;
  }
  if (REQUIRE_SERVER && !serverUp) {
    throw new Error(
      `maw-js not running on ${BASE} — integration tests require a live server. ` +
      `Start it with: systemctl start maw-js`
    );
  }
});

function requireServer() {
  if (!serverUp) {
    if (REQUIRE_SERVER) {
      throw new Error(`server required but not running on ${BASE}`);
    }
    console.log("  ⏭ skipped — maw-js not running on :3456");
    return false;
  }
  return true;
}

// ─── API Endpoints ───

describe("GET /api/sessions", () => {
  test("returns JSON array", async () => {
    if (!requireServer()) return;
    const r = await fetch(`${BASE}/api/sessions`);
    expect(r.status).toBe(200);
    const data = await r.json();
    expect(Array.isArray(data)).toBe(true);
  });

  test("each session has name field", async () => {
    if (!requireServer()) return;
    const r = await fetch(`${BASE}/api/sessions`);
    const data = await r.json();
    if (data.length > 0) {
      expect(data[0]).toHaveProperty("name");
    }
  });
});

describe("GET /api/teams", () => {
  test("returns { teams, total }", async () => {
    if (!requireServer()) return;
    const r = await fetch(`${BASE}/api/teams`);
    expect(r.status).toBe(200);
    const data = await r.json();
    expect(data).toHaveProperty("teams");
    expect(data).toHaveProperty("total");
    expect(Array.isArray(data.teams)).toBe(true);
    expect(typeof data.total).toBe("number");
  });
});

describe("GET /api/fleet-config", () => {
  test("returns { configs }", async () => {
    if (!requireServer()) return;
    const r = await fetch(`${BASE}/api/fleet-config`);
    expect(r.status).toBe(200);
    const data = await r.json();
    expect(data).toHaveProperty("configs");
    expect(Array.isArray(data.configs)).toBe(true);
  });
});

// ─── UI / Office View ───

describe("GET / (UI)", () => {
  test("returns HTML containing ARRA Office", async () => {
    if (!requireServer()) return;
    const r = await fetch(`${BASE}/`);
    expect(r.status).toBe(200);
    const html = await r.text();
    expect(html).toContain("ARRA Office");
  });

  test("HTML contains JS asset src", async () => {
    if (!requireServer()) return;
    const r = await fetch(`${BASE}/`);
    const html = await r.text();
    const match = html.match(/src="(\/assets\/[^"]+)"/);
    expect(match).not.toBeNull();
  });

  test("JS asset responds 200", async () => {
    if (!requireServer()) return;
    const r = await fetch(`${BASE}/`);
    const html = await r.text();
    const match = html.match(/src="(\/assets\/[^"]+)"/);
    if (!match) return; // covered by previous test
    const assetR = await fetch(`${BASE}${match[1]}`);
    expect(assetR.status).toBe(200);
  });
});

// ─── Hostname Binding ───

describe("hostname binding", () => {
  test("server binds 0.0.0.0 (LAN accessible)", async () => {
    if (!requireServer()) return;
    // Verify via LAN IP — same machine so 192.168.1.125 should work if bound to 0.0.0.0
    try {
      const r = await fetch("http://192.168.1.125:3456/", { signal: AbortSignal.timeout(2000) });
      expect(r.status).toBe(200);
    } catch {
      // If LAN IP unreachable, check ss output
      const proc = Bun.spawnSync(["ss", "-tlnp"]);
      const output = new TextDecoder().decode(proc.stdout);
      const line = output.split("\n").find(l => l.includes(":3456"));
      expect(line).toBeDefined();
      expect(line).toContain("0.0.0.0");
    }
  });
});
