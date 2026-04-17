import { o as Qe } from "../chunks/CrEetURD.js";
import { t as De, c as Ae } from "../chunks/CyBij4V2.js";
import { B as rt, a as Ke } from "../chunks/CEcmg3Xt.js";
import { o as at, a as Ue } from "../chunks/rULWNMqv.js";
import "../chunks/DsnmJJEf.js";
import { p as fe, e as Q, a as x, g as Je, b as s, c as me, bm as ot, f as b, d as o, r, z as e, al as M, n as le, b5 as Ne, t as X, s as v, ai as Fe, B as U, aj as ge, aq as qe } from "../chunks/CeQCqUQ_.js";
import { a as Ie, s as te, o as st } from "../chunks/DMf1efOI.js";
import { d as nt, s as Pe, b as ue, c as Te } from "../chunks/C66EmW7x.js";
import { s as Me, r as Re, p as Y, a as Ge, b as Le } from "../chunks/C_-niZe9.js";
import { i as $ } from "../chunks/CmAffBVh.js";
import { e as ye, i as Ce } from "../chunks/DyVjpqx_.js";
import { b as it } from "../chunks/Iav56Ua9.js";
import { s as ct } from "../chunks/CllaMrUC.js";
import { c as ee } from "../chunks/av5sMLXc.js";
import { C as lt, R as dt, D as vt, a as ut, b as ft, c as mt, d as _t, S as gt, e as pt, f as bt, g as ht, h as Ve, F as xt, B as Ee, A as Ye, P as yt, X as zt, i as wt } from "../chunks/D3lSbqlT.js";
import { c as kt, n as jt, b as je, k as Pt, m as St, a as Ct, C as Be, P as $t } from "../chunks/BSpKvSVU.js";
import { I as Ot } from "../chunks/CefFKWAt.js";
import { C as Oe } from "../chunks/DaOYr0Qd.js";
const It = true, Tt = true;
function Mt() {
  const n = {};
  for (const [t, l] of Object.entries(De)) for (const h of l) n[h] = t;
  return n;
}
const Bt = Mt(), Dt = Object.values(De).flat();
function Rt() {
  const n = /* @__PURE__ */ new Map();
  let t = 0;
  for (const l of rt) for (const h of l.objects) n.set(h, t++);
  return n;
}
const We = Rt();
function At(n, t) {
  const l = n.match(/^#\s+(.+)$/m);
  return l ? l[1].trim() : t;
}
const Nt = async ({ fetch: n }) => {
  const t = { topics: [], objects: [] }, l = Object.keys(Qe).filter((a) => Qe[a].type === a), h = Dt.map(async (a) => {
    try {
      const c = await n(`/content/topics/${a}.md`);
      if (c.ok) {
        const m = await c.text();
        return { slug: a, title: At(m, a), category: Bt[a] };
      }
    } catch {
    }
    return null;
  }), w = l.map(async (a) => {
    const c = at(a);
    try {
      if ((await n(`/content/objects/${c}.md`)).ok) return { slug: c, title: a };
    } catch {
    }
    return null;
  }), [i, p] = await Promise.all([Promise.all(h), Promise.all(w)]);
  return t.topics = i.filter((a) => a !== null), t.objects = p.filter((a) => a !== null).sort((a, c) => {
    const m = We.get(Ue(a.slug)) ?? 1 / 0, j = We.get(Ue(c.slug)) ?? 1 / 0;
    return m - j;
  }), { index: t };
}, Jr = Object.freeze(Object.defineProperty({ __proto__: null, load: Nt, prerender: It, ssr: Tt }, Symbol.toStringTag, { value: "Module" })), Kt = () => {
  const n = ct;
  return { page: { subscribe: n.page.subscribe }, navigating: { subscribe: n.navigating.subscribe }, updated: n.updated };
}, He = { subscribe(n) {
  return Kt().page.subscribe(n);
} };
function Ze(n, t) {
  fe(t, true);
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
  let l = Re(t, ["$$slots", "$$events", "$$legacy"]);
  const h = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }]];
  Ot(n, Me({ name: "panel-left" }, () => l, { get iconNode() {
    return h;
  }, children: (w, i) => {
    var p = Q(), a = x(p);
    Ie(a, () => t.children ?? Je), s(w, p);
  }, $$slots: { default: true } })), me();
}
var Ft = b("<a><!></a>"), qt = b('<div style="display: contents;"><!></div>');
function Gt(n, t) {
  const l = ot();
  fe(t, true);
  let h = Y(t, "id", 19, () => kt(l)), w = Y(t, "ref", 15, null), i = Y(t, "value", 3, ""), p = Y(t, "disabled", 3, false), a = Y(t, "onSelect", 3, jt), c = Y(t, "forceMount", 3, false), m = Y(t, "keywords", 19, () => []), j = Re(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "value", "disabled", "children", "child", "onSelect", "forceMount", "keywords"]);
  const O = lt.create({ id: je(() => h()), ref: je(() => w(), (y) => w(y)), value: je(() => i()), disabled: je(() => p()), onSelect: je(() => a()), forceMount: je(() => c()), keywords: je(() => m()) }), f = M(() => St(j, O.props));
  var u = Q(), _ = x(u);
  Pt(_, () => O.root.key, (y) => {
    var K = qt(), C = o(K);
    {
      var F = (B) => {
        var Z = Q(), g = x(Z);
        {
          var q = (P) => {
            var k = Q(), S = x(k);
            Ie(S, () => t.child, () => ({ props: e(f) })), s(P, k);
          }, I = (P) => {
            var k = Ft();
            nt(k, () => ({ ...e(f) }));
            var S = o(k);
            Ie(S, () => t.children ?? Je), r(k), s(P, k);
          };
          $(g, (P) => {
            t.child ? P(q) : P(I, false);
          });
        }
        s(B, Z);
      };
      $(C, (B) => {
        O.shouldRender && B(F);
      });
    }
    r(K), s(y, K);
  }), s(n, u), me();
}
var Lt = b("<!> <!>", 1), Et = b("<!> <!>", 1);
function Ht(n, t) {
  fe(t, true);
  let l = Y(t, "open", 15, false), h = Y(t, "ref", 15, null), w = Y(t, "value", 15, ""), i = Y(t, "title", 3, "Command Palette"), p = Y(t, "description", 3, "Search for a command to run"), a = Re(t, ["$$slots", "$$events", "$$legacy", "open", "ref", "value", "title", "description", "portalProps", "children"]);
  var c = Q(), m = x(c);
  ee(m, () => dt, (j, O) => {
    O(j, Me(() => a, { get open() {
      return l();
    }, set open(f) {
      l(f);
    }, children: (f, u) => {
      var _ = Et(), y = x(_);
      ee(y, () => vt, (C, F) => {
        F(C, { class: "sr-only", children: (B, Z) => {
          var g = Lt(), q = x(g);
          ee(q, () => ut, (P, k) => {
            k(P, { children: (S, D) => {
              le();
              var R = Ne();
              X(() => te(R, i())), s(S, R);
            }, $$slots: { default: true } });
          });
          var I = v(q, 2);
          ee(I, () => ft, (P, k) => {
            k(P, { children: (S, D) => {
              le();
              var R = Ne();
              X(() => te(R, p())), s(S, R);
            }, $$slots: { default: true } });
          }), s(B, g);
        }, $$slots: { default: true } });
      });
      var K = v(y, 2);
      ee(K, () => mt, (C, F) => {
        F(C, { class: "overflow-hidden p-0", get portalProps() {
          return t.portalProps;
        }, children: (B, Z) => {
          _t(B, Me({ class: "**:data-[slot=command-input-wrapper]:h-12 [&_[data-command-group]]:px-2 [&_[data-command-group]:not([hidden])_~[data-command-group]]:pt-0 [&_[data-command-input-wrapper]_svg]:h-5 [&_[data-command-input-wrapper]_svg]:w-5 [&_[data-command-input]]:h-12 [&_[data-command-item]]:px-2 [&_[data-command-item]]:py-3 [&_[data-command-item]_svg]:h-5 [&_[data-command-item]_svg]:w-5" }, () => a, { get children() {
            return t.children;
          }, get value() {
            return w();
          }, set value(g) {
            w(g);
          }, get ref() {
            return h();
          }, set ref(g) {
            h(g);
          } }));
        }, $$slots: { default: true } });
      }), s(f, _);
    }, $$slots: { default: true } }));
  }), s(n, c), me();
}
function Xe(n, t) {
  fe(t, true);
  let l = Y(t, "ref", 15, null), h = Re(t, ["$$slots", "$$events", "$$legacy", "ref", "class"]);
  var w = Q(), i = x(w);
  {
    let p = M(() => Ct("aria-selected:bg-accent aria-selected:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class));
    ee(i, () => Gt, (a, c) => {
      c(a, Me({ "data-slot": "command-item", get class() {
        return e(p);
      } }, () => h, { get ref() {
        return l();
      }, set ref(m) {
        l(m);
      } }));
    });
  }
  s(n, w), me();
}
var Qt = (n, t) => U(t, true), Ut = b('<span class="ml-auto text-xs text-zinc-600"> </span>'), Vt = b("<!> <span> </span> <!>", 1), Wt = b('<span class="ml-auto text-xs text-zinc-600"> </span>'), Xt = b('<!> <span class="font-mono"> </span> <!>', 1), Jt = b("<!> <!> <!>", 1), Yt = b("<!> <!>", 1), Zt = b('<button class="flex w-full cursor-pointer items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-500 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50 hover:text-zinc-400"><!> <span class="flex-1 text-left">Search docs...</span> <kbd class="hidden rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 font-mono text-xs text-zinc-500 sm:inline">\u2318K</kbd></button> <!>', 1);
function et(n, t) {
  fe(t, true);
  let l = ge(false);
  const h = M(() => [...t.topics.map((f) => ({ slug: f.slug, title: f.title, category: f.category, type: "topic", href: `/docs/${f.slug}` })), ...t.objects.map((f) => ({ slug: f.slug, title: f.title ?? f.slug, category: void 0, type: "object", href: `/docs/objects/${f.slug}` }))]), w = M(() => new xt(e(h), { keys: ["title", "slug", "category"], threshold: 0.3, includeScore: true }));
  let i = ge("");
  const p = M(() => {
    if (!e(i).trim()) return { topics: e(h).filter((y) => y.type === "topic").slice(0, 5), objects: e(h).filter((y) => y.type === "object").slice(0, 8) };
    const f = e(w).search(e(i)), u = [], _ = [];
    for (const y of f) y.item.type === "topic" ? u.push(y.item) : _.push(y.item);
    return { topics: u, objects: _ };
  });
  st(() => {
    function f(u) {
      (u.metaKey || u.ctrlKey) && u.key === "k" && (u.preventDefault(), U(l, !e(l)));
    }
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  });
  function a() {
    U(l, false), U(i, "");
  }
  qe(() => {
    !e(l) && e(i) && U(i, "");
  });
  var c = Zt(), m = x(c);
  m.__click = [Qt, l];
  var j = o(m);
  gt(j, { class: "h-4 w-4" }), le(4), r(m);
  var O = v(m, 2);
  ee(O, () => Ht, (f, u) => {
    u(f, { shouldFilter: false, title: "Search Documentation", description: "Search through guides and object references", get open() {
      return e(l);
    }, set open(_) {
      U(l, _, true);
    }, children: (_, y) => {
      var K = Yt(), C = x(K);
      ee(C, () => pt, (B, Z) => {
        Z(B, { placeholder: "Search docs...", get value() {
          return e(i);
        }, set value(g) {
          U(i, g, true);
        } });
      });
      var F = v(C, 2);
      ee(F, () => bt, (B, Z) => {
        Z(B, { class: "max-h-[400px]", children: (g, q) => {
          var I = Jt(), P = x(I);
          ee(P, () => ht, (L, E) => {
            E(L, { children: (J, oe) => {
              le();
              var de = Ne("No results found.");
              s(J, de);
            }, $$slots: { default: true } });
          });
          var k = v(P, 2);
          {
            var S = (L) => {
              var E = Q(), J = x(E);
              ee(J, () => Ve, (oe, de) => {
                de(oe, { heading: "Guides", children: (pe, be) => {
                  var ve = Q(), ze = x(ve);
                  ye(ze, 17, () => e(p).topics, (se) => se.slug, (se, V) => {
                    var _e = Q(), z = x(_e);
                    ee(z, () => Xe, (d, A) => {
                      A(d, { get href() {
                        return e(V).href;
                      }, onSelect: a, class: "flex items-center gap-2", children: (H, W) => {
                        var T = Vt(), N = x(T);
                        Ee(N, { class: "h-4 w-4 text-zinc-500" });
                        var G = v(N, 2), ne = o(G, true);
                        r(G);
                        var ie = v(G, 2);
                        {
                          var ce = (re) => {
                            var ae = Ut(), he = o(ae, true);
                            r(ae), X(() => te(he, e(V).category)), s(re, ae);
                          };
                          $(ie, (re) => {
                            e(V).category && re(ce);
                          });
                        }
                        X(() => te(ne, e(V).title)), s(H, T);
                      }, $$slots: { default: true } });
                    }), s(se, _e);
                  }), s(pe, ve);
                }, $$slots: { default: true } });
              }), s(L, E);
            };
            $(k, (L) => {
              e(p).topics.length > 0 && L(S);
            });
          }
          var D = v(k, 2);
          {
            var R = (L) => {
              var E = Q(), J = x(E);
              ee(J, () => Ve, (oe, de) => {
                de(oe, { heading: "Objects", children: (pe, be) => {
                  var ve = Q(), ze = x(ve);
                  ye(ze, 17, () => e(p).objects, (se) => se.slug, (se, V) => {
                    var _e = Q(), z = x(_e);
                    ee(z, () => Xe, (d, A) => {
                      A(d, { get href() {
                        return e(V).href;
                      }, onSelect: a, class: "flex items-center gap-2", children: (H, W) => {
                        var T = Xt(), N = x(T);
                        Ke(N, { class: "h-4 w-4 text-zinc-500" });
                        var G = v(N, 2), ne = o(G, true);
                        r(G);
                        var ie = v(G, 2);
                        {
                          var ce = (re) => {
                            var ae = Wt(), he = o(ae, true);
                            r(ae), X(() => te(he, e(V).title)), s(re, ae);
                          };
                          $(ie, (re) => {
                            e(V).title !== e(V).slug && re(ce);
                          });
                        }
                        X(() => te(ne, e(V).slug)), s(H, T);
                      }, $$slots: { default: true } });
                    }), s(se, _e);
                  }), s(pe, ve);
                }, $$slots: { default: true } });
              }), s(L, E);
            };
            $(D, (L) => {
              e(p).objects.length > 0 && L(R);
            });
          }
          s(g, I);
        }, $$slots: { default: true } });
      }), s(_, K);
    }, $$slots: { default: true } });
  }), s(n, c), me();
}
Fe(["click"]);
var er = (n, t) => t(true), tr = (n, t) => t(false), rr = (n, t) => U(t, !e(t)), ar = b("<li><a> </a></li>"), or = b(`<div><div class="mb-1 text-[9px] font-semibold tracking-widest text-zinc-600 uppercase" style="font-family: 'Syne', sans-serif;"> </div> <ul class="space-y-0.5"></ul></div>`), sr = b('<nav class="mt-4 space-y-3"></nav>'), nr = (n, t) => U(t, !e(t)), ir = b("<li><a> </a></li>"), cr = b('<ul class="space-y-0.5"></ul>'), lr = b(`<button title="Show sidebar"><!></button> <aside><div class="sticky top-8 flex max-h-[calc(100vh-4rem)] w-56 flex-col"><div class="shrink-0 pb-4"><div class="mb-4 flex items-center justify-between"><a href="/" class="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-orange-400" style="font-family: 'Syne', sans-serif; letter-spacing: 0.04em;"><!> Patchies</a> <button class="cursor-pointer rounded p-1 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300" title="Hide sidebar"><!></button></div> <div class="mb-2"><!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><div class="mb-6"><button class="mb-2 flex w-full cursor-pointer items-center gap-1.5 text-[10px] font-bold tracking-widest text-amber-600/80 uppercase transition-colors hover:text-amber-500" style="font-family: 'Syne', sans-serif;"><!> <!> Guides</button> <!></div> <div><button class="mb-2 flex w-full cursor-pointer items-center gap-1.5 text-[10px] font-bold tracking-widest text-amber-600/80 uppercase transition-colors hover:text-amber-500" style="font-family: 'Syne', sans-serif;"><!> <!> Objects</button> <!></div></div></div></aside>`, 1);
function dr(n, t) {
  fe(t, true);
  const [l, h] = Ge(), w = () => Le(He, "$page", l);
  let i = Y(t, "visible", 15, true), p = ge(true), a = ge(true), c = ge(void 0);
  const m = M(() => w().url.pathname);
  qe(() => {
    !e(c) || !e(m) || requestAnimationFrame(() => {
      var _a;
      const d = (_a = e(c)) == null ? void 0 : _a.querySelector('[data-active="true"]');
      if (d && e(c)) {
        const A = e(c).getBoundingClientRect(), H = d.getBoundingClientRect(), T = H.top - A.top + e(c).scrollTop - A.height / 2 + H.height / 2;
        e(c).scrollTo({ top: Math.max(0, T), behavior: "smooth" });
      }
    });
  });
  var j = lr(), O = x(j);
  O.__click = [er, i];
  let f;
  var u = o(O);
  Ze(u, { class: "h-5 w-5" }), r(O);
  var _ = v(O, 2);
  let y;
  var K = o(_), C = o(K), F = o(C), B = o(F), Z = o(B);
  Ye(Z, { class: "h-3.5 w-3.5" }), le(), r(B);
  var g = v(B, 2);
  g.__click = [tr, i];
  var q = o(g);
  yt(q, { class: "h-4 w-4" }), r(g), r(F);
  var I = v(F, 2), P = o(I);
  et(P, { get topics() {
    return t.topics;
  }, get objects() {
    return t.objects;
  } }), r(I), r(C);
  var k = v(C, 2), S = o(k), D = o(S);
  D.__click = [rr, p];
  var R = o(D);
  {
    var L = (d) => {
      Be(d, { class: "h-3 w-3" });
    }, E = (d) => {
      Oe(d, { class: "h-3 w-3" });
    };
    $(R, (d) => {
      e(p) ? d(L) : d(E, false);
    });
  }
  var J = v(R, 2);
  Ee(J, { class: "h-3 w-3" }), le(), r(D);
  var oe = v(D, 2);
  {
    var de = (d) => {
      var A = sr();
      ye(A, 21, () => t.categoryOrder, Ce, (H, W) => {
        var T = Q();
        const N = M(() => t.topicsByCategory.get(e(W)));
        var G = x(T);
        {
          var ne = (ie) => {
            var ce = or(), re = o(ce), ae = o(re, true);
            r(re);
            var he = v(re, 2);
            ye(he, 21, () => e(N), Ce, ($e, we) => {
              var Se = ar();
              const xe = M(() => e(m) === `/docs/${e(we).slug}`);
              var ke = o(Se), tt = o(ke, true);
              r(ke), r(Se), X(() => {
                ue(ke, "href", `/docs/${e(we).slug ?? ""}`), ue(ke, "data-active", e(xe)), Pe(ke, 1, Te(["block border-l-2 py-1 pr-2 pl-1.5 text-sm transition-colors", e(xe) ? "border-orange-500 bg-zinc-900/80 text-zinc-100" : "border-transparent text-zinc-500 hover:border-zinc-700 hover:bg-zinc-800/40 hover:text-zinc-300"])), te(tt, e(we).title);
              }), s($e, Se);
            }), r(he), r(ce), X(() => te(ae, e(W))), s(ie, ce);
          };
          $(G, (ie) => {
            e(N) && e(N).length > 0 && ie(ne);
          });
        }
        s(H, T);
      }), r(A), s(d, A);
    };
    $(oe, (d) => {
      e(p) && d(de);
    });
  }
  r(S);
  var pe = v(S, 2), be = o(pe);
  be.__click = [nr, a];
  var ve = o(be);
  {
    var ze = (d) => {
      Be(d, { class: "h-3 w-3" });
    }, se = (d) => {
      Oe(d, { class: "h-3 w-3" });
    };
    $(ve, (d) => {
      e(a) ? d(ze) : d(se, false);
    });
  }
  var V = v(ve, 2);
  Ke(V, { class: "h-3 w-3" }), le(), r(be);
  var _e = v(be, 2);
  {
    var z = (d) => {
      var A = cr();
      ye(A, 21, () => t.objects, Ce, (H, W) => {
        var T = ir();
        const N = M(() => e(m) === `/docs/objects/${e(W).slug}`);
        var G = o(T), ne = o(G, true);
        r(G), r(T), X(() => {
          ue(G, "href", `/docs/objects/${e(W).slug ?? ""}`), ue(G, "data-active", e(N)), Pe(G, 1, Te(["block border-l-2 py-1 pr-2 pl-1.5 font-mono text-sm transition-colors", e(N) ? "border-orange-500 bg-zinc-900/80 text-zinc-100" : "border-transparent text-zinc-500 hover:border-zinc-700 hover:bg-zinc-800/40 hover:text-zinc-300"])), te(ne, e(W).title);
        }), s(H, T);
      }), r(A), s(d, A);
    };
    $(_e, (d) => {
      e(a) && d(z);
    });
  }
  r(pe), r(k), it(k, (d) => U(c, d), () => e(c)), r(K), r(_), X((d, A) => {
    f = Pe(O, 1, "fixed top-8 left-4 z-10 hidden cursor-pointer rounded-lg bg-zinc-800/80 p-2 text-zinc-400 backdrop-blur-sm transition-all hover:bg-zinc-700 hover:text-zinc-200 md:block", null, f, d), y = Pe(_, 1, "hidden shrink-0 transition-all duration-300 ease-in-out md:block", null, y, A);
  }, [() => ({ "opacity-0": i(), "pointer-events-none": i() }), () => ({ "w-56": i(), "mr-8": i(), "w-0": !i(), "opacity-0": !i(), "overflow-hidden": !i() })]), s(n, j), me(), h();
}
Fe(["click"]);
var vr = (n, t) => U(t, true), ur = (n, t) => U(t, false), fr = (n, t) => U(t, !e(t)), mr = b("<li><a> </a></li>"), _r = b('<div><div class="mb-1 text-xs text-zinc-600"> </div> <ul class="space-y-0.5"></ul></div>'), gr = b('<nav class="mt-4 space-y-3"></nav>'), pr = (n, t) => U(t, !e(t)), br = b("<li><a> </a></li>"), hr = b('<ul class="space-y-0.5"></ul>'), xr = (n, t) => U(t, false), yr = b('<button class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" aria-label="Close menu"></button> <aside class="fixed inset-0 z-50 overflow-y-auto bg-zinc-950 p-6 pb-20 md:hidden"><div class="mb-3"><a href="/" class="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"><!> Back to Patchies</a></div> <div class="mb-5"><!></div> <div class="mb-6"><button class="mb-2 flex w-full cursor-pointer items-center gap-1.5 text-xs font-medium tracking-wider text-zinc-500 uppercase transition-colors hover:text-zinc-400"><!> <!> Guides</button> <!></div> <div><button class="mb-2 flex w-full cursor-pointer items-center gap-1.5 text-xs font-medium tracking-wider text-zinc-500 uppercase transition-colors hover:text-zinc-400"><!> <!> Objects</button> <!></div> <button class="fixed right-4 bottom-4 z-50 cursor-pointer rounded-full bg-zinc-700 p-3 text-zinc-200 shadow-lg transition-all hover:bg-zinc-600 hover:text-zinc-100" title="Close menu"><!></button></aside>', 1), zr = b('<button class="fixed right-4 bottom-4 z-40 cursor-pointer rounded-full bg-zinc-800 p-3 text-zinc-300 shadow-lg transition-all hover:bg-zinc-700 hover:text-zinc-100 md:hidden" title="Open menu"><!></button> <!>', 1);
function wr(n, t) {
  fe(t, true);
  const [l, h] = Ge(), w = () => Le(He, "$page", l);
  let i = ge(true), p = ge(true), a = ge(false);
  qe(() => {
    w().url.pathname, U(a, false);
  });
  const c = M(() => w().url.pathname);
  var m = zr(), j = x(m);
  j.__click = [vr, a];
  var O = o(j);
  Ze(O, { class: "h-5 w-5" }), r(j);
  var f = v(j, 2);
  {
    var u = (_) => {
      var y = yr(), K = x(y);
      K.__click = [ur, a];
      var C = v(K, 2), F = o(C), B = o(F), Z = o(B);
      Ye(Z, { class: "h-4 w-4" }), le(), r(B), r(F);
      var g = v(F, 2), q = o(g);
      et(q, { get topics() {
        return t.topics;
      }, get objects() {
        return t.objects;
      } }), r(g);
      var I = v(g, 2), P = o(I);
      P.__click = [fr, i];
      var k = o(P);
      {
        var S = (z) => {
          Be(z, { class: "h-3.5 w-3.5" });
        }, D = (z) => {
          Oe(z, { class: "h-3.5 w-3.5" });
        };
        $(k, (z) => {
          e(i) ? z(S) : z(D, false);
        });
      }
      var R = v(k, 2);
      Ee(R, { class: "h-3.5 w-3.5" }), le(), r(P);
      var L = v(P, 2);
      {
        var E = (z) => {
          var d = gr();
          ye(d, 21, () => t.categoryOrder, Ce, (A, H) => {
            var W = Q();
            const T = M(() => t.topicsByCategory.get(e(H)));
            var N = x(W);
            {
              var G = (ne) => {
                var ie = _r(), ce = o(ie), re = o(ce, true);
                r(ce);
                var ae = v(ce, 2);
                ye(ae, 21, () => e(T), Ce, (he, $e) => {
                  var we = mr();
                  const Se = M(() => e(c) === `/docs/${e($e).slug}`);
                  var xe = o(we), ke = o(xe, true);
                  r(xe), r(we), X(() => {
                    ue(xe, "href", `/docs/${e($e).slug ?? ""}`), ue(xe, "data-active", e(Se)), Pe(xe, 1, Te(["block rounded px-2 py-1.5 text-sm transition-colors", e(Se) ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"])), te(ke, e($e).title);
                  }), s(he, we);
                }), r(ae), r(ie), X(() => te(re, e(H))), s(ne, ie);
              };
              $(N, (ne) => {
                e(T) && e(T).length > 0 && ne(G);
              });
            }
            s(A, W);
          }), r(d), s(z, d);
        };
        $(L, (z) => {
          e(i) && z(E);
        });
      }
      r(I);
      var J = v(I, 2), oe = o(J);
      oe.__click = [pr, p];
      var de = o(oe);
      {
        var pe = (z) => {
          Be(z, { class: "h-3.5 w-3.5" });
        }, be = (z) => {
          Oe(z, { class: "h-3.5 w-3.5" });
        };
        $(de, (z) => {
          e(p) ? z(pe) : z(be, false);
        });
      }
      var ve = v(de, 2);
      Ke(ve, { class: "h-3.5 w-3.5" }), le(), r(oe);
      var ze = v(oe, 2);
      {
        var se = (z) => {
          var d = hr();
          ye(d, 21, () => t.objects, Ce, (A, H) => {
            var W = br();
            const T = M(() => e(c) === `/docs/objects/${e(H).slug}`);
            var N = o(W), G = o(N, true);
            r(N), r(W), X(() => {
              ue(N, "href", `/docs/objects/${e(H).slug ?? ""}`), ue(N, "data-active", e(T)), Pe(N, 1, Te(["block rounded px-2 py-1.5 font-mono text-sm transition-colors", e(T) ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"])), te(G, e(H).title);
            }), s(A, W);
          }), r(d), s(z, d);
        };
        $(ze, (z) => {
          e(p) && z(se);
        });
      }
      r(J);
      var V = v(J, 2);
      V.__click = [xr, a];
      var _e = o(V);
      zt(_e, { class: "h-5 w-5" }), r(V), r(C), s(_, y);
    };
    $(f, (_) => {
      e(a) && _(u);
    });
  }
  s(n, m), me(), h();
}
Fe(["click"]);
var kr = b("<!> <!>", 1);
function jr(n, t) {
  fe(t, true);
  let l = Y(t, "visible", 15, true);
  const h = M(() => {
    const a = /* @__PURE__ */ new Map();
    for (const c of t.topics) {
      const m = c.category ?? "Other";
      a.has(m) || a.set(m, []), a.get(m).push(c);
    }
    for (const [c, m] of a) {
      const j = De[c] ?? [];
      m.sort((O, f) => {
        const u = j.indexOf(O.slug), _ = j.indexOf(f.slug);
        return (u === -1 ? 1 / 0 : u) - (_ === -1 ? 1 / 0 : _);
      });
    }
    return a;
  });
  var w = kr(), i = x(w);
  wr(i, { get topics() {
    return t.topics;
  }, get objects() {
    return t.objects;
  }, get topicsByCategory() {
    return e(h);
  }, get categoryOrder() {
    return Ae;
  } });
  var p = v(i, 2);
  dr(p, { get topics() {
    return t.topics;
  }, get objects() {
    return t.objects;
  }, get topicsByCategory() {
    return e(h);
  }, get categoryOrder() {
    return Ae;
  }, get visible() {
    return l();
  }, set visible(a) {
    l(a);
  } }), s(n, w), me();
}
var Pr = b(`<a class="group flex min-w-0 flex-1 flex-col rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-4 transition-all hover:border-orange-500/30 hover:bg-zinc-900/60"><span class="mb-1.5 flex items-center gap-1 text-[10px] font-bold tracking-widest text-zinc-600 uppercase transition-colors group-hover:text-orange-500/70" style="font-family: 'Syne', sans-serif;"><!> Previous</span> <span class="truncate text-sm font-medium text-zinc-400 transition-colors group-hover:text-zinc-200"> </span></a>`), Sr = b('<div class="hidden flex-1 sm:block"></div>'), Cr = b(`<a class="group flex min-w-0 flex-1 flex-col items-end rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-4 text-right transition-all hover:border-orange-500/30 hover:bg-zinc-900/60 sm:items-end"><span class="mb-1.5 flex items-center gap-1 text-[10px] font-bold tracking-widest text-zinc-600 uppercase transition-colors group-hover:text-orange-500/70" style="font-family: 'Syne', sans-serif;">Next <!></span> <span class="truncate text-sm font-medium text-zinc-400 transition-colors group-hover:text-zinc-200"> </span></a>`), $r = b('<div class="hidden flex-1 sm:block"></div>'), Or = b('<nav class="mt-12 flex flex-col gap-3 border-t border-zinc-800/60 pt-6 sm:flex-row sm:gap-4"><!> <!></nav>');
function Ir(n, t) {
  fe(t, true);
  const [l, h] = Ge(), w = () => Le(He, "$page", l), i = M(() => () => {
    const u = [];
    for (const _ of Ae) {
      const y = De[_] ?? [];
      for (const K of y) {
        const C = t.topics.find((F) => F.slug === K);
        C && u.push({ slug: C.slug, title: C.title, href: `/docs/${C.slug}` });
      }
    }
    for (const _ of t.objects) u.push({ slug: _.slug, title: _.title, href: `/docs/objects/${_.slug}` });
    return u;
  }), p = M(() => w().url.pathname), a = M(() => () => e(i)().findIndex((u) => u.href === e(p))), c = M(() => () => {
    const u = e(a)();
    return u > 0 ? e(i)()[u - 1] : null;
  }), m = M(() => () => {
    const u = e(a)(), _ = e(i)();
    return u >= 0 && u < _.length - 1 ? _[u + 1] : null;
  });
  var j = Q(), O = x(j);
  {
    var f = (u) => {
      var _ = Or(), y = o(_);
      {
        var K = (g) => {
          var q = Q();
          const I = M(() => e(c)());
          var P = x(q);
          {
            var k = (S) => {
              var D = Pr(), R = o(D), L = o(R);
              wt(L, { class: "h-3 w-3" }), le(), r(R);
              var E = v(R, 2), J = o(E, true);
              r(E), r(D), X(() => {
                ue(D, "href", e(I).href), te(J, e(I).title);
              }), s(S, D);
            };
            $(P, (S) => {
              e(I) && S(k);
            });
          }
          s(g, q);
        }, C = (g) => {
          var q = Sr();
          s(g, q);
        };
        $(y, (g) => {
          e(c)() ? g(K) : g(C, false);
        });
      }
      var F = v(y, 2);
      {
        var B = (g) => {
          var q = Q();
          const I = M(() => e(m)());
          var P = x(q);
          {
            var k = (S) => {
              var D = Cr(), R = o(D), L = v(o(R));
              Oe(L, { class: "h-3 w-3" }), r(R);
              var E = v(R, 2), J = o(E, true);
              r(E), r(D), X(() => {
                ue(D, "href", e(I).href), te(J, e(I).title);
              }), s(S, D);
            };
            $(P, (S) => {
              e(I) && S(k);
            });
          }
          s(g, q);
        }, Z = (g) => {
          var q = $r();
          s(g, q);
        };
        $(F, (g) => {
          e(m)() ? g(B) : g(Z, false);
        });
      }
      r(_), s(u, _);
    };
    $(O, (u) => {
      (e(c)() || e(m)()) && u(f);
    });
  }
  s(n, j), me(), h();
}
var Tr = b('<div class="patchies-docs docs-bg min-h-screen text-zinc-200 svelte-etk2d7"><div><!> <main class="min-w-0 flex-1"><!> <!></main></div></div>');
function Yr(n, t) {
  fe(t, true);
  let l = ge(true);
  $t(n, { children: (h, w) => {
    var i = Tr(), p = o(i);
    let a;
    var c = o(p);
    jr(c, { get topics() {
      return t.data.index.topics;
    }, get objects() {
      return t.data.index.objects;
    }, get visible() {
      return e(l);
    }, set visible(f) {
      U(l, f, true);
    } });
    var m = v(c, 2), j = o(m);
    Ie(j, () => t.children);
    var O = v(j, 2);
    Ir(O, { get topics() {
      return t.data.index.topics;
    }, get objects() {
      return t.data.index.objects;
    } }), r(m), r(p), r(i), X((f) => a = Pe(p, 1, "mx-auto flex px-4 py-8 transition-all duration-300", null, a, f), [() => ({ "max-w-5xl": e(l), "max-w-3xl": !e(l) })]), s(h, i);
  }, $$slots: { default: true } }), me();
}
export {
  Yr as component,
  Jr as universal
};
