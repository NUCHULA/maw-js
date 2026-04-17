var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, _b, _e, _t2, _n2, _r, _a2, _o, _s, _i, _c, _e2, _d, _e3, _e4;
import { o as Fe, c as yt } from "./DMf1efOI.js";
import { H as ce, S as Re, R as Ie } from "./CYgJF_JY.js";
import { w as Ue } from "./CjsEYB_8.js";
import { aj as T, z as x, B as P, F as wt } from "./CeQCqUQ_.js";
new URL("sveltekit-internal://");
function vt(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e;
}
function bt(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function kt(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function ye({ href: e }) {
  return e.split("#")[0];
}
function At(e, t, n, r = false) {
  const a = new URL(e);
  Object.defineProperty(a, "searchParams", { value: new Proxy(a.searchParams, { get(i, o) {
    if (o === "get" || o === "getAll" || o === "has") return (f) => (n(f), i[o](f));
    t();
    const c = Reflect.get(i, o);
    return typeof c == "function" ? c.bind(i) : c;
  } }), enumerable: true, configurable: true });
  const s = ["href", "pathname", "search", "toString", "toJSON"];
  r && s.push("hash");
  for (const i of s) Object.defineProperty(a, i, { get() {
    return t(), e[i];
  }, enumerable: true, configurable: true });
  return a;
}
function St(...e) {
  let t = 5381;
  for (const n of e) if (typeof n == "string") {
    let r = n.length;
    for (; r; ) t = t * 33 ^ n.charCodeAt(--r);
  } else if (ArrayBuffer.isView(n)) {
    const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let a = r.length;
    for (; a; ) t = t * 33 ^ r[--a];
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
function Et(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n.buffer;
}
const Rt = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && H.delete(Le(e)), Rt(e, t));
const H = /* @__PURE__ */ new Map();
function It(e, t) {
  const n = Le(e, t), r = document.querySelector(n);
  if (r == null ? void 0 : r.textContent) {
    let { body: a, ...s } = JSON.parse(r.textContent);
    const i = r.getAttribute("data-ttl");
    return i && H.set(n, { body: a, init: s, ttl: 1e3 * Number(i) }), r.getAttribute("data-b64") !== null && (a = Et(a)), Promise.resolve(new Response(a, s));
  }
  return window.fetch(e, t);
}
function Ut(e, t, n) {
  if (H.size > 0) {
    const r = Le(e, n), a = H.get(r);
    if (a) {
      if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(a.body, a.init);
      H.delete(r);
    }
  }
  return window.fetch(t, n);
}
function Le(e, t) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
  if ((t == null ? void 0 : t.headers) || (t == null ? void 0 : t.body)) {
    const a = [];
    t.headers && a.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && a.push(t.body), r += `[data-hash="${St(...a)}"]`;
  }
  return r;
}
const Lt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Tt(e) {
  const t = [];
  return { pattern: e === "/" ? /^\/$/ : new RegExp(`^${Pt(e).map((r) => {
    const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
    if (a) return t.push({ name: a[1], matcher: a[2], optional: false, rest: true, chained: true }), "(?:/(.*))?";
    const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
    if (s) return t.push({ name: s[1], matcher: s[2], optional: true, rest: false, chained: true }), "(?:/([^/]+))?";
    if (!r) return;
    const i = r.split(/\[(.+?)\](?!\])/);
    return "/" + i.map((c, f) => {
      if (f % 2) {
        if (c.startsWith("x+")) return we(String.fromCharCode(parseInt(c.slice(2), 16)));
        if (c.startsWith("u+")) return we(String.fromCharCode(...c.slice(2).split("-").map((_) => parseInt(_, 16))));
        const d = Lt.exec(c), [, h, u, l, p] = d;
        return t.push({ name: l, matcher: p, optional: !!h, rest: !!u, chained: u ? f === 1 && i[0] === "" : false }), u ? "(.*?)" : h ? "([^/]*)?" : "([^/]+?)";
      }
      return we(c);
    }).join("");
  }).join("")}/?$`), params: t };
}
function xt(e) {
  return !/^\([^)]+\)$/.test(e);
}
function Pt(e) {
  return e.slice(1).split("/").filter(xt);
}
function Ct(e, t, n) {
  const r = {}, a = e.slice(1), s = a.filter((o) => o !== void 0);
  let i = 0;
  for (let o = 0; o < t.length; o += 1) {
    const c = t[o];
    let f = a[o - i];
    if (c.chained && c.rest && i && (f = a.slice(o - i, o + 1).filter((d) => d).join("/"), i = 0), f === void 0) {
      c.rest && (r[c.name] = "");
      continue;
    }
    if (!c.matcher || n[c.matcher](f)) {
      r[c.name] = f;
      const d = t[o + 1], h = a[o + 1];
      d && !d.rest && d.optional && h && c.chained && (i = 0), !d && !h && Object.keys(r).length === s.length && (i = 0);
      continue;
    }
    if (c.optional && c.chained) {
      i++;
      continue;
    }
    return;
  }
  if (!i) return r;
}
function we(e) {
  return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function Ot({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
  const a = new Set(t);
  return Object.entries(n).map(([o, [c, f, d]]) => {
    const { pattern: h, params: u } = Tt(o), l = { id: o, exec: (p) => {
      const _ = h.exec(p);
      if (_) return Ct(_, u, r);
    }, errors: [1, ...d || []].map((p) => e[p]), layouts: [0, ...f || []].map(i), leaf: s(c) };
    return l.errors.length = l.layouts.length = Math.max(l.errors.length, l.layouts.length), l;
  });
  function s(o) {
    const c = o < 0;
    return c && (o = ~o), [c, e[o]];
  }
  function i(o) {
    return o === void 0 ? o : [a.has(o), e[o]];
  }
}
function Je(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e]);
  } catch {
  }
}
function Ve(e, t, n = JSON.stringify) {
  const r = n(t);
  try {
    sessionStorage[e] = r;
  } catch {
  }
}
const U = ((_a = globalThis.__sveltekit_1iguo0t) == null ? void 0 : _a.base) ?? "", Nt = ((_b = globalThis.__sveltekit_1iguo0t) == null ? void 0 : _b.assets) ?? U, jt = "1776163705595", Xe = "sveltekit:snapshot", Ze = "sveltekit:scroll", Te = "sveltekit:states", Qe = "sveltekit:pageurl", D = "sveltekit:history", M = "sveltekit:navigation", j = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 }, le = location.origin;
function xe(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL;
  }
  return new URL(e, t);
}
function fe() {
  return { x: pageXOffset, y: pageYOffset };
}
function F(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const Me = { ...j, "": j.hover };
function et(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function tt(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = et(e);
  }
}
function ke(e, t, n) {
  let r;
  try {
    if (r = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && r.hash.match(/^#[^/]/)) {
      const o = location.hash.split("#")[1] || "/";
      r.hash = `#${o}${r.hash}`;
    }
  } catch {
  }
  const a = e instanceof SVGAElement ? e.target.baseVal : e.target, s = !r || !!a || ue(r, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"), i = (r == null ? void 0 : r.origin) === le && e.hasAttribute("download");
  return { url: r, external: s, target: a, download: i };
}
function ee(e) {
  let t = null, n = null, r = null, a = null, s = null, i = null, o = e;
  for (; o && o !== document.documentElement; ) r === null && (r = F(o, "preload-code")), a === null && (a = F(o, "preload-data")), t === null && (t = F(o, "keepfocus")), n === null && (n = F(o, "noscroll")), s === null && (s = F(o, "reload")), i === null && (i = F(o, "replacestate")), o = et(o);
  function c(f) {
    switch (f) {
      case "":
      case "true":
        return true;
      case "off":
      case "false":
        return false;
      default:
        return;
    }
  }
  return { preload_code: Me[r ?? "off"], preload_data: Me[a ?? "off"], keepfocus: c(t), noscroll: c(n), reload: c(s), replace_state: c(i) };
}
function qe(e) {
  const t = Ue(e);
  let n = true;
  function r() {
    n = true, t.update((i) => i);
  }
  function a(i) {
    n = false, t.set(i);
  }
  function s(i) {
    let o;
    return t.subscribe((c) => {
      (o === void 0 || n && c !== o) && i(o = c);
    });
  }
  return { notify: r, set: a, subscribe: s };
}
const nt = { v: () => {
} };
function $t() {
  const { set: e, subscribe: t } = Ue(false);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const a = await fetch(`${Nt}/_app/version.json`, { headers: { pragma: "no-cache", "cache-control": "no-cache" } });
      if (!a.ok) return false;
      const i = (await a.json()).version !== jt;
      return i && (e(true), nt.v(), clearTimeout(n)), i;
    } catch {
      return false;
    }
  }
  return { subscribe: t, check: r };
}
function ue(e, t, n) {
  return e.origin !== le || !e.pathname.startsWith(t) ? true : n ? !(e.pathname === t + "/" || e.pathname === t + "/index.html" || e.protocol === "file:" && e.pathname.replace(/\/[^/]+\.html?$/, "") === t) : false;
}
function Sn(e) {
}
function Ge(e) {
  const t = Bt(e), n = new ArrayBuffer(t.length), r = new DataView(n);
  for (let a = 0; a < n.byteLength; a++) r.setUint8(a, t.charCodeAt(a));
  return n;
}
const Dt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Bt(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
  let t = "", n = 0, r = 0;
  for (let a = 0; a < e.length; a++) n <<= 6, n |= Dt.indexOf(e[a]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
  return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
}
const Ft = -1, Vt = -2, Mt = -3, qt = -4, Gt = -5, Ht = -6;
function Kt(e, t) {
  if (typeof e == "number") return a(e, true);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const n = e, r = Array(n.length);
  function a(s, i = false) {
    if (s === Ft) return;
    if (s === Mt) return NaN;
    if (s === qt) return 1 / 0;
    if (s === Gt) return -1 / 0;
    if (s === Ht) return -0;
    if (i) throw new Error("Invalid input");
    if (s in r) return r[s];
    const o = n[s];
    if (!o || typeof o != "object") r[s] = o;
    else if (Array.isArray(o)) if (typeof o[0] == "string") {
      const c = o[0], f = t == null ? void 0 : t[c];
      if (f) return r[s] = f(a(o[1]));
      switch (c) {
        case "Date":
          r[s] = new Date(o[1]);
          break;
        case "Set":
          const d = /* @__PURE__ */ new Set();
          r[s] = d;
          for (let l = 1; l < o.length; l += 1) d.add(a(o[l]));
          break;
        case "Map":
          const h = /* @__PURE__ */ new Map();
          r[s] = h;
          for (let l = 1; l < o.length; l += 2) h.set(a(o[l]), a(o[l + 1]));
          break;
        case "RegExp":
          r[s] = new RegExp(o[1], o[2]);
          break;
        case "Object":
          r[s] = Object(o[1]);
          break;
        case "BigInt":
          r[s] = BigInt(o[1]);
          break;
        case "null":
          const u = /* @__PURE__ */ Object.create(null);
          r[s] = u;
          for (let l = 1; l < o.length; l += 2) u[o[l]] = a(o[l + 1]);
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const l = globalThis[c], p = o[1], _ = Ge(p), m = new l(_);
          r[s] = m;
          break;
        }
        case "ArrayBuffer": {
          const l = o[1], p = Ge(l);
          r[s] = p;
          break;
        }
        default:
          throw new Error(`Unknown type ${c}`);
      }
    } else {
      const c = new Array(o.length);
      r[s] = c;
      for (let f = 0; f < o.length; f += 1) {
        const d = o[f];
        d !== Vt && (c[f] = a(d));
      }
    }
    else {
      const c = {};
      r[s] = c;
      for (const f in o) {
        const d = o[f];
        c[f] = a(d);
      }
    }
    return r[s];
  }
  return a(0);
}
const rt = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...rt];
const Wt = /* @__PURE__ */ new Set([...rt]);
[...Wt];
function Yt(e) {
  return e.filter((t) => t != null);
}
const zt = "x-sveltekit-invalidated", Jt = "x-sveltekit-trailing-slash";
function te(e) {
  return e instanceof ce || e instanceof Re ? e.status : 500;
}
function Xt(e) {
  return e instanceof Re ? e.text : "Internal Error";
}
let A, z, ve;
const Zt = Fe.toString().includes("$$") || /function \w+\(\) \{\}/.test(Fe.toString());
Zt ? (A = { data: {}, form: null, error: null, params: {}, route: { id: null }, state: {}, status: -1, url: new URL("https://example.com") }, z = { current: null }, ve = { current: false }) : (A = new (_c = class {
  constructor() {
    __privateAdd(this, _e, T({}));
    __privateAdd(this, _t2, T(null));
    __privateAdd(this, _n2, T(null));
    __privateAdd(this, _r, T({}));
    __privateAdd(this, _a2, T({ id: null }));
    __privateAdd(this, _o, T({}));
    __privateAdd(this, _s, T(-1));
    __privateAdd(this, _i, T(new URL("https://example.com")));
  }
  get data() {
    return x(__privateGet(this, _e));
  }
  set data(t) {
    P(__privateGet(this, _e), t);
  }
  get form() {
    return x(__privateGet(this, _t2));
  }
  set form(t) {
    P(__privateGet(this, _t2), t);
  }
  get error() {
    return x(__privateGet(this, _n2));
  }
  set error(t) {
    P(__privateGet(this, _n2), t);
  }
  get params() {
    return x(__privateGet(this, _r));
  }
  set params(t) {
    P(__privateGet(this, _r), t);
  }
  get route() {
    return x(__privateGet(this, _a2));
  }
  set route(t) {
    P(__privateGet(this, _a2), t);
  }
  get state() {
    return x(__privateGet(this, _o));
  }
  set state(t) {
    P(__privateGet(this, _o), t);
  }
  get status() {
    return x(__privateGet(this, _s));
  }
  set status(t) {
    P(__privateGet(this, _s), t);
  }
  get url() {
    return x(__privateGet(this, _i));
  }
  set url(t) {
    P(__privateGet(this, _i), t);
  }
}, _e = new WeakMap(), _t2 = new WeakMap(), _n2 = new WeakMap(), _r = new WeakMap(), _a2 = new WeakMap(), _o = new WeakMap(), _s = new WeakMap(), _i = new WeakMap(), _c)(), z = new (_d = class {
  constructor() {
    __privateAdd(this, _e2, T(null));
  }
  get current() {
    return x(__privateGet(this, _e2));
  }
  set current(t) {
    P(__privateGet(this, _e2), t);
  }
}, _e2 = new WeakMap(), _d)(), ve = new (_e4 = class {
  constructor() {
    __privateAdd(this, _e3, T(false));
  }
  get current() {
    return x(__privateGet(this, _e3));
  }
  set current(t) {
    P(__privateGet(this, _e3), t);
  }
}, _e3 = new WeakMap(), _e4)(), nt.v = () => ve.current = true);
function Qt(e) {
  Object.assign(A, e);
}
const en = "/__data.json", tn = ".html__data.json";
function nn(e) {
  return e.endsWith(".html") ? e.replace(/\.html$/, tn) : e.replace(/\/$/, "") + en;
}
const { tick: rn } = yt, an = wt ?? ((e) => e()), on = /* @__PURE__ */ new Set(["icon", "shortcut icon", "apple-touch-icon"]), B = Je(Ze) ?? {}, J = Je(Xe) ?? {}, N = { url: qe({}), page: qe({}), navigating: Ue(null), updated: $t() };
function de(e) {
  B[e] = fe();
}
function at(e, t) {
  let n = e + 1;
  for (; B[n]; ) delete B[n], n += 1;
  for (n = t + 1; J[n]; ) delete J[n], n += 1;
}
function q(e) {
  return location.href = e.href, new Promise(() => {
  });
}
async function ot() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(U || "/");
    e && await e.update();
  }
}
function He() {
}
let Pe, Ae, ne, C, Se, v;
const re = [], ae = [];
let O = null;
const Q = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Set(), sn = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set();
let w = { branch: [], error: null, url: null }, Ce = false, oe = false, Ke = true, X = false, G = false, Oe = false, Ne = false, je, b, E, $;
const W = /* @__PURE__ */ new Set();
async function Un(e, t, n) {
  var _a3, _b2, _c2, _d2;
  document.URL !== location.href && (location.href = location.href), v = e, await ((_b2 = (_a3 = e.hooks).init) == null ? void 0 : _b2.call(_a3)), Pe = Ot(e), C = document.documentElement, Se = t, Ae = e.nodes[0], ne = e.nodes[1], Ae(), ne(), b = (_c2 = history.state) == null ? void 0 : _c2[D], E = (_d2 = history.state) == null ? void 0 : _d2[M], b || (b = E = Date.now(), history.replaceState({ ...history.state, [D]: b, [M]: E }, ""));
  const r = B[b];
  function a() {
    r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y));
  }
  n ? (a(), await _n(Se, n)) : (await Y({ type: "enter", url: xe(v.hash ? wn(new URL(location.href)) : location.href), replace_state: true }), a()), mn();
}
function cn() {
  re.length = 0, Ne = false;
}
function it(e) {
  ae.some((t) => t == null ? void 0 : t.snapshot) && (J[e] = ae.map((t) => {
    var _a3;
    return (_a3 = t == null ? void 0 : t.snapshot) == null ? void 0 : _a3.capture();
  }));
}
function ct(e) {
  var _a3;
  (_a3 = J[e]) == null ? void 0 : _a3.forEach((t, n) => {
    var _a4, _b2;
    (_b2 = (_a4 = ae[n]) == null ? void 0 : _a4.snapshot) == null ? void 0 : _b2.restore(t);
  });
}
function We() {
  de(b), Ve(Ze, B), it(E), Ve(Xe, J);
}
async function lt(e, t, n, r) {
  return Y({ type: "goto", url: xe(e), keepfocus: t.keepFocus, noscroll: t.noScroll, replace_state: t.replaceState, state: t.state, redirect_count: n, nav_token: r, accept: () => {
    t.invalidateAll && (Ne = true), t.invalidate && t.invalidate.forEach(gn);
  } });
}
async function ln(e) {
  if (e.id !== (O == null ? void 0 : O.id)) {
    const t = {};
    W.add(t), O = { id: e.id, token: t, promise: dt({ ...e, preload: t }).then((n) => (W.delete(t), n.type === "loaded" && n.state.error && (O = null), n)) };
  }
  return O.promise;
}
async function be(e) {
  var _a3;
  const t = (_a3 = await pe(e, false)) == null ? void 0 : _a3.route;
  t && await Promise.all([...t.layouts, t.leaf].map((n) => n == null ? void 0 : n[1]()));
}
function ft(e, t, n) {
  var _a3;
  w = e.state;
  const r = document.querySelector("style[data-sveltekit]");
  if (r && r.remove(), Object.assign(A, e.props.page), je = new v.root({ target: t, props: { ...e.props, stores: N, components: ae }, hydrate: n, sync: false }), ct(E), n) {
    const a = { from: null, to: { params: w.params, route: { id: ((_a3 = w.route) == null ? void 0 : _a3.id) ?? null }, url: new URL(location.href) }, willUnload: false, type: "enter", complete: Promise.resolve() };
    K.forEach((s) => s(a));
  }
  oe = true;
}
function se({ url: e, params: t, branch: n, status: r, error: a, route: s, form: i }) {
  let o = "never";
  if (U && (e.pathname === U || e.pathname === U + "/")) o = "always";
  else for (const l of n) (l == null ? void 0 : l.slash) !== void 0 && (o = l.slash);
  e.pathname = vt(e.pathname, o), e.search = e.search;
  const c = { type: "loaded", state: { url: e, params: t, branch: n, error: a, route: s }, props: { constructors: Yt(n).map((l) => l.node.component), page: ge(A) } };
  i !== void 0 && (c.props.form = i);
  let f = {}, d = !A, h = 0;
  for (let l = 0; l < Math.max(n.length, w.branch.length); l += 1) {
    const p = n[l], _ = w.branch[l];
    (p == null ? void 0 : p.data) !== (_ == null ? void 0 : _.data) && (d = true), p && (f = { ...f, ...p.data }, d && (c.props[`data_${h}`] = f), h += 1);
  }
  return (!w.url || e.href !== w.url.href || w.error !== a || i !== void 0 && i !== A.form || d) && (c.props.page = { error: a, params: t, route: { id: (s == null ? void 0 : s.id) ?? null }, state: {}, status: r, url: new URL(e), form: i ?? null, data: d ? f : A.data }), c;
}
async function $e({ loader: e, parent: t, url: n, params: r, route: a, server_data_node: s }) {
  var _a3, _b2, _c2;
  let i = null, o = true;
  const c = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false, search_params: /* @__PURE__ */ new Set() }, f = await e();
  if ((_a3 = f.universal) == null ? void 0 : _a3.load) {
    let d = function(...u) {
      for (const l of u) {
        const { href: p } = new URL(l, n);
        c.dependencies.add(p);
      }
    };
    const h = { route: new Proxy(a, { get: (u, l) => (o && (c.route = true), u[l]) }), params: new Proxy(r, { get: (u, l) => (o && c.params.add(l), u[l]) }), data: (s == null ? void 0 : s.data) ?? null, url: At(n, () => {
      o && (c.url = true);
    }, (u) => {
      o && c.search_params.add(u);
    }, v.hash), async fetch(u, l) {
      u instanceof Request && (l = { body: u.method === "GET" || u.method === "HEAD" ? void 0 : await u.blob(), cache: u.cache, credentials: u.credentials, headers: [...u.headers].length > 0 ? u == null ? void 0 : u.headers : void 0, integrity: u.integrity, keepalive: u.keepalive, method: u.method, mode: u.mode, redirect: u.redirect, referrer: u.referrer, referrerPolicy: u.referrerPolicy, signal: u.signal, ...l });
      const { resolved: p, promise: _ } = ut(u, l, n);
      return o && d(p.href), _;
    }, setHeaders: () => {
    }, depends: d, parent() {
      return o && (c.parent = true), t();
    }, untrack(u) {
      o = false;
      try {
        return u();
      } finally {
        o = true;
      }
    } };
    i = await f.universal.load.call(null, h) ?? null;
  }
  return { node: f, loader: e, server: s, universal: ((_b2 = f.universal) == null ? void 0 : _b2.load) ? { type: "data", data: i, uses: c } : null, data: i ?? (s == null ? void 0 : s.data) ?? null, slash: ((_c2 = f.universal) == null ? void 0 : _c2.trailingSlash) ?? (s == null ? void 0 : s.slash) };
}
function ut(e, t, n) {
  let r = e instanceof Request ? e.url : e;
  const a = new URL(r, n);
  a.origin === n.origin && (r = a.href.slice(n.origin.length));
  const s = oe ? Ut(r, a.href, t) : It(r, t);
  return { resolved: a, promise: s };
}
function Ye(e, t, n, r, a, s) {
  if (Ne) return true;
  if (!a) return false;
  if (a.parent && e || a.route && t || a.url && n) return true;
  for (const i of a.search_params) if (r.has(i)) return true;
  for (const i of a.params) if (s[i] !== w.params[i]) return true;
  for (const i of a.dependencies) if (re.some((o) => o(new URL(i)))) return true;
  return false;
}
function De(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null;
}
function fn(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = /* @__PURE__ */ new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const r of n) {
    const a = e.searchParams.getAll(r), s = t.searchParams.getAll(r);
    a.every((i) => s.includes(i)) && s.every((i) => a.includes(i)) && n.delete(r);
  }
  return n;
}
function ze({ error: e, url: t, route: n, params: r }) {
  return { type: "loaded", state: { error: e, url: t, route: n, params: r, branch: [] }, props: { page: ge(A), constructors: [] } };
}
async function dt({ id: e, invalidating: t, url: n, params: r, route: a, preload: s }) {
  if ((O == null ? void 0 : O.id) === e) return W.delete(O.token), O.promise;
  const { errors: i, layouts: o, leaf: c } = a, f = [...o, c];
  i.forEach((g) => g == null ? void 0 : g().catch(() => {
  })), f.forEach((g) => g == null ? void 0 : g[1]().catch(() => {
  }));
  let d = null;
  const h = w.url ? e !== ie(w.url) : false, u = w.route ? a.id !== w.route.id : false, l = fn(w.url, n);
  let p = false;
  const _ = f.map((g, y) => {
    var _a3;
    const k = w.branch[y], S = !!(g == null ? void 0 : g[0]) && ((k == null ? void 0 : k.loader) !== g[1] || Ye(p, u, h, l, (_a3 = k.server) == null ? void 0 : _a3.uses, r));
    return S && (p = true), S;
  });
  if (_.some(Boolean)) {
    try {
      d = await gt(n, _);
    } catch (g) {
      const y = await V(g, { url: n, params: r, route: { id: e } });
      return W.has(s) ? ze({ error: y, url: n, params: r, route: a }) : he({ status: te(g), error: y, url: n, route: a });
    }
    if (d.type === "redirect") return d;
  }
  const m = d == null ? void 0 : d.nodes;
  let I = false;
  const R = f.map(async (g, y) => {
    var _a3;
    if (!g) return;
    const k = w.branch[y], S = m == null ? void 0 : m[y];
    if ((!S || S.type === "skip") && g[1] === (k == null ? void 0 : k.loader) && !Ye(I, u, h, l, (_a3 = k.universal) == null ? void 0 : _a3.uses, r)) return k;
    if (I = true, (S == null ? void 0 : S.type) === "error") throw S;
    return $e({ loader: g[1], url: n, params: r, route: a, parent: async () => {
      var _a4;
      const me = {};
      for (let _e5 = 0; _e5 < y; _e5 += 1) Object.assign(me, (_a4 = await R[_e5]) == null ? void 0 : _a4.data);
      return me;
    }, server_data_node: De(S === void 0 && g[0] ? { type: "skip" } : S ?? null, g[0] ? k == null ? void 0 : k.server : void 0) });
  });
  for (const g of R) g.catch(() => {
  });
  const L = [];
  for (let g = 0; g < f.length; g += 1) if (f[g]) try {
    L.push(await R[g]);
  } catch (y) {
    if (y instanceof Ie) return { type: "redirect", location: y.location };
    if (W.has(s)) return ze({ error: await V(y, { params: r, url: n, route: { id: a.id } }), url: n, params: r, route: a });
    let k = te(y), S;
    if (m == null ? void 0 : m.includes(y)) k = y.status ?? k, S = y.error;
    else if (y instanceof ce) S = y.body;
    else {
      if (await N.updated.check()) return await ot(), await q(n);
      S = await V(y, { params: r, url: n, route: { id: a.id } });
    }
    const Z = await un(g, L, i);
    return Z ? se({ url: n, params: r, branch: L.slice(0, Z.idx).concat(Z.node), status: k, error: S, route: a }) : await pt(n, { id: a.id }, S, k);
  }
  else L.push(void 0);
  return se({ url: n, params: r, branch: L, status: 200, error: null, route: a, form: t ? void 0 : null });
}
async function un(e, t, n) {
  for (; e--; ) if (n[e]) {
    let r = e;
    for (; !t[r]; ) r -= 1;
    try {
      return { idx: r + 1, node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null } };
    } catch {
      continue;
    }
  }
}
async function he({ status: e, error: t, url: n, route: r }) {
  const a = {};
  let s = null;
  if (v.server_loads[0] === 0) try {
    const o = await gt(n, [true]);
    if (o.type !== "data" || o.nodes[0] && o.nodes[0].type !== "data") throw 0;
    s = o.nodes[0] ?? null;
  } catch {
    (n.origin !== le || n.pathname !== location.pathname || Ce) && await q(n);
  }
  try {
    const o = await $e({ loader: Ae, url: n, params: a, route: r, parent: () => Promise.resolve({}), server_data_node: De(s) }), c = { node: await ne(), loader: ne, universal: null, server: null, data: null };
    return se({ url: n, params: a, branch: [o, c], status: e, error: t, route: null });
  } catch (o) {
    if (o instanceof Ie) return lt(new URL(o.location, location.href), {}, 0);
    throw o;
  }
}
async function dn(e) {
  const t = e.href;
  if (Q.has(t)) return Q.get(t);
  let n;
  try {
    const r = (async () => {
      let a = await v.hooks.reroute({ url: new URL(e), fetch: async (s, i) => ut(s, i, e).promise }) ?? e;
      if (typeof a == "string") {
        const s = new URL(e);
        v.hash ? s.hash = a : s.pathname = a, a = s;
      }
      return a;
    })();
    Q.set(t, r), n = await r;
  } catch {
    Q.delete(t);
    return;
  }
  return n;
}
async function pe(e, t) {
  if (e && !ue(e, U, v.hash)) {
    const n = await dn(e);
    if (!n) return;
    const r = hn(n);
    for (const a of Pe) {
      const s = a.exec(r);
      if (s) return { id: ie(e), invalidating: t, route: a, params: kt(s), url: e };
    }
  }
}
function hn(e) {
  return bt(v.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(U.length)) || "/";
}
function ie(e) {
  return (v.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search;
}
function ht({ url: e, type: t, intent: n, delta: r }) {
  let a = false;
  const s = Be(w, n, e, t);
  r !== void 0 && (s.navigation.delta = r);
  const i = { ...s.navigation, cancel: () => {
    a = true, s.reject(new Error("navigation cancelled"));
  } };
  return X || st.forEach((o) => o(i)), a ? null : s;
}
async function Y({ type: e, url: t, popped: n, keepfocus: r, noscroll: a, replace_state: s, state: i = {}, redirect_count: o = 0, nav_token: c = {}, accept: f = He, block: d = He }) {
  const h = $;
  $ = c;
  const u = await pe(t, false), l = e === "enter" ? Be(w, u, t, e) : ht({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: u });
  if (!l) {
    d(), $ === c && ($ = h);
    return;
  }
  const p = b, _ = E;
  f(), X = true, oe && l.navigation.type !== "enter" && N.navigating.set(z.current = l.navigation);
  let m = u && await dt(u);
  if (!m) {
    if (ue(t, U, v.hash)) return await q(t);
    m = await pt(t, { id: null }, await V(new Re(404, "Not Found", `Not found: ${t.pathname}`), { url: t, params: {}, route: { id: null } }), 404);
  }
  if (t = (u == null ? void 0 : u.url) || t, $ !== c) return l.reject(new Error("navigation aborted")), false;
  if (m.type === "redirect") if (o >= 20) m = await he({ status: 500, error: await V(new Error("Redirect loop"), { url: t, params: {}, route: { id: null } }), url: t, route: { id: null } });
  else return await lt(new URL(m.location, t).href, {}, o + 1, c), false;
  else m.props.page.status >= 400 && await N.updated.check() && (await ot(), await q(t));
  if (cn(), de(p), it(_), m.props.page.url.pathname !== t.pathname && (t.pathname = m.props.page.url.pathname), i = n ? n.state : i, !n) {
    const g = s ? 0 : 1, y = { [D]: b += g, [M]: E += g, [Te]: i };
    (s ? history.replaceState : history.pushState).call(history, y, "", t), s || at(b, E);
  }
  if (O = null, m.props.page.state = i, oe) {
    w = m.state, m.props.page && (m.props.page.url = t);
    const g = (await Promise.all(Array.from(sn, (y) => y(l.navigation)))).filter((y) => typeof y == "function");
    if (g.length > 0) {
      let y = function() {
        g.forEach((k) => {
          K.delete(k);
        });
      };
      g.push(y), g.forEach((k) => {
        K.add(k);
      });
    }
    je.$set(m.props), Qt(m.props.page), Oe = true;
  } else ft(m, Se, false);
  const { activeElement: I } = document;
  await rn();
  const R = n ? n.scroll : a ? fe() : null;
  if (Ke) {
    const g = t.hash && document.getElementById(_t(t));
    R ? scrollTo(R.x, R.y) : g ? g.scrollIntoView() : scrollTo(0, 0);
  }
  const L = document.activeElement !== I && document.activeElement !== document.body;
  !r && !L && yn(t), Ke = true, m.props.page && Object.assign(A, m.props.page), X = false, e === "popstate" && ct(E), l.fulfil(void 0), K.forEach((g) => g(l.navigation)), N.navigating.set(z.current = null);
}
async function pt(e, t, n, r) {
  return e.origin === le && e.pathname === location.pathname && !Ce ? await he({ status: r, error: n, url: e, route: t }) : await q(e);
}
function pn() {
  let e, t, n;
  C.addEventListener("mousemove", (o) => {
    const c = o.target;
    clearTimeout(e), e = setTimeout(() => {
      s(c, j.hover);
    }, 20);
  });
  function r(o) {
    o.defaultPrevented || s(o.composedPath()[0], j.tap);
  }
  C.addEventListener("mousedown", r), C.addEventListener("touchstart", r, { passive: true });
  const a = new IntersectionObserver((o) => {
    for (const c of o) c.isIntersecting && (be(new URL(c.target.href)), a.unobserve(c.target));
  }, { threshold: 0 });
  async function s(o, c) {
    const f = tt(o, C), d = f === t && c >= n;
    if (!f || d) return;
    const { url: h, external: u, download: l } = ke(f, U, v.hash);
    if (u || l) return;
    const p = ee(f), _ = h && ie(w.url) === ie(h);
    if (!(p.reload || _)) if (c <= p.preload_data) {
      t = f, n = j.tap;
      const m = await pe(h, false);
      if (!m) return;
      ln(m);
    } else c <= p.preload_code && (t = f, n = c, be(h));
  }
  function i() {
    a.disconnect();
    for (const o of C.querySelectorAll("a")) {
      const { url: c, external: f, download: d } = ke(o, U, v.hash);
      if (f || d) continue;
      const h = ee(o);
      h.reload || (h.preload_code === j.viewport && a.observe(o), h.preload_code === j.eager && be(c));
    }
  }
  K.add(i), i();
}
function V(e, t) {
  if (e instanceof ce) return e.body;
  const n = te(e), r = Xt(e);
  return v.hooks.handleError({ error: e, event: t, status: n, message: r }) ?? { message: r };
}
function gn(e) {
  if (typeof e == "function") re.push(e);
  else {
    const { href: t } = new URL(e, location.href);
    re.push((n) => n.href === t);
  }
}
function Ln(e, t) {
  de(b);
  const n = { [D]: b += 1, [M]: E, [Qe]: A.url.href, [Te]: t };
  history.pushState(n, "", xe(e)), Oe = true, A.state = t, je.$set({ page: an(() => ge(A)) }), at(b, E);
}
function mn() {
  var _a3;
  history.scrollRestoration = "manual", addEventListener("beforeunload", (t) => {
    let n = false;
    if (We(), !X) {
      const r = Be(w, void 0, null, "leave"), a = { ...r.navigation, cancel: () => {
        n = true, r.reject(new Error("navigation cancelled"));
      } };
      st.forEach((s) => s(a));
    }
    n ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto";
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && We();
  }), ((_a3 = navigator.connection) == null ? void 0 : _a3.saveData) || pn(), C.addEventListener("click", async (t) => {
    if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
    const n = tt(t.composedPath()[0], C);
    if (!n) return;
    const { url: r, external: a, target: s, download: i } = ke(n, U, v.hash);
    if (!r) return;
    if (s === "_parent" || s === "_top") {
      if (window.parent !== window) return;
    } else if (s && s !== "_self") return;
    const o = ee(n);
    if (!(n instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || i) return;
    const [f, d] = (v.hash ? r.hash.replace(/^#/, "") : r.href).split("#"), h = f === ye(location);
    if (a || o.reload && (!h || !d)) {
      ht({ url: r, type: "link" }) ? X = true : t.preventDefault();
      return;
    }
    if (d !== void 0 && h) {
      const [, u] = w.url.href.split("#");
      if (u === d) {
        if (t.preventDefault(), d === "" || d === "top" && n.ownerDocument.getElementById("top") === null) window.scrollTo({ top: 0 });
        else {
          const l = n.ownerDocument.getElementById(decodeURIComponent(d));
          l && (l.scrollIntoView(), l.focus());
        }
        return;
      }
      if (G = true, de(b), e(r), !o.replace_state) return;
      G = false;
    }
    t.preventDefault(), await new Promise((u) => {
      requestAnimationFrame(() => {
        setTimeout(u, 0);
      }), setTimeout(u, 100);
    }), await Y({ type: "link", url: r, keepfocus: o.keepfocus, noscroll: o.noscroll, replace_state: o.replace_state ?? r.href === location.href });
  }), C.addEventListener("submit", (t) => {
    if (t.defaultPrevented) return;
    const n = HTMLFormElement.prototype.cloneNode.call(t.target), r = t.submitter;
    if (((r == null ? void 0 : r.formTarget) || n.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || n.method) !== "get") return;
    const i = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || n.action);
    if (ue(i, U, false)) return;
    const o = t.target, c = ee(o);
    if (c.reload) return;
    t.preventDefault(), t.stopPropagation();
    const f = new FormData(o), d = r == null ? void 0 : r.getAttribute("name");
    d && f.append(d, (r == null ? void 0 : r.getAttribute("value")) ?? ""), i.search = new URLSearchParams(f).toString(), Y({ type: "form", url: i, keepfocus: c.keepfocus, noscroll: c.noscroll, replace_state: c.replace_state ?? i.href === location.href });
  }), addEventListener("popstate", async (t) => {
    var _a4;
    if (!Ee) {
      if ((_a4 = t.state) == null ? void 0 : _a4[D]) {
        const n = t.state[D];
        if ($ = {}, n === b) return;
        const r = B[n], a = t.state[Te] ?? {}, s = new URL(t.state[Qe] ?? location.href), i = t.state[M], o = w.url ? ye(location) === ye(w.url) : false;
        if (i === E && (Oe || o)) {
          a !== A.state && (A.state = a), e(s), B[b] = fe(), r && scrollTo(r.x, r.y), b = n;
          return;
        }
        const f = n - b;
        await Y({ type: "popstate", url: s, popped: { state: a, scroll: r, delta: f }, accept: () => {
          b = n, E = i;
        }, block: () => {
          history.go(-f);
        }, nav_token: $ });
      } else if (!G) {
        const n = new URL(location.href);
        e(n), v.hash && location.reload();
      }
    }
  }), addEventListener("hashchange", () => {
    G && (G = false, history.replaceState({ ...history.state, [D]: ++b, [M]: E }, "", location.href));
  });
  for (const t of document.querySelectorAll("link")) on.has(t.rel) && (t.href = t.href);
  addEventListener("pageshow", (t) => {
    t.persisted && N.navigating.set(z.current = null);
  });
  function e(t) {
    w.url = A.url = t, N.page.set(ge(A)), N.page.notify();
  }
}
async function _n(e, { status: t = 200, error: n, node_ids: r, params: a, route: s, server_route: i, data: o, form: c }) {
  Ce = true;
  const f = new URL(location.href);
  let d;
  ({ params: a = {}, route: s = { id: null } } = await pe(f, false) || {}), d = Pe.find(({ id: l }) => l === s.id);
  let h, u = true;
  try {
    const l = r.map(async (_, m) => {
      const I = o[m];
      return (I == null ? void 0 : I.uses) && (I.uses = mt(I.uses)), $e({ loader: v.nodes[_], url: f, params: a, route: s, parent: async () => {
        const R = {};
        for (let L = 0; L < m; L += 1) Object.assign(R, (await l[L]).data);
        return R;
      }, server_data_node: De(I) });
    }), p = await Promise.all(l);
    if (d) {
      const _ = d.layouts;
      for (let m = 0; m < _.length; m++) _[m] || p.splice(m, 0, void 0);
    }
    h = se({ url: f, params: a, branch: p, status: t, error: n, form: c, route: d ?? null });
  } catch (l) {
    if (l instanceof Ie) {
      await q(new URL(l.location, location.href));
      return;
    }
    h = await he({ status: te(l), error: await V(l, { url: f, params: a, route: s }), url: f, route: s }), e.textContent = "", u = false;
  }
  h.props.page && (h.props.page.state = {}), ft(h, e, u);
}
async function gt(e, t) {
  var _a3;
  const n = new URL(e);
  n.pathname = nn(e.pathname), e.pathname.endsWith("/") && n.searchParams.append(Jt, "1"), n.searchParams.append(zt, t.map((s) => s ? "1" : "0").join(""));
  const r = window.fetch, a = await r(n.href, {});
  if (!a.ok) {
    let s;
    throw ((_a3 = a.headers.get("content-type")) == null ? void 0 : _a3.includes("application/json")) ? s = await a.json() : a.status === 404 ? s = "Not Found" : a.status === 500 && (s = "Internal Error"), new ce(a.status, s);
  }
  return new Promise(async (s) => {
    var _a4;
    const i = /* @__PURE__ */ new Map(), o = a.body.getReader(), c = new TextDecoder();
    function f(h) {
      return Kt(h, { ...v.decoders, Promise: (u) => new Promise((l, p) => {
        i.set(u, { fulfil: l, reject: p });
      }) });
    }
    let d = "";
    for (; ; ) {
      const { done: h, value: u } = await o.read();
      if (h && !d) break;
      for (d += !u && d ? `
` : c.decode(u, { stream: true }); ; ) {
        const l = d.indexOf(`
`);
        if (l === -1) break;
        const p = JSON.parse(d.slice(0, l));
        if (d = d.slice(l + 1), p.type === "redirect") return s(p);
        if (p.type === "data") (_a4 = p.nodes) == null ? void 0 : _a4.forEach((_) => {
          (_ == null ? void 0 : _.type) === "data" && (_.uses = mt(_.uses), _.data = f(_.data));
        }), s(p);
        else if (p.type === "chunk") {
          const { id: _, data: m, error: I } = p, R = i.get(_);
          i.delete(_), I ? R.reject(f(I)) : R.fulfil(f(m));
        }
      }
    }
  });
}
function mt(e) {
  return { dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []), params: new Set((e == null ? void 0 : e.params) ?? []), parent: !!(e == null ? void 0 : e.parent), route: !!(e == null ? void 0 : e.route), url: !!(e == null ? void 0 : e.url), search_params: new Set((e == null ? void 0 : e.search_params) ?? []) };
}
let Ee = false;
function yn(e) {
  const t = document.querySelector("[autofocus]");
  if (t) t.focus();
  else {
    const n = _t(e);
    if (n && document.getElementById(n)) {
      const { x: a, y: s } = fe();
      setTimeout(() => {
        const i = history.state;
        Ee = true, location.replace(`#${n}`), v.hash && location.replace(e.hash), history.replaceState(i, "", e.hash), scrollTo(a, s), Ee = false;
      });
    } else {
      const a = document.body, s = a.getAttribute("tabindex");
      a.tabIndex = -1, a.focus({ preventScroll: true, focusVisible: false }), s !== null ? a.setAttribute("tabindex", s) : a.removeAttribute("tabindex");
    }
    const r = getSelection();
    if (r && r.type !== "None") {
      const a = [];
      for (let s = 0; s < r.rangeCount; s += 1) a.push(r.getRangeAt(s));
      setTimeout(() => {
        if (r.rangeCount === a.length) {
          for (let s = 0; s < r.rangeCount; s += 1) {
            const i = a[s], o = r.getRangeAt(s);
            if (i.commonAncestorContainer !== o.commonAncestorContainer || i.startContainer !== o.startContainer || i.endContainer !== o.endContainer || i.startOffset !== o.startOffset || i.endOffset !== o.endOffset) return;
          }
          r.removeAllRanges();
        }
      });
    }
  }
}
function Be(e, t, n, r) {
  var _a3, _b2;
  let a, s;
  const i = new Promise((c, f) => {
    a = c, s = f;
  });
  return i.catch(() => {
  }), { navigation: { from: { params: e.params, route: { id: ((_a3 = e.route) == null ? void 0 : _a3.id) ?? null }, url: e.url }, to: n && { params: (t == null ? void 0 : t.params) ?? null, route: { id: ((_b2 = t == null ? void 0 : t.route) == null ? void 0 : _b2.id) ?? null }, url: n }, willUnload: !t, type: r, complete: i }, fulfil: a, reject: s };
}
function ge(e) {
  return { data: e.data, error: e.error, form: e.form, params: e.params, route: e.route, state: e.state, status: e.status, url: e.url };
}
function wn(e) {
  const t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t;
}
function _t(e) {
  let t;
  if (v.hash) {
    const [, , n] = e.hash.split("#", 3);
    t = n ?? "";
  } else t = e.hash.slice(1);
  return decodeURIComponent(t);
}
export {
  Ln as a,
  Un as b,
  Sn as l,
  A as p,
  N as s
};
