(async ()=>{
    const m = Symbol.for("@ts-pattern/matcher"), j = Symbol.for("@ts-pattern/isVariadic"), I = "@ts-pattern/anonymous-select-key", P = (r)=>!!(r && typeof r == "object"), A = (r)=>r && !!r[m], p = (r, e, n)=>{
        if (A(r)) {
            const t = r[m](), { matched: i, selections: s } = t.match(e);
            return i && s && Object.keys(s).forEach((h)=>n(h, s[h])), i;
        }
        if (P(r)) {
            if (!P(e)) return !1;
            if (Array.isArray(r)) {
                if (!Array.isArray(e)) return !1;
                let t = [], i = [], s = [];
                for (const h of r.keys()){
                    const u = r[h];
                    A(u) && u[j] ? s.push(u) : s.length ? i.push(u) : t.push(u);
                }
                if (s.length) {
                    if (s.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                    if (e.length < t.length + i.length) return !1;
                    const h = e.slice(0, t.length), u = i.length === 0 ? [] : e.slice(-i.length), x = e.slice(t.length, i.length === 0 ? 1 / 0 : -i.length);
                    return t.every((E, _)=>p(E, h[_], n)) && i.every((E, _)=>p(E, u[_], n)) && (s.length === 0 || p(s[0], x, n));
                }
                return r.length === e.length && r.every((h, u)=>p(h, e[u], n));
            }
            return Reflect.ownKeys(r).every((t)=>{
                const i = r[t];
                return (t in e || A(s = i) && s[m]().matcherType === "optional") && p(i, e[t], n);
                var s;
            });
        }
        return Object.is(e, r);
    }, w = (r)=>{
        var e, n, t;
        return P(r) ? A(r) ? (e = (n = (t = r[m]()).getSelectionKeys) == null ? void 0 : n.call(t)) != null ? e : [] : Array.isArray(r) ? C(r, w) : C(Object.values(r), w) : [];
    }, C = (r, e)=>r.reduce((n, t)=>n.concat(e(t)), []);
    function l(r) {
        return Object.assign(r, {
            optional: ()=>O(r),
            and: (e)=>a(r, e),
            or: (e)=>R(r, e),
            select: (e)=>e === void 0 ? k(r) : k(e, r)
        });
    }
    function O(r) {
        return l({
            [m]: ()=>({
                    match: (e)=>{
                        let n = {};
                        const t = (i, s)=>{
                            n[i] = s;
                        };
                        return e === void 0 ? (w(r).forEach((i)=>t(i, void 0)), {
                            matched: !0,
                            selections: n
                        }) : {
                            matched: p(r, e, t),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>w(r),
                    matcherType: "optional"
                })
        });
    }
    function a(...r) {
        return l({
            [m]: ()=>({
                    match: (e)=>{
                        let n = {};
                        const t = (i, s)=>{
                            n[i] = s;
                        };
                        return {
                            matched: r.every((i)=>p(i, e, t)),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>C(r, w),
                    matcherType: "and"
                })
        });
    }
    function R(...r) {
        return l({
            [m]: ()=>({
                    match: (e)=>{
                        let n = {};
                        const t = (i, s)=>{
                            n[i] = s;
                        };
                        return C(r, w).forEach((i)=>t(i, void 0)), {
                            matched: r.some((i)=>p(i, e, t)),
                            selections: n
                        };
                    },
                    getSelectionKeys: ()=>C(r, w),
                    matcherType: "or"
                })
        });
    }
    function o(r) {
        return {
            [m]: ()=>({
                    match: (e)=>({
                            matched: !!r(e)
                        })
                })
        };
    }
    function k(...r) {
        const e = typeof r[0] == "string" ? r[0] : void 0, n = r.length === 2 ? r[1] : typeof r[0] == "string" ? void 0 : r[0];
        return l({
            [m]: ()=>({
                    match: (t)=>{
                        let i = {
                            [e ?? I]: t
                        };
                        return {
                            matched: n === void 0 || p(n, t, (s, h)=>{
                                i[s] = h;
                            }),
                            selections: i
                        };
                    },
                    getSelectionKeys: ()=>[
                            e ?? I
                        ].concat(n === void 0 ? [] : w(n))
                })
        });
    }
    function g(r) {
        return typeof r == "number";
    }
    function y(r) {
        return typeof r == "string";
    }
    function d(r) {
        return typeof r == "bigint";
    }
    l(o(function(r) {
        return !0;
    }));
    const M = (r)=>Object.assign(l(r), {
            startsWith: (e)=>{
                return M(a(r, (n = e, o((t)=>y(t) && t.startsWith(n)))));
                var n;
            },
            endsWith: (e)=>{
                return M(a(r, (n = e, o((t)=>y(t) && t.endsWith(n)))));
                var n;
            },
            minLength: (e)=>M(a(r, ((n)=>o((t)=>y(t) && t.length >= n))(e))),
            length: (e)=>M(a(r, ((n)=>o((t)=>y(t) && t.length === n))(e))),
            maxLength: (e)=>M(a(r, ((n)=>o((t)=>y(t) && t.length <= n))(e))),
            includes: (e)=>{
                return M(a(r, (n = e, o((t)=>y(t) && t.includes(n)))));
                var n;
            },
            regex: (e)=>{
                return M(a(r, (n = e, o((t)=>y(t) && !!t.match(n)))));
                var n;
            }
        });
    M(o(y));
    const f = (r)=>Object.assign(l(r), {
            between: (e, n)=>f(a(r, ((t, i)=>o((s)=>g(s) && t <= s && i >= s))(e, n))),
            lt: (e)=>f(a(r, ((n)=>o((t)=>g(t) && t < n))(e))),
            gt: (e)=>f(a(r, ((n)=>o((t)=>g(t) && t > n))(e))),
            lte: (e)=>f(a(r, ((n)=>o((t)=>g(t) && t <= n))(e))),
            gte: (e)=>f(a(r, ((n)=>o((t)=>g(t) && t >= n))(e))),
            int: ()=>f(a(r, o((e)=>g(e) && Number.isInteger(e)))),
            finite: ()=>f(a(r, o((e)=>g(e) && Number.isFinite(e)))),
            positive: ()=>f(a(r, o((e)=>g(e) && e > 0))),
            negative: ()=>f(a(r, o((e)=>g(e) && e < 0)))
        });
    f(o(g));
    const v = (r)=>Object.assign(l(r), {
            between: (e, n)=>v(a(r, ((t, i)=>o((s)=>d(s) && t <= s && i >= s))(e, n))),
            lt: (e)=>v(a(r, ((n)=>o((t)=>d(t) && t < n))(e))),
            gt: (e)=>v(a(r, ((n)=>o((t)=>d(t) && t > n))(e))),
            lte: (e)=>v(a(r, ((n)=>o((t)=>d(t) && t <= n))(e))),
            gte: (e)=>v(a(r, ((n)=>o((t)=>d(t) && t >= n))(e))),
            positive: ()=>v(a(r, o((e)=>d(e) && e > 0))),
            negative: ()=>v(a(r, o((e)=>d(e) && e < 0)))
        });
    v(o(d));
    l(o(function(r) {
        return typeof r == "boolean";
    }));
    l(o(function(r) {
        return typeof r == "symbol";
    }));
    l(o(function(r) {
        return r == null;
    }));
    l(o(function(r) {
        return r != null;
    }));
    class $ extends Error {
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
    const B = {
        matched: !1,
        value: void 0
    };
    function T(r) {
        return new S(r, B);
    }
    class S {
        constructor(e, n){
            this.input = void 0, this.state = void 0, this.input = e, this.state = n;
        }
        with(...e) {
            if (this.state.matched) return this;
            const n = e[e.length - 1], t = [
                e[0]
            ];
            let i;
            e.length === 3 && typeof e[1] == "function" ? i = e[1] : e.length > 2 && t.push(...e.slice(1, e.length - 1));
            let s = !1, h = {};
            const u = (E, _)=>{
                s = !0, h[E] = _;
            }, x = !t.some((E)=>p(E, this.input, u)) || i && !i(this.input) ? B : {
                matched: !0,
                value: n(s ? I in h ? h[I] : h : this.input, this.input)
            };
            return new S(this.input, x);
        }
        when(e, n) {
            if (this.state.matched) return this;
            const t = !!e(this.input);
            return new S(this.input, t ? {
                matched: !0,
                value: n(this.input, this.input)
            } : B);
        }
        otherwise(e) {
            return this.state.matched ? this.state.value : e(this.input);
        }
        exhaustive(e = D) {
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
    function D(r) {
        throw new $(r);
    }
    const W = 4096, K = 100, L = 1;
    let b = null;
    class F {
        controller = null;
        initPromise = null;
        initialized = !1;
        machineConfigs = new Map;
        runningIntervals = new Map;
        async ensureController() {
            if (!this.initialized) return this.initPromise ? this.initPromise : (this.initPromise = (async ()=>{
                const e = await import("./chunks/tYpm51_i.js");
                await e.default();
                const { Controller: n, Port: t } = e;
                b = t, this.controller = n.create(), this.initialized = !0;
            })(), this.initPromise);
        }
        createMachineWithId(e) {
            this.controller?.add_machine_with_id(e), this.machineConfigs.set(e, {
                isRunning: !1,
                delayMs: 100,
                stepBy: 1
            });
        }
        removeMachine(e) {
            this.pauseMachine(e), this.controller?.remove_machine(e), this.machineConfigs.delete(e);
        }
        machineExists(e) {
            try {
                if (!this.controller) return !1;
                const n = this.controller.inspect_machine(e);
                return n != null;
            } catch  {
                return !1;
            }
        }
        loadProgram(e, n) {
            this.controller?.load(e, n), this.controller?.reset_machine(e);
        }
        stepMachine(e, n = 1) {
            this.controller && this.controller.step_machine(e, n);
        }
        inspectMachine(e) {
            try {
                const n = this.controller?.inspect_machine(e);
                return n === null ? null : n;
            } catch  {
                return null;
            }
        }
        loggedBoundsErrors = new Set;
        readMemory(e, n, t) {
            if (n < 0 || t < 0 || n + t > W) {
                const i = `${e}:${n}:${t}`;
                return this.loggedBoundsErrors.has(i) || (this.loggedBoundsErrors.add(i), console.warn(`[assemblyWorker] readMemory bounds error: address=${n}, size=${t}, max=${W} (further errors suppressed)`)), null;
            }
            try {
                const i = this.controller?.read_mem(e, n, t);
                return i === null ? null : i;
            } catch  {
                return null;
            }
        }
        consumeMachineEffects(e) {
            return this.controller?.consume_machine_side_effects(e);
        }
        sendDataMessage(e, n, t, i) {
            return b ? this.sendMessage(e, {
                type: "Data",
                body: Array.isArray(n) ? n : [
                    n
                ]
            }, t, i) : !1;
        }
        sendMessage(e, n, t, i) {
            if (!b) return !1;
            try {
                return this.controller?.send_message_to_machine(e, {
                    action: n,
                    sender: new b(t, i),
                    recipient: e
                });
            } catch (s) {
                throw console.error(`Failed to send message to machine ${e}:`, s), s;
            }
        }
        consumeMessages(e) {
            return this.controller?.consume_messages(e);
        }
        getSnapshot(e) {
            try {
                return this.controller?.get_snapshot(e) ?? null;
            } catch  {
                return null;
            }
        }
        setMachineConfig(e, n) {
            const i = {
                ...this.machineConfigs.get(e) || {
                    isRunning: !1,
                    delayMs: K,
                    stepBy: L
                },
                ...n
            };
            this.machineConfigs.set(e, i), n.isRunning !== void 0 && (n.isRunning ? this.startAutoExecution(e) : this.stopAutoExecution(e));
        }
        getMachineConfig(e) {
            return this.machineConfigs.get(e) || {
                isRunning: !1,
                delayMs: 100,
                stepBy: 1
            };
        }
        playMachine(e) {
            this.setMachineConfig(e, {
                isRunning: !0
            });
        }
        pauseMachine(e) {
            this.setMachineConfig(e, {
                isRunning: !1
            });
        }
        resetMachine(e) {
            this.pauseMachine(e), this.controller?.reset_machine(e);
        }
        wakeMachine(e) {
            this.controller?.wake(e);
        }
        startAutoExecution(e) {
            this.stopAutoExecution(e);
            const n = this.getMachineConfig(e), t = setInterval(()=>{
                try {
                    this.stepMachine(e, n.stepBy);
                } catch  {
                    this.pauseMachine(e);
                }
            }, n.delayMs);
            this.runningIntervals.set(e, t);
        }
        stopAutoExecution(e) {
            const n = this.runningIntervals.get(e);
            n !== void 0 && (clearInterval(n), this.runningIntervals.delete(e));
        }
        dispose() {
            this.runningIntervals.forEach((e)=>clearInterval(e)), this.runningIntervals.clear(), this.machineConfigs.clear(), this.controller && this.controller.free(), this.initialized = !1;
        }
    }
    const c = new F;
    self.onmessage = async (r)=>{
        const { id: e } = r.data;
        await c.ensureController();
        try {
            const n = await T(r.data).with({
                type: "createMachineWithId"
            }, (t)=>{
                c.createMachineWithId(t.machineId);
            }).with({
                type: "removeMachine"
            }, (t)=>{
                c.removeMachine(t.machineId);
            }).with({
                type: "machineExists"
            }, (t)=>c.machineExists(t.machineId)).with({
                type: "loadProgram"
            }, (t)=>{
                c.loadProgram(t.machineId, t.source);
            }).with({
                type: "stepMachine"
            }, (t)=>{
                c.stepMachine(t.machineId, t.cycles);
            }).with({
                type: "inspectMachine"
            }, (t)=>c.inspectMachine(t.machineId)).with({
                type: "readMemory"
            }, (t)=>c.readMemory(t.machineId, t.address, t.size)).with({
                type: "consumeMachineEffects"
            }, (t)=>c.consumeMachineEffects(t.machineId)).with({
                type: "sendMessage"
            }, (t)=>c.sendMessage(t.machineId, t.action, t.source, t.inlet)).with({
                type: "sendDataMessage"
            }, (t)=>c.sendDataMessage(t.machineId, t.data, t.source, t.inlet)).with({
                type: "consumeMessages"
            }, (t)=>c.consumeMessages(t.machineId)).with({
                type: "getSnapshot"
            }, (t)=>c.getSnapshot(t.machineId)).with({
                type: "setMachineConfig"
            }, (t)=>{
                c.setMachineConfig(t.machineId, t.config);
            }).with({
                type: "getMachineConfig"
            }, (t)=>c.getMachineConfig(t.machineId)).with({
                type: "playMachine"
            }, (t)=>{
                c.playMachine(t.machineId);
            }).with({
                type: "pauseMachine"
            }, (t)=>{
                c.pauseMachine(t.machineId);
            }).with({
                type: "resetMachine"
            }, (t)=>{
                c.resetMachine(t.machineId);
            }).with({
                type: "wakeMachine"
            }, (t)=>{
                c.wakeMachine(t.machineId);
            }).exhaustive();
            self.postMessage({
                type: "success",
                id: e,
                result: n
            });
        } catch (n) {
            console.error("[assembly worker] error:", n), self.postMessage({
                type: "error",
                id: e,
                error: n
            });
        }
    };
})();
