import { e as re } from "../chunks/KjYeVjkE.js";
import { o as I, T as se } from "../chunks/CrEetURD.js";
import { f as oe, m as ne } from "../chunks/DwP6Sfex.js";
import { o as ie, a as ce } from "../chunks/rULWNMqv.js";
import "../chunks/DsnmJJEf.js";
import { ai as de, p as le, f as c, h as me, a as D, t as k, b as i, c as ve, s as n, d as s, $ as be, r as t, z as p, al as B, n as fe, am as pe } from "../chunks/CeQCqUQ_.js";
import { s as g } from "../chunks/DMf1efOI.js";
import { i as _ } from "../chunks/CmAffBVh.js";
import { e as P, i as S } from "../chunks/DyVjpqx_.js";
import { h as _e } from "../chunks/DiyIUo5C.js";
import { b as he, s as xe, c as ge } from "../chunks/C66EmW7x.js";
import { E as ue, P as F } from "../chunks/Dd6aIv_p.js";
const ye = () => Object.keys(I).filter((m) => I[m].type === m).map((m) => ({ object: ie(m) })), ze = async ({ params: m, fetch: e }) => {
  const h = ce(m.object), y = I[h] ?? null, x = await oe(h, e);
  if (!y && !x.markdown) throw re(404, { message: `Documentation not found for "${h}"` });
  return { objectType: h, schema: y, markdown: x.markdown, hasHelpPatch: x.hasHelpPatch };
}, Qe = Object.freeze(Object.defineProperty({ __proto__: null, entries: ye, load: ze }, Symbol.toStringTag, { value: "Module" }));
function je(m, e) {
  window.location.href = `/?help=${encodeURIComponent(e.data.objectType)}`;
}
var we = c('<meta name="description"/>'), ke = c('<div class="mt-2 flex items-center gap-2"><span class="rounded border border-zinc-700/60 bg-zinc-800/50 px-2 py-0.5 font-mono text-xs text-zinc-500"> </span></div> <p class="mt-3 text-sm leading-relaxed text-zinc-400"> </p>', 1), Te = c(`<section class="mb-6"><h2 class="mb-3 border-l-2 border-orange-500 pl-2 text-[10px] font-bold tracking-widest text-zinc-400 uppercase" style="font-family: 'Syne', sans-serif;">Inlets</h2> <div class="space-y-4"></div></section>`), Pe = c(`<section class="mb-6"><h2 class="mb-3 border-l-2 border-orange-500 pl-2 text-[10px] font-bold tracking-widest text-zinc-400 uppercase" style="font-family: 'Syne', sans-serif;">Outlets</h2> <div class="space-y-4"></div></section>`), Se = c('<div class="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3"><div class="flex items-center gap-2"><span> </span> <span class="text-xs text-zinc-500"> </span></div> <div class="mt-1 text-xs text-zinc-500"> </div></div>'), Oe = c(`<section class="mb-6"><h2 class="mb-3 border-l-2 border-orange-500 pl-2 text-[10px] font-bold tracking-widest text-zinc-400 uppercase" style="font-family: 'Syne', sans-serif;">Type Specifiers</h2> <p class="mb-3 text-sm text-zinc-400">Outlets are created based on type specifiers. Use shorthand or full names:</p> <div class="grid grid-cols-2 gap-2"></div></section>`), He = c("<!> <!> <!>", 1), Ce = c('<section class="prose-markdown mb-8"><!></section>'), Ee = c('<div class="mb-2 border-t border-zinc-800 pt-6"><button class="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-sm text-blue-300 transition-colors hover:bg-blue-500/20"><!> Open Help Patch</button></div>'), De = c('<span class="rounded border border-zinc-700/50 bg-zinc-800/40 px-2 py-0.5 font-mono text-xs text-zinc-500"> </span>'), Ie = c(`<section class="mb-6"><h2 class="mb-3 border-l-2 border-orange-500 pl-2 text-[10px] font-bold tracking-widest text-zinc-400 uppercase" style="font-family: 'Syne', sans-serif;">Tags</h2> <div class="flex flex-wrap gap-1.5"></div></section>`), Re = c('<header class="mb-8"><div class="mb-1 flex items-start gap-3"><h1 class="font-mono text-3xl font-bold text-zinc-50" style="letter-spacing: -0.015em; text-shadow: 0 0 60px rgba(249,115,22,0.12);"> </h1></div> <!></header> <!> <!> <!> <!>', 1);
function Ve(m, e) {
  le(e, true);
  const h = B(() => e.data.markdown ? ne.parse(e.data.markdown) : null);
  var y = Re();
  me((a) => {
    var r = we();
    k(() => {
      var _a;
      be.title = `${e.data.objectType ?? ""} | Patchies`, he(r, "content", ((_a = e.data.schema) == null ? void 0 : _a.description) ?? `Documentation for ${e.data.objectType} object in Patchies`);
    }), i(a, r);
  });
  var x = D(y), O = s(x), R = s(O), J = s(R, true);
  t(R), t(O);
  var K = n(O, 2);
  {
    var L = (a) => {
      var r = ke(), o = D(r), v = s(o), u = s(v, true);
      t(v), t(o);
      var b = n(o, 2), z = s(b, true);
      t(b), k(() => {
        g(u, e.data.schema.category), g(z, e.data.schema.description);
      }), i(a, r);
    };
    _(K, (a) => {
      e.data.schema && a(L);
    });
  }
  t(x);
  var G = n(x, 2);
  {
    var N = (a) => {
      var r = He(), o = D(r);
      {
        var v = (d) => {
          var l = Te(), f = n(s(l), 2);
          P(f, 21, () => e.data.schema.inlets, S, (j, w) => {
            F(j, { get port() {
              return p(w);
            } });
          }), t(f), t(l), i(d, l);
        };
        _(o, (d) => {
          e.data.schema.inlets.length > 0 && d(v);
        });
      }
      var u = n(o, 2);
      {
        var b = (d) => {
          var l = Pe(), f = n(s(l), 2);
          P(f, 21, () => e.data.schema.outlets, S, (j, w) => {
            F(j, { get port() {
              return p(w);
            } });
          }), t(f), t(l), i(d, l);
        };
        _(u, (d) => {
          e.data.schema.outlets.length > 0 && !e.data.schema.hasDynamicOutlets && d(b);
        });
      }
      var z = n(u, 2);
      {
        var Z = (d) => {
          var l = Oe(), f = n(s(l), 4);
          P(f, 21, () => Object.entries(se), S, (j, w) => {
            var Y = B(() => pe(p(w), 2));
            let $ = () => p(Y)[0], H = () => p(Y)[1];
            var C = Se(), E = s(C), T = s(E), ee = s(T, true);
            t(T);
            var q = n(T, 2), te = s(q);
            t(q), t(E);
            var A = n(E, 2), ae = s(A, true);
            t(A), t(C), k(() => {
              xe(T, 1, ge(["font-mono text-sm", H().color])), g(ee, $()), g(te, `(${H().name ?? ""})`), g(ae, H().description);
            }), i(j, C);
          }), t(f), t(l), i(d, l);
        };
        _(z, (d) => {
          e.data.objectType === "trigger" && d(Z);
        });
      }
      i(a, r);
    };
    _(G, (a) => {
      e.data.schema && a(N);
    });
  }
  var U = n(G, 2);
  {
    var Q = (a) => {
      var r = Ce(), o = s(r);
      _e(o, () => p(h)), t(r), i(a, r);
    };
    _(U, (a) => {
      p(h) && a(Q);
    });
  }
  var M = n(U, 2);
  {
    var V = (a) => {
      var r = Ee(), o = s(r);
      o.__click = [je, e];
      var v = s(o);
      ue(v, { class: "h-4 w-4" }), fe(), t(o), t(r), i(a, r);
    };
    _(M, (a) => {
      e.data.hasHelpPatch && a(V);
    });
  }
  var W = n(M, 2);
  {
    var X = (a) => {
      var r = Ie(), o = n(s(r), 2);
      P(o, 21, () => e.data.schema.tags, S, (v, u) => {
        var b = De(), z = s(b, true);
        t(b), k(() => g(z, p(u))), i(v, b);
      }), t(o), t(r), i(a, r);
    };
    _(W, (a) => {
      var _a;
      ((_a = e.data.schema) == null ? void 0 : _a.tags) && e.data.schema.tags.length > 0 && a(X);
    });
  }
  k(() => g(J, e.data.objectType)), i(m, y), ve();
}
de(["click"]);
export {
  Ve as component,
  Qe as universal
};
