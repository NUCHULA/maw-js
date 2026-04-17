(async ()=>{
    function S(y) {
        const { nodeId: t, onIncomingMessage: e, onError: s } = y;
        let n = null, a = [];
        const i = new Map;
        let r = [];
        function u(l, g) {
            if (!n || a.length === 0) return [];
            const m = a.filter((f)=>g?.to === void 0 || f.outlet === g.to);
            for (const f of m)n.postMessage({
                fromNodeId: t,
                targetNodeId: f.targetNodeId,
                inlet: f.inlet,
                inletKey: f.inletKey,
                data: l
            });
            return m.map((f)=>f.targetNodeId);
        }
        function c(l, g) {
            if (i.size === 0 || r.length === 0) return [];
            const m = r.filter((p)=>g?.to === void 0 || p.outlet === g.to), f = [];
            for (const p of m){
                const k = i.get(p.targetNodeId);
                k && (k.postMessage({
                    fromNodeId: t,
                    targetNodeId: p.targetNodeId,
                    inlet: p.inlet,
                    inletKey: p.inletKey,
                    data: l
                }), f.push(p.targetNodeId));
            }
            return f;
        }
        function h(l) {
            n = l, l.start();
        }
        function o(l, g, m) {
            g ? (i.set(g, l), l.start()) : m && (i.set(m, l), l.onmessage = (f)=>{
                const { data: p, inlet: k, inletKey: P, fromNodeId: F } = f.data;
                try {
                    const I = e(p, {
                        source: F,
                        inlet: k,
                        inletKey: P
                    });
                    I instanceof Promise && I.catch(s);
                } catch (I) {
                    s(I);
                }
            }, l.start());
        }
        function d(l) {
            a = l;
        }
        function w(l) {
            r = l;
        }
        function C() {
            n?.close(), n = null, a = [];
            for (const l of i.values())l.close();
            i.clear(), r = [];
        }
        return {
            sendToTargets: (l, g)=>[
                    ...u(l, g),
                    ...c(l, g)
                ],
            handleSetRenderPort: h,
            handleSetWorkerPort: o,
            handleUpdateRenderConnections: d,
            handleUpdateWorkerConnections: w,
            cleanup: C
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
            const a = new Float64Array(this.count);
            let i = 0;
            for(let h = 0; h < this.count; h++){
                const o = (this.head - this.count + h + this.capacity) % this.capacity, d = this.samples[o];
                a[h] = d, d > i && (i = d);
            }
            a.sort();
            const r = a[Math.floor(this.count * .95)], u = this.samples[(this.head - 1 + this.capacity) % this.capacity];
            let c = 0;
            if (n > 0) {
                let h = 0;
                for(let o = 0; o < n; o++){
                    const d = (this.head - n + o + this.capacity) % this.capacity;
                    h += this.samples[d];
                }
                c = h / n;
            }
            return {
                avg: c,
                max: i,
                p95: r,
                last: u,
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
            const n = performance.now(), a = `${t}|${e}`, i = ()=>{
                let r = this.collectors.get(a);
                return r || (r = new v, this.collectors.set(a, r)), r;
            };
            try {
                const r = s();
                return r instanceof Promise ? r.finally(()=>{
                    i().record(performance.now() - n);
                }) : i().record(performance.now() - n), r;
            } catch (r) {
                throw i().record(performance.now() - n), r;
            }
        }
        flushSync() {
            const t = performance.now();
            for (const [e, s] of this.collectors){
                const n = s.flush(t);
                if (n.avg === 0 && n.callsPerSecond === 0) continue;
                const a = e.lastIndexOf("|"), i = e.slice(0, a), r = e.slice(a + 1);
                this.onFlush(i, r, n);
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
    const _ = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.33/wasm";
    class U {
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
            const { FilesetResolver: e } = await import("./chunks/DLVIciDT.js"), s = await e.forVisionTasks(_);
            try {
                const n = await fetch(s.wasmLoaderPath).then((a)=>a.text());
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
    const A = {
        general: "https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite",
        landscape: "https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter_landscape/float16/latest/selfie_segmenter_landscape.tflite"
    };
    class D extends U {
        segmentOptions = null;
        async initTask(t, e) {
            const { ImageSegmenter: s } = await import("./chunks/DLVIciDT.js");
            this.segmentOptions = e;
            const n = e;
            return s.createFromOptions(t, {
                baseOptions: {
                    modelAssetPath: A[n.model ?? "general"],
                    delegate: n.delegate ?? "GPU"
                },
                runningMode: "VIDEO",
                outputCategoryMask: n.maskType === "category",
                outputConfidenceMasks: n.maskType === "confidence"
            });
        }
        detectFrame(t, e, s) {
            return t.segmentForVideo(e, s);
        }
        formatResult(t, e) {
            return {
                width: 0,
                height: 0,
                mask: new Uint8Array(0),
                maskType: "category",
                timestamp: 0
            };
        }
        processFrame(t, e) {
            if (!this.task || this.segmentOptions === null) {
                t.close();
                return;
            }
            const s = t.width, n = t.height;
            try {
                let a = null, i = !1, r = null, u = null;
                if (this.workerProfiler.measure(this.nodeId, "draw", ()=>{
                    if (u = this.detectFrame(this.task, t, e), i = this.segmentOptions.maskType === "category", r = i ? u.categoryMask?.getAsUint8Array() ?? null : u.confidenceMasks?.[0]?.getAsFloat32Array() ?? null, !r) return;
                    a = new ImageData(s, n);
                    const c = a.data;
                    if (i) {
                        const h = r;
                        for(let o = 0; o < h.length; o++){
                            const d = h[o] > 0 ? 255 : 0;
                            c[o * 4] = d, c[o * 4 + 1] = d, c[o * 4 + 2] = d, c[o * 4 + 3] = 255;
                        }
                    } else {
                        const h = r;
                        for(let o = 0; o < h.length; o++){
                            const d = Math.round(h[o] * 255);
                            c[o * 4] = d, c[o * 4 + 1] = d, c[o * 4 + 2] = d, c[o * 4 + 3] = 255;
                        }
                    }
                }), !a || !r) {
                    t.close();
                    return;
                }
                createImageBitmap(a).then((c)=>{
                    const h = {
                        type: "segmentBitmap",
                        bitmap: c
                    };
                    if (this.segmentOptions?.outputMessage) {
                        const o = i ? new Uint8Array(r) : new Float32Array(r);
                        h.messageData = {
                            width: s,
                            height: n,
                            mask: o,
                            maskType: this.segmentOptions.maskType,
                            timestamp: e
                        };
                    }
                    self.postMessage(h, {
                        transfer: [
                            c
                        ]
                    });
                }).catch((c)=>{
                    const h = c instanceof Error ? c.message : String(c);
                    self.postMessage({
                        type: "error",
                        message: `createImageBitmap failed: ${h}`
                    });
                }), u.close?.(), t.close();
            } catch (a) {
                t.close();
                const i = a instanceof Error ? a.message : String(a);
                self.postMessage({
                    type: "error",
                    message: i
                });
            }
        }
    }
    new D().setupMessageHandler();
})();
