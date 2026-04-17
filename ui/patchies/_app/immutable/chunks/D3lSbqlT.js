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
var _t2, _e2, _s2, _r2, _n, _a, _o, _i, _h, _l, _u, _t3, _t4, _t5, _t6, _t7, _e3, _t8, _e4, _t9, _e5, _s3, _r3, _n2, _a2, _o2, _i2, _ne_instances, h_fn, l_fn, u_fn, m_fn, v_fn, b_fn, __fn, c_fn, A_fn, w_fn, C_fn, d_fn, S_fn, y_fn, M_fn, f_fn, x_fn, I_fn, P_fn, p_fn, g_fn, _E, _t10, _e6, _s4, _t11, _e7, _s5, _r4, _t12, _t13, _t14, _e8, _t15, _e9, _s6, _r5, _n3, _Ke_instances, a_fn, o_fn, _i3, _t16, _t17;
import "./DsnmJJEf.js";
import { a5 as Ue, bc as He, bq as Je, p as D, e as I, a as C, g as V, b as v, c as B, aj as L, z as g, B as E, al as S, bm as $, f as R, d as U, r as H, ao as Ye, aq as Xe, ak as Qe, s as ut, n as Xt, b5 as xe, t as Ie } from "./CeQCqUQ_.js";
import { a as M, s as Ee } from "./DMf1efOI.js";
import { s as K, r as F, p as m } from "./C_-niZe9.js";
import { I as yt } from "./CefFKWAt.js";
import { c as Y } from "./av5sMLXc.js";
import { s as qe, l as Ot, o as de, b as A, w as ht, p as Ze, q as be, r as $e, t as J, v as St, x as we, y as Qt, z as Ft, c as tt, m as W, A as gt, B as ts, H as es, G as ss, I as rs, J as ns, K as os, L as is, M as as, N as cs, O as ls, Q as us, U as hs, V as ds, W as fs, n as lt, k as ps, f as gs, E as ms, D as vs, T as _s, S as fe, a as ot, j as As, u as Cs } from "./BSpKvSVU.js";
import { i as j } from "./CmAffBVh.js";
import { d as X, r as Ss } from "./C66EmW7x.js";
import { b as ys } from "./Iav56Ua9.js";
import { b as xs } from "./jdr7bsmJ.js";
const Is = [];
function Es(n, t = false) {
  return Bt(n, /* @__PURE__ */ new Map(), "", Is);
}
function Bt(n, t, e, s, r = null) {
  if (typeof n == "object" && n !== null) {
    var o = t.get(n);
    if (o !== void 0) return o;
    if (n instanceof Map) return new Map(n);
    if (n instanceof Set) return new Set(n);
    if (Ue(n)) {
      var i = Array(n.length);
      t.set(n, i), r !== null && t.set(r, i);
      for (var a = 0; a < n.length; a += 1) {
        var c = n[a];
        a in n && (i[a] = Bt(c, t, e, s));
      }
      return i;
    }
    if (He(n) === Je) {
      i = {}, t.set(n, i), r !== null && t.set(r, i);
      for (var l in n) i[l] = Bt(n[l], t, e, s);
      return i;
    }
    if (n instanceof Date) return structuredClone(n);
    if (typeof n.toJSON == "function") return Bt(n.toJSON(), t, e, s, n);
  }
  if (n instanceof EventTarget) return n;
  try {
    return structuredClone(n);
  } catch {
    return n;
  }
}
function Sn(n, t) {
  D(t, true);
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
  let e = F(t, ["$$slots", "$$events", "$$legacy"]);
  const s = [["path", { d: "m12 19-7-7 7-7" }], ["path", { d: "M19 12H5" }]];
  yt(n, K({ name: "arrow-left" }, () => e, { get iconNode() {
    return s;
  }, children: (r, o) => {
    var i = I(), a = C(i);
    M(a, () => t.children ?? V), v(r, i);
  }, $$slots: { default: true } })), B();
}
function yn(n, t) {
  D(t, true);
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
  let e = F(t, ["$$slots", "$$events", "$$legacy"]);
  const s = [["path", { d: "M12 7v14" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }]];
  yt(n, K({ name: "book-open" }, () => e, { get iconNode() {
    return s;
  }, children: (r, o) => {
    var i = I(), a = C(i);
    M(a, () => t.children ?? V), v(r, i);
  }, $$slots: { default: true } })), B();
}
function xn(n, t) {
  D(t, true);
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
  let e = F(t, ["$$slots", "$$events", "$$legacy"]);
  const s = [["path", { d: "m15 18-6-6 6-6" }]];
  yt(n, K({ name: "chevron-left" }, () => e, { get iconNode() {
    return s;
  }, children: (r, o) => {
    var i = I(), a = C(i);
    M(a, () => t.children ?? V), v(r, i);
  }, $$slots: { default: true } })), B();
}
function In(n, t) {
  D(t, true);
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
  let e = F(t, ["$$slots", "$$events", "$$legacy"]);
  const s = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "m16 15-3-3 3-3" }]];
  yt(n, K({ name: "panel-left-close" }, () => e, { get iconNode() {
    return s;
  }, children: (r, o) => {
    var i = I(), a = C(i);
    M(a, () => t.children ?? V), v(r, i);
  }, $$slots: { default: true } })), B();
}
function bs(n, t) {
  D(t, true);
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
  let e = F(t, ["$$slots", "$$events", "$$legacy"]);
  const s = [["path", { d: "m21 21-4.34-4.34" }], ["circle", { cx: "11", cy: "11", r: "8" }]];
  yt(n, K({ name: "search" }, () => e, { get iconNode() {
    return s;
  }, children: (r, o) => {
    var i = I(), a = C(i);
    M(a, () => t.children ?? V), v(r, i);
  }, $$slots: { default: true } })), B();
}
function ws(n, t) {
  D(t, true);
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
  let e = F(t, ["$$slots", "$$events", "$$legacy"]);
  const s = [["path", { d: "M18 6 6 18" }], ["path", { d: "m6 6 12 12" }]];
  yt(n, K({ name: "x" }, () => e, { get iconNode() {
    return s;
  }, children: (r, o) => {
    var i = I(), a = C(i);
    M(a, () => t.children ?? V), v(r, i);
  }, $$slots: { default: true } })), B();
}
function at(n) {
  return Array.isArray ? Array.isArray(n) : De(n) === "[object Array]";
}
function Ms(n) {
  if (typeof n == "string") return n;
  let t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Ps(n) {
  return n == null ? "" : Ms(n);
}
function nt(n) {
  return typeof n == "string";
}
function Me(n) {
  return typeof n == "number";
}
function Ds(n) {
  return n === true || n === false || Bs(n) && De(n) == "[object Boolean]";
}
function Pe(n) {
  return typeof n == "object";
}
function Bs(n) {
  return Pe(n) && n !== null;
}
function Z(n) {
  return n != null;
}
function Vt(n) {
  return !n.trim().length;
}
function De(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const Fs = "Incorrect 'index' type", Ns = (n) => `Invalid value for key ${n}`, ks = (n) => `Pattern length exceeds max of ${n}.`, Os = (n) => `Missing ${n} property in key`, Rs = (n) => `Property 'weight' in key '${n}' must be a positive integer`, pe = Object.prototype.hasOwnProperty;
class Vs {
  constructor(t) {
    this._keys = [], this._keyMap = {};
    let e = 0;
    t.forEach((s) => {
      let r = Be(s);
      this._keys.push(r), this._keyMap[r.id] = r, e += r.weight;
    }), this._keys.forEach((s) => {
      s.weight /= e;
    });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Be(n) {
  let t = null, e = null, s = null, r = 1, o = null;
  if (nt(n) || at(n)) s = n, t = ge(n), e = jt(n);
  else {
    if (!pe.call(n, "name")) throw new Error(Os("name"));
    const i = n.name;
    if (s = i, pe.call(n, "weight") && (r = n.weight, r <= 0)) throw new Error(Rs(i));
    t = ge(i), e = jt(i), o = n.getFn;
  }
  return { path: t, id: e, weight: r, src: s, getFn: o };
}
function ge(n) {
  return at(n) ? n : n.split(".");
}
function jt(n) {
  return at(n) ? n.join(".") : n;
}
function Ts(n, t) {
  let e = [], s = false;
  const r = (o, i, a) => {
    if (Z(o)) if (!i[a]) e.push(o);
    else {
      let c = i[a];
      const l = o[c];
      if (!Z(l)) return;
      if (a === i.length - 1 && (nt(l) || Me(l) || Ds(l))) e.push(Ps(l));
      else if (at(l)) {
        s = true;
        for (let u = 0, p = l.length; u < p; u += 1) r(l[u], i, a + 1);
      } else i.length && r(l, i, a + 1);
    }
  };
  return r(n, nt(t) ? t.split(".") : t, 0), s ? e : e[0];
}
const Gs = { includeMatches: false, findAllMatches: false, minMatchCharLength: 1 }, Ls = { isCaseSensitive: false, ignoreDiacritics: false, includeScore: false, keys: [], shouldSort: true, sortFn: (n, t) => n.score === t.score ? n.idx < t.idx ? -1 : 1 : n.score < t.score ? -1 : 1 }, Ks = { location: 0, threshold: 0.6, distance: 100 }, js = { useExtendedSearch: false, getFn: Ts, ignoreLocation: false, ignoreFieldNorm: false, fieldNormWeight: 1 };
var y = { ...Ls, ...Gs, ...Ks, ...js };
const Ws = /[^ ]+/g;
function zs(n = 1, t = 3) {
  const e = /* @__PURE__ */ new Map(), s = Math.pow(10, t);
  return { get(r) {
    const o = r.match(Ws).length;
    if (e.has(o)) return e.get(o);
    const i = 1 / Math.pow(o, 0.5 * n), a = parseFloat(Math.round(i * s) / s);
    return e.set(o, a), a;
  }, clear() {
    e.clear();
  } };
}
class qt {
  constructor({ getFn: t = y.getFn, fieldNormWeight: e = y.fieldNormWeight } = {}) {
    this.norm = zs(e, 3), this.getFn = t, this.isCreated = false, this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    this.keys = t, this._keysMap = {}, t.forEach((e, s) => {
      this._keysMap[e.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = true, nt(this.docs[0]) ? this.docs.forEach((t, e) => {
      this._addString(t, e);
    }) : this.docs.forEach((t, e) => {
      this._addObject(t, e);
    }), this.norm.clear());
  }
  add(t) {
    const e = this.size();
    nt(t) ? this._addString(t, e) : this._addObject(t, e);
  }
  removeAt(t) {
    this.records.splice(t, 1);
    for (let e = t, s = this.size(); e < s; e += 1) this.records[e].i -= 1;
  }
  getValueForItemAtKeyId(t, e) {
    return t[this._keysMap[e]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, e) {
    if (!Z(t) || Vt(t)) return;
    let s = { v: t, i: e, n: this.norm.get(t) };
    this.records.push(s);
  }
  _addObject(t, e) {
    let s = { i: e, $: {} };
    this.keys.forEach((r, o) => {
      let i = r.getFn ? r.getFn(t) : this.getFn(t, r.path);
      if (Z(i)) {
        if (at(i)) {
          let a = [];
          const c = [{ nestedArrIndex: -1, value: i }];
          for (; c.length; ) {
            const { nestedArrIndex: l, value: u } = c.pop();
            if (Z(u)) if (nt(u) && !Vt(u)) {
              let p = { v: u, i: l, n: this.norm.get(u) };
              a.push(p);
            } else at(u) && u.forEach((p, d) => {
              c.push({ nestedArrIndex: d, value: p });
            });
          }
          s.$[o] = a;
        } else if (nt(i) && !Vt(i)) {
          let a = { v: i, n: this.norm.get(i) };
          s.$[o] = a;
        }
      }
    }), this.records.push(s);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function Fe(n, t, { getFn: e = y.getFn, fieldNormWeight: s = y.fieldNormWeight } = {}) {
  const r = new qt({ getFn: e, fieldNormWeight: s });
  return r.setKeys(n.map(Be)), r.setSources(t), r.create(), r;
}
function Us(n, { getFn: t = y.getFn, fieldNormWeight: e = y.fieldNormWeight } = {}) {
  const { keys: s, records: r } = n, o = new qt({ getFn: t, fieldNormWeight: e });
  return o.setKeys(s), o.setIndexRecords(r), o;
}
function Pt(n, { errors: t = 0, currentLocation: e = 0, expectedLocation: s = 0, distance: r = y.distance, ignoreLocation: o = y.ignoreLocation } = {}) {
  const i = t / n.length;
  if (o) return i;
  const a = Math.abs(s - e);
  return r ? i + a / r : a ? 1 : i;
}
function Hs(n = [], t = y.minMatchCharLength) {
  let e = [], s = -1, r = -1, o = 0;
  for (let i = n.length; o < i; o += 1) {
    let a = n[o];
    a && s === -1 ? s = o : !a && s !== -1 && (r = o - 1, r - s + 1 >= t && e.push([s, r]), s = -1);
  }
  return n[o - 1] && o - s >= t && e.push([s, o - 1]), e;
}
const mt = 32;
function Js(n, t, e, { location: s = y.location, distance: r = y.distance, threshold: o = y.threshold, findAllMatches: i = y.findAllMatches, minMatchCharLength: a = y.minMatchCharLength, includeMatches: c = y.includeMatches, ignoreLocation: l = y.ignoreLocation } = {}) {
  if (t.length > mt) throw new Error(ks(mt));
  const u = t.length, p = n.length, d = Math.max(0, Math.min(s, p));
  let f = o, h = d;
  const _ = a > 1 || c, x = _ ? Array(p) : [];
  let b;
  for (; (b = n.indexOf(t, h)) > -1; ) {
    let k = Pt(t, { currentLocation: b, expectedLocation: d, distance: r, ignoreLocation: l });
    if (f = Math.min(k, f), h = b + u, _) {
      let G = 0;
      for (; G < u; ) x[b + G] = 1, G += 1;
    }
  }
  h = -1;
  let w = [], N = 1, T = u + p;
  const it = 1 << u - 1;
  for (let k = 0; k < u; k += 1) {
    let G = 0, q = T;
    for (; G < q; ) Pt(t, { errors: k, currentLocation: d + q, expectedLocation: d, distance: r, ignoreLocation: l }) <= f ? G = q : T = q, q = Math.floor((T - G) / 2 + G);
    T = q;
    let st = Math.max(1, d - q + 1), ct = i ? p : Math.min(d + q, p) + u, P = Array(ct + 2);
    P[ct + 1] = (1 << k) - 1;
    for (let O = ct; O >= st; O -= 1) {
      let z = O - 1, Mt = e[n.charAt(z)];
      if (_ && (x[z] = +!!Mt), P[O] = (P[O + 1] << 1 | 1) & Mt, k && (P[O] |= (w[O + 1] | w[O]) << 1 | 1 | w[O + 1]), P[O] & it && (N = Pt(t, { errors: k, currentLocation: z, expectedLocation: d, distance: r, ignoreLocation: l }), N <= f)) {
        if (f = N, h = z, h <= d) break;
        st = Math.max(1, 2 * d - h);
      }
    }
    if (Pt(t, { errors: k + 1, currentLocation: d, expectedLocation: d, distance: r, ignoreLocation: l }) > f) break;
    w = P;
  }
  const rt = { isMatch: h >= 0, score: Math.max(1e-3, N) };
  if (_) {
    const k = Hs(x, a);
    k.length ? c && (rt.indices = k) : rt.isMatch = false;
  }
  return rt;
}
function Ys(n) {
  let t = {};
  for (let e = 0, s = n.length; e < s; e += 1) {
    const r = n.charAt(e);
    t[r] = (t[r] || 0) | 1 << s - e - 1;
  }
  return t;
}
const Nt = String.prototype.normalize ? (n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "") : (n) => n;
class Ne {
  constructor(t, { location: e = y.location, threshold: s = y.threshold, distance: r = y.distance, includeMatches: o = y.includeMatches, findAllMatches: i = y.findAllMatches, minMatchCharLength: a = y.minMatchCharLength, isCaseSensitive: c = y.isCaseSensitive, ignoreDiacritics: l = y.ignoreDiacritics, ignoreLocation: u = y.ignoreLocation } = {}) {
    if (this.options = { location: e, threshold: s, distance: r, includeMatches: o, findAllMatches: i, minMatchCharLength: a, isCaseSensitive: c, ignoreDiacritics: l, ignoreLocation: u }, t = c ? t : t.toLowerCase(), t = l ? Nt(t) : t, this.pattern = t, this.chunks = [], !this.pattern.length) return;
    const p = (f, h) => {
      this.chunks.push({ pattern: f, alphabet: Ys(f), startIndex: h });
    }, d = this.pattern.length;
    if (d > mt) {
      let f = 0;
      const h = d % mt, _ = d - h;
      for (; f < _; ) p(this.pattern.substr(f, mt), f), f += mt;
      if (h) {
        const x = d - mt;
        p(this.pattern.substr(x), x);
      }
    } else p(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: e, ignoreDiacritics: s, includeMatches: r } = this.options;
    if (t = e ? t : t.toLowerCase(), t = s ? Nt(t) : t, this.pattern === t) {
      let _ = { isMatch: true, score: 0 };
      return r && (_.indices = [[0, t.length - 1]]), _;
    }
    const { location: o, distance: i, threshold: a, findAllMatches: c, minMatchCharLength: l, ignoreLocation: u } = this.options;
    let p = [], d = 0, f = false;
    this.chunks.forEach(({ pattern: _, alphabet: x, startIndex: b }) => {
      const { isMatch: w, score: N, indices: T } = Js(t, _, x, { location: o + b, distance: i, threshold: a, findAllMatches: c, minMatchCharLength: l, includeMatches: r, ignoreLocation: u });
      w && (f = true), d += N, w && T && (p = [...p, ...T]);
    });
    let h = { isMatch: f, score: f ? d / this.chunks.length : 1 };
    return f && r && (h.indices = p), h;
  }
}
class ft {
  constructor(t) {
    this.pattern = t;
  }
  static isMultiMatch(t) {
    return me(t, this.multiRegex);
  }
  static isSingleMatch(t) {
    return me(t, this.singleRegex);
  }
  search() {
  }
}
function me(n, t) {
  const e = n.match(t);
  return e ? e[1] : null;
}
class Xs extends ft {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(t) {
    const e = t === this.pattern;
    return { isMatch: e, score: e ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class Qs extends ft {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(t) {
    const s = t.indexOf(this.pattern) === -1;
    return { isMatch: s, score: s ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class qs extends ft {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(t) {
    const e = t.startsWith(this.pattern);
    return { isMatch: e, score: e ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class Zs extends ft {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(t) {
    const e = !t.startsWith(this.pattern);
    return { isMatch: e, score: e ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class $s extends ft {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(t) {
    const e = t.endsWith(this.pattern);
    return { isMatch: e, score: e ? 0 : 1, indices: [t.length - this.pattern.length, t.length - 1] };
  }
}
class tr extends ft {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(t) {
    const e = !t.endsWith(this.pattern);
    return { isMatch: e, score: e ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class ke extends ft {
  constructor(t, { location: e = y.location, threshold: s = y.threshold, distance: r = y.distance, includeMatches: o = y.includeMatches, findAllMatches: i = y.findAllMatches, minMatchCharLength: a = y.minMatchCharLength, isCaseSensitive: c = y.isCaseSensitive, ignoreDiacritics: l = y.ignoreDiacritics, ignoreLocation: u = y.ignoreLocation } = {}) {
    super(t), this._bitapSearch = new Ne(t, { location: e, threshold: s, distance: r, includeMatches: o, findAllMatches: i, minMatchCharLength: a, isCaseSensitive: c, ignoreDiacritics: l, ignoreLocation: u });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(t) {
    return this._bitapSearch.searchIn(t);
  }
}
class Oe extends ft {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(t) {
    let e = 0, s;
    const r = [], o = this.pattern.length;
    for (; (s = t.indexOf(this.pattern, e)) > -1; ) e = s + o, r.push([s, e - 1]);
    const i = !!r.length;
    return { isMatch: i, score: i ? 0 : 1, indices: r };
  }
}
const Wt = [Xs, Oe, qs, Zs, tr, $s, Qs, ke], ve = Wt.length, er = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, sr = "|";
function rr(n, t = {}) {
  return n.split(sr).map((e) => {
    let s = e.trim().split(er).filter((o) => o && !!o.trim()), r = [];
    for (let o = 0, i = s.length; o < i; o += 1) {
      const a = s[o];
      let c = false, l = -1;
      for (; !c && ++l < ve; ) {
        const u = Wt[l];
        let p = u.isMultiMatch(a);
        p && (r.push(new u(p, t)), c = true);
      }
      if (!c) for (l = -1; ++l < ve; ) {
        const u = Wt[l];
        let p = u.isSingleMatch(a);
        if (p) {
          r.push(new u(p, t));
          break;
        }
      }
    }
    return r;
  });
}
const nr = /* @__PURE__ */ new Set([ke.type, Oe.type]);
class or {
  constructor(t, { isCaseSensitive: e = y.isCaseSensitive, ignoreDiacritics: s = y.ignoreDiacritics, includeMatches: r = y.includeMatches, minMatchCharLength: o = y.minMatchCharLength, ignoreLocation: i = y.ignoreLocation, findAllMatches: a = y.findAllMatches, location: c = y.location, threshold: l = y.threshold, distance: u = y.distance } = {}) {
    this.query = null, this.options = { isCaseSensitive: e, ignoreDiacritics: s, includeMatches: r, minMatchCharLength: o, findAllMatches: a, ignoreLocation: i, location: c, threshold: l, distance: u }, t = e ? t : t.toLowerCase(), t = s ? Nt(t) : t, this.pattern = t, this.query = rr(this.pattern, this.options);
  }
  static condition(t, e) {
    return e.useExtendedSearch;
  }
  searchIn(t) {
    const e = this.query;
    if (!e) return { isMatch: false, score: 1 };
    const { includeMatches: s, isCaseSensitive: r, ignoreDiacritics: o } = this.options;
    t = r ? t : t.toLowerCase(), t = o ? Nt(t) : t;
    let i = 0, a = [], c = 0;
    for (let l = 0, u = e.length; l < u; l += 1) {
      const p = e[l];
      a.length = 0, i = 0;
      for (let d = 0, f = p.length; d < f; d += 1) {
        const h = p[d], { isMatch: _, indices: x, score: b } = h.search(t);
        if (_) {
          if (i += 1, c += b, s) {
            const w = h.constructor.type;
            nr.has(w) ? a = [...a, ...x] : a.push(x);
          }
        } else {
          c = 0, i = 0, a.length = 0;
          break;
        }
      }
      if (i) {
        let d = { isMatch: true, score: c / i };
        return s && (d.indices = a), d;
      }
    }
    return { isMatch: false, score: 1 };
  }
}
const zt = [];
function ir(...n) {
  zt.push(...n);
}
function Ut(n, t) {
  for (let e = 0, s = zt.length; e < s; e += 1) {
    let r = zt[e];
    if (r.condition(n, t)) return new r(n, t);
  }
  return new Ne(n, t);
}
const kt = { AND: "$and", OR: "$or" }, Ht = { PATH: "$path", PATTERN: "$val" }, Jt = (n) => !!(n[kt.AND] || n[kt.OR]), ar = (n) => !!n[Ht.PATH], cr = (n) => !at(n) && Pe(n) && !Jt(n), _e = (n) => ({ [kt.AND]: Object.keys(n).map((t) => ({ [t]: n[t] })) });
function Re(n, t, { auto: e = true } = {}) {
  const s = (r) => {
    let o = Object.keys(r);
    const i = ar(r);
    if (!i && o.length > 1 && !Jt(r)) return s(_e(r));
    if (cr(r)) {
      const c = i ? r[Ht.PATH] : o[0], l = i ? r[Ht.PATTERN] : r[c];
      if (!nt(l)) throw new Error(Ns(c));
      const u = { keyId: jt(c), pattern: l };
      return e && (u.searcher = Ut(l, t)), u;
    }
    let a = { children: [], operator: o[0] };
    return o.forEach((c) => {
      const l = r[c];
      at(l) && l.forEach((u) => {
        a.children.push(s(u));
      });
    }), a;
  };
  return Jt(n) || (n = _e(n)), s(n);
}
function lr(n, { ignoreFieldNorm: t = y.ignoreFieldNorm }) {
  n.forEach((e) => {
    let s = 1;
    e.matches.forEach(({ key: r, norm: o, score: i }) => {
      const a = r ? r.weight : null;
      s *= Math.pow(i === 0 && a ? Number.EPSILON : i, (a || 1) * (t ? 1 : o));
    }), e.score = s;
  });
}
function ur(n, t) {
  const e = n.matches;
  t.matches = [], Z(e) && e.forEach((s) => {
    if (!Z(s.indices) || !s.indices.length) return;
    const { indices: r, value: o } = s;
    let i = { indices: r, value: o };
    s.key && (i.key = s.key.src), s.idx > -1 && (i.refIndex = s.idx), t.matches.push(i);
  });
}
function hr(n, t) {
  t.score = n.score;
}
function dr(n, t, { includeMatches: e = y.includeMatches, includeScore: s = y.includeScore } = {}) {
  const r = [];
  return e && r.push(ur), s && r.push(hr), n.map((o) => {
    const { idx: i } = o, a = { item: t[i], refIndex: i };
    return r.length && r.forEach((c) => {
      c(o, a);
    }), a;
  });
}
class wt {
  constructor(t, e = {}, s) {
    this.options = { ...y, ...e }, this.options.useExtendedSearch, this._keyStore = new Vs(this.options.keys), this.setCollection(t, s);
  }
  setCollection(t, e) {
    if (this._docs = t, e && !(e instanceof qt)) throw new Error(Fs);
    this._myIndex = e || Fe(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight });
  }
  add(t) {
    Z(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => false) {
    const e = [];
    for (let s = 0, r = this._docs.length; s < r; s += 1) {
      const o = this._docs[s];
      t(o, s) && (this.removeAt(s), s -= 1, r -= 1, e.push(o));
    }
    return e;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: e = -1 } = {}) {
    const { includeMatches: s, includeScore: r, shouldSort: o, sortFn: i, ignoreFieldNorm: a } = this.options;
    let c = nt(t) ? nt(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
    return lr(c, { ignoreFieldNorm: a }), o && c.sort(i), Me(e) && e > -1 && (c = c.slice(0, e)), dr(c, this._docs, { includeMatches: s, includeScore: r });
  }
  _searchStringList(t) {
    const e = Ut(t, this.options), { records: s } = this._myIndex, r = [];
    return s.forEach(({ v: o, i, n: a }) => {
      if (!Z(o)) return;
      const { isMatch: c, score: l, indices: u } = e.searchIn(o);
      c && r.push({ item: o, idx: i, matches: [{ score: l, value: o, norm: a, indices: u }] });
    }), r;
  }
  _searchLogical(t) {
    const e = Re(t, this.options), s = (a, c, l) => {
      if (!a.children) {
        const { keyId: p, searcher: d } = a, f = this._findMatches({ key: this._keyStore.get(p), value: this._myIndex.getValueForItemAtKeyId(c, p), searcher: d });
        return f && f.length ? [{ idx: l, item: c, matches: f }] : [];
      }
      const u = [];
      for (let p = 0, d = a.children.length; p < d; p += 1) {
        const f = a.children[p], h = s(f, c, l);
        if (h.length) u.push(...h);
        else if (a.operator === kt.AND) return [];
      }
      return u;
    }, r = this._myIndex.records, o = {}, i = [];
    return r.forEach(({ $: a, i: c }) => {
      if (Z(a)) {
        let l = s(e, a, c);
        l.length && (o[c] || (o[c] = { idx: c, item: a, matches: [] }, i.push(o[c])), l.forEach(({ matches: u }) => {
          o[c].matches.push(...u);
        }));
      }
    }), i;
  }
  _searchObjectList(t) {
    const e = Ut(t, this.options), { keys: s, records: r } = this._myIndex, o = [];
    return r.forEach(({ $: i, i: a }) => {
      if (!Z(i)) return;
      let c = [];
      s.forEach((l, u) => {
        c.push(...this._findMatches({ key: l, value: i[u], searcher: e }));
      }), c.length && o.push({ idx: a, item: i, matches: c });
    }), o;
  }
  _findMatches({ key: t, value: e, searcher: s }) {
    if (!Z(e)) return [];
    let r = [];
    if (at(e)) e.forEach(({ v: o, i, n: a }) => {
      if (!Z(o)) return;
      const { isMatch: c, score: l, indices: u } = s.searchIn(o);
      c && r.push({ score: l, key: t, value: o, idx: i, norm: a, indices: u });
    });
    else {
      const { v: o, n: i } = e, { isMatch: a, score: c, indices: l } = s.searchIn(o);
      a && r.push({ score: c, key: t, value: o, norm: i, indices: l });
    }
    return r;
  }
}
wt.version = "7.1.0";
wt.createIndex = Fe;
wt.parseIndex = Us;
wt.config = y;
wt.parseQuery = Re;
ir(or);
const Ve = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", transform: "translateX(-100%)" }, En = qe(Ve), fr = be({ component: "dialog", parts: ["content", "trigger", "overlay", "title", "description", "close", "cancel", "action"] }), dt = new Ot("Dialog.Root | AlertDialog.Root");
const _Zt = class _Zt {
  constructor(t, e) {
    __publicField(this, "opts");
    __privateAdd(this, _t2, L(null));
    __privateAdd(this, _e2, L(null));
    __privateAdd(this, _s2, L(null));
    __privateAdd(this, _r2, L(null));
    __privateAdd(this, _n, L(void 0));
    __privateAdd(this, _a, L(void 0));
    __privateAdd(this, _o, L(void 0));
    __privateAdd(this, _i, L(void 0));
    __privateAdd(this, _h, L(null));
    __privateAdd(this, _l, L(0));
    __publicField(this, "depth");
    __publicField(this, "parent");
    __publicField(this, "contentPresence");
    __publicField(this, "overlayPresence");
    __publicField(this, "getBitsAttr", (t) => fr.getAttr(t, this.opts.variant.current));
    __privateAdd(this, _u, S(() => ({ "data-state": $e(this.opts.open.current) })));
    this.opts = t, this.parent = e, this.depth = e ? e.depth + 1 : 0, this.handleOpen = this.handleOpen.bind(this), this.handleClose = this.handleClose.bind(this), this.contentPresence = new de({ ref: A(() => this.contentNode), open: this.opts.open, enabled: true, onComplete: () => {
      this.opts.onOpenChangeComplete.current(this.opts.open.current);
    } }), this.overlayPresence = new de({ ref: A(() => this.overlayNode), open: this.opts.open, enabled: true }), ht(() => this.opts.open.current, (s) => {
      this.parent && (s ? this.parent.incrementNested() : this.parent.decrementNested());
    }, { lazy: true }), Ze(() => {
      var _a3;
      this.opts.open.current && ((_a3 = this.parent) == null ? void 0 : _a3.decrementNested());
    });
  }
  static create(t) {
    const e = dt.getOr(null);
    return dt.set(new _Zt(t, e));
  }
  get triggerNode() {
    return g(__privateGet(this, _t2));
  }
  set triggerNode(t) {
    E(__privateGet(this, _t2), t, true);
  }
  get contentNode() {
    return g(__privateGet(this, _e2));
  }
  set contentNode(t) {
    E(__privateGet(this, _e2), t, true);
  }
  get overlayNode() {
    return g(__privateGet(this, _s2));
  }
  set overlayNode(t) {
    E(__privateGet(this, _s2), t, true);
  }
  get descriptionNode() {
    return g(__privateGet(this, _r2));
  }
  set descriptionNode(t) {
    E(__privateGet(this, _r2), t, true);
  }
  get contentId() {
    return g(__privateGet(this, _n));
  }
  set contentId(t) {
    E(__privateGet(this, _n), t, true);
  }
  get titleId() {
    return g(__privateGet(this, _a));
  }
  set titleId(t) {
    E(__privateGet(this, _a), t, true);
  }
  get triggerId() {
    return g(__privateGet(this, _o));
  }
  set triggerId(t) {
    E(__privateGet(this, _o), t, true);
  }
  get descriptionId() {
    return g(__privateGet(this, _i));
  }
  set descriptionId(t) {
    E(__privateGet(this, _i), t, true);
  }
  get cancelNode() {
    return g(__privateGet(this, _h));
  }
  set cancelNode(t) {
    E(__privateGet(this, _h), t, true);
  }
  get nestedOpenCount() {
    return g(__privateGet(this, _l));
  }
  set nestedOpenCount(t) {
    E(__privateGet(this, _l), t, true);
  }
  handleOpen() {
    this.opts.open.current || (this.opts.open.current = true);
  }
  handleClose() {
    this.opts.open.current && (this.opts.open.current = false);
  }
  incrementNested() {
    var _a3;
    this.nestedOpenCount++, (_a3 = this.parent) == null ? void 0 : _a3.incrementNested();
  }
  decrementNested() {
    var _a3;
    this.nestedOpenCount !== 0 && (this.nestedOpenCount--, (_a3 = this.parent) == null ? void 0 : _a3.decrementNested());
  }
  get sharedProps() {
    return g(__privateGet(this, _u));
  }
  set sharedProps(t) {
    E(__privateGet(this, _u), t);
  }
};
_t2 = new WeakMap();
_e2 = new WeakMap();
_s2 = new WeakMap();
_r2 = new WeakMap();
_n = new WeakMap();
_a = new WeakMap();
_o = new WeakMap();
_i = new WeakMap();
_h = new WeakMap();
_l = new WeakMap();
_u = new WeakMap();
let Zt = _Zt;
const _Te = class _Te {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t3, S(() => ({ id: this.opts.id.current, "aria-haspopup": "dialog", "aria-expanded": Ft(this.root.opts.open.current), "aria-controls": this.root.contentId, [this.root.getBitsAttr("trigger")]: "", onkeydown: this.onkeydown, onclick: this.onclick, disabled: this.opts.disabled.current ? true : void 0, ...this.root.sharedProps, ...this.attachment })));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref, (s) => {
      this.root.triggerNode = s, this.root.triggerId = s == null ? void 0 : s.id;
    }), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
  }
  static create(t) {
    return new _Te(t, dt.get());
  }
  onclick(t) {
    this.opts.disabled.current || t.button > 0 || this.root.handleOpen();
  }
  onkeydown(t) {
    this.opts.disabled.current || (t.key === we || t.key === Qt) && (t.preventDefault(), this.root.handleOpen());
  }
  get props() {
    return g(__privateGet(this, _t3));
  }
  set props(t) {
    E(__privateGet(this, _t3), t);
  }
};
_t3 = new WeakMap();
let Te = _Te;
const _$t = class _$t {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t4, S(() => ({ id: this.opts.id.current, [this.root.getBitsAttr(this.opts.variant.current)]: "", onclick: this.onclick, onkeydown: this.onkeydown, disabled: this.opts.disabled.current ? true : void 0, tabindex: 0, ...this.root.sharedProps, ...this.attachment })));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
  }
  static create(t) {
    return new _$t(t, dt.get());
  }
  onclick(t) {
    this.opts.disabled.current || t.button > 0 || this.root.handleClose();
  }
  onkeydown(t) {
    this.opts.disabled.current || (t.key === we || t.key === Qt) && (t.preventDefault(), this.root.handleClose());
  }
  get props() {
    return g(__privateGet(this, _t4));
  }
  set props(t) {
    E(__privateGet(this, _t4), t);
  }
};
_t4 = new WeakMap();
let $t = _$t;
const _te = class _te {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t5, S(() => ({ id: this.opts.id.current, role: "heading", "aria-level": this.opts.level.current, [this.root.getBitsAttr("title")]: "", ...this.root.sharedProps, ...this.attachment })));
    this.opts = t, this.root = e, this.root.titleId = this.opts.id.current, this.attachment = J(this.opts.ref), ht.pre(() => this.opts.id.current, (s) => {
      this.root.titleId = s;
    });
  }
  static create(t) {
    return new _te(t, dt.get());
  }
  get props() {
    return g(__privateGet(this, _t5));
  }
  set props(t) {
    E(__privateGet(this, _t5), t);
  }
};
_t5 = new WeakMap();
let te = _te;
const _ee = class _ee {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t6, S(() => ({ id: this.opts.id.current, [this.root.getBitsAttr("description")]: "", ...this.root.sharedProps, ...this.attachment })));
    this.opts = t, this.root = e, this.root.descriptionId = this.opts.id.current, this.attachment = J(this.opts.ref, (s) => {
      this.root.descriptionNode = s;
    }), ht.pre(() => this.opts.id.current, (s) => {
      this.root.descriptionId = s;
    });
  }
  static create(t) {
    return new _ee(t, dt.get());
  }
  get props() {
    return g(__privateGet(this, _t6));
  }
  set props(t) {
    E(__privateGet(this, _t6), t);
  }
};
_t6 = new WeakMap();
let ee = _ee;
const _se = class _se {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t7, S(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _e3, S(() => ({ id: this.opts.id.current, role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog", "aria-modal": "true", "aria-describedby": this.root.descriptionId, "aria-labelledby": this.root.titleId, [this.root.getBitsAttr("content")]: "", style: { pointerEvents: "auto", outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0, "--bits-dialog-depth": this.root.depth, "--bits-dialog-nested-count": this.root.nestedOpenCount }, tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0, "data-nested-open": St(this.root.nestedOpenCount > 0), "data-nested": St(this.root.parent !== null), ...this.root.sharedProps, ...this.attachment })));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref, (s) => {
      this.root.contentNode = s, this.root.contentId = s == null ? void 0 : s.id;
    });
  }
  static create(t) {
    return new _se(t, dt.get());
  }
  get snippetProps() {
    return g(__privateGet(this, _t7));
  }
  set snippetProps(t) {
    E(__privateGet(this, _t7), t);
  }
  get props() {
    return g(__privateGet(this, _e3));
  }
  set props(t) {
    E(__privateGet(this, _e3), t);
  }
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
};
_t7 = new WeakMap();
_e3 = new WeakMap();
let se = _se;
const _re = class _re {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t8, S(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _e4, S(() => ({ id: this.opts.id.current, [this.root.getBitsAttr("overlay")]: "", style: { pointerEvents: "auto", "--bits-dialog-depth": this.root.depth, "--bits-dialog-nested-count": this.root.nestedOpenCount }, "data-nested-open": St(this.root.nestedOpenCount > 0), "data-nested": St(this.root.parent !== null), ...this.root.sharedProps, ...this.attachment })));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref, (s) => this.root.overlayNode = s);
  }
  static create(t) {
    return new _re(t, dt.get());
  }
  get snippetProps() {
    return g(__privateGet(this, _t8));
  }
  set snippetProps(t) {
    E(__privateGet(this, _t8), t);
  }
  get props() {
    return g(__privateGet(this, _e4));
  }
  set props(t) {
    E(__privateGet(this, _e4), t);
  }
  get shouldRender() {
    return this.root.overlayPresence.shouldRender;
  }
};
_t8 = new WeakMap();
_e4 = new WeakMap();
let re = _re;
var pr = R("<div><!></div>");
function gr(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = m(t, "level", 3, 2), i = F(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "child", "children", "level"]);
  const a = te.create({ id: A(() => s()), level: A(() => o()), ref: A(() => r(), (f) => r(f)) }), c = S(() => W(i, a.props));
  var l = I(), u = C(l);
  {
    var p = (f) => {
      var h = I(), _ = C(h);
      M(_, () => t.child, () => ({ props: g(c) })), v(f, h);
    }, d = (f) => {
      var h = pr();
      X(h, () => ({ ...g(c) }));
      var _ = U(h);
      M(_, () => t.children ?? V), H(h), v(f, h);
    };
    j(u, (f) => {
      t.child ? f(p) : f(d, false);
    });
  }
  v(n, l), B();
}
var mr = R("<div><!></div>");
function vr(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "forceMount", 3, false), o = m(t, "ref", 15, null), i = F(t, ["$$slots", "$$events", "$$legacy", "id", "forceMount", "child", "children", "ref"]);
  const a = re.create({ id: A(() => s()), ref: A(() => o(), (d) => o(d)) }), c = S(() => W(i, a.props));
  var l = I(), u = C(l);
  {
    var p = (d) => {
      var f = I(), h = C(f);
      {
        var _ = (b) => {
          var w = I(), N = C(w);
          {
            let T = S(() => ({ props: W(g(c)), ...a.snippetProps }));
            M(N, () => t.child, () => g(T));
          }
          v(b, w);
        }, x = (b) => {
          var w = mr();
          X(w, (T) => ({ ...T }), [() => W(g(c))]);
          var N = U(w);
          M(N, () => t.children ?? V, () => a.snippetProps), H(w), v(b, w);
        };
        j(h, (b) => {
          t.child ? b(_) : b(x, false);
        });
      }
      v(d, f);
    };
    j(u, (d) => {
      (a.shouldRender || r()) && d(p);
    });
  }
  v(n, l), B();
}
var _r = R("<div><!></div>");
function Ar(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = F(t, ["$$slots", "$$events", "$$legacy", "id", "children", "child", "ref"]);
  const i = ee.create({ id: A(() => s()), ref: A(() => r(), (d) => r(d)) }), a = S(() => W(o, i.props));
  var c = I(), l = C(c);
  {
    var u = (d) => {
      var f = I(), h = C(f);
      M(h, () => t.child, () => ({ props: g(a) })), v(d, f);
    }, p = (d) => {
      var f = _r();
      X(f, () => ({ ...g(a) }));
      var h = U(f);
      M(h, () => t.children ?? V), H(f), v(d, f);
    };
    j(l, (d) => {
      t.child ? d(u) : d(p, false);
    });
  }
  v(n, c), B();
}
function Cr(n, t) {
  let e = n.nextElementSibling;
  for (; e; ) {
    if (e.matches(t)) return e;
    e = e.nextElementSibling;
  }
}
function Sr(n, t) {
  let e = n.previousElementSibling;
  for (; e; ) {
    if (e.matches(t)) return e;
    e = e.previousElementSibling;
  }
}
function Ge(n) {
  if (typeof CSS < "u" && typeof CSS.escape == "function") return CSS.escape(n);
  const t = n.length;
  let e = -1, s, r = "";
  const o = n.charCodeAt(0);
  if (t === 1 && o === 45) return "\\" + n;
  for (; ++e < t; ) {
    if (s = n.charCodeAt(e), s === 0) {
      r += "\uFFFD";
      continue;
    }
    if (s >= 1 && s <= 31 || s === 127 || e === 0 && s >= 48 && s <= 57 || e === 1 && s >= 48 && s <= 57 && o === 45) {
      r += "\\" + s.toString(16) + " ";
      continue;
    }
    if (s >= 128 || s === 45 || s === 95 || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122) {
      r += n.charAt(e);
      continue;
    }
    r += "\\" + n.charAt(e);
  }
  return r;
}
const vt = "data-value", Q = be({ component: "command", parts: ["root", "list", "input", "separator", "loading", "empty", "group", "group-items", "group-heading", "item", "viewport", "input-label"] }), Ct = Q.selector("group"), Tt = Q.selector("group-items"), Ae = Q.selector("group-heading"), Le = Q.selector("item"), Gt = `${Q.selector("item")}:not([aria-disabled="true"])`, _t = new Ot("Command.Root"), yr = new Ot("Command.List"), bt = new Ot("Command.Group"), Ce = { search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
const _ne = class _ne {
  constructor(t) {
    __privateAdd(this, _ne_instances);
    __publicField(this, "opts");
    __publicField(this, "attachment");
    __privateAdd(this, _t9, false);
    __privateAdd(this, _e5, true);
    __publicField(this, "sortAfterTick", false);
    __publicField(this, "sortAndFilterAfterTick", false);
    __publicField(this, "allItems", /* @__PURE__ */ new Set());
    __publicField(this, "allGroups", /* @__PURE__ */ new Map());
    __publicField(this, "allIds", /* @__PURE__ */ new Map());
    __privateAdd(this, _s3, L(0));
    __privateAdd(this, _r3, L(null));
    __privateAdd(this, _n2, L(null));
    __privateAdd(this, _a2, L(null));
    __privateAdd(this, _o2, L(Ce));
    __privateAdd(this, _i2, L(Qe(Ce)));
    __privateAdd(this, _E, S(() => ({ id: this.opts.id.current, role: "application", [Q.root]: "", tabindex: -1, onkeydown: this.onkeydown, ...this.attachment })));
    this.opts = t, this.attachment = J(this.opts.ref);
    const e = { ...this._commandState, value: this.opts.value.current ?? "" };
    this._commandState = e, this.commandState = e, this.onkeydown = this.onkeydown.bind(this);
  }
  static create(t) {
    return _t.set(new _ne(t));
  }
  get key() {
    return g(__privateGet(this, _s3));
  }
  set key(t) {
    E(__privateGet(this, _s3), t, true);
  }
  get viewportNode() {
    return g(__privateGet(this, _r3));
  }
  set viewportNode(t) {
    E(__privateGet(this, _r3), t, true);
  }
  get inputNode() {
    return g(__privateGet(this, _n2));
  }
  set inputNode(t) {
    E(__privateGet(this, _n2), t, true);
  }
  get labelNode() {
    return g(__privateGet(this, _a2));
  }
  set labelNode(t) {
    E(__privateGet(this, _a2), t, true);
  }
  get commandState() {
    return g(__privateGet(this, _o2));
  }
  set commandState(t) {
    E(__privateGet(this, _o2), t);
  }
  get _commandState() {
    return g(__privateGet(this, _i2));
  }
  set _commandState(t) {
    E(__privateGet(this, _i2), t, true);
  }
  setState(t, e, s) {
    Object.is(this._commandState[t], e) || (this._commandState[t] = e, t === "search" ? (__privateMethod(this, _ne_instances, __fn).call(this), __privateMethod(this, _ne_instances, m_fn).call(this)) : t === "value" && (s || __privateMethod(this, _ne_instances, A_fn).call(this)), __privateMethod(this, _ne_instances, l_fn).call(this));
  }
  setValue(t, e) {
    t !== this.opts.value.current && t === "" && gt(() => {
      this.key++;
    }), this.setState("value", t, e), this.opts.value.current = t;
  }
  getValidItems() {
    const t = this.opts.ref.current;
    return t ? Array.from(t.querySelectorAll(Gt)).filter((s) => !!s) : [];
  }
  getVisibleItems() {
    const t = this.opts.ref.current;
    return t ? Array.from(t.querySelectorAll(Le)).filter((s) => !!s) : [];
  }
  get itemsGrid() {
    var _a3, _b, _c, _d;
    if (!this.isGrid) return [];
    const t = this.opts.columns.current ?? 1, e = this.getVisibleItems(), s = [[]];
    let r = (_a3 = e[0]) == null ? void 0 : _a3.getAttribute("data-group"), o = 0, i = 0;
    for (let a = 0; a < e.length; a++) {
      const c = e[a], l = c == null ? void 0 : c.getAttribute("data-group");
      r !== l ? (r = l, o = 1, i++, s.push([{ index: a, firstRowOfGroup: true, ref: c }])) : (o++, o > t && (i++, o = 1, s.push([])), (_d = s[i]) == null ? void 0 : _d.push({ index: a, firstRowOfGroup: ((_c = (_b = s[i]) == null ? void 0 : _b[0]) == null ? void 0 : _c.firstRowOfGroup) ?? a === 0, ref: c }));
    }
    return s;
  }
  updateSelectedToIndex(t) {
    const e = this.getValidItems()[t];
    e && this.setValue(e.getAttribute(vt) ?? "");
  }
  updateSelectedByItem(t) {
    const e = __privateMethod(this, _ne_instances, c_fn).call(this), s = this.getValidItems(), r = s.findIndex((i) => i === e);
    let o = s[r + t];
    this.opts.loop.current && (o = r + t < 0 ? s[s.length - 1] : r + t === s.length ? s[0] : s[r + t]), o && this.setValue(o.getAttribute(vt) ?? "");
  }
  updateSelectedByGroup(t) {
    var _a3;
    let s = (_a3 = __privateMethod(this, _ne_instances, c_fn).call(this)) == null ? void 0 : _a3.closest(Ct), r;
    for (; s && !r; ) s = t > 0 ? Cr(s, Ct) : Sr(s, Ct), r = s == null ? void 0 : s.querySelector(Gt);
    r ? this.setValue(r.getAttribute(vt) ?? "") : this.updateSelectedByItem(t);
  }
  registerValue(t, e) {
    var _a3;
    return t && t === ((_a3 = this.allIds.get(t)) == null ? void 0 : _a3.value) || this.allIds.set(t, { value: t, keywords: e }), this._commandState.filtered.items.set(t, __privateMethod(this, _ne_instances, u_fn).call(this, t, e)), this.sortAfterTick || (this.sortAfterTick = true, gt(() => {
      __privateMethod(this, _ne_instances, m_fn).call(this), this.sortAfterTick = false;
    })), () => {
      this.allIds.delete(t);
    };
  }
  registerItem(t, e) {
    return this.allItems.add(t), e && (this.allGroups.has(e) ? this.allGroups.get(e).add(t) : this.allGroups.set(e, /* @__PURE__ */ new Set([t]))), this.sortAndFilterAfterTick || (this.sortAndFilterAfterTick = true, gt(() => {
      __privateMethod(this, _ne_instances, __fn).call(this), __privateMethod(this, _ne_instances, m_fn).call(this), this.sortAndFilterAfterTick = false;
    })), __privateMethod(this, _ne_instances, l_fn).call(this), () => {
      const s = __privateMethod(this, _ne_instances, c_fn).call(this);
      this.allItems.delete(t), this.commandState.filtered.items.delete(t), __privateMethod(this, _ne_instances, __fn).call(this), (s == null ? void 0 : s.getAttribute("id")) === t && __privateMethod(this, _ne_instances, v_fn).call(this), __privateMethod(this, _ne_instances, l_fn).call(this);
    };
  }
  registerGroup(t) {
    return this.allGroups.has(t) || this.allGroups.set(t, /* @__PURE__ */ new Set()), () => {
      this.allIds.delete(t), this.allGroups.delete(t);
    };
  }
  get isGrid() {
    return this.opts.columns.current !== null;
  }
  onkeydown(t) {
    const e = this.opts.vimBindings.current && t.ctrlKey;
    switch (t.key) {
      case hs:
      case us: {
        e && (this.isGrid ? __privateMethod(this, _ne_instances, S_fn).call(this, t) : __privateMethod(this, _ne_instances, d_fn).call(this, t));
        break;
      }
      case ls: {
        e && this.isGrid && __privateMethod(this, _ne_instances, d_fn).call(this, t);
        break;
      }
      case cs:
        this.isGrid ? __privateMethod(this, _ne_instances, S_fn).call(this, t) : __privateMethod(this, _ne_instances, d_fn).call(this, t);
        break;
      case as:
        if (!this.isGrid) break;
        __privateMethod(this, _ne_instances, d_fn).call(this, t);
        break;
      case is:
      case os: {
        e && (this.isGrid ? __privateMethod(this, _ne_instances, I_fn).call(this, t) : __privateMethod(this, _ne_instances, g_fn).call(this, t));
        break;
      }
      case ns: {
        e && this.isGrid && __privateMethod(this, _ne_instances, g_fn).call(this, t);
        break;
      }
      case rs:
        this.isGrid ? __privateMethod(this, _ne_instances, I_fn).call(this, t) : __privateMethod(this, _ne_instances, g_fn).call(this, t);
        break;
      case ss:
        if (!this.isGrid) break;
        __privateMethod(this, _ne_instances, g_fn).call(this, t);
        break;
      case es:
        t.preventDefault(), this.updateSelectedToIndex(0);
        break;
      case ts:
        t.preventDefault(), __privateMethod(this, _ne_instances, C_fn).call(this);
        break;
      case Qt:
        if (!t.isComposing && t.keyCode !== 229) {
          t.preventDefault();
          const s = __privateMethod(this, _ne_instances, c_fn).call(this);
          s && (s == null ? void 0 : s.click());
        }
    }
  }
  get props() {
    return g(__privateGet(this, _E));
  }
  set props(t) {
    E(__privateGet(this, _E), t);
  }
};
_t9 = new WeakMap();
_e5 = new WeakMap();
_s3 = new WeakMap();
_r3 = new WeakMap();
_n2 = new WeakMap();
_a2 = new WeakMap();
_o2 = new WeakMap();
_i2 = new WeakMap();
_ne_instances = new WeakSet();
h_fn = function() {
  return Es(this._commandState);
};
l_fn = function() {
  __privateGet(this, _t9) || (__privateSet(this, _t9, true), gt(() => {
    var _a3, _b;
    __privateSet(this, _t9, false);
    const t = __privateMethod(this, _ne_instances, h_fn).call(this);
    !Object.is(this.commandState, t) && (this.commandState = t, (_b = (_a3 = this.opts.onStateChange) == null ? void 0 : _a3.current) == null ? void 0 : _b.call(_a3, t));
  }));
};
u_fn = function(t, e) {
  const s = this.opts.filter.current ?? We;
  return t ? s(t, this._commandState.search, e) : 0;
};
m_fn = function() {
  var _a3;
  if (!this._commandState.search || this.opts.shouldFilter.current === false) {
    !this._commandState.value || !__privateGet(this, _e5) ? __privateMethod(this, _ne_instances, v_fn).call(this) : __privateGet(this, _e5) && this._commandState.value && __privateMethod(this, _ne_instances, b_fn).call(this);
    return;
  }
  const t = this._commandState.filtered.items, e = [];
  for (const i of this._commandState.filtered.groups) {
    const a = this.allGroups.get(i);
    let c = 0;
    if (!a) {
      e.push([i, c]);
      continue;
    }
    for (const l of a) {
      const u = t.get(l);
      c = Math.max(u ?? 0, c);
    }
    e.push([i, c]);
  }
  const s = this.viewportNode, r = this.getValidItems().sort((i, a) => {
    const c = i.getAttribute("data-value"), l = a.getAttribute("data-value"), u = t.get(c) ?? 0;
    return (t.get(l) ?? 0) - u;
  });
  for (const i of r) {
    const a = i.closest(Tt);
    if (a) {
      const c = i.parentElement === a ? i : i.closest(`${Tt} > *`);
      c && a.appendChild(c);
    } else {
      const c = i.parentElement === s ? i : i.closest(`${Tt} > *`);
      c && (s == null ? void 0 : s.appendChild(c));
    }
  }
  const o = e.sort((i, a) => a[1] - i[1]);
  for (const i of o) {
    const a = s == null ? void 0 : s.querySelector(`${Ct}[${vt}="${Ge(i[0])}"]`);
    (_a3 = a == null ? void 0 : a.parentElement) == null ? void 0 : _a3.appendChild(a);
  }
  __privateMethod(this, _ne_instances, v_fn).call(this);
};
v_fn = function() {
  gt(() => {
    var _a3;
    const e = (_a3 = this.getValidItems().find((r) => r.getAttribute("aria-disabled") !== "true")) == null ? void 0 : _a3.getAttribute(vt), s = __privateGet(this, _e5) && this.opts.disableInitialScroll.current;
    this.setValue(e ?? "", s), __privateSet(this, _e5, false);
  });
};
b_fn = function() {
  gt(() => {
    this.opts.disableInitialScroll.current || __privateMethod(this, _ne_instances, A_fn).call(this), __privateSet(this, _e5, false);
  });
};
__fn = function() {
  var _a3, _b;
  if (!this._commandState.search || this.opts.shouldFilter.current === false) {
    this._commandState.filtered.count = this.allItems.size;
    return;
  }
  this._commandState.filtered.groups = /* @__PURE__ */ new Set();
  let t = 0;
  for (const e of this.allItems) {
    const s = ((_a3 = this.allIds.get(e)) == null ? void 0 : _a3.value) ?? "", r = ((_b = this.allIds.get(e)) == null ? void 0 : _b.keywords) ?? [], o = __privateMethod(this, _ne_instances, u_fn).call(this, s, r);
    this._commandState.filtered.items.set(e, o), o > 0 && t++;
  }
  for (const [e, s] of this.allGroups) for (const r of s) {
    const o = this._commandState.filtered.items.get(r);
    if (o && o > 0) {
      this._commandState.filtered.groups.add(e);
      break;
    }
  }
  this._commandState.filtered.count = t;
};
c_fn = function() {
  const t = this.opts.ref.current;
  if (!t) return;
  const e = t.querySelector(`${Gt}[data-selected]`);
  if (e) return e;
};
A_fn = function() {
  gt(() => {
    var _a3, _b, _c, _d, _e10, _f, _g;
    const t = __privateMethod(this, _ne_instances, c_fn).call(this);
    if (!t) return;
    const e = (_a3 = t.parentElement) == null ? void 0 : _a3.parentElement;
    if (e) {
      if (this.isGrid) {
        const s = __privateMethod(this, _ne_instances, w_fn).call(this, t);
        if (t.scrollIntoView({ block: "nearest" }), s) {
          (_c = (_b = t == null ? void 0 : t.closest(Ct)) == null ? void 0 : _b.querySelector(Ae)) == null ? void 0 : _c.scrollIntoView({ block: "nearest" });
          return;
        }
      } else {
        const s = ds(e);
        if (s && ((_d = s.dataset) == null ? void 0 : _d.value) === ((_e10 = t.dataset) == null ? void 0 : _e10.value)) {
          (_g = (_f = t == null ? void 0 : t.closest(Ct)) == null ? void 0 : _f.querySelector(Ae)) == null ? void 0 : _g.scrollIntoView({ block: "nearest" });
          return;
        }
      }
      t.scrollIntoView({ block: "nearest" });
    }
  });
};
w_fn = function(t) {
  const e = this.itemsGrid;
  if (e.length === 0) return false;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (r !== void 0) for (let o = 0; o < r.length; o++) {
      const i = r[o];
      if (!(i === void 0 || i.ref !== t)) return i.firstRowOfGroup;
    }
  }
  return false;
};
C_fn = function() {
  return this.updateSelectedToIndex(this.getValidItems().length - 1);
};
d_fn = function(t) {
  t.preventDefault(), t.metaKey ? __privateMethod(this, _ne_instances, C_fn).call(this) : t.altKey ? this.updateSelectedByGroup(1) : this.updateSelectedByItem(1);
};
S_fn = function(t) {
  this.opts.columns.current !== null && (t.preventDefault(), t.metaKey ? this.updateSelectedByGroup(1) : this.updateSelectedByItem(__privateMethod(this, _ne_instances, M_fn).call(this, t)));
};
y_fn = function(t, e) {
  if (e.length === 0) return null;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (r !== void 0) for (let o = 0; o < r.length; o++) {
      const i = r[o];
      if (!(i === void 0 || i.ref !== t)) return { columnIndex: o, rowIndex: s };
    }
  }
  return null;
};
M_fn = function(t) {
  const e = this.itemsGrid, s = __privateMethod(this, _ne_instances, c_fn).call(this);
  if (!s) return 0;
  const r = __privateMethod(this, _ne_instances, y_fn).call(this, s, e);
  if (!r) return 0;
  let o = null;
  const i = t.altKey ? 1 : 0;
  if (t.altKey && r.rowIndex === e.length - 2 && !this.opts.loop.current) o = __privateMethod(this, _ne_instances, f_fn).call(this, { start: e.length - 1, end: e.length, expectedColumnIndex: r.columnIndex, grid: e });
  else if (r.rowIndex === e.length - 1) {
    if (!this.opts.loop.current) return 0;
    o = __privateMethod(this, _ne_instances, f_fn).call(this, { start: 0 + i, end: r.rowIndex, expectedColumnIndex: r.columnIndex, grid: e });
  } else o = __privateMethod(this, _ne_instances, f_fn).call(this, { start: r.rowIndex + 1 + i, end: e.length, expectedColumnIndex: r.columnIndex, grid: e }), o === null && this.opts.loop.current && (o = __privateMethod(this, _ne_instances, f_fn).call(this, { start: 0, end: r.rowIndex, expectedColumnIndex: r.columnIndex, grid: e }));
  return __privateMethod(this, _ne_instances, x_fn).call(this, s, o);
};
f_fn = function({ start: t, end: e, grid: s, expectedColumnIndex: r }) {
  var _a3;
  let o = null;
  for (let i = t; i < e; i++) {
    const a = s[i];
    if (o = ((_a3 = a[r]) == null ? void 0 : _a3.ref) ?? null, o !== null && Dt(o)) {
      o = null;
      continue;
    }
    if (o === null) for (let c = a.length - 1; c >= 0; c--) {
      const l = a[a.length - 1];
      if (!(l === void 0 || Dt(l.ref))) {
        o = l.ref;
        break;
      }
    }
    break;
  }
  return o;
};
x_fn = function(t, e) {
  if (e === null) return 0;
  const s = this.getValidItems(), r = s.findIndex((i) => i === t);
  return s.findIndex((i) => i === e) - r;
};
I_fn = function(t) {
  this.opts.columns.current !== null && (t.preventDefault(), t.metaKey ? this.updateSelectedByGroup(-1) : this.updateSelectedByItem(__privateMethod(this, _ne_instances, P_fn).call(this, t)));
};
P_fn = function(t) {
  const e = this.itemsGrid, s = __privateMethod(this, _ne_instances, c_fn).call(this);
  if (s === void 0) return 0;
  const r = __privateMethod(this, _ne_instances, y_fn).call(this, s, e);
  if (r === null) return 0;
  let o = null;
  const i = t.altKey ? 1 : 0;
  if (t.altKey && r.rowIndex === 1 && this.opts.loop.current === false) o = __privateMethod(this, _ne_instances, p_fn).call(this, { start: 0, end: 0, expectedColumnIndex: r.columnIndex, grid: e });
  else if (r.rowIndex === 0) {
    if (this.opts.loop.current === false) return 0;
    o = __privateMethod(this, _ne_instances, p_fn).call(this, { start: e.length - 1 - i, end: r.rowIndex + 1, expectedColumnIndex: r.columnIndex, grid: e });
  } else o = __privateMethod(this, _ne_instances, p_fn).call(this, { start: r.rowIndex - 1 - i, end: 0, expectedColumnIndex: r.columnIndex, grid: e }), o === null && this.opts.loop.current && (o = __privateMethod(this, _ne_instances, p_fn).call(this, { start: e.length - 1, end: r.rowIndex + 1, expectedColumnIndex: r.columnIndex, grid: e }));
  return __privateMethod(this, _ne_instances, x_fn).call(this, s, o);
};
p_fn = function({ start: t, end: e, grid: s, expectedColumnIndex: r }) {
  var _a3;
  let o = null;
  for (let i = t; i >= e; i--) {
    const a = s[i];
    if (a !== void 0) {
      if (o = ((_a3 = a[r]) == null ? void 0 : _a3.ref) ?? null, o !== null && Dt(o)) {
        o = null;
        continue;
      }
      if (o === null) for (let c = a.length - 1; c >= 0; c--) {
        const l = a[a.length - 1];
        if (!(l === void 0 || Dt(l.ref))) {
          o = l.ref;
          break;
        }
      }
      break;
    }
  }
  return o;
};
g_fn = function(t) {
  t.preventDefault(), t.metaKey ? this.updateSelectedToIndex(0) : t.altKey ? this.updateSelectedByGroup(-1) : this.updateSelectedByItem(-1);
};
_E = new WeakMap();
let ne = _ne;
function Dt(n) {
  return n.getAttribute("aria-disabled") === "true";
}
const _oe = class _oe {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t10, S(() => this.root._commandState.filtered.count === 0 && __privateGet(this, _e6) === false || this.opts.forceMount.current));
    __privateAdd(this, _e6, true);
    __privateAdd(this, _s4, S(() => ({ id: this.opts.id.current, role: "presentation", [Q.empty]: "", ...this.attachment })));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref), Ye(() => {
      __privateSet(this, _e6, false);
    });
  }
  static create(t) {
    return new _oe(t, _t.get());
  }
  get shouldRender() {
    return g(__privateGet(this, _t10));
  }
  set shouldRender(t) {
    E(__privateGet(this, _t10), t);
  }
  get props() {
    return g(__privateGet(this, _s4));
  }
  set props(t) {
    E(__privateGet(this, _s4), t);
  }
};
_t10 = new WeakMap();
_e6 = new WeakMap();
_s4 = new WeakMap();
let oe = _oe;
const _ie = class _ie {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t11, S(() => this.opts.forceMount.current || this.root.opts.shouldFilter.current === false || !this.root.commandState.search ? true : this.root._commandState.filtered.groups.has(this.trueValue)));
    __privateAdd(this, _e7, L(null));
    __privateAdd(this, _s5, L(""));
    __privateAdd(this, _r4, S(() => ({ id: this.opts.id.current, role: "presentation", hidden: this.shouldRender ? void 0 : true, "data-value": this.trueValue, [Q.group]: "", ...this.attachment })));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref), this.trueValue = t.value.current ?? t.id.current, ht(() => this.trueValue, () => this.root.registerGroup(this.trueValue)), Xe(() => this.opts.value.current ? (this.trueValue = this.opts.value.current, this.root.registerValue(this.opts.value.current)) : this.headingNode && this.headingNode.textContent ? (this.trueValue = this.headingNode.textContent.trim().toLowerCase(), this.root.registerValue(this.trueValue)) : (this.trueValue = `-----${this.opts.id.current}`, this.root.registerValue(this.trueValue)));
  }
  static create(t) {
    return bt.set(new _ie(t, _t.get()));
  }
  get shouldRender() {
    return g(__privateGet(this, _t11));
  }
  set shouldRender(t) {
    E(__privateGet(this, _t11), t);
  }
  get headingNode() {
    return g(__privateGet(this, _e7));
  }
  set headingNode(t) {
    E(__privateGet(this, _e7), t, true);
  }
  get trueValue() {
    return g(__privateGet(this, _s5));
  }
  set trueValue(t) {
    E(__privateGet(this, _s5), t, true);
  }
  get props() {
    return g(__privateGet(this, _r4));
  }
  set props(t) {
    E(__privateGet(this, _r4), t);
  }
};
_t11 = new WeakMap();
_e7 = new WeakMap();
_s5 = new WeakMap();
_r4 = new WeakMap();
let ie = _ie;
const _ae = class _ae {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "group");
    __publicField(this, "attachment");
    __privateAdd(this, _t12, S(() => ({ id: this.opts.id.current, [Q["group-heading"]]: "", ...this.attachment })));
    this.opts = t, this.group = e, this.attachment = J(this.opts.ref, (s) => this.group.headingNode = s);
  }
  static create(t) {
    return new _ae(t, bt.get());
  }
  get props() {
    return g(__privateGet(this, _t12));
  }
  set props(t) {
    E(__privateGet(this, _t12), t);
  }
};
_t12 = new WeakMap();
let ae = _ae;
const _ce = class _ce {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "group");
    __publicField(this, "attachment");
    __privateAdd(this, _t13, S(() => {
      var _a3;
      return { id: this.opts.id.current, role: "group", [Q["group-items"]]: "", "aria-labelledby": ((_a3 = this.group.headingNode) == null ? void 0 : _a3.id) ?? void 0, ...this.attachment };
    }));
    this.opts = t, this.group = e, this.attachment = J(this.opts.ref);
  }
  static create(t) {
    return new _ce(t, bt.get());
  }
  get props() {
    return g(__privateGet(this, _t13));
  }
  set props(t) {
    E(__privateGet(this, _t13), t);
  }
};
_t13 = new WeakMap();
let ce = _ce;
const _le = class _le {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t14, S(() => {
      var _a3;
      const t = (_a3 = this.root.viewportNode) == null ? void 0 : _a3.querySelector(`${Le}[${vt}="${Ge(this.root.opts.value.current)}"]`);
      if (t != null) return t.getAttribute("id") ?? void 0;
    }));
    __privateAdd(this, _e8, S(() => {
      var _a3, _b;
      return { id: this.opts.id.current, type: "text", [Q.input]: "", autocomplete: "off", autocorrect: "off", spellcheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": Ft(true), "aria-controls": ((_a3 = this.root.viewportNode) == null ? void 0 : _a3.id) ?? void 0, "aria-labelledby": ((_b = this.root.labelNode) == null ? void 0 : _b.id) ?? void 0, "aria-activedescendant": g(__privateGet(this, _t14)), ...this.attachment };
    }));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref, (s) => this.root.inputNode = s), ht(() => this.opts.ref.current, () => {
      const s = this.opts.ref.current;
      s && this.opts.autofocus.current && fs(10, () => s.focus());
    }), ht(() => this.opts.value.current, () => {
      this.root.commandState.search !== this.opts.value.current && this.root.setState("search", this.opts.value.current);
    });
  }
  static create(t) {
    return new _le(t, _t.get());
  }
  get props() {
    return g(__privateGet(this, _e8));
  }
  set props(t) {
    E(__privateGet(this, _e8), t);
  }
};
_t14 = new WeakMap();
_e8 = new WeakMap();
let le = _le;
const _Ke = class _Ke {
  constructor(t, e) {
    __privateAdd(this, _Ke_instances);
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t15, null);
    __privateAdd(this, _e9, S(() => {
      var _a3;
      return this.opts.forceMount.current || ((_a3 = __privateGet(this, _t15)) == null ? void 0 : _a3.opts.forceMount.current) === true;
    }));
    __privateAdd(this, _s6, S(() => {
      if (this.opts.ref.current, g(__privateGet(this, _e9)) || this.root.opts.shouldFilter.current === false || !this.root.commandState.search) return true;
      const t = this.root.commandState.filtered.items.get(this.trueValue);
      return t === void 0 ? false : t > 0;
    }));
    __privateAdd(this, _r5, S(() => this.root.opts.value.current === this.trueValue && this.trueValue !== ""));
    __privateAdd(this, _n3, L(""));
    __privateAdd(this, _i3, S(() => {
      var _a3;
      return { id: this.opts.id.current, "aria-disabled": Ft(this.opts.disabled.current), "aria-selected": Ft(this.isSelected), "data-disabled": St(this.opts.disabled.current), "data-selected": St(this.isSelected), "data-value": this.trueValue, "data-group": (_a3 = __privateGet(this, _t15)) == null ? void 0 : _a3.trueValue, [Q.item]: "", role: "option", onpointermove: this.onpointermove, onclick: this.onclick, ...this.attachment };
    }));
    this.opts = t, this.root = e, __privateSet(this, _t15, bt.getOr(null)), this.trueValue = t.value.current, this.attachment = J(this.opts.ref), ht([() => this.trueValue, () => {
      var _a3;
      return (_a3 = __privateGet(this, _t15)) == null ? void 0 : _a3.trueValue;
    }, () => this.opts.forceMount.current], () => {
      var _a3;
      if (!(this.opts.forceMount.current || !this.trueValue)) return this.root.registerItem(this.trueValue, (_a3 = __privateGet(this, _t15)) == null ? void 0 : _a3.trueValue);
    }), ht([() => this.opts.value.current, () => this.opts.ref.current], () => {
      var _a3, _b;
      this.opts.value.current ? this.trueValue = this.opts.value.current : ((_a3 = this.opts.ref.current) == null ? void 0 : _a3.textContent) && (this.trueValue = this.opts.ref.current.textContent.trim()), this.trueValue && (this.root.registerValue(this.trueValue, t.keywords.current.map((s) => s.trim())), (_b = this.opts.ref.current) == null ? void 0 : _b.setAttribute(vt, this.trueValue));
    }), this.onclick = this.onclick.bind(this), this.onpointermove = this.onpointermove.bind(this);
  }
  static create(t) {
    const e = bt.getOr(null);
    return new _Ke({ ...t, group: e }, _t.get());
  }
  get shouldRender() {
    return g(__privateGet(this, _s6));
  }
  set shouldRender(t) {
    E(__privateGet(this, _s6), t);
  }
  get isSelected() {
    return g(__privateGet(this, _r5));
  }
  set isSelected(t) {
    E(__privateGet(this, _r5), t);
  }
  get trueValue() {
    return g(__privateGet(this, _n3));
  }
  set trueValue(t) {
    E(__privateGet(this, _n3), t, true);
  }
  onpointermove(t) {
    this.opts.disabled.current || this.root.opts.disablePointerSelection.current || __privateMethod(this, _Ke_instances, o_fn).call(this);
  }
  onclick(t) {
    this.opts.disabled.current || __privateMethod(this, _Ke_instances, a_fn).call(this);
  }
  get props() {
    return g(__privateGet(this, _i3));
  }
  set props(t) {
    E(__privateGet(this, _i3), t);
  }
};
_t15 = new WeakMap();
_e9 = new WeakMap();
_s6 = new WeakMap();
_r5 = new WeakMap();
_n3 = new WeakMap();
_Ke_instances = new WeakSet();
a_fn = function() {
  var _a3;
  this.opts.disabled.current || (__privateMethod(this, _Ke_instances, o_fn).call(this), (_a3 = this.opts.onSelect) == null ? void 0 : _a3.current());
};
o_fn = function() {
  this.opts.disabled.current || this.root.setValue(this.trueValue, true);
};
_i3 = new WeakMap();
let Ke = _Ke;
const _ue = class _ue {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t16, S(() => ({ id: this.opts.id.current, role: "listbox", "aria-label": this.opts.ariaLabel.current, [Q.list]: "", ...this.attachment })));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref);
  }
  static create(t) {
    return yr.set(new _ue(t, _t.get()));
  }
  get props() {
    return g(__privateGet(this, _t16));
  }
  set props(t) {
    E(__privateGet(this, _t16), t);
  }
};
_t16 = new WeakMap();
let ue = _ue;
const _he = class _he {
  constructor(t, e) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _t17, S(() => {
      var _a3;
      return { id: this.opts.id.current, [Q["input-label"]]: "", for: (_a3 = this.opts.for) == null ? void 0 : _a3.current, style: Ve, ...this.attachment };
    }));
    this.opts = t, this.root = e, this.attachment = J(this.opts.ref, (s) => this.root.labelNode = s);
  }
  static create(t) {
    return new _he(t, _t.get());
  }
  get props() {
    return g(__privateGet(this, _t17));
  }
  set props(t) {
    E(__privateGet(this, _t17), t);
  }
};
_t17 = new WeakMap();
let he = _he;
var xr = R("<label><!></label>");
function Ir(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = F(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "children"]);
  const i = he.create({ id: A(() => s()), ref: A(() => r(), (u) => r(u)) }), a = S(() => W(o, i.props));
  var c = xr();
  X(c, () => ({ ...g(a) }));
  var l = U(c);
  M(l, () => t.children ?? V), H(c), v(n, c), B();
}
var Er = R("<!> <!>", 1), br = R("<div><!> <!></div>");
function wr(n, t) {
  const e = $();
  D(t, true);
  const s = (P) => {
    Ir(P, { children: (et, O) => {
      Xt();
      var z = xe();
      Ie(() => Ee(z, d())), v(et, z);
    }, $$slots: { default: true } });
  };
  let r = m(t, "id", 19, () => tt(e)), o = m(t, "ref", 15, null), i = m(t, "value", 15, ""), a = m(t, "onValueChange", 3, lt), c = m(t, "onStateChange", 3, lt), l = m(t, "loop", 3, false), u = m(t, "shouldFilter", 3, true), p = m(t, "filter", 3, We), d = m(t, "label", 3, ""), f = m(t, "vimBindings", 3, true), h = m(t, "disablePointerSelection", 3, false), _ = m(t, "disableInitialScroll", 3, false), x = m(t, "columns", 3, null), b = F(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "value", "onValueChange", "onStateChange", "loop", "shouldFilter", "filter", "label", "vimBindings", "disablePointerSelection", "disableInitialScroll", "columns", "children", "child"]);
  const w = ne.create({ id: A(() => r()), ref: A(() => o(), (P) => o(P)), filter: A(() => p()), shouldFilter: A(() => u()), loop: A(() => l()), value: A(() => i(), (P) => {
    i() !== P && (i(P), a()(P));
  }), vimBindings: A(() => f()), disablePointerSelection: A(() => h()), disableInitialScroll: A(() => _()), onStateChange: A(() => c()), columns: A(() => x()) }), N = (P) => w.updateSelectedToIndex(P), T = (P) => w.updateSelectedByGroup(P), it = (P) => w.updateSelectedByItem(P), rt = () => w.getValidItems(), k = S(() => W(b, w.props));
  var G = I(), q = C(G);
  {
    var st = (P) => {
      var et = Er(), O = C(et);
      s(O);
      var z = ut(O, 2);
      M(z, () => t.child, () => ({ props: g(k) })), v(P, et);
    }, ct = (P) => {
      var et = br();
      X(et, () => ({ ...g(k) }));
      var O = U(et);
      s(O);
      var z = ut(O, 2);
      M(z, () => t.children ?? V), H(et), v(P, et);
    };
    j(q, (P) => {
      t.child ? P(st) : P(ct, false);
    });
  }
  return v(n, G), B({ updateSelectedToIndex: N, updateSelectedByGroup: T, updateSelectedByItem: it, getValidItems: rt });
}
var Mr = R("<div><!></div>");
function Pr(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = m(t, "forceMount", 3, false), i = F(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "children", "child", "forceMount"]);
  const a = oe.create({ id: A(() => s()), ref: A(() => r(), (d) => r(d)), forceMount: A(() => o()) }), c = S(() => W(a.props, i));
  var l = I(), u = C(l);
  {
    var p = (d) => {
      var f = I(), h = C(f);
      {
        var _ = (b) => {
          var w = I(), N = C(w);
          M(N, () => t.child, () => ({ props: g(c) })), v(b, w);
        }, x = (b) => {
          var w = Mr();
          X(w, () => ({ ...g(c) }));
          var N = U(w);
          M(N, () => t.children ?? V), H(w), v(b, w);
        };
        j(h, (b) => {
          t.child ? b(_) : b(x, false);
        });
      }
      v(d, f);
    };
    j(u, (d) => {
      a.shouldRender && d(p);
    });
  }
  v(n, l), B();
}
var Dr = R("<div><!></div>");
function Br(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = m(t, "value", 3, ""), i = m(t, "forceMount", 3, false), a = F(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "value", "forceMount", "children", "child"]);
  const c = ie.create({ id: A(() => s()), ref: A(() => r(), (h) => r(h)), forceMount: A(() => i()), value: A(() => o()) }), l = S(() => W(a, c.props));
  var u = I(), p = C(u);
  {
    var d = (h) => {
      var _ = I(), x = C(_);
      M(x, () => t.child, () => ({ props: g(l) })), v(h, _);
    }, f = (h) => {
      var _ = Dr();
      X(_, () => ({ ...g(l) }));
      var x = U(_);
      M(x, () => t.children ?? V), H(_), v(h, _);
    };
    j(p, (h) => {
      t.child ? h(d) : h(f, false);
    });
  }
  v(n, u), B();
}
var Fr = R("<div><!></div>");
function Nr(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = F(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "children", "child"]);
  const i = ae.create({ id: A(() => s()), ref: A(() => r(), (d) => r(d)) }), a = S(() => W(o, i.props));
  var c = I(), l = C(c);
  {
    var u = (d) => {
      var f = I(), h = C(f);
      M(h, () => t.child, () => ({ props: g(a) })), v(d, f);
    }, p = (d) => {
      var f = Fr();
      X(f, () => ({ ...g(a) }));
      var h = U(f);
      M(h, () => t.children ?? V), H(f), v(d, f);
    };
    j(l, (d) => {
      t.child ? d(u) : d(p, false);
    });
  }
  v(n, c), B();
}
var kr = R("<div><!></div>"), Or = R('<div style="display: contents;"><!></div>');
function Rr(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = F(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "children", "child"]);
  const i = ce.create({ id: A(() => s()), ref: A(() => r(), (d) => r(d)) }), a = S(() => W(o, i.props));
  var c = Or(), l = U(c);
  {
    var u = (d) => {
      var f = I(), h = C(f);
      M(h, () => t.child, () => ({ props: g(a) })), v(d, f);
    }, p = (d) => {
      var f = kr();
      X(f, () => ({ ...g(a) }));
      var h = U(f);
      M(h, () => t.children ?? V), H(f), v(d, f);
    };
    j(l, (d) => {
      t.child ? d(u) : d(p, false);
    });
  }
  H(c), v(n, c), B();
}
var Vr = R("<input/>");
function Tr(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "value", 15, ""), r = m(t, "autofocus", 3, false), o = m(t, "id", 19, () => tt(e)), i = m(t, "ref", 15, null), a = F(t, ["$$slots", "$$events", "$$legacy", "value", "autofocus", "id", "ref", "child"]);
  const c = le.create({ id: A(() => o()), ref: A(() => i(), (h) => i(h)), value: A(() => s(), (h) => {
    s(h);
  }), autofocus: A(() => r() ?? false) }), l = S(() => W(a, c.props));
  var u = I(), p = C(u);
  {
    var d = (h) => {
      var _ = I(), x = C(_);
      M(x, () => t.child, () => ({ props: g(l) })), v(h, _);
    }, f = (h) => {
      var _ = Vr();
      Ss(_), X(_, () => ({ ...g(l) })), xs(_, s), v(h, _);
    };
    j(p, (h) => {
      t.child ? h(d) : h(f, false);
    });
  }
  v(n, u), B();
}
var Gr = R("<div><!></div>");
function Lr(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = F(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "child", "children", "aria-label"]);
  const i = ue.create({ id: A(() => s()), ref: A(() => r(), (u) => r(u)), ariaLabel: A(() => t["aria-label"] ?? "Suggestions...") }), a = S(() => W(o, i.props));
  var c = I(), l = C(c);
  ps(l, () => i.root._commandState.search === "", (u) => {
    var p = I(), d = C(p);
    {
      var f = (_) => {
        var x = I(), b = C(x);
        M(b, () => t.child, () => ({ props: g(a) })), v(_, x);
      }, h = (_) => {
        var x = Gr();
        X(x, () => ({ ...g(a) }));
        var b = U(x);
        M(b, () => t.children ?? V), H(x), v(_, x);
      };
      j(d, (_) => {
        t.child ? _(f) : _(h, false);
      });
    }
    v(u, p);
  }), v(n, c), B();
}
const Se = 1, Kr = 0.9, jr = 0.8, Wr = 0.17, Lt = 0.1, Kt = 0.999, zr = 0.9999, Ur = 0.99, Hr = /[\\/_+.#"@[({&]/, Jr = /[\\/_+.#"@[({&]/g, Yr = /[\s-]/, je = /[\s-]/g;
function Yt(n, t, e, s, r, o, i) {
  if (o === t.length) return r === n.length ? Se : Ur;
  const a = `${r},${o}`;
  if (i[a] !== void 0) return i[a];
  const c = s.charAt(o);
  let l = e.indexOf(c, r), u = 0, p, d, f, h;
  for (; l >= 0; ) p = Yt(n, t, e, s, l + 1, o + 1, i), p > u && (l === r ? p *= Se : Hr.test(n.charAt(l - 1)) ? (p *= jr, f = n.slice(r, l - 1).match(Jr), f && r > 0 && (p *= Kt ** f.length)) : Yr.test(n.charAt(l - 1)) ? (p *= Kr, h = n.slice(r, l - 1).match(je), h && r > 0 && (p *= Kt ** h.length)) : (p *= Wr, r > 0 && (p *= Kt ** (l - r))), n.charAt(l) !== t.charAt(o) && (p *= zr)), (p < Lt && e.charAt(l - 1) === s.charAt(o + 1) || s.charAt(o + 1) === s.charAt(o) && e.charAt(l - 1) !== s.charAt(o)) && (d = Yt(n, t, e, s, l + 1, o + 2, i), d * Lt > p && (p = d * Lt)), p > u && (u = p), l = e.indexOf(c, l + 1);
  return i[a] = u, u;
}
function ye(n) {
  return n.toLowerCase().replace(je, " ");
}
function We(n, t, e) {
  return n = e && e.length > 0 ? `${`${n} ${e == null ? void 0 : e.join(" ")}`}` : n, Yt(n, t, ye(n), ye(t), 0, 0, {});
}
function Xr(n, t) {
  D(t, true);
  let e = m(t, "open", 15, false), s = m(t, "onOpenChange", 3, lt), r = m(t, "onOpenChangeComplete", 3, lt);
  Zt.create({ variant: A(() => "dialog"), open: A(() => e(), (a) => {
    e(a), s()(a);
  }), onOpenChangeComplete: A(() => r()) });
  var o = I(), i = C(o);
  M(i, () => t.children ?? V), v(n, o), B();
}
var Qr = R("<button><!></button>");
function qr(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = m(t, "disabled", 3, false), i = F(t, ["$$slots", "$$events", "$$legacy", "children", "child", "id", "ref", "disabled"]);
  const a = $t.create({ variant: A(() => "close"), id: A(() => s()), ref: A(() => r(), (f) => r(f)), disabled: A(() => !!o()) }), c = S(() => W(i, a.props));
  var l = I(), u = C(l);
  {
    var p = (f) => {
      var h = I(), _ = C(h);
      M(_, () => t.child, () => ({ props: g(c) })), v(f, h);
    }, d = (f) => {
      var h = Qr();
      X(h, () => ({ ...g(c) }));
      var _ = U(h);
      M(_, () => t.children ?? V), H(h), v(f, h);
    };
    j(u, (f) => {
      t.child ? f(p) : f(d, false);
    });
  }
  v(n, l), B();
}
var Zr = R("<!> <!>", 1), $r = R("<!> <div><!></div>", 1);
function tn(n, t) {
  const e = $();
  D(t, true);
  let s = m(t, "id", 19, () => tt(e)), r = m(t, "ref", 15, null), o = m(t, "forceMount", 3, false), i = m(t, "onCloseAutoFocus", 3, lt), a = m(t, "onOpenAutoFocus", 3, lt), c = m(t, "onEscapeKeydown", 3, lt), l = m(t, "onInteractOutside", 3, lt), u = m(t, "trapFocus", 3, true), p = m(t, "preventScroll", 3, true), d = m(t, "restoreScrollDelay", 3, null), f = F(t, ["$$slots", "$$events", "$$legacy", "id", "children", "child", "ref", "forceMount", "onCloseAutoFocus", "onOpenAutoFocus", "onEscapeKeydown", "onInteractOutside", "trapFocus", "preventScroll", "restoreScrollDelay"]);
  const h = se.create({ id: A(() => s()), ref: A(() => r(), (N) => r(N)) }), _ = S(() => W(f, h.props));
  var x = I(), b = C(x);
  {
    var w = (N) => {
      gs(N, { get ref() {
        return h.opts.ref;
      }, loop: true, get trapFocus() {
        return u();
      }, get enabled() {
        return h.root.opts.open.current;
      }, get onOpenAutoFocus() {
        return a();
      }, get onCloseAutoFocus() {
        return i();
      }, focusScope: (it, rt) => {
        let k = () => rt == null ? void 0 : rt().props;
        ms(it, K(() => g(_), { get enabled() {
          return h.root.opts.open.current;
        }, get ref() {
          return h.opts.ref;
        }, onEscapeKeydown: (G) => {
          c()(G), !G.defaultPrevented && h.root.handleClose();
        }, children: (G, q) => {
          vs(G, K(() => g(_), { get ref() {
            return h.opts.ref;
          }, get enabled() {
            return h.root.opts.open.current;
          }, onInteractOutside: (st) => {
            l()(st), !st.defaultPrevented && h.root.handleClose();
          }, children: (st, ct) => {
            _s(st, K(() => g(_), { get ref() {
              return h.opts.ref;
            }, get enabled() {
              return h.root.opts.open.current;
            }, children: (P, et) => {
              var O = I(), z = C(O);
              {
                var Mt = (At) => {
                  var xt = Zr(), It = C(xt);
                  {
                    var Et = (pt) => {
                      fe(pt, { get preventScroll() {
                        return p();
                      }, get restoreScrollDelay() {
                        return d();
                      } });
                    };
                    j(It, (pt) => {
                      h.root.opts.open.current && pt(Et);
                    });
                  }
                  var Rt = ut(It, 2);
                  {
                    let pt = S(() => ({ props: W(g(_), k()), ...h.snippetProps }));
                    M(Rt, () => t.child, () => g(pt));
                  }
                  v(At, xt);
                }, ze = (At) => {
                  var xt = $r(), It = C(xt);
                  fe(It, { get preventScroll() {
                    return p();
                  } });
                  var Et = ut(It, 2);
                  X(Et, (pt) => ({ ...pt }), [() => W(g(_), k())]);
                  var Rt = U(Et);
                  M(Rt, () => t.children ?? V), H(Et), v(At, xt);
                };
                j(z, (At) => {
                  t.child ? At(Mt) : At(ze, false);
                });
              }
              v(P, O);
            }, $$slots: { default: true } }));
          }, $$slots: { default: true } }));
        }, $$slots: { default: true } }));
      }, $$slots: { focusScope: true } });
    };
    j(b, (N) => {
      (h.shouldRender || o()) && N(w);
    });
  }
  v(n, x), B();
}
function bn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = m(t, "value", 15, ""), r = F(t, ["$$slots", "$$events", "$$legacy", "ref", "value", "class"]);
  var o = I(), i = C(o);
  {
    let a = S(() => ot("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", t.class));
    Y(i, () => wr, (c, l) => {
      l(c, K({ "data-slot": "command", get class() {
        return g(a);
      } }, () => r, { get value() {
        return s();
      }, set value(u) {
        s(u);
      }, get ref() {
        return e();
      }, set ref(u) {
        e(u);
      } }));
    });
  }
  v(n, o), B();
}
function wn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var r = I(), o = C(r);
  {
    let i = S(() => ot("text-lg leading-none font-semibold", t.class));
    Y(o, () => gr, (a, c) => {
      c(a, K({ "data-slot": "dialog-title", get class() {
        return g(i);
      } }, () => s, { get ref() {
        return e();
      }, set ref(l) {
        e(l);
      } }));
    });
  }
  v(n, r), B();
}
var en = R("<div><!></div>");
function Mn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var r = en();
  X(r, (i) => ({ "data-slot": "dialog-header", class: i, ...s }), [() => ot("flex flex-col gap-2 text-center sm:text-left", t.class)]);
  var o = U(r);
  M(o, () => t.children ?? V), H(r), ys(r, (i) => e(i), () => e()), v(n, r), B();
}
function sn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var r = I(), o = C(r);
  {
    let i = S(() => ot("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t.class));
    Y(o, () => vr, (a, c) => {
      c(a, K({ "data-slot": "dialog-overlay", get class() {
        return g(i);
      } }, () => s, { get ref() {
        return e();
      }, set ref(l) {
        e(l);
      } }));
    });
  }
  v(n, r), B();
}
var rn = R('<!> <span class="sr-only">Close</span>', 1), nn = R("<!> <!>", 1), on = R("<!> <!>", 1);
function Pn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = m(t, "showCloseButton", 3, true), r = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "portalProps", "children", "showCloseButton"]);
  var o = I(), i = C(o);
  Y(i, () => an, (a, c) => {
    c(a, K(() => t.portalProps, { children: (l, u) => {
      var p = on(), d = C(p);
      Y(d, () => sn, (h, _) => {
        _(h, {});
      });
      var f = ut(d, 2);
      {
        let h = S(() => ot("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-[#080809] p-6 shadow-lg duration-200 sm:max-w-lg", t.class));
        Y(f, () => tn, (_, x) => {
          x(_, K({ "data-slot": "dialog-content", get class() {
            return g(h);
          } }, () => r, { get ref() {
            return e();
          }, set ref(b) {
            e(b);
          }, children: (b, w) => {
            var N = nn(), T = C(N);
            M(T, () => t.children ?? V);
            var it = ut(T, 2);
            {
              var rt = (k) => {
                var G = I(), q = C(G);
                Y(q, () => qr, (st, ct) => {
                  ct(st, { class: "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: (P, et) => {
                    var O = rn(), z = C(O);
                    ws(z, {}), Xt(2), v(P, O);
                  }, $$slots: { default: true } });
                }), v(k, G);
              };
              j(it, (k) => {
                s() && k(rt);
              });
            }
            v(b, N);
          }, $$slots: { default: true } }));
        });
      }
      v(l, p);
    }, $$slots: { default: true } }));
  }), v(n, o), B();
}
function Dn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var r = I(), o = C(r);
  {
    let i = S(() => ot("text-muted-foreground text-left text-sm", t.class));
    Y(o, () => Ar, (a, c) => {
      c(a, K({ "data-slot": "dialog-description", get class() {
        return g(i);
      } }, () => s, { get ref() {
        return e();
      }, set ref(l) {
        e(l);
      } }));
    });
  }
  v(n, r), B();
}
const Bn = Xr, an = As;
function Fn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var r = I(), o = C(r);
  {
    let i = S(() => ot("py-6 text-center text-sm", t.class));
    Y(o, () => Pr, (a, c) => {
      c(a, K({ "data-slot": "command-empty", get class() {
        return g(i);
      } }, () => s, { get ref() {
        return e();
      }, set ref(l) {
        e(l);
      } }));
    });
  }
  v(n, r), B();
}
var cn = R("<!> <!>", 1);
function Nn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children", "heading", "value"]);
  var r = I(), o = C(r);
  {
    let i = S(() => ot("text-foreground overflow-hidden p-1", t.class)), a = S(() => t.value ?? t.heading ?? `----${Cs()}`);
    Y(o, () => Br, (c, l) => {
      l(c, K({ "data-slot": "command-group", get class() {
        return g(i);
      }, get value() {
        return g(a);
      } }, () => s, { get ref() {
        return e();
      }, set ref(u) {
        e(u);
      }, children: (u, p) => {
        var d = cn(), f = C(d);
        {
          var h = (x) => {
            var b = I(), w = C(b);
            Y(w, () => Nr, (N, T) => {
              T(N, { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium", children: (it, rt) => {
                Xt();
                var k = xe();
                Ie(() => Ee(k, t.heading)), v(it, k);
              }, $$slots: { default: true } });
            }), v(x, b);
          };
          j(f, (x) => {
            t.heading && x(h);
          });
        }
        var _ = ut(f, 2);
        Y(_, () => Rr, (x, b) => {
          b(x, { get children() {
            return t.children;
          } });
        }), v(u, d);
      }, $$slots: { default: true } }));
    });
  }
  v(n, r), B();
}
var ln = R('<div class="flex h-9 items-center gap-2 border-b px-3" data-slot="command-input-wrapper"><!> <!></div>');
function kn(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = m(t, "value", 15, ""), r = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var o = ln(), i = U(o);
  bs(i, { class: "size-4 shrink-0 opacity-50" });
  var a = ut(i, 2);
  {
    let c = S(() => ot("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", t.class));
    Y(a, () => Tr, (l, u) => {
      u(l, K({ "data-slot": "command-input", get class() {
        return g(c);
      } }, () => r, { get ref() {
        return e();
      }, set ref(p) {
        e(p);
      }, get value() {
        return s();
      }, set value(p) {
        s(p);
      } }));
    });
  }
  H(o), v(n, o), B();
}
function On(n, t) {
  D(t, true);
  let e = m(t, "ref", 15, null), s = F(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var r = I(), o = C(r);
  {
    let i = S(() => ot("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", t.class));
    Y(o, () => Lr, (a, c) => {
      c(a, K({ "data-slot": "command-list", get class() {
        return g(i);
      } }, () => s, { get ref() {
        return e();
      }, set ref(l) {
        e(l);
      } }));
    });
  }
  v(n, r), B();
}
export {
  Sn as A,
  yn as B,
  Ke as C,
  Mn as D,
  wt as F,
  In as P,
  Bn as R,
  bs as S,
  ws as X,
  wn as a,
  Dn as b,
  Pn as c,
  bn as d,
  kn as e,
  On as f,
  Fn as g,
  Nn as h,
  xn as i,
  Te as j,
  Es as k,
  Xr as l,
  tn as m,
  vr as n,
  gr as o,
  En as s
};
