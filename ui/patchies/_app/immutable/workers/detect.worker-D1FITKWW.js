(async ()=>{
    function S(g) {
        const { nodeId: t, onIncomingMessage: e, onError: s } = g;
        let n = null, r = [];
        const a = new Map;
        let i = [];
        function w(o, c) {
            if (!n || r.length === 0) return [];
            const p = r.filter((l)=>c?.to === void 0 || l.outlet === c.to);
            for (const l of p)n.postMessage({
                fromNodeId: t,
                targetNodeId: l.targetNodeId,
                inlet: l.inlet,
                inletKey: l.inletKey,
                data: o
            });
            return p.map((l)=>l.targetNodeId);
        }
        function m(o, c) {
            if (a.size === 0 || i.length === 0) return [];
            const p = i.filter((d)=>c?.to === void 0 || d.outlet === c.to), l = [];
            for (const d of p){
                const y = a.get(d.targetNodeId);
                y && (y.postMessage({
                    fromNodeId: t,
                    targetNodeId: d.targetNodeId,
                    inlet: d.inlet,
                    inletKey: d.inletKey,
                    data: o
                }), l.push(d.targetNodeId));
            }
            return l;
        }
        function h(o) {
            n = o, o.start();
        }
        function u(o, c, p) {
            c ? (a.set(c, o), o.start()) : p && (a.set(p, o), o.onmessage = (l)=>{
                const { data: d, inlet: y, inletKey: C, fromNodeId: F } = l.data;
                try {
                    const I = e(d, {
                        source: F,
                        inlet: y,
                        inletKey: C
                    });
                    I instanceof Promise && I.catch(s);
                } catch (I) {
                    s(I);
                }
            }, o.start());
        }
        function f(o) {
            r = o;
        }
        function k(o) {
            i = o;
        }
        function P() {
            n?.close(), n = null, r = [];
            for (const o of a.values())o.close();
            a.clear(), i = [];
        }
        return {
            sendToTargets: (o, c)=>[
                    ...w(o, c),
                    ...m(o, c)
                ],
            handleSetRenderPort: h,
            handleSetWorkerPort: u,
            handleUpdateRenderConnections: f,
            handleUpdateWorkerConnections: k,
            cleanup: P
        };
    }
    const T = 1200;
    class v {
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
            let a = 0;
            for(let h = 0; h < this.count; h++){
                const u = (this.head - this.count + h + this.capacity) % this.capacity, f = this.samples[u];
                r[h] = f, f > a && (a = f);
            }
            r.sort();
            const i = r[Math.floor(this.count * .95)], w = this.samples[(this.head - 1 + this.capacity) % this.capacity];
            let m = 0;
            if (n > 0) {
                let h = 0;
                for(let u = 0; u < n; u++){
                    const f = (this.head - n + u + this.capacity) % this.capacity;
                    h += this.samples[f];
                }
                m = h / n;
            }
            return {
                avg: m,
                max: a,
                p95: i,
                last: w,
                callsPerSecond: s
            };
        }
        reset() {
            this.head = 0, this.count = 0, this.messagesSinceFlush = 0, this.lastFlushTime = performance.now();
        }
    }
    const b = 500;
    class M {
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
            const n = performance.now(), r = `${t}|${e}`, a = ()=>{
                let i = this.collectors.get(r);
                return i || (i = new v, this.collectors.set(r, i)), i;
            };
            try {
                const i = s();
                return i instanceof Promise ? i.finally(()=>{
                    a().record(performance.now() - n);
                }) : a().record(performance.now() - n), i;
            } catch (i) {
                throw a().record(performance.now() - n), i;
            }
        }
        flushSync() {
            const t = performance.now();
            for (const [e, s] of this.collectors){
                const n = s.flush(t);
                if (n.avg === 0 && n.callsPerSecond === 0) continue;
                const r = e.lastIndexOf("|"), a = e.slice(0, r), i = e.slice(r + 1);
                this.onFlush(a, i, n);
            }
        }
        startFlush() {
            this.flushInterval === null && (this.flushInterval = setInterval(()=>this.flushSync(), b));
        }
        stopFlush() {
            this.flushInterval !== null && (clearInterval(this.flushInterval), this.flushInterval = null);
            try {
                this.flushSync();
            } catch  {}
            this.collectors.clear();
        }
    }
    const R = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.33/wasm";
    class E {
        task = null;
        options = null;
        isProcessing = !1;
        isDestroyed = !1;
        frameCount = 0;
        fpsIntervalId = null;
        workerProfiler = new M((t, e, s)=>{
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
            const { FilesetResolver: e } = await import("./chunks/DLVIciDT.js"), s = await e.forVisionTasks(R);
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
    const x = "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/latest/efficientdet_lite0.tflite";
    class D extends E {
        async initTask(t, e) {
            const { ObjectDetector: s } = await import("./chunks/DLVIciDT.js"), n = e;
            return s.createFromOptions(t, {
                baseOptions: {
                    modelAssetPath: x,
                    delegate: n.delegate ?? "GPU"
                },
                runningMode: "VIDEO",
                maxResults: n.maxResults ?? 5,
                scoreThreshold: n.scoreThreshold ?? .5
            });
        }
        detectFrame(t, e, s) {
            return t.detectForVideo(e, s);
        }
        formatResult(t, e) {
            return {
                detections: t.detections.map((s)=>({
                        label: s.categories[0]?.categoryName ?? "unknown",
                        score: s.categories[0]?.score ?? 0,
                        boundingBox: {
                            originX: s.boundingBox?.originX ?? 0,
                            originY: s.boundingBox?.originY ?? 0,
                            width: s.boundingBox?.width ?? 0,
                            height: s.boundingBox?.height ?? 0
                        }
                    })),
                timestamp: e
            };
        }
    }
    new D().setupMessageHandler();
})();
