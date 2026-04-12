# Upstream Reference — Soul-Brews-Studio/maw-js

> NUCHULA/maw-js is a **full fork** — not tracking upstream branch.
> Upstream is fetch-only reference for cherry-picking specific fixes.
>
> Forked: 2026-04-13 by J's decision.

---

## Upstream Info

| Key | Value |
|-----|-------|
| Repo | https://github.com/Soul-Brews-Studio/maw-js |
| Remote name | `upstream-readonly` (fetch only, push disabled) |
| Last merged version | **v1.9.0** |
| Last merge commit | `9199e58` (upstream) → `f8c7996` (NUCHULA merge) |
| Upstream latest (at fork) | v1.15.0 (`07f0549`) |

---

## Cherry-Pick Guide

When upstream has a specific fix we need:

```bash
# 1. Fetch upstream (read-only)
git fetch upstream-readonly

# 2. Find the commit(s)
git log --oneline upstream-readonly/main | head -20

# 3. Review before picking
git show <commit-hash>

# 4. Cherry-pick
git cherry-pick <commit-hash>

# 5. If conflict → resolve, then:
git cherry-pick --continue

# 6. Test
bun test

# 7. Verify NUCHULA patches still intact
grep "officeView" src/views/index.ts
grep '0.0.0.0' src/server.ts
grep "nj-engine" src/commands/wake-resolve.ts

# 8. Push
git push nuchula main
```

---

## NUCHULA Patches (may conflict with upstream changes)

These are modifications we maintain that differ from upstream. When cherry-picking, check if the upstream commit touches these files:

### High Risk (upstream actively changes these)
| Patch | File | What we changed |
|-------|------|-----------------|
| Office view mount | `src/views/index.ts` | Import + mount officeView at `/` (upstream removed it) |
| Hostname 0.0.0.0 | `src/server.ts` | Force bind 0.0.0.0 (upstream uses conditional localhost) |
| Wake-resolve nj-engine | `src/commands/wake-resolve.ts` | Match `-nj-engine` pattern + fleet-first in detectSession |
| Path traversal fix | `src/commands/team.ts` | validateTeamName regex guard |

### Medium Risk (upstream may refactor)
| Patch | File | What we changed |
|-------|------|-----------------|
| CONFIG_DIR | `src/api/config.ts` | Use CONFIG_DIR/CONFIG_FILE from paths.ts |
| /maw-log endpoint | `src/api/deprecated.ts` | Re-enabled GET /maw-log |
| Initial teams WS | `src/engine/index.ts` | scanTeams() in handleOpen + task-automation listener |

### Low Risk (NUCHULA-only files, upstream won't touch)
| File | Purpose |
|------|---------|
| `src/commands/team-crud.ts` | Team CRUD + sanitize + dispatch |
| `src/engine/task-automation.ts` | Auto-complete + chaining + feedback + reporting + learning |
| `src/api/reports.ts` | GET /api/reports/tasks |
| `UPSTREAM-REFERENCE.md` | This file |

---

## Version History

| Date | Version | Action | Commit |
|------|---------|--------|--------|
| 2026-04-11 | v1.9.0 | Full merge upstream → NUCHULA | f8c7996 |
| 2026-04-13 | — | Fork: detach upstream, cherry-pick only | — |

---

*Pre-fork checklist archived at: `docs/archive/NUCHULA-PATCHES-pre-fork-2026-04-13.md`*
