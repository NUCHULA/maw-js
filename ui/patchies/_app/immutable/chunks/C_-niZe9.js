import { g as O, A as T, B as y, z as v, av as B, aw as L, ax as S, ay as N, az as U, at as Y, Y as M, ak as j, aA as z, k as K, aB as $, aC as C, F, aD as G, aE as q, aF as H, aG as d, S as I, aH as E, aI as Z } from "./CeQCqUQ_.js";
import { s as J, g as Q } from "./CjsEYB_8.js";
let _ = false, P = Symbol();
function re(e, r, t) {
  const n = t[r] ?? (t[r] = { store: null, source: T(void 0), unsubscribe: O });
  if (n.store !== e && !(P in t)) if (n.unsubscribe(), n.store = e ?? null, e == null) n.source.v = void 0, n.unsubscribe = O;
  else {
    var s = true;
    n.unsubscribe = J(e, (u) => {
      s ? n.source.v = u : y(n.source, u);
    }), s = false;
  }
  return e && P in t ? Q(e) : v(n.source);
}
function ne(e, r) {
  return e.set(r), r;
}
function te() {
  const e = {};
  function r() {
    B(() => {
      for (var t in e) e[t].unsubscribe();
      L(e, P, { enumerable: false, value: true });
    });
  }
  return [e, r];
}
function se(e, r, t) {
  return e.set(t), r;
}
function ie() {
  _ = true;
}
function V(e) {
  var r = _;
  try {
    return _ = false, [e(), _];
  } finally {
    _ = r;
  }
}
const W = { get(e, r) {
  if (!e.exclude.includes(r)) return e.props[r];
}, set(e, r) {
  return false;
}, getOwnPropertyDescriptor(e, r) {
  if (!e.exclude.includes(r) && r in e.props) return { enumerable: true, configurable: true, value: e.props[r] };
}, has(e, r) {
  return e.exclude.includes(r) ? false : r in e.props;
}, ownKeys(e) {
  return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
} };
function ue(e, r, t) {
  return new Proxy({ props: e, exclude: r }, W);
}
const X = { get(e, r) {
  let t = e.props.length;
  for (; t--; ) {
    let n = e.props[t];
    if (d(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r];
  }
}, set(e, r, t) {
  let n = e.props.length;
  for (; n--; ) {
    let s = e.props[n];
    d(s) && (s = s());
    const u = S(s, r);
    if (u && u.set) return u.set(t), true;
  }
  return false;
}, getOwnPropertyDescriptor(e, r) {
  let t = e.props.length;
  for (; t--; ) {
    let n = e.props[t];
    if (d(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
      const s = S(n, r);
      return s && !s.configurable && (s.configurable = true), s;
    }
  }
}, has(e, r) {
  if (r === I || r === E) return false;
  for (let t of e.props) if (d(t) && (t = t()), t != null && r in t) return true;
  return false;
}, ownKeys(e) {
  const r = [];
  for (let t of e.props) if (d(t) && (t = t()), !!t) {
    for (const n in t) r.includes(n) || r.push(n);
    for (const n of Object.getOwnPropertySymbols(t)) r.includes(n) || r.push(n);
  }
  return r;
} };
function ae(...e) {
  return new Proxy({ props: e }, X);
}
function fe(e, r, t, n) {
  var _a;
  var s = !G || (t & q) !== 0, u = (t & C) !== 0, x = (t & Z) !== 0, a = n, b = true, m = () => (b && (b = false, a = x ? F(n) : n), a), o;
  if (u) {
    var A = I in e || E in e;
    o = ((_a = S(e, r)) == null ? void 0 : _a.set) ?? (A && r in e ? (i) => e[r] = i : void 0);
  }
  var l, w = false;
  u ? [l, w] = V(() => e[r]) : l = e[r], l === void 0 && n !== void 0 && (l = m(), o && (s && N(), o(l)));
  var f;
  if (s ? f = () => {
    var i = e[r];
    return i === void 0 ? m() : (b = true, i);
  } : f = () => {
    var i = e[r];
    return i !== void 0 && (a = void 0), i === void 0 ? a : i;
  }, s && (t & U) === 0) return f;
  if (o) {
    var D = e.$$legacy;
    return function(i, p) {
      return arguments.length > 0 ? ((!s || !p || D || w) && o(p ? f() : i), i) : f();
    };
  }
  var g = false, c = ((t & H) !== 0 ? Y : M)(() => (g = false, f()));
  u && v(c);
  var R = K;
  return function(i, p) {
    if (arguments.length > 0) {
      const h = p ? v(c) : s && u ? j(i) : i;
      return y(c, h), g = true, a !== void 0 && (a = h), i;
    }
    return z && g || (R.f & $) !== 0 ? c.v : v(c);
  };
}
export {
  te as a,
  re as b,
  ne as c,
  se as d,
  ie as m,
  fe as p,
  ue as r,
  ae as s
};
