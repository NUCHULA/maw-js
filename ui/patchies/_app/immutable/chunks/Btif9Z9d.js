var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as W, w as q, g as M } from "./CjsEYB_8.js";
import { _ as L, K as J } from "./BOuAxtfB.js";
let C, oe, ae, O, D, K, j, ne, ee, X, B, te, Y;
let __tla = (async () => {
  let N, _, P;
  D = "gemini-3-flash-preview";
  C = "gemini-2.5-flash-image";
  j = "google/gemini-3-flash-preview";
  K = "google/gemini-3.1-flash-image-preview";
  N = "ai-settings";
  _ = "gemini-api-key";
  P = {
    provider: "gemini",
    geminiApiKey: "",
    geminiTextModel: D,
    geminiImageModel: C,
    openRouterApiKey: "",
    openRouterTextModel: j,
    openRouterImageModel: K
  };
  function F() {
    try {
      const o = localStorage.getItem(N);
      if (o) {
        const a = JSON.parse(o);
        return a.openRouterModel && !a.openRouterTextModel && (a.openRouterTextModel = a.openRouterModel, delete a.openRouterModel), {
          ...P,
          ...a
        };
      }
    } catch {
    }
    const i = localStorage.getItem(_) ?? "";
    return {
      ...P,
      geminiApiKey: i
    };
  }
  function V(i) {
    const o = {
      ...i
    };
    o.geminiTextModel === D && delete o.geminiTextModel, o.geminiImageModel === C && delete o.geminiImageModel, o.openRouterTextModel === j && delete o.openRouterTextModel, o.openRouterImageModel === K && delete o.openRouterImageModel, localStorage.setItem(N, JSON.stringify(o)), i.geminiApiKey ? localStorage.setItem(_, i.geminiApiKey) : localStorage.removeItem(_);
  }
  function H() {
    const i = typeof localStorage < "u" ? F() : P, { subscribe: o, update: a } = q(i);
    return {
      subscribe: o,
      updateSettings(u) {
        a((y) => {
          const m = {
            ...y,
            ...u
          };
          return V(m), m;
        });
      },
      getActiveApiKey() {
        const u = M({
          subscribe: o
        });
        return u.provider === "openrouter" ? u.openRouterApiKey : u.geminiApiKey;
      },
      hasApiKey() {
        return !!this.getActiveApiKey();
      },
      getGeminiApiKey() {
        return M({
          subscribe: o
        }).geminiApiKey;
      }
    };
  }
  O = H();
  B = W(O, (i) => i.provider === "openrouter" ? !!i.openRouterApiKey : !!i.geminiApiKey);
  ee = Object.freeze(Object.defineProperty({
    __proto__: null,
    DEFAULT_GEMINI_IMAGE_MODEL: C,
    DEFAULT_GEMINI_TEXT_MODEL: D,
    DEFAULT_OPENROUTER_IMAGE_MODEL: K,
    DEFAULT_OPENROUTER_TEXT_MODEL: j,
    aiSettings: O,
    hasAIApiKey: B
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  class G {
    constructor(o, a) {
      __publicField(this, "id", "gemini");
      __publicField(this, "name", "Google Gemini");
      this.apiKey = o, this.model = a;
    }
    async generateText(o, a = {}) {
      var _a, _b, _c;
      const { signal: u, onThinking: y, onToken: m, systemPrompt: T, temperature: w, topK: h } = a;
      if (u == null ? void 0 : u.aborted) throw new Error("Request cancelled");
      const { GoogleGenAI: v } = await L(async () => {
        const { GoogleGenAI: r } = await import("./B03ImW0C.js");
        return {
          GoogleGenAI: r
        };
      }, [], import.meta.url), b = new v({
        apiKey: this.apiKey
      }), f = o.map((r) => ({
        role: r.role,
        parts: [
          ...(r.images ?? []).map((s) => ({
            inlineData: {
              mimeType: s.mimeType,
              data: s.data
            }
          })),
          {
            text: r.content
          }
        ]
      })), l = {
        thinkingConfig: {
          includeThoughts: true
        },
        abortSignal: u
      };
      T && (l.systemInstruction = T), w !== void 0 && (l.temperature = w), h !== void 0 && (l.topK = h);
      const k = await b.models.generateContentStream({
        model: this.model,
        contents: f,
        config: l
      });
      let x = "";
      for await (const r of k) {
        if (u == null ? void 0 : u.aborted) throw new Error("Request cancelled");
        for (const s of ((_c = (_b = (_a = r.candidates) == null ? void 0 : _a[0]) == null ? void 0 : _b.content) == null ? void 0 : _c.parts) ?? []) s.thought && s.text ? y == null ? void 0 : y(s.text) : s.text && (x += s.text, m == null ? void 0 : m(s.text));
      }
      return x;
    }
    async streamTurn(o, a) {
      const { systemPrompt: u, tools: y = [], signal: m, onChunk: T, onThinking: w } = a;
      if (m == null ? void 0 : m.aborted) throw new Error("Request cancelled");
      const { GoogleGenAI: h } = await L(async () => {
        const { GoogleGenAI: e } = await import("./B03ImW0C.js");
        return {
          GoogleGenAI: e
        };
      }, [], import.meta.url), v = new h({
        apiKey: this.apiKey
      }), b = o.map((e) => {
        var _a, _b;
        if (e.role === "model" && e._raw) return {
          role: "model",
          parts: e._raw.parts
        };
        if (e.role === "model" && ((_a = e.toolCalls) == null ? void 0 : _a.length)) {
          const t = [];
          e.content && t.push({
            text: e.content
          });
          for (const d of e.toolCalls) {
            let c;
            try {
              c = typeof d.args == "string" ? JSON.parse(d.args) : d.args;
            } catch {
              c = d.args;
            }
            t.push({
              functionCall: {
                name: d.name,
                args: c
              }
            });
          }
          return {
            role: "model",
            parts: t
          };
        }
        return e.role === "user" && ((_b = e.toolResults) == null ? void 0 : _b.length) ? {
          role: "user",
          parts: e.toolResults.map((t) => ({
            functionResponse: {
              name: t.name,
              response: t.result !== null && typeof t.result == "object" ? t.result : {
                value: t.result
              }
            }
          }))
        } : {
          role: e.role,
          parts: [
            ...(e.images ?? []).map((t) => ({
              inlineData: {
                mimeType: t.mimeType,
                data: t.data
              }
            })),
            ...(e.youtubeUrls ?? []).map((t) => ({
              fileData: {
                fileUri: t
              }
            })),
            {
              text: e.content
            }
          ]
        };
      }), f = {
        thinkingConfig: {
          includeThoughts: true
        },
        abortSignal: m
      };
      u && (f.systemInstruction = u), y.length > 0 && (f.tools = [
        {
          functionDeclarations: y.map((e) => ({
            name: e.name,
            description: e.description,
            parameters: e.parametersJsonSchema
          }))
        }
      ]);
      const l = await v.models.generateContentStream({
        model: this.model,
        contents: b,
        config: f
      }), k = [];
      let x = "";
      const r = m ? new Promise((e, t) => {
        m.aborted && t(new Error("Request cancelled")), m.addEventListener("abort", () => t(new Error("Request cancelled")), {
          once: true
        });
      }) : null, s = async () => {
        var _a, _b, _c;
        for await (const e of l) {
          if (m == null ? void 0 : m.aborted) throw new Error("Request cancelled");
          for (const t of ((_c = (_b = (_a = e.candidates) == null ? void 0 : _a[0]) == null ? void 0 : _b.content) == null ? void 0 : _c.parts) ?? []) t.thought ? (t.text && w && w(t.text), k.push(t)) : t.functionCall ? k.push(t) : t.text && (x += t.text, T == null ? void 0 : T(t.text), k.push({
            text: t.text
          }));
        }
      };
      await (r ? Promise.race([
        s(),
        r
      ]) : s());
      const n = k.filter((e) => "functionCall" in e).map((e) => {
        const t = e.functionCall;
        return {
          id: crypto.randomUUID(),
          name: t.name ?? "",
          args: t.args ?? {}
        };
      });
      return {
        text: x,
        toolCalls: n,
        _rawModelTurn: {
          parts: k
        }
      };
    }
  }
  const $ = "https://openrouter.ai/api/v1/chat/completions", z = {
    "Content-Type": "application/json",
    "HTTP-Referer": "https://patchies.app",
    "X-Title": "Patchies"
  };
  class U {
    constructor(o, a) {
      __publicField(this, "id", "openrouter");
      __publicField(this, "name", "OpenRouter");
      this.apiKey = o, this.model = a;
    }
    get authHeaders() {
      return {
        ...z,
        Authorization: `Bearer ${this.apiKey}`
      };
    }
    async generateText(o, a = {}) {
      var _a, _b, _c, _d, _e;
      const { signal: u, onThinking: y, onToken: m, systemPrompt: T, temperature: w, topK: h } = a, v = [];
      T && v.push({
        role: "system",
        content: T
      });
      for (const s of o) ((_a = s.images) == null ? void 0 : _a.length) ? v.push({
        role: "user",
        content: [
          ...s.images.map((n) => ({
            type: "image_url",
            image_url: {
              url: `data:${n.mimeType};base64,${n.data}`
            }
          })),
          {
            type: "text",
            text: s.content
          }
        ]
      }) : s.role === "model" ? v.push({
        role: "assistant",
        content: s.content
      }) : v.push({
        role: "user",
        content: s.content
      });
      const b = {
        model: this.model,
        messages: v,
        stream: true,
        reasoning: {}
      };
      w !== void 0 && (b.temperature = w), h !== void 0 && (b.top_k = h);
      const f = await fetch($, {
        method: "POST",
        headers: this.authHeaders,
        body: JSON.stringify(b),
        signal: u
      });
      if (!f.ok) {
        const s = await f.text();
        throw new Error(`OpenRouter error ${f.status}: ${s}`);
      }
      let l = "";
      const k = f.body.getReader(), x = new TextDecoder();
      let r = "";
      for (; ; ) {
        const { done: s, value: n } = await k.read();
        if (s) break;
        r += x.decode(n, {
          stream: true
        });
        const e = r.split(`
`);
        r = e.pop() ?? "";
        for (const t of e) {
          const d = t.trim();
          if (!d.startsWith("data: ")) continue;
          const c = d.slice(6);
          if (c === "[DONE]") break;
          try {
            const p = (_c = (_b = JSON.parse(c).choices) == null ? void 0 : _b[0]) == null ? void 0 : _c.delta;
            if (!p) continue;
            const g = p.reasoning ?? p.reasoning_content;
            g && (y == null ? void 0 : y(g)), p.content && (l += p.content, m == null ? void 0 : m(p.content));
          } catch {
          }
        }
      }
      r += x.decode();
      for (const s of r.split(`
`)) {
        const n = s.trim();
        if (!n.startsWith("data: ")) continue;
        const e = n.slice(6);
        if (e !== "[DONE]") try {
          const d = (_e = (_d = JSON.parse(e).choices) == null ? void 0 : _d[0]) == null ? void 0 : _e.delta;
          if (!d) continue;
          const c = d.reasoning ?? d.reasoning_content;
          c && (y == null ? void 0 : y(c)), d.content && (l += d.content, m == null ? void 0 : m(d.content));
        } catch {
        }
      }
      return l;
    }
    async streamTurn(o, a) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const { systemPrompt: u, tools: y = [], signal: m, onChunk: T, onThinking: w } = a, h = [];
      u && h.push({
        role: "system",
        content: u
      });
      for (const n of o) if (n.role === "model") h.push({
        role: "assistant",
        content: n.content || null,
        ...((_a = n.toolCalls) == null ? void 0 : _a.length) ? {
          tool_calls: n.toolCalls.map((e) => ({
            id: e.id,
            type: "function",
            function: {
              name: e.name,
              arguments: JSON.stringify(e.args)
            }
          }))
        } : {}
      });
      else if ((_b = n.toolResults) == null ? void 0 : _b.length) for (const e of n.toolResults) h.push({
        role: "tool",
        content: typeof e.result == "string" ? e.result : JSON.stringify(e.result),
        tool_call_id: e.callId
      });
      else ((_c = n.images) == null ? void 0 : _c.length) ? h.push({
        role: "user",
        content: [
          ...n.images.map((e) => ({
            type: "image_url",
            image_url: {
              url: `data:${e.mimeType};base64,${e.data}`
            }
          })),
          {
            type: "text",
            text: n.content
          }
        ]
      }) : h.push({
        role: "user",
        content: n.content
      });
      const v = {
        model: this.model,
        messages: h,
        stream: true,
        reasoning: {}
      };
      y.length > 0 && (v.tools = y.map((n) => ({
        type: "function",
        function: {
          name: n.name,
          description: n.description,
          parameters: n.parametersJsonSchema
        }
      })));
      const b = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://patchies.app",
          "X-Title": "Patchies"
        },
        body: JSON.stringify(v),
        signal: m
      });
      if (!b.ok) {
        const n = await b.text();
        throw new Error(`OpenRouter error ${b.status}: ${n}`);
      }
      let f = "";
      const l = /* @__PURE__ */ new Map(), k = b.body.getReader(), x = new TextDecoder();
      let r = "";
      for (; ; ) {
        const { done: n, value: e } = await k.read();
        if (n) break;
        r += x.decode(e, {
          stream: true
        });
        const t = r.split(`
`);
        r = t.pop() ?? "";
        for (const d of t) {
          const c = d.trim();
          if (!c.startsWith("data: ")) continue;
          const I = c.slice(6);
          if (I === "[DONE]") break;
          try {
            const g = (_e = (_d = JSON.parse(I).choices) == null ? void 0 : _d[0]) == null ? void 0 : _e.delta;
            if (!g) continue;
            const A = g.reasoning ?? g.reasoning_content;
            if (A && (w == null ? void 0 : w(A)), g.content && (f += g.content, T == null ? void 0 : T(g.content)), g.tool_calls) for (const S of g.tool_calls) {
              const E = S.index ?? 0;
              l.has(E) || l.set(E, {
                id: S.id ?? "",
                name: "",
                args: ""
              });
              const R = l.get(E);
              S.id && (R.id = S.id), ((_f = S.function) == null ? void 0 : _f.name) && (R.name += S.function.name), ((_g = S.function) == null ? void 0 : _g.arguments) && (R.args += S.function.arguments);
            }
          } catch {
          }
        }
      }
      r += x.decode();
      for (const n of r.split(`
`)) {
        const e = n.trim();
        if (!e.startsWith("data: ")) continue;
        const t = e.slice(6);
        if (t !== "[DONE]") try {
          const c = (_i = (_h = JSON.parse(t).choices) == null ? void 0 : _h[0]) == null ? void 0 : _i.delta;
          if (!c) continue;
          const I = c.reasoning ?? c.reasoning_content;
          if (I && (w == null ? void 0 : w(I)), c.content && (f += c.content, T == null ? void 0 : T(c.content)), c.tool_calls) for (const p of c.tool_calls) {
            const g = p.index ?? 0;
            l.has(g) || l.set(g, {
              id: p.id ?? "",
              name: "",
              args: ""
            });
            const A = l.get(g);
            p.id && (A.id = p.id), ((_j = p.function) == null ? void 0 : _j.name) && (A.name += p.function.name), ((_k = p.function) == null ? void 0 : _k.arguments) && (A.args += p.function.arguments);
          }
        } catch {
        }
      }
      const s = Array.from(l.entries()).sort(([n], [e]) => n - e).map(([, n]) => ({
        id: n.id || crypto.randomUUID(),
        name: n.name,
        args: (() => {
          try {
            return JSON.parse(n.args);
          } catch (e) {
            return console.warn(`OpenRouter: failed to parse tool call args for "${n.name}":`, n.args, e), {};
          }
        })()
      }));
      return {
        text: f,
        toolCalls: s,
        _rawModelTurn: null
      };
    }
  }
  X = function(i, o) {
    const a = M(O);
    return J(o ?? a.provider ?? "gemini").with("openrouter", () => {
      if (!a.openRouterApiKey) throw new Error("OpenRouter API key is not set. Please configure it in AI settings.");
      return new U(a.openRouterApiKey, i ?? a.openRouterTextModel);
    }).with("gemini", () => {
      if (!a.geminiApiKey) throw new Error("Gemini API key is not set. Please set it in the settings.");
      return new G(a.geminiApiKey, i ?? a.geminiTextModel);
    }).exhaustive();
  };
  Y = function() {
    const i = M(O);
    if (!i.geminiApiKey) throw new Error("Gemini API key is not set. Please set it in the settings.");
    return i.geminiApiKey;
  };
  te = Object.freeze(Object.defineProperty({
    __proto__: null,
    GeminiProvider: G,
    OpenRouterProvider: U,
    getTextProvider: X,
    requireGeminiApiKey: Y
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ne = function(i) {
    const o = i.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    return o ? o[1] : i.trim();
  };
  oe = `## Basic Control & UI
- button: Send messages on click
- slider: Numeric value control
- toggle: Binary on/off switch
- msg: Send predefined messages
- textbox: Text input and display
- curve: Breakpoint curve editor

## Audio I/O (Dedicated node types)
- mic~: Audio input from microphone
- out~: Audio output to speakers/headphones
- meter~: Visual audio level meter
- scope~: Oscilloscope display for audio signals
- soundfile~: Load and play audio files
- sampler~: Sample playback with triggering
- pads~: 16-pad drum sampler triggered by MIDI noteOn/noteOff (GM drum map, note 36 = pad 1)
- split~: Split multi-channel audio into separate mono channels.
- merge~: Merge multiple mono channels into a single multi-channel audio.

## Audio Objects (Created via "object" node type)
- object: Meta-object for creating text-based audio objects:
  * Processing: gain~, pan~, delay~, compressor~, waveshaper~, convolver~, expr~, fexpr~
  * Filters: lowpass~, highpass~, bandpass~, allpass~, notch~, lowshelf~, highshelf~, peaking~, biquad~, vcf~, comb~
  * Synthesis: osc~ (oscillator), sig~ (signal), noise~, pink~, phasor~, pulse~
  * Envelopes & Control: adsr~, line~, vline~, env~, snapshot~, latch~, samphold~, slop~, threshold~
  * Math (audio-rate): +~, -~, *~, /~, >~, <~, abs~, cos~, exp~, log~, sqrt~, rsqrt~, pow~, min~, max~, wrap~, clip~
  * Conversion: mtof~ (MIDI to frequency), ftom~ (frequency to MIDI)
  * Table: tabosc4~, tabread~, tabread4~, tabwrite~
  * Delay lines: delwrite~ (write to named delay), delread~ (read from named delay), delread4~ (interpolating read)
  * Timing: beat~ (fire on beat subdivisions), bang~ (convert signal bang to message bang)
  * Routing: send (send messages to a named channel), recv (receive messages from a named channel), send~, recv~ (wireless audio routing)
  * Utility: bang, float, metro, loadbang, samplerate~, mtof (message-rate)
  * Analysis: fft~ (FFT spectrum analyzer), tap~ (capture trigger-synced audio frames as messages)
  * IMPORTANT: Use type "object" with data containing THREE fields: expr (full string), name (first word only), params (array of values matching arguments)
  * data format: { "expr": "name arg1 arg2", "name": "name", "params": [arg1, arg2] }
  * Examples:
  *   no args:   { "expr": "out~",        "name": "out~",       "params": [] }
  *   one arg:   { "expr": "gain~ 0.5",   "name": "gain~",      "params": [0.5] }
  *   two args:  { "expr": "delay~ 500",  "name": "delay~",     "params": [500] }
  *   string:    { "expr": "osc~ sine",   "name": "osc~",       "params": ["sine"] }

## Visual & Creative Coding Objects
- vue: write custom user interface and component using Vue.js
- p5: P5.js. readable code, great for shorter interactive sketches with mouse/keyboard via p5's API
- canvas.dom: HTML5 Canvas on main thread. supports mouse/keyboard, lower overhead than p5, best for heavy visuals needing interactivity
- surface: Fullscreen interactive canvas overlay. captures mouse/touch input across the entire screen. use for live performance drawing, painting, or touch interaction.
- canvas: HTML5 Canvas on web worker. no mouse/keyboard, highest performance. can chain into the rendering pipeline at high speed (e.g. video texture for glsl/hydra)
- hydra: Live coding video synthesis with Hydra
- glsl: GLSL fragment shaders for visual effects
- three: Three.js 3D graphics (offscreen worker, for video chaining)
- regl: GPU renderer with regl draw commands (custom vertices, buffers, multi-pass, blend modes)
- three.dom: Three.js 3D graphics (main thread, for mouse/keyboard interaction)
- projmap: Projection mapper \u2014 warp video textures onto N-point polygon surfaces with built-in point editor and expand mode
- dom: write to the DOM element
- swgl: do not use unless explicitly requested
- bg.out: Background output (final video output)

## Audio & Music Objects
- tone~: Tone.js audio synthesis and processing
- dsp~: Custom DSP with AudioWorklet (JavaScript)
- elem~: Elementary Audio (functional reactive audio)
- sonic~: SuperSonic/SuperCollider synthesis
- chuck~: ChucK audio programming
- csound~: Csound sound and music computing
- bytebeat~: Bytebeat algorithmic synthesis with t-based expressions
- strudel: Strudel live coding (TidalCycles)
- orca: Orca livecoding sequencer
- expr~: Audio-rate mathematical expressions

## Programming & Control Objects
- js: JavaScript code execution
- worker: JavaScript in Web Worker thread (non-blocking)
- ruby: Ruby code with ruby.wasm
- python: Python code with Pyodide
- expr: Mathematical expression evaluator
- clip: Clamp a number to a min/max range (clip min max)
- stack: LIFO stack \u2014 push messages to inlet 0, bang inlet 1 to pop; also accepts clear and size commands on inlet 1
- queue: FIFO queue \u2014 push messages to inlet 0, bang inlet 1 to dequeue; also accepts clear and size commands on inlet 1
- wgpu.compute: WebGPU compute shaders (WGSL) for parallel data processing
- asm: Virtual stack machine assembly (can send/receive messages)
- uxn: Uxn virtual machine (Uxntal, visual & interactive)

## Interface & Control Objects
- button: Simple button (sends bang)
- toggle: Boolean toggle switch
- slider: Numerical value slider
- msg: Message sender with predefined values
- textbox: Multi-line text input
- keyboard: Keyboard input controller
- label: Text label for annotations
- link: Clickable link button
- sequencer: Multi-track step sequencer synced to transport clock (drum machine style; one outlet per track)

## MIDI & Network Objects
- midi.in: MIDI input from devices
- midi.out: MIDI output to devices
- netsend: Network message sender (WebRTC)
- netrecv: Network message receiver (WebRTC)
- serial: WebSerial port \u2014 send/receive strings, Uint8Array, or number[] to hardware devices (Arduino, etc.)
- serial.term: Interactive serial terminal with scrollback, ANSI colors, and command history
- serial.dmx: DMX-512 lighting output over serial (250kbaud/8N2, hardcoded) \u2014 send number[] or Uint8Array of up to 512 channel values

## Documentation & Content
- markdown: Markdown renderer
- iframe: Embed web content

## AI Objects
- ai.stt: Transcribe speech to text using Gemini AI (send listen to start, stop to finish)
- stt: Transcribe speech to text using browser Web Speech API (no API key, send listen to start, stop to finish)

## Media Input
- webcam: Webcam video input
- screen: Screen capture
- vdo.ninja.pull: Receive audio from a VDO.Ninja stream (WebRTC)
- vdo.ninja.push: Send audio to a VDO.Ninja stream (WebRTC)

## Video Routing
- send.vdo: Send video frames to a named channel (wireless video routing)
- recv.vdo: Receive video frames from a named channel (wireless video routing)

## Vision ML (MediaPipe)
- vision.hand: Real-time hand skeleton detection \u2014 emits { hands: [{handedness, score, landmarks, worldLandmarks}], timestamp }
- vision.body: Full-body pose estimation \u2014 emits { poses: [{landmarks, worldLandmarks}], timestamp }
- vision.face: Facial landmark detection (478 points) \u2014 emits { faces: [{landmarks, blendshapes?}], timestamp }
- vision.segment: Body segmentation mask \u2014 video outlet (greyscale mask bitmap), optional message outlet with raw mask data
- vision.detect: Object detection with bounding boxes \u2014 emits { detections: [{label, score, boundingBox}], timestamp }
- vision.gesture: Gesture recognition \u2014 emits { gestures: [{gesture, score, handedness, landmarks, worldLandmarks}], timestamp }
- vision.classify: Image classification (EfficientNet Lite0, 1000 ImageNet classes) \u2014 emits { classifications: [{label, score}], timestamp }`;
  ae = `## Visuals
- p5: P5.js sketches \u2014 generative drawing, particle systems, interactive 2D graphics
- canvas: High-performance HTML5 canvas (web worker) \u2014 great for heavy visual pipelines
- surface: Fullscreen interactive canvas \u2014 capture mouse/touch across entire screen for drawing/painting
- hydra: Live video synthesis \u2014 feedback loops, texture blending, webcam warping
- glsl: GLSL fragment shaders \u2014 pixel-level visual effects, raymarching, procedural textures
- three: Three.js 3D graphics (offscreen worker) \u2014 meshes, lighting, cameras, 3D scenes; for video chaining
- three.dom: Three.js 3D graphics (main thread) \u2014 same as three but supports mouse/keyboard interaction
- regl: Low-level GPU rendering \u2014 custom vertices, multi-pass, blend modes
- canvas.dom: HTML5 Canvas (main thread) \u2014 supports mouse/keyboard, lower overhead than p5
- projmap: Projection mapping \u2014 warp video onto surfaces with a built-in point editor
- textmode: Text-based "shader" rendering \u2014 create visuals with ASCII characters
- vue: Custom UI with Vue.js \u2014 reactive components, sliders, panels, dashboards
- dom: Write raw HTML/CSS to a DOM element \u2014 flexible UI without a framework

## Audio Synthesis
- strudel: TidalCycles-style live coding \u2014 pattern-based music, polymeter, mini-notation
- tone~: Tone.js \u2014 high-level synthesis, effects chains, scheduling, instruments
- orca: Esoteric livecoding sequencer \u2014 2D grid of operators that fire MIDI/messages
- bytebeat~: One-expression algorithmic audio \u2014 t-based math formulas that generate sound
- csound~: Csound \u2014 classic computer music language with thousands of opcodes
- chuck~: ChucK \u2014 strongly-timed audio programming language
- sonic~: SuperCollider-style synthesis \u2014 rich synthesis engine

## Signal Processors
- dsp~: Custom DSP with AudioWorklet \u2014 write your own sample-level processing in JS
- elem~: Functional reactive audio with Elementary Audio
- expr~: Audio-rate mathematical expressions \u2014 inline formula on the signal path
- snapshot~: Sample an audio signal on demand (bang \u2192 current value)
- samphold~: Sample-and-hold \u2014 freeze a signal when triggered
- env~: Envelope follower \u2014 tracks the amplitude of an audio signal
- latch~: Hold a signal value until retriggered

## Audio Processing
- gain~, pan~: Volume and stereo panning
- delay~: Echo and delay lines
- convolver~: Convolution reverb
- lowpass~, highpass~, bandpass~, vcf~: Filters
- compressor~: Dynamic range compression
- waveshaper~: Wavefold and distortion
- comb~: Comb filter \u2014 metallic resonance, Karplus-Strong-style sounds
- adsr~: Attack-decay-sustain-release envelope

## Audio Analysis
- fft~: FFT spectrum analyzer \u2014 frequency bands drive visuals or routing
- scope~: Oscilloscope \u2014 visualise waveforms in real time
- meter~: Audio level meter

## Audio I/O
- mic~: Microphone input
- soundfile~: Load and play audio files
- sampler~: Sample playback with pitch and trigger control
- pads~: 16-pad drum sampler (GM drum map)

## MIDI
- midi.in, midi.out: MIDI controller input/output

# Serial
- serial: WebSerial \u2014 communicate with Arduino, sensors, any serial device
- serial.term: Interactive serial terminal \u2014 scrollback, ANSI colors, command history
- serial.dmx: DMX-512 lighting output \u2014 send up to 512 channel values to DMX fixtures

## Network & Streaming
- netsend, netrecv: WebRTC message send/receive between peers
- vdo.ninja.pull: Receive audio from a VDO.Ninja stream (WebRTC)
- vdo.ninja.push: Send audio to a VDO.Ninja stream (WebRTC)

# Video Input
- webcam: Live webcam video input
- screen: Screen capture input

## Vision
- vision.hand: Real-time hand skeleton tracking (21 landmarks per hand)
- vision.body: Full-body pose estimation (33 body landmarks)
- vision.face: Facial landmark mesh (478 points, blend shapes)
- vision.gesture: Gesture recognition (thumbs up, peace sign, etc.)
- vision.detect: Object detection with bounding boxes (1000 classes)
- vision.segment: Body segmentation \u2014 separate person from background as a mask
- vision.classify: Image classification \u2014 1000 ImageNet classes with confidence scores

## Low-Level
- asm: Virtual stack machine assembly \u2014 minimalist bytecode VM, send/receive messages
- uxn: Uxn virtual machine \u2014 runs Uxntal programs, visual and interactive
- wgpu.compute: WebGPU compute shaders (WGSL) \u2014 massively parallel data processing on GPU
- uiua: UIUA stack based virtual machine

## Scripting & Logic
- js: JavaScript \u2014 full scripting, access to Patchies API (fft, send, recv, flash, etc.)
- worker: JavaScript in a Web Worker \u2014 non-blocking heavy computation
- ruby: Ruby scripting with ruby.wasm
- python: Python scripting with Pyodide \u2014 numpy, scipy, ML libraries
- expr: Mathematical expression evaluator \u2014 compact formula nodes
- sequencer: Step sequencer synced to transport clock \u2014 drum machine style, one outlet per track
- slider, button, toggle, keyboard, textbox, curve: UI controls and display widgets

## Documentation & Embed
- markdown: Render markdown text \u2014 patch notes, labels, instructions
- iframe: Embed any web page or tool

## AI & Speech
- ai.stt: Speech-to-text via Gemini AI \u2014 send listen/stop to control
- stt: Speech-to-text via browser Web Speech API \u2014 no API key needed`;
})();
export {
  C as D,
  oe as O,
  ae as S,
  __tla,
  O as a,
  D as b,
  K as c,
  j as d,
  ne as e,
  ee as f,
  X as g,
  B as h,
  te as i,
  Y as r
};
