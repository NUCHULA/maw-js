var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
import { g as ws } from "./DoeJ0Mx_.js";
import { o as ks } from "./CrEetURD.js";
import { o as Ss } from "./rULWNMqv.js";
const _Q0 = class _Q0 {
  constructor() {
    __publicField(this, "registry", /* @__PURE__ */ new Map());
  }
  register(e) {
    if (this.registry.set(e.type, e), e.aliases) for (const t of e.aliases) this.registry.set(t, e);
  }
  isDefined(e) {
    return this.registry.has(e);
  }
  get(e) {
    return this.registry.get(e);
  }
  getNodeTypes() {
    return Array.from(this.registry.keys());
  }
  getVisibleNodeTypes() {
    return Array.from(this.registry.entries()).filter(([e, t]) => !t.headless).map(([e]) => e);
  }
  static getInstance() {
    return _Q0.instance === null && (_Q0.instance = new _Q0()), _Q0.instance;
  }
};
__publicField(_Q0, "instance", null);
let Q0 = _Q0;
const _et = class _et {
  constructor() {
    __publicField(this, "registry", /* @__PURE__ */ new Map());
  }
  register(e) {
    if (this.registry.set(e.type, e), e.aliases) for (const t of e.aliases) this.registry.set(t, e);
  }
  isDefined(e) {
    return this.registry.has(e);
  }
  get(e) {
    return this.registry.get(e);
  }
  getObjectTypes() {
    return Array.from(this.registry.keys());
  }
  getPrimaryObjectTypes() {
    const e = /* @__PURE__ */ new Set(), t = [];
    for (const a of this.registry.values()) e.has(a) || (e.add(a), t.push(a.type));
    return t;
  }
  static getInstance() {
    return _et.instance === null && (_et.instance = new _et()), _et.instance;
  }
};
__publicField(_et, "instance", null);
let et = _et;
var Ar, Ua;
function Ms() {
  if (Ua) return Ar;
  Ua = 1;
  function r(v) {
    return v instanceof Map ? v.clear = v.delete = v.set = function() {
      throw new Error("map is read-only");
    } : v instanceof Set && (v.add = v.clear = v.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(v), Object.getOwnPropertyNames(v).forEach((S) => {
      const R = v[S], Z = typeof R;
      (Z === "object" || Z === "function") && !Object.isFrozen(R) && r(R);
    }), v;
  }
  class e {
    constructor(S) {
      S.data === void 0 && (S.data = {}), this.data = S.data, this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function t(v) {
    return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function a(v, ...S) {
    const R = /* @__PURE__ */ Object.create(null);
    for (const Z in v) R[Z] = v[Z];
    return S.forEach(function(Z) {
      for (const ye in Z) R[ye] = Z[ye];
    }), R;
  }
  const n = "</span>", i = (v) => !!v.scope, l = (v, { prefix: S }) => {
    if (v.startsWith("language:")) return v.replace("language:", "language-");
    if (v.includes(".")) {
      const R = v.split(".");
      return [`${S}${R.shift()}`, ...R.map((Z, ye) => `${Z}${"_".repeat(ye + 1)}`)].join(" ");
    }
    return `${S}${v}`;
  };
  class c {
    constructor(S, R) {
      this.buffer = "", this.classPrefix = R.classPrefix, S.walk(this);
    }
    addText(S) {
      this.buffer += t(S);
    }
    openNode(S) {
      if (!i(S)) return;
      const R = l(S.scope, { prefix: this.classPrefix });
      this.span(R);
    }
    closeNode(S) {
      i(S) && (this.buffer += n);
    }
    value() {
      return this.buffer;
    }
    span(S) {
      this.buffer += `<span class="${S}">`;
    }
  }
  const u = (v = {}) => {
    const S = { children: [] };
    return Object.assign(S, v), S;
  };
  class d {
    constructor() {
      this.rootNode = u(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(S) {
      this.top.children.push(S);
    }
    openNode(S) {
      const R = u({ scope: S });
      this.add(R), this.stack.push(R);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(S) {
      return this.constructor._walk(S, this.rootNode);
    }
    static _walk(S, R) {
      return typeof R == "string" ? S.addText(R) : R.children && (S.openNode(R), R.children.forEach((Z) => this._walk(S, Z)), S.closeNode(R)), S;
    }
    static _collapse(S) {
      typeof S != "string" && S.children && (S.children.every((R) => typeof R == "string") ? S.children = [S.children.join("")] : S.children.forEach((R) => {
        d._collapse(R);
      }));
    }
  }
  class g extends d {
    constructor(S) {
      super(), this.options = S;
    }
    addText(S) {
      S !== "" && this.add(S);
    }
    startScope(S) {
      this.openNode(S);
    }
    endScope() {
      this.closeNode();
    }
    __addSublanguage(S, R) {
      const Z = S.root;
      R && (Z.scope = `language:${R}`), this.add(Z);
    }
    toHTML() {
      return new c(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), true;
    }
  }
  function x(v) {
    return v ? typeof v == "string" ? v : v.source : null;
  }
  function y(v) {
    return M("(?=", v, ")");
  }
  function w(v) {
    return M("(?:", v, ")*");
  }
  function k(v) {
    return M("(?:", v, ")?");
  }
  function M(...v) {
    return v.map((R) => x(R)).join("");
  }
  function N(v) {
    const S = v[v.length - 1];
    return typeof S == "object" && S.constructor === Object ? (v.splice(v.length - 1, 1), S) : {};
  }
  function I(...v) {
    return "(" + (N(v).capture ? "" : "?:") + v.map((Z) => x(Z)).join("|") + ")";
  }
  function P(v) {
    return new RegExp(v.toString() + "|").exec("").length - 1;
  }
  function G(v, S) {
    const R = v && v.exec(S);
    return R && R.index === 0;
  }
  const j = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function Q(v, { joinWith: S }) {
    let R = 0;
    return v.map((Z) => {
      R += 1;
      const ye = R;
      let we = x(Z), q = "";
      for (; we.length > 0; ) {
        const L = j.exec(we);
        if (!L) {
          q += we;
          break;
        }
        q += we.substring(0, L.index), we = we.substring(L.index + L[0].length), L[0][0] === "\\" && L[1] ? q += "\\" + String(Number(L[1]) + ye) : (q += L[0], L[0] === "(" && R++);
      }
      return q;
    }).map((Z) => `(${Z})`).join(S);
  }
  const W = /\b\B/, Y = "[a-zA-Z]\\w*", ae = "[a-zA-Z_]\\w*", te = "\\b\\d+(\\.\\d+)?", ze = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", ke = "\\b(0b[01]+)", fe = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Qe = (v = {}) => {
    const S = /^#![ ]*\//;
    return v.binary && (v.begin = M(S, /.*\b/, v.binary, /\b.*/)), a({ scope: "meta", begin: S, end: /$/, relevance: 0, "on:begin": (R, Z) => {
      R.index !== 0 && Z.ignoreMatch();
    } }, v);
  }, be = { begin: "\\\\[\\s\\S]", relevance: 0 }, Oe = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [be] }, Ue = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [be] }, r0 = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, me = function(v, S, R = {}) {
    const Z = a({ scope: "comment", begin: v, end: S, contains: [] }, R);
    Z.contains.push({ scope: "doctag", begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)", end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, excludeBegin: true, relevance: 0 });
    const ye = I("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
    return Z.contains.push({ begin: M(/[ ]+/, "(", ye, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), Z;
  }, Ye = me("//", "$"), Ie = me("/\\*", "\\*/"), Le = me("#", "$"), e0 = { scope: "number", begin: te, relevance: 0 }, Ne = { scope: "number", begin: ze, relevance: 0 }, V0 = { scope: "number", begin: ke, relevance: 0 }, yt = { scope: "regexp", begin: /\/(?=[^/\n]*\/)/, end: /\/[gimuy]*/, contains: [be, { begin: /\[/, end: /\]/, relevance: 0, contains: [be] }] }, mr = { scope: "title", begin: Y, relevance: 0 }, k0 = { scope: "title", begin: ae, relevance: 0 }, wt = { begin: "\\.\\s*" + ae, relevance: 0 };
  var _0 = Object.freeze({ __proto__: null, APOS_STRING_MODE: Oe, BACKSLASH_ESCAPE: be, BINARY_NUMBER_MODE: V0, BINARY_NUMBER_RE: ke, COMMENT: me, C_BLOCK_COMMENT_MODE: Ie, C_LINE_COMMENT_MODE: Ye, C_NUMBER_MODE: Ne, C_NUMBER_RE: ze, END_SAME_AS_BEGIN: function(v) {
    return Object.assign(v, { "on:begin": (S, R) => {
      R.data._beginMatch = S[1];
    }, "on:end": (S, R) => {
      R.data._beginMatch !== S[1] && R.ignoreMatch();
    } });
  }, HASH_COMMENT_MODE: Le, IDENT_RE: Y, MATCH_NOTHING_RE: W, METHOD_GUARD: wt, NUMBER_MODE: e0, NUMBER_RE: te, PHRASAL_WORDS_MODE: r0, QUOTE_STRING_MODE: Ue, REGEXP_MODE: yt, RE_STARTERS_RE: fe, SHEBANG: Qe, TITLE_MODE: mr, UNDERSCORE_IDENT_RE: ae, UNDERSCORE_TITLE_MODE: k0 });
  function kt(v, S) {
    v.input[v.index - 1] === "." && S.ignoreMatch();
  }
  function St(v, S) {
    v.className !== void 0 && (v.scope = v.className, delete v.className);
  }
  function j0(v, S) {
    S && v.beginKeywords && (v.begin = "\\b(" + v.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", v.__beforeBegin = kt, v.keywords = v.keywords || v.beginKeywords, delete v.beginKeywords, v.relevance === void 0 && (v.relevance = 0));
  }
  function W0(v, S) {
    Array.isArray(v.illegal) && (v.illegal = I(...v.illegal));
  }
  function dr(v, S) {
    if (v.match) {
      if (v.begin || v.end) throw new Error("begin & end are not supported with match");
      v.begin = v.match, delete v.match;
    }
  }
  function pr(v, S) {
    v.relevance === void 0 && (v.relevance = 1);
  }
  const fr = (v, S) => {
    if (!v.beforeMatch) return;
    if (v.starts) throw new Error("beforeMatch cannot be used with starts");
    const R = Object.assign({}, v);
    Object.keys(v).forEach((Z) => {
      delete v[Z];
    }), v.keywords = R.keywords, v.begin = M(R.beforeMatch, y(R.begin)), v.starts = { relevance: 0, contains: [Object.assign(R, { endsParent: true })] }, v.relevance = 0, delete R.beforeMatch;
  }, Mt = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"], At = "keyword";
  function O0(v, S, R = At) {
    const Z = /* @__PURE__ */ Object.create(null);
    return typeof v == "string" ? ye(R, v.split(" ")) : Array.isArray(v) ? ye(R, v) : Object.keys(v).forEach(function(we) {
      Object.assign(Z, O0(v[we], S, we));
    }), Z;
    function ye(we, q) {
      S && (q = q.map((L) => L.toLowerCase())), q.forEach(function(L) {
        const V = L.split("|");
        Z[V[0]] = [we, gr(V[0], V[1])];
      });
    }
  }
  function gr(v, S) {
    return S ? Number(S) : vr(v) ? 0 : 1;
  }
  function vr(v) {
    return Mt.includes(v.toLowerCase());
  }
  const X0 = {}, a0 = (v) => {
    console.error(v);
  }, ct = (v, ...S) => {
    console.log(`WARN: ${v}`, ...S);
  }, S0 = (v, S) => {
    X0[`${v}/${S}`] || (console.log(`Deprecated as of ${v}. ${S}`), X0[`${v}/${S}`] = true);
  }, Z0 = new Error();
  function L0(v, S, { key: R }) {
    let Z = 0;
    const ye = v[R], we = {}, q = {};
    for (let L = 1; L <= S.length; L++) q[L + Z] = ye[L], we[L + Z] = true, Z += P(S[L - 1]);
    v[R] = q, v[R]._emit = we, v[R]._multi = true;
  }
  function Y0(v) {
    if (Array.isArray(v.begin)) {
      if (v.skip || v.excludeBegin || v.returnBegin) throw a0("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Z0;
      if (typeof v.beginScope != "object" || v.beginScope === null) throw a0("beginScope must be object"), Z0;
      L0(v, v.begin, { key: "beginScope" }), v.begin = Q(v.begin, { joinWith: "" });
    }
  }
  function Zi(v) {
    if (Array.isArray(v.end)) {
      if (v.skip || v.excludeEnd || v.returnEnd) throw a0("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Z0;
      if (typeof v.endScope != "object" || v.endScope === null) throw a0("endScope must be object"), Z0;
      L0(v, v.end, { key: "endScope" }), v.end = Q(v.end, { joinWith: "" });
    }
  }
  function Yi(v) {
    v.scope && typeof v.scope == "object" && v.scope !== null && (v.beginScope = v.scope, delete v.scope);
  }
  function Ki(v) {
    Yi(v), typeof v.beginScope == "string" && (v.beginScope = { _wrap: v.beginScope }), typeof v.endScope == "string" && (v.endScope = { _wrap: v.endScope }), Y0(v), Zi(v);
  }
  function Ji(v) {
    function S(q, L) {
      return new RegExp(x(q), "m" + (v.case_insensitive ? "i" : "") + (v.unicodeRegex ? "u" : "") + (L ? "g" : ""));
    }
    class R {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      addRule(L, V) {
        V.position = this.position++, this.matchIndexes[this.matchAt] = V, this.regexes.push([V, L]), this.matchAt += P(L) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const L = this.regexes.map((V) => V[1]);
        this.matcherRe = S(Q(L, { joinWith: "|" }), true), this.lastIndex = 0;
      }
      exec(L) {
        this.matcherRe.lastIndex = this.lastIndex;
        const V = this.matcherRe.exec(L);
        if (!V) return null;
        const Be = V.findIndex((ut, xr) => xr > 0 && ut !== void 0), Se = this.matchIndexes[Be];
        return V.splice(0, Be), Object.assign(V, Se);
      }
    }
    class Z {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      getMatcher(L) {
        if (this.multiRegexes[L]) return this.multiRegexes[L];
        const V = new R();
        return this.rules.slice(L).forEach(([Be, Se]) => V.addRule(Be, Se)), V.compile(), this.multiRegexes[L] = V, V;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(L, V) {
        this.rules.push([L, V]), V.type === "begin" && this.count++;
      }
      exec(L) {
        const V = this.getMatcher(this.regexIndex);
        V.lastIndex = this.lastIndex;
        let Be = V.exec(L);
        if (this.resumingScanAtSamePosition() && !(Be && Be.index === this.lastIndex)) {
          const Se = this.getMatcher(0);
          Se.lastIndex = this.lastIndex + 1, Be = Se.exec(L);
        }
        return Be && (this.regexIndex += Be.position + 1, this.regexIndex === this.count && this.considerAll()), Be;
      }
    }
    function ye(q) {
      const L = new Z();
      return q.contains.forEach((V) => L.addRule(V.begin, { rule: V, type: "begin" })), q.terminatorEnd && L.addRule(q.terminatorEnd, { type: "end" }), q.illegal && L.addRule(q.illegal, { type: "illegal" }), L;
    }
    function we(q, L) {
      const V = q;
      if (q.isCompiled) return V;
      [St, dr, Ki, fr].forEach((Se) => Se(q, L)), v.compilerExtensions.forEach((Se) => Se(q, L)), q.__beforeBegin = null, [j0, W0, pr].forEach((Se) => Se(q, L)), q.isCompiled = true;
      let Be = null;
      return typeof q.keywords == "object" && q.keywords.$pattern && (q.keywords = Object.assign({}, q.keywords), Be = q.keywords.$pattern, delete q.keywords.$pattern), Be = Be || /\w+/, q.keywords && (q.keywords = O0(q.keywords, v.case_insensitive)), V.keywordPatternRe = S(Be, true), L && (q.begin || (q.begin = /\B|\b/), V.beginRe = S(V.begin), !q.end && !q.endsWithParent && (q.end = /\B|\b/), q.end && (V.endRe = S(V.end)), V.terminatorEnd = x(V.end) || "", q.endsWithParent && L.terminatorEnd && (V.terminatorEnd += (q.end ? "|" : "") + L.terminatorEnd)), q.illegal && (V.illegalRe = S(q.illegal)), q.contains || (q.contains = []), q.contains = [].concat(...q.contains.map(function(Se) {
        return Qi(Se === "self" ? q : Se);
      })), q.contains.forEach(function(Se) {
        we(Se, V);
      }), q.starts && we(q.starts, L), V.matcher = ye(V), V;
    }
    if (v.compilerExtensions || (v.compilerExtensions = []), v.contains && v.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return v.classNameAliases = a(v.classNameAliases || {}), we(v);
  }
  function Ia(v) {
    return v ? v.endsWithParent || Ia(v.starts) : false;
  }
  function Qi(v) {
    return v.variants && !v.cachedVariants && (v.cachedVariants = v.variants.map(function(S) {
      return a(v, { variants: null }, S);
    })), v.cachedVariants ? v.cachedVariants : Ia(v) ? a(v, { starts: v.starts ? a(v.starts) : null }) : Object.isFrozen(v) ? a(v) : v;
  }
  var es = "11.11.1";
  class ts extends Error {
    constructor(S, R) {
      super(S), this.name = "HTMLInjectionError", this.html = R;
    }
  }
  const br = t, Na = a, Da = Symbol("nomatch"), rs = 7, _a2 = function(v) {
    const S = /* @__PURE__ */ Object.create(null), R = /* @__PURE__ */ Object.create(null), Z = [];
    let ye = true;
    const we = "Could not find the language '{}', did you forget to load/include a language module?", q = { disableAutodetect: true, name: "Plain text", contains: [] };
    let L = { ignoreUnescapedHTML: false, throwUnescapedHTML: false, noHighlightRe: /^(no-?highlight)$/i, languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: "hljs-", cssSelector: "pre code", languages: null, __emitter: g };
    function V(C) {
      return L.noHighlightRe.test(C);
    }
    function Be(C) {
      let $ = C.className + " ";
      $ += C.parentNode ? C.parentNode.className : "";
      const re = L.languageDetectRe.exec($);
      if (re) {
        const ue = M0(re[1]);
        return ue || (ct(we.replace("{}", re[1])), ct("Falling back to no-highlight mode for this block.", C)), ue ? re[1] : "no-highlight";
      }
      return $.split(/\s+/).find((ue) => V(ue) || M0(ue));
    }
    function Se(C, $, re) {
      let ue = "", Ee = "";
      typeof $ == "object" ? (ue = C, re = $.ignoreIllegals, Ee = $.language) : (S0("10.7.0", "highlight(lang, code, ...args) has been deprecated."), S0("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), Ee = C, ue = $), re === void 0 && (re = true);
      const t0 = { code: ue, language: Ee };
      zt("before:highlight", t0);
      const A0 = t0.result ? t0.result : ut(t0.language, t0.code, re);
      return A0.code = t0.code, zt("after:highlight", A0), A0;
    }
    function ut(C, $, re, ue) {
      const Ee = /* @__PURE__ */ Object.create(null);
      function t0(D, H) {
        return D.keywords[H];
      }
      function A0() {
        if (!K.keywords) {
          Re.addText(he);
          return;
        }
        let D = 0;
        K.keywordPatternRe.lastIndex = 0;
        let H = K.keywordPatternRe.exec(he), ee = "";
        for (; H; ) {
          ee += he.substring(D, H.index);
          const le = i0.case_insensitive ? H[0].toLowerCase() : H[0], De = t0(K, le);
          if (De) {
            const [m0, xs] = De;
            if (Re.addText(ee), ee = "", Ee[le] = (Ee[le] || 0) + 1, Ee[le] <= rs && (Bt += xs), m0.startsWith("_")) ee += H[0];
            else {
              const ys = i0.classNameAliases[m0] || m0;
              n0(H[0], ys);
            }
          } else ee += H[0];
          D = K.keywordPatternRe.lastIndex, H = K.keywordPatternRe.exec(he);
        }
        ee += he.substring(D), Re.addText(ee);
      }
      function Et() {
        if (he === "") return;
        let D = null;
        if (typeof K.subLanguage == "string") {
          if (!S[K.subLanguage]) {
            Re.addText(he);
            return;
          }
          D = ut(K.subLanguage, he, true, Ga[K.subLanguage]), Ga[K.subLanguage] = D._top;
        } else D = yr(he, K.subLanguage.length ? K.subLanguage : null);
        K.relevance > 0 && (Bt += D.relevance), Re.__addSublanguage(D._emitter, D.language);
      }
      function Ve() {
        K.subLanguage != null ? Et() : A0(), he = "";
      }
      function n0(D, H) {
        D !== "" && (Re.startScope(H), Re.addText(D), Re.endScope());
      }
      function Pa(D, H) {
        let ee = 1;
        const le = H.length - 1;
        for (; ee <= le; ) {
          if (!D._emit[ee]) {
            ee++;
            continue;
          }
          const De = i0.classNameAliases[D[ee]] || D[ee], m0 = H[ee];
          De ? n0(m0, De) : (he = m0, A0(), he = ""), ee++;
        }
      }
      function Ha(D, H) {
        return D.scope && typeof D.scope == "string" && Re.openNode(i0.classNameAliases[D.scope] || D.scope), D.beginScope && (D.beginScope._wrap ? (n0(he, i0.classNameAliases[D.beginScope._wrap] || D.beginScope._wrap), he = "") : D.beginScope._multi && (Pa(D.beginScope, H), he = "")), K = Object.create(D, { parent: { value: K } }), K;
      }
      function $a(D, H, ee) {
        let le = G(D.endRe, ee);
        if (le) {
          if (D["on:end"]) {
            const De = new e(D);
            D["on:end"](H, De), De.isMatchIgnored && (le = false);
          }
          if (le) {
            for (; D.endsParent && D.parent; ) D = D.parent;
            return D;
          }
        }
        if (D.endsWithParent) return $a(D.parent, H, ee);
      }
      function ps(D) {
        return K.matcher.regexIndex === 0 ? (he += D[0], 1) : (Mr = true, 0);
      }
      function fs(D) {
        const H = D[0], ee = D.rule, le = new e(ee), De = [ee.__beforeBegin, ee["on:begin"]];
        for (const m0 of De) if (m0 && (m0(D, le), le.isMatchIgnored)) return ps(H);
        return ee.skip ? he += H : (ee.excludeBegin && (he += H), Ve(), !ee.returnBegin && !ee.excludeBegin && (he = H)), Ha(ee, D), ee.returnBegin ? 0 : H.length;
      }
      function gs(D) {
        const H = D[0], ee = $.substring(D.index), le = $a(K, D, ee);
        if (!le) return Da;
        const De = K;
        K.endScope && K.endScope._wrap ? (Ve(), n0(H, K.endScope._wrap)) : K.endScope && K.endScope._multi ? (Ve(), Pa(K.endScope, D)) : De.skip ? he += H : (De.returnEnd || De.excludeEnd || (he += H), Ve(), De.excludeEnd && (he = H));
        do
          K.scope && Re.closeNode(), !K.skip && !K.subLanguage && (Bt += K.relevance), K = K.parent;
        while (K !== le.parent);
        return le.starts && Ha(le.starts, D), De.returnEnd ? 0 : H.length;
      }
      function vs() {
        const D = [];
        for (let H = K; H !== i0; H = H.parent) H.scope && D.unshift(H.scope);
        D.forEach((H) => Re.openNode(H));
      }
      let Ct = {};
      function Fa(D, H) {
        const ee = H && H[0];
        if (he += D, ee == null) return Ve(), 0;
        if (Ct.type === "begin" && H.type === "end" && Ct.index === H.index && ee === "") {
          if (he += $.slice(H.index, H.index + 1), !ye) {
            const le = new Error(`0 width match regex (${C})`);
            throw le.languageName = C, le.badRule = Ct.rule, le;
          }
          return 1;
        }
        if (Ct = H, H.type === "begin") return fs(H);
        if (H.type === "illegal" && !re) {
          const le = new Error('Illegal lexeme "' + ee + '" for mode "' + (K.scope || "<unnamed>") + '"');
          throw le.mode = K, le;
        } else if (H.type === "end") {
          const le = gs(H);
          if (le !== Da) return le;
        }
        if (H.type === "illegal" && ee === "") return he += `
`, 1;
        if (Sr > 1e5 && Sr > H.index * 3) throw new Error("potential infinite loop, way more iterations than matches");
        return he += ee, ee.length;
      }
      const i0 = M0(C);
      if (!i0) throw a0(we.replace("{}", C)), new Error('Unknown language: "' + C + '"');
      const bs = Ji(i0);
      let kr = "", K = ue || bs;
      const Ga = {}, Re = new L.__emitter(L);
      vs();
      let he = "", Bt = 0, q0 = 0, Sr = 0, Mr = false;
      try {
        if (i0.__emitTokens) i0.__emitTokens($, Re);
        else {
          for (K.matcher.considerAll(); ; ) {
            Sr++, Mr ? Mr = false : K.matcher.considerAll(), K.matcher.lastIndex = q0;
            const D = K.matcher.exec($);
            if (!D) break;
            const H = $.substring(q0, D.index), ee = Fa(H, D);
            q0 = D.index + ee;
          }
          Fa($.substring(q0));
        }
        return Re.finalize(), kr = Re.toHTML(), { language: C, value: kr, relevance: Bt, illegal: false, _emitter: Re, _top: K };
      } catch (D) {
        if (D.message && D.message.includes("Illegal")) return { language: C, value: br($), illegal: true, relevance: 0, _illegalBy: { message: D.message, index: q0, context: $.slice(q0 - 100, q0 + 100), mode: D.mode, resultSoFar: kr }, _emitter: Re };
        if (ye) return { language: C, value: br($), illegal: false, relevance: 0, errorRaised: D, _emitter: Re, _top: K };
        throw D;
      }
    }
    function xr(C) {
      const $ = { value: br(C), illegal: false, relevance: 0, _top: q, _emitter: new L.__emitter(L) };
      return $._emitter.addText(C), $;
    }
    function yr(C, $) {
      $ = $ || L.languages || Object.keys(S);
      const re = xr(C), ue = $.filter(M0).filter(qa).map((Ve) => ut(Ve, C, false));
      ue.unshift(re);
      const Ee = ue.sort((Ve, n0) => {
        if (Ve.relevance !== n0.relevance) return n0.relevance - Ve.relevance;
        if (Ve.language && n0.language) {
          if (M0(Ve.language).supersetOf === n0.language) return 1;
          if (M0(n0.language).supersetOf === Ve.language) return -1;
        }
        return 0;
      }), [t0, A0] = Ee, Et = t0;
      return Et.secondBest = A0, Et;
    }
    function as(C, $, re) {
      const ue = $ && R[$] || re;
      C.classList.add("hljs"), C.classList.add(`language-${ue}`);
    }
    function wr(C) {
      let $ = null;
      const re = Be(C);
      if (V(re)) return;
      if (zt("before:highlightElement", { el: C, language: re }), C.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
        return;
      }
      if (C.children.length > 0 && (L.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), L.throwUnescapedHTML)) throw new ts("One of your code blocks includes unescaped HTML.", C.innerHTML);
      $ = C;
      const ue = $.textContent, Ee = re ? Se(ue, { language: re, ignoreIllegals: true }) : yr(ue);
      C.innerHTML = Ee.value, C.dataset.highlighted = "yes", as(C, re, Ee.language), C.result = { language: Ee.language, re: Ee.relevance, relevance: Ee.relevance }, Ee.secondBest && (C.secondBest = { language: Ee.secondBest.language, relevance: Ee.secondBest.relevance }), zt("after:highlightElement", { el: C, result: Ee, text: ue });
    }
    function ns(C) {
      L = Na(L, C);
    }
    const is = () => {
      Tt(), S0("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function ss() {
      Tt(), S0("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Oa = false;
    function Tt() {
      function C() {
        Tt();
      }
      if (document.readyState === "loading") {
        Oa || window.addEventListener("DOMContentLoaded", C, false), Oa = true;
        return;
      }
      document.querySelectorAll(L.cssSelector).forEach(wr);
    }
    function ls(C, $) {
      let re = null;
      try {
        re = $(v);
      } catch (ue) {
        if (a0("Language definition for '{}' could not be registered.".replace("{}", C)), ye) a0(ue);
        else throw ue;
        re = q;
      }
      re.name || (re.name = C), S[C] = re, re.rawDefinition = $.bind(null, v), re.aliases && La(re.aliases, { languageName: C });
    }
    function os(C) {
      delete S[C];
      for (const $ of Object.keys(R)) R[$] === C && delete R[$];
    }
    function cs() {
      return Object.keys(S);
    }
    function M0(C) {
      return C = (C || "").toLowerCase(), S[C] || S[R[C]];
    }
    function La(C, { languageName: $ }) {
      typeof C == "string" && (C = [C]), C.forEach((re) => {
        R[re.toLowerCase()] = $;
      });
    }
    function qa(C) {
      const $ = M0(C);
      return $ && !$.disableAutodetect;
    }
    function us(C) {
      C["before:highlightBlock"] && !C["before:highlightElement"] && (C["before:highlightElement"] = ($) => {
        C["before:highlightBlock"](Object.assign({ block: $.el }, $));
      }), C["after:highlightBlock"] && !C["after:highlightElement"] && (C["after:highlightElement"] = ($) => {
        C["after:highlightBlock"](Object.assign({ block: $.el }, $));
      });
    }
    function hs(C) {
      us(C), Z.push(C);
    }
    function ms(C) {
      const $ = Z.indexOf(C);
      $ !== -1 && Z.splice($, 1);
    }
    function zt(C, $) {
      const re = C;
      Z.forEach(function(ue) {
        ue[re] && ue[re]($);
      });
    }
    function ds(C) {
      return S0("10.7.0", "highlightBlock will be removed entirely in v12.0"), S0("10.7.0", "Please use highlightElement now."), wr(C);
    }
    Object.assign(v, { highlight: Se, highlightAuto: yr, highlightAll: Tt, highlightElement: wr, highlightBlock: ds, configure: ns, initHighlighting: is, initHighlightingOnLoad: ss, registerLanguage: ls, unregisterLanguage: os, listLanguages: cs, getLanguage: M0, registerAliases: La, autoDetection: qa, inherit: Na, addPlugin: hs, removePlugin: ms }), v.debugMode = function() {
      ye = false;
    }, v.safeMode = function() {
      ye = true;
    }, v.versionString = es, v.regex = { concat: M, lookahead: y, either: I, optional: k, anyNumberOfTimes: w };
    for (const C in _0) typeof _0[C] == "object" && r(_0[C]);
    return Object.assign(v, _0), v;
  }, K0 = _a2({});
  return K0.newInstance = () => _a2({}), Ar = K0, K0.HighlightJS = K0, K0.default = K0, Ar;
}
var As = Ms();
const $0 = ws(As), Va = "[A-Za-z$_][0-9A-Za-z$_]*", Ts = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"], zs = ["true", "false", "null", "undefined", "NaN", "Infinity"], _n = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], On = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], Ln = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], Es = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"], Cs = [].concat(Ln, _n, On);
function qn(r) {
  const e = r.regex, t = (me, { after: Ye }) => {
    const Ie = "</" + me[0].slice(1);
    return me.input.indexOf(Ie, Ye) !== -1;
  }, a = Va, n = { begin: "<>", end: "</>" }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, l = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (me, Ye) => {
    const Ie = me[0].length + me.index, Le = me.input[Ie];
    if (Le === "<" || Le === ",") {
      Ye.ignoreMatch();
      return;
    }
    Le === ">" && (t(me, { after: Ie }) || Ye.ignoreMatch());
    let e0;
    const Ne = me.input.substring(Ie);
    if (e0 = Ne.match(/^\s*=/)) {
      Ye.ignoreMatch();
      return;
    }
    if ((e0 = Ne.match(/^\s+extends\s+/)) && e0.index === 0) {
      Ye.ignoreMatch();
      return;
    }
  } }, c = { $pattern: Va, keyword: Ts, literal: zs, built_in: Cs, "variable.language": Es }, u = "[0-9](_?[0-9])*", d = `\\.(${u})`, g = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", x = { className: "number", variants: [{ begin: `(\\b(${g})((${d})|\\.)?|(${d}))[eE][+-]?(${u})\\b` }, { begin: `\\b(${g})\\b((${d})\\b|\\.)?|(${d})\\b` }, { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" }, { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" }, { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, { begin: "\\b0[0-7]+n?\\b" }], relevance: 0 }, y = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: c, contains: [] }, w = { begin: ".?html`", end: "", starts: { end: "`", returnEnd: false, contains: [r.BACKSLASH_ESCAPE, y], subLanguage: "xml" } }, k = { begin: ".?css`", end: "", starts: { end: "`", returnEnd: false, contains: [r.BACKSLASH_ESCAPE, y], subLanguage: "css" } }, M = { begin: ".?gql`", end: "", starts: { end: "`", returnEnd: false, contains: [r.BACKSLASH_ESCAPE, y], subLanguage: "graphql" } }, N = { className: "string", begin: "`", end: "`", contains: [r.BACKSLASH_ESCAPE, y] }, P = { className: "comment", variants: [r.COMMENT(/\/\*\*(?!\/)/, "\\*/", { relevance: 0, contains: [{ begin: "(?=@[A-Za-z]+)", relevance: 0, contains: [{ className: "doctag", begin: "@[A-Za-z]+" }, { className: "type", begin: "\\{", end: "\\}", excludeEnd: true, excludeBegin: true, relevance: 0 }, { className: "variable", begin: a + "(?=\\s*(-)|$)", endsParent: true, relevance: 0 }, { begin: /(?=[^\n])\s/, relevance: 0 }] }] }), r.C_BLOCK_COMMENT_MODE, r.C_LINE_COMMENT_MODE] }, G = [r.APOS_STRING_MODE, r.QUOTE_STRING_MODE, w, k, M, N, { match: /\$\d+/ }, x];
  y.contains = G.concat({ begin: /\{/, end: /\}/, keywords: c, contains: ["self"].concat(G) });
  const j = [].concat(P, y.contains), Q = j.concat([{ begin: /(\s*)\(/, end: /\)/, keywords: c, contains: ["self"].concat(j) }]), W = { className: "params", begin: /(\s*)\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: c, contains: Q }, Y = { variants: [{ match: [/class/, /\s+/, a, /\s+/, /extends/, /\s+/, e.concat(a, "(", e.concat(/\./, a), ")*")], scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" } }, { match: [/class/, /\s+/, a], scope: { 1: "keyword", 3: "title.class" } }] }, ae = { relevance: 0, match: e.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), className: "title.class", keywords: { _: [..._n, ...On] } }, te = { label: "use_strict", className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ }, ze = { variants: [{ match: [/function/, /\s+/, a, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }], className: { 1: "keyword", 3: "title.function" }, label: "func.def", contains: [W], illegal: /%/ }, ke = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant" };
  function fe(me) {
    return e.concat("(?!", me.join("|"), ")");
  }
  const Qe = { match: e.concat(/\b/, fe([...Ln, "super", "import"].map((me) => `${me}\\s*\\(`)), a, e.lookahead(/\s*\(/)), className: "title.function", relevance: 0 }, be = { begin: e.concat(/\./, e.lookahead(e.concat(a, /(?![0-9A-Za-z$_(])/))), end: a, excludeBegin: true, keywords: "prototype", className: "property", relevance: 0 }, Oe = { match: [/get|set/, /\s+/, a, /(?=\()/], className: { 1: "keyword", 3: "title.function" }, contains: [{ begin: /\(\)/ }, W] }, Ue = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", r0 = { match: [/const|var|let/, /\s+/, a, /\s*/, /=\s*/, /(async\s*)?/, e.lookahead(Ue)], keywords: "async", className: { 1: "keyword", 3: "title.function" }, contains: [W] };
  return { name: "JavaScript", aliases: ["js", "jsx", "mjs", "cjs"], keywords: c, exports: { PARAMS_CONTAINS: Q, CLASS_REFERENCE: ae }, illegal: /#(?![$_A-z])/, contains: [r.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }), te, r.APOS_STRING_MODE, r.QUOTE_STRING_MODE, w, k, M, N, P, { match: /\$\d+/ }, x, ae, { scope: "attr", match: a + e.lookahead(":"), relevance: 0 }, r0, { begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", keywords: "return throw case", relevance: 0, contains: [P, r.REGEXP_MODE, { className: "function", begin: Ue, returnBegin: true, end: "\\s*=>", contains: [{ className: "params", variants: [{ begin: r.UNDERSCORE_IDENT_RE, relevance: 0 }, { className: null, begin: /\(\s*\)/, skip: true }, { begin: /(\s*)\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: c, contains: Q }] }] }, { begin: /,/, relevance: 0 }, { match: /\s+/, relevance: 0 }, { variants: [{ begin: n.begin, end: n.end }, { match: i }, { begin: l.begin, "on:begin": l.isTrulyOpeningTag, end: l.end }], subLanguage: "xml", contains: [{ begin: l.begin, end: l.end, skip: true, contains: ["self"] }] }] }, ze, { beginKeywords: "while if switch catch for" }, { begin: "\\b(?!function)" + r.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", returnBegin: true, label: "func.def", contains: [W, r.inherit(r.TITLE_MODE, { begin: a, className: "title.function" })] }, { match: /\.\.\./, relevance: 0 }, be, { match: "\\$" + a, relevance: 0 }, { match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" }, contains: [W] }, Qe, ke, Y, Oe, { match: /\$[(.]/ }] };
}
const Bs = (r) => {
  const e = Q0.getInstance().get(r);
  if (e) return e;
  const t = et.getInstance().get(r);
  if (t) return t;
};
function ia() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var G0 = ia();
function Pn(r) {
  G0 = r;
}
var pt = { exec: () => null };
function se(r, e = "") {
  let t = typeof r == "string" ? r : r.source, a = { replace: (n, i) => {
    let l = typeof i == "string" ? i : i.source;
    return l = l.replace(He.caret, "$1"), t = t.replace(n, l), a;
  }, getRegex: () => new RegExp(t, e) };
  return a;
}
var He = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}#`), htmlBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, "i") }, Rs = /^(?:[ \t]*(?:\n|$))+/, Is = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ns = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, bt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ds = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, sa = /(?:[*+-]|\d{1,9}[.)])/, Hn = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, $n = se(Hn).replace(/bull/g, sa).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), _s = se(Hn).replace(/bull/g, sa).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), la = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Os = /^[^\n]+/, oa = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Ls = se(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", oa).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), qs = se(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, sa).getRegex(), Jt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ca = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ps = se("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ca).replace("tag", Jt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Fn = se(la).replace("hr", bt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jt).getRegex(), Hs = se(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Fn).getRegex(), ua = { blockquote: Hs, code: Is, def: Ls, fences: Ns, heading: Ds, hr: bt, html: Ps, lheading: $n, list: qs, newline: Rs, paragraph: Fn, table: pt, text: Os }, ja = se("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", bt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jt).getRegex(), $s = { ...ua, lheading: _s, table: ja, paragraph: se(la).replace("hr", bt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ja).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jt).getRegex() }, Fs = { ...ua, html: se(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ca).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: pt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: se(la).replace("hr", bt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", $n).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Gs = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Us = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Gn = /^( {2,}|\\)\n(?!\s*$)/, Vs = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Qt = /[\p{P}\p{S}]/u, ha = /[\s\p{P}\p{S}]/u, Un = /[^\s\p{P}\p{S}]/u, js = se(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ha).getRegex(), Vn = /(?!~)[\p{P}\p{S}]/u, Ws = /(?!~)[\s\p{P}\p{S}]/u, Xs = /(?:[^\s\p{P}\p{S}]|~)/u, Zs = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, jn = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ys = se(jn, "u").replace(/punct/g, Qt).getRegex(), Ks = se(jn, "u").replace(/punct/g, Vn).getRegex(), Wn = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Js = se(Wn, "gu").replace(/notPunctSpace/g, Un).replace(/punctSpace/g, ha).replace(/punct/g, Qt).getRegex(), Qs = se(Wn, "gu").replace(/notPunctSpace/g, Xs).replace(/punctSpace/g, Ws).replace(/punct/g, Vn).getRegex(), el = se("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Un).replace(/punctSpace/g, ha).replace(/punct/g, Qt).getRegex(), tl = se(/\\(punct)/, "gu").replace(/punct/g, Qt).getRegex(), rl = se(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), al = se(ca).replace("(?:-->|$)", "-->").getRegex(), nl = se("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", al).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ut = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, il = se(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Ut).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Xn = se(/^!?\[(label)\]\[(ref)\]/).replace("label", Ut).replace("ref", oa).getRegex(), Zn = se(/^!?\[(ref)\](?:\[\])?/).replace("ref", oa).getRegex(), sl = se("reflink|nolink(?!\\()", "g").replace("reflink", Xn).replace("nolink", Zn).getRegex(), ma = { _backpedal: pt, anyPunctuation: tl, autolink: rl, blockSkip: Zs, br: Gn, code: Us, del: pt, emStrongLDelim: Ys, emStrongRDelimAst: Js, emStrongRDelimUnd: el, escape: Gs, link: il, nolink: Zn, punctuation: js, reflink: Xn, reflinkSearch: sl, tag: nl, text: Vs, url: pt }, ll = { ...ma, link: se(/^!?\[(label)\]\((.*?)\)/).replace("label", Ut).getRegex(), reflink: se(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ut).getRegex() }, Fr = { ...ma, emStrongRDelimAst: Qs, emStrongLDelim: Ks, url: se(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, ol = { ...Fr, br: se(Gn).replace("{2,}", "*").getRegex(), text: se(Fr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Rt = { normal: ua, gfm: $s, pedantic: Fs }, ht = { normal: ma, gfm: Fr, breaks: ol, pedantic: ll }, cl = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Wa = (r) => cl[r];
function s0(r, e) {
  if (e) {
    if (He.escapeTest.test(r)) return r.replace(He.escapeReplace, Wa);
  } else if (He.escapeTestNoEncode.test(r)) return r.replace(He.escapeReplaceNoEncode, Wa);
  return r;
}
function Xa(r) {
  try {
    r = encodeURI(r).replace(He.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function Za(r, e) {
  var _a2;
  let t = r.replace(He.findPipe, (i, l, c) => {
    let u = false, d = l;
    for (; --d >= 0 && c[d] === "\\"; ) u = !u;
    return u ? "|" : " |";
  }), a = t.split(He.splitPipe), n = 0;
  if (a[0].trim() || a.shift(), a.length > 0 && !((_a2 = a.at(-1)) == null ? void 0 : _a2.trim()) && a.pop(), e) if (a.length > e) a.splice(e);
  else for (; a.length < e; ) a.push("");
  for (; n < a.length; n++) a[n] = a[n].trim().replace(He.slashPipe, "|");
  return a;
}
function mt(r, e, t) {
  let a = r.length;
  if (a === 0) return "";
  let n = 0;
  for (; n < a && r.charAt(a - n - 1) === e; ) n++;
  return r.slice(0, a - n);
}
function ul(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let a = 0; a < r.length; a++) if (r[a] === "\\") a++;
  else if (r[a] === e[0]) t++;
  else if (r[a] === e[1] && (t--, t < 0)) return a;
  return t > 0 ? -2 : -1;
}
function Ya(r, e, t, a, n) {
  let i = e.href, l = e.title || null, c = r[1].replace(n.other.outputLinkReplace, "$1");
  a.state.inLink = true;
  let u = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: l, text: c, tokens: a.inlineTokens(c) };
  return a.state.inLink = false, u;
}
function hl(r, e, t) {
  let a = r.match(t.other.indentCodeCompensation);
  if (a === null) return e;
  let n = a[1];
  return e.split(`
`).map((i) => {
    let l = i.match(t.other.beginningSpace);
    if (l === null) return i;
    let [c] = l;
    return c.length >= n.length ? i.slice(n.length) : i;
  }).join(`
`);
}
var Vt = class {
  constructor(r) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = r || G0;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : mt(t, `
`) };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], a = hl(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: a };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let a = mt(t, "#");
        (this.options.pedantic || !a || this.rules.other.endingSpaceChar.test(a)) && (t = a.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: mt(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = mt(e[0], `
`).split(`
`), a = "", n = "", i = [];
      for (; t.length > 0; ) {
        let l = false, c = [], u;
        for (u = 0; u < t.length; u++) if (this.rules.other.blockquoteStart.test(t[u])) c.push(t[u]), l = true;
        else if (!l) c.push(t[u]);
        else break;
        t = t.slice(u);
        let d = c.join(`
`), g = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        a = a ? `${a}
${d}` : d, n = n ? `${n}
${g}` : g;
        let x = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(g, i, true), this.lexer.state.top = x, t.length === 0) break;
        let y = i.at(-1);
        if ((y == null ? void 0 : y.type) === "code") break;
        if ((y == null ? void 0 : y.type) === "blockquote") {
          let w = y, k = w.raw + `
` + t.join(`
`), M = this.blockquote(k);
          i[i.length - 1] = M, a = a.substring(0, a.length - w.raw.length) + M.raw, n = n.substring(0, n.length - w.text.length) + M.text;
          break;
        } else if ((y == null ? void 0 : y.type) === "list") {
          let w = y, k = w.raw + `
` + t.join(`
`), M = this.list(k);
          i[i.length - 1] = M, a = a.substring(0, a.length - y.raw.length) + M.raw, n = n.substring(0, n.length - w.raw.length) + M.raw, t = k.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: a, tokens: i, text: n };
    }
  }
  list(r) {
    let e = this.rules.block.list.exec(r);
    if (e) {
      let t = e[1].trim(), a = t.length > 1, n = { type: "list", raw: "", ordered: a, start: a ? +t.slice(0, -1) : "", loose: false, items: [] };
      t = a ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = a ? t : "[*+-]");
      let i = this.rules.other.listItemRegex(t), l = false;
      for (; r; ) {
        let u = false, d = "", g = "";
        if (!(e = i.exec(r)) || this.rules.block.hr.test(r)) break;
        d = e[0], r = r.substring(d.length);
        let x = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (I) => " ".repeat(3 * I.length)), y = r.split(`
`, 1)[0], w = !x.trim(), k = 0;
        if (this.options.pedantic ? (k = 2, g = x.trimStart()) : w ? k = e[1].length + 1 : (k = e[2].search(this.rules.other.nonSpaceChar), k = k > 4 ? 1 : k, g = x.slice(k), k += e[1].length), w && this.rules.other.blankLine.test(y) && (d += y + `
`, r = r.substring(y.length + 1), u = true), !u) {
          let I = this.rules.other.nextBulletRegex(k), P = this.rules.other.hrRegex(k), G = this.rules.other.fencesBeginRegex(k), j = this.rules.other.headingBeginRegex(k), Q = this.rules.other.htmlBeginRegex(k);
          for (; r; ) {
            let W = r.split(`
`, 1)[0], Y;
            if (y = W, this.options.pedantic ? (y = y.replace(this.rules.other.listReplaceNesting, "  "), Y = y) : Y = y.replace(this.rules.other.tabCharGlobal, "    "), G.test(y) || j.test(y) || Q.test(y) || I.test(y) || P.test(y)) break;
            if (Y.search(this.rules.other.nonSpaceChar) >= k || !y.trim()) g += `
` + Y.slice(k);
            else {
              if (w || x.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || G.test(x) || j.test(x) || P.test(x)) break;
              g += `
` + y;
            }
            !w && !y.trim() && (w = true), d += W + `
`, r = r.substring(W.length + 1), x = Y.slice(k);
          }
        }
        n.loose || (l ? n.loose = true : this.rules.other.doubleBlankLine.test(d) && (l = true));
        let M = null, N;
        this.options.gfm && (M = this.rules.other.listIsTask.exec(g), M && (N = M[0] !== "[ ] ", g = g.replace(this.rules.other.listReplaceTask, ""))), n.items.push({ type: "list_item", raw: d, task: !!M, checked: N, loose: false, text: g, tokens: [] }), n.raw += d;
      }
      let c = n.items.at(-1);
      if (c) c.raw = c.raw.trimEnd(), c.text = c.text.trimEnd();
      else return;
      n.raw = n.raw.trimEnd();
      for (let u = 0; u < n.items.length; u++) if (this.lexer.state.top = false, n.items[u].tokens = this.lexer.blockTokens(n.items[u].text, []), !n.loose) {
        let d = n.items[u].tokens.filter((x) => x.type === "space"), g = d.length > 0 && d.some((x) => this.rules.other.anyLine.test(x.raw));
        n.loose = g;
      }
      if (n.loose) for (let u = 0; u < n.items.length; u++) n.items[u].loose = true;
      return n;
    }
  }
  html(r) {
    let e = this.rules.block.html.exec(r);
    if (e) return { type: "html", block: true, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), a = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: a, title: n };
    }
  }
  table(r) {
    var _a2;
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = Za(e[1]), a = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = ((_a2 = e[3]) == null ? void 0 : _a2.trim()) ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === a.length) {
      for (let l of a) this.rules.other.tableAlignRight.test(l) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? i.align.push("left") : i.align.push(null);
      for (let l = 0; l < t.length; l++) i.header.push({ text: t[l], tokens: this.lexer.inline(t[l]), header: true, align: i.align[l] });
      for (let l of n) i.rows.push(Za(l, i.header.length).map((c, u) => ({ text: c, tokens: this.lexer.inline(c), header: false, align: i.align[u] })));
      return i;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) return { type: "heading", raw: e[0], depth: e[2].charAt(0) === "=" ? 1 : 2, text: e[1], tokens: this.lexer.inline(e[1]) };
  }
  paragraph(r) {
    let e = this.rules.block.paragraph.exec(r);
    if (e) {
      let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(r) {
    let e = this.rules.block.text.exec(r);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(r) {
    let e = this.rules.inline.escape.exec(r);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(r) {
    let e = this.rules.inline.tag.exec(r);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: e[0] };
  }
  link(r) {
    let e = this.rules.inline.link.exec(r);
    if (e) {
      let t = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t)) return;
        let i = mt(t.slice(0, -1), "\\");
        if ((t.length - i.length) % 2 === 0) return;
      } else {
        let i = ul(e[2], "()");
        if (i === -2) return;
        if (i > -1) {
          let l = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + i;
          e[2] = e[2].substring(0, i), e[0] = e[0].substring(0, l).trim(), e[3] = "";
        }
      }
      let a = e[2], n = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(a);
        i && (a = i[1], n = i[3]);
      } else n = e[3] ? e[3].slice(1, -1) : "";
      return a = a.trim(), this.rules.other.startAngleBracket.test(a) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? a = a.slice(1) : a = a.slice(1, -1)), Ya(e, { href: a && a.replace(this.rules.inline.anyPunctuation, "$1"), title: n && n.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(r, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
      let a = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = e[a.toLowerCase()];
      if (!n) {
        let i = t[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return Ya(t, n, t[0], this.lexer, this.rules);
    }
  }
  emStrong(r, e, t = "") {
    let a = this.rules.inline.emStrongLDelim.exec(r);
    if (!(!a || a[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(a[1] || a[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let n = [...a[0]].length - 1, i, l, c = n, u = 0, d = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, e = e.slice(-1 * r.length + n); (a = d.exec(e)) != null; ) {
        if (i = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !i) continue;
        if (l = [...i].length, a[3] || a[4]) {
          c += l;
          continue;
        } else if ((a[5] || a[6]) && n % 3 && !((n + l) % 3)) {
          u += l;
          continue;
        }
        if (c -= l, c > 0) continue;
        l = Math.min(l, l + c + u);
        let g = [...a[0]][0].length, x = r.slice(0, n + a.index + g + l);
        if (Math.min(n, l) % 2) {
          let w = x.slice(1, -1);
          return { type: "em", raw: x, text: w, tokens: this.lexer.inlineTokens(w) };
        }
        let y = x.slice(2, -2);
        return { type: "strong", raw: x, text: y, tokens: this.lexer.inlineTokens(y) };
      }
    }
  }
  codespan(r) {
    let e = this.rules.inline.code.exec(r);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), a = this.rules.other.nonSpaceChar.test(t), n = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return a && n && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(r) {
    let e = this.rules.inline.br.exec(r);
    if (e) return { type: "br", raw: e[0] };
  }
  del(r) {
    let e = this.rules.inline.del.exec(r);
    if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
  }
  autolink(r) {
    let e = this.rules.inline.autolink.exec(r);
    if (e) {
      let t, a;
      return e[2] === "@" ? (t = e[1], a = "mailto:" + t) : (t = e[1], a = t), { type: "link", raw: e[0], text: t, href: a, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(r) {
    var _a2;
    let e;
    if (e = this.rules.inline.url.exec(r)) {
      let t, a;
      if (e[2] === "@") t = e[0], a = "mailto:" + t;
      else {
        let n;
        do
          n = e[0], e[0] = ((_a2 = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : _a2[0]) ?? "";
        while (n !== e[0]);
        t = e[0], e[1] === "www." ? a = "http://" + e[0] : a = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: a, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(r) {
    let e = this.rules.inline.text.exec(r);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, f0 = class Gr {
  constructor(e) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || G0, this.options.tokenizer = this.options.tokenizer || new Vt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { other: He, block: Rt.normal, inline: ht.normal };
    this.options.pedantic ? (t.block = Rt.pedantic, t.inline = ht.pedantic) : this.options.gfm && (t.block = Rt.gfm, this.options.breaks ? t.inline = ht.breaks : t.inline = ht.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Rt, inline: ht };
  }
  static lex(e, t) {
    return new Gr(t).lex(e);
  }
  static lexInline(e, t) {
    return new Gr(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(He.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let a = this.inlineQueue[t];
      this.inlineTokens(a.src, a.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], a = false) {
    var _a2, _b, _c;
    for (this.options.pedantic && (e = e.replace(He.tabCharGlobal, "    ").replace(He.spaceLine, "")); e; ) {
      let n;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.block) == null ? void 0 : _b.some((l) => (n = l.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), true) : false)) continue;
      if (n = this.tokenizer.space(e)) {
        e = e.substring(n.raw.length);
        let l = t.at(-1);
        n.raw.length === 1 && l !== void 0 ? l.raw += `
` : t.push(n);
        continue;
      }
      if (n = this.tokenizer.code(e)) {
        e = e.substring(n.raw.length);
        let l = t.at(-1);
        (l == null ? void 0 : l.type) === "paragraph" || (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + n.raw, l.text += `
` + n.text, this.inlineQueue.at(-1).src = l.text) : t.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.list(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.html(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.def(e)) {
        e = e.substring(n.raw.length);
        let l = t.at(-1);
        (l == null ? void 0 : l.type) === "paragraph" || (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + n.raw, l.text += `
` + n.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title });
        continue;
      }
      if (n = this.tokenizer.table(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      let i = e;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startBlock) {
        let l = 1 / 0, c = e.slice(1), u;
        this.options.extensions.startBlock.forEach((d) => {
          u = d.call({ lexer: this }, c), typeof u == "number" && u >= 0 && (l = Math.min(l, u));
        }), l < 1 / 0 && l >= 0 && (i = e.substring(0, l + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(i))) {
        let l = t.at(-1);
        a && (l == null ? void 0 : l.type) === "paragraph" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + n.raw, l.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : t.push(n), a = i.length !== e.length, e = e.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(e)) {
        e = e.substring(n.raw.length);
        let l = t.at(-1);
        (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + n.raw, l.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : t.push(n);
        continue;
      }
      if (e) {
        let l = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(l);
          break;
        } else throw new Error(l);
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    var _a2, _b, _c;
    let a = e, n = null;
    if (this.tokens.links) {
      let c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null; ) c.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(a)) != null; ) a = a.slice(0, n.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(a)) != null; ) a = a.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let i = false, l = "";
    for (; e; ) {
      i || (l = ""), i = false;
      let c;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.inline) == null ? void 0 : _b.some((d) => (c = d.call({ lexer: this }, e, t)) ? (e = e.substring(c.raw.length), t.push(c), true) : false)) continue;
      if (c = this.tokenizer.escape(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.tag(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.link(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(c.raw.length);
        let d = t.at(-1);
        c.type === "text" && (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : t.push(c);
        continue;
      }
      if (c = this.tokenizer.emStrong(e, a, l)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.codespan(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.br(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.del(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.autolink(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(e))) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      let u = e;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startInline) {
        let d = 1 / 0, g = e.slice(1), x;
        this.options.extensions.startInline.forEach((y) => {
          x = y.call({ lexer: this }, g), typeof x == "number" && x >= 0 && (d = Math.min(d, x));
        }), d < 1 / 0 && d >= 0 && (u = e.substring(0, d + 1));
      }
      if (c = this.tokenizer.inlineText(u)) {
        e = e.substring(c.raw.length), c.raw.slice(-1) !== "_" && (l = c.raw.slice(-1)), i = true;
        let d = t.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : t.push(c);
        continue;
      }
      if (e) {
        let d = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else throw new Error(d);
      }
    }
    return t;
  }
}, jt = class {
  constructor(r) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = r || G0;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    var _a2;
    let a = (_a2 = (e || "").match(He.notSpaceStart)) == null ? void 0 : _a2[0], n = r.replace(He.endingNewline, "") + `
`;
    return a ? '<pre><code class="language-' + s0(a) + '">' + (t ? n : s0(n, true)) + `</code></pre>
` : "<pre><code>" + (t ? n : s0(n, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: r }) {
    return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
  }
  html({ text: r }) {
    return r;
  }
  heading({ tokens: r, depth: e }) {
    return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`;
  }
  hr(r) {
    return `<hr>
`;
  }
  list(r) {
    let e = r.ordered, t = r.start, a = "";
    for (let l = 0; l < r.items.length; l++) {
      let c = r.items[l];
      a += this.listitem(c);
    }
    let n = e ? "ol" : "ul", i = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + n + i + `>
` + a + "</" + n + `>
`;
  }
  listitem(r) {
    var _a2;
    let e = "";
    if (r.task) {
      let t = this.checkbox({ checked: !!r.checked });
      r.loose ? ((_a2 = r.tokens[0]) == null ? void 0 : _a2.type) === "paragraph" ? (r.tokens[0].text = t + " " + r.tokens[0].text, r.tokens[0].tokens && r.tokens[0].tokens.length > 0 && r.tokens[0].tokens[0].type === "text" && (r.tokens[0].tokens[0].text = t + " " + s0(r.tokens[0].tokens[0].text), r.tokens[0].tokens[0].escaped = true)) : r.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: true }) : e += t + " ";
    }
    return e += this.parser.parse(r.tokens, !!r.loose), `<li>${e}</li>
`;
  }
  checkbox({ checked: r }) {
    return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: r }) {
    return `<p>${this.parser.parseInline(r)}</p>
`;
  }
  table(r) {
    let e = "", t = "";
    for (let n = 0; n < r.header.length; n++) t += this.tablecell(r.header[n]);
    e += this.tablerow({ text: t });
    let a = "";
    for (let n = 0; n < r.rows.length; n++) {
      let i = r.rows[n];
      t = "";
      for (let l = 0; l < i.length; l++) t += this.tablecell(i[l]);
      a += this.tablerow({ text: t });
    }
    return a && (a = `<tbody>${a}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + a + `</table>
`;
  }
  tablerow({ text: r }) {
    return `<tr>
${r}</tr>
`;
  }
  tablecell(r) {
    let e = this.parser.parseInline(r.tokens), t = r.header ? "th" : "td";
    return (r.align ? `<${t} align="${r.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: r }) {
    return `<strong>${this.parser.parseInline(r)}</strong>`;
  }
  em({ tokens: r }) {
    return `<em>${this.parser.parseInline(r)}</em>`;
  }
  codespan({ text: r }) {
    return `<code>${s0(r, true)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let a = this.parser.parseInline(t), n = Xa(r);
    if (n === null) return a;
    r = n;
    let i = '<a href="' + r + '"';
    return e && (i += ' title="' + s0(e) + '"'), i += ">" + a + "</a>", i;
  }
  image({ href: r, title: e, text: t, tokens: a }) {
    a && (t = this.parser.parseInline(a, this.parser.textRenderer));
    let n = Xa(r);
    if (n === null) return s0(t);
    r = n;
    let i = `<img src="${r}" alt="${t}"`;
    return e && (i += ` title="${s0(e)}"`), i += ">", i;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : s0(r.text);
  }
}, da = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}, g0 = class Ur {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e || G0, this.options.renderer = this.options.renderer || new jt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new da();
  }
  static parse(e, t) {
    return new Ur(t).parse(e);
  }
  static parseInline(e, t) {
    return new Ur(t).parseInline(e);
  }
  parse(e, t = true) {
    var _a2, _b;
    let a = "";
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[i.type]) {
        let c = i, u = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (u !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c.type)) {
          a += u || "";
          continue;
        }
      }
      let l = i;
      switch (l.type) {
        case "space": {
          a += this.renderer.space(l);
          continue;
        }
        case "hr": {
          a += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          a += this.renderer.heading(l);
          continue;
        }
        case "code": {
          a += this.renderer.code(l);
          continue;
        }
        case "table": {
          a += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          a += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          a += this.renderer.list(l);
          continue;
        }
        case "html": {
          a += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          a += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let c = l, u = this.renderer.text(c);
          for (; n + 1 < e.length && e[n + 1].type === "text"; ) c = e[++n], u += `
` + this.renderer.text(c);
          t ? a += this.renderer.paragraph({ type: "paragraph", raw: u, text: u, tokens: [{ type: "text", raw: u, text: u, escaped: true }] }) : a += u;
          continue;
        }
        default: {
          let c = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent) return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return a;
  }
  parseInline(e, t = this.renderer) {
    var _a2, _b;
    let a = "";
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[i.type]) {
        let c = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (c !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          a += c || "";
          continue;
        }
      }
      let l = i;
      switch (l.type) {
        case "escape": {
          a += t.text(l);
          break;
        }
        case "html": {
          a += t.html(l);
          break;
        }
        case "link": {
          a += t.link(l);
          break;
        }
        case "image": {
          a += t.image(l);
          break;
        }
        case "strong": {
          a += t.strong(l);
          break;
        }
        case "em": {
          a += t.em(l);
          break;
        }
        case "codespan": {
          a += t.codespan(l);
          break;
        }
        case "br": {
          a += t.br(l);
          break;
        }
        case "del": {
          a += t.del(l);
          break;
        }
        case "text": {
          a += t.text(l);
          break;
        }
        default: {
          let c = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent) return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return a;
  }
}, $t = (_a = class {
  constructor(r) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = r || G0;
  }
  preprocess(r) {
    return r;
  }
  postprocess(r) {
    return r;
  }
  processAllTokens(r) {
    return r;
  }
  provideLexer() {
    return this.block ? f0.lex : f0.lexInline;
  }
  provideParser() {
    return this.block ? g0.parse : g0.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a), Yn = class {
  constructor(...r) {
    __publicField(this, "defaults", ia());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", g0);
    __publicField(this, "Renderer", jt);
    __publicField(this, "TextRenderer", da);
    __publicField(this, "Lexer", f0);
    __publicField(this, "Tokenizer", Vt);
    __publicField(this, "Hooks", $t);
    this.use(...r);
  }
  walkTokens(r, e) {
    var _a2, _b;
    let t = [];
    for (let a of r) switch (t = t.concat(e.call(this, a)), a.type) {
      case "table": {
        let n = a;
        for (let i of n.header) t = t.concat(this.walkTokens(i.tokens, e));
        for (let i of n.rows) for (let l of i) t = t.concat(this.walkTokens(l.tokens, e));
        break;
      }
      case "list": {
        let n = a;
        t = t.concat(this.walkTokens(n.items, e));
        break;
      }
      default: {
        let n = a;
        ((_b = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) == null ? void 0 : _b[n.type]) ? this.defaults.extensions.childTokens[n.type].forEach((i) => {
          let l = n[i].flat(1 / 0);
          t = t.concat(this.walkTokens(l, e));
        }) : n.tokens && (t = t.concat(this.walkTokens(n.tokens, e)));
      }
    }
    return t;
  }
  use(...r) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      let a = { ...t };
      if (a.async = this.defaults.async || a.async || false, t.extensions && (t.extensions.forEach((n) => {
        if (!n.name) throw new Error("extension name required");
        if ("renderer" in n) {
          let i = e.renderers[n.name];
          i ? e.renderers[n.name] = function(...l) {
            let c = n.renderer.apply(this, l);
            return c === false && (c = i.apply(this, l)), c;
          } : e.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i = e[n.level];
          i ? i.unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (e.childTokens[n.name] = n.childTokens);
      }), a.extensions = e), t.renderer) {
        let n = this.defaults.renderer || new jt(this.defaults);
        for (let i in t.renderer) {
          if (!(i in n)) throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i)) continue;
          let l = i, c = t.renderer[l], u = n[l];
          n[l] = (...d) => {
            let g = c.apply(n, d);
            return g === false && (g = u.apply(n, d)), g || "";
          };
        }
        a.renderer = n;
      }
      if (t.tokenizer) {
        let n = this.defaults.tokenizer || new Vt(this.defaults);
        for (let i in t.tokenizer) {
          if (!(i in n)) throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i)) continue;
          let l = i, c = t.tokenizer[l], u = n[l];
          n[l] = (...d) => {
            let g = c.apply(n, d);
            return g === false && (g = u.apply(n, d)), g;
          };
        }
        a.tokenizer = n;
      }
      if (t.hooks) {
        let n = this.defaults.hooks || new $t();
        for (let i in t.hooks) {
          if (!(i in n)) throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i)) continue;
          let l = i, c = t.hooks[l], u = n[l];
          $t.passThroughHooks.has(i) ? n[l] = (d) => {
            if (this.defaults.async) return Promise.resolve(c.call(n, d)).then((x) => u.call(n, x));
            let g = c.call(n, d);
            return u.call(n, g);
          } : n[l] = (...d) => {
            let g = c.apply(n, d);
            return g === false && (g = u.apply(n, d)), g;
          };
        }
        a.hooks = n;
      }
      if (t.walkTokens) {
        let n = this.defaults.walkTokens, i = t.walkTokens;
        a.walkTokens = function(l) {
          let c = [];
          return c.push(i.call(this, l)), n && (c = c.concat(n.call(this, l))), c;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, e) {
    return f0.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return g0.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let a = { ...t }, n = { ...this.defaults, ...a }, i = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === true && a.async === false) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      n.hooks && (n.hooks.options = n, n.hooks.block = r);
      let l = n.hooks ? n.hooks.provideLexer() : r ? f0.lex : f0.lexInline, c = n.hooks ? n.hooks.provideParser() : r ? g0.parse : g0.parseInline;
      if (n.async) return Promise.resolve(n.hooks ? n.hooks.preprocess(e) : e).then((u) => l(u, n)).then((u) => n.hooks ? n.hooks.processAllTokens(u) : u).then((u) => n.walkTokens ? Promise.all(this.walkTokens(u, n.walkTokens)).then(() => u) : u).then((u) => c(u, n)).then((u) => n.hooks ? n.hooks.postprocess(u) : u).catch(i);
      try {
        n.hooks && (e = n.hooks.preprocess(e));
        let u = l(e, n);
        n.hooks && (u = n.hooks.processAllTokens(u)), n.walkTokens && this.walkTokens(u, n.walkTokens);
        let d = c(u, n);
        return n.hooks && (d = n.hooks.postprocess(d)), d;
      } catch (u) {
        return i(u);
      }
    };
  }
  onError(r, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
        let a = "<p>An error occurred:</p><pre>" + s0(t.message + "", true) + "</pre>";
        return e ? Promise.resolve(a) : a;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, F0 = new Yn();
function oe(r, e) {
  return F0.parse(r, e);
}
oe.options = oe.setOptions = function(r) {
  return F0.setOptions(r), oe.defaults = F0.defaults, Pn(oe.defaults), oe;
};
oe.getDefaults = ia;
oe.defaults = G0;
oe.use = function(...r) {
  return F0.use(...r), oe.defaults = F0.defaults, Pn(oe.defaults), oe;
};
oe.walkTokens = function(r, e) {
  return F0.walkTokens(r, e);
};
oe.parseInline = F0.parseInline;
oe.Parser = g0;
oe.parser = g0.parse;
oe.Renderer = jt;
oe.TextRenderer = da;
oe.Lexer = f0;
oe.lexer = f0.lex;
oe.Tokenizer = Vt;
oe.Hooks = $t;
oe.parse = oe;
oe.options;
oe.setOptions;
oe.use;
oe.walkTokens;
oe.parseInline;
g0.parse;
f0.lex;
function ml(r) {
  if (typeof r == "function" && (r = { highlight: r }), !r || typeof r.highlight != "function") throw new Error("Must provide highlight function");
  return typeof r.langPrefix != "string" && (r.langPrefix = "language-"), typeof r.emptyLangClass != "string" && (r.emptyLangClass = ""), { async: !!r.async, walkTokens(e) {
    if (e.type !== "code") return;
    const t = Ka(e.lang);
    if (r.async) return Promise.resolve(r.highlight(e.text, t, e.lang || "")).then(Ja(e));
    const a = r.highlight(e.text, t, e.lang || "");
    if (a instanceof Promise) throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
    Ja(e)(a);
  }, useNewRenderer: true, renderer: { code(e, t, a) {
    typeof e == "object" && (a = e.escaped, t = e.lang, e = e.text);
    const n = Ka(t), i = n ? r.langPrefix + en(n) : r.emptyLangClass, l = i ? ` class="${i}"` : "";
    return e = e.replace(/\n$/, ""), `<pre><code${l}>${a ? e : en(e, true)}
</code></pre>`;
  } } };
}
function Ka(r) {
  return (r || "").match(/\S*/)[0];
}
function Ja(r) {
  return (e) => {
    typeof e == "string" && e !== r.text && (r.escaped = true, r.text = e);
  };
}
const Kn = /[&<>"']/, dl = new RegExp(Kn.source, "g"), Jn = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, pl = new RegExp(Jn.source, "g"), fl = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Qa = (r) => fl[r];
function en(r, e) {
  if (e) {
    if (Kn.test(r)) return r.replace(dl, Qa);
  } else if (Jn.test(r)) return r.replace(pl, Qa);
  return r;
}
class z extends Error {
  constructor(e, t) {
    var a = "KaTeX parse error: " + e, n, i, l = t && t.loc;
    if (l && l.start <= l.end) {
      var c = l.lexer.input;
      n = l.start, i = l.end, n === c.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
      var u = c.slice(n, i).replace(/[^]/g, "$&\u0332"), d;
      n > 15 ? d = "\u2026" + c.slice(n - 15, n) : d = c.slice(0, n);
      var g;
      i + 15 < c.length ? g = c.slice(i, i + 15) + "\u2026" : g = c.slice(i), a += d + u + g;
    }
    super(a), this.name = "ParseError", Object.setPrototypeOf(this, z.prototype), this.position = n, n != null && i != null && (this.length = i - n), this.rawMessage = e;
  }
}
var gl = /([A-Z])/g, pa = (r) => r.replace(gl, "-$1").toLowerCase(), vl = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, bl = /[&><"']/g, _e = (r) => String(r).replace(bl, (e) => vl[e]), Ft = (r) => r.type === "ordgroup" || r.type === "color" ? r.body.length === 1 ? Ft(r.body[0]) : r : r.type === "font" ? Ft(r.body) : r, xl = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), x0 = (r) => xl.has(Ft(r).type), yl = (r) => {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, Vr = { displayMode: { type: "boolean", description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.", cli: "-d, --display-mode" }, output: { type: { enum: ["htmlAndMathml", "html", "mathml"] }, description: "Determines the markup language of the output.", cli: "-F, --format <type>" }, leqno: { type: "boolean", description: "Render display math in leqno style (left-justified tags)." }, fleqn: { type: "boolean", description: "Render display math flush left." }, throwOnError: { type: "boolean", default: true, cli: "-t, --no-throw-on-error", cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error." }, errorColor: { type: "string", default: "#cc0000", cli: "-c, --error-color <color>", cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.", cliProcessor: (r) => "#" + r }, macros: { type: "object", cli: "-m, --macro <def>", cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).", cliDefault: [], cliProcessor: (r, e) => (e.push(r), e) }, minRuleThickness: { type: "number", description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.", processor: (r) => Math.max(0, r), cli: "--min-rule-thickness <size>", cliProcessor: parseFloat }, colorIsTextColor: { type: "boolean", description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.", cli: "-b, --color-is-text-color" }, strict: { type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"], description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.", cli: "-S, --strict", cliDefault: false }, trust: { type: ["boolean", "function"], description: "Trust the input, enabling all HTML features such as \\url.", cli: "-T, --trust" }, maxSize: { type: "number", default: 1 / 0, description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large", processor: (r) => Math.max(0, r), cli: "-s, --max-size <n>", cliProcessor: parseInt }, maxExpand: { type: "number", default: 1e3, description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.", processor: (r) => Math.max(0, r), cli: "-e, --max-expand <n>", cliProcessor: (r) => r === "Infinity" ? 1 / 0 : parseInt(r) }, globalGroup: { type: "boolean", cli: false } };
function wl(r) {
  if ("default" in r) return r.default;
  var e = r.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string") return t.enum[0];
  switch (t) {
    case "boolean":
      return false;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class fa {
  constructor(e) {
    e === void 0 && (e = {}), e = e || {};
    for (var t of Object.keys(Vr)) {
      var a = Vr[t], n = e[t];
      this[t] = n !== void 0 ? a.processor ? a.processor(n) : n : wl(a);
    }
  }
  reportNonstrict(e, t, a) {
    var n = this.strict;
    if (typeof n == "function" && (n = n(e, t, a)), !(!n || n === "ignore")) {
      if (n === true || n === "error") throw new z("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), a);
      n === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]"));
    }
  }
  useStrictBehavior(e, t, a) {
    var n = this.strict;
    if (typeof n == "function") try {
      n = n(e, t, a);
    } catch {
      n = "error";
    }
    return !n || n === "ignore" ? false : n === true || n === "error" ? true : n === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]")), false);
  }
  isTrusted(e) {
    if ("url" in e && e.url && !e.protocol) {
      var t = yl(e.url);
      if (t == null) return false;
      e.protocol = t;
    }
    var a = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!a;
  }
}
class T0 {
  constructor(e, t, a) {
    this.id = e, this.size = t, this.cramped = a;
  }
  sup() {
    return l0[kl[this.id]];
  }
  sub() {
    return l0[Sl[this.id]];
  }
  fracNum() {
    return l0[Ml[this.id]];
  }
  fracDen() {
    return l0[Al[this.id]];
  }
  cramp() {
    return l0[Tl[this.id]];
  }
  text() {
    return l0[zl[this.id]];
  }
  isTight() {
    return this.size >= 2;
  }
}
var ga = 0, Wt = 1, tt = 2, v0 = 3, gt = 4, Ke = 5, rt = 6, $e = 7, l0 = [new T0(ga, 0, false), new T0(Wt, 0, true), new T0(tt, 1, false), new T0(v0, 1, true), new T0(gt, 2, false), new T0(Ke, 2, true), new T0(rt, 3, false), new T0($e, 3, true)], kl = [gt, Ke, gt, Ke, rt, $e, rt, $e], Sl = [Ke, Ke, Ke, Ke, $e, $e, $e, $e], Ml = [tt, v0, gt, Ke, rt, $e, rt, $e], Al = [v0, v0, Ke, Ke, $e, $e, $e, $e], Tl = [Wt, Wt, v0, v0, Ke, Ke, $e, $e], zl = [ga, Wt, tt, v0, tt, v0, tt, v0], X = { DISPLAY: l0[ga], TEXT: l0[tt], SCRIPT: l0[gt], SCRIPTSCRIPT: l0[rt] }, jr = [{ name: "latin", blocks: [[256, 591], [768, 879]] }, { name: "cyrillic", blocks: [[1024, 1279]] }, { name: "armenian", blocks: [[1328, 1423]] }, { name: "brahmic", blocks: [[2304, 4255]] }, { name: "georgian", blocks: [[4256, 4351]] }, { name: "cjk", blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: "hangul", blocks: [[44032, 55215]] }];
function El(r) {
  for (var e = 0; e < jr.length; e++) for (var t = jr[e], a = 0; a < t.blocks.length; a++) {
    var n = t.blocks[a];
    if (r >= n[0] && r <= n[1]) return t.name;
  }
  return null;
}
var Gt = [];
jr.forEach((r) => r.blocks.forEach((e) => Gt.push(...e)));
function Qn(r) {
  for (var e = 0; e < Gt.length; e += 2) if (r >= Gt[e] && r <= Gt[e + 1]) return true;
  return false;
}
var J0 = 80, Cl = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Bl = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Rl = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Il = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, Nl = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Dl = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, _l = function(e, t, a) {
  var n = a - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Ol = function(e, t, a) {
  t = 1e3 * t;
  var n = "";
  switch (e) {
    case "sqrtMain":
      n = Cl(t, J0);
      break;
    case "sqrtSize1":
      n = Bl(t, J0);
      break;
    case "sqrtSize2":
      n = Rl(t, J0);
      break;
    case "sqrtSize3":
      n = Il(t, J0);
      break;
    case "sqrtSize4":
      n = Nl(t, J0);
      break;
    case "sqrtTall":
      n = _l(t, J0, a);
  }
  return n;
}, Ll = function(e, t) {
  switch (e) {
    case "\u239C":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "\u2223":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "\u2225":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "\u239F":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "\u23A2":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "\u23A5":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "\u23AA":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "\u23D0":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "\u2016":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, tn = { doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`, doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`, leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`, leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`, leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`, leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`, leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`, leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`, leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`, leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`, leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`, lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`, leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`, leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`, leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`, longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`, midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`, midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`, oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`, oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`, oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`, oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`, rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`, rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`, rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`, rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`, rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`, rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`, rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`, rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`, rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`, righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`, rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`, rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`, twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`, twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`, tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`, tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`, tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`, tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`, vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`, widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`, widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`, widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`, rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`, baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`, rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`, shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`, shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, ql = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class it {
  constructor(e) {
    this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
    return e;
  }
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
    return e;
  }
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var Wr = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, Pl = { ex: true, em: true, mu: true }, ei = function(e) {
  return typeof e != "string" && (e = e.unit), e in Wr || e in Pl || e === "ex";
}, ve = function(e, t) {
  var a;
  if (e.unit in Wr) a = Wr[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu") a = t.fontMetrics().cssEmPerMu;
  else {
    var n;
    if (t.style.isTight() ? n = t.havingStyle(t.style.text()) : n = t, e.unit === "ex") a = n.fontMetrics().xHeight;
    else if (e.unit === "em") a = n.fontMetrics().quad;
    else throw new z("Invalid unit: '" + e.unit + "'");
    n !== t && (a *= n.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * a, t.maxSize);
}, B = function(e) {
  return +e.toFixed(4) + "em";
}, C0 = function(e) {
  return e.filter((t) => t).join(" ");
}, ti = function(e, t, a) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var n = t.getColor();
    n && (this.style.color = n);
  }
}, ri = function(e) {
  var t = document.createElement(e);
  t.className = C0(this.classes);
  for (var a of Object.keys(this.style)) t.style[a] = this.style[a];
  for (var n of Object.keys(this.attributes)) t.setAttribute(n, this.attributes[n]);
  for (var i = 0; i < this.children.length; i++) t.appendChild(this.children[i].toNode());
  return t;
}, Hl = /[\s"'>/=\x00-\x1f]/, ai = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + _e(C0(this.classes)) + '"');
  var a = "";
  for (var n of Object.keys(this.style)) a += pa(n) + ":" + this.style[n] + ";";
  a && (t += ' style="' + _e(a) + '"');
  for (var i of Object.keys(this.attributes)) {
    if (Hl.test(i)) throw new z("Invalid attribute name '" + i + "'");
    t += " " + i + '="' + _e(this.attributes[i]) + '"';
  }
  t += ">";
  for (var l = 0; l < this.children.length; l++) t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class st {
  constructor(e, t, a, n) {
    ti.call(this, e, a, n), this.children = t || [];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return ri.call(this, "span");
  }
  toMarkup() {
    return ai.call(this, "span");
  }
}
class er {
  constructor(e, t, a, n) {
    ti.call(this, t, n), this.children = a || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return ri.call(this, "a");
  }
  toMarkup() {
    return ai.call(this, "a");
  }
}
class $l {
  constructor(e, t, a) {
    this.alt = t, this.src = e, this.classes = ["mord"], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t of Object.keys(this.style)) e.style[t] = this.style[t];
    return e;
  }
  toMarkup() {
    var e = '<img src="' + _e(this.src) + '"' + (' alt="' + _e(this.alt) + '"'), t = "";
    for (var a of Object.keys(this.style)) t += pa(a) + ":" + this.style[a] + ";";
    return t && (e += ' style="' + _e(t) + '"'), e += "'/>", e;
  }
}
var Fl = { \u00EE: "\u0131\u0302", \u00EF: "\u0131\u0308", \u00ED: "\u0131\u0301", \u00EC: "\u0131\u0300" };
class We {
  constructor(e, t, a, n, i, l, c, u) {
    this.text = e, this.height = t || 0, this.depth = a || 0, this.italic = n || 0, this.skew = i || 0, this.width = l || 0, this.classes = c || [], this.style = u || {}, this.maxFontSize = 0;
    var d = El(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Fl[this.text]);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = B(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = C0(this.classes));
    for (var a of Object.keys(this.style)) t = t || document.createElement("span"), t.style[a] = this.style[a];
    return t ? (t.appendChild(e), t) : e;
  }
  toMarkup() {
    var e = false, t = "<span";
    this.classes.length && (e = true, t += ' class="', t += _e(C0(this.classes)), t += '"');
    var a = "";
    this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
    for (var n of Object.keys(this.style)) a += pa(n) + ":" + this.style[n] + ";";
    a && (e = true, t += ' style="' + _e(a) + '"');
    var i = _e(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class b0 {
  constructor(e, t) {
    this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var a of Object.keys(this.attributes)) t.setAttribute(a, this.attributes[a]);
    for (var n = 0; n < this.children.length; n++) t.appendChild(this.children[n].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t of Object.keys(this.attributes)) e += " " + t + '="' + _e(this.attributes[t]) + '"';
    e += ">";
    for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
    return e += "</svg>", e;
  }
}
class B0 {
  constructor(e, t) {
    this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", tn[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + _e(this.alternate) + '"/>' : '<path d="' + _e(tn[this.pathName]) + '"/>';
  }
}
class Xr {
  constructor(e) {
    this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var a of Object.keys(this.attributes)) t.setAttribute(a, this.attributes[a]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t of Object.keys(this.attributes)) e += " " + t + '="' + _e(this.attributes[t]) + '"';
    return e += "/>", e;
  }
}
function Gl(r) {
  if (r instanceof We) return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function Ul(r) {
  if (r instanceof st) return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var Vl = (r) => r instanceof st || r instanceof er || r instanceof it, o0 = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } }, It = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, rn = { \u00C5: "A", \u00D0: "D", \u00DE: "o", \u00E5: "a", \u00F0: "d", \u00FE: "o", \u0410: "A", \u0411: "B", \u0412: "B", \u0413: "F", \u0414: "A", \u0415: "E", \u0416: "K", \u0417: "3", \u0418: "N", \u0419: "N", \u041A: "K", \u041B: "N", \u041C: "M", \u041D: "H", \u041E: "O", \u041F: "N", \u0420: "P", \u0421: "C", \u0422: "T", \u0423: "y", \u0424: "O", \u0425: "X", \u0426: "U", \u0427: "h", \u0428: "W", \u0429: "W", \u042A: "B", \u042B: "X", \u042C: "B", \u042D: "3", \u042E: "X", \u042F: "R", \u0430: "a", \u0431: "b", \u0432: "a", \u0433: "r", \u0434: "y", \u0435: "e", \u0436: "m", \u0437: "e", \u0438: "n", \u0439: "n", \u043A: "n", \u043B: "n", \u043C: "m", \u043D: "n", \u043E: "o", \u043F: "n", \u0440: "p", \u0441: "c", \u0442: "o", \u0443: "y", \u0444: "b", \u0445: "x", \u0446: "n", \u0447: "n", \u0448: "w", \u0449: "w", \u044A: "a", \u044B: "m", \u044C: "a", \u044D: "e", \u044E: "m", \u044F: "r" };
function jl(r, e) {
  o0[r] = e;
}
function va(r, e, t) {
  if (!o0[e]) throw new Error("Font metrics not found for font: " + e + ".");
  var a = r.charCodeAt(0), n = o0[e][a];
  if (!n && r[0] in rn && (a = rn[r[0]].charCodeAt(0), n = o0[e][a]), !n && t === "text" && Qn(a) && (n = o0[e][77]), n) return { depth: n[0], height: n[1], italic: n[2], skew: n[3], width: n[4] };
}
var Tr = {};
function Wl(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Tr[e]) {
    var t = Tr[e] = { cssEmPerMu: It.quad[e] / 18 };
    for (var a in It) It.hasOwnProperty(a) && (t[a] = It[a][e]);
  }
  return Tr[e];
}
var Xl = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, Zl = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 }, de = { math: {}, text: {} };
function s(r, e, t, a, n, i) {
  de[r][n] = { font: e, group: t, replace: a }, i && a && (de[r][a] = de[r][n]);
}
var o = "math", A = "text", h = "main", p = "ams", pe = "accent-token", O = "bin", Fe = "close", lt = "inner", F = "mathord", Te = "op-token", Xe = "open", tr = "punct", f = "rel", y0 = "spacing", b = "textord";
s(o, h, f, "\u2261", "\\equiv", true);
s(o, h, f, "\u227A", "\\prec", true);
s(o, h, f, "\u227B", "\\succ", true);
s(o, h, f, "\u223C", "\\sim", true);
s(o, h, f, "\u22A5", "\\perp");
s(o, h, f, "\u2AAF", "\\preceq", true);
s(o, h, f, "\u2AB0", "\\succeq", true);
s(o, h, f, "\u2243", "\\simeq", true);
s(o, h, f, "\u2223", "\\mid", true);
s(o, h, f, "\u226A", "\\ll", true);
s(o, h, f, "\u226B", "\\gg", true);
s(o, h, f, "\u224D", "\\asymp", true);
s(o, h, f, "\u2225", "\\parallel");
s(o, h, f, "\u22C8", "\\bowtie", true);
s(o, h, f, "\u2323", "\\smile", true);
s(o, h, f, "\u2291", "\\sqsubseteq", true);
s(o, h, f, "\u2292", "\\sqsupseteq", true);
s(o, h, f, "\u2250", "\\doteq", true);
s(o, h, f, "\u2322", "\\frown", true);
s(o, h, f, "\u220B", "\\ni", true);
s(o, h, f, "\u221D", "\\propto", true);
s(o, h, f, "\u22A2", "\\vdash", true);
s(o, h, f, "\u22A3", "\\dashv", true);
s(o, h, f, "\u220B", "\\owns");
s(o, h, tr, ".", "\\ldotp");
s(o, h, tr, "\u22C5", "\\cdotp");
s(o, h, b, "#", "\\#");
s(A, h, b, "#", "\\#");
s(o, h, b, "&", "\\&");
s(A, h, b, "&", "\\&");
s(o, h, b, "\u2135", "\\aleph", true);
s(o, h, b, "\u2200", "\\forall", true);
s(o, h, b, "\u210F", "\\hbar", true);
s(o, h, b, "\u2203", "\\exists", true);
s(o, h, b, "\u2207", "\\nabla", true);
s(o, h, b, "\u266D", "\\flat", true);
s(o, h, b, "\u2113", "\\ell", true);
s(o, h, b, "\u266E", "\\natural", true);
s(o, h, b, "\u2663", "\\clubsuit", true);
s(o, h, b, "\u2118", "\\wp", true);
s(o, h, b, "\u266F", "\\sharp", true);
s(o, h, b, "\u2662", "\\diamondsuit", true);
s(o, h, b, "\u211C", "\\Re", true);
s(o, h, b, "\u2661", "\\heartsuit", true);
s(o, h, b, "\u2111", "\\Im", true);
s(o, h, b, "\u2660", "\\spadesuit", true);
s(o, h, b, "\xA7", "\\S", true);
s(A, h, b, "\xA7", "\\S");
s(o, h, b, "\xB6", "\\P", true);
s(A, h, b, "\xB6", "\\P");
s(o, h, b, "\u2020", "\\dag");
s(A, h, b, "\u2020", "\\dag");
s(A, h, b, "\u2020", "\\textdagger");
s(o, h, b, "\u2021", "\\ddag");
s(A, h, b, "\u2021", "\\ddag");
s(A, h, b, "\u2021", "\\textdaggerdbl");
s(o, h, Fe, "\u23B1", "\\rmoustache", true);
s(o, h, Xe, "\u23B0", "\\lmoustache", true);
s(o, h, Fe, "\u27EF", "\\rgroup", true);
s(o, h, Xe, "\u27EE", "\\lgroup", true);
s(o, h, O, "\u2213", "\\mp", true);
s(o, h, O, "\u2296", "\\ominus", true);
s(o, h, O, "\u228E", "\\uplus", true);
s(o, h, O, "\u2293", "\\sqcap", true);
s(o, h, O, "\u2217", "\\ast");
s(o, h, O, "\u2294", "\\sqcup", true);
s(o, h, O, "\u25EF", "\\bigcirc", true);
s(o, h, O, "\u2219", "\\bullet", true);
s(o, h, O, "\u2021", "\\ddagger");
s(o, h, O, "\u2240", "\\wr", true);
s(o, h, O, "\u2A3F", "\\amalg");
s(o, h, O, "&", "\\And");
s(o, h, f, "\u27F5", "\\longleftarrow", true);
s(o, h, f, "\u21D0", "\\Leftarrow", true);
s(o, h, f, "\u27F8", "\\Longleftarrow", true);
s(o, h, f, "\u27F6", "\\longrightarrow", true);
s(o, h, f, "\u21D2", "\\Rightarrow", true);
s(o, h, f, "\u27F9", "\\Longrightarrow", true);
s(o, h, f, "\u2194", "\\leftrightarrow", true);
s(o, h, f, "\u27F7", "\\longleftrightarrow", true);
s(o, h, f, "\u21D4", "\\Leftrightarrow", true);
s(o, h, f, "\u27FA", "\\Longleftrightarrow", true);
s(o, h, f, "\u21A6", "\\mapsto", true);
s(o, h, f, "\u27FC", "\\longmapsto", true);
s(o, h, f, "\u2197", "\\nearrow", true);
s(o, h, f, "\u21A9", "\\hookleftarrow", true);
s(o, h, f, "\u21AA", "\\hookrightarrow", true);
s(o, h, f, "\u2198", "\\searrow", true);
s(o, h, f, "\u21BC", "\\leftharpoonup", true);
s(o, h, f, "\u21C0", "\\rightharpoonup", true);
s(o, h, f, "\u2199", "\\swarrow", true);
s(o, h, f, "\u21BD", "\\leftharpoondown", true);
s(o, h, f, "\u21C1", "\\rightharpoondown", true);
s(o, h, f, "\u2196", "\\nwarrow", true);
s(o, h, f, "\u21CC", "\\rightleftharpoons", true);
s(o, p, f, "\u226E", "\\nless", true);
s(o, p, f, "\uE010", "\\@nleqslant");
s(o, p, f, "\uE011", "\\@nleqq");
s(o, p, f, "\u2A87", "\\lneq", true);
s(o, p, f, "\u2268", "\\lneqq", true);
s(o, p, f, "\uE00C", "\\@lvertneqq");
s(o, p, f, "\u22E6", "\\lnsim", true);
s(o, p, f, "\u2A89", "\\lnapprox", true);
s(o, p, f, "\u2280", "\\nprec", true);
s(o, p, f, "\u22E0", "\\npreceq", true);
s(o, p, f, "\u22E8", "\\precnsim", true);
s(o, p, f, "\u2AB9", "\\precnapprox", true);
s(o, p, f, "\u2241", "\\nsim", true);
s(o, p, f, "\uE006", "\\@nshortmid");
s(o, p, f, "\u2224", "\\nmid", true);
s(o, p, f, "\u22AC", "\\nvdash", true);
s(o, p, f, "\u22AD", "\\nvDash", true);
s(o, p, f, "\u22EA", "\\ntriangleleft");
s(o, p, f, "\u22EC", "\\ntrianglelefteq", true);
s(o, p, f, "\u228A", "\\subsetneq", true);
s(o, p, f, "\uE01A", "\\@varsubsetneq");
s(o, p, f, "\u2ACB", "\\subsetneqq", true);
s(o, p, f, "\uE017", "\\@varsubsetneqq");
s(o, p, f, "\u226F", "\\ngtr", true);
s(o, p, f, "\uE00F", "\\@ngeqslant");
s(o, p, f, "\uE00E", "\\@ngeqq");
s(o, p, f, "\u2A88", "\\gneq", true);
s(o, p, f, "\u2269", "\\gneqq", true);
s(o, p, f, "\uE00D", "\\@gvertneqq");
s(o, p, f, "\u22E7", "\\gnsim", true);
s(o, p, f, "\u2A8A", "\\gnapprox", true);
s(o, p, f, "\u2281", "\\nsucc", true);
s(o, p, f, "\u22E1", "\\nsucceq", true);
s(o, p, f, "\u22E9", "\\succnsim", true);
s(o, p, f, "\u2ABA", "\\succnapprox", true);
s(o, p, f, "\u2246", "\\ncong", true);
s(o, p, f, "\uE007", "\\@nshortparallel");
s(o, p, f, "\u2226", "\\nparallel", true);
s(o, p, f, "\u22AF", "\\nVDash", true);
s(o, p, f, "\u22EB", "\\ntriangleright");
s(o, p, f, "\u22ED", "\\ntrianglerighteq", true);
s(o, p, f, "\uE018", "\\@nsupseteqq");
s(o, p, f, "\u228B", "\\supsetneq", true);
s(o, p, f, "\uE01B", "\\@varsupsetneq");
s(o, p, f, "\u2ACC", "\\supsetneqq", true);
s(o, p, f, "\uE019", "\\@varsupsetneqq");
s(o, p, f, "\u22AE", "\\nVdash", true);
s(o, p, f, "\u2AB5", "\\precneqq", true);
s(o, p, f, "\u2AB6", "\\succneqq", true);
s(o, p, f, "\uE016", "\\@nsubseteqq");
s(o, p, O, "\u22B4", "\\unlhd");
s(o, p, O, "\u22B5", "\\unrhd");
s(o, p, f, "\u219A", "\\nleftarrow", true);
s(o, p, f, "\u219B", "\\nrightarrow", true);
s(o, p, f, "\u21CD", "\\nLeftarrow", true);
s(o, p, f, "\u21CF", "\\nRightarrow", true);
s(o, p, f, "\u21AE", "\\nleftrightarrow", true);
s(o, p, f, "\u21CE", "\\nLeftrightarrow", true);
s(o, p, f, "\u25B3", "\\vartriangle");
s(o, p, b, "\u210F", "\\hslash");
s(o, p, b, "\u25BD", "\\triangledown");
s(o, p, b, "\u25CA", "\\lozenge");
s(o, p, b, "\u24C8", "\\circledS");
s(o, p, b, "\xAE", "\\circledR");
s(A, p, b, "\xAE", "\\circledR");
s(o, p, b, "\u2221", "\\measuredangle", true);
s(o, p, b, "\u2204", "\\nexists");
s(o, p, b, "\u2127", "\\mho");
s(o, p, b, "\u2132", "\\Finv", true);
s(o, p, b, "\u2141", "\\Game", true);
s(o, p, b, "\u2035", "\\backprime");
s(o, p, b, "\u25B2", "\\blacktriangle");
s(o, p, b, "\u25BC", "\\blacktriangledown");
s(o, p, b, "\u25A0", "\\blacksquare");
s(o, p, b, "\u29EB", "\\blacklozenge");
s(o, p, b, "\u2605", "\\bigstar");
s(o, p, b, "\u2222", "\\sphericalangle", true);
s(o, p, b, "\u2201", "\\complement", true);
s(o, p, b, "\xF0", "\\eth", true);
s(A, h, b, "\xF0", "\xF0");
s(o, p, b, "\u2571", "\\diagup");
s(o, p, b, "\u2572", "\\diagdown");
s(o, p, b, "\u25A1", "\\square");
s(o, p, b, "\u25A1", "\\Box");
s(o, p, b, "\u25CA", "\\Diamond");
s(o, p, b, "\xA5", "\\yen", true);
s(A, p, b, "\xA5", "\\yen", true);
s(o, p, b, "\u2713", "\\checkmark", true);
s(A, p, b, "\u2713", "\\checkmark");
s(o, p, b, "\u2136", "\\beth", true);
s(o, p, b, "\u2138", "\\daleth", true);
s(o, p, b, "\u2137", "\\gimel", true);
s(o, p, b, "\u03DD", "\\digamma", true);
s(o, p, b, "\u03F0", "\\varkappa");
s(o, p, Xe, "\u250C", "\\@ulcorner", true);
s(o, p, Fe, "\u2510", "\\@urcorner", true);
s(o, p, Xe, "\u2514", "\\@llcorner", true);
s(o, p, Fe, "\u2518", "\\@lrcorner", true);
s(o, p, f, "\u2266", "\\leqq", true);
s(o, p, f, "\u2A7D", "\\leqslant", true);
s(o, p, f, "\u2A95", "\\eqslantless", true);
s(o, p, f, "\u2272", "\\lesssim", true);
s(o, p, f, "\u2A85", "\\lessapprox", true);
s(o, p, f, "\u224A", "\\approxeq", true);
s(o, p, O, "\u22D6", "\\lessdot");
s(o, p, f, "\u22D8", "\\lll", true);
s(o, p, f, "\u2276", "\\lessgtr", true);
s(o, p, f, "\u22DA", "\\lesseqgtr", true);
s(o, p, f, "\u2A8B", "\\lesseqqgtr", true);
s(o, p, f, "\u2251", "\\doteqdot");
s(o, p, f, "\u2253", "\\risingdotseq", true);
s(o, p, f, "\u2252", "\\fallingdotseq", true);
s(o, p, f, "\u223D", "\\backsim", true);
s(o, p, f, "\u22CD", "\\backsimeq", true);
s(o, p, f, "\u2AC5", "\\subseteqq", true);
s(o, p, f, "\u22D0", "\\Subset", true);
s(o, p, f, "\u228F", "\\sqsubset", true);
s(o, p, f, "\u227C", "\\preccurlyeq", true);
s(o, p, f, "\u22DE", "\\curlyeqprec", true);
s(o, p, f, "\u227E", "\\precsim", true);
s(o, p, f, "\u2AB7", "\\precapprox", true);
s(o, p, f, "\u22B2", "\\vartriangleleft");
s(o, p, f, "\u22B4", "\\trianglelefteq");
s(o, p, f, "\u22A8", "\\vDash", true);
s(o, p, f, "\u22AA", "\\Vvdash", true);
s(o, p, f, "\u2323", "\\smallsmile");
s(o, p, f, "\u2322", "\\smallfrown");
s(o, p, f, "\u224F", "\\bumpeq", true);
s(o, p, f, "\u224E", "\\Bumpeq", true);
s(o, p, f, "\u2267", "\\geqq", true);
s(o, p, f, "\u2A7E", "\\geqslant", true);
s(o, p, f, "\u2A96", "\\eqslantgtr", true);
s(o, p, f, "\u2273", "\\gtrsim", true);
s(o, p, f, "\u2A86", "\\gtrapprox", true);
s(o, p, O, "\u22D7", "\\gtrdot");
s(o, p, f, "\u22D9", "\\ggg", true);
s(o, p, f, "\u2277", "\\gtrless", true);
s(o, p, f, "\u22DB", "\\gtreqless", true);
s(o, p, f, "\u2A8C", "\\gtreqqless", true);
s(o, p, f, "\u2256", "\\eqcirc", true);
s(o, p, f, "\u2257", "\\circeq", true);
s(o, p, f, "\u225C", "\\triangleq", true);
s(o, p, f, "\u223C", "\\thicksim");
s(o, p, f, "\u2248", "\\thickapprox");
s(o, p, f, "\u2AC6", "\\supseteqq", true);
s(o, p, f, "\u22D1", "\\Supset", true);
s(o, p, f, "\u2290", "\\sqsupset", true);
s(o, p, f, "\u227D", "\\succcurlyeq", true);
s(o, p, f, "\u22DF", "\\curlyeqsucc", true);
s(o, p, f, "\u227F", "\\succsim", true);
s(o, p, f, "\u2AB8", "\\succapprox", true);
s(o, p, f, "\u22B3", "\\vartriangleright");
s(o, p, f, "\u22B5", "\\trianglerighteq");
s(o, p, f, "\u22A9", "\\Vdash", true);
s(o, p, f, "\u2223", "\\shortmid");
s(o, p, f, "\u2225", "\\shortparallel");
s(o, p, f, "\u226C", "\\between", true);
s(o, p, f, "\u22D4", "\\pitchfork", true);
s(o, p, f, "\u221D", "\\varpropto");
s(o, p, f, "\u25C0", "\\blacktriangleleft");
s(o, p, f, "\u2234", "\\therefore", true);
s(o, p, f, "\u220D", "\\backepsilon");
s(o, p, f, "\u25B6", "\\blacktriangleright");
s(o, p, f, "\u2235", "\\because", true);
s(o, p, f, "\u22D8", "\\llless");
s(o, p, f, "\u22D9", "\\gggtr");
s(o, p, O, "\u22B2", "\\lhd");
s(o, p, O, "\u22B3", "\\rhd");
s(o, p, f, "\u2242", "\\eqsim", true);
s(o, h, f, "\u22C8", "\\Join");
s(o, p, f, "\u2251", "\\Doteq", true);
s(o, p, O, "\u2214", "\\dotplus", true);
s(o, p, O, "\u2216", "\\smallsetminus");
s(o, p, O, "\u22D2", "\\Cap", true);
s(o, p, O, "\u22D3", "\\Cup", true);
s(o, p, O, "\u2A5E", "\\doublebarwedge", true);
s(o, p, O, "\u229F", "\\boxminus", true);
s(o, p, O, "\u229E", "\\boxplus", true);
s(o, p, O, "\u22C7", "\\divideontimes", true);
s(o, p, O, "\u22C9", "\\ltimes", true);
s(o, p, O, "\u22CA", "\\rtimes", true);
s(o, p, O, "\u22CB", "\\leftthreetimes", true);
s(o, p, O, "\u22CC", "\\rightthreetimes", true);
s(o, p, O, "\u22CF", "\\curlywedge", true);
s(o, p, O, "\u22CE", "\\curlyvee", true);
s(o, p, O, "\u229D", "\\circleddash", true);
s(o, p, O, "\u229B", "\\circledast", true);
s(o, p, O, "\u22C5", "\\centerdot");
s(o, p, O, "\u22BA", "\\intercal", true);
s(o, p, O, "\u22D2", "\\doublecap");
s(o, p, O, "\u22D3", "\\doublecup");
s(o, p, O, "\u22A0", "\\boxtimes", true);
s(o, p, f, "\u21E2", "\\dashrightarrow", true);
s(o, p, f, "\u21E0", "\\dashleftarrow", true);
s(o, p, f, "\u21C7", "\\leftleftarrows", true);
s(o, p, f, "\u21C6", "\\leftrightarrows", true);
s(o, p, f, "\u21DA", "\\Lleftarrow", true);
s(o, p, f, "\u219E", "\\twoheadleftarrow", true);
s(o, p, f, "\u21A2", "\\leftarrowtail", true);
s(o, p, f, "\u21AB", "\\looparrowleft", true);
s(o, p, f, "\u21CB", "\\leftrightharpoons", true);
s(o, p, f, "\u21B6", "\\curvearrowleft", true);
s(o, p, f, "\u21BA", "\\circlearrowleft", true);
s(o, p, f, "\u21B0", "\\Lsh", true);
s(o, p, f, "\u21C8", "\\upuparrows", true);
s(o, p, f, "\u21BF", "\\upharpoonleft", true);
s(o, p, f, "\u21C3", "\\downharpoonleft", true);
s(o, h, f, "\u22B6", "\\origof", true);
s(o, h, f, "\u22B7", "\\imageof", true);
s(o, p, f, "\u22B8", "\\multimap", true);
s(o, p, f, "\u21AD", "\\leftrightsquigarrow", true);
s(o, p, f, "\u21C9", "\\rightrightarrows", true);
s(o, p, f, "\u21C4", "\\rightleftarrows", true);
s(o, p, f, "\u21A0", "\\twoheadrightarrow", true);
s(o, p, f, "\u21A3", "\\rightarrowtail", true);
s(o, p, f, "\u21AC", "\\looparrowright", true);
s(o, p, f, "\u21B7", "\\curvearrowright", true);
s(o, p, f, "\u21BB", "\\circlearrowright", true);
s(o, p, f, "\u21B1", "\\Rsh", true);
s(o, p, f, "\u21CA", "\\downdownarrows", true);
s(o, p, f, "\u21BE", "\\upharpoonright", true);
s(o, p, f, "\u21C2", "\\downharpoonright", true);
s(o, p, f, "\u21DD", "\\rightsquigarrow", true);
s(o, p, f, "\u21DD", "\\leadsto");
s(o, p, f, "\u21DB", "\\Rrightarrow", true);
s(o, p, f, "\u21BE", "\\restriction");
s(o, h, b, "\u2018", "`");
s(o, h, b, "$", "\\$");
s(A, h, b, "$", "\\$");
s(A, h, b, "$", "\\textdollar");
s(o, h, b, "%", "\\%");
s(A, h, b, "%", "\\%");
s(o, h, b, "_", "\\_");
s(A, h, b, "_", "\\_");
s(A, h, b, "_", "\\textunderscore");
s(o, h, b, "\u2220", "\\angle", true);
s(o, h, b, "\u221E", "\\infty", true);
s(o, h, b, "\u2032", "\\prime");
s(o, h, b, "\u25B3", "\\triangle");
s(o, h, b, "\u0393", "\\Gamma", true);
s(o, h, b, "\u0394", "\\Delta", true);
s(o, h, b, "\u0398", "\\Theta", true);
s(o, h, b, "\u039B", "\\Lambda", true);
s(o, h, b, "\u039E", "\\Xi", true);
s(o, h, b, "\u03A0", "\\Pi", true);
s(o, h, b, "\u03A3", "\\Sigma", true);
s(o, h, b, "\u03A5", "\\Upsilon", true);
s(o, h, b, "\u03A6", "\\Phi", true);
s(o, h, b, "\u03A8", "\\Psi", true);
s(o, h, b, "\u03A9", "\\Omega", true);
s(o, h, b, "A", "\u0391");
s(o, h, b, "B", "\u0392");
s(o, h, b, "E", "\u0395");
s(o, h, b, "Z", "\u0396");
s(o, h, b, "H", "\u0397");
s(o, h, b, "I", "\u0399");
s(o, h, b, "K", "\u039A");
s(o, h, b, "M", "\u039C");
s(o, h, b, "N", "\u039D");
s(o, h, b, "O", "\u039F");
s(o, h, b, "P", "\u03A1");
s(o, h, b, "T", "\u03A4");
s(o, h, b, "X", "\u03A7");
s(o, h, b, "\xAC", "\\neg", true);
s(o, h, b, "\xAC", "\\lnot");
s(o, h, b, "\u22A4", "\\top");
s(o, h, b, "\u22A5", "\\bot");
s(o, h, b, "\u2205", "\\emptyset");
s(o, p, b, "\u2205", "\\varnothing");
s(o, h, F, "\u03B1", "\\alpha", true);
s(o, h, F, "\u03B2", "\\beta", true);
s(o, h, F, "\u03B3", "\\gamma", true);
s(o, h, F, "\u03B4", "\\delta", true);
s(o, h, F, "\u03F5", "\\epsilon", true);
s(o, h, F, "\u03B6", "\\zeta", true);
s(o, h, F, "\u03B7", "\\eta", true);
s(o, h, F, "\u03B8", "\\theta", true);
s(o, h, F, "\u03B9", "\\iota", true);
s(o, h, F, "\u03BA", "\\kappa", true);
s(o, h, F, "\u03BB", "\\lambda", true);
s(o, h, F, "\u03BC", "\\mu", true);
s(o, h, F, "\u03BD", "\\nu", true);
s(o, h, F, "\u03BE", "\\xi", true);
s(o, h, F, "\u03BF", "\\omicron", true);
s(o, h, F, "\u03C0", "\\pi", true);
s(o, h, F, "\u03C1", "\\rho", true);
s(o, h, F, "\u03C3", "\\sigma", true);
s(o, h, F, "\u03C4", "\\tau", true);
s(o, h, F, "\u03C5", "\\upsilon", true);
s(o, h, F, "\u03D5", "\\phi", true);
s(o, h, F, "\u03C7", "\\chi", true);
s(o, h, F, "\u03C8", "\\psi", true);
s(o, h, F, "\u03C9", "\\omega", true);
s(o, h, F, "\u03B5", "\\varepsilon", true);
s(o, h, F, "\u03D1", "\\vartheta", true);
s(o, h, F, "\u03D6", "\\varpi", true);
s(o, h, F, "\u03F1", "\\varrho", true);
s(o, h, F, "\u03C2", "\\varsigma", true);
s(o, h, F, "\u03C6", "\\varphi", true);
s(o, h, O, "\u2217", "*", true);
s(o, h, O, "+", "+");
s(o, h, O, "\u2212", "-", true);
s(o, h, O, "\u22C5", "\\cdot", true);
s(o, h, O, "\u2218", "\\circ", true);
s(o, h, O, "\xF7", "\\div", true);
s(o, h, O, "\xB1", "\\pm", true);
s(o, h, O, "\xD7", "\\times", true);
s(o, h, O, "\u2229", "\\cap", true);
s(o, h, O, "\u222A", "\\cup", true);
s(o, h, O, "\u2216", "\\setminus", true);
s(o, h, O, "\u2227", "\\land");
s(o, h, O, "\u2228", "\\lor");
s(o, h, O, "\u2227", "\\wedge", true);
s(o, h, O, "\u2228", "\\vee", true);
s(o, h, b, "\u221A", "\\surd");
s(o, h, Xe, "\u27E8", "\\langle", true);
s(o, h, Xe, "\u2223", "\\lvert");
s(o, h, Xe, "\u2225", "\\lVert");
s(o, h, Fe, "?", "?");
s(o, h, Fe, "!", "!");
s(o, h, Fe, "\u27E9", "\\rangle", true);
s(o, h, Fe, "\u2223", "\\rvert");
s(o, h, Fe, "\u2225", "\\rVert");
s(o, h, f, "=", "=");
s(o, h, f, ":", ":");
s(o, h, f, "\u2248", "\\approx", true);
s(o, h, f, "\u2245", "\\cong", true);
s(o, h, f, "\u2265", "\\ge");
s(o, h, f, "\u2265", "\\geq", true);
s(o, h, f, "\u2190", "\\gets");
s(o, h, f, ">", "\\gt", true);
s(o, h, f, "\u2208", "\\in", true);
s(o, h, f, "\uE020", "\\@not");
s(o, h, f, "\u2282", "\\subset", true);
s(o, h, f, "\u2283", "\\supset", true);
s(o, h, f, "\u2286", "\\subseteq", true);
s(o, h, f, "\u2287", "\\supseteq", true);
s(o, p, f, "\u2288", "\\nsubseteq", true);
s(o, p, f, "\u2289", "\\nsupseteq", true);
s(o, h, f, "\u22A8", "\\models");
s(o, h, f, "\u2190", "\\leftarrow", true);
s(o, h, f, "\u2264", "\\le");
s(o, h, f, "\u2264", "\\leq", true);
s(o, h, f, "<", "\\lt", true);
s(o, h, f, "\u2192", "\\rightarrow", true);
s(o, h, f, "\u2192", "\\to");
s(o, p, f, "\u2271", "\\ngeq", true);
s(o, p, f, "\u2270", "\\nleq", true);
s(o, h, y0, "\xA0", "\\ ");
s(o, h, y0, "\xA0", "\\space");
s(o, h, y0, "\xA0", "\\nobreakspace");
s(A, h, y0, "\xA0", "\\ ");
s(A, h, y0, "\xA0", " ");
s(A, h, y0, "\xA0", "\\space");
s(A, h, y0, "\xA0", "\\nobreakspace");
s(o, h, y0, null, "\\nobreak");
s(o, h, y0, null, "\\allowbreak");
s(o, h, tr, ",", ",");
s(o, h, tr, ";", ";");
s(o, p, O, "\u22BC", "\\barwedge", true);
s(o, p, O, "\u22BB", "\\veebar", true);
s(o, h, O, "\u2299", "\\odot", true);
s(o, h, O, "\u2295", "\\oplus", true);
s(o, h, O, "\u2297", "\\otimes", true);
s(o, h, b, "\u2202", "\\partial", true);
s(o, h, O, "\u2298", "\\oslash", true);
s(o, p, O, "\u229A", "\\circledcirc", true);
s(o, p, O, "\u22A1", "\\boxdot", true);
s(o, h, O, "\u25B3", "\\bigtriangleup");
s(o, h, O, "\u25BD", "\\bigtriangledown");
s(o, h, O, "\u2020", "\\dagger");
s(o, h, O, "\u22C4", "\\diamond");
s(o, h, O, "\u22C6", "\\star");
s(o, h, O, "\u25C3", "\\triangleleft");
s(o, h, O, "\u25B9", "\\triangleright");
s(o, h, Xe, "{", "\\{");
s(A, h, b, "{", "\\{");
s(A, h, b, "{", "\\textbraceleft");
s(o, h, Fe, "}", "\\}");
s(A, h, b, "}", "\\}");
s(A, h, b, "}", "\\textbraceright");
s(o, h, Xe, "{", "\\lbrace");
s(o, h, Fe, "}", "\\rbrace");
s(o, h, Xe, "[", "\\lbrack", true);
s(A, h, b, "[", "\\lbrack", true);
s(o, h, Fe, "]", "\\rbrack", true);
s(A, h, b, "]", "\\rbrack", true);
s(o, h, Xe, "(", "\\lparen", true);
s(o, h, Fe, ")", "\\rparen", true);
s(A, h, b, "<", "\\textless", true);
s(A, h, b, ">", "\\textgreater", true);
s(o, h, Xe, "\u230A", "\\lfloor", true);
s(o, h, Fe, "\u230B", "\\rfloor", true);
s(o, h, Xe, "\u2308", "\\lceil", true);
s(o, h, Fe, "\u2309", "\\rceil", true);
s(o, h, b, "\\", "\\backslash");
s(o, h, b, "\u2223", "|");
s(o, h, b, "\u2223", "\\vert");
s(A, h, b, "|", "\\textbar", true);
s(o, h, b, "\u2225", "\\|");
s(o, h, b, "\u2225", "\\Vert");
s(A, h, b, "\u2225", "\\textbardbl");
s(A, h, b, "~", "\\textasciitilde");
s(A, h, b, "\\", "\\textbackslash");
s(A, h, b, "^", "\\textasciicircum");
s(o, h, f, "\u2191", "\\uparrow", true);
s(o, h, f, "\u21D1", "\\Uparrow", true);
s(o, h, f, "\u2193", "\\downarrow", true);
s(o, h, f, "\u21D3", "\\Downarrow", true);
s(o, h, f, "\u2195", "\\updownarrow", true);
s(o, h, f, "\u21D5", "\\Updownarrow", true);
s(o, h, Te, "\u2210", "\\coprod");
s(o, h, Te, "\u22C1", "\\bigvee");
s(o, h, Te, "\u22C0", "\\bigwedge");
s(o, h, Te, "\u2A04", "\\biguplus");
s(o, h, Te, "\u22C2", "\\bigcap");
s(o, h, Te, "\u22C3", "\\bigcup");
s(o, h, Te, "\u222B", "\\int");
s(o, h, Te, "\u222B", "\\intop");
s(o, h, Te, "\u222C", "\\iint");
s(o, h, Te, "\u222D", "\\iiint");
s(o, h, Te, "\u220F", "\\prod");
s(o, h, Te, "\u2211", "\\sum");
s(o, h, Te, "\u2A02", "\\bigotimes");
s(o, h, Te, "\u2A01", "\\bigoplus");
s(o, h, Te, "\u2A00", "\\bigodot");
s(o, h, Te, "\u222E", "\\oint");
s(o, h, Te, "\u222F", "\\oiint");
s(o, h, Te, "\u2230", "\\oiiint");
s(o, h, Te, "\u2A06", "\\bigsqcup");
s(o, h, Te, "\u222B", "\\smallint");
s(A, h, lt, "\u2026", "\\textellipsis");
s(o, h, lt, "\u2026", "\\mathellipsis");
s(A, h, lt, "\u2026", "\\ldots", true);
s(o, h, lt, "\u2026", "\\ldots", true);
s(o, h, lt, "\u22EF", "\\@cdots", true);
s(o, h, lt, "\u22F1", "\\ddots", true);
s(o, h, b, "\u22EE", "\\varvdots");
s(A, h, b, "\u22EE", "\\varvdots");
s(o, h, pe, "\u02CA", "\\acute");
s(o, h, pe, "\u02CB", "\\grave");
s(o, h, pe, "\xA8", "\\ddot");
s(o, h, pe, "~", "\\tilde");
s(o, h, pe, "\u02C9", "\\bar");
s(o, h, pe, "\u02D8", "\\breve");
s(o, h, pe, "\u02C7", "\\check");
s(o, h, pe, "^", "\\hat");
s(o, h, pe, "\u20D7", "\\vec");
s(o, h, pe, "\u02D9", "\\dot");
s(o, h, pe, "\u02DA", "\\mathring");
s(o, h, F, "\uE131", "\\@imath");
s(o, h, F, "\uE237", "\\@jmath");
s(o, h, b, "\u0131", "\u0131");
s(o, h, b, "\u0237", "\u0237");
s(A, h, b, "\u0131", "\\i", true);
s(A, h, b, "\u0237", "\\j", true);
s(A, h, b, "\xDF", "\\ss", true);
s(A, h, b, "\xE6", "\\ae", true);
s(A, h, b, "\u0153", "\\oe", true);
s(A, h, b, "\xF8", "\\o", true);
s(A, h, b, "\xC6", "\\AE", true);
s(A, h, b, "\u0152", "\\OE", true);
s(A, h, b, "\xD8", "\\O", true);
s(A, h, pe, "\u02CA", "\\'");
s(A, h, pe, "\u02CB", "\\`");
s(A, h, pe, "\u02C6", "\\^");
s(A, h, pe, "\u02DC", "\\~");
s(A, h, pe, "\u02C9", "\\=");
s(A, h, pe, "\u02D8", "\\u");
s(A, h, pe, "\u02D9", "\\.");
s(A, h, pe, "\xB8", "\\c");
s(A, h, pe, "\u02DA", "\\r");
s(A, h, pe, "\u02C7", "\\v");
s(A, h, pe, "\xA8", '\\"');
s(A, h, pe, "\u02DD", "\\H");
s(A, h, pe, "\u25EF", "\\textcircled");
var ni = { "--": true, "---": true, "``": true, "''": true };
s(A, h, b, "\u2013", "--", true);
s(A, h, b, "\u2013", "\\textendash");
s(A, h, b, "\u2014", "---", true);
s(A, h, b, "\u2014", "\\textemdash");
s(A, h, b, "\u2018", "`", true);
s(A, h, b, "\u2018", "\\textquoteleft");
s(A, h, b, "\u2019", "'", true);
s(A, h, b, "\u2019", "\\textquoteright");
s(A, h, b, "\u201C", "``", true);
s(A, h, b, "\u201C", "\\textquotedblleft");
s(A, h, b, "\u201D", "''", true);
s(A, h, b, "\u201D", "\\textquotedblright");
s(o, h, b, "\xB0", "\\degree", true);
s(A, h, b, "\xB0", "\\degree");
s(A, h, b, "\xB0", "\\textdegree", true);
s(o, h, b, "\xA3", "\\pounds");
s(o, h, b, "\xA3", "\\mathsterling", true);
s(A, h, b, "\xA3", "\\pounds");
s(A, h, b, "\xA3", "\\textsterling", true);
s(o, p, b, "\u2720", "\\maltese");
s(A, p, b, "\u2720", "\\maltese");
var an = '0123456789/@."';
for (var zr = 0; zr < an.length; zr++) {
  var nn = an.charAt(zr);
  s(o, h, b, nn, nn);
}
var sn = '0123456789!@*()-=+";:?/.,';
for (var Er = 0; Er < sn.length; Er++) {
  var ln = sn.charAt(Er);
  s(A, h, b, ln, ln);
}
var Xt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Cr = 0; Cr < Xt.length; Cr++) {
  var Nt = Xt.charAt(Cr);
  s(o, h, F, Nt, Nt), s(A, h, b, Nt, Nt);
}
s(o, p, b, "C", "\u2102");
s(A, p, b, "C", "\u2102");
s(o, p, b, "H", "\u210D");
s(A, p, b, "H", "\u210D");
s(o, p, b, "N", "\u2115");
s(A, p, b, "N", "\u2115");
s(o, p, b, "P", "\u2119");
s(A, p, b, "P", "\u2119");
s(o, p, b, "Q", "\u211A");
s(A, p, b, "Q", "\u211A");
s(o, p, b, "R", "\u211D");
s(A, p, b, "R", "\u211D");
s(o, p, b, "Z", "\u2124");
s(A, p, b, "Z", "\u2124");
s(o, h, F, "h", "\u210E");
s(A, h, F, "h", "\u210E");
var U = "";
for (var qe = 0; qe < Xt.length; qe++) {
  var xe = Xt.charAt(qe);
  U = String.fromCharCode(55349, 56320 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56372 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56424 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56580 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56684 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56736 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56788 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56840 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56944 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), qe < 26 && (U = String.fromCharCode(55349, 56632 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U), U = String.fromCharCode(55349, 56476 + qe), s(o, h, F, xe, U), s(A, h, b, xe, U));
}
U = "\u{1D55C}";
s(o, h, F, "k", U);
s(A, h, b, "k", U);
for (var P0 = 0; P0 < 10; P0++) {
  var z0 = P0.toString();
  U = String.fromCharCode(55349, 57294 + P0), s(o, h, F, z0, U), s(A, h, b, z0, U), U = String.fromCharCode(55349, 57314 + P0), s(o, h, F, z0, U), s(A, h, b, z0, U), U = String.fromCharCode(55349, 57324 + P0), s(o, h, F, z0, U), s(A, h, b, z0, U), U = String.fromCharCode(55349, 57334 + P0), s(o, h, F, z0, U), s(A, h, b, z0, U);
}
var Zr = "\xD0\xDE\xFE";
for (var Br = 0; Br < Zr.length; Br++) {
  var Dt = Zr.charAt(Br);
  s(o, h, F, Dt, Dt), s(A, h, b, Dt, Dt);
}
var _t = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathboldfrak", "textboldfrak", "Fraktur-Regular"], ["mathboldfrak", "textboldfrak", "Fraktur-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]], on = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]], Yl = (r, e) => {
  var t = r.charCodeAt(0), a = r.charCodeAt(1), n = (t - 55296) * 1024 + (a - 56320) + 65536, i = e === "math" ? 0 : 1;
  if (119808 <= n && n < 120484) {
    var l = Math.floor((n - 119808) / 26);
    return [_t[l][2], _t[l][i]];
  } else if (120782 <= n && n <= 120831) {
    var c = Math.floor((n - 120782) / 10);
    return [on[c][2], on[c][i]];
  } else {
    if (n === 120485 || n === 120486) return [_t[0][2], _t[0][i]];
    if (120486 < n && n < 120782) return ["", ""];
    throw new z("Unsupported character: " + r);
  }
}, rr = function(e, t, a) {
  if (de[a][e]) {
    var n = de[a][e].replace;
    n && (e = n);
  }
  return { value: e, metrics: va(e, t, a) };
}, Pe = function(e, t, a, n, i) {
  var l = rr(e, t, a), c = l.metrics;
  e = l.value;
  var u;
  if (c) {
    var d = c.italic;
    (a === "text" || n && n.font === "mathit") && (d = 0), u = new We(e, c.height, c.depth, d, c.skew, c.width, i);
  } else typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + a + "'")), u = new We(e, 0, 0, 0, 0, 0, i);
  if (n) {
    u.maxFontSize = n.sizeMultiplier, n.style.isTight() && u.classes.push("mtight");
    var g = n.getColor();
    g && (u.style.color = g);
  }
  return u;
}, ba = function(e, t, a, n) {
  return n === void 0 && (n = []), a.font === "boldsymbol" && rr(e, "Main-Bold", t).metrics ? Pe(e, "Main-Bold", t, a, n.concat(["mathbf"])) : e === "\\" || de[t][e].font === "main" ? Pe(e, "Main-Regular", t, a, n) : Pe(e, "AMS-Regular", t, a, n.concat(["amsrm"]));
}, Kl = function(e, t, a, n, i) {
  return i !== "textord" && rr(e, "Math-BoldItalic", t).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" };
}, ar = function(e, t, a) {
  var n = e.mode, i = e.text, l = ["mord"], c = n === "math" || n === "text" && t.font, u = c ? t.font : t.fontFamily, d = "", g = "";
  if (i.charCodeAt(0) === 55349 && ([d, g] = Yl(i, n)), d.length > 0) return Pe(i, d, n, t, l.concat(g));
  if (u) {
    var x, y;
    if (u === "boldsymbol") {
      var w = Kl(i, n, t, l, a);
      x = w.fontName, y = [w.fontClass];
    } else c ? (x = Yr[u].fontName, y = [u]) : (x = Ot(u, t.fontWeight, t.fontShape), y = [u, t.fontWeight, t.fontShape]);
    if (rr(i, x, n).metrics) return Pe(i, x, n, t, l.concat(y));
    if (ni.hasOwnProperty(i) && x.slice(0, 10) === "Typewriter") {
      for (var k = [], M = 0; M < i.length; M++) k.push(Pe(i[M], x, n, t, l.concat(y)));
      return w0(k);
    }
  }
  if (a === "mathord") return Pe(i, "Math-Italic", n, t, l.concat(["mathnormal"]));
  if (a === "textord") {
    var N = de[n][i] && de[n][i].font;
    if (N === "ams") {
      var I = Ot("amsrm", t.fontWeight, t.fontShape);
      return Pe(i, I, n, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (N === "main" || !N) {
      var P = Ot("textrm", t.fontWeight, t.fontShape);
      return Pe(i, P, n, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var G = Ot(N, t.fontWeight, t.fontShape);
      return Pe(i, G, n, t, l.concat(G, t.fontWeight, t.fontShape));
    }
  } else throw new Error("unexpected type: " + a + " in makeOrd");
}, Jl = (r, e) => {
  if (C0(r.classes) !== C0(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize || r.italic !== 0 && r.hasClass("mathnormal")) return false;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord") return false;
  }
  for (var a of Object.keys(r.style)) if (r.style[a] !== e.style[a]) return false;
  for (var n of Object.keys(e.style)) if (r.style[n] !== e.style[n]) return false;
  return true;
}, ii = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], a = r[e + 1];
    t instanceof We && a instanceof We && Jl(t, a) && (t.text += a.text, t.height = Math.max(t.height, a.height), t.depth = Math.max(t.depth, a.depth), t.italic = a.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, xa = function(e) {
  for (var t = 0, a = 0, n = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > a && (a = l.depth), l.maxFontSize > n && (n = l.maxFontSize);
  }
  e.height = t, e.depth = a, e.maxFontSize = n;
}, T = function(e, t, a, n) {
  var i = new st(e, t, a, n);
  return xa(i), i;
}, R0 = (r, e, t, a) => new st(r, e, t, a), at = function(e, t, a) {
  var n = T([e], [], t);
  return n.height = Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = B(n.height), n.maxFontSize = 1, n;
}, Ql = function(e, t, a, n) {
  var i = new er(e, t, a, n);
  return xa(i), i;
}, w0 = function(e) {
  var t = new it(e);
  return xa(t), t;
}, nt = function(e, t) {
  return e instanceof it ? T([], [e], t) : e;
}, e1 = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, a = [t[0]], n = -t[0].shift - t[0].elem.depth, i = n, l = 1; l < t.length; l++) {
      var c = -t[l].shift - i - t[l].elem.depth, u = c - (t[l - 1].elem.height + t[l - 1].elem.depth);
      i = i + c, a.push({ type: "kern", size: u }), a.push(t[l]);
    }
    return { children: a, depth: n };
  }
  var d;
  if (e.positionType === "top") {
    for (var g = e.positionData, x = 0; x < e.children.length; x++) {
      var y = e.children[x];
      g -= y.type === "kern" ? y.size : y.elem.height + y.elem.depth;
    }
    d = g;
  } else if (e.positionType === "bottom") d = -e.positionData;
  else {
    var w = e.children[0];
    if (w.type !== "elem") throw new Error('First child must have type "elem".');
    if (e.positionType === "shift") d = -w.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline") d = -w.elem.depth;
    else throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return { children: e.children, depth: d };
}, ne = function(e, t) {
  for (var { children: a, depth: n } = e1(e), i = 0, l = 0; l < a.length; l++) {
    var c = a[l];
    if (c.type === "elem") {
      var u = c.elem;
      i = Math.max(i, u.maxFontSize, u.height);
    }
  }
  i += 2;
  var d = T(["pstrut"], []);
  d.style.height = B(i);
  for (var g = [], x = n, y = n, w = n, k = 0; k < a.length; k++) {
    var M = a[k];
    if (M.type === "kern") w += M.size;
    else {
      var N = M.elem, I = M.wrapperClasses || [], P = M.wrapperStyle || {}, G = T(I, [d, N], void 0, P);
      G.style.top = B(-i - w - N.depth), M.marginLeft && (G.style.marginLeft = M.marginLeft), M.marginRight && (G.style.marginRight = M.marginRight), g.push(G), w += N.height + N.depth;
    }
    x = Math.min(x, w), y = Math.max(y, w);
  }
  var j = T(["vlist"], g);
  j.style.height = B(y);
  var Q;
  if (x < 0) {
    var W = T([], []), Y = T(["vlist"], [W]);
    Y.style.height = B(-x);
    var ae = T(["vlist-s"], [new We("\u200B")]);
    Q = [T(["vlist-r"], [j, ae]), T(["vlist-r"], [Y])];
  } else Q = [T(["vlist-r"], [j])];
  var te = T(["vlist-t"], Q);
  return Q.length === 2 && te.classes.push("vlist-t2"), te.height = y, te.depth = -x, te;
}, si = (r, e) => {
  var t = T(["mspace"], [], e), a = ve(r, e);
  return t.style.marginRight = B(a), t;
}, Ot = function(e, t, a) {
  var n = "";
  switch (e) {
    case "amsrm":
      n = "AMS";
      break;
    case "textrm":
      n = "Main";
      break;
    case "textsf":
      n = "SansSerif";
      break;
    case "texttt":
      n = "Typewriter";
      break;
    default:
      n = e;
  }
  var i;
  return t === "textbf" && a === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", n + "-" + i;
}, Yr = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathnormal: { variant: "italic", fontName: "Math-Italic" }, mathsfit: { variant: "sans-serif-italic", fontName: "SansSerif-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } }, li = { vec: ["vec", 0.471, 0.714], oiintSize1: ["oiintSize1", 0.957, 0.499], oiintSize2: ["oiintSize2", 1.472, 0.659], oiiintSize1: ["oiiintSize1", 1.304, 0.499], oiiintSize2: ["oiiintSize2", 1.98, 0.659] }, oi = function(e, t) {
  var [a, n, i] = li[e], l = new B0(a), c = new b0([l], { width: B(n), height: B(i), style: "width:" + B(n), viewBox: "0 0 " + 1e3 * n + " " + 1e3 * i, preserveAspectRatio: "xMinYMin" }), u = R0(["overlay"], [c], t);
  return u.height = i, u.style.height = B(i), u.style.width = B(n), u;
}, ge = { number: 3, unit: "mu" }, H0 = { number: 4, unit: "mu" }, d0 = { number: 5, unit: "mu" }, t1 = { mord: { mop: ge, mbin: H0, mrel: d0, minner: ge }, mop: { mord: ge, mop: ge, mrel: d0, minner: ge }, mbin: { mord: H0, mop: H0, mopen: H0, minner: H0 }, mrel: { mord: d0, mop: d0, mopen: d0, minner: d0 }, mopen: {}, mclose: { mop: ge, mbin: H0, mrel: d0, minner: ge }, mpunct: { mord: ge, mop: ge, mrel: d0, mopen: ge, mclose: ge, mpunct: ge, minner: ge }, minner: { mord: ge, mop: ge, mbin: H0, mrel: d0, mopen: ge, mpunct: ge, minner: ge } }, r1 = { mord: { mop: ge }, mop: { mord: ge, mop: ge }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: ge }, mpunct: {}, minner: { mop: ge } }, ci = {}, Zt = {}, Yt = {};
function _(r) {
  for (var { type: e, names: t, props: a, handler: n, htmlBuilder: i, mathmlBuilder: l } = r, c = { type: e, numArgs: a.numArgs, argTypes: a.argTypes, allowedInArgument: !!a.allowedInArgument, allowedInText: !!a.allowedInText, allowedInMath: a.allowedInMath === void 0 ? true : a.allowedInMath, numOptionalArgs: a.numOptionalArgs || 0, infix: !!a.infix, primitive: !!a.primitive, handler: n }, u = 0; u < t.length; ++u) ci[t[u]] = c;
  e && (i && (Zt[e] = i), l && (Yt[e] = l));
}
function U0(r) {
  var { type: e, htmlBuilder: t, mathmlBuilder: a } = r;
  _({ type: e, names: [], props: { numArgs: 0 }, handler() {
    throw new Error("Should never be called.");
  }, htmlBuilder: t, mathmlBuilder: a });
}
var Kt = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, Me = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, a1 = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), n1 = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), i1 = { display: X.DISPLAY, text: X.TEXT, script: X.SCRIPT, scriptscript: X.SCRIPTSCRIPT }, s1 = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" }, Ce = function(e, t, a, n) {
  n === void 0 && (n = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var c = ie(e[l], t);
    if (c instanceof it) {
      var u = c.children;
      i.push(...u);
    } else i.push(c);
  }
  if (ii(i), !a) return i;
  var d = t;
  if (e.length === 1) {
    var g = e[0];
    g.type === "sizing" ? d = t.havingSize(g.size) : g.type === "styling" && (d = t.havingStyle(i1[g.style]));
  }
  var x = T([n[0] || "leftmost"], [], t), y = T([n[1] || "rightmost"], [], t), w = a === "root";
  return Kr(i, (k, M) => {
    var N = M.classes[0], I = k.classes[0];
    N === "mbin" && n1.has(I) ? M.classes[0] = "mord" : I === "mbin" && a1.has(N) && (k.classes[0] = "mord");
  }, { node: x }, y, w), Kr(i, (k, M) => {
    var N, I, P = Qr(M), G = Qr(k), j = P && G ? k.hasClass("mtight") ? (N = r1[P]) == null ? void 0 : N[G] : (I = t1[P]) == null ? void 0 : I[G] : null;
    if (j) return si(j, d);
  }, { node: x }, y, w), i;
}, Kr = function(e, t, a, n, i) {
  n && e.push(n);
  for (var l = 0; l < e.length; l++) {
    var c = e[l], u = ui(c);
    if (u) {
      Kr(u.children, t, a, null, i);
      continue;
    }
    var d = !c.hasClass("mspace");
    if (d) {
      var g = t(c, a.node);
      g && (a.insertAfter ? a.insertAfter(g) : (e.unshift(g), l++));
    }
    d ? a.node = c : i && c.hasClass("newline") && (a.node = T(["leftmost"])), a.insertAfter = /* @__PURE__ */ ((x) => (y) => {
      e.splice(x + 1, 0, y), l++;
    })(l);
  }
  n && e.pop();
}, ui = function(e) {
  return e instanceof it || e instanceof er || e instanceof st && e.hasClass("enclosing") ? e : null;
}, Jr = function(e, t) {
  var a = ui(e);
  if (a) {
    var n = a.children;
    if (n.length) {
      if (t === "right") return Jr(n[n.length - 1], "right");
      if (t === "left") return Jr(n[0], "left");
    }
  }
  return e;
}, Qr = function(e, t) {
  if (!e) return null;
  t && (e = Jr(e, t));
  var a = e.classes[0];
  return s1[a] || null;
}, vt = function(e, t) {
  var a = ["nulldelimiter"].concat(e.baseSizingClasses());
  return T(t.concat(a));
}, ie = function(e, t, a) {
  if (!e) return T();
  if (Zt[e.type]) {
    var n = Zt[e.type](e, t);
    if (a && t.size !== a.size) {
      n = T(t.sizingClasses(a), [n], t);
      var i = t.sizeMultiplier / a.sizeMultiplier;
      n.height *= i, n.depth *= i;
    }
    return n;
  } else throw new z("Got group of unknown type: '" + e.type + "'");
};
function Lt(r, e) {
  var t = T(["base"], r, e), a = T(["strut"]);
  return a.style.height = B(t.height + t.depth), t.depth && (a.style.verticalAlign = B(-t.depth)), t.children.unshift(a), t;
}
function ea(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var a = Ce(r, e, "root"), n;
  a.length === 2 && a[1].hasClass("tag") && (n = a.pop());
  for (var i = [], l = [], c = 0; c < a.length; c++) if (l.push(a[c]), a[c].hasClass("mbin") || a[c].hasClass("mrel") || a[c].hasClass("allowbreak")) {
    for (var u = false; c < a.length - 1 && a[c + 1].hasClass("mspace") && !a[c + 1].hasClass("newline"); ) c++, l.push(a[c]), a[c].hasClass("nobreak") && (u = true);
    u || (i.push(Lt(l, e)), l = []);
  } else a[c].hasClass("newline") && (l.pop(), l.length > 0 && (i.push(Lt(l, e)), l = []), i.push(a[c]));
  l.length > 0 && i.push(Lt(l, e));
  var d;
  t ? (d = Lt(Ce(t, e, true), e), d.classes = ["tag"], i.push(d)) : n && i.push(n);
  var g = T(["katex-html"], i);
  if (g.setAttribute("aria-hidden", "true"), d) {
    var x = d.children[0];
    x.style.height = B(g.height + g.depth), g.depth && (x.style.verticalAlign = B(-g.depth));
  }
  return g;
}
function hi(r) {
  return new it(r);
}
class E {
  constructor(e, t, a) {
    this.type = e, this.attributes = {}, this.children = t || [], this.classes = a || [];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = C0(this.classes));
    for (var a = 0; a < this.children.length; a++) if (this.children[a] instanceof Ae && this.children[a + 1] instanceof Ae) {
      for (var n = this.children[a].toText() + this.children[++a].toText(); this.children[a + 1] instanceof Ae; ) n += this.children[++a].toText();
      e.appendChild(new Ae(n).toNode());
    } else e.appendChild(this.children[a].toNode());
    return e;
  }
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += _e(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + _e(C0(this.classes)) + '"'), e += ">";
    for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class Ae {
  constructor(e) {
    this.text = e;
  }
  toNode() {
    return document.createTextNode(this.text);
  }
  toMarkup() {
    return _e(this.toText());
  }
  toText() {
    return this.text;
  }
}
class mi {
  constructor(e) {
    this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = "\u200A" : e >= 0.1666 && e <= 0.1667 ? this.character = "\u2009" : e >= 0.2222 && e <= 0.2223 ? this.character = "\u2005" : e >= 0.2777 && e <= 0.2778 ? this.character = "\u2005\u200A" : e >= -0.05556 && e <= -0.05555 ? this.character = "\u200A\u2063" : e >= -0.1667 && e <= -0.1666 ? this.character = "\u2009\u2063" : e >= -0.2223 && e <= -0.2222 ? this.character = "\u205F\u2063" : e >= -0.2778 && e <= -0.2777 ? this.character = "\u2005\u2063" : this.character = null;
  }
  toNode() {
    if (this.character) return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", B(this.width)), e;
  }
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + B(this.width) + '"/>';
  }
  toText() {
    return this.character ? this.character : " ";
  }
}
var l1 = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), o1 = /* @__PURE__ */ new Set(["mrow", "mtable"]), Je = function(e, t, a) {
  return de[t][e] && de[t][e].replace && e.charCodeAt(0) !== 55349 && !(ni.hasOwnProperty(e) && a && (a.fontFamily && a.fontFamily.slice(4, 6) === "tt" || a.font && a.font.slice(4, 6) === "tt")) && (e = de[t][e].replace), new Ae(e);
}, ya = function(e) {
  return e.length === 1 ? e[0] : new E("mrow", e);
}, wa = function(e, t) {
  if (t.fontFamily === "texttt") return "monospace";
  if (t.fontFamily === "textsf") return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf") return "bold-italic";
  if (t.fontShape === "textit") return "italic";
  if (t.fontWeight === "textbf") return "bold";
  var a = t.font;
  if (!a || a === "mathnormal") return null;
  var n = e.mode;
  if (a === "mathit") return "italic";
  if (a === "boldsymbol") return e.type === "textord" ? "bold" : "bold-italic";
  if (a === "mathbf") return "bold";
  if (a === "mathbb") return "double-struck";
  if (a === "mathsfit") return "sans-serif-italic";
  if (a === "mathfrak") return "fraktur";
  if (a === "mathscr" || a === "mathcal") return "script";
  if (a === "mathsf") return "sans-serif";
  if (a === "mathtt") return "monospace";
  var i = e.text;
  if (l1.has(i)) return null;
  if (de[n][i]) {
    var l = de[n][i].replace;
    l && (i = l);
  }
  var c = Yr[a].fontName;
  return va(i, c, n) ? Yr[a].variant : null;
};
function Rr(r) {
  if (!r) return false;
  if (r.type === "mi" && r.children.length === 1) {
    var e = r.children[0];
    return e instanceof Ae && e.text === ".";
  } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
    var t = r.children[0];
    return t instanceof Ae && t.text === ",";
  } else return false;
}
var Ze = function(e, t, a) {
  if (e.length === 1) {
    var n = ce(e[0], t);
    return a && n instanceof E && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n];
  }
  for (var i = [], l, c = 0; c < e.length; c++) {
    var u = ce(e[c], t);
    if (u instanceof E && l instanceof E) {
      if (u.type === "mtext" && l.type === "mtext" && u.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...u.children);
        continue;
      } else if (u.type === "mn" && l.type === "mn") {
        l.children.push(...u.children);
        continue;
      } else if (Rr(u) && l.type === "mn") {
        l.children.push(...u.children);
        continue;
      } else if (u.type === "mn" && Rr(l)) u.children = [...l.children, ...u.children], i.pop();
      else if ((u.type === "msup" || u.type === "msub") && u.children.length >= 1 && (l.type === "mn" || Rr(l))) {
        var d = u.children[0];
        d instanceof E && d.type === "mn" && (d.children = [...l.children, ...d.children], i.pop());
      } else if (l.type === "mi" && l.children.length === 1) {
        var g = l.children[0];
        if (g instanceof Ae && g.text === "\u0338" && (u.type === "mo" || u.type === "mi" || u.type === "mn")) {
          var x = u.children[0];
          x instanceof Ae && x.text.length > 0 && (x.text = x.text.slice(0, 1) + "\u0338" + x.text.slice(1), i.pop());
        }
      }
    }
    i.push(u), l = u;
  }
  return i;
}, I0 = function(e, t, a) {
  return ya(Ze(e, t, a));
}, ce = function(e, t) {
  if (!e) return new E("mrow");
  if (Yt[e.type]) {
    var a = Yt[e.type](e, t);
    return a;
  } else throw new z("Got group of unknown type: '" + e.type + "'");
};
function cn(r, e, t, a, n) {
  var i = Ze(r, t), l;
  i.length === 1 && i[0] instanceof E && o1.has(i[0].type) ? l = i[0] : l = new E("mrow", i);
  var c = new E("annotation", [new Ae(e)]);
  c.setAttribute("encoding", "application/x-tex");
  var u = new E("semantics", [l, c]), d = new E("math", [u]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), a && d.setAttribute("display", "block");
  var g = n ? "katex" : "katex-mathml";
  return T([g], [d]);
}
var c1 = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], un = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], hn = function(e, t) {
  return t.size < 2 ? e : c1[e - 1][t.size - 1];
};
class p0 {
  constructor(e) {
    this.style = e.style, this.color = e.color, this.size = e.size || p0.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = un[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  extend(e) {
    var t = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
    return Object.assign(t, e), new p0(t);
  }
  havingStyle(e) {
    return this.style === e ? this : this.extend({ style: e, size: hn(this.textSize, e) });
  }
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({ style: this.style.text(), size: e, textSize: e, sizeMultiplier: un[e - 1] });
  }
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = hn(p0.BASESIZE, e);
    return this.size === t && this.textSize === p0.BASESIZE && this.style === e ? this : this.extend({ style: e, size: t });
  }
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({ style: this.style.text(), size: e });
  }
  withColor(e) {
    return this.extend({ color: e });
  }
  withPhantom() {
    return this.extend({ phantom: true });
  }
  withFont(e) {
    return this.extend({ font: e });
  }
  withTextFontFamily(e) {
    return this.extend({ fontFamily: e, font: "" });
  }
  withTextFontWeight(e) {
    return this.extend({ fontWeight: e, font: "" });
  }
  withTextFontShape(e) {
    return this.extend({ fontShape: e, font: "" });
  }
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  baseSizingClasses() {
    return this.size !== p0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + p0.BASESIZE] : [];
  }
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Wl(this.size)), this._fontMetrics;
  }
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
p0.BASESIZE = 6;
var di = function(e) {
  return new p0({ style: e.displayMode ? X.DISPLAY : X.TEXT, maxSize: e.maxSize, minRuleThickness: e.minRuleThickness });
}, pi = function(e, t) {
  if (t.displayMode) {
    var a = ["katex-display"];
    t.leqno && a.push("leqno"), t.fleqn && a.push("fleqn"), e = T(a, [e]);
  }
  return e;
}, u1 = function(e, t, a) {
  var n = di(a), i;
  if (a.output === "mathml") return cn(e, t, n, a.displayMode, true);
  if (a.output === "html") {
    var l = ea(e, n);
    i = T(["katex"], [l]);
  } else {
    var c = cn(e, t, n, a.displayMode, false), u = ea(e, n);
    i = T(["katex"], [c, u]);
  }
  return pi(i, a);
}, h1 = function(e, t, a) {
  var n = di(a), i = ea(e, n), l = T(["katex"], [i]);
  return pi(l, a);
}, m1 = { widehat: "^", widecheck: "\u02C7", widetilde: "~", utilde: "~", overleftarrow: "\u2190", underleftarrow: "\u2190", xleftarrow: "\u2190", overrightarrow: "\u2192", underrightarrow: "\u2192", xrightarrow: "\u2192", underbrace: "\u23DF", overbrace: "\u23DE", overgroup: "\u23E0", undergroup: "\u23E1", overleftrightarrow: "\u2194", underleftrightarrow: "\u2194", xleftrightarrow: "\u2194", Overrightarrow: "\u21D2", xRightarrow: "\u21D2", overleftharpoon: "\u21BC", xleftharpoonup: "\u21BC", overrightharpoon: "\u21C0", xrightharpoonup: "\u21C0", xLeftarrow: "\u21D0", xLeftrightarrow: "\u21D4", xhookleftarrow: "\u21A9", xhookrightarrow: "\u21AA", xmapsto: "\u21A6", xrightharpoondown: "\u21C1", xleftharpoondown: "\u21BD", xrightleftharpoons: "\u21CC", xleftrightharpoons: "\u21CB", xtwoheadleftarrow: "\u219E", xtwoheadrightarrow: "\u21A0", xlongequal: "=", xtofrom: "\u21C4", xrightleftarrows: "\u21C4", xrightequilibrium: "\u21CC", xleftequilibrium: "\u21CB", "\\cdrightarrow": "\u2192", "\\cdleftarrow": "\u2190", "\\cdlongequal": "=" }, nr = function(e) {
  var t = new E("mo", [new Ae(m1[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, d1 = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, p1 = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), ir = function(e, t) {
  function a() {
    var c = 4e5, u = e.label.slice(1);
    if (p1.has(u)) {
      var d = e, g = d.base.type === "ordgroup" ? d.base.body.length : 1, x, y, w;
      if (g > 5) u === "widehat" || u === "widecheck" ? (x = 420, c = 2364, w = 0.42, y = u + "4") : (x = 312, c = 2340, w = 0.34, y = "tilde4");
      else {
        var k = [1, 1, 2, 2, 3, 3][g];
        u === "widehat" || u === "widecheck" ? (c = [0, 1062, 2364, 2364, 2364][k], x = [0, 239, 300, 360, 420][k], w = [0, 0.24, 0.3, 0.3, 0.36, 0.42][k], y = u + k) : (c = [0, 600, 1033, 2339, 2340][k], x = [0, 260, 286, 306, 312][k], w = [0, 0.26, 0.286, 0.3, 0.306, 0.34][k], y = "tilde" + k);
      }
      var M = new B0(y), N = new b0([M], { width: "100%", height: B(w), viewBox: "0 0 " + c + " " + x, preserveAspectRatio: "none" });
      return { span: R0([], [N], t), minWidth: 0, height: w };
    } else {
      var I = [], P = d1[u], [G, j, Q] = P, W = Q / 1e3, Y = G.length, ae, te;
      if (Y === 1) {
        var ze = P[3];
        ae = ["hide-tail"], te = [ze];
      } else if (Y === 2) ae = ["halfarrow-left", "halfarrow-right"], te = ["xMinYMin", "xMaxYMin"];
      else if (Y === 3) ae = ["brace-left", "brace-center", "brace-right"], te = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else throw new Error(`Correct katexImagesData or update code here to support
                    ` + Y + " children.");
      for (var ke = 0; ke < Y; ke++) {
        var fe = new B0(G[ke]), Qe = new b0([fe], { width: "400em", height: B(W), viewBox: "0 0 " + c + " " + Q, preserveAspectRatio: te[ke] + " slice" }), be = R0([ae[ke]], [Qe], t);
        if (Y === 1) return { span: be, minWidth: j, height: W };
        be.style.height = B(W), I.push(be);
      }
      return { span: T(["stretchy"], I, t), minWidth: j, height: W };
    }
  }
  var { span: n, minWidth: i, height: l } = a();
  return n.height = l, n.style.height = B(l), i > 0 && (n.style.minWidth = B(i)), n;
}, f1 = function(e, t, a, n, i) {
  var l, c = e.height + e.depth + a + n;
  if (/fbox|color|angl/.test(t)) {
    if (l = T(["stretchy", t], [], i), t === "fbox") {
      var u = i.color && i.getColor();
      u && (l.style.borderColor = u);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new Xr({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(t) && d.push(new Xr({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
    var g = new b0(d, { width: "100%", height: B(c) });
    l = R0([], [g], i);
  }
  return l.height = c, l.style.height = B(c), l;
};
function J(r, e) {
  if (!r || r.type !== e) throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function sr(r) {
  var e = lr(r);
  if (!e) throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function lr(r) {
  return r && (r.type === "atom" || Zl.hasOwnProperty(r.type)) ? r : null;
}
var fi = (r) => {
  if (r instanceof We) return r;
  if (Vl(r) && r.children.length === 1) return fi(r.children[0]);
}, ka = (r, e) => {
  var t, a, n;
  r && r.type === "supsub" ? (a = J(r.base, "accent"), t = a.base, r.base = t, n = Ul(ie(r, e)), r.base = a) : (a = J(r, "accent"), t = a.base);
  var i = ie(t, e.havingCrampedStyle()), l = a.isShifty && x0(t), c = 0;
  if (l) {
    var u, d;
    c = (u = (d = fi(i)) == null ? void 0 : d.skew) != null ? u : 0;
  }
  var g = a.label === "\\c", x = g ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), y;
  if (a.isStretchy) y = ir(a, e), y = ne({ positionType: "firstBaseline", children: [{ type: "elem", elem: i }, { type: "elem", elem: y, wrapperClasses: ["svg-align"], wrapperStyle: c > 0 ? { width: "calc(100% - " + B(2 * c) + ")", marginLeft: B(2 * c) } : void 0 }] });
  else {
    var w, k;
    a.label === "\\vec" ? (w = oi("vec", e), k = li.vec[1]) : (w = ar({ mode: a.mode, text: a.label }, e, "textord"), w = Gl(w), w.italic = 0, k = w.width, g && (x += w.depth)), y = T(["accent-body"], [w]);
    var M = a.label === "\\textcircled";
    M && (y.classes.push("accent-full"), x = i.height);
    var N = c;
    M || (N -= k / 2), y.style.left = B(N), a.label === "\\textcircled" && (y.style.top = ".2em"), y = ne({ positionType: "firstBaseline", children: [{ type: "elem", elem: i }, { type: "kern", size: -x }, { type: "elem", elem: y }] });
  }
  var I = T(["mord", "accent"], [y], e);
  return n ? (n.children[0] = I, n.height = Math.max(I.height, n.height), n.classes[0] = "mord", n) : I;
}, gi = (r, e) => {
  var t = r.isStretchy ? nr(r.label) : new E("mo", [Je(r.label, r.mode)]), a = new E("mover", [ce(r.base, e), t]);
  return a.setAttribute("accent", "true"), a;
}, g1 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
_({ type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], props: { numArgs: 1 }, handler: (r, e) => {
  var t = Kt(e[0]), a = !g1.test(r.funcName), n = !a || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
  return { type: "accent", mode: r.parser.mode, label: r.funcName, isStretchy: a, isShifty: n, base: t };
}, htmlBuilder: ka, mathmlBuilder: gi });
_({ type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"] }, handler: (r, e) => {
  var t = e[0], a = r.parser.mode;
  return a === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), a = "text"), { type: "accent", mode: a, label: r.funcName, isStretchy: false, isShifty: true, base: t };
}, htmlBuilder: ka, mathmlBuilder: gi });
_({ type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], props: { numArgs: 1 }, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "accentUnder", mode: t.mode, label: a, base: n };
}, htmlBuilder: (r, e) => {
  var t = ie(r.base, e), a = ir(r, e), n = r.label === "\\utilde" ? 0.12 : 0, i = ne({ positionType: "top", positionData: t.height, children: [{ type: "elem", elem: a, wrapperClasses: ["svg-align"] }, { type: "kern", size: n }, { type: "elem", elem: t }] });
  return T(["mord", "accentunder"], [i], e);
}, mathmlBuilder: (r, e) => {
  var t = nr(r.label), a = new E("munder", [ce(r.base, e), t]);
  return a.setAttribute("accentunder", "true"), a;
} });
var qt = (r) => {
  var e = new E("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
_({ type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"], props: { numArgs: 1, numOptionalArgs: 1 }, handler(r, e, t) {
  var { parser: a, funcName: n } = r;
  return { type: "xArrow", mode: a.mode, label: n, body: e[0], below: t[0] };
}, htmlBuilder(r, e) {
  var t = e.style, a = e.havingStyle(t.sup()), n = nt(ie(r.body, a, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
  n.classes.push(i + "-arrow-pad");
  var l;
  r.below && (a = e.havingStyle(t.sub()), l = nt(ie(r.below, a, e), e), l.classes.push(i + "-arrow-pad"));
  var c = ir(r, e), u = -e.fontMetrics().axisHeight + 0.5 * c.height, d = -e.fontMetrics().axisHeight - 0.5 * c.height - 0.111;
  (n.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= n.depth);
  var g;
  if (l) {
    var x = -e.fontMetrics().axisHeight + l.height + 0.5 * c.height + 0.111;
    g = ne({ positionType: "individualShift", children: [{ type: "elem", elem: n, shift: d }, { type: "elem", elem: c, shift: u }, { type: "elem", elem: l, shift: x }] });
  } else g = ne({ positionType: "individualShift", children: [{ type: "elem", elem: n, shift: d }, { type: "elem", elem: c, shift: u }] });
  return g.children[0].children[0].children[1].classes.push("svg-align"), T(["mrel", "x-arrow"], [g], e);
}, mathmlBuilder(r, e) {
  var t = nr(r.label);
  t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
  var a;
  if (r.body) {
    var n = qt(ce(r.body, e));
    if (r.below) {
      var i = qt(ce(r.below, e));
      a = new E("munderover", [t, i, n]);
    } else a = new E("mover", [t, n]);
  } else if (r.below) {
    var l = qt(ce(r.below, e));
    a = new E("munder", [t, l]);
  } else a = qt(), a = new E("mover", [t, a]);
  return a;
} });
function vi(r, e) {
  var t = Ce(r.body, e, true);
  return T([r.mclass], t, e);
}
function bi(r, e) {
  var t, a = Ze(r.body, e);
  return r.mclass === "minner" ? t = new E("mpadded", a) : r.mclass === "mord" ? r.isCharacterBox ? (t = a[0], t.type = "mi") : t = new E("mi", a) : (r.isCharacterBox ? (t = a[0], t.type = "mo") : t = new E("mo", a), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
_({ type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], props: { numArgs: 1, primitive: true }, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "mclass", mode: t.mode, mclass: "m" + a.slice(5), body: Me(n), isCharacterBox: x0(n) };
}, htmlBuilder: vi, mathmlBuilder: bi });
var or = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
_({ type: "mclass", names: ["\\@binrel"], props: { numArgs: 2 }, handler(r, e) {
  var { parser: t } = r;
  return { type: "mclass", mode: t.mode, mclass: or(e[0]), body: Me(e[1]), isCharacterBox: x0(e[1]) };
} });
_({ type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], props: { numArgs: 2 }, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[1], i = e[0], l;
  a !== "\\stackrel" ? l = or(n) : l = "mrel";
  var c = { type: "op", mode: n.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: a !== "\\stackrel", body: Me(n) }, u = { type: "supsub", mode: i.mode, base: c, sup: a === "\\underset" ? null : i, sub: a === "\\underset" ? i : null };
  return { type: "mclass", mode: t.mode, mclass: l, body: [u], isCharacterBox: x0(u) };
}, htmlBuilder: vi, mathmlBuilder: bi });
_({ type: "pmb", names: ["\\pmb"], props: { numArgs: 1, allowedInText: true }, handler(r, e) {
  var { parser: t } = r;
  return { type: "pmb", mode: t.mode, mclass: or(e[0]), body: Me(e[0]) };
}, htmlBuilder(r, e) {
  var t = Ce(r.body, e, true), a = T([r.mclass], t, e);
  return a.style.textShadow = "0.02em 0.01em 0.04px", a;
}, mathmlBuilder(r, e) {
  var t = Ze(r.body, e), a = new E("mstyle", t);
  return a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), a;
} });
var v1 = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" }, mn = () => ({ type: "styling", body: [], mode: "math", style: "display" }), dn = (r) => r.type === "textord" && r.text === "@", b1 = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function x1(r, e, t) {
  var a = v1[r];
  switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(a, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var n = t.callFunction("\\\\cdleft", [e[0]], []), i = { type: "atom", text: a, mode: "math", family: "rel" }, l = t.callFunction("\\Big", [i], []), c = t.callFunction("\\\\cdright", [e[1]], []), u = { type: "ordgroup", mode: "math", body: [n, l, c] };
      return t.callFunction("\\\\cdparent", [u], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = { type: "textord", text: "\\Vert", mode: "math" };
      return t.callFunction("\\Big", [d], []);
    }
    default:
      return { type: "textord", text: " ", mode: "math" };
  }
}
function y1(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(false, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\") r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else throw new z("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var a = [], n = [a], i = 0; i < e.length; i++) {
    for (var l = e[i], c = mn(), u = 0; u < l.length; u++) if (!dn(l[u])) c.body.push(l[u]);
    else {
      a.push(c), u += 1;
      var d = sr(l[u]).text, g = new Array(2);
      if (g[0] = { type: "ordgroup", mode: "math", body: [] }, g[1] = { type: "ordgroup", mode: "math", body: [] }, !"=|.".includes(d)) if ("<>AV".includes(d)) for (var x = 0; x < 2; x++) {
        for (var y = true, w = u + 1; w < l.length; w++) {
          if (b1(l[w], d)) {
            y = false, u = w;
            break;
          }
          if (dn(l[w])) throw new z("Missing a " + d + " character to complete a CD arrow.", l[w]);
          g[x].body.push(l[w]);
        }
        if (y) throw new z("Missing a " + d + " character to complete a CD arrow.", l[u]);
      }
      else throw new z('Expected one of "<>AV=|." after @', l[u]);
      var k = x1(d, g, r), M = { type: "styling", body: [k], mode: "math", style: "display" };
      a.push(M), c = mn();
    }
    i % 2 === 0 ? a.push(c) : a.shift(), a = [], n.push(a);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var N = new Array(n[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
  return { type: "array", mode: "math", body: n, arraystretch: 1, addJot: true, rowGaps: [null], cols: N, colSeparationType: "CD", hLinesBeforeRow: new Array(n.length + 1).fill([]) };
}
_({ type: "cdlabel", names: ["\\\\cdleft", "\\\\cdright"], props: { numArgs: 1 }, handler(r, e) {
  var { parser: t, funcName: a } = r;
  return { type: "cdlabel", mode: t.mode, side: a.slice(4), label: e[0] };
}, htmlBuilder(r, e) {
  var t = e.havingStyle(e.style.sup()), a = nt(ie(r.label, t, e), e);
  return a.classes.push("cd-label-" + r.side), a.style.bottom = B(0.8 - a.depth), a.height = 0, a.depth = 0, a;
}, mathmlBuilder(r, e) {
  var t = new E("mrow", [ce(r.label, e)]);
  return t = new E("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new E("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
} });
_({ type: "cdlabelparent", names: ["\\\\cdparent"], props: { numArgs: 1 }, handler(r, e) {
  var { parser: t } = r;
  return { type: "cdlabelparent", mode: t.mode, fragment: e[0] };
}, htmlBuilder(r, e) {
  var t = nt(ie(r.fragment, e), e);
  return t.classes.push("cd-vert-arrow"), t;
}, mathmlBuilder(r, e) {
  return new E("mrow", [ce(r.fragment, e)]);
} });
_({ type: "textord", names: ["\\@char"], props: { numArgs: 1, allowedInText: true }, handler(r, e) {
  for (var { parser: t } = r, a = J(e[0], "ordgroup"), n = a.body, i = "", l = 0; l < n.length; l++) {
    var c = J(n[l], "textord");
    i += c.text;
  }
  var u = parseInt(i), d;
  if (isNaN(u)) throw new z("\\@char has non-numeric argument " + i);
  if (u < 0 || u >= 1114111) throw new z("\\@char with invalid code point " + i);
  return u <= 65535 ? d = String.fromCharCode(u) : (u -= 65536, d = String.fromCharCode((u >> 10) + 55296, (u & 1023) + 56320)), { type: "textord", mode: t.mode, text: d };
} });
var xi = (r, e) => {
  var t = Ce(r.body, e.withColor(r.color), false);
  return w0(t);
}, yi = (r, e) => {
  var t = Ze(r.body, e.withColor(r.color)), a = new E("mstyle", t);
  return a.setAttribute("mathcolor", r.color), a;
};
_({ type: "color", names: ["\\textcolor"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "original"] }, handler(r, e) {
  var { parser: t } = r, a = J(e[0], "color-token").color, n = e[1];
  return { type: "color", mode: t.mode, color: a, body: Me(n) };
}, htmlBuilder: xi, mathmlBuilder: yi });
_({ type: "color", names: ["\\color"], props: { numArgs: 1, allowedInText: true, argTypes: ["color"] }, handler(r, e) {
  var { parser: t, breakOnTokenText: a } = r, n = J(e[0], "color-token").color;
  t.gullet.macros.set("\\current@color", n);
  var i = t.parseExpression(true, a);
  return { type: "color", mode: t.mode, color: n, body: i };
}, htmlBuilder: xi, mathmlBuilder: yi });
_({ type: "cr", names: ["\\\\"], props: { numArgs: 0, numOptionalArgs: 0, allowedInText: true }, handler(r, e, t) {
  var { parser: a } = r, n = a.gullet.future().text === "[" ? a.parseSizeGroup(true) : null, i = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
  return { type: "cr", mode: a.mode, newLine: i, size: n && J(n, "size").value };
}, htmlBuilder(r, e) {
  var t = T(["mspace"], [], e);
  return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = B(ve(r.size, e)))), t;
}, mathmlBuilder(r, e) {
  var t = new E("mspace");
  return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", B(ve(r.size, e)))), t;
} });
var ta = { "\\global": "\\global", "\\long": "\\\\globallong", "\\\\globallong": "\\\\globallong", "\\def": "\\gdef", "\\gdef": "\\gdef", "\\edef": "\\xdef", "\\xdef": "\\xdef", "\\let": "\\\\globallet", "\\futurelet": "\\\\globalfuture" }, wi = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e)) throw new z("Expected a control sequence", r);
  return e;
}, w1 = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, ki = (r, e, t, a) => {
  var n = r.gullet.macros.get(t.text);
  n == null && (t.noexpand = true, n = { tokens: [t], numArgs: 0, unexpandable: !r.gullet.isExpandable(t.text) }), r.gullet.macros.set(e, n, a);
};
_({ type: "internal", names: ["\\global", "\\long", "\\\\globallong"], props: { numArgs: 0, allowedInText: true }, handler(r) {
  var { parser: e, funcName: t } = r;
  e.consumeSpaces();
  var a = e.fetch();
  if (ta[a.text]) return (t === "\\global" || t === "\\\\globallong") && (a.text = ta[a.text]), J(e.parseFunction(), "internal");
  throw new z("Invalid token after macro prefix", a);
} });
_({ type: "internal", names: ["\\def", "\\gdef", "\\edef", "\\xdef"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(r) {
  var { parser: e, funcName: t } = r, a = e.gullet.popToken(), n = a.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(n)) throw new z("Expected a control sequence", a);
  for (var i = 0, l, c = [[]]; e.gullet.future().text !== "{"; ) if (a = e.gullet.popToken(), a.text === "#") {
    if (e.gullet.future().text === "{") {
      l = e.gullet.future(), c[i].push("{");
      break;
    }
    if (a = e.gullet.popToken(), !/^[1-9]$/.test(a.text)) throw new z('Invalid argument number "' + a.text + '"');
    if (parseInt(a.text) !== i + 1) throw new z('Argument number "' + a.text + '" out of order');
    i++, c.push([]);
  } else {
    if (a.text === "EOF") throw new z("Expected a macro definition");
    c[i].push(a.text);
  }
  var { tokens: u } = e.gullet.consumeArg();
  return l && u.unshift(l), (t === "\\edef" || t === "\\xdef") && (u = e.gullet.expandTokens(u), u.reverse()), e.gullet.macros.set(n, { tokens: u, numArgs: i, delimiters: c }, t === ta[t]), { type: "internal", mode: e.mode };
} });
_({ type: "internal", names: ["\\let", "\\\\globallet"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(r) {
  var { parser: e, funcName: t } = r, a = wi(e.gullet.popToken());
  e.gullet.consumeSpaces();
  var n = w1(e);
  return ki(e, a, n, t === "\\\\globallet"), { type: "internal", mode: e.mode };
} });
_({ type: "internal", names: ["\\futurelet", "\\\\globalfuture"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(r) {
  var { parser: e, funcName: t } = r, a = wi(e.gullet.popToken()), n = e.gullet.popToken(), i = e.gullet.popToken();
  return ki(e, a, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(n), { type: "internal", mode: e.mode };
} });
var dt = function(e, t, a) {
  var n = de.math[e] && de.math[e].replace, i = va(n || e, t, a);
  if (!i) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Sa = function(e, t, a, n) {
  var i = a.havingBaseStyle(t), l = T(n.concat(i.sizingClasses(a)), [e], a), c = i.sizeMultiplier / a.sizeMultiplier;
  return l.height *= c, l.depth *= c, l.maxFontSize = i.sizeMultiplier, l;
}, Si = function(e, t, a) {
  var n = t.havingBaseStyle(a), i = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = B(i), e.height -= i, e.depth += i;
}, k1 = function(e, t, a, n, i, l) {
  var c = Pe(e, "Main-Regular", i, n), u = Sa(c, t, n, l);
  return Si(u, n, t), u;
}, S1 = function(e, t, a, n) {
  return Pe(e, "Size" + t + "-Regular", a, n);
}, Mi = function(e, t, a, n, i, l) {
  var c = S1(e, t, i, n), u = Sa(T(["delimsizing", "size" + t], [c], n), X.TEXT, n, l);
  return a && Si(u, n, X.TEXT), u;
}, Ir = function(e, t, a) {
  var n;
  t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
  var i = T(["delimsizinginner", n], [T([], [Pe(e, t, a)])]);
  return { type: "elem", elem: i };
}, Nr = function(e, t, a) {
  var n = o0["Size4-Regular"][e.charCodeAt(0)] ? o0["Size4-Regular"][e.charCodeAt(0)][4] : o0["Size1-Regular"][e.charCodeAt(0)][4], i = new B0("inner", Ll(e, Math.round(1e3 * t))), l = new b0([i], { width: B(n), height: B(t), style: "width:" + B(n), viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t), preserveAspectRatio: "xMinYMin" }), c = R0([], [l], a);
  return c.height = t, c.style.height = B(t), c.style.width = B(n), { type: "elem", elem: c };
}, ra = 8e-3, Pt = { type: "kern", size: -1 * ra }, M1 = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), A1 = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), Ai = function(e, t, a, n, i, l) {
  var c, u, d, g, x = "", y = 0;
  c = d = g = e, u = null;
  var w = "Size1-Regular";
  e === "\\uparrow" ? d = g = "\u23D0" : e === "\\Uparrow" ? d = g = "\u2016" : e === "\\downarrow" ? c = d = "\u23D0" : e === "\\Downarrow" ? c = d = "\u2016" : e === "\\updownarrow" ? (c = "\\uparrow", d = "\u23D0", g = "\\downarrow") : e === "\\Updownarrow" ? (c = "\\Uparrow", d = "\u2016", g = "\\Downarrow") : M1.has(e) ? (d = "\u2223", x = "vert", y = 333) : A1.has(e) ? (d = "\u2225", x = "doublevert", y = 556) : e === "[" || e === "\\lbrack" ? (c = "\u23A1", d = "\u23A2", g = "\u23A3", w = "Size4-Regular", x = "lbrack", y = 667) : e === "]" || e === "\\rbrack" ? (c = "\u23A4", d = "\u23A5", g = "\u23A6", w = "Size4-Regular", x = "rbrack", y = 667) : e === "\\lfloor" || e === "\u230A" ? (d = c = "\u23A2", g = "\u23A3", w = "Size4-Regular", x = "lfloor", y = 667) : e === "\\lceil" || e === "\u2308" ? (c = "\u23A1", d = g = "\u23A2", w = "Size4-Regular", x = "lceil", y = 667) : e === "\\rfloor" || e === "\u230B" ? (d = c = "\u23A5", g = "\u23A6", w = "Size4-Regular", x = "rfloor", y = 667) : e === "\\rceil" || e === "\u2309" ? (c = "\u23A4", d = g = "\u23A5", w = "Size4-Regular", x = "rceil", y = 667) : e === "(" || e === "\\lparen" ? (c = "\u239B", d = "\u239C", g = "\u239D", w = "Size4-Regular", x = "lparen", y = 875) : e === ")" || e === "\\rparen" ? (c = "\u239E", d = "\u239F", g = "\u23A0", w = "Size4-Regular", x = "rparen", y = 875) : e === "\\{" || e === "\\lbrace" ? (c = "\u23A7", u = "\u23A8", g = "\u23A9", d = "\u23AA", w = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (c = "\u23AB", u = "\u23AC", g = "\u23AD", d = "\u23AA", w = "Size4-Regular") : e === "\\lgroup" || e === "\u27EE" ? (c = "\u23A7", g = "\u23A9", d = "\u23AA", w = "Size4-Regular") : e === "\\rgroup" || e === "\u27EF" ? (c = "\u23AB", g = "\u23AD", d = "\u23AA", w = "Size4-Regular") : e === "\\lmoustache" || e === "\u23B0" ? (c = "\u23A7", g = "\u23AD", d = "\u23AA", w = "Size4-Regular") : (e === "\\rmoustache" || e === "\u23B1") && (c = "\u23AB", g = "\u23A9", d = "\u23AA", w = "Size4-Regular");
  var k = dt(c, w, i), M = k.height + k.depth, N = dt(d, w, i), I = N.height + N.depth, P = dt(g, w, i), G = P.height + P.depth, j = 0, Q = 1;
  if (u !== null) {
    var W = dt(u, w, i);
    j = W.height + W.depth, Q = 2;
  }
  var Y = M + G + j, ae = Math.max(0, Math.ceil((t - Y) / (Q * I))), te = Y + ae * Q * I, ze = n.fontMetrics().axisHeight;
  a && (ze *= n.sizeMultiplier);
  var ke = te / 2 - ze, fe = [];
  if (x.length > 0) {
    var Qe = te - M - G, be = Math.round(te * 1e3), Oe = ql(x, Math.round(Qe * 1e3)), Ue = new B0(x, Oe), r0 = (y / 1e3).toFixed(3) + "em", me = (be / 1e3).toFixed(3) + "em", Ye = new b0([Ue], { width: r0, height: me, viewBox: "0 0 " + y + " " + be }), Ie = R0([], [Ye], n);
    Ie.height = be / 1e3, Ie.style.width = r0, Ie.style.height = me, fe.push({ type: "elem", elem: Ie });
  } else {
    if (fe.push(Ir(g, w, i)), fe.push(Pt), u === null) {
      var Le = te - M - G + 2 * ra;
      fe.push(Nr(d, Le, n));
    } else {
      var e0 = (te - M - G - j) / 2 + 2 * ra;
      fe.push(Nr(d, e0, n)), fe.push(Pt), fe.push(Ir(u, w, i)), fe.push(Pt), fe.push(Nr(d, e0, n));
    }
    fe.push(Pt), fe.push(Ir(c, w, i));
  }
  var Ne = n.havingBaseStyle(X.TEXT), V0 = ne({ positionType: "bottom", positionData: ke, children: fe });
  return Sa(T(["delimsizing", "mult"], [V0], Ne), X.TEXT, n, l);
}, Dr = 80, _r = 0.08, Or = function(e, t, a, n, i) {
  var l = Ol(e, n, a), c = new B0(e, l), u = new b0([c], { width: "400em", height: B(t), viewBox: "0 0 400000 " + a, preserveAspectRatio: "xMinYMin slice" });
  return R0(["hide-tail"], [u], i);
}, T1 = function(e, t) {
  var a = t.havingBaseSizing(), n = Bi("\\surd", e * a.sizeMultiplier, Ci, a), i = a.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), c, u = 0, d = 0, g = 0, x;
  return n.type === "small" ? (g = 1e3 + 1e3 * l + Dr, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), u = (1 + l + _r) / i, d = (1 + l) / i, c = Or("sqrtMain", u, g, l, t), c.style.minWidth = "0.853em", x = 0.833 / i) : n.type === "large" ? (g = (1e3 + Dr) * ft[n.size], d = (ft[n.size] + l) / i, u = (ft[n.size] + l + _r) / i, c = Or("sqrtSize" + n.size, u, g, l, t), c.style.minWidth = "1.02em", x = 1 / i) : (u = e + l + _r, d = e + l, g = Math.floor(1e3 * e + l) + Dr, c = Or("sqrtTall", u, g, l, t), c.style.minWidth = "0.742em", x = 1.056), c.height = d, c.style.height = B(u), { span: c, advanceWidth: x, ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i };
}, Ti = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"]), z1 = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"]), zi = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), ft = [0, 1.2, 1.8, 2.4, 3], Ei = function(e, t, a, n, i) {
  if (e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle"), Ti.has(e) || zi.has(e)) return Mi(e, t, false, a, n, i);
  if (z1.has(e)) return Ai(e, ft[t], false, a, n, i);
  throw new z("Illegal delimiter: '" + e + "'");
}, E1 = [{ type: "small", style: X.SCRIPTSCRIPT }, { type: "small", style: X.SCRIPT }, { type: "small", style: X.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], C1 = [{ type: "small", style: X.SCRIPTSCRIPT }, { type: "small", style: X.SCRIPT }, { type: "small", style: X.TEXT }, { type: "stack" }], Ci = [{ type: "small", style: X.SCRIPTSCRIPT }, { type: "small", style: X.SCRIPT }, { type: "small", style: X.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }], B1 = function(e) {
  if (e.type === "small") return "Main-Regular";
  if (e.type === "large") return "Size" + e.size + "-Regular";
  if (e.type === "stack") return "Size4-Regular";
  var t = e.type;
  throw new Error("Add support for delim type '" + t + "' here.");
}, Bi = function(e, t, a, n) {
  for (var i = Math.min(2, 3 - n.style.size), l = i; l < a.length; l++) {
    var c = a[l];
    if (c.type === "stack") break;
    var u = dt(e, B1(c), "math"), d = u.height + u.depth;
    if (c.type === "small") {
      var g = n.havingBaseStyle(c.style);
      d *= g.sizeMultiplier;
    }
    if (d > t) return c;
  }
  return a[a.length - 1];
}, aa = function(e, t, a, n, i, l) {
  e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle");
  var c;
  zi.has(e) ? c = E1 : Ti.has(e) ? c = Ci : c = C1;
  var u = Bi(e, t, c, n);
  return u.type === "small" ? k1(e, u.style, a, n, i, l) : u.type === "large" ? Mi(e, u.size, a, n, i, l) : Ai(e, t, a, n, i, l);
}, Lr = function(e, t, a, n, i, l) {
  var c = n.fontMetrics().axisHeight * n.sizeMultiplier, u = 901, d = 5 / n.fontMetrics().ptPerEm, g = Math.max(t - c, a + c), x = Math.max(g / 500 * u, 2 * g - d);
  return aa(e, x, true, n, i, l);
}, pn = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } }, R1 = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function cr(r, e) {
  var t = lr(r);
  if (t && R1.has(t.text)) return t;
  throw t ? new z("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new z("Invalid delimiter type '" + r.type + "'", r);
}
_({ type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], props: { numArgs: 1, argTypes: ["primitive"] }, handler: (r, e) => {
  var t = cr(e[0], r);
  return { type: "delimsizing", mode: r.parser.mode, size: pn[r.funcName].size, mclass: pn[r.funcName].mclass, delim: t.text };
}, htmlBuilder: (r, e) => r.delim === "." ? T([r.mclass]) : Ei(r.delim, r.size, e, r.mode, [r.mclass]), mathmlBuilder: (r) => {
  var e = [];
  r.delim !== "." && e.push(Je(r.delim, r.mode));
  var t = new E("mo", e);
  r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
  var a = B(ft[r.size]);
  return t.setAttribute("minsize", a), t.setAttribute("maxsize", a), t;
} });
function fn(r) {
  if (!r.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
_({ type: "leftright-right", names: ["\\right"], props: { numArgs: 1, primitive: true }, handler: (r, e) => {
  var t = r.parser.gullet.macros.get("\\current@color");
  if (t && typeof t != "string") throw new z("\\current@color set to non-string in \\right");
  return { type: "leftright-right", mode: r.parser.mode, delim: cr(e[0], r).text, color: t };
} });
_({ type: "leftright", names: ["\\left"], props: { numArgs: 1, primitive: true }, handler: (r, e) => {
  var t = cr(e[0], r), a = r.parser;
  ++a.leftrightDepth;
  var n = a.parseExpression(false);
  --a.leftrightDepth, a.expect("\\right", false);
  var i = J(a.parseFunction(), "leftright-right");
  return { type: "leftright", mode: a.mode, body: n, left: t.text, right: i.delim, rightColor: i.color };
}, htmlBuilder: (r, e) => {
  fn(r);
  for (var t = Ce(r.body, e, true, ["mopen", "mclose"]), a = 0, n = 0, i = false, l = 0; l < t.length; l++) t[l].isMiddle ? i = true : (a = Math.max(t[l].height, a), n = Math.max(t[l].depth, n));
  a *= e.sizeMultiplier, n *= e.sizeMultiplier;
  var c;
  if (r.left === "." ? c = vt(e, ["mopen"]) : c = Lr(r.left, a, n, e, r.mode, ["mopen"]), t.unshift(c), i) for (var u = 1; u < t.length; u++) {
    var d = t[u], g = d.isMiddle;
    g && (t[u] = Lr(g.delim, a, n, g.options, r.mode, []));
  }
  var x;
  if (r.right === ".") x = vt(e, ["mclose"]);
  else {
    var y = r.rightColor ? e.withColor(r.rightColor) : e;
    x = Lr(r.right, a, n, y, r.mode, ["mclose"]);
  }
  return t.push(x), T(["minner"], t, e);
}, mathmlBuilder: (r, e) => {
  fn(r);
  var t = Ze(r.body, e);
  if (r.left !== ".") {
    var a = new E("mo", [Je(r.left, r.mode)]);
    a.setAttribute("fence", "true"), t.unshift(a);
  }
  if (r.right !== ".") {
    var n = new E("mo", [Je(r.right, r.mode)]);
    n.setAttribute("fence", "true"), r.rightColor && n.setAttribute("mathcolor", r.rightColor), t.push(n);
  }
  return ya(t);
} });
_({ type: "middle", names: ["\\middle"], props: { numArgs: 1, primitive: true }, handler: (r, e) => {
  var t = cr(e[0], r);
  if (!r.parser.leftrightDepth) throw new z("\\middle without preceding \\left", t);
  return { type: "middle", mode: r.parser.mode, delim: t.text };
}, htmlBuilder: (r, e) => {
  var t;
  if (r.delim === ".") t = vt(e, []);
  else {
    t = Ei(r.delim, 1, e, r.mode, []);
    var a = { delim: r.delim, options: e };
    t.isMiddle = a;
  }
  return t;
}, mathmlBuilder: (r, e) => {
  var t = r.delim === "\\vert" || r.delim === "|" ? Je("|", "text") : Je(r.delim, r.mode), a = new E("mo", [t]);
  return a.setAttribute("fence", "true"), a.setAttribute("lspace", "0.05em"), a.setAttribute("rspace", "0.05em"), a;
} });
var Ma = (r, e) => {
  var t = nt(ie(r.body, e), e), a = r.label.slice(1), n = e.sizeMultiplier, i, l = 0, c = x0(r.body);
  if (a === "sout") i = T(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / n, l = -0.5 * e.fontMetrics().xHeight;
  else if (a === "phase") {
    var u = ve({ number: 0.6, unit: "pt" }, e), d = ve({ number: 0.35, unit: "ex" }, e), g = e.havingBaseSizing();
    n = n / g.sizeMultiplier;
    var x = t.height + t.depth + u + d;
    t.style.paddingLeft = B(x / 2 + u);
    var y = Math.floor(1e3 * x * n), w = Dl(y), k = new b0([new B0("phase", w)], { width: "400em", height: B(y / 1e3), viewBox: "0 0 400000 " + y, preserveAspectRatio: "xMinYMin slice" });
    i = R0(["hide-tail"], [k], e), i.style.height = B(x), l = t.depth + u + d;
  } else {
    /cancel/.test(a) ? c || t.classes.push("cancel-pad") : a === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var M = 0, N = 0, I = 0;
    /box/.test(a) ? (I = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness), M = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : I), N = M) : a === "angl" ? (I = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), M = 4 * I, N = Math.max(0, 0.25 - t.depth)) : (M = c ? 0.2 : 0, N = M), i = f1(t, a, M, N, e), /fbox|boxed|fcolorbox/.test(a) ? (i.style.borderStyle = "solid", i.style.borderWidth = B(I)) : a === "angl" && I !== 0.049 && (i.style.borderTopWidth = B(I), i.style.borderRightWidth = B(I)), l = t.depth + N, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var P;
  if (r.backgroundColor) P = ne({ positionType: "individualShift", children: [{ type: "elem", elem: i, shift: l }, { type: "elem", elem: t, shift: 0 }] });
  else {
    var G = /cancel|phase/.test(a) ? ["svg-align"] : [];
    P = ne({ positionType: "individualShift", children: [{ type: "elem", elem: t, shift: 0 }, { type: "elem", elem: i, shift: l, wrapperClasses: G }] });
  }
  return /cancel/.test(a) && (P.height = t.height, P.depth = t.depth), /cancel/.test(a) && !c ? T(["mord", "cancel-lap"], [P], e) : T(["mord"], [P], e);
}, Aa = (r, e) => {
  var t = 0, a = new E(r.label.includes("colorbox") ? "mpadded" : "menclose", [ce(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      a.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      a.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      a.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      a.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      a.setAttribute("notation", "box");
      break;
    case "\\angl":
      a.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, a.setAttribute("width", "+" + 2 * t + "pt"), a.setAttribute("height", "+" + 2 * t + "pt"), a.setAttribute("lspace", t + "pt"), a.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var n = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
        a.setAttribute("style", "border: " + n + "em solid " + String(r.borderColor));
      }
      break;
    case "\\xcancel":
      a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && a.setAttribute("mathbackground", r.backgroundColor), a;
};
_({ type: "enclose", names: ["\\colorbox"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "text"] }, handler(r, e, t) {
  var { parser: a, funcName: n } = r, i = J(e[0], "color-token").color, l = e[1];
  return { type: "enclose", mode: a.mode, label: n, backgroundColor: i, body: l };
}, htmlBuilder: Ma, mathmlBuilder: Aa });
_({ type: "enclose", names: ["\\fcolorbox"], props: { numArgs: 3, allowedInText: true, argTypes: ["color", "color", "text"] }, handler(r, e, t) {
  var { parser: a, funcName: n } = r, i = J(e[0], "color-token").color, l = J(e[1], "color-token").color, c = e[2];
  return { type: "enclose", mode: a.mode, label: n, backgroundColor: l, borderColor: i, body: c };
}, htmlBuilder: Ma, mathmlBuilder: Aa });
_({ type: "enclose", names: ["\\fbox"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: true }, handler(r, e) {
  var { parser: t } = r;
  return { type: "enclose", mode: t.mode, label: "\\fbox", body: e[0] };
} });
_({ type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"], props: { numArgs: 1 }, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "enclose", mode: t.mode, label: a, body: n };
}, htmlBuilder: Ma, mathmlBuilder: Aa });
_({ type: "enclose", names: ["\\angl"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: false }, handler(r, e) {
  var { parser: t } = r;
  return { type: "enclose", mode: t.mode, label: "\\angl", body: e[0] };
} });
var Ri = {};
function c0(r) {
  for (var { type: e, names: t, props: a, handler: n, htmlBuilder: i, mathmlBuilder: l } = r, c = { type: e, numArgs: a.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: n }, u = 0; u < t.length; ++u) Ri[t[u]] = c;
  i && (Zt[e] = i), l && (Yt[e] = l);
}
var Ii = {};
function m(r, e) {
  Ii[r] = e;
}
class Ge {
  constructor(e, t, a) {
    this.lexer = e, this.start = t, this.end = a;
  }
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Ge(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class je {
  constructor(e, t) {
    this.text = e, this.loc = t;
  }
  range(e, t) {
    return new je(t, Ge.range(this, e));
  }
}
function gn(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; ) r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var ur = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode) throw new z("{" + r.envName + "} can be used only in display mode.");
}, I1 = /* @__PURE__ */ new Set(["gather", "gather*"]);
function Ta(r) {
  if (!r.includes("ed")) return !r.includes("*");
}
function N0(r, e, t) {
  var { hskipBeforeAndAfter: a, addJot: n, cols: i, arraystretch: l, colSeparationType: c, autoTag: u, singleRow: d, emptySingleRow: g, maxNumCols: x, leqno: y } = e;
  if (r.gullet.beginGroup(), d || r.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var w = r.gullet.expandMacroAsText("\\arraystretch");
    if (w == null) l = 1;
    else if (l = parseFloat(w), !l || l < 0) throw new z("Invalid \\arraystretch: " + w);
  }
  r.gullet.beginGroup();
  var k = [], M = [k], N = [], I = [], P = u != null ? [] : void 0;
  function G() {
    u && r.gullet.macros.set("\\@eqnsw", "1", true);
  }
  function j() {
    P && (r.gullet.macros.get("\\df@tag") ? (P.push(r.subparse([new je("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, true)) : P.push(!!u && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (G(), I.push(gn(r)); ; ) {
    var Q = r.parseExpression(false, d ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup();
    var W = { type: "ordgroup", mode: r.mode, body: Q };
    t && (W = { type: "styling", mode: r.mode, style: t, body: [W] }), k.push(W);
    var Y = r.fetch().text;
    if (Y === "&") {
      if (x && k.length === x) {
        if (d || c) throw new z("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (Y === "\\end") {
      j(), k.length === 1 && W.type === "styling" && W.body.length === 1 && W.body[0].type === "ordgroup" && W.body[0].body.length === 0 && (M.length > 1 || !g) && M.pop(), I.length < M.length + 1 && I.push([]);
      break;
    } else if (Y === "\\\\") {
      r.consume();
      var ae = void 0;
      r.gullet.future().text !== " " && (ae = r.parseSizeGroup(true)), N.push(ae ? ae.value : null), j(), I.push(gn(r)), k = [], M.push(k), G();
    } else throw new z("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), { type: "array", mode: r.mode, addJot: n, arraystretch: l, body: M, cols: i, rowGaps: N, hskipBeforeAndAfter: a, hLinesBeforeRow: I, colSeparationType: c, tags: P, leqno: y };
}
function za(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var u0 = function(e, t) {
  var a, n, i = e.body.length, l = e.hLinesBeforeRow, c = 0, u = new Array(i), d = [], g = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), x = 1 / t.fontMetrics().ptPerEm, y = 5 * x;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var w = t.havingStyle(X.SCRIPT).sizeMultiplier;
    y = 0.2778 * (w / t.sizeMultiplier);
  }
  var k = e.colSeparationType === "CD" ? ve({ number: 3, unit: "ex" }, t) : 12 * x, M = 3 * x, N = e.arraystretch * k, I = 0.7 * N, P = 0.3 * N, G = 0;
  function j(L0) {
    for (var Y0 = 0; Y0 < L0.length; ++Y0) Y0 > 0 && (G += 0.25), d.push({ pos: G, isDashed: L0[Y0] });
  }
  for (j(l[0]), a = 0; a < e.body.length; ++a) {
    var Q = e.body[a], W = I, Y = P;
    c < Q.length && (c = Q.length);
    var ae = new Array(Q.length);
    for (n = 0; n < Q.length; ++n) {
      var te = ie(Q[n], t);
      Y < te.depth && (Y = te.depth), W < te.height && (W = te.height), ae[n] = te;
    }
    var ze = e.rowGaps[a], ke = 0;
    ze && (ke = ve(ze, t), ke > 0 && (ke += P, Y < ke && (Y = ke), ke = 0)), e.addJot && (Y += M), ae.height = W, ae.depth = Y, G += W, ae.pos = G, G += Y + ke, u[a] = ae, j(l[a + 1]);
  }
  var fe = G / 2 + t.fontMetrics().axisHeight, Qe = e.cols || [], be = [], Oe, Ue, r0 = [];
  if (e.tags && e.tags.some((L0) => L0)) for (a = 0; a < i; ++a) {
    var me = u[a], Ye = me.pos - fe, Ie = e.tags[a], Le = void 0;
    Ie === true ? Le = T(["eqn-num"], [], t) : Ie === false ? Le = T([], [], t) : Le = T([], Ce(Ie, t, true), t), Le.depth = me.depth, Le.height = me.height, r0.push({ type: "elem", elem: Le, shift: Ye });
  }
  for (n = 0, Ue = 0; n < c || Ue < Qe.length; ++n, ++Ue) {
    for (var e0, Ne = Qe[Ue], V0 = true; ((yt = Ne) == null ? void 0 : yt.type) === "separator"; ) {
      var yt;
      if (V0 || (Oe = T(["arraycolsep"], []), Oe.style.width = B(t.fontMetrics().doubleRuleSep), be.push(Oe)), Ne.separator === "|" || Ne.separator === ":") {
        var mr = Ne.separator === "|" ? "solid" : "dashed", k0 = T(["vertical-separator"], [], t);
        k0.style.height = B(G), k0.style.borderRightWidth = B(g), k0.style.borderRightStyle = mr, k0.style.margin = "0 " + B(-g / 2);
        var wt = G - fe;
        wt && (k0.style.verticalAlign = B(-wt)), be.push(k0);
      } else throw new z("Invalid separator type: " + Ne.separator);
      Ue++, Ne = Qe[Ue], V0 = false;
    }
    if (!(n >= c)) {
      var D0 = void 0;
      if (n > 0 || e.hskipBeforeAndAfter) {
        var _0, kt;
        D0 = (_0 = (kt = Ne) == null ? void 0 : kt.pregap) != null ? _0 : y, D0 !== 0 && (Oe = T(["arraycolsep"], []), Oe.style.width = B(D0), be.push(Oe));
      }
      var St = [];
      for (a = 0; a < i; ++a) {
        var j0 = u[a], W0 = j0[n];
        if (W0) {
          var dr = j0.pos - fe;
          W0.depth = j0.depth, W0.height = j0.height, St.push({ type: "elem", elem: W0, shift: dr });
        }
      }
      var pr = ne({ positionType: "individualShift", children: St }), fr = T(["col-align-" + (((e0 = Ne) == null ? void 0 : e0.align) || "c")], [pr]);
      if (be.push(fr), n < c - 1 || e.hskipBeforeAndAfter) {
        var Mt, At;
        D0 = (Mt = (At = Ne) == null ? void 0 : At.postgap) != null ? Mt : y, D0 !== 0 && (Oe = T(["arraycolsep"], []), Oe.style.width = B(D0), be.push(Oe));
      }
    }
  }
  var O0 = T(["mtable"], be);
  if (d.length > 0) {
    for (var gr = at("hline", t, g), vr = at("hdashline", t, g), X0 = [{ type: "elem", elem: O0, shift: 0 }]; d.length > 0; ) {
      var a0 = d.pop(), ct = a0.pos - fe;
      a0.isDashed ? X0.push({ type: "elem", elem: vr, shift: ct }) : X0.push({ type: "elem", elem: gr, shift: ct });
    }
    O0 = ne({ positionType: "individualShift", children: X0 });
  }
  if (r0.length === 0) return T(["mord"], [O0], t);
  var S0 = ne({ positionType: "individualShift", children: r0 }), Z0 = T(["tag"], [S0], t);
  return w0([O0, Z0]);
}, N1 = { c: "center ", l: "left ", r: "right " }, h0 = function(e, t) {
  for (var a = [], n = new E("mtd", [], ["mtr-glue"]), i = new E("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var c = e.body[l], u = [], d = 0; d < c.length; d++) u.push(new E("mtd", [ce(c[d], t)]));
    e.tags && e.tags[l] && (u.unshift(n), u.push(n), e.leqno ? u.unshift(i) : u.push(i)), a.push(new E("mtr", u));
  }
  var g = new E("mtable", a), x = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  g.setAttribute("rowspacing", B(x));
  var y = "", w = "";
  if (e.cols && e.cols.length > 0) {
    var k = e.cols, M = "", N = false, I = 0, P = k.length;
    k[0].type === "separator" && (y += "top ", I = 1), k[k.length - 1].type === "separator" && (y += "bottom ", P -= 1);
    for (var G = I; G < P; G++) {
      var j = k[G];
      j.type === "align" ? (w += N1[j.align], N && (M += "none "), N = true) : j.type === "separator" && N && (M += j.separator === "|" ? "solid " : "dashed ", N = false);
    }
    g.setAttribute("columnalign", w.trim()), /[sd]/.test(M) && g.setAttribute("columnlines", M.trim());
  }
  if (e.colSeparationType === "align") {
    for (var Q = e.cols || [], W = "", Y = 1; Y < Q.length; Y++) W += Y % 2 ? "0em " : "1em ";
    g.setAttribute("columnspacing", W.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? g.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? g.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? g.setAttribute("columnspacing", "0.5em") : g.setAttribute("columnspacing", "1em");
  var ae = "", te = e.hLinesBeforeRow;
  y += te[0].length > 0 ? "left " : "", y += te[te.length - 1].length > 0 ? "right " : "";
  for (var ze = 1; ze < te.length - 1; ze++) ae += te[ze].length === 0 ? "none " : te[ze][0] ? "dashed " : "solid ";
  return /[sd]/.test(ae) && g.setAttribute("rowlines", ae.trim()), y !== "" && (g = new E("menclose", [g]), g.setAttribute("notation", y.trim())), e.arraystretch && e.arraystretch < 1 && (g = new E("mstyle", [g]), g.setAttribute("scriptlevel", "1")), g;
}, Ni = function(e, t) {
  e.envName.includes("ed") || ur(e);
  var a = [], n = e.envName.includes("at") ? "alignat" : "align", i = e.envName === "split", l = N0(e.parser, { cols: a, addJot: true, autoTag: i ? void 0 : Ta(e.envName), emptySingleRow: true, colSeparationType: n, maxNumCols: i ? 2 : void 0, leqno: e.parser.settings.leqno }, "display"), c = 0, u = 0, d = { type: "ordgroup", mode: e.mode, body: [] };
  if (t[0] && t[0].type === "ordgroup") {
    for (var g = "", x = 0; x < t[0].body.length; x++) {
      var y = J(t[0].body[x], "textord");
      g += y.text;
    }
    c = Number(g), u = c * 2;
  }
  var w = !u;
  l.body.forEach(function(I) {
    for (var P = 1; P < I.length; P += 2) {
      var G = J(I[P], "styling"), j = J(G.body[0], "ordgroup");
      j.body.unshift(d);
    }
    if (w) u < I.length && (u = I.length);
    else {
      var Q = I.length / 2;
      if (c < Q) throw new z("Too many math in a row: " + ("expected " + c + ", but got " + Q), I[0]);
    }
  });
  for (var k = 0; k < u; ++k) {
    var M = "r", N = 0;
    k % 2 === 1 ? M = "l" : k > 0 && w && (N = 1), a[k] = { type: "align", align: M, pregap: N, postgap: 0 };
  }
  return l.colSeparationType = w ? "align" : "alignat", l;
};
c0({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler(r, e) {
  var t = lr(e[0]), a = t ? [e[0]] : J(e[0], "ordgroup").body, n = a.map(function(l) {
    var c = sr(l), u = c.text;
    if ("lcr".includes(u)) return { type: "align", align: u };
    if (u === "|") return { type: "separator", separator: "|" };
    if (u === ":") return { type: "separator", separator: ":" };
    throw new z("Unknown column alignment: " + u, l);
  }), i = { cols: n, hskipBeforeAndAfter: true, maxNumCols: n.length };
  return N0(r.parser, i, za(r.envName));
}, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], props: { numArgs: 0 }, handler(r) {
  var e = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[r.envName.replace("*", "")], t = "c", a = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: t }] };
  if (r.envName.charAt(r.envName.length - 1) === "*") {
    var n = r.parser;
    if (n.consumeSpaces(), n.fetch().text === "[") {
      if (n.consume(), n.consumeSpaces(), t = n.fetch().text, !"lcr".includes(t)) throw new z("Expected l or c or r", n.nextToken);
      n.consume(), n.consumeSpaces(), n.expect("]"), n.consume(), a.cols = [{ type: "align", align: t }];
    }
  }
  var i = N0(r.parser, a, za(r.envName)), l = Math.max(0, ...i.body.map((c) => c.length));
  return i.cols = new Array(l).fill({ type: "align", align: t }), e ? { type: "leftright", mode: r.mode, body: [i], left: e[0], right: e[1], rightColor: void 0 } : i;
}, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["smallmatrix"], props: { numArgs: 0 }, handler(r) {
  var e = { arraystretch: 0.5 }, t = N0(r.parser, e, "script");
  return t.colSeparationType = "small", t;
}, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["subarray"], props: { numArgs: 1 }, handler(r, e) {
  var t = lr(e[0]), a = t ? [e[0]] : J(e[0], "ordgroup").body, n = a.map(function(c) {
    var u = sr(c), d = u.text;
    if ("lc".includes(d)) return { type: "align", align: d };
    throw new z("Unknown column alignment: " + d, c);
  });
  if (n.length > 1) throw new z("{subarray} can contain only one column");
  var i = { cols: n, hskipBeforeAndAfter: false, arraystretch: 0.5 }, l = N0(r.parser, i, "script");
  if (l.body.length > 0 && l.body[0].length > 1) throw new z("{subarray} can contain only one column");
  return l;
}, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["cases", "dcases", "rcases", "drcases"], props: { numArgs: 0 }, handler(r) {
  var e = { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, t = N0(r.parser, e, za(r.envName));
  return { type: "leftright", mode: r.mode, body: [t], left: r.envName.includes("r") ? "." : "\\{", right: r.envName.includes("r") ? "\\}" : ".", rightColor: void 0 };
}, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Ni, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["gathered", "gather", "gather*"], props: { numArgs: 0 }, handler(r) {
  I1.has(r.envName) && ur(r);
  var e = { cols: [{ type: "align", align: "c" }], addJot: true, colSeparationType: "gather", autoTag: Ta(r.envName), emptySingleRow: true, leqno: r.parser.settings.leqno };
  return N0(r.parser, e, "display");
}, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Ni, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["equation", "equation*"], props: { numArgs: 0 }, handler(r) {
  ur(r);
  var e = { autoTag: Ta(r.envName), emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: r.parser.settings.leqno };
  return N0(r.parser, e, "display");
}, htmlBuilder: u0, mathmlBuilder: h0 });
c0({ type: "array", names: ["CD"], props: { numArgs: 0 }, handler(r) {
  return ur(r), y1(r.parser);
}, htmlBuilder: u0, mathmlBuilder: h0 });
m("\\nonumber", "\\gdef\\@eqnsw{0}");
m("\\notag", "\\nonumber");
_({ type: "text", names: ["\\hline", "\\hdashline"], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler(r, e) {
  throw new z(r.funcName + " valid only within array environment");
} });
var vn = Ri;
_({ type: "environment", names: ["\\begin", "\\end"], props: { numArgs: 1, argTypes: ["text"] }, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[0];
  if (n.type !== "ordgroup") throw new z("Invalid environment name", n);
  for (var i = "", l = 0; l < n.body.length; ++l) i += J(n.body[l], "textord").text;
  if (a === "\\begin") {
    if (!vn.hasOwnProperty(i)) throw new z("No such environment: " + i, n);
    var c = vn[i], { args: u, optArgs: d } = t.parseArguments("\\begin{" + i + "}", c), g = { mode: t.mode, envName: i, parser: t }, x = c.handler(g, u, d);
    t.expect("\\end", false);
    var y = t.nextToken, w = J(t.parseFunction(), "environment");
    if (w.name !== i) throw new z("Mismatch: \\begin{" + i + "} matched by \\end{" + w.name + "}", y);
    return x;
  }
  return { type: "environment", mode: t.mode, name: i, nameGroup: n };
} });
var Di = (r, e) => {
  var t = r.font, a = e.withFont(t);
  return ie(r.body, a);
}, _i = (r, e) => {
  var t = r.font, a = e.withFont(t);
  return ce(r.body, a);
}, bn = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
_({ type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], props: { numArgs: 1, allowedInArgument: true }, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = Kt(e[0]), i = a;
  return i in bn && (i = bn[i]), { type: "font", mode: t.mode, font: i.slice(1), body: n };
}, htmlBuilder: Di, mathmlBuilder: _i });
_({ type: "mclass", names: ["\\boldsymbol", "\\bm"], props: { numArgs: 1 }, handler: (r, e) => {
  var { parser: t } = r, a = e[0];
  return { type: "mclass", mode: t.mode, mclass: or(a), body: [{ type: "font", mode: t.mode, font: "boldsymbol", body: a }], isCharacterBox: x0(a) };
} });
_({ type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"], props: { numArgs: 0, allowedInText: true }, handler: (r, e) => {
  var { parser: t, funcName: a, breakOnTokenText: n } = r, { mode: i } = t, l = t.parseExpression(true, n), c = "math" + a.slice(1);
  return { type: "font", mode: i, font: c, body: { type: "ordgroup", mode: t.mode, body: l } };
}, htmlBuilder: Di, mathmlBuilder: _i });
var D1 = (r, e) => {
  var t = e.style, a = t.fracNum(), n = t.fracDen(), i;
  i = e.havingStyle(a);
  var l = ie(r.numer, i, e);
  if (r.continued) {
    var c = 8.5 / e.fontMetrics().ptPerEm, u = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < c ? c : l.height, l.depth = l.depth < u ? u : l.depth;
  }
  i = e.havingStyle(n);
  var d = ie(r.denom, i, e), g, x, y;
  r.hasBarLine ? (r.barSize ? (x = ve(r.barSize, e), g = at("frac-line", e, x)) : g = at("frac-line", e), x = g.height, y = g.height) : (g = null, x = 0, y = e.fontMetrics().defaultRuleThickness);
  var w, k, M;
  t.size === X.DISPLAY.size ? (w = e.fontMetrics().num1, x > 0 ? k = 3 * y : k = 7 * y, M = e.fontMetrics().denom1) : (x > 0 ? (w = e.fontMetrics().num2, k = y) : (w = e.fontMetrics().num3, k = 3 * y), M = e.fontMetrics().denom2);
  var N;
  if (g) {
    var P = e.fontMetrics().axisHeight;
    w - l.depth - (P + 0.5 * x) < k && (w += k - (w - l.depth - (P + 0.5 * x))), P - 0.5 * x - (d.height - M) < k && (M += k - (P - 0.5 * x - (d.height - M)));
    var G = -(P - 0.5 * x);
    N = ne({ positionType: "individualShift", children: [{ type: "elem", elem: d, shift: M }, { type: "elem", elem: g, shift: G }, { type: "elem", elem: l, shift: -w }] });
  } else {
    var I = w - l.depth - (d.height - M);
    I < k && (w += 0.5 * (k - I), M += 0.5 * (k - I)), N = ne({ positionType: "individualShift", children: [{ type: "elem", elem: d, shift: M }, { type: "elem", elem: l, shift: -w }] });
  }
  i = e.havingStyle(t), N.height *= i.sizeMultiplier / e.sizeMultiplier, N.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var j;
  t.size === X.DISPLAY.size ? j = e.fontMetrics().delim1 : t.size === X.SCRIPTSCRIPT.size ? j = e.havingStyle(X.SCRIPT).fontMetrics().delim2 : j = e.fontMetrics().delim2;
  var Q, W;
  return r.leftDelim == null ? Q = vt(e, ["mopen"]) : Q = aa(r.leftDelim, j, true, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? W = T([]) : r.rightDelim == null ? W = vt(e, ["mclose"]) : W = aa(r.rightDelim, j, true, e.havingStyle(t), r.mode, ["mclose"]), T(["mord"].concat(i.sizingClasses(e)), [Q, T(["mfrac"], [N]), W], e);
}, _1 = (r, e) => {
  var t = new E("mfrac", [ce(r.numer, e), ce(r.denom, e)]);
  if (!r.hasBarLine) t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var a = ve(r.barSize, e);
    t.setAttribute("linethickness", B(a));
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var n = [];
    if (r.leftDelim != null) {
      var i = new E("mo", [new Ae(r.leftDelim.replace("\\", ""))]);
      i.setAttribute("fence", "true"), n.push(i);
    }
    if (n.push(t), r.rightDelim != null) {
      var l = new E("mo", [new Ae(r.rightDelim.replace("\\", ""))]);
      l.setAttribute("fence", "true"), n.push(l);
    }
    return ya(n);
  }
  return t;
}, Oi = (r, e) => {
  if (!e) return r;
  var t = { type: "styling", mode: r.mode, style: e, body: [r] };
  return t;
};
_({ type: "genfrac", names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], props: { numArgs: 2, allowedInArgument: true }, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0], i = e[1], l, c = null, u = null;
  switch (a) {
    case "\\cfrac":
    case "\\dfrac":
    case "\\frac":
    case "\\tfrac":
      l = true;
      break;
    case "\\\\atopfrac":
      l = false;
      break;
    case "\\dbinom":
    case "\\binom":
    case "\\tbinom":
      l = false, c = "(", u = ")";
      break;
    case "\\\\bracefrac":
      l = false, c = "\\{", u = "\\}";
      break;
    case "\\\\brackfrac":
      l = false, c = "[", u = "]";
      break;
    default:
      throw new Error("Unrecognized genfrac command");
  }
  var d = a === "\\cfrac", g = null;
  return d || a.startsWith("\\d") ? g = "display" : a.startsWith("\\t") && (g = "text"), Oi({ type: "genfrac", mode: t.mode, numer: n, denom: i, continued: d, hasBarLine: l, leftDelim: c, rightDelim: u, barSize: null }, g);
}, htmlBuilder: D1, mathmlBuilder: _1 });
_({ type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], props: { numArgs: 0, infix: true }, handler(r) {
  var { parser: e, funcName: t, token: a } = r, n;
  switch (t) {
    case "\\over":
      n = "\\frac";
      break;
    case "\\choose":
      n = "\\binom";
      break;
    case "\\atop":
      n = "\\\\atopfrac";
      break;
    case "\\brace":
      n = "\\\\bracefrac";
      break;
    case "\\brack":
      n = "\\\\brackfrac";
      break;
    default:
      throw new Error("Unrecognized infix genfrac command");
  }
  return { type: "infix", mode: e.mode, replaceWith: n, token: a };
} });
var xn = ["display", "text", "script", "scriptscript"], yn = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
_({ type: "genfrac", names: ["\\genfrac"], props: { numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"] }, handler(r, e) {
  var { parser: t } = r, a = e[4], n = e[5], i = Kt(e[0]), l = i.type === "atom" && i.family === "open" ? yn(i.text) : null, c = Kt(e[1]), u = c.type === "atom" && c.family === "close" ? yn(c.text) : null, d = J(e[2], "size"), g, x = null;
  d.isBlank ? g = true : (x = d.value, g = x.number > 0);
  var y = null, w = e[3];
  if (w.type === "ordgroup") {
    if (w.body.length > 0) {
      var k = J(w.body[0], "textord");
      y = xn[Number(k.text)];
    }
  } else w = J(w, "textord"), y = xn[Number(w.text)];
  return Oi({ type: "genfrac", mode: t.mode, numer: a, denom: n, continued: false, hasBarLine: g, barSize: x, leftDelim: l, rightDelim: u }, y);
} });
_({ type: "infix", names: ["\\above"], props: { numArgs: 1, argTypes: ["size"], infix: true }, handler(r, e) {
  var { parser: t, funcName: a, token: n } = r;
  return { type: "infix", mode: t.mode, replaceWith: "\\\\abovefrac", size: J(e[0], "size").value, token: n };
} });
_({ type: "genfrac", names: ["\\\\abovefrac"], props: { numArgs: 3, argTypes: ["math", "size", "math"] }, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0], i = J(e[1], "infix").size;
  if (!i) throw new Error("\\\\abovefrac expected size, but got " + String(i));
  var l = e[2], c = i.number > 0;
  return { type: "genfrac", mode: t.mode, numer: n, denom: l, continued: false, hasBarLine: c, barSize: i, leftDelim: null, rightDelim: null };
} });
var Li = (r, e) => {
  var t = e.style, a, n;
  r.type === "supsub" ? (a = r.sup ? ie(r.sup, e.havingStyle(t.sup()), e) : ie(r.sub, e.havingStyle(t.sub()), e), n = J(r.base, "horizBrace")) : n = J(r, "horizBrace");
  var i = ie(n.base, e.havingBaseStyle(X.DISPLAY)), l = ir(n, e), c;
  if (n.isOver ? (c = ne({ positionType: "firstBaseline", children: [{ type: "elem", elem: i }, { type: "kern", size: 0.1 }, { type: "elem", elem: l }] }), c.children[0].children[0].children[1].classes.push("svg-align")) : (c = ne({ positionType: "bottom", positionData: i.depth + 0.1 + l.height, children: [{ type: "elem", elem: l }, { type: "kern", size: 0.1 }, { type: "elem", elem: i }] }), c.children[0].children[0].children[0].classes.push("svg-align")), a) {
    var u = T(["mord", n.isOver ? "mover" : "munder"], [c], e);
    n.isOver ? c = ne({ positionType: "firstBaseline", children: [{ type: "elem", elem: u }, { type: "kern", size: 0.2 }, { type: "elem", elem: a }] }) : c = ne({ positionType: "bottom", positionData: u.depth + 0.2 + a.height + a.depth, children: [{ type: "elem", elem: a }, { type: "kern", size: 0.2 }, { type: "elem", elem: u }] });
  }
  return T(["mord", n.isOver ? "mover" : "munder"], [c], e);
}, O1 = (r, e) => {
  var t = nr(r.label);
  return new E(r.isOver ? "mover" : "munder", [ce(r.base, e), t]);
};
_({ type: "horizBrace", names: ["\\overbrace", "\\underbrace"], props: { numArgs: 1 }, handler(r, e) {
  var { parser: t, funcName: a } = r;
  return { type: "horizBrace", mode: t.mode, label: a, isOver: /^\\over/.test(a), base: e[0] };
}, htmlBuilder: Li, mathmlBuilder: O1 });
_({ type: "href", names: ["\\href"], props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: true }, handler: (r, e) => {
  var { parser: t } = r, a = e[1], n = J(e[0], "url").url;
  return t.settings.isTrusted({ command: "\\href", url: n }) ? { type: "href", mode: t.mode, href: n, body: Me(a) } : t.formatUnsupportedCmd("\\href");
}, htmlBuilder: (r, e) => {
  var t = Ce(r.body, e, false);
  return Ql(r.href, [], t, e);
}, mathmlBuilder: (r, e) => {
  var t = I0(r.body, e);
  return t instanceof E || (t = new E("mrow", [t])), t.setAttribute("href", r.href), t;
} });
_({ type: "href", names: ["\\url"], props: { numArgs: 1, argTypes: ["url"], allowedInText: true }, handler: (r, e) => {
  var { parser: t } = r, a = J(e[0], "url").url;
  if (!t.settings.isTrusted({ command: "\\url", url: a })) return t.formatUnsupportedCmd("\\url");
  for (var n = [], i = 0; i < a.length; i++) {
    var l = a[i];
    l === "~" && (l = "\\textasciitilde"), n.push({ type: "textord", mode: "text", text: l });
  }
  var c = { type: "text", mode: t.mode, font: "\\texttt", body: n };
  return { type: "href", mode: t.mode, href: a, body: Me(c) };
} });
_({ type: "hbox", names: ["\\hbox"], props: { numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true }, handler(r, e) {
  var { parser: t } = r;
  return { type: "hbox", mode: t.mode, body: Me(e[0]) };
}, htmlBuilder(r, e) {
  var t = Ce(r.body, e, false);
  return w0(t);
}, mathmlBuilder(r, e) {
  return new E("mrow", Ze(r.body, e));
} });
_({ type: "html", names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"], props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: true }, handler: (r, e) => {
  var { parser: t, funcName: a, token: n } = r, i = J(e[0], "raw").string, l = e[1];
  t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
  var c, u = {};
  switch (a) {
    case "\\htmlClass":
      u.class = i, c = { command: "\\htmlClass", class: i };
      break;
    case "\\htmlId":
      u.id = i, c = { command: "\\htmlId", id: i };
      break;
    case "\\htmlStyle":
      u.style = i, c = { command: "\\htmlStyle", style: i };
      break;
    case "\\htmlData": {
      for (var d = i.split(","), g = 0; g < d.length; g++) {
        var x = d[g], y = x.indexOf("=");
        if (y < 0) throw new z("\\htmlData key/value '" + x + "' missing equals sign");
        var w = x.slice(0, y), k = x.slice(y + 1);
        u["data-" + w.trim()] = k;
      }
      c = { command: "\\htmlData", attributes: u };
      break;
    }
    default:
      throw new Error("Unrecognized html command");
  }
  return t.settings.isTrusted(c) ? { type: "html", mode: t.mode, attributes: u, body: Me(l) } : t.formatUnsupportedCmd(a);
}, htmlBuilder: (r, e) => {
  var t = Ce(r.body, e, false), a = ["enclosing"];
  r.attributes.class && a.push(...r.attributes.class.trim().split(/\s+/));
  var n = T(a, t, e);
  for (var i in r.attributes) i !== "class" && r.attributes.hasOwnProperty(i) && n.setAttribute(i, r.attributes[i]);
  return n;
}, mathmlBuilder: (r, e) => I0(r.body, e) });
_({ type: "htmlmathml", names: ["\\html@mathml"], props: { numArgs: 2, allowedInArgument: true, allowedInText: true }, handler: (r, e) => {
  var { parser: t } = r;
  return { type: "htmlmathml", mode: t.mode, html: Me(e[0]), mathml: Me(e[1]) };
}, htmlBuilder: (r, e) => {
  var t = Ce(r.html, e, false);
  return w0(t);
}, mathmlBuilder: (r, e) => I0(r.mathml, e) });
var qr = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return { number: +e, unit: "bp" };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t) throw new z("Invalid size: '" + e + "' in \\includegraphics");
  var a = { number: +(t[1] + t[2]), unit: t[3] };
  if (!ei(a)) throw new z("Invalid unit: '" + a.unit + "' in \\includegraphics.");
  return a;
};
_({ type: "includegraphics", names: ["\\includegraphics"], props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false }, handler: (r, e, t) => {
  var { parser: a } = r, n = { number: 0, unit: "em" }, i = { number: 0.9, unit: "em" }, l = { number: 0, unit: "em" }, c = "";
  if (t[0]) for (var u = J(t[0], "raw").string, d = u.split(","), g = 0; g < d.length; g++) {
    var x = d[g].split("=");
    if (x.length === 2) {
      var y = x[1].trim();
      switch (x[0].trim()) {
        case "alt":
          c = y;
          break;
        case "width":
          n = qr(y);
          break;
        case "height":
          i = qr(y);
          break;
        case "totalheight":
          l = qr(y);
          break;
        default:
          throw new z("Invalid key: '" + x[0] + "' in \\includegraphics.");
      }
    }
  }
  var w = J(e[0], "url").url;
  return c === "" && (c = w, c = c.replace(/^.*[\\/]/, ""), c = c.substring(0, c.lastIndexOf("."))), a.settings.isTrusted({ command: "\\includegraphics", url: w }) ? { type: "includegraphics", mode: a.mode, alt: c, width: n, height: i, totalheight: l, src: w } : a.formatUnsupportedCmd("\\includegraphics");
}, htmlBuilder: (r, e) => {
  var t = ve(r.height, e), a = 0;
  r.totalheight.number > 0 && (a = ve(r.totalheight, e) - t);
  var n = 0;
  r.width.number > 0 && (n = ve(r.width, e));
  var i = { height: B(t + a) };
  n > 0 && (i.width = B(n)), a > 0 && (i.verticalAlign = B(-a));
  var l = new $l(r.src, r.alt, i);
  return l.height = t, l.depth = a, l;
}, mathmlBuilder: (r, e) => {
  var t = new E("mglyph", []);
  t.setAttribute("alt", r.alt);
  var a = ve(r.height, e), n = 0;
  if (r.totalheight.number > 0 && (n = ve(r.totalheight, e) - a, t.setAttribute("valign", B(-n))), t.setAttribute("height", B(a + n)), r.width.number > 0) {
    var i = ve(r.width, e);
    t.setAttribute("width", B(i));
  }
  return t.setAttribute("src", r.src), t;
} });
_({ type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], props: { numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true }, handler(r, e) {
  var { parser: t, funcName: a } = r, n = J(e[0], "size");
  if (t.settings.strict) {
    var i = a[1] === "m", l = n.value.unit === "mu";
    i ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + n.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units");
  }
  return { type: "kern", mode: t.mode, dimension: n.value };
}, htmlBuilder(r, e) {
  return si(r.dimension, e);
}, mathmlBuilder(r, e) {
  var t = ve(r.dimension, e);
  return new mi(t);
} });
_({ type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], props: { numArgs: 1, allowedInText: true }, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "lap", mode: t.mode, alignment: a.slice(5), body: n };
}, htmlBuilder: (r, e) => {
  var t;
  r.alignment === "clap" ? (t = T([], [ie(r.body, e)]), t = T(["inner"], [t], e)) : t = T(["inner"], [ie(r.body, e)]);
  var a = T(["fix"], []), n = T([r.alignment], [t, a], e), i = T(["strut"]);
  return i.style.height = B(n.height + n.depth), n.depth && (i.style.verticalAlign = B(-n.depth)), n.children.unshift(i), n = T(["thinbox"], [n], e), T(["mord", "vbox"], [n], e);
}, mathmlBuilder: (r, e) => {
  var t = new E("mpadded", [ce(r.body, e)]);
  if (r.alignment !== "rlap") {
    var a = r.alignment === "llap" ? "-1" : "-0.5";
    t.setAttribute("lspace", a + "width");
  }
  return t.setAttribute("width", "0px"), t;
} });
_({ type: "styling", names: ["\\(", "$"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(r, e) {
  var { funcName: t, parser: a } = r, n = a.mode;
  a.switchMode("math");
  var i = t === "\\(" ? "\\)" : "$", l = a.parseExpression(false, i);
  return a.expect(i), a.switchMode(n), { type: "styling", mode: a.mode, style: "text", body: l };
} });
_({ type: "text", names: ["\\)", "\\]"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(r, e) {
  throw new z("Mismatched " + r.funcName);
} });
var wn = (r, e) => {
  switch (e.style.size) {
    case X.DISPLAY.size:
      return r.display;
    case X.TEXT.size:
      return r.text;
    case X.SCRIPT.size:
      return r.script;
    case X.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
_({ type: "mathchoice", names: ["\\mathchoice"], props: { numArgs: 4, primitive: true }, handler: (r, e) => {
  var { parser: t } = r;
  return { type: "mathchoice", mode: t.mode, display: Me(e[0]), text: Me(e[1]), script: Me(e[2]), scriptscript: Me(e[3]) };
}, htmlBuilder: (r, e) => {
  var t = wn(r, e), a = Ce(t, e, false);
  return w0(a);
}, mathmlBuilder: (r, e) => {
  var t = wn(r, e);
  return I0(t, e);
} });
var qi = (r, e, t, a, n, i, l) => {
  r = T([], [r]);
  var c = t && x0(t), u, d;
  if (e) {
    var g = ie(e, a.havingStyle(n.sup()), a);
    d = { elem: g, kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - g.depth) };
  }
  if (t) {
    var x = ie(t, a.havingStyle(n.sub()), a);
    u = { elem: x, kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - x.height) };
  }
  var y;
  if (d && u) {
    var w = a.fontMetrics().bigOpSpacing5 + u.elem.height + u.elem.depth + u.kern + r.depth + l;
    y = ne({ positionType: "bottom", positionData: w, children: [{ type: "kern", size: a.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: u.elem, marginLeft: B(-i) }, { type: "kern", size: u.kern }, { type: "elem", elem: r }, { type: "kern", size: d.kern }, { type: "elem", elem: d.elem, marginLeft: B(i) }, { type: "kern", size: a.fontMetrics().bigOpSpacing5 }] });
  } else if (u) {
    var k = r.height - l;
    y = ne({ positionType: "top", positionData: k, children: [{ type: "kern", size: a.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: u.elem, marginLeft: B(-i) }, { type: "kern", size: u.kern }, { type: "elem", elem: r }] });
  } else if (d) {
    var M = r.depth + l;
    y = ne({ positionType: "bottom", positionData: M, children: [{ type: "elem", elem: r }, { type: "kern", size: d.kern }, { type: "elem", elem: d.elem, marginLeft: B(i) }, { type: "kern", size: a.fontMetrics().bigOpSpacing5 }] });
  } else return r;
  var N = [y];
  if (u && i !== 0 && !c) {
    var I = T(["mspace"], [], a);
    I.style.marginRight = B(i), N.unshift(I);
  }
  return T(["mop", "op-limits"], N, a);
}, Pi = /* @__PURE__ */ new Set(["\\smallint"]), ot = (r, e) => {
  var t, a, n = false, i;
  r.type === "supsub" ? (t = r.sup, a = r.sub, i = J(r.base, "op"), n = true) : i = J(r, "op");
  var l = e.style, c = false;
  l.size === X.DISPLAY.size && i.symbol && !Pi.has(i.name) && (c = true);
  var u;
  if (i.symbol) {
    var d = c ? "Size2-Regular" : "Size1-Regular", g = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (g = i.name.slice(1), i.name = g === "oiint" ? "\\iint" : "\\iiint"), u = Pe(i.name, d, "math", e, ["mop", "op-symbol", c ? "large-op" : "small-op"]), g.length > 0) {
      var x = u.italic, y = oi(g + "Size" + (c ? "2" : "1"), e);
      u = ne({ positionType: "individualShift", children: [{ type: "elem", elem: u, shift: 0 }, { type: "elem", elem: y, shift: c ? 0.08 : 0 }] }), i.name = "\\" + g, u.classes.unshift("mop"), u.italic = x;
    }
  } else if (i.body) {
    var w = Ce(i.body, e, true);
    w.length === 1 && w[0] instanceof We ? (u = w[0], u.classes[0] = "mop") : u = T(["mop"], w, e);
  } else {
    for (var k = [], M = 1; M < i.name.length; M++) k.push(ba(i.name[M], i.mode, e));
    u = T(["mop"], k, e);
  }
  var N = 0, I = 0;
  return (u instanceof We || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (N = (u.height - u.depth) / 2 - e.fontMetrics().axisHeight, I = u.italic || 0), n ? qi(u, t, a, e, l, I, N) : (N && (u.style.position = "relative", u.style.top = B(N)), u);
}, xt = (r, e) => {
  var t;
  if (r.symbol) t = new E("mo", [Je(r.name, r.mode)]), Pi.has(r.name) && t.setAttribute("largeop", "false");
  else if (r.body) t = new E("mo", Ze(r.body, e));
  else {
    t = new E("mi", [new Ae(r.name.slice(1))]);
    var a = new E("mo", [Je("\u2061", "text")]);
    r.parentIsSupSub ? t = new E("mrow", [t, a]) : t = hi([t, a]);
  }
  return t;
}, L1 = { "\u220F": "\\prod", "\u2210": "\\coprod", "\u2211": "\\sum", "\u22C0": "\\bigwedge", "\u22C1": "\\bigvee", "\u22C2": "\\bigcap", "\u22C3": "\\bigcup", "\u2A00": "\\bigodot", "\u2A01": "\\bigoplus", "\u2A02": "\\bigotimes", "\u2A04": "\\biguplus", "\u2A06": "\\bigsqcup" };
_({ type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"], props: { numArgs: 0 }, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = a;
  return n.length === 1 && (n = L1[n]), { type: "op", mode: t.mode, limits: true, parentIsSupSub: false, symbol: true, name: n };
}, htmlBuilder: ot, mathmlBuilder: xt });
_({ type: "op", names: ["\\mathop"], props: { numArgs: 1, primitive: true }, handler: (r, e) => {
  var { parser: t } = r, a = e[0];
  return { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: false, body: Me(a) };
}, htmlBuilder: ot, mathmlBuilder: xt });
var q1 = { "\u222B": "\\int", "\u222C": "\\iint", "\u222D": "\\iiint", "\u222E": "\\oint", "\u222F": "\\oiint", "\u2230": "\\oiiint" };
_({ type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], props: { numArgs: 0 }, handler(r) {
  var { parser: e, funcName: t } = r;
  return { type: "op", mode: e.mode, limits: false, parentIsSupSub: false, symbol: false, name: t };
}, htmlBuilder: ot, mathmlBuilder: xt });
_({ type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], props: { numArgs: 0 }, handler(r) {
  var { parser: e, funcName: t } = r;
  return { type: "op", mode: e.mode, limits: true, parentIsSupSub: false, symbol: false, name: t };
}, htmlBuilder: ot, mathmlBuilder: xt });
_({ type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"], props: { numArgs: 0, allowedInArgument: true }, handler(r) {
  var { parser: e, funcName: t } = r, a = t;
  return a.length === 1 && (a = q1[a]), { type: "op", mode: e.mode, limits: false, parentIsSupSub: false, symbol: true, name: a };
}, htmlBuilder: ot, mathmlBuilder: xt });
var Hi = (r, e) => {
  var t, a, n = false, i;
  r.type === "supsub" ? (t = r.sup, a = r.sub, i = J(r.base, "operatorname"), n = true) : i = J(r, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var c = i.body.map((x) => {
      var y = "text" in x ? x.text : void 0;
      return typeof y == "string" ? { type: "textord", mode: x.mode, text: y } : x;
    }), u = Ce(c, e.withFont("mathrm"), true), d = 0; d < u.length; d++) {
      var g = u[d];
      g instanceof We && (g.text = g.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = T(["mop"], u, e);
  } else l = T(["mop"], [], e);
  return n ? qi(l, t, a, e, e.style, 0, 0) : l;
}, P1 = (r, e) => {
  for (var t = Ze(r.body, e.withFont("mathrm")), a = true, n = 0; n < t.length; n++) {
    var i = t[n];
    if (!(i instanceof mi)) if (i instanceof E) switch (i.type) {
      case "mi":
      case "mn":
      case "mspace":
      case "mtext":
        break;
      case "mo": {
        var l = i.children[0];
        i.children.length === 1 && l instanceof Ae ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = false;
        break;
      }
      default:
        a = false;
    }
    else a = false;
  }
  if (a) {
    var c = t.map((g) => g.toText()).join("");
    t = [new Ae(c)];
  }
  var u = new E("mi", t);
  u.setAttribute("mathvariant", "normal");
  var d = new E("mo", [Je("\u2061", "text")]);
  return r.parentIsSupSub ? new E("mrow", [u, d]) : hi([u, d]);
};
_({ type: "operatorname", names: ["\\operatorname@", "\\operatornamewithlimits"], props: { numArgs: 1 }, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "operatorname", mode: t.mode, body: Me(n), alwaysHandleSupSub: a === "\\operatornamewithlimits", limits: false, parentIsSupSub: false };
}, htmlBuilder: Hi, mathmlBuilder: P1 });
m("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
U0({ type: "ordgroup", htmlBuilder(r, e) {
  return r.semisimple ? w0(Ce(r.body, e, false)) : T(["mord"], Ce(r.body, e, true), e);
}, mathmlBuilder(r, e) {
  return I0(r.body, e, true);
} });
_({ type: "overline", names: ["\\overline"], props: { numArgs: 1 }, handler(r, e) {
  var { parser: t } = r, a = e[0];
  return { type: "overline", mode: t.mode, body: a };
}, htmlBuilder(r, e) {
  var t = ie(r.body, e.havingCrampedStyle()), a = at("overline-line", e), n = e.fontMetrics().defaultRuleThickness, i = ne({ positionType: "firstBaseline", children: [{ type: "elem", elem: t }, { type: "kern", size: 3 * n }, { type: "elem", elem: a }, { type: "kern", size: n }] });
  return T(["mord", "overline"], [i], e);
}, mathmlBuilder(r, e) {
  var t = new E("mo", [new Ae("\u203E")]);
  t.setAttribute("stretchy", "true");
  var a = new E("mover", [ce(r.body, e), t]);
  return a.setAttribute("accent", "true"), a;
} });
_({ type: "phantom", names: ["\\phantom"], props: { numArgs: 1, allowedInText: true }, handler: (r, e) => {
  var { parser: t } = r, a = e[0];
  return { type: "phantom", mode: t.mode, body: Me(a) };
}, htmlBuilder: (r, e) => {
  var t = Ce(r.body, e.withPhantom(), false);
  return w0(t);
}, mathmlBuilder: (r, e) => {
  var t = Ze(r.body, e);
  return new E("mphantom", t);
} });
m("\\hphantom", "\\smash{\\phantom{#1}}");
_({ type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1, allowedInText: true }, handler: (r, e) => {
  var { parser: t } = r, a = e[0];
  return { type: "vphantom", mode: t.mode, body: a };
}, htmlBuilder: (r, e) => {
  var t = T(["inner"], [ie(r.body, e.withPhantom())]), a = T(["fix"], []);
  return T(["mord", "rlap"], [t, a], e);
}, mathmlBuilder: (r, e) => {
  var t = Ze(Me(r.body), e), a = new E("mphantom", t), n = new E("mpadded", [a]);
  return n.setAttribute("width", "0px"), n;
} });
_({ type: "raisebox", names: ["\\raisebox"], props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true }, handler(r, e) {
  var { parser: t } = r, a = J(e[0], "size").value, n = e[1];
  return { type: "raisebox", mode: t.mode, dy: a, body: n };
}, htmlBuilder(r, e) {
  var t = ie(r.body, e), a = ve(r.dy, e);
  return ne({ positionType: "shift", positionData: -a, children: [{ type: "elem", elem: t }] });
}, mathmlBuilder(r, e) {
  var t = new E("mpadded", [ce(r.body, e)]), a = r.dy.number + r.dy.unit;
  return t.setAttribute("voffset", a), t;
} });
_({ type: "internal", names: ["\\relax"], props: { numArgs: 0, allowedInText: true, allowedInArgument: true }, handler(r) {
  var { parser: e } = r;
  return { type: "internal", mode: e.mode };
} });
_({ type: "rule", names: ["\\rule"], props: { numArgs: 2, numOptionalArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["size", "size", "size"] }, handler(r, e, t) {
  var { parser: a } = r, n = t[0], i = J(e[0], "size"), l = J(e[1], "size");
  return { type: "rule", mode: a.mode, shift: n && J(n, "size").value, width: i.value, height: l.value };
}, htmlBuilder(r, e) {
  var t = T(["mord", "rule"], [], e), a = ve(r.width, e), n = ve(r.height, e), i = r.shift ? ve(r.shift, e) : 0;
  return t.style.borderRightWidth = B(a), t.style.borderTopWidth = B(n), t.style.bottom = B(i), t.width = a, t.height = n + i, t.depth = -i, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
}, mathmlBuilder(r, e) {
  var t = ve(r.width, e), a = ve(r.height, e), n = r.shift ? ve(r.shift, e) : 0, i = e.color && e.getColor() || "black", l = new E("mspace");
  l.setAttribute("mathbackground", i), l.setAttribute("width", B(t)), l.setAttribute("height", B(a));
  var c = new E("mpadded", [l]);
  return n >= 0 ? c.setAttribute("height", B(n)) : (c.setAttribute("height", B(n)), c.setAttribute("depth", B(-n))), c.setAttribute("voffset", B(n)), c;
} });
function $i(r, e, t) {
  for (var a = Ce(r, e, false), n = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < a.length; i++) {
    var l = a[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(a[i].classes, e.sizingClasses(t)) : a[i].classes[l + 1] === "reset-size" + e.size && (a[i].classes[l + 1] = "reset-size" + t.size), a[i].height *= n, a[i].depth *= n;
  }
  return w0(a);
}
var kn = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], H1 = (r, e) => {
  var t = e.havingSize(r.size);
  return $i(r.body, t, e);
};
_({ type: "sizing", names: kn, props: { numArgs: 0, allowedInText: true }, handler: (r, e) => {
  var { breakOnTokenText: t, funcName: a, parser: n } = r, i = n.parseExpression(false, t);
  return { type: "sizing", mode: n.mode, size: kn.indexOf(a) + 1, body: i };
}, htmlBuilder: H1, mathmlBuilder: (r, e) => {
  var t = e.havingSize(r.size), a = Ze(r.body, t), n = new E("mstyle", a);
  return n.setAttribute("mathsize", B(t.sizeMultiplier)), n;
} });
_({ type: "smash", names: ["\\smash"], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: (r, e, t) => {
  var { parser: a } = r, n = false, i = false, l = t[0] && J(t[0], "ordgroup");
  if (l) for (var c = "", u = 0; u < l.body.length; ++u) {
    var d = l.body[u];
    if (c = sr(d).text, c === "t") n = true;
    else if (c === "b") i = true;
    else {
      n = false, i = false;
      break;
    }
  }
  else n = true, i = true;
  var g = e[0];
  return { type: "smash", mode: a.mode, body: g, smashHeight: n, smashDepth: i };
}, htmlBuilder: (r, e) => {
  var t = T([], [ie(r.body, e)]);
  if (!r.smashHeight && !r.smashDepth) return t;
  if (r.smashHeight && (t.height = 0), r.smashDepth && (t.depth = 0), r.smashHeight && r.smashDepth) return T(["mord", "smash"], [t], e);
  if (t.children) for (var a = 0; a < t.children.length; a++) r.smashHeight && (t.children[a].height = 0), r.smashDepth && (t.children[a].depth = 0);
  var n = ne({ positionType: "firstBaseline", children: [{ type: "elem", elem: t }] });
  return T(["mord"], [n], e);
}, mathmlBuilder: (r, e) => {
  var t = new E("mpadded", [ce(r.body, e)]);
  return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
} });
_({ type: "sqrt", names: ["\\sqrt"], props: { numArgs: 1, numOptionalArgs: 1 }, handler(r, e, t) {
  var { parser: a } = r, n = t[0], i = e[0];
  return { type: "sqrt", mode: a.mode, body: i, index: n };
}, htmlBuilder(r, e) {
  var t = ie(r.body, e.havingCrampedStyle());
  t.height === 0 && (t.height = e.fontMetrics().xHeight), t = nt(t, e);
  var a = e.fontMetrics(), n = a.defaultRuleThickness, i = n;
  e.style.id < X.TEXT.id && (i = e.fontMetrics().xHeight);
  var l = n + i / 4, c = t.height + t.depth + l + n, { span: u, ruleWidth: d, advanceWidth: g } = T1(c, e), x = u.height - d;
  x > t.height + t.depth + l && (l = (l + x - t.height - t.depth) / 2);
  var y = u.height - t.height - l - d;
  t.style.paddingLeft = B(g);
  var w = ne({ positionType: "firstBaseline", children: [{ type: "elem", elem: t, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(t.height + y) }, { type: "elem", elem: u }, { type: "kern", size: d }] });
  if (r.index) {
    var k = e.havingStyle(X.SCRIPTSCRIPT), M = ie(r.index, k, e), N = 0.6 * (w.height - w.depth), I = ne({ positionType: "shift", positionData: -N, children: [{ type: "elem", elem: M }] }), P = T(["root"], [I]);
    return T(["mord", "sqrt"], [P, w], e);
  } else return T(["mord", "sqrt"], [w], e);
}, mathmlBuilder(r, e) {
  var { body: t, index: a } = r;
  return a ? new E("mroot", [ce(t, e), ce(a, e)]) : new E("msqrt", [ce(t, e)]);
} });
var Sn = { display: X.DISPLAY, text: X.TEXT, script: X.SCRIPT, scriptscript: X.SCRIPTSCRIPT };
_({ type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(r, e) {
  var { breakOnTokenText: t, funcName: a, parser: n } = r, i = n.parseExpression(true, t), l = a.slice(1, a.length - 5);
  return { type: "styling", mode: n.mode, style: l, body: i };
}, htmlBuilder(r, e) {
  var t = Sn[r.style], a = e.havingStyle(t).withFont("");
  return $i(r.body, a, e);
}, mathmlBuilder(r, e) {
  var t = Sn[r.style], a = e.havingStyle(t), n = Ze(r.body, a), i = new E("mstyle", n), l = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] }, c = l[r.style];
  return i.setAttribute("scriptlevel", c[0]), i.setAttribute("displaystyle", c[1]), i;
} });
var $1 = function(e, t) {
  var a = e.base;
  if (a) if (a.type === "op") {
    var n = a.limits && (t.style.size === X.DISPLAY.size || a.alwaysHandleSupSub);
    return n ? ot : null;
  } else if (a.type === "operatorname") {
    var i = a.alwaysHandleSupSub && (t.style.size === X.DISPLAY.size || a.limits);
    return i ? Hi : null;
  } else {
    if (a.type === "accent") return x0(a.base) ? ka : null;
    if (a.type === "horizBrace") {
      var l = !e.sub;
      return l === a.isOver ? Li : null;
    } else return null;
  }
  else return null;
};
U0({ type: "supsub", htmlBuilder(r, e) {
  var t = $1(r, e);
  if (t) return t(r, e);
  var { base: a, sup: n, sub: i } = r, l = ie(a, e), c, u, d = e.fontMetrics(), g = 0, x = 0, y = a && x0(a);
  if (n) {
    var w = e.havingStyle(e.style.sup());
    c = ie(n, w, e), y || (g = l.height - w.fontMetrics().supDrop * w.sizeMultiplier / e.sizeMultiplier);
  }
  if (i) {
    var k = e.havingStyle(e.style.sub());
    u = ie(i, k, e), y || (x = l.depth + k.fontMetrics().subDrop * k.sizeMultiplier / e.sizeMultiplier);
  }
  var M;
  e.style === X.DISPLAY ? M = d.sup1 : e.style.cramped ? M = d.sup3 : M = d.sup2;
  var N = e.sizeMultiplier, I = B(0.5 / d.ptPerEm / N), P = null;
  if (u) {
    var G = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
    (l instanceof We || G) && (P = B(-l.italic));
  }
  var j;
  if (c && u) {
    g = Math.max(g, M, c.depth + 0.25 * d.xHeight), x = Math.max(x, d.sub2);
    var Q = d.defaultRuleThickness, W = 4 * Q;
    if (g - c.depth - (u.height - x) < W) {
      x = W - (g - c.depth) + u.height;
      var Y = 0.8 * d.xHeight - (g - c.depth);
      Y > 0 && (g += Y, x -= Y);
    }
    var ae = [{ type: "elem", elem: u, shift: x, marginRight: I, marginLeft: P }, { type: "elem", elem: c, shift: -g, marginRight: I }];
    j = ne({ positionType: "individualShift", children: ae });
  } else if (u) {
    x = Math.max(x, d.sub1, u.height - 0.8 * d.xHeight);
    var te = [{ type: "elem", elem: u, marginLeft: P, marginRight: I }];
    j = ne({ positionType: "shift", positionData: x, children: te });
  } else if (c) g = Math.max(g, M, c.depth + 0.25 * d.xHeight), j = ne({ positionType: "shift", positionData: -g, children: [{ type: "elem", elem: c, marginRight: I }] });
  else throw new Error("supsub must have either sup or sub.");
  var ze = Qr(l, "right") || "mord";
  return T([ze], [l, T(["msupsub"], [j])], e);
}, mathmlBuilder(r, e) {
  var t = false, a, n;
  r.base && r.base.type === "horizBrace" && (n = !!r.sup, n === r.base.isOver && (t = true, a = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = true);
  var i = [ce(r.base, e)];
  r.sub && i.push(ce(r.sub, e)), r.sup && i.push(ce(r.sup, e));
  var l;
  if (t) l = a ? "mover" : "munder";
  else if (r.sub) if (r.sup) {
    var d = r.base;
    d && d.type === "op" && d.limits && e.style === X.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === X.DISPLAY || d.limits) ? l = "munderover" : l = "msubsup";
  } else {
    var u = r.base;
    u && u.type === "op" && u.limits && (e.style === X.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === X.DISPLAY) ? l = "munder" : l = "msub";
  }
  else {
    var c = r.base;
    c && c.type === "op" && c.limits && (e.style === X.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === X.DISPLAY) ? l = "mover" : l = "msup";
  }
  return new E(l, i);
} });
U0({ type: "atom", htmlBuilder(r, e) {
  return ba(r.text, r.mode, e, ["m" + r.family]);
}, mathmlBuilder(r, e) {
  var t = new E("mo", [Je(r.text, r.mode)]);
  if (r.family === "bin") {
    var a = wa(r, e);
    a === "bold-italic" && t.setAttribute("mathvariant", a);
  } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
  return t;
} });
var Fi = { mi: "italic", mn: "normal", mtext: "normal" };
U0({ type: "mathord", htmlBuilder(r, e) {
  return ar(r, e, "mathord");
}, mathmlBuilder(r, e) {
  var t = new E("mi", [Je(r.text, r.mode, e)]), a = wa(r, e) || "italic";
  return a !== Fi[t.type] && t.setAttribute("mathvariant", a), t;
} });
U0({ type: "textord", htmlBuilder(r, e) {
  return ar(r, e, "textord");
}, mathmlBuilder(r, e) {
  var t = Je(r.text, r.mode, e), a = wa(r, e) || "normal", n;
  return r.mode === "text" ? n = new E("mtext", [t]) : /[0-9]/.test(r.text) ? n = new E("mn", [t]) : r.text === "\\prime" ? n = new E("mo", [t]) : n = new E("mi", [t]), a !== Fi[n.type] && n.setAttribute("mathvariant", a), n;
} });
var Pr = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" }, Hr = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
U0({ type: "spacing", htmlBuilder(r, e) {
  if (Hr.hasOwnProperty(r.text)) {
    var t = Hr[r.text].className || "";
    if (r.mode === "text") {
      var a = ar(r, e, "textord");
      return a.classes.push(t), a;
    } else return T(["mspace", t], [ba(r.text, r.mode, e)], e);
  } else {
    if (Pr.hasOwnProperty(r.text)) return T(["mspace", Pr[r.text]], [], e);
    throw new z('Unknown type of space "' + r.text + '"');
  }
}, mathmlBuilder(r, e) {
  var t;
  if (Hr.hasOwnProperty(r.text)) t = new E("mtext", [new Ae("\xA0")]);
  else {
    if (Pr.hasOwnProperty(r.text)) return new E("mspace");
    throw new z('Unknown type of space "' + r.text + '"');
  }
  return t;
} });
var Mn = () => {
  var r = new E("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
U0({ type: "tag", mathmlBuilder(r, e) {
  var t = new E("mtable", [new E("mtr", [Mn(), new E("mtd", [I0(r.body, e)]), Mn(), new E("mtd", [I0(r.tag, e)])])]);
  return t.setAttribute("width", "100%"), t;
} });
var An = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" }, Tn = { "\\textbf": "textbf", "\\textmd": "textmd" }, F1 = { "\\textit": "textit", "\\textup": "textup" }, zn = (r, e) => {
  var t = r.font;
  if (t) {
    if (An[t]) return e.withTextFontFamily(An[t]);
    if (Tn[t]) return e.withTextFontWeight(Tn[t]);
    if (t === "\\emph") return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(F1[t]);
};
_({ type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"], props: { numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true }, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "text", mode: t.mode, body: Me(n), font: a };
}, htmlBuilder(r, e) {
  var t = zn(r, e), a = Ce(r.body, t, true);
  return T(["mord", "text"], a, t);
}, mathmlBuilder(r, e) {
  var t = zn(r, e);
  return I0(r.body, t);
} });
_({ type: "underline", names: ["\\underline"], props: { numArgs: 1, allowedInText: true }, handler(r, e) {
  var { parser: t } = r;
  return { type: "underline", mode: t.mode, body: e[0] };
}, htmlBuilder(r, e) {
  var t = ie(r.body, e), a = at("underline-line", e), n = e.fontMetrics().defaultRuleThickness, i = ne({ positionType: "top", positionData: t.height, children: [{ type: "kern", size: n }, { type: "elem", elem: a }, { type: "kern", size: 3 * n }, { type: "elem", elem: t }] });
  return T(["mord", "underline"], [i], e);
}, mathmlBuilder(r, e) {
  var t = new E("mo", [new Ae("\u203E")]);
  t.setAttribute("stretchy", "true");
  var a = new E("munder", [ce(r.body, e), t]);
  return a.setAttribute("accentunder", "true"), a;
} });
_({ type: "vcenter", names: ["\\vcenter"], props: { numArgs: 1, argTypes: ["original"], allowedInText: false }, handler(r, e) {
  var { parser: t } = r;
  return { type: "vcenter", mode: t.mode, body: e[0] };
}, htmlBuilder(r, e) {
  var t = ie(r.body, e), a = e.fontMetrics().axisHeight, n = 0.5 * (t.height - a - (t.depth + a));
  return ne({ positionType: "shift", positionData: n, children: [{ type: "elem", elem: t }] });
}, mathmlBuilder(r, e) {
  return new E("mpadded", [ce(r.body, e)], ["vcenter"]);
} });
_({ type: "verb", names: ["\\verb"], props: { numArgs: 0, allowedInText: true }, handler(r, e, t) {
  throw new z("\\verb ended by end of line instead of matching delimiter");
}, htmlBuilder(r, e) {
  for (var t = En(r), a = [], n = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
    var l = t[i];
    l === "~" && (l = "\\textasciitilde"), a.push(Pe(l, "Typewriter-Regular", r.mode, n, ["mord", "texttt"]));
  }
  return T(["mord", "text"].concat(n.sizingClasses(e)), ii(a), n);
}, mathmlBuilder(r, e) {
  var t = new Ae(En(r)), a = new E("mtext", [t]);
  return a.setAttribute("mathvariant", "monospace"), a;
} });
var En = (r) => r.body.replace(/ /g, r.star ? "\u2423" : "\xA0"), E0 = ci, Gi = `[ \r
	]`, G1 = "\\\\[a-zA-Z@]+", U1 = "\\\\[^\uD800-\uDFFF]", V1 = "(" + G1 + ")" + Gi + "*", j1 = `\\\\(
|[ \r	]+
?)[ \r	]*`, na = "[\u0300-\u036F]", W1 = new RegExp(na + "+$"), X1 = "(" + Gi + "+)|" + (j1 + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (na + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (na + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + V1) + ("|" + U1 + ")");
class Cn {
  constructor(e, t) {
    this.input = e, this.settings = t, this.tokenRegex = new RegExp(X1, "g"), this.catcodes = { "%": 14, "~": 13 };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length) return new je("EOF", new Ge(this, t, t));
    var a = this.tokenRegex.exec(e);
    if (a === null || a.index !== t) throw new z("Unexpected character: '" + e[t] + "'", new je(e[t], new Ge(this, t, t + 1)));
    var n = a[6] || a[3] || (a[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new je(n, new Ge(this, t, this.tokenRegex.lastIndex));
  }
}
class Z1 {
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = t, this.builtins = e, this.undefStack = [];
  }
  beginGroup() {
    this.undefStack.push({});
  }
  endGroup() {
    if (this.undefStack.length === 0) throw new z("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e) e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  endGroups() {
    for (; this.undefStack.length > 0; ) this.endGroup();
  }
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  set(e, t, a) {
    if (a === void 0 && (a = false), a) {
      for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var Y1 = Ii;
m("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), { tokens: [e], numArgs: 0 };
});
m("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(true), { tokens: [e], numArgs: 0 };
});
m("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return { tokens: e[0], numArgs: 0 };
});
m("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return { tokens: e[1], numArgs: 0 };
});
m("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? { tokens: e[1], numArgs: 0 } : { tokens: e[2], numArgs: 0 };
});
m("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
m("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? { tokens: e[0], numArgs: 0 } : { tokens: e[1], numArgs: 0 };
});
var Bn = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
m("\\char", function(r) {
  var e = r.popToken(), t, a = 0;
  if (e.text === "'") t = 8, e = r.popToken();
  else if (e.text === '"') t = 16, e = r.popToken();
  else if (e.text === "`") if (e = r.popToken(), e.text[0] === "\\") a = e.text.charCodeAt(1);
  else {
    if (e.text === "EOF") throw new z("\\char` missing argument");
    a = e.text.charCodeAt(0);
  }
  else t = 10;
  if (t) {
    if (a = Bn[e.text], a == null || a >= t) throw new z("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = Bn[r.future().text]) != null && n < t; ) a *= t, a += n, r.popToken();
  }
  return "\\@char{" + a + "}";
});
var Ea = (r, e, t, a) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1) throw new z("\\newcommand's first argument must be a macro name");
  var i = n[0].text, l = r.isDefined(i);
  if (l && !e) throw new z("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!l && !t) throw new z("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var c = 0;
  if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var u = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; ) u += d.text, d = r.expandNextToken();
    if (!u.match(/^\s*[0-9]+\s*$/)) throw new z("Invalid number of arguments: " + u);
    c = parseInt(u), n = r.consumeArg().tokens;
  }
  return l && a || r.macros.set(i, { tokens: n, numArgs: c }), "";
};
m("\\newcommand", (r) => Ea(r, false, true, false));
m("\\renewcommand", (r) => Ea(r, true, false, false));
m("\\providecommand", (r) => Ea(r, true, true, true));
m("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
m("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
m("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), E0[t], de.math[t], de.text[t]), "";
});
m("\\bgroup", "{");
m("\\egroup", "}");
m("~", "\\nobreakspace");
m("\\lq", "`");
m("\\rq", "'");
m("\\aa", "\\r a");
m("\\AA", "\\r A");
m("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}");
m("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
m("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}");
m("\u212C", "\\mathscr{B}");
m("\u2130", "\\mathscr{E}");
m("\u2131", "\\mathscr{F}");
m("\u210B", "\\mathscr{H}");
m("\u2110", "\\mathscr{I}");
m("\u2112", "\\mathscr{L}");
m("\u2133", "\\mathscr{M}");
m("\u211B", "\\mathscr{R}");
m("\u212D", "\\mathfrak{C}");
m("\u210C", "\\mathfrak{H}");
m("\u2128", "\\mathfrak{Z}");
m("\\Bbbk", "\\Bbb{k}");
m("\xB7", "\\cdotp");
m("\\llap", "\\mathllap{\\textrm{#1}}");
m("\\rlap", "\\mathrlap{\\textrm{#1}}");
m("\\clap", "\\mathclap{\\textrm{#1}}");
m("\\mathstrut", "\\vphantom{(}");
m("\\underbar", "\\underline{\\text{#1}}");
m("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');
m("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}");
m("\\ne", "\\neq");
m("\u2260", "\\neq");
m("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}");
m("\u2209", "\\notin");
m("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}");
m("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
m("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
m("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}");
m("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}");
m("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}");
m("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");
m("\u27C2", "\\perp");
m("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
m("\u220C", "\\notni");
m("\u231C", "\\ulcorner");
m("\u231D", "\\urcorner");
m("\u231E", "\\llcorner");
m("\u231F", "\\lrcorner");
m("\xA9", "\\copyright");
m("\xAE", "\\textregistered");
m("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
m("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
m("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
m("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
m("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
m("\u22EE", "\\vdots");
m("\\varGamma", "\\mathit{\\Gamma}");
m("\\varDelta", "\\mathit{\\Delta}");
m("\\varTheta", "\\mathit{\\Theta}");
m("\\varLambda", "\\mathit{\\Lambda}");
m("\\varXi", "\\mathit{\\Xi}");
m("\\varPi", "\\mathit{\\Pi}");
m("\\varSigma", "\\mathit{\\Sigma}");
m("\\varUpsilon", "\\mathit{\\Upsilon}");
m("\\varPhi", "\\mathit{\\Phi}");
m("\\varPsi", "\\mathit{\\Psi}");
m("\\varOmega", "\\mathit{\\Omega}");
m("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
m("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
m("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
m("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
m("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
m("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
m("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
m("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var Rn = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" }, K1 = /* @__PURE__ */ new Set(["bin", "rel"]);
m("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in Rn ? e = Rn[t] : (t.slice(0, 4) === "\\not" || t in de.math && K1.has(de.math[t].group)) && (e = "\\dotsb"), e;
});
var Ca = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
m("\\dotso", function(r) {
  var e = r.future().text;
  return e in Ca ? "\\ldots\\," : "\\ldots";
});
m("\\dotsc", function(r) {
  var e = r.future().text;
  return e in Ca && e !== "," ? "\\ldots\\," : "\\ldots";
});
m("\\cdots", function(r) {
  var e = r.future().text;
  return e in Ca ? "\\@cdots\\," : "\\@cdots";
});
m("\\dotsb", "\\cdots");
m("\\dotsm", "\\cdots");
m("\\dotsi", "\\!\\cdots");
m("\\dotsx", "\\ldots\\,");
m("\\DOTSI", "\\relax");
m("\\DOTSB", "\\relax");
m("\\DOTSX", "\\relax");
m("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
m("\\,", "\\tmspace+{3mu}{.1667em}");
m("\\thinspace", "\\,");
m("\\>", "\\mskip{4mu}");
m("\\:", "\\tmspace+{4mu}{.2222em}");
m("\\medspace", "\\:");
m("\\;", "\\tmspace+{5mu}{.2777em}");
m("\\thickspace", "\\;");
m("\\!", "\\tmspace-{3mu}{.1667em}");
m("\\negthinspace", "\\!");
m("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
m("\\negthickspace", "\\tmspace-{5mu}{.277em}");
m("\\enspace", "\\kern.5em ");
m("\\enskip", "\\hskip.5em\\relax");
m("\\quad", "\\hskip1em\\relax");
m("\\qquad", "\\hskip2em\\relax");
m("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
m("\\tag@paren", "\\tag@literal{({#1})}");
m("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag")) throw new z("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
m("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
m("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
m("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
m("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
m("\\newline", "\\\\\\relax");
m("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var Ui = B(o0["Main-Regular"][84][1] - 0.7 * o0["Main-Regular"][65][1]);
m("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Ui + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
m("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Ui + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
m("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
m("\\@hspace", "\\hskip #1\\relax");
m("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
m("\\ordinarycolon", ":");
m("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
m("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
m("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
m("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
m("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
m("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
m("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
m("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
m("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
m("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
m("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
m("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
m("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
m("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
m("\u2237", "\\dblcolon");
m("\u2239", "\\eqcolon");
m("\u2254", "\\coloneqq");
m("\u2255", "\\eqqcolon");
m("\u2A74", "\\Coloneqq");
m("\\ratio", "\\vcentcolon");
m("\\coloncolon", "\\dblcolon");
m("\\colonequals", "\\coloneqq");
m("\\coloncolonequals", "\\Coloneqq");
m("\\equalscolon", "\\eqqcolon");
m("\\equalscoloncolon", "\\Eqqcolon");
m("\\colonminus", "\\coloneq");
m("\\coloncolonminus", "\\Coloneq");
m("\\minuscolon", "\\eqcolon");
m("\\minuscoloncolon", "\\Eqcolon");
m("\\coloncolonapprox", "\\Colonapprox");
m("\\coloncolonsim", "\\Colonsim");
m("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
m("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
m("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
m("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
m("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
m("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
m("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
m("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
m("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
m("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
m("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
m("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
m("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
m("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
m("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
m("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}");
m("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}");
m("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
m("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
m("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}");
m("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}");
m("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}");
m("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}");
m("\\imath", "\\html@mathml{\\@imath}{\u0131}");
m("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");
m("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}");
m("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}");
m("\u27E6", "\\llbracket");
m("\u27E7", "\\rrbracket");
m("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}");
m("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}");
m("\u2983", "\\lBrace");
m("\u2984", "\\rBrace");
m("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}");
m("\u29B5", "\\minuso");
m("\\darr", "\\downarrow");
m("\\dArr", "\\Downarrow");
m("\\Darr", "\\Downarrow");
m("\\lang", "\\langle");
m("\\rang", "\\rangle");
m("\\uarr", "\\uparrow");
m("\\uArr", "\\Uparrow");
m("\\Uarr", "\\Uparrow");
m("\\N", "\\mathbb{N}");
m("\\R", "\\mathbb{R}");
m("\\Z", "\\mathbb{Z}");
m("\\alef", "\\aleph");
m("\\alefsym", "\\aleph");
m("\\Alpha", "\\mathrm{A}");
m("\\Beta", "\\mathrm{B}");
m("\\bull", "\\bullet");
m("\\Chi", "\\mathrm{X}");
m("\\clubs", "\\clubsuit");
m("\\cnums", "\\mathbb{C}");
m("\\Complex", "\\mathbb{C}");
m("\\Dagger", "\\ddagger");
m("\\diamonds", "\\diamondsuit");
m("\\empty", "\\emptyset");
m("\\Epsilon", "\\mathrm{E}");
m("\\Eta", "\\mathrm{H}");
m("\\exist", "\\exists");
m("\\harr", "\\leftrightarrow");
m("\\hArr", "\\Leftrightarrow");
m("\\Harr", "\\Leftrightarrow");
m("\\hearts", "\\heartsuit");
m("\\image", "\\Im");
m("\\infin", "\\infty");
m("\\Iota", "\\mathrm{I}");
m("\\isin", "\\in");
m("\\Kappa", "\\mathrm{K}");
m("\\larr", "\\leftarrow");
m("\\lArr", "\\Leftarrow");
m("\\Larr", "\\Leftarrow");
m("\\lrarr", "\\leftrightarrow");
m("\\lrArr", "\\Leftrightarrow");
m("\\Lrarr", "\\Leftrightarrow");
m("\\Mu", "\\mathrm{M}");
m("\\natnums", "\\mathbb{N}");
m("\\Nu", "\\mathrm{N}");
m("\\Omicron", "\\mathrm{O}");
m("\\plusmn", "\\pm");
m("\\rarr", "\\rightarrow");
m("\\rArr", "\\Rightarrow");
m("\\Rarr", "\\Rightarrow");
m("\\real", "\\Re");
m("\\reals", "\\mathbb{R}");
m("\\Reals", "\\mathbb{R}");
m("\\Rho", "\\mathrm{P}");
m("\\sdot", "\\cdot");
m("\\sect", "\\S");
m("\\spades", "\\spadesuit");
m("\\sub", "\\subset");
m("\\sube", "\\subseteq");
m("\\supe", "\\supseteq");
m("\\Tau", "\\mathrm{T}");
m("\\thetasym", "\\vartheta");
m("\\weierp", "\\wp");
m("\\Zeta", "\\mathrm{Z}");
m("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
m("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
m("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
m("\\bra", "\\mathinner{\\langle{#1}|}");
m("\\ket", "\\mathinner{|{#1}\\rangle}");
m("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
m("\\Bra", "\\left\\langle#1\\right|");
m("\\Ket", "\\left|#1\\right\\rangle");
var Vi = (r) => (e) => {
  var t = e.consumeArg().tokens, a = e.consumeArg().tokens, n = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), c = e.macros.get("\\|");
  e.macros.beginGroup();
  var u = (x) => (y) => {
    r && (y.macros.set("|", l), n.length && y.macros.set("\\|", c));
    var w = x;
    if (!x && n.length) {
      var k = y.future();
      k.text === "|" && (y.popToken(), w = true);
    }
    return { tokens: w ? n : a, numArgs: 0 };
  };
  e.macros.set("|", u(false)), n.length && e.macros.set("\\|", u(true));
  var d = e.consumeArg().tokens, g = e.expandTokens([...i, ...d, ...t]);
  return e.macros.endGroup(), { tokens: g.reverse(), numArgs: 0 };
};
m("\\bra@ket", Vi(false));
m("\\bra@set", Vi(true));
m("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
m("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
m("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
m("\\angln", "{\\angl n}");
m("\\blue", "\\textcolor{##6495ed}{#1}");
m("\\orange", "\\textcolor{##ffa500}{#1}");
m("\\pink", "\\textcolor{##ff00af}{#1}");
m("\\red", "\\textcolor{##df0030}{#1}");
m("\\green", "\\textcolor{##28ae7b}{#1}");
m("\\gray", "\\textcolor{gray}{#1}");
m("\\purple", "\\textcolor{##9d38bd}{#1}");
m("\\blueA", "\\textcolor{##ccfaff}{#1}");
m("\\blueB", "\\textcolor{##80f6ff}{#1}");
m("\\blueC", "\\textcolor{##63d9ea}{#1}");
m("\\blueD", "\\textcolor{##11accd}{#1}");
m("\\blueE", "\\textcolor{##0c7f99}{#1}");
m("\\tealA", "\\textcolor{##94fff5}{#1}");
m("\\tealB", "\\textcolor{##26edd5}{#1}");
m("\\tealC", "\\textcolor{##01d1c1}{#1}");
m("\\tealD", "\\textcolor{##01a995}{#1}");
m("\\tealE", "\\textcolor{##208170}{#1}");
m("\\greenA", "\\textcolor{##b6ffb0}{#1}");
m("\\greenB", "\\textcolor{##8af281}{#1}");
m("\\greenC", "\\textcolor{##74cf70}{#1}");
m("\\greenD", "\\textcolor{##1fab54}{#1}");
m("\\greenE", "\\textcolor{##0d923f}{#1}");
m("\\goldA", "\\textcolor{##ffd0a9}{#1}");
m("\\goldB", "\\textcolor{##ffbb71}{#1}");
m("\\goldC", "\\textcolor{##ff9c39}{#1}");
m("\\goldD", "\\textcolor{##e07d10}{#1}");
m("\\goldE", "\\textcolor{##a75a05}{#1}");
m("\\redA", "\\textcolor{##fca9a9}{#1}");
m("\\redB", "\\textcolor{##ff8482}{#1}");
m("\\redC", "\\textcolor{##f9685d}{#1}");
m("\\redD", "\\textcolor{##e84d39}{#1}");
m("\\redE", "\\textcolor{##bc2612}{#1}");
m("\\maroonA", "\\textcolor{##ffbde0}{#1}");
m("\\maroonB", "\\textcolor{##ff92c6}{#1}");
m("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
m("\\maroonD", "\\textcolor{##ca337c}{#1}");
m("\\maroonE", "\\textcolor{##9e034e}{#1}");
m("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
m("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
m("\\purpleC", "\\textcolor{##aa87ff}{#1}");
m("\\purpleD", "\\textcolor{##7854ab}{#1}");
m("\\purpleE", "\\textcolor{##543b78}{#1}");
m("\\mintA", "\\textcolor{##f5f9e8}{#1}");
m("\\mintB", "\\textcolor{##edf2df}{#1}");
m("\\mintC", "\\textcolor{##e0e5cc}{#1}");
m("\\grayA", "\\textcolor{##f6f7f7}{#1}");
m("\\grayB", "\\textcolor{##f0f1f2}{#1}");
m("\\grayC", "\\textcolor{##e3e5e6}{#1}");
m("\\grayD", "\\textcolor{##d6d8da}{#1}");
m("\\grayE", "\\textcolor{##babec2}{#1}");
m("\\grayF", "\\textcolor{##888d93}{#1}");
m("\\grayG", "\\textcolor{##626569}{#1}");
m("\\grayH", "\\textcolor{##3b3e40}{#1}");
m("\\grayI", "\\textcolor{##21242c}{#1}");
m("\\kaBlue", "\\textcolor{##314453}{#1}");
m("\\kaGreen", "\\textcolor{##71B307}{#1}");
var ji = { "^": true, _: true, "\\limits": true, "\\nolimits": true };
class J1 {
  constructor(e, t, a) {
    this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Z1(Y1, t.macros), this.mode = a, this.stack = [];
  }
  feed(e) {
    this.lexer = new Cn(e, this.settings);
  }
  switchMode(e) {
    this.mode = e;
  }
  beginGroup() {
    this.macros.beginGroup();
  }
  endGroup() {
    this.macros.endGroup();
  }
  endGroups() {
    this.macros.endGroups();
  }
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  popToken() {
    return this.future(), this.stack.pop();
  }
  pushToken(e) {
    this.stack.push(e);
  }
  pushTokens(e) {
    this.stack.push(...e);
  }
  scanArgument(e) {
    var t, a, n;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[") return null;
      t = this.popToken(), { tokens: n, end: a } = this.consumeArg(["]"]);
    } else ({ tokens: n, start: t, end: a } = this.consumeArg());
    return this.pushToken(new je("EOF", a.loc)), this.pushTokens(n), new je("", Ge.range(t, a));
  }
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ") this.stack.pop();
      else break;
    }
  }
  consumeArg(e) {
    var t = [], a = e && e.length > 0;
    a || this.consumeSpaces();
    var n = this.future(), i, l = 0, c = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{") ++l;
      else if (i.text === "}") {
        if (--l, l === -1) throw new z("Extra }", i);
      } else if (i.text === "EOF") throw new z("Unexpected end of input in a macro argument, expected '" + (e && a ? e[c] : "}") + "'", i);
      if (e && a) if ((l === 0 || l === 1 && e[c] === "{") && i.text === e[c]) {
        if (++c, c === e.length) {
          t.splice(-c, c);
          break;
        }
      } else c = 0;
    } while (l !== 0 || a);
    return n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), { tokens: t, start: n, end: i };
  }
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1) throw new z("The length of delimiters doesn't match the number of args!");
      for (var a = t[0], n = 0; n < a.length; n++) {
        var i = this.popToken();
        if (a[n] !== i.text) throw new z("Use of the macro doesn't match its definition", i);
      }
    }
    for (var l = [], c = 0; c < e; c++) l.push(this.consumeArg(t && t[c + 1]).tokens);
    return l;
  }
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand) throw new z("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  expandOnce(e) {
    var t = this.popToken(), a = t.text, n = t.noexpand ? null : this._getExpansion(a);
    if (n == null || e && n.unexpandable) {
      if (e && n == null && a[0] === "\\" && !this.isDefined(a)) throw new z("Undefined control sequence: " + a);
      return this.pushToken(t), false;
    }
    this.countExpansion(1);
    var i = n.tokens, l = this.consumeArgs(n.numArgs, n.delimiters);
    if (n.numArgs) {
      i = i.slice();
      for (var c = i.length - 1; c >= 0; --c) {
        var u = i[c];
        if (u.text === "#") {
          if (c === 0) throw new z("Incomplete placeholder at end of macro body", u);
          if (u = i[--c], u.text === "#") i.splice(c + 1, 1);
          else if (/^[1-9]$/.test(u.text)) i.splice(c, 2, ...l[+u.text - 1]);
          else throw new z("Not a valid argument number", u);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  expandNextToken() {
    for (; ; ) if (this.expandOnce() === false) {
      var e = this.stack.pop();
      return e.treatAsRelax && (e.text = "\\relax"), e;
    }
  }
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new je(e)]) : void 0;
  }
  expandTokens(e) {
    var t = [], a = this.stack.length;
    for (this.pushTokens(e); this.stack.length > a; ) if (this.expandOnce(true) === false) {
      var n = this.stack.pop();
      n.treatAsRelax && (n.noexpand = false, n.treatAsRelax = false), t.push(n);
    }
    return this.countExpansion(t.length), t;
  }
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((a) => a.text).join("");
  }
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null) return t;
    if (e.length === 1) {
      var a = this.lexer.catcodes[e];
      if (a != null && a !== 13) return;
    }
    var n = typeof t == "function" ? t(this) : t;
    if (typeof n == "string") {
      var i = 0;
      if (n.includes("#")) for (var l = n.replace(/##/g, ""); l.includes("#" + (i + 1)); ) ++i;
      for (var c = new Cn(n, this.settings), u = [], d = c.lex(); d.text !== "EOF"; ) u.push(d), d = c.lex();
      u.reverse();
      var g = { tokens: u, numArgs: i };
      return g;
    }
    return n;
  }
  isDefined(e) {
    return this.macros.has(e) || E0.hasOwnProperty(e) || de.math.hasOwnProperty(e) || de.text.hasOwnProperty(e) || ji.hasOwnProperty(e);
  }
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : E0.hasOwnProperty(e) && !E0[e].primitive;
  }
}
var In = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Ht = Object.freeze({ "\u208A": "+", "\u208B": "-", "\u208C": "=", "\u208D": "(", "\u208E": ")", "\u2080": "0", "\u2081": "1", "\u2082": "2", "\u2083": "3", "\u2084": "4", "\u2085": "5", "\u2086": "6", "\u2087": "7", "\u2088": "8", "\u2089": "9", "\u2090": "a", "\u2091": "e", "\u2095": "h", "\u1D62": "i", "\u2C7C": "j", "\u2096": "k", "\u2097": "l", "\u2098": "m", "\u2099": "n", "\u2092": "o", "\u209A": "p", "\u1D63": "r", "\u209B": "s", "\u209C": "t", "\u1D64": "u", "\u1D65": "v", "\u2093": "x", "\u1D66": "\u03B2", "\u1D67": "\u03B3", "\u1D68": "\u03C1", "\u1D69": "\u03D5", "\u1D6A": "\u03C7", "\u207A": "+", "\u207B": "-", "\u207C": "=", "\u207D": "(", "\u207E": ")", "\u2070": "0", "\xB9": "1", "\xB2": "2", "\xB3": "3", "\u2074": "4", "\u2075": "5", "\u2076": "6", "\u2077": "7", "\u2078": "8", "\u2079": "9", "\u1D2C": "A", "\u1D2E": "B", "\u1D30": "D", "\u1D31": "E", "\u1D33": "G", "\u1D34": "H", "\u1D35": "I", "\u1D36": "J", "\u1D37": "K", "\u1D38": "L", "\u1D39": "M", "\u1D3A": "N", "\u1D3C": "O", "\u1D3E": "P", "\u1D3F": "R", "\u1D40": "T", "\u1D41": "U", "\u2C7D": "V", "\u1D42": "W", "\u1D43": "a", "\u1D47": "b", "\u1D9C": "c", "\u1D48": "d", "\u1D49": "e", "\u1DA0": "f", "\u1D4D": "g", \u02B0: "h", "\u2071": "i", \u02B2: "j", "\u1D4F": "k", \u02E1: "l", "\u1D50": "m", \u207F: "n", "\u1D52": "o", "\u1D56": "p", \u02B3: "r", \u02E2: "s", "\u1D57": "t", "\u1D58": "u", "\u1D5B": "v", \u02B7: "w", \u02E3: "x", \u02B8: "y", "\u1DBB": "z", "\u1D5D": "\u03B2", "\u1D5E": "\u03B3", "\u1D5F": "\u03B4", "\u1D60": "\u03D5", "\u1D61": "\u03C7", "\u1DBF": "\u03B8" }), $r = { "\u0301": { text: "\\'", math: "\\acute" }, "\u0300": { text: "\\`", math: "\\grave" }, "\u0308": { text: '\\"', math: "\\ddot" }, "\u0303": { text: "\\~", math: "\\tilde" }, "\u0304": { text: "\\=", math: "\\bar" }, "\u0306": { text: "\\u", math: "\\breve" }, "\u030C": { text: "\\v", math: "\\check" }, "\u0302": { text: "\\^", math: "\\hat" }, "\u0307": { text: "\\.", math: "\\dot" }, "\u030A": { text: "\\r", math: "\\mathring" }, "\u030B": { text: "\\H" }, "\u0327": { text: "\\c" } }, Nn = { \u00E1: "a\u0301", \u00E0: "a\u0300", \u00E4: "a\u0308", \u01DF: "a\u0308\u0304", \u00E3: "a\u0303", \u0101: "a\u0304", \u0103: "a\u0306", \u1EAF: "a\u0306\u0301", \u1EB1: "a\u0306\u0300", \u1EB5: "a\u0306\u0303", \u01CE: "a\u030C", \u00E2: "a\u0302", \u1EA5: "a\u0302\u0301", \u1EA7: "a\u0302\u0300", \u1EAB: "a\u0302\u0303", \u0227: "a\u0307", \u01E1: "a\u0307\u0304", \u00E5: "a\u030A", \u01FB: "a\u030A\u0301", \u1E03: "b\u0307", \u0107: "c\u0301", \u1E09: "c\u0327\u0301", \u010D: "c\u030C", \u0109: "c\u0302", \u010B: "c\u0307", \u00E7: "c\u0327", \u010F: "d\u030C", \u1E0B: "d\u0307", \u1E11: "d\u0327", \u00E9: "e\u0301", \u00E8: "e\u0300", \u00EB: "e\u0308", \u1EBD: "e\u0303", \u0113: "e\u0304", \u1E17: "e\u0304\u0301", \u1E15: "e\u0304\u0300", \u0115: "e\u0306", \u1E1D: "e\u0327\u0306", \u011B: "e\u030C", \u00EA: "e\u0302", \u1EBF: "e\u0302\u0301", \u1EC1: "e\u0302\u0300", \u1EC5: "e\u0302\u0303", \u0117: "e\u0307", \u0229: "e\u0327", \u1E1F: "f\u0307", \u01F5: "g\u0301", \u1E21: "g\u0304", \u011F: "g\u0306", \u01E7: "g\u030C", \u011D: "g\u0302", \u0121: "g\u0307", \u0123: "g\u0327", \u1E27: "h\u0308", \u021F: "h\u030C", \u0125: "h\u0302", \u1E23: "h\u0307", \u1E29: "h\u0327", \u00ED: "i\u0301", \u00EC: "i\u0300", \u00EF: "i\u0308", \u1E2F: "i\u0308\u0301", \u0129: "i\u0303", \u012B: "i\u0304", \u012D: "i\u0306", \u01D0: "i\u030C", \u00EE: "i\u0302", \u01F0: "j\u030C", \u0135: "j\u0302", \u1E31: "k\u0301", \u01E9: "k\u030C", \u0137: "k\u0327", \u013A: "l\u0301", \u013E: "l\u030C", \u013C: "l\u0327", \u1E3F: "m\u0301", \u1E41: "m\u0307", \u0144: "n\u0301", \u01F9: "n\u0300", \u00F1: "n\u0303", \u0148: "n\u030C", \u1E45: "n\u0307", \u0146: "n\u0327", \u00F3: "o\u0301", \u00F2: "o\u0300", \u00F6: "o\u0308", \u022B: "o\u0308\u0304", \u00F5: "o\u0303", \u1E4D: "o\u0303\u0301", \u1E4F: "o\u0303\u0308", \u022D: "o\u0303\u0304", \u014D: "o\u0304", \u1E53: "o\u0304\u0301", \u1E51: "o\u0304\u0300", \u014F: "o\u0306", \u01D2: "o\u030C", \u00F4: "o\u0302", \u1ED1: "o\u0302\u0301", \u1ED3: "o\u0302\u0300", \u1ED7: "o\u0302\u0303", \u022F: "o\u0307", \u0231: "o\u0307\u0304", \u0151: "o\u030B", \u1E55: "p\u0301", \u1E57: "p\u0307", \u0155: "r\u0301", \u0159: "r\u030C", \u1E59: "r\u0307", \u0157: "r\u0327", \u015B: "s\u0301", \u1E65: "s\u0301\u0307", \u0161: "s\u030C", \u1E67: "s\u030C\u0307", \u015D: "s\u0302", \u1E61: "s\u0307", \u015F: "s\u0327", \u1E97: "t\u0308", \u0165: "t\u030C", \u1E6B: "t\u0307", \u0163: "t\u0327", \u00FA: "u\u0301", \u00F9: "u\u0300", \u00FC: "u\u0308", \u01D8: "u\u0308\u0301", \u01DC: "u\u0308\u0300", \u01D6: "u\u0308\u0304", \u01DA: "u\u0308\u030C", \u0169: "u\u0303", \u1E79: "u\u0303\u0301", \u016B: "u\u0304", \u1E7B: "u\u0304\u0308", \u016D: "u\u0306", \u01D4: "u\u030C", \u00FB: "u\u0302", \u016F: "u\u030A", \u0171: "u\u030B", \u1E7D: "v\u0303", \u1E83: "w\u0301", \u1E81: "w\u0300", \u1E85: "w\u0308", \u0175: "w\u0302", \u1E87: "w\u0307", \u1E98: "w\u030A", \u1E8D: "x\u0308", \u1E8B: "x\u0307", \u00FD: "y\u0301", \u1EF3: "y\u0300", \u00FF: "y\u0308", \u1EF9: "y\u0303", \u0233: "y\u0304", \u0177: "y\u0302", \u1E8F: "y\u0307", \u1E99: "y\u030A", \u017A: "z\u0301", \u017E: "z\u030C", \u1E91: "z\u0302", \u017C: "z\u0307", \u00C1: "A\u0301", \u00C0: "A\u0300", \u00C4: "A\u0308", \u01DE: "A\u0308\u0304", \u00C3: "A\u0303", \u0100: "A\u0304", \u0102: "A\u0306", \u1EAE: "A\u0306\u0301", \u1EB0: "A\u0306\u0300", \u1EB4: "A\u0306\u0303", \u01CD: "A\u030C", \u00C2: "A\u0302", \u1EA4: "A\u0302\u0301", \u1EA6: "A\u0302\u0300", \u1EAA: "A\u0302\u0303", \u0226: "A\u0307", \u01E0: "A\u0307\u0304", \u00C5: "A\u030A", \u01FA: "A\u030A\u0301", \u1E02: "B\u0307", \u0106: "C\u0301", \u1E08: "C\u0327\u0301", \u010C: "C\u030C", \u0108: "C\u0302", \u010A: "C\u0307", \u00C7: "C\u0327", \u010E: "D\u030C", \u1E0A: "D\u0307", \u1E10: "D\u0327", \u00C9: "E\u0301", \u00C8: "E\u0300", \u00CB: "E\u0308", \u1EBC: "E\u0303", \u0112: "E\u0304", \u1E16: "E\u0304\u0301", \u1E14: "E\u0304\u0300", \u0114: "E\u0306", \u1E1C: "E\u0327\u0306", \u011A: "E\u030C", \u00CA: "E\u0302", \u1EBE: "E\u0302\u0301", \u1EC0: "E\u0302\u0300", \u1EC4: "E\u0302\u0303", \u0116: "E\u0307", \u0228: "E\u0327", \u1E1E: "F\u0307", \u01F4: "G\u0301", \u1E20: "G\u0304", \u011E: "G\u0306", \u01E6: "G\u030C", \u011C: "G\u0302", \u0120: "G\u0307", \u0122: "G\u0327", \u1E26: "H\u0308", \u021E: "H\u030C", \u0124: "H\u0302", \u1E22: "H\u0307", \u1E28: "H\u0327", \u00CD: "I\u0301", \u00CC: "I\u0300", \u00CF: "I\u0308", \u1E2E: "I\u0308\u0301", \u0128: "I\u0303", \u012A: "I\u0304", \u012C: "I\u0306", \u01CF: "I\u030C", \u00CE: "I\u0302", \u0130: "I\u0307", \u0134: "J\u0302", \u1E30: "K\u0301", \u01E8: "K\u030C", \u0136: "K\u0327", \u0139: "L\u0301", \u013D: "L\u030C", \u013B: "L\u0327", \u1E3E: "M\u0301", \u1E40: "M\u0307", \u0143: "N\u0301", \u01F8: "N\u0300", \u00D1: "N\u0303", \u0147: "N\u030C", \u1E44: "N\u0307", \u0145: "N\u0327", \u00D3: "O\u0301", \u00D2: "O\u0300", \u00D6: "O\u0308", \u022A: "O\u0308\u0304", \u00D5: "O\u0303", \u1E4C: "O\u0303\u0301", \u1E4E: "O\u0303\u0308", \u022C: "O\u0303\u0304", \u014C: "O\u0304", \u1E52: "O\u0304\u0301", \u1E50: "O\u0304\u0300", \u014E: "O\u0306", \u01D1: "O\u030C", \u00D4: "O\u0302", \u1ED0: "O\u0302\u0301", \u1ED2: "O\u0302\u0300", \u1ED6: "O\u0302\u0303", \u022E: "O\u0307", \u0230: "O\u0307\u0304", \u0150: "O\u030B", \u1E54: "P\u0301", \u1E56: "P\u0307", \u0154: "R\u0301", \u0158: "R\u030C", \u1E58: "R\u0307", \u0156: "R\u0327", \u015A: "S\u0301", \u1E64: "S\u0301\u0307", \u0160: "S\u030C", \u1E66: "S\u030C\u0307", \u015C: "S\u0302", \u1E60: "S\u0307", \u015E: "S\u0327", \u0164: "T\u030C", \u1E6A: "T\u0307", \u0162: "T\u0327", \u00DA: "U\u0301", \u00D9: "U\u0300", \u00DC: "U\u0308", \u01D7: "U\u0308\u0301", \u01DB: "U\u0308\u0300", \u01D5: "U\u0308\u0304", \u01D9: "U\u0308\u030C", \u0168: "U\u0303", \u1E78: "U\u0303\u0301", \u016A: "U\u0304", \u1E7A: "U\u0304\u0308", \u016C: "U\u0306", \u01D3: "U\u030C", \u00DB: "U\u0302", \u016E: "U\u030A", \u0170: "U\u030B", \u1E7C: "V\u0303", \u1E82: "W\u0301", \u1E80: "W\u0300", \u1E84: "W\u0308", \u0174: "W\u0302", \u1E86: "W\u0307", \u1E8C: "X\u0308", \u1E8A: "X\u0307", \u00DD: "Y\u0301", \u1EF2: "Y\u0300", \u0178: "Y\u0308", \u1EF8: "Y\u0303", \u0232: "Y\u0304", \u0176: "Y\u0302", \u1E8E: "Y\u0307", \u0179: "Z\u0301", \u017D: "Z\u030C", \u1E90: "Z\u0302", \u017B: "Z\u0307", \u03AC: "\u03B1\u0301", \u1F70: "\u03B1\u0300", \u1FB1: "\u03B1\u0304", \u1FB0: "\u03B1\u0306", \u03AD: "\u03B5\u0301", \u1F72: "\u03B5\u0300", \u03AE: "\u03B7\u0301", \u1F74: "\u03B7\u0300", \u03AF: "\u03B9\u0301", \u1F76: "\u03B9\u0300", \u03CA: "\u03B9\u0308", \u0390: "\u03B9\u0308\u0301", \u1FD2: "\u03B9\u0308\u0300", \u1FD1: "\u03B9\u0304", \u1FD0: "\u03B9\u0306", \u03CC: "\u03BF\u0301", \u1F78: "\u03BF\u0300", \u03CD: "\u03C5\u0301", \u1F7A: "\u03C5\u0300", \u03CB: "\u03C5\u0308", \u03B0: "\u03C5\u0308\u0301", \u1FE2: "\u03C5\u0308\u0300", \u1FE1: "\u03C5\u0304", \u1FE0: "\u03C5\u0306", \u03CE: "\u03C9\u0301", \u1F7C: "\u03C9\u0300", \u038E: "\u03A5\u0301", \u1FEA: "\u03A5\u0300", \u03AB: "\u03A5\u0308", \u1FE9: "\u03A5\u0304", \u1FE8: "\u03A5\u0306", \u038F: "\u03A9\u0301", \u1FFA: "\u03A9\u0300" };
class hr {
  constructor(e, t) {
    this.mode = "math", this.gullet = new J1(e, t, this.mode), this.settings = t, this.leftrightDepth = 0, this.nextToken = null;
  }
  expect(e, t) {
    if (t === void 0 && (t = true), this.fetch().text !== e) throw new z("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  consume() {
    this.nextToken = null;
  }
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(false);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new je("}")), this.gullet.pushTokens(e);
    var a = this.parseExpression(false);
    return this.expect("}"), this.nextToken = t, a;
  }
  parseExpression(e, t) {
    for (var a = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var n = this.fetch();
      if (hr.endOfExpression.has(n.text) || t && n.text === t || e && E0[n.text] && E0[n.text].infix) break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal") continue;
      } else break;
      a.push(i);
    }
    return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
  }
  handleInfixNodes(e) {
    for (var t = -1, a, n = 0; n < e.length; n++) {
      var i = e[n];
      if (i.type === "infix") {
        if (t !== -1) throw new z("only one infix operator per group", i.token);
        t = n, a = i.replaceWith;
      }
    }
    if (t !== -1 && a) {
      var l, c, u = e.slice(0, t), d = e.slice(t + 1);
      u.length === 1 && u[0].type === "ordgroup" ? l = u[0] : l = { type: "ordgroup", mode: this.mode, body: u }, d.length === 1 && d[0].type === "ordgroup" ? c = d[0] : c = { type: "ordgroup", mode: this.mode, body: d };
      var g;
      return a === "\\\\abovefrac" ? g = this.callFunction(a, [l, e[t], c], []) : g = this.callFunction(a, [l, c], []), [g];
    } else return e;
  }
  handleSupSubscript(e) {
    var t = this.fetch(), a = t.text;
    this.consume(), this.consumeSpaces();
    var n;
    do {
      var i;
      n = this.parseGroup(e);
    } while (((i = n) == null ? void 0 : i.type) === "internal");
    if (!n) throw new z("Expected group after '" + a + "'", t);
    return n;
  }
  formatUnsupportedCmd(e) {
    for (var t = [], a = 0; a < e.length; a++) t.push({ type: "textord", mode: "text", text: e[a] });
    var n = { type: "text", mode: this.mode, body: t }, i = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [n] };
    return i;
  }
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if ((t == null ? void 0 : t.type) === "internal" || this.mode === "text") return t;
    for (var a, n; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = i.text === "\\limits";
          t.limits = l, t.alwaysHandleSupSub = true;
        } else if (t && t.type === "operatorname") t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else throw new z("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (a) throw new z("Double superscript", i);
        a = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (n) throw new z("Double subscript", i);
        n = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (a) throw new z("Double superscript", i);
        var c = { type: "textord", mode: this.mode, text: "\\prime" }, u = [c];
        for (this.consume(); this.fetch().text === "'"; ) u.push(c), this.consume();
        this.fetch().text === "^" && u.push(this.handleSupSubscript("superscript")), a = { type: "ordgroup", mode: this.mode, body: u };
      } else if (Ht[i.text]) {
        var d = In.test(i.text), g = [];
        for (g.push(new je(Ht[i.text])), this.consume(); ; ) {
          var x = this.fetch().text;
          if (!Ht[x] || In.test(x) !== d) break;
          g.unshift(new je(Ht[x])), this.consume();
        }
        var y = this.subparse(g);
        d ? n = { type: "ordgroup", mode: "math", body: y } : a = { type: "ordgroup", mode: "math", body: y };
      } else break;
    }
    return a || n ? { type: "supsub", mode: this.mode, base: t, sup: a, sub: n } : t;
  }
  parseFunction(e, t) {
    var a = this.fetch(), n = a.text, i = E0[n];
    if (!i) return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument) throw new z("Got function '" + n + "' with no arguments" + (t ? " as " + t : ""), a);
    if (this.mode === "text" && !i.allowedInText) throw new z("Can't use function '" + n + "' in text mode", a);
    if (this.mode === "math" && i.allowedInMath === false) throw new z("Can't use function '" + n + "' in math mode", a);
    var { args: l, optArgs: c } = this.parseArguments(n, i);
    return this.callFunction(n, l, c, a, e);
  }
  callFunction(e, t, a, n, i) {
    var l = { funcName: e, parser: this, token: n, breakOnTokenText: i }, c = E0[e];
    if (c && c.handler) return c.handler(l, t, a);
    throw new z("No function handler for " + e);
  }
  parseArguments(e, t) {
    var a = t.numArgs + t.numOptionalArgs;
    if (a === 0) return { args: [], optArgs: [] };
    for (var n = [], i = [], l = 0; l < a; l++) {
      var c = t.argTypes && t.argTypes[l], u = l < t.numOptionalArgs;
      ("primitive" in t && t.primitive && c == null || t.type === "sqrt" && l === 1 && i[0] == null) && (c = "primitive");
      var d = this.parseGroupOfType("argument to '" + e + "'", c, u);
      if (u) i.push(d);
      else if (d != null) n.push(d);
      else throw new z("Null argument, please report this as a bug");
    }
    return { args: n, optArgs: i };
  }
  parseGroupOfType(e, t, a) {
    switch (t) {
      case "color":
        return this.parseColorGroup(a);
      case "size":
        return this.parseSizeGroup(a);
      case "url":
        return this.parseUrlGroup(a);
      case "math":
      case "text":
        return this.parseArgumentGroup(a, t);
      case "hbox": {
        var n = this.parseArgumentGroup(a, "text");
        return n != null ? { type: "styling", mode: n.mode, body: [n], style: "text" } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", a);
        return i != null ? { type: "raw", mode: "text", string: i.text } : null;
      }
      case "primitive": {
        if (a) throw new z("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null) throw new z("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(a);
      default:
        throw new z("Unknown group type as " + e, this.fetch());
    }
  }
  consumeSpaces() {
    for (; this.fetch().text === " "; ) this.consume();
  }
  parseStringGroup(e, t) {
    var a = this.gullet.scanArgument(t);
    if (a == null) return null;
    for (var n = "", i; (i = this.fetch()).text !== "EOF"; ) n += i.text, this.consume();
    return this.consume(), a.text = n, a;
  }
  parseRegexGroup(e, t) {
    for (var a = this.fetch(), n = a, i = "", l; (l = this.fetch()).text !== "EOF" && e.test(i + l.text); ) n = l, i += n.text, this.consume();
    if (i === "") throw new z("Invalid " + t + ": '" + a.text + "'", a);
    return a.range(n, i);
  }
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null) return null;
    var a = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!a) throw new z("Invalid color: '" + t.text + "'", t);
    var n = a[0];
    return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), { type: "color-token", mode: this.mode, color: n };
  }
  parseSizeGroup(e) {
    var t, a = false;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t) return null;
    !e && t.text.length === 0 && (t.text = "0pt", a = true);
    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!n) throw new z("Invalid size: '" + t.text + "'", t);
    var i = { number: +(n[1] + n[2]), unit: n[3] };
    if (!ei(i)) throw new z("Invalid unit: '" + i.unit + "'", t);
    return { type: "size", mode: this.mode, value: i, isBlank: a };
  }
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null) return null;
    var a = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return { type: "url", mode: this.mode, url: a };
  }
  parseArgumentGroup(e, t) {
    var a = this.gullet.scanArgument(e);
    if (a == null) return null;
    var n = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(false, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = { type: "ordgroup", mode: this.mode, loc: a.loc, body: i };
    return t && this.switchMode(n), l;
  }
  parseGroup(e, t) {
    var a = this.fetch(), n = a.text, i;
    if (n === "{" || n === "\\begingroup") {
      this.consume();
      var l = n === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var c = this.parseExpression(false, l), u = this.fetch();
      this.expect(l), this.gullet.endGroup(), i = { type: "ordgroup", mode: this.mode, loc: Ge.range(a, u), body: c, semisimple: n === "\\begingroup" || void 0 };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && n[0] === "\\" && !ji.hasOwnProperty(n)) {
      if (this.settings.throwOnError) throw new z("Undefined control sequence: " + n, a);
      i = this.formatUnsupportedCmd(n), this.consume();
    }
    return i;
  }
  formLigatures(e) {
    for (var t = e.length - 1, a = 0; a < t; ++a) {
      var n = e[a];
      if (n.type === "textord") {
        var i = n.text, l = e[a + 1];
        if (!(!l || l.type !== "textord")) {
          if (i === "-" && l.text === "-") {
            var c = e[a + 2];
            a + 1 < t && c && c.type === "textord" && c.text === "-" ? (e.splice(a, 3, { type: "textord", mode: "text", loc: Ge.range(n, c), text: "---" }), t -= 2) : (e.splice(a, 2, { type: "textord", mode: "text", loc: Ge.range(n, l), text: "--" }), t -= 1);
          }
          (i === "'" || i === "`") && l.text === i && (e.splice(a, 2, { type: "textord", mode: "text", loc: Ge.range(n, l), text: i + i }), t -= 1);
        }
      }
    }
  }
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var a = t.slice(5), n = a.charAt(0) === "*";
      if (n && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1)) throw new z(`\\verb assertion failed --
                    please report what input caused this bug`);
      return a = a.slice(1, -1), { type: "verb", mode: "text", body: a, star: n };
    }
    Nn.hasOwnProperty(t[0]) && !de[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Nn[t[0]] + t.slice(1));
    var i = W1.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "\u0131" : t === "j" && (t = "\u0237"));
    var l;
    if (de[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Zr.includes(t) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var c = de[this.mode][t].group, u = Ge.range(e), d;
      if (Xl.hasOwnProperty(c)) {
        var g = c;
        d = { type: "atom", mode: this.mode, family: g, loc: u, text: t };
      } else d = { type: c, mode: this.mode, loc: u, text: t };
      l = d;
    } else if (t.charCodeAt(0) >= 128) this.settings.strict && (Qn(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = { type: "textord", mode: "text", loc: Ge.range(e), text: t };
    else return null;
    if (this.consume(), i) for (var x = 0; x < i[0].length; x++) {
      var y = i[0][x];
      if (!$r[y]) throw new z("Unknown accent ' " + y + "'", e);
      var w = $r[y][this.mode] || $r[y].text;
      if (!w) throw new z("Accent " + y + " unsupported in " + this.mode + " mode", e);
      l = { type: "accent", mode: this.mode, loc: Ge.range(e), label: w, isStretchy: false, isShifty: true, base: l };
    }
    return l;
  }
}
hr.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var Ba = function(e, t) {
  if (!(typeof e == "string" || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
  var a = new hr(e, t);
  delete a.gullet.macros.current["\\df@tag"];
  var n = a.parse();
  if (delete a.gullet.macros.current["\\current@color"], delete a.gullet.macros.current["\\color"], a.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode) throw new z("\\tag works only in display equations");
    n = [{ type: "tag", mode: "text", body: n, tag: a.subparse([new je("\\df@tag")]) }];
  }
  return n;
}, Wi = function(e, t, a) {
  t.textContent = "";
  var n = Ra(e, a).toNode();
  t.appendChild(n);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Wi = function() {
  throw new z("KaTeX doesn't work in quirks mode.");
});
var Q1 = function(e, t) {
  var a = Ra(e, t).toMarkup();
  return a;
}, eo = function(e, t) {
  var a = new fa(t);
  return Ba(e, a);
}, Xi = function(e, t, a) {
  if (a.throwOnError || !(e instanceof z)) throw e;
  var n = T(["katex-error"], [new We(t)]);
  return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + a.errorColor), n;
}, Ra = function(e, t) {
  var a = new fa(t);
  try {
    var n = Ba(e, a);
    return u1(n, e, a);
  } catch (i) {
    return Xi(i, e, a);
  }
}, to = function(e, t) {
  var a = new fa(t);
  try {
    var n = Ba(e, a);
    return h1(n, e, a);
  } catch (i) {
    return Xi(i, e, a);
  }
}, ro = "0.16.38", ao = { Span: st, Anchor: er, SymbolNode: We, SvgNode: b0, PathNode: B0, LineNode: Xr }, no = { version: ro, render: Wi, renderToString: Q1, ParseError: z, SETTINGS_SCHEMA: Vr, __parse: eo, __renderToDomTree: Ra, __renderToHTMLTree: to, __setFontMetrics: jl, __defineSymbol: s, __defineFunction: _, __defineMacro: m, __domTree: ao };
const io = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/, so = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/, lo = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;
function oo(r = {}) {
  return { extensions: [co(r, Dn(r, false)), uo(r, Dn(r, true))] };
}
function Dn(r, e) {
  return (t) => no.renderToString(t.text, { ...r, displayMode: t.displayMode }) + (e ? `
` : "");
}
function co(r, e) {
  const t = r && r.nonStandard, a = t ? so : io;
  return { name: "inlineKatex", level: "inline", start(n) {
    let i, l = n;
    for (; l; ) {
      if (i = l.indexOf("$"), i === -1) return;
      if ((t ? i > -1 : i === 0 || l.charAt(i - 1) === " ") && l.substring(i).match(a)) return i;
      l = l.substring(i + 1).replace(/^\$+/, "");
    }
  }, tokenizer(n, i) {
    const l = n.match(a);
    if (l) return { type: "inlineKatex", raw: l[0], text: l[2].trim(), displayMode: l[1].length === 2 };
  }, renderer: e };
}
function uo(r, e) {
  return { name: "blockKatex", level: "block", tokenizer(t, a) {
    const n = t.match(lo);
    if (n) return { type: "blockKatex", raw: n[0], text: n[2].trim(), displayMode: n[1].length === 2 };
  }, renderer: e };
}
const ho = /* @__PURE__ */ new Set(["adsr"]);
function mo(r) {
  const e = r.regex, t = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), a = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"], c = { $pattern: /[A-Za-z]\w+|__\w+__/, keyword: a, built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"], literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"], type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"] }, u = { className: "meta", begin: /^(>>>|\.\.\.) / }, d = { className: "subst", begin: /\{/, end: /\}/, keywords: c, illegal: /#/ }, g = { begin: /\{\{/, relevance: 0 }, x = { className: "string", contains: [r.BACKSLASH_ESCAPE], variants: [{ begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, end: /'''/, contains: [r.BACKSLASH_ESCAPE, u], relevance: 10 }, { begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, end: /"""/, contains: [r.BACKSLASH_ESCAPE, u], relevance: 10 }, { begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/, contains: [r.BACKSLASH_ESCAPE, u, g, d] }, { begin: /([fF][rR]|[rR][fF]|[fF])"""/, end: /"""/, contains: [r.BACKSLASH_ESCAPE, u, g, d] }, { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 }, { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 }, { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ }, { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ }, { begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [r.BACKSLASH_ESCAPE, g, d] }, { begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [r.BACKSLASH_ESCAPE, g, d] }, r.APOS_STRING_MODE, r.QUOTE_STRING_MODE] }, y = "[0-9](_?[0-9])*", w = `(\\b(${y}))?\\.(${y})|\\b(${y})\\.`, k = `\\b|${a.join("|")}`, M = { className: "number", relevance: 0, variants: [{ begin: `(\\b(${y})|(${w}))[eE][+-]?(${y})[jJ]?(?=${k})` }, { begin: `(${w})[jJ]?` }, { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${k})` }, { begin: `\\b0[bB](_?[01])+[lL]?(?=${k})` }, { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${k})` }, { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${k})` }, { begin: `\\b(${y})[jJ](?=${k})` }] }, N = { className: "comment", begin: e.lookahead(/# type:/), end: /$/, keywords: c, contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: true }] }, I = { className: "params", variants: [{ className: "", begin: /\(\s*\)/, skip: true }, { begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: c, contains: ["self", u, M, x, r.HASH_COMMENT_MODE] }] };
  return d.contains = [x, M, u], { name: "Python", aliases: ["py", "gyp", "ipython"], unicodeRegex: true, keywords: c, illegal: /(<\/|\?)|=>/, contains: [u, M, { scope: "variable.language", match: /\bself\b/ }, { beginKeywords: "if", relevance: 0 }, { match: /\bor\b/, scope: "keyword" }, x, N, r.HASH_COMMENT_MODE, { match: [/\bdef/, /\s+/, t], scope: { 1: "keyword", 3: "title.function" }, contains: [I] }, { variants: [{ match: [/\bclass/, /\s+/, t, /\s*/, /\(\s*/, t, /\s*\)/] }, { match: [/\bclass/, /\s+/, t] }], scope: { 1: "keyword", 3: "title.class", 6: "title.class.inherited" } }, { className: "meta", begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [M, I, x] }] };
}
function po(r) {
  return { name: "GLSL", keywords: { keyword: "break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly", type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void", built_in: "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow", literal: "true false" }, illegal: '"', contains: [r.C_LINE_COMMENT_MODE, r.C_BLOCK_COMMENT_MODE, r.C_NUMBER_MODE, { className: "meta", begin: "#", end: "$" }] };
}
$0.registerLanguage("javascript", qn);
$0.registerLanguage("js", qn);
$0.registerLanguage("python", mo);
$0.registerLanguage("glsl", po);
const fo = new Yn(ml({ emptyLangClass: "hljs", langPrefix: "hljs language-", highlight(r, e) {
  return e && $0.getLanguage(e) ? $0.highlight(r, { language: e }).value : $0.highlightAuto(r).value;
} }), oo({ throwOnError: false, nonStandard: true })), yo = (r) => r.replace(/<a\s+href="/g, '<a target="_blank" rel="noopener noreferrer" href="');
async function wo(r, e = fetch) {
  var _a2, _b;
  const t = ((_a2 = ks[r]) == null ? void 0 : _a2.type) ?? ((_b = Bs(r)) == null ? void 0 : _b.type) ?? r, a = ho.has(t), n = Ss(t), i = await e(`/content/objects/${n}.md`).then((l) => !l.ok || (l.headers.get("content-type") ?? "").includes("text/html") ? null : l.text()).catch(() => null);
  return { markdown: i, htmlContent: i ? fo.parse(i) : null, hasHelpPatch: a };
}
export {
  Q0 as A,
  $0 as H,
  et as O,
  yo as a,
  wo as f,
  Bs as g,
  qn as j,
  fo as m
};
