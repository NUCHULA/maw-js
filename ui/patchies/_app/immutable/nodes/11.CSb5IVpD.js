import "../chunks/DsnmJJEf.js";
import { p as J, e as N, h as T, a as W, b as k, c as A, $ as D, f as E, d as s, n as z, r as o, s as u, B as F, aj as H, z as t, al as a, t as K } from "../chunks/CeQCqUQ_.js";
import { i as L } from "../chunks/CmAffBVh.js";
import { c as Q } from "../chunks/av5sMLXc.js";
import { a as C } from "../chunks/C66EmW7x.js";
import { S as R } from "../chunks/BqXdNy4d.js";
import { P as U } from "../chunks/BSpKvSVU.js";
import { M as X, m as S, O as Y, o as y, V as Z } from "../chunks/DVwKmx-C.js";
var tt = E('<div class="sparks-page min-h-screen svelte-1upog9c"><header class="px-8 pt-14 pb-8"><div class="mx-auto max-w-4xl"><p class="mb-3 font-mono text-[11px] tracking-[0.25em] uppercase">patchies \u2726 sparks</p> <h1 class="font-serif text-[clamp(2rem,5vw,3.8rem)] leading-[1.1] text-zinc-100 italic">What do you want<br/>to make people feel?</h1> <p class="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600">Two questions. Pick one or both to find your spark.</p></div></header> <div class="px-8 pb-10"><div class="mx-auto max-w-4xl space-y-8"><!> <div class="flex items-center gap-4"><div class="h-px flex-1 bg-zinc-900"></div> <span class="font-mono text-[10px] tracking-widest text-zinc-800 uppercase">and / or</span> <div class="h-px flex-1 bg-zinc-900"></div></div> <!></div></div> <!>  <div class="border-t border-zinc-900 px-8 py-5"><div class="mx-auto flex max-w-4xl items-center justify-between"><p class="font-mono text-[11px] text-zinc-800">patchies \xB7 sparks</p> <a href="/" class="cursor-pointer font-mono text-[11px] text-zinc-700 transition-colors hover:text-zinc-400">\u2190 back to patchies</a></div></div></div>');
function dt($, I) {
  J(I, true);
  let r = H(null), l = new R();
  const n = a(() => S.find((c) => c.id === t(r)) ?? null), M = a(() => t(r) !== null || l.size > 0), v = a(() => {
    var _a;
    return ((_a = t(n)) == null ? void 0 : _a.accentColor) ?? "#f97316";
  }), x = a(() => {
    var _a;
    return ((_a = t(n)) == null ? void 0 : _a.glowColor) ?? "rgba(249,115,22,0.05)";
  }), f = a(() => {
    var _a;
    return ((_a = t(n)) == null ? void 0 : _a.textColor) ?? "#fed7aa";
  });
  var g = N();
  T((c) => {
    D.title = "Sparks | Patchies";
  });
  var O = W(g);
  Q(O, () => U, (c, P) => {
    P(c, { children: (G, et) => {
      var i = tt();
      let h;
      var d = s(i), w = s(d), j = s(w);
      C(j, "", {}, { color: "var(--accent)" }), z(4), o(w), o(d);
      var p = u(d, 2), b = s(p), _ = s(b);
      X(_, { get moods() {
        return S;
      }, get selectedMoodId() {
        return t(r);
      }, onSelect: (e) => F(r, e, true) });
      var V = u(_, 4);
      Y(V, { get outputs() {
        return y;
      }, get selectedOutputIds() {
        return l;
      } }), o(b), o(p);
      var q = u(p, 2);
      {
        var B = (e) => {
          Z(e, { get selectedMood() {
            return t(n);
          }, get selectedOutputIds() {
            return l;
          }, get outputs() {
            return y;
          }, get accentColor() {
            return t(v);
          }, get glowColor() {
            return t(x);
          }, get textColor() {
            return t(f);
          }, onScatter: (m) => {
            localStorage.setItem("patchies:sparks-pending-scatter", JSON.stringify(m)), window.location.href = "/";
          }, onChat: (m) => {
            localStorage.setItem("patchies:sparks-pending-chat", m), window.location.href = "/";
          } });
        };
        L(q, (e) => {
          t(M) && e(B);
        });
      }
      z(2), o(i), K((e) => h = C(i, "", h, e), [() => ({ "--accent": t(v), "--glow": t(x), "--text-acc": t(f) })]), k(G, i);
    }, $$slots: { default: true } });
  }), k($, g), A();
}
export {
  dt as component
};
