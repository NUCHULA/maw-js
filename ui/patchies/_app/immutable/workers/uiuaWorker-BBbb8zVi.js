(async ()=>{
    const y = Symbol.for("@ts-pattern/matcher"), B = Symbol.for("@ts-pattern/isVariadic"), _ = "@ts-pattern/anonymous-select-key", V = (t)=>!!(t && typeof t == "object"), k = (t)=>t && !!t[y], g = (t, e, r)=>{
        if (k(t)) {
            const n = t[y](), { matched: i, selections: s } = n.match(e);
            return i && s && Object.keys(s).forEach((u)=>r(u, s[u])), i;
        }
        if (V(t)) {
            if (!V(e)) return !1;
            if (Array.isArray(t)) {
                if (!Array.isArray(e)) return !1;
                let n = [], i = [], s = [];
                for (const u of t.keys()){
                    const c = t[u];
                    k(c) && c[B] ? s.push(c) : s.length ? i.push(c) : n.push(c);
                }
                if (s.length) {
                    if (s.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                    if (e.length < n.length + i.length) return !1;
                    const u = e.slice(0, n.length), c = i.length === 0 ? [] : e.slice(-i.length), A = e.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
                    return n.every((d, E)=>g(d, u[E], r)) && i.every((d, E)=>g(d, c[E], r)) && (s.length === 0 || g(s[0], A, r));
                }
                return t.length === e.length && t.every((u, c)=>g(u, e[c], r));
            }
            return Reflect.ownKeys(t).every((n)=>{
                const i = t[n];
                return (n in e || k(s = i) && s[y]().matcherType === "optional") && g(i, e[n], r);
                var s;
            });
        }
        return Object.is(e, t);
    }, S = (t)=>{
        var e, r, n;
        return V(t) ? k(t) ? (e = (r = (n = t[y]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? e : [] : Array.isArray(t) ? O(t, S) : O(Object.values(t), S) : [];
    }, O = (t, e)=>t.reduce((r, n)=>r.concat(e(n)), []);
    function l(t) {
        return Object.assign(t, {
            optional: ()=>N(t),
            and: (e)=>o(t, e),
            or: (e)=>T(t, e),
            select: (e)=>e === void 0 ? $(t) : $(e, t)
        });
    }
    function N(t) {
        return l({
            [y]: ()=>({
                    match: (e)=>{
                        let r = {};
                        const n = (i, s)=>{
                            r[i] = s;
                        };
                        return e === void 0 ? (S(t).forEach((i)=>n(i, void 0)), {
                            matched: !0,
                            selections: r
                        }) : {
                            matched: g(t, e, n),
                            selections: r
                        };
                    },
                    getSelectionKeys: ()=>S(t),
                    matcherType: "optional"
                })
        });
    }
    function o(...t) {
        return l({
            [y]: ()=>({
                    match: (e)=>{
                        let r = {};
                        const n = (i, s)=>{
                            r[i] = s;
                        };
                        return {
                            matched: t.every((i)=>g(i, e, n)),
                            selections: r
                        };
                    },
                    getSelectionKeys: ()=>O(t, S),
                    matcherType: "and"
                })
        });
    }
    function T(...t) {
        return l({
            [y]: ()=>({
                    match: (e)=>{
                        let r = {};
                        const n = (i, s)=>{
                            r[i] = s;
                        };
                        return O(t, S).forEach((i)=>n(i, void 0)), {
                            matched: t.some((i)=>g(i, e, n)),
                            selections: r
                        };
                    },
                    getSelectionKeys: ()=>O(t, S),
                    matcherType: "or"
                })
        });
    }
    function a(t) {
        return {
            [y]: ()=>({
                    match: (e)=>({
                            matched: !!t(e)
                        })
                })
        };
    }
    function $(...t) {
        const e = typeof t[0] == "string" ? t[0] : void 0, r = t.length === 2 ? t[1] : typeof t[0] == "string" ? void 0 : t[0];
        return l({
            [y]: ()=>({
                    match: (n)=>{
                        let i = {
                            [e ?? _]: n
                        };
                        return {
                            matched: r === void 0 || g(r, n, (s, u)=>{
                                i[s] = u;
                            }),
                            selections: i
                        };
                    },
                    getSelectionKeys: ()=>[
                            e ?? _
                        ].concat(r === void 0 ? [] : S(r))
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
    l(a(function(t) {
        return !0;
    }));
    const w = (t)=>Object.assign(l(t), {
            startsWith: (e)=>{
                return w(o(t, (r = e, a((n)=>m(n) && n.startsWith(r)))));
                var r;
            },
            endsWith: (e)=>{
                return w(o(t, (r = e, a((n)=>m(n) && n.endsWith(r)))));
                var r;
            },
            minLength: (e)=>w(o(t, ((r)=>a((n)=>m(n) && n.length >= r))(e))),
            length: (e)=>w(o(t, ((r)=>a((n)=>m(n) && n.length === r))(e))),
            maxLength: (e)=>w(o(t, ((r)=>a((n)=>m(n) && n.length <= r))(e))),
            includes: (e)=>{
                return w(o(t, (r = e, a((n)=>m(n) && n.includes(r)))));
                var r;
            },
            regex: (e)=>{
                return w(o(t, (r = e, a((n)=>m(n) && !!n.match(r)))));
                var r;
            }
        });
    w(a(m));
    const f = (t)=>Object.assign(l(t), {
            between: (e, r)=>f(o(t, ((n, i)=>a((s)=>h(s) && n <= s && i >= s))(e, r))),
            lt: (e)=>f(o(t, ((r)=>a((n)=>h(n) && n < r))(e))),
            gt: (e)=>f(o(t, ((r)=>a((n)=>h(n) && n > r))(e))),
            lte: (e)=>f(o(t, ((r)=>a((n)=>h(n) && n <= r))(e))),
            gte: (e)=>f(o(t, ((r)=>a((n)=>h(n) && n >= r))(e))),
            int: ()=>f(o(t, a((e)=>h(e) && Number.isInteger(e)))),
            finite: ()=>f(o(t, a((e)=>h(e) && Number.isFinite(e)))),
            positive: ()=>f(o(t, a((e)=>h(e) && e > 0))),
            negative: ()=>f(o(t, a((e)=>h(e) && e < 0)))
        });
    f(a(h));
    const b = (t)=>Object.assign(l(t), {
            between: (e, r)=>b(o(t, ((n, i)=>a((s)=>v(s) && n <= s && i >= s))(e, r))),
            lt: (e)=>b(o(t, ((r)=>a((n)=>v(n) && n < r))(e))),
            gt: (e)=>b(o(t, ((r)=>a((n)=>v(n) && n > r))(e))),
            lte: (e)=>b(o(t, ((r)=>a((n)=>v(n) && n <= r))(e))),
            gte: (e)=>b(o(t, ((r)=>a((n)=>v(n) && n >= r))(e))),
            positive: ()=>b(o(t, a((e)=>v(e) && e > 0))),
            negative: ()=>b(o(t, a((e)=>v(e) && e < 0)))
        });
    b(a(v));
    l(a(function(t) {
        return typeof t == "boolean";
    }));
    l(a(function(t) {
        return typeof t == "symbol";
    }));
    l(a(function(t) {
        return t == null;
    }));
    l(a(function(t) {
        return t != null;
    }));
    class U extends Error {
        constructor(e){
            let r;
            try {
                r = JSON.stringify(e);
            } catch  {
                r = e;
            }
            super(`Pattern matching error: no pattern matches value ${r}`), this.input = void 0, this.input = e;
        }
    }
    const W = {
        matched: !1,
        value: void 0
    };
    function P(t) {
        return new M(t, W);
    }
    class M {
        constructor(e, r){
            this.input = void 0, this.state = void 0, this.input = e, this.state = r;
        }
        with(...e) {
            if (this.state.matched) return this;
            const r = e[e.length - 1], n = [
                e[0]
            ];
            let i;
            e.length === 3 && typeof e[1] == "function" ? i = e[1] : e.length > 2 && n.push(...e.slice(1, e.length - 1));
            let s = !1, u = {};
            const c = (d, E)=>{
                s = !0, u[d] = E;
            }, A = !n.some((d)=>g(d, this.input, c)) || i && !i(this.input) ? W : {
                matched: !0,
                value: r(s ? _ in u ? u[_] : u : this.input, this.input)
            };
            return new M(this.input, A);
        }
        when(e, r) {
            if (this.state.matched) return this;
            const n = !!e(this.input);
            return new M(this.input, n ? {
                matched: !0,
                value: r(this.input, this.input)
            } : W);
        }
        otherwise(e) {
            return this.state.matched ? this.state.value : e(this.input);
        }
        exhaustive(e = F) {
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
    function F(t) {
        throw new U(t);
    }
    let j = null, x = null;
    function p(t) {
        self.postMessage(t);
    }
    async function I() {
        const t = await import("./chunks/tcYYNbEx.js");
        return await t.default(), {
            eval_uiua: t.eval_uiua,
            format_uiua: t.format_uiua,
            uiua_version: t.uiua_version
        };
    }
    async function R() {
        if (j) return j;
        x || (x = I());
        try {
            return j = await x, j;
        } catch (t) {
            throw x = null, t;
        }
    }
    function K(t) {
        return t == null ? "0" : typeof t == "number" ? t < 0 ? `¯${Math.abs(t)}` : String(t) : typeof t == "string" ? `"${t.replace(/"/g, '\\"')}"` : Array.isArray(t) ? `[${t.map((r)=>K(r)).join(" ")}]` : typeof t == "boolean" ? t ? "1" : "0" : String(t);
    }
    function J(t) {
        switch(t.type){
            case "text":
                return {
                    type: "text",
                    value: String(t.value)
                };
            case "svg":
                return {
                    type: "svg",
                    svg: String(t.svg)
                };
            case "audio":
                return {
                    type: "audio",
                    data: new Uint8Array(t.data),
                    label: t.label ? String(t.label) : void 0
                };
            case "image":
                return {
                    type: "image",
                    data: new Uint8Array(t.data),
                    label: t.label ? String(t.label) : void 0
                };
            case "gif":
                return {
                    type: "gif",
                    data: new Uint8Array(t.data),
                    label: t.label ? String(t.label) : void 0
                };
            default:
                return JSON.parse(JSON.stringify(t));
        }
    }
    function z(t) {
        const e = [];
        for(let r = 0; r < t.stack.length; r++)e.push(J(t.stack[r]));
        return t.success ? {
            success: !0,
            stack: e,
            formatted: t.formatted ? String(t.formatted) : void 0
        } : {
            success: !1,
            error: String(t.error),
            stack: e,
            formatted: t.formatted ? String(t.formatted) : void 0
        };
    }
    async function L(t, e) {
        try {
            const n = (await R()).eval_uiua(e);
            p({
                type: "evalResult",
                id: t,
                result: z(n)
            });
        } catch (r) {
            p({
                type: "evalResult",
                id: t,
                result: {
                    success: !1,
                    error: r instanceof Error ? r.message : String(r),
                    stack: []
                }
            });
        }
    }
    async function G(t, e, r) {
        try {
            let n = e;
            const i = Math.min(r.length, 9);
            for(let c = i - 1; c >= 0; c--){
                const A = `$${c + 1}`, d = K(r[c]);
                n = n.replaceAll(A, d);
            }
            const u = (await R()).eval_uiua(n);
            p({
                type: "evalResult",
                id: t,
                result: z(u)
            });
        } catch (n) {
            p({
                type: "evalResult",
                id: t,
                result: {
                    success: !1,
                    error: n instanceof Error ? n.message : String(n),
                    stack: []
                }
            });
        }
    }
    function q(t) {
        return t.success ? {
            success: !0,
            formatted: String(t.formatted)
        } : {
            success: !1,
            error: String(t.error)
        };
    }
    async function C(t, e) {
        try {
            const n = (await R()).format_uiua(e);
            p({
                type: "formatResult",
                id: t,
                result: q(n)
            });
        } catch (r) {
            p({
                type: "formatResult",
                id: t,
                result: {
                    success: !1,
                    error: r instanceof Error ? r.message : String(r)
                }
            });
        }
    }
    async function D(t) {
        try {
            const r = (await R()).uiua_version();
            p({
                type: "versionResult",
                id: t,
                version: String(r)
            });
        } catch (e) {
            p({
                type: "error",
                id: t,
                error: e instanceof Error ? e.message : String(e)
            });
        }
    }
    self.onmessage = async (t)=>{
        const { id: e } = t.data;
        P(t.data).with({
            type: "init"
        }, ()=>R()).with({
            type: "eval"
        }, ({ code: r })=>L(e, r)).with({
            type: "evalWithValues"
        }, ({ code: r, values: n })=>G(e, r, n)).with({
            type: "format"
        }, ({ code: r })=>C(e, r)).with({
            type: "getVersion"
        }, ()=>D(e)).otherwise(()=>{});
    };
    p({
        type: "ready",
        id: "0"
    });
    console.log("[uiua worker] initialized");
})();
