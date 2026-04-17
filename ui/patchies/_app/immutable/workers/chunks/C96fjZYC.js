import { d as C, e as f, P as w, M as k, f as S, J as M, A as F, p as g, h as y, z as V, i as R, V as v, j as N, S as T, g as B, __tla as __tla_0 } from "../renderWorker-WghzlIFB.js";
import { D as d } from "./CW5H0fjD.js";
let c;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    class q {
        abortControllers = new Map;
        requestsByNode = new Map;
        async handle(e, s, a, t, r, i) {
            const o = new AbortController;
            this.abortControllers.set(a, o), this.requestsByNode.has(e) || this.requestsByNode.set(e, new Set), this.requestsByNode.get(e).add(a);
            try {
                const { getTextProvider: n } = await import("./Bq90S1dE.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }), l = n(i), u = [];
                if (r) {
                    const p = await C(r);
                    if (p) {
                        const m = f({
                            bitmap: p,
                            format: "image/jpeg",
                            quality: .7
                        });
                        u.push({
                            mimeType: "image/jpeg",
                            data: m
                        });
                    }
                }
                const b = await l.generateText([
                    {
                        role: "user",
                        content: t,
                        images: u
                    }
                ], {
                    signal: o.signal
                });
                s.postMessage({
                    type: "llmConfig",
                    nodeId: e,
                    requestId: a,
                    text: b
                });
            } catch (n) {
                const l = n instanceof Error ? n.message : String(n);
                s.postMessage({
                    type: "llmConfig",
                    nodeId: e,
                    requestId: a,
                    error: l
                });
            } finally{
                this.abortControllers.delete(a), this.requestsByNode.get(e)?.delete(a);
            }
        }
        abortNode(e) {
            const s = this.requestsByNode.get(e);
            if (s) {
                for (const a of s)this.abortControllers.get(a)?.abort(), this.abortControllers.delete(a);
                this.requestsByNode.delete(e);
            }
        }
    }
    function E(h) {
        return new Worker("" + new URL("../jsWorker-CzdFgAQU.js", import.meta.url).href, {
            type: "module",
            name: h?.name
        });
    }
    c = class {
        static instance = null;
        eventBus = w.getInstance();
        messageSystem = k.getInstance();
        channelRegistry = S.getInstance();
        jsRunner = M.getInstance();
        audioAnalysis = F.getInstance();
        workers = new Map;
        settingsCallbacks = new Map;
        llmProxy = new q;
        workerChannelSubscriptions = new Map;
        videoStates = new Map;
        currentEdges = [];
        static VIDEO_FRAME_INTERVAL_MS = 1e3 / 30;
        globalVideoLoopId = null;
        lastGlobalFrameTime = 0;
        unsubscribeProfilerEnable = null;
        constructor(){
            this.setupFFTForwarding(), this.setupPatchIdForwarding(), this.unsubscribeProfilerEnable = g.onEnableChange((e)=>{
                for (const [s, a] of this.workers)a.worker.postMessage({
                    type: "profilerEnable",
                    nodeId: s,
                    enabled: e
                });
            });
        }
        setupFFTForwarding() {
            const e = this.audioAnalysis.onFFTDataReady;
            this.audioAnalysis.onFFTDataReady = (s)=>{
                e && e(s);
                const a = this.workers.get(s.nodeId);
                a && a.worker.postMessage({
                    type: "setFFTData",
                    nodeId: s.nodeId,
                    analysisType: s.analysisType,
                    format: s.format,
                    array: s.array
                });
            };
        }
        setupPatchIdForwarding() {
            y.subscribe((e)=>{
                for (const [s, a] of this.workers)a.worker.postMessage({
                    type: "setPatchId",
                    nodeId: s,
                    patchId: e
                });
            });
        }
        syncModulesToWorker(e, s) {
            for (const [a, t] of this.jsRunner.modules)s.postMessage({
                type: "updateModule",
                nodeId: e,
                moduleName: a,
                code: t
            });
        }
        handleWorkerMessage(e, s, a) {
            V(a).with({
                type: "consoleOutput"
            }, (t)=>{
                this.eventBus.dispatch({
                    type: "consoleOutput",
                    nodeId: e,
                    messageType: t.level === "info" ? "log" : t.level,
                    timestamp: Date.now(),
                    args: t.args,
                    lineErrors: t.lineErrors
                });
            }).with({
                type: "sendMessage"
            }, (t)=>{
                this.messageSystem.sendMessage(e, t.data, t.options ?? {}), this.eventBus.dispatch({
                    type: "workerSendMessage",
                    nodeId: e,
                    data: t.data,
                    options: t.options
                });
            }).with({
                type: "setPortCount"
            }, (t)=>{
                this.eventBus.dispatch({
                    type: "nodePortCountUpdate",
                    portType: "message",
                    nodeId: e,
                    inletCount: t.inletCount,
                    outletCount: t.outletCount
                });
            }).with({
                type: "setTitle"
            }, (t)=>{
                this.eventBus.dispatch({
                    type: "nodeTitleUpdate",
                    nodeId: e,
                    title: t.title
                });
            }).with({
                type: "setPrimaryButton"
            }, (t)=>{
                const r = t.primaryButton === "run" ? "code" : t.primaryButton;
                this.eventBus.dispatch({
                    type: "nodePrimaryButtonUpdate",
                    nodeId: e,
                    primaryButton: r
                });
            }).with({
                type: "setRunOnMount"
            }, (t)=>{
                this.eventBus.dispatch({
                    type: "nodeRunOnMountUpdate",
                    nodeId: e,
                    runOnMount: t.runOnMount
                });
            }).with({
                type: "callbackRegistered"
            }, (t)=>{
                this.eventBus.dispatch({
                    type: "workerCallbackRegistered",
                    nodeId: e,
                    callbackType: t.callbackType
                });
            }).with({
                type: "flash"
            }, ()=>{
                this.eventBus.dispatch({
                    type: "workerFlash",
                    nodeId: e
                });
            }).with({
                type: "fftEnabled"
            }, (t)=>{
                t.enabled ? this.audioAnalysis.enableFFT(e) : this.audioAnalysis.disableFFT(e);
            }).with({
                type: "registerFFTRequest"
            }, (t)=>{
                this.audioAnalysis.registerFFTRequest(e, t.analysisType, t.format);
            }).with({
                type: "resolveVfsUrl"
            }, (t)=>{
                this.handleVfsUrlResolution(e, s, t.requestId, t.path);
            }).with({
                type: "llmRequest"
            }, (t)=>{
                this.llmProxy.handle(e, s, t.requestId, t.prompt, t.imageNodeId, t.model);
            }).with({
                type: "setVideoCount"
            }, (t)=>{
                this.handleSetVideoCount(e, t.inletCount, t.outletCount);
            }).with({
                type: "videoFrameCallbackRegistered"
            }, (t)=>{
                this.handleVideoFrameCallbackRegistered(e, t.resolution);
            }).with({
                type: "requestVideoFrames"
            }, (t)=>{
                this.handleRequestVideoFrames(e, t.resolution);
            }).with({
                type: "settingsDefine"
            }, (t)=>{
                this.settingsCallbacks.get(e)?.onDefine(t.requestId, t.schema);
            }).with({
                type: "settingsSet"
            }, (t)=>{
                this.settingsCallbacks.get(e)?.onSet(t.key, t.value);
            }).with({
                type: "settingsClear"
            }, ()=>{
                this.settingsCallbacks.get(e)?.onClear();
            }).with({
                type: "sendToChannel"
            }, (t)=>{
                this.channelRegistry.broadcast(t.channel, t.data, e);
            }).with({
                type: "requestSuperSonicChannel"
            }, (t)=>{
                this.handleSuperSonicChannelRequest(e, s, t.requestId);
            }).with({
                type: "subscribeChannel"
            }, (t)=>{
                this.handleSubscribeChannel(e, s, t.channel);
            }).with({
                type: "unsubscribeChannel"
            }, (t)=>{
                this.handleUnsubscribeChannel(e, t.channel);
            }).with({
                type: "executionComplete"
            }, (t)=>{}).with({
                type: "profilerStats"
            }, (t)=>{}).otherwise(()=>{});
        }
        async handleVfsUrlResolution(e, s, a, t) {
            try {
                if (!R(t)) {
                    s.postMessage({
                        type: "vfsUrlResolved",
                        nodeId: e,
                        requestId: a,
                        url: t
                    });
                    return;
                }
                const i = await v.getInstance().resolve(t), o = URL.createObjectURL(i);
                s.postMessage({
                    type: "vfsUrlResolved",
                    nodeId: e,
                    requestId: a,
                    url: o
                });
            } catch (r) {
                const i = r instanceof Error ? r.message : String(r);
                s.postMessage({
                    type: "vfsUrlResolved",
                    nodeId: e,
                    requestId: a,
                    error: i
                });
            }
        }
        handleSetVideoCount(e, s, a) {
            let t = this.videoStates.get(e);
            t || (t = {
                inletCount: 0,
                outletCount: 0,
                sourceNodeIds: [],
                hasVideoCallback: !1
            }, this.videoStates.set(e, t)), t.inletCount = s, t.outletCount = a, this.updateVideoConnectionsForNode(e, t, this.currentEdges), this.eventBus.dispatch({
                type: "nodePortCountUpdate",
                portType: "video",
                nodeId: e,
                inletCount: s,
                outletCount: a
            });
        }
        handleVideoFrameCallbackRegistered(e, s) {
            let a = this.videoStates.get(e);
            a || (a = {
                inletCount: 0,
                outletCount: 0,
                sourceNodeIds: [],
                hasVideoCallback: !1
            }, this.videoStates.set(e, a)), a.hasVideoCallback = !0, a.resolution = s, this.startGlobalVideoLoop(), this.eventBus.dispatch({
                type: "workerCallbackRegistered",
                nodeId: e,
                callbackType: "interval"
            });
        }
        handleRequestVideoFrames(e, s) {
            const a = this.videoStates.get(e);
            !a || a.sourceNodeIds.length === 0 || this.eventBus.dispatch({
                type: "requestWorkerVideoFrames",
                nodeId: e,
                sourceNodeIds: a.sourceNodeIds,
                resolution: s
            });
        }
        handleSubscribeChannel(e, s, a) {
            this.workerChannelSubscriptions.has(e) || this.workerChannelSubscriptions.set(e, new Set), this.workerChannelSubscriptions.get(e).add(a), this.channelRegistry.subscribe(a, e, (t, r)=>{
                s.postMessage({
                    type: "channelMessage",
                    nodeId: e,
                    channel: a,
                    data: t,
                    sourceNodeId: r
                });
            });
        }
        cleanupWorkerChannelSubscriptions(e) {
            const s = this.workerChannelSubscriptions.get(e);
            if (s) {
                for (const a of s)this.channelRegistry.unsubscribe(a, e);
                this.workerChannelSubscriptions.delete(e);
            }
        }
        handleUnsubscribeChannel(e, s) {
            this.channelRegistry.unsubscribe(s, e);
            const a = this.workerChannelSubscriptions.get(e);
            a && a.delete(s);
        }
        async handleSuperSonicChannelRequest(e, s, a) {
            try {
                const t = N.getInstance().getAudioContext(), { sonic: r } = await T.getInstance().ensureSuperSonic(t), i = r.createOscChannel();
                s.postMessage({
                    type: "superSonicChannelReady",
                    nodeId: e,
                    requestId: a,
                    channel: i.transferable
                }, i.transferList);
            } catch (t) {
                const r = t instanceof Error ? t.message : String(t);
                s.postMessage({
                    type: "superSonicChannelReady",
                    nodeId: e,
                    requestId: a,
                    error: r
                });
            }
        }
        startGlobalVideoLoop() {
            if (this.globalVideoLoopId !== null) return;
            const e = ()=>{
                const s = this.getNodesWithVideoCallbacks();
                if (s.length === 0) {
                    this.globalVideoLoopId = null;
                    return;
                }
                const a = performance.now();
                a - this.lastGlobalFrameTime >= c.VIDEO_FRAME_INTERVAL_MS && (this.requestBatchedVideoFrames(s), this.lastGlobalFrameTime = a), this.globalVideoLoopId = requestAnimationFrame(e);
            };
            this.globalVideoLoopId = requestAnimationFrame(e);
        }
        getNodesWithVideoCallbacks() {
            const e = [];
            for (const [s, a] of this.videoStates)a.hasVideoCallback && a.sourceNodeIds.some((t)=>t !== null) && e.push(s);
            return e;
        }
        requestBatchedVideoFrames(e) {
            const s = [];
            for (const a of e){
                const t = this.videoStates.get(a);
                t && t.sourceNodeIds.length > 0 && s.push({
                    targetNodeId: a,
                    sourceNodeIds: t.sourceNodeIds,
                    resolution: t.resolution
                });
            }
            s.length !== 0 && this.eventBus.dispatch({
                type: "requestWorkerVideoFramesBatch",
                requests: s
            });
        }
        deliverVideoFrames(e, s, a) {
            const t = this.workers.get(e);
            t && t.worker.postMessage({
                type: "videoFramesReady",
                nodeId: e,
                frames: s,
                timestamp: a
            }, {
                transfer: s.filter((r)=>r !== null)
            });
        }
        updateVideoConnections(e) {
            this.currentEdges = e;
            for (const [s, a] of this.videoStates)this.updateVideoConnectionsForNode(s, a, e);
            this.getNodesWithVideoCallbacks().length > 0 && this.startGlobalVideoLoop();
        }
        updateVideoConnectionsForNode(e, s, a) {
            const t = new Array(s.inletCount).fill(null);
            for(let r = 0; r < s.inletCount; r++){
                const i = a.find((o)=>o.target === e && o.targetHandle === `video-in-${r}`);
                t[r] = i?.source ?? null;
            }
            s.sourceNodeIds = t;
        }
        async create(e) {
            if (this.workers.has(e)) return;
            const s = new E;
            s.postMessage({
                type: "setPatchId",
                nodeId: e,
                patchId: B(y)
            }), s.postMessage({
                type: "profilerEnable",
                nodeId: e,
                enabled: g.enabled
            }), s.addEventListener("message", ({ data: r })=>{
                this.handleWorkerMessage(e, s, r);
            });
            const a = (r, i)=>{
                s.postMessage({
                    type: "incomingMessage",
                    nodeId: e,
                    data: r,
                    meta: i
                });
            };
            this.messageSystem.registerNode(e).addCallback(a), this.workers.set(e, {
                worker: s,
                messageCallback: a
            }), this.syncModulesToWorker(e, s), d.getInstance().registerWorker(e, s);
        }
        async executeCode(e, s) {
            const a = this.workers.get(e);
            if (!a) throw new Error(`No worker for node ${e}`);
            this.syncModulesToWorker(e, a.worker);
            const t = await this.jsRunner.preprocessCode(s, {
                nodeId: e,
                setLibraryName: (r)=>{
                    r && this.eventBus.dispatch({
                        type: "consoleOutput",
                        nodeId: e,
                        messageType: "warn",
                        timestamp: Date.now(),
                        args: [
                            "@lib modules are not supported in worker nodes. Use a regular js node for shared libraries."
                        ]
                    });
                }
            });
            t !== null && a.worker.postMessage({
                type: "executeCode",
                nodeId: e,
                code: s,
                processedCode: t
            });
        }
        cleanup(e) {
            const s = this.workers.get(e);
            s && s.worker.postMessage({
                type: "cleanup",
                nodeId: e
            });
        }
        destroy(e) {
            const s = this.workers.get(e);
            if (!s) return;
            this.messageSystem.registerNode(e).removeCallback(s.messageCallback), s.worker.postMessage({
                type: "destroy",
                nodeId: e
            }), s.worker.terminate(), this.workers.delete(e), this.llmProxy.abortNode(e), this.videoStates.delete(e), this.getNodesWithVideoCallbacks().length === 0 && this.globalVideoLoopId !== null && (cancelAnimationFrame(this.globalVideoLoopId), this.globalVideoLoopId = null), this.messageSystem.unregisterNode(e), this.cleanupWorkerChannelSubscriptions(e), d.getInstance().unregisterWorker(e), this.settingsCallbacks.delete(e);
        }
        registerSettingsCallbacks(e, s) {
            this.settingsCallbacks.set(e, s);
        }
        sendSettingsValues(e, s, a) {
            const t = this.workers.get(e);
            t && t.worker.postMessage({
                type: "settingsValuesInit",
                nodeId: e,
                requestId: s,
                values: a
            });
        }
        sendSettingsValueChanged(e, s, a) {
            const t = this.workers.get(e);
            t && t.worker.postMessage({
                type: "settingsValueChanged",
                nodeId: e,
                key: s,
                value: a
            });
        }
        has(e) {
            return this.workers.has(e);
        }
        static getInstance() {
            return this.instance || (this.instance = new c), this.instance;
        }
    };
});
export { c as WorkerNodeSystem, __tla };
