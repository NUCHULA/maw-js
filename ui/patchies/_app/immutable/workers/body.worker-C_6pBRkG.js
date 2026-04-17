(async ()=>{
    function S(g) {
        const { nodeId: t, onIncomingMessage: e, onError: s } = g;
        let n = null, r = [];
        const i = new Map;
        let o = [];
        function I(a, c) {
            if (!n || r.length === 0) return [];
            const u = r.filter((l)=>c?.to === void 0 || l.outlet === c.to);
            for (const l of u)n.postMessage({
                fromNodeId: t,
                targetNodeId: l.targetNodeId,
                inlet: l.inlet,
                inletKey: l.inletKey,
                data: a
            });
            return u.map((l)=>l.targetNodeId);
        }
        function m(a, c) {
            if (i.size === 0 || o.length === 0) return [];
            const u = o.filter((d)=>c?.to === void 0 || d.outlet === c.to), l = [];
            for (const d of u){
                const y = i.get(d.targetNodeId);
                y && (y.postMessage({
                    fromNodeId: t,
                    targetNodeId: d.targetNodeId,
                    inlet: d.inlet,
                    inletKey: d.inletKey,
                    data: a
                }), l.push(d.targetNodeId));
            }
            return l;
        }
        function h(a) {
            n = a, a.start();
        }
        function p(a, c, u) {
            c ? (i.set(c, a), a.start()) : u && (i.set(u, a), a.onmessage = (l)=>{
                const { data: d, inlet: y, inletKey: C, fromNodeId: F } = l.data;
                try {
                    const k = e(d, {
                        source: F,
                        inlet: y,
                        inletKey: C
                    });
                    k instanceof Promise && k.catch(s);
                } catch (k) {
                    s(k);
                }
            }, a.start());
        }
        function f(a) {
            r = a;
        }
        function P(a) {
            o = a;
        }
        function v() {
            n?.close(), n = null, r = [];
            for (const a of i.values())a.close();
            i.clear(), o = [];
        }
        return {
            sendToTargets: (a, c)=>[
                    ...I(a, c),
                    ...m(a, c)
                ],
            handleSetRenderPort: h,
            handleSetWorkerPort: p,
            handleUpdateRenderConnections: f,
            handleUpdateWorkerConnections: P,
            cleanup: v
        };
    }
    const T = 1200;
    class _ {
        samples;
        capacity;
        head = 0;
        count = 0;
        messagesSinceFlush = 0;
        lastFlushTime = performance.now();
        constructor(t = T){
            this.capacity = t, this.samples = new Float64Array(t);
        }
        record(t) {
            this.samples[this.head] = t, this.head = (this.head + 1) % this.capacity, this.count < this.capacity && this.count++, this.messagesSinceFlush++;
        }
        flush(t) {
            const e = (t - this.lastFlushTime) / 1e3, s = e > 0 ? this.messagesSinceFlush / e : 0, n = this.messagesSinceFlush;
            if (this.messagesSinceFlush = 0, this.lastFlushTime = t, this.count === 0) return {
                avg: 0,
                max: 0,
                p95: 0,
                last: 0,
                callsPerSecond: 0
            };
            const r = new Float64Array(this.count);
            let i = 0;
            for(let h = 0; h < this.count; h++){
                const p = (this.head - this.count + h + this.capacity) % this.capacity, f = this.samples[p];
                r[h] = f, f > i && (i = f);
            }
            r.sort();
            const o = r[Math.floor(this.count * .95)], I = this.samples[(this.head - 1 + this.capacity) % this.capacity];
            let m = 0;
            if (n > 0) {
                let h = 0;
                for(let p = 0; p < n; p++){
                    const f = (this.head - n + p + this.capacity) % this.capacity;
                    h += this.samples[f];
                }
                m = h / n;
            }
            return {
                avg: m,
                max: i,
                p95: o,
                last: I,
                callsPerSecond: s
            };
        }
        reset() {
            this.head = 0, this.count = 0, this.messagesSinceFlush = 0, this.lastFlushTime = performance.now();
        }
    }
    const M = 500;
    class E {
        constructor(t){
            this.onFlush = t;
        }
        enabled = !1;
        collectors = new Map;
        flushInterval = null;
        get isEnabled() {
            return this.enabled;
        }
        setEnabled(t) {
            this.enabled = t, t ? this.startFlush() : this.stopFlush();
        }
        measure(t, e, s) {
            if (!this.enabled) return s();
            const n = performance.now(), r = `${t}|${e}`, i = ()=>{
                let o = this.collectors.get(r);
                return o || (o = new _, this.collectors.set(r, o)), o;
            };
            try {
                const o = s();
                return o instanceof Promise ? o.finally(()=>{
                    i().record(performance.now() - n);
                }) : i().record(performance.now() - n), o;
            } catch (o) {
                throw i().record(performance.now() - n), o;
            }
        }
        flushSync() {
            const t = performance.now();
            for (const [e, s] of this.collectors){
                const n = s.flush(t);
                if (n.avg === 0 && n.callsPerSecond === 0) continue;
                const r = e.lastIndexOf("|"), i = e.slice(0, r), o = e.slice(r + 1);
                this.onFlush(i, o, n);
            }
        }
        startFlush() {
            this.flushInterval === null && (this.flushInterval = setInterval(()=>this.flushSync(), M));
        }
        stopFlush() {
            this.flushInterval !== null && (clearInterval(this.flushInterval), this.flushInterval = null);
            try {
                this.flushSync();
            } catch  {}
            this.collectors.clear();
        }
    }
    const b = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.33/wasm";
    class R {
        task = null;
        options = null;
        isProcessing = !1;
        isDestroyed = !1;
        frameCount = 0;
        fpsIntervalId = null;
        workerProfiler = new E((t, e, s)=>{
            self.postMessage({
                type: "profilerStats",
                nodeId: t,
                category: e,
                stats: s
            });
        });
        directChannel = null;
        nodeId = "";
        post(t, e) {
            e?.length ? self.postMessage(t, {
                transfer: e
            }) : self.postMessage(t);
        }
        async init(t) {
            this.options = t;
            try {
                await this.initWithDelegate(t);
            } catch (e) {
                if (console.warn("GPU delegate failed. falling back to CPU.", e), t.delegate !== "CPU") try {
                    const s = {
                        ...t,
                        delegate: "CPU"
                    };
                    await this.initWithDelegate(s), this.post({
                        type: "error",
                        message: "GPU unavailable, using CPU delegate"
                    });
                } catch (s) {
                    const n = s instanceof Error ? s.message : String(s);
                    throw this.post({
                        type: "error",
                        message: n
                    }), s;
                }
                else {
                    const s = e instanceof Error ? e.message : String(e);
                    throw this.post({
                        type: "error",
                        message: s
                    }), e;
                }
            }
            this.startFpsTracking(), this.post({
                type: "ready"
            });
        }
        async initWithDelegate(t) {
            const { FilesetResolver: e } = await import("./chunks/DLVIciDT.js"), s = await e.forVisionTasks(b);
            try {
                const n = await fetch(s.wasmLoaderPath).then((r)=>r.text());
                (0, eval)(n), delete s.wasmLoaderPath;
            } catch  {}
            this.task = await this.initTask(s, t);
        }
        processFrame(t, e) {
            if (!this.task || this.isProcessing || this.isDestroyed) {
                t.close();
                return;
            }
            this.isProcessing = !0;
            try {
                this.workerProfiler.measure(this.nodeId, "draw", ()=>{
                    const s = this.detectFrame(this.task, t, e), n = this.formatResult(s, e);
                    this.sendResult(n), this.frameCount++;
                });
            } catch (s) {
                const n = s instanceof Error ? s.message : String(s);
                this.post({
                    type: "error",
                    message: n
                });
            } finally{
                t.close(), this.isProcessing = !1;
            }
        }
        sendResult(t, e = 0) {
            const s = this.directChannel ? this.directChannel.sendToTargets(t, {
                to: e
            }) : [];
            this.post({
                type: "result",
                data: t,
                excludeTargets: s
            });
        }
        async updateSettings(t) {
            if (this.options) {
                if (this.task) {
                    try {
                        this.task.close?.();
                    } catch  {}
                    this.task = null;
                }
                this.options = {
                    ...this.options,
                    ...t
                }, await this.init(this.options);
            }
        }
        destroy() {
            if (this.isDestroyed = !0, this.stopFpsTracking(), this.workerProfiler.setEnabled(!1), this.task) {
                try {
                    this.task.close?.();
                } catch  {}
                this.task = null;
            }
        }
        startFpsTracking() {
            this.fpsIntervalId = setInterval(()=>{
                this.post({
                    type: "fps",
                    value: this.frameCount
                }), this.frameCount = 0;
            }, 1e3);
        }
        stopFpsTracking() {
            this.fpsIntervalId !== null && (clearInterval(this.fpsIntervalId), this.fpsIntervalId = null);
        }
        setupMessageHandler() {
            self.onmessage = async (t)=>{
                const e = t.data;
                e.type === "init" ? (this.nodeId = e.nodeId, await this.init(e.options)) : e.type === "frame" ? this.processFrame(e.bitmap, e.timestamp) : e.type === "updateSettings" ? await this.updateSettings(e.settings) : e.type === "destroy" ? (this.directChannel?.cleanup(), this.destroy()) : e.type === "profilerEnable" ? this.workerProfiler.setEnabled(e.enabled) : e.type === "setRenderPort" || e.type === "setWorkerPort" ? (this.directChannel || (this.nodeId = e.nodeId, this.directChannel = S({
                    nodeId: e.nodeId,
                    onIncomingMessage: ()=>{},
                    onError: ()=>{}
                })), e.type === "setRenderPort" ? this.directChannel.handleSetRenderPort(t.ports[0]) : this.directChannel.handleSetWorkerPort(t.ports[0], e.targetNodeId, e.sourceNodeId)) : e.type === "updateRenderConnections" ? this.directChannel?.handleUpdateRenderConnections(e.connections) : e.type === "updateWorkerConnections" && this.directChannel?.handleUpdateWorkerConnections(e.connections);
            };
        }
    }
    const w = {
        lite: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task",
        full: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/latest/pose_landmarker_full.task",
        heavy: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/latest/pose_landmarker_heavy.task"
    };
    class U extends R {
        async initTask(t, e) {
            const { PoseLandmarker: s } = await import("./chunks/DLVIciDT.js"), n = e, r = w[n.model ?? "lite"] ?? w.lite;
            return s.createFromOptions(t, {
                baseOptions: {
                    modelAssetPath: r,
                    delegate: n.delegate ?? "GPU"
                },
                runningMode: "VIDEO",
                numPoses: n.numPoses ?? 1
            });
        }
        detectFrame(t, e, s) {
            return t.detectForVideo(e, s);
        }
        formatResult(t, e) {
            return {
                poses: t.landmarks.map((s, n)=>({
                        landmarks: s.map((r)=>({
                                x: r.x,
                                y: r.y,
                                z: r.z,
                                visibility: r.visibility ?? 1
                            })),
                        worldLandmarks: (t.worldLandmarks[n] ?? []).map((r)=>({
                                x: r.x,
                                y: r.y,
                                z: r.z,
                                visibility: r.visibility ?? 1
                            }))
                    })),
                timestamp: e
            };
        }
    }
    new U().setupMessageHandler();
})();
