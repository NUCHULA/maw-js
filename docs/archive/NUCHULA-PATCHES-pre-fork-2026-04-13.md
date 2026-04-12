# NUCHULA Patches — Mandatory Merge Checklist

> **ทุกครั้งที่ merge upstream (Soul-Brews-Studio/maw-js) → ต้องเปิดไฟล์นี้แล้วตรวจทีละข้อ**
> ถ้า patch หาย → แก้ก่อน commit merge. ห้าม push main ที่ patch หาย.
>
> Last verified: 2026-04-11 by keeper

---

## Pre-merge: อ่านก่อน merge

```bash
# Verify all patches BEFORE merging upstream
bash scripts/verify-nuchula-patches.sh
```

---

## Patch Checklist

### 1. Office View Mount
- **File**: `src/views/index.ts`
- **Patch**: import + mount `officeView` at `/`
- **Why**: upstream removed office view (UI moved to dev server :5173) แต่เราต้อง serve maw-ui static จาก maw-js (:3456) เพราะ Mac เข้าผ่าน LAN
- **Verify**: `grep "officeView" src/views/index.ts`
- [ ] `import { officeView } from "./office"` อยู่
- [ ] `app.route("/", officeView)` อยู่

### 2. Hostname Bind 0.0.0.0
- **File**: `src/server.ts`
- **Patch**: force `hostname = "0.0.0.0"` (upstream ใช้ conditional: localhost if no peers)
- **Why**: Mac เข้า maw-js ผ่าน LAN (192.168.1.125:3456) — ถ้า bind 127.0.0.1 จะเข้าไม่ได้
- **Verify**: `grep 'hostname.*0.0.0.0' src/server.ts`
- [ ] `const hostname = "0.0.0.0"` (ไม่ใช่ conditional)

### 3. Wake-Resolve: -nj-engine Pattern
- **File**: `src/commands/wake-resolve.ts`
- **Patch**: repos เราใช้ `<name>-nj-engine` ไม่ใช่ `<name>-oracle` (upstream pattern)
- **Why**: `maw wake scout` ต้องหา `scout-nj-engine` repo ไม่ใช่ `scout-oracle`
- **Verify**: `grep "nj-engine" src/commands/wake-resolve.ts`
- [ ] ghq list grep ใช้ `-nj-engine` pattern
- [ ] fleet window name match ใช้ `-nj-engine`
- [ ] ⚠️ **ยังไม่ได้ patch ใน current main** — ต้องแก้!

### 4. CONFIG_DIR in API Config
- **File**: `src/api/config.ts`
- **Patch**: ใช้ `CONFIG_DIR` / `CONFIG_FILE` จาก paths.ts แทน relative path
- **Why**: upstream ใช้ `join(import.meta.dir, "../..")` ซึ่งผิดเมื่อ run จาก installed location
- **Verify**: `grep "CONFIG_DIR\|CONFIG_FILE" src/api/config.ts | head -1`
- [ ] import `CONFIG_DIR, CONFIG_FILE` from paths

### 5. /maw-log Endpoint
- **File**: `src/api/deprecated.ts`
- **Patch**: re-enable `GET /maw-log` endpoint อ่านจาก `~/.oracle/maw-log.jsonl`
- **Why**: upstream ลบ endpoint นี้ แต่เราใช้สำหรับ chat log ใน #chat page
- **Verify**: `grep "maw-log" src/api/deprecated.ts`
- [ ] `deprecatedApi.get("/maw-log", ...)` อยู่

### 6. Initial Teams WS Send
- **File**: `src/engine/index.ts`
- **Patch**: `handleOpen()` ส่ง teams data ทันทีที่ client connect (ไม่ต้องรอ interval)
- **Why**: #teams page แสดง "No active teams" 3 วินาทีก่อนข้อมูลมา
- **Verify**: `grep "scanTeams" src/engine/index.ts`
- [ ] `scanTeams().then(teams => ...)` อยู่ใน handleOpen

### 7. Task Automation Listener
- **File**: `src/engine/index.ts`
- **Patch**: `handleTaskAutomation` registered as feedListener
- **Why**: auto-complete tasks on Stop + chain + feedback + reporting
- **Verify**: `grep "handleTaskAutomation" src/engine/index.ts`
- [ ] import + feedListeners.add อยู่

### 8. NUCHULA Files (ต้องมี)
- [ ] `src/commands/team-crud.ts` — CRUD + sanitize + dispatch
- [ ] `src/engine/task-automation.ts` — auto-complete + chain + notifications + learning
- [ ] `src/api/reports.ts` — GET /reports/tasks
- [ ] `ui/office/` — built maw-ui assets

---

## Post-merge Verification

```bash
# Run after merge + before push
bun test                                    # All tests pass
bash scripts/verify-nuchula-patches.sh      # All patches present
bash scripts/post-deploy-verify.sh maw-js   # 8/8 after deploy
```

---

*Created: 2026-04-11 by keeper. Update this file when adding new NUCHULA patches.*
