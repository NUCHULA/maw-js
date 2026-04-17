import { N as ce } from "./BOuAxtfB.js";
function vo(e) {
  return F(e) && !H(e) && !ht(e) && Symbol.asyncIterator in e;
}
function H(e) {
  return Array.isArray(e);
}
function As(e) {
  return typeof e == "bigint";
}
function gt(e) {
  return typeof e == "boolean";
}
function wn(e) {
  return e instanceof globalThis.Date;
}
function Ao(e) {
  return typeof e == "function";
}
function wo(e) {
  return F(e) && !H(e) && !ht(e) && Symbol.iterator in e;
}
function No(e) {
  return e === null;
}
function le(e) {
  return typeof e == "number";
}
function F(e) {
  return typeof e == "object" && e !== null;
}
function ws(e) {
  return e instanceof globalThis.RegExp;
}
function v(e) {
  return typeof e == "string";
}
function Fo(e) {
  return typeof e == "symbol";
}
function ht(e) {
  return e instanceof globalThis.Uint8Array;
}
function w(e) {
  return e === void 0;
}
function $o(e) {
  return e.map((t) => Rt(t));
}
function Po(e) {
  return new Date(e.getTime());
}
function ko(e) {
  return new Uint8Array(e);
}
function Co(e) {
  return new RegExp(e.source, e.flags);
}
function Ro(e) {
  const t = {};
  for (const s of Object.getOwnPropertyNames(e)) t[s] = Rt(e[s]);
  for (const s of Object.getOwnPropertySymbols(e)) t[s] = Rt(e[s]);
  return t;
}
function Rt(e) {
  return H(e) ? $o(e) : wn(e) ? Po(e) : ht(e) ? ko(e) : ws(e) ? Co(e) : F(e) ? Ro(e) : e;
}
function _(e) {
  return Rt(e);
}
function Nn(e, t) {
  return _(t === void 0 ? e : { ...t, ...e });
}
function Lo(e) {
  return Dt(e) && globalThis.Symbol.asyncIterator in e;
}
function Mo(e) {
  return Dt(e) && globalThis.Symbol.iterator in e;
}
function jo(e) {
  return e instanceof globalThis.Promise;
}
function Ns(e) {
  return e instanceof Date && globalThis.Number.isFinite(e.getTime());
}
function Fs(e) {
  return e instanceof globalThis.Uint8Array;
}
function Dt(e) {
  return e !== null && typeof e == "object";
}
function Ut(e) {
  return globalThis.Array.isArray(e) && !globalThis.ArrayBuffer.isView(e);
}
function Fn(e) {
  return e === void 0;
}
function $s(e) {
  return e === null;
}
function Ps(e) {
  return typeof e == "boolean";
}
function ze(e) {
  return typeof e == "number";
}
function Do(e) {
  return globalThis.Number.isInteger(e);
}
function ks(e) {
  return typeof e == "bigint";
}
function Et(e) {
  return typeof e == "string";
}
function Uo(e) {
  return typeof e == "function";
}
function Cs(e) {
  return typeof e == "symbol";
}
var Ie;
(function(e) {
  e.InstanceMode = "default", e.ExactOptionalPropertyTypes = false, e.AllowArrayObject = false, e.AllowNaN = false, e.AllowNullVoid = false;
  function t(p, T) {
    return e.ExactOptionalPropertyTypes ? T in p : p[T] !== void 0;
  }
  e.IsExactOptionalProperty = t;
  function s(p) {
    const T = Dt(p);
    return e.AllowArrayObject ? T : T && !Ut(p);
  }
  e.IsObjectLike = s;
  function i(p) {
    return s(p) && !(p instanceof Date) && !(p instanceof Uint8Array);
  }
  e.IsRecordLike = i;
  function a(p) {
    return e.AllowNaN ? ze(p) : Number.isFinite(p);
  }
  e.IsNumberLike = a;
  function l(p) {
    const T = Fn(p);
    return e.AllowNullVoid ? T || p === null : T;
  }
  e.IsVoidLike = l;
})(Ie || (Ie = {}));
function Eo(e) {
  return globalThis.Object.freeze(e).map((t) => Lt(t));
}
function qo(e) {
  const t = {};
  for (const s of Object.getOwnPropertyNames(e)) t[s] = Lt(e[s]);
  for (const s of Object.getOwnPropertySymbols(e)) t[s] = Lt(e[s]);
  return globalThis.Object.freeze(t);
}
function Lt(e) {
  return H(e) ? Eo(e) : wn(e) ? e : ht(e) ? e : ws(e) ? e : F(e) ? qo(e) : e;
}
function c(e, t) {
  const s = t !== void 0 ? { ...t, ...e } : e;
  switch (Ie.InstanceMode) {
    case "freeze":
      return Lt(s);
    case "clone":
      return _(s);
    default:
      return s;
  }
}
class ue extends Error {
  constructor(t) {
    super(t);
  }
}
const ee = Symbol.for("TypeBox.Transform"), yt = Symbol.for("TypeBox.Readonly"), he = Symbol.for("TypeBox.Optional"), qt = Symbol.for("TypeBox.Hint"), u = Symbol.for("TypeBox.Kind");
function $n(e) {
  return F(e) && e[yt] === "Readonly";
}
function Se(e) {
  return F(e) && e[he] === "Optional";
}
function Rs(e) {
  return y(e, "Any");
}
function Ls(e) {
  return y(e, "Argument");
}
function Qe(e) {
  return y(e, "Array");
}
function Bt(e) {
  return y(e, "AsyncIterator");
}
function zt(e) {
  return y(e, "BigInt");
}
function ft(e) {
  return y(e, "Boolean");
}
function Xe(e) {
  return y(e, "Computed");
}
function Je(e) {
  return y(e, "Constructor");
}
function Bo(e) {
  return y(e, "Date");
}
function Ye(e) {
  return y(e, "Function");
}
function Ze(e) {
  return y(e, "Integer");
}
function ne(e) {
  return y(e, "Intersect");
}
function Vt(e) {
  return y(e, "Iterator");
}
function y(e, t) {
  return F(e) && u in e && e[u] === t;
}
function Ms(e) {
  return gt(e) || le(e) || v(e);
}
function ke(e) {
  return y(e, "Literal");
}
function Ce(e) {
  return y(e, "MappedKey");
}
function Y(e) {
  return y(e, "MappedResult");
}
function bt(e) {
  return y(e, "Never");
}
function zo(e) {
  return y(e, "Not");
}
function Pn(e) {
  return y(e, "Null");
}
function et(e) {
  return y(e, "Number");
}
function de(e) {
  return y(e, "Object");
}
function Kt(e) {
  return y(e, "Promise");
}
function Gt(e) {
  return y(e, "Record");
}
function G(e) {
  return y(e, "Ref");
}
function js(e) {
  return y(e, "RegExp");
}
function It(e) {
  return y(e, "String");
}
function kn(e) {
  return y(e, "Symbol");
}
function Re(e) {
  return y(e, "TemplateLiteral");
}
function Vo(e) {
  return y(e, "This");
}
function Wt(e) {
  return F(e) && ee in e;
}
function Le(e) {
  return y(e, "Tuple");
}
function Cn(e) {
  return y(e, "Undefined");
}
function M(e) {
  return y(e, "Union");
}
function Ko(e) {
  return y(e, "Uint8Array");
}
function Go(e) {
  return y(e, "Unknown");
}
function Wo(e) {
  return y(e, "Unsafe");
}
function Ho(e) {
  return y(e, "Void");
}
function _o(e) {
  return F(e) && u in e && v(e[u]);
}
function me(e) {
  return Rs(e) || Ls(e) || Qe(e) || ft(e) || zt(e) || Bt(e) || Xe(e) || Je(e) || Bo(e) || Ye(e) || Ze(e) || ne(e) || Vt(e) || ke(e) || Ce(e) || Y(e) || bt(e) || zo(e) || Pn(e) || et(e) || de(e) || Kt(e) || Gt(e) || G(e) || js(e) || It(e) || kn(e) || Re(e) || Vo(e) || Le(e) || Cn(e) || M(e) || Ko(e) || Go(e) || Wo(e) || Ho(e) || _o(e);
}
const Qo = ["Argument", "Any", "Array", "AsyncIterator", "BigInt", "Boolean", "Computed", "Constructor", "Date", "Enum", "Function", "Integer", "Intersect", "Iterator", "Literal", "MappedKey", "MappedResult", "Not", "Null", "Number", "Object", "Promise", "Record", "Ref", "RegExp", "String", "Symbol", "TemplateLiteral", "This", "Tuple", "Undefined", "Union", "Uint8Array", "Unknown", "Void"];
function Ds(e) {
  try {
    return new RegExp(e), true;
  } catch {
    return false;
  }
}
function Rn(e) {
  if (!v(e)) return false;
  for (let t = 0; t < e.length; t++) {
    const s = e.charCodeAt(t);
    if (s >= 7 && s <= 13 || s === 27 || s === 127) return false;
  }
  return true;
}
function Us(e) {
  return Ln(e) || U(e);
}
function at(e) {
  return w(e) || As(e);
}
function S(e) {
  return w(e) || le(e);
}
function Ln(e) {
  return w(e) || gt(e);
}
function I(e) {
  return w(e) || v(e);
}
function Xo(e) {
  return w(e) || v(e) && Rn(e) && Ds(e);
}
function Jo(e) {
  return w(e) || v(e) && Rn(e);
}
function Es(e) {
  return w(e) || U(e);
}
function Mt(e) {
  return F(e) && e[he] === "Optional";
}
function ie(e) {
  return f(e, "Any") && I(e.$id);
}
function Yo(e) {
  return f(e, "Argument") && le(e.index);
}
function Me(e) {
  return f(e, "Array") && e.type === "array" && I(e.$id) && U(e.items) && S(e.minItems) && S(e.maxItems) && Ln(e.uniqueItems) && Es(e.contains) && S(e.minContains) && S(e.maxContains);
}
function Mn(e) {
  return f(e, "AsyncIterator") && e.type === "AsyncIterator" && I(e.$id) && U(e.items);
}
function Ht(e) {
  return f(e, "BigInt") && e.type === "bigint" && I(e.$id) && at(e.exclusiveMaximum) && at(e.exclusiveMinimum) && at(e.maximum) && at(e.minimum) && at(e.multipleOf);
}
function je(e) {
  return f(e, "Boolean") && e.type === "boolean" && I(e.$id);
}
function Zo(e) {
  return f(e, "Computed") && v(e.target) && H(e.parameters) && e.parameters.every((t) => U(t));
}
function _t(e) {
  return f(e, "Constructor") && e.type === "Constructor" && I(e.$id) && H(e.parameters) && e.parameters.every((t) => U(t)) && U(e.returns);
}
function Qt(e) {
  return f(e, "Date") && e.type === "Date" && I(e.$id) && S(e.exclusiveMaximumTimestamp) && S(e.exclusiveMinimumTimestamp) && S(e.maximumTimestamp) && S(e.minimumTimestamp) && S(e.multipleOfTimestamp);
}
function Xt(e) {
  return f(e, "Function") && e.type === "Function" && I(e.$id) && H(e.parameters) && e.parameters.every((t) => U(t)) && U(e.returns);
}
function ye(e) {
  return f(e, "Integer") && e.type === "integer" && I(e.$id) && S(e.exclusiveMaximum) && S(e.exclusiveMinimum) && S(e.maximum) && S(e.minimum) && S(e.multipleOf);
}
function qs(e) {
  return F(e) && Object.entries(e).every(([t, s]) => Rn(t) && U(s));
}
function De(e) {
  return f(e, "Intersect") && !(v(e.type) && e.type !== "object") && H(e.allOf) && e.allOf.every((t) => U(t) && !ar(t)) && I(e.type) && (Ln(e.unevaluatedProperties) || Es(e.unevaluatedProperties)) && I(e.$id);
}
function jn(e) {
  return f(e, "Iterator") && e.type === "Iterator" && I(e.$id) && U(e.items);
}
function f(e, t) {
  return F(e) && u in e && e[u] === t;
}
function Bs(e) {
  return Te(e) && v(e.const);
}
function zs(e) {
  return Te(e) && le(e.const);
}
function Vs(e) {
  return Te(e) && gt(e.const);
}
function Te(e) {
  return f(e, "Literal") && I(e.$id) && er(e.const);
}
function er(e) {
  return gt(e) || le(e) || v(e);
}
function tr(e) {
  return f(e, "MappedKey") && H(e.keys) && e.keys.every((t) => le(t) || v(t));
}
function nr(e) {
  return f(e, "MappedResult") && qs(e.properties);
}
function xe(e) {
  return f(e, "Never") && F(e.not) && Object.getOwnPropertyNames(e.not).length === 0;
}
function Ke(e) {
  return f(e, "Not") && U(e.not);
}
function Dn(e) {
  return f(e, "Null") && e.type === "null" && I(e.$id);
}
function K(e) {
  return f(e, "Number") && e.type === "number" && I(e.$id) && S(e.exclusiveMaximum) && S(e.exclusiveMinimum) && S(e.maximum) && S(e.minimum) && S(e.multipleOf);
}
function x(e) {
  return f(e, "Object") && e.type === "object" && I(e.$id) && qs(e.properties) && Us(e.additionalProperties) && S(e.minProperties) && S(e.maxProperties);
}
function Un(e) {
  return f(e, "Promise") && e.type === "Promise" && I(e.$id) && U(e.item);
}
function D(e) {
  return f(e, "Record") && e.type === "object" && I(e.$id) && Us(e.additionalProperties) && F(e.patternProperties) && ((t) => {
    const s = Object.getOwnPropertyNames(t.patternProperties);
    return s.length === 1 && Ds(s[0]) && F(t.patternProperties) && U(t.patternProperties[s[0]]);
  })(e);
}
function sr(e) {
  return f(e, "Ref") && I(e.$id) && v(e.$ref);
}
function rt(e) {
  return f(e, "RegExp") && I(e.$id) && v(e.source) && v(e.flags) && S(e.maxLength) && S(e.minLength);
}
function ae(e) {
  return f(e, "String") && e.type === "string" && I(e.$id) && S(e.minLength) && S(e.maxLength) && Xo(e.pattern) && Jo(e.format);
}
function dt(e) {
  return f(e, "Symbol") && e.type === "symbol" && I(e.$id);
}
function ct(e) {
  return f(e, "TemplateLiteral") && e.type === "string" && v(e.pattern) && e.pattern[0] === "^" && e.pattern[e.pattern.length - 1] === "$";
}
function ir(e) {
  return f(e, "This") && I(e.$id) && v(e.$ref);
}
function ar(e) {
  return F(e) && ee in e;
}
function Jt(e) {
  return f(e, "Tuple") && e.type === "array" && I(e.$id) && le(e.minItems) && le(e.maxItems) && e.minItems === e.maxItems && (w(e.items) && w(e.additionalItems) && e.minItems === 0 || H(e.items) && e.items.every((t) => U(t)));
}
function $e(e) {
  return f(e, "Undefined") && e.type === "undefined" && I(e.$id);
}
function ge(e) {
  return f(e, "Union") && I(e.$id) && F(e) && H(e.anyOf) && e.anyOf.every((t) => U(t));
}
function St(e) {
  return f(e, "Uint8Array") && e.type === "Uint8Array" && I(e.$id) && S(e.minByteLength) && S(e.maxByteLength);
}
function oe(e) {
  return f(e, "Unknown") && I(e.$id);
}
function or(e) {
  return f(e, "Unsafe");
}
function Yt(e) {
  return f(e, "Void") && e.type === "void" && I(e.$id);
}
function rr(e) {
  return F(e) && u in e && v(e[u]) && !Qo.includes(e[u]);
}
function U(e) {
  return F(e) && (ie(e) || Yo(e) || Me(e) || je(e) || Ht(e) || Mn(e) || Zo(e) || _t(e) || Qt(e) || Xt(e) || ye(e) || De(e) || jn(e) || Te(e) || tr(e) || nr(e) || xe(e) || Ke(e) || Dn(e) || K(e) || x(e) || Un(e) || D(e) || sr(e) || rt(e) || ae(e) || dt(e) || ct(e) || ir(e) || Jt(e) || $e(e) || ge(e) || St(e) || oe(e) || or(e) || Yt(e) || rr(e));
}
const dr = "(true|false)", Ct = "(0|[1-9][0-9]*)", Ks = "(.*)", cr = "(?!.*)", Ge = `^${Ct}$`, We = `^${Ks}$`, lr = `^${cr}$`, Gs = /* @__PURE__ */ new Map();
function ur(e) {
  return Gs.has(e);
}
function pr(e) {
  return Gs.get(e);
}
const Ws = /* @__PURE__ */ new Map();
function Hs(e) {
  return Ws.has(e);
}
function mr(e) {
  return Ws.get(e);
}
function gr(e, t) {
  return e.includes(t);
}
function hr(e) {
  return [...new Set(e)];
}
function yr(e, t) {
  return e.filter((s) => t.includes(s));
}
function fr(e, t) {
  return e.reduce((s, i) => yr(s, i), t);
}
function br(e) {
  return e.length === 1 ? e[0] : e.length > 1 ? fr(e.slice(1), e[0]) : [];
}
function Ir(e) {
  const t = [];
  for (const s of e) t.push(...s);
  return t;
}
function lt(e) {
  return c({ [u]: "Any" }, e);
}
function En(e, t) {
  return c({ [u]: "Array", type: "array", items: e }, t);
}
function Sr(e) {
  return c({ [u]: "Argument", index: e });
}
function qn(e, t) {
  return c({ [u]: "AsyncIterator", type: "AsyncIterator", items: e }, t);
}
function k(e, t, s) {
  return c({ [u]: "Computed", target: e, parameters: t }, s);
}
function Tr(e, t) {
  const { [t]: s, ...i } = e;
  return i;
}
function Q(e, t) {
  return t.reduce((s, i) => Tr(s, i), e);
}
function A(e) {
  return c({ [u]: "Never", not: {} }, e);
}
function E(e) {
  return c({ [u]: "MappedResult", properties: e });
}
function Bn(e, t, s) {
  return c({ [u]: "Constructor", type: "Constructor", parameters: e, returns: t }, s);
}
function Tt(e, t, s) {
  return c({ [u]: "Function", type: "Function", parameters: e, returns: t }, s);
}
function bn(e, t) {
  return c({ [u]: "Union", anyOf: e }, t);
}
function xr(e) {
  return e.some((t) => Se(t));
}
function ps(e) {
  return e.map((t) => Se(t) ? Or(t) : t);
}
function Or(e) {
  return Q(e, [he]);
}
function vr(e, t) {
  return xr(e) ? Ae(bn(ps(e), t)) : bn(ps(e), t);
}
function tt(e, t) {
  return e.length === 1 ? c(e[0], t) : e.length === 0 ? A(t) : vr(e, t);
}
function q(e, t) {
  return e.length === 0 ? A(t) : e.length === 1 ? c(e[0], t) : bn(e, t);
}
class ms extends ue {
}
function Ar(e) {
  return e.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function zn(e, t, s) {
  return e[t] === s && e.charCodeAt(t - 1) !== 92;
}
function pe(e, t) {
  return zn(e, t, "(");
}
function ut(e, t) {
  return zn(e, t, ")");
}
function _s(e, t) {
  return zn(e, t, "|");
}
function wr(e) {
  if (!(pe(e, 0) && ut(e, e.length - 1))) return false;
  let t = 0;
  for (let s = 0; s < e.length; s++) if (pe(e, s) && (t += 1), ut(e, s) && (t -= 1), t === 0 && s !== e.length - 1) return false;
  return true;
}
function Nr(e) {
  return e.slice(1, e.length - 1);
}
function Fr(e) {
  let t = 0;
  for (let s = 0; s < e.length; s++) if (pe(e, s) && (t += 1), ut(e, s) && (t -= 1), _s(e, s) && t === 0) return true;
  return false;
}
function $r(e) {
  for (let t = 0; t < e.length; t++) if (pe(e, t)) return true;
  return false;
}
function Pr(e) {
  let [t, s] = [0, 0];
  const i = [];
  for (let l = 0; l < e.length; l++) if (pe(e, l) && (t += 1), ut(e, l) && (t -= 1), _s(e, l) && t === 0) {
    const p = e.slice(s, l);
    p.length > 0 && i.push(He(p)), s = l + 1;
  }
  const a = e.slice(s);
  return a.length > 0 && i.push(He(a)), i.length === 0 ? { type: "const", const: "" } : i.length === 1 ? i[0] : { type: "or", expr: i };
}
function kr(e) {
  function t(a, l) {
    if (!pe(a, l)) throw new ms("TemplateLiteralParser: Index must point to open parens");
    let p = 0;
    for (let T = l; T < a.length; T++) if (pe(a, T) && (p += 1), ut(a, T) && (p -= 1), p === 0) return [l, T];
    throw new ms("TemplateLiteralParser: Unclosed group parens in expression");
  }
  function s(a, l) {
    for (let p = l; p < a.length; p++) if (pe(a, p)) return [l, p];
    return [l, a.length];
  }
  const i = [];
  for (let a = 0; a < e.length; a++) if (pe(e, a)) {
    const [l, p] = t(e, a), T = e.slice(l, p + 1);
    i.push(He(T)), a = p;
  } else {
    const [l, p] = s(e, a), T = e.slice(l, p);
    T.length > 0 && i.push(He(T)), a = p - 1;
  }
  return i.length === 0 ? { type: "const", const: "" } : i.length === 1 ? i[0] : { type: "and", expr: i };
}
function He(e) {
  return wr(e) ? He(Nr(e)) : Fr(e) ? Pr(e) : $r(e) ? kr(e) : { type: "const", const: Ar(e) };
}
function Vn(e) {
  return He(e.slice(1, e.length - 1));
}
class Cr extends ue {
}
function Rr(e) {
  return e.type === "or" && e.expr.length === 2 && e.expr[0].type === "const" && e.expr[0].const === "0" && e.expr[1].type === "const" && e.expr[1].const === "[1-9][0-9]*";
}
function Lr(e) {
  return e.type === "or" && e.expr.length === 2 && e.expr[0].type === "const" && e.expr[0].const === "true" && e.expr[1].type === "const" && e.expr[1].const === "false";
}
function Mr(e) {
  return e.type === "const" && e.const === ".*";
}
function pt(e) {
  return Rr(e) || Mr(e) ? false : Lr(e) ? true : e.type === "and" ? e.expr.every((t) => pt(t)) : e.type === "or" ? e.expr.every((t) => pt(t)) : e.type === "const" ? true : (() => {
    throw new Cr("Unknown expression type");
  })();
}
function jr(e) {
  const t = Vn(e.pattern);
  return pt(t);
}
class Dr extends ue {
}
function* Qs(e) {
  if (e.length === 1) return yield* e[0];
  for (const t of e[0]) for (const s of Qs(e.slice(1))) yield `${t}${s}`;
}
function* Ur(e) {
  return yield* Qs(e.expr.map((t) => [...Zt(t)]));
}
function* Er(e) {
  for (const t of e.expr) yield* Zt(t);
}
function* qr(e) {
  return yield e.const;
}
function* Zt(e) {
  return e.type === "and" ? yield* Ur(e) : e.type === "or" ? yield* Er(e) : e.type === "const" ? yield* qr(e) : (() => {
    throw new Dr("Unknown expression");
  })();
}
function Xs(e) {
  const t = Vn(e.pattern);
  return pt(t) ? [...Zt(t)] : [];
}
function N(e, t) {
  return c({ [u]: "Literal", const: e, type: typeof e }, t);
}
function Js(e) {
  return c({ [u]: "Boolean", type: "boolean" }, e);
}
function Kn(e) {
  return c({ [u]: "BigInt", type: "bigint" }, e);
}
function Ue(e) {
  return c({ [u]: "Number", type: "number" }, e);
}
function Pe(e) {
  return c({ [u]: "String", type: "string" }, e);
}
function* Br(e) {
  const t = e.trim().replace(/"|'/g, "");
  return t === "boolean" ? yield Js() : t === "number" ? yield Ue() : t === "bigint" ? yield Kn() : t === "string" ? yield Pe() : yield (() => {
    const s = t.split("|").map((i) => N(i.trim()));
    return s.length === 0 ? A() : s.length === 1 ? s[0] : tt(s);
  })();
}
function* zr(e) {
  if (e[1] !== "{") {
    const t = N("$"), s = In(e.slice(1));
    return yield* [t, ...s];
  }
  for (let t = 2; t < e.length; t++) if (e[t] === "}") {
    const s = Br(e.slice(2, t)), i = In(e.slice(t + 1));
    return yield* [...s, ...i];
  }
  yield N(e);
}
function* In(e) {
  for (let t = 0; t < e.length; t++) if (e[t] === "$") {
    const s = N(e.slice(0, t)), i = zr(e.slice(t));
    return yield* [s, ...i];
  }
  yield N(e);
}
function Vr(e) {
  return [...In(e)];
}
class Kr extends ue {
}
function Gr(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ys(e, t) {
  return Re(e) ? e.pattern.slice(1, e.pattern.length - 1) : M(e) ? `(${e.anyOf.map((s) => Ys(s, t)).join("|")})` : et(e) ? `${t}${Ct}` : Ze(e) ? `${t}${Ct}` : zt(e) ? `${t}${Ct}` : It(e) ? `${t}${Ks}` : ke(e) ? `${t}${Gr(e.const.toString())}` : ft(e) ? `${t}${dr}` : (() => {
    throw new Kr(`Unexpected Kind '${e[u]}'`);
  })();
}
function gs(e) {
  return `^${e.map((t) => Ys(t, "")).join("")}$`;
}
function jt(e) {
  const s = Xs(e).map((i) => N(i));
  return tt(s);
}
function Zs(e, t) {
  const s = v(e) ? gs(Vr(e)) : gs(e);
  return c({ [u]: "TemplateLiteral", type: "string", pattern: s }, t);
}
function Wr(e) {
  return Xs(e).map((s) => s.toString());
}
function Hr(e) {
  const t = [];
  for (const s of e) t.push(...Oe(s));
  return t;
}
function _r(e) {
  return [e.toString()];
}
function Oe(e) {
  return [...new Set(Re(e) ? Wr(e) : M(e) ? Hr(e.anyOf) : ke(e) ? _r(e.const) : et(e) ? ["[number]"] : Ze(e) ? ["[number]"] : [])];
}
function Qr(e, t, s) {
  const i = {};
  for (const a of Object.getOwnPropertyNames(t)) i[a] = en(e, Oe(t[a]), s);
  return i;
}
function Xr(e, t, s) {
  return Qr(e, t.properties, s);
}
function Jr(e, t, s) {
  const i = Xr(e, t, s);
  return E(i);
}
function ei(e, t) {
  return e.map((s) => ti(s, t));
}
function Yr(e) {
  return e.filter((t) => !bt(t));
}
function Zr(e, t) {
  return ai(Yr(ei(e, t)));
}
function ed(e) {
  return e.some((t) => bt(t)) ? [] : e;
}
function td(e, t) {
  return tt(ed(ei(e, t)));
}
function nd(e, t) {
  return t in e ? e[t] : t === "[number]" ? tt(e) : A();
}
function sd(e, t) {
  return t === "[number]" ? e : A();
}
function id(e, t) {
  return t in e ? e[t] : A();
}
function ti(e, t) {
  return ne(e) ? Zr(e.allOf, t) : M(e) ? td(e.anyOf, t) : Le(e) ? nd(e.items ?? [], t) : Qe(e) ? sd(e.items, t) : de(e) ? id(e.properties, t) : A();
}
function ni(e, t) {
  return t.map((s) => ti(e, s));
}
function hs(e, t) {
  return tt(ni(e, t));
}
function en(e, t, s) {
  if (G(e) || G(t)) {
    const i = "Index types using Ref parameters require both Type and Key to be of TSchema";
    if (!me(e) || !me(t)) throw new ue(i);
    return k("Index", [e, t]);
  }
  return Y(t) ? Jr(e, t, s) : Ce(t) ? dd(e, t, s) : c(me(t) ? hs(e, Oe(t)) : hs(e, t), s);
}
function ad(e, t, s) {
  return { [t]: en(e, [t], _(s)) };
}
function od(e, t, s) {
  return t.reduce((i, a) => ({ ...i, ...ad(e, a, s) }), {});
}
function rd(e, t, s) {
  return od(e, t.keys, s);
}
function dd(e, t, s) {
  const i = rd(e, t, s);
  return E(i);
}
function Gn(e, t) {
  return c({ [u]: "Iterator", type: "Iterator", items: e }, t);
}
function cd(e) {
  return globalThis.Object.keys(e).filter((t) => !Se(e[t]));
}
function ld(e, t) {
  const s = cd(e), i = s.length > 0 ? { [u]: "Object", type: "object", required: s, properties: e } : { [u]: "Object", type: "object", properties: e };
  return c(i, t);
}
var L = ld;
function si(e, t) {
  return c({ [u]: "Promise", type: "Promise", item: e }, t);
}
function ud(e) {
  return c(Q(e, [yt]));
}
function pd(e) {
  return c({ ...e, [yt]: "Readonly" });
}
function md(e, t) {
  return t === false ? ud(e) : pd(e);
}
function ve(e, t) {
  const s = t ?? true;
  return Y(e) ? yd(e, s) : md(e, s);
}
function gd(e, t) {
  const s = {};
  for (const i of globalThis.Object.getOwnPropertyNames(e)) s[i] = ve(e[i], t);
  return s;
}
function hd(e, t) {
  return gd(e.properties, t);
}
function yd(e, t) {
  const s = hd(e, t);
  return E(s);
}
function nt(e, t) {
  return c(e.length > 0 ? { [u]: "Tuple", type: "array", items: e, additionalItems: false, minItems: e.length, maxItems: e.length } : { [u]: "Tuple", type: "array", minItems: e.length, maxItems: e.length }, t);
}
function ii(e, t) {
  return e in t ? Z(e, t[e]) : E(t);
}
function fd(e) {
  return { [e]: N(e) };
}
function bd(e) {
  const t = {};
  for (const s of e) t[s] = N(s);
  return t;
}
function Id(e, t) {
  return gr(t, e) ? fd(e) : bd(t);
}
function Sd(e, t) {
  const s = Id(e, t);
  return ii(e, s);
}
function ot(e, t) {
  return t.map((s) => Z(e, s));
}
function Td(e, t) {
  const s = {};
  for (const i of globalThis.Object.getOwnPropertyNames(t)) s[i] = Z(e, t[i]);
  return s;
}
function Z(e, t) {
  const s = { ...t };
  return Se(t) ? Ae(Z(e, Q(t, [he]))) : $n(t) ? ve(Z(e, Q(t, [yt]))) : Y(t) ? ii(e, t.properties) : Ce(t) ? Sd(e, t.keys) : Je(t) ? Bn(ot(e, t.parameters), Z(e, t.returns), s) : Ye(t) ? Tt(ot(e, t.parameters), Z(e, t.returns), s) : Bt(t) ? qn(Z(e, t.items), s) : Vt(t) ? Gn(Z(e, t.items), s) : ne(t) ? we(ot(e, t.allOf), s) : M(t) ? q(ot(e, t.anyOf), s) : Le(t) ? nt(ot(e, t.items ?? []), s) : de(t) ? L(Td(e, t.properties), s) : Qe(t) ? En(Z(e, t.items), s) : Kt(t) ? si(Z(e, t.item), s) : t;
}
function xd(e, t) {
  const s = {};
  for (const i of e) s[i] = Z(i, t);
  return s;
}
function Od(e, t, s) {
  const i = me(e) ? Oe(e) : e, a = t({ [u]: "MappedKey", keys: i }), l = xd(i, a);
  return L(l, s);
}
function vd(e) {
  return c(Q(e, [he]));
}
function Ad(e) {
  return c({ ...e, [he]: "Optional" });
}
function wd(e, t) {
  return t === false ? vd(e) : Ad(e);
}
function Ae(e, t) {
  const s = t ?? true;
  return Y(e) ? $d(e, s) : wd(e, s);
}
function Nd(e, t) {
  const s = {};
  for (const i of globalThis.Object.getOwnPropertyNames(e)) s[i] = Ae(e[i], t);
  return s;
}
function Fd(e, t) {
  return Nd(e.properties, t);
}
function $d(e, t) {
  const s = Fd(e, t);
  return E(s);
}
function Sn(e, t = {}) {
  const s = e.every((a) => de(a)), i = me(t.unevaluatedProperties) ? { unevaluatedProperties: t.unevaluatedProperties } : {};
  return c(t.unevaluatedProperties === false || me(t.unevaluatedProperties) || s ? { ...i, [u]: "Intersect", type: "object", allOf: e } : { ...i, [u]: "Intersect", allOf: e }, t);
}
function Pd(e) {
  return e.every((t) => Se(t));
}
function kd(e) {
  return Q(e, [he]);
}
function ys(e) {
  return e.map((t) => Se(t) ? kd(t) : t);
}
function Cd(e, t) {
  return Pd(e) ? Ae(Sn(ys(e), t)) : Sn(ys(e), t);
}
function ai(e, t = {}) {
  if (e.length === 1) return c(e[0], t);
  if (e.length === 0) return A(t);
  if (e.some((s) => Wt(s))) throw new Error("Cannot intersect transform types");
  return Cd(e, t);
}
function we(e, t) {
  if (e.length === 1) return c(e[0], t);
  if (e.length === 0) return A(t);
  if (e.some((s) => Wt(s))) throw new Error("Cannot intersect transform types");
  return Sn(e, t);
}
function xt(...e) {
  const [t, s] = typeof e[0] == "string" ? [e[0], e[1]] : [e[0].$id, e[1]];
  if (typeof t != "string") throw new ue("Ref: $ref must be a string");
  return c({ [u]: "Ref", $ref: t }, s);
}
function Rd(e, t) {
  return k("Awaited", [k(e, t)]);
}
function Ld(e) {
  return k("Awaited", [xt(e)]);
}
function Md(e) {
  return we(oi(e));
}
function jd(e) {
  return q(oi(e));
}
function Dd(e) {
  return tn(e);
}
function oi(e) {
  return e.map((t) => tn(t));
}
function tn(e, t) {
  return c(Xe(e) ? Rd(e.target, e.parameters) : ne(e) ? Md(e.allOf) : M(e) ? jd(e.anyOf) : Kt(e) ? Dd(e.item) : G(e) ? Ld(e.$ref) : e, t);
}
function ri(e) {
  const t = [];
  for (const s of e) t.push(nn(s));
  return t;
}
function Ud(e) {
  const t = ri(e);
  return Ir(t);
}
function Ed(e) {
  const t = ri(e);
  return br(t);
}
function qd(e) {
  return e.map((t, s) => s.toString());
}
function Bd(e) {
  return ["[number]"];
}
function zd(e) {
  return globalThis.Object.getOwnPropertyNames(e);
}
function Vd(e) {
  return Tn ? globalThis.Object.getOwnPropertyNames(e).map((s) => s[0] === "^" && s[s.length - 1] === "$" ? s.slice(1, s.length - 1) : s) : [];
}
function nn(e) {
  return ne(e) ? Ud(e.allOf) : M(e) ? Ed(e.anyOf) : Le(e) ? qd(e.items ?? []) : Qe(e) ? Bd(e.items) : de(e) ? zd(e.properties) : Gt(e) ? Vd(e.patternProperties) : [];
}
let Tn = false;
function fs(e) {
  Tn = true;
  const t = nn(e);
  return Tn = false, `^(${t.map((i) => `(${i})`).join("|")})$`;
}
function Kd(e, t) {
  return k("KeyOf", [k(e, t)]);
}
function Gd(e) {
  return k("KeyOf", [xt(e)]);
}
function Wd(e, t) {
  const s = nn(e), i = Hd(s), a = tt(i);
  return c(a, t);
}
function Hd(e) {
  return e.map((t) => t === "[number]" ? Ue() : N(t));
}
function Wn(e, t) {
  return Xe(e) ? Kd(e.target, e.parameters) : G(e) ? Gd(e.$ref) : Y(e) ? Xd(e, t) : Wd(e, t);
}
function _d(e, t) {
  const s = {};
  for (const i of globalThis.Object.getOwnPropertyNames(e)) s[i] = Wn(e[i], _(t));
  return s;
}
function Qd(e, t) {
  return _d(e.properties, t);
}
function Xd(e, t) {
  const s = Qd(e, t);
  return E(s);
}
function Jd(e) {
  const t = [];
  for (const s of e) t.push(...nn(s));
  return hr(t);
}
function Yd(e) {
  return e.filter((t) => !bt(t));
}
function Zd(e, t) {
  const s = [];
  for (const i of e) s.push(...ni(i, [t]));
  return Yd(s);
}
function ec(e, t) {
  const s = {};
  for (const i of t) s[i] = ai(Zd(e, i));
  return s;
}
function tc(e, t) {
  const s = Jd(e), i = ec(e, s);
  return L(i, t);
}
function di(e) {
  return c({ [u]: "Date", type: "Date" }, e);
}
function ci(e) {
  return c({ [u]: "Null", type: "null" }, e);
}
function li(e) {
  return c({ [u]: "Symbol", type: "symbol" }, e);
}
function ui(e) {
  return c({ [u]: "Undefined", type: "undefined" }, e);
}
function pi(e) {
  return c({ [u]: "Uint8Array", type: "Uint8Array" }, e);
}
function sn(e) {
  return c({ [u]: "Unknown" }, e);
}
function nc(e) {
  return e.map((t) => Hn(t, false));
}
function sc(e) {
  const t = {};
  for (const s of globalThis.Object.getOwnPropertyNames(e)) t[s] = ve(Hn(e[s], false));
  return t;
}
function kt(e, t) {
  return t === true ? e : ve(e);
}
function Hn(e, t) {
  return vo(e) || wo(e) ? kt(lt(), t) : H(e) ? ve(nt(nc(e))) : ht(e) ? pi() : wn(e) ? di() : F(e) ? kt(L(sc(e)), t) : Ao(e) ? kt(Tt([], sn()), t) : w(e) ? ui() : No(e) ? ci() : Fo(e) ? li() : As(e) ? Kn() : le(e) || gt(e) || v(e) ? N(e) : L({});
}
function ic(e, t) {
  return c(Hn(e, true), t);
}
function ac(e, t) {
  return Je(e) ? nt(e.parameters, t) : A(t);
}
function oc(e, t) {
  if (w(e)) throw new Error("Enum undefined or empty");
  const s = globalThis.Object.getOwnPropertyNames(e).filter((l) => isNaN(l)).map((l) => e[l]), a = [...new Set(s)].map((l) => N(l));
  return q(a, { ...t, [qt]: "Enum" });
}
class rc extends ue {
}
var d;
(function(e) {
  e[e.Union = 0] = "Union", e[e.True = 1] = "True", e[e.False = 2] = "False";
})(d || (d = {}));
function te(e) {
  return e === d.False ? e : d.True;
}
function st(e) {
  throw new rc(e);
}
function $(e) {
  return xe(e) || De(e) || ge(e) || oe(e) || ie(e);
}
function P(e, t) {
  return xe(t) ? hi() : De(t) ? an(e, t) : ge(t) ? Qn(e, t) : oe(t) ? Ii() : ie(t) ? _n() : st("StructuralRight");
}
function _n(e, t) {
  return d.True;
}
function dc(e, t) {
  return De(t) ? an(e, t) : ge(t) && t.anyOf.some((s) => ie(s) || oe(s)) ? d.True : ge(t) ? d.Union : oe(t) || ie(t) ? d.True : d.Union;
}
function cc(e, t) {
  return oe(e) ? d.False : ie(e) ? d.Union : xe(e) ? d.True : d.False;
}
function lc(e, t) {
  return x(t) && on(t) ? d.True : $(t) ? P(e, t) : Me(t) ? te(b(e.items, t.items)) : d.False;
}
function uc(e, t) {
  return $(t) ? P(e, t) : Mn(t) ? te(b(e.items, t.items)) : d.False;
}
function pc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : Ht(t) ? d.True : d.False;
}
function mi(e, t) {
  return Vs(e) || je(e) ? d.True : d.False;
}
function mc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : je(t) ? d.True : d.False;
}
function gc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : _t(t) ? e.parameters.length > t.parameters.length ? d.False : e.parameters.every((s, i) => te(b(t.parameters[i], s)) === d.True) ? te(b(e.returns, t.returns)) : d.False : d.False;
}
function hc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : Qt(t) ? d.True : d.False;
}
function yc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : Xt(t) ? e.parameters.length > t.parameters.length ? d.False : e.parameters.every((s, i) => te(b(t.parameters[i], s)) === d.True) ? te(b(e.returns, t.returns)) : d.False : d.False;
}
function gi(e, t) {
  return Te(e) && le(e.const) || K(e) || ye(e) ? d.True : d.False;
}
function fc(e, t) {
  return ye(t) || K(t) ? d.True : $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : d.False;
}
function an(e, t) {
  return t.allOf.every((s) => b(e, s) === d.True) ? d.True : d.False;
}
function bc(e, t) {
  return e.allOf.some((s) => b(s, t) === d.True) ? d.True : d.False;
}
function Ic(e, t) {
  return $(t) ? P(e, t) : jn(t) ? te(b(e.items, t.items)) : d.False;
}
function Sc(e, t) {
  return Te(t) && t.const === e.const ? d.True : $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : ae(t) ? bi(e) : K(t) ? yi(e) : ye(t) ? gi(e) : je(t) ? mi(e) : d.False;
}
function hi(e, t) {
  return d.False;
}
function Tc(e, t) {
  return d.True;
}
function bs(e) {
  let [t, s] = [e, 0];
  for (; Ke(t); ) t = t.not, s += 1;
  return s % 2 === 0 ? t : sn();
}
function xc(e, t) {
  return Ke(e) ? b(bs(e), t) : Ke(t) ? b(e, bs(t)) : st("Invalid fallthrough for Not");
}
function Oc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : Dn(t) ? d.True : d.False;
}
function yi(e, t) {
  return zs(e) || K(e) || ye(e) ? d.True : d.False;
}
function vc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : ye(t) || K(t) ? d.True : d.False;
}
function W(e, t) {
  return Object.getOwnPropertyNames(e.properties).length === t;
}
function Is(e) {
  return on(e);
}
function Ss(e) {
  return W(e, 0) || W(e, 1) && "description" in e.properties && ge(e.properties.description) && e.properties.description.anyOf.length === 2 && (ae(e.properties.description.anyOf[0]) && $e(e.properties.description.anyOf[1]) || ae(e.properties.description.anyOf[1]) && $e(e.properties.description.anyOf[0]));
}
function yn(e) {
  return W(e, 0);
}
function Ts(e) {
  return W(e, 0);
}
function Ac(e) {
  return W(e, 0);
}
function wc(e) {
  return W(e, 0);
}
function Nc(e) {
  return on(e);
}
function Fc(e) {
  const t = Ue();
  return W(e, 0) || W(e, 1) && "length" in e.properties && te(b(e.properties.length, t)) === d.True;
}
function $c(e) {
  return W(e, 0);
}
function on(e) {
  const t = Ue();
  return W(e, 0) || W(e, 1) && "length" in e.properties && te(b(e.properties.length, t)) === d.True;
}
function Pc(e) {
  const t = Tt([lt()], lt());
  return W(e, 0) || W(e, 1) && "then" in e.properties && te(b(e.properties.then, t)) === d.True;
}
function fi(e, t) {
  return b(e, t) === d.False || Mt(e) && !Mt(t) ? d.False : d.True;
}
function V(e, t) {
  return oe(e) ? d.False : ie(e) ? d.Union : xe(e) || Bs(e) && Is(t) || zs(e) && yn(t) || Vs(e) && Ts(t) || dt(e) && Ss(t) || Ht(e) && Ac(t) || ae(e) && Is(t) || dt(e) && Ss(t) || K(e) && yn(t) || ye(e) && yn(t) || je(e) && Ts(t) || St(e) && Nc(t) || Qt(e) && wc(t) || _t(e) && $c(t) || Xt(e) && Fc(t) ? d.True : D(e) && ae(xn(e)) ? t[qt] === "Record" ? d.True : d.False : D(e) && K(xn(e)) ? W(t, 0) ? d.True : d.False : d.False;
}
function kc(e, t) {
  return $(t) ? P(e, t) : D(t) ? se(e, t) : x(t) ? (() => {
    for (const s of Object.getOwnPropertyNames(t.properties)) {
      if (!(s in e.properties) && !Mt(t.properties[s])) return d.False;
      if (Mt(t.properties[s])) return d.True;
      if (fi(e.properties[s], t.properties[s]) === d.False) return d.False;
    }
    return d.True;
  })() : d.False;
}
function Cc(e, t) {
  return $(t) ? P(e, t) : x(t) && Pc(t) ? d.True : Un(t) ? te(b(e.item, t.item)) : d.False;
}
function xn(e) {
  return Ge in e.patternProperties ? Ue() : We in e.patternProperties ? Pe() : st("Unknown record key pattern");
}
function On(e) {
  return Ge in e.patternProperties ? e.patternProperties[Ge] : We in e.patternProperties ? e.patternProperties[We] : st("Unable to get record value schema");
}
function se(e, t) {
  const [s, i] = [xn(t), On(t)];
  return Bs(e) && K(s) && te(b(e, i)) === d.True ? d.True : St(e) && K(s) || ae(e) && K(s) || Me(e) && K(s) ? b(e, i) : x(e) ? (() => {
    for (const a of Object.getOwnPropertyNames(e.properties)) if (fi(i, e.properties[a]) === d.False) return d.False;
    return d.True;
  })() : d.False;
}
function Rc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? b(On(e), On(t)) : d.False;
}
function Lc(e, t) {
  const s = rt(e) ? Pe() : e, i = rt(t) ? Pe() : t;
  return b(s, i);
}
function bi(e, t) {
  return Te(e) && v(e.const) || ae(e) ? d.True : d.False;
}
function Mc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : ae(t) ? d.True : d.False;
}
function jc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : dt(t) ? d.True : d.False;
}
function Dc(e, t) {
  return ct(e) ? b(jt(e), t) : ct(t) ? b(e, jt(t)) : st("Invalid fallthrough for TemplateLiteral");
}
function Uc(e, t) {
  return Me(t) && e.items !== void 0 && e.items.every((s) => b(s, t.items) === d.True);
}
function Ec(e, t) {
  return xe(e) ? d.True : oe(e) ? d.False : ie(e) ? d.Union : d.False;
}
function qc(e, t) {
  return $(t) ? P(e, t) : x(t) && on(t) || Me(t) && Uc(e, t) ? d.True : Jt(t) ? w(e.items) && !w(t.items) || !w(e.items) && w(t.items) ? d.False : w(e.items) && !w(t.items) || e.items.every((s, i) => b(s, t.items[i]) === d.True) ? d.True : d.False : d.False;
}
function Bc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : St(t) ? d.True : d.False;
}
function zc(e, t) {
  return $(t) ? P(e, t) : x(t) ? V(e, t) : D(t) ? se(e, t) : Yt(t) ? Gc(e) : $e(t) ? d.True : d.False;
}
function Qn(e, t) {
  return t.anyOf.some((s) => b(e, s) === d.True) ? d.True : d.False;
}
function Vc(e, t) {
  return e.anyOf.every((s) => b(s, t) === d.True) ? d.True : d.False;
}
function Ii(e, t) {
  return d.True;
}
function Kc(e, t) {
  return xe(t) ? hi() : De(t) ? an(e, t) : ge(t) ? Qn(e, t) : ie(t) ? _n() : ae(t) ? bi(e) : K(t) ? yi(e) : ye(t) ? gi(e) : je(t) ? mi(e) : Me(t) ? cc(e) : Jt(t) ? Ec(e) : x(t) ? V(e, t) : oe(t) ? d.True : d.False;
}
function Gc(e, t) {
  return $e(e) || $e(e) ? d.True : d.False;
}
function Wc(e, t) {
  return De(t) ? an(e, t) : ge(t) ? Qn(e, t) : oe(t) ? Ii() : ie(t) ? _n() : x(t) ? V(e, t) : Yt(t) ? d.True : d.False;
}
function b(e, t) {
  return ct(e) || ct(t) ? Dc(e, t) : rt(e) || rt(t) ? Lc(e, t) : Ke(e) || Ke(t) ? xc(e, t) : ie(e) ? dc(e, t) : Me(e) ? lc(e, t) : Ht(e) ? pc(e, t) : je(e) ? mc(e, t) : Mn(e) ? uc(e, t) : _t(e) ? gc(e, t) : Qt(e) ? hc(e, t) : Xt(e) ? yc(e, t) : ye(e) ? fc(e, t) : De(e) ? bc(e, t) : jn(e) ? Ic(e, t) : Te(e) ? Sc(e, t) : xe(e) ? Tc() : Dn(e) ? Oc(e, t) : K(e) ? vc(e, t) : x(e) ? kc(e, t) : D(e) ? Rc(e, t) : ae(e) ? Mc(e, t) : dt(e) ? jc(e, t) : Jt(e) ? qc(e, t) : Un(e) ? Cc(e, t) : St(e) ? Bc(e, t) : $e(e) ? zc(e, t) : ge(e) ? Vc(e, t) : oe(e) ? Kc(e, t) : Yt(e) ? Wc(e, t) : st(`Unknown left type operand '${e[u]}'`);
}
function Ot(e, t) {
  return b(e, t);
}
function Hc(e, t, s, i, a) {
  const l = {};
  for (const p of globalThis.Object.getOwnPropertyNames(e)) l[p] = Xn(e[p], t, s, i, _(a));
  return l;
}
function _c(e, t, s, i, a) {
  return Hc(e.properties, t, s, i, a);
}
function Qc(e, t, s, i, a) {
  const l = _c(e, t, s, i, a);
  return E(l);
}
function Xc(e, t, s, i) {
  const a = Ot(e, t);
  return a === d.Union ? q([s, i]) : a === d.True ? s : i;
}
function Xn(e, t, s, i, a) {
  return Y(e) ? Qc(e, t, s, i, a) : Ce(e) ? c(el(e, t, s, i, a)) : c(Xc(e, t, s, i), a);
}
function Jc(e, t, s, i, a) {
  return { [e]: Xn(N(e), t, s, i, _(a)) };
}
function Yc(e, t, s, i, a) {
  return e.reduce((l, p) => ({ ...l, ...Jc(p, t, s, i, a) }), {});
}
function Zc(e, t, s, i, a) {
  return Yc(e.keys, t, s, i, a);
}
function el(e, t, s, i, a) {
  const l = Zc(e, t, s, i, a);
  return E(l);
}
function tl(e) {
  return e.allOf.every((t) => rn(t));
}
function nl(e) {
  return e.anyOf.some((t) => rn(t));
}
function sl(e) {
  return !rn(e.not);
}
function rn(e) {
  return e[u] === "Intersect" ? tl(e) : e[u] === "Union" ? nl(e) : e[u] === "Not" ? sl(e) : e[u] === "Undefined";
}
function il(e, t) {
  return Jn(jt(e), t);
}
function al(e, t) {
  const s = e.filter((i) => Ot(i, t) === d.False);
  return s.length === 1 ? s[0] : q(s);
}
function Jn(e, t, s = {}) {
  return Re(e) ? c(il(e, t), s) : Y(e) ? c(dl(e, t), s) : c(M(e) ? al(e.anyOf, t) : Ot(e, t) !== d.False ? A() : e, s);
}
function ol(e, t) {
  const s = {};
  for (const i of globalThis.Object.getOwnPropertyNames(e)) s[i] = Jn(e[i], t);
  return s;
}
function rl(e, t) {
  return ol(e.properties, t);
}
function dl(e, t) {
  const s = rl(e, t);
  return E(s);
}
function cl(e, t) {
  return Yn(jt(e), t);
}
function ll(e, t) {
  const s = e.filter((i) => Ot(i, t) !== d.False);
  return s.length === 1 ? s[0] : q(s);
}
function Yn(e, t, s) {
  return Re(e) ? c(cl(e, t), s) : Y(e) ? c(ml(e, t), s) : c(M(e) ? ll(e.anyOf, t) : Ot(e, t) !== d.False ? e : A(), s);
}
function ul(e, t) {
  const s = {};
  for (const i of globalThis.Object.getOwnPropertyNames(e)) s[i] = Yn(e[i], t);
  return s;
}
function pl(e, t) {
  return ul(e.properties, t);
}
function ml(e, t) {
  const s = pl(e, t);
  return E(s);
}
function gl(e, t) {
  return Je(e) ? c(e.returns, t) : A(t);
}
function Si(e) {
  return ve(Ae(e));
}
function Ee(e, t, s) {
  return c({ [u]: "Record", type: "object", patternProperties: { [e]: t } }, s);
}
function Zn(e, t, s) {
  const i = {};
  for (const a of e) i[a] = t;
  return L(i, { ...s, [qt]: "Record" });
}
function hl(e, t, s) {
  return jr(e) ? Zn(Oe(e), t, s) : Ee(e.pattern, t, s);
}
function yl(e, t, s) {
  return Zn(Oe(q(e)), t, s);
}
function fl(e, t, s) {
  return Zn([e.toString()], t, s);
}
function bl(e, t, s) {
  return Ee(e.source, t, s);
}
function Il(e, t, s) {
  const i = w(e.pattern) ? We : e.pattern;
  return Ee(i, t, s);
}
function Sl(e, t, s) {
  return Ee(We, t, s);
}
function Tl(e, t, s) {
  return Ee(lr, t, s);
}
function xl(e, t, s) {
  return L({ true: t, false: t }, s);
}
function Ol(e, t, s) {
  return Ee(Ge, t, s);
}
function vl(e, t, s) {
  return Ee(Ge, t, s);
}
function Ti(e, t, s = {}) {
  return M(e) ? yl(e.anyOf, t, s) : Re(e) ? hl(e, t, s) : ke(e) ? fl(e.const, t, s) : ft(e) ? xl(e, t, s) : Ze(e) ? Ol(e, t, s) : et(e) ? vl(e, t, s) : js(e) ? bl(e, t, s) : It(e) ? Il(e, t, s) : Rs(e) ? Sl(e, t, s) : bt(e) ? Tl(e, t, s) : A(s);
}
function es(e) {
  return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0];
}
function Al(e) {
  const t = es(e);
  return t === We ? Pe() : t === Ge ? Ue() : Pe({ pattern: t });
}
function xi(e) {
  return e.patternProperties[es(e)];
}
function wl(e, t) {
  return t.parameters = vt(e, t.parameters), t.returns = re(e, t.returns), t;
}
function Nl(e, t) {
  return t.parameters = vt(e, t.parameters), t.returns = re(e, t.returns), t;
}
function Fl(e, t) {
  return t.allOf = vt(e, t.allOf), t;
}
function $l(e, t) {
  return t.anyOf = vt(e, t.anyOf), t;
}
function Pl(e, t) {
  return w(t.items) || (t.items = vt(e, t.items)), t;
}
function kl(e, t) {
  return t.items = re(e, t.items), t;
}
function Cl(e, t) {
  return t.items = re(e, t.items), t;
}
function Rl(e, t) {
  return t.items = re(e, t.items), t;
}
function Ll(e, t) {
  return t.item = re(e, t.item), t;
}
function Ml(e, t) {
  const s = El(e, t.properties);
  return { ...t, ...L(s) };
}
function jl(e, t) {
  const s = re(e, Al(t)), i = re(e, xi(t)), a = Ti(s, i);
  return { ...t, ...a };
}
function Dl(e, t) {
  return t.index in e ? e[t.index] : sn();
}
function Ul(e, t) {
  const s = $n(t), i = Se(t), a = re(e, t);
  return s && i ? Si(a) : s && !i ? ve(a) : !s && i ? Ae(a) : a;
}
function El(e, t) {
  return globalThis.Object.getOwnPropertyNames(t).reduce((s, i) => ({ ...s, [i]: Ul(e, t[i]) }), {});
}
function vt(e, t) {
  return t.map((s) => re(e, s));
}
function re(e, t) {
  return Je(t) ? wl(e, t) : Ye(t) ? Nl(e, t) : ne(t) ? Fl(e, t) : M(t) ? $l(e, t) : Le(t) ? Pl(e, t) : Qe(t) ? kl(e, t) : Bt(t) ? Cl(e, t) : Vt(t) ? Rl(e, t) : Kt(t) ? Ll(e, t) : de(t) ? Ml(e, t) : Gt(t) ? jl(e, t) : Ls(t) ? Dl(e, t) : t;
}
function ql(e, t) {
  return re(t, Nn(e));
}
function Bl(e) {
  return c({ [u]: "Integer", type: "integer" }, e);
}
function zl(e, t, s) {
  return { [e]: it(N(e), t, _(s)) };
}
function Vl(e, t, s) {
  return e.reduce((a, l) => ({ ...a, ...zl(l, t, s) }), {});
}
function Kl(e, t, s) {
  return Vl(e.keys, t, s);
}
function Gl(e, t, s) {
  const i = Kl(e, t, s);
  return E(i);
}
function Wl(e) {
  const [t, s] = [e.slice(0, 1), e.slice(1)];
  return [t.toLowerCase(), s].join("");
}
function Hl(e) {
  const [t, s] = [e.slice(0, 1), e.slice(1)];
  return [t.toUpperCase(), s].join("");
}
function _l(e) {
  return e.toUpperCase();
}
function Ql(e) {
  return e.toLowerCase();
}
function Xl(e, t, s) {
  const i = Vn(e.pattern);
  if (!pt(i)) return { ...e, pattern: Oi(e.pattern, t) };
  const p = [...Zt(i)].map((Fe) => N(Fe)), T = vi(p, t), gn = q(T);
  return Zs([gn], s);
}
function Oi(e, t) {
  return typeof e == "string" ? t === "Uncapitalize" ? Wl(e) : t === "Capitalize" ? Hl(e) : t === "Uppercase" ? _l(e) : t === "Lowercase" ? Ql(e) : e : e.toString();
}
function vi(e, t) {
  return e.map((s) => it(s, t));
}
function it(e, t, s = {}) {
  return Ce(e) ? Gl(e, t, s) : Re(e) ? Xl(e, t, s) : M(e) ? q(vi(e.anyOf, t), s) : ke(e) ? N(Oi(e.const, t), s) : c(e, s);
}
function Jl(e, t = {}) {
  return it(e, "Capitalize", t);
}
function Yl(e, t = {}) {
  return it(e, "Lowercase", t);
}
function Zl(e, t = {}) {
  return it(e, "Uncapitalize", t);
}
function eu(e, t = {}) {
  return it(e, "Uppercase", t);
}
function tu(e, t, s) {
  const i = {};
  for (const a of globalThis.Object.getOwnPropertyNames(e)) i[a] = dn(e[a], t, _(s));
  return i;
}
function nu(e, t, s) {
  return tu(e.properties, t, s);
}
function su(e, t, s) {
  const i = nu(e, t, s);
  return E(i);
}
function iu(e, t) {
  return e.map((s) => ts(s, t));
}
function au(e, t) {
  return e.map((s) => ts(s, t));
}
function ou(e, t) {
  const { [t]: s, ...i } = e;
  return i;
}
function ru(e, t) {
  return t.reduce((s, i) => ou(s, i), e);
}
function du(e, t, s) {
  const i = Q(e, [ee, "$id", "required", "properties"]), a = ru(s, t);
  return L(a, i);
}
function cu(e) {
  const t = e.reduce((s, i) => Ms(i) ? [...s, N(i)] : s, []);
  return q(t);
}
function ts(e, t) {
  return ne(e) ? we(iu(e.allOf, t)) : M(e) ? q(au(e.anyOf, t)) : de(e) ? du(e, t, e.properties) : L({});
}
function dn(e, t, s) {
  const i = H(t) ? cu(t) : t, a = me(t) ? Oe(t) : t, l = G(e), p = G(t);
  return Y(e) ? su(e, a, s) : Ce(t) ? mu(e, t, s) : l && p ? k("Omit", [e, i], s) : !l && p ? k("Omit", [e, i], s) : l && !p ? k("Omit", [e, i], s) : c({ ...ts(e, a), ...s });
}
function lu(e, t, s) {
  return { [t]: dn(e, [t], _(s)) };
}
function uu(e, t, s) {
  return t.reduce((i, a) => ({ ...i, ...lu(e, a, s) }), {});
}
function pu(e, t, s) {
  return uu(e, t.keys, s);
}
function mu(e, t, s) {
  const i = pu(e, t, s);
  return E(i);
}
function gu(e, t, s) {
  const i = {};
  for (const a of globalThis.Object.getOwnPropertyNames(e)) i[a] = cn(e[a], t, _(s));
  return i;
}
function hu(e, t, s) {
  return gu(e.properties, t, s);
}
function yu(e, t, s) {
  const i = hu(e, t, s);
  return E(i);
}
function fu(e, t) {
  return e.map((s) => ns(s, t));
}
function bu(e, t) {
  return e.map((s) => ns(s, t));
}
function Iu(e, t) {
  const s = {};
  for (const i of t) i in e && (s[i] = e[i]);
  return s;
}
function Su(e, t, s) {
  const i = Q(e, [ee, "$id", "required", "properties"]), a = Iu(s, t);
  return L(a, i);
}
function Tu(e) {
  const t = e.reduce((s, i) => Ms(i) ? [...s, N(i)] : s, []);
  return q(t);
}
function ns(e, t) {
  return ne(e) ? we(fu(e.allOf, t)) : M(e) ? q(bu(e.anyOf, t)) : de(e) ? Su(e, t, e.properties) : L({});
}
function cn(e, t, s) {
  const i = H(t) ? Tu(t) : t, a = me(t) ? Oe(t) : t, l = G(e), p = G(t);
  return Y(e) ? yu(e, a, s) : Ce(t) ? Au(e, t, s) : l && p ? k("Pick", [e, i], s) : !l && p ? k("Pick", [e, i], s) : l && !p ? k("Pick", [e, i], s) : c({ ...ns(e, a), ...s });
}
function xu(e, t, s) {
  return { [t]: cn(e, [t], _(s)) };
}
function Ou(e, t, s) {
  return t.reduce((i, a) => ({ ...i, ...xu(e, a, s) }), {});
}
function vu(e, t, s) {
  return Ou(e, t.keys, s);
}
function Au(e, t, s) {
  const i = vu(e, t, s);
  return E(i);
}
function wu(e, t) {
  return k("Partial", [k(e, t)]);
}
function Nu(e) {
  return k("Partial", [xt(e)]);
}
function Fu(e) {
  const t = {};
  for (const s of globalThis.Object.getOwnPropertyNames(e)) t[s] = Ae(e[s]);
  return t;
}
function $u(e, t) {
  const s = Q(e, [ee, "$id", "required", "properties"]), i = Fu(t);
  return L(i, s);
}
function xs(e) {
  return e.map((t) => Ai(t));
}
function Ai(e) {
  return Xe(e) ? wu(e.target, e.parameters) : G(e) ? Nu(e.$ref) : ne(e) ? we(xs(e.allOf)) : M(e) ? q(xs(e.anyOf)) : de(e) ? $u(e, e.properties) : zt(e) || ft(e) || Ze(e) || ke(e) || Pn(e) || et(e) || It(e) || kn(e) || Cn(e) ? e : L({});
}
function ss(e, t) {
  return Y(e) ? Cu(e, t) : c({ ...Ai(e), ...t });
}
function Pu(e, t) {
  const s = {};
  for (const i of globalThis.Object.getOwnPropertyNames(e)) s[i] = ss(e[i], _(t));
  return s;
}
function ku(e, t) {
  return Pu(e.properties, t);
}
function Cu(e, t) {
  const s = ku(e, t);
  return E(s);
}
function Ru(e, t) {
  return k("Required", [k(e, t)]);
}
function Lu(e) {
  return k("Required", [xt(e)]);
}
function Mu(e) {
  const t = {};
  for (const s of globalThis.Object.getOwnPropertyNames(e)) t[s] = Q(e[s], [he]);
  return t;
}
function ju(e, t) {
  const s = Q(e, [ee, "$id", "required", "properties"]), i = Mu(t);
  return L(i, s);
}
function Os(e) {
  return e.map((t) => wi(t));
}
function wi(e) {
  return Xe(e) ? Ru(e.target, e.parameters) : G(e) ? Lu(e.$ref) : ne(e) ? we(Os(e.allOf)) : M(e) ? q(Os(e.anyOf)) : de(e) ? ju(e, e.properties) : zt(e) || ft(e) || Ze(e) || ke(e) || Pn(e) || et(e) || It(e) || kn(e) || Cn(e) ? e : L({});
}
function is(e, t) {
  return Y(e) ? Eu(e, t) : c({ ...wi(e), ...t });
}
function Du(e, t) {
  const s = {};
  for (const i of globalThis.Object.getOwnPropertyNames(e)) s[i] = is(e[i], t);
  return s;
}
function Uu(e, t) {
  return Du(e.properties, t);
}
function Eu(e, t) {
  const s = Uu(e, t);
  return E(s);
}
function qu(e, t) {
  return t.map((s) => G(s) ? as(e, s.$ref) : X(e, s));
}
function as(e, t) {
  return t in e ? G(e[t]) ? as(e, e[t].$ref) : X(e, e[t]) : A();
}
function Bu(e) {
  return tn(e[0]);
}
function zu(e) {
  return en(e[0], e[1]);
}
function Vu(e) {
  return Wn(e[0]);
}
function Ku(e) {
  return ss(e[0]);
}
function Gu(e) {
  return dn(e[0], e[1]);
}
function Wu(e) {
  return cn(e[0], e[1]);
}
function Hu(e) {
  return is(e[0]);
}
function _u(e, t, s) {
  const i = qu(e, s);
  return t === "Awaited" ? Bu(i) : t === "Index" ? zu(i) : t === "KeyOf" ? Vu(i) : t === "Partial" ? Ku(i) : t === "Omit" ? Gu(i) : t === "Pick" ? Wu(i) : t === "Required" ? Hu(i) : A();
}
function Qu(e, t) {
  return En(X(e, t));
}
function Xu(e, t) {
  return qn(X(e, t));
}
function Ju(e, t, s) {
  return Bn(At(e, t), X(e, s));
}
function Yu(e, t, s) {
  return Tt(At(e, t), X(e, s));
}
function Zu(e, t) {
  return we(At(e, t));
}
function ep(e, t) {
  return Gn(X(e, t));
}
function tp(e, t) {
  return L(globalThis.Object.keys(t).reduce((s, i) => ({ ...s, [i]: X(e, t[i]) }), {}));
}
function np(e, t) {
  const [s, i] = [X(e, xi(t)), es(t)], a = Nn(t);
  return a.patternProperties[i] = s, a;
}
function sp(e, t) {
  return G(t) ? { ...as(e, t.$ref), [ee]: t[ee] } : t;
}
function ip(e, t) {
  return nt(At(e, t));
}
function ap(e, t) {
  return q(At(e, t));
}
function At(e, t) {
  return t.map((s) => X(e, s));
}
function X(e, t) {
  return Se(t) ? c(X(e, Q(t, [he])), t) : $n(t) ? c(X(e, Q(t, [yt])), t) : Wt(t) ? c(sp(e, t), t) : Qe(t) ? c(Qu(e, t.items), t) : Bt(t) ? c(Xu(e, t.items), t) : Xe(t) ? c(_u(e, t.target, t.parameters)) : Je(t) ? c(Ju(e, t.parameters, t.returns), t) : Ye(t) ? c(Yu(e, t.parameters, t.returns), t) : ne(t) ? c(Zu(e, t.allOf), t) : Vt(t) ? c(ep(e, t.items), t) : de(t) ? c(tp(e, t.properties), t) : Gt(t) ? c(np(e, t)) : Le(t) ? c(ip(e, t.items || []), t) : M(t) ? c(ap(e, t.anyOf), t) : t;
}
function op(e, t) {
  return t in e ? X(e, e[t]) : A();
}
function rp(e) {
  return globalThis.Object.getOwnPropertyNames(e).reduce((t, s) => ({ ...t, [s]: op(e, s) }), {});
}
class dp {
  constructor(t) {
    const s = rp(t), i = this.WithIdentifiers(s);
    this.$defs = i;
  }
  Import(t, s) {
    const i = { ...this.$defs, [t]: c(this.$defs[t], s) };
    return c({ [u]: "Import", $defs: i, $ref: t });
  }
  WithIdentifiers(t) {
    return globalThis.Object.getOwnPropertyNames(t).reduce((s, i) => ({ ...s, [i]: { ...t[i], $id: i } }), {});
  }
}
function cp(e) {
  return new dp(e);
}
function lp(e, t) {
  return c({ [u]: "Not", not: e }, t);
}
function up(e, t) {
  return Ye(e) ? nt(e.parameters, t) : A();
}
let pp = 0;
function mp(e, t = {}) {
  w(t.$id) && (t.$id = `T${pp++}`);
  const s = Nn(e({ [u]: "This", $ref: `${t.$id}` }));
  return s.$id = t.$id, c({ [qt]: "Recursive", ...s }, t);
}
function gp(e, t) {
  const s = v(e) ? new globalThis.RegExp(e) : e;
  return c({ [u]: "RegExp", type: "RegExp", source: s.source, flags: s.flags }, t);
}
function hp(e) {
  return ne(e) ? e.allOf : M(e) ? e.anyOf : Le(e) ? e.items ?? [] : [];
}
function yp(e) {
  return hp(e);
}
function fp(e, t) {
  return Ye(e) ? c(e.returns, t) : A(t);
}
class bp {
  constructor(t) {
    this.schema = t;
  }
  Decode(t) {
    return new Ip(this.schema, t);
  }
}
class Ip {
  constructor(t, s) {
    this.schema = t, this.decode = s;
  }
  EncodeTransform(t, s) {
    const l = { Encode: (p) => s[ee].Encode(t(p)), Decode: (p) => this.decode(s[ee].Decode(p)) };
    return { ...s, [ee]: l };
  }
  EncodeSchema(t, s) {
    const i = { Decode: this.decode, Encode: t };
    return { ...s, [ee]: i };
  }
  Encode(t) {
    return Wt(this.schema) ? this.EncodeTransform(t, this.schema) : this.EncodeSchema(t, this.schema);
  }
}
function Sp(e) {
  return new bp(e);
}
function Tp(e = {}) {
  return c({ [u]: e[u] ?? "Unsafe" }, e);
}
function xp(e) {
  return c({ [u]: "Void", type: "void" }, e);
}
const Op = Object.freeze(Object.defineProperty({ __proto__: null, Any: lt, Argument: Sr, Array: En, AsyncIterator: qn, Awaited: tn, BigInt: Kn, Boolean: Js, Capitalize: Jl, Composite: tc, Const: ic, Constructor: Bn, ConstructorParameters: ac, Date: di, Enum: oc, Exclude: Jn, Extends: Xn, Extract: Yn, Function: Tt, Index: en, InstanceType: gl, Instantiate: ql, Integer: Bl, Intersect: we, Iterator: Gn, KeyOf: Wn, Literal: N, Lowercase: Yl, Mapped: Od, Module: cp, Never: A, Not: lp, Null: ci, Number: Ue, Object: L, Omit: dn, Optional: Ae, Parameters: up, Partial: ss, Pick: cn, Promise: si, Readonly: ve, ReadonlyOptional: Si, Record: Ti, Recursive: mp, Ref: xt, RegExp: gp, Required: is, Rest: yp, ReturnType: fp, String: Pe, Symbol: li, TemplateLiteral: Zs, Transform: Sp, Tuple: nt, Uint8Array: pi, Uncapitalize: Zl, Undefined: ui, Union: q, Unknown: sn, Unsafe: Tp, Uppercase: eu, Void: xp }, Symbol.toStringTag, { value: "Module" })), n = Op;
class vp extends ue {
  constructor(t) {
    super(`Unable to dereference schema with $id '${t.$ref}'`), this.schema = t;
  }
}
function Ap(e, t) {
  const s = t.find((i) => i.$id === e.$ref);
  if (s === void 0) throw new vp(e);
  return os(s, t);
}
function wp(e, t) {
  return !Et(e.$id) || t.some((s) => s.$id === e.$id) || t.push(e), t;
}
function os(e, t) {
  return e[u] === "This" || e[u] === "Ref" ? Ap(e, t) : e;
}
class Np extends ue {
  constructor(t) {
    super("Unable to hash value"), this.value = t;
  }
}
var J;
(function(e) {
  e[e.Undefined = 0] = "Undefined", e[e.Null = 1] = "Null", e[e.Boolean = 2] = "Boolean", e[e.Number = 3] = "Number", e[e.String = 4] = "String", e[e.Object = 5] = "Object", e[e.Array = 6] = "Array", e[e.Date = 7] = "Date", e[e.Uint8Array = 8] = "Uint8Array", e[e.Symbol = 9] = "Symbol", e[e.BigInt = 10] = "BigInt";
})(J || (J = {}));
let Ve = BigInt("14695981039346656037");
const [Fp, $p] = [BigInt("1099511628211"), BigInt("18446744073709551616")], Pp = Array.from({ length: 256 }).map((e, t) => BigInt(t)), Ni = new Float64Array(1), Fi = new DataView(Ni.buffer), $i = new Uint8Array(Ni.buffer);
function* kp(e) {
  const t = e === 0 ? 1 : Math.ceil(Math.floor(Math.log2(e) + 1) / 8);
  for (let s = 0; s < t; s++) yield e >> 8 * (t - 1 - s) & 255;
}
function Cp(e) {
  z(J.Array);
  for (const t of e) _e(t);
}
function Rp(e) {
  z(J.Boolean), z(e ? 1 : 0);
}
function Lp(e) {
  z(J.BigInt), Fi.setBigInt64(0, e);
  for (const t of $i) z(t);
}
function Mp(e) {
  z(J.Date), _e(e.getTime());
}
function jp(e) {
  z(J.Null);
}
function Dp(e) {
  z(J.Number), Fi.setFloat64(0, e);
  for (const t of $i) z(t);
}
function Up(e) {
  z(J.Object);
  for (const t of globalThis.Object.getOwnPropertyNames(e).sort()) _e(t), _e(e[t]);
}
function Ep(e) {
  z(J.String);
  for (let t = 0; t < e.length; t++) for (const s of kp(e.charCodeAt(t))) z(s);
}
function qp(e) {
  z(J.Symbol), _e(e.description);
}
function Bp(e) {
  z(J.Uint8Array);
  for (let t = 0; t < e.length; t++) z(e[t]);
}
function zp(e) {
  return z(J.Undefined);
}
function _e(e) {
  if (Ut(e)) return Cp(e);
  if (Ps(e)) return Rp(e);
  if (ks(e)) return Lp(e);
  if (Ns(e)) return Mp(e);
  if ($s(e)) return jp();
  if (ze(e)) return Dp(e);
  if (Dt(e)) return Up(e);
  if (Et(e)) return Ep(e);
  if (Cs(e)) return qp(e);
  if (Fs(e)) return Bp(e);
  if (Fn(e)) return zp();
  throw new Np(e);
}
function z(e) {
  Ve = Ve ^ Pp[e], Ve = Ve * Fp % $p;
}
function Vp(e) {
  return Ve = BigInt("14695981039346656037"), _e(e), Ve;
}
class Kp extends ue {
  constructor(t) {
    super("Unknown type"), this.schema = t;
  }
}
function Gp(e) {
  return e[u] === "Any" || e[u] === "Unknown";
}
function h(e) {
  return e !== void 0;
}
function Wp(e, t, s) {
  return true;
}
function Hp(e, t, s) {
  return true;
}
function _p(e, t, s) {
  if (!Ut(s) || h(e.minItems) && !(s.length >= e.minItems) || h(e.maxItems) && !(s.length <= e.maxItems)) return false;
  for (const l of s) if (!R(e.items, t, l)) return false;
  if (e.uniqueItems === true && !function() {
    const l = /* @__PURE__ */ new Set();
    for (const p of s) {
      const T = Vp(p);
      if (l.has(T)) return false;
      l.add(T);
    }
    return true;
  }()) return false;
  if (!(h(e.contains) || ze(e.minContains) || ze(e.maxContains))) return true;
  const i = h(e.contains) ? e.contains : A(), a = s.reduce((l, p) => R(i, t, p) ? l + 1 : l, 0);
  return !(a === 0 || ze(e.minContains) && a < e.minContains || ze(e.maxContains) && a > e.maxContains);
}
function Qp(e, t, s) {
  return Lo(s);
}
function Xp(e, t, s) {
  return !(!ks(s) || h(e.exclusiveMaximum) && !(s < e.exclusiveMaximum) || h(e.exclusiveMinimum) && !(s > e.exclusiveMinimum) || h(e.maximum) && !(s <= e.maximum) || h(e.minimum) && !(s >= e.minimum) || h(e.multipleOf) && s % e.multipleOf !== BigInt(0));
}
function Jp(e, t, s) {
  return Ps(s);
}
function Yp(e, t, s) {
  return R(e.returns, t, s.prototype);
}
function Zp(e, t, s) {
  return !(!Ns(s) || h(e.exclusiveMaximumTimestamp) && !(s.getTime() < e.exclusiveMaximumTimestamp) || h(e.exclusiveMinimumTimestamp) && !(s.getTime() > e.exclusiveMinimumTimestamp) || h(e.maximumTimestamp) && !(s.getTime() <= e.maximumTimestamp) || h(e.minimumTimestamp) && !(s.getTime() >= e.minimumTimestamp) || h(e.multipleOfTimestamp) && s.getTime() % e.multipleOfTimestamp !== 0);
}
function em(e, t, s) {
  return Uo(s);
}
function tm(e, t, s) {
  const i = globalThis.Object.values(e.$defs), a = e.$defs[e.$ref];
  return R(a, [...t, ...i], s);
}
function nm(e, t, s) {
  return !(!Do(s) || h(e.exclusiveMaximum) && !(s < e.exclusiveMaximum) || h(e.exclusiveMinimum) && !(s > e.exclusiveMinimum) || h(e.maximum) && !(s <= e.maximum) || h(e.minimum) && !(s >= e.minimum) || h(e.multipleOf) && s % e.multipleOf !== 0);
}
function sm(e, t, s) {
  const i = e.allOf.every((a) => R(a, t, s));
  if (e.unevaluatedProperties === false) {
    const a = new RegExp(fs(e)), l = Object.getOwnPropertyNames(s).every((p) => a.test(p));
    return i && l;
  } else if (me(e.unevaluatedProperties)) {
    const a = new RegExp(fs(e)), l = Object.getOwnPropertyNames(s).every((p) => a.test(p) || R(e.unevaluatedProperties, t, s[p]));
    return i && l;
  } else return i;
}
function im(e, t, s) {
  return Mo(s);
}
function am(e, t, s) {
  return s === e.const;
}
function om(e, t, s) {
  return false;
}
function rm(e, t, s) {
  return !R(e.not, t, s);
}
function dm(e, t, s) {
  return $s(s);
}
function cm(e, t, s) {
  return !(!Ie.IsNumberLike(s) || h(e.exclusiveMaximum) && !(s < e.exclusiveMaximum) || h(e.exclusiveMinimum) && !(s > e.exclusiveMinimum) || h(e.minimum) && !(s >= e.minimum) || h(e.maximum) && !(s <= e.maximum) || h(e.multipleOf) && s % e.multipleOf !== 0);
}
function lm(e, t, s) {
  if (!Ie.IsObjectLike(s) || h(e.minProperties) && !(Object.getOwnPropertyNames(s).length >= e.minProperties) || h(e.maxProperties) && !(Object.getOwnPropertyNames(s).length <= e.maxProperties)) return false;
  const i = Object.getOwnPropertyNames(e.properties);
  for (const a of i) {
    const l = e.properties[a];
    if (e.required && e.required.includes(a)) {
      if (!R(l, t, s[a]) || (rn(l) || Gp(l)) && !(a in s)) return false;
    } else if (Ie.IsExactOptionalProperty(s, a) && !R(l, t, s[a])) return false;
  }
  if (e.additionalProperties === false) {
    const a = Object.getOwnPropertyNames(s);
    return e.required && e.required.length === i.length && a.length === i.length ? true : a.every((l) => i.includes(l));
  } else return typeof e.additionalProperties == "object" ? Object.getOwnPropertyNames(s).every((l) => i.includes(l) || R(e.additionalProperties, t, s[l])) : true;
}
function um(e, t, s) {
  return jo(s);
}
function pm(e, t, s) {
  if (!Ie.IsRecordLike(s) || h(e.minProperties) && !(Object.getOwnPropertyNames(s).length >= e.minProperties) || h(e.maxProperties) && !(Object.getOwnPropertyNames(s).length <= e.maxProperties)) return false;
  const [i, a] = Object.entries(e.patternProperties)[0], l = new RegExp(i), p = Object.entries(s).every(([Fe, hn]) => l.test(Fe) ? R(a, t, hn) : true), T = typeof e.additionalProperties == "object" ? Object.entries(s).every(([Fe, hn]) => l.test(Fe) ? true : R(e.additionalProperties, t, hn)) : true, gn = e.additionalProperties === false ? Object.getOwnPropertyNames(s).every((Fe) => l.test(Fe)) : true;
  return p && T && gn;
}
function mm(e, t, s) {
  return R(os(e, t), t, s);
}
function gm(e, t, s) {
  const i = new RegExp(e.source, e.flags);
  return h(e.minLength) && !(s.length >= e.minLength) || h(e.maxLength) && !(s.length <= e.maxLength) ? false : i.test(s);
}
function hm(e, t, s) {
  return !Et(s) || h(e.minLength) && !(s.length >= e.minLength) || h(e.maxLength) && !(s.length <= e.maxLength) || h(e.pattern) && !new RegExp(e.pattern).test(s) ? false : h(e.format) ? ur(e.format) ? pr(e.format)(s) : false : true;
}
function ym(e, t, s) {
  return Cs(s);
}
function fm(e, t, s) {
  return Et(s) && new RegExp(e.pattern).test(s);
}
function bm(e, t, s) {
  return R(os(e, t), t, s);
}
function Im(e, t, s) {
  if (!Ut(s) || e.items === void 0 && s.length !== 0 || s.length !== e.maxItems) return false;
  if (!e.items) return true;
  for (let i = 0; i < e.items.length; i++) if (!R(e.items[i], t, s[i])) return false;
  return true;
}
function Sm(e, t, s) {
  return Fn(s);
}
function Tm(e, t, s) {
  return e.anyOf.some((i) => R(i, t, s));
}
function xm(e, t, s) {
  return !(!Fs(s) || h(e.maxByteLength) && !(s.length <= e.maxByteLength) || h(e.minByteLength) && !(s.length >= e.minByteLength));
}
function Om(e, t, s) {
  return true;
}
function vm(e, t, s) {
  return Ie.IsVoidLike(s);
}
function Am(e, t, s) {
  return Hs(e[u]) ? mr(e[u])(e, s) : false;
}
function R(e, t, s) {
  const i = h(e.$id) ? wp(e, t) : t, a = e;
  switch (a[u]) {
    case "Any":
      return Wp();
    case "Argument":
      return Hp();
    case "Array":
      return _p(a, i, s);
    case "AsyncIterator":
      return Qp(a, i, s);
    case "BigInt":
      return Xp(a, i, s);
    case "Boolean":
      return Jp(a, i, s);
    case "Constructor":
      return Yp(a, i, s);
    case "Date":
      return Zp(a, i, s);
    case "Function":
      return em(a, i, s);
    case "Import":
      return tm(a, i, s);
    case "Integer":
      return nm(a, i, s);
    case "Intersect":
      return sm(a, i, s);
    case "Iterator":
      return im(a, i, s);
    case "Literal":
      return am(a, i, s);
    case "Never":
      return om();
    case "Not":
      return rm(a, i, s);
    case "Null":
      return dm(a, i, s);
    case "Number":
      return cm(a, i, s);
    case "Object":
      return lm(a, i, s);
    case "Promise":
      return um(a, i, s);
    case "Record":
      return pm(a, i, s);
    case "Ref":
      return mm(a, i, s);
    case "RegExp":
      return gm(a, i, s);
    case "String":
      return hm(a, i, s);
    case "Symbol":
      return ym(a, i, s);
    case "TemplateLiteral":
      return fm(a, i, s);
    case "This":
      return bm(a, i, s);
    case "Tuple":
      return Im(a, i, s);
    case "Undefined":
      return Sm(a, i, s);
    case "Union":
      return Tm(a, i, s);
    case "Uint8Array":
      return xm(a, i, s);
    case "Unknown":
      return Om();
    case "Void":
      return vm(a, i, s);
    default:
      if (!Hs(a[u])) throw new Kp(a);
      return Am(a, i, s);
  }
}
function wm(...e) {
  return e.length === 3 ? R(e[0], e[1], e[2]) : R(e[0], [], e[1]);
}
function r(e) {
  return ce.when((t) => wm(e, t));
}
function Pi(e) {
  return n.Literal(e);
}
function m(e) {
  return n.Object({ type: n.Literal(e) });
}
function o(e, t) {
  return n.Object({ type: n.Literal(e), ...t });
}
const g = m("bang"), ki = o("get", { key: n.String() }), wt = o("set", { value: n.Any() }), Ci = o("set", { key: n.String(), value: n.Any() }), C = o("setCode", { value: n.String() }), rs = m("clear"), fe = m("reset"), ds = m("start"), B = m("stop"), be = m("pause"), Ne = m("play"), j = m("run"), Nt = m("toggle"), ln = o("setMin", { value: n.Number() }), un = o("setMax", { value: n.Number() }), pn = o("setDefault", { value: n.Number() }), mn = o("setValue", { value: n.Number() }), Ft = o("load", { src: n.String() }), Ri = o("noteOn", { note: n.Number(), velocity: n.Number() }), Li = o("noteOff", { note: n.Number(), velocity: n.Number() }), df = [g, ki, wt, Ci, C, rs, fe, ds, B, be, Ne, j, Nt, ln, un, pn, mn, Ri, Li], O = { bang: r(g), get: r(ki), set: r(wt), setKey: r(Ci), setCode: r(C), clear: r(rs), reset: r(fe), start: r(ds), stop: r(B), pause: r(be), play: r(Ne), run: r(j), toggle: r(Nt), setMin: r(ln), setMax: r(un), setDefault: r(pn), setValue: r(mn), noteOn: r(Ri), noteOff: r(Li) }, fn = { b: { name: "bang", description: "Always outputs a bang, regardless of input", color: "text-orange-400", hoverColor: "hover:text-orange-400" }, a: { name: "any", description: "Passes input through unchanged", color: "text-green-400", hoverColor: "hover:text-green-400" }, s: { name: "symbol", description: "Passes thru symbols or strings", color: "text-blue-400", hoverColor: "hover:text-blue-400" }, t: { name: "text", description: "Passes through strings", color: "text-blue-400", hoverColor: "hover:text-blue-400" }, l: { name: "list", description: "Passes through arrays", color: "text-purple-400", hoverColor: "hover:text-purple-400" }, n: { name: "number", description: "Passes through numbers", color: "text-yellow-400", hoverColor: "hover:text-yellow-400" }, f: { name: "float", description: "Passes through numbers", color: "text-yellow-400", hoverColor: "hover:text-yellow-400" }, i: { name: "int", description: "Passes through integers only", color: "text-amber-400", hoverColor: "hover:text-amber-400" }, o: { name: "object", description: "Passes through plain objects", color: "text-cyan-400", hoverColor: "hover:text-cyan-400" } };
function cf(e) {
  if (e in fn) return fn[e];
  const t = e.toLowerCase(), s = Object.entries(fn).find(([, i]) => i.name === t);
  return s ? s[1] : { name: e, description: "Unknown type", color: "text-zinc-400", hoverColor: "hover:text-zinc-400" };
}
const Nm = { type: "trigger", category: "control", description: "Outputs messages through multiple outlets in right-to-left order", inlets: [{ id: "message", description: "Any message triggers all outputs in right-to-left order", handle: { handleType: "message" } }], outlets: [{ id: "dynamic", description: 'Outlets are created based on type specifiers (e.g., "trigger b b n")', handle: { handleType: "message" } }], tags: ["flow", "routing", "bang", "sequence"], hasDynamicOutlets: true }, Fm = { type: "p5", category: "video", description: "Creates a P5.js sketch for creative coding and graphics", inlets: [], outlets: [], tags: ["canvas", "graphics", "animation", "creative", "processing", "drawing", "visual"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "video-out-{index}", handleType: "video", description: "Video output at index 0, message outlets use out-{index}" } } }, $m = { type: "hydra", category: "video", description: "Creates a Hydra live coding video synthesizer", inlets: [{ id: "message", description: "Control messages", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Evaluate code and update visuals" }] }], outlets: [], tags: ["video", "synthesizer", "livecoding", "visual", "shader", "generative"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "video-in-{index}", handleType: "video", description: "Video inlets (0-indexed), message inlets use message-in-{index}" }, outlet: { template: "video-out-{index}", handleType: "video", description: "Video outlets (0-indexed), message outlets use message-out-{index}" } } }, Pm = { type: "glsl", category: "video", description: "Creates a GLSL fragment shader for visual effects", inlets: [], outlets: [{ id: "out", type: "video", description: "Video output", handle: { handleType: "video", handleId: "out" } }], tags: ["shader", "visual", "graphics", "opengl", "gpu", "shadertoy"], hasDynamicOutlets: false, handlePatterns: { inlet: { template: "video-in-{index}-{name}-{type}", handleType: "video", description: "Uniform-based inlets: video-in-index-uniformName-uniformType (e.g. video-in-0-iChannel0-sampler2D)" } } }, km = { type: "canvas", category: "video", description: "Creates an offscreen JavaScript canvas for graphics", inlets: [{ id: "message", description: "Control messages", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Evaluate code and update visuals" }] }], outlets: [], tags: ["graphics", "drawing", "animation", "html5", "2d", "offscreen"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "video-out-{index}", handleType: "video", description: "Video output at index 0, message outlets use out-{index}" } } }, Cm = { type: "canvas.dom", category: "video", description: "Creates a JavaScript canvas on main thread with DOM access", inlets: [{ id: "message", description: "Control messages", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Evaluate code and update visuals" }] }], outlets: [], tags: ["graphics", "drawing", "animation", "html5", "2d", "interactive", "mouse", "keyboard"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "video-out-{index}", handleType: "video", description: "Video output at index 0, message outlets use out-{index}" } } }, Rm = o("expand", {}), Lm = o("collapse", {}), Mm = o("fullscreen", {}), jm = { type: "surface", category: "video", description: "Fullscreen transparent canvas overlay for pointer and touch interaction", inlets: [{ id: "message", description: "Control messages", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Evaluate code and update visuals" }, { schema: Rm, description: "Enter fullscreen surface mode" }, { schema: Lm, description: "Exit fullscreen surface mode" }, { schema: Mm, description: "Request browser fullscreen" }] }], outlets: [{ id: "video", description: "Video output", handle: { handleType: "video" } }], tags: ["graphics", "interaction", "touch", "pointer", "mouse", "fullscreen", "overlay", "2d"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "video-out-{index}", handleType: "video", description: "Video output at index 0, message outlets use out-{index}" } } }, Dm = { type: "swgl", category: "video", description: "Creates a SwissGL shader for WebGL2 graphics", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message", handleId: "0" }, messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Evaluate code and update visuals" }] }], outlets: [{ id: "video", type: "video", description: "Video output", handle: { handleType: "video", handleId: "0" } }, { id: "message", description: "Message output", handle: { handleType: "message", handleId: "0" } }], tags: ["shader", "webgl", "graphics", "gpu", "3d", "mesh"] }, Um = { type: "textmode", category: "video", description: "Creates ASCII/text-mode graphics using textmode.js", inlets: [], outlets: [], tags: ["ascii", "text", "retro", "characters", "webgl"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, Em = { type: "textmode.dom", category: "video", description: "Creates ASCII/text-mode graphics with mouse/keyboard support", inlets: [], outlets: [], tags: ["ascii", "text", "retro", "characters", "webgl", "interactive"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, qm = { type: "three", category: "video", description: "Creates Three.js 3D graphics on web worker", inlets: [{ id: "message", description: "Control messages", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Evaluate code and update visuals" }] }], outlets: [], tags: ["3d", "webgl", "graphics", "animation", "scene"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "video-in-{index}", handleType: "video", description: "Video inlets (0-indexed), message inlets use message-in-{index}" }, outlet: { template: "video-out-{index}", handleType: "video", description: "Video outlets (0-indexed), message outlets use message-out-{index}" } } }, Bm = { type: "three.dom", category: "video", description: "Creates Three.js 3D graphics with interactivity", inlets: [{ id: "message", description: "Control messages", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Evaluate code and update visuals" }] }], outlets: [], tags: ["3d", "webgl", "graphics", "animation", "scene", "interactive"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "video-out-{index}", handleType: "video", description: "Video output at index 0, message outlets use out-{index}" } } }, zm = { type: "regl", category: "video", description: "Low-level GPU rendering with regl draw commands", inlets: [{ id: "message", description: "Control messages", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Evaluate code and update visuals" }] }], outlets: [], tags: ["gpu", "webgl", "graphics", "shader", "geometry", "low-level", "regl"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "video-in-{index}", handleType: "video", description: "Video inlets (0-indexed), message inlets use message-in-{index}" }, outlet: { template: "video-out-{index}", handleType: "video", description: "Video outlets (0-indexed), message outlets use message-out-{index}" } } }, Mi = o("load", { url: n.String() }), ji = o("load", { path: n.String() }), lf = { loadUrl: r(Mi), loadPath: r(ji) }, Vm = { type: "img", category: "video", description: "Load and display images from URLs or files", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: Mi, description: "Load image from URL" }, { schema: ji, description: "Load image from file path" }, { schema: n.String(), description: "Load image from path" }] }], outlets: [], tags: ["image", "picture", "texture", "visual"], hasDynamicOutlets: true }, Di = o("loop", { value: n.Optional(n.Boolean()) }), Ui = o("load", { url: n.String() }), Ei = o("load", { path: n.String() }), uf = { ...O, loop: r(Di), loadUrl: r(Ui), loadPath: r(Ei), string: r(n.String()) }, Km = { type: "video", category: "video", description: "Load and display videos from URLs or files", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Restart video from beginning" }, { schema: Ne, description: "Start/resume playback" }, { schema: be, description: "Pause playback" }, { schema: Di, description: "Set loop mode (default: true)" }, { schema: Ui, description: "Load video from URL" }, { schema: Ei, description: "Load video from file path" }, { schema: n.String(), description: "Load video from path" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio track output", handle: { handleType: "audio" } }], tags: ["video", "movie", "texture", "visual", "audio"], hasDynamicOutlets: true }, qi = o("size", { width: n.Number(), height: n.Number() }), pf = { ...O, size: r(qi) }, Gm = { type: "webcam", category: "video", description: "Capture live video from your webcam/camera", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Start webcam capture" }, { schema: be, description: "Toggle pause/resume capture" }, { schema: qi, description: "Set capture resolution" }] }], outlets: [{ id: "video", description: "Video output", handle: { handleType: "video", handleId: "0" } }], tags: ["camera", "capture", "live", "texture", "visual"] }, Wm = { type: "screen", category: "video", description: "Screen capture for desktop/window recording", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Start screen capture" }] }], outlets: [{ id: "out", type: "video", description: "Captured screen video", handle: { handleType: "video", handleId: "0" } }], tags: ["screen", "capture", "recording", "desktop", "texture", "visual"] }, Bi = o("load", { url: n.String() }), mf = { loadUrl: r(Bi) }, Hm = { type: "iframe", category: "network", description: "Embed external web pages and interactive content", inlets: [{ id: "message", description: "Control and communication messages", handle: { handleType: "message" }, messages: [{ schema: Bi, description: "Load webpage from URL" }, { schema: n.Unknown(), description: "Other messages forwarded via postMessage" }] }], outlets: [{ id: "message", description: "postMessage events received from iframe", handle: { handleType: "message" }, messages: [{ schema: n.Unknown(), description: "Messages received from iframe via postMessage" }] }], tags: ["web", "embed", "external", "postmessage"] }, _m = { type: "button", category: "interface", description: "A simple button that sends bang when clicked", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Flash button and output bang" }] }], outlets: [{ id: "message", description: "Button output", handle: { handleType: "message" }, messages: [{ schema: g, description: "Sent when button is clicked or receives any message" }] }], tags: ["interface", "control", "trigger", "input"] }, Qm = { type: "toggle", category: "interface", description: "A toggle button that sends true/false when clicked", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Flip the toggle state" }] }], outlets: [{ id: "message", description: "Toggle output", handle: { handleType: "message" }, messages: [{ schema: n.Boolean(), description: "Current state" }] }], tags: ["interface", "control", "switch", "boolean", "input"] }, Xm = { type: "switch", category: "interface", description: "A horizontal switch that sends true/false when toggled", inlets: [], outlets: [{ id: "message", description: "Switch output", handle: { handleType: "message" }, messages: [{ schema: n.Boolean(), description: "Current state" }] }], tags: ["interface", "control", "switch", "boolean", "input"] }, Jm = o("set", { value: n.Any() }), Ym = { type: "msg", category: "interface", description: "Store and send predefined messages", inlets: [{ id: "message", description: "Control and placeholder values", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: g, description: "Output the stored message" }, { schema: Jm, description: "Set message without triggering output" }, { schema: n.Any(), description: "Store as $1 and trigger output (hot inlet)" }] }], outlets: [{ id: "message", description: "Message output", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "The stored message with placeholders replaced" }] }], tags: ["interface", "message", "trigger", "data"], handlePatterns: { inlet: { template: "message-in-{index}", handleType: "message", description: "Indexed inlets: message-in-0 (hot, triggers output), message-in-1+ (cold, set $N placeholders)" } } }, Zm = { type: "slider", category: "interface", description: "Continuous value control with customizable range", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Output the current slider value" }, { schema: fe, description: "Reset the slider value back to its default" }, { schema: n.Number(), description: "Set slider to value and output" }, { schema: ln, description: "Set the minimum bound" }, { schema: un, description: "Set the maximum bound" }, { schema: pn, description: "Set the default value (used by reset)" }, { schema: mn, description: "Set value silently without triggering output" }] }], outlets: [{ id: "message", description: "Slider output", handle: { handleType: "message" }, messages: [{ schema: n.Number(), description: "Current slider value" }] }], tags: ["interface", "control", "number", "range", "input"] }, eg = { type: "knob", category: "interface", description: "Circular encoder knob for continuous value control (0-1 by default)", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Output the current knob value" }, { schema: fe, description: "Reset the knob value back to its default" }, { schema: n.Number(), description: "Set knob to value and output" }, { schema: ln, description: "Set the minimum bound" }, { schema: un, description: "Set the maximum bound" }, { schema: pn, description: "Set the default value (used by reset)" }, { schema: mn, description: "Set value silently without triggering output" }] }], outlets: [{ id: "message", description: "Knob output", handle: { handleType: "message" }, messages: [{ schema: n.Number(), description: "Current knob value" }] }], tags: ["interface", "control", "number", "encoder", "input"] }, tg = { type: "textbox", category: "interface", description: "Multi-line text input field", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Output the current text" }, { schema: n.String(), description: "Set the text content" }] }], outlets: [{ id: "message", description: "Text output", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "Current text content" }] }], tags: ["interface", "text", "input", "multiline"] }, ng = { type: "keyboard", category: "interface", description: "Listen for keyboard input and output key events", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Toggle listening on/off" }, { schema: ds, description: "Start listening for keyboard input" }, { schema: B, description: "Stop listening for keyboard input" }, { schema: Nt, description: "Toggle listening state" }, { schema: n.String(), description: "Set keybind (in filtered mode)" }] }], outlets: [{ id: "message", description: "Keyboard output", handle: { handleType: "message" }, messages: [{ schema: g, description: "Sent when filtered key is pressed (filtered mode)" }, { schema: n.String(), description: "Key name (all keys mode)" }, { schema: n.Boolean(), description: "Key state true/false (up/down mode)" }, { schema: n.Tuple([n.String(), n.Boolean()]), description: "[key, state] tuple (all keys + up/down mode)" }] }], tags: ["interface", "input", "keyboard", "keys", "hotkey"] }, zi = o("read", {}), gf = { string: r(n.String()), load: r(Ft), read: r(zi) }, sg = { type: "soundfile~", category: "audio", description: "Load and play audio files with transport controls", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "Load audio file or stream by URL" }, { schema: g, description: "Play from start of sample" }, { schema: Ne, description: "Play from current position" }, { schema: be, description: "Pause the playback" }, { schema: B, description: "Stop playback and reset position" }, { schema: zi, description: "Read audio buffer and send to output (for convolver~)" }, { schema: Ft, description: "Load audio from a VFS path or URL" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "file", "player", "sample", "music"], hasDynamicOutlets: true }, Vi = m("play"), Ki = m("record"), Gi = m("end"), ig = m("loop"), ag = m("loopOn"), Wi = m("loopOff"), og = o("loop", { start: n.Number(), end: n.Number() }), rg = o("loop", { start: n.Optional(n.Number()), end: n.Optional(n.Number()) }), dg = o("loopOn", { start: n.Number(), end: n.Number() }), cg = o("loopOn", { start: n.Optional(n.Number()), end: n.Optional(n.Number()) }), Hi = o("setStart", { value: n.Number() }), _i = o("setEnd", { value: n.Number() }), Qi = o("setPlaybackRate", { value: n.Number() }), Xi = o("setDetune", { value: n.Number() }), Ji = o("download", { name: n.Optional(n.String()) }), lg = n.Unsafe({ type: "Float32Array" }), hf = { ...O, play: r(Vi), record: r(Ki), end: r(Gi), loopWithOptionalPoints: r(rg), loopOnWithOptionalPoints: r(cg), loopOff: r(Wi), setStart: r(Hi), setEnd: r(_i), setPlaybackRate: r(Qi), setDetune: r(Xi), download: r(Ji), load: r(Ft) }, ug = { type: "sampler~", category: "audio", description: "Record and playback audio with loop points and pitch control", inlets: [{ id: "audio", type: "signal", description: "Audio input for recording", handle: { handleType: "audio" } }, { id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Play the recorded sample" }, { schema: Vi, description: "Play the recorded sample" }, { schema: Ki, description: "Start recording audio from connected sources" }, { schema: Gi, description: "Stop recording" }, { schema: B, description: "Stop playback" }, { schema: ig, description: "Toggle loop and start loop playback" }, { schema: og, description: "Set loop points (in seconds) and play" }, { schema: ag, description: "Enable loop mode" }, { schema: dg, description: "Enable loop with specific points" }, { schema: Wi, description: "Disable loop mode" }, { schema: Hi, description: "Set playback start position (seconds)" }, { schema: _i, description: "Set playback end position (seconds)" }, { schema: Qi, description: "Set playback speed (1.0 = normal, 2.0 = double)" }, { schema: Xi, description: "Set pitch shift in cents (1200 = one octave)" }, { schema: Ji, description: "Download buffer as WAV file. Optional name field sets filename." }, { schema: Ft, description: "Load audio from a VFS path or URL" }, { schema: lg, description: "Set buffer directly from Float32Array audio samples" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio" } }], tags: ["audio", "sampler", "recording", "loop", "pitch"] }, pg = o("set", { index: n.Number(), value: n.Number() }), mg = o("get", { index: n.Number() }), gg = o("get", { index: n.Number(), value: n.Number() }), hg = o("resize", { length: n.Number() }), yg = m("clear"), fg = m("normalize"), bg = { type: "table", category: "audio", description: "Named array of floats \u2014 shared with tabread~, tabwrite~, tabosc4~", inlets: [{ id: "command", description: "Table commands", handle: { handleType: "message" }, messages: [{ schema: g, description: "Output the entire table as a Float32Array" }, { schema: pg, description: "Set value at index" }, { schema: mg, description: 'Get value at index \u2014 outputs {type:"get", index, value}' }, { schema: hg, description: "Resize the table (preserves data up to new length)" }, { schema: yg, description: "Fill the table with zeros" }, { schema: fg, description: "Normalize table values to -1..1 range" }, { schema: Ft, description: "Load audio from a VFS path or URL into the buffer" }, { schema: n.Unsafe({ type: "Float32Array" }), description: "Write a Float32Array directly into the buffer" }, { schema: n.Array(n.Number()), description: "Write an array of floats into the buffer" }] }], outlets: [{ id: "result", description: "Table data output", handle: { handleType: "message" }, messages: [{ schema: n.Unsafe({ type: "Float32Array" }), description: "Entire table contents as Float32Array (on bang)" }, { schema: gg, description: "Value at index (on get command)" }] }], tags: ["audio", "buffer", "array", "wavetable", "sample"] }, Ig = m("stop"), Yi = o("setBpm", { value: n.Number() }), yf = { ...O, setBpm: r(Yi) }, Sg = { type: "orca", category: "audio", description: "Orca livecoding sequencer - esoteric programming language for procedural sequences", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: wt, description: "Set the grid content" }, { schema: g, description: "Toggle play/pause" }, { schema: Ne, description: "Start playback" }, { schema: Ig, description: "Stop playback" }, { schema: Yi, description: "Set tempo in BPM" }] }], outlets: [{ id: "message", description: "MIDI messages output", handle: { handleType: "message" }, messages: [{ schema: n.Object({ type: n.Literal("noteOn"), note: n.Number(), velocity: n.Number(), channel: n.Number() }), description: "MIDI note on message" }, { schema: n.Object({ type: n.Literal("noteOff"), note: n.Number(), channel: n.Number() }), description: "MIDI note off message" }, { schema: n.Object({ type: n.Literal("controlChange"), control: n.Number(), value: n.Number(), channel: n.Number() }), description: "MIDI control change message" }] }], tags: ["audio", "sequencer", "livecoding", "midi", "esoteric"] }, Zi = o("setFontSize", { value: n.Number() }), ea = o("setFontFamily", { value: n.String() }), ta = o("setStyles", { value: n.Object({ container: n.Optional(n.String()) }) }), na = m("mute"), sa = m("unmute"), ff = { ...O, string: r(n.String()), setFontSize: r(Zi), setFontFamily: r(ea), setStyles: r(ta), mute: r(na), unmute: r(sa) }, Tg = { type: "strudel", category: "audio", description: "Strudel live coding environment based on TidalCycles", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Evaluate code and start playback" }, { schema: j, description: "Evaluate code and start playback" }, { schema: n.String(), description: "Set the code in the editor" }, { schema: C, description: "Set the code in the editor" }, { schema: Zi, description: "Set editor font size" }, { schema: ea, description: "Set editor font family" }, { schema: ta, description: "Set custom styles for editor container" }, { schema: na, description: "Silence audio output" }, { schema: sa, description: "Restore audio output after mute" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio" } }], tags: ["audio", "livecoding", "tidalcycles", "pattern", "music"], hasDynamicOutlets: true }, ia = m("replace"), aa = m("run"), oa = m("add"), ra = m("remove"), xg = m("clearAll"), da = o("replace", { code: n.String() }), Og = o("set", { key: n.String(), value: n.Any() }), vg = o("setInt", { key: n.String(), value: n.Number() }), Ag = o("setFloat", { key: n.String(), value: n.Number() }), wg = o("setIntArray", { key: n.String(), value: n.Array(n.Number()) }), Ng = o("setFloatArray", { key: n.String(), value: n.Array(n.Number()) }), Fg = o("get", { key: n.String() }), $g = o("getInt", { key: n.String() }), Pg = o("getFloat", { key: n.String() }), kg = o("getString", { key: n.String() }), Cg = o("getIntArray", { key: n.String() }), Rg = o("getFloatArray", { key: n.String() }), Lg = o("signal", { event: n.String() }), Mg = o("broadcast", { event: n.String() }), jg = o("listenOnce", { event: n.String() }), Dg = o("listenStart", { event: n.String() }), Ug = o("listenStop", { event: n.String() }), Eg = n.Object({ type: n.String() }, { additionalProperties: true }), bf = { ...O, string: r(n.String()), anyTypeMessage: r(Eg), replace: r(ia), run: r(aa), add: r(oa), remove: r(ra), replaceCode: r(da) }, qg = { type: "chuck~", category: "audio", description: "ChucK audio programming environment for real-time sound synthesis", inlets: [{ id: "audio", type: "signal", description: "Audio input for processing", handle: { handleType: "audio", handleId: 0 } }, { id: "message", description: "Control messages", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: n.String(), description: "Add string expression as new shred" }, { schema: g, description: "Replace most recent shred with current expression" }, { schema: ia, description: "Replace most recent shred" }, { schema: aa, description: "Replace most recent shred" }, { schema: oa, description: "Add current expression as new shred" }, { schema: ra, description: "Remove the last shred" }, { schema: B, description: "Stop all shreds" }, { schema: xg, description: "Clear all shreds" }, { schema: da, description: "Replace most recent shred with given code" }, { schema: Og, description: "Set global value (string, int, or float)" }, { schema: vg, description: "Set global integer value" }, { schema: Ag, description: "Set global float value" }, { schema: wg, description: "Set global integer array" }, { schema: Ng, description: "Set global float array" }, { schema: Fg, description: "Get global value (auto-detects type)" }, { schema: $g, description: "Get global integer value" }, { schema: Pg, description: "Get global float value" }, { schema: kg, description: "Get global string value" }, { schema: Cg, description: "Get global integer array" }, { schema: Rg, description: "Get global float array" }, { schema: Lg, description: "Signal an event by name" }, { schema: Mg, description: "Broadcast an event by name" }, { schema: jg, description: "Listen for event once" }, { schema: Dg, description: "Start listening for event continuously" }, { schema: Ug, description: "Stop listening for event" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio" } }, { id: "message", description: "Console output and event responses", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: n.String(), description: "Console output from <<< print statements" }, { schema: n.Object({ key: n.String(), value: n.Any() }), description: "Response from get* messages" }, { schema: n.Object({ event: n.String() }), description: "Event triggered notification" }] }], tags: ["audio", "programming", "synthesis", "livecoding", "webchuck"], hasDynamicOutlets: true }, ca = o("connect", { url: n.String() }), la = m("disconnect"), ua = o("subscribe", { topic: n.Union([n.String(), n.Array(n.String())]) }), pa = o("unsubscribe", { topic: n.Union([n.String(), n.Array(n.String())]) }), ma = o("publish", { topic: n.String(), message: n.Any() }), Bg = m("connected"), zg = m("disconnected"), Vg = o("message", { topic: n.String(), message: n.String() }), Kg = o("subscribed", { topics: n.Array(n.String()) }), Gg = o("unsubscribed", { topics: n.Array(n.String()) }), Wg = o("error", { message: n.String() }), If = { connect: r(ca), disconnect: r(la), subscribe: r(ua), unsubscribe: r(pa), publish: r(ma) }, Hg = { type: "mqtt", category: "network", description: "Connect to MQTT brokers for pub/sub messaging with IoT devices", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: ca, description: "Connect to a broker" }, { schema: la, description: "Disconnect from the broker" }, { schema: ua, description: "Subscribe to a topic" }, { schema: pa, description: "Unsubscribe from a topic" }, { schema: ma, description: "Publish a message to a topic" }] }], outlets: [{ id: "message", description: "Connection events and received messages", handle: { handleType: "message" }, messages: [{ schema: Bg, description: "Successfully connected" }, { schema: zg, description: "Disconnected from broker" }, { schema: Vg, description: "Received a message" }, { schema: Kg, description: "Successfully subscribed" }, { schema: Gg, description: "Successfully unsubscribed" }, { schema: Wg, description: "An error occurred" }] }], tags: ["network", "mqtt", "iot", "pubsub", "messaging"] }, ga = o("connect", { url: n.String() }), ha = m("disconnect"), Sf = { connect: r(ga), disconnect: r(ha) }, _g = { type: "sse", category: "network", description: "Receive real-time events from a server using EventSource API", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: ga, description: "Connect to SSE endpoint" }, { schema: ha, description: "Disconnect from endpoint" }] }], outlets: [{ id: "message", description: "Received events", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Event data (JSON parsed if possible, otherwise string)" }] }], tags: ["network", "sse", "events", "realtime", "streaming"] }, ya = o("setVoice", { value: n.String() }), fa = o("setRate", { value: n.Number() }), ba = o("setPitch", { value: n.Number() }), Ia = o("setVolume", { value: n.Number() }), Sa = m("resume"), Qg = o("start", { text: n.String() }), Xg = o("end", { text: n.String() }), Jg = o("error", { message: n.String() }), Tf = { ...O, setVoice: r(ya), setRate: r(fa), setPitch: r(ba), setVolume: r(Ia), resume: r(Sa), string: r(n.String()), number: r(n.Number()) }, Yg = { type: "tts", category: "network", description: "Speak text aloud using browser Web Speech API", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: n.String(), description: "Speak the text" }, { schema: ya, description: "Set the voice by name" }, { schema: fa, description: "Set speech rate (0.1-10, default: 1)" }, { schema: ba, description: "Set pitch (0-2, default: 1)" }, { schema: Ia, description: "Set volume (0-1, default: 1)" }, { schema: B, description: "Stop current speech" }, { schema: be, description: "Pause current speech" }, { schema: Sa, description: "Resume paused speech" }] }], outlets: [{ id: "message", description: "Speech events", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: Qg, description: "Speech started" }, { schema: Xg, description: "Speech finished" }, { schema: Jg, description: "An error occurred" }] }], tags: ["network", "tts", "speech", "voice", "audio"] }, Ta = m("listen"), xa = o("setLang", { value: n.String() }), Oa = o("interim", { text: n.String() }), xf = { ...O, listen: r(Ta), setLang: r(xa), interim: r(Oa), string: r(n.String()) }, Zg = { type: "stt", category: "network", description: "Transcribe speech to text using browser Web Speech API", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: Ta, description: "Start listening" }, { schema: B, description: "Stop listening" }, { schema: g, description: "Toggle listening on/off" }, { schema: Nt, description: "Toggle listening on/off" }, { schema: xa, description: "Set BCP-47 language (e.g. en-US, th-TH)" }] }], outlets: [{ id: "message", description: "Transcribed text output", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: n.String(), description: "Transcribed text string" }, { schema: Oa, description: "Interim (partial) transcription result" }] }], tags: ["stt", "speech", "transcription", "microphone", "web-api"] }, va = o("set-channel", { channel: n.Union([n.String(), n.Number()]) }), Of = { setChannel: r(va) }, eh = { type: "netsend", category: "network", description: "Send messages over WebRTC network to other Patchies instances", inlets: [{ id: "message", description: "Messages to send", handle: { handleType: "message" }, messages: [{ schema: va, description: "Set the channel name" }, { schema: n.Any(), description: "Message to broadcast to all peers in the room" }] }], outlets: [], tags: ["network", "webrtc", "send", "collaboration", "realtime"] }, Aa = o("set-channel", { channel: n.Union([n.String(), n.Number()]) }), vf = { setChannel: r(Aa) }, th = { type: "netrecv", category: "network", description: "Receive messages over WebRTC network from other Patchies instances", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: Aa, description: "Set the channel name" }] }], outlets: [{ id: "message", description: "Received messages", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Message received from peers in the room" }] }], tags: ["network", "webrtc", "receive", "collaboration", "realtime"] }, wa = o("generate", { prompt: n.String() }), Af = { ...O, generate: r(wa), string: r(n.String()) }, nh = { type: "ai.txt", category: "ai", description: "Generate text using AI language models (Gemini)", inlets: [{ id: "message", description: "Text prompts", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "Text prompt - sets prompt and generates" }, { schema: wa, description: "Set prompt and generate text" }, { schema: wt, description: "Set prompt without generating" }, { schema: g, description: "Generate text with current prompt" }] }, { id: "video", type: "signal", description: "Image/video input for vision prompts", handle: { handleType: "video", handleId: "0" } }], outlets: [{ id: "message", description: "Generated text", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "Generated text response" }] }], tags: ["ai", "text", "generation", "llm", "gemini"] }, Na = o("generate", { prompt: n.String() }), wf = { ...O, generate: r(Na), string: r(n.String()) }, sh = { type: "ai.img", category: "ai", description: "Generate images from text prompts using AI (Gemini)", inlets: [{ id: "video", type: "signal", description: "Image input (optional, for image editing)", handle: { handleType: "video", handleId: "0" } }, { id: "message", description: "Image prompts", handle: { handleType: "message", handleId: "1" }, messages: [{ schema: n.String(), description: "Text prompt - sets prompt and generates" }, { schema: Na, description: "Set prompt and generate image" }, { schema: wt, description: "Set prompt without generating" }, { schema: g, description: "Generate image with current prompt" }] }], outlets: [{ id: "video", type: "signal", description: "Generated image output", handle: { handleType: "video", handleId: "0" } }, { id: "message", description: "Generation complete notification", handle: { handleType: "message", handleId: "1" }, messages: [{ schema: g, description: "Sent when image generation completes" }] }], tags: ["ai", "image", "generation", "gemini", "visual"] }, Fa = o("addPrompt", { prompt: n.String(), weight: n.Number() }), $a = o("deletePrompt", { prompt: n.String() }), Pa = o("setPrompts", { prompts: n.Any() }), ka = o("setBpm", { value: n.Number() }), Ca = o("setTemperature", { value: n.Number() }), Ra = o("setTopK", { value: n.Number() }), La = o("setSeed", { value: n.Number() }), Ma = o("setGuidance", { value: n.Number() }), ja = o("setDensity", { value: n.Number() }), Da = o("setBrightness", { value: n.Number() }), Ua = o("setScale", { value: n.Any() }), Ea = o("setConfig", { config: n.Any() }), Nf = { ...O, addPrompt: r(Fa), deletePrompt: r($a), setPrompts: r(Pa), setBPM: r(ka), setTemperature: r(Ca), setTopK: r(Ra), setSeed: r(La), setGuidance: r(Ma), setDensity: r(ja), setBrightness: r(Da), setScale: r(Ua), setConfig: r(Ea) }, ih = { type: "ai.music", category: "ai", description: "Generate musical compositions using AI (Lyria)", inlets: [{ id: "message", description: "Music prompts and controls", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "Text prompt or JSON5 weighted prompts" }, { schema: g, description: "Toggle play/pause" }, { schema: Ne, description: "Start playback" }, { schema: be, description: "Pause playback" }, { schema: Fa, description: "Add a weighted prompt" }, { schema: $a, description: "Remove a prompt" }, { schema: Pa, description: "Set all prompts at once" }, { schema: ka, description: "Set beats per minute" }, { schema: Ca, description: "Set temperature (0-1)" }, { schema: Ra, description: "Set top-k sampling" }, { schema: La, description: "Set random seed" }, { schema: Ma, description: "Set guidance strength" }, { schema: ja, description: "Set note density" }, { schema: Da, description: "Set tonal brightness" }, { schema: Ua, description: "Set musical scale" }, { schema: Ea, description: "Set generation config" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio" } }], tags: ["ai", "music", "generation", "audio", "lyria"], hasDynamicOutlets: true }, qa = o("speak", { text: n.String() }), Ba = o("load", { text: n.String() }), za = m("play"), Va = o("setVoice", { value: n.String() }), Ka = o("setRate", { value: n.Number() }), Ga = o("setPitch", { value: n.Number() }), Wa = o("setVolume", { value: n.Number() }), Ff = { ...O, speak: r(qa), load: r(Ba), play: r(za), setVoice: r(Va), setRate: r(Ka), setPitch: r(Ga), setVolume: r(Wa), string: r(n.String()) }, ah = { type: "ai.tts", category: "ai", description: "Convert text to speech using Google Cloud Text-to-Speech AI", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: n.String(), description: "Generate and play speech for the text" }, { schema: qa, description: "Generate and play speech (explicit format)" }, { schema: Ba, description: "Generate speech without playing (preload)" }, { schema: za, description: "Play cached audio" }, { schema: g, description: "Play cached audio" }, { schema: B, description: "Stop playback" }, { schema: Va, description: 'Set voice (e.g., "en-US-Chirp3-HD-Achernar")' }, { schema: Ka, description: "Set speaking rate (0.25-4)" }, { schema: Ga, description: "Set pitch (-20 to 20)" }, { schema: Wa, description: "Set volume gain in dB (-96 to 16)" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["ai", "tts", "speech", "voice", "audio", "google"], hasDynamicOutlets: true }, Ha = m("listen"), _a = o("setLanguage", { value: n.String() }), Qa = o("setPrompt", { value: n.String() }), $f = { ...O, listen: r(Ha), setLanguage: r(_a), setPrompt: r(Qa) }, oh = { type: "ai.stt", category: "ai", description: "Transcribe speech to text using Gemini AI", inlets: [{ id: "audio", type: "signal", description: "Audio input to transcribe (connect mic~ or any audio source)", handle: { handleType: "audio", handleId: 0 } }, { id: "message", description: "Control messages", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: Ha, description: "Start recording" }, { schema: B, description: "Stop recording and transcribe" }, { schema: g, description: "Toggle recording on/off" }, { schema: _a, description: "Set BCP-47 language hint" }, { schema: Qa, description: "Set transcription context/prompt hint" }] }], outlets: [{ id: "message", description: "Transcribed text output", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: n.String(), description: "Transcribed text string" }] }], tags: ["ai", "stt", "speech", "transcription", "microphone", "gemini"] }, rh = n.Object({ type: n.Literal("noteOn"), note: n.Number(), velocity: n.Number(), channel: n.Number() }), dh = n.Object({ type: n.Literal("noteOff"), note: n.Number(), velocity: n.Number(), channel: n.Number() }), ch = n.Object({ type: n.Literal("controlChange"), control: n.Number(), value: n.Number(), channel: n.Number() }), lh = { type: "midi.in", category: "network", description: "Receive MIDI messages from connected devices", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" } }], outlets: [{ id: "message", description: "MIDI messages from connected devices", handle: { handleType: "message" }, messages: [{ schema: rh, description: "MIDI note on message" }, { schema: dh, description: "MIDI note off message" }, { schema: ch, description: "MIDI control change message" }] }], tags: ["midi", "input", "music", "controller", "hardware"] }, uh = n.Object({ type: n.Literal("noteOn"), note: n.Number(), velocity: n.Number(), channel: n.Optional(n.Number()) }), ph = n.Object({ type: n.Literal("noteOff"), note: n.Number(), velocity: n.Optional(n.Number()), channel: n.Optional(n.Number()) }), mh = n.Object({ type: n.Literal("controlChange"), control: n.Number(), value: n.Number(), channel: n.Optional(n.Number()) }), gh = { type: "midi.out", category: "network", description: "Send MIDI messages to external devices or software", inlets: [{ id: "message", description: "MIDI messages to send", handle: { handleType: "message" }, messages: [{ schema: uh, description: "Send MIDI note on" }, { schema: ph, description: "Send MIDI note off" }, { schema: mh, description: "Send MIDI control change" }] }], outlets: [], tags: ["midi", "output", "music", "synthesizer", "hardware"] }, hh = o("connect", { room: n.Optional(n.String()), streamId: n.Optional(n.String()) }), yh = m("connect"), fh = m("disconnect"), bh = o("connected", { room: n.String() }), Ih = m("disconnected"), Sh = o("data", { data: n.Any(), uuid: n.String() }), Th = o("track", { kind: n.String(), uuid: n.String() }), xh = o("streaming", { tracks: n.Number() }), Oh = o("error", { message: n.String() }), vh = { type: "vdo.ninja.push", category: "network", description: "Push audio, video, and messages to a VDO.Ninja room", inlets: [{ id: "audio", type: "signal", description: "Audio input to stream", handle: { handleType: "audio", handleId: 0 } }, { id: "message", description: "Control messages and data to send", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: yh, description: "Connect using configured room/streamId" }, { schema: hh, description: "Connect to a room with specified values" }, { schema: fh, description: "Disconnect from the room" }, { schema: n.Any(), description: "Data sent to all peers in the room" }] }], outlets: [{ id: "message", description: "Connection events and received data", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: bh, description: "Successfully connected" }, { schema: Ih, description: "Disconnected from room" }, { schema: Sh, description: "Received data from a peer" }, { schema: Th, description: "Received media track" }, { schema: xh, description: "Started streaming with N tracks" }, { schema: Oh, description: "Connection or streaming error" }] }], tags: ["network", "webrtc", "video", "audio", "streaming", "vdoninja"], hasDynamicOutlets: true }, Ah = o("connect", { room: n.String(), streamId: n.Optional(n.String()) }), wh = m("connect"), Nh = o("view", { streamId: n.String() }), Fh = m("disconnect"), $h = o("connected", { room: n.String() }), Ph = m("disconnected"), kh = o("viewing", { streamId: n.String() }), Ch = o("track", { kind: n.String(), uuid: n.String(), streamId: n.String() }), Rh = o("message", { data: n.Any(), uuid: n.String() }), Lh = o("error", { message: n.String() }), Mh = { type: "vdo.ninja.pull", category: "network", description: "Pull audio, video, and messages from a VDO.Ninja room", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: wh, description: "Connect using configured room/streamId" }, { schema: Ah, description: "Connect to a room with specified values" }, { schema: Nh, description: "Start viewing a specific stream" }, { schema: Fh, description: "Disconnect from the room" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output from stream", handle: { handleType: "audio", handleId: 0 } }, { id: "message", description: "Connection events and received data", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: $h, description: "Successfully connected" }, { schema: Ph, description: "Disconnected from room" }, { schema: kh, description: "Started viewing a stream" }, { schema: Ch, description: "Received media track" }, { schema: Rh, description: "Received data from a peer" }, { schema: Lh, description: "Connection error" }] }], tags: ["network", "webrtc", "video", "audio", "streaming", "vdoninja"], hasDynamicOutlets: true }, jh = { type: "js", category: "programming", description: "General-purpose JavaScript code block for scripting and automation", inlets: [{ id: "message", description: "Control messages and data input", messages: [{ schema: g, description: "Trigger code execution" }, { schema: C, description: "Update the code" }, { schema: j, description: "Execute the code" }, { schema: B, description: "Stop running code" }, { schema: n.Any(), description: "Data received via recv() callback" }] }], outlets: [{ id: "message", description: "Output from send() calls", messages: [{ schema: n.Any(), description: "Data sent via send() function" }] }], tags: ["programming", "javascript", "code", "scripting"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "out-{index}", description: "Message outlets (0-indexed)" } } }, Dh = { type: "worker", category: "programming", description: "JavaScript in a Web Worker thread for CPU-intensive computations", inlets: [{ id: "message", description: "Control messages and data input", messages: [{ schema: g, description: "Trigger code execution" }, { schema: C, description: "Update the code" }, { schema: j, description: "Execute the code" }, { schema: B, description: "Stop running code" }, { schema: n.Any(), description: "Data received via recv() callback" }] }], outlets: [{ id: "message", description: "Output from send() calls", messages: [{ schema: n.Any(), description: "Data sent via send() function" }] }], tags: ["programming", "javascript", "worker", "threading", "async"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "out-{index}", description: "Message outlets (0-indexed)" } } }, Uh = { type: "vue", category: "programming", description: "Build custom UI components using Vue.js 3 with Composition API", inlets: [{ id: "message", description: "Control messages and data input", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Execute the code" }, { schema: B, description: "Stop running code" }, { schema: n.Any(), description: "Data received via recv() callback" }] }], outlets: [{ id: "message", description: "Output from send() calls", messages: [{ schema: n.Any(), description: "Data sent via send() function" }] }], tags: ["programming", "vue", "ui", "interface", "component"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "out-{index}", description: "Message outlets (0-indexed)" } } }, Eh = { type: "dom", category: "programming", description: "Build custom UI components using vanilla JavaScript and DOM API", inlets: [{ id: "message", description: "Control messages and data input", messages: [{ schema: C, description: "Set the code in the editor" }, { schema: j, description: "Execute the code" }, { schema: B, description: "Stop running code" }, { schema: n.Any(), description: "Data received via recv() callback" }] }], outlets: [{ id: "message", description: "Output from send() calls", messages: [{ schema: n.Any(), description: "Data sent via send() function" }] }], tags: ["programming", "dom", "ui", "interface", "vanilla"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}", description: "Message inlets (0-indexed)" }, outlet: { template: "out-{index}", description: "Message outlets (0-indexed)" } } }, Xa = o("load", { url: n.String() }), qh = o("load", { code: n.String() }), Pf = { ...O, loadUrl: r(Xa), loadCode: r(qh), string: ce.string, uint8Array: ce.instanceOf(Uint8Array), file: ce.instanceOf(File) }, Bh = { type: "uxn", category: "programming", description: "Uxn virtual machine for running Uxntal assembly programs", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "URL to load ROM, or Uxntal code to assemble" }, { schema: g, description: "Re-assemble code or reload ROM" }, { schema: n.Object({ type: n.Literal("Uint8Array") }), description: "Load ROM from raw binary data" }, { schema: Xa, description: "Load ROM from URL" }] }], outlets: [{ id: "message", description: "Console output", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "String messages from console device" }] }], tags: ["programming", "uxn", "uxntal", "assembly", "virtual-machine"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, zh = { type: "uiua", category: "programming", description: "Uiua array programming language", inlets: [{ id: "hot", description: "Hot inlet ($1) - triggers evaluation", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Value stored as $1, triggers evaluation" }, { schema: g, description: "Trigger evaluation with current values" }, { schema: C, description: "Set Uiua expression dynamically" }] }, { id: "cold", description: "Cold inlets ($2 - $9) - store values without triggering", handle: { handleType: "message" } }], outlets: [{ id: "result", description: "Uiua evaluation result", handle: { handleType: "message" } }], tags: ["programming", "array", "uiua", "stack", "functional"], handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, Vh = { type: "ruby", category: "programming", description: "Run Ruby code directly in the browser using ruby.wasm", inlets: [{ id: "message", description: "Control messages and data input", handle: { handleType: "message" }, messages: [{ schema: C, description: "Update the code" }, { schema: j, description: "Execute the code" }, { schema: B, description: "Stop running tasks" }, { schema: n.Any(), description: "Data received via recv block" }] }], outlets: [{ id: "message", description: "Output from emit calls", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Data sent via emit method" }] }], tags: ["programming", "ruby", "wasm", "scripting"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, Kh = { type: "python", category: "programming", description: "Run Python code directly in the browser using Pyodide", inlets: [{ id: "message", description: "Data input", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Data received in Python" }] }], outlets: [{ id: "message", description: "Output", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Data sent from Python" }] }], tags: ["programming", "python", "pyodide", "scripting", "data"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, Gh = { type: "expr", category: "programming", description: "Evaluate mathematical expressions and formulas using $1-$9 variables", inlets: [{ id: "hot", description: "Hot inlet ($1) - triggers evaluation when message arrives", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Value stored as $1, triggers evaluation" }] }], outlets: [{ id: "message", description: "Expression result", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Result of the expression evaluation" }] }], tags: ["programming", "expression", "math", "formula", "control"], hasDynamicOutlets: true }, Wh = { type: "filter", category: "programming", description: "Filter messages based on a JavaScript expression condition", inlets: [{ id: "hot", description: "Hot inlet ($1) - triggers evaluation", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Value stored as $1, triggers filter evaluation" }] }], outlets: [{ id: "matched", description: "Messages that match the filter condition", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Original message when condition is truthy" }] }, { id: "unmatched", description: "Messages that do not match the filter condition", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Original message when condition is falsy" }] }], tags: ["programming", "filter", "condition", "control", "routing"] }, Hh = { type: "map", category: "programming", description: "Transform incoming messages using JavaScript expressions", inlets: [{ id: "hot", description: "Hot inlet ($1) - triggers evaluation", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Value stored as $1, triggers transformation" }] }], outlets: [{ id: "message", description: "Transformed output", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Result of the JavaScript expression" }] }], tags: ["programming", "map", "transform", "javascript", "control"], hasDynamicOutlets: true }, _h = { type: "tap", category: "programming", description: "Execute side effects while passing messages through unchanged", inlets: [{ id: "hot", description: "Hot inlet ($1) - triggers expression and passes through", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Value triggers side effect, passes through unchanged" }] }], outlets: [{ id: "message", description: "Pass-through output", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Original input message (unchanged)" }] }], tags: ["programming", "debug", "logging", "inspect", "control"], hasDynamicOutlets: true }, Qh = { type: "scan", category: "programming", description: "Accumulate values over time ($1=acc, $2=input)", inlets: [{ id: "input", description: "Input value ($2) - triggers accumulation", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "New input value, becomes $2 in expression" }] }, { id: "reset", description: "Reset/set accumulator", handle: { handleType: "message" }, messages: [{ schema: g, description: "Reset to initial value" }, { schema: n.Any(), description: "Set accumulator directly" }] }], outlets: [{ id: "message", description: "Accumulated result", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Current accumulator value" }] }], tags: ["programming", "scan", "accumulate", "reduce", "state"] }, Xh = { type: "uniq", category: "programming", description: "Filter consecutive duplicates like Unix uniq ($1=prev, $2=curr)", inlets: [{ id: "input", description: "Input value ($2) - compared to previous", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Current value, becomes $2 in comparator" }] }, { id: "reset", description: "Reset state", handle: { handleType: "message" }, messages: [{ schema: g, description: "Forget last value" }, { schema: n.Any(), description: "Set last value directly" }] }], outlets: [{ id: "message", description: "Unique values", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Values that differ from previous" }] }], tags: ["programming", "uniq", "distinct", "filter", "dedupe"] }, Jh = { type: "peek", category: "programming", description: "Display latest received value for debugging message flow", inlets: [{ id: "message", description: "Value to display", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Value displayed in the object" }] }], outlets: [], tags: ["programming", "debug", "display", "inspect", "value"] }, Yh = { type: "loadbang", category: "control", description: "Send bang message when patch loads", inlets: [], outlets: [{ id: "message", description: "Bang on load", handle: { handleType: "message" }, messages: [{ schema: g, description: "Sent when patch loads" }] }], tags: ["control", "initialization", "startup", "trigger"] }, Zh = { type: "metro", category: "control", description: "Metronome for regular timing intervals", inlets: [{ id: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Start the metronome" }, { schema: B, description: "Stop the metronome" }, { schema: n.Number(), description: "Set interval in milliseconds" }] }], outlets: [{ id: "message", description: "Metronome ticks", handle: { handleType: "message" }, messages: [{ schema: g, description: "Sent on each tick" }] }], tags: ["control", "timing", "metronome", "clock", "trigger"] }, kf = { ...O, string: r(n.String()) }, ey = { type: "markdown", category: "documentation", description: "Render Markdown text as formatted content", inlets: [{ id: "message", description: "Markdown content", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "Markdown text to render" }] }], outlets: [{ id: "message", description: "Current markdown content", handle: { handleType: "message" }, messages: [{ schema: n.String(), description: "Current markdown content" }] }], tags: ["documentation", "markdown", "text", "display"] }, ty = { type: "tone~", category: "audio", description: "Tone.js synthesis and audio processing framework", inlets: [{ id: "audio", type: "signal", description: "Audio input (inputNode)", handle: { handleType: "audio" } }, { id: "message", description: "Control messages via recv()", messages: [{ schema: n.Any(), description: "Data received via recv() callback" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output (outputNode)", handle: { handleType: "audio" } }, { id: "message", description: "Output from send() calls", messages: [{ schema: n.Any(), description: "Data sent via send() function" }] }], tags: ["audio", "synthesis", "tonejs", "effects", "music"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "message-in-{index}", handleType: "message", description: "Message inlets (0-indexed)" }, outlet: { template: "message-out-{index}", handleType: "message", description: "Message outlets (0-indexed)" } } }, ny = { type: "elem~", category: "audio", description: "Elementary Audio declarative DSP library", inlets: [{ id: "audio", type: "signal", description: "Audio input (inputNode)", handle: { handleType: "audio" } }, { id: "message", description: "Control messages via recv()", messages: [{ schema: n.Any(), description: "Data received via recv() callback" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output (outputNode)", handle: { handleType: "audio" } }, { id: "message", description: "Output from send() calls", messages: [{ schema: n.Any(), description: "Data sent via send() function" }] }], tags: ["audio", "synthesis", "elementary", "dsp", "declarative"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "message-in-{index}", handleType: "message", description: "Message inlets (0-indexed)" }, outlet: { template: "message-out-{index}", handleType: "message", description: "Message outlets (0-indexed)" } } }, sy = { type: "sonic~", category: "audio", description: "SuperCollider scsynth audio engine via SuperSonic", inlets: [{ id: "audio", type: "signal", description: "Audio input (inputNode)", handle: { handleType: "audio" } }, { id: "message", description: "Control messages via recv()", messages: [{ schema: n.Any(), description: "Data received via recv() callback" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output (outputNode)", handle: { handleType: "audio" } }, { id: "message", description: "Output from send() calls", messages: [{ schema: n.Any(), description: "Data sent via send() function" }] }], tags: ["audio", "synthesis", "supercollider", "scsynth", "supersonic"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, Ja = m("resume"), iy = o("setChannel", { channel: n.String(), value: n.Union([n.Number(), n.String()]) }), ay = o("setOptions", { value: n.String() }), oy = o("noteOn", { note: n.Number(), velocity: n.Number() }), ry = o("noteOff", { note: n.Number(), velocity: n.Optional(n.Number()) }), dy = o("readScore", { value: n.String() }), cy = o("eval", { code: n.String() }), Cf = { ...O, resume: r(Ja) }, ly = { type: "csound~", category: "audio", description: "Csound audio programming language for synthesis and processing", inlets: [{ id: "audio", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "message", description: "Control messages", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: g, description: "Resume or re-eval Csound code" }, { schema: Ne, description: "Resume playback" }, { schema: Ja, description: "Resume playback" }, { schema: be, description: "Pause playback" }, { schema: B, description: "Stop playback" }, { schema: fe, description: "Reset the Csound instance" }, { schema: iy, description: "Set a control or string channel value" }, { schema: ay, description: "Set Csound options and reset" }, { schema: oy, description: "Send MIDI note on" }, { schema: ry, description: "Send MIDI note off" }, { schema: dy, description: "Send score statements to Csound" }, { schema: cy, description: "Evaluate Csound code" }, { schema: n.Number(), description: "Set control channel for inlet index" }, { schema: n.String(), description: "Send input message or set option" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "csound", "synthesis", "programming", "dsp"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, uy = { type: "dsp~", category: "audio", description: "Dynamic JavaScript DSP processor using AudioWorklet", inlets: [{ id: "audio", type: "signal", description: "Audio input" }, { id: "message", description: "Control messages via recv()", messages: [{ schema: n.Any(), description: "Data received via recv() callback" }] }], outlets: [{ id: "message", description: "Output from send() calls", messages: [{ schema: n.Any(), description: "Data sent via send() function" }] }], tags: ["audio", "dsp", "javascript", "worklet", "processing"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "audio-in-{index}", handleType: "audio", description: 'Audio inlets (if only 1 audio inlet, handle is "audio-in" with NO index). Message inlets use message-in-{index}' }, outlet: { template: "audio-out-{index}", handleType: "audio", description: 'Audio outlets (if only 1 audio outlet, handle is "audio-out" with NO index). Message outlets use message-out-{index}' } } }, py = { type: "expr~", category: "audio", description: "Audio-rate mathematical expression evaluator for DSP", inlets: [{ id: "audio", type: "signal", description: "Audio input (s, samples, input variables)", handle: { handleType: "audio", handleId: 0 } }, { id: "message", description: "Control values for $1-$9 variables", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: n.Number(), description: "Value for dynamic inlet variable" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio" } }], tags: ["audio", "expression", "dsp", "math", "synthesis"], hasDynamicOutlets: true }, my = { type: "osc~", category: "audio", description: "Oscillator for generating audio waveforms", inlets: [{ id: "audio", type: "signal", description: "Audio input for FM modulation", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", description: "Frequency control", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: n.Number(), description: "Frequency in Hz" }], isAudioParam: true }, { id: "type", description: "Waveform type", handle: { handleType: "message", handleId: 2 }, messages: [{ schema: n.Union([n.Literal("sine"), n.Literal("square"), n.Literal("sawtooth"), n.Literal("triangle")]), description: "Waveform type" }, { schema: n.Tuple([n.Unsafe({ type: "Float32Array" }), n.Unsafe({ type: "Float32Array" })]), description: "PeriodicWave [real, imag] arrays for custom waveform" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "oscillator", "synthesis", "waveform"] }, gy = { type: "waveshaper~", category: "audio", description: "Distortion and waveshaping effects", inlets: [{ id: "audio", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "curve", description: "Distortion curve", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: n.Any(), description: "Float32Array distortion curve" }] }, { id: "oversample", description: "Oversampling mode", handle: { handleType: "message", handleId: 2 }, messages: [{ schema: n.Union([n.Literal("none"), n.Literal("2x"), n.Literal("4x")]), description: "Oversampling factor" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "distortion", "waveshaper", "effects"] };
m("normalize");
const hy = { type: "convolver~", category: "audio", description: "Convolution reverb using impulse responses", inlets: [{ id: "audio", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "message", description: "Control messages", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: g, description: "Reload impulse response" }, { schema: n.Any(), description: "AudioBuffer impulse response data" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output with reverb applied", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "reverb", "convolution", "effects", "impulse"] }, Ya = m("step"), Za = o("setDelayMs", { value: n.Number() }), eo = o("setStepBy", { value: n.Number() }), yy = n.Object({ type: Pi("read"), address: n.Number(), count: n.Number() }), fy = n.Object({ type: Pi("write"), address: n.Number(), data: n.Array(n.Number()) }), Rf = { ...O, step: r(Ya), setDelayMs: r(Za), setStepBy: r(eo), number: r(n.Number()), numberArray: r(n.Array(n.Number())) }, by = { type: "asm", category: "programming", description: "Virtual stack machine assembly interpreter", inlets: [{ id: "message", type: "message", description: "Control messages and input data", handle: { handleType: "message" }, messages: [{ schema: g, description: "Step machine by configured instructions per step" }, { schema: C, description: "Set assembly code and reload program" }, { schema: j, description: "Reload program and execute one step" }, { schema: Ne, description: "Start continuous execution" }, { schema: be, description: "Pause continuous execution" }, { schema: Nt, description: "Toggle between play and pause" }, { schema: fe, description: "Reset machine state and reload program" }, { schema: Ya, description: "Execute single step (same as bang)" }, { schema: Za, description: "Set delay between steps in milliseconds (10-5000)" }, { schema: eo, description: "Set number of instructions to execute per step (1-1000)" }, { schema: n.Number(), description: "Send numeric data to the machine" }, { schema: n.Array(n.Number()), description: "Send array of numbers to the machine" }] }], outlets: [{ id: "output", type: "message", description: "Program output and side effects", handle: { handleType: "message" }, messages: [{ schema: n.Number(), description: "Single number from send instruction (e.g. send 0 1)" }, { schema: n.Array(n.Number()), description: "Array of numbers from send instruction (e.g. send 1 3)" }, { schema: yy, description: "Read memory from asm.mem" }, { schema: fy, description: "Write to external devices (e.g. asm.mem)" }] }], tags: ["programming", "assembly", "stack", "virtual-machine"], handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, Iy = o("setRows", { value: n.Number() }), Sy = o("write", { address: n.Number(), data: n.Array(n.Number()) }), Ty = o("read", { address: n.Number(), count: n.Number() });
r(n.Number()), r(n.Array(n.Number()));
const xy = { type: "asm.mem", category: "programming", description: "External memory buffer for assembly programs", inlets: [{ id: "message", description: "Control messages and memory operations", handle: { handleType: "message" }, messages: [{ schema: g, description: "Output all memory values" }, { schema: fe, description: "Clear all memory values" }, { schema: Iy, description: "Set number of display rows (1-100)" }, { schema: Sy, description: "Write values at specific address" }, { schema: Ty, description: "Read values and send back to asm" }, { schema: n.Number(), description: "Append single value to memory" }, { schema: n.Array(n.Number()), description: "Append array of values to memory" }] }], outlets: [{ id: "message", description: "Memory output", handle: { handleType: "message" }, messages: [{ schema: n.Array(n.Number()), description: "All memory values on bang" }] }], tags: ["programming", "assembly", "memory", "buffer"] }, Oy = o("setOutputSize", { size: n.Number() }), vy = o("setDispatchCount", { count: n.Array(n.Number()) }), Lf = { ...O, setOutputSize: r(Oy), setDispatchCount: r(vy) }, Ay = { type: "wgpu.compute", category: "programming", description: "WebGPU compute shaders for parallel GPU computation", inlets: [{ id: "message", description: "Control and input data", handle: { handleType: "message" }, messages: [{ schema: g, description: "Trigger computation" }, { schema: j, description: "Compile the shader" }, { schema: C, description: "Update shader code" }, { schema: n.Any(), description: "Typed array input data" }] }], outlets: [{ id: "message", description: "Computation results", handle: { handleType: "message" }, messages: [{ schema: n.Any(), description: "Typed array output data" }] }], tags: ["programming", "gpu", "webgpu", "compute", "parallel"], hasDynamicOutlets: true, handlePatterns: { inlet: { template: "in-{index}" }, outlet: { template: "out-{index}" } } }, wy = { type: "bg.out", category: "visual", description: "Set the final visual output that appears as the background", inlets: [{ id: "video", description: "Video input to display as background", handle: { handleType: "video", handleId: "0" } }], outlets: [], tags: ["visual", "output", "background", "display"] }, Ny = { type: "send.vdo", category: "visual", description: "Send video to a named channel for wireless routing", inlets: [{ id: "video", description: "Video input to broadcast on the channel", handle: { handleType: "video", handleId: 0 } }, { id: "channel", description: "Channel name (string)", handle: { handleType: "message", handleId: 1 } }], outlets: [], tags: ["visual", "routing", "channel", "wireless", "video"] }, Fy = { type: "recv.vdo", category: "visual", description: "Receive video from a named channel for wireless routing", inlets: [{ id: "channel", description: "Channel name (string)", handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "video", description: "Video output received from the channel", handle: { handleType: "video", handleId: 0 } }], tags: ["visual", "routing", "channel", "wireless", "video"] }, $y = { type: "note", category: "ui", description: "A resizable post-it note for annotations and comments.", inlets: [], outlets: [], tags: ["annotation", "comment", "documentation", "ui"] }, Py = { type: "label", category: "ui", description: "A simple text label for annotations and notes in your patch.", inlets: [], outlets: [], tags: ["annotation", "label", "text", "ui"] }, ky = { type: "title", category: "ui", description: "A resizable title label with centered text for diagrams and presentations.", inlets: [], outlets: [], tags: ["diagram", "label", "presentation", "text", "title", "ui"] }, Cy = { type: "link", category: "ui", description: "A clickable hyperlink button that opens a URL in a new tab.", inlets: [], outlets: [], tags: ["button", "hyperlink", "link", "ui", "url"] }, Ry = { type: "meter~", category: "audio", description: "Audio level meter display", inlets: [{ id: "audio", type: "signal", description: "Audio signal to measure", handle: { handleType: "audio" } }], outlets: [{ id: "level", description: "Current RMS level (0-1)", handle: { handleType: "message" }, messages: [{ schema: n.Number(), description: "RMS amplitude level" }] }], tags: ["audio", "meter", "level", "monitoring", "visualization"] }, to = o("goto", { step: n.Number() }), no = o("setStep", { track: n.Number(), step: n.Number(), on: n.Boolean() }), so = o("setVelocity", { track: n.Number(), values: n.Array(n.Number()) }), io = o("setVelocity", { track: n.Number(), step: n.Number(), value: n.Number() }), ao = o("setPattern", { track: n.Number(), pattern: n.Array(n.Boolean()) }), oo = o("clear", { track: n.Number() }), ro = m("fill"), co = o("fill", { track: n.Number() }), lo = m("random"), uo = o("rotate", { track: n.Number(), amount: n.Number() }), po = m("mute"), mo = m("unmute"), go = o("setSwing", { value: n.Number() }), ho = o("setOutputMode", { value: n.Union([n.Literal("bang"), n.Literal("value"), n.Literal("audio"), n.Literal("index"), n.Literal("midi")]) }), yo = o("setOutletMode", { value: n.Union([n.Literal("multi"), n.Literal("single")]) }), fo = o("setClockMode", { value: n.Union([n.Literal("auto"), n.Literal("manual")]) }), bo = o("setStepCount", { value: n.Number() }), Ly = o("set", { time: n.Number(), value: n.Number({ minimum: 0, maximum: 1 }) }), My = o("noteOn", { note: n.Number(), index: n.Number(), velocity: n.Number({ minimum: 0, maximum: 1 }) }), jy = o("noteOn", { note: n.Number(), index: n.Number(), velocity: n.Number({ minimum: 0, maximum: 1 }), time: n.Number() }), Mf = { bang: O.bang, reset: O.reset, goto: r(to), mute: r(po), unmute: r(mo), setStep: r(no), setVelocityAll: r(so), setVelocityOne: r(io), setPattern: r(ao), clearTrack: r(oo), clearAll: O.clear, fillTrack: r(co), fillAll: r(ro), randomAll: r(lo), rotate: r(uo), setSwing: r(go), setOutputMode: r(ho), setOutletMode: r(yo), setClockMode: r(fo), setStepCount: r(bo) }, Dy = { type: "sequencer", category: "control", description: "DAW-style step sequencer with up to 8 tracks. Runs synced to the transport or advances one step per bang.", inlets: [{ id: "message", description: "Control inlet", handle: { handleType: "message" }, messages: [{ schema: po, description: "Silence all output" }, { schema: mo, description: "Restore output after mute" }, { schema: go, description: "Set swing amount (0\u2013100)" }, { schema: ho, description: "Set output mode (multi: bang/value/audio, single: index/midi/audio)" }, { schema: yo, description: "Set outlet mode (multi = one outlet per track, single = one merged outlet)" }, { schema: fo, description: "Set clock mode (auto / manual)" }, { schema: bo, description: "Set number of steps (4, 8, 12, 16, 24, or 32)" }, { schema: g, description: "Advance one step (manual)" }, { schema: fe, description: "Set step to 0 (manual)" }, { schema: to, description: "Jump to a step (manual)" }, { schema: no, description: "Set a specific step on or off" }, { schema: io, description: "Set velocity for a single step (0\u20131)" }, { schema: so, description: "Set velocity for every step of a track" }, { schema: ao, description: "Replace the on/off pattern for a track" }, { schema: rs, description: "Clear all steps" }, { schema: ro, description: "Turn on all steps" }, { schema: lo, description: "Randomize on/off and velocity" }, { schema: oo, description: "Clear all steps for a track" }, { schema: co, description: "Turn on all steps for a track" }, { schema: uo, description: "Rotate a track's pattern by N steps (positive = right/later, negative = left/earlier)" }] }], outlets: [{ id: "track", description: "Multi-outlet mode: per-track trigger outlet (one per track, numbered 0\u20137). Single-outlet mode: one merged outlet.", messages: [{ schema: g, description: "Multi/bang: fired on active step" }, { schema: n.Number({ minimum: 0, maximum: 1 }), description: "Multi/value: velocity value 0\u20131" }, { schema: Ly, description: "Multi/audio: lookahead-scheduled event with Web Audio time and velocity" }, { schema: n.Number({ minimum: 0 }), description: "Single/index: track index (0\u2013N)" }, { schema: My, description: "Single/midi: noteOn with note (= track index), index, and velocity" }, { schema: jy, description: "Single/audio: noteOn with note, index, velocity, and Web Audio time" }] }], tags: ["sequencer", "step", "rhythm", "transport", "trigger", "control", "beat", "drum"], handlePatterns: { outlet: { template: "out-{index}", description: "Per-track outlet (out-0, out-1, ..., out-7). No type prefix." } } }, Uy = { type: "bytebeat~", category: "audio", description: "Bytebeat algorithmic synthesis", inlets: [{ id: "control", type: "message", description: "Control messages", handle: { handleType: "message" }, messages: [{ schema: n.Object({ type: n.Literal("play") }), description: "Start playback" }, { schema: n.Object({ type: n.Literal("stop") }), description: "Stop and reset t=0" }, { schema: n.Object({ type: n.Literal("pause") }), description: "Pause playback (keep t)" }, { schema: n.Object({ type: n.Literal("bang") }), description: "Evaluate expression and play" }, { schema: n.Object({ type: n.Literal("setType"), value: n.Union([n.Literal("bytebeat"), n.Literal("floatbeat"), n.Literal("signedBytebeat")]) }), description: "Set bytebeat type" }, { schema: n.Object({ type: n.Literal("setSyntax"), value: n.Union([n.Literal("infix"), n.Literal("postfix"), n.Literal("glitch"), n.Literal("function")]) }), description: "Set expression syntax" }, { schema: n.Object({ type: n.Literal("setSampleRate"), value: n.Number() }), description: "Set sample rate" }] }], outlets: [{ id: "audio", type: "signal", description: "Audio output", handle: { handleType: "audio" } }], tags: ["audio", "generator", "synthesis", "algorithmic", "bytebeat"] }, Ey = { type: "projmap", category: "video", description: "Projection mapper \u2014 warps video textures onto N-point polygon surfaces", inlets: [], outlets: [{ id: "video-out-0", description: "Composited video output", handle: { handleType: "video", handleId: "0" } }], hasDynamicOutlets: false, handlePatterns: { inlet: { template: "video-in-{index}", handleType: "video", description: "Video source for surface N (0-indexed, one inlet per surface)" } }, tags: ["video", "projection", "mapping", "warp", "surface", "visual"] }, qy = { type: "ngea", category: "music", description: "Microtonal tuning from the Network Gong Ensemble Archive (NGEA)", inlets: [{ id: "index", description: "Gong index (0-based) or bang to output current; set tuning name", handle: { handleType: "message" }, messages: [{ schema: n.Number(), description: "Output gong data at this index (0-based)" }, { schema: g, description: "Output gong data at current index" }, { schema: n.String(), description: "Switch to a named tuning (partial match)" }] }], outlets: [{ id: "gong", description: "Gong data for the triggered index", handle: { handleType: "message", handleId: 0 }, messages: [{ schema: n.Object({ type: n.Literal("gong"), index: n.Number(), id: n.String(), freq: n.Number(), cents: n.Number(), accumulate: n.Number() }), description: "Gong data: index, id, freq (Hz), cents interval, accumulate (cents from root)" }] }, { id: "scale", description: "Full tuning scale info (bang on inlet to trigger)", handle: { handleType: "message", handleId: 1 }, messages: [{ schema: n.Object({ type: n.Literal("scale"), name: n.String(), location: n.String(), freqs: n.Array(n.Number()), cents: n.Array(n.Number()) }), description: "Scale info: name, location, freqs[], cents[]" }] }], tags: ["music", "tuning", "microtonal", "gong", "world", "frequency", "scale"] }, mt = n.Object({ x: n.Number(), y: n.Number(), z: n.Number() }), vs = n.Object({ x: n.Number(), y: n.Number(), z: n.Number(), visibility: n.Number() }), Io = n.Object({ originX: n.Number(), originY: n.Number(), width: n.Number(), height: n.Number() }), By = n.Object({ type: n.Literal("output"), hands: n.Array(n.Object({ handedness: n.Union([n.Literal("Left"), n.Literal("Right")]), score: n.Number(), landmarks: n.Array(mt), worldLandmarks: n.Array(mt) })), timestamp: n.Number() }), zy = n.Object({ type: n.Literal("output"), poses: n.Array(n.Object({ landmarks: n.Array(vs), worldLandmarks: n.Array(vs) })), timestamp: n.Number() }), Vy = n.Object({ type: n.Literal("output"), faces: n.Array(n.Object({ landmarks: n.Optional(n.Array(mt)), blendshapes: n.Optional(n.Array(n.Object({ categoryName: n.String(), score: n.Number() }))), boundingBox: n.Optional(Io), score: n.Optional(n.Number()), keypoints: n.Optional(n.Array(n.Object({ x: n.Number(), y: n.Number(), label: n.Optional(n.String()) }))) })), timestamp: n.Number() }), Ky = n.Object({ type: n.Literal("output"), gestures: n.Array(n.Object({ gesture: n.String(), score: n.Number(), handedness: n.Union([n.Literal("Left"), n.Literal("Right")]), landmarks: n.Array(mt), worldLandmarks: n.Array(mt) })), timestamp: n.Number() }), Gy = n.Object({ type: n.Literal("output"), classifications: n.Array(n.Object({ label: n.String(), score: n.Number() })), timestamp: n.Number() }), Wy = n.Object({ type: n.Literal("output"), detections: n.Array(n.Object({ label: n.String(), score: n.Number(), boundingBox: Io })), timestamp: n.Number() }), Hy = n.Object({ type: n.Literal("output"), width: n.Number(), height: n.Number(), mask: n.Any(), maskType: n.Union([n.Literal("category"), n.Literal("confidence")]), timestamp: n.Number() }), qe = { id: "video", description: "Video input", handle: { handleType: "video" } }, Be = { id: "enable", description: "Enable/disable (bang toggles, 1/true enables, 0/false disables)", handle: { handleType: "message" }, messages: [{ schema: g, description: "Toggle enabled state" }, { schema: n.Boolean(), description: "Set enabled state directly" }, { schema: n.Number(), description: "0 disables, non-zero enables" }] }, _y = { type: "vision.hand", category: "vision", description: "Detect hand landmarks (21 points per hand) in real-time using MediaPipe", inlets: [qe, Be], outlets: [{ id: "result", description: "Hand tracking results", handle: { handleType: "message", handleId: "0" }, messages: [{ schema: By, description: "Hand landmarks and handedness for each detected hand" }] }], tags: ["mediapipe", "hand", "landmark", "gesture", "tracking", "ml", "vision", "camera"] }, Qy = { type: "vision.body", category: "vision", description: "Detect body pose landmarks (33 points) in real-time using MediaPipe", inlets: [qe, Be], outlets: [{ id: "result", description: "Pose estimation results", handle: { handleType: "message", handleId: "0" }, messages: [{ schema: zy, description: "Body pose landmarks with visibility scores for each detected person" }] }], tags: ["mediapipe", "body", "pose", "skeleton", "landmark", "tracking", "ml", "vision"] }, Xy = { type: "vision.face", category: "vision", description: "Detect face landmarks (478 points) or bounding boxes using MediaPipe", inlets: [qe, Be], outlets: [{ id: "result", description: "Face detection/landmark results", handle: { handleType: "message", handleId: "0" }, messages: [{ schema: Vy, description: "Face landmarks (478 pts), optional blendshapes, or bounding boxes (detect mode)" }] }], tags: ["mediapipe", "face", "landmark", "blendshape", "detection", "ml", "vision", "mesh"] }, Jy = { type: "vision.gesture", category: "vision", description: "Recognize hand gestures and landmarks using MediaPipe", inlets: [qe, Be], outlets: [{ id: "result", description: "Gesture recognition results", handle: { handleType: "message", handleId: "0" }, messages: [{ schema: Ky, description: "Recognized gesture, confidence score, handedness, and hand landmarks" }] }], tags: ["mediapipe", "gesture", "hand", "recognition", "landmark", "tracking", "ml", "vision", "camera"] }, Yy = { type: "vision.classify", category: "vision", description: "Classify the content of a video frame using MediaPipe EfficientNet", inlets: [qe, Be], outlets: [{ id: "result", description: "Image classification results", handle: { handleType: "message", handleId: "0" }, messages: [{ schema: Gy, description: "Top classification labels and confidence scores" }] }], tags: ["mediapipe", "classify", "image", "recognition", "label", "ml", "vision", "efficientnet"] }, Zy = { type: "vision.detect", category: "vision", description: "Detect objects with bounding boxes in a video frame using MediaPipe EfficientDet", inlets: [qe, Be], outlets: [{ id: "result", description: "Object detection results", handle: { handleType: "message", handleId: "0" }, messages: [{ schema: Wy, description: "Detected objects with labels, scores, and bounding boxes" }] }], tags: ["mediapipe", "detect", "object", "bounding box", "recognition", "ml", "vision", "efficientdet"] }, ef = { type: "vision.segment", category: "vision", description: "Segment people from the background, outputting a greyscale mask video using MediaPipe", inlets: [qe, Be], outlets: [{ id: "mask", description: "Greyscale segmentation mask video (white=person, black=background)", handle: { handleType: "video", handleId: "0" } }, { id: "data", description: 'Raw mask data (when "Output Message" is enabled in settings)', handle: { handleType: "message", handleId: "0" }, messages: [{ schema: Hy, description: "Raw mask pixel data as Uint8Array (category) or Float32Array (confidence)" }] }], hasDynamicOutlets: true, tags: ["mediapipe", "segment", "background", "mask", "person", "matting", "ml", "vision"] }, tf = { "-~": { type: "-~", category: "audio", description: "Subtract right signal from left signal", inlets: [{ id: "left", type: "signal", description: "Left signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "right", type: "signal", description: "Right signal input", handle: { handleType: "audio", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Difference of left \u2212 right", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "subtract", "signal"] }, "*~": { type: "*~", category: "audio", description: "Multiply two audio signals", inlets: [{ id: "left", type: "signal", description: "Left signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "right", type: "signal", description: "Right signal input", handle: { handleType: "audio", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Product of left \xD7 right", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "multiply", "ring modulation", "signal"] }, "/~": { type: "/~", category: "audio", description: "Divide left signal by right signal", inlets: [{ id: "left", type: "signal", description: "Left signal input (dividend)", handle: { handleType: "audio", handleId: 0 } }, { id: "right", type: "signal", description: "Right signal input (divisor)", handle: { handleType: "audio", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Quotient of left \xF7 right", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "divide", "signal"] }, "+~": { type: "+~", category: "audio", description: "Add two audio signals", inlets: [{ id: "left", type: "signal", description: "Left signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "right", type: "signal", description: "Right signal input", handle: { handleType: "audio", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Sum of left + right", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "add", "sum", "signal"] }, "<~": { type: "<~", category: "audio", description: "Output 1 if left < right, else 0", inlets: [{ id: "left", type: "signal", description: "Left signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "right", type: "signal", description: "Right signal input", handle: { handleType: "audio", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "1 if left < right, else 0", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "compare", "less", "gate", "signal"] }, ">~": { type: ">~", category: "audio", description: "Output 1 if left > right, else 0", inlets: [{ id: "left", type: "signal", description: "Left signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "right", type: "signal", description: "Right signal input", handle: { handleType: "audio", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "1 if left > right, else 0", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "compare", "greater", "gate", "signal"] }, "abs~": { type: "abs~", category: "audio", description: "Absolute value of signal", inlets: [{ id: "signal", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Absolute value output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "absolute", "rectify", "signal"] }, adsr: { type: "adsr", category: "control", description: "ADSR envelope generator with trigger and parameter control inlets", inlets: [{ id: "trigger", type: "message", description: "Trigger the ADSR envelope. 0 = release, 1 = attack.", messages: [{ schema: n.Union([n.Literal(1), n.Literal(true)]), description: "Trigger attack\u2192decay\u2192sustain" }, { schema: n.Union([n.Literal(0), n.Literal(false)]), description: "Trigger release" }], handle: { handleType: "message", handleId: 0 } }, { id: "peak", type: "float", description: "Peak value", messages: [{ schema: n.Number(), description: "Peak level (default: 1)" }], handle: { handleType: "message", handleId: 1 } }, { id: "attack", type: "float", description: "Attack time in ms", messages: [{ schema: n.Number(), description: "Attack time in ms (default: 100)" }], handle: { handleType: "message", handleId: 2 } }, { id: "decay", type: "float", description: "Decay time in ms", messages: [{ schema: n.Number(), description: "Decay time in ms (default: 200)" }], handle: { handleType: "message", handleId: 3 } }, { id: "sustain", type: "float", description: "Sustain value", messages: [{ schema: n.Number(), description: "Sustain level (default: 0.5)" }], handle: { handleType: "message", handleId: 4 } }, { id: "release", type: "float", description: "Release time in ms", messages: [{ schema: n.Number(), description: "Release time in ms (default: 300)" }], handle: { handleType: "message", handleId: 5 } }], outlets: [{ id: "out", type: "message", description: "ADSR envelope message", messages: [{ schema: n.Any(), description: "Scheduled parameter messages" }], handle: { handleType: "message", handleId: 0 } }], tags: ["adsr"] }, "adsr~": { type: "adsr~", category: "audio", description: "Sample-accurate ADSR envelope generator", inlets: [{ id: "trigger", type: "message", description: "Gate on (1) / off (0)", messages: [{ schema: n.Number(), description: "Gate: 1 = on (attack), 0 = off (release)" }, { schema: n.Object({ type: n.Literal("bang") }), description: "Trigger attack" }], handle: { handleType: "message", handleId: 0 } }, { id: "attack", type: "float", description: "Attack time in ms", messages: [{ schema: n.Number(), description: "Attack time in milliseconds" }], handle: { handleType: "message", handleId: 1 } }, { id: "decay", type: "float", description: "Decay time in ms", messages: [{ schema: n.Number(), description: "Decay time in milliseconds" }], handle: { handleType: "message", handleId: 2 } }, { id: "sustain", type: "float", description: "Sustain level (0-1)", messages: [{ schema: n.Number(), description: "Sustain level (0-1)" }], handle: { handleType: "message", handleId: 3 } }, { id: "release", type: "float", description: "Release time in ms", messages: [{ schema: n.Number(), description: "Release time in milliseconds" }], handle: { handleType: "message", handleId: 4 } }], outlets: [{ id: "out", type: "signal", description: "Envelope signal (0-1)", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "envelope", "adsr", "gate", "signal"] }, "ai.stt": { type: "ai.stt", category: "audio", description: "Transcribe speech to text using Gemini AI", inlets: [{ id: "in", type: "signal", description: "Audio input to transcribe", handle: { handleType: "audio", handleId: 0 } }, { id: "message", type: "message", description: "Control messages", messages: [{ schema: n.Object({ type: n.Literal("listen") }), description: "Start recording" }, { schema: n.Object({ type: n.Literal("stop") }), description: "Stop recording and transcribe" }, { schema: n.Object({ type: n.Literal("bang") }), description: "Toggle recording on/off" }, { schema: n.String(), description: "Set language hint and start" }, { schema: n.Object({ type: n.Literal("setLanguage"), value: n.String() }), description: "Set BCP-47 language hint" }, { schema: n.Object({ type: n.Literal("setPrompt"), value: n.String() }), description: "Set transcription context hint" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "msg", type: "message", description: "Transcribed text output", handle: { handleType: "message", handleId: 0 } }], tags: ["processors", "ai.stt"] }, "allpass~": { type: "allpass~", category: "audio", description: "All-pass filter passes all frequencies but shifts their phase", inlets: [{ id: "in", type: "signal", description: "Signal to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "float", description: "Center frequency in Hz", messages: [{ schema: n.Number({ minimum: 0, maximum: 22050 }), description: "Center frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "Q", type: "float", description: "Quality factor", messages: [{ schema: n.Number({ minimum: 1e-4, maximum: 1e3 }), description: "Quality factor" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "allpass"] }, "bandpass~": { type: "bandpass~", category: "audio", description: "Band-pass filter allows frequencies within a range around center frequency to pass through", inlets: [{ id: "in", type: "signal", description: "Signal to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "float", description: "Center frequency in Hz", messages: [{ schema: n.Number({ minimum: 0, maximum: 22050 }), description: "Center frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "Q", type: "float", description: "Quality factor (bandwidth)", messages: [{ schema: n.Number({ minimum: 1e-4, maximum: 1e3 }), description: "Quality factor (bandwidth)" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "bandpass"] }, "bang~": { type: "bang~", category: "audio", description: "Emit bang on audio onset", inlets: [{ id: "signal", type: "signal", description: "Audio input to monitor" }], outlets: [{ id: "bang", type: "bang", description: "Bang on audio onset", handle: { handleType: "message", handleId: 0 } }], tags: ["audio", "bang", "trigger", "onset", "signal"] }, beat: { type: "beat", category: "control", description: "Outputs the current beat on each beat change", inlets: [], outlets: [{ id: "out", type: "int", description: "Current beat in measure (0 to beatsPerBar-1)", handle: { handleType: "message", handleId: 0 } }], tags: ["timing", "transport", "control"] }, "beat~": { type: "beat~", category: "audio", description: "Beat-synced ramp (0 to 1), driven by transport BPM", inlets: [{ id: "multiply", type: "float", description: "Beat frequency multiplier (0.25 = per bar, 1 = per beat, 2 = 8ths)", messages: [{ schema: n.Number(), description: "Beat frequency multiplier" }], isAudioParam: true, handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Beat phase ramp (0 to 1)", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "oscillator", "beat", "transport", "clock", "signal"] }, "biquad~": { type: "biquad~", category: "audio", description: "2nd order filter with direct coefficient control", inlets: [{ id: "signal", type: "signal", description: "Audio input to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "ff1", type: "float", description: "Feedforward coefficient 1 (b0)", messages: [{ schema: n.Number(), description: "Feedforward coef 1 (current sample)" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "ff2", type: "float", description: "Feedforward coefficient 2 (b1)", messages: [{ schema: n.Number(), description: "Feedforward coef 2 (x[n-1])" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }, { id: "ff3", type: "float", description: "Feedforward coefficient 3 (b2)", messages: [{ schema: n.Number(), description: "Feedforward coef 3 (x[n-2])" }], isAudioParam: true, handle: { handleType: "message", handleId: 3 } }, { id: "fb1", type: "float", description: "Feedback coefficient 1 (a1)", messages: [{ schema: n.Number(), description: "Feedback coef 1 (y[n-1])" }], isAudioParam: true, handle: { handleType: "message", handleId: 4 } }, { id: "fb2", type: "float", description: "Feedback coefficient 2 (a2)", messages: [{ schema: n.Number(), description: "Feedback coef 2 (y[n-2])" }], isAudioParam: true, handle: { handleType: "message", handleId: 5 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "filter", "biquad", "iir", "coefficients", "custom"] }, "bytebeat~": { type: "bytebeat~", category: "audio", description: "Bytebeat algorithmic synthesis", inlets: [{ id: "control", type: "message", description: "Control messages", messages: [{ schema: n.Object({ type: n.Literal("play") }), description: "Start playback" }, { schema: n.Object({ type: n.Literal("stop") }), description: "Stop and reset t=0" }, { schema: n.Object({ type: n.Literal("pause") }), description: "Pause playback (keep t)" }, { schema: n.Object({ type: n.Literal("bang") }), description: "Evaluate expression and play" }, { schema: n.Object({ type: n.Literal("setType"), value: n.Union([n.Literal("bytebeat"), n.Literal("floatbeat"), n.Literal("signedBytebeat")]) }), description: "Set bytebeat type" }, { schema: n.Object({ type: n.Literal("setSyntax"), value: n.Union([n.Literal("infix"), n.Literal("postfix"), n.Literal("glitch"), n.Literal("function")]) }), description: "Set expression syntax" }, { schema: n.Object({ type: n.Literal("setSampleRate"), value: n.Number() }), description: "Set sample rate" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "generator", "synthesis", "algorithmic", "bytebeat"] }, "chuck~": { type: "chuck~", category: "audio", description: "ChucK strongly-timed concurrent audio programming", inlets: [{ id: "in", type: "signal", description: "Audio input (accessible via adc in ChucK code)", handle: { handleType: "audio", handleId: 0 } }, { id: "msg", type: "message", description: "Control input (code, bang, stop)", messages: [{ schema: n.Any(), description: "Control input (code, bang, stop)" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }, { id: "msg", type: "message", description: "Message output (print)", handle: { handleType: "message", handleId: 1 } }], tags: ["processors", "audio", "chuck"] }, clip: { type: "clip", category: "control", description: "Clamp a number to a min/max range", inlets: [{ id: "value", type: "message", description: "Value to clip", messages: [{ schema: n.Number(), description: "Clip this number to the min/max range" }], handle: { handleType: "message", handleId: 0 } }, { id: "min", type: "float", description: "Minimum value (lower bound)", messages: [{ schema: n.Number(), description: "Minimum value (lower bound)" }], handle: { handleType: "message", handleId: 1 } }, { id: "max", type: "float", description: "Maximum value (upper bound)", messages: [{ schema: n.Number(), description: "Maximum value (upper bound)" }], handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "float", description: "Clipped value output", handle: { handleType: "message", handleId: 0 } }], tags: ["math", "clamp", "limit", "range", "control"] }, "clip~": { type: "clip~", category: "audio", description: "Clamp signal to a range", inlets: [{ id: "signal", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "min", type: "float", description: "Minimum value", messages: [{ schema: n.Number(), description: "Minimum clamp value" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "max", type: "float", description: "Maximum value", messages: [{ schema: n.Number(), description: "Maximum clamp value" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Clamped signal output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "clip", "clamp", "limit", "signal"] }, "comb~": { type: "comb~", category: "audio", description: "Comb filter", inlets: [{ id: "signal", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "delay", type: "float", description: "Delay time in ms", messages: [{ schema: n.Number(), description: "Delay time in milliseconds" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "feedback", type: "float", description: "Feedback amount (-0.999 to 0.999)", messages: [{ schema: n.Number(), description: "Feedback coefficient" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "filter", "comb", "delay", "karplus-strong", "flanger"] }, "compressor~": { type: "compressor~", category: "audio", description: "Dynamic range compressor for audio signals", inlets: [{ id: "in", type: "signal", description: "Signal to compress", handle: { handleType: "audio", handleId: 0 } }, { id: "threshold", type: "float", description: "The decibel value above which compression starts", messages: [{ schema: n.Number({ minimum: -200, maximum: 0 }), description: "The decibel value above which compression starts" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "knee", type: "float", description: "Decibel range above threshold for smooth transition", messages: [{ schema: n.Number({ minimum: 0, maximum: 40 }), description: "Decibel range above threshold for smooth transition" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }, { id: "ratio", type: "float", description: "Amount of dB change in input for 1 dB change in output", messages: [{ schema: n.Number({ minimum: 0, maximum: 20 }), description: "Amount of dB change in input for 1 dB change in output" }], isAudioParam: true, handle: { handleType: "message", handleId: 3 } }, { id: "attack", type: "float", description: "Time in seconds to reduce gain by 10dB", messages: [{ schema: n.Number({ minimum: 0, maximum: 1 }), description: "Time in seconds to reduce gain by 10dB" }], isAudioParam: true, handle: { handleType: "message", handleId: 4 } }, { id: "release", type: "float", description: "Time in seconds to increase gain by 10dB", messages: [{ schema: n.Number({ minimum: 0, maximum: 1 }), description: "Time in seconds to increase gain by 10dB" }], isAudioParam: true, handle: { handleType: "message", handleId: 5 } }], outlets: [{ id: "out", type: "signal", description: "Compressed signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "compressor"] }, "convolver~": { type: "convolver~", category: "audio", description: "ConvolverNode for reverb and acoustic modeling using impulse responses", inlets: [{ id: "in", type: "signal", description: "", handle: { handleType: "audio", handleId: 0 } }, { id: "buffer", type: "signal", description: "receives an AudioBuffer for impulse response", handle: { handleType: "audio", handleId: 1 } }, { id: "normalize", type: "bool", description: "Whether to normalize the impulse response", messages: [{ schema: n.Boolean(), description: "Whether to normalize the impulse response" }], handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "convolver"] }, "cos~": { type: "cos~", category: "audio", description: "Cosine waveshaper (phasor to cosine)", inlets: [{ id: "phase", type: "signal", description: "Phase input (0-1 for full cycle)", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "cos(2\u03C0 \xD7 input)", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "cosine", "waveshaper", "oscillator", "phase"] }, "csound~": { type: "csound~", category: "audio", description: "Csound synthesis and audio processing", inlets: [{ id: "in", type: "signal", description: "Audio signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "msg", type: "message", description: "Control messages", messages: [{ schema: n.Any(), description: "Control messages" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "csound"] }, debounce: { type: "debounce", category: "control", description: "Waits for quiet period before emitting last value", inlets: [{ id: "message", type: "message", description: "Message to debounce", messages: [{ schema: n.Any(), description: "Message to debounce" }], handle: { handleType: "message", handleId: 0 } }, { id: "time", type: "int", description: "Debounce time in ms", messages: [{ schema: n.Integer(), description: "Debounce time in ms" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "message", description: "", handle: { handleType: "message", handleId: 0 } }], tags: ["debounce"] }, delay: { type: "delay", category: "control", description: "Delays messages by a specified time", inlets: [{ id: "message", type: "message", description: "Message to delay", messages: [{ schema: n.Any(), description: "Message to delay" }], handle: { handleType: "message", handleId: 0 } }, { id: "cmd", type: "message", description: "Set delay time or control pending messages.", messages: [{ schema: n.Number(), description: "Set delay time in ms" }, { schema: n.Object({ type: n.Literal("bang") }), description: "Re-send last received value after delay" }, { schema: n.Object({ type: n.Literal("clear") }), description: "Cancel all pending messages" }, { schema: n.Object({ type: n.Literal("flush") }), description: "Output all pending messages immediately" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "message", description: "", handle: { handleType: "message", handleId: 0 } }], tags: ["delay"] }, "delay~": { type: "delay~", category: "audio", description: "Creates a time-based delay effect on audio", inlets: [{ id: "in", type: "signal", description: "Audio signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "time", type: "float", description: "Delay time in milliseconds (max 1000ms)", messages: [{ schema: n.Number(), description: "Delay time in milliseconds (max 1000ms)" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Delayed audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "delay"] }, "delread~": { type: "delread~", category: "audio", description: "Read from a named delay line at fixed delay time", inlets: [{ id: "name", type: "string", description: "Delay line name", messages: [{ schema: n.String(), description: "Set delay line name" }] }, { id: "delay", type: "float", description: "Delay time in ms", messages: [{ schema: n.Number(), description: "Delay time in milliseconds" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Delayed signal output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "delay", "buffer", "read", "effect"] }, "delread4~": { type: "delread4~", category: "audio", description: "Read from delay line with 4-point interpolation for variable delays", inlets: [{ id: "delay", type: "signal", description: "Delay time in ms", handle: { handleType: "audio", handleId: 0 } }, { id: "name", type: "string", description: "Delay line name", messages: [{ schema: n.String(), description: "Set delay line name" }] }], outlets: [{ id: "out", type: "signal", description: "Delayed signal output (interpolated)", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "delay", "buffer", "read", "interpolation", "chorus", "flanger", "effect"] }, "delwrite~": { type: "delwrite~", category: "audio", description: "Write to a named delay line", inlets: [{ id: "signal", type: "signal", description: "Audio input to write to delay line", handle: { handleType: "audio", handleId: 0 } }, { id: "control", type: "message", description: "Control messages", messages: [{ schema: n.Object({ type: n.Literal("clear") }), description: "Clear the delay line (fill with zeros)" }], handle: { handleType: "message", handleId: 1 } }, { id: "name", type: "string", description: "Delay line name", messages: [{ schema: n.String(), description: "Set delay line name" }] }, { id: "size", type: "float", description: "Delay line size in ms", messages: [{ schema: n.Number(), description: "Size in milliseconds" }] }], outlets: [], tags: ["audio", "delay", "buffer", "write", "effect"] }, "dsp~": { type: "dsp~", category: "audio", description: "User-programmable DSP processor with dynamic inlets/outlets", inlets: [{ id: "in", type: "signal", description: "Audio signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "code", type: "string", description: "JavaScript code for audio processing", messages: [{ schema: n.String(), description: "JavaScript code for audio processing" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Processed audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "dsp"] }, "elem~": { type: "elem~", category: "audio", description: "Elementary Audio DSP synthesis and processing node", inlets: [{ id: "in", type: "signal", description: "Audio signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "code", type: "string", description: "Elementary Audio code to execute", messages: [{ schema: n.String(), description: "Elementary Audio code to execute" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "elem"] }, "env~": { type: "env~", category: "audio", description: "RMS envelope follower", inlets: [{ id: "signal", type: "signal", description: "Audio input to analyze", handle: { handleType: "audio", handleId: 0 } }, { id: "window", type: "float", description: "Analysis window size in samples", messages: [{ schema: n.Number(), description: "Window size in samples" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "rms", type: "message", description: "RMS amplitude value", handle: { handleType: "message", handleId: 0 } }], tags: ["audio", "envelope", "follower", "rms", "analysis"] }, "exp~": { type: "exp~", category: "audio", description: "Exponential function (e^x)", inlets: [{ id: "signal", type: "signal", description: "Exponent value", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "e^x output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "exp", "exponential", "signal"] }, "expr~": { type: "expr~", category: "audio", description: "Evaluates mathematical expressions on audio samples", inlets: [{ id: "s", type: "signal", description: "Audio signal input (use s1-s9 in expression for multiple inputs)", handle: { handleType: "audio", handleId: 0 } }, { id: "expression", type: "string", description: "Mathematical expression (s1-s9=signal inputs, s=alias for s1, i=index, t=time, $1-$9=control values)", messages: [{ schema: n.String(), description: "Mathematical expression (s1-s9=signal inputs, s=alias for s1, i=index, t=time, $1-$9=control values)" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Expression result as audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "expr"] }, f: { type: "float", category: "control", description: "Float accumulator (hot inlet sets and outputs, cold inlet sets only)", inlets: [{ id: "hot", type: "message", description: "Set value and output (or bang to output current)", messages: [{ schema: n.Any(), description: "Set value and output (or bang to output current)" }], handle: { handleType: "message", handleId: 0 } }, { id: "cold", type: "float", description: "Set value without output", messages: [{ schema: n.Number(), description: "Set value without output" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "float", description: "Float output", handle: { handleType: "message", handleId: 0 } }], tags: ["float"] }, "fexpr~": { type: "fexpr~", category: "audio", description: "Filter expression evaluator with sample history access for FIR/IIR filters", inlets: [{ id: "x1", type: "signal", description: "Audio signal input", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Expression result as audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "fexpr"] }, "fft~": { type: "fft~", category: "audio", description: "Analyzes audio signals and provides frequency and amplitude data", inlets: [{ id: "in", type: "signal", description: "Audio signal to analyze", handle: { handleType: "audio", handleId: 0 } }, { id: "fftSize", type: "int", description: "Size of the FFT bin. Must be a power of 2, from 32 to 32768.", messages: [{ schema: n.Integer(), description: "Size of the FFT bin. Must be a power of 2, from 32 to 32768." }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "analysis", type: "analysis", description: "Marker to indicate where to get the FFT data from.", handle: { handleType: "analysis", handleId: 0 } }], tags: ["processors", "audio", "fft"] }, float: { type: "float", category: "control", description: "Float accumulator (hot inlet sets and outputs, cold inlet sets only)", inlets: [{ id: "hot", type: "message", description: "Set value and output (or bang to output current)", messages: [{ schema: n.Any(), description: "Set value and output (or bang to output current)" }], handle: { handleType: "message", handleId: 0 } }, { id: "cold", type: "float", description: "Set value without output", messages: [{ schema: n.Number(), description: "Set value without output" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "float", description: "Float output", handle: { handleType: "message", handleId: 0 } }], tags: ["float"] }, "ftom~": { type: "ftom~", category: "audio", description: "Frequency to MIDI note conversion", inlets: [{ id: "freq", type: "signal", description: "Frequency in Hz", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "note", type: "signal", description: "MIDI note number (fractional)", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "midi", "frequency", "conversion", "pitch"] }, "gain~": { type: "gain~", category: "audio", description: "Amplify or attenuate audio signals", inlets: [{ id: "in", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "gain", type: "float", description: "Gain control", messages: [{ schema: n.Number(), description: "Gain value (1 = unity, >1 = amplify, <1 = attenuate)" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "gain", "volume", "amplifier"] }, "highpass~": { type: "highpass~", category: "audio", description: "High-pass filter allows frequencies above cutoff to pass through", inlets: [{ id: "in", type: "signal", description: "Signal to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "float", description: "Cutoff frequency in Hz", messages: [{ schema: n.Number({ minimum: 0, maximum: 22050 }), description: "Cutoff frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "Q", type: "float", description: "Quality factor (resonance)", messages: [{ schema: n.Number({ minimum: 1e-4, maximum: 1e3 }), description: "Quality factor (resonance)" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "highpass"] }, "highshelf~": { type: "highshelf~", category: "audio", description: "High shelf filter boosts or cuts frequencies above the cutoff frequency", inlets: [{ id: "in", type: "signal", description: "Signal to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "float", description: "Cutoff frequency in Hz", messages: [{ schema: n.Number({ minimum: 0, maximum: 22050 }), description: "Cutoff frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "gain", type: "float", description: "Gain in dB", messages: [{ schema: n.Number({ minimum: -40, maximum: 40 }), description: "Gain in dB" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "highshelf"] }, i: { type: "int", category: "control", description: "Integer accumulator (hot inlet sets and outputs, cold inlet sets only)", inlets: [{ id: "hot", type: "message", description: "Set value and output (or bang to output current)", messages: [{ schema: n.Any(), description: "Set value and output (or bang to output current)" }], handle: { handleType: "message", handleId: 0 } }, { id: "cold", type: "int", description: "Set value without output", messages: [{ schema: n.Integer(), description: "Set value without output" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "int", description: "Integer output", handle: { handleType: "message", handleId: 0 } }], tags: ["int"] }, int: { type: "int", category: "control", description: "Integer accumulator (hot inlet sets and outputs, cold inlet sets only)", inlets: [{ id: "hot", type: "message", description: "Set value and output (or bang to output current)", messages: [{ schema: n.Any(), description: "Set value and output (or bang to output current)" }], handle: { handleType: "message", handleId: 0 } }, { id: "cold", type: "int", description: "Set value without output", messages: [{ schema: n.Integer(), description: "Set value without output" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "int", description: "Integer output", handle: { handleType: "message", handleId: 0 } }], tags: ["int"] }, kv: { type: "kv", category: "control", description: "Persistent key-value storage", inlets: [{ id: "command", type: "message", description: "Storage commands", messages: [{ schema: n.Object({ type: n.Literal("get"), key: n.String() }), description: "Get value by key" }, { schema: n.Object({ type: n.Literal("set"), key: n.String(), value: n.Any() }), description: "Set value at key" }, { schema: n.Object({ type: n.Literal("delete"), key: n.String() }), description: "Delete key" }, { schema: n.Object({ type: n.Literal("keys") }), description: "List all keys" }, { schema: n.Object({ type: n.Literal("clear") }), description: "Clear all keys" }, { schema: n.Object({ type: n.Literal("has"), key: n.String() }), description: "Check if key exists" }, { schema: n.Object({ type: n.Literal("setStore"), value: n.String() }), description: "Set store name" }], handle: { handleType: "message", handleId: 0 } }, { id: "store", type: "string", description: "Store name (optional)", messages: [{ schema: n.Optional(n.String()), description: "Shared store when using same store name. If empty, it becomes a local store." }] }], outlets: [{ id: "result", type: "message", description: "Operation result", messages: [{ schema: n.Object({ type: n.Literal("get"), key: n.String(), value: n.Union([n.Any(), n.Null()]), found: n.Boolean() }), description: "Get result with value and found flag" }, { schema: n.Object({ type: n.Literal("set"), key: n.String(), ok: n.Literal(true) }), description: "Set confirmation" }, { schema: n.Object({ type: n.Literal("delete"), key: n.String(), deleted: n.Boolean() }), description: "Delete result with deleted flag" }, { schema: n.Object({ type: n.Literal("keys"), keys: n.Array(n.String()) }), description: "List of all keys" }, { schema: n.Object({ type: n.Literal("clear"), ok: n.Literal(true) }), description: "Clear confirmation" }, { schema: n.Object({ type: n.Literal("has"), key: n.String(), exists: n.Boolean() }), description: "Existence check result" }, { schema: n.Object({ type: n.Literal("setStore"), value: n.String(), ok: n.Literal(true) }), description: "Store name change confirmation" }, { schema: n.Object({ type: n.Literal("error"), message: n.String() }), description: "Error message" }], handle: { handleType: "message", handleId: 0 } }], tags: ["kv"] }, "latch~": { type: "latch~", category: "audio", description: "Sample-and-hold on bang", inlets: [{ id: "signal", type: "signal", description: "Input signal to sample", handle: { handleType: "audio", handleId: 0 } }, { id: "trigger", type: "bang", description: "Trigger sample", messages: [{ schema: n.Object({ type: n.Literal("bang") }), description: "Sample the current input value" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Held signal value", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "sample", "hold", "latch", "trigger"] }, "line~": { type: "line~", category: "audio", description: "Signal ramp generator", inlets: [{ id: "target", type: "message", description: "Target value (or [value, time] pair)", messages: [{ schema: n.Number(), description: "Jump to value immediately" }, { schema: n.Tuple([n.Number(), n.Number()]), description: "Ramp to [target, time_ms]" }, { schema: n.Object({ type: n.Literal("stop") }), description: "Stop current ramp" }], handle: { handleType: "message", handleId: 0 } }, { id: "time", type: "float", description: "Ramp time in ms (used by next target)", messages: [{ schema: n.Number(), description: "Ramp duration in milliseconds" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Ramped signal output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "ramp", "envelope", "signal", "line"] }, loadbang: { type: "loadbang", category: "control", description: "Sends a bang signal when the object is created", inlets: [], outlets: [{ id: "out", type: "bang", description: "Bang signal sent on load", handle: { handleType: "message", handleId: 0 } }], tags: ["loadbang"] }, "log~": { type: "log~", category: "audio", description: "Natural logarithm of signal", inlets: [{ id: "signal", type: "signal", description: "Audio input (positive values)", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Natural log output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "log", "logarithm", "signal"] }, "lowpass~": { type: "lowpass~", category: "audio", description: "Low-pass filter allows frequencies below cutoff to pass through", inlets: [{ id: "in", type: "signal", description: "Signal to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "float", description: "Cutoff frequency in Hz", messages: [{ schema: n.Number({ minimum: 0, maximum: 22050 }), description: "Cutoff frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "Q", type: "float", description: "Quality factor (resonance)", messages: [{ schema: n.Number({ minimum: 1e-4, maximum: 1e3 }), description: "Quality factor (resonance)" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "lowpass"] }, "lowshelf~": { type: "lowshelf~", category: "audio", description: "Low shelf filter boosts or cuts frequencies below the cutoff frequency", inlets: [{ id: "in", type: "signal", description: "Signal to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "float", description: "Cutoff frequency in Hz", messages: [{ schema: n.Number({ minimum: 0, maximum: 22050 }), description: "Cutoff frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "gain", type: "float", description: "Gain in dB", messages: [{ schema: n.Number({ minimum: -40, maximum: 40 }), description: "Gain in dB" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "lowshelf"] }, "max~": { type: "max~", category: "audio", description: "Per-sample maximum of two signals", inlets: [{ id: "left", type: "signal", description: "Left signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "right", type: "signal", description: "Right signal input", handle: { handleType: "audio", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Maximum of left and right", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "maximum", "signal"] }, "merge~": { type: "merge~", category: "audio", description: "Merges multiple mono channels into a single multichannel signal", inlets: [{ id: "in", type: "signal", description: "Channel inputs (dynamic based on channel count)", handle: { handleType: "audio", handleId: 0 } }, { id: "channels", type: "int", description: "Number of channels to merge (1-32)", messages: [{ schema: n.Integer({ minimum: 1, maximum: 32 }), description: "Number of channels to merge (1-32)" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Multichannel audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "merge"] }, metro: { type: "metro", category: "control", description: "Metronome that sends bang signals at regular intervals", inlets: [{ id: "message", type: "message", description: 'Control messages: "start", "stop", or bang to toggle', messages: [{ schema: n.Any(), description: 'Control messages: "start", "stop", or bang to toggle' }], handle: { handleType: "message", handleId: 0 } }, { id: "interval", type: "int", description: "Interval in milliseconds", messages: [{ schema: n.Integer(), description: "Interval in milliseconds" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "bang", description: "Bang signal sent at regular intervals", handle: { handleType: "message", handleId: 0 } }], tags: ["metro"] }, "mic~": { type: "mic~", category: "audio", description: "Captures audio from microphone with bang to restart", inlets: [{ id: "message", type: "message", description: "Control messages", messages: [{ schema: n.Object({ type: n.Literal("bang") }), description: "Restart microphone input" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Microphone audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["sources", "audio", "mic"] }, "min~": { type: "min~", category: "audio", description: "Per-sample minimum of two signals", inlets: [{ id: "left", type: "signal", description: "Left signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "right", type: "signal", description: "Right signal input", handle: { handleType: "audio", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Minimum of left and right", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "minimum", "signal"] }, mtof: { type: "mtof", category: "control", description: "Converts MIDI note values to frequency float values", inlets: [{ id: "note", type: "float", description: "MIDI note input", messages: [{ schema: n.Number({ minimum: 0, maximum: 127 }), description: "MIDI note value (0-127)" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "frequency", type: "float", description: "Frequency output in Hz", handle: { handleType: "message", handleId: 0 } }], tags: ["control", "midi", "frequency", "conversion"] }, "mtof~": { type: "mtof~", category: "audio", description: "MIDI note to frequency conversion", inlets: [{ id: "note", type: "signal", description: "MIDI note number (0-127)", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "freq", type: "signal", description: "Frequency in Hz", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "midi", "frequency", "conversion", "pitch"] }, "noise~": { type: "noise~", category: "audio", description: "White noise generator", inlets: [], outlets: [{ id: "out", type: "signal", description: "White noise output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "noise", "random", "signal"] }, "notch~": { type: "notch~", category: "audio", description: "Notch filter attenuates frequencies around the center frequency", inlets: [{ id: "in", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "float", description: "Center frequency", messages: [{ schema: n.Number(), description: "Center frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "Q", type: "float", description: "Width of the notch", messages: [{ schema: n.Number(), description: "Q value" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Filtered audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "filter", "notch", "eq"] }, "osc~": { type: "osc~", category: "audio", description: "Oscillator generates audio signals", inlets: [{ id: "frequency", type: "float", description: "Oscillator frequency in hertz", messages: [{ schema: n.Number(), description: "Oscillator frequency in hertz" }], isAudioParam: true, handle: { handleType: "message", handleId: 0 } }, { id: "type", type: "string", description: "Type of oscillator", messages: [{ schema: n.String(), description: "Type of oscillator" }], handle: { handleType: "message", handleId: 1 } }, { id: "detune", type: "float", description: "Detune amount in cents", messages: [{ schema: n.Number(), description: "Detune amount in cents" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Oscillator output", handle: { handleType: "audio", handleId: 0 } }], tags: ["sources", "audio", "osc"] }, "out~": { type: "out~", category: "audio", description: "Audio output to speakers", inlets: [{ id: "in", type: "signal", description: "Audio signal to output", handle: { handleType: "audio", handleId: 0 } }], outlets: [], tags: ["destinations", "audio", "out"] }, "pads~": { type: "pads~", category: "audio", description: "16-pad drum sampler. Trigger samples via MIDI noteOn/noteOff messages using the GM drum map (note 36 = pad 1).", inlets: [{ id: "message", type: "message", description: "Trigger pads or load samples", messages: [{ schema: n.Object({ type: n.Literal("noteOn"), note: n.Number(), velocity: n.Number() }), description: "Trigger pad by MIDI note" }, { schema: n.Object({ type: n.Literal("noteOff"), note: n.Number(), velocity: n.Number() }), description: "Release pad" }, { schema: n.Object({ type: n.Literal("load"), pad: n.Number(), src: n.String() }), description: "Load sample into pad slot" }, { schema: n.Number({ minimum: 0, maximum: 15 }), description: "Trigger pad by index with max velocity" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Stereo audio mix of all active pad voices", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "pads"] }, "pan~": { type: "pan~", category: "audio", description: "Controls stereo panning (-1 left to 1 right)", inlets: [{ id: "in", type: "signal", description: "Audio signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "pan", type: "float", description: "Pan value (-1 = left, 0 = center, 1 = right)", messages: [{ schema: n.Number(), description: "Pan value (-1 = left, 0 = center, 1 = right)" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Panned audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "pan"] }, "peaking~": { type: "peaking~", category: "audio", description: "Peaking filter allows peak EQ adjustments at a specific frequency", inlets: [{ id: "in", type: "signal", description: "Signal to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "float", description: "Center frequency in Hz", messages: [{ schema: n.Number({ minimum: 0, maximum: 22050 }), description: "Center frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "Q", type: "float", description: "Quality factor (width of peak)", messages: [{ schema: n.Number({ minimum: 1e-4, maximum: 1e3 }), description: "Quality factor (width of peak)" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }, { id: "gain", type: "float", description: "Gain in dB", messages: [{ schema: n.Number({ minimum: -40, maximum: 40 }), description: "Gain in dB" }], isAudioParam: true, handle: { handleType: "message", handleId: 3 } }], outlets: [{ id: "out", type: "signal", description: "Filtered signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "peaking"] }, "phasor~": { type: "phasor~", category: "audio", description: "Sawtooth ramp oscillator (0 to 1)", inlets: [{ id: "frequency", type: "float", description: "Frequency in Hz", messages: [{ schema: n.Number(), description: "Frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 0 } }, { id: "phase", type: "float", description: "Phase set (0 to 1)", messages: [{ schema: n.Number(), description: "Phase set value (0 to 1)" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Ramp output (0 to 1)", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "oscillator", "ramp", "phasor", "signal"] }, "pink~": { type: "pink~", category: "audio", description: "Pink noise generator (-3dB/octave)", inlets: [], outlets: [{ id: "out", type: "signal", description: "Pink noise signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "noise", "pink", "generator", "source"] }, "pow~": { type: "pow~", category: "audio", description: "Raise signal to a power", inlets: [{ id: "signal", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "exponent", type: "float", description: "Exponent", messages: [{ schema: n.Number(), description: "Exponent value" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Signal raised to power", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "power", "exponent", "signal"] }, "pulse~": { type: "pulse~", category: "audio", description: "Pulse wave oscillator with PWM", inlets: [{ id: "frequency", type: "float", description: "Frequency in Hz", messages: [{ schema: n.Number(), description: "Frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 0 } }, { id: "width", type: "float", description: "Pulse width (0-1)", messages: [{ schema: n.Number(), description: "Pulse width (0 = silent, 0.5 = square, 1 = silent)" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }, { id: "phase", type: "float", description: "Phase set (0 to 1)", messages: [{ schema: n.Number(), description: "Phase set value (0 to 1)" }], handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Pulse wave signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "oscillator", "pulse", "square", "pwm", "generator", "source"] }, queue: { type: "queue", category: "control", description: "FIFO queue \u2014 push messages in, bang to dequeue them out", inlets: [{ id: "push", type: "message", description: "Enqueue a message at the back of the queue", messages: [{ schema: n.Any(), description: "Enqueue a message at the back of the queue" }], handle: { handleType: "message", handleId: 0 } }, { id: "cmd", type: "message", description: "Bang to dequeue front item; send clear to empty; send size to get count", messages: [{ schema: n.Object({ type: n.Literal("bang") }), description: "Dequeue front item and output" }, { schema: n.Object({ type: n.Literal("clear") }), description: "Empty the queue" }, { schema: n.Object({ type: n.Literal("size") }), description: "Output current queue size" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "message", description: "Dequeued item, or size count", handle: { handleType: "message", handleId: 0 } }], tags: ["queue"] }, r: { type: "recv", category: "control", description: "Receive messages from a named channel", inlets: [{ id: "channel", type: "string", description: "Channel name to receive from", messages: [{ schema: n.String(), description: "Channel name" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "message", description: "Messages received from the channel", handle: { handleType: "message", handleId: 0 } }], tags: ["control", "routing", "channel", "wireless"] }, "r~": { type: "recv~", category: "audio", description: "Receive audio from a named channel", inlets: [{ id: "channel", type: "string", description: "Channel name", messages: [{ schema: n.String(), description: "Channel name" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "routing", "channel", "wireless"] }, recv: { type: "recv", category: "control", description: "Receive messages from a named channel", inlets: [{ id: "channel", type: "string", description: "Channel name to receive from", messages: [{ schema: n.String(), description: "Channel name" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "message", description: "Messages received from the channel", handle: { handleType: "message", handleId: 0 } }], tags: ["control", "routing", "channel", "wireless"] }, "recv~": { type: "recv~", category: "audio", description: "Receive audio from a named channel", inlets: [{ id: "channel", type: "string", description: "Channel name", messages: [{ schema: n.String(), description: "Channel name" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "routing", "channel", "wireless"] }, "rsqrt~": { type: "rsqrt~", category: "audio", description: "Reciprocal square root (1/\u221Ax)", inlets: [{ id: "signal", type: "signal", description: "Audio input (positive values)", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "1/\u221Ax output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "rsqrt", "reciprocal", "sqrt", "signal"] }, s: { type: "send", category: "control", description: "Send messages to a named channel", inlets: [{ id: "message", type: "message", description: "Message to broadcast to channel", messages: [{ schema: n.Any(), description: "Any message to send" }], handle: { handleType: "message", handleId: 0 } }, { id: "channel", type: "string", description: "Channel name to send to", messages: [{ schema: n.String(), description: "Channel name" }], handle: { handleType: "message", handleId: 1 } }], outlets: [], tags: ["control", "routing", "channel", "wireless"] }, "s~": { type: "send~", category: "audio", description: "Send audio to a named channel", inlets: [{ id: "in", type: "signal", description: "Audio input to broadcast", handle: { handleType: "audio", handleId: 0 } }, { id: "channel", type: "string", description: "Channel name", messages: [{ schema: n.String(), description: "Channel name" }], handle: { handleType: "message", handleId: 1 } }], outlets: [], tags: ["audio", "routing", "channel", "wireless"] }, "samphold~": { type: "samphold~", category: "audio", description: "Sample and hold unit", inlets: [{ id: "signal", type: "signal", description: "Input signal to be sampled", handle: { handleType: "audio", handleId: 0 } }, { id: "control", type: "signal", description: "Control signal (samples when decreasing)", handle: { handleType: "audio", handleId: 1 } }, { id: "message", type: "message", description: "Set or reset commands", messages: [{ schema: n.Object({ type: n.Literal("set"), value: n.Number() }), description: "Set output value" }, { schema: n.Object({ type: n.Literal("reset"), value: n.Number() }), description: "Set last control value" }, { schema: n.Object({ type: n.Literal("reset") }), description: "Force next sample (reset to infinity)" }], handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Sampled and held signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "sample", "hold", "control", "signal"] }, "sampler~": { type: "sampler~", category: "audio", description: "Records audio into a buffer and plays it back with loop points, playback rate, and detune control", inlets: [{ id: "message", type: "message", description: "Control messages: record, play, stop, loop, loopOff, setStart, setEnd, playbackRate, detune. Also accepts Float32Array directly to set buffer.", messages: [{ schema: n.Any(), description: "Control messages: record, play, stop, loop, loopOff, setStart, setEnd, playbackRate, detune. Also accepts Float32Array directly to set buffer." }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Audio output from sampler playback", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "sampler"] }, "samplerate~": { type: "samplerate~", category: "control", description: "Outputs the current audio sample rate in Hz", inlets: [{ id: "trigger", type: "bang", description: "Bang to output current sample rate", messages: [{ schema: n.Object({ type: n.Literal("bang") }), description: "Bang to output current sample rate" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "float", description: "Sample rate in Hz", handle: { handleType: "message", handleId: 0 } }], tags: ["audio", "info"] }, "scope~": { type: "scope~", category: "audio", description: "Oscilloscope waveform display", inlets: [{ id: "in", type: "signal", description: "Audio signal (or X axis in XY mode)", handle: { handleType: "audio", handleId: 0 } }, { id: "y", type: "signal", description: "Y axis signal (XY mode only)", handle: { handleType: "audio", handleId: 1 } }], outlets: [], tags: ["processors", "audio", "scope"] }, sel: { type: "select", category: "control", description: "Test input against values, output bang on match or pass through", inlets: [{ id: "input", type: "message", description: "Value to test against arguments", messages: [{ schema: n.Any(), description: "Value to test against arguments" }], handle: { handleType: "message", handleId: 0 } }, { id: "set", type: "message", description: "Set match value (single argument mode)", messages: [{ schema: n.Any(), description: "Set match value (single argument mode)" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "0", type: "bang", description: "Bang on match", handle: { handleType: "message", handleId: 0 } }, { id: "nomatch", type: "message", description: "Pass through on no match", handle: { handleType: "message", handleId: 1 } }], tags: ["select"] }, select: { type: "select", category: "control", description: "Test input against values, output bang on match or pass through", inlets: [{ id: "input", type: "message", description: "Value to test against arguments", messages: [{ schema: n.Any(), description: "Value to test against arguments" }], handle: { handleType: "message", handleId: 0 } }, { id: "set", type: "message", description: "Set match value (single argument mode)", messages: [{ schema: n.Any(), description: "Set match value (single argument mode)" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "0", type: "bang", description: "Bang on match", handle: { handleType: "message", handleId: 0 } }, { id: "nomatch", type: "message", description: "Pass through on no match", handle: { handleType: "message", handleId: 1 } }], tags: ["select"] }, send: { type: "send", category: "control", description: "Send messages to a named channel", inlets: [{ id: "message", type: "message", description: "Message to broadcast to channel", messages: [{ schema: n.Any(), description: "Any message to send" }], handle: { handleType: "message", handleId: 0 } }, { id: "channel", type: "string", description: "Channel name to send to", messages: [{ schema: n.String(), description: "Channel name" }], handle: { handleType: "message", handleId: 1 } }], outlets: [], tags: ["control", "routing", "channel", "wireless"] }, "send~": { type: "send~", category: "audio", description: "Send audio to a named channel", inlets: [{ id: "in", type: "signal", description: "Audio input to broadcast", handle: { handleType: "audio", handleId: 0 } }, { id: "channel", type: "string", description: "Channel name", messages: [{ schema: n.String(), description: "Channel name" }], handle: { handleType: "message", handleId: 1 } }], outlets: [], tags: ["audio", "routing", "channel", "wireless"] }, "sig~": { type: "sig~", category: "audio", description: "Outputs a constant signal value", inlets: [{ id: "offset", type: "float", description: "Constant signal value", messages: [{ schema: n.Number(), description: "Constant signal value" }], isAudioParam: true, handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Constant signal output", handle: { handleType: "audio", handleId: 0 } }], tags: ["sources", "audio", "sig"] }, "slop~": { type: "slop~", category: "audio", description: "Slew-limiting low-pass filter for smooth transitions", inlets: [{ id: "signal", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "limit", type: "float", description: "Slew rate limit (units per second)", messages: [{ schema: n.Number(), description: "Slew rate limit (units/second)" }], isAudioParam: true, handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Slew-limited output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "filter", "slew", "smooth", "portamento", "glide", "limiter"] }, "snapshot~": { type: "snapshot~", category: "audio", description: "Sample a signal value on bang", inlets: [{ id: "signal", type: "signal", description: "Signal to sample", handle: { handleType: "audio", handleId: 0 } }, { id: "bang", type: "bang", description: "Trigger snapshot", messages: [{ schema: n.Object({ type: n.Literal("bang") }), description: "Sample the current value" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "value", type: "message", description: "Sampled signal value", handle: { handleType: "message", handleId: 0 } }], tags: ["audio", "sample", "snapshot", "signal", "message"] }, "sonic~": { type: "sonic~", category: "audio", description: "Supersonic is SuperCollider engine for the web", inlets: [{ id: "in", type: "signal", description: "Audio signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "code", type: "string", description: "SuperSonic code to execute", messages: [{ schema: n.String(), description: "SuperSonic code to execute" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "sonic"] }, "soundfile~": { type: "soundfile~", category: "audio", description: "Loads and plays audio files from URLs or files with drag-drop support", inlets: [{ id: "message", type: "message", description: 'Control messages: "play", "pause", "stop", or bang to restart', messages: [{ schema: n.Any(), description: 'Control messages: "play", "pause", "stop", or bang to restart' }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Audio output from loaded file", handle: { handleType: "audio", handleId: 0 } }], tags: ["sources", "audio", "soundfile"] }, spigot: { type: "spigot", category: "control", description: "Message gate that allows or blocks data based on condition", inlets: [{ id: "data", type: "message", description: "Data input", messages: [{ schema: n.Any(), description: "Data to pass through when allowed" }], handle: { handleType: "message", handleId: 0 } }, { id: "control", type: "message", description: "Gate control", messages: [{ schema: n.Boolean(), description: "Truthy allows data, falsey blocks data" }, { schema: n.Object({ type: n.Literal("bang") }), description: "Bang toggles gate state" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "message", description: "Output when spigot is open", handle: { handleType: "message", handleId: 0 } }], tags: ["control", "gate", "switch", "filter"] }, "split~": { type: "split~", category: "audio", description: "Splits a multichannel signal into separate mono channels", inlets: [{ id: "in", type: "signal", description: "Multichannel audio input", handle: { handleType: "audio", handleId: 0 } }, { id: "channels", type: "int", description: "Number of channels to split (1-32)", messages: [{ schema: n.Integer({ minimum: 1, maximum: 32 }), description: "Number of channels to split (1-32)" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Individual channel outputs (dynamic based on channel count)", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "split"] }, "sqrt~": { type: "sqrt~", category: "audio", description: "Square root of signal", inlets: [{ id: "signal", type: "signal", description: "Audio input (non-negative values)", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Square root output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "sqrt", "root", "signal"] }, stack: { type: "stack", category: "control", description: "LIFO stack \u2014 push messages in, bang to pop them out", inlets: [{ id: "push", type: "message", description: "Push a message onto the top of the stack", messages: [{ schema: n.Any(), description: "Push a message onto the top of the stack" }], handle: { handleType: "message", handleId: 0 } }, { id: "cmd", type: "message", description: "Bang to pop top item; send clear to empty; send size to get count", messages: [{ schema: n.Object({ type: n.Literal("bang") }), description: "Pop top item and output" }, { schema: n.Object({ type: n.Literal("clear") }), description: "Empty the stack" }, { schema: n.Object({ type: n.Literal("size") }), description: "Output current stack size" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "message", description: "Popped item, or size count", handle: { handleType: "message", handleId: 0 } }], tags: ["stack"] }, "tabosc4~": { type: "tabosc4~", category: "audio", description: "Wavetable oscillator with 4-point interpolation", inlets: [{ id: "frequency", type: "float", description: "Frequency in Hz", messages: [{ schema: n.Number(), description: "Frequency in Hz" }], isAudioParam: true, handle: { handleType: "message", handleId: 0 } }, { id: "table", type: "string", description: "Table/buffer name", messages: [{ schema: n.String(), description: "Set table name" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Wavetable oscillator output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "oscillator", "wavetable", "table", "synthesis"] }, "tabread~": { type: "tabread~", category: "audio", description: "Read from a named buffer using an index signal", inlets: [{ id: "index", type: "signal", description: "Index signal (0 to buffer length)", handle: { handleType: "audio", handleId: 0 } }, { id: "name", type: "string", description: "Buffer name", messages: [{ schema: n.String(), description: "Set buffer name" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Signal read from buffer", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "buffer", "table", "read", "playback"] }, "tabread4~": { type: "tabread4~", category: "audio", description: "Read from a named buffer with 4-point interpolation", inlets: [{ id: "index", type: "signal", description: "Index signal (0 to buffer length, fractional for interpolation)", handle: { handleType: "audio", handleId: 0 } }, { id: "name", type: "string", description: "Buffer name", messages: [{ schema: n.String(), description: "Set buffer name" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Interpolated signal read from buffer", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "buffer", "table", "read", "interpolation", "playback"] }, "tabwrite~": { type: "tabwrite~", category: "audio", description: "Write audio signal into a named buffer", inlets: [{ id: "signal", type: "signal", description: "Audio signal to write into the buffer", handle: { handleType: "audio", handleId: 0 } }, { id: "control", type: "string", description: "Buffer name and control commands", messages: [{ schema: n.String(), description: "Set buffer name" }, { schema: n.Object({ type: n.Literal("bang") }), description: "Reset write head to 0" }, { schema: n.Object({ type: n.Literal("stop") }), description: "Stop writing" }, { schema: n.Object({ type: n.Literal("start") }), description: "Resume writing" }], handle: { handleType: "message", handleId: 1 } }], outlets: [], tags: ["audio", "buffer", "table", "write", "record"] }, "tap~": { type: "tap~", category: "audio", description: "Capture audio frames and forward as messages", inlets: [{ id: "in", type: "signal", description: "Audio signal (or X axis in XY mode)", handle: { handleType: "audio", handleId: 0 } }, { id: "y", type: "signal", description: "Y axis signal (XY mode only)", handle: { handleType: "audio", handleId: 1 } }, { id: "bufferSize", type: "int", description: "Number of samples captured per frame", messages: [{ schema: n.Integer({ minimum: 64, maximum: 2048 }), description: "Number of samples captured per frame" }], handle: { handleType: "message", handleId: 2 } }, { id: "mode", type: "string", description: "Capture mode", messages: [{ schema: n.String(), description: "Capture mode" }], handle: { handleType: "message", handleId: 3 } }, { id: "fps", type: "float", description: "Max refresh rate in fps (0 = unlimited)", messages: [{ schema: n.Number({ minimum: 0, maximum: 120 }), description: "Max refresh rate in fps (0 = unlimited)" }], handle: { handleType: "message", handleId: 4 } }], outlets: [{ id: "out", type: "message", description: "Captured buffer, trigger-synced on rising zero-crossing.", messages: [{ schema: n.Unsafe({ type: "Float32Array" }), description: "Wave Mode" }, { schema: n.Object({ type: n.Literal("xy"), x: n.Unsafe({ type: "Float32Array" }), y: n.Unsafe({ type: "Float32Array" }) }), description: "XY Mode" }], handle: { handleType: "message", handleId: 0 } }], tags: ["audio", "scope", "waveform", "oscilloscope", "capture", "tap", "signal", "analysis"] }, "threshold~": { type: "threshold~", category: "audio", description: "Trigger bangs from audio signal level", inlets: [{ id: "signal", type: "signal", description: "Signal to analyze", handle: { handleType: "audio", handleId: 0 } }, { id: "message", type: "message", description: "Set thresholds and debounce, or set internal state", messages: [{ schema: n.Array(n.Number()), description: "Set [triggerThreshold, triggerDebounce, restThreshold, restDebounce] (ms)" }, { schema: n.Number(), description: "Nonzero sets state to high, zero sets to low" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "trigger", type: "bang", description: "Bang when signal reaches trigger threshold", handle: { handleType: "message", handleId: 0 } }, { id: "rest", type: "bang", description: "Bang when signal drops below rest threshold", handle: { handleType: "message", handleId: 1 } }], tags: ["audio", "trigger", "threshold", "signal", "detect", "onset"] }, throttle: { type: "throttle", category: "control", description: "Rate limits messages to at most one per time period", inlets: [{ id: "message", type: "message", description: "Message to throttle", messages: [{ schema: n.Any(), description: "Message to throttle" }], handle: { handleType: "message", handleId: 0 } }, { id: "time", type: "int", description: "Throttle time in ms", messages: [{ schema: n.Integer(), description: "Throttle time in ms" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "message", description: "", handle: { handleType: "message", handleId: 0 } }], tags: ["throttle"] }, "tone~": { type: "tone~", category: "audio", description: "Tone.js synthesis and audio processing node", inlets: [{ id: "in", type: "signal", description: "Audio signal input", handle: { handleType: "audio", handleId: 0 } }, { id: "code", type: "string", description: "Tone.js code to execute", messages: [{ schema: n.String(), description: "Tone.js code to execute" }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "signal", description: "Audio output", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "tone"] }, uniqby: { type: "uniqby", category: "control", description: "Filters consecutive duplicates by a specific key", inlets: [{ id: "message", type: "message", description: "Message to filter", messages: [{ schema: n.Any(), description: "Message to filter" }], handle: { handleType: "message", handleId: 0 } }, { id: "key", type: "symbol", description: 'Property path to compare (e.g., "id" or "user.name")', messages: [{ schema: n.String(), description: 'Property path to compare (e.g., "id" or "user.name")' }], handle: { handleType: "message", handleId: 1 } }], outlets: [{ id: "out", type: "message", description: "Unique messages", handle: { handleType: "message", handleId: 0 } }], tags: ["uniqby"] }, unpack: { type: "unpack", category: "control", description: "Unpack array elements into separate outlets", inlets: [{ id: "input", type: "message", description: "Array to unpack", messages: [{ schema: n.Any(), description: "Array to unpack" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "n", type: "message", description: "Nth element", handle: { handleType: "message", handleId: 0 } }, { id: "remaining", type: "message", description: "Remaining elements beyond count", handle: { handleType: "message", handleId: 1 } }], tags: ["unpack"] }, "vcf~": { type: "vcf~", category: "audio", description: "Voltage-controlled resonant filter with signal-rate frequency modulation", inlets: [{ id: "signal", type: "signal", description: "Audio input to filter", handle: { handleType: "audio", handleId: 0 } }, { id: "frequency", type: "signal", description: "Center frequency in Hz", handle: { handleType: "audio", handleId: 1 } }, { id: "q", type: "float", description: "Filter resonance (Q factor)", messages: [{ schema: n.Number(), description: "Q factor (higher = more resonance)" }], isAudioParam: true, handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "bandpass", type: "signal", description: "Bandpass filtered output (real)", handle: { handleType: "audio", handleId: 0 } }, { id: "lowpass", type: "signal", description: "Lowpass filtered output (imaginary)", handle: { handleType: "audio", handleId: 1 } }], tags: ["audio", "filter", "vcf", "bandpass", "lowpass", "resonant", "modulation", "synth"] }, "vdo.ninja.pull": { type: "vdo.ninja.pull", category: "audio", description: "Receives audio from VDO.Ninja WebRTC streams", inlets: [], outlets: [{ id: "out", type: "signal", description: "Audio output from remote stream", handle: { handleType: "audio", handleId: 0 } }], tags: ["sources", "vdo.ninja.pull"] }, "vdo.ninja.push": { type: "vdo.ninja.push", category: "audio", description: "Streams audio to VDO.Ninja WebRTC", inlets: [{ id: "in", type: "signal", description: "Audio signal to stream", handle: { handleType: "audio", handleId: 0 } }], outlets: [], tags: ["processors", "vdo.ninja.push"] }, "vline~": { type: "vline~", category: "audio", description: "Sample-accurate scheduled ramps", inlets: [{ id: "target", type: "message", description: "Target value or [target, time] or [target, time, delay]", messages: [{ schema: n.Number(), description: "Jump to value immediately" }, { schema: n.Tuple([n.Number(), n.Number()]), description: "Ramp to [target, time_ms]" }, { schema: n.Tuple([n.Number(), n.Number(), n.Number()]), description: "Ramp to [target, time_ms, delay_ms]" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Ramped signal output", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "ramp", "envelope", "signal", "vline", "schedule"] }, "waveshaper~": { type: "waveshaper~", category: "audio", description: "WaveShaperNode for distortion and waveshaping effects", inlets: [{ id: "in", type: "signal", description: "Audio signal to process", handle: { handleType: "audio", handleId: 0 } }, { id: "curve", type: "float[]", description: "Array of numbers or Float32Array to set as waveshaper curve", messages: [{ schema: n.Array(n.Number()), description: "Array of numbers or Float32Array to set as waveshaper curve" }], handle: { handleType: "message", handleId: 1 } }, { id: "oversample", type: "string", description: 'Oversample setting: "none", "2x", or "4x"', messages: [{ schema: n.String(), description: 'Oversample setting: "none", "2x", or "4x"' }], handle: { handleType: "message", handleId: 2 } }], outlets: [{ id: "out", type: "signal", description: "Waveshaped signal", handle: { handleType: "audio", handleId: 0 } }], tags: ["processors", "audio", "waveshaper"] }, webmidilink: { type: "webmidilink", category: "control", description: "Converts MIDI events to WebMidiLink format", inlets: [{ id: "midi", type: "message", description: "MIDI event (noteOn, noteOff, controlChange, programChange, pitchBend)", messages: [{ schema: n.Any(), description: "MIDI event (noteOn, noteOff, controlChange, programChange, pitchBend)" }], handle: { handleType: "message", handleId: 0 } }], outlets: [{ id: "out", type: "message", description: "WebMidiLink formatted message (midi,XX,XX,XX)", handle: { handleType: "message", handleId: 0 } }], tags: ["webmidilink"] }, "wrap~": { type: "wrap~", category: "audio", description: "Wrap signal to [0, 1) range", inlets: [{ id: "signal", type: "signal", description: "Audio input", handle: { handleType: "audio", handleId: 0 } }], outlets: [{ id: "out", type: "signal", description: "Wrapped signal (0 to 1)", handle: { handleType: "audio", handleId: 0 } }], tags: ["audio", "math", "wrap", "phase", "signal"] } }, vn = n.Number(), An = n.Array(n.Number(), { minItems: 4 }), jf = { float: r(vn), list: r(An) }, nf = { type: "curve", category: "control", description: "Interactive breakpoint/curve editor", inlets: [{ id: "message", description: "x input (float) or bang / reset / list", messages: [{ schema: vn, description: "Evaluate the function at X, output Y" }, { schema: g, description: "Output the full breakpoint list as [x1, y1, x2, y2, ...]" }, { schema: An, description: "Set breakpoints from a flat list (minimum 2 pairs, must be even length)" }, { schema: fe, description: "Reset to default: flat line at y=0.5" }] }], outlets: [{ id: "message", description: "y output", messages: [{ schema: vn, description: "Interpolated Y value at the given X" }, { schema: An, description: "Full breakpoint list [x1, y1, x2, y2, ...] when queried with bang" }] }], tags: ["control", "curve", "breakpoint", "function", "interpolation", "mapping"] }, $t = m("connect"), Pt = m("disconnect"), cs = o("setBaud", { value: n.Number() }), ls = m("sendBreak"), us = o("data", { line: n.String() }), So = o("connected", { portId: n.String(), label: n.String() }), To = o("disconnected", { portId: n.String() }), xo = o("error", { message: n.String() }), Df = { connect: r($t), disconnect: r(Pt), baud: r(cs), sendBreak: r(ls), uint8Array: ce.instanceOf(Uint8Array), numberArray: ce.array(ce.number), data: r(us), connected: r(So), disconnected: r(To), error: r(xo) }, sf = { type: "serial", category: "network", description: "WebSerial port for communicating with hardware devices", inlets: [{ id: "message", description: "Control and data messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Open port picker and connect" }, { schema: n.String(), description: "Send a string to the port" }, { schema: n.Object({ type: n.Literal("Uint8Array") }), description: "Send raw bytes to the port" }, { schema: n.Array(n.Integer({ minimum: 0, maximum: 255 })), description: "Send raw bytes as a number array to the port" }, { schema: ls, description: "Send a BREAK signal via setSignals() \u2014 required for DMX-512 framing" }, { schema: $t, description: "Open port picker and connect" }, { schema: Pt, description: "Disconnect from the port" }, { schema: cs, description: "Set the baud rate" }] }], outlets: [{ id: "message", description: "Received data and connection events", handle: { handleType: "message" }, messages: [{ schema: us, description: "A line received from the port" }, { schema: So, description: "Port connected" }, { schema: To, description: "Port disconnected" }, { schema: xo, description: "An error occurred" }] }], tags: ["serial", "hardware", "usb", "uart", "arduino", "microcontroller", "network"] }, af = { type: "serial.term", category: "network", description: "Interactive serial terminal with scrollback and ANSI color support", inlets: [{ id: "message", description: "Control and data messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Open port picker and connect" }, { schema: n.String(), description: "Send a string to the port" }, { schema: n.Object({ type: n.Literal("Uint8Array") }), description: "Send raw bytes to the port" }, { schema: n.Array(n.Integer({ minimum: 0, maximum: 255 })), description: "Send raw bytes as a number array to the port" }, { schema: ls, description: "Send a BREAK signal via setSignals() \u2014 required for DMX-512 framing" }, { schema: $t, description: "Open port picker and connect" }, { schema: Pt, description: "Disconnect from the port" }, { schema: cs, description: "Set the baud rate" }] }], outlets: [{ id: "message", description: "Received lines from the port", handle: { handleType: "message" }, messages: [{ schema: us, description: "A line received from the port" }] }], tags: ["serial", "terminal", "hardware", "usb", "uart", "arduino", "console", "network"] }, Oo = m("blackout"), Uf = { connect: r($t), disconnect: r(Pt), blackout: r(Oo), uint8Array: ce.instanceOf(Uint8Array), numberArray: ce.array(ce.number) }, of = { type: "serial.dmx", category: "network", description: "DMX-512 universe output (250kbaud, 8N2) \u2014 send channel arrays to control lighting", inlets: [{ id: "message", description: "Channel data and control messages", handle: { handleType: "message" }, messages: [{ schema: g, description: "Open port picker and connect" }, { schema: n.Array(n.Integer({ minimum: 0, maximum: 255 })), description: "Set channel values and send a DMX frame (up to 512 values)" }, { schema: n.Object({ type: n.Literal("Uint8Array") }), description: "Set channel values from raw bytes and send a DMX frame" }, { schema: Oo, description: "Send a blackout frame (all channels to 0)" }, { schema: $t, description: "Open port picker and connect" }, { schema: Pt, description: "Disconnect from the port" }] }], outlets: [], tags: ["serial.dmx", "dmx", "dmx512", "lighting", "hardware", "usb", "uart", "network"] }, Ef = { ...tf, trigger: Nm, p5: Fm, hydra: $m, glsl: Pm, canvas: km, "canvas.dom": Cm, surface: jm, swgl: Dm, textmode: Um, "textmode.dom": Em, three: qm, "three.dom": Bm, regl: zm, img: Vm, video: Km, webcam: Gm, screen: Wm, iframe: Hm, button: _m, toggle: Qm, switch: Xm, msg: Ym, slider: Zm, knob: eg, textbox: tg, keyboard: ng, "soundfile~": sg, "sampler~": ug, table: bg, orca: Sg, strudel: Tg, "chuck~": qg, mqtt: Hg, sse: _g, tts: Yg, stt: Zg, netsend: eh, netrecv: th, "ai.txt": nh, "ai.img": sh, "ai.music": ih, "ai.tts": ah, "ai.stt": oh, "midi.in": lh, "midi.out": gh, "vdo.ninja.push": vh, "vdo.ninja.pull": Mh, js: jh, worker: Dh, vue: Uh, dom: Eh, uxn: Bh, uiua: zh, ruby: Vh, python: Kh, expr: Gh, filter: Wh, map: Hh, tap: _h, scan: Qh, uniq: Xh, peek: Jh, loadbang: Yh, metro: Zh, markdown: ey, "tone~": ty, "elem~": ny, "sonic~": sy, "csound~": ly, "dsp~": uy, "expr~": py, "osc~": my, "waveshaper~": gy, "convolver~": hy, asm: by, "asm.mem": xy, "wgpu.compute": Ay, "bg.out": wy, "send.vdo": Ny, "recv.vdo": Fy, note: $y, label: Py, title: ky, link: Cy, "meter~": Ry, sequencer: Dy, "bytebeat~": Uy, projmap: Ey, curve: nf, serial: sf, "serial.term": af, "serial.dmx": of, "vision.hand": _y, "vision.body": Qy, "vision.face": Xy, "vision.gesture": Jy, "vision.classify": Yy, "vision.detect": Zy, "vision.segment": ef, ngea: qy };
export {
  yf as $,
  qg as A,
  g as B,
  df as C,
  bf as D,
  gf as E,
  hf as F,
  ki as G,
  eh as H,
  Of as I,
  th as J,
  u as K,
  vf as L,
  Wm as M,
  Ri as N,
  pf as O,
  uf as P,
  tg as Q,
  ly as R,
  B as S,
  fn as T,
  Cf as U,
  Qm as V,
  Xm as W,
  Rf as X,
  xy as Y,
  ng as Z,
  Sg as _,
  n as a,
  Bh as a0,
  Pf as a1,
  If as a2,
  _g as a3,
  Sf as a4,
  Tf as a5,
  xf as a6,
  Jh as a7,
  Lf as a8,
  Nm as a9,
  cf as aa,
  bg as ab,
  Ft as ac,
  fg as ad,
  yg as ae,
  hg as af,
  mg as ag,
  pg as ah,
  Ny as ai,
  Fy as aj,
  Dy as ak,
  Mf as al,
  jf as am,
  Df as an,
  Uf as ao,
  qy as ap,
  Mm as aq,
  Lm as ar,
  Rm as as,
  r as b,
  Li as c,
  O as d,
  ff as e,
  wf as f,
  Hm as g,
  mf as h,
  lf as i,
  Af as j,
  _m as k,
  Nf as l,
  o as m,
  wy as n,
  Ef as o,
  Ff as p,
  $f as q,
  lh as r,
  m as s,
  gh as t,
  wm as u,
  Ci as v,
  Zm as w,
  eg as x,
  ey as y,
  kf as z
};
