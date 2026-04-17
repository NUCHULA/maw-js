import "./DsnmJJEf.js";
import { p as r, e as c, a as d, g as l, b as p, c as m } from "./CeQCqUQ_.js";
import { a as g } from "./DMf1efOI.js";
import { s as u, r as b } from "./C_-niZe9.js";
import { I as h } from "./CefFKWAt.js";
const x = [{ id: "starters", name: "Starters", description: "Building blocks everyone needs", icon: "Box", objects: ["js", "msg", "button", "toggle", "slider", "knob", "textbox", "peek", "label", "note", "title"] }, { id: "control", name: "Control", description: "When and where messages go", icon: "GitBranch", objects: ["loadbang", "metro", "trigger", "spigot", "delay", "throttle", "debounce", "float", "int", "stack", "queue", "kv", "send", "recv"] }, { id: "transform", name: "Transforms", description: "Process and filter messages", icon: "ArrowRightLeft", objects: ["filter", "map", "tap", "scan", "select", "uniq", "uniqby", "unpack", "expr", "clip"] }, { id: "ui", name: "User Interfaces", description: "Interface building components", icon: "Layout", objects: ["keyboard", "markdown", "iframe", "link", "dom", "vue", "switch", "curve"] }, { id: "media", name: "Media", description: "Starter kits for video and audio", icon: "Camera", objects: ["webcam", "video", "img", "screen", "mic~", "gain~", "soundfile~", "out~", "bg.out", "send.vdo", "recv.vdo"] }, { id: "2d", name: "2D Graphics", description: "Interactive 2D canvas objects", icon: "Palette", objects: ["p5", "canvas", "canvas.dom", "surface", "textmode", "textmode.dom"] }, { id: "video-synthesis", name: "Video Synths", description: "Hydra, shaders and 3D graphics", icon: "Shapes", objects: ["hydra", "three", "three.dom", "regl", "glsl", "swgl", "projmap"] }, { id: "music", name: "Music", description: "Composition and audio synthesis", icon: "Music", objects: ["beat", "sequencer", "strudel", "orca", "sonic~", "chuck~", "csound~", "tone~", "bytebeat~", "ngea"] }, { id: "scripting", name: "Scripting", description: "Scripting languages and workers", icon: "Code", objects: ["worker", "ruby", "python", "wgpu.compute"] }, { id: "low-level", name: "Low Level", description: "Low level VMs & languages", icon: "Cpu", objects: ["uxn", "asm", "asm.mem", "uiua"] }, { id: "midi", name: "MIDI", description: "MIDI input and output", icon: "Piano", objects: ["midi.in", "midi.out", "webmidilink", "mtof"] }, { id: "networking", name: "Networking", description: "External communication and I/O", icon: "Wifi", objects: ["netsend", "netrecv", "mqtt", "sse", "vdo.ninja.push", "vdo.ninja.pull", "serial", "serial.term", "serial.dmx"] }, { id: "vision", name: "Vision", description: "Real-time ML vision detection", icon: "Eye", objects: ["vision.hand", "vision.body", "vision.face", "vision.segment", "vision.detect", "vision.gesture", "vision.classify"] }, { id: "audio-routing", name: "Audio Routing", description: "Mixing, routing and monitoring", icon: "Route", objects: ["pan~", "split~", "merge~", "send~", "recv~", "meter~", "scope~", "tap~", "fft~"] }, { id: "signal-generators", name: "Signal Generators", description: "Oscillators and signal generators", icon: "AudioLines", objects: ["osc~", "noise~", "pink~", "phasor~", "pulse~", "beat~", "sig~", "line~", "vline~", "adsr~", "adsr"] }, { id: "audio-effects", name: "Audio Effects", description: "Signal filters, dynamics, and effects", icon: "SlidersHorizontal", objects: ["lowpass~", "highpass~", "bandpass~", "notch~", "lowshelf~", "highshelf~", "peaking~", "allpass~", "delay~", "compressor~", "waveshaper~", "convolver~", "comb~", "vcf~", "biquad~", "slop~"] }, { id: "signal-math", name: "Signal Math", description: "Signal arithmetic and shaping", icon: "Calculator", objects: ["+~", "*~", "-~", "/~", "min~", "max~", ">~", "<~", "clip~", "wrap~", "abs~", "pow~", "sqrt~", "rsqrt~", "log~", "exp~", "cos~", "mtof~", "ftom~"] }, { id: "signal-processors", name: "Signal Processors", description: "DSP operators and programs", icon: "Activity", objects: ["elem~", "expr~", "fexpr~", "dsp~", "snapshot~", "samphold~", "bang~", "latch~", "threshold~", "env~", "samplerate~"] }, { id: "audio-samples", name: "Buffers & Tables", description: "Samples, tables and delay lines", icon: "FileHeadphone", objects: ["pads~", "sampler~", "table", "tabwrite~", "tabread~", "tabread4~", "tabosc4~", "delwrite~", "delread~", "delread4~"] }, { id: "ai", name: "AI", description: "AI-powered generative objects", icon: "Brain", objects: ["ai.txt", "ai.img", "ai.music", "ai.tts", "ai.stt", "tts", "stt"] }, { id: "experimental", name: "Experimental", description: "Unstable or work-in-progress", icon: "FlaskConical", objects: ["bchrn"] }];
function S(s, e) {
  r(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let o = b(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }], ["path", { d: "m3.3 7 8.7 5 8.7-5" }], ["path", { d: "M12 22V12" }]];
  h(s, u({ name: "box" }, () => o, { get iconNode() {
    return n;
  }, children: (a, v) => {
    var i = c(), t = d(i);
    g(t, () => e.children ?? l), p(a, i);
  }, $$slots: { default: true } })), m();
}
export {
  x as B,
  S as a
};
