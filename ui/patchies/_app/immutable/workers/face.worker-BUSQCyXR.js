(async ()=>{
    function T(g) {
        const { nodeId: t, onIncomingMessage: e, onError: s } = g;
        let n = null, r = [];
        const a = new Map;
        let i = [];
        function k(o, c) {
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
        function f(o, c, p) {
            c ? (a.set(c, o), o.start()) : p && (a.set(p, o), o.onmessage = (l)=>{
                const { data: d, inlet: y, inletKey: P, fromNodeId: C } = l.data;
                try {
                    const I = e(d, {
                        source: C,
                        inlet: y,
                        inletKey: P
                    });
                    I instanceof Promise && I.catch(s);
                } catch (I) {
                    s(I);
                }
            }, o.start());
        }
        function u(o) {
            r = o;
        }
        function w(o) {
            i = o;
        }
        function F() {
            n?.close(), n = null, r = [];
            for (const o of a.values())o.close();
            a.clear(), i = [];
        }
        return {
            sendToTargets: (o, c)=>[
                    ...k(o, c),
                    ...m(o, c)
                ],
            handleSetRenderPort: h,
            handleSetWorkerPort: f,
            handleUpdateRenderConnections: u,
            handleUpdateWorkerConnections: w,
            cleanup: F
        };
    }
    const S = 1200;
    class v {
        samples;
        capacity;
        head = 0;
        count = 0;
        messagesSinceFlush = 0;
        lastFlushTime = performance.now();
        constructor(t = S){
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
                const f = (this.head - this.count + h + this.capacity) % this.capacity, u = this.samples[f];
                r[h] = u, u > a && (a = u);
            }
            r.sort();
            const i = r[Math.floor(this.count * .95)], k = this.samples[(this.head - 1 + this.capacity) % this.capacity];
            let m = 0;
            if (n > 0) {
                let h = 0;
                for(let f = 0; f < n; f++){
                    const u = (this.head - n + f + this.capacity) % this.capacity;
                    h += this.samples[u];
                }
                m = h / n;
            }
            return {
                avg: m,
                max: a,
                p95: i,
                last: k,
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
    const _ = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.33/wasm";
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
            const { FilesetResolver: e } = await import("./chunks/DLVIciDT.js"), s = await e.forVisionTasks(_);
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
                e.type === "init" ? (this.nodeId = e.nodeId, await this.init(e.options)) : e.type === "frame" ? this.processFrame(e.bitmap, e.timestamp) : e.type === "updateSettings" ? await this.updateSettings(e.settings) : e.type === "destroy" ? (this.directChannel?.cleanup(), this.destroy()) : e.type === "profilerEnable" ? this.workerProfiler.setEnabled(e.enabled) : e.type === "setRenderPort" || e.type === "setWorkerPort" ? (this.directChannel || (this.nodeId = e.nodeId, this.directChannel = T({
                    nodeId: e.nodeId,
                    onIncomingMessage: ()=>{},
                    onError: ()=>{}
                })), e.type === "setRenderPort" ? this.directChannel.handleSetRenderPort(t.ports[0]) : this.directChannel.handleSetWorkerPort(t.ports[0], e.targetNodeId, e.sourceNodeId)) : e.type === "updateRenderConnections" ? this.directChannel?.handleUpdateRenderConnections(e.connections) : e.type === "updateWorkerConnections" && this.directChannel?.handleUpdateWorkerConnections(e.connections);
            };
        }
    }
    const x = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task", D = "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite";
    class R extends E {
        faceOptions;
        async initTask(t, e) {
            const s = e;
            if (this.faceOptions = s, s.mode === "detect") {
                const { FaceDetector: n } = await import("./chunks/DLVIciDT.js");
                return n.createFromOptions(t, {
                    baseOptions: {
                        modelAssetPath: D,
                        delegate: s.delegate ?? "GPU"
                    },
                    runningMode: "VIDEO"
                });
            } else {
                const { FaceLandmarker: n } = await import("./chunks/DLVIciDT.js");
                return n.createFromOptions(t, {
                    baseOptions: {
                        modelAssetPath: x,
                        delegate: s.delegate ?? "GPU"
                    },
                    runningMode: "VIDEO",
                    numFaces: s.numFaces ?? 1,
                    outputFaceBlendshapes: s.blendshapes ?? !1,
                    outputFacialTransformationMatrixes: !1
                });
            }
        }
        detectFrame(t, e, s) {
            return t.detectForVideo(e, s);
        }
        formatResult(t, e) {
            return this.faceOptions?.mode === "detect" ? {
                faces: t.detections.map((s)=>({
                        boundingBox: s.boundingBox ? {
                            originX: s.boundingBox.originX,
                            originY: s.boundingBox.originY,
                            width: s.boundingBox.width,
                            height: s.boundingBox.height
                        } : void 0,
                        score: s.categories[0]?.score ?? 0,
                        keypoints: s.keypoints?.map((n)=>({
                                x: n.x,
                                y: n.y,
                                label: n.label
                            }))
                    })),
                timestamp: e
            } : {
                faces: t.faceLandmarks.map((s, n)=>{
                    const r = {
                        landmarks: s.map((a)=>({
                                x: a.x,
                                y: a.y,
                                z: a.z
                            }))
                    };
                    return t.faceBlendshapes?.[n] && (r.blendshapes = t.faceBlendshapes[n].categories.map((a)=>({
                            categoryName: a.categoryName,
                            score: a.score
                        }))), r;
                }),
                timestamp: e
            };
        }
    }
    new R().setupMessageHandler();
})();
