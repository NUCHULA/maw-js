var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _t, _e, _t2, _e2, _a, _t3, _e3, _n, _r, _i, _s, _u, _N_instances, o_fn, c_fn, _t4, _e4, _t5, _e5, _n2, _r2, _i2, _pe_instances, s_fn, _t6, _e6, _n3, _r3, _t7, _e7, _n4, _r4, _be_instances, i_fn;
import { bo as h, ao as F, aq as O, F as I, aj as g, z as u, B as l, ak as b, al as z, ag as A } from "./CeQCqUQ_.js";
import { c as x } from "./D80btq7A.js";
const V = typeof window < "u" ? window : void 0;
function D(t) {
  let e = t.activeElement;
  for (; e == null ? void 0 : e.shadowRoot; ) {
    const r = e.shadowRoot.activeElement;
    if (r === e) break;
    e = r;
  }
  return e;
}
class J {
  constructor(e, r) {
    __privateAdd(this, _t);
    __privateAdd(this, _e);
    __privateSet(this, _t, e), __privateSet(this, _e, x(r));
  }
  get current() {
    return __privateGet(this, _e).call(this), __privateGet(this, _t).call(this);
  }
}
_t = new WeakMap();
_e = new WeakMap();
const Q = /\(.+\)/, K = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class U extends J {
  constructor(e, r) {
    let n = Q.test(e) || e.split(/[\s,]+/).some((i) => K.has(i.trim())) ? e : `(${e})`;
    const s = window.matchMedia(n);
    super(() => s.matches, (i) => h(s, "change", i));
  }
}
let X = (_a = class {
  constructor(e = {}) {
    __privateAdd(this, _t2);
    __privateAdd(this, _e2);
    const { window: r = V, document: n = r == null ? void 0 : r.document } = e;
    r !== void 0 && (__privateSet(this, _t2, n), __privateSet(this, _e2, x((s) => {
      const i = h(r, "focusin", s), o = h(r, "focusout", s);
      return () => {
        i(), o();
      };
    })));
  }
  get current() {
    var _a2;
    return (_a2 = __privateGet(this, _e2)) == null ? void 0 : _a2.call(this), __privateGet(this, _t2) ? D(__privateGet(this, _t2)) : null;
  }
}, _t2 = new WeakMap(), _e2 = new WeakMap(), _a);
new X();
function Z(t, e) {
  switch (t) {
    case "post":
      O(e);
      break;
    case "pre":
      F(e);
      break;
  }
}
function W(t, e, r, n = {}) {
  const { lazy: s = false } = n;
  let i = !s, o = Array.isArray(t) ? [] : void 0;
  Z(e, () => {
    const a = Array.isArray(t) ? t.map((w) => w()) : t();
    if (!i) {
      i = true, o = a;
      return;
    }
    const d = I(() => r(a, o));
    return o = a, d;
  });
}
function T(t, e, r) {
  W(t, "post", e, r);
}
function G(t, e, r) {
  W(t, "pre", e, r);
}
T.pre = G;
function H(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class N {
  constructor(e, r, n = {}) {
    __privateAdd(this, _N_instances);
    __privateAdd(this, _t3);
    __privateAdd(this, _e3);
    __privateAdd(this, _n);
    __privateAdd(this, _r);
    __privateAdd(this, _i);
    __privateAdd(this, _s, g(0));
    __privateAdd(this, _u, (e) => {
      e.key !== __privateGet(this, _e3) || e.newValue === null || (__privateSet(this, _t3, __privateMethod(this, _N_instances, o_fn).call(this, e.newValue)), l(__privateGet(this, _s), u(__privateGet(this, _s)) + 1));
    });
    const { storage: s = "local", serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse }, syncTabs: o = true, window: a = V } = n;
    if (__privateSet(this, _t3, r), __privateSet(this, _e3, e), __privateSet(this, _n, i), a === void 0) return;
    const d = H(s, a);
    __privateSet(this, _r, d);
    const w = d.getItem(e);
    w !== null ? __privateSet(this, _t3, __privateMethod(this, _N_instances, o_fn).call(this, w)) : __privateMethod(this, _N_instances, c_fn).call(this, r), o && s === "local" && __privateSet(this, _i, x(() => h(a, "storage", __privateGet(this, _u))));
  }
  get current() {
    var _a2, _b;
    (_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.call(this), u(__privateGet(this, _s));
    const e = __privateMethod(this, _N_instances, o_fn).call(this, (_b = __privateGet(this, _r)) == null ? void 0 : _b.getItem(__privateGet(this, _e3))) ?? __privateGet(this, _t3), r = /* @__PURE__ */ new WeakMap(), n = (s) => {
      if (s === null || (s == null ? void 0 : s.constructor.name) === "Date" || typeof s != "object") return s;
      let i = r.get(s);
      return i || (i = new Proxy(s, { get: (o, a) => (u(__privateGet(this, _s)), n(Reflect.get(o, a))), set: (o, a, d) => (l(__privateGet(this, _s), u(__privateGet(this, _s)) + 1), Reflect.set(o, a, d), __privateMethod(this, _N_instances, c_fn).call(this, e), true) }), r.set(s, i)), i;
    };
    return n(e);
  }
  set current(e) {
    __privateMethod(this, _N_instances, c_fn).call(this, e), l(__privateGet(this, _s), u(__privateGet(this, _s)) + 1);
  }
}
_t3 = new WeakMap();
_e3 = new WeakMap();
_n = new WeakMap();
_r = new WeakMap();
_i = new WeakMap();
_s = new WeakMap();
_u = new WeakMap();
_N_instances = new WeakSet();
o_fn = function(e) {
  try {
    return __privateGet(this, _n).deserialize(e);
  } catch (r) {
    console.error(`Error when parsing "${e}" from persisted store "${__privateGet(this, _e3)}"`, r);
    return;
  }
};
c_fn = function(e) {
  var _a2;
  try {
    e != null && ((_a2 = __privateGet(this, _r)) == null ? void 0 : _a2.setItem(__privateGet(this, _e3), __privateGet(this, _n).serialize(e)));
  } catch (r) {
    console.error(`Error when writing value from persisted store "${__privateGet(this, _e3)}" to ${__privateGet(this, _r)}`, r);
  }
};
function v(t) {
  return t.filter((e) => e.length > 0);
}
const R = { getItem: (t) => null, setItem: (t, e) => {
} }, p = typeof document < "u";
function Y(t) {
  return typeof t == "function";
}
function ee(t) {
  return t !== null && typeof t == "object";
}
const m = Symbol("box"), _ = Symbol("is-writable");
function te(t) {
  return ee(t) && m in t;
}
function re(t) {
  return c.isBox(t) && _ in t;
}
function c(t) {
  let e = g(b(t));
  return { [m]: true, [_]: true, get current() {
    return u(e);
  }, set current(r) {
    l(e, r, true);
  } };
}
function ne(t, e) {
  const r = z(t);
  return e ? { [m]: true, [_]: true, get current() {
    return u(r);
  }, set current(n) {
    e(n);
  } } : { [m]: true, get current() {
    return t();
  } };
}
function se(t) {
  return c.isBox(t) ? t : Y(t) ? c.with(t) : c(t);
}
function ie(t) {
  return Object.entries(t).reduce((e, [r, n]) => c.isBox(n) ? (c.isWritableBox(n) ? Object.defineProperty(e, r, { get() {
    return n.current;
  }, set(s) {
    n.current = s;
  } }) : Object.defineProperty(e, r, { get() {
    return n.current;
  } }), e) : Object.assign(e, { [r]: n }), {});
}
function oe(t) {
  return c.isWritableBox(t) ? { [m]: true, get current() {
    return t.current;
  } } : t;
}
c.from = se;
c.with = ne;
c.flatten = ie;
c.readonly = oe;
c.isBox = te;
c.isWritableBox = re;
function ce(t, e) {
  const r = RegExp(t, "g");
  return (n) => {
    if (typeof n != "string") throw new TypeError(`expected an argument of type string, but got ${typeof n}`);
    return n.match(r) ? n.replace(r, e) : n;
  };
}
const ue = ce(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function ae(t) {
  if (!t || typeof t != "object" || Array.isArray(t)) throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${ue(e)}: ${t[e]};`).join(`
`);
}
function le(t = {}) {
  return ae(t).replace(`
`, " ");
}
const de = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", transform: "translateX(-100%)" };
le(de);
const he = typeof window < "u" ? window : void 0;
function fe(t) {
  let e = t.activeElement;
  for (; e == null ? void 0 : e.shadowRoot; ) {
    const r = e.shadowRoot.activeElement;
    if (r === e) break;
    e = r;
  }
  return e;
}
class me {
  constructor(e = {}) {
    __privateAdd(this, _t4);
    __privateAdd(this, _e4);
    const { window: r = he, document: n = r == null ? void 0 : r.document } = e;
    r !== void 0 && (__privateSet(this, _t4, n), __privateSet(this, _e4, x((s) => {
      const i = h(r, "focusin", s), o = h(r, "focusout", s);
      return () => {
        i(), o();
      };
    })));
  }
  get current() {
    var _a2;
    return (_a2 = __privateGet(this, _e4)) == null ? void 0 : _a2.call(this), __privateGet(this, _t4) ? fe(__privateGet(this, _t4)) : null;
  }
}
_t4 = new WeakMap();
_e4 = new WeakMap();
new me();
const S = c("mode-watcher-mode"), E = c("mode-watcher-theme"), ge = ["dark", "light", "system"];
function M(t) {
  return typeof t != "string" ? false : ge.includes(t);
}
class pe {
  constructor() {
    __privateAdd(this, _pe_instances);
    __privateAdd(this, _t5, "system");
    __privateAdd(this, _e5, p ? localStorage : R);
    __privateAdd(this, _n2, __privateGet(this, _e5).getItem(S.current));
    __privateAdd(this, _r2, M(__privateGet(this, _n2)) ? __privateGet(this, _n2) : __privateGet(this, _t5));
    __privateAdd(this, _i2, g(b(__privateMethod(this, _pe_instances, s_fn).call(this))));
    A(() => T.pre(() => S.current, (e, r) => {
      const n = u(__privateGet(this, _i2)).current;
      l(__privateGet(this, _i2), __privateMethod(this, _pe_instances, s_fn).call(this, n), true), r && localStorage.removeItem(r);
    }));
  }
  get current() {
    return u(__privateGet(this, _i2)).current;
  }
  set current(e) {
    u(__privateGet(this, _i2)).current = e;
  }
}
_t5 = new WeakMap();
_e5 = new WeakMap();
_n2 = new WeakMap();
_r2 = new WeakMap();
_i2 = new WeakMap();
_pe_instances = new WeakSet();
s_fn = function(e = __privateGet(this, _r2)) {
  return new N(S.current, e, { serializer: { serialize: (r) => r, deserialize: (r) => M(r) ? r : __privateGet(this, _t5) } });
};
class we {
  constructor() {
    __privateAdd(this, _t6);
    __privateAdd(this, _e6, true);
    __privateAdd(this, _n3, g(b(__privateGet(this, _t6))));
    __privateAdd(this, _r3, typeof window < "u" && typeof window.matchMedia == "function" ? new U("prefers-color-scheme: light") : { current: false });
    A(() => {
      F(() => {
        __privateGet(this, _e6) && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  query() {
    p && l(__privateGet(this, _n3), __privateGet(this, _r3).current ? "light" : "dark", true);
  }
  tracking(e) {
    __privateSet(this, _e6, e);
  }
  get current() {
    return u(__privateGet(this, _n3));
  }
}
_t6 = new WeakMap();
_e6 = new WeakMap();
_n3 = new WeakMap();
_r3 = new WeakMap();
const C = new pe(), ye = new we();
class be {
  constructor() {
    __privateAdd(this, _be_instances);
    __privateAdd(this, _t7, p ? localStorage : R);
    __privateAdd(this, _e7, __privateGet(this, _t7).getItem(E.current));
    __privateAdd(this, _n4, __privateGet(this, _e7) === null || __privateGet(this, _e7) === void 0 ? "" : __privateGet(this, _e7));
    __privateAdd(this, _r4, g(b(__privateMethod(this, _be_instances, i_fn).call(this))));
    A(() => T.pre(() => E.current, (e, r) => {
      const n = u(__privateGet(this, _r4)).current;
      l(__privateGet(this, _r4), __privateMethod(this, _be_instances, i_fn).call(this, n), true), r && localStorage.removeItem(r);
    }));
  }
  get current() {
    return u(__privateGet(this, _r4)).current;
  }
  set current(e) {
    u(__privateGet(this, _r4)).current = e;
  }
}
_t7 = new WeakMap();
_e7 = new WeakMap();
_n4 = new WeakMap();
_r4 = new WeakMap();
_be_instances = new WeakSet();
i_fn = function(e = __privateGet(this, _n4)) {
  return new N(E.current, e, { serializer: { serialize: (r) => typeof r != "string" ? "" : r, deserialize: (r) => r } });
};
const k = new be();
let B, $, P = false, f = null;
function xe() {
  return f || (f = document.createElement("style"), f.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), f);
}
function q(t, e = false) {
  if (typeof document > "u") return;
  if (!P) {
    P = true, t();
    return;
  }
  if (typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(B), clearTimeout($);
  const n = xe(), s = () => document.head.appendChild(n), i = () => {
    n.parentNode && document.head.removeChild(n);
  };
  function o() {
    t(), window.requestAnimationFrame(i);
  }
  if (typeof window.requestAnimationFrame < "u") {
    s(), e ? o() : window.requestAnimationFrame(() => {
      o();
    });
    return;
  }
  s(), B = window.setTimeout(() => {
    t(), $ = window.setTimeout(i, 16);
  }, 16);
}
const y = c(void 0), j = c(true), L = c(false), Se = c([]), Ee = c([]);
function ke() {
  const t = z(() => {
    if (!p) return;
    const e = C.current === "system" ? ye.current : C.current, r = v(Se.current), n = v(Ee.current);
    function s() {
      const i = document.documentElement, o = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "light", o && y.current && o.setAttribute("content", y.current.light)) : (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "dark", o && y.current && o.setAttribute("content", y.current.dark));
    }
    return j.current ? q(s, L.current) : s(), e;
  });
  return { get current() {
    return u(t);
  } };
}
function ze() {
  const t = z(() => {
    if (k.current, !p) return;
    function e() {
      document.documentElement.setAttribute("data-theme", k.current);
    }
    return j.current ? q(e, I(() => L.current)) : e(), k.current;
  });
  return { get current() {
    return u(t);
  } };
}
const ve = ke(), Me = ze();
export {
  U as M,
  j as a,
  y as b,
  k as c,
  Se as d,
  ve as e,
  Me as f,
  ye as g,
  M as i,
  Ee as l,
  S as m,
  L as s,
  E as t,
  C as u
};
