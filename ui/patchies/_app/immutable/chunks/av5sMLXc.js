import { L as u, i as l, j as m, M as _, N as p, O as h, K as v, P as b, m as g, Q as x } from "./CeQCqUQ_.js";
function E(i, s, d) {
  l && m();
  var r = i, a, n, e = null, t = null;
  function f() {
    n && (x(n), n = null), e && (e.lastChild.remove(), r.before(e), e = null), n = t, t = null;
  }
  u(() => {
    if (a !== (a = s())) {
      var c = b();
      if (a) {
        var o = r;
        c && (e = document.createDocumentFragment(), e.append(o = p())), t = h(() => d(o, a));
      }
      c ? v.add_callback(f) : f();
    }
  }, _), l && (r = g);
}
export {
  E as c
};
