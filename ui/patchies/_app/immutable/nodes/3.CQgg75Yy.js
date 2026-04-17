import "../chunks/DsnmJJEf.js";
import { i as n } from "../chunks/B58RwAno.js";
import { p, f as m, h as d, t as l, b as x, c as f, $ as h, d as s, s as b, r, n as v } from "../chunks/CeQCqUQ_.js";
import { s as u } from "../chunks/DMf1efOI.js";
import { p as z } from "../chunks/BgdqR2UZ.js";
import { C as g } from "../chunks/CQp0UHcf.js";
var _ = m('<div class="flex flex-col items-center justify-center py-24 text-center"><!> <h1 class="mb-2 text-2xl font-bold text-zinc-200">Topic Not Found</h1> <p class="mb-6 text-zinc-400"> </p> <a href="/docs/demos" class="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-700">Back to Docs</a></div>');
function j(a, i) {
  p(i, false), n();
  var t = _();
  d(($) => {
    h.title = "Topic Not Found | Patchies Docs";
  });
  var e = s(t);
  g(e, { class: "mb-4 h-12 w-12 text-zinc-600" });
  var o = b(e, 4), c = s(o, true);
  r(o), v(2), r(t), l(() => {
    var _a;
    return u(c, ((_a = z.error) == null ? void 0 : _a.message) ?? "This topic does not exist.");
  }), x(a, t), f();
}
export {
  j as component
};
