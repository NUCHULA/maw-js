(async ()=>{
    const y = Symbol.for("@ts-pattern/matcher"), B = Symbol.for("@ts-pattern/isVariadic"), M = "@ts-pattern/anonymous-select-key", C = (t)=>!!(t && typeof t == "object"), S = (t)=>t && !!t[y], p = (t, e, s)=>{
        if (S(t)) {
            const n = t[y](), { matched: r, selections: o } = n.match(e);
            return r && o && Object.keys(o).forEach((c)=>s(c, o[c])), r;
        }
        if (C(t)) {
            if (!C(e)) return !1;
            if (Array.isArray(t)) {
                if (!Array.isArray(e)) return !1;
                let n = [], r = [], o = [];
                for (const c of t.keys()){
                    const u = t[c];
                    S(u) && u[B] ? o.push(u) : o.length ? r.push(u) : n.push(u);
                }
                if (o.length) {
                    if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                    if (e.length < n.length + r.length) return !1;
                    const c = e.slice(0, n.length), u = r.length === 0 ? [] : e.slice(-r.length), g = e.slice(n.length, r.length === 0 ? 1 / 0 : -r.length);
                    return n.every((f, A)=>p(f, c[A], s)) && r.every((f, A)=>p(f, u[A], s)) && (o.length === 0 || p(o[0], g, s));
                }
                return t.length === e.length && t.every((c, u)=>p(c, e[u], s));
            }
            return Reflect.ownKeys(t).every((n)=>{
                const r = t[n];
                return (n in e || S(o = r) && o[y]().matcherType === "optional") && p(r, e[n], s);
                var o;
            });
        }
        return Object.is(e, t);
    }, O = (t)=>{
        var e, s, n;
        return C(t) ? S(t) ? (e = (s = (n = t[y]()).getSelectionKeys) == null ? void 0 : s.call(n)) != null ? e : [] : Array.isArray(t) ? E(t, O) : E(Object.values(t), O) : [];
    }, E = (t, e)=>t.reduce((s, n)=>s.concat(e(n)), []);
    function l(t) {
        return Object.assign(t, {
            optional: ()=>K(t),
            and: (e)=>a(t, e),
            or: (e)=>T(t, e),
            select: (e)=>e === void 0 ? k(t) : k(e, t)
        });
    }
    function K(t) {
        return l({
            [y]: ()=>({
                    match: (e)=>{
                        let s = {};
                        const n = (r, o)=>{
                            s[r] = o;
                        };
                        return e === void 0 ? (O(t).forEach((r)=>n(r, void 0)), {
                            matched: !0,
                            selections: s
                        }) : {
                            matched: p(t, e, n),
                            selections: s
                        };
                    },
                    getSelectionKeys: ()=>O(t),
                    matcherType: "optional"
                })
        });
    }
    function a(...t) {
        return l({
            [y]: ()=>({
                    match: (e)=>{
                        let s = {};
                        const n = (r, o)=>{
                            s[r] = o;
                        };
                        return {
                            matched: t.every((r)=>p(r, e, n)),
                            selections: s
                        };
                    },
                    getSelectionKeys: ()=>E(t, O),
                    matcherType: "and"
                })
        });
    }
    function T(...t) {
        return l({
            [y]: ()=>({
                    match: (e)=>{
                        let s = {};
                        const n = (r, o)=>{
                            s[r] = o;
                        };
                        return E(t, O).forEach((r)=>n(r, void 0)), {
                            matched: t.some((r)=>p(r, e, n)),
                            selections: s
                        };
                    },
                    getSelectionKeys: ()=>E(t, O),
                    matcherType: "or"
                })
        });
    }
    function i(t) {
        return {
            [y]: ()=>({
                    match: (e)=>({
                            matched: !!t(e)
                        })
                })
        };
    }
    function k(...t) {
        const e = typeof t[0] == "string" ? t[0] : void 0, s = t.length === 2 ? t[1] : typeof t[0] == "string" ? void 0 : t[0];
        return l({
            [y]: ()=>({
                    match: (n)=>{
                        let r = {
                            [e ?? M]: n
                        };
                        return {
                            matched: s === void 0 || p(s, n, (o, c)=>{
                                r[o] = c;
                            }),
                            selections: r
                        };
                    },
                    getSelectionKeys: ()=>[
                            e ?? M
                        ].concat(s === void 0 ? [] : O(s))
                })
        });
    }
    function h(t) {
        return typeof t == "number";
    }
    function m(t) {
        return typeof t == "string";
    }
    function v(t) {
        return typeof t == "bigint";
    }
    l(i(function(t) {
        return !0;
    }));
    const w = (t)=>Object.assign(l(t), {
            startsWith: (e)=>{
                return w(a(t, (s = e, i((n)=>m(n) && n.startsWith(s)))));
                var s;
            },
            endsWith: (e)=>{
                return w(a(t, (s = e, i((n)=>m(n) && n.endsWith(s)))));
                var s;
            },
            minLength: (e)=>w(a(t, ((s)=>i((n)=>m(n) && n.length >= s))(e))),
            length: (e)=>w(a(t, ((s)=>i((n)=>m(n) && n.length === s))(e))),
            maxLength: (e)=>w(a(t, ((s)=>i((n)=>m(n) && n.length <= s))(e))),
            includes: (e)=>{
                return w(a(t, (s = e, i((n)=>m(n) && n.includes(s)))));
                var s;
            },
            regex: (e)=>{
                return w(a(t, (s = e, i((n)=>m(n) && !!n.match(s)))));
                var s;
            }
        });
    w(i(m));
    const d = (t)=>Object.assign(l(t), {
            between: (e, s)=>d(a(t, ((n, r)=>i((o)=>h(o) && n <= o && r >= o))(e, s))),
            lt: (e)=>d(a(t, ((s)=>i((n)=>h(n) && n < s))(e))),
            gt: (e)=>d(a(t, ((s)=>i((n)=>h(n) && n > s))(e))),
            lte: (e)=>d(a(t, ((s)=>i((n)=>h(n) && n <= s))(e))),
            gte: (e)=>d(a(t, ((s)=>i((n)=>h(n) && n >= s))(e))),
            int: ()=>d(a(t, i((e)=>h(e) && Number.isInteger(e)))),
            finite: ()=>d(a(t, i((e)=>h(e) && Number.isFinite(e)))),
            positive: ()=>d(a(t, i((e)=>h(e) && e > 0))),
            negative: ()=>d(a(t, i((e)=>h(e) && e < 0)))
        });
    d(i(h));
    const b = (t)=>Object.assign(l(t), {
            between: (e, s)=>b(a(t, ((n, r)=>i((o)=>v(o) && n <= o && r >= o))(e, s))),
            lt: (e)=>b(a(t, ((s)=>i((n)=>v(n) && n < s))(e))),
            gt: (e)=>b(a(t, ((s)=>i((n)=>v(n) && n > s))(e))),
            lte: (e)=>b(a(t, ((s)=>i((n)=>v(n) && n <= s))(e))),
            gte: (e)=>b(a(t, ((s)=>i((n)=>v(n) && n >= s))(e))),
            positive: ()=>b(a(t, i((e)=>v(e) && e > 0))),
            negative: ()=>b(a(t, i((e)=>v(e) && e < 0)))
        });
    b(i(v));
    l(i(function(t) {
        return typeof t == "boolean";
    }));
    l(i(function(t) {
        return typeof t == "symbol";
    }));
    l(i(function(t) {
        return t == null;
    }));
    l(i(function(t) {
        return t != null;
    }));
    class D extends Error {
        constructor(e){
            let s;
            try {
                s = JSON.stringify(e);
            } catch  {
                s = e;
            }
            super(`Pattern matching error: no pattern matches value ${s}`), this.input = void 0, this.input = e;
        }
    }
    const j = {
        matched: !1,
        value: void 0
    };
    function N(t) {
        return new P(t, j);
    }
    class P {
        constructor(e, s){
            this.input = void 0, this.state = void 0, this.input = e, this.state = s;
        }
        with(...e) {
            if (this.state.matched) return this;
            const s = e[e.length - 1], n = [
                e[0]
            ];
            let r;
            e.length === 3 && typeof e[1] == "function" ? r = e[1] : e.length > 2 && n.push(...e.slice(1, e.length - 1));
            let o = !1, c = {};
            const u = (f, A)=>{
                o = !0, c[f] = A;
            }, g = !n.some((f)=>p(f, this.input, u)) || r && !r(this.input) ? j : {
                matched: !0,
                value: s(o ? M in c ? c[M] : c : this.input, this.input)
            };
            return new P(this.input, g);
        }
        when(e, s) {
            if (this.state.matched) return this;
            const n = !!e(this.input);
            return new P(this.input, n ? {
                matched: !0,
                value: s(this.input, this.input)
            } : j);
        }
        otherwise(e) {
            return this.state.matched ? this.state.value : e(this.input);
        }
        exhaustive(e = L) {
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
    function L(t) {
        throw new D(t);
    }
    const x = "patch", I = new Map;
    self.onmessage = async (t)=>{
        const { id: e } = t.data;
        try {
            const s = await N(t.data).with({
                type: "createInstance"
            }, (n)=>W(n)).with({
                type: "deleteInstance"
            }, (n)=>$(n)).with({
                type: "executeCode"
            }, (n)=>U(n));
            self.postMessage({
                type: "success",
                id: e,
                result: s
            });
        } catch (s) {
            self.postMessage({
                type: "error",
                id: e,
                error: s instanceof Error ? s.message : String(s)
            });
        }
    };
    async function W(t) {
        const { nodeId: e } = t;
        if (I.has(e)) return {
            success: !0
        };
        const { loadPyodide: s, version: n } = await import("./chunks/kvTwxO3s.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), r = `https://cdn.jsdelivr.net/pyodide/v${n}/full/`, o = await s({
            indexURL: "/assets",
            packageBaseUrl: r,
            env: {
                PATCHIES_NODE_ID: e
            },
            stdout: (g)=>{
                self.postMessage({
                    type: "consoleOutput",
                    nodeId: e,
                    output: "stdout",
                    message: g
                });
            },
            stderr: (g)=>{
                self.postMessage({
                    type: "consoleOutput",
                    nodeId: e,
                    output: "stderr",
                    message: g
                });
            }
        }), c = new OffscreenCanvas(200, 200);
        o.canvas.setCanvas2D(c);
        const u = {
            send (g, f) {
                self.postMessage({
                    type: "sendMessage",
                    data: g,
                    options: f,
                    nodeId: e
                });
            }
        };
        return o.registerJsModule(x, u), I.set(e, o), {
            success: !0
        };
    }
    async function $(t) {
        const { nodeId: e } = t, s = I.get(e);
        return s && (s.unregisterJsModule(x), I.delete(e)), {
            success: !0
        };
    }
    async function U(t) {
        const { nodeId: e, code: s } = t, n = I.get(e);
        if (!n) throw new Error(`No Pyodide instance found for node ${e}`);
        await n.loadPackagesFromImports(s, {
            checkIntegrity: !1,
            messageCallback: ()=>{},
            errorCallback: (r)=>{
                self.postMessage({
                    type: "consoleOutput",
                    nodeId: e,
                    output: "stderr",
                    message: `Package loading error: ${r}`
                });
            }
        });
        try {
            const r = await n.runPythonAsync(s);
            self.postMessage({
                type: "consoleOutput",
                nodeId: e,
                output: "stdout",
                message: r === void 0 ? null : String(r),
                finished: !0
            });
        } catch (r) {
            self.postMessage({
                type: "consoleOutput",
                nodeId: e,
                output: "stderr",
                message: String(r),
                finished: !0
            });
        }
    }
    console.log("[pyodide worker] initialized");
})();
