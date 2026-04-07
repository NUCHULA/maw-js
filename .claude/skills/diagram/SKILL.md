---
name: diagram
description: The Oracle flat architecture diagram — mycelium model, Apr 7 2026
---

# /diagram

Print this:

```
                    ╭─────╮
              ╭─────┤ Nat ├─────╮
              │     ╰──┬──╯     │
              │        │        │
     ╭────────┼────────┼────────┼────────╮
     │        │        │        │        │
   Pulse    Neo    Floodboy  Fireman  Mother  ...
     │        │        │        │        │
     └────────┴────┬───┴────────┴────────┘
                   │
              all peers
           all talk to Nat
         all talk to each other
```

```bash
maw soul-sync pulse --from floodboy
maw soul-sync neo --from fireman
maw ss floodboy --from fireman
```

> "Each oracle should be flat. Because Nat is a random guy."

```
Tree:       root → branch → leaf   (fixed paths)     ← v1.6.0
Mycelium:   node ↔ node ↔ node    (any path)         ← the truth
```

Origin: FB Oct 18 2025 → code Apr 6-7 2026 → hierarchy dissolved same night.
Session f443d4f9. Gist: fefcb59e9df390bd70981bc6c79a3a53
