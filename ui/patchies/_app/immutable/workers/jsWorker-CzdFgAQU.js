(async ()=>{
    const k = Symbol.for("@ts-pattern/matcher"), Ne = Symbol.for("@ts-pattern/isVariadic"), Q = "@ts-pattern/anonymous-select-key", le = (t)=>!!(t && typeof t == "object"), Y = (t)=>t && !!t[k], b = (t, e, n)=>{
        if (Y(t)) {
            const s = t[k](), { matched: r, selections: o } = s.match(e);
            return r && o && Object.keys(o).forEach((i)=>n(i, o[i])), r;
        }
        if (le(t)) {
            if (!le(e)) return !1;
            if (Array.isArray(t)) {
                if (!Array.isArray(e)) return !1;
                let s = [], r = [], o = [];
                for (const i of t.keys()){
                    const a = t[i];
                    Y(a) && a[Ne] ? o.push(a) : o.length ? r.push(a) : s.push(a);
                }
                if (o.length) {
                    if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                    if (e.length < s.length + r.length) return !1;
                    const i = e.slice(0, s.length), a = r.length === 0 ? [] : e.slice(-r.length), c = e.slice(s.length, r.length === 0 ? 1 / 0 : -r.length);
                    return s.every((u, g)=>b(u, i[g], n)) && r.every((u, g)=>b(u, a[g], n)) && (o.length === 0 || b(o[0], c, n));
                }
                return t.length === e.length && t.every((i, a)=>b(i, e[a], n));
            }
            return Reflect.ownKeys(t).every((s)=>{
                const r = t[s];
                return (s in e || Y(o = r) && o[k]().matcherType === "optional") && b(r, e[s], n);
                var o;
            });
        }
        return Object.is(e, t);
    }, P = (t)=>{
        var e, n, s;
        return le(t) ? Y(t) ? (e = (n = (s = t[k]()).getSelectionKeys) == null ? void 0 : n.call(s)) != null ? e : [] : Array.isArray(t) ? z(t, P) : z(Object.values(t), P) : [];
    }, z = (t, e)=>t.reduce((n, s)=>n.concat(e(s)), []);
    function We(...t) {
        if (t.length === 1) {
            const [e] = t;
            return (n)=>b(e, n, ()=>{});
        }
        if (t.length === 2) {
            const [e, n] = t;
            return b(e, n, ()=>{});
        }
        throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${t.length}.`);
    }
    function v(t) {
        return Object.assign(t, {
            optional: ()=>Ie(t),
            and: (e)=>p(t, e),
            or: (e)=>Ve(t, e),
            select: (e)=>e === void 0 ? G(t) : G(e, t)
        });
    }
    function ue(t) {
        return Object.assign(((e)=>Object.assign(e, {
                [Symbol.iterator] () {
                    let n = 0;
                    const s = [
                        {
                            value: Object.assign(e, {
                                [Ne]: !0
                            }),
                            done: !1
                        },
                        {
                            done: !0,
                            value: void 0
                        }
                    ];
                    return {
                        next: ()=>{
                            var r;
                            return (r = s[n++]) != null ? r : s.at(-1);
                        }
                    };
                }
            }))(t), {
            optional: ()=>ue(Ie(t)),
            select: (e)=>ue(e === void 0 ? G(t) : G(e, t))
        });
    }
    function Ie(t) {
        return v({
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
    const qe = (t, e)=>{
        for (const n of t)if (!e(n)) return !1;
        return !0;
    }, Ue = (t, e)=>{
        for (const [n, s] of t.entries())if (!e(s, n)) return !1;
        return !0;
    };
    function p(...t) {
        return v({
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
                    getSelectionKeys: ()=>z(t, P),
                    matcherType: "and"
                })
        });
    }
    function Ve(...t) {
        return v({
            [k]: ()=>({
                    match: (e)=>{
                        let n = {};
                        const s = (r, o)=>{
                            n[r] = o;
                        };
                        return z(t, P).forEach((r)=>s(r, void 0)), {
                            matched: t.some((r)=>b(r, e, s)),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>z(t, P),
                    matcherType: "or"
                })
        });
    }
    function f(t) {
        return {
            [k]: ()=>({
                    match: (e)=>({
                            matched: !!t(e)
                        })
                })
        };
    }
    function G(...t) {
        const e = typeof t[0] == "string" ? t[0] : void 0, n = t.length === 2 ? t[1] : typeof t[0] == "string" ? void 0 : t[0];
        return v({
            [k]: ()=>({
                    match: (s)=>{
                        let r = {
                            [e ?? Q]: s
                        };
                        return {
                            matched: n === void 0 || b(n, s, (o, i)=>{
                                r[o] = i;
                            }),
                            selections: r
                        };
                    },
                    getSelectionKeys: ()=>[
                            e ?? Q
                        ].concat(n === void 0 ? [] : P(n))
                })
        });
    }
    function F(t) {
        return typeof t == "number";
    }
    function R(t) {
        return typeof t == "string";
    }
    function N(t) {
        return typeof t == "bigint";
    }
    const Oe = v(f(function(t) {
        return !0;
    })), _e = Oe, V = (t)=>Object.assign(v(t), {
            startsWith: (e)=>{
                return V(p(t, (n = e, f((s)=>R(s) && s.startsWith(n)))));
                var n;
            },
            endsWith: (e)=>{
                return V(p(t, (n = e, f((s)=>R(s) && s.endsWith(n)))));
                var n;
            },
            minLength: (e)=>V(p(t, ((n)=>f((s)=>R(s) && s.length >= n))(e))),
            length: (e)=>V(p(t, ((n)=>f((s)=>R(s) && s.length === n))(e))),
            maxLength: (e)=>V(p(t, ((n)=>f((s)=>R(s) && s.length <= n))(e))),
            includes: (e)=>{
                return V(p(t, (n = e, f((s)=>R(s) && s.includes(n)))));
                var n;
            },
            regex: (e)=>{
                return V(p(t, (n = e, f((s)=>R(s) && !!s.match(n)))));
                var n;
            }
        }), ze = V(f(R)), D = (t)=>Object.assign(v(t), {
            between: (e, n)=>D(p(t, ((s, r)=>f((o)=>F(o) && s <= o && r >= o))(e, n))),
            lt: (e)=>D(p(t, ((n)=>f((s)=>F(s) && s < n))(e))),
            gt: (e)=>D(p(t, ((n)=>f((s)=>F(s) && s > n))(e))),
            lte: (e)=>D(p(t, ((n)=>f((s)=>F(s) && s <= n))(e))),
            gte: (e)=>D(p(t, ((n)=>f((s)=>F(s) && s >= n))(e))),
            int: ()=>D(p(t, f((e)=>F(e) && Number.isInteger(e)))),
            finite: ()=>D(p(t, f((e)=>F(e) && Number.isFinite(e)))),
            positive: ()=>D(p(t, f((e)=>F(e) && e > 0))),
            negative: ()=>D(p(t, f((e)=>F(e) && e < 0)))
        }), Ge = D(f(F)), O = (t)=>Object.assign(v(t), {
            between: (e, n)=>O(p(t, ((s, r)=>f((o)=>N(o) && s <= o && r >= o))(e, n))),
            lt: (e)=>O(p(t, ((n)=>f((s)=>N(s) && s < n))(e))),
            gt: (e)=>O(p(t, ((n)=>f((s)=>N(s) && s > n))(e))),
            lte: (e)=>O(p(t, ((n)=>f((s)=>N(s) && s <= n))(e))),
            gte: (e)=>O(p(t, ((n)=>f((s)=>N(s) && s >= n))(e))),
            positive: ()=>O(p(t, f((e)=>N(e) && e > 0))),
            negative: ()=>O(p(t, f((e)=>N(e) && e < 0)))
        }), He = O(f(N)), Je = v(f(function(t) {
        return typeof t == "boolean";
    })), Ye = v(f(function(t) {
        return typeof t == "symbol";
    })), Qe = v(f(function(t) {
        return t == null;
    })), Xe = v(f(function(t) {
        return t != null;
    }));
    var W = {
        __proto__: null,
        matcher: k,
        optional: Ie,
        array: function(...t) {
            return ue({
                [k]: ()=>({
                        match: (e)=>{
                            if (!Array.isArray(e)) return {
                                matched: !1
                            };
                            if (t.length === 0) return {
                                matched: !0
                            };
                            const n = t[0];
                            let s = {};
                            if (e.length === 0) return P(n).forEach((o)=>{
                                s[o] = [];
                            }), {
                                matched: !0,
                                selections: s
                            };
                            const r = (o, i)=>{
                                s[o] = (s[o] || []).concat([
                                    i
                                ]);
                            };
                            return {
                                matched: e.every((o)=>b(n, o, r)),
                                selections: s
                            };
                        },
                        getSelectionKeys: ()=>t.length === 0 ? [] : P(t[0])
                    })
            });
        },
        set: function(...t) {
            return v({
                [k]: ()=>({
                        match: (e)=>{
                            if (!(e instanceof Set)) return {
                                matched: !1
                            };
                            let n = {};
                            if (e.size === 0) return {
                                matched: !0,
                                selections: n
                            };
                            if (t.length === 0) return {
                                matched: !0
                            };
                            const s = (o, i)=>{
                                n[o] = (n[o] || []).concat([
                                    i
                                ]);
                            }, r = t[0];
                            return {
                                matched: qe(e, (o)=>b(r, o, s)),
                                selections: n
                            };
                        },
                        getSelectionKeys: ()=>t.length === 0 ? [] : P(t[0])
                    })
            });
        },
        map: function(...t) {
            return v({
                [k]: ()=>({
                        match: (e)=>{
                            if (!(e instanceof Map)) return {
                                matched: !1
                            };
                            let n = {};
                            if (e.size === 0) return {
                                matched: !0,
                                selections: n
                            };
                            const s = (a, c)=>{
                                n[a] = (n[a] || []).concat([
                                    c
                                ]);
                            };
                            if (t.length === 0) return {
                                matched: !0
                            };
                            var r;
                            if (t.length === 1) throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${(r = t[0]) == null ? void 0 : r.toString()}`);
                            const [o, i] = t;
                            return {
                                matched: Ue(e, (a, c)=>{
                                    const u = b(o, c, s), g = b(i, a, s);
                                    return u && g;
                                }),
                                selections: n
                            };
                        },
                        getSelectionKeys: ()=>t.length === 0 ? [] : [
                                ...P(t[0]),
                                ...P(t[1])
                            ]
                    })
            });
        },
        intersection: p,
        union: Ve,
        not: function(t) {
            return v({
                [k]: ()=>({
                        match: (e)=>({
                                matched: !b(t, e, ()=>{})
                            }),
                        getSelectionKeys: ()=>[],
                        matcherType: "not"
                    })
            });
        },
        when: f,
        select: G,
        any: Oe,
        _: _e,
        string: ze,
        number: Ge,
        bigint: He,
        boolean: Je,
        symbol: Ye,
        nullish: Qe,
        nonNullable: Xe,
        instanceOf: function(t) {
            return v(f(function(e) {
                return (n)=>n instanceof e;
            }(t)));
        },
        shape: function(t) {
            return v(f(We(t)));
        }
    };
    class Ze extends Error {
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
    const he = {
        matched: !1,
        value: void 0
    };
    function fe(t) {
        return new X(t, he);
    }
    class X {
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
            let o = !1, i = {};
            const a = (u, g)=>{
                o = !0, i[u] = g;
            }, c = !s.some((u)=>b(u, this.input, a)) || r && !r(this.input) ? he : {
                matched: !0,
                value: n(o ? Q in i ? i[Q] : i : this.input, this.input)
            };
            return new X(this.input, c);
        }
        when(e, n) {
            if (this.state.matched) return this;
            const s = !!e(this.input);
            return new X(this.input, s ? {
                matched: !0,
                value: n(this.input, this.input)
            } : he);
        }
        otherwise(e) {
            return this.state.matched ? this.state.value : e(this.input);
        }
        exhaustive(e = et) {
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
    function et(t) {
        throw new Ze(t);
    }
    const tt = {
        bass: [
            20,
            140
        ],
        lowMid: [
            140,
            400
        ],
        mid: [
            400,
            2600
        ],
        highMid: [
            2600,
            5200
        ],
        treble: [
            5200,
            14e3
        ]
    };
    class nt {
        bins;
        format;
        analysisType;
        sampleRate;
        constructor(e, n, s, r = "wave"){
            const o = fe(e).with(W.instanceOf(Uint8Array), ()=>"int").with(W.instanceOf(Float32Array), ()=>"float").otherwise(()=>n ?? "int");
            this.bins = fe([
                e,
                o
            ]).with([
                W.nullish,
                "int"
            ], ()=>new Uint8Array).with([
                W.nullish,
                "float"
            ], ()=>new Float32Array).with([
                W.nonNullable,
                W.any
            ], ([i])=>i).exhaustive(), this.format = o, this.analysisType = r, this.sampleRate = s;
        }
        get a() {
            return this.bins;
        }
        get f() {
            return this.bins instanceof Float32Array ? this.bins : new Float32Array(this.bins).map((e)=>e / 255);
        }
        get sum() {
            return this.a.reduce((e, n)=>e + n, 0);
        }
        get avg() {
            return this.sum / this.bins.length;
        }
        get centroid() {
            const e = this.f.reduce((s, r)=>s + r, 0);
            return e === 0 ? 0 : this.f.reduce((s, r, o)=>s + r * o, 0) / e;
        }
        get rms() {
            if (this.bins.length === 0) return 0;
            if (this.analysisType === "wave") {
                let n = 0;
                if (this.bins instanceof Uint8Array) for(let s = 0; s < this.bins.length; s++){
                    const r = (this.bins[s] - 128) / 128;
                    n += r * r;
                }
                else for(let s = 0; s < this.bins.length; s++)n += this.bins[s] * this.bins[s];
                return Math.sqrt(n / this.bins.length);
            }
            const e = this.f.reduce((n, s)=>n + s * s, 0);
            return Math.sqrt(e / this.bins.length);
        }
        getEnergy(e = 0, n) {
            const s = this.sampleRate / 2, r = this.f;
            if (typeof e == "string") {
                const u = tt[e];
                if (u) [e, n] = u;
                else return console.warn(`incorrect frequency range key: ${e}`), 0;
            }
            if (typeof n != "number") {
                const u = Math.round(e / s * r.length);
                return r[u] ?? 0;
            }
            if (e < 0 || n < 0) return console.warn("frequency cannot be negative"), 0;
            e > n && ([e, n] = [
                n,
                e
            ]);
            const o = Math.round(e / s * r.length), i = Math.round(n / s * r.length);
            let a = 0, c = 0;
            for(let u = o; u <= i && u < r.length; u++)a += r[u], c++;
            return c > 0 ? a / c : 0;
        }
    }
    const st = 7;
    function rt(t, e, n = 0) {
        if (!(t instanceof Error)) return null;
        const s = t, r = t.message;
        let o = null;
        if (o === null && typeof s.lineNumber == "number" && (o = s.lineNumber), o === null && t.stack) {
            const c = t.stack.match(/<anonymous>:(\d+):(\d+)/);
            c && (o = parseInt(c[1], 10));
        }
        if (o === null && t.stack) {
            const c = t.stack.match(/anonymous>:(\d+):(\d+)/);
            c && (o = parseInt(c[1], 10));
        }
        if (o === null && t.stack) {
            const c = t.stack.match(/Function:(\d+):(\d+)/);
            c && (o = parseInt(c[1], 10));
        }
        if (o === null && t.stack) {
            const c = t.stack.match(/eval.*?<anonymous>:(\d+):(\d+)/);
            c && (o = parseInt(c[1], 10));
        }
        if (o === null) {
            const c = r.match(/line (\d+)/i);
            c && (o = parseInt(c[1], 10));
        }
        if (o === null && t.stack) {
            const c = t.stack.match(/@[^:]+:(\d+):(\d+)/);
            c && (o = parseInt(c[1], 10));
        }
        if (o === null) return null;
        const i = o - st - n;
        if (i < 1) return {
            message: r,
            lineErrors: {
                1: [
                    r
                ]
            }
        };
        let a = i;
        return e !== void 0 && i > e && (a = e), {
            message: r,
            lineErrors: {
                [a]: [
                    r
                ]
            }
        };
    }
    function ot(t) {
        return t.split(`
`).length;
    }
    function it(t) {
        const { nodeId: e, onIncomingMessage: n, onError: s } = t;
        let r = null, o = [];
        const i = new Map;
        let a = [];
        function c(y, S) {
            if (!r || o.length === 0) return [];
            const L = o.filter((C)=>S?.to === void 0 || C.outlet === S.to);
            for (const C of L)r.postMessage({
                fromNodeId: e,
                targetNodeId: C.targetNodeId,
                inlet: C.inlet,
                inletKey: C.inletKey,
                data: y
            });
            return L.map((C)=>C.targetNodeId);
        }
        function u(y, S) {
            if (i.size === 0 || a.length === 0) return [];
            const L = a.filter((E)=>S?.to === void 0 || E.outlet === S.to), C = [];
            for (const E of L){
                const j = i.get(E.targetNodeId);
                j && (j.postMessage({
                    fromNodeId: e,
                    targetNodeId: E.targetNodeId,
                    inlet: E.inlet,
                    inletKey: E.inletKey,
                    data: y
                }), C.push(E.targetNodeId));
            }
            return C;
        }
        function g(y) {
            r = y, y.start();
        }
        function M(y, S, L) {
            S ? (i.set(S, y), y.start()) : L && (i.set(L, y), y.onmessage = (C)=>{
                const { data: E, inlet: j, inletKey: re, fromNodeId: oe } = C.data;
                try {
                    const $ = n(E, {
                        source: oe,
                        inlet: j,
                        inletKey: re
                    });
                    $ instanceof Promise && $.catch(s);
                } catch ($) {
                    s($);
                }
            }, y.start());
        }
        function x(y) {
            o = y;
        }
        function ne(y) {
            a = y;
        }
        function se() {
            r?.close(), r = null, o = [];
            for (const y of i.values())y.close();
            i.clear(), a = [];
        }
        return {
            sendToTargets: (y, S)=>[
                    ...c(y, S),
                    ...u(y, S)
                ],
            handleSetRenderPort: g,
            handleSetWorkerPort: M,
            handleUpdateRenderConnections: x,
            handleUpdateWorkerConnections: ne,
            cleanup: se
        };
    }
    const de = (t, e)=>e.some((n)=>t instanceof n);
    let Ee, Te;
    function at() {
        return Ee || (Ee = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction
        ]);
    }
    function ct() {
        return Te || (Te = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey
        ]);
    }
    const ge = new WeakMap, ie = new WeakMap, te = new WeakMap;
    function lt(t) {
        const e = new Promise((n, s)=>{
            const r = ()=>{
                t.removeEventListener("success", o), t.removeEventListener("error", i);
            }, o = ()=>{
                n(B(t.result)), r();
            }, i = ()=>{
                s(t.error), r();
            };
            t.addEventListener("success", o), t.addEventListener("error", i);
        });
        return te.set(e, t), e;
    }
    function ut(t) {
        if (ge.has(t)) return;
        const e = new Promise((n, s)=>{
            const r = ()=>{
                t.removeEventListener("complete", o), t.removeEventListener("error", i), t.removeEventListener("abort", i);
            }, o = ()=>{
                n(), r();
            }, i = ()=>{
                s(t.error || new DOMException("AbortError", "AbortError")), r();
            };
            t.addEventListener("complete", o), t.addEventListener("error", i), t.addEventListener("abort", i);
        });
        ge.set(t, e);
    }
    let me = {
        get (t, e, n) {
            if (t instanceof IDBTransaction) {
                if (e === "done") return ge.get(t);
                if (e === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
            }
            return B(t[e]);
        },
        set (t, e, n) {
            return t[e] = n, !0;
        },
        has (t, e) {
            return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
        }
    };
    function Be(t) {
        me = t(me);
    }
    function ht(t) {
        return ct().includes(t) ? function(...e) {
            return t.apply(pe(this), e), B(this.request);
        } : function(...e) {
            return B(t.apply(pe(this), e));
        };
    }
    function ft(t) {
        return typeof t == "function" ? ht(t) : (t instanceof IDBTransaction && ut(t), de(t, at()) ? new Proxy(t, me) : t);
    }
    function B(t) {
        if (t instanceof IDBRequest) return lt(t);
        if (ie.has(t)) return ie.get(t);
        const e = ft(t);
        return e !== t && (ie.set(t, e), te.set(e, t)), e;
    }
    const pe = (t)=>te.get(t);
    function dt(t, e, { blocked: n, upgrade: s, blocking: r, terminated: o } = {}) {
        const i = indexedDB.open(t, e), a = B(i);
        return s && i.addEventListener("upgradeneeded", (c)=>{
            s(B(i.result), c.oldVersion, c.newVersion, B(i.transaction), c);
        }), n && i.addEventListener("blocked", (c)=>n(c.oldVersion, c.newVersion, c)), a.then((c)=>{
            o && c.addEventListener("close", ()=>o()), r && c.addEventListener("versionchange", (u)=>r(u.oldVersion, u.newVersion, u));
        }).catch(()=>{}), a;
    }
    function gt(t, { blocked: e } = {}) {
        const n = indexedDB.deleteDatabase(t);
        return e && n.addEventListener("blocked", (s)=>e(s.oldVersion, s)), B(n).then(()=>{});
    }
    const mt = [
        "get",
        "getKey",
        "getAll",
        "getAllKeys",
        "count"
    ], pt = [
        "put",
        "add",
        "delete",
        "clear"
    ], ae = new Map;
    function Fe(t, e) {
        if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
        if (ae.get(e)) return ae.get(e);
        const n = e.replace(/FromIndex$/, ""), s = e !== n, r = pt.includes(n);
        if (!(n in (s ? IDBIndex : IDBObjectStore).prototype) || !(r || mt.includes(n))) return;
        const o = async function(i, ...a) {
            const c = this.transaction(i, r ? "readwrite" : "readonly");
            let u = c.store;
            return s && (u = u.index(a.shift())), (await Promise.all([
                u[n](...a),
                r && c.done
            ]))[0];
        };
        return ae.set(e, o), o;
    }
    Be((t)=>({
            ...t,
            get: (e, n, s)=>Fe(e, n) || t.get(e, n, s),
            has: (e, n)=>!!Fe(e, n) || t.has(e, n)
        }));
    const yt = [
        "continue",
        "continuePrimaryKey",
        "advance"
    ], De = {}, ye = new WeakMap, Ae = new WeakMap, wt = {
        get (t, e) {
            if (!yt.includes(e)) return t[e];
            let n = De[e];
            return n || (n = De[e] = function(...s) {
                ye.set(this, Ae.get(this)[e](...s));
            }), n;
        }
    };
    async function* bt(...t) {
        let e = this;
        if (e instanceof IDBCursor || (e = await e.openCursor(...t)), !e) return;
        e = e;
        const n = new Proxy(e, wt);
        for(Ae.set(n, e), te.set(n, pe(e)); e;)yield n, e = await (ye.get(n) || e.continue()), ye.delete(n);
    }
    function Me(t, e) {
        return e === Symbol.asyncIterator && de(t, [
            IDBIndex,
            IDBObjectStore,
            IDBCursor
        ]) || e === "iterate" && de(t, [
            IDBIndex,
            IDBObjectStore
        ]);
    }
    Be((t)=>({
            ...t,
            get (e, n, s) {
                return Me(e, n) ? bt : t.get(e, n, s);
            },
            has (e, n) {
                return Me(e, n) || t.has(e, n);
            }
        }));
    class q {
        static instance = null;
        logs = [];
        maxLogs = 1e3;
        eventBus = null;
        sendInternalLogsToDevTools = !0;
        sendNodeLogsToDevTools = !1;
        constructor(){}
        async getEventBus() {
            if (!this.eventBus) {
                const { PatchiesEventBus: e } = await import("./chunks/vVU4PxbV.js");
                this.eventBus = e.getInstance();
            }
            return this.eventBus;
        }
        static getInstance() {
            return q.instance === null && (q.instance = new q), q.instance;
        }
        debug(...e) {
            this.addInternalLog("debug", e), this.sendInternalLogsToDevTools && console.debug(...e);
        }
        info(...e) {
            this.addInternalLog("info", e), this.sendInternalLogsToDevTools && console.info(...e);
        }
        log(...e) {
            this.addInternalLog("log", e), this.sendInternalLogsToDevTools && console.log(...e);
        }
        warn(...e) {
            this.addInternalLog("warn", e), this.sendInternalLogsToDevTools && console.warn(...e);
        }
        error(...e) {
            this.addInternalLog("error", e), this.sendInternalLogsToDevTools && console.error(...e);
        }
        addInternalLog(e, n) {
            const s = {
                level: e,
                message: n.map((r)=>String(r)).join(" "),
                timestamp: new Date,
                args: n
            };
            this.logs.push(s), this.logs.length > this.maxLogs && this.logs.shift();
        }
        getLogs() {
            return [
                ...this.logs
            ];
        }
        getLogsByLevel(e) {
            return this.logs.filter((n)=>n.level === e);
        }
        clearLogs() {
            this.logs = [];
        }
        setMaxLogs(e) {
            this.maxLogs = e, this.logs.length > this.maxLogs && (this.logs = this.logs.slice(-this.maxLogs));
        }
        nodeDebug(e, ...n) {
            this.addNodeLog(e, "debug", n);
        }
        nodeInfo(e, ...n) {
            this.addNodeLog(e, "info", n);
        }
        nodeLog(e, ...n) {
            this.addNodeLog(e, "log", n);
        }
        nodeWarn(e, ...n) {
            this.addNodeLog(e, "warn", n);
        }
        nodeError(e, ...n) {
            const s = n.length > 0 && typeof n[0] == "object" && n[0] !== null && "lineErrors" in n[0], r = s ? n[0] : void 0, o = s ? n.slice(1) : n;
            this.addNodeLog(e, "error", o, r);
        }
        addNodeLog(e, n, s, r) {
            const o = {
                level: n,
                message: s.map((i)=>String(i)).join(" "),
                timestamp: new Date,
                nodeId: e,
                args: s
            };
            this.logs.push(o), this.logs.length > this.maxLogs && this.logs.shift(), this.getEventBus().then((i)=>{
                i && i.dispatch({
                    type: "consoleOutput",
                    nodeId: e,
                    messageType: n,
                    timestamp: o.timestamp.getTime(),
                    args: s,
                    lineErrors: r?.lineErrors
                });
            }), this.sendNodeLogsToDevTools && console[n](`[${e}]`, ...s);
        }
        getNodeLogs(e) {
            return this.logs.filter((n)=>n.nodeId === e);
        }
        clearNodeLogs(e) {
            this.logs = this.logs.filter((n)=>n.nodeId !== e);
        }
        ofNode(e) {
            return new vt(e, this);
        }
    }
    class vt {
        constructor(e, n){
            this.nodeId = e, this.logger = n;
        }
        log(...e) {
            this.logger.nodeLog(this.nodeId, ...e);
        }
        warn(...e) {
            this.logger.nodeWarn(this.nodeId, ...e);
        }
        error(...e) {
            this.logger.nodeError(this.nodeId, ...e);
        }
        debug(...e) {
            this.logger.nodeDebug(this.nodeId, ...e);
        }
        info(...e) {
            this.logger.nodeInfo(this.nodeId, ...e);
        }
    }
    const xe = q.getInstance(), Ct = 1, T = "kv";
    function H(t, e) {
        return `${t.length}:${t}:${e}`;
    }
    function Le(t) {
        return `${t.length}:${t}:`;
    }
    const Ke = typeof self < "u" && typeof self.document > "u";
    let we = null, be = null, je = Promise.resolve();
    Ke || (je = Promise.all([
        import("./chunks/CLrBgZ-q.js").then((t)=>we = t.get),
        import("./chunks/CHo3Y3tN.js").then((t)=>be = t.currentPatchId)
    ]).then(()=>{}));
    class A {
        static instance = null;
        dbCache = new Map;
        explicitPatchId = null;
        getDbName(e) {
            return `patchies_${e}`;
        }
        async getDb(e) {
            const n = this.dbCache.get(e);
            if (n) return n;
            const s = this.getDbName(e), r = await dt(s, Ct, {
                upgrade (o) {
                    o.objectStoreNames.contains(T) || o.createObjectStore(T);
                }
            });
            return this.dbCache.set(e, r), r;
        }
        setPatchId(e) {
            this.explicitPatchId = e;
        }
        async getCurrentPatchId() {
            if (this.explicitPatchId) return this.explicitPatchId;
            if (Ke) throw new Error("PatchStorageService: patchId not set. Call setPatchId() in worker context.");
            if (await je, !we || !be) throw new Error("PatchStorageService: Svelte stores failed to initialize.");
            return we(be);
        }
        async kvGet(e, n) {
            const s = await this.getCurrentPatchId(), r = await this.getDb(s), o = H(e, n);
            return r.get(T, o);
        }
        async kvSet(e, n, s) {
            const r = await this.getCurrentPatchId(), o = await this.getDb(r), i = H(e, n);
            await o.put(T, s, i);
        }
        async kvDelete(e, n) {
            const s = await this.getCurrentPatchId(), r = await this.getDb(s), o = H(e, n), i = r.transaction(T, "readwrite"), a = i.objectStore(T), c = await a.get(o) !== void 0;
            return c && await a.delete(o), await i.done, c;
        }
        async kvKeys(e) {
            const n = await this.getCurrentPatchId(), r = await (await this.getDb(n)).getAllKeys(T), o = Le(e);
            return r.filter((i)=>typeof i == "string" && i.startsWith(o)).map((i)=>i.slice(o.length));
        }
        async kvClear(e) {
            const n = await this.getCurrentPatchId(), r = (await this.getDb(n)).transaction(T, "readwrite"), o = r.objectStore(T), i = await o.getAllKeys(), a = Le(e);
            for (const c of i)typeof c == "string" && c.startsWith(a) && await o.delete(c);
            await r.done;
        }
        async kvHas(e, n) {
            const s = await this.getCurrentPatchId(), r = await this.getDb(s), o = H(e, n);
            return await r.get(T, o) !== void 0;
        }
        async hasPatchData(e) {
            try {
                return await (await this.getDb(e)).count(T) > 0;
            } catch  {
                return !1;
            }
        }
        async deletePatchData(e) {
            const n = this.dbCache.get(e);
            n && (n.close(), this.dbCache.delete(e));
            const s = this.getDbName(e);
            try {
                await gt(s), xe.info(`Deleted storage for patch: ${e}`);
            } catch (r) {
                xe.error(`Failed to delete storage for patch: ${e}`, r);
            }
        }
        closeAll() {
            for (const e of this.dbCache.values())e.close();
            this.dbCache.clear();
        }
        static getInstance() {
            return A.instance === null && (A.instance = new A), A.instance;
        }
    }
    class ke {
        storeName;
        storage;
        constructor(e){
            this.storeName = e, this.storage = A.getInstance();
        }
        async get(e) {
            return this.storage.kvGet(this.storeName, e);
        }
        async set(e, n) {
            return this.storage.kvSet(this.storeName, e, n);
        }
        async delete(e) {
            return this.storage.kvDelete(this.storeName, e);
        }
        async keys() {
            return this.storage.kvKeys(this.storeName);
        }
        async clear() {
            return this.storage.kvClear(this.storeName);
        }
        async has(e) {
            return this.storage.kvHas(this.storeName, e);
        }
        store(e) {
            return new ke(e);
        }
    }
    function It(t) {
        return new ke(t);
    }
    const kt = 1200;
    class St {
        samples;
        capacity;
        head = 0;
        count = 0;
        messagesSinceFlush = 0;
        lastFlushTime = performance.now();
        constructor(e = kt){
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
            let i = 0;
            for(let g = 0; g < this.count; g++){
                const M = (this.head - this.count + g + this.capacity) % this.capacity, x = this.samples[M];
                o[g] = x, x > i && (i = x);
            }
            o.sort();
            const a = o[Math.floor(this.count * .95)], c = this.samples[(this.head - 1 + this.capacity) % this.capacity];
            let u = 0;
            if (r > 0) {
                let g = 0;
                for(let M = 0; M < r; M++){
                    const x = (this.head - r + M + this.capacity) % this.capacity;
                    g += this.samples[x];
                }
                u = g / r;
            }
            return {
                avg: u,
                max: i,
                p95: a,
                last: c,
                callsPerSecond: s
            };
        }
        reset() {
            this.head = 0, this.count = 0, this.messagesSinceFlush = 0, this.lastFlushTime = performance.now();
        }
    }
    const Pt = 500;
    class Et {
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
            const r = performance.now(), o = `${e}|${n}`, i = ()=>{
                let a = this.collectors.get(o);
                return a || (a = new St, this.collectors.set(o, a)), a;
            };
            try {
                const a = s();
                return a instanceof Promise ? a.finally(()=>{
                    i().record(performance.now() - r);
                }) : i().record(performance.now() - r), a;
            } catch (a) {
                throw i().record(performance.now() - r), a;
            }
        }
        flushSync() {
            const e = performance.now();
            for (const [n, s] of this.collectors){
                const r = s.flush(e);
                if (r.avg === 0 && r.callsPerSecond === 0) continue;
                const o = n.lastIndexOf("|"), i = n.slice(0, o), a = n.slice(o + 1);
                this.onFlush(i, a, r);
            }
        }
        startFlush() {
            this.flushInterval === null && (this.flushInterval = setInterval(()=>this.flushSync(), Pt));
        }
        stopFlush() {
            this.flushInterval !== null && (clearInterval(this.flushInterval), this.flushInterval = null);
            try {
                this.flushSync();
            } catch  {}
            this.collectors.clear();
        }
    }
    function Tt(t, e) {
        const n = new Map;
        let s = {}, r = 0, o = [];
        return {
            settings: {
                async define (a) {
                    const c = `settings-${t}-${++r}`;
                    return new Promise((u)=>{
                        n.set(c, (g)=>{
                            s = g, u();
                        }), e({
                            type: "settingsDefine",
                            nodeId: t,
                            requestId: c,
                            schema: a
                        });
                    });
                },
                get (a) {
                    return s[a];
                },
                getAll () {
                    return {
                        ...s
                    };
                },
                set (a, c) {
                    s[a] = c, e({
                        type: "settingsSet",
                        nodeId: t,
                        key: a,
                        value: c
                    });
                },
                onChange (a) {
                    o.push(a);
                },
                clear () {
                    s = {}, e({
                        type: "settingsClear",
                        nodeId: t
                    });
                }
            },
            _clearCallbacks () {
                o = [];
            },
            _reset () {
                o = [];
                for (const a of n.values())a(s);
                n.clear(), s = {};
            },
            _receiveValuesInit (a, c) {
                const u = n.get(a);
                u && (n.delete(a), u(c));
            },
            _receiveValueChanged (a, c) {
                s[a] = c;
                const u = {
                    ...s
                };
                for (const g of o)try {
                    g(a, c, u);
                } catch  {}
            }
        };
    }
    const Re = new Map, K = new Et((t, e, n)=>{
        self.postMessage({
            type: "profilerStats",
            nodeId: t,
            category: e,
            stats: n
        });
    }), I = new Map;
    function Ft(t) {
        const e = {
            intervals: [],
            timeouts: [],
            cleanupCallbacks: [],
            messageCallbacks: [],
            channelCallbacks: new Map,
            pendingDelays: new Map,
            delayIdCounter: 0,
            isFFTEnabled: !1,
            fftRequestCache: new Map,
            fftDataCache: new Map,
            videoFrameCallback: null,
            pendingVideoFrameResolvers: new Map,
            videoFrameRequestIdCounter: 0,
            oscChannels: [],
            settingsProxy: null,
            code: null
        };
        return e.directChannel = it({
            nodeId: t,
            onIncomingMessage: (n, s)=>{
                K.measure(t, "message", ()=>{
                    for (const r of e.messageCallbacks)ee(t, ()=>r(n, s));
                });
            },
            onError: (n)=>{
                if (e.code) Se(t, e.code, n);
                else {
                    const s = n instanceof Error ? n.message : String(n);
                    d({
                        type: "consoleOutput",
                        nodeId: t,
                        level: "error",
                        args: [
                            s
                        ]
                    });
                }
            }
        }), e;
    }
    function U(t) {
        return I.has(t) || I.set(t, Ft(t)), I.get(t);
    }
    const ve = new Map;
    let Dt = 0;
    const Z = new Map;
    let Mt = 0;
    const Ce = new Map;
    let xt = 0, J = null;
    function d(t) {
        self.postMessage(t);
    }
    function Lt(t) {
        const e = U(t), n = {
            log: (...l)=>d({
                    type: "consoleOutput",
                    nodeId: t,
                    level: "log",
                    args: l
                }),
            warn: (...l)=>d({
                    type: "consoleOutput",
                    nodeId: t,
                    level: "warn",
                    args: l
                }),
            error: (...l)=>d({
                    type: "consoleOutput",
                    nodeId: t,
                    level: "error",
                    args: l
                }),
            debug: (...l)=>d({
                    type: "consoleOutput",
                    nodeId: t,
                    level: "debug",
                    args: l
                }),
            info: (...l)=>d({
                    type: "consoleOutput",
                    nodeId: t,
                    level: "info",
                    args: l
                })
        }, s = (l, h)=>{
            if (typeof h?.to == "string") {
                d({
                    type: "sendToChannel",
                    nodeId: t,
                    data: l,
                    channel: h.to
                });
                return;
            }
            const m = h, w = e.directChannel.sendToTargets(l, m);
            d({
                type: "sendMessage",
                nodeId: t,
                data: l,
                options: {
                    ...m,
                    excludeTargets: w
                }
            });
        }, r = (l, h)=>{
            h?.from ? (e.channelCallbacks.set(h.from, l), d({
                type: "subscribeChannel",
                nodeId: t,
                channel: h.from
            })) : e.messageCallbacks.push(l), d({
                type: "callbackRegistered",
                nodeId: t,
                callbackType: "message"
            });
        }, o = (l, h)=>{
            const m = self.setInterval(l, h);
            return e.intervals.push(m), d({
                type: "callbackRegistered",
                nodeId: t,
                callbackType: "interval"
            }), m;
        }, i = (l, h)=>o(()=>K.measure(t, "interval", l), h), a = (l, h)=>{
            const m = self.setTimeout(()=>{
                const w = e.timeouts.indexOf(m);
                w > -1 && e.timeouts.splice(w, 1), l();
            }, h);
            return e.timeouts.push(m), d({
                type: "callbackRegistered",
                nodeId: t,
                callbackType: "timeout"
            }), m;
        }, c = (l)=>new Promise((h, m)=>{
                const w = e.delayIdCounter++, _ = self.setTimeout(()=>{
                    e.pendingDelays.delete(w), h();
                }, l);
                e.pendingDelays.set(w, {
                    timeoutId: _,
                    reject: m
                }), d({
                    type: "callbackRegistered",
                    nodeId: t,
                    callbackType: "timeout"
                });
            }), u = (l)=>{
            e.cleanupCallbacks.push(l);
        }, g = (l = 1, h = 1)=>{
            d({
                type: "setPortCount",
                nodeId: t,
                inletCount: l,
                outletCount: h
            });
        }, M = (l)=>{
            d({
                type: "setTitle",
                nodeId: t,
                title: l
            });
        }, x = (l)=>{
            d({
                type: "setPrimaryButton",
                nodeId: t,
                primaryButton: l
            });
        }, ne = (l)=>{
            d({
                type: "setRunOnMount",
                nodeId: t,
                runOnMount: l
            });
        }, se = ()=>{
            d({
                type: "flash",
                nodeId: t
            });
        }, Pe = (l)=>o(()=>K.measure(t, "raf", l), 16), y = (l = {})=>{
            const { type: h = "wave", format: m = "int" } = l, w = `${h}-${m}`;
            e.isFFTEnabled || (self.postMessage({
                type: "fftEnabled",
                nodeId: t,
                enabled: !0
            }), e.isFFTEnabled = !0), e.fftRequestCache.has(w) || (self.postMessage({
                type: "registerFFTRequest",
                nodeId: t,
                analysisType: h,
                format: m
            }), e.fftRequestCache.set(w, !0));
            const $e = e.fftDataCache.get(w)?.data ?? null;
            return new nt($e, m, 44100, h);
        }, S = async (l, h)=>{
            const m = `llm-${t}-${++Mt}`;
            return new Promise((w, _)=>{
                Z.set(m, {
                    prompt: l,
                    resolve: w,
                    reject: _
                }), self.postMessage({
                    type: "llmRequest",
                    requestId: m,
                    nodeId: t,
                    prompt: l,
                    imageNodeId: h?.imageNodeId,
                    model: h?.model
                }), h?.abortSignal && h.abortSignal.addEventListener("abort", ()=>{
                    Z.delete(m), _(new Error("LLM request aborted"));
                });
            });
        }, L = async (l)=>{
            const h = `vfs-${t}-${++Dt}`;
            return new Promise((m, w)=>{
                ve.set(h, {
                    resolve: m,
                    reject: w
                }), self.postMessage({
                    type: "resolveVfsUrl",
                    requestId: h,
                    nodeId: t,
                    path: l
                });
            });
        }, C = (l = 1, h = 0)=>{
            d({
                type: "setVideoCount",
                nodeId: t,
                inletCount: l,
                outletCount: h
            });
        }, E = (l, h)=>{
            e.videoFrameCallback = l, d({
                type: "videoFrameCallbackRegistered",
                nodeId: t,
                resolution: h?.resolution
            });
        }, j = (l)=>{
            const h = `vf-${t}-${++e.videoFrameRequestIdCounter}`;
            return new Promise((m, w)=>{
                e.pendingVideoFrameResolvers.set(h, {
                    resolve: m,
                    reject: w
                }), d({
                    type: "requestVideoFrames",
                    nodeId: t,
                    requestId: h,
                    resolution: l?.resolution
                });
            });
        }, re = It(t);
        e.settingsProxy || (e.settingsProxy = Tt(t, (l)=>self.postMessage(l)));
        const oe = e.settingsProxy, $ = async ()=>{
            const l = `sonic-ch-${t}-${++xt}`;
            return new Promise((h, m)=>{
                Ce.set(l, {
                    resolve: h,
                    reject: m
                }), self.postMessage({
                    type: "requestSuperSonicChannel",
                    nodeId: t,
                    requestId: l
                });
            });
        };
        return {
            console: n,
            send: s,
            onMessage: r,
            setInterval: i,
            setTimeout: a,
            delay: c,
            onCleanup: u,
            setPortCount: g,
            setTitle: M,
            setPrimaryButton: x,
            setRunOnMount: ne,
            requestAnimationFrame: Pe,
            fft: y,
            llm: S,
            getVfsUrl: L,
            flash: se,
            setVideoCount: C,
            onVideoFrame: E,
            getVideoFrames: j,
            kv: re,
            settings: oe.settings,
            getSuperSonicChannel: $
        };
    }
    function ce(t) {
        const e = I.get(t);
        if (e) {
            for (const n of e.cleanupCallbacks)try {
                n();
            } catch  {}
            e.cleanupCallbacks = [];
            for (const n of e.intervals)self.clearInterval(n);
            e.intervals = [];
            for (const n of e.timeouts)self.clearTimeout(n);
            e.timeouts = [];
            for (const { timeoutId: n, reject: s } of e.pendingDelays.values())self.clearTimeout(n), s(new Error("delay() is stopped by user"));
            e.pendingDelays.clear(), e.messageCallbacks = [];
            for (const n of e.channelCallbacks.keys())d({
                type: "unsubscribeChannel",
                nodeId: t,
                channel: n
            });
            e.channelCallbacks.clear(), e.isFFTEnabled = !1, e.fftDataCache.clear(), e.fftRequestCache.clear(), e.videoFrameCallback = null;
            for (const { reject: n } of e.pendingVideoFrameResolvers.values())n(new Error("video frames request cancelled: node cleaned up"));
            e.pendingVideoFrameResolvers.clear();
            for (const n of e.oscChannels)try {
                n.close();
            } catch  {}
            e.oscChannels = [], e.settingsProxy?._reset();
        }
    }
    async function Rt(t, e) {
        const n = Lt(t), s = U(t);
        s.code = e;
        const o = `
    const inner = async () => {
      var recv = onMessage;
      var esm = (name) => import('https://esm.sh/' + name);

      ${e}
    }

    return inner()
  `, i = [
            "console",
            "send",
            "onMessage",
            "setInterval",
            "setTimeout",
            "delay",
            "requestAnimationFrame",
            "onCleanup",
            "fft",
            "llm",
            "setPortCount",
            "setRunOnMount",
            "setTitle",
            "setPrimaryButton",
            "getVfsUrl",
            "flash",
            "setVideoCount",
            "onVideoFrame",
            "getVideoFrames",
            "kv",
            "settings",
            "getSuperSonicChannel"
        ], a = [
            n.console,
            n.send,
            n.onMessage,
            n.setInterval,
            n.setTimeout,
            n.delay,
            n.requestAnimationFrame,
            n.onCleanup,
            n.fft,
            n.llm,
            n.setPortCount,
            n.setRunOnMount,
            n.setTitle,
            n.setPrimaryButton,
            n.getVfsUrl,
            n.flash,
            n.setVideoCount,
            n.onVideoFrame,
            n.getVideoFrames,
            n.kv,
            n.settings,
            n.getSuperSonicChannel
        ];
        try {
            const c = new Function(...i, o);
            if (K.isEnabled) {
                const u = performance.now();
                await c(...a);
                const g = performance.now() - u;
                d({
                    type: "executionComplete",
                    nodeId: t,
                    success: !0,
                    initDurationMs: g
                });
            } else await c(...a), d({
                type: "executionComplete",
                nodeId: t,
                success: !0
            });
        } catch (c) {
            Se(t, e, c);
            const u = c instanceof Error ? c.message : String(c);
            d({
                type: "executionComplete",
                nodeId: t,
                success: !1,
                error: u
            });
        }
    }
    function ee(t, e) {
        const n = I.get(t), s = (r)=>{
            if (n?.code) Se(t, n.code, r);
            else {
                const o = r instanceof Error ? r.message : String(r);
                d({
                    type: "consoleOutput",
                    nodeId: t,
                    level: "error",
                    args: [
                        o
                    ]
                });
            }
        };
        try {
            const r = e();
            r instanceof Promise && r.catch(s);
        } catch (r) {
            s(r);
        }
    }
    function Se(t, e, n) {
        const s = rt(n, ot(e));
        if (s) {
            d({
                type: "consoleOutput",
                nodeId: t,
                level: "error",
                args: [
                    s.message
                ],
                lineErrors: s.lineErrors
            });
            return;
        }
        const r = n instanceof Error ? n.message : String(n);
        d({
            type: "consoleOutput",
            nodeId: t,
            level: "error",
            args: [
                r
            ]
        });
    }
    function Nt(t) {
        const e = ve.get(t.requestId);
        if (e) {
            if (ve.delete(t.requestId), t.error) {
                e.reject(new Error(t.error));
                return;
            }
            if (t.url) {
                e.resolve(t.url);
                return;
            }
            e.reject(new Error("Invalid VFS resolution response"));
        }
    }
    function Vt(t) {
        const e = Z.get(t.requestId);
        if (e) {
            if (Z.delete(t.requestId), t.error) {
                e.reject(new Error(t.error));
                return;
            }
            e.resolve(t.text ?? "");
        }
    }
    async function Ot(t, e) {
        const n = Ce.get(e.requestId);
        if (n) {
            if (Ce.delete(e.requestId), e.error) {
                n.reject(new Error(e.error));
                return;
            }
            try {
                J || (J = await import("./chunks/uLWRXpjE.js"));
                const s = J.OscChannel.fromTransferable(e.channel), r = I.get(t);
                if (!r) {
                    s.close(), n.reject(new Error("Node destroyed before channel ready"));
                    return;
                }
                r.oscChannels.push(s), n.resolve({
                    channel: s,
                    osc: J.osc
                });
            } catch (s) {
                const r = s instanceof Error ? s.message : String(s);
                n.reject(new Error(`Failed to create OscChannel: ${r}`));
            }
        }
    }
    function Bt(t, e) {
        const n = I.get(t);
        if (!n) return;
        const s = `${e.analysisType}-${e.format}`;
        n.fftDataCache.set(s, {
            data: e.array,
            timestamp: performance.now()
        });
    }
    function At(t, e) {
        const n = I.get(t);
        if (n) {
            n.videoFrameCallback && ee(t, ()=>n.videoFrameCallback(e.frames, e.timestamp));
            for (const [s, { resolve: r }] of n.pendingVideoFrameResolvers){
                r(e.frames), n.pendingVideoFrameResolvers.delete(s);
                break;
            }
        }
    }
    self.onmessage = async (t)=>{
        const { nodeId: e } = t.data;
        fe(t.data).with({
            type: "setPatchId"
        }, ({ patchId: n })=>{
            A.getInstance().setPatchId(n);
        }).with({
            type: "executeCode"
        }, async ({ processedCode: n })=>{
            ce(e), await Rt(e, n);
        }).with({
            type: "incomingMessage"
        }, ({ data: n, meta: s })=>{
            const r = I.get(e);
            r?.messageCallbacks.length && K.measure(e, "message", ()=>{
                for (const o of r.messageCallbacks)ee(e, ()=>o(n, s));
            });
        }).with({
            type: "channelMessage"
        }, (n)=>{
            const { channel: s, data: r, sourceNodeId: o } = n, a = I.get(e)?.channelCallbacks.get(s);
            if (a) {
                const c = {
                    source: o,
                    channel: s
                };
                K.measure(e, "message", ()=>ee(e, ()=>a(r, c)));
            }
        }).with({
            type: "updateModule"
        }, ({ moduleName: n, code: s })=>{
            s === null ? Re.delete(n) : Re.set(n, s);
        }).with({
            type: "cleanup"
        }, ()=>{
            ce(e);
        }).with({
            type: "destroy"
        }, ()=>{
            const n = I.get(e);
            ce(e), n?.directChannel.cleanup(), I.delete(e);
        }).with({
            type: "vfsUrlResolved"
        }, (n)=>{
            Nt(n);
        }).with({
            type: "llmConfig"
        }, (n)=>{
            Vt(n);
        }).with({
            type: "setFFTData"
        }, (n)=>{
            Bt(e, n);
        }).with({
            type: "videoFramesReady"
        }, (n)=>{
            At(e, n);
        }).with({
            type: "setRenderPort"
        }, ()=>{
            U(e).directChannel.handleSetRenderPort(t.ports[0]);
        }).with({
            type: "updateRenderConnections"
        }, (n)=>{
            U(e).directChannel.handleUpdateRenderConnections(n.connections);
        }).with({
            type: "setWorkerPort"
        }, (n)=>{
            const s = U(e), { targetNodeId: r, sourceNodeId: o } = n;
            s.directChannel.handleSetWorkerPort(t.ports[0], r, o);
        }).with({
            type: "updateWorkerConnections"
        }, (n)=>{
            U(e).directChannel.handleUpdateWorkerConnections(n.connections);
        }).with({
            type: "profilerEnable"
        }, ({ enabled: n })=>{
            K.setEnabled(n);
        }).with({
            type: "settingsValuesInit"
        }, ({ requestId: n, values: s })=>{
            I.get(e)?.settingsProxy?._receiveValuesInit(n, s);
        }).with({
            type: "settingsValueChanged"
        }, ({ key: n, value: s })=>{
            I.get(e)?.settingsProxy?._receiveValueChanged(n, s);
        }).with({
            type: "superSonicChannelReady"
        }, (n)=>{
            Ot(e, n);
        }).otherwise(()=>{});
    };
    console.log("[js worker] initialized");
})();
