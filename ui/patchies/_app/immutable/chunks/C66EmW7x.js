import { L as U, a8 as j, O as Y, D as z, i as S, av as J, a5 as Q, b7 as W, b8 as X, b9 as Z, ba as m, bb as x, bc as rr, z as ir, bd as fr, be as er, V as P, bf as tr, bg as sr, ai as ar, bh as ur, bi as lr, bj as or, bk as cr, bl as nr } from "./CeQCqUQ_.js";
function vr(r, f) {
  var i = void 0, e;
  U(() => {
    i !== (i = f()) && (e && (j(e), e = null), i && (e = Y(() => {
      z(() => i(r));
    })));
  });
}
function B(r) {
  var f, i, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var t = r.length;
    for (f = 0; f < t; f++) r[f] && (i = B(r[f])) && (e && (e += " "), e += i);
  } else for (i in r) r[i] && (e && (e += " "), e += i);
  return e;
}
function dr() {
  for (var r, f, i = 0, e = "", t = arguments.length; i < t; i++) (r = arguments[i]) && (f = B(r)) && (e && (e += " "), e += f);
  return e;
}
function br(r) {
  return typeof r == "object" ? dr(r) : r ?? "";
}
const $ = [...` 	
\r\f\xA0\v\uFEFF`];
function gr(r, f, i) {
  var e = r == null ? "" : "" + r;
  if (f && (e = e ? e + " " + f : f), i) {
    for (var t in i) if (i[t]) e = e ? e + " " + t : t;
    else if (e.length) for (var s = t.length, u = 0; (u = e.indexOf(t, u)) >= 0; ) {
      var l = u + s;
      (u === 0 || $.includes(e[u - 1])) && (l === e.length || $.includes(e[l])) ? e = (u === 0 ? "" : e.substring(0, u)) + e.substring(l + 1) : u = l;
    }
  }
  return e === "" ? null : e;
}
function R(r, f = false) {
  var i = f ? " !important;" : ";", e = "";
  for (var t in r) {
    var s = r[t];
    s != null && s !== "" && (e += " " + t + ": " + s + i);
  }
  return e;
}
function y(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function hr(r, f) {
  if (f) {
    var i = "", e, t;
    if (Array.isArray(f) ? (e = f[0], t = f[1]) : e = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = false, u = 0, l = false, v = [];
      e && v.push(...Object.keys(e).map(y)), t && v.push(...Object.keys(t).map(y));
      var o = 0, A = -1;
      const b = r.length;
      for (var d = 0; d < b; d++) {
        var n = r[d];
        if (l ? n === "/" && r[d - 1] === "*" && (l = false) : s ? s === n && (s = false) : n === "/" && r[d + 1] === "*" ? l = true : n === '"' || n === "'" ? s = n : n === "(" ? u++ : n === ")" && u--, !l && s === false && u === 0) {
          if (n === ":" && A === -1) A = d;
          else if (n === ";" || d === b - 1) {
            if (A !== -1) {
              var N = y(r.substring(o, A).trim());
              if (!v.includes(N)) {
                n !== ";" && d++;
                var p = r.substring(o, d).trim();
                i += " " + p + ";";
              }
            }
            o = d + 1, A = -1;
          }
        }
      }
    }
    return e && (i += R(e)), t && (i += R(t, true)), i = i.trim(), i === "" ? null : i;
  }
  return r == null ? null : String(r);
}
function _r(r, f, i, e, t, s) {
  var u = r.__className;
  if (S || u !== i || u === void 0) {
    var l = gr(i, e, s);
    (!S || l !== r.getAttribute("class")) && (l == null ? r.removeAttribute("class") : f ? r.className = l : r.setAttribute("class", l)), r.__className = i;
  } else if (s && t !== s) for (var v in s) {
    var o = !!s[v];
    (t == null || o !== !!t[v]) && r.classList.toggle(v, o);
  }
  return s;
}
function M(r, f = {}, i, e) {
  for (var t in i) {
    var s = i[t];
    f[t] !== s && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, s, e));
  }
}
function Ar(r, f, i, e) {
  var t = r.__style;
  if (S || t !== f) {
    var s = hr(f, e);
    (!S || s !== r.getAttribute("style")) && (s == null ? r.removeAttribute("style") : r.style.cssText = s), r.__style = f;
  } else e && (Array.isArray(e) ? (M(r, i == null ? void 0 : i[0], e[0]), M(r, i == null ? void 0 : i[1], e[1], "important")) : M(r, i, e));
  return e;
}
function k(r, f, i = false) {
  if (r.multiple) {
    if (f == null) return;
    if (!Q(f)) return W();
    for (var e of r.options) e.selected = f.includes(V(e));
    return;
  }
  for (e of r.options) {
    var t = V(e);
    if (X(t, f)) {
      e.selected = true;
      return;
    }
  }
  (!i || f !== void 0) && (r.selectedIndex = -1);
}
function pr(r) {
  var f = new MutationObserver(() => {
    k(r, r.__value);
  });
  f.observe(r, { childList: true, subtree: true, attributes: true, attributeFilter: ["value"] }), J(() => {
    f.disconnect();
  });
}
function V(r) {
  return "__value" in r ? r.__value : r.value;
}
const L = Symbol("class"), E = Symbol("style"), D = Symbol("is custom element"), G = Symbol("is html");
function Lr(r) {
  if (S) {
    var f = false, i = () => {
      if (!f) {
        if (f = true, r.hasAttribute("value")) {
          var e = r.value;
          T(r, "value", null), r.value = e;
        }
        if (r.hasAttribute("checked")) {
          var t = r.checked;
          T(r, "checked", null), r.checked = t;
        }
      }
    };
    r.__on_r = i, or(i), cr();
  }
}
function Er(r, f) {
  var i = C(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== "PROGRESS") || (r.value = f ?? "");
}
function Tr(r, f) {
  var i = C(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f);
}
function Sr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function T(r, f, i, e) {
  var t = C(r);
  S && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === "LINK") || t[f] !== (t[f] = i) && (f === "loading" && (r[m] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && K(r).includes(f) ? r[f] = i : r.setAttribute(f, i));
}
function Nr(r, f, i, e, t = false) {
  var s = C(r), u = s[D], l = !s[G];
  let v = S && u;
  v && P(false);
  var o = f || {}, A = r.tagName === "OPTION";
  for (var d in f) d in i || (i[d] = null);
  i.class ? i.class = br(i.class) : (e || i[L]) && (i.class = null), i[E] && (i.style ?? (i.style = null));
  var n = K(r);
  for (const a in i) {
    let c = i[a];
    if (A && a === "value" && c == null) {
      r.value = r.__value = "", o[a] = c;
      continue;
    }
    if (a === "class") {
      var N = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      _r(r, N, c, e, f == null ? void 0 : f[L], i[L]), o[a] = c, o[L] = i[L];
      continue;
    }
    if (a === "style") {
      Ar(r, c, f == null ? void 0 : f[E], i[E]), o[a] = c, o[E] = i[E];
      continue;
    }
    var p = o[a];
    if (!(c === p && !(c === void 0 && r.hasAttribute(a)))) {
      o[a] = c;
      var b = a[0] + a[1];
      if (b !== "$$") if (b === "on") {
        const h = {}, O = "$$" + a;
        let g = a.slice(2);
        var w = nr(g);
        if (tr(g) && (g = g.slice(0, -7), h.capture = true), !w && p) {
          if (c != null) continue;
          r.removeEventListener(g, o[O], h), o[O] = null;
        }
        if (c != null) if (w) r[`__${g}`] = c, ar([g]);
        else {
          let q = function(F) {
            o[a].call(this, F);
          };
          o[O] = sr(g, r, q, h);
        }
        else w && (r[`__${g}`] = void 0);
      } else if (a === "style") T(r, a, c);
      else if (a === "autofocus") ur(r, !!c);
      else if (!u && (a === "__value" || a === "value" && c != null)) r.value = r.__value = c;
      else if (a === "selected" && A) Sr(r, c);
      else {
        var _ = a;
        l || (_ = lr(_));
        var I = _ === "defaultValue" || _ === "defaultChecked";
        if (c == null && !u && !I) if (s[a] = null, _ === "value" || _ === "checked") {
          let h = r;
          const O = f === void 0;
          if (_ === "value") {
            let g = h.defaultValue;
            h.removeAttribute(_), h.defaultValue = g, h.value = h.__value = O ? g : null;
          } else {
            let g = h.defaultChecked;
            h.removeAttribute(_), h.defaultChecked = g, h.checked = O ? g : false;
          }
        } else r.removeAttribute(a);
        else I || n.includes(_) && (u || typeof c != "string") ? r[_] = c : typeof c != "function" && T(r, _, c);
      }
    }
  }
  return v && P(true), o;
}
function Cr(r, f, i = [], e = [], t, s = false) {
  Z(i, e, (u) => {
    var l = void 0, v = {}, o = r.nodeName === "SELECT", A = false;
    if (U(() => {
      var n = f(...u.map(ir)), N = Nr(r, l, n, t, s);
      A && o && "value" in n && k(r, n.value);
      for (let b of Object.getOwnPropertySymbols(v)) n[b] || j(v[b]);
      for (let b of Object.getOwnPropertySymbols(n)) {
        var p = n[b];
        b.description === fr && (!l || p !== l[b]) && (v[b] && j(v[b]), v[b] = Y(() => vr(r, () => p))), N[b] = p;
      }
      l = N;
    }), o) {
      var d = r;
      z(() => {
        k(d, l.value, true), pr(d);
      });
    }
    A = true;
  });
}
function C(r) {
  return r.__attributes ?? (r.__attributes = { [D]: r.nodeName.includes("-"), [G]: r.namespaceURI === x });
}
var H = /* @__PURE__ */ new Map();
function K(r) {
  var f = H.get(r.nodeName);
  if (f) return f;
  H.set(r.nodeName, f = []);
  for (var i, e = r, t = Element.prototype; t !== e; ) {
    i = er(e);
    for (var s in i) i[s].set && f.push(s);
    e = rr(e);
  }
  return f;
}
export {
  L as C,
  E as S,
  Ar as a,
  T as b,
  br as c,
  Cr as d,
  dr as e,
  Er as f,
  k as g,
  Sr as h,
  pr as i,
  Tr as j,
  Lr as r,
  _r as s
};
