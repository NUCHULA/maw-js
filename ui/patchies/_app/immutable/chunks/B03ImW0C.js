/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let _n, An;
function Mn() {
  return { geminiUrl: _n, vertexUrl: An };
}
function In(t, e, n, i) {
  var r, l;
  if (!(t == null ? void 0 : t.baseUrl)) {
    const a = Mn();
    return e ? (r = a.vertexUrl) !== null && r !== void 0 ? r : n : (l = a.geminiUrl) !== null && l !== void 0 ? l : i;
  }
  return t.baseUrl;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class B {
}
function C(t, e) {
  const n = /\{([^}]+)\}/g;
  return t.replace(n, (i, r) => {
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const l = e[r];
      return l != null ? String(l) : "";
    } else throw new Error(`Key '${r}' not found in valueMap.`);
  });
}
function s(t, e, n) {
  for (let l = 0; l < e.length - 1; l++) {
    const a = e[l];
    if (a.endsWith("[]")) {
      const f = a.slice(0, -2);
      if (!(f in t)) if (Array.isArray(n)) t[f] = Array.from({ length: n.length }, () => ({}));
      else throw new Error(`Value must be a list given an array path ${a}`);
      if (Array.isArray(t[f])) {
        const c = t[f];
        if (Array.isArray(n)) for (let u = 0; u < c.length; u++) {
          const d = c[u];
          s(d, e.slice(l + 1), n[u]);
        }
        else for (const u of c) s(u, e.slice(l + 1), n);
      }
      return;
    } else if (a.endsWith("[0]")) {
      const f = a.slice(0, -3);
      f in t || (t[f] = [{}]);
      const c = t[f];
      s(c[0], e.slice(l + 1), n);
      return;
    }
    (!t[a] || typeof t[a] != "object") && (t[a] = {}), t = t[a];
  }
  const i = e[e.length - 1], r = t[i];
  if (r !== void 0) {
    if (!n || typeof n == "object" && Object.keys(n).length === 0 || n === r) return;
    if (typeof r == "object" && typeof n == "object" && r !== null && n !== null) Object.assign(r, n);
    else throw new Error(`Cannot set value for an existing key. Key: ${i}`);
  } else t[i] = n;
}
function o(t, e) {
  try {
    if (e.length === 1 && e[0] === "_self") return t;
    for (let n = 0; n < e.length; n++) {
      if (typeof t != "object" || t === null) return;
      const i = e[n];
      if (i.endsWith("[]")) {
        const r = i.slice(0, -2);
        if (r in t) {
          const l = t[r];
          return Array.isArray(l) ? l.map((a) => o(a, e.slice(n + 1))) : void 0;
        } else return;
      } else t = t[i];
    }
    return t;
  } catch (n) {
    if (n instanceof TypeError) return;
    throw n;
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function ce(t) {
  if (typeof t != "string") throw new Error("fromImageBytes must be a string");
  return t;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
var De;
(function(t) {
  t.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED", t.OUTCOME_OK = "OUTCOME_OK", t.OUTCOME_FAILED = "OUTCOME_FAILED", t.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED";
})(De || (De = {}));
var Ne;
(function(t) {
  t.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED", t.PYTHON = "PYTHON";
})(Ne || (Ne = {}));
var G;
(function(t) {
  t.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED", t.STRING = "STRING", t.NUMBER = "NUMBER", t.INTEGER = "INTEGER", t.BOOLEAN = "BOOLEAN", t.ARRAY = "ARRAY", t.OBJECT = "OBJECT", t.NULL = "NULL";
})(G || (G = {}));
var we;
(function(t) {
  t.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", t.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", t.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT", t.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", t.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", t.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY", t.HARM_CATEGORY_IMAGE_HATE = "HARM_CATEGORY_IMAGE_HATE", t.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT", t.HARM_CATEGORY_IMAGE_HARASSMENT = "HARM_CATEGORY_IMAGE_HARASSMENT", t.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT";
})(we || (we = {}));
var Ue;
(function(t) {
  t.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED", t.SEVERITY = "SEVERITY", t.PROBABILITY = "PROBABILITY";
})(Ue || (Ue = {}));
var Fe;
(function(t) {
  t.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", t.BLOCK_NONE = "BLOCK_NONE", t.OFF = "OFF";
})(Fe || (Fe = {}));
var Le;
(function(t) {
  t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", t.MODE_DYNAMIC = "MODE_DYNAMIC";
})(Le || (Le = {}));
var Ve;
(function(t) {
  t.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED", t.NO_AUTH = "NO_AUTH", t.API_KEY_AUTH = "API_KEY_AUTH", t.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH", t.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH", t.OAUTH = "OAUTH", t.OIDC_AUTH = "OIDC_AUTH";
})(Ve || (Ve = {}));
var ke;
(function(t) {
  t.API_SPEC_UNSPECIFIED = "API_SPEC_UNSPECIFIED", t.SIMPLE_SEARCH = "SIMPLE_SEARCH", t.ELASTIC_SEARCH = "ELASTIC_SEARCH";
})(ke || (ke = {}));
var Ge;
(function(t) {
  t.ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED", t.ENVIRONMENT_BROWSER = "ENVIRONMENT_BROWSER";
})(Ge || (Ge = {}));
var qe;
(function(t) {
  t.URL_RETRIEVAL_STATUS_UNSPECIFIED = "URL_RETRIEVAL_STATUS_UNSPECIFIED", t.URL_RETRIEVAL_STATUS_SUCCESS = "URL_RETRIEVAL_STATUS_SUCCESS", t.URL_RETRIEVAL_STATUS_ERROR = "URL_RETRIEVAL_STATUS_ERROR";
})(qe || (qe = {}));
var Be;
(function(t) {
  t.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", t.STOP = "STOP", t.MAX_TOKENS = "MAX_TOKENS", t.SAFETY = "SAFETY", t.RECITATION = "RECITATION", t.LANGUAGE = "LANGUAGE", t.OTHER = "OTHER", t.BLOCKLIST = "BLOCKLIST", t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", t.SPII = "SPII", t.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", t.IMAGE_SAFETY = "IMAGE_SAFETY", t.UNEXPECTED_TOOL_CALL = "UNEXPECTED_TOOL_CALL";
})(Be || (Be = {}));
var Je;
(function(t) {
  t.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", t.NEGLIGIBLE = "NEGLIGIBLE", t.LOW = "LOW", t.MEDIUM = "MEDIUM", t.HIGH = "HIGH";
})(Je || (Je = {}));
var He;
(function(t) {
  t.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED", t.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE", t.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW", t.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM", t.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH";
})(He || (He = {}));
var $e;
(function(t) {
  t.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", t.SAFETY = "SAFETY", t.OTHER = "OTHER", t.BLOCKLIST = "BLOCKLIST", t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", t.IMAGE_SAFETY = "IMAGE_SAFETY";
})($e || ($e = {}));
var We;
(function(t) {
  t.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED", t.ON_DEMAND = "ON_DEMAND", t.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT";
})(We || (We = {}));
var oe;
(function(t) {
  t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", t.TEXT = "TEXT", t.IMAGE = "IMAGE", t.AUDIO = "AUDIO";
})(oe || (oe = {}));
var Ye;
(function(t) {
  t.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", t.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", t.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", t.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH";
})(Ye || (Ye = {}));
var de;
(function(t) {
  t.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED", t.JOB_STATE_QUEUED = "JOB_STATE_QUEUED", t.JOB_STATE_PENDING = "JOB_STATE_PENDING", t.JOB_STATE_RUNNING = "JOB_STATE_RUNNING", t.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED", t.JOB_STATE_FAILED = "JOB_STATE_FAILED", t.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING", t.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED", t.JOB_STATE_PAUSED = "JOB_STATE_PAUSED", t.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED", t.JOB_STATE_UPDATING = "JOB_STATE_UPDATING", t.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED";
})(de || (de = {}));
var Ke;
(function(t) {
  t.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED", t.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE", t.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO", t.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR", t.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT", t.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN", t.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO";
})(Ke || (Ke = {}));
var ze;
(function(t) {
  t.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED", t.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY", t.BALANCED = "BALANCED", t.PRIORITIZE_COST = "PRIORITIZE_COST";
})(ze || (ze = {}));
var Xe;
(function(t) {
  t.UNSPECIFIED = "UNSPECIFIED", t.BLOCKING = "BLOCKING", t.NON_BLOCKING = "NON_BLOCKING";
})(Xe || (Xe = {}));
var Qe;
(function(t) {
  t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", t.MODE_DYNAMIC = "MODE_DYNAMIC";
})(Qe || (Qe = {}));
var Ze;
(function(t) {
  t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", t.AUTO = "AUTO", t.ANY = "ANY", t.NONE = "NONE";
})(Ze || (Ze = {}));
var be;
(function(t) {
  t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", t.BLOCK_NONE = "BLOCK_NONE";
})(be || (be = {}));
var Oe;
(function(t) {
  t.DONT_ALLOW = "DONT_ALLOW", t.ALLOW_ADULT = "ALLOW_ADULT", t.ALLOW_ALL = "ALLOW_ALL";
})(Oe || (Oe = {}));
var je;
(function(t) {
  t.auto = "auto", t.en = "en", t.ja = "ja", t.ko = "ko", t.hi = "hi", t.zh = "zh", t.pt = "pt", t.es = "es";
})(je || (je = {}));
var et;
(function(t) {
  t.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT", t.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED", t.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND", t.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND", t.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC";
})(et || (et = {}));
var tt;
(function(t) {
  t.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT", t.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY", t.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE", t.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH";
})(tt || (tt = {}));
var nt;
(function(t) {
  t.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT", t.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON", t.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL", t.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT";
})(nt || (nt = {}));
var ot;
(function(t) {
  t.EDIT_MODE_DEFAULT = "EDIT_MODE_DEFAULT", t.EDIT_MODE_INPAINT_REMOVAL = "EDIT_MODE_INPAINT_REMOVAL", t.EDIT_MODE_INPAINT_INSERTION = "EDIT_MODE_INPAINT_INSERTION", t.EDIT_MODE_OUTPAINT = "EDIT_MODE_OUTPAINT", t.EDIT_MODE_CONTROLLED_EDITING = "EDIT_MODE_CONTROLLED_EDITING", t.EDIT_MODE_STYLE = "EDIT_MODE_STYLE", t.EDIT_MODE_BGSWAP = "EDIT_MODE_BGSWAP", t.EDIT_MODE_PRODUCT_IMAGE = "EDIT_MODE_PRODUCT_IMAGE";
})(ot || (ot = {}));
var it;
(function(t) {
  t.OPTIMIZED = "OPTIMIZED", t.LOSSLESS = "LOSSLESS";
})(it || (it = {}));
var st;
(function(t) {
  t.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", t.PROCESSING = "PROCESSING", t.ACTIVE = "ACTIVE", t.FAILED = "FAILED";
})(st || (st = {}));
var rt;
(function(t) {
  t.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED", t.UPLOADED = "UPLOADED", t.GENERATED = "GENERATED";
})(rt || (rt = {}));
var lt;
(function(t) {
  t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", t.TEXT = "TEXT", t.IMAGE = "IMAGE", t.VIDEO = "VIDEO", t.AUDIO = "AUDIO", t.DOCUMENT = "DOCUMENT";
})(lt || (lt = {}));
var at;
(function(t) {
  t.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED", t.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH", t.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW";
})(at || (at = {}));
var ut;
(function(t) {
  t.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED", t.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH", t.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW";
})(ut || (ut = {}));
var ft;
(function(t) {
  t.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED", t.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS", t.NO_INTERRUPTION = "NO_INTERRUPTION";
})(ft || (ft = {}));
var ct;
(function(t) {
  t.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED", t.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY", t.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT";
})(ct || (ct = {}));
var dt;
(function(t) {
  t.SCHEDULING_UNSPECIFIED = "SCHEDULING_UNSPECIFIED", t.SILENT = "SILENT", t.WHEN_IDLE = "WHEN_IDLE", t.INTERRUPT = "INTERRUPT";
})(dt || (dt = {}));
var pt;
(function(t) {
  t.SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED", t.C_MAJOR_A_MINOR = "C_MAJOR_A_MINOR", t.D_FLAT_MAJOR_B_FLAT_MINOR = "D_FLAT_MAJOR_B_FLAT_MINOR", t.D_MAJOR_B_MINOR = "D_MAJOR_B_MINOR", t.E_FLAT_MAJOR_C_MINOR = "E_FLAT_MAJOR_C_MINOR", t.E_MAJOR_D_FLAT_MINOR = "E_MAJOR_D_FLAT_MINOR", t.F_MAJOR_D_MINOR = "F_MAJOR_D_MINOR", t.G_FLAT_MAJOR_E_FLAT_MINOR = "G_FLAT_MAJOR_E_FLAT_MINOR", t.G_MAJOR_E_MINOR = "G_MAJOR_E_MINOR", t.A_FLAT_MAJOR_F_MINOR = "A_FLAT_MAJOR_F_MINOR", t.A_MAJOR_G_FLAT_MINOR = "A_MAJOR_G_FLAT_MINOR", t.B_FLAT_MAJOR_G_MINOR = "B_FLAT_MAJOR_G_MINOR", t.B_MAJOR_A_FLAT_MINOR = "B_MAJOR_A_FLAT_MINOR";
})(pt || (pt = {}));
var H;
(function(t) {
  t.PLAYBACK_CONTROL_UNSPECIFIED = "PLAYBACK_CONTROL_UNSPECIFIED", t.PLAY = "PLAY", t.PAUSE = "PAUSE", t.STOP = "STOP", t.RESET_CONTEXT = "RESET_CONTEXT";
})(H || (H = {}));
class pe {
  constructor(e) {
    const n = {};
    for (const i of e.headers.entries()) n[i[0]] = i[1];
    this.headers = n, this.responseInternal = e;
  }
  json() {
    return this.responseInternal.json();
  }
}
class Z {
  get text() {
    var e, n, i, r, l, a, f, c;
    if (((r = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || r === void 0 ? void 0 : r.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning text from the first one.");
    let u = "", d = false;
    const p = [];
    for (const m of (c = (f = (a = (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) === null || a === void 0 ? void 0 : a.content) === null || f === void 0 ? void 0 : f.parts) !== null && c !== void 0 ? c : []) {
      for (const [g, h] of Object.entries(m)) g !== "text" && g !== "thought" && (h !== null || h !== void 0) && p.push(g);
      if (typeof m.text == "string") {
        if (typeof m.thought == "boolean" && m.thought) continue;
        d = true, u += m.text;
      }
    }
    return p.length > 0 && console.warn(`there are non-text parts ${p} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), d ? u : void 0;
  }
  get data() {
    var e, n, i, r, l, a, f, c;
    if (((r = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || r === void 0 ? void 0 : r.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning data from the first one.");
    let u = "";
    const d = [];
    for (const p of (c = (f = (a = (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) === null || a === void 0 ? void 0 : a.content) === null || f === void 0 ? void 0 : f.parts) !== null && c !== void 0 ? c : []) {
      for (const [m, g] of Object.entries(p)) m !== "inlineData" && (g !== null || g !== void 0) && d.push(m);
      p.inlineData && typeof p.inlineData.data == "string" && (u += atob(p.inlineData.data));
    }
    return d.length > 0 && console.warn(`there are non-data parts ${d} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), u.length > 0 ? btoa(u) : void 0;
  }
  get functionCalls() {
    var e, n, i, r, l, a, f, c;
    if (((r = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || r === void 0 ? void 0 : r.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning function calls from the first one.");
    const u = (c = (f = (a = (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) === null || a === void 0 ? void 0 : a.content) === null || f === void 0 ? void 0 : f.parts) === null || c === void 0 ? void 0 : c.filter((d) => d.functionCall).map((d) => d.functionCall).filter((d) => d !== void 0);
    if ((u == null ? void 0 : u.length) !== 0) return u;
  }
  get executableCode() {
    var e, n, i, r, l, a, f, c, u;
    if (((r = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || r === void 0 ? void 0 : r.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning executable code from the first one.");
    const d = (c = (f = (a = (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) === null || a === void 0 ? void 0 : a.content) === null || f === void 0 ? void 0 : f.parts) === null || c === void 0 ? void 0 : c.filter((p) => p.executableCode).map((p) => p.executableCode).filter((p) => p !== void 0);
    if ((d == null ? void 0 : d.length) !== 0) return (u = d == null ? void 0 : d[0]) === null || u === void 0 ? void 0 : u.code;
  }
  get codeExecutionResult() {
    var e, n, i, r, l, a, f, c, u;
    if (((r = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || r === void 0 ? void 0 : r.length) === 0) return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning code execution result from the first one.");
    const d = (c = (f = (a = (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) === null || a === void 0 ? void 0 : a.content) === null || f === void 0 ? void 0 : f.parts) === null || c === void 0 ? void 0 : c.filter((p) => p.codeExecutionResult).map((p) => p.codeExecutionResult).filter((p) => p !== void 0);
    if ((d == null ? void 0 : d.length) !== 0) return (u = d == null ? void 0 : d[0]) === null || u === void 0 ? void 0 : u.output;
  }
}
class mt {
}
class gt {
}
class Rn {
}
class Pn {
}
class ht {
}
class vt {
}
class Tt {
}
class xn {
}
class Ct {
}
class yt {
}
class Et {
}
class St {
}
class Dn {
}
class Nn {
}
class wn {
}
class _t {
}
class Un {
  get text() {
    var e, n, i;
    let r = "", l = false;
    const a = [];
    for (const f of (i = (n = (e = this.serverContent) === null || e === void 0 ? void 0 : e.modelTurn) === null || n === void 0 ? void 0 : n.parts) !== null && i !== void 0 ? i : []) {
      for (const [c, u] of Object.entries(f)) c !== "text" && c !== "thought" && u !== null && a.push(c);
      if (typeof f.text == "string") {
        if (typeof f.thought == "boolean" && f.thought) continue;
        l = true, r += f.text;
      }
    }
    return a.length > 0 && console.warn(`there are non-text parts ${a} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), l ? r : void 0;
  }
  get data() {
    var e, n, i;
    let r = "";
    const l = [];
    for (const a of (i = (n = (e = this.serverContent) === null || e === void 0 ? void 0 : e.modelTurn) === null || n === void 0 ? void 0 : n.parts) !== null && i !== void 0 ? i : []) {
      for (const [f, c] of Object.entries(a)) f !== "inlineData" && c !== null && l.push(f);
      a.inlineData && typeof a.inlineData.data == "string" && (r += atob(a.inlineData.data));
    }
    return l.length > 0 && console.warn(`there are non-data parts ${l} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), r.length > 0 ? btoa(r) : void 0;
  }
}
class ie {
  _fromAPIResponse({ apiResponse: e, isVertexAI: n }) {
    const i = new ie();
    if (i.name = e.name, i.metadata = e.metadata, i.done = e.done, i.error = e.error, n) {
      const r = e.response;
      if (r) {
        const l = new Ct(), a = r.videos;
        l.generatedVideos = a == null ? void 0 : a.map((f) => ({ video: { uri: f.gcsUri, videoBytes: f.bytesBase64Encoded ? ce(f.bytesBase64Encoded) : void 0, mimeType: f.mimeType } })), l.raiMediaFilteredCount = r.raiMediaFilteredCount, l.raiMediaFilteredReasons = r.raiMediaFilteredReasons, i.response = l;
      }
    } else {
      const r = e.response;
      if (r) {
        const l = new Ct(), a = r.generateVideoResponse, f = a == null ? void 0 : a.generatedSamples;
        l.generatedVideos = f == null ? void 0 : f.map((c) => {
          const u = c.video;
          return { video: { uri: u == null ? void 0 : u.uri, videoBytes: (u == null ? void 0 : u.encodedVideo) ? ce(u == null ? void 0 : u.encodedVideo) : void 0, mimeType: c.encoding } };
        }), l.raiMediaFilteredCount = r.raiMediaFilteredCount, l.raiMediaFilteredReasons = r.raiMediaFilteredReasons, i.response = l;
      }
    }
    return i;
  }
}
class Fn {
  get audioChunk() {
    if (this.serverContent && this.serverContent.audioChunks && this.serverContent.audioChunks.length > 0) return this.serverContent.audioChunks[0];
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function x(t, e) {
  if (!e || typeof e != "string") throw new Error("model is required and must be a string");
  if (t.isVertexAI()) {
    if (e.startsWith("publishers/") || e.startsWith("projects/") || e.startsWith("models/")) return e;
    if (e.indexOf("/") >= 0) {
      const n = e.split("/", 2);
      return `publishers/${n[0]}/models/${n[1]}`;
    } else return `publishers/google/models/${e}`;
  } else return e.startsWith("models/") || e.startsWith("tunedModels/") ? e : `models/${e}`;
}
function Kt(t, e) {
  const n = x(t, e);
  return n ? n.startsWith("publishers/") && t.isVertexAI() ? `projects/${t.getProject()}/locations/${t.getLocation()}/${n}` : n.startsWith("models/") && t.isVertexAI() ? `projects/${t.getProject()}/locations/${t.getLocation()}/publishers/google/${n}` : n : "";
}
function zt(t) {
  return Array.isArray(t) ? t.map((e) => se(e)) : [se(t)];
}
function se(t) {
  if (typeof t == "object" && t !== null) return t;
  throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof t}`);
}
function Xt(t) {
  const e = se(t);
  if (e.mimeType && e.mimeType.startsWith("image/")) return e;
  throw new Error(`Unsupported mime type: ${e.mimeType}`);
}
function Qt(t) {
  const e = se(t);
  if (e.mimeType && e.mimeType.startsWith("audio/")) return e;
  throw new Error(`Unsupported mime type: ${e.mimeType}`);
}
function At(t) {
  if (t == null) throw new Error("PartUnion is required");
  if (typeof t == "object") return t;
  if (typeof t == "string") return { text: t };
  throw new Error(`Unsupported part type: ${typeof t}`);
}
function Zt(t) {
  if (t == null || Array.isArray(t) && t.length === 0) throw new Error("PartListUnion is required");
  return Array.isArray(t) ? t.map((e) => At(e)) : [At(t)];
}
function me(t) {
  return t != null && typeof t == "object" && "parts" in t && Array.isArray(t.parts);
}
function Mt(t) {
  return t != null && typeof t == "object" && "functionCall" in t;
}
function It(t) {
  return t != null && typeof t == "object" && "functionResponse" in t;
}
function w(t) {
  if (t == null) throw new Error("ContentUnion is required");
  return me(t) ? t : { role: "user", parts: Zt(t) };
}
function bt(t, e) {
  if (!e) return [];
  if (t.isVertexAI() && Array.isArray(e)) return e.flatMap((n) => {
    const i = w(n);
    return i.parts && i.parts.length > 0 && i.parts[0].text !== void 0 ? [i.parts[0].text] : [];
  });
  if (t.isVertexAI()) {
    const n = w(e);
    return n.parts && n.parts.length > 0 && n.parts[0].text !== void 0 ? [n.parts[0].text] : [];
  }
  return Array.isArray(e) ? e.map((n) => w(n)) : [w(e)];
}
function F(t) {
  if (t == null || Array.isArray(t) && t.length === 0) throw new Error("contents are required");
  if (!Array.isArray(t)) {
    if (Mt(t) || It(t)) throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");
    return [w(t)];
  }
  const e = [], n = [], i = me(t[0]);
  for (const r of t) {
    const l = me(r);
    if (l != i) throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");
    if (l) e.push(r);
    else {
      if (Mt(r) || It(r)) throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");
      n.push(r);
    }
  }
  return i || e.push({ role: "user", parts: Zt(n) }), e;
}
function Ln(t, e) {
  t.includes("null") && (e.nullable = true);
  const n = t.filter((i) => i !== "null");
  if (n.length === 1) e.type = Object.values(G).includes(n[0].toUpperCase()) ? n[0].toUpperCase() : G.TYPE_UNSPECIFIED;
  else {
    e.anyOf = [];
    for (const i of n) e.anyOf.push({ type: Object.values(G).includes(i.toUpperCase()) ? i.toUpperCase() : G.TYPE_UNSPECIFIED });
  }
}
function $(t) {
  const e = {}, n = ["items"], i = ["anyOf"], r = ["properties"];
  if (t.type && t.anyOf) throw new Error("type and anyOf cannot be both populated.");
  const l = t.anyOf;
  l != null && l.length == 2 && (l[0].type === "null" ? (e.nullable = true, t = l[1]) : l[1].type === "null" && (e.nullable = true, t = l[0])), t.type instanceof Array && Ln(t.type, e);
  for (const [a, f] of Object.entries(t)) if (f != null) if (a == "type") {
    if (f === "null") throw new Error("type: null can not be the only possible type for the field.");
    if (f instanceof Array) continue;
    e.type = Object.values(G).includes(f.toUpperCase()) ? f.toUpperCase() : G.TYPE_UNSPECIFIED;
  } else if (n.includes(a)) e[a] = $(f);
  else if (i.includes(a)) {
    const c = [];
    for (const u of f) {
      if (u.type == "null") {
        e.nullable = true;
        continue;
      }
      c.push($(u));
    }
    e[a] = c;
  } else if (r.includes(a)) {
    const c = {};
    for (const [u, d] of Object.entries(f)) c[u] = $(d);
    e[a] = c;
  } else {
    if (a === "additionalProperties") continue;
    e[a] = f;
  }
  return e;
}
function _e(t) {
  return $(t);
}
function Ae(t) {
  if (typeof t == "object") return t;
  if (typeof t == "string") return { voiceConfig: { prebuiltVoiceConfig: { voiceName: t } } };
  throw new Error(`Unsupported speechConfig type: ${typeof t}`);
}
function Me(t) {
  if ("multiSpeakerVoiceConfig" in t) throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");
  return t;
}
function K(t) {
  if (t.functionDeclarations) for (const e of t.functionDeclarations) e.parameters && (Object.keys(e.parameters).includes("$schema") ? e.parametersJsonSchema || (e.parametersJsonSchema = e.parameters, delete e.parameters) : e.parameters = $(e.parameters)), e.response && (Object.keys(e.response).includes("$schema") ? e.responseJsonSchema || (e.responseJsonSchema = e.response, delete e.response) : e.response = $(e.response));
  return t;
}
function z(t) {
  if (t == null) throw new Error("tools is required");
  if (!Array.isArray(t)) throw new Error("tools is required and must be an array of Tools");
  const e = [];
  for (const n of t) e.push(n);
  return e;
}
function Vn(t, e, n, i = 1) {
  const r = !e.startsWith(`${n}/`) && e.split("/").length === i;
  return t.isVertexAI() ? e.startsWith("projects/") ? e : e.startsWith("locations/") ? `projects/${t.getProject()}/${e}` : e.startsWith(`${n}/`) ? `projects/${t.getProject()}/locations/${t.getLocation()}/${e}` : r ? `projects/${t.getProject()}/locations/${t.getLocation()}/${n}/${e}` : e : r ? `${n}/${e}` : e;
}
function k(t, e) {
  if (typeof e != "string") throw new Error("name must be a string");
  return Vn(t, e, "cachedContents");
}
function Ot(t) {
  switch (t) {
    case "STATE_UNSPECIFIED":
      return "JOB_STATE_UNSPECIFIED";
    case "CREATING":
      return "JOB_STATE_RUNNING";
    case "ACTIVE":
      return "JOB_STATE_SUCCEEDED";
    case "FAILED":
      return "JOB_STATE_FAILED";
    default:
      return t;
  }
}
function J(t) {
  return ce(t);
}
function kn(t) {
  return t != null && typeof t == "object" && "name" in t;
}
function Gn(t) {
  return t != null && typeof t == "object" && "video" in t;
}
function qn(t) {
  return t != null && typeof t == "object" && "uri" in t;
}
function jt(t) {
  var e;
  let n;
  if (kn(t) && (n = t.name), !(qn(t) && (n = t.uri, n === void 0)) && !(Gn(t) && (n = (e = t.video) === null || e === void 0 ? void 0 : e.uri, n === void 0))) {
    if (typeof t == "string" && (n = t), n === void 0) throw new Error("Could not extract file name from the provided input.");
    if (n.startsWith("https://")) {
      const r = n.split("files/")[1].match(/[a-z0-9]+/);
      if (r === null) throw new Error(`Could not extract file name from URI ${n}`);
      n = r[0];
    } else n.startsWith("files/") && (n = n.split("files/")[1]);
    return n;
  }
}
function en(t, e) {
  let n;
  return t.isVertexAI() ? n = e ? "publishers/google/models" : "models" : n = e ? "models" : "tunedModels", n;
}
function tn(t) {
  for (const e of ["models", "tunedModels", "publisherModels"]) if (Bn(t, e)) return t[e];
  return [];
}
function Bn(t, e) {
  return t !== null && typeof t == "object" && e in t;
}
function Jn(t, e = {}) {
  const n = t, i = { name: n.name, description: n.description, parametersJsonSchema: n.inputSchema };
  return e.behavior && (i.behavior = e.behavior), { functionDeclarations: [i] };
}
function Hn(t, e = {}) {
  const n = [], i = /* @__PURE__ */ new Set();
  for (const r of t) {
    const l = r.name;
    if (i.has(l)) throw new Error(`Duplicate function name ${l} found in MCP tools. Please ensure function names are unique.`);
    i.add(l);
    const a = Jn(r, e);
    a.functionDeclarations && n.push(...a.functionDeclarations);
  }
  return { functionDeclarations: n };
}
function nn(t, e) {
  if (typeof e != "string" && !Array.isArray(e)) {
    if (t && t.isVertexAI()) {
      if (e.gcsUri && e.bigqueryUri) throw new Error("Only one of `gcsUri` or `bigqueryUri` can be set.");
      if (!e.gcsUri && !e.bigqueryUri) throw new Error("One of `gcsUri` or `bigqueryUri` must be set.");
    } else {
      if (e.inlinedRequests && e.fileName) throw new Error("Only one of `inlinedRequests` or `fileName` can be set.");
      if (!e.inlinedRequests && !e.fileName) throw new Error("One of `inlinedRequests` or `fileName` must be set.");
    }
    return e;
  } else {
    if (Array.isArray(e)) return { inlinedRequests: e };
    if (typeof e == "string") {
      if (e.startsWith("gs://")) return { format: "jsonl", gcsUri: [e] };
      if (e.startsWith("bq://")) return { format: "bigquery", bigqueryUri: e };
      if (e.startsWith("files/")) return { fileName: e };
    }
  }
  throw new Error(`Unsupported source: ${e}`);
}
function $n(t) {
  if (typeof t != "string") return t;
  const e = t;
  if (e.startsWith("gs://")) return { format: "jsonl", gcsUri: e };
  if (e.startsWith("bq://")) return { format: "bigquery", bigqueryUri: e };
  throw new Error(`Unsupported destination: ${e}`);
}
function X(t, e) {
  const n = e;
  if (!t.isVertexAI()) {
    if (/batches\/[^/]+$/.test(n)) return n.split("/").pop();
    throw new Error(`Invalid batch job name: ${n}.`);
  }
  if (/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(n)) return n.split("/").pop();
  if (/^\d+$/.test(n)) return n;
  throw new Error(`Invalid batch job name: ${n}.`);
}
function on(t) {
  const e = t;
  return e === "BATCH_STATE_UNSPECIFIED" ? "JOB_STATE_UNSPECIFIED" : e === "BATCH_STATE_PENDING" ? "JOB_STATE_PENDING" : e === "BATCH_STATE_SUCCEEDED" ? "JOB_STATE_SUCCEEDED" : e === "BATCH_STATE_FAILED" ? "JOB_STATE_FAILED" : e === "BATCH_STATE_CANCELLED" ? "JOB_STATE_CANCELLED" : e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Wn(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function Yn(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Kn(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["fileUri"]);
  n != null && s(e, ["fileUri"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function zn(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], Wn(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], Yn(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], Kn(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function sn(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => zn(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function Xn(t) {
  const e = {}, n = o(t, ["anyOf"]);
  n != null && s(e, ["anyOf"], n);
  const i = o(t, ["default"]);
  i != null && s(e, ["default"], i);
  const r = o(t, ["description"]);
  r != null && s(e, ["description"], r);
  const l = o(t, ["enum"]);
  l != null && s(e, ["enum"], l);
  const a = o(t, ["example"]);
  a != null && s(e, ["example"], a);
  const f = o(t, ["format"]);
  f != null && s(e, ["format"], f);
  const c = o(t, ["items"]);
  c != null && s(e, ["items"], c);
  const u = o(t, ["maxItems"]);
  u != null && s(e, ["maxItems"], u);
  const d = o(t, ["maxLength"]);
  d != null && s(e, ["maxLength"], d);
  const p = o(t, ["maxProperties"]);
  p != null && s(e, ["maxProperties"], p);
  const m = o(t, ["maximum"]);
  m != null && s(e, ["maximum"], m);
  const g = o(t, ["minItems"]);
  g != null && s(e, ["minItems"], g);
  const h = o(t, ["minLength"]);
  h != null && s(e, ["minLength"], h);
  const v = o(t, ["minProperties"]);
  v != null && s(e, ["minProperties"], v);
  const T = o(t, ["minimum"]);
  T != null && s(e, ["minimum"], T);
  const E = o(t, ["nullable"]);
  E != null && s(e, ["nullable"], E);
  const y = o(t, ["pattern"]);
  y != null && s(e, ["pattern"], y);
  const S = o(t, ["properties"]);
  S != null && s(e, ["properties"], S);
  const A = o(t, ["propertyOrdering"]);
  A != null && s(e, ["propertyOrdering"], A);
  const _ = o(t, ["required"]);
  _ != null && s(e, ["required"], _);
  const I = o(t, ["title"]);
  I != null && s(e, ["title"], I);
  const R = o(t, ["type"]);
  return R != null && s(e, ["type"], R), e;
}
function Qn(t) {
  const e = {};
  if (o(t, ["method"]) !== void 0) throw new Error("method parameter is not supported in Gemini API.");
  const n = o(t, ["category"]);
  n != null && s(e, ["category"], n);
  const i = o(t, ["threshold"]);
  return i != null && s(e, ["threshold"], i), e;
}
function Zn(t) {
  const e = {}, n = o(t, ["behavior"]);
  n != null && s(e, ["behavior"], n);
  const i = o(t, ["description"]);
  i != null && s(e, ["description"], i);
  const r = o(t, ["name"]);
  r != null && s(e, ["name"], r);
  const l = o(t, ["parameters"]);
  l != null && s(e, ["parameters"], l);
  const a = o(t, ["parametersJsonSchema"]);
  a != null && s(e, ["parametersJsonSchema"], a);
  const f = o(t, ["response"]);
  f != null && s(e, ["response"], f);
  const c = o(t, ["responseJsonSchema"]);
  return c != null && s(e, ["responseJsonSchema"], c), e;
}
function bn(t) {
  const e = {}, n = o(t, ["startTime"]);
  n != null && s(e, ["startTime"], n);
  const i = o(t, ["endTime"]);
  return i != null && s(e, ["endTime"], i), e;
}
function On(t) {
  const e = {}, n = o(t, ["timeRangeFilter"]);
  return n != null && s(e, ["timeRangeFilter"], bn(n)), e;
}
function jn(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["dynamicThreshold"]);
  return i != null && s(e, ["dynamicThreshold"], i), e;
}
function eo(t) {
  const e = {}, n = o(t, ["dynamicRetrievalConfig"]);
  return n != null && s(e, ["dynamicRetrievalConfig"], jn(n)), e;
}
function to() {
  return {};
}
function no(t) {
  const e = {}, n = o(t, ["functionDeclarations"]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((u) => Zn(u))), s(e, ["functionDeclarations"], c);
  }
  if (o(t, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = o(t, ["googleSearch"]);
  i != null && s(e, ["googleSearch"], On(i));
  const r = o(t, ["googleSearchRetrieval"]);
  if (r != null && s(e, ["googleSearchRetrieval"], eo(r)), o(t, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  if (o(t, ["googleMaps"]) !== void 0) throw new Error("googleMaps parameter is not supported in Gemini API.");
  o(t, ["urlContext"]) != null && s(e, ["urlContext"], to());
  const a = o(t, ["codeExecution"]);
  a != null && s(e, ["codeExecution"], a);
  const f = o(t, ["computerUse"]);
  return f != null && s(e, ["computerUse"], f), e;
}
function oo(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["allowedFunctionNames"]);
  return i != null && s(e, ["allowedFunctionNames"], i), e;
}
function io(t) {
  const e = {}, n = o(t, ["latitude"]);
  n != null && s(e, ["latitude"], n);
  const i = o(t, ["longitude"]);
  return i != null && s(e, ["longitude"], i), e;
}
function so(t) {
  const e = {}, n = o(t, ["latLng"]);
  n != null && s(e, ["latLng"], io(n));
  const i = o(t, ["languageCode"]);
  return i != null && s(e, ["languageCode"], i), e;
}
function ro(t) {
  const e = {}, n = o(t, ["functionCallingConfig"]);
  n != null && s(e, ["functionCallingConfig"], oo(n));
  const i = o(t, ["retrievalConfig"]);
  return i != null && s(e, ["retrievalConfig"], so(i)), e;
}
function lo(t) {
  const e = {}, n = o(t, ["voiceName"]);
  return n != null && s(e, ["voiceName"], n), e;
}
function rn(t) {
  const e = {}, n = o(t, ["prebuiltVoiceConfig"]);
  return n != null && s(e, ["prebuiltVoiceConfig"], lo(n)), e;
}
function ao(t) {
  const e = {}, n = o(t, ["speaker"]);
  n != null && s(e, ["speaker"], n);
  const i = o(t, ["voiceConfig"]);
  return i != null && s(e, ["voiceConfig"], rn(i)), e;
}
function uo(t) {
  const e = {}, n = o(t, ["speakerVoiceConfigs"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => ao(r))), s(e, ["speakerVoiceConfigs"], i);
  }
  return e;
}
function fo(t) {
  const e = {}, n = o(t, ["voiceConfig"]);
  n != null && s(e, ["voiceConfig"], rn(n));
  const i = o(t, ["multiSpeakerVoiceConfig"]);
  i != null && s(e, ["multiSpeakerVoiceConfig"], uo(i));
  const r = o(t, ["languageCode"]);
  return r != null && s(e, ["languageCode"], r), e;
}
function co(t) {
  const e = {}, n = o(t, ["includeThoughts"]);
  n != null && s(e, ["includeThoughts"], n);
  const i = o(t, ["thinkingBudget"]);
  return i != null && s(e, ["thinkingBudget"], i), e;
}
function po(t, e, n) {
  const i = {}, r = o(e, ["systemInstruction"]);
  n !== void 0 && r != null && s(n, ["systemInstruction"], sn(w(r)));
  const l = o(e, ["temperature"]);
  l != null && s(i, ["temperature"], l);
  const a = o(e, ["topP"]);
  a != null && s(i, ["topP"], a);
  const f = o(e, ["topK"]);
  f != null && s(i, ["topK"], f);
  const c = o(e, ["candidateCount"]);
  c != null && s(i, ["candidateCount"], c);
  const u = o(e, ["maxOutputTokens"]);
  u != null && s(i, ["maxOutputTokens"], u);
  const d = o(e, ["stopSequences"]);
  d != null && s(i, ["stopSequences"], d);
  const p = o(e, ["responseLogprobs"]);
  p != null && s(i, ["responseLogprobs"], p);
  const m = o(e, ["logprobs"]);
  m != null && s(i, ["logprobs"], m);
  const g = o(e, ["presencePenalty"]);
  g != null && s(i, ["presencePenalty"], g);
  const h = o(e, ["frequencyPenalty"]);
  h != null && s(i, ["frequencyPenalty"], h);
  const v = o(e, ["seed"]);
  v != null && s(i, ["seed"], v);
  const T = o(e, ["responseMimeType"]);
  T != null && s(i, ["responseMimeType"], T);
  const E = o(e, ["responseSchema"]);
  E != null && s(i, ["responseSchema"], Xn(_e(E)));
  const y = o(e, ["responseJsonSchema"]);
  if (y != null && s(i, ["responseJsonSchema"], y), o(e, ["routingConfig"]) !== void 0) throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (o(e, ["modelSelectionConfig"]) !== void 0) throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  const S = o(e, ["safetySettings"]);
  if (n !== void 0 && S != null) {
    let P = S;
    Array.isArray(P) && (P = P.map((L) => Qn(L))), s(n, ["safetySettings"], P);
  }
  const A = o(e, ["tools"]);
  if (n !== void 0 && A != null) {
    let P = z(A);
    Array.isArray(P) && (P = P.map((L) => no(K(L)))), s(n, ["tools"], P);
  }
  const _ = o(e, ["toolConfig"]);
  if (n !== void 0 && _ != null && s(n, ["toolConfig"], ro(_)), o(e, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
  const I = o(e, ["cachedContent"]);
  n !== void 0 && I != null && s(n, ["cachedContent"], k(t, I));
  const R = o(e, ["responseModalities"]);
  R != null && s(i, ["responseModalities"], R);
  const U = o(e, ["mediaResolution"]);
  U != null && s(i, ["mediaResolution"], U);
  const M = o(e, ["speechConfig"]);
  if (M != null && s(i, ["speechConfig"], fo(Ae(M))), o(e, ["audioTimestamp"]) !== void 0) throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const D = o(e, ["thinkingConfig"]);
  return D != null && s(i, ["thinkingConfig"], co(D)), i;
}
function mo(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["request", "model"], x(t, i));
  const r = o(e, ["contents"]);
  if (r != null) {
    let a = F(r);
    Array.isArray(a) && (a = a.map((f) => sn(f))), s(n, ["request", "contents"], a);
  }
  const l = o(e, ["config"]);
  return l != null && s(n, ["request", "generationConfig"], po(t, l, n)), n;
}
function go(t, e) {
  const n = {};
  if (o(e, ["format"]) !== void 0) throw new Error("format parameter is not supported in Gemini API.");
  if (o(e, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (o(e, ["bigqueryUri"]) !== void 0) throw new Error("bigqueryUri parameter is not supported in Gemini API.");
  const i = o(e, ["fileName"]);
  i != null && s(n, ["fileName"], i);
  const r = o(e, ["inlinedRequests"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => mo(t, a))), s(n, ["requests", "requests"], l);
  }
  return n;
}
function ho(t, e) {
  const n = {}, i = o(t, ["displayName"]);
  if (e !== void 0 && i != null && s(e, ["batch", "displayName"], i), o(t, ["dest"]) !== void 0) throw new Error("dest parameter is not supported in Gemini API.");
  return n;
}
function vo(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["src"]);
  r != null && s(n, ["batch", "inputConfig"], go(t, nn(t, r)));
  const l = o(e, ["config"]);
  return l != null && s(n, ["config"], ho(l, n)), n;
}
function To(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], X(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function Co(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], X(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function yo(t, e) {
  const n = {}, i = o(t, ["pageSize"]);
  e !== void 0 && i != null && s(e, ["_query", "pageSize"], i);
  const r = o(t, ["pageToken"]);
  if (e !== void 0 && r != null && s(e, ["_query", "pageToken"], r), o(t, ["filter"]) !== void 0) throw new Error("filter parameter is not supported in Gemini API.");
  return n;
}
function Eo(t) {
  const e = {}, n = o(t, ["config"]);
  return n != null && s(e, ["config"], yo(n, e)), e;
}
function So(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], X(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function _o(t) {
  const e = {}, n = o(t, ["format"]);
  n != null && s(e, ["instancesFormat"], n);
  const i = o(t, ["gcsUri"]);
  i != null && s(e, ["gcsSource", "uris"], i);
  const r = o(t, ["bigqueryUri"]);
  if (r != null && s(e, ["bigquerySource", "inputUri"], r), o(t, ["fileName"]) !== void 0) throw new Error("fileName parameter is not supported in Vertex AI.");
  if (o(t, ["inlinedRequests"]) !== void 0) throw new Error("inlinedRequests parameter is not supported in Vertex AI.");
  return e;
}
function Ao(t) {
  const e = {}, n = o(t, ["format"]);
  n != null && s(e, ["predictionsFormat"], n);
  const i = o(t, ["gcsUri"]);
  i != null && s(e, ["gcsDestination", "outputUriPrefix"], i);
  const r = o(t, ["bigqueryUri"]);
  if (r != null && s(e, ["bigqueryDestination", "outputUri"], r), o(t, ["fileName"]) !== void 0) throw new Error("fileName parameter is not supported in Vertex AI.");
  if (o(t, ["inlinedResponses"]) !== void 0) throw new Error("inlinedResponses parameter is not supported in Vertex AI.");
  return e;
}
function Mo(t, e) {
  const n = {}, i = o(t, ["displayName"]);
  e !== void 0 && i != null && s(e, ["displayName"], i);
  const r = o(t, ["dest"]);
  return e !== void 0 && r != null && s(e, ["outputConfig"], Ao($n(r))), n;
}
function Io(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["model"], x(t, i));
  const r = o(e, ["src"]);
  r != null && s(n, ["inputConfig"], _o(nn(t, r)));
  const l = o(e, ["config"]);
  return l != null && s(n, ["config"], Mo(l, n)), n;
}
function Ro(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], X(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function Po(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], X(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function xo(t, e) {
  const n = {}, i = o(t, ["pageSize"]);
  e !== void 0 && i != null && s(e, ["_query", "pageSize"], i);
  const r = o(t, ["pageToken"]);
  e !== void 0 && r != null && s(e, ["_query", "pageToken"], r);
  const l = o(t, ["filter"]);
  return e !== void 0 && l != null && s(e, ["_query", "filter"], l), n;
}
function Do(t) {
  const e = {}, n = o(t, ["config"]);
  return n != null && s(e, ["config"], xo(n, e)), e;
}
function No(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], X(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function wo(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function Uo(t) {
  const e = {}, n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Fo(t) {
  const e = {}, n = o(t, ["fileUri"]);
  n != null && s(e, ["fileUri"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Lo(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], wo(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], Uo(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], Fo(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function Vo(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Lo(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function ko(t) {
  const e = {}, n = o(t, ["citationSources"]);
  return n != null && s(e, ["citations"], n), e;
}
function Go(t) {
  const e = {}, n = o(t, ["retrievedUrl"]);
  n != null && s(e, ["retrievedUrl"], n);
  const i = o(t, ["urlRetrievalStatus"]);
  return i != null && s(e, ["urlRetrievalStatus"], i), e;
}
function qo(t) {
  const e = {}, n = o(t, ["urlMetadata"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Go(r))), s(e, ["urlMetadata"], i);
  }
  return e;
}
function Bo(t) {
  const e = {}, n = o(t, ["content"]);
  n != null && s(e, ["content"], Vo(n));
  const i = o(t, ["citationMetadata"]);
  i != null && s(e, ["citationMetadata"], ko(i));
  const r = o(t, ["tokenCount"]);
  r != null && s(e, ["tokenCount"], r);
  const l = o(t, ["finishReason"]);
  l != null && s(e, ["finishReason"], l);
  const a = o(t, ["urlContextMetadata"]);
  a != null && s(e, ["urlContextMetadata"], qo(a));
  const f = o(t, ["avgLogprobs"]);
  f != null && s(e, ["avgLogprobs"], f);
  const c = o(t, ["groundingMetadata"]);
  c != null && s(e, ["groundingMetadata"], c);
  const u = o(t, ["index"]);
  u != null && s(e, ["index"], u);
  const d = o(t, ["logprobsResult"]);
  d != null && s(e, ["logprobsResult"], d);
  const p = o(t, ["safetyRatings"]);
  return p != null && s(e, ["safetyRatings"], p), e;
}
function Jo(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["candidates"]);
  if (i != null) {
    let f = i;
    Array.isArray(f) && (f = f.map((c) => Bo(c))), s(e, ["candidates"], f);
  }
  const r = o(t, ["modelVersion"]);
  r != null && s(e, ["modelVersion"], r);
  const l = o(t, ["promptFeedback"]);
  l != null && s(e, ["promptFeedback"], l);
  const a = o(t, ["usageMetadata"]);
  return a != null && s(e, ["usageMetadata"], a), e;
}
function ln(t) {
  const e = {}, n = o(t, ["details"]);
  n != null && s(e, ["details"], n);
  const i = o(t, ["code"]);
  i != null && s(e, ["code"], i);
  const r = o(t, ["message"]);
  return r != null && s(e, ["message"], r), e;
}
function Ho(t) {
  const e = {}, n = o(t, ["response"]);
  n != null && s(e, ["response"], Jo(n));
  const i = o(t, ["error"]);
  return i != null && s(e, ["error"], ln(i)), e;
}
function $o(t) {
  const e = {}, n = o(t, ["responsesFile"]);
  n != null && s(e, ["fileName"], n);
  const i = o(t, ["inlinedResponses", "inlinedResponses"]);
  if (i != null) {
    let r = i;
    Array.isArray(r) && (r = r.map((l) => Ho(l))), s(e, ["inlinedResponses"], r);
  }
  return e;
}
function ge(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["metadata", "displayName"]);
  i != null && s(e, ["displayName"], i);
  const r = o(t, ["metadata", "state"]);
  r != null && s(e, ["state"], on(r));
  const l = o(t, ["metadata", "createTime"]);
  l != null && s(e, ["createTime"], l);
  const a = o(t, ["metadata", "endTime"]);
  a != null && s(e, ["endTime"], a);
  const f = o(t, ["metadata", "updateTime"]);
  f != null && s(e, ["updateTime"], f);
  const c = o(t, ["metadata", "model"]);
  c != null && s(e, ["model"], c);
  const u = o(t, ["metadata", "output"]);
  return u != null && s(e, ["dest"], $o(u)), e;
}
function Wo(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["operations"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => ge(a))), s(e, ["batchJobs"], l);
  }
  return e;
}
function Yo(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["done"]);
  i != null && s(e, ["done"], i);
  const r = o(t, ["error"]);
  return r != null && s(e, ["error"], ln(r)), e;
}
function an(t) {
  const e = {}, n = o(t, ["details"]);
  n != null && s(e, ["details"], n);
  const i = o(t, ["code"]);
  i != null && s(e, ["code"], i);
  const r = o(t, ["message"]);
  return r != null && s(e, ["message"], r), e;
}
function Ko(t) {
  const e = {}, n = o(t, ["instancesFormat"]);
  n != null && s(e, ["format"], n);
  const i = o(t, ["gcsSource", "uris"]);
  i != null && s(e, ["gcsUri"], i);
  const r = o(t, ["bigquerySource", "inputUri"]);
  return r != null && s(e, ["bigqueryUri"], r), e;
}
function zo(t) {
  const e = {}, n = o(t, ["predictionsFormat"]);
  n != null && s(e, ["format"], n);
  const i = o(t, ["gcsDestination", "outputUriPrefix"]);
  i != null && s(e, ["gcsUri"], i);
  const r = o(t, ["bigqueryDestination", "outputUri"]);
  return r != null && s(e, ["bigqueryUri"], r), e;
}
function he(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["displayName"]);
  i != null && s(e, ["displayName"], i);
  const r = o(t, ["state"]);
  r != null && s(e, ["state"], on(r));
  const l = o(t, ["error"]);
  l != null && s(e, ["error"], an(l));
  const a = o(t, ["createTime"]);
  a != null && s(e, ["createTime"], a);
  const f = o(t, ["startTime"]);
  f != null && s(e, ["startTime"], f);
  const c = o(t, ["endTime"]);
  c != null && s(e, ["endTime"], c);
  const u = o(t, ["updateTime"]);
  u != null && s(e, ["updateTime"], u);
  const d = o(t, ["model"]);
  d != null && s(e, ["model"], d);
  const p = o(t, ["inputConfig"]);
  p != null && s(e, ["src"], Ko(p));
  const m = o(t, ["outputConfig"]);
  return m != null && s(e, ["dest"], zo(m)), e;
}
function Xo(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["batchPredictionJobs"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => he(a))), s(e, ["batchJobs"], l);
  }
  return e;
}
function Qo(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["done"]);
  i != null && s(e, ["done"], i);
  const r = o(t, ["error"]);
  return r != null && s(e, ["error"], an(r)), e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
var q;
(function(t) {
  t.PAGED_ITEM_BATCH_JOBS = "batchJobs", t.PAGED_ITEM_MODELS = "models", t.PAGED_ITEM_TUNING_JOBS = "tuningJobs", t.PAGED_ITEM_FILES = "files", t.PAGED_ITEM_CACHED_CONTENTS = "cachedContents";
})(q || (q = {}));
class O {
  constructor(e, n, i, r) {
    this.pageInternal = [], this.paramsInternal = {}, this.requestInternal = n, this.init(e, i, r);
  }
  init(e, n, i) {
    var r, l;
    this.nameInternal = e, this.pageInternal = n[this.nameInternal] || [], this.sdkHttpResponseInternal = n == null ? void 0 : n.sdkHttpResponse, this.idxInternal = 0;
    let a = { config: {} };
    !i || Object.keys(i).length === 0 ? a = { config: {} } : typeof i == "object" ? a = Object.assign({}, i) : a = i, a.config && (a.config.pageToken = n.nextPageToken), this.paramsInternal = a, this.pageInternalSize = (l = (r = a.config) === null || r === void 0 ? void 0 : r.pageSize) !== null && l !== void 0 ? l : this.pageInternal.length;
  }
  initNextPage(e) {
    this.init(this.nameInternal, e, this.paramsInternal);
  }
  get page() {
    return this.pageInternal;
  }
  get name() {
    return this.nameInternal;
  }
  get pageSize() {
    return this.pageInternalSize;
  }
  get sdkHttpResponse() {
    return this.sdkHttpResponseInternal;
  }
  get params() {
    return this.paramsInternal;
  }
  get pageLength() {
    return this.pageInternal.length;
  }
  getItem(e) {
    return this.pageInternal[e];
  }
  [Symbol.asyncIterator]() {
    return { next: async () => {
      if (this.idxInternal >= this.pageLength) if (this.hasNextPage()) await this.nextPage();
      else return { value: void 0, done: true };
      const e = this.getItem(this.idxInternal);
      return this.idxInternal += 1, { value: e, done: false };
    }, return: async () => ({ value: void 0, done: true }) };
  }
  async nextPage() {
    if (!this.hasNextPage()) throw new Error("No more pages to fetch.");
    const e = await this.requestInternal(this.params);
    return this.initNextPage(e), this.page;
  }
  hasNextPage() {
    var e;
    return ((e = this.params.config) === null || e === void 0 ? void 0 : e.pageToken) !== void 0;
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class Zo extends B {
  constructor(e) {
    super(), this.apiClient = e, this.create = async (n) => {
      if (this.apiClient.isVertexAI()) {
        const r = Date.now().toString();
        if (Array.isArray(n.src)) throw new Error("InlinedRequest[] is not supported in Vertex AI. Please use Google Cloud Storage URI or BigQuery URI instead.");
        if (n.config = n.config || {}, n.config.displayName === void 0 && (n.config.displayName = "genaiBatchJob_${timestampStr}"), n.config.dest === void 0 && typeof n.src == "string") if (n.src.startsWith("gs://") && n.src.endsWith(".jsonl")) n.config.dest = `${n.src.slice(0, -6)}/dest`;
        else if (n.src.startsWith("bq://")) n.config.dest = `${n.src}_dest_${r}`;
        else throw new Error("Unsupported source:" + n.src);
      }
      return await this.createInternal(n);
    }, this.list = async (n = {}) => new O(q.PAGED_ITEM_BATCH_JOBS, (i) => this.listInternal(i), await this.listInternal(n), n);
  }
  async createInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Io(this.apiClient, e);
      return f = C("batchPredictionJobs", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => he(d));
    } else {
      const u = vo(this.apiClient, e);
      return f = C("{model}:batchGenerateContent", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => ge(d));
    }
  }
  async get(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Ro(this.apiClient, e);
      return f = C("batchPredictionJobs/{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => he(d));
    } else {
      const u = To(this.apiClient, e);
      return f = C("batches/{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => ge(d));
    }
  }
  async cancel(e) {
    var n, i, r, l;
    let a = "", f = {};
    if (this.apiClient.isVertexAI()) {
      const c = Po(this.apiClient, e);
      a = C("batchPredictionJobs/{name}:cancel", c._url), f = c._query, delete c.config, delete c._url, delete c._query, await this.apiClient.request({ path: a, queryParams: f, body: JSON.stringify(c), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal });
    } else {
      const c = Co(this.apiClient, e);
      a = C("batches/{name}:cancel", c._url), f = c._query, delete c.config, delete c._url, delete c._query, await this.apiClient.request({ path: a, queryParams: f, body: JSON.stringify(c), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal });
    }
  }
  async listInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Do(e);
      return f = C("batchPredictionJobs", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = Xo(d), m = new _t();
        return Object.assign(m, p), m;
      });
    } else {
      const u = Eo(e);
      return f = C("batches", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = Wo(d), m = new _t();
        return Object.assign(m, p), m;
      });
    }
  }
  async delete(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = No(this.apiClient, e);
      return f = C("batchPredictionJobs/{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "DELETE", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => Qo(d));
    } else {
      const u = So(this.apiClient, e);
      return f = C("batches/{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "DELETE", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => Yo(d));
    }
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function bo(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function Oo(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function jo(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["fileUri"]);
  n != null && s(e, ["fileUri"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function ei(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], bo(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], Oo(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], jo(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function Rt(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => ei(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function ti(t) {
  const e = {}, n = o(t, ["behavior"]);
  n != null && s(e, ["behavior"], n);
  const i = o(t, ["description"]);
  i != null && s(e, ["description"], i);
  const r = o(t, ["name"]);
  r != null && s(e, ["name"], r);
  const l = o(t, ["parameters"]);
  l != null && s(e, ["parameters"], l);
  const a = o(t, ["parametersJsonSchema"]);
  a != null && s(e, ["parametersJsonSchema"], a);
  const f = o(t, ["response"]);
  f != null && s(e, ["response"], f);
  const c = o(t, ["responseJsonSchema"]);
  return c != null && s(e, ["responseJsonSchema"], c), e;
}
function ni(t) {
  const e = {}, n = o(t, ["startTime"]);
  n != null && s(e, ["startTime"], n);
  const i = o(t, ["endTime"]);
  return i != null && s(e, ["endTime"], i), e;
}
function oi(t) {
  const e = {}, n = o(t, ["timeRangeFilter"]);
  return n != null && s(e, ["timeRangeFilter"], ni(n)), e;
}
function ii(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["dynamicThreshold"]);
  return i != null && s(e, ["dynamicThreshold"], i), e;
}
function si(t) {
  const e = {}, n = o(t, ["dynamicRetrievalConfig"]);
  return n != null && s(e, ["dynamicRetrievalConfig"], ii(n)), e;
}
function ri() {
  return {};
}
function li(t) {
  const e = {}, n = o(t, ["functionDeclarations"]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((u) => ti(u))), s(e, ["functionDeclarations"], c);
  }
  if (o(t, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = o(t, ["googleSearch"]);
  i != null && s(e, ["googleSearch"], oi(i));
  const r = o(t, ["googleSearchRetrieval"]);
  if (r != null && s(e, ["googleSearchRetrieval"], si(r)), o(t, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  if (o(t, ["googleMaps"]) !== void 0) throw new Error("googleMaps parameter is not supported in Gemini API.");
  o(t, ["urlContext"]) != null && s(e, ["urlContext"], ri());
  const a = o(t, ["codeExecution"]);
  a != null && s(e, ["codeExecution"], a);
  const f = o(t, ["computerUse"]);
  return f != null && s(e, ["computerUse"], f), e;
}
function ai(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["allowedFunctionNames"]);
  return i != null && s(e, ["allowedFunctionNames"], i), e;
}
function ui(t) {
  const e = {}, n = o(t, ["latitude"]);
  n != null && s(e, ["latitude"], n);
  const i = o(t, ["longitude"]);
  return i != null && s(e, ["longitude"], i), e;
}
function fi(t) {
  const e = {}, n = o(t, ["latLng"]);
  n != null && s(e, ["latLng"], ui(n));
  const i = o(t, ["languageCode"]);
  return i != null && s(e, ["languageCode"], i), e;
}
function ci(t) {
  const e = {}, n = o(t, ["functionCallingConfig"]);
  n != null && s(e, ["functionCallingConfig"], ai(n));
  const i = o(t, ["retrievalConfig"]);
  return i != null && s(e, ["retrievalConfig"], fi(i)), e;
}
function di(t, e) {
  const n = {}, i = o(t, ["ttl"]);
  e !== void 0 && i != null && s(e, ["ttl"], i);
  const r = o(t, ["expireTime"]);
  e !== void 0 && r != null && s(e, ["expireTime"], r);
  const l = o(t, ["displayName"]);
  e !== void 0 && l != null && s(e, ["displayName"], l);
  const a = o(t, ["contents"]);
  if (e !== void 0 && a != null) {
    let d = F(a);
    Array.isArray(d) && (d = d.map((p) => Rt(p))), s(e, ["contents"], d);
  }
  const f = o(t, ["systemInstruction"]);
  e !== void 0 && f != null && s(e, ["systemInstruction"], Rt(w(f)));
  const c = o(t, ["tools"]);
  if (e !== void 0 && c != null) {
    let d = c;
    Array.isArray(d) && (d = d.map((p) => li(p))), s(e, ["tools"], d);
  }
  const u = o(t, ["toolConfig"]);
  if (e !== void 0 && u != null && s(e, ["toolConfig"], ci(u)), o(t, ["kmsKeyName"]) !== void 0) throw new Error("kmsKeyName parameter is not supported in Gemini API.");
  return n;
}
function pi(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["model"], Kt(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], di(r, n)), n;
}
function mi(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], k(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function gi(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], k(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function hi(t, e) {
  const n = {}, i = o(t, ["ttl"]);
  e !== void 0 && i != null && s(e, ["ttl"], i);
  const r = o(t, ["expireTime"]);
  return e !== void 0 && r != null && s(e, ["expireTime"], r), n;
}
function vi(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], k(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], hi(r, n)), n;
}
function Ti(t, e) {
  const n = {}, i = o(t, ["pageSize"]);
  e !== void 0 && i != null && s(e, ["_query", "pageSize"], i);
  const r = o(t, ["pageToken"]);
  return e !== void 0 && r != null && s(e, ["_query", "pageToken"], r), n;
}
function Ci(t) {
  const e = {}, n = o(t, ["config"]);
  return n != null && s(e, ["config"], Ti(n, e)), e;
}
function yi(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function Ei(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["data"]);
  i != null && s(e, ["data"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Si(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["fileUri"]);
  i != null && s(e, ["fileUri"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function _i(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], yi(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], Ei(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], Si(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function Pt(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => _i(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function Ai(t) {
  const e = {};
  if (o(t, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
  const n = o(t, ["description"]);
  n != null && s(e, ["description"], n);
  const i = o(t, ["name"]);
  i != null && s(e, ["name"], i);
  const r = o(t, ["parameters"]);
  r != null && s(e, ["parameters"], r);
  const l = o(t, ["parametersJsonSchema"]);
  l != null && s(e, ["parametersJsonSchema"], l);
  const a = o(t, ["response"]);
  a != null && s(e, ["response"], a);
  const f = o(t, ["responseJsonSchema"]);
  return f != null && s(e, ["responseJsonSchema"], f), e;
}
function Mi(t) {
  const e = {}, n = o(t, ["startTime"]);
  n != null && s(e, ["startTime"], n);
  const i = o(t, ["endTime"]);
  return i != null && s(e, ["endTime"], i), e;
}
function Ii(t) {
  const e = {}, n = o(t, ["timeRangeFilter"]);
  return n != null && s(e, ["timeRangeFilter"], Mi(n)), e;
}
function Ri(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["dynamicThreshold"]);
  return i != null && s(e, ["dynamicThreshold"], i), e;
}
function Pi(t) {
  const e = {}, n = o(t, ["dynamicRetrievalConfig"]);
  return n != null && s(e, ["dynamicRetrievalConfig"], Ri(n)), e;
}
function xi() {
  return {};
}
function Di(t) {
  const e = {}, n = o(t, ["apiKeyString"]);
  return n != null && s(e, ["apiKeyString"], n), e;
}
function Ni(t) {
  const e = {}, n = o(t, ["apiKeyConfig"]);
  n != null && s(e, ["apiKeyConfig"], Di(n));
  const i = o(t, ["authType"]);
  i != null && s(e, ["authType"], i);
  const r = o(t, ["googleServiceAccountConfig"]);
  r != null && s(e, ["googleServiceAccountConfig"], r);
  const l = o(t, ["httpBasicAuthConfig"]);
  l != null && s(e, ["httpBasicAuthConfig"], l);
  const a = o(t, ["oauthConfig"]);
  a != null && s(e, ["oauthConfig"], a);
  const f = o(t, ["oidcConfig"]);
  return f != null && s(e, ["oidcConfig"], f), e;
}
function wi(t) {
  const e = {}, n = o(t, ["authConfig"]);
  return n != null && s(e, ["authConfig"], Ni(n)), e;
}
function Ui() {
  return {};
}
function Fi(t) {
  const e = {}, n = o(t, ["functionDeclarations"]);
  if (n != null) {
    let p = n;
    Array.isArray(p) && (p = p.map((m) => Ai(m))), s(e, ["functionDeclarations"], p);
  }
  const i = o(t, ["retrieval"]);
  i != null && s(e, ["retrieval"], i);
  const r = o(t, ["googleSearch"]);
  r != null && s(e, ["googleSearch"], Ii(r));
  const l = o(t, ["googleSearchRetrieval"]);
  l != null && s(e, ["googleSearchRetrieval"], Pi(l)), o(t, ["enterpriseWebSearch"]) != null && s(e, ["enterpriseWebSearch"], xi());
  const f = o(t, ["googleMaps"]);
  f != null && s(e, ["googleMaps"], wi(f)), o(t, ["urlContext"]) != null && s(e, ["urlContext"], Ui());
  const u = o(t, ["codeExecution"]);
  u != null && s(e, ["codeExecution"], u);
  const d = o(t, ["computerUse"]);
  return d != null && s(e, ["computerUse"], d), e;
}
function Li(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["allowedFunctionNames"]);
  return i != null && s(e, ["allowedFunctionNames"], i), e;
}
function Vi(t) {
  const e = {}, n = o(t, ["latitude"]);
  n != null && s(e, ["latitude"], n);
  const i = o(t, ["longitude"]);
  return i != null && s(e, ["longitude"], i), e;
}
function ki(t) {
  const e = {}, n = o(t, ["latLng"]);
  n != null && s(e, ["latLng"], Vi(n));
  const i = o(t, ["languageCode"]);
  return i != null && s(e, ["languageCode"], i), e;
}
function Gi(t) {
  const e = {}, n = o(t, ["functionCallingConfig"]);
  n != null && s(e, ["functionCallingConfig"], Li(n));
  const i = o(t, ["retrievalConfig"]);
  return i != null && s(e, ["retrievalConfig"], ki(i)), e;
}
function qi(t, e) {
  const n = {}, i = o(t, ["ttl"]);
  e !== void 0 && i != null && s(e, ["ttl"], i);
  const r = o(t, ["expireTime"]);
  e !== void 0 && r != null && s(e, ["expireTime"], r);
  const l = o(t, ["displayName"]);
  e !== void 0 && l != null && s(e, ["displayName"], l);
  const a = o(t, ["contents"]);
  if (e !== void 0 && a != null) {
    let p = F(a);
    Array.isArray(p) && (p = p.map((m) => Pt(m))), s(e, ["contents"], p);
  }
  const f = o(t, ["systemInstruction"]);
  e !== void 0 && f != null && s(e, ["systemInstruction"], Pt(w(f)));
  const c = o(t, ["tools"]);
  if (e !== void 0 && c != null) {
    let p = c;
    Array.isArray(p) && (p = p.map((m) => Fi(m))), s(e, ["tools"], p);
  }
  const u = o(t, ["toolConfig"]);
  e !== void 0 && u != null && s(e, ["toolConfig"], Gi(u));
  const d = o(t, ["kmsKeyName"]);
  return e !== void 0 && d != null && s(e, ["encryption_spec", "kmsKeyName"], d), n;
}
function Bi(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["model"], Kt(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], qi(r, n)), n;
}
function Ji(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], k(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function Hi(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], k(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function $i(t, e) {
  const n = {}, i = o(t, ["ttl"]);
  e !== void 0 && i != null && s(e, ["ttl"], i);
  const r = o(t, ["expireTime"]);
  return e !== void 0 && r != null && s(e, ["expireTime"], r), n;
}
function Wi(t, e) {
  const n = {}, i = o(e, ["name"]);
  i != null && s(n, ["_url", "name"], k(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], $i(r, n)), n;
}
function Yi(t, e) {
  const n = {}, i = o(t, ["pageSize"]);
  e !== void 0 && i != null && s(e, ["_query", "pageSize"], i);
  const r = o(t, ["pageToken"]);
  return e !== void 0 && r != null && s(e, ["_query", "pageToken"], r), n;
}
function Ki(t) {
  const e = {}, n = o(t, ["config"]);
  return n != null && s(e, ["config"], Yi(n, e)), e;
}
function te(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["displayName"]);
  i != null && s(e, ["displayName"], i);
  const r = o(t, ["model"]);
  r != null && s(e, ["model"], r);
  const l = o(t, ["createTime"]);
  l != null && s(e, ["createTime"], l);
  const a = o(t, ["updateTime"]);
  a != null && s(e, ["updateTime"], a);
  const f = o(t, ["expireTime"]);
  f != null && s(e, ["expireTime"], f);
  const c = o(t, ["usageMetadata"]);
  return c != null && s(e, ["usageMetadata"], c), e;
}
function zi() {
  return {};
}
function Xi(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["cachedContents"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => te(a))), s(e, ["cachedContents"], l);
  }
  return e;
}
function ne(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["displayName"]);
  i != null && s(e, ["displayName"], i);
  const r = o(t, ["model"]);
  r != null && s(e, ["model"], r);
  const l = o(t, ["createTime"]);
  l != null && s(e, ["createTime"], l);
  const a = o(t, ["updateTime"]);
  a != null && s(e, ["updateTime"], a);
  const f = o(t, ["expireTime"]);
  f != null && s(e, ["expireTime"], f);
  const c = o(t, ["usageMetadata"]);
  return c != null && s(e, ["usageMetadata"], c), e;
}
function Qi() {
  return {};
}
function Zi(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["cachedContents"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => ne(a))), s(e, ["cachedContents"], l);
  }
  return e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class bi extends B {
  constructor(e) {
    super(), this.apiClient = e, this.list = async (n = {}) => new O(q.PAGED_ITEM_CACHED_CONTENTS, (i) => this.listInternal(i), await this.listInternal(n), n);
  }
  async create(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Bi(this.apiClient, e);
      return f = C("cachedContents", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => ne(d));
    } else {
      const u = pi(this.apiClient, e);
      return f = C("cachedContents", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => te(d));
    }
  }
  async get(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Ji(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => ne(d));
    } else {
      const u = mi(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => te(d));
    }
  }
  async delete(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Hi(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "DELETE", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then(() => {
        const d = Qi(), p = new Et();
        return Object.assign(p, d), p;
      });
    } else {
      const u = gi(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "DELETE", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then(() => {
        const d = zi(), p = new Et();
        return Object.assign(p, d), p;
      });
    }
  }
  async update(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Wi(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "PATCH", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => ne(d));
    } else {
      const u = vi(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "PATCH", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => te(d));
    }
  }
  async listInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Ki(e);
      return f = C("cachedContents", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = Zi(d), m = new St();
        return Object.assign(m, p), m;
      });
    } else {
      const u = Ci(e);
      return f = C("cachedContents", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = Xi(d), m = new St();
        return Object.assign(m, p), m;
      });
    }
  }
}
function xt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], i = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return { next: function() {
    return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
  } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function N(t) {
  return this instanceof N ? (this.v = t, this) : new N(t);
}
function W(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(t, e || []), r, l = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), f("next"), f("throw"), f("return", a), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function a(g) {
    return function(h) {
      return Promise.resolve(h).then(g, p);
    };
  }
  function f(g, h) {
    i[g] && (r[g] = function(v) {
      return new Promise(function(T, E) {
        l.push([g, v, T, E]) > 1 || c(g, v);
      });
    }, h && (r[g] = h(r[g])));
  }
  function c(g, h) {
    try {
      u(i[g](h));
    } catch (v) {
      m(l[0][3], v);
    }
  }
  function u(g) {
    g.value instanceof N ? Promise.resolve(g.value.v).then(d, p) : m(l[0][2], g);
  }
  function d(g) {
    c("next", g);
  }
  function p(g) {
    c("throw", g);
  }
  function m(g, h) {
    g(h), l.shift(), l.length && c(l[0][0], l[0][1]);
  }
}
function b(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof xt == "function" ? xt(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function i(l) {
    n[l] = t[l] && function(a) {
      return new Promise(function(f, c) {
        a = t[l](a), r(f, c, a.done, a.value);
      });
    };
  }
  function r(l, a, f, c) {
    Promise.resolve(c).then(function(u) {
      l({ value: u, done: f });
    }, a);
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Oi(t) {
  var e;
  if (t.candidates == null || t.candidates.length === 0) return false;
  const n = (e = t.candidates[0]) === null || e === void 0 ? void 0 : e.content;
  return n === void 0 ? false : un(n);
}
function un(t) {
  if (t.parts === void 0 || t.parts.length === 0) return false;
  for (const e of t.parts) if (e === void 0 || Object.keys(e).length === 0 || !e.thought && e.text !== void 0 && e.text === "") return false;
  return true;
}
function ji(t) {
  if (t.length !== 0) {
    for (const e of t) if (e.role !== "user" && e.role !== "model") throw new Error(`Role must be user or model, but got ${e.role}.`);
  }
}
function Dt(t) {
  if (t === void 0 || t.length === 0) return [];
  const e = [], n = t.length;
  let i = 0;
  for (; i < n; ) if (t[i].role === "user") e.push(t[i]), i++;
  else {
    const r = [];
    let l = true;
    for (; i < n && t[i].role === "model"; ) r.push(t[i]), l && !un(t[i]) && (l = false), i++;
    l ? e.push(...r) : e.pop();
  }
  return e;
}
class es {
  constructor(e, n) {
    this.modelsModule = e, this.apiClient = n;
  }
  create(e) {
    return new ts(this.apiClient, this.modelsModule, e.model, e.config, structuredClone(e.history));
  }
}
class ts {
  constructor(e, n, i, r = {}, l = []) {
    this.apiClient = e, this.modelsModule = n, this.model = i, this.config = r, this.history = l, this.sendPromise = Promise.resolve(), ji(l);
  }
  async sendMessage(e) {
    var n;
    await this.sendPromise;
    const i = w(e.message), r = this.modelsModule.generateContent({ model: this.model, contents: this.getHistory(true).concat(i), config: (n = e.config) !== null && n !== void 0 ? n : this.config });
    return this.sendPromise = (async () => {
      var l, a, f;
      const c = await r, u = (a = (l = c.candidates) === null || l === void 0 ? void 0 : l[0]) === null || a === void 0 ? void 0 : a.content, d = c.automaticFunctionCallingHistory, p = this.getHistory(true).length;
      let m = [];
      d != null && (m = (f = d.slice(p)) !== null && f !== void 0 ? f : []);
      const g = u ? [u] : [];
      this.recordHistory(i, g, m);
    })(), await this.sendPromise.catch(() => {
      this.sendPromise = Promise.resolve();
    }), r;
  }
  async sendMessageStream(e) {
    var n;
    await this.sendPromise;
    const i = w(e.message), r = this.modelsModule.generateContentStream({ model: this.model, contents: this.getHistory(true).concat(i), config: (n = e.config) !== null && n !== void 0 ? n : this.config });
    this.sendPromise = r.then(() => {
    }).catch(() => {
    });
    const l = await r;
    return this.processStreamResponse(l, i);
  }
  getHistory(e = false) {
    const n = e ? Dt(this.history) : this.history;
    return structuredClone(n);
  }
  processStreamResponse(e, n) {
    var i, r;
    return W(this, arguments, function* () {
      var a, f, c, u;
      const d = [];
      try {
        for (var p = true, m = b(e), g; g = yield N(m.next()), a = g.done, !a; p = true) {
          u = g.value, p = false;
          const h = u;
          if (Oi(h)) {
            const v = (r = (i = h.candidates) === null || i === void 0 ? void 0 : i[0]) === null || r === void 0 ? void 0 : r.content;
            v !== void 0 && d.push(v);
          }
          yield yield N(h);
        }
      } catch (h) {
        f = { error: h };
      } finally {
        try {
          !p && !a && (c = m.return) && (yield N(c.call(m)));
        } finally {
          if (f) throw f.error;
        }
      }
      this.recordHistory(n, d);
    });
  }
  recordHistory(e, n, i) {
    let r = [];
    n.length > 0 && n.every((l) => l.role !== void 0) ? r = n : r.push({ role: "model", parts: [] }), i && i.length > 0 ? this.history.push(...Dt(i)) : this.history.push(e), this.history.push(...r);
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class re extends Error {
  constructor(e) {
    super(e.message), this.name = "ApiError", this.status = e.status, Object.setPrototypeOf(this, re.prototype);
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function ns(t, e) {
  const n = {}, i = o(t, ["pageSize"]);
  e !== void 0 && i != null && s(e, ["_query", "pageSize"], i);
  const r = o(t, ["pageToken"]);
  return e !== void 0 && r != null && s(e, ["_query", "pageToken"], r), n;
}
function os(t) {
  const e = {}, n = o(t, ["config"]);
  return n != null && s(e, ["config"], ns(n, e)), e;
}
function is(t) {
  const e = {}, n = o(t, ["details"]);
  n != null && s(e, ["details"], n);
  const i = o(t, ["message"]);
  i != null && s(e, ["message"], i);
  const r = o(t, ["code"]);
  return r != null && s(e, ["code"], r), e;
}
function ss(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["displayName"]);
  i != null && s(e, ["displayName"], i);
  const r = o(t, ["mimeType"]);
  r != null && s(e, ["mimeType"], r);
  const l = o(t, ["sizeBytes"]);
  l != null && s(e, ["sizeBytes"], l);
  const a = o(t, ["createTime"]);
  a != null && s(e, ["createTime"], a);
  const f = o(t, ["expirationTime"]);
  f != null && s(e, ["expirationTime"], f);
  const c = o(t, ["updateTime"]);
  c != null && s(e, ["updateTime"], c);
  const u = o(t, ["sha256Hash"]);
  u != null && s(e, ["sha256Hash"], u);
  const d = o(t, ["uri"]);
  d != null && s(e, ["uri"], d);
  const p = o(t, ["downloadUri"]);
  p != null && s(e, ["downloadUri"], p);
  const m = o(t, ["state"]);
  m != null && s(e, ["state"], m);
  const g = o(t, ["source"]);
  g != null && s(e, ["source"], g);
  const h = o(t, ["videoMetadata"]);
  h != null && s(e, ["videoMetadata"], h);
  const v = o(t, ["error"]);
  return v != null && s(e, ["error"], is(v)), e;
}
function rs(t) {
  const e = {}, n = o(t, ["file"]);
  n != null && s(e, ["file"], ss(n));
  const i = o(t, ["config"]);
  return i != null && s(e, ["config"], i), e;
}
function ls(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["_url", "file"], jt(n));
  const i = o(t, ["config"]);
  return i != null && s(e, ["config"], i), e;
}
function as(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["_url", "file"], jt(n));
  const i = o(t, ["config"]);
  return i != null && s(e, ["config"], i), e;
}
function us(t) {
  const e = {}, n = o(t, ["details"]);
  n != null && s(e, ["details"], n);
  const i = o(t, ["message"]);
  i != null && s(e, ["message"], i);
  const r = o(t, ["code"]);
  return r != null && s(e, ["code"], r), e;
}
function ve(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["displayName"]);
  i != null && s(e, ["displayName"], i);
  const r = o(t, ["mimeType"]);
  r != null && s(e, ["mimeType"], r);
  const l = o(t, ["sizeBytes"]);
  l != null && s(e, ["sizeBytes"], l);
  const a = o(t, ["createTime"]);
  a != null && s(e, ["createTime"], a);
  const f = o(t, ["expirationTime"]);
  f != null && s(e, ["expirationTime"], f);
  const c = o(t, ["updateTime"]);
  c != null && s(e, ["updateTime"], c);
  const u = o(t, ["sha256Hash"]);
  u != null && s(e, ["sha256Hash"], u);
  const d = o(t, ["uri"]);
  d != null && s(e, ["uri"], d);
  const p = o(t, ["downloadUri"]);
  p != null && s(e, ["downloadUri"], p);
  const m = o(t, ["state"]);
  m != null && s(e, ["state"], m);
  const g = o(t, ["source"]);
  g != null && s(e, ["source"], g);
  const h = o(t, ["videoMetadata"]);
  h != null && s(e, ["videoMetadata"], h);
  const v = o(t, ["error"]);
  return v != null && s(e, ["error"], us(v)), e;
}
function fs(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["files"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => ve(a))), s(e, ["files"], l);
  }
  return e;
}
function cs(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  return n != null && s(e, ["sdkHttpResponse"], n), e;
}
function ds() {
  return {};
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class ps extends B {
  constructor(e) {
    super(), this.apiClient = e, this.list = async (n = {}) => new O(q.PAGED_ITEM_FILES, (i) => this.listInternal(i), await this.listInternal(n), n);
  }
  async upload(e) {
    if (this.apiClient.isVertexAI()) throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");
    return this.apiClient.uploadFile(e.file, e.config).then((n) => ve(n));
  }
  async download(e) {
    await this.apiClient.downloadFile(e);
  }
  async listInternal(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const f = os(e);
      return l = C("files", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json().then((u) => {
        const d = u;
        return d.sdkHttpResponse = { headers: c.headers }, d;
      })), r.then((c) => {
        const u = fs(c), d = new Dn();
        return Object.assign(d, u), d;
      });
    }
  }
  async createInternal(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const f = rs(e);
      return l = C("upload/v1beta/files", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r.then((c) => {
        const u = cs(c), d = new Nn();
        return Object.assign(d, u), d;
      });
    }
  }
  async get(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const f = ls(e);
      return l = C("files/{file}", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r.then((c) => ve(c));
    }
  }
  async delete(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const f = as(e);
      return l = C("files/{file}", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "DELETE", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r.then(() => {
        const c = ds(), u = new wn();
        return Object.assign(u, c), u;
      });
    }
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function ms(t) {
  const e = {}, n = o(t, ["voiceName"]);
  return n != null && s(e, ["voiceName"], n), e;
}
function fn(t) {
  const e = {}, n = o(t, ["prebuiltVoiceConfig"]);
  return n != null && s(e, ["prebuiltVoiceConfig"], ms(n)), e;
}
function gs(t) {
  const e = {}, n = o(t, ["speaker"]);
  n != null && s(e, ["speaker"], n);
  const i = o(t, ["voiceConfig"]);
  return i != null && s(e, ["voiceConfig"], fn(i)), e;
}
function hs(t) {
  const e = {}, n = o(t, ["speakerVoiceConfigs"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => gs(r))), s(e, ["speakerVoiceConfigs"], i);
  }
  return e;
}
function vs(t) {
  const e = {}, n = o(t, ["voiceConfig"]);
  n != null && s(e, ["voiceConfig"], fn(n));
  const i = o(t, ["multiSpeakerVoiceConfig"]);
  i != null && s(e, ["multiSpeakerVoiceConfig"], hs(i));
  const r = o(t, ["languageCode"]);
  return r != null && s(e, ["languageCode"], r), e;
}
function Ts(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function Cs(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function ys(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["fileUri"]);
  n != null && s(e, ["fileUri"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Es(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], Ts(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], Cs(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], ys(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function Ss(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Es(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function _s(t) {
  const e = {}, n = o(t, ["behavior"]);
  n != null && s(e, ["behavior"], n);
  const i = o(t, ["description"]);
  i != null && s(e, ["description"], i);
  const r = o(t, ["name"]);
  r != null && s(e, ["name"], r);
  const l = o(t, ["parameters"]);
  l != null && s(e, ["parameters"], l);
  const a = o(t, ["parametersJsonSchema"]);
  a != null && s(e, ["parametersJsonSchema"], a);
  const f = o(t, ["response"]);
  f != null && s(e, ["response"], f);
  const c = o(t, ["responseJsonSchema"]);
  return c != null && s(e, ["responseJsonSchema"], c), e;
}
function As(t) {
  const e = {}, n = o(t, ["startTime"]);
  n != null && s(e, ["startTime"], n);
  const i = o(t, ["endTime"]);
  return i != null && s(e, ["endTime"], i), e;
}
function Ms(t) {
  const e = {}, n = o(t, ["timeRangeFilter"]);
  return n != null && s(e, ["timeRangeFilter"], As(n)), e;
}
function Is(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["dynamicThreshold"]);
  return i != null && s(e, ["dynamicThreshold"], i), e;
}
function Rs(t) {
  const e = {}, n = o(t, ["dynamicRetrievalConfig"]);
  return n != null && s(e, ["dynamicRetrievalConfig"], Is(n)), e;
}
function Ps() {
  return {};
}
function xs(t) {
  const e = {}, n = o(t, ["functionDeclarations"]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((u) => _s(u))), s(e, ["functionDeclarations"], c);
  }
  if (o(t, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = o(t, ["googleSearch"]);
  i != null && s(e, ["googleSearch"], Ms(i));
  const r = o(t, ["googleSearchRetrieval"]);
  if (r != null && s(e, ["googleSearchRetrieval"], Rs(r)), o(t, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  if (o(t, ["googleMaps"]) !== void 0) throw new Error("googleMaps parameter is not supported in Gemini API.");
  o(t, ["urlContext"]) != null && s(e, ["urlContext"], Ps());
  const a = o(t, ["codeExecution"]);
  a != null && s(e, ["codeExecution"], a);
  const f = o(t, ["computerUse"]);
  return f != null && s(e, ["computerUse"], f), e;
}
function Ds(t) {
  const e = {}, n = o(t, ["handle"]);
  if (n != null && s(e, ["handle"], n), o(t, ["transparent"]) !== void 0) throw new Error("transparent parameter is not supported in Gemini API.");
  return e;
}
function Nt() {
  return {};
}
function Ns(t) {
  const e = {}, n = o(t, ["disabled"]);
  n != null && s(e, ["disabled"], n);
  const i = o(t, ["startOfSpeechSensitivity"]);
  i != null && s(e, ["startOfSpeechSensitivity"], i);
  const r = o(t, ["endOfSpeechSensitivity"]);
  r != null && s(e, ["endOfSpeechSensitivity"], r);
  const l = o(t, ["prefixPaddingMs"]);
  l != null && s(e, ["prefixPaddingMs"], l);
  const a = o(t, ["silenceDurationMs"]);
  return a != null && s(e, ["silenceDurationMs"], a), e;
}
function ws(t) {
  const e = {}, n = o(t, ["automaticActivityDetection"]);
  n != null && s(e, ["automaticActivityDetection"], Ns(n));
  const i = o(t, ["activityHandling"]);
  i != null && s(e, ["activityHandling"], i);
  const r = o(t, ["turnCoverage"]);
  return r != null && s(e, ["turnCoverage"], r), e;
}
function Us(t) {
  const e = {}, n = o(t, ["targetTokens"]);
  return n != null && s(e, ["targetTokens"], n), e;
}
function Fs(t) {
  const e = {}, n = o(t, ["triggerTokens"]);
  n != null && s(e, ["triggerTokens"], n);
  const i = o(t, ["slidingWindow"]);
  return i != null && s(e, ["slidingWindow"], Us(i)), e;
}
function Ls(t) {
  const e = {}, n = o(t, ["proactiveAudio"]);
  return n != null && s(e, ["proactiveAudio"], n), e;
}
function Vs(t, e) {
  const n = {}, i = o(t, ["generationConfig"]);
  e !== void 0 && i != null && s(e, ["setup", "generationConfig"], i);
  const r = o(t, ["responseModalities"]);
  e !== void 0 && r != null && s(e, ["setup", "generationConfig", "responseModalities"], r);
  const l = o(t, ["temperature"]);
  e !== void 0 && l != null && s(e, ["setup", "generationConfig", "temperature"], l);
  const a = o(t, ["topP"]);
  e !== void 0 && a != null && s(e, ["setup", "generationConfig", "topP"], a);
  const f = o(t, ["topK"]);
  e !== void 0 && f != null && s(e, ["setup", "generationConfig", "topK"], f);
  const c = o(t, ["maxOutputTokens"]);
  e !== void 0 && c != null && s(e, ["setup", "generationConfig", "maxOutputTokens"], c);
  const u = o(t, ["mediaResolution"]);
  e !== void 0 && u != null && s(e, ["setup", "generationConfig", "mediaResolution"], u);
  const d = o(t, ["seed"]);
  e !== void 0 && d != null && s(e, ["setup", "generationConfig", "seed"], d);
  const p = o(t, ["speechConfig"]);
  e !== void 0 && p != null && s(e, ["setup", "generationConfig", "speechConfig"], vs(Me(p)));
  const m = o(t, ["enableAffectiveDialog"]);
  e !== void 0 && m != null && s(e, ["setup", "generationConfig", "enableAffectiveDialog"], m);
  const g = o(t, ["systemInstruction"]);
  e !== void 0 && g != null && s(e, ["setup", "systemInstruction"], Ss(w(g)));
  const h = o(t, ["tools"]);
  if (e !== void 0 && h != null) {
    let _ = z(h);
    Array.isArray(_) && (_ = _.map((I) => xs(K(I)))), s(e, ["setup", "tools"], _);
  }
  const v = o(t, ["sessionResumption"]);
  e !== void 0 && v != null && s(e, ["setup", "sessionResumption"], Ds(v));
  const T = o(t, ["inputAudioTranscription"]);
  e !== void 0 && T != null && s(e, ["setup", "inputAudioTranscription"], Nt());
  const E = o(t, ["outputAudioTranscription"]);
  e !== void 0 && E != null && s(e, ["setup", "outputAudioTranscription"], Nt());
  const y = o(t, ["realtimeInputConfig"]);
  e !== void 0 && y != null && s(e, ["setup", "realtimeInputConfig"], ws(y));
  const S = o(t, ["contextWindowCompression"]);
  e !== void 0 && S != null && s(e, ["setup", "contextWindowCompression"], Fs(S));
  const A = o(t, ["proactivity"]);
  return e !== void 0 && A != null && s(e, ["setup", "proactivity"], Ls(A)), n;
}
function ks(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["setup", "model"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], Vs(r, n)), n;
}
function Gs() {
  return {};
}
function qs() {
  return {};
}
function Bs(t) {
  const e = {}, n = o(t, ["media"]);
  n != null && s(e, ["mediaChunks"], zt(n));
  const i = o(t, ["audio"]);
  i != null && s(e, ["audio"], Qt(i));
  const r = o(t, ["audioStreamEnd"]);
  r != null && s(e, ["audioStreamEnd"], r);
  const l = o(t, ["video"]);
  l != null && s(e, ["video"], Xt(l));
  const a = o(t, ["text"]);
  return a != null && s(e, ["text"], a), o(t, ["activityStart"]) != null && s(e, ["activityStart"], Gs()), o(t, ["activityEnd"]) != null && s(e, ["activityEnd"], qs()), e;
}
function cn(t) {
  const e = {}, n = o(t, ["text"]);
  n != null && s(e, ["text"], n);
  const i = o(t, ["weight"]);
  return i != null && s(e, ["weight"], i), e;
}
function Js(t) {
  const e = {}, n = o(t, ["weightedPrompts"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => cn(r))), s(e, ["weightedPrompts"], i);
  }
  return e;
}
function dn(t) {
  const e = {}, n = o(t, ["temperature"]);
  n != null && s(e, ["temperature"], n);
  const i = o(t, ["topK"]);
  i != null && s(e, ["topK"], i);
  const r = o(t, ["seed"]);
  r != null && s(e, ["seed"], r);
  const l = o(t, ["guidance"]);
  l != null && s(e, ["guidance"], l);
  const a = o(t, ["bpm"]);
  a != null && s(e, ["bpm"], a);
  const f = o(t, ["density"]);
  f != null && s(e, ["density"], f);
  const c = o(t, ["brightness"]);
  c != null && s(e, ["brightness"], c);
  const u = o(t, ["scale"]);
  u != null && s(e, ["scale"], u);
  const d = o(t, ["muteBass"]);
  d != null && s(e, ["muteBass"], d);
  const p = o(t, ["muteDrums"]);
  p != null && s(e, ["muteDrums"], p);
  const m = o(t, ["onlyBassAndDrums"]);
  return m != null && s(e, ["onlyBassAndDrums"], m), e;
}
function Hs(t) {
  const e = {}, n = o(t, ["musicGenerationConfig"]);
  return n != null && s(e, ["musicGenerationConfig"], dn(n)), e;
}
function pn(t) {
  const e = {}, n = o(t, ["model"]);
  return n != null && s(e, ["model"], n), e;
}
function mn(t) {
  const e = {}, n = o(t, ["weightedPrompts"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => cn(r))), s(e, ["weightedPrompts"], i);
  }
  return e;
}
function Te(t) {
  const e = {}, n = o(t, ["setup"]);
  n != null && s(e, ["setup"], pn(n));
  const i = o(t, ["clientContent"]);
  i != null && s(e, ["clientContent"], mn(i));
  const r = o(t, ["musicGenerationConfig"]);
  r != null && s(e, ["musicGenerationConfig"], dn(r));
  const l = o(t, ["playbackControl"]);
  return l != null && s(e, ["playbackControl"], l), e;
}
function $s(t) {
  const e = {}, n = o(t, ["voiceName"]);
  return n != null && s(e, ["voiceName"], n), e;
}
function Ws(t) {
  const e = {}, n = o(t, ["prebuiltVoiceConfig"]);
  return n != null && s(e, ["prebuiltVoiceConfig"], $s(n)), e;
}
function Ys(t) {
  const e = {}, n = o(t, ["voiceConfig"]);
  if (n != null && s(e, ["voiceConfig"], Ws(n)), o(t, ["multiSpeakerVoiceConfig"]) !== void 0) throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
  const i = o(t, ["languageCode"]);
  return i != null && s(e, ["languageCode"], i), e;
}
function Ks(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function zs(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["data"]);
  i != null && s(e, ["data"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Xs(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["fileUri"]);
  i != null && s(e, ["fileUri"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Qs(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], Ks(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], zs(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], Xs(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function Zs(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Qs(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function bs(t) {
  const e = {};
  if (o(t, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
  const n = o(t, ["description"]);
  n != null && s(e, ["description"], n);
  const i = o(t, ["name"]);
  i != null && s(e, ["name"], i);
  const r = o(t, ["parameters"]);
  r != null && s(e, ["parameters"], r);
  const l = o(t, ["parametersJsonSchema"]);
  l != null && s(e, ["parametersJsonSchema"], l);
  const a = o(t, ["response"]);
  a != null && s(e, ["response"], a);
  const f = o(t, ["responseJsonSchema"]);
  return f != null && s(e, ["responseJsonSchema"], f), e;
}
function Os(t) {
  const e = {}, n = o(t, ["startTime"]);
  n != null && s(e, ["startTime"], n);
  const i = o(t, ["endTime"]);
  return i != null && s(e, ["endTime"], i), e;
}
function js(t) {
  const e = {}, n = o(t, ["timeRangeFilter"]);
  return n != null && s(e, ["timeRangeFilter"], Os(n)), e;
}
function er(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["dynamicThreshold"]);
  return i != null && s(e, ["dynamicThreshold"], i), e;
}
function tr(t) {
  const e = {}, n = o(t, ["dynamicRetrievalConfig"]);
  return n != null && s(e, ["dynamicRetrievalConfig"], er(n)), e;
}
function nr() {
  return {};
}
function or(t) {
  const e = {}, n = o(t, ["apiKeyString"]);
  return n != null && s(e, ["apiKeyString"], n), e;
}
function ir(t) {
  const e = {}, n = o(t, ["apiKeyConfig"]);
  n != null && s(e, ["apiKeyConfig"], or(n));
  const i = o(t, ["authType"]);
  i != null && s(e, ["authType"], i);
  const r = o(t, ["googleServiceAccountConfig"]);
  r != null && s(e, ["googleServiceAccountConfig"], r);
  const l = o(t, ["httpBasicAuthConfig"]);
  l != null && s(e, ["httpBasicAuthConfig"], l);
  const a = o(t, ["oauthConfig"]);
  a != null && s(e, ["oauthConfig"], a);
  const f = o(t, ["oidcConfig"]);
  return f != null && s(e, ["oidcConfig"], f), e;
}
function sr(t) {
  const e = {}, n = o(t, ["authConfig"]);
  return n != null && s(e, ["authConfig"], ir(n)), e;
}
function rr() {
  return {};
}
function lr(t) {
  const e = {}, n = o(t, ["functionDeclarations"]);
  if (n != null) {
    let p = n;
    Array.isArray(p) && (p = p.map((m) => bs(m))), s(e, ["functionDeclarations"], p);
  }
  const i = o(t, ["retrieval"]);
  i != null && s(e, ["retrieval"], i);
  const r = o(t, ["googleSearch"]);
  r != null && s(e, ["googleSearch"], js(r));
  const l = o(t, ["googleSearchRetrieval"]);
  l != null && s(e, ["googleSearchRetrieval"], tr(l)), o(t, ["enterpriseWebSearch"]) != null && s(e, ["enterpriseWebSearch"], nr());
  const f = o(t, ["googleMaps"]);
  f != null && s(e, ["googleMaps"], sr(f)), o(t, ["urlContext"]) != null && s(e, ["urlContext"], rr());
  const u = o(t, ["codeExecution"]);
  u != null && s(e, ["codeExecution"], u);
  const d = o(t, ["computerUse"]);
  return d != null && s(e, ["computerUse"], d), e;
}
function ar(t) {
  const e = {}, n = o(t, ["handle"]);
  n != null && s(e, ["handle"], n);
  const i = o(t, ["transparent"]);
  return i != null && s(e, ["transparent"], i), e;
}
function wt() {
  return {};
}
function ur(t) {
  const e = {}, n = o(t, ["disabled"]);
  n != null && s(e, ["disabled"], n);
  const i = o(t, ["startOfSpeechSensitivity"]);
  i != null && s(e, ["startOfSpeechSensitivity"], i);
  const r = o(t, ["endOfSpeechSensitivity"]);
  r != null && s(e, ["endOfSpeechSensitivity"], r);
  const l = o(t, ["prefixPaddingMs"]);
  l != null && s(e, ["prefixPaddingMs"], l);
  const a = o(t, ["silenceDurationMs"]);
  return a != null && s(e, ["silenceDurationMs"], a), e;
}
function fr(t) {
  const e = {}, n = o(t, ["automaticActivityDetection"]);
  n != null && s(e, ["automaticActivityDetection"], ur(n));
  const i = o(t, ["activityHandling"]);
  i != null && s(e, ["activityHandling"], i);
  const r = o(t, ["turnCoverage"]);
  return r != null && s(e, ["turnCoverage"], r), e;
}
function cr(t) {
  const e = {}, n = o(t, ["targetTokens"]);
  return n != null && s(e, ["targetTokens"], n), e;
}
function dr(t) {
  const e = {}, n = o(t, ["triggerTokens"]);
  n != null && s(e, ["triggerTokens"], n);
  const i = o(t, ["slidingWindow"]);
  return i != null && s(e, ["slidingWindow"], cr(i)), e;
}
function pr(t) {
  const e = {}, n = o(t, ["proactiveAudio"]);
  return n != null && s(e, ["proactiveAudio"], n), e;
}
function mr(t, e) {
  const n = {}, i = o(t, ["generationConfig"]);
  e !== void 0 && i != null && s(e, ["setup", "generationConfig"], i);
  const r = o(t, ["responseModalities"]);
  e !== void 0 && r != null && s(e, ["setup", "generationConfig", "responseModalities"], r);
  const l = o(t, ["temperature"]);
  e !== void 0 && l != null && s(e, ["setup", "generationConfig", "temperature"], l);
  const a = o(t, ["topP"]);
  e !== void 0 && a != null && s(e, ["setup", "generationConfig", "topP"], a);
  const f = o(t, ["topK"]);
  e !== void 0 && f != null && s(e, ["setup", "generationConfig", "topK"], f);
  const c = o(t, ["maxOutputTokens"]);
  e !== void 0 && c != null && s(e, ["setup", "generationConfig", "maxOutputTokens"], c);
  const u = o(t, ["mediaResolution"]);
  e !== void 0 && u != null && s(e, ["setup", "generationConfig", "mediaResolution"], u);
  const d = o(t, ["seed"]);
  e !== void 0 && d != null && s(e, ["setup", "generationConfig", "seed"], d);
  const p = o(t, ["speechConfig"]);
  e !== void 0 && p != null && s(e, ["setup", "generationConfig", "speechConfig"], Ys(Me(p)));
  const m = o(t, ["enableAffectiveDialog"]);
  e !== void 0 && m != null && s(e, ["setup", "generationConfig", "enableAffectiveDialog"], m);
  const g = o(t, ["systemInstruction"]);
  e !== void 0 && g != null && s(e, ["setup", "systemInstruction"], Zs(w(g)));
  const h = o(t, ["tools"]);
  if (e !== void 0 && h != null) {
    let _ = z(h);
    Array.isArray(_) && (_ = _.map((I) => lr(K(I)))), s(e, ["setup", "tools"], _);
  }
  const v = o(t, ["sessionResumption"]);
  e !== void 0 && v != null && s(e, ["setup", "sessionResumption"], ar(v));
  const T = o(t, ["inputAudioTranscription"]);
  e !== void 0 && T != null && s(e, ["setup", "inputAudioTranscription"], wt());
  const E = o(t, ["outputAudioTranscription"]);
  e !== void 0 && E != null && s(e, ["setup", "outputAudioTranscription"], wt());
  const y = o(t, ["realtimeInputConfig"]);
  e !== void 0 && y != null && s(e, ["setup", "realtimeInputConfig"], fr(y));
  const S = o(t, ["contextWindowCompression"]);
  e !== void 0 && S != null && s(e, ["setup", "contextWindowCompression"], dr(S));
  const A = o(t, ["proactivity"]);
  return e !== void 0 && A != null && s(e, ["setup", "proactivity"], pr(A)), n;
}
function gr(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["setup", "model"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], mr(r, n)), n;
}
function hr() {
  return {};
}
function vr() {
  return {};
}
function Tr(t) {
  const e = {}, n = o(t, ["media"]);
  n != null && s(e, ["mediaChunks"], zt(n));
  const i = o(t, ["audio"]);
  i != null && s(e, ["audio"], Qt(i));
  const r = o(t, ["audioStreamEnd"]);
  r != null && s(e, ["audioStreamEnd"], r);
  const l = o(t, ["video"]);
  l != null && s(e, ["video"], Xt(l));
  const a = o(t, ["text"]);
  return a != null && s(e, ["text"], a), o(t, ["activityStart"]) != null && s(e, ["activityStart"], hr()), o(t, ["activityEnd"]) != null && s(e, ["activityEnd"], vr()), e;
}
function Cr() {
  return {};
}
function yr(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function Er(t) {
  const e = {}, n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Sr(t) {
  const e = {}, n = o(t, ["fileUri"]);
  n != null && s(e, ["fileUri"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function _r(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], yr(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], Er(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], Sr(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function Ar(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => _r(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function Ut(t) {
  const e = {}, n = o(t, ["text"]);
  n != null && s(e, ["text"], n);
  const i = o(t, ["finished"]);
  return i != null && s(e, ["finished"], i), e;
}
function Mr(t) {
  const e = {}, n = o(t, ["retrievedUrl"]);
  n != null && s(e, ["retrievedUrl"], n);
  const i = o(t, ["urlRetrievalStatus"]);
  return i != null && s(e, ["urlRetrievalStatus"], i), e;
}
function Ir(t) {
  const e = {}, n = o(t, ["urlMetadata"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Mr(r))), s(e, ["urlMetadata"], i);
  }
  return e;
}
function Rr(t) {
  const e = {}, n = o(t, ["modelTurn"]);
  n != null && s(e, ["modelTurn"], Ar(n));
  const i = o(t, ["turnComplete"]);
  i != null && s(e, ["turnComplete"], i);
  const r = o(t, ["interrupted"]);
  r != null && s(e, ["interrupted"], r);
  const l = o(t, ["groundingMetadata"]);
  l != null && s(e, ["groundingMetadata"], l);
  const a = o(t, ["generationComplete"]);
  a != null && s(e, ["generationComplete"], a);
  const f = o(t, ["inputTranscription"]);
  f != null && s(e, ["inputTranscription"], Ut(f));
  const c = o(t, ["outputTranscription"]);
  c != null && s(e, ["outputTranscription"], Ut(c));
  const u = o(t, ["urlContextMetadata"]);
  return u != null && s(e, ["urlContextMetadata"], Ir(u)), e;
}
function Pr(t) {
  const e = {}, n = o(t, ["id"]);
  n != null && s(e, ["id"], n);
  const i = o(t, ["args"]);
  i != null && s(e, ["args"], i);
  const r = o(t, ["name"]);
  return r != null && s(e, ["name"], r), e;
}
function xr(t) {
  const e = {}, n = o(t, ["functionCalls"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Pr(r))), s(e, ["functionCalls"], i);
  }
  return e;
}
function Dr(t) {
  const e = {}, n = o(t, ["ids"]);
  return n != null && s(e, ["ids"], n), e;
}
function j(t) {
  const e = {}, n = o(t, ["modality"]);
  n != null && s(e, ["modality"], n);
  const i = o(t, ["tokenCount"]);
  return i != null && s(e, ["tokenCount"], i), e;
}
function Nr(t) {
  const e = {}, n = o(t, ["promptTokenCount"]);
  n != null && s(e, ["promptTokenCount"], n);
  const i = o(t, ["cachedContentTokenCount"]);
  i != null && s(e, ["cachedContentTokenCount"], i);
  const r = o(t, ["responseTokenCount"]);
  r != null && s(e, ["responseTokenCount"], r);
  const l = o(t, ["toolUsePromptTokenCount"]);
  l != null && s(e, ["toolUsePromptTokenCount"], l);
  const a = o(t, ["thoughtsTokenCount"]);
  a != null && s(e, ["thoughtsTokenCount"], a);
  const f = o(t, ["totalTokenCount"]);
  f != null && s(e, ["totalTokenCount"], f);
  const c = o(t, ["promptTokensDetails"]);
  if (c != null) {
    let m = c;
    Array.isArray(m) && (m = m.map((g) => j(g))), s(e, ["promptTokensDetails"], m);
  }
  const u = o(t, ["cacheTokensDetails"]);
  if (u != null) {
    let m = u;
    Array.isArray(m) && (m = m.map((g) => j(g))), s(e, ["cacheTokensDetails"], m);
  }
  const d = o(t, ["responseTokensDetails"]);
  if (d != null) {
    let m = d;
    Array.isArray(m) && (m = m.map((g) => j(g))), s(e, ["responseTokensDetails"], m);
  }
  const p = o(t, ["toolUsePromptTokensDetails"]);
  if (p != null) {
    let m = p;
    Array.isArray(m) && (m = m.map((g) => j(g))), s(e, ["toolUsePromptTokensDetails"], m);
  }
  return e;
}
function wr(t) {
  const e = {}, n = o(t, ["timeLeft"]);
  return n != null && s(e, ["timeLeft"], n), e;
}
function Ur(t) {
  const e = {}, n = o(t, ["newHandle"]);
  n != null && s(e, ["newHandle"], n);
  const i = o(t, ["resumable"]);
  i != null && s(e, ["resumable"], i);
  const r = o(t, ["lastConsumedClientMessageIndex"]);
  return r != null && s(e, ["lastConsumedClientMessageIndex"], r), e;
}
function Fr(t) {
  const e = {};
  o(t, ["setupComplete"]) != null && s(e, ["setupComplete"], Cr());
  const i = o(t, ["serverContent"]);
  i != null && s(e, ["serverContent"], Rr(i));
  const r = o(t, ["toolCall"]);
  r != null && s(e, ["toolCall"], xr(r));
  const l = o(t, ["toolCallCancellation"]);
  l != null && s(e, ["toolCallCancellation"], Dr(l));
  const a = o(t, ["usageMetadata"]);
  a != null && s(e, ["usageMetadata"], Nr(a));
  const f = o(t, ["goAway"]);
  f != null && s(e, ["goAway"], wr(f));
  const c = o(t, ["sessionResumptionUpdate"]);
  return c != null && s(e, ["sessionResumptionUpdate"], Ur(c)), e;
}
function Lr() {
  return {};
}
function Vr(t) {
  const e = {}, n = o(t, ["text"]);
  n != null && s(e, ["text"], n);
  const i = o(t, ["weight"]);
  return i != null && s(e, ["weight"], i), e;
}
function kr(t) {
  const e = {}, n = o(t, ["weightedPrompts"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Vr(r))), s(e, ["weightedPrompts"], i);
  }
  return e;
}
function Gr(t) {
  const e = {}, n = o(t, ["temperature"]);
  n != null && s(e, ["temperature"], n);
  const i = o(t, ["topK"]);
  i != null && s(e, ["topK"], i);
  const r = o(t, ["seed"]);
  r != null && s(e, ["seed"], r);
  const l = o(t, ["guidance"]);
  l != null && s(e, ["guidance"], l);
  const a = o(t, ["bpm"]);
  a != null && s(e, ["bpm"], a);
  const f = o(t, ["density"]);
  f != null && s(e, ["density"], f);
  const c = o(t, ["brightness"]);
  c != null && s(e, ["brightness"], c);
  const u = o(t, ["scale"]);
  u != null && s(e, ["scale"], u);
  const d = o(t, ["muteBass"]);
  d != null && s(e, ["muteBass"], d);
  const p = o(t, ["muteDrums"]);
  p != null && s(e, ["muteDrums"], p);
  const m = o(t, ["onlyBassAndDrums"]);
  return m != null && s(e, ["onlyBassAndDrums"], m), e;
}
function qr(t) {
  const e = {}, n = o(t, ["clientContent"]);
  n != null && s(e, ["clientContent"], kr(n));
  const i = o(t, ["musicGenerationConfig"]);
  return i != null && s(e, ["musicGenerationConfig"], Gr(i)), e;
}
function Br(t) {
  const e = {}, n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  i != null && s(e, ["mimeType"], i);
  const r = o(t, ["sourceMetadata"]);
  return r != null && s(e, ["sourceMetadata"], qr(r)), e;
}
function Jr(t) {
  const e = {}, n = o(t, ["audioChunks"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Br(r))), s(e, ["audioChunks"], i);
  }
  return e;
}
function Hr(t) {
  const e = {}, n = o(t, ["text"]);
  n != null && s(e, ["text"], n);
  const i = o(t, ["filteredReason"]);
  return i != null && s(e, ["filteredReason"], i), e;
}
function $r(t) {
  const e = {};
  o(t, ["setupComplete"]) != null && s(e, ["setupComplete"], Lr());
  const i = o(t, ["serverContent"]);
  i != null && s(e, ["serverContent"], Jr(i));
  const r = o(t, ["filteredPrompt"]);
  return r != null && s(e, ["filteredPrompt"], Hr(r)), e;
}
function Wr(t) {
  const e = {}, n = o(t, ["sessionId"]);
  return n != null && s(e, ["sessionId"], n), e;
}
function Yr(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function Kr(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["data"]);
  i != null && s(e, ["data"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function zr(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["fileUri"]);
  i != null && s(e, ["fileUri"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Xr(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], Yr(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], Kr(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], zr(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function Qr(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Xr(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function Ft(t) {
  const e = {}, n = o(t, ["text"]);
  n != null && s(e, ["text"], n);
  const i = o(t, ["finished"]);
  return i != null && s(e, ["finished"], i), e;
}
function Zr(t) {
  const e = {}, n = o(t, ["modelTurn"]);
  n != null && s(e, ["modelTurn"], Qr(n));
  const i = o(t, ["turnComplete"]);
  i != null && s(e, ["turnComplete"], i);
  const r = o(t, ["interrupted"]);
  r != null && s(e, ["interrupted"], r);
  const l = o(t, ["groundingMetadata"]);
  l != null && s(e, ["groundingMetadata"], l);
  const a = o(t, ["generationComplete"]);
  a != null && s(e, ["generationComplete"], a);
  const f = o(t, ["inputTranscription"]);
  f != null && s(e, ["inputTranscription"], Ft(f));
  const c = o(t, ["outputTranscription"]);
  return c != null && s(e, ["outputTranscription"], Ft(c)), e;
}
function br(t) {
  const e = {}, n = o(t, ["args"]);
  n != null && s(e, ["args"], n);
  const i = o(t, ["name"]);
  return i != null && s(e, ["name"], i), e;
}
function Or(t) {
  const e = {}, n = o(t, ["functionCalls"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => br(r))), s(e, ["functionCalls"], i);
  }
  return e;
}
function jr(t) {
  const e = {}, n = o(t, ["ids"]);
  return n != null && s(e, ["ids"], n), e;
}
function ee(t) {
  const e = {}, n = o(t, ["modality"]);
  n != null && s(e, ["modality"], n);
  const i = o(t, ["tokenCount"]);
  return i != null && s(e, ["tokenCount"], i), e;
}
function el(t) {
  const e = {}, n = o(t, ["promptTokenCount"]);
  n != null && s(e, ["promptTokenCount"], n);
  const i = o(t, ["cachedContentTokenCount"]);
  i != null && s(e, ["cachedContentTokenCount"], i);
  const r = o(t, ["candidatesTokenCount"]);
  r != null && s(e, ["responseTokenCount"], r);
  const l = o(t, ["toolUsePromptTokenCount"]);
  l != null && s(e, ["toolUsePromptTokenCount"], l);
  const a = o(t, ["thoughtsTokenCount"]);
  a != null && s(e, ["thoughtsTokenCount"], a);
  const f = o(t, ["totalTokenCount"]);
  f != null && s(e, ["totalTokenCount"], f);
  const c = o(t, ["promptTokensDetails"]);
  if (c != null) {
    let g = c;
    Array.isArray(g) && (g = g.map((h) => ee(h))), s(e, ["promptTokensDetails"], g);
  }
  const u = o(t, ["cacheTokensDetails"]);
  if (u != null) {
    let g = u;
    Array.isArray(g) && (g = g.map((h) => ee(h))), s(e, ["cacheTokensDetails"], g);
  }
  const d = o(t, ["candidatesTokensDetails"]);
  if (d != null) {
    let g = d;
    Array.isArray(g) && (g = g.map((h) => ee(h))), s(e, ["responseTokensDetails"], g);
  }
  const p = o(t, ["toolUsePromptTokensDetails"]);
  if (p != null) {
    let g = p;
    Array.isArray(g) && (g = g.map((h) => ee(h))), s(e, ["toolUsePromptTokensDetails"], g);
  }
  const m = o(t, ["trafficType"]);
  return m != null && s(e, ["trafficType"], m), e;
}
function tl(t) {
  const e = {}, n = o(t, ["timeLeft"]);
  return n != null && s(e, ["timeLeft"], n), e;
}
function nl(t) {
  const e = {}, n = o(t, ["newHandle"]);
  n != null && s(e, ["newHandle"], n);
  const i = o(t, ["resumable"]);
  i != null && s(e, ["resumable"], i);
  const r = o(t, ["lastConsumedClientMessageIndex"]);
  return r != null && s(e, ["lastConsumedClientMessageIndex"], r), e;
}
function ol(t) {
  const e = {}, n = o(t, ["setupComplete"]);
  n != null && s(e, ["setupComplete"], Wr(n));
  const i = o(t, ["serverContent"]);
  i != null && s(e, ["serverContent"], Zr(i));
  const r = o(t, ["toolCall"]);
  r != null && s(e, ["toolCall"], Or(r));
  const l = o(t, ["toolCallCancellation"]);
  l != null && s(e, ["toolCallCancellation"], jr(l));
  const a = o(t, ["usageMetadata"]);
  a != null && s(e, ["usageMetadata"], el(a));
  const f = o(t, ["goAway"]);
  f != null && s(e, ["goAway"], tl(f));
  const c = o(t, ["sessionResumptionUpdate"]);
  return c != null && s(e, ["sessionResumptionUpdate"], nl(c)), e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function il(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function sl(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function rl(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["fileUri"]);
  n != null && s(e, ["fileUri"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function ll(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], il(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], sl(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], rl(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function le(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => ll(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function al(t) {
  const e = {}, n = o(t, ["anyOf"]);
  n != null && s(e, ["anyOf"], n);
  const i = o(t, ["default"]);
  i != null && s(e, ["default"], i);
  const r = o(t, ["description"]);
  r != null && s(e, ["description"], r);
  const l = o(t, ["enum"]);
  l != null && s(e, ["enum"], l);
  const a = o(t, ["example"]);
  a != null && s(e, ["example"], a);
  const f = o(t, ["format"]);
  f != null && s(e, ["format"], f);
  const c = o(t, ["items"]);
  c != null && s(e, ["items"], c);
  const u = o(t, ["maxItems"]);
  u != null && s(e, ["maxItems"], u);
  const d = o(t, ["maxLength"]);
  d != null && s(e, ["maxLength"], d);
  const p = o(t, ["maxProperties"]);
  p != null && s(e, ["maxProperties"], p);
  const m = o(t, ["maximum"]);
  m != null && s(e, ["maximum"], m);
  const g = o(t, ["minItems"]);
  g != null && s(e, ["minItems"], g);
  const h = o(t, ["minLength"]);
  h != null && s(e, ["minLength"], h);
  const v = o(t, ["minProperties"]);
  v != null && s(e, ["minProperties"], v);
  const T = o(t, ["minimum"]);
  T != null && s(e, ["minimum"], T);
  const E = o(t, ["nullable"]);
  E != null && s(e, ["nullable"], E);
  const y = o(t, ["pattern"]);
  y != null && s(e, ["pattern"], y);
  const S = o(t, ["properties"]);
  S != null && s(e, ["properties"], S);
  const A = o(t, ["propertyOrdering"]);
  A != null && s(e, ["propertyOrdering"], A);
  const _ = o(t, ["required"]);
  _ != null && s(e, ["required"], _);
  const I = o(t, ["title"]);
  I != null && s(e, ["title"], I);
  const R = o(t, ["type"]);
  return R != null && s(e, ["type"], R), e;
}
function ul(t) {
  const e = {};
  if (o(t, ["method"]) !== void 0) throw new Error("method parameter is not supported in Gemini API.");
  const n = o(t, ["category"]);
  n != null && s(e, ["category"], n);
  const i = o(t, ["threshold"]);
  return i != null && s(e, ["threshold"], i), e;
}
function fl(t) {
  const e = {}, n = o(t, ["behavior"]);
  n != null && s(e, ["behavior"], n);
  const i = o(t, ["description"]);
  i != null && s(e, ["description"], i);
  const r = o(t, ["name"]);
  r != null && s(e, ["name"], r);
  const l = o(t, ["parameters"]);
  l != null && s(e, ["parameters"], l);
  const a = o(t, ["parametersJsonSchema"]);
  a != null && s(e, ["parametersJsonSchema"], a);
  const f = o(t, ["response"]);
  f != null && s(e, ["response"], f);
  const c = o(t, ["responseJsonSchema"]);
  return c != null && s(e, ["responseJsonSchema"], c), e;
}
function cl(t) {
  const e = {}, n = o(t, ["startTime"]);
  n != null && s(e, ["startTime"], n);
  const i = o(t, ["endTime"]);
  return i != null && s(e, ["endTime"], i), e;
}
function dl(t) {
  const e = {}, n = o(t, ["timeRangeFilter"]);
  return n != null && s(e, ["timeRangeFilter"], cl(n)), e;
}
function pl(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["dynamicThreshold"]);
  return i != null && s(e, ["dynamicThreshold"], i), e;
}
function ml(t) {
  const e = {}, n = o(t, ["dynamicRetrievalConfig"]);
  return n != null && s(e, ["dynamicRetrievalConfig"], pl(n)), e;
}
function gl() {
  return {};
}
function hl(t) {
  const e = {}, n = o(t, ["functionDeclarations"]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((u) => fl(u))), s(e, ["functionDeclarations"], c);
  }
  if (o(t, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = o(t, ["googleSearch"]);
  i != null && s(e, ["googleSearch"], dl(i));
  const r = o(t, ["googleSearchRetrieval"]);
  if (r != null && s(e, ["googleSearchRetrieval"], ml(r)), o(t, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  if (o(t, ["googleMaps"]) !== void 0) throw new Error("googleMaps parameter is not supported in Gemini API.");
  o(t, ["urlContext"]) != null && s(e, ["urlContext"], gl());
  const a = o(t, ["codeExecution"]);
  a != null && s(e, ["codeExecution"], a);
  const f = o(t, ["computerUse"]);
  return f != null && s(e, ["computerUse"], f), e;
}
function vl(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["allowedFunctionNames"]);
  return i != null && s(e, ["allowedFunctionNames"], i), e;
}
function Tl(t) {
  const e = {}, n = o(t, ["latitude"]);
  n != null && s(e, ["latitude"], n);
  const i = o(t, ["longitude"]);
  return i != null && s(e, ["longitude"], i), e;
}
function Cl(t) {
  const e = {}, n = o(t, ["latLng"]);
  n != null && s(e, ["latLng"], Tl(n));
  const i = o(t, ["languageCode"]);
  return i != null && s(e, ["languageCode"], i), e;
}
function yl(t) {
  const e = {}, n = o(t, ["functionCallingConfig"]);
  n != null && s(e, ["functionCallingConfig"], vl(n));
  const i = o(t, ["retrievalConfig"]);
  return i != null && s(e, ["retrievalConfig"], Cl(i)), e;
}
function El(t) {
  const e = {}, n = o(t, ["voiceName"]);
  return n != null && s(e, ["voiceName"], n), e;
}
function gn(t) {
  const e = {}, n = o(t, ["prebuiltVoiceConfig"]);
  return n != null && s(e, ["prebuiltVoiceConfig"], El(n)), e;
}
function Sl(t) {
  const e = {}, n = o(t, ["speaker"]);
  n != null && s(e, ["speaker"], n);
  const i = o(t, ["voiceConfig"]);
  return i != null && s(e, ["voiceConfig"], gn(i)), e;
}
function _l(t) {
  const e = {}, n = o(t, ["speakerVoiceConfigs"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Sl(r))), s(e, ["speakerVoiceConfigs"], i);
  }
  return e;
}
function Al(t) {
  const e = {}, n = o(t, ["voiceConfig"]);
  n != null && s(e, ["voiceConfig"], gn(n));
  const i = o(t, ["multiSpeakerVoiceConfig"]);
  i != null && s(e, ["multiSpeakerVoiceConfig"], _l(i));
  const r = o(t, ["languageCode"]);
  return r != null && s(e, ["languageCode"], r), e;
}
function Ml(t) {
  const e = {}, n = o(t, ["includeThoughts"]);
  n != null && s(e, ["includeThoughts"], n);
  const i = o(t, ["thinkingBudget"]);
  return i != null && s(e, ["thinkingBudget"], i), e;
}
function Il(t, e, n) {
  const i = {}, r = o(e, ["systemInstruction"]);
  n !== void 0 && r != null && s(n, ["systemInstruction"], le(w(r)));
  const l = o(e, ["temperature"]);
  l != null && s(i, ["temperature"], l);
  const a = o(e, ["topP"]);
  a != null && s(i, ["topP"], a);
  const f = o(e, ["topK"]);
  f != null && s(i, ["topK"], f);
  const c = o(e, ["candidateCount"]);
  c != null && s(i, ["candidateCount"], c);
  const u = o(e, ["maxOutputTokens"]);
  u != null && s(i, ["maxOutputTokens"], u);
  const d = o(e, ["stopSequences"]);
  d != null && s(i, ["stopSequences"], d);
  const p = o(e, ["responseLogprobs"]);
  p != null && s(i, ["responseLogprobs"], p);
  const m = o(e, ["logprobs"]);
  m != null && s(i, ["logprobs"], m);
  const g = o(e, ["presencePenalty"]);
  g != null && s(i, ["presencePenalty"], g);
  const h = o(e, ["frequencyPenalty"]);
  h != null && s(i, ["frequencyPenalty"], h);
  const v = o(e, ["seed"]);
  v != null && s(i, ["seed"], v);
  const T = o(e, ["responseMimeType"]);
  T != null && s(i, ["responseMimeType"], T);
  const E = o(e, ["responseSchema"]);
  E != null && s(i, ["responseSchema"], al(_e(E)));
  const y = o(e, ["responseJsonSchema"]);
  if (y != null && s(i, ["responseJsonSchema"], y), o(e, ["routingConfig"]) !== void 0) throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (o(e, ["modelSelectionConfig"]) !== void 0) throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  const S = o(e, ["safetySettings"]);
  if (n !== void 0 && S != null) {
    let P = S;
    Array.isArray(P) && (P = P.map((L) => ul(L))), s(n, ["safetySettings"], P);
  }
  const A = o(e, ["tools"]);
  if (n !== void 0 && A != null) {
    let P = z(A);
    Array.isArray(P) && (P = P.map((L) => hl(K(L)))), s(n, ["tools"], P);
  }
  const _ = o(e, ["toolConfig"]);
  if (n !== void 0 && _ != null && s(n, ["toolConfig"], yl(_)), o(e, ["labels"]) !== void 0) throw new Error("labels parameter is not supported in Gemini API.");
  const I = o(e, ["cachedContent"]);
  n !== void 0 && I != null && s(n, ["cachedContent"], k(t, I));
  const R = o(e, ["responseModalities"]);
  R != null && s(i, ["responseModalities"], R);
  const U = o(e, ["mediaResolution"]);
  U != null && s(i, ["mediaResolution"], U);
  const M = o(e, ["speechConfig"]);
  if (M != null && s(i, ["speechConfig"], Al(Ae(M))), o(e, ["audioTimestamp"]) !== void 0) throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const D = o(e, ["thinkingConfig"]);
  return D != null && s(i, ["thinkingConfig"], Ml(D)), i;
}
function Lt(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["contents"]);
  if (r != null) {
    let a = F(r);
    Array.isArray(a) && (a = a.map((f) => le(f))), s(n, ["contents"], a);
  }
  const l = o(e, ["config"]);
  return l != null && s(n, ["generationConfig"], Il(t, l, n)), n;
}
function Rl(t, e) {
  const n = {}, i = o(t, ["taskType"]);
  e !== void 0 && i != null && s(e, ["requests[]", "taskType"], i);
  const r = o(t, ["title"]);
  e !== void 0 && r != null && s(e, ["requests[]", "title"], r);
  const l = o(t, ["outputDimensionality"]);
  if (e !== void 0 && l != null && s(e, ["requests[]", "outputDimensionality"], l), o(t, ["mimeType"]) !== void 0) throw new Error("mimeType parameter is not supported in Gemini API.");
  if (o(t, ["autoTruncate"]) !== void 0) throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return n;
}
function Pl(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["contents"]);
  r != null && s(n, ["requests[]", "content"], bt(t, r));
  const l = o(e, ["config"]);
  l != null && s(n, ["config"], Rl(l, n));
  const a = o(e, ["model"]);
  return a !== void 0 && s(n, ["requests[]", "model"], x(t, a)), n;
}
function xl(t, e) {
  const n = {};
  if (o(t, ["outputGcsUri"]) !== void 0) throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (o(t, ["negativePrompt"]) !== void 0) throw new Error("negativePrompt parameter is not supported in Gemini API.");
  const i = o(t, ["numberOfImages"]);
  e !== void 0 && i != null && s(e, ["parameters", "sampleCount"], i);
  const r = o(t, ["aspectRatio"]);
  e !== void 0 && r != null && s(e, ["parameters", "aspectRatio"], r);
  const l = o(t, ["guidanceScale"]);
  if (e !== void 0 && l != null && s(e, ["parameters", "guidanceScale"], l), o(t, ["seed"]) !== void 0) throw new Error("seed parameter is not supported in Gemini API.");
  const a = o(t, ["safetyFilterLevel"]);
  e !== void 0 && a != null && s(e, ["parameters", "safetySetting"], a);
  const f = o(t, ["personGeneration"]);
  e !== void 0 && f != null && s(e, ["parameters", "personGeneration"], f);
  const c = o(t, ["includeSafetyAttributes"]);
  e !== void 0 && c != null && s(e, ["parameters", "includeSafetyAttributes"], c);
  const u = o(t, ["includeRaiReason"]);
  e !== void 0 && u != null && s(e, ["parameters", "includeRaiReason"], u);
  const d = o(t, ["language"]);
  e !== void 0 && d != null && s(e, ["parameters", "language"], d);
  const p = o(t, ["outputMimeType"]);
  e !== void 0 && p != null && s(e, ["parameters", "outputOptions", "mimeType"], p);
  const m = o(t, ["outputCompressionQuality"]);
  if (e !== void 0 && m != null && s(e, ["parameters", "outputOptions", "compressionQuality"], m), o(t, ["addWatermark"]) !== void 0) throw new Error("addWatermark parameter is not supported in Gemini API.");
  if (o(t, ["imageSize"]) !== void 0) throw new Error("imageSize parameter is not supported in Gemini API.");
  if (o(t, ["enhancePrompt"]) !== void 0) throw new Error("enhancePrompt parameter is not supported in Gemini API.");
  return n;
}
function Dl(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["prompt"]);
  r != null && s(n, ["instances[0]", "prompt"], r);
  const l = o(e, ["config"]);
  return l != null && s(n, ["config"], xl(l, n)), n;
}
function Nl(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "name"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function wl(t, e, n) {
  const i = {}, r = o(e, ["pageSize"]);
  n !== void 0 && r != null && s(n, ["_query", "pageSize"], r);
  const l = o(e, ["pageToken"]);
  n !== void 0 && l != null && s(n, ["_query", "pageToken"], l);
  const a = o(e, ["filter"]);
  n !== void 0 && a != null && s(n, ["_query", "filter"], a);
  const f = o(e, ["queryBase"]);
  return n !== void 0 && f != null && s(n, ["_url", "models_url"], en(t, f)), i;
}
function Ul(t, e) {
  const n = {}, i = o(e, ["config"]);
  return i != null && s(n, ["config"], wl(t, i, n)), n;
}
function Fl(t, e) {
  const n = {}, i = o(t, ["displayName"]);
  e !== void 0 && i != null && s(e, ["displayName"], i);
  const r = o(t, ["description"]);
  e !== void 0 && r != null && s(e, ["description"], r);
  const l = o(t, ["defaultCheckpointId"]);
  return e !== void 0 && l != null && s(e, ["defaultCheckpointId"], l), n;
}
function Ll(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "name"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], Fl(r, n)), n;
}
function Vl(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "name"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function kl(t) {
  const e = {};
  if (o(t, ["systemInstruction"]) !== void 0) throw new Error("systemInstruction parameter is not supported in Gemini API.");
  if (o(t, ["tools"]) !== void 0) throw new Error("tools parameter is not supported in Gemini API.");
  if (o(t, ["generationConfig"]) !== void 0) throw new Error("generationConfig parameter is not supported in Gemini API.");
  return e;
}
function Gl(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["contents"]);
  if (r != null) {
    let a = F(r);
    Array.isArray(a) && (a = a.map((f) => le(f))), s(n, ["contents"], a);
  }
  const l = o(e, ["config"]);
  return l != null && s(n, ["config"], kl(l)), n;
}
function ql(t) {
  const e = {};
  if (o(t, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
  const n = o(t, ["imageBytes"]);
  n != null && s(e, ["bytesBase64Encoded"], J(n));
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Bl(t, e) {
  const n = {}, i = o(t, ["numberOfVideos"]);
  if (e !== void 0 && i != null && s(e, ["parameters", "sampleCount"], i), o(t, ["outputGcsUri"]) !== void 0) throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (o(t, ["fps"]) !== void 0) throw new Error("fps parameter is not supported in Gemini API.");
  const r = o(t, ["durationSeconds"]);
  if (e !== void 0 && r != null && s(e, ["parameters", "durationSeconds"], r), o(t, ["seed"]) !== void 0) throw new Error("seed parameter is not supported in Gemini API.");
  const l = o(t, ["aspectRatio"]);
  if (e !== void 0 && l != null && s(e, ["parameters", "aspectRatio"], l), o(t, ["resolution"]) !== void 0) throw new Error("resolution parameter is not supported in Gemini API.");
  const a = o(t, ["personGeneration"]);
  if (e !== void 0 && a != null && s(e, ["parameters", "personGeneration"], a), o(t, ["pubsubTopic"]) !== void 0) throw new Error("pubsubTopic parameter is not supported in Gemini API.");
  const f = o(t, ["negativePrompt"]);
  e !== void 0 && f != null && s(e, ["parameters", "negativePrompt"], f);
  const c = o(t, ["enhancePrompt"]);
  if (e !== void 0 && c != null && s(e, ["parameters", "enhancePrompt"], c), o(t, ["generateAudio"]) !== void 0) throw new Error("generateAudio parameter is not supported in Gemini API.");
  if (o(t, ["lastFrame"]) !== void 0) throw new Error("lastFrame parameter is not supported in Gemini API.");
  if (o(t, ["compressionQuality"]) !== void 0) throw new Error("compressionQuality parameter is not supported in Gemini API.");
  return n;
}
function Jl(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["prompt"]);
  r != null && s(n, ["instances[0]", "prompt"], r);
  const l = o(e, ["image"]);
  if (l != null && s(n, ["instances[0]", "image"], ql(l)), o(e, ["video"]) !== void 0) throw new Error("video parameter is not supported in Gemini API.");
  const a = o(e, ["config"]);
  return a != null && s(n, ["config"], Bl(a, n)), n;
}
function Hl(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function $l(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["data"]);
  i != null && s(e, ["data"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Wl(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["fileUri"]);
  i != null && s(e, ["fileUri"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Yl(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], Hl(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], $l(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], Wl(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function Q(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Yl(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function Kl(t) {
  const e = {}, n = o(t, ["anyOf"]);
  n != null && s(e, ["anyOf"], n);
  const i = o(t, ["default"]);
  i != null && s(e, ["default"], i);
  const r = o(t, ["description"]);
  r != null && s(e, ["description"], r);
  const l = o(t, ["enum"]);
  l != null && s(e, ["enum"], l);
  const a = o(t, ["example"]);
  a != null && s(e, ["example"], a);
  const f = o(t, ["format"]);
  f != null && s(e, ["format"], f);
  const c = o(t, ["items"]);
  c != null && s(e, ["items"], c);
  const u = o(t, ["maxItems"]);
  u != null && s(e, ["maxItems"], u);
  const d = o(t, ["maxLength"]);
  d != null && s(e, ["maxLength"], d);
  const p = o(t, ["maxProperties"]);
  p != null && s(e, ["maxProperties"], p);
  const m = o(t, ["maximum"]);
  m != null && s(e, ["maximum"], m);
  const g = o(t, ["minItems"]);
  g != null && s(e, ["minItems"], g);
  const h = o(t, ["minLength"]);
  h != null && s(e, ["minLength"], h);
  const v = o(t, ["minProperties"]);
  v != null && s(e, ["minProperties"], v);
  const T = o(t, ["minimum"]);
  T != null && s(e, ["minimum"], T);
  const E = o(t, ["nullable"]);
  E != null && s(e, ["nullable"], E);
  const y = o(t, ["pattern"]);
  y != null && s(e, ["pattern"], y);
  const S = o(t, ["properties"]);
  S != null && s(e, ["properties"], S);
  const A = o(t, ["propertyOrdering"]);
  A != null && s(e, ["propertyOrdering"], A);
  const _ = o(t, ["required"]);
  _ != null && s(e, ["required"], _);
  const I = o(t, ["title"]);
  I != null && s(e, ["title"], I);
  const R = o(t, ["type"]);
  return R != null && s(e, ["type"], R), e;
}
function zl(t) {
  const e = {}, n = o(t, ["featureSelectionPreference"]);
  return n != null && s(e, ["featureSelectionPreference"], n), e;
}
function Xl(t) {
  const e = {}, n = o(t, ["method"]);
  n != null && s(e, ["method"], n);
  const i = o(t, ["category"]);
  i != null && s(e, ["category"], i);
  const r = o(t, ["threshold"]);
  return r != null && s(e, ["threshold"], r), e;
}
function Ql(t) {
  const e = {};
  if (o(t, ["behavior"]) !== void 0) throw new Error("behavior parameter is not supported in Vertex AI.");
  const n = o(t, ["description"]);
  n != null && s(e, ["description"], n);
  const i = o(t, ["name"]);
  i != null && s(e, ["name"], i);
  const r = o(t, ["parameters"]);
  r != null && s(e, ["parameters"], r);
  const l = o(t, ["parametersJsonSchema"]);
  l != null && s(e, ["parametersJsonSchema"], l);
  const a = o(t, ["response"]);
  a != null && s(e, ["response"], a);
  const f = o(t, ["responseJsonSchema"]);
  return f != null && s(e, ["responseJsonSchema"], f), e;
}
function Zl(t) {
  const e = {}, n = o(t, ["startTime"]);
  n != null && s(e, ["startTime"], n);
  const i = o(t, ["endTime"]);
  return i != null && s(e, ["endTime"], i), e;
}
function bl(t) {
  const e = {}, n = o(t, ["timeRangeFilter"]);
  return n != null && s(e, ["timeRangeFilter"], Zl(n)), e;
}
function Ol(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["dynamicThreshold"]);
  return i != null && s(e, ["dynamicThreshold"], i), e;
}
function jl(t) {
  const e = {}, n = o(t, ["dynamicRetrievalConfig"]);
  return n != null && s(e, ["dynamicRetrievalConfig"], Ol(n)), e;
}
function ea() {
  return {};
}
function ta(t) {
  const e = {}, n = o(t, ["apiKeyString"]);
  return n != null && s(e, ["apiKeyString"], n), e;
}
function na(t) {
  const e = {}, n = o(t, ["apiKeyConfig"]);
  n != null && s(e, ["apiKeyConfig"], ta(n));
  const i = o(t, ["authType"]);
  i != null && s(e, ["authType"], i);
  const r = o(t, ["googleServiceAccountConfig"]);
  r != null && s(e, ["googleServiceAccountConfig"], r);
  const l = o(t, ["httpBasicAuthConfig"]);
  l != null && s(e, ["httpBasicAuthConfig"], l);
  const a = o(t, ["oauthConfig"]);
  a != null && s(e, ["oauthConfig"], a);
  const f = o(t, ["oidcConfig"]);
  return f != null && s(e, ["oidcConfig"], f), e;
}
function oa(t) {
  const e = {}, n = o(t, ["authConfig"]);
  return n != null && s(e, ["authConfig"], na(n)), e;
}
function ia() {
  return {};
}
function hn(t) {
  const e = {}, n = o(t, ["functionDeclarations"]);
  if (n != null) {
    let p = n;
    Array.isArray(p) && (p = p.map((m) => Ql(m))), s(e, ["functionDeclarations"], p);
  }
  const i = o(t, ["retrieval"]);
  i != null && s(e, ["retrieval"], i);
  const r = o(t, ["googleSearch"]);
  r != null && s(e, ["googleSearch"], bl(r));
  const l = o(t, ["googleSearchRetrieval"]);
  l != null && s(e, ["googleSearchRetrieval"], jl(l)), o(t, ["enterpriseWebSearch"]) != null && s(e, ["enterpriseWebSearch"], ea());
  const f = o(t, ["googleMaps"]);
  f != null && s(e, ["googleMaps"], oa(f)), o(t, ["urlContext"]) != null && s(e, ["urlContext"], ia());
  const u = o(t, ["codeExecution"]);
  u != null && s(e, ["codeExecution"], u);
  const d = o(t, ["computerUse"]);
  return d != null && s(e, ["computerUse"], d), e;
}
function sa(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["allowedFunctionNames"]);
  return i != null && s(e, ["allowedFunctionNames"], i), e;
}
function ra(t) {
  const e = {}, n = o(t, ["latitude"]);
  n != null && s(e, ["latitude"], n);
  const i = o(t, ["longitude"]);
  return i != null && s(e, ["longitude"], i), e;
}
function la(t) {
  const e = {}, n = o(t, ["latLng"]);
  n != null && s(e, ["latLng"], ra(n));
  const i = o(t, ["languageCode"]);
  return i != null && s(e, ["languageCode"], i), e;
}
function aa(t) {
  const e = {}, n = o(t, ["functionCallingConfig"]);
  n != null && s(e, ["functionCallingConfig"], sa(n));
  const i = o(t, ["retrievalConfig"]);
  return i != null && s(e, ["retrievalConfig"], la(i)), e;
}
function ua(t) {
  const e = {}, n = o(t, ["voiceName"]);
  return n != null && s(e, ["voiceName"], n), e;
}
function fa(t) {
  const e = {}, n = o(t, ["prebuiltVoiceConfig"]);
  return n != null && s(e, ["prebuiltVoiceConfig"], ua(n)), e;
}
function ca(t) {
  const e = {}, n = o(t, ["voiceConfig"]);
  if (n != null && s(e, ["voiceConfig"], fa(n)), o(t, ["multiSpeakerVoiceConfig"]) !== void 0) throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
  const i = o(t, ["languageCode"]);
  return i != null && s(e, ["languageCode"], i), e;
}
function da(t) {
  const e = {}, n = o(t, ["includeThoughts"]);
  n != null && s(e, ["includeThoughts"], n);
  const i = o(t, ["thinkingBudget"]);
  return i != null && s(e, ["thinkingBudget"], i), e;
}
function pa(t, e, n) {
  const i = {}, r = o(e, ["systemInstruction"]);
  n !== void 0 && r != null && s(n, ["systemInstruction"], Q(w(r)));
  const l = o(e, ["temperature"]);
  l != null && s(i, ["temperature"], l);
  const a = o(e, ["topP"]);
  a != null && s(i, ["topP"], a);
  const f = o(e, ["topK"]);
  f != null && s(i, ["topK"], f);
  const c = o(e, ["candidateCount"]);
  c != null && s(i, ["candidateCount"], c);
  const u = o(e, ["maxOutputTokens"]);
  u != null && s(i, ["maxOutputTokens"], u);
  const d = o(e, ["stopSequences"]);
  d != null && s(i, ["stopSequences"], d);
  const p = o(e, ["responseLogprobs"]);
  p != null && s(i, ["responseLogprobs"], p);
  const m = o(e, ["logprobs"]);
  m != null && s(i, ["logprobs"], m);
  const g = o(e, ["presencePenalty"]);
  g != null && s(i, ["presencePenalty"], g);
  const h = o(e, ["frequencyPenalty"]);
  h != null && s(i, ["frequencyPenalty"], h);
  const v = o(e, ["seed"]);
  v != null && s(i, ["seed"], v);
  const T = o(e, ["responseMimeType"]);
  T != null && s(i, ["responseMimeType"], T);
  const E = o(e, ["responseSchema"]);
  E != null && s(i, ["responseSchema"], Kl(_e(E)));
  const y = o(e, ["responseJsonSchema"]);
  y != null && s(i, ["responseJsonSchema"], y);
  const S = o(e, ["routingConfig"]);
  S != null && s(i, ["routingConfig"], S);
  const A = o(e, ["modelSelectionConfig"]);
  A != null && s(i, ["modelConfig"], zl(A));
  const _ = o(e, ["safetySettings"]);
  if (n !== void 0 && _ != null) {
    let V = _;
    Array.isArray(V) && (V = V.map((ue) => Xl(ue))), s(n, ["safetySettings"], V);
  }
  const I = o(e, ["tools"]);
  if (n !== void 0 && I != null) {
    let V = z(I);
    Array.isArray(V) && (V = V.map((ue) => hn(K(ue)))), s(n, ["tools"], V);
  }
  const R = o(e, ["toolConfig"]);
  n !== void 0 && R != null && s(n, ["toolConfig"], aa(R));
  const U = o(e, ["labels"]);
  n !== void 0 && U != null && s(n, ["labels"], U);
  const M = o(e, ["cachedContent"]);
  n !== void 0 && M != null && s(n, ["cachedContent"], k(t, M));
  const D = o(e, ["responseModalities"]);
  D != null && s(i, ["responseModalities"], D);
  const P = o(e, ["mediaResolution"]);
  P != null && s(i, ["mediaResolution"], P);
  const L = o(e, ["speechConfig"]);
  L != null && s(i, ["speechConfig"], ca(Ae(L)));
  const Pe = o(e, ["audioTimestamp"]);
  Pe != null && s(i, ["audioTimestamp"], Pe);
  const xe = o(e, ["thinkingConfig"]);
  return xe != null && s(i, ["thinkingConfig"], da(xe)), i;
}
function Vt(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["contents"]);
  if (r != null) {
    let a = F(r);
    Array.isArray(a) && (a = a.map((f) => Q(f))), s(n, ["contents"], a);
  }
  const l = o(e, ["config"]);
  return l != null && s(n, ["generationConfig"], pa(t, l, n)), n;
}
function ma(t, e) {
  const n = {}, i = o(t, ["taskType"]);
  e !== void 0 && i != null && s(e, ["instances[]", "task_type"], i);
  const r = o(t, ["title"]);
  e !== void 0 && r != null && s(e, ["instances[]", "title"], r);
  const l = o(t, ["outputDimensionality"]);
  e !== void 0 && l != null && s(e, ["parameters", "outputDimensionality"], l);
  const a = o(t, ["mimeType"]);
  e !== void 0 && a != null && s(e, ["instances[]", "mimeType"], a);
  const f = o(t, ["autoTruncate"]);
  return e !== void 0 && f != null && s(e, ["parameters", "autoTruncate"], f), n;
}
function ga(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["contents"]);
  r != null && s(n, ["instances[]", "content"], bt(t, r));
  const l = o(e, ["config"]);
  return l != null && s(n, ["config"], ma(l, n)), n;
}
function ha(t, e) {
  const n = {}, i = o(t, ["outputGcsUri"]);
  e !== void 0 && i != null && s(e, ["parameters", "storageUri"], i);
  const r = o(t, ["negativePrompt"]);
  e !== void 0 && r != null && s(e, ["parameters", "negativePrompt"], r);
  const l = o(t, ["numberOfImages"]);
  e !== void 0 && l != null && s(e, ["parameters", "sampleCount"], l);
  const a = o(t, ["aspectRatio"]);
  e !== void 0 && a != null && s(e, ["parameters", "aspectRatio"], a);
  const f = o(t, ["guidanceScale"]);
  e !== void 0 && f != null && s(e, ["parameters", "guidanceScale"], f);
  const c = o(t, ["seed"]);
  e !== void 0 && c != null && s(e, ["parameters", "seed"], c);
  const u = o(t, ["safetyFilterLevel"]);
  e !== void 0 && u != null && s(e, ["parameters", "safetySetting"], u);
  const d = o(t, ["personGeneration"]);
  e !== void 0 && d != null && s(e, ["parameters", "personGeneration"], d);
  const p = o(t, ["includeSafetyAttributes"]);
  e !== void 0 && p != null && s(e, ["parameters", "includeSafetyAttributes"], p);
  const m = o(t, ["includeRaiReason"]);
  e !== void 0 && m != null && s(e, ["parameters", "includeRaiReason"], m);
  const g = o(t, ["language"]);
  e !== void 0 && g != null && s(e, ["parameters", "language"], g);
  const h = o(t, ["outputMimeType"]);
  e !== void 0 && h != null && s(e, ["parameters", "outputOptions", "mimeType"], h);
  const v = o(t, ["outputCompressionQuality"]);
  e !== void 0 && v != null && s(e, ["parameters", "outputOptions", "compressionQuality"], v);
  const T = o(t, ["addWatermark"]);
  e !== void 0 && T != null && s(e, ["parameters", "addWatermark"], T);
  const E = o(t, ["imageSize"]);
  e !== void 0 && E != null && s(e, ["parameters", "sampleImageSize"], E);
  const y = o(t, ["enhancePrompt"]);
  return e !== void 0 && y != null && s(e, ["parameters", "enhancePrompt"], y), n;
}
function va(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["prompt"]);
  r != null && s(n, ["instances[0]", "prompt"], r);
  const l = o(e, ["config"]);
  return l != null && s(n, ["config"], ha(l, n)), n;
}
function ae(t) {
  const e = {}, n = o(t, ["gcsUri"]);
  n != null && s(e, ["gcsUri"], n);
  const i = o(t, ["imageBytes"]);
  i != null && s(e, ["bytesBase64Encoded"], J(i));
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Ta(t) {
  const e = {}, n = o(t, ["maskMode"]);
  n != null && s(e, ["maskMode"], n);
  const i = o(t, ["segmentationClasses"]);
  i != null && s(e, ["maskClasses"], i);
  const r = o(t, ["maskDilation"]);
  return r != null && s(e, ["dilation"], r), e;
}
function Ca(t) {
  const e = {}, n = o(t, ["controlType"]);
  n != null && s(e, ["controlType"], n);
  const i = o(t, ["enableControlImageComputation"]);
  return i != null && s(e, ["computeControl"], i), e;
}
function ya(t) {
  const e = {}, n = o(t, ["styleDescription"]);
  return n != null && s(e, ["styleDescription"], n), e;
}
function Ea(t) {
  const e = {}, n = o(t, ["subjectType"]);
  n != null && s(e, ["subjectType"], n);
  const i = o(t, ["subjectDescription"]);
  return i != null && s(e, ["subjectDescription"], i), e;
}
function Sa(t) {
  const e = {}, n = o(t, ["referenceImage"]);
  n != null && s(e, ["referenceImage"], ae(n));
  const i = o(t, ["referenceId"]);
  i != null && s(e, ["referenceId"], i);
  const r = o(t, ["referenceType"]);
  r != null && s(e, ["referenceType"], r);
  const l = o(t, ["maskImageConfig"]);
  l != null && s(e, ["maskImageConfig"], Ta(l));
  const a = o(t, ["controlImageConfig"]);
  a != null && s(e, ["controlImageConfig"], Ca(a));
  const f = o(t, ["styleImageConfig"]);
  f != null && s(e, ["styleImageConfig"], ya(f));
  const c = o(t, ["subjectImageConfig"]);
  return c != null && s(e, ["subjectImageConfig"], Ea(c)), e;
}
function _a(t, e) {
  const n = {}, i = o(t, ["outputGcsUri"]);
  e !== void 0 && i != null && s(e, ["parameters", "storageUri"], i);
  const r = o(t, ["negativePrompt"]);
  e !== void 0 && r != null && s(e, ["parameters", "negativePrompt"], r);
  const l = o(t, ["numberOfImages"]);
  e !== void 0 && l != null && s(e, ["parameters", "sampleCount"], l);
  const a = o(t, ["aspectRatio"]);
  e !== void 0 && a != null && s(e, ["parameters", "aspectRatio"], a);
  const f = o(t, ["guidanceScale"]);
  e !== void 0 && f != null && s(e, ["parameters", "guidanceScale"], f);
  const c = o(t, ["seed"]);
  e !== void 0 && c != null && s(e, ["parameters", "seed"], c);
  const u = o(t, ["safetyFilterLevel"]);
  e !== void 0 && u != null && s(e, ["parameters", "safetySetting"], u);
  const d = o(t, ["personGeneration"]);
  e !== void 0 && d != null && s(e, ["parameters", "personGeneration"], d);
  const p = o(t, ["includeSafetyAttributes"]);
  e !== void 0 && p != null && s(e, ["parameters", "includeSafetyAttributes"], p);
  const m = o(t, ["includeRaiReason"]);
  e !== void 0 && m != null && s(e, ["parameters", "includeRaiReason"], m);
  const g = o(t, ["language"]);
  e !== void 0 && g != null && s(e, ["parameters", "language"], g);
  const h = o(t, ["outputMimeType"]);
  e !== void 0 && h != null && s(e, ["parameters", "outputOptions", "mimeType"], h);
  const v = o(t, ["outputCompressionQuality"]);
  e !== void 0 && v != null && s(e, ["parameters", "outputOptions", "compressionQuality"], v);
  const T = o(t, ["addWatermark"]);
  e !== void 0 && T != null && s(e, ["parameters", "addWatermark"], T);
  const E = o(t, ["editMode"]);
  e !== void 0 && E != null && s(e, ["parameters", "editMode"], E);
  const y = o(t, ["baseSteps"]);
  return e !== void 0 && y != null && s(e, ["parameters", "editConfig", "baseSteps"], y), n;
}
function Aa(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["prompt"]);
  r != null && s(n, ["instances[0]", "prompt"], r);
  const l = o(e, ["referenceImages"]);
  if (l != null) {
    let f = l;
    Array.isArray(f) && (f = f.map((c) => Sa(c))), s(n, ["instances[0]", "referenceImages"], f);
  }
  const a = o(e, ["config"]);
  return a != null && s(n, ["config"], _a(a, n)), n;
}
function Ma(t, e) {
  const n = {}, i = o(t, ["includeRaiReason"]);
  e !== void 0 && i != null && s(e, ["parameters", "includeRaiReason"], i);
  const r = o(t, ["outputMimeType"]);
  e !== void 0 && r != null && s(e, ["parameters", "outputOptions", "mimeType"], r);
  const l = o(t, ["outputCompressionQuality"]);
  e !== void 0 && l != null && s(e, ["parameters", "outputOptions", "compressionQuality"], l);
  const a = o(t, ["enhanceInputImage"]);
  e !== void 0 && a != null && s(e, ["parameters", "upscaleConfig", "enhanceInputImage"], a);
  const f = o(t, ["imagePreservationFactor"]);
  e !== void 0 && f != null && s(e, ["parameters", "upscaleConfig", "imagePreservationFactor"], f);
  const c = o(t, ["numberOfImages"]);
  e !== void 0 && c != null && s(e, ["parameters", "sampleCount"], c);
  const u = o(t, ["mode"]);
  return e !== void 0 && u != null && s(e, ["parameters", "mode"], u), n;
}
function Ia(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["image"]);
  r != null && s(n, ["instances[0]", "image"], ae(r));
  const l = o(e, ["upscaleFactor"]);
  l != null && s(n, ["parameters", "upscaleConfig", "upscaleFactor"], l);
  const a = o(e, ["config"]);
  return a != null && s(n, ["config"], Ma(a, n)), n;
}
function Ra(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "name"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function Pa(t, e, n) {
  const i = {}, r = o(e, ["pageSize"]);
  n !== void 0 && r != null && s(n, ["_query", "pageSize"], r);
  const l = o(e, ["pageToken"]);
  n !== void 0 && l != null && s(n, ["_query", "pageToken"], l);
  const a = o(e, ["filter"]);
  n !== void 0 && a != null && s(n, ["_query", "filter"], a);
  const f = o(e, ["queryBase"]);
  return n !== void 0 && f != null && s(n, ["_url", "models_url"], en(t, f)), i;
}
function xa(t, e) {
  const n = {}, i = o(e, ["config"]);
  return i != null && s(n, ["config"], Pa(t, i, n)), n;
}
function Da(t, e) {
  const n = {}, i = o(t, ["displayName"]);
  e !== void 0 && i != null && s(e, ["displayName"], i);
  const r = o(t, ["description"]);
  e !== void 0 && r != null && s(e, ["description"], r);
  const l = o(t, ["defaultCheckpointId"]);
  return e !== void 0 && l != null && s(e, ["defaultCheckpointId"], l), n;
}
function Na(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], Da(r, n)), n;
}
function wa(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "name"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], r), n;
}
function Ua(t, e) {
  const n = {}, i = o(t, ["systemInstruction"]);
  e !== void 0 && i != null && s(e, ["systemInstruction"], Q(w(i)));
  const r = o(t, ["tools"]);
  if (e !== void 0 && r != null) {
    let a = r;
    Array.isArray(a) && (a = a.map((f) => hn(f))), s(e, ["tools"], a);
  }
  const l = o(t, ["generationConfig"]);
  return e !== void 0 && l != null && s(e, ["generationConfig"], l), n;
}
function Fa(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["contents"]);
  if (r != null) {
    let a = F(r);
    Array.isArray(a) && (a = a.map((f) => Q(f))), s(n, ["contents"], a);
  }
  const l = o(e, ["config"]);
  return l != null && s(n, ["config"], Ua(l, n)), n;
}
function La(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["contents"]);
  if (r != null) {
    let a = F(r);
    Array.isArray(a) && (a = a.map((f) => Q(f))), s(n, ["contents"], a);
  }
  const l = o(e, ["config"]);
  return l != null && s(n, ["config"], l), n;
}
function Va(t) {
  const e = {}, n = o(t, ["uri"]);
  n != null && s(e, ["gcsUri"], n);
  const i = o(t, ["videoBytes"]);
  i != null && s(e, ["bytesBase64Encoded"], J(i));
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function ka(t, e) {
  const n = {}, i = o(t, ["numberOfVideos"]);
  e !== void 0 && i != null && s(e, ["parameters", "sampleCount"], i);
  const r = o(t, ["outputGcsUri"]);
  e !== void 0 && r != null && s(e, ["parameters", "storageUri"], r);
  const l = o(t, ["fps"]);
  e !== void 0 && l != null && s(e, ["parameters", "fps"], l);
  const a = o(t, ["durationSeconds"]);
  e !== void 0 && a != null && s(e, ["parameters", "durationSeconds"], a);
  const f = o(t, ["seed"]);
  e !== void 0 && f != null && s(e, ["parameters", "seed"], f);
  const c = o(t, ["aspectRatio"]);
  e !== void 0 && c != null && s(e, ["parameters", "aspectRatio"], c);
  const u = o(t, ["resolution"]);
  e !== void 0 && u != null && s(e, ["parameters", "resolution"], u);
  const d = o(t, ["personGeneration"]);
  e !== void 0 && d != null && s(e, ["parameters", "personGeneration"], d);
  const p = o(t, ["pubsubTopic"]);
  e !== void 0 && p != null && s(e, ["parameters", "pubsubTopic"], p);
  const m = o(t, ["negativePrompt"]);
  e !== void 0 && m != null && s(e, ["parameters", "negativePrompt"], m);
  const g = o(t, ["enhancePrompt"]);
  e !== void 0 && g != null && s(e, ["parameters", "enhancePrompt"], g);
  const h = o(t, ["generateAudio"]);
  e !== void 0 && h != null && s(e, ["parameters", "generateAudio"], h);
  const v = o(t, ["lastFrame"]);
  e !== void 0 && v != null && s(e, ["instances[0]", "lastFrame"], ae(v));
  const T = o(t, ["compressionQuality"]);
  return e !== void 0 && T != null && s(e, ["parameters", "compressionQuality"], T), n;
}
function Ga(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["_url", "model"], x(t, i));
  const r = o(e, ["prompt"]);
  r != null && s(n, ["instances[0]", "prompt"], r);
  const l = o(e, ["image"]);
  l != null && s(n, ["instances[0]", "image"], ae(l));
  const a = o(e, ["video"]);
  a != null && s(n, ["instances[0]", "video"], Va(a));
  const f = o(e, ["config"]);
  return f != null && s(n, ["config"], ka(f, n)), n;
}
function qa(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function Ba(t) {
  const e = {}, n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Ja(t) {
  const e = {}, n = o(t, ["fileUri"]);
  n != null && s(e, ["fileUri"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Ha(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], qa(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], Ba(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], Ja(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function $a(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Ha(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function Wa(t) {
  const e = {}, n = o(t, ["citationSources"]);
  return n != null && s(e, ["citations"], n), e;
}
function Ya(t) {
  const e = {}, n = o(t, ["retrievedUrl"]);
  n != null && s(e, ["retrievedUrl"], n);
  const i = o(t, ["urlRetrievalStatus"]);
  return i != null && s(e, ["urlRetrievalStatus"], i), e;
}
function Ka(t) {
  const e = {}, n = o(t, ["urlMetadata"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Ya(r))), s(e, ["urlMetadata"], i);
  }
  return e;
}
function za(t) {
  const e = {}, n = o(t, ["content"]);
  n != null && s(e, ["content"], $a(n));
  const i = o(t, ["citationMetadata"]);
  i != null && s(e, ["citationMetadata"], Wa(i));
  const r = o(t, ["tokenCount"]);
  r != null && s(e, ["tokenCount"], r);
  const l = o(t, ["finishReason"]);
  l != null && s(e, ["finishReason"], l);
  const a = o(t, ["urlContextMetadata"]);
  a != null && s(e, ["urlContextMetadata"], Ka(a));
  const f = o(t, ["avgLogprobs"]);
  f != null && s(e, ["avgLogprobs"], f);
  const c = o(t, ["groundingMetadata"]);
  c != null && s(e, ["groundingMetadata"], c);
  const u = o(t, ["index"]);
  u != null && s(e, ["index"], u);
  const d = o(t, ["logprobsResult"]);
  d != null && s(e, ["logprobsResult"], d);
  const p = o(t, ["safetyRatings"]);
  return p != null && s(e, ["safetyRatings"], p), e;
}
function kt(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["candidates"]);
  if (i != null) {
    let f = i;
    Array.isArray(f) && (f = f.map((c) => za(c))), s(e, ["candidates"], f);
  }
  const r = o(t, ["modelVersion"]);
  r != null && s(e, ["modelVersion"], r);
  const l = o(t, ["promptFeedback"]);
  l != null && s(e, ["promptFeedback"], l);
  const a = o(t, ["usageMetadata"]);
  return a != null && s(e, ["usageMetadata"], a), e;
}
function Xa(t) {
  const e = {}, n = o(t, ["values"]);
  return n != null && s(e, ["values"], n), e;
}
function Qa() {
  return {};
}
function Za(t) {
  const e = {}, n = o(t, ["embeddings"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Xa(l))), s(e, ["embeddings"], r);
  }
  return o(t, ["metadata"]) != null && s(e, ["metadata"], Qa()), e;
}
function ba(t) {
  const e = {}, n = o(t, ["bytesBase64Encoded"]);
  n != null && s(e, ["imageBytes"], J(n));
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function vn(t) {
  const e = {}, n = o(t, ["safetyAttributes", "categories"]);
  n != null && s(e, ["categories"], n);
  const i = o(t, ["safetyAttributes", "scores"]);
  i != null && s(e, ["scores"], i);
  const r = o(t, ["contentType"]);
  return r != null && s(e, ["contentType"], r), e;
}
function Oa(t) {
  const e = {}, n = o(t, ["_self"]);
  n != null && s(e, ["image"], ba(n));
  const i = o(t, ["raiFilteredReason"]);
  i != null && s(e, ["raiFilteredReason"], i);
  const r = o(t, ["_self"]);
  return r != null && s(e, ["safetyAttributes"], vn(r)), e;
}
function ja(t) {
  const e = {}, n = o(t, ["predictions"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Oa(l))), s(e, ["generatedImages"], r);
  }
  const i = o(t, ["positivePromptSafetyAttributes"]);
  return i != null && s(e, ["positivePromptSafetyAttributes"], vn(i)), e;
}
function eu(t) {
  const e = {}, n = o(t, ["baseModel"]);
  n != null && s(e, ["baseModel"], n);
  const i = o(t, ["createTime"]);
  i != null && s(e, ["createTime"], i);
  const r = o(t, ["updateTime"]);
  return r != null && s(e, ["updateTime"], r), e;
}
function Ce(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["displayName"]);
  i != null && s(e, ["displayName"], i);
  const r = o(t, ["description"]);
  r != null && s(e, ["description"], r);
  const l = o(t, ["version"]);
  l != null && s(e, ["version"], l);
  const a = o(t, ["_self"]);
  a != null && s(e, ["tunedModelInfo"], eu(a));
  const f = o(t, ["inputTokenLimit"]);
  f != null && s(e, ["inputTokenLimit"], f);
  const c = o(t, ["outputTokenLimit"]);
  c != null && s(e, ["outputTokenLimit"], c);
  const u = o(t, ["supportedGenerationMethods"]);
  return u != null && s(e, ["supportedActions"], u), e;
}
function tu(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["_self"]);
  if (r != null) {
    let l = tn(r);
    Array.isArray(l) && (l = l.map((a) => Ce(a))), s(e, ["models"], l);
  }
  return e;
}
function nu() {
  return {};
}
function ou(t) {
  const e = {}, n = o(t, ["totalTokens"]);
  n != null && s(e, ["totalTokens"], n);
  const i = o(t, ["cachedContentTokenCount"]);
  return i != null && s(e, ["cachedContentTokenCount"], i), e;
}
function iu(t) {
  const e = {}, n = o(t, ["video", "uri"]);
  n != null && s(e, ["uri"], n);
  const i = o(t, ["video", "encodedVideo"]);
  i != null && s(e, ["videoBytes"], J(i));
  const r = o(t, ["encoding"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function su(t) {
  const e = {}, n = o(t, ["_self"]);
  return n != null && s(e, ["video"], iu(n)), e;
}
function ru(t) {
  const e = {}, n = o(t, ["generatedSamples"]);
  if (n != null) {
    let l = n;
    Array.isArray(l) && (l = l.map((a) => su(a))), s(e, ["generatedVideos"], l);
  }
  const i = o(t, ["raiMediaFilteredCount"]);
  i != null && s(e, ["raiMediaFilteredCount"], i);
  const r = o(t, ["raiMediaFilteredReasons"]);
  return r != null && s(e, ["raiMediaFilteredReasons"], r), e;
}
function lu(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["metadata"]);
  i != null && s(e, ["metadata"], i);
  const r = o(t, ["done"]);
  r != null && s(e, ["done"], r);
  const l = o(t, ["error"]);
  l != null && s(e, ["error"], l);
  const a = o(t, ["response", "generateVideoResponse"]);
  return a != null && s(e, ["response"], ru(a)), e;
}
function au(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function uu(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["data"]);
  i != null && s(e, ["data"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function fu(t) {
  const e = {}, n = o(t, ["displayName"]);
  n != null && s(e, ["displayName"], n);
  const i = o(t, ["fileUri"]);
  i != null && s(e, ["fileUri"], i);
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function cu(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], au(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], uu(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], fu(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function du(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => cu(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function pu(t) {
  const e = {}, n = o(t, ["citations"]);
  return n != null && s(e, ["citations"], n), e;
}
function mu(t) {
  const e = {}, n = o(t, ["retrievedUrl"]);
  n != null && s(e, ["retrievedUrl"], n);
  const i = o(t, ["urlRetrievalStatus"]);
  return i != null && s(e, ["urlRetrievalStatus"], i), e;
}
function gu(t) {
  const e = {}, n = o(t, ["urlMetadata"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => mu(r))), s(e, ["urlMetadata"], i);
  }
  return e;
}
function hu(t) {
  const e = {}, n = o(t, ["content"]);
  n != null && s(e, ["content"], du(n));
  const i = o(t, ["citationMetadata"]);
  i != null && s(e, ["citationMetadata"], pu(i));
  const r = o(t, ["finishMessage"]);
  r != null && s(e, ["finishMessage"], r);
  const l = o(t, ["finishReason"]);
  l != null && s(e, ["finishReason"], l);
  const a = o(t, ["urlContextMetadata"]);
  a != null && s(e, ["urlContextMetadata"], gu(a));
  const f = o(t, ["avgLogprobs"]);
  f != null && s(e, ["avgLogprobs"], f);
  const c = o(t, ["groundingMetadata"]);
  c != null && s(e, ["groundingMetadata"], c);
  const u = o(t, ["index"]);
  u != null && s(e, ["index"], u);
  const d = o(t, ["logprobsResult"]);
  d != null && s(e, ["logprobsResult"], d);
  const p = o(t, ["safetyRatings"]);
  return p != null && s(e, ["safetyRatings"], p), e;
}
function Gt(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["candidates"]);
  if (i != null) {
    let u = i;
    Array.isArray(u) && (u = u.map((d) => hu(d))), s(e, ["candidates"], u);
  }
  const r = o(t, ["createTime"]);
  r != null && s(e, ["createTime"], r);
  const l = o(t, ["responseId"]);
  l != null && s(e, ["responseId"], l);
  const a = o(t, ["modelVersion"]);
  a != null && s(e, ["modelVersion"], a);
  const f = o(t, ["promptFeedback"]);
  f != null && s(e, ["promptFeedback"], f);
  const c = o(t, ["usageMetadata"]);
  return c != null && s(e, ["usageMetadata"], c), e;
}
function vu(t) {
  const e = {}, n = o(t, ["truncated"]);
  n != null && s(e, ["truncated"], n);
  const i = o(t, ["token_count"]);
  return i != null && s(e, ["tokenCount"], i), e;
}
function Tu(t) {
  const e = {}, n = o(t, ["values"]);
  n != null && s(e, ["values"], n);
  const i = o(t, ["statistics"]);
  return i != null && s(e, ["statistics"], vu(i)), e;
}
function Cu(t) {
  const e = {}, n = o(t, ["billableCharacterCount"]);
  return n != null && s(e, ["billableCharacterCount"], n), e;
}
function yu(t) {
  const e = {}, n = o(t, ["predictions[]", "embeddings"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Tu(l))), s(e, ["embeddings"], r);
  }
  const i = o(t, ["metadata"]);
  return i != null && s(e, ["metadata"], Cu(i)), e;
}
function Eu(t) {
  const e = {}, n = o(t, ["gcsUri"]);
  n != null && s(e, ["gcsUri"], n);
  const i = o(t, ["bytesBase64Encoded"]);
  i != null && s(e, ["imageBytes"], J(i));
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Tn(t) {
  const e = {}, n = o(t, ["safetyAttributes", "categories"]);
  n != null && s(e, ["categories"], n);
  const i = o(t, ["safetyAttributes", "scores"]);
  i != null && s(e, ["scores"], i);
  const r = o(t, ["contentType"]);
  return r != null && s(e, ["contentType"], r), e;
}
function Ie(t) {
  const e = {}, n = o(t, ["_self"]);
  n != null && s(e, ["image"], Eu(n));
  const i = o(t, ["raiFilteredReason"]);
  i != null && s(e, ["raiFilteredReason"], i);
  const r = o(t, ["_self"]);
  r != null && s(e, ["safetyAttributes"], Tn(r));
  const l = o(t, ["prompt"]);
  return l != null && s(e, ["enhancedPrompt"], l), e;
}
function Su(t) {
  const e = {}, n = o(t, ["predictions"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Ie(l))), s(e, ["generatedImages"], r);
  }
  const i = o(t, ["positivePromptSafetyAttributes"]);
  return i != null && s(e, ["positivePromptSafetyAttributes"], Tn(i)), e;
}
function _u(t) {
  const e = {}, n = o(t, ["predictions"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Ie(r))), s(e, ["generatedImages"], i);
  }
  return e;
}
function Au(t) {
  const e = {}, n = o(t, ["predictions"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Ie(r))), s(e, ["generatedImages"], i);
  }
  return e;
}
function Mu(t) {
  const e = {}, n = o(t, ["endpoint"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["deployedModelId"]);
  return i != null && s(e, ["deployedModelId"], i), e;
}
function Iu(t) {
  const e = {}, n = o(t, ["labels", "google-vertex-llm-tuning-base-model-id"]);
  n != null && s(e, ["baseModel"], n);
  const i = o(t, ["createTime"]);
  i != null && s(e, ["createTime"], i);
  const r = o(t, ["updateTime"]);
  return r != null && s(e, ["updateTime"], r), e;
}
function Ru(t) {
  const e = {}, n = o(t, ["checkpointId"]);
  n != null && s(e, ["checkpointId"], n);
  const i = o(t, ["epoch"]);
  i != null && s(e, ["epoch"], i);
  const r = o(t, ["step"]);
  return r != null && s(e, ["step"], r), e;
}
function ye(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["displayName"]);
  i != null && s(e, ["displayName"], i);
  const r = o(t, ["description"]);
  r != null && s(e, ["description"], r);
  const l = o(t, ["versionId"]);
  l != null && s(e, ["version"], l);
  const a = o(t, ["deployedModels"]);
  if (a != null) {
    let p = a;
    Array.isArray(p) && (p = p.map((m) => Mu(m))), s(e, ["endpoints"], p);
  }
  const f = o(t, ["labels"]);
  f != null && s(e, ["labels"], f);
  const c = o(t, ["_self"]);
  c != null && s(e, ["tunedModelInfo"], Iu(c));
  const u = o(t, ["defaultCheckpointId"]);
  u != null && s(e, ["defaultCheckpointId"], u);
  const d = o(t, ["checkpoints"]);
  if (d != null) {
    let p = d;
    Array.isArray(p) && (p = p.map((m) => Ru(m))), s(e, ["checkpoints"], p);
  }
  return e;
}
function Pu(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["_self"]);
  if (r != null) {
    let l = tn(r);
    Array.isArray(l) && (l = l.map((a) => ye(a))), s(e, ["models"], l);
  }
  return e;
}
function xu() {
  return {};
}
function Du(t) {
  const e = {}, n = o(t, ["totalTokens"]);
  return n != null && s(e, ["totalTokens"], n), e;
}
function Nu(t) {
  const e = {}, n = o(t, ["tokensInfo"]);
  return n != null && s(e, ["tokensInfo"], n), e;
}
function wu(t) {
  const e = {}, n = o(t, ["gcsUri"]);
  n != null && s(e, ["uri"], n);
  const i = o(t, ["bytesBase64Encoded"]);
  i != null && s(e, ["videoBytes"], J(i));
  const r = o(t, ["mimeType"]);
  return r != null && s(e, ["mimeType"], r), e;
}
function Uu(t) {
  const e = {}, n = o(t, ["_self"]);
  return n != null && s(e, ["video"], wu(n)), e;
}
function Fu(t) {
  const e = {}, n = o(t, ["videos"]);
  if (n != null) {
    let l = n;
    Array.isArray(l) && (l = l.map((a) => Uu(a))), s(e, ["generatedVideos"], l);
  }
  const i = o(t, ["raiMediaFilteredCount"]);
  i != null && s(e, ["raiMediaFilteredCount"], i);
  const r = o(t, ["raiMediaFilteredReasons"]);
  return r != null && s(e, ["raiMediaFilteredReasons"], r), e;
}
function Lu(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["metadata"]);
  i != null && s(e, ["metadata"], i);
  const r = o(t, ["done"]);
  r != null && s(e, ["done"], r);
  const l = o(t, ["error"]);
  l != null && s(e, ["error"], l);
  const a = o(t, ["response"]);
  return a != null && s(e, ["response"], Fu(a)), e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Vu = "Content-Type", ku = "X-Server-Timeout", Gu = "User-Agent", Ee = "x-goog-api-client", qu = "1.11.0", Bu = `google-genai-sdk/${qu}`, Ju = "v1beta1", Hu = "v1beta", qt = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
class $u {
  constructor(e) {
    var n, i;
    this.clientOptions = Object.assign(Object.assign({}, e), { project: e.project, location: e.location, apiKey: e.apiKey, vertexai: e.vertexai });
    const r = {};
    this.clientOptions.vertexai ? (r.apiVersion = (n = this.clientOptions.apiVersion) !== null && n !== void 0 ? n : Ju, r.baseUrl = this.baseUrlFromProjectLocation(), this.normalizeAuthParameters()) : (r.apiVersion = (i = this.clientOptions.apiVersion) !== null && i !== void 0 ? i : Hu, r.baseUrl = "https://generativelanguage.googleapis.com/"), r.headers = this.getDefaultHeaders(), this.clientOptions.httpOptions = r, e.httpOptions && (this.clientOptions.httpOptions = this.patchHttpOptions(r, e.httpOptions));
  }
  baseUrlFromProjectLocation() {
    return this.clientOptions.project && this.clientOptions.location && this.clientOptions.location !== "global" ? `https://${this.clientOptions.location}-aiplatform.googleapis.com/` : "https://aiplatform.googleapis.com/";
  }
  normalizeAuthParameters() {
    if (this.clientOptions.project && this.clientOptions.location) {
      this.clientOptions.apiKey = void 0;
      return;
    }
    this.clientOptions.project = void 0, this.clientOptions.location = void 0;
  }
  isVertexAI() {
    var e;
    return (e = this.clientOptions.vertexai) !== null && e !== void 0 ? e : false;
  }
  getProject() {
    return this.clientOptions.project;
  }
  getLocation() {
    return this.clientOptions.location;
  }
  getApiVersion() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.apiVersion !== void 0) return this.clientOptions.httpOptions.apiVersion;
    throw new Error("API version is not set.");
  }
  getBaseUrl() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.baseUrl !== void 0) return this.clientOptions.httpOptions.baseUrl;
    throw new Error("Base URL is not set.");
  }
  getRequestUrl() {
    return this.getRequestUrlInternal(this.clientOptions.httpOptions);
  }
  getHeaders() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.headers !== void 0) return this.clientOptions.httpOptions.headers;
    throw new Error("Headers are not set.");
  }
  getRequestUrlInternal(e) {
    if (!e || e.baseUrl === void 0 || e.apiVersion === void 0) throw new Error("HTTP options are not correctly set.");
    const i = [e.baseUrl.endsWith("/") ? e.baseUrl.slice(0, -1) : e.baseUrl];
    return e.apiVersion && e.apiVersion !== "" && i.push(e.apiVersion), i.join("/");
  }
  getBaseResourcePath() {
    return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
  }
  getApiKey() {
    return this.clientOptions.apiKey;
  }
  getWebsocketBaseUrl() {
    const e = this.getBaseUrl(), n = new URL(e);
    return n.protocol = n.protocol == "http:" ? "ws" : "wss", n.toString();
  }
  setBaseUrl(e) {
    if (this.clientOptions.httpOptions) this.clientOptions.httpOptions.baseUrl = e;
    else throw new Error("HTTP options are not correctly set.");
  }
  constructUrl(e, n, i) {
    const r = [this.getRequestUrlInternal(n)];
    return i && r.push(this.getBaseResourcePath()), e !== "" && r.push(e), new URL(`${r.join("/")}`);
  }
  shouldPrependVertexProjectPath(e) {
    return !(this.clientOptions.apiKey || !this.clientOptions.vertexai || e.path.startsWith("projects/") || e.httpMethod === "GET" && e.path.startsWith("publishers/google/models"));
  }
  async request(e) {
    let n = this.clientOptions.httpOptions;
    e.httpOptions && (n = this.patchHttpOptions(this.clientOptions.httpOptions, e.httpOptions));
    const i = this.shouldPrependVertexProjectPath(e), r = this.constructUrl(e.path, n, i);
    if (e.queryParams) for (const [a, f] of Object.entries(e.queryParams)) r.searchParams.append(a, String(f));
    let l = {};
    if (e.httpMethod === "GET") {
      if (e.body && e.body !== "{}") throw new Error("Request body should be empty for GET request, but got non empty request body");
    } else l.body = e.body;
    return l = await this.includeExtraHttpOptionsToRequestInit(l, n, e.abortSignal), this.unaryApiCall(r, l, e.httpMethod);
  }
  patchHttpOptions(e, n) {
    const i = JSON.parse(JSON.stringify(e));
    for (const [r, l] of Object.entries(n)) typeof l == "object" ? i[r] = Object.assign(Object.assign({}, i[r]), l) : l !== void 0 && (i[r] = l);
    return i;
  }
  async requestStream(e) {
    let n = this.clientOptions.httpOptions;
    e.httpOptions && (n = this.patchHttpOptions(this.clientOptions.httpOptions, e.httpOptions));
    const i = this.shouldPrependVertexProjectPath(e), r = this.constructUrl(e.path, n, i);
    (!r.searchParams.has("alt") || r.searchParams.get("alt") !== "sse") && r.searchParams.set("alt", "sse");
    let l = {};
    return l.body = e.body, l = await this.includeExtraHttpOptionsToRequestInit(l, n, e.abortSignal), this.streamApiCall(r, l, e.httpMethod);
  }
  async includeExtraHttpOptionsToRequestInit(e, n, i) {
    if (n && n.timeout || i) {
      const r = new AbortController(), l = r.signal;
      if (n.timeout && (n == null ? void 0 : n.timeout) > 0) {
        const a = setTimeout(() => r.abort(), n.timeout);
        a && typeof a.unref == "function" && a.unref();
      }
      i && i.addEventListener("abort", () => {
        r.abort();
      }), e.signal = l;
    }
    return n && n.extraBody !== null && Wu(e, n.extraBody), e.headers = await this.getHeadersInternal(n), e;
  }
  async unaryApiCall(e, n, i) {
    return this.apiCall(e.toString(), Object.assign(Object.assign({}, n), { method: i })).then(async (r) => (await Bt(r), new pe(r))).catch((r) => {
      throw r instanceof Error ? r : new Error(JSON.stringify(r));
    });
  }
  async streamApiCall(e, n, i) {
    return this.apiCall(e.toString(), Object.assign(Object.assign({}, n), { method: i })).then(async (r) => (await Bt(r), this.processStreamResponse(r))).catch((r) => {
      throw r instanceof Error ? r : new Error(JSON.stringify(r));
    });
  }
  processStreamResponse(e) {
    var n;
    return W(this, arguments, function* () {
      const r = (n = e == null ? void 0 : e.body) === null || n === void 0 ? void 0 : n.getReader(), l = new TextDecoder("utf-8");
      if (!r) throw new Error("Response body is empty");
      try {
        let a = "";
        for (; ; ) {
          const { done: f, value: c } = yield N(r.read());
          if (f) {
            if (a.trim().length > 0) throw new Error("Incomplete JSON segment at the end");
            break;
          }
          const u = l.decode(c, { stream: true });
          try {
            const p = JSON.parse(u);
            if ("error" in p) {
              const m = JSON.parse(JSON.stringify(p.error)), g = m.status, h = m.code, v = `got status: ${g}. ${JSON.stringify(p)}`;
              if (h >= 400 && h < 600) throw new re({ message: v, status: h });
            }
          } catch (p) {
            if (p.name === "ApiError") throw p;
          }
          a += u;
          let d = a.match(qt);
          for (; d; ) {
            const p = d[1];
            try {
              const m = new Response(p, { headers: e == null ? void 0 : e.headers, status: e == null ? void 0 : e.status, statusText: e == null ? void 0 : e.statusText });
              yield yield N(new pe(m)), a = a.slice(d[0].length), d = a.match(qt);
            } catch (m) {
              throw new Error(`exception parsing stream chunk ${p}. ${m}`);
            }
          }
        }
      } finally {
        r.releaseLock();
      }
    });
  }
  async apiCall(e, n) {
    return fetch(e, n).catch((i) => {
      throw new Error(`exception ${i} sending request`);
    });
  }
  getDefaultHeaders() {
    const e = {}, n = Bu + " " + this.clientOptions.userAgentExtra;
    return e[Gu] = n, e[Ee] = n, e[Vu] = "application/json", e;
  }
  async getHeadersInternal(e) {
    const n = new Headers();
    if (e && e.headers) {
      for (const [i, r] of Object.entries(e.headers)) n.append(i, r);
      e.timeout && e.timeout > 0 && n.append(ku, String(Math.ceil(e.timeout / 1e3)));
    }
    return await this.clientOptions.auth.addAuthHeaders(n), n;
  }
  async uploadFile(e, n) {
    var i;
    const r = {};
    n != null && (r.mimeType = n.mimeType, r.name = n.name, r.displayName = n.displayName), r.name && !r.name.startsWith("files/") && (r.name = `files/${r.name}`);
    const l = this.clientOptions.uploader, a = await l.stat(e);
    r.sizeBytes = String(a.size);
    const f = (i = n == null ? void 0 : n.mimeType) !== null && i !== void 0 ? i : a.type;
    if (f === void 0 || f === "") throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
    r.mimeType = f;
    const c = await this.fetchUploadUrl(r, n);
    return l.upload(e, c, this);
  }
  async downloadFile(e) {
    await this.clientOptions.downloader.download(e, this);
  }
  async fetchUploadUrl(e, n) {
    var i;
    let r = {};
    (n == null ? void 0 : n.httpOptions) ? r = n.httpOptions : r = { apiVersion: "", headers: { "Content-Type": "application/json", "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": `${e.sizeBytes}`, "X-Goog-Upload-Header-Content-Type": `${e.mimeType}` } };
    const l = { file: e }, a = await this.request({ path: C("upload/v1beta/files", l._url), body: JSON.stringify(l), httpMethod: "POST", httpOptions: r });
    if (!a || !(a == null ? void 0 : a.headers)) throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");
    const f = (i = a == null ? void 0 : a.headers) === null || i === void 0 ? void 0 : i["x-goog-upload-url"];
    if (f === void 0) throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");
    return f;
  }
}
async function Bt(t) {
  var e;
  if (t === void 0) throw new Error("response is undefined");
  if (!t.ok) {
    const n = t.status;
    let i;
    !((e = t.headers.get("content-type")) === null || e === void 0) && e.includes("application/json") ? i = await t.json() : i = { error: { message: await t.text(), code: t.status, status: t.statusText } };
    const r = JSON.stringify(i);
    throw n >= 400 && n < 600 ? new re({ message: r, status: n }) : new Error(r);
  }
}
function Wu(t, e) {
  if (!e || Object.keys(e).length === 0) return;
  if (t.body instanceof Blob) {
    console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");
    return;
  }
  let n = {};
  if (typeof t.body == "string" && t.body.length > 0) try {
    const l = JSON.parse(t.body);
    if (typeof l == "object" && l !== null && !Array.isArray(l)) n = l;
    else {
      console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");
      return;
    }
  } catch {
    console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");
    return;
  }
  function i(l, a) {
    const f = Object.assign({}, l);
    for (const c in a) if (Object.prototype.hasOwnProperty.call(a, c)) {
      const u = a[c], d = f[c];
      u && typeof u == "object" && !Array.isArray(u) && d && typeof d == "object" && !Array.isArray(d) ? f[c] = i(d, u) : (d && u && typeof d != typeof u && console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${c}". Original type: ${typeof d}, New type: ${typeof u}. Overwriting.`), f[c] = u);
    }
    return f;
  }
  const r = i(n, e);
  t.body = JSON.stringify(r);
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Yu = "mcp_used/unknown";
let Ku = false;
function Cn(t) {
  for (const e of t) if (zu(e) || typeof e == "object" && "inputSchema" in e) return true;
  return Ku;
}
function yn(t) {
  var e;
  const n = (e = t[Ee]) !== null && e !== void 0 ? e : "";
  t[Ee] = (n + ` ${Yu}`).trimStart();
}
function zu(t) {
  return t !== null && typeof t == "object" && t instanceof Re;
}
function Xu(t, e = 100) {
  return W(this, arguments, function* () {
    let i, r = 0;
    for (; r < e; ) {
      const l = yield N(t.listTools({ cursor: i }));
      for (const a of l.tools) yield yield N(a), r++;
      if (!l.nextCursor) break;
      i = l.nextCursor;
    }
  });
}
class Re {
  constructor(e = [], n) {
    this.mcpTools = [], this.functionNameToMcpClient = {}, this.mcpClients = e, this.config = n;
  }
  static create(e, n) {
    return new Re(e, n);
  }
  async initialize() {
    var e, n, i, r;
    if (this.mcpTools.length > 0) return;
    const l = {}, a = [];
    for (const d of this.mcpClients) try {
      for (var f = true, c = (n = void 0, b(Xu(d))), u; u = await c.next(), e = u.done, !e; f = true) {
        r = u.value, f = false;
        const p = r;
        a.push(p);
        const m = p.name;
        if (l[m]) throw new Error(`Duplicate function name ${m} found in MCP tools. Please ensure function names are unique.`);
        l[m] = d;
      }
    } catch (p) {
      n = { error: p };
    } finally {
      try {
        !f && !e && (i = c.return) && await i.call(c);
      } finally {
        if (n) throw n.error;
      }
    }
    this.mcpTools = a, this.functionNameToMcpClient = l;
  }
  async tool() {
    return await this.initialize(), Hn(this.mcpTools, this.config);
  }
  async callTool(e) {
    await this.initialize();
    const n = [];
    for (const i of e) if (i.name in this.functionNameToMcpClient) {
      const r = this.functionNameToMcpClient[i.name];
      let l;
      this.config.timeout && (l = { timeout: this.config.timeout });
      const a = await r.callTool({ name: i.name, arguments: i.args }, void 0, l);
      n.push({ functionResponse: { name: i.name, response: a.isError ? { error: a } : a } });
    }
    return n;
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
async function Qu(t, e, n) {
  const i = new Fn();
  let r;
  n.data instanceof Blob ? r = JSON.parse(await n.data.text()) : r = JSON.parse(n.data);
  const l = $r(r);
  Object.assign(i, l), e(i);
}
class Zu {
  constructor(e, n, i) {
    this.apiClient = e, this.auth = n, this.webSocketFactory = i;
  }
  async connect(e) {
    var n, i;
    if (this.apiClient.isVertexAI()) throw new Error("Live music is not supported for Vertex AI.");
    console.warn("Live music generation is experimental and may change in future versions.");
    const r = this.apiClient.getWebsocketBaseUrl(), l = this.apiClient.getApiVersion(), a = ju(this.apiClient.getDefaultHeaders()), f = this.apiClient.getApiKey(), c = `${r}/ws/google.ai.generativelanguage.${l}.GenerativeService.BidiGenerateMusic?key=${f}`;
    let u = () => {
    };
    const d = new Promise((S) => {
      u = S;
    }), p = e.callbacks, m = function() {
      u({});
    }, g = this.apiClient, h = { onopen: m, onmessage: (S) => {
      Qu(g, p.onmessage, S);
    }, onerror: (n = p == null ? void 0 : p.onerror) !== null && n !== void 0 ? n : function(S) {
    }, onclose: (i = p == null ? void 0 : p.onclose) !== null && i !== void 0 ? i : function(S) {
    } }, v = this.webSocketFactory.create(c, Ou(a), h);
    v.connect(), await d;
    const T = x(this.apiClient, e.model), E = pn({ model: T }), y = Te({ setup: E });
    return v.send(JSON.stringify(y)), new bu(v, this.apiClient);
  }
}
class bu {
  constructor(e, n) {
    this.conn = e, this.apiClient = n;
  }
  async setWeightedPrompts(e) {
    if (!e.weightedPrompts || Object.keys(e.weightedPrompts).length === 0) throw new Error("Weighted prompts must be set and contain at least one entry.");
    const n = Js(e), i = mn(n);
    this.conn.send(JSON.stringify({ clientContent: i }));
  }
  async setMusicGenerationConfig(e) {
    e.musicGenerationConfig || (e.musicGenerationConfig = {});
    const n = Hs(e), i = Te(n);
    this.conn.send(JSON.stringify(i));
  }
  sendPlaybackControl(e) {
    const n = Te({ playbackControl: e });
    this.conn.send(JSON.stringify(n));
  }
  play() {
    this.sendPlaybackControl(H.PLAY);
  }
  pause() {
    this.sendPlaybackControl(H.PAUSE);
  }
  stop() {
    this.sendPlaybackControl(H.STOP);
  }
  resetContext() {
    this.sendPlaybackControl(H.RESET_CONTEXT);
  }
  close() {
    this.conn.close();
  }
}
function Ou(t) {
  const e = {};
  return t.forEach((n, i) => {
    e[i] = n;
  }), e;
}
function ju(t) {
  const e = new Headers();
  for (const [n, i] of Object.entries(t)) e.append(n, i);
  return e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const ef = "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
async function tf(t, e, n) {
  const i = new Un();
  let r;
  n.data instanceof Blob ? r = await n.data.text() : n.data instanceof ArrayBuffer ? r = new TextDecoder().decode(n.data) : r = n.data;
  const l = JSON.parse(r);
  if (t.isVertexAI()) {
    const a = ol(l);
    Object.assign(i, a);
  } else {
    const a = Fr(l);
    Object.assign(i, a);
  }
  e(i);
}
class nf {
  constructor(e, n, i) {
    this.apiClient = e, this.auth = n, this.webSocketFactory = i, this.music = new Zu(this.apiClient, this.auth, this.webSocketFactory);
  }
  async connect(e) {
    var n, i, r, l, a, f;
    if (e.config && e.config.httpOptions) throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");
    const c = this.apiClient.getWebsocketBaseUrl(), u = this.apiClient.getApiVersion();
    let d;
    const p = this.apiClient.getDefaultHeaders();
    e.config && e.config.tools && Cn(e.config.tools) && yn(p);
    const m = lf(p);
    if (this.apiClient.isVertexAI()) d = `${c}/ws/google.cloud.aiplatform.${u}.LlmBidiService/BidiGenerateContent`, await this.auth.addAuthHeaders(m);
    else {
      const M = this.apiClient.getApiKey();
      let D = "BidiGenerateContent", P = "key";
      (M == null ? void 0 : M.startsWith("auth_tokens/")) && (console.warn("Warning: Ephemeral token support is experimental and may change in future versions."), u !== "v1alpha" && console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."), D = "BidiGenerateContentConstrained", P = "access_token"), d = `${c}/ws/google.ai.generativelanguage.${u}.GenerativeService.${D}?${P}=${M}`;
    }
    let g = () => {
    };
    const h = new Promise((M) => {
      g = M;
    }), v = e.callbacks, T = function() {
      var M;
      (M = v == null ? void 0 : v.onopen) === null || M === void 0 || M.call(v), g({});
    }, E = this.apiClient, y = { onopen: T, onmessage: (M) => {
      tf(E, v.onmessage, M);
    }, onerror: (n = v == null ? void 0 : v.onerror) !== null && n !== void 0 ? n : function(M) {
    }, onclose: (i = v == null ? void 0 : v.onclose) !== null && i !== void 0 ? i : function(M) {
    } }, S = this.webSocketFactory.create(d, rf(m), y);
    S.connect(), await h;
    let A = x(this.apiClient, e.model);
    if (this.apiClient.isVertexAI() && A.startsWith("publishers/")) {
      const M = this.apiClient.getProject(), D = this.apiClient.getLocation();
      A = `projects/${M}/locations/${D}/` + A;
    }
    let _ = {};
    this.apiClient.isVertexAI() && ((r = e.config) === null || r === void 0 ? void 0 : r.responseModalities) === void 0 && (e.config === void 0 ? e.config = { responseModalities: [oe.AUDIO] } : e.config.responseModalities = [oe.AUDIO]), !((l = e.config) === null || l === void 0) && l.generationConfig && console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");
    const I = (f = (a = e.config) === null || a === void 0 ? void 0 : a.tools) !== null && f !== void 0 ? f : [], R = [];
    for (const M of I) if (this.isCallableTool(M)) {
      const D = M;
      R.push(await D.tool());
    } else R.push(M);
    R.length > 0 && (e.config.tools = R);
    const U = { model: A, config: e.config, callbacks: e.callbacks };
    return this.apiClient.isVertexAI() ? _ = gr(this.apiClient, U) : _ = ks(this.apiClient, U), delete _.config, S.send(JSON.stringify(_)), new sf(S, this.apiClient);
  }
  isCallableTool(e) {
    return "callTool" in e && typeof e.callTool == "function";
  }
}
const of = { turnComplete: true };
class sf {
  constructor(e, n) {
    this.conn = e, this.apiClient = n;
  }
  tLiveClientContent(e, n) {
    if (n.turns !== null && n.turns !== void 0) {
      let i = [];
      try {
        i = F(n.turns), e.isVertexAI() ? i = i.map((r) => Q(r)) : i = i.map((r) => le(r));
      } catch {
        throw new Error(`Failed to parse client content "turns", type: '${typeof n.turns}'`);
      }
      return { clientContent: { turns: i, turnComplete: n.turnComplete } };
    }
    return { clientContent: { turnComplete: n.turnComplete } };
  }
  tLiveClienttToolResponse(e, n) {
    let i = [];
    if (n.functionResponses == null) throw new Error("functionResponses is required.");
    if (Array.isArray(n.functionResponses) ? i = n.functionResponses : i = [n.functionResponses], i.length === 0) throw new Error("functionResponses is required.");
    for (const l of i) {
      if (typeof l != "object" || l === null || !("name" in l) || !("response" in l)) throw new Error(`Could not parse function response, type '${typeof l}'.`);
      if (!e.isVertexAI() && !("id" in l)) throw new Error(ef);
    }
    return { toolResponse: { functionResponses: i } };
  }
  sendClientContent(e) {
    e = Object.assign(Object.assign({}, of), e);
    const n = this.tLiveClientContent(this.apiClient, e);
    this.conn.send(JSON.stringify(n));
  }
  sendRealtimeInput(e) {
    let n = {};
    this.apiClient.isVertexAI() ? n = { realtimeInput: Tr(e) } : n = { realtimeInput: Bs(e) }, this.conn.send(JSON.stringify(n));
  }
  sendToolResponse(e) {
    if (e.functionResponses == null) throw new Error("Tool response parameters are required.");
    const n = this.tLiveClienttToolResponse(this.apiClient, e);
    this.conn.send(JSON.stringify(n));
  }
  close() {
    this.conn.close();
  }
}
function rf(t) {
  const e = {};
  return t.forEach((n, i) => {
    e[i] = n;
  }), e;
}
function lf(t) {
  const e = new Headers();
  for (const [n, i] of Object.entries(t)) e.append(n, i);
  return e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Jt = 10;
function Ht(t) {
  var e, n, i;
  if (!((e = t == null ? void 0 : t.automaticFunctionCalling) === null || e === void 0) && e.disable) return true;
  let r = false;
  for (const a of (n = t == null ? void 0 : t.tools) !== null && n !== void 0 ? n : []) if (Y(a)) {
    r = true;
    break;
  }
  if (!r) return true;
  const l = (i = t == null ? void 0 : t.automaticFunctionCalling) === null || i === void 0 ? void 0 : i.maximumRemoteCalls;
  return l && (l < 0 || !Number.isInteger(l)) || l == 0 ? (console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:", l), true) : false;
}
function Y(t) {
  return "callTool" in t && typeof t.callTool == "function";
}
function af(t) {
  var e, n, i;
  return (i = (n = (e = t.config) === null || e === void 0 ? void 0 : e.tools) === null || n === void 0 ? void 0 : n.some((r) => Y(r))) !== null && i !== void 0 ? i : false;
}
function uf(t) {
  var e, n, i;
  return (i = (n = (e = t.config) === null || e === void 0 ? void 0 : e.tools) === null || n === void 0 ? void 0 : n.some((r) => !Y(r))) !== null && i !== void 0 ? i : false;
}
function $t(t) {
  var e;
  return !(!((e = t == null ? void 0 : t.automaticFunctionCalling) === null || e === void 0) && e.ignoreCallHistory);
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class ff extends B {
  constructor(e) {
    super(), this.apiClient = e, this.generateContent = async (n) => {
      var i, r, l, a, f;
      const c = await this.processParamsMaybeAddMcpUsage(n);
      if (this.maybeMoveToResponseJsonSchem(n), !af(n) || Ht(n.config)) return await this.generateContentInternal(c);
      if (uf(n)) throw new Error("Automatic function calling with CallableTools and Tools is not yet supported.");
      let u, d;
      const p = F(c.contents), m = (l = (r = (i = c.config) === null || i === void 0 ? void 0 : i.automaticFunctionCalling) === null || r === void 0 ? void 0 : r.maximumRemoteCalls) !== null && l !== void 0 ? l : Jt;
      let g = 0;
      for (; g < m && (u = await this.generateContentInternal(c), !(!u.functionCalls || u.functionCalls.length === 0)); ) {
        const h = u.candidates[0].content, v = [];
        for (const T of (f = (a = n.config) === null || a === void 0 ? void 0 : a.tools) !== null && f !== void 0 ? f : []) if (Y(T)) {
          const y = await T.callTool(u.functionCalls);
          v.push(...y);
        }
        g++, d = { role: "user", parts: v }, c.contents = F(c.contents), c.contents.push(h), c.contents.push(d), $t(c.config) && (p.push(h), p.push(d));
      }
      return $t(c.config) && (u.automaticFunctionCallingHistory = p), u;
    }, this.generateContentStream = async (n) => {
      if (this.maybeMoveToResponseJsonSchem(n), Ht(n.config)) {
        const i = await this.processParamsMaybeAddMcpUsage(n);
        return await this.generateContentStreamInternal(i);
      } else return await this.processAfcStream(n);
    }, this.generateImages = async (n) => await this.generateImagesInternal(n).then((i) => {
      var r;
      let l;
      const a = [];
      if (i == null ? void 0 : i.generatedImages) for (const c of i.generatedImages) c && (c == null ? void 0 : c.safetyAttributes) && ((r = c == null ? void 0 : c.safetyAttributes) === null || r === void 0 ? void 0 : r.contentType) === "Positive Prompt" ? l = c == null ? void 0 : c.safetyAttributes : a.push(c);
      let f;
      return l ? f = { generatedImages: a, positivePromptSafetyAttributes: l } : f = { generatedImages: a }, f;
    }), this.list = async (n) => {
      var i;
      const a = { config: Object.assign(Object.assign({}, { queryBase: true }), n == null ? void 0 : n.config) };
      if (this.apiClient.isVertexAI() && !a.config.queryBase) {
        if (!((i = a.config) === null || i === void 0) && i.filter) throw new Error("Filtering tuned models list for Vertex AI is not currently supported");
        a.config.filter = "labels.tune-type:*";
      }
      return new O(q.PAGED_ITEM_MODELS, (f) => this.listInternal(f), await this.listInternal(a), a);
    }, this.editImage = async (n) => {
      const i = { model: n.model, prompt: n.prompt, referenceImages: [], config: n.config };
      return n.referenceImages && n.referenceImages && (i.referenceImages = n.referenceImages.map((r) => r.toReferenceImageAPI())), await this.editImageInternal(i);
    }, this.upscaleImage = async (n) => {
      let i = { numberOfImages: 1, mode: "upscale" };
      n.config && (i = Object.assign(Object.assign({}, i), n.config));
      const r = { model: n.model, image: n.image, upscaleFactor: n.upscaleFactor, config: i };
      return await this.upscaleImageInternal(r);
    }, this.generateVideos = async (n) => await this.generateVideosInternal(n);
  }
  maybeMoveToResponseJsonSchem(e) {
    e.config && e.config.responseSchema && (e.config.responseJsonSchema || Object.keys(e.config.responseSchema).includes("$schema") && (e.config.responseJsonSchema = e.config.responseSchema, delete e.config.responseSchema));
  }
  async processParamsMaybeAddMcpUsage(e) {
    var n, i, r;
    const l = (n = e.config) === null || n === void 0 ? void 0 : n.tools;
    if (!l) return e;
    const a = await Promise.all(l.map(async (c) => Y(c) ? await c.tool() : c)), f = { model: e.model, contents: e.contents, config: Object.assign(Object.assign({}, e.config), { tools: a }) };
    if (f.config.tools = a, e.config && e.config.tools && Cn(e.config.tools)) {
      const c = (r = (i = e.config.httpOptions) === null || i === void 0 ? void 0 : i.headers) !== null && r !== void 0 ? r : {};
      let u = Object.assign({}, c);
      Object.keys(u).length === 0 && (u = this.apiClient.getDefaultHeaders()), yn(u), f.config.httpOptions = Object.assign(Object.assign({}, e.config.httpOptions), { headers: u });
    }
    return f;
  }
  async initAfcToolsMap(e) {
    var n, i, r;
    const l = /* @__PURE__ */ new Map();
    for (const a of (i = (n = e.config) === null || n === void 0 ? void 0 : n.tools) !== null && i !== void 0 ? i : []) if (Y(a)) {
      const f = a, c = await f.tool();
      for (const u of (r = c.functionDeclarations) !== null && r !== void 0 ? r : []) {
        if (!u.name) throw new Error("Function declaration name is required.");
        if (l.has(u.name)) throw new Error(`Duplicate tool declaration name: ${u.name}`);
        l.set(u.name, f);
      }
    }
    return l;
  }
  async processAfcStream(e) {
    var n, i, r;
    const l = (r = (i = (n = e.config) === null || n === void 0 ? void 0 : n.automaticFunctionCalling) === null || i === void 0 ? void 0 : i.maximumRemoteCalls) !== null && r !== void 0 ? r : Jt;
    let a = false, f = 0;
    const c = await this.initAfcToolsMap(e);
    return function(u, d, p) {
      var m, g;
      return W(this, arguments, function* () {
        for (var h, v, T, E; f < l; ) {
          a && (f++, a = false);
          const _ = yield N(u.processParamsMaybeAddMcpUsage(p)), I = yield N(u.generateContentStreamInternal(_)), R = [], U = [];
          try {
            for (var y = true, S = (v = void 0, b(I)), A; A = yield N(S.next()), h = A.done, !h; y = true) {
              E = A.value, y = false;
              const M = E;
              if (yield yield N(M), M.candidates && (!((m = M.candidates[0]) === null || m === void 0) && m.content)) {
                U.push(M.candidates[0].content);
                for (const D of (g = M.candidates[0].content.parts) !== null && g !== void 0 ? g : []) if (f < l && D.functionCall) {
                  if (!D.functionCall.name) throw new Error("Function call name was not returned by the model.");
                  if (d.has(D.functionCall.name)) {
                    const P = yield N(d.get(D.functionCall.name).callTool([D.functionCall]));
                    R.push(...P);
                  } else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${d.keys()}, mising tool: ${D.functionCall.name}`);
                }
              }
            }
          } catch (M) {
            v = { error: M };
          } finally {
            try {
              !y && !h && (T = S.return) && (yield N(T.call(S)));
            } finally {
              if (v) throw v.error;
            }
          }
          if (R.length > 0) {
            a = true;
            const M = new Z();
            M.candidates = [{ content: { role: "user", parts: R } }], yield yield N(M);
            const D = [];
            D.push(...U), D.push({ role: "user", parts: R });
            const P = F(p.contents).concat(D);
            p.contents = P;
          } else break;
        }
      });
    }(this, c, e);
  }
  async generateContentInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Vt(this.apiClient, e);
      return f = C("{model}:generateContent", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = Gt(d), m = new Z();
        return Object.assign(m, p), m;
      });
    } else {
      const u = Lt(this.apiClient, e);
      return f = C("{model}:generateContent", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = kt(d), m = new Z();
        return Object.assign(m, p), m;
      });
    }
  }
  async generateContentStreamInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Vt(this.apiClient, e);
      return f = C("{model}:streamGenerateContent?alt=sse", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.requestStream({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }), a.then(function(p) {
        return W(this, arguments, function* () {
          var m, g, h, v;
          try {
            for (var T = true, E = b(p), y; y = yield N(E.next()), m = y.done, !m; T = true) {
              v = y.value, T = false;
              const S = v, A = Gt(yield N(S.json()));
              A.sdkHttpResponse = { headers: S.headers };
              const _ = new Z();
              Object.assign(_, A), yield yield N(_);
            }
          } catch (S) {
            g = { error: S };
          } finally {
            try {
              !T && !m && (h = E.return) && (yield N(h.call(E)));
            } finally {
              if (g) throw g.error;
            }
          }
        });
      });
    } else {
      const u = Lt(this.apiClient, e);
      return f = C("{model}:streamGenerateContent?alt=sse", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.requestStream({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }), a.then(function(p) {
        return W(this, arguments, function* () {
          var m, g, h, v;
          try {
            for (var T = true, E = b(p), y; y = yield N(E.next()), m = y.done, !m; T = true) {
              v = y.value, T = false;
              const S = v, A = kt(yield N(S.json()));
              A.sdkHttpResponse = { headers: S.headers };
              const _ = new Z();
              Object.assign(_, A), yield yield N(_);
            }
          } catch (S) {
            g = { error: S };
          } finally {
            try {
              !T && !m && (h = E.return) && (yield N(h.call(E)));
            } finally {
              if (g) throw g.error;
            }
          }
        });
      });
    }
  }
  async embedContent(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = ga(this.apiClient, e);
      return f = C("{model}:predict", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => {
        const p = yu(d), m = new mt();
        return Object.assign(m, p), m;
      });
    } else {
      const u = Pl(this.apiClient, e);
      return f = C("{model}:batchEmbedContents", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => {
        const p = Za(d), m = new mt();
        return Object.assign(m, p), m;
      });
    }
  }
  async generateImagesInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = va(this.apiClient, e);
      return f = C("{model}:predict", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => {
        const p = Su(d), m = new gt();
        return Object.assign(m, p), m;
      });
    } else {
      const u = Dl(this.apiClient, e);
      return f = C("{model}:predict", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => {
        const p = ja(d), m = new gt();
        return Object.assign(m, p), m;
      });
    }
  }
  async editImageInternal(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) {
      const f = Aa(this.apiClient, e);
      return l = C("{model}:predict", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r.then((c) => {
        const u = _u(c), d = new Rn();
        return Object.assign(d, u), d;
      });
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async upscaleImageInternal(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) {
      const f = Ia(this.apiClient, e);
      return l = C("{model}:predict", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r.then((c) => {
        const u = Au(c), d = new Pn();
        return Object.assign(d, u), d;
      });
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async get(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Ra(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => ye(d));
    } else {
      const u = Nl(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => Ce(d));
    }
  }
  async listInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = xa(this.apiClient, e);
      return f = C("{models_url}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = Pu(d), m = new ht();
        return Object.assign(m, p), m;
      });
    } else {
      const u = Ul(this.apiClient, e);
      return f = C("{models_url}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = tu(d), m = new ht();
        return Object.assign(m, p), m;
      });
    }
  }
  async update(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Na(this.apiClient, e);
      return f = C("{model}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "PATCH", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => ye(d));
    } else {
      const u = Ll(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "PATCH", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => Ce(d));
    }
  }
  async delete(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = wa(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "DELETE", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then(() => {
        const d = xu(), p = new vt();
        return Object.assign(p, d), p;
      });
    } else {
      const u = Vl(this.apiClient, e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "DELETE", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then(() => {
        const d = nu(), p = new vt();
        return Object.assign(p, d), p;
      });
    }
  }
  async countTokens(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Fa(this.apiClient, e);
      return f = C("{model}:countTokens", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => {
        const p = Du(d), m = new Tt();
        return Object.assign(m, p), m;
      });
    } else {
      const u = Gl(this.apiClient, e);
      return f = C("{model}:countTokens", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => {
        const p = ou(d), m = new Tt();
        return Object.assign(m, p), m;
      });
    }
  }
  async computeTokens(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) {
      const f = La(this.apiClient, e);
      return l = C("{model}:computeTokens", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r.then((c) => {
        const u = Nu(c), d = new xn();
        return Object.assign(d, u), d;
      });
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async generateVideosInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Ga(this.apiClient, e);
      return f = C("{model}:predictLongRunning", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => {
        const p = Lu(d), m = new ie();
        return Object.assign(m, p), m;
      });
    } else {
      const u = Jl(this.apiClient, e);
      return f = C("{model}:predictLongRunning", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "POST", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => {
        const p = lu(d), m = new ie();
        return Object.assign(m, p), m;
      });
    }
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function cf(t) {
  const e = {}, n = o(t, ["operationName"]);
  n != null && s(e, ["_url", "operationName"], n);
  const i = o(t, ["config"]);
  return i != null && s(e, ["config"], i), e;
}
function df(t) {
  const e = {}, n = o(t, ["operationName"]);
  n != null && s(e, ["_url", "operationName"], n);
  const i = o(t, ["config"]);
  return i != null && s(e, ["config"], i), e;
}
function pf(t) {
  const e = {}, n = o(t, ["operationName"]);
  n != null && s(e, ["operationName"], n);
  const i = o(t, ["resourceName"]);
  i != null && s(e, ["_url", "resourceName"], i);
  const r = o(t, ["config"]);
  return r != null && s(e, ["config"], r), e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class mf extends B {
  constructor(e) {
    super(), this.apiClient = e;
  }
  async getVideosOperation(e) {
    const n = e.operation, i = e.config;
    if (n.name === void 0 || n.name === "") throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const r = n.name.split("/operations/")[0];
      let l;
      i && "httpOptions" in i && (l = i.httpOptions);
      const a = await this.fetchPredictVideosOperationInternal({ operationName: n.name, resourceName: r, config: { httpOptions: l } });
      return n._fromAPIResponse({ apiResponse: a, isVertexAI: true });
    } else {
      const r = await this.getVideosOperationInternal({ operationName: n.name, config: i });
      return n._fromAPIResponse({ apiResponse: r, isVertexAI: false });
    }
  }
  async get(e) {
    const n = e.operation, i = e.config;
    if (n.name === void 0 || n.name === "") throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const r = n.name.split("/operations/")[0];
      let l;
      i && "httpOptions" in i && (l = i.httpOptions);
      const a = await this.fetchPredictVideosOperationInternal({ operationName: n.name, resourceName: r, config: { httpOptions: l } });
      return n._fromAPIResponse({ apiResponse: a, isVertexAI: true });
    } else {
      const r = await this.getVideosOperationInternal({ operationName: n.name, config: i });
      return n._fromAPIResponse({ apiResponse: r, isVertexAI: false });
    }
  }
  async getVideosOperationInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = df(e);
      return f = C("{operationName}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a;
    } else {
      const u = cf(e);
      return f = C("{operationName}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a;
    }
  }
  async fetchPredictVideosOperationInternal(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) {
      const f = pf(e);
      return l = C("{resourceName}:fetchPredictOperation", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r;
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function gf(t) {
  const e = {}, n = o(t, ["voiceName"]);
  return n != null && s(e, ["voiceName"], n), e;
}
function En(t) {
  const e = {}, n = o(t, ["prebuiltVoiceConfig"]);
  return n != null && s(e, ["prebuiltVoiceConfig"], gf(n)), e;
}
function hf(t) {
  const e = {}, n = o(t, ["speaker"]);
  n != null && s(e, ["speaker"], n);
  const i = o(t, ["voiceConfig"]);
  return i != null && s(e, ["voiceConfig"], En(i)), e;
}
function vf(t) {
  const e = {}, n = o(t, ["speakerVoiceConfigs"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => hf(r))), s(e, ["speakerVoiceConfigs"], i);
  }
  return e;
}
function Tf(t) {
  const e = {}, n = o(t, ["voiceConfig"]);
  n != null && s(e, ["voiceConfig"], En(n));
  const i = o(t, ["multiSpeakerVoiceConfig"]);
  i != null && s(e, ["multiSpeakerVoiceConfig"], vf(i));
  const r = o(t, ["languageCode"]);
  return r != null && s(e, ["languageCode"], r), e;
}
function Cf(t) {
  const e = {}, n = o(t, ["fps"]);
  n != null && s(e, ["fps"], n);
  const i = o(t, ["endOffset"]);
  i != null && s(e, ["endOffset"], i);
  const r = o(t, ["startOffset"]);
  return r != null && s(e, ["startOffset"], r), e;
}
function yf(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["data"]);
  n != null && s(e, ["data"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Ef(t) {
  const e = {};
  if (o(t, ["displayName"]) !== void 0) throw new Error("displayName parameter is not supported in Gemini API.");
  const n = o(t, ["fileUri"]);
  n != null && s(e, ["fileUri"], n);
  const i = o(t, ["mimeType"]);
  return i != null && s(e, ["mimeType"], i), e;
}
function Sf(t) {
  const e = {}, n = o(t, ["videoMetadata"]);
  n != null && s(e, ["videoMetadata"], Cf(n));
  const i = o(t, ["thought"]);
  i != null && s(e, ["thought"], i);
  const r = o(t, ["inlineData"]);
  r != null && s(e, ["inlineData"], yf(r));
  const l = o(t, ["fileData"]);
  l != null && s(e, ["fileData"], Ef(l));
  const a = o(t, ["thoughtSignature"]);
  a != null && s(e, ["thoughtSignature"], a);
  const f = o(t, ["codeExecutionResult"]);
  f != null && s(e, ["codeExecutionResult"], f);
  const c = o(t, ["executableCode"]);
  c != null && s(e, ["executableCode"], c);
  const u = o(t, ["functionCall"]);
  u != null && s(e, ["functionCall"], u);
  const d = o(t, ["functionResponse"]);
  d != null && s(e, ["functionResponse"], d);
  const p = o(t, ["text"]);
  return p != null && s(e, ["text"], p), e;
}
function _f(t) {
  const e = {}, n = o(t, ["parts"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Sf(l))), s(e, ["parts"], r);
  }
  const i = o(t, ["role"]);
  return i != null && s(e, ["role"], i), e;
}
function Af(t) {
  const e = {}, n = o(t, ["behavior"]);
  n != null && s(e, ["behavior"], n);
  const i = o(t, ["description"]);
  i != null && s(e, ["description"], i);
  const r = o(t, ["name"]);
  r != null && s(e, ["name"], r);
  const l = o(t, ["parameters"]);
  l != null && s(e, ["parameters"], l);
  const a = o(t, ["parametersJsonSchema"]);
  a != null && s(e, ["parametersJsonSchema"], a);
  const f = o(t, ["response"]);
  f != null && s(e, ["response"], f);
  const c = o(t, ["responseJsonSchema"]);
  return c != null && s(e, ["responseJsonSchema"], c), e;
}
function Mf(t) {
  const e = {}, n = o(t, ["startTime"]);
  n != null && s(e, ["startTime"], n);
  const i = o(t, ["endTime"]);
  return i != null && s(e, ["endTime"], i), e;
}
function If(t) {
  const e = {}, n = o(t, ["timeRangeFilter"]);
  return n != null && s(e, ["timeRangeFilter"], Mf(n)), e;
}
function Rf(t) {
  const e = {}, n = o(t, ["mode"]);
  n != null && s(e, ["mode"], n);
  const i = o(t, ["dynamicThreshold"]);
  return i != null && s(e, ["dynamicThreshold"], i), e;
}
function Pf(t) {
  const e = {}, n = o(t, ["dynamicRetrievalConfig"]);
  return n != null && s(e, ["dynamicRetrievalConfig"], Rf(n)), e;
}
function xf() {
  return {};
}
function Df(t) {
  const e = {}, n = o(t, ["functionDeclarations"]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((u) => Af(u))), s(e, ["functionDeclarations"], c);
  }
  if (o(t, ["retrieval"]) !== void 0) throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = o(t, ["googleSearch"]);
  i != null && s(e, ["googleSearch"], If(i));
  const r = o(t, ["googleSearchRetrieval"]);
  if (r != null && s(e, ["googleSearchRetrieval"], Pf(r)), o(t, ["enterpriseWebSearch"]) !== void 0) throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  if (o(t, ["googleMaps"]) !== void 0) throw new Error("googleMaps parameter is not supported in Gemini API.");
  o(t, ["urlContext"]) != null && s(e, ["urlContext"], xf());
  const a = o(t, ["codeExecution"]);
  a != null && s(e, ["codeExecution"], a);
  const f = o(t, ["computerUse"]);
  return f != null && s(e, ["computerUse"], f), e;
}
function Nf(t) {
  const e = {}, n = o(t, ["handle"]);
  if (n != null && s(e, ["handle"], n), o(t, ["transparent"]) !== void 0) throw new Error("transparent parameter is not supported in Gemini API.");
  return e;
}
function Wt() {
  return {};
}
function wf(t) {
  const e = {}, n = o(t, ["disabled"]);
  n != null && s(e, ["disabled"], n);
  const i = o(t, ["startOfSpeechSensitivity"]);
  i != null && s(e, ["startOfSpeechSensitivity"], i);
  const r = o(t, ["endOfSpeechSensitivity"]);
  r != null && s(e, ["endOfSpeechSensitivity"], r);
  const l = o(t, ["prefixPaddingMs"]);
  l != null && s(e, ["prefixPaddingMs"], l);
  const a = o(t, ["silenceDurationMs"]);
  return a != null && s(e, ["silenceDurationMs"], a), e;
}
function Uf(t) {
  const e = {}, n = o(t, ["automaticActivityDetection"]);
  n != null && s(e, ["automaticActivityDetection"], wf(n));
  const i = o(t, ["activityHandling"]);
  i != null && s(e, ["activityHandling"], i);
  const r = o(t, ["turnCoverage"]);
  return r != null && s(e, ["turnCoverage"], r), e;
}
function Ff(t) {
  const e = {}, n = o(t, ["targetTokens"]);
  return n != null && s(e, ["targetTokens"], n), e;
}
function Lf(t) {
  const e = {}, n = o(t, ["triggerTokens"]);
  n != null && s(e, ["triggerTokens"], n);
  const i = o(t, ["slidingWindow"]);
  return i != null && s(e, ["slidingWindow"], Ff(i)), e;
}
function Vf(t) {
  const e = {}, n = o(t, ["proactiveAudio"]);
  return n != null && s(e, ["proactiveAudio"], n), e;
}
function kf(t, e) {
  const n = {}, i = o(t, ["generationConfig"]);
  e !== void 0 && i != null && s(e, ["setup", "generationConfig"], i);
  const r = o(t, ["responseModalities"]);
  e !== void 0 && r != null && s(e, ["setup", "generationConfig", "responseModalities"], r);
  const l = o(t, ["temperature"]);
  e !== void 0 && l != null && s(e, ["setup", "generationConfig", "temperature"], l);
  const a = o(t, ["topP"]);
  e !== void 0 && a != null && s(e, ["setup", "generationConfig", "topP"], a);
  const f = o(t, ["topK"]);
  e !== void 0 && f != null && s(e, ["setup", "generationConfig", "topK"], f);
  const c = o(t, ["maxOutputTokens"]);
  e !== void 0 && c != null && s(e, ["setup", "generationConfig", "maxOutputTokens"], c);
  const u = o(t, ["mediaResolution"]);
  e !== void 0 && u != null && s(e, ["setup", "generationConfig", "mediaResolution"], u);
  const d = o(t, ["seed"]);
  e !== void 0 && d != null && s(e, ["setup", "generationConfig", "seed"], d);
  const p = o(t, ["speechConfig"]);
  e !== void 0 && p != null && s(e, ["setup", "generationConfig", "speechConfig"], Tf(Me(p)));
  const m = o(t, ["enableAffectiveDialog"]);
  e !== void 0 && m != null && s(e, ["setup", "generationConfig", "enableAffectiveDialog"], m);
  const g = o(t, ["systemInstruction"]);
  e !== void 0 && g != null && s(e, ["setup", "systemInstruction"], _f(w(g)));
  const h = o(t, ["tools"]);
  if (e !== void 0 && h != null) {
    let _ = z(h);
    Array.isArray(_) && (_ = _.map((I) => Df(K(I)))), s(e, ["setup", "tools"], _);
  }
  const v = o(t, ["sessionResumption"]);
  e !== void 0 && v != null && s(e, ["setup", "sessionResumption"], Nf(v));
  const T = o(t, ["inputAudioTranscription"]);
  e !== void 0 && T != null && s(e, ["setup", "inputAudioTranscription"], Wt());
  const E = o(t, ["outputAudioTranscription"]);
  e !== void 0 && E != null && s(e, ["setup", "outputAudioTranscription"], Wt());
  const y = o(t, ["realtimeInputConfig"]);
  e !== void 0 && y != null && s(e, ["setup", "realtimeInputConfig"], Uf(y));
  const S = o(t, ["contextWindowCompression"]);
  e !== void 0 && S != null && s(e, ["setup", "contextWindowCompression"], Lf(S));
  const A = o(t, ["proactivity"]);
  return e !== void 0 && A != null && s(e, ["setup", "proactivity"], Vf(A)), n;
}
function Gf(t, e) {
  const n = {}, i = o(e, ["model"]);
  i != null && s(n, ["setup", "model"], x(t, i));
  const r = o(e, ["config"]);
  return r != null && s(n, ["config"], kf(r, n)), n;
}
function qf(t, e, n) {
  const i = {}, r = o(e, ["expireTime"]);
  n !== void 0 && r != null && s(n, ["expireTime"], r);
  const l = o(e, ["newSessionExpireTime"]);
  n !== void 0 && l != null && s(n, ["newSessionExpireTime"], l);
  const a = o(e, ["uses"]);
  n !== void 0 && a != null && s(n, ["uses"], a);
  const f = o(e, ["liveConnectConstraints"]);
  n !== void 0 && f != null && s(n, ["bidiGenerateContentSetup"], Gf(t, f));
  const c = o(e, ["lockAdditionalFields"]);
  return n !== void 0 && c != null && s(n, ["fieldMask"], c), i;
}
function Bf(t, e) {
  const n = {}, i = o(e, ["config"]);
  return i != null && s(n, ["config"], qf(t, i, n)), n;
}
function Jf(t) {
  const e = {}, n = o(t, ["name"]);
  return n != null && s(e, ["name"], n), e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Hf(t) {
  const e = [];
  for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
    const i = t[n];
    if (typeof i == "object" && i != null && Object.keys(i).length > 0) {
      const r = Object.keys(i).map((l) => `${n}.${l}`);
      e.push(...r);
    } else e.push(n);
  }
  return e.join(",");
}
function $f(t, e) {
  let n = null;
  const i = t.bidiGenerateContentSetup;
  if (typeof i == "object" && i !== null && "setup" in i) {
    const l = i.setup;
    typeof l == "object" && l !== null ? (t.bidiGenerateContentSetup = l, n = l) : delete t.bidiGenerateContentSetup;
  } else i !== void 0 && delete t.bidiGenerateContentSetup;
  const r = t.fieldMask;
  if (n) {
    const l = Hf(n);
    if (Array.isArray(e == null ? void 0 : e.lockAdditionalFields) && (e == null ? void 0 : e.lockAdditionalFields.length) === 0) l ? t.fieldMask = l : delete t.fieldMask;
    else if ((e == null ? void 0 : e.lockAdditionalFields) && e.lockAdditionalFields.length > 0 && r !== null && Array.isArray(r) && r.length > 0) {
      const a = ["temperature", "topK", "topP", "maxOutputTokens", "responseModalities", "seed", "speechConfig"];
      let f = [];
      r.length > 0 && (f = r.map((u) => a.includes(u) ? `generationConfig.${u}` : u));
      const c = [];
      l && c.push(l), f.length > 0 && c.push(...f), c.length > 0 ? t.fieldMask = c.join(",") : delete t.fieldMask;
    } else delete t.fieldMask;
  } else r !== null && Array.isArray(r) && r.length > 0 ? t.fieldMask = r.join(",") : delete t.fieldMask;
  return t;
}
class Wf extends B {
  constructor(e) {
    super(), this.apiClient = e;
  }
  async create(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");
    {
      const f = Bf(this.apiClient, e);
      l = C("auth_tokens", f._url), a = f._query, delete f.config, delete f._url, delete f._query;
      const c = $f(f, e.config);
      return r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(c), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((u) => u.json()), r.then((u) => Jf(u));
    }
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
function Yf(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["_url", "name"], n);
  const i = o(t, ["config"]);
  return i != null && s(e, ["config"], i), e;
}
function Kf(t, e) {
  const n = {}, i = o(t, ["pageSize"]);
  e !== void 0 && i != null && s(e, ["_query", "pageSize"], i);
  const r = o(t, ["pageToken"]);
  e !== void 0 && r != null && s(e, ["_query", "pageToken"], r);
  const l = o(t, ["filter"]);
  return e !== void 0 && l != null && s(e, ["_query", "filter"], l), n;
}
function zf(t) {
  const e = {}, n = o(t, ["config"]);
  return n != null && s(e, ["config"], Kf(n, e)), e;
}
function Xf(t) {
  const e = {}, n = o(t, ["textInput"]);
  n != null && s(e, ["textInput"], n);
  const i = o(t, ["output"]);
  return i != null && s(e, ["output"], i), e;
}
function Qf(t) {
  const e = {};
  if (o(t, ["gcsUri"]) !== void 0) throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (o(t, ["vertexDatasetResource"]) !== void 0) throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");
  const n = o(t, ["examples"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((r) => Xf(r))), s(e, ["examples", "examples"], i);
  }
  return e;
}
function Zf(t, e) {
  const n = {};
  if (o(t, ["validationDataset"]) !== void 0) throw new Error("validationDataset parameter is not supported in Gemini API.");
  const i = o(t, ["tunedModelDisplayName"]);
  if (e !== void 0 && i != null && s(e, ["displayName"], i), o(t, ["description"]) !== void 0) throw new Error("description parameter is not supported in Gemini API.");
  const r = o(t, ["epochCount"]);
  e !== void 0 && r != null && s(e, ["tuningTask", "hyperparameters", "epochCount"], r);
  const l = o(t, ["learningRateMultiplier"]);
  if (l != null && s(n, ["tuningTask", "hyperparameters", "learningRateMultiplier"], l), o(t, ["exportLastCheckpointOnly"]) !== void 0) throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");
  if (o(t, ["adapterSize"]) !== void 0) throw new Error("adapterSize parameter is not supported in Gemini API.");
  const a = o(t, ["batchSize"]);
  e !== void 0 && a != null && s(e, ["tuningTask", "hyperparameters", "batchSize"], a);
  const f = o(t, ["learningRate"]);
  return e !== void 0 && f != null && s(e, ["tuningTask", "hyperparameters", "learningRate"], f), n;
}
function bf(t) {
  const e = {}, n = o(t, ["baseModel"]);
  n != null && s(e, ["baseModel"], n);
  const i = o(t, ["trainingDataset"]);
  i != null && s(e, ["tuningTask", "trainingData"], Qf(i));
  const r = o(t, ["config"]);
  return r != null && s(e, ["config"], Zf(r, e)), e;
}
function Of(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["_url", "name"], n);
  const i = o(t, ["config"]);
  return i != null && s(e, ["config"], i), e;
}
function jf(t, e) {
  const n = {}, i = o(t, ["pageSize"]);
  e !== void 0 && i != null && s(e, ["_query", "pageSize"], i);
  const r = o(t, ["pageToken"]);
  e !== void 0 && r != null && s(e, ["_query", "pageToken"], r);
  const l = o(t, ["filter"]);
  return e !== void 0 && l != null && s(e, ["_query", "filter"], l), n;
}
function ec(t) {
  const e = {}, n = o(t, ["config"]);
  return n != null && s(e, ["config"], jf(n, e)), e;
}
function tc(t, e) {
  const n = {}, i = o(t, ["gcsUri"]);
  e !== void 0 && i != null && s(e, ["supervisedTuningSpec", "trainingDatasetUri"], i);
  const r = o(t, ["vertexDatasetResource"]);
  if (e !== void 0 && r != null && s(e, ["supervisedTuningSpec", "trainingDatasetUri"], r), o(t, ["examples"]) !== void 0) throw new Error("examples parameter is not supported in Vertex AI.");
  return n;
}
function nc(t, e) {
  const n = {}, i = o(t, ["gcsUri"]);
  i != null && s(n, ["validationDatasetUri"], i);
  const r = o(t, ["vertexDatasetResource"]);
  return e !== void 0 && r != null && s(e, ["supervisedTuningSpec", "trainingDatasetUri"], r), n;
}
function oc(t, e) {
  const n = {}, i = o(t, ["validationDataset"]);
  e !== void 0 && i != null && s(e, ["supervisedTuningSpec"], nc(i, n));
  const r = o(t, ["tunedModelDisplayName"]);
  e !== void 0 && r != null && s(e, ["tunedModelDisplayName"], r);
  const l = o(t, ["description"]);
  e !== void 0 && l != null && s(e, ["description"], l);
  const a = o(t, ["epochCount"]);
  e !== void 0 && a != null && s(e, ["supervisedTuningSpec", "hyperParameters", "epochCount"], a);
  const f = o(t, ["learningRateMultiplier"]);
  e !== void 0 && f != null && s(e, ["supervisedTuningSpec", "hyperParameters", "learningRateMultiplier"], f);
  const c = o(t, ["exportLastCheckpointOnly"]);
  e !== void 0 && c != null && s(e, ["supervisedTuningSpec", "exportLastCheckpointOnly"], c);
  const u = o(t, ["adapterSize"]);
  if (e !== void 0 && u != null && s(e, ["supervisedTuningSpec", "hyperParameters", "adapterSize"], u), o(t, ["batchSize"]) !== void 0) throw new Error("batchSize parameter is not supported in Vertex AI.");
  if (o(t, ["learningRate"]) !== void 0) throw new Error("learningRate parameter is not supported in Vertex AI.");
  return n;
}
function ic(t) {
  const e = {}, n = o(t, ["baseModel"]);
  n != null && s(e, ["baseModel"], n);
  const i = o(t, ["trainingDataset"]);
  i != null && s(e, ["supervisedTuningSpec", "trainingDatasetUri"], tc(i, e));
  const r = o(t, ["config"]);
  return r != null && s(e, ["config"], oc(r, e)), e;
}
function sc(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["model"], n);
  const i = o(t, ["name"]);
  return i != null && s(e, ["endpoint"], i), e;
}
function Sn(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["state"]);
  i != null && s(e, ["state"], Ot(i));
  const r = o(t, ["createTime"]);
  r != null && s(e, ["createTime"], r);
  const l = o(t, ["tuningTask", "startTime"]);
  l != null && s(e, ["startTime"], l);
  const a = o(t, ["tuningTask", "completeTime"]);
  a != null && s(e, ["endTime"], a);
  const f = o(t, ["updateTime"]);
  f != null && s(e, ["updateTime"], f);
  const c = o(t, ["description"]);
  c != null && s(e, ["description"], c);
  const u = o(t, ["baseModel"]);
  u != null && s(e, ["baseModel"], u);
  const d = o(t, ["_self"]);
  d != null && s(e, ["tunedModel"], sc(d));
  const p = o(t, ["distillationSpec"]);
  p != null && s(e, ["distillationSpec"], p);
  const m = o(t, ["experiment"]);
  m != null && s(e, ["experiment"], m);
  const g = o(t, ["labels"]);
  g != null && s(e, ["labels"], g);
  const h = o(t, ["pipelineJob"]);
  h != null && s(e, ["pipelineJob"], h);
  const v = o(t, ["satisfiesPzi"]);
  v != null && s(e, ["satisfiesPzi"], v);
  const T = o(t, ["satisfiesPzs"]);
  T != null && s(e, ["satisfiesPzs"], T);
  const E = o(t, ["serviceAccount"]);
  E != null && s(e, ["serviceAccount"], E);
  const y = o(t, ["tunedModelDisplayName"]);
  return y != null && s(e, ["tunedModelDisplayName"], y), e;
}
function rc(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["tunedModels"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => Sn(a))), s(e, ["tuningJobs"], l);
  }
  return e;
}
function lc(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["metadata"]);
  i != null && s(e, ["metadata"], i);
  const r = o(t, ["done"]);
  r != null && s(e, ["done"], r);
  const l = o(t, ["error"]);
  return l != null && s(e, ["error"], l), e;
}
function ac(t) {
  const e = {}, n = o(t, ["checkpointId"]);
  n != null && s(e, ["checkpointId"], n);
  const i = o(t, ["epoch"]);
  i != null && s(e, ["epoch"], i);
  const r = o(t, ["step"]);
  r != null && s(e, ["step"], r);
  const l = o(t, ["endpoint"]);
  return l != null && s(e, ["endpoint"], l), e;
}
function uc(t) {
  const e = {}, n = o(t, ["model"]);
  n != null && s(e, ["model"], n);
  const i = o(t, ["endpoint"]);
  i != null && s(e, ["endpoint"], i);
  const r = o(t, ["checkpoints"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => ac(a))), s(e, ["checkpoints"], l);
  }
  return e;
}
function Se(t) {
  const e = {}, n = o(t, ["name"]);
  n != null && s(e, ["name"], n);
  const i = o(t, ["state"]);
  i != null && s(e, ["state"], Ot(i));
  const r = o(t, ["createTime"]);
  r != null && s(e, ["createTime"], r);
  const l = o(t, ["startTime"]);
  l != null && s(e, ["startTime"], l);
  const a = o(t, ["endTime"]);
  a != null && s(e, ["endTime"], a);
  const f = o(t, ["updateTime"]);
  f != null && s(e, ["updateTime"], f);
  const c = o(t, ["error"]);
  c != null && s(e, ["error"], c);
  const u = o(t, ["description"]);
  u != null && s(e, ["description"], u);
  const d = o(t, ["baseModel"]);
  d != null && s(e, ["baseModel"], d);
  const p = o(t, ["tunedModel"]);
  p != null && s(e, ["tunedModel"], uc(p));
  const m = o(t, ["supervisedTuningSpec"]);
  m != null && s(e, ["supervisedTuningSpec"], m);
  const g = o(t, ["tuningDataStats"]);
  g != null && s(e, ["tuningDataStats"], g);
  const h = o(t, ["encryptionSpec"]);
  h != null && s(e, ["encryptionSpec"], h);
  const v = o(t, ["partnerModelTuningSpec"]);
  v != null && s(e, ["partnerModelTuningSpec"], v);
  const T = o(t, ["distillationSpec"]);
  T != null && s(e, ["distillationSpec"], T);
  const E = o(t, ["experiment"]);
  E != null && s(e, ["experiment"], E);
  const y = o(t, ["labels"]);
  y != null && s(e, ["labels"], y);
  const S = o(t, ["pipelineJob"]);
  S != null && s(e, ["pipelineJob"], S);
  const A = o(t, ["satisfiesPzi"]);
  A != null && s(e, ["satisfiesPzi"], A);
  const _ = o(t, ["satisfiesPzs"]);
  _ != null && s(e, ["satisfiesPzs"], _);
  const I = o(t, ["serviceAccount"]);
  I != null && s(e, ["serviceAccount"], I);
  const R = o(t, ["tunedModelDisplayName"]);
  return R != null && s(e, ["tunedModelDisplayName"], R), e;
}
function fc(t) {
  const e = {}, n = o(t, ["sdkHttpResponse"]);
  n != null && s(e, ["sdkHttpResponse"], n);
  const i = o(t, ["nextPageToken"]);
  i != null && s(e, ["nextPageToken"], i);
  const r = o(t, ["tuningJobs"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((a) => Se(a))), s(e, ["tuningJobs"], l);
  }
  return e;
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class cc extends B {
  constructor(e) {
    super(), this.apiClient = e, this.get = async (n) => await this.getInternal(n), this.list = async (n = {}) => new O(q.PAGED_ITEM_TUNING_JOBS, (i) => this.listInternal(i), await this.listInternal(n), n), this.tune = async (n) => {
      if (this.apiClient.isVertexAI()) return await this.tuneInternal(n);
      {
        const i = await this.tuneMldevInternal(n);
        let r = "";
        return i.metadata !== void 0 && i.metadata.tunedModel !== void 0 ? r = i.metadata.tunedModel : i.name !== void 0 && i.name.includes("/operations/") && (r = i.name.split("/operations/")[0]), { name: r, state: de.JOB_STATE_QUEUED };
      }
    };
  }
  async getInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = Of(e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json()), a.then((d) => Se(d));
    } else {
      const u = Yf(e);
      return f = C("{name}", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json()), a.then((d) => Sn(d));
    }
  }
  async listInternal(e) {
    var n, i, r, l;
    let a, f = "", c = {};
    if (this.apiClient.isVertexAI()) {
      const u = ec(e);
      return f = C("tuningJobs", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = fc(d), m = new yt();
        return Object.assign(m, p), m;
      });
    } else {
      const u = zf(e);
      return f = C("tunedModels", u._url), c = u._query, delete u.config, delete u._url, delete u._query, a = this.apiClient.request({ path: f, queryParams: c, body: JSON.stringify(u), httpMethod: "GET", httpOptions: (r = e.config) === null || r === void 0 ? void 0 : r.httpOptions, abortSignal: (l = e.config) === null || l === void 0 ? void 0 : l.abortSignal }).then((d) => d.json().then((p) => {
        const m = p;
        return m.sdkHttpResponse = { headers: d.headers }, m;
      })), a.then((d) => {
        const p = rc(d), m = new yt();
        return Object.assign(m, p), m;
      });
    }
  }
  async tuneInternal(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) {
      const f = ic(e);
      return l = C("tuningJobs", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r.then((c) => Se(c));
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async tuneMldevInternal(e) {
    var n, i;
    let r, l = "", a = {};
    if (this.apiClient.isVertexAI()) throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const f = bf(e);
      return l = C("tunedModels", f._url), a = f._query, delete f.config, delete f._url, delete f._query, r = this.apiClient.request({ path: l, queryParams: a, body: JSON.stringify(f), httpMethod: "POST", httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions, abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal }).then((c) => c.json()), r.then((c) => lc(c));
    }
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class dc {
  async download(e, n) {
    throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.");
  }
}
const pc = 1024 * 1024 * 8, mc = 3, gc = 1e3, hc = 2, fe = "x-goog-upload-status";
async function vc(t, e, n) {
  var i, r, l;
  let a = 0, f = 0, c = new pe(new Response()), u = "upload";
  for (a = t.size; f < a; ) {
    const p = Math.min(pc, a - f), m = t.slice(f, f + p);
    f + p >= a && (u += ", finalize");
    let g = 0, h = gc;
    for (; g < mc && (c = await n.request({ path: "", body: m, httpMethod: "POST", httpOptions: { apiVersion: "", baseUrl: e, headers: { "X-Goog-Upload-Command": u, "X-Goog-Upload-Offset": String(f), "Content-Length": String(p) } } }), !(!((i = c == null ? void 0 : c.headers) === null || i === void 0) && i[fe])); ) g++, await Cc(h), h = h * hc;
    if (f += p, ((r = c == null ? void 0 : c.headers) === null || r === void 0 ? void 0 : r[fe]) !== "active") break;
    if (a <= f) throw new Error("All content has been uploaded, but the upload status is not finalized.");
  }
  const d = await (c == null ? void 0 : c.json());
  if (((l = c == null ? void 0 : c.headers) === null || l === void 0 ? void 0 : l[fe]) !== "final") throw new Error("Failed to upload file: Upload status is not finalized.");
  return d.file;
}
async function Tc(t) {
  return { size: t.size, type: t.type };
}
function Cc(t) {
  return new Promise((e) => setTimeout(e, t));
}
class yc {
  async upload(e, n, i) {
    if (typeof e == "string") throw new Error("File path is not supported in browser uploader.");
    return await vc(e, n, i);
  }
  async stat(e) {
    if (typeof e == "string") throw new Error("File path is not supported in browser uploader.");
    return await Tc(e);
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
class Ec {
  create(e, n, i) {
    return new Sc(e, n, i);
  }
}
class Sc {
  constructor(e, n, i) {
    this.url = e, this.headers = n, this.callbacks = i;
  }
  connect() {
    this.ws = new WebSocket(this.url), this.ws.onopen = this.callbacks.onopen, this.ws.onerror = this.callbacks.onerror, this.ws.onclose = this.callbacks.onclose, this.ws.onmessage = this.callbacks.onmessage;
  }
  send(e) {
    if (this.ws === void 0) throw new Error("WebSocket is not connected");
    this.ws.send(e);
  }
  close() {
    if (this.ws === void 0) throw new Error("WebSocket is not connected");
    this.ws.close();
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Yt = "x-goog-api-key";
class _c {
  constructor(e) {
    this.apiKey = e;
  }
  async addAuthHeaders(e) {
    if (e.get(Yt) === null) {
      if (this.apiKey.startsWith("auth_tokens/")) throw new Error("Ephemeral tokens are only supported by the live API.");
      if (!this.apiKey) throw new Error("API key is missing. Please provide a valid API key.");
      e.append(Yt, this.apiKey);
    }
  }
}
/**
* @license
* Copyright 2025 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Ac = "gl-node/";
class Mc {
  constructor(e) {
    var n;
    if (e.apiKey == null) throw new Error("An API Key must be set when running in a browser");
    if (e.project || e.location) throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");
    this.vertexai = (n = e.vertexai) !== null && n !== void 0 ? n : false, this.apiKey = e.apiKey;
    const i = In(e.httpOptions, e.vertexai, void 0, void 0);
    i && (e.httpOptions ? e.httpOptions.baseUrl = i : e.httpOptions = { baseUrl: i }), this.apiVersion = e.apiVersion;
    const r = new _c(this.apiKey);
    this.apiClient = new $u({ auth: r, apiVersion: this.apiVersion, apiKey: this.apiKey, vertexai: this.vertexai, httpOptions: e.httpOptions, userAgentExtra: Ac + "web", uploader: new yc(), downloader: new dc() }), this.models = new ff(this.apiClient), this.live = new nf(this.apiClient, r, new Ec()), this.batches = new Zo(this.apiClient), this.chats = new es(this.models, this.apiClient), this.caches = new bi(this.apiClient), this.files = new ps(this.apiClient), this.operations = new mf(this.apiClient), this.authTokens = new Wf(this.apiClient), this.tunings = new cc(this.apiClient);
  }
}
export {
  ft as ActivityHandling,
  Ke as AdapterSize,
  re as ApiError,
  ke as ApiSpec,
  Ve as AuthType,
  Zo as Batches,
  Xe as Behavior,
  $e as BlockedReason,
  bi as Caches,
  ts as Chat,
  es as Chats,
  xn as ComputeTokensResponse,
  tt as ControlReferenceType,
  Tt as CountTokensResponse,
  Nn as CreateFileResponse,
  Et as DeleteCachedContentResponse,
  wn as DeleteFileResponse,
  vt as DeleteModelResponse,
  Qe as DynamicRetrievalConfigMode,
  Rn as EditImageResponse,
  ot as EditMode,
  mt as EmbedContentResponse,
  ut as EndSensitivity,
  Ge as Environment,
  ze as FeatureSelectionPreference,
  rt as FileSource,
  st as FileState,
  ps as Files,
  Be as FinishReason,
  Ze as FunctionCallingConfigMode,
  dt as FunctionResponseScheduling,
  Z as GenerateContentResponse,
  gt as GenerateImagesResponse,
  ie as GenerateVideosOperation,
  Ct as GenerateVideosResponse,
  Mc as GoogleGenAI,
  Ue as HarmBlockMethod,
  Fe as HarmBlockThreshold,
  we as HarmCategory,
  Je as HarmProbability,
  He as HarmSeverity,
  pe as HttpResponse,
  je as ImagePromptLanguage,
  de as JobState,
  Ne as Language,
  _t as ListBatchJobsResponse,
  St as ListCachedContentsResponse,
  Dn as ListFilesResponse,
  ht as ListModelsResponse,
  yt as ListTuningJobsResponse,
  nf as Live,
  H as LiveMusicPlaybackControl,
  Fn as LiveMusicServerMessage,
  Un as LiveServerMessage,
  et as MaskReferenceMode,
  lt as MediaModality,
  Ye as MediaResolution,
  oe as Modality,
  Le as Mode,
  ff as Models,
  mf as Operations,
  De as Outcome,
  q as PagedItem,
  O as Pager,
  Oe as PersonGeneration,
  be as SafetyFilterLevel,
  pt as Scale,
  sf as Session,
  at as StartSensitivity,
  nt as SubjectReferenceType,
  Wf as Tokens,
  We as TrafficType,
  ct as TurnCoverage,
  G as Type,
  Pn as UpscaleImageResponse,
  qe as UrlRetrievalStatus,
  it as VideoCompressionQuality
};
