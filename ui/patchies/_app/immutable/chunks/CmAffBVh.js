import { L as A, i as _, j as I, M as R, R as x, T as D, U as F, v as L, V as p, N as S, O as T, K as C, W as O, P, X as U, Q as j, m as q } from "./CeQCqUQ_.js";
function K(b, g, y = false) {
  _ && I();
  var r = b, t = null, s = null, e = O, E = y ? R : 0, l = false;
  const N = (n, a = true) => {
    l = true, d(a, n);
  };
  var f = null;
  function o() {
    f !== null && (f.lastChild.remove(), r.before(f), f = null);
    var n = e ? t : s, a = e ? s : t;
    n && U(n), a && j(a, () => {
      e ? s = null : t = null;
    });
  }
  const d = (n, a) => {
    if (e === (e = n)) return;
    let u = false;
    if (_) {
      const k = x(r) === D;
      !!e === k && (r = F(), L(r), p(false), u = true);
    }
    var v = P(), i = r;
    if (v && (f = document.createDocumentFragment(), f.append(i = S())), e ? t ?? (t = a && T(() => a(i))) : s ?? (s = a && T(() => a(i))), v) {
      var c = C, h = e ? t : s, m = e ? s : t;
      h && c.skipped_effects.delete(h), m && c.skipped_effects.add(m), c.add_callback(o);
    } else o();
    u && p(true);
  };
  A(() => {
    l = false, g(N), l || d(null, null);
  }, E), _ && (r = q);
}
export {
  K as i
};
