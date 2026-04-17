import "./DsnmJJEf.js";
import { p as st, e as it, a as q, g as ht, b as v, c as at, ai as pt, f as x, d as c, s as w, z as i, al as j, r, t as O, aj as lt, B as ut, ak as wt } from "./CeQCqUQ_.js";
import { a as jt, s as z } from "./DMf1efOI.js";
import { s as kt, r as St, p as G } from "./C_-niZe9.js";
import { I as Ot } from "./CefFKWAt.js";
import { i as E } from "./CmAffBVh.js";
import { s as S, c as $, a as Mt } from "./C66EmW7x.js";
import { e as Tt, i as $t } from "./DyVjpqx_.js";
import { h as ct } from "./DiyIUo5C.js";
import { K as N } from "./CrEetURD.js";
import { R as zt, C as At } from "./BSpKvSVU.js";
import { S as Pt, T as It, a as Ct } from "./BqXdNy4d.js";
import { C as Nt } from "./DaOYr0Qd.js";
const l = { string: "text-emerald-400", type: "text-purple-400", punct: "text-zinc-500" }, Lt = ["type"];
function X(e) {
  var _a;
  for (const t of Lt) if (((_a = e[t]) == null ? void 0 : _a[N]) === "Literal") return { field: t, value: String(e[t].const) };
  return null;
}
function W(e) {
  switch (e[N]) {
    case "Literal":
      return typeof e.const == "string" ? `'${e.const}'` : String(e.const);
    case "String":
      return "string";
    case "Number":
      return "number";
    case "Integer":
      return "integer";
    case "Boolean":
      return "boolean";
    case "Object": {
      const t = e.properties, a = Object.keys(t), s = X(t);
      return a.length === 1 && s ? s.value : `{${Object.entries(t).map(([o, u]) => {
        const m = W(u);
        return `${o}: ${m}`;
      }).join(", ")}}`;
    }
    case "Array": {
      const t = e.items;
      return `${W(t)}[]`;
    }
    case "Union":
      return e.anyOf.map(W).join(" | ");
    case "Unknown":
      return "any";
    case "Any":
      return "any";
    case "Tuple":
      return `[${e.items.map(W).join(", ")}]`;
    case "Unsafe":
      return e.type ?? "unknown";
    default:
      return "unknown";
  }
}
function Ut(e) {
  if (e[N] !== "Object") return false;
  const t = e.properties, a = Object.keys(t), s = X(t);
  return !(a.length === 1 && s);
}
function dt(e) {
  var _a;
  if (e[N] !== "Object") return null;
  const t = e.properties;
  return ((_a = X(t)) == null ? void 0 : _a.value) ?? null;
}
function F(e, t = {}) {
  const { compact: a = false } = t;
  switch (e[N]) {
    case "Literal":
      return typeof e.const == "string" ? `<span class="${l.string}">'${e.const}'</span>` : `<span class="${l.type}">${String(e.const)}</span>`;
    case "String":
      return `<span class="${l.type}">string</span>`;
    case "Number":
      return `<span class="${l.type}">number</span>`;
    case "Integer":
      return `<span class="${l.type}">integer</span>`;
    case "Boolean":
      return `<span class="${l.type}">boolean</span>`;
    case "Object": {
      const s = e.properties, n = Object.keys(s), o = X(s);
      if (n.length === 1 && o) return `<span>${o.value}</span>`;
      if (a && o) return `<span>${o.value}</span><span class="${l.punct}">{...}</span>`;
      const u = Object.entries(s).map(([m, b]) => {
        const y = F(b, t);
        return `<span>${m}</span><span class="${l.punct}">:</span> ${y}`;
      });
      return `<span class="${l.punct}">{</span>${u.join(`<span class="${l.punct}">,</span> `)}<span class="${l.punct}">}</span>`;
    }
    case "Array": {
      const s = e.items;
      return `${F(s, t)}<span class="${l.punct}">[]</span>`;
    }
    case "Union":
      return e.anyOf.map((n) => F(n, t)).join(`<span class="${l.punct}"> | </span>`);
    case "Unknown":
      return `<span class="${l.type}">any</span>`;
    case "Any":
      return `<span class="${l.type}">any</span>`;
    case "Tuple": {
      const n = e.items.map((o) => F(o, t)).join(`<span class="${l.punct}">, </span>`);
      return `<span class="${l.punct}">[</span>${n}<span class="${l.punct}">]</span>`;
    }
    case "Unsafe":
      return `<span class="${l.type}">${e.type ?? "unknown"}</span>`;
    default:
      return `<span class="${l.type}">unknown</span>`;
  }
}
function Dt(e) {
  var _a;
  if (e[N] !== "Object") return null;
  const t = e.properties, a = Object.keys(t).filter((o) => o !== "type"), s = a[a.length - 1], n = s ? ((_a = t[s]) == null ? void 0 : _a[N]) === "String" : false;
  return { fields: a, lastFieldIsString: n };
}
function ft(e, t) {
  const a = dt(e);
  if (!a) return;
  const s = Dt(e);
  if (!s) return;
  const n = t.get(a) ?? [], o = s.fields.join(",");
  n.some((u) => u.fields.join(",") === o) || (n.push(s), t.set(a, n));
}
function vt(e, t) {
  for (const a of e.inlets) if (a.messages) for (const s of a.messages) ft(s.schema, t);
}
function ve(e) {
  const t = /* @__PURE__ */ new Map();
  for (const a of Object.values(e)) vt(a, t);
  return t;
}
function me(e) {
  const t = /* @__PURE__ */ new Map();
  for (const a of e) ft(a, t);
  return t;
}
function ge(e, t, a) {
  const s = /* @__PURE__ */ new Map();
  for (const n of t) {
    const o = e[n];
    o && vt(o, s);
  }
  for (const [n, o] of a) {
    const u = s.get(n) ?? [];
    for (const m of o) {
      const b = m.fields.join(",");
      u.some((y) => y.fields.join(",") === b) || u.push(m);
    }
    s.set(n, u);
  }
  return s;
}
function xe(e, t) {
  st(t, true);
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
  let a = St(t, ["$$slots", "$$events", "$$legacy"]);
  const s = [["path", { d: "M15 3h6v6" }], ["path", { d: "M10 14 21 3" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]];
  Ot(e, kt({ name: "external-link" }, () => a, { get iconNode() {
    return s;
  }, children: (n, o) => {
    var u = it(), m = q(u);
    jt(m, () => t.children ?? ht), v(n, u);
  }, $$slots: { default: true } })), at();
}
var Et = x('<button class="flex cursor-pointer items-center gap-1"><!> <code class="rounded bg-zinc-800 px-1.5 py-0.5 text-xs whitespace-nowrap"><span> </span></code></button>'), Ft = x('<code class="cursor-help rounded bg-blue-500/20 px-1.5 py-0.5 text-xs whitespace-nowrap text-blue-400"> </code>'), Ht = x('<p class="max-w-48 text-xs">Audio parameter can be modulated at sample rate by connecting a signal or ADSR</p>'), Rt = x("<!> <!>", 1), Bt = x('<code class="rounded bg-zinc-800 px-1.5 py-0.5 text-xs whitespace-nowrap"><!></code>'), Kt = x('<tr><td colspan="2" class="pt-2 pb-2"><code class="ml-4 rounded bg-zinc-800 px-1.5 py-0.5 text-xs whitespace-nowrap"><!></code></td></tr>'), Vt = x('<tr><td class="py-2 pr-4 align-top"><!></td><td> </td></tr> <!>', 1), Wt = (e, t) => ut(t, !i(t)), qt = x('<div class="w-full text-center"><button class="mt-2 w-full cursor-pointer text-xs text-zinc-500 hover:text-blue-300"> </button></div>'), Gt = x('<div><table class="w-full text-sm"><thead><tr class="border-b border-zinc-800 text-left text-xs text-zinc-500 uppercase"><th class="pr-4 pb-2 font-medium">Message</th><th class="pb-2 font-medium">Description</th></tr></thead><tbody class="divide-y divide-zinc-800/50"></tbody></table> <!></div>');
function Jt(e, t) {
  st(t, true);
  let a = G(t, "class", 3, ""), s = G(t, "compact", 3, false), n = G(t, "isAudioParam", 3, false);
  const o = 6;
  let u = new Pt(), m = lt(false);
  function b(p) {
    u.has(p) ? u.delete(p) : u.add(p);
  }
  var y = Gt(), H = c(y), J = w(c(H));
  Tt(J, 21, () => i(m) ? t.messages : t.messages.slice(0, o), $t, (p, d, f) => {
    var M = Vt();
    const L = j(() => Ut(i(d).schema)), Y = j(() => dt(i(d).schema)), Q = j(() => u.has(f));
    var R = q(M), B = c(R), A = c(B);
    {
      var U = (h) => {
        var _ = Et();
        _.__click = () => b(f);
        var P = c(_);
        {
          let C = j(() => ["h-3 w-3 text-zinc-500 transition-transform", i(Q) && "rotate-90"]);
          Nt(P, { get class() {
            return i(C);
          } });
        }
        var I = w(P, 2), D = c(I), T = c(D, true);
        r(D), r(I), r(_), O(() => z(T, i(Y))), v(h, _);
      }, Z = (h) => {
        var _ = it(), P = q(_);
        {
          var I = (T) => {
            zt(T, { children: (C, nt) => {
              var rt = Rt(), ot = q(rt);
              It(ot, { children: (et, _t) => {
                var V = Ft(), bt = c(V);
                r(V), O((yt) => z(bt, `${yt ?? ""}~`), [() => W(i(d).schema)]), v(et, V);
              }, $$slots: { default: true } });
              var xt = w(ot, 2);
              Ct(xt, { children: (et, _t) => {
                var V = Ht();
                v(et, V);
              }, $$slots: { default: true } }), v(C, rt);
            }, $$slots: { default: true } });
          }, D = (T) => {
            var C = Bt(), nt = c(C);
            ct(nt, () => F(i(d).schema)), r(C), v(T, C);
          };
          E(P, (T) => {
            n() ? T(I) : T(D, false);
          }, true);
        }
        v(h, _);
      };
      E(A, (h) => {
        i(L) ? h(U) : h(Z, false);
      });
    }
    r(B);
    var K = w(B), tt = c(K, true);
    r(K), r(R);
    var mt = w(R, 2);
    {
      var gt = (h) => {
        var _ = Kt(), P = c(_), I = c(P), D = c(I);
        ct(D, () => F(i(d).schema)), r(I), r(P), r(_), v(h, _);
      };
      E(mt, (h) => {
        i(L) && i(Q) && h(gt);
      });
    }
    O(() => {
      S(K, 1, $(["py-2 text-zinc-400", s() && "text-xs"])), z(tt, i(d).description);
    }), v(p, M);
  }), r(J), r(H);
  var g = w(H, 2);
  {
    var k = (p) => {
      var d = qt(), f = c(d);
      f.__click = [Wt, m];
      var M = c(f, true);
      r(f), r(d), O(() => z(M, i(m) ? "Show less" : `Show ${t.messages.length - o} more\u2026`)), v(p, d);
    };
    E(g, (p) => {
      t.messages.length > o && p(k);
    });
  }
  r(y), O(() => S(y, 1, `overflow-x-auto ${a() ?? ""}`)), v(e, y), at();
}
pt(["click"]);
var Qt = (e, t) => ut(t, !i(t)), Xt = x("<div><!></div>"), Yt = x("<button><div><div> </div> <div> </div></div> <!></button> <!>", 1), Zt = x("<div><div> </div> <div> </div></div>"), te = x('<div class="rounded-lg border border-zinc-800/80 bg-zinc-900/40"><!></div>');
function _e(e, t) {
  st(t, true);
  let a = G(t, "defaultOpen", 3, true), s = G(t, "compact", 3, false), n = lt(wt(a()));
  const o = j(() => t.port.messages && t.port.messages.length > 0), u = j(() => "isAudioParam" in t.port && t.port.isAudioParam), m = j(() => () => {
    var _a;
    const g = (_a = t.port.handle) == null ? void 0 : _a.handleType;
    return g === "audio" || t.port.type === "signal" ? "rgb(59 130 246 / 0.45)" : g === "video" ? "rgb(249 115 22 / 0.45)" : "rgb(63 63 70 / 0.5)";
  });
  var b = te(), y = c(b);
  {
    var H = (g) => {
      var k = Yt(), p = q(k);
      p.__click = [Qt, n];
      var d = c(p), f = c(d), M = c(f, true);
      r(f);
      var L = w(f, 2), Y = c(L, true);
      r(L), r(d);
      var Q = w(d, 2);
      {
        let A = j(() => ["h-4 w-4 shrink-0 text-zinc-500 transition-transform", i(n) && "rotate-180"]);
        At(Q, { get class() {
          return i(A);
        } });
      }
      r(p);
      var R = w(p, 2);
      {
        var B = (A) => {
          var U = Xt(), Z = c(U);
          {
            let K = j(() => t.port.messages ?? []), tt = j(() => s() ? "mt-2 text-[11px]" : "mt-3");
            Jt(Z, { get messages() {
              return i(K);
            }, get class() {
              return i(tt);
            }, get compact() {
              return s();
            }, get isAudioParam() {
              return i(u);
            } });
          }
          r(U), O(() => S(U, 1, $(["border-t border-zinc-800", s() ? "p-2 pt-0" : "p-3 pt-0"]))), v(A, U);
        };
        E(R, (A) => {
          i(n) && A(B);
        });
      }
      O(() => {
        S(p, 1, $(["flex w-full cursor-pointer items-center justify-between text-left", s() ? "p-2" : "p-3"])), S(f, 1, $(["font-mono text-zinc-200", s() ? "text-xs" : "text-sm"])), z(M, t.port.id), S(L, 1, $(["text-zinc-400", s() ? "mt-0.5 text-[11px]" : "mt-1 text-sm"])), z(Y, t.port.description);
      }), v(g, k);
    }, J = (g) => {
      var k = Zt(), p = c(k), d = c(p, true);
      r(p);
      var f = w(p, 2), M = c(f, true);
      r(f), r(k), O(() => {
        S(k, 1, $(s() ? "p-2" : "p-3")), S(p, 1, $(["font-mono text-zinc-200", s() ? "text-xs" : "text-sm"])), z(d, t.port.id), S(f, 1, $(["text-zinc-400", s() ? "mt-0.5 text-[11px]" : "mt-1 text-sm"])), z(M, t.port.description);
      }), v(g, k);
    };
    E(y, (g) => {
      i(o) ? g(H) : g(J, false);
    });
  }
  r(b), O((g) => Mt(b, `border-left: 2px solid ${g ?? ""};`), [() => i(m)()]), v(e, b), at();
}
pt(["click"]);
export {
  xe as E,
  _e as P,
  me as a,
  ve as b,
  ge as c
};
