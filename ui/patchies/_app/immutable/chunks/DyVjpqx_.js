import { L as re, v as X, i as R, x as ne, N as J, j as fe, z as P, Y as ie, R as le, T as se, U as Q, V as z, m as O, C as ue, Z as te, O as G, P as ve, _ as V, a0 as Y, K as de, a1 as Z, A as _e, a2 as g, a3 as W, a4 as $, a5 as oe, X as k, Q as ce, a6 as he, a7 as B, G as Ee, a8 as y, a9 as me, o as pe, aa as Te, ab as Ae, ac as Ie, k as xe } from "./CeQCqUQ_.js";
function Me(l, r) {
  return r;
}
function Ce(l, r, e) {
  for (var u = l.items, v = [], d = r.length, s = 0; s < d; s++) Te(r[s].e, v, true);
  var h = d > 0 && v.length === 0 && e !== null;
  if (h) {
    var T = e.parentNode;
    Ae(T), T.append(e), u.clear(), C(l, r[0].prev, r[d - 1].next);
  }
  Ie(v, () => {
    for (var p = 0; p < d; p++) {
      var o = r[p];
      h || (u.delete(o.k), C(l, o.prev, o.next)), y(o.e, !h);
    }
  });
}
function De(l, r, e, u, v, d = null) {
  var s = l, h = { flags: r, items: /* @__PURE__ */ new Map(), first: null }, T = (r & W) !== 0;
  if (T) {
    var p = l;
    s = R ? X(ne(p)) : p.appendChild(J());
  }
  R && fe();
  var o = null, w = false, A = /* @__PURE__ */ new Map(), M = ie(() => {
    var _ = e();
    return oe(_) ? _ : _ == null ? [] : $(_);
  }), n, t;
  function i() {
    Ne(t, n, h, A, s, v, r, u, e), d !== null && (n.length === 0 ? o ? k(o) : o = G(() => d(s)) : o !== null && ce(o, () => {
      o = null;
    }));
  }
  re(() => {
    t ?? (t = xe), n = P(M);
    var _ = n.length;
    if (w && _ === 0) return;
    w = _ === 0;
    let m = false;
    if (R) {
      var I = le(s) === se;
      I !== (_ === 0) && (s = Q(), X(s), z(false), m = true);
    }
    if (R) {
      for (var N = null, c, a = 0; a < _; a++) {
        if (O.nodeType === ue && O.data === te) {
          s = O, m = true, z(false);
          break;
        }
        var f = n[a], E = u(f, a);
        c = K(O, h, N, null, f, E, a, v, r, e), h.items.set(E, c), N = c;
      }
      _ > 0 && X(Q());
    }
    if (R) _ === 0 && d && (o = G(() => d(s)));
    else if (ve()) {
      var S = /* @__PURE__ */ new Set(), b = de;
      for (a = 0; a < _; a += 1) {
        f = n[a], E = u(f, a);
        var D = h.items.get(E) ?? A.get(E);
        D ? (r & (V | Y)) !== 0 && j(D, f, a, r) : (c = K(null, h, null, null, f, E, a, v, r, e, true), A.set(E, c)), S.add(E);
      }
      for (const [x, L] of h.items) S.has(x) || b.skipped_effects.add(L.e);
      b.add_callback(i);
    } else i();
    m && z(true), P(M);
  }), R && (s = O);
}
function Ne(l, r, e, u, v, d, s, h, T) {
  var _a, _b, _c, _d;
  var p = (s & me) !== 0, o = (s & (V | Y)) !== 0, w = r.length, A = e.items, M = e.first, n = M, t, i = null, _, m = [], I = [], N, c, a, f;
  if (p) for (f = 0; f < w; f += 1) N = r[f], c = h(N, f), a = A.get(c), a !== void 0 && ((_a = a.a) == null ? void 0 : _a.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(a));
  for (f = 0; f < w; f += 1) {
    if (N = r[f], c = h(N, f), a = A.get(c), a === void 0) {
      var E = u.get(c);
      if (E !== void 0) {
        u.delete(c), A.set(c, E);
        var S = i ? i.next : n;
        C(e, i, E), C(e, E, S), F(E, S, v), i = E;
      } else {
        var b = n ? n.e.nodes_start : v;
        i = K(b, e, i, i === null ? e.first : i.next, N, c, f, d, s, T);
      }
      A.set(c, i), m = [], I = [], n = i.next;
      continue;
    }
    if (o && j(a, N, f, s), (a.e.f & B) !== 0 && (k(a.e), p && ((_b = a.a) == null ? void 0 : _b.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(a))), a !== n) {
      if (t !== void 0 && t.has(a)) {
        if (m.length < I.length) {
          var D = I[0], x;
          i = D.prev;
          var L = m[0], q = m[m.length - 1];
          for (x = 0; x < m.length; x += 1) F(m[x], D, v);
          for (x = 0; x < I.length; x += 1) t.delete(I[x]);
          C(e, L.prev, q.next), C(e, i, L), C(e, q, D), n = D, i = q, f -= 1, m = [], I = [];
        } else t.delete(a), F(a, n, v), C(e, a.prev, a.next), C(e, a, i === null ? e.first : i.next), C(e, i, a), i = a;
        continue;
      }
      for (m = [], I = []; n !== null && n.k !== c; ) (n.e.f & B) === 0 && (t ?? (t = /* @__PURE__ */ new Set())).add(n), I.push(n), n = n.next;
      if (n === null) continue;
      a = n;
    }
    m.push(a), i = a, n = a.next;
  }
  if (n !== null || t !== void 0) {
    for (var H = t === void 0 ? [] : $(t); n !== null; ) (n.e.f & B) === 0 && H.push(n), n = n.next;
    var U = H.length;
    if (U > 0) {
      var ee = (s & W) !== 0 && w === 0 ? v : null;
      if (p) {
        for (f = 0; f < U; f += 1) (_c = H[f].a) == null ? void 0 : _c.measure();
        for (f = 0; f < U; f += 1) (_d = H[f].a) == null ? void 0 : _d.fix();
      }
      Ce(e, H, ee);
    }
  }
  p && Ee(() => {
    var _a2;
    if (_ !== void 0) for (a of _) (_a2 = a.a) == null ? void 0 : _a2.apply();
  }), l.first = e.first && e.first.e, l.last = i && i.e;
  for (var ae of u.values()) y(ae.e);
  u.clear();
}
function j(l, r, e, u) {
  (u & V) !== 0 && Z(l.v, r), (u & Y) !== 0 ? Z(l.i, e) : l.i = e;
}
function K(l, r, e, u, v, d, s, h, T, p, o) {
  var w = (T & V) !== 0, A = (T & he) === 0, M = w ? A ? _e(v, false, false) : g(v) : v, n = (T & Y) === 0 ? s : g(s), t = { i: n, v: M, k: d, a: null, e: null, prev: e, next: u };
  try {
    if (l === null) {
      var i = document.createDocumentFragment();
      i.append(l = J());
    }
    return t.e = G(() => h(l, M, n, p), R), t.e.prev = e && e.e, t.e.next = u && u.e, e === null ? o || (r.first = t) : (e.next = t, e.e.next = t.e), u !== null && (u.prev = t, u.e.prev = t.e), t;
  } finally {
  }
}
function F(l, r, e) {
  for (var u = l.next ? l.next.e.nodes_start : e, v = r ? r.e.nodes_start : e, d = l.e.nodes_start; d !== null && d !== u; ) {
    var s = pe(d);
    v.before(d), d = s;
  }
}
function C(l, r, e) {
  r === null ? l.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e);
}
export {
  De as e,
  Me as i
};
