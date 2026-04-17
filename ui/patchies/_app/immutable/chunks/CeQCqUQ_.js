var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _o, _s, _i, _e2, _l, _f, _r2, _u, _n2, _t2, _a2, _nt_instances, __fn, v_fn, c_fn;
var ie = Array.isArray, Be = Array.prototype.indexOf, Wn = Array.from, Ot = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, Ue = Object.getOwnPropertyDescriptors, We = Object.prototype, $e = Array.prototype, ue = Object.getPrototypeOf, Xt = Object.isExtensible;
function $n(t) {
  return typeof t == "function";
}
const Gn = () => {
};
function Kn(t) {
  return t();
}
function oe(t) {
  for (var e = 0; e < t.length; e++) t[e]();
}
function Ge() {
  var t, e, n = new Promise((r, s) => {
    t = r, e = s;
  });
  return { promise: n, resolve: t, reject: e };
}
function Xn(t, e, n = false) {
  return t === void 0 ? n ? e() : e : t;
}
function zn(t, e) {
  if (Array.isArray(t)) return t;
  if (e === void 0 || !(Symbol.iterator in t)) return Array.from(t);
  const n = [];
  for (const r of t) if (n.push(r), n.length === e) break;
  return n;
}
const S = 2, Lt = 4, xt = 8, ht = 16, q = 32, tt = 64, le = 128, A = 256, Et = 512, w = 1024, O = 2048, et = 4096, U = 8192, ut = 16384, Ft = 32768, fe = 65536, zt = 1 << 17, ce = 1 << 18, jt = 1 << 19, qt = 1 << 20, It = 1 << 21, Yt = 1 << 22, X = 1 << 23, z = Symbol("$state"), Zn = Symbol("legacy props"), Jn = Symbol(""), Ht = new class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "StaleReactionError");
    __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), tr = 1, Vt = 3, At = 8;
function Ke() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Xe(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ze() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ze(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Je() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Qe(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function tn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function er() {
  throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction");
}
function nr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function rr(t) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only");
}
function ar(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function en() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
const sr = 1, ir = 2, ur = 4, or = 8, lr = 16, fr = 1, cr = 2, _r = 4, vr = 8, dr = 16, _e = 1, an = 2, ve = "[", sn = "[!", un = "]", Bt = {}, g = Symbol(), hr = "http://www.w3.org/1999/xhtml", pr = "http://www.w3.org/2000/svg", wr = "@attach";
function Ut(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function yr() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let y = false;
function Zt(t) {
  y = t;
}
let p;
function W(t) {
  if (t === null) throw Ut(), Bt;
  return p = t;
}
function de() {
  return W(j(p));
}
function br(t) {
  if (y) {
    if (j(p) !== null) throw Ut(), Bt;
    p = t;
  }
}
function Er(t = 1) {
  if (y) {
    for (var e = t, n = p; e--; ) n = j(n);
    p = n;
  }
}
function mr() {
  for (var t = 0, e = p; ; ) {
    if (e.nodeType === At) {
      var n = e.data;
      if (n === un) {
        if (t === 0) return e;
        t -= 1;
      } else (n === ve || n === sn) && (t += 1);
    }
    var r = j(e);
    e.remove(), e = r;
  }
}
function gr(t) {
  if (!t || t.nodeType !== At) throw Ut(), Bt;
  return t.data;
}
function he(t) {
  return t === this.v;
}
function on(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Tr(t, e) {
  return t !== e;
}
function pe(t) {
  return !on(t, this.v);
}
let St = false;
function xr() {
  St = true;
}
let b = null;
function mt(t) {
  b = t;
}
function Ar(t) {
  return kt().get(t);
}
function Sr(t, e) {
  return kt().set(t, e), e;
}
function kr(t) {
  return kt().has(t);
}
function Cr() {
  return kt();
}
function Nr(t, e = false, n) {
  b = { p: b, c: null, e: null, s: t, x: null, l: St && !e ? { s: null, u: null, $: [] } : null };
}
function Rr(t) {
  var e = b, n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n) Ne(r);
  }
  return t !== void 0 && (e.x = t), b = e.p, t ?? {};
}
function pt() {
  return !St || b !== null && b.l === null;
}
function kt(t) {
  return b === null && Xe(), b.c ?? (b.c = new Map(ln(b) || void 0));
}
function ln(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null) return n;
    e = e.p;
  }
  return null;
}
const fn = /* @__PURE__ */ new WeakMap();
function cn(t) {
  var e = d;
  if (e === null) return c.f |= X, t;
  if ((e.f & Ft) === 0) {
    if ((e.f & le) === 0) throw !e.parent && t instanceof Error && we(t), t;
    e.b.error(t);
  } else Wt(t, e);
}
function Wt(t, e) {
  for (; e !== null; ) {
    if ((e.f & le) !== 0) try {
      e.b.error(t);
      return;
    } catch (n) {
      t = n;
    }
    e = e.parent;
  }
  throw t instanceof Error && we(t), t;
}
function we(t) {
  const e = fn.get(t);
  e && (Ot(t, "message", { value: e.message }), Ot(t, "stack", { value: e.stack }));
}
const _n = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let _t = [], vt = [];
function ye() {
  var t = _t;
  _t = [], oe(t);
}
function be() {
  var t = vt;
  vt = [], oe(t);
}
function Ee(t) {
  _t.length === 0 && queueMicrotask(ye), _t.push(t);
}
function Or(t) {
  vt.length === 0 && _n(be), vt.push(t);
}
function vn() {
  _t.length > 0 && ye(), vt.length > 0 && be();
}
function dn() {
  for (var t = d.b; t !== null && !t.has_pending_snippet(); ) t = t.parent;
  return t === null && Ke(), t;
}
function $t(t) {
  var e = S | O, n = c !== null && (c.f & S) !== 0 ? c : null;
  return d === null || n !== null && (n.f & A) !== 0 ? e |= A : d.f |= jt, { ctx: b, deps: null, effects: null, equals: he, f: e, fn: t, reactions: null, rv: 0, v: g, wv: 0, parent: n ?? d, ac: null };
}
function hn(t, e) {
  let n = d;
  n === null && ze();
  var r = n.b, s = void 0, a = Kt(g), u = null, l = !c;
  return Sn(() => {
    try {
      var i = t();
    } catch (h) {
      i = Promise.reject(h);
    }
    var o = () => i;
    s = (u == null ? void 0 : u.then(o, o)) ?? Promise.resolve(i), u = s;
    var f = C, _ = r.pending;
    l && (r.update_pending_count(1), _ || f.increment());
    const v = (h, m = void 0) => {
      u = null, _ || f.activate(), m ? m !== Ht && (a.f |= X, Pt(a, m)) : ((a.f & X) !== 0 && (a.f ^= X), Pt(a, h)), l && (r.update_pending_count(-1), _ || f.decrement()), Te();
    };
    if (s.then(v, (h) => v(null, h || "unknown")), f) return () => {
      queueMicrotask(() => f.neuter());
    };
  }), new Promise((i) => {
    function o(f) {
      function _() {
        f === s ? i(a) : o(s);
      }
      f.then(_, _);
    }
    o(s);
  });
}
function Ir(t) {
  const e = $t(t);
  return Me(e), e;
}
function pn(t) {
  const e = $t(t);
  return e.equals = pe, e;
}
function me(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1) $(e[n]);
  }
}
function wn(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & S) === 0) return e;
    e = e.parent;
  }
  return null;
}
function Gt(t) {
  var e, n = d;
  G(wn(t));
  try {
    me(t), e = je(t);
  } finally {
    G(n);
  }
  return e;
}
function ge(t) {
  var e = Gt(t);
  if (t.equals(e) || (t.v = e, t.wv = Le()), !ot) if (it !== null) it.set(t, t.v);
  else {
    var n = (V || (t.f & A) !== 0) && t.deps !== null ? et : w;
    E(t, n);
  }
}
function yn(t, e, n) {
  const r = pt() ? $t : pn;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var s = C, a = d, u = bn(), l = dn();
  Promise.all(e.map((i) => hn(i))).then((i) => {
    s == null ? void 0 : s.activate(), u();
    try {
      n([...t.map(r), ...i]);
    } catch (o) {
      (a.f & ut) === 0 && Wt(o, a);
    }
    s == null ? void 0 : s.deactivate(), Te();
  }).catch((i) => {
    l.error(i);
  });
}
function bn() {
  var t = d, e = c, n = b;
  return function() {
    G(t), M(e), mt(n);
  };
}
function Te() {
  G(null), M(null), mt(null);
}
const bt = /* @__PURE__ */ new Set();
let C = null, it = null, Jt = /* @__PURE__ */ new Set(), at = [], Ct = null, Dt = false;
const _nt = class _nt {
  constructor() {
    __privateAdd(this, _nt_instances);
    __privateAdd(this, _o, /* @__PURE__ */ new Map());
    __privateAdd(this, _s, /* @__PURE__ */ new Map());
    __privateAdd(this, _i, /* @__PURE__ */ new Set());
    __privateAdd(this, _e2, 0);
    __privateAdd(this, _l, null);
    __privateAdd(this, _f, false);
    __privateAdd(this, _r2, []);
    __privateAdd(this, _u, []);
    __privateAdd(this, _n2, []);
    __privateAdd(this, _t2, []);
    __privateAdd(this, _a2, []);
    __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  capture(e, n) {
    __privateGet(this, _s).has(e) || __privateGet(this, _s).set(e, n), __privateGet(this, _o).set(e, e.v);
  }
  activate() {
    C = this;
  }
  deactivate() {
    C = null;
    for (const e of Jt) if (Jt.delete(e), e(), C !== null) break;
  }
  neuter() {
    __privateSet(this, _f, true);
  }
  flush() {
    at.length > 0 ? this.flush_effects() : __privateMethod(this, _nt_instances, c_fn).call(this), C === this && (__privateGet(this, _e2) === 0 && bt.delete(this), this.deactivate());
  }
  flush_effects() {
    var e = st;
    Dt = true;
    try {
      var n = 0;
      for (ne(true); at.length > 0; ) {
        if (n++ > 1e3) {
          var r, s;
          mn();
        }
        __privateMethod(this, _nt_instances, __fn).call(this, at), Z.clear();
      }
    } finally {
      Dt = false, ne(e), Ct = null;
    }
  }
  increment() {
    __privateSet(this, _e2, __privateGet(this, _e2) + 1);
  }
  decrement() {
    if (__privateSet(this, _e2, __privateGet(this, _e2) - 1), __privateGet(this, _e2) === 0) {
      for (const e of __privateGet(this, _n2)) E(e, O), B(e);
      for (const e of __privateGet(this, _t2)) E(e, O), B(e);
      for (const e of __privateGet(this, _a2)) E(e, O), B(e);
      __privateSet(this, _n2, []), __privateSet(this, _t2, []), this.flush();
    } else this.deactivate();
  }
  add_callback(e) {
    __privateGet(this, _i).add(e);
  }
  settled() {
    return (__privateGet(this, _l) ?? __privateSet(this, _l, Ge())).promise;
  }
  static ensure(e = true) {
    if (C === null) {
      const n = C = new _nt();
      bt.add(C), e && queueMicrotask(() => {
        C === n && n.flush();
      });
    }
    return C;
  }
};
_o = new WeakMap();
_s = new WeakMap();
_i = new WeakMap();
_e2 = new WeakMap();
_l = new WeakMap();
_f = new WeakMap();
_r2 = new WeakMap();
_u = new WeakMap();
_n2 = new WeakMap();
_t2 = new WeakMap();
_a2 = new WeakMap();
_nt_instances = new WeakSet();
__fn = function(e) {
  var _a3;
  at = [];
  var n = null;
  if (bt.size > 1) {
    n = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map();
    for (const [a, u] of __privateGet(this, _o)) n.set(a, { v: a.v, wv: a.wv }), a.v = u;
    for (const a of bt) if (a !== this) for (const [u, l] of __privateGet(a, _s)) n.has(u) || (n.set(u, { v: u.v, wv: u.wv }), u.v = l);
  }
  for (const a of e) __privateMethod(this, _nt_instances, v_fn).call(this, a);
  if (__privateGet(this, _r2).length === 0 && __privateGet(this, _e2) === 0) {
    var r = __privateGet(this, _n2), s = __privateGet(this, _t2);
    __privateSet(this, _n2, []), __privateSet(this, _t2, []), __privateSet(this, _a2, []), __privateMethod(this, _nt_instances, c_fn).call(this), Qt(r), Qt(s), (_a3 = __privateGet(this, _l)) == null ? void 0 : _a3.resolve();
  } else {
    for (const a of __privateGet(this, _n2)) E(a, w);
    for (const a of __privateGet(this, _t2)) E(a, w);
    for (const a of __privateGet(this, _a2)) E(a, w);
  }
  if (n) {
    for (const [a, { v: u, wv: l }] of n) a.wv <= l && (a.v = u);
    it = null;
  }
  for (const a of __privateGet(this, _r2)) ct(a);
  for (const a of __privateGet(this, _u)) ct(a);
  __privateSet(this, _r2, []), __privateSet(this, _u, []);
};
v_fn = function(e) {
  var _a3;
  e.f ^= w;
  for (var n = e.first; n !== null; ) {
    var r = n.f, s = (r & (q | tt)) !== 0, a = s && (r & w) !== 0, u = a || (r & U) !== 0 || this.skipped_effects.has(n);
    if (!u && n.fn !== null) {
      if (s) n.f ^= w;
      else if ((r & Lt) !== 0) __privateGet(this, _t2).push(n);
      else if (Nt(n)) if ((r & Yt) !== 0) {
        var l = ((_a3 = n.b) == null ? void 0 : _a3.pending) ? __privateGet(this, _u) : __privateGet(this, _r2);
        l.push(n);
      } else (n.f & ht) !== 0 && __privateGet(this, _a2).push(n), ct(n);
      var i = n.first;
      if (i !== null) {
        n = i;
        continue;
      }
    }
    var o = n.parent;
    for (n = n.next; n === null && o !== null; ) n = o.next, o = o.parent;
  }
};
c_fn = function() {
  if (!__privateGet(this, _f)) for (const e of __privateGet(this, _i)) e();
  __privateGet(this, _i).clear();
};
let nt = _nt;
function En(t) {
  var e;
  const n = nt.ensure(false);
  for (t && (n.flush_effects(), e = t()); ; ) {
    if (vn(), at.length === 0) return n === C && n.flush(), Ct = null, e;
    n.flush_effects();
  }
}
function mn() {
  try {
    tn();
  } catch (t) {
    Wt(t, Ct);
  }
}
function Qt(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if ((r.f & (ut | U)) === 0 && Nt(r)) {
        var s = gt;
        if (ct(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ie(r) : r.fn = null), gt > s && (r.f & qt) !== 0) break;
      }
    }
    for (; n < e; n += 1) B(t[n]);
  }
}
function B(t) {
  for (var e = Ct = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Dt && e === d && (n & ht) !== 0) return;
    if ((n & (tt | q)) !== 0) {
      if ((n & w) === 0) return;
      e.f ^= w;
    }
  }
  at.push(e);
}
const Z = /* @__PURE__ */ new Map();
function Kt(t, e) {
  var n = { f: 0, v: t, reactions: null, equals: he, rv: 0, wv: 0 };
  return n;
}
function H(t, e) {
  const n = Kt(t);
  return Me(n), n;
}
function Dr(t, e = false, n = true) {
  var _a3;
  const r = Kt(t);
  return e || (r.equals = pe), St && n && b !== null && b.l !== null && ((_a3 = b.l).s ?? (_a3.s = [])).push(r), r;
}
function Pr(t, e) {
  return L(t, Pn(() => K(t))), e;
}
function L(t, e, n = false) {
  c !== null && (!I || (c.f & zt) !== 0) && pt() && (c.f & (S | ht | Yt | zt)) !== 0 && !(F == null ? void 0 : F.includes(t)) && rn();
  let r = n ? lt(e) : e;
  return Pt(t, r);
}
function Pt(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ot ? Z.set(t, e) : Z.set(t, n), t.v = e, nt.ensure().capture(t, n), (t.f & S) !== 0 && ((t.f & O) !== 0 && Gt(t), E(t, (t.f & A) === 0 ? w : et)), t.wv = Le(), xe(t, O), pt() && d !== null && (d.f & w) !== 0 && (d.f & (q | tt)) === 0 && (N === null ? In([t]) : N.push(t));
  }
  return e;
}
function Mr(t, e = 1) {
  var n = K(t), r = e === 1 ? n++ : n--;
  return L(t, n), r;
}
function Rt(t) {
  L(t, t.v + 1);
}
function xe(t, e) {
  var n = t.reactions;
  if (n !== null) for (var r = pt(), s = n.length, a = 0; a < s; a++) {
    var u = n[a], l = u.f;
    (l & O) === 0 && (!r && u === d || (E(u, e), (l & (w | A)) !== 0 && ((l & S) !== 0 ? xe(u, et) : B(u))));
  }
}
function lt(t) {
  if (typeof t != "object" || t === null || z in t) return t;
  const e = ue(t);
  if (e !== We && e !== $e) return t;
  var n = /* @__PURE__ */ new Map(), r = ie(t), s = H(0), a = J, u = (l) => {
    if (J === a) return l();
    var i = c, o = J;
    M(null), ae(a);
    var f = l();
    return M(i), ae(o), f;
  };
  return r && n.set("length", H(t.length)), new Proxy(t, { defineProperty(l, i, o) {
    (!("value" in o) || o.configurable === false || o.enumerable === false || o.writable === false) && en();
    var f = n.get(i);
    return f === void 0 ? f = u(() => {
      var _ = H(o.value);
      return n.set(i, _), _;
    }) : L(f, o.value, true), true;
  }, deleteProperty(l, i) {
    var o = n.get(i);
    if (o === void 0) {
      if (i in l) {
        const f = u(() => H(g));
        n.set(i, f), Rt(s);
      }
    } else L(o, g), Rt(s);
    return true;
  }, get(l, i, o) {
    var _a3;
    if (i === z) return t;
    var f = n.get(i), _ = i in l;
    if (f === void 0 && (!_ || ((_a3 = ft(l, i)) == null ? void 0 : _a3.writable)) && (f = u(() => {
      var h = lt(_ ? l[i] : g), m = H(h);
      return m;
    }), n.set(i, f)), f !== void 0) {
      var v = K(f);
      return v === g ? void 0 : v;
    }
    return Reflect.get(l, i, o);
  }, getOwnPropertyDescriptor(l, i) {
    var o = Reflect.getOwnPropertyDescriptor(l, i);
    if (o && "value" in o) {
      var f = n.get(i);
      f && (o.value = K(f));
    } else if (o === void 0) {
      var _ = n.get(i), v = _ == null ? void 0 : _.v;
      if (_ !== void 0 && v !== g) return { enumerable: true, configurable: true, value: v, writable: true };
    }
    return o;
  }, has(l, i) {
    var _a3;
    if (i === z) return true;
    var o = n.get(i), f = o !== void 0 && o.v !== g || Reflect.has(l, i);
    if (o !== void 0 || d !== null && (!f || ((_a3 = ft(l, i)) == null ? void 0 : _a3.writable))) {
      o === void 0 && (o = u(() => {
        var v = f ? lt(l[i]) : g, h = H(v);
        return h;
      }), n.set(i, o));
      var _ = K(o);
      if (_ === g) return false;
    }
    return f;
  }, set(l, i, o, f) {
    var _a3;
    var _ = n.get(i), v = i in l;
    if (r && i === "length") for (var h = o; h < _.v; h += 1) {
      var m = n.get(h + "");
      m !== void 0 ? L(m, g) : h in l && (m = u(() => H(g)), n.set(h + "", m));
    }
    if (_ === void 0) (!v || ((_a3 = ft(l, i)) == null ? void 0 : _a3.writable)) && (_ = u(() => H(void 0)), L(_, lt(o)), n.set(i, _));
    else {
      v = _.v !== g;
      var rt = u(() => lt(o));
      L(_, rt);
    }
    var wt = Reflect.getOwnPropertyDescriptor(l, i);
    if ((wt == null ? void 0 : wt.set) && wt.set.call(f, o), !v) {
      if (r && typeof i == "string") {
        var yt = n.get("length"), Y = Number(i);
        Number.isInteger(Y) && Y >= yt.v && L(yt, Y + 1);
      }
      Rt(s);
    }
    return true;
  }, ownKeys(l) {
    K(s);
    var i = Reflect.ownKeys(l).filter((_) => {
      var v = n.get(_);
      return v === void 0 || v.v !== g;
    });
    for (var [o, f] of n) f.v !== g && !(o in l) && i.push(o);
    return i;
  }, setPrototypeOf() {
    nn();
  } });
}
function te(t) {
  try {
    if (t !== null && typeof t == "object" && z in t) return t[z];
  } catch {
  }
  return t;
}
function Lr(t, e) {
  return Object.is(te(t), te(e));
}
var ee, gn, Ae, Se, ke;
function Fr() {
  if (ee === void 0) {
    ee = window, gn = document, Ae = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Se = ft(e, "firstChild").get, ke = ft(e, "nextSibling").get, Xt(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Xt(n) && (n.__t = void 0);
  }
}
function Q(t = "") {
  return document.createTextNode(t);
}
function R(t) {
  return Se.call(t);
}
function j(t) {
  return ke.call(t);
}
function jr(t, e) {
  if (!y) return R(t);
  var n = R(p);
  if (n === null) n = p.appendChild(Q());
  else if (e && n.nodeType !== Vt) {
    var r = Q();
    return n == null ? void 0 : n.before(r), W(r), r;
  }
  return W(n), n;
}
function qr(t, e) {
  if (!y) {
    var n = R(t);
    return n instanceof Comment && n.data === "" ? j(n) : n;
  }
  return p;
}
function Yr(t, e = 1, n = false) {
  let r = y ? p : t;
  for (var s; e--; ) s = r, r = j(r);
  if (!y) return r;
  if (n && (r == null ? void 0 : r.nodeType) !== Vt) {
    var a = Q();
    return r === null ? s == null ? void 0 : s.after(a) : r.before(a), W(a), a;
  }
  return W(r), r;
}
function Tn(t) {
  t.textContent = "";
}
function Hr() {
  return false;
}
function Ce(t) {
  d === null && c === null && Qe(), c !== null && (c.f & A) !== 0 && d === null && Je(), ot && Ze();
}
function xn(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function D(t, e, n, r = true) {
  var s = d;
  s !== null && (s.f & U) !== 0 && (t |= U);
  var a = { ctx: b, deps: null, nodes_start: null, nodes_end: null, f: t | O, first: null, fn: e, last: null, next: null, parent: s, b: s && s.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
  if (n) try {
    ct(a), a.f |= Ft;
  } catch (i) {
    throw $(a), i;
  }
  else e !== null && B(a);
  var u = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & jt) === 0;
  if (!u && r && (s !== null && xn(a, s), c !== null && (c.f & S) !== 0)) {
    var l = c;
    (l.effects ?? (l.effects = [])).push(a);
  }
  return a;
}
function Vr() {
  return c !== null && !I;
}
function An(t) {
  const e = D(xt, null, false);
  return E(e, w), e.teardown = t, e;
}
function Br(t) {
  Ce();
  var e = d.f, n = !c && (e & q) !== 0 && (e & Ft) === 0;
  if (n) {
    var r = b;
    (r.e ?? (r.e = [])).push(t);
  } else return Ne(t);
}
function Ne(t) {
  return D(Lt | qt, t, false);
}
function Ur(t) {
  return Ce(), D(xt | qt, t, true);
}
function Wr(t) {
  nt.ensure();
  const e = D(tt, t, true);
  return () => {
    $(e);
  };
}
function $r(t) {
  nt.ensure();
  const e = D(tt, t, true);
  return (n = {}) => new Promise((r) => {
    n.outro ? Rn(e, () => {
      $(e), r(void 0);
    }) : ($(e), r(void 0));
  });
}
function Gr(t) {
  return D(Lt, t, false);
}
function Sn(t) {
  return D(Yt | jt, t, true);
}
function Kr(t, e = 0) {
  return D(xt | e, t, true);
}
function Xr(t, e = [], n = []) {
  yn(e, n, (r) => {
    D(xt, () => t(...r.map(K)), true);
  });
}
function kn(t, e = 0) {
  var n = D(ht | e, t, true);
  return n;
}
function zr(t, e = true) {
  return D(q, t, true, e);
}
function Re(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ot, r = c;
    re(true), M(null);
    try {
      e.call(null);
    } finally {
      re(n), M(r);
    }
  }
}
function Oe(t, e = false) {
  var _a3;
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    (_a3 = n.ac) == null ? void 0 : _a3.abort(Ht);
    var r = n.next;
    (n.f & tt) !== 0 ? n.parent = null : $(n, e), n = r;
  }
}
function Cn(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & q) === 0 && $(e), e = n;
  }
}
function $(t, e = true) {
  var n = false;
  (e || (t.f & ce) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Nn(t.nodes_start, t.nodes_end), n = true), Oe(t, e && !n), Tt(t, 0), E(t, ut);
  var r = t.transitions;
  if (r !== null) for (const a of r) a.stop();
  Re(t);
  var s = t.parent;
  s !== null && s.first !== null && Ie(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Nn(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : j(t);
    t.remove(), t = n;
  }
}
function Ie(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Rn(t, e) {
  var n = [];
  De(t, n, true), On(n, () => {
    $(t), e && e();
  });
}
function On(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var s of t) s.out(r);
  } else e();
}
function De(t, e, n) {
  if ((t.f & U) === 0) {
    if (t.f ^= U, t.transitions !== null) for (const u of t.transitions) (u.is_global || n) && e.push(u);
    for (var r = t.first; r !== null; ) {
      var s = r.next, a = (r.f & fe) !== 0 || (r.f & q) !== 0;
      De(r, e, a ? n : false), r = s;
    }
  }
}
function Zr(t) {
  Pe(t, true);
}
function Pe(t, e) {
  if ((t.f & U) !== 0) {
    t.f ^= U, (t.f & w) === 0 && (E(t, O), B(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, s = (n.f & fe) !== 0 || (n.f & q) !== 0;
      Pe(n, s ? e : false), n = r;
    }
    if (t.transitions !== null) for (const a of t.transitions) (a.is_global || e) && a.in();
  }
}
let st = false;
function ne(t) {
  st = t;
}
let ot = false;
function re(t) {
  ot = t;
}
let c = null, I = false;
function M(t) {
  c = t;
}
let d = null;
function G(t) {
  d = t;
}
let F = null;
function Me(t) {
  c !== null && (F === null ? F = [t] : F.push(t));
}
let T = null, x = 0, N = null;
function In(t) {
  N = t;
}
let gt = 1, dt = 0, J = dt;
function ae(t) {
  J = t;
}
let V = false;
function Le() {
  return ++gt;
}
function Nt(t) {
  var _a3;
  var e = t.f;
  if ((e & O) !== 0) return true;
  if ((e & et) !== 0) {
    var n = t.deps, r = (e & A) !== 0;
    if (n !== null) {
      var s, a, u = (e & Et) !== 0, l = r && d !== null && !V, i = n.length;
      if ((u || l) && (d === null || (d.f & ut) === 0)) {
        var o = t, f = o.parent;
        for (s = 0; s < i; s++) a = n[s], (u || !((_a3 = a == null ? void 0 : a.reactions) == null ? void 0 : _a3.includes(o))) && (a.reactions ?? (a.reactions = [])).push(o);
        u && (o.f ^= Et), l && f !== null && (f.f & A) === 0 && (o.f ^= A);
      }
      for (s = 0; s < i; s++) if (a = n[s], Nt(a) && ge(a), a.wv > t.wv) return true;
    }
    (!r || d !== null && !V) && E(t, w);
  }
  return false;
}
function Fe(t, e, n = true) {
  var r = t.reactions;
  if (r !== null && !(F == null ? void 0 : F.includes(t))) for (var s = 0; s < r.length; s++) {
    var a = r[s];
    (a.f & S) !== 0 ? Fe(a, e, false) : e === a && (n ? E(a, O) : (a.f & w) !== 0 && E(a, et), B(a));
  }
}
function je(t) {
  var _a3;
  var e = T, n = x, r = N, s = c, a = V, u = F, l = b, i = I, o = J, f = t.f;
  T = null, x = 0, N = null, V = (f & A) !== 0 && (I || !st || c === null), c = (f & (q | tt)) === 0 ? t : null, F = null, mt(t.ctx), I = false, J = ++dt, t.ac !== null && (t.ac.abort(Ht), t.ac = null);
  try {
    t.f |= It;
    var _ = (0, t.fn)(), v = t.deps;
    if (T !== null) {
      var h;
      if (Tt(t, x), v !== null && x > 0) for (v.length = x + T.length, h = 0; h < T.length; h++) v[x + h] = T[h];
      else t.deps = v = T;
      if (!V || (f & S) !== 0 && t.reactions !== null) for (h = x; h < v.length; h++) ((_a3 = v[h]).reactions ?? (_a3.reactions = [])).push(t);
    } else v !== null && x < v.length && (Tt(t, x), v.length = x);
    if (pt() && N !== null && !I && v !== null && (t.f & (S | et | O)) === 0) for (h = 0; h < N.length; h++) Fe(N[h], t);
    return s !== null && s !== t && (dt++, N !== null && (r === null ? r = N : r.push(...N))), (t.f & X) !== 0 && (t.f ^= X), _;
  } catch (m) {
    return cn(m);
  } finally {
    t.f ^= It, T = e, x = n, N = r, c = s, V = a, F = u, mt(l), I = i, J = o;
  }
}
function Dn(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Be.call(n, t);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = e.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (e.f & S) !== 0 && (T === null || !T.includes(e)) && (E(e, et), (e.f & (A | Et)) === 0 && (e.f ^= Et), me(e), Tt(e, 0));
}
function Tt(t, e) {
  var n = t.deps;
  if (n !== null) for (var r = e; r < n.length; r++) Dn(t, n[r]);
}
function ct(t) {
  var e = t.f;
  if ((e & ut) === 0) {
    E(t, w);
    var n = d, r = st;
    d = t, st = true;
    try {
      (e & ht) !== 0 ? Cn(t) : Oe(t), Re(t);
      var s = je(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = gt;
      var a;
    } finally {
      st = r, d = n;
    }
  }
}
async function Jr() {
  await Promise.resolve(), En();
}
function Qr() {
  return nt.ensure().settled();
}
function K(t) {
  var e = t.f, n = (e & S) !== 0;
  if (c !== null && !I) {
    var r = d !== null && (d.f & ut) !== 0;
    if (!r && !(F == null ? void 0 : F.includes(t))) {
      var s = c.deps;
      if ((c.f & It) !== 0) t.rv < dt && (t.rv = dt, T === null && s !== null && s[x] === t ? x++ : T === null ? T = [t] : (!V || !T.includes(t)) && T.push(t));
      else {
        (c.deps ?? (c.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [c] : a.includes(c) || a.push(c);
      }
    }
  } else if (n && t.deps === null && t.effects === null) {
    var u = t, l = u.parent;
    l !== null && (l.f & A) === 0 && (u.f ^= A);
  }
  if (ot) {
    if (Z.has(t)) return Z.get(t);
    if (n) {
      u = t;
      var i = u.v;
      return ((u.f & w) !== 0 || qe(u)) && (i = Gt(u)), Z.set(u, i), i;
    }
  } else if (n) {
    if (u = t, it == null ? void 0 : it.has(u)) return it.get(u);
    Nt(u) && ge(u);
  }
  if ((t.f & X) !== 0) throw t.v;
  return t.v;
}
function qe(t) {
  if (t.v === g) return true;
  if (t.deps === null) return false;
  for (const e of t.deps) if (Z.has(e) || (e.f & S) !== 0 && qe(e)) return true;
  return false;
}
function Pn(t) {
  var e = I;
  try {
    return I = true, t();
  } finally {
    I = e;
  }
}
const Mn = -7169;
function E(t, e) {
  t.f = t.f & Mn | e;
}
function ta(t, e) {
  var n = {};
  for (var r in t) e.includes(r) || (n[r] = t[r]);
  return n;
}
function ea(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (z in t) Mt(t);
    else if (!Array.isArray(t)) for (let e in t) {
      const n = t[e];
      typeof n == "object" && n && z in n && Mt(n);
    }
  }
}
function Mt(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t) try {
      Mt(t[r], e);
    } catch {
    }
    const n = ue(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ue(n);
      for (let s in r) {
        const a = r[s].get;
        if (a) try {
          a.call(t);
        } catch {
        }
      }
    }
  }
}
function na(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Ln = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
function ra(t) {
  return Ln.includes(t);
}
const Fn = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
function aa(t) {
  return t = t.toLowerCase(), Fn[t] ?? t;
}
const jn = ["touchstart", "touchmove"];
function sa(t) {
  return jn.includes(t);
}
const qn = ["textarea", "script", "style", "title"];
function ia(t) {
  return qn.includes(t);
}
function ua(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = true, Ee(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function oa(t) {
  y && R(t) !== null && Tn(t);
}
let se = false;
function Yn() {
  se || (se = true, document.addEventListener("reset", (t) => {
    Promise.resolve().then(() => {
      var _a3;
      if (!t.defaultPrevented) for (const e of t.target.elements) (_a3 = e.__on_r) == null ? void 0 : _a3.call(e);
    });
  }, { capture: true }));
}
function Ye(t) {
  var e = c, n = d;
  M(null), G(null);
  try {
    return t();
  } finally {
    M(e), G(n);
  }
}
function la(t, e, n, r = n) {
  t.addEventListener(e, () => Ye(n));
  const s = t.__on_r;
  s ? t.__on_r = () => {
    s(), r(true);
  } : t.__on_r = () => r(true), Yn();
}
const Hn = /* @__PURE__ */ new Set(), Vn = /* @__PURE__ */ new Set();
function fa(t) {
  if (!y) return;
  t.removeAttribute("onload"), t.removeAttribute("onerror");
  const e = t.__e;
  e !== void 0 && (t.__e = void 0, queueMicrotask(() => {
    t.isConnected && t.dispatchEvent(e);
  }));
}
function He(t, e, n, r = {}) {
  function s(a) {
    if (r.capture || Bn.call(e, a), !a.cancelBubble) return Ye(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ee(() => {
    e.addEventListener(t, s, r);
  }) : e.addEventListener(t, s, r), s;
}
function ca(t, e, n, r = {}) {
  var s = He(e, t, n, r);
  return () => {
    t.removeEventListener(e, s, r);
  };
}
function _a(t, e, n, r, s) {
  var a = { capture: r, passive: s }, u = He(t, e, n, a);
  (e === document.body || e === window || e === document || e instanceof HTMLMediaElement) && An(() => {
    e.removeEventListener(t, u, a);
  });
}
function va(t) {
  for (var e = 0; e < t.length; e++) Hn.add(t[e]);
  for (var n of Vn) n(t);
}
function Bn(t) {
  var _a3;
  var e = this, n = e.ownerDocument, r = t.type, s = ((_a3 = t.composedPath) == null ? void 0 : _a3.call(t)) || [], a = s[0] || t.target, u = 0, l = t.__root;
  if (l) {
    var i = s.indexOf(l);
    if (i !== -1 && (e === document || e === window)) {
      t.__root = e;
      return;
    }
    var o = s.indexOf(e);
    if (o === -1) return;
    i <= o && (u = i);
  }
  if (a = s[u] || t.target, a !== e) {
    Ot(t, "currentTarget", { configurable: true, get() {
      return a || n;
    } });
    var f = c, _ = d;
    M(null), G(null);
    try {
      for (var v, h = []; a !== null; ) {
        var m = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var rt = a["__" + r];
          if (rt != null && (!a.disabled || t.target === a)) if (ie(rt)) {
            var [wt, ...yt] = rt;
            wt.apply(a, [t, ...yt]);
          } else rt.call(a, t);
        } catch (Y) {
          v ? h.push(Y) : v = Y;
        }
        if (t.cancelBubble || m === e || m === null) break;
        a = m;
      }
      if (v) {
        for (let Y of h) queueMicrotask(() => {
          throw Y;
        });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, M(f), G(_);
    }
  }
}
let k;
function da() {
  k = void 0;
}
function ha(t) {
  let e = null, n = y;
  var r;
  if (y) {
    for (e = p, k === void 0 && (k = R(document.head)); k !== null && (k.nodeType !== At || k.data !== ve); ) k = j(k);
    k === null ? Zt(false) : k = W(j(k));
  }
  y || (r = document.head.appendChild(Q()));
  try {
    kn(() => t(r), ce);
  } finally {
    n && (Zt(true), k = p, W(e));
  }
}
function Ve(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function P(t, e) {
  var n = d;
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
function pa(t, e) {
  var n = (e & _e) !== 0, r = (e & an) !== 0, s, a = !t.startsWith("<!>");
  return () => {
    if (y) return P(p, null), p;
    s === void 0 && (s = Ve(a ? t : "<!>" + t), n || (s = R(s)));
    var u = r || Ae ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var l = R(u), i = u.lastChild;
      P(l, i);
    } else P(u, u);
    return u;
  };
}
function Un(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), s = (e & _e) !== 0, a = `<${n}>${r ? t : "<!>" + t}</${n}>`, u;
  return () => {
    if (y) return P(p, null), p;
    if (!u) {
      var l = Ve(a), i = R(l);
      if (s) for (u = document.createDocumentFragment(); R(i); ) u.appendChild(R(i));
      else u = R(i);
    }
    var o = u.cloneNode(true);
    if (s) {
      var f = R(o), _ = o.lastChild;
      P(f, _);
    } else P(o, o);
    return o;
  };
}
function wa(t, e) {
  return Un(t, e, "svg");
}
function ya(t = "") {
  if (!y) {
    var e = Q(t + "");
    return P(e, e), e;
  }
  var n = p;
  return n.nodeType !== Vt && (n.before(n = Q()), W(n)), P(n, n), n;
}
function ba() {
  if (y) return P(p, null), p;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Q();
  return t.append(e, n), P(e, n), t;
}
function Ea(t, e) {
  if (y) {
    d.nodes_end = p, de();
    return;
  }
  t !== null && t.before(e);
}
function ma() {
  var _a3, _b;
  if (y && p && p.nodeType === At && ((_a3 = p.textContent) == null ? void 0 : _a3.startsWith("#"))) {
    const t = p.textContent.substring(1);
    return de(), t;
  }
  return (_b = window.__svelte ?? (window.__svelte = {})).uid ?? (_b.uid = 1), `c${window.__svelte.uid++}`;
}
export {
  gn as $,
  Dr as A,
  L as B,
  At as C,
  Gr as D,
  Kr as E,
  Pn as F,
  Ee as G,
  Bt as H,
  pt as I,
  la as J,
  C as K,
  kn as L,
  fe as M,
  Q as N,
  zr as O,
  Hr as P,
  Rn as Q,
  gr as R,
  z as S,
  sn as T,
  mr as U,
  Zt as V,
  g as W,
  Zr as X,
  pn as Y,
  un as Z,
  sr as _,
  qr as a,
  Qr as a$,
  ir as a0,
  Pt as a1,
  Kt as a2,
  ur as a3,
  Wn as a4,
  ie as a5,
  lr as a6,
  U as a7,
  $ as a8,
  or as a9,
  ot as aA,
  ut as aB,
  vr as aC,
  St as aD,
  cr as aE,
  fr as aF,
  $n as aG,
  Zn as aH,
  dr as aI,
  on as aJ,
  Fr as aK,
  ve as aL,
  nr as aM,
  Hn as aN,
  Vn as aO,
  $r as aP,
  Bn as aQ,
  sa as aR,
  da as aS,
  Xe as aT,
  er as aU,
  rr as aV,
  En as aW,
  Cr as aX,
  Ar as aY,
  kr as aZ,
  Sr as a_,
  De as aa,
  Tn as ab,
  On as ac,
  M as ad,
  c as ae,
  G as af,
  Wr as ag,
  Vr as ah,
  va as ai,
  H as aj,
  lt as ak,
  Ir as al,
  zn as am,
  b as an,
  Ur as ao,
  oe as ap,
  Br as aq,
  Kn as ar,
  ea as as,
  $t as at,
  xr as au,
  An as av,
  Ot as aw,
  ft as ax,
  ar as ay,
  _r as az,
  Ea as b,
  Jr as b0,
  tr as b1,
  pr as b2,
  ia as b3,
  wa as b4,
  ya as b5,
  Rt as b6,
  yr as b7,
  Lr as b8,
  yn as b9,
  Jn as ba,
  hr as bb,
  ue as bc,
  wr as bd,
  Ue as be,
  na as bf,
  He as bg,
  ua as bh,
  aa as bi,
  Or as bj,
  Yn as bk,
  ra as bl,
  ma as bm,
  J as bn,
  ca as bo,
  _a as bp,
  We as bq,
  Tr as br,
  Xn as bs,
  ee as bt,
  ta as bu,
  fa as bv,
  oa as bw,
  Mr as bx,
  Rr as c,
  jr as d,
  ba as e,
  pa as f,
  Gn as g,
  ha as h,
  y as i,
  de as j,
  d as k,
  Nn as l,
  p as m,
  Er as n,
  j as o,
  Nr as p,
  Ut as q,
  br as r,
  Yr as s,
  Xr as t,
  P as u,
  W as v,
  Ve as w,
  R as x,
  Pr as y,
  K as z
};
