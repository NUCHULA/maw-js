var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _t2, _e2, _s, _c, _a2, _l, _n, _i, _u, _h, _d, _w, _S, _p, _f, _m2, _k2, _y, _r, _o, _C_instances, g_fn, b_fn, C_fn, A_fn, B_fn, E_fn, _a, _t3, _e3, _s2, _c2, _a3, _l2, _n2, _i2, _u2, _h2, _d2, _w2, _S2, _p2, _f2, _m3, _k3, _y2, _r2, _o2, _g, _b, _C, _ut_instances, A_fn2, B_fn2, E_fn2, _b2, _t4, _e4, _s3, _c3, _a4, _l3, _n3, _i3, _u3, _h3, _d3, _w3, _S3, _p3, _f3, _m4, _k4, _y3, _r3, _o3, _g2, _b3, _C2, _ht_instances, A_fn3, B_fn3, E_fn3, _c4, _t5, _e5, _s4, _c5, _a5, _l4, _n4, _i4, _u4, _Et_instances, h_fn, _d4, _t6, _e6, _s5, _c6, _a6, _l5, _n5, _i5, _u5, _h4, _d5, _Rt_instances, w_fn, S_fn, p_fn, f_fn, m_fn, k_fn, y_fn, r_fn, o_fn, g_fn2, b_fn2, C_fn2, A_fn4, B_fn4, E_fn4, T_fn, I_fn, R_fn, v_fn, _e7, _t7, _e8, _s6, _c7, __t_instances, a_fn, l_fn, n_fn, _f4, _t8, _e9, _Ot_instances, s_fn, c_fn, a_fn2, l_fn2, n_fn2, i_fn, u_fn, h_fn2, d_fn, w_fn2, S_fn2, p_fn2, f_fn2, m_fn2, _g3, _t9, _h5, _t10, _e10, _s7, _c8, _a7, _l6, _n6, _i6, _u6, _h6, _i7, _t11, _e11, _s8, _c9, _a8, _l7, _n7, _i8, _u7, _h7, _d6, _w4, _j, _t12, _e12, _s9, _c10, _k, _a9, _t13, _e13, _s10, _l8, _m, _t14, _e14, _s11, _c11, _a10, _l9, _n8, _i9, _u8, _h8, _d7, _w5, _S4, _p4, _f5, _m5, _k5, _y4, _r4, _o4, _g4, _b4, _C3, _A, _B, _E, _T, _I, _R, _v, __, _U, _x_instances, G_fn, W_fn, H_fn, V_fn, j_fn, Z_fn, J_fn, x_fn, K_fn, F_fn, P_fn, D_fn, Q_fn, L_fn, N_fn, X_fn, Y_fn, ee_fn, $_fn, O_fn, te_fn, z_fn, M_fn, se_fn, re_fn, q_fn, ie_fn, ne_fn, ae_fn;
const Xe = {};
var pe = {}, ve = class Ie {
  constructor(e) {
    if (new.target === Ie) throw new Error("Transport is abstract - use SABTransport or PostMessageTransport");
    this._config = e, this._disposed = false;
  }
  get mode() {
    return this._config.mode;
  }
  send(e, s) {
    throw new Error("Abstract method - implement in subclass");
  }
  onReply(e) {
    throw new Error("Abstract method - implement in subclass");
  }
  onDebug(e) {
    throw new Error("Abstract method - implement in subclass");
  }
  onError(e) {
    throw new Error("Abstract method - implement in subclass");
  }
  getMetrics() {
    throw new Error("Abstract method - implement in subclass");
  }
  async initialize() {
    throw new Error("Abstract method - implement in subclass");
  }
  createOscChannel() {
    throw new Error("Abstract method - implement in subclass");
  }
  dispose() {
    this._disposed = true;
  }
  get ready() {
    throw new Error("Abstract method - implement in subclass");
  }
}, q = /* @__PURE__ */ new Map();
function Te(t) {
  try {
    return new URL(t, window.location.href).origin !== window.location.origin;
  } catch {
    return false;
  }
}
async function Ue(t) {
  if (q.has(t)) return q.get(t);
  let e = await fetch(t);
  if (!e.ok) throw new Error(`Failed to fetch ${t}: ${e.status} ${e.statusText}`);
  let s = await e.text(), r = new Blob([s], { type: "application/javascript" }), i = URL.createObjectURL(r);
  return q.set(t, i), i;
}
async function I(t, e = {}) {
  let s = t;
  return Te(t) && (s = await Ue(t)), new Worker(s, e);
}
async function Ye(t, e) {
  let s = e;
  Te(e) && (s = await Ue(e)), await t.addModule(s);
}
function et(t, e, s) {
  return (s - 1 - t + e) % s;
}
function tt({ uint8View: t, dataView: e, bufferStart: s, bufferSize: r, head: i, payload: n, sequence: a, messageMagic: o, headerSize: l, sourceId: h = 0, headerScratch: u = null, headerScratchView: c = null }) {
  let d = n.length, m = l + d + 3 & -4, y = r - i;
  if (m > y) {
    let p = u || new Uint8Array(l), b = c || new DataView(p.buffer);
    b.setUint32(0, o, true), b.setUint32(4, m, true), b.setUint32(8, a, true), b.setUint32(12, h, true);
    let w = s + i, M = s;
    if (y >= l) {
      t.set(p, w);
      let f = y - l;
      f > 0 && t.set(n.subarray(0, f), w + l), t.set(n.subarray(f), M);
    } else {
      t.set(p.subarray(0, y), w), t.set(p.subarray(y), M);
      let f = l - y;
      t.set(n, M + f);
    }
  } else {
    let p = s + i;
    e.setUint32(p, o, true), e.setUint32(p + 4, m, true), e.setUint32(p + 8, a, true), e.setUint32(p + 12, h, true), t.set(n, p + l);
  }
  return (i + m) % r;
}
function st(t, e, s = 0, r = false) {
  for (let i = 0; i <= s; i++) if (Atomics.compareExchange(t, e, 0, 1) === 0) return true;
  if (r) {
    for (let i = 0; i < 100; i++) if (Atomics.wait(t, e, 1, 100), Atomics.compareExchange(t, e, 0, 1) === 0) return true;
    return console.error("[RingBuffer] Lock acquisition timeout after 10s - possible deadlock"), false;
  }
  return false;
}
function rt(t, e) {
  Atomics.store(t, e, 0), Atomics.notify(t, e, 1);
}
function it({ atomicView: t, dataView: e, uint8View: s, bufferConstants: r, ringBufferBase: i, controlIndices: n, oscMessage: a, sourceId: o = 0, maxSpins: l = 0, useWait: h = false }) {
  let u = a.length, c = r.MESSAGE_HEADER_SIZE + u;
  if (c > r.IN_BUFFER_SIZE - r.MESSAGE_HEADER_SIZE || !st(t, n.IN_WRITE_LOCK, l, h)) return false;
  try {
    let d = Atomics.load(t, n.IN_HEAD), m = Atomics.load(t, n.IN_TAIL), y = c + 3 & -4;
    if (et(d, m, r.IN_BUFFER_SIZE) < y) return false;
    let p = Atomics.add(t, n.IN_SEQUENCE, 1), b = tt({ uint8View: s, dataView: e, bufferStart: i + r.IN_BUFFER_START, bufferSize: r.IN_BUFFER_SIZE, head: d, payload: a, sequence: p, messageMagic: r.MESSAGE_MAGIC, headerSize: r.MESSAGE_HEADER_SIZE, sourceId: o });
    return Atomics.load(t, n.IN_HEAD), Atomics.store(t, n.IN_HEAD, b), Atomics.notify(t, n.IN_HEAD, 1), true;
  } finally {
    rt(t, n.IN_WRITE_LOCK);
  }
}
function Re(t, e) {
  let s = t + e;
  return { IN_HEAD: (s + 0) / 4, IN_TAIL: (s + 4) / 4, IN_SEQUENCE: (s + 24) / 4, IN_WRITE_LOCK: (s + 40) / 4, IN_LOG_TAIL: (s + 44) / 4 };
}
function nt(t, e) {
  let s = t + e;
  return { IN_HEAD: (s + 0) / 4, IN_TAIL: (s + 4) / 4, OUT_HEAD: (s + 8) / 4, OUT_TAIL: (s + 12) / 4, DEBUG_HEAD: (s + 16) / 4, DEBUG_TAIL: (s + 20) / 4, IN_SEQUENCE: (s + 24) / 4, OUT_SEQUENCE: (s + 28) / 4, DEBUG_SEQUENCE: (s + 32) / 4, STATUS_FLAGS: (s + 36) / 4, IN_WRITE_LOCK: (s + 40) / 4, IN_LOG_TAIL: (s + 44) / 4 };
}
function at(t) {
  return t.length >= 8 && t[0] === 35 && t[1] === 98 && t[2] === 117 && t[3] === 110 && t[4] === 100 && t[5] === 108 && t[6] === 101 && t[7] === 0;
}
var _e = 0.5;
function Oe(t) {
  if (t.length < 16) return null;
  let e = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return { ntpSeconds: e.getUint32(8, false), ntpFraction: e.getUint32(12, false) };
}
function U() {
  return (performance.timeOrigin + performance.now()) / 1e3 + 2208988800;
}
function ot(t, e = {}) {
  let { getCurrentNTP: s = U, bypassLookaheadS: r = _e } = e;
  if (!at(t)) return "nonBundle";
  let i = Oe(t);
  if (!i) return "nonBundle";
  let { ntpSeconds: n, ntpFraction: a } = i;
  if (n === 0 && a <= 1) return "immediate";
  let o = s();
  if (o === null || o === 0) return "immediate";
  let l = n + a / 4294967296 - o;
  return l < 0 ? "late" : l < r ? "nearFuture" : "farFuture";
}
function xe(t) {
  return t !== "farFuture";
}
var lt = { nonBundle: 38, immediate: 39, nearFuture: 40, late: 41 }, Fe = (_a = class {
  constructor(e, s) {
    __privateAdd(this, _C_instances);
    __privateAdd(this, _t2);
    __privateAdd(this, _e2);
    __privateAdd(this, _s);
    __privateAdd(this, _c);
    __privateAdd(this, _a2);
    __privateAdd(this, _l);
    __privateAdd(this, _n);
    __privateAdd(this, _i);
    __privateAdd(this, _u);
    __privateAdd(this, _h);
    __privateAdd(this, _d);
    __privateAdd(this, _w);
    __privateAdd(this, _S);
    __privateAdd(this, _p);
    __privateAdd(this, _f);
    __privateAdd(this, _m2);
    __privateAdd(this, _k2);
    __privateAdd(this, _y);
    __privateAdd(this, _r);
    __privateAdd(this, _o, { messagesSent: 0, bytesSent: 0, nonBundle: 0, immediate: 0, nearFuture: 0, late: 0, bypassed: 0 });
    var _a11;
    if (__privateSet(this, _t2, e), __privateSet(this, _a2, s.preschedulerPort || null), __privateSet(this, _n, s.bypassLookaheadS ?? _e), __privateSet(this, _i, s.sourceId ?? 0), __privateSet(this, _u, s.blocking ?? __privateGet(this, _i) !== 0), __privateSet(this, _h, s.getCurrentNTP ?? U), __privateSet(this, _f, 1e3), e === "postMessage") __privateSet(this, _e2, s.port);
    else {
      if (__privateSet(this, _s, { sharedBuffer: s.sharedBuffer, ringBufferBase: s.ringBufferBase, bufferConstants: s.bufferConstants, controlIndices: s.controlIndices }), __privateMethod(this, _C_instances, g_fn).call(this), s.sharedBuffer && s.bufferConstants) {
        let r = s.ringBufferBase + s.bufferConstants.METRICS_START;
        __privateSet(this, _l, new Int32Array(s.sharedBuffer, r, s.bufferConstants.METRICS_SIZE / 4));
      }
      if (s.sharedBuffer && ((_a11 = s.bufferConstants) == null ? void 0 : _a11.NODE_ID_COUNTER_START) !== void 0) {
        let r = s.ringBufferBase + s.bufferConstants.NODE_ID_COUNTER_START;
        __privateSet(this, _d, new Int32Array(s.sharedBuffer, r, 1)), __privateMethod(this, _C_instances, B_fn).call(this);
      }
    }
    s.nodeIdSource && (__privateSet(this, _m2, s.nodeIdSource), __privateMethod(this, _C_instances, B_fn).call(this)), s.nodeIdRange && (__privateSet(this, _w, s.nodeIdRange.from), __privateSet(this, _S, s.nodeIdRange.to), __privateSet(this, _p, s.nodeIdRange.from)), s.nodeIdPort && (__privateSet(this, _k2, s.nodeIdPort), __privateGet(this, _k2).onmessage = (r) => {
      r.data.type === "nodeIdRange" && __privateSet(this, _y, { from: r.data.from, to: r.data.to });
    }, __privateMethod(this, _C_instances, E_fn).call(this));
  }
  classify(e) {
    return ot(e, { getCurrentNTP: __privateGet(this, _h), bypassLookaheadS: __privateGet(this, _n) });
  }
  getAndResetMetrics() {
    let e = { ...__privateGet(this, _o) };
    return __privateSet(this, _o, { messagesSent: 0, bytesSent: 0, nonBundle: 0, immediate: 0, nearFuture: 0, late: 0, bypassed: 0 }), e;
  }
  getMetrics() {
    return __privateGet(this, _t2) === "sab" && __privateGet(this, _l) ? { messagesSent: Atomics.load(__privateGet(this, _l), 24), bytesSent: Atomics.load(__privateGet(this, _l), 25), nonBundle: Atomics.load(__privateGet(this, _l), 38), immediate: Atomics.load(__privateGet(this, _l), 39), nearFuture: Atomics.load(__privateGet(this, _l), 40), late: Atomics.load(__privateGet(this, _l), 41), bypassed: Atomics.load(__privateGet(this, _l), 22) } : { ...__privateGet(this, _o) };
  }
  send(e) {
    let s = this.classify(e);
    if (xe(s)) {
      let r = __privateMethod(this, _C_instances, C_fn).call(this, e, s);
      return r && __privateMethod(this, _C_instances, b_fn).call(this, e.length, s), r;
    } else {
      let r = __privateMethod(this, _C_instances, A_fn).call(this, e);
      return r && __privateMethod(this, _C_instances, b_fn).call(this, e.length, null), r;
    }
  }
  sendDirect(e) {
    return __privateMethod(this, _C_instances, C_fn).call(this, e);
  }
  sendToPrescheduler(e) {
    return __privateMethod(this, _C_instances, A_fn).call(this, e);
  }
  nextNodeId() {
    if (__privateGet(this, _d)) return Atomics.add(__privateGet(this, _d), 0, 1);
    __privateGet(this, _p) >= __privateGet(this, _S) && __privateMethod(this, _C_instances, B_fn).call(this);
    let e = __privateWrapper(this, _p)._++;
    return __privateGet(this, _k2) && !__privateGet(this, _y) && __privateGet(this, _S) - __privateGet(this, _p) <= __privateGet(this, _f) >>> 1 && __privateMethod(this, _C_instances, E_fn).call(this), e;
  }
  set getCurrentNTP(e) {
    __privateSet(this, _h, e);
  }
  get mode() {
    return __privateGet(this, _t2);
  }
  get transferable() {
    let e = { mode: __privateGet(this, _t2), preschedulerPort: __privateGet(this, _a2), bypassLookaheadS: __privateGet(this, _n), sourceId: __privateGet(this, _i), blocking: __privateGet(this, _u) };
    if (__privateGet(this, _t2) === "postMessage") {
      let s = __privateGet(this, _f) * 10, r, i;
      if (__privateGet(this, _m2)) {
        let n = __privateGet(this, _m2).call(this, s);
        r = { from: n.from, to: n.to };
        let a = new MessageChannel(), o = __privateGet(this, _m2), l = __privateGet(this, _f);
        a.port1.onmessage = (h) => {
          if (h.data.type === "requestNodeIdRange") {
            let u = o(l);
            a.port1.postMessage({ type: "nodeIdRange", from: u.from, to: u.to });
          }
        }, i = a.port2, __privateSet(this, _r, i);
      }
      return { ...e, port: __privateGet(this, _e2), nodeIdRange: r, nodeIdPort: i };
    } else return { ...e, sharedBuffer: __privateGet(this, _s).sharedBuffer, ringBufferBase: __privateGet(this, _s).ringBufferBase, bufferConstants: __privateGet(this, _s).bufferConstants, controlIndices: __privateGet(this, _s).controlIndices };
  }
  get transferList() {
    let e = [];
    return __privateGet(this, _t2) === "postMessage" && __privateGet(this, _e2) && e.push(__privateGet(this, _e2)), __privateGet(this, _a2) && e.push(__privateGet(this, _a2)), __privateGet(this, _r) && (e.push(__privateGet(this, _r)), __privateSet(this, _r, null)), e;
  }
  close() {
    __privateGet(this, _t2) === "postMessage" && __privateGet(this, _e2) && (__privateGet(this, _e2).close(), __privateSet(this, _e2, null)), __privateGet(this, _a2) && (__privateGet(this, _a2).close(), __privateSet(this, _a2, null));
  }
  static createPostMessage(e) {
    return e instanceof MessagePort ? new _a("postMessage", { port: e }) : new _a("postMessage", e);
  }
  static createSAB(e) {
    let s = e.controlIndices;
    return s || (s = Re(e.ringBufferBase, e.bufferConstants.CONTROL_START)), new _a("sab", { sharedBuffer: e.sharedBuffer, ringBufferBase: e.ringBufferBase, bufferConstants: e.bufferConstants, controlIndices: s, preschedulerPort: e.preschedulerPort, bypassLookaheadS: e.bypassLookaheadS, sourceId: e.sourceId, blocking: e.blocking });
  }
  static fromTransferable(e) {
    return e.mode === "postMessage" ? new _a("postMessage", { port: e.port, preschedulerPort: e.preschedulerPort, bypassLookaheadS: e.bypassLookaheadS, sourceId: e.sourceId, blocking: e.blocking, nodeIdRange: e.nodeIdRange, nodeIdPort: e.nodeIdPort }) : new _a("sab", { sharedBuffer: e.sharedBuffer, ringBufferBase: e.ringBufferBase, bufferConstants: e.bufferConstants, controlIndices: e.controlIndices, preschedulerPort: e.preschedulerPort, bypassLookaheadS: e.bypassLookaheadS, sourceId: e.sourceId, blocking: e.blocking });
  }
}, _t2 = new WeakMap(), _e2 = new WeakMap(), _s = new WeakMap(), _c = new WeakMap(), _a2 = new WeakMap(), _l = new WeakMap(), _n = new WeakMap(), _i = new WeakMap(), _u = new WeakMap(), _h = new WeakMap(), _d = new WeakMap(), _w = new WeakMap(), _S = new WeakMap(), _p = new WeakMap(), _f = new WeakMap(), _m2 = new WeakMap(), _k2 = new WeakMap(), _y = new WeakMap(), _r = new WeakMap(), _o = new WeakMap(), _C_instances = new WeakSet(), g_fn = function() {
  let e = __privateGet(this, _s).sharedBuffer;
  __privateSet(this, _c, { atomicView: new Int32Array(e), dataView: new DataView(e), uint8View: new Uint8Array(e) });
}, b_fn = function(e, s = null) {
  if (__privateGet(this, _t2) === "sab" && __privateGet(this, _l)) {
    if (Atomics.add(__privateGet(this, _l), 24, 1), Atomics.add(__privateGet(this, _l), 25, e), s) {
      let r = lt[s];
      r !== void 0 && (Atomics.add(__privateGet(this, _l), r, 1), Atomics.add(__privateGet(this, _l), 22, 1));
    }
  } else __privateGet(this, _o).messagesSent++, __privateGet(this, _o).bytesSent += e, s && s in __privateGet(this, _o) && (__privateGet(this, _o)[s]++, __privateGet(this, _o).bypassed++);
}, C_fn = function(e, s = null, r = true) {
  if (__privateGet(this, _t2) === "postMessage") return __privateGet(this, _e2) ? (__privateGet(this, _e2).postMessage({ type: "osc", oscData: e, bypassCategory: s, sourceId: __privateGet(this, _i) }), true) : false;
  {
    let i = __privateGet(this, _u), n = it({ atomicView: __privateGet(this, _c).atomicView, dataView: __privateGet(this, _c).dataView, uint8View: __privateGet(this, _c).uint8View, bufferConstants: __privateGet(this, _s).bufferConstants, ringBufferBase: __privateGet(this, _s).ringBufferBase, controlIndices: __privateGet(this, _s).controlIndices, oscMessage: e, sourceId: __privateGet(this, _i), maxSpins: i ? 10 : 0, useWait: i });
    return !n && !i && r && __privateGet(this, _a2) ? (__privateGet(this, _l) && Atomics.add(__privateGet(this, _l), 45, 1), __privateGet(this, _a2).postMessage({ type: "directDispatch", oscData: e, sourceId: __privateGet(this, _i) }), true) : n;
  }
}, A_fn = function(e) {
  return __privateGet(this, _a2) ? (__privateGet(this, _a2).postMessage({ type: "osc", oscData: e, sourceId: __privateGet(this, _i) }), true) : (console.error("[OscChannel] No prescheduler port, sending direct"), __privateMethod(this, _C_instances, C_fn).call(this, e));
}, B_fn = function() {
  if (__privateGet(this, _m2)) {
    let e = __privateGet(this, _m2).call(this, __privateGet(this, _f));
    __privateSet(this, _w, e.from), __privateSet(this, _S, e.to), __privateSet(this, _p, e.from);
  } else __privateGet(this, _y) ? (__privateSet(this, _w, __privateGet(this, _y).from), __privateSet(this, _S, __privateGet(this, _y).to), __privateSet(this, _p, __privateGet(this, _y).from), __privateSet(this, _y, null), __privateMethod(this, _C_instances, E_fn).call(this)) : __privateGet(this, _k2) && (console.warn("[OscChannel] nextNodeId() range exhausted before async refill arrived. IDs may not be unique. Yield to the event loop between large batches of nextNodeId() calls."), __privateMethod(this, _C_instances, E_fn).call(this));
}, E_fn = function() {
  __privateGet(this, _k2) && __privateGet(this, _k2).postMessage({ type: "requestNodeIdRange" });
}, _a), ut = (_b2 = class extends ve {
  constructor(t) {
    super({ ...t, mode: "sab" });
    __privateAdd(this, _ut_instances);
    __privateAdd(this, _t3);
    __privateAdd(this, _e3);
    __privateAdd(this, _s2);
    __privateAdd(this, _c2);
    __privateAdd(this, _a3);
    __privateAdd(this, _l2);
    __privateAdd(this, _n2);
    __privateAdd(this, _i2);
    __privateAdd(this, _u2);
    __privateAdd(this, _h2);
    __privateAdd(this, _d2);
    __privateAdd(this, _w2);
    __privateAdd(this, _S2);
    __privateAdd(this, _p2);
    __privateAdd(this, _f2);
    __privateAdd(this, _m3);
    __privateAdd(this, _k3, 1);
    __privateAdd(this, _y2, false);
    __privateAdd(this, _r2);
    __privateAdd(this, _o2, 0);
    __privateAdd(this, _g, 0);
    __privateAdd(this, _b, 0);
    __privateAdd(this, _C, null);
    if (__privateSet(this, _t3, t.sharedBuffer), __privateSet(this, _e3, t.ringBufferBase), __privateSet(this, _s2, t.bufferConstants), __privateSet(this, _w2, t.workerBaseURL), __privateSet(this, _r2, t.preschedulerCapacity || 65536), !(__privateGet(this, _t3) instanceof SharedArrayBuffer)) throw new Error("SABTransport requires a SharedArrayBuffer");
    __privateMethod(this, _ut_instances, A_fn2).call(this);
  }
  async initialize() {
    if (__privateGet(this, _y2)) return;
    let [t, e, s, r] = await Promise.all([I(__privateGet(this, _w2) + "osc_out_prescheduler_worker.js", { type: "module" }), I(__privateGet(this, _w2) + "osc_in_worker.js", { type: "module" }), I(__privateGet(this, _w2) + "debug_worker.js", { type: "module" }), I(__privateGet(this, _w2) + "osc_out_log_sab_worker.js", { type: "module" })]);
    __privateSet(this, _i2, t), __privateSet(this, _u2, e), __privateSet(this, _h2, s), __privateSet(this, _d2, r), __privateMethod(this, _ut_instances, E_fn2).call(this), await Promise.all([__privateMethod(this, _ut_instances, B_fn2).call(this, __privateGet(this, _i2), "OSC OUT", { maxPendingMessages: __privateGet(this, _r2), bypassLookaheadS: this._config.bypassLookaheadS }), __privateMethod(this, _ut_instances, B_fn2).call(this, __privateGet(this, _u2), "OSC IN"), __privateMethod(this, _ut_instances, B_fn2).call(this, __privateGet(this, _h2), "DEBUG"), __privateMethod(this, _ut_instances, B_fn2).call(this, __privateGet(this, _d2), "OSC OUT LOG")]), __privateGet(this, _u2).postMessage({ type: "start" }), __privateGet(this, _h2).postMessage({ type: "start" }), __privateGet(this, _d2).postMessage({ type: "start" }), __privateSet(this, _y2, true);
  }
  send(t, e) {
    return !__privateGet(this, _y2) || this._disposed ? false : (__privateGet(this, _i2).postMessage({ type: "send", oscData: t, sessionId: 0, runTag: "", audioTimeS: null, currentTimeS: null }), __privateWrapper(this, _o2)._++, __privateSet(this, _b, __privateGet(this, _b) + t.length), true);
  }
  sendWithOptions(t, e = {}) {
    if (!__privateGet(this, _y2) || this._disposed) return false;
    let { sessionId: s = 0, runTag: r = "", audioTimeS: i = null, currentTimeS: n = null } = e;
    return __privateGet(this, _i2).postMessage({ type: "send", oscData: t, sessionId: s, runTag: r, audioTimeS: i, currentTimeS: n }), __privateWrapper(this, _o2)._++, __privateSet(this, _b, __privateGet(this, _b) + t.length), true;
  }
  sendImmediate(t) {
    return !__privateGet(this, _y2) || this._disposed ? false : (__privateGet(this, _i2).postMessage({ type: "sendImmediate", oscData: t }), __privateWrapper(this, _o2)._++, __privateSet(this, _b, __privateGet(this, _b) + t.length), true);
  }
  createOscChannel(t = {}) {
    if (!__privateGet(this, _y2)) throw new Error("Transport not initialized");
    let e = t.sourceId ?? __privateWrapper(this, _k3)._++, s = new MessageChannel();
    return __privateGet(this, _i2).postMessage({ type: "addOscSource" }, [s.port1]), Fe.createSAB({ sharedBuffer: __privateGet(this, _t3), ringBufferBase: __privateGet(this, _e3), bufferConstants: __privateGet(this, _s2), controlIndices: __privateGet(this, _n2), preschedulerPort: s.port2, bypassLookaheadS: this._config.bypassLookaheadS, sourceId: e, blocking: t.blocking });
  }
  cancelSessionTag(t, e) {
    __privateGet(this, _y2) && __privateGet(this, _i2).postMessage({ type: "cancelSessionTag", sessionId: t, runTag: e });
  }
  cancelSession(t) {
    __privateGet(this, _y2) && __privateGet(this, _i2).postMessage({ type: "cancelSession", sessionId: t });
  }
  cancelTag(t) {
    __privateGet(this, _y2) && __privateGet(this, _i2).postMessage({ type: "cancelTag", runTag: t });
  }
  cancelAll() {
    __privateGet(this, _y2) && __privateGet(this, _i2).postMessage({ type: "cancelAll" });
  }
  cancelAllWithAck() {
    return __privateGet(this, _y2) ? new Promise((t) => {
      let e = (s) => {
        s.data.type === "cancelAllAck" && (__privateGet(this, _i2).removeEventListener("message", e), t());
      };
      __privateGet(this, _i2).addEventListener("message", e), __privateGet(this, _i2).postMessage({ type: "cancelAll", ack: true });
    }) : Promise.resolve();
  }
  onReply(t) {
    __privateSet(this, _S2, t);
  }
  onDebug(t) {
    __privateSet(this, _p2, t);
  }
  onError(t) {
    __privateSet(this, _f2, t);
  }
  onOscLog(t) {
    __privateSet(this, _m3, t);
  }
  handleOscLog(t) {
    __privateGet(this, _m3) && __privateGet(this, _m3).call(this, t);
  }
  getMetrics() {
    return { oscOutMessagesSent: __privateGet(this, _o2), oscOutMessagesDropped: __privateGet(this, _g), oscOutBytesSent: __privateGet(this, _b) };
  }
  get ready() {
    return __privateGet(this, _y2) && !this._disposed;
  }
  dispose() {
    this._disposed || (__privateGet(this, _i2) && (__privateGet(this, _i2).postMessage({ type: "stop" }), __privateGet(this, _i2).terminate(), __privateSet(this, _i2, null)), __privateGet(this, _u2) && (__privateGet(this, _u2).postMessage({ type: "stop" }), __privateGet(this, _u2).terminate(), __privateSet(this, _u2, null)), __privateGet(this, _h2) && (__privateGet(this, _h2).postMessage({ type: "stop" }), __privateGet(this, _h2).terminate(), __privateSet(this, _h2, null)), __privateGet(this, _d2) && (__privateGet(this, _d2).postMessage({ type: "stop" }), __privateGet(this, _d2).terminate(), __privateSet(this, _d2, null)), __privateSet(this, _y2, false), super.dispose());
  }
  getPreschedulerMetrics() {
    return __privateGet(this, _C);
  }
}, _t3 = new WeakMap(), _e3 = new WeakMap(), _s2 = new WeakMap(), _c2 = new WeakMap(), _a3 = new WeakMap(), _l2 = new WeakMap(), _n2 = new WeakMap(), _i2 = new WeakMap(), _u2 = new WeakMap(), _h2 = new WeakMap(), _d2 = new WeakMap(), _w2 = new WeakMap(), _S2 = new WeakMap(), _p2 = new WeakMap(), _f2 = new WeakMap(), _m3 = new WeakMap(), _k3 = new WeakMap(), _y2 = new WeakMap(), _r2 = new WeakMap(), _o2 = new WeakMap(), _g = new WeakMap(), _b = new WeakMap(), _C = new WeakMap(), _ut_instances = new WeakSet(), A_fn2 = function() {
  __privateSet(this, _c2, new Int32Array(__privateGet(this, _t3))), __privateSet(this, _a3, new DataView(__privateGet(this, _t3))), __privateSet(this, _l2, new Uint8Array(__privateGet(this, _t3))), __privateSet(this, _n2, Re(__privateGet(this, _e3), __privateGet(this, _s2).CONTROL_START));
}, B_fn2 = function(t, e, s = {}) {
  return new Promise((r, i) => {
    let n = setTimeout(() => {
      i(new Error(`${e} worker initialization timeout`));
    }, 5e3), a = (o) => {
      o.data.type === "initialized" && (clearTimeout(n), t.removeEventListener("message", a), r());
    };
    t.addEventListener("message", a), t.postMessage({ type: "init", sharedBuffer: __privateGet(this, _t3), ringBufferBase: __privateGet(this, _e3), bufferConstants: __privateGet(this, _s2), ...s });
  });
}, E_fn2 = function() {
  __privateGet(this, _u2).onmessage = (t) => {
    let e = t.data;
    e.type === "messages" && __privateGet(this, _S2) ? e.messages.forEach((s) => {
      s.oscData && __privateGet(this, _S2).call(this, s.oscData, s.sequence, s.timestamp);
    }) : e.type === "error" && (console.error("[SABTransport] OSC IN error:", e.error), __privateGet(this, _f2) && __privateGet(this, _f2).call(this, e.error, "oscIn"));
  }, __privateGet(this, _h2).onmessage = (t) => {
    let e = t.data;
    e.type === "debug" && __privateGet(this, _p2) ? e.messages.forEach((s) => {
      __privateGet(this, _p2).call(this, s);
    }) : e.type === "error" && (console.error("[SABTransport] DEBUG error:", e.error), __privateGet(this, _f2) && __privateGet(this, _f2).call(this, e.error, "debug"));
  }, __privateGet(this, _i2).onmessage = (t) => {
    let e = t.data;
    e.type === "preschedulerMetrics" ? __privateSet(this, _C, e.metrics) : e.type === "error" && (console.error("[SABTransport] OSC OUT error:", e.error), __privateWrapper(this, _g)._++, __privateGet(this, _f2) && __privateGet(this, _f2).call(this, e.error, "oscOut"));
  }, __privateGet(this, _d2).onmessage = (t) => {
    let e = t.data;
    e.type === "oscLog" && __privateGet(this, _m3) ? __privateGet(this, _m3).call(this, e.entries) : e.type === "error" && (console.error("[SABTransport] OSC OUT LOG error:", e.error), __privateGet(this, _f2) && __privateGet(this, _f2).call(this, e.error, "oscOutLog"));
  };
}, _b2), ht = (_c4 = class extends ve {
  constructor(t) {
    super({ ...t, mode: "postMessage" });
    __privateAdd(this, _ht_instances);
    __privateAdd(this, _t4);
    __privateAdd(this, _e4);
    __privateAdd(this, _s3);
    __privateAdd(this, _c3);
    __privateAdd(this, _a4);
    __privateAdd(this, _l3);
    __privateAdd(this, _n3);
    __privateAdd(this, _i3, 1);
    __privateAdd(this, _u3, null);
    __privateAdd(this, _h3, false);
    __privateAdd(this, _d3);
    __privateAdd(this, _w3);
    __privateAdd(this, _S3, null);
    __privateAdd(this, _p3, 0);
    __privateAdd(this, _f3, 0);
    __privateAdd(this, _m4, 0);
    __privateAdd(this, _k4, 0);
    __privateAdd(this, _y3, 0);
    __privateAdd(this, _r3, -1);
    __privateAdd(this, _o3, 0);
    __privateAdd(this, _g2, 0);
    __privateAdd(this, _b3);
    __privateAdd(this, _C2);
    __privateSet(this, _s3, t.workerBaseURL), __privateSet(this, _d3, t.preschedulerCapacity || 65536), __privateSet(this, _w3, t.snapshotIntervalMs), __privateSet(this, _b3, t.getAudioContextTime), __privateSet(this, _C2, t.getNTPStartTime);
  }
  async initialize(t) {
    if (__privateGet(this, _h3)) return;
    if (!t) throw new Error("PostMessageTransport requires workletPort");
    __privateSet(this, _t4, t), __privateGet(this, _t4).onmessage = (s) => {
      __privateMethod(this, _ht_instances, B_fn3).call(this, s.data);
    };
    let e = new MessageChannel();
    __privateGet(this, _t4).postMessage({ type: "addOscPort" }, [e.port1]), __privateSet(this, _e4, await I(__privateGet(this, _s3) + "osc_out_prescheduler_worker.js", { type: "module" })), __privateGet(this, _e4).onmessage = (s) => {
      __privateMethod(this, _ht_instances, E_fn3).call(this, s.data);
    }, await __privateMethod(this, _ht_instances, A_fn3).call(this, e.port2), __privateSet(this, _h3, true);
  }
  setBufferConstants(t) {
    __privateSet(this, _S3, t);
  }
  send(t, e) {
    return !__privateGet(this, _h3) || this._disposed ? false : (__privateGet(this, _e4).postMessage({ type: "send", oscData: t, sessionId: 0, runTag: "", audioTimeS: null, currentTimeS: null }), __privateWrapper(this, _p3)._++, __privateSet(this, _m4, __privateGet(this, _m4) + t.length), true);
  }
  sendWithOptions(t, e = {}) {
    if (!__privateGet(this, _h3) || this._disposed) return false;
    let { sessionId: s = 0, runTag: r = "", audioTimeS: i = null, currentTimeS: n = null } = e;
    return __privateGet(this, _e4).postMessage({ type: "send", oscData: t, sessionId: s, runTag: r, audioTimeS: i, currentTimeS: n }), __privateWrapper(this, _p3)._++, __privateSet(this, _m4, __privateGet(this, _m4) + t.length), true;
  }
  sendImmediate(t, e) {
    return !__privateGet(this, _h3) || this._disposed ? false : (__privateGet(this, _t4).postMessage({ type: "osc", oscData: t, bypassCategory: e }), __privateWrapper(this, _p3)._++, __privateSet(this, _m4, __privateGet(this, _m4) + t.length), true);
  }
  createOscChannel(t = {}) {
    if (!__privateGet(this, _h3)) throw new Error("Transport not initialized");
    let e = t.sourceId ?? __privateWrapper(this, _i3)._++, s = new MessageChannel();
    __privateGet(this, _t4).postMessage({ type: "addOscPort", sourceId: e }, [s.port1]);
    let r = new MessageChannel();
    return __privateGet(this, _e4).postMessage({ type: "addOscSource" }, [r.port1]), Fe.createPostMessage({ port: s.port2, preschedulerPort: r.port2, bypassLookaheadS: this._config.bypassLookaheadS, sourceId: e, blocking: t.blocking, nodeIdSource: this._config.nodeIdSource });
  }
  cancelSessionTag(t, e) {
    __privateGet(this, _h3) && __privateGet(this, _e4).postMessage({ type: "cancelSessionTag", sessionId: t, runTag: e });
  }
  cancelSession(t) {
    __privateGet(this, _h3) && __privateGet(this, _e4).postMessage({ type: "cancelSession", sessionId: t });
  }
  cancelTag(t) {
    __privateGet(this, _h3) && __privateGet(this, _e4).postMessage({ type: "cancelTag", runTag: t });
  }
  cancelAll() {
    __privateGet(this, _h3) && __privateGet(this, _e4).postMessage({ type: "cancelAll" });
  }
  cancelAllWithAck() {
    return __privateGet(this, _h3) ? new Promise((t) => {
      let e = (s) => {
        s.data.type === "cancelAllAck" && (__privateGet(this, _e4).removeEventListener("message", e), t());
      };
      __privateGet(this, _e4).addEventListener("message", e), __privateGet(this, _e4).postMessage({ type: "cancelAll", ack: true });
    }) : Promise.resolve();
  }
  onReply(t) {
    __privateSet(this, _c3, t);
  }
  onDebug(t) {
    __privateSet(this, _a4, t);
  }
  onError(t) {
    __privateSet(this, _l3, t);
  }
  onOscLog(t) {
    __privateSet(this, _n3, t);
  }
  handleDebugRaw(t) {
    if (t.messages && t.count > 0 && t.buffer) {
      let e = new TextDecoder("utf-8"), s = new Uint8Array(t.buffer);
      for (let r = 0; r < t.count; r++) {
        let i = t.messages[r];
        try {
          let n = s.subarray(i.offset, i.offset + i.length), a = e.decode(n);
          a.endsWith(`
`) && (a = a.slice(0, -1)), __privateWrapper(this, _o3)._++, __privateSet(this, _g2, __privateGet(this, _g2) + i.length), __privateGet(this, _a4) && __privateGet(this, _a4).call(this, { text: a, timestamp: performance.now(), sequence: i.sequence });
        } catch (n) {
          console.error("[PostMessageTransport] Failed to decode debug message:", n);
        }
      }
    }
  }
  getPreschedulerMetrics() {
    return __privateGet(this, _u3);
  }
  getMetrics() {
    return { oscInMessagesReceived: __privateGet(this, _k4), oscInBytesReceived: __privateGet(this, _y3), oscInMessagesDropped: __privateGet(this, _f3), debugMessagesReceived: __privateGet(this, _o3), debugBytesReceived: __privateGet(this, _g2) };
  }
  get ready() {
    return __privateGet(this, _h3) && !this._disposed;
  }
  dispose() {
    this._disposed || (__privateGet(this, _e4) && (__privateGet(this, _e4).postMessage({ type: "stop" }), __privateGet(this, _e4).terminate(), __privateSet(this, _e4, null)), __privateSet(this, _t4, null), __privateSet(this, _h3, false), super.dispose());
  }
}, _t4 = new WeakMap(), _e4 = new WeakMap(), _s3 = new WeakMap(), _c3 = new WeakMap(), _a4 = new WeakMap(), _l3 = new WeakMap(), _n3 = new WeakMap(), _i3 = new WeakMap(), _u3 = new WeakMap(), _h3 = new WeakMap(), _d3 = new WeakMap(), _w3 = new WeakMap(), _S3 = new WeakMap(), _p3 = new WeakMap(), _f3 = new WeakMap(), _m4 = new WeakMap(), _k4 = new WeakMap(), _y3 = new WeakMap(), _r3 = new WeakMap(), _o3 = new WeakMap(), _g2 = new WeakMap(), _b3 = new WeakMap(), _C2 = new WeakMap(), _ht_instances = new WeakSet(), A_fn3 = function(t) {
  return new Promise((e, s) => {
    let r = setTimeout(() => {
      s(new Error("Prescheduler worker initialization timeout"));
    }, 5e3), i = (n) => {
      n.data.type === "initialized" && (clearTimeout(r), __privateGet(this, _e4).removeEventListener("message", i), e());
    };
    __privateGet(this, _e4).addEventListener("message", i), __privateGet(this, _e4).postMessage({ type: "init", mode: "postMessage", maxPendingMessages: __privateGet(this, _d3), snapshotIntervalMs: __privateGet(this, _w3), bypassLookaheadS: this._config.bypassLookaheadS, workletPort: t }, [t]);
  });
}, B_fn3 = function(t) {
  switch (t.type) {
    case "oscReplies":
      if (t.messages && t.count > 0 && t.buffer) {
        let e = new Uint8Array(t.buffer);
        for (let s = 0; s < t.count; s++) {
          let r = t.messages[s], i = e.subarray(r.offset, r.offset + r.length);
          if (r.sequence !== void 0 && __privateGet(this, _r3) >= 0) {
            let n = __privateGet(this, _r3) + 1 & 4294967295;
            if (r.sequence !== n) {
              let a = r.sequence - n + 4294967296 & 4294967295;
              a < 1e3 && __privateSet(this, _f3, __privateGet(this, _f3) + a);
            }
          }
          r.sequence !== void 0 && __privateSet(this, _r3, r.sequence), __privateWrapper(this, _k4)._++, __privateSet(this, _y3, __privateGet(this, _y3) + r.length), __privateGet(this, _c3) && __privateGet(this, _c3).call(this, i, r.sequence, U());
        }
      }
      break;
    case "metrics":
      break;
    case "bufferLoaded":
      break;
    case "debugRawBatch":
      this.handleDebugRaw(t);
      break;
    case "oscLog":
      if (__privateGet(this, _n3) && t.count > 0 && t.buffer && t.entries) {
        let e = new Uint8Array(t.buffer), s = [];
        for (let r = 0; r < t.count; r++) {
          let i = t.entries[r], n = e.subarray(i.offset, i.offset + i.length);
          s.push({ oscData: n, sourceId: i.sourceId, sequence: i.sequence, timestamp: U(), truncated: i.length < i.originalLength, originalLength: i.originalLength });
        }
        __privateGet(this, _n3).call(this, s);
      }
      break;
    case "error":
      console.error("[PostMessageTransport] Worklet error:", t.error), __privateWrapper(this, _f3)._++, __privateGet(this, _l3) && __privateGet(this, _l3).call(this, t.error, "worklet");
      break;
  }
}, E_fn3 = function(t) {
  switch (t.type) {
    case "preschedulerMetrics":
      __privateSet(this, _u3, t.metrics);
      break;
    case "error":
      console.error("[PostMessageTransport] Prescheduler error:", t.error), __privateWrapper(this, _f3)._++, __privateGet(this, _l3) && __privateGet(this, _l3).call(this, t.error, "oscOut");
      break;
  }
}, _c4);
function ct(t, e) {
  if (t === "sab") return new ut(e);
  if (t === "postMessage") return new ht(e);
  throw new Error(`Unknown transport mode: ${t}. Use 'sab' or 'postMessage'`);
}
var ft = { 5120: "i8", 5121: "u8", 5122: "i16", 5123: "u16", 5124: "i32", 5125: "u32", 5126: "f32" }, dt = { u8: 1, u8c: 1, i8: 1, u16: 2, i16: 2, u32: 4, i32: 4, i64: 8, u64: 8, f32: 4, f64: 8 }, pt = { f32: Float32Array, f64: Float64Array }, mt = { i8: Int8Array, i16: Int16Array, i32: Int32Array }, yt = { u8: Uint8Array, u8c: Uint8ClampedArray, u16: Uint16Array, u32: Uint32Array }, gt = { i64: BigInt64Array, u64: BigUint64Array }, bt = { ...pt, ...mt, ...yt }, wt = (t) => {
  let e = ft[t];
  return e !== void 0 ? e : t;
};
function St(t, ...e) {
  let s = gt[t];
  return new (s || bt[wt(t)])(...e);
}
var R = (t, e) => (e--, t + e & ~e), kt = (t) => typeof t == "number", Pe = (t, e = (s) => s !== void 0 ? ": " + s : "") => class extends Error {
  constructor(s) {
    super(t(s) + e(s));
    __publicField(this, "origMessage");
    this.origMessage = s !== void 0 ? String(s) : "";
  }
}, Mt = Pe(() => "Assertion failed"), me = (typeof process < "u" && pe !== void 0 ? pe.UMBRELLA_ASSERTS : !Xe) ? (t, e) => {
  if (typeof t == "function" && !t() || !t) throw new Mt(typeof e == "function" ? e() : e);
} : () => {
}, At = Pe(() => "illegal argument(s)"), Bt = (t) => {
  throw new At(t);
}, ye = 0, ge = 1, be = 2, we = 3, Se = 4, B = 5, ke = 6, G = 1, W = 2, Me = 28, H = 0, V = 1, A = 8, Ct = class {
  constructor(t = {}) {
    __publicField(this, "buf");
    __publicField(this, "start");
    __publicField(this, "u8");
    __publicField(this, "u32");
    __publicField(this, "state");
    if (this.buf = t.buf ? t.buf : new ArrayBuffer(t.size || 4096), this.start = t.start != null ? R(Math.max(t.start, 0), 4) : 0, this.u8 = new Uint8Array(this.buf), this.u32 = new Uint32Array(this.buf), this.state = new Uint32Array(this.buf, this.start, Me / 4), !t.skipInitialization) {
      let e = t.align || 8;
      me(e >= 8, `invalid alignment: ${e}, must be a pow2 and >= 8`);
      let s = this.initialTop(e), r = t.end != null ? Math.min(t.end, this.buf.byteLength) : this.buf.byteLength;
      s >= r && Bt(`insufficient address range (0x${this.start.toString(16)} - 0x${r.toString(16)})`), this.align = e, this.doCompact = t.compact !== false, this.doSplit = t.split !== false, this.minSplit = t.minSplit || 16, this.end = r, this.top = s, this._free = 0, this._used = 0;
    }
  }
  stats() {
    let t = (s) => {
      let r = 0, i = 0;
      for (; s; ) r++, i += this.blockSize(s), s = this.blockNext(s);
      return { count: r, size: i };
    }, e = t(this._free);
    return { free: e, used: t(this._used), top: this.top, available: this.end - this.top + e.size, total: this.buf.byteLength };
  }
  callocAs(t, e, s = 0) {
    let r = this.mallocAs(t, e);
    return r == null ? void 0 : r.fill(s), r;
  }
  mallocAs(t, e) {
    let s = this.malloc(e * dt[t]);
    return s ? St(t, this.buf, s, e) : void 0;
  }
  calloc(t, e = 0) {
    let s = this.malloc(t);
    return s && this.u8.fill(e, s, s + t), s;
  }
  malloc(t) {
    if (t <= 0) return 0;
    let e = R(t + A, this.align), s = this.end, r = this.top, i = this._free, n = 0;
    for (; i; ) {
      let a = this.blockSize(i), o = i + a >= r;
      if (o || a >= e) return this.mallocTop(i, n, a, e, o);
      n = i, i = this.blockNext(i);
    }
    return i = r, r = i + e, r <= s ? (this.initBlock(i, e, this._used), this._used = i, this.top = r, E(i)) : 0;
  }
  mallocTop(t, e, s, r, i) {
    if (i && t + r > this.end) return 0;
    if (e ? this.unlinkBlock(e, t) : this._free = this.blockNext(t), this.setBlockNext(t, this._used), this._used = t, i) this.top = t + this.setBlockSize(t, r);
    else if (this.doSplit) {
      let n = s - r;
      n >= this.minSplit && this.splitBlock(t, r, n);
    }
    return E(t);
  }
  realloc(t, e) {
    if (e <= 0) return 0;
    let s = j(t), r = 0, i = this._used, n = 0;
    for (; i; ) {
      if (i === s) {
        [r, n] = this.reallocBlock(i, e);
        break;
      }
      i = this.blockNext(i);
    }
    return r && r !== s && this.u8.copyWithin(E(r), E(s), n), E(r);
  }
  reallocBlock(t, e) {
    let s = this.blockSize(t), r = t + s, i = r >= this.top, n = R(e + A, this.align);
    if (n <= s) {
      if (this.doSplit) {
        let a = s - n;
        a >= this.minSplit ? this.splitBlock(t, n, a) : i && (this.top = t + n);
      } else i && (this.top = t + n);
      return [t, r];
    }
    return i && t + n < this.end ? (this.top = t + this.setBlockSize(t, n), [t, r]) : (this.free(t), [j(this.malloc(e)), r]);
  }
  reallocArray(t, e) {
    if (t.buffer !== this.buf) return;
    let s = this.realloc(t.byteOffset, e * t.BYTES_PER_ELEMENT);
    return s ? new t.constructor(this.buf, s, e) : void 0;
  }
  free(t) {
    let e;
    if (kt(t)) e = t;
    else {
      if (t.buffer !== this.buf) return false;
      e = t.byteOffset;
    }
    e = j(e);
    let s = this._used, r = 0;
    for (; s; ) {
      if (s === e) return r ? this.unlinkBlock(r, s) : this._used = this.blockNext(s), this.insert(s), this.doCompact && this.compact(), true;
      r = s, s = this.blockNext(s);
    }
    return false;
  }
  freeAll() {
    this._free = 0, this._used = 0, this.top = this.initialTop();
  }
  release() {
    return delete this.u8, delete this.u32, delete this.state, delete this.buf, true;
  }
  get align() {
    return this.state[Se];
  }
  set align(t) {
    this.state[Se] = t;
  }
  get end() {
    return this.state[we];
  }
  set end(t) {
    this.state[we] = t;
  }
  get top() {
    return this.state[be];
  }
  set top(t) {
    this.state[be] = t;
  }
  get _free() {
    return this.state[ye];
  }
  set _free(t) {
    this.state[ye] = t;
  }
  get _used() {
    return this.state[ge];
  }
  set _used(t) {
    this.state[ge] = t;
  }
  get doCompact() {
    return !!(this.state[B] & G);
  }
  set doCompact(t) {
    t ? this.state[B] |= 1 << G - 1 : this.state[B] &= ~G;
  }
  get doSplit() {
    return !!(this.state[B] & W);
  }
  set doSplit(t) {
    t ? this.state[B] |= 1 << W - 1 : this.state[B] &= ~W;
  }
  get minSplit() {
    return this.state[ke];
  }
  set minSplit(t) {
    me(t > A, `illegal min split threshold: ${t}, require at least ${A + 1}`), this.state[ke] = t;
  }
  blockSize(t) {
    return this.u32[(t >> 2) + H];
  }
  setBlockSize(t, e) {
    return this.u32[(t >> 2) + H] = e, e;
  }
  blockNext(t) {
    return this.u32[(t >> 2) + V];
  }
  setBlockNext(t, e) {
    this.u32[(t >> 2) + V] = e;
  }
  initBlock(t, e, s) {
    let r = t >>> 2;
    return this.u32[r + H] = e, this.u32[r + V] = s, t;
  }
  unlinkBlock(t, e) {
    this.setBlockNext(t, this.blockNext(e));
  }
  splitBlock(t, e, s) {
    this.insert(this.initBlock(t + this.setBlockSize(t, e), s, 0)), this.doCompact && this.compact();
  }
  initialTop(t = this.align) {
    return R(this.start + Me + A, t) - A;
  }
  compact() {
    let t = this._free, e = 0, s = 0, r, i = false;
    for (; t; ) {
      for (r = t, s = this.blockNext(t); s && r + this.blockSize(r) === s; ) r = s, s = this.blockNext(s);
      if (r !== t) {
        let n = r - t + this.blockSize(r);
        this.setBlockSize(t, n);
        let a = this.blockNext(r), o = this.blockNext(t);
        for (; o && o !== a; ) {
          let l = this.blockNext(o);
          this.setBlockNext(o, 0), o = l;
        }
        this.setBlockNext(t, a), i = true;
      }
      t + this.blockSize(t) >= this.top && (this.top = t, e ? this.unlinkBlock(e, t) : this._free = this.blockNext(t)), e = t, t = this.blockNext(t);
    }
    return i;
  }
  insert(t) {
    let e = this._free, s = 0;
    for (; e && !(t <= e); ) s = e, e = this.blockNext(e);
    s ? this.setBlockNext(s, t) : this._free = t, this.setBlockNext(t, e);
  }
}, E = (t) => t > 0 ? t + A : 0, j = (t) => t > 0 ? t - A : 0, Z = 8, Ae = 65536, Et = (_d4 = class {
  constructor({ buf: t, start: e, size: s, wasmMemory: r = null, maxSize: i, growIncrement: n = 32 * 1024 * 1024, growFn: a = null, onGrowth: o = null }) {
    __privateAdd(this, _Et_instances);
    __privateAdd(this, _t5, []);
    __privateAdd(this, _e5);
    __privateAdd(this, _s4);
    __privateAdd(this, _c5, 0);
    __privateAdd(this, _a5, false);
    __privateAdd(this, _l4);
    __privateAdd(this, _n4);
    __privateAdd(this, _i4);
    __privateAdd(this, _u4);
    __privateSet(this, _e5, r), __privateSet(this, _s4, n), __privateSet(this, _l4, a), __privateSet(this, _n4, o), __privateSet(this, _i4, e + s), __privateSet(this, _u4, e + i), __privateMethod(this, _Et_instances, h_fn).call(this, t, e, s, 0);
  }
  malloc(t) {
    for (let e = __privateGet(this, _t5).length - 1; e >= 0; e--) {
      let s = __privateGet(this, _t5)[e], r = s.pool.malloc(t);
      if (r !== 0) return r + s.baseOffset;
    }
    return 0;
  }
  free(t) {
    for (let e of __privateGet(this, _t5)) if (t >= e.start && t < e.end) return e.pool.free(t - e.baseOffset);
    return false;
  }
  stats() {
    var _a11, _b5, _c12, _d8;
    let t = 0, e = 0, s = 0, r = 0, i = 0, n = 0, a = 0;
    for (let o of __privateGet(this, _t5)) {
      let l = o.pool.stats();
      t += ((_a11 = l.free) == null ? void 0 : _a11.count) || 0, e += ((_b5 = l.free) == null ? void 0 : _b5.size) || 0, s += ((_c12 = l.used) == null ? void 0 : _c12.count) || 0, r += ((_d8 = l.used) == null ? void 0 : _d8.size) || 0, i += l.available || 0, n += l.total || 0, l.top > a && (a = l.top);
    }
    return { free: { count: t, size: e }, used: { count: s, size: r }, top: a, available: i, total: n };
  }
  canGrow() {
    return __privateGet(this, _i4) + Z < __privateGet(this, _u4);
  }
  async grow(t = 0) {
    if (__privateGet(this, _a5) || !this.canGrow()) return false;
    __privateSet(this, _a5, true);
    try {
      let e = __privateGet(this, _u4) - __privateGet(this, _i4), s = Math.min(Math.max(__privateGet(this, _s4), t), e);
      if (s < Z) return false;
      let r = Math.ceil(s / Ae), i = __privateGet(this, _i4), n = Math.min(r * Ae, __privateGet(this, _u4) - i), a;
      if (__privateGet(this, _e5)) {
        if (__privateGet(this, _e5).grow(r) === -1) return false;
        a = __privateGet(this, _e5).buffer;
      } else if (__privateGet(this, _l4)) {
        if (!await __privateGet(this, _l4).call(this, r)) return false;
        a = new ArrayBuffer(n);
      } else return false;
      let o = __privateGet(this, _e5) ? 0 : i, l = __privateGet(this, _e5) ? i : 0;
      return __privateMethod(this, _Et_instances, h_fn).call(this, a, l, n, o), __privateSet(this, _i4, i + n), __privateWrapper(this, _c5)._++, __privateGet(this, _n4) && __privateGet(this, _n4).call(this, { poolIndex: __privateGet(this, _t5).length - 1, newBytes: n, totalCapacity: this.totalCapacity }), true;
    } finally {
      __privateSet(this, _a5, false);
    }
  }
  get poolCount() {
    return __privateGet(this, _t5).length;
  }
  get growthCount() {
    return __privateGet(this, _c5);
  }
  get totalCapacity() {
    let t = 0;
    for (let e of __privateGet(this, _t5)) t += e.end - e.start;
    return t;
  }
  get maxCapacity() {
    return __privateGet(this, _u4) - __privateGet(this, _t5)[0].start;
  }
}, _t5 = new WeakMap(), _e5 = new WeakMap(), _s4 = new WeakMap(), _c5 = new WeakMap(), _a5 = new WeakMap(), _l4 = new WeakMap(), _n4 = new WeakMap(), _i4 = new WeakMap(), _u4 = new WeakMap(), _Et_instances = new WeakSet(), h_fn = function(t, e, s, r) {
  let i = new Ct({ buf: t, start: e, size: s, align: Z }), n = e + r;
  __privateGet(this, _t5).push({ pool: i, start: n, end: n + s, baseOffset: r });
}, _d4);
function vt(t) {
  if (t.byteLength < 12) return false;
  let e = new Uint8Array(t, 0, 12), s = String.fromCharCode(e[0], e[1], e[2], e[3]), r = String.fromCharCode(e[8], e[9], e[10], e[11]);
  return s === "FORM" && (r === "AIFF" || r === "AIFC");
}
function It(t) {
  let e = t[0] >> 7 & 1, s = (t[0] & 127) << 8 | t[1], r = 0;
  for (let n = 2; n < 10; n++) r = r * 256 + t[n];
  if (s === 0) return 0;
  let i = r * Math.pow(2, s - 16383 - 63);
  return e ? -i : i;
}
function ee(t, e) {
  let s = 12;
  for (; s < t.byteLength - 8; ) {
    let r = String.fromCharCode(t.getUint8(s), t.getUint8(s + 1), t.getUint8(s + 2), t.getUint8(s + 3)), i = t.getUint32(s + 4, false);
    if (r === e) return { offset: s + 8, size: i };
    s += 8 + i + i % 2;
  }
  return null;
}
function Tt(t) {
  let e = new DataView(t), s = String.fromCharCode(e.getUint8(8), e.getUint8(9), e.getUint8(10), e.getUint8(11)), r = ee(e, "COMM");
  if (!r) throw new Error("AIFF file missing COMM chunk");
  let i = e.getUint16(r.offset, false), n = e.getUint32(r.offset + 2, false), a = e.getUint16(r.offset + 6, false), o = new Uint8Array(t, r.offset + 8, 10), l = It(o);
  if (s === "AIFC" && r.size >= 22) {
    let f = String.fromCharCode(e.getUint8(r.offset + 18), e.getUint8(r.offset + 19), e.getUint8(r.offset + 20), e.getUint8(r.offset + 21));
    if (f !== "NONE" && f !== "sowt") throw new Error(`AIFC compression type '${f}' is not supported. Only uncompressed AIFF/AIFC files are supported.`);
    if (f === "sowt") return Ut(t, i, n, a, l);
  }
  let h = ee(e, "SSND");
  if (!h) throw new Error("AIFF file missing SSND chunk");
  let u = e.getUint32(h.offset, false), c = h.offset + 8 + u, d = a / 8, m = n * i * d;
  if (c + m > t.byteLength) throw new Error("AIFF file truncated: not enough audio data");
  let y = 44, p = new ArrayBuffer(y + m), b = new DataView(p), w = new Uint8Array(p);
  De(b, { numChannels: i, sampleRate: Math.round(l), bitsPerSample: a, dataSize: m });
  let M = new Uint8Array(t, c, m);
  if (d === 1) for (let f = 0; f < m; f++) w[y + f] = M[f] + 128;
  else if (d === 2) for (let f = 0; f < m; f += 2) w[y + f] = M[f + 1], w[y + f + 1] = M[f];
  else if (d === 3) for (let f = 0; f < m; f += 3) w[y + f] = M[f + 2], w[y + f + 1] = M[f + 1], w[y + f + 2] = M[f];
  else if (d === 4) for (let f = 0; f < m; f += 4) w[y + f] = M[f + 3], w[y + f + 1] = M[f + 2], w[y + f + 2] = M[f + 1], w[y + f + 3] = M[f];
  else throw new Error(`Unsupported bit depth: ${a}`);
  return p;
}
function Ut(t, e, s, r, i) {
  let n = new DataView(t), a = ee(n, "SSND");
  if (!a) throw new Error("AIFF file missing SSND chunk");
  let o = n.getUint32(a.offset, false), l = a.offset + 8 + o, h = r / 8, u = s * e * h;
  if (l + u > t.byteLength) throw new Error("AIFF file truncated: not enough audio data");
  let c = 44, d = new ArrayBuffer(c + u), m = new DataView(d), y = new Uint8Array(d);
  De(m, { numChannels: e, sampleRate: Math.round(i), bitsPerSample: r, dataSize: u });
  let p = new Uint8Array(t, l, u);
  if (h === 1) for (let b = 0; b < u; b++) y[c + b] = p[b] + 128;
  else y.set(p, c);
  return d;
}
function De(t, { numChannels: e, sampleRate: s, bitsPerSample: r, dataSize: i }) {
  let n = s * e * (r / 8), a = e * (r / 8);
  t.setUint8(0, 82), t.setUint8(1, 73), t.setUint8(2, 70), t.setUint8(3, 70), t.setUint32(4, 36 + i, true), t.setUint8(8, 87), t.setUint8(9, 65), t.setUint8(10, 86), t.setUint8(11, 69), t.setUint8(12, 102), t.setUint8(13, 109), t.setUint8(14, 116), t.setUint8(15, 32), t.setUint32(16, 16, true), t.setUint16(20, 1, true), t.setUint16(22, e, true), t.setUint32(24, s, true), t.setUint32(28, n, true), t.setUint16(32, a, true), t.setUint16(34, r, true), t.setUint8(36, 100), t.setUint8(37, 97), t.setUint8(38, 116), t.setUint8(39, 97), t.setUint32(40, i, true);
}
var Rt = (_e7 = class {
  constructor(t) {
    __privateAdd(this, _Rt_instances);
    __privateAdd(this, _t6);
    __privateAdd(this, _e6);
    __privateAdd(this, _s5);
    __privateAdd(this, _c6);
    __privateAdd(this, _a6);
    __privateAdd(this, _l5);
    __privateAdd(this, _n5);
    __privateAdd(this, _i5);
    __privateAdd(this, _u5);
    __privateAdd(this, _h4);
    __privateAdd(this, _d5);
    let { mode: e = "sab", audioContext: s, sharedBuffer: r, bufferPoolConfig: i, sampleBaseURL: n, maxBuffers: a = 1024, assetLoader: o = null, workletPort: l = null, wasmMemory: h = null, maxBufferMemory: u = null, bufferGrowIncrement: c = 32 * 1024 * 1024, onBufferPoolGrowth: d = null, growFn: m = null } = t;
    if (__privateSet(this, _t6, e), !s) throw new Error("BufferManager requires audioContext");
    if (e === "sab") {
      if (!r || !(r instanceof SharedArrayBuffer)) throw new Error("BufferManager requires sharedBuffer (SharedArrayBuffer) in SAB mode");
      if (!i || typeof i != "object") throw new Error("BufferManager requires bufferPoolConfig (object with start, size, align)");
      if (!Number.isFinite(i.start) || i.start < 0) throw new Error("bufferPoolConfig.start must be a non-negative number");
      if (!Number.isFinite(i.size) || i.size <= 0) throw new Error("bufferPoolConfig.size must be a positive number");
    }
    if (e === "postMessage" && (!i || typeof i != "object")) throw new Error("BufferManager requires bufferPoolConfig in postMessage mode");
    if (!Number.isInteger(a) || a <= 0) throw new Error("maxBuffers must be a positive integer");
    __privateSet(this, _c6, s), __privateSet(this, _a6, r), __privateSet(this, _l5, h), __privateSet(this, _e6, n), __privateSet(this, _s5, o), __privateSet(this, _d5, l);
    let y = u || i.maxSize || i.size, p = e === "sab" ? r : new ArrayBuffer(i.start + i.size);
    __privateSet(this, _n5, new Et({ buf: p, start: i.start, size: i.size, wasmMemory: e === "sab" ? h : null, maxSize: y, growIncrement: c, growFn: e === "postMessage" ? m : null, onGrowth: d })), __privateSet(this, _i5, /* @__PURE__ */ new Map()), __privateSet(this, _u5, /* @__PURE__ */ new Map()), __privateSet(this, _h4, /* @__PURE__ */ new Map()), this.GUARD_BEFORE = 3, this.GUARD_AFTER = 1, this.MAX_BUFFERS = a, (i.size / (1024 * 1024)).toFixed(0), (i.start / (1024 * 1024)).toFixed(0);
  }
  setWorkletPort(t) {
    if (__privateGet(this, _t6) === "postMessage") {
      if (!t) throw new Error("BufferManager.setWorkletPort() requires a valid port");
      __privateSet(this, _d5, t);
    }
  }
  async prepareFromBlob(t) {
    let { bufnum: e, blob: s, startFrame: r = 0, numFrames: i = 0, channels: n = null } = t;
    if (__privateMethod(this, _Rt_instances, y_fn).call(this, e), !s || !(s instanceof ArrayBuffer || ArrayBuffer.isView(s))) throw new Error("/b_allocFile requires audio data as ArrayBuffer or typed array");
    let a = await __privateMethod(this, _Rt_instances, S_fn).call(this, { source: s, startFrame: r, numFrames: i, channels: n });
    return __privateMethod(this, _Rt_instances, f_fn).call(this, e, 3e4, a, null);
  }
  async prepareFromFile(t) {
    let { bufnum: e, path: s, startFrame: r = 0, numFrames: i = 0, channels: n = null } = t;
    __privateMethod(this, _Rt_instances, y_fn).call(this, e);
    let a = await __privateMethod(this, _Rt_instances, S_fn).call(this, { source: s, startFrame: r, numFrames: i, channels: n });
    return __privateMethod(this, _Rt_instances, f_fn).call(this, e, 6e4, a, a.sourceInfo);
  }
  async prepareEmpty(t) {
    let { bufnum: e, numFrames: s, numChannels: r = 1, sampleRate: i = null } = t;
    if (__privateMethod(this, _Rt_instances, y_fn).call(this, e), !Number.isFinite(s) || s <= 0) throw new Error(`/b_alloc requires a positive number of frames (got ${s})`);
    if (!Number.isFinite(r) || r <= 0) throw new Error(`/b_alloc requires a positive channel count (got ${r})`);
    let n = Math.floor(s), a = Math.floor(r), o = n * a + (this.GUARD_BEFORE + this.GUARD_AFTER) * a, l = { interleaved: new Float32Array(o), numFrames: n, numChannels: a, sampleRate: i || __privateGet(this, _c6).sampleRate };
    return __privateMethod(this, _Rt_instances, f_fn).call(this, e, 5e3, l, null);
  }
  handleBufferFreed(t) {
    let e = typeof t[0] == "bigint" ? Number(t[0]) : t[0], s = typeof t[1] == "bigint" ? Number(t[1]) : t[1], r = __privateGet(this, _i5).get(e);
    if (!r) {
      typeof s == "number" && s !== 0 && __privateGet(this, _n5).free(s);
      return;
    }
    if (typeof s == "number" && s === r.ptr) {
      __privateGet(this, _n5).free(r.ptr), __privateGet(this, _i5).delete(e);
      return;
    }
    if (typeof s == "number" && r.previousAllocation && r.previousAllocation.ptr === s) {
      __privateGet(this, _n5).free(s), r.previousAllocation = null;
      return;
    }
    __privateGet(this, _n5).free(r.ptr), __privateGet(this, _i5).delete(e);
  }
  handleBufferAllocated(t) {
    let e = t[0], s = t[1], r = __privateGet(this, _u5).get(e);
    r && (clearTimeout(r.timeout), r.resolve({ bufnum: s }), __privateGet(this, _u5).delete(e));
  }
  async allocate(t) {
    return __privateMethod(this, _Rt_instances, g_fn2).call(this, t * 4);
  }
  free(t) {
    return __privateGet(this, _n5).free(t);
  }
  getView(t, e) {
    var _a11;
    let s = ((_a11 = __privateGet(this, _l5)) == null ? void 0 : _a11.buffer) || __privateGet(this, _a6);
    return new Float32Array(s, t, e);
  }
  getStats() {
    return __privateGet(this, _n5) ? __privateGet(this, _n5).stats() : { total: 0, available: 0, used: 0, allocations: 0 };
  }
  getGrowthStats() {
    return __privateGet(this, _n5) ? { totalCapacity: __privateGet(this, _n5).totalCapacity, maxCapacity: __privateGet(this, _n5).maxCapacity, growthCount: __privateGet(this, _n5).growthCount, poolCount: __privateGet(this, _n5).poolCount } : { totalCapacity: 0, maxCapacity: 0, growthCount: 0, poolCount: 0 };
  }
  async sampleInfo({ source: t, startFrame: e = 0, numFrames: s = 0, channels: r = null }) {
    var _a11;
    let i = await __privateMethod(this, _Rt_instances, S_fn).call(this, { source: t, startFrame: e, numFrames: s, channels: r });
    return { hash: await __privateMethod(this, _Rt_instances, w_fn).call(this, i.interleaved), source: ((_a11 = i.sourceInfo) == null ? void 0 : _a11.path) || null, numFrames: i.numFrames, numChannels: i.numChannels, sampleRate: i.sampleRate, duration: i.sampleRate > 0 ? i.numFrames / i.sampleRate : 0 };
  }
  getAllocatedBuffers() {
    let t = [];
    for (let [e, s] of __privateGet(this, _i5).entries()) !s || !s.ptr || t.push({ bufnum: e, ptr: s.ptr, numFrames: s.numFrames, numChannels: s.numChannels, sampleRate: s.sampleRate, source: s.source || null, hash: s.hash || null });
    return t;
  }
  updateAudioContext(t) {
    if (!t) throw new Error("BufferManager.updateAudioContext requires audioContext");
    __privateSet(this, _c6, t);
  }
  destroy() {
    for (let [t, e] of __privateGet(this, _u5).entries()) clearTimeout(e.timeout), e.reject(new Error("BufferManager destroyed"));
    __privateGet(this, _u5).clear();
    for (let [t, e] of __privateGet(this, _i5).entries()) e.ptr && __privateGet(this, _n5).free(e.ptr);
    __privateGet(this, _i5).clear(), __privateGet(this, _h4).clear();
  }
}, _t6 = new WeakMap(), _e6 = new WeakMap(), _s5 = new WeakMap(), _c6 = new WeakMap(), _a6 = new WeakMap(), _l5 = new WeakMap(), _n5 = new WeakMap(), _i5 = new WeakMap(), _u5 = new WeakMap(), _h4 = new WeakMap(), _d5 = new WeakMap(), _Rt_instances = new WeakSet(), w_fn = async function(t) {
  let e = t.byteOffset === 0 && t.byteLength === t.buffer.byteLength ? t.buffer : t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength), s = await crypto.subtle.digest("SHA-256", e);
  return Array.from(new Uint8Array(s)).map((r) => r.toString(16).padStart(2, "0")).join("");
}, S_fn = async function({ source: t, startFrame: e = 0, numFrames: s = 0, channels: r = null }) {
  let i, n;
  if (typeof t == "string") {
    let p = __privateMethod(this, _Rt_instances, k_fn).call(this, t), b = t.split("/").pop();
    i = await __privateGet(this, _s5).fetch(p, { type: "sample", name: b }), n = { type: "file", path: t, startFrame: e, numFrames: s, channels: r };
  } else i = t instanceof ArrayBuffer ? t : t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength), n = null;
  let a = await __privateMethod(this, _Rt_instances, m_fn).call(this, i), o = Math.max(0, Math.floor(e || 0)), l = a.length - o, h = s && s > 0 ? Math.min(Math.floor(s), l) : l;
  if (h <= 0) throw new Error("No audio frames available");
  let u = __privateMethod(this, _Rt_instances, o_fn).call(this, r, a.numberOfChannels), c = u.length, d = h * c + (this.GUARD_BEFORE + this.GUARD_AFTER) * c, m = new Float32Array(d), y = this.GUARD_BEFORE * c;
  for (let p = 0; p < h; p++) for (let b = 0; b < c; b++) {
    let w = a.getChannelData(u[b]);
    m[y + p * c + b] = w[o + p];
  }
  return { interleaved: m, numFrames: h, numChannels: c, sampleRate: a.sampleRate, sourceInfo: n };
}, p_fn = async function(t) {
  let e = await __privateMethod(this, _Rt_instances, b_fn2).call(this, t.length);
  return await __privateMethod(this, _Rt_instances, C_fn2).call(this, e, t), e;
}, f_fn = async function(t, e, s, r) {
  let i, n = await __privateMethod(this, _Rt_instances, r_fn).call(this, t, e, async () => {
    let [o, l] = await Promise.all([__privateMethod(this, _Rt_instances, w_fn).call(this, s.interleaved), __privateMethod(this, _Rt_instances, p_fn).call(this, s.interleaved)]);
    return i = o, { ptr: l, sizeBytes: s.interleaved.length * 4, numFrames: s.numFrames, numChannels: s.numChannels, sampleRate: s.sampleRate, source: r || null };
  }), a = __privateGet(this, _i5).get(t);
  return a && (a.hash = i), { ...n, hash: i };
}, m_fn = async function(t) {
  return vt(t) && (t = Tt(t)), __privateGet(this, _c6).decodeAudioData(t);
}, k_fn = function(t) {
  if (typeof t != "string" || t.length === 0) throw new Error("Invalid audio path: must be a non-empty string");
  if (t.includes("..")) throw new Error(`Invalid audio path: path cannot contain '..' (got: ${t})`);
  if (t.includes("%2e") || t.includes("%2E")) throw new Error(`Invalid audio path: path cannot contain URL-encoded characters (got: ${t})`);
  if (t.includes("\\")) throw new Error(`Invalid audio path: use forward slashes only (got: ${t})`);
  if (t.includes("://") || t.startsWith("/") || t.startsWith("./")) return t;
  if (!__privateGet(this, _e6)) throw new Error(`sampleBaseURL not configured. Please set it in SuperSonic constructor options.
Example: new SuperSonic({ sampleBaseURL: "./dist/samples/" })
Or use CDN: new SuperSonic({ sampleBaseURL: "https://unpkg.com/supersonic-scsynth-samples@latest/samples/" })
Or install: npm install supersonic-scsynth-samples`);
  return __privateGet(this, _e6) + t;
}, y_fn = function(t) {
  if (!Number.isInteger(t) || t < 0 || t >= this.MAX_BUFFERS) throw new Error(`Invalid buffer number ${t} (must be 0-${this.MAX_BUFFERS - 1})`);
}, r_fn = async function(t, e, s) {
  let r = null, i = null, n = false, a = await __privateMethod(this, _Rt_instances, E_fn4).call(this, t), o = false;
  try {
    await __privateMethod(this, _Rt_instances, I_fn).call(this, t);
    let { ptr: l, sizeBytes: h, numFrames: u, numChannels: c, sampleRate: d, source: m, ...y } = await s();
    r = l;
    let { uuid: p, allocationComplete: b } = __privateMethod(this, _Rt_instances, B_fn4).call(this, t, e);
    i = p, __privateMethod(this, _Rt_instances, T_fn).call(this, t, r, h, p, b, { numFrames: u, numChannels: c, sampleRate: d, source: m }), n = true;
    let w = __privateMethod(this, _Rt_instances, R_fn).call(this, t, p, b);
    return a(), o = true, { ptr: r, uuid: p, allocationComplete: w, numFrames: u, numChannels: c, sampleRate: d, ...y };
  } catch (l) {
    throw n && i ? __privateMethod(this, _Rt_instances, v_fn).call(this, t, i, false) : r && __privateGet(this, _n5).free(r), l;
  } finally {
    o || a();
  }
}, o_fn = function(t, e) {
  return !t || t.length === 0 ? Array.from({ length: e }, (s, r) => r) : (t.forEach((s) => {
    if (!Number.isInteger(s) || s < 0 || s >= e) throw new Error(`Channel ${s} is out of range (file has ${e} channels)`);
  }), t);
}, g_fn2 = async function(t) {
  let e = __privateGet(this, _n5).malloc(t);
  return e === 0 && __privateGet(this, _n5).canGrow() && await __privateGet(this, _n5).grow(t) && (e = __privateGet(this, _n5).malloc(t)), e;
}, b_fn2 = async function(t) {
  let e = t * 4, s = await __privateMethod(this, _Rt_instances, g_fn2).call(this, e);
  if (s === 0) {
    let r = __privateGet(this, _n5).stats(), i = ((r.available || 0) / (1024 * 1024)).toFixed(2), n = ((r.total || 0) / (1024 * 1024)).toFixed(2), a = ((__privateGet(this, _n5).maxCapacity || 0) / (1024 * 1024)).toFixed(2), o = (e / (1024 * 1024)).toFixed(2);
    throw new Error(`Buffer pool allocation failed: requested ${o}MB, available ${i}MB of ${n}MB total (max ${a}MB)`);
  }
  return s;
}, C_fn2 = async function(t, e) {
  var _a11;
  if (__privateGet(this, _t6) === "sab") {
    let s = ((_a11 = __privateGet(this, _l5)) == null ? void 0 : _a11.buffer) || __privateGet(this, _a6);
    new Float32Array(s, t, e.length).set(e);
  } else {
    let s = crypto.randomUUID(), r = new Promise((n, a) => {
      let o = setTimeout(() => {
        a(new Error("Buffer copy to WASM memory timed out"));
      }, 1e4), l = (h) => {
        let u = h.data;
        u.type === "bufferCopied" && u.copyId === s && (__privateGet(this, _d5).removeEventListener("message", l), clearTimeout(o), u.success ? n() : a(new Error(u.error || "Buffer copy failed")));
      };
      __privateGet(this, _d5).addEventListener("message", l);
    }), i = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    __privateGet(this, _d5).postMessage({ type: "copyBufferData", copyId: s, ptr: t, data: i }, [i]), await r;
  }
}, A_fn4 = function(t, e, s) {
  return new Promise((r, i) => {
    let n = setTimeout(() => {
      __privateGet(this, _u5).delete(t), i(new Error(`Buffer ${e} allocation timeout (${s}ms)`));
    }, s);
    __privateGet(this, _u5).set(t, { resolve: r, reject: i, timeout: n });
  });
}, B_fn4 = function(t, e) {
  let s = crypto.randomUUID(), r = __privateMethod(this, _Rt_instances, A_fn4).call(this, s, t, e);
  return { uuid: s, allocationComplete: r };
}, E_fn4 = async function(t) {
  let e = __privateGet(this, _h4).get(t) || Promise.resolve(), s, r = new Promise((i) => {
    s = i;
  });
  return __privateGet(this, _h4).set(t, e.then(() => r)), await e, () => {
    s && (s(), s = null), __privateGet(this, _h4).get(t) === r && __privateGet(this, _h4).delete(t);
  };
}, T_fn = function(t, e, s, r, i, n = {}) {
  let a = __privateGet(this, _i5).get(t), o = { ptr: e, size: s, numFrames: n.numFrames || 0, numChannels: n.numChannels || 1, sampleRate: n.sampleRate || 48e3, pendingToken: r, pendingPromise: i, previousAllocation: a ? { ptr: a.ptr, size: a.size } : null, source: n.source || null };
  return __privateGet(this, _i5).set(t, o), o;
}, I_fn = async function(t) {
  let e = __privateGet(this, _i5).get(t);
  if (e && e.pendingToken && e.pendingPromise) try {
    await e.pendingPromise;
  } catch {
  }
}, R_fn = function(t, e, s) {
  return !s || typeof s.then != "function" ? (__privateMethod(this, _Rt_instances, v_fn).call(this, t, e, true), Promise.resolve()) : s.then((r) => (__privateMethod(this, _Rt_instances, v_fn).call(this, t, e, true), r)).catch((r) => {
    throw __privateMethod(this, _Rt_instances, v_fn).call(this, t, e, false), r;
  });
}, v_fn = function(t, e, s) {
  let r = __privateGet(this, _i5).get(t);
  if (!r || r.pendingToken !== e) return;
  let i = r.previousAllocation;
  if (s) {
    r.pendingToken = null, r.pendingPromise = null, r.previousAllocation = null, (i == null ? void 0 : i.ptr) && __privateGet(this, _n5).free(i.ptr);
    return;
  }
  r.ptr && __privateGet(this, _n5).free(r.ptr), r.pendingPromise = null, (i == null ? void 0 : i.ptr) ? __privateGet(this, _i5).set(t, { ptr: i.ptr, size: i.size, pendingToken: null, previousAllocation: null }) : __privateGet(this, _i5).delete(t);
}, _e7), _t = (_f4 = class {
  constructor(t = {}) {
    __privateAdd(this, __t_instances);
    __privateAdd(this, _t7);
    __privateAdd(this, _e8);
    __privateAdd(this, _s6);
    __privateAdd(this, _c7);
    let { onLoadingEvent: e = null, maxRetries: s = 3, baseDelay: r = 1e3, skipHeadRequests: i = false } = t;
    __privateSet(this, _t7, e), __privateSet(this, _e8, s), __privateSet(this, _s6, r), __privateSet(this, _c7, i);
  }
  async fetch(t, { type: e, name: s }) {
    var _a11, _b5, _c12;
    let r = __privateMethod(this, __t_instances, l_fn).call(this, t);
    if (__privateGet(this, _c7)) (_a11 = __privateGet(this, _t7)) == null ? void 0 : _a11.call(this, "loading:start", { type: e, name: s });
    else {
      let n = await __privateMethod(this, __t_instances, a_fn).call(this, t);
      (_b5 = __privateGet(this, _t7)) == null ? void 0 : _b5.call(this, "loading:start", { type: e, name: s, ...n != null && { size: n } });
    }
    let i = await (await r).arrayBuffer();
    return (_c12 = __privateGet(this, _t7)) == null ? void 0 : _c12.call(this, "loading:complete", { type: e, name: s, size: i.byteLength }), i;
  }
}, _t7 = new WeakMap(), _e8 = new WeakMap(), _s6 = new WeakMap(), _c7 = new WeakMap(), __t_instances = new WeakSet(), a_fn = async function(t) {
  try {
    let e = await fetch(t, { method: "HEAD" });
    if (e.ok) {
      let s = e.headers.get("Content-Length");
      return s ? parseInt(s, 10) : null;
    }
    return null;
  } catch {
    return null;
  }
}, l_fn = async function(t) {
  let e;
  for (let s = 0; s <= __privateGet(this, _e8); s++) try {
    let r = await fetch(t);
    if (r.status >= 400 && r.status < 500) throw new Error(`Failed to fetch ${t}: ${r.status} ${r.statusText}`);
    if (!r.ok) throw new Error(`Server error fetching ${t}: ${r.status} ${r.statusText}`);
    return r;
  } catch (r) {
    if (e = r, r.message.includes("Failed to fetch") && r.message.includes("4")) throw r;
    if (s < __privateGet(this, _e8)) {
      let i = __privateGet(this, _s6) * Math.pow(2, s);
      await __privateMethod(this, __t_instances, n_fn).call(this, i);
    }
  }
  throw e;
}, n_fn = function(t) {
  return new Promise((e) => setTimeout(e, t));
}, _f4), Ot = (_g3 = class {
  constructor({ bufferManager: t, getDefaultSampleRate: e }) {
    __privateAdd(this, _Ot_instances);
    __privateAdd(this, _t8);
    __privateAdd(this, _e9);
    if (!t) throw new Error("OSCRewriter requires bufferManager");
    if (typeof e != "function") throw new Error("OSCRewriter requires getDefaultSampleRate callback");
    __privateSet(this, _t8, t), __privateSet(this, _e9, e);
  }
  async rewritePacket(t) {
    if (Array.isArray(t)) {
      let { message: e, changed: s } = await __privateMethod(this, _Ot_instances, s_fn).call(this, t);
      return { packet: e, changed: s };
    }
    if (__privateMethod(this, _Ot_instances, u_fn).call(this, t)) {
      let e = await Promise.all(t.packets.map((r) => this.rewritePacket(r)));
      if (!e.some((r) => r.changed)) return { packet: t, changed: false };
      let s = e.map((r) => r.packet);
      return { packet: { timeTag: t.timeTag, packets: s }, changed: true };
    }
    return { packet: t, changed: false };
  }
}, _t8 = new WeakMap(), _e9 = new WeakMap(), _Ot_instances = new WeakSet(), s_fn = async function(t) {
  let e = t[0], s = t.slice(1);
  switch (e) {
    case "/b_alloc":
      return { message: await __privateMethod(this, _Ot_instances, c_fn).call(this, s), changed: true };
    case "/b_allocRead":
      return { message: await __privateMethod(this, _Ot_instances, a_fn2).call(this, s), changed: true };
    case "/b_allocReadChannel":
      return { message: await __privateMethod(this, _Ot_instances, l_fn2).call(this, s), changed: true };
    case "/b_allocFile":
      return { message: await __privateMethod(this, _Ot_instances, n_fn2).call(this, s), changed: true };
    default:
      return { message: t, changed: false };
  }
}, c_fn = async function(t) {
  var _a11;
  let e = __privateMethod(this, _Ot_instances, w_fn2).call(this, t, 0, "/b_alloc requires a buffer number"), s = __privateMethod(this, _Ot_instances, w_fn2).call(this, t, 1, "/b_alloc requires a frame count"), r = 2, i = 1, n = __privateGet(this, _e9).call(this);
  Number.isFinite(__privateMethod(this, _Ot_instances, h_fn2).call(this, t, r)) && (i = Math.max(1, __privateMethod(this, _Ot_instances, S_fn2).call(this, t, r, 1)), r++), ((_a11 = Array.isArray(t) ? t[r] : void 0) == null ? void 0 : _a11.type) === "b" && r++;
  let a = __privateMethod(this, _Ot_instances, h_fn2).call(this, t, r);
  Number.isFinite(a) && (n = a);
  let o = await __privateGet(this, _t8).prepareEmpty({ bufnum: e, numFrames: s, numChannels: i, sampleRate: n });
  return __privateMethod(this, _Ot_instances, m_fn2).call(this, o.allocationComplete, `/b_alloc ${e}`), __privateMethod(this, _Ot_instances, i_fn).call(this, e, o);
}, a_fn2 = async function(t) {
  let e = __privateMethod(this, _Ot_instances, w_fn2).call(this, t, 0, "/b_allocRead requires a buffer number"), s = __privateMethod(this, _Ot_instances, p_fn2).call(this, t, 1, "/b_allocRead requires a file path"), r = __privateMethod(this, _Ot_instances, S_fn2).call(this, t, 2, 0), i = __privateMethod(this, _Ot_instances, S_fn2).call(this, t, 3, 0), n = await __privateGet(this, _t8).prepareFromFile({ bufnum: e, path: s, startFrame: r, numFrames: i });
  return __privateMethod(this, _Ot_instances, m_fn2).call(this, n.allocationComplete, `/b_allocRead ${e}`), __privateMethod(this, _Ot_instances, i_fn).call(this, e, n);
}, l_fn2 = async function(t) {
  let e = __privateMethod(this, _Ot_instances, w_fn2).call(this, t, 0, "/b_allocReadChannel requires a buffer number"), s = __privateMethod(this, _Ot_instances, p_fn2).call(this, t, 1, "/b_allocReadChannel requires a file path"), r = __privateMethod(this, _Ot_instances, S_fn2).call(this, t, 2, 0), i = __privateMethod(this, _Ot_instances, S_fn2).call(this, t, 3, 0), n = [];
  for (let o = 4; o < ((t == null ? void 0 : t.length) || 0); o++) {
    let l = __privateMethod(this, _Ot_instances, h_fn2).call(this, t, o);
    if (!Number.isFinite(l)) break;
    n.push(Math.floor(l));
  }
  let a = await __privateGet(this, _t8).prepareFromFile({ bufnum: e, path: s, startFrame: r, numFrames: i, channels: n.length > 0 ? n : null });
  return __privateMethod(this, _Ot_instances, m_fn2).call(this, a.allocationComplete, `/b_allocReadChannel ${e}`), __privateMethod(this, _Ot_instances, i_fn).call(this, e, a);
}, n_fn2 = async function(t) {
  let e = __privateMethod(this, _Ot_instances, w_fn2).call(this, t, 0, "/b_allocFile requires a buffer number"), s = __privateMethod(this, _Ot_instances, f_fn2).call(this, t, 1, "/b_allocFile requires audio file data as blob"), r = await __privateGet(this, _t8).prepareFromBlob({ bufnum: e, blob: s });
  return __privateMethod(this, _Ot_instances, m_fn2).call(this, r.allocationComplete, `/b_allocFile ${e}`), __privateMethod(this, _Ot_instances, i_fn).call(this, e, r);
}, i_fn = function(t, e) {
  return ["/b_allocPtr", Math.floor(t), Math.floor(e.ptr), Math.floor(e.numFrames), Math.floor(e.numChannels), e.sampleRate, String(e.uuid)];
}, u_fn = function(t) {
  return t && t.timeTag !== void 0 && Array.isArray(t.packets);
}, h_fn2 = function(t, e) {
  let s = Array.isArray(t) ? t[e] : void 0;
  if (s != null) return typeof s == "object" && Object.prototype.hasOwnProperty.call(s, "value") ? s.value : s;
}, d_fn = function(t, e, s, r) {
  let i = __privateMethod(this, _Ot_instances, h_fn2).call(this, t, e);
  if (!s(i)) throw new Error(r);
  return i;
}, w_fn2 = function(t, e, s) {
  return Math.floor(__privateMethod(this, _Ot_instances, d_fn).call(this, t, e, Number.isFinite, s));
}, S_fn2 = function(t, e, s = 0) {
  let r = __privateMethod(this, _Ot_instances, h_fn2).call(this, t, e);
  return Number.isFinite(r) ? Math.floor(r) : s;
}, p_fn2 = function(t, e, s) {
  return __privateMethod(this, _Ot_instances, d_fn).call(this, t, e, (r) => typeof r == "string", s);
}, f_fn2 = function(t, e, s) {
  return __privateMethod(this, _Ot_instances, d_fn).call(this, t, e, (r) => r instanceof Uint8Array || r instanceof ArrayBuffer, s);
}, m_fn2 = function(t, e) {
  !t || typeof t.catch != "function" || t.catch((s) => {
    console.error(`[OSCRewriter] ${e} allocation failed:`, s);
  });
}, _g3);
function v(t) {
  if (!t) return null;
  if (typeof t == "string") return (t.split("/").filter(Boolean).pop() || t).replace(/\.scsyndef$/i, "");
  let e = t instanceof ArrayBuffer ? new Uint8Array(t) : t;
  if (!(e instanceof Uint8Array) || e.length < 11 || e[0] !== 83 || e[1] !== 67 || e[2] !== 103 || e[3] !== 102) return null;
  let s = (e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]) >= 3 ? 14 : 10;
  if (s >= e.length) return null;
  let r = e[s];
  if (r === 0 || s + 1 + r > e.length) return null;
  try {
    return new TextDecoder().decode(e.slice(s + 1, s + 1 + r));
  } catch {
    return null;
  }
}
var xt = (_h5 = class {
  constructor() {
    __privateAdd(this, _t9, /* @__PURE__ */ new Map());
  }
  on(t, e) {
    if (typeof e != "function") throw new Error("Callback must be a function");
    return __privateGet(this, _t9).has(t) || __privateGet(this, _t9).set(t, /* @__PURE__ */ new Set()), __privateGet(this, _t9).get(t).add(e), () => this.off(t, e);
  }
  off(t, e) {
    let s = __privateGet(this, _t9).get(t);
    return s && s.delete(e), this;
  }
  once(t, e) {
    let s = (...r) => {
      this.off(t, s), e(...r);
    };
    return this.on(t, s);
  }
  removeAllListeners(t) {
    return t === void 0 ? __privateGet(this, _t9).clear() : __privateGet(this, _t9).delete(t), this;
  }
  hasListeners(t) {
    let e = __privateGet(this, _t9).get(t);
    return e ? e.size > 0 : false;
  }
  emit(t, ...e) {
    let s = __privateGet(this, _t9).get(t);
    if (s) for (let r of s) try {
      r(...e);
    } catch (i) {
      console.error(`[EventEmitter] Error in ${t} listener:`, i);
    }
  }
  async emitAsync(t, ...e) {
    let s = __privateGet(this, _t9).get(t);
    if (s) for (let r of s) try {
      await r(...e);
    } catch (i) {
      console.error(`[EventEmitter] Error in ${t} listener:`, i);
    }
  }
  clearAllListeners() {
    __privateGet(this, _t9).clear();
  }
}, _t9 = new WeakMap(), _h5), Ft = (_i7 = class {
  constructor(t = {}) {
    __privateAdd(this, _t10);
    __privateAdd(this, _e10);
    __privateAdd(this, _s7);
    __privateAdd(this, _c8);
    __privateAdd(this, _a7);
    __privateAdd(this, _l6);
    __privateAdd(this, _n6);
    __privateAdd(this, _i6, null);
    __privateAdd(this, _u6, new Uint32Array(70));
    __privateAdd(this, _h6, new DataView(__privateGet(this, _u6).buffer));
    __privateSet(this, _c8, t.mode || "sab"), __privateSet(this, _t10, t.sharedBuffer || null), __privateSet(this, _e10, t.ringBufferBase || 0), __privateSet(this, _s7, t.bufferConstants || null);
  }
  initSharedViews(t, e, s) {
    if (__privateSet(this, _t10, t), __privateSet(this, _e10, e), __privateSet(this, _s7, s), __privateGet(this, _c8) === "sab" && t && s) {
      __privateSet(this, _a7, new Int32Array(t)), __privateSet(this, _n6, nt(e, s.CONTROL_START));
      let r = e + s.METRICS_START;
      __privateSet(this, _l6, new Uint32Array(t, r, s.METRICS_SIZE / 4));
    }
  }
  updateSnapshot(t) {
    __privateSet(this, _i6, t);
  }
  getSnapshotBuffer() {
    return __privateGet(this, _i6);
  }
  getMetricsView() {
    return __privateGet(this, _l6);
  }
  addMetric(t, e = 1) {
    if (!__privateGet(this, _l6)) return;
    let s = { oscOutMessagesSent: 24, oscOutBytesSent: 25, preschedulerBypassed: 22, bypassNonBundle: 38, bypassImmediate: 39, bypassNearFuture: 40, bypassLate: 41 }[t];
    s !== void 0 && Atomics.add(__privateGet(this, _l6), s, e);
  }
  overlayPreschedulerMetrics(t) {
    if (!__privateGet(this, _i6) || !t) return;
    let e = new Uint32Array(__privateGet(this, _i6), 0, 46), s = 9;
    e.set(t.subarray(s, s + 13), s), e[23] = t[23];
  }
  gatherMetrics(t = {}) {
    this.updateMergedArray(t);
    let e = __privateGet(this, _u6), s = { scsynthProcessCount: e[0], scsynthMessagesProcessed: e[1], scsynthMessagesDropped: e[2], scsynthSchedulerDepth: e[3], scsynthSchedulerPeakDepth: e[4], scsynthSchedulerDropped: e[5], scsynthSequenceGaps: e[6], scsynthSchedulerLates: e[8], scsynthSchedulerMaxLateMs: e[42], scsynthSchedulerLastLateMs: e[43], scsynthSchedulerLastLateTick: e[44], preschedulerPending: e[9], preschedulerPendingPeak: e[10], preschedulerDispatched: e[12], preschedulerRetriesSucceeded: e[16], preschedulerRetriesFailed: e[17], preschedulerBundlesScheduled: e[11], preschedulerEventsCancelled: e[13], preschedulerTotalDispatches: e[21], preschedulerMessagesRetried: e[20], preschedulerRetryQueueSize: e[18], preschedulerRetryQueuePeak: e[19], preschedulerBypassed: e[22], preschedulerMinHeadroomMs: e[14], preschedulerLates: e[15], preschedulerMaxLateMs: e[23], oscInMessagesReceived: e[26], oscInMessagesDropped: e[28], oscInBytesReceived: e[27], debugMessagesReceived: e[30], debugBytesReceived: e[31], oscOutMessagesSent: e[24], oscOutBytesSent: e[25], scsynthWasmErrors: e[7], oscInCorrupted: e[29], ringBufferDirectWriteFails: e[45], bypassNonBundle: e[38], bypassImmediate: e[39], bypassNearFuture: e[40], bypassLate: e[41], mode: __privateGet(this, _c8) }, r = __privateGet(this, _s7);
    return e[32] !== void 0 && r && (s.inBufferUsed = { bytes: e[32], percentage: e[32] / r.IN_BUFFER_SIZE * 100, peakBytes: e[35], peakPercentage: e[35] / r.IN_BUFFER_SIZE * 100, capacity: r.IN_BUFFER_SIZE }, s.outBufferUsed = { bytes: e[33], percentage: e[33] / r.OUT_BUFFER_SIZE * 100, peakBytes: e[36], peakPercentage: e[36] / r.OUT_BUFFER_SIZE * 100, capacity: r.OUT_BUFFER_SIZE }, s.debugBufferUsed = { bytes: e[34], percentage: e[34] / r.DEBUG_BUFFER_SIZE * 100, peakBytes: e[37], peakPercentage: e[37] / r.DEBUG_BUFFER_SIZE * 100, capacity: r.DEBUG_BUFFER_SIZE }), (r == null ? void 0 : r.scheduler_slot_count) !== void 0 && (s.scsynthSchedulerCapacity = r.scheduler_slot_count), t.driftOffsetMs !== void 0 && (s.driftOffsetMs = t.driftOffsetMs), t.ntpStartTime !== void 0 && (s.ntpStartTime = t.ntpStartTime), t.clockOffsetMs !== void 0 && (s.clockOffsetMs = t.clockOffsetMs), t.audioContextState && (s.audioContextState = t.audioContextState), t.bufferPoolStats && (s.bufferPoolUsedBytes = t.bufferPoolStats.used.size, s.bufferPoolAvailableBytes = t.bufferPoolStats.available, s.bufferPoolAllocations = t.bufferPoolStats.used.count), t.bufferPoolGrowthStats && (s.bufferPoolTotalCapacity = t.bufferPoolGrowthStats.totalCapacity, s.bufferPoolMaxCapacity = t.bufferPoolGrowthStats.maxCapacity, s.bufferPoolGrowthCount = t.bufferPoolGrowthStats.growthCount, s.bufferPoolPoolCount = t.bufferPoolGrowthStats.poolCount), t.loadedSynthDefsCount !== void 0 && (s.loadedSynthDefs = t.loadedSynthDefsCount), t.preschedulerCapacity !== void 0 && (s.preschedulerCapacity = t.preschedulerCapacity), s.audioHealthPct = t.audioHealthPct ?? 100, s.hasPlaybackStats = !!t.playbackStats, t.playbackStats ? (s.glitchCount = t.playbackStats.fallbackFramesEvents ?? 0, s.glitchDurationMs = Math.round((t.playbackStats.fallbackFramesDuration ?? 0) * 1e3), s.averageLatencyUs = Math.round((t.playbackStats.averageLatency ?? 0) * 1e6), s.maxLatencyUs = Math.round((t.playbackStats.maximumLatency ?? 0) * 1e6), s.totalFramesDurationMs = Math.round((t.playbackStats.totalFramesDuration ?? 0) * 1e3)) : (s.glitchCount = 0, s.glitchDurationMs = 0, s.averageLatencyUs = 0, s.maxLatencyUs = 0, s.totalFramesDurationMs = 0), __privateGet(this, _c8) === "postMessage" && t.transportMetrics && Object.assign(s, t.transportMetrics), s;
  }
  updateMergedArray(t = {}) {
    var _a11, _b5;
    let e = __privateGet(this, _u6);
    if (__privateGet(this, _c8) === "postMessage") {
      if (t.preschedulerMetrics && this.overlayPreschedulerMetrics(t.preschedulerMetrics), __privateGet(this, _i6)) {
        let a = new Uint32Array(__privateGet(this, _i6), 0, 46);
        e.set(a);
      }
      t.transportMetrics && (t.transportMetrics.oscOutMessagesSent !== void 0 && (e[24] = t.transportMetrics.oscOutMessagesSent), t.transportMetrics.oscOutBytesSent !== void 0 && (e[25] = t.transportMetrics.oscOutBytesSent), t.transportMetrics.preschedulerBypassed !== void 0 && (e[22] = t.transportMetrics.preschedulerBypassed), t.transportMetrics.bypassNonBundle !== void 0 && (e[38] = t.transportMetrics.bypassNonBundle), t.transportMetrics.bypassImmediate !== void 0 && (e[39] = t.transportMetrics.bypassImmediate), t.transportMetrics.bypassNearFuture !== void 0 && (e[40] = t.transportMetrics.bypassNearFuture), t.transportMetrics.bypassLate !== void 0 && (e[41] = t.transportMetrics.bypassLate));
    } else __privateGet(this, _l6) && e.set(__privateGet(this, _l6));
    let s = __privateGet(this, _h6);
    s.setInt32(184, t.driftOffsetMs ?? 0, true), s.setInt32(188, t.clockOffsetMs ?? 0, true);
    let r = t.audioContextState || "unknown", i = { unknown: 0, running: 1, suspended: 2, closed: 3, interrupted: 4 };
    e[48] = i[r] ?? 0, t.bufferPoolStats && (e[49] = ((_a11 = t.bufferPoolStats.used) == null ? void 0 : _a11.size) ?? 0, e[50] = t.bufferPoolStats.available ?? 0, e[51] = ((_b5 = t.bufferPoolStats.used) == null ? void 0 : _b5.count) ?? 0), e[52] = t.loadedSynthDefsCount ?? 0;
    let n = __privateGet(this, _s7);
    e[53] = (n == null ? void 0 : n.scheduler_slot_count) ?? 0, e[54] = t.preschedulerCapacity ?? 0, e[55] = (n == null ? void 0 : n.IN_BUFFER_SIZE) ?? 0, e[56] = (n == null ? void 0 : n.OUT_BUFFER_SIZE) ?? 0, e[57] = (n == null ? void 0 : n.DEBUG_BUFFER_SIZE) ?? 0, e[58] = __privateGet(this, _c8) === "sab" ? 0 : 1, e[65] = t.playbackStats ? 1 : 0, t.playbackStats && (e[59] = t.playbackStats.fallbackFramesEvents ?? 0, e[60] = Math.round((t.playbackStats.fallbackFramesDuration ?? 0) * 1e3), e[61] = Math.round((t.playbackStats.averageLatency ?? 0) * 1e6), e[62] = Math.round((t.playbackStats.maximumLatency ?? 0) * 1e6), e[64] = Math.round((t.playbackStats.totalFramesDuration ?? 0) * 1e3)), e[63] = t.audioHealthPct ?? 100, t.bufferPoolGrowthStats && (e[66] = t.bufferPoolGrowthStats.totalCapacity ?? 0, e[67] = t.bufferPoolGrowthStats.maxCapacity ?? 0, e[68] = t.bufferPoolGrowthStats.growthCount ?? 0, e[69] = t.bufferPoolGrowthStats.poolCount ?? 0);
  }
  getMergedArray() {
    return __privateGet(this, _u6);
  }
  get bufferConstants() {
    return __privateGet(this, _s7);
  }
  get ringBufferBase() {
    return __privateGet(this, _e10);
  }
  get sharedBuffer() {
    return __privateGet(this, _t10);
  }
}, _t10 = new WeakMap(), _e10 = new WeakMap(), _s7 = new WeakMap(), _c8 = new WeakMap(), _a7 = new WeakMap(), _l6 = new WeakMap(), _n6 = new WeakMap(), _i6 = new WeakMap(), _u6 = new WeakMap(), _h6 = new WeakMap(), _i7);
function J(t) {
  return t / 1e3 + 2208988800;
}
function Be(t, e) {
  return t - e;
}
function Pt(t, e) {
  let s = t - e;
  return Math.round(s * 1e3);
}
var Dt = (_j = class {
  constructor(t = {}) {
    __privateAdd(this, _t11);
    __privateAdd(this, _e11);
    __privateAdd(this, _s8);
    __privateAdd(this, _c9);
    __privateAdd(this, _a8);
    __privateAdd(this, _l7);
    __privateAdd(this, _n7);
    __privateAdd(this, _i8);
    __privateAdd(this, _u7);
    __privateAdd(this, _h7, 0);
    __privateAdd(this, _d6, 0);
    __privateAdd(this, _w4, null);
    __privateSet(this, _t11, t.mode || "sab"), __privateSet(this, _e11, t.audioContext), __privateSet(this, _s8, t.workletPort || null);
  }
  initSharedViews(t, e, s) {
    __privateSet(this, _a8, e), __privateSet(this, _c9, s), __privateGet(this, _t11) === "sab" && t && s && (__privateSet(this, _l7, new Float64Array(t, e + s.NTP_START_TIME_START, 1)), __privateSet(this, _n7, new Int32Array(t, e + s.DRIFT_OFFSET_START, 1)), __privateSet(this, _i8, new Int32Array(t, e + s.GLOBAL_OFFSET_START, 1)));
  }
  updateAudioContext(t) {
    __privateSet(this, _e11, t);
  }
  async initialize() {
    if (!__privateGet(this, _e11)) return;
    let t;
    for (; t = __privateGet(this, _e11).getOutputTimestamp(), !(t.contextTime > 0); ) await new Promise((n) => setTimeout(n, 50));
    t = __privateGet(this, _e11).getOutputTimestamp();
    let e = performance.timeOrigin + t.performanceTime, s = J(e), r = t.contextTime, i = Be(s, r);
    __privateGet(this, _t11) === "sab" && __privateGet(this, _l7) ? __privateGet(this, _l7)[0] = i : __privateGet(this, _s8) && __privateGet(this, _s8).postMessage({ type: "setNTPStartTime", ntpStartTime: i }), __privateSet(this, _u7, i), await new Promise((n) => setTimeout(n, 500)), this.updateDriftOffset();
  }
  updateDriftOffset() {
    if (!__privateGet(this, _e11) || __privateGet(this, _u7) === void 0) return;
    let t = __privateGet(this, _e11).getOutputTimestamp(), e = performance.timeOrigin + t.performanceTime, s = J(e) - __privateGet(this, _u7), r = Pt(s, t.contextTime);
    __privateSet(this, _h7, r), __privateGet(this, _t11) === "sab" && __privateGet(this, _n7) ? Atomics.store(__privateGet(this, _n7), 0, r) : __privateGet(this, _s8) && __privateGet(this, _s8).postMessage({ type: "setDriftOffset", driftOffsetMs: r });
  }
  resync() {
    if (!__privateGet(this, _e11)) return;
    let t = __privateGet(this, _e11).getOutputTimestamp();
    if (!t || t.contextTime <= 0) return;
    let e = performance.timeOrigin + t.performanceTime, s = J(e), r = Be(s, t.contextTime);
    __privateGet(this, _t11) === "sab" && __privateGet(this, _l7) ? __privateGet(this, _l7)[0] = r : __privateGet(this, _s8) && __privateGet(this, _s8).postMessage({ type: "setNTPStartTime", ntpStartTime: r }), __privateSet(this, _u7, r), this.updateDriftOffset();
  }
  startDriftTimer() {
    this.stopDriftTimer(), __privateSet(this, _w4, setInterval(() => {
      this.updateDriftOffset();
    }, 1e3));
  }
  stopDriftTimer() {
    __privateGet(this, _w4) && (clearInterval(__privateGet(this, _w4)), __privateSet(this, _w4, null));
  }
  getDriftOffset() {
    return __privateGet(this, _n7) ? Atomics.load(__privateGet(this, _n7), 0) : __privateGet(this, _h7);
  }
  getNTPStartTime() {
    return __privateGet(this, _l7) ? __privateGet(this, _l7)[0] : __privateGet(this, _u7) ?? 0;
  }
  getClockOffset() {
    return __privateGet(this, _i8) ? Atomics.load(__privateGet(this, _i8), 0) : __privateGet(this, _d6);
  }
  setClockOffset(t) {
    let e = Math.round(t * 1e3);
    __privateSet(this, _d6, e), __privateGet(this, _t11) === "sab" && __privateGet(this, _i8) ? Atomics.store(__privateGet(this, _i8), 0, e) : __privateGet(this, _s8) && __privateGet(this, _s8).postMessage({ type: "setClockOffset", clockOffsetMs: e });
  }
  reset() {
    this.stopDriftTimer(), __privateSet(this, _u7, void 0), __privateSet(this, _h7, 0), __privateSet(this, _d6, 0), __privateSet(this, _l7, null), __privateSet(this, _n7, null), __privateSet(this, _i8, null);
  }
}, _t11 = new WeakMap(), _e11 = new WeakMap(), _s8 = new WeakMap(), _c9 = new WeakMap(), _a8 = new WeakMap(), _l7 = new WeakMap(), _n7 = new WeakMap(), _i8 = new WeakMap(), _u7 = new WeakMap(), _h7 = new WeakMap(), _d6 = new WeakMap(), _w4 = new WeakMap(), _j), Lt = (_k = class {
  constructor({ audioContext: e }) {
    __privateAdd(this, _t12);
    __privateAdd(this, _e12, 0);
    __privateAdd(this, _s9, 0);
    __privateAdd(this, _c10, 100);
    __privateSet(this, _t12, e);
  }
  update() {
    if (__privateGet(this, _t12).state !== "running") return __privateGet(this, _c10);
    let e = performance.now(), s = __privateGet(this, _t12).currentTime;
    if (__privateGet(this, _s9) === 0) return __privateSet(this, _s9, e), __privateSet(this, _e12, s), __privateGet(this, _c10);
    let r = e - __privateGet(this, _s9);
    if (r < __privateGet(_k, _a9)) return __privateGet(this, _c10);
    let i = r / 1e3, n = s - __privateGet(this, _e12);
    return __privateSet(this, _c10, Math.min(100, Math.round(n / i * 100))), __privateSet(this, _s9, e), __privateSet(this, _e12, s), __privateGet(this, _c10);
  }
  getHealth() {
    return { healthPct: __privateGet(this, _c10) };
  }
  reset() {
    __privateSet(this, _e12, 0), __privateSet(this, _s9, 0), __privateSet(this, _c10, 100);
  }
}, _t12 = new WeakMap(), _e12 = new WeakMap(), _s9 = new WeakMap(), _c10 = new WeakMap(), _a9 = new WeakMap(), __privateAdd(_k, _a9, 1e3), _k), Nt = (_l8 = class {
  constructor(t = {}) {
    __privateAdd(this, _t13);
    __privateAdd(this, _e13);
    __privateAdd(this, _s10);
    __privateSet(this, _t13, t.sharedBuffer || null), __privateSet(this, _e13, t.bufferConstants || null), __privateSet(this, _s10, t.ringBufferBase || 0);
  }
  update(t, e, s) {
    __privateSet(this, _t13, t), __privateSet(this, _s10, e), __privateSet(this, _e13, s);
  }
  isAvailable() {
    return !!(__privateGet(this, _t13) && __privateGet(this, _e13));
  }
  start() {
    if (!this.isAvailable()) throw new Error("AudioCapture not initialized");
    let t = __privateGet(this, _e13), e = __privateGet(this, _s10) + t.AUDIO_CAPTURE_START, s = new Uint32Array(__privateGet(this, _t13), e, 4);
    Atomics.store(s, 1, 0), Atomics.store(s, 0, 1);
  }
  stop() {
    if (!this.isAvailable()) throw new Error("AudioCapture not initialized");
    let t = __privateGet(this, _e13), e = __privateGet(this, _s10) + t.AUDIO_CAPTURE_START, s = new Uint32Array(__privateGet(this, _t13), e, 4);
    Atomics.store(s, 0, 0);
    let r = Atomics.load(s, 1), i = s[2], n = s[3], a = e + t.AUDIO_CAPTURE_HEADER_SIZE, o = new Float32Array(__privateGet(this, _t13), a, r * n), l = new Float32Array(r), h = n > 1 ? new Float32Array(r) : null;
    for (let u = 0; u < r; u++) l[u] = o[u * n], h && (h[u] = o[u * n + 1]);
    return { sampleRate: i, channels: n, frames: r, left: l, right: h };
  }
  isEnabled() {
    if (!this.isAvailable()) return false;
    let t = __privateGet(this, _e13), e = __privateGet(this, _s10) + t.AUDIO_CAPTURE_START, s = new Uint32Array(__privateGet(this, _t13), e, 1);
    return Atomics.load(s, 0) === 1;
  }
  getFrameCount() {
    if (!this.isAvailable()) return 0;
    let t = __privateGet(this, _e13), e = __privateGet(this, _s10) + t.AUDIO_CAPTURE_START, s = new Uint32Array(__privateGet(this, _t13), e, 2);
    return Atomics.load(s, 1);
  }
  getMaxDuration() {
    if (!__privateGet(this, _e13)) return 0;
    let t = __privateGet(this, _e13);
    return t.AUDIO_CAPTURE_FRAMES / (t.AUDIO_CAPTURE_SAMPLE_RATE || 48e3);
  }
}, _t13 = new WeakMap(), _e13 = new WeakMap(), _s10 = new WeakMap(), _l8);
function $t(t, e, s) {
  let r = s, i = new Uint32Array(t, e, 3), n = i[0], a = i[1], o = i[2], l = e + r.NODE_TREE_HEADER_SIZE, h = r.NODE_TREE_MIRROR_MAX_NODES, u = r.NODE_TREE_ENTRY_SIZE, c = r.NODE_TREE_DEF_NAME_SIZE, d = new DataView(t, l, h * u), m = new TextDecoder("utf-8"), y = [], p = 0;
  for (let b = 0; b < h && p < n; b++) {
    let w = b * u, M = d.getInt32(w, true);
    if (M === -1) continue;
    p++;
    let f = l + w + 24, Ke = new Uint8Array(t, f, c), $ = new Uint8Array(c);
    $.set(Ke);
    let z = $.indexOf(0);
    z === -1 && (z = c);
    let Qe = m.decode($.subarray(0, z));
    y.push({ id: M, parentId: d.getInt32(w + 4, true), isGroup: d.getInt32(w + 8, true) === 1, prevId: d.getInt32(w + 12, true), nextId: d.getInt32(w + 16, true), headId: d.getInt32(w + 20, true), defName: Qe });
  }
  return { nodeCount: n, version: a, droppedCount: o, nodes: y };
}
var ue = new Uint8Array(2097152), Ne = new DataView(ue.buffer), g = ue, k = Ne, K = /* @__PURE__ */ new Map(), zt = 1e3, qt = new TextDecoder(), Gt = new TextEncoder(), Q = [null, 0], $e = 2208988800, D = 4294967296, he = new Uint8Array([35, 98, 117, 110, 100, 108, 101, 0]), ze = 44, te = 105, se = 102, re = 115, ie = 98, ne = 84, ae = 70, qe = 104, Ge = 100, We = 116, He = 117;
function F(t, e, s = 0) {
  let r = t.length + 4;
  r += e.length - s + 4;
  for (let i = s; i < e.length; i++) {
    let n = e[i];
    if (n instanceof Uint8Array) r += 4 + n.length + 3;
    else if (n instanceof ArrayBuffer) r += 4 + n.byteLength + 3;
    else if (typeof n == "string") r += n.length * 3 + 4;
    else if (n && n.type === "string") r += n.value.length * 3 + 4;
    else if (n && n.type === "blob") {
      let a = n.value, o = a instanceof Uint8Array ? a.length : a.byteLength;
      r += 4 + o + 3;
    } else n && n.type === "uuid" ? r += 16 : r += 8;
  }
  return r;
}
function Ve(t) {
  let e = 16;
  for (let s of t) e += 4, Array.isArray(s) ? e += F(s[0], s, 1) : s.packets !== void 0 ? e += Ve(s.packets) : e += F(s.address, s.args || []);
  return e;
}
function ce(t) {
  if (t <= 2097152) {
    g = ue, k = Ne;
    return;
  }
  g = new Uint8Array(t), k = new DataView(g.buffer);
}
function Wt(t, e = []) {
  let s = F(t, e);
  ce(s);
  let r = 0;
  r = fe(t, r), r = de(e, r);
  for (let i = 0; i < e.length; i++) r = L(e[i], r);
  return g.subarray(0, r);
}
function Ht(t, e) {
  let s = Ve(e);
  ce(s);
  let r = 0;
  g.set(he, r), r += 8, r = N(t, r);
  for (let i = 0; i < e.length; i++) {
    let n = e[i], a = r;
    r += 4;
    let o = r;
    Array.isArray(n) ? r = P(n[0], n, r, 1) : n.packets !== void 0 ? r = je(n.timeTag, n.packets, r) : r = P(n.address, n.args || [], r);
    let l = r - o;
    k.setUint32(a, l, false);
  }
  return g.subarray(0, r);
}
function Vt(t, e, s = []) {
  let r = 20 + F(e, s);
  ce(r);
  let i = 0;
  g.set(he, i), i += 8, i = N(t, i);
  let n = i;
  i += 4;
  let a = i;
  i = fe(e, i), i = de(s, i);
  for (let o = 0; o < s.length; o++) i = L(s[o], i);
  return k.setUint32(n, i - a, false), g.subarray(0, i);
}
function P(t, e, s, r = 0) {
  s = fe(t, s), s = de(e, s, r);
  for (let i = r; i < e.length; i++) s = L(e[i], s);
  return s;
}
function je(t, e, s) {
  g.set(he, s), s += 8, s = N(t, s);
  for (let r = 0; r < e.length; r++) {
    let i = e[r], n = s;
    s += 4;
    let a = s;
    Array.isArray(i) ? s = P(i[0], i, s, 1) : i.packets !== void 0 ? s = je(i.timeTag, i.packets, s) : s = P(i.address, i.args || [], s), k.setUint32(n, s - a, false);
  }
  return s;
}
function fe(t, e) {
  let s = K.get(t);
  if (s) return g.set(s, e), e + s.length;
  let r = e;
  if (e = oe(t, e), K.size < zt) {
    let i = g.slice(r, e);
    K.set(t, i);
  }
  return e;
}
function oe(t, e) {
  let s = false;
  for (let r = 0; r < t.length; r++) if (t.charCodeAt(r) >= 128) {
    s = true;
    break;
  }
  if (s) {
    let r = Gt.encodeInto(t, g.subarray(e));
    e += r.written;
  } else for (let r = 0; r < t.length; r++) g[e++] = t.charCodeAt(r);
  for (g[e++] = 0; e & 3; ) g[e++] = 0;
  return e;
}
function de(t, e, s = 0) {
  g[e++] = ze;
  for (let r = s; r < t.length; r++) {
    let i = t[r], n = typeof i;
    if (n === "number") g[e++] = Number.isInteger(i) ? te : se;
    else if (n === "string") g[e++] = re;
    else if (n === "boolean") g[e++] = i ? ne : ae;
    else if (i instanceof Uint8Array || i instanceof ArrayBuffer) g[e++] = ie;
    else if (i && i.type === "int") g[e++] = te;
    else if (i && i.type === "float") g[e++] = se;
    else if (i && i.type === "string") g[e++] = re;
    else if (i && i.type === "blob") g[e++] = ie;
    else if (i && i.type === "bool") g[e++] = i.value ? ne : ae;
    else if (i && i.type === "int64") g[e++] = qe;
    else if (i && i.type === "double") g[e++] = Ge;
    else if (i && i.type === "timetag") g[e++] = We;
    else if (i && i.type === "uuid") g[e++] = He;
    else throw i == null ? new Error(`OSC argument at index ${r} is ${i}`) : new Error(`Unknown OSC argument type at index ${r}: ${n}`);
  }
  for (g[e++] = 0; e & 3; ) g[e++] = 0;
  return e;
}
function L(t, e) {
  let s = typeof t;
  if (s === "number") return Number.isInteger(t) ? (k.setInt32(e, t, false), e + 4) : (k.setFloat32(e, t, false), e + 4);
  if (s === "string") return oe(t, e);
  if (s === "boolean") return e;
  if (t instanceof Uint8Array) {
    let r = t.length;
    for (k.setUint32(e, r, false), e += 4, g.set(t, e), e += r; e & 3; ) g[e++] = 0;
    return e;
  }
  if (t instanceof ArrayBuffer) return L(new Uint8Array(t), e);
  if (t && t.type === "int") return k.setInt32(e, t.value, false), e + 4;
  if (t && t.type === "float") return k.setFloat32(e, t.value, false), e + 4;
  if (t && t.type === "string") return oe(t.value, e);
  if (t && t.type === "blob") {
    let r = t.value instanceof Uint8Array ? t.value : new Uint8Array(t.value), i = r.length;
    for (k.setUint32(e, i, false), e += 4, g.set(r, e), e += i; e & 3; ) g[e++] = 0;
    return e;
  }
  return t && t.type === "bool" ? e : t && t.type === "int64" ? (k.setBigInt64(e, BigInt(t.value), false), e + 8) : t && t.type === "double" ? (k.setFloat64(e, t.value, false), e + 8) : t && t.type === "timetag" ? N(t.value, e) : t && t.type === "uuid" ? (g.set(t.value, e), e + 16) : e;
}
function N(t, e) {
  if (t === 1 || t === null || t === void 0) return k.setUint32(e, 0, false), k.setUint32(e + 4, 1, false), e + 8;
  if (Array.isArray(t)) {
    if (t.length !== 2) throw new Error(`TimeTag array must have exactly 2 elements [seconds, fraction], got ${t.length}`);
    return k.setUint32(e, t[0] >>> 0, false), k.setUint32(e + 4, t[1] >>> 0, false), e + 8;
  }
  if (typeof t != "number") throw new TypeError(`TimeTag must be a number, array, null, or undefined, got ${typeof t}`);
  t > 1 && t < $e && console.warn(`TimeTag ${t} looks like a Unix timestamp (< NTP_EPOCH_OFFSET). Did you mean to add NTP_EPOCH_OFFSET (2208988800)?`);
  let s = t >>> 0, r = (t - Math.floor(t)) * D >>> 0;
  return k.setUint32(e, s, false), k.setUint32(e + 4, r, false), e + 8;
}
function O(t) {
  return t instanceof Uint8Array || (t = new Uint8Array(t)), t[0] === 35 && t[1] === 98 ? Zt(t) : jt(t);
}
function jt(t) {
  t instanceof Uint8Array || (t = new Uint8Array(t));
  let e = new DataView(t.buffer, t.byteOffset, t.byteLength), s = 0, [r, i] = X(t, s);
  if (s = i, s >= t.length || t[s] !== ze) return [r];
  let [n, a] = X(t, s);
  s = a;
  let o = [r];
  for (let l = 1; l < n.length; l++) switch (n.charCodeAt(l)) {
    case te:
      o.push(e.getInt32(s, false)), s += 4;
      break;
    case se:
      o.push(e.getFloat32(s, false)), s += 4;
      break;
    case re:
      let [h, u] = X(t, s);
      o.push(h), s = u;
      break;
    case ie:
      let c = e.getUint32(s, false);
      s += 4, o.push(t.slice(s, s + c)), s += c, s = s + 3 & -4;
      break;
    case qe:
      o.push(e.getBigInt64(s, false)), s += 8;
      break;
    case Ge:
      o.push(e.getFloat64(s, false)), s += 8;
      break;
    case ne:
      o.push(true);
      break;
    case ae:
      o.push(false);
      break;
    case We:
      let d = e.getUint32(s, false), m = e.getUint32(s + 4, false);
      o.push(d + m / D), s += 8;
      break;
    case He:
      o.push({ type: "uuid", value: t.slice(s, s + 16) }), s += 16;
      break;
  }
  return o;
}
function Zt(t) {
  t instanceof Uint8Array || (t = new Uint8Array(t));
  let e = new DataView(t.buffer, t.byteOffset, t.byteLength), s = 8, r = e.getUint32(s, false), i = e.getUint32(s + 4, false), n = r + i / D;
  s += 8;
  let a = [];
  for (; s < t.length; ) {
    let o = e.getUint32(s, false);
    if (s += 4, o > 0 && s + o <= t.length) {
      let l = t.subarray(s, s + o);
      a.push(O(l));
    }
    s += o;
  }
  return { timeTag: n, packets: a };
}
function X(t, e) {
  let s = e;
  for (; s < t.length && t[s] !== 0; ) s++;
  let r = qt.decode(t.subarray(e, s));
  return s++, s = s + 3 & -4, Q[0] = r, Q[1] = s, Q;
}
function Y(t) {
  return t.slice();
}
function Jt(t) {
  return !t || t.length < 8 ? false : t[0] === 35 && t[1] === 98;
}
function Ce(t) {
  if (!Jt(t)) return null;
  let e = new DataView(t.buffer, t.byteOffset, t.byteLength), s = e.getUint32(8, false), r = e.getUint32(12, false);
  return s + r / D;
}
var _ = { totalPages: 368, ringBufferReserved: 3145728, bufferPoolOffset: 19922944, bufferPoolSize: 4194304, maxBufferPoolSize: 268435456, get totalMemory() {
  return this.bufferPoolOffset + this.bufferPoolSize;
}, get maxTotalMemory() {
  return this.bufferPoolOffset + this.maxBufferPoolSize;
}, get wasmHeapSize() {
  return this.bufferPoolOffset - this.ringBufferReserved;
} }, Kt = { numBuffers: 1024, maxNodes: 1024, maxGraphDefs: 1024, maxWireBufs: 64, numAudioBusChannels: 128, numInputBusChannels: 2, numOutputBusChannels: 2, numControlBusChannels: 4096, bufLength: 128, realTimeMemorySize: 8192, numRGens: 64, realTime: false, memoryLocking: false, loadGraphDefs: 0, preferredSampleRate: 0, verbosity: 0 }, Qt = 1e4, Xt = 5e3, Yt = 150, es = /* @__PURE__ */ new Set(["/b_alloc", "/b_allocRead", "/b_allocReadChannel", "/b_allocFile"]), S = [];
for (let t = 0; t < 256; t++) S[t] = t.toString(16).padStart(2, "0");
function ts(t) {
  return S[t[0]] + S[t[1]] + S[t[2]] + S[t[3]] + "-" + S[t[4]] + S[t[5]] + "-" + S[t[6]] + S[t[7]] + "-" + S[t[8]] + S[t[9]] + "-" + S[t[10]] + S[t[11]] + S[t[12]] + S[t[13]] + S[t[14]] + S[t[15]];
}
function Ze(t) {
  return "\u2026" + S[t[13]] + S[t[14]] + S[t[15]];
}
function Ee(t, e) {
  if (t && t.type === "uuid" && t.value) return Ze(t.value);
  if (t instanceof Uint8Array || t instanceof ArrayBuffer) return `<${t.byteLength || t.length} bytes>`;
  let s = JSON.stringify(t);
  return e && s.length > e ? s.slice(0, e) + "..." : s;
}
function T(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Je(t, e, s) {
  if (t && t.type === "uuid" && t.value) return `<span class="supersonic-scsynth-string" title="${ts(t.value)}">${Ze(t.value)}</span>`;
  let r = t, i = null;
  if (typeof t == "object" && t !== null && t.value !== void 0 && (r = t.value, i = t.type), i === "b" || r instanceof Uint8Array || r instanceof ArrayBuffer) return `<span class="supersonic-scsynth-binary">&lt;${r.byteLength ?? r.length ?? "?"} bytes&gt;</span>`;
  let n = i === "f" || i === null && typeof r == "number" && !Number.isInteger(r), a = i === "i" || i === null && Number.isInteger(r), o = e === "/s_new" && s >= 4 && (s - 4) % 2 === 0 && typeof r == "string";
  return n ? `<span class="supersonic-scsynth-float">${parseFloat(r.toFixed(3))}</span>` : a ? `<span class="supersonic-scsynth-int">${r}</span>` : o ? `<span class="supersonic-scsynth-param">${T(r)}</span>` : typeof r == "string" ? `<span class="supersonic-scsynth-string">${T(JSON.stringify(r))}</span>` : `<span class="supersonic-scsynth-string">${T(r)}</span>`;
}
function le(t, e, s, r, i) {
  let n = t[0], a = t.slice(1), o = r && s ? (s - r).toFixed(2) : "", l = `<span class="supersonic-scsynth-seq">[${e}]</span>`;
  if (o && (l += ` <span class="supersonic-scsynth-time">${o}</span>`), i !== void 0 && (l += ` <span class="supersonic-scsynth-source">ch${i}</span>`), l += ` <span class="supersonic-scsynth-address">${T(n)}</span>`, a.length > 0) {
    let h = a.map((u, c) => Je(u, n, c)).join(", ");
    l += " " + h;
  }
  return l;
}
function ss(t, e, s, r, i) {
  if (!t.packets) return le(t, e, s, r, i);
  if (t.packets.length === 1) return le(t.packets[0], e, s, r, i);
  let n = r && s ? (s - r).toFixed(2) : "", a = `<span class="supersonic-scsynth-seq">[${e}]</span>`;
  n && (a += ` <span class="supersonic-scsynth-time">${n}</span>`), i !== void 0 && (a += ` <span class="supersonic-scsynth-source">ch${i}</span>`), a += ` <span class="supersonic-scsynth-bundle">Bundle (${t.packets.length})</span>`;
  for (let o of t.packets) {
    let l = o[0], h = o.slice(1);
    a += `<br><span class="supersonic-scsynth-address">${T(l)}</span>`, h.length > 0 && (a += " " + h.map((u, c) => Je(u, l, c)).join(", "));
  }
  return a;
}
var rs = (_m = class {
  constructor(e = {}) {
    __privateAdd(this, _x_instances);
    __privateAdd(this, _e14);
    __privateAdd(this, _s11);
    __privateAdd(this, _c11, null);
    __privateAdd(this, _a10);
    __privateAdd(this, _l9);
    __privateAdd(this, _n8);
    __privateAdd(this, _i9);
    __privateAdd(this, _u8);
    __privateAdd(this, _h8);
    __privateAdd(this, _d7);
    __privateAdd(this, _w5);
    __privateAdd(this, _S4);
    __privateAdd(this, _p4);
    __privateAdd(this, _f5);
    __privateAdd(this, _m5);
    __privateAdd(this, _k5);
    __privateAdd(this, _y4);
    __privateAdd(this, _r4);
    __privateAdd(this, _o4);
    __privateAdd(this, _g4);
    __privateAdd(this, _b4);
    __privateAdd(this, _C3);
    __privateAdd(this, _A);
    __privateAdd(this, _B);
    __privateAdd(this, _E, 1e3);
    __privateAdd(this, _T, null);
    __privateAdd(this, _I, null);
    __privateAdd(this, _R, 0);
    __privateAdd(this, _v, []);
    __privateAdd(this, __, null);
    __privateAdd(this, _U, Promise.resolve());
    var _a11, _b5, _c12, _d8;
    __privateSet(this, _p4, false), __privateSet(this, _f5, false), __privateSet(this, _m5, null), __privateSet(this, _k5, {}), __privateSet(this, _y4, null), __privateSet(this, _o4, new xt()), __privateSet(this, _g4, new Ft({ mode: e.mode || "postMessage" })), __privateSet(this, _C3, new Nt({})), __privateSet(this, _e14, null), __privateSet(this, _s11, null), __privateSet(this, _a10, null), __privateSet(this, _n8, null), this.loadedSynthDefs = /* @__PURE__ */ new Map();
    let s = e.baseURL || null, r = e.coreBaseURL || s, i = e.workerBaseURL || (s ? `${s}workers/` : null), n = e.wasmBaseURL || (r ? `${r}wasm/` : null);
    if (!i || !n) throw new Error(`SuperSonic requires explicit URL configuration.

For CDN usage:
  import { SuperSonic } from 'https://unpkg.com/supersonic-scsynth@VERSION/dist/supersonic.js';
  new SuperSonic({
    baseURL: 'https://unpkg.com/supersonic-scsynth@VERSION/dist/',
    coreBaseURL: 'https://unpkg.com/supersonic-scsynth-core@VERSION/',
  })

For local usage:
  new SuperSonic({ baseURL: '/path/to/supersonic/dist/' })

See: https://github.com/samaaron/supersonic#configuration`);
    let a = { ...Kt, ...e.scsynthOptions };
    __privateMethod(this, _x_instances, G_fn).call(this, a);
    let o = e.mode || "postMessage";
    __privateSet(this, _r4, { mode: o, snapshotIntervalMs: e.snapshotIntervalMs ?? Yt, wasmBytes: e.wasmBytes ?? null, wasmUrl: e.wasmUrl || n + "scsynth-nrt.wasm", wasmBaseURL: n, workletUrl: e.workletUrl || (r ? `${r}workers/scsynth_audio_worklet.js` : i + "scsynth_audio_worklet.js"), workerBaseURL: i, audioContext: e.audioContext || null, autoConnect: e.autoConnect !== false, audioContextOptions: { latencyHint: "interactive", sampleRate: 48e3, ...e.audioContextOptions }, memory: __privateMethod(this, _x_instances, W_fn).call(this, e.memory), worldOptions: a, preschedulerCapacity: e.preschedulerCapacity || 65536, bypassLookaheadMs: e.bypassLookaheadMs ?? 500, activityEvent: { maxLineLength: ((_a11 = e.activityEvent) == null ? void 0 : _a11.maxLineLength) ?? 200, scsynthMaxLineLength: ((_b5 = e.activityEvent) == null ? void 0 : _b5.scsynthMaxLineLength) ?? null, oscInMaxLineLength: ((_c12 = e.activityEvent) == null ? void 0 : _c12.oscInMaxLineLength) ?? null, oscOutMaxLineLength: ((_d8 = e.activityEvent) == null ? void 0 : _d8.oscOutMaxLineLength) ?? null }, debug: e.debug ?? false, debugScsynth: e.debugScsynth ?? false, debugOscIn: e.debugOscIn ?? false, debugOscOut: e.debugOscOut ?? false, bufferGrowIncrement: e.bufferGrowIncrement ?? 32 * 1024 * 1024 }), __privateGet(this, _r4).effectiveMaxBufferMemory = e.maxBufferMemory || __privateGet(this, _r4).memory.maxBufferPoolSize || __privateGet(this, _r4).memory.bufferPoolSize, __privateSet(this, _h8, e.sampleBaseURL || (s ? `${s}samples/` : null)), __privateSet(this, _d7, e.synthdefBaseURL || (s ? `${s}synthdefs/` : null)), __privateSet(this, _w5, { maxRetries: e.fetchMaxRetries ?? 3, baseDelay: e.fetchRetryDelay ?? 1e3 }), __privateSet(this, _S4, new _t({ onLoadingEvent: (l, h) => __privateGet(this, _o4).emit(l, h), maxRetries: __privateGet(this, _w5).maxRetries, baseDelay: __privateGet(this, _w5).baseDelay, skipHeadRequests: e.skipHeadRequests ?? false })), this.bootStats = { initStartTime: null, initDuration: null };
  }
  static getMetricsSchema() {
    return __privateGet(this, _t14) ?? __privateSet(this, _t14, { metrics: { scsynthProcessCount: { offset: 0, type: "counter", unit: "count", description: "Audio process() calls" }, scsynthMessagesProcessed: { offset: 1, type: "counter", unit: "count", description: "OSC messages processed by scsynth" }, scsynthMessagesDropped: { offset: 2, type: "counter", unit: "count", description: "Messages dropped (ring buffer full)" }, scsynthSchedulerDepth: { offset: 3, type: "gauge", unit: "count", description: "Current scheduler queue depth" }, scsynthSchedulerPeakDepth: { offset: 4, type: "gauge", unit: "count", description: "Peak scheduler queue depth (high water mark)" }, scsynthSchedulerDropped: { offset: 5, type: "counter", unit: "count", description: "Scheduled events dropped" }, scsynthSequenceGaps: { offset: 6, type: "counter", unit: "count", description: "Messages lost in transit from JS to scsynth" }, scsynthWasmErrors: { offset: 7, type: "counter", unit: "count", description: "WASM execution errors in audio worklet" }, scsynthSchedulerLates: { offset: 8, type: "counter", unit: "count", description: "Bundles executed after their scheduled time" }, preschedulerPending: { offset: 9, type: "gauge", unit: "count", description: "Events waiting to be scheduled" }, preschedulerPendingPeak: { offset: 10, type: "gauge", unit: "count", description: "Peak pending events" }, preschedulerBundlesScheduled: { offset: 11, type: "counter", unit: "count", description: "Bundles scheduled" }, preschedulerDispatched: { offset: 12, type: "counter", unit: "count", description: "Events sent to worklet" }, preschedulerEventsCancelled: { offset: 13, type: "counter", unit: "count", description: "Events cancelled" }, preschedulerMinHeadroomMs: { offset: 14, type: "gauge", unit: "ms", description: "Smallest time gap between JS prescheduler dispatch and scsynth scheduler execution" }, preschedulerLates: { offset: 15, type: "counter", unit: "count", description: "Bundles dispatched after their scheduled execution time" }, preschedulerRetriesSucceeded: { offset: 16, type: "counter", unit: "count", description: "Retries that succeeded" }, preschedulerRetriesFailed: { offset: 17, type: "counter", unit: "count", description: "Retries that failed" }, preschedulerRetryQueueSize: { offset: 18, type: "gauge", unit: "count", description: "Current retry queue size" }, preschedulerRetryQueuePeak: { offset: 19, type: "gauge", unit: "count", description: "Peak retry queue size" }, preschedulerMessagesRetried: { offset: 20, type: "counter", unit: "count", description: "Messages that needed retry" }, preschedulerTotalDispatches: { offset: 21, type: "counter", unit: "count", description: "Total dispatch attempts" }, preschedulerBypassed: { offset: 22, type: "counter", unit: "count", description: "Messages sent directly from JS to scsynth, bypassing prescheduler (aggregate)" }, preschedulerMaxLateMs: { offset: 23, type: "gauge", unit: "ms", description: "Maximum lateness at prescheduler (ms)" }, oscOutMessagesSent: { offset: 24, type: "counter", unit: "count", description: "OSC messages sent from JS to scsynth" }, oscOutBytesSent: { offset: 25, type: "counter", unit: "bytes", description: "Total bytes sent from JS to scsynth" }, oscInMessagesReceived: { offset: 26, type: "counter", unit: "count", description: "OSC replies received from scsynth to JS" }, oscInBytesReceived: { offset: 27, type: "counter", unit: "bytes", description: "Total bytes received from scsynth to JS" }, oscInMessagesDropped: { offset: 28, type: "counter", unit: "count", description: "Replies lost in transit from scsynth to JS" }, oscInCorrupted: { offset: 29, type: "counter", unit: "count", description: "Corrupted messages detected from scsynth to JS" }, debugMessagesReceived: { offset: 30, type: "counter", unit: "count", description: "Debug messages from scsynth" }, debugBytesReceived: { offset: 31, type: "counter", unit: "bytes", description: "Debug bytes received" }, inBufferUsedBytes: { offset: 32, type: "gauge", unit: "bytes", description: "Bytes used in IN ring buffer" }, outBufferUsedBytes: { offset: 33, type: "gauge", unit: "bytes", description: "Bytes used in OUT ring buffer" }, debugBufferUsedBytes: { offset: 34, type: "gauge", unit: "bytes", description: "Bytes used in DEBUG ring buffer" }, inBufferPeakBytes: { offset: 35, type: "gauge", unit: "bytes", description: "Peak bytes used in IN ring buffer" }, outBufferPeakBytes: { offset: 36, type: "gauge", unit: "bytes", description: "Peak bytes used in OUT ring buffer" }, debugBufferPeakBytes: { offset: 37, type: "gauge", unit: "bytes", description: "Peak bytes used in DEBUG ring buffer" }, bypassNonBundle: { offset: 38, type: "counter", unit: "count", description: "Plain OSC messages (not bundles) that bypassed prescheduler" }, bypassImmediate: { offset: 39, type: "counter", unit: "count", description: "Bundles with timetag 0 or 1 that bypassed prescheduler" }, bypassNearFuture: { offset: 40, type: "counter", unit: "count", description: "Bundles within bypass lookahead threshold that bypassed prescheduler" }, bypassLate: { offset: 41, type: "counter", unit: "count", description: "Timestamped OSC bundles arriving late into SuperSonic bypassing prescheduler" }, scsynthSchedulerMaxLateMs: { offset: 42, type: "gauge", unit: "ms", description: "Maximum lateness observed in scsynth scheduler (ms)" }, scsynthSchedulerLastLateMs: { offset: 43, type: "gauge", unit: "ms", description: "Most recent late magnitude in scsynth scheduler (ms)" }, scsynthSchedulerLastLateTick: { offset: 44, type: "gauge", unit: "count", description: "Process count when last scsynth late occurred" }, ringBufferDirectWriteFails: { offset: 45, type: "counter", unit: "count", description: "SAB mode only: optimistic direct writes attempted but failed due to ring buffer lock not being available (delivered via prescheduler instead)" }, driftOffsetMs: { offset: 46, type: "gauge", unit: "ms", signed: true, description: "Clock drift between AudioContext and wall clock" }, clockOffsetMs: { offset: 47, type: "gauge", unit: "ms", signed: true, description: "Clock offset for multi-system sync" }, audioContextState: { offset: 48, type: "enum", values: ["unknown", "running", "suspended", "closed", "interrupted"], description: "AudioContext state" }, bufferPoolUsedBytes: { offset: 49, type: "gauge", unit: "bytes", description: "Buffer pool bytes used" }, bufferPoolAvailableBytes: { offset: 50, type: "gauge", unit: "bytes", description: "Buffer pool bytes available" }, bufferPoolAllocations: { offset: 51, type: "counter", unit: "count", description: "Total buffer allocations" }, loadedSynthDefs: { offset: 52, type: "gauge", unit: "count", description: "Number of loaded synthdefs" }, scsynthSchedulerCapacity: { offset: 53, type: "constant", unit: "count", description: "Maximum scheduler queue size" }, preschedulerCapacity: { offset: 54, type: "constant", unit: "count", description: "Maximum pending events in prescheduler" }, inBufferCapacity: { offset: 55, type: "constant", unit: "bytes", description: "IN ring buffer capacity" }, outBufferCapacity: { offset: 56, type: "constant", unit: "bytes", description: "OUT ring buffer capacity" }, debugBufferCapacity: { offset: 57, type: "constant", unit: "bytes", description: "DEBUG ring buffer capacity" }, mode: { offset: 58, type: "enum", values: ["sab", "postMessage"], description: "Transport mode" }, glitchCount: { offset: 59, type: "counter", unit: "count", description: "Chrome only: audio underrun/glitch events" }, glitchDurationMs: { offset: 60, type: "gauge", unit: "ms", description: "Chrome only: total silence from audio underruns" }, averageLatencyUs: { offset: 61, type: "gauge", unit: "us", description: "Chrome only: average audio output latency" }, maxLatencyUs: { offset: 62, type: "gauge", unit: "us", description: "Chrome only: maximum audio output latency" }, audioHealthPct: { offset: 63, type: "gauge", unit: "%", description: "Cross-browser: fraction of expected audio frames delivered (100% = no issues)" }, totalFramesDurationMs: { offset: 64, type: "counter", unit: "ms", description: "Chrome only: total audio rendered duration" }, hasPlaybackStats: { offset: 65, type: "gauge", unit: "bool", description: "1 if Chrome playbackStats API is available, 0 otherwise" }, bufferPoolTotalCapacity: { offset: 66, type: "gauge", unit: "bytes", description: "Buffer pool committed capacity (grows on demand)" }, bufferPoolMaxCapacity: { offset: 67, type: "gauge", unit: "bytes", description: "Buffer pool hard ceiling" }, bufferPoolGrowthCount: { offset: 68, type: "counter", unit: "count", description: "Number of buffer pool growth events" }, bufferPoolPoolCount: { offset: 69, type: "gauge", unit: "count", description: "Number of buffer pool segments" } }, layout: { panels: [{ title: "OSC Out", rows: [{ label: "sent", cells: [{ key: "oscOutMessagesSent" }] }, { label: "bytes", cells: [{ key: "oscOutBytesSent", kind: "muted", format: "bytes" }] }, { label: "bypass", cells: [{ key: "preschedulerBypassed", kind: "green" }] }, { label: "lost", cells: [{ key: "scsynthSequenceGaps", kind: "error" }] }] }, { title: "Bypass", rows: [{ label: "msg", cells: [{ key: "bypassNonBundle", kind: "muted" }] }, { label: "imm", cells: [{ key: "bypassImmediate", kind: "muted" }] }, { label: "near", cells: [{ key: "bypassNearFuture", kind: "muted" }] }, { label: "late", cells: [{ key: "bypassLate", kind: "muted" }] }] }, { title: "OSC In", rows: [{ label: "received", cells: [{ key: "oscInMessagesReceived" }] }, { label: "bytes", cells: [{ key: "oscInBytesReceived", kind: "muted", format: "bytes" }] }, { label: "dropped", cells: [{ key: "oscInMessagesDropped", kind: "error" }] }, { label: "corrupted", cells: [{ key: "oscInCorrupted", kind: "error" }] }] }, { title: "Presched Flow", rows: [{ label: "pending", tooltip: "Current pending events | peak pending events", cells: [{ key: "preschedulerPending" }, { sep: " | " }, { key: "preschedulerPendingPeak", kind: "muted" }] }, { label: "scheduled", cells: [{ key: "preschedulerBundlesScheduled" }] }, { label: "dispatched", cells: [{ key: "preschedulerDispatched", kind: "dim" }] }, { label: "min slack", cells: [{ key: "preschedulerMinHeadroomMs", kind: "dim", format: "headroom" }, { text: " ms", kind: "muted" }] }] }, { title: "Presched Health", rows: [{ label: "lates", tooltip: "Bundles dispatched after their scheduled time (count and max lateness in ms)", cells: [{ key: "preschedulerLates", kind: "error" }, { sep: " (" }, { key: "preschedulerMaxLateMs", kind: "dim" }, { text: " ms max)", kind: "muted" }] }, { label: "cancelled", cells: [{ key: "preschedulerEventsCancelled", kind: "error" }] }, { label: "retried", tooltip: "Messages retried | succeeded | failed", cells: [{ key: "preschedulerMessagesRetried", kind: "dim" }, { sep: " | " }, { key: "preschedulerRetriesSucceeded", kind: "green" }, { sep: " | " }, { key: "preschedulerRetriesFailed", kind: "error" }] }, { label: "retry queue", tooltip: "Current retry queue size | peak size", cells: [{ key: "preschedulerRetryQueueSize" }, { sep: " | " }, { key: "preschedulerRetryQueuePeak", kind: "muted" }] }] }, { title: "scsynth Scheduler", rows: [{ label: "queue", tooltip: "Current scheduler queue depth | peak depth", cells: [{ key: "scsynthSchedulerDepth" }, { sep: " | " }, { key: "scsynthSchedulerPeakDepth", kind: "muted" }] }, { label: "dropped", cells: [{ key: "scsynthSchedulerDropped", kind: "error" }] }, { label: "lates", cells: [{ key: "scsynthSchedulerLates", kind: "error" }] }, { label: "max | last", tooltip: "Maximum lateness observed | most recent late magnitude (ms)", cells: [{ key: "scsynthSchedulerMaxLateMs", kind: "error" }, { sep: " | " }, { key: "scsynthSchedulerLastLateMs", kind: "dim" }, { text: " ms", kind: "muted" }] }] }, { title: "scsynth", rows: [{ label: "ticks", tooltip: "Audio process() callback count and OSC messages processed", cells: [{ key: "scsynthProcessCount", kind: "dim" }, { sep: " | " }, { key: "scsynthMessagesProcessed", kind: "muted" }, { text: " msgs", kind: "muted" }] }, { label: "dropped", cells: [{ key: "scsynthMessagesDropped", kind: "error" }] }, { label: "drift", cells: [{ key: "driftOffsetMs", format: "signed" }, { text: " ms", kind: "muted" }] }, { label: "debug", tooltip: "Debug messages from scsynth (count and bytes)", cells: [{ key: "debugMessagesReceived", kind: "muted" }, { text: " (" }, { key: "debugBytesReceived", kind: "muted", format: "bytes" }, { text: ")" }] }] }, { title: "Ring Buffer Level", class: "wide", rows: [{ type: "bar", label: "in", usedKey: "inBufferUsedBytes", peakKey: "inBufferPeakBytes", capacityKey: "inBufferCapacity", color: "blue" }, { type: "bar", label: "out", usedKey: "outBufferUsedBytes", peakKey: "outBufferPeakBytes", capacityKey: "outBufferCapacity", color: "green" }, { type: "bar", label: "dbg", usedKey: "debugBufferUsedBytes", peakKey: "debugBufferPeakBytes", capacityKey: "debugBufferCapacity", color: "purple" }, { label: "direct write fails", cells: [{ key: "ringBufferDirectWriteFails", kind: "error" }] }] }, { title: "Buffers & SynthDefs", rows: [{ label: "buf used", cells: [{ key: "bufferPoolUsedBytes", format: "bytes" }] }, { label: "buf free", cells: [{ key: "bufferPoolAvailableBytes", kind: "green", format: "bytes" }] }, { label: "buf allocs", cells: [{ key: "bufferPoolAllocations", kind: "dim" }] }, { label: "synthdefs", cells: [{ key: "loadedSynthDefs" }] }] }, { title: "AudioWorklet", rows: [{ label: "health", tooltip: "AudioContext state and audio health percentage (fraction of expected frames delivered)", cells: [{ key: "audioContextState", kind: "green", format: "enum" }, { sep: " | " }, { key: "audioHealthPct", kind: "green", format: "percent" }, { text: " %", kind: "muted" }] }, { label: "glitches", tooltip: "Chrome only: audio underrun/glitch events and total silence duration", cells: [{ key: "glitchCount", kind: "error", format: "chromeOnly" }, { sep: " (" }, { key: "glitchDurationMs", kind: "error", format: "chromeOnly" }, { text: " ms)", kind: "muted" }] }, { label: "latency", tooltip: "Chrome only: avg | max audio output latency in ms", cells: [{ key: "averageLatencyUs", kind: "dim", format: "chromeLatencyUs" }, { sep: " | " }, { key: "maxLatencyUs", kind: "dim", format: "chromeLatencyUs" }, { text: " ms", kind: "muted" }] }, { label: "WASM errors", cells: [{ key: "scsynthWasmErrors", kind: "error" }] }] }] }, sentinels: { HEADROOM_UNSET: 4294967295 } });
  }
  static getTreeSchema() {
    return { nodeCount: { type: "number", description: "Total nodes in tree" }, version: { type: "number", description: "Increments on any tree change, useful for detecting updates" }, droppedCount: { type: "number", description: "Nodes that exceeded mirror capacity (tree may be incomplete)" }, root: { type: "object", description: "Root node of the tree (always a group with id 0)", schema: { id: { type: "number", description: "Unique node ID" }, type: { type: "string", values: ["group", "synth"], description: "Node type" }, defName: { type: "string", description: "Synthdef name (synths only, empty for groups)" }, children: { type: "array", description: "Child nodes (recursive)", itemSchema: "(self)" } } } };
  }
  static getRawTreeSchema() {
    return { nodeCount: { type: "number", description: "Total nodes in tree" }, version: { type: "number", description: "Increments on any tree change, useful for detecting updates" }, droppedCount: { type: "number", description: "Nodes that exceeded mirror capacity (tree may be incomplete)" }, nodes: { type: "array", description: "Flat array of all nodes with internal linkage pointers", itemSchema: { id: { type: "number", description: "Unique node ID" }, parentId: { type: "number", description: "Parent node ID (-1 for root)" }, isGroup: { type: "boolean", description: "True if group, false if synth" }, prevId: { type: "number", description: "Previous sibling node ID (-1 if none)" }, nextId: { type: "number", description: "Next sibling node ID (-1 if none)" }, headId: { type: "number", description: "First child node ID (groups only, -1 if empty)" }, defName: { type: "string", description: "Synthdef name (synths only, empty for groups)" } } } };
  }
  get initialized() {
    return __privateGet(this, _p4);
  }
  get initializing() {
    return __privateGet(this, _f5);
  }
  get audioContext() {
    return __privateGet(this, _e14);
  }
  get mode() {
    return __privateGet(this, _r4).mode;
  }
  get bufferConstants() {
    return __privateGet(this, _g4).bufferConstants;
  }
  get ringBufferBase() {
    return __privateGet(this, _g4).ringBufferBase;
  }
  get sharedBuffer() {
    return __privateGet(this, _g4).sharedBuffer;
  }
  get node() {
    return __privateGet(this, _c11);
  }
  get osc() {
    return __privateGet(this, _a10);
  }
  get initTime() {
    var _a11;
    return ((_a11 = __privateGet(this, _b4)) == null ? void 0 : _a11.getNTPStartTime()) ?? 0;
  }
  on(e, s) {
    return __privateGet(this, _o4).on(e, s);
  }
  off(e, s) {
    return __privateGet(this, _o4).off(e, s), this;
  }
  once(e, s) {
    return __privateGet(this, _o4).once(e, s);
  }
  removeAllListeners(e) {
    return __privateGet(this, _o4).removeAllListeners(e), this;
  }
  async init() {
    if (!__privateGet(this, _p4)) return __privateGet(this, _m5) ? __privateGet(this, _m5) : (__privateSet(this, _m5, __privateMethod(this, _x_instances, H_fn).call(this)), __privateGet(this, _m5));
  }
  getMetrics() {
    return __privateMethod(this, _x_instances, O_fn).call(this);
  }
  getMetricsArray() {
    return __privateMethod(this, _x_instances, te_fn).call(this), __privateGet(this, _g4).getMergedArray();
  }
  getSnapshot() {
    var _a11;
    let e = __privateMethod(this, _x_instances, O_fn).call(this), s = ((_a11 = _m.getMetricsSchema()) == null ? void 0 : _a11.metrics) || {}, r = {};
    for (let [n, a] of Object.entries(e)) {
      let o = s[n];
      (o == null ? void 0 : o.description) ? r[n] = { value: a, description: o.description } : r[n] = { value: a };
    }
    let i = null;
    return typeof performance < "u" && performance.memory && (i = { usedJSHeapSize: performance.memory.usedJSHeapSize, totalJSHeapSize: performance.memory.totalJSHeapSize, jsHeapSizeLimit: performance.memory.jsHeapSizeLimit }), { timestamp: (/* @__PURE__ */ new Date()).toISOString(), metrics: r, nodeTree: this.getRawTree(), memory: i };
  }
  getSystemReport() {
    var _a11, _b5;
    __privateMethod(this, _x_instances, M_fn).call(this, "get system report");
    let e = __privateMethod(this, _x_instances, O_fn).call(this), s = [], r = { userAgent: navigator.userAgent, hardwareConcurrency: navigator.hardwareConcurrency ?? null, deviceMemory: navigator.deviceMemory ?? null, platform: navigator.platform }, i = { sampleRate: __privateGet(this, _e14).sampleRate, baseLatency: __privateGet(this, _e14).baseLatency ?? null, outputLatency: __privateGet(this, _e14).outputLatency ?? null, state: __privateGet(this, _e14).state, channelCount: __privateGet(this, _r4).worldOptions.numOutputBusChannels }, n = __privateGet(this, _k5).playbackStats ? __privateGet(this, _e14).playbackStats : null, a = n ? { glitchCount: n.fallbackFramesEvents, glitchDurationS: n.fallbackFramesDuration, totalDurationS: n.totalFramesDuration, averageLatencyS: n.averageLatency, maximumLatencyS: n.maximumLatency } : null, o = ((_b5 = (_a11 = __privateGet(this, _A)) == null ? void 0 : _a11.getHealth()) == null ? void 0 : _b5.healthPct) ?? 100;
    o < 95 && s.push({ severity: o < 80 ? "critical" : "warning", message: `Audio health at ${o}% \u2014 audio thread may be falling behind` }), e.scsynthSchedulerLates > 0 && s.push({ severity: "warning", message: `${e.scsynthSchedulerLates} late bundles in scsynth scheduler` }), e.scsynthWasmErrors > 0 && s.push({ severity: "error", message: `${e.scsynthWasmErrors} WASM errors detected` }), (n == null ? void 0 : n.fallbackFramesEvents) > 0 && s.push({ severity: "warning", message: `${n.fallbackFramesEvents} audio glitch events (${(n.fallbackFramesDuration * 1e3).toFixed(1)}ms total silence)` }), e.driftOffsetMs !== void 0 && Math.abs(e.driftOffsetMs) > 10 && s.push({ severity: "warning", message: `Clock drift: ${e.driftOffsetMs}ms between AudioContext and wall clock` });
    let l = s.length === 0 ? `Audio health: ${o}% \u2014 no issues detected` : `Audio health: ${o}% \u2014 ${s.length} issue(s): ${s.map((h) => h.message).join("; ")}`;
    return { timestamp: (/* @__PURE__ */ new Date()).toISOString(), system: r, audio: i, playbackStats: a, engine: { mode: this.mode, version: __privateGet(this, _y4), bootTimeMs: this.bootStats.initDuration }, health: { audioHealthPct: o, issues: s, summary: l }, metrics: e };
  }
  setClockOffset(e) {
    var _a11;
    __privateMethod(this, _x_instances, M_fn).call(this, "set clock offset"), (_a11 = __privateGet(this, _b4)) == null ? void 0 : _a11.setClockOffset(e);
  }
  async recover() {
    return __privateGet(this, _p4) ? await this.resume() ? true : await this.reload() : false;
  }
  async resume() {
    var _a11, _b5, _c12;
    if (!__privateGet(this, _p4) || !__privateGet(this, _e14)) return false;
    await this.purge();
    try {
      await __privateGet(this, _e14).resume();
    } catch {
    }
    (_a11 = __privateGet(this, _b4)) == null ? void 0 : _a11.startDriftTimer();
    let e = __privateMethod(this, _x_instances, z_fn).call(this);
    if (e === null) {
      let i = __privateGet(this, _e14).state === "running";
      return i && ((_b5 = __privateGet(this, _b4)) == null ? void 0 : _b5.resync(), __privateGet(this, _o4).emit("resumed")), i;
    }
    await new Promise((i) => setTimeout(i, 200));
    let s = __privateMethod(this, _x_instances, z_fn).call(this), r = s !== null && s > e;
    return r && ((_c12 = __privateGet(this, _b4)) == null ? void 0 : _c12.resync(), __privateGet(this, _o4).emit("resumed")), r;
  }
  async suspend() {
    var _a11, _b5;
    if (__privateGet(this, _p4)) {
      (_a11 = __privateGet(this, _b4)) == null ? void 0 : _a11.stopDriftTimer();
      try {
        await ((_b5 = __privateGet(this, _e14)) == null ? void 0 : _b5.suspend());
      } catch {
      }
    }
  }
  async reload() {
    var _a11;
    if (!__privateGet(this, _p4)) return false;
    __privateGet(this, _o4).emit("reload:start");
    let e = new Map(this.loadedSynthDefs), s = ((_a11 = __privateGet(this, _n8)) == null ? void 0 : _a11.getAllocatedBuffers()) || [];
    await __privateMethod(this, _x_instances, V_fn).call(this), await __privateMethod(this, _x_instances, j_fn).call(this);
    for (let [r, i] of e) try {
      await this.send("/d_recv", i);
    } catch (n) {
      console.error(`[SuperSonic] Failed to restore synthdef ${r}:`, n);
    }
    for (let r of s) try {
      if (__privateGet(this, _r4).mode === "postMessage" && r.source) r.source.type === "file" && await this.loadSample(r.bufnum, r.source.path, r.source.startFrame || 0, r.source.numFrames || 0);
      else {
        let i = crypto.randomUUID();
        await this.send("/b_allocPtr", r.bufnum, r.ptr, r.numFrames, r.numChannels, r.sampleRate, i);
      }
    } catch (i) {
      console.error(`[SuperSonic] Failed to restore buffer ${r.bufnum}:`, i);
    }
    return (e.size > 0 || s.length > 0) && await this.sync(), __privateGet(this, _o4).emit("reload:complete", { success: true }), true;
  }
  getRawTree() {
    if (!__privateGet(this, _p4)) return { nodeCount: 0, version: 0, droppedCount: 0, nodes: [] };
    let e = __privateGet(this, _g4).bufferConstants;
    if (!e) return { nodeCount: 0, version: 0, droppedCount: 0, nodes: [] };
    let s, r;
    if (__privateGet(this, _r4).mode === "postMessage") {
      let i = __privateGet(this, _g4).getSnapshotBuffer();
      if (!i) return { nodeCount: 0, version: 0, droppedCount: 0, nodes: [] };
      s = i, r = e.METRICS_SIZE;
    } else {
      let i = __privateGet(this, _g4).sharedBuffer;
      if (!i) return { nodeCount: 0, version: 0, droppedCount: 0, nodes: [] };
      s = i, r = __privateGet(this, _g4).ringBufferBase + e.NODE_TREE_START;
    }
    return $t(s, r, e);
  }
  getTree() {
    let e = this.getRawTree(), s = (n) => ({ id: n.id, type: n.isGroup ? "group" : "synth", defName: n.defName, children: [] }), r = /* @__PURE__ */ new Map();
    for (let n of e.nodes) r.set(n.id, s(n));
    let i = null;
    for (let n of e.nodes) {
      let a = r.get(n.id);
      if (n.parentId === -1 || n.parentId === 0 && n.id === 0) i = a;
      else {
        let o = r.get(n.parentId);
        o && o.children.push(a);
      }
    }
    return { nodeCount: e.nodeCount, version: e.version, droppedCount: e.droppedCount, root: i || { id: 0, type: "group", defName: "", children: [] } };
  }
  startCapture() {
    __privateMethod(this, _x_instances, M_fn).call(this, "start capture"), __privateGet(this, _C3).start();
  }
  stopCapture() {
    return __privateMethod(this, _x_instances, M_fn).call(this, "stop capture"), __privateGet(this, _C3).stop();
  }
  isCaptureEnabled() {
    return __privateGet(this, _C3).isEnabled();
  }
  getCaptureFrames() {
    return __privateGet(this, _C3).getFrameCount();
  }
  getMaxCaptureDuration() {
    return __privateGet(this, _C3).getMaxDuration();
  }
  send(e, ...s) {
    __privateMethod(this, _x_instances, M_fn).call(this, "send OSC messages");
    let r = { "/d_load": "Use loadSynthDef() or send /d_recv with synthdef bytes instead.", "/d_loadDir": "Use loadSynthDef() or send /d_recv with synthdef bytes instead.", "/b_read": "Use loadSample() to load audio into a buffer.", "/b_readChannel": "Use loadSample() to load audio into a buffer.", "/b_write": "Writing audio files is not available in the browser.", "/b_close": "Writing audio files is not available in the browser.", "/clearSched": "Use purge() to clear both the JS prescheduler and WASM scheduler.", "/error": "SuperSonic always enables error notifications so you never miss a /fail message.", "/quit": "Use destroy() to shut down SuperSonic." };
    if (r[e]) throw new Error(`${e} is not supported in SuperSonic. ${r[e]}`);
    if (e === "/d_recv") {
      let a = s[0];
      if (a instanceof Uint8Array || a instanceof ArrayBuffer) {
        let o = a instanceof ArrayBuffer ? new Uint8Array(a) : a, l = v(o) || "unknown";
        this.loadedSynthDefs.set(l, o);
      }
    }
    if (e === "/d_free") for (let a of s) typeof a == "string" && this.loadedSynthDefs.delete(a);
    else e === "/d_freeAll" && this.loadedSynthDefs.clear();
    let i = s.map((a) => a instanceof ArrayBuffer ? new Uint8Array(a) : a);
    if (es.has(e)) {
      __privateMethod(this, _x_instances, ie_fn).call(this, e, i), __privateMethod(this, _x_instances, ne_fn).call(this, e, i);
      return;
    }
    let n = _m.osc.encodeMessage(e, i);
    this.sendOSC(n);
  }
  sendOSC(e, s = {}) {
    __privateMethod(this, _x_instances, M_fn).call(this, "send OSC data");
    let r = __privateMethod(this, _x_instances, re_fn).call(this, e);
    __privateMethod(this, _x_instances, q_fn).call(this, r, s);
  }
  cancelTag(e) {
    __privateMethod(this, _x_instances, M_fn).call(this, "cancel by tag"), __privateGet(this, _a10).cancelTag(e);
  }
  cancelSession(e) {
    __privateMethod(this, _x_instances, M_fn).call(this, "cancel by session"), __privateGet(this, _a10).cancelSession(e);
  }
  cancelSessionTag(e, s) {
    __privateMethod(this, _x_instances, M_fn).call(this, "cancel by session and tag"), __privateGet(this, _a10).cancelSessionTag(e, s);
  }
  cancelAll() {
    __privateMethod(this, _x_instances, M_fn).call(this, "cancel all scheduled"), __privateGet(this, _a10).cancelAll();
  }
  async purge() {
    __privateMethod(this, _x_instances, M_fn).call(this, "purge");
    let e = __privateGet(this, _a10).cancelAllWithAck(), s = new Promise((r) => {
      let i = (n) => {
        n.data.type === "clearSchedAck" && (__privateGet(this, _s11).port.removeEventListener("message", i), r());
      };
      __privateGet(this, _s11).port.addEventListener("message", i), __privateGet(this, _s11).port.postMessage({ type: "clearSched", ack: true });
    });
    await Promise.all([e, s]);
  }
  createOscChannel(e = {}) {
    return __privateMethod(this, _x_instances, M_fn).call(this, "create OSC channel"), __privateGet(this, _a10).createOscChannel(e);
  }
  nextNodeId() {
    return __privateMethod(this, _x_instances, M_fn).call(this, "allocate node IDs"), __privateGet(this, _B).nextNodeId();
  }
  async loadSynthDef(e) {
    __privateMethod(this, _x_instances, M_fn).call(this, "load synthdef");
    let s, r;
    if (typeof e == "string") {
      let i;
      if (__privateMethod(this, _x_instances, se_fn).call(this, e)) i = e;
      else {
        if (!__privateGet(this, _d7)) throw new Error("synthdefBaseURL not configured.");
        i = `${__privateGet(this, _d7)}${e}.scsyndef`;
      }
      let n = v(i), a = await __privateGet(this, _S4).fetch(i, { type: "synthdef", name: n });
      s = new Uint8Array(a), r = v(s) || n;
    } else if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) {
      if (s = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = v(s), !r) throw new Error("Could not extract synthdef name from binary data. Make sure it's a valid .scsyndef file.");
    } else if (e instanceof Blob) {
      let i = await e.arrayBuffer();
      if (s = new Uint8Array(i), r = v(s), !r) throw new Error("Could not extract synthdef name from file. Make sure it's a valid .scsyndef file.");
    } else throw new Error("loadSynthDef source must be a name, path/URL string, ArrayBuffer, Uint8Array, or File/Blob");
    return await this.send("/d_recv", s), { name: r, size: s.length };
  }
  async loadSynthDefs(e) {
    __privateMethod(this, _x_instances, M_fn).call(this, "load synthdefs");
    let s = {};
    return await Promise.all(e.map(async (r) => {
      try {
        await this.loadSynthDef(r), s[r] = { success: true };
      } catch (i) {
        s[r] = { success: false, error: i.message };
      }
    })), s;
  }
  async loadSample(e, s, r = 0, i = 0) {
    __privateMethod(this, _x_instances, M_fn).call(this, "load samples");
    let n;
    if (typeof s == "string") n = await __privateGet(this, _n8).prepareFromFile({ bufnum: e, path: s, startFrame: r, numFrames: i });
    else if (s instanceof ArrayBuffer || ArrayBuffer.isView(s)) n = await __privateGet(this, _n8).prepareFromBlob({ bufnum: e, blob: s, startFrame: r, numFrames: i });
    else if (s instanceof Blob) {
      let h = await s.arrayBuffer();
      n = await __privateGet(this, _n8).prepareFromBlob({ bufnum: e, blob: h, startFrame: r, numFrames: i });
    } else throw new Error("loadSample source must be a path/URL string, ArrayBuffer, TypedArray, or File/Blob");
    await this.send("/b_allocPtr", e, n.ptr, n.numFrames, n.numChannels, n.sampleRate, n.uuid), await n.allocationComplete;
    let { numFrames: a, numChannels: o, sampleRate: l } = n;
    return { bufnum: e, hash: n.hash, source: typeof s == "string" ? s : null, numFrames: a, numChannels: o, sampleRate: l, duration: l > 0 ? a / l : 0 };
  }
  getLoadedBuffers() {
    var _a11;
    return __privateMethod(this, _x_instances, M_fn).call(this, "get loaded buffers"), (((_a11 = __privateGet(this, _n8)) == null ? void 0 : _a11.getAllocatedBuffers()) || []).map(({ bufnum: e, numFrames: s, numChannels: r, sampleRate: i, source: n, hash: a }) => ({ bufnum: e, hash: a || null, source: (n == null ? void 0 : n.path) || (n == null ? void 0 : n.name) || null, numFrames: s, numChannels: r, sampleRate: i, duration: i > 0 ? s / i : 0 }));
  }
  async sampleInfo(e, s = 0, r = 0) {
    __privateMethod(this, _x_instances, M_fn).call(this, "get sample info");
    let i;
    if (typeof e == "string") i = e;
    else if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) i = e;
    else if (e instanceof Blob) i = await e.arrayBuffer();
    else throw new Error("sampleInfo source must be a path/URL string, ArrayBuffer, TypedArray, or File/Blob");
    return __privateGet(this, _n8).sampleInfo({ source: i, startFrame: s, numFrames: r });
  }
  async sync(e = Math.floor(Math.random() * 2147483647)) {
    __privateMethod(this, _x_instances, M_fn).call(this, "sync"), await __privateMethod(this, _x_instances, ae_fn).call(this);
    let s = new Promise((r, i) => {
      let n = setTimeout(() => {
        var _a11;
        (_a11 = __privateGet(this, _u8)) == null ? void 0 : _a11.delete(e), i(new Error("Timeout waiting for /synced response"));
      }, Qt), a = () => {
        clearTimeout(n), __privateGet(this, _u8).delete(e), r();
      };
      __privateGet(this, _u8) || __privateSet(this, _u8, /* @__PURE__ */ new Map()), __privateGet(this, _u8).set(e, a);
    });
    this.send("/sync", e), await s, __privateGet(this, _r4).mode === "postMessage" && await new Promise((r) => setTimeout(r, __privateGet(this, _r4).snapshotIntervalMs * 2));
  }
  getInfo() {
    return __privateMethod(this, _x_instances, M_fn).call(this, "get info"), { sampleRate: __privateGet(this, _e14).sampleRate, numBuffers: __privateGet(this, _r4).worldOptions.numBuffers, totalMemory: __privateGet(this, _r4).memory.totalMemory, wasmHeapSize: __privateGet(this, _r4).memory.wasmHeapSize, bufferPoolSize: __privateGet(this, _r4).memory.bufferPoolSize, bootTimeMs: this.bootStats.initDuration, capabilities: { ...__privateGet(this, _k5) }, version: __privateGet(this, _y4) };
  }
  async shutdown() {
    var _a11, _b5, _c12, _d8, _e15;
    !__privateGet(this, _p4) && !__privateGet(this, _f5) || (__privateGet(this, _o4).emit("shutdown"), (_a11 = __privateGet(this, _b4)) == null ? void 0 : _a11.stopDriftTimer(), (_b5 = __privateGet(this, _A)) == null ? void 0 : _b5.reset(), __privateSet(this, _A, null), (_c12 = __privateGet(this, _u8)) == null ? void 0 : _c12.clear(), __privateSet(this, _u8, null), __privateGet(this, _a10) && (__privateGet(this, _a10).cancelAll(), __privateGet(this, _a10).dispose(), __privateSet(this, _a10, null)), __privateGet(this, _s11) && (__privateGet(this, _s11).disconnect(), __privateSet(this, _s11, null)), __privateGet(this, _e14) && (await __privateGet(this, _e14).close(), __privateSet(this, _e14, null)), __privateGet(this, _n8) && (__privateGet(this, _n8).destroy(), __privateSet(this, _n8, null)), __privateSet(this, _i9, null), __privateSet(this, _B, null), __privateSet(this, _U, Promise.resolve()), __privateSet(this, _p4, false), this.loadedSynthDefs.clear(), __privateSet(this, _m5, null), __privateSet(this, _l9, null), (_d8 = __privateGet(this, _b4)) == null ? void 0 : _d8.reset(), (_e15 = __privateGet(this, _A)) == null ? void 0 : _e15.reset(), this.bootStats = { initStartTime: null, initDuration: null });
  }
  async destroy() {
    __privateGet(this, _o4).emit("destroy"), await this.shutdown(), __privateSet(this, _I, null), __privateGet(this, _o4).clearAllListeners();
  }
  async reset() {
    await this.shutdown(), await this.init();
  }
}, _t14 = new WeakMap(), _e14 = new WeakMap(), _s11 = new WeakMap(), _c11 = new WeakMap(), _a10 = new WeakMap(), _l9 = new WeakMap(), _n8 = new WeakMap(), _i9 = new WeakMap(), _u8 = new WeakMap(), _h8 = new WeakMap(), _d7 = new WeakMap(), _w5 = new WeakMap(), _S4 = new WeakMap(), _p4 = new WeakMap(), _f5 = new WeakMap(), _m5 = new WeakMap(), _k5 = new WeakMap(), _y4 = new WeakMap(), _r4 = new WeakMap(), _o4 = new WeakMap(), _g4 = new WeakMap(), _b4 = new WeakMap(), _C3 = new WeakMap(), _A = new WeakMap(), _B = new WeakMap(), _E = new WeakMap(), _T = new WeakMap(), _I = new WeakMap(), _R = new WeakMap(), _v = new WeakMap(), __ = new WeakMap(), _U = new WeakMap(), _x_instances = new WeakSet(), G_fn = function(e) {
  let s = [["numBuffers", 1, 65535], ["maxNodes", 1], ["maxGraphDefs", 1], ["maxWireBufs", 1], ["numAudioBusChannels", 1], ["numInputBusChannels", 0], ["numOutputBusChannels", 1, 128], ["numControlBusChannels", 1], ["realTimeMemorySize", 1], ["numRGens", 1], ["preferredSampleRate", 0, 384e3], ["verbosity", 0, 4]];
  for (let [r, i, n] of s) {
    let a = e[r];
    if (typeof a != "number" || !Number.isFinite(a)) throw new Error(`scsynthOptions.${r} must be a finite number, got: ${a}`);
    if (a < i) throw new Error(`scsynthOptions.${r} must be >= ${i}, got: ${a}`);
    if (n !== void 0 && a > n) throw new Error(`scsynthOptions.${r} must be <= ${n}, got: ${a}`);
  }
  if (e.bufLength !== 128) throw new Error(`scsynthOptions.bufLength must be 128 (WebAudio API constraint), got: ${e.bufLength}`);
  for (let r of ["realTime", "memoryLocking"]) if (typeof e[r] != "boolean") throw new Error(`scsynthOptions.${r} must be a boolean, got: ${typeof e[r]}`);
  if (e.loadGraphDefs !== 0 && e.loadGraphDefs !== 1) throw new Error(`scsynthOptions.loadGraphDefs must be 0 or 1, got: ${e.loadGraphDefs}`);
  if (e.preferredSampleRate !== 0 && e.preferredSampleRate < 8e3) throw new Error(`scsynthOptions.preferredSampleRate must be 0 (auto) or >= 8000, got: ${e.preferredSampleRate}`);
}, W_fn = function(e) {
  let s = e ? { ..._, ...e } : { ..._ };
  return s.totalMemory = s.bufferPoolOffset + s.bufferPoolSize, s.maxTotalMemory = s.bufferPoolOffset + s.maxBufferPoolSize, s.wasmHeapSize = s.bufferPoolOffset - s.ringBufferReserved, s;
}, H_fn = async function() {
  __privateSet(this, _f5, true), this.bootStats.initStartTime = performance.now();
  try {
    __privateMethod(this, _x_instances, Z_fn).call(this), __privateMethod(this, _x_instances, J_fn).call(this), __privateMethod(this, _x_instances, x_fn).call(this), __privateMethod(this, _x_instances, K_fn).call(this), __privateMethod(this, _x_instances, F_fn).call(this);
    let e = await __privateMethod(this, _x_instances, P_fn).call(this);
    await __privateMethod(this, _x_instances, D_fn).call(this, e), await __privateMethod(this, _x_instances, L_fn).call(this), await __privateMethod(this, _x_instances, N_fn).call(this);
  } catch (e) {
    throw __privateSet(this, _f5, false), __privateSet(this, _m5, null), console.error("[SuperSonic] Initialization failed:", e), __privateGet(this, _o4).emit("error", e), e;
  }
}, V_fn = async function() {
  var _a11, _b5, _c12, _d8;
  (_a11 = __privateGet(this, _b4)) == null ? void 0 : _a11.stopDriftTimer(), (_b5 = __privateGet(this, _u8)) == null ? void 0 : _b5.clear(), __privateSet(this, _u8, null), __privateGet(this, _a10) && (__privateGet(this, _a10).cancelAll(), __privateGet(this, _a10).dispose(), __privateSet(this, _a10, null)), __privateGet(this, _s11) && (__privateGet(this, _s11).disconnect(), __privateSet(this, _s11, null)), __privateGet(this, _e14) && (await __privateGet(this, _e14).close(), __privateSet(this, _e14, null)), __privateSet(this, _p4, false), this.loadedSynthDefs.clear(), __privateSet(this, _m5, null), __privateSet(this, _B, null), (_c12 = __privateGet(this, _b4)) == null ? void 0 : _c12.reset(), (_d8 = __privateGet(this, _A)) == null ? void 0 : _d8.reset();
}, j_fn = async function() {
  __privateSet(this, _f5, true), this.bootStats.initStartTime = performance.now();
  try {
    __privateMethod(this, _x_instances, x_fn).call(this), __privateGet(this, _n8) && __privateGet(this, _n8).updateAudioContext(__privateGet(this, _e14)), __privateMethod(this, _x_instances, F_fn).call(this);
    let e = await __privateMethod(this, _x_instances, P_fn).call(this);
    await __privateMethod(this, _x_instances, D_fn).call(this, e), await __privateMethod(this, _x_instances, L_fn).call(this), await __privateMethod(this, _x_instances, N_fn).call(this);
  } catch (e) {
    throw __privateSet(this, _f5, false), __privateSet(this, _m5, null), console.error("[SuperSonic] Partial init failed:", e), __privateGet(this, _o4).emit("error", e), e;
  }
}, Z_fn = function() {
  __privateSet(this, _k5, { audioWorklet: typeof AudioWorklet < "u", sharedArrayBuffer: typeof SharedArrayBuffer < "u", crossOriginIsolated: window.crossOriginIsolated === true, atomics: typeof Atomics < "u", webWorker: typeof Worker < "u", playbackStats: typeof AudioContext < "u" && "playbackStats" in AudioContext.prototype });
  let e = __privateGet(this, _r4).mode, s = ["audioWorklet", "webWorker"];
  e === "sab" && s.push("sharedArrayBuffer", "crossOriginIsolated", "atomics");
  let r = s.filter((i) => !__privateGet(this, _k5)[i]);
  if (r.length > 0) {
    let i = new Error(`Missing required features for ${e} mode: ${r.join(", ")}`);
    throw e === "sab" && !__privateGet(this, _k5).crossOriginIsolated && (i.message += `

Consider using mode: 'postMessage' which doesn't require COOP/COEP headers.`), i;
  }
  if (e !== "sab" && e !== "postMessage") throw new Error(`Invalid mode: '${e}'. Use 'sab' or 'postMessage'.`);
}, J_fn = function() {
  let e = __privateGet(this, _r4).memory;
  if (__privateGet(this, _r4).mode === "sab") {
    let s = _.totalPages, r = Math.max(Math.ceil(e.totalMemory / 65536), s), i = Math.ceil(e.maxTotalMemory / 65536);
    __privateSet(this, _l9, new WebAssembly.Memory({ initial: r, maximum: i, shared: true }));
  } else __privateSet(this, _l9, null);
}, x_fn = function() {
  __privateGet(this, _r4).audioContext ? __privateSet(this, _e14, __privateGet(this, _r4).audioContext) : __privateSet(this, _e14, new AudioContext(__privateGet(this, _r4).audioContextOptions)), __privateGet(this, _e14).addEventListener("statechange", () => {
    var _a11, _b5, _c12, _d8, _e15;
    let e = (_a11 = __privateGet(this, _e14)) == null ? void 0 : _a11.state;
    if (!e) return;
    let s = __privateGet(this, _T);
    __privateSet(this, _T, e), e === "running" && (s === "suspended" || s === "interrupted") && ((_b5 = __privateGet(this, _b4)) == null ? void 0 : _b5.resync()), __privateGet(this, _o4).emit("audiocontext:statechange", { state: e }), e === "suspended" ? (__privateGet(this, _o4).emit("audiocontext:suspended"), (_c12 = __privateGet(this, _A)) == null ? void 0 : _c12.reset()) : e === "running" ? (__privateGet(this, _o4).emit("audiocontext:resumed"), (_d8 = __privateGet(this, _A)) == null ? void 0 : _d8.reset()) : e === "interrupted" && (__privateGet(this, _o4).emit("audiocontext:interrupted"), (_e15 = __privateGet(this, _A)) == null ? void 0 : _e15.reset());
  }), __privateSet(this, _A, new Lt({ audioContext: __privateGet(this, _e14) }));
}, K_fn = function() {
  let e = __privateGet(this, _r4).mode === "sab" ? __privateGet(this, _l9).buffer : null;
  __privateSet(this, _n8, new Rt({ mode: __privateGet(this, _r4).mode, audioContext: __privateGet(this, _e14), sharedBuffer: e, bufferPoolConfig: { start: __privateGet(this, _r4).memory.bufferPoolOffset, size: __privateGet(this, _r4).memory.bufferPoolSize, maxSize: __privateGet(this, _r4).effectiveMaxBufferMemory }, sampleBaseURL: __privateGet(this, _h8), maxBuffers: __privateGet(this, _r4).worldOptions.numBuffers, assetLoader: __privateGet(this, _S4), wasmMemory: __privateGet(this, _l9), maxBufferMemory: __privateGet(this, _r4).effectiveMaxBufferMemory, bufferGrowIncrement: __privateGet(this, _r4).bufferGrowIncrement, growFn: __privateGet(this, _r4).mode === "postMessage" ? (s) => __privateMethod(this, _x_instances, Y_fn).call(this, s) : null, onBufferPoolGrowth: (s) => {
    __privateGet(this, _o4).emit("buffer:pool:grown", s);
  } }));
}, F_fn = function() {
  __privateSet(this, _i9, new Ot({ bufferManager: __privateGet(this, _n8), getDefaultSampleRate: () => {
    var _a11;
    return ((_a11 = __privateGet(this, _e14)) == null ? void 0 : _a11.sampleRate) || 44100;
  } }));
}, P_fn = async function() {
  if (__privateGet(this, _I)) return __privateGet(this, _I);
  let e = __privateGet(this, _r4).wasmUrl.split("/").pop();
  if (__privateGet(this, _r4).wasmBytes) {
    let r = __privateGet(this, _r4).wasmBytes;
    return __privateGet(this, _o4).emit("loading:start", { type: "wasm", name: e, size: r.byteLength }), __privateGet(this, _o4).emit("loading:complete", { type: "wasm", name: e, size: r.byteLength }), __privateSet(this, _I, r), r;
  }
  let s = await __privateGet(this, _S4).fetch(__privateGet(this, _r4).wasmUrl, { type: "wasm", name: e });
  return __privateSet(this, _I, s), s;
}, D_fn = async function(e) {
  await Ye(__privateGet(this, _e14).audioWorklet, __privateGet(this, _r4).workletUrl);
  let s = __privateGet(this, _r4).worldOptions.numOutputBusChannels;
  if (__privateSet(this, _s11, new AudioWorkletNode(__privateGet(this, _e14), "scsynth-processor", { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [s] })), __privateGet(this, _r4).autoConnect) {
    let a = __privateGet(this, _e14).destination;
    s > 2 && (a.channelCount = Math.min(s, a.maxChannelCount), a.channelInterpretation = "discrete"), __privateGet(this, _s11).connect(a);
  }
  __privateSet(this, _c11, __privateMethod(this, _x_instances, Q_fn).call(this)), __privateGet(this, _s11).port.start(), __privateMethod(this, _x_instances, ee_fn).call(this);
  let r = __privateGet(this, _r4).mode, i = r === "sab" ? __privateGet(this, _l9).buffer : null;
  __privateGet(this, _s11).port.postMessage({ type: "init", mode: r, sharedBuffer: i, snapshotIntervalMs: __privateGet(this, _r4).snapshotIntervalMs });
  let n = { type: "loadWasm", wasmBytes: e, worldOptions: __privateGet(this, _r4).worldOptions, sampleRate: __privateGet(this, _e14).sampleRate };
  if (r === "sab") n.wasmMemory = __privateGet(this, _l9);
  else {
    let a = _.totalPages;
    n.memoryPages = Math.max(Math.ceil(__privateGet(this, _r4).memory.totalMemory / 65536), a), n.maxMemoryPages = Math.ceil(__privateGet(this, _r4).memory.maxTotalMemory / 65536);
  }
  __privateGet(this, _s11).port.postMessage(n), await __privateMethod(this, _x_instances, X_fn).call(this), __privateGet(this, _n8).setWorkletPort(__privateGet(this, _s11).port);
}, Q_fn = function() {
  let e = __privateGet(this, _s11);
  return Object.freeze({ connect: (...s) => e.connect(...s), disconnect: (...s) => e.disconnect(...s), get context() {
    return e.context;
  }, get numberOfOutputs() {
    return e.numberOfOutputs;
  }, get numberOfInputs() {
    return e.numberOfInputs;
  }, get channelCount() {
    return e.channelCount;
  }, get input() {
    return e;
  } });
}, L_fn = async function() {
  var _a11;
  let e = __privateGet(this, _r4).mode, s = __privateGet(this, _g4).bufferConstants, r = __privateGet(this, _g4).ringBufferBase, i = __privateGet(this, _g4).sharedBuffer, n = { workerBaseURL: __privateGet(this, _r4).workerBaseURL, preschedulerCapacity: __privateGet(this, _r4).preschedulerCapacity, snapshotIntervalMs: __privateGet(this, _r4).snapshotIntervalMs, bypassLookaheadS: __privateGet(this, _r4).bypassLookaheadMs / 1e3, getAudioContextTime: () => {
    var _a12;
    return ((_a12 = __privateGet(this, _e14)) == null ? void 0 : _a12.currentTime) ?? 0;
  }, getNTPStartTime: () => {
    var _a12;
    return ((_a12 = __privateGet(this, _b4)) == null ? void 0 : _a12.getNTPStartTime()) ?? 0;
  } };
  if (e === "sab") {
    if (n.sharedBuffer = i, n.ringBufferBase = r, n.bufferConstants = s, (s == null ? void 0 : s.NODE_ID_COUNTER_START) !== void 0) {
      let a = r + s.NODE_ID_COUNTER_START, o = new Int32Array(i, a, 1);
      Atomics.store(o, 0, 1e3);
    }
  } else {
    __privateSet(this, _E, 1e3), n.nodeIdSource = (u) => {
      let c = __privateGet(this, _E);
      return __privateSet(this, _E, __privateGet(this, _E) + u), { from: c, to: c + u };
    };
    let a = 1e4, o = n.nodeIdSource(a), l = new MessageChannel(), h = n.nodeIdSource;
    l.port1.onmessage = (u) => {
      if (u.data.type === "requestNodeIdRange") {
        let c = h(a);
        l.port1.postMessage({ type: "nodeIdRange", from: c.from, to: c.to });
      }
    }, __privateGet(this, _s11).port.postMessage({ type: "nodeIdRange", from: o.from, to: o.to }, [l.port2]);
  }
  if (__privateSet(this, _a10, ct(e, n)), __privateGet(this, _a10).onReply((a, o, l) => {
    var _a12, _b5, _c12;
    let h = Ce(a) || null;
    __privateGet(this, _o4).emit("in:osc", { oscData: a, sequence: o, timestamp: l, scheduledTime: h });
    try {
      let u = O(a), c = u[0], d = u.slice(1);
      if (c === "/supersonic/buffer/freed") (_a12 = __privateGet(this, _n8)) == null ? void 0 : _a12.handleBufferFreed(d);
      else if (c === "/supersonic/buffer/allocated") (_b5 = __privateGet(this, _n8)) == null ? void 0 : _b5.handleBufferAllocated(d);
      else if (c === "/synced" && d.length > 0) {
        let m = d[0];
        ((_c12 = __privateGet(this, _u8)) == null ? void 0 : _c12.has(m)) && __privateGet(this, _u8).get(m)(u);
      }
      if (__privateGet(this, _o4).emit("in", u), __privateGet(this, _o4).hasListeners("in:text") || __privateGet(this, _r4).debug || __privateGet(this, _r4).debugOscIn) {
        let m = __privateGet(this, _r4).activityEvent.oscInMaxLineLength ?? __privateGet(this, _r4).activityEvent.maxLineLength, y = d.map((b) => Ee(b, m)).join(", ") || "", p = `${c}${y ? " " + y : ""}`;
        __privateGet(this, _o4).emit("in:text", { text: p, sequence: o, timestamp: l });
      }
      if (__privateGet(this, _o4).hasListeners("in:html")) {
        let m = le(u, o, l, this.initTime);
        __privateGet(this, _o4).emit("in:html", { html: m, sequence: o, timestamp: l });
      }
    } catch (u) {
      console.error("[SuperSonic] Failed to decode OSC message:", u);
    }
  }), __privateGet(this, _a10).onDebug((a) => {
    var _a12;
    let o = __privateGet(this, _r4).activityEvent.scsynthMaxLineLength ?? __privateGet(this, _r4).activityEvent.maxLineLength;
    o > 0 && ((_a12 = a.text) == null ? void 0 : _a12.length) > o && (a = { ...a, text: a.text.slice(0, o) + "..." }), __privateGet(this, _o4).emit("debug", a);
  }), __privateGet(this, _a10).onError((a, o) => {
    console.error(`[SuperSonic] ${o} error:`, a), __privateGet(this, _o4).emit("error", new Error(`${o}: ${a}`));
  }), __privateGet(this, _a10).onOscLog((a) => {
    for (let o of a) {
      let l = Ce(o.oscData) || null;
      if (__privateGet(this, _o4).emit("out:osc", { oscData: o.oscData, sourceId: o.sourceId, sequence: o.sequence, timestamp: o.timestamp, scheduledTime: l }), __privateGet(this, _o4).hasListeners("out") || __privateGet(this, _o4).hasListeners("out:text") || __privateGet(this, _o4).hasListeners("out:html") || __privateGet(this, _r4).debug || __privateGet(this, _r4).debugOscOut) try {
        let h = O(o.oscData);
        if (__privateGet(this, _o4).emit("out", h), __privateGet(this, _o4).hasListeners("out:text") || __privateGet(this, _r4).debug || __privateGet(this, _r4).debugOscOut) {
          let u = __privateGet(this, _r4).activityEvent.oscOutMaxLineLength ?? __privateGet(this, _r4).activityEvent.maxLineLength, c = h[0], d = h.slice(1).map((y) => Ee(y, u)).join(", "), m = `${c}${d ? " " + d : ""}`;
          __privateGet(this, _o4).emit("out:text", { text: m, sequence: o.sequence, timestamp: o.timestamp });
        }
        if (__privateGet(this, _o4).hasListeners("out:html")) {
          let u = ss(h, o.sequence, o.timestamp, this.initTime, o.sourceId);
          __privateGet(this, _o4).emit("out:html", { html: u, sequence: o.sequence, timestamp: o.timestamp });
        }
      } catch {
      }
    }
  }), (__privateGet(this, _r4).debug || __privateGet(this, _r4).debugOscIn) && this.on("in:text", ({ text: a }) => console.log(`[\u2190 OSC] ${a}`)), (__privateGet(this, _r4).debug || __privateGet(this, _r4).debugOscOut) && this.on("out:text", ({ text: a }) => console.log(`[OSC \u2192] ${a}`)), (__privateGet(this, _r4).debug || __privateGet(this, _r4).debugScsynth) && this.on("debug", (a) => console.log(`[synth] ${a.text}`)), e === "sab") await __privateGet(this, _a10).initialize();
  else {
    if (await __privateGet(this, _a10).initialize(__privateGet(this, _s11).port), __privateGet(this, _a10).setBufferConstants(s), ((_a11 = __privateGet(this, _v)) == null ? void 0 : _a11.length) > 0) for (let a of __privateGet(this, _v)) __privateGet(this, _a10).handleDebugRaw(a);
    __privateSet(this, __, (a) => __privateGet(this, _a10).handleDebugRaw(a)), __privateSet(this, _v, []);
  }
  __privateSet(this, _B, __privateGet(this, _a10).createOscChannel({ sourceId: 0 }));
}, N_fn = async function() {
  __privateSet(this, _p4, true), __privateSet(this, _f5, false), this.bootStats.initDuration = performance.now() - this.bootStats.initStartTime, await __privateGet(this, _o4).emitAsync("setup"), __privateGet(this, _o4).emit("ready", { capabilities: __privateGet(this, _k5), bootStats: this.bootStats });
}, X_fn = function() {
  return new Promise((e, s) => {
    let r = setTimeout(() => {
      s(new Error("AudioWorklet initialization timeout"));
    }, Xt), i = async (n) => {
      var _a11;
      if (n.data.type === "error") {
        clearTimeout(r), __privateGet(this, _s11).port.removeEventListener("message", i), s(new Error(n.data.error || "AudioWorklet error"));
        return;
      }
      if (n.data.type === "initialized") if (clearTimeout(r), __privateGet(this, _s11).port.removeEventListener("message", i), n.data.success) {
        let a = n.data.ringBufferBase ?? 0, o = n.data.bufferConstants, l = __privateGet(this, _r4).mode === "sab" ? __privateGet(this, _l9).buffer : null;
        __privateGet(this, _g4).initSharedViews(l, a, o);
        let h = ((_a11 = __privateGet(this, _r4).worldOptions) == null ? void 0 : _a11.maxNodes) ?? 1024, u = (o == null ? void 0 : o.NODE_TREE_MIRROR_MAX_NODES) ?? 1024;
        h > u && console.warn(`SuperSonic: maxNodes (${h}) exceeds NODE_TREE_MIRROR_MAX_NODES (${u}). The node tree mirror will not show all nodes. Rebuild with NODE_TREE_MIRROR_MAX_NODES=${h} to fix.`), __privateSet(this, _b4, new Dt({ mode: __privateGet(this, _r4).mode, audioContext: __privateGet(this, _e14), workletPort: __privateGet(this, _s11).port })), __privateGet(this, _b4).initSharedViews(l, a, o), await __privateGet(this, _b4).initialize(), __privateGet(this, _b4).startDriftTimer(), __privateGet(this, _r4).mode === "sab" && __privateGet(this, _C3).update(l, a, o), __privateGet(this, _r4).mode === "postMessage" && n.data.initialSnapshot && __privateGet(this, _g4).updateSnapshot(n.data.initialSnapshot), e();
      } else s(new Error(n.data.error || "AudioWorklet initialization failed"));
    };
    __privateGet(this, _s11).port.addEventListener("message", i), __privateGet(this, _s11).port.start();
  });
}, Y_fn = function(e) {
  return new Promise((s) => {
    let r = crypto.randomUUID(), i = (n) => {
      n.data.type === "memoryGrown" && n.data.growId === r && (__privateGet(this, _s11).port.removeEventListener("message", i), s(n.data.success));
    };
    __privateGet(this, _s11).port.addEventListener("message", i), __privateGet(this, _s11).port.postMessage({ type: "growMemory", growId: r, pages: e });
  });
}, ee_fn = function() {
  __privateGet(this, _s11).port.addEventListener("message", (e) => {
    let { data: s } = e;
    switch (s.type) {
      case "error":
        console.error("[Worklet] Error:", s.error), __privateGet(this, _o4).emit("error", new Error(s.error));
        break;
      case "version":
        __privateSet(this, _y4, s.version);
        break;
      case "snapshot":
        s.buffer && (__privateGet(this, _g4).updateSnapshot(s.buffer), __privateSet(this, _R, s.snapshotsSent));
        break;
      case "debugRawBatch":
        __privateGet(this, __) ? __privateGet(this, __).call(this, s) : __privateGet(this, _v).push(s);
        break;
    }
  });
}, $_fn = function() {
  var _a11, _b5, _c12, _d8, _e15, _f6, _g5, _h9, _i10, _j2, _k6;
  return { preschedulerMetrics: (_a11 = __privateGet(this, _a10)) == null ? void 0 : _a11.getPreschedulerMetrics(), transportMetrics: (_b5 = __privateGet(this, _a10)) == null ? void 0 : _b5.getMetrics(), driftOffsetMs: ((_c12 = __privateGet(this, _b4)) == null ? void 0 : _c12.getDriftOffset()) ?? 0, ntpStartTime: ((_d8 = __privateGet(this, _b4)) == null ? void 0 : _d8.getNTPStartTime()) ?? 0, clockOffsetMs: ((_e15 = __privateGet(this, _b4)) == null ? void 0 : _e15.getClockOffset()) ?? 0, audioContextState: ((_f6 = __privateGet(this, _e14)) == null ? void 0 : _f6.state) || "unknown", bufferPoolStats: (_g5 = __privateGet(this, _n8)) == null ? void 0 : _g5.getStats(), bufferPoolGrowthStats: (_h9 = __privateGet(this, _n8)) == null ? void 0 : _h9.getGrowthStats(), loadedSynthDefsCount: ((_i10 = this.loadedSynthDefs) == null ? void 0 : _i10.size) || 0, preschedulerCapacity: __privateGet(this, _r4).preschedulerCapacity, audioHealthPct: ((_j2 = __privateGet(this, _A)) == null ? void 0 : _j2.update()) ?? 100, playbackStats: __privateGet(this, _k5).playbackStats ? (_k6 = __privateGet(this, _e14)) == null ? void 0 : _k6.playbackStats : null };
}, O_fn = function() {
  return __privateGet(this, _g4).gatherMetrics(__privateMethod(this, _x_instances, $_fn).call(this));
}, te_fn = function() {
  __privateGet(this, _g4).updateMergedArray(__privateMethod(this, _x_instances, $_fn).call(this));
}, z_fn = function() {
  if (__privateGet(this, _r4).mode === "sab") {
    let s = __privateGet(this, _g4).getMetricsView();
    return s ? s[0] : null;
  }
  let e = __privateGet(this, _g4).getSnapshotBuffer();
  return e ? new Uint32Array(e, 0, 1)[0] : null;
}, M_fn = function(e = "perform this operation") {
  if (!__privateGet(this, _p4)) throw new Error(`SuperSonic not initialized. Call init() before attempting to ${e}.`);
}, se_fn = function(e) {
  return e.includes("/") || e.includes("://");
}, re_fn = function(e) {
  if (e instanceof Uint8Array) return e;
  if (e instanceof ArrayBuffer) return new Uint8Array(e);
  throw new Error("oscData must be ArrayBuffer or Uint8Array");
}, q_fn = function(e, s = {}) {
  var _a11;
  let r = __privateGet(this, _B).classify(e);
  if (xe(r)) __privateGet(this, _r4).mode === "sab" ? __privateGet(this, _B).send(e) : __privateGet(this, _a10).sendImmediate(e, r);
  else {
    let i = (_a11 = __privateGet(this, _g4).bufferConstants) == null ? void 0 : _a11.scheduler_slot_size;
    if (i && e.length > i) throw new Error(`OSC bundle too large to schedule (${e.length} > ${i} bytes). Use immediate timestamp (0 or 1) for large messages, or reduce bundle size.`);
    __privateGet(this, _a10).sendWithOptions(e, s);
  }
}, ie_fn = function(e, s) {
  let r = (a, o) => {
    let l = s[a];
    if (!Number.isFinite(l)) throw new Error(o);
  }, i = (a, o) => {
    if (typeof s[a] != "string") throw new Error(o);
  }, n = (a, o) => {
    let l = s[a];
    if (!(l instanceof Uint8Array || l instanceof ArrayBuffer)) throw new Error(o);
  };
  switch (e) {
    case "/b_alloc":
      r(0, "/b_alloc requires a buffer number"), r(1, "/b_alloc requires a frame count");
      break;
    case "/b_allocRead":
      r(0, "/b_allocRead requires a buffer number"), i(1, "/b_allocRead requires a file path");
      break;
    case "/b_allocReadChannel":
      r(0, "/b_allocReadChannel requires a buffer number"), i(1, "/b_allocReadChannel requires a file path");
      break;
    case "/b_allocFile":
      r(0, "/b_allocFile requires a buffer number"), n(1, "/b_allocFile requires audio file data as blob");
      break;
  }
}, ne_fn = function(e, s) {
  __privateSet(this, _U, __privateGet(this, _U).then(async () => {
    let r = [e, ...s], { packet: i } = await __privateGet(this, _i9).rewritePacket(r), n = _m.osc.encodeMessage(i[0], i.slice(1));
    __privateMethod(this, _x_instances, q_fn).call(this, n);
  }).catch((r) => {
    console.error(`[SuperSonic] Buffer command ${e} failed:`, r), __privateGet(this, _o4).emit("error", r);
  }));
}, ae_fn = function() {
  return __privateGet(this, _U);
}, __publicField(_m, "osc", { encodeMessage: (e, s) => Y(Wt(e, s)), encodeBundle: (e, s) => Y(Ht(e, s)), decode: (e) => O(e), encodeSingleBundle: (e, s, r) => Y(Vt(e, s, r)), readTimetag: (e) => Oe(e), ntpNow: () => U(), NTP_EPOCH_OFFSET: $e }), __privateAdd(_m, _t14, null), _m), is = rs.osc;
export {
  Fe as OscChannel,
  rs as SuperSonic,
  is as osc
};
