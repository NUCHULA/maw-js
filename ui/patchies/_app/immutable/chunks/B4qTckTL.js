import { ad as f, ae as o, af as b, k as v, ag as m, E as p, ah as g } from "./CeQCqUQ_.js";
import { w, g as y } from "./CjsEYB_8.js";
import { d as A, r as B, a as C } from "./CjsEYB_8.js";
import { c as S } from "./D80btq7A.js";
function E(r, e) {
  var s = v, c = o, t = r();
  const a = w(t, (n) => {
    var i = t !== r(), u, _ = o, d = v;
    f(c), b(s);
    try {
      u = m(() => {
        p(() => {
          const l = r();
          i && n(l);
        });
      });
    } finally {
      f(_), b(d);
    }
    return i = true, u;
  });
  return e ? { set: e, update: (n) => e(n(r())), subscribe: a.subscribe } : { subscribe: a.subscribe };
}
function j(r) {
  let e;
  const s = S((t) => {
    let a = false;
    const n = r.subscribe((i) => {
      e = i, a && t();
    });
    return a = true, n;
  });
  function c() {
    return g() ? (s(), e) : y(r);
  }
  return "set" in r ? { get current() {
    return c();
  }, set current(t) {
    r.set(t);
  } } : { get current() {
    return c();
  } };
}
export {
  A as derived,
  j as fromStore,
  y as get,
  B as readable,
  C as readonly,
  E as toStore,
  w as writable
};
