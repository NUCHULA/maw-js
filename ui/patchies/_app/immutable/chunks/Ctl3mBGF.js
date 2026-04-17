var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { K as g } from "./BOuAxtfB.js";
import { g as z, e as P, O as G } from "./Btif9Z9d.js";
import { o as R } from "./CrEetURD.js";
const u = [1280, 720], m = 4, an = [Math.round(u[0] / m), Math.round(u[1] / m)];
function sn() {
  const t = typeof window < "u" ? window.innerWidth : u[0], e = typeof window < "u" ? window.innerHeight : u[1];
  return [Math.max(1, Math.min(8192, t)), Math.max(1, Math.min(8192, e))];
}
const $ = [252, 164];
function rn(t, e) {
  const [n, o] = $;
  if (t <= n && e <= o) return [t, e];
  const a = Math.min(n / t, o / e);
  return [Math.max(1, Math.floor(t * a)), Math.max(1, Math.floor(e * a))];
}
const q = `// uniforms: iResolution, iTime, iMouse
// you can define your own uniforms!

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color = vec3(0.0);
    float time = iTime * 0.5;

    color.r = sin(uv.x * 10.0 + time) * 0.5 + 0.5;
    color.g = sin(uv.y * 10.0 + time * 1.2) * 0.5 + 0.5;
    color.b = sin((uv.x + uv.y) * 5.0 + time * 0.8) * 0.5 + 0.5;

    float brightness = sin(time * 2.0) * 0.2 + 0.8;
    color *= brightness;
    fragColor = vec4(color, 1.0);
}`, b = "console.log(1 + 1)", W = `setcpm(60)

n("<0 -3>, 2 4 <[6,8] [7,9]>")
.scale("<C:major D:mixolydian>/4")
.sound("piano")`, V = "little rainicorn, high quality, 16:9 aspect ratio", B = "$$$ Royal - Mashup (431)", v = `function draw() {
  ctx.clearRect(0, 0, width, height)

  const time = clock.time * 2
  const x = width/2 + Math.cos(time) * 60
  const y = height/2 + Math.sin(time) * 50

  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.arc(x, y, 80, 0, Math.PI * 2)
  ctx.fill()

  requestAnimationFrame(draw)
}

draw()`, Y = `const shader = await glsl({
  Clear: 0,
  Mesh: [10, 10],
  VP: \`XY*0.8+sin(t+XY.yx*2.0)*0.2,0,1\`,
  FP: \`UV,0.5,1\`,
});

function render({ t }) {
  shader({ t });
}`, X = `import numpy as np

np.arange(15).reshape(3, 5)`, K = `SinOsc s => JCRev r => dac;

.2 => s.gain;
.1 => r.mix;

[ 0, 2, 4, 7, 9, 11 ] @=> int hi[];

while (true) {
  Std.mtof(
    45 + Std.rand2(0, 3) * 12 +
    hi[Std.rand2(0, hi.cap() - 1)]
  ) => s.freq;

  120::ms => now;
}`, J = `function process(inputs, outputs) {
  outputs[0].forEach((channel) => {
    for (let i = 0; i < channel.length; i++) {
      let t = (currentFrame + i) / sampleRate
      channel[i] = Math.sin(t * 440 * Math.PI * 2)
    }
  })
}`, Z = `setPortCount(1)

const synth = new Tone.Oscillator(440, 'sine').start()
synth.connect(outputNode)

recv(m => {
  synth.frequency.value = m;
})
`, Q = `setPortCount(1)

let [rate, setRate] = core.createRef("const", {
  value: 440
}, []);

recv(freq => setRate({ value: freq }))

core.render(el.cycle(rate), el.cycle(rate))`, ee = `setPortCount(1)

await sonic.loadSynthDef('sonic-pi-prophet')

// Trigger synth when receiving messages
recv(msg => {
  const note = typeof msg === 'number' ? msg : 60

  sonic.send('/s_new', 'sonic-pi-prophet', -1, 0, 0, 'note', note, 'release', 2, 'out_bus', outBus)
})`, te = `instr 1
  ioct = octcps(p4)
  kpwm = oscili(.1, 5)
  asig = vco2(p5, p4, 4, .5 + kpwm)
  asig += vco2(p5, p4 * 2)

  idepth = 3
  acut = transegr:a(0, .002, 0, idepth, .5, -4.2, 0.001, .5, -4.2, 0)
  asig = zdf_2pole(asig, cpsoct(ioct + acut), 0.5)

  asig *= linsegr:a(1, p3, 1, .5, 0)

  out(asig, asig)
endin

instr Main
  inotes[] fillarray 60, 67, 63, 65, 62
  ioct[] fillarray 0,1,0,0,1
  inote = inotes[p4 % 37 % 11 % 5] + 12 * ioct[p4 % 41 % 17 % 5]
  schedule(1, 0, .25, cpsmidinn(inote), 0.25)

  if (p4 % 64 % 37 % 17 % 11 == 0 && inote != 74 && inote != 62) then
    schedule(1, 0, .5, cpsmidinn(inote + 7), 0.125)
  endif

  schedule(p1, .25, .25, p4 + 1)
endin

schedule("Main", 0, 0, 0)`, ne = `setPortCount(1, 1)
noOutput()
setDrawMode('interact')

// x, y are normalized 0\u20131 coords; width/height are window dimensions
onPointer(data => send(data))

function draw() {
  ctx.clearRect(0, 0, width, height)

  if (mouse.down) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.beginPath()
    ctx.arc(mouse.x * width, mouse.y * height, 30, 0, Math.PI * 2)
    ctx.fill()
  }
}`, w = `const { Scene, PerspectiveCamera, BoxGeometry, Mesh, MeshNormalMaterial } = THREE

const scene = new Scene()
const camera = new PerspectiveCamera(75, width / height, 0.1, 1000)

camera.position.z = 2

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshNormalMaterial()
const cube = new Mesh(geometry, material)
scene.add(cube)

function draw() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}`, oe = `const draw = await regl({
  vert: \`
    precision mediump float;
    attribute vec2 position;
    varying vec2 uv;

    void main() {
      uv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0, 1);
    }
  \`,
  frag: \`
    precision mediump float;
    varying vec2 uv;
    uniform float time;

    void main() {
      gl_FragColor = vec4(
        sin(uv.x * 6.28 + time) * 0.5 + 0.5,
        sin(uv.y * 6.28 + time * 1.3) * 0.5 + 0.5,
        sin((uv.x + uv.y) * 3.14 + time * 0.7) * 0.5 + 0.5,
        1.0
      );
    }
  \`,
  attributes: {
    position: [[-1,-1], [1,-1], [-1,1], [-1,1], [1,-1], [1,1]]
  },
  uniforms: {
    time: regl.prop('time'),
  },
  count: 6,
  depth: { enable: false },
})

function render(time) {
  regl.clear({ color: [0, 0, 0, 1] })
  draw({ time })
}`, x = `t.setup(() => {
  t.fontSize(32)
  t.frameRate(60)
})

t.draw(() => {
  t.background(0, 0, 0, 0)
  
  const halfCols = t.grid.cols / 1.95
  const halfRows = t.grid.rows / 1.95
  
  for (let y = -halfRows; y < halfRows; y++) {
    for (let x = -halfCols; x < halfCols; x++) {
      const dist = Math.sqrt(x * x + y * y)
      const wave = Math.sin(dist * 0.2 - t.frameCount * 0.1)
      
      t.push()
      t.translate(x, y, 0)
      t.char(wave > 0.5 ? '\u2593' : wave > 0 ? '\u2592' : '\u2591')
      t.charColor(0, 150 + wave * 100, 255)
      t.point()
      t.pop()
    }
  }
})`, ln = 36, cn = { 36: "Kick", 37: "Side Stick", 38: "Snare", 39: "Clap", 40: "E. Snare", 41: "Lo Floor Tom", 42: "Closed HH", 43: "Hi Floor Tom", 44: "Pedal HH", 45: "Low Tom", 46: "Open HH", 47: "Lo-Mid Tom", 48: "Hi-Mid Tom", 49: "Crash", 50: "High Tom", 51: "Ride" }, dn = { 36: "KCK", 37: "STK", 38: "SNR", 39: "CLP", 40: "ESN", 41: "LFT", 42: "CHH", 43: "HFT", 44: "PHH", 45: "LTM", 46: "OHH", 47: "LMT", 48: "HMT", 49: "CRS", 50: "HTM", 51: "RDE" }, ae = { padCount: 16, pads: Array.from({ length: 16 }, () => ({})), maxVoices: 4, noteOffMode: "ignore", showGmLabels: true, showWaveform: true, showPadNumbers: true }, un = 160, pn = 100;
function f(t) {
  const e = t.port === "inlet" ? "in" : "out";
  return t.type != null && t.id != null ? `${t.type}-${e}-${t.id}` : t.type != null ? `${t.type}-${e}` : t.id != null ? `${e}-${t.id}` : t.port;
}
const C = /^[ \t]*\/\/\s*@(title|param)\s+(.+)$/gm, se = /^(\w+)(?:\s+(-?[\w.]+))?(?:\s+(-?[\d.]+|#[\da-fA-F]+))?(?:\s+(-?[\d.]+))?(?:\s+"([^"]*)")?$/;
function ie(t) {
  const e = se.exec(t);
  if (!e) return null;
  const [, n, o, a, s, i] = e, r = { name: n };
  return o === "color" ? (r.widget = "color", a != null && a.startsWith("#") && (r.default = a)) : o != null && (r.default = o), a != null && !a.startsWith("#") && (r.min = parseFloat(a)), s != null && (r.max = parseFloat(s)), i != null && (r.description = i), r;
}
function re(t) {
  const e = { params: /* @__PURE__ */ new Map() };
  let n;
  for (C.lastIndex = 0; (n = C.exec(t)) !== null; ) {
    const [, o, a] = n, s = a.trim();
    if (o === "title" && !e.name) e.name = s;
    else if (o === "param") {
      const i = ie(s);
      if (!i) continue;
      e.params.set(i.name, i);
    }
  }
  return e;
}
function mn(t) {
  const e = /^[ \t]*\/\/\s*@title\s+(.+)$/m.exec(t);
  return e ? e[1].trim() : void 0;
}
function hn(t) {
  var _a;
  return ((_a = t.replace(/\/\*[\s\S]*?\*\//g, "").match(/^\s*\/\/\s*@format\s+(rgba8|rgba16f|rgba32f)\s*$/m)) == null ? void 0 : _a[1]) ?? "rgba8";
}
function fn(t) {
  const n = t.replace(/\/\*[\s\S]*?\*\//g, "").match(/^\s*\/\/\s*@resolution\s+(.+)$/m);
  if (!n) return;
  const o = n[1].trim(), a = o.match(/^1\/(\d+)$/);
  if (a && Number(a[1]) >= 2) return o;
  if (o.includes("x")) {
    const i = o.split("x").map(Number);
    if (i.length === 2 && i.every(Number.isFinite)) return i;
  }
  const s = Number(o);
  return Number.isFinite(s) ? s : void 0;
}
function gn(t) {
  const e = re(t), n = /uniform\s+(\w+)\s+(\w+)(?:\[(\d+)\])?;/g, o = [];
  let a;
  for (; (a = n.exec(t)) !== null; ) {
    const s = a[1], i = a[2], r = a[3] ? parseInt(a[3], 10) : void 0, l = e.params.get(i);
    o.push({ name: i, type: s, ...r !== void 0 && { arraySize: r }, ...(l == null ? void 0 : l.default) != null && { default: s === "bool" ? l.default === "true" || l.default === "1" : l.default.startsWith("#") ? l.default : parseFloat(l.default) }, ...(l == null ? void 0 : l.min) != null && { min: l.min }, ...(l == null ? void 0 : l.max) != null && { max: l.max }, ...(l == null ? void 0 : l.description) != null && { description: l.description }, ...(l == null ? void 0 : l.widget) != null && { widget: l.widget } });
  }
  return o;
}
function le(...t) {
  let e = 0;
  for (const n of t) {
    if (n == null) continue;
    const o = n.toString(), a = o.indexOf(".");
    a !== -1 && (e = Math.max(e, o.length - a - 1));
  }
  return e === 0 ? 0.01 : Math.pow(10, -e);
}
const yn = (t) => t.flatMap((e) => g(e.type).with("float", () => {
  const n = le(e.default, e.min, e.max);
  return [e.min != null && e.max != null ? { key: e.name, label: e.description ?? e.name, type: "slider", default: e.default ?? 0, min: e.min, max: e.max, step: n, persistence: "node" } : { key: e.name, label: e.description ?? e.name, type: "number", default: e.default ?? 0, step: n, persistence: "node" }];
}).with("int", () => [e.min != null && e.max != null ? { key: e.name, label: e.description ?? e.name, type: "slider", default: e.default ?? 0, min: e.min, max: e.max, step: 1, persistence: "node" } : { key: e.name, label: e.description ?? e.name, type: "number", default: e.default ?? 0, step: 1, persistence: "node" }]).with("bool", () => [{ key: e.name, label: e.description ?? e.name, type: "boolean", default: e.default ?? false, persistence: "node" }]).with("vec3", () => e.widget === "color" ? [{ key: e.name, label: e.description ?? e.name, type: "color", default: e.default ?? "#ffffff", persistence: "node" }] : []).otherwise(() => [])), E = Math.round(u[0] / m), S = Math.round(u[1] / m), ce = `function setup() {
  createCanvas(${E}, ${S})
  pixelDensity(${m})
}

function draw() {
  clear()
  fill(255, 255, 100)
  ellipse(${E / 2}, ${S / 2}, 80, 80)
}`, de = `setVideoCount(1)

osc(30, 0.1, 0.8)
  .diff(osc(20, 0.05).rotate(Math.PI/2))
  .out(o0)`, ue = `push 20
`, bn = 50, vn = 8, wn = 2e3, xn = 65535, pe = 4096, Cn = 832, me = 64, En = Math.floor(pe / me) - 1, he = 100, fe = 1, ge = 1, ye = 3, Sn = 16, Tn = 1e4, T = 32, I = 16, be = `// Generate pseudo-random noise from input indices
// Input: array of seed values (or just use for output size)
// Output: array of random f32 values in [0, 1]

@group(0) @binding(0) var<storage, read> seeds: array<f32>;
@group(0) @binding(1) var<storage, read_write> noise: array<f32>;

// Hash function for randomness
fn hash(p: u32) -> f32 {
  var h = p * 747796405u + 2891336453u;
  h = ((h >> 16u) ^ h) * 2246822507u;
  h = ((h >> 16u) ^ h) * 3266489909u;
  return f32(h >> 16u) / 65535.0;
}

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let idx = gid.x;
  if (idx >= arrayLength(&seeds)) { return; }

  // Combine index with seed for variety
  let seed = bitcast<u32>(seeds[idx]);
  noise[idx] = hash(idx + seed);
}`, In = ["#e57373", "#64b5f6", "#ffd54f", "#b39ddb", "#80cbc4", "#a5d6a7", "#ffb74d", "#ff8a65"], ve = [{ name: "KICK", color: "#e57373", stepOn: Array(8).fill(false), stepValues: Array(8).fill(1) }, { name: "SNARE", color: "#64b5f6", stepOn: Array(8).fill(false), stepValues: Array(8).fill(1) }, { name: "CHH", color: "#ffd54f", stepOn: Array(8).fill(false), stepValues: Array(8).fill(1) }, { name: "OHH", color: "#b39ddb", stepOn: Array(8).fill(false), stepValues: Array(8).fill(1) }], we = [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }], An = 400, kn = 250, On = 100, Pn = 80, Rn = 7, jn = 14, Mn = 9, Dn = 18, Ln = -18, xe = { points: we, mode: "curve" }, Ce = { bufferName: "", size: 100, showVisual: false }, Un = [300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 25e4], Nn = [{ label: "CR+LF (\\r\\n)", value: `\r
` }, { label: "LF (\\n)", value: `
` }, { label: "CR (\\r)", value: "\r" }, { label: "None", value: "" }], _n = [5, 6, 7, 8], Fn = [1, 2], Hn = [{ label: "None", value: "none" }, { label: "Even", value: "even" }, { label: "Odd", value: "odd" }], Ee = { portId: "", baudRate: 9600, dataBits: 8, stopBits: 1, parity: "none", lineEnding: `\r
`, autoConnect: false }, Se = { portId: "" }, zn = { baudRate: 25e4, dataBits: 8, stopBits: 2, parity: "none" }, Gn = 320, $n = 200, qn = 1e3, Wn = 1e3, Vn = 400, Bn = 320, Te = { portId: "", baudRate: 9600, dataBits: 8, stopBits: 1, parity: "none", lineEnding: `\r
`, autoConnect: false, maxScrollback: 500, resizable: true };
function Yn(t) {
  return g(t).with("object", () => ({ expr: "", name: "", params: [] })).with("js", () => ({ code: b, showConsole: true })).with("python", () => ({ code: X, showConsole: true })).with("glsl", () => ({ code: q })).with("strudel", () => ({ code: W, syncTransport: false })).with("ai.img", () => ({ prompt: V })).with("ai.txt", () => ({ prompt: "Write a creative story about..." })).with("msg", () => ({ message: "" })).with("button", () => ({})).with("toggle", () => ({ value: false })).with("switch", () => ({ value: false })).with("slider", () => ({ min: 0, max: 100, defaultValue: 50, isFloat: false })).with("knob", () => ({ min: 0, max: 1, defaultValue: 0, isFloat: true, size: 50 })).with("bchrn", () => ({ currentPreset: B })).with("p5", () => ({ code: ce })).with("hydra", () => ({ code: de, messageInletCount: 1, messageOutletCount: 0, videoInletCount: 1, videoOutletCount: 1 })).with("swgl", () => ({ code: Y })).with("canvas", () => ({ code: v })).with("textmode", () => ({ code: x })).with("textmode.dom", () => ({ code: x })).with("canvas.dom", () => ({ code: v })).with("three.dom", () => ({ code: w })).with("dom", () => ({ code: `// root is a div element you can manipulate
// Tailwind CSS is enabled by default, tailwind(false) to disable
root.innerHTML = '<h1 class="px-3 py-1 text-green-400">Hello DOM!</h1>'` })).with("vue", () => ({ code: `const message = ref('Hello Vue!')

 // Tailwind CSS is enabled by default, tailwind(false) to disable
 createApp({
   template: '<div class="px-3 py-1 text-green-400">{{ message }}</div>',
   setup() {
     return { message }
   }
 }).mount(root)` })).with("three", () => ({ code: w, messageInletCount: 1, messageOutletCount: 0, videoInletCount: 1, videoOutletCount: 1 })).with("regl", () => ({ code: oe, messageInletCount: 1, messageOutletCount: 0, videoInletCount: 1, videoOutletCount: 1 })).with("ai.music", () => ({})).with("ai.tts", () => ({})).with("ai.stt", () => ({})).with("stt", () => ({})).with("bg.out", () => ({})).with("midi.in", () => ({ deviceId: "", channel: 0, events: ["noteOn", "noteOff", "controlChange", "programChange", "pitchBend"] })).with("midi.out", () => ({ deviceId: "", channel: 1, event: "noteOn", data: { note: 60, velocity: 127 } })).with("markdown", () => ({ markdown: "hello" })).with("expr", () => ({ expr: "" })).with("filter", () => ({ expr: "" })).with("map", () => ({ expr: "" })).with("tap", () => ({ expr: "", showConsole: true })).with("scan", () => ({ expr: "" })).with("uniq", () => ({ expr: "" })).with("expr~", () => ({ expr: "s" })).with("fexpr~", () => ({ expr: "s" })).with("chuck~", () => ({ expr: K })).with("webcam", () => ({})).with("video", () => ({ loop: true })).with("iframe", () => ({ url: "", width: 400, height: 300 })).with("textbox", () => ({ text: "" })).with("dsp~", () => ({ title: "dsp~", code: J, messageInletCount: 0, messageOutletCount: 0, audioInletCount: 1, audioOutletCount: 1 })).with("tone~", () => ({ code: Z, messageInletCount: 1, messageOutletCount: 0 })).with("sonic~", () => ({ code: ee, messageInletCount: 1, messageOutletCount: 0 })).with("elem~", () => ({ code: Q, messageInletCount: 1, messageOutletCount: 0 })).with("csound~", () => ({ expr: te, syncTransport: false })).with("label", () => ({ message: "label" })).with("link", () => ({ displayText: "example.com", url: "http://example.com" })).with("asm", () => ({ code: ue, inletCount: ge, outletCount: ye, showMemoryViewer: false, machineConfig: { isRunning: false, delayMs: he, stepBy: fe } })).with("asm.value", () => ({ machineId: 0, address: 0, size: 8, format: "hex", signed: false })).with("asm.mem", () => ({ values: [], format: "hex", rows: 6 })).with("merge~", () => ({ channels: 2 })).with("split~", () => ({ channels: 2 })).with("mic~", () => ({ deviceId: "", echoCancellation: true, noiseSuppression: true, autoGainControl: true })).with("out~", () => ({ deviceId: "" })).with("meter~", () => ({ smoothing: 0.8, peakHold: true, style: "bar" })).with("scope~", () => ({ mode: "waveform", bufferSize: 512, xScale: 1, yScale: 1, fps: 0, plotType: "line", decay: 1 })).with("keyboard", () => ({ keybind: "", mode: "all", trigger: "keydown", repeat: false })).with("sampler~", () => ({ hasRecording: false, duration: 0, loopStart: 0, loopEnd: 0, loop: false, playbackRate: 1, detune: 0 })).with("orca", () => ({ grid: new Array(T * I).fill(".").join(""), width: T, height: I, bpm: 120, frame: 0, syncTransport: false })).with("uxn", () => ({ code: "", showConsole: false, showEditor: false, consoleOutput: "" })).with("mqtt", () => ({ topics: [], decodeAsString: true })).with("sse", () => ({ url: "" })).with("tts", () => ({ voiceName: "", rate: 1, pitch: 1, volume: 1 })).with("vdo.ninja.push", () => ({ room: "", streamId: "", dataOnly: false })).with("vdo.ninja.pull", () => ({ room: "", streamId: "", dataOnly: false })).with("peek", () => ({ expr: "" })).with("worker", () => ({ code: b, showConsole: true })).with("ruby", () => ({ code: 'puts "Hello, Ruby!"', showConsole: true })).with("wgpu.compute", () => ({ code: be, showConsole: true })).with("trigger", () => ({ types: ["b", "n"], shorthand: false, showHelp: false })).with("table", () => Ce).with("send.vdo", () => ({ channel: "foo" })).with("recv.vdo", () => ({ channel: "foo" })).with("note", () => ({ text: "", color: "#fef3c7", fontSize: 14 })).with("title", () => ({ text: "", color: "transparent", fontSize: 28, bordered: false, font: "default" })).with("uiua", () => ({ expr: `Life \u2190 \u21A5\u2229=\u2083\u27DC+\u22B8(/+\u21BB\u2282A\u2082C\u2082)
\u2045\xD70.6 gen\u2299\u2682 \u02D9\u229F30 # Init
\u2365\u22B8Life100        # Run
\u2261\u25BD\u2082 4            # Upscale`, showConsole: false, enableMessageOutlet: true, enableVideoOutlet: true, showGlyphPalette: true })).with("bytebeat~", () => ({ expr: "((t >> 10) & 42) * t", isPlaying: false, type: "bytebeat", syntax: "infix", sampleRate: 8e3, autoEval: true, syncTransport: false })).with("sequencer", () => ({ steps: 8, tracks: ve, swing: 0, outputMode: "bang", showVelocity: false, showInTimeline: true })).with("curve", () => xe).with("pads~", () => ae).with("serial", () => Ee).with("serial.term", () => Te).with("serial.dmx", () => Se).with("projmap", () => ({ surfaces: [] })).with("vision.hand", () => ({ numHands: 2, model: "lite", delegate: "GPU", skipFrames: 1 })).with("vision.body", () => ({ numPoses: 1, model: "lite", delegate: "GPU", skipFrames: 1 })).with("vision.face", () => ({ numFaces: 1, blendshapes: false, delegate: "GPU", skipFrames: 1, mode: "landmarks" })).with("vision.segment", () => ({ model: "general", maskType: "category", outputMessage: false, delegate: "GPU", skipFrames: 1 })).with("vision.detect", () => ({ maxResults: 5, scoreThreshold: 0.5, delegate: "GPU", skipFrames: 1 })).with("vision.gesture", () => ({ numHands: 2, delegate: "GPU", skipFrames: 1 })).with("vision.classify", () => ({ maxResults: 5, scoreThreshold: 0, delegate: "GPU", skipFrames: 1 })).with("ngea", () => ({ tuning: "Khong Wong Yai", index: 0 })).with("surface", () => ({ code: ne, showConsole: true, inletCount: 1, outletCount: 1 })).otherwise(() => ({}));
}
const Ie = `## asm Object Instructions

Virtual stack machine assembly interpreter inspired by TIS-100 and Shenzhen I/O.

CRITICAL RULES:
1. All instructions are LOWERCASE
2. Stack effects shown as ( before -- after ) where rightmost is top
3. Labels end with colon: \`label_name:\`
4. Use \\n for newlines in JSON code strings

INSTRUCTIONS (all lowercase):

Stack: push <n>, pop, dup, swap, over, rotate, nip, tuck, pick <n>
Arithmetic: add, sub, mul, div, mod, inc, dec
Comparison: equal, not_equal, less_than, less_than_or_equal, greater_than, greater_than_or_equal
Bitwise: and, or, xor, not, left_shift, right_shift
Control: jump <label>, jump_zero <label>, jump_not_zero <label>, call <label>, return, halt
Memory: load <addr>, store <addr>, read <n>, write <n>
I/O: send <port> <count>, recv, print
Timing: sleep_tick, sleep_ms (pop duration from stack)

MEMORY LAYOUT (8KB total, 4096 u16 cells):
- Code: 0x000-0x1FF (512 cells, ~250 instructions)
- Data: 0x200-0x2FF (256 cells, .string/.value constants)
- Call Stack: 0x300-0x33F (64 cells, ~32 call depth)
- RAM: 0x340-0xFFF (3264 cells, data stack + user memory)
- External: 0x1000-0xFFFF (61440 cells, routed to asm.mem objects)

IMPORTANT: Use HIGH addresses (0xF00+) for load/store to avoid colliding with the data stack which grows UP from 0x340.

I/O PATTERN:
- \`recv\` waits for input, pushes value onto stack
- \`send <port> <count>\` pops count values and sends to outlet port (0-3)
- Machine auto-wakes when data arrives (reactive dataflow)

Example - Modulo Counter:
\`\`\`json
{
  "type": "asm",
  "data": {
    "code": "loop:\\nload 0xF00\\ndup\\nsend 0 1\\ninc\\npush 10\\nmod\\nstore 0xF00\\njump loop"
  }
}
\`\`\`

Example - Echo (receive and send back):
\`\`\`json
{
  "type": "asm",
  "data": {
    "code": "loop:\\nrecv\\nsend 0 1\\njump loop"
  }
}
\`\`\`

Example - Accumulator (running sum):
\`\`\`json
{
  "type": "asm",
  "data": {
    "code": "loop:\\nrecv\\nload 0xF00\\nadd\\ndup\\nstore 0xF00\\nsend 0 1\\njump loop"
  }
}
\`\`\`

Example - Double input:
\`\`\`json
{
  "type": "asm",
  "data": {
    "code": "loop:\\nrecv\\npush 2\\nmul\\nsend 0 1\\njump loop"
  }
}
\`\`\`

INPUT MESSAGES:
- number or number[]: data for \`recv\` instruction
- "bang", "step": step one instruction
- "play", "pause", "toggle": control auto-clocking
- "reset", "run": reset/reload program

OUTPUT MESSAGES:
- number or number[] from \`send\` instruction`, Ae = `## bg.out Object Instructions

Background output node - the final video output that displays on the background canvas.

IMPORTANT:
- bg.out has NO configuration data (empty data object: {})
- It only receives video input and displays it on the background
- ALWAYS connect visual nodes (p5, hydra, glsl, canvas, etc.) to "video-in-0"

EXAMPLE - Hydra to Background:
\`\`\`json
{
  "nodes": [
    {
      "type": "hydra",
      "data": { "code": "osc().out(o0);" },
      "position": { "x": 0, "y": 0 }
    },
    {
      "type": "bg.out",
      "data": {},
      "position": { "x": 0, "y": 200 }
    }
  ],
  "edges": [
    {
      "source": 0,
      "target": 1,
      "sourceHandle": "video-out-0",
      "targetHandle": "video-in-0"
    }
  ]
}
\`\`\`

EXAMPLE - GLSL to Background:
\`\`\`json
{
  "nodes": [
    {
      "type": "glsl",
      "data": { "code": "void mainImage(out vec4 fragColor, in vec2 fragCoord) { fragColor = vec4(1.0, 0.0, 0.0, 1.0); }" },
      "position": { "x": 0, "y": 0 }
    },
    {
      "type": "bg.out",
      "data": {},
      "position": { "x": 0, "y": 200 }
    }
  ],
  "edges": [
    {
      "source": 0,
      "target": 1,
      "sourceHandle": "video-out-out",
      "targetHandle": "video-in-0"
    }
  ]
}
\`\`\``, ke = `## button Object Instructions

Simple button that sends a bang message when clicked.

CRITICAL RULES:
1. No code needed - configuration only
2. Outputs {type: 'bang'} when clicked
3. Flashes when receiving any message input

Messages:
- Receives: any message (triggers flash and outputs bang)
- Outputs: {type: 'bang'}

Example - Simple Button:
\`\`\`json
{
  "type": "button",
  "data": {}
}
\`\`\``, Oe = `## bytebeat~ Object Instructions

Bytebeat algorithmic synthesis using mathematical expressions on time counter t.

CRITICAL RULES:
1. Write expressions using t (time counter that increments each sample)
2. Classic bytebeat output is 0-255 (wraps automatically)
3. Use floatbeat type for -1.0 to 1.0 output (Math.sin, etc.)
4. Lower sample rates = crunchier sound (8000 Hz is classic)
5. MUST connect to out~ for audio output

Data Structure:
- expr: JavaScript expression using t
- isPlaying: boolean (playback state)
- type: "bytebeat" | "floatbeat" | "signedBytebeat"
- syntax: "infix" | "postfix" | "glitch" | "function"
- sampleRate: number (8000, 11025, 22050, 32000, 44100, 48000)
- autoEval: boolean (default true, evaluates expression as you type; false requires Shift+Enter)

Example - Classic Bytebeat:
\`\`\`json
{
  "type": "bytebeat~",
  "data": {
    "expr": "((t >> 10) & 42) * t",
    "type": "bytebeat",
    "syntax": "infix",
    "sampleRate": 8000,
    "isPlaying": false
  }
}
\`\`\`

Example - Sierpinski Harmony:
\`\`\`json
{
  "type": "bytebeat~",
  "data": {
    "expr": "t & t >> 8",
    "type": "bytebeat",
    "syntax": "infix",
    "sampleRate": 8000,
    "isPlaying": false
  }
}
\`\`\`

Example - Floatbeat Sine:
\`\`\`json
{
  "type": "bytebeat~",
  "data": {
    "expr": "Math.sin(t / 10) * 0.5",
    "type": "floatbeat",
    "syntax": "infix",
    "sampleRate": 44100,
    "isPlaying": false
  }
}
\`\`\`

Control Messages:
- {type: 'play'} - Start playback
- {type: 'pause'} - Pause (keeps t position)
- {type: 'stop'} - Stop and reset t=0
- {type: 'bang'} - Evaluate and play
- {type: 'setType', value: 'floatbeat'} - Change type
- {type: 'setSyntax', value: 'postfix'} - Change syntax
- {type: 'setSampleRate', value: 11025} - Change sample rate`, d = `
**CRITICAL - FFT Audio Analysis:**
- Connect an fft~ object's purple "analyzer" outlet to this object's inlet
- Call fft() to get real-time audio analysis (NOT p5.FFT() or a.fft[])
- fft() returns FFTAnalysis with: .a (bins 0-255), .f (normalized 0-1), .rms, .avg, .centroid
- fft().getEnergy('bass') - normalized 0-1 bass energy (also: lowMid, mid, highMid, treble)
- fft().getEnergy(40, 200) - normalized 0-1 custom frequency range energy
- fft({type: 'freq'}) - frequency spectrum (default is waveform)
`.trim(), j = `
**Built-in fonts:**
- Sans-serif: "IBM Plex Sans" (for labels, UI text, readable prose)
- Monospace: "IBM Plex Mono" (for code, numeric readouts, terminal-style text)
- Other fonts can be loaded separately.
`.trim(), Pe = `## canvas.dom Object Instructions

Interactive Canvas on main thread. Use for mouse/keyboard input and instant FFT.

**Canvas.dom-specific methods:**
- ctx: 2D canvas context
- width, height, mouse: {x, y, down, buttons}
- noDrag(), noPan(), noWheel(), noInteract() - Interaction control
- noOutput() - Hide video output (call this when the sketch does not feed video to other nodes)
- setCanvasSize(w, h) - Resize canvas
- onKeyDown(event => {}) - Keyboard down events (event.key, event.code)
- onKeyUp(event => {}) - Keyboard up events (event.key, event.code)
- setPortCount(inlets, outlets) - Set inlet/outlet count (e.g. setPortCount(1, 0) if only an inlet is needed and no message outlet)

**Default behaviors to apply unless there's a reason not to:**
- Call noOutput() by default unless the sketch is explicitly meant to output video to another node.
- Call noDrag() if the sketch uses mouse.down, mouse.x/y, or any click/drag interaction.
- Call noWheel() if the sketch uses scroll or wheel interaction.
- Call setPortCount(1, 0) if the sketch only needs to receive messages (inlet) and does not send any output messages.

**Font & element sizes:**
- The node is displayed very zoomed out in the patch canvas.
- Use large font sizes (18px minimum, 24\u201332px for primary text) so text remains readable.
- Similarly, make shapes, lines, and UI elements larger than you would for a full-screen sketch.
- Call setCanvasSize(width, height) with appropriate dimensions.
  Minimum: 800x600. Maximum: 2000x2000.
- When using setCanvasSize, make sure to define width and height variables:
  e.g. const width = 800, height = 600; setCanvasSize(width, height);

${j}

${d}

Example - XY pad:
\`\`\`json
{
  "type": "canvas.dom",
  "data": {
    "code": "noDrag(); noOutput(); function draw() { ctx.fillStyle = '#080809'; ctx.fillRect(0,0,width,height); ctx.fillStyle = mouse.down ? '#4ade80' : '#71717a'; ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI*2); ctx.fill(); if (mouse.down) send([mouse.x/width, mouse.y/height]); requestAnimationFrame(draw); } draw();"
  }
}
\`\`\`

Example - Keyboard control:
\`\`\`json
{
  "type": "canvas.dom",
  "data": {
    "code": "let x = width/2; onKeyDown(e => { if (e.key === 'ArrowLeft') x -= 10; if (e.key === 'ArrowRight') x += 10; if (e.key === ' ') send('bang'); }); function draw() { ctx.fillStyle = '#080809'; ctx.fillRect(0,0,width,height); ctx.fillStyle = '#4ade80'; ctx.arc(x, height/2, 20, 0, Math.PI*2); ctx.fill(); requestAnimationFrame(draw); } draw();"
  }
}
\`\`\``, Re = `## canvas Object Instructions

Offscreen Canvas on web worker thread for high-performance video chaining. NO DOM access.

**CRITICAL:** Use canvas.dom if you need mouse/keyboard/DOM interaction.

**Canvas-specific methods:**
- ctx: 2D canvas context (ctx.fillRect, ctx.arc, etc.)
- width, height: canvas dimensions
- noDrag(), noPan(), noWheel(), noInteract() - Interaction control
- noOutput() - Hide video output
- setPortCount(inlets, outlets) - Set inlet/outlet count (e.g. setPortCount(1, 0) if only an inlet is needed and no message outlet)

**Default behaviors to apply unless there's a reason not to:**
- Call setPortCount(1, 0) if the sketch only needs to receive messages (inlet) and does not send any output messages.

**Canvas-specific gotchas:**
- Runs in web worker - no DOM access, no mouse/keyboard events
- Use canvas.dom for interactive sketches

**Font & element sizes:**
- The node is displayed very zoomed out in the patch canvas. Use large font sizes (18px minimum, 24\u201332px for primary text) so text remains readable.
- Similarly, make shapes, lines, and UI elements larger than you would for a full-screen sketch.

${d}

Example - Animated circle:
\`\`\`json
{
  "type": "canvas",
  "data": {
    "code": "let a = 0; function draw() { ctx.fillStyle = '#080809'; ctx.fillRect(0,0,width,height); ctx.fillStyle = '#4ade80'; ctx.arc(width/2, height/2, 50, 0, Math.PI*2); ctx.fill(); a += 0.05; requestAnimationFrame(draw); } draw();"
  }
}
\`\`\``, je = `## chuck~ Object Instructions

ChucK audio programming language for real-time sound synthesis.

CRITICAL RULES:
1. Write ChucK code for algorithmic composition
2. Use Ctrl/Cmd + Enter to replace most recent shred
3. Use Ctrl/Cmd + \\ to add new shred
4. Use Ctrl/Cmd + Backspace to remove shred
5. MUST connect to out~ for audio output

Available:
- Full ChucK language
- Runs via WebChucK in browser
- Multiple concurrent shreds
- Real-time synthesis

Example - Sine Wave:
\`\`\`json
{
  "type": "chuck~",
  "data": {
    "expr": "SinOsc s => dac;\\n440 => s.freq;\\n0.5 => s.gain;\\nwhile(true) { 1::second => now; }"
  }
}
\`\`\`

Example - FM Synth:
\`\`\`json
{
  "type": "chuck~",
  "data": {
    "expr": "SinOsc mod => SinOsc car => dac;\\n2 => mod.sync;\\n200 => mod.freq;\\n440 => car.freq;\\nwhile(true) {\\n  Math.random2f(100,500) => mod.freq;\\n  200::ms => now;\\n}"
  }
}
\`\`\``, Me = `## csound~ Object Instructions

Csound sound and music computing system.

CRITICAL RULES:
1. Write Csound orchestra and score code
2. WARNING: Only ONE csound~ per patch (known bug)
3. MUST connect to out~ for audio output
4. Use instr/endin blocks for instruments

Messages:
- bang: resume or re-eval code
- play/pause/stop/reset: playback control
- {type: 'setChannel', channel: 'name', value: number}: set control channel
- {type: 'noteOn', note: 60, velocity: 127}: MIDI note on
- {type: 'noteOff', note: 60}: MIDI note off
- {type: 'readScore', value: 'i1 0 1'}: send score
- {type: 'eval', code: '...'}: evaluate code

Example - Simple Sine:
\`\`\`json
{
  "type": "csound~",
  "data": {
    "code": "instr 1\\n  asig oscili 0.5, 440\\n  out asig\\nendin\\nschedule(1, 0, 10)"
  }
}
\`\`\`

Example - FM Synth:
\`\`\`json
{
  "type": "csound~",
  "data": {
    "code": "instr 1\\n  ifreq = p4\\n  amod oscili 200, ifreq*2\\n  acar oscili 0.5, ifreq + amod\\n  out acar\\nendin\\nschedule(1, 0, 2, 440)"
  }
}
\`\`\``, De = (t) => `## ${t} Object

Generate appropriate configuration for this object type based on the user's prompt.

Respond with valid JSON:
{
  "type": "${t}",
  "data": {
    // appropriate fields for this object type
  }
}`, Le = `## dom Object Instructions

DOM manipulation node with direct JavaScript access to a root div element. Container is fluid-sized by default.

**Tailwind CSS is enabled by default!** Use Tailwind utility classes for styling. Call \`tailwind(false)\` to disable it for better performance if not needed.

**DOM-specific methods:**
- root: HTMLDivElement - the container element you can manipulate
- width, height: Container dimensions (undefined if fluid, set after setSize)
- setSize(w, h): Set fixed container dimensions
- setHidePorts(hide): Hide/show ports
- noDrag(), noPan(), noWheel(), noInteract() - Interaction control (whole node)
- tailwind(enabled): Enable/disable Tailwind CSS (enabled by default)

**Selective canvas interaction (CSS classes):**
Apply these classes to individual elements to block canvas interactions only for that element:
- "nodrag" \u2014 prevent node drag when the user interacts with this element
- "nopan" \u2014 prevent canvas pan when the user interacts with this element
- "nowheel" \u2014 prevent canvas zoom when scrolling over this element

**Caveats**
- Do NOT use gradient colors in Tailwind classes, like "bg-gradient-to-r from-amber-500 to-orange-400". They are not supported.

**Tips**
- If you use a border, you must use rounded-lg in the outer container, otherwise the border will be cut off.
- For more complex ui, use libraries like htm/preact/standalone: "import { html, render } from 'npm:htm/preact/standalone'", then you can "render(html\`<\${MyComponent} />\`, root)" and write Preact components with render tagged template literals.

Example - Simple HTML with Tailwind:
\`\`\`json
{
  "type": "dom",
  "data": {
    "code": "root.innerHTML = '<h1 class="text-green-400 text-2xl font-bold">Hello!</h1><p class="text-zinc-400">This is DOM manipulation</p>'"
  }
}
\`\`\`

Example - Interactive button:
\`\`\`json
{
  "type": "dom",
  "data": {
    "code": "noDrag(); root.innerHTML = '<button class="px-4 py-2 bg-green-400 text-black rounded cursor-pointer hover:bg-green-300">Click me</button>'; root.querySelector('button').onclick = () => send('clicked');"
  }
}
\`\`\`

Example - Dynamic list with messages:
\`\`\`json
{
  "type": "dom",
  "data": {
    "code": "root.innerHTML = '<ul class="list-none p-0 m-0"></ul>'; const ul = root.querySelector('ul'); recv(msg => { const li = document.createElement('li'); li.textContent = msg; li.className = 'p-1 text-zinc-400'; ul.appendChild(li); });"
  }
}
\`\`\`

Example - Custom form with fixed size:
\`\`\`json
{
  "type": "dom",
  "data": {
    "code": "noDrag(); setSize(250, 100); root.innerHTML = '<input type="text" id="inp" class="w-full p-2 mb-2 bg-zinc-800 border border-zinc-600 text-white rounded"><button class="w-full p-2 bg-green-400 text-black rounded cursor-pointer">Submit</button>'; root.querySelector('button').onclick = () => send(root.querySelector('#inp').value);"
  }
}
\`\`\``, Ue = `## dsp~ Object Instructions

Low-level DSP audio processing. MUST implement process(inputs, outputs) function.

**CRITICAL RULES:**
1. Implement process(inputs, outputs) - called per audio buffer
2. Call setTitle(), setPortCount(), setAudioPortCount() at start
3. Access buffers: inputs[inlet][channel], outputs[outlet][channel]

**Available Methods:**
- setTitle(name), setPortCount(inlets, outlets), setAudioPortCount(inlets, outlets)
- recv(callback), send(data, {to: outletIndex}?) - Message I/O
- setKeepAlive(enabled) - Keep running when unconnected

**Context Variables (in process):**
- counter, sampleRate, currentFrame, currentTime
- $1-$9: dynamic numeric inlets

Example - White noise (1 audio output \u2192 handle is "audio-out", not "audio-out-0"):
\`\`\`json
{
  "type": "dsp~",
  "data": {
    "code": "setTitle('noise~'); setAudioPortCount(0, 1); function process(inputs, outputs) { outputs[0].forEach(ch => { for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1; }); }"
  }
}
\`\`\``, Ne = `## expr Object Instructions

Mathematical expression evaluator at control rate. Perfect for parameter mapping and control signals.

CRITICAL RULES:
1. Use $1, $2, ... $9 to create dynamic inlets
2. Each $N variable creates an inlet automatically
3. Result is sent as message when any inlet receives a value
4. Uses expr-eval library - supports full mathematical expression syntax

Available operators and functions:
- Arithmetic: +, -, *, /, ^, %
- Trigonometry: sin(), cos(), tan(), asin(), acos(), atan(), atan2()
- Math: sqrt(), abs(), ceil(), floor(), round(), log(), exp(), min(), max()
- Logic: ==, !=, <, >, <=, >=, and, or, not
- Conditionals: condition ? true_val : false_val
- Constants: PI, E

Multi-line support:
- Use semicolons to separate statements
- Last expression is the output
- Define variables: a = $1 * 2; b = $2 + 3; a + b
- Define functions: add(a, b) = a + b; add($1, $2)

Example - Simple Addition:
\`\`\`json
{
  "type": "expr",
  "data": {
    "expr": "$1 + $2"
  }
}
\`\`\`

Example - Scale and Offset:
\`\`\`json
{
  "type": "expr",
  "data": {
    "expr": "$1 * 100 + 50"
  }
}
\`\`\`

Example - Sine Wave Mapping:
\`\`\`json
{
  "type": "expr",
  "data": {
    "expr": "sin($1 * PI * 2) * 0.5 + 0.5"
  }
}
\`\`\`

Example - Multi-line with Variables:
\`\`\`json
{
  "type": "expr",
  "data": {
    "expr": "scaled = $1 * 10;\\noffset = $2;\\nscaled + offset"
  }
}
\`\`\``, _e = `## expr~ Object Instructions

Audio-rate mathematical expression evaluator. Process audio signals with math expressions!

CRITICAL RULES:
1. Runs at AUDIO RATE (48kHz) - processes every audio sample
2. Use $1-$9 for control-rate inlets (receives messages)
3. Always needs audio input - use sig~ for constant signals
4. MUST connect to compressor~ or limiter~ - can create LOUD spikes!

Available variables:
- s: current sample value (-1 to 1)
- i: current sample index in buffer (0 to bufferSize)
- t: current time in seconds (float)
- channel: current channel index (0 or 1 for stereo)
- bufferSize: audio buffer size (usually 128)
- samples: array of all samples in current channel
- input: first input audio signal
- inputs: array of all connected input audio signals
- $1 to $9: control-rate inlet values

Available functions (same as expr):
- Arithmetic: +, -, *, /, ^, %
- Trigonometry: sin(), cos(), tan(), etc.
- Math: sqrt(), abs(), ceil(), floor(), round(), log(), exp()
- Logic: ==, !=, <, >, <=, >=, and, or, not
- Conditionals: condition ? true_val : false_val
- Constants: PI, E
- random(): white noise
- phasor(freq, trigger?, resetPhase?): phase accumulator (0-1 ramp) for click-free oscillators
  - freq: frequency in Hz
  - trigger: optional, resets phase on positive zero-crossing (<=0 to >0)
  - resetPhase: optional, phase value to reset to (default 0)

IMPORTANT - phasor vs t:
- Use t for FIXED frequencies: sin(t * 440 * PI * 2)
- Use phasor($1) for VARIABLE frequencies: sin(phasor($1) * PI * 2)
- Why? Changing $1 in sin(t * $1) causes phase jumps (clicks). phasor() accumulates phase smoothly.

Example - Pass Through:
\`\`\`json
{
  "type": "expr~",
  "data": {
    "expr": "s"
  }
}
\`\`\`

Example - Fixed Frequency Oscillator:
\`\`\`json
{
  "type": "expr~",
  "data": {
    "expr": "sin(t * 440 * PI * 2)"
  }
}
\`\`\`

Example - Variable Frequency Oscillator (click-free):
\`\`\`json
{
  "type": "expr~",
  "data": {
    "expr": "sin(phasor($1) * PI * 2)"
  }
}
\`\`\`

Example - Gain Control:
\`\`\`json
{
  "type": "expr~",
  "data": {
    "expr": "s * $1"
  }
}
\`\`\`

Example - Distortion (squaring):
\`\`\`json
{
  "type": "expr~",
  "data": {
    "expr": "s ^ 2"
  }
}
\`\`\`

Example - White Noise:
\`\`\`json
{
  "type": "expr~",
  "data": {
    "expr": "random()"
  }
}
\`\`\`

Example - FM Synthesis (requires audio input):
\`\`\`json
{
  "type": "expr~",
  "data": {
    "expr": "sin(t * 440 * PI * 2 + s * $1)"
  }
}
\`\`\`

Example - Hard Sync (slave synced to master):
\`\`\`json
{
  "type": "expr~",
  "data": {
    "expr": "sin(phasor(880, phasor(110)) * PI * 2)"
  }
}
\`\`\`

WARNING: Always use compressor~ after expr~ to prevent dangerous audio spikes!`, Fe = `## glsl Object Instructions

GLSL fragment shader for visual effects. Uses Shadertoy-compatible format.

**\`#include\` directives are auto-preprocessed** before compilation \u2014 use them freely.

CRITICAL RULES:
1. MUST use mainImage function signature: void mainImage(out vec4 fragColor, in vec2 fragCoord)
2. Write GLSL code, NOT JavaScript
3. Shaders are Shadertoy-compatible
4. Define custom uniforms for dynamic control

**Multi-Render Target (MRT) \u2014 multiple video outlets from one shader:**
- Declare \`layout(location = N) out vec4 name;\` variables (auto-detected, creates N outlets)
- When using MRT, mainImage signature changes to: \`void mainImage(vec2 fragCoord)\` (no out param \u2014 write to your declared outputs directly)
- Example: 2 outputs \u2192 \`layout(location = 0) out vec4 albedo;\` + \`layout(location = 1) out vec4 normals;\`

**Metadata directives** (comment-based):
- \`// @title My Shader\` \u2014 sets node display title
- \`// @param name default min max "description"\` \u2014 adds ranged slider for a uniform.
    Each @param MUST have a matching \`uniform\` declaration
    e.g. \`// @param strength 0.5 0.0 1.0 "Effect strength"\`
    requires \`uniform float strength;\`
    IMPORTANT: default value, then min and max!
- \`// @param name color "description"\` \u2014 renders a vec3 uniform as a color picker.
    Use \`color\` as the default value. Only works with \`vec3\` uniforms.
    e.g. \`// @param tint color "Tint color"\` with \`uniform vec3 tint;\`
- \`// @format rgba32f\` (or \`rgba16f\`) \u2014 unclamped float output (default \`rgba8\`)
- \`// @resolution 256\` \u2014 sets FBO size (256\xD7256).
    Also supports \`256x128\`, \`1/n\` (e.g. \`1/2\`, \`1/4\`, \`1/8\`).
    Default is full window resolution.

**FFT Audio Analysis (GLSL-specific):**
- Create sampler2D uniform and connect fft~ object's purple "analyzer" outlet
- Use "waveTexture" uniform name for waveform (time-domain)
- Any other sampler2D name gets frequency spectrum
- Example: uniform sampler2D fftData; (frequency) or uniform sampler2D waveTexture; (waveform)

Built-in uniforms (Shadertoy-compatible):
- iResolution: vec3 (viewport resolution, z is pixel aspect ratio)
- iTime: float (shader playback time in seconds)
- iMouse: vec4 (mouse interaction)
  * xy: current mouse position or last click position
  * zw: drag start position (positive when mouse down, negative when mouse up)
  * When mouse is down (dragging): zw > 0 (ongoing drag start position)
  * When mouse is up (released): zw < 0 (use abs() to get last drag start position)
  * Using iMouse in your shader enables mouse interaction automatically
- iFrame: int (shader playback frame)

Custom uniforms:
- uniform float iMix: creates a float inlet
- uniform vec2 iFoo: creates a vec2 inlet
- uniform sampler2D iChannel0: creates a video inlet (orange)

Example - Solid Red:
\`\`\`json
{
  "type": "glsl",
  "data": {
    "code": "void mainImage(out vec4 fragColor, in vec2 fragCoord) {\\n  fragColor = vec4(1.0, 0.0, 0.0, 1.0);\\n}"
  }
}
\`\`\`

Example - Animated Colors:
\`\`\`json
{
  "type": "glsl",
  "data": {
    "code": "void mainImage(out vec4 fragColor, in vec2 fragCoord) {\\n  vec2 uv = fragCoord / iResolution.xy;\\n  vec3 color = vec3(0.0);\\n  float time = iTime * 0.5;\\n  \\n  color.r = sin(uv.x * 10.0 + time) * 0.5 + 0.5;\\n  color.g = sin(uv.y * 10.0 + time * 1.2) * 0.5 + 0.5;\\n  color.b = sin((uv.x + uv.y) * 5.0 + time * 0.8) * 0.5 + 0.5;\\n  \\n  float brightness = sin(time * 2.0) * 0.2 + 0.8;\\n  color *= brightness;\\n  fragColor = vec4(color, 1.0);\\n}"
  }
}
\`\`\`

Example - With Custom Uniform:
\`\`\`json
{
  "type": "glsl",
  "data": {
    "code": "uniform float iMix;\\n\\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord) {\\n  vec2 uv = fragCoord / iResolution.xy;\\n  vec3 color = mix(vec3(1.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0), iMix);\\n  fragColor = vec4(color * uv.x, 1.0);\\n}"
  }
}
\`\`\`

Example - With Video Input:
\`\`\`json
{
  "type": "glsl",
  "data": {
    "code": "uniform sampler2D iChannel0;\\n\\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord) {\\n  vec2 uv = fragCoord / iResolution.xy;\\n  vec3 tex = texture(iChannel0, uv).rgb;\\n  fragColor = vec4(tex * 1.2, 1.0);\\n}"
  }
}
\`\`\``, He = `## hydra Object Instructions

Live coding video synthesis with chainable Hydra functions.

**Hydra-specific methods:**
- setVideoCount(inlets, outlets) - Configure video ports (default 1, 1); max 8 each
- src(s0), src(s1), etc. - Access video inputs from setVideoCount
- out(o0), out(o1), etc. - Route to specific outlet; setVideoCount(0, 2) creates 2 outlets
- Multiple outputs: setVideoCount(0, 2) then osc().out(o0); noise().out(o1)
- Standard Hydra: .blend(), .add(), .mult(), .diff(), .kaleid(), etc.

**setFunction \u2014 define custom generators/modifiers (always \`await\`):**
- \`type: 'src'\` \u2014 generator; receives \`vec2 _st\`, returns the function to call
- \`type: 'color'\` \u2014 color modifier; receives \`vec4 _c0\`, method added to all chains
- \`type: 'coord'\` \u2014 coordinate transform; receives \`vec2 _st\`
- \`glsl\` field supports \`#include <lygia/...>\` directives

**Available context variables:**
- mouse.x, mouse.y - current mouse position in output pixels
- width, height - output dimensions in pixels
- Normalize mouse: \`() => mouse.x / width\`, \`() => mouse.y / height\` (gives 0\u20131 range)
- Example: \`gradient().hue(() => mouse.x / width).scale(1, 1, () => mouse.y / height).out()\`

**Hydra-specific gotchas:**
- Hydra has its own render loop - use arrow functions for dynamic values instead of requestAnimationFrame

${d}

Example - Video mixer:
\`\`\`json
{
  "type": "hydra",
  "data": {
    "code": "setVideoCount(2, 1); src(s0).blend(src(s1), 0.5).out(o0)"
  }
}
\`\`\`

Example - Audio-reactive:
\`\`\`json
{
  "type": "hydra",
  "data": {
    "code": "src(s0).scale(() => 1 + fft().a[10] * 0.5).kaleid().out(o0)"
  }
}
\`\`\`

Example - Custom function with lygia:
\`\`\`json
{
  "type": "hydra",
  "data": {
    "code": "const myNoise = await setFunction({\\n  name: 'myNoise',\\n  type: 'src',\\n  inputs: [{ type: 'float', name: 'scale', default: 4.0 }],\\n  glsl: \`\\n    #include <lygia/generative/snoise>\\n    float n = snoise(vec3(_st * scale, time));\\n    return vec4(vec3(n * 0.5 + 0.5), 1.0);\\n  \`,\\n})\\nmyNoise(6.0).kaleid(6).out()"
  }
}
\`\`\``, M = /* @__PURE__ */ new Set(["js", "worker", "p5", "hydra", "canvas", "canvas.dom", "three", "three.dom", "dom", "vue", "sonic~", "tone~", "elem~", "textmode", "textmode.dom", "regl", "swgl"]), D = `
**Common Runtime Functions:**
- console.log() - Log to virtual console (not browser console)
- setTitle(title) - Set node display title
- setInterval(cb, ms), setTimeout(cb, ms) - Timers with auto-cleanup
- delay(ms) - Promise that resolves after ms (rejects if node stops)
- requestAnimationFrame(cb) - Animation frame with auto-cleanup
- onCleanup(cb) - Register cleanup callback for unmount/re-execution
- await llm(prompt, options?) - Call the configured AI provider (requires API key in settings)
  * Options: { model?: string, abortSignal?: AbortSignal, imageNodeId?: string }

**Message Passing (wired ports):**
- send(data, {to: outletIndex}?) - Send to outlet (omit {to} to send to all outlets)
- recv((data, meta) => {}) - Register inlet callback (data: payload; meta.inlet: inlet index)
- setPortCount(inlets, outlets) - Configure number of message ports
- Bang is {type: 'bang'}; control messages MUST have a 'type' field
- Common MIDI messages:
  - {type: 'noteOn' | 'noteOff', note, velocity, channel}
  - {type: 'controlChange', control, value, channel}
  - note and velocity is between 0-127

**Named Channels (wireless messaging):**
- send(data, { to: 'name' }) - Broadcast to all listeners on channel (string 'to' = channel)
- recv(cb, { from: 'name' }) - Receive from channel (cb receives data, meta with source/channel)
- Works with visual send/recv objects on same channel

**Clock (beat-synced timing from global transport):**
- clock.time - time in seconds
- clock.beat - beat in measure (0 to beatsPerBar-1)
- clock.phase - position within current beat (0.0 to 1.0)
- clock.bpm - tempo in BPM
- clock.bar - 0-indexed bar
- clock.beatsPerBar - beats per bar (numerator)
- clock.timeSignature - [numerator, denominator] tuple (e.g. [4, 4], [6, 8])
- clock.subdiv(n) - subdivision index (0 to n-1) within beat (per-node, polyrhythm-safe)
- clock.subdivPhase(n) - progress within current subdivision (0.0 to 1.0)
- clock.play(), clock.pause(), clock.stop() - transport control
- clock.setBpm(bpm), clock.setTimeSignature(num, denom), clock.seek(seconds)
- clock.onBeat(beat, cb, opts?) - fire on beat (number, array, or '*' for all). cb receives (time). Pass { audio: true } for lookahead scheduling.
- clock.schedule(time, cb, opts?) - One-shot at seconds or 'bar:beat:sixteenth' notation. Pass { audio: true } for audio-precise timing
- clock.every(interval, cb, opts?) - Repeating at 'bar:beat:sixteenth' interval
  - e.g. '1:0:0' = every bar, '0:1:0' = every beat
  - Pass { audio: true } for audio-precise timing
- clock.cancel(id), clock.cancelAll() - Cancel scheduled callbacks
- clock.setTimelineStyle({ color?, visible? }) - Customize this node's appearance in the timeline (color: CSS color string, visible: false to hide)
- For full clock docs call get_doc_content({ kind: 'topic', slug: 'clock-api' })

**Persistent Storage (kv):**
- await kv.set(key, value), await kv.get(key), await kv.delete(key) - simple key-value storage
- await kv.store(namespace).set/get/delete - namespaced store
- For full kv docs call get_doc_content({ kind: 'topic', slug: 'data-storage' })

**Float Texture Format (visual nodes only: hydra, canvas, three, regl, swgl, textmode):**
- setTextureFormat('rgba8'|'rgba16f'|'rgba32f') - Set output FBO format.
  Default rgba8 clamps to 0\u20131; use rgba32f for unclamped float data (GPGPU, HDR).
  Call once at init. For glsl/swgl, prefer \`// @format rgba32f\` comment directive.

**User-defined Settings:**
- only add a few settings by default where it makes sense.
  - tell the user in the response what settings they have and how to show it i.e. in the overflow menu > "Show settings"
  - do NOT add too much settings, 1 - 3 is enough. users can always ask to add more in a follow-up.
- await settings.define([...schema]) - expose a settings panel on the node (gear icon appears)
  - on P5.js: do NOT await in setup() - do it at top level outside setup()
- settings.get(key) - read current value (sync, after define resolves)
  - IMPORTANT: do NOT access settings[key] - that does NOT exist!
- settings.getAll() - all values as object
- settings.set(key, value) - programmatically update a setting from code (persists + fires onChange)
  - useful for updating sliders/toggles from recv() messages or clock callbacks
- settings.onChange((key, value, all) => {}) - react to value changes (from UI or settings.set)
- settings.clear() - reset all settings to defaults and clear persisted values
- Each field: { key, label, type, default?, persistence?: 'node'|'kv'|'none', ...type-specific }
- Schema field types: slider, number, boolean, string, select, color
- slider: requires min, max. Add step for float precision (e.g. step: 0.01 for 2 decimal places; omitting step defaults to integer steps)
- For full settings docs call get_doc_content({ kind: 'topic', slug: 'object-settings' })
`.trim(), y = `
- esm(moduleName) - Load NPM packages: await esm("lodash")
`.trim(), L = `
- setRunOnMount(enabled) - Auto-run code on patch load
`.trim(), h = `
**Patcher Libraries - Share code across js/p5/sonic~/elem~ objects:**
- Add \`// @lib myModule\` at top, export constants/functions/classes
- Import elsewhere with: import { func } from 'myModule'
`.trim(), ze = `## js Object Instructions

JavaScript execution block for general-purpose logic and utilities.

**Additional js methods:**
${y}
${L}

${d}

${h}

Example:
\`\`\`json
{
  "type": "js",
  "data": {
    "code": "setPortCount(1, 1)\\nrecv(data => send(data * 2, {to: 0}));"
  }
}
\`\`\``, Ge = `## markdown Object Instructions

Markdown text renderer for documentation and formatted content.

CRITICAL RULES:
1. No code needed - markdown content only
2. Supports full Markdown syntax
3. Great for patch documentation

Messages:
- string: set markdown content

Example - Documentation:
\`\`\`json
{
  "type": "markdown",
  "data": {
    "markdown": "# My Patch\\n\\nThis patch does **amazing** things:\\n\\n- Feature 1\\n- Feature 2\\n- Feature 3"
  }
}
\`\`\`

Example - Instructions:
\`\`\`json
{
  "type": "markdown",
  "data": {
    "markdown": "## How to use\\n\\n1. Connect the slider to the frequency inlet\\n2. Press the button to start\\n3. Adjust parameters to taste"
  }
}
\`\`\``, $e = `## msg Object Instructions

Message object that stores and sends predefined messages.

CRITICAL RULES:
1. Message format is VERY specific - follow these rules exactly
2. Bare strings (e.g. "start") become objects: {type: 'start'}
3. Quoted strings (e.g. "'hello'") become JS strings: "hello"
4. Numbers (e.g. 100) become numbers: 100
5. JSON objects are sent as-is, supports JSON5 syntax

Message Format Rules:
- bang \u2192 {type: 'bang'}
- start \u2192 {type: 'start'}
- play \u2192 {type: 'play'}
- 'hello world' \u2192 "hello world" (string)
- "hello world" \u2192 "hello world" (string)
- 100 \u2192 100 (number)
- 0.5 \u2192 0.5 (number)
- {x: 1, y: 2} \u2192 {x: 1, y: 2} (object)
- [1, 2, 3] \u2192 [1, 2, 3] (array)

Example - Bang Message:
\`\`\`json
{
  "type": "msg",
  "data": {
    "message": "bang"
  }
}
\`\`\`

Example - String Message:
\`\`\`json
{
  "type": "msg",
  "data": {
    "message": "'hello world'"
  }
}
\`\`\`

Example - Number Message:
\`\`\`json
{
  "type": "msg",
  "data": {
    "message": "440"
  }
}
\`\`\`

Example - Object Message:
\`\`\`json
{
  "type": "msg",
  "data": {
    "message": "{type: 'loop', value: false}"
  }
}
\`\`\``, qe = `## object: Textual Audio & Control Objects

Meta-object system for creating text-based audio processing, synthesis, and control objects.
Type the object name and parameters in the expression field (e.g., "gain~ 0.5", "osc~ 440").

DATA STRUCTURE:
{
  "type": "object",
  "data": {
    "expr": "objectName param1 param2",  // Expression defining the object and initial parameters
    "name": "objectName",                 // Extracted object name (e.g., "gain~")
    "params": [value1, value2, ...]      // Array of parameter values
  }
}

AVAILABLE OBJECT TYPES:

**Audio Processing:** gain~, pan~, delay~, compressor~, waveshaper~, split~, merge~, meter~
**Filters:** lowpass~, highpass~, bandpass~, allpass~, notch~, lowshelf~, highshelf~, peaking~
**Synthesis:** osc~, sig~
**Utilities:** convolver~, fft~
**Control:** mtof, loadbang, metro, delay (control rate), adsr

CRITICAL RULES:
1. Audio objects (~) operate at audio rate, control objects at message rate
2. Connect by type: audio ports to audio ports, message ports to message ports
3. Parameters are space-separated in the expression (e.g., "gain~ 0.5" means params=[0.5])
4. Most objects correspond to Web Audio API nodes
5. Use dynamic param arrays for multi-parameter objects

EXAMPLE - Gain Control (single message inlet, single audio outlet):
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "gain~ 0.5",
    "name": "gain~",
    "params": [0.5]
  }
}
\`\`\`
Connections: message-in-0 receives gain value, audio-out-0 outputs amplified signal

EXAMPLE - Lowpass Filter (two message inlets, audio outlet):
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "lowpass~ 1000 1",
    "name": "lowpass~",
    "params": [1000, 1]
  }
}
\`\`\`
Connections: message-in-0 for cutoff, message-in-1 for Q, audio-in-0 for audio input, audio-out-0 for output

EXAMPLE - Oscillator (one message inlet, one audio outlet):
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "osc~ 440",
    "name": "osc~",
    "params": [440]
  }
}
\`\`\`
Connections: message-in-0 receives frequency, audio-out-0 outputs oscillator signal

CRITICAL: fft~ (FFT Analysis):
- fft~ has ONE audio inlet "audio-in-0" and ONE analysis outlet "analysis-out-0"
- The outlet type is "analysis", NOT "message" or "audio" \u2014 use sourceHandle: "analysis-out-0"
- Connect analysis-out-0 to hydra/glsl message inlets for audio-reactive visuals

CRITICAL: out~ (Audio Output - Speaker Output):
- out~ is a DEDICATED node type (NOT created via "object")
- Use directly: { "type": "out~", "data": { "deviceId": "" } }
- out~ has ONLY ONE audio inlet: "audio-in-0"
- MULTIPLE audio sources CAN and SHOULD connect to the SAME "audio-in-0" handle
- Web Audio automatically sums/mixes multiple connections to the same inlet
- Example: 6 drum sounds \u2192 all connect to out~ with targetHandle: "audio-in-0"
- DO NOT create separate out~ nodes for each source
- DO NOT try to connect to "audio-in-1", "audio-in-2", etc. (they don't exist!)`, We = `## orca Object Instructions

Orca esoteric programming language - every character is an operation running sequentially each frame.

CRITICAL RULES:
1. Grid-based visual programming
2. 26 letter operators (A-Z) for operations
3. Output-agnostic MIDI (noteOn, noteOff, controlChange)
4. Connect to midi.out or tone~ synth presets

Key operators:
- A-Z: Math, logic, movement operations
- :: MIDI note (channel, octave, note, velocity, length)
- %: Monophonic MIDI
- !: MIDI Control Change
- U: Euclidean rhythm generator (great for drums!)
- V: Variables
- R: Random values
- *: Bang operator
- #: Comment (halts line)

Controls:
- Click canvas to edit
- Space: play/pause
- Enter: advance one frame
- Arrow keys: navigate
- Type to edit grid

Example - Simple Melody:
\`\`\`json
{
  "type": "orca",
  "data": {
    "grid": "D8.......\\n:03C....."
  }
}
\`\`\`

Example - Euclidean Drums:
\`\`\`json
{
  "type": "orca",
  "data": {
    "grid": "U8.4....\\n*:01C.4."
  }
}
\`\`\``, Ve = `## p5 Object Instructions

P5.js creative coding environment with setup() and draw() functions.

**Additional p5 methods:**
${y}

**P5-specific methods:**
- Standard P5.js: createCanvas(), background(), fill(), rect(), circle(), etc.
- noDrag() - Disable XYFlow node dragging for interactive sketches
- noPan() - Disable XYFlow canvas panning when interacting
- noWheel() - Disable XYFlow canvas wheel zoom when interacting
- noInteract() - Disable all XYFlow canvas interactions (drag, pan, wheel)
- noOutput() - Hide video output port (call this when the sketch is self-contained and does not need to feed video to other nodes)
- setPortCount(inlets, outlets) - Set inlet/outlet count (e.g. setPortCount(1, 0) if only an inlet is needed and no message outlet)

**Default behaviors to apply unless there's a reason not to:**
- Call noOutput() by default unless the sketch is explicitly meant to output video to another node.
- Call noDrag() if the sketch uses mousePressed, mouseDragged, mouseX/mouseY interaction.
- Call noWheel() if the sketch uses scroll or mouseWheel interaction.
- Call setPortCount(1, 0) if the sketch only needs to receive messages (inlet) and does not send any output messages.

**P5-specific gotchas:**
- P5 has its own draw() loop - prefer that over requestAnimationFrame
- Do NOT make setup() asynchronous.
  - If you need to define settings, use settings.define WITHOUT await.

**Canvas size:**
- Default to 252x164 or similar sizes unless the user specifies a size. Keep canvases small as p5 is CPU-bound and large canvases cause lag.
- NEVER use windowWidth or windowHeight \u2014 the node is embedded in a canvas at a small size.
- Acceptable size range: 200\xD7150 minimum, 1000\xD71000 maximum. Prefer smaller when possible.

**Font & element sizes:**
- The node is displayed very zoomed out in the patch canvas. Use large font sizes (18px minimum, 24\u201332px for primary text) so text remains readable.
- Similarly, make shapes, lines, and UI elements larger than you would for a full-screen sketch.

${j}

${d}

${h}

Example:
\`\`\`json
{
  "type": "p5",
  "data": {
    "code": "function setup() { createCanvas(252, 164); }\\nfunction draw() { background(220); textSize(24); text('hello', 20, 80); }"
  }
}
\`\`\``, Be = `## python Object Instructions

Python code execution using Pyodide in the browser.

CRITICAL RULES:
1. Full Python 3 standard library available
2. Great for data processing and numerical computation
3. Use print() for output
4. Runs in browser via Pyodide

Available:
- Full Python standard library
- send(data): send messages to outlets
- recv(callback): receive messages from inlets
- setPortCount(inlets, outlets): set message ports

Example - Simple Calculation:
\`\`\`json
{
  "type": "python",
  "data": {
    "code": "import math\\n\\nresult = math.sqrt(16)\\nprint(f\\"Result: {result}\\")"
  }
}
\`\`\`

Example - Data Processing:
\`\`\`json
{
  "type": "python",
  "data": {
    "code": "def fibonacci(n):\\n    a, b = 0, 1\\n    result = []\\n    for _ in range(n):\\n        result.append(a)\\n        a, b = b, a + b\\n    return result\\n\\nfib = fibonacci(10)\\nprint(fib)"
  }
}
\`\`\``, Ye = `## recv Object Instructions

Receive messages from a named channel. Works wirelessly with send objects broadcasting on the same channel.

CRITICAL: This is a text object created via the "object" node type with data.expr.

Usage: recv <channel>

Example - Receive from channel "foo":
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "recv foo"
  }
}
\`\`\`

Example - Receive from channel "tempo":
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "recv tempo"
  }
}
\`\`\`

Common Patterns:
- Pair with send objects on the same channel for wireless connections
- Use descriptive channel names (e.g., "tempo", "noteOn", "position")
- Multiple recv objects can listen to the same channel
- All recv objects on the channel receive every broadcast message`, Xe = `## recv.vdo Object Instructions

Receive video frames from a named channel. Works wirelessly with send.vdo objects broadcasting on the same channel.

CRITICAL: This is a dedicated visual node type (type: "recv.vdo"), NOT an object node.

Usage: Creates a node that receives video frames from a named channel.

ATTRIBUTES:
- channel: The channel name to receive from (default: "foo")

Example - Receive video from channel "main":
\`\`\`json
{
  "type": "recv.vdo",
  "data": {
    "channel": "main"
  }
}
\`\`\`

Example - Receive video from channel "preview":
\`\`\`json
{
  "type": "recv.vdo",
  "data": {
    "channel": "preview"
  }
}
\`\`\`

Common Patterns:
- Pair with send.vdo objects on the same channel for wireless video routing
- Use descriptive channel names (e.g., "main", "preview", "layer1")
- Multiple recv.vdo objects can receive from the same channel
- Connect outlet to video consumers (bg.out, hydra, glsl, etc.)
- Useful for organizing complex video routing without visible cables`, Ke = `## ruby Object Instructions

Ruby code execution using ruby.wasm in the browser.

CRITICAL RULES:
1. Full Ruby standard library available
2. Use \`emit\` instead of \`send\` (Ruby's built-in \`send\` conflicts with JS interop)
3. Use puts/p/warn for console output
4. Data from JS is auto-converted to Ruby types (numbers, strings, arrays, hashes)

Available Functions:
- emit(data): send data to all outlets
- emit(data, to: n): send data to specific outlet (0-indexed)
- recv { |data, meta| ... }: receive messages (data auto-converted to Ruby types)
- set_port_count(inlets, outlets): configure number of ports
- set_title("title"): set the node's display title
- flash: flash the node visually
- puts(*args), p(*args), warn(*args): console output

Example - Double incoming numbers:
\`\`\`json
{
  "type": "ruby",
  "data": {
    "code": "recv { |data, meta| emit(data * 2) }"
  }
}
\`\`\`

Example - Filter and transform:
\`\`\`json
{
  "type": "ruby",
  "data": {
    "code": "recv do |data, meta|\\n  if data.is_a?(Numeric) && data > 10\\n    emit(data ** 2)\\n  end\\nend"
  }
}
\`\`\`

Example - Multiple outlets:
\`\`\`json
{
  "type": "ruby",
  "data": {
    "code": "set_port_count(1, 2)\\n\\nrecv do |data, meta|\\n  emit(data, to: 0)      # original\\n  emit(data * 2, to: 1)  # doubled\\nend"
  }
}
\`\`\`

Example - Working with arrays:
\`\`\`json
{
  "type": "ruby",
  "data": {
    "code": "recv do |data, meta|\\n  if data.is_a?(Array)\\n    emit(data.map { |x| x * 2 })\\n  end\\nend"
  }
}
\`\`\``, Je = `## send Object Instructions

Send messages to a named channel. Works wirelessly with recv objects listening on the same channel.

CRITICAL: This is a text object created via the "object" node type with data.expr.

Usage: send <channel>

Example - Send to channel "foo":
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "send foo"
  }
}
\`\`\`

Example - Send to channel "position":
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "send position"
  }
}
\`\`\`

Common Patterns:
- Pair with recv objects on the same channel for wireless connections
- Use descriptive channel names (e.g., "tempo", "noteOn", "position")
- Multiple send objects can broadcast to the same channel
- All recv objects on the channel receive the message`, Ze = `## send.vdo Object Instructions

Send video frames to a named channel. Works wirelessly with recv.vdo objects listening on the same channel.

CRITICAL: This is a dedicated visual node type (type: "send.vdo"), NOT an object node.

Usage: Creates a node that broadcasts video frames to a named channel.

ATTRIBUTES:
- channel: The channel name to broadcast to (default: "foo")

Example - Send video to channel "main":
\`\`\`json
{
  "type": "send.vdo",
  "data": {
    "channel": "main"
  }
}
\`\`\`

Example - Send video to channel "preview":
\`\`\`json
{
  "type": "send.vdo",
  "data": {
    "channel": "preview"
  }
}
\`\`\`

Common Patterns:
- Pair with recv.vdo objects on the same channel for wireless video routing
- Use descriptive channel names (e.g., "main", "preview", "layer1")
- Multiple send.vdo objects can broadcast to the same channel
- All recv.vdo objects on the channel receive the video frames
- Connect any video source (p5, hydra, glsl, webcam, etc.) to the inlet`, Qe = `## sampler~ Object Instructions

Sample playback with triggering capabilities.

CRITICAL RULES:
1. Load audio samples for triggered playback
2. Great for drum machines and one-shots
3. Connect to out~ for audio output

Messages:
- string: load sample from URL
- bang: trigger sample playback
- number: set playback rate/pitch
- {type: 'load', url: '...'}: load sample

Example - Drum Sample:
\`\`\`json
{
  "type": "sampler~",
  "data": {
    "url": "https://example.com/kick.wav"
  }
}
\`\`\``, et = `## pads~ Object Instructions

A 16-pad drum sampler triggered by MIDI noteOn/noteOff messages.
Follows the GM drum map: note 36 = pad 1 (kick), note 37 = pad 2 (side stick), ... note 51 = pad 16 (ride).

HANDLE IDS:
- Message inlet: "message-in" (receives MIDI messages)
- Audio outlet: "audio-out" (stereo mix of all pads)

MIDI INPUT FORMAT:
- { type: "noteOn", note: 36, velocity: 100 } \u2014 trigger pad 1
- { type: "noteOff", note: 36, velocity: 0 } \u2014 release pad 1 (only relevant in gated mode)

TYPICAL PATCH: midi.in \u2192 pads~ \u2192 out~

LOAD MESSAGE (to assign a sample via message):
- { type: "load", pad: 0, src: "user://Samples/kick.wav" }
- pad is zero-based (0\u201315 for 16 pads, 0\u20137 for 8 pads)

PRE-LOADING SAMPLES:
The _initialUrls field can pre-load samples, but it is ONLY set externally by the chat tool
via the insert data passthrough. Do NOT generate _initialUrls yourself \u2014 you do not have
access to valid sample URLs. Just create the pads~ with basic settings and let the chat
tool handle sample URLs.

NODE DATA SCHEMA:
{
  padCount: 8 | 16,             // number of pads (default 16)
  maxVoices: number,            // polyphony per pad (default 4)
  noteOffMode: 'ignore'|'stop', // what happens on noteOff (default 'ignore')
  showGmLabels: boolean,        // show GM drum names (default true)
  showWaveform: boolean,        // show waveform display (default true)
  showPadNumbers: boolean,      // show pad number badges (default true)
}

DATA FORMAT EXAMPLE:
{
  "type": "pads~",
  "data": {}
}`, tt = `## projmap

Projection mapper - warps video inputs onto polygon surfaces. No user code.

- **video-out-0** \u2014 composited output

**Dynamic inlets:** one \`video-in-N\` inlet per surface. To wire N video sources, pre-create N surfaces with empty points in node data (user draws the polygons later):

\`\`\`json
{
  "type": "projmap",
  "data": {
    "surfaces": [
      { "id": "s1", "points": [] },
      { "id": "s2", "points": [] }
    ]
  }
}
\`\`\`

This creates \`video-in-0\` and \`video-in-1\`. Always use unique string IDs. Connect video-out-0 to bg.out to display.
`, nt = `## samplerate~ Object Instructions

Outputs the current audio sample rate in Hz when triggered with a bang.

CRITICAL: This is a text object created via the "object" node type with data.expr.

Usage: samplerate~

Example:
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "samplerate~"
  }
}
\`\`\`

Common Patterns:
- Connect a loadbang to get sample rate on patch load
- Use with math objects for sample-rate-dependent calculations
`, ot = `## slider Object Instructions

Number slider control.

Configuration:
- min: minimum value
- max: maximum value
- defaultValue: initial value
- isFloat: true for floating point, false for integers
- isVertical: true for vertical orientation

Example - Float Slider 0 to 1:
\`\`\`json
{
  "type": "slider",
  "data": {
    "min": 0,
    "max": 1,
    "defaultValue": 0.5,
    "isFloat": true
  }
}
\`\`\``, at = `## soundfile~ Object Instructions

Load and play audio files with transport controls.

CRITICAL RULES:
1. No code needed - file loading object
2. Connect to out~ to hear audio
3. Supports audio chaining as source
4. The _initialUrl field loads a URL on creation, but it is ONLY set externally by the chat tool via the insert data passthrough. Do NOT generate _initialUrl yourself \u2014 you do not have access to valid sample URLs.

Messages:
- string or {type: 'load', url: '...'}: load audio file
- bang: restart playback
- play: start playback
- pause: pause playback
- stop: stop playback
- {type: 'loop', value: boolean}: set looping
- read: read file (used with convolver~)

Example - Audio Player:
\`\`\`json
{
  "type": "soundfile~",
  "data": {}
}
\`\`\``, st = `## strudel Object Instructions

Strudel live music coding based on TidalCycles.

**CRITICAL RULES:**
1. Use Strudel mini-notation: sound("bd sd, hh*4"), note("<c3 eb3 g3>")
2. MUST connect to out~ to hear audio \u2014 strudel has ONLY an audio outlet ("audio-out"), NO message outlets
3. Only ONE strudel plays at a time
4. Use Ctrl/Cmd+Enter in editor to re-evaluate

**Available Methods:**
- setTitle(name) - Set node title
- Standard Strudel: sound(), note(), setcpm(), cpm() for tempo
- All chainable Strudel pattern functions

**Message Passing:**
- recv((data, meta) => {}) - Register inlet callback
  * data: the message payload (use directly, NOT m.data)
  * meta.inlet: inlet index (0, 1, 2, ...)
- setPortCount(inlets, outlets) - Configure number of message ports

**Control Messages Format:**
- Bang is {type: 'bang'}
- Control messages MUST have a 'type' field (e.g. {type: 'bang'}, {type: 'play'})
- Common control messages: bang (most common), clear, reset, start, stop, pause, play, run, toggle

Example - Drum pattern:
\`\`\`json
{
  "type": "strudel",
  "data": {
    "code": "sound(\\"bd sd, hh*4\\").cpm(120)"
  }
}
\`\`\`

Example - With tempo control:
\`\`\`json
{
  "type": "strudel",
  "data": {
    "code": "setPortCount(1); let tempo = 120; recv(t => { if (typeof t === 'number') tempo = t; }); sound(\\"bd sd\\").cpm(() => tempo)"
  }
}
\`\`\``, it = `## surface Object Instructions

Fullscreen interactive canvas overlay for live performance. Captures pointer/touch input. Auto-freezes DOM-renderer nodes (p5, canvas.dom) while keeping the FBO video pipeline running underneath.

**Surface-specific methods:**
- ctx: 2D canvas context
- width, height: always window dimensions (updated on resize)
- mouse: {x, y, down, buttons} \u2014 x/y normalized 0\u20131, down: boolean, buttons: 0=none 1=left 2=right
- onPointer(({ x, y, buttons, down, type }) => {})
  pointer events (type: 'move'|'down'|'up'); down: boolean, buttons: 0=none 1=left 2=right
- onTouch((touches) => {}) \u2014 multi-touch: array of { id, x, y, pressure }
- onKeyDown(event => {}) \u2014 keyboard down
- onKeyUp(event => {}) \u2014 keyboard up
- setDrawMode('always'|'interact'|'manual') \u2014 control render loop
- redraw() \u2014 trigger a draw in manual mode
- activate() / deactivate() \u2014 enter/exit fullscreen from code
- noOutput() \u2014 hide video output port

**Coordinate system:**
- All pointer/touch coords are normalized 0\u20131
- Multiply by width/height to get pixel coordinates: x * width, y * height

**Default behaviors to apply unless there's a reason not to:**
- Call noOutput() unless the sketch explicitly outputs video to another node.
- Use setDrawMode('interact') for sketches that only update on input (saves CPU).
- Do NOT call setCanvasSize \u2014 the surface always fills the window.
- Do NOT call noDrag/noPan/noWheel \u2014 the surface canvas is non-interactive by default.

**draw() function \u2014 how the render loop works:**
Define a function named exactly \`draw\` and the surface drives it automatically based on the draw mode.
No requestAnimationFrame call needed \u2014 the surface detects \`draw\` and wires it up.

- setDrawMode('always') + function draw() {} \u2192 called every frame in a continuous loop
- setDrawMode('interact') + function draw() {} \u2192 called on every pointer event
- setDrawMode('manual') + function draw() {} \u2192 called only when redraw() is invoked

Do NOT call draw() directly or wrap it in requestAnimationFrame yourself.

Example - Paint on touch/pointer:
\`\`\`json
{
  "type": "surface",
  "data": {
    "code": "noOutput(); ctx.fillStyle = '#000'; ctx.fillRect(0, 0, width, height); onPointer(({ x, y, down, type }) => { if (!down) return; ctx.beginPath(); ctx.arc(x * width, y * height, 20, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.fill(); });"
  }
}
\`\`\`

Example - Multi-touch ripples:
\`\`\`json
{
  "type": "surface",
  "data": {
    "code": "noOutput(); setDrawMode('always'); const ripples = []; onTouch((touches) => { for (const t of touches) ripples.push({ x: t.x * width, y: t.y * height, r: 0, a: 1 }); }); function draw() { ctx.fillStyle = 'rgba(0,0,0,0.1)'; ctx.fillRect(0, 0, width, height); for (let i = ripples.length - 1; i >= 0; i--) { const r = ripples[i]; ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2); ctx.strokeStyle = \`rgba(100,200,255,\${r.a})\`; ctx.lineWidth = 2; ctx.stroke(); r.r += 4; r.a -= 0.02; if (r.a <= 0) ripples.splice(i, 1); } }"
  }
}
\`\`\``, rt = "## swgl Object Instructions\n\nSwissGL - WebGL2 wrapper for concise shaders. Must implement `render({ t })` function.\n\n**CRITICAL: `glsl()` is always async.** Always `await` it during setup, never inside `render`.\n**`#include` directives work automatically** in `FP`, `VP`, and `Inc` fields.\n\n**Required pattern \u2014 always:**\n```javascript\nconst shader = await glsl({ /* compile-time config */ });\nfunction render({ t }) {\n  shader({ t }); // per-frame uniforms passed here\n}\n```\n\n## Parameters\n\n**Shaders:**\n- `VP`: Vertex shader (shorthand `x,y,z,w` or multiline with `VPos = vec4(...)`)\n- `FP`: Fragment shader (shorthand `r,g,b,a` or multiline with `FOut = vec4(...)`)\n- `Inc`: Shared code included in both VP and FP\n\n**Geometry:**\n- `Mesh: [w, h]`: Tessellated plane (default [1,1])\n- `Grid: [w, h, d]`: Instance grid for multiple copies (access via `ID`)\n\n**Rendering:**\n- `Clear: [r, g, b, a]`: Clear color before drawing\n- `Blend: 's+d'`: Blend expression (`s`=source, `d`=dest, `sa`/`da`=alphas)\n- `DepthTest: true`: Enable depth test (`true`, `false`, `'keep'`)\n- `Face: 'back'`: Cull faces (`'front'` or `'back'`)\n- `Aspect: 'fit'`: Coord scaling (`'fit'`, `'cover'`, `'mean'`, `'x'`, `'y'`)\n- `View: [x, y, w, h]`: Viewport specification\n\n**Textures/Buffers:**\n- `tag: 'name'`: Cache buffer for reuse\n- `story: N`: Frame history (N rotating textures, previous as `Src`)\n- `size: [w, h]`: Texture dimensions\n- `format`: `'rgba8'`, `'rgba16f'`, `'rgba32f'`, `'r8'`, `'r16f'`, `'r32f'`\n- `filter: 'linear'`: Texture filter (`'nearest'` or `'linear'`)\n- `wrap: 'repeat'`: Texture wrap (`'repeat'`, `'edge'`, `'mirror'`)\n\n## Variables\n\n**Vertex Shader:**\n- `XY`: vec2 in [-1, 1] range\n- `UV`: vec2 in [0, 1] range\n- `VID`: ivec2 vertex index\n- `ID`: ivec3 instance ID (when using Grid)\n- `Mesh`, `Grid`: ivec dimension uniforms\n- `VPos`: vec4 output position (required in multiline VP)\n\n**Fragment Shader:**\n- `I`: ivec2 pixel coordinates\n- `FOut`: vec4 output color (required in multiline FP)\n\n**Texture Sampling:**\n- `Src(I)`: Sample previous frame (with `story`)\n- `textureName(ivec2)`: texelFetch (integer coords)\n- `textureName(vec2)`: filtered lookup (float coords)\n\n**Constants:** `TAU` (2\u03C0), `PI` (\u03C0)\n\n**Varyings:** Declare `varying vec3 v = value;` in VP, use `v` in FP\n\n## Examples\n\n### Simple Fragment\n```javascript\nconst shader = await glsl({\n  FP: \\`vec3(sin(t+XY.x*5.0), cos(t+XY.y*3.0), 0.5),1\\`,\n});\nfunction render({ t }) {\n  shader({ t });\n}\n```\n\n### 3D Mesh with Lighting\n```javascript\nconst shader = await glsl({\n  Mesh: [40, 20],\n  VP: \\`\n    vec2 ang = XY * vec2(TAU, TAU/2.0);\n    vec3 pos = vec3(cos(ang.x)*cos(ang.y), sin(ang.y), sin(ang.x)*cos(ang.y)) * 0.6;\n    float s = sin(t*0.5), c = cos(t*0.5);\n    pos.xz = mat2(c, s, -s, c) * pos.xz;\n    varying vec3 vPos = pos;\n    VPos = vec4(pos, 1.0);\\`,\n  FP: \\`\n    vec3 n = normalize(vPos);\n    float light = dot(n, normalize(vec3(1,1,0.5))) * 0.5 + 0.5;\n    FOut = vec4(vec3(0.4, 0.6, 1.0) * light, 1.0);\\`\n});\nfunction render({ t }) {\n  shader({ t, Clear: [0, 0, 0, 1] });\n}\n```\n\n### Feedback Trail (using story)\n```javascript\nconst trail = await glsl({\n  story: 2, tag: 'trail',\n  FP: \\`\n    vec3 col = Src(I).rgb * 0.98;\n    float d = length(XY*0.5 - 0.3*vec2(cos(t), sin(t)));\n    col += vec3(1, 0.5, 0.2) * smoothstep(0.1, 0.0, d);\n    FOut = vec4(col, 1);\\`\n});\nconst display = await glsl({ tag: 'trail', FP: 'Src(I)' });\nfunction render({ t }) {\n  trail({ t });\n  display({});\n}\n```", lt = `## textbox Object Instructions

Multi-line text input for user text entry.

CRITICAL RULES:
1. No code needed - configuration only
2. Outputs current text on bang
3. Accepts string input to set text

Messages:
- Receives: bang (outputs current text)
- Receives: string (sets text content)
- Outputs: string (current text)

Example - Text Input:
\`\`\`json
{
  "type": "textbox",
  "data": {
    "text": "Enter your text here..."
  }
}
\`\`\``, ct = `## toggle Object Instructions

Boolean toggle switch for on/off control.

CRITICAL RULES:
1. No code needed - configuration only
2. Outputs true/false boolean values
3. Visual state changes on click

Messages:
- Receives: boolean (sets toggle state)
- Receives: bang (toggles state)
- Outputs: boolean (true/false)

Example - Toggle Switch:
\`\`\`json
{
  "type": "toggle",
  "data": {
    "value": false
  }
}
\`\`\``, dt = `## tone~ Object Instructions

Tone.js synthesis and audio processing.

**Tone-specific CRITICAL RULES:**
1. NEVER use .toDestination() - always .connect(outputNode)
2. Use absolute time in SECONDS (0.1, 0.5) NOT notation ('8n', '16n')
3. ALWAYS return { cleanup: () => node.dispose() }
4. For audio inlet: node.input.connect(inputNode) (double .input)

**Tone-specific methods:**
- Tone: the Tone.js library
- inputNode: GainNode for audio input (connect to it)
- outputNode: GainNode for audio output (connect your nodes to this)

**Tone-specific gotchas:**
- fft() is NOT available (audio node, not video)
- Use return { cleanup } instead of onCleanup for Tone.js disposal

Example - Simple synth:
\`\`\`json
{
  "type": "tone~",
  "data": {
    "code": "setPortCount(1); const synth = new Tone.Synth().connect(outputNode); recv(m => { if (m?.type === 'bang') synth.triggerAttackRelease('C4', 0.25); }); return { cleanup: () => synth.dispose() };"
  }
}
\`\`\``, ut = `## uxn Object Instructions

Uxn virtual machine for running programs written in Uxntal assembly.

CRITICAL RULES:
1. Conforms to Varvara device specifications
2. Write Uxntal assembly code
3. Press Shift+Enter to assemble and load
4. Canvas captures keyboard/mouse input (click to focus)
5. Auto-loads on mount: code (if no URL/ROM) or URL (if no code/ROM)

Available:
- Full Uxntal instruction set
- Console output sent as messages
- Video output supports chaining
- Load ROM: drop .rom file or use Load ROM button
- Auto-assembly: code is assembled on mount and on bang

Messages:
- string: If starts with http:// or https://, loads ROM from URL. Otherwise assembles as Uxntal code
- bang or {type: 'bang'}: Re-assembles code if available, or reloads URL if available
- Uint8Array: load ROM from binary
- File: load ROM from file
- {type: 'load', url: string}: load ROM from URL
- Outputs: console strings

Example - Hello World:
\`\`\`json
{
  "type": "uxn",
  "data": {
    "code": "|10 @Console &vector $2 &read $1 &pad $5 &write $1\\n\\n|100\\n  ;hello-txt\\n  &loop\\n    LDAk .Console/write DEO\\n    INC2 LDAk ,&loop JCN\\n  POP2\\n  BRK\\n\\n@hello-txt \\"Hello 20 \\"World! 00"
  }
}
\`\`\`

Example - Load from URL:
\`\`\`json
{
  "type": "uxn",
  "data": {
    "url": "https://example.com/program.rom"
  }
}
\`\`\``, pt = `## sonic~ Object Instructions

SuperCollider synthesis via SuperSonic AudioWorklet.

**Available globals:**
- \`sonic\` \u2014 SuperSonic instance (already initialized)
- \`SuperSonic\` \u2014 Static utilities (e.g., \`SuperSonic.osc.encodeMessage()\`)
- \`on(event, callback)\` \u2014 Subscribe to SuperSonic events
- \`outBus\` \u2014 Assigned output bus index for this node (number)

**Sonic-specific gotchas:**
- fft() is NOT available (audio output node, not video)
- By default, the Prophet synth is loaded
- **CRITICAL**: Each sonic~ node has its own isolated output bus
  Always pass \`'out_bus', outBus\` when creating synths to route audio to the correct output.
  Without this, audio goes to bus 0 which may belong to a different sonic~ node.

${h}

## SuperSonic API

**Core methods:**
- \`sonic.send(address, ...args)\` \u2014 Send OSC message (auto-typed: number\u2192int/float, string\u2192s, boolean\u2192T/F)
- \`sonic.sync(syncId?)\` \u2014 Wait for scsynth to finish pending async commands
- \`sonic.nextNodeId()\` \u2014 Get a unique node ID (thread-safe)

**Asset loading:**
- \`sonic.loadSynthDef(source)\` \u2014 Load synthdef by name, URL, bytes, or File
- \`sonic.loadSynthDefs(names[])\` \u2014 Load multiple synthdefs in parallel
- \`sonic.loadSample(bufnum, source, startFrame?, numFrames?)\` \u2014 Decode audio file into buffer
- \`sonic.sampleInfo(source)\` \u2014 Get sample metadata (frames, channels, sampleRate) without allocating

**Lifecycle:**
- \`sonic.suspend()\` / \`sonic.resume()\` \u2014 Pause/resume AudioContext
- \`sonic.reset()\` \u2014 Shutdown and re-init
- \`sonic.recover()\` \u2014 Smart recovery (resume or full reload)

**Monitoring:**
- \`sonic.getTree()\` \u2014 Hierarchical node tree
- \`sonic.getLoadedBuffers()\` \u2014 Info on all allocated buffers

**Events** (via \`on(event, cb)\`):
- \`'ready'\` \u2014 Engine fully booted
- \`'setup'\` \u2014 After init, before ready (async-friendly for group setup)
- \`'in'\` / \`'out'\` \u2014 Decoded OSC messages from/to scsynth
- \`'error'\` \u2014 Error messages from scsynth

**Static OSC utilities:**
- \`SuperSonic.osc.encodeMessage(address, args)\` \u2014 Encode OSC message to bytes
- \`SuperSonic.osc.encodeBundle(time, packets)\` \u2014 Encode timed bundle
- \`SuperSonic.osc.decode(bytes)\` \u2014 Decode OSC bytes
- \`SuperSonic.osc.ntpNow()\` \u2014 Current NTP timestamp (for bundles)

## OSC Command Reference

**Synth operations:**
- \`/s_new name nodeID addAction target [control value ...]\` \u2014 Create synth (addAction: 0=head, 1=tail, 2=before, 3=after)
- \`/n_set nodeID control value [...]\` \u2014 Set synth control values
- \`/n_setn nodeID control startIndex count values[]\` \u2014 Set consecutive controls
- \`/n_free nodeID [...]\` \u2014 Delete nodes
- \`/n_run nodeID flag\` \u2014 Enable (1) or disable (0) a node
- \`/n_map nodeID control busIndex [...]\` \u2014 Map control to control bus
- \`/n_mapa nodeID control busIndex [...]\` \u2014 Map control to audio bus

**Group management:**
- \`/g_new nodeID addAction target\` \u2014 Create group
- \`/g_head groupID nodeID\` \u2014 Move node to group head
- \`/g_tail groupID nodeID\` \u2014 Move node to group tail
- \`/g_freeAll groupID\` \u2014 Free all nodes in group
- \`/g_deepFree groupID\` \u2014 Recursively free all synths in group

**Buffer operations:**
- \`/b_alloc bufnum frames channels\` \u2014 Allocate empty buffer
- \`/b_allocRead bufnum path startFrame numFrames\` \u2014 Load audio file into buffer
- \`/b_free bufnum\` \u2014 Free buffer
- \`/b_set bufnum index value [...]\` \u2014 Set buffer samples
- \`/b_gen bufnum command args\` \u2014 Generate waveform (e.g., sine1, cheby)

**Control buses:**
- \`/c_set busIndex value [...]\` \u2014 Set control bus value
- \`/c_get busIndex\` \u2014 Read control bus value

**SynthDef management:**
- \`/d_recv data\` \u2014 Load synthdef from bytes
- \`/d_free name [...]\` \u2014 Unload synthdef

**Server:**
- \`/status\` \u2014 Get server metrics
- \`/sync id\` \u2014 Wait for async operations to complete

Example \u2014 simple synth controlled by frequency messages:
\`\`\`js
const id = sonic.nextNodeId();
sonic.send('/s_new', 'default', id, 1, 0,
  'freq', 440, 'amp', 0.3, 'out_bus', outBus);

recv(m => {
  if (typeof m === 'number') {
    sonic.send('/n_set', id, 'freq', m);
  }
});
\`\`\`

Example \u2014 MIDI-controlled synth with note management:
\`\`\`js
setPortCount(1);
await sonic.loadSynthDef('sonic-pi-beep');

const activeNotes = new Map();

recv(msg => {
  if (!msg || typeof msg !== 'object') return;

  const { type, note, velocity } = msg;

  if (type === 'noteOn') {
    if (activeNotes.has(note)) sonic.send('/n_set', activeNotes.get(note), 'gate', 0);

    const id = sonic.nextNodeId();
    activeNotes.set(note, id);

    sonic.send('/s_new', 'sonic-pi-beep', id, 0, 0,
      'note', note, 'amp', (velocity || 127) / 127,
      'gate', 1, 'out_bus', outBus);
  } else if (type === 'noteOff') {
    const id = activeNotes.get(note);

    if (id !== undefined) {
      sonic.send('/n_set', id, 'gate', 0); activeNotes.delete(note);
    }
  }
});

onCleanup(() => {
  activeNotes.forEach(id => sonic.send('/n_free', id));
  activeNotes.clear();
});
\`\`\``, mt = `## elem~ Object Instructions

Elementary Audio declarative DSP synthesis and processing.

**Elem-specific CRITICAL RULES:**
1. Use el.* primitives to build audio graphs
2. Use core.createRef() for dynamic parameter control
3. Render graph to outputNode: core.render(graph, outputNode)

**Elem-specific methods:**
- el: Elementary library (el.sine, el.square, el.delay, el.mix, etc.)
- core: WebRenderer instance with createRef() for reactivity
- inputNode: GainNode for audio input
- outputNode: GainNode for audio output (IMPORTANT: render to this)
- node: AudioWorkletNode for Web Audio connectivity

**Elem-specific gotchas:**
- fft() is NOT available (audio node, not video)

${h}

See Elementary docs: https://www.elementary.audio

Example - Sine oscillator:
\`\`\`json
{
  "type": "elem~",
  "data": {
    "code": "setTitle('osc~'); const graph = el.sine(440); core.render(el.mul(graph, 0.1), outputNode);"
  }
}
\`\`\`

Example - Frequency control:
\`\`\`json
{
  "type": "elem~",
  "data": {
    "code": "setPortCount(1); let [freq, setFreq] = core.createRef('const', {value: 440}, []); recv(f => { if (typeof f === 'number') setFreq({value: f}); }); const graph = el.sine(freq); core.render(el.mul(graph, 0.1), outputNode);"
  }
}
\`\`\``, ht = `## label Object Instructions

Simple text label for displaying static text or annotations in your patch.

CRITICAL RULES:
1. No code needed - configuration only
2. No inlets or outlets - purely for display
3. Double-click to edit the label text
4. Supports multi-line text with newlines

Text Display:
- Shows the 'message' field as static text
- Editable via double-click or edit button
- Monospace font rendering
- Preserves whitespace and newlines

Example - Simple Label:
\`\`\`json
{
  "type": "label",
  "data": {
    "message": "label"
  }
}
\`\`\`

Example - Multi-line Label:
\`\`\`json
{
  "type": "label",
  "data": {
    "message": "Audio Section\\n-----------\\nMix controls"
  }
}
\`\`\`

Example - Comment/Annotation:
\`\`\`json
{
  "type": "label",
  "data": {
    "message": "TODO: Connect to reverb"
  }
}
\`\`\``, ft = `## title Object Instructions

Centered text card for slide titles, section headers, and diagram labels.

CRITICAL RULES:
1. No code needed - configuration only
2. No inlets or outlets - purely for display
3. Double-click to edit the text
4. Designed for presentations and visual diagrams

Configuration:
- text: The displayed text
- color: Background color (default: 'transparent')
- fontSize: Font size in pixels (10, 14, 20, 28, 40, 56)
- font: 'default' or 'mono'
- bordered: Show a border (true/false)

Example - Slide Title:
\`\`\`json
{
  "type": "title",
  "data": {
    "text": "Audio Synthesis",
    "color": "transparent",
    "fontSize": 40,
    "font": "default",
    "bordered": false
  }
}
\`\`\`

Example - Section Label with Background:
\`\`\`json
{
  "type": "title",
  "data": {
    "text": "Effects Chain",
    "color": "#18181b",
    "fontSize": 20,
    "font": "mono",
    "bordered": true
  }
}
\`\`\``, gt = `## vue Object Instructions

Vue 3 reactive components with Composition API. Container is fluid-sized by default.

**Tailwind CSS is enabled by default!** Use Tailwind utility classes for styling in templates. Call \`tailwind(false)\` to disable it for better performance if not needed.

**Vue-specific methods:**
- root: HTMLDivElement - the container element to mount your Vue app
- width, height: Container dimensions (undefined if fluid, set after setSize)
- setSize(w, h): Set fixed container dimensions
- setHidePorts(hide): Hide/show ports
- noDrag(), noPan(), noWheel(), noInteract() - Interaction control (whole node)
- tailwind(enabled): Enable/disable Tailwind CSS (enabled by default)

**Selective canvas interaction (CSS classes):**
Apply these classes to individual elements to block canvas interactions only for that element:
- "nodrag" \u2014 prevent node drag when the user interacts with this element
- "nopan" \u2014 prevent canvas pan when the user interacts with this element
- "nowheel" \u2014 prevent canvas zoom when scrolling over this element

**Vue 3 APIs (auto-imported):**
- createApp: Create and mount Vue applications
- ref, reactive: Reactive state
- computed: Computed properties
- watch, watchEffect: Watchers
- onMounted, onUnmounted: Lifecycle hooks
- nextTick: DOM update timing
- h: Render function helper
- defineComponent: Component definition

**Caveats**
- If you use a border, you must use rounded-lg in the outer container, otherwise the border will be cut off.
- Do NOT use gradient colors in Tailwind classes, like "bg-gradient-to-r from-amber-500 to-orange-400". They are not supported.

Example - Simple reactive counter with Tailwind:
\`\`\`json
{
  "type": "vue",
  "data": {
    "code": "noDrag(); setSize(150, 80); createApp({ template: '<div class="p-4 text-center"><h2 class="text-green-400 text-2xl m-0">{{ count }}</h2><button @click="increment" class="mt-2 px-3 py-1 bg-green-400 text-black rounded cursor-pointer">+1</button></div>', setup() { const count = ref(0); const increment = () => count.value++; return { count, increment } } }).mount(root)"
  }
}
\`\`\`

Example - Reactive list with messages:
\`\`\`json
{
  "type": "vue",
  "data": {
    "code": "setSize(200, 150); const items = reactive([]); recv(msg => items.push(msg)); createApp({ template: '<ul class="list-none p-2 m-0"><li v-for="item in items" class="p-1 text-zinc-400">{{ item }}</li></ul>', setup() { return { items } } }).mount(root)"
  }
}
\`\`\`

Example - Two-way binding form:
\`\`\`json
{
  "type": "vue",
  "data": {
    "code": "noDrag(); setSize(250, 100); const text = ref(''); const submit = () => send(text.value); createApp({ template: '<div class="p-2"><input v-model="text" class="w-full p-2 mb-2 bg-zinc-800 border border-zinc-600 text-white rounded"><button @click="submit" class="w-full p-2 bg-green-400 text-black rounded cursor-pointer">Send</button></div>', setup() { return { text, submit } } }).mount(root)"
  }
}
\`\`\``, yt = `## regl Object Instructions

Low-level GPU rendering using [regl](https://github.com/regl-project/regl) \u2014 a functional WebGL wrapper. Use for custom draw commands with full control over vertices, buffers, elements, blend modes, multi-pass rendering, and geometry.

**\`#include\` directives are auto-preprocessed** in \`frag\` and \`vert\` shader strings.

Sits between the high-level glsl node (fragment shader only) and building a full custom renderer. You get direct access to the regl instance and input textures as regl textures (zero copy).

**regl-specific globals:**
- regl: The regl instance (shared with the rendering pipeline)
- width, height: Output framebuffer dimensions

**regl-specific methods:**
- setVideoCount(inlets, outlets) - Configure video inlets/outlets (default 1, 1)
- getTexture(index) - Get regl Texture2D from video inlet (0-based index, returns null if not connected)
- noDrag(), noPan(), noWheel(), noInteract() - Interaction control
- noOutput() - Hide video output port

**Multi-Render Target (MRT) \u2014 multiple video outlets:**
- Call \`setVideoCount(inlets, N)\` for N outlets, then use \`layout(location = N) out vec4\` in frag
- REQUIRES \`#version 300 es\` and WebGL2 syntax: \`in\`/\`out\` instead of \`attribute\`/\`varying\`, no \`gl_FragColor\`
- Example: \`setVideoCount(0, 2)\` + \`layout(location = 0) out vec4 albedo; layout(location = 1) out vec4 normals;\`

**regl-specific gotchas:**
- CRITICAL: Every regl draw command MUST include vert, frag, attributes, and count. Omitting vert causes "(regl) missing vertex shader" errors. Always use the fullscreen quad boilerplate below.
- Use render(time) function for the render loop \u2014 it's called every frame automatically
- The output framebuffer is already bound when render() is called \u2014 just draw directly
- regl.clear() auto-injects the output framebuffer if you omit the framebuffer key
- All regl resources (buffers, textures, elements, draw commands) are automatically cleaned up on code reload or node deletion \u2014 no manual cleanup needed
- Runs in web worker \u2014 no direct DOM access

**Fullscreen quad boilerplate** \u2014 use this for any 2D effect:
\`\`\`js
const draw = await regl({
  vert: \\\`
    precision mediump float;
    attribute vec2 position;
    varying vec2 uv;
    void main() {
      uv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0, 1);
    }
  \\\`,
  frag: \\\`/* your fragment shader */\\\`,
  attributes: { position: [[-1,-1], [1,-1], [-1,1], [-1,1], [1,-1], [1,1]] },
  count: 6,
  depth: { enable: false },
})
\`\`\`

**Font & element sizes:**
- The node is displayed very zoomed out in the patch canvas. Use large font sizes and shapes.

${d}

**Render Pattern:**
Define a \`render(time)\` function that will be called every frame:
\`\`\`js
function render(time) {
  regl.clear({ color: [0, 0, 0, 1] })
  draw({ time })
}
\`\`\`

Example - Fullscreen color gradient:
\`\`\`json
{
  "type": "regl",
  "data": {
    "code": "const draw = await regl({\\n  vert: \`\\n    precision mediump float;\\n    attribute vec2 position;\\n    varying vec2 uv;\\n    void main() {\\n      uv = position * 0.5 + 0.5;\\n      gl_Position = vec4(position, 0, 1);\\n    }\\n  \`,\\n  frag: \`\\n    precision mediump float;\\n    varying vec2 uv;\\n    uniform float time;\\n    void main() {\\n      gl_FragColor = vec4(\\n        sin(uv.x * 6.28 + time) * 0.5 + 0.5,\\n        sin(uv.y * 6.28 + time * 1.3) * 0.5 + 0.5,\\n        sin((uv.x + uv.y) * 3.14 + time * 0.7) * 0.5 + 0.5,\\n        1.0\\n      );\\n    }\\n  \`,\\n  attributes: {\\n    position: [[-1,-1], [1,-1], [-1,1], [-1,1], [1,-1], [1,1]]\\n  },\\n  uniforms: {\\n    time: regl.prop('time'),\\n  },\\n  count: 6,\\n  depth: { enable: false },\\n})\\n\\nfunction render(time) {\\n  regl.clear({ color: [0, 0, 0, 1] })\\n  draw({ time })\\n}"
  }
}
\`\`\`

Example - Video texture mixer (2 inputs):
\`\`\`json
{
  "type": "regl",
  "data": {
    "code": "setVideoCount(2, 1)\\n\\nconst draw = await regl({\\n  vert: \`\\n    precision mediump float;\\n    attribute vec2 position;\\n    varying vec2 uv;\\n    void main() {\\n      uv = position * 0.5 + 0.5;\\n      gl_Position = vec4(position, 0, 1);\\n    }\\n  \`,\\n  frag: \`\\n    precision mediump float;\\n    varying vec2 uv;\\n    uniform sampler2D tex0;\\n    uniform sampler2D tex1;\\n    uniform float time;\\n    void main() {\\n      vec4 a = texture2D(tex0, uv);\\n      vec4 b = texture2D(tex1, uv);\\n      gl_FragColor = mix(a, b, sin(time) * 0.5 + 0.5);\\n    }\\n  \`,\\n  attributes: {\\n    position: [[-1,-1], [1,-1], [-1,1], [-1,1], [1,-1], [1,1]]\\n  },\\n  uniforms: {\\n    tex0: () => getTexture(0),\\n    tex1: () => getTexture(1),\\n    time: regl.prop('time'),\\n  },\\n  count: 6,\\n  depth: { enable: false },\\n})\\n\\nfunction render(time) {\\n  regl.clear({ color: [0, 0, 0, 0] })\\n  draw({ time })\\n}"
  }
}
\`\`\``, bt = `## three Object Instructions

Three.js 3D graphics environment running in a Web Worker (offscreen rendering). Use for GPU-accelerated 3D scenes that chain with other video nodes.

**\`#include\` directives**: Use \`await glsl\` tagged template \u2014 required because Patchies can't intercept THREE.ShaderMaterial directly:
\`\`\`js
const material = new THREE.ShaderMaterial({
  fragmentShader: await glsl\`#include <lygia/generative/snoise>\\nvoid main() { ... }\`,
})\`\`\`

**Three-specific globals:**
- THREE: Full Three.js library namespace
- renderer: WebGLRenderer instance
- width, height: Canvas dimensions
- mouse: {x, y} coordinates

**Three-specific methods:**
- setVideoCount(inlets, outlets) - Configure video inlets/outlets (default 1, 1)
- getTexture(index) - Get Three.js Texture from video inlet (0-based index)
- noDrag(), noPan(), noWheel(), noInteract() - Interaction control
- noOutput() - Hide video output port
- setHidePorts(bool) - Toggle port visibility

**Three-specific gotchas:**
- Use draw(time) function for render loop instead of requestAnimationFrame
- Runs in web worker - no direct DOM access

**Font & element sizes:**
- The node is displayed very zoomed out in the patch canvas. Use large font sizes (18px minimum, 24\u201332px for primary text) so text remains readable.
- Similarly, make shapes, lines, and UI elements larger than you would for a full-screen sketch.

${d}

**Render Pattern:**
Define a \`draw(time)\` function that will be called every frame:
\`\`\`js
function draw(time) {
  // Update scene
  renderer.render(scene, camera)
}
\`\`\`

Example - Basic rotating cube:
\`\`\`json
{
  "type": "three",
  "data": {
    "code": "const { Scene, PerspectiveCamera, BoxGeometry, Mesh, MeshNormalMaterial } = THREE\\n\\nconst scene = new Scene()\\nconst camera = new PerspectiveCamera(75, width / height, 0.1, 1000)\\ncamera.position.z = 2\\n\\nconst geometry = new BoxGeometry(1, 1, 1)\\nconst material = new MeshNormalMaterial()\\nconst cube = new Mesh(geometry, material)\\nscene.add(cube)\\n\\nfunction draw(t) {\\n  cube.rotation.x += 0.01\\n  cube.rotation.y += 0.01\\n  renderer.render(scene, camera)\\n}"
  }
}
\`\`\`

Example - Video texture on 3D shape:
\`\`\`json
{
  "type": "three",
  "data": {
    "code": "const { Scene, PerspectiveCamera, TorusKnotGeometry, Mesh, MeshBasicMaterial } = THREE\\n\\nsetVideoCount(1, 1)\\n\\nconst scene = new Scene()\\nconst camera = new PerspectiveCamera(75, width / height, 0.1, 1000)\\ncamera.position.z = 2.5\\n\\nconst geometry = new TorusKnotGeometry(0.8, 0.25, 150, 20)\\nconst material = new MeshBasicMaterial({ color: 0xffffff })\\nconst shape = new Mesh(geometry, material)\\nscene.add(shape)\\n\\nfunction draw(t) {\\n  const tex = getTexture(0)\\n  if (tex) {\\n    material.map = tex\\n    material.needsUpdate = true\\n  }\\n  shape.rotation.x = t * 0.0005\\n  shape.rotation.y = t * 0.0008\\n  renderer.render(scene, camera)\\n}"
  }
}
\`\`\``, vt = `## three.dom Object Instructions

Three.js 3D graphics on the main thread. Use for interactive 3D with mouse/keyboard input. Renders directly to canvas (no worker).

**Three.dom-specific globals:**
- THREE: Full Three.js library namespace (lazy-loaded)
- renderer: WebGLRenderer instance
- canvas: HTML5 Canvas element
- width, height: Canvas dimensions
- mouse: {x, y, down, buttons} with touch support

**Three.dom-specific methods:**
- setCanvasSize(w, h) - Resize canvas and renderer
- noDrag(), noPan(), noWheel(), noInteract() - Interaction control
- noOutput() - Hide video output port
- setHidePorts(bool) - Toggle port visibility
- onKeyDown(event => {}) - Keyboard down events (event.key, event.code)
- onKeyUp(event => {}) - Keyboard up events

**Three.dom-specific gotchas:**
- Use draw(time) function for render loop instead of requestAnimationFrame
- Call setCanvasSize(width, height) with appropriate dimensions. Do not exceed 2000x2000 to avoid performance issues.
- When using setCanvasSize, make sure to define width and height variables:
  e.g. const width = 800, height = 600; setCanvasSize(width, height);

${d}

**Render Pattern:**
Define a \`draw(time)\` function that will be called via setAnimationLoop:
\`\`\`js
function draw(time) {
  // Update scene based on mouse, time, etc.
  renderer.render(scene, camera)
}
\`\`\`

Example - Interactive rotating cube:
\`\`\`json
{
  "type": "three.dom",
  "data": {
    "code": "const { Scene, PerspectiveCamera, BoxGeometry, Mesh, MeshNormalMaterial } = THREE\\n\\nnoDrag()\\n\\nconst scene = new Scene()\\nconst camera = new PerspectiveCamera(75, width / height, 0.1, 1000)\\ncamera.position.z = 2\\n\\nconst geometry = new BoxGeometry(1, 1, 1)\\nconst material = new MeshNormalMaterial()\\nconst cube = new Mesh(geometry, material)\\nscene.add(cube)\\n\\nfunction draw(t) {\\n  cube.rotation.x = mouse.y * 0.01\\n  cube.rotation.y = mouse.x * 0.01\\n  renderer.render(scene, camera)\\n}"
  }
}
\`\`\`

Example - Keyboard-controlled camera:
\`\`\`json
{
  "type": "three.dom",
  "data": {
    "code": "const { Scene, PerspectiveCamera, BoxGeometry, Mesh, MeshNormalMaterial, GridHelper } = THREE\\n\\nnoDrag()\\n\\nconst scene = new Scene()\\nconst camera = new PerspectiveCamera(75, width / height, 0.1, 1000)\\ncamera.position.set(0, 2, 5)\\n\\nscene.add(new GridHelper(10, 10))\\nconst cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshNormalMaterial())\\nscene.add(cube)\\n\\nlet moveX = 0, moveZ = 0\\nonKeyDown(e => {\\n  if (e.key === 'ArrowLeft') moveX = -0.1\\n  if (e.key === 'ArrowRight') moveX = 0.1\\n  if (e.key === 'ArrowUp') moveZ = -0.1\\n  if (e.key === 'ArrowDown') moveZ = 0.1\\n})\\nonKeyUp(e => { moveX = 0; moveZ = 0 })\\n\\nfunction draw(t) {\\n  camera.position.x += moveX\\n  camera.position.z += moveZ\\n  renderer.render(scene, camera)\\n}"
  }
}
\`\`\``, wt = `## wgpu Object Instructions

WebGPU compute shader node for parallel data processing using WGSL.

CRITICAL RULES:
1. Write WGSL compute shaders, NOT GLSL
2. Use \`@group(0) @binding(N) var<storage, read>\` for inputs
3. Use \`@group(0) @binding(N) var<storage, read_write>\` for outputs
4. Use \`@group(0) @binding(N) var<uniform>\` for uniform structs
5. Must have a \`@compute @workgroup_size(N)\` entry point named \`main\`
6. Inputs/outputs/uniforms are auto-detected from shader bindings

DATA FLOW:
- Input handles are created from \`read\` storage bindings
- Output handles are created from \`read_write\` storage bindings
- A "bang" inlet triggers compute dispatch
- Send TypedArrays (Float32Array, Uint32Array, etc.) to input handles
- Outputs are sent as TypedArrays on outlet handles

WGSL TYPE MAPPING (for storage buffers):
- array<f32> \u2192 Float32Array
- array<u32> \u2192 Uint32Array
- array<i32> \u2192 Int32Array
- array<vec2f> \u2192 Float32Array (2 components per element)
- array<vec4f> \u2192 Float32Array (4 components per element)

UNIFORMS (for parameters/constants):
- Define a struct: \`struct Params { scale: f32, offset: f32 }\`
- Bind as uniform: \`@group(0) @binding(N) var<uniform> params: Params;\`
- Send JSON object to uniform inlet: \`{ scale: 2.0, offset: 0.5 }\`
- Automatically serialized to GPU buffer with proper WGSL alignment

Example - Noise Generator:
\`\`\`json
{
  "type": "wgpu",
  "data": {
    "code": "@group(0) @binding(0) var<storage, read> seeds: array<f32>;\\n@group(0) @binding(1) var<storage, read_write> noise: array<f32>;\\n\\nfn hash(p: u32) -> f32 {\\n  var h = p * 747796405u + 2891336453u;\\n  h = ((h >> 16u) ^ h) * 2246822507u;\\n  h = ((h >> 16u) ^ h) * 3266489909u;\\n  return f32(h >> 16u) / 65535.0;\\n}\\n\\n@compute @workgroup_size(64)\\nfn main(@builtin(global_invocation_id) gid: vec3<u32>) {\\n  let idx = gid.x;\\n  if (idx >= arrayLength(&seeds)) { return; }\\n  noise[idx] = hash(idx + bitcast<u32>(seeds[idx]));\\n}"
  }
}
\`\`\`

Example - Double Values:
\`\`\`json
{
  "type": "wgpu",
  "data": {
    "code": "@group(0) @binding(0) var<storage, read> input: array<f32>;\\n@group(0) @binding(1) var<storage, read_write> output: array<f32>;\\n\\n@compute @workgroup_size(64)\\nfn main(@builtin(global_invocation_id) gid: vec3<u32>) {\\n  let idx = gid.x;\\n  if (idx >= arrayLength(&input)) { return; }\\n  output[idx] = input[idx] * 2.0;\\n}"
  }
}
\`\`\`

Example - With Uniforms (scale/offset transform):
\`\`\`json
{
  "type": "wgpu",
  "data": {
    "code": "struct Params {\\n  scale: f32,\\n  offset: f32\\n}\\n\\n@group(0) @binding(0) var<uniform> params: Params;\\n@group(0) @binding(1) var<storage, read> input: array<f32>;\\n@group(0) @binding(2) var<storage, read_write> output: array<f32>;\\n\\n@compute @workgroup_size(64)\\nfn main(@builtin(global_invocation_id) gid: vec3<u32>) {\\n  let idx = gid.x;\\n  if (idx >= arrayLength(&input)) { return; }\\n  output[idx] = input[idx] * params.scale + params.offset;\\n}"
  }
}
\`\`\`
Send \`{ scale: 2.0, offset: 0.5 }\` to the uniform inlet to set parameters.

CONFIGURATION OPTIONS (in data object):
- outputSize: number - Fixed output buffer size in elements. If omitted, inferred from input sizes
- dispatchCount: [x, y, z] - Explicit workgroup dispatch counts. If omitted, auto-calculated from output size and workgroup_size

RUNTIME MESSAGES:
- { type: 'setOutputSize', size: number } - Dynamically set output buffer size
- { type: 'setDispatchCount', count: [x, y, z] } - Dynamically set dispatch counts
- { type: 'setCode', value: string } - Update shader code
- { type: 'run' } - Recompile shader

USAGE PATTERN:
1. Connect a msg node with Float32Array data to input handles
2. Connect output handles to peek nodes to see results
3. Send "bang" to the bang inlet to trigger computation
4. WebGPU must be supported by the browser
5. Use outputSize/dispatchCount when you need explicit control over buffer sizes`, xt = `## worker Object Instructions

JavaScript execution in a dedicated Web Worker thread for CPU-intensive computations without blocking the main thread.

**Additional worker methods:**
${y}
${L}

**Worker-specific gotchas:**
- requestAnimationFrame uses 60fps setInterval fallback (no DOM in workers)
- fft() is NOT available (no main-thread audio access)
- No \`// @lib\` declaration (cannot create libraries, but CAN import them)
- Libraries created with \`// @lib\` in regular \`js\` nodes can be imported here

**Use Cases:**
- Heavy data processing without UI freezing
- Complex calculations, simulations, or algorithms
- Background data transformations

Example:
\`\`\`json
{
  "type": "worker",
  "data": {
    "code": "setPortCount(1, 1)\\nrecv(data => {\\n  // CPU-intensive work here\\n  const result = heavyComputation(data);\\n  send(result, {to: 0});\\n});"
  }
}
\`\`\``, Ct = `## scope~ Object Instructions

Oscilloscope display for visualizing audio signals. Renders waveforms or XY (Lissajous) plots on a resizable canvas.

Configuration:
- mode: "waveform" (default) | "xy" \u2014 waveform shows a single signal over time; xy plots two signals against each other (Lissajous)
- bufferSize: number of samples to display (default: 512, range: 64\u20132048)
- xScale: horizontal zoom (default: 1)
- yScale: vertical zoom / amplitude scale (default: 1)
- fps: refresh rate cap in Hz (default: 0 = uncapped)
- plotType: "line" (default) | "point" | "bezier"
- decay: trail persistence 0.01\u20131, where 1 = no trail (default: 1)
- unipolar: boolean \u2014 maps signal range to 0\u20131 instead of -1\u20131 (default: false). Useful for envelope followers, RMS levels, or any non-negative signal.

Example - Basic waveform scope:
\`\`\`json
{
  "type": "scope~",
  "data": {}
}
\`\`\`

Example - XY / Lissajous scope with trail:
\`\`\`json
{
  "type": "scope~",
  "data": {
    "mode": "xy",
    "decay": 0.05,
    "plotType": "point"
  }
}
\`\`\`

Example - Zoomed waveform with larger buffer:
\`\`\`json
{
  "type": "scope~",
  "data": {
    "bufferSize": 1024,
    "xScale": 2,
    "yScale": 1.5,
    "plotType": "bezier"
  }
}
\`\`\``, Et = `## tap~ Object Instructions

Headless oscilloscope \u2014 captures trigger-synced audio frames and forwards them as messages. Use when you want waveform data to flow into canvas, GLSL, Hydra, or any downstream node.

Unlike scope~ (which renders a built-in display), tap~ has no display. Pair it with scope.canvas (waveform) or scope-xy.canvas (XY) presets, or process the raw buffers yourself.

Inlets:
- inlet 0: audio signal (X axis in XY mode)
- inlet 1: Y axis signal (XY mode only)
- inlet 2: bufferSize (int, 64\u20132048, default 512)
- inlet 3: mode ("wave" or "xy", default "wave")
- inlet 4: fps (float, 0 = unlimited, default 0)

Output (outlet 0):
- wave mode: Float32Array of audio samples, trigger-synced on rising zero-crossing
- xy mode: { type: "xy", x: Float32Array, y: Float32Array }

Example - Basic waveform tap into scope.canvas:
\`\`\`json
{
  "type": "object",
  "data": { "expr": "tap~", "name": "tap~", "params": [] }
}
\`\`\`

Example - XY mode for Lissajous figures:
\`\`\`json
{
  "type": "object",
  "data": { "expr": "tap~ 512 xy", "name": "tap~", "params": [512, "xy"] }
}
\`\`\`

Example - Throttled capture at 30fps:
\`\`\`json
{
  "type": "object",
  "data": { "expr": "tap~ 512 wave 30", "name": "tap~", "params": [512, "wave", 30] }
}
\`\`\`

Typical patch pattern:
- [osc~ 440] \u2192 [tap~] \u2192 [scope.canvas]
- [osc~ 440] \u2192 [tap~] \u2192 [glsl~] (pass buffer as uniform)
- [osc~ 440] + [osc~ 220] \u2192 [tap~ 512 xy] \u2192 [scope-xy.canvas]`, St = `## sequencer Object Instructions

Multi-track step sequencer synced to the global transport clock. Works like a drum machine.

CRITICAL RULES:
1. No code needed \u2014 configuration only (stepOn patterns, track names, colors)
2. All tracks share the same step count and transport clock
3. Steps always fill exactly one bar

OUTLET MODES:
- \`outletMode: "multi"\` (default): One outlet per track. outlet 0 = track 0, outlet 1 = track 1, etc.
- \`outletMode: "single"\`: One merged outlet. All tracks fire on outlet 0.

OUTPUT MODES (multi outlet):
- \`"bang"\` (default): sends \`{type:"bang"}\`
- \`"value"\`: sends velocity as number (0\u20131)
- \`"audio"\`: sends \`{type:"set", time, value}\` for Web Audio scheduling

OUTPUT MODES (single outlet):
- \`"index"\` (default): sends track index as number (0\u2013N)
- \`"midi"\`: sends \`{type:"noteOn", note, index, velocity}\` \u2014 note uses GM drum mapping (36=kick), velocity is 0\u2013127
- \`"audio"\`: sends \`{type:"noteOn", note, index, velocity, time}\` \u2014 same as midi with Web Audio time

Use single outlet + midi/audio mode to connect directly to pads~ with one wire.

Node data shape:
\`\`\`json
{
  "steps": 16,
  "tracks": [
    { "name": "KICK",  "color": "#e57373", "stepOn": [...16 booleans], "stepValues": [...16 floats] },
    { "name": "SNARE", "color": "#64b5f6", "stepOn": [...16 booleans], "stepValues": [...16 floats] },
    { "name": "CHH",   "color": "#ffd54f", "stepOn": [...16 booleans], "stepValues": [...16 floats] },
    { "name": "OHH",   "color": "#b39ddb", "stepOn": [...16 booleans], "stepValues": [...16 floats] }
  ],
  "swing": 0,
  "outletMode": "multi",
  "outputMode": "bang",
  "showVelocity": false
}
\`\`\`

STEP PATTERNS:
- Classic kick (4-on-the-floor, 16 steps): [true,false,false,false, true,false,false,false, true,false,false,false, true,false,false,false]
- Snare on 2+4: [false,false,false,false, true,false,false,false, false,false,false,false, true,false,false,false]
- Closed hi-hat (8ths): [true,false,true,false, true,false,true,false, true,false,true,false, true,false,true,false]

Example \u2014 basic drum pattern (multi outlet):
\`\`\`json
{
  "type": "sequencer",
  "data": {
    "steps": 16,
    "tracks": [
      {
        "name": "KICK",
        "color": "#e57373",
        "stepOn": [true,false,false,false, true,false,false,false, true,false,false,false, true,false,false,false],
        "stepValues": [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1]
      },
      {
        "name": "SNARE",
        "color": "#64b5f6",
        "stepOn": [false,false,false,false, true,false,false,false, false,false,false,false, true,false,false,false],
        "stepValues": [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1]
      },
      {
        "name": "CHH",
        "color": "#ffd54f",
        "stepOn": [true,false,true,false, true,false,true,false, true,false,true,false, true,false,true,false],
        "stepValues": [0.8,0.8,0.8,0.8, 0.8,0.8,0.8,0.8, 0.8,0.8,0.8,0.8, 0.8,0.8,0.8,0.8]
      },
      {
        "name": "OHH",
        "color": "#b39ddb",
        "stepOn": [false,false,false,false, false,false,false,false, false,false,false,false, false,false,false,false],
        "stepValues": [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1]
      }
    ],
    "swing": 0,
    "outputMode": "bang",
    "showVelocity": false
  }
}
\`\`\`

Example \u2014 single outlet to pads~:
\`\`\`json
{
  "type": "sequencer",
  "data": {
    "steps": 16,
    "outletMode": "single",
    "outputMode": "midi",
    "tracks": [
      { "name": "KICK",  "color": "#e57373", "stepOn": [true,false,false,false, true,false,false,false, true,false,false,false, true,false,false,false], "stepValues": [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1] },
      { "name": "SNARE", "color": "#64b5f6", "stepOn": [false,false,false,false, true,false,false,false, false,false,false,false, true,false,false,false], "stepValues": [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1] }
    ]
  }
}
\`\`\``, Tt = `## stack Object Instructions

LIFO (last-in, first-out) message buffer. Push messages onto a stack, bang to pop them off.

CRITICAL: This is a text object created via the "object" node type with data.expr.

Usage: stack

Inlets:
- Inlet 0: push any message onto the top of the stack
- Inlet 1 (hot): bang \u2192 pop top item and send to outlet; send "clear" to empty; send "size" to output count

Example:
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "stack"
  }
}
\`\`\`

Common Patterns:
- Connect a msg node sending { "type": "bang" } to inlet 1 to pop items
- Connect a msg node sending { "type": "clear" } to inlet 1 to empty the stack
- Connect a msg node sending { "type": "size" } to inlet 1 to get the current count
- Stack outputs nothing if empty when bang is received`, It = `## queue Object Instructions

FIFO (first-in, first-out) message buffer. Enqueue messages, bang to dequeue them in order.

CRITICAL: This is a text object created via the "object" node type with data.expr.

Usage: queue

Inlets:
- Inlet 0: enqueue any message at the back of the queue
- Inlet 1 (hot): bang \u2192 dequeue front item and send to outlet; send "clear" to empty; send "size" to output count

Example:
\`\`\`json
{
  "type": "object",
  "data": {
    "expr": "queue"
  }
}
\`\`\`

Common Patterns:
- Connect a msg node sending { "type": "bang" } to inlet 1 to dequeue items
- Connect a msg node sending { "type": "clear" } to inlet 1 to empty the queue
- Connect a msg node sending { "type": "size" } to inlet 1 to get the current count
- Queue outputs nothing if empty when bang is received
- Use with metro to drain the queue at a steady rate`, At = `## vision.hand Instructions

Real-time hand skeleton detection using MediaPipe HandLandmarker. Connect a video source to its video inlet. Results emit on outlet 0.

**Output shape:**
\`\`\`js
{
  hands: [{
    handedness: 'Left' | 'Right',
    score: number,
    landmarks: [{x, y, z}],       // 21 keypoints, normalized [0,1]
    worldLandmarks: [{x, y, z}]   // 21 keypoints in meters
  }],
  timestamp: number
}
\`\`\`

**Landmark indices:** 0=wrist, 4=thumb tip, 8=index tip, 12=middle tip, 16=ring tip, 20=pinky tip.

**Example (draw hand on p5):**
\`\`\`json
{
  "type": "vision.hand",
  "data": { "numHands": 2, "model": "lite", "delegate": "GPU", "skipFrames": 1 }
}
\`\`\`

Connect: webcam \u2192 vision.hand \u2192 js (recv to draw landmarks)`, kt = `## vision.body Instructions

Full-body pose estimation using MediaPipe PoseLandmarker. Connect a video source to its video inlet. Results emit on outlet 0.

**Output shape:**
\`\`\`js
{
  poses: [{
    landmarks: [{x, y, z, visibility}],       // 33 keypoints, normalized [0,1]
    worldLandmarks: [{x, y, z, visibility}]   // 33 keypoints in meters
  }],
  timestamp: number
}
\`\`\`

**Key landmark indices:** 0=nose, 11=left shoulder, 12=right shoulder, 23=left hip, 24=right hip, 25=left knee, 26=right knee.

**Example:**
\`\`\`json
{
  "type": "vision.body",
  "data": { "numPoses": 1, "model": "lite", "delegate": "GPU", "skipFrames": 1 }
}
\`\`\``, Ot = `## vision.face Instructions

Facial landmark detection (478 points) using MediaPipe FaceLandmarker. Connect a video source to its video inlet. Results emit on outlet 0.

**Output shape:**
\`\`\`js
{
  faces: [{
    landmarks: [{x, y, z}],   // 478 facial keypoints, normalized [0,1]
    blendshapes?: [{categoryName: string, score: number}]  // when enabled
  }],
  timestamp: number
}
\`\`\`

Enable blendshapes in settings to get 52 ARKit-compatible expression coefficients (eyeBlinkLeft, jawOpen, etc.).

**Example:**
\`\`\`json
{
  "type": "vision.face",
  "data": { "numFaces": 1, "blendshapes": false, "delegate": "GPU", "skipFrames": 1 }
}
\`\`\``, Pt = `## vision.segment Instructions

Body segmentation using MediaPipe ImageSegmenter. Outputs a greyscale mask bitmap on outlet 0 (video), suitable for use as a texture in GLSL/Hydra. Optionally also emits raw mask data on outlet 1 (message).

**Video outlet 0:** Greyscale ImageBitmap mask \u2014 connect to glsl/hydra as a video texture.
**Message outlet 1 (optional, enable "Output Message" in settings):**
\`\`\`js
{
  width: number, height: number,
  mask: Uint8Array | Float32Array,
  maskType: 'category' | 'confidence',
  timestamp: number
}
\`\`\`

**Example:**
\`\`\`json
{
  "type": "vision.segment",
  "data": { "maskType": "category", "outputMessage": false, "delegate": "GPU", "skipFrames": 1 }
}
\`\`\``, Rt = `## vision.detect Instructions

Object detection with bounding boxes using MediaPipe ObjectDetector (EfficientDet Lite0, 90 COCO classes). Connect a video source to its video inlet. Results emit on outlet 0.

**Output shape:**
\`\`\`js
{
  detections: [{
    label: string,     // e.g. 'person', 'cat', 'bottle'
    score: number,     // confidence 0\u20131
    boundingBox: { originX, originY, width, height }  // normalized [0,1]
  }],
  timestamp: number
}
\`\`\`

**Example:**
\`\`\`json
{
  "type": "vision.detect",
  "data": { "maxResults": 5, "scoreThreshold": 0.5, "delegate": "GPU", "skipFrames": 1 }
}
\`\`\``, jt = `## vision.gesture Instructions

Gesture recognition using MediaPipe GestureRecognizer. Detects named hand gestures + full hand landmarks. Connect a video source to its video inlet. Results emit on outlet 0.

**Output shape:**
\`\`\`js
{
  gestures: [{
    gesture: string,            // "Thumb_Up", "Open_Palm", "Closed_Fist", "Victory", "ILoveYou", "Pointing_Up", "None"
    score: number,              // confidence 0\u20131
    handedness: 'Left' | 'Right',
    landmarks: [{x, y, z}],    // 21 keypoints, normalized [0,1]
    worldLandmarks: [{x, y, z}] // 21 keypoints in meters
  }],
  timestamp: number
}
\`\`\`

**Example:**
\`\`\`json
{
  "type": "vision.gesture",
  "data": { "numHands": 2, "delegate": "GPU", "skipFrames": 1 }
}
\`\`\``, Mt = `## vision.classify Instructions

Image classification using MediaPipe ImageClassifier (EfficientNet Lite0, 1000 ImageNet classes). Classifies the entire frame. Connect a video source to its video inlet. Results emit on outlet 0.

**Output shape:**
\`\`\`js
{
  classifications: [
    { label: string, score: number }  // sorted by score descending
  ],
  timestamp: number
}
\`\`\`

Top labels are things like "person", "cat", "guitar", "beach", etc. Use maxResults to control how many are returned.

**Example:**
\`\`\`json
{
  "type": "vision.classify",
  "data": { "maxResults": 5, "scoreThreshold": 0.0, "delegate": "GPU", "skipFrames": 1 }
}
\`\`\``, Dt = `## serial Object Instructions

WebSerial port for communicating with hardware devices (Arduino, microcontrollers, etc.).

CRITICAL RULES:
1. Requires a browser that supports the WebSerial API (Chrome/Edge)
2. User must grant port access via the browser prompt (triggered by bang or connect message)
3. Received data is line-buffered and emitted one line at a time

Inlet messages:
- bang or {type: 'bang'}: Open port picker and connect
- string: Send a string to the port (line ending appended automatically)
- Uint8Array: Send raw bytes to the port
- number[]: Send raw bytes as a number array (e.g. [0x01, 0x02, 0xff])
- {type: 'connect'}: Open port picker and connect
- {type: 'disconnect'}: Disconnect from the port
- {type: 'setBaud', value: number}: Set the baud rate
- {type: 'sendBreak'}: Send a BREAK signal via setSignals() \u2014 required for DMX-512 framing

Outlet messages:
- {type: 'data', line: string}: A line received from the port
- {type: 'connected', portId: string, label: string}: Port connected
- {type: 'disconnected', portId: string}: Port disconnected
- {type: 'error', message: string}: An error occurred

Example - Basic serial node at 9600 baud:
\`\`\`json
{
  "type": "serial",
  "data": {
    "baudRate": 9600,
    "lineEnding": "\\r\\n",
    "autoConnect": false
  }
}
\`\`\`

Example - Send raw bytes (e.g. DMX-style control):
Connect a js node that outputs \`new Uint8Array([0x00, 255, 0, 128])\` to the serial inlet.

Example - Send a number array:
Connect a js node that outputs \`[0x01, 0x02, 0x03]\` to the serial inlet.

Common patterns:
- Use a js or expr node to parse incoming {type: 'data', line} messages
- Pair with a toggle/button to trigger connect/disconnect
- Use setBaud to change baud rate at runtime before connecting`, Lt = `## dmx Object Instructions

DMX-512 universe output node. Hardcoded to 250000 baud, 8 data bits, 2 stop bits, no parity \u2014 the standard DMX-512 serial configuration. Sends a BREAK + start code + channel data on every message received.

CRITICAL RULES:
1. Requires a browser that supports the WebSerial API (Chrome/Edge)
2. Port is always opened at 250000/8N2/none \u2014 no configuration needed
3. Fixtures go dark if they stop receiving frames \u2014 use setInterval in a js node to keep sending
4. Channel values are 0-255; up to 512 channels per frame

Inlet messages:
- bang or {type: 'bang'}: Open port picker and connect
- number[]: Set channel values and send a frame (e.g. [255, 128, 0, 0, ...])
- Uint8Array: Set channel values from raw bytes and send a frame
- {type: 'blackout'}: Send all channels as 0
- {type: 'connect'}: Open port picker and connect
- {type: 'disconnect'}: Send blackout then disconnect

No outlets.

Example \u2014 continuous DMX loop from a js node connected to dmx inlet:
\`\`\`javascript
const channels = new Array(512).fill(0);
channels[0] = 255; // ch1 full
channels[1] = 128; // ch2 half

setInterval(() => send(channels), 40); // ~25fps

onCleanup(() => send({ type: 'blackout' }));
\`\`\`

Example - dmx node JSON:
\`\`\`json
{ "type": "serial.dmx", "data": { "portId": "" } }
\`\`\``, Ut = `## serial.term Object Instructions

Interactive serial terminal with scrollback buffer and ANSI color support. Combines serial port communication with a visual terminal UI.

CRITICAL RULES:
1. Requires a browser that supports the WebSerial API (Chrome/Edge)
2. User can type commands directly in the terminal input bar
3. Arrow up/down recalls command history
4. Ctrl+C / Ctrl+D / Ctrl+Z send control codes over serial
5. Received lines are displayed in the terminal AND forwarded to the outlet

Inlet messages:
- bang or {type: 'bang'}: Toggle connection (connect or disconnect)
- string: Send a string to the port (shown as tx in terminal, line ending appended)
- Uint8Array: Send raw bytes to the port (shown as hex in terminal, e.g. "01 02 ff")
- number[]: Send raw bytes as a number array (shown as hex in terminal)
- {type: 'connect'}: Toggle connection
- {type: 'disconnect'}: Disconnect from the port
- {type: 'setBaud', value: number}: Set the baud rate
- {type: 'sendBreak'}: Send a BREAK signal via setSignals() \u2014 required for DMX-512 framing

Outlet messages:
- {type: 'data', line: string}: A line received from the port

Example - Terminal at 115200 baud:
\`\`\`json
{
  "type": "serial.term",
  "data": {
    "baudRate": 115200,
    "lineEnding": "\\r\\n",
    "autoConnect": false,
    "maxScrollback": 500
  }
}
\`\`\`

Common patterns:
- Use standalone for interactive debugging of Arduino/ESP32 output
- Connect outlet to a js node to parse and react to incoming lines
- Send programmatic commands via inlet from other nodes while also typing manually`, Nt = `## ngea Object Instructions

The ngea object provides real-world microtonal tuning data from the Network Gong Ensemble Archive (NGEA) \u2014 Southeast Asian gong ensembles from Thailand, Cambodia, Indonesia, Philippines, Myanmar, and Vietnam.

**Outlets:**
- Outlet 0 (gong): \`{ type: 'gong', index, id, freq, cents, accumulate }\` \u2014 triggered by index input
- Outlet 1 (scale): \`{ type: 'scale', name, location, freqs[], cents[] }\` \u2014 triggered by bang

**Inlet messages:**
- Number: output gong data at that index (0-based)
- \`{ type: 'bang' }\`: output current gong data
- String: switch to a named tuning (partial match, e.g. \`'Khong'\` matches \`'Khong Wong Yai'\`)

**Strudel integration \u2014 use single quotes for the name:**

NGEA tunings are registered globally in Strudel. Double-quoted strings become mini-notation patterns in Strudel, so always use single quotes for the name argument.

\`\`\`js
// .ngea() method maps pattern indices to gong frequencies
"0 2 4 6 3 1".slow(2).ngea('Tuning Title')

// ngea() as frequency array lookup
note("0 2 4 1".slow(2)).freq(i => ngea('Tuning Title')[i])
\`\`\`
`, _t = { "tone~": dt, "dsp~": Ue, p5: Ve, hydra: He, glsl: Fe, "canvas.dom": Pe, dom: Le, vue: gt, slider: ot, js: ze, expr: Ne, "expr~": _e, button: ke, toggle: ct, msg: $e, textbox: lt, canvas: Re, surface: it, strudel: st, python: Be, ruby: Ke, swgl: rt, uxn: ut, asm: Ie, orca: We, "chuck~": je, "csound~": Me, "soundfile~": at, "sampler~": Qe, "pads~": et, markdown: Ge, object: qe, "bg.out": Ae, "sonic~": pt, "elem~": mt, label: ht, title: ft, regl: yt, three: bt, "three.dom": vt, projmap: tt, "wgpu.compute": wt, worker: xt, send: Je, recv: Ye, "send.vdo": Ze, "recv.vdo": Xe, "bytebeat~": Oe, "samplerate~": nt, sequencer: St, stack: Tt, queue: It, "scope~": Ct, "tap~": Et, serial: Dt, "serial.term": Ut, "serial.dmx": Lt, "vision.hand": At, "vision.body": kt, "vision.face": Ot, "vision.segment": Pt, "vision.detect": Rt, "vision.gesture": jt, "vision.classify": Mt, ngea: Nt };
function U(t) {
  return _t[t] ?? De(t);
}
const N = /* @__PURE__ */ new Set(["vue", "dom"]), _ = `# UI Design Guidelines

Before writing any UI code, commit to a BOLD aesthetic direction:

1. **Tone**: Pick an extreme and execute it with precision \u2014 brutally minimal, maximalist chaos,
retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial, brutalist,
art deco, soft/pastel, industrial, etc.

2. **Differentiation**: What makes this UNFORGETTABLE? Choose one thing and nail it.

## Typography

Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter.
Pair a distinctive display font with a refined body font.
Unexpected, characterful font choices are strongly preferred.

## Color & Theme

Commit to a cohesive aesthetic. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

## Motion

Focus on high-impact moments: one well-orchestrated load with staggered reveals (animation-delay)
creates more delight than scattered micro-interactions. Use hover states that surprise.

## Backgrounds & Visual Details

Create atmosphere and depth rather than defaulting to solid colors.
Apply creative forms like gradient meshes, noise textures, geometric patterns,
layered transparencies, dramatic shadows, and decorative borders.

## What to AVOID

NEVER use generic AI-generated aesthetics:

- Overused font families: Inter, Roboto, Arial, system fonts
- Clich\xE9d color schemes (particularly purple gradients on white backgrounds)
- Predictable, cookie-cutter layouts that lack context-specific character`, F = /* @__PURE__ */ new Set(["glsl", "regl", "swgl", "three"]), H = `# GLSL #include Directives

Import GLSL functions using \`#include\`:

- **NPM packages**: \`#include <lygia/generative/snoise>\`
   - from shader libraries like [lygia](https://lygia.xyz)
   - when you need GLSL utilities, use Lygia shader library or
     other known NPM packages. Try to not write your own where possible.
- **URLs**: \`#include "https://raw.githubusercontent.com/stegu/psrdnoise/main/src/psrdnoise2.glsl"\`

The \`.glsl\` extension is optional. Nested includes are supported; circular includes error.`;
function Xn(t) {
  const e = [];
  return M.has(t) && e.push(`## Common JSRunner Runtime Functions

${D}`), N.has(t) && e.push(_), F.has(t) && e.push(H), e.push(U(t)), e.join(`

---

`);
}
function Ft(t) {
  const e = [...new Set(t)], n = e.filter((s) => M.has(s)), o = e.filter((s) => N.has(s)), a = e.filter((s) => F.has(s));
  return { jsInstructions: n.length > 0 ? `## Common JSRunner Runtime Functions (applies to: ${n.join(", ")})

${D}` : "", uiDesignInstructions: o.length > 0 ? _ : "", glslImportInstructions: a.length > 0 ? H : "", objectInstructions: e.map((s) => U(s)).join(`

---

`) };
}
function A(t, e) {
  if (!t.handle) return null;
  const n = f({ port: e, type: t.handle.handleType, id: t.handle.handleId }), o = t.description ? ` (${t.description})` : "";
  return `  ${e === "inlet" ? "inlet" : "outlet"}: "${n}"${o}`;
}
function k(t, e) {
  const n = t.description ? ` \u2014 ${t.description}` : "";
  return `  ${e} pattern: "${t.template}"${n}`;
}
function Ht(t) {
  var _a, _b;
  const e = [];
  for (const n of t.inlets) {
    const o = A(n, "inlet");
    o && e.push(o);
  }
  for (const n of t.outlets) {
    const o = A(n, "outlet");
    o && e.push(o);
  }
  return ((_a = t.handlePatterns) == null ? void 0 : _a.inlet) && e.push(k(t.handlePatterns.inlet, "inlet")), ((_b = t.handlePatterns) == null ? void 0 : _b.outlet) && e.push(k(t.handlePatterns.outlet, "outlet")), e.length === 0 ? null : `${t.type}:
${e.join(`
`)}`;
}
function zt(t) {
  const e = [];
  for (const n of t) {
    const o = R[n];
    if (!o) continue;
    const a = Ht(o);
    a && e.push(a);
  }
  return (t.includes("object") || t.some((n) => n.endsWith("~"))) && e.push(`object (ONLY for nodes with type: "object", e.g. osc~, gain~, delay~, out~, fft~):
  These nodes use indexed handles. Do NOT use this pattern for non-"object" node types like strudel, expr~, sampler~, etc.
  signal inlets \u2192 "audio-in-{index}" (e.g. audio-in-0, audio-in-1)
  message inlets \u2192 "message-in-{index}" (e.g. message-in-0, message-in-1)
  signal outlets \u2192 "audio-out-{index}" (e.g. audio-out-0)
  message outlets \u2192 "message-out-{index}" (e.g. message-out-0)
  analysis outlets \u2192 "analysis-out-{index}" (e.g. analysis-out-0) \u2014 used by fft~ to output frequency data
  IMPORTANT: fft~ has ONE analysis outlet "analysis-out-0", NOT "message-out-0". Connect it to hydra/glsl message inlets for audio-reactive visuals.
  out~ has ONE audio inlet: "audio-in-0" \u2014 multiple sources connect to the SAME inlet (Web Audio auto-mixes)`), e.length === 0 ? "" : `HANDLE ID REFERENCE (auto-generated from schemas):
Handle IDs are derived from node schemas. Use these exact IDs for sourceHandle/targetHandle in edges.
IMPORTANT: If a specific node type has handle IDs listed below, ALWAYS use those exact IDs. The generic "object" pattern (audio-in-{index}, audio-out-{index}) ONLY applies to nodes with type: "object".

` + e.join(`

`);
}
class Gt {
  constructor() {
    __publicField(this, "logs", []);
  }
  log(e, n) {
    n !== void 0 ? this.logs.push(`${e}: ${JSON.stringify(n, null, 2)}`) : this.logs.push(e);
  }
  flush() {
    if (this.logs.length === 0) return;
    const e = `
\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551           [AI Multi-Object] Consolidated Debug Log             \u2551
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

${this.logs.join(`

`)}

\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
`;
    console.log(e), this.logs = [];
  }
  error(e, n) {
    n ? this.logs.push(`\u274C ${e}: ${n instanceof Error ? n.message : JSON.stringify(n)}`) : this.logs.push(`\u274C ${e}`);
  }
}
const c = new Gt();
async function Kn(t, e, n, o) {
  if (n == null ? void 0 : n.aborted) throw new Error("Request cancelled");
  const a = z();
  c.log("\u{1F4DD} Starting multi-object resolution"), c.log("User prompt", t);
  const s = await $t(a, t, n, o);
  if (!s) return c.log("\u26A0\uFE0F Router returned no plan"), c.flush(), null;
  if (n == null ? void 0 : n.aborted) throw new Error("Request cancelled");
  e == null ? void 0 : e(s.objectTypes);
  const i = await qt(a, t, s, n, o);
  return c.flush(), i;
}
async function $t(t, e, n, o) {
  if (n == null ? void 0 : n.aborted) throw new Error("Request cancelled");
  const a = Wt(), s = await t.generateText([{ role: "user", content: `${a}

User prompt: "${e}"` }], { signal: n, onThinking: o });
  if (!s.trim()) return c.log("\u26A0\uFE0F Router response is empty"), null;
  try {
    const i = P(s.trim()), r = JSON.parse(i);
    if (!r.objectTypes || !Array.isArray(r.objectTypes)) throw new Error('Response missing required "objectTypes" array');
    if (!r.structure) throw new Error('Response missing required "structure" field');
    return c.log("\u2705 [Router] Object types", r.objectTypes), c.log("\u2705 [Router] Connection structure", r.structure), r;
  } catch (i) {
    throw c.error("[Router] Failed to parse response", i), c.log("Raw response text", s), new Error("Failed to parse routing response as JSON");
  }
}
async function qt(t, e, n, o, a) {
  if (o == null ? void 0 : o.aborted) throw new Error("Request cancelled");
  const s = Vt(n.objectTypes, n.structure), i = await t.generateText([{ role: "user", content: `${s}

User prompt: "${e}"` }], { signal: o, onThinking: a });
  if (!i.trim()) return c.log("\u26A0\uFE0F Generator response is empty"), null;
  try {
    const r = P(i.trim()), l = JSON.parse(r);
    if (!l.nodes || !Array.isArray(l.nodes)) throw new Error('Response missing required "nodes" array');
    if (!l.edges || !Array.isArray(l.edges)) throw new Error('Response missing required "edges" array');
    for (const p of l.nodes) if (!p.type) throw new Error('Node missing required "type" field');
    return c.log("\u2705 [Generator] Successfully parsed result"), c.log("\u2705 [Generator] Nodes created", l.nodes), c.log("\u2705 [Generator] Edges created", l.edges), { nodes: l.nodes, edges: l.edges };
  } catch (r) {
    throw c.error("[Generator] Failed to parse response", r), c.log("Raw response text", i), new Error("Failed to parse generation response as JSON");
  }
}
function Wt() {
  return `You are an AI assistant that plans multi-object configurations in Patchies, a visual patching environment for creative coding.

Your task: Read the user's prompt and determine:
1. Which object types are needed
2. How they should connect (structure description)

Return ONLY a JSON object with this format:
{
  "objectTypes": ["type1", "type2", ...],
  "structure": "brief description of connections (e.g., 'slider controls osc~ frequency')"
}

AVAILABLE OBJECT TYPES:

${G}

EXAMPLES:

User: "slider controlling oscillator frequency"
Response:
{
  "objectTypes": ["slider", "tone~"],
  "structure": "slider connects to tone~ oscillator frequency inlet"
}

User: "button that triggers a visual animation"
Response:
{
  "objectTypes": ["button", "p5"],
  "structure": "button sends bang to p5 sketch to trigger animation"
}

User: "generative texture feeding into a GLSL shader"
Response:
{
  "objectTypes": ["canvas", "glsl"],
  "structure": "canvas generates offscreen texture, piped into glsl as video input for shader processing"
}

User: "heavy particle simulation with 10000 particles"
Response:
{
  "objectTypes": ["canvas"],
  "structure": "canvas runs computationally heavy particle simulation on web worker for performance"
}

User: "XY pad controlling two parameters"
Response:
{
  "objectTypes": ["canvas.dom", "expr", "expr"],
  "structure": "XY pad outputs [x, y] array, split by two expr objects for separate parameter control"
}

User: "808 drum machine with kick and snare"
Response:
{
  "objectTypes": ["button", "button", "tone~", "tone~", "object"],
  "structure": "Two buttons trigger two tone~ drum sounds (kick and snare), both connect to object (out~) for speaker output"
}

IMPORTANT: For audio output to speakers, use "object" type (which will create out~), NOT "out~" as a direct type.

CHOOSING BETWEEN p5 / canvas / canvas.dom for visuals:
- p5: shorter, readable programs where code clarity matters; great for interactive sketches using p5's own mouse/keyboard helpers
- canvas: runs on a web worker (offscreen, no DOM access, no interactivity) \u2014 highest performance; best when chaining into the rendering pipeline (e.g. as a video texture for glsl/hydra) or when no interactivity is needed
- canvas.dom: runs on main thread so it can handle mouse/keyboard input and DOM access; more verbose than p5 but lower overhead; best for computationally heavy visuals or complex cases that need interactivity without p5's abstraction layer

SPEED/PERFORMANCE KEYWORDS ("fast", "smooth", "60fps", "performant", "optimized", "efficient"):
- If the user asks for speed/performance AND no interactivity \u2192 canvas (web worker, highest perf)
- If the user asks for speed/performance AND needs mouse/keyboard \u2192 canvas.dom
- Never choose p5 when performance is explicitly requested

Now analyze this prompt:`;
}
function Vt(t, e) {
  const { jsInstructions: n, uiDesignInstructions: o, glslImportInstructions: a, objectInstructions: s } = Ft(t), i = [...new Set(t)], r = zt(i);
  return `You are an AI assistant that generates multiple connected object configurations in Patchies, a visual patching environment for creative coding.

Your task: Create a complete multi-object configuration based on the plan.

PLAN:
- Object types needed: ${t.join(", ")}
- Structure: ${e}

IMPORTANT RULES:
1. You MUST respond with ONLY a valid JSON object, nothing else
2. The JSON must have a "nodes" array and an "edges" array
3. Each node in the "nodes" array must have a "type" field and a "data" field
4. Each node SHOULD have a "position" field with relative x, y coordinates for good visual layout
5. Position nodes in a TOP-TO-BOTTOM flow (like Pd): sources on top (y: 0), outputs at the bottom (y: 160+)
6. Use plenty of horizontal spacing (x: 0, x: 350, x: 700, x: 1050) for side-by-side or parallel nodes, so they don't overlap.
7. Vertical steps should be at least 160-200 pixels between rows for a more compact layout
8. Calculate spacing based on signal flow depth: sources at y=0, first processing stage y=180, next y=360, outputs y=540+
9. Each edge in the "edges" array connects nodes by their index in the nodes array
10. Edges use "source" (node index), "target" (node index), and optionally "sourceHandle" and "targetHandle"
11. ${r ? "CRITICAL: Use the exact handle IDs from the HANDLE ID REFERENCE below. These are auto-generated from schemas and MUST match exactly." : "Use standard handle ID patterns: audio-in-{N}/audio-out-{N} for signal ports, message-in-{N}/message-out-{N} for message ports."}
12. For GLSL uniform inlets, omit targetHandle \u2014 the framework auto-fills it.
13. out~ has ONE audio inlet "audio-in-0". Multiple sources connect to the SAME inlet (Web Audio auto-mixes). Do NOT create separate out~ nodes per source.
14. Focus on creating FUNCTIONAL, CONNECTED systems
15. ALWAYS include appropriate code and helper functions for each object type
16. CRITICAL for shader graphs: Space GLSL nodes generously (y: 0, y: 350, y: 700, y: 1050) with 350+ pixel gaps

${r}

RESPONSE FORMAT:
{
  "nodes": [
    {
      "type": "objectType",
      "data": { /* object configuration */ },
      "position": { "x": 0, "y": 0 }
    }
  ],
  "edges": [
    {
      "source": 0,
      "target": 1,
      "sourceHandle": "<see HANDLE ID REFERENCE>",
      "targetHandle": "<see HANDLE ID REFERENCE>"
    }
  ]
}

LAYOUT EXAMPLE (top-to-bottom like Pd with generous spacing):
- slider at top: { "position": { "x": 0, "y": 0 } }
- tone~ below: { "position": { "x": 0, "y": 300 } } (300px gap minimum!)
- If parallel inputs, use GENEROUS horizontal spacing:
  - slider1: { "x": 0, "y": 0 }
  - slider2: { "x": 350, "y": 0 } (350px apart minimum)
  - button: { "x": 700, "y": 0 } (700px from slider1)
  - all connect to processor below: { "x": 350, "y": 300 } (centered, 300px down)

OBJECT-SPECIFIC INSTRUCTIONS:

${[n, o, a, s].filter(Boolean).join(`

`)}

Now generate the multi-object configuration.`;
}
function Bt(t) {
  const e = R[t];
  if (!e || e.handlePatterns) return null;
  const n = [];
  for (const a of e.inlets) {
    if (!a.handle) return null;
    n.push(f({ port: "inlet", type: a.handle.handleType, id: a.handle.handleId }));
  }
  const o = [];
  for (const a of e.outlets) {
    if (!a.handle) return null;
    o.push(f({ port: "outlet", type: a.handle.handleType, id: a.handle.handleId }));
  }
  return { inlets: { kind: "fixed", handles: n }, outlets: { kind: "fixed", handles: o } };
}
const Yt = ["slider", "button", "toggle", "knob", "textbox", "keyboard", "mic~", "out~", "meter~", "soundfile~", "sampler~", "chuck~", "bytebeat~", "strudel", "orca", "swgl", "bg.out", "iframe", "webcam", "markdown", "ai.stt", "ai.txt", "ai.img", "ai.tts", "stt", "tts", "ai.music", "screen", "send.vdo", "recv.vdo", "midi.in", "midi.out", "netsend", "netrecv", "serial", "serial.term", "serial.dmx", "vision.hand", "vision.body", "vision.face", "vision.detect", "vision.gesture", "vision.classify", "vision.segment"];
function Xt() {
  const t = {};
  for (const e of Yt) {
    const n = Bt(e);
    n && (t[e] = n);
  }
  return t;
}
const Kt = { label: { inlets: { kind: "fixed", handles: [] }, outlets: { kind: "fixed", handles: [] } }, "csound~": { inlets: { kind: "fixed", handles: ["audio-in-0", "message-in-1"] }, outlets: { kind: "fixed", handles: ["audio-out-0"] } }, msg: { inlets: { kind: "indexed", prefix: "message-in-", note: "0-8 based on $N placeholders" }, outlets: { kind: "fixed", handles: ["message-out"] } }, sequencer: { inlets: { kind: "fixed", handles: ["message-in"] }, outlets: { kind: "indexed", prefix: "out-", note: "one per track (no type prefix)" } }, "scope~": { inlets: { kind: "dynamic", patterns: ["audio-in-0", "audio-in-1"], note: "1 inlet for waveform, 2 for xy mode" }, outlets: { kind: "fixed", handles: [] } }, p5: { inlets: { kind: "indexed", prefix: "in-", note: "message inlets (no type prefix), count from setPortCount" }, outlets: { kind: "dynamic", patterns: ["video-out-0", "out-{N}"], note: "video-out-0 first (if enabled), then message out-{N}" } }, hydra: { inlets: { kind: "dynamic", patterns: ["video-in-{N}", "message-in-{N}"], note: "video inlets first, then message inlets (from setPortCount)" }, outlets: { kind: "dynamic", patterns: ["video-out-{N}", "message-out-{N}"], note: "video outlets first, then message outlets" } }, glsl: { inlets: { kind: "dynamic", patterns: ["{type}-in-{index}-{uniformName}-{uniformType}"], note: "type is video for sampler2D, message otherwise. ID is index-name-type composite" }, outlets: { kind: "fixed", handles: ["video-out-out"] } }, projmap: { inlets: { kind: "indexed", prefix: "video-in-", note: "one video inlet per surface (0-indexed), count matches surfaces array length" }, outlets: { kind: "fixed", handles: ["video-out-0"] } }, js: { inlets: { kind: "indexed", prefix: "in-", note: "message inlets (no type prefix), count from setPortCount" }, outlets: { kind: "indexed", prefix: "out-", note: "message outlets (no type prefix)" } }, worker: { inlets: { kind: "indexed", prefix: "in-", note: "message inlets (no type prefix), count from setPortCount" }, outlets: { kind: "indexed", prefix: "out-", note: "message outlets (no type prefix)" } }, canvas: { inlets: { kind: "indexed", prefix: "in-", note: "message inlets (no type prefix)" }, outlets: { kind: "dynamic", patterns: ["video-out-0", "out-{N}"], note: "video-out-0 first (if enabled), then message out-{N}" } }, "canvas.dom": { inlets: { kind: "indexed", prefix: "in-", note: "message inlets (no type prefix)" }, outlets: { kind: "dynamic", patterns: ["video-out-0", "out-{N}"], note: "video-out-0 first, then message out-{N}" } }, three: { inlets: { kind: "dynamic", patterns: ["video-in-{N}", "message-in-{N}"], note: "video inlets first, then message inlets" }, outlets: { kind: "dynamic", patterns: ["video-out-{N}", "message-out-{N}"], note: "video outlets first, then message outlets" } }, "three.dom": { inlets: { kind: "indexed", prefix: "in-", note: "message inlets (no type prefix)" }, outlets: { kind: "dynamic", patterns: ["video-out-0", "out-{N}"], note: "video-out-0 first, then message out-{N}" } }, dom: { inlets: { kind: "indexed", prefix: "in-", note: "no type prefix" }, outlets: { kind: "indexed", prefix: "out-", note: "no type prefix" } }, vue: { inlets: { kind: "indexed", prefix: "in-", note: "no type prefix" }, outlets: { kind: "indexed", prefix: "out-", note: "no type prefix" } }, "tone~": { inlets: { kind: "dynamic", patterns: ["audio-in", "message-in-{N}"], note: "audio-in (fixed), then message-in-{N} from setPortCount" }, outlets: { kind: "dynamic", patterns: ["audio-out", "message-out-{N}"], note: "audio-out (fixed), then message-out-{N} from setPortCount" } }, "dsp~": { inlets: { kind: "dynamic", patterns: ["audio-in", "audio-in-{N}", "message-in-{N}"], note: "audio inlets (single=audio-in, multi=audio-in-{N}), then message-in-{N}" }, outlets: { kind: "dynamic", patterns: ["audio-out", "audio-out-{N}", "message-out-{N}"], note: "audio outlets then message outlets" } }, "elem~": { inlets: { kind: "dynamic", patterns: ["audio-in", "message-in-{N}"], note: "audio-in (fixed), then message-in-{N} from setPortCount" }, outlets: { kind: "dynamic", patterns: ["audio-out", "message-out-{N}"], note: "audio-out (fixed), then message-out-{N}" } }, "sonic~": { inlets: { kind: "dynamic", patterns: ["audio-in", "message-in-{N}"], note: "audio-in (fixed), then message-in-{N}" }, outlets: { kind: "dynamic", patterns: ["audio-out", "message-out-{N}"], note: "audio-out (fixed), then message-out-{N}" } }, "expr~": { inlets: { kind: "dynamic", patterns: ["audio-in", "audio-in-{N}", "message-in-{N}"], note: "signal inlets then control inlets" }, outlets: { kind: "fixed", handles: ["audio-out"] } }, expr: { inlets: { kind: "indexed", prefix: "message-in-", note: "0-8 based on $N in expression" }, outlets: { kind: "fixed", handles: ["message-out"] } } }, Jt = { ...Xt(), ...Kt };
function O(t, e, n) {
  if (t === "object") return (n === "in" ? /^(audio|message|analysis)-in-\d+$/ : /^(audio|message|analysis)-out-\d+$/).test(e) ? null : `object nodes use "{audio|message|analysis}-${n}-N" pattern, got "${e}"`;
  const o = Jt[t];
  if (!o) return `unknown node type "${t}"`;
  const a = n === "in" ? o.inlets : o.outlets;
  return Zt(e, a, n);
}
function Zt(t, e, n) {
  return g(e).with({ kind: "fixed" }, (o) => o.handles.includes(t) ? null : o.handles.length === 0 ? `no ${n === "in" ? "inlets" : "outlets"} on this node` : `expected one of [${o.handles.join(", ")}], got "${t}"`).with({ kind: "indexed" }, (o) => {
    if (t.startsWith(o.prefix) && /^\d+$/.test(t.slice(o.prefix.length))) return null;
    const a = o.prefix.split("|");
    for (const s of a) if (t.startsWith(s) && /^\d+$/.test(t.slice(s.length))) return null;
    return `expected "${o.prefix}{N}" pattern, got "${t}"`;
  }).with({ kind: "dynamic" }, (o) => {
    for (const a of o.patterns) if (Qt(t, a)) return null;
    return `doesn't match any expected pattern [${o.patterns.join(", ")}], got "${t}". ${o.note}`;
  }).exhaustive();
}
function Qt(t, e) {
  const n = e.split(/\{[^}]+\}/), a = n.map((s) => en(s)).join("[\\w.-]+");
  if (n.length === 1) return t === e;
  try {
    return new RegExp(`^${a}$`).test(t);
  } catch {
    return t === e;
  }
}
const en = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function Jn(t, e) {
  const n = [], o = [];
  for (const a of t) {
    const s = e(a.source), i = e(a.target);
    if (!s || !i) {
      n.push(a);
      continue;
    }
    const r = a.sourceHandle ? O(s, a.sourceHandle, "out") : null, l = a.targetHandle ? O(i, a.targetHandle, "in") : null;
    if (r || l) {
      const p = [];
      r && p.push(`source handle "${a.sourceHandle}": ${r}`), l && p.push(`target handle "${a.targetHandle}": ${l}`), o.push({ edge: a, reason: p.join("; ") });
    } else n.push(a);
  }
  return { valid: n, invalid: o };
}
export {
  Fn as $,
  En as A,
  ln as B,
  vn as C,
  u as D,
  xn as E,
  ve as F,
  In as G,
  jn as H,
  Ln as I,
  Dn as J,
  Mn as K,
  Pn as L,
  On as M,
  Jt as N,
  An as O,
  m as P,
  kn as Q,
  we as R,
  Rn as S,
  Ce as T,
  pn as U,
  un as V,
  ae as W,
  dn as X,
  cn as Y,
  Un as Z,
  _n as _,
  O as a,
  Hn as a0,
  Nn as a1,
  Vn as a2,
  Bn as a3,
  Wn as a4,
  qn as a5,
  $n as a6,
  Gn as a7,
  zn as a8,
  Xn as a9,
  U as aa,
  M as ab,
  D as ac,
  zt as ad,
  an as b,
  rn as c,
  sn as d,
  f as e,
  fn as f,
  Yn as g,
  hn as h,
  I as i,
  T as j,
  me as k,
  pe as l,
  Cn as m,
  he as n,
  fe as o,
  mn as p,
  ge as q,
  Kn as r,
  gn as s,
  ye as t,
  yn as u,
  Jn as v,
  Tn as w,
  Sn as x,
  bn as y,
  wn as z
};
