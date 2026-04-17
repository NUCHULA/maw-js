import "../chunks/DsnmJJEf.js";
import { o as j, a as U } from "../chunks/DMf1efOI.js";
import { p as _, e as A, a as M, b as h, c as w, f as C, t as B, h as L, s as E, ao as d, z as V, al as D, $ as F } from "../chunks/CeQCqUQ_.js";
import { u as G, c as Q, m as v, t as S, d as T, l as I, a as N, b as y, s as K, e as X, f as Y, g as W, i as Z } from "../chunks/DqM4d4Hu.js";
import { i as k } from "../chunks/CmAffBVh.js";
import { p as n } from "../chunks/C_-niZe9.js";
import { b as O } from "../chunks/C66EmW7x.js";
import { h as p } from "../chunks/DiyIUo5C.js";
const $ = false, ee = true, Me = Object.freeze(Object.defineProperty({ __proto__: null, prerender: ee, ssr: $ }, Symbol.toStringTag, { value: "Module" }));
function te(r) {
  G.current = r;
}
function re(r) {
  Q.current = r;
}
function oe({ defaultMode: r = "system", themeColors: e, darkClassNames: t = ["dark"], lightClassNames: o = [], defaultTheme: s = "", modeStorageKey: a = "mode-watcher-mode", themeStorageKey: c = "mode-watcher-theme" }) {
  const i = document.documentElement, l = localStorage.getItem(a) ?? r, m = localStorage.getItem(c) ?? s, f = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (f ? (t.length && i.classList.remove(...t.filter(Boolean)), o.length && i.classList.add(...o.filter(Boolean))) : (o.length && i.classList.remove(...o.filter(Boolean)), t.length && i.classList.add(...t.filter(Boolean))), i.style.colorScheme = f ? "light" : "dark", e) {
    const g = document.querySelector('meta[name="theme-color"]');
    g && g.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  m && (i.setAttribute("data-theme", m), localStorage.setItem(c, m)), localStorage.setItem(a, l);
}
var ae = C('<meta name="theme-color"/>');
function ne(r, e) {
  _(e, true);
  var t = A(), o = M(t);
  {
    var s = (a) => {
      var c = ae();
      B(() => O(c, "content", e.themeColors.dark)), h(a, c);
    };
    k(o, (a) => {
      e.themeColors && a(s);
    });
  }
  h(r, t), w();
}
var se = C('<meta name="theme-color"/>'), ce = C("<!> <!>", 1);
function ie(r, e) {
  _(e, true);
  let t = n(e, "trueNonce", 3, "");
  L((o) => {
    var s = ce(), a = M(s);
    {
      var c = (l) => {
        var m = se();
        B(() => O(m, "content", e.themeColors.dark)), h(l, m);
      };
      k(a, (l) => {
        e.themeColors && l(c);
      });
    }
    var i = E(a, 2);
    p(i, () => `<script${t() ? ` nonce=${t()}` : ""}>(` + oe.toString() + ")(" + JSON.stringify(e.initConfig) + ");<\/script>"), h(o, s);
  }), w();
}
function le(r, e) {
  _(e, true);
  let t = n(e, "track", 3, true), o = n(e, "defaultMode", 3, "system"), s = n(e, "disableTransitions", 3, true), a = n(e, "darkClassNames", 19, () => ["dark"]), c = n(e, "lightClassNames", 19, () => []), i = n(e, "defaultTheme", 3, ""), l = n(e, "nonce", 3, ""), m = n(e, "themeStorageKey", 3, "mode-watcher-theme"), f = n(e, "modeStorageKey", 3, "mode-watcher-mode"), g = n(e, "disableHeadScriptInjection", 3, false), b = n(e, "synchronousModeChanges", 3, false);
  v.current = f(), S.current = m(), T.current = a(), I.current = c(), N.current = s(), y.current = e.themeColors, K.current = b(), d(() => {
    K.current = b();
  }), d(() => {
    N.current = s();
  }), d(() => {
    y.current = e.themeColors;
  }), d(() => {
    T.current = a();
  }), d(() => {
    I.current = c();
  }), d(() => {
    v.current = f();
  }), d(() => {
    S.current = m();
  }), d(() => {
    X.current, v.current, S.current, Y.current;
  }), j(() => {
    W.tracking(t()), W.query();
    const u = localStorage.getItem(v.current);
    te(Z(u) ? u : o());
    const R = localStorage.getItem(S.current);
    re(R || i());
  });
  const q = { defaultMode: o(), themeColors: e.themeColors, darkClassNames: a(), lightClassNames: c(), defaultTheme: i(), modeStorageKey: f(), themeStorageKey: m() }, z = D(() => typeof window > "u" ? l() : "");
  var P = A(), H = M(P);
  {
    var x = (u) => {
      ne(u, { get themeColors() {
        return y.current;
      } });
    }, J = (u) => {
      ie(u, { get trueNonce() {
        return V(z);
      }, get initConfig() {
        return q;
      }, get themeColors() {
        return y.current;
      } });
    };
    k(H, (u) => {
      g() ? u(x) : u(J, false);
    });
  }
  h(r, P), w();
}
async function me() {
  if (!("serviceWorker" in navigator)) return false;
  const r = await navigator.serviceWorker.getRegistrations();
  for (const e of r) await e.unregister(), console.log("[SW] Unregistered service worker:", e.scope);
  if (r.length > 0) {
    if (console.log("[SW] All service workers unregistered."), "caches" in window) {
      const e = await caches.keys();
      await Promise.all(e.map((t) => caches.delete(t))), console.log("[SW] Cleared all caches:", e);
    }
    return true;
  }
  return false;
}
var ue = C("<!> <!>", 1);
function we(r, e) {
  _(e, true), j(() => me());
  var t = ue();
  L((a) => {
    F.title = "Patchies";
  });
  var o = M(t);
  le(o, {});
  var s = E(o, 2);
  U(s, () => e.children), h(r, t), w();
}
export {
  we as component,
  Me as universal
};
