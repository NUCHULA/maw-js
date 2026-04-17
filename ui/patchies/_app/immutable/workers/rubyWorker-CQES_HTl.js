(async ()=>{
    const k = Symbol.for("@ts-pattern/matcher"), G = Symbol.for("@ts-pattern/isVariadic"), J = "@ts-pattern/anonymous-select-key", z = (t)=>!!(t && typeof t == "object"), W = (t)=>t && !!t[k], b = (t, e, n)=>{
        if (W(t)) {
            const s = t[k](), { matched: r, selections: o } = s.match(e);
            return r && o && Object.keys(o).forEach((l)=>n(l, o[l])), r;
        }
        if (z(t)) {
            if (!z(e)) return !1;
            if (Array.isArray(t)) {
                if (!Array.isArray(e)) return !1;
                let s = [], r = [], o = [];
                for (const l of t.keys()){
                    const a = t[l];
                    W(a) && a[G] ? o.push(a) : o.length ? r.push(a) : s.push(a);
                }
                if (o.length) {
                    if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                    if (e.length < s.length + r.length) return !1;
                    const l = e.slice(0, s.length), a = r.length === 0 ? [] : e.slice(-r.length), y = e.slice(s.length, r.length === 0 ? 1 / 0 : -r.length);
                    return s.every((c, f)=>b(c, l[f], n)) && r.every((c, f)=>b(c, a[f], n)) && (o.length === 0 || b(o[0], y, n));
                }
                return t.length === e.length && t.every((l, a)=>b(l, e[a], n));
            }
            return Reflect.ownKeys(t).every((s)=>{
                const r = t[s];
                return (s in e || W(o = r) && o[k]().matcherType === "optional") && b(r, e[s], n);
                var o;
            });
        }
        return Object.is(e, t);
    }, P = (t)=>{
        var e, n, s;
        return z(t) ? W(t) ? (e = (n = (s = t[k]()).getSelectionKeys) == null ? void 0 : n.call(s)) != null ? e : [] : Array.isArray(t) ? R(t, P) : R(Object.values(t), P) : [];
    }, R = (t, e)=>t.reduce((n, s)=>n.concat(e(s)), []);
    function d(t) {
        return Object.assign(t, {
            optional: ()=>Q(t),
            and: (e)=>u(t, e),
            or: (e)=>X(t, e),
            select: (e)=>e === void 0 ? B(t) : B(e, t)
        });
    }
    function Q(t) {
        return d({
            [k]: ()=>({
                    match: (e)=>{
                        let n = {};
                        const s = (r, o)=>{
                            n[r] = o;
                        };
                        return e === void 0 ? (P(t).forEach((r)=>s(r, void 0)), {
                            matched: !0,
                            selections: n
                        }) : {
                            matched: b(t, e, s),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>P(t),
                    matcherType: "optional"
                })
        });
    }
    function u(...t) {
        return d({
            [k]: ()=>({
                    match: (e)=>{
                        let n = {};
                        const s = (r, o)=>{
                            n[r] = o;
                        };
                        return {
                            matched: t.every((r)=>b(r, e, s)),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>R(t, P),
                    matcherType: "and"
                })
        });
    }
    function X(...t) {
        return d({
            [k]: ()=>({
                    match: (e)=>{
                        let n = {};
                        const s = (r, o)=>{
                            n[r] = o;
                        };
                        return R(t, P).forEach((r)=>s(r, void 0)), {
                            matched: t.some((r)=>b(r, e, s)),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>R(t, P),
                    matcherType: "or"
                })
        });
    }
    function i(t) {
        return {
            [k]: ()=>({
                    match: (e)=>({
                            matched: !!t(e)
                        })
                })
        };
    }
    function B(...t) {
        const e = typeof t[0] == "string" ? t[0] : void 0, n = t.length === 2 ? t[1] : typeof t[0] == "string" ? void 0 : t[0];
        return d({
            [k]: ()=>({
                    match: (s)=>{
                        let r = {
                            [e ?? J]: s
                        };
                        return {
                            matched: n === void 0 || b(n, s, (o, l)=>{
                                r[o] = l;
                            }),
                            selections: r
                        };
                    },
                    getSelectionKeys: ()=>[
                            e ?? J
                        ].concat(n === void 0 ? [] : P(n))
                })
        });
    }
    function v(t) {
        return typeof t == "number";
    }
    function S(t) {
        return typeof t == "string";
    }
    function T(t) {
        return typeof t == "bigint";
    }
    d(i(function(t) {
        return !0;
    }));
    const x = (t)=>Object.assign(d(t), {
            startsWith: (e)=>{
                return x(u(t, (n = e, i((s)=>S(s) && s.startsWith(n)))));
                var n;
            },
            endsWith: (e)=>{
                return x(u(t, (n = e, i((s)=>S(s) && s.endsWith(n)))));
                var n;
            },
            minLength: (e)=>x(u(t, ((n)=>i((s)=>S(s) && s.length >= n))(e))),
            length: (e)=>x(u(t, ((n)=>i((s)=>S(s) && s.length === n))(e))),
            maxLength: (e)=>x(u(t, ((n)=>i((s)=>S(s) && s.length <= n))(e))),
            includes: (e)=>{
                return x(u(t, (n = e, i((s)=>S(s) && s.includes(n)))));
                var n;
            },
            regex: (e)=>{
                return x(u(t, (n = e, i((s)=>S(s) && !!s.match(n)))));
                var n;
            }
        });
    x(i(S));
    const _ = (t)=>Object.assign(d(t), {
            between: (e, n)=>_(u(t, ((s, r)=>i((o)=>v(o) && s <= o && r >= o))(e, n))),
            lt: (e)=>_(u(t, ((n)=>i((s)=>v(s) && s < n))(e))),
            gt: (e)=>_(u(t, ((n)=>i((s)=>v(s) && s > n))(e))),
            lte: (e)=>_(u(t, ((n)=>i((s)=>v(s) && s <= n))(e))),
            gte: (e)=>_(u(t, ((n)=>i((s)=>v(s) && s >= n))(e))),
            int: ()=>_(u(t, i((e)=>v(e) && Number.isInteger(e)))),
            finite: ()=>_(u(t, i((e)=>v(e) && Number.isFinite(e)))),
            positive: ()=>_(u(t, i((e)=>v(e) && e > 0))),
            negative: ()=>_(u(t, i((e)=>v(e) && e < 0)))
        });
    _(i(v));
    const $ = (t)=>Object.assign(d(t), {
            between: (e, n)=>$(u(t, ((s, r)=>i((o)=>T(o) && s <= o && r >= o))(e, n))),
            lt: (e)=>$(u(t, ((n)=>i((s)=>T(s) && s < n))(e))),
            gt: (e)=>$(u(t, ((n)=>i((s)=>T(s) && s > n))(e))),
            lte: (e)=>$(u(t, ((n)=>i((s)=>T(s) && s <= n))(e))),
            gte: (e)=>$(u(t, ((n)=>i((s)=>T(s) && s >= n))(e))),
            positive: ()=>$(u(t, i((e)=>T(e) && e > 0))),
            negative: ()=>$(u(t, i((e)=>T(e) && e < 0)))
        });
    $(i(T));
    d(i(function(t) {
        return typeof t == "boolean";
    }));
    d(i(function(t) {
        return typeof t == "symbol";
    }));
    d(i(function(t) {
        return t == null;
    }));
    d(i(function(t) {
        return t != null;
    }));
    class Z extends Error {
        constructor(e){
            let n;
            try {
                n = JSON.stringify(e);
            } catch  {
                n = e;
            }
            super(`Pattern matching error: no pattern matches value ${n}`), this.input = void 0, this.input = e;
        }
    }
    const L = {
        matched: !1,
        value: void 0
    };
    function ee(t) {
        return new K(t, L);
    }
    class K {
        constructor(e, n){
            this.input = void 0, this.state = void 0, this.input = e, this.state = n;
        }
        with(...e) {
            if (this.state.matched) return this;
            const n = e[e.length - 1], s = [
                e[0]
            ];
            let r;
            e.length === 3 && typeof e[1] == "function" ? r = e[1] : e.length > 2 && s.push(...e.slice(1, e.length - 1));
            let o = !1, l = {};
            const a = (c, f)=>{
                o = !0, l[c] = f;
            }, y = !s.some((c)=>b(c, this.input, a)) || r && !r(this.input) ? L : {
                matched: !0,
                value: n(o ? J in l ? l[J] : l : this.input, this.input)
            };
            return new K(this.input, y);
        }
        when(e, n) {
            if (this.state.matched) return this;
            const s = !!e(this.input);
            return new K(this.input, s ? {
                matched: !0,
                value: n(this.input, this.input)
            } : L);
        }
        otherwise(e) {
            return this.state.matched ? this.state.value : e(this.input);
        }
        exhaustive(e = te) {
            return this.state.matched ? this.state.value : e(this.input);
        }
        run() {
            return this.exhaustive();
        }
        returnType() {
            return this;
        }
        narrow() {
            return this;
        }
    }
    function te(t) {
        throw new Z(t);
    }
    function ne(t) {
        const { nodeId: e, onIncomingMessage: n, onError: s } = t;
        let r = null, o = [];
        const l = new Map;
        let a = [];
        function y(h, m) {
            if (!r || o.length === 0) return [];
            const F = o.filter((p)=>m?.to === void 0 || p.outlet === m.to);
            for (const p of F)r.postMessage({
                fromNodeId: e,
                targetNodeId: p.targetNodeId,
                inlet: p.inlet,
                inletKey: p.inletKey,
                data: h
            });
            return F.map((p)=>p.targetNodeId);
        }
        function c(h, m) {
            if (l.size === 0 || a.length === 0) return [];
            const F = a.filter((C)=>m?.to === void 0 || C.outlet === m.to), p = [];
            for (const C of F){
                const O = l.get(C.targetNodeId);
                O && (O.postMessage({
                    fromNodeId: e,
                    targetNodeId: C.targetNodeId,
                    inlet: C.inlet,
                    inletKey: C.inletKey,
                    data: h
                }), p.push(C.targetNodeId));
            }
            return p;
        }
        function f(h) {
            r = h, h.start();
        }
        function w(h, m, F) {
            m ? (l.set(m, h), h.start()) : F && (l.set(F, h), h.onmessage = (p)=>{
                const { data: C, inlet: O, inletKey: q, fromNodeId: Y } = p.data;
                try {
                    const A = n(C, {
                        source: Y,
                        inlet: O,
                        inletKey: q
                    });
                    A instanceof Promise && A.catch(s);
                } catch (A) {
                    s(A);
                }
            }, h.start());
        }
        function j(h) {
            o = h;
        }
        function D(h) {
            a = h;
        }
        function H() {
            r?.close(), r = null, o = [];
            for (const h of l.values())h.close();
            l.clear(), a = [];
        }
        return {
            sendToTargets: (h, m)=>[
                    ...y(h, m),
                    ...c(h, m)
                ],
            handleSetRenderPort: f,
            handleSetWorkerPort: w,
            handleUpdateRenderConnections: j,
            handleUpdateWorkerConnections: D,
            cleanup: H
        };
    }
    const se = 1200;
    class re {
        samples;
        capacity;
        head = 0;
        count = 0;
        messagesSinceFlush = 0;
        lastFlushTime = performance.now();
        constructor(e = se){
            this.capacity = e, this.samples = new Float64Array(e);
        }
        record(e) {
            this.samples[this.head] = e, this.head = (this.head + 1) % this.capacity, this.count < this.capacity && this.count++, this.messagesSinceFlush++;
        }
        flush(e) {
            const n = (e - this.lastFlushTime) / 1e3, s = n > 0 ? this.messagesSinceFlush / n : 0, r = this.messagesSinceFlush;
            if (this.messagesSinceFlush = 0, this.lastFlushTime = e, this.count === 0) return {
                avg: 0,
                max: 0,
                p95: 0,
                last: 0,
                callsPerSecond: 0
            };
            const o = new Float64Array(this.count);
            let l = 0;
            for(let f = 0; f < this.count; f++){
                const w = (this.head - this.count + f + this.capacity) % this.capacity, j = this.samples[w];
                o[f] = j, j > l && (l = j);
            }
            o.sort();
            const a = o[Math.floor(this.count * .95)], y = this.samples[(this.head - 1 + this.capacity) % this.capacity];
            let c = 0;
            if (r > 0) {
                let f = 0;
                for(let w = 0; w < r; w++){
                    const j = (this.head - r + w + this.capacity) % this.capacity;
                    f += this.samples[j];
                }
                c = f / r;
            }
            return {
                avg: c,
                max: l,
                p95: a,
                last: y,
                callsPerSecond: s
            };
        }
        reset() {
            this.head = 0, this.count = 0, this.messagesSinceFlush = 0, this.lastFlushTime = performance.now();
        }
    }
    const oe = 500;
    class ae {
        constructor(e){
            this.onFlush = e;
        }
        enabled = !1;
        collectors = new Map;
        flushInterval = null;
        get isEnabled() {
            return this.enabled;
        }
        setEnabled(e) {
            this.enabled = e, e ? this.startFlush() : this.stopFlush();
        }
        measure(e, n, s) {
            if (!this.enabled) return s();
            const r = performance.now(), o = `${e}|${n}`, l = ()=>{
                let a = this.collectors.get(o);
                return a || (a = new re, this.collectors.set(o, a)), a;
            };
            try {
                const a = s();
                return a instanceof Promise ? a.finally(()=>{
                    l().record(performance.now() - r);
                }) : l().record(performance.now() - r), a;
            } catch (a) {
                throw l().record(performance.now() - r), a;
            }
        }
        flushSync() {
            const e = performance.now();
            for (const [n, s] of this.collectors){
                const r = s.flush(e);
                if (r.avg === 0 && r.callsPerSecond === 0) continue;
                const o = n.lastIndexOf("|"), l = n.slice(0, o), a = n.slice(o + 1);
                this.onFlush(l, a, r);
            }
        }
        startFlush() {
            this.flushInterval === null && (this.flushInterval = setInterval(()=>this.flushSync(), oe));
        }
        stopFlush() {
            this.flushInterval !== null && (clearInterval(this.flushInterval), this.flushInterval = null);
            try {
                this.flushSync();
            } catch  {}
            this.collectors.clear();
        }
    }
    let U = null, N = null;
    const I = new ae((t, e, n)=>{
        self.postMessage({
            type: "profilerStats",
            nodeId: t,
            category: e,
            stats: n
        });
    }), M = new Map;
    function le(t) {
        const e = {
            messageCallbacks: [],
            cleanupCallbacks: []
        };
        return e.directChannel = ne({
            nodeId: t,
            onIncomingMessage: (n, s)=>{
                I.measure(t, "message", ()=>{
                    for (const r of e.messageCallbacks)r(n, s);
                });
            },
            onError: (n)=>{
                const s = n instanceof Error ? n.message : String(n);
                g({
                    type: "consoleOutput",
                    nodeId: t,
                    level: "error",
                    args: [
                        s
                    ]
                });
            }
        }), e;
    }
    function E(t) {
        return M.has(t) || M.set(t, le(t)), M.get(t);
    }
    function g(t) {
        self.postMessage(t);
    }
    function ce(t, e, n = "Error in recv()") {
        const s = (r)=>{
            const o = r instanceof Error ? r.message : String(r);
            g({
                type: "consoleOutput",
                nodeId: t,
                level: "error",
                args: [
                    `${n}: ${o}`
                ]
            });
        };
        try {
            const r = e();
            r instanceof Promise && r.catch(s);
        } catch (r) {
            s(r);
        }
    }
    async function ie(t) {
        if (!U) {
            if (N) {
                await N;
                return;
            }
            N = (async ()=>{
                g({
                    type: "vmInitializing",
                    nodeId: t
                });
                try {
                    const { DefaultRubyVM: e } = await import("https://cdn.jsdelivr.net/npm/@ruby/wasm-wasi@2.8.1/dist/browser/+esm").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), n = await fetch("https://cdn.jsdelivr.net/npm/@ruby/4.0-wasm-wasi@2.8.1/dist/ruby+stdlib.wasm"), s = await WebAssembly.compileStreaming(n), { vm: r } = await e(s);
                    U = r, g({
                        type: "vmReady",
                        nodeId: t
                    });
                } catch (e) {
                    const n = e instanceof Error ? e.message : String(e);
                    throw g({
                        type: "consoleOutput",
                        nodeId: t,
                        level: "error",
                        args: [
                            `Failed to initialize Ruby VM: ${n}`
                        ]
                    }), e;
                }
            })(), await N;
        }
    }
    function ue(t) {
        const e = E(t);
        return {
            console: {
                log: (...c)=>g({
                        type: "consoleOutput",
                        nodeId: t,
                        level: "log",
                        args: c
                    }),
                warn: (...c)=>g({
                        type: "consoleOutput",
                        nodeId: t,
                        level: "warn",
                        args: c
                    }),
                error: (...c)=>g({
                        type: "consoleOutput",
                        nodeId: t,
                        level: "error",
                        args: c
                    }),
                debug: (...c)=>g({
                        type: "consoleOutput",
                        nodeId: t,
                        level: "debug",
                        args: c
                    }),
                info: (...c)=>g({
                        type: "consoleOutput",
                        nodeId: t,
                        level: "info",
                        args: c
                    })
            },
            send: (c, f)=>{
                const w = e.directChannel.sendToTargets(c, f);
                g({
                    type: "sendMessage",
                    nodeId: t,
                    data: c,
                    options: {
                        ...f,
                        excludeTargets: w
                    }
                });
            },
            onMessage: (c)=>{
                e.messageCallbacks.push(c), g({
                    type: "callbackRegistered",
                    nodeId: t,
                    callbackType: "message"
                });
            },
            onCleanup: (c)=>{
                e.cleanupCallbacks.push(c);
            },
            setPortCount: (c = 1, f = 1)=>{
                g({
                    type: "setPortCount",
                    nodeId: t,
                    inletCount: c,
                    outletCount: f
                });
            },
            setTitle: (c)=>{
                g({
                    type: "setTitle",
                    nodeId: t,
                    title: c
                });
            },
            flash: ()=>{
                g({
                    type: "flash",
                    nodeId: t
                });
            }
        };
    }
    function V(t) {
        const e = M.get(t);
        if (e) {
            for (const n of e.cleanupCallbacks)try {
                n();
            } catch  {}
            e.cleanupCallbacks = [], e.messageCallbacks = [];
        }
    }
    async function he(t, e) {
        const n = ue(t);
        try {
            if (await ie(t), !U) throw new Error("Ruby VM not initialized");
            globalThis.__rubyContext = n, globalThis.__rubyHelpers = {
                typeof: (a)=>typeof a,
                isArray: (a)=>Array.isArray(a),
                isNull: (a)=>a === null
            };
            const s = `
require "js"

$__ctx = JS.global[:__rubyContext]
$__helpers = JS.global[:__rubyHelpers]

# Convert JS values to native Ruby values
def js_to_ruby(val)
  return nil if val.nil?
  return val unless val.is_a?(JS::Object)

  type = $__helpers.call(:typeof, val).to_s
  case type
  when "number"
    str = val.to_s
    str.include?(".") ? str.to_f : str.to_i
  when "string"
    val.to_s
  when "boolean"
    val.to_s == "true"
  when "undefined"
    nil
  when "object"
    # Check if null (typeof null === "object" in JS)
    if $__helpers.call(:isNull, val).to_s == "true"
      nil
    elsif $__helpers.call(:isArray, val).to_s == "true"
      # Convert array
      len = val[:length].to_i
      (0...len).map { |i| js_to_ruby(val[i]) }
    else
      # Convert object to hash
      keys = JS.global[:Object].call(:keys, val)
      len = keys[:length].to_i
      hash = {}
      (0...len).each do |i|
        key = keys[i].to_s
        hash[key] = js_to_ruby(val[key])
      end
      hash
    end
  else
    val.to_s
  end
end

# Helper methods for Patchies integration
# Use call(:method_name, args) syntax to invoke JS functions
def emit(data, to: nil)
  if to.nil?
    $__ctx.call(:send, data)
  else
    $__ctx.call(:send, data, JS.eval("return { to: " + to.to_s + " }"))
  end
end

def recv(&block)
  $__recv_callback = block
  $__ctx.call(:onMessage, proc { |data, meta|
    # Convert JS values to native Ruby values
    ruby_data = js_to_ruby(data)
    ruby_meta = js_to_ruby(meta)
    $__recv_callback.call(ruby_data, ruby_meta)
  })
end

def set_port_count(inlet_count = 1, outlet_count = 1)
  $__ctx.call(:setPortCount, inlet_count, outlet_count)
end

def set_title(title)
  $__ctx.call(:setTitle, title.to_s)
end

def flash
  $__ctx.call(:flash)
end

def on_cleanup(&block)
  $__ctx.call(:onCleanup, block)
end

# Override puts to use our console
$__console = $__ctx[:console]
def puts(*args)
  args.each do |arg|
    $__console.call(:log, arg.to_s)
  end
  nil
end

def p(*args)
  args.each do |arg|
    $__console.call(:log, arg.inspect)
  end
  args.length == 1 ? args[0] : args
end

def warn(*args)
  args.each do |arg|
    $__console.call(:warn, arg.to_s)
  end
  nil
end

# User code starts here
${e}
`, r = performance.now(), o = await U.evalAsync(s), l = I.isEnabled ? performance.now() - r : void 0;
            if (o != null) try {
                const a = o.toJS?.() ?? o.toString();
                if (a != null && a !== "nil") {
                    const y = String(a);
                    y !== "nil" && y !== "undefined" && n.console.log(a);
                }
            } catch  {}
            g({
                type: "executionComplete",
                nodeId: t,
                success: !0,
                initDurationMs: l
            });
        } catch (s) {
            const r = s instanceof Error ? s.message : String(s);
            n.console.error(`Ruby error: ${r}`), g({
                type: "executionComplete",
                nodeId: t,
                success: !1,
                error: r
            });
        }
    }
    self.onmessage = async (t)=>{
        const { nodeId: e } = t.data;
        ee(t.data).with({
            type: "executeCode"
        }, async ({ code: n })=>{
            V(e), await he(e, n);
        }).with({
            type: "incomingMessage"
        }, ({ data: n, meta: s })=>{
            const r = M.get(e);
            r?.messageCallbacks.length && I.measure(e, "message", ()=>{
                for (const o of r.messageCallbacks)ce(e, ()=>o(n, s));
            });
        }).with({
            type: "cleanup"
        }, ()=>{
            V(e);
        }).with({
            type: "destroy"
        }, ()=>{
            const n = M.get(e);
            V(e), n?.directChannel.cleanup(), M.delete(e);
        }).with({
            type: "setRenderPort"
        }, ()=>{
            E(e).directChannel.handleSetRenderPort(t.ports[0]);
        }).with({
            type: "updateRenderConnections"
        }, ({ connections: n })=>{
            E(e).directChannel.handleUpdateRenderConnections(n);
        }).with({
            type: "setWorkerPort"
        }, ({ targetNodeId: n, sourceNodeId: s })=>{
            E(e).directChannel.handleSetWorkerPort(t.ports[0], n, s);
        }).with({
            type: "updateWorkerConnections"
        }, ({ connections: n })=>{
            E(e).directChannel.handleUpdateWorkerConnections(n);
        }).with({
            type: "profilerEnable"
        }, ({ enabled: n })=>{
            I.setEnabled(n);
        }).otherwise(()=>{});
    };
    g({
        type: "ready",
        nodeId: ""
    });
    console.log("[ruby worker] initialized");
})();
