import "../chunks/DsnmJJEf.js";
import { o as Ht, s } from "../chunks/DMf1efOI.js";
import { ai as It, p as Mt, aj as G, ak as We, f as i, B as p, d as o, s as r, t as _, b as a, c as Rt, r as t, z as e, a as ze, al as pe, e as Ct } from "../chunks/CeQCqUQ_.js";
import { i as w } from "../chunks/CmAffBVh.js";
import { e as se, i as ue } from "../chunks/DyVjpqx_.js";
import { s as Z, r as Nt, a as St } from "../chunks/C66EmW7x.js";
import { b as At } from "../chunks/jdr7bsmJ.js";
import { r as _t, a as Fe, N as Ot } from "../chunks/Ctl3mBGF.js";
import { handleMultiObjectInsert as Dt } from "../chunks/CdZmA6Lq.js";
import { K as Ye } from "../chunks/BOuAxtfB.js";
const nt = [{ id: "msg-slider-to-msg", prompt: "slider connected to a msg object", category: "message", expectedTypes: ["slider", "msg"] }, { id: "msg-button-to-toggle", prompt: "button connected to toggle", category: "message", expectedTypes: ["button", "toggle"] }, { id: "msg-slider-to-js", prompt: "slider sending values to a js node", category: "message", expectedTypes: ["slider", "js"] }, { id: "msg-keyboard-to-js", prompt: "keyboard connected to js node", category: "message", expectedTypes: ["keyboard", "js"] }, { id: "msg-orca-to-sampler", prompt: "orca sequencer triggering a sampler~", category: "message", expectedTypes: ["orca", "sampler~"] }, { id: "audio-osc-to-out", prompt: "osc~ connected to out~", category: "audio", expectedTypes: ["object"] }, { id: "audio-osc-gain-out", prompt: "osc~ through gain~ to out~", category: "audio", expectedTypes: ["object"] }, { id: "audio-noise-lowpass-out", prompt: "noise~ through lowpass~ to out~", category: "audio", expectedTypes: ["object"] }, { id: "audio-mic-to-out", prompt: "mic~ connected to out~", category: "audio", expectedTypes: ["mic~", "out~"] }, { id: "audio-strudel-to-out", prompt: "strudel pattern playing to out~", category: "audio", expectedTypes: ["strudel", "out~"] }, { id: "audio-bytebeat-to-out", prompt: "bytebeat~ connected to out~", category: "audio", expectedTypes: ["bytebeat~", "out~"] }, { id: "mixed-slider-osc-out", prompt: "slider controlling osc~ frequency, osc~ to out~", category: "mixed", expectedTypes: ["slider", "object"] }, { id: "mixed-slider-gain-out", prompt: "slider controlling gain~ level, with osc~ through gain~ to out~", category: "mixed", expectedTypes: ["slider", "object"] }, { id: "mixed-toggle-metro", prompt: "toggle starting and stopping a metro object", category: "mixed", expectedTypes: ["toggle", "object"] }, { id: "video-p5-to-glsl", prompt: "p5 sketch feeding into a glsl shader", category: "video", expectedTypes: ["p5", "glsl"] }, { id: "video-p5-to-hydra", prompt: "p5 sketch connected to hydra", category: "video", expectedTypes: ["p5", "hydra"] }, { id: "video-webcam-to-glsl", prompt: "webcam feeding into glsl shader", category: "video", expectedTypes: ["webcam", "glsl"] }, { id: "video-glsl-to-bgout", prompt: "glsl shader output to bg.out", category: "video", expectedTypes: ["glsl", "bg.out"] }, { id: "video-hydra-to-bgout", prompt: "hydra output to bg.out", category: "video", expectedTypes: ["hydra", "bg.out"] }, { id: "video-canvas-to-glsl", prompt: "canvas node connected to glsl shader", category: "video", expectedTypes: ["canvas", "glsl"] }, { id: "dynamic-tone-to-out", prompt: "tone~ synth connected to out~", category: "dynamic", expectedTypes: ["tone~", "out~"] }, { id: "dynamic-dsp-to-out", prompt: "dsp~ node connected to out~", category: "dynamic", expectedTypes: ["dsp~", "out~"] }, { id: "dynamic-js-two-outlets", prompt: "js node with 2 outlets connected to two separate msg nodes", category: "dynamic", expectedTypes: ["js", "msg"] }, { id: "tricky-sampler-handles", prompt: "mic~ recording into sampler~, sampler~ to out~", category: "audio", expectedTypes: ["mic~", "sampler~", "out~"] }, { id: "tricky-chuck-mixed", prompt: "slider sending to chuck~ message inlet, chuck~ audio to out~", category: "mixed", expectedTypes: ["slider", "chuck~", "out~"] }, { id: "tricky-csound-mixed", prompt: "button triggering csound~, csound~ audio to out~", category: "mixed", expectedTypes: ["button", "csound~", "out~"] }, { id: "tricky-meter-no-index", prompt: "osc~ through gain~ to out~, also gain~ to meter~", category: "audio", expectedTypes: ["object", "meter~"] }, { id: "tricky-out-fanin", prompt: "two osc~ both connected to the same out~", category: "audio", expectedTypes: ["object"] }, { id: "tricky-msg-indexed-inlets", prompt: "two sliders connected to a msg node that uses $1 and $2", category: "message", expectedTypes: ["slider", "msg"] }, { id: "tricky-expr-indexed-inlets", prompt: "two sliders feeding into expr node with $f1 + $f2", category: "message", expectedTypes: ["slider", "expr"] }, { id: "tricky-sequencer-outlets", prompt: "sequencer with 3 tracks sending to 3 separate msg nodes", category: "dynamic", expectedTypes: ["sequencer", "msg"] }, { id: "tricky-swgl-mixed-outlets", prompt: "swgl node with video output to bg.out", category: "video", expectedTypes: ["swgl", "bg.out"] }, { id: "tricky-p5-dual-outlets", prompt: "p5 node with video output to glsl and message output to a msg node", category: "video", expectedTypes: ["p5", "glsl", "msg"] }, { id: "ai-text-prompt", prompt: "slider connected to ai.txt, ai.txt output to msg", category: "mixed", expectedTypes: ["slider", "ai.txt", "msg"] }, { id: "ai-stt-pipeline", prompt: "mic~ audio into ai.stt, ai.stt text output to msg", category: "mixed", expectedTypes: ["mic~", "ai.stt", "msg"] }, { id: "ai-speech-to-out", prompt: "button triggering ai.tts, ai.tts audio to out~", category: "mixed", expectedTypes: ["button", "ai.tts", "out~"] }, { id: "ai-image-video", prompt: "webcam into ai.img, ai.img video output to bg.out", category: "video", expectedTypes: ["webcam", "ai.img", "bg.out"] }, { id: "dynamic-elem-to-out", prompt: "elem~ synthesis node connected to out~", category: "dynamic", expectedTypes: ["elem~", "out~"] }, { id: "dynamic-sonic-to-out", prompt: "sonic~ node connected to out~", category: "dynamic", expectedTypes: ["sonic~", "out~"] }, { id: "dynamic-dsp-with-message", prompt: "slider sending control to dsp~ message inlet, dsp~ audio to out~", category: "dynamic", expectedTypes: ["slider", "dsp~", "out~"] }, { id: "dynamic-canvas-dom", prompt: "canvas.dom with video output to bg.out", category: "video", expectedTypes: ["canvas.dom", "bg.out"] }, { id: "video-send-recv", prompt: "p5 video into send.vdo, recv.vdo output to bg.out", category: "video", expectedTypes: ["p5", "send.vdo", "recv.vdo", "bg.out"] }, { id: "chain-p5-glsl-hydra", prompt: "p5 to glsl to hydra video chain", category: "video", expectedTypes: ["p5", "glsl", "hydra"] }, { id: "chain-slider-tone-out", prompt: "slider controlling tone~ frequency, tone~ to out~", category: "mixed", expectedTypes: ["slider", "tone~", "out~"] }, { id: "chain-webcam-glsl-bgout", prompt: "webcam through glsl shader to bg.out", category: "video", expectedTypes: ["webcam", "glsl", "bg.out"] }, { id: "chain-mic-chuck-out", prompt: "mic~ into chuck~ audio processing, chuck~ to out~", category: "audio", expectedTypes: ["mic~", "chuck~", "out~"] }, { id: "chain-strudel-sampler-out", prompt: "strudel audio into sampler~ audio input for live recording, sampler~ audio to out~", category: "mixed", expectedTypes: ["strudel", "sampler~", "out~"] }, { id: "msg-knob-to-js", prompt: "knob connected to js node", category: "message", expectedTypes: ["knob", "js"] }, { id: "msg-textbox-to-msg", prompt: "textbox connected to a msg node", category: "message", expectedTypes: ["textbox", "msg"] }, { id: "audio-soundfile-to-out", prompt: "soundfile~ playing audio to out~", category: "audio", expectedTypes: ["soundfile~", "out~"] }, { id: "audio-scope-visualizer", prompt: "osc~ connected to out~ and also to scope~ for visualization", category: "audio", expectedTypes: ["object", "scope~"] }, { id: "msg-worker-to-msg", prompt: "worker node output connected to a msg node", category: "message", expectedTypes: ["worker", "msg"] }, { id: "video-three-to-bgout", prompt: "three.js scene with video output to bg.out", category: "video", expectedTypes: ["three", "bg.out"] }, { id: "video-three-dom-to-bgout", prompt: "three.dom node with video output to bg.out", category: "video", expectedTypes: ["three.dom", "bg.out"] }, { id: "msg-dom-to-msg", prompt: "dom node output connected to msg", category: "message", expectedTypes: ["dom", "msg"] }, { id: "msg-vue-to-msg", prompt: "vue node output connected to msg", category: "message", expectedTypes: ["vue", "msg"] }, { id: "audio-expr-tilde-to-out", prompt: "expr~ audio expression node connected to out~", category: "audio", expectedTypes: ["expr~", "out~"] }, { id: "msg-markdown-display", prompt: "js node output to markdown node for display", category: "message", expectedTypes: ["js", "markdown"] }, { id: "msg-iframe-control", prompt: "button connected to iframe node", category: "message", expectedTypes: ["button", "iframe"] }, { id: "ai-music-to-out", prompt: "button triggering ai.music, ai.music audio to out~", category: "mixed", expectedTypes: ["button", "ai.music", "out~"] }, { id: "msg-stt-standalone", prompt: "msg triggering stt (speech to text), stt output to another msg", category: "message", expectedTypes: ["msg", "stt", "msg"] }, { id: "msg-tts-standalone", prompt: "button triggering tts (text to speech)", category: "message", expectedTypes: ["button", "tts"] }, { id: "video-screen-to-glsl", prompt: "screen capture feeding into glsl shader", category: "video", expectedTypes: ["screen", "glsl"] }, { id: "msg-midi-in-to-js", prompt: "midi.in receiving MIDI data connected to js node", category: "message", expectedTypes: ["midi.in", "js"] }, { id: "msg-js-to-midi-out", prompt: "js node sending MIDI messages to midi.out", category: "message", expectedTypes: ["js", "midi.out"] }, { id: "msg-js-to-netsend", prompt: "js node connected to netsend for network output", category: "message", expectedTypes: ["js", "netsend"] }, { id: "msg-netrecv-to-msg", prompt: "netrecv receiving network data to msg", category: "message", expectedTypes: ["netrecv", "msg"] }, { id: "serial-to-js", prompt: "serial port receiving data connected to js node", category: "message", expectedTypes: ["serial", "js"] }, { id: "js-to-serial", prompt: "exactly two nodes: a js node with its outlet connected to a serial node inlet, nothing else", category: "message", expectedTypes: ["js", "serial"] }, { id: "serial-dmx-from-button", prompt: "button connected to serial.dmx to trigger connect", category: "message", expectedTypes: ["button", "serial.dmx"] }, { id: "serial-term-display", prompt: "serial.term terminal receiving lines, output to msg node", category: "message", expectedTypes: ["serial.term", "msg"] }, { id: "video-projmap-two-sources", prompt: "glsl and hydra connected to projmap", category: "video", expectedTypes: ["glsl", "hydra", "projmap", "bg.out"] }, { id: "video-projmap-single-source", prompt: "p5 sketch mapped onto a projmap surface, output to bg.out", category: "video", expectedTypes: ["p5", "projmap", "bg.out"] }, { id: "vision-hand-to-js", prompt: "webcam into vision.hand, vision.hand results to js node", category: "mixed", expectedTypes: ["webcam", "vision.hand", "js"] }, { id: "vision-body-to-js", prompt: "webcam into vision.body, vision.body pose results to js node", category: "mixed", expectedTypes: ["webcam", "vision.body", "js"] }, { id: "vision-face-to-js", prompt: "webcam into vision.face, face landmark results to js node", category: "mixed", expectedTypes: ["webcam", "vision.face", "js"] }, { id: "vision-detect-to-js", prompt: "webcam into vision.detect, object detection results to js node", category: "mixed", expectedTypes: ["webcam", "vision.detect", "js"] }, { id: "vision-gesture-to-js", prompt: "webcam into vision.gesture, gesture recognition results to js node", category: "mixed", expectedTypes: ["webcam", "vision.gesture", "js"] }, { id: "vision-classify-to-msg", prompt: "webcam into vision.classify, classification results to msg node", category: "mixed", expectedTypes: ["webcam", "vision.classify", "msg"] }, { id: "vision-segment-to-glsl", prompt: "webcam into vision.segment, segmentation mask video to glsl shader", category: "video", expectedTypes: ["webcam", "vision.segment", "glsl"] }, { id: "vision-segment-to-bgout", prompt: "webcam into vision.segment, mask video output to bg.out", category: "video", expectedTypes: ["webcam", "vision.segment", "bg.out"] }, { id: "analysis-fft-to-hydra", prompt: "strudel to out~, also strudel to fft~, fft~ analysis to hydra for audio-reactive visuals, hydra to bg.out", category: "mixed", expectedTypes: ["strudel", "out~", "object", "hydra", "bg.out"] }, { id: "analysis-fft-to-glsl", prompt: "osc~ to out~, also osc~ to fft~, fft~ feeding into glsl shader for visualization, glsl to bg.out", category: "mixed", expectedTypes: ["object", "glsl", "bg.out"] }], it = "patchies-ai-eval-results";
function Pt() {
  try {
    const R = localStorage.getItem(it);
    return R ? JSON.parse(R) : [];
  } catch {
    return [];
  }
}
function bt(R) {
  localStorage.setItem(it, JSON.stringify(R));
}
function qt() {
  localStorage.removeItem(it);
}
function Lt(R, z) {
  var _a;
  (_a = e(z)) == null ? void 0 : _a.abort();
}
function Ft(R, z) {
  qt(), p(z, [], true);
}
function Gt(R, z, C, S, Te) {
  const b = [], ae = e(z);
  b.push(`## Eval Results: ${ae.pass}/${ae.total} pass (${ae.total > 0 ? Math.round(ae.pass / ae.total * 100) : 0}%)`), b.push(`Pass: ${ae.pass} | Fail: ${ae.fail} | Error: ${ae.err}`), b.push("");
  for (const je of e(C)) {
    const W = S(je.id);
    if (!W) {
      b.push(`- [ ] **${je.id}** \u2014 not run`);
      continue;
    }
    const Se = Ye(W.status).with("pass", () => "- [x]").with("fail", () => "- [ ] FAIL").with("error", () => "- [ ] ERR").otherwise(() => "- [ ]");
    if (b.push(`${Se} **${je.id}** (${W.elapsedMs}ms) \u2014 ${je.prompt}`), W.status === "error" && W.errorMessage && b.push(`  - Error: ${W.errorMessage}`), W.status === "fail") {
      b.push(`  - Nodes: ${W.nodeTypes.join(", ")}`);
      for (const ee of W.edges) (ee.sourceError || ee.targetError) && (b.push(`  - ${ee.sourceType} \u2192 ${ee.targetType}: src=${ee.sourceHandle ?? "(none)"} tgt=${ee.targetHandle ?? "(none)"}`), ee.sourceError && b.push(`    - src: ${ee.sourceError}`), ee.targetError && b.push(`    - tgt: ${ee.targetError}`));
    }
  }
  navigator.clipboard.writeText(b.join(`
`)), p(Te, "Copied!"), setTimeout(() => p(Te, "Copy Results"), 1500);
}
function Jt(R, z) {
  var _a;
  (_a = e(z)) == null ? void 0 : _a.abort();
}
var Vt = (R, z) => p(z, "eval"), Ut = (R, z) => p(z, "single"), Bt = i('<button class="cursor-pointer rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700">Cancel</button> <div class="text-sm text-blue-400"> </div>', 1), Kt = (R, z, C) => z(e(C)), Wt = (R, z, C) => z(e(C)), Yt = i('<button class="cursor-pointer rounded bg-red-800 px-3 py-2 text-sm text-red-200 hover:bg-red-700"> </button>'), Qt = i('<button class="cursor-pointer rounded bg-zinc-700 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-600"> </button>'), Xt = i('<button class="cursor-pointer rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"> </button> <button class="cursor-pointer rounded bg-zinc-700 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-600">Clear Results</button> <!> <!>', 1), Zt = (R, z, C) => p(z, C, true), eo = i("<button> </button>"), to = (R, z, C) => p(z, e(C), true), oo = i("<button> </button>"), ro = i('<span class="animate-pulse rounded bg-zinc-800 px-1.5 py-0.5 text-blue-400"> </span>'), so = i('<div class="flex flex-wrap gap-1 text-xs text-zinc-500"></div>'), ao = i('<div class="space-y-1"><div class="h-2 w-full overflow-hidden rounded-full bg-zinc-800"><div class="h-full rounded-full bg-blue-500 transition-all duration-300"></div></div> <!></div>'), no = i('<span class="text-yellow-400"> </span>'), io = i('<div class="flex gap-4 text-sm"><span class="text-zinc-500"> </span> <span class="text-emerald-400"> </span> <span class="text-red-400"> </span> <!> <span class="text-zinc-600"> </span></div>'), co = (R, z, C, S) => p(z, e(C) ? null : e(S).id, true), lo = (R, z, C, S) => {
  (R.key === "Enter" || R.key === " ") && p(z, e(C) ? null : e(S).id, true);
}, po = i('<span class="text-xs text-red-400"> </span>'), uo = i('<span class="text-xs text-zinc-500"> </span> <!>', 1), vo = i('<span class="w-16 text-right text-xs text-zinc-600"> </span>'), go = (R, z, C) => {
  R.stopPropagation(), z(e(C));
}, mo = i('<button class="cursor-pointer rounded px-1.5 py-0.5 text-xs text-zinc-500 hover:bg-zinc-700 hover:text-zinc-300">run</button>'), xo = i('<div class="mb-2 text-yellow-400"> </div>'), yo = i('<span class="ml-1 rounded bg-zinc-800 px-1.5 py-0.5"> </span>'), _o = i('<div class="mb-2 text-zinc-400"><span class="text-zinc-500">Nodes:</span> <!></div>'), bo = i('<div class="ml-6 text-red-400"> </div>'), fo = i('<div class="ml-6 text-red-400"> </div>'), ho = i('<div><span class="text-zinc-500"></span> <span class="text-zinc-300"> </span> <span class="text-zinc-600">&rarr;</span> <span class="text-zinc-300"> </span> <code> </code> <span class="text-zinc-600">&rarr;</span> <code> </code></div> <!> <!>', 1), wo = i('<div class="space-y-1"></div>'), zo = i('<div class="border-t border-zinc-800 px-3 py-3 text-xs"><!> <!> <!> <div class="mt-2 text-zinc-600"> </div></div>'), To = i('<div><div role="button" tabindex="0" class="flex w-full cursor-pointer items-center gap-3 px-3 py-2 text-left text-sm hover:bg-zinc-800/50"><span> </span> <span class="min-w-0 flex-1 truncate text-zinc-300"> </span> <span class="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-500"> </span> <!> <!> <!></div> <!></div>'), jo = i('<div class="flex flex-wrap items-center gap-3"><!> <div class="flex items-center gap-1.5 text-xs text-zinc-500"><span>concurrency:</span> <!></div> <div class="ml-auto flex gap-1"></div></div> <!> <!> <div class="space-y-1"></div>', 1), ko = (R, z, C) => {
  R.key === "Enter" && !e(z) && C();
}, $o = i('<button class="cursor-pointer rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700">Cancel</button>'), Eo = i('<button class="cursor-pointer rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">Generate</button>'), Ho = i('<div class="animate-pulse text-sm text-blue-400"> </div>'), Io = i('<div class="rounded border border-red-700 bg-red-900/30 p-3 text-sm text-red-300"> </div>'), Mo = i('<div class="text-xs text-zinc-600"> </div>'), Ro = i('<details class="group"><summary class="cursor-pointer text-xs text-zinc-500 hover:text-zinc-300"> </summary> <div class="mt-2 max-h-60 overflow-y-auto rounded border border-zinc-800 bg-zinc-900/50 p-3 text-xs whitespace-pre-wrap text-zinc-400"> </div></details>'), Co = i('<span class="text-xs text-zinc-600"> </span>'), No = i('<div class="text-xs text-zinc-600"><span class="text-zinc-500">Expected:</span> </div>'), So = i('<div class="text-xs text-yellow-600">Unknown node type (no handle spec)</div>'), Ao = i("<span> </span>"), Oo = i('<div class="text-xs"><span class="text-zinc-500">Outlets used:</span> <!></div>'), Do = i("<span> </span>"), Po = i('<div class="text-xs"><span class="text-zinc-500">Inlets used:</span> <!></div>'), qo = i('<div class="space-y-2 rounded border border-zinc-700 bg-zinc-900 p-3"><div class="flex items-center gap-2"><span class="rounded bg-zinc-700 px-2 py-0.5 text-xs text-zinc-300"></span> <span class="font-semibold text-zinc-100"> </span> <!></div> <!> <details><summary class="cursor-pointer text-xs text-zinc-500 hover:text-zinc-300">Node Data</summary> <pre class="mt-1 overflow-x-auto rounded bg-zinc-950 p-2 text-xs text-zinc-400"> </pre></details> <!> <!></div>'), Lo = i('<span class="ml-2 text-sm text-red-400"> </span>'), Fo = i('<span class="ml-2 text-sm text-emerald-400">all valid</span>'), Go = i('<div><span class="font-semibold"> </span> </div>'), Jo = i('<div class="space-y-1 rounded border border-red-800 bg-red-900/20 p-3"><div class="text-xs font-semibold text-red-300">Validation Issues</div> <!></div>'), Vo = i('<button><div class="flex items-center gap-2 text-sm"><span class="rounded bg-zinc-700 px-1.5 py-0.5 text-xs"></span> <span class="text-zinc-400"><span class="text-zinc-100"> </span> <span class="text-zinc-600"> </span> <span class="mx-1">&rarr;</span> <span class="text-zinc-100"> </span> <span class="text-zinc-600"> </span></span></div> <div class="mt-2 grid grid-cols-2 gap-2 text-xs"><div><span class="text-zinc-500">sourceHandle:</span> <code> </code></div> <div><span class="text-zinc-500">targetHandle:</span> <code> </code></div></div></button>'), Uo = i('<span class="ml-1 rounded bg-zinc-800 px-1.5 py-0.5"> </span>'), Bo = i('<div class="space-y-1 rounded border border-zinc-800 bg-zinc-900 p-2 text-xs"><div class="text-zinc-300"> </div> <div class="grid grid-cols-2 gap-2"><div><span class="text-zinc-500">src:</span> <code class="text-emerald-300"> </code></div> <div><span class="text-zinc-500">tgt:</span> <code class="text-blue-300"> </code></div></div></div>'), Ko = i('<h2 class="mt-6 border-t border-zinc-800 pt-4 text-lg font-semibold text-zinc-300">After Insertion</h2> <p class="text-xs text-zinc-500">Result of handleMultiObjectInsert() \u2014 final node IDs and edge connections</p> <div class="space-y-2"><div class="text-xs text-zinc-400"><span class="text-zinc-500">Nodes:</span> <!></div> <!></div>', 1), Wo = i('<div class="grid grid-cols-1 gap-6 lg:grid-cols-2"><div class="space-y-4"><h2 class="text-lg font-semibold text-zinc-300"> </h2> <!></div> <div class="space-y-4"><h2 class="text-lg font-semibold text-zinc-300"> <!></h2> <!> <!> <!></div></div> <details class="mt-6"><summary class="cursor-pointer text-xs text-zinc-500 hover:text-zinc-300">Raw JSON Output</summary> <pre class="mt-2 max-h-96 overflow-x-auto overflow-y-auto rounded border border-zinc-800 bg-zinc-900 p-4 text-xs text-zinc-400"> </pre></details>', 1), Yo = i('<div class="flex items-end gap-3"><div class="flex-1"><label for="prompt" class="mb-1 block text-xs text-zinc-500">Prompt</label> <input id="prompt" type="text" class="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-blue-500 focus:outline-none"/></div> <!></div> <!> <!> <!> <!> <!>', 1), Qo = i('<div class="debug-page min-h-screen bg-zinc-950 p-6 font-mono text-zinc-200"><div class="mx-auto max-w-6xl space-y-6"><header class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-zinc-100">Multi-Object AI Debug</h1> <p class="mt-1 text-sm text-zinc-500">Test handle ID correctness for multi-object generation</p></div> <div class="flex gap-2"><button>Eval Suite</button> <button>Single Prompt</button></div></header> <!></div></div>');
function dr(R, z) {
  Mt(z, true);
  let C = G("eval"), S = G(We([])), Te = G(false), b = G(We({ completed: 0, total: 0, running: [] })), ae = G(null), je = G(null), W = G("all"), Se = G(3), ee = G("slider controlling oscillator frequency"), Ie = G(false), Ae = G(null), Me = G(We([])), Ge = G(We([])), J = G(null), Oe = G(null), Qe = G(null), Je = G(null), De = G(null);
  Ht(() => {
    p(S, Pt(), true);
  });
  const ft = pe(() => ["all", ...new Set(nt.map((n) => n.category))]), Pe = pe(() => e(W) === "all" ? nt : nt.filter((n) => n.category === e(W))), dt = pe(() => {
    const n = e(S).filter((c) => c.status === "pass").length, l = e(S).filter((c) => c.status === "fail").length, d = e(S).filter((c) => c.status === "error").length, u = e(S).length;
    return { pass: n, fail: l, err: d, total: u };
  }), Xe = pe(() => e(Pe).filter((n) => {
    const l = Ze(n.id);
    return l && (l.status === "fail" || l.status === "error");
  }));
  function Ze(n) {
    return e(S).findLast((l) => l.caseId === n);
  }
  async function ct(n) {
    p(Te, true);
    const l = new AbortController();
    p(ae, l, true), p(b, { completed: 0, total: n.length, running: [] }, true);
    const d = [...n];
    let u = 0;
    async function c() {
      for (; d.length > 0 && !l.signal.aborted; ) {
        const Y = d.shift();
        p(b, { ...e(b), running: [...e(b).running, Y.id] }, true);
        const h = await lt(Y, l.signal);
        u++, p(S, [...e(S).filter((V) => V.caseId !== Y.id), h], true), bt(e(S)), p(b, { completed: u, total: n.length, running: e(b).running.filter((V) => V !== Y.id) }, true);
      }
    }
    const xe = Array.from({ length: Math.min(e(Se), n.length) }, () => c());
    await Promise.all(xe), p(Te, false), p(ae, null);
  }
  async function lt(n, l) {
    const d = performance.now();
    try {
      const u = await _t(n.prompt, () => {
      }, l, () => {
      }), c = Math.round(performance.now() - d);
      if (!u) return { caseId: n.id, status: "error", timestamp: Date.now(), elapsedMs: c, nodeTypes: [], edges: [], errorCount: 0, warnCount: 0, errorMessage: "AI returned null" };
      const xe = u.edges.map((h) => {
        const V = u.nodes[h.source], ke = u.nodes[h.target], Re = h.sourceHandle && V ? Fe(V.type, h.sourceHandle, "out") : h.sourceHandle ? `source index ${h.source} out of bounds` : "missing sourceHandle", Ce = h.targetHandle && ke ? Fe(ke.type, h.targetHandle, "in") : null;
        return { sourceType: (V == null ? void 0 : V.type) ?? "?", targetType: (ke == null ? void 0 : ke.type) ?? "?", sourceHandle: h.sourceHandle, targetHandle: h.targetHandle, sourceError: Re, targetError: Ce };
      }), Y = xe.filter((h) => h.sourceError || h.targetError).length;
      return { caseId: n.id, status: Y > 0 ? "fail" : "pass", timestamp: Date.now(), elapsedMs: c, nodeTypes: u.nodes.map((h) => h.type), edges: xe, errorCount: Y, warnCount: 0 };
    } catch (u) {
      return { caseId: n.id, status: "error", timestamp: Date.now(), elapsedMs: Math.round(performance.now() - d), nodeTypes: [], edges: [], errorCount: 0, warnCount: 0, errorMessage: u instanceof Error ? u.message : String(u) };
    }
  }
  async function ht(n) {
    p(b, { ...e(b), running: [...e(b).running, n.id] }, true);
    const l = await lt(n, new AbortController().signal);
    p(S, [...e(S).filter((d) => d.caseId !== n.id), l], true), bt(e(S)), p(b, { ...e(b), running: e(b).running.filter((d) => d !== n.id) }, true);
  }
  let pt = G("Copy Results");
  function wt(n) {
    return Ye(n).with("pass", () => "text-emerald-400").with("fail", () => "text-red-400").with("error", () => "text-yellow-400").with("running", () => "text-blue-400").otherwise(() => "text-zinc-500");
  }
  function zt(n) {
    return Ye(n).with("pass", () => "border-emerald-800").with("fail", () => "border-red-800 bg-red-900/10").with("error", () => "border-yellow-800 bg-yellow-900/10").otherwise(() => "border-zinc-700");
  }
  async function ut() {
    p(Ae, null), p(Me, [], true), p(Ge, [], true), p(J, null), p(Oe, null), p(Je, null), p(De, null), p(Ie, true);
    const n = new AbortController();
    p(Qe, n, true);
    const l = performance.now();
    try {
      const d = await _t(e(ee), (u) => {
        p(Ge, u, true);
      }, n.signal, (u) => {
        p(Me, [...e(Me), u], true);
      });
      if (p(De, Math.round(performance.now() - l), true), d) {
        p(J, d, true);
        const u = await Dt({ objectNodes: d.nodes, simplifiedEdges: d.edges, basePosition: { x: 0, y: 0 }, nodeIdCounter: 1, edgeIdCounter: 1 });
        p(Oe, u, true);
      } else p(Ae, "AI returned null (no plan generated)");
    } catch (d) {
      p(De, Math.round(performance.now() - l), true), p(Ae, d instanceof Error ? d.message : String(d), true);
    } finally {
      p(Ie, false), p(Qe, null);
    }
  }
  function Tt(n, l) {
    const d = [];
    for (let u = 0; u < n.length; u++) {
      const c = n[u];
      if (c.source < 0 || c.source >= l.length) {
        d.push({ edgeIndex: u, issue: `source index ${c.source} out of bounds (max: ${l.length - 1})`, severity: "error" });
        continue;
      }
      if (c.target < 0 || c.target >= l.length) {
        d.push({ edgeIndex: u, issue: `target index ${c.target} out of bounds (max: ${l.length - 1})`, severity: "error" });
        continue;
      }
      const xe = l[c.source], Y = l[c.target];
      if (c.sourceHandle) {
        const h = Fe(xe.type, c.sourceHandle, "out");
        h && d.push({ edgeIndex: u, issue: `sourceHandle: ${h}`, severity: "error" });
      } else d.push({ edgeIndex: u, issue: "missing sourceHandle", severity: "error" });
      if (c.targetHandle) {
        const h = Fe(Y.type, c.targetHandle, "in");
        h && d.push({ edgeIndex: u, issue: `targetHandle: ${h}`, severity: "error" });
      } else Y.type === "glsl" && d.push({ edgeIndex: u, issue: "missing targetHandle (will be auto-filled for GLSL)", severity: "warn" });
      if (c.source === c.target && d.push({ edgeIndex: u, issue: "self-connection (source === target)", severity: "error" }), c.sourceHandle && c.targetHandle) {
        const h = gt(c.sourceHandle), V = gt(c.targetHandle);
        h && V && h !== V && h !== "message" && V !== "message" && d.push({ edgeIndex: u, issue: `type mismatch: source=${h}, target=${V}`, severity: "error" });
      }
    }
    return d;
  }
  function Ve(n, l, d) {
    return Fe(n, l, d) === null;
  }
  function vt(n) {
    if (n === "object") return { inlets: "{audio|message}-in-{N}", outlets: "{audio|message}-out-{N}" };
    const l = Ot[n];
    if (!l) return null;
    const d = (u) => Ye(u).with({ kind: "fixed" }, (c) => c.handles.length > 0 ? c.handles.join(", ") : "(none)").with({ kind: "indexed" }, (c) => `${c.prefix}{N}`).with({ kind: "dynamic" }, (c) => c.patterns.join(" | ")).exhaustive();
    return { inlets: d(l.inlets), outlets: d(l.outlets) };
  }
  function gt(n) {
    const l = n.match(/^(audio|video|message|analysis)-/);
    return l ? l[1] : null;
  }
  function jt(n, l) {
    return l.some((d) => d.edgeIndex === n && d.severity === "error");
  }
  var et = Qo(), mt = o(et), tt = o(mt), xt = r(o(tt), 2), ot = o(xt);
  ot.__click = [Vt, C];
  var yt = r(ot, 2);
  yt.__click = [Ut, C], t(xt), t(tt);
  var kt = r(tt, 2);
  {
    var $t = (n) => {
      var l = jo(), d = ze(l), u = o(d);
      {
        var c = (H) => {
          var f = Bt(), y = ze(f);
          y.__click = [Lt, ae];
          var v = r(y, 2), g = o(v);
          t(v), _(() => s(g, `${e(b).completed ?? ""}/${e(b).total ?? ""} done (${e(b).running.length ?? ""} in flight)`)), a(H, f);
        }, xe = (H) => {
          var f = Xt(), y = ze(f);
          y.__click = [Kt, ct, Pe];
          var v = o(y);
          t(y);
          var g = r(y, 2);
          g.__click = [Ft, S];
          var x = r(g, 2);
          {
            var j = (D) => {
              var A = Yt();
              A.__click = [Wt, ct, Xe];
              var te = o(A);
              t(A), _(() => s(te, `Re-run Failed (${e(Xe).length ?? ""})`)), a(D, A);
            };
            w(x, (D) => {
              e(Xe).length > 0 && D(j);
            });
          }
          var L = r(x, 2);
          {
            var U = (D) => {
              var A = Qt();
              A.__click = [Gt, dt, Pe, Ze, pt];
              var te = o(A, true);
              t(A), _(() => s(te, e(pt))), a(D, A);
            };
            w(L, (D) => {
              e(S).length > 0 && D(U);
            });
          }
          _(() => s(v, `Run ${(e(W) === "all" ? "All" : e(W)) ?? ""} (${e(Pe).length ?? ""})`)), a(H, f);
        };
        w(u, (H) => {
          e(Te) ? H(c) : H(xe, false);
        });
      }
      var Y = r(u, 2), h = r(o(Y), 2);
      se(h, 16, () => [1, 3, 5, 8], ue, (H, f) => {
        var y = eo();
        y.__click = [Zt, Se, f];
        var v = o(y, true);
        t(y), _(() => {
          Z(y, 1, `cursor-pointer rounded px-1.5 py-0.5 ${e(Se) === f ? "bg-zinc-600 text-zinc-100" : "bg-zinc-800 text-zinc-500 hover:text-zinc-300"}`), y.disabled = e(Te), s(v, f);
        }), a(H, y);
      }), t(Y);
      var V = r(Y, 2);
      se(V, 21, () => e(ft), ue, (H, f) => {
        var y = oo();
        y.__click = [to, W, f];
        var v = o(y, true);
        t(y), _(() => {
          Z(y, 1, `cursor-pointer rounded px-2 py-1 text-xs ${e(W) === e(f) ? "bg-zinc-600 text-zinc-100" : "bg-zinc-800 text-zinc-500 hover:text-zinc-300"}`), s(v, e(f));
        }), a(H, y);
      }), t(V), t(d);
      var ke = r(d, 2);
      {
        var Re = (H) => {
          var f = ao();
          const y = pe(() => e(b).total > 0 ? e(b).completed / e(b).total * 100 : 0);
          var v = o(f), g = o(v);
          t(v);
          var x = r(v, 2);
          {
            var j = (L) => {
              var U = so();
              se(U, 21, () => e(b).running, ue, (D, A) => {
                var te = ro(), be = o(te, true);
                t(te), _(() => s(be, e(A))), a(D, te);
              }), t(U), a(L, U);
            };
            w(x, (L) => {
              e(b).running.length > 0 && L(j);
            });
          }
          t(f), _(() => St(g, `width: ${e(y) ?? ""}%`)), a(H, f);
        };
        w(ke, (H) => {
          e(Te) && H(Re);
        });
      }
      var Ce = r(ke, 2);
      {
        var Ue = (H) => {
          var f = io();
          const y = pe(() => e(dt));
          var v = o(f), g = o(v);
          t(v);
          var x = r(v, 2), j = o(x);
          t(x);
          var L = r(x, 2), U = o(L);
          t(L);
          var D = r(L, 2);
          {
            var A = (ve) => {
              var fe = no(), qe = o(fe);
              t(fe), _(() => s(qe, `${e(y).err ?? ""} error`)), a(ve, fe);
            };
            w(D, (ve) => {
              e(y).err > 0 && ve(A);
            });
          }
          var te = r(D, 2), be = o(te);
          t(te), t(f), _((ve) => {
            s(g, `${e(y).total ?? ""} tested`), s(j, `${e(y).pass ?? ""} pass`), s(U, `${e(y).fail ?? ""} fail`), s(be, `${ve ?? ""}% pass rate`);
          }, [() => e(y).total > 0 ? Math.round(e(y).pass / e(y).total * 100) : 0]), a(H, f);
        };
        w(Ce, (H) => {
          e(S).length > 0 && H(Ue);
        });
      }
      var Be = r(Ce, 2);
      se(Be, 21, () => e(Pe), (H) => H.id, (H, f) => {
        var y = To();
        const v = pe(() => Ze(e(f).id)), g = pe(() => e(je) === e(f).id);
        var x = o(y);
        x.__click = [co, je, g, f], x.__keydown = [lo, je, g, f];
        var j = o(x), L = o(j, true);
        t(j);
        var U = r(j, 2), D = o(U, true);
        t(U);
        var A = r(U, 2), te = o(A, true);
        t(A);
        var be = r(A, 2);
        {
          var ve = (P) => {
            var B = uo(), ne = ze(B), Ne = o(ne);
            t(ne);
            var $e = r(ne, 2);
            {
              var Le = (k) => {
                var m = po(), N = o(m);
                t(m), _(() => s(N, `${e(v).errorCount ?? ""} bad`)), a(k, m);
              };
              w($e, (k) => {
                e(v).errorCount > 0 && k(Le);
              });
            }
            _(() => s(Ne, `${e(v).edges.length ?? ""} edge${e(v).edges.length !== 1 ? "s" : ""}`)), a(P, B);
          };
          w(be, (P) => {
            e(v) && e(v).status !== "error" && P(ve);
          });
        }
        var fe = r(be, 2);
        {
          var qe = (P) => {
            var B = vo(), ne = o(B);
            t(B), _(() => s(ne, `${e(v).elapsedMs ?? ""}ms`)), a(P, B);
          };
          w(fe, (P) => {
            e(v) && P(qe);
          });
        }
        var rt = r(fe, 2);
        {
          var st = (P) => {
            var B = mo();
            B.__click = [go, ht, f], a(P, B);
          };
          w(rt, (P) => {
            e(b).running.includes(e(f).id) || P(st);
          });
        }
        t(x);
        var Ke = r(x, 2);
        {
          var at = (P) => {
            var B = zo(), ne = o(B);
            {
              var Ne = (E) => {
                var I = xo(), q = o(I);
                t(I), _(() => s(q, `Error: ${e(v).errorMessage ?? ""}`)), a(E, I);
              };
              w(ne, (E) => {
                e(v).errorMessage && E(Ne);
              });
            }
            var $e = r(ne, 2);
            {
              var Le = (E) => {
                var I = _o(), q = r(o(I), 2);
                se(q, 17, () => e(v).nodeTypes, ue, (T, F) => {
                  var Q = yo(), ie = o(Q, true);
                  t(Q), _(() => s(ie, e(F))), a(T, Q);
                }), t(I), a(E, I);
              };
              w($e, (E) => {
                e(v).nodeTypes.length > 0 && E(Le);
              });
            }
            var k = r($e, 2);
            {
              var m = (E) => {
                var I = wo();
                se(I, 21, () => e(v).edges, ue, (q, T, F) => {
                  var Q = ho();
                  const ie = pe(() => !!(e(T).sourceError || e(T).targetError));
                  var ge = ze(Q), de = o(ge);
                  de.textContent = `E${F}`;
                  var ce = r(de, 2), he = o(ce, true);
                  t(ce);
                  var ye = r(ce, 4), _e = o(ye, true);
                  t(ye);
                  var le = r(ye, 2), Ee = o(le, true);
                  t(le);
                  var He = r(le, 4), M = o(He, true);
                  t(He), t(ge);
                  var $ = r(ge, 2);
                  {
                    var oe = (O) => {
                      var X = bo(), we = o(X);
                      t(X), _(() => s(we, `src: ${e(T).sourceError ?? ""}`)), a(O, X);
                    };
                    w($, (O) => {
                      e(T).sourceError && O(oe);
                    });
                  }
                  var re = r($, 2);
                  {
                    var me = (O) => {
                      var X = fo(), we = o(X);
                      t(X), _(() => s(we, `tgt: ${e(T).targetError ?? ""}`)), a(O, X);
                    };
                    w(re, (O) => {
                      e(T).targetError && O(me);
                    });
                  }
                  _(() => {
                    Z(ge, 1, `flex items-start gap-2 rounded p-1.5 ${e(ie) ? "bg-red-900/20" : "bg-zinc-900/50"}`), s(he, e(T).sourceType), s(_e, e(T).targetType), Z(le, 1, `rounded px-1 py-0.5 ${e(T).sourceError ? "bg-red-900/40 text-red-300" : "bg-emerald-900/40 text-emerald-300"}`), s(Ee, e(T).sourceHandle ?? "(none)"), Z(He, 1, `rounded px-1 py-0.5 ${e(T).targetError ? "bg-red-900/40 text-red-300" : "bg-blue-900/40 text-blue-300"}`), s(M, e(T).targetHandle ?? "(none)");
                  }), a(q, Q);
                }), t(I), a(E, I);
              };
              w(k, (E) => {
                e(v).edges.length > 0 && E(m);
              });
            }
            var N = r(k, 2), K = o(N, true);
            t(N), t(B), _((E) => s(K, E), [() => new Date(e(v).timestamp).toLocaleString()]), a(P, B);
          };
          w(Ke, (P) => {
            e(g) && e(v) && P(at);
          });
        }
        t(y), _((P, B, ne) => {
          Z(y, 1, `rounded border ${P ?? ""}`), Z(j, 1, `w-12 text-xs font-semibold ${B ?? ""}`), s(L, ne), s(D, e(f).prompt), s(te, e(f).category);
        }, [() => e(v) ? zt(e(v).status) : "border-zinc-800", () => e(b).running.includes(e(f).id) ? "animate-pulse text-blue-400" : e(v) ? wt(e(v).status) : "text-zinc-600", () => e(b).running.includes(e(f).id) ? "RUN" : e(v) ? e(v).status.toUpperCase() : "\u2014"]), a(H, y);
      }), t(Be), a(n, l);
    }, Et = (n) => {
      var l = Yo(), d = ze(l), u = o(d), c = r(o(u), 2);
      Nt(c), c.__keydown = [ko, Ie, ut], t(u);
      var xe = r(u, 2);
      {
        var Y = (g) => {
          var x = $o();
          x.__click = [Jt, Qe], a(g, x);
        }, h = (g) => {
          var x = Eo();
          x.__click = ut, a(g, x);
        };
        w(xe, (g) => {
          e(Ie) ? g(Y) : g(h, false);
        });
      }
      t(d);
      var V = r(d, 2);
      {
        var ke = (g) => {
          var x = Ho(), j = o(x, true);
          t(x), _((L) => s(j, L), [() => e(Ge).length > 0 ? `Generating: ${e(Ge).join(", ")}` : "Planning..."]), a(g, x);
        };
        w(V, (g) => {
          e(Ie) && g(ke);
        });
      }
      var Re = r(V, 2);
      {
        var Ce = (g) => {
          var x = Io(), j = o(x, true);
          t(x), _(() => s(j, e(Ae))), a(g, x);
        };
        w(Re, (g) => {
          e(Ae) && g(Ce);
        });
      }
      var Ue = r(Re, 2);
      {
        var Be = (g) => {
          var x = Mo(), j = o(x);
          t(x), _(() => s(j, `Completed in ${e(De) ?? ""}ms`)), a(g, x);
        };
        w(Ue, (g) => {
          e(De) !== null && g(Be);
        });
      }
      var H = r(Ue, 2);
      {
        var f = (g) => {
          var x = Ro(), j = o(x), L = o(j);
          t(j);
          var U = r(j, 2), D = o(U, true);
          t(U), t(x), _((A) => {
            s(L, `AI Thinking (${e(Me).length ?? ""} entries)`), s(D, A);
          }, [() => e(Me).join(`

---

`)]), a(g, x);
        };
        w(H, (g) => {
          e(Me).length > 0 && g(f);
        });
      }
      var y = r(H, 2);
      {
        var v = (g) => {
          var x = Wo();
          const j = pe(() => Tt(e(J).edges, e(J).nodes));
          var L = ze(x), U = o(L), D = o(U), A = o(D);
          t(D);
          var te = r(D, 2);
          se(te, 17, () => e(J).nodes, ue, (k, m, N) => {
            var K = qo(), E = o(K), I = o(E);
            I.textContent = `#${N}`;
            var q = r(I, 2), T = o(q, true);
            t(q);
            var F = r(q, 2);
            {
              var Q = (M) => {
                var $ = Co(), oe = o($);
                t($), _(() => s(oe, `(${e(m).position.x ?? ""}, ${e(m).position.y ?? ""})`)), a(M, $);
              };
              w(F, (M) => {
                e(m).position && M(Q);
              });
            }
            t(E);
            var ie = r(E, 2);
            {
              var ge = (M) => {
                var $ = Ct();
                const oe = pe(() => vt(e(m).type));
                var re = ze($);
                {
                  var me = (O) => {
                    var X = No(), we = r(o(X));
                    t(X), _(() => s(we, ` in=[${e(oe).inlets ?? ""}] out=[${e(oe).outlets ?? ""}]`)), a(O, X);
                  };
                  w(re, (O) => {
                    e(oe) && O(me);
                  });
                }
                a(M, $);
              }, de = (M) => {
                var $ = So();
                a(M, $);
              };
              w(ie, (M) => {
                vt(e(m).type) ? M(ge) : M(de, false);
              });
            }
            var ce = r(ie, 2), he = r(o(ce), 2), ye = o(he, true);
            t(he), t(ce);
            var _e = r(ce, 2);
            {
              var le = (M) => {
                var $ = Oo(), oe = r(o($), 2);
                se(oe, 17, () => e(J).edges.filter((re) => re.source === N), ue, (re, me) => {
                  var O = Ao(), X = o(O, true);
                  t(O), _((we) => {
                    Z(O, 1, `ml-1 rounded px-1.5 py-0.5 ${we ?? ""}`), s(X, e(me).sourceHandle ?? "(none)");
                  }, [() => Ve(e(m).type, e(me).sourceHandle ?? "", "out") ? "bg-emerald-900/50 text-emerald-300" : "bg-red-900/50 text-red-300"]), a(re, O);
                }), t($), a(M, $);
              };
              w(_e, (M) => {
                e(J).edges.filter(($) => $.source === N).length > 0 && M(le);
              });
            }
            var Ee = r(_e, 2);
            {
              var He = (M) => {
                var $ = Po(), oe = r(o($), 2);
                se(oe, 17, () => e(J).edges.filter((re) => re.target === N), ue, (re, me) => {
                  var O = Do(), X = o(O, true);
                  t(O), _((we) => {
                    Z(O, 1, `ml-1 rounded px-1.5 py-0.5 ${we ?? ""}`), s(X, e(me).targetHandle ?? "(none)");
                  }, [() => Ve(e(m).type, e(me).targetHandle ?? "", "in") ? "bg-blue-900/50 text-blue-300" : "bg-red-900/50 text-red-300"]), a(re, O);
                }), t($), a(M, $);
              };
              w(Ee, (M) => {
                e(J).edges.filter(($) => $.target === N).length > 0 && M(He);
              });
            }
            t(K), _((M) => {
              s(T, e(m).type), s(ye, M);
            }, [() => JSON.stringify(e(m).data, null, 2)]), a(k, K);
          }), t(U);
          var be = r(U, 2), ve = o(be), fe = o(ve), qe = r(fe);
          {
            var rt = (k) => {
              var m = Lo(), N = o(m);
              t(m), _(() => s(N, `${e(j).length ?? ""} issue${e(j).length !== 1 ? "s" : ""}`)), a(k, m);
            }, st = (k) => {
              var m = Fo();
              a(k, m);
            };
            w(qe, (k) => {
              e(j).length > 0 ? k(rt) : k(st, false);
            });
          }
          t(ve);
          var Ke = r(ve, 2);
          {
            var at = (k) => {
              var m = Jo(), N = r(o(m), 2);
              se(N, 17, () => e(j), ue, (K, E) => {
                var I = Go(), q = o(I), T = o(q, true);
                t(q);
                var F = r(q);
                t(I), _(() => {
                  Z(I, 1, `text-xs ${e(E).severity === "error" ? "text-red-400" : "text-yellow-400"}`), s(T, e(E).severity === "error" ? "ERR" : "WARN"), s(F, ` Edge #${e(E).edgeIndex ?? ""}: ${e(E).issue ?? ""}`);
                }), a(K, I);
              }), t(m), a(k, m);
            };
            w(Ke, (k) => {
              e(j).length > 0 && k(at);
            });
          }
          var P = r(Ke, 2);
          se(P, 17, () => e(J).edges, ue, (k, m, N) => {
            var K = Vo();
            const E = pe(() => jt(N, e(j)));
            K.__click = () => {
              p(Je, e(Je) === N ? null : N, true);
            };
            var I = o(K), q = o(I);
            q.textContent = `E${N}`;
            var T = r(q, 2), F = o(T), Q = o(F);
            t(F);
            var ie = r(F, 2), ge = o(ie);
            t(ie);
            var de = r(ie, 4), ce = o(de);
            t(de);
            var he = r(de, 2), ye = o(he);
            t(he), t(T), t(I);
            var _e = r(I, 2), le = o(_e), Ee = r(o(le), 2), He = o(Ee, true);
            t(Ee), t(le);
            var M = r(le, 2), $ = r(o(M), 2), oe = o($, true);
            t($), t(M), t(_e), t(K), _((re, me) => {
              var _a, _b;
              Z(K, 1, `w-full cursor-pointer space-y-1 rounded border bg-zinc-900 p-3 text-left transition-colors ${e(E) ? "border-red-700 bg-red-900/10" : "border-zinc-700"} ${e(Je) === N ? "ring-2 ring-blue-500" : ""}`), s(Q, `#${e(m).source ?? ""}`), s(ge, `(${((_a = e(J).nodes[e(m).source]) == null ? void 0 : _a.type) ?? ""})`), s(ce, `#${e(m).target ?? ""}`), s(ye, `(${((_b = e(J).nodes[e(m).target]) == null ? void 0 : _b.type) ?? ""})`), Z(Ee, 1, `rounded px-1 py-0.5 ${re ?? ""}`), s(He, e(m).sourceHandle ?? "undefined"), Z($, 1, `rounded px-1 py-0.5 ${me ?? ""}`), s(oe, e(m).targetHandle ?? "undefined");
            }, [() => {
              var _a;
              return e(m).sourceHandle ? Ve((_a = e(J).nodes[e(m).source]) == null ? void 0 : _a.type, e(m).sourceHandle, "out") ? "bg-emerald-900/40 text-emerald-300" : "bg-red-900/40 text-red-300" : "bg-yellow-900/40 text-yellow-300";
            }, () => {
              var _a;
              return e(m).targetHandle ? Ve((_a = e(J).nodes[e(m).target]) == null ? void 0 : _a.type, e(m).targetHandle, "in") ? "bg-blue-900/40 text-blue-300" : "bg-red-900/40 text-red-300" : "bg-yellow-900/40 text-yellow-300";
            }]), a(k, K);
          });
          var B = r(P, 2);
          {
            var ne = (k) => {
              var m = Ko(), N = r(ze(m), 4), K = o(N), E = r(o(K), 2);
              se(E, 17, () => e(Oe).newNodes, ue, (q, T) => {
                var F = Uo(), Q = o(F, true);
                t(F), _(() => s(Q, e(T).id)), a(q, F);
              }), t(K);
              var I = r(K, 2);
              se(I, 17, () => e(Oe).newEdges, ue, (q, T) => {
                var F = Bo(), Q = o(F), ie = o(Q);
                t(Q);
                var ge = r(Q, 2), de = o(ge), ce = r(o(de), 2), he = o(ce, true);
                t(ce), t(de);
                var ye = r(de, 2), _e = r(o(ye), 2), le = o(_e, true);
                t(_e), t(ye), t(ge), t(F), _(() => {
                  s(ie, `${e(T).id ?? ""}: ${e(T).source ?? ""} \u2192 ${e(T).target ?? ""}`), s(he, e(T).sourceHandle ?? "undefined"), s(le, e(T).targetHandle ?? "undefined");
                }), a(q, F);
              }), t(N), a(k, m);
            };
            w(B, (k) => {
              e(Oe) && k(ne);
            });
          }
          t(be), t(L);
          var Ne = r(L, 2), $e = r(o(Ne), 2), Le = o($e, true);
          t($e), t(Ne), _((k) => {
            s(A, `Nodes (${e(J).nodes.length ?? ""})`), s(fe, `Edges (${e(J).edges.length ?? ""}) `), s(Le, k);
          }, [() => JSON.stringify(e(J), null, 2)]), a(g, x);
        };
        w(y, (g) => {
          e(J) && g(v);
        });
      }
      _(() => c.disabled = e(Ie)), At(c, () => e(ee), (g) => p(ee, g)), a(n, l);
    };
    w(kt, (n) => {
      e(C) === "eval" ? n($t) : n(Et, false);
    });
  }
  t(mt), t(et), _(() => {
    Z(ot, 1, `cursor-pointer rounded px-3 py-1.5 text-xs ${e(C) === "eval" ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"}`), Z(yt, 1, `cursor-pointer rounded px-3 py-1.5 text-xs ${e(C) === "single" ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"}`);
  }), a(R, et), Rt();
}
It(["click", "keydown"]);
export {
  dr as component
};
