/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Cx = "182", Rx = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Ix = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, rd = 0, fc = 1, od = 2, Px = 3, Lx = 0, qr = 1, ad = 2, Ps = 3, Ki = 0, Xt = 1, Pi = 2, Ni = 0, ns = 1, pc = 2, mc = 3, gc = 4, ld = 5, vn = 100, cd = 101, hd = 102, ud = 103, dd = 104, fd = 200, pd = 201, md = 202, gd = 203, Sa = 204, ba = 205, _d = 206, vd = 207, xd = 208, yd = 209, Md = 210, Sd = 211, bd = 212, Td = 213, Ad = 214, Ta = 0, Aa = 1, wa = 2, os = 3, Ea = 4, Ca = 5, Ra = 6, Ia = 7, go = 0, wd = 1, Ed = 2, Mi = 0, $h = 1, Kh = 2, Qh = 3, jh = 4, eu = 5, tu = 6, iu = 7, _c = "attached", Cd = "detached", xl = 300, Fi = 301, Tn = 302, jr = 303, eo = 304, $s = 306, to = 1e3, ei = 1001, io = 1002, bt = 1003, nu = 1004, Dx = 1004, Ls = 1005, Ux = 1005, mt = 1006, Yr = 1007, Nx = 1007, Di = 1008, Ox = 1008, Qt = 1009, su = 1010, ru = 1011, Vs = 1012, yl = 1013, di = 1014, Ht = 1015, Bi = 1016, Ml = 1017, Sl = 1018, ks = 1020, ou = 35902, au = 35899, lu = 1021, cu = 1022, Wt = 1023, zi = 1026, yn = 1027, bl = 1028, _o = 1029, as = 1030, Tl = 1031, Fx = 1032, Al = 1033, Zr = 33776, Jr = 33777, $r = 33778, Kr = 33779, Pa = 35840, La = 35841, Da = 35842, Ua = 35843, Na = 36196, Oa = 37492, Fa = 37496, Ba = 37488, za = 37489, Va = 37490, ka = 37491, Ga = 37808, Ha = 37809, Wa = 37810, Xa = 37811, qa = 37812, Ya = 37813, Za = 37814, Ja = 37815, $a = 37816, Ka = 37817, Qa = 37818, ja = 37819, el = 37820, tl = 37821, il = 36492, nl = 36494, sl = 36495, rl = 36283, ol = 36284, al = 36285, ll = 36286, Rd = 2200, Id = 2201, Pd = 2202, no = 2300, cl = 2301, Po = 2302, es = 2400, ts = 2401, so = 2402, wl = 2500, hu = 2501, Bx = 0, zx = 1, Vx = 2, Ld = 3200, kx = 3201, Gx = 3202, Hx = 3203, En = 0, Dd = 1, Ji = "", Kt = "srgb", ls = "srgb-linear", ro = "linear", rt = "srgb", Wx = "", Xx = "rg", qx = "ga", Yx = 0, Ln = 7680, Zx = 7681, Jx = 7682, $x = 7683, Kx = 34055, Qx = 34056, jx = 5386, ey = 512, ty = 513, iy = 514, ny = 515, sy = 516, ry = 517, oy = 518, vc = 519, Ud = 512, Nd = 513, Od = 514, El = 515, Fd = 516, Bd = 517, Cl = 518, zd = 519, oo = 35044, ay = 35048, ly = 35040, cy = 35045, hy = 35049, uy = 35041, dy = 35046, fy = 35050, py = 35042, my = "100", xc = "300 es", oi = 2e3, Gs = 2001, gy = { COMPUTE: "compute", RENDER: "render" }, _y = { PERSPECTIVE: "perspective", LINEAR: "linear", FLAT: "flat" }, vy = { NORMAL: "normal", CENTROID: "centroid", SAMPLE: "sample", FIRST: "first", EITHER: "either" };
function uu(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return true;
  return false;
}
const Vd = { Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array };
function is(r, e) {
  return new Vd[r](e);
}
function du(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Hs(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function kd() {
  const r = Hs("canvas");
  return r.style.display = "block", r;
}
const yc = {};
let Qi = null;
function xy(r) {
  Qi = r;
}
function yy() {
  return Qi;
}
function ao(...r) {
  const e = "THREE." + r.shift();
  Qi ? Qi("log", e, ...r) : console.log(e, ...r);
}
function de(...r) {
  const e = "THREE." + r.shift();
  Qi ? Qi("warn", e, ...r) : console.warn(e, ...r);
}
function Le(...r) {
  const e = "THREE." + r.shift();
  Qi ? Qi("error", e, ...r) : console.error(e, ...r);
}
function Ws(...r) {
  const e = r.join(" ");
  e in yc || (yc[e] = true, de(...r));
}
function Gd(r, e, t) {
  return new Promise(function(i, n) {
    function s() {
      switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          n();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          i();
      }
    }
    setTimeout(s, t);
  });
}
class Vi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? false : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const n = i[e];
    if (n !== void 0) {
      const s = n.indexOf(t);
      s !== -1 && n.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const n = i.slice(0);
      for (let s = 0, o = n.length; s < o; s++) n[s].call(this, e);
      e.target = null;
    }
  }
}
const Ct = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Mc = 1234567;
const bn = Math.PI / 180, cs = 180 / Math.PI;
function ti() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Ct[r & 255] + Ct[r >> 8 & 255] + Ct[r >> 16 & 255] + Ct[r >> 24 & 255] + "-" + Ct[e & 255] + Ct[e >> 8 & 255] + "-" + Ct[e >> 16 & 15 | 64] + Ct[e >> 24 & 255] + "-" + Ct[t & 63 | 128] + Ct[t >> 8 & 255] + "-" + Ct[t >> 16 & 255] + Ct[t >> 24 & 255] + Ct[i & 255] + Ct[i >> 8 & 255] + Ct[i >> 16 & 255] + Ct[i >> 24 & 255]).toLowerCase();
}
function ze(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Rl(r, e) {
  return (r % e + e) % e;
}
function Hd(r, e, t, i, n) {
  return i + (r - e) * (n - i) / (t - e);
}
function Wd(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Fs(r, e, t) {
  return (1 - t) * r + t * e;
}
function Xd(r, e, t, i) {
  return Fs(r, e, 1 - Math.exp(-t * i));
}
function qd(r, e = 1) {
  return e - Math.abs(Rl(r, e * 2) - e);
}
function Yd(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function Zd(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function Jd(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function $d(r, e) {
  return r + Math.random() * (e - r);
}
function Kd(r) {
  return r * (0.5 - Math.random());
}
function Qd(r) {
  r !== void 0 && (Mc = r);
  let e = Mc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function jd(r) {
  return r * bn;
}
function ef(r) {
  return r * cs;
}
function tf(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function nf(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function sf(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function rf(r, e, t, i, n) {
  const s = Math.cos, o = Math.sin, a = s(t / 2), l = o(t / 2), c = s((e + i) / 2), h = o((e + i) / 2), u = s((e - i) / 2), d = o((e - i) / 2), f = s((i - e) / 2), m = o((i - e) / 2);
  switch (n) {
    case "XYX":
      r.set(a * h, l * u, l * d, a * c);
      break;
    case "YZY":
      r.set(l * d, a * h, l * u, a * c);
      break;
    case "ZXZ":
      r.set(l * u, l * d, a * h, a * c);
      break;
    case "XZX":
      r.set(a * h, l * m, l * f, a * c);
      break;
    case "YXY":
      r.set(l * f, a * h, l * m, a * c);
      break;
    case "ZYZ":
      r.set(l * m, l * f, a * h, a * c);
      break;
    default:
      de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + n);
  }
}
function Ot(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ze(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const My = { DEG2RAD: bn, RAD2DEG: cs, generateUUID: ti, clamp: ze, euclideanModulo: Rl, mapLinear: Hd, inverseLerp: Wd, lerp: Fs, damp: Xd, pingpong: qd, smoothstep: Yd, smootherstep: Zd, randInt: Jd, randFloat: $d, randFloatSpread: Kd, seededRandom: Qd, degToRad: jd, radToDeg: ef, isPowerOfTwo: tf, ceilPowerOfTwo: nf, floorPowerOfTwo: sf, setQuaternionFromProperEuler: rf, normalize: Ze, denormalize: Ot };
class K {
  constructor(e = 0, t = 0) {
    K.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, n = e.elements;
    return this.x = n[0] * t + n[3] * i + n[6], this.y = n[1] * t + n[4] * i + n[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(ze(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t), n = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * i - o * n + e.x, this.y = s * n + o * i + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ii {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = i, this._w = n;
  }
  static slerpFlat(e, t, i, n, s, o, a) {
    let l = i[n + 0], c = i[n + 1], h = i[n + 2], u = i[n + 3], d = s[o + 0], f = s[o + 1], m = s[o + 2], _ = s[o + 3];
    if (a <= 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a >= 1) {
      e[t + 0] = d, e[t + 1] = f, e[t + 2] = m, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== f || h !== m) {
      let g = l * d + c * f + h * m + u * _;
      g < 0 && (d = -d, f = -f, m = -m, _ = -_, g = -g);
      let p = 1 - a;
      if (g < 0.9995) {
        const x = Math.acos(g), v = Math.sin(x);
        p = Math.sin(p * x) / v, a = Math.sin(a * x) / v, l = l * p + d * a, c = c * p + f * a, h = h * p + m * a, u = u * p + _ * a;
      } else {
        l = l * p + d * a, c = c * p + f * a, h = h * p + m * a, u = u * p + _ * a;
        const x = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= x, c *= x, h *= x, u *= x;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, i, n, s, o) {
    const a = i[n], l = i[n + 1], c = i[n + 2], h = i[n + 3], u = s[o], d = s[o + 1], f = s[o + 2], m = s[o + 3];
    return e[t] = a * m + h * u + l * f - c * d, e[t + 1] = l * m + h * d + c * u - a * f, e[t + 2] = c * m + h * f + a * d - l * u, e[t + 3] = h * m - a * u - l * d - c * f, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, i, n) {
    return this._x = e, this._y = t, this._z = i, this._w = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const i = e._x, n = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(i / 2), h = a(n / 2), u = a(s / 2), d = l(i / 2), f = l(n / 2), m = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "YXZ":
        this._x = d * h * u + c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u + d * f * m;
        break;
      case "ZXY":
        this._x = d * h * u - c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "ZYX":
        this._x = d * h * u - c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u + d * f * m;
        break;
      case "YZX":
        this._x = d * h * u + c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "XZY":
        this._x = d * h * u - c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u + d * f * m;
        break;
      default:
        de("Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, n = Math.sin(i);
    return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], n = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = i + a + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - l) * f, this._y = (s - c) * f, this._z = (o - n) * f;
    } else if (i > a && i > u) {
      const f = 2 * Math.sqrt(1 + i - a - u);
      this._w = (h - l) / f, this._x = 0.25 * f, this._y = (n + o) / f, this._z = (s + c) / f;
    } else if (a > u) {
      const f = 2 * Math.sqrt(1 + a - i - u);
      this._w = (s - c) / f, this._x = (n + o) / f, this._y = 0.25 * f, this._z = (l + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - i - a);
      this._w = (o - n) / f, this._x = (s + c) / f, this._y = (l + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ze(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const n = Math.min(1, t / i);
    return this.slerp(e, n), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x, n = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = i * h + o * a + n * c - s * l, this._y = n * h + o * l + s * a - i * c, this._z = s * h + o * c + i * l - n * a, this._w = o * h - i * a - n * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t <= 0) return this;
    if (t >= 1) return this.copy(e);
    let i = e._x, n = e._y, s = e._z, o = e._w, a = this.dot(e);
    a < 0 && (i = -i, n = -n, s = -s, o = -o, a = -a);
    let l = 1 - t;
    if (a < 0.9995) {
      const c = Math.acos(a), h = Math.sin(c);
      l = Math.sin(l * c) / h, t = Math.sin(t * c) / h, this._x = this._x * l + i * t, this._y = this._y * l + n * t, this._z = this._z * l + s * t, this._w = this._w * l + o * t, this._onChangeCallback();
    } else this._x = this._x * l + i * t, this._y = this._y * l + n * t, this._z = this._z * l + s * t, this._w = this._w * l + o * t, this.normalize();
    return this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), n = Math.sqrt(1 - i), s = Math.sqrt(i);
    return this.set(n * Math.sin(e), n * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, i = 0) {
    R.prototype.isVector3 = true, this.x = e, this.y = t, this.z = i;
  }
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Sc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Sc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, n = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * i + s[6] * n, this.y = s[1] * t + s[4] * i + s[7] * n, this.z = s[2] * t + s[5] * i + s[8] * n, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, n = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * i + s[11] * n + s[15]);
    return this.x = (s[0] * t + s[4] * i + s[8] * n + s[12]) * o, this.y = (s[1] * t + s[5] * i + s[9] * n + s[13]) * o, this.z = (s[2] * t + s[6] * i + s[10] * n + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, i = this.y, n = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * n - a * i), h = 2 * (a * t - s * n), u = 2 * (s * i - o * t);
    return this.x = t + l * c + o * u - a * h, this.y = i + l * h + a * c - s * u, this.z = n + l * u + s * h - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, i = this.y, n = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * i + s[8] * n, this.y = s[1] * t + s[5] * i + s[9] * n, this.z = s[2] * t + s[6] * i + s[10] * n, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x, n = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = n * l - s * a, this.y = s * o - i * l, this.z = i * a - n * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return Lo.copy(this).projectOnVector(e), this.sub(Lo);
  }
  reflect(e) {
    return this.sub(Lo.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(ze(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, n = this.z - e.z;
    return t * t + i * i + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const n = Math.sin(t) * e;
    return this.x = n * Math.sin(i), this.y = Math.cos(t) * e, this.z = n * Math.cos(i), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), n = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = n, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, i = Math.sqrt(1 - t * t);
    return this.x = i * Math.cos(e), this.y = t, this.z = i * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Lo = new R(), Sc = new ii();
class Ye {
  constructor(e, t, i, n, s, o, a, l, c) {
    Ye.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, n, s, o, a, l, c);
  }
  set(e, t, i, n, s, o, a, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = n, h[2] = a, h[3] = t, h[4] = s, h[5] = l, h[6] = i, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, n = t.elements, s = this.elements, o = i[0], a = i[3], l = i[6], c = i[1], h = i[4], u = i[7], d = i[2], f = i[5], m = i[8], _ = n[0], g = n[3], p = n[6], x = n[1], v = n[4], M = n[7], A = n[2], w = n[5], C = n[8];
    return s[0] = o * _ + a * x + l * A, s[3] = o * g + a * v + l * w, s[6] = o * p + a * M + l * C, s[1] = c * _ + h * x + u * A, s[4] = c * g + h * v + u * w, s[7] = c * p + h * M + u * C, s[2] = d * _ + f * x + m * A, s[5] = d * g + f * v + m * w, s[8] = d * p + f * M + m * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * a * c - i * s * h + i * a * l + n * s * c - n * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = h * o - a * c, d = a * l - h * s, f = c * s - o * l, m = t * u + i * d + n * f;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return e[0] = u * _, e[1] = (n * c - h * i) * _, e[2] = (a * i - n * o) * _, e[3] = d * _, e[4] = (h * t - n * l) * _, e[5] = (n * s - a * t) * _, e[6] = f * _, e[7] = (i * l - c * t) * _, e[8] = (o * t - i * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, i, n, s, o, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(i * l, i * c, -i * (l * o + c * a) + o + e, -n * c, n * l, -n * (-c * o + l * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Do.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Do.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Do.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let n = 0; n < 9; n++) if (t[n] !== i[n]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Do = new Ye(), bc = new Ye().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Tc = new Ye().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function of() {
  const r = { enabled: true, workingColorSpace: ls, spaces: {}, convert: function(n, s, o) {
    return this.enabled === false || s === o || !s || !o || (this.spaces[s].transfer === rt && (n.r = Oi(n.r), n.g = Oi(n.g), n.b = Oi(n.b)), this.spaces[s].primaries !== this.spaces[o].primaries && (n.applyMatrix3(this.spaces[s].toXYZ), n.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === rt && (n.r = ss(n.r), n.g = ss(n.g), n.b = ss(n.b))), n;
  }, workingToColorSpace: function(n, s) {
    return this.convert(n, this.workingColorSpace, s);
  }, colorSpaceToWorking: function(n, s) {
    return this.convert(n, s, this.workingColorSpace);
  }, getPrimaries: function(n) {
    return this.spaces[n].primaries;
  }, getTransfer: function(n) {
    return n === Ji ? ro : this.spaces[n].transfer;
  }, getToneMappingMode: function(n) {
    return this.spaces[n].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(n, s = this.workingColorSpace) {
    return n.fromArray(this.spaces[s].luminanceCoefficients);
  }, define: function(n) {
    Object.assign(this.spaces, n);
  }, _getMatrix: function(n, s, o) {
    return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ);
  }, _getDrawingBufferColorSpace: function(n) {
    return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(n = this.workingColorSpace) {
    return this.spaces[n].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(n, s) {
    return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), r.workingToColorSpace(n, s);
  }, toWorkingColorSpace: function(n, s) {
    return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), r.colorSpaceToWorking(n, s);
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return r.define({ [ls]: { primaries: e, whitePoint: i, transfer: ro, toXYZ: bc, fromXYZ: Tc, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Kt }, outputColorSpaceConfig: { drawingBufferColorSpace: Kt } }, [Kt]: { primaries: e, whitePoint: i, transfer: rt, toXYZ: bc, fromXYZ: Tc, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Kt } } }), r;
}
const je = of();
function Oi(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ss(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Dn;
class af {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let i;
    if (e instanceof HTMLCanvasElement) i = e;
    else {
      Dn === void 0 && (Dn = Hs("canvas")), Dn.width = e.width, Dn.height = e.height;
      const n = Dn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), i = Dn;
    }
    return i.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Hs("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const n = i.getImageData(0, 0, e.width, e.height), s = n.data;
      for (let o = 0; o < s.length; o++) s[o] = Oi(s[o] / 255) * 255;
      return i.putImageData(n, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(Oi(t[i] / 255) * 255) : t[i] = Oi(t[i]);
      return { data: t, width: e.width, height: e.height };
    } else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let lf = 0;
class Mn {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: lf++ }), this.uuid = ti(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" }, n = this.data;
    if (n !== null) {
      let s;
      if (Array.isArray(n)) {
        s = [];
        for (let o = 0, a = n.length; o < a; o++) n[o].isDataTexture ? s.push(Uo(n[o].image)) : s.push(Uo(n[o]));
      } else s = Uo(n);
      i.url = s;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function Uo(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? af.getDataURL(r) : r.data ? { data: Array.from(r.data), width: r.width, height: r.height, type: r.data.constructor.name } : (de("Texture: Unable to serialize Texture."), {});
}
let cf = 0;
const No = new R();
class Mt extends Vi {
  constructor(e = Mt.DEFAULT_IMAGE, t = Mt.DEFAULT_MAPPING, i = ei, n = ei, s = mt, o = Di, a = Wt, l = Qt, c = Mt.DEFAULT_ANISOTROPY, h = Ji) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: cf++ }), this.uuid = ti(), this.name = "", this.source = new Mn(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = n, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new K(0, 0), this.repeat = new K(1, 1), this.center = new K(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ye(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(No).x;
  }
  get height() {
    return this.source.getSize(No).y;
  }
  get depth() {
    return this.source.getSize(No).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        de(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const n = this[t];
      if (n === void 0) {
        de(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      n && i && n.isVector2 && i.isVector2 || n && i && n.isVector3 && i.isVector3 || n && i && n.isMatrix3 && i.isMatrix3 ? n.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== xl) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case to:
        e.x = e.x - Math.floor(e.x);
        break;
      case ei:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case io:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case to:
        e.y = e.y - Math.floor(e.y);
        break;
      case ei:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case io:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
Mt.DEFAULT_IMAGE = null;
Mt.DEFAULT_MAPPING = xl;
Mt.DEFAULT_ANISOTROPY = 1;
class pt {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    pt.prototype.isVector4 = true, this.x = e, this.y = t, this.z = i, this.w = n;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, n) {
    return this.x = e, this.y = t, this.z = i, this.w = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, n = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * i + o[8] * n + o[12] * s, this.y = o[1] * t + o[5] * i + o[9] * n + o[13] * s, this.z = o[2] * t + o[6] * i + o[10] * n + o[14] * s, this.w = o[3] * t + o[7] * i + o[11] * n + o[15] * s, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, n, s;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], f = l[5], m = l[9], _ = l[2], g = l[6], p = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(m - g) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(m + g) < 0.1 && Math.abs(c + f + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, M = (f + 1) / 2, A = (p + 1) / 2, w = (h + d) / 4, C = (u + _) / 4, P = (m + g) / 4;
      return v > M && v > A ? v < 0.01 ? (i = 0, n = 0.707106781, s = 0.707106781) : (i = Math.sqrt(v), n = w / i, s = C / i) : M > A ? M < 0.01 ? (i = 0.707106781, n = 0, s = 0.707106781) : (n = Math.sqrt(M), i = w / n, s = P / n) : A < 0.01 ? (i = 0.707106781, n = 0.707106781, s = 0) : (s = Math.sqrt(A), i = C / s, n = P / s), this.set(i, n, s, t), this;
    }
    let x = Math.sqrt((g - m) * (g - m) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (g - m) / x, this.y = (u - _) / x, this.z = (d - h) / x, this.w = Math.acos((c + f + p - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this.w = ze(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this.w = ze(this.w, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class fu extends Vi {
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: mt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, i), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new pt(0, 0, e, t), this.scissorTest = false, this.viewport = new pt(0, 0, e, t);
    const n = { width: e, height: t, depth: i.depth }, s = new Mt(n);
    this.textures = [];
    const o = i.count;
    for (let a = 0; a < o; a++) this.textures[a] = s.clone(), this.textures[a].isRenderTargetTexture = true, this.textures[a].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: mt, generateMipmaps: false, flipY: false, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let i = 0; i < this.textures.length; i++) this.textures[i].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let n = 0, s = this.textures.length; n < s; n++) this.textures[n].image.width = e, this.textures[n].image.height = t, this.textures[n].image.depth = i, this.textures[n].isData3DTexture !== true && (this.textures[n].isArrayTexture = this.textures[n].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, i = e.textures.length; t < i; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const n = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Mn(n);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ai extends fu {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = true;
  }
}
class Il extends Mt {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: i, depth: n }, this.magFilter = bt, this.minFilter = bt, this.wrapR = ei, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Sy extends ai {
  constructor(e = 1, t = 1, i = 1, n = {}) {
    super(e, t, n), this.isWebGLArrayRenderTarget = true, this.depth = i, this.texture = new Il(null, e, t, i), this._setTextureOptions(n), this.texture.isRenderTargetTexture = true;
  }
}
class Pl extends Mt {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: i, depth: n }, this.magFilter = bt, this.minFilter = bt, this.wrapR = ei, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class by extends ai {
  constructor(e = 1, t = 1, i = 1, n = {}) {
    super(e, t, n), this.isWebGL3DRenderTarget = true, this.depth = i, this.texture = new Pl(null, e, t, i), this._setTextureOptions(n), this.texture.isRenderTargetTexture = true;
  }
}
class Ft {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3) this.expandByPoint(ci.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++) this.expandByPoint(ci.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = ci.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const i = e.geometry;
    if (i !== void 0) {
      const s = i.getAttribute("position");
      if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = s.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, ci) : ci.fromBufferAttribute(s, o), ci.applyMatrix4(e.matrixWorld), this.expandByPoint(ci);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ir.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), ir.copy(i.boundingBox)), ir.applyMatrix4(e.matrixWorld), this.union(ir);
    }
    const n = e.children;
    for (let s = 0, o = n.length; s < o; s++) this.expandByObject(n[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, ci), ci.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(vs), nr.subVectors(this.max, vs), Un.subVectors(e.a, vs), Nn.subVectors(e.b, vs), On.subVectors(e.c, vs), Gi.subVectors(Nn, Un), Hi.subVectors(On, Nn), nn.subVectors(Un, On);
    let t = [0, -Gi.z, Gi.y, 0, -Hi.z, Hi.y, 0, -nn.z, nn.y, Gi.z, 0, -Gi.x, Hi.z, 0, -Hi.x, nn.z, 0, -nn.x, -Gi.y, Gi.x, 0, -Hi.y, Hi.x, 0, -nn.y, nn.x, 0];
    return !Oo(t, Un, Nn, On, nr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Oo(t, Un, Nn, On, nr)) ? false : (sr.crossVectors(Gi, Hi), t = [sr.x, sr.y, sr.z], Oo(t, Un, Nn, On, nr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, ci).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(ci).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Ai[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ai[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ai[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ai[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ai[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ai[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ai[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ai[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ai), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const Ai = [new R(), new R(), new R(), new R(), new R(), new R(), new R(), new R()], ci = new R(), ir = new Ft(), Un = new R(), Nn = new R(), On = new R(), Gi = new R(), Hi = new R(), nn = new R(), vs = new R(), nr = new R(), sr = new R(), sn = new R();
function Oo(r, e, t, i, n) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    sn.fromArray(r, s);
    const a = n.x * Math.abs(sn.x) + n.y * Math.abs(sn.y) + n.z * Math.abs(sn.z), l = e.dot(sn), c = t.dot(sn), h = i.dot(sn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return false;
  }
  return true;
}
const hf = new Ft(), xs = new R(), Fo = new R();
class Lt {
  constructor(e = new R(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : hf.setFromPoints(e).getCenter(i);
    let n = 0;
    for (let s = 0, o = e.length; s < o; s++) n = Math.max(n, i.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(n), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    xs.subVectors(e, this.center);
    const t = xs.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), n = (i - this.radius) * 0.5;
      this.center.addScaledVector(xs, n / i), this.radius += n;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Fo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(xs.copy(e.center).add(Fo)), this.expandByPoint(xs.copy(e.center).sub(Fo))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const wi = new R(), Bo = new R(), rr = new R(), Wi = new R(), zo = new R(), or = new R(), Vo = new R();
class Ks {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, wi)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wi.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (wi.copy(this.origin).addScaledVector(this.direction, t), wi.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, n) {
    Bo.copy(e).add(t).multiplyScalar(0.5), rr.copy(t).sub(e).normalize(), Wi.copy(this.origin).sub(Bo);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(rr), a = Wi.dot(this.direction), l = -Wi.dot(rr), c = Wi.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, f, m;
    if (h > 0) if (u = o * l - a, d = o * a - l, m = s * h, u >= 0) if (d >= -m) if (d <= m) {
      const _ = 1 / h;
      u *= _, d *= _, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c;
    } else d = s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    else d = -s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    else d <= -m ? (u = Math.max(0, -(-o * s + a)), d = u > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c) : d <= m ? (u = 0, d = Math.min(Math.max(-s, -l), s), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * s + a)), d = u > 0 ? s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c);
    else d = o > 0 ? -s : s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, u), n && n.copy(Bo).addScaledVector(rr, d), f;
  }
  intersectSphere(e, t) {
    wi.subVectors(e.center, this.origin);
    const i = wi.dot(this.direction), n = wi.dot(wi) - i * i, s = e.radius * e.radius;
    if (n > s) return null;
    const o = Math.sqrt(s - n), a = i - o, l = i + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? false : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, n, s, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (i = (e.min.x - d.x) * c, n = (e.max.x - d.x) * c) : (i = (e.max.x - d.x) * c, n = (e.min.x - d.x) * c), h >= 0 ? (s = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), i > o || s > n || ((s > i || isNaN(i)) && (i = s), (o < n || isNaN(n)) && (n = o), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), i > l || a > n) || ((a > i || i !== i) && (i = a), (l < n || n !== n) && (n = l), n < 0) ? null : this.at(i >= 0 ? i : n, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, wi) !== null;
  }
  intersectTriangle(e, t, i, n, s) {
    zo.subVectors(t, e), or.subVectors(i, e), Vo.crossVectors(zo, or);
    let o = this.direction.dot(Vo), a;
    if (o > 0) {
      if (n) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    Wi.subVectors(this.origin, e);
    const l = a * this.direction.dot(or.crossVectors(Wi, or));
    if (l < 0) return null;
    const c = a * this.direction.dot(zo.cross(Wi));
    if (c < 0 || l + c > o) return null;
    const h = -a * Wi.dot(Vo);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ge {
  constructor(e, t, i, n, s, o, a, l, c, h, u, d, f, m, _, g) {
    Ge.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, n, s, o, a, l, c, h, u, d, f, m, _, g);
  }
  set(e, t, i, n, s, o, a, l, c, h, u, d, f, m, _, g) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = i, p[12] = n, p[1] = s, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = m, p[11] = _, p[15] = g, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ge().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, i) {
    return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), i.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(e, t, i) {
    return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    if (e.determinant() === 0) return this.identity();
    const t = this.elements, i = e.elements, n = 1 / Fn.setFromMatrixColumn(e, 0).length(), s = 1 / Fn.setFromMatrixColumn(e, 1).length(), o = 1 / Fn.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * n, t[1] = i[1] * n, t[2] = i[2] * n, t[3] = 0, t[4] = i[4] * s, t[5] = i[5] * s, t[6] = i[6] * s, t[7] = 0, t[8] = i[8] * o, t[9] = i[9] * o, t[10] = i[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, n = e.y, s = e.z, o = Math.cos(i), a = Math.sin(i), l = Math.cos(n), c = Math.sin(n), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * h, f = o * u, m = a * h, _ = a * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = f + m * c, t[5] = d - _ * c, t[9] = -a * l, t[2] = _ - d * c, t[6] = m + f * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * h, f = l * u, m = c * h, _ = c * u;
      t[0] = d + _ * a, t[4] = m * a - f, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = f * a - m, t[6] = _ + d * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * h, f = l * u, m = c * h, _ = c * u;
      t[0] = d - _ * a, t[4] = -o * u, t[8] = m + f * a, t[1] = f + m * a, t[5] = o * h, t[9] = _ - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * h, f = o * u, m = a * h, _ = a * u;
      t[0] = l * h, t[4] = m * c - f, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = f * c - m, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, f = o * c, m = a * l, _ = a * c;
      t[0] = l * h, t[4] = _ - d * u, t[8] = m * u + f, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = f * u + m, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = o * l, f = o * c, m = a * l, _ = a * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = o * h, t[9] = f * u - m, t[2] = m * u - f, t[6] = a * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(uf, e, df);
  }
  lookAt(e, t, i) {
    const n = this.elements;
    return Jt.subVectors(e, t), Jt.lengthSq() === 0 && (Jt.z = 1), Jt.normalize(), Xi.crossVectors(i, Jt), Xi.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Jt.x += 1e-4 : Jt.z += 1e-4, Jt.normalize(), Xi.crossVectors(i, Jt)), Xi.normalize(), ar.crossVectors(Jt, Xi), n[0] = Xi.x, n[4] = ar.x, n[8] = Jt.x, n[1] = Xi.y, n[5] = ar.y, n[9] = Jt.y, n[2] = Xi.z, n[6] = ar.z, n[10] = Jt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, n = t.elements, s = this.elements, o = i[0], a = i[4], l = i[8], c = i[12], h = i[1], u = i[5], d = i[9], f = i[13], m = i[2], _ = i[6], g = i[10], p = i[14], x = i[3], v = i[7], M = i[11], A = i[15], w = n[0], C = n[4], P = n[8], S = n[12], b = n[1], L = n[5], O = n[9], B = n[13], G = n[2], q = n[6], V = n[10], H = n[14], j = n[3], pe = n[7], ae = n[11], he = n[15];
    return s[0] = o * w + a * b + l * G + c * j, s[4] = o * C + a * L + l * q + c * pe, s[8] = o * P + a * O + l * V + c * ae, s[12] = o * S + a * B + l * H + c * he, s[1] = h * w + u * b + d * G + f * j, s[5] = h * C + u * L + d * q + f * pe, s[9] = h * P + u * O + d * V + f * ae, s[13] = h * S + u * B + d * H + f * he, s[2] = m * w + _ * b + g * G + p * j, s[6] = m * C + _ * L + g * q + p * pe, s[10] = m * P + _ * O + g * V + p * ae, s[14] = m * S + _ * B + g * H + p * he, s[3] = x * w + v * b + M * G + A * j, s[7] = x * C + v * L + M * q + A * pe, s[11] = x * P + v * O + M * V + A * ae, s[15] = x * S + v * B + M * H + A * he, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], n = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], f = e[14], m = e[3], _ = e[7], g = e[11], p = e[15], x = l * f - c * d, v = a * f - c * u, M = a * d - l * u, A = o * f - c * h, w = o * d - l * h, C = o * u - a * h;
    return t * (_ * x - g * v + p * M) - i * (m * x - g * A + p * w) + n * (m * v - _ * A + p * C) - s * (m * M - _ * w + g * C);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, i) {
    const n = this.elements;
    return e.isVector3 ? (n[12] = e.x, n[13] = e.y, n[14] = e.z) : (n[12] = e, n[13] = t, n[14] = i), this;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], f = e[11], m = e[12], _ = e[13], g = e[14], p = e[15], x = u * g * c - _ * d * c + _ * l * f - a * g * f - u * l * p + a * d * p, v = m * d * c - h * g * c - m * l * f + o * g * f + h * l * p - o * d * p, M = h * _ * c - m * u * c + m * a * f - o * _ * f - h * a * p + o * u * p, A = m * u * l - h * _ * l - m * a * d + o * _ * d + h * a * g - o * u * g, w = t * x + i * v + n * M + s * A;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / w;
    return e[0] = x * C, e[1] = (_ * d * s - u * g * s - _ * n * f + i * g * f + u * n * p - i * d * p) * C, e[2] = (a * g * s - _ * l * s + _ * n * c - i * g * c - a * n * p + i * l * p) * C, e[3] = (u * l * s - a * d * s - u * n * c + i * d * c + a * n * f - i * l * f) * C, e[4] = v * C, e[5] = (h * g * s - m * d * s + m * n * f - t * g * f - h * n * p + t * d * p) * C, e[6] = (m * l * s - o * g * s - m * n * c + t * g * c + o * n * p - t * l * p) * C, e[7] = (o * d * s - h * l * s + h * n * c - t * d * c - o * n * f + t * l * f) * C, e[8] = M * C, e[9] = (m * u * s - h * _ * s - m * i * f + t * _ * f + h * i * p - t * u * p) * C, e[10] = (o * _ * s - m * a * s + m * i * c - t * _ * c - o * i * p + t * a * p) * C, e[11] = (h * a * s - o * u * s - h * i * c + t * u * c + o * i * f - t * a * f) * C, e[12] = A * C, e[13] = (h * _ * n - m * u * n + m * i * d - t * _ * d - h * i * g + t * u * g) * C, e[14] = (m * a * n - o * _ * n - m * i * l + t * _ * l + o * i * g - t * a * g) * C, e[15] = (o * u * n - h * a * n + h * i * l - t * u * l - o * i * d + t * a * d) * C, this;
  }
  scale(e) {
    const t = this.elements, i = e.x, n = e.y, s = e.z;
    return t[0] *= i, t[4] *= n, t[8] *= s, t[1] *= i, t[5] *= n, t[9] *= s, t[2] *= i, t[6] *= n, t[10] *= s, t[3] *= i, t[7] *= n, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, n));
  }
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t), n = Math.sin(t), s = 1 - i, o = e.x, a = e.y, l = e.z, c = s * o, h = s * a;
    return this.set(c * o + i, c * a - n * l, c * l + n * a, 0, c * a + n * l, h * a + i, h * l - n * o, 0, c * l - n * a, h * l + n * o, s * l * l + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, n, s, o) {
    return this.set(1, i, s, 0, e, 1, o, 0, t, n, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const n = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, h = o + o, u = a + a, d = s * c, f = s * h, m = s * u, _ = o * h, g = o * u, p = a * u, x = l * c, v = l * h, M = l * u, A = i.x, w = i.y, C = i.z;
    return n[0] = (1 - (_ + p)) * A, n[1] = (f + M) * A, n[2] = (m - v) * A, n[3] = 0, n[4] = (f - M) * w, n[5] = (1 - (d + p)) * w, n[6] = (g + x) * w, n[7] = 0, n[8] = (m + v) * C, n[9] = (g - x) * C, n[10] = (1 - (d + _)) * C, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this;
  }
  decompose(e, t, i) {
    const n = this.elements;
    if (e.x = n[12], e.y = n[13], e.z = n[14], this.determinant() === 0) return i.set(1, 1, 1), t.identity(), this;
    let s = Fn.set(n[0], n[1], n[2]).length();
    const o = Fn.set(n[4], n[5], n[6]).length(), a = Fn.set(n[8], n[9], n[10]).length();
    this.determinant() < 0 && (s = -s), hi.copy(this);
    const c = 1 / s, h = 1 / o, u = 1 / a;
    return hi.elements[0] *= c, hi.elements[1] *= c, hi.elements[2] *= c, hi.elements[4] *= h, hi.elements[5] *= h, hi.elements[6] *= h, hi.elements[8] *= u, hi.elements[9] *= u, hi.elements[10] *= u, t.setFromRotationMatrix(hi), i.x = s, i.y = o, i.z = a, this;
  }
  makePerspective(e, t, i, n, s, o, a = oi, l = false) {
    const c = this.elements, h = 2 * s / (t - e), u = 2 * s / (i - n), d = (t + e) / (t - e), f = (i + n) / (i - n);
    let m, _;
    if (l) m = s / (o - s), _ = o * s / (o - s);
    else if (a === oi) m = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
    else if (a === Gs) m = -o / (o - s), _ = -o * s / (o - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = h, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = m, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, i, n, s, o, a = oi, l = false) {
    const c = this.elements, h = 2 / (t - e), u = 2 / (i - n), d = -(t + e) / (t - e), f = -(i + n) / (i - n);
    let m, _;
    if (l) m = 1 / (o - s), _ = o / (o - s);
    else if (a === oi) m = -2 / (o - s), _ = -(o + s) / (o - s);
    else if (a === Gs) m = -1 / (o - s), _ = -s / (o - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return c[0] = h, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = m, c[14] = _, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let n = 0; n < 16; n++) if (t[n] !== i[n]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
}
const Fn = new R(), hi = new Ge(), uf = new R(0, 0, 0), df = new R(1, 1, 1), Xi = new R(), ar = new R(), Jt = new R(), Ac = new Ge(), wc = new ii();
class li {
  constructor(e = 0, t = 0, i = 0, n = li.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = i, this._order = n;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, i, n = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, i = true) {
    const n = e.elements, s = n[0], o = n[4], a = n[8], l = n[1], c = n[5], h = n[9], u = n[2], d = n[6], f = n[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ze(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ze(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ze(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ze(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(ze(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-ze(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        de("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return Ac.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ac, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return wc.setFromEuler(this), this.setFromQuaternion(wc, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
li.DEFAULT_ORDER = "XYZ";
class Ll {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let ff = 0;
const Ec = new R(), Bn = new ii(), Ei = new Ge(), lr = new R(), ys = new R(), pf = new R(), mf = new ii(), Cc = new R(1, 0, 0), Rc = new R(0, 1, 0), Ic = new R(0, 0, 1), Pc = { type: "added" }, gf = { type: "removed" }, zn = { type: "childadded", child: null }, ko = { type: "childremoved", child: null };
class it extends Vi {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: ff++ }), this.uuid = ti(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = it.DEFAULT_UP.clone();
    const e = new R(), t = new li(), i = new ii(), n = new R(1, 1, 1);
    function s() {
      i.setFromEuler(t, false);
    }
    function o() {
      t.setFromQuaternion(i, void 0, false);
    }
    t._onChange(s), i._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: i }, scale: { configurable: true, enumerable: true, value: n }, modelViewMatrix: { value: new Ge() }, normalMatrix: { value: new Ye() } }), this.matrix = new Ge(), this.matrixWorld = new Ge(), this.matrixAutoUpdate = it.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Ll(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Bn.setFromAxisAngle(e, t), this.quaternion.multiply(Bn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Bn.setFromAxisAngle(e, t), this.quaternion.premultiply(Bn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Cc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Rc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ic, e);
  }
  translateOnAxis(e, t) {
    return Ec.copy(e).applyQuaternion(this.quaternion), this.position.add(Ec.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Cc, e);
  }
  translateY(e) {
    return this.translateOnAxis(Rc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ic, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Ei.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? lr.copy(e) : lr.set(e, t, i);
    const n = this.parent;
    this.updateWorldMatrix(true, false), ys.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ei.lookAt(ys, lr, this.up) : Ei.lookAt(lr, ys, this.up), this.quaternion.setFromRotationMatrix(Ei), n && (Ei.extractRotation(n.matrixWorld), Bn.setFromRotationMatrix(Ei), this.quaternion.premultiply(Bn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (Le("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Pc), zn.child = e, this.dispatchEvent(zn), zn.child = null) : Le("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(gf), ko.child = e, this.dispatchEvent(ko), ko.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Ei.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Ei.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ei), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(Pc), zn.child = e, this.dispatchEvent(zn), zn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, n = this.children.length; i < n; i++) {
      const o = this.children[i].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const n = this.children;
    for (let s = 0, o = n.length; s < o; s++) n[s].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ys, e, pf), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ys, mf, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === true && i !== null && i.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const n = this.children;
      for (let s = 0, o = n.length; s < o; s++) n[s].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const n = {};
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.castShadow === true && (n.castShadow = true), this.receiveShadow === true && (n.receiveShadow = true), this.visible === false && (n.visible = false), this.frustumCulled === false && (n.frustumCulled = false), this.renderOrder !== 0 && (n.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), n.up = this.up.toArray(), this.matrixAutoUpdate === false && (n.matrixAutoUpdate = false), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (n.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (n.type = "BatchedMesh", n.perObjectFrustumCulled = this.perObjectFrustumCulled, n.sortObjects = this.sortObjects, n.drawRanges = this._drawRanges, n.reservedRanges = this._reservedRanges, n.geometryInfo = this._geometryInfo.map((a) => ({ ...a, boundingBox: a.boundingBox ? a.boundingBox.toJSON() : void 0, boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : void 0 })), n.instanceInfo = this._instanceInfo.map((a) => ({ ...a })), n.availableInstanceIds = this._availableInstanceIds.slice(), n.availableGeometryIds = this._availableGeometryIds.slice(), n.nextIndexStart = this._nextIndexStart, n.nextVertexStart = this._nextVertexStart, n.geometryCount = this._geometryCount, n.maxInstanceCount = this._maxInstanceCount, n.maxVertexCount = this._maxVertexCount, n.maxIndexCount = this._maxIndexCount, n.geometryInitialized = this._geometryInitialized, n.matricesTexture = this._matricesTexture.toJSON(e), n.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (n.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (n.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (n.boundingBox = this.boundingBox.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (n.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          s(e.shapes, u);
        }
        else s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let l = 0, c = this.material.length; l < c; l++) a.push(s(e.materials, this.material[l]));
      n.material = a;
    } else n.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let a = 0; a < this.children.length; a++) n.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        n.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), f = o(e.animations), m = o(e.nodes);
      a.length > 0 && (i.geometries = a), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), h.length > 0 && (i.images = h), u.length > 0 && (i.shapes = u), d.length > 0 && (i.skeletons = d), f.length > 0 && (i.animations = f), m.length > 0 && (i.nodes = m);
    }
    return i.object = n, i;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let i = 0; i < e.children.length; i++) {
      const n = e.children[i];
      this.add(n.clone());
    }
    return this;
  }
}
it.DEFAULT_UP = new R(0, 1, 0);
it.DEFAULT_MATRIX_AUTO_UPDATE = true;
it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const ui = new R(), Ci = new R(), Go = new R(), Ri = new R(), Vn = new R(), kn = new R(), Lc = new R(), Ho = new R(), Wo = new R(), Xo = new R(), qo = new pt(), Yo = new pt(), Zo = new pt();
class jt {
  constructor(e = new R(), t = new R(), i = new R()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, n) {
    n.subVectors(i, t), ui.subVectors(e, t), n.cross(ui);
    const s = n.lengthSq();
    return s > 0 ? n.multiplyScalar(1 / Math.sqrt(s)) : n.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, n, s) {
    ui.subVectors(n, t), Ci.subVectors(i, t), Go.subVectors(e, t);
    const o = ui.dot(ui), a = ui.dot(Ci), l = ui.dot(Go), c = Ci.dot(Ci), h = Ci.dot(Go), u = o * c - a * a;
    if (u === 0) return s.set(0, 0, 0), null;
    const d = 1 / u, f = (c * l - a * h) * d, m = (o * h - a * l) * d;
    return s.set(1 - f - m, m, f);
  }
  static containsPoint(e, t, i, n) {
    return this.getBarycoord(e, t, i, n, Ri) === null ? false : Ri.x >= 0 && Ri.y >= 0 && Ri.x + Ri.y <= 1;
  }
  static getInterpolation(e, t, i, n, s, o, a, l) {
    return this.getBarycoord(e, t, i, n, Ri) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Ri.x), l.addScaledVector(o, Ri.y), l.addScaledVector(a, Ri.z), l);
  }
  static getInterpolatedAttribute(e, t, i, n, s, o) {
    return qo.setScalar(0), Yo.setScalar(0), Zo.setScalar(0), qo.fromBufferAttribute(e, t), Yo.fromBufferAttribute(e, i), Zo.fromBufferAttribute(e, n), o.setScalar(0), o.addScaledVector(qo, s.x), o.addScaledVector(Yo, s.y), o.addScaledVector(Zo, s.z), o;
  }
  static isFrontFacing(e, t, i, n) {
    return ui.subVectors(i, t), Ci.subVectors(e, t), ui.cross(Ci).dot(n) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, n) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this;
  }
  setFromAttributeAndIndices(e, t, i, n) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return ui.subVectors(this.c, this.b), Ci.subVectors(this.a, this.b), ui.cross(Ci).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return jt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return jt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, n, s) {
    return jt.getInterpolation(e, this.a, this.b, this.c, t, i, n, s);
  }
  containsPoint(e) {
    return jt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return jt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, n = this.b, s = this.c;
    let o, a;
    Vn.subVectors(n, i), kn.subVectors(s, i), Ho.subVectors(e, i);
    const l = Vn.dot(Ho), c = kn.dot(Ho);
    if (l <= 0 && c <= 0) return t.copy(i);
    Wo.subVectors(e, n);
    const h = Vn.dot(Wo), u = kn.dot(Wo);
    if (h >= 0 && u <= h) return t.copy(n);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(i).addScaledVector(Vn, o);
    Xo.subVectors(e, s);
    const f = Vn.dot(Xo), m = kn.dot(Xo);
    if (m >= 0 && f <= m) return t.copy(s);
    const _ = f * c - l * m;
    if (_ <= 0 && c >= 0 && m <= 0) return a = c / (c - m), t.copy(i).addScaledVector(kn, a);
    const g = h * m - f * u;
    if (g <= 0 && u - h >= 0 && f - m >= 0) return Lc.subVectors(s, n), a = (u - h) / (u - h + (f - m)), t.copy(n).addScaledVector(Lc, a);
    const p = 1 / (g + _ + d);
    return o = _ * p, a = d * p, t.copy(i).addScaledVector(Vn, o).addScaledVector(kn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const pu = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, qi = { h: 0, s: 0, l: 0 }, cr = { h: 0, s: 0, l: 0 };
function Jo(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class Me {
  constructor(e, t, i) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const n = e;
      n && n.isColor ? this.copy(n) : typeof n == "number" ? this.setHex(n) : typeof n == "string" && this.setStyle(n);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Kt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, je.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, i, n = je.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, je.colorSpaceToWorking(this, n), this;
  }
  setHSL(e, t, i, n = je.workingColorSpace) {
    if (e = Rl(e, 1), t = ze(t, 0, 1), i = ze(i, 0, 1), t === 0) this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t, o = 2 * i - s;
      this.r = Jo(o, s, e + 1 / 3), this.g = Jo(o, s, e), this.b = Jo(o, s, e - 1 / 3);
    }
    return je.colorSpaceToWorking(this, n), this;
  }
  setStyle(e, t = Kt) {
    function i(s) {
      s !== void 0 && parseFloat(s) < 1 && de("Color: Alpha component of " + e + " will be ignored.");
    }
    let n;
    if (n = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = n[1], a = n[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          break;
        default:
          de("Color: Unknown color model " + e);
      }
    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = n[1], o = s.length;
      if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
      if (o === 6) return this.setHex(parseInt(s, 16), t);
      de("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Kt) {
    const i = pu[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : de("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Oi(e.r), this.g = Oi(e.g), this.b = Oi(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ss(e.r), this.g = ss(e.g), this.b = ss(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Kt) {
    return je.workingToColorSpace(Rt.copy(this), e), Math.round(ze(Rt.r * 255, 0, 255)) * 65536 + Math.round(ze(Rt.g * 255, 0, 255)) * 256 + Math.round(ze(Rt.b * 255, 0, 255));
  }
  getHexString(e = Kt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = je.workingColorSpace) {
    je.workingToColorSpace(Rt.copy(this), t);
    const i = Rt.r, n = Rt.g, s = Rt.b, o = Math.max(i, n, s), a = Math.min(i, n, s);
    let l, c;
    const h = (a + o) / 2;
    if (a === o) l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case i:
          l = (n - s) / u + (n < s ? 6 : 0);
          break;
        case n:
          l = (s - i) / u + 2;
          break;
        case s:
          l = (i - n) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = je.workingColorSpace) {
    return je.workingToColorSpace(Rt.copy(this), t), e.r = Rt.r, e.g = Rt.g, e.b = Rt.b, e;
  }
  getStyle(e = Kt) {
    je.workingToColorSpace(Rt.copy(this), e);
    const t = Rt.r, i = Rt.g, n = Rt.b;
    return e !== Kt ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(n * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(qi), this.setHSL(qi.h + e, qi.s + t, qi.l + i);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(qi), e.getHSL(cr);
    const i = Fs(qi.h, cr.h, t), n = Fs(qi.s, cr.s, t), s = Fs(qi.l, cr.l, t);
    return this.setHSL(i, n, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, i = this.g, n = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * i + s[6] * n, this.g = s[1] * t + s[4] * i + s[7] * n, this.b = s[2] * t + s[5] * i + s[8] * n, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Rt = new Me();
Me.NAMES = pu;
let _f = 0;
class Bt extends Vi {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: _f++ }), this.uuid = ti(), this.name = "", this.type = "Material", this.blending = ns, this.side = Ki, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Sa, this.blendDst = ba, this.blendEquation = vn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Me(0, 0, 0), this.blendAlpha = 0, this.depthFunc = os, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = vc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ln, this.stencilZFail = Ln, this.stencilZPass = Ln, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        de(`Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const n = this[t];
      if (n === void 0) {
        de(`Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== ns && (i.blending = this.blending), this.side !== Ki && (i.side = this.side), this.vertexColors === true && (i.vertexColors = true), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === true && (i.transparent = true), this.blendSrc !== Sa && (i.blendSrc = this.blendSrc), this.blendDst !== ba && (i.blendDst = this.blendDst), this.blendEquation !== vn && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== os && (i.depthFunc = this.depthFunc), this.depthTest === false && (i.depthTest = this.depthTest), this.depthWrite === false && (i.depthWrite = this.depthWrite), this.colorWrite === false && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== vc && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ln && (i.stencilFail = this.stencilFail), this.stencilZFail !== Ln && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== Ln && (i.stencilZPass = this.stencilZPass), this.stencilWrite === true && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === true && (i.polygonOffset = true), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === true && (i.dithering = true), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === true && (i.alphaHash = true), this.alphaToCoverage === true && (i.alphaToCoverage = true), this.premultipliedAlpha === true && (i.premultipliedAlpha = true), this.forceSinglePass === true && (i.forceSinglePass = true), this.allowOverride === false && (i.allowOverride = false), this.wireframe === true && (i.wireframe = true), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (i.flatShading = true), this.visible === false && (i.visible = false), this.toneMapped === false && (i.toneMapped = false), this.fog === false && (i.fog = false), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function n(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = n(e.textures), o = n(e.images);
      s.length > 0 && (i.textures = s), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const n = t.length;
      i = new Array(n);
      for (let s = 0; s !== n; ++s) i[s] = t[s].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
class Cn extends Bt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Me(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new li(), this.combine = go, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Li = vf();
function vf() {
  const r = new ArrayBuffer(4), e = new Float32Array(r), t = new Uint32Array(r), i = new Uint32Array(512), n = new Uint32Array(512);
  for (let l = 0; l < 256; ++l) {
    const c = l - 127;
    c < -27 ? (i[l] = 0, i[l | 256] = 32768, n[l] = 24, n[l | 256] = 24) : c < -14 ? (i[l] = 1024 >> -c - 14, i[l | 256] = 1024 >> -c - 14 | 32768, n[l] = -c - 1, n[l | 256] = -c - 1) : c <= 15 ? (i[l] = c + 15 << 10, i[l | 256] = c + 15 << 10 | 32768, n[l] = 13, n[l | 256] = 13) : c < 128 ? (i[l] = 31744, i[l | 256] = 64512, n[l] = 24, n[l | 256] = 24) : (i[l] = 31744, i[l | 256] = 64512, n[l] = 13, n[l | 256] = 13);
  }
  const s = new Uint32Array(2048), o = new Uint32Array(64), a = new Uint32Array(64);
  for (let l = 1; l < 1024; ++l) {
    let c = l << 13, h = 0;
    for (; (c & 8388608) === 0; ) c <<= 1, h -= 8388608;
    c &= -8388609, h += 947912704, s[l] = c | h;
  }
  for (let l = 1024; l < 2048; ++l) s[l] = 939524096 + (l - 1024 << 13);
  for (let l = 1; l < 31; ++l) o[l] = l << 23;
  o[31] = 1199570944, o[32] = 2147483648;
  for (let l = 33; l < 63; ++l) o[l] = 2147483648 + (l - 32 << 23);
  o[63] = 3347054592;
  for (let l = 1; l < 64; ++l) l !== 32 && (a[l] = 1024);
  return { floatView: e, uint32View: t, baseTable: i, shiftTable: n, mantissaTable: s, exponentTable: o, offsetTable: a };
}
function Gt(r) {
  Math.abs(r) > 65504 && de("DataUtils.toHalfFloat(): Value out of range."), r = ze(r, -65504, 65504), Li.floatView[0] = r;
  const e = Li.uint32View[0], t = e >> 23 & 511;
  return Li.baseTable[t] + ((e & 8388607) >> Li.shiftTable[t]);
}
function Ds(r) {
  const e = r >> 10;
  return Li.uint32View[0] = Li.mantissaTable[Li.offsetTable[e] + (r & 1023)] + Li.exponentTable[e], Li.floatView[0];
}
class Ty {
  static toHalfFloat(e) {
    return Gt(e);
  }
  static fromHalfFloat(e) {
    return Ds(e);
  }
}
const St = new R(), hr = new K();
let xf = 0;
class ut {
  constructor(e, t, i = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: xf++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = oo, this.updateRanges = [], this.gpuType = Ht, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let n = 0, s = this.itemSize; n < s; n++) this.array[e + n] = t.array[i + n];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++) hr.fromBufferAttribute(this, t), hr.applyMatrix3(e), this.setXY(t, hr.x, hr.y);
    else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++) St.fromBufferAttribute(this, t), St.applyMatrix3(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++) St.fromBufferAttribute(this, t), St.applyMatrix4(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) St.fromBufferAttribute(this, t), St.applyNormalMatrix(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) St.fromBufferAttribute(this, t), St.transformDirection(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = Ot(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = Ze(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, n) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array), n = Ze(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this;
  }
  setXYZW(e, t, i, n, s) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array), n = Ze(n, this.array), s = Ze(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== oo && (e.usage = this.usage), e;
  }
}
class Ay extends ut {
  constructor(e, t, i) {
    super(new Int8Array(e), t, i);
  }
}
class wy extends ut {
  constructor(e, t, i) {
    super(new Uint8Array(e), t, i);
  }
}
class Ey extends ut {
  constructor(e, t, i) {
    super(new Uint8ClampedArray(e), t, i);
  }
}
class Cy extends ut {
  constructor(e, t, i) {
    super(new Int16Array(e), t, i);
  }
}
class mu extends ut {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class Ry extends ut {
  constructor(e, t, i) {
    super(new Int32Array(e), t, i);
  }
}
class gu extends ut {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class Iy extends ut {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i), this.isFloat16BufferAttribute = true;
  }
  getX(e) {
    let t = Ds(this.array[e * this.itemSize]);
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize] = Gt(t), this;
  }
  getY(e) {
    let t = Ds(this.array[e * this.itemSize + 1]);
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 1] = Gt(t), this;
  }
  getZ(e) {
    let t = Ds(this.array[e * this.itemSize + 2]);
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 2] = Gt(t), this;
  }
  getW(e) {
    let t = Ds(this.array[e * this.itemSize + 3]);
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 3] = Gt(t), this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array)), this.array[e + 0] = Gt(t), this.array[e + 1] = Gt(i), this;
  }
  setXYZ(e, t, i, n) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array), n = Ze(n, this.array)), this.array[e + 0] = Gt(t), this.array[e + 1] = Gt(i), this.array[e + 2] = Gt(n), this;
  }
  setXYZW(e, t, i, n, s) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array), n = Ze(n, this.array), s = Ze(s, this.array)), this.array[e + 0] = Gt(t), this.array[e + 1] = Gt(i), this.array[e + 2] = Gt(n), this.array[e + 3] = Gt(s), this;
  }
}
class Ae extends ut {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let yf = 0;
const ri = new Ge(), $o = new it(), Gn = new R(), $t = new Ft(), Ms = new Ft(), Et = new R();
class qe extends Vi {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: yf++ }), this.uuid = ti(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (uu(e) ? gu : mu)(e, 1) : this.index = e, this;
  }
  setIndirect(e, t = 0) {
    return this.indirect = e, this.indirectOffset = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Ye().getNormalMatrix(e);
      i.applyNormalMatrix(s), i.needsUpdate = true;
    }
    const n = this.attributes.tangent;
    return n !== void 0 && (n.transformDirection(e), n.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return ri.makeRotationFromQuaternion(e), this.applyMatrix4(ri), this;
  }
  rotateX(e) {
    return ri.makeRotationX(e), this.applyMatrix4(ri), this;
  }
  rotateY(e) {
    return ri.makeRotationY(e), this.applyMatrix4(ri), this;
  }
  rotateZ(e) {
    return ri.makeRotationZ(e), this.applyMatrix4(ri), this;
  }
  translate(e, t, i) {
    return ri.makeTranslation(e, t, i), this.applyMatrix4(ri), this;
  }
  scale(e, t, i) {
    return ri.makeScale(e, t, i), this.applyMatrix4(ri), this;
  }
  lookAt(e) {
    return $o.lookAt(e), $o.updateMatrix(), this.applyMatrix4($o.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Gn).negate(), this.translate(Gn.x, Gn.y, Gn.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let n = 0, s = e.length; n < s; n++) {
        const o = e[n];
        i.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new Ae(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let n = 0; n < i; n++) {
        const s = e[n];
        t.setXYZ(n, s.x, s.y, s.z || 0);
      }
      e.length > t.count && de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ft());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new R(-1 / 0, -1 / 0, -1 / 0), new R(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let i = 0, n = t.length; i < n; i++) {
        const s = t[i];
        $t.setFromBufferAttribute(s), this.morphTargetsRelative ? (Et.addVectors(this.boundingBox.min, $t.min), this.boundingBox.expandByPoint(Et), Et.addVectors(this.boundingBox.max, $t.max), this.boundingBox.expandByPoint(Et)) : (this.boundingBox.expandByPoint($t.min), this.boundingBox.expandByPoint($t.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Lt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if ($t.setFromBufferAttribute(e), t) for (let s = 0, o = t.length; s < o; s++) {
        const a = t[s];
        Ms.setFromBufferAttribute(a), this.morphTargetsRelative ? (Et.addVectors($t.min, Ms.min), $t.expandByPoint(Et), Et.addVectors($t.max, Ms.max), $t.expandByPoint(Et)) : ($t.expandByPoint(Ms.min), $t.expandByPoint(Ms.max));
      }
      $t.getCenter(i);
      let n = 0;
      for (let s = 0, o = e.count; s < o; s++) Et.fromBufferAttribute(e, s), n = Math.max(n, i.distanceToSquared(Et));
      if (t) for (let s = 0, o = t.length; s < o; s++) {
        const a = t[s], l = this.morphTargetsRelative;
        for (let c = 0, h = a.count; c < h; c++) Et.fromBufferAttribute(a, c), l && (Gn.fromBufferAttribute(e, c), Et.add(Gn)), n = Math.max(n, i.distanceToSquared(Et));
      }
      this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, n = t.normal, s = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new ut(new Float32Array(4 * i.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let P = 0; P < i.count; P++) a[P] = new R(), l[P] = new R();
    const c = new R(), h = new R(), u = new R(), d = new K(), f = new K(), m = new K(), _ = new R(), g = new R();
    function p(P, S, b) {
      c.fromBufferAttribute(i, P), h.fromBufferAttribute(i, S), u.fromBufferAttribute(i, b), d.fromBufferAttribute(s, P), f.fromBufferAttribute(s, S), m.fromBufferAttribute(s, b), h.sub(c), u.sub(c), f.sub(d), m.sub(d);
      const L = 1 / (f.x * m.y - m.x * f.y);
      isFinite(L) && (_.copy(h).multiplyScalar(m.y).addScaledVector(u, -f.y).multiplyScalar(L), g.copy(u).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(L), a[P].add(_), a[S].add(_), a[b].add(_), l[P].add(g), l[S].add(g), l[b].add(g));
    }
    let x = this.groups;
    x.length === 0 && (x = [{ start: 0, count: e.count }]);
    for (let P = 0, S = x.length; P < S; ++P) {
      const b = x[P], L = b.start, O = b.count;
      for (let B = L, G = L + O; B < G; B += 3) p(e.getX(B + 0), e.getX(B + 1), e.getX(B + 2));
    }
    const v = new R(), M = new R(), A = new R(), w = new R();
    function C(P) {
      A.fromBufferAttribute(n, P), w.copy(A);
      const S = a[P];
      v.copy(S), v.sub(A.multiplyScalar(A.dot(S))).normalize(), M.crossVectors(w, S);
      const L = M.dot(l[P]) < 0 ? -1 : 1;
      o.setXYZW(P, v.x, v.y, v.z, L);
    }
    for (let P = 0, S = x.length; P < S; ++P) {
      const b = x[P], L = b.start, O = b.count;
      for (let B = L, G = L + O; B < G; B += 3) C(e.getX(B + 0)), C(e.getX(B + 1)), C(e.getX(B + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0) i = new ut(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else for (let d = 0, f = i.count; d < f; d++) i.setXYZ(d, 0, 0, 0);
      const n = new R(), s = new R(), o = new R(), a = new R(), l = new R(), c = new R(), h = new R(), u = new R();
      if (e) for (let d = 0, f = e.count; d < f; d += 3) {
        const m = e.getX(d + 0), _ = e.getX(d + 1), g = e.getX(d + 2);
        n.fromBufferAttribute(t, m), s.fromBufferAttribute(t, _), o.fromBufferAttribute(t, g), h.subVectors(o, s), u.subVectors(n, s), h.cross(u), a.fromBufferAttribute(i, m), l.fromBufferAttribute(i, _), c.fromBufferAttribute(i, g), a.add(h), l.add(h), c.add(h), i.setXYZ(m, a.x, a.y, a.z), i.setXYZ(_, l.x, l.y, l.z), i.setXYZ(g, c.x, c.y, c.z);
      }
      else for (let d = 0, f = t.count; d < f; d += 3) n.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, s), u.subVectors(n, s), h.cross(u), i.setXYZ(d + 0, h.x, h.y, h.z), i.setXYZ(d + 1, h.x, h.y, h.z), i.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++) Et.fromBufferAttribute(e, t), Et.normalize(), e.setXYZ(t, Et.x, Et.y, Et.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, d = new c.constructor(l.length * h);
      let f = 0, m = 0;
      for (let _ = 0, g = l.length; _ < g; _++) {
        a.isInterleavedBufferAttribute ? f = l[_] * a.data.stride + a.offset : f = l[_] * h;
        for (let p = 0; p < h; p++) d[m++] = c[f++];
      }
      return new ut(d, h, u);
    }
    if (this.index === null) return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new qe(), i = this.index.array, n = this.attributes;
    for (const a in n) {
      const l = n[a], c = e(l, i);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], f = e(d, i);
        l.push(f);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const n = {};
    let s = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (n[l] = h, s = true);
    }
    s && (e.data.morphAttributes = n, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = a.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone());
    const n = e.attributes;
    for (const c in n) {
      const h = n[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], u = s[c];
      for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Dc = new Ge(), rn = new Ks(), ur = new Lt(), Uc = new R(), dr = new R(), fr = new R(), pr = new R(), Ko = new R(), mr = new R(), Nc = new R(), gr = new R();
class Tt extends it {
  constructor(e = new qe(), t = new Cn()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const n = t[i[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = n.length; s < o; s++) {
          const a = n[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry, n = i.attributes.position, s = i.morphAttributes.position, o = i.morphTargetsRelative;
    t.fromBufferAttribute(n, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      mr.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = a[l], u = s[l];
        h !== 0 && (Ko.fromBufferAttribute(u, e), o ? mr.addScaledVector(Ko, h) : mr.addScaledVector(Ko.sub(t), h));
      }
      t.add(mr);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, n = this.material, s = this.matrixWorld;
    n !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), ur.copy(i.boundingSphere), ur.applyMatrix4(s), rn.copy(e.ray).recast(e.near), !(ur.containsPoint(rn.origin) === false && (rn.intersectSphere(ur, Uc) === null || rn.origin.distanceToSquared(Uc) > (e.far - e.near) ** 2)) && (Dc.copy(s).invert(), rn.copy(e.ray).applyMatrix4(Dc), !(i.boundingBox !== null && rn.intersectsBox(i.boundingBox) === false) && this._computeIntersections(e, t, rn)));
  }
  _computeIntersections(e, t, i) {
    let n;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let m = 0, _ = d.length; m < _; m++) {
      const g = d[m], p = o[g.materialIndex], x = Math.max(g.start, f.start), v = Math.min(a.count, Math.min(g.start + g.count, f.start + f.count));
      for (let M = x, A = v; M < A; M += 3) {
        const w = a.getX(M), C = a.getX(M + 1), P = a.getX(M + 2);
        n = _r(this, p, e, i, c, h, u, w, C, P), n && (n.faceIndex = Math.floor(M / 3), n.face.materialIndex = g.materialIndex, t.push(n));
      }
    }
    else {
      const m = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
      for (let g = m, p = _; g < p; g += 3) {
        const x = a.getX(g), v = a.getX(g + 1), M = a.getX(g + 2);
        n = _r(this, o, e, i, c, h, u, x, v, M), n && (n.faceIndex = Math.floor(g / 3), t.push(n));
      }
    }
    else if (l !== void 0) if (Array.isArray(o)) for (let m = 0, _ = d.length; m < _; m++) {
      const g = d[m], p = o[g.materialIndex], x = Math.max(g.start, f.start), v = Math.min(l.count, Math.min(g.start + g.count, f.start + f.count));
      for (let M = x, A = v; M < A; M += 3) {
        const w = M, C = M + 1, P = M + 2;
        n = _r(this, p, e, i, c, h, u, w, C, P), n && (n.faceIndex = Math.floor(M / 3), n.face.materialIndex = g.materialIndex, t.push(n));
      }
    }
    else {
      const m = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count);
      for (let g = m, p = _; g < p; g += 3) {
        const x = g, v = g + 1, M = g + 2;
        n = _r(this, o, e, i, c, h, u, x, v, M), n && (n.faceIndex = Math.floor(g / 3), t.push(n));
      }
    }
  }
}
function Mf(r, e, t, i, n, s, o, a) {
  let l;
  if (e.side === Xt ? l = i.intersectTriangle(o, s, n, true, a) : l = i.intersectTriangle(n, s, o, e.side === Ki, a), l === null) return null;
  gr.copy(a), gr.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(gr);
  return c < t.near || c > t.far ? null : { distance: c, point: gr.clone(), object: r };
}
function _r(r, e, t, i, n, s, o, a, l, c) {
  r.getVertexPosition(a, dr), r.getVertexPosition(l, fr), r.getVertexPosition(c, pr);
  const h = Mf(r, e, t, i, dr, fr, pr, Nc);
  if (h) {
    const u = new R();
    jt.getBarycoord(Nc, dr, fr, pr, u), n && (h.uv = jt.getInterpolatedAttribute(n, a, l, c, u, new K())), s && (h.uv1 = jt.getInterpolatedAttribute(s, a, l, c, u, new K())), o && (h.normal = jt.getInterpolatedAttribute(o, a, l, c, u, new R()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a, b: l, c, normal: new R(), materialIndex: 0 };
    jt.getNormal(dr, fr, pr, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class fs extends qe {
  constructor(e = 1, t = 1, i = 1, n = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: i, widthSegments: n, heightSegments: s, depthSegments: o };
    const a = this;
    n = Math.floor(n), s = Math.floor(s), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let d = 0, f = 0;
    m("z", "y", "x", -1, -1, i, t, e, o, s, 0), m("z", "y", "x", 1, -1, i, t, -e, o, s, 1), m("x", "z", "y", 1, 1, e, i, t, n, o, 2), m("x", "z", "y", 1, -1, e, i, -t, n, o, 3), m("x", "y", "z", 1, -1, e, t, i, n, s, 4), m("x", "y", "z", -1, -1, e, t, -i, n, s, 5), this.setIndex(l), this.setAttribute("position", new Ae(c, 3)), this.setAttribute("normal", new Ae(h, 3)), this.setAttribute("uv", new Ae(u, 2));
    function m(_, g, p, x, v, M, A, w, C, P, S) {
      const b = M / C, L = A / P, O = M / 2, B = A / 2, G = w / 2, q = C + 1, V = P + 1;
      let H = 0, j = 0;
      const pe = new R();
      for (let ae = 0; ae < V; ae++) {
        const he = ae * L - B;
        for (let We = 0; We < q; We++) {
          const ke = We * b - O;
          pe[_] = ke * x, pe[g] = he * v, pe[p] = G, c.push(pe.x, pe.y, pe.z), pe[_] = 0, pe[g] = 0, pe[p] = w > 0 ? 1 : -1, h.push(pe.x, pe.y, pe.z), u.push(We / C), u.push(1 - ae / P), H += 1;
        }
      }
      for (let ae = 0; ae < P; ae++) for (let he = 0; he < C; he++) {
        const We = d + he + q * ae, ke = d + he + q * (ae + 1), ot = d + (he + 1) + q * (ae + 1), at = d + (he + 1) + q * ae;
        l.push(We, ke, at), l.push(ke, ot, at), j += 6;
      }
      a.addGroup(f, j, S), f += j, d += H;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new fs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function hs(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const i in r[t]) {
      const n = r[t][i];
      n && (n.isColor || n.isMatrix3 || n.isMatrix4 || n.isVector2 || n.isVector3 || n.isVector4 || n.isTexture || n.isQuaternion) ? n.isRenderTargetTexture ? (de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = n.clone() : Array.isArray(n) ? e[t][i] = n.slice() : e[t][i] = n;
    }
  }
  return e;
}
function Nt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const i = hs(r[t]);
    for (const n in i) e[n] = i[n];
  }
  return e;
}
function Sf(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function _u(r) {
  const e = r.getRenderTarget();
  return e === null ? r.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : je.workingColorSpace;
}
const bf = { clone: hs, merge: Nt };
var Tf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Af = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class fi extends Bt {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Tf, this.fragmentShader = Af, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = hs(e.uniforms), this.uniformsGroups = Sf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const n in this.uniforms) {
      const o = this.uniforms[n].value;
      o && o.isTexture ? t.uniforms[n] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[n] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[n] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[n] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[n] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[n] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[n] = { type: "m4", value: o.toArray() } : t.uniforms[n] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const n in this.extensions) this.extensions[n] === true && (i[n] = true);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Dl extends it {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Ge(), this.projectionMatrix = new Ge(), this.projectionMatrixInverse = new Ge(), this.coordinateSystem = oi, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Yi = new R(), Oc = new K(), Fc = new K();
class Pt extends Dl {
  constructor(e = 50, t = 1, i = 0.1, n = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = cs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(bn * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return cs * 2 * Math.atan(Math.tan(bn * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    Yi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Yi.x, Yi.y).multiplyScalar(-e / Yi.z), Yi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(Yi.x, Yi.y).multiplyScalar(-e / Yi.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Oc, Fc), t.subVectors(Fc, Oc);
  }
  setViewOffset(e, t, i, n, s, o) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(bn * 0.5 * this.fov) / this.zoom, i = 2 * t, n = this.aspect * i, s = -0.5 * n;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      s += o.offsetX * n / l, t -= o.offsetY * i / c, n *= o.width / l, i *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + n, t, t - i, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Hn = -90, Wn = 1;
class wf extends it {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const n = new Pt(Hn, Wn, e, t);
    n.layers = this.layers, this.add(n);
    const s = new Pt(Hn, Wn, e, t);
    s.layers = this.layers, this.add(s);
    const o = new Pt(Hn, Wn, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Pt(Hn, Wn, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Pt(Hn, Wn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Pt(Hn, Wn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, n, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === oi) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), n.up.set(0, 1, 0), n.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Gs) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), n.up.set(0, -1, 0), n.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: n } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), m = e.xr.enabled;
    e.xr.enabled = false;
    const _ = i.texture.generateMipmaps;
    i.texture.generateMipmaps = false, e.setRenderTarget(i, 0, n), e.render(t, s), e.setRenderTarget(i, 1, n), e.render(t, o), e.setRenderTarget(i, 2, n), e.render(t, a), e.setRenderTarget(i, 3, n), e.render(t, l), e.setRenderTarget(i, 4, n), e.render(t, c), i.texture.generateMipmaps = _, e.setRenderTarget(i, 5, n), e.render(t, h), e.setRenderTarget(u, d, f), e.xr.enabled = m, i.texture.needsPMREMUpdate = true;
  }
}
class vo extends Mt {
  constructor(e = [], t = Fi, i, n, s, o, a, l, c, h) {
    super(e, t, i, n, s, o, a, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class vu extends ai {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const i = { width: e, height: e, depth: 1 }, n = [i, i, i, i, i, i];
    this.texture = new vo(n), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, n = new fs(5, 5, 5), s = new fi({ name: "CubemapFromEquirect", uniforms: hs(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: Xt, blending: Ni });
    s.uniforms.tEquirect.value = t;
    const o = new Tt(n, s), a = t.minFilter;
    return t.minFilter === Di && (t.minFilter = mt), new wf(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t = true, i = true, n = true) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, i, n);
    e.setRenderTarget(s);
  }
}
class Us extends it {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const Ef = { type: "move" };
class Qo {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Us(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Us(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Us(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, i) {
    let n = null, s = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = true;
        for (const _ of e.hand.values()) {
          const g = t.getJointPose(_, i), p = this._getHandJoint(c, _);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = g.radius), p.visible = g !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, m = 5e-3;
        c.inputState.pinching && d > f + m ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= f - m && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, i), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
      a !== null && (n = t.getPose(e.targetRaySpace, i), n === null && s !== null && (n = s), n !== null && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, n.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(n.linearVelocity)) : a.hasLinearVelocity = false, n.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(n.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(Ef)));
    }
    return a !== null && (a.visible = n !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new Us();
      i.matrixAutoUpdate = false, i.visible = false, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class Ul {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = true, this.name = "", this.color = new Me(e), this.density = t;
  }
  clone() {
    return new Ul(this.color, this.density);
  }
  toJSON() {
    return { type: "FogExp2", name: this.name, color: this.color.getHex(), density: this.density };
  }
}
class Nl {
  constructor(e, t = 1, i = 1e3) {
    this.isFog = true, this.name = "", this.color = new Me(e), this.near = t, this.far = i;
  }
  clone() {
    return new Nl(this.color, this.near, this.far);
  }
  toJSON() {
    return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
  }
}
class Cf extends it {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new li(), this.environmentIntensity = 1, this.environmentRotation = new li(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Ol {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = oo, this.updateRanges = [], this.version = 0, this.uuid = ti();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, i) {
    e *= this.stride, i *= t.stride;
    for (let n = 0, s = this.stride; n < s; n++) this.array[e + n] = t.array[i + n];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = ti()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = ti()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Ut = new R();
class us {
  constructor(e, t, i, n = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = i, this.normalized = n;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.data.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.applyMatrix4(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.applyNormalMatrix(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.transformDirection(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (i = Ot(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = Ze(i, this.array)), this.data.array[e * this.data.stride + this.offset + t] = i, this;
  }
  setX(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setXY(e, t, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array), n = Ze(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = n, this;
  }
  setXYZW(e, t, i, n, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), i = Ze(i, this.array), n = Ze(n, this.array), s = Ze(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = n, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const n = i * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[n + s]);
      }
      return new ut(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new us(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const n = i * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[n + s]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
class xu extends Bt {
  constructor(e) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Me(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let Xn;
const Ss = new R(), qn = new R(), Yn = new R(), Zn = new K(), bs = new K(), yu = new Ge(), vr = new R(), Ts = new R(), xr = new R(), Bc = new K(), jo = new K(), zc = new K();
class Rf extends it {
  constructor(e = new xu()) {
    if (super(), this.isSprite = true, this.type = "Sprite", Xn === void 0) {
      Xn = new qe();
      const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), i = new Ol(t, 5);
      Xn.setIndex([0, 1, 2, 0, 2, 3]), Xn.setAttribute("position", new us(i, 3, 0, false)), Xn.setAttribute("uv", new us(i, 2, 3, false));
    }
    this.geometry = Xn, this.material = e, this.center = new K(0.5, 0.5), this.count = 1;
  }
  raycast(e, t) {
    e.camera === null && Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), qn.setFromMatrixScale(this.matrixWorld), yu.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Yn.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && qn.multiplyScalar(-Yn.z);
    const i = this.material.rotation;
    let n, s;
    i !== 0 && (s = Math.cos(i), n = Math.sin(i));
    const o = this.center;
    yr(vr.set(-0.5, -0.5, 0), Yn, o, qn, n, s), yr(Ts.set(0.5, -0.5, 0), Yn, o, qn, n, s), yr(xr.set(0.5, 0.5, 0), Yn, o, qn, n, s), Bc.set(0, 0), jo.set(1, 0), zc.set(1, 1);
    let a = e.ray.intersectTriangle(vr, Ts, xr, false, Ss);
    if (a === null && (yr(Ts.set(-0.5, 0.5, 0), Yn, o, qn, n, s), jo.set(0, 1), a = e.ray.intersectTriangle(vr, xr, Ts, false, Ss), a === null)) return;
    const l = e.ray.origin.distanceTo(Ss);
    l < e.near || l > e.far || t.push({ distance: l, point: Ss.clone(), uv: jt.getInterpolation(Ss, vr, Ts, xr, Bc, jo, zc, new K()), face: null, object: this });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function yr(r, e, t, i, n, s) {
  Zn.subVectors(r, t).addScalar(0.5).multiply(i), n !== void 0 ? (bs.x = s * Zn.x - n * Zn.y, bs.y = n * Zn.x + s * Zn.y) : bs.copy(Zn), r.copy(e), r.x += bs.x, r.y += bs.y, r.applyMatrix4(yu);
}
const Mr = new R(), Vc = new R();
class If extends it {
  constructor() {
    super(), this.isLOD = true, this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: true, value: [] } }), this.autoUpdate = true;
  }
  copy(e) {
    super.copy(e, false);
    const t = e.levels;
    for (let i = 0, n = t.length; i < n; i++) {
      const s = t[i];
      this.addLevel(s.object.clone(), s.distance, s.hysteresis);
    }
    return this.autoUpdate = e.autoUpdate, this;
  }
  addLevel(e, t = 0, i = 0) {
    t = Math.abs(t);
    const n = this.levels;
    let s;
    for (s = 0; s < n.length && !(t < n[s].distance); s++) ;
    return n.splice(s, 0, { distance: t, hysteresis: i, object: e }), this.add(e), this;
  }
  removeLevel(e) {
    const t = this.levels;
    for (let i = 0; i < t.length; i++) if (t[i].distance === e) {
      const n = t.splice(i, 1);
      return this.remove(n[0].object), true;
    }
    return false;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(e) {
    const t = this.levels;
    if (t.length > 0) {
      let i, n;
      for (i = 1, n = t.length; i < n; i++) {
        let s = t[i].distance;
        if (t[i].object.visible && (s -= s * t[i].hysteresis), e < s) break;
      }
      return t[i - 1].object;
    }
    return null;
  }
  raycast(e, t) {
    if (this.levels.length > 0) {
      Mr.setFromMatrixPosition(this.matrixWorld);
      const n = e.ray.origin.distanceTo(Mr);
      this.getObjectForDistance(n).raycast(e, t);
    }
  }
  update(e) {
    const t = this.levels;
    if (t.length > 1) {
      Mr.setFromMatrixPosition(e.matrixWorld), Vc.setFromMatrixPosition(this.matrixWorld);
      const i = Mr.distanceTo(Vc) / e.zoom;
      t[0].object.visible = true;
      let n, s;
      for (n = 1, s = t.length; n < s; n++) {
        let o = t[n].distance;
        if (t[n].object.visible && (o -= o * t[n].hysteresis), i >= o) t[n - 1].object.visible = false, t[n].object.visible = true;
        else break;
      }
      for (this._currentLevel = n - 1; n < s; n++) t[n].object.visible = false;
    }
  }
  toJSON(e) {
    const t = super.toJSON(e);
    this.autoUpdate === false && (t.object.autoUpdate = false), t.object.levels = [];
    const i = this.levels;
    for (let n = 0, s = i.length; n < s; n++) {
      const o = i[n];
      t.object.levels.push({ object: o.object.uuid, distance: o.distance, hysteresis: o.hysteresis });
    }
    return t;
  }
}
const kc = new R(), Gc = new pt(), Hc = new pt(), Pf = new R(), Wc = new Ge(), Sr = new R(), ea = new Lt(), Xc = new Ge(), ta = new Ks();
class Lf extends Tt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = _c, this.bindMatrix = new Ge(), this.bindMatrixInverse = new Ge(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Ft()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let i = 0; i < t.count; i++) this.getVertexPosition(i, Sr), this.boundingBox.expandByPoint(Sr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Lt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let i = 0; i < t.count; i++) this.getVertexPosition(i, Sr), this.boundingSphere.expandByPoint(Sr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const i = this.material, n = this.matrixWorld;
    i !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ea.copy(this.boundingSphere), ea.applyMatrix4(n), e.ray.intersectsSphere(ea) !== false && (Xc.copy(n).invert(), ta.copy(e.ray).applyMatrix4(Xc), !(this.boundingBox !== null && ta.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, ta)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new pt(), t = this.geometry.attributes.skinWeight;
    for (let i = 0, n = t.count; i < n; i++) {
      e.fromBufferAttribute(t, i);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(i, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === _c ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Cd ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : de("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const i = this.skeleton, n = this.geometry;
    Gc.fromBufferAttribute(n.attributes.skinIndex, e), Hc.fromBufferAttribute(n.attributes.skinWeight, e), kc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const o = Hc.getComponent(s);
      if (o !== 0) {
        const a = Gc.getComponent(s);
        Wc.multiplyMatrices(i.bones[a].matrixWorld, i.boneInverses[a]), t.addScaledVector(Pf.copy(kc).applyMatrix4(Wc), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Mu extends it {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class Si extends Mt {
  constructor(e = null, t = 1, i = 1, n, s, o, a, l, c = bt, h = bt, u, d) {
    super(null, o, a, l, c, h, n, s, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: i }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const qc = new Ge(), Df = new Ge();
class Fl {
  constructor(e = [], t = []) {
    this.uuid = ti(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.previousBoneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      de("Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new Ge());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = new Ge();
      this.bones[e] && i.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(i);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = this.bones[e];
      i && i.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const i = this.bones[e];
      i && (i.parent && i.parent.isBone ? (i.matrix.copy(i.parent.matrixWorld).invert(), i.matrix.multiply(i.matrixWorld)) : i.matrix.copy(i.matrixWorld), i.matrix.decompose(i.position, i.quaternion, i.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, i = this.boneMatrices, n = this.boneTexture;
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s] ? e[s].matrixWorld : Df;
      qc.multiplyMatrices(a, t[s]), qc.toArray(i, s * 16);
    }
    n !== null && (n.needsUpdate = true);
  }
  clone() {
    return new Fl(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const i = new Si(t, e, e, Wt, Ht);
    return i.needsUpdate = true, this.boneMatrices = t, this.boneTexture = i, this;
  }
  getBoneByName(e) {
    for (let t = 0, i = this.bones.length; t < i; t++) {
      const n = this.bones[t];
      if (n.name === e) return n;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let i = 0, n = e.bones.length; i < n; i++) {
      const s = e.bones[i];
      let o = t[s];
      o === void 0 && (de("Skeleton: No bone found with UUID:", s), o = new Mu()), this.bones.push(o), this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, i = this.boneInverses;
    for (let n = 0, s = t.length; n < s; n++) {
      const o = t[n];
      e.bones.push(o.uuid);
      const a = i[n];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class Xs extends ut {
  constructor(e, t, i, n = 1) {
    super(e, t, i), this.isInstancedBufferAttribute = true, this.meshPerAttribute = n;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const Jn = new Ge(), Yc = new Ge(), br = [], Zc = new Ft(), Uf = new Ge(), As = new Tt(), ws = new Lt();
class Nf extends Tt {
  constructor(e, t, i) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new Xs(new Float32Array(i * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = i, this.boundingBox = null, this.boundingSphere = null;
    for (let n = 0; n < i; n++) this.setMatrixAt(n, Uf);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Ft()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, Jn), Zc.copy(e.boundingBox).applyMatrix4(Jn), this.boundingBox.union(Zc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Lt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, Jn), ws.copy(e.boundingSphere).applyMatrix4(Jn), this.boundingSphere.union(ws);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const i = t.morphTargetInfluences, n = this.morphTexture.source.data.data, s = i.length + 1, o = e * s + 1;
    for (let a = 0; a < i.length; a++) i[a] = n[o + a];
  }
  raycast(e, t) {
    const i = this.matrixWorld, n = this.count;
    if (As.geometry = this.geometry, As.material = this.material, As.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ws.copy(this.boundingSphere), ws.applyMatrix4(i), e.ray.intersectsSphere(ws) !== false)) for (let s = 0; s < n; s++) {
      this.getMatrixAt(s, Jn), Yc.multiplyMatrices(i, Jn), As.matrixWorld = Yc, As.raycast(e, br);
      for (let o = 0, a = br.length; o < a; o++) {
        const l = br[o];
        l.instanceId = s, l.object = this, t.push(l);
      }
      br.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Xs(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const i = t.morphTargetInfluences, n = i.length + 1;
    this.morphTexture === null && (this.morphTexture = new Si(new Float32Array(n * this.count), n, this.count, bl, Ht));
    const s = this.morphTexture.source.data.data;
    let o = 0;
    for (let c = 0; c < i.length; c++) o += i[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = n * e;
    s[l] = a, s.set(i, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const ia = new R(), Of = new R(), Ff = new Ye();
class _n {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, n) {
    return this.normal.set(e, t, i), this.constant = n, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const n = ia.subVectors(i, t).cross(Of.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(n, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(ia), n = this.normal.dot(i);
    if (n === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / n;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(i, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || Ff.getNormalMatrix(e), n = this.coplanarPoint(ia).applyMatrix4(e), s = this.normal.applyMatrix3(i).normalize();
    return this.constant = -n.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const on = new Lt(), Bf = new K(0.5, 0.5), Tr = new R();
class Qs {
  constructor(e = new _n(), t = new _n(), i = new _n(), n = new _n(), s = new _n(), o = new _n()) {
    this.planes = [e, t, i, n, s, o];
  }
  set(e, t, i, n, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(i), a[3].copy(n), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = oi, i = false) {
    const n = this.planes, s = e.elements, o = s[0], a = s[1], l = s[2], c = s[3], h = s[4], u = s[5], d = s[6], f = s[7], m = s[8], _ = s[9], g = s[10], p = s[11], x = s[12], v = s[13], M = s[14], A = s[15];
    if (n[0].setComponents(c - o, f - h, p - m, A - x).normalize(), n[1].setComponents(c + o, f + h, p + m, A + x).normalize(), n[2].setComponents(c + a, f + u, p + _, A + v).normalize(), n[3].setComponents(c - a, f - u, p - _, A - v).normalize(), i) n[4].setComponents(l, d, g, M).normalize(), n[5].setComponents(c - l, f - d, p - g, A - M).normalize();
    else if (n[4].setComponents(c - l, f - d, p - g, A - M).normalize(), t === oi) n[5].setComponents(c + l, f + d, p + g, A + M).normalize();
    else if (t === Gs) n[5].setComponents(l, d, g, M).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), on.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), on.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(on);
  }
  intersectsSprite(e) {
    on.center.set(0, 0, 0);
    const t = Bf.distanceTo(e.center);
    return on.radius = 0.7071067811865476 + t, on.applyMatrix4(e.matrixWorld), this.intersectsSphere(on);
  }
  intersectsSphere(e) {
    const t = this.planes, i = e.center, n = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(i) < n) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const n = t[i];
      if (Tr.x = n.normal.x > 0 ? e.max.x : e.min.x, Tr.y = n.normal.y > 0 ? e.max.y : e.min.y, Tr.z = n.normal.z > 0 ? e.max.z : e.min.z, n.distanceToPoint(Tr) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const gi = new Ge(), _i = new Qs();
class Bl {
  constructor() {
    this.coordinateSystem = oi;
  }
  intersectsObject(e, t) {
    if (!t.isArrayCamera || t.cameras.length === 0) return false;
    for (let i = 0; i < t.cameras.length; i++) {
      const n = t.cameras[i];
      if (gi.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), _i.setFromProjectionMatrix(gi, n.coordinateSystem, n.reversedDepth), _i.intersectsObject(e)) return true;
    }
    return false;
  }
  intersectsSprite(e, t) {
    if (!t || !t.cameras || t.cameras.length === 0) return false;
    for (let i = 0; i < t.cameras.length; i++) {
      const n = t.cameras[i];
      if (gi.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), _i.setFromProjectionMatrix(gi, n.coordinateSystem, n.reversedDepth), _i.intersectsSprite(e)) return true;
    }
    return false;
  }
  intersectsSphere(e, t) {
    if (!t || !t.cameras || t.cameras.length === 0) return false;
    for (let i = 0; i < t.cameras.length; i++) {
      const n = t.cameras[i];
      if (gi.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), _i.setFromProjectionMatrix(gi, n.coordinateSystem, n.reversedDepth), _i.intersectsSphere(e)) return true;
    }
    return false;
  }
  intersectsBox(e, t) {
    if (!t || !t.cameras || t.cameras.length === 0) return false;
    for (let i = 0; i < t.cameras.length; i++) {
      const n = t.cameras[i];
      if (gi.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), _i.setFromProjectionMatrix(gi, n.coordinateSystem, n.reversedDepth), _i.intersectsBox(e)) return true;
    }
    return false;
  }
  containsPoint(e, t) {
    if (!t || !t.cameras || t.cameras.length === 0) return false;
    for (let i = 0; i < t.cameras.length; i++) {
      const n = t.cameras[i];
      if (gi.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), _i.setFromProjectionMatrix(gi, n.coordinateSystem, n.reversedDepth), _i.containsPoint(e)) return true;
    }
    return false;
  }
  clone() {
    return new Bl();
  }
}
function na(r, e) {
  return r - e;
}
function zf(r, e) {
  return r.z - e.z;
}
function Vf(r, e) {
  return e.z - r.z;
}
class kf {
  constructor() {
    this.index = 0, this.pool = [], this.list = [];
  }
  push(e, t, i, n) {
    const s = this.pool, o = this.list;
    this.index >= s.length && s.push({ start: -1, count: -1, z: -1, index: -1 });
    const a = s[this.index];
    o.push(a), this.index++, a.start = e, a.count = t, a.z = i, a.index = n;
  }
  reset() {
    this.list.length = 0, this.index = 0;
  }
}
const kt = new Ge(), Gf = new Me(1, 1, 1), Jc = new Qs(), Hf = new Bl(), Ar = new Ft(), an = new Lt(), Es = new R(), $c = new R(), Wf = new R(), sa = new kf(), It = new Tt(), wr = [];
function Xf(r, e, t = 0) {
  const i = e.itemSize;
  if (r.isInterleavedBufferAttribute || r.array.constructor !== e.array.constructor) {
    const n = r.count;
    for (let s = 0; s < n; s++) for (let o = 0; o < i; o++) e.setComponent(s + t, o, r.getComponent(s, o));
  } else e.array.set(r.array, t * i);
  e.needsUpdate = true;
}
function ln(r, e) {
  if (r.constructor !== e.constructor) {
    const t = Math.min(r.length, e.length);
    for (let i = 0; i < t; i++) e[i] = r[i];
  } else {
    const t = Math.min(r.length, e.length);
    e.set(new r.constructor(r.buffer, 0, t));
  }
}
class qf extends Tt {
  constructor(e, t, i = t * 2, n) {
    super(new qe(), n), this.isBatchedMesh = true, this.perObjectFrustumCulled = true, this.sortObjects = true, this.boundingBox = null, this.boundingSphere = null, this.customSort = null, this._instanceInfo = [], this._geometryInfo = [], this._availableInstanceIds = [], this._availableGeometryIds = [], this._nextIndexStart = 0, this._nextVertexStart = 0, this._geometryCount = 0, this._visibilityChanged = true, this._geometryInitialized = false, this._maxInstanceCount = e, this._maxVertexCount = t, this._maxIndexCount = i, this._multiDrawCounts = new Int32Array(e), this._multiDrawStarts = new Int32Array(e), this._multiDrawCount = 0, this._multiDrawInstances = null, this._matricesTexture = null, this._indirectTexture = null, this._colorsTexture = null, this._initMatricesTexture(), this._initIndirectTexture();
  }
  get maxInstanceCount() {
    return this._maxInstanceCount;
  }
  get instanceCount() {
    return this._instanceInfo.length - this._availableInstanceIds.length;
  }
  get unusedVertexCount() {
    return this._maxVertexCount - this._nextVertexStart;
  }
  get unusedIndexCount() {
    return this._maxIndexCount - this._nextIndexStart;
  }
  _initMatricesTexture() {
    let e = Math.sqrt(this._maxInstanceCount * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4), i = new Si(t, e, e, Wt, Ht);
    this._matricesTexture = i;
  }
  _initIndirectTexture() {
    let e = Math.sqrt(this._maxInstanceCount);
    e = Math.ceil(e);
    const t = new Uint32Array(e * e), i = new Si(t, e, e, _o, di);
    this._indirectTexture = i;
  }
  _initColorsTexture() {
    let e = Math.sqrt(this._maxInstanceCount);
    e = Math.ceil(e);
    const t = new Float32Array(e * e * 4).fill(1), i = new Si(t, e, e, Wt, Ht);
    i.colorSpace = je.workingColorSpace, this._colorsTexture = i;
  }
  _initializeGeometry(e) {
    const t = this.geometry, i = this._maxVertexCount, n = this._maxIndexCount;
    if (this._geometryInitialized === false) {
      for (const s in e.attributes) {
        const o = e.getAttribute(s), { array: a, itemSize: l, normalized: c } = o, h = new a.constructor(i * l), u = new ut(h, l, c);
        t.setAttribute(s, u);
      }
      if (e.getIndex() !== null) {
        const s = i > 65535 ? new Uint32Array(n) : new Uint16Array(n);
        t.setIndex(new ut(s, 1));
      }
      this._geometryInitialized = true;
    }
  }
  _validateGeometry(e) {
    const t = this.geometry;
    if (!!e.getIndex() != !!t.getIndex()) throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');
    for (const i in t.attributes) {
      if (!e.hasAttribute(i)) throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);
      const n = e.getAttribute(i), s = t.getAttribute(i);
      if (n.itemSize !== s.itemSize || n.normalized !== s.normalized) throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.");
    }
  }
  validateInstanceId(e) {
    const t = this._instanceInfo;
    if (e < 0 || e >= t.length || t[e].active === false) throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`);
  }
  validateGeometryId(e) {
    const t = this._geometryInfo;
    if (e < 0 || e >= t.length || t[e].active === false) throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`);
  }
  setCustomSort(e) {
    return this.customSort = e, this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ft());
    const e = this.boundingBox, t = this._instanceInfo;
    e.makeEmpty();
    for (let i = 0, n = t.length; i < n; i++) {
      if (t[i].active === false) continue;
      const s = t[i].geometryIndex;
      this.getMatrixAt(i, kt), this.getBoundingBoxAt(s, Ar).applyMatrix4(kt), e.union(Ar);
    }
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Lt());
    const e = this.boundingSphere, t = this._instanceInfo;
    e.makeEmpty();
    for (let i = 0, n = t.length; i < n; i++) {
      if (t[i].active === false) continue;
      const s = t[i].geometryIndex;
      this.getMatrixAt(i, kt), this.getBoundingSphereAt(s, an).applyMatrix4(kt), e.union(an);
    }
  }
  addInstance(e) {
    if (this._instanceInfo.length >= this.maxInstanceCount && this._availableInstanceIds.length === 0) throw new Error("THREE.BatchedMesh: Maximum item count reached.");
    const i = { visible: true, active: true, geometryIndex: e };
    let n = null;
    this._availableInstanceIds.length > 0 ? (this._availableInstanceIds.sort(na), n = this._availableInstanceIds.shift(), this._instanceInfo[n] = i) : (n = this._instanceInfo.length, this._instanceInfo.push(i));
    const s = this._matricesTexture;
    kt.identity().toArray(s.image.data, n * 16), s.needsUpdate = true;
    const o = this._colorsTexture;
    return o && (Gf.toArray(o.image.data, n * 4), o.needsUpdate = true), this._visibilityChanged = true, n;
  }
  addGeometry(e, t = -1, i = -1) {
    this._initializeGeometry(e), this._validateGeometry(e);
    const n = { vertexStart: -1, vertexCount: -1, reservedVertexCount: -1, indexStart: -1, indexCount: -1, reservedIndexCount: -1, start: -1, count: -1, boundingBox: null, boundingSphere: null, active: true }, s = this._geometryInfo;
    n.vertexStart = this._nextVertexStart, n.reservedVertexCount = t === -1 ? e.getAttribute("position").count : t;
    const o = e.getIndex();
    if (o !== null && (n.indexStart = this._nextIndexStart, n.reservedIndexCount = i === -1 ? o.count : i), n.indexStart !== -1 && n.indexStart + n.reservedIndexCount > this._maxIndexCount || n.vertexStart + n.reservedVertexCount > this._maxVertexCount) throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");
    let l;
    return this._availableGeometryIds.length > 0 ? (this._availableGeometryIds.sort(na), l = this._availableGeometryIds.shift(), s[l] = n) : (l = this._geometryCount, this._geometryCount++, s.push(n)), this.setGeometryAt(l, e), this._nextIndexStart = n.indexStart + n.reservedIndexCount, this._nextVertexStart = n.vertexStart + n.reservedVertexCount, l;
  }
  setGeometryAt(e, t) {
    if (e >= this._geometryCount) throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");
    this._validateGeometry(t);
    const i = this.geometry, n = i.getIndex() !== null, s = i.getIndex(), o = t.getIndex(), a = this._geometryInfo[e];
    if (n && o.count > a.reservedIndexCount || t.attributes.position.count > a.reservedVertexCount) throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");
    const l = a.vertexStart, c = a.reservedVertexCount;
    a.vertexCount = t.getAttribute("position").count;
    for (const h in i.attributes) {
      const u = t.getAttribute(h), d = i.getAttribute(h);
      Xf(u, d, l);
      const f = u.itemSize;
      for (let m = u.count, _ = c; m < _; m++) {
        const g = l + m;
        for (let p = 0; p < f; p++) d.setComponent(g, p, 0);
      }
      d.needsUpdate = true, d.addUpdateRange(l * f, c * f);
    }
    if (n) {
      const h = a.indexStart, u = a.reservedIndexCount;
      a.indexCount = t.getIndex().count;
      for (let d = 0; d < o.count; d++) s.setX(h + d, l + o.getX(d));
      for (let d = o.count, f = u; d < f; d++) s.setX(h + d, l);
      s.needsUpdate = true, s.addUpdateRange(h, a.reservedIndexCount);
    }
    return a.start = n ? a.indexStart : a.vertexStart, a.count = n ? a.indexCount : a.vertexCount, a.boundingBox = null, t.boundingBox !== null && (a.boundingBox = t.boundingBox.clone()), a.boundingSphere = null, t.boundingSphere !== null && (a.boundingSphere = t.boundingSphere.clone()), this._visibilityChanged = true, e;
  }
  deleteGeometry(e) {
    const t = this._geometryInfo;
    if (e >= t.length || t[e].active === false) return this;
    const i = this._instanceInfo;
    for (let n = 0, s = i.length; n < s; n++) i[n].active && i[n].geometryIndex === e && this.deleteInstance(n);
    return t[e].active = false, this._availableGeometryIds.push(e), this._visibilityChanged = true, this;
  }
  deleteInstance(e) {
    return this.validateInstanceId(e), this._instanceInfo[e].active = false, this._availableInstanceIds.push(e), this._visibilityChanged = true, this;
  }
  optimize() {
    let e = 0, t = 0;
    const i = this._geometryInfo, n = i.map((o, a) => a).sort((o, a) => i[o].vertexStart - i[a].vertexStart), s = this.geometry;
    for (let o = 0, a = i.length; o < a; o++) {
      const l = n[o], c = i[l];
      if (c.active !== false) {
        if (s.index !== null) {
          if (c.indexStart !== t) {
            const { indexStart: h, vertexStart: u, reservedIndexCount: d } = c, f = s.index, m = f.array, _ = e - u;
            for (let g = h; g < h + d; g++) m[g] = m[g] + _;
            f.array.copyWithin(t, h, h + d), f.addUpdateRange(t, d), f.needsUpdate = true, c.indexStart = t;
          }
          t += c.reservedIndexCount;
        }
        if (c.vertexStart !== e) {
          const { vertexStart: h, reservedVertexCount: u } = c, d = s.attributes;
          for (const f in d) {
            const m = d[f], { array: _, itemSize: g } = m;
            _.copyWithin(e * g, h * g, (h + u) * g), m.addUpdateRange(e * g, u * g), m.needsUpdate = true;
          }
          c.vertexStart = e;
        }
        e += c.reservedVertexCount, c.start = s.index ? c.indexStart : c.vertexStart, this._nextIndexStart = s.index ? c.indexStart + c.reservedIndexCount : 0, this._nextVertexStart = c.vertexStart + c.reservedVertexCount;
      }
    }
    return this._visibilityChanged = true, this;
  }
  getBoundingBoxAt(e, t) {
    if (e >= this._geometryCount) return null;
    const i = this.geometry, n = this._geometryInfo[e];
    if (n.boundingBox === null) {
      const s = new Ft(), o = i.index, a = i.attributes.position;
      for (let l = n.start, c = n.start + n.count; l < c; l++) {
        let h = l;
        o && (h = o.getX(h)), s.expandByPoint(Es.fromBufferAttribute(a, h));
      }
      n.boundingBox = s;
    }
    return t.copy(n.boundingBox), t;
  }
  getBoundingSphereAt(e, t) {
    if (e >= this._geometryCount) return null;
    const i = this.geometry, n = this._geometryInfo[e];
    if (n.boundingSphere === null) {
      const s = new Lt();
      this.getBoundingBoxAt(e, Ar), Ar.getCenter(s.center);
      const o = i.index, a = i.attributes.position;
      let l = 0;
      for (let c = n.start, h = n.start + n.count; c < h; c++) {
        let u = c;
        o && (u = o.getX(u)), Es.fromBufferAttribute(a, u), l = Math.max(l, s.center.distanceToSquared(Es));
      }
      s.radius = Math.sqrt(l), n.boundingSphere = s;
    }
    return t.copy(n.boundingSphere), t;
  }
  setMatrixAt(e, t) {
    this.validateInstanceId(e);
    const i = this._matricesTexture, n = this._matricesTexture.image.data;
    return t.toArray(n, e * 16), i.needsUpdate = true, this;
  }
  getMatrixAt(e, t) {
    return this.validateInstanceId(e), t.fromArray(this._matricesTexture.image.data, e * 16);
  }
  setColorAt(e, t) {
    return this.validateInstanceId(e), this._colorsTexture === null && this._initColorsTexture(), t.toArray(this._colorsTexture.image.data, e * 4), this._colorsTexture.needsUpdate = true, this;
  }
  getColorAt(e, t) {
    return this.validateInstanceId(e), t.fromArray(this._colorsTexture.image.data, e * 4);
  }
  setVisibleAt(e, t) {
    return this.validateInstanceId(e), this._instanceInfo[e].visible === t ? this : (this._instanceInfo[e].visible = t, this._visibilityChanged = true, this);
  }
  getVisibleAt(e) {
    return this.validateInstanceId(e), this._instanceInfo[e].visible;
  }
  setGeometryIdAt(e, t) {
    return this.validateInstanceId(e), this.validateGeometryId(t), this._instanceInfo[e].geometryIndex = t, this;
  }
  getGeometryIdAt(e) {
    return this.validateInstanceId(e), this._instanceInfo[e].geometryIndex;
  }
  getGeometryRangeAt(e, t = {}) {
    this.validateGeometryId(e);
    const i = this._geometryInfo[e];
    return t.vertexStart = i.vertexStart, t.vertexCount = i.vertexCount, t.reservedVertexCount = i.reservedVertexCount, t.indexStart = i.indexStart, t.indexCount = i.indexCount, t.reservedIndexCount = i.reservedIndexCount, t.start = i.start, t.count = i.count, t;
  }
  setInstanceCount(e) {
    const t = this._availableInstanceIds, i = this._instanceInfo;
    for (t.sort(na); t[t.length - 1] === i.length - 1; ) i.pop(), t.pop();
    if (e < i.length) throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);
    const n = new Int32Array(e), s = new Int32Array(e);
    ln(this._multiDrawCounts, n), ln(this._multiDrawStarts, s), this._multiDrawCounts = n, this._multiDrawStarts = s, this._maxInstanceCount = e;
    const o = this._indirectTexture, a = this._matricesTexture, l = this._colorsTexture;
    o.dispose(), this._initIndirectTexture(), ln(o.image.data, this._indirectTexture.image.data), a.dispose(), this._initMatricesTexture(), ln(a.image.data, this._matricesTexture.image.data), l && (l.dispose(), this._initColorsTexture(), ln(l.image.data, this._colorsTexture.image.data));
  }
  setGeometrySize(e, t) {
    const i = [...this._geometryInfo].filter((a) => a.active);
    if (Math.max(...i.map((a) => a.vertexStart + a.reservedVertexCount)) > e) throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);
    if (this.geometry.index && Math.max(...i.map((l) => l.indexStart + l.reservedIndexCount)) > t) throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);
    const s = this.geometry;
    s.dispose(), this._maxVertexCount = e, this._maxIndexCount = t, this._geometryInitialized && (this._geometryInitialized = false, this.geometry = new qe(), this._initializeGeometry(s));
    const o = this.geometry;
    s.index && ln(s.index.array, o.index.array);
    for (const a in s.attributes) ln(s.attributes[a].array, o.attributes[a].array);
  }
  raycast(e, t) {
    const i = this._instanceInfo, n = this._geometryInfo, s = this.matrixWorld, o = this.geometry;
    It.material = this.material, It.geometry.index = o.index, It.geometry.attributes = o.attributes, It.geometry.boundingBox === null && (It.geometry.boundingBox = new Ft()), It.geometry.boundingSphere === null && (It.geometry.boundingSphere = new Lt());
    for (let a = 0, l = i.length; a < l; a++) {
      if (!i[a].visible || !i[a].active) continue;
      const c = i[a].geometryIndex, h = n[c];
      It.geometry.setDrawRange(h.start, h.count), this.getMatrixAt(a, It.matrixWorld).premultiply(s), this.getBoundingBoxAt(c, It.geometry.boundingBox), this.getBoundingSphereAt(c, It.geometry.boundingSphere), It.raycast(e, wr);
      for (let u = 0, d = wr.length; u < d; u++) {
        const f = wr[u];
        f.object = this, f.batchId = a, t.push(f);
      }
      wr.length = 0;
    }
    It.material = null, It.geometry.index = null, It.geometry.attributes = {}, It.geometry.setDrawRange(0, 1 / 0);
  }
  copy(e) {
    return super.copy(e), this.geometry = e.geometry.clone(), this.perObjectFrustumCulled = e.perObjectFrustumCulled, this.sortObjects = e.sortObjects, this.boundingBox = e.boundingBox !== null ? e.boundingBox.clone() : null, this.boundingSphere = e.boundingSphere !== null ? e.boundingSphere.clone() : null, this._geometryInfo = e._geometryInfo.map((t) => ({ ...t, boundingBox: t.boundingBox !== null ? t.boundingBox.clone() : null, boundingSphere: t.boundingSphere !== null ? t.boundingSphere.clone() : null })), this._instanceInfo = e._instanceInfo.map((t) => ({ ...t })), this._availableInstanceIds = e._availableInstanceIds.slice(), this._availableGeometryIds = e._availableGeometryIds.slice(), this._nextIndexStart = e._nextIndexStart, this._nextVertexStart = e._nextVertexStart, this._geometryCount = e._geometryCount, this._maxInstanceCount = e._maxInstanceCount, this._maxVertexCount = e._maxVertexCount, this._maxIndexCount = e._maxIndexCount, this._geometryInitialized = e._geometryInitialized, this._multiDrawCounts = e._multiDrawCounts.slice(), this._multiDrawStarts = e._multiDrawStarts.slice(), this._indirectTexture = e._indirectTexture.clone(), this._indirectTexture.image.data = this._indirectTexture.image.data.slice(), this._matricesTexture = e._matricesTexture.clone(), this._matricesTexture.image.data = this._matricesTexture.image.data.slice(), this._colorsTexture !== null && (this._colorsTexture = e._colorsTexture.clone(), this._colorsTexture.image.data = this._colorsTexture.image.data.slice()), this;
  }
  dispose() {
    this.geometry.dispose(), this._matricesTexture.dispose(), this._matricesTexture = null, this._indirectTexture.dispose(), this._indirectTexture = null, this._colorsTexture !== null && (this._colorsTexture.dispose(), this._colorsTexture = null);
  }
  onBeforeRender(e, t, i, n, s) {
    if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects) return;
    const o = n.getIndex(), a = o === null ? 1 : o.array.BYTES_PER_ELEMENT, l = this._instanceInfo, c = this._multiDrawStarts, h = this._multiDrawCounts, u = this._geometryInfo, d = this.perObjectFrustumCulled, f = this._indirectTexture, m = f.image.data, _ = i.isArrayCamera ? Hf : Jc;
    d && !i.isArrayCamera && (kt.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse).multiply(this.matrixWorld), Jc.setFromProjectionMatrix(kt, i.coordinateSystem, i.reversedDepth));
    let g = 0;
    if (this.sortObjects) {
      kt.copy(this.matrixWorld).invert(), Es.setFromMatrixPosition(i.matrixWorld).applyMatrix4(kt), $c.set(0, 0, -1).transformDirection(i.matrixWorld).transformDirection(kt);
      for (let v = 0, M = l.length; v < M; v++) if (l[v].visible && l[v].active) {
        const A = l[v].geometryIndex;
        this.getMatrixAt(v, kt), this.getBoundingSphereAt(A, an).applyMatrix4(kt);
        let w = false;
        if (d && (w = !_.intersectsSphere(an, i)), !w) {
          const C = u[A], P = Wf.subVectors(an.center, Es).dot($c);
          sa.push(C.start, C.count, P, v);
        }
      }
      const p = sa.list, x = this.customSort;
      x === null ? p.sort(s.transparent ? Vf : zf) : x.call(this, p, i);
      for (let v = 0, M = p.length; v < M; v++) {
        const A = p[v];
        c[g] = A.start * a, h[g] = A.count, m[g] = A.index, g++;
      }
      sa.reset();
    } else for (let p = 0, x = l.length; p < x; p++) if (l[p].visible && l[p].active) {
      const v = l[p].geometryIndex;
      let M = false;
      if (d && (this.getMatrixAt(p, kt), this.getBoundingSphereAt(v, an).applyMatrix4(kt), M = !_.intersectsSphere(an, i)), !M) {
        const A = u[v];
        c[g] = A.start * a, h[g] = A.count, m[g] = p, g++;
      }
    }
    f.needsUpdate = true, this._multiDrawCount = g, this._visibilityChanged = false;
  }
  onBeforeShadow(e, t, i, n, s, o) {
    this.onBeforeRender(e, null, n, s, o);
  }
}
class qt extends Bt {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Me(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const lo = new R(), co = new R(), Kc = new Ge(), Cs = new Ks(), Er = new Lt(), ra = new R(), Qc = new R();
class An extends it {
  constructor(e = new qe(), t = new qt()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [0];
      for (let n = 1, s = t.count; n < s; n++) lo.fromBufferAttribute(t, n - 1), co.fromBufferAttribute(t, n), i[n] = i[n - 1], i[n] += lo.distanceTo(co);
      e.setAttribute("lineDistance", new Ae(i, 1));
    } else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const i = this.geometry, n = this.matrixWorld, s = e.params.Line.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Er.copy(i.boundingSphere), Er.applyMatrix4(n), Er.radius += s, e.ray.intersectsSphere(Er) === false) return;
    Kc.copy(n).invert(), Cs.copy(e.ray).applyMatrix4(Kc);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = i.index, d = i.attributes.position;
    if (h !== null) {
      const f = Math.max(0, o.start), m = Math.min(h.count, o.start + o.count);
      for (let _ = f, g = m - 1; _ < g; _ += c) {
        const p = h.getX(_), x = h.getX(_ + 1), v = Cr(this, e, Cs, l, p, x, _);
        v && t.push(v);
      }
      if (this.isLineLoop) {
        const _ = h.getX(m - 1), g = h.getX(f), p = Cr(this, e, Cs, l, _, g, m - 1);
        p && t.push(p);
      }
    } else {
      const f = Math.max(0, o.start), m = Math.min(d.count, o.start + o.count);
      for (let _ = f, g = m - 1; _ < g; _ += c) {
        const p = Cr(this, e, Cs, l, _, _ + 1, _);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const _ = Cr(this, e, Cs, l, m - 1, f, m - 1);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const n = t[i[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = n.length; s < o; s++) {
          const a = n[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function Cr(r, e, t, i, n, s, o) {
  const a = r.geometry.attributes.position;
  if (lo.fromBufferAttribute(a, n), co.fromBufferAttribute(a, s), t.distanceSqToSegment(lo, co, ra, Qc) > i) return;
  ra.applyMatrix4(r.matrixWorld);
  const c = e.ray.origin.distanceTo(ra);
  if (!(c < e.near || c > e.far)) return { distance: c, point: Qc.clone().applyMatrix4(r.matrixWorld), index: o, face: null, faceIndex: null, barycoord: null, object: r };
}
const jc = new R(), eh = new R();
class ki extends An {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [];
      for (let n = 0, s = t.count; n < s; n += 2) jc.fromBufferAttribute(t, n), eh.fromBufferAttribute(t, n + 1), i[n] = n === 0 ? 0 : i[n - 1], i[n + 1] = i[n] + jc.distanceTo(eh);
      e.setAttribute("lineDistance", new Ae(i, 1));
    } else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Yf extends An {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Su extends Bt {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Me(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const th = new Ge(), hl = new Ks(), Rr = new Lt(), Ir = new R();
class Zf extends it {
  constructor(e = new qe(), t = new Su()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const i = this.geometry, n = this.matrixWorld, s = e.params.Points.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Rr.copy(i.boundingSphere), Rr.applyMatrix4(n), Rr.radius += s, e.ray.intersectsSphere(Rr) === false) return;
    th.copy(n).invert(), hl.copy(e.ray).applyMatrix4(th);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = i.index, u = i.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
      for (let m = d, _ = f; m < _; m++) {
        const g = c.getX(m);
        Ir.fromBufferAttribute(u, g), ih(Ir, g, l, n, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let m = d, _ = f; m < _; m++) Ir.fromBufferAttribute(u, m), ih(Ir, m, l, n, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const n = t[i[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = n.length; s < o; s++) {
          const a = n[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function ih(r, e, t, i, n, s, o) {
  const a = hl.distanceSqToPoint(r);
  if (a < t) {
    const l = new R();
    hl.closestPointToPoint(r, l), l.applyMatrix4(i);
    const c = n.ray.origin.distanceTo(l);
    if (c < n.near || c > n.far) return;
    s.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: o });
  }
}
class Jf extends Mt {
  constructor(e, t, i, n, s = mt, o = mt, a, l, c) {
    super(e, t, i, n, s, o, a, l, c), this.isVideoTexture = true, this.generateMipmaps = false, this._requestVideoFrameCallbackId = 0;
    const h = this;
    function u() {
      h.needsUpdate = true, h._requestVideoFrameCallbackId = e.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in e && (this._requestVideoFrameCallbackId = e.requestVideoFrameCallback(u));
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === false && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = true);
  }
  dispose() {
    this._requestVideoFrameCallbackId !== 0 && (this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId), this._requestVideoFrameCallbackId = 0), super.dispose();
  }
}
class Py extends Jf {
  constructor(e, t, i, n, s, o, a, l) {
    super({}, e, t, i, n, s, o, a, l), this.isVideoFrameTexture = true;
  }
  update() {
  }
  clone() {
    return new this.constructor().copy(this);
  }
  setFrame(e) {
    this.image = e, this.needsUpdate = true;
  }
}
class Ly extends Mt {
  constructor(e, t) {
    super({ width: e, height: t }), this.isFramebufferTexture = true, this.magFilter = bt, this.minFilter = bt, this.generateMipmaps = false, this.needsUpdate = true;
  }
}
class zl extends Mt {
  constructor(e, t, i, n, s, o, a, l, c, h, u, d) {
    super(null, o, a, l, c, h, n, s, u, d), this.isCompressedTexture = true, this.image = { width: t, height: i }, this.mipmaps = e, this.flipY = false, this.generateMipmaps = false;
  }
}
class Dy extends zl {
  constructor(e, t, i, n, s, o) {
    super(e, t, i, s, o), this.isCompressedArrayTexture = true, this.image.depth = n, this.wrapR = ei, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Uy extends zl {
  constructor(e, t, i) {
    super(void 0, e[0].width, e[0].height, t, i, Fi), this.isCompressedCubeTexture = true, this.isCubeTexture = true, this.image = e;
  }
}
class Ny extends Mt {
  constructor(e, t, i, n, s, o, a, l, c) {
    super(e, t, i, n, s, o, a, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class qs extends Mt {
  constructor(e, t, i = di, n, s, o, a = bt, l = bt, c, h = zi, u = 1) {
    if (h !== zi && h !== yn) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const d = { width: e, height: t, depth: u };
    super(d, n, s, o, a, l, h, i, c), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Mn(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class $f extends qs {
  constructor(e, t = di, i = Fi, n, s, o = bt, a = bt, l, c = zi) {
    const h = { width: e, height: e, depth: 1 }, u = [h, h, h, h, h, h];
    super(e, e, t, i, n, s, o, a, l, c), this.image = u, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class bu extends Mt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = true;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Vl extends qe {
  constructor(e = 1, t = 1, i = 4, n = 8, s = 1) {
    super(), this.type = "CapsuleGeometry", this.parameters = { radius: e, height: t, capSegments: i, radialSegments: n, heightSegments: s }, t = Math.max(0, t), i = Math.max(1, Math.floor(i)), n = Math.max(3, Math.floor(n)), s = Math.max(1, Math.floor(s));
    const o = [], a = [], l = [], c = [], h = t / 2, u = Math.PI / 2 * e, d = t, f = 2 * u + d, m = i * 2 + s, _ = n + 1, g = new R(), p = new R();
    for (let x = 0; x <= m; x++) {
      let v = 0, M = 0, A = 0, w = 0;
      if (x <= i) {
        const S = x / i, b = S * Math.PI / 2;
        M = -h - e * Math.cos(b), A = e * Math.sin(b), w = -e * Math.cos(b), v = S * u;
      } else if (x <= i + s) {
        const S = (x - i) / s;
        M = -h + S * t, A = e, w = 0, v = u + S * d;
      } else {
        const S = (x - i - s) / i, b = S * Math.PI / 2;
        M = h + e * Math.sin(b), A = e * Math.cos(b), w = e * Math.sin(b), v = u + d + S * u;
      }
      const C = Math.max(0, Math.min(1, v / f));
      let P = 0;
      x === 0 ? P = 0.5 / n : x === m && (P = -0.5 / n);
      for (let S = 0; S <= n; S++) {
        const b = S / n, L = b * Math.PI * 2, O = Math.sin(L), B = Math.cos(L);
        p.x = -A * B, p.y = M, p.z = A * O, a.push(p.x, p.y, p.z), g.set(-A * B, w, A * O), g.normalize(), l.push(g.x, g.y, g.z), c.push(b + P, C);
      }
      if (x > 0) {
        const S = (x - 1) * _;
        for (let b = 0; b < n; b++) {
          const L = S + b, O = S + b + 1, B = x * _ + b, G = x * _ + b + 1;
          o.push(L, O, B), o.push(O, G, B);
        }
      }
    }
    this.setIndex(o), this.setAttribute("position", new Ae(a, 3)), this.setAttribute("normal", new Ae(l, 3)), this.setAttribute("uv", new Ae(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Vl(e.radius, e.height, e.capSegments, e.radialSegments, e.heightSegments);
  }
}
class kl extends qe {
  constructor(e = 1, t = 32, i = 0, n = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: i, thetaLength: n }, t = Math.max(3, t);
    const s = [], o = [], a = [], l = [], c = new R(), h = new K();
    o.push(0, 0, 0), a.push(0, 0, 1), l.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= t; u++, d += 3) {
      const f = i + u / t * n;
      c.x = e * Math.cos(f), c.y = e * Math.sin(f), o.push(c.x, c.y, c.z), a.push(0, 0, 1), h.x = (o[d] / e + 1) / 2, h.y = (o[d + 1] / e + 1) / 2, l.push(h.x, h.y);
    }
    for (let u = 1; u <= t; u++) s.push(u, u + 1, 0);
    this.setIndex(s), this.setAttribute("position", new Ae(o, 3)), this.setAttribute("normal", new Ae(a, 3)), this.setAttribute("uv", new Ae(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new kl(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class xo extends qe {
  constructor(e = 1, t = 1, i = 1, n = 32, s = 1, o = false, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: i, radialSegments: n, heightSegments: s, openEnded: o, thetaStart: a, thetaLength: l };
    const c = this;
    n = Math.floor(n), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let m = 0;
    const _ = [], g = i / 2;
    let p = 0;
    x(), o === false && (e > 0 && v(true), t > 0 && v(false)), this.setIndex(h), this.setAttribute("position", new Ae(u, 3)), this.setAttribute("normal", new Ae(d, 3)), this.setAttribute("uv", new Ae(f, 2));
    function x() {
      const M = new R(), A = new R();
      let w = 0;
      const C = (t - e) / i;
      for (let P = 0; P <= s; P++) {
        const S = [], b = P / s, L = b * (t - e) + e;
        for (let O = 0; O <= n; O++) {
          const B = O / n, G = B * l + a, q = Math.sin(G), V = Math.cos(G);
          A.x = L * q, A.y = -b * i + g, A.z = L * V, u.push(A.x, A.y, A.z), M.set(q, C, V).normalize(), d.push(M.x, M.y, M.z), f.push(B, 1 - b), S.push(m++);
        }
        _.push(S);
      }
      for (let P = 0; P < n; P++) for (let S = 0; S < s; S++) {
        const b = _[S][P], L = _[S + 1][P], O = _[S + 1][P + 1], B = _[S][P + 1];
        (e > 0 || S !== 0) && (h.push(b, L, B), w += 3), (t > 0 || S !== s - 1) && (h.push(L, O, B), w += 3);
      }
      c.addGroup(p, w, 0), p += w;
    }
    function v(M) {
      const A = m, w = new K(), C = new R();
      let P = 0;
      const S = M === true ? e : t, b = M === true ? 1 : -1;
      for (let O = 1; O <= n; O++) u.push(0, g * b, 0), d.push(0, b, 0), f.push(0.5, 0.5), m++;
      const L = m;
      for (let O = 0; O <= n; O++) {
        const G = O / n * l + a, q = Math.cos(G), V = Math.sin(G);
        C.x = S * V, C.y = g * b, C.z = S * q, u.push(C.x, C.y, C.z), d.push(0, b, 0), w.x = q * 0.5 + 0.5, w.y = V * 0.5 * b + 0.5, f.push(w.x, w.y), m++;
      }
      for (let O = 0; O < n; O++) {
        const B = A + O, G = L + O;
        M === true ? h.push(G, G + 1, B) : h.push(G + 1, G, B), P += 3;
      }
      c.addGroup(p, P, M === true ? 1 : 2), p += P;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new xo(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class yo extends xo {
  constructor(e = 1, t = 1, i = 32, n = 1, s = false, o = 0, a = Math.PI * 2) {
    super(0, e, t, i, n, s, o, a), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: i, heightSegments: n, openEnded: s, thetaStart: o, thetaLength: a };
  }
  static fromJSON(e) {
    return new yo(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Rn extends qe {
  constructor(e = [], t = [], i = 1, n = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: i, detail: n };
    const s = [], o = [];
    a(n), c(i), h(), this.setAttribute("position", new Ae(s, 3)), this.setAttribute("normal", new Ae(s.slice(), 3)), this.setAttribute("uv", new Ae(o, 2)), n === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(x) {
      const v = new R(), M = new R(), A = new R();
      for (let w = 0; w < t.length; w += 3) f(t[w + 0], v), f(t[w + 1], M), f(t[w + 2], A), l(v, M, A, x);
    }
    function l(x, v, M, A) {
      const w = A + 1, C = [];
      for (let P = 0; P <= w; P++) {
        C[P] = [];
        const S = x.clone().lerp(M, P / w), b = v.clone().lerp(M, P / w), L = w - P;
        for (let O = 0; O <= L; O++) O === 0 && P === w ? C[P][O] = S : C[P][O] = S.clone().lerp(b, O / L);
      }
      for (let P = 0; P < w; P++) for (let S = 0; S < 2 * (w - P) - 1; S++) {
        const b = Math.floor(S / 2);
        S % 2 === 0 ? (d(C[P][b + 1]), d(C[P + 1][b]), d(C[P][b])) : (d(C[P][b + 1]), d(C[P + 1][b + 1]), d(C[P + 1][b]));
      }
    }
    function c(x) {
      const v = new R();
      for (let M = 0; M < s.length; M += 3) v.x = s[M + 0], v.y = s[M + 1], v.z = s[M + 2], v.normalize().multiplyScalar(x), s[M + 0] = v.x, s[M + 1] = v.y, s[M + 2] = v.z;
    }
    function h() {
      const x = new R();
      for (let v = 0; v < s.length; v += 3) {
        x.x = s[v + 0], x.y = s[v + 1], x.z = s[v + 2];
        const M = g(x) / 2 / Math.PI + 0.5, A = p(x) / Math.PI + 0.5;
        o.push(M, 1 - A);
      }
      m(), u();
    }
    function u() {
      for (let x = 0; x < o.length; x += 6) {
        const v = o[x + 0], M = o[x + 2], A = o[x + 4], w = Math.max(v, M, A), C = Math.min(v, M, A);
        w > 0.9 && C < 0.1 && (v < 0.2 && (o[x + 0] += 1), M < 0.2 && (o[x + 2] += 1), A < 0.2 && (o[x + 4] += 1));
      }
    }
    function d(x) {
      s.push(x.x, x.y, x.z);
    }
    function f(x, v) {
      const M = x * 3;
      v.x = e[M + 0], v.y = e[M + 1], v.z = e[M + 2];
    }
    function m() {
      const x = new R(), v = new R(), M = new R(), A = new R(), w = new K(), C = new K(), P = new K();
      for (let S = 0, b = 0; S < s.length; S += 9, b += 6) {
        x.set(s[S + 0], s[S + 1], s[S + 2]), v.set(s[S + 3], s[S + 4], s[S + 5]), M.set(s[S + 6], s[S + 7], s[S + 8]), w.set(o[b + 0], o[b + 1]), C.set(o[b + 2], o[b + 3]), P.set(o[b + 4], o[b + 5]), A.copy(x).add(v).add(M).divideScalar(3);
        const L = g(A);
        _(w, b + 0, x, L), _(C, b + 2, v, L), _(P, b + 4, M, L);
      }
    }
    function _(x, v, M, A) {
      A < 0 && x.x === 1 && (o[v] = x.x - 1), M.x === 0 && M.z === 0 && (o[v] = A / 2 / Math.PI + 0.5);
    }
    function g(x) {
      return Math.atan2(x.z, -x.x);
    }
    function p(x) {
      return Math.atan2(-x.y, Math.sqrt(x.x * x.x + x.z * x.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Rn(e.vertices, e.indices, e.radius, e.detail);
  }
}
class Gl extends Rn {
  constructor(e = 1, t = 0) {
    const i = (1 + Math.sqrt(5)) / 2, n = 1 / i, s = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], o = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
    super(s, o, e, t), this.type = "DodecahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new Gl(e.radius, e.detail);
  }
}
const Pr = new R(), Lr = new R(), oa = new R(), Dr = new jt();
class Kf extends qe {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: e, thresholdAngle: t }, e !== null) {
      const n = Math.pow(10, 4), s = Math.cos(bn * t), o = e.getIndex(), a = e.getAttribute("position"), l = o ? o.count : a.count, c = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let m = 0; m < l; m += 3) {
        o ? (c[0] = o.getX(m), c[1] = o.getX(m + 1), c[2] = o.getX(m + 2)) : (c[0] = m, c[1] = m + 1, c[2] = m + 2);
        const { a: _, b: g, c: p } = Dr;
        if (_.fromBufferAttribute(a, c[0]), g.fromBufferAttribute(a, c[1]), p.fromBufferAttribute(a, c[2]), Dr.getNormal(oa), u[0] = `${Math.round(_.x * n)},${Math.round(_.y * n)},${Math.round(_.z * n)}`, u[1] = `${Math.round(g.x * n)},${Math.round(g.y * n)},${Math.round(g.z * n)}`, u[2] = `${Math.round(p.x * n)},${Math.round(p.y * n)},${Math.round(p.z * n)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0])) for (let x = 0; x < 3; x++) {
          const v = (x + 1) % 3, M = u[x], A = u[v], w = Dr[h[x]], C = Dr[h[v]], P = `${M}_${A}`, S = `${A}_${M}`;
          S in d && d[S] ? (oa.dot(d[S].normal) <= s && (f.push(w.x, w.y, w.z), f.push(C.x, C.y, C.z)), d[S] = null) : P in d || (d[P] = { index0: c[x], index1: c[v], normal: oa.clone() });
        }
      }
      for (const m in d) if (d[m]) {
        const { index0: _, index1: g } = d[m];
        Pr.fromBufferAttribute(a, _), Lr.fromBufferAttribute(a, g), f.push(Pr.x, Pr.y, Pr.z), f.push(Lr.x, Lr.y, Lr.z);
      }
      this.setAttribute("position", new Ae(f, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class bi {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    de("Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getPoint(i, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const t = [];
    let i, n = this.getPoint(0), s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++) i = this.getPoint(o / e), s += i.distanceTo(n), t.push(s), n = i;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const i = this.getLengths();
    let n = 0;
    const s = i.length;
    let o;
    t ? o = t : o = e * i[s - 1];
    let a = 0, l = s - 1, c;
    for (; a <= l; ) if (n = Math.floor(a + (l - a) / 2), c = i[n] - o, c < 0) a = n + 1;
    else if (c > 0) l = n - 1;
    else {
      l = n;
      break;
    }
    if (n = l, i[n] === o) return n / (s - 1);
    const h = i[n], d = i[n + 1] - h, f = (o - h) / d;
    return (n + f) / (s - 1);
  }
  getTangent(e, t) {
    let n = e - 1e-4, s = e + 1e-4;
    n < 0 && (n = 0), s > 1 && (s = 1);
    const o = this.getPoint(n), a = this.getPoint(s), l = t || (o.isVector2 ? new K() : new R());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t = false) {
    const i = new R(), n = [], s = [], o = [], a = new R(), l = new Ge();
    for (let f = 0; f <= e; f++) {
      const m = f / e;
      n[f] = this.getTangentAt(m, new R());
    }
    s[0] = new R(), o[0] = new R();
    let c = Number.MAX_VALUE;
    const h = Math.abs(n[0].x), u = Math.abs(n[0].y), d = Math.abs(n[0].z);
    h <= c && (c = h, i.set(1, 0, 0)), u <= c && (c = u, i.set(0, 1, 0)), d <= c && i.set(0, 0, 1), a.crossVectors(n[0], i).normalize(), s[0].crossVectors(n[0], a), o[0].crossVectors(n[0], s[0]);
    for (let f = 1; f <= e; f++) {
      if (s[f] = s[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(n[f - 1], n[f]), a.length() > Number.EPSILON) {
        a.normalize();
        const m = Math.acos(ze(n[f - 1].dot(n[f]), -1, 1));
        s[f].applyMatrix4(l.makeRotationAxis(a, m));
      }
      o[f].crossVectors(n[f], s[f]);
    }
    if (t === true) {
      let f = Math.acos(ze(s[0].dot(s[e]), -1, 1));
      f /= e, n[0].dot(a.crossVectors(s[0], s[e])) > 0 && (f = -f);
      for (let m = 1; m <= e; m++) s[m].applyMatrix4(l.makeRotationAxis(n[m], f * m)), o[m].crossVectors(n[m], s[m]);
    }
    return { tangents: n, normals: s, binormals: o };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class Hl extends bi {
  constructor(e = 0, t = 0, i = 1, n = 1, s = 0, o = Math.PI * 2, a = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = n, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
  }
  getPoint(e, t = new K()) {
    const i = t, n = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += n;
    for (; s > n; ) s -= n;
    s < Number.EPSILON && (o ? s = 0 : s = n), this.aClockwise === true && !o && (s === n ? s = -n : s = s - n);
    const a = this.aStartAngle + e * s;
    let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
      l = d * h - f * u + this.aX, c = d * u + f * h + this.aY;
    }
    return i.set(l, c);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class Qf extends Hl {
  constructor(e, t, i, n, s, o) {
    super(e, t, i, i, n, s, o), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function Wl() {
  let r = 0, e = 0, t = 0, i = 0;
  function n(s, o, a, l) {
    r = s, e = a, t = -3 * s + 3 * o - 2 * a - l, i = 2 * s - 2 * o + a + l;
  }
  return { initCatmullRom: function(s, o, a, l, c) {
    n(o, a, c * (a - s), c * (l - o));
  }, initNonuniformCatmullRom: function(s, o, a, l, c, h, u) {
    let d = (o - s) / c - (a - s) / (c + h) + (a - o) / h, f = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
    d *= h, f *= h, n(o, a, d, f);
  }, calc: function(s) {
    const o = s * s, a = o * s;
    return r + e * s + t * o + i * a;
  } };
}
const Ur = new R(), aa = new Wl(), la = new Wl(), ca = new Wl();
class jf extends bi {
  constructor(e = [], t = false, i = "centripetal", n = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = i, this.tension = n;
  }
  getPoint(e, t = new R()) {
    const i = t, n = this.points, s = n.length, o = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), l = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : l === 0 && a === s - 1 && (a = s - 2, l = 1);
    let c, h;
    this.closed || a > 0 ? c = n[(a - 1) % s] : (Ur.subVectors(n[0], n[1]).add(n[0]), c = Ur);
    const u = n[a % s], d = n[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = n[(a + 2) % s] : (Ur.subVectors(n[s - 1], n[s - 2]).add(n[s - 1]), h = Ur), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(c.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), g = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), aa.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, m, _, g), la.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, m, _, g), ca.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, m, _, g);
    } else this.curveType === "catmullrom" && (aa.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), la.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), ca.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
    return i.set(aa.calc(l), la.calc(l), ca.calc(l)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const n = e.points[t];
      this.points.push(n.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const n = this.points[t];
      e.points.push(n.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const n = e.points[t];
      this.points.push(new R().fromArray(n));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function nh(r, e, t, i, n) {
  const s = (i - e) * 0.5, o = (n - t) * 0.5, a = r * r, l = r * a;
  return (2 * t - 2 * i + s + o) * l + (-3 * t + 3 * i - 2 * s - o) * a + s * r + t;
}
function ep(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function tp(r, e) {
  return 2 * (1 - r) * r * e;
}
function ip(r, e) {
  return r * r * e;
}
function Bs(r, e, t, i) {
  return ep(r, e) + tp(r, t) + ip(r, i);
}
function np(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function sp(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function rp(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function op(r, e) {
  return r * r * r * e;
}
function zs(r, e, t, i, n) {
  return np(r, e) + sp(r, t) + rp(r, i) + op(r, n);
}
class Tu extends bi {
  constructor(e = new K(), t = new K(), i = new K(), n = new K()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = n;
  }
  getPoint(e, t = new K()) {
    const i = t, n = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return i.set(zs(e, n.x, s.x, o.x, a.x), zs(e, n.y, s.y, o.y, a.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class ap extends bi {
  constructor(e = new R(), t = new R(), i = new R(), n = new R()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = n;
  }
  getPoint(e, t = new R()) {
    const i = t, n = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return i.set(zs(e, n.x, s.x, o.x, a.x), zs(e, n.y, s.y, o.y, a.y), zs(e, n.z, s.z, o.z, a.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Au extends bi {
  constructor(e = new K(), t = new K()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new K()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new K()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class lp extends bi {
  constructor(e = new R(), t = new R()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new R()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new R()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class wu extends bi {
  constructor(e = new K(), t = new K(), i = new K()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new K()) {
    const i = t, n = this.v0, s = this.v1, o = this.v2;
    return i.set(Bs(e, n.x, s.x, o.x), Bs(e, n.y, s.y, o.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Eu extends bi {
  constructor(e = new R(), t = new R(), i = new R()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new R()) {
    const i = t, n = this.v0, s = this.v1, o = this.v2;
    return i.set(Bs(e, n.x, s.x, o.x), Bs(e, n.y, s.y, o.y), Bs(e, n.z, s.z, o.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Cu extends bi {
  constructor(e = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new K()) {
    const i = t, n = this.points, s = (n.length - 1) * e, o = Math.floor(s), a = s - o, l = n[o === 0 ? o : o - 1], c = n[o], h = n[o > n.length - 2 ? n.length - 1 : o + 1], u = n[o > n.length - 3 ? n.length - 1 : o + 2];
    return i.set(nh(a, l.x, c.x, h.x, u.x), nh(a, l.y, c.y, h.y, u.y)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const n = e.points[t];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const n = this.points[t];
      e.points.push(n.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const n = e.points[t];
      this.points.push(new K().fromArray(n));
    }
    return this;
  }
}
var ho = Object.freeze({ __proto__: null, ArcCurve: Qf, CatmullRomCurve3: jf, CubicBezierCurve: Tu, CubicBezierCurve3: ap, EllipseCurve: Hl, LineCurve: Au, LineCurve3: lp, QuadraticBezierCurve: wu, QuadraticBezierCurve3: Eu, SplineCurve: Cu });
class cp extends bi {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const i = e.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new ho[i](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const i = e * this.getLength(), n = this.getCurveLengths();
    let s = 0;
    for (; s < n.length; ) {
      if (n[s] >= i) {
        const o = n[s] - i, a = this.curves[s], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, t);
      }
      s++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let i = 0, n = this.curves.length; i < n; i++) t += this.curves[i].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let i;
    for (let n = 0, s = this.curves; n < s.length; n++) {
      const o = s[n], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        i && i.equals(h) || (t.push(h), i = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const n = e.curves[t];
      this.curves.push(n.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, i = this.curves.length; t < i; t++) {
      const n = this.curves[t];
      e.curves.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const n = e.curves[t];
      this.curves.push(new ho[n.type]().fromJSON(n));
    }
    return this;
  }
}
class ul extends cp {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new K(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const i = new Au(this.currentPoint.clone(), new K(e, t));
    return this.curves.push(i), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, i, n) {
    const s = new wu(this.currentPoint.clone(), new K(e, t), new K(i, n));
    return this.curves.push(s), this.currentPoint.set(i, n), this;
  }
  bezierCurveTo(e, t, i, n, s, o) {
    const a = new Tu(this.currentPoint.clone(), new K(e, t), new K(i, n), new K(s, o));
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), i = new Cu(t);
    return this.curves.push(i), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, i, n, s, o) {
    const a = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(e + a, t + l, i, n, s, o), this;
  }
  absarc(e, t, i, n, s, o) {
    return this.absellipse(e, t, i, i, n, s, o), this;
  }
  ellipse(e, t, i, n, s, o, a, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + c, t + h, i, n, s, o, a, l), this;
  }
  absellipse(e, t, i, n, s, o, a, l) {
    const c = new Hl(e, t, i, n, s, o, a, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class rs extends ul {
  constructor(e) {
    super(e), this.uuid = ti(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let i = 0, n = this.holes.length; i < n; i++) t[i] = this.holes[i].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const n = e.holes[t];
      this.holes.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, i = this.holes.length; t < i; t++) {
      const n = this.holes[t];
      e.holes.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const n = e.holes[t];
      this.holes.push(new ul().fromJSON(n));
    }
    return this;
  }
}
function hp(r, e, t = 2) {
  const i = e && e.length, n = i ? e[0] * t : r.length;
  let s = Ru(r, 0, n, t, true);
  const o = [];
  if (!s || s.next === s.prev) return o;
  let a, l, c;
  if (i && (s = mp(r, e, s, t)), r.length > 80 * t) {
    a = r[0], l = r[1];
    let h = a, u = l;
    for (let d = t; d < n; d += t) {
      const f = r[d], m = r[d + 1];
      f < a && (a = f), m < l && (l = m), f > h && (h = f), m > u && (u = m);
    }
    c = Math.max(h - a, u - l), c = c !== 0 ? 32767 / c : 0;
  }
  return Ys(s, o, t, a, l, c, 0), o;
}
function Ru(r, e, t, i, n) {
  let s;
  if (n === wp(r, e, t, i) > 0) for (let o = e; o < t; o += i) s = sh(o / i | 0, r[o], r[o + 1], s);
  else for (let o = t - i; o >= e; o -= i) s = sh(o / i | 0, r[o], r[o + 1], s);
  return s && ds(s, s.next) && (Js(s), s = s.next), s;
}
function wn(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, i;
  do
    if (i = false, !t.steiner && (ds(t, t.next) || gt(t.prev, t, t.next) === 0)) {
      if (Js(t), t = e = t.prev, t === t.next) break;
      i = true;
    } else t = t.next;
  while (i || t !== e);
  return e;
}
function Ys(r, e, t, i, n, s, o) {
  if (!r) return;
  !o && s && yp(r, i, n, s);
  let a = r;
  for (; r.prev !== r.next; ) {
    const l = r.prev, c = r.next;
    if (s ? dp(r, i, n, s) : up(r)) {
      e.push(l.i, r.i, c.i), Js(r), r = c.next, a = c.next;
      continue;
    }
    if (r = c, r === a) {
      o ? o === 1 ? (r = fp(wn(r), e), Ys(r, e, t, i, n, s, 2)) : o === 2 && pp(r, e, t, i, n, s) : Ys(wn(r), e, t, i, n, s, 1);
      break;
    }
  }
}
function up(r) {
  const e = r.prev, t = r, i = r.next;
  if (gt(e, t, i) >= 0) return false;
  const n = e.x, s = t.x, o = i.x, a = e.y, l = t.y, c = i.y, h = Math.min(n, s, o), u = Math.min(a, l, c), d = Math.max(n, s, o), f = Math.max(a, l, c);
  let m = i.next;
  for (; m !== e; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= f && Ns(n, a, s, l, o, c, m.x, m.y) && gt(m.prev, m, m.next) >= 0) return false;
    m = m.next;
  }
  return true;
}
function dp(r, e, t, i) {
  const n = r.prev, s = r, o = r.next;
  if (gt(n, s, o) >= 0) return false;
  const a = n.x, l = s.x, c = o.x, h = n.y, u = s.y, d = o.y, f = Math.min(a, l, c), m = Math.min(h, u, d), _ = Math.max(a, l, c), g = Math.max(h, u, d), p = dl(f, m, e, t, i), x = dl(_, g, e, t, i);
  let v = r.prevZ, M = r.nextZ;
  for (; v && v.z >= p && M && M.z <= x; ) {
    if (v.x >= f && v.x <= _ && v.y >= m && v.y <= g && v !== n && v !== o && Ns(a, h, l, u, c, d, v.x, v.y) && gt(v.prev, v, v.next) >= 0 || (v = v.prevZ, M.x >= f && M.x <= _ && M.y >= m && M.y <= g && M !== n && M !== o && Ns(a, h, l, u, c, d, M.x, M.y) && gt(M.prev, M, M.next) >= 0)) return false;
    M = M.nextZ;
  }
  for (; v && v.z >= p; ) {
    if (v.x >= f && v.x <= _ && v.y >= m && v.y <= g && v !== n && v !== o && Ns(a, h, l, u, c, d, v.x, v.y) && gt(v.prev, v, v.next) >= 0) return false;
    v = v.prevZ;
  }
  for (; M && M.z <= x; ) {
    if (M.x >= f && M.x <= _ && M.y >= m && M.y <= g && M !== n && M !== o && Ns(a, h, l, u, c, d, M.x, M.y) && gt(M.prev, M, M.next) >= 0) return false;
    M = M.nextZ;
  }
  return true;
}
function fp(r, e) {
  let t = r;
  do {
    const i = t.prev, n = t.next.next;
    !ds(i, n) && Pu(i, t, t.next, n) && Zs(i, n) && Zs(n, i) && (e.push(i.i, t.i, n.i), Js(t), Js(t.next), t = r = n), t = t.next;
  } while (t !== r);
  return wn(t);
}
function pp(r, e, t, i, n, s) {
  let o = r;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && bp(o, a)) {
        let l = Lu(o, a);
        o = wn(o, o.next), l = wn(l, l.next), Ys(o, e, t, i, n, s, 0), Ys(l, e, t, i, n, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== r);
}
function mp(r, e, t, i) {
  const n = [];
  for (let s = 0, o = e.length; s < o; s++) {
    const a = e[s] * i, l = s < o - 1 ? e[s + 1] * i : r.length, c = Ru(r, a, l, i, false);
    c === c.next && (c.steiner = true), n.push(Sp(c));
  }
  n.sort(gp);
  for (let s = 0; s < n.length; s++) t = _p(n[s], t);
  return t;
}
function gp(r, e) {
  let t = r.x - e.x;
  if (t === 0 && (t = r.y - e.y, t === 0)) {
    const i = (r.next.y - r.y) / (r.next.x - r.x), n = (e.next.y - e.y) / (e.next.x - e.x);
    t = i - n;
  }
  return t;
}
function _p(r, e) {
  const t = vp(r, e);
  if (!t) return e;
  const i = Lu(t, r);
  return wn(i, i.next), wn(t, t.next);
}
function vp(r, e) {
  let t = e;
  const i = r.x, n = r.y;
  let s = -1 / 0, o;
  if (ds(r, t)) return t;
  do {
    if (ds(r, t.next)) return t.next;
    if (n <= t.y && n >= t.next.y && t.next.y !== t.y) {
      const u = t.x + (n - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (u <= i && u > s && (s = u, o = t.x < t.next.x ? t : t.next, u === i)) return o;
    }
    t = t.next;
  } while (t !== e);
  if (!o) return null;
  const a = o, l = o.x, c = o.y;
  let h = 1 / 0;
  t = o;
  do {
    if (i >= t.x && t.x >= l && i !== t.x && Iu(n < c ? i : s, n, l, c, n < c ? s : i, n, t.x, t.y)) {
      const u = Math.abs(n - t.y) / (i - t.x);
      Zs(t, r) && (u < h || u === h && (t.x > o.x || t.x === o.x && xp(o, t))) && (o = t, h = u);
    }
    t = t.next;
  } while (t !== a);
  return o;
}
function xp(r, e) {
  return gt(r.prev, r, e.prev) < 0 && gt(e.next, r, r.next) < 0;
}
function yp(r, e, t, i) {
  let n = r;
  do
    n.z === 0 && (n.z = dl(n.x, n.y, e, t, i)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next;
  while (n !== r);
  n.prevZ.nextZ = null, n.prevZ = null, Mp(n);
}
function Mp(r) {
  let e, t = 1;
  do {
    let i = r, n;
    r = null;
    let s = null;
    for (e = 0; i; ) {
      e++;
      let o = i, a = 0;
      for (let c = 0; c < t && (a++, o = o.nextZ, !!o); c++) ;
      let l = t;
      for (; a > 0 || l > 0 && o; ) a !== 0 && (l === 0 || !o || i.z <= o.z) ? (n = i, i = i.nextZ, a--) : (n = o, o = o.nextZ, l--), s ? s.nextZ = n : r = n, n.prevZ = s, s = n;
      i = o;
    }
    s.nextZ = null, t *= 2;
  } while (e > 1);
  return r;
}
function dl(r, e, t, i, n) {
  return r = (r - t) * n | 0, e = (e - i) * n | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function Sp(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function Iu(r, e, t, i, n, s, o, a) {
  return (n - o) * (e - a) >= (r - o) * (s - a) && (r - o) * (i - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (n - o) * (i - a);
}
function Ns(r, e, t, i, n, s, o, a) {
  return !(r === o && e === a) && Iu(r, e, t, i, n, s, o, a);
}
function bp(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !Tp(r, e) && (Zs(r, e) && Zs(e, r) && Ap(r, e) && (gt(r.prev, r, e.prev) || gt(r, e.prev, e)) || ds(r, e) && gt(r.prev, r, r.next) > 0 && gt(e.prev, e, e.next) > 0);
}
function gt(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function ds(r, e) {
  return r.x === e.x && r.y === e.y;
}
function Pu(r, e, t, i) {
  const n = Or(gt(r, e, t)), s = Or(gt(r, e, i)), o = Or(gt(t, i, r)), a = Or(gt(t, i, e));
  return !!(n !== s && o !== a || n === 0 && Nr(r, t, e) || s === 0 && Nr(r, i, e) || o === 0 && Nr(t, r, i) || a === 0 && Nr(t, e, i));
}
function Nr(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function Or(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Tp(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Pu(t, t.next, r, e)) return true;
    t = t.next;
  } while (t !== r);
  return false;
}
function Zs(r, e) {
  return gt(r.prev, r, r.next) < 0 ? gt(r, e, r.next) >= 0 && gt(r, r.prev, e) >= 0 : gt(r, e, r.prev) < 0 || gt(r, r.next, e) < 0;
}
function Ap(r, e) {
  let t = r, i = false;
  const n = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && n < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (i = !i), t = t.next;
  while (t !== r);
  return i;
}
function Lu(r, e) {
  const t = fl(r.i, r.x, r.y), i = fl(e.i, e.x, e.y), n = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = n, n.prev = t, i.next = t, t.prev = i, s.next = i, i.prev = s, i;
}
function sh(r, e, t, i) {
  const n = fl(r, e, t);
  return i ? (n.next = i.next, n.prev = i, i.next.prev = n, i.next = n) : (n.prev = n, n.next = n), n;
}
function Js(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function fl(r, e, t) {
  return { i: r, x: e, y: t, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
function wp(r, e, t, i) {
  let n = 0;
  for (let s = e, o = t - i; s < t; s += i) n += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
  return n;
}
class Ep {
  static triangulate(e, t, i = 2) {
    return hp(e, t, i);
  }
}
class yi {
  static area(e) {
    const t = e.length;
    let i = 0;
    for (let n = t - 1, s = 0; s < t; n = s++) i += e[n].x * e[s].y - e[s].x * e[n].y;
    return i * 0.5;
  }
  static isClockWise(e) {
    return yi.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const i = [], n = [], s = [];
    rh(e), oh(i, e);
    let o = e.length;
    t.forEach(rh);
    for (let l = 0; l < t.length; l++) n.push(o), o += t[l].length, oh(i, t[l]);
    const a = Ep.triangulate(i, n);
    for (let l = 0; l < a.length; l += 3) s.push(a.slice(l, l + 3));
    return s;
  }
}
function rh(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function oh(r, e) {
  for (let t = 0; t < e.length; t++) r.push(e[t].x), r.push(e[t].y);
}
class Xl extends qe {
  constructor(e = new rs([new K(0.5, 0.5), new K(-0.5, 0.5), new K(-0.5, -0.5), new K(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e];
    const i = this, n = [], s = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a];
      o(c);
    }
    this.setAttribute("position", new Ae(n, 3)), this.setAttribute("uv", new Ae(s, 2)), this.computeVertexNormals();
    function o(a) {
      const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : true, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, m = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, _ = t.bevelOffset !== void 0 ? t.bevelOffset : 0, g = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, x = t.UVGenerator !== void 0 ? t.UVGenerator : Cp;
      let v, M = false, A, w, C, P;
      if (p) {
        v = p.getSpacedPoints(h), M = true, d = false;
        const $ = p.isCatmullRomCurve3 ? p.closed : false;
        A = p.computeFrenetFrames(h, $), w = new R(), C = new R(), P = new R();
      }
      d || (g = 0, f = 0, m = 0, _ = 0);
      const S = a.extractPoints(c);
      let b = S.shape;
      const L = S.holes;
      if (!yi.isClockWise(b)) {
        b = b.reverse();
        for (let $ = 0, ie = L.length; $ < ie; $++) {
          const Q = L[$];
          yi.isClockWise(Q) && (L[$] = Q.reverse());
        }
      }
      function B($) {
        const Q = 10000000000000001e-36;
        let ge = $[0];
        for (let I = 1; I <= $.length; I++) {
          const De = I % $.length, xe = $[De], Fe = xe.x - ge.x, re = xe.y - ge.y, E = Fe * Fe + re * re, y = Math.max(Math.abs(xe.x), Math.abs(xe.y), Math.abs(ge.x), Math.abs(ge.y)), U = Q * y * y;
          if (E <= U) {
            $.splice(De, 1), I--;
            continue;
          }
          ge = xe;
        }
      }
      B(b), L.forEach(B);
      const G = L.length, q = b;
      for (let $ = 0; $ < G; $++) {
        const ie = L[$];
        b = b.concat(ie);
      }
      function V($, ie, Q) {
        return ie || Le("ExtrudeGeometry: vec does not exist"), $.clone().addScaledVector(ie, Q);
      }
      const H = b.length;
      function j($, ie, Q) {
        let ge, I, De;
        const xe = $.x - ie.x, Fe = $.y - ie.y, re = Q.x - $.x, E = Q.y - $.y, y = xe * xe + Fe * Fe, U = xe * E - Fe * re;
        if (Math.abs(U) > Number.EPSILON) {
          const W = Math.sqrt(y), Z = Math.sqrt(re * re + E * E), X = ie.x - Fe / W, Re = ie.y + xe / W, oe = Q.x - E / Z, Ee = Q.y + re / Z, Be = ((oe - X) * E - (Ee - Re) * re) / (xe * E - Fe * re);
          ge = X + xe * Be - $.x, I = Re + Fe * Be - $.y;
          const te = ge * ge + I * I;
          if (te <= 2) return new K(ge, I);
          De = Math.sqrt(te / 2);
        } else {
          let W = false;
          xe > Number.EPSILON ? re > Number.EPSILON && (W = true) : xe < -Number.EPSILON ? re < -Number.EPSILON && (W = true) : Math.sign(Fe) === Math.sign(E) && (W = true), W ? (ge = -Fe, I = xe, De = Math.sqrt(y)) : (ge = xe, I = Fe, De = Math.sqrt(y / 2));
        }
        return new K(ge / De, I / De);
      }
      const pe = [];
      for (let $ = 0, ie = q.length, Q = ie - 1, ge = $ + 1; $ < ie; $++, Q++, ge++) Q === ie && (Q = 0), ge === ie && (ge = 0), pe[$] = j(q[$], q[Q], q[ge]);
      const ae = [];
      let he, We = pe.concat();
      for (let $ = 0, ie = G; $ < ie; $++) {
        const Q = L[$];
        he = [];
        for (let ge = 0, I = Q.length, De = I - 1, xe = ge + 1; ge < I; ge++, De++, xe++) De === I && (De = 0), xe === I && (xe = 0), he[ge] = j(Q[ge], Q[De], Q[xe]);
        ae.push(he), We = We.concat(he);
      }
      let ke;
      if (g === 0) ke = yi.triangulateShape(q, L);
      else {
        const $ = [], ie = [];
        for (let Q = 0; Q < g; Q++) {
          const ge = Q / g, I = f * Math.cos(ge * Math.PI / 2), De = m * Math.sin(ge * Math.PI / 2) + _;
          for (let xe = 0, Fe = q.length; xe < Fe; xe++) {
            const re = V(q[xe], pe[xe], De);
            Oe(re.x, re.y, -I), ge === 0 && $.push(re);
          }
          for (let xe = 0, Fe = G; xe < Fe; xe++) {
            const re = L[xe];
            he = ae[xe];
            const E = [];
            for (let y = 0, U = re.length; y < U; y++) {
              const W = V(re[y], he[y], De);
              Oe(W.x, W.y, -I), ge === 0 && E.push(W);
            }
            ge === 0 && ie.push(E);
          }
        }
        ke = yi.triangulateShape($, ie);
      }
      const ot = ke.length, at = m + _;
      for (let $ = 0; $ < H; $++) {
        const ie = d ? V(b[$], We[$], at) : b[$];
        M ? (C.copy(A.normals[0]).multiplyScalar(ie.x), w.copy(A.binormals[0]).multiplyScalar(ie.y), P.copy(v[0]).add(C).add(w), Oe(P.x, P.y, P.z)) : Oe(ie.x, ie.y, 0);
      }
      for (let $ = 1; $ <= h; $++) for (let ie = 0; ie < H; ie++) {
        const Q = d ? V(b[ie], We[ie], at) : b[ie];
        M ? (C.copy(A.normals[$]).multiplyScalar(Q.x), w.copy(A.binormals[$]).multiplyScalar(Q.y), P.copy(v[$]).add(C).add(w), Oe(P.x, P.y, P.z)) : Oe(Q.x, Q.y, u / h * $);
      }
      for (let $ = g - 1; $ >= 0; $--) {
        const ie = $ / g, Q = f * Math.cos(ie * Math.PI / 2), ge = m * Math.sin(ie * Math.PI / 2) + _;
        for (let I = 0, De = q.length; I < De; I++) {
          const xe = V(q[I], pe[I], ge);
          Oe(xe.x, xe.y, u + Q);
        }
        for (let I = 0, De = L.length; I < De; I++) {
          const xe = L[I];
          he = ae[I];
          for (let Fe = 0, re = xe.length; Fe < re; Fe++) {
            const E = V(xe[Fe], he[Fe], ge);
            M ? Oe(E.x, E.y + v[h - 1].y, v[h - 1].x + Q) : Oe(E.x, E.y, u + Q);
          }
        }
      }
      Y(), ee();
      function Y() {
        const $ = n.length / 3;
        if (d) {
          let ie = 0, Q = H * ie;
          for (let ge = 0; ge < ot; ge++) {
            const I = ke[ge];
            Te(I[2] + Q, I[1] + Q, I[0] + Q);
          }
          ie = h + g * 2, Q = H * ie;
          for (let ge = 0; ge < ot; ge++) {
            const I = ke[ge];
            Te(I[0] + Q, I[1] + Q, I[2] + Q);
          }
        } else {
          for (let ie = 0; ie < ot; ie++) {
            const Q = ke[ie];
            Te(Q[2], Q[1], Q[0]);
          }
          for (let ie = 0; ie < ot; ie++) {
            const Q = ke[ie];
            Te(Q[0] + H * h, Q[1] + H * h, Q[2] + H * h);
          }
        }
        i.addGroup($, n.length / 3 - $, 0);
      }
      function ee() {
        const $ = n.length / 3;
        let ie = 0;
        Se(q, ie), ie += q.length;
        for (let Q = 0, ge = L.length; Q < ge; Q++) {
          const I = L[Q];
          Se(I, ie), ie += I.length;
        }
        i.addGroup($, n.length / 3 - $, 1);
      }
      function Se($, ie) {
        let Q = $.length;
        for (; --Q >= 0; ) {
          const ge = Q;
          let I = Q - 1;
          I < 0 && (I = $.length - 1);
          for (let De = 0, xe = h + g * 2; De < xe; De++) {
            const Fe = H * De, re = H * (De + 1), E = ie + ge + Fe, y = ie + I + Fe, U = ie + I + re, W = ie + ge + re;
            Qe(E, y, U, W);
          }
        }
      }
      function Oe($, ie, Q) {
        l.push($), l.push(ie), l.push(Q);
      }
      function Te($, ie, Q) {
        lt($), lt(ie), lt(Q);
        const ge = n.length / 3, I = x.generateTopUV(i, n, ge - 3, ge - 2, ge - 1);
        Xe(I[0]), Xe(I[1]), Xe(I[2]);
      }
      function Qe($, ie, Q, ge) {
        lt($), lt(ie), lt(ge), lt(ie), lt(Q), lt(ge);
        const I = n.length / 3, De = x.generateSideWallUV(i, n, I - 6, I - 3, I - 2, I - 1);
        Xe(De[0]), Xe(De[1]), Xe(De[3]), Xe(De[1]), Xe(De[2]), Xe(De[3]);
      }
      function lt($) {
        n.push(l[$ * 3 + 0]), n.push(l[$ * 3 + 1]), n.push(l[$ * 3 + 2]);
      }
      function Xe($) {
        s.push($.x), s.push($.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, i = this.parameters.options;
    return Rp(t, i, e);
  }
  static fromJSON(e, t) {
    const i = [];
    for (let s = 0, o = e.shapes.length; s < o; s++) {
      const a = t[e.shapes[s]];
      i.push(a);
    }
    const n = e.options.extrudePath;
    return n !== void 0 && (e.options.extrudePath = new ho[n.type]().fromJSON(n)), new Xl(i, e.options);
  }
}
const Cp = { generateTopUV: function(r, e, t, i, n) {
  const s = e[t * 3], o = e[t * 3 + 1], a = e[i * 3], l = e[i * 3 + 1], c = e[n * 3], h = e[n * 3 + 1];
  return [new K(s, o), new K(a, l), new K(c, h)];
}, generateSideWallUV: function(r, e, t, i, n, s) {
  const o = e[t * 3], a = e[t * 3 + 1], l = e[t * 3 + 2], c = e[i * 3], h = e[i * 3 + 1], u = e[i * 3 + 2], d = e[n * 3], f = e[n * 3 + 1], m = e[n * 3 + 2], _ = e[s * 3], g = e[s * 3 + 1], p = e[s * 3 + 2];
  return Math.abs(a - h) < Math.abs(o - c) ? [new K(o, 1 - l), new K(c, 1 - u), new K(d, 1 - m), new K(_, 1 - p)] : [new K(a, 1 - l), new K(h, 1 - u), new K(f, 1 - m), new K(g, 1 - p)];
} };
function Rp(r, e, t) {
  if (t.shapes = [], Array.isArray(r)) for (let i = 0, n = r.length; i < n; i++) {
    const s = r[i];
    t.shapes.push(s.uuid);
  }
  else t.shapes.push(r.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class ql extends Rn {
  constructor(e = 1, t = 0) {
    const i = (1 + Math.sqrt(5)) / 2, n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], s = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
    super(n, s, e, t), this.type = "IcosahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new ql(e.radius, e.detail);
  }
}
class Yl extends qe {
  constructor(e = [new K(0, -0.5), new K(0.5, 0), new K(0, 0.5)], t = 12, i = 0, n = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = { points: e, segments: t, phiStart: i, phiLength: n }, t = Math.floor(t), n = ze(n, 0, Math.PI * 2);
    const s = [], o = [], a = [], l = [], c = [], h = 1 / t, u = new R(), d = new K(), f = new R(), m = new R(), _ = new R();
    let g = 0, p = 0;
    for (let x = 0; x <= e.length - 1; x++) switch (x) {
      case 0:
        g = e[x + 1].x - e[x].x, p = e[x + 1].y - e[x].y, f.x = p * 1, f.y = -g, f.z = p * 0, _.copy(f), f.normalize(), l.push(f.x, f.y, f.z);
        break;
      case e.length - 1:
        l.push(_.x, _.y, _.z);
        break;
      default:
        g = e[x + 1].x - e[x].x, p = e[x + 1].y - e[x].y, f.x = p * 1, f.y = -g, f.z = p * 0, m.copy(f), f.x += _.x, f.y += _.y, f.z += _.z, f.normalize(), l.push(f.x, f.y, f.z), _.copy(m);
    }
    for (let x = 0; x <= t; x++) {
      const v = i + x * h * n, M = Math.sin(v), A = Math.cos(v);
      for (let w = 0; w <= e.length - 1; w++) {
        u.x = e[w].x * M, u.y = e[w].y, u.z = e[w].x * A, o.push(u.x, u.y, u.z), d.x = x / t, d.y = w / (e.length - 1), a.push(d.x, d.y);
        const C = l[3 * w + 0] * M, P = l[3 * w + 1], S = l[3 * w + 0] * A;
        c.push(C, P, S);
      }
    }
    for (let x = 0; x < t; x++) for (let v = 0; v < e.length - 1; v++) {
      const M = v + x * e.length, A = M, w = M + e.length, C = M + e.length + 1, P = M + 1;
      s.push(A, w, P), s.push(C, P, w);
    }
    this.setIndex(s), this.setAttribute("position", new Ae(o, 3)), this.setAttribute("uv", new Ae(a, 2)), this.setAttribute("normal", new Ae(c, 3));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Yl(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class Mo extends Rn {
  constructor(e = 1, t = 0) {
    const i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
    super(i, n, e, t), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new Mo(e.radius, e.detail);
  }
}
class js extends qe {
  constructor(e = 1, t = 1, i = 1, n = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: i, heightSegments: n };
    const s = e / 2, o = t / 2, a = Math.floor(i), l = Math.floor(n), c = a + 1, h = l + 1, u = e / a, d = t / l, f = [], m = [], _ = [], g = [];
    for (let p = 0; p < h; p++) {
      const x = p * d - o;
      for (let v = 0; v < c; v++) {
        const M = v * u - s;
        m.push(M, -x, 0), _.push(0, 0, 1), g.push(v / a), g.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let x = 0; x < a; x++) {
      const v = x + c * p, M = x + c * (p + 1), A = x + 1 + c * (p + 1), w = x + 1 + c * p;
      f.push(v, M, w), f.push(M, A, w);
    }
    this.setIndex(f), this.setAttribute("position", new Ae(m, 3)), this.setAttribute("normal", new Ae(_, 3)), this.setAttribute("uv", new Ae(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new js(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Zl extends qe {
  constructor(e = 0.5, t = 1, i = 32, n = 1, s = 0, o = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = { innerRadius: e, outerRadius: t, thetaSegments: i, phiSegments: n, thetaStart: s, thetaLength: o }, i = Math.max(3, i), n = Math.max(1, n);
    const a = [], l = [], c = [], h = [];
    let u = e;
    const d = (t - e) / n, f = new R(), m = new K();
    for (let _ = 0; _ <= n; _++) {
      for (let g = 0; g <= i; g++) {
        const p = s + g / i * o;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), l.push(f.x, f.y, f.z), c.push(0, 0, 1), m.x = (f.x / t + 1) / 2, m.y = (f.y / t + 1) / 2, h.push(m.x, m.y);
      }
      u += d;
    }
    for (let _ = 0; _ < n; _++) {
      const g = _ * (i + 1);
      for (let p = 0; p < i; p++) {
        const x = p + g, v = x, M = x + i + 1, A = x + i + 2, w = x + 1;
        a.push(v, M, w), a.push(M, A, w);
      }
    }
    this.setIndex(a), this.setAttribute("position", new Ae(l, 3)), this.setAttribute("normal", new Ae(c, 3)), this.setAttribute("uv", new Ae(h, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Zl(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class Jl extends qe {
  constructor(e = new rs([new K(0, 0.5), new K(-0.5, -0.5), new K(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t };
    const i = [], n = [], s = [], o = [];
    let a = 0, l = 0;
    if (Array.isArray(e) === false) c(e);
    else for (let h = 0; h < e.length; h++) c(e[h]), this.addGroup(a, l, h), a += l, l = 0;
    this.setIndex(i), this.setAttribute("position", new Ae(n, 3)), this.setAttribute("normal", new Ae(s, 3)), this.setAttribute("uv", new Ae(o, 2));
    function c(h) {
      const u = n.length / 3, d = h.extractPoints(t);
      let f = d.shape;
      const m = d.holes;
      yi.isClockWise(f) === false && (f = f.reverse());
      for (let g = 0, p = m.length; g < p; g++) {
        const x = m[g];
        yi.isClockWise(x) === true && (m[g] = x.reverse());
      }
      const _ = yi.triangulateShape(f, m);
      for (let g = 0, p = m.length; g < p; g++) {
        const x = m[g];
        f = f.concat(x);
      }
      for (let g = 0, p = f.length; g < p; g++) {
        const x = f[g];
        n.push(x.x, x.y, 0), s.push(0, 0, 1), o.push(x.x, x.y);
      }
      for (let g = 0, p = _.length; g < p; g++) {
        const x = _[g], v = x[0] + u, M = x[1] + u, A = x[2] + u;
        i.push(v, M, A), l += 3;
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return Ip(t, e);
  }
  static fromJSON(e, t) {
    const i = [];
    for (let n = 0, s = e.shapes.length; n < s; n++) {
      const o = t[e.shapes[n]];
      i.push(o);
    }
    return new Jl(i, e.curveSegments);
  }
}
function Ip(r, e) {
  if (e.shapes = [], Array.isArray(r)) for (let t = 0, i = r.length; t < i; t++) {
    const n = r[t];
    e.shapes.push(n.uuid);
  }
  else e.shapes.push(r.uuid);
  return e;
}
class So extends qe {
  constructor(e = 1, t = 32, i = 16, n = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: i, phiStart: n, phiLength: s, thetaStart: o, thetaLength: a }, t = Math.max(3, Math.floor(t)), i = Math.max(2, Math.floor(i));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const h = [], u = new R(), d = new R(), f = [], m = [], _ = [], g = [];
    for (let p = 0; p <= i; p++) {
      const x = [], v = p / i;
      let M = 0;
      p === 0 && o === 0 ? M = 0.5 / t : p === i && l === Math.PI && (M = -0.5 / t);
      for (let A = 0; A <= t; A++) {
        const w = A / t;
        u.x = -e * Math.cos(n + w * s) * Math.sin(o + v * a), u.y = e * Math.cos(o + v * a), u.z = e * Math.sin(n + w * s) * Math.sin(o + v * a), m.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), g.push(w + M, 1 - v), x.push(c++);
      }
      h.push(x);
    }
    for (let p = 0; p < i; p++) for (let x = 0; x < t; x++) {
      const v = h[p][x + 1], M = h[p][x], A = h[p + 1][x], w = h[p + 1][x + 1];
      (p !== 0 || o > 0) && f.push(v, M, w), (p !== i - 1 || l < Math.PI) && f.push(M, A, w);
    }
    this.setIndex(f), this.setAttribute("position", new Ae(m, 3)), this.setAttribute("normal", new Ae(_, 3)), this.setAttribute("uv", new Ae(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new So(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class $l extends Rn {
  constructor(e = 1, t = 0) {
    const i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
    super(i, n, e, t), this.type = "TetrahedronGeometry", this.parameters = { radius: e, detail: t };
  }
  static fromJSON(e) {
    return new $l(e.radius, e.detail);
  }
}
class Kl extends qe {
  constructor(e = 1, t = 0.4, i = 12, n = 48, s = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: i, tubularSegments: n, arc: s }, i = Math.floor(i), n = Math.floor(n);
    const o = [], a = [], l = [], c = [], h = new R(), u = new R(), d = new R();
    for (let f = 0; f <= i; f++) for (let m = 0; m <= n; m++) {
      const _ = m / n * s, g = f / i * Math.PI * 2;
      u.x = (e + t * Math.cos(g)) * Math.cos(_), u.y = (e + t * Math.cos(g)) * Math.sin(_), u.z = t * Math.sin(g), a.push(u.x, u.y, u.z), h.x = e * Math.cos(_), h.y = e * Math.sin(_), d.subVectors(u, h).normalize(), l.push(d.x, d.y, d.z), c.push(m / n), c.push(f / i);
    }
    for (let f = 1; f <= i; f++) for (let m = 1; m <= n; m++) {
      const _ = (n + 1) * f + m - 1, g = (n + 1) * (f - 1) + m - 1, p = (n + 1) * (f - 1) + m, x = (n + 1) * f + m;
      o.push(_, g, x), o.push(g, p, x);
    }
    this.setIndex(o), this.setAttribute("position", new Ae(a, 3)), this.setAttribute("normal", new Ae(l, 3)), this.setAttribute("uv", new Ae(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Kl(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Ql extends qe {
  constructor(e = 1, t = 0.4, i = 64, n = 8, s = 2, o = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = { radius: e, tube: t, tubularSegments: i, radialSegments: n, p: s, q: o }, i = Math.floor(i), n = Math.floor(n);
    const a = [], l = [], c = [], h = [], u = new R(), d = new R(), f = new R(), m = new R(), _ = new R(), g = new R(), p = new R();
    for (let v = 0; v <= i; ++v) {
      const M = v / i * s * Math.PI * 2;
      x(M, s, o, e, f), x(M + 0.01, s, o, e, m), g.subVectors(m, f), p.addVectors(m, f), _.crossVectors(g, p), p.crossVectors(_, g), _.normalize(), p.normalize();
      for (let A = 0; A <= n; ++A) {
        const w = A / n * Math.PI * 2, C = -t * Math.cos(w), P = t * Math.sin(w);
        u.x = f.x + (C * p.x + P * _.x), u.y = f.y + (C * p.y + P * _.y), u.z = f.z + (C * p.z + P * _.z), l.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), c.push(d.x, d.y, d.z), h.push(v / i), h.push(A / n);
      }
    }
    for (let v = 1; v <= i; v++) for (let M = 1; M <= n; M++) {
      const A = (n + 1) * (v - 1) + (M - 1), w = (n + 1) * v + (M - 1), C = (n + 1) * v + M, P = (n + 1) * (v - 1) + M;
      a.push(A, w, P), a.push(w, C, P);
    }
    this.setIndex(a), this.setAttribute("position", new Ae(l, 3)), this.setAttribute("normal", new Ae(c, 3)), this.setAttribute("uv", new Ae(h, 2));
    function x(v, M, A, w, C) {
      const P = Math.cos(v), S = Math.sin(v), b = A / M * v, L = Math.cos(b);
      C.x = w * (2 + L) * 0.5 * P, C.y = w * (2 + L) * S * 0.5, C.z = w * Math.sin(b) * 0.5;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ql(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
  }
}
class jl extends qe {
  constructor(e = new Eu(new R(-1, -1, 0), new R(-1, 1, 0), new R(1, 1, 0)), t = 64, i = 1, n = 8, s = false) {
    super(), this.type = "TubeGeometry", this.parameters = { path: e, tubularSegments: t, radius: i, radialSegments: n, closed: s };
    const o = e.computeFrenetFrames(t, s);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
    const a = new R(), l = new R(), c = new K();
    let h = new R();
    const u = [], d = [], f = [], m = [];
    _(), this.setIndex(m), this.setAttribute("position", new Ae(u, 3)), this.setAttribute("normal", new Ae(d, 3)), this.setAttribute("uv", new Ae(f, 2));
    function _() {
      for (let v = 0; v < t; v++) g(v);
      g(s === false ? t : 0), x(), p();
    }
    function g(v) {
      h = e.getPointAt(v / t, h);
      const M = o.normals[v], A = o.binormals[v];
      for (let w = 0; w <= n; w++) {
        const C = w / n * Math.PI * 2, P = Math.sin(C), S = -Math.cos(C);
        l.x = S * M.x + P * A.x, l.y = S * M.y + P * A.y, l.z = S * M.z + P * A.z, l.normalize(), d.push(l.x, l.y, l.z), a.x = h.x + i * l.x, a.y = h.y + i * l.y, a.z = h.z + i * l.z, u.push(a.x, a.y, a.z);
      }
    }
    function p() {
      for (let v = 1; v <= t; v++) for (let M = 1; M <= n; M++) {
        const A = (n + 1) * (v - 1) + (M - 1), w = (n + 1) * v + (M - 1), C = (n + 1) * v + M, P = (n + 1) * (v - 1) + M;
        m.push(A, w, P), m.push(w, C, P);
      }
    }
    function x() {
      for (let v = 0; v <= t; v++) for (let M = 0; M <= n; M++) c.x = v / t, c.y = M / n, f.push(c.x, c.y);
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.path = this.parameters.path.toJSON(), e;
  }
  static fromJSON(e) {
    return new jl(new ho[e.path.type]().fromJSON(e.path), e.tubularSegments, e.radius, e.radialSegments, e.closed);
  }
}
class Pp extends qe {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) {
      const t = [], i = /* @__PURE__ */ new Set(), n = new R(), s = new R();
      if (e.index !== null) {
        const o = e.attributes.position, a = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let c = 0, h = l.length; c < h; ++c) {
          const u = l[c], d = u.start, f = u.count;
          for (let m = d, _ = d + f; m < _; m += 3) for (let g = 0; g < 3; g++) {
            const p = a.getX(m + g), x = a.getX(m + (g + 1) % 3);
            n.fromBufferAttribute(o, p), s.fromBufferAttribute(o, x), ah(n, s, i) === true && (t.push(n.x, n.y, n.z), t.push(s.x, s.y, s.z));
          }
        }
      } else {
        const o = e.attributes.position;
        for (let a = 0, l = o.count / 3; a < l; a++) for (let c = 0; c < 3; c++) {
          const h = 3 * a + c, u = 3 * a + (c + 1) % 3;
          n.fromBufferAttribute(o, h), s.fromBufferAttribute(o, u), ah(n, s, i) === true && (t.push(n.x, n.y, n.z), t.push(s.x, s.y, s.z));
        }
      }
      this.setAttribute("position", new Ae(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function ah(r, e, t) {
  const i = `${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`, n = `${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;
  return t.has(i) === true || t.has(n) === true ? false : (t.add(i), t.add(n), true);
}
var lh = Object.freeze({ __proto__: null, BoxGeometry: fs, CapsuleGeometry: Vl, CircleGeometry: kl, ConeGeometry: yo, CylinderGeometry: xo, DodecahedronGeometry: Gl, EdgesGeometry: Kf, ExtrudeGeometry: Xl, IcosahedronGeometry: ql, LatheGeometry: Yl, OctahedronGeometry: Mo, PlaneGeometry: js, PolyhedronGeometry: Rn, RingGeometry: Zl, ShapeGeometry: Jl, SphereGeometry: So, TetrahedronGeometry: $l, TorusGeometry: Kl, TorusKnotGeometry: Ql, TubeGeometry: jl, WireframeGeometry: Pp });
class Lp extends Bt {
  constructor(e) {
    super(), this.isShadowMaterial = true, this.type = "ShadowMaterial", this.color = new Me(0), this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class Du extends fi {
  constructor(e) {
    super(e), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class Uu extends Bt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Me(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = En, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new li(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Dp extends Uu {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new K(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return ze(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Me(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Me(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Me(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class Up extends Bt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new Me(16777215), this.specular = new Me(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = En, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new li(), this.combine = go, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Np extends Bt {
  constructor(e) {
    super(), this.isMeshToonMaterial = true, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new Me(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = En, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
class Op extends Bt {
  constructor(e) {
    super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = En, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class Fp extends Bt {
  constructor(e) {
    super(), this.isMeshLambertMaterial = true, this.type = "MeshLambertMaterial", this.color = new Me(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = En, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new li(), this.combine = go, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Nu extends Bt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Ld, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ou extends Bt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class Bp extends Bt {
  constructor(e) {
    super(), this.isMeshMatcapMaterial = true, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new Me(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = En, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class zp extends qt {
  constructor(e) {
    super(), this.isLineDashedMaterial = true, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
  }
}
function Sn(r, e) {
  return !r || r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function Fu(r) {
  function e(n, s) {
    return r[n] - r[s];
  }
  const t = r.length, i = new Array(t);
  for (let n = 0; n !== t; ++n) i[n] = n;
  return i.sort(e), i;
}
function pl(r, e, t) {
  const i = r.length, n = new r.constructor(i);
  for (let s = 0, o = 0; o !== i; ++s) {
    const a = t[s] * e;
    for (let l = 0; l !== e; ++l) n[o++] = r[a + l];
  }
  return n;
}
function ec(r, e, t, i) {
  let n = 1, s = r[0];
  for (; s !== void 0 && s[i] === void 0; ) s = r[n++];
  if (s === void 0) return;
  let o = s[i];
  if (o !== void 0) if (Array.isArray(o)) do
    o = s[i], o !== void 0 && (e.push(s.time), t.push(...o)), s = r[n++];
  while (s !== void 0);
  else if (o.toArray !== void 0) do
    o = s[i], o !== void 0 && (e.push(s.time), o.toArray(t, t.length)), s = r[n++];
  while (s !== void 0);
  else do
    o = s[i], o !== void 0 && (e.push(s.time), t.push(o)), s = r[n++];
  while (s !== void 0);
}
function Vp(r, e, t, i, n = 30) {
  const s = r.clone();
  s.name = e;
  const o = [];
  for (let l = 0; l < s.tracks.length; ++l) {
    const c = s.tracks[l], h = c.getValueSize(), u = [], d = [];
    for (let f = 0; f < c.times.length; ++f) {
      const m = c.times[f] * n;
      if (!(m < t || m >= i)) {
        u.push(c.times[f]);
        for (let _ = 0; _ < h; ++_) d.push(c.values[f * h + _]);
      }
    }
    u.length !== 0 && (c.times = Sn(u, c.times.constructor), c.values = Sn(d, c.values.constructor), o.push(c));
  }
  s.tracks = o;
  let a = 1 / 0;
  for (let l = 0; l < s.tracks.length; ++l) a > s.tracks[l].times[0] && (a = s.tracks[l].times[0]);
  for (let l = 0; l < s.tracks.length; ++l) s.tracks[l].shift(-1 * a);
  return s.resetDuration(), s;
}
function kp(r, e = 0, t = r, i = 30) {
  i <= 0 && (i = 30);
  const n = t.tracks.length, s = e / i;
  for (let o = 0; o < n; ++o) {
    const a = t.tracks[o], l = a.ValueTypeName;
    if (l === "bool" || l === "string") continue;
    const c = r.tracks.find(function(p) {
      return p.name === a.name && p.ValueTypeName === l;
    });
    if (c === void 0) continue;
    let h = 0;
    const u = a.getValueSize();
    a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3);
    let d = 0;
    const f = c.getValueSize();
    c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
    const m = a.times.length - 1;
    let _;
    if (s <= a.times[0]) {
      const p = h, x = u - h;
      _ = a.values.slice(p, x);
    } else if (s >= a.times[m]) {
      const p = m * u + h, x = p + u - h;
      _ = a.values.slice(p, x);
    } else {
      const p = a.createInterpolant(), x = h, v = u - h;
      p.evaluate(s), _ = p.resultBuffer.slice(x, v);
    }
    l === "quaternion" && new ii().fromArray(_).normalize().conjugate().toArray(_);
    const g = c.times.length;
    for (let p = 0; p < g; ++p) {
      const x = p * f + d;
      if (l === "quaternion") ii.multiplyQuaternionsFlat(c.values, x, _, 0, c.values, x);
      else {
        const v = f - d * 2;
        for (let M = 0; M < v; ++M) c.values[x + M] -= _[M];
      }
    }
  }
  return r.blendMode = hu, r;
}
class Oy {
  static convertArray(e, t) {
    return Sn(e, t);
  }
  static isTypedArray(e) {
    return du(e);
  }
  static getKeyframeOrder(e) {
    return Fu(e);
  }
  static sortedArray(e, t, i) {
    return pl(e, t, i);
  }
  static flattenJSON(e, t, i, n) {
    ec(e, t, i, n);
  }
  static subclip(e, t, i, n, s = 30) {
    return Vp(e, t, i, n, s);
  }
  static makeClipAdditive(e, t = 0, i = e, n = 30) {
    return kp(e, t, i, n);
  }
}
class bo {
  constructor(e, t, i, n) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = n !== void 0 ? n : new t.constructor(i), this.sampleValues = t, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let i = this._cachedIndex, n = t[i], s = t[i - 1];
    e: {
      t: {
        let o;
        i: {
          n: if (!(e < n)) {
            for (let a = i + 2; ; ) {
              if (n === void 0) {
                if (e < s) break n;
                return i = t.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
              }
              if (i === a) break;
              if (s = n, n = t[++i], e < n) break t;
            }
            o = t.length;
            break i;
          }
          if (!(e >= s)) {
            const a = t[1];
            e < a && (i = 2, s = a);
            for (let l = i - 2; ; ) {
              if (s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (i === l) break;
              if (n = s, s = t[--i - 1], e >= s) break t;
            }
            o = i, i = 0;
            break i;
          }
          break e;
        }
        for (; i < o; ) {
          const a = i + o >>> 1;
          e < t[a] ? o = a : i = a + 1;
        }
        if (n = t[i], s = t[i - 1], s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (n === void 0) return i = t.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
      }
      this._cachedIndex = i, this.intervalChanged_(i, s, n);
    }
    return this.interpolate_(i, s, e, n);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, i = this.sampleValues, n = this.valueSize, s = e * n;
    for (let o = 0; o !== n; ++o) t[o] = i[s + o];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Gp extends bo {
  constructor(e, t, i, n) {
    super(e, t, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: es, endingEnd: es };
  }
  intervalChanged_(e, t, i) {
    const n = this.parameterPositions;
    let s = e - 2, o = e + 1, a = n[s], l = n[o];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case ts:
        s = e, a = 2 * t - i;
        break;
      case so:
        s = n.length - 2, a = t + n[s] - n[s + 1];
        break;
      default:
        s = e, a = i;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case ts:
        o = e, l = 2 * i - t;
        break;
      case so:
        o = 1, l = i + n[1] - n[0];
        break;
      default:
        o = e - 1, l = t;
    }
    const c = (i - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - i), this._offsetPrev = s * h, this._offsetNext = o * h;
  }
  interpolate_(e, t, i, n) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (i - t) / (n - t), _ = m * m, g = _ * m, p = -d * g + 2 * d * _ - d * m, x = (1 + d) * g + (-1.5 - 2 * d) * _ + (-0.5 + d) * m + 1, v = (-1 - f) * g + (1.5 + f) * _ + 0.5 * m, M = f * g - f * _;
    for (let A = 0; A !== a; ++A) s[A] = p * o[h + A] + x * o[c + A] + v * o[l + A] + M * o[u + A];
    return s;
  }
}
class Bu extends bo {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e, t, i, n) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = (i - t) / (n - t), u = 1 - h;
    for (let d = 0; d !== a; ++d) s[d] = o[c + d] * u + o[l + d] * h;
    return s;
  }
}
class Hp extends bo {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class pi {
  constructor(e, t, i, n) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Sn(t, this.TimeBufferType), this.values = Sn(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let i;
    if (t.toJSON !== this.toJSON) i = t.toJSON(e);
    else {
      i = { name: e.name, times: Sn(e.times, Array), values: Sn(e.values, Array) };
      const n = e.getInterpolation();
      n !== e.DefaultInterpolation && (i.interpolation = n);
    }
    return i.type = e.ValueTypeName, i;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Hp(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Bu(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Gp(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case no:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case cl:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Po:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(i);
      return de("KeyframeTrack:", i), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return no;
      case this.InterpolantFactoryMethodLinear:
        return cl;
      case this.InterpolantFactoryMethodSmooth:
        return Po;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let i = 0, n = t.length; i !== n; ++i) t[i] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let i = 0, n = t.length; i !== n; ++i) t[i] *= e;
    }
    return this;
  }
  trim(e, t) {
    const i = this.times, n = i.length;
    let s = 0, o = n - 1;
    for (; s !== n && i[s] < e; ) ++s;
    for (; o !== -1 && i[o] > t; ) --o;
    if (++o, s !== 0 || o !== n) {
      s >= o && (o = Math.max(o, 1), s = o - 1);
      const a = this.getValueSize();
      this.times = i.slice(s, o), this.values = this.values.slice(s * a, o * a);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (Le("KeyframeTrack: Invalid value size in track.", this), e = false);
    const i = this.times, n = this.values, s = i.length;
    s === 0 && (Le("KeyframeTrack: Track is empty.", this), e = false);
    let o = null;
    for (let a = 0; a !== s; a++) {
      const l = i[a];
      if (typeof l == "number" && isNaN(l)) {
        Le("KeyframeTrack: Time is not a valid number.", this, a, l), e = false;
        break;
      }
      if (o !== null && o > l) {
        Le("KeyframeTrack: Out of order keys.", this, a, l, o), e = false;
        break;
      }
      o = l;
    }
    if (n !== void 0 && du(n)) for (let a = 0, l = n.length; a !== l; ++a) {
      const c = n[a];
      if (isNaN(c)) {
        Le("KeyframeTrack: Value is not a valid number.", this, a, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), i = this.getValueSize(), n = this.getInterpolation() === Po, s = e.length - 1;
    let o = 1;
    for (let a = 1; a < s; ++a) {
      let l = false;
      const c = e[a], h = e[a + 1];
      if (c !== h && (a !== 1 || c !== e[0])) if (n) l = true;
      else {
        const u = a * i, d = u - i, f = u + i;
        for (let m = 0; m !== i; ++m) {
          const _ = t[u + m];
          if (_ !== t[d + m] || _ !== t[f + m]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (a !== o) {
          e[o] = e[a];
          const u = a * i, d = o * i;
          for (let f = 0; f !== i; ++f) t[d + f] = t[u + f];
        }
        ++o;
      }
    }
    if (s > 0) {
      e[o] = e[s];
      for (let a = s * i, l = o * i, c = 0; c !== i; ++c) t[l + c] = t[a + c];
      ++o;
    }
    return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * i)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), i = this.constructor, n = new i(this.name, e, t);
    return n.createInterpolant = this.createInterpolant, n;
  }
}
pi.prototype.ValueTypeName = "";
pi.prototype.TimeBufferType = Float32Array;
pi.prototype.ValueBufferType = Float32Array;
pi.prototype.DefaultInterpolation = cl;
class ps extends pi {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
ps.prototype.ValueTypeName = "bool";
ps.prototype.ValueBufferType = Array;
ps.prototype.DefaultInterpolation = no;
ps.prototype.InterpolantFactoryMethodLinear = void 0;
ps.prototype.InterpolantFactoryMethodSmooth = void 0;
class zu extends pi {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
}
zu.prototype.ValueTypeName = "color";
class uo extends pi {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
}
uo.prototype.ValueTypeName = "number";
class Wp extends bo {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e, t, i, n) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (i - t) / (n - t);
    let c = e * a;
    for (let h = c + a; c !== h; c += 4) ii.slerpFlat(s, 0, o, c - a, o, c, l);
    return s;
  }
}
class To extends pi {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Wp(this.times, this.values, this.getValueSize(), e);
  }
}
To.prototype.ValueTypeName = "quaternion";
To.prototype.InterpolantFactoryMethodSmooth = void 0;
class ms extends pi {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
ms.prototype.ValueTypeName = "string";
ms.prototype.ValueBufferType = Array;
ms.prototype.DefaultInterpolation = no;
ms.prototype.InterpolantFactoryMethodLinear = void 0;
ms.prototype.InterpolantFactoryMethodSmooth = void 0;
class fo extends pi {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
}
fo.prototype.ValueTypeName = "vector";
class po {
  constructor(e = "", t = -1, i = [], n = wl) {
    this.name = e, this.tracks = i, this.duration = t, this.blendMode = n, this.uuid = ti(), this.userData = {}, this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], i = e.tracks, n = 1 / (e.fps || 1);
    for (let o = 0, a = i.length; o !== a; ++o) t.push(qp(i[o]).scale(n));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s.userData = JSON.parse(e.userData || "{}"), s;
  }
  static toJSON(e) {
    const t = [], i = e.tracks, n = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode, userData: JSON.stringify(e.userData) };
    for (let s = 0, o = i.length; s !== o; ++s) t.push(pi.toJSON(i[s]));
    return n;
  }
  static CreateFromMorphTargetSequence(e, t, i, n) {
    const s = t.length, o = [];
    for (let a = 0; a < s; a++) {
      let l = [], c = [];
      l.push((a + s - 1) % s, a, (a + 1) % s), c.push(0, 1, 0);
      const h = Fu(l);
      l = pl(l, 1, h), c = pl(c, 1, h), !n && l[0] === 0 && (l.push(s), c.push(c[0])), o.push(new uo(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / i));
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let i = e;
    if (!Array.isArray(e)) {
      const n = e;
      i = n.geometry && n.geometry.animations || n.animations;
    }
    for (let n = 0; n < i.length; n++) if (i[n].name === t) return i[n];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, i) {
    const n = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = c.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = n[u];
        d || (n[u] = d = []), d.push(c);
      }
    }
    const o = [];
    for (const a in n) o.push(this.CreateFromMorphTargetSequence(a, n[a], t, i));
    return o;
  }
  static parseAnimation(e, t) {
    if (de("AnimationClip: parseAnimation() is deprecated and will be removed with r185"), !e) return Le("AnimationClip: No animation in JSONLoader data."), null;
    const i = function(u, d, f, m, _) {
      if (f.length !== 0) {
        const g = [], p = [];
        ec(f, g, p, m), g.length !== 0 && _.push(new u(d, g, p));
      }
    }, n = [], s = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0)) if (d[0].morphTargets) {
        const f = {};
        let m;
        for (m = 0; m < d.length; m++) if (d[m].morphTargets) for (let _ = 0; _ < d[m].morphTargets.length; _++) f[d[m].morphTargets[_]] = -1;
        for (const _ in f) {
          const g = [], p = [];
          for (let x = 0; x !== d[m].morphTargets.length; ++x) {
            const v = d[m];
            g.push(v.time), p.push(v.morphTarget === _ ? 1 : 0);
          }
          n.push(new uo(".morphTargetInfluence[" + _ + "]", g, p));
        }
        l = f.length * o;
      } else {
        const f = ".bones[" + t[u].name + "]";
        i(fo, f + ".position", d, "pos", n), i(To, f + ".quaternion", d, "rot", n), i(fo, f + ".scale", d, "scl", n);
      }
    }
    return n.length === 0 ? null : new this(s, l, n, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let i = 0, n = e.length; i !== n; ++i) {
      const s = this.tracks[i];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let i = 0; i < this.tracks.length; i++) e.push(this.tracks[i].clone());
    const t = new this.constructor(this.name, this.duration, e, this.blendMode);
    return t.userData = JSON.parse(JSON.stringify(this.userData)), t;
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Xp(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return uo;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return fo;
    case "color":
      return zu;
    case "quaternion":
      return To;
    case "bool":
    case "boolean":
      return ps;
    case "string":
      return ms;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function qp(r) {
  if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Xp(r.type);
  if (r.times === void 0) {
    const t = [], i = [];
    ec(r.keys, t, i, "value"), r.times = t, r.values = i;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Ui = { enabled: false, files: {}, add: function(r, e) {
  this.enabled !== false && (this.files[r] = e);
}, get: function(r) {
  if (this.enabled !== false) return this.files[r];
}, remove: function(r) {
  delete this.files[r];
}, clear: function() {
  this.files = {};
} };
class Vu {
  constructor(e, t, i) {
    const n = this;
    let s = false, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this._abortController = null, this.itemStart = function(h) {
      a++, s === false && n.onStart !== void 0 && n.onStart(h, o, a), s = true;
    }, this.itemEnd = function(h) {
      o++, n.onProgress !== void 0 && n.onProgress(h, o, a), o === a && (s = false, n.onLoad !== void 0 && n.onLoad());
    }, this.itemError = function(h) {
      n.onError !== void 0 && n.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const f = c[u], m = c[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h)) return m;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}
const Yp = new Vu();
class ni {
  constructor(e) {
    this.manager = e !== void 0 ? e : Yp, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const i = this;
    return new Promise(function(n, s) {
      i.load(e, n, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  abort() {
    return this;
  }
}
ni.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Ii = {};
class Zp extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class ji extends ni {
  constructor(e) {
    super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
  }
  load(e, t, i, n) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Ui.get(`file:${e}`);
    if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(s), this.manager.itemEnd(e);
    }, 0), s;
    if (Ii[e] !== void 0) {
      Ii[e].push({ onLoad: t, onProgress: i, onError: n });
      return;
    }
    Ii[e] = [], Ii[e].push({ onLoad: t, onProgress: i, onError: n });
    const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin", signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && de("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = Ii[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), f = d ? parseInt(d) : 0, m = f !== 0;
        let _ = 0;
        const g = new ReadableStream({ start(p) {
          x();
          function x() {
            u.read().then(({ done: v, value: M }) => {
              if (v) p.close();
              else {
                _ += M.byteLength;
                const A = new ProgressEvent("progress", { lengthComputable: m, loaded: _, total: f });
                for (let w = 0, C = h.length; w < C; w++) {
                  const P = h[w];
                  P.onProgress && P.onProgress(A);
                }
                p.enqueue(M), x();
              }
            }, (v) => {
              p.error(v);
            });
          }
        } });
        return new Response(g);
      } else throw new Zp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return c.json();
        default:
          if (a === "") return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return c.arrayBuffer().then((m) => f.decode(m));
          }
      }
    }).then((c) => {
      Ui.add(`file:${e}`, c);
      const h = Ii[e];
      delete Ii[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(c);
      }
    }).catch((c) => {
      const h = Ii[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete Ii[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}
class Fy extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = this, o = new ji(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (l) {
        n ? n(l) : Le(l), s.manager.itemError(e);
      }
    }, i, n);
  }
  parse(e) {
    const t = [];
    for (let i = 0; i < e.length; i++) {
      const n = po.parse(e[i]);
      t.push(n);
    }
    return t;
  }
}
class By extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = this, o = [], a = new zl(), l = new ji(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(s.withCredentials);
    let c = 0;
    function h(u) {
      l.load(e[u], function(d) {
        const f = s.parse(d, true);
        o[u] = { width: f.width, height: f.height, format: f.format, mipmaps: f.mipmaps }, c += 1, c === 6 && (f.mipmapCount === 1 && (a.minFilter = mt), a.image = o, a.format = f.format, a.needsUpdate = true, t && t(a));
      }, i, n);
    }
    if (Array.isArray(e)) for (let u = 0, d = e.length; u < d; ++u) h(u);
    else l.load(e, function(u) {
      const d = s.parse(u, true);
      if (d.isCubemap) {
        const f = d.mipmaps.length / d.mipmapCount;
        for (let m = 0; m < f; m++) {
          o[m] = { mipmaps: [] };
          for (let _ = 0; _ < d.mipmapCount; _++) o[m].mipmaps.push(d.mipmaps[m * d.mipmapCount + _]), o[m].format = d.format, o[m].width = d.width, o[m].height = d.height;
        }
        a.image = o;
      } else a.image.width = d.width, a.image.height = d.height, a.mipmaps = d.mipmaps;
      d.mipmapCount === 1 && (a.minFilter = mt), a.format = d.format, a.needsUpdate = true, t && t(a);
    }, i, n);
    return a;
  }
}
const $n = /* @__PURE__ */ new WeakMap();
class mo extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = Ui.get(`image:${e}`);
    if (o !== void 0) {
      if (o.complete === true) s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0);
      else {
        let u = $n.get(o);
        u === void 0 && (u = [], $n.set(o, u)), u.push({ onLoad: t, onError: n });
      }
      return o;
    }
    const a = Hs("img");
    function l() {
      h(), t && t(this);
      const u = $n.get(this) || [];
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        f.onLoad && f.onLoad(this);
      }
      $n.delete(this), s.manager.itemEnd(e);
    }
    function c(u) {
      h(), n && n(u), Ui.remove(`image:${e}`);
      const d = $n.get(this) || [];
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        m.onError && m.onError(u);
      }
      $n.delete(this), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", l, false), a.removeEventListener("error", c, false);
    }
    return a.addEventListener("load", l, false), a.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), Ui.add(`image:${e}`, a), s.manager.itemStart(e), a.src = e, a;
  }
}
class zy extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = new vo();
    s.colorSpace = Kt;
    const o = new mo(this.manager);
    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
    let a = 0;
    function l(c) {
      o.load(e[c], function(h) {
        s.images[c] = h, a++, a === 6 && (s.needsUpdate = true, t && t(s));
      }, void 0, n);
    }
    for (let c = 0; c < e.length; ++c) l(c);
    return s;
  }
}
class Vy extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = this, o = new Si(), a = new ji(this.manager);
    return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(s.withCredentials), a.load(e, function(l) {
      let c;
      try {
        c = s.parse(l);
      } catch (h) {
        if (n !== void 0) n(h);
        else {
          h(h);
          return;
        }
      }
      c.image !== void 0 ? o.image = c.image : c.data !== void 0 && (o.image.width = c.width, o.image.height = c.height, o.image.data = c.data), o.wrapS = c.wrapS !== void 0 ? c.wrapS : ei, o.wrapT = c.wrapT !== void 0 ? c.wrapT : ei, o.magFilter = c.magFilter !== void 0 ? c.magFilter : mt, o.minFilter = c.minFilter !== void 0 ? c.minFilter : mt, o.anisotropy = c.anisotropy !== void 0 ? c.anisotropy : 1, c.colorSpace !== void 0 && (o.colorSpace = c.colorSpace), c.flipY !== void 0 && (o.flipY = c.flipY), c.format !== void 0 && (o.format = c.format), c.type !== void 0 && (o.type = c.type), c.mipmaps !== void 0 && (o.mipmaps = c.mipmaps, o.minFilter = Di), c.mipmapCount === 1 && (o.minFilter = mt), c.generateMipmaps !== void 0 && (o.generateMipmaps = c.generateMipmaps), o.needsUpdate = true, t && t(o, c);
    }, i, n), o;
  }
}
class ky extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = new Mt(), o = new mo(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = true, t !== void 0 && t(s);
    }, i, n), s;
  }
}
class In extends it {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Me(e), this.intensity = t;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
class Jp extends In {
  constructor(e, t, i) {
    super(e, i), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Me(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const ha = new Ge(), ch = new R(), hh = new R();
class tc {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new K(512, 512), this.mapType = Qt, this.map = null, this.mapPass = null, this.matrix = new Ge(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Qs(), this._frameExtents = new K(1, 1), this._viewportCount = 1, this._viewports = [new pt(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, i = this.matrix;
    ch.setFromMatrixPosition(e.matrixWorld), t.position.copy(ch), hh.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(hh), t.updateMatrixWorld(), ha.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ha, t.coordinateSystem, t.reversedDepth), t.reversedDepth ? i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i.multiply(ha);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class $p extends tc {
  constructor() {
    super(new Pt(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(e) {
    const t = this.camera, i = cs * 2 * e.angle * this.focus, n = this.mapSize.width / this.mapSize.height * this.aspect, s = e.distance || t.far;
    (i !== t.fov || n !== t.aspect || s !== t.far) && (t.fov = i, t.aspect = n, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Kp extends In {
  constructor(e, t, i = 0, n = Math.PI / 3, s = 0, o = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.target = new it(), this.distance = i, this.angle = n, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new $p();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.map = e.map, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.angle = this.angle, t.object.decay = this.decay, t.object.penumbra = this.penumbra, t.object.target = this.target.uuid, this.map && this.map.isTexture && (t.object.map = this.map.toJSON(e).uuid), t.object.shadow = this.shadow.toJSON(), t;
  }
}
class Qp extends tc {
  constructor() {
    super(new Pt(90, 1, 0.5, 500)), this.isPointLightShadow = true;
  }
}
class jp extends In {
  constructor(e, t, i = 0, n = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new Qp();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
  }
}
class Ao extends Dl {
  constructor(e = -1, t = 1, i = 1, n = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = n, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, n, s, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
    let s = i - e, o = i + e, a = n + t, l = n - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class em extends tc {
  constructor() {
    super(new Ao(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class tm extends In {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.target = new it(), this.shadow = new em();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}
class im extends In {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class nm extends In {
  constructor(e, t, i = 10, n = 10) {
    super(e, t), this.isRectAreaLight = true, this.type = "RectAreaLight", this.width = i, this.height = n;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return super.copy(e), this.width = e.width, this.height = e.height, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
}
class ku {
  constructor() {
    this.isSphericalHarmonics3 = true, this.coefficients = [];
    for (let e = 0; e < 9; e++) this.coefficients.push(new R());
  }
  set(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    const i = e.x, n = e.y, s = e.z, o = this.coefficients;
    return t.copy(o[0]).multiplyScalar(0.282095), t.addScaledVector(o[1], 0.488603 * n), t.addScaledVector(o[2], 0.488603 * s), t.addScaledVector(o[3], 0.488603 * i), t.addScaledVector(o[4], 1.092548 * (i * n)), t.addScaledVector(o[5], 1.092548 * (n * s)), t.addScaledVector(o[6], 0.315392 * (3 * s * s - 1)), t.addScaledVector(o[7], 1.092548 * (i * s)), t.addScaledVector(o[8], 0.546274 * (i * i - n * n)), t;
  }
  getIrradianceAt(e, t) {
    const i = e.x, n = e.y, s = e.z, o = this.coefficients;
    return t.copy(o[0]).multiplyScalar(0.886227), t.addScaledVector(o[1], 2 * 0.511664 * n), t.addScaledVector(o[2], 2 * 0.511664 * s), t.addScaledVector(o[3], 2 * 0.511664 * i), t.addScaledVector(o[4], 2 * 0.429043 * i * n), t.addScaledVector(o[5], 2 * 0.429043 * n * s), t.addScaledVector(o[6], 0.743125 * s * s - 0.247708), t.addScaledVector(o[7], 2 * 0.429043 * i * s), t.addScaledVector(o[8], 0.429043 * (i * i - n * n)), t;
  }
  add(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let i = 0; i < 9; i++) this.coefficients[i].addScaledVector(e.coefficients[i], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let i = 0; i < 9; i++) this.coefficients[i].lerp(e.coefficients[i], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++) if (!this.coefficients[t].equals(e.coefficients[t])) return false;
    return true;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const i = this.coefficients;
    for (let n = 0; n < 9; n++) i[n].fromArray(e, t + n * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.coefficients;
    for (let n = 0; n < 9; n++) i[n].toArray(e, t + n * 3);
    return e;
  }
  static getBasisAt(e, t) {
    const i = e.x, n = e.y, s = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * n, t[2] = 0.488603 * s, t[3] = 0.488603 * i, t[4] = 1.092548 * i * n, t[5] = 1.092548 * n * s, t[6] = 0.315392 * (3 * s * s - 1), t[7] = 1.092548 * i * s, t[8] = 0.546274 * (i * i - n * n);
  }
}
class sm extends In {
  constructor(e = new ku(), t = 1) {
    super(void 0, t), this.isLightProbe = true, this.sh = e;
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.sh = this.sh.toArray(), t;
  }
}
class ic extends ni {
  constructor(e) {
    super(e), this.textures = {};
  }
  load(e, t, i, n) {
    const s = this, o = new ji(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (l) {
        n ? n(l) : Le(l), s.manager.itemError(e);
      }
    }, i, n);
  }
  parse(e) {
    const t = this.textures;
    function i(s) {
      return t[s] === void 0 && de("MaterialLoader: Undefined texture", s), t[s];
    }
    const n = this.createMaterialFromType(e.type);
    if (e.uuid !== void 0 && (n.uuid = e.uuid), e.name !== void 0 && (n.name = e.name), e.color !== void 0 && n.color !== void 0 && n.color.setHex(e.color), e.roughness !== void 0 && (n.roughness = e.roughness), e.metalness !== void 0 && (n.metalness = e.metalness), e.sheen !== void 0 && (n.sheen = e.sheen), e.sheenColor !== void 0 && (n.sheenColor = new Me().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (n.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && n.emissive !== void 0 && n.emissive.setHex(e.emissive), e.specular !== void 0 && n.specular !== void 0 && n.specular.setHex(e.specular), e.specularIntensity !== void 0 && (n.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && n.specularColor !== void 0 && n.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (n.shininess = e.shininess), e.clearcoat !== void 0 && (n.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (n.dispersion = e.dispersion), e.iridescence !== void 0 && (n.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (n.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (n.transmission = e.transmission), e.thickness !== void 0 && (n.thickness = e.thickness), e.attenuationDistance !== void 0 && (n.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && n.attenuationColor !== void 0 && n.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (n.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (n.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (n.fog = e.fog), e.flatShading !== void 0 && (n.flatShading = e.flatShading), e.blending !== void 0 && (n.blending = e.blending), e.combine !== void 0 && (n.combine = e.combine), e.side !== void 0 && (n.side = e.side), e.shadowSide !== void 0 && (n.shadowSide = e.shadowSide), e.opacity !== void 0 && (n.opacity = e.opacity), e.transparent !== void 0 && (n.transparent = e.transparent), e.alphaTest !== void 0 && (n.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (n.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (n.depthFunc = e.depthFunc), e.depthTest !== void 0 && (n.depthTest = e.depthTest), e.depthWrite !== void 0 && (n.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (n.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (n.blendSrc = e.blendSrc), e.blendDst !== void 0 && (n.blendDst = e.blendDst), e.blendEquation !== void 0 && (n.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (n.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (n.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (n.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && n.blendColor !== void 0 && n.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (n.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (n.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (n.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (n.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (n.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (n.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (n.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (n.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (n.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (n.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (n.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (n.rotation = e.rotation), e.linewidth !== void 0 && (n.linewidth = e.linewidth), e.dashSize !== void 0 && (n.dashSize = e.dashSize), e.gapSize !== void 0 && (n.gapSize = e.gapSize), e.scale !== void 0 && (n.scale = e.scale), e.polygonOffset !== void 0 && (n.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (n.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (n.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (n.dithering = e.dithering), e.alphaToCoverage !== void 0 && (n.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (n.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (n.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (n.allowOverride = e.allowOverride), e.visible !== void 0 && (n.visible = e.visible), e.toneMapped !== void 0 && (n.toneMapped = e.toneMapped), e.userData !== void 0 && (n.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? n.vertexColors = e.vertexColors > 0 : n.vertexColors = e.vertexColors), e.uniforms !== void 0) for (const s in e.uniforms) {
      const o = e.uniforms[s];
      switch (n.uniforms[s] = {}, o.type) {
        case "t":
          n.uniforms[s].value = i(o.value);
          break;
        case "c":
          n.uniforms[s].value = new Me().setHex(o.value);
          break;
        case "v2":
          n.uniforms[s].value = new K().fromArray(o.value);
          break;
        case "v3":
          n.uniforms[s].value = new R().fromArray(o.value);
          break;
        case "v4":
          n.uniforms[s].value = new pt().fromArray(o.value);
          break;
        case "m3":
          n.uniforms[s].value = new Ye().fromArray(o.value);
          break;
        case "m4":
          n.uniforms[s].value = new Ge().fromArray(o.value);
          break;
        default:
          n.uniforms[s].value = o.value;
      }
    }
    if (e.defines !== void 0 && (n.defines = e.defines), e.vertexShader !== void 0 && (n.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (n.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (n.glslVersion = e.glslVersion), e.extensions !== void 0) for (const s in e.extensions) n.extensions[s] = e.extensions[s];
    if (e.lights !== void 0 && (n.lights = e.lights), e.clipping !== void 0 && (n.clipping = e.clipping), e.size !== void 0 && (n.size = e.size), e.sizeAttenuation !== void 0 && (n.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (n.map = i(e.map)), e.matcap !== void 0 && (n.matcap = i(e.matcap)), e.alphaMap !== void 0 && (n.alphaMap = i(e.alphaMap)), e.bumpMap !== void 0 && (n.bumpMap = i(e.bumpMap)), e.bumpScale !== void 0 && (n.bumpScale = e.bumpScale), e.normalMap !== void 0 && (n.normalMap = i(e.normalMap)), e.normalMapType !== void 0 && (n.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let s = e.normalScale;
      Array.isArray(s) === false && (s = [s, s]), n.normalScale = new K().fromArray(s);
    }
    return e.displacementMap !== void 0 && (n.displacementMap = i(e.displacementMap)), e.displacementScale !== void 0 && (n.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (n.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (n.roughnessMap = i(e.roughnessMap)), e.metalnessMap !== void 0 && (n.metalnessMap = i(e.metalnessMap)), e.emissiveMap !== void 0 && (n.emissiveMap = i(e.emissiveMap)), e.emissiveIntensity !== void 0 && (n.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (n.specularMap = i(e.specularMap)), e.specularIntensityMap !== void 0 && (n.specularIntensityMap = i(e.specularIntensityMap)), e.specularColorMap !== void 0 && (n.specularColorMap = i(e.specularColorMap)), e.envMap !== void 0 && (n.envMap = i(e.envMap)), e.envMapRotation !== void 0 && n.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (n.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (n.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (n.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (n.lightMap = i(e.lightMap)), e.lightMapIntensity !== void 0 && (n.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (n.aoMap = i(e.aoMap)), e.aoMapIntensity !== void 0 && (n.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (n.gradientMap = i(e.gradientMap)), e.clearcoatMap !== void 0 && (n.clearcoatMap = i(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (n.clearcoatRoughnessMap = i(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (n.clearcoatNormalMap = i(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (n.clearcoatNormalScale = new K().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (n.iridescenceMap = i(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (n.iridescenceThicknessMap = i(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (n.transmissionMap = i(e.transmissionMap)), e.thicknessMap !== void 0 && (n.thicknessMap = i(e.thicknessMap)), e.anisotropyMap !== void 0 && (n.anisotropyMap = i(e.anisotropyMap)), e.sheenColorMap !== void 0 && (n.sheenColorMap = i(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (n.sheenRoughnessMap = i(e.sheenRoughnessMap)), n;
  }
  setTextures(e) {
    return this.textures = e, this;
  }
  createMaterialFromType(e) {
    return ic.createMaterialFromType(e);
  }
  static createMaterialFromType(e) {
    const t = { ShadowMaterial: Lp, SpriteMaterial: xu, RawShaderMaterial: Du, ShaderMaterial: fi, PointsMaterial: Su, MeshPhysicalMaterial: Dp, MeshStandardMaterial: Uu, MeshPhongMaterial: Up, MeshToonMaterial: Np, MeshNormalMaterial: Op, MeshLambertMaterial: Fp, MeshDepthMaterial: Nu, MeshDistanceMaterial: Ou, MeshBasicMaterial: Cn, MeshMatcapMaterial: Bp, LineDashedMaterial: zp, LineBasicMaterial: qt, Material: Bt };
    return new t[e]();
  }
}
class uh {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class rm extends qe {
  constructor() {
    super(), this.isInstancedBufferGeometry = true, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = true, e;
  }
}
class om extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = this, o = new ji(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (l) {
        n ? n(l) : Le(l), s.manager.itemError(e);
      }
    }, i, n);
  }
  parse(e) {
    const t = {}, i = {};
    function n(f, m) {
      if (t[m] !== void 0) return t[m];
      const g = f.interleavedBuffers[m], p = s(f, g.buffer), x = is(g.type, p), v = new Ol(x, g.stride);
      return v.uuid = g.uuid, t[m] = v, v;
    }
    function s(f, m) {
      if (i[m] !== void 0) return i[m];
      const g = f.arrayBuffers[m], p = new Uint32Array(g).buffer;
      return i[m] = p, p;
    }
    const o = e.isInstancedBufferGeometry ? new rm() : new qe(), a = e.data.index;
    if (a !== void 0) {
      const f = is(a.type, a.array);
      o.setIndex(new ut(f, 1));
    }
    const l = e.data.attributes;
    for (const f in l) {
      const m = l[f];
      let _;
      if (m.isInterleavedBufferAttribute) {
        const g = n(e.data, m.data);
        _ = new us(g, m.itemSize, m.offset, m.normalized);
      } else {
        const g = is(m.type, m.array), p = m.isInstancedBufferAttribute ? Xs : ut;
        _ = new p(g, m.itemSize, m.normalized);
      }
      m.name !== void 0 && (_.name = m.name), m.usage !== void 0 && _.setUsage(m.usage), o.setAttribute(f, _);
    }
    const c = e.data.morphAttributes;
    if (c) for (const f in c) {
      const m = c[f], _ = [];
      for (let g = 0, p = m.length; g < p; g++) {
        const x = m[g];
        let v;
        if (x.isInterleavedBufferAttribute) {
          const M = n(e.data, x.data);
          v = new us(M, x.itemSize, x.offset, x.normalized);
        } else {
          const M = is(x.type, x.array);
          v = new ut(M, x.itemSize, x.normalized);
        }
        x.name !== void 0 && (v.name = x.name), _.push(v);
      }
      o.morphAttributes[f] = _;
    }
    e.data.morphTargetsRelative && (o.morphTargetsRelative = true);
    const u = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (u !== void 0) for (let f = 0, m = u.length; f !== m; ++f) {
      const _ = u[f];
      o.addGroup(_.start, _.count, _.materialIndex);
    }
    const d = e.data.boundingSphere;
    return d !== void 0 && (o.boundingSphere = new Lt().fromJSON(d)), e.name && (o.name = e.name), e.userData && (o.userData = e.userData), o;
  }
}
class Gy extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = this, o = this.path === "" ? uh.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || o;
    const a = new ji(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(l) {
      let c = null;
      try {
        c = JSON.parse(l);
      } catch (u) {
        n !== void 0 && n(u), u("ObjectLoader: Can't parse " + e + ".", u.message);
        return;
      }
      const h = c.metadata;
      if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") {
        n !== void 0 && n(new Error("THREE.ObjectLoader: Can't load " + e)), Le("ObjectLoader: Can't load " + e);
        return;
      }
      s.parse(c, t);
    }, i, n);
  }
  async loadAsync(e, t) {
    const i = this, n = this.path === "" ? uh.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || n;
    const s = new ji(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials);
    const o = await s.loadAsync(e, t), a = JSON.parse(o), l = a.metadata;
    if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === "geometry") throw new Error("THREE.ObjectLoader: Can't load " + e);
    return await i.parseAsync(a);
  }
  parse(e, t) {
    const i = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), s = this.parseGeometries(e.geometries, n), o = this.parseImages(e.images, function() {
      t !== void 0 && t(c);
    }), a = this.parseTextures(e.textures, o), l = this.parseMaterials(e.materials, a), c = this.parseObject(e.object, s, l, a, i), h = this.parseSkeletons(e.skeletons, c);
    if (this.bindSkeletons(c, h), this.bindLightTargets(c), t !== void 0) {
      let u = false;
      for (const d in o) if (o[d].data instanceof HTMLImageElement) {
        u = true;
        break;
      }
      u === false && t(c);
    }
    return c;
  }
  async parseAsync(e) {
    const t = this.parseAnimations(e.animations), i = this.parseShapes(e.shapes), n = this.parseGeometries(e.geometries, i), s = await this.parseImagesAsync(e.images), o = this.parseTextures(e.textures, s), a = this.parseMaterials(e.materials, o), l = this.parseObject(e.object, n, a, o, t), c = this.parseSkeletons(e.skeletons, l);
    return this.bindSkeletons(l, c), this.bindLightTargets(l), l;
  }
  parseShapes(e) {
    const t = {};
    if (e !== void 0) for (let i = 0, n = e.length; i < n; i++) {
      const s = new rs().fromJSON(e[i]);
      t[s.uuid] = s;
    }
    return t;
  }
  parseSkeletons(e, t) {
    const i = {}, n = {};
    if (t.traverse(function(s) {
      s.isBone && (n[s.uuid] = s);
    }), e !== void 0) for (let s = 0, o = e.length; s < o; s++) {
      const a = new Fl().fromJSON(e[s], n);
      i[a.uuid] = a;
    }
    return i;
  }
  parseGeometries(e, t) {
    const i = {};
    if (e !== void 0) {
      const n = new om();
      for (let s = 0, o = e.length; s < o; s++) {
        let a;
        const l = e[s];
        switch (l.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            a = n.parse(l);
            break;
          default:
            l.type in lh ? a = lh[l.type].fromJSON(l, t) : de(`ObjectLoader: Unsupported geometry type "${l.type}"`);
        }
        a.uuid = l.uuid, l.name !== void 0 && (a.name = l.name), l.userData !== void 0 && (a.userData = l.userData), i[l.uuid] = a;
      }
    }
    return i;
  }
  parseMaterials(e, t) {
    const i = {}, n = {};
    if (e !== void 0) {
      const s = new ic();
      s.setTextures(t);
      for (let o = 0, a = e.length; o < a; o++) {
        const l = e[o];
        i[l.uuid] === void 0 && (i[l.uuid] = s.parse(l)), n[l.uuid] = i[l.uuid];
      }
    }
    return n;
  }
  parseAnimations(e) {
    const t = {};
    if (e !== void 0) for (let i = 0; i < e.length; i++) {
      const n = e[i], s = po.parse(n);
      t[s.uuid] = s;
    }
    return t;
  }
  parseImages(e, t) {
    const i = this, n = {};
    let s;
    function o(l) {
      return i.manager.itemStart(l), s.load(l, function() {
        i.manager.itemEnd(l);
      }, void 0, function() {
        i.manager.itemError(l), i.manager.itemEnd(l);
      });
    }
    function a(l) {
      if (typeof l == "string") {
        const c = l, h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c) ? c : i.resourcePath + c;
        return o(h);
      } else return l.data ? { data: is(l.type, l.data), width: l.width, height: l.height } : null;
    }
    if (e !== void 0 && e.length > 0) {
      const l = new Vu(t);
      s = new mo(l), s.setCrossOrigin(this.crossOrigin);
      for (let c = 0, h = e.length; c < h; c++) {
        const u = e[c], d = u.url;
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m], p = a(g);
            p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new Si(p.data, p.width, p.height)));
          }
          n[u.uuid] = new Mn(f);
        } else {
          const f = a(u.url);
          n[u.uuid] = new Mn(f);
        }
      }
    }
    return n;
  }
  async parseImagesAsync(e) {
    const t = this, i = {};
    let n;
    async function s(o) {
      if (typeof o == "string") {
        const a = o, l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(a) ? a : t.resourcePath + a;
        return await n.loadAsync(l);
      } else return o.data ? { data: is(o.type, o.data), width: o.width, height: o.height } : null;
    }
    if (e !== void 0 && e.length > 0) {
      n = new mo(this.manager), n.setCrossOrigin(this.crossOrigin);
      for (let o = 0, a = e.length; o < a; o++) {
        const l = e[o], c = l.url;
        if (Array.isArray(c)) {
          const h = [];
          for (let u = 0, d = c.length; u < d; u++) {
            const f = c[u], m = await s(f);
            m !== null && (m instanceof HTMLImageElement ? h.push(m) : h.push(new Si(m.data, m.width, m.height)));
          }
          i[l.uuid] = new Mn(h);
        } else {
          const h = await s(l.url);
          i[l.uuid] = new Mn(h);
        }
      }
    }
    return i;
  }
  parseTextures(e, t) {
    function i(s, o) {
      return typeof s == "number" ? s : (de("ObjectLoader.parseTexture: Constant should be in numeric form.", s), o[s]);
    }
    const n = {};
    if (e !== void 0) for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      a.image === void 0 && de('ObjectLoader: No "image" specified for', a.uuid), t[a.image] === void 0 && de("ObjectLoader: Undefined image", a.image);
      const l = t[a.image], c = l.data;
      let h;
      Array.isArray(c) ? (h = new vo(), c.length === 6 && (h.needsUpdate = true)) : (c && c.data ? h = new Si() : h = new Mt(), c && (h.needsUpdate = true)), h.source = l, h.uuid = a.uuid, a.name !== void 0 && (h.name = a.name), a.mapping !== void 0 && (h.mapping = i(a.mapping, am)), a.channel !== void 0 && (h.channel = a.channel), a.offset !== void 0 && h.offset.fromArray(a.offset), a.repeat !== void 0 && h.repeat.fromArray(a.repeat), a.center !== void 0 && h.center.fromArray(a.center), a.rotation !== void 0 && (h.rotation = a.rotation), a.wrap !== void 0 && (h.wrapS = i(a.wrap[0], dh), h.wrapT = i(a.wrap[1], dh)), a.format !== void 0 && (h.format = a.format), a.internalFormat !== void 0 && (h.internalFormat = a.internalFormat), a.type !== void 0 && (h.type = a.type), a.colorSpace !== void 0 && (h.colorSpace = a.colorSpace), a.minFilter !== void 0 && (h.minFilter = i(a.minFilter, fh)), a.magFilter !== void 0 && (h.magFilter = i(a.magFilter, fh)), a.anisotropy !== void 0 && (h.anisotropy = a.anisotropy), a.flipY !== void 0 && (h.flipY = a.flipY), a.generateMipmaps !== void 0 && (h.generateMipmaps = a.generateMipmaps), a.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (h.unpackAlignment = a.unpackAlignment), a.compareFunction !== void 0 && (h.compareFunction = a.compareFunction), a.userData !== void 0 && (h.userData = a.userData), n[a.uuid] = h;
    }
    return n;
  }
  parseObject(e, t, i, n, s) {
    let o;
    function a(d) {
      return t[d] === void 0 && de("ObjectLoader: Undefined geometry", d), t[d];
    }
    function l(d) {
      if (d !== void 0) {
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m];
            i[g] === void 0 && de("ObjectLoader: Undefined material", g), f.push(i[g]);
          }
          return f;
        }
        return i[d] === void 0 && de("ObjectLoader: Undefined material", d), i[d];
      }
    }
    function c(d) {
      return n[d] === void 0 && de("ObjectLoader: Undefined texture", d), n[d];
    }
    let h, u;
    switch (e.type) {
      case "Scene":
        o = new Cf(), e.background !== void 0 && (Number.isInteger(e.background) ? o.background = new Me(e.background) : o.background = c(e.background)), e.environment !== void 0 && (o.environment = c(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? o.fog = new Nl(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (o.fog = new Ul(e.fog.color, e.fog.density)), e.fog.name !== "" && (o.fog.name = e.fog.name)), e.backgroundBlurriness !== void 0 && (o.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (o.backgroundIntensity = e.backgroundIntensity), e.backgroundRotation !== void 0 && o.backgroundRotation.fromArray(e.backgroundRotation), e.environmentIntensity !== void 0 && (o.environmentIntensity = e.environmentIntensity), e.environmentRotation !== void 0 && o.environmentRotation.fromArray(e.environmentRotation);
        break;
      case "PerspectiveCamera":
        o = new Pt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (o.focus = e.focus), e.zoom !== void 0 && (o.zoom = e.zoom), e.filmGauge !== void 0 && (o.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (o.filmOffset = e.filmOffset), e.view !== void 0 && (o.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        o = new Ao(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (o.zoom = e.zoom), e.view !== void 0 && (o.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        o = new im(e.color, e.intensity);
        break;
      case "DirectionalLight":
        o = new tm(e.color, e.intensity), o.target = e.target || "";
        break;
      case "PointLight":
        o = new jp(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        o = new nm(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        o = new Kp(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay), o.target = e.target || "";
        break;
      case "HemisphereLight":
        o = new Jp(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        const d = new ku().fromArray(e.sh);
        o = new sm(d, e.intensity);
        break;
      case "SkinnedMesh":
        h = a(e.geometry), u = l(e.material), o = new Lf(h, u), e.bindMode !== void 0 && (o.bindMode = e.bindMode), e.bindMatrix !== void 0 && o.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (o.skeleton = e.skeleton);
        break;
      case "Mesh":
        h = a(e.geometry), u = l(e.material), o = new Tt(h, u);
        break;
      case "InstancedMesh":
        h = a(e.geometry), u = l(e.material);
        const f = e.count, m = e.instanceMatrix, _ = e.instanceColor;
        o = new Nf(h, u, f), o.instanceMatrix = new Xs(new Float32Array(m.array), 16), _ !== void 0 && (o.instanceColor = new Xs(new Float32Array(_.array), _.itemSize));
        break;
      case "BatchedMesh":
        h = a(e.geometry), u = l(e.material), o = new qf(e.maxInstanceCount, e.maxVertexCount, e.maxIndexCount, u), o.geometry = h, o.perObjectFrustumCulled = e.perObjectFrustumCulled, o.sortObjects = e.sortObjects, o._drawRanges = e.drawRanges, o._reservedRanges = e.reservedRanges, o._geometryInfo = e.geometryInfo.map((g) => {
          let p = null, x = null;
          return g.boundingBox !== void 0 && (p = new Ft().fromJSON(g.boundingBox)), g.boundingSphere !== void 0 && (x = new Lt().fromJSON(g.boundingSphere)), { ...g, boundingBox: p, boundingSphere: x };
        }), o._instanceInfo = e.instanceInfo, o._availableInstanceIds = e._availableInstanceIds, o._availableGeometryIds = e._availableGeometryIds, o._nextIndexStart = e.nextIndexStart, o._nextVertexStart = e.nextVertexStart, o._geometryCount = e.geometryCount, o._maxInstanceCount = e.maxInstanceCount, o._maxVertexCount = e.maxVertexCount, o._maxIndexCount = e.maxIndexCount, o._geometryInitialized = e.geometryInitialized, o._matricesTexture = c(e.matricesTexture.uuid), o._indirectTexture = c(e.indirectTexture.uuid), e.colorsTexture !== void 0 && (o._colorsTexture = c(e.colorsTexture.uuid)), e.boundingSphere !== void 0 && (o.boundingSphere = new Lt().fromJSON(e.boundingSphere)), e.boundingBox !== void 0 && (o.boundingBox = new Ft().fromJSON(e.boundingBox));
        break;
      case "LOD":
        o = new If();
        break;
      case "Line":
        o = new An(a(e.geometry), l(e.material));
        break;
      case "LineLoop":
        o = new Yf(a(e.geometry), l(e.material));
        break;
      case "LineSegments":
        o = new ki(a(e.geometry), l(e.material));
        break;
      case "PointCloud":
      case "Points":
        o = new Zf(a(e.geometry), l(e.material));
        break;
      case "Sprite":
        o = new Rf(l(e.material));
        break;
      case "Group":
        o = new Us();
        break;
      case "Bone":
        o = new Mu();
        break;
      default:
        o = new it();
    }
    if (o.uuid = e.uuid, e.name !== void 0 && (o.name = e.name), e.matrix !== void 0 ? (o.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (o.matrixAutoUpdate = e.matrixAutoUpdate), o.matrixAutoUpdate && o.matrix.decompose(o.position, o.quaternion, o.scale)) : (e.position !== void 0 && o.position.fromArray(e.position), e.rotation !== void 0 && o.rotation.fromArray(e.rotation), e.quaternion !== void 0 && o.quaternion.fromArray(e.quaternion), e.scale !== void 0 && o.scale.fromArray(e.scale)), e.up !== void 0 && o.up.fromArray(e.up), e.castShadow !== void 0 && (o.castShadow = e.castShadow), e.receiveShadow !== void 0 && (o.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.intensity !== void 0 && (o.shadow.intensity = e.shadow.intensity), e.shadow.bias !== void 0 && (o.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (o.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (o.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && o.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (o.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (o.visible = e.visible), e.frustumCulled !== void 0 && (o.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (o.renderOrder = e.renderOrder), e.userData !== void 0 && (o.userData = e.userData), e.layers !== void 0 && (o.layers.mask = e.layers), e.children !== void 0) {
      const d = e.children;
      for (let f = 0; f < d.length; f++) o.add(this.parseObject(d[f], t, i, n, s));
    }
    if (e.animations !== void 0) {
      const d = e.animations;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        o.animations.push(s[m]);
      }
    }
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (o.autoUpdate = e.autoUpdate);
      const d = e.levels;
      for (let f = 0; f < d.length; f++) {
        const m = d[f], _ = o.getObjectByProperty("uuid", m.object);
        _ !== void 0 && o.addLevel(_, m.distance, m.hysteresis);
      }
    }
    return o;
  }
  bindSkeletons(e, t) {
    Object.keys(t).length !== 0 && e.traverse(function(i) {
      if (i.isSkinnedMesh === true && i.skeleton !== void 0) {
        const n = t[i.skeleton];
        n === void 0 ? de("ObjectLoader: No skeleton found with UUID:", i.skeleton) : i.bind(n, i.bindMatrix);
      }
    });
  }
  bindLightTargets(e) {
    e.traverse(function(t) {
      if (t.isDirectionalLight || t.isSpotLight) {
        const i = t.target, n = e.getObjectByProperty("uuid", i);
        n !== void 0 ? t.target = n : t.target = new it();
      }
    });
  }
}
const am = { UVMapping: xl, CubeReflectionMapping: Fi, CubeRefractionMapping: Tn, EquirectangularReflectionMapping: jr, EquirectangularRefractionMapping: eo, CubeUVReflectionMapping: $s }, dh = { RepeatWrapping: to, ClampToEdgeWrapping: ei, MirroredRepeatWrapping: io }, fh = { NearestFilter: bt, NearestMipmapNearestFilter: nu, NearestMipmapLinearFilter: Ls, LinearFilter: mt, LinearMipmapNearestFilter: Yr, LinearMipmapLinearFilter: Di }, ua = /* @__PURE__ */ new WeakMap();
class Hy extends ni {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && de("ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && de("ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController();
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, i, n) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = Ui.get(`image-bitmap:${e}`);
    if (o !== void 0) {
      if (s.manager.itemStart(e), o.then) {
        o.then((c) => {
          if (ua.has(o) === true) n && n(ua.get(o)), s.manager.itemError(e), s.manager.itemEnd(e);
          else return t && t(c), s.manager.itemEnd(e), c;
        });
        return;
      }
      return setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, a.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
    const l = fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return Ui.add(`image-bitmap:${e}`, c), t && t(c), s.manager.itemEnd(e), c;
    }).catch(function(c) {
      n && n(c), ua.set(l, c), Ui.remove(`image-bitmap:${e}`), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    Ui.add(`image-bitmap:${e}`, l), s.manager.itemStart(e);
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}
let Fr;
class Gu {
  static getContext() {
    return Fr === void 0 && (Fr = new (window.AudioContext || window.webkitAudioContext)()), Fr;
  }
  static setContext(e) {
    Fr = e;
  }
}
class Wy extends ni {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = this, o = new ji(this.manager);
    o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(l) {
      try {
        const c = l.slice(0);
        Gu.getContext().decodeAudioData(c, function(u) {
          t(u);
        }).catch(a);
      } catch (c) {
        a(c);
      }
    }, i, n);
    function a(l) {
      n ? n(l) : Le(l), s.manager.itemError(e);
    }
  }
}
const ph = new Ge(), mh = new Ge(), cn = new Ge();
class Xy {
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new Pt(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = false, this.cameraR = new Pt(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = false, this._cache = { focus: null, fov: null, aspect: null, near: null, far: null, zoom: null, eyeSep: null };
  }
  update(e) {
    const t = this._cache;
    if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, cn.copy(e.projectionMatrix);
      const n = t.eyeSep / 2, s = n * t.near / t.focus, o = t.near * Math.tan(bn * t.fov * 0.5) / t.zoom;
      let a, l;
      mh.elements[12] = -n, ph.elements[12] = n, a = -o * t.aspect + s, l = o * t.aspect + s, cn.elements[0] = 2 * t.near / (l - a), cn.elements[8] = (l + a) / (l - a), this.cameraL.projectionMatrix.copy(cn), a = -o * t.aspect - s, l = o * t.aspect - s, cn.elements[0] = 2 * t.near / (l - a), cn.elements[8] = (l + a) / (l - a), this.cameraR.projectionMatrix.copy(cn);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(mh), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ph);
  }
}
class lm extends Pt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e;
  }
}
class cm {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = performance.now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
const hn = new R(), da = new ii(), hm = new R(), un = new R(), dn = new R();
class qy extends it {
  constructor() {
    super(), this.type = "AudioListener", this.context = Gu.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new cm();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(hn, da, hm), un.set(0, 0, -1).applyQuaternion(da), dn.set(0, 1, 0).applyQuaternion(da), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(hn.x, i), t.positionY.linearRampToValueAtTime(hn.y, i), t.positionZ.linearRampToValueAtTime(hn.z, i), t.forwardX.linearRampToValueAtTime(un.x, i), t.forwardY.linearRampToValueAtTime(un.y, i), t.forwardZ.linearRampToValueAtTime(un.z, i), t.upX.linearRampToValueAtTime(dn.x, i), t.upY.linearRampToValueAtTime(dn.y, i), t.upZ.linearRampToValueAtTime(dn.z, i);
    } else t.setPosition(hn.x, hn.y, hn.z), t.setOrientation(un.x, un.y, un.z, dn.x, dn.y, dn.z);
  }
}
class um extends it {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = false, this.buffer = null, this.detune = 0, this.loop = false, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = false, this.hasPlaybackControl = true, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = false, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === true) {
      de("Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === false) {
      de("Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = true, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === false) {
      de("Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === true && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === true && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = false), this;
  }
  stop(e = 0) {
    if (this.hasPlaybackControl === false) {
      de("Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + e), this.source.onended = null), this.isPlaying = false, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return this._connected = true, this;
  }
  disconnect() {
    if (this._connected !== false) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return this._connected = false, this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === true ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    return this.detune = e, this.isPlaying === true && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === false) {
      de("Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === true && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = false, this._progress = 0;
  }
  getLoop() {
    return this.hasPlaybackControl === false ? (de("Audio: this Audio has no playback control."), false) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === false) {
      de("Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === true && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  copy(e, t) {
    return super.copy(e, t), e.sourceType !== "buffer" ? (de("Audio: Audio source type cannot be copied."), this) : (this.autoplay = e.autoplay, this.buffer = e.buffer, this.detune = e.detune, this.loop = e.loop, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd, this.offset = e.offset, this.duration = e.duration, this.playbackRate = e.playbackRate, this.hasPlaybackControl = e.hasPlaybackControl, this.sourceType = e.sourceType, this.filters = e.filters.slice(), this);
  }
  clone(e) {
    return new this.constructor(this.listener).copy(this, e);
  }
}
const fn = new R(), gh = new ii(), dm = new R(), pn = new R();
class Yy extends um {
  constructor(e) {
    super(e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  connect() {
    return super.connect(), this.panner.connect(this.gain), this;
  }
  disconnect() {
    return super.disconnect(), this.panner.disconnect(this.gain), this;
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return this.panner.refDistance = e, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return this.panner.rolloffFactor = e, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return this.panner.distanceModel = e, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return this.panner.maxDistance = e, this;
  }
  setDirectionalCone(e, t, i) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = i, this;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.hasPlaybackControl === true && this.isPlaying === false) return;
    this.matrixWorld.decompose(fn, gh, dm), pn.set(0, 0, 1).applyQuaternion(gh);
    const t = this.panner;
    if (t.positionX) {
      const i = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(fn.x, i), t.positionY.linearRampToValueAtTime(fn.y, i), t.positionZ.linearRampToValueAtTime(fn.z, i), t.orientationX.linearRampToValueAtTime(pn.x, i), t.orientationY.linearRampToValueAtTime(pn.y, i), t.orientationZ.linearRampToValueAtTime(pn.z, i);
    } else t.setPosition(fn.x, fn.y, fn.z), t.setOrientation(pn.x, pn.y, pn.z);
  }
}
class Zy {
  constructor(e, t = 2048) {
    this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let e = 0;
    const t = this.getFrequencyData();
    for (let i = 0; i < t.length; i++) e += t[i];
    return e / t.length;
  }
}
class fm {
  constructor(e, t, i) {
    this.binding = e, this.valueSize = i;
    let n, s, o;
    switch (t) {
      case "quaternion":
        n = this._slerp, s = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(i * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        n = this._select, s = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(i * 5);
        break;
      default:
        n = this._lerp, s = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(i * 5);
    }
    this._mixBufferRegion = n, this._mixBufferRegionAdditive = s, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(e, t) {
    const i = this.buffer, n = this.valueSize, s = e * n + n;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== n; ++a) i[s + a] = i[a];
      o = t;
    } else {
      o += t;
      const a = t / o;
      this._mixBufferRegion(i, s, 0, a, n);
    }
    this.cumulativeWeight = o;
  }
  accumulateAdditive(e) {
    const t = this.buffer, i = this.valueSize, n = i * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, n, 0, e, i), this.cumulativeWeightAdditive += e;
  }
  apply(e) {
    const t = this.valueSize, i = this.buffer, n = e * t + t, s = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(i, n, l, 1 - s, t);
    }
    o > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l) if (i[l] !== i[l + t]) {
      a.setValue(i, n);
      break;
    }
  }
  saveOriginalState() {
    const e = this.binding, t = this.buffer, i = this.valueSize, n = i * this._origIndex;
    e.getValue(t, n);
    for (let s = i, o = n; s !== o; ++s) t[s] = t[n + s % i];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let i = e; i < t; i++) this.buffer[i] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let i = 0; i < this.valueSize; i++) this.buffer[t + i] = this.buffer[e + i];
  }
  _select(e, t, i, n, s) {
    if (n >= 0.5) for (let o = 0; o !== s; ++o) e[t + o] = e[i + o];
  }
  _slerp(e, t, i, n) {
    ii.slerpFlat(e, t, e, t, e, i, n);
  }
  _slerpAdditive(e, t, i, n, s) {
    const o = this._workIndex * s;
    ii.multiplyQuaternionsFlat(e, o, e, t, e, i), ii.slerpFlat(e, t, e, t, e, o, n);
  }
  _lerp(e, t, i, n, s) {
    const o = 1 - n;
    for (let a = 0; a !== s; ++a) {
      const l = t + a;
      e[l] = e[l] * o + e[i + a] * n;
    }
  }
  _lerpAdditive(e, t, i, n, s) {
    for (let o = 0; o !== s; ++o) {
      const a = t + o;
      e[a] = e[a] + e[i + o] * n;
    }
  }
}
const nc = "\\[\\]\\.:\\/", pm = new RegExp("[" + nc + "]", "g"), sc = "[^" + nc + "]", mm = "[^" + nc.replace("\\.", "") + "]", gm = /((?:WC+[\/:])*)/.source.replace("WC", sc), _m = /(WCOD+)?/.source.replace("WCOD", mm), vm = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", sc), xm = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", sc), ym = new RegExp("^" + gm + _m + vm + xm + "$"), Mm = ["material", "materials", "bones", "map"];
class Sm {
  constructor(e, t, i) {
    const n = i || tt.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, n);
  }
  getValue(e, t) {
    this.bind();
    const i = this._targetGroup.nCachedObjects_, n = this._bindings[i];
    n !== void 0 && n.getValue(e, t);
  }
  setValue(e, t) {
    const i = this._bindings;
    for (let n = this._targetGroup.nCachedObjects_, s = i.length; n !== s; ++n) i[n].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind();
  }
}
class tt {
  constructor(e, t, i) {
    this.path = t, this.parsedPath = i || tt.parseTrackName(t), this.node = tt.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, i) {
    return e && e.isAnimationObjectGroup ? new tt.Composite(e, t, i) : new tt(e, t, i);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(pm, "");
  }
  static parseTrackName(e) {
    const t = ym.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const i = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, n = i.nodeName && i.nodeName.lastIndexOf(".");
    if (n !== void 0 && n !== -1) {
      const s = i.nodeName.substring(n + 1);
      Mm.indexOf(s) !== -1 && (i.nodeName = i.nodeName.substring(0, n), i.objectName = s);
    }
    if (i.propertyName === null || i.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return i;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const i = e.skeleton.getBoneByName(t);
      if (i !== void 0) return i;
    }
    if (e.children) {
      const i = function(s) {
        for (let o = 0; o < s.length; o++) {
          const a = s[o];
          if (a.name === t || a.uuid === t) return a;
          const l = i(a.children);
          if (l) return l;
        }
        return null;
      }, n = i(e.children);
      if (n) return n;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const i = this.resolvedProperty;
    for (let n = 0, s = i.length; n !== s; ++n) e[t++] = i[n];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const i = this.resolvedProperty;
    for (let n = 0, s = i.length; n !== s; ++n) i[n] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const i = this.resolvedProperty;
    for (let n = 0, s = i.length; n !== s; ++n) i[n] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const i = this.resolvedProperty;
    for (let n = 0, s = i.length; n !== s; ++n) i[n] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, i = t.objectName, n = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = tt.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      de("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (i) {
      let c = t.objectIndex;
      switch (i) {
        case "materials":
          if (!e.material) {
            Le("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++) if (e[h].name === c) {
            c = h;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            Le("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[i] === void 0) {
            Le("PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[i];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const o = e[n];
    if (o === void 0) {
      const c = t.nodeName;
      Le("PropertyBinding: Trying to update property for track: " + c + "." + n + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.isMaterial === true ? a = this.Versioning.NeedsUpdate : e.isObject3D === true && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (n === "morphTargetInfluences") {
        if (!e.geometry) {
          Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = s;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = n;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
tt.Composite = Sm;
tt.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
tt.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
tt.prototype.GetterByBindingType = [tt.prototype._getValue_direct, tt.prototype._getValue_array, tt.prototype._getValue_arrayElement, tt.prototype._getValue_toArray];
tt.prototype.SetterByBindingTypeAndVersioning = [[tt.prototype._setValue_direct, tt.prototype._setValue_direct_setNeedsUpdate, tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [tt.prototype._setValue_array, tt.prototype._setValue_array_setNeedsUpdate, tt.prototype._setValue_array_setMatrixWorldNeedsUpdate], [tt.prototype._setValue_arrayElement, tt.prototype._setValue_arrayElement_setNeedsUpdate, tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [tt.prototype._setValue_fromArray, tt.prototype._setValue_fromArray_setNeedsUpdate, tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class Jy {
  constructor() {
    this.isAnimationObjectGroup = true, this.uuid = ti(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    const e = {};
    this._indicesByUUID = e;
    for (let i = 0, n = arguments.length; i !== n; ++i) e[arguments[i].uuid] = i;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    const t = this;
    this.stats = { objects: { get total() {
      return t._objects.length;
    }, get inUse() {
      return this.total - t.nCachedObjects_;
    } }, get bindingsPerObject() {
      return t._bindings.length;
    } };
  }
  add() {
    const e = this._objects, t = this._indicesByUUID, i = this._paths, n = this._parsedPaths, s = this._bindings, o = s.length;
    let a, l = e.length, c = this.nCachedObjects_;
    for (let h = 0, u = arguments.length; h !== u; ++h) {
      const d = arguments[h], f = d.uuid;
      let m = t[f];
      if (m === void 0) {
        m = l++, t[f] = m, e.push(d);
        for (let _ = 0, g = o; _ !== g; ++_) s[_].push(new tt(d, i[_], n[_]));
      } else if (m < c) {
        a = e[m];
        const _ = --c, g = e[_];
        t[g.uuid] = m, e[m] = g, t[f] = _, e[_] = d;
        for (let p = 0, x = o; p !== x; ++p) {
          const v = s[p], M = v[_];
          let A = v[m];
          v[m] = M, A === void 0 && (A = new tt(d, i[p], n[p])), v[_] = A;
        }
      } else e[m] !== a && Le("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = c;
  }
  remove() {
    const e = this._objects, t = this._indicesByUUID, i = this._bindings, n = i.length;
    let s = this.nCachedObjects_;
    for (let o = 0, a = arguments.length; o !== a; ++o) {
      const l = arguments[o], c = l.uuid, h = t[c];
      if (h !== void 0 && h >= s) {
        const u = s++, d = e[u];
        t[d.uuid] = h, e[h] = d, t[c] = u, e[u] = l;
        for (let f = 0, m = n; f !== m; ++f) {
          const _ = i[f], g = _[u], p = _[h];
          _[h] = g, _[u] = p;
        }
      }
    }
    this.nCachedObjects_ = s;
  }
  uncache() {
    const e = this._objects, t = this._indicesByUUID, i = this._bindings, n = i.length;
    let s = this.nCachedObjects_, o = e.length;
    for (let a = 0, l = arguments.length; a !== l; ++a) {
      const c = arguments[a], h = c.uuid, u = t[h];
      if (u !== void 0) if (delete t[h], u < s) {
        const d = --s, f = e[d], m = --o, _ = e[m];
        t[f.uuid] = u, e[u] = f, t[_.uuid] = d, e[d] = _, e.pop();
        for (let g = 0, p = n; g !== p; ++g) {
          const x = i[g], v = x[d], M = x[m];
          x[u] = v, x[d] = M, x.pop();
        }
      } else {
        const d = --o, f = e[d];
        d > 0 && (t[f.uuid] = u), e[u] = f, e.pop();
        for (let m = 0, _ = n; m !== _; ++m) {
          const g = i[m];
          g[u] = g[d], g.pop();
        }
      }
    }
    this.nCachedObjects_ = s;
  }
  subscribe_(e, t) {
    const i = this._bindingsIndicesByPath;
    let n = i[e];
    const s = this._bindings;
    if (n !== void 0) return s[n];
    const o = this._paths, a = this._parsedPaths, l = this._objects, c = l.length, h = this.nCachedObjects_, u = new Array(c);
    n = s.length, i[e] = n, o.push(e), a.push(t), s.push(u);
    for (let d = h, f = l.length; d !== f; ++d) {
      const m = l[d];
      u[d] = new tt(m, e, t);
    }
    return u;
  }
  unsubscribe_(e) {
    const t = this._bindingsIndicesByPath, i = t[e];
    if (i !== void 0) {
      const n = this._paths, s = this._parsedPaths, o = this._bindings, a = o.length - 1, l = o[a], c = e[a];
      t[c] = i, o[i] = l, o.pop(), s[i] = s[a], s.pop(), n[i] = n[a], n.pop();
    }
  }
}
class bm {
  constructor(e, t, i = null, n = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = i, this.blendMode = n;
    const s = t.tracks, o = s.length, a = new Array(o), l = { endingStart: es, endingEnd: es };
    for (let c = 0; c !== o; ++c) {
      const h = s[c].createInterpolant(null);
      a[c] = h, h.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Id, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, i = false) {
    if (e.fadeOut(t), this.fadeIn(t), i === true) {
      const n = this._clip.duration, s = e._clip.duration, o = s / n, a = n / s;
      e.warp(1, o, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, i = false) {
    return e.crossFadeFrom(this, t, i);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, i) {
    const n = this._mixer, s = n.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const l = a.parameterPositions, c = a.sampleValues;
    return l[0] = s, l[1] = s + i, c[0] = e / o, c[1] = t / o, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, i, n) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const l = (e - s) * i;
      l < 0 || i === 0 ? t = 0 : (this._startTime = null, t = i * l);
    }
    t *= this._updateTimeScale(e);
    const o = this._updateTime(t), a = this._updateWeight(e);
    if (a > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case hu:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulateAdditive(a);
          break;
        case wl:
        default:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulate(n, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const i = this._weightInterpolant;
      if (i !== null) {
        const n = i.evaluate(e)[0];
        t *= n, e > i.parameterPositions[1] && (this.stopFading(), n === 0 && (this.enabled = false));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const i = this._timeScaleInterpolant;
      if (i !== null) {
        const n = i.evaluate(e)[0];
        t *= n, e > i.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = true : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, i = this.loop;
    let n = this.time + e, s = this._loopCount;
    const o = i === Pd;
    if (e === 0) return s === -1 ? n : o && (s & 1) === 1 ? t - n : n;
    if (i === Rd) {
      s === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
      e: {
        if (n >= t) n = t;
        else if (n < 0) n = 0;
        else {
          this.time = n;
          break e;
        }
        this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = n, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(true, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, true, o)), n >= t || n < 0) {
        const a = Math.floor(n / t);
        n -= t * a, s += Math.abs(a);
        const l = this.repetitions - s;
        if (l <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, n = e > 0 ? t : 0, this.time = n, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, o);
          } else this._setEndings(false, false, o);
          this._loopCount = s, this.time = n, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: a });
        }
      } else this.time = n;
      if (o && (s & 1) === 1) return t - n;
    }
    return n;
  }
  _setEndings(e, t, i) {
    const n = this._interpolantSettings;
    i ? (n.endingStart = ts, n.endingEnd = ts) : (e ? n.endingStart = this.zeroSlopeAtStart ? ts : es : n.endingStart = so, t ? n.endingEnd = this.zeroSlopeAtEnd ? ts : es : n.endingEnd = so);
  }
  _scheduleFading(e, t, i) {
    const n = this._mixer, s = n.time;
    let o = this._weightInterpolant;
    o === null && (o = n._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = s, l[0] = t, a[1] = s + e, l[1] = i, this;
  }
}
const Tm = new Float32Array(1);
class $y extends Vi {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const i = e._localRoot || this._root, n = e._clip.tracks, s = n.length, o = e._propertyBindings, a = e._interpolants, l = i.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let u = 0; u !== s; ++u) {
      const d = n[u], f = d.name;
      let m = h[f];
      if (m !== void 0) ++m.referenceCount, o[u] = m;
      else {
        if (m = o[u], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, l, f));
          continue;
        }
        const _ = t && t._propertyBindings[u].binding.parsedPath;
        m = new fm(tt.create(i, f, _), d.ValueTypeName, d.getValueSize()), ++m.referenceCount, this._addInactiveBinding(m, l, f), o[u] = m;
      }
      a[u].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const i = (e._localRoot || this._root).uuid, n = e._clip.uuid, s = this._actionsByClip[n];
        this._bindAction(e, s && s.knownActions[0]), this._addInactiveAction(e, n, i);
      }
      const t = e._propertyBindings;
      for (let i = 0, n = t.length; i !== n; ++i) {
        const s = t[i];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let i = 0, n = t.length; i !== n; ++i) {
        const s = t[i];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = { actions: { get total() {
      return e._actions.length;
    }, get inUse() {
      return e._nActiveActions;
    } }, bindings: { get total() {
      return e._bindings.length;
    }, get inUse() {
      return e._nActiveBindings;
    } }, controlInterpolants: { get total() {
      return e._controlInterpolants.length;
    }, get inUse() {
      return e._nActiveControlInterpolants;
    } } };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, i) {
    const n = this._actions, s = this._actionsByClip;
    let o = s[t];
    if (o === void 0) o = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, s[t] = o;
    else {
      const a = o.knownActions;
      e._byClipCacheIndex = a.length, a.push(e);
    }
    e._cacheIndex = n.length, n.push(e), o.actionByRoot[i] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, i = t[t.length - 1], n = e._cacheIndex;
    i._cacheIndex = n, t[n] = i, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, o = this._actionsByClip, a = o[s], l = a.knownActions, c = l[l.length - 1], h = e._byClipCacheIndex;
    c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null;
    const u = a.actionByRoot, d = (e._localRoot || this._root).uuid;
    delete u[d], l.length === 0 && delete o[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let i = 0, n = t.length; i !== n; ++i) {
      const s = t[i];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, i = e._cacheIndex, n = this._nActiveActions++, s = t[n];
    e._cacheIndex = n, t[n] = e, s._cacheIndex = i, t[i] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, i = e._cacheIndex, n = --this._nActiveActions, s = t[n];
    e._cacheIndex = n, t[n] = e, s._cacheIndex = i, t[i] = s;
  }
  _addInactiveBinding(e, t, i) {
    const n = this._bindingsByRootAndName, s = this._bindings;
    let o = n[t];
    o === void 0 && (o = {}, n[t] = o), o[i] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, i = e.binding, n = i.rootNode.uuid, s = i.path, o = this._bindingsByRootAndName, a = o[n], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete a[s], Object.keys(a).length === 0 && delete o[n];
  }
  _lendBinding(e) {
    const t = this._bindings, i = e._cacheIndex, n = this._nActiveBindings++, s = t[n];
    e._cacheIndex = n, t[n] = e, s._cacheIndex = i, t[i] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, i = e._cacheIndex, n = --this._nActiveBindings, s = t[n];
    e._cacheIndex = n, t[n] = e, s._cacheIndex = i, t[i] = s;
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let i = e[t];
    return i === void 0 && (i = new Bu(new Float32Array(2), new Float32Array(2), 1, Tm), i.__cacheIndex = t, e[t] = i), i;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, i = e.__cacheIndex, n = --this._nActiveControlInterpolants, s = t[n];
    e.__cacheIndex = n, t[n] = e, s.__cacheIndex = i, t[i] = s;
  }
  clipAction(e, t, i) {
    const n = t || this._root, s = n.uuid;
    let o = typeof e == "string" ? po.findByName(n, e) : e;
    const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
    let c = null;
    if (i === void 0 && (o !== null ? i = o.blendMode : i = wl), l !== void 0) {
      const u = l.actionByRoot[s];
      if (u !== void 0 && u.blendMode === i) return u;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const h = new bm(this, o, t, i);
    return this._bindAction(h, c), this._addInactiveAction(h, a, s), h;
  }
  existingAction(e, t) {
    const i = t || this._root, n = i.uuid, s = typeof e == "string" ? po.findByName(i, e) : e, o = s ? s.uuid : e, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[n] || null;
  }
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let i = t - 1; i >= 0; --i) e[i].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions, i = this._nActiveActions, n = this.time += e, s = Math.sign(e), o = this._accuIndex ^= 1;
    for (let c = 0; c !== i; ++c) t[c]._update(n, e, s, o);
    const a = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) a[c].apply(o);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions, i = e.uuid, n = this._actionsByClip, s = n[i];
    if (s !== void 0) {
      const o = s.knownActions;
      for (let a = 0, l = o.length; a !== l; ++a) {
        const c = o[a];
        this._deactivateAction(c);
        const h = c._cacheIndex, u = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete n[i];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid, i = this._actionsByClip;
    for (const o in i) {
      const a = i[o].actionByRoot, l = a[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const n = this._bindingsByRootAndName, s = n[t];
    if (s !== void 0) for (const o in s) {
      const a = s[o];
      a.restoreOriginalState(), this._removeInactiveBinding(a);
    }
  }
  uncacheAction(e, t) {
    const i = this.existingAction(e, t);
    i !== null && (this._deactivateAction(i), this._removeInactiveAction(i));
  }
}
class Ky extends fu {
  constructor(e = 1, t = 1, i = 1, n = {}) {
    super(e, t, n), this.isRenderTarget3D = true, this.depth = i, this.texture = new Pl(null, e, t, i), this._setTextureOptions(n), this.texture.isRenderTargetTexture = true;
  }
}
class Hu {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Hu(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
let Am = 0;
class Qy extends Vi {
  constructor() {
    super(), this.isUniformsGroup = true, Object.defineProperty(this, "id", { value: Am++ }), this.name = "", this.usage = oo, this.uniforms = [];
  }
  add(e) {
    return this.uniforms.push(e), this;
  }
  remove(e) {
    const t = this.uniforms.indexOf(e);
    return t !== -1 && this.uniforms.splice(t, 1), this;
  }
  setName(e) {
    return this.name = e, this;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e) {
    this.name = e.name, this.usage = e.usage;
    const t = e.uniforms;
    this.uniforms.length = 0;
    for (let i = 0, n = t.length; i < n; i++) {
      const s = Array.isArray(t[i]) ? t[i] : [t[i]];
      for (let o = 0; o < s.length; o++) this.uniforms.push(s[o].clone());
    }
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class jy extends Ol {
  constructor(e, t, i = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = true, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = true, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
class eM {
  constructor(e, t, i, n, s, o = false) {
    this.isGLBufferAttribute = true, this.name = "", this.buffer = e, this.type = t, this.itemSize = i, this.elementSize = n, this.count = s, this.normalized = o, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setBuffer(e) {
    return this.buffer = e, this;
  }
  setType(e, t) {
    return this.type = e, this.elementSize = t, this;
  }
  setItemSize(e) {
    return this.itemSize = e, this;
  }
  setCount(e) {
    return this.count = e, this;
  }
}
const _h = new Ge();
class tM {
  constructor(e, t, i = 0, n = 1 / 0) {
    this.ray = new Ks(e, t), this.near = i, this.far = n, this.camera = null, this.layers = new Ll(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : Le("Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return _h.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(_h), this;
  }
  intersectObject(e, t = true, i = []) {
    return ml(e, this, i, t), i.sort(vh), i;
  }
  intersectObjects(e, t = true, i = []) {
    for (let n = 0, s = e.length; n < s; n++) ml(e[n], this, i, t);
    return i.sort(vh), i;
  }
}
function vh(r, e) {
  return r.distance - e.distance;
}
function ml(r, e, t, i) {
  let n = true;
  if (r.layers.test(e.layers) && r.raycast(e, t) === false && (n = false), n === true && i === true) {
    const s = r.children;
    for (let o = 0, a = s.length; o < a; o++) ml(s[o], e, t, true);
  }
}
class iM {
  constructor() {
    this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
  }
  connect(e) {
    this._document = e, e.hidden !== void 0 && (this._pageVisibilityHandler = wm.bind(this), e.addEventListener("visibilitychange", this._pageVisibilityHandler, false));
  }
  disconnect() {
    this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
  }
  getDelta() {
    return this._delta / 1e3;
  }
  getElapsed() {
    return this._elapsed / 1e3;
  }
  getTimescale() {
    return this._timescale;
  }
  setTimescale(e) {
    return this._timescale = e, this;
  }
  reset() {
    return this._currentTime = performance.now() - this._startTime, this;
  }
  dispose() {
    this.disconnect();
  }
  update(e) {
    return this._pageVisibilityHandler !== null && this._document.hidden === true ? this._delta = 0 : (this._previousTime = this._currentTime, this._currentTime = (e !== void 0 ? e : performance.now()) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
  }
}
function wm() {
  this._document.hidden === false && this.reset();
}
class nM {
  constructor(e = 1, t = 0, i = 0) {
    this.radius = e, this.phi = t, this.theta = i;
  }
  set(e, t, i) {
    return this.radius = e, this.phi = t, this.theta = i, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = ze(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + t * t + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(ze(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class sM {
  constructor(e = 1, t = 0, i = 0) {
    this.radius = e, this.theta = t, this.y = i;
  }
  set(e, t, i) {
    return this.radius = e, this.theta = t, this.y = i, this;
  }
  copy(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + i * i), this.theta = Math.atan2(e, i), this.y = t, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Wu {
  constructor(e, t, i, n) {
    Wu.prototype.isMatrix2 = true, this.elements = [1, 0, 0, 1], e !== void 0 && this.set(e, t, i, n);
  }
  identity() {
    return this.set(1, 0, 0, 1), this;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 4; i++) this.elements[i] = e[i + t];
    return this;
  }
  set(e, t, i, n) {
    const s = this.elements;
    return s[0] = e, s[2] = t, s[1] = i, s[3] = n, this;
  }
}
const xh = new K();
class rM {
  constructor(e = new K(1 / 0, 1 / 0), t = new K(-1 / 0, -1 / 0)) {
    this.isBox2 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = xh.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y;
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, xh).distanceTo(e);
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const yh = new R(), Br = new R(), Kn = new R(), Qn = new R(), fa = new R(), Em = new R(), Cm = new R();
class oM {
  constructor(e = new R(), t = new R()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    yh.subVectors(e, this.start), Br.subVectors(this.end, this.start);
    const i = Br.dot(Br);
    let s = Br.dot(yh) / i;
    return t && (s = ze(s, 0, 1)), s;
  }
  closestPointToPoint(e, t, i) {
    const n = this.closestPointToPointParameter(e, t);
    return this.delta(i).multiplyScalar(n).add(this.start);
  }
  distanceSqToLine3(e, t = Em, i = Cm) {
    const n = 10000000000000001e-32;
    let s, o;
    const a = this.start, l = e.start, c = this.end, h = e.end;
    Kn.subVectors(c, a), Qn.subVectors(h, l), fa.subVectors(a, l);
    const u = Kn.dot(Kn), d = Qn.dot(Qn), f = Qn.dot(fa);
    if (u <= n && d <= n) return t.copy(a), i.copy(l), t.sub(i), t.dot(t);
    if (u <= n) s = 0, o = f / d, o = ze(o, 0, 1);
    else {
      const m = Kn.dot(fa);
      if (d <= n) o = 0, s = ze(-m / u, 0, 1);
      else {
        const _ = Kn.dot(Qn), g = u * d - _ * _;
        g !== 0 ? s = ze((_ * f - m * d) / g, 0, 1) : s = 0, o = (_ * s + f) / d, o < 0 ? (o = 0, s = ze(-m / u, 0, 1)) : o > 1 && (o = 1, s = ze((_ - m) / u, 0, 1));
      }
    }
    return t.copy(a).add(Kn.multiplyScalar(s)), i.copy(l).add(Qn.multiplyScalar(o)), t.sub(i), t.dot(t);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mh = new R();
class aM extends it {
  constructor(e, t) {
    super(), this.light = e, this.matrixAutoUpdate = false, this.color = t, this.type = "SpotLightHelper";
    const i = new qe(), n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
    for (let o = 0, a = 1, l = 32; o < l; o++, a++) {
      const c = o / l * Math.PI * 2, h = a / l * Math.PI * 2;
      n.push(Math.cos(c), Math.sin(c), 1, Math.cos(h), Math.sin(h), 1);
    }
    i.setAttribute("position", new Ae(n, 3));
    const s = new qt({ fog: false, toneMapped: false });
    this.cone = new ki(i, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.light.target.updateWorldMatrix(true, false), this.parent ? (this.parent.updateWorldMatrix(true), this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)) : this.matrix.copy(this.light.matrixWorld), this.matrixWorld.copy(this.light.matrixWorld);
    const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), Mh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Mh), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
const Zi = new R(), zr = new Ge(), pa = new Ge();
class lM extends ki {
  constructor(e) {
    const t = Xu(e), i = new qe(), n = [], s = [];
    for (let c = 0; c < t.length; c++) {
      const h = t[c];
      h.parent && h.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), s.push(0, 0, 0), s.push(0, 0, 0));
    }
    i.setAttribute("position", new Ae(n, 3)), i.setAttribute("color", new Ae(s, 3));
    const o = new qt({ vertexColors: true, depthTest: false, depthWrite: false, toneMapped: false, transparent: true });
    super(i, o), this.isSkeletonHelper = true, this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false;
    const a = new Me(255), l = new Me(65280);
    this.setColors(a, l);
  }
  updateMatrixWorld(e) {
    const t = this.bones, i = this.geometry, n = i.getAttribute("position");
    pa.copy(this.root.matrixWorld).invert();
    for (let s = 0, o = 0; s < t.length; s++) {
      const a = t[s];
      a.parent && a.parent.isBone && (zr.multiplyMatrices(pa, a.matrixWorld), Zi.setFromMatrixPosition(zr), n.setXYZ(o, Zi.x, Zi.y, Zi.z), zr.multiplyMatrices(pa, a.parent.matrixWorld), Zi.setFromMatrixPosition(zr), n.setXYZ(o + 1, Zi.x, Zi.y, Zi.z), o += 2);
    }
    i.getAttribute("position").needsUpdate = true, super.updateMatrixWorld(e);
  }
  setColors(e, t) {
    const n = this.geometry.getAttribute("color");
    for (let s = 0; s < n.count; s += 2) n.setXYZ(s, e.r, e.g, e.b), n.setXYZ(s + 1, t.r, t.g, t.b);
    return n.needsUpdate = true, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function Xu(r) {
  const e = [];
  r.isBone === true && e.push(r);
  for (let t = 0; t < r.children.length; t++) e.push(...Xu(r.children[t]));
  return e;
}
class cM extends Tt {
  constructor(e, t, i) {
    const n = new So(t, 4, 2), s = new Cn({ wireframe: true, fog: false, toneMapped: false });
    super(n, s), this.light = e, this.color = i, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = false, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const Rm = new R(), Sh = new Me(), bh = new Me();
class hM extends it {
  constructor(e, t, i) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = i, this.type = "HemisphereLightHelper";
    const n = new Mo(t);
    n.rotateY(Math.PI * 0.5), this.material = new Cn({ wireframe: true, fog: false, toneMapped: false }), this.color === void 0 && (this.material.vertexColors = true);
    const s = n.getAttribute("position"), o = new Float32Array(s.count * 3);
    n.setAttribute("color", new ut(o, 3)), this.add(new Tt(n, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0) this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      Sh.copy(this.light.color), bh.copy(this.light.groundColor);
      for (let i = 0, n = t.count; i < n; i++) {
        const s = i < n / 2 ? Sh : bh;
        t.setXYZ(i, s.r, s.g, s.b);
      }
      t.needsUpdate = true;
    }
    this.light.updateWorldMatrix(true, false), e.lookAt(Rm.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class uM extends ki {
  constructor(e = 10, t = 10, i = 4473924, n = 8947848) {
    i = new Me(i), n = new Me(n);
    const s = t / 2, o = e / t, a = e / 2, l = [], c = [];
    for (let d = 0, f = 0, m = -a; d <= t; d++, m += o) {
      l.push(-a, 0, m, a, 0, m), l.push(m, 0, -a, m, 0, a);
      const _ = d === s ? i : n;
      _.toArray(c, f), f += 3, _.toArray(c, f), f += 3, _.toArray(c, f), f += 3, _.toArray(c, f), f += 3;
    }
    const h = new qe();
    h.setAttribute("position", new Ae(l, 3)), h.setAttribute("color", new Ae(c, 3));
    const u = new qt({ vertexColors: true, toneMapped: false });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class dM extends ki {
  constructor(e = 10, t = 16, i = 8, n = 64, s = 4473924, o = 8947848) {
    s = new Me(s), o = new Me(o);
    const a = [], l = [];
    if (t > 1) for (let u = 0; u < t; u++) {
      const d = u / t * (Math.PI * 2), f = Math.sin(d) * e, m = Math.cos(d) * e;
      a.push(0, 0, 0), a.push(f, 0, m);
      const _ = u & 1 ? s : o;
      l.push(_.r, _.g, _.b), l.push(_.r, _.g, _.b);
    }
    for (let u = 0; u < i; u++) {
      const d = u & 1 ? s : o, f = e - e / i * u;
      for (let m = 0; m < n; m++) {
        let _ = m / n * (Math.PI * 2), g = Math.sin(_) * f, p = Math.cos(_) * f;
        a.push(g, 0, p), l.push(d.r, d.g, d.b), _ = (m + 1) / n * (Math.PI * 2), g = Math.sin(_) * f, p = Math.cos(_) * f, a.push(g, 0, p), l.push(d.r, d.g, d.b);
      }
    }
    const c = new qe();
    c.setAttribute("position", new Ae(a, 3)), c.setAttribute("color", new Ae(l, 3));
    const h = new qt({ vertexColors: true, toneMapped: false });
    super(c, h), this.type = "PolarGridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const Th = new R(), Vr = new R(), Ah = new R();
class fM extends it {
  constructor(e, t, i) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = i, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let n = new qe();
    n.setAttribute("position", new Ae([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
    const s = new qt({ fog: false, toneMapped: false });
    this.lightPlane = new An(n, s), this.add(this.lightPlane), n = new qe(), n.setAttribute("position", new Ae([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new An(n, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.light.target.updateWorldMatrix(true, false), Th.setFromMatrixPosition(this.light.matrixWorld), Vr.setFromMatrixPosition(this.light.target.matrixWorld), Ah.subVectors(Vr, Th), this.lightPlane.lookAt(Vr), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Vr), this.targetLine.scale.z = Ah.length();
  }
}
const kr = new R(), xt = new Dl();
class pM extends ki {
  constructor(e) {
    const t = new qe(), i = new qt({ color: 16777215, vertexColors: true, toneMapped: false }), n = [], s = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(m, _) {
      l(m), l(_);
    }
    function l(m) {
      n.push(0, 0, 0), s.push(0, 0, 0), o[m] === void 0 && (o[m] = []), o[m].push(n.length / 3 - 1);
    }
    t.setAttribute("position", new Ae(n, 3)), t.setAttribute("color", new Ae(s, 3)), super(t, i), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.pointMap = o, this.update();
    const c = new Me(16755200), h = new Me(16711680), u = new Me(43775), d = new Me(16777215), f = new Me(3355443);
    this.setColors(c, h, u, d, f);
  }
  setColors(e, t, i, n, s) {
    const a = this.geometry.getAttribute("color");
    return a.setXYZ(0, e.r, e.g, e.b), a.setXYZ(1, e.r, e.g, e.b), a.setXYZ(2, e.r, e.g, e.b), a.setXYZ(3, e.r, e.g, e.b), a.setXYZ(4, e.r, e.g, e.b), a.setXYZ(5, e.r, e.g, e.b), a.setXYZ(6, e.r, e.g, e.b), a.setXYZ(7, e.r, e.g, e.b), a.setXYZ(8, e.r, e.g, e.b), a.setXYZ(9, e.r, e.g, e.b), a.setXYZ(10, e.r, e.g, e.b), a.setXYZ(11, e.r, e.g, e.b), a.setXYZ(12, e.r, e.g, e.b), a.setXYZ(13, e.r, e.g, e.b), a.setXYZ(14, e.r, e.g, e.b), a.setXYZ(15, e.r, e.g, e.b), a.setXYZ(16, e.r, e.g, e.b), a.setXYZ(17, e.r, e.g, e.b), a.setXYZ(18, e.r, e.g, e.b), a.setXYZ(19, e.r, e.g, e.b), a.setXYZ(20, e.r, e.g, e.b), a.setXYZ(21, e.r, e.g, e.b), a.setXYZ(22, e.r, e.g, e.b), a.setXYZ(23, e.r, e.g, e.b), a.setXYZ(24, t.r, t.g, t.b), a.setXYZ(25, t.r, t.g, t.b), a.setXYZ(26, t.r, t.g, t.b), a.setXYZ(27, t.r, t.g, t.b), a.setXYZ(28, t.r, t.g, t.b), a.setXYZ(29, t.r, t.g, t.b), a.setXYZ(30, t.r, t.g, t.b), a.setXYZ(31, t.r, t.g, t.b), a.setXYZ(32, i.r, i.g, i.b), a.setXYZ(33, i.r, i.g, i.b), a.setXYZ(34, i.r, i.g, i.b), a.setXYZ(35, i.r, i.g, i.b), a.setXYZ(36, i.r, i.g, i.b), a.setXYZ(37, i.r, i.g, i.b), a.setXYZ(38, n.r, n.g, n.b), a.setXYZ(39, n.r, n.g, n.b), a.setXYZ(40, s.r, s.g, s.b), a.setXYZ(41, s.r, s.g, s.b), a.setXYZ(42, s.r, s.g, s.b), a.setXYZ(43, s.r, s.g, s.b), a.setXYZ(44, s.r, s.g, s.b), a.setXYZ(45, s.r, s.g, s.b), a.setXYZ(46, s.r, s.g, s.b), a.setXYZ(47, s.r, s.g, s.b), a.setXYZ(48, s.r, s.g, s.b), a.setXYZ(49, s.r, s.g, s.b), a.needsUpdate = true, this;
  }
  update() {
    const e = this.geometry, t = this.pointMap, i = 1, n = 1;
    let s, o;
    if (xt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), this.camera.reversedDepth === true) s = 1, o = 0;
    else if (this.camera.coordinateSystem === oi) s = -1, o = 1;
    else if (this.camera.coordinateSystem === Gs) s = 0, o = 1;
    else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: " + this.camera.coordinateSystem);
    yt("c", t, e, xt, 0, 0, s), yt("t", t, e, xt, 0, 0, o), yt("n1", t, e, xt, -i, -n, s), yt("n2", t, e, xt, i, -n, s), yt("n3", t, e, xt, -i, n, s), yt("n4", t, e, xt, i, n, s), yt("f1", t, e, xt, -i, -n, o), yt("f2", t, e, xt, i, -n, o), yt("f3", t, e, xt, -i, n, o), yt("f4", t, e, xt, i, n, o), yt("u1", t, e, xt, i * 0.7, n * 1.1, s), yt("u2", t, e, xt, -i * 0.7, n * 1.1, s), yt("u3", t, e, xt, 0, n * 2, s), yt("cf1", t, e, xt, -i, 0, o), yt("cf2", t, e, xt, i, 0, o), yt("cf3", t, e, xt, 0, -n, o), yt("cf4", t, e, xt, 0, n, o), yt("cn1", t, e, xt, -i, 0, s), yt("cn2", t, e, xt, i, 0, s), yt("cn3", t, e, xt, 0, -n, s), yt("cn4", t, e, xt, 0, n, s), e.getAttribute("position").needsUpdate = true;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function yt(r, e, t, i, n, s, o) {
  kr.set(n, s, o).unproject(i);
  const a = e[r];
  if (a !== void 0) {
    const l = t.getAttribute("position");
    for (let c = 0, h = a.length; c < h; c++) l.setXYZ(a[c], kr.x, kr.y, kr.z);
  }
}
const Gr = new Ft();
class mM extends ki {
  constructor(e, t = 16776960) {
    const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), n = new Float32Array(24), s = new qe();
    s.setIndex(new ut(i, 1)), s.setAttribute("position", new ut(n, 3)), super(s, new qt({ color: t, toneMapped: false })), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = false, this.update();
  }
  update() {
    if (this.object !== void 0 && Gr.setFromObject(this.object), Gr.isEmpty()) return;
    const e = Gr.min, t = Gr.max, i = this.geometry.attributes.position, n = i.array;
    n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = e.x, n[4] = t.y, n[5] = t.z, n[6] = e.x, n[7] = e.y, n[8] = t.z, n[9] = t.x, n[10] = e.y, n[11] = t.z, n[12] = t.x, n[13] = t.y, n[14] = e.z, n[15] = e.x, n[16] = t.y, n[17] = e.z, n[18] = e.x, n[19] = e.y, n[20] = e.z, n[21] = t.x, n[22] = e.y, n[23] = e.z, i.needsUpdate = true, this.geometry.computeBoundingSphere();
  }
  setFromObject(e) {
    return this.object = e, this.update(), this;
  }
  copy(e, t) {
    return super.copy(e, t), this.object = e.object, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class gM extends ki {
  constructor(e, t = 16776960) {
    const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), n = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], s = new qe();
    s.setIndex(new ut(i, 1)), s.setAttribute("position", new Ae(n, 3)), super(s, new qt({ color: t, toneMapped: false })), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    const t = this.box;
    t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(e));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class _M extends An {
  constructor(e, t = 1, i = 16776960) {
    const n = i, s = [1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], o = new qe();
    o.setAttribute("position", new Ae(s, 3)), o.computeBoundingSphere(), super(o, new qt({ color: n, toneMapped: false })), this.type = "PlaneHelper", this.plane = e, this.size = t;
    const a = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], l = new qe();
    l.setAttribute("position", new Ae(a, 3)), l.computeBoundingSphere(), this.add(new Tt(l, new Cn({ color: n, opacity: 0.2, transparent: true, depthWrite: false, toneMapped: false })));
  }
  updateMatrixWorld(e) {
    this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
}
const wh = new R();
let Hr, ma;
class vM extends it {
  constructor(e = new R(0, 0, 1), t = new R(0, 0, 0), i = 1, n = 16776960, s = i * 0.2, o = s * 0.2) {
    super(), this.type = "ArrowHelper", Hr === void 0 && (Hr = new qe(), Hr.setAttribute("position", new Ae([0, 0, 0, 0, 1, 0], 3)), ma = new yo(0.5, 1, 5, 1), ma.translate(0, -0.5, 0)), this.position.copy(t), this.line = new An(Hr, new qt({ color: n, toneMapped: false })), this.line.matrixAutoUpdate = false, this.add(this.line), this.cone = new Tt(ma, new Cn({ color: n, toneMapped: false })), this.cone.matrixAutoUpdate = false, this.add(this.cone), this.setDirection(e), this.setLength(i, s, o);
  }
  setDirection(e) {
    if (e.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
    else {
      wh.set(e.z, 0, -e.x).normalize();
      const t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(wh, t);
    }
  }
  setLength(e, t = e * 0.2, i = t * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(i, t, i), this.cone.position.y = e, this.cone.updateMatrix();
  }
  setColor(e) {
    this.line.material.color.set(e), this.cone.material.color.set(e);
  }
  copy(e) {
    return super.copy(e, false), this.line.copy(e.line), this.cone.copy(e.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class xM extends ki {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e], i = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], n = new qe();
    n.setAttribute("position", new Ae(t, 3)), n.setAttribute("color", new Ae(i, 3));
    const s = new qt({ vertexColors: true, toneMapped: false });
    super(n, s), this.type = "AxesHelper";
  }
  setColors(e, t, i) {
    const n = new Me(), s = this.geometry.attributes.color.array;
    return n.set(e), n.toArray(s, 0), n.toArray(s, 3), n.set(t), n.toArray(s, 6), n.toArray(s, 9), n.set(i), n.toArray(s, 12), n.toArray(s, 15), this.geometry.attributes.color.needsUpdate = true, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class yM {
  constructor() {
    this.type = "ShapePath", this.color = new Me(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new ul(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, i, n) {
    return this.currentPath.quadraticCurveTo(e, t, i, n), this;
  }
  bezierCurveTo(e, t, i, n, s, o) {
    return this.currentPath.bezierCurveTo(e, t, i, n, s, o), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(p) {
      const x = [];
      for (let v = 0, M = p.length; v < M; v++) {
        const A = p[v], w = new rs();
        w.curves = A.curves, x.push(w);
      }
      return x;
    }
    function i(p, x) {
      const v = x.length;
      let M = false;
      for (let A = v - 1, w = 0; w < v; A = w++) {
        let C = x[A], P = x[w], S = P.x - C.x, b = P.y - C.y;
        if (Math.abs(b) > Number.EPSILON) {
          if (b < 0 && (C = x[w], S = -S, P = x[A], b = -b), p.y < C.y || p.y > P.y) continue;
          if (p.y === C.y) {
            if (p.x === C.x) return true;
          } else {
            const L = b * (p.x - C.x) - S * (p.y - C.y);
            if (L === 0) return true;
            if (L < 0) continue;
            M = !M;
          }
        } else {
          if (p.y !== C.y) continue;
          if (P.x <= p.x && p.x <= C.x || C.x <= p.x && p.x <= P.x) return true;
        }
      }
      return M;
    }
    const n = yi.isClockWise, s = this.subPaths;
    if (s.length === 0) return [];
    let o, a, l;
    const c = [];
    if (s.length === 1) return a = s[0], l = new rs(), l.curves = a.curves, c.push(l), c;
    let h = !n(s[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let f = [], m = 0, _;
    d[m] = void 0, f[m] = [];
    for (let p = 0, x = s.length; p < x; p++) a = s[p], _ = a.getPoints(), o = n(_), o = e ? !o : o, o ? (!h && d[m] && m++, d[m] = { s: new rs(), p: _ }, d[m].s.curves = a.curves, h && m++, f[m] = []) : f[m].push({ h: a, p: _[0] });
    if (!d[0]) return t(s);
    if (d.length > 1) {
      let p = false, x = 0;
      for (let v = 0, M = d.length; v < M; v++) u[v] = [];
      for (let v = 0, M = d.length; v < M; v++) {
        const A = f[v];
        for (let w = 0; w < A.length; w++) {
          const C = A[w];
          let P = true;
          for (let S = 0; S < d.length; S++) i(C.p, d[S].p) && (v !== S && x++, P ? (P = false, u[S].push(C)) : p = true);
          P && u[v].push(C);
        }
      }
      x > 0 && p === false && (f = u);
    }
    let g;
    for (let p = 0, x = d.length; p < x; p++) {
      l = d[p].s, c.push(l), g = f[p];
      for (let v = 0, M = g.length; v < M; v++) l.holes.push(g[v].h);
    }
    return c;
  }
}
class MM extends Vi {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      de("Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Im(r, e) {
  const t = r.image && r.image.width ? r.image.width / r.image.height : 1;
  return t > e ? (r.repeat.x = 1, r.repeat.y = t / e, r.offset.x = 0, r.offset.y = (1 - r.repeat.y) / 2) : (r.repeat.x = e / t, r.repeat.y = 1, r.offset.x = (1 - r.repeat.x) / 2, r.offset.y = 0), r;
}
function Pm(r, e) {
  const t = r.image && r.image.width ? r.image.width / r.image.height : 1;
  return t > e ? (r.repeat.x = e / t, r.repeat.y = 1, r.offset.x = (1 - r.repeat.x) / 2, r.offset.y = 0) : (r.repeat.x = 1, r.repeat.y = t / e, r.offset.x = 0, r.offset.y = (1 - r.repeat.y) / 2), r;
}
function Lm(r) {
  return r.repeat.x = 1, r.repeat.y = 1, r.offset.x = 0, r.offset.y = 0, r;
}
function gl(r, e, t, i) {
  const n = Dm(i);
  switch (t) {
    case lu:
      return r * e;
    case bl:
      return r * e / n.components * n.byteLength;
    case _o:
      return r * e / n.components * n.byteLength;
    case as:
      return r * e * 2 / n.components * n.byteLength;
    case Tl:
      return r * e * 2 / n.components * n.byteLength;
    case cu:
      return r * e * 3 / n.components * n.byteLength;
    case Wt:
      return r * e * 4 / n.components * n.byteLength;
    case Al:
      return r * e * 4 / n.components * n.byteLength;
    case Zr:
    case Jr:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case $r:
    case Kr:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case La:
    case Ua:
      return Math.max(r, 16) * Math.max(e, 8) / 4;
    case Pa:
    case Da:
      return Math.max(r, 8) * Math.max(e, 8) / 2;
    case Na:
    case Oa:
    case Ba:
    case za:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Fa:
    case Va:
    case ka:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ga:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ha:
      return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Wa:
      return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Xa:
      return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case qa:
      return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ya:
      return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Za:
      return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ja:
      return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case $a:
      return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Ka:
      return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Qa:
      return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case ja:
      return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case el:
      return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case tl:
      return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case il:
    case nl:
    case sl:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    case rl:
    case ol:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
    case al:
    case ll:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Dm(r) {
  switch (r) {
    case Qt:
    case su:
      return { byteLength: 1, components: 1 };
    case Vs:
    case ru:
    case Bi:
      return { byteLength: 2, components: 1 };
    case Ml:
    case Sl:
      return { byteLength: 2, components: 4 };
    case di:
    case yl:
    case Ht:
      return { byteLength: 4, components: 1 };
    case ou:
    case au:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
class SM {
  static contain(e, t) {
    return Im(e, t);
  }
  static cover(e, t) {
    return Pm(e, t);
  }
  static fill(e) {
    return Lm(e);
  }
  static getByteLength(e, t, i, n) {
    return gl(e, t, i, n);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "182" } }));
typeof window < "u" && (window.__THREE__ ? de("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "182");
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function qu() {
  let r = null, e = false, t = null, i = null;
  function n(s, o) {
    t(s, o), i = r.requestAnimationFrame(n);
  }
  return { start: function() {
    e !== true && t !== null && (i = r.requestAnimationFrame(n), e = true);
  }, stop: function() {
    r.cancelAnimationFrame(i), e = false;
  }, setAnimationLoop: function(s) {
    t = s;
  }, setContext: function(s) {
    r = s;
  } };
}
function Um(r) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, h = a.usage, u = c.byteLength, d = r.createBuffer();
    r.bindBuffer(l, d), r.bufferData(l, c, h), a.onUploadCallback();
    let f;
    if (c instanceof Float32Array) f = r.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) f = r.HALF_FLOAT;
    else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? f = r.HALF_FLOAT : f = r.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) f = r.SHORT;
    else if (c instanceof Uint32Array) f = r.UNSIGNED_INT;
    else if (c instanceof Int32Array) f = r.INT;
    else if (c instanceof Int8Array) f = r.BYTE;
    else if (c instanceof Uint8Array) f = r.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) f = r.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: f, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: u };
  }
  function i(a, l, c) {
    const h = l.array, u = l.updateRanges;
    if (r.bindBuffer(c, a), u.length === 0) r.bufferSubData(c, 0, h);
    else {
      u.sort((f, m) => f.start - m.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const m = u[d], _ = u[f];
        _.start <= m.start + m.count + 1 ? m.count = Math.max(m.count, _.start + _.count - m.start) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let f = 0, m = u.length; f < m; f++) {
        const _ = u[f];
        r.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function n(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function s(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = e.get(a);
    l && (r.deleteBuffer(l.buffer), e.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = e.get(a);
      (!h || h.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version });
      return;
    }
    const c = e.get(a);
    if (c === void 0) e.set(a, t(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(c.buffer, a, l), c.version = a.version;
    }
  }
  return { get: n, remove: s, update: o };
}
var Nm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Om = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Fm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Bm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, zm = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Vm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, km = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Gm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Hm = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Wm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Xm = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, qm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ym = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Zm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Jm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, $m = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Km = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Qm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, jm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, eg = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, tg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ig = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, ng = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, sg = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, rg = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, og = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, ag = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, lg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, cg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, hg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ug = "gl_FragColor = linearToOutputTexel( gl_FragColor );", dg = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, fg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, pg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, mg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, gg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, _g = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, vg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, xg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, yg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Mg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Sg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, bg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Tg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Ag = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, wg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Eg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Cg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Rg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ig = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Pg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Lg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Dg = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Ug = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Ng = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Og = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Fg = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Bg = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, zg = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Vg = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, kg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Gg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Hg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Wg = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Xg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, qg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Yg = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Zg = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Jg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, $g = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Kg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Qg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, jg = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, e_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, t_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, i_ = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, n_ = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, s_ = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, r_ = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, o_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, a_ = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, l_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, c_ = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, h_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, u_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, d_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, f_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, p_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, m_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, g_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, __ = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, v_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, x_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, y_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, M_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, S_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, b_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, T_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, A_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, w_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, E_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, C_ = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, R_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, I_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, P_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, L_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, D_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const U_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, N_ = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, O_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, F_ = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, B_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, z_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, V_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, k_ = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, G_ = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, H_ = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, W_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, X_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, q_ = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Y_ = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Z_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, J_ = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $_ = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, K_ = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Q_ = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, j_ = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ev = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, tv = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, iv = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, nv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, sv = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, rv = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ov = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, av = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, cv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, hv = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, uv = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, dv = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, fv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Je = { alphahash_fragment: Nm, alphahash_pars_fragment: Om, alphamap_fragment: Fm, alphamap_pars_fragment: Bm, alphatest_fragment: zm, alphatest_pars_fragment: Vm, aomap_fragment: km, aomap_pars_fragment: Gm, batching_pars_vertex: Hm, batching_vertex: Wm, begin_vertex: Xm, beginnormal_vertex: qm, bsdfs: Ym, iridescence_fragment: Zm, bumpmap_pars_fragment: Jm, clipping_planes_fragment: $m, clipping_planes_pars_fragment: Km, clipping_planes_pars_vertex: Qm, clipping_planes_vertex: jm, color_fragment: eg, color_pars_fragment: tg, color_pars_vertex: ig, color_vertex: ng, common: sg, cube_uv_reflection_fragment: rg, defaultnormal_vertex: og, displacementmap_pars_vertex: ag, displacementmap_vertex: lg, emissivemap_fragment: cg, emissivemap_pars_fragment: hg, colorspace_fragment: ug, colorspace_pars_fragment: dg, envmap_fragment: fg, envmap_common_pars_fragment: pg, envmap_pars_fragment: mg, envmap_pars_vertex: gg, envmap_physical_pars_fragment: Eg, envmap_vertex: _g, fog_vertex: vg, fog_pars_vertex: xg, fog_fragment: yg, fog_pars_fragment: Mg, gradientmap_pars_fragment: Sg, lightmap_pars_fragment: bg, lights_lambert_fragment: Tg, lights_lambert_pars_fragment: Ag, lights_pars_begin: wg, lights_toon_fragment: Cg, lights_toon_pars_fragment: Rg, lights_phong_fragment: Ig, lights_phong_pars_fragment: Pg, lights_physical_fragment: Lg, lights_physical_pars_fragment: Dg, lights_fragment_begin: Ug, lights_fragment_maps: Ng, lights_fragment_end: Og, logdepthbuf_fragment: Fg, logdepthbuf_pars_fragment: Bg, logdepthbuf_pars_vertex: zg, logdepthbuf_vertex: Vg, map_fragment: kg, map_pars_fragment: Gg, map_particle_fragment: Hg, map_particle_pars_fragment: Wg, metalnessmap_fragment: Xg, metalnessmap_pars_fragment: qg, morphinstance_vertex: Yg, morphcolor_vertex: Zg, morphnormal_vertex: Jg, morphtarget_pars_vertex: $g, morphtarget_vertex: Kg, normal_fragment_begin: Qg, normal_fragment_maps: jg, normal_pars_fragment: e_, normal_pars_vertex: t_, normal_vertex: i_, normalmap_pars_fragment: n_, clearcoat_normal_fragment_begin: s_, clearcoat_normal_fragment_maps: r_, clearcoat_pars_fragment: o_, iridescence_pars_fragment: a_, opaque_fragment: l_, packing: c_, premultiplied_alpha_fragment: h_, project_vertex: u_, dithering_fragment: d_, dithering_pars_fragment: f_, roughnessmap_fragment: p_, roughnessmap_pars_fragment: m_, shadowmap_pars_fragment: g_, shadowmap_pars_vertex: __, shadowmap_vertex: v_, shadowmask_pars_fragment: x_, skinbase_vertex: y_, skinning_pars_vertex: M_, skinning_vertex: S_, skinnormal_vertex: b_, specularmap_fragment: T_, specularmap_pars_fragment: A_, tonemapping_fragment: w_, tonemapping_pars_fragment: E_, transmission_fragment: C_, transmission_pars_fragment: R_, uv_pars_fragment: I_, uv_pars_vertex: P_, uv_vertex: L_, worldpos_vertex: D_, background_vert: U_, background_frag: N_, backgroundCube_vert: O_, backgroundCube_frag: F_, cube_vert: B_, cube_frag: z_, depth_vert: V_, depth_frag: k_, distance_vert: G_, distance_frag: H_, equirect_vert: W_, equirect_frag: X_, linedashed_vert: q_, linedashed_frag: Y_, meshbasic_vert: Z_, meshbasic_frag: J_, meshlambert_vert: $_, meshlambert_frag: K_, meshmatcap_vert: Q_, meshmatcap_frag: j_, meshnormal_vert: ev, meshnormal_frag: tv, meshphong_vert: iv, meshphong_frag: nv, meshphysical_vert: sv, meshphysical_frag: rv, meshtoon_vert: ov, meshtoon_frag: av, points_vert: lv, points_frag: cv, shadow_vert: hv, shadow_frag: uv, sprite_vert: dv, sprite_frag: fv }, me = { common: { diffuse: { value: new Me(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ye() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ye() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ye() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ye() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ye() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ye() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ye() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ye() }, normalScale: { value: new K(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ye() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ye() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ye() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ye() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Me(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Me(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ye() }, alphaTest: { value: 0 }, uvTransform: { value: new Ye() } }, sprite: { diffuse: { value: new Me(16777215) }, opacity: { value: 1 }, center: { value: new K(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ye() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ye() }, alphaTest: { value: 0 } } }, xi = { basic: { uniforms: Nt([me.common, me.specularmap, me.envmap, me.aomap, me.lightmap, me.fog]), vertexShader: Je.meshbasic_vert, fragmentShader: Je.meshbasic_frag }, lambert: { uniforms: Nt([me.common, me.specularmap, me.envmap, me.aomap, me.lightmap, me.emissivemap, me.bumpmap, me.normalmap, me.displacementmap, me.fog, me.lights, { emissive: { value: new Me(0) } }]), vertexShader: Je.meshlambert_vert, fragmentShader: Je.meshlambert_frag }, phong: { uniforms: Nt([me.common, me.specularmap, me.envmap, me.aomap, me.lightmap, me.emissivemap, me.bumpmap, me.normalmap, me.displacementmap, me.fog, me.lights, { emissive: { value: new Me(0) }, specular: { value: new Me(1118481) }, shininess: { value: 30 } }]), vertexShader: Je.meshphong_vert, fragmentShader: Je.meshphong_frag }, standard: { uniforms: Nt([me.common, me.envmap, me.aomap, me.lightmap, me.emissivemap, me.bumpmap, me.normalmap, me.displacementmap, me.roughnessmap, me.metalnessmap, me.fog, me.lights, { emissive: { value: new Me(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Je.meshphysical_vert, fragmentShader: Je.meshphysical_frag }, toon: { uniforms: Nt([me.common, me.aomap, me.lightmap, me.emissivemap, me.bumpmap, me.normalmap, me.displacementmap, me.gradientmap, me.fog, me.lights, { emissive: { value: new Me(0) } }]), vertexShader: Je.meshtoon_vert, fragmentShader: Je.meshtoon_frag }, matcap: { uniforms: Nt([me.common, me.bumpmap, me.normalmap, me.displacementmap, me.fog, { matcap: { value: null } }]), vertexShader: Je.meshmatcap_vert, fragmentShader: Je.meshmatcap_frag }, points: { uniforms: Nt([me.points, me.fog]), vertexShader: Je.points_vert, fragmentShader: Je.points_frag }, dashed: { uniforms: Nt([me.common, me.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Je.linedashed_vert, fragmentShader: Je.linedashed_frag }, depth: { uniforms: Nt([me.common, me.displacementmap]), vertexShader: Je.depth_vert, fragmentShader: Je.depth_frag }, normal: { uniforms: Nt([me.common, me.bumpmap, me.normalmap, me.displacementmap, { opacity: { value: 1 } }]), vertexShader: Je.meshnormal_vert, fragmentShader: Je.meshnormal_frag }, sprite: { uniforms: Nt([me.sprite, me.fog]), vertexShader: Je.sprite_vert, fragmentShader: Je.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ye() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Je.background_vert, fragmentShader: Je.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ye() } }, vertexShader: Je.backgroundCube_vert, fragmentShader: Je.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Je.cube_vert, fragmentShader: Je.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Je.equirect_vert, fragmentShader: Je.equirect_frag }, distance: { uniforms: Nt([me.common, me.displacementmap, { referencePosition: { value: new R() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Je.distance_vert, fragmentShader: Je.distance_frag }, shadow: { uniforms: Nt([me.lights, me.fog, { color: { value: new Me(0) }, opacity: { value: 1 } }]), vertexShader: Je.shadow_vert, fragmentShader: Je.shadow_frag } };
xi.physical = { uniforms: Nt([xi.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ye() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ye() }, clearcoatNormalScale: { value: new K(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ye() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ye() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ye() }, sheen: { value: 0 }, sheenColor: { value: new Me(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ye() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ye() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ye() }, transmissionSamplerSize: { value: new K() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ye() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Me(0) }, specularColor: { value: new Me(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ye() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ye() }, anisotropyVector: { value: new K() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ye() } }]), vertexShader: Je.meshphysical_vert, fragmentShader: Je.meshphysical_frag };
const Wr = { r: 0, b: 0, g: 0 }, mn = new li(), pv = new Ge();
function mv(r, e, t, i, n, s, o) {
  const a = new Me(0);
  let l = s === true ? 0 : 1, c, h, u = null, d = 0, f = null;
  function m(v) {
    let M = v.isScene === true ? v.background : null;
    return M && M.isTexture && (M = (v.backgroundBlurriness > 0 ? t : e).get(M)), M;
  }
  function _(v) {
    let M = false;
    const A = m(v);
    A === null ? p(a, l) : A && A.isColor && (p(A, 1), M = true);
    const w = r.xr.getEnvironmentBlendMode();
    w === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : w === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o), (r.autoClear || M) && (i.buffers.depth.setTest(true), i.buffers.depth.setMask(true), i.buffers.color.setMask(true), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function g(v, M) {
    const A = m(M);
    A && (A.isCubeTexture || A.mapping === $s) ? (h === void 0 && (h = new Tt(new fs(1, 1, 1), new fi({ name: "BackgroundCubeMaterial", uniforms: hs(xi.backgroundCube.uniforms), vertexShader: xi.backgroundCube.vertexShader, fragmentShader: xi.backgroundCube.fragmentShader, side: Xt, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(w, C, P) {
      this.matrixWorld.copyPosition(P.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), n.update(h)), mn.copy(M.backgroundRotation), mn.x *= -1, mn.y *= -1, mn.z *= -1, A.isCubeTexture && A.isRenderTargetTexture === false && (mn.y *= -1, mn.z *= -1), h.material.uniforms.envMap.value = A, h.material.uniforms.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(mn)), h.material.toneMapped = je.getTransfer(A.colorSpace) !== rt, (u !== A || d !== A.version || f !== r.toneMapping) && (h.material.needsUpdate = true, u = A, d = A.version, f = r.toneMapping), h.layers.enableAll(), v.unshift(h, h.geometry, h.material, 0, 0, null)) : A && A.isTexture && (c === void 0 && (c = new Tt(new js(2, 2), new fi({ name: "BackgroundMaterial", uniforms: hs(xi.background.uniforms), vertexShader: xi.background.vertexShader, fragmentShader: xi.background.fragmentShader, side: Ki, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), n.update(c)), c.material.uniforms.t2D.value = A, c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, c.material.toneMapped = je.getTransfer(A.colorSpace) !== rt, A.matrixAutoUpdate === true && A.updateMatrix(), c.material.uniforms.uvTransform.value.copy(A.matrix), (u !== A || d !== A.version || f !== r.toneMapping) && (c.material.needsUpdate = true, u = A, d = A.version, f = r.toneMapping), c.layers.enableAll(), v.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(v, M) {
    v.getRGB(Wr, _u(r)), i.buffers.color.setClear(Wr.r, Wr.g, Wr.b, M, o);
  }
  function x() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(v, M = 1) {
    a.set(v), l = M, p(a, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(v) {
    l = v, p(a, l);
  }, render: _, addToRenderList: g, dispose: x };
}
function gv(r, e) {
  const t = r.getParameter(r.MAX_VERTEX_ATTRIBS), i = {}, n = d(null);
  let s = n, o = false;
  function a(b, L, O, B, G) {
    let q = false;
    const V = u(B, O, L);
    s !== V && (s = V, c(s.object)), q = f(b, B, O, G), q && m(b, B, O, G), G !== null && e.update(G, r.ELEMENT_ARRAY_BUFFER), (q || o) && (o = false, M(b, L, O, B), G !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(G).buffer));
  }
  function l() {
    return r.createVertexArray();
  }
  function c(b) {
    return r.bindVertexArray(b);
  }
  function h(b) {
    return r.deleteVertexArray(b);
  }
  function u(b, L, O) {
    const B = O.wireframe === true;
    let G = i[b.id];
    G === void 0 && (G = {}, i[b.id] = G);
    let q = G[L.id];
    q === void 0 && (q = {}, G[L.id] = q);
    let V = q[B];
    return V === void 0 && (V = d(l()), q[B] = V), V;
  }
  function d(b) {
    const L = [], O = [], B = [];
    for (let G = 0; G < t; G++) L[G] = 0, O[G] = 0, B[G] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: L, enabledAttributes: O, attributeDivisors: B, object: b, attributes: {}, index: null };
  }
  function f(b, L, O, B) {
    const G = s.attributes, q = L.attributes;
    let V = 0;
    const H = O.getAttributes();
    for (const j in H) if (H[j].location >= 0) {
      const ae = G[j];
      let he = q[j];
      if (he === void 0 && (j === "instanceMatrix" && b.instanceMatrix && (he = b.instanceMatrix), j === "instanceColor" && b.instanceColor && (he = b.instanceColor)), ae === void 0 || ae.attribute !== he || he && ae.data !== he.data) return true;
      V++;
    }
    return s.attributesNum !== V || s.index !== B;
  }
  function m(b, L, O, B) {
    const G = {}, q = L.attributes;
    let V = 0;
    const H = O.getAttributes();
    for (const j in H) if (H[j].location >= 0) {
      let ae = q[j];
      ae === void 0 && (j === "instanceMatrix" && b.instanceMatrix && (ae = b.instanceMatrix), j === "instanceColor" && b.instanceColor && (ae = b.instanceColor));
      const he = {};
      he.attribute = ae, ae && ae.data && (he.data = ae.data), G[j] = he, V++;
    }
    s.attributes = G, s.attributesNum = V, s.index = B;
  }
  function _() {
    const b = s.newAttributes;
    for (let L = 0, O = b.length; L < O; L++) b[L] = 0;
  }
  function g(b) {
    p(b, 0);
  }
  function p(b, L) {
    const O = s.newAttributes, B = s.enabledAttributes, G = s.attributeDivisors;
    O[b] = 1, B[b] === 0 && (r.enableVertexAttribArray(b), B[b] = 1), G[b] !== L && (r.vertexAttribDivisor(b, L), G[b] = L);
  }
  function x() {
    const b = s.newAttributes, L = s.enabledAttributes;
    for (let O = 0, B = L.length; O < B; O++) L[O] !== b[O] && (r.disableVertexAttribArray(O), L[O] = 0);
  }
  function v(b, L, O, B, G, q, V) {
    V === true ? r.vertexAttribIPointer(b, L, O, G, q) : r.vertexAttribPointer(b, L, O, B, G, q);
  }
  function M(b, L, O, B) {
    _();
    const G = B.attributes, q = O.getAttributes(), V = L.defaultAttributeValues;
    for (const H in q) {
      const j = q[H];
      if (j.location >= 0) {
        let pe = G[H];
        if (pe === void 0 && (H === "instanceMatrix" && b.instanceMatrix && (pe = b.instanceMatrix), H === "instanceColor" && b.instanceColor && (pe = b.instanceColor)), pe !== void 0) {
          const ae = pe.normalized, he = pe.itemSize, We = e.get(pe);
          if (We === void 0) continue;
          const ke = We.buffer, ot = We.type, at = We.bytesPerElement, Y = ot === r.INT || ot === r.UNSIGNED_INT || pe.gpuType === yl;
          if (pe.isInterleavedBufferAttribute) {
            const ee = pe.data, Se = ee.stride, Oe = pe.offset;
            if (ee.isInstancedInterleavedBuffer) {
              for (let Te = 0; Te < j.locationSize; Te++) p(j.location + Te, ee.meshPerAttribute);
              b.isInstancedMesh !== true && B._maxInstanceCount === void 0 && (B._maxInstanceCount = ee.meshPerAttribute * ee.count);
            } else for (let Te = 0; Te < j.locationSize; Te++) g(j.location + Te);
            r.bindBuffer(r.ARRAY_BUFFER, ke);
            for (let Te = 0; Te < j.locationSize; Te++) v(j.location + Te, he / j.locationSize, ot, ae, Se * at, (Oe + he / j.locationSize * Te) * at, Y);
          } else {
            if (pe.isInstancedBufferAttribute) {
              for (let ee = 0; ee < j.locationSize; ee++) p(j.location + ee, pe.meshPerAttribute);
              b.isInstancedMesh !== true && B._maxInstanceCount === void 0 && (B._maxInstanceCount = pe.meshPerAttribute * pe.count);
            } else for (let ee = 0; ee < j.locationSize; ee++) g(j.location + ee);
            r.bindBuffer(r.ARRAY_BUFFER, ke);
            for (let ee = 0; ee < j.locationSize; ee++) v(j.location + ee, he / j.locationSize, ot, ae, he * at, he / j.locationSize * ee * at, Y);
          }
        } else if (V !== void 0) {
          const ae = V[H];
          if (ae !== void 0) switch (ae.length) {
            case 2:
              r.vertexAttrib2fv(j.location, ae);
              break;
            case 3:
              r.vertexAttrib3fv(j.location, ae);
              break;
            case 4:
              r.vertexAttrib4fv(j.location, ae);
              break;
            default:
              r.vertexAttrib1fv(j.location, ae);
          }
        }
      }
    }
    x();
  }
  function A() {
    P();
    for (const b in i) {
      const L = i[b];
      for (const O in L) {
        const B = L[O];
        for (const G in B) h(B[G].object), delete B[G];
        delete L[O];
      }
      delete i[b];
    }
  }
  function w(b) {
    if (i[b.id] === void 0) return;
    const L = i[b.id];
    for (const O in L) {
      const B = L[O];
      for (const G in B) h(B[G].object), delete B[G];
      delete L[O];
    }
    delete i[b.id];
  }
  function C(b) {
    for (const L in i) {
      const O = i[L];
      if (O[b.id] === void 0) continue;
      const B = O[b.id];
      for (const G in B) h(B[G].object), delete B[G];
      delete O[b.id];
    }
  }
  function P() {
    S(), o = true, s !== n && (s = n, c(s.object));
  }
  function S() {
    n.geometry = null, n.program = null, n.wireframe = false;
  }
  return { setup: a, reset: P, resetDefaultState: S, dispose: A, releaseStatesOfGeometry: w, releaseStatesOfProgram: C, initAttributes: _, enableAttribute: g, disableUnusedAttributes: x };
}
function _v(r, e, t) {
  let i;
  function n(c) {
    i = c;
  }
  function s(c, h) {
    r.drawArrays(i, c, h), t.update(h, i, 1);
  }
  function o(c, h, u) {
    u !== 0 && (r.drawArraysInstanced(i, c, h, u), t.update(h, i, u));
  }
  function a(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, h, 0, u);
    let f = 0;
    for (let m = 0; m < u; m++) f += h[m];
    t.update(f, i, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null) for (let m = 0; m < c.length; m++) o(c[m], h[m], d[m]);
    else {
      f.multiDrawArraysInstancedWEBGL(i, c, 0, h, 0, d, 0, u);
      let m = 0;
      for (let _ = 0; _ < u; _++) m += h[_] * d[_];
      t.update(m, i, 1);
    }
  }
  this.setMode = n, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function vv(r, e, t, i) {
  let n;
  function s() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const C = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function o(C) {
    return !(C !== Wt && i.convert(C) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(C) {
    const P = C === Bi && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(C !== Qt && i.convert(C) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && C !== Ht && !P);
  }
  function l(C) {
    if (C === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (de("WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === true, d = t.reversedDepthBuffer === true && e.has("EXT_clip_control"), f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), m = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), p = r.getParameter(r.MAX_VERTEX_ATTRIBS), x = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), v = r.getParameter(r.MAX_VARYING_VECTORS), M = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), A = r.getParameter(r.MAX_SAMPLES), w = r.getParameter(r.SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: u, reversedDepthBuffer: d, maxTextures: f, maxVertexTextures: m, maxTextureSize: _, maxCubemapSize: g, maxAttributes: p, maxVertexUniforms: x, maxVaryings: v, maxFragmentUniforms: M, maxSamples: A, samples: w };
}
function xv(r) {
  const e = this;
  let t = null, i = 0, n = false, s = false;
  const o = new _n(), a = new Ye(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || i !== 0 || n;
    return n = d, i = u.length, f;
  }, this.beginShadows = function() {
    s = true, h(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const m = u.clippingPlanes, _ = u.clipIntersection, g = u.clipShadows, p = r.get(u);
    if (!n || m === null || m.length === 0 || s && !g) s ? h(null) : c();
    else {
      const x = s ? 0 : i, v = x * 4;
      let M = p.clippingState || null;
      l.value = M, M = h(m, d, v, f);
      for (let A = 0; A !== v; ++A) M[A] = t[A];
      p.clippingState = M, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += x;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function h(u, d, f, m) {
    const _ = u !== null ? u.length : 0;
    let g = null;
    if (_ !== 0) {
      if (g = l.value, m !== true || g === null) {
        const p = f + _ * 4, x = d.matrixWorldInverse;
        a.getNormalMatrix(x), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let v = 0, M = f; v !== _; ++v, M += 4) o.copy(u[v]).applyMatrix4(x, a), o.normal.toArray(g, M), g[M + 3] = o.constant;
      }
      l.value = g, l.needsUpdate = true;
    }
    return e.numPlanes = _, e.numIntersection = 0, g;
  }
}
function yv(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === jr ? o.mapping = Fi : a === eo && (o.mapping = Tn), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === jr || a === eo) if (e.has(o)) {
        const l = e.get(o).texture;
        return t(l, o.mapping);
      } else {
        const l = o.image;
        if (l && l.height > 0) {
          const c = new vu(l.height);
          return c.fromEquirectangularTexture(r, o), e.set(o, c), o.addEventListener("dispose", n), t(c.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function n(o) {
    const a = o.target;
    a.removeEventListener("dispose", n);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: i, dispose: s };
}
const $i = 4, Eh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], xn = 20, Mv = 256, Rs = new Ao(), Ch = new Me();
let ga = null, _a = 0, va = 0, xa = false;
const Sv = new R();
class Rh {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e, t = 0, i = 0.1, n = 100, s = {}) {
    const { size: o = 256, position: a = Sv } = s;
    ga = this._renderer.getRenderTarget(), _a = this._renderer.getActiveCubeFace(), va = this._renderer.getActiveMipmapLevel(), xa = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(o);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(e, i, n, l, a), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Lh(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ph(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ga, _a, va), this._renderer.xr.enabled = xa, e.scissorTest = false, jn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Fi || e.mapping === Tn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ga = this._renderer.getRenderTarget(), _a = this._renderer.getActiveCubeFace(), va = this._renderer.getActiveMipmapLevel(), xa = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = { magFilter: mt, minFilter: mt, generateMipmaps: false, type: Bi, format: Wt, colorSpace: ls, depthBuffer: false }, n = Ih(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ih(e, t, i);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = bv(s)), this._blurMaterial = Av(s, e, t), this._ggxMaterial = Tv(s, e, t);
    }
    return n;
  }
  _compileMaterial(e) {
    const t = new Tt(new qe(), e);
    this._renderer.compile(t, Rs);
  }
  _sceneToCubeUV(e, t, i, n, s) {
    const l = new Pt(90, 1, t, i), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, f = u.toneMapping;
    u.getClearColor(Ch), u.toneMapping = Mi, u.autoClear = false, u.state.buffers.depth.getReversed() && (u.setRenderTarget(n), u.clearDepth(), u.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Tt(new fs(), new Cn({ name: "PMREM.Background", side: Xt, depthWrite: false, depthTest: false })));
    const _ = this._backgroundBox, g = _.material;
    let p = false;
    const x = e.background;
    x ? x.isColor && (g.color.copy(x), e.background = null, p = true) : (g.color.copy(Ch), p = true);
    for (let v = 0; v < 6; v++) {
      const M = v % 3;
      M === 0 ? (l.up.set(0, c[v], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + h[v], s.y, s.z)) : M === 1 ? (l.up.set(0, 0, c[v]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + h[v], s.z)) : (l.up.set(0, c[v], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + h[v]));
      const A = this._cubeSize;
      jn(n, M * A, v > 2 ? A : 0, A, A), u.setRenderTarget(n), p && u.render(_, l), u.render(e, l);
    }
    u.toneMapping = f, u.autoClear = d, e.background = x;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, n = e.mapping === Fi || e.mapping === Tn;
    n ? (this._cubemapMaterial === null && (this._cubemapMaterial = Lh()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ph());
    const s = n ? this._cubemapMaterial : this._equirectMaterial, o = this._lodMeshes[0];
    o.material = s;
    const a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    jn(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(o, Rs);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = false;
    const n = this._lodMeshes.length;
    for (let s = 1; s < n; s++) this._applyGGXFilter(e, s - 1, s);
    t.autoClear = i;
  }
  _applyGGXFilter(e, t, i) {
    const n = this._renderer, s = this._pingPongRenderTarget, o = this._ggxMaterial, a = this._lodMeshes[i];
    a.material = o;
    const l = o.uniforms, c = i / (this._lodMeshes.length - 1), h = t / (this._lodMeshes.length - 1), u = Math.sqrt(c * c - h * h), d = 0 + c * 1.25, f = u * d, { _lodMax: m } = this, _ = this._sizeLods[i], g = 3 * _ * (i > m - $i ? i - m + $i : 0), p = 4 * (this._cubeSize - _);
    l.envMap.value = e.texture, l.roughness.value = f, l.mipInt.value = m - t, jn(s, g, p, 3 * _, 2 * _), n.setRenderTarget(s), n.render(a, Rs), l.envMap.value = s.texture, l.roughness.value = 0, l.mipInt.value = m - i, jn(e, g, p, 3 * _, 2 * _), n.setRenderTarget(e), n.render(a, Rs);
  }
  _blur(e, t, i, n, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, i, n, "latitudinal", s), this._halfBlur(o, e, i, i, n, "longitudinal", s);
  }
  _halfBlur(e, t, i, n, s, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && Le("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = this._lodMeshes[n];
    u.material = c;
    const d = c.uniforms, f = this._sizeLods[i] - 1, m = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * xn - 1), _ = s / m, g = isFinite(s) ? 1 + Math.floor(h * _) : xn;
    g > xn && de(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xn}`);
    const p = [];
    let x = 0;
    for (let C = 0; C < xn; ++C) {
      const P = C / _, S = Math.exp(-P * P / 2);
      p.push(S), C === 0 ? x += S : C < g && (x += 2 * S);
    }
    for (let C = 0; C < p.length; C++) p[C] = p[C] / x;
    d.envMap.value = e.texture, d.samples.value = g, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: v } = this;
    d.dTheta.value = m, d.mipInt.value = v - i;
    const M = this._sizeLods[n], A = 3 * M * (n > v - $i ? n - v + $i : 0), w = 4 * (this._cubeSize - M);
    jn(t, A, w, 3 * M, 2 * M), l.setRenderTarget(t), l.render(u, Rs);
  }
}
function bv(r) {
  const e = [], t = [], i = [];
  let n = r;
  const s = r - $i + 1 + Eh.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, n);
    e.push(a);
    let l = 1 / a;
    o > r - $i ? l = Eh[o - r + $i - 1] : o === 0 && (l = 0), t.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, m = 6, _ = 3, g = 2, p = 1, x = new Float32Array(_ * m * f), v = new Float32Array(g * m * f), M = new Float32Array(p * m * f);
    for (let w = 0; w < f; w++) {
      const C = w % 3 * 2 / 3 - 1, P = w > 2 ? 0 : -1, S = [C, P, 0, C + 2 / 3, P, 0, C + 2 / 3, P + 1, 0, C, P, 0, C + 2 / 3, P + 1, 0, C, P + 1, 0];
      x.set(S, _ * m * w), v.set(d, g * m * w);
      const b = [w, w, w, w, w, w];
      M.set(b, p * m * w);
    }
    const A = new qe();
    A.setAttribute("position", new ut(x, _)), A.setAttribute("uv", new ut(v, g)), A.setAttribute("faceIndex", new ut(M, p)), i.push(new Tt(A, null)), n > $i && n--;
  }
  return { lodMeshes: i, sizeLods: e, sigmas: t };
}
function Ih(r, e, t) {
  const i = new ai(r, e, t);
  return i.texture.mapping = $s, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
}
function jn(r, e, t, i, n) {
  r.viewport.set(e, t, i, n), r.scissor.set(e, t, i, n);
}
function Tv(r, e, t) {
  return new fi({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: Mv, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: wo(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`, blending: Ni, depthTest: false, depthWrite: false });
}
function Av(r, e, t) {
  const i = new Float32Array(xn), n = new R(0, 1, 0);
  return new fi({ name: "SphericalGaussianBlur", defines: { n: xn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: n } }, vertexShader: wo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Ni, depthTest: false, depthWrite: false });
}
function Ph() {
  return new fi({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: wo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Ni, depthTest: false, depthWrite: false });
}
function Lh() {
  return new fi({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: wo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Ni, depthTest: false, depthWrite: false });
}
function wo() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function wv(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === jr || l === eo, h = l === Fi || l === Tn;
      if (c || h) {
        let u = e.get(a);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== d) return t === null && (t = new Rh(r)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const f = a.image;
          return c && f && f.height > 0 || h && f && n(f) ? (t === null && (t = new Rh(r)), u = c ? t.fromEquirectangular(a) : t.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), a.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return a;
  }
  function n(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: i, dispose: o };
}
function Ev(r) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    const n = r.getExtension(i);
    return e[i] = n, n;
  }
  return { has: function(i) {
    return t(i) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(i) {
    const n = t(i);
    return n === null && Ws("WebGLRenderer: " + i + " extension not supported."), n;
  } };
}
function Cv(r, e, t, i) {
  const n = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const m in d.attributes) e.remove(d.attributes[m]);
    d.removeEventListener("dispose", o), delete n[d.id];
    const f = s.get(d);
    f && (e.remove(f), s.delete(d)), i.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, d) {
    return n[d.id] === true || (d.addEventListener("dispose", o), n[d.id] = true, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const f in d) e.update(d[f], r.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [], f = u.index, m = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const x = f.array;
      _ = f.version;
      for (let v = 0, M = x.length; v < M; v += 3) {
        const A = x[v + 0], w = x[v + 1], C = x[v + 2];
        d.push(A, w, w, C, C, A);
      }
    } else if (m !== void 0) {
      const x = m.array;
      _ = m.version;
      for (let v = 0, M = x.length / 3 - 1; v < M; v += 3) {
        const A = v + 0, w = v + 1, C = v + 2;
        d.push(A, w, w, C, C, A);
      }
    } else return;
    const g = new (uu(d) ? gu : mu)(d, 1);
    g.version = _;
    const p = s.get(u);
    p && e.remove(p), s.set(u, g);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && c(u);
    } else c(u);
    return s.get(u);
  }
  return { get: a, update: l, getWireframeAttribute: h };
}
function Rv(r, e, t) {
  let i;
  function n(d) {
    i = d;
  }
  let s, o;
  function a(d) {
    s = d.type, o = d.bytesPerElement;
  }
  function l(d, f) {
    r.drawElements(i, f, s, d * o), t.update(f, i, 1);
  }
  function c(d, f, m) {
    m !== 0 && (r.drawElementsInstanced(i, f, s, d * o, m), t.update(f, i, m));
  }
  function h(d, f, m) {
    if (m === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, f, 0, s, d, 0, m);
    let g = 0;
    for (let p = 0; p < m; p++) g += f[p];
    t.update(g, i, 1);
  }
  function u(d, f, m, _) {
    if (m === 0) return;
    const g = e.get("WEBGL_multi_draw");
    if (g === null) for (let p = 0; p < d.length; p++) c(d[p] / o, f[p], _[p]);
    else {
      g.multiDrawElementsInstancedWEBGL(i, f, 0, s, d, 0, _, 0, m);
      let p = 0;
      for (let x = 0; x < m; x++) p += f[x] * _[x];
      t.update(p, i, 1);
    }
  }
  this.setMode = n, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function Iv(r) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(s, o, a) {
    switch (t.calls++, o) {
      case r.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case r.LINES:
        t.lines += a * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += a * s;
        break;
      case r.POINTS:
        t.points += a * s;
        break;
      default:
        Le("WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function n() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: n, update: i };
}
function Pv(r, e, t) {
  const i = /* @__PURE__ */ new WeakMap(), n = new pt();
  function s(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = i.get(a);
    if (d === void 0 || d.count !== u) {
      let f = function() {
        P.dispose(), i.delete(a), a.removeEventListener("dispose", f);
      };
      d !== void 0 && d.texture.dispose();
      const m = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, g = a.morphAttributes.color !== void 0, p = a.morphAttributes.position || [], x = a.morphAttributes.normal || [], v = a.morphAttributes.color || [];
      let M = 0;
      m === true && (M = 1), _ === true && (M = 2), g === true && (M = 3);
      let A = a.attributes.position.count * M, w = 1;
      A > e.maxTextureSize && (w = Math.ceil(A / e.maxTextureSize), A = e.maxTextureSize);
      const C = new Float32Array(A * w * 4 * u), P = new Il(C, A, w, u);
      P.type = Ht, P.needsUpdate = true;
      const S = M * 4;
      for (let b = 0; b < u; b++) {
        const L = p[b], O = x[b], B = v[b], G = A * w * 4 * b;
        for (let q = 0; q < L.count; q++) {
          const V = q * S;
          m === true && (n.fromBufferAttribute(L, q), C[G + V + 0] = n.x, C[G + V + 1] = n.y, C[G + V + 2] = n.z, C[G + V + 3] = 0), _ === true && (n.fromBufferAttribute(O, q), C[G + V + 4] = n.x, C[G + V + 5] = n.y, C[G + V + 6] = n.z, C[G + V + 7] = 0), g === true && (n.fromBufferAttribute(B, q), C[G + V + 8] = n.x, C[G + V + 9] = n.y, C[G + V + 10] = n.z, C[G + V + 11] = B.itemSize === 4 ? n.w : 1);
        }
      }
      d = { count: u, texture: P, size: new K(A, w) }, i.set(a, d), a.addEventListener("dispose", f);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(r, "morphTexture", o.morphTexture, t);
    else {
      let f = 0;
      for (let _ = 0; _ < c.length; _++) f += c[_];
      const m = a.morphTargetsRelative ? 1 : 1 - f;
      l.getUniforms().setValue(r, "morphTargetBaseInfluence", m), l.getUniforms().setValue(r, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(r, "morphTargetsTextureSize", d.size);
  }
  return { update: s };
}
function Lv(r, e, t, i) {
  let n = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = i.render.frame, h = l.geometry, u = e.get(l, h);
    if (n.get(u) !== c && (e.update(u), n.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), n.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), n.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      n.get(d) !== c && (d.update(), n.set(d, c));
    }
    return u;
  }
  function o() {
    n = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const Dv = { [$h]: "LINEAR_TONE_MAPPING", [Kh]: "REINHARD_TONE_MAPPING", [Qh]: "CINEON_TONE_MAPPING", [jh]: "ACES_FILMIC_TONE_MAPPING", [tu]: "AGX_TONE_MAPPING", [iu]: "NEUTRAL_TONE_MAPPING", [eu]: "CUSTOM_TONE_MAPPING" };
function Uv(r, e, t, i, n) {
  const s = new ai(e, t, { type: r, depthBuffer: i, stencilBuffer: n }), o = new ai(e, t, { type: Bi, depthBuffer: false, stencilBuffer: false }), a = new qe();
  a.setAttribute("position", new Ae([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), a.setAttribute("uv", new Ae([0, 2, 0, 0, 2, 0], 2));
  const l = new Du({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`, fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`, depthTest: false, depthWrite: false }), c = new Tt(a, l), h = new Ao(-1, 1, 1, -1, 0, 1);
  let u = null, d = null, f = false, m, _ = null, g = [], p = false;
  this.setSize = function(x, v) {
    s.setSize(x, v), o.setSize(x, v);
    for (let M = 0; M < g.length; M++) {
      const A = g[M];
      A.setSize && A.setSize(x, v);
    }
  }, this.setEffects = function(x) {
    g = x, p = g.length > 0 && g[0].isRenderPass === true;
    const v = s.width, M = s.height;
    for (let A = 0; A < g.length; A++) {
      const w = g[A];
      w.setSize && w.setSize(v, M);
    }
  }, this.begin = function(x, v) {
    if (f || x.toneMapping === Mi && g.length === 0) return false;
    if (_ = v, v !== null) {
      const M = v.width, A = v.height;
      (s.width !== M || s.height !== A) && this.setSize(M, A);
    }
    return p === false && x.setRenderTarget(s), m = x.toneMapping, x.toneMapping = Mi, true;
  }, this.hasRenderPass = function() {
    return p;
  }, this.end = function(x, v) {
    x.toneMapping = m, f = true;
    let M = s, A = o;
    for (let w = 0; w < g.length; w++) {
      const C = g[w];
      if (C.enabled !== false && (C.render(x, A, M, v), C.needsSwap !== false)) {
        const P = M;
        M = A, A = P;
      }
    }
    if (u !== x.outputColorSpace || d !== x.toneMapping) {
      u = x.outputColorSpace, d = x.toneMapping, l.defines = {}, je.getTransfer(u) === rt && (l.defines.SRGB_TRANSFER = "");
      const w = Dv[d];
      w && (l.defines[w] = ""), l.needsUpdate = true;
    }
    l.uniforms.tDiffuse.value = M.texture, x.setRenderTarget(_), x.render(c, h), _ = null, f = false;
  }, this.isCompositing = function() {
    return f;
  }, this.dispose = function() {
    s.dispose(), o.dispose(), a.dispose(), l.dispose();
  };
}
const Yu = new Mt(), _l = new qs(1, 1), Zu = new Il(), Ju = new Pl(), $u = new vo(), Dh = [], Uh = [], Nh = new Float32Array(16), Oh = new Float32Array(9), Fh = new Float32Array(4);
function gs(r, e, t) {
  const i = r[0];
  if (i <= 0 || i > 0) return r;
  const n = e * t;
  let s = Dh[n];
  if (s === void 0 && (s = new Float32Array(n), Dh[n] = s), e !== 0) {
    i.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) a += t, r[o].toArray(s, a);
  }
  return s;
}
function At(r, e) {
  if (r.length !== e.length) return false;
  for (let t = 0, i = r.length; t < i; t++) if (r[t] !== e[t]) return false;
  return true;
}
function wt(r, e) {
  for (let t = 0, i = e.length; t < i; t++) r[t] = e[t];
}
function Eo(r, e) {
  let t = Uh[e];
  t === void 0 && (t = new Int32Array(e), Uh[e] = t);
  for (let i = 0; i !== e; ++i) t[i] = r.allocateTextureUnit();
  return t;
}
function Nv(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function Ov(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    r.uniform2fv(this.addr, e), wt(t, e);
  }
}
function Fv(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (At(t, e)) return;
    r.uniform3fv(this.addr, e), wt(t, e);
  }
}
function Bv(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    r.uniform4fv(this.addr, e), wt(t, e);
  }
}
function zv(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (At(t, e)) return;
    r.uniformMatrix2fv(this.addr, false, e), wt(t, e);
  } else {
    if (At(t, i)) return;
    Fh.set(i), r.uniformMatrix2fv(this.addr, false, Fh), wt(t, i);
  }
}
function Vv(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (At(t, e)) return;
    r.uniformMatrix3fv(this.addr, false, e), wt(t, e);
  } else {
    if (At(t, i)) return;
    Oh.set(i), r.uniformMatrix3fv(this.addr, false, Oh), wt(t, i);
  }
}
function kv(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (At(t, e)) return;
    r.uniformMatrix4fv(this.addr, false, e), wt(t, e);
  } else {
    if (At(t, i)) return;
    Nh.set(i), r.uniformMatrix4fv(this.addr, false, Nh), wt(t, i);
  }
}
function Gv(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Hv(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    r.uniform2iv(this.addr, e), wt(t, e);
  }
}
function Wv(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (At(t, e)) return;
    r.uniform3iv(this.addr, e), wt(t, e);
  }
}
function Xv(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    r.uniform4iv(this.addr, e), wt(t, e);
  }
}
function qv(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function Yv(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    r.uniform2uiv(this.addr, e), wt(t, e);
  }
}
function Zv(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (At(t, e)) return;
    r.uniform3uiv(this.addr, e), wt(t, e);
  }
}
function Jv(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    r.uniform4uiv(this.addr, e), wt(t, e);
  }
}
function $v(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n);
  let s;
  this.type === r.SAMPLER_2D_SHADOW ? (_l.compareFunction = t.isReversedDepthBuffer() ? Cl : El, s = _l) : s = Yu, t.setTexture2D(e || s, n);
}
function Kv(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTexture3D(e || Ju, n);
}
function Qv(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTextureCube(e || $u, n);
}
function jv(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTexture2DArray(e || Zu, n);
}
function e0(r) {
  switch (r) {
    case 5126:
      return Nv;
    case 35664:
      return Ov;
    case 35665:
      return Fv;
    case 35666:
      return Bv;
    case 35674:
      return zv;
    case 35675:
      return Vv;
    case 35676:
      return kv;
    case 5124:
    case 35670:
      return Gv;
    case 35667:
    case 35671:
      return Hv;
    case 35668:
    case 35672:
      return Wv;
    case 35669:
    case 35673:
      return Xv;
    case 5125:
      return qv;
    case 36294:
      return Yv;
    case 36295:
      return Zv;
    case 36296:
      return Jv;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return $v;
    case 35679:
    case 36299:
    case 36307:
      return Kv;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qv;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return jv;
  }
}
function t0(r, e) {
  r.uniform1fv(this.addr, e);
}
function i0(r, e) {
  const t = gs(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function n0(r, e) {
  const t = gs(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function s0(r, e) {
  const t = gs(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function r0(r, e) {
  const t = gs(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, false, t);
}
function o0(r, e) {
  const t = gs(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, false, t);
}
function a0(r, e) {
  const t = gs(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, false, t);
}
function l0(r, e) {
  r.uniform1iv(this.addr, e);
}
function c0(r, e) {
  r.uniform2iv(this.addr, e);
}
function h0(r, e) {
  r.uniform3iv(this.addr, e);
}
function u0(r, e) {
  r.uniform4iv(this.addr, e);
}
function d0(r, e) {
  r.uniform1uiv(this.addr, e);
}
function f0(r, e) {
  r.uniform2uiv(this.addr, e);
}
function p0(r, e) {
  r.uniform3uiv(this.addr, e);
}
function m0(r, e) {
  r.uniform4uiv(this.addr, e);
}
function g0(r, e, t) {
  const i = this.cache, n = e.length, s = Eo(t, n);
  At(i, s) || (r.uniform1iv(this.addr, s), wt(i, s));
  let o;
  this.type === r.SAMPLER_2D_SHADOW ? o = _l : o = Yu;
  for (let a = 0; a !== n; ++a) t.setTexture2D(e[a] || o, s[a]);
}
function _0(r, e, t) {
  const i = this.cache, n = e.length, s = Eo(t, n);
  At(i, s) || (r.uniform1iv(this.addr, s), wt(i, s));
  for (let o = 0; o !== n; ++o) t.setTexture3D(e[o] || Ju, s[o]);
}
function v0(r, e, t) {
  const i = this.cache, n = e.length, s = Eo(t, n);
  At(i, s) || (r.uniform1iv(this.addr, s), wt(i, s));
  for (let o = 0; o !== n; ++o) t.setTextureCube(e[o] || $u, s[o]);
}
function x0(r, e, t) {
  const i = this.cache, n = e.length, s = Eo(t, n);
  At(i, s) || (r.uniform1iv(this.addr, s), wt(i, s));
  for (let o = 0; o !== n; ++o) t.setTexture2DArray(e[o] || Zu, s[o]);
}
function y0(r) {
  switch (r) {
    case 5126:
      return t0;
    case 35664:
      return i0;
    case 35665:
      return n0;
    case 35666:
      return s0;
    case 35674:
      return r0;
    case 35675:
      return o0;
    case 35676:
      return a0;
    case 5124:
    case 35670:
      return l0;
    case 35667:
    case 35671:
      return c0;
    case 35668:
    case 35672:
      return h0;
    case 35669:
    case 35673:
      return u0;
    case 5125:
      return d0;
    case 36294:
      return f0;
    case 36295:
      return p0;
    case 36296:
      return m0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return g0;
    case 35679:
    case 36299:
    case 36307:
      return _0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return v0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return x0;
  }
}
class M0 {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = e0(t.type);
  }
}
class S0 {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = y0(t.type);
  }
}
class b0 {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const n = this.seq;
    for (let s = 0, o = n.length; s !== o; ++s) {
      const a = n[s];
      a.setValue(e, t[a.id], i);
    }
  }
}
const ya = /(\w+)(\])?(\[|\.)?/g;
function Bh(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function T0(r, e, t) {
  const i = r.name, n = i.length;
  for (ya.lastIndex = 0; ; ) {
    const s = ya.exec(i), o = ya.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === n) {
      Bh(t, c === void 0 ? new M0(a, r, e) : new S0(a, r, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new b0(a), Bh(t, u)), t = u;
    }
  }
}
class Qr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let o = 0; o < i; ++o) {
      const a = e.getActiveUniform(t, o), l = e.getUniformLocation(t, a.name);
      T0(a, l, this);
    }
    const n = [], s = [];
    for (const o of this.seq) o.type === e.SAMPLER_2D_SHADOW || o.type === e.SAMPLER_CUBE_SHADOW || o.type === e.SAMPLER_2D_ARRAY_SHADOW ? n.push(o) : s.push(o);
    n.length > 0 && (this.seq = n.concat(s));
  }
  setValue(e, t, i, n) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, i, n);
  }
  setOptional(e, t, i) {
    const n = t[i];
    n !== void 0 && this.setValue(e, i, n);
  }
  static upload(e, t, i, n) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], l = i[a.id];
      l.needsUpdate !== false && a.setValue(e, l.value, n);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let n = 0, s = e.length; n !== s; ++n) {
      const o = e[n];
      o.id in t && i.push(o);
    }
    return i;
  }
}
function zh(r, e, t) {
  const i = r.createShader(e);
  return r.shaderSource(i, t), r.compileShader(i), i;
}
const A0 = 37297;
let w0 = 0;
function E0(r, e) {
  const t = r.split(`
`), i = [], n = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = n; o < s; o++) {
    const a = o + 1;
    i.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return i.join(`
`);
}
const Vh = new Ye();
function C0(r) {
  je._getMatrix(Vh, je.workingColorSpace, r);
  const e = `mat3( ${Vh.elements.map((t) => t.toFixed(4))} )`;
  switch (je.getTransfer(r)) {
    case ro:
      return [e, "LinearTransferOETF"];
    case rt:
      return [e, "sRGBTransferOETF"];
    default:
      return de("WebGLProgram: Unsupported color space: ", r), [e, "LinearTransferOETF"];
  }
}
function kh(r, e, t) {
  const i = r.getShaderParameter(e, r.COMPILE_STATUS), s = (r.getShaderInfoLog(e) || "").trim();
  if (i && s === "") return "";
  const o = /ERROR: 0:(\d+)/.exec(s);
  if (o) {
    const a = parseInt(o[1]);
    return t.toUpperCase() + `

` + s + `

` + E0(r.getShaderSource(e), a);
  } else return s;
}
function R0(r, e) {
  const t = C0(e);
  return [`vec4 ${r}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
const I0 = { [$h]: "Linear", [Kh]: "Reinhard", [Qh]: "Cineon", [jh]: "ACESFilmic", [tu]: "AgX", [iu]: "Neutral", [eu]: "Custom" };
function P0(r, e) {
  const t = I0[e];
  return t === void 0 ? (de("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + r + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Xr = new R();
function L0() {
  je.getLuminanceCoefficients(Xr);
  const r = Xr.x.toFixed(4), e = Xr.y.toFixed(4), t = Xr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function D0(r) {
  return [r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Os).join(`
`);
}
function U0(r) {
  const e = [];
  for (const t in r) {
    const i = r[t];
    i !== false && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function N0(r, e) {
  const t = {}, i = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let n = 0; n < i; n++) {
    const s = r.getActiveAttrib(e, n), o = s.name;
    let a = 1;
    s.type === r.FLOAT_MAT2 && (a = 2), s.type === r.FLOAT_MAT3 && (a = 3), s.type === r.FLOAT_MAT4 && (a = 4), t[o] = { type: s.type, location: r.getAttribLocation(e, o), locationSize: a };
  }
  return t;
}
function Os(r) {
  return r !== "";
}
function Gh(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Hh(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const O0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function vl(r) {
  return r.replace(O0, B0);
}
const F0 = /* @__PURE__ */ new Map();
function B0(r, e) {
  let t = Je[e];
  if (t === void 0) {
    const i = F0.get(e);
    if (i !== void 0) t = Je[i], de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return vl(t);
}
const z0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Wh(r) {
  return r.replace(z0, V0);
}
function V0(r, e, t, i) {
  let n = "";
  for (let s = parseInt(e); s < parseInt(t); s++) n += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return n;
}
function Xh(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
const k0 = { [qr]: "SHADOWMAP_TYPE_PCF", [Ps]: "SHADOWMAP_TYPE_VSM" };
function G0(r) {
  return k0[r.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const H0 = { [Fi]: "ENVMAP_TYPE_CUBE", [Tn]: "ENVMAP_TYPE_CUBE", [$s]: "ENVMAP_TYPE_CUBE_UV" };
function W0(r) {
  return r.envMap === false ? "ENVMAP_TYPE_CUBE" : H0[r.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const X0 = { [Tn]: "ENVMAP_MODE_REFRACTION" };
function q0(r) {
  return r.envMap === false ? "ENVMAP_MODE_REFLECTION" : X0[r.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const Y0 = { [go]: "ENVMAP_BLENDING_MULTIPLY", [wd]: "ENVMAP_BLENDING_MIX", [Ed]: "ENVMAP_BLENDING_ADD" };
function Z0(r) {
  return r.envMap === false ? "ENVMAP_BLENDING_NONE" : Y0[r.combine] || "ENVMAP_BLENDING_NONE";
}
function J0(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: i, maxMip: t };
}
function $0(r, e, t, i) {
  const n = r.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = G0(t), c = W0(t), h = q0(t), u = Z0(t), d = J0(t), f = D0(t), m = U0(s), _ = n.createProgram();
  let g, p, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m].filter(Os).join(`
`), g.length > 0 && (g += `
`), p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m].filter(Os).join(`
`), p.length > 0 && (p += `
`)) : (g = [Xh(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Os).join(`
`), p = [Xh(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Mi ? "#define TONE_MAPPING" : "", t.toneMapping !== Mi ? Je.tonemapping_pars_fragment : "", t.toneMapping !== Mi ? P0("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Je.colorspace_pars_fragment, R0("linearToOutputTexel", t.outputColorSpace), L0(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Os).join(`
`)), o = vl(o), o = Gh(o, t), o = Hh(o, t), a = vl(a), a = Gh(a, t), a = Hh(a, t), o = Wh(o), a = Wh(a), t.isRawShaderMaterial !== true && (x = `#version 300 es
`, g = [f, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + g, p = ["#define varying in", t.glslVersion === xc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === xc ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  const v = x + g + o, M = x + p + a, A = zh(n, n.VERTEX_SHADER, v), w = zh(n, n.FRAGMENT_SHADER, M);
  n.attachShader(_, A), n.attachShader(_, w), t.index0AttributeName !== void 0 ? n.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === true && n.bindAttribLocation(_, 0, "position"), n.linkProgram(_);
  function C(L) {
    if (r.debug.checkShaderErrors) {
      const O = n.getProgramInfoLog(_) || "", B = n.getShaderInfoLog(A) || "", G = n.getShaderInfoLog(w) || "", q = O.trim(), V = B.trim(), H = G.trim();
      let j = true, pe = true;
      if (n.getProgramParameter(_, n.LINK_STATUS) === false) if (j = false, typeof r.debug.onShaderError == "function") r.debug.onShaderError(n, _, A, w);
      else {
        const ae = kh(n, A, "vertex"), he = kh(n, w, "fragment");
        Le("THREE.WebGLProgram: Shader Error " + n.getError() + " - VALIDATE_STATUS " + n.getProgramParameter(_, n.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + q + `
` + ae + `
` + he);
      }
      else q !== "" ? de("WebGLProgram: Program Info Log:", q) : (V === "" || H === "") && (pe = false);
      pe && (L.diagnostics = { runnable: j, programLog: q, vertexShader: { log: V, prefix: g }, fragmentShader: { log: H, prefix: p } });
    }
    n.deleteShader(A), n.deleteShader(w), P = new Qr(n, _), S = N0(n, _);
  }
  let P;
  this.getUniforms = function() {
    return P === void 0 && C(this), P;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && C(this), S;
  };
  let b = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return b === false && (b = n.getProgramParameter(_, A0)), b;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), n.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = w0++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = A, this.fragmentShader = w, this;
}
let K0 = 0;
class Q0 {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, n = this._getShaderStage(t), s = this._getShaderStage(i), o = this._getShaderCacheForMaterial(e);
    return o.has(n) === false && (o.add(n), n.usedTimes++), o.has(s) === false && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new j0(e), t.set(e, i)), i;
  }
}
class j0 {
  constructor(e) {
    this.id = K0++, this.code = e, this.usedTimes = 0;
  }
}
function ex(r, e, t, i, n, s, o) {
  const a = new Ll(), l = new Q0(), c = /* @__PURE__ */ new Set(), h = [], u = /* @__PURE__ */ new Map(), d = n.logarithmicDepthBuffer;
  let f = n.precision;
  const m = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function g(S, b, L, O, B) {
    const G = O.fog, q = B.geometry, V = S.isMeshStandardMaterial ? O.environment : null, H = (S.isMeshStandardMaterial ? t : e).get(S.envMap || V), j = H && H.mapping === $s ? H.image.height : null, pe = m[S.type];
    S.precision !== null && (f = n.getMaxPrecision(S.precision), f !== S.precision && de("WebGLProgram.getParameters:", S.precision, "not supported, using", f, "instead."));
    const ae = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, he = ae !== void 0 ? ae.length : 0;
    let We = 0;
    q.morphAttributes.position !== void 0 && (We = 1), q.morphAttributes.normal !== void 0 && (We = 2), q.morphAttributes.color !== void 0 && (We = 3);
    let ke, ot, at, Y;
    if (pe) {
      const nt = xi[pe];
      ke = nt.vertexShader, ot = nt.fragmentShader;
    } else ke = S.vertexShader, ot = S.fragmentShader, l.update(S), at = l.getVertexShaderID(S), Y = l.getFragmentShaderID(S);
    const ee = r.getRenderTarget(), Se = r.state.buffers.depth.getReversed(), Oe = B.isInstancedMesh === true, Te = B.isBatchedMesh === true, Qe = !!S.map, lt = !!S.matcap, Xe = !!H, $ = !!S.aoMap, ie = !!S.lightMap, Q = !!S.bumpMap, ge = !!S.normalMap, I = !!S.displacementMap, De = !!S.emissiveMap, xe = !!S.metalnessMap, Fe = !!S.roughnessMap, re = S.anisotropy > 0, E = S.clearcoat > 0, y = S.dispersion > 0, U = S.iridescence > 0, W = S.sheen > 0, Z = S.transmission > 0, X = re && !!S.anisotropyMap, Re = E && !!S.clearcoatMap, oe = E && !!S.clearcoatNormalMap, Ee = E && !!S.clearcoatRoughnessMap, Be = U && !!S.iridescenceMap, te = U && !!S.iridescenceThicknessMap, ue = W && !!S.sheenColorMap, Ce = W && !!S.sheenRoughnessMap, Ie = !!S.specularMap, ce = !!S.specularColorMap, $e = !!S.specularIntensityMap, D = Z && !!S.transmissionMap, ve = Z && !!S.thicknessMap, se = !!S.gradientMap, ye = !!S.alphaMap, ne = S.alphaTest > 0, J = !!S.alphaHash, le = !!S.extensions;
    let He = Mi;
    S.toneMapped && (ee === null || ee.isXRRenderTarget === true) && (He = r.toneMapping);
    const dt = { shaderID: pe, shaderType: S.type, shaderName: S.name, vertexShader: ke, fragmentShader: ot, defines: S.defines, customVertexShaderID: at, customFragmentShaderID: Y, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: f, batching: Te, batchingColor: Te && B._colorsTexture !== null, instancing: Oe, instancingColor: Oe && B.instanceColor !== null, instancingMorph: Oe && B.morphTexture !== null, outputColorSpace: ee === null ? r.outputColorSpace : ee.isXRRenderTarget === true ? ee.texture.colorSpace : ls, alphaToCoverage: !!S.alphaToCoverage, map: Qe, matcap: lt, envMap: Xe, envMapMode: Xe && H.mapping, envMapCubeUVHeight: j, aoMap: $, lightMap: ie, bumpMap: Q, normalMap: ge, displacementMap: I, emissiveMap: De, normalMapObjectSpace: ge && S.normalMapType === Dd, normalMapTangentSpace: ge && S.normalMapType === En, metalnessMap: xe, roughnessMap: Fe, anisotropy: re, anisotropyMap: X, clearcoat: E, clearcoatMap: Re, clearcoatNormalMap: oe, clearcoatRoughnessMap: Ee, dispersion: y, iridescence: U, iridescenceMap: Be, iridescenceThicknessMap: te, sheen: W, sheenColorMap: ue, sheenRoughnessMap: Ce, specularMap: Ie, specularColorMap: ce, specularIntensityMap: $e, transmission: Z, transmissionMap: D, thicknessMap: ve, gradientMap: se, opaque: S.transparent === false && S.blending === ns && S.alphaToCoverage === false, alphaMap: ye, alphaTest: ne, alphaHash: J, combine: S.combine, mapUv: Qe && _(S.map.channel), aoMapUv: $ && _(S.aoMap.channel), lightMapUv: ie && _(S.lightMap.channel), bumpMapUv: Q && _(S.bumpMap.channel), normalMapUv: ge && _(S.normalMap.channel), displacementMapUv: I && _(S.displacementMap.channel), emissiveMapUv: De && _(S.emissiveMap.channel), metalnessMapUv: xe && _(S.metalnessMap.channel), roughnessMapUv: Fe && _(S.roughnessMap.channel), anisotropyMapUv: X && _(S.anisotropyMap.channel), clearcoatMapUv: Re && _(S.clearcoatMap.channel), clearcoatNormalMapUv: oe && _(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Ee && _(S.clearcoatRoughnessMap.channel), iridescenceMapUv: Be && _(S.iridescenceMap.channel), iridescenceThicknessMapUv: te && _(S.iridescenceThicknessMap.channel), sheenColorMapUv: ue && _(S.sheenColorMap.channel), sheenRoughnessMapUv: Ce && _(S.sheenRoughnessMap.channel), specularMapUv: Ie && _(S.specularMap.channel), specularColorMapUv: ce && _(S.specularColorMap.channel), specularIntensityMapUv: $e && _(S.specularIntensityMap.channel), transmissionMapUv: D && _(S.transmissionMap.channel), thicknessMapUv: ve && _(S.thicknessMap.channel), alphaMapUv: ye && _(S.alphaMap.channel), vertexTangents: !!q.attributes.tangent && (ge || re), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!q.attributes.color && q.attributes.color.itemSize === 4, pointsUvs: B.isPoints === true && !!q.attributes.uv && (Qe || ye), fog: !!G, useFog: S.fog === true, fogExp2: !!G && G.isFogExp2, flatShading: S.flatShading === true && S.wireframe === false, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: d, reversedDepthBuffer: Se, skinning: B.isSkinnedMesh === true, morphTargets: q.morphAttributes.position !== void 0, morphNormals: q.morphAttributes.normal !== void 0, morphColors: q.morphAttributes.color !== void 0, morphTargetsCount: he, morphTextureStride: We, numDirLights: b.directional.length, numPointLights: b.point.length, numSpotLights: b.spot.length, numSpotLightMaps: b.spotLightMap.length, numRectAreaLights: b.rectArea.length, numHemiLights: b.hemi.length, numDirLightShadows: b.directionalShadowMap.length, numPointLightShadows: b.pointShadowMap.length, numSpotLightShadows: b.spotShadowMap.length, numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps, numLightProbes: b.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: S.dithering, shadowMapEnabled: r.shadowMap.enabled && L.length > 0, shadowMapType: r.shadowMap.type, toneMapping: He, decodeVideoTexture: Qe && S.map.isVideoTexture === true && je.getTransfer(S.map.colorSpace) === rt, decodeVideoTextureEmissive: De && S.emissiveMap.isVideoTexture === true && je.getTransfer(S.emissiveMap.colorSpace) === rt, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === Pi, flipSided: S.side === Xt, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: le && S.extensions.clipCullDistance === true && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (le && S.extensions.multiDraw === true || Te) && i.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return dt.vertexUv1s = c.has(1), dt.vertexUv2s = c.has(2), dt.vertexUv3s = c.has(3), c.clear(), dt;
  }
  function p(S) {
    const b = [];
    if (S.shaderID ? b.push(S.shaderID) : (b.push(S.customVertexShaderID), b.push(S.customFragmentShaderID)), S.defines !== void 0) for (const L in S.defines) b.push(L), b.push(S.defines[L]);
    return S.isRawShaderMaterial === false && (x(b, S), v(b, S), b.push(r.outputColorSpace)), b.push(S.customProgramCacheKey), b.join();
  }
  function x(S, b) {
    S.push(b.precision), S.push(b.outputColorSpace), S.push(b.envMapMode), S.push(b.envMapCubeUVHeight), S.push(b.mapUv), S.push(b.alphaMapUv), S.push(b.lightMapUv), S.push(b.aoMapUv), S.push(b.bumpMapUv), S.push(b.normalMapUv), S.push(b.displacementMapUv), S.push(b.emissiveMapUv), S.push(b.metalnessMapUv), S.push(b.roughnessMapUv), S.push(b.anisotropyMapUv), S.push(b.clearcoatMapUv), S.push(b.clearcoatNormalMapUv), S.push(b.clearcoatRoughnessMapUv), S.push(b.iridescenceMapUv), S.push(b.iridescenceThicknessMapUv), S.push(b.sheenColorMapUv), S.push(b.sheenRoughnessMapUv), S.push(b.specularMapUv), S.push(b.specularColorMapUv), S.push(b.specularIntensityMapUv), S.push(b.transmissionMapUv), S.push(b.thicknessMapUv), S.push(b.combine), S.push(b.fogExp2), S.push(b.sizeAttenuation), S.push(b.morphTargetsCount), S.push(b.morphAttributeCount), S.push(b.numDirLights), S.push(b.numPointLights), S.push(b.numSpotLights), S.push(b.numSpotLightMaps), S.push(b.numHemiLights), S.push(b.numRectAreaLights), S.push(b.numDirLightShadows), S.push(b.numPointLightShadows), S.push(b.numSpotLightShadows), S.push(b.numSpotLightShadowsWithMaps), S.push(b.numLightProbes), S.push(b.shadowMapType), S.push(b.toneMapping), S.push(b.numClippingPlanes), S.push(b.numClipIntersection), S.push(b.depthPacking);
  }
  function v(S, b) {
    a.disableAll(), b.instancing && a.enable(0), b.instancingColor && a.enable(1), b.instancingMorph && a.enable(2), b.matcap && a.enable(3), b.envMap && a.enable(4), b.normalMapObjectSpace && a.enable(5), b.normalMapTangentSpace && a.enable(6), b.clearcoat && a.enable(7), b.iridescence && a.enable(8), b.alphaTest && a.enable(9), b.vertexColors && a.enable(10), b.vertexAlphas && a.enable(11), b.vertexUv1s && a.enable(12), b.vertexUv2s && a.enable(13), b.vertexUv3s && a.enable(14), b.vertexTangents && a.enable(15), b.anisotropy && a.enable(16), b.alphaHash && a.enable(17), b.batching && a.enable(18), b.dispersion && a.enable(19), b.batchingColor && a.enable(20), b.gradientMap && a.enable(21), S.push(a.mask), a.disableAll(), b.fog && a.enable(0), b.useFog && a.enable(1), b.flatShading && a.enable(2), b.logarithmicDepthBuffer && a.enable(3), b.reversedDepthBuffer && a.enable(4), b.skinning && a.enable(5), b.morphTargets && a.enable(6), b.morphNormals && a.enable(7), b.morphColors && a.enable(8), b.premultipliedAlpha && a.enable(9), b.shadowMapEnabled && a.enable(10), b.doubleSided && a.enable(11), b.flipSided && a.enable(12), b.useDepthPacking && a.enable(13), b.dithering && a.enable(14), b.transmission && a.enable(15), b.sheen && a.enable(16), b.opaque && a.enable(17), b.pointsUvs && a.enable(18), b.decodeVideoTexture && a.enable(19), b.decodeVideoTextureEmissive && a.enable(20), b.alphaToCoverage && a.enable(21), S.push(a.mask);
  }
  function M(S) {
    const b = m[S.type];
    let L;
    if (b) {
      const O = xi[b];
      L = bf.clone(O.uniforms);
    } else L = S.uniforms;
    return L;
  }
  function A(S, b) {
    let L = u.get(b);
    return L !== void 0 ? ++L.usedTimes : (L = new $0(r, b, S, s), h.push(L), u.set(b, L)), L;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const b = h.indexOf(S);
      h[b] = h[h.length - 1], h.pop(), u.delete(S.cacheKey), S.destroy();
    }
  }
  function C(S) {
    l.remove(S);
  }
  function P() {
    l.dispose();
  }
  return { getParameters: g, getProgramCacheKey: p, getUniforms: M, acquireProgram: A, releaseProgram: w, releaseShaderCache: C, programs: h, dispose: P };
}
function tx() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(o) {
    return r.has(o);
  }
  function t(o) {
    let a = r.get(o);
    return a === void 0 && (a = {}, r.set(o, a)), a;
  }
  function i(o) {
    r.delete(o);
  }
  function n(o, a, l) {
    r.get(o)[a] = l;
  }
  function s() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: i, update: n, dispose: s };
}
function ix(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function qh(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Yh() {
  const r = [];
  let e = 0;
  const t = [], i = [], n = [];
  function s() {
    e = 0, t.length = 0, i.length = 0, n.length = 0;
  }
  function o(u, d, f, m, _, g) {
    let p = r[e];
    return p === void 0 ? (p = { id: u.id, object: u, geometry: d, material: f, groupOrder: m, renderOrder: u.renderOrder, z: _, group: g }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = m, p.renderOrder = u.renderOrder, p.z = _, p.group = g), e++, p;
  }
  function a(u, d, f, m, _, g) {
    const p = o(u, d, f, m, _, g);
    f.transmission > 0 ? i.push(p) : f.transparent === true ? n.push(p) : t.push(p);
  }
  function l(u, d, f, m, _, g) {
    const p = o(u, d, f, m, _, g);
    f.transmission > 0 ? i.unshift(p) : f.transparent === true ? n.unshift(p) : t.unshift(p);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || ix), i.length > 1 && i.sort(d || qh), n.length > 1 && n.sort(d || qh);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const f = r[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return { opaque: t, transmissive: i, transparent: n, init: s, push: a, unshift: l, finish: h, sort: c };
}
function nx() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(i, n) {
    const s = r.get(i);
    let o;
    return s === void 0 ? (o = new Yh(), r.set(i, [o])) : n >= s.length ? (o = new Yh(), s.push(o)) : o = s[n], o;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function sx() {
  const r = {};
  return { get: function(e) {
    if (r[e.id] !== void 0) return r[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new R(), color: new Me() };
        break;
      case "SpotLight":
        t = { position: new R(), direction: new R(), color: new Me(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new R(), color: new Me(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new R(), skyColor: new Me(), groundColor: new Me() };
        break;
      case "RectAreaLight":
        t = { color: new Me(), position: new R(), halfWidth: new R(), halfHeight: new R() };
        break;
    }
    return r[e.id] = t, t;
  } };
}
function rx() {
  const r = {};
  return { get: function(e) {
    if (r[e.id] !== void 0) return r[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new K() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new K() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new K(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return r[e.id] = t, t;
  } };
}
let ox = 0;
function ax(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function lx(r) {
  const e = new sx(), t = rx(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) i.probe.push(new R());
  const n = new R(), s = new Ge(), o = new Ge();
  function a(c) {
    let h = 0, u = 0, d = 0;
    for (let S = 0; S < 9; S++) i.probe[S].set(0, 0, 0);
    let f = 0, m = 0, _ = 0, g = 0, p = 0, x = 0, v = 0, M = 0, A = 0, w = 0, C = 0;
    c.sort(ax);
    for (let S = 0, b = c.length; S < b; S++) {
      const L = c[S], O = L.color, B = L.intensity, G = L.distance;
      let q = null;
      if (L.shadow && L.shadow.map && (L.shadow.map.texture.format === as ? q = L.shadow.map.texture : q = L.shadow.map.depthTexture || L.shadow.map.texture), L.isAmbientLight) h += O.r * B, u += O.g * B, d += O.b * B;
      else if (L.isLightProbe) {
        for (let V = 0; V < 9; V++) i.probe[V].addScaledVector(L.sh.coefficients[V], B);
        C++;
      } else if (L.isDirectionalLight) {
        const V = e.get(L);
        if (V.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          const H = L.shadow, j = t.get(L);
          j.shadowIntensity = H.intensity, j.shadowBias = H.bias, j.shadowNormalBias = H.normalBias, j.shadowRadius = H.radius, j.shadowMapSize = H.mapSize, i.directionalShadow[f] = j, i.directionalShadowMap[f] = q, i.directionalShadowMatrix[f] = L.shadow.matrix, x++;
        }
        i.directional[f] = V, f++;
      } else if (L.isSpotLight) {
        const V = e.get(L);
        V.position.setFromMatrixPosition(L.matrixWorld), V.color.copy(O).multiplyScalar(B), V.distance = G, V.coneCos = Math.cos(L.angle), V.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), V.decay = L.decay, i.spot[_] = V;
        const H = L.shadow;
        if (L.map && (i.spotLightMap[A] = L.map, A++, H.updateMatrices(L), L.castShadow && w++), i.spotLightMatrix[_] = H.matrix, L.castShadow) {
          const j = t.get(L);
          j.shadowIntensity = H.intensity, j.shadowBias = H.bias, j.shadowNormalBias = H.normalBias, j.shadowRadius = H.radius, j.shadowMapSize = H.mapSize, i.spotShadow[_] = j, i.spotShadowMap[_] = q, M++;
        }
        _++;
      } else if (L.isRectAreaLight) {
        const V = e.get(L);
        V.color.copy(O).multiplyScalar(B), V.halfWidth.set(L.width * 0.5, 0, 0), V.halfHeight.set(0, L.height * 0.5, 0), i.rectArea[g] = V, g++;
      } else if (L.isPointLight) {
        const V = e.get(L);
        if (V.color.copy(L.color).multiplyScalar(L.intensity), V.distance = L.distance, V.decay = L.decay, L.castShadow) {
          const H = L.shadow, j = t.get(L);
          j.shadowIntensity = H.intensity, j.shadowBias = H.bias, j.shadowNormalBias = H.normalBias, j.shadowRadius = H.radius, j.shadowMapSize = H.mapSize, j.shadowCameraNear = H.camera.near, j.shadowCameraFar = H.camera.far, i.pointShadow[m] = j, i.pointShadowMap[m] = q, i.pointShadowMatrix[m] = L.shadow.matrix, v++;
        }
        i.point[m] = V, m++;
      } else if (L.isHemisphereLight) {
        const V = e.get(L);
        V.skyColor.copy(L.color).multiplyScalar(B), V.groundColor.copy(L.groundColor).multiplyScalar(B), i.hemi[p] = V, p++;
      }
    }
    g > 0 && (r.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = me.LTC_FLOAT_1, i.rectAreaLTC2 = me.LTC_FLOAT_2) : (i.rectAreaLTC1 = me.LTC_HALF_1, i.rectAreaLTC2 = me.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = u, i.ambient[2] = d;
    const P = i.hash;
    (P.directionalLength !== f || P.pointLength !== m || P.spotLength !== _ || P.rectAreaLength !== g || P.hemiLength !== p || P.numDirectionalShadows !== x || P.numPointShadows !== v || P.numSpotShadows !== M || P.numSpotMaps !== A || P.numLightProbes !== C) && (i.directional.length = f, i.spot.length = _, i.rectArea.length = g, i.point.length = m, i.hemi.length = p, i.directionalShadow.length = x, i.directionalShadowMap.length = x, i.pointShadow.length = v, i.pointShadowMap.length = v, i.spotShadow.length = M, i.spotShadowMap.length = M, i.directionalShadowMatrix.length = x, i.pointShadowMatrix.length = v, i.spotLightMatrix.length = M + A - w, i.spotLightMap.length = A, i.numSpotLightShadowsWithMaps = w, i.numLightProbes = C, P.directionalLength = f, P.pointLength = m, P.spotLength = _, P.rectAreaLength = g, P.hemiLength = p, P.numDirectionalShadows = x, P.numPointShadows = v, P.numSpotShadows = M, P.numSpotMaps = A, P.numLightProbes = C, i.version = ox++);
  }
  function l(c, h) {
    let u = 0, d = 0, f = 0, m = 0, _ = 0;
    const g = h.matrixWorldInverse;
    for (let p = 0, x = c.length; p < x; p++) {
      const v = c[p];
      if (v.isDirectionalLight) {
        const M = i.directional[u];
        M.direction.setFromMatrixPosition(v.matrixWorld), n.setFromMatrixPosition(v.target.matrixWorld), M.direction.sub(n), M.direction.transformDirection(g), u++;
      } else if (v.isSpotLight) {
        const M = i.spot[f];
        M.position.setFromMatrixPosition(v.matrixWorld), M.position.applyMatrix4(g), M.direction.setFromMatrixPosition(v.matrixWorld), n.setFromMatrixPosition(v.target.matrixWorld), M.direction.sub(n), M.direction.transformDirection(g), f++;
      } else if (v.isRectAreaLight) {
        const M = i.rectArea[m];
        M.position.setFromMatrixPosition(v.matrixWorld), M.position.applyMatrix4(g), o.identity(), s.copy(v.matrixWorld), s.premultiply(g), o.extractRotation(s), M.halfWidth.set(v.width * 0.5, 0, 0), M.halfHeight.set(0, v.height * 0.5, 0), M.halfWidth.applyMatrix4(o), M.halfHeight.applyMatrix4(o), m++;
      } else if (v.isPointLight) {
        const M = i.point[d];
        M.position.setFromMatrixPosition(v.matrixWorld), M.position.applyMatrix4(g), d++;
      } else if (v.isHemisphereLight) {
        const M = i.hemi[_];
        M.direction.setFromMatrixPosition(v.matrixWorld), M.direction.transformDirection(g), _++;
      }
    }
  }
  return { setup: a, setupView: l, state: i };
}
function Zh(r) {
  const e = new lx(r), t = [], i = [];
  function n(h) {
    c.camera = h, t.length = 0, i.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function a() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = { lightsArray: t, shadowsArray: i, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: n, state: c, setupLights: a, setupLightsView: l, pushLight: s, pushShadow: o };
}
function cx(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(n, s = 0) {
    const o = e.get(n);
    let a;
    return o === void 0 ? (a = new Zh(r), e.set(n, [a])) : s >= o.length ? (a = new Zh(r), o.push(a)) : a = o[s], a;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: i };
}
const hx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ux = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, dx = [new R(1, 0, 0), new R(-1, 0, 0), new R(0, 1, 0), new R(0, -1, 0), new R(0, 0, 1), new R(0, 0, -1)], fx = [new R(0, -1, 0), new R(0, -1, 0), new R(0, 0, 1), new R(0, 0, -1), new R(0, -1, 0), new R(0, -1, 0)], Jh = new Ge(), Is = new R(), Ma = new R();
function px(r, e, t) {
  let i = new Qs();
  const n = new K(), s = new K(), o = new pt(), a = new Nu(), l = new Ou(), c = {}, h = t.maxTextureSize, u = { [Ki]: Xt, [Xt]: Ki, [Pi]: Pi }, d = new fi({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new K() }, radius: { value: 4 } }, vertexShader: hx, fragmentShader: ux }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new qe();
  m.setAttribute("position", new ut(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new Tt(m, d), g = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = qr;
  let p = this.type;
  this.render = function(w, C, P) {
    if (g.enabled === false || g.autoUpdate === false && g.needsUpdate === false || w.length === 0) return;
    w.type === ad && (de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), w.type = qr);
    const S = r.getRenderTarget(), b = r.getActiveCubeFace(), L = r.getActiveMipmapLevel(), O = r.state;
    O.setBlending(Ni), O.buffers.depth.getReversed() === true ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(true), O.setScissorTest(false);
    const B = p !== this.type;
    B && C.traverse(function(G) {
      G.material && (Array.isArray(G.material) ? G.material.forEach((q) => q.needsUpdate = true) : G.material.needsUpdate = true);
    });
    for (let G = 0, q = w.length; G < q; G++) {
      const V = w[G], H = V.shadow;
      if (H === void 0) {
        de("WebGLShadowMap:", V, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === false && H.needsUpdate === false) continue;
      n.copy(H.mapSize);
      const j = H.getFrameExtents();
      if (n.multiply(j), s.copy(H.mapSize), (n.x > h || n.y > h) && (n.x > h && (s.x = Math.floor(h / j.x), n.x = s.x * j.x, H.mapSize.x = s.x), n.y > h && (s.y = Math.floor(h / j.y), n.y = s.y * j.y, H.mapSize.y = s.y)), H.map === null || B === true) {
        if (H.map !== null && (H.map.depthTexture !== null && (H.map.depthTexture.dispose(), H.map.depthTexture = null), H.map.dispose()), this.type === Ps) {
          if (V.isPointLight) {
            de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          H.map = new ai(n.x, n.y, { format: as, type: Bi, minFilter: mt, magFilter: mt, generateMipmaps: false }), H.map.texture.name = V.name + ".shadowMap", H.map.depthTexture = new qs(n.x, n.y, Ht), H.map.depthTexture.name = V.name + ".shadowMapDepth", H.map.depthTexture.format = zi, H.map.depthTexture.compareFunction = null, H.map.depthTexture.minFilter = bt, H.map.depthTexture.magFilter = bt;
        } else {
          V.isPointLight ? (H.map = new vu(n.x), H.map.depthTexture = new $f(n.x, di)) : (H.map = new ai(n.x, n.y), H.map.depthTexture = new qs(n.x, n.y, di)), H.map.depthTexture.name = V.name + ".shadowMap", H.map.depthTexture.format = zi;
          const ae = r.state.buffers.depth.getReversed();
          this.type === qr ? (H.map.depthTexture.compareFunction = ae ? Cl : El, H.map.depthTexture.minFilter = mt, H.map.depthTexture.magFilter = mt) : (H.map.depthTexture.compareFunction = null, H.map.depthTexture.minFilter = bt, H.map.depthTexture.magFilter = bt);
        }
        H.camera.updateProjectionMatrix();
      }
      const pe = H.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let ae = 0; ae < pe; ae++) {
        if (H.map.isWebGLCubeRenderTarget) r.setRenderTarget(H.map, ae), r.clear();
        else {
          ae === 0 && (r.setRenderTarget(H.map), r.clear());
          const he = H.getViewport(ae);
          o.set(s.x * he.x, s.y * he.y, s.x * he.z, s.y * he.w), O.viewport(o);
        }
        if (V.isPointLight) {
          const he = H.camera, We = H.matrix, ke = V.distance || he.far;
          ke !== he.far && (he.far = ke, he.updateProjectionMatrix()), Is.setFromMatrixPosition(V.matrixWorld), he.position.copy(Is), Ma.copy(he.position), Ma.add(dx[ae]), he.up.copy(fx[ae]), he.lookAt(Ma), he.updateMatrixWorld(), We.makeTranslation(-Is.x, -Is.y, -Is.z), Jh.multiplyMatrices(he.projectionMatrix, he.matrixWorldInverse), H._frustum.setFromProjectionMatrix(Jh, he.coordinateSystem, he.reversedDepth);
        } else H.updateMatrices(V);
        i = H.getFrustum(), M(C, P, H.camera, V, this.type);
      }
      H.isPointLightShadow !== true && this.type === Ps && x(H, P), H.needsUpdate = false;
    }
    p = this.type, g.needsUpdate = false, r.setRenderTarget(S, b, L);
  };
  function x(w, C) {
    const P = e.update(_);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, f.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = true, f.needsUpdate = true), w.mapPass === null && (w.mapPass = new ai(n.x, n.y, { format: as, type: Bi })), d.uniforms.shadow_pass.value = w.map.depthTexture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, r.setRenderTarget(w.mapPass), r.clear(), r.renderBufferDirect(C, null, P, d, _, null), f.uniforms.shadow_pass.value = w.mapPass.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, r.setRenderTarget(w.map), r.clear(), r.renderBufferDirect(C, null, P, f, _, null);
  }
  function v(w, C, P, S) {
    let b = null;
    const L = P.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
    if (L !== void 0) b = L;
    else if (b = P.isPointLight === true ? l : a, r.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === true) {
      const O = b.uuid, B = C.uuid;
      let G = c[O];
      G === void 0 && (G = {}, c[O] = G);
      let q = G[B];
      q === void 0 && (q = b.clone(), G[B] = q, C.addEventListener("dispose", A)), b = q;
    }
    if (b.visible = C.visible, b.wireframe = C.wireframe, S === Ps ? b.side = C.shadowSide !== null ? C.shadowSide : C.side : b.side = C.shadowSide !== null ? C.shadowSide : u[C.side], b.alphaMap = C.alphaMap, b.alphaTest = C.alphaToCoverage === true ? 0.5 : C.alphaTest, b.map = C.map, b.clipShadows = C.clipShadows, b.clippingPlanes = C.clippingPlanes, b.clipIntersection = C.clipIntersection, b.displacementMap = C.displacementMap, b.displacementScale = C.displacementScale, b.displacementBias = C.displacementBias, b.wireframeLinewidth = C.wireframeLinewidth, b.linewidth = C.linewidth, P.isPointLight === true && b.isMeshDistanceMaterial === true) {
      const O = r.properties.get(b);
      O.light = P;
    }
    return b;
  }
  function M(w, C, P, S, b) {
    if (w.visible === false) return;
    if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && b === Ps) && (!w.frustumCulled || i.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, w.matrixWorld);
      const B = e.update(w), G = w.material;
      if (Array.isArray(G)) {
        const q = B.groups;
        for (let V = 0, H = q.length; V < H; V++) {
          const j = q[V], pe = G[j.materialIndex];
          if (pe && pe.visible) {
            const ae = v(w, pe, S, b);
            w.onBeforeShadow(r, w, C, P, B, ae, j), r.renderBufferDirect(P, null, B, ae, w, j), w.onAfterShadow(r, w, C, P, B, ae, j);
          }
        }
      } else if (G.visible) {
        const q = v(w, G, S, b);
        w.onBeforeShadow(r, w, C, P, B, q, null), r.renderBufferDirect(P, null, B, q, w, null), w.onAfterShadow(r, w, C, P, B, q, null);
      }
    }
    const O = w.children;
    for (let B = 0, G = O.length; B < G; B++) M(O[B], C, P, S, b);
  }
  function A(w) {
    w.target.removeEventListener("dispose", A);
    for (const P in c) {
      const S = c[P], b = w.target.uuid;
      b in S && (S[b].dispose(), delete S[b]);
    }
  }
}
const mx = { [Ta]: Aa, [wa]: Ra, [Ea]: Ia, [os]: Ca, [Aa]: Ta, [Ra]: wa, [Ia]: Ea, [Ca]: os };
function gx(r, e) {
  function t() {
    let D = false;
    const ve = new pt();
    let se = null;
    const ye = new pt(0, 0, 0, 0);
    return { setMask: function(ne) {
      se !== ne && !D && (r.colorMask(ne, ne, ne, ne), se = ne);
    }, setLocked: function(ne) {
      D = ne;
    }, setClear: function(ne, J, le, He, dt) {
      dt === true && (ne *= He, J *= He, le *= He), ve.set(ne, J, le, He), ye.equals(ve) === false && (r.clearColor(ne, J, le, He), ye.copy(ve));
    }, reset: function() {
      D = false, se = null, ye.set(-1, 0, 0, 0);
    } };
  }
  function i() {
    let D = false, ve = false, se = null, ye = null, ne = null;
    return { setReversed: function(J) {
      if (ve !== J) {
        const le = e.get("EXT_clip_control");
        J ? le.clipControlEXT(le.LOWER_LEFT_EXT, le.ZERO_TO_ONE_EXT) : le.clipControlEXT(le.LOWER_LEFT_EXT, le.NEGATIVE_ONE_TO_ONE_EXT), ve = J;
        const He = ne;
        ne = null, this.setClear(He);
      }
    }, getReversed: function() {
      return ve;
    }, setTest: function(J) {
      J ? ee(r.DEPTH_TEST) : Se(r.DEPTH_TEST);
    }, setMask: function(J) {
      se !== J && !D && (r.depthMask(J), se = J);
    }, setFunc: function(J) {
      if (ve && (J = mx[J]), ye !== J) {
        switch (J) {
          case Ta:
            r.depthFunc(r.NEVER);
            break;
          case Aa:
            r.depthFunc(r.ALWAYS);
            break;
          case wa:
            r.depthFunc(r.LESS);
            break;
          case os:
            r.depthFunc(r.LEQUAL);
            break;
          case Ea:
            r.depthFunc(r.EQUAL);
            break;
          case Ca:
            r.depthFunc(r.GEQUAL);
            break;
          case Ra:
            r.depthFunc(r.GREATER);
            break;
          case Ia:
            r.depthFunc(r.NOTEQUAL);
            break;
          default:
            r.depthFunc(r.LEQUAL);
        }
        ye = J;
      }
    }, setLocked: function(J) {
      D = J;
    }, setClear: function(J) {
      ne !== J && (ve && (J = 1 - J), r.clearDepth(J), ne = J);
    }, reset: function() {
      D = false, se = null, ye = null, ne = null, ve = false;
    } };
  }
  function n() {
    let D = false, ve = null, se = null, ye = null, ne = null, J = null, le = null, He = null, dt = null;
    return { setTest: function(nt) {
      D || (nt ? ee(r.STENCIL_TEST) : Se(r.STENCIL_TEST));
    }, setMask: function(nt) {
      ve !== nt && !D && (r.stencilMask(nt), ve = nt);
    }, setFunc: function(nt, mi, Ti) {
      (se !== nt || ye !== mi || ne !== Ti) && (r.stencilFunc(nt, mi, Ti), se = nt, ye = mi, ne = Ti);
    }, setOp: function(nt, mi, Ti) {
      (J !== nt || le !== mi || He !== Ti) && (r.stencilOp(nt, mi, Ti), J = nt, le = mi, He = Ti);
    }, setLocked: function(nt) {
      D = nt;
    }, setClear: function(nt) {
      dt !== nt && (r.clearStencil(nt), dt = nt);
    }, reset: function() {
      D = false, ve = null, se = null, ye = null, ne = null, J = null, le = null, He = null, dt = null;
    } };
  }
  const s = new t(), o = new i(), a = new n(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = false, g = null, p = null, x = null, v = null, M = null, A = null, w = null, C = new Me(0, 0, 0), P = 0, S = false, b = null, L = null, O = null, B = null, G = null;
  const q = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = false, H = 0;
  const j = r.getParameter(r.VERSION);
  j.indexOf("WebGL") !== -1 ? (H = parseFloat(/^WebGL (\d)/.exec(j)[1]), V = H >= 1) : j.indexOf("OpenGL ES") !== -1 && (H = parseFloat(/^OpenGL ES (\d)/.exec(j)[1]), V = H >= 2);
  let pe = null, ae = {};
  const he = r.getParameter(r.SCISSOR_BOX), We = r.getParameter(r.VIEWPORT), ke = new pt().fromArray(he), ot = new pt().fromArray(We);
  function at(D, ve, se, ye) {
    const ne = new Uint8Array(4), J = r.createTexture();
    r.bindTexture(D, J), r.texParameteri(D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(D, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let le = 0; le < se; le++) D === r.TEXTURE_3D || D === r.TEXTURE_2D_ARRAY ? r.texImage3D(ve, 0, r.RGBA, 1, 1, ye, 0, r.RGBA, r.UNSIGNED_BYTE, ne) : r.texImage2D(ve + le, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, ne);
    return J;
  }
  const Y = {};
  Y[r.TEXTURE_2D] = at(r.TEXTURE_2D, r.TEXTURE_2D, 1), Y[r.TEXTURE_CUBE_MAP] = at(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[r.TEXTURE_2D_ARRAY] = at(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Y[r.TEXTURE_3D] = at(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ee(r.DEPTH_TEST), o.setFunc(os), Q(false), ge(fc), ee(r.CULL_FACE), $(Ni);
  function ee(D) {
    h[D] !== true && (r.enable(D), h[D] = true);
  }
  function Se(D) {
    h[D] !== false && (r.disable(D), h[D] = false);
  }
  function Oe(D, ve) {
    return u[D] !== ve ? (r.bindFramebuffer(D, ve), u[D] = ve, D === r.DRAW_FRAMEBUFFER && (u[r.FRAMEBUFFER] = ve), D === r.FRAMEBUFFER && (u[r.DRAW_FRAMEBUFFER] = ve), true) : false;
  }
  function Te(D, ve) {
    let se = f, ye = false;
    if (D) {
      se = d.get(ve), se === void 0 && (se = [], d.set(ve, se));
      const ne = D.textures;
      if (se.length !== ne.length || se[0] !== r.COLOR_ATTACHMENT0) {
        for (let J = 0, le = ne.length; J < le; J++) se[J] = r.COLOR_ATTACHMENT0 + J;
        se.length = ne.length, ye = true;
      }
    } else se[0] !== r.BACK && (se[0] = r.BACK, ye = true);
    ye && r.drawBuffers(se);
  }
  function Qe(D) {
    return m !== D ? (r.useProgram(D), m = D, true) : false;
  }
  const lt = { [vn]: r.FUNC_ADD, [cd]: r.FUNC_SUBTRACT, [hd]: r.FUNC_REVERSE_SUBTRACT };
  lt[ud] = r.MIN, lt[dd] = r.MAX;
  const Xe = { [fd]: r.ZERO, [pd]: r.ONE, [md]: r.SRC_COLOR, [Sa]: r.SRC_ALPHA, [Md]: r.SRC_ALPHA_SATURATE, [xd]: r.DST_COLOR, [_d]: r.DST_ALPHA, [gd]: r.ONE_MINUS_SRC_COLOR, [ba]: r.ONE_MINUS_SRC_ALPHA, [yd]: r.ONE_MINUS_DST_COLOR, [vd]: r.ONE_MINUS_DST_ALPHA, [Sd]: r.CONSTANT_COLOR, [bd]: r.ONE_MINUS_CONSTANT_COLOR, [Td]: r.CONSTANT_ALPHA, [Ad]: r.ONE_MINUS_CONSTANT_ALPHA };
  function $(D, ve, se, ye, ne, J, le, He, dt, nt) {
    if (D === Ni) {
      _ === true && (Se(r.BLEND), _ = false);
      return;
    }
    if (_ === false && (ee(r.BLEND), _ = true), D !== ld) {
      if (D !== g || nt !== S) {
        if ((p !== vn || M !== vn) && (r.blendEquation(r.FUNC_ADD), p = vn, M = vn), nt) switch (D) {
          case ns:
            r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
            break;
          case pc:
            r.blendFunc(r.ONE, r.ONE);
            break;
          case mc:
            r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
            break;
          case gc:
            r.blendFuncSeparate(r.DST_COLOR, r.ONE_MINUS_SRC_ALPHA, r.ZERO, r.ONE);
            break;
          default:
            Le("WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case ns:
            r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
            break;
          case pc:
            r.blendFuncSeparate(r.SRC_ALPHA, r.ONE, r.ONE, r.ONE);
            break;
          case mc:
            Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case gc:
            Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            Le("WebGLState: Invalid blending: ", D);
            break;
        }
        x = null, v = null, A = null, w = null, C.set(0, 0, 0), P = 0, g = D, S = nt;
      }
      return;
    }
    ne = ne || ve, J = J || se, le = le || ye, (ve !== p || ne !== M) && (r.blendEquationSeparate(lt[ve], lt[ne]), p = ve, M = ne), (se !== x || ye !== v || J !== A || le !== w) && (r.blendFuncSeparate(Xe[se], Xe[ye], Xe[J], Xe[le]), x = se, v = ye, A = J, w = le), (He.equals(C) === false || dt !== P) && (r.blendColor(He.r, He.g, He.b, dt), C.copy(He), P = dt), g = D, S = false;
  }
  function ie(D, ve) {
    D.side === Pi ? Se(r.CULL_FACE) : ee(r.CULL_FACE);
    let se = D.side === Xt;
    ve && (se = !se), Q(se), D.blending === ns && D.transparent === false ? $(Ni) : $(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), o.setFunc(D.depthFunc), o.setTest(D.depthTest), o.setMask(D.depthWrite), s.setMask(D.colorWrite);
    const ye = D.stencilWrite;
    a.setTest(ye), ye && (a.setMask(D.stencilWriteMask), a.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), a.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), De(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? ee(r.SAMPLE_ALPHA_TO_COVERAGE) : Se(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Q(D) {
    b !== D && (D ? r.frontFace(r.CW) : r.frontFace(r.CCW), b = D);
  }
  function ge(D) {
    D !== rd ? (ee(r.CULL_FACE), D !== L && (D === fc ? r.cullFace(r.BACK) : D === od ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Se(r.CULL_FACE), L = D;
  }
  function I(D) {
    D !== O && (V && r.lineWidth(D), O = D);
  }
  function De(D, ve, se) {
    D ? (ee(r.POLYGON_OFFSET_FILL), (B !== ve || G !== se) && (r.polygonOffset(ve, se), B = ve, G = se)) : Se(r.POLYGON_OFFSET_FILL);
  }
  function xe(D) {
    D ? ee(r.SCISSOR_TEST) : Se(r.SCISSOR_TEST);
  }
  function Fe(D) {
    D === void 0 && (D = r.TEXTURE0 + q - 1), pe !== D && (r.activeTexture(D), pe = D);
  }
  function re(D, ve, se) {
    se === void 0 && (pe === null ? se = r.TEXTURE0 + q - 1 : se = pe);
    let ye = ae[se];
    ye === void 0 && (ye = { type: void 0, texture: void 0 }, ae[se] = ye), (ye.type !== D || ye.texture !== ve) && (pe !== se && (r.activeTexture(se), pe = se), r.bindTexture(D, ve || Y[D]), ye.type = D, ye.texture = ve);
  }
  function E() {
    const D = ae[pe];
    D !== void 0 && D.type !== void 0 && (r.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function y() {
    try {
      r.compressedTexImage2D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function U() {
    try {
      r.compressedTexImage3D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function W() {
    try {
      r.texSubImage2D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function Z() {
    try {
      r.texSubImage3D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function X() {
    try {
      r.compressedTexSubImage2D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function Re() {
    try {
      r.compressedTexSubImage3D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function oe() {
    try {
      r.texStorage2D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function Ee() {
    try {
      r.texStorage3D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function Be() {
    try {
      r.texImage2D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function te() {
    try {
      r.texImage3D(...arguments);
    } catch (D) {
      Le("WebGLState:", D);
    }
  }
  function ue(D) {
    ke.equals(D) === false && (r.scissor(D.x, D.y, D.z, D.w), ke.copy(D));
  }
  function Ce(D) {
    ot.equals(D) === false && (r.viewport(D.x, D.y, D.z, D.w), ot.copy(D));
  }
  function Ie(D, ve) {
    let se = c.get(ve);
    se === void 0 && (se = /* @__PURE__ */ new WeakMap(), c.set(ve, se));
    let ye = se.get(D);
    ye === void 0 && (ye = r.getUniformBlockIndex(ve, D.name), se.set(D, ye));
  }
  function ce(D, ve) {
    const ye = c.get(ve).get(D);
    l.get(ve) !== ye && (r.uniformBlockBinding(ve, ye, D.__bindingPointIndex), l.set(ve, ye));
  }
  function $e() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(true, true, true, true), r.clearColor(0, 0, 0, 0), r.depthMask(true), r.depthFunc(r.LESS), o.setReversed(false), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), h = {}, pe = null, ae = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = false, g = null, p = null, x = null, v = null, M = null, A = null, w = null, C = new Me(0, 0, 0), P = 0, S = false, b = null, L = null, O = null, B = null, G = null, ke.set(0, 0, r.canvas.width, r.canvas.height), ot.set(0, 0, r.canvas.width, r.canvas.height), s.reset(), o.reset(), a.reset();
  }
  return { buffers: { color: s, depth: o, stencil: a }, enable: ee, disable: Se, bindFramebuffer: Oe, drawBuffers: Te, useProgram: Qe, setBlending: $, setMaterial: ie, setFlipSided: Q, setCullFace: ge, setLineWidth: I, setPolygonOffset: De, setScissorTest: xe, activeTexture: Fe, bindTexture: re, unbindTexture: E, compressedTexImage2D: y, compressedTexImage3D: U, texImage2D: Be, texImage3D: te, updateUBOMapping: Ie, uniformBlockBinding: ce, texStorage2D: oe, texStorage3D: Ee, texSubImage2D: W, texSubImage3D: Z, compressedTexSubImage2D: X, compressedTexSubImage3D: Re, scissor: ue, viewport: Ce, reset: $e };
}
function _x(r, e, t, i, n, s, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new K(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let f = false;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function m(E, y) {
    return f ? new OffscreenCanvas(E, y) : Hs("canvas");
  }
  function _(E, y, U) {
    let W = 1;
    const Z = re(E);
    if ((Z.width > U || Z.height > U) && (W = U / Math.max(Z.width, Z.height)), W < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const X = Math.floor(W * Z.width), Re = Math.floor(W * Z.height);
      u === void 0 && (u = m(X, Re));
      const oe = y ? m(X, Re) : u;
      return oe.width = X, oe.height = Re, oe.getContext("2d").drawImage(E, 0, 0, X, Re), de("WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + X + "x" + Re + ")."), oe;
    } else return "data" in E && de("WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), E;
    return E;
  }
  function g(E) {
    return E.generateMipmaps;
  }
  function p(E) {
    r.generateMipmap(E);
  }
  function x(E) {
    return E.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? r.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? r.TEXTURE_2D_ARRAY : r.TEXTURE_2D;
  }
  function v(E, y, U, W, Z = false) {
    if (E !== null) {
      if (r[E] !== void 0) return r[E];
      de("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let X = y;
    if (y === r.RED && (U === r.FLOAT && (X = r.R32F), U === r.HALF_FLOAT && (X = r.R16F), U === r.UNSIGNED_BYTE && (X = r.R8)), y === r.RED_INTEGER && (U === r.UNSIGNED_BYTE && (X = r.R8UI), U === r.UNSIGNED_SHORT && (X = r.R16UI), U === r.UNSIGNED_INT && (X = r.R32UI), U === r.BYTE && (X = r.R8I), U === r.SHORT && (X = r.R16I), U === r.INT && (X = r.R32I)), y === r.RG && (U === r.FLOAT && (X = r.RG32F), U === r.HALF_FLOAT && (X = r.RG16F), U === r.UNSIGNED_BYTE && (X = r.RG8)), y === r.RG_INTEGER && (U === r.UNSIGNED_BYTE && (X = r.RG8UI), U === r.UNSIGNED_SHORT && (X = r.RG16UI), U === r.UNSIGNED_INT && (X = r.RG32UI), U === r.BYTE && (X = r.RG8I), U === r.SHORT && (X = r.RG16I), U === r.INT && (X = r.RG32I)), y === r.RGB_INTEGER && (U === r.UNSIGNED_BYTE && (X = r.RGB8UI), U === r.UNSIGNED_SHORT && (X = r.RGB16UI), U === r.UNSIGNED_INT && (X = r.RGB32UI), U === r.BYTE && (X = r.RGB8I), U === r.SHORT && (X = r.RGB16I), U === r.INT && (X = r.RGB32I)), y === r.RGBA_INTEGER && (U === r.UNSIGNED_BYTE && (X = r.RGBA8UI), U === r.UNSIGNED_SHORT && (X = r.RGBA16UI), U === r.UNSIGNED_INT && (X = r.RGBA32UI), U === r.BYTE && (X = r.RGBA8I), U === r.SHORT && (X = r.RGBA16I), U === r.INT && (X = r.RGBA32I)), y === r.RGB && (U === r.UNSIGNED_INT_5_9_9_9_REV && (X = r.RGB9_E5), U === r.UNSIGNED_INT_10F_11F_11F_REV && (X = r.R11F_G11F_B10F)), y === r.RGBA) {
      const Re = Z ? ro : je.getTransfer(W);
      U === r.FLOAT && (X = r.RGBA32F), U === r.HALF_FLOAT && (X = r.RGBA16F), U === r.UNSIGNED_BYTE && (X = Re === rt ? r.SRGB8_ALPHA8 : r.RGBA8), U === r.UNSIGNED_SHORT_4_4_4_4 && (X = r.RGBA4), U === r.UNSIGNED_SHORT_5_5_5_1 && (X = r.RGB5_A1);
    }
    return (X === r.R16F || X === r.R32F || X === r.RG16F || X === r.RG32F || X === r.RGBA16F || X === r.RGBA32F) && e.get("EXT_color_buffer_float"), X;
  }
  function M(E, y) {
    let U;
    return E ? y === null || y === di || y === ks ? U = r.DEPTH24_STENCIL8 : y === Ht ? U = r.DEPTH32F_STENCIL8 : y === Vs && (U = r.DEPTH24_STENCIL8, de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : y === null || y === di || y === ks ? U = r.DEPTH_COMPONENT24 : y === Ht ? U = r.DEPTH_COMPONENT32F : y === Vs && (U = r.DEPTH_COMPONENT16), U;
  }
  function A(E, y) {
    return g(E) === true || E.isFramebufferTexture && E.minFilter !== bt && E.minFilter !== mt ? Math.log2(Math.max(y.width, y.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? y.mipmaps.length : 1;
  }
  function w(E) {
    const y = E.target;
    y.removeEventListener("dispose", w), P(y), y.isVideoTexture && h.delete(y);
  }
  function C(E) {
    const y = E.target;
    y.removeEventListener("dispose", C), b(y);
  }
  function P(E) {
    const y = i.get(E);
    if (y.__webglInit === void 0) return;
    const U = E.source, W = d.get(U);
    if (W) {
      const Z = W[y.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && S(E), Object.keys(W).length === 0 && d.delete(U);
    }
    i.remove(E);
  }
  function S(E) {
    const y = i.get(E);
    r.deleteTexture(y.__webglTexture);
    const U = E.source, W = d.get(U);
    delete W[y.__cacheKey], o.memory.textures--;
  }
  function b(E) {
    const y = i.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), i.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let W = 0; W < 6; W++) {
      if (Array.isArray(y.__webglFramebuffer[W])) for (let Z = 0; Z < y.__webglFramebuffer[W].length; Z++) r.deleteFramebuffer(y.__webglFramebuffer[W][Z]);
      else r.deleteFramebuffer(y.__webglFramebuffer[W]);
      y.__webglDepthbuffer && r.deleteRenderbuffer(y.__webglDepthbuffer[W]);
    }
    else {
      if (Array.isArray(y.__webglFramebuffer)) for (let W = 0; W < y.__webglFramebuffer.length; W++) r.deleteFramebuffer(y.__webglFramebuffer[W]);
      else r.deleteFramebuffer(y.__webglFramebuffer);
      if (y.__webglDepthbuffer && r.deleteRenderbuffer(y.__webglDepthbuffer), y.__webglMultisampledFramebuffer && r.deleteFramebuffer(y.__webglMultisampledFramebuffer), y.__webglColorRenderbuffer) for (let W = 0; W < y.__webglColorRenderbuffer.length; W++) y.__webglColorRenderbuffer[W] && r.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);
      y.__webglDepthRenderbuffer && r.deleteRenderbuffer(y.__webglDepthRenderbuffer);
    }
    const U = E.textures;
    for (let W = 0, Z = U.length; W < Z; W++) {
      const X = i.get(U[W]);
      X.__webglTexture && (r.deleteTexture(X.__webglTexture), o.memory.textures--), i.remove(U[W]);
    }
    i.remove(E);
  }
  let L = 0;
  function O() {
    L = 0;
  }
  function B() {
    const E = L;
    return E >= n.maxTextures && de("WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + n.maxTextures), L += 1, E;
  }
  function G(E) {
    const y = [];
    return y.push(E.wrapS), y.push(E.wrapT), y.push(E.wrapR || 0), y.push(E.magFilter), y.push(E.minFilter), y.push(E.anisotropy), y.push(E.internalFormat), y.push(E.format), y.push(E.type), y.push(E.generateMipmaps), y.push(E.premultiplyAlpha), y.push(E.flipY), y.push(E.unpackAlignment), y.push(E.colorSpace), y.join();
  }
  function q(E, y) {
    const U = i.get(E);
    if (E.isVideoTexture && xe(E), E.isRenderTargetTexture === false && E.isExternalTexture !== true && E.version > 0 && U.__version !== E.version) {
      const W = E.image;
      if (W === null) de("WebGLRenderer: Texture marked for update but no image data found.");
      else if (W.complete === false) de("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(U, E, y);
        return;
      }
    } else E.isExternalTexture && (U.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(r.TEXTURE_2D, U.__webglTexture, r.TEXTURE0 + y);
  }
  function V(E, y) {
    const U = i.get(E);
    if (E.isRenderTargetTexture === false && E.version > 0 && U.__version !== E.version) {
      Y(U, E, y);
      return;
    } else E.isExternalTexture && (U.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(r.TEXTURE_2D_ARRAY, U.__webglTexture, r.TEXTURE0 + y);
  }
  function H(E, y) {
    const U = i.get(E);
    if (E.isRenderTargetTexture === false && E.version > 0 && U.__version !== E.version) {
      Y(U, E, y);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, U.__webglTexture, r.TEXTURE0 + y);
  }
  function j(E, y) {
    const U = i.get(E);
    if (E.isCubeDepthTexture !== true && E.version > 0 && U.__version !== E.version) {
      ee(U, E, y);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, U.__webglTexture, r.TEXTURE0 + y);
  }
  const pe = { [to]: r.REPEAT, [ei]: r.CLAMP_TO_EDGE, [io]: r.MIRRORED_REPEAT }, ae = { [bt]: r.NEAREST, [nu]: r.NEAREST_MIPMAP_NEAREST, [Ls]: r.NEAREST_MIPMAP_LINEAR, [mt]: r.LINEAR, [Yr]: r.LINEAR_MIPMAP_NEAREST, [Di]: r.LINEAR_MIPMAP_LINEAR }, he = { [Ud]: r.NEVER, [zd]: r.ALWAYS, [Nd]: r.LESS, [El]: r.LEQUAL, [Od]: r.EQUAL, [Cl]: r.GEQUAL, [Fd]: r.GREATER, [Bd]: r.NOTEQUAL };
  function We(E, y) {
    if (y.type === Ht && e.has("OES_texture_float_linear") === false && (y.magFilter === mt || y.magFilter === Yr || y.magFilter === Ls || y.magFilter === Di || y.minFilter === mt || y.minFilter === Yr || y.minFilter === Ls || y.minFilter === Di) && de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(E, r.TEXTURE_WRAP_S, pe[y.wrapS]), r.texParameteri(E, r.TEXTURE_WRAP_T, pe[y.wrapT]), (E === r.TEXTURE_3D || E === r.TEXTURE_2D_ARRAY) && r.texParameteri(E, r.TEXTURE_WRAP_R, pe[y.wrapR]), r.texParameteri(E, r.TEXTURE_MAG_FILTER, ae[y.magFilter]), r.texParameteri(E, r.TEXTURE_MIN_FILTER, ae[y.minFilter]), y.compareFunction && (r.texParameteri(E, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(E, r.TEXTURE_COMPARE_FUNC, he[y.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (y.magFilter === bt || y.minFilter !== Ls && y.minFilter !== Di || y.type === Ht && e.has("OES_texture_float_linear") === false) return;
      if (y.anisotropy > 1 || i.get(y).__currentAnisotropy) {
        const U = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(E, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, n.getMaxAnisotropy())), i.get(y).__currentAnisotropy = y.anisotropy;
      }
    }
  }
  function ke(E, y) {
    let U = false;
    E.__webglInit === void 0 && (E.__webglInit = true, y.addEventListener("dispose", w));
    const W = y.source;
    let Z = d.get(W);
    Z === void 0 && (Z = {}, d.set(W, Z));
    const X = G(y);
    if (X !== E.__cacheKey) {
      Z[X] === void 0 && (Z[X] = { texture: r.createTexture(), usedTimes: 0 }, o.memory.textures++, U = true), Z[X].usedTimes++;
      const Re = Z[E.__cacheKey];
      Re !== void 0 && (Z[E.__cacheKey].usedTimes--, Re.usedTimes === 0 && S(y)), E.__cacheKey = X, E.__webglTexture = Z[X].texture;
    }
    return U;
  }
  function ot(E, y, U) {
    return Math.floor(Math.floor(E / U) / y);
  }
  function at(E, y, U, W) {
    const X = E.updateRanges;
    if (X.length === 0) t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, y.width, y.height, U, W, y.data);
    else {
      X.sort((te, ue) => te.start - ue.start);
      let Re = 0;
      for (let te = 1; te < X.length; te++) {
        const ue = X[Re], Ce = X[te], Ie = ue.start + ue.count, ce = ot(Ce.start, y.width, 4), $e = ot(ue.start, y.width, 4);
        Ce.start <= Ie + 1 && ce === $e && ot(Ce.start + Ce.count - 1, y.width, 4) === ce ? ue.count = Math.max(ue.count, Ce.start + Ce.count - ue.start) : (++Re, X[Re] = Ce);
      }
      X.length = Re + 1;
      const oe = r.getParameter(r.UNPACK_ROW_LENGTH), Ee = r.getParameter(r.UNPACK_SKIP_PIXELS), Be = r.getParameter(r.UNPACK_SKIP_ROWS);
      r.pixelStorei(r.UNPACK_ROW_LENGTH, y.width);
      for (let te = 0, ue = X.length; te < ue; te++) {
        const Ce = X[te], Ie = Math.floor(Ce.start / 4), ce = Math.ceil(Ce.count / 4), $e = Ie % y.width, D = Math.floor(Ie / y.width), ve = ce, se = 1;
        r.pixelStorei(r.UNPACK_SKIP_PIXELS, $e), r.pixelStorei(r.UNPACK_SKIP_ROWS, D), t.texSubImage2D(r.TEXTURE_2D, 0, $e, D, ve, se, U, W, y.data);
      }
      E.clearUpdateRanges(), r.pixelStorei(r.UNPACK_ROW_LENGTH, oe), r.pixelStorei(r.UNPACK_SKIP_PIXELS, Ee), r.pixelStorei(r.UNPACK_SKIP_ROWS, Be);
    }
  }
  function Y(E, y, U) {
    let W = r.TEXTURE_2D;
    (y.isDataArrayTexture || y.isCompressedArrayTexture) && (W = r.TEXTURE_2D_ARRAY), y.isData3DTexture && (W = r.TEXTURE_3D);
    const Z = ke(E, y), X = y.source;
    t.bindTexture(W, E.__webglTexture, r.TEXTURE0 + U);
    const Re = i.get(X);
    if (X.version !== Re.__version || Z === true) {
      t.activeTexture(r.TEXTURE0 + U);
      const oe = je.getPrimaries(je.workingColorSpace), Ee = y.colorSpace === Ji ? null : je.getPrimaries(y.colorSpace), Be = y.colorSpace === Ji || oe === Ee ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, y.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, y.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Be);
      let te = _(y.image, false, n.maxTextureSize);
      te = Fe(y, te);
      const ue = s.convert(y.format, y.colorSpace), Ce = s.convert(y.type);
      let Ie = v(y.internalFormat, ue, Ce, y.colorSpace, y.isVideoTexture);
      We(W, y);
      let ce;
      const $e = y.mipmaps, D = y.isVideoTexture !== true, ve = Re.__version === void 0 || Z === true, se = X.dataReady, ye = A(y, te);
      if (y.isDepthTexture) Ie = M(y.format === yn, y.type), ve && (D ? t.texStorage2D(r.TEXTURE_2D, 1, Ie, te.width, te.height) : t.texImage2D(r.TEXTURE_2D, 0, Ie, te.width, te.height, 0, ue, Ce, null));
      else if (y.isDataTexture) if ($e.length > 0) {
        D && ve && t.texStorage2D(r.TEXTURE_2D, ye, Ie, $e[0].width, $e[0].height);
        for (let ne = 0, J = $e.length; ne < J; ne++) ce = $e[ne], D ? se && t.texSubImage2D(r.TEXTURE_2D, ne, 0, 0, ce.width, ce.height, ue, Ce, ce.data) : t.texImage2D(r.TEXTURE_2D, ne, Ie, ce.width, ce.height, 0, ue, Ce, ce.data);
        y.generateMipmaps = false;
      } else D ? (ve && t.texStorage2D(r.TEXTURE_2D, ye, Ie, te.width, te.height), se && at(y, te, ue, Ce)) : t.texImage2D(r.TEXTURE_2D, 0, Ie, te.width, te.height, 0, ue, Ce, te.data);
      else if (y.isCompressedTexture) if (y.isCompressedArrayTexture) {
        D && ve && t.texStorage3D(r.TEXTURE_2D_ARRAY, ye, Ie, $e[0].width, $e[0].height, te.depth);
        for (let ne = 0, J = $e.length; ne < J; ne++) if (ce = $e[ne], y.format !== Wt) if (ue !== null) if (D) {
          if (se) if (y.layerUpdates.size > 0) {
            const le = gl(ce.width, ce.height, y.format, y.type);
            for (const He of y.layerUpdates) {
              const dt = ce.data.subarray(He * le / ce.data.BYTES_PER_ELEMENT, (He + 1) * le / ce.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, ne, 0, 0, He, ce.width, ce.height, 1, ue, dt);
            }
            y.clearLayerUpdates();
          } else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, ne, 0, 0, 0, ce.width, ce.height, te.depth, ue, ce.data);
        } else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, ne, Ie, ce.width, ce.height, te.depth, 0, ce.data, 0, 0);
        else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else D ? se && t.texSubImage3D(r.TEXTURE_2D_ARRAY, ne, 0, 0, 0, ce.width, ce.height, te.depth, ue, Ce, ce.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, ne, Ie, ce.width, ce.height, te.depth, 0, ue, Ce, ce.data);
      } else {
        D && ve && t.texStorage2D(r.TEXTURE_2D, ye, Ie, $e[0].width, $e[0].height);
        for (let ne = 0, J = $e.length; ne < J; ne++) ce = $e[ne], y.format !== Wt ? ue !== null ? D ? se && t.compressedTexSubImage2D(r.TEXTURE_2D, ne, 0, 0, ce.width, ce.height, ue, ce.data) : t.compressedTexImage2D(r.TEXTURE_2D, ne, Ie, ce.width, ce.height, 0, ce.data) : de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : D ? se && t.texSubImage2D(r.TEXTURE_2D, ne, 0, 0, ce.width, ce.height, ue, Ce, ce.data) : t.texImage2D(r.TEXTURE_2D, ne, Ie, ce.width, ce.height, 0, ue, Ce, ce.data);
      }
      else if (y.isDataArrayTexture) if (D) {
        if (ve && t.texStorage3D(r.TEXTURE_2D_ARRAY, ye, Ie, te.width, te.height, te.depth), se) if (y.layerUpdates.size > 0) {
          const ne = gl(te.width, te.height, y.format, y.type);
          for (const J of y.layerUpdates) {
            const le = te.data.subarray(J * ne / te.data.BYTES_PER_ELEMENT, (J + 1) * ne / te.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, J, te.width, te.height, 1, ue, Ce, le);
          }
          y.clearLayerUpdates();
        } else t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, ue, Ce, te.data);
      } else t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Ie, te.width, te.height, te.depth, 0, ue, Ce, te.data);
      else if (y.isData3DTexture) D ? (ve && t.texStorage3D(r.TEXTURE_3D, ye, Ie, te.width, te.height, te.depth), se && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, ue, Ce, te.data)) : t.texImage3D(r.TEXTURE_3D, 0, Ie, te.width, te.height, te.depth, 0, ue, Ce, te.data);
      else if (y.isFramebufferTexture) {
        if (ve) if (D) t.texStorage2D(r.TEXTURE_2D, ye, Ie, te.width, te.height);
        else {
          let ne = te.width, J = te.height;
          for (let le = 0; le < ye; le++) t.texImage2D(r.TEXTURE_2D, le, Ie, ne, J, 0, ue, Ce, null), ne >>= 1, J >>= 1;
        }
      } else if ($e.length > 0) {
        if (D && ve) {
          const ne = re($e[0]);
          t.texStorage2D(r.TEXTURE_2D, ye, Ie, ne.width, ne.height);
        }
        for (let ne = 0, J = $e.length; ne < J; ne++) ce = $e[ne], D ? se && t.texSubImage2D(r.TEXTURE_2D, ne, 0, 0, ue, Ce, ce) : t.texImage2D(r.TEXTURE_2D, ne, Ie, ue, Ce, ce);
        y.generateMipmaps = false;
      } else if (D) {
        if (ve) {
          const ne = re(te);
          t.texStorage2D(r.TEXTURE_2D, ye, Ie, ne.width, ne.height);
        }
        se && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ue, Ce, te);
      } else t.texImage2D(r.TEXTURE_2D, 0, Ie, ue, Ce, te);
      g(y) && p(W), Re.__version = X.version, y.onUpdate && y.onUpdate(y);
    }
    E.__version = y.version;
  }
  function ee(E, y, U) {
    if (y.image.length !== 6) return;
    const W = ke(E, y), Z = y.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, E.__webglTexture, r.TEXTURE0 + U);
    const X = i.get(Z);
    if (Z.version !== X.__version || W === true) {
      t.activeTexture(r.TEXTURE0 + U);
      const Re = je.getPrimaries(je.workingColorSpace), oe = y.colorSpace === Ji ? null : je.getPrimaries(y.colorSpace), Ee = y.colorSpace === Ji || Re === oe ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, y.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, y.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ee);
      const Be = y.isCompressedTexture || y.image[0].isCompressedTexture, te = y.image[0] && y.image[0].isDataTexture, ue = [];
      for (let J = 0; J < 6; J++) !Be && !te ? ue[J] = _(y.image[J], true, n.maxCubemapSize) : ue[J] = te ? y.image[J].image : y.image[J], ue[J] = Fe(y, ue[J]);
      const Ce = ue[0], Ie = s.convert(y.format, y.colorSpace), ce = s.convert(y.type), $e = v(y.internalFormat, Ie, ce, y.colorSpace), D = y.isVideoTexture !== true, ve = X.__version === void 0 || W === true, se = Z.dataReady;
      let ye = A(y, Ce);
      We(r.TEXTURE_CUBE_MAP, y);
      let ne;
      if (Be) {
        D && ve && t.texStorage2D(r.TEXTURE_CUBE_MAP, ye, $e, Ce.width, Ce.height);
        for (let J = 0; J < 6; J++) {
          ne = ue[J].mipmaps;
          for (let le = 0; le < ne.length; le++) {
            const He = ne[le];
            y.format !== Wt ? Ie !== null ? D ? se && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, le, 0, 0, He.width, He.height, Ie, He.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, le, $e, He.width, He.height, 0, He.data) : de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, le, 0, 0, He.width, He.height, Ie, ce, He.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, le, $e, He.width, He.height, 0, Ie, ce, He.data);
          }
        }
      } else {
        if (ne = y.mipmaps, D && ve) {
          ne.length > 0 && ye++;
          const J = re(ue[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, ye, $e, J.width, J.height);
        }
        for (let J = 0; J < 6; J++) if (te) {
          D ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, ue[J].width, ue[J].height, Ie, ce, ue[J].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, $e, ue[J].width, ue[J].height, 0, Ie, ce, ue[J].data);
          for (let le = 0; le < ne.length; le++) {
            const dt = ne[le].image[J].image;
            D ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, le + 1, 0, 0, dt.width, dt.height, Ie, ce, dt.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, le + 1, $e, dt.width, dt.height, 0, Ie, ce, dt.data);
          }
        } else {
          D ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, Ie, ce, ue[J]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, $e, Ie, ce, ue[J]);
          for (let le = 0; le < ne.length; le++) {
            const He = ne[le];
            D ? se && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, le + 1, 0, 0, Ie, ce, He.image[J]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, le + 1, $e, Ie, ce, He.image[J]);
          }
        }
      }
      g(y) && p(r.TEXTURE_CUBE_MAP), X.__version = Z.version, y.onUpdate && y.onUpdate(y);
    }
    E.__version = y.version;
  }
  function Se(E, y, U, W, Z, X) {
    const Re = s.convert(U.format, U.colorSpace), oe = s.convert(U.type), Ee = v(U.internalFormat, Re, oe, U.colorSpace), Be = i.get(y), te = i.get(U);
    if (te.__renderTarget = y, !Be.__hasExternalTextures) {
      const ue = Math.max(1, y.width >> X), Ce = Math.max(1, y.height >> X);
      Z === r.TEXTURE_3D || Z === r.TEXTURE_2D_ARRAY ? t.texImage3D(Z, X, Ee, ue, Ce, y.depth, 0, Re, oe, null) : t.texImage2D(Z, X, Ee, ue, Ce, 0, Re, oe, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, E), De(y) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, W, Z, te.__webglTexture, 0, I(y)) : (Z === r.TEXTURE_2D || Z >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, W, Z, te.__webglTexture, X), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Oe(E, y, U) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, E), y.depthBuffer) {
      const W = y.depthTexture, Z = W && W.isDepthTexture ? W.type : null, X = M(y.stencilBuffer, Z), Re = y.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
      De(y) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, I(y), X, y.width, y.height) : U ? r.renderbufferStorageMultisample(r.RENDERBUFFER, I(y), X, y.width, y.height) : r.renderbufferStorage(r.RENDERBUFFER, X, y.width, y.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, Re, r.RENDERBUFFER, E);
    } else {
      const W = y.textures;
      for (let Z = 0; Z < W.length; Z++) {
        const X = W[Z], Re = s.convert(X.format, X.colorSpace), oe = s.convert(X.type), Ee = v(X.internalFormat, Re, oe, X.colorSpace);
        De(y) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, I(y), Ee, y.width, y.height) : U ? r.renderbufferStorageMultisample(r.RENDERBUFFER, I(y), Ee, y.width, y.height) : r.renderbufferStorage(r.RENDERBUFFER, Ee, y.width, y.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function Te(E, y, U) {
    const W = y.isWebGLCubeRenderTarget === true;
    if (t.bindFramebuffer(r.FRAMEBUFFER, E), !(y.depthTexture && y.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Z = i.get(y.depthTexture);
    if (Z.__renderTarget = y, (!Z.__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width, y.depthTexture.image.height = y.height, y.depthTexture.needsUpdate = true), W) {
      if (Z.__webglInit === void 0 && (Z.__webglInit = true, y.depthTexture.addEventListener("dispose", w)), Z.__webglTexture === void 0) {
        Z.__webglTexture = r.createTexture(), t.bindTexture(r.TEXTURE_CUBE_MAP, Z.__webglTexture), We(r.TEXTURE_CUBE_MAP, y.depthTexture);
        const Be = s.convert(y.depthTexture.format), te = s.convert(y.depthTexture.type);
        let ue;
        y.depthTexture.format === zi ? ue = r.DEPTH_COMPONENT24 : y.depthTexture.format === yn && (ue = r.DEPTH24_STENCIL8);
        for (let Ce = 0; Ce < 6; Ce++) r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Ce, 0, ue, y.width, y.height, 0, Be, te, null);
      }
    } else q(y.depthTexture, 0);
    const X = Z.__webglTexture, Re = I(y), oe = W ? r.TEXTURE_CUBE_MAP_POSITIVE_X + U : r.TEXTURE_2D, Ee = y.depthTexture.format === yn ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
    if (y.depthTexture.format === zi) De(y) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Ee, oe, X, 0, Re) : r.framebufferTexture2D(r.FRAMEBUFFER, Ee, oe, X, 0);
    else if (y.depthTexture.format === yn) De(y) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Ee, oe, X, 0, Re) : r.framebufferTexture2D(r.FRAMEBUFFER, Ee, oe, X, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Qe(E) {
    const y = i.get(E), U = E.isWebGLCubeRenderTarget === true;
    if (y.__boundDepthTexture !== E.depthTexture) {
      const W = E.depthTexture;
      if (y.__depthDisposeCallback && y.__depthDisposeCallback(), W) {
        const Z = () => {
          delete y.__boundDepthTexture, delete y.__depthDisposeCallback, W.removeEventListener("dispose", Z);
        };
        W.addEventListener("dispose", Z), y.__depthDisposeCallback = Z;
      }
      y.__boundDepthTexture = W;
    }
    if (E.depthTexture && !y.__autoAllocateDepthBuffer) if (U) for (let W = 0; W < 6; W++) Te(y.__webglFramebuffer[W], E, W);
    else {
      const W = E.texture.mipmaps;
      W && W.length > 0 ? Te(y.__webglFramebuffer[0], E, 0) : Te(y.__webglFramebuffer, E, 0);
    }
    else if (U) {
      y.__webglDepthbuffer = [];
      for (let W = 0; W < 6; W++) if (t.bindFramebuffer(r.FRAMEBUFFER, y.__webglFramebuffer[W]), y.__webglDepthbuffer[W] === void 0) y.__webglDepthbuffer[W] = r.createRenderbuffer(), Oe(y.__webglDepthbuffer[W], E, false);
      else {
        const Z = E.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, X = y.__webglDepthbuffer[W];
        r.bindRenderbuffer(r.RENDERBUFFER, X), r.framebufferRenderbuffer(r.FRAMEBUFFER, Z, r.RENDERBUFFER, X);
      }
    } else {
      const W = E.texture.mipmaps;
      if (W && W.length > 0 ? t.bindFramebuffer(r.FRAMEBUFFER, y.__webglFramebuffer[0]) : t.bindFramebuffer(r.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer === void 0) y.__webglDepthbuffer = r.createRenderbuffer(), Oe(y.__webglDepthbuffer, E, false);
      else {
        const Z = E.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, X = y.__webglDepthbuffer;
        r.bindRenderbuffer(r.RENDERBUFFER, X), r.framebufferRenderbuffer(r.FRAMEBUFFER, Z, r.RENDERBUFFER, X);
      }
    }
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function lt(E, y, U) {
    const W = i.get(E);
    y !== void 0 && Se(W.__webglFramebuffer, E, E.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), U !== void 0 && Qe(E);
  }
  function Xe(E) {
    const y = E.texture, U = i.get(E), W = i.get(y);
    E.addEventListener("dispose", C);
    const Z = E.textures, X = E.isWebGLCubeRenderTarget === true, Re = Z.length > 1;
    if (Re || (W.__webglTexture === void 0 && (W.__webglTexture = r.createTexture()), W.__version = y.version, o.memory.textures++), X) {
      U.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++) if (y.mipmaps && y.mipmaps.length > 0) {
        U.__webglFramebuffer[oe] = [];
        for (let Ee = 0; Ee < y.mipmaps.length; Ee++) U.__webglFramebuffer[oe][Ee] = r.createFramebuffer();
      } else U.__webglFramebuffer[oe] = r.createFramebuffer();
    } else {
      if (y.mipmaps && y.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let oe = 0; oe < y.mipmaps.length; oe++) U.__webglFramebuffer[oe] = r.createFramebuffer();
      } else U.__webglFramebuffer = r.createFramebuffer();
      if (Re) for (let oe = 0, Ee = Z.length; oe < Ee; oe++) {
        const Be = i.get(Z[oe]);
        Be.__webglTexture === void 0 && (Be.__webglTexture = r.createTexture(), o.memory.textures++);
      }
      if (E.samples > 0 && De(E) === false) {
        U.__webglMultisampledFramebuffer = r.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let oe = 0; oe < Z.length; oe++) {
          const Ee = Z[oe];
          U.__webglColorRenderbuffer[oe] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, U.__webglColorRenderbuffer[oe]);
          const Be = s.convert(Ee.format, Ee.colorSpace), te = s.convert(Ee.type), ue = v(Ee.internalFormat, Be, te, Ee.colorSpace, E.isXRRenderTarget === true), Ce = I(E);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Ce, ue, E.width, E.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + oe, r.RENDERBUFFER, U.__webglColorRenderbuffer[oe]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), E.depthBuffer && (U.__webglDepthRenderbuffer = r.createRenderbuffer(), Oe(U.__webglDepthRenderbuffer, E, true)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (X) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, W.__webglTexture), We(r.TEXTURE_CUBE_MAP, y);
      for (let oe = 0; oe < 6; oe++) if (y.mipmaps && y.mipmaps.length > 0) for (let Ee = 0; Ee < y.mipmaps.length; Ee++) Se(U.__webglFramebuffer[oe][Ee], E, y, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, Ee);
      else Se(U.__webglFramebuffer[oe], E, y, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
      g(y) && p(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Re) {
      for (let oe = 0, Ee = Z.length; oe < Ee; oe++) {
        const Be = Z[oe], te = i.get(Be);
        let ue = r.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ue = E.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(ue, te.__webglTexture), We(ue, Be), Se(U.__webglFramebuffer, E, Be, r.COLOR_ATTACHMENT0 + oe, ue, 0), g(Be) && p(ue);
      }
      t.unbindTexture();
    } else {
      let oe = r.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (oe = E.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(oe, W.__webglTexture), We(oe, y), y.mipmaps && y.mipmaps.length > 0) for (let Ee = 0; Ee < y.mipmaps.length; Ee++) Se(U.__webglFramebuffer[Ee], E, y, r.COLOR_ATTACHMENT0, oe, Ee);
      else Se(U.__webglFramebuffer, E, y, r.COLOR_ATTACHMENT0, oe, 0);
      g(y) && p(oe), t.unbindTexture();
    }
    E.depthBuffer && Qe(E);
  }
  function $(E) {
    const y = E.textures;
    for (let U = 0, W = y.length; U < W; U++) {
      const Z = y[U];
      if (g(Z)) {
        const X = x(E), Re = i.get(Z).__webglTexture;
        t.bindTexture(X, Re), p(X), t.unbindTexture();
      }
    }
  }
  const ie = [], Q = [];
  function ge(E) {
    if (E.samples > 0) {
      if (De(E) === false) {
        const y = E.textures, U = E.width, W = E.height;
        let Z = r.COLOR_BUFFER_BIT;
        const X = E.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Re = i.get(E), oe = y.length > 1;
        if (oe) for (let Be = 0; Be < y.length; Be++) t.bindFramebuffer(r.FRAMEBUFFER, Re.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Be, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, Re.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Be, r.TEXTURE_2D, null, 0);
        t.bindFramebuffer(r.READ_FRAMEBUFFER, Re.__webglMultisampledFramebuffer);
        const Ee = E.texture.mipmaps;
        Ee && Ee.length > 0 ? t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Re.__webglFramebuffer[0]) : t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Re.__webglFramebuffer);
        for (let Be = 0; Be < y.length; Be++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (Z |= r.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (Z |= r.STENCIL_BUFFER_BIT)), oe) {
            r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, Re.__webglColorRenderbuffer[Be]);
            const te = i.get(y[Be]).__webglTexture;
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, te, 0);
          }
          r.blitFramebuffer(0, 0, U, W, 0, 0, U, W, Z, r.NEAREST), l === true && (ie.length = 0, Q.length = 0, ie.push(r.COLOR_ATTACHMENT0 + Be), E.depthBuffer && E.resolveDepthBuffer === false && (ie.push(X), Q.push(X), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, Q)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, ie));
        }
        if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), oe) for (let Be = 0; Be < y.length; Be++) {
          t.bindFramebuffer(r.FRAMEBUFFER, Re.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Be, r.RENDERBUFFER, Re.__webglColorRenderbuffer[Be]);
          const te = i.get(y[Be]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, Re.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Be, r.TEXTURE_2D, te, 0);
        }
        t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Re.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && l) {
        const y = E.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [y]);
      }
    }
  }
  function I(E) {
    return Math.min(n.maxSamples, E.samples);
  }
  function De(E) {
    const y = i.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && y.__useRenderToTexture !== false;
  }
  function xe(E) {
    const y = o.render.frame;
    h.get(E) !== y && (h.set(E, y), E.update());
  }
  function Fe(E, y) {
    const U = E.colorSpace, W = E.format, Z = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || U !== ls && U !== Ji && (je.getTransfer(U) === rt ? (W !== Wt || Z !== Qt) && de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Le("WebGLTextures: Unsupported texture color space:", U)), y;
  }
  function re(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = B, this.resetTextureUnits = O, this.setTexture2D = q, this.setTexture2DArray = V, this.setTexture3D = H, this.setTextureCube = j, this.rebindTextures = lt, this.setupRenderTarget = Xe, this.updateRenderTargetMipmap = $, this.updateMultisampleRenderTarget = ge, this.setupDepthRenderbuffer = Qe, this.setupFrameBufferTexture = Se, this.useMultisampledRTT = De, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function vx(r, e) {
  function t(i, n = Ji) {
    let s;
    const o = je.getTransfer(n);
    if (i === Qt) return r.UNSIGNED_BYTE;
    if (i === Ml) return r.UNSIGNED_SHORT_4_4_4_4;
    if (i === Sl) return r.UNSIGNED_SHORT_5_5_5_1;
    if (i === ou) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (i === au) return r.UNSIGNED_INT_10F_11F_11F_REV;
    if (i === su) return r.BYTE;
    if (i === ru) return r.SHORT;
    if (i === Vs) return r.UNSIGNED_SHORT;
    if (i === yl) return r.INT;
    if (i === di) return r.UNSIGNED_INT;
    if (i === Ht) return r.FLOAT;
    if (i === Bi) return r.HALF_FLOAT;
    if (i === lu) return r.ALPHA;
    if (i === cu) return r.RGB;
    if (i === Wt) return r.RGBA;
    if (i === zi) return r.DEPTH_COMPONENT;
    if (i === yn) return r.DEPTH_STENCIL;
    if (i === bl) return r.RED;
    if (i === _o) return r.RED_INTEGER;
    if (i === as) return r.RG;
    if (i === Tl) return r.RG_INTEGER;
    if (i === Al) return r.RGBA_INTEGER;
    if (i === Zr || i === Jr || i === $r || i === Kr) if (o === rt) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (i === Zr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (i === Jr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (i === $r) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (i === Kr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (i === Zr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (i === Jr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (i === $r) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (i === Kr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (i === Pa || i === La || i === Da || i === Ua) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (i === Pa) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (i === La) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (i === Da) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (i === Ua) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (i === Na || i === Oa || i === Fa || i === Ba || i === za || i === Va || i === ka) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (i === Na || i === Oa) return o === rt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (i === Fa) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      if (i === Ba) return s.COMPRESSED_R11_EAC;
      if (i === za) return s.COMPRESSED_SIGNED_R11_EAC;
      if (i === Va) return s.COMPRESSED_RG11_EAC;
      if (i === ka) return s.COMPRESSED_SIGNED_RG11_EAC;
    } else return null;
    if (i === Ga || i === Ha || i === Wa || i === Xa || i === qa || i === Ya || i === Za || i === Ja || i === $a || i === Ka || i === Qa || i === ja || i === el || i === tl) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (i === Ga) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (i === Ha) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (i === Wa) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (i === Xa) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (i === qa) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (i === Ya) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (i === Za) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (i === Ja) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (i === $a) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (i === Ka) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (i === Qa) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (i === ja) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (i === el) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (i === tl) return o === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (i === il || i === nl || i === sl) if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
      if (i === il) return o === rt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (i === nl) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (i === sl) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (i === rl || i === ol || i === al || i === ll) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
      if (i === rl) return s.COMPRESSED_RED_RGTC1_EXT;
      if (i === ol) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (i === al) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (i === ll) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return i === ks ? r.UNSIGNED_INT_24_8 : r[i] !== void 0 ? r[i] : null;
  }
  return { convert: t };
}
const xx = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, yx = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Mx {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const i = new bu(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new fi({ vertexShader: xx, fragmentShader: yx, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Tt(new js(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Sx extends Vi {
  constructor(e, t) {
    super();
    const i = this;
    let n = null, s = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, d = null, f = null, m = null;
    const _ = typeof XRWebGLBinding < "u", g = new Mx(), p = {}, x = t.getContextAttributes();
    let v = null, M = null;
    const A = [], w = [], C = new K();
    let P = null;
    const S = new Pt();
    S.viewport = new pt();
    const b = new Pt();
    b.viewport = new pt();
    const L = [S, b], O = new lm();
    let B = null, G = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Y) {
      let ee = A[Y];
      return ee === void 0 && (ee = new Qo(), A[Y] = ee), ee.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let ee = A[Y];
      return ee === void 0 && (ee = new Qo(), A[Y] = ee), ee.getGripSpace();
    }, this.getHand = function(Y) {
      let ee = A[Y];
      return ee === void 0 && (ee = new Qo(), A[Y] = ee), ee.getHandSpace();
    };
    function q(Y) {
      const ee = w.indexOf(Y.inputSource);
      if (ee === -1) return;
      const Se = A[ee];
      Se !== void 0 && (Se.update(Y.inputSource, Y.frame, c || o), Se.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function V() {
      n.removeEventListener("select", q), n.removeEventListener("selectstart", q), n.removeEventListener("selectend", q), n.removeEventListener("squeeze", q), n.removeEventListener("squeezestart", q), n.removeEventListener("squeezeend", q), n.removeEventListener("end", V), n.removeEventListener("inputsourceschange", H);
      for (let Y = 0; Y < A.length; Y++) {
        const ee = w[Y];
        ee !== null && (w[Y] = null, A[Y].disconnect(ee));
      }
      B = null, G = null, g.reset();
      for (const Y in p) delete p[Y];
      e.setRenderTarget(v), f = null, d = null, u = null, n = null, M = null, at.stop(), i.isPresenting = false, e.setPixelRatio(P), e.setSize(C.width, C.height, false), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      s = Y, i.isPresenting === true && de("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      a = Y, i.isPresenting === true && de("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u === null && _ && (u = new XRWebGLBinding(n, t)), u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return n;
    }, this.setSession = async function(Y) {
      if (n = Y, n !== null) {
        if (v = e.getRenderTarget(), n.addEventListener("select", q), n.addEventListener("selectstart", q), n.addEventListener("selectend", q), n.addEventListener("squeeze", q), n.addEventListener("squeezestart", q), n.addEventListener("squeezeend", q), n.addEventListener("end", V), n.addEventListener("inputsourceschange", H), x.xrCompatible !== true && await t.makeXRCompatible(), P = e.getPixelRatio(), e.getSize(C), _ && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let Se = null, Oe = null, Te = null;
          x.depth && (Te = x.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Se = x.stencil ? yn : zi, Oe = x.stencil ? ks : di);
          const Qe = { colorFormat: t.RGBA8, depthFormat: Te, scaleFactor: s };
          u = this.getBinding(), d = u.createProjectionLayer(Qe), n.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), M = new ai(d.textureWidth, d.textureHeight, { format: Wt, type: Qt, depthTexture: new qs(d.textureWidth, d.textureHeight, Oe, void 0, void 0, void 0, void 0, void 0, void 0, Se), stencilBuffer: x.stencil, colorSpace: e.outputColorSpace, samples: x.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false });
        } else {
          const Se = { antialias: x.antialias, alpha: true, depth: x.depth, stencil: x.stencil, framebufferScaleFactor: s };
          f = new XRWebGLLayer(n, t, Se), n.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, false), M = new ai(f.framebufferWidth, f.framebufferHeight, { format: Wt, type: Qt, colorSpace: e.outputColorSpace, stencilBuffer: x.stencil, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        }
        M.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await n.requestReferenceSpace(a), at.setContext(n), at.start(), i.isPresenting = true, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (n !== null) return n.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function H(Y) {
      for (let ee = 0; ee < Y.removed.length; ee++) {
        const Se = Y.removed[ee], Oe = w.indexOf(Se);
        Oe >= 0 && (w[Oe] = null, A[Oe].disconnect(Se));
      }
      for (let ee = 0; ee < Y.added.length; ee++) {
        const Se = Y.added[ee];
        let Oe = w.indexOf(Se);
        if (Oe === -1) {
          for (let Qe = 0; Qe < A.length; Qe++) if (Qe >= w.length) {
            w.push(Se), Oe = Qe;
            break;
          } else if (w[Qe] === null) {
            w[Qe] = Se, Oe = Qe;
            break;
          }
          if (Oe === -1) break;
        }
        const Te = A[Oe];
        Te && Te.connect(Se);
      }
    }
    const j = new R(), pe = new R();
    function ae(Y, ee, Se) {
      j.setFromMatrixPosition(ee.matrixWorld), pe.setFromMatrixPosition(Se.matrixWorld);
      const Oe = j.distanceTo(pe), Te = ee.projectionMatrix.elements, Qe = Se.projectionMatrix.elements, lt = Te[14] / (Te[10] - 1), Xe = Te[14] / (Te[10] + 1), $ = (Te[9] + 1) / Te[5], ie = (Te[9] - 1) / Te[5], Q = (Te[8] - 1) / Te[0], ge = (Qe[8] + 1) / Qe[0], I = lt * Q, De = lt * ge, xe = Oe / (-Q + ge), Fe = xe * -Q;
      if (ee.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(Fe), Y.translateZ(xe), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), Te[10] === -1) Y.projectionMatrix.copy(ee.projectionMatrix), Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);
      else {
        const re = lt + xe, E = Xe + xe, y = I - Fe, U = De + (Oe - Fe), W = $ * Xe / E * re, Z = ie * Xe / E * re;
        Y.projectionMatrix.makePerspective(y, U, W, Z, re, E), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function he(Y, ee) {
      ee === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(ee.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (n === null) return;
      let ee = Y.near, Se = Y.far;
      g.texture !== null && (g.depthNear > 0 && (ee = g.depthNear), g.depthFar > 0 && (Se = g.depthFar)), O.near = b.near = S.near = ee, O.far = b.far = S.far = Se, (B !== O.near || G !== O.far) && (n.updateRenderState({ depthNear: O.near, depthFar: O.far }), B = O.near, G = O.far), O.layers.mask = Y.layers.mask | 6, S.layers.mask = O.layers.mask & 3, b.layers.mask = O.layers.mask & 5;
      const Oe = Y.parent, Te = O.cameras;
      he(O, Oe);
      for (let Qe = 0; Qe < Te.length; Qe++) he(Te[Qe], Oe);
      Te.length === 2 ? ae(O, S, b) : O.projectionMatrix.copy(S.projectionMatrix), We(Y, O, Oe);
    };
    function We(Y, ee, Se) {
      Se === null ? Y.matrix.copy(ee.matrixWorld) : (Y.matrix.copy(Se.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(ee.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(true), Y.projectionMatrix.copy(ee.projectionMatrix), Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = cs * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(d === null && f === null)) return l;
    }, this.setFoveation = function(Y) {
      l = Y, d !== null && (d.fixedFoveation = Y), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(O);
    }, this.getCameraTexture = function(Y) {
      return p[Y];
    };
    let ke = null;
    function ot(Y, ee) {
      if (h = ee.getViewerPose(c || o), m = ee, h !== null) {
        const Se = h.views;
        f !== null && (e.setRenderTargetFramebuffer(M, f.framebuffer), e.setRenderTarget(M));
        let Oe = false;
        Se.length !== O.cameras.length && (O.cameras.length = 0, Oe = true);
        for (let Xe = 0; Xe < Se.length; Xe++) {
          const $ = Se[Xe];
          let ie = null;
          if (f !== null) ie = f.getViewport($);
          else {
            const ge = u.getViewSubImage(d, $);
            ie = ge.viewport, Xe === 0 && (e.setRenderTargetTextures(M, ge.colorTexture, ge.depthStencilTexture), e.setRenderTarget(M));
          }
          let Q = L[Xe];
          Q === void 0 && (Q = new Pt(), Q.layers.enable(Xe), Q.viewport = new pt(), L[Xe] = Q), Q.matrix.fromArray($.transform.matrix), Q.matrix.decompose(Q.position, Q.quaternion, Q.scale), Q.projectionMatrix.fromArray($.projectionMatrix), Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(), Q.viewport.set(ie.x, ie.y, ie.width, ie.height), Xe === 0 && (O.matrix.copy(Q.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), Oe === true && O.cameras.push(Q);
        }
        const Te = n.enabledFeatures;
        if (Te && Te.includes("depth-sensing") && n.depthUsage == "gpu-optimized" && _) {
          u = i.getBinding();
          const Xe = u.getDepthInformation(Se[0]);
          Xe && Xe.isValid && Xe.texture && g.init(Xe, n.renderState);
        }
        if (Te && Te.includes("camera-access") && _) {
          e.state.unbindTexture(), u = i.getBinding();
          for (let Xe = 0; Xe < Se.length; Xe++) {
            const $ = Se[Xe].camera;
            if ($) {
              let ie = p[$];
              ie || (ie = new bu(), p[$] = ie);
              const Q = u.getCameraImage($);
              ie.sourceTexture = Q;
            }
          }
        }
      }
      for (let Se = 0; Se < A.length; Se++) {
        const Oe = w[Se], Te = A[Se];
        Oe !== null && Te !== void 0 && Te.update(Oe, ee, c || o);
      }
      ke && ke(Y, ee), ee.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: ee }), m = null;
    }
    const at = new qu();
    at.setAnimationLoop(ot), this.setAnimationLoop = function(Y) {
      ke = Y;
    }, this.dispose = function() {
    };
  }
}
const gn = new li(), bx = new Ge();
function Tx(r, e) {
  function t(g, p) {
    g.matrixAutoUpdate === true && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function i(g, p) {
    p.color.getRGB(g.fogColor.value, _u(r)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function n(g, p, x, v, M) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(g, p) : p.isMeshToonMaterial ? (s(g, p), u(g, p)) : p.isMeshPhongMaterial ? (s(g, p), h(g, p)) : p.isMeshStandardMaterial ? (s(g, p), d(g, p), p.isMeshPhysicalMaterial && f(g, p, M)) : p.isMeshMatcapMaterial ? (s(g, p), m(g, p)) : p.isMeshDepthMaterial ? s(g, p) : p.isMeshDistanceMaterial ? (s(g, p), _(g, p)) : p.isMeshNormalMaterial ? s(g, p) : p.isLineBasicMaterial ? (o(g, p), p.isLineDashedMaterial && a(g, p)) : p.isPointsMaterial ? l(g, p, x, v) : p.isSpriteMaterial ? c(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function s(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, t(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === Xt && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, t(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === Xt && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, t(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, t(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    const x = e.get(p), v = x.envMap, M = x.envMapRotation;
    v && (g.envMap.value = v, gn.copy(M), gn.x *= -1, gn.y *= -1, gn.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === false && (gn.y *= -1, gn.z *= -1), g.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(gn)), g.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === false ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, g.lightMapTransform)), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, g.aoMapTransform));
  }
  function o(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, t(p.map, g.mapTransform));
  }
  function a(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function l(g, p, x, v) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * x, g.scale.value = v * 0.5, p.map && (g.map.value = p.map, t(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function c(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function h(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function d(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, g.roughnessMapTransform)), p.envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function f(g, p, x) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Xt && g.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (g.dispersion.value = p.dispersion), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = x.texture, g.transmissionSamplerSize.value.set(x.width, x.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function _(g, p) {
    const x = e.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(x.matrixWorld), g.nearDistance.value = x.shadow.camera.near, g.farDistance.value = x.shadow.camera.far;
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: n };
}
function Ax(r, e, t, i) {
  let n = {}, s = {}, o = [];
  const a = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(x, v) {
    const M = v.program;
    i.uniformBlockBinding(x, M);
  }
  function c(x, v) {
    let M = n[x.id];
    M === void 0 && (m(x), M = h(x), n[x.id] = M, x.addEventListener("dispose", g));
    const A = v.program;
    i.updateUBOMapping(x, A);
    const w = e.render.frame;
    s[x.id] !== w && (d(x), s[x.id] = w);
  }
  function h(x) {
    const v = u();
    x.__bindingPointIndex = v;
    const M = r.createBuffer(), A = x.__size, w = x.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, M), r.bufferData(r.UNIFORM_BUFFER, A, w), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, M), M;
  }
  function u() {
    for (let x = 0; x < a; x++) if (o.indexOf(x) === -1) return o.push(x), x;
    return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(x) {
    const v = n[x.id], M = x.uniforms, A = x.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, v);
    for (let w = 0, C = M.length; w < C; w++) {
      const P = Array.isArray(M[w]) ? M[w] : [M[w]];
      for (let S = 0, b = P.length; S < b; S++) {
        const L = P[S];
        if (f(L, w, S, A) === true) {
          const O = L.__offset, B = Array.isArray(L.value) ? L.value : [L.value];
          let G = 0;
          for (let q = 0; q < B.length; q++) {
            const V = B[q], H = _(V);
            typeof V == "number" || typeof V == "boolean" ? (L.__data[0] = V, r.bufferSubData(r.UNIFORM_BUFFER, O + G, L.__data)) : V.isMatrix3 ? (L.__data[0] = V.elements[0], L.__data[1] = V.elements[1], L.__data[2] = V.elements[2], L.__data[3] = 0, L.__data[4] = V.elements[3], L.__data[5] = V.elements[4], L.__data[6] = V.elements[5], L.__data[7] = 0, L.__data[8] = V.elements[6], L.__data[9] = V.elements[7], L.__data[10] = V.elements[8], L.__data[11] = 0) : (V.toArray(L.__data, G), G += H.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, O, L.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function f(x, v, M, A) {
    const w = x.value, C = v + "_" + M;
    if (A[C] === void 0) return typeof w == "number" || typeof w == "boolean" ? A[C] = w : A[C] = w.clone(), true;
    {
      const P = A[C];
      if (typeof w == "number" || typeof w == "boolean") {
        if (P !== w) return A[C] = w, true;
      } else if (P.equals(w) === false) return P.copy(w), true;
    }
    return false;
  }
  function m(x) {
    const v = x.uniforms;
    let M = 0;
    const A = 16;
    for (let C = 0, P = v.length; C < P; C++) {
      const S = Array.isArray(v[C]) ? v[C] : [v[C]];
      for (let b = 0, L = S.length; b < L; b++) {
        const O = S[b], B = Array.isArray(O.value) ? O.value : [O.value];
        for (let G = 0, q = B.length; G < q; G++) {
          const V = B[G], H = _(V), j = M % A, pe = j % H.boundary, ae = j + pe;
          M += pe, ae !== 0 && A - ae < H.storage && (M += A - ae), O.__data = new Float32Array(H.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = M, M += H.storage;
        }
      }
    }
    const w = M % A;
    return w > 0 && (M += A - w), x.__size = M, x.__cache = {}, this;
  }
  function _(x) {
    const v = { boundary: 0, storage: 0 };
    return typeof x == "number" || typeof x == "boolean" ? (v.boundary = 4, v.storage = 4) : x.isVector2 ? (v.boundary = 8, v.storage = 8) : x.isVector3 || x.isColor ? (v.boundary = 16, v.storage = 12) : x.isVector4 ? (v.boundary = 16, v.storage = 16) : x.isMatrix3 ? (v.boundary = 48, v.storage = 48) : x.isMatrix4 ? (v.boundary = 64, v.storage = 64) : x.isTexture ? de("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : de("WebGLRenderer: Unsupported uniform value type.", x), v;
  }
  function g(x) {
    const v = x.target;
    v.removeEventListener("dispose", g);
    const M = o.indexOf(v.__bindingPointIndex);
    o.splice(M, 1), r.deleteBuffer(n[v.id]), delete n[v.id], delete s[v.id];
  }
  function p() {
    for (const x in n) r.deleteBuffer(n[x]);
    o = [], n = {}, s = {};
  }
  return { bind: l, update: c, dispose: p };
}
const wx = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let vi = null;
function Ex() {
  return vi === null && (vi = new Si(wx, 16, 16, as, Bi), vi.name = "DFG_LUT", vi.minFilter = mt, vi.magFilter = mt, vi.wrapS = ei, vi.wrapT = ei, vi.generateMipmaps = false, vi.needsUpdate = true), vi;
}
class bM {
  constructor(e = {}) {
    const { canvas: t = kd(), context: i = null, depth: n = true, stencil: s = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reversedDepthBuffer: d = false, outputBufferType: f = Qt } = e;
    this.isWebGLRenderer = true;
    let m;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = i.getContextAttributes().alpha;
    } else m = o;
    const _ = f, g = /* @__PURE__ */ new Set([Al, Tl, _o]), p = /* @__PURE__ */ new Set([Qt, di, Vs, ks, Ml, Sl]), x = new Uint32Array(4), v = new Int32Array(4);
    let M = null, A = null;
    const w = [], C = [];
    let P = null;
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Mi, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const S = this;
    let b = false;
    this._outputColorSpace = Kt;
    let L = 0, O = 0, B = null, G = -1, q = null;
    const V = new pt(), H = new pt();
    let j = null;
    const pe = new Me(0);
    let ae = 0, he = t.width, We = t.height, ke = 1, ot = null, at = null;
    const Y = new pt(0, 0, he, We), ee = new pt(0, 0, he, We);
    let Se = false;
    const Oe = new Qs();
    let Te = false, Qe = false;
    const lt = new Ge(), Xe = new R(), $ = new pt(), ie = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Q = false;
    function ge() {
      return B === null ? ke : 1;
    }
    let I = i;
    function De(T, N) {
      return t.getContext(T, N);
    }
    try {
      const T = { alpha: true, depth: n, stencil: s, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r182"), t.addEventListener("webglcontextlost", He, false), t.addEventListener("webglcontextrestored", dt, false), t.addEventListener("webglcontextcreationerror", nt, false), I === null) {
        const N = "webgl2";
        if (I = De(N, T), I === null) throw De(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (T) {
      throw Le("WebGLRenderer: " + T.message), T;
    }
    let xe, Fe, re, E, y, U, W, Z, X, Re, oe, Ee, Be, te, ue, Ce, Ie, ce, $e, D, ve, se, ye, ne;
    function J() {
      xe = new Ev(I), xe.init(), se = new vx(I, xe), Fe = new vv(I, xe, e, se), re = new gx(I, xe), Fe.reversedDepthBuffer && d && re.buffers.depth.setReversed(true), E = new Iv(I), y = new tx(), U = new _x(I, xe, re, y, Fe, se, E), W = new yv(S), Z = new wv(S), X = new Um(I), ye = new gv(I, X), Re = new Cv(I, X, E, ye), oe = new Lv(I, Re, X, E), $e = new Pv(I, Fe, U), Ce = new xv(y), Ee = new ex(S, W, Z, xe, Fe, ye, Ce), Be = new Tx(S, y), te = new nx(), ue = new cx(xe), ce = new mv(S, W, Z, re, oe, m, l), Ie = new px(S, oe, Fe), ne = new Ax(I, E, Fe, re), D = new _v(I, xe, E), ve = new Rv(I, xe, E), E.programs = Ee.programs, S.capabilities = Fe, S.extensions = xe, S.properties = y, S.renderLists = te, S.shadowMap = Ie, S.state = re, S.info = E;
    }
    J(), _ !== Qt && (P = new Uv(_, t.width, t.height, n, s));
    const le = new Sx(S, I);
    this.xr = le, this.getContext = function() {
      return I;
    }, this.getContextAttributes = function() {
      return I.getContextAttributes();
    }, this.forceContextLoss = function() {
      const T = xe.get("WEBGL_lose_context");
      T && T.loseContext();
    }, this.forceContextRestore = function() {
      const T = xe.get("WEBGL_lose_context");
      T && T.restoreContext();
    }, this.getPixelRatio = function() {
      return ke;
    }, this.setPixelRatio = function(T) {
      T !== void 0 && (ke = T, this.setSize(he, We, false));
    }, this.getSize = function(T) {
      return T.set(he, We);
    }, this.setSize = function(T, N, k = true) {
      if (le.isPresenting) {
        de("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      he = T, We = N, t.width = Math.floor(T * ke), t.height = Math.floor(N * ke), k === true && (t.style.width = T + "px", t.style.height = N + "px"), P !== null && P.setSize(t.width, t.height), this.setViewport(0, 0, T, N);
    }, this.getDrawingBufferSize = function(T) {
      return T.set(he * ke, We * ke).floor();
    }, this.setDrawingBufferSize = function(T, N, k) {
      he = T, We = N, ke = k, t.width = Math.floor(T * k), t.height = Math.floor(N * k), this.setViewport(0, 0, T, N);
    }, this.setEffects = function(T) {
      if (_ === Qt) {
        console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (T) {
        for (let N = 0; N < T.length; N++) if (T[N].isOutputPass === true) {
          console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      P.setEffects(T || []);
    }, this.getCurrentViewport = function(T) {
      return T.copy(V);
    }, this.getViewport = function(T) {
      return T.copy(Y);
    }, this.setViewport = function(T, N, k, z) {
      T.isVector4 ? Y.set(T.x, T.y, T.z, T.w) : Y.set(T, N, k, z), re.viewport(V.copy(Y).multiplyScalar(ke).round());
    }, this.getScissor = function(T) {
      return T.copy(ee);
    }, this.setScissor = function(T, N, k, z) {
      T.isVector4 ? ee.set(T.x, T.y, T.z, T.w) : ee.set(T, N, k, z), re.scissor(H.copy(ee).multiplyScalar(ke).round());
    }, this.getScissorTest = function() {
      return Se;
    }, this.setScissorTest = function(T) {
      re.setScissorTest(Se = T);
    }, this.setOpaqueSort = function(T) {
      ot = T;
    }, this.setTransparentSort = function(T) {
      at = T;
    }, this.getClearColor = function(T) {
      return T.copy(ce.getClearColor());
    }, this.setClearColor = function() {
      ce.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ce.getClearAlpha();
    }, this.setClearAlpha = function() {
      ce.setClearAlpha(...arguments);
    }, this.clear = function(T = true, N = true, k = true) {
      let z = 0;
      if (T) {
        let F = false;
        if (B !== null) {
          const fe = B.texture.format;
          F = g.has(fe);
        }
        if (F) {
          const fe = B.texture.type, be = p.has(fe), _e = ce.getClearColor(), we = ce.getClearAlpha(), Pe = _e.r, Ve = _e.g, Ue = _e.b;
          be ? (x[0] = Pe, x[1] = Ve, x[2] = Ue, x[3] = we, I.clearBufferuiv(I.COLOR, 0, x)) : (v[0] = Pe, v[1] = Ve, v[2] = Ue, v[3] = we, I.clearBufferiv(I.COLOR, 0, v));
        } else z |= I.COLOR_BUFFER_BIT;
      }
      N && (z |= I.DEPTH_BUFFER_BIT), k && (z |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), I.clear(z);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", He, false), t.removeEventListener("webglcontextrestored", dt, false), t.removeEventListener("webglcontextcreationerror", nt, false), ce.dispose(), te.dispose(), ue.dispose(), y.dispose(), W.dispose(), Z.dispose(), oe.dispose(), ye.dispose(), ne.dispose(), Ee.dispose(), le.dispose(), le.removeEventListener("sessionstart", oc), le.removeEventListener("sessionend", ac), en.stop();
    };
    function He(T) {
      T.preventDefault(), ao("WebGLRenderer: Context Lost."), b = true;
    }
    function dt() {
      ao("WebGLRenderer: Context Restored."), b = false;
      const T = E.autoReset, N = Ie.enabled, k = Ie.autoUpdate, z = Ie.needsUpdate, F = Ie.type;
      J(), E.autoReset = T, Ie.enabled = N, Ie.autoUpdate = k, Ie.needsUpdate = z, Ie.type = F;
    }
    function nt(T) {
      Le("WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
    }
    function mi(T) {
      const N = T.target;
      N.removeEventListener("dispose", mi), Ti(N);
    }
    function Ti(T) {
      Ku(T), y.remove(T);
    }
    function Ku(T) {
      const N = y.get(T).programs;
      N !== void 0 && (N.forEach(function(k) {
        Ee.releaseProgram(k);
      }), T.isShaderMaterial && Ee.releaseShaderCache(T));
    }
    this.renderBufferDirect = function(T, N, k, z, F, fe) {
      N === null && (N = ie);
      const be = F.isMesh && F.matrixWorld.determinant() < 0, _e = ju(T, N, k, z, F);
      re.setMaterial(z, be);
      let we = k.index, Pe = 1;
      if (z.wireframe === true) {
        if (we = Re.getWireframeAttribute(k), we === void 0) return;
        Pe = 2;
      }
      const Ve = k.drawRange, Ue = k.attributes.position;
      let Ke = Ve.start * Pe, ct = (Ve.start + Ve.count) * Pe;
      fe !== null && (Ke = Math.max(Ke, fe.start * Pe), ct = Math.min(ct, (fe.start + fe.count) * Pe)), we !== null ? (Ke = Math.max(Ke, 0), ct = Math.min(ct, we.count)) : Ue != null && (Ke = Math.max(Ke, 0), ct = Math.min(ct, Ue.count));
      const _t = ct - Ke;
      if (_t < 0 || _t === 1 / 0) return;
      ye.setup(F, z, _e, k, we);
      let vt, ht = D;
      if (we !== null && (vt = X.get(we), ht = ve, ht.setIndex(vt)), F.isMesh) z.wireframe === true ? (re.setLineWidth(z.wireframeLinewidth * ge()), ht.setMode(I.LINES)) : ht.setMode(I.TRIANGLES);
      else if (F.isLine) {
        let Ne = z.linewidth;
        Ne === void 0 && (Ne = 1), re.setLineWidth(Ne * ge()), F.isLineSegments ? ht.setMode(I.LINES) : F.isLineLoop ? ht.setMode(I.LINE_LOOP) : ht.setMode(I.LINE_STRIP);
      } else F.isPoints ? ht.setMode(I.POINTS) : F.isSprite && ht.setMode(I.TRIANGLES);
      if (F.isBatchedMesh) if (F._multiDrawInstances !== null) Ws("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), ht.renderMultiDrawInstances(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount, F._multiDrawInstances);
      else if (xe.get("WEBGL_multi_draw")) ht.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount);
      else {
        const Ne = F._multiDrawStarts, st = F._multiDrawCounts, et = F._multiDrawCount, Yt = we ? X.get(we).bytesPerElement : 1, Pn = y.get(z).currentProgram.getUniforms();
        for (let Zt = 0; Zt < et; Zt++) Pn.setValue(I, "_gl_DrawID", Zt), ht.render(Ne[Zt] / Yt, st[Zt]);
      }
      else if (F.isInstancedMesh) ht.renderInstances(Ke, _t, F.count);
      else if (k.isInstancedBufferGeometry) {
        const Ne = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, st = Math.min(k.instanceCount, Ne);
        ht.renderInstances(Ke, _t, st);
      } else ht.render(Ke, _t);
    };
    function rc(T, N, k) {
      T.transparent === true && T.side === Pi && T.forceSinglePass === false ? (T.side = Xt, T.needsUpdate = true, tr(T, N, k), T.side = Ki, T.needsUpdate = true, tr(T, N, k), T.side = Pi) : tr(T, N, k);
    }
    this.compile = function(T, N, k = null) {
      k === null && (k = T), A = ue.get(k), A.init(N), C.push(A), k.traverseVisible(function(F) {
        F.isLight && F.layers.test(N.layers) && (A.pushLight(F), F.castShadow && A.pushShadow(F));
      }), T !== k && T.traverseVisible(function(F) {
        F.isLight && F.layers.test(N.layers) && (A.pushLight(F), F.castShadow && A.pushShadow(F));
      }), A.setupLights();
      const z = /* @__PURE__ */ new Set();
      return T.traverse(function(F) {
        if (!(F.isMesh || F.isPoints || F.isLine || F.isSprite)) return;
        const fe = F.material;
        if (fe) if (Array.isArray(fe)) for (let be = 0; be < fe.length; be++) {
          const _e = fe[be];
          rc(_e, k, F), z.add(_e);
        }
        else rc(fe, k, F), z.add(fe);
      }), A = C.pop(), z;
    }, this.compileAsync = function(T, N, k = null) {
      const z = this.compile(T, N, k);
      return new Promise((F) => {
        function fe() {
          if (z.forEach(function(be) {
            y.get(be).currentProgram.isReady() && z.delete(be);
          }), z.size === 0) {
            F(T);
            return;
          }
          setTimeout(fe, 10);
        }
        xe.get("KHR_parallel_shader_compile") !== null ? fe() : setTimeout(fe, 10);
      });
    };
    let Co = null;
    function Qu(T) {
      Co && Co(T);
    }
    function oc() {
      en.stop();
    }
    function ac() {
      en.start();
    }
    const en = new qu();
    en.setAnimationLoop(Qu), typeof self < "u" && en.setContext(self), this.setAnimationLoop = function(T) {
      Co = T, le.setAnimationLoop(T), T === null ? en.stop() : en.start();
    }, le.addEventListener("sessionstart", oc), le.addEventListener("sessionend", ac), this.render = function(T, N) {
      if (N !== void 0 && N.isCamera !== true) {
        Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (b === true) return;
      const k = le.enabled === true && le.isPresenting === true, z = P !== null && (B === null || k) && P.begin(S, B);
      if (T.matrixWorldAutoUpdate === true && T.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === true && N.updateMatrixWorld(), le.enabled === true && le.isPresenting === true && (P === null || P.isCompositing() === false) && (le.cameraAutoUpdate === true && le.updateCamera(N), N = le.getCamera()), T.isScene === true && T.onBeforeRender(S, T, N, B), A = ue.get(T, C.length), A.init(N), C.push(A), lt.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), Oe.setFromProjectionMatrix(lt, oi, N.reversedDepth), Qe = this.localClippingEnabled, Te = Ce.init(this.clippingPlanes, Qe), M = te.get(T, w.length), M.init(), w.push(M), le.enabled === true && le.isPresenting === true) {
        const be = S.xr.getDepthSensingMesh();
        be !== null && Ro(be, N, -1 / 0, S.sortObjects);
      }
      Ro(T, N, 0, S.sortObjects), M.finish(), S.sortObjects === true && M.sort(ot, at), Q = le.enabled === false || le.isPresenting === false || le.hasDepthSensing() === false, Q && ce.addToRenderList(M, T), this.info.render.frame++, Te === true && Ce.beginShadows();
      const F = A.state.shadowsArray;
      if (Ie.render(F, T, N), Te === true && Ce.endShadows(), this.info.autoReset === true && this.info.reset(), (z && P.hasRenderPass()) === false) {
        const be = M.opaque, _e = M.transmissive;
        if (A.setupLights(), N.isArrayCamera) {
          const we = N.cameras;
          if (_e.length > 0) for (let Pe = 0, Ve = we.length; Pe < Ve; Pe++) {
            const Ue = we[Pe];
            cc(be, _e, T, Ue);
          }
          Q && ce.render(T);
          for (let Pe = 0, Ve = we.length; Pe < Ve; Pe++) {
            const Ue = we[Pe];
            lc(M, T, Ue, Ue.viewport);
          }
        } else _e.length > 0 && cc(be, _e, T, N), Q && ce.render(T), lc(M, T, N);
      }
      B !== null && O === 0 && (U.updateMultisampleRenderTarget(B), U.updateRenderTargetMipmap(B)), z && P.end(S), T.isScene === true && T.onAfterRender(S, T, N), ye.resetDefaultState(), G = -1, q = null, C.pop(), C.length > 0 ? (A = C[C.length - 1], Te === true && Ce.setGlobalState(S.clippingPlanes, A.state.camera)) : A = null, w.pop(), w.length > 0 ? M = w[w.length - 1] : M = null;
    };
    function Ro(T, N, k, z) {
      if (T.visible === false) return;
      if (T.layers.test(N.layers)) {
        if (T.isGroup) k = T.renderOrder;
        else if (T.isLOD) T.autoUpdate === true && T.update(N);
        else if (T.isLight) A.pushLight(T), T.castShadow && A.pushShadow(T);
        else if (T.isSprite) {
          if (!T.frustumCulled || Oe.intersectsSprite(T)) {
            z && $.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);
            const be = oe.update(T), _e = T.material;
            _e.visible && M.push(T, be, _e, k, $.z, null);
          }
        } else if ((T.isMesh || T.isLine || T.isPoints) && (!T.frustumCulled || Oe.intersectsObject(T))) {
          const be = oe.update(T), _e = T.material;
          if (z && (T.boundingSphere !== void 0 ? (T.boundingSphere === null && T.computeBoundingSphere(), $.copy(T.boundingSphere.center)) : (be.boundingSphere === null && be.computeBoundingSphere(), $.copy(be.boundingSphere.center)), $.applyMatrix4(T.matrixWorld).applyMatrix4(lt)), Array.isArray(_e)) {
            const we = be.groups;
            for (let Pe = 0, Ve = we.length; Pe < Ve; Pe++) {
              const Ue = we[Pe], Ke = _e[Ue.materialIndex];
              Ke && Ke.visible && M.push(T, be, Ke, k, $.z, Ue);
            }
          } else _e.visible && M.push(T, be, _e, k, $.z, null);
        }
      }
      const fe = T.children;
      for (let be = 0, _e = fe.length; be < _e; be++) Ro(fe[be], N, k, z);
    }
    function lc(T, N, k, z) {
      const { opaque: F, transmissive: fe, transparent: be } = T;
      A.setupLightsView(k), Te === true && Ce.setGlobalState(S.clippingPlanes, k), z && re.viewport(V.copy(z)), F.length > 0 && er(F, N, k), fe.length > 0 && er(fe, N, k), be.length > 0 && er(be, N, k), re.buffers.depth.setTest(true), re.buffers.depth.setMask(true), re.buffers.color.setMask(true), re.setPolygonOffset(false);
    }
    function cc(T, N, k, z) {
      if ((k.isScene === true ? k.overrideMaterial : null) !== null) return;
      if (A.state.transmissionRenderTarget[z.id] === void 0) {
        const Ke = xe.has("EXT_color_buffer_half_float") || xe.has("EXT_color_buffer_float");
        A.state.transmissionRenderTarget[z.id] = new ai(1, 1, { generateMipmaps: true, type: Ke ? Bi : Qt, minFilter: Di, samples: Fe.samples, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: je.workingColorSpace });
      }
      const fe = A.state.transmissionRenderTarget[z.id], be = z.viewport || V;
      fe.setSize(be.z * S.transmissionResolutionScale, be.w * S.transmissionResolutionScale);
      const _e = S.getRenderTarget(), we = S.getActiveCubeFace(), Pe = S.getActiveMipmapLevel();
      S.setRenderTarget(fe), S.getClearColor(pe), ae = S.getClearAlpha(), ae < 1 && S.setClearColor(16777215, 0.5), S.clear(), Q && ce.render(k);
      const Ve = S.toneMapping;
      S.toneMapping = Mi;
      const Ue = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), A.setupLightsView(z), Te === true && Ce.setGlobalState(S.clippingPlanes, z), er(T, k, z), U.updateMultisampleRenderTarget(fe), U.updateRenderTargetMipmap(fe), xe.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ke = false;
        for (let ct = 0, _t = N.length; ct < _t; ct++) {
          const vt = N[ct], { object: ht, geometry: Ne, material: st, group: et } = vt;
          if (st.side === Pi && ht.layers.test(z.layers)) {
            const Yt = st.side;
            st.side = Xt, st.needsUpdate = true, hc(ht, k, z, Ne, st, et), st.side = Yt, st.needsUpdate = true, Ke = true;
          }
        }
        Ke === true && (U.updateMultisampleRenderTarget(fe), U.updateRenderTargetMipmap(fe));
      }
      S.setRenderTarget(_e, we, Pe), S.setClearColor(pe, ae), Ue !== void 0 && (z.viewport = Ue), S.toneMapping = Ve;
    }
    function er(T, N, k) {
      const z = N.isScene === true ? N.overrideMaterial : null;
      for (let F = 0, fe = T.length; F < fe; F++) {
        const be = T[F], { object: _e, geometry: we, group: Pe } = be;
        let Ve = be.material;
        Ve.allowOverride === true && z !== null && (Ve = z), _e.layers.test(k.layers) && hc(_e, N, k, we, Ve, Pe);
      }
    }
    function hc(T, N, k, z, F, fe) {
      T.onBeforeRender(S, N, k, z, F, fe), T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), F.onBeforeRender(S, N, k, z, T, fe), F.transparent === true && F.side === Pi && F.forceSinglePass === false ? (F.side = Xt, F.needsUpdate = true, S.renderBufferDirect(k, N, z, F, T, fe), F.side = Ki, F.needsUpdate = true, S.renderBufferDirect(k, N, z, F, T, fe), F.side = Pi) : S.renderBufferDirect(k, N, z, F, T, fe), T.onAfterRender(S, N, k, z, F, fe);
    }
    function tr(T, N, k) {
      N.isScene !== true && (N = ie);
      const z = y.get(T), F = A.state.lights, fe = A.state.shadowsArray, be = F.state.version, _e = Ee.getParameters(T, F.state, fe, N, k), we = Ee.getProgramCacheKey(_e);
      let Pe = z.programs;
      z.environment = T.isMeshStandardMaterial ? N.environment : null, z.fog = N.fog, z.envMap = (T.isMeshStandardMaterial ? Z : W).get(T.envMap || z.environment), z.envMapRotation = z.environment !== null && T.envMap === null ? N.environmentRotation : T.envMapRotation, Pe === void 0 && (T.addEventListener("dispose", mi), Pe = /* @__PURE__ */ new Map(), z.programs = Pe);
      let Ve = Pe.get(we);
      if (Ve !== void 0) {
        if (z.currentProgram === Ve && z.lightsStateVersion === be) return dc(T, _e), Ve;
      } else _e.uniforms = Ee.getUniforms(T), T.onBeforeCompile(_e, S), Ve = Ee.acquireProgram(_e, we), Pe.set(we, Ve), z.uniforms = _e.uniforms;
      const Ue = z.uniforms;
      return (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === true) && (Ue.clippingPlanes = Ce.uniform), dc(T, _e), z.needsLights = td(T), z.lightsStateVersion = be, z.needsLights && (Ue.ambientLightColor.value = F.state.ambient, Ue.lightProbe.value = F.state.probe, Ue.directionalLights.value = F.state.directional, Ue.directionalLightShadows.value = F.state.directionalShadow, Ue.spotLights.value = F.state.spot, Ue.spotLightShadows.value = F.state.spotShadow, Ue.rectAreaLights.value = F.state.rectArea, Ue.ltc_1.value = F.state.rectAreaLTC1, Ue.ltc_2.value = F.state.rectAreaLTC2, Ue.pointLights.value = F.state.point, Ue.pointLightShadows.value = F.state.pointShadow, Ue.hemisphereLights.value = F.state.hemi, Ue.directionalShadowMap.value = F.state.directionalShadowMap, Ue.directionalShadowMatrix.value = F.state.directionalShadowMatrix, Ue.spotShadowMap.value = F.state.spotShadowMap, Ue.spotLightMatrix.value = F.state.spotLightMatrix, Ue.spotLightMap.value = F.state.spotLightMap, Ue.pointShadowMap.value = F.state.pointShadowMap, Ue.pointShadowMatrix.value = F.state.pointShadowMatrix), z.currentProgram = Ve, z.uniformsList = null, Ve;
    }
    function uc(T) {
      if (T.uniformsList === null) {
        const N = T.currentProgram.getUniforms();
        T.uniformsList = Qr.seqWithValue(N.seq, T.uniforms);
      }
      return T.uniformsList;
    }
    function dc(T, N) {
      const k = y.get(T);
      k.outputColorSpace = N.outputColorSpace, k.batching = N.batching, k.batchingColor = N.batchingColor, k.instancing = N.instancing, k.instancingColor = N.instancingColor, k.instancingMorph = N.instancingMorph, k.skinning = N.skinning, k.morphTargets = N.morphTargets, k.morphNormals = N.morphNormals, k.morphColors = N.morphColors, k.morphTargetsCount = N.morphTargetsCount, k.numClippingPlanes = N.numClippingPlanes, k.numIntersection = N.numClipIntersection, k.vertexAlphas = N.vertexAlphas, k.vertexTangents = N.vertexTangents, k.toneMapping = N.toneMapping;
    }
    function ju(T, N, k, z, F) {
      N.isScene !== true && (N = ie), U.resetTextureUnits();
      const fe = N.fog, be = z.isMeshStandardMaterial ? N.environment : null, _e = B === null ? S.outputColorSpace : B.isXRRenderTarget === true ? B.texture.colorSpace : ls, we = (z.isMeshStandardMaterial ? Z : W).get(z.envMap || be), Pe = z.vertexColors === true && !!k.attributes.color && k.attributes.color.itemSize === 4, Ve = !!k.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Ue = !!k.morphAttributes.position, Ke = !!k.morphAttributes.normal, ct = !!k.morphAttributes.color;
      let _t = Mi;
      z.toneMapped && (B === null || B.isXRRenderTarget === true) && (_t = S.toneMapping);
      const vt = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, ht = vt !== void 0 ? vt.length : 0, Ne = y.get(z), st = A.state.lights;
      if (Te === true && (Qe === true || T !== q)) {
        const Dt = T === q && z.id === G;
        Ce.setState(z, T, Dt);
      }
      let et = false;
      z.version === Ne.__version ? (Ne.needsLights && Ne.lightsStateVersion !== st.state.version || Ne.outputColorSpace !== _e || F.isBatchedMesh && Ne.batching === false || !F.isBatchedMesh && Ne.batching === true || F.isBatchedMesh && Ne.batchingColor === true && F.colorTexture === null || F.isBatchedMesh && Ne.batchingColor === false && F.colorTexture !== null || F.isInstancedMesh && Ne.instancing === false || !F.isInstancedMesh && Ne.instancing === true || F.isSkinnedMesh && Ne.skinning === false || !F.isSkinnedMesh && Ne.skinning === true || F.isInstancedMesh && Ne.instancingColor === true && F.instanceColor === null || F.isInstancedMesh && Ne.instancingColor === false && F.instanceColor !== null || F.isInstancedMesh && Ne.instancingMorph === true && F.morphTexture === null || F.isInstancedMesh && Ne.instancingMorph === false && F.morphTexture !== null || Ne.envMap !== we || z.fog === true && Ne.fog !== fe || Ne.numClippingPlanes !== void 0 && (Ne.numClippingPlanes !== Ce.numPlanes || Ne.numIntersection !== Ce.numIntersection) || Ne.vertexAlphas !== Pe || Ne.vertexTangents !== Ve || Ne.morphTargets !== Ue || Ne.morphNormals !== Ke || Ne.morphColors !== ct || Ne.toneMapping !== _t || Ne.morphTargetsCount !== ht) && (et = true) : (et = true, Ne.__version = z.version);
      let Yt = Ne.currentProgram;
      et === true && (Yt = tr(z, N, F));
      let Pn = false, Zt = false, _s = false;
      const ft = Yt.getUniforms(), zt = Ne.uniforms;
      if (re.useProgram(Yt.program) && (Pn = true, Zt = true, _s = true), z.id !== G && (G = z.id, Zt = true), Pn || q !== T) {
        re.buffers.depth.getReversed() && T.reversedDepth !== true && (T._reversedDepth = true, T.updateProjectionMatrix()), ft.setValue(I, "projectionMatrix", T.projectionMatrix), ft.setValue(I, "viewMatrix", T.matrixWorldInverse);
        const Vt = ft.map.cameraPosition;
        Vt !== void 0 && Vt.setValue(I, Xe.setFromMatrixPosition(T.matrixWorld)), Fe.logarithmicDepthBuffer && ft.setValue(I, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && ft.setValue(I, "isOrthographic", T.isOrthographicCamera === true), q !== T && (q = T, Zt = true, _s = true);
      }
      if (Ne.needsLights && (st.state.directionalShadowMap.length > 0 && ft.setValue(I, "directionalShadowMap", st.state.directionalShadowMap, U), st.state.spotShadowMap.length > 0 && ft.setValue(I, "spotShadowMap", st.state.spotShadowMap, U), st.state.pointShadowMap.length > 0 && ft.setValue(I, "pointShadowMap", st.state.pointShadowMap, U)), F.isSkinnedMesh) {
        ft.setOptional(I, F, "bindMatrix"), ft.setOptional(I, F, "bindMatrixInverse");
        const Dt = F.skeleton;
        Dt && (Dt.boneTexture === null && Dt.computeBoneTexture(), ft.setValue(I, "boneTexture", Dt.boneTexture, U));
      }
      F.isBatchedMesh && (ft.setOptional(I, F, "batchingTexture"), ft.setValue(I, "batchingTexture", F._matricesTexture, U), ft.setOptional(I, F, "batchingIdTexture"), ft.setValue(I, "batchingIdTexture", F._indirectTexture, U), ft.setOptional(I, F, "batchingColorTexture"), F._colorsTexture !== null && ft.setValue(I, "batchingColorTexture", F._colorsTexture, U));
      const si = k.morphAttributes;
      if ((si.position !== void 0 || si.normal !== void 0 || si.color !== void 0) && $e.update(F, k, Yt), (Zt || Ne.receiveShadow !== F.receiveShadow) && (Ne.receiveShadow = F.receiveShadow, ft.setValue(I, "receiveShadow", F.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (zt.envMap.value = we, zt.flipEnvMap.value = we.isCubeTexture && we.isRenderTargetTexture === false ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && N.environment !== null && (zt.envMapIntensity.value = N.environmentIntensity), zt.dfgLUT !== void 0 && (zt.dfgLUT.value = Ex()), Zt && (ft.setValue(I, "toneMappingExposure", S.toneMappingExposure), Ne.needsLights && ed(zt, _s), fe && z.fog === true && Be.refreshFogUniforms(zt, fe), Be.refreshMaterialUniforms(zt, z, ke, We, A.state.transmissionRenderTarget[T.id]), Qr.upload(I, uc(Ne), zt, U)), z.isShaderMaterial && z.uniformsNeedUpdate === true && (Qr.upload(I, uc(Ne), zt, U), z.uniformsNeedUpdate = false), z.isSpriteMaterial && ft.setValue(I, "center", F.center), ft.setValue(I, "modelViewMatrix", F.modelViewMatrix), ft.setValue(I, "normalMatrix", F.normalMatrix), ft.setValue(I, "modelMatrix", F.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Dt = z.uniformsGroups;
        for (let Vt = 0, Io = Dt.length; Vt < Io; Vt++) {
          const tn = Dt[Vt];
          ne.update(tn, Yt), ne.bind(tn, Yt);
        }
      }
      return Yt;
    }
    function ed(T, N) {
      T.ambientLightColor.needsUpdate = N, T.lightProbe.needsUpdate = N, T.directionalLights.needsUpdate = N, T.directionalLightShadows.needsUpdate = N, T.pointLights.needsUpdate = N, T.pointLightShadows.needsUpdate = N, T.spotLights.needsUpdate = N, T.spotLightShadows.needsUpdate = N, T.rectAreaLights.needsUpdate = N, T.hemisphereLights.needsUpdate = N;
    }
    function td(T) {
      return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === true;
    }
    this.getActiveCubeFace = function() {
      return L;
    }, this.getActiveMipmapLevel = function() {
      return O;
    }, this.getRenderTarget = function() {
      return B;
    }, this.setRenderTargetTextures = function(T, N, k) {
      const z = y.get(T);
      z.__autoAllocateDepthBuffer = T.resolveDepthBuffer === false, z.__autoAllocateDepthBuffer === false && (z.__useRenderToTexture = false), y.get(T.texture).__webglTexture = N, y.get(T.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : k, z.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(T, N) {
      const k = y.get(T);
      k.__webglFramebuffer = N, k.__useDefaultFramebuffer = N === void 0;
    };
    const id = I.createFramebuffer();
    this.setRenderTarget = function(T, N = 0, k = 0) {
      B = T, L = N, O = k;
      let z = null, F = false, fe = false;
      if (T) {
        const _e = y.get(T);
        if (_e.__useDefaultFramebuffer !== void 0) {
          re.bindFramebuffer(I.FRAMEBUFFER, _e.__webglFramebuffer), V.copy(T.viewport), H.copy(T.scissor), j = T.scissorTest, re.viewport(V), re.scissor(H), re.setScissorTest(j), G = -1;
          return;
        } else if (_e.__webglFramebuffer === void 0) U.setupRenderTarget(T);
        else if (_e.__hasExternalTextures) U.rebindTextures(T, y.get(T.texture).__webglTexture, y.get(T.depthTexture).__webglTexture);
        else if (T.depthBuffer) {
          const Ve = T.depthTexture;
          if (_e.__boundDepthTexture !== Ve) {
            if (Ve !== null && y.has(Ve) && (T.width !== Ve.image.width || T.height !== Ve.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            U.setupDepthRenderbuffer(T);
          }
        }
        const we = T.texture;
        (we.isData3DTexture || we.isDataArrayTexture || we.isCompressedArrayTexture) && (fe = true);
        const Pe = y.get(T).__webglFramebuffer;
        T.isWebGLCubeRenderTarget ? (Array.isArray(Pe[N]) ? z = Pe[N][k] : z = Pe[N], F = true) : T.samples > 0 && U.useMultisampledRTT(T) === false ? z = y.get(T).__webglMultisampledFramebuffer : Array.isArray(Pe) ? z = Pe[k] : z = Pe, V.copy(T.viewport), H.copy(T.scissor), j = T.scissorTest;
      } else V.copy(Y).multiplyScalar(ke).floor(), H.copy(ee).multiplyScalar(ke).floor(), j = Se;
      if (k !== 0 && (z = id), re.bindFramebuffer(I.FRAMEBUFFER, z) && re.drawBuffers(T, z), re.viewport(V), re.scissor(H), re.setScissorTest(j), F) {
        const _e = y.get(T.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + N, _e.__webglTexture, k);
      } else if (fe) {
        const _e = N;
        for (let we = 0; we < T.textures.length; we++) {
          const Pe = y.get(T.textures[we]);
          I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0 + we, Pe.__webglTexture, k, _e);
        }
      } else if (T !== null && k !== 0) {
        const _e = y.get(T.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, _e.__webglTexture, k);
      }
      G = -1;
    }, this.readRenderTargetPixels = function(T, N, k, z, F, fe, be, _e = 0) {
      if (!(T && T.isWebGLRenderTarget)) {
        Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let we = y.get(T).__webglFramebuffer;
      if (T.isWebGLCubeRenderTarget && be !== void 0 && (we = we[be]), we) {
        re.bindFramebuffer(I.FRAMEBUFFER, we);
        try {
          const Pe = T.textures[_e], Ve = Pe.format, Ue = Pe.type;
          if (!Fe.textureFormatReadable(Ve)) {
            Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Fe.textureTypeReadable(Ue)) {
            Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= T.width - z && k >= 0 && k <= T.height - F && (T.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + _e), I.readPixels(N, k, z, F, se.convert(Ve), se.convert(Ue), fe));
        } finally {
          const Pe = B !== null ? y.get(B).__webglFramebuffer : null;
          re.bindFramebuffer(I.FRAMEBUFFER, Pe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(T, N, k, z, F, fe, be, _e = 0) {
      if (!(T && T.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let we = y.get(T).__webglFramebuffer;
      if (T.isWebGLCubeRenderTarget && be !== void 0 && (we = we[be]), we) if (N >= 0 && N <= T.width - z && k >= 0 && k <= T.height - F) {
        re.bindFramebuffer(I.FRAMEBUFFER, we);
        const Pe = T.textures[_e], Ve = Pe.format, Ue = Pe.type;
        if (!Fe.textureFormatReadable(Ve)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Fe.textureTypeReadable(Ue)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Ke = I.createBuffer();
        I.bindBuffer(I.PIXEL_PACK_BUFFER, Ke), I.bufferData(I.PIXEL_PACK_BUFFER, fe.byteLength, I.STREAM_READ), T.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + _e), I.readPixels(N, k, z, F, se.convert(Ve), se.convert(Ue), 0);
        const ct = B !== null ? y.get(B).__webglFramebuffer : null;
        re.bindFramebuffer(I.FRAMEBUFFER, ct);
        const _t = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return I.flush(), await Gd(I, _t, 4), I.bindBuffer(I.PIXEL_PACK_BUFFER, Ke), I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, fe), I.deleteBuffer(Ke), I.deleteSync(_t), fe;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(T, N = null, k = 0) {
      const z = Math.pow(2, -k), F = Math.floor(T.image.width * z), fe = Math.floor(T.image.height * z), be = N !== null ? N.x : 0, _e = N !== null ? N.y : 0;
      U.setTexture2D(T, 0), I.copyTexSubImage2D(I.TEXTURE_2D, k, 0, 0, be, _e, F, fe), re.unbindTexture();
    };
    const nd = I.createFramebuffer(), sd = I.createFramebuffer();
    this.copyTextureToTexture = function(T, N, k = null, z = null, F = 0, fe = null) {
      fe === null && (F !== 0 ? (Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), fe = F, F = 0) : fe = 0);
      let be, _e, we, Pe, Ve, Ue, Ke, ct, _t;
      const vt = T.isCompressedTexture ? T.mipmaps[fe] : T.image;
      if (k !== null) be = k.max.x - k.min.x, _e = k.max.y - k.min.y, we = k.isBox3 ? k.max.z - k.min.z : 1, Pe = k.min.x, Ve = k.min.y, Ue = k.isBox3 ? k.min.z : 0;
      else {
        const si = Math.pow(2, -F);
        be = Math.floor(vt.width * si), _e = Math.floor(vt.height * si), T.isDataArrayTexture ? we = vt.depth : T.isData3DTexture ? we = Math.floor(vt.depth * si) : we = 1, Pe = 0, Ve = 0, Ue = 0;
      }
      z !== null ? (Ke = z.x, ct = z.y, _t = z.z) : (Ke = 0, ct = 0, _t = 0);
      const ht = se.convert(N.format), Ne = se.convert(N.type);
      let st;
      N.isData3DTexture ? (U.setTexture3D(N, 0), st = I.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (U.setTexture2DArray(N, 0), st = I.TEXTURE_2D_ARRAY) : (U.setTexture2D(N, 0), st = I.TEXTURE_2D), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, N.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, N.unpackAlignment);
      const et = I.getParameter(I.UNPACK_ROW_LENGTH), Yt = I.getParameter(I.UNPACK_IMAGE_HEIGHT), Pn = I.getParameter(I.UNPACK_SKIP_PIXELS), Zt = I.getParameter(I.UNPACK_SKIP_ROWS), _s = I.getParameter(I.UNPACK_SKIP_IMAGES);
      I.pixelStorei(I.UNPACK_ROW_LENGTH, vt.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, vt.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, Pe), I.pixelStorei(I.UNPACK_SKIP_ROWS, Ve), I.pixelStorei(I.UNPACK_SKIP_IMAGES, Ue);
      const ft = T.isDataArrayTexture || T.isData3DTexture, zt = N.isDataArrayTexture || N.isData3DTexture;
      if (T.isDepthTexture) {
        const si = y.get(T), Dt = y.get(N), Vt = y.get(si.__renderTarget), Io = y.get(Dt.__renderTarget);
        re.bindFramebuffer(I.READ_FRAMEBUFFER, Vt.__webglFramebuffer), re.bindFramebuffer(I.DRAW_FRAMEBUFFER, Io.__webglFramebuffer);
        for (let tn = 0; tn < we; tn++) ft && (I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, y.get(T).__webglTexture, F, Ue + tn), I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, y.get(N).__webglTexture, fe, _t + tn)), I.blitFramebuffer(Pe, Ve, be, _e, Ke, ct, be, _e, I.DEPTH_BUFFER_BIT, I.NEAREST);
        re.bindFramebuffer(I.READ_FRAMEBUFFER, null), re.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
      } else if (F !== 0 || T.isRenderTargetTexture || y.has(T)) {
        const si = y.get(T), Dt = y.get(N);
        re.bindFramebuffer(I.READ_FRAMEBUFFER, nd), re.bindFramebuffer(I.DRAW_FRAMEBUFFER, sd);
        for (let Vt = 0; Vt < we; Vt++) ft ? I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, si.__webglTexture, F, Ue + Vt) : I.framebufferTexture2D(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, si.__webglTexture, F), zt ? I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Dt.__webglTexture, fe, _t + Vt) : I.framebufferTexture2D(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, Dt.__webglTexture, fe), F !== 0 ? I.blitFramebuffer(Pe, Ve, be, _e, Ke, ct, be, _e, I.COLOR_BUFFER_BIT, I.NEAREST) : zt ? I.copyTexSubImage3D(st, fe, Ke, ct, _t + Vt, Pe, Ve, be, _e) : I.copyTexSubImage2D(st, fe, Ke, ct, Pe, Ve, be, _e);
        re.bindFramebuffer(I.READ_FRAMEBUFFER, null), re.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
      } else zt ? T.isDataTexture || T.isData3DTexture ? I.texSubImage3D(st, fe, Ke, ct, _t, be, _e, we, ht, Ne, vt.data) : N.isCompressedArrayTexture ? I.compressedTexSubImage3D(st, fe, Ke, ct, _t, be, _e, we, ht, vt.data) : I.texSubImage3D(st, fe, Ke, ct, _t, be, _e, we, ht, Ne, vt) : T.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, fe, Ke, ct, be, _e, ht, Ne, vt.data) : T.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, fe, Ke, ct, vt.width, vt.height, ht, vt.data) : I.texSubImage2D(I.TEXTURE_2D, fe, Ke, ct, be, _e, ht, Ne, vt);
      I.pixelStorei(I.UNPACK_ROW_LENGTH, et), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Yt), I.pixelStorei(I.UNPACK_SKIP_PIXELS, Pn), I.pixelStorei(I.UNPACK_SKIP_ROWS, Zt), I.pixelStorei(I.UNPACK_SKIP_IMAGES, _s), fe === 0 && N.generateMipmaps && I.generateMipmap(st), re.unbindTexture();
    }, this.initRenderTarget = function(T) {
      y.get(T).__webglFramebuffer === void 0 && U.setupRenderTarget(T);
    }, this.initTexture = function(T) {
      T.isCubeTexture ? U.setTextureCube(T, 0) : T.isData3DTexture ? U.setTexture3D(T, 0) : T.isDataArrayTexture || T.isCompressedArrayTexture ? U.setTexture2DArray(T, 0) : U.setTexture2D(T, 0), re.unbindTexture();
    }, this.resetState = function() {
      L = 0, O = 0, B = null, re.reset(), ye.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return oi;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = je._getDrawingBufferColorSpace(e), t.unpackColorSpace = je._getUnpackColorSpace();
  }
}
export {
  jh as ACESFilmicToneMapping,
  vn as AddEquation,
  Ed as AddOperation,
  hu as AdditiveAnimationBlendMode,
  pc as AdditiveBlending,
  tu as AgXToneMapping,
  lu as AlphaFormat,
  zd as AlwaysCompare,
  Aa as AlwaysDepth,
  vc as AlwaysStencilFunc,
  im as AmbientLight,
  bm as AnimationAction,
  po as AnimationClip,
  Fy as AnimationLoader,
  $y as AnimationMixer,
  Jy as AnimationObjectGroup,
  Oy as AnimationUtils,
  Qf as ArcCurve,
  lm as ArrayCamera,
  vM as ArrowHelper,
  _c as AttachedBindMode,
  um as Audio,
  Zy as AudioAnalyser,
  Gu as AudioContext,
  qy as AudioListener,
  Wy as AudioLoader,
  xM as AxesHelper,
  Xt as BackSide,
  Ld as BasicDepthPacking,
  Lx as BasicShadowMap,
  qf as BatchedMesh,
  Mu as Bone,
  ps as BooleanKeyframeTrack,
  rM as Box2,
  Ft as Box3,
  gM as Box3Helper,
  fs as BoxGeometry,
  mM as BoxHelper,
  ut as BufferAttribute,
  qe as BufferGeometry,
  om as BufferGeometryLoader,
  su as ByteType,
  Ui as Cache,
  Dl as Camera,
  pM as CameraHelper,
  Ny as CanvasTexture,
  Vl as CapsuleGeometry,
  jf as CatmullRomCurve3,
  Qh as CineonToneMapping,
  kl as CircleGeometry,
  ei as ClampToEdgeWrapping,
  cm as Clock,
  Me as Color,
  zu as ColorKeyframeTrack,
  je as ColorManagement,
  Dy as CompressedArrayTexture,
  Uy as CompressedCubeTexture,
  zl as CompressedTexture,
  By as CompressedTextureLoader,
  yo as ConeGeometry,
  Td as ConstantAlphaFactor,
  Sd as ConstantColorFactor,
  MM as Controls,
  wf as CubeCamera,
  $f as CubeDepthTexture,
  Fi as CubeReflectionMapping,
  Tn as CubeRefractionMapping,
  vo as CubeTexture,
  zy as CubeTextureLoader,
  $s as CubeUVReflectionMapping,
  Tu as CubicBezierCurve,
  ap as CubicBezierCurve3,
  Gp as CubicInterpolant,
  fc as CullFaceBack,
  od as CullFaceFront,
  Px as CullFaceFrontBack,
  rd as CullFaceNone,
  bi as Curve,
  cp as CurvePath,
  ld as CustomBlending,
  eu as CustomToneMapping,
  xo as CylinderGeometry,
  sM as Cylindrical,
  Pl as Data3DTexture,
  Il as DataArrayTexture,
  Si as DataTexture,
  Vy as DataTextureLoader,
  Ty as DataUtils,
  $x as DecrementStencilOp,
  Qx as DecrementWrapStencilOp,
  Yp as DefaultLoadingManager,
  zi as DepthFormat,
  yn as DepthStencilFormat,
  qs as DepthTexture,
  Cd as DetachedBindMode,
  tm as DirectionalLight,
  fM as DirectionalLightHelper,
  Hp as DiscreteInterpolant,
  Gl as DodecahedronGeometry,
  Pi as DoubleSide,
  _d as DstAlphaFactor,
  xd as DstColorFactor,
  fy as DynamicCopyUsage,
  ay as DynamicDrawUsage,
  hy as DynamicReadUsage,
  Kf as EdgesGeometry,
  Hl as EllipseCurve,
  Od as EqualCompare,
  Ea as EqualDepth,
  iy as EqualStencilFunc,
  jr as EquirectangularReflectionMapping,
  eo as EquirectangularRefractionMapping,
  li as Euler,
  Vi as EventDispatcher,
  bu as ExternalTexture,
  Xl as ExtrudeGeometry,
  ji as FileLoader,
  Iy as Float16BufferAttribute,
  Ae as Float32BufferAttribute,
  Ht as FloatType,
  Nl as Fog,
  Ul as FogExp2,
  Ly as FramebufferTexture,
  Ki as FrontSide,
  Qs as Frustum,
  Bl as FrustumArray,
  eM as GLBufferAttribute,
  my as GLSL1,
  xc as GLSL3,
  Fd as GreaterCompare,
  Ra as GreaterDepth,
  Cl as GreaterEqualCompare,
  Ca as GreaterEqualDepth,
  oy as GreaterEqualStencilFunc,
  sy as GreaterStencilFunc,
  uM as GridHelper,
  Us as Group,
  Bi as HalfFloatType,
  Jp as HemisphereLight,
  hM as HemisphereLightHelper,
  ql as IcosahedronGeometry,
  Hy as ImageBitmapLoader,
  mo as ImageLoader,
  af as ImageUtils,
  Jx as IncrementStencilOp,
  Kx as IncrementWrapStencilOp,
  Xs as InstancedBufferAttribute,
  rm as InstancedBufferGeometry,
  jy as InstancedInterleavedBuffer,
  Nf as InstancedMesh,
  Cy as Int16BufferAttribute,
  Ry as Int32BufferAttribute,
  Ay as Int8BufferAttribute,
  yl as IntType,
  Ol as InterleavedBuffer,
  us as InterleavedBufferAttribute,
  bo as Interpolant,
  no as InterpolateDiscrete,
  cl as InterpolateLinear,
  Po as InterpolateSmooth,
  vy as InterpolationSamplingMode,
  _y as InterpolationSamplingType,
  jx as InvertStencilOp,
  Ln as KeepStencilOp,
  pi as KeyframeTrack,
  If as LOD,
  Yl as LatheGeometry,
  Ll as Layers,
  Nd as LessCompare,
  wa as LessDepth,
  El as LessEqualCompare,
  os as LessEqualDepth,
  ny as LessEqualStencilFunc,
  ty as LessStencilFunc,
  In as Light,
  sm as LightProbe,
  An as Line,
  oM as Line3,
  qt as LineBasicMaterial,
  Au as LineCurve,
  lp as LineCurve3,
  zp as LineDashedMaterial,
  Yf as LineLoop,
  ki as LineSegments,
  mt as LinearFilter,
  Bu as LinearInterpolant,
  Ox as LinearMipMapLinearFilter,
  Nx as LinearMipMapNearestFilter,
  Di as LinearMipmapLinearFilter,
  Yr as LinearMipmapNearestFilter,
  ls as LinearSRGBColorSpace,
  $h as LinearToneMapping,
  ro as LinearTransfer,
  ni as Loader,
  uh as LoaderUtils,
  Vu as LoadingManager,
  Rd as LoopOnce,
  Pd as LoopPingPong,
  Id as LoopRepeat,
  Rx as MOUSE,
  Bt as Material,
  ic as MaterialLoader,
  My as MathUtils,
  Wu as Matrix2,
  Ye as Matrix3,
  Ge as Matrix4,
  dd as MaxEquation,
  Tt as Mesh,
  Cn as MeshBasicMaterial,
  Nu as MeshDepthMaterial,
  Ou as MeshDistanceMaterial,
  Fp as MeshLambertMaterial,
  Bp as MeshMatcapMaterial,
  Op as MeshNormalMaterial,
  Up as MeshPhongMaterial,
  Dp as MeshPhysicalMaterial,
  Uu as MeshStandardMaterial,
  Np as MeshToonMaterial,
  ud as MinEquation,
  io as MirroredRepeatWrapping,
  wd as MixOperation,
  gc as MultiplyBlending,
  go as MultiplyOperation,
  bt as NearestFilter,
  Ux as NearestMipMapLinearFilter,
  Dx as NearestMipMapNearestFilter,
  Ls as NearestMipmapLinearFilter,
  nu as NearestMipmapNearestFilter,
  iu as NeutralToneMapping,
  Ud as NeverCompare,
  Ta as NeverDepth,
  ey as NeverStencilFunc,
  Ni as NoBlending,
  Ji as NoColorSpace,
  Wx as NoNormalPacking,
  Mi as NoToneMapping,
  wl as NormalAnimationBlendMode,
  ns as NormalBlending,
  qx as NormalGAPacking,
  Xx as NormalRGPacking,
  Bd as NotEqualCompare,
  Ia as NotEqualDepth,
  ry as NotEqualStencilFunc,
  uo as NumberKeyframeTrack,
  it as Object3D,
  Gy as ObjectLoader,
  Dd as ObjectSpaceNormalMap,
  Mo as OctahedronGeometry,
  pd as OneFactor,
  Ad as OneMinusConstantAlphaFactor,
  bd as OneMinusConstantColorFactor,
  vd as OneMinusDstAlphaFactor,
  yd as OneMinusDstColorFactor,
  ba as OneMinusSrcAlphaFactor,
  gd as OneMinusSrcColorFactor,
  Ao as OrthographicCamera,
  qr as PCFShadowMap,
  ad as PCFSoftShadowMap,
  Rh as PMREMGenerator,
  ul as Path,
  Pt as PerspectiveCamera,
  _n as Plane,
  js as PlaneGeometry,
  _M as PlaneHelper,
  jp as PointLight,
  cM as PointLightHelper,
  Zf as Points,
  Su as PointsMaterial,
  dM as PolarGridHelper,
  Rn as PolyhedronGeometry,
  Yy as PositionalAudio,
  tt as PropertyBinding,
  fm as PropertyMixer,
  wu as QuadraticBezierCurve,
  Eu as QuadraticBezierCurve3,
  ii as Quaternion,
  To as QuaternionKeyframeTrack,
  Wp as QuaternionLinearInterpolant,
  Ba as R11_EAC_Format,
  al as RED_GREEN_RGTC2_Format,
  rl as RED_RGTC1_Format,
  Cx as REVISION,
  Va as RG11_EAC_Format,
  kx as RGBADepthPacking,
  Wt as RGBAFormat,
  Al as RGBAIntegerFormat,
  ja as RGBA_ASTC_10x10_Format,
  $a as RGBA_ASTC_10x5_Format,
  Ka as RGBA_ASTC_10x6_Format,
  Qa as RGBA_ASTC_10x8_Format,
  el as RGBA_ASTC_12x10_Format,
  tl as RGBA_ASTC_12x12_Format,
  Ga as RGBA_ASTC_4x4_Format,
  Ha as RGBA_ASTC_5x4_Format,
  Wa as RGBA_ASTC_5x5_Format,
  Xa as RGBA_ASTC_6x5_Format,
  qa as RGBA_ASTC_6x6_Format,
  Ya as RGBA_ASTC_8x5_Format,
  Za as RGBA_ASTC_8x6_Format,
  Ja as RGBA_ASTC_8x8_Format,
  il as RGBA_BPTC_Format,
  Fa as RGBA_ETC2_EAC_Format,
  Ua as RGBA_PVRTC_2BPPV1_Format,
  Da as RGBA_PVRTC_4BPPV1_Format,
  Jr as RGBA_S3TC_DXT1_Format,
  $r as RGBA_S3TC_DXT3_Format,
  Kr as RGBA_S3TC_DXT5_Format,
  Gx as RGBDepthPacking,
  cu as RGBFormat,
  Fx as RGBIntegerFormat,
  nl as RGB_BPTC_SIGNED_Format,
  sl as RGB_BPTC_UNSIGNED_Format,
  Na as RGB_ETC1_Format,
  Oa as RGB_ETC2_Format,
  La as RGB_PVRTC_2BPPV1_Format,
  Pa as RGB_PVRTC_4BPPV1_Format,
  Zr as RGB_S3TC_DXT1_Format,
  Hx as RGDepthPacking,
  as as RGFormat,
  Tl as RGIntegerFormat,
  Du as RawShaderMaterial,
  Ks as Ray,
  tM as Raycaster,
  nm as RectAreaLight,
  bl as RedFormat,
  _o as RedIntegerFormat,
  Kh as ReinhardToneMapping,
  fu as RenderTarget,
  Ky as RenderTarget3D,
  to as RepeatWrapping,
  Zx as ReplaceStencilOp,
  hd as ReverseSubtractEquation,
  Zl as RingGeometry,
  za as SIGNED_R11_EAC_Format,
  ll as SIGNED_RED_GREEN_RGTC2_Format,
  ol as SIGNED_RED_RGTC1_Format,
  ka as SIGNED_RG11_EAC_Format,
  Kt as SRGBColorSpace,
  rt as SRGBTransfer,
  Cf as Scene,
  Je as ShaderChunk,
  xi as ShaderLib,
  fi as ShaderMaterial,
  Lp as ShadowMaterial,
  rs as Shape,
  Jl as ShapeGeometry,
  yM as ShapePath,
  yi as ShapeUtils,
  ru as ShortType,
  Fl as Skeleton,
  lM as SkeletonHelper,
  Lf as SkinnedMesh,
  Mn as Source,
  Lt as Sphere,
  So as SphereGeometry,
  nM as Spherical,
  ku as SphericalHarmonics3,
  Cu as SplineCurve,
  Kp as SpotLight,
  aM as SpotLightHelper,
  Rf as Sprite,
  xu as SpriteMaterial,
  Sa as SrcAlphaFactor,
  Md as SrcAlphaSaturateFactor,
  md as SrcColorFactor,
  dy as StaticCopyUsage,
  oo as StaticDrawUsage,
  cy as StaticReadUsage,
  Xy as StereoCamera,
  py as StreamCopyUsage,
  ly as StreamDrawUsage,
  uy as StreamReadUsage,
  ms as StringKeyframeTrack,
  cd as SubtractEquation,
  mc as SubtractiveBlending,
  Ix as TOUCH,
  En as TangentSpaceNormalMap,
  $l as TetrahedronGeometry,
  Mt as Texture,
  ky as TextureLoader,
  SM as TextureUtils,
  iM as Timer,
  gy as TimestampQuery,
  Kl as TorusGeometry,
  Ql as TorusKnotGeometry,
  jt as Triangle,
  Vx as TriangleFanDrawMode,
  zx as TriangleStripDrawMode,
  Bx as TrianglesDrawMode,
  jl as TubeGeometry,
  xl as UVMapping,
  mu as Uint16BufferAttribute,
  gu as Uint32BufferAttribute,
  wy as Uint8BufferAttribute,
  Ey as Uint8ClampedBufferAttribute,
  Hu as Uniform,
  Qy as UniformsGroup,
  me as UniformsLib,
  bf as UniformsUtils,
  Qt as UnsignedByteType,
  au as UnsignedInt101111Type,
  ks as UnsignedInt248Type,
  ou as UnsignedInt5999Type,
  di as UnsignedIntType,
  Ml as UnsignedShort4444Type,
  Sl as UnsignedShort5551Type,
  Vs as UnsignedShortType,
  Ps as VSMShadowMap,
  K as Vector2,
  R as Vector3,
  pt as Vector4,
  fo as VectorKeyframeTrack,
  Py as VideoFrameTexture,
  Jf as VideoTexture,
  by as WebGL3DRenderTarget,
  Sy as WebGLArrayRenderTarget,
  oi as WebGLCoordinateSystem,
  vu as WebGLCubeRenderTarget,
  ai as WebGLRenderTarget,
  bM as WebGLRenderer,
  vx as WebGLUtils,
  Gs as WebGPUCoordinateSystem,
  Qo as WebXRController,
  Pp as WireframeGeometry,
  so as WrapAroundEnding,
  es as ZeroCurvatureEnding,
  fd as ZeroFactor,
  ts as ZeroSlopeEnding,
  Yx as ZeroStencilOp,
  kd as createCanvasElement,
  Le as error,
  yy as getConsoleFunction,
  ao as log,
  xy as setConsoleFunction,
  de as warn,
  Ws as warnOnce
};
