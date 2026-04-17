import "./DsnmJJEf.js";
import { i as o, j as p, m as v, b1 as A, L as C, M as T, O as z, b2 as M, u as P, b3 as j, x as F, N as I, V as y, v as N, k as L, Q as O, X as R, a8 as V, p as B, b4 as D, b as w, c as G, d as Q, s as X, g as q, r as H, e as J, a as K, z as g, al as U, am as Y } from "./CeQCqUQ_.js";
import { a as Z } from "./DMf1efOI.js";
import { e as $, i as ee } from "./DyVjpqx_.js";
import { d as E } from "./C66EmW7x.js";
import { p as f, r as te } from "./C_-niZe9.js";
function ae(l, e, m, i, h, b) {
  let _ = o;
  o && p();
  var n, s, t = null;
  o && v.nodeType === A && (t = v, p());
  var u = o ? v : l, r;
  C(() => {
    const a = e() || null;
    var d = m || a === "svg" ? M : null;
    a !== n && (r && (a === null ? O(r, () => {
      r = null, s = null;
    }) : a === s ? R(r) : V(r)), a && a !== s && (r = z(() => {
      if (t = o ? t : d ? document.createElementNS(d, a) : document.createElement(a), P(t, t), i) {
        o && j(a) && t.append(document.createComment(""));
        var c = o ? F(t) : t.appendChild(I());
        o && (c === null ? y(false) : N(c)), i(t, c);
      }
      L.nodes_end = t, u.before(t);
    })), n = a, n && (s = n));
  }, T), _ && (y(true), N(u));
}
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
const re = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
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
const se = (l) => {
  for (const e in l) if (e.startsWith("aria-") || e === "role" || e === "title") return true;
  return false;
};
var oe = D("<svg><!><!></svg>");
function me(l, e) {
  B(e, true);
  const m = f(e, "color", 3, "currentColor"), i = f(e, "size", 3, 24), h = f(e, "strokeWidth", 3, 2), b = f(e, "absoluteStrokeWidth", 3, false), _ = f(e, "iconNode", 19, () => []), n = te(e, ["$$slots", "$$events", "$$legacy", "name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode", "children"]);
  var s = oe();
  E(s, (r, a) => ({ ...re, ...r, ...n, width: i(), height: i(), stroke: m(), "stroke-width": a, class: ["lucide-icon lucide", e.name && `lucide-${e.name}`, e.class] }), [() => !e.children && !se(n) && { "aria-hidden": "true" }, () => b() ? Number(h()) * 24 / Number(i()) : h()]);
  var t = Q(s);
  $(t, 17, _, ee, (r, a) => {
    var d = U(() => Y(g(a), 2));
    let c = () => g(d)[0], x = () => g(d)[1];
    var k = J(), S = K(k);
    ae(S, c, true, (W, ne) => {
      E(W, () => ({ ...x() }));
    }), w(r, k);
  });
  var u = X(t);
  Z(u, () => e.children ?? q), H(s), w(l, s), G();
}
export {
  me as I,
  ae as e
};
