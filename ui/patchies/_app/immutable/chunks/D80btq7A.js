import { ah as D, z as F, a2 as W, E as Y, F as k, b6 as y, G as z } from "./CeQCqUQ_.js";
import { g as H } from "./DoeJ0Mx_.js";
function J(f) {
  let i = 0, s = W(0), t;
  return () => {
    D() && (F(s), Y(() => (i === 0 && (t = k(() => f(() => y(s)))), i += 1, () => {
      z(() => {
        i -= 1, i === 0 && (t == null ? void 0 : t(), t = void 0);
      });
    })));
  };
}
var p = {}, O, N;
function K() {
  if (N) return O;
  N = 1;
  var f = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, s = /^\s*/, t = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, R = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, g = /^\s+|\s+$/g, v = `
`, h = "/", l = "*", o = "", M = "comment", X = "declaration";
  O = function(n, E) {
    if (typeof n != "string") throw new TypeError("First argument must be a string");
    if (!n) return [];
    E = E || {};
    var m = 1, u = 1;
    function A(e) {
      var r = e.match(i);
      r && (m += r.length);
      var a = e.lastIndexOf(v);
      u = ~a ? e.length - a : u + e.length;
    }
    function S() {
      var e = { line: m, column: u };
      return function(r) {
        return r.position = new I(e), b(), r;
      };
    }
    function I(e) {
      this.start = e, this.end = { line: m, column: u }, this.source = E.source;
    }
    I.prototype.content = n;
    function P(e) {
      var r = new Error(E.source + ":" + m + ":" + u + ": " + e);
      if (r.reason = e, r.filename = E.source, r.line = m, r.column = u, r.source = n, !E.silent) throw r;
    }
    function _(e) {
      var r = e.exec(n);
      if (r) {
        var a = r[0];
        return A(a), n = n.slice(a.length), r;
      }
    }
    function b() {
      _(s);
    }
    function w(e) {
      var r;
      for (e = e || []; r = G(); ) r !== false && e.push(r);
      return e;
    }
    function G() {
      var e = S();
      if (!(h != n.charAt(0) || l != n.charAt(1))) {
        for (var r = 2; o != n.charAt(r) && (l != n.charAt(r) || h != n.charAt(r + 1)); ) ++r;
        if (r += 2, o === n.charAt(r - 1)) return P("End of comment missing");
        var a = n.slice(2, r - 2);
        return u += 2, A(a), n = n.slice(r), u += 2, e({ type: M, comment: a });
      }
    }
    function L() {
      var e = S(), r = _(t);
      if (r) {
        if (G(), !_(R)) return P("property missing ':'");
        var a = _(c), x = e({ type: X, property: T(r[0].replace(f, o)), value: a ? T(a[0].replace(f, o)) : o });
        return _(d), x;
      }
    }
    function q() {
      var e = [];
      w(e);
      for (var r; r = L(); ) r !== false && (e.push(r), w(e));
      return e;
    }
    return b(), q();
  };
  function T(n) {
    return n ? n.replace(g, o) : o;
  }
  return O;
}
var j;
function U() {
  if (j) return p;
  j = 1;
  var f = p && p.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(p, "__esModule", { value: true }), p.default = s;
  var i = f(K());
  function s(t, R) {
    var c = null;
    if (!t || typeof t != "string") return c;
    var d = (0, i.default)(t), g = typeof R == "function";
    return d.forEach(function(v) {
      if (v.type === "declaration") {
        var h = v.property, l = v.value;
        g ? R(h, l, v) : l && (c = c || {}, c[h] = l);
      }
    }), c;
  }
  return p;
}
var V = U();
const C = H(V), Q = C.default || C;
export {
  J as c,
  Q as p
};
