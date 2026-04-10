/**
 * Plugin System — Drupal-style named hooks, Fastify-style registration.
 *
 * Plugin authors write:
 *   export default function(hooks) {
 *     hooks.on("SessionStart", (event) => { ... });
 *   }
 *
 * Plugins load from ~/.oracle/plugins/*.ts (file = plugin, convention over config).
 * All plugins share the same hooks — like Drupal's hook_invoke_all.
 */

import type { FeedEvent, FeedEventType } from "./lib/feed";

type Handler = (event: FeedEvent) => void | Promise<void>;
type Filter = (event: FeedEvent) => FeedEvent;
export type MawPlugin = (hooks: MawHooks) => void | (() => void);

export interface MawHooks {
  on(event: FeedEventType | "*", fn: Handler): void;
  filter(event: FeedEventType | "*", fn: Filter): void;
}

export interface PluginInfo {
  name: string;
  type: "ts" | "js" | "wasm-shared" | "wasm-wasi" | "unknown";
  loadedAt: string;
  events: number;
  errors: number;
  lastEvent?: string;
  lastError?: string;
}

export class PluginSystem {
  private handlers = new Map<string, Handler[]>();
  private filters = new Map<string, Filter[]>();
  private teardowns: Array<() => void> = [];
  private _plugins: PluginInfo[] = [];
  private _totalEvents = 0;
  private _totalErrors = 0;
  private _startedAt = new Date().toISOString();

  readonly hooks: MawHooks = {
    on: (event, fn) => {
      const list = this.handlers.get(event);
      if (list) list.push(fn);
      else this.handlers.set(event, [fn]);
    },
    filter: (event, fn) => {
      const list = this.filters.get(event);
      if (list) list.push(fn);
      else this.filters.set(event, [fn]);
    },
  };

  async emit(event: FeedEvent) {
    this._totalEvents++;

    // Phase 1: FILTER — modify event before handlers (Drupal hook_alter)
    for (const fn of this.filters.get(event.event) ?? []) {
      try { event = fn(event); } catch (err) {
        this._totalErrors++;
        console.error(`[plugin:filter] ${event.event}:`, (err as Error).message);
      }
    }
    for (const fn of this.filters.get("*") ?? []) {
      try { event = fn(event); } catch (err) {
        this._totalErrors++;
        console.error(`[plugin:filter] *:`, (err as Error).message);
      }
    }

    // Phase 2: HANDLE — observe/act on (filtered) event
    for (const fn of this.handlers.get(event.event) ?? []) {
      try { await fn(event); } catch (err) {
        this._totalErrors++;
        console.error(`[plugin] ${event.event}:`, (err as Error).message);
      }
    }
    for (const fn of this.handlers.get("*") ?? []) {
      try { await fn(event); } catch (err) {
        this._totalErrors++;
        console.error(`[plugin] *:`, (err as Error).message);
      }
    }

    // Update per-plugin stats
    for (const p of this._plugins) {
      p.events = this._totalEvents;
      p.lastEvent = event.event;
    }
  }

  load(plugin: MawPlugin) {
    const teardown = plugin(this.hooks);
    if (typeof teardown === "function") this.teardowns.push(teardown);
  }

  register(name: string, type: PluginInfo["type"]) {
    this._plugins.push({ name, type, loadedAt: new Date().toISOString(), events: 0, errors: 0 });
  }

  stats() {
    return {
      startedAt: this._startedAt,
      plugins: this._plugins,
      totalEvents: this._totalEvents,
      totalErrors: this._totalErrors,
      handlers: Object.fromEntries([...this.handlers].map(([k, v]) => [k, v.length])),
      filters: Object.fromEntries([...this.filters].map(([k, v]) => [k, v.length])),
    };
  }

  destroy() {
    for (const fn of this.teardowns) {
      try { fn(); } catch {}
    }
  }
}

/**
 * Load a WASM plugin. Contract:
 *   - Module exports `handle(ptr, len)` and `memory`
 *   - We write JSON event to shared memory, call handle()
 *   - OR: module exports `on_event` string array for filtering
 *   - Fallback: if module exports `_start` (WASI), run as subprocess per event
 */
async function loadWasmPlugin(system: PluginSystem, path: string, filename: string) {
  const { readFileSync } = require("fs");
  const wasmBytes = readFileSync(path);
  const mod = new WebAssembly.Module(wasmBytes);
  const exports = WebAssembly.Module.exports(mod);
  const exportNames = exports.map((e: { name: string }) => e.name);

  // Check for handle + memory pattern (shared memory plugin)
  if (exportNames.includes("handle") && exportNames.includes("memory")) {
    const instance = new WebAssembly.Instance(mod);
    const memory = instance.exports.memory as WebAssembly.Memory;
    const handle = instance.exports.handle as (ptr: number, len: number) => void;
    const encoder = new TextEncoder();

    system.load((hooks) => {
      hooks.on("*", (event) => {
        const json = encoder.encode(JSON.stringify(event));
        const buf = new Uint8Array(memory.buffer);
        buf.set(json, 0);
        handle(0, json.length);
      });
    });
    system.register(filename, "wasm-shared");
    console.log(`[plugin] loaded wasm: ${filename} (shared memory)`);
    return;
  }

  // Check for WASI module (_start export) — pass event as JSON via stdin
  if (exportNames.includes("_start")) {
    const { WASI } = require("wasi");
    system.load((hooks) => {
      hooks.on("*", (event) => {
        try {
          const input = Buffer.from(JSON.stringify(event) + "\n");
          let pos = 0;
          const wasi = new WASI({
            version: "preview1",
            args: [filename, event.event],
            env: {
              MAW_EVENT: event.event,
              MAW_ORACLE: event.oracle,
              MAW_HOST: event.host,
              MAW_MESSAGE: event.message,
              MAW_SESSION: event.sessionId,
              MAW_TIMESTAMP: event.timestamp,
            },
            getStdin: () => {
              const chunk = input.subarray(pos, pos + 4096);
              pos += chunk.length;
              return chunk.length > 0 ? chunk : null;
            },
            sendStdout: (data: Buffer) => process.stdout.write(data),
            sendStderr: (data: Buffer) => process.stderr.write(data),
          });
          const instance = new WebAssembly.Instance(mod, {
            wasi_snapshot_preview1: wasi.wasiImport,
          });
          wasi.start(instance);
        } catch {}
      });
    });
    system.register(filename, "wasm-wasi");
    console.log(`[plugin] loaded wasm: ${filename} (WASI)`);
    return;
  }

  // Skip — not a plugin-compatible WASM module (like demo.wasm with just add/mul)
  console.log(`[plugin] skipped wasm: ${filename} (no handle or _start export)`);
}

/**
 * Load plugins from a directory (convention: ~/.oracle/plugins/).
 *
 * Supported formats:
 *   .ts / .js  — TypeScript/JavaScript: export default function(hooks) { ... }
 *   .wasm      — WebAssembly: export handle(ptr, len) + memory, or WASI _start
 */
export async function loadPlugins(system: PluginSystem, dir: string) {
  const { readdirSync } = require("fs");
  const { join } = require("path");
  let files: string[];
  try {
    files = readdirSync(dir).filter((f: string) =>
      f.endsWith(".ts") || f.endsWith(".js") || f.endsWith(".wasm")
    );
  } catch {
    return; // dir doesn't exist — no plugins, no error
  }
  for (const file of files) {
    const path = join(dir, file);
    try {
      if (file.endsWith(".wasm")) {
        await loadWasmPlugin(system, path, file);
      } else {
        const mod = await import(path);
        const plugin = mod.default ?? mod;
        if (typeof plugin === "function") {
          system.load(plugin);
          system.register(file, file.endsWith(".ts") ? "ts" : "js");
          console.log(`[plugin] loaded: ${file}`);
        }
      }
    } catch (err) {
      console.error(`[plugin] failed to load ${file}:`, (err as Error).message);
    }
  }
}
