import { e as m } from "../chunks/KjYeVjkE.js";
import { t as p } from "../chunks/CyBij4V2.js";
import "../chunks/DsnmJJEf.js";
import { p as l, f as c, h as d, b as i, c as f, t as u, $ as h, d as _, z as v, al as b, r as g } from "../chunks/CeQCqUQ_.js";
import { h as k } from "../chunks/DiyIUo5C.js";
import { b as w } from "../chunks/C66EmW7x.js";
import { m as j } from "../chunks/DwP6Sfex.js";
const O = () => Object.values(p).flat().map((t) => ({ topic: t }));
function x(o, t) {
  const e = o.match(/^#\s+(.+)$/m);
  return e ? e[1].trim() : t.split("-").map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join(" ");
}
const y = async ({ params: o, fetch: t }) => {
  const e = o.topic, a = await t(`/content/topics/${e}.md`);
  if (!a.ok) throw m(404, { message: `Documentation not found for "${e}"` });
  const r = await a.text(), s = x(r, e);
  return { topic: e, title: s, markdown: r };
}, U = Object.freeze(Object.defineProperty({ __proto__: null, entries: O, load: y }, Symbol.toStringTag, { value: "Module" }));
var P = c('<meta name="description"/>'), z = c('<section class="prose-markdown"><!></section>');
function q(o, t) {
  l(t, true);
  const e = b(() => j.parse(t.data.markdown));
  var a = z();
  d((s) => {
    var n = P();
    u(() => {
      h.title = `${t.data.title ?? ""} | Patchies`, w(n, "content", `Patchies documentation: ${t.data.title ?? ""}`);
    }), i(s, n);
  });
  var r = _(a);
  k(r, () => v(e)), g(a), i(o, a), f();
}
export {
  q as component,
  U as universal
};
