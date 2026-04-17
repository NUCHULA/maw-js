import { aK as w, x as D, C as O, aL as Y, o as F, H as b, V as h, v as x, j as M, m as d, Z as I, q as U, aM as q, ab as W, a4 as Z, aN as z, aO as A, aP as K, aQ as g, aR as Q, N as X, O as k, i as p, aS as B, p as G, an as o, u as L, k as J, c as ee, L as te, w as ae, av as ne, M as se, g as re, a8 as oe, aT as v, aq as ie, ae as S, aU as le, a5 as fe, aV as P, aD as ue, F as T, aW as ce, aX as de, aY as _e, aZ as pe, a_ as ve, a$ as he, b0 as ge } from "./CeQCqUQ_.js";
function xe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function $(e, t) {
  return j(e, t);
}
function ye(e, t) {
  w(), t.intro = t.intro ?? false;
  const n = t.target, r = p, s = d;
  try {
    for (var a = D(n); a && (a.nodeType !== O || a.data !== Y); ) a = F(a);
    if (!a) throw b;
    h(true), x(a), M();
    const f = j(e, { ...t, anchor: a });
    if (d === null || d.nodeType !== O || d.data !== I) throw U(), b;
    return h(false), f;
  } catch (f) {
    if (f === b) return t.recover === false && q(), w(), W(n), h(false), $(e, t);
    throw f;
  } finally {
    h(r), x(s), B();
  }
}
const _ = /* @__PURE__ */ new Map();
function j(e, { target: t, anchor: n, props: r = {}, events: s, context: a, intro: f = true }) {
  w();
  var u = /* @__PURE__ */ new Set(), y = (c) => {
    for (var i = 0; i < c.length; i++) {
      var l = c[i];
      if (!u.has(l)) {
        u.add(l);
        var N = Q(l);
        t.addEventListener(l, g, { passive: N });
        var R = _.get(l);
        R === void 0 ? (document.addEventListener(l, g, { passive: N }), _.set(l, 1)) : _.set(l, R + 1);
      }
    }
  };
  y(Z(z)), A.add(y);
  var m = void 0, V = K(() => {
    var c = n ?? t.appendChild(X());
    return k(() => {
      if (a) {
        G({});
        var i = o;
        i.c = a;
      }
      s && (r.$$events = s), p && L(c, null), m = e(c, r) || {}, p && (J.nodes_end = d), a && ee();
    }), () => {
      var _a;
      for (var i of u) {
        t.removeEventListener(i, g);
        var l = _.get(i);
        --l === 0 ? (document.removeEventListener(i, g), _.delete(i)) : _.set(i, l);
      }
      A.delete(y), c !== n && ((_a = c.parentNode) == null ? void 0 : _a.removeChild(c));
    };
  });
  return E.set(m, V), m;
}
let E = /* @__PURE__ */ new WeakMap();
function me(e, t) {
  const n = E.get(e);
  return n ? (E.delete(e), n(t)) : Promise.resolve();
}
function Ae(e, t, ...n) {
  var r = e, s = re, a;
  te(() => {
    s !== (s = t()) && (a && (oe(a), a = null), a = k(() => s(r, ...n)));
  }, se), p && (r = d);
}
function be(e) {
  return (t, ...n) => {
    var _a;
    var r = e(...n), s;
    if (p) s = d, M();
    else {
      var a = r.render().trim(), f = ae(a);
      s = D(f), t.before(s);
    }
    const u = (_a = r.setup) == null ? void 0 : _a.call(r, s);
    L(s, s), typeof u == "function" && ne(u);
  };
}
function we() {
  var _a;
  return S === null && le(), ((_a = S).ac ?? (_a.ac = new AbortController())).signal;
}
function H(e) {
  o === null && v(), ue && o.l !== null ? C(o).m.push(e) : ie(() => {
    const t = T(e);
    if (typeof t == "function") return t;
  });
}
function Ee(e) {
  o === null && v(), H(() => () => T(e));
}
function Te(e, t, { bubbles: n = false, cancelable: r = false } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ce() {
  const e = o;
  return e === null && v(), (t, n, r) => {
    var _a;
    const s = (_a = e.s.$$events) == null ? void 0 : _a[t];
    if (s) {
      const a = fe(s) ? s.slice() : [s], f = Te(t, n, r);
      for (const u of a) u.call(e.x, f);
      return !f.defaultPrevented;
    }
    return true;
  };
}
function Ne(e) {
  o === null && v(), o.l === null && P(), C(o).b.push(e);
}
function Re(e) {
  o === null && v(), o.l === null && P(), C(o).a.push(e);
}
function C(e) {
  var t = e.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const Se = Object.freeze(Object.defineProperty({ __proto__: null, afterUpdate: Re, beforeUpdate: Ne, createEventDispatcher: Ce, createRawSnippet: be, flushSync: ce, getAbortSignal: we, getAllContexts: de, getContext: _e, hasContext: pe, hydrate: ye, mount: $, onDestroy: Ee, onMount: H, setContext: ve, settled: he, tick: ge, unmount: me, untrack: T }, Symbol.toStringTag, { value: "Module" }));
export {
  Ae as a,
  Ee as b,
  Se as c,
  ye as h,
  $ as m,
  H as o,
  xe as s,
  me as u
};
