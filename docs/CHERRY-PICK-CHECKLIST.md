# Cherry-Pick Verification Checklist — NUCHULA/maw-js

> Run this checklist **after every upstream cherry-pick** before committing.
> All 10 steps must pass. Any failure = revert + fix before proceeding.

---

## Pre-Cherry-Pick

**Step 1 — Snapshot NUCHULA patches**
```bash
git diff upstream/main HEAD --name-only > /tmp/nuchula-patch-files.txt
cat /tmp/nuchula-patch-files.txt
```
Keep this list open. Every file here must be re-verified after the cherry-pick.

**Step 2 — Record current binding + office view state**
```bash
grep -r "0.0.0.0\|127.0.0.1" src/ --include="*.ts" -l
grep -r "officeView\|office-view\|office_view" src/ --include="*.ts" -l
```
Note what exists. Expect the same after cherry-pick.

---

## Post-Cherry-Pick (run in order)

**Step 3 — Diff NUCHULA patch files**
```bash
while IFS= read -r f; do
  echo "=== $f ===" && git diff HEAD~1 HEAD -- "$f"
done < /tmp/nuchula-patch-files.txt
```
Any unexpected removal = stop, investigate, restore.

**Step 4 — Hostname bind check**
```bash
grep -r "listen\|hostname\|host:" src/ --include="*.ts" | grep -v node_modules
```
Assert: server binds `0.0.0.0`, NOT `127.0.0.1` or `localhost`.
Canonical fix location: `engine/index.ts` or `server.ts` listen call.

**Step 5 — Office view mount check**
```bash
grep -r "officeView\|/office\|office-view" src/ --include="*.ts"
```
Assert: office view route still present. If missing, cherry-pick from NUCHULA branch:
```bash
git cherry-pick <nuchula-office-view-commit>
```

**Step 6 — scanTeams initial WS send check**
```bash
grep -n "scanTeams\|initial.*send\|teams.*send" engine/index.ts 2>/dev/null || \
  grep -rn "scanTeams" src/ --include="*.ts"
```
Assert: `scanTeams` import present + initial send on connect still present.
This was silently removed in v1.9.0 upstream — it won't cause a build error.

**Step 7 — wake-resolve pattern check**
```bash
grep -n "nj-engine\|oracle" src/wake-resolve.ts 2>/dev/null || \
  grep -rn "wake.*resolve\|resolve.*wake" src/ --include="*.ts"
```
Assert: wake resolve uses `-nj-engine` suffix, NOT `-oracle` (upstream uses `-oracle`).
Upstream pattern breaks maw wake for all 26 agents in this fleet.

**Step 8 — Build check**
```bash
npm run build 2>&1 | tail -20
echo "Build exit: $?"
```
Assert: exit = 0, no TypeScript errors.

**Step 9 — UPSTREAM-REFERENCE.md diff**
```bash
cat docs/UPSTREAM-REFERENCE.md 2>/dev/null || echo "File missing — create it"
```
Update the reference file with the upstream commit SHA that was cherry-picked.
Format: `YYYY-MM-DD | upstream/<sha> | <summary> | NUCHULA patches verified ✅`

**Step 10 — Smoke test (if service running)**
```bash
curl -sf http://localhost:3456/health && echo "health OK" || echo "health FAILED"
# Also verify from LAN:
curl -sf http://192.168.1.125:3456/health && echo "LAN OK" || echo "LAN FAILED"
```
Assert: both pass. LAN failure = hostname still bound to localhost (re-check Step 4).

---

## Sign-off

Only after all 10 steps pass:
```bash
git commit -m "cherry-pick: <upstream-ref> — NUCHULA patches verified (10/10)"
```

---

*Added: 2026-05-01 | Author: keeper | Closes G2 — cherry-pick blindspots*
