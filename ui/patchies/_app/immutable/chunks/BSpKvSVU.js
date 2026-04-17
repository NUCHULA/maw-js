var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
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
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _t2, _e2, _n2, _r2, _Jo_instances, o_fn, i_fn, _t3, _e3, _t4, _e4, _t5, _e5, _n3, _r3, _o2, _i2, _a2, _s2, _t6, _t7, _e6, _t8, _e7, _t9, _e8, _Us_instances, n_fn, r_fn, _t10, _e9, _n4, _r4, _t11, _e10, _n5, _r5, _t12, _e11, _n6, _r6, _Oi_instances, o_fn2, i_fn2, _t13, _e12, _t14, _e13, _t15, _e14, _n7, _r7, _o3, _Kr_instances, i_fn3, a_fn, _s3, _c, _t16, _e15, _t17, _dn_instances, e_fn, _n8, _t18, _Gr_instances, e_fn2, _n9, _t19, _e16, _t20, _t21, _e17, _Yr_instances, n_fn2, r_fn2, _o4, _t22, _e18, _n10, _r8, _o5, _i3, _a3, _s4, _c2, _hn_instances, l_fn, _u, _d, _f, _h, _m, _g, _p, b_fn, _y, _w, _t23, _e19, _t24, _e20, _n11, _t25, _e21, _n12, _r9, _o6, _mn_instances, i_fn4, a_fn2, s_fn, c_fn, l_fn2, u_fn, d_fn, _t26, _gn_instances, e_fn3, _n13, _r10, _t27, _e22, _n14, _r11, _Ki_instances, o_fn3, _t28, _e23, _n15, _r12, _t29, _e24, _n16, _r13, _o7, _i4, _a4, _s5, _c3, _l, _u2, _d2, _f2, _h2, _m2, _g2, _p2, _b, _y2, _w2, _v, _x, _C, _k, _t30, _t31, _e25, _n17, _r14, _$a_instances, o_fn4, i_fn5, a_fn3, s_fn2, _t32, _e26, _n18, _tn_instances, r_fn3, _t33, _e27, _n19, _r15, _o8, _t34, _e28, _n20, _r16, _o9, _i5, _a5, _s6, _c4, _l2, _u3, _t35, _e29, _n21, _r17, _o10, _i6, _a6, _s7, _c5, _l3, _u4, _d3, _f3, _h3, _t36, _e30;
import "./DsnmJJEf.js";
import { bd as ko, i as Dn, j as To, I as So, br as Ao, aJ as Eo, L as Oo, N as Mo, O as Po, K as Io, P as No, m as Fo, W as Do, Q as Lo, aj as I, bn as Ln, a2 as Ro, z as h, B as m, b6 as Ut, p as ft, e as $, a as tt, b as et, c as pt, g as mt, ak as Pt, al as C, bo as D, aZ as zo, aY as Rn, a_ as Bo, ao as Wo, aq as Y, F as we, b0 as _o, aX as Vo, ag as ir } from "./CeQCqUQ_.js";
import { a as gt, m as Ho, u as Ko } from "./DMf1efOI.js";
import { s as Go, r as jo, p as F } from "./C_-niZe9.js";
import { I as Uo } from "./CefFKWAt.js";
import { i as Yo } from "./CmAffBVh.js";
import { e as be } from "./C66EmW7x.js";
import { p as qo, c as ar } from "./D80btq7A.js";
function Xo() {
  return Symbol(ko);
}
function Zo(e4, t, n) {
  Dn && To();
  var r = e4, o = Do, s, i, a = null, c = So() ? Ao : Eo;
  function l() {
    s && Lo(s), a !== null && (a.lastChild.remove(), r.before(a), a = null), s = i;
  }
  Oo(() => {
    if (c(o, o = t())) {
      var d = r, u = No();
      u && (a = document.createDocumentFragment(), a.append(d = Mo())), i = Po(() => n(d)), u ? Io.add_callback(l) : l();
    }
  }), Dn && (r = Fo);
}
const _Jo = class _Jo extends Map {
  constructor(t) {
    super();
    __privateAdd(this, _Jo_instances);
    __privateAdd(this, _t2, /* @__PURE__ */ new Map());
    __privateAdd(this, _e2, I(0));
    __privateAdd(this, _n2, I(0));
    __privateAdd(this, _r2, Ln || -1);
    if (t) {
      for (var [n, r] of t) super.set(n, r);
      __privateGet(this, _n2).v = super.size;
    }
  }
  has(t) {
    var n = __privateGet(this, _t2), r = n.get(t);
    if (r === void 0) {
      var o = super.get(t);
      if (o !== void 0) r = __privateMethod(this, _Jo_instances, o_fn).call(this, 0), n.set(t, r);
      else return h(__privateGet(this, _e2)), false;
    }
    return h(r), true;
  }
  forEach(t, n) {
    __privateMethod(this, _Jo_instances, i_fn).call(this), super.forEach(t, n);
  }
  get(t) {
    var n = __privateGet(this, _t2), r = n.get(t);
    if (r === void 0) {
      var o = super.get(t);
      if (o !== void 0) r = __privateMethod(this, _Jo_instances, o_fn).call(this, 0), n.set(t, r);
      else {
        h(__privateGet(this, _e2));
        return;
      }
    }
    return h(r), super.get(t);
  }
  set(t, n) {
    var _a7;
    var r = __privateGet(this, _t2), o = r.get(t), s = super.get(t), i = super.set(t, n), a = __privateGet(this, _e2);
    if (o === void 0) o = __privateMethod(this, _Jo_instances, o_fn).call(this, 0), r.set(t, o), m(__privateGet(this, _n2), super.size), Ut(a);
    else if (s !== n) {
      Ut(o);
      var c = a.reactions === null ? null : new Set(a.reactions), l = c === null || !((_a7 = o.reactions) == null ? void 0 : _a7.every((d) => c.has(d)));
      l && Ut(a);
    }
    return i;
  }
  delete(t) {
    var n = __privateGet(this, _t2), r = n.get(t), o = super.delete(t);
    return r !== void 0 && (n.delete(t), m(__privateGet(this, _n2), super.size), m(r, -1), Ut(__privateGet(this, _e2))), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var t = __privateGet(this, _t2);
      m(__privateGet(this, _n2), 0);
      for (var n of t.values()) m(n, -1);
      Ut(__privateGet(this, _e2)), t.clear();
    }
  }
  keys() {
    return h(__privateGet(this, _e2)), super.keys();
  }
  values() {
    return __privateMethod(this, _Jo_instances, i_fn).call(this), super.values();
  }
  entries() {
    return __privateMethod(this, _Jo_instances, i_fn).call(this), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return h(__privateGet(this, _n2)), super.size;
  }
};
_t2 = new WeakMap();
_e2 = new WeakMap();
_n2 = new WeakMap();
_r2 = new WeakMap();
_Jo_instances = new WeakSet();
o_fn = function(t) {
  return Ln === __privateGet(this, _r2) ? I(t) : Ro(t);
};
i_fn = function() {
  h(__privateGet(this, _e2));
  var t = __privateGet(this, _t2);
  if (__privateGet(this, _n2).v !== t.size) {
    for (var n of __superGet(_Jo.prototype, this, "keys").call(this)) if (!t.has(n)) {
      var r = __privateMethod(this, _Jo_instances, o_fn).call(this, 0);
      t.set(n, r);
    }
  }
  for ([, r] of __privateGet(this, _t2)) h(r);
};
let Jo = _Jo;
function Gc(e4, t) {
  ft(t, true);
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
  let n = jo(t, ["$$slots", "$$events", "$$legacy"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  Uo(e4, Go({ name: "chevron-down" }, () => n, { get iconNode() {
    return r;
  }, children: (o, s) => {
    var i = $(), a = tt(i);
    gt(a, () => t.children ?? mt), et(o, i);
  }, $$slots: { default: true } })), pt();
}
function Qo(e4) {
  return typeof e4 == "function";
}
function ne(e4) {
  return e4 !== null && typeof e4 == "object";
}
const $o = ["string", "number", "bigint", "boolean"];
function Ge(e4) {
  return e4 == null || $o.includes(typeof e4) ? true : Array.isArray(e4) ? e4.every((t) => Ge(t)) : typeof e4 == "object" ? Object.getPrototypeOf(e4) === Object.prototype : false;
}
const zt = Symbol("box"), Pe = Symbol("is-writable");
function E(e4, t) {
  const n = C(e4);
  return t ? { [zt]: true, [Pe]: true, get current() {
    return h(n);
  }, set current(r) {
    t(r);
  } } : { [zt]: true, get current() {
    return e4();
  } };
}
function re(e4) {
  return ne(e4) && zt in e4;
}
function on(e4) {
  return re(e4) && Pe in e4;
}
function cr(e4) {
  return re(e4) ? e4 : Qo(e4) ? E(e4) : J(e4);
}
function ts(e4) {
  return Object.entries(e4).reduce((t, [n, r]) => re(r) ? (on(r) ? Object.defineProperty(t, n, { get() {
    return r.current;
  }, set(o) {
    r.current = o;
  } }) : Object.defineProperty(t, n, { get() {
    return r.current;
  } }), t) : Object.assign(t, { [n]: r }), {});
}
function es(e4) {
  return on(e4) ? { [zt]: true, get current() {
    return e4.current;
  } } : e4;
}
function J(e4) {
  let t = I(Pt(e4));
  return { [zt]: true, [Pe]: true, get current() {
    return h(t);
  }, set current(n) {
    m(t, n, true);
  } };
}
function Dt(e4) {
  let t = I(Pt(e4));
  return { [zt]: true, [Pe]: true, get current() {
    return h(t);
  }, set current(n) {
    m(t, n, true);
  } };
}
Dt.from = cr;
Dt.with = E;
Dt.flatten = ts;
Dt.readonly = es;
Dt.isBox = re;
Dt.isWritableBox = on;
function lr(...e4) {
  return function(t) {
    var _a7;
    for (const n of e4) if (n) {
      if (t.defaultPrevented) return;
      typeof n == "function" ? n.call(this, t) : (_a7 = n.current) == null ? void 0 : _a7.call(this, t);
    }
  };
}
const ns = /\d/, rs = ["-", "_", "/", "."];
function os(e4 = "") {
  if (!ns.test(e4)) return e4 !== e4.toLowerCase();
}
function ss(e4) {
  const t = [];
  let n = "", r, o;
  for (const s of e4) {
    const i = rs.includes(s);
    if (i === true) {
      t.push(n), n = "", r = void 0;
      continue;
    }
    const a = os(s);
    if (o === false) {
      if (r === false && a === true) {
        t.push(n), n = s, r = a;
        continue;
      }
      if (r === true && a === false && n.length > 1) {
        const c = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = c + s, r = a;
        continue;
      }
    }
    n += s, r = a, o = i;
  }
  return t.push(n), t;
}
function ur(e4) {
  return e4 ? ss(e4).map((t) => as(t)).join("") : "";
}
function is(e4) {
  return cs(ur(e4 || ""));
}
function as(e4) {
  return e4 ? e4[0].toUpperCase() + e4.slice(1) : "";
}
function cs(e4) {
  return e4 ? e4[0].toLowerCase() + e4.slice(1) : "";
}
function Jt(e4) {
  if (!e4) return {};
  const t = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[ur(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      t[r] = o;
      return;
    }
    t[is(r)] = o;
  }
  return qo(e4, n), t;
}
function It(...e4) {
  return (...t) => {
    for (const n of e4) typeof n == "function" && n(...t);
  };
}
function ls(e4, t) {
  const n = RegExp(e4, "g");
  return (r) => {
    if (typeof r != "string") throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const us = ls(/[A-Z]/, (e4) => `-${e4.toLowerCase()}`);
function ds(e4) {
  if (!e4 || typeof e4 != "object" || Array.isArray(e4)) throw new TypeError(`expected an argument of type object, but got ${typeof e4}`);
  return Object.keys(e4).map((t) => `${us(t)}: ${e4[t]};`).join(`
`);
}
function dr(e4 = {}) {
  return ds(e4).replace(`
`, " ");
}
const hs = ["onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforeinput", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfocusin", "onfocusout", "onformdata", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel"], fs = new Set(hs);
function ps(e4) {
  return fs.has(e4);
}
function hr(...e4) {
  const t = { ...e4[0] };
  for (let n = 1; n < e4.length; n++) {
    const r = e4[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const s = t[o], i = r[o], a = typeof s == "function", c = typeof i == "function";
        if (a && ps(o)) {
          const l = s, d = i;
          t[o] = lr(l, d);
        } else if (a && c) t[o] = It(s, i);
        else if (o === "class") {
          const l = Ge(s), d = Ge(i);
          l && d ? t[o] = be(s, i) : l ? t[o] = be(s) : d && (t[o] = be(i));
        } else if (o === "style") {
          const l = typeof s == "object", d = typeof i == "object", u = typeof s == "string", p = typeof i == "string";
          if (l && d) t[o] = { ...s, ...i };
          else if (l && p) {
            const f = Jt(i);
            t[o] = { ...s, ...f };
          } else if (u && d) {
            const f = Jt(s);
            t[o] = { ...f, ...i };
          } else if (u && p) {
            const f = Jt(s), g = Jt(i);
            t[o] = { ...f, ...g };
          } else l ? t[o] = s : d ? t[o] = i : u ? t[o] = s : p && (t[o] = i);
        } else t[o] = i !== void 0 ? i : s;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const s = t[o], i = r[o];
        t[o] = i !== void 0 ? i : s;
      }
    }
  }
  return typeof t.style == "object" && (t.style = dr(t.style).replaceAll(`
`, " ")), t.hidden === false && (t.hidden = void 0, delete t.hidden), t.disabled === false && (t.disabled = void 0, delete t.disabled), t;
}
const fr = typeof window < "u" ? window : void 0;
function ms(e4) {
  let t = e4.activeElement;
  for (; t == null ? void 0 : t.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n;
  }
  return t;
}
class gs {
  constructor(t = {}) {
    __privateAdd(this, _t3);
    __privateAdd(this, _e3);
    const { window: n = fr, document: r = n == null ? void 0 : n.document } = t;
    n !== void 0 && (__privateSet(this, _t3, r), __privateSet(this, _e3, ar((o) => {
      const s = D(n, "focusin", o), i = D(n, "focusout", o);
      return () => {
        s(), i();
      };
    })));
  }
  get current() {
    var _a7;
    return (_a7 = __privateGet(this, _e3)) == null ? void 0 : _a7.call(this), __privateGet(this, _t3) ? ms(__privateGet(this, _t3)) : null;
  }
}
_t3 = new WeakMap();
_e3 = new WeakMap();
new gs();
function bs(e4) {
  return typeof e4 == "function";
}
class bt {
  constructor(t) {
    __privateAdd(this, _t4);
    __privateAdd(this, _e4);
    __privateSet(this, _t4, t), __privateSet(this, _e4, Symbol(t));
  }
  get key() {
    return __privateGet(this, _e4);
  }
  exists() {
    return zo(__privateGet(this, _e4));
  }
  get() {
    const t = Rn(__privateGet(this, _e4));
    if (t === void 0) throw new Error(`Context "${__privateGet(this, _t4)}" not found`);
    return t;
  }
  getOr(t) {
    const n = Rn(__privateGet(this, _e4));
    return n === void 0 ? t : n;
  }
  set(t) {
    return Bo(__privateGet(this, _e4), t);
  }
}
_t4 = new WeakMap();
_e4 = new WeakMap();
function ys(e4, t) {
  switch (e4) {
    case "post":
      Y(t);
      break;
    case "pre":
      Wo(t);
      break;
  }
}
function pr(e4, t, n, r = {}) {
  const { lazy: o = false } = r;
  let s = !o, i = Array.isArray(e4) ? [] : void 0;
  ys(t, () => {
    const a = Array.isArray(e4) ? e4.map((l) => l()) : e4();
    if (!s) {
      s = true, i = a;
      return;
    }
    const c = we(() => n(a, i));
    return i = a, c;
  });
}
function R(e4, t, n) {
  pr(e4, "post", t, n);
}
function ws(e4, t, n) {
  pr(e4, "pre", t, n);
}
R.pre = ws;
function zn(e4) {
  return bs(e4) ? e4() : e4;
}
class vs {
  constructor(t, n = { box: "border-box" }) {
    __privateAdd(this, _t5, { width: 0, height: 0 });
    __privateAdd(this, _e5, false);
    __privateAdd(this, _n3);
    __privateAdd(this, _r3);
    __privateAdd(this, _o2);
    __privateAdd(this, _i2, C(() => {
      var _a7;
      return (_a7 = h(__privateGet(this, _s2))) == null ? void 0 : _a7(), this.getSize().width;
    }));
    __privateAdd(this, _a2, C(() => {
      var _a7;
      return (_a7 = h(__privateGet(this, _s2))) == null ? void 0 : _a7(), this.getSize().height;
    }));
    __privateAdd(this, _s2, C(() => {
      const t = zn(__privateGet(this, _r3));
      if (t) return ar((n) => {
        if (!__privateGet(this, _o2)) return;
        const r = new (__privateGet(this, _o2)).ResizeObserver((o) => {
          __privateSet(this, _e5, true);
          for (const s of o) {
            const i = __privateGet(this, _n3).box === "content-box" ? s.contentBoxSize : s.borderBoxSize, a = Array.isArray(i) ? i : [i];
            __privateGet(this, _t5).width = a.reduce((c, l) => Math.max(c, l.inlineSize), 0), __privateGet(this, _t5).height = a.reduce((c, l) => Math.max(c, l.blockSize), 0);
          }
          n();
        });
        return r.observe(t), () => {
          __privateSet(this, _e5, false), r.disconnect();
        };
      });
    }));
    __privateSet(this, _o2, n.window ?? fr), __privateSet(this, _n3, n), __privateSet(this, _r3, t), __privateSet(this, _t5, { width: 0, height: 0 });
  }
  calculateSize() {
    const t = zn(__privateGet(this, _r3));
    if (!t || !__privateGet(this, _o2)) return;
    const n = t.offsetWidth, r = t.offsetHeight;
    if (__privateGet(this, _n3).box === "border-box") return { width: n, height: r };
    const o = __privateGet(this, _o2).getComputedStyle(t), s = parseFloat(o.paddingLeft) + parseFloat(o.paddingRight), i = parseFloat(o.paddingTop) + parseFloat(o.paddingBottom), a = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), c = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), l = n - s - a, d = r - i - c;
    return { width: l, height: d };
  }
  getSize() {
    return __privateGet(this, _e5) ? __privateGet(this, _t5) : this.calculateSize() ?? __privateGet(this, _t5);
  }
  get current() {
    var _a7;
    return (_a7 = h(__privateGet(this, _s2))) == null ? void 0 : _a7(), this.getSize();
  }
  get width() {
    return h(__privateGet(this, _i2));
  }
  get height() {
    return h(__privateGet(this, _a2));
  }
}
_t5 = new WeakMap();
_e5 = new WeakMap();
_n3 = new WeakMap();
_r3 = new WeakMap();
_o2 = new WeakMap();
_i2 = new WeakMap();
_a2 = new WeakMap();
_s2 = new WeakMap();
function Et(e4) {
  Y(() => () => {
    e4();
  });
}
function xs(e4) {
  Y(() => we(() => e4()));
}
function Cs(e4, t) {
  return setTimeout(t, e4);
}
function at(e4) {
  _o().then(e4);
}
const ks = 1, Ts = 9, Ss = 11;
function je(e4) {
  return ne(e4) && e4.nodeType === ks && typeof e4.nodeName == "string";
}
function mr(e4) {
  return ne(e4) && e4.nodeType === Ts;
}
function As(e4) {
  var _a7;
  return ne(e4) && ((_a7 = e4.constructor) == null ? void 0 : _a7.name) === "VisualViewport";
}
function Es(e4) {
  return ne(e4) && e4.nodeType !== void 0;
}
function gr(e4) {
  return Es(e4) && e4.nodeType === Ss && "host" in e4;
}
function Os(e4, t) {
  var _a7;
  if (!e4 || !t || !je(e4) || !je(t)) return false;
  const n = (_a7 = t.getRootNode) == null ? void 0 : _a7.call(t);
  if (e4 === t || e4.contains(t)) return true;
  if (n && gr(n)) {
    let r = t;
    for (; r; ) {
      if (e4 === r) return true;
      r = r.parentNode || r.host;
    }
  }
  return false;
}
function Vt(e4) {
  return mr(e4) ? e4 : As(e4) ? e4.document : (e4 == null ? void 0 : e4.ownerDocument) ?? document;
}
function $t(e4) {
  var _a7;
  return gr(e4) ? $t(e4.host) : mr(e4) ? e4.defaultView ?? window : je(e4) ? ((_a7 = e4.ownerDocument) == null ? void 0 : _a7.defaultView) ?? window : window;
}
function Ms(e4) {
  let t = e4.activeElement;
  for (; t == null ? void 0 : t.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (n === t) break;
    t = n;
  }
  return t;
}
class Ie {
  constructor(t) {
    __publicField(this, "element");
    __privateAdd(this, _t6, C(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    __publicField(this, "getDocument", () => Vt(this.root));
    __publicField(this, "getWindow", () => this.getDocument().defaultView ?? window);
    __publicField(this, "getActiveElement", () => Ms(this.root));
    __publicField(this, "isActiveElement", (t) => t === this.getActiveElement());
    __publicField(this, "querySelector", (t) => this.root ? this.root.querySelector(t) : null);
    __publicField(this, "querySelectorAll", (t) => this.root ? this.root.querySelectorAll(t) : []);
    __publicField(this, "setTimeout", (t, n) => this.getWindow().setTimeout(t, n));
    __publicField(this, "clearTimeout", (t) => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = E(t) : this.element = t;
  }
  get root() {
    return h(__privateGet(this, _t6));
  }
  set root(t) {
    m(__privateGet(this, _t6), t);
  }
  getElementById(t) {
    return this.root.getElementById(t);
  }
}
_t6 = new WeakMap();
function lt(e4, t) {
  return { [Xo()]: (n) => re(e4) ? (e4.current = n, we(() => t == null ? void 0 : t(n)), () => {
    "isConnected" in n && n.isConnected || (e4.current = null, t == null ? void 0 : t(null));
  }) : (e4(n), we(() => t == null ? void 0 : t(n)), () => {
    "isConnected" in n && n.isConnected || (e4(null), t == null ? void 0 : t(null));
  }) };
}
function br(e4) {
  return e4 ? "true" : "false";
}
function jc(e4) {
  return e4 ? "true" : void 0;
}
function Ne(e4) {
  return e4 ? "" : void 0;
}
function Uc(e4) {
  return e4 ? true : void 0;
}
function sn(e4) {
  return e4 ? "open" : "closed";
}
function Yc(e4) {
  return e4 ? "checked" : "unchecked";
}
function Ps(e4, t) {
  return t ? "mixed" : e4 ? "true" : "false";
}
class Is {
  constructor(t) {
    __privateAdd(this, _t7);
    __privateAdd(this, _e6);
    __publicField(this, "attrs");
    __privateSet(this, _t7, t.getVariant ? t.getVariant() : null), __privateSet(this, _e6, __privateGet(this, _t7) ? `data-${__privateGet(this, _t7)}-` : `data-${t.component}-`), this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map((n) => [n, this.getAttr(n)]));
  }
  getAttr(t, n) {
    return n ? `data-${n}-${t}` : `${__privateGet(this, _e6)}${t}`;
  }
  selector(t, n) {
    return `[${this.getAttr(t, n)}]`;
  }
}
_t7 = new WeakMap();
_e6 = new WeakMap();
function yr(e4) {
  const t = new Is(e4);
  return { ...t.attrs, selector: t.selector, getAttr: t.getAttr };
}
const ve = "ArrowDown", oe = "ArrowLeft", se = "ArrowRight", xe = "ArrowUp", wr = "End", Ns = "Enter", Fs = "Escape", vr = "Home", Ds = "PageDown", Ls = "PageUp", an = " ", Rs = "Tab", qc = "p", Xc = "n", Zc = "j", Jc = "k", Qc = "h", $c = "l";
function zs(e4) {
  return window.getComputedStyle(e4).getPropertyValue("direction");
}
function Bs(e4 = "ltr", t = "horizontal") {
  return { horizontal: e4 === "rtl" ? oe : se, vertical: ve }[t];
}
function Ws(e4 = "ltr", t = "horizontal") {
  return { horizontal: e4 === "rtl" ? se : oe, vertical: xe }[t];
}
function _s(e4 = "ltr", t = "horizontal") {
  return ["ltr", "rtl"].includes(e4) || (e4 = "ltr"), ["horizontal", "vertical"].includes(t) || (t = "horizontal"), { nextKey: Bs(e4, t), prevKey: Ws(e4, t) };
}
const xr = typeof document < "u", Bn = Vs();
function Vs() {
  var _a7, _b2;
  return xr && ((_a7 = window == null ? void 0 : window.navigator) == null ? void 0 : _a7.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function dt(e4) {
  return e4 instanceof HTMLElement;
}
function Bt(e4) {
  return e4 instanceof Element;
}
function Cr(e4) {
  return e4 instanceof Element || e4 instanceof SVGElement;
}
function tl(e4) {
  return e4.pointerType === "touch";
}
function Hs(e4) {
  return e4.matches(":focus-visible");
}
function Ks(e4) {
  return e4 !== null;
}
function Gs(e4) {
  return e4 instanceof HTMLInputElement && "select" in e4;
}
class js {
  constructor(t) {
    __privateAdd(this, _t8);
    __privateAdd(this, _e7, Dt(null));
    __privateSet(this, _t8, t);
  }
  getCandidateNodes() {
    return __privateGet(this, _t8).rootNode.current ? __privateGet(this, _t8).candidateSelector ? Array.from(__privateGet(this, _t8).rootNode.current.querySelectorAll(__privateGet(this, _t8).candidateSelector)) : __privateGet(this, _t8).candidateAttr ? Array.from(__privateGet(this, _t8).rootNode.current.querySelectorAll(`[${__privateGet(this, _t8).candidateAttr}]:not([data-disabled])`)) : [] : [];
  }
  focusFirstCandidate() {
    var _a7;
    const t = this.getCandidateNodes();
    t.length && ((_a7 = t[0]) == null ? void 0 : _a7.focus());
  }
  handleKeydown(t, n, r = false) {
    var _a7, _b2;
    const o = __privateGet(this, _t8).rootNode.current;
    if (!o || !t) return;
    const s = this.getCandidateNodes();
    if (!s.length) return;
    const i = s.indexOf(t), a = zs(o), { nextKey: c, prevKey: l } = _s(a, __privateGet(this, _t8).orientation.current), d = __privateGet(this, _t8).loop.current, u = { [c]: i + 1, [l]: i - 1, [vr]: 0, [wr]: s.length - 1 };
    if (r) {
      const g = c === ve ? se : ve, b = l === xe ? oe : xe;
      u[g] = i + 1, u[b] = i - 1;
    }
    let p = u[n.key];
    if (p === void 0) return;
    n.preventDefault(), p < 0 && d ? p = s.length - 1 : p === s.length && d && (p = 0);
    const f = s[p];
    if (f) return f.focus(), __privateGet(this, _e7).current = f.id, (_b2 = (_a7 = __privateGet(this, _t8)).onCandidateFocus) == null ? void 0 : _b2.call(_a7, f), f;
  }
  getTabIndex(t) {
    const n = this.getCandidateNodes(), r = __privateGet(this, _e7).current !== null;
    return t && !r && n[0] === t ? (__privateGet(this, _e7).current = t.id, 0) : (t == null ? void 0 : t.id) === __privateGet(this, _e7).current ? 0 : -1;
  }
  setCurrentTabStopId(t) {
    __privateGet(this, _e7).current = t;
  }
  focusCurrentTabStop() {
    var _a7;
    const t = __privateGet(this, _e7).current;
    if (!t) return;
    const n = (_a7 = __privateGet(this, _t8).rootNode.current) == null ? void 0 : _a7.querySelector(`#${t}`);
    !n || !dt(n) || n.focus();
  }
}
_t8 = new WeakMap();
_e7 = new WeakMap();
class Us {
  constructor(t) {
    __privateAdd(this, _Us_instances);
    __privateAdd(this, _t9);
    __privateAdd(this, _e8, null);
    __privateSet(this, _t9, t), Et(() => __privateMethod(this, _Us_instances, n_fn).call(this));
  }
  run(t) {
    __privateMethod(this, _Us_instances, n_fn).call(this);
    const n = __privateGet(this, _t9).ref.current;
    if (n) {
      if (typeof n.getAnimations != "function") {
        __privateMethod(this, _Us_instances, r_fn).call(this, t);
        return;
      }
      __privateSet(this, _e8, window.requestAnimationFrame(() => {
        const r = n.getAnimations();
        if (r.length === 0) {
          __privateMethod(this, _Us_instances, r_fn).call(this, t);
          return;
        }
        Promise.allSettled(r.map((o) => o.finished)).then(() => {
          __privateMethod(this, _Us_instances, r_fn).call(this, t);
        });
      }));
    }
  }
}
_t9 = new WeakMap();
_e8 = new WeakMap();
_Us_instances = new WeakSet();
n_fn = function() {
  __privateGet(this, _e8) && (window.cancelAnimationFrame(__privateGet(this, _e8)), __privateSet(this, _e8, null));
};
r_fn = function(t) {
  const n = () => {
    t();
  };
  __privateGet(this, _t9).afterTick ? at(n) : n();
};
class kr {
  constructor(t) {
    __privateAdd(this, _t10);
    __privateAdd(this, _e9);
    __privateAdd(this, _n4);
    __privateAdd(this, _r4, I(false));
    __privateSet(this, _t10, t), m(__privateGet(this, _r4), t.open.current, true), __privateSet(this, _e9, t.enabled ?? true), __privateSet(this, _n4, new Us({ ref: __privateGet(this, _t10).ref, afterTick: __privateGet(this, _t10).open })), R(() => __privateGet(this, _t10).open.current, (n) => {
      n && m(__privateGet(this, _r4), true), __privateGet(this, _e9) && __privateGet(this, _n4).run(() => {
        var _a7, _b2;
        n === __privateGet(this, _t10).open.current && (__privateGet(this, _t10).open.current || m(__privateGet(this, _r4), false), (_b2 = (_a7 = __privateGet(this, _t10)).onComplete) == null ? void 0 : _b2.call(_a7));
      });
    });
  }
  get shouldRender() {
    return h(__privateGet(this, _r4));
  }
}
_t10 = new WeakMap();
_e9 = new WeakMap();
_n4 = new WeakMap();
_r4 = new WeakMap();
function K() {
}
function el(e4, t) {
  return `bits-${e4}`;
}
function Ys(e4, t) {
  var n = $(), r = tt(n);
  Zo(r, () => t.children, (o) => {
    var s = $(), i = tt(s);
    gt(i, () => t.children ?? mt), et(o, s);
  }), et(e4, n);
}
const qs = new bt("BitsConfig");
function Xs() {
  const e4 = new Zs(null, {});
  return qs.getOr(e4).opts;
}
class Zs {
  constructor(t, n) {
    __publicField(this, "opts");
    const r = Js(t, n);
    this.opts = { defaultPortalTo: r((o) => o.defaultPortalTo), defaultLocale: r((o) => o.defaultLocale) };
  }
}
function Js(e4, t) {
  return (n) => E(() => {
    var _a7, _b2;
    const o = (_a7 = n(t)) == null ? void 0 : _a7.current;
    if (o !== void 0) return o;
    if (e4 !== null) return (_b2 = n(e4.opts)) == null ? void 0 : _b2.current;
  });
}
function Qs(e4, t) {
  return (n) => {
    const r = Xs();
    return E(() => {
      const o = n();
      if (o !== void 0) return o;
      const s = e4(r).current;
      return s !== void 0 ? s : t;
    });
  };
}
const $s = Qs((e4) => e4.defaultPortalTo, "body");
function nl(e4, t) {
  ft(t, true);
  const n = $s(() => t.to), r = Vo();
  let o = C(s);
  function s() {
    if (!xr || t.disabled) return null;
    let u = null;
    return typeof n.current == "string" ? u = document.querySelector(n.current) : u = n.current, u;
  }
  let i;
  function a() {
    i && (Ko(i), i = null);
  }
  R([() => h(o), () => t.disabled], ([u, p]) => {
    if (!u || p) {
      a();
      return;
    }
    return i = Ho(Ys, { target: u, props: { children: t.children }, context: r }), () => {
      a();
    };
  });
  var c = $(), l = tt(c);
  {
    var d = (u) => {
      var p = $(), f = tt(p);
      gt(f, () => t.children ?? mt), et(u, p);
    };
    Yo(l, (u) => {
      t.disabled && u(d);
    });
  }
  et(e4, c), pt();
}
class ti {
  constructor(t, n = { bubbles: true, cancelable: true }) {
    __publicField(this, "eventName");
    __publicField(this, "options");
    this.eventName = t, this.options = n;
  }
  createEvent(t) {
    return new CustomEvent(this.eventName, { ...this.options, detail: t });
  }
  dispatch(t, n) {
    const r = this.createEvent(n);
    return t.dispatchEvent(r), r;
  }
  listen(t, n, r) {
    const o = (s) => {
      n(s);
    };
    return D(t, this.eventName, o, r);
  }
}
function Wn(e4, t = 500) {
  let n = null;
  const r = (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e4(...o);
    }, t);
  };
  return r.destroy = () => {
    n !== null && (clearTimeout(n), n = null);
  }, r;
}
function Tr(e4, t) {
  return e4 === t || e4.contains(t);
}
function Sr(e4) {
  return (e4 == null ? void 0 : e4.ownerDocument) ?? document;
}
function rl(e4) {
  if (!e4) return null;
  for (const t of e4.childNodes) if (t.nodeType !== Node.COMMENT_NODE) return t;
  return null;
}
function ei(e4, t) {
  const { clientX: n, clientY: r } = e4, o = t.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
const Ue = [Ns, an], ni = [ve, Ls, vr], Ar = [xe, Ds, wr], ri = [...ni, ...Ar], oi = { ltr: [...Ue, se], rtl: [...Ue, oe] }, ol = { ltr: [oe], rtl: [se] };
function si(e4) {
  return e4 === "indeterminate";
}
function ii(e4) {
  return si(e4) ? "indeterminate" : e4 ? "checked" : "unchecked";
}
function Tt(e4) {
  return e4.pointerType === "mouse";
}
function ai(e4, { select: t = false } = {}) {
  if (!e4 || !e4.focus) return;
  const n = Vt(e4);
  if (n.activeElement === e4) return;
  const r = n.activeElement;
  e4.focus({ preventScroll: true }), e4 !== r && Gs(e4) && t && e4.select();
}
function ci(e4, { select: t = false } = {}, n) {
  const r = n();
  for (const o of e4) if (ai(o, { select: t }), n() !== r) return true;
}
let Yt = I(false);
const _kt = class _kt {
  constructor() {
    Y(() => (_kt._refs === 0 && (_kt._cleanup = ir(() => {
      const t = [], n = (o) => {
        m(Yt, false);
      }, r = (o) => {
        m(Yt, true);
      };
      return t.push(D(document, "pointerdown", n, { capture: true }), D(document, "pointermove", n, { capture: true }), D(document, "keydown", r, { capture: true })), It(...t);
    })), _kt._refs++, () => {
      var _a7;
      _kt._refs--, _kt._refs === 0 && (m(Yt, false), (_a7 = _kt._cleanup) == null ? void 0 : _a7.call(_kt));
    }));
  }
  get current() {
    return h(Yt);
  }
  set current(t) {
    m(Yt, t, true);
  }
};
__publicField(_kt, "_refs", 0);
__publicField(_kt, "_cleanup");
let kt = _kt;
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Er = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Ce = Er.join(","), Or = typeof Element > "u", Nt = Or ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ke = !Or && Element.prototype.getRootNode ? function(e4) {
  var t;
  return e4 == null || (t = e4.getRootNode) === null || t === void 0 ? void 0 : t.call(e4);
} : function(e4) {
  return e4 == null ? void 0 : e4.ownerDocument;
}, Te = function e(t, n) {
  var r;
  n === void 0 && (n = true);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = o === "" || o === "true", i = s || n && t && e(t.parentNode);
  return i;
}, li = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Mr = function(t, n, r) {
  if (Te(t)) return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(Ce));
  return n && Nt.call(t, Ce) && o.unshift(t), o = o.filter(r), o;
}, Pr = function e2(t, n, r) {
  for (var o = [], s = Array.from(t); s.length; ) {
    var i = s.shift();
    if (!Te(i, false)) if (i.tagName === "SLOT") {
      var a = i.assignedElements(), c = a.length ? a : i.children, l = e2(c, true, r);
      r.flatten ? o.push.apply(o, l) : o.push({ scopeParent: i, candidates: l });
    } else {
      var d = Nt.call(i, Ce);
      d && r.filter(i) && (n || !t.includes(i)) && o.push(i);
      var u = i.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(i), p = !Te(u, false) && (!r.shadowRootFilter || r.shadowRootFilter(i));
      if (u && p) {
        var f = e2(u === true ? i.children : u.children, true, r);
        r.flatten ? o.push.apply(o, f) : o.push({ scopeParent: i, candidates: f });
      } else s.unshift.apply(s, i.children);
    }
  }
  return o;
}, Ir = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Nr = function(t) {
  if (!t) throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || li(t)) && !Ir(t) ? 0 : t.tabIndex;
}, ui = function(t, n) {
  var r = Nr(t);
  return r < 0 && n && !Ir(t) ? 0 : r;
}, di = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Fr = function(t) {
  return t.tagName === "INPUT";
}, hi = function(t) {
  return Fr(t) && t.type === "hidden";
}, fi = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, pi = function(t, n) {
  for (var r = 0; r < t.length; r++) if (t[r].checked && t[r].form === n) return t[r];
}, mi = function(t) {
  if (!t.name) return true;
  var n = t.form || ke(t), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") o = r(window.CSS.escape(t.name));
  else try {
    o = r(t.name);
  } catch (i) {
    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), false;
  }
  var s = pi(o, t.form);
  return !s || s === t;
}, gi = function(t) {
  return Fr(t) && t.type === "radio";
}, bi = function(t) {
  return gi(t) && !mi(t);
}, yi = function(t) {
  var n, r = t && ke(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, s = false;
  if (r && r !== t) {
    var i, a, c;
    for (s = !!((i = o) !== null && i !== void 0 && (a = i.ownerDocument) !== null && a !== void 0 && a.contains(o) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !s && o; ) {
      var l, d, u;
      r = ke(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, s = !!((d = o) !== null && d !== void 0 && (u = d.ownerDocument) !== null && u !== void 0 && u.contains(o));
    }
  }
  return s;
}, _n = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, wi = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden") return true;
  var s = Nt.call(t, "details>summary:first-of-type"), i = s ? t.parentElement : t;
  if (Nt.call(i, "details:not([open]) *")) return true;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var a = t; t; ) {
        var c = t.parentElement, l = ke(t);
        if (c && !c.shadowRoot && o(c) === true) return _n(t);
        t.assignedSlot ? t = t.assignedSlot : !c && l !== t.ownerDocument ? t = l.host : t = c;
      }
      t = a;
    }
    if (yi(t)) return !t.getClientRects().length;
    if (r !== "legacy-full") return true;
  } else if (r === "non-zero-area") return _n(t);
  return false;
}, vi = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for (var n = t.parentElement; n; ) {
    if (n.tagName === "FIELDSET" && n.disabled) {
      for (var r = 0; r < n.children.length; r++) {
        var o = n.children.item(r);
        if (o.tagName === "LEGEND") return Nt.call(n, "fieldset[disabled] *") ? true : !o.contains(t);
      }
      return true;
    }
    n = n.parentElement;
  }
  return false;
}, Se = function(t, n) {
  return !(n.disabled || Te(n) || hi(n) || wi(n, t) || fi(n) || vi(n));
}, Ye = function(t, n) {
  return !(bi(n) || Nr(n) < 0 || !Se(t, n));
}, xi = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Ci = function e3(t) {
  var n = [], r = [];
  return t.forEach(function(o, s) {
    var i = !!o.scopeParent, a = i ? o.scopeParent : o, c = ui(a, i), l = i ? e3(o.candidates) : a;
    c === 0 ? i ? n.push.apply(n, l) : n.push(a) : r.push({ documentOrder: s, tabIndex: c, item: o, isScope: i, content: l });
  }), r.sort(di).reduce(function(o, s) {
    return s.isScope ? o.push.apply(o, s.content) : o.push(s.content), o;
  }, []).concat(n);
}, Dr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Pr([t], n.includeContainer, { filter: Ye.bind(null, n), flatten: false, getShadowRoot: n.getShadowRoot, shadowRootFilter: xi }) : r = Mr(t, n.includeContainer, Ye.bind(null, n)), Ci(r);
}, Lr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Pr([t], n.includeContainer, { filter: Se.bind(null, n), flatten: true, getShadowRoot: n.getShadowRoot }) : r = Mr(t, n.includeContainer, Se.bind(null, n)), r;
}, cn = function(t, n) {
  if (n = n || {}, !t) throw new Error("No node provided");
  return Nt.call(t, Ce) === false ? false : Ye(n, t);
}, ki = Er.concat("iframe").join(","), Rr = function(t, n) {
  if (n = n || {}, !t) throw new Error("No node provided");
  return Nt.call(t, ki) === false ? false : Se(n, t);
};
function Qt() {
  return { getShadowRoot: true, displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none" };
}
function Ti(e4, t) {
  if (!cn(e4, Qt())) return Si(e4, t);
  const n = Vt(e4), r = Dr(n.body, Qt());
  t === "prev" && r.reverse();
  const o = r.indexOf(e4);
  return o === -1 ? n.body : r.slice(o + 1)[0];
}
function Si(e4, t) {
  const n = Vt(e4);
  if (!Rr(e4, Qt())) return n.body;
  const r = Lr(n.body, Qt());
  t === "prev" && r.reverse();
  const o = r.indexOf(e4);
  return o === -1 ? n.body : r.slice(o + 1).find((i) => cn(i, Qt())) ?? n.body;
}
function sl(e4, t) {
  return e4 >= 0 && e4 < t.length;
}
function zr(e4, t, n) {
  const r = t.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (e4.filter((b) => b.toLowerCase().startsWith(u)).length <= 1) return zr(e4, u, n);
    const f = n == null ? void 0 : n.toLowerCase();
    if (f && f.startsWith(u) && f.charAt(u.length) === " " && t.trim() === u) return n;
    const g = e4.filter((b) => b.toLowerCase().startsWith(r));
    if (g.length > 0) {
      const b = n ? e4.indexOf(n) : -1;
      return Vn(g, Math.max(b, 0)).find((S) => S !== n) || n;
    }
  }
  const s = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = s.toLowerCase(), a = n ? e4.indexOf(n) : -1;
  let c = Vn(e4, Math.max(a, 0));
  s.length === 1 && (c = c.filter((u) => u !== n));
  const d = c.find((u) => u == null ? void 0 : u.toLowerCase().startsWith(i));
  return d !== n ? d : void 0;
}
function Vn(e4, t) {
  return e4.map((n, r) => e4[(t + r) % e4.length]);
}
const Ai = { afterMs: 1e4, onChange: K };
function Br(e4, t) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...Ai, ...t };
  let s = null, i = I(Pt(e4));
  function a() {
    return o().setTimeout(() => {
      m(i, e4, true), r == null ? void 0 : r(e4);
    }, n);
  }
  return Y(() => () => {
    s && o().clearTimeout(s);
  }), E(() => h(i), (c) => {
    m(i, c, true), r == null ? void 0 : r(c), s && o().clearTimeout(s), s = a();
  });
}
class Ei {
  constructor(t) {
    __privateAdd(this, _t11);
    __privateAdd(this, _e10);
    __privateAdd(this, _n5, C(() => __privateGet(this, _t11).onMatch ? __privateGet(this, _t11).onMatch : (t) => t.focus()));
    __privateAdd(this, _r5, C(() => __privateGet(this, _t11).getCurrentItem ? __privateGet(this, _t11).getCurrentItem : __privateGet(this, _t11).getActiveElement));
    __privateSet(this, _t11, t), __privateSet(this, _e10, Br("", { afterMs: 1e3, getWindow: t.getWindow })), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(t, n) {
    var _a7, _b2;
    if (!n.length) return;
    __privateGet(this, _e10).current = __privateGet(this, _e10).current + t;
    const r = h(__privateGet(this, _r5))(), o = ((_b2 = (_a7 = n.find((c) => c === r)) == null ? void 0 : _a7.textContent) == null ? void 0 : _b2.trim()) ?? "", s = n.map((c) => {
      var _a8;
      return ((_a8 = c.textContent) == null ? void 0 : _a8.trim()) ?? "";
    }), i = zr(s, __privateGet(this, _e10).current, o), a = n.find((c) => {
      var _a8;
      return ((_a8 = c.textContent) == null ? void 0 : _a8.trim()) === i;
    });
    return a && h(__privateGet(this, _n5))(a), a;
  }
  resetTypeahead() {
    __privateGet(this, _e10).current = "";
  }
  get search() {
    return __privateGet(this, _e10).current;
  }
}
_t11 = new WeakMap();
_e10 = new WeakMap();
_n5 = new WeakMap();
_r5 = new WeakMap();
class Oi {
  constructor(t) {
    __privateAdd(this, _Oi_instances);
    __privateAdd(this, _t12);
    __privateAdd(this, _e11);
    __privateAdd(this, _n6);
    __privateAdd(this, _r6, I(null));
    __privateSet(this, _t12, t), __privateSet(this, _e11, C(() => __privateGet(this, _t12).enabled())), __privateSet(this, _n6, Br(false, { afterMs: t.transitTimeout ?? 300, onChange: (n) => {
      var _a7, _b2;
      h(__privateGet(this, _e11)) && ((_b2 = (_a7 = __privateGet(this, _t12)).setIsPointerInTransit) == null ? void 0 : _b2.call(_a7, n));
    }, getWindow: () => $t(__privateGet(this, _t12).triggerNode()) })), R([t.triggerNode, t.contentNode, t.enabled], ([n, r, o]) => {
      if (!n || !r || !o) return;
      const s = (a) => {
        __privateMethod(this, _Oi_instances, i_fn2).call(this, a, r);
      }, i = (a) => {
        __privateMethod(this, _Oi_instances, i_fn2).call(this, a, n);
      };
      return It(D(n, "pointerleave", s), D(r, "pointerleave", i));
    }), R(() => h(__privateGet(this, _r6)), () => {
      const n = (o) => {
        var _a7, _b2;
        if (!h(__privateGet(this, _r6))) return;
        const s = o.target;
        if (!Bt(s)) return;
        const i = { x: o.clientX, y: o.clientY }, a = ((_a7 = t.triggerNode()) == null ? void 0 : _a7.contains(s)) || ((_b2 = t.contentNode()) == null ? void 0 : _b2.contains(s)), c = !Ni(i, h(__privateGet(this, _r6)));
        a ? __privateMethod(this, _Oi_instances, o_fn2).call(this) : c && (__privateMethod(this, _Oi_instances, o_fn2).call(this), t.onPointerExit());
      }, r = Vt(t.triggerNode() ?? t.contentNode());
      if (r) return D(r, "pointermove", n);
    });
  }
}
_t12 = new WeakMap();
_e11 = new WeakMap();
_n6 = new WeakMap();
_r6 = new WeakMap();
_Oi_instances = new WeakSet();
o_fn2 = function() {
  m(__privateGet(this, _r6), null), __privateGet(this, _n6).current = false;
};
i_fn2 = function(t, n) {
  const r = t.currentTarget;
  if (!dt(r)) return;
  const o = { x: t.clientX, y: t.clientY }, s = Mi(o, r.getBoundingClientRect()), i = Pi(o, s), a = Ii(n.getBoundingClientRect()), c = Fi([...i, ...a]);
  m(__privateGet(this, _r6), c, true), __privateGet(this, _n6).current = true;
};
function Mi(e4, t) {
  const n = Math.abs(t.top - e4.y), r = Math.abs(t.bottom - e4.y), o = Math.abs(t.right - e4.x), s = Math.abs(t.left - e4.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Pi(e4, t, n = 5) {
  const r = n * 1.5;
  switch (t) {
    case "top":
      return [{ x: e4.x - n, y: e4.y + n }, { x: e4.x, y: e4.y - r }, { x: e4.x + n, y: e4.y + n }];
    case "bottom":
      return [{ x: e4.x - n, y: e4.y - n }, { x: e4.x, y: e4.y + r }, { x: e4.x + n, y: e4.y - n }];
    case "left":
      return [{ x: e4.x + n, y: e4.y - n }, { x: e4.x - r, y: e4.y }, { x: e4.x + n, y: e4.y + n }];
    case "right":
      return [{ x: e4.x - n, y: e4.y - n }, { x: e4.x + r, y: e4.y }, { x: e4.x - n, y: e4.y + n }];
  }
}
function Ii(e4) {
  const { top: t, right: n, bottom: r, left: o } = e4;
  return [{ x: o, y: t }, { x: n, y: t }, { x: n, y: r }, { x: o, y: r }];
}
function Ni(e4, t) {
  const { x: n, y: r } = e4;
  let o = false;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, c = t[s].y, l = t[i].x, d = t[i].y;
    c > r != d > r && n < (l - a) * (r - c) / (d - c) + a && (o = !o);
  }
  return o;
}
function Fi(e4) {
  const t = e4.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Di(t);
}
function Di(e4) {
  if (e4.length <= 1) return e4.slice();
  const t = [];
  for (let r = 0; r < e4.length; r++) {
    const o = e4[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e4.length - 1; r >= 0; r--) {
    const o = e4[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const Wr = "data-context-menu-trigger", Li = "data-context-menu-content", _r = new bt("Menu.Root"), Wt = new bt("Menu.Root | Menu.Sub"), Fe = new bt("Menu.Content"), il = new bt("Menu.CheckboxGroup"), Vr = new ti("bitsmenuopen", { bubbles: false, cancelable: true }), Ri = yr({ component: "menu", parts: ["trigger", "content", "sub-trigger", "item", "group", "group-heading", "checkbox-group", "checkbox-item", "radio-group", "radio-item", "separator", "sub-content", "arrow"] });
const _Hr = class _Hr {
  constructor(t) {
    __publicField(this, "opts");
    __publicField(this, "isUsingKeyboard", new kt());
    __privateAdd(this, _t13, I(false));
    __privateAdd(this, _e12, I(false));
    __publicField(this, "getBitsAttr", (t) => Ri.getAttr(t, this.opts.variant.current));
    this.opts = t;
  }
  static create(t) {
    const n = new _Hr(t);
    return _r.set(n);
  }
  get ignoreCloseAutoFocus() {
    return h(__privateGet(this, _t13));
  }
  set ignoreCloseAutoFocus(t) {
    m(__privateGet(this, _t13), t, true);
  }
  get isPointerInTransit() {
    return h(__privateGet(this, _e12));
  }
  set isPointerInTransit(t) {
    m(__privateGet(this, _e12), t, true);
  }
};
_t13 = new WeakMap();
_e12 = new WeakMap();
let Hr = _Hr;
const _ln = class _ln {
  constructor(t, n, r) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "parentMenu");
    __publicField(this, "contentId", E(() => ""));
    __privateAdd(this, _t14, I(null));
    __publicField(this, "contentPresence");
    __privateAdd(this, _e13, I(null));
    this.opts = t, this.root = n, this.parentMenu = r, this.contentPresence = new kr({ ref: E(() => this.contentNode), open: this.opts.open, onComplete: () => {
      this.opts.onOpenChangeComplete.current(this.opts.open.current);
    } }), r && R(() => r.opts.open.current, () => {
      r.opts.open.current || (this.opts.open.current = false);
    });
  }
  static create(t, n) {
    return Wt.set(new _ln(t, n, null));
  }
  get contentNode() {
    return h(__privateGet(this, _t14));
  }
  set contentNode(t) {
    m(__privateGet(this, _t14), t, true);
  }
  get triggerNode() {
    return h(__privateGet(this, _e13));
  }
  set triggerNode(t) {
    m(__privateGet(this, _e13), t, true);
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  onOpen() {
    this.opts.open.current = true;
  }
  onClose() {
    this.opts.open.current = false;
  }
};
_t14 = new WeakMap();
_e13 = new WeakMap();
let ln = _ln;
const _Kr = class _Kr {
  constructor(t, n) {
    __privateAdd(this, _Kr_instances);
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __publicField(this, "rovingFocusGroup");
    __publicField(this, "domContext");
    __publicField(this, "attachment");
    __privateAdd(this, _t15, I(""));
    __privateAdd(this, _e14, 0);
    __privateAdd(this, _n7);
    __privateAdd(this, _r7, I(false));
    __privateAdd(this, _o3);
    __publicField(this, "onCloseAutoFocus", (t) => {
      var _a7, _b2;
      (_b2 = (_a7 = this.opts.onCloseAutoFocus).current) == null ? void 0 : _b2.call(_a7, t), !(t.defaultPrevented || __privateGet(this, _o3)) && this.parentMenu.triggerNode && cn(this.parentMenu.triggerNode) && (t.preventDefault(), this.parentMenu.triggerNode.focus());
    });
    __privateAdd(this, _s3, C(() => ({ open: this.parentMenu.opts.open.current })));
    __privateAdd(this, _c, C(() => ({ id: this.opts.id.current, role: "menu", "aria-orientation": "vertical", [this.parentMenu.root.getBitsAttr("content")]: "", "data-state": sn(this.parentMenu.opts.open.current), onkeydown: this.onkeydown, onblur: this.onblur, onfocus: this.onfocus, dir: this.parentMenu.root.opts.dir.current, style: { pointerEvents: "auto" }, ...this.attachment })));
    __publicField(this, "popperProps", { onCloseAutoFocus: (t) => this.onCloseAutoFocus(t) });
    this.opts = t, this.parentMenu = n, this.domContext = new Ie(t.ref), this.attachment = lt(this.opts.ref, (r) => {
      this.parentMenu.contentNode !== r && (this.parentMenu.contentNode = r);
    }), n.contentId = t.id, __privateSet(this, _o3, t.isSub ?? false), this.onkeydown = this.onkeydown.bind(this), this.onblur = this.onblur.bind(this), this.onfocus = this.onfocus.bind(this), this.handleInteractOutside = this.handleInteractOutside.bind(this), new Oi({ contentNode: () => this.parentMenu.contentNode, triggerNode: () => this.parentMenu.triggerNode, enabled: () => {
      var _a7;
      return this.parentMenu.opts.open.current && !!((_a7 = this.parentMenu.triggerNode) == null ? void 0 : _a7.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger")));
    }, onPointerExit: () => {
      this.parentMenu.opts.open.current = false;
    }, setIsPointerInTransit: (r) => {
      this.parentMenu.root.isPointerInTransit = r;
    } }), __privateSet(this, _n7, new Ei({ getActiveElement: () => this.domContext.getActiveElement(), getWindow: () => this.domContext.getWindow() }).handleTypeaheadSearch), this.rovingFocusGroup = new js({ rootNode: E(() => this.parentMenu.contentNode), candidateAttr: this.parentMenu.root.getBitsAttr("item"), loop: this.opts.loop, orientation: E(() => "vertical") }), R(() => this.parentMenu.contentNode, (r) => {
      if (!r) return;
      const o = () => {
        at(() => {
          this.parentMenu.root.isUsingKeyboard.current && this.rovingFocusGroup.focusFirstCandidate();
        });
      };
      return Vr.listen(r, o);
    }), Y(() => {
      this.parentMenu.opts.open.current || this.domContext.getWindow().clearTimeout(__privateGet(this, _e14));
    });
  }
  static create(t) {
    return Fe.set(new _Kr(t, Wt.get()));
  }
  get search() {
    return h(__privateGet(this, _t15));
  }
  set search(t) {
    m(__privateGet(this, _t15), t, true);
  }
  get mounted() {
    return h(__privateGet(this, _r7));
  }
  set mounted(t) {
    m(__privateGet(this, _r7), t, true);
  }
  handleTabKeyDown(t) {
    let n = this.parentMenu;
    for (; n.parentMenu !== null; ) n = n.parentMenu;
    if (!n.triggerNode) return;
    t.preventDefault();
    const r = Ti(n.triggerNode, t.shiftKey ? "prev" : "next");
    r ? (this.parentMenu.root.ignoreCloseAutoFocus = true, n.onClose(), at(() => {
      r.focus(), at(() => {
        this.parentMenu.root.ignoreCloseAutoFocus = false;
      });
    })) : this.domContext.getDocument().body.focus();
  }
  onkeydown(t) {
    var _a7, _b2;
    if (t.defaultPrevented) return;
    if (t.key === Rs) {
      this.handleTabKeyDown(t);
      return;
    }
    const n = t.target, r = t.currentTarget;
    if (!dt(n) || !dt(r)) return;
    const o = ((_a7 = n.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)) == null ? void 0 : _a7.id) === this.parentMenu.contentId.current, s = t.ctrlKey || t.altKey || t.metaKey, i = t.key.length === 1;
    if (this.rovingFocusGroup.handleKeydown(n, t) || t.code === "Space") return;
    const c = __privateMethod(this, _Kr_instances, i_fn3).call(this);
    o && !s && i && __privateGet(this, _n7).call(this, t.key, c), ((_b2 = t.target) == null ? void 0 : _b2.id) === this.parentMenu.contentId.current && ri.includes(t.key) && (t.preventDefault(), Ar.includes(t.key) && c.reverse(), ci(c, { select: false }, () => this.domContext.getActiveElement()));
  }
  onblur(t) {
    var _a7, _b2;
    Bt(t.currentTarget) && Bt(t.target) && (((_b2 = (_a7 = t.currentTarget).contains) == null ? void 0 : _b2.call(_a7, t.target)) || (this.domContext.getWindow().clearTimeout(__privateGet(this, _e14)), this.search = ""));
  }
  onfocus(t) {
    this.parentMenu.root.isUsingKeyboard.current && at(() => this.rovingFocusGroup.focusFirstCandidate());
  }
  onItemEnter() {
    return __privateMethod(this, _Kr_instances, a_fn).call(this);
  }
  onItemLeave(t) {
    var _a7;
    if (t.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger")) || __privateMethod(this, _Kr_instances, a_fn).call(this) || this.parentMenu.root.isUsingKeyboard.current) return;
    (_a7 = this.parentMenu.contentNode) == null ? void 0 : _a7.focus(), this.rovingFocusGroup.setCurrentTabStopId("");
  }
  onTriggerLeave() {
    return !!__privateMethod(this, _Kr_instances, a_fn).call(this);
  }
  handleInteractOutside(t) {
    var _a7;
    if (!Cr(t.target)) return;
    const n = (_a7 = this.parentMenu.triggerNode) == null ? void 0 : _a7.id;
    if (t.target.id === n) {
      t.preventDefault();
      return;
    }
    t.target.closest(`#${n}`) && t.preventDefault();
  }
  get shouldRender() {
    return this.parentMenu.contentPresence.shouldRender;
  }
  get snippetProps() {
    return h(__privateGet(this, _s3));
  }
  set snippetProps(t) {
    m(__privateGet(this, _s3), t);
  }
  get props() {
    return h(__privateGet(this, _c));
  }
  set props(t) {
    m(__privateGet(this, _c), t);
  }
};
_t15 = new WeakMap();
_e14 = new WeakMap();
_n7 = new WeakMap();
_r7 = new WeakMap();
_o3 = new WeakMap();
_Kr_instances = new WeakSet();
i_fn3 = function() {
  const t = this.parentMenu.contentNode;
  return t ? Array.from(t.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`)) : [];
};
a_fn = function() {
  return this.parentMenu.root.isPointerInTransit;
};
_s3 = new WeakMap();
_c = new WeakMap();
let Kr = _Kr;
class un {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "content");
    __publicField(this, "attachment");
    __privateAdd(this, _t16, I(false));
    __privateAdd(this, _e15, C(() => ({ id: this.opts.id.current, tabindex: -1, role: "menuitem", "aria-disabled": br(this.opts.disabled.current), "data-disabled": Ne(this.opts.disabled.current), "data-highlighted": h(__privateGet(this, _t16)) ? "" : void 0, [this.content.parentMenu.root.getBitsAttr("item")]: "", onpointermove: this.onpointermove, onpointerleave: this.onpointerleave, onfocus: this.onfocus, onblur: this.onblur, ...this.attachment })));
    this.opts = t, this.content = n, this.attachment = lt(this.opts.ref), this.onpointermove = this.onpointermove.bind(this), this.onpointerleave = this.onpointerleave.bind(this), this.onfocus = this.onfocus.bind(this), this.onblur = this.onblur.bind(this);
  }
  onpointermove(t) {
    if (!t.defaultPrevented && Tt(t)) if (this.opts.disabled.current) this.content.onItemLeave(t);
    else {
      if (this.content.onItemEnter()) return;
      const r = t.currentTarget;
      if (!dt(r)) return;
      r.focus();
    }
  }
  onpointerleave(t) {
    t.defaultPrevented || Tt(t) && this.content.onItemLeave(t);
  }
  onfocus(t) {
    at(() => {
      t.defaultPrevented || this.opts.disabled.current || m(__privateGet(this, _t16), true);
    });
  }
  onblur(t) {
    at(() => {
      t.defaultPrevented || m(__privateGet(this, _t16), false);
    });
  }
  get props() {
    return h(__privateGet(this, _e15));
  }
  set props(t) {
    m(__privateGet(this, _e15), t);
  }
}
_t16 = new WeakMap();
_e15 = new WeakMap();
const _dn = class _dn {
  constructor(t, n) {
    __privateAdd(this, _dn_instances);
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "root");
    __privateAdd(this, _t17, false);
    __privateAdd(this, _n8, C(() => hr(this.item.props, { onclick: this.onclick, onpointerdown: this.onpointerdown, onpointerup: this.onpointerup, onkeydown: this.onkeydown })));
    this.opts = t, this.item = n, this.root = n.content.parentMenu.root, this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerup = this.onpointerup.bind(this);
  }
  static create(t) {
    const n = new un(t, Fe.get());
    return new _dn(t, n);
  }
  onkeydown(t) {
    const n = this.item.content.search !== "";
    if (!(this.item.opts.disabled.current || n && t.key === an) && Ue.includes(t.key)) {
      if (!dt(t.currentTarget)) return;
      t.currentTarget.click(), t.preventDefault();
    }
  }
  onclick(t) {
    this.item.opts.disabled.current || __privateMethod(this, _dn_instances, e_fn).call(this);
  }
  onpointerup(t) {
    var _a7;
    if (!t.defaultPrevented && !__privateGet(this, _t17)) {
      if (!dt(t.currentTarget)) return;
      (_a7 = t.currentTarget) == null ? void 0 : _a7.click();
    }
  }
  onpointerdown(t) {
    __privateSet(this, _t17, true);
  }
  get props() {
    return h(__privateGet(this, _n8));
  }
  set props(t) {
    m(__privateGet(this, _n8), t);
  }
};
_t17 = new WeakMap();
_dn_instances = new WeakSet();
e_fn = function() {
  if (this.item.opts.disabled.current) return;
  const t = new CustomEvent("menuitemselect", { bubbles: true, cancelable: true });
  if (this.opts.onSelect.current(t), t.defaultPrevented) {
    this.item.content.parentMenu.root.isUsingKeyboard.current = false;
    return;
  }
  this.opts.closeOnSelect.current && this.item.content.parentMenu.root.opts.onClose();
};
_n8 = new WeakMap();
let dn = _dn;
const _Gr = class _Gr {
  constructor(t, n, r, o) {
    __privateAdd(this, _Gr_instances);
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "content");
    __publicField(this, "submenu");
    __publicField(this, "attachment");
    __privateAdd(this, _t18, null);
    __privateAdd(this, _n9, C(() => hr({ "aria-haspopup": "menu", "aria-expanded": br(this.submenu.opts.open.current), "data-state": sn(this.submenu.opts.open.current), "aria-controls": this.submenu.opts.open.current ? this.submenu.contentId.current : void 0, [this.submenu.root.getBitsAttr("sub-trigger")]: "", onclick: this.onclick, onpointermove: this.onpointermove, onpointerleave: this.onpointerleave, onkeydown: this.onkeydown, ...this.attachment }, this.item.props)));
    this.opts = t, this.item = n, this.content = r, this.submenu = o, this.attachment = lt(this.opts.ref, (s) => this.submenu.triggerNode = s), this.onpointerleave = this.onpointerleave.bind(this), this.onpointermove = this.onpointermove.bind(this), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), Et(() => {
      __privateMethod(this, _Gr_instances, e_fn2).call(this);
    });
  }
  static create(t) {
    const n = Fe.get(), r = new un(t, n), o = Wt.get();
    return new _Gr(t, r, n, o);
  }
  onpointermove(t) {
    Tt(t) && !this.item.opts.disabled.current && !this.submenu.opts.open.current && !__privateGet(this, _t18) && !this.content.parentMenu.root.isPointerInTransit && __privateSet(this, _t18, this.content.domContext.setTimeout(() => {
      this.submenu.onOpen(), __privateMethod(this, _Gr_instances, e_fn2).call(this);
    }, this.opts.openDelay.current));
  }
  onpointerleave(t) {
    Tt(t) && __privateMethod(this, _Gr_instances, e_fn2).call(this);
  }
  onkeydown(t) {
    const n = this.content.search !== "";
    this.item.opts.disabled.current || n && t.key === an || oi[this.submenu.root.opts.dir.current].includes(t.key) && (t.currentTarget.click(), t.preventDefault());
  }
  onclick(t) {
    if (this.item.opts.disabled.current || !dt(t.currentTarget)) return;
    t.currentTarget.focus();
    const n = new CustomEvent("menusubtriggerselect", { bubbles: true, cancelable: true });
    this.opts.onSelect.current(n), this.submenu.opts.open.current || (this.submenu.onOpen(), at(() => {
      const r = this.submenu.contentNode;
      r && Vr.dispatch(r);
    }));
  }
  get props() {
    return h(__privateGet(this, _n9));
  }
  set props(t) {
    m(__privateGet(this, _n9), t);
  }
};
_t18 = new WeakMap();
_Gr_instances = new WeakSet();
e_fn2 = function() {
  __privateGet(this, _t18) !== null && (this.content.domContext.getWindow().clearTimeout(__privateGet(this, _t18)), __privateSet(this, _t18, null));
};
_n9 = new WeakMap();
let Gr = _Gr;
const _jr = class _jr {
  constructor(t, n, r = null) {
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "group");
    __privateAdd(this, _t19, C(() => ({ checked: this.opts.checked.current, indeterminate: this.opts.indeterminate.current })));
    __privateAdd(this, _e16, C(() => ({ ...this.item.props, role: "menuitemcheckbox", "aria-checked": Ps(this.opts.checked.current, this.opts.indeterminate.current), "data-state": ii(this.opts.checked.current), [this.item.root.getBitsAttr("checkbox-item")]: "" })));
    this.opts = t, this.item = n, this.group = r, this.group && (R(() => this.group.opts.value.current, (o) => {
      this.opts.checked.current = o.includes(this.opts.value.current);
    }), R(() => this.opts.checked.current, (o) => {
      o ? this.group.addValue(this.opts.value.current) : this.group.removeValue(this.opts.value.current);
    }));
  }
  static create(t, n) {
    const r = new dn(t, new un(t, Fe.get()));
    return new _jr(t, r, n);
  }
  toggleChecked() {
    this.opts.indeterminate.current ? (this.opts.indeterminate.current = false, this.opts.checked.current = true) : this.opts.checked.current = !this.opts.checked.current;
  }
  get snippetProps() {
    return h(__privateGet(this, _t19));
  }
  set snippetProps(t) {
    m(__privateGet(this, _t19), t);
  }
  get props() {
    return h(__privateGet(this, _e16));
  }
  set props(t) {
    m(__privateGet(this, _e16), t);
  }
};
_t19 = new WeakMap();
_e16 = new WeakMap();
let jr = _jr;
const _Ur = class _Ur {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t20, C(() => ({ id: this.opts.id.current, role: "group", [this.root.getBitsAttr("separator")]: "", ...this.attachment })));
    this.opts = t, this.root = n, this.attachment = lt(this.opts.ref);
  }
  static create(t) {
    return new _Ur(t, _r.get());
  }
  get props() {
    return h(__privateGet(this, _t20));
  }
  set props(t) {
    m(__privateGet(this, _t20), t);
  }
};
_t20 = new WeakMap();
let Ur = _Ur;
const _Yr = class _Yr {
  constructor(t, n) {
    __privateAdd(this, _Yr_instances);
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __publicField(this, "attachment");
    __privateAdd(this, _t21, I(Pt({ x: 0, y: 0 })));
    __publicField(this, "virtualElement", J({ getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...h(__privateGet(this, _t21)) }) }));
    __privateAdd(this, _e17, null);
    __privateAdd(this, _o4, C(() => ({ id: this.opts.id.current, disabled: this.opts.disabled.current, "data-disabled": Ne(this.opts.disabled.current), "data-state": sn(this.parentMenu.opts.open.current), [Wr]: "", tabindex: -1, onpointerdown: this.onpointerdown, onpointermove: this.onpointermove, onpointercancel: this.onpointercancel, onpointerup: this.onpointerup, oncontextmenu: this.oncontextmenu, ...this.attachment })));
    this.opts = t, this.parentMenu = n, this.attachment = lt(this.opts.ref, (r) => this.parentMenu.triggerNode = r), this.oncontextmenu = this.oncontextmenu.bind(this), this.onpointerdown = this.onpointerdown.bind(this), this.onpointermove = this.onpointermove.bind(this), this.onpointercancel = this.onpointercancel.bind(this), this.onpointerup = this.onpointerup.bind(this), R(() => h(__privateGet(this, _t21)), (r) => {
      this.virtualElement.current = { getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...r }) };
    }), R(() => this.opts.disabled.current, (r) => {
      r && __privateMethod(this, _Yr_instances, n_fn2).call(this);
    }), Et(() => __privateMethod(this, _Yr_instances, n_fn2).call(this));
  }
  static create(t) {
    return new _Yr(t, Wt.get());
  }
  oncontextmenu(t) {
    var _a7;
    t.defaultPrevented || this.opts.disabled.current || (__privateMethod(this, _Yr_instances, n_fn2).call(this), __privateMethod(this, _Yr_instances, r_fn2).call(this, t), t.preventDefault(), (_a7 = this.parentMenu.contentNode) == null ? void 0 : _a7.focus());
  }
  onpointerdown(t) {
    this.opts.disabled.current || Tt(t) || (__privateMethod(this, _Yr_instances, n_fn2).call(this), __privateSet(this, _e17, $t(this.opts.ref.current).setTimeout(() => __privateMethod(this, _Yr_instances, r_fn2).call(this, t), 700)));
  }
  onpointermove(t) {
    this.opts.disabled.current || Tt(t) || __privateMethod(this, _Yr_instances, n_fn2).call(this);
  }
  onpointercancel(t) {
    this.opts.disabled.current || Tt(t) || __privateMethod(this, _Yr_instances, n_fn2).call(this);
  }
  onpointerup(t) {
    this.opts.disabled.current || Tt(t) || __privateMethod(this, _Yr_instances, n_fn2).call(this);
  }
  get props() {
    return h(__privateGet(this, _o4));
  }
  set props(t) {
    m(__privateGet(this, _o4), t);
  }
};
_t21 = new WeakMap();
_e17 = new WeakMap();
_Yr_instances = new WeakSet();
n_fn2 = function() {
  __privateGet(this, _e17) !== null && $t(this.opts.ref.current).clearTimeout(__privateGet(this, _e17));
};
r_fn2 = function(t) {
  m(__privateGet(this, _t21), { x: t.clientX, y: t.clientY }, true), this.parentMenu.onOpen();
};
_o4 = new WeakMap();
let Yr = _Yr;
class al {
  static create(t) {
    const n = Wt.get();
    return Wt.set(new ln(t, n.root, n));
  }
}
globalThis.bitsDismissableLayers ?? (globalThis.bitsDismissableLayers = /* @__PURE__ */ new Map());
const _hn = class _hn {
  constructor(t) {
    __privateAdd(this, _hn_instances);
    __publicField(this, "opts");
    __privateAdd(this, _t22);
    __privateAdd(this, _e18);
    __privateAdd(this, _n10, { pointerdown: false });
    __privateAdd(this, _r8, false);
    __privateAdd(this, _o5, false);
    __privateAdd(this, _i3);
    __privateAdd(this, _a3);
    __privateAdd(this, _s4, K);
    __privateAdd(this, _c2, (t) => {
      t.defaultPrevented || this.opts.ref.current && at(() => {
        var _a7, _b2;
        !this.opts.ref.current || __privateGet(this, _g).call(this, t.target) || t.target && !__privateGet(this, _o5) && ((_b2 = (_a7 = __privateGet(this, _a3)).current) == null ? void 0 : _b2.call(_a7, t));
      });
    });
    __privateAdd(this, _u, (t) => {
      let n = t;
      n.defaultPrevented && (n = Hn(t)), __privateGet(this, _t22).current(t);
    });
    __privateAdd(this, _d, Wn((t) => {
      if (!this.opts.ref.current) {
        __privateGet(this, _s4).call(this);
        return;
      }
      const n = this.opts.isValidEvent.current(t, this.opts.ref.current) || Wi(t, this.opts.ref.current);
      if (!__privateGet(this, _r8) || __privateMethod(this, _hn_instances, b_fn).call(this) || !n) {
        __privateGet(this, _s4).call(this);
        return;
      }
      let r = t;
      if (r.defaultPrevented && (r = Hn(r)), __privateGet(this, _e18).current !== "close" && __privateGet(this, _e18).current !== "defer-otherwise-close") {
        __privateGet(this, _s4).call(this);
        return;
      }
      t.pointerType === "touch" ? (__privateGet(this, _s4).call(this), __privateSet(this, _s4, D(__privateGet(this, _i3), "click", __privateGet(this, _u), { once: true }))) : __privateGet(this, _t22).current(r);
    }, 10));
    __privateAdd(this, _f, (t) => {
      __privateGet(this, _n10)[t.type] = true;
    });
    __privateAdd(this, _h, (t) => {
      __privateGet(this, _n10)[t.type] = false;
    });
    __privateAdd(this, _m, () => {
      this.opts.ref.current && __privateSet(this, _r8, Bi(this.opts.ref.current));
    });
    __privateAdd(this, _g, (t) => this.opts.ref.current ? Tr(this.opts.ref.current, t) : false);
    __privateAdd(this, _p, Wn(() => {
      for (const t in __privateGet(this, _n10)) __privateGet(this, _n10)[t] = false;
      __privateSet(this, _r8, false);
    }, 20));
    __privateAdd(this, _y, () => {
      __privateSet(this, _o5, true);
    });
    __privateAdd(this, _w, () => {
      __privateSet(this, _o5, false);
    });
    __publicField(this, "props", { onfocuscapture: __privateGet(this, _y), onblurcapture: __privateGet(this, _w) });
    this.opts = t, __privateSet(this, _e18, t.interactOutsideBehavior), __privateSet(this, _t22, t.onInteractOutside), __privateSet(this, _a3, t.onFocusOutside), Y(() => {
      __privateSet(this, _i3, Sr(this.opts.ref.current));
    });
    let n = K;
    const r = () => {
      __privateGet(this, _p).call(this), globalThis.bitsDismissableLayers.delete(this), __privateGet(this, _d).destroy(), n();
    };
    R([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current)) return Cs(1, () => {
        this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, __privateGet(this, _e18)), n(), n = __privateMethod(this, _hn_instances, l_fn).call(this));
      }), r;
    }), Et(() => {
      __privateGet(this, _p).destroy(), globalThis.bitsDismissableLayers.delete(this), __privateGet(this, _d).destroy(), __privateGet(this, _s4).call(this), n();
    });
  }
  static create(t) {
    return new _hn(t);
  }
};
_t22 = new WeakMap();
_e18 = new WeakMap();
_n10 = new WeakMap();
_r8 = new WeakMap();
_o5 = new WeakMap();
_i3 = new WeakMap();
_a3 = new WeakMap();
_s4 = new WeakMap();
_c2 = new WeakMap();
_hn_instances = new WeakSet();
l_fn = function() {
  return It(D(__privateGet(this, _i3), "pointerdown", It(__privateGet(this, _f), __privateGet(this, _m)), { capture: true }), D(__privateGet(this, _i3), "pointerdown", It(__privateGet(this, _h), __privateGet(this, _d))), D(__privateGet(this, _i3), "focusin", __privateGet(this, _c2)));
};
_u = new WeakMap();
_d = new WeakMap();
_f = new WeakMap();
_h = new WeakMap();
_m = new WeakMap();
_g = new WeakMap();
_p = new WeakMap();
b_fn = function() {
  return Object.values(__privateGet(this, _n10)).some(Boolean);
};
_y = new WeakMap();
_w = new WeakMap();
let hn = _hn;
function zi(e4 = [...globalThis.bitsDismissableLayers]) {
  return e4.findLast(([t, { current: n }]) => n === "close" || n === "ignore");
}
function Bi(e4) {
  const t = [...globalThis.bitsDismissableLayers], n = zi(t);
  if (n) return n[0].opts.ref.current === e4;
  const [r] = t[0];
  return r.opts.ref.current === e4;
}
function Wi(e4, t) {
  const n = e4.target;
  if (!Cr(n)) return false;
  const r = !!n.closest(`[${Wr}]`);
  if ("button" in e4 && e4.button > 0 && !r) return false;
  if ("button" in e4 && e4.button === 0 && r) return true;
  const o = !!t.closest(`[${Li}]`);
  return r && o ? false : Sr(n).documentElement.contains(n) && !Tr(t, n) && ei(e4, t);
}
function Hn(e4) {
  const t = e4.currentTarget, n = e4.target;
  let r;
  e4 instanceof PointerEvent ? r = new PointerEvent(e4.type, e4) : r = new PointerEvent("pointerdown", e4);
  let o = false;
  return new Proxy(r, { get: (i, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
    o = true, typeof i.preventDefault == "function" && i.preventDefault();
  } : a === "defaultPrevented" ? o : a in i ? i[a] : e4[a] });
}
function cl(e4, t) {
  ft(t, true);
  let n = F(t, "interactOutsideBehavior", 3, "close"), r = F(t, "onInteractOutside", 3, K), o = F(t, "onFocusOutside", 3, K), s = F(t, "isValidEvent", 3, () => false);
  const i = hn.create({ id: E(() => t.id), interactOutsideBehavior: E(() => n()), onInteractOutside: E(() => r()), enabled: E(() => t.enabled), onFocusOutside: E(() => o()), isValidEvent: E(() => s()), ref: t.ref });
  var a = $(), c = tt(a);
  gt(c, () => t.children ?? mt, () => ({ props: i.props })), et(e4, a), pt();
}
globalThis.bitsEscapeLayers ?? (globalThis.bitsEscapeLayers = /* @__PURE__ */ new Map());
const _fn = class _fn {
  constructor(t) {
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _t23, () => D(this.domContext.getDocument(), "keydown", __privateGet(this, _e19), { passive: false }));
    __privateAdd(this, _e19, (t) => {
      if (t.key !== Fs || !_i(this)) return;
      const n = new KeyboardEvent(t.type, t);
      t.preventDefault();
      const r = this.opts.escapeKeydownBehavior.current;
      r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
    });
    this.opts = t, this.domContext = new Ie(this.opts.ref);
    let n = K;
    R(() => t.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, t.escapeKeydownBehavior), n = __privateGet(this, _t23).call(this)), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  static create(t) {
    return new _fn(t);
  }
};
_t23 = new WeakMap();
_e19 = new WeakMap();
let fn = _fn;
function _i(e4) {
  const t = [...globalThis.bitsEscapeLayers], n = t.findLast(([o, { current: s }]) => s === "close" || s === "ignore");
  if (n) return n[0] === e4;
  const [r] = t[0];
  return r === e4;
}
function ll(e4, t) {
  ft(t, true);
  let n = F(t, "escapeKeydownBehavior", 3, "close"), r = F(t, "onEscapeKeydown", 3, K);
  fn.create({ escapeKeydownBehavior: E(() => n()), onEscapeKeydown: E(() => r()), enabled: E(() => t.enabled), ref: t.ref });
  var o = $(), s = tt(o);
  gt(s, () => t.children ?? mt), et(e4, o), pt();
}
const _pn = class _pn {
  constructor() {
    __privateAdd(this, _t24, J([]));
    __privateAdd(this, _e20, /* @__PURE__ */ new WeakMap());
    __privateAdd(this, _n11, /* @__PURE__ */ new WeakMap());
  }
  static getInstance() {
    return this.instance || (this.instance = new _pn()), this.instance;
  }
  register(t) {
    const n = this.getActive();
    n && n !== t && n.pause();
    const r = document.activeElement;
    r && r !== document.body && __privateGet(this, _n11).set(t, r), __privateGet(this, _t24).current = __privateGet(this, _t24).current.filter((o) => o !== t), __privateGet(this, _t24).current.unshift(t);
  }
  unregister(t) {
    __privateGet(this, _t24).current = __privateGet(this, _t24).current.filter((r) => r !== t);
    const n = this.getActive();
    n && n.resume();
  }
  getActive() {
    return __privateGet(this, _t24).current[0];
  }
  setFocusMemory(t, n) {
    __privateGet(this, _e20).set(t, n);
  }
  getFocusMemory(t) {
    return __privateGet(this, _e20).get(t);
  }
  isActiveScope(t) {
    return this.getActive() === t;
  }
  setPreFocusMemory(t, n) {
    __privateGet(this, _n11).set(t, n);
  }
  getPreFocusMemory(t) {
    return __privateGet(this, _n11).get(t);
  }
  clearPreFocusMemory(t) {
    __privateGet(this, _n11).delete(t);
  }
};
_t24 = new WeakMap();
_e20 = new WeakMap();
_n11 = new WeakMap();
__publicField(_pn, "instance");
let pn = _pn;
const _mn = class _mn {
  constructor(t) {
    __privateAdd(this, _mn_instances);
    __privateAdd(this, _t25, false);
    __privateAdd(this, _e21, null);
    __privateAdd(this, _n12, pn.getInstance());
    __privateAdd(this, _r9, []);
    __privateAdd(this, _o6);
    __privateSet(this, _o6, t);
  }
  get paused() {
    return __privateGet(this, _t25);
  }
  pause() {
    __privateSet(this, _t25, true);
  }
  resume() {
    __privateSet(this, _t25, false);
  }
  mount(t) {
    __privateGet(this, _e21) && this.unmount(), __privateSet(this, _e21, t), __privateGet(this, _n12).register(this), __privateMethod(this, _mn_instances, c_fn).call(this), __privateMethod(this, _mn_instances, a_fn2).call(this);
  }
  unmount() {
    __privateGet(this, _e21) && (__privateMethod(this, _mn_instances, i_fn4).call(this), __privateMethod(this, _mn_instances, s_fn).call(this), __privateGet(this, _n12).unregister(this), __privateGet(this, _n12).clearPreFocusMemory(this), __privateSet(this, _e21, null));
  }
  static use(t) {
    let n = null;
    return R([() => t.ref.current, () => t.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new _mn(t)), n.mount(r)) : n && (n.unmount(), n = null);
    }), Et(() => {
      n == null ? void 0 : n.unmount();
    }), { get props() {
      return { tabindex: -1 };
    } };
  }
};
_t25 = new WeakMap();
_e21 = new WeakMap();
_n12 = new WeakMap();
_r9 = new WeakMap();
_o6 = new WeakMap();
_mn_instances = new WeakSet();
i_fn4 = function() {
  for (const t of __privateGet(this, _r9)) t();
  __privateSet(this, _r9, []);
};
a_fn2 = function() {
  if (!__privateGet(this, _e21)) return;
  const t = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });
  __privateGet(this, _o6).onOpenAutoFocus.current(t), t.defaultPrevented || requestAnimationFrame(() => {
    if (!__privateGet(this, _e21)) return;
    const n = __privateMethod(this, _mn_instances, u_fn).call(this);
    n ? (n.focus(), __privateGet(this, _n12).setFocusMemory(this, n)) : __privateGet(this, _e21).focus();
  });
};
s_fn = function() {
  var _a7, _b2;
  const t = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });
  if ((_b2 = (_a7 = __privateGet(this, _o6).onCloseAutoFocus).current) == null ? void 0 : _b2.call(_a7, t), !t.defaultPrevented) {
    const n = __privateGet(this, _n12).getPreFocusMemory(this);
    if (n && document.contains(n)) try {
      n.focus();
    } catch {
      document.body.focus();
    }
  }
};
c_fn = function() {
  if (!__privateGet(this, _e21) || !__privateGet(this, _o6).trap.current) return;
  const t = __privateGet(this, _e21), n = t.ownerDocument, r = (i) => {
    if (__privateGet(this, _t25) || !__privateGet(this, _n12).isActiveScope(this)) return;
    const a = i.target;
    if (!a) return;
    if (t.contains(a)) __privateGet(this, _n12).setFocusMemory(this, a);
    else {
      const l = __privateGet(this, _n12).getFocusMemory(this);
      if (l && t.contains(l) && Rr(l)) i.preventDefault(), l.focus();
      else {
        const d = __privateMethod(this, _mn_instances, u_fn).call(this), u = __privateMethod(this, _mn_instances, d_fn).call(this)[0];
        (d || u || t).focus();
      }
    }
  }, o = (i) => {
    if (!__privateGet(this, _o6).loop || __privateGet(this, _t25) || i.key !== "Tab" || !__privateGet(this, _n12).isActiveScope(this)) return;
    const a = __privateMethod(this, _mn_instances, l_fn2).call(this);
    if (a.length < 2) return;
    const c = a[0], l = a[a.length - 1];
    !i.shiftKey && n.activeElement === l ? (i.preventDefault(), c.focus()) : i.shiftKey && n.activeElement === c && (i.preventDefault(), l.focus());
  };
  __privateGet(this, _r9).push(D(n, "focusin", r, { capture: true }), D(t, "keydown", o));
  const s = new MutationObserver(() => {
    const i = __privateGet(this, _n12).getFocusMemory(this);
    if (i && !t.contains(i)) {
      const a = __privateMethod(this, _mn_instances, u_fn).call(this), c = __privateMethod(this, _mn_instances, d_fn).call(this)[0], l = a || c;
      l ? (l.focus(), __privateGet(this, _n12).setFocusMemory(this, l)) : t.focus();
    }
  });
  s.observe(t, { childList: true, subtree: true }), __privateGet(this, _r9).push(() => s.disconnect());
};
l_fn2 = function() {
  return __privateGet(this, _e21) ? Dr(__privateGet(this, _e21), { includeContainer: false, getShadowRoot: true }) : [];
};
u_fn = function() {
  return __privateMethod(this, _mn_instances, l_fn2).call(this)[0] || null;
};
d_fn = function() {
  return __privateGet(this, _e21) ? Lr(__privateGet(this, _e21), { includeContainer: false, getShadowRoot: true }) : [];
};
let mn = _mn;
function ul(e4, t) {
  ft(t, true);
  let n = F(t, "enabled", 3, false), r = F(t, "trapFocus", 3, false), o = F(t, "loop", 3, false), s = F(t, "onCloseAutoFocus", 3, K), i = F(t, "onOpenAutoFocus", 3, K);
  const a = mn.use({ enabled: E(() => n()), trap: E(() => r()), loop: o(), onCloseAutoFocus: E(() => s()), onOpenAutoFocus: E(() => i()), ref: t.ref });
  var c = $(), l = tt(c);
  gt(l, () => t.focusScope ?? mt, () => ({ props: a.props })), et(e4, c), pt();
}
globalThis.bitsTextSelectionLayers ?? (globalThis.bitsTextSelectionLayers = /* @__PURE__ */ new Map());
const _gn = class _gn {
  constructor(t) {
    __privateAdd(this, _gn_instances);
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _t26, K);
    __privateAdd(this, _n13, (t) => {
      const n = this.opts.ref.current, r = t.target;
      !dt(n) || !dt(r) || !this.opts.enabled.current || !Hi(this) || !Os(n, r) || (this.opts.onPointerDown.current(t), !t.defaultPrevented && __privateSet(this, _t26, Vi(n, this.domContext.getDocument().body)));
    });
    __privateAdd(this, _r10, () => {
      __privateGet(this, _t26).call(this), __privateSet(this, _t26, K);
    });
    this.opts = t, this.domContext = new Ie(t.ref);
    let n = K;
    R(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = __privateMethod(this, _gn_instances, e_fn3).call(this)), () => {
      n(), __privateGet(this, _r10).call(this), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  static create(t) {
    return new _gn(t);
  }
};
_t26 = new WeakMap();
_gn_instances = new WeakSet();
e_fn3 = function() {
  return It(D(this.domContext.getDocument(), "pointerdown", __privateGet(this, _n13)), D(this.domContext.getDocument(), "pointerup", lr(__privateGet(this, _r10), this.opts.onPointerUp.current)));
};
_n13 = new WeakMap();
_r10 = new WeakMap();
let gn = _gn;
const Kn = (e4) => e4.style.userSelect || e4.style.webkitUserSelect;
function Vi(e4, t) {
  const n = Kn(t), r = Kn(e4);
  return he(t, "none"), he(e4, "text"), () => {
    he(t, n), he(e4, r);
  };
}
function he(e4, t) {
  e4.style.userSelect = t, e4.style.webkitUserSelect = t;
}
function Hi(e4) {
  const t = [...globalThis.bitsTextSelectionLayers];
  if (!t.length) return false;
  const n = t.at(-1);
  return n ? n[0] === e4 : false;
}
function dl(e4, t) {
  ft(t, true);
  let n = F(t, "preventOverflowTextSelection", 3, true), r = F(t, "onPointerDown", 3, K), o = F(t, "onPointerUp", 3, K);
  gn.create({ id: E(() => t.id), onPointerDown: E(() => r()), onPointerUp: E(() => o()), enabled: E(() => t.enabled && n()), ref: t.ref });
  var s = $(), i = tt(s);
  gt(i, () => t.children ?? mt), et(e4, s), pt();
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function qr(e4 = "bits") {
  return globalThis.bitsIdCounter.current++, `${e4}-${globalThis.bitsIdCounter.current}`;
}
class Ki {
  constructor(t) {
    __privateAdd(this, _Ki_instances);
    __privateAdd(this, _t27);
    __privateAdd(this, _e22, 0);
    __privateAdd(this, _n14, I());
    __privateAdd(this, _r11);
    __privateSet(this, _t27, t);
  }
  get(...t) {
    return __privateSet(this, _e22, __privateGet(this, _e22) + 1), h(__privateGet(this, _n14)) === void 0 && __privateSet(this, _r11, ir(() => {
      m(__privateGet(this, _n14), __privateGet(this, _t27).call(this, ...t), true);
    })), Y(() => () => {
      __privateMethod(this, _Ki_instances, o_fn3).call(this);
    }), h(__privateGet(this, _n14));
  }
}
_t27 = new WeakMap();
_e22 = new WeakMap();
_n14 = new WeakMap();
_r11 = new WeakMap();
_Ki_instances = new WeakSet();
o_fn3 = function() {
  __privateSet(this, _e22, __privateGet(this, _e22) - 1), __privateGet(this, _r11) && __privateGet(this, _e22) <= 0 && (__privateGet(this, _r11).call(this), m(__privateGet(this, _n14), void 0), __privateSet(this, _r11, void 0));
};
const ye = new Jo();
let fe = I(null), We = null, qt = null, Xt = false;
const Gn = E(() => {
  for (const e4 of ye.values()) if (e4) return true;
  return false;
});
let _e = null;
const Gi = new Ki(() => {
  function e4() {
    document.body.setAttribute("style", h(fe) ?? ""), document.body.style.removeProperty("--scrollbar-width"), Bn && (We == null ? void 0 : We()), m(fe, null);
  }
  function t() {
    qt !== null && (window.clearTimeout(qt), qt = null);
  }
  function n(o, s) {
    t(), Xt = true, _e = Date.now();
    const i = _e, a = () => {
      qt = null, _e === i && (Xr(ye) ? Xt = false : (Xt = false, s()));
    }, c = o === null ? 24 : o;
    qt = window.setTimeout(a, c);
  }
  function r() {
    h(fe) === null && ye.size === 0 && !Xt && m(fe, document.body.getAttribute("style"), true);
  }
  return R(() => Gn.current, () => {
    var _a7, _b2;
    if (!Gn.current) return;
    r(), Xt = false;
    const o = getComputedStyle(document.documentElement), s = getComputedStyle(document.body), i = ((_a7 = o.scrollbarGutter) == null ? void 0 : _a7.includes("stable")) || ((_b2 = s.scrollbarGutter) == null ? void 0 : _b2.includes("stable")), a = window.innerWidth - document.documentElement.clientWidth, l = { padding: Number.parseInt(s.paddingRight ?? "0", 10) + a, margin: Number.parseInt(s.marginRight ?? "0", 10) };
    a > 0 && !i && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", Bn && (We = D(document, "touchmove", (d) => {
      d.target === document.documentElement && (d.touches.length > 1 || d.preventDefault());
    }, { passive: false })), at(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), Et(() => () => {
    We == null ? void 0 : We();
  }), { get lockMap() {
    return ye;
  }, resetBodyStyle: e4, scheduleCleanupIfNoNewLocks: n, cancelPendingCleanup: t, ensureInitialStyleCaptured: r };
});
class ji {
  constructor(t, n = () => null) {
    __privateAdd(this, _t28, qr());
    __privateAdd(this, _e23);
    __privateAdd(this, _n15, () => null);
    __privateAdd(this, _r12);
    __publicField(this, "locked");
    __privateSet(this, _e23, t), __privateSet(this, _n15, n), __privateSet(this, _r12, Gi.get()), __privateGet(this, _r12) && (__privateGet(this, _r12).cancelPendingCleanup(), __privateGet(this, _r12).ensureInitialStyleCaptured(), __privateGet(this, _r12).lockMap.set(__privateGet(this, _t28), __privateGet(this, _e23) ?? false), this.locked = E(() => __privateGet(this, _r12).lockMap.get(__privateGet(this, _t28)) ?? false, (r) => __privateGet(this, _r12).lockMap.set(__privateGet(this, _t28), r)), Et(() => {
      if (__privateGet(this, _r12).lockMap.delete(__privateGet(this, _t28)), Xr(__privateGet(this, _r12).lockMap)) return;
      const r = __privateGet(this, _n15).call(this);
      __privateGet(this, _r12).scheduleCleanupIfNoNewLocks(r, () => {
        __privateGet(this, _r12).resetBodyStyle();
      });
    }));
  }
}
_t28 = new WeakMap();
_e23 = new WeakMap();
_n15 = new WeakMap();
_r12 = new WeakMap();
function Xr(e4) {
  for (const [t, n] of e4) if (n) return true;
  return false;
}
function hl(e4, t) {
  ft(t, true);
  let n = F(t, "preventScroll", 3, true), r = F(t, "restoreScrollDelay", 3, null);
  n() && new ji(n(), () => r()), pt();
}
const Ui = ["top", "right", "bottom", "left"], St = Math.min, Z = Math.max, Ae = Math.round, pe = Math.floor, ut = (e4) => ({ x: e4, y: e4 }), Yi = { left: "right", right: "left", bottom: "top", top: "bottom" }, qi = { start: "end", end: "start" };
function qe(e4, t, n) {
  return Z(e4, St(t, n));
}
function vt(e4, t) {
  return typeof e4 == "function" ? e4(t) : e4;
}
function xt(e4) {
  return e4.split("-")[0];
}
function Ht(e4) {
  return e4.split("-")[1];
}
function bn(e4) {
  return e4 === "x" ? "y" : "x";
}
function yn(e4) {
  return e4 === "y" ? "height" : "width";
}
const Xi = /* @__PURE__ */ new Set(["top", "bottom"]);
function ct(e4) {
  return Xi.has(xt(e4)) ? "y" : "x";
}
function wn(e4) {
  return bn(ct(e4));
}
function Zi(e4, t, n) {
  n === void 0 && (n = false);
  const r = Ht(e4), o = wn(e4), s = yn(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Ee(i)), [i, Ee(i)];
}
function Ji(e4) {
  const t = Ee(e4);
  return [Xe(e4), t, Xe(t)];
}
function Xe(e4) {
  return e4.replace(/start|end/g, (t) => qi[t]);
}
const jn = ["left", "right"], Un = ["right", "left"], Qi = ["top", "bottom"], $i = ["bottom", "top"];
function ta(e4, t, n) {
  switch (e4) {
    case "top":
    case "bottom":
      return n ? t ? Un : jn : t ? jn : Un;
    case "left":
    case "right":
      return t ? Qi : $i;
    default:
      return [];
  }
}
function ea(e4, t, n, r) {
  const o = Ht(e4);
  let s = ta(xt(e4), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Xe)))), s;
}
function Ee(e4) {
  return e4.replace(/left|right|bottom|top/g, (t) => Yi[t]);
}
function na(e4) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e4 };
}
function Zr(e4) {
  return typeof e4 != "number" ? na(e4) : { top: e4, right: e4, bottom: e4, left: e4 };
}
function Oe(e4) {
  const { x: t, y: n, width: r, height: o } = e4;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function Yn(e4, t, n) {
  let { reference: r, floating: o } = e4;
  const s = ct(t), i = wn(t), a = yn(i), c = xt(t), l = s === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
  let f;
  switch (c) {
    case "top":
      f = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      f = { x: d, y: r.y + r.height };
      break;
    case "right":
      f = { x: r.x + r.width, y: u };
      break;
    case "left":
      f = { x: r.x - o.width, y: u };
      break;
    default:
      f = { x: r.x, y: r.y };
  }
  switch (Ht(t)) {
    case "start":
      f[i] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      f[i] += p * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const ra = async (e4, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: i } = n, a = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({ reference: e4, floating: t, strategy: o }), { x: d, y: u } = Yn(l, r, c), p = r, f = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: k, fn: T } = a[b], { x: S, y: A, data: P, reset: M } = await T({ x: d, y: u, initialPlacement: r, placement: p, strategy: o, middlewareData: f, rects: l, platform: i, elements: { reference: e4, floating: t } });
    d = S ?? d, u = A ?? u, f = { ...f, [k]: { ...f[k], ...P } }, M && g <= 50 && (g++, typeof M == "object" && (M.placement && (p = M.placement), M.rects && (l = M.rects === true ? await i.getElementRects({ reference: e4, floating: t, strategy: o }) : M.rects), { x: d, y: u } = Yn(l, p, c)), b = -1);
  }
  return { x: d, y: u, placement: p, strategy: o, middlewareData: f };
};
async function te(e4, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: c } = e4, { boundary: l = "clippingAncestors", rootBoundary: d = "viewport", elementContext: u = "floating", altBoundary: p = false, padding: f = 0 } = vt(t, e4), g = Zr(f), k = a[p ? u === "floating" ? "reference" : "floating" : u], T = Oe(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(k))) == null || n ? k : k.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)), boundary: l, rootBoundary: d, strategy: c })), S = u === "floating" ? { x: r, y: o, width: i.floating.width, height: i.floating.height } : i.reference, A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), P = await (s.isElement == null ? void 0 : s.isElement(A)) ? await (s.getScale == null ? void 0 : s.getScale(A)) || { x: 1, y: 1 } : { x: 1, y: 1 }, M = Oe(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: S, offsetParent: A, strategy: c }) : S);
  return { top: (T.top - M.top + g.top) / P.y, bottom: (M.bottom - T.bottom + g.bottom) / P.y, left: (T.left - M.left + g.left) / P.x, right: (M.right - T.right + g.right) / P.x };
}
const oa = (e4) => ({ name: "arrow", options: e4, async fn(t) {
  const { x: n, y: r, placement: o, rects: s, platform: i, elements: a, middlewareData: c } = t, { element: l, padding: d = 0 } = vt(e4, t) || {};
  if (l == null) return {};
  const u = Zr(d), p = { x: n, y: r }, f = wn(o), g = yn(f), b = await i.getDimensions(l), k = f === "y", T = k ? "top" : "left", S = k ? "bottom" : "right", A = k ? "clientHeight" : "clientWidth", P = s.reference[g] + s.reference[f] - p[f] - s.floating[g], M = p[f] - s.reference[f], L = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
  let N = L ? L[A] : 0;
  (!N || !await (i.isElement == null ? void 0 : i.isElement(L))) && (N = a.floating[A] || s.floating[g]);
  const x = P / 2 - M / 2, z = N / 2 - b[g] / 2 - 1, G = St(u[T], z), nt = St(u[S], z), j = G, rt = N - b[g] - nt, B = N / 2 - b[g] / 2 + x, q = qe(j, B, rt), W = !c.arrow && Ht(o) != null && B !== q && s.reference[g] / 2 - (B < j ? G : nt) - b[g] / 2 < 0, _ = W ? B < j ? B - j : B - rt : 0;
  return { [f]: p[f] + _, data: { [f]: q, centerOffset: B - q - _, ...W && { alignmentOffset: _ } }, reset: W };
} }), sa = function(e4) {
  return e4 === void 0 && (e4 = {}), { name: "flip", options: e4, async fn(t) {
    var n, r;
    const { placement: o, middlewareData: s, rects: i, initialPlacement: a, platform: c, elements: l } = t, { mainAxis: d = true, crossAxis: u = true, fallbackPlacements: p, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: b = true, ...k } = vt(e4, t);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const T = xt(o), S = ct(a), A = xt(a) === a, P = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), M = p || (A || !b ? [Ee(a)] : Ji(a)), L = g !== "none";
    !p && L && M.push(...ea(a, b, g, P));
    const N = [a, ...M], x = await te(t, k), z = [];
    let G = ((r = s.flip) == null ? void 0 : r.overflows) || [];
    if (d && z.push(x[T]), u) {
      const B = Zi(o, i, P);
      z.push(x[B[0]], x[B[1]]);
    }
    if (G = [...G, { placement: o, overflows: z }], !z.every((B) => B <= 0)) {
      var nt, j;
      const B = (((nt = s.flip) == null ? void 0 : nt.index) || 0) + 1, q = N[B];
      if (q && (!(u === "alignment" ? S !== ct(q) : false) || G.every((v) => v.overflows[0] > 0 && ct(v.placement) === S))) return { data: { index: B, overflows: G }, reset: { placement: q } };
      let W = (j = G.filter((_) => _.overflows[0] <= 0).sort((_, v) => _.overflows[1] - v.overflows[1])[0]) == null ? void 0 : j.placement;
      if (!W) switch (f) {
        case "bestFit": {
          var rt;
          const _ = (rt = G.filter((v) => {
            if (L) {
              const ot = ct(v.placement);
              return ot === S || ot === "y";
            }
            return true;
          }).map((v) => [v.placement, v.overflows.filter((ot) => ot > 0).reduce((ot, ae) => ot + ae, 0)]).sort((v, ot) => v[1] - ot[1])[0]) == null ? void 0 : rt[0];
          _ && (W = _);
          break;
        }
        case "initialPlacement":
          W = a;
          break;
      }
      if (o !== W) return { reset: { placement: W } };
    }
    return {};
  } };
};
function qn(e4, t) {
  return { top: e4.top - t.height, right: e4.right - t.width, bottom: e4.bottom - t.height, left: e4.left - t.width };
}
function Xn(e4) {
  return Ui.some((t) => e4[t] >= 0);
}
const ia = function(e4) {
  return e4 === void 0 && (e4 = {}), { name: "hide", options: e4, async fn(t) {
    const { rects: n } = t, { strategy: r = "referenceHidden", ...o } = vt(e4, t);
    switch (r) {
      case "referenceHidden": {
        const s = await te(t, { ...o, elementContext: "reference" }), i = qn(s, n.reference);
        return { data: { referenceHiddenOffsets: i, referenceHidden: Xn(i) } };
      }
      case "escaped": {
        const s = await te(t, { ...o, altBoundary: true }), i = qn(s, n.floating);
        return { data: { escapedOffsets: i, escaped: Xn(i) } };
      }
      default:
        return {};
    }
  } };
}, Jr = /* @__PURE__ */ new Set(["left", "top"]);
async function aa(e4, t) {
  const { placement: n, platform: r, elements: o } = e4, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = xt(n), a = Ht(n), c = ct(n) === "y", l = Jr.has(i) ? -1 : 1, d = s && c ? -1 : 1, u = vt(t, e4);
  let { mainAxis: p, crossAxis: f, alignmentAxis: g } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return a && typeof g == "number" && (f = a === "end" ? g * -1 : g), c ? { x: f * d, y: p * l } : { x: p * l, y: f * d };
}
const ca = function(e4) {
  return e4 === void 0 && (e4 = 0), { name: "offset", options: e4, async fn(t) {
    var n, r;
    const { x: o, y: s, placement: i, middlewareData: a } = t, c = await aa(t, e4);
    return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : { x: o + c.x, y: s + c.y, data: { ...c, placement: i } };
  } };
}, la = function(e4) {
  return e4 === void 0 && (e4 = {}), { name: "shift", options: e4, async fn(t) {
    const { x: n, y: r, placement: o } = t, { mainAxis: s = true, crossAxis: i = false, limiter: a = { fn: (k) => {
      let { x: T, y: S } = k;
      return { x: T, y: S };
    } }, ...c } = vt(e4, t), l = { x: n, y: r }, d = await te(t, c), u = ct(xt(o)), p = bn(u);
    let f = l[p], g = l[u];
    if (s) {
      const k = p === "y" ? "top" : "left", T = p === "y" ? "bottom" : "right", S = f + d[k], A = f - d[T];
      f = qe(S, f, A);
    }
    if (i) {
      const k = u === "y" ? "top" : "left", T = u === "y" ? "bottom" : "right", S = g + d[k], A = g - d[T];
      g = qe(S, g, A);
    }
    const b = a.fn({ ...t, [p]: f, [u]: g });
    return { ...b, data: { x: b.x - n, y: b.y - r, enabled: { [p]: s, [u]: i } } };
  } };
}, ua = function(e4) {
  return e4 === void 0 && (e4 = {}), { options: e4, fn(t) {
    const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t, { offset: a = 0, mainAxis: c = true, crossAxis: l = true } = vt(e4, t), d = { x: n, y: r }, u = ct(o), p = bn(u);
    let f = d[p], g = d[u];
    const b = vt(a, t), k = typeof b == "number" ? { mainAxis: b, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...b };
    if (c) {
      const A = p === "y" ? "height" : "width", P = s.reference[p] - s.floating[A] + k.mainAxis, M = s.reference[p] + s.reference[A] - k.mainAxis;
      f < P ? f = P : f > M && (f = M);
    }
    if (l) {
      var T, S;
      const A = p === "y" ? "width" : "height", P = Jr.has(xt(o)), M = s.reference[u] - s.floating[A] + (P && ((T = i.offset) == null ? void 0 : T[u]) || 0) + (P ? 0 : k.crossAxis), L = s.reference[u] + s.reference[A] + (P ? 0 : ((S = i.offset) == null ? void 0 : S[u]) || 0) - (P ? k.crossAxis : 0);
      g < M ? g = M : g > L && (g = L);
    }
    return { [p]: f, [u]: g };
  } };
}, da = function(e4) {
  return e4 === void 0 && (e4 = {}), { name: "size", options: e4, async fn(t) {
    var n, r;
    const { placement: o, rects: s, platform: i, elements: a } = t, { apply: c = () => {
    }, ...l } = vt(e4, t), d = await te(t, l), u = xt(o), p = Ht(o), f = ct(o) === "y", { width: g, height: b } = s.floating;
    let k, T;
    u === "top" || u === "bottom" ? (k = u, T = p === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (T = u, k = p === "end" ? "top" : "bottom");
    const S = b - d.top - d.bottom, A = g - d.left - d.right, P = St(b - d[k], S), M = St(g - d[T], A), L = !t.middlewareData.shift;
    let N = P, x = M;
    if ((n = t.middlewareData.shift) != null && n.enabled.x && (x = A), (r = t.middlewareData.shift) != null && r.enabled.y && (N = S), L && !p) {
      const G = Z(d.left, 0), nt = Z(d.right, 0), j = Z(d.top, 0), rt = Z(d.bottom, 0);
      f ? x = g - 2 * (G !== 0 || nt !== 0 ? G + nt : Z(d.left, d.right)) : N = b - 2 * (j !== 0 || rt !== 0 ? j + rt : Z(d.top, d.bottom));
    }
    await c({ ...t, availableWidth: x, availableHeight: N });
    const z = await i.getDimensions(a.floating);
    return g !== z.width || b !== z.height ? { reset: { rects: true } } : {};
  } };
};
function De() {
  return typeof window < "u";
}
function Kt(e4) {
  return Qr(e4) ? (e4.nodeName || "").toLowerCase() : "#document";
}
function Q(e4) {
  var t;
  return (e4 == null || (t = e4.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yt(e4) {
  var t;
  return (t = (Qr(e4) ? e4.ownerDocument : e4.document) || window.document) == null ? void 0 : t.documentElement;
}
function Qr(e4) {
  return De() ? e4 instanceof Node || e4 instanceof Q(e4).Node : false;
}
function st(e4) {
  return De() ? e4 instanceof Element || e4 instanceof Q(e4).Element : false;
}
function ht(e4) {
  return De() ? e4 instanceof HTMLElement || e4 instanceof Q(e4).HTMLElement : false;
}
function Zn(e4) {
  return !De() || typeof ShadowRoot > "u" ? false : e4 instanceof ShadowRoot || e4 instanceof Q(e4).ShadowRoot;
}
const ha = /* @__PURE__ */ new Set(["inline", "contents"]);
function ie(e4) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = it(e4);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ha.has(o);
}
const fa = /* @__PURE__ */ new Set(["table", "td", "th"]);
function pa(e4) {
  return fa.has(Kt(e4));
}
const ma = [":popover-open", ":modal"];
function Le(e4) {
  return ma.some((t) => {
    try {
      return e4.matches(t);
    } catch {
      return false;
    }
  });
}
const ga = ["transform", "translate", "scale", "rotate", "perspective"], ba = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ya = ["paint", "layout", "strict", "content"];
function vn(e4) {
  const t = xn(), n = st(e4) ? it(e4) : e4;
  return ga.some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || ba.some((r) => (n.willChange || "").includes(r)) || ya.some((r) => (n.contain || "").includes(r));
}
function wa(e4) {
  let t = At(e4);
  for (; ht(t) && !_t(t); ) {
    if (vn(t)) return t;
    if (Le(t)) return null;
    t = At(t);
  }
  return null;
}
function xn() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const va = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function _t(e4) {
  return va.has(Kt(e4));
}
function it(e4) {
  return Q(e4).getComputedStyle(e4);
}
function Re(e4) {
  return st(e4) ? { scrollLeft: e4.scrollLeft, scrollTop: e4.scrollTop } : { scrollLeft: e4.scrollX, scrollTop: e4.scrollY };
}
function At(e4) {
  if (Kt(e4) === "html") return e4;
  const t = e4.assignedSlot || e4.parentNode || Zn(e4) && e4.host || yt(e4);
  return Zn(t) ? t.host : t;
}
function $r(e4) {
  const t = At(e4);
  return _t(t) ? e4.ownerDocument ? e4.ownerDocument.body : e4.body : ht(t) && ie(t) ? t : $r(t);
}
function ee(e4, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const o = $r(e4), s = o === ((r = e4.ownerDocument) == null ? void 0 : r.body), i = Q(o);
  if (s) {
    const a = Ze(i);
    return t.concat(i, i.visualViewport || [], ie(o) ? o : [], a && n ? ee(a) : []);
  }
  return t.concat(o, ee(o, [], n));
}
function Ze(e4) {
  return e4.parent && Object.getPrototypeOf(e4.parent) ? e4.frameElement : null;
}
function to(e4) {
  const t = it(e4);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ht(e4), s = o ? e4.offsetWidth : n, i = o ? e4.offsetHeight : r, a = Ae(n) !== s || Ae(r) !== i;
  return a && (n = s, r = i), { width: n, height: r, $: a };
}
function Cn(e4) {
  return st(e4) ? e4 : e4.contextElement;
}
function Rt(e4) {
  const t = Cn(e4);
  if (!ht(t)) return ut(1);
  const n = t.getBoundingClientRect(), { width: r, height: o, $: s } = to(t);
  let i = (s ? Ae(n.width) : n.width) / r, a = (s ? Ae(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: i, y: a };
}
const xa = ut(0);
function eo(e4) {
  const t = Q(e4);
  return !xn() || !t.visualViewport ? xa : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Ca(e4, t, n) {
  return t === void 0 && (t = false), !n || t && n !== Q(e4) ? false : t;
}
function Ft(e4, t, n, r) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const o = e4.getBoundingClientRect(), s = Cn(e4);
  let i = ut(1);
  t && (r ? st(r) && (i = Rt(r)) : i = Rt(e4));
  const a = Ca(s, n, r) ? eo(s) : ut(0);
  let c = (o.left + a.x) / i.x, l = (o.top + a.y) / i.y, d = o.width / i.x, u = o.height / i.y;
  if (s) {
    const p = Q(s), f = r && st(r) ? Q(r) : r;
    let g = p, b = Ze(g);
    for (; b && r && f !== g; ) {
      const k = Rt(b), T = b.getBoundingClientRect(), S = it(b), A = T.left + (b.clientLeft + parseFloat(S.paddingLeft)) * k.x, P = T.top + (b.clientTop + parseFloat(S.paddingTop)) * k.y;
      c *= k.x, l *= k.y, d *= k.x, u *= k.y, c += A, l += P, g = Q(b), b = Ze(g);
    }
  }
  return Oe({ width: d, height: u, x: c, y: l });
}
function kn(e4, t) {
  const n = Re(e4).scrollLeft;
  return t ? t.left + n : Ft(yt(e4)).left + n;
}
function no(e4, t, n) {
  n === void 0 && (n = false);
  const r = e4.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : kn(e4, r)), s = r.top + t.scrollTop;
  return { x: o, y: s };
}
function ka(e4) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e4;
  const s = o === "fixed", i = yt(r), a = t ? Le(t.floating) : false;
  if (r === i || a && s) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, l = ut(1);
  const d = ut(0), u = ht(r);
  if ((u || !u && !s) && ((Kt(r) !== "body" || ie(i)) && (c = Re(r)), ht(r))) {
    const f = Ft(r);
    l = Rt(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop;
  }
  const p = i && !u && !s ? no(i, c, true) : ut(0);
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - c.scrollLeft * l.x + d.x + p.x, y: n.y * l.y - c.scrollTop * l.y + d.y + p.y };
}
function Ta(e4) {
  return Array.from(e4.getClientRects());
}
function Sa(e4) {
  const t = yt(e4), n = Re(e4), r = e4.ownerDocument.body, o = Z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + kn(e4);
  const a = -n.scrollTop;
  return it(r).direction === "rtl" && (i += Z(t.clientWidth, r.clientWidth) - o), { width: o, height: s, x: i, y: a };
}
function Aa(e4, t) {
  const n = Q(e4), r = yt(e4), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, c = 0;
  if (o) {
    s = o.width, i = o.height;
    const l = xn();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return { width: s, height: i, x: a, y: c };
}
const Ea = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Oa(e4, t) {
  const n = Ft(e4, true, t === "fixed"), r = n.top + e4.clientTop, o = n.left + e4.clientLeft, s = ht(e4) ? Rt(e4) : ut(1), i = e4.clientWidth * s.x, a = e4.clientHeight * s.y, c = o * s.x, l = r * s.y;
  return { width: i, height: a, x: c, y: l };
}
function Jn(e4, t, n) {
  let r;
  if (t === "viewport") r = Aa(e4, n);
  else if (t === "document") r = Sa(yt(e4));
  else if (st(t)) r = Oa(t, n);
  else {
    const o = eo(e4);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Oe(r);
}
function ro(e4, t) {
  const n = At(e4);
  return n === t || !st(n) || _t(n) ? false : it(n).position === "fixed" || ro(n, t);
}
function Ma(e4, t) {
  const n = t.get(e4);
  if (n) return n;
  let r = ee(e4, [], false).filter((a) => st(a) && Kt(a) !== "body"), o = null;
  const s = it(e4).position === "fixed";
  let i = s ? At(e4) : e4;
  for (; st(i) && !_t(i); ) {
    const a = it(i), c = vn(i);
    !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && Ea.has(o.position) || ie(i) && !c && ro(e4, i)) ? r = r.filter((d) => d !== i) : o = a, i = At(i);
  }
  return t.set(e4, r), r;
}
function Pa(e4) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e4;
  const i = [...n === "clippingAncestors" ? Le(t) ? [] : Ma(t, this._c) : [].concat(n), r], a = i[0], c = i.reduce((l, d) => {
    const u = Jn(t, d, o);
    return l.top = Z(u.top, l.top), l.right = St(u.right, l.right), l.bottom = St(u.bottom, l.bottom), l.left = Z(u.left, l.left), l;
  }, Jn(t, a, o));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function Ia(e4) {
  const { width: t, height: n } = to(e4);
  return { width: t, height: n };
}
function Na(e4, t, n) {
  const r = ht(t), o = yt(t), s = n === "fixed", i = Ft(e4, true, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = ut(0);
  function l() {
    c.x = kn(o);
  }
  if (r || !r && !s) if ((Kt(t) !== "body" || ie(o)) && (a = Re(t)), r) {
    const f = Ft(t, true, s, t);
    c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
  } else o && l();
  s && !r && o && l();
  const d = o && !r && !s ? no(o, a) : ut(0), u = i.left + a.scrollLeft - c.x - d.x, p = i.top + a.scrollTop - c.y - d.y;
  return { x: u, y: p, width: i.width, height: i.height };
}
function Ve(e4) {
  return it(e4).position === "static";
}
function Qn(e4, t) {
  if (!ht(e4) || it(e4).position === "fixed") return null;
  if (t) return t(e4);
  let n = e4.offsetParent;
  return yt(e4) === n && (n = n.ownerDocument.body), n;
}
function oo(e4, t) {
  const n = Q(e4);
  if (Le(e4)) return n;
  if (!ht(e4)) {
    let o = At(e4);
    for (; o && !_t(o); ) {
      if (st(o) && !Ve(o)) return o;
      o = At(o);
    }
    return n;
  }
  let r = Qn(e4, t);
  for (; r && pa(r) && Ve(r); ) r = Qn(r, t);
  return r && _t(r) && Ve(r) && !vn(r) ? n : r || wa(e4) || n;
}
const Fa = async function(e4) {
  const t = this.getOffsetParent || oo, n = this.getDimensions, r = await n(e4.floating);
  return { reference: Na(e4.reference, await t(e4.floating), e4.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function Da(e4) {
  return it(e4).direction === "rtl";
}
const La = { convertOffsetParentRelativeRectToViewportRelativeRect: ka, getDocumentElement: yt, getClippingRect: Pa, getOffsetParent: oo, getElementRects: Fa, getClientRects: Ta, getDimensions: Ia, getScale: Rt, isElement: st, isRTL: Da };
function so(e4, t) {
  return e4.x === t.x && e4.y === t.y && e4.width === t.width && e4.height === t.height;
}
function Ra(e4, t) {
  let n = null, r;
  const o = yt(e4);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, c) {
    a === void 0 && (a = false), c === void 0 && (c = 1), s();
    const l = e4.getBoundingClientRect(), { left: d, top: u, width: p, height: f } = l;
    if (a || t(), !p || !f) return;
    const g = pe(u), b = pe(o.clientWidth - (d + p)), k = pe(o.clientHeight - (u + f)), T = pe(d), A = { rootMargin: -g + "px " + -b + "px " + -k + "px " + -T + "px", threshold: Z(0, St(1, c)) || 1 };
    let P = true;
    function M(L) {
      const N = L[0].intersectionRatio;
      if (N !== c) {
        if (!P) return i();
        N ? i(false, N) : r = setTimeout(() => {
          i(false, 1e-7);
        }, 1e3);
      }
      N === 1 && !so(l, e4.getBoundingClientRect()) && i(), P = false;
    }
    try {
      n = new IntersectionObserver(M, { ...A, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(M, A);
    }
    n.observe(e4);
  }
  return i(true), s;
}
function za(e4, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = true, ancestorResize: s = true, elementResize: i = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: c = false } = r, l = Cn(e4), d = o || s ? [...l ? ee(l) : [], ...ee(t)] : [];
  d.forEach((T) => {
    o && T.addEventListener("scroll", n, { passive: true }), s && T.addEventListener("resize", n);
  });
  const u = l && a ? Ra(l, n) : null;
  let p = -1, f = null;
  i && (f = new ResizeObserver((T) => {
    let [S] = T;
    S && S.target === l && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var A;
      (A = f) == null || A.observe(t);
    })), n();
  }), l && !c && f.observe(l), f.observe(t));
  let g, b = c ? Ft(e4) : null;
  c && k();
  function k() {
    const T = Ft(e4);
    b && !so(b, T) && n(), b = T, g = requestAnimationFrame(k);
  }
  return n(), () => {
    var T;
    d.forEach((S) => {
      o && S.removeEventListener("scroll", n), s && S.removeEventListener("resize", n);
    }), u == null ? void 0 : u(), (T = f) == null || T.disconnect(), f = null, c && cancelAnimationFrame(g);
  };
}
const Ba = ca, Wa = la, _a = sa, Va = da, Ha = ia, Ka = oa, Ga = ua, ja = (e4, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: La, ...n }, s = { ...o.platform, _c: r };
  return ra(e4, t, { ...o, platform: s });
};
function Ot(e4) {
  return typeof e4 == "function" ? e4() : e4;
}
function io(e4) {
  return typeof window > "u" ? 1 : (e4.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $n(e4, t) {
  const n = io(e4);
  return Math.round(t * n) / n;
}
function fl(e4) {
  return { [`--bits-${e4}-content-transform-origin`]: "var(--bits-floating-transform-origin)", [`--bits-${e4}-content-available-width`]: "var(--bits-floating-available-width)", [`--bits-${e4}-content-available-height`]: "var(--bits-floating-available-height)", [`--bits-${e4}-anchor-width`]: "var(--bits-floating-anchor-width)", [`--bits-${e4}-anchor-height`]: "var(--bits-floating-anchor-height)" };
}
function Ua(e4) {
  const t = e4.whileElementsMounted, n = C(() => Ot(e4.open) ?? true), r = C(() => Ot(e4.middleware)), o = C(() => Ot(e4.transform) ?? true), s = C(() => Ot(e4.placement) ?? "bottom"), i = C(() => Ot(e4.strategy) ?? "absolute"), a = C(() => Ot(e4.sideOffset) ?? 0), c = C(() => Ot(e4.alignOffset) ?? 0), l = e4.reference;
  let d = I(0), u = I(0);
  const p = J(null);
  let f = I(Pt(h(i))), g = I(Pt(h(s))), b = I(Pt({})), k = I(false);
  const T = C(() => {
    const N = p.current ? $n(p.current, h(d)) : h(d), x = p.current ? $n(p.current, h(u)) : h(u);
    return h(o) ? { position: h(f), left: "0", top: "0", transform: `translate(${N}px, ${x}px)`, ...p.current && io(p.current) >= 1.5 && { willChange: "transform" } } : { position: h(f), left: `${N}px`, top: `${x}px` };
  });
  let S;
  function A() {
    l.current === null || p.current === null || ja(l.current, p.current, { middleware: h(r), placement: h(s), strategy: h(i) }).then((N) => {
      if (!h(n) && h(d) !== 0 && h(u) !== 0) {
        const x = Math.max(Math.abs(h(a)), Math.abs(h(c)), 15);
        if (N.x <= x && N.y <= x) return;
      }
      m(d, N.x, true), m(u, N.y, true), m(f, N.strategy, true), m(g, N.placement, true), m(b, N.middlewareData, true), m(k, true);
    });
  }
  function P() {
    typeof S == "function" && (S(), S = void 0);
  }
  function M() {
    if (P(), t === void 0) {
      A();
      return;
    }
    l.current === null || p.current === null || (S = t(l.current, p.current, A));
  }
  function L() {
    h(n) || m(k, false);
  }
  return Y(A), Y(M), Y(L), Y(() => P), { floating: p, reference: l, get strategy() {
    return h(f);
  }, get placement() {
    return h(g);
  }, get middlewareData() {
    return h(b);
  }, get isPositioned() {
    return h(k);
  }, get floatingStyles() {
    return h(T);
  }, get update() {
    return A;
  } };
}
const Ya = { top: "bottom", right: "left", bottom: "top", left: "right" }, Tn = new bt("Floating.Root"), Je = new bt("Floating.Content"), Sn = new bt("Floating.Root");
class Me {
  constructor() {
    __publicField(this, "anchorNode", J(null));
    __publicField(this, "customAnchorNode", J(null));
    __publicField(this, "triggerNode", J(null));
    Y(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
  static create(t = false) {
    return t ? Sn.set(new Me()) : Tn.set(new Me());
  }
}
const _Qe = class _Qe {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "contentRef", J(null));
    __publicField(this, "wrapperRef", J(null));
    __publicField(this, "arrowRef", J(null));
    __publicField(this, "contentAttachment", lt(this.contentRef));
    __publicField(this, "wrapperAttachment", lt(this.wrapperRef));
    __publicField(this, "arrowAttachment", lt(this.arrowRef));
    __publicField(this, "arrowId", J(qr()));
    __privateAdd(this, _t29, C(() => {
      if (typeof this.opts.style == "string") return Jt(this.opts.style);
      if (!this.opts.style) return {};
    }));
    __privateAdd(this, _e24);
    __privateAdd(this, _n16, new vs(() => this.arrowRef.current ?? void 0));
    __privateAdd(this, _r13, C(() => {
      var _a7;
      return ((_a7 = __privateGet(this, _n16)) == null ? void 0 : _a7.width) ?? 0;
    }));
    __privateAdd(this, _o7, C(() => {
      var _a7;
      return ((_a7 = __privateGet(this, _n16)) == null ? void 0 : _a7.height) ?? 0;
    }));
    __privateAdd(this, _i4, C(() => {
      var _a7;
      return ((_a7 = this.opts.side) == null ? void 0 : _a7.current) + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : "");
    }));
    __privateAdd(this, _a4, C(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]));
    __privateAdd(this, _s5, C(() => h(__privateGet(this, _a4)).length > 0));
    __privateAdd(this, _c3, C(() => ({ padding: this.opts.collisionPadding.current, boundary: h(__privateGet(this, _a4)).filter(Ks), altBoundary: this.hasExplicitBoundaries })));
    __privateAdd(this, _l, I(void 0));
    __privateAdd(this, _u2, I(void 0));
    __privateAdd(this, _d2, I(void 0));
    __privateAdd(this, _f2, I(void 0));
    __privateAdd(this, _h2, C(() => [Ba({ mainAxis: this.opts.sideOffset.current + h(__privateGet(this, _o7)), alignmentAxis: this.opts.alignOffset.current }), this.opts.avoidCollisions.current && Wa({ mainAxis: true, crossAxis: false, limiter: this.opts.sticky.current === "partial" ? Ga() : void 0, ...this.detectOverflowOptions }), this.opts.avoidCollisions.current && _a({ ...this.detectOverflowOptions }), Va({ ...this.detectOverflowOptions, apply: ({ rects: t, availableWidth: n, availableHeight: r }) => {
      const { width: o, height: s } = t.reference;
      m(__privateGet(this, _l), n, true), m(__privateGet(this, _u2), r, true), m(__privateGet(this, _d2), o, true), m(__privateGet(this, _f2), s, true);
    } }), this.arrowRef.current && Ka({ element: this.arrowRef.current, padding: this.opts.arrowPadding.current }), qa({ arrowWidth: h(__privateGet(this, _r13)), arrowHeight: h(__privateGet(this, _o7)) }), this.opts.hideWhenDetached.current && Ha({ strategy: "referenceHidden", ...this.detectOverflowOptions })].filter(Boolean)));
    __publicField(this, "floating");
    __privateAdd(this, _m2, C(() => Xa(this.floating.placement)));
    __privateAdd(this, _g2, C(() => Za(this.floating.placement)));
    __privateAdd(this, _p2, C(() => {
      var _a7;
      return ((_a7 = this.floating.middlewareData.arrow) == null ? void 0 : _a7.x) ?? 0;
    }));
    __privateAdd(this, _b, C(() => {
      var _a7;
      return ((_a7 = this.floating.middlewareData.arrow) == null ? void 0 : _a7.y) ?? 0;
    }));
    __privateAdd(this, _y2, C(() => {
      var _a7;
      return ((_a7 = this.floating.middlewareData.arrow) == null ? void 0 : _a7.centerOffset) !== 0;
    }));
    __privateAdd(this, _w2, I());
    __privateAdd(this, _v, C(() => Ya[this.placedSide]));
    __privateAdd(this, _x, C(() => {
      var _a7, _b2, _c6;
      return { id: this.opts.wrapperId.current, "data-bits-floating-content-wrapper": "", style: { ...this.floating.floatingStyles, transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: this.contentZIndex, "--bits-floating-transform-origin": `${(_a7 = this.floating.middlewareData.transformOrigin) == null ? void 0 : _a7.x} ${(_b2 = this.floating.middlewareData.transformOrigin) == null ? void 0 : _b2.y}`, "--bits-floating-available-width": `${h(__privateGet(this, _l))}px`, "--bits-floating-available-height": `${h(__privateGet(this, _u2))}px`, "--bits-floating-anchor-width": `${h(__privateGet(this, _d2))}px`, "--bits-floating-anchor-height": `${h(__privateGet(this, _f2))}px`, ...((_c6 = this.floating.middlewareData.hide) == null ? void 0 : _c6.referenceHidden) && { visibility: "hidden", "pointer-events": "none" }, ...h(__privateGet(this, _t29)) }, dir: this.opts.dir.current, ...this.wrapperAttachment };
    }));
    __privateAdd(this, _C, C(() => ({ "data-side": this.placedSide, "data-align": this.placedAlign, style: dr({ ...h(__privateGet(this, _t29)) }), ...this.contentAttachment })));
    __privateAdd(this, _k, C(() => ({ position: "absolute", left: this.arrowX ? `${this.arrowX}px` : void 0, top: this.arrowY ? `${this.arrowY}px` : void 0, [this.arrowBaseSide]: 0, "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[this.placedSide], visibility: this.cannotCenterArrow ? "hidden" : void 0 })));
    this.opts = t, this.root = n, t.customAnchor && (this.root.customAnchorNode.current = t.customAnchor.current), R(() => t.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = Ua({ strategy: () => this.opts.strategy.current, placement: () => h(__privateGet(this, _i4)), middleware: () => this.middleware, reference: this.root.anchorNode, whileElementsMounted: (...r) => {
      var _a7;
      return za(...r, { animationFrame: ((_a7 = __privateGet(this, _e24)) == null ? void 0 : _a7.current) === "always" });
    }, open: () => this.opts.enabled.current, sideOffset: () => this.opts.sideOffset.current, alignOffset: () => this.opts.alignOffset.current }), Y(() => {
      var _a7;
      this.floating.isPositioned && ((_a7 = this.opts.onPlaced) == null ? void 0 : _a7.current());
    }), R(() => this.contentRef.current, (r) => {
      if (!r) return;
      const o = $t(r);
      this.contentZIndex = o.getComputedStyle(r).zIndex;
    }), Y(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
  static create(t, n = false) {
    return n ? Je.set(new _Qe(t, Sn.get())) : Je.set(new _Qe(t, Tn.get()));
  }
  get hasExplicitBoundaries() {
    return h(__privateGet(this, _s5));
  }
  set hasExplicitBoundaries(t) {
    m(__privateGet(this, _s5), t);
  }
  get detectOverflowOptions() {
    return h(__privateGet(this, _c3));
  }
  set detectOverflowOptions(t) {
    m(__privateGet(this, _c3), t);
  }
  get middleware() {
    return h(__privateGet(this, _h2));
  }
  set middleware(t) {
    m(__privateGet(this, _h2), t);
  }
  get placedSide() {
    return h(__privateGet(this, _m2));
  }
  set placedSide(t) {
    m(__privateGet(this, _m2), t);
  }
  get placedAlign() {
    return h(__privateGet(this, _g2));
  }
  set placedAlign(t) {
    m(__privateGet(this, _g2), t);
  }
  get arrowX() {
    return h(__privateGet(this, _p2));
  }
  set arrowX(t) {
    m(__privateGet(this, _p2), t);
  }
  get arrowY() {
    return h(__privateGet(this, _b));
  }
  set arrowY(t) {
    m(__privateGet(this, _b), t);
  }
  get cannotCenterArrow() {
    return h(__privateGet(this, _y2));
  }
  set cannotCenterArrow(t) {
    m(__privateGet(this, _y2), t);
  }
  get contentZIndex() {
    return h(__privateGet(this, _w2));
  }
  set contentZIndex(t) {
    m(__privateGet(this, _w2), t, true);
  }
  get arrowBaseSide() {
    return h(__privateGet(this, _v));
  }
  set arrowBaseSide(t) {
    m(__privateGet(this, _v), t);
  }
  get wrapperProps() {
    return h(__privateGet(this, _x));
  }
  set wrapperProps(t) {
    m(__privateGet(this, _x), t);
  }
  get props() {
    return h(__privateGet(this, _C));
  }
  set props(t) {
    m(__privateGet(this, _C), t);
  }
  get arrowStyle() {
    return h(__privateGet(this, _k));
  }
  set arrowStyle(t) {
    m(__privateGet(this, _k), t);
  }
};
_t29 = new WeakMap();
_e24 = new WeakMap();
_n16 = new WeakMap();
_r13 = new WeakMap();
_o7 = new WeakMap();
_i4 = new WeakMap();
_a4 = new WeakMap();
_s5 = new WeakMap();
_c3 = new WeakMap();
_l = new WeakMap();
_u2 = new WeakMap();
_d2 = new WeakMap();
_f2 = new WeakMap();
_h2 = new WeakMap();
_m2 = new WeakMap();
_g2 = new WeakMap();
_p2 = new WeakMap();
_b = new WeakMap();
_y2 = new WeakMap();
_w2 = new WeakMap();
_v = new WeakMap();
_x = new WeakMap();
_C = new WeakMap();
_k = new WeakMap();
let Qe = _Qe;
const _ao = class _ao {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "content");
    __privateAdd(this, _t30, C(() => ({ id: this.opts.id.current, style: this.content.arrowStyle, "data-side": this.content.placedSide, ...this.content.arrowAttachment })));
    this.opts = t, this.content = n;
  }
  static create(t) {
    return new _ao(t, Je.get());
  }
  get props() {
    return h(__privateGet(this, _t30));
  }
  set props(t) {
    m(__privateGet(this, _t30), t);
  }
};
_t30 = new WeakMap();
let ao = _ao;
class $e {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "root");
    this.opts = t, this.root = n, t.virtualEl && t.virtualEl.current ? n.triggerNode = cr(t.virtualEl.current) : n.triggerNode = t.ref;
  }
  static create(t, n = false) {
    return n ? new $e(t, Sn.get()) : new $e(t, Tn.get());
  }
}
function qa(e4) {
  return { name: "transformOrigin", options: e4, fn(t) {
    var _a7, _b2, _c6;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((_a7 = o.arrow) == null ? void 0 : _a7.centerOffset) !== 0, a = i ? 0 : e4.arrowWidth, c = i ? 0 : e4.arrowHeight, [l, d] = An(n), u = { start: "0%", center: "50%", end: "100%" }[d], p = (((_b2 = o.arrow) == null ? void 0 : _b2.x) ?? 0) + a / 2, f = (((_c6 = o.arrow) == null ? void 0 : _c6.y) ?? 0) + c / 2;
    let g = "", b = "";
    return l === "bottom" ? (g = i ? u : `${p}px`, b = `${-c}px`) : l === "top" ? (g = i ? u : `${p}px`, b = `${r.floating.height + c}px`) : l === "right" ? (g = `${-c}px`, b = i ? u : `${f}px`) : l === "left" && (g = `${r.floating.width + c}px`, b = i ? u : `${f}px`), { data: { x: g, y: b } };
  } };
}
function An(e4) {
  const [t, n = "center"] = e4.split("-");
  return [t, n];
}
function Xa(e4) {
  return An(e4)[0];
}
function Za(e4) {
  return An(e4)[1];
}
function Ja(e4, t) {
  ft(t, true);
  let n = F(t, "tooltip", 3, false);
  Me.create(n());
  var r = $(), o = tt(r);
  gt(o, () => t.children ?? mt), et(e4, r), pt();
}
function tr(e4, t) {
  const [n, r] = e4;
  let o = false;
  const s = t.length;
  for (let i = 0, a = s - 1; i < s; a = i++) {
    const [c, l] = t[i] ?? [0, 0], [d, u] = t[a] ?? [0, 0];
    l >= r != u >= r && n <= (d - c) * (r - l) / (u - l) + c && (o = !o);
  }
  return o;
}
function er(e4, t) {
  return e4[0] >= t.left && e4[0] <= t.right && e4[1] >= t.top && e4[1] <= t.bottom;
}
function Qa(e4, t) {
  const n = e4.left + e4.width / 2, r = e4.top + e4.height / 2, o = t.left + t.width / 2, s = t.top + t.height / 2, i = o - n, a = s - r;
  return Math.abs(i) > Math.abs(a) ? i > 0 ? "right" : "left" : a > 0 ? "bottom" : "top";
}
class $a {
  constructor(t) {
    __privateAdd(this, _$a_instances);
    __privateAdd(this, _t31);
    __privateAdd(this, _e25);
    __privateAdd(this, _n17, null);
    __privateAdd(this, _r14, null);
    __privateSet(this, _t31, t), __privateSet(this, _e25, t.buffer ?? 1), R([t.triggerNode, t.contentNode, t.enabled], ([n, r, o]) => {
      if (!n || !r || !o) {
        __privateSet(this, _n17, null), __privateSet(this, _r14, null);
        return;
      }
      const s = Vt(n), i = (u) => {
        __privateMethod(this, _$a_instances, o_fn4).call(this, u, n, r);
      }, a = (u) => {
        const p = u.relatedTarget;
        Bt(p) && r.contains(p) || (__privateSet(this, _n17, [u.clientX, u.clientY]), __privateSet(this, _r14, "content"));
      }, c = () => {
        __privateSet(this, _n17, null), __privateSet(this, _r14, null);
      }, l = () => {
        __privateSet(this, _n17, null), __privateSet(this, _r14, null);
      }, d = (u) => {
        const p = u.relatedTarget;
        Bt(p) && n.contains(p) || (__privateSet(this, _n17, [u.clientX, u.clientY]), __privateSet(this, _r14, "trigger"));
      };
      return [D(s, "pointermove", i), D(n, "pointerleave", a), D(n, "pointerenter", c), D(r, "pointerenter", l), D(r, "pointerleave", d)].reduce((u, p) => () => {
        u(), p();
      }, () => {
      });
    });
  }
}
_t31 = new WeakMap();
_e25 = new WeakMap();
_n17 = new WeakMap();
_r14 = new WeakMap();
_$a_instances = new WeakSet();
o_fn4 = function(t, n, r) {
  if (!__privateGet(this, _n17) || !__privateGet(this, _r14)) return;
  const o = [t.clientX, t.clientY], s = n.getBoundingClientRect(), i = r.getBoundingClientRect();
  if (__privateGet(this, _r14) === "content" && er(o, i)) {
    __privateSet(this, _n17, null), __privateSet(this, _r14, null);
    return;
  }
  if (__privateGet(this, _r14) === "trigger" && er(o, s)) {
    __privateSet(this, _n17, null), __privateSet(this, _r14, null);
    return;
  }
  const a = Qa(s, i), c = __privateMethod(this, _$a_instances, i_fn5).call(this, s, i, a);
  if (c && tr(o, c)) return;
  const l = __privateGet(this, _r14) === "content" ? i : s, d = __privateMethod(this, _$a_instances, a_fn3).call(this, __privateGet(this, _n17), l, a, __privateGet(this, _r14));
  tr(o, d) || (__privateSet(this, _n17, null), __privateSet(this, _r14, null), __privateGet(this, _t31).onPointerExit());
};
i_fn5 = function(t, n, r) {
  const o = __privateGet(this, _e25);
  switch (r) {
    case "top":
      return [[Math.min(t.left, n.left) - o, t.top], [Math.min(t.left, n.left) - o, n.bottom], [Math.max(t.right, n.right) + o, n.bottom], [Math.max(t.right, n.right) + o, t.top]];
    case "bottom":
      return [[Math.min(t.left, n.left) - o, t.bottom], [Math.min(t.left, n.left) - o, n.top], [Math.max(t.right, n.right) + o, n.top], [Math.max(t.right, n.right) + o, t.bottom]];
    case "left":
      return [[t.left, Math.min(t.top, n.top) - o], [n.right, Math.min(t.top, n.top) - o], [n.right, Math.max(t.bottom, n.bottom) + o], [t.left, Math.max(t.bottom, n.bottom) + o]];
    case "right":
      return [[t.right, Math.min(t.top, n.top) - o], [n.left, Math.min(t.top, n.top) - o], [n.left, Math.max(t.bottom, n.bottom) + o], [t.right, Math.max(t.bottom, n.bottom) + o]];
  }
};
a_fn3 = function(t, n, r, o) {
  const s = __privateGet(this, _e25) * 4, [i, a] = t;
  switch (o === "trigger" ? __privateMethod(this, _$a_instances, s_fn2).call(this, r) : r) {
    case "top":
      return [[i - s, a + s], [i + s, a + s], [n.right + s, n.bottom], [n.right + s, n.top], [n.left - s, n.top], [n.left - s, n.bottom]];
    case "bottom":
      return [[i - s, a - s], [i + s, a - s], [n.right + s, n.top], [n.right + s, n.bottom], [n.left - s, n.bottom], [n.left - s, n.top]];
    case "left":
      return [[i + s, a - s], [i + s, a + s], [n.right, n.bottom + s], [n.left, n.bottom + s], [n.left, n.top - s], [n.right, n.top - s]];
    case "right":
      return [[i - s, a - s], [i - s, a + s], [n.left, n.bottom + s], [n.right, n.bottom + s], [n.right, n.top - s], [n.left, n.top - s]];
  }
};
s_fn2 = function(t) {
  switch (t) {
    case "top":
      return "bottom";
    case "bottom":
      return "top";
    case "left":
      return "right";
    case "right":
      return "left";
  }
};
class tn {
  constructor(t, n) {
    __privateAdd(this, _tn_instances);
    __privateAdd(this, _t32);
    __privateAdd(this, _e26);
    __privateAdd(this, _n18, null);
    __privateSet(this, _e26, t), __privateSet(this, _t32, n), this.stop = this.stop.bind(this), this.start = this.start.bind(this), Et(this.stop);
  }
  stop() {
    __privateMethod(this, _tn_instances, r_fn3).call(this);
  }
  start(...t) {
    __privateMethod(this, _tn_instances, r_fn3).call(this), __privateSet(this, _n18, window.setTimeout(() => {
      __privateSet(this, _n18, null), __privateGet(this, _e26).call(this, ...t);
    }, __privateGet(this, _t32)));
  }
}
_t32 = new WeakMap();
_e26 = new WeakMap();
_n18 = new WeakMap();
_tn_instances = new WeakSet();
r_fn3 = function() {
  __privateGet(this, _n18) !== null && (window.clearTimeout(__privateGet(this, _n18)), __privateSet(this, _n18, null));
};
const co = yr({ component: "tooltip", parts: ["content", "trigger"] }), lo = new bt("Tooltip.Provider"), En = new bt("Tooltip.Root");
const _On = class _On {
  constructor(t) {
    __publicField(this, "opts");
    __privateAdd(this, _t33, I(true));
    __publicField(this, "isPointerInTransit", J(false));
    __privateAdd(this, _e27);
    __privateAdd(this, _n19, I(null));
    __privateAdd(this, _r15, () => {
      this.opts.skipDelayDuration.current !== 0 && __privateGet(this, _e27).start();
    });
    __privateAdd(this, _o8, () => {
      __privateGet(this, _e27).stop();
    });
    __publicField(this, "onOpen", (t) => {
      h(__privateGet(this, _n19)) && h(__privateGet(this, _n19)) !== t && h(__privateGet(this, _n19)).handleClose(), __privateGet(this, _o8).call(this), this.isOpenDelayed = false, m(__privateGet(this, _n19), t, true);
    });
    __publicField(this, "onClose", (t) => {
      h(__privateGet(this, _n19)) === t && m(__privateGet(this, _n19), null), __privateGet(this, _r15).call(this);
    });
    __publicField(this, "isTooltipOpen", (t) => h(__privateGet(this, _n19)) === t);
    this.opts = t, __privateSet(this, _e27, new tn(() => {
      this.isOpenDelayed = true;
    }, this.opts.skipDelayDuration.current));
  }
  static create(t) {
    return lo.set(new _On(t));
  }
  get isOpenDelayed() {
    return h(__privateGet(this, _t33));
  }
  set isOpenDelayed(t) {
    m(__privateGet(this, _t33), t, true);
  }
};
_t33 = new WeakMap();
_e27 = new WeakMap();
_n19 = new WeakMap();
_r15 = new WeakMap();
_o8 = new WeakMap();
let On = _On;
const _Mn = class _Mn {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "provider");
    __privateAdd(this, _t34, C(() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current));
    __privateAdd(this, _e28, C(() => this.opts.disableHoverableContent.current ?? this.provider.opts.disableHoverableContent.current));
    __privateAdd(this, _n20, C(() => this.opts.disableCloseOnTriggerClick.current ?? this.provider.opts.disableCloseOnTriggerClick.current));
    __privateAdd(this, _r16, C(() => this.opts.disabled.current ?? this.provider.opts.disabled.current));
    __privateAdd(this, _o9, C(() => this.opts.ignoreNonKeyboardFocus.current ?? this.provider.opts.ignoreNonKeyboardFocus.current));
    __privateAdd(this, _i5, I(null));
    __publicField(this, "contentPresence");
    __privateAdd(this, _a5, I(null));
    __privateAdd(this, _s6, I(false));
    __privateAdd(this, _c4);
    __privateAdd(this, _l2, C(() => this.opts.open.current ? h(__privateGet(this, _s6)) ? "delayed-open" : "instant-open" : "closed"));
    __publicField(this, "handleOpen", () => {
      __privateGet(this, _c4).stop(), m(__privateGet(this, _s6), false), this.opts.open.current = true;
    });
    __publicField(this, "handleClose", () => {
      __privateGet(this, _c4).stop(), this.opts.open.current = false;
    });
    __privateAdd(this, _u3, () => {
      __privateGet(this, _c4).stop();
      const t = !this.provider.isOpenDelayed, n = this.delayDuration ?? 0;
      t || n === 0 ? (m(__privateGet(this, _s6), n > 0 && t, true), this.opts.open.current = true) : __privateGet(this, _c4).start();
    });
    __publicField(this, "onTriggerEnter", () => {
      __privateGet(this, _u3).call(this);
    });
    __publicField(this, "onTriggerLeave", () => {
      this.disableHoverableContent ? this.handleClose() : __privateGet(this, _c4).stop();
    });
    this.opts = t, this.provider = n, __privateSet(this, _c4, new tn(() => {
      m(__privateGet(this, _s6), true), this.opts.open.current = true;
    }, this.delayDuration ?? 0)), this.contentPresence = new kr({ open: this.opts.open, ref: E(() => this.contentNode), onComplete: () => {
      this.opts.onOpenChangeComplete.current(this.opts.open.current);
    } }), R(() => this.delayDuration, () => {
      this.delayDuration !== void 0 && __privateSet(this, _c4, new tn(() => {
        m(__privateGet(this, _s6), true), this.opts.open.current = true;
      }, this.delayDuration));
    }), R(() => this.opts.open.current, (r) => {
      r ? this.provider.onOpen(this) : this.provider.onClose(this);
    }, { lazy: true });
  }
  static create(t) {
    return En.set(new _Mn(t, lo.get()));
  }
  get delayDuration() {
    return h(__privateGet(this, _t34));
  }
  set delayDuration(t) {
    m(__privateGet(this, _t34), t);
  }
  get disableHoverableContent() {
    return h(__privateGet(this, _e28));
  }
  set disableHoverableContent(t) {
    m(__privateGet(this, _e28), t);
  }
  get disableCloseOnTriggerClick() {
    return h(__privateGet(this, _n20));
  }
  set disableCloseOnTriggerClick(t) {
    m(__privateGet(this, _n20), t);
  }
  get disabled() {
    return h(__privateGet(this, _r16));
  }
  set disabled(t) {
    m(__privateGet(this, _r16), t);
  }
  get ignoreNonKeyboardFocus() {
    return h(__privateGet(this, _o9));
  }
  set ignoreNonKeyboardFocus(t) {
    m(__privateGet(this, _o9), t);
  }
  get contentNode() {
    return h(__privateGet(this, _i5));
  }
  set contentNode(t) {
    m(__privateGet(this, _i5), t, true);
  }
  get triggerNode() {
    return h(__privateGet(this, _a5));
  }
  set triggerNode(t) {
    m(__privateGet(this, _a5), t, true);
  }
  get stateAttr() {
    return h(__privateGet(this, _l2));
  }
  set stateAttr(t) {
    m(__privateGet(this, _l2), t);
  }
};
_t34 = new WeakMap();
_e28 = new WeakMap();
_n20 = new WeakMap();
_r16 = new WeakMap();
_o9 = new WeakMap();
_i5 = new WeakMap();
_a5 = new WeakMap();
_s6 = new WeakMap();
_c4 = new WeakMap();
_l2 = new WeakMap();
_u3 = new WeakMap();
let Mn = _Mn;
const _uo = class _uo {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t35, J(false));
    __privateAdd(this, _e29, I(false));
    __privateAdd(this, _n21, C(() => this.opts.disabled.current || this.root.disabled));
    __publicField(this, "domContext");
    __privateAdd(this, _r17, null);
    __privateAdd(this, _o10, () => {
      __privateGet(this, _r17) !== null && (clearTimeout(__privateGet(this, _r17)), __privateSet(this, _r17, null));
    });
    __publicField(this, "handlePointerUp", () => {
      __privateGet(this, _t35).current = false;
    });
    __privateAdd(this, _i6, () => {
      h(__privateGet(this, _n21)) || (__privateGet(this, _t35).current = false);
    });
    __privateAdd(this, _a6, () => {
      h(__privateGet(this, _n21)) || (__privateGet(this, _t35).current = true, this.domContext.getDocument().addEventListener("pointerup", () => {
        this.handlePointerUp();
      }, { once: true }));
    });
    __privateAdd(this, _s7, (t) => {
      if (!h(__privateGet(this, _n21)) && t.pointerType !== "touch") {
        if (this.root.provider.isPointerInTransit.current) {
          __privateGet(this, _o10).call(this), __privateSet(this, _r17, window.setTimeout(() => {
            this.root.provider.isPointerInTransit.current && (this.root.provider.isPointerInTransit.current = false, this.root.onTriggerEnter(), m(__privateGet(this, _e29), true));
          }, 250));
          return;
        }
        this.root.onTriggerEnter(), m(__privateGet(this, _e29), true);
      }
    });
    __privateAdd(this, _c5, (t) => {
      h(__privateGet(this, _n21)) || t.pointerType !== "touch" && (h(__privateGet(this, _e29)) || (__privateGet(this, _o10).call(this), this.root.provider.isPointerInTransit.current = false, this.root.onTriggerEnter(), m(__privateGet(this, _e29), true)));
    });
    __privateAdd(this, _l3, () => {
      h(__privateGet(this, _n21)) || (__privateGet(this, _o10).call(this), this.root.onTriggerLeave(), m(__privateGet(this, _e29), false));
    });
    __privateAdd(this, _u4, (t) => {
      __privateGet(this, _t35).current || h(__privateGet(this, _n21)) || this.root.ignoreNonKeyboardFocus && !Hs(t.currentTarget) || this.root.handleOpen();
    });
    __privateAdd(this, _d3, () => {
      h(__privateGet(this, _n21)) || this.root.handleClose();
    });
    __privateAdd(this, _f3, () => {
      this.root.disableCloseOnTriggerClick || h(__privateGet(this, _n21)) || this.root.handleClose();
    });
    __privateAdd(this, _h3, C(() => {
      var _a7;
      return { id: this.opts.id.current, "aria-describedby": this.root.opts.open.current ? (_a7 = this.root.contentNode) == null ? void 0 : _a7.id : void 0, "data-state": this.root.stateAttr, "data-disabled": Ne(h(__privateGet(this, _n21))), "data-delay-duration": `${this.root.delayDuration}`, [co.trigger]: "", tabindex: h(__privateGet(this, _n21)) ? void 0 : 0, disabled: this.opts.disabled.current, onpointerup: __privateGet(this, _i6), onpointerdown: __privateGet(this, _a6), onpointerenter: __privateGet(this, _s7), onpointermove: __privateGet(this, _c5), onpointerleave: __privateGet(this, _l3), onfocus: __privateGet(this, _u4), onblur: __privateGet(this, _d3), onclick: __privateGet(this, _f3), ...this.attachment };
    }));
    this.opts = t, this.root = n, this.domContext = new Ie(t.ref), this.attachment = lt(this.opts.ref, (r) => this.root.triggerNode = r);
  }
  static create(t) {
    return new _uo(t, En.get());
  }
  get props() {
    return h(__privateGet(this, _h3));
  }
  set props(t) {
    m(__privateGet(this, _h3), t);
  }
};
_t35 = new WeakMap();
_e29 = new WeakMap();
_n21 = new WeakMap();
_r17 = new WeakMap();
_o10 = new WeakMap();
_i6 = new WeakMap();
_a6 = new WeakMap();
_s7 = new WeakMap();
_c5 = new WeakMap();
_l3 = new WeakMap();
_u4 = new WeakMap();
_d3 = new WeakMap();
_f3 = new WeakMap();
_h3 = new WeakMap();
let uo = _uo;
const _ho = class _ho {
  constructor(t, n) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __publicField(this, "onInteractOutside", (t) => {
      var _a7;
      if (Bt(t.target) && ((_a7 = this.root.triggerNode) == null ? void 0 : _a7.contains(t.target)) && this.root.disableCloseOnTriggerClick) {
        t.preventDefault();
        return;
      }
      this.opts.onInteractOutside.current(t), !t.defaultPrevented && this.root.handleClose();
    });
    __publicField(this, "onEscapeKeydown", (t) => {
      var _a7, _b2;
      (_b2 = (_a7 = this.opts.onEscapeKeydown).current) == null ? void 0 : _b2.call(_a7, t), !t.defaultPrevented && this.root.handleClose();
    });
    __publicField(this, "onOpenAutoFocus", (t) => {
      t.preventDefault();
    });
    __publicField(this, "onCloseAutoFocus", (t) => {
      t.preventDefault();
    });
    __privateAdd(this, _t36, C(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _e30, C(() => ({ id: this.opts.id.current, "data-state": this.root.stateAttr, "data-disabled": Ne(this.root.disabled), style: { outline: "none" }, [co.content]: "", ...this.attachment })));
    __publicField(this, "popperProps", { onInteractOutside: this.onInteractOutside, onEscapeKeydown: this.onEscapeKeydown, onOpenAutoFocus: this.onOpenAutoFocus, onCloseAutoFocus: this.onCloseAutoFocus });
    this.opts = t, this.root = n, this.attachment = lt(this.opts.ref, (r) => this.root.contentNode = r), new $a({ triggerNode: () => this.root.triggerNode, contentNode: () => this.root.contentNode, enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent, onPointerExit: () => {
      this.root.provider.isTooltipOpen(this.root) && this.root.handleClose();
    } }), xs(() => D(window, "scroll", (r) => {
      const o = r.target;
      o && o.contains(this.root.triggerNode) && this.root.handleClose();
    }));
  }
  static create(t) {
    return new _ho(t, En.get());
  }
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  get snippetProps() {
    return h(__privateGet(this, _t36));
  }
  set snippetProps(t) {
    m(__privateGet(this, _t36), t);
  }
  get props() {
    return h(__privateGet(this, _e30));
  }
  set props(t) {
    m(__privateGet(this, _e30), t);
  }
};
_t36 = new WeakMap();
_e30 = new WeakMap();
let ho = _ho;
function tc(e4, t) {
  ft(t, true);
  let n = F(t, "open", 15, false), r = F(t, "onOpenChange", 3, K), o = F(t, "onOpenChangeComplete", 3, K);
  Mn.create({ open: E(() => n(), (s) => {
    n(s), r()(s);
  }), delayDuration: E(() => t.delayDuration), disableCloseOnTriggerClick: E(() => t.disableCloseOnTriggerClick), disableHoverableContent: E(() => t.disableHoverableContent), ignoreNonKeyboardFocus: E(() => t.ignoreNonKeyboardFocus), disabled: E(() => t.disabled), onOpenChangeComplete: E(() => o()) }), Ja(e4, { tooltip: true, children: (s, i) => {
    var a = $(), c = tt(a);
    gt(c, () => t.children ?? mt), et(s, a);
  }, $$slots: { default: true } }), pt();
}
function ec(e4, t) {
  ft(t, true);
  let n = F(t, "delayDuration", 3, 700), r = F(t, "disableCloseOnTriggerClick", 3, false), o = F(t, "disableHoverableContent", 3, false), s = F(t, "disabled", 3, false), i = F(t, "ignoreNonKeyboardFocus", 3, false), a = F(t, "skipDelayDuration", 3, 300);
  On.create({ delayDuration: E(() => n()), disableCloseOnTriggerClick: E(() => r()), disableHoverableContent: E(() => o()), disabled: E(() => s()), ignoreNonKeyboardFocus: E(() => i()), skipDelayDuration: E(() => a()) });
  var c = $(), l = tt(c);
  gt(l, () => t.children ?? mt), et(e4, c), pt();
}
const Pn = "-", nc = (e4) => {
  const t = oc(e4), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e4;
  return { getClassGroupId: (i) => {
    const a = i.split(Pn);
    return a[0] === "" && a.length !== 1 && a.shift(), fo(a, t) || rc(i);
  }, getConflictingClassGroupIds: (i, a) => {
    const c = n[i] || [];
    return a && r[i] ? [...c, ...r[i]] : c;
  } };
}, fo = (e4, t) => {
  var _a7;
  if (e4.length === 0) return t.classGroupId;
  const n = e4[0], r = t.nextPart.get(n), o = r ? fo(e4.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const s = e4.join(Pn);
  return (_a7 = t.validators.find(({ validator: i }) => i(s))) == null ? void 0 : _a7.classGroupId;
}, nr = /^\[(.+)\]$/, rc = (e4) => {
  if (nr.test(e4)) {
    const t = nr.exec(e4)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}, oc = (e4) => {
  const { theme: t, classGroups: n } = e4, r = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
  for (const o in n) en(n[o], r, o, t);
  return r;
}, en = (e4, t, n, r) => {
  e4.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : rr(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (sc(o)) {
        en(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      en(i, rr(t, s), n, r);
    });
  });
}, rr = (e4, t) => {
  let n = e4;
  return t.split(Pn).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), n = n.nextPart.get(r);
  }), n;
}, sc = (e4) => e4.isThemeGetter, ic = (e4) => {
  if (e4 < 1) return { get: () => {
  }, set: () => {
  } };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    n.set(s, i), t++, t > e4 && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return { get(s) {
    let i = n.get(s);
    if (i !== void 0) return i;
    if ((i = r.get(s)) !== void 0) return o(s, i), i;
  }, set(s, i) {
    n.has(s) ? n.set(s, i) : o(s, i);
  } };
}, nn = "!", rn = ":", ac = rn.length, cc = (e4) => {
  const { prefix: t, experimentalParseClassName: n } = e4;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, c = 0, l;
    for (let g = 0; g < o.length; g++) {
      let b = o[g];
      if (i === 0 && a === 0) {
        if (b === rn) {
          s.push(o.slice(c, g)), c = g + ac;
          continue;
        }
        if (b === "/") {
          l = g;
          continue;
        }
      }
      b === "[" ? i++ : b === "]" ? i-- : b === "(" ? a++ : b === ")" && a--;
    }
    const d = s.length === 0 ? o : o.substring(c), u = lc(d), p = u !== d, f = l && l > c ? l - c : void 0;
    return { modifiers: s, hasImportantModifier: p, baseClassName: u, maybePostfixModifierPosition: f };
  };
  if (t) {
    const o = t + rn, s = r;
    r = (i) => i.startsWith(o) ? s(i.substring(o.length)) : { isExternal: true, modifiers: [], hasImportantModifier: false, baseClassName: i, maybePostfixModifierPosition: void 0 };
  }
  if (n) {
    const o = r;
    r = (s) => n({ className: s, parseClassName: o });
  }
  return r;
}, lc = (e4) => e4.endsWith(nn) ? e4.substring(0, e4.length - 1) : e4.startsWith(nn) ? e4.substring(1) : e4, uc = (e4) => {
  const t = Object.fromEntries(e4.orderSensitiveModifiers.map((r) => [r, true]));
  return (r) => {
    if (r.length <= 1) return r;
    const o = [];
    let s = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...s.sort(), i), s = []) : s.push(i);
    }), o.push(...s.sort()), o;
  };
}, dc = (e4) => ({ cache: ic(e4.cacheSize), parseClassName: cc(e4), sortModifiers: uc(e4), ...nc(e4) }), hc = /\s+/, fc = (e4, t) => {
  const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: s } = t, i = [], a = e4.trim().split(hc);
  let c = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const d = a[l], { isExternal: u, modifiers: p, hasImportantModifier: f, baseClassName: g, maybePostfixModifierPosition: b } = n(d);
    if (u) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let k = !!b, T = r(k ? g.substring(0, b) : g);
    if (!T) {
      if (!k) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (T = r(g), !T) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      k = false;
    }
    const S = s(p).join(":"), A = f ? S + nn : S, P = A + T;
    if (i.includes(P)) continue;
    i.push(P);
    const M = o(T, k);
    for (let L = 0; L < M.length; ++L) {
      const N = M[L];
      i.push(A + N);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function pc() {
  let e4 = 0, t, n, r = "";
  for (; e4 < arguments.length; ) (t = arguments[e4++]) && (n = po(t)) && (r && (r += " "), r += n);
  return r;
}
const po = (e4) => {
  if (typeof e4 == "string") return e4;
  let t, n = "";
  for (let r = 0; r < e4.length; r++) e4[r] && (t = po(e4[r])) && (n && (n += " "), n += t);
  return n;
};
function mc(e4, ...t) {
  let n, r, o, s = i;
  function i(c) {
    const l = t.reduce((d, u) => u(d), e4());
    return n = dc(l), r = n.cache.get, o = n.cache.set, s = a, a(c);
  }
  function a(c) {
    const l = r(c);
    if (l) return l;
    const d = fc(c, n);
    return o(c, d), d;
  }
  return function() {
    return s(pc.apply(null, arguments));
  };
}
const V = (e4) => {
  const t = (n) => n[e4] || [];
  return t.isThemeGetter = true, t;
}, mo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, go = /^\((?:(\w[\w-]*):)?(.+)\)$/i, gc = /^\d+\/\d+$/, bc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, vc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Lt = (e4) => gc.test(e4), O = (e4) => !!e4 && !Number.isNaN(Number(e4)), Ct = (e4) => !!e4 && Number.isInteger(Number(e4)), He = (e4) => e4.endsWith("%") && O(e4.slice(0, -1)), wt = (e4) => bc.test(e4), Cc = () => true, kc = (e4) => yc.test(e4) && !wc.test(e4), bo = () => false, Tc = (e4) => vc.test(e4), Sc = (e4) => xc.test(e4), Ac = (e4) => !y(e4) && !w(e4), Ec = (e4) => Gt(e4, vo, bo), y = (e4) => mo.test(e4), Mt = (e4) => Gt(e4, xo, kc), Ke = (e4) => Gt(e4, Nc, O), or = (e4) => Gt(e4, yo, bo), Oc = (e4) => Gt(e4, wo, Sc), me = (e4) => Gt(e4, Co, Tc), w = (e4) => go.test(e4), Zt = (e4) => jt(e4, xo), Mc = (e4) => jt(e4, Fc), sr = (e4) => jt(e4, yo), Pc = (e4) => jt(e4, vo), Ic = (e4) => jt(e4, wo), ge = (e4) => jt(e4, Co, true), Gt = (e4, t, n) => {
  const r = mo.exec(e4);
  return r ? r[1] ? t(r[1]) : n(r[2]) : false;
}, jt = (e4, t, n = false) => {
  const r = go.exec(e4);
  return r ? r[1] ? t(r[1]) : n : false;
}, yo = (e4) => e4 === "position" || e4 === "percentage", wo = (e4) => e4 === "image" || e4 === "url", vo = (e4) => e4 === "length" || e4 === "size" || e4 === "bg-size", xo = (e4) => e4 === "length", Nc = (e4) => e4 === "number", Fc = (e4) => e4 === "family-name", Co = (e4) => e4 === "shadow", Dc = () => {
  const e4 = V("color"), t = V("font"), n = V("text"), r = V("font-weight"), o = V("tracking"), s = V("leading"), i = V("breakpoint"), a = V("container"), c = V("spacing"), l = V("radius"), d = V("shadow"), u = V("inset-shadow"), p = V("text-shadow"), f = V("drop-shadow"), g = V("blur"), b = V("perspective"), k = V("aspect"), T = V("ease"), S = V("animate"), A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], M = () => [...P(), w, y], L = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], x = () => [w, y, c], z = () => [Lt, "full", "auto", ...x()], G = () => [Ct, "none", "subgrid", w, y], nt = () => ["auto", { span: ["full", Ct, w, y] }, Ct, w, y], j = () => [Ct, "auto", w, y], rt = () => ["auto", "min", "max", "fr", w, y], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...x()], _ = () => [Lt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], v = () => [e4, w, y], ot = () => [...P(), sr, or, { position: [w, y] }], ae = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], In = () => ["auto", "cover", "contain", Pc, Ec, { size: [w, y] }], ze = () => [He, Zt, Mt], U = () => ["", "none", "full", l, w, y], X = () => ["", O, Zt, Mt], ce = () => ["solid", "dashed", "dotted", "double"], Nn = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => [O, He, sr, or], Fn = () => ["", "none", g, w, y], le = () => ["none", O, w, y], ue = () => ["none", O, w, y], Be = () => [O, w, y], de = () => [Lt, "full", ...x()];
  return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [wt], breakpoint: [wt], color: [Cc], container: [wt], "drop-shadow": [wt], ease: ["in", "out", "in-out"], font: [Ac], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [wt], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [wt], shadow: [wt], spacing: ["px", O], text: [wt], "text-shadow": [wt], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", Lt, y, w, k] }], container: ["container"], columns: [{ columns: [O, y, w, a] }], "break-after": [{ "break-after": A() }], "break-before": [{ "break-before": A() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: M() }], overflow: [{ overflow: L() }], "overflow-x": [{ "overflow-x": L() }], "overflow-y": [{ "overflow-y": L() }], overscroll: [{ overscroll: N() }], "overscroll-x": [{ "overscroll-x": N() }], "overscroll-y": [{ "overscroll-y": N() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: z() }], "inset-x": [{ "inset-x": z() }], "inset-y": [{ "inset-y": z() }], start: [{ start: z() }], end: [{ end: z() }], top: [{ top: z() }], right: [{ right: z() }], bottom: [{ bottom: z() }], left: [{ left: z() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [Ct, "auto", w, y] }], basis: [{ basis: [Lt, "full", "auto", a, ...x()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [O, Lt, "auto", "initial", "none", y] }], grow: [{ grow: ["", O, w, y] }], shrink: [{ shrink: ["", O, w, y] }], order: [{ order: [Ct, "first", "last", "none", w, y] }], "grid-cols": [{ "grid-cols": G() }], "col-start-end": [{ col: nt() }], "col-start": [{ "col-start": j() }], "col-end": [{ "col-end": j() }], "grid-rows": [{ "grid-rows": G() }], "row-start-end": [{ row: nt() }], "row-start": [{ "row-start": j() }], "row-end": [{ "row-end": j() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": rt() }], "auto-rows": [{ "auto-rows": rt() }], gap: [{ gap: x() }], "gap-x": [{ "gap-x": x() }], "gap-y": [{ "gap-y": x() }], "justify-content": [{ justify: [...B(), "normal"] }], "justify-items": [{ "justify-items": [...q(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...q()] }], "align-content": [{ content: ["normal", ...B()] }], "align-items": [{ items: [...q(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...q(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": B() }], "place-items": [{ "place-items": [...q(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...q()] }], p: [{ p: x() }], px: [{ px: x() }], py: [{ py: x() }], ps: [{ ps: x() }], pe: [{ pe: x() }], pt: [{ pt: x() }], pr: [{ pr: x() }], pb: [{ pb: x() }], pl: [{ pl: x() }], m: [{ m: W() }], mx: [{ mx: W() }], my: [{ my: W() }], ms: [{ ms: W() }], me: [{ me: W() }], mt: [{ mt: W() }], mr: [{ mr: W() }], mb: [{ mb: W() }], ml: [{ ml: W() }], "space-x": [{ "space-x": x() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": x() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: _() }], w: [{ w: [a, "screen", ..._()] }], "min-w": [{ "min-w": [a, "screen", "none", ..._()] }], "max-w": [{ "max-w": [a, "screen", "none", "prose", { screen: [i] }, ..._()] }], h: [{ h: ["screen", "lh", ..._()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ..._()] }], "max-h": [{ "max-h": ["screen", "lh", ..._()] }], "font-size": [{ text: ["base", n, Zt, Mt] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [r, w, Ke] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", He, y] }], "font-family": [{ font: [Mc, y, t] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [o, w, y] }], "line-clamp": [{ "line-clamp": [O, "none", w, Ke] }], leading: [{ leading: [s, ...x()] }], "list-image": [{ "list-image": ["none", w, y] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", w, y] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: v() }], "text-color": [{ text: v() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...ce(), "wavy"] }], "text-decoration-thickness": [{ decoration: [O, "from-font", "auto", w, Mt] }], "text-decoration-color": [{ decoration: v() }], "underline-offset": [{ "underline-offset": [O, "auto", w, y] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: x() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w, y] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", w, y] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: ot() }], "bg-repeat": [{ bg: ae() }], "bg-size": [{ bg: In() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Ct, w, y], radial: ["", w, y], conic: [Ct, w, y] }, Ic, Oc] }], "bg-color": [{ bg: v() }], "gradient-from-pos": [{ from: ze() }], "gradient-via-pos": [{ via: ze() }], "gradient-to-pos": [{ to: ze() }], "gradient-from": [{ from: v() }], "gradient-via": [{ via: v() }], "gradient-to": [{ to: v() }], rounded: [{ rounded: U() }], "rounded-s": [{ "rounded-s": U() }], "rounded-e": [{ "rounded-e": U() }], "rounded-t": [{ "rounded-t": U() }], "rounded-r": [{ "rounded-r": U() }], "rounded-b": [{ "rounded-b": U() }], "rounded-l": [{ "rounded-l": U() }], "rounded-ss": [{ "rounded-ss": U() }], "rounded-se": [{ "rounded-se": U() }], "rounded-ee": [{ "rounded-ee": U() }], "rounded-es": [{ "rounded-es": U() }], "rounded-tl": [{ "rounded-tl": U() }], "rounded-tr": [{ "rounded-tr": U() }], "rounded-br": [{ "rounded-br": U() }], "rounded-bl": [{ "rounded-bl": U() }], "border-w": [{ border: X() }], "border-w-x": [{ "border-x": X() }], "border-w-y": [{ "border-y": X() }], "border-w-s": [{ "border-s": X() }], "border-w-e": [{ "border-e": X() }], "border-w-t": [{ "border-t": X() }], "border-w-r": [{ "border-r": X() }], "border-w-b": [{ "border-b": X() }], "border-w-l": [{ "border-l": X() }], "divide-x": [{ "divide-x": X() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": X() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...ce(), "hidden", "none"] }], "divide-style": [{ divide: [...ce(), "hidden", "none"] }], "border-color": [{ border: v() }], "border-color-x": [{ "border-x": v() }], "border-color-y": [{ "border-y": v() }], "border-color-s": [{ "border-s": v() }], "border-color-e": [{ "border-e": v() }], "border-color-t": [{ "border-t": v() }], "border-color-r": [{ "border-r": v() }], "border-color-b": [{ "border-b": v() }], "border-color-l": [{ "border-l": v() }], "divide-color": [{ divide: v() }], "outline-style": [{ outline: [...ce(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [O, w, y] }], "outline-w": [{ outline: ["", O, Zt, Mt] }], "outline-color": [{ outline: v() }], shadow: [{ shadow: ["", "none", d, ge, me] }], "shadow-color": [{ shadow: v() }], "inset-shadow": [{ "inset-shadow": ["none", u, ge, me] }], "inset-shadow-color": [{ "inset-shadow": v() }], "ring-w": [{ ring: X() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: v() }], "ring-offset-w": [{ "ring-offset": [O, Mt] }], "ring-offset-color": [{ "ring-offset": v() }], "inset-ring-w": [{ "inset-ring": X() }], "inset-ring-color": [{ "inset-ring": v() }], "text-shadow": [{ "text-shadow": ["none", p, ge, me] }], "text-shadow-color": [{ "text-shadow": v() }], opacity: [{ opacity: [O, w, y] }], "mix-blend": [{ "mix-blend": [...Nn(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": Nn() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [O] }], "mask-image-linear-from-pos": [{ "mask-linear-from": H() }], "mask-image-linear-to-pos": [{ "mask-linear-to": H() }], "mask-image-linear-from-color": [{ "mask-linear-from": v() }], "mask-image-linear-to-color": [{ "mask-linear-to": v() }], "mask-image-t-from-pos": [{ "mask-t-from": H() }], "mask-image-t-to-pos": [{ "mask-t-to": H() }], "mask-image-t-from-color": [{ "mask-t-from": v() }], "mask-image-t-to-color": [{ "mask-t-to": v() }], "mask-image-r-from-pos": [{ "mask-r-from": H() }], "mask-image-r-to-pos": [{ "mask-r-to": H() }], "mask-image-r-from-color": [{ "mask-r-from": v() }], "mask-image-r-to-color": [{ "mask-r-to": v() }], "mask-image-b-from-pos": [{ "mask-b-from": H() }], "mask-image-b-to-pos": [{ "mask-b-to": H() }], "mask-image-b-from-color": [{ "mask-b-from": v() }], "mask-image-b-to-color": [{ "mask-b-to": v() }], "mask-image-l-from-pos": [{ "mask-l-from": H() }], "mask-image-l-to-pos": [{ "mask-l-to": H() }], "mask-image-l-from-color": [{ "mask-l-from": v() }], "mask-image-l-to-color": [{ "mask-l-to": v() }], "mask-image-x-from-pos": [{ "mask-x-from": H() }], "mask-image-x-to-pos": [{ "mask-x-to": H() }], "mask-image-x-from-color": [{ "mask-x-from": v() }], "mask-image-x-to-color": [{ "mask-x-to": v() }], "mask-image-y-from-pos": [{ "mask-y-from": H() }], "mask-image-y-to-pos": [{ "mask-y-to": H() }], "mask-image-y-from-color": [{ "mask-y-from": v() }], "mask-image-y-to-color": [{ "mask-y-to": v() }], "mask-image-radial": [{ "mask-radial": [w, y] }], "mask-image-radial-from-pos": [{ "mask-radial-from": H() }], "mask-image-radial-to-pos": [{ "mask-radial-to": H() }], "mask-image-radial-from-color": [{ "mask-radial-from": v() }], "mask-image-radial-to-color": [{ "mask-radial-to": v() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": P() }], "mask-image-conic-pos": [{ "mask-conic": [O] }], "mask-image-conic-from-pos": [{ "mask-conic-from": H() }], "mask-image-conic-to-pos": [{ "mask-conic-to": H() }], "mask-image-conic-from-color": [{ "mask-conic-from": v() }], "mask-image-conic-to-color": [{ "mask-conic-to": v() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: ot() }], "mask-repeat": [{ mask: ae() }], "mask-size": [{ mask: In() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", w, y] }], filter: [{ filter: ["", "none", w, y] }], blur: [{ blur: Fn() }], brightness: [{ brightness: [O, w, y] }], contrast: [{ contrast: [O, w, y] }], "drop-shadow": [{ "drop-shadow": ["", "none", f, ge, me] }], "drop-shadow-color": [{ "drop-shadow": v() }], grayscale: [{ grayscale: ["", O, w, y] }], "hue-rotate": [{ "hue-rotate": [O, w, y] }], invert: [{ invert: ["", O, w, y] }], saturate: [{ saturate: [O, w, y] }], sepia: [{ sepia: ["", O, w, y] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", w, y] }], "backdrop-blur": [{ "backdrop-blur": Fn() }], "backdrop-brightness": [{ "backdrop-brightness": [O, w, y] }], "backdrop-contrast": [{ "backdrop-contrast": [O, w, y] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", O, w, y] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [O, w, y] }], "backdrop-invert": [{ "backdrop-invert": ["", O, w, y] }], "backdrop-opacity": [{ "backdrop-opacity": [O, w, y] }], "backdrop-saturate": [{ "backdrop-saturate": [O, w, y] }], "backdrop-sepia": [{ "backdrop-sepia": ["", O, w, y] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": x() }], "border-spacing-x": [{ "border-spacing-x": x() }], "border-spacing-y": [{ "border-spacing-y": x() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", w, y] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [O, "initial", w, y] }], ease: [{ ease: ["linear", "initial", T, w, y] }], delay: [{ delay: [O, w, y] }], animate: [{ animate: ["none", S, w, y] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [b, w, y] }], "perspective-origin": [{ "perspective-origin": M() }], rotate: [{ rotate: le() }], "rotate-x": [{ "rotate-x": le() }], "rotate-y": [{ "rotate-y": le() }], "rotate-z": [{ "rotate-z": le() }], scale: [{ scale: ue() }], "scale-x": [{ "scale-x": ue() }], "scale-y": [{ "scale-y": ue() }], "scale-z": [{ "scale-z": ue() }], "scale-3d": ["scale-3d"], skew: [{ skew: Be() }], "skew-x": [{ "skew-x": Be() }], "skew-y": [{ "skew-y": Be() }], transform: [{ transform: [w, y, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: M() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: de() }], "translate-x": [{ "translate-x": de() }], "translate-y": [{ "translate-y": de() }], "translate-z": [{ "translate-z": de() }], "translate-none": ["translate-none"], accent: [{ accent: v() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: v() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w, y] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": x() }], "scroll-mx": [{ "scroll-mx": x() }], "scroll-my": [{ "scroll-my": x() }], "scroll-ms": [{ "scroll-ms": x() }], "scroll-me": [{ "scroll-me": x() }], "scroll-mt": [{ "scroll-mt": x() }], "scroll-mr": [{ "scroll-mr": x() }], "scroll-mb": [{ "scroll-mb": x() }], "scroll-ml": [{ "scroll-ml": x() }], "scroll-p": [{ "scroll-p": x() }], "scroll-px": [{ "scroll-px": x() }], "scroll-py": [{ "scroll-py": x() }], "scroll-ps": [{ "scroll-ps": x() }], "scroll-pe": [{ "scroll-pe": x() }], "scroll-pt": [{ "scroll-pt": x() }], "scroll-pr": [{ "scroll-pr": x() }], "scroll-pb": [{ "scroll-pb": x() }], "scroll-pl": [{ "scroll-pl": x() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", w, y] }], fill: [{ fill: ["none", ...v()] }], "stroke-w": [{ stroke: [O, Zt, Mt, Ke] }], stroke: [{ stroke: ["none", ...v()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] };
}, Lc = mc(Dc);
function pl(...e4) {
  return Lc(be(e4));
}
const ml = tc, gl = ec;
export {
  al as $,
  at as A,
  wr as B,
  Gc as C,
  cl as D,
  ll as E,
  $e as F,
  oe as G,
  vr as H,
  xe as I,
  Qc as J,
  Jc as K,
  qc as L,
  se as M,
  ve as N,
  $c as O,
  gl as P,
  Zc as Q,
  ml as R,
  hl as S,
  dl as T,
  Xc as U,
  rl as V,
  Cs as W,
  jc as X,
  Hr as Y,
  ln as Z,
  Ja as _,
  pl as a,
  dn as a0,
  Kr as a1,
  Wr as a2,
  Yr as a3,
  Ur as a4,
  dt as a5,
  Vr as a6,
  ol as a7,
  Gr as a8,
  il as a9,
  jr as aa,
  Ie as ab,
  tl as ac,
  $a as ad,
  Bt as ae,
  cn as af,
  xs as ag,
  It as ah,
  Cr as ai,
  sl as aj,
  Yc as ak,
  Ps as al,
  Uc as am,
  Jo as an,
  E as b,
  el as c,
  ao as d,
  Qe as e,
  ul as f,
  ho as g,
  fl as h,
  uo as i,
  nl as j,
  Zo as k,
  bt as l,
  hr as m,
  K as n,
  kr as o,
  Et as p,
  yr as q,
  sn as r,
  dr as s,
  lt as t,
  qr as u,
  Ne as v,
  R as w,
  an as x,
  Ns as y,
  br as z
};
