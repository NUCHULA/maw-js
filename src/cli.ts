#!/usr/bin/env bun
process.env.MAW_CLI = "1";

import { cmdPeek, cmdSend } from "./commands/comm";
import { logAudit } from "./audit";
import { usage } from "./cli/usage";
import { routeComm } from "./cli/route-comm";
import { routeAgent } from "./cli/route-agent";
import { routeFleet } from "./cli/route-fleet";
import { routeWorkspace } from "./cli/route-workspace";
import { routeTools } from "./cli/route-tools";
import { routeTeam } from "./cli/route-team";

const args = process.argv.slice(2);
const cmd = args[0]?.toLowerCase();

logAudit(cmd || "", args);

if (cmd === "--version" || cmd === "-v") {
  const pkg = require("../package.json");
  let hash = "";
  try { hash = require("child_process").execSync("git rev-parse --short HEAD", { cwd: import.meta.dir }).toString().trim(); } catch {}
  let buildDate = "";
  try {
    const raw = require("child_process").execSync("git log -1 --format=%ci", { cwd: import.meta.dir }).toString().trim();
    const d = new Date(raw);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    buildDate = `${raw.slice(0, 10)} ${days[d.getDay()]} ${raw.slice(11, 16)}`;
  } catch {}
  console.log(`maw v${pkg.version}${hash ? ` (${hash})` : ""}${buildDate ? ` built ${buildDate}` : ""}`);
} else if (cmd === "update" || cmd === "upgrade") {
  const pkg = require("../package.json");
  const { execSync } = require("child_process");
  const ref = args[1] || "alpha";
  // Derive repo from git remote — works for any fork, not hardcoded
  let repo = "";
  try {
    const remote = execSync("git remote get-url origin", { cwd: import.meta.dir, encoding: "utf-8" }).trim();
    const m = remote.match(/github\.com[:/](.+?)(?:\.git)?$/);
    repo = m?.[1] || "";
  } catch {}
  if (!repo) repo = pkg.repository?.url?.match(/github\.com\/(.+?)(?:\.git)?$/)?.[1] || "Soul-Brews-Studio/maw-js";
  console.log(`\n  🍺 Updating maw from github:${repo}#${ref}...\n`);
  try {
    execSync(`bun add -g github:${repo}#${ref}`, { stdio: "inherit" });
    let newHash = "";
    try { newHash = execSync("git rev-parse --short HEAD", { cwd: import.meta.dir }).toString().trim(); } catch {}
    console.log(`\n  ✅ maw v${pkg.version} (${newHash}) — updated from ${ref}\n`);
  } catch (e: any) {
    console.error(`  ❌ Update failed: ${e.message}`);
    process.exit(1);
  }
} else if (!cmd || cmd === "--help" || cmd === "-h") {
  usage();
} else {
  const handled =
    await routeComm(cmd, args) ||
    await routeTeam(cmd, args) ||
    await routeAgent(cmd, args) ||
    await routeFleet(cmd, args) ||
    await routeWorkspace(cmd, args) ||
    await routeTools(cmd, args);

  if (!handled) {
    // Default: agent name shorthand (maw <agent> <msg> or maw <agent>)
    if (args.length >= 2) {
      const f = args.includes("--force");
      const m = args.slice(1).filter(a => a !== "--force");
      await cmdSend(args[0], m.join(" "), f);
    } else {
      await cmdPeek(args[0]);
    }
  }
}
