import { g as C, z as A, c as K, __tla as __tla_0 } from "../renderWorker-WghzlIFB.js";
let N, J, $;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    N = class {
        constructor(d, a){
            this.apiKey = d, this.model = a;
        }
        id = "gemini";
        name = "Google Gemini";
        async generateText(d, a = {}) {
            const { signal: y, onThinking: k, onToken: m, systemPrompt: b, temperature: w, topK: p } = a;
            if (y?.aborted) throw new Error("Request cancelled");
            const { GoogleGenAI: h } = await import("./B03ImW0C.js"), g = new h({
                apiKey: this.apiKey
            }), f = d.map((s)=>({
                    role: s.role,
                    parts: [
                        ...(s.images ?? []).map((o)=>({
                                inlineData: {
                                    mimeType: o.mimeType,
                                    data: o.data
                                }
                            })),
                        {
                            text: s.content
                        }
                    ]
                })), i = {
                thinkingConfig: {
                    includeThoughts: !0
                },
                abortSignal: y
            };
            b && (i.systemInstruction = b), w !== void 0 && (i.temperature = w), p !== void 0 && (i.topK = p);
            const x = await g.models.generateContentStream({
                model: this.model,
                contents: f,
                config: i
            });
            let T = "";
            for await (const s of x){
                if (y?.aborted) throw new Error("Request cancelled");
                for (const o of s.candidates?.[0]?.content?.parts ?? [])o.thought && o.text ? k?.(o.text) : o.text && (T += o.text, m?.(o.text));
            }
            return T;
        }
        async streamTurn(d, a) {
            const { systemPrompt: y, tools: k = [], signal: m, onChunk: b, onThinking: w } = a;
            if (m?.aborted) throw new Error("Request cancelled");
            const { GoogleGenAI: p } = await import("./B03ImW0C.js"), h = new p({
                apiKey: this.apiKey
            }), g = d.map((t)=>{
                if (t.role === "model" && t._raw) return {
                    role: "model",
                    parts: t._raw.parts
                };
                if (t.role === "model" && t.toolCalls?.length) {
                    const e = [];
                    t.content && e.push({
                        text: t.content
                    });
                    for (const c of t.toolCalls){
                        let r;
                        try {
                            r = typeof c.args == "string" ? JSON.parse(c.args) : c.args;
                        } catch  {
                            r = c.args;
                        }
                        e.push({
                            functionCall: {
                                name: c.name,
                                args: r
                            }
                        });
                    }
                    return {
                        role: "model",
                        parts: e
                    };
                }
                return t.role === "user" && t.toolResults?.length ? {
                    role: "user",
                    parts: t.toolResults.map((e)=>({
                            functionResponse: {
                                name: e.name,
                                response: e.result !== null && typeof e.result == "object" ? e.result : {
                                    value: e.result
                                }
                            }
                        }))
                } : {
                    role: t.role,
                    parts: [
                        ...(t.images ?? []).map((e)=>({
                                inlineData: {
                                    mimeType: e.mimeType,
                                    data: e.data
                                }
                            })),
                        ...(t.youtubeUrls ?? []).map((e)=>({
                                fileData: {
                                    fileUri: e
                                }
                            })),
                        {
                            text: t.content
                        }
                    ]
                };
            }), f = {
                thinkingConfig: {
                    includeThoughts: !0
                },
                abortSignal: m
            };
            y && (f.systemInstruction = y), k.length > 0 && (f.tools = [
                {
                    functionDeclarations: k.map((t)=>({
                            name: t.name,
                            description: t.description,
                            parameters: t.parametersJsonSchema
                        }))
                }
            ]);
            const i = await h.models.generateContentStream({
                model: this.model,
                contents: g,
                config: f
            }), x = [];
            let T = "";
            const s = m ? new Promise((t, e)=>{
                m.aborted && e(new Error("Request cancelled")), m.addEventListener("abort", ()=>e(new Error("Request cancelled")), {
                    once: !0
                });
            }) : null, o = async ()=>{
                for await (const t of i){
                    if (m?.aborted) throw new Error("Request cancelled");
                    for (const e of t.candidates?.[0]?.content?.parts ?? [])e.thought ? (e.text && w && w(e.text), x.push(e)) : e.functionCall ? x.push(e) : e.text && (T += e.text, b?.(e.text), x.push({
                        text: e.text
                    }));
                }
            };
            await (s ? Promise.race([
                o(),
                s
            ]) : o());
            const n = x.filter((t)=>"functionCall" in t).map((t)=>{
                const e = t.functionCall;
                return {
                    id: crypto.randomUUID(),
                    name: e.name ?? "",
                    args: e.args ?? {}
                };
            });
            return {
                text: T,
                toolCalls: n,
                _rawModelTurn: {
                    parts: x
                }
            };
        }
    };
    const v = "https://openrouter.ai/api/v1/chat/completions", D = {
        "Content-Type": "application/json",
        "HTTP-Referer": "https://patchies.app",
        "X-Title": "Patchies"
    };
    J = class {
        constructor(d, a){
            this.apiKey = d, this.model = a;
        }
        id = "openrouter";
        name = "OpenRouter";
        get authHeaders() {
            return {
                ...D,
                Authorization: `Bearer ${this.apiKey}`
            };
        }
        async generateText(d, a = {}) {
            const { signal: y, onThinking: k, onToken: m, systemPrompt: b, temperature: w, topK: p } = a, h = [];
            b && h.push({
                role: "system",
                content: b
            });
            for (const o of d)o.images?.length ? h.push({
                role: "user",
                content: [
                    ...o.images.map((n)=>({
                            type: "image_url",
                            image_url: {
                                url: `data:${n.mimeType};base64,${n.data}`
                            }
                        })),
                    {
                        type: "text",
                        text: o.content
                    }
                ]
            }) : o.role === "model" ? h.push({
                role: "assistant",
                content: o.content
            }) : h.push({
                role: "user",
                content: o.content
            });
            const g = {
                model: this.model,
                messages: h,
                stream: !0,
                reasoning: {}
            };
            w !== void 0 && (g.temperature = w), p !== void 0 && (g.top_k = p);
            const f = await fetch(v, {
                method: "POST",
                headers: this.authHeaders,
                body: JSON.stringify(g),
                signal: y
            });
            if (!f.ok) {
                const o = await f.text();
                throw new Error(`OpenRouter error ${f.status}: ${o}`);
            }
            let i = "";
            const x = f.body.getReader(), T = new TextDecoder;
            let s = "";
            for(;;){
                const { done: o, value: n } = await x.read();
                if (o) break;
                s += T.decode(n, {
                    stream: !0
                });
                const t = s.split(`
`);
                s = t.pop() ?? "";
                for (const e of t){
                    const c = e.trim();
                    if (!c.startsWith("data: ")) continue;
                    const r = c.slice(6);
                    if (r === "[DONE]") break;
                    try {
                        const l = JSON.parse(r).choices?.[0]?.delta;
                        if (!l) continue;
                        const u = l.reasoning ?? l.reasoning_content;
                        u && k?.(u), l.content && (i += l.content, m?.(l.content));
                    } catch  {}
                }
            }
            s += T.decode();
            for (const o of s.split(`
`)){
                const n = o.trim();
                if (!n.startsWith("data: ")) continue;
                const t = n.slice(6);
                if (t !== "[DONE]") try {
                    const c = JSON.parse(t).choices?.[0]?.delta;
                    if (!c) continue;
                    const r = c.reasoning ?? c.reasoning_content;
                    r && k?.(r), c.content && (i += c.content, m?.(c.content));
                } catch  {}
            }
            return i;
        }
        async streamTurn(d, a) {
            const { systemPrompt: y, tools: k = [], signal: m, onChunk: b, onThinking: w } = a, p = [];
            y && p.push({
                role: "system",
                content: y
            });
            for (const n of d)if (n.role === "model") p.push({
                role: "assistant",
                content: n.content || null,
                ...n.toolCalls?.length ? {
                    tool_calls: n.toolCalls.map((t)=>({
                            id: t.id,
                            type: "function",
                            function: {
                                name: t.name,
                                arguments: JSON.stringify(t.args)
                            }
                        }))
                } : {}
            });
            else if (n.toolResults?.length) for (const t of n.toolResults)p.push({
                role: "tool",
                content: typeof t.result == "string" ? t.result : JSON.stringify(t.result),
                tool_call_id: t.callId
            });
            else n.images?.length ? p.push({
                role: "user",
                content: [
                    ...n.images.map((t)=>({
                            type: "image_url",
                            image_url: {
                                url: `data:${t.mimeType};base64,${t.data}`
                            }
                        })),
                    {
                        type: "text",
                        text: n.content
                    }
                ]
            }) : p.push({
                role: "user",
                content: n.content
            });
            const h = {
                model: this.model,
                messages: p,
                stream: !0,
                reasoning: {}
            };
            k.length > 0 && (h.tools = k.map((n)=>({
                    type: "function",
                    function: {
                        name: n.name,
                        description: n.description,
                        parameters: n.parametersJsonSchema
                    }
                })));
            const g = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://patchies.app",
                    "X-Title": "Patchies"
                },
                body: JSON.stringify(h),
                signal: m
            });
            if (!g.ok) {
                const n = await g.text();
                throw new Error(`OpenRouter error ${g.status}: ${n}`);
            }
            let f = "";
            const i = new Map, x = g.body.getReader(), T = new TextDecoder;
            let s = "";
            for(;;){
                const { done: n, value: t } = await x.read();
                if (n) break;
                s += T.decode(t, {
                    stream: !0
                });
                const e = s.split(`
`);
                s = e.pop() ?? "";
                for (const c of e){
                    const r = c.trim();
                    if (!r.startsWith("data: ")) continue;
                    const O = r.slice(6);
                    if (O === "[DONE]") break;
                    try {
                        const u = JSON.parse(O).choices?.[0]?.delta;
                        if (!u) continue;
                        const P = u.reasoning ?? u.reasoning_content;
                        if (P && w?.(P), u.content && (f += u.content, b?.(u.content)), u.tool_calls) for (const R of u.tool_calls){
                            const S = R.index ?? 0;
                            i.has(S) || i.set(S, {
                                id: R.id ?? "",
                                name: "",
                                args: ""
                            });
                            const E = i.get(S);
                            R.id && (E.id = R.id), R.function?.name && (E.name += R.function.name), R.function?.arguments && (E.args += R.function.arguments);
                        }
                    } catch  {}
                }
            }
            s += T.decode();
            for (const n of s.split(`
`)){
                const t = n.trim();
                if (!t.startsWith("data: ")) continue;
                const e = t.slice(6);
                if (e !== "[DONE]") try {
                    const r = JSON.parse(e).choices?.[0]?.delta;
                    if (!r) continue;
                    const O = r.reasoning ?? r.reasoning_content;
                    if (O && w?.(O), r.content && (f += r.content, b?.(r.content)), r.tool_calls) for (const l of r.tool_calls){
                        const u = l.index ?? 0;
                        i.has(u) || i.set(u, {
                            id: l.id ?? "",
                            name: "",
                            args: ""
                        });
                        const P = i.get(u);
                        l.id && (P.id = l.id), l.function?.name && (P.name += l.function.name), l.function?.arguments && (P.args += l.function.arguments);
                    }
                } catch  {}
            }
            const o = Array.from(i.entries()).sort(([n], [t])=>n - t).map(([, n])=>({
                    id: n.id || crypto.randomUUID(),
                    name: n.name,
                    args: (()=>{
                        try {
                            return JSON.parse(n.args);
                        } catch (t) {
                            return console.warn(`OpenRouter: failed to parse tool call args for "${n.name}":`, n.args, t), {};
                        }
                    })()
                }));
            return {
                text: f,
                toolCalls: o,
                _rawModelTurn: null
            };
        }
    };
    $ = function(_, d) {
        const a = C(K);
        return A(d ?? a.provider ?? "gemini").with("openrouter", ()=>{
            if (!a.openRouterApiKey) throw new Error("OpenRouter API key is not set. Please configure it in AI settings.");
            return new J(a.openRouterApiKey, _ ?? a.openRouterTextModel);
        }).with("gemini", ()=>{
            if (!a.geminiApiKey) throw new Error("Gemini API key is not set. Please set it in the settings.");
            return new N(a.geminiApiKey, _ ?? a.geminiTextModel);
        }).exhaustive();
    };
});
export { N as GeminiProvider, J as OpenRouterProvider, $ as getTextProvider, __tla };
