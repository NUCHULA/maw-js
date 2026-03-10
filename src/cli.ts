#!/usr/bin/env bun
process.env.MAW_CLI = "1";

import { listSessions, findWindow, capture, sendKeys, ssh } from "./ssh";

const args = process.argv.slice(2);
const cmd = args[0]?.toLowerCase();

// --- Commands ---

async function cmdList() {
  const sessions = await listSessions();
  for (const s of sessions) {
    console.log(`\x1b[36m${s.name}\x1b[0m`);
    for (const w of s.windows) {
      const dot = w.active ? "\x1b[32m*\x1b[0m" : " ";
      console.log(`  ${dot} ${w.index}: ${w.name}`);
    }
  }
}

async function cmdPeek(query?: string) {
  const sessions = await listSessions();
  if (!query) {
    // Peek all — one line per agent
    for (const s of sessions) {
      for (const w of s.windows) {
        const target = `${s.name}:${w.index}`;
        try {
          const content = await capture(target, 3);
          const lastLine = content.split("\n").filter(l => l.trim()).pop() || "(empty)";
          const dot = w.active ? "\x1b[32m*\x1b[0m" : " ";
          console.log(`${dot} \x1b[36m${w.name.padEnd(22)}\x1b[0m ${lastLine.slice(0, 80)}`);
        } catch {
          console.log(`  \x1b[36m${w.name.padEnd(22)}\x1b[0m (unreachable)`);
        }
      }
    }
    return;
  }
  const target = findWindow(sessions, query);
  if (!target) { console.error(`window not found: ${query}`); process.exit(1); }
  const content = await capture(target);
  console.log(`\x1b[36m--- ${target} ---\x1b[0m`);
  console.log(content);
}

async function cmdSend(query: string, message: string) {
  const sessions = await listSessions();
  const target = findWindow(sessions, query);
  if (!target) { console.error(`window not found: ${query}`); process.exit(1); }
  await sendKeys(target, message);
  console.log(`\x1b[32msent\x1b[0m → ${target}: ${message}`);
}

async function cmdSpawn(oracle: string, opts: { name?: string; continue?: boolean }) {
  // Find oracle repo via ghq
  const ghqOut = await ssh(`ghq list --full-path | grep -i '/${oracle}-oracle$' | head -1`);
  if (!ghqOut) {
    console.error(`oracle repo not found: ${oracle}-oracle`);
    process.exit(1);
  }
  const repoPath = ghqOut.trim();
  const repoName = repoPath.split("/").pop()!;
  const parentDir = repoPath.replace(/\/[^/]+$/, "");

  // Find .wt-* siblings
  const lsOut = await ssh(`ls -d ${parentDir}/${repoName}.wt-* 2>/dev/null || true`);
  const worktrees = lsOut.split("\n").filter(Boolean).map(p => {
    const base = p.split("/").pop()!;
    // repo.wt-1-bitkub → 1-bitkub, repo.wt-2 → 2
    const suffix = base.replace(`${repoName}.wt-`, "");
    return { path: p, name: suffix };
  });

  const sessionName = opts.name || `${oracle}`;

  // Check if session exists
  try {
    await ssh(`tmux has-session -t '${sessionName}' 2>/dev/null`);
    console.log(`\x1b[33msession already exists:\x1b[0m ${sessionName}`);
    console.log(`  attach: tmux attach -t ${sessionName}`);
    return;
  } catch { /* session doesn't exist — good */ }

  // Create session with main repo as first window
  await ssh(`tmux new-session -d -s '${sessionName}' -n '${oracle}' -c '${repoPath}'`);
  console.log(`\x1b[32m+\x1b[0m ${oracle} → ${repoPath}`);

  // Add worktree windows
  for (const wt of worktrees) {
    const winName = `${oracle}-${wt.name}`;
    await ssh(`tmux new-window -t '${sessionName}' -n '${winName}' -c '${wt.path}'`);
    console.log(`\x1b[32m+\x1b[0m ${winName} → ${wt.path}`);
  }

  // Optionally start claude --continue in all windows
  if (opts.continue) {
    const winList = await ssh(`tmux list-windows -t '${sessionName}' -F '#{window_index}'`);
    for (const idx of winList.split("\n").filter(Boolean)) {
      await ssh(`tmux send-keys -t '${sessionName}:${idx}' 'claude --continue' Enter`);
    }
    console.log(`\x1b[36mall waking with --continue\x1b[0m`);
  }

  await ssh(`tmux select-window -t '${sessionName}:1'`);
  console.log(`\n\x1b[36mspawned:\x1b[0m ${sessionName} (${1 + worktrees.length} windows)`);
  console.log(`  attach: tmux attach -t ${sessionName}`);
}

function usage() {
  console.log(`\x1b[36mmaw\x1b[0m — Multi-Agent Workflow

\x1b[33mUsage:\x1b[0m
  maw ls                      List sessions + windows
  maw peek [agent]            Peek agent screen (or all)
  maw hey <agent> <msg...>    Send message to agent (alias: tell)
  maw spawn <oracle> [opts]   Create tmux session from worktrees
  maw <agent> <msg...>        Shorthand for hey
  maw <agent>                 Shorthand for peek
  maw serve [port]            Start web UI (default: 3456)

\x1b[33mSpawn options:\x1b[0m
  --name <session>            Custom tmux session name
  --continue, -c              Auto-start claude --continue in all windows

\x1b[33mEnv:\x1b[0m
  MAW_HOST=white.local        SSH target (default: white.local)

\x1b[33mExamples:\x1b[0m
  maw spawn hermes            Create session from hermes + worktrees
  maw spawn hermes -c         Create + auto-continue all agents
  maw spawn neo --name 8-neo  Custom session name
  maw hey neo what is your status
  maw peek mother
  maw serve 8080`);
}

// --- Main ---

if (!cmd || cmd === "--help" || cmd === "-h") {
  usage();
} else if (cmd === "ls" || cmd === "list") {
  await cmdList();
} else if (cmd === "peek" || cmd === "see") {
  await cmdPeek(args[1]);
} else if (cmd === "hey" || cmd === "send" || cmd === "tell") {
  if (!args[1] || !args[2]) { console.error("usage: maw hey <agent> <message>"); process.exit(1); }
  await cmdSend(args[1], args.slice(2).join(" "));
} else if (cmd === "spawn") {
  if (!args[1]) { console.error("usage: maw spawn <oracle> [--name <session>] [-c|--continue]"); process.exit(1); }
  const spawnOpts: { name?: string; continue?: boolean } = {};
  for (let i = 2; i < args.length; i++) {
    if (args[i] === "--name" && args[i + 1]) { spawnOpts.name = args[++i]; }
    else if (args[i] === "-c" || args[i] === "--continue") { spawnOpts.continue = true; }
  }
  await cmdSpawn(args[1], spawnOpts);
} else if (cmd === "serve") {
  const { startServer } = await import("./server");
  startServer(args[1] ? +args[1] : 3456);
} else {
  // Default: agent name
  if (args.length >= 2) {
    // maw neo what's up → send
    await cmdSend(args[0], args.slice(1).join(" "));
  } else {
    // maw neo → peek
    await cmdPeek(args[0]);
  }
}
