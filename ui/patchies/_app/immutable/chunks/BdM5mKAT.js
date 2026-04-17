const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DEtofvgD.js","./BOuAxtfB.js","./DoeJ0Mx_.js","./BgcalO60.js"])))=>i.map(i=>d[i]);
import { _ as r } from "./BOuAxtfB.js";
import { findTuning as j, NGEA_TUNINGS as b } from "./BfiaxODm.js";
let y;
let __tla = (async () => {
  y = async function() {
    await (await r(() => import("./DEtofvgD.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((t) => t.i), __vite__mapDeps([0,1,2,3]), import.meta.url)).initAudio();
    const [s, l, c, h, m, E, g, u, f] = await Promise.all([
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.A), __vite__mapDeps([0,1,2,3]), import.meta.url),
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.a), __vite__mapDeps([0,1,2,3]), import.meta.url),
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.b), __vite__mapDeps([0,1,2,3]), import.meta.url),
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.e), __vite__mapDeps([0,1,2,3]), import.meta.url),
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.d), __vite__mapDeps([0,1,2,3]), import.meta.url),
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.f), __vite__mapDeps([0,1,2,3]), import.meta.url),
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.g), __vite__mapDeps([0,1,2,3]), import.meta.url),
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.h), __vite__mapDeps([0,1,2,3]), import.meta.url),
      r(() => import("./DEtofvgD.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t) => t.j), __vite__mapDeps([0,1,2,3]), import.meta.url)
    ]), { evalScope: p } = s, { aliasBank: P, registerSynthSounds: T, registerZZFXSounds: A, samples: n } = m, { registerSoundfonts: D } = u, S = p(s, l, c, h, m, E, g, u, f), i = "https://raw.githubusercontent.com/felixroos/dough-samples/main/", I = "https://raw.githubusercontent.com/todepond/samples/main/";
    await Promise.all([
      S,
      T(),
      A(),
      D(),
      n(`${i}/tidal-drum-machines.json`),
      n(`${i}/piano.json`),
      n(`${i}/Dirt-Samples.json`),
      n(`${i}/EmuSP12.json`),
      n(`${i}/vcsl.json`),
      n(`${i}/mridangam.json`)
    ]), P(`${I}/tidal-drum-machines-alias.json`);
    const _ = (t) => (j(t) ?? b[0]).data.map((e) => e.freq);
    p({
      ngea: _
    });
    const { noteToMidi: L, valueToMidi: v, Pattern: d } = s, O = L("C8"), R = (t, o) => t * o + (1 - o) / 2;
    d.prototype.ngea = function(t) {
      const o = _(String(t));
      return this.fmap((e) => {
        const a = typeof e == "object" && e !== null ? e : {}, V = Math.abs(Math.round(Number(e))) % o.length;
        return {
          ...a,
          freq: o[V]
        };
      });
    }, d.prototype.piano = function() {
      return this.fmap((t) => {
        const o = t;
        return {
          ...o,
          clip: o.clip ?? 1
        };
      }).s("piano").release(0.1).fmap((t) => {
        const o = v(t), e = t, a = R(Math.min(Math.round(o) / O, 1), 0.5);
        return {
          ...e,
          pan: (e.pan || 1) * a
        };
      });
    };
  };
})();
export {
  __tla,
  y as prebake
};
