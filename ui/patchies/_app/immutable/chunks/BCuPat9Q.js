/*
  @license
	Rollup.js v4.50.1
	Sun, 07 Sep 2025 10:51:49 GMT - commit 79d5563ab4787f9425a5fa317bad0d6ae4be480b

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
var zr = "4.50.1", bl = 44, yu = 59, bu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", El = new Uint8Array(64), xl = new Uint8Array(128);
for (let n = 0; n < 64; n++) {
  const e = bu.charCodeAt(n);
  El[n] = e, xl[e] = n;
}
function _n(n, e) {
  let t = 0, s = 0, i = 0;
  do {
    const o = n.next();
    i = xl[o], t |= (31 & i) << s, s += 5;
  } while (32 & i);
  const r = 1 & t;
  return t >>>= 1, r && (t = -2147483648 | -t), e + t;
}
function Mn(n, e, t) {
  let s = e - t;
  s = s < 0 ? -s << 1 | 1 : s << 1;
  do {
    let i = 31 & s;
    s >>>= 5, s > 0 && (i |= 32), n.write(El[i]);
  } while (s > 0);
  return e;
}
function Bo(n, e) {
  return !(n.pos >= e) && n.peek() !== bl;
}
var zo = typeof TextDecoder < "u" ? new TextDecoder() : typeof Buffer < "u" ? { decode: (n) => Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString() } : { decode(n) {
  let e = "";
  for (let t = 0; t < n.length; t++) e += String.fromCharCode(n[t]);
  return e;
} }, Eu = class {
  constructor() {
    this.pos = 0, this.out = "", this.buffer = new Uint8Array(16384);
  }
  write(n) {
    const { buffer: e } = this;
    e[this.pos++] = n, this.pos === 16384 && (this.out += zo.decode(e), this.pos = 0);
  }
  flush() {
    const { buffer: n, out: e, pos: t } = this;
    return t > 0 ? e + zo.decode(n.subarray(0, t)) : e;
  }
}, xu = class {
  constructor(n) {
    this.pos = 0, this.buffer = n;
  }
  next() {
    return this.buffer.charCodeAt(this.pos++);
  }
  peek() {
    return this.buffer.charCodeAt(this.pos);
  }
  indexOf(n) {
    const { buffer: e, pos: t } = this, s = e.indexOf(n, t);
    return s === -1 ? e.length : s;
  }
};
function Au(n) {
  n.sort(Su);
}
function Su(n, e) {
  return n[0] - e[0];
}
function Al(n) {
  const e = new Eu();
  let t = 0, s = 0, i = 0, r = 0;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if (o > 0 && e.write(yu), a.length === 0) continue;
    let l = 0;
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      c > 0 && e.write(bl), l = Mn(e, d[0], l), d.length !== 1 && (t = Mn(e, d[1], t), s = Mn(e, d[2], s), i = Mn(e, d[3], i), d.length !== 4 && (r = Mn(e, d[4], r)));
    }
  }
  return e.flush();
}
class Us {
  constructor(e) {
    this.bits = e instanceof Us ? e.bits.slice() : [];
  }
  add(e) {
    this.bits[e >> 5] |= 1 << (31 & e);
  }
  has(e) {
    return !!(this.bits[e >> 5] & 1 << (31 & e));
  }
}
let Fo = class gr {
  constructor(e, t, s) {
    this.start = e, this.end = t, this.original = s, this.intro = "", this.outro = "", this.content = s, this.storeName = false, this.edited = false, this.previous = null, this.next = null;
  }
  appendLeft(e) {
    this.outro += e;
  }
  appendRight(e) {
    this.intro = this.intro + e;
  }
  clone() {
    const e = new gr(this.start, this.end, this.original);
    return e.intro = this.intro, e.outro = this.outro, e.content = this.content, e.storeName = this.storeName, e.edited = this.edited, e;
  }
  contains(e) {
    return this.start < e && e < this.end;
  }
  eachNext(e) {
    let t = this;
    for (; t; ) e(t), t = t.next;
  }
  eachPrevious(e) {
    let t = this;
    for (; t; ) e(t), t = t.previous;
  }
  edit(e, t, s) {
    return this.content = e, s || (this.intro = "", this.outro = ""), this.storeName = t, this.edited = true, this;
  }
  prependLeft(e) {
    this.outro = e + this.outro;
  }
  prependRight(e) {
    this.intro = e + this.intro;
  }
  reset() {
    this.intro = "", this.outro = "", this.edited && (this.content = this.original, this.storeName = false, this.edited = false);
  }
  split(e) {
    const t = e - this.start, s = this.original.slice(0, t), i = this.original.slice(t);
    this.original = s;
    const r = new gr(e, this.end, i);
    return r.outro = this.outro, this.outro = "", this.end = e, this.edited ? (r.edit("", false), this.content = "") : this.content = s, r.next = this.next, r.next && (r.next.previous = r), r.previous = this, this.next = r, r;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(e) {
    if (this.outro = this.outro.replace(e, ""), this.outro.length) return true;
    const t = this.content.replace(e, "");
    return t.length ? (t !== this.content && (this.split(this.start + t.length).edit("", void 0, true), this.edited && this.edit(t, this.storeName, true)), true) : (this.edit("", void 0, true), this.intro = this.intro.replace(e, ""), !!this.intro.length || void 0);
  }
  trimStart(e) {
    if (this.intro = this.intro.replace(e, ""), this.intro.length) return true;
    const t = this.content.replace(e, "");
    if (t.length) {
      if (t !== this.content) {
        const s = this.split(this.end - t.length);
        this.edited && s.edit(t, this.storeName, true), this.edit("", void 0, true);
      }
      return true;
    }
    return this.edit("", void 0, true), this.outro = this.outro.replace(e, ""), !!this.outro.length || void 0;
  }
};
function $u() {
  return typeof globalThis < "u" && typeof globalThis.btoa == "function" ? (n) => globalThis.btoa(unescape(encodeURIComponent(n))) : typeof Buffer == "function" ? (n) => Buffer.from(n, "utf-8").toString("base64") : () => {
    throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
  };
}
const vu = $u();
class Pi {
  constructor(e) {
    this.version = 3, this.file = e.file, this.sources = e.sources, this.sourcesContent = e.sourcesContent, this.names = e.names, this.mappings = Al(e.mappings), e.x_google_ignoreList !== void 0 && (this.x_google_ignoreList = e.x_google_ignoreList), e.debugId !== void 0 && (this.debugId = e.debugId);
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + vu(this.toString());
  }
}
function Sl(n, e) {
  const t = n.split(/[/\\]/), s = e.split(/[/\\]/);
  for (t.pop(); t[0] === s[0]; ) t.shift(), s.shift();
  if (t.length) {
    let i = t.length;
    for (; i--; ) t[i] = "..";
  }
  return t.concat(s).join("/");
}
const Pu = Object.prototype.toString;
function $l(n) {
  return Pu.call(n) === "[object Object]";
}
function yr(n) {
  const e = n.split(`
`), t = [];
  for (let s = 0, i = 0; s < e.length; s++) t.push(i), i += e[s].length + 1;
  return function(s) {
    let i = 0, r = t.length;
    for (; i < r; ) {
      const a = i + r >> 1;
      s < t[a] ? r = a : i = a + 1;
    }
    const o = i - 1;
    return { line: o, column: s - t[o] };
  };
}
const wu = /\w/;
class vl {
  constructor(e) {
    this.hires = e, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
  }
  addEdit(e, t, s, i) {
    if (t.length) {
      const r = t.length - 1;
      let o = t.indexOf(`
`, 0), a = -1;
      for (; o >= 0 && r > o; ) {
        const c = [this.generatedCodeColumn, e, s.line, s.column];
        i >= 0 && c.push(i), this.rawSegments.push(c), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, a = o, o = t.indexOf(`
`, o + 1);
      }
      const l = [this.generatedCodeColumn, e, s.line, s.column];
      i >= 0 && l.push(i), this.rawSegments.push(l), this.advance(t.slice(a + 1));
    } else this.pending && (this.rawSegments.push(this.pending), this.advance(t));
    this.pending = null;
  }
  addUneditedChunk(e, t, s, i, r) {
    let o = t.start, a = true, l = false;
    for (; o < t.end; ) {
      if (s[o] === `
`) i.line += 1, i.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, a = true, l = false;
      else {
        if (this.hires || a || r.has(o)) {
          const c = [this.generatedCodeColumn, e, i.line, i.column];
          this.hires === "boundary" ? wu.test(s[o]) ? l || (this.rawSegments.push(c), l = true) : (this.rawSegments.push(c), l = false) : this.rawSegments.push(c);
        }
        i.column += 1, this.generatedCodeColumn += 1, a = false;
      }
      o += 1;
    }
    this.pending = null;
  }
  advance(e) {
    if (!e) return;
    const t = e.split(`
`);
    if (t.length > 1) {
      for (let s = 0; s < t.length - 1; s++) this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += t[t.length - 1].length;
  }
}
const Tn = `
`, an = { insertLeft: false, insertRight: false, storeName: false };
class Xt {
  constructor(e, t = {}) {
    const s = new Fo(0, e.length, e);
    Object.defineProperties(this, { original: { writable: true, value: e }, outro: { writable: true, value: "" }, intro: { writable: true, value: "" }, firstChunk: { writable: true, value: s }, lastChunk: { writable: true, value: s }, lastSearchedChunk: { writable: true, value: s }, byStart: { writable: true, value: {} }, byEnd: { writable: true, value: {} }, filename: { writable: true, value: t.filename }, indentExclusionRanges: { writable: true, value: t.indentExclusionRanges }, sourcemapLocations: { writable: true, value: new Us() }, storedNames: { writable: true, value: {} }, indentStr: { writable: true, value: void 0 }, ignoreList: { writable: true, value: t.ignoreList }, offset: { writable: true, value: t.offset || 0 } }), this.byStart[0] = s, this.byEnd[e.length] = s;
  }
  addSourcemapLocation(e) {
    this.sourcemapLocations.add(e);
  }
  append(e) {
    if (typeof e != "string") throw new TypeError("outro content must be a string");
    return this.outro += e, this;
  }
  appendLeft(e, t) {
    if (e += this.offset, typeof t != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const s = this.byEnd[e];
    return s ? s.appendLeft(t) : this.intro += t, this;
  }
  appendRight(e, t) {
    if (e += this.offset, typeof t != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const s = this.byStart[e];
    return s ? s.appendRight(t) : this.outro += t, this;
  }
  clone() {
    const e = new Xt(this.original, { filename: this.filename, offset: this.offset });
    let t = this.firstChunk, s = e.firstChunk = e.lastSearchedChunk = t.clone();
    for (; t; ) {
      e.byStart[s.start] = s, e.byEnd[s.end] = s;
      const i = t.next, r = i && i.clone();
      r && (s.next = r, r.previous = s, s = r), t = i;
    }
    return e.lastChunk = s, this.indentExclusionRanges && (e.indentExclusionRanges = this.indentExclusionRanges.slice()), e.sourcemapLocations = new Us(this.sourcemapLocations), e.intro = this.intro, e.outro = this.outro, e;
  }
  generateDecodedMap(e) {
    e = e || {};
    const t = Object.keys(this.storedNames), s = new vl(e.hires), i = yr(this.original);
    return this.intro && s.advance(this.intro), this.firstChunk.eachNext((r) => {
      const o = i(r.start);
      r.intro.length && s.advance(r.intro), r.edited ? s.addEdit(0, r.content, o, r.storeName ? t.indexOf(r.original) : -1) : s.addUneditedChunk(0, r, this.original, o, this.sourcemapLocations), r.outro.length && s.advance(r.outro);
    }), { file: e.file ? e.file.split(/[/\\]/).pop() : void 0, sources: [e.source ? Sl(e.file || "", e.source) : e.file || ""], sourcesContent: e.includeContent ? [this.original] : void 0, names: t, mappings: s.raw, x_google_ignoreList: this.ignoreList ? [0] : void 0 };
  }
  generateMap(e) {
    return new Pi(this.generateDecodedMap(e));
  }
  _ensureindentStr() {
    this.indentStr === void 0 && (this.indentStr = function(e) {
      const t = e.split(`
`), s = t.filter((o) => /^\t+/.test(o)), i = t.filter((o) => /^ {2,}/.test(o));
      if (s.length === 0 && i.length === 0) return null;
      if (s.length >= i.length) return "	";
      const r = i.reduce((o, a) => {
        const l = /^ +/.exec(a)[0].length;
        return Math.min(l, o);
      }, 1 / 0);
      return new Array(r + 1).join(" ");
    }(this.original));
  }
  _getRawIndentString() {
    return this._ensureindentStr(), this.indentStr;
  }
  getIndentString() {
    return this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr;
  }
  indent(e, t) {
    const s = /^[^\r\n]/gm;
    if ($l(e) && (t = e, e = void 0), e === void 0 && (this._ensureindentStr(), e = this.indentStr || "	"), e === "") return this;
    const i = {};
    (t = t || {}).exclude && (typeof t.exclude[0] == "number" ? [t.exclude] : t.exclude).forEach((c) => {
      for (let d = c[0]; d < c[1]; d += 1) i[d] = true;
    });
    let r = t.indentStart !== false;
    const o = (c) => r ? `${e}${c}` : (r = true, c);
    this.intro = this.intro.replace(s, o);
    let a = 0, l = this.firstChunk;
    for (; l; ) {
      const c = l.end;
      if (l.edited) i[a] || (l.content = l.content.replace(s, o), l.content.length && (r = l.content[l.content.length - 1] === `
`));
      else for (a = l.start; a < c; ) {
        if (!i[a]) {
          const d = this.original[a];
          d === `
` ? r = true : d !== "\r" && r && (r = false, a === l.start || (this._splitChunk(l, a), l = l.next), l.prependRight(e));
        }
        a += 1;
      }
      a = l.end, l = l.next;
    }
    return this.outro = this.outro.replace(s, o), this;
  }
  insert() {
    throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)");
  }
  insertLeft(e, t) {
    return an.insertLeft || (console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"), an.insertLeft = true), this.appendLeft(e, t);
  }
  insertRight(e, t) {
    return an.insertRight || (console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"), an.insertRight = true), this.prependRight(e, t);
  }
  move(e, t, s) {
    if (e += this.offset, t += this.offset, (s += this.offset) >= e && s <= t) throw new Error("Cannot move a selection inside itself");
    this._split(e), this._split(t), this._split(s);
    const i = this.byStart[e], r = this.byEnd[t], o = i.previous, a = r.next, l = this.byStart[s];
    if (!l && r === this.lastChunk) return this;
    const c = l ? l.previous : this.lastChunk;
    return o && (o.next = a), a && (a.previous = o), c && (c.next = i), l && (l.previous = r), i.previous || (this.firstChunk = r.next), r.next || (this.lastChunk = i.previous, this.lastChunk.next = null), i.previous = c, r.next = l || null, c || (this.firstChunk = i), l || (this.lastChunk = r), this;
  }
  overwrite(e, t, s, i) {
    return i = i || {}, this.update(e, t, s, { ...i, overwrite: !i.contentOnly });
  }
  update(e, t, s, i) {
    if (e += this.offset, t += this.offset, typeof s != "string") throw new TypeError("replacement content must be a string");
    if (this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; t < 0; ) t += this.original.length;
    }
    if (t > this.original.length) throw new Error("end is out of bounds");
    if (e === t) throw new Error("Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead");
    this._split(e), this._split(t), i === true && (an.storeName || (console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"), an.storeName = true), i = { storeName: true });
    const r = i !== void 0 && i.storeName, o = i !== void 0 && i.overwrite;
    if (r) {
      const c = this.original.slice(e, t);
      Object.defineProperty(this.storedNames, c, { writable: true, value: true, enumerable: true });
    }
    const a = this.byStart[e], l = this.byEnd[t];
    if (a) {
      let c = a;
      for (; c !== l; ) {
        if (c.next !== this.byStart[c.end]) throw new Error("Cannot overwrite across a split point");
        c = c.next, c.edit("", false);
      }
      a.edit(s, r, !o);
    } else {
      const c = new Fo(e, t, "").edit(s, r);
      l.next = c, c.previous = l;
    }
    return this;
  }
  prepend(e) {
    if (typeof e != "string") throw new TypeError("outro content must be a string");
    return this.intro = e + this.intro, this;
  }
  prependLeft(e, t) {
    if (e += this.offset, typeof t != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const s = this.byEnd[e];
    return s ? s.prependLeft(t) : this.intro = t + this.intro, this;
  }
  prependRight(e, t) {
    if (e += this.offset, typeof t != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const s = this.byStart[e];
    return s ? s.prependRight(t) : this.outro = t + this.outro, this;
  }
  remove(e, t) {
    if (e += this.offset, t += this.offset, this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; t < 0; ) t += this.original.length;
    }
    if (e === t) return this;
    if (e < 0 || t > this.original.length) throw new Error("Character is out of bounds");
    if (e > t) throw new Error("end must be greater than start");
    this._split(e), this._split(t);
    let s = this.byStart[e];
    for (; s; ) s.intro = "", s.outro = "", s.edit(""), s = t > s.end ? this.byStart[s.end] : null;
    return this;
  }
  reset(e, t) {
    if (e += this.offset, t += this.offset, this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; t < 0; ) t += this.original.length;
    }
    if (e === t) return this;
    if (e < 0 || t > this.original.length) throw new Error("Character is out of bounds");
    if (e > t) throw new Error("end must be greater than start");
    this._split(e), this._split(t);
    let s = this.byStart[e];
    for (; s; ) s.reset(), s = t > s.end ? this.byStart[s.end] : null;
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let e = this.lastChunk;
    do {
      if (e.outro.length) return e.outro[e.outro.length - 1];
      if (e.content.length) return e.content[e.content.length - 1];
      if (e.intro.length) return e.intro[e.intro.length - 1];
    } while (e = e.previous);
    return this.intro.length ? this.intro[this.intro.length - 1] : "";
  }
  lastLine() {
    let e = this.outro.lastIndexOf(Tn);
    if (e !== -1) return this.outro.substr(e + 1);
    let t = this.outro, s = this.lastChunk;
    do {
      if (s.outro.length > 0) {
        if (e = s.outro.lastIndexOf(Tn), e !== -1) return s.outro.substr(e + 1) + t;
        t = s.outro + t;
      }
      if (s.content.length > 0) {
        if (e = s.content.lastIndexOf(Tn), e !== -1) return s.content.substr(e + 1) + t;
        t = s.content + t;
      }
      if (s.intro.length > 0) {
        if (e = s.intro.lastIndexOf(Tn), e !== -1) return s.intro.substr(e + 1) + t;
        t = s.intro + t;
      }
    } while (s = s.previous);
    return e = this.intro.lastIndexOf(Tn), e !== -1 ? this.intro.substr(e + 1) + t : this.intro + t;
  }
  slice(e = 0, t = this.original.length - this.offset) {
    if (e += this.offset, t += this.offset, this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; t < 0; ) t += this.original.length;
    }
    let s = "", i = this.firstChunk;
    for (; i && (i.start > e || i.end <= e); ) {
      if (i.start < t && i.end >= t) return s;
      i = i.next;
    }
    if (i && i.edited && i.start !== e) throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);
    const r = i;
    for (; i; ) {
      !i.intro || r === i && i.start !== e || (s += i.intro);
      const o = i.start < t && i.end >= t;
      if (o && i.edited && i.end !== t) throw new Error(`Cannot use replaced character ${t} as slice end anchor.`);
      const a = r === i ? e - i.start : 0, l = o ? i.content.length + t - i.end : i.content.length;
      if (s += i.content.slice(a, l), !i.outro || o && i.end !== t || (s += i.outro), o) break;
      i = i.next;
    }
    return s;
  }
  snip(e, t) {
    const s = this.clone();
    return s.remove(0, e), s.remove(t, s.original.length), s;
  }
  _split(e) {
    if (this.byStart[e] || this.byEnd[e]) return;
    let t = this.lastSearchedChunk, s = t;
    const i = e > t.end;
    for (; t; ) {
      if (t.contains(e)) return this._splitChunk(t, e);
      if (t = i ? this.byStart[t.end] : this.byEnd[t.start], t === s) return;
      s = t;
    }
  }
  _splitChunk(e, t) {
    if (e.edited && e.content.length) {
      const i = yr(this.original)(t);
      throw new Error(`Cannot split a chunk that has already been edited (${i.line}:${i.column} \u2013 "${e.original}")`);
    }
    const s = e.split(t);
    return this.byEnd[t] = e, this.byStart[t] = s, this.byEnd[s.end] = s, e === this.lastChunk && (this.lastChunk = s), this.lastSearchedChunk = e, true;
  }
  toString() {
    let e = this.intro, t = this.firstChunk;
    for (; t; ) e += t.toString(), t = t.next;
    return e + this.outro;
  }
  isEmpty() {
    let e = this.firstChunk;
    do
      if (e.intro.length && e.intro.trim() || e.content.length && e.content.trim() || e.outro.length && e.outro.trim()) return false;
    while (e = e.next);
    return true;
  }
  length() {
    let e = this.firstChunk, t = 0;
    do
      t += e.intro.length + e.content.length + e.outro.length;
    while (e = e.next);
    return t;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(e) {
    return this.trimStart(e).trimEnd(e);
  }
  trimEndAborted(e) {
    const t = new RegExp((e || "\\s") + "+$");
    if (this.outro = this.outro.replace(t, ""), this.outro.length) return true;
    let s = this.lastChunk;
    do {
      const i = s.end, r = s.trimEnd(t);
      if (s.end !== i && (this.lastChunk === s && (this.lastChunk = s.next), this.byEnd[s.end] = s, this.byStart[s.next.start] = s.next, this.byEnd[s.next.end] = s.next), r) return true;
      s = s.previous;
    } while (s);
    return false;
  }
  trimEnd(e) {
    return this.trimEndAborted(e), this;
  }
  trimStartAborted(e) {
    const t = new RegExp("^" + (e || "\\s") + "+");
    if (this.intro = this.intro.replace(t, ""), this.intro.length) return true;
    let s = this.firstChunk;
    do {
      const i = s.end, r = s.trimStart(t);
      if (s.end !== i && (s === this.lastChunk && (this.lastChunk = s.next), this.byEnd[s.end] = s, this.byStart[s.next.start] = s.next, this.byEnd[s.next.end] = s.next), r) return true;
      s = s.next;
    } while (s);
    return false;
  }
  trimStart(e) {
    return this.trimStartAborted(e), this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(e, t) {
    function s(i, r) {
      return typeof t == "string" ? t.replace(/\$(\$|&|\d+)/g, (o, a) => a === "$" ? "$" : a === "&" ? i[0] : +a < i.length ? i[+a] : `$${a}`) : t(...i, i.index, r, i.groups);
    }
    if (e.global) (function(i, r) {
      let o;
      const a = [];
      for (; o = i.exec(r); ) a.push(o);
      return a;
    })(e, this.original).forEach((i) => {
      if (i.index != null) {
        const r = s(i, this.original);
        r !== i[0] && this.overwrite(i.index, i.index + i[0].length, r);
      }
    });
    else {
      const i = this.original.match(e);
      if (i && i.index != null) {
        const r = s(i, this.original);
        r !== i[0] && this.overwrite(i.index, i.index + i[0].length, r);
      }
    }
    return this;
  }
  _replaceString(e, t) {
    const { original: s } = this, i = s.indexOf(e);
    return i !== -1 && this.overwrite(i, i + e.length, t), this;
  }
  replace(e, t) {
    return typeof e == "string" ? this._replaceString(e, t) : this._replaceRegexp(e, t);
  }
  _replaceAllString(e, t) {
    const { original: s } = this, i = e.length;
    for (let r = s.indexOf(e); r !== -1; r = s.indexOf(e, r + i)) s.slice(r, r + i) !== t && this.overwrite(r, r + i, t);
    return this;
  }
  replaceAll(e, t) {
    if (typeof e == "string") return this._replaceAllString(e, t);
    if (!e.global) throw new TypeError("MagicString.prototype.replaceAll called with a non-global RegExp argument");
    return this._replaceRegexp(e, t);
  }
}
const Vo = Object.prototype.hasOwnProperty;
let Iu = class Pl {
  constructor(e = {}) {
    this.intro = e.intro || "", this.separator = e.separator !== void 0 ? e.separator : `
`, this.sources = [], this.uniqueSources = [], this.uniqueSourceIndexByFilename = {};
  }
  addSource(e) {
    if (e instanceof Xt) return this.addSource({ content: e, filename: e.filename, separator: this.separator });
    if (!$l(e) || !e.content) throw new Error("bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`");
    if (["filename", "ignoreList", "indentExclusionRanges", "separator"].forEach((t) => {
      Vo.call(e, t) || (e[t] = e.content[t]);
    }), e.separator === void 0 && (e.separator = this.separator), e.filename) if (Vo.call(this.uniqueSourceIndexByFilename, e.filename)) {
      const t = this.uniqueSources[this.uniqueSourceIndexByFilename[e.filename]];
      if (e.content.original !== t.content) throw new Error(`Illegal source: same filename (${e.filename}), different contents`);
    } else this.uniqueSourceIndexByFilename[e.filename] = this.uniqueSources.length, this.uniqueSources.push({ filename: e.filename, content: e.content.original });
    return this.sources.push(e), this;
  }
  append(e, t) {
    return this.addSource({ content: new Xt(e), separator: t && t.separator || "" }), this;
  }
  clone() {
    const e = new Pl({ intro: this.intro, separator: this.separator });
    return this.sources.forEach((t) => {
      e.addSource({ filename: t.filename, content: t.content.clone(), separator: t.separator });
    }), e;
  }
  generateDecodedMap(e = {}) {
    const t = [];
    let s;
    this.sources.forEach((r) => {
      Object.keys(r.content.storedNames).forEach((o) => {
        ~t.indexOf(o) || t.push(o);
      });
    });
    const i = new vl(e.hires);
    return this.intro && i.advance(this.intro), this.sources.forEach((r, o) => {
      o > 0 && i.advance(this.separator);
      const a = r.filename ? this.uniqueSourceIndexByFilename[r.filename] : -1, l = r.content, c = yr(l.original);
      l.intro && i.advance(l.intro), l.firstChunk.eachNext((d) => {
        const p = c(d.start);
        d.intro.length && i.advance(d.intro), r.filename ? d.edited ? i.addEdit(a, d.content, p, d.storeName ? t.indexOf(d.original) : -1) : i.addUneditedChunk(a, d, l.original, p, l.sourcemapLocations) : i.advance(d.content), d.outro.length && i.advance(d.outro);
      }), l.outro && i.advance(l.outro), r.ignoreList && a !== -1 && (s === void 0 && (s = []), s.push(a));
    }), { file: e.file ? e.file.split(/[/\\]/).pop() : void 0, sources: this.uniqueSources.map((r) => e.file ? Sl(e.file, r.filename) : r.filename), sourcesContent: this.uniqueSources.map((r) => e.includeContent ? r.content : null), names: t, mappings: i.raw, x_google_ignoreList: s };
  }
  generateMap(e) {
    return new Pi(this.generateDecodedMap(e));
  }
  getIndentString() {
    const e = {};
    return this.sources.forEach((t) => {
      const s = t.content._getRawIndentString();
      s !== null && (e[s] || (e[s] = 0), e[s] += 1);
    }), Object.keys(e).sort((t, s) => e[t] - e[s])[0] || "	";
  }
  indent(e) {
    if (arguments.length || (e = this.getIndentString()), e === "") return this;
    let t = !this.intro || this.intro.slice(-1) === `
`;
    return this.sources.forEach((s, i) => {
      const r = s.separator !== void 0 ? s.separator : this.separator, o = t || i > 0 && /\r?\n$/.test(r);
      s.content.indent(e, { exclude: s.indentExclusionRanges, indentStart: o }), t = s.content.lastChar() === `
`;
    }), this.intro && (this.intro = e + this.intro.replace(/^[^\n]/gm, (s, i) => i > 0 ? e + s : s)), this;
  }
  prepend(e) {
    return this.intro = e + this.intro, this;
  }
  toString() {
    const e = this.sources.map((t, s) => {
      const i = t.separator !== void 0 ? t.separator : this.separator;
      return (s > 0 ? i : "") + t.content.toString();
    }).join("");
    return this.intro + e;
  }
  isEmpty() {
    return (!this.intro.length || !this.intro.trim()) && !this.sources.some((e) => !e.content.isEmpty());
  }
  length() {
    return this.sources.reduce((e, t) => e + t.content.length(), this.intro.length);
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(e) {
    return this.trimStart(e).trimEnd(e);
  }
  trimStart(e) {
    const t = new RegExp("^" + (e || "\\s") + "+");
    if (this.intro = this.intro.replace(t, ""), !this.intro) {
      let s, i = 0;
      do
        if (s = this.sources[i++], !s) break;
      while (!s.content.trimStartAborted(e));
    }
    return this;
  }
  trimEnd(e) {
    const t = new RegExp((e || "\\s") + "+$");
    let s, i = this.sources.length - 1;
    do
      if (s = this.sources[i--], !s) {
        this.intro = this.intro.replace(t, "");
        break;
      }
    while (!s.content.trimEndAborted(e));
    return this;
  }
};
const Nu = /^(?:\/|(?:[A-Za-z]:)?[/\\|])/, ku = /^\.?\.\//, Cu = /\\/g, mn = /[/\\]/, Ru = /\.[^.]+$/;
function dt(n) {
  return Nu.test(n);
}
function Fr(n) {
  return ku.test(n);
}
function Et(n) {
  return n.replace(Cu, "/");
}
function ht(n) {
  return n.split(mn).pop() || "";
}
function St(n) {
  const e = /[/\\][^/\\]*$/.exec(n);
  return e ? n.slice(0, -e[0].length) || "/" : ".";
}
function wt(n) {
  const e = Ru.exec(ht(n));
  return e ? e[0] : "";
}
function Jt(n, e) {
  const t = n.split(mn).filter(Boolean), s = e.split(mn).filter(Boolean);
  for (t[0] === "." && t.shift(), s[0] === "." && s.shift(); t[0] && s[0] && t[0] === s[0]; ) t.shift(), s.shift();
  for (; s[0] === ".." && t.length > 0; ) s.shift(), t.pop();
  for (; t.pop(); ) s.unshift("..");
  return s.join("/");
}
function Ke(...n) {
  const e = n.shift();
  if (!e) return "/";
  let t = e.split(mn);
  for (const s of n) if (dt(s)) t = s.split(mn);
  else {
    const i = s.split(mn);
    for (; i[0] === "." || i[0] === ".."; ) i.shift() === ".." && t.pop();
    t.push(...i);
  }
  return t.join("/");
}
function kn(n, e, t, s) {
  e.remove(t, s), n.removeAnnotations(e);
}
const jt = { isNoStatement: true };
function Me(n, e, t = 0) {
  let s, i;
  for (s = n.indexOf(e, t); ; ) {
    if ((t = n.indexOf("/", t)) === -1 || t >= s) return s;
    i = n.charCodeAt(++t), ++t, (t = i === 47 ? n.indexOf(`
`, t) + 1 : n.indexOf("*/", t) + 2) > s && (s = n.indexOf(e, t));
  }
}
const jo = /\S/g;
function Ct(n, e) {
  return jo.lastIndex = e, jo.exec(n).index;
}
const Du = /\s/;
function Yn(n) {
  let e, t, s = 0;
  for (e = n.indexOf(`
`, s); ; ) {
    if (s = n.indexOf("/", s), s === -1 || s > e) return [e, e + 1];
    if (t = n.charCodeAt(s + 1), t === 47) return [s, e + 1];
    s = n.indexOf("*/", s + 2) + 2, s > e && (e = n.indexOf(`
`, s));
  }
}
function ds(n, e, t, s, i) {
  let r, o, a, l, c = n[0], d = !c.included || c.needsBoundaries;
  d && (l = t + Yn(e.original.slice(t, c.start))[1]);
  for (let p = 1; p <= n.length; p++) r = c, o = l, a = d, c = n[p], d = c !== void 0 && (!c.included || c.needsBoundaries), a || d ? (l = r.end + Yn(e.original.slice(r.end, c === void 0 ? s : c.start))[1], r.included ? a ? r.render(e, i, { end: l, start: o }) : r.render(e, i) : kn(r, e, o, l)) : r.render(e, i);
}
function wi(n, e, t, s) {
  const i = [];
  let r, o, a, l, c = t - 1;
  for (const d of n) {
    for (r !== void 0 && (c = r.end + Me(e.original.slice(r.end, d.start), ",")), o = a = c + 1 + Yn(e.original.slice(c + 1, d.start))[1]; l = e.original.charCodeAt(o), l === 32 || l === 9 || l === 10 || l === 13; ) o++;
    r !== void 0 && i.push({ contentEnd: a, end: o, node: r, separator: c, start: t }), r = d, t = o;
  }
  return i.push({ contentEnd: s, end: s, node: r, separator: null, start: t }), i;
}
function Ii(n, e, t) {
  for (; ; ) {
    const [s, i] = Yn(n.original.slice(e, t));
    if (s === -1) break;
    n.remove(e + s, e += i);
  }
}
function nn(n, { exportNamesByVariable: e, snippets: { _: t, getObject: s, getPropertyAccess: i } }, r = "") {
  if (n.length === 1 && e.get(n[0]).length === 1) {
    const o = n[0];
    return `exports(${JSON.stringify(e.get(o)[0])},${t}${o.getName(i)}${r})`;
  }
  {
    const o = [];
    for (const a of n) for (const l of e.get(a)) o.push([l, a.getName(i) + r]);
    return `exports(${s(o, { lineBreakIndent: null })})`;
  }
}
function Vr(n, e, t, s, { exportNamesByVariable: i, snippets: { _: r } }) {
  s.prependRight(e, `exports(${JSON.stringify(i.get(n)[0])},${r}`), s.appendLeft(t, ")");
}
function wl(n, e, t, s, i, r) {
  const { _: o, getPropertyAccess: a } = r.snippets;
  i.appendLeft(t, `,${o}${nn([n], r)},${o}${n.getName(a)}`), s && (i.prependRight(e, "("), i.appendLeft(t, ")"));
}
const ze = Object.freeze(/* @__PURE__ */ Object.create(null)), Be = Object.freeze({}), $e = Object.freeze([]), Il = Object.freeze(new class extends Set {
  add() {
    throw new Error("Cannot add to empty set");
  }
}());
function He(n, e, t) {
  const s = n.get(e);
  if (s !== void 0) return s;
  const i = t();
  return n.set(e, i), i;
}
function Yt() {
  return /* @__PURE__ */ new Set();
}
function Uo() {
  return [];
}
const ne = Symbol("Unknown Key"), Gs = Symbol("Unknown Non-Accessor Key"), An = Symbol("Unknown Integer"), jr = Symbol("Symbol.toStringTag"), G = [], U = [ne], Ou = [Gs], br = [An], gn = Symbol("Entities");
class Sn {
  constructor() {
    this.entityPaths = Object.create(null, { [gn]: { value: /* @__PURE__ */ new Set() } });
  }
  trackEntityAtPathAndGetIfTracked(e, t) {
    const s = this.getEntities(e);
    return !!s.has(t) || (s.add(t), false);
  }
  withTrackedEntityAtPath(e, t, s, i) {
    const r = this.getEntities(e);
    if (r.has(t)) return i;
    r.add(t);
    const o = s();
    return r.delete(t), o;
  }
  getEntities(e) {
    let t = this.entityPaths;
    for (const s of e) t = t[s] || (t[s] = Object.create(null, { [gn]: { value: /* @__PURE__ */ new Set() } }));
    return t[gn];
  }
}
const xe = new Sn();
class Go {
  constructor() {
    this.entityPaths = Object.create(null, { [gn]: { value: /* @__PURE__ */ new Map() } });
  }
  trackEntityAtPathAndGetIfTracked(e, t, s) {
    let i = this.entityPaths;
    for (const o of e) i = i[o] || (i[o] = Object.create(null, { [gn]: { value: /* @__PURE__ */ new Map() } }));
    const r = He(i[gn], t, Yt);
    return !!r.has(s) || (r.add(s), false);
  }
}
const Lu = Object.freeze({ [ne]: Be });
class _u {
  constructor() {
    this.includedPaths = null;
  }
  includePathAndGetIfIncluded(e) {
    let t = true, s = this, i = "includedPaths", r = this.includedPaths || (this.includedPaths = (t = false, /* @__PURE__ */ Object.create(null)));
    for (const o of e) {
      if (r[ne]) return true;
      if (typeof o == "symbol") return s[i] = Lu, false;
      s = r, i = o, r = r[o] || (r[o] = (t = false, /* @__PURE__ */ Object.create(null)));
    }
    return t;
  }
}
const Mu = Object.freeze({ [ne]: true });
class Tu {
  constructor() {
    this.includedPaths = null;
  }
  includePathAndGetIfIncluded(e) {
    let t = true;
    const s = this.includedPaths || (this.includedPaths = (t = false, /* @__PURE__ */ Object.create(null)));
    if (s[ne]) return true;
    const [i, r] = e;
    return i ? typeof i == "symbol" ? (this.includedPaths = Mu, false) : r ? s[i] === ne || (s[i] = ne, false) : !!s[i] || (s[i] = true, false) : t;
  }
  includeAllPaths(e, t, s) {
    const { includedPaths: i } = this;
    if (i) if (i[ne]) e.includePath([...s, ne], t);
    else {
      const r = Object.entries(i);
      if (r.length === 0) e.includePath(s, t);
      else for (const [o, a] of r) e.includePath(a === ne ? [...s, o, ne] : [...s, o], t);
    }
  }
}
function Nl(n, e) {
  if (n.type === "MemberExpression") return !n.computed && Nl(n.object, n);
  if (n.type !== "Identifier") return false;
  switch (e == null ? void 0 : e.type) {
    case "MemberExpression":
      return e.computed || n === e.object;
    case "MethodDefinition":
      return e.computed;
    case "MetaProperty":
      return e.meta === n;
    case "PropertyDefinition":
    case "Property":
      return e.computed || n === e.value;
    case "ExportSpecifier":
    case "ImportSpecifier":
      return n === e.local;
    case "LabeledStatement":
    case "BreakStatement":
    case "ContinueStatement":
      return false;
    default:
      return true;
  }
}
function nt() {
  return { brokenFlow: false, hasBreak: false, hasContinue: false, includedCallArguments: /* @__PURE__ */ new Set(), includedLabels: /* @__PURE__ */ new Set() };
}
function Cn() {
  return { accessed: new Sn(), assigned: new Sn(), brokenFlow: false, called: new Go(), hasBreak: false, hasContinue: false, ignore: { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: false, this: false }, includedLabels: /* @__PURE__ */ new Set(), instantiated: new Go(), replacedVariableInits: /* @__PURE__ */ new Map() };
}
function ue(n, e) {
  return (n & e) !== 0;
}
function de(n, e, t) {
  return n & ~e | -t & e;
}
const oe = Symbol("Unknown Value"), Ni = Symbol("Unknown Truthy Value"), ki = Symbol("Unknown Falsy Value");
class Ye {
  constructor() {
    this.flags = 0;
  }
  get included() {
    return ue(this.flags, 1);
  }
  set included(e) {
    this.flags = de(this.flags, 1, e);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    Rt(e);
  }
  deoptimizePath(e) {
  }
  getLiteralValueAtPath(e, t, s) {
    return oe;
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return De;
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return true;
  }
  include(e, t, s) {
    this.included || this.includeNode(e);
  }
  includeNode(e) {
    this.included = true;
  }
  includePath(e, t) {
    this.included || this.includeNode(t);
  }
  includeCallArguments(e, t) {
    Ur(e, t);
  }
  shouldBeIncluded(e) {
    return true;
  }
}
const se = new class extends Ye {
}(), De = [se, false], Rt = (n) => {
  for (const e of n.args) e == null ? void 0 : e.deoptimizePath(U);
}, Ur = (n, e) => {
  var _a2;
  (_a2 = n.args[0]) == null ? void 0 : _a2.includePath(U, e), kl(n, e);
}, kl = ({ args: n }, e) => {
  for (let t = 1; t < n.length; t++) {
    const s = n[t];
    s && (s.includePath(U, e), s.include(e, false));
  }
}, Zt = { args: [null], type: 0 }, Gr = { args: [null, se], type: 1 }, hs = { args: [null], type: 2, withNew: false }, Hr = "ArrowFunctionExpression", ps = "CallExpression", Cl = "ExportDefaultDeclaration", ct = "ExpressionStatement", Wr = "Identifier", Hs = "Program", Rl = "Property";
function Bu(n, e) {
  return n.start <= e && e < n.end;
}
function qr(n, e, t) {
  return function(s, i = {}) {
    const { offsetLine: r = 0, offsetColumn: o = 0 } = i;
    let a = 0;
    const l = s.split(`
`).map((d, p) => {
      const h = a + d.length + 1, f = { start: a, end: h, line: p };
      return a = h, f;
    });
    let c = 0;
    return function(d, p) {
      if (typeof d == "string" && (d = s.indexOf(d, p ?? 0)), d === -1) return;
      let h = l[c];
      const f = d >= h.end ? 1 : -1;
      for (; h; ) {
        if (Bu(h, d)) return { line: r + h.line, column: o + d - h.start, character: d };
        c += f, h = l[c];
      }
    };
  }(n, t)(e, t && t.startIndex);
}
function qi(n) {
  return n.replace(/^\t+/, (e) => e.split("	").join("  "));
}
const zu = "...";
function Dl(n, e, t) {
  let s = n.split(`
`);
  if (e > s.length) return "";
  const i = Math.max(qi(s[e - 1].slice(0, t)).length + 10 + 3, 120), r = Math.max(0, e - 3);
  let o = Math.min(e + 2, s.length);
  for (s = s.slice(r, o); !/\S/.test(s[s.length - 1]); ) s.pop(), o -= 1;
  const a = String(o).length;
  return s.map((l, c) => {
    const d = r + c + 1 === e;
    let p = String(c + r + 1);
    for (; p.length < a; ) p = ` ${p}`;
    let h = qi(l);
    if (h.length > i && (h = `${h.slice(0, i - 3)}${zu}`), d) {
      const f = function(E) {
        let g = "";
        for (; E--; ) g += " ";
        return g;
      }(a + 2 + qi(l.slice(0, t)).length) + "^";
      return `${p}: ${h}
${f}`;
    }
    return `${p}: ${h}`;
  }).join(`
`);
}
const Fu = "silent", Q = "warn", Ut = "info", fs = "debug", Gt = { [fs]: 0, [Ut]: 1, [Fu]: 3, [Q]: 2 };
function $t(n, e) {
  const t = n.length <= 1, s = n.map((r) => `"${r}"`);
  let i = t ? s[0] : `${s.slice(0, -1).join(", ")} and ${s.slice(-1)[0]}`;
  return e && (i += ` ${t ? e[0] : e[1]}`), i;
}
function Er(n) {
  const e = ht(n);
  return e.slice(0, Math.max(0, e.length - wt(n).length));
}
function Z(n) {
  return dt(n) ? Jt(Ke(), n) : n;
}
function Ws(n) {
  return n[0] === "/" || n[0] === "." && (n[1] === "/" || n[1] === ".") || dt(n);
}
const Vu = /^(\.\.\/)*\.\.$/;
function Ol(n, e, t, s) {
  for (; e.startsWith("../"); ) e = e.slice(3), n = "_/" + n;
  let i = Et(Jt(St(n), e));
  if (t && i.endsWith(".js") && (i = i.slice(0, -3)), s) {
    if (i === "") return "../" + ht(e);
    if (Vu.test(i)) return [...i.split("/"), "..", ht(e)].join("/");
  }
  return i ? i.startsWith("..") ? i : "./" + i : ".";
}
function Re(n) {
  return `https://rollupjs.org/${n}`;
}
const Ll = "troubleshooting/#error-name-is-not-exported-by-module", Os = "configuration-options/#jsx", _l = "configuration-options/#output-amd-id", Zn = "configuration-options/#output-dir", Kr = "configuration-options/#output-exports", Ml = "configuration-options/#output-format", Tl = "configuration-options/#output-inlinedynamicimports", Xr = "configuration-options/#output-interop", Ho = "configuration-options/#output-manualchunks", Wo = "configuration-options/#output-name", ju = "configuration-options/#output-sourcemapfile", pn = "plugin-development/#generatebundle";
function j(n) {
  throw n instanceof Error ? n : $n(n);
}
function $n(n) {
  Bl(n);
  const e = Object.assign(new Error(n.message), n);
  return Object.defineProperty(e, "name", { value: "RollupError", writable: true }), e;
}
function qs(n, e, t, s) {
  if (typeof e == "object") {
    const { line: i, column: r } = e;
    n.loc = { column: r, file: s, line: i };
  } else {
    n.pos = e;
    const i = qr(t, e, { offsetLine: 1 });
    if (!i) return;
    const { line: r, column: o } = i;
    n.loc = { column: o, file: s, line: r };
  }
  if (n.frame === void 0) {
    const { line: i, column: r } = n.loc;
    n.frame = Dl(t, i, r);
  }
}
const qo = Symbol("augmented");
function Bl(n) {
  var _a2;
  if (!n.plugin && !n.loc || n[qo]) return;
  n[qo] = true;
  let e = "";
  n.plugin && (e += `[plugin ${n.plugin}] `);
  const t = n.id || ((_a2 = n.loc) == null ? void 0 : _a2.file);
  if (t) {
    const i = n.loc ? ` (${n.loc.line}:${n.loc.column})` : "";
    e += `${Z(t)}${i}: `;
  }
  const s = n.message;
  n.message = e + n.message, Kl(n, s);
}
const zl = "INVALID_EXPORT_OPTION", Fl = "INVALID_IMPORT_ATTRIBUTE", Vl = "INVALID_PLUGIN_HOOK", jl = "MISSING_EXPORT", xr = "MISSING_IMPLICIT_DEPENDANT", Ko = "MISSING_NAME_OPTION_FOR_IIFE_EXPORT", Ul = "PARSE_ERROR", Gl = "SOURCEMAP_BROKEN", Hl = "UNEXPECTED_NAMED_IMPORT", Xo = "UNRESOLVED_ENTRY", Jo = "UNRESOLVED_IMPORT";
function Uu(n) {
  return { code: "ASSET_SOURCE_MISSING", message: `Plugin error creating asset "${n}" - no asset source set.` };
}
function Wl(n) {
  return { code: "CANNOT_CALL_NAMESPACE", message: `Cannot call a namespace ("${n}").` };
}
function Gu({ fileName: n, code: e }, { pos: t, message: s }) {
  const i = { code: "CHUNK_INVALID", message: `Chunk "${n}" is not valid JavaScript: ${s}.` };
  return qs(i, t, e, n), i;
}
function Hu(n) {
  return { code: "CIRCULAR_DEPENDENCY", ids: n, message: `Circular dependency: ${n.map(Z).join(" -> ")}` };
}
function Wu(n, e, t, s, i) {
  return { code: "CYCLIC_CROSS_CHUNK_REEXPORT", exporter: e, id: s, message: `Export "${n}" of module "${Z(e)}" was reexported through module "${Z(t)}" while both modules are dependencies of each other and will end up in different chunks by current Rollup settings. This scenario is not well supported at the moment as it will produce a circular dependency between chunks and will likely lead to broken execution order.
Either change the import in "${Z(s)}" to point directly to the exporting module or ${i ? 'do not use "output.preserveModules"' : 'reconfigure "output.manualChunks"'} to ensure these modules end up in the same chunk.`, reexporter: t };
}
function qu(n, e, { line: t, column: s }) {
  return { code: "FIRST_SIDE_EFFECT", message: `First side effect in ${Z(e)} is at (${t}:${s})
${Dl(n, t, s)}` };
}
function ql(n, e) {
  return { code: "ILLEGAL_REASSIGNMENT", message: `Illegal reassignment of import "${n}" in "${Z(e)}".` };
}
function Ls(n, e, t, s) {
  return { code: "INCONSISTENT_IMPORT_ATTRIBUTES", message: `Module "${Z(s)}" tried to import "${Z(t)}" with ${Yo(e)} attributes, but it was already imported elsewhere with ${Yo(n)} attributes. Please ensure that import attributes for the same module are always consistent.` };
}
const Yo = (n) => {
  const e = Object.entries(n);
  return e.length === 0 ? "no" : e.map(([t, s]) => `"${t}": "${s}"`).join(", ");
};
function Ku(n, e, t) {
  return { code: "INVALID_ANNOTATION", id: e, message: `A comment

"${n}"

in "${Z(e)}" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.`, url: Re(t === "noSideEffects" ? "configuration-options/#no-side-effects" : "configuration-options/#pure") };
}
function Xu(n, e) {
  return { code: "INPUT_HOOK_IN_OUTPUT_PLUGIN", message: `The "${e}" hook used by the output plugin ${n} is a build time hook and will not be run for that plugin. Either this plugin cannot be used as an output plugin, or it should have an option to configure it as an output plugin.` };
}
function Kl(n, e) {
  return n.stack && (n.stack = n.stack.replace(e, n.message)), n;
}
function Zo(n, e, t) {
  return { code: zl, message: `"${n}" was specified for "output.exports", but entry module "${Z(t)}" has the following exports: ${$t(e)}`, url: Re(Kr) };
}
function Qo(n) {
  return { code: Fl, message: `Rollup could not statically analyze an import attribute of a dynamic import in "${Z(n)}". Import attributes need to have string keys and values.` };
}
function ke(n, e, t, s) {
  return { code: "INVALID_OPTION", message: `Invalid value ${s === void 0 ? "" : `${JSON.stringify(s)} `}for option "${n}" - ${t}.`, url: Re(e) };
}
function Ju(n, e) {
  return { binding: n, code: jl, exporter: e, message: `Exported variable "${n}" is not defined in "${Z(e)}".`, url: Re(Ll) };
}
function Ks(n, e, t, s) {
  const i = { binding: n, code: jl, exporter: t, id: e, url: Re(Ll) };
  if (s) return { ...i, message: `Exported variable "${n}" is not defined in "${Z(t)}", but it is imported by "${Z(e)}".` };
  const r = wt(t) === ".json";
  return { ...i, message: `"${n}" is not exported by "${Z(t)}", imported by "${Z(e)}".${r ? " (Note that you need @rollup/plugin-json to import JSON files)" : ""}` };
}
function Yu(n) {
  const e = [...n.implicitlyLoadedBefore].map((t) => Z(t.id)).sort();
  return { code: xr, message: `Module "${Z(n.id)}" that should be implicitly loaded before ${$t(e)} is not included in the module graph. Either it was not imported by an included module or only via a tree-shaken dynamic import, or no imported bindings were used and it had otherwise no side-effects.` };
}
function ea(n, e, t) {
  return { code: "OPTIMIZE_CHUNK_STATUS", message: `${t}, there are
${n} chunks, of which
${e} are below minChunkSize.` };
}
function Xs(n, e) {
  return { code: Ul, message: n, pos: e };
}
function Rn(n) {
  return { code: "REDECLARATION_ERROR", message: `Identifier "${n}" has already been declared` };
}
function Xl(n) {
  return { code: "RESERVED_NAMESPACE", message: `You have overridden reserved namespace "${n}"` };
}
function Jr(n, e) {
  let t = n.message.replace(/ \(\d+:\d+\)$/, "");
  return e.endsWith(".json") ? t += " (Note that you need @rollup/plugin-json to import JSON files)" : e.endsWith(".js") || (t += " (Note that you need plugins to import files that are not JavaScript)"), Kl({ cause: n, code: Ul, id: e, message: t, stack: n.stack }, n.message);
}
function Qn(n, e, { hook: t, id: s } = {}) {
  const i = n.code;
  return n.pluginCode || i == null || typeof i == "string" && i.startsWith("PLUGIN_") || (n.pluginCode = i), n.code = "PLUGIN_ERROR", n.plugin = e, t && (n.hook = t), s && (n.id = s), n;
}
function Zu(n) {
  return { code: Gl, message: `Multiple conflicting contents for sourcemap source ${n}` };
}
function ta(n, e, t) {
  const s = t ? "reexport" : "import";
  return { code: Hl, exporter: n, message: `The named export "${e}" was ${s}ed from the external module "${Z(n)}" even though its interop type is "defaultOnly". Either remove or change this ${s} or change the value of the "output.interop" option.`, url: Re(Xr) };
}
function Qu(n) {
  return { code: Hl, exporter: n, message: `There was a namespace "*" reexport from the external module "${Z(n)}" even though its interop type is "defaultOnly". This will be ignored as namespace reexports only reexport named exports. If this is not intended, either remove or change this reexport or change the value of the "output.interop" option.`, url: Re(Xr) };
}
function qe(n) {
  return { code: "VALIDATION_ERROR", message: n };
}
function zt(n, e, t, s, i) {
  (function(r, o, a, l, c) {
    if (a || c) {
      const d = function(p, h) {
        return { code: "DEPRECATED_FEATURE", message: p, url: Re(h) };
      }(r, o);
      if (c) return j(d);
      l(Q, d);
    }
  })(n, e, t, s.onLog, s.strictDeprecations);
}
const Ar = Symbol("PureFunction");
class sn extends Ye {
  markReassigned() {
    this.isReassigned = true;
  }
  constructor(e) {
    super(), this.name = e, this.alwaysRendered = false, this.forbiddenNames = null, this.globalName = null, this.initReached = false, this.isId = false, this.kind = null, this.renderBaseName = null, this.renderName = null, this.isReassigned = false, this.onlyFunctionCallUsed = true;
  }
  addReference(e) {
  }
  getOnlyFunctionCallUsed() {
    return this.onlyFunctionCallUsed;
  }
  addUsedPlace(e) {
    e.parent.type === ps && e.parent.callee === e || e.parent.type === Cl || (this.onlyFunctionCallUsed = false);
  }
  forbidName(e) {
    (this.forbiddenNames || (this.forbiddenNames = /* @__PURE__ */ new Set())).add(e);
  }
  getBaseVariableName() {
    var _a2;
    return ((_a2 = this.renderedLikeHoisted) == null ? void 0 : _a2.getBaseVariableName()) || this.renderBaseName || this.renderName || this.name;
  }
  getName(e, t) {
    if (this.globalName) return this.globalName;
    if (t == null ? void 0 : t(this)) return this.name;
    if (this.renderedLikeHoisted) return this.renderedLikeHoisted.getName(e, t);
    const s = this.renderName || this.name;
    return this.renderBaseName ? `${this.renderBaseName}${e(s)}` : s;
  }
  hasEffectsOnInteractionAtPath(e, { type: t }, s) {
    return t !== 0 || e.length > 0;
  }
  includePath(e, t) {
    var _a2;
    this.included = true, (_a2 = this.renderedLikeHoisted) == null ? void 0 : _a2.includePath(e, t);
  }
  renderLikeHoisted(e) {
    this.renderedLikeHoisted = e;
  }
  markCalledFromTryStatement() {
  }
  setRenderNames(e, t) {
    this.renderBaseName = e, this.renderName = t;
  }
}
class es extends sn {
  constructor(e, t) {
    super(t), this.referenced = false, this.module = e, this.isNamespace = t === "*";
  }
  addReference(e) {
    this.referenced = true, this.name !== "default" && this.name !== "*" || this.module.suggestName(e.name);
  }
  hasEffectsOnInteractionAtPath(e, { type: t }) {
    return t !== 0 || e.length > (this.isNamespace ? 1 : 0);
  }
  includePath(e, t) {
    super.includePath(e, t), this.module.used = true;
  }
}
function Jl(n, e) {
  for (const t of e) {
    const s = Object.getOwnPropertyDescriptor(n, t).get;
    Object.defineProperty(n, t, { get() {
      const i = s.call(n);
      return Object.defineProperty(n, t, { value: i }), i;
    } });
  }
}
const Ci = /* @__PURE__ */ new Set(["await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "eval", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "NaN", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "undefined", "var", "void", "while", "with", "yield"]), Yl = /[^\w$]/g, Zl = (n) => ((e) => /\d/.test(e[0]))(n) || Ci.has(n) || n === "arguments";
function Ri(n) {
  return n = n.replace(/-(\w)/g, (e, t) => t.toUpperCase()).replace(Yl, "_"), Zl(n) && (n = `_${n}`), n || "_";
}
const Js = /^[$_\p{ID_Start}][$\u200C\u200D\p{ID_Continue}]*$/u, ed = /^(?:0|[1-9]\d*)$/;
function Di(n) {
  return Js.test(n) ? n === "__proto__" ? '["__proto__"]' : n : ed.test(n) && +n <= Number.MAX_SAFE_INTEGER ? n : JSON.stringify(n);
}
function ln(n) {
  return Js.test(n) ? n : JSON.stringify(n);
}
class ve {
  constructor(e, t, s, i, r, o) {
    this.options = e, this.id = t, this.renormalizeRenderPath = r, this.dynamicImporters = [], this.execIndex = 1 / 0, this.exportedVariables = /* @__PURE__ */ new Map(), this.importers = [], this.reexported = false, this.used = false, this.declarations = /* @__PURE__ */ new Map(), this.mostCommonSuggestion = 0, this.nameSuggestions = /* @__PURE__ */ new Map(), this.suggestedVariableName = Ri(t.split(/[/\\]/).pop());
    const { importers: a, dynamicImporters: l } = this;
    this.info = { ast: null, attributes: o, code: null, dynamicallyImportedIdResolutions: $e, dynamicallyImportedIds: $e, get dynamicImporters() {
      return l.sort();
    }, exportedBindings: null, exports: null, hasDefaultExport: null, id: t, implicitlyLoadedAfterOneOf: $e, implicitlyLoadedBefore: $e, importedIdResolutions: $e, importedIds: $e, get importers() {
      return a.sort();
    }, isEntry: false, isExternal: true, isIncluded: null, meta: i, moduleSideEffects: s, syntheticNamedExports: false };
  }
  cacheInfoGetters() {
    Jl(this.info, ["dynamicImporters", "importers"]);
  }
  getVariableForExportName(e) {
    const t = this.declarations.get(e);
    if (t) return [t];
    const s = new es(this, e);
    return this.declarations.set(e, s), this.exportedVariables.set(s, e), [s];
  }
  suggestName(e) {
    const t = (this.nameSuggestions.get(e) ?? 0) + 1;
    this.nameSuggestions.set(e, t), t > this.mostCommonSuggestion && (this.mostCommonSuggestion = t, this.suggestedVariableName = e);
  }
  warnUnusedImports() {
    const e = [...this.declarations].filter(([a, l]) => a !== "*" && !l.included && !this.reexported && !l.referenced).map(([a]) => a);
    if (e.length === 0) return;
    const t = /* @__PURE__ */ new Set();
    for (const a of e) for (const l of this.declarations.get(a).module.importers) t.add(l);
    const s = [...t];
    var i, r, o;
    this.options.onLog(Q, { code: "UNUSED_EXTERNAL_IMPORT", exporter: i = this.id, ids: o = s, message: `${$t(r = e, ["is", "are"])} imported from external module "${i}" but never used in ${$t(o.map((a) => Z(a)))}.`, names: r });
  }
}
function fn(n) {
  n.isExecuted = true;
  const e = [n], t = /* @__PURE__ */ new Set();
  for (const s of e) for (const i of [...s.dependencies, ...s.implicitlyLoadedBefore]) i instanceof ve || i.isExecuted || !i.info.moduleSideEffects && !s.implicitlyLoadedBefore.has(i) || t.has(i.id) || (i.isExecuted = true, t.add(i.id), e.push(i));
}
const it = () => {
};
var je = ["var", "let", "const", "init", "get", "set", "constructor", "method", "-", "+", "!", "~", "typeof", "void", "delete", "++", "--", "==", "!=", "===", "!==", "<", "<=", ">", ">=", "<<", ">>", ">>>", "+", "-", "*", "/", "%", "|", "^", "&", "||", "&&", "in", "instanceof", "**", "??", "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "|=", "^=", "&=", "**=", "&&=", "||=", "??=", "pure", "noSideEffects", "sourcemap", "using", "await using"];
const un = "_rollupAnnotations", Ql = "_rollupRemoved", Qe = (n, e) => {
  if (n === 0) return $e;
  const t = e[n++], s = new Array(t);
  for (let i = 0; i < t; i++) s[i] = td(e[n++], e);
  return s;
}, td = (n, e) => {
  const t = e[n++];
  return { end: e[n++], start: t, type: je[e[n]] };
}, Ot = { ArrayExpression: ["elements"], ArrayPattern: ["elements"], ArrowFunctionExpression: ["params", "body"], AssignmentExpression: ["left", "right"], AssignmentPattern: ["left", "right"], AwaitExpression: ["argument"], BinaryExpression: ["left", "right"], BlockStatement: ["body"], BreakStatement: ["label"], CallExpression: ["callee", "arguments"], CatchClause: ["param", "body"], ChainExpression: ["expression"], ClassBody: ["body"], ClassDeclaration: ["decorators", "id", "superClass", "body"], ClassExpression: ["decorators", "id", "superClass", "body"], ConditionalExpression: ["test", "consequent", "alternate"], ContinueStatement: ["label"], DebuggerStatement: [], Decorator: ["expression"], DoWhileStatement: ["body", "test"], EmptyStatement: [], ExportAllDeclaration: ["exported", "source", "attributes"], ExportDefaultDeclaration: ["declaration"], ExportNamedDeclaration: ["specifiers", "source", "attributes", "declaration"], ExportSpecifier: ["local", "exported"], ExpressionStatement: ["expression"], ForInStatement: ["left", "right", "body"], ForOfStatement: ["left", "right", "body"], ForStatement: ["init", "test", "update", "body"], FunctionDeclaration: ["id", "params", "body"], FunctionExpression: ["id", "params", "body"], Identifier: [], IfStatement: ["test", "consequent", "alternate"], ImportAttribute: ["key", "value"], ImportDeclaration: ["specifiers", "source", "attributes"], ImportDefaultSpecifier: ["local"], ImportExpression: ["source", "options"], ImportNamespaceSpecifier: ["local"], ImportSpecifier: ["imported", "local"], JSXAttribute: ["name", "value"], JSXClosingElement: ["name"], JSXClosingFragment: [], JSXElement: ["openingElement", "children", "closingElement"], JSXEmptyExpression: [], JSXExpressionContainer: ["expression"], JSXFragment: ["openingFragment", "children", "closingFragment"], JSXIdentifier: [], JSXMemberExpression: ["object", "property"], JSXNamespacedName: ["namespace", "name"], JSXOpeningElement: ["name", "attributes"], JSXOpeningFragment: [], JSXSpreadAttribute: ["argument"], JSXSpreadChild: ["expression"], JSXText: [], LabeledStatement: ["label", "body"], Literal: [], LogicalExpression: ["left", "right"], MemberExpression: ["object", "property"], MetaProperty: ["meta", "property"], MethodDefinition: ["decorators", "key", "value"], NewExpression: ["callee", "arguments"], ObjectExpression: ["properties"], ObjectPattern: ["properties"], PanicError: [], ParseError: [], PrivateIdentifier: [], Program: ["body"], Property: ["key", "value"], PropertyDefinition: ["decorators", "key", "value"], RestElement: ["argument"], ReturnStatement: ["argument"], SequenceExpression: ["expressions"], SpreadElement: ["argument"], StaticBlock: ["body"], Super: [], SwitchCase: ["test", "consequent"], SwitchStatement: ["discriminant", "cases"], TaggedTemplateExpression: ["tag", "quasi"], TemplateElement: [], TemplateLiteral: ["quasis", "expressions"], ThisExpression: [], ThrowStatement: ["argument"], TryStatement: ["block", "handler", "finalizer"], UnaryExpression: ["argument"], UpdateExpression: ["argument"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id", "init"], WhileStatement: ["test", "body"], YieldExpression: ["argument"] }, ec = "variables", ut = Symbol("IS_SKIPPED_CHAIN");
class z extends Ye {
  get deoptimized() {
    return ue(this.flags, 2);
  }
  set deoptimized(e) {
    this.flags = de(this.flags, 2, e);
  }
  constructor(e, t) {
    super(), this.parent = e, this.scope = t, this.createScope(t);
  }
  addExportedVariables(e, t) {
  }
  bind() {
    for (const e of Ot[this.type]) {
      const t = this[e];
      if (Array.isArray(t)) for (const s of t) s == null ? void 0 : s.bind();
      else t && t.bind();
    }
  }
  createScope(e) {
    this.scope = e;
  }
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    for (const t of Ot[this.type]) {
      const s = this[t];
      if (s !== null) {
        if (Array.isArray(s)) {
          for (const i of s) if (i == null ? void 0 : i.hasEffects(e)) return true;
        } else if (s.hasEffects(e)) return true;
      }
    }
    return false;
  }
  hasEffectsAsAssignmentTarget(e, t) {
    return this.hasEffects(e) || this.hasEffectsOnInteractionAtPath(G, this.assignmentInteraction, e);
  }
  include(e, t, s) {
    this.included || this.includeNode(e);
    for (const i of Ot[this.type]) {
      const r = this[i];
      if (r !== null) if (Array.isArray(r)) for (const o of r) o == null ? void 0 : o.include(e, t);
      else r.include(e, t);
    }
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations();
    for (const t of Ot[this.type]) {
      const s = this[t];
      if (s !== null) if (Array.isArray(s)) for (const i of s) i == null ? void 0 : i.includePath(U, e);
      else s.includePath(U, e);
    }
  }
  includeAsAssignmentTarget(e, t, s) {
    this.include(e, t);
  }
  initialise() {
    this.scope.context.magicString.addSourcemapLocation(this.start), this.scope.context.magicString.addSourcemapLocation(this.end);
  }
  parseNode(e) {
    var _a2;
    for (const [t, s] of Object.entries(e)) if (!this.hasOwnProperty(t)) if (t.charCodeAt(0) === 95) t === un ? this.annotations = s : t === Ql && (this.invalidAnnotations = s);
    else if (typeof s != "object" || s === null) this[t] = s;
    else if (Array.isArray(s)) {
      this[t] = new Array(s.length);
      let i = 0;
      for (const r of s) this[t][i++] = r === null ? null : new (this.scope.context.getNodeConstructor(r.type))(this, this.scope).parseNode(r);
    } else this[t] = new (this.scope.context.getNodeConstructor(s.type))(this, this.scope).parseNode(s);
    return Ot[_a2 = e.type] || (Ot[_a2] = function(t) {
      return Object.keys(t).filter((s) => typeof t[s] == "object" && s.charCodeAt(0) !== 95);
    }(e)), this.initialise(), this;
  }
  removeAnnotations(e) {
    if (this.annotations) for (const t of this.annotations) e.remove(t.start, t.end);
  }
  render(e, t) {
    for (const s of Ot[this.type]) {
      const i = this[s];
      if (i !== null) if (Array.isArray(i)) for (const r of i) r == null ? void 0 : r.render(e, t);
      else i.render(e, t);
    }
  }
  setAssignedValue(e) {
    this.assignmentInteraction = { args: [null, e], type: 1 };
  }
  shouldBeIncluded(e) {
    return this.included || !e.brokenFlow && this.hasEffects(Cn());
  }
  applyDeoptimizations() {
    this.deoptimized = true;
    for (const e of Ot[this.type]) {
      const t = this[e];
      if (t !== null) if (Array.isArray(t)) for (const s of t) s == null ? void 0 : s.deoptimizePath(U);
      else t.deoptimizePath(U);
    }
    this.scope.context.requestTreeshakingPass();
  }
}
function Te() {
  this.included = true, this.deoptimized || this.applyDeoptimizations();
}
function ge() {
  this.included = true;
}
function le() {
  this.deoptimized = true;
}
function nd(n) {
  return n instanceof z && n.type === Hr;
}
function sd(n) {
  return n instanceof z && n.type === "FunctionExpression";
}
function id(n) {
  return n instanceof z && n.type === ps;
}
function rd(n) {
  return n instanceof z && n.type === "MemberExpression";
}
function Sr(n) {
  return n instanceof z && n.type === "ImportExpression";
}
function od(n) {
  return n instanceof z && n.type === Wr;
}
function ms(n, e = null) {
  return Object.create(e, n);
}
const xt = new class extends Ye {
  getLiteralValueAtPath(n) {
    return n.length > 0 ? oe : void 0;
  }
}(), Bt = { value: { hasEffectsWhenCalled: null, returns: se } }, Yr = new class extends Ye {
  getReturnExpressionWhenCalledAtPath(n) {
    return n.length === 1 ? ys($r, n[0]) : De;
  }
  hasEffectsOnInteractionAtPath(n, e, t) {
    return e.type === 0 ? n.length > 1 : e.type !== 2 || n.length !== 1 || gs($r, n[0], e, t);
  }
}(), It = { value: { hasEffectsWhenCalled: null, returns: Yr } }, Dn = new class extends Ye {
  getReturnExpressionWhenCalledAtPath(n) {
    return n.length === 1 ? ys(vr, n[0]) : De;
  }
  hasEffectsOnInteractionAtPath(n, e, t) {
    return e.type === 0 ? n.length > 1 : e.type !== 2 || n.length !== 1 || gs(vr, n[0], e, t);
  }
}(), dn = { value: { hasEffectsWhenCalled: null, returns: Dn } }, Zr = new class extends Ye {
  getReturnExpressionWhenCalledAtPath(n) {
    return n.length === 1 ? ys(ts, n[0]) : De;
  }
  hasEffectsOnInteractionAtPath(n, e, t) {
    return e.type === 0 ? n.length > 1 : e.type !== 2 || n.length !== 1 || gs(ts, n[0], e, t);
  }
}(), ae = { value: { hasEffectsWhenCalled: null, returns: Zr } }, na = { value: { hasEffectsWhenCalled({ args: n }, e) {
  const t = n[2];
  return n.length < 3 || typeof t.getLiteralValueAtPath(G, xe, { deoptimizeCache() {
  } }) == "symbol" && t.hasEffectsOnInteractionAtPath(G, hs, e);
}, returns: Zr } }, Oi = ms({ hasOwnProperty: It, isPrototypeOf: It, propertyIsEnumerable: It, toLocaleString: ae, toString: ae, valueOf: Bt }), $r = ms({ valueOf: It }, Oi), vr = ms({ toExponential: ae, toFixed: ae, toLocaleString: ae, toPrecision: ae, valueOf: dn }, Oi), ad = ms({ exec: Bt, test: It }, Oi), ts = ms({ anchor: ae, at: Bt, big: ae, blink: ae, bold: ae, charAt: ae, charCodeAt: dn, codePointAt: Bt, concat: ae, endsWith: It, fixed: ae, fontcolor: ae, fontsize: ae, includes: It, indexOf: dn, italics: ae, lastIndexOf: dn, link: ae, localeCompare: dn, match: Bt, matchAll: Bt, normalize: ae, padEnd: ae, padStart: ae, repeat: ae, replace: na, replaceAll: na, search: dn, slice: ae, small: ae, split: Bt, startsWith: It, strike: ae, sub: ae, substr: ae, substring: ae, sup: ae, toLocaleLowerCase: ae, toLocaleUpperCase: ae, toLowerCase: ae, toString: ae, toUpperCase: ae, trim: ae, trimEnd: ae, trimLeft: ae, trimRight: ae, trimStart: ae, valueOf: ae }, Oi);
function gs(n, e, t, s) {
  var _a2, _b;
  return typeof e != "string" || !n[e] || ((_b = (_a2 = n[e]).hasEffectsWhenCalled) == null ? void 0 : _b.call(_a2, t, s)) || false;
}
function ys(n, e) {
  return typeof e == "string" && n[e] ? [n[e].returns, false] : De;
}
class We extends Ye {
  constructor(e) {
    super(), this.description = e;
  }
  deoptimizeArgumentsOnInteractionAtPath({ args: e, type: t }, s) {
    var _a2;
    if (t === 2 && s.length === 0 && (this.description.mutatesSelfAsArray && ((_a2 = e[0]) == null ? void 0 : _a2.deoptimizePath(br)), this.description.mutatesArgs)) for (let i = 1; i < e.length; i++) e[i].deoptimizePath(U);
  }
  getReturnExpressionWhenCalledAtPath(e, { args: t }) {
    return e.length > 0 ? De : [this.description.returnsPrimitive || (this.description.returns === "self" ? t[0] || se : this.description.returns()), false];
  }
  hasEffectsOnInteractionAtPath(e, { args: t, type: s }, i) {
    var _a2, _b;
    if (e.length > (s === 0 ? 1 : 0)) return true;
    if (s === 2) {
      if (this.description.mutatesSelfAsArray === true && ((_a2 = t[0]) == null ? void 0 : _a2.hasEffectsOnInteractionAtPath(br, Gr, i))) return true;
      if (this.description.callsArgs) {
        for (const r of this.description.callsArgs) if ((_b = t[r + 1]) == null ? void 0 : _b.hasEffectsOnInteractionAtPath(G, hs, i)) return true;
      }
    }
    return false;
  }
}
const _s = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: false, returns: null, returnsPrimitive: Yr })], jn = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: false, returns: null, returnsPrimitive: Zr })], sa = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: false, returns: null, returnsPrimitive: Dn })], tc = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: false, returns: null, returnsPrimitive: se })], Bn = /^\d+$/;
class Je extends Ye {
  get hasLostTrack() {
    return ue(this.flags, 2048);
  }
  set hasLostTrack(e) {
    this.flags = de(this.flags, 2048, e);
  }
  get hasUnknownDeoptimizedInteger() {
    return ue(this.flags, 4096);
  }
  set hasUnknownDeoptimizedInteger(e) {
    this.flags = de(this.flags, 4096, e);
  }
  get hasUnknownDeoptimizedProperty() {
    return ue(this.flags, 8192);
  }
  set hasUnknownDeoptimizedProperty(e) {
    this.flags = de(this.flags, 8192, e);
  }
  constructor(e, t, s = false) {
    if (super(), this.prototypeExpression = t, this.immutable = s, this.additionalExpressionsToBeDeoptimized = /* @__PURE__ */ new Set(), this.allProperties = [], this.deoptimizedPaths = /* @__PURE__ */ Object.create(null), this.expressionsToBeDeoptimizedByKey = /* @__PURE__ */ Object.create(null), this.gettersByKey = /* @__PURE__ */ Object.create(null), this.propertiesAndGettersByKey = /* @__PURE__ */ Object.create(null), this.propertiesAndSettersByKey = /* @__PURE__ */ Object.create(null), this.settersByKey = /* @__PURE__ */ Object.create(null), this.unknownIntegerProps = [], this.unmatchableGetters = [], this.unmatchablePropertiesAndGetters = [], this.unmatchablePropertiesAndSetters = [], this.unmatchableSetters = [], Array.isArray(e)) this.buildPropertyMaps(e);
    else {
      this.propertiesAndGettersByKey = this.propertiesAndSettersByKey = e;
      for (const i of Object.values(e)) this.allProperties.push(...i);
    }
  }
  deoptimizeAllProperties(e) {
    var _a2;
    const t = this.hasLostTrack || this.hasUnknownDeoptimizedProperty;
    if (e ? this.hasUnknownDeoptimizedProperty = true : this.hasLostTrack = true, !t) {
      for (const s of [...Object.values(this.propertiesAndGettersByKey), ...Object.values(this.settersByKey)]) for (const i of s) i.deoptimizePath(U);
      (_a2 = this.prototypeExpression) == null ? void 0 : _a2.deoptimizePath([ne, ne]), this.deoptimizeCachedEntities();
    }
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    var _a2;
    const [i, ...r] = t, { args: o, type: a } = e;
    if (this.hasLostTrack || (a === 2 || t.length > 1) && (this.hasUnknownDeoptimizedProperty || typeof i == "string" && this.deoptimizedPaths[i])) return void Rt(e);
    const [l, c, d] = a === 2 || t.length > 1 ? [this.propertiesAndGettersByKey, this.propertiesAndGettersByKey, this.unmatchablePropertiesAndGetters] : a === 0 ? [this.propertiesAndGettersByKey, this.gettersByKey, this.unmatchableGetters] : [this.propertiesAndSettersByKey, this.settersByKey, this.unmatchableSetters];
    if (typeof i == "string") {
      if (l[i]) {
        const p = c[i];
        if (p) for (const h of p) h.deoptimizeArgumentsOnInteractionAtPath(e, r, s);
        if (!this.immutable) for (const h of o) h && this.additionalExpressionsToBeDeoptimized.add(h);
        return;
      }
      for (const p of d) p.deoptimizeArgumentsOnInteractionAtPath(e, r, s);
      if (Bn.test(i)) for (const p of this.unknownIntegerProps) p.deoptimizeArgumentsOnInteractionAtPath(e, r, s);
    } else {
      for (const p of [...Object.values(c), d]) for (const h of p) h.deoptimizeArgumentsOnInteractionAtPath(e, r, s);
      for (const p of this.unknownIntegerProps) p.deoptimizeArgumentsOnInteractionAtPath(e, r, s);
    }
    if (!this.immutable) for (const p of o) p && this.additionalExpressionsToBeDeoptimized.add(p);
    (_a2 = this.prototypeExpression) == null ? void 0 : _a2.deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizeIntegerProperties() {
    if (!(this.hasLostTrack || this.hasUnknownDeoptimizedProperty || this.hasUnknownDeoptimizedInteger)) {
      this.hasUnknownDeoptimizedInteger = true;
      for (const [e, t] of Object.entries(this.propertiesAndGettersByKey)) if (Bn.test(e)) for (const s of t) s.deoptimizePath(U);
      this.deoptimizeCachedIntegerEntities();
    }
  }
  deoptimizePath(e) {
    var _a2;
    if (this.hasLostTrack || this.immutable) return;
    const t = e[0];
    if (e.length === 1) {
      if (t === An) return this.deoptimizeIntegerProperties();
      if (typeof t != "string") return this.deoptimizeAllProperties(t === Gs);
      if (!this.deoptimizedPaths[t]) {
        this.deoptimizedPaths[t] = true;
        const i = this.expressionsToBeDeoptimizedByKey[t];
        if (i) for (const r of i) r.deoptimizeCache();
      }
    }
    const s = e.length === 1 ? U : e.slice(1);
    for (const i of typeof t == "string" ? [...this.propertiesAndGettersByKey[t] || this.unmatchablePropertiesAndGetters, ...this.settersByKey[t] || this.unmatchableSetters] : this.allProperties) i.deoptimizePath(s);
    (_a2 = this.prototypeExpression) == null ? void 0 : _a2.deoptimizePath(e.length === 1 ? [e[0], ne] : e);
  }
  getLiteralValueAtPath(e, t, s) {
    if (e.length === 0) return oe;
    const i = e[0], r = this.getMemberExpressionAndTrackDeopt(i, s);
    return r ? r.getLiteralValueAtPath(e.slice(1), t, s) : this.prototypeExpression ? this.prototypeExpression.getLiteralValueAtPath(e, t, s) : e.length !== 1 ? oe : void 0;
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    if (e.length === 0) return De;
    const [r, ...o] = e, a = this.getMemberExpressionAndTrackDeopt(r, i);
    return a ? a.getReturnExpressionWhenCalledAtPath(o, t, s, i) : this.prototypeExpression ? this.prototypeExpression.getReturnExpressionWhenCalledAtPath(e, t, s, i) : De;
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    const [i, ...r] = e;
    if (r.length > 0 || t.type === 2) {
      const c = this.getMemberExpression(i);
      return c ? c.hasEffectsOnInteractionAtPath(r, t, s) : !this.prototypeExpression || this.prototypeExpression.hasEffectsOnInteractionAtPath(e, t, s);
    }
    if (i === Gs) return false;
    if (this.hasLostTrack) return true;
    const [o, a, l] = t.type === 0 ? [this.propertiesAndGettersByKey, this.gettersByKey, this.unmatchableGetters] : [this.propertiesAndSettersByKey, this.settersByKey, this.unmatchableSetters];
    if (typeof i == "string") {
      if (o[i]) {
        const c = a[i];
        if (c) {
          for (const d of c) if (d.hasEffectsOnInteractionAtPath(r, t, s)) return true;
        }
        return false;
      }
      for (const c of l) if (c.hasEffectsOnInteractionAtPath(r, t, s)) return true;
    } else for (const c of [...Object.values(a), l]) for (const d of c) if (d.hasEffectsOnInteractionAtPath(r, t, s)) return true;
    return !!this.prototypeExpression && this.prototypeExpression.hasEffectsOnInteractionAtPath(e, t, s);
  }
  include(e, t) {
    var _a2;
    this.included = true;
    for (const s of this.allProperties) (t || s.shouldBeIncluded(e)) && s.include(e, t);
    (_a2 = this.prototypeExpression) == null ? void 0 : _a2.include(e, t);
  }
  includePath(e, t) {
    var _a2;
    if (this.included = true, e.length === 0) return;
    const [s, ...i] = e, [r, o] = typeof s == "string" ? [/* @__PURE__ */ new Set([...this.propertiesAndGettersByKey[s] || this.unmatchablePropertiesAndGetters, ...this.propertiesAndSettersByKey[s] || this.unmatchablePropertiesAndSetters]), i] : [this.allProperties, U];
    for (const a of r) a.includePath(o, t);
    (_a2 = this.prototypeExpression) == null ? void 0 : _a2.includePath(e, t);
  }
  buildPropertyMaps(e) {
    const { allProperties: t, propertiesAndGettersByKey: s, propertiesAndSettersByKey: i, settersByKey: r, gettersByKey: o, unknownIntegerProps: a, unmatchablePropertiesAndGetters: l, unmatchablePropertiesAndSetters: c, unmatchableGetters: d, unmatchableSetters: p } = this;
    for (let h = e.length - 1; h >= 0; h--) {
      const { key: f, kind: E, property: g } = e[h];
      if (t.push(g), typeof f == "string") E === "set" ? i[f] || (i[f] = [g, ...c], r[f] = [g, ...p]) : E === "get" ? s[f] || (s[f] = [g, ...l], o[f] = [g, ...d]) : (i[f] || (i[f] = [g, ...c]), s[f] || (s[f] = [g, ...l]));
      else {
        if (f === An) {
          a.push(g);
          continue;
        }
        E === "set" && p.push(g), E === "get" && d.push(g), E !== "get" && c.push(g), E !== "set" && l.push(g);
      }
    }
  }
  deoptimizeCachedEntities() {
    for (const e of Object.values(this.expressionsToBeDeoptimizedByKey)) for (const t of e) t.deoptimizeCache();
    for (const e of this.additionalExpressionsToBeDeoptimized) e.deoptimizePath(U);
  }
  deoptimizeCachedIntegerEntities() {
    for (const [e, t] of Object.entries(this.expressionsToBeDeoptimizedByKey)) if (Bn.test(e)) for (const s of t) s.deoptimizeCache();
    for (const e of this.additionalExpressionsToBeDeoptimized) e.deoptimizePath(br);
  }
  getMemberExpression(e) {
    if (this.hasLostTrack || this.hasUnknownDeoptimizedProperty || typeof e != "string" || this.hasUnknownDeoptimizedInteger && Bn.test(e) || this.deoptimizedPaths[e]) return se;
    const t = this.propertiesAndGettersByKey[e];
    return (t == null ? void 0 : t.length) === 1 ? t[0] : t || this.unmatchablePropertiesAndGetters.length > 0 || this.unknownIntegerProps.length > 0 && Bn.test(e) ? se : null;
  }
  getMemberExpressionAndTrackDeopt(e, t) {
    if (typeof e != "string") return se;
    const s = this.getMemberExpression(e);
    return s !== se && !this.immutable && (this.expressionsToBeDeoptimizedByKey[e] = this.expressionsToBeDeoptimizedByKey[e] || []).push(t), s;
  }
}
const ia = (n) => typeof n == "string" && /^\d+$/.test(n), ld = new class extends Ye {
  deoptimizeArgumentsOnInteractionAtPath(n, e) {
    n.type !== 2 || e.length !== 1 || ia(e[0]) || Rt(n);
  }
  getLiteralValueAtPath(n) {
    return n.length === 1 && ia(n[0]) ? void 0 : oe;
  }
  hasEffectsOnInteractionAtPath(n, { type: e }) {
    return n.length > 1 || e === 2;
  }
}(), Nt = new Je({ __proto__: null, hasOwnProperty: _s, isPrototypeOf: _s, propertyIsEnumerable: _s, toLocaleString: jn, toString: jn, valueOf: tc }, ld, true), Qr = [{ key: An, kind: "init", property: se }, { key: "length", kind: "init", property: Dn }], ra = [new We({ callsArgs: [0], mutatesArgs: false, mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: Yr })], oa = [new We({ callsArgs: [0], mutatesArgs: false, mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: Dn })], cd = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: true, returns: () => new Je(Qr, Li), returnsPrimitive: null })], Ss = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: "deopt-only", returns: () => new Je(Qr, Li), returnsPrimitive: null })], Ki = [new We({ callsArgs: [0], mutatesArgs: false, mutatesSelfAsArray: "deopt-only", returns: () => new Je(Qr, Li), returnsPrimitive: null })], aa = [new We({ callsArgs: null, mutatesArgs: true, mutatesSelfAsArray: true, returns: null, returnsPrimitive: Dn })], la = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: true, returns: null, returnsPrimitive: se })], ca = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: se })], zn = [new We({ callsArgs: [0], mutatesArgs: false, mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: se })], Xi = [new We({ callsArgs: null, mutatesArgs: false, mutatesSelfAsArray: true, returns: "self", returnsPrimitive: null })], ud = [new We({ callsArgs: [0], mutatesArgs: false, mutatesSelfAsArray: true, returns: "self", returnsPrimitive: null })], Li = new Je({ __proto__: null, at: ca, concat: Ss, copyWithin: Xi, entries: Ss, every: ra, fill: Xi, filter: Ki, find: zn, findIndex: oa, findLast: zn, findLastIndex: oa, flat: Ss, flatMap: Ki, forEach: zn, includes: _s, indexOf: sa, join: jn, keys: tc, lastIndexOf: sa, map: Ki, pop: la, push: aa, reduce: zn, reduceRight: zn, reverse: Xi, shift: la, slice: Ss, some: ra, sort: ud, splice: cd, toLocaleString: jn, toString: jn, unshift: aa, values: ca }, Nt, true);
class Qt extends z {
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    t.length > 0 && this.argument.deoptimizeArgumentsOnInteractionAtPath(e, U, s);
  }
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    const { propertyReadSideEffects: t } = this.scope.context.options.treeshake;
    return this.argument.hasEffects(e) || t && (t === "always" || this.argument.hasEffectsOnInteractionAtPath(U, Zt, e));
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.argument.includePath(U, e);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.argument.deoptimizePath([ne, ne]), this.scope.context.requestTreeshakingPass();
  }
}
class eo extends z {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.getObjectEntity().deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizePath(e) {
    this.getObjectEntity().deoptimizePath(e);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getObjectEntity().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return this.getObjectEntity().hasEffectsOnInteractionAtPath(e, t, s);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations();
    for (const t of this.elements) t && (t == null ? void 0 : t.includePath(U, e));
  }
  applyDeoptimizations() {
    this.deoptimized = true;
    let e = false;
    for (let t = 0; t < this.elements.length; t++) {
      const s = this.elements[t];
      s && (e || s instanceof Qt) && (e = true, s.deoptimizePath(U));
    }
    this.scope.context.requestTreeshakingPass();
  }
  getObjectEntity() {
    if (this.objectEntity !== null) return this.objectEntity;
    const e = [{ key: "length", kind: "init", property: Dn }];
    let t = false;
    for (let s = 0; s < this.elements.length; s++) {
      const i = this.elements[s];
      t || i instanceof Qt ? i && (t = true, e.unshift({ key: An, kind: "init", property: i })) : i ? e.push({ key: String(s), kind: "init", property: i }) : e.push({ key: String(s), kind: "init", property: xt });
    }
    return this.objectEntity = new Je(e, Li);
  }
}
const Se = Symbol("Value Properties"), en = () => oe, nc = () => false, Pr = () => true, ot = { deoptimizeArgumentsOnCall: it, getLiteralValue: en, hasEffectsWhenCalled: nc }, yt = { deoptimizeArgumentsOnCall: it, getLiteralValue: en, hasEffectsWhenCalled: Pr }, dd = { deoptimizeArgumentsOnCall: it, getLiteralValue: en, hasEffectsWhenCalled: ({ args: n }) => n.length > 1 && !(n[1] instanceof eo) }, hd = { deoptimizeArgumentsOnCall: it, getLiteralValue: en, hasEffectsWhenCalled({ args: n }, e) {
  const [t, s] = n;
  return !(s instanceof Ye) || s.hasEffectsOnInteractionAtPath(U, Zt, e);
} }, k = { __proto__: null, [Se]: yt }, H = { __proto__: null, [Se]: ot }, ua = { __proto__: null, [Se]: hd }, Ji = { __proto__: null, [Se]: { deoptimizeArgumentsOnCall({ args: [, n] }) {
  n == null ? void 0 : n.deoptimizePath(U);
}, getLiteralValue: en, hasEffectsWhenCalled: ({ args: n }, e) => n.length <= 1 || n[1].hasEffectsOnInteractionAtPath(Ou, Gr, e) } }, u = { __proto__: null, [Se]: yt, prototype: k }, tt = { __proto__: null, [Se]: ot, prototype: k }, Fn = { __proto__: null, [Se]: dd, prototype: k }, mt = { __proto__: null, [Se]: ot, from: k, of: H, prototype: k }, gt = { __proto__: null, [Se]: ot, supportedLocalesOf: tt }, wr = { global: k, globalThis: k, self: k, window: k, __proto__: null, [Se]: yt, Array: { __proto__: null, [Se]: yt, from: k, isArray: H, of: H, prototype: k }, ArrayBuffer: { __proto__: null, [Se]: ot, isView: H, prototype: k }, AggregateError: Fn, Atomics: k, BigInt: u, BigInt64Array: u, BigUint64Array: u, Boolean: tt, constructor: u, DataView: tt, Date: { __proto__: null, [Se]: ot, now: H, parse: H, prototype: k, UTC: H }, decodeURI: H, decodeURIComponent: H, encodeURI: H, encodeURIComponent: H, Error: tt, escape: H, eval: k, EvalError: tt, FinalizationRegistry: u, Float32Array: mt, Float64Array: mt, Function: u, hasOwnProperty: k, Infinity: k, Int16Array: mt, Int32Array: mt, Int8Array: mt, isFinite: H, isNaN: H, isPrototypeOf: k, JSON: k, Map: Fn, Math: { __proto__: null, [Se]: yt, abs: H, acos: H, acosh: H, asin: H, asinh: H, atan: H, atan2: H, atanh: H, cbrt: H, ceil: H, clz32: H, cos: H, cosh: H, exp: H, expm1: H, floor: H, fround: H, hypot: H, imul: H, log: H, log10: H, log1p: H, log2: H, max: H, min: H, pow: H, random: H, round: H, sign: H, sin: H, sinh: H, sqrt: H, tan: H, tanh: H, trunc: H }, NaN: k, Number: { __proto__: null, [Se]: ot, isFinite: H, isInteger: H, isNaN: H, isSafeInteger: H, parseFloat: H, parseInt: H, prototype: k }, Object: { __proto__: null, [Se]: ot, create: H, defineProperty: Ji, defineProperties: Ji, freeze: Ji, getOwnPropertyDescriptor: H, getOwnPropertyDescriptors: H, getOwnPropertyNames: H, getOwnPropertySymbols: H, getPrototypeOf: H, hasOwn: H, is: H, isExtensible: H, isFrozen: H, isSealed: H, keys: H, fromEntries: k, entries: ua, values: ua, prototype: k }, parseFloat: H, parseInt: H, Promise: { __proto__: null, [Se]: yt, all: k, allSettled: k, any: k, prototype: k, race: k, reject: k, resolve: k }, propertyIsEnumerable: k, Proxy: { __proto__: null, [Se]: { deoptimizeArgumentsOnCall: ({ args: [, n, e] }) => {
  if ((t = e) instanceof z && t.type === "ObjectExpression" && !e.properties.some((i) => !function(r) {
    return r instanceof z && r.type === Rl;
  }(i))) {
    for (const i of e.properties) i.deoptimizeArgumentsOnInteractionAtPath({ args: [null, n], type: 2, withNew: false }, G, xe);
    return;
  }
  var t;
  n.deoptimizePath(U);
}, getLiteralValue: en, hasEffectsWhenCalled: Pr } }, RangeError: tt, ReferenceError: tt, Reflect: k, RegExp: tt, Set: Fn, SharedArrayBuffer: u, String: { __proto__: null, [Se]: ot, fromCharCode: H, fromCodePoint: H, prototype: k, raw: H }, Symbol: { __proto__: null, [Se]: ot, for: H, keyFor: H, prototype: k, toStringTag: { __proto__: null, [Se]: { deoptimizeArgumentsOnCall: it, getLiteralValue: () => jr, hasEffectsWhenCalled: Pr } } }, SyntaxError: tt, toLocaleString: k, toString: k, TypeError: tt, Uint16Array: mt, Uint32Array: mt, Uint8Array: mt, Uint8ClampedArray: mt, unescape: H, URIError: tt, valueOf: k, WeakMap: Fn, WeakRef: u, WeakSet: Fn, clearInterval: u, clearTimeout: u, console: { __proto__: null, [Se]: yt, assert: u, clear: u, count: u, countReset: u, debug: u, dir: u, dirxml: u, error: u, exception: u, group: u, groupCollapsed: u, groupEnd: u, info: u, log: u, table: u, time: u, timeEnd: u, timeLog: u, trace: u, warn: u }, Intl: { __proto__: null, [Se]: yt, Collator: gt, DateTimeFormat: gt, DisplayNames: gt, ListFormat: gt, Locale: gt, NumberFormat: gt, PluralRules: gt, RelativeTimeFormat: gt, Segmenter: gt }, setInterval: u, setTimeout: u, TextDecoder: u, TextEncoder: u, URL: { __proto__: null, [Se]: yt, prototype: k, canParse: H }, URLSearchParams: u, AbortController: u, AbortSignal: u, addEventListener: k, alert: k, AnalyserNode: u, Animation: u, AnimationEvent: u, applicationCache: k, ApplicationCache: u, ApplicationCacheErrorEvent: u, atob: k, Attr: u, Audio: u, AudioBuffer: u, AudioBufferSourceNode: u, AudioContext: u, AudioDestinationNode: u, AudioListener: u, AudioNode: u, AudioParam: u, AudioProcessingEvent: u, AudioScheduledSourceNode: u, AudioWorkletNode: u, BarProp: u, BaseAudioContext: u, BatteryManager: u, BeforeUnloadEvent: u, BiquadFilterNode: u, Blob: u, BlobEvent: u, blur: k, BroadcastChannel: u, btoa: k, ByteLengthQueuingStrategy: u, Cache: u, caches: k, CacheStorage: u, cancelAnimationFrame: k, cancelIdleCallback: k, CanvasCaptureMediaStreamTrack: u, CanvasGradient: u, CanvasPattern: u, CanvasRenderingContext2D: u, ChannelMergerNode: u, ChannelSplitterNode: u, CharacterData: u, clientInformation: k, ClipboardEvent: u, close: k, closed: k, CloseEvent: u, Comment: u, CompositionEvent: u, confirm: k, ConstantSourceNode: u, ConvolverNode: u, CountQueuingStrategy: u, createImageBitmap: k, Credential: u, CredentialsContainer: u, crypto: k, Crypto: u, CryptoKey: u, CSS: u, CSSConditionRule: u, CSSFontFaceRule: u, CSSGroupingRule: u, CSSImportRule: u, CSSKeyframeRule: u, CSSKeyframesRule: u, CSSMediaRule: u, CSSNamespaceRule: u, CSSPageRule: u, CSSRule: u, CSSRuleList: u, CSSStyleDeclaration: u, CSSStyleRule: u, CSSStyleSheet: u, CSSSupportsRule: u, CustomElementRegistry: u, customElements: k, CustomEvent: { __proto__: null, [Se]: { deoptimizeArgumentsOnCall({ args: n }) {
  var _a2;
  (_a2 = n[2]) == null ? void 0 : _a2.deoptimizePath(["detail"]);
}, getLiteralValue: en, hasEffectsWhenCalled: nc }, prototype: k }, DataTransfer: u, DataTransferItem: u, DataTransferItemList: u, defaultstatus: k, defaultStatus: k, DelayNode: u, DeviceMotionEvent: u, DeviceOrientationEvent: u, devicePixelRatio: k, dispatchEvent: k, document: k, Document: u, DocumentFragment: u, DocumentType: u, DOMError: u, DOMException: u, DOMImplementation: u, DOMMatrix: u, DOMMatrixReadOnly: u, DOMParser: u, DOMPoint: u, DOMPointReadOnly: u, DOMQuad: u, DOMRect: u, DOMRectReadOnly: u, DOMStringList: u, DOMStringMap: u, DOMTokenList: u, DragEvent: u, DynamicsCompressorNode: u, Element: u, ErrorEvent: u, Event: u, EventSource: u, EventTarget: u, external: k, fetch: k, File: u, FileList: u, FileReader: u, find: k, focus: k, FocusEvent: u, FontFace: u, FontFaceSetLoadEvent: u, FormData: u, frames: k, GainNode: u, Gamepad: u, GamepadButton: u, GamepadEvent: u, getComputedStyle: k, getSelection: k, HashChangeEvent: u, Headers: u, history: k, History: u, HTMLAllCollection: u, HTMLAnchorElement: u, HTMLAreaElement: u, HTMLAudioElement: u, HTMLBaseElement: u, HTMLBodyElement: u, HTMLBRElement: u, HTMLButtonElement: u, HTMLCanvasElement: u, HTMLCollection: u, HTMLContentElement: u, HTMLDataElement: u, HTMLDataListElement: u, HTMLDetailsElement: u, HTMLDialogElement: u, HTMLDirectoryElement: u, HTMLDivElement: u, HTMLDListElement: u, HTMLDocument: u, HTMLElement: u, HTMLEmbedElement: u, HTMLFieldSetElement: u, HTMLFontElement: u, HTMLFormControlsCollection: u, HTMLFormElement: u, HTMLFrameElement: u, HTMLFrameSetElement: u, HTMLHeadElement: u, HTMLHeadingElement: u, HTMLHRElement: u, HTMLHtmlElement: u, HTMLIFrameElement: u, HTMLImageElement: u, HTMLInputElement: u, HTMLLabelElement: u, HTMLLegendElement: u, HTMLLIElement: u, HTMLLinkElement: u, HTMLMapElement: u, HTMLMarqueeElement: u, HTMLMediaElement: u, HTMLMenuElement: u, HTMLMetaElement: u, HTMLMeterElement: u, HTMLModElement: u, HTMLObjectElement: u, HTMLOListElement: u, HTMLOptGroupElement: u, HTMLOptionElement: u, HTMLOptionsCollection: u, HTMLOutputElement: u, HTMLParagraphElement: u, HTMLParamElement: u, HTMLPictureElement: u, HTMLPreElement: u, HTMLProgressElement: u, HTMLQuoteElement: u, HTMLScriptElement: u, HTMLSelectElement: u, HTMLShadowElement: u, HTMLSlotElement: u, HTMLSourceElement: u, HTMLSpanElement: u, HTMLStyleElement: u, HTMLTableCaptionElement: u, HTMLTableCellElement: u, HTMLTableColElement: u, HTMLTableElement: u, HTMLTableRowElement: u, HTMLTableSectionElement: u, HTMLTemplateElement: u, HTMLTextAreaElement: u, HTMLTimeElement: u, HTMLTitleElement: u, HTMLTrackElement: u, HTMLUListElement: u, HTMLUnknownElement: u, HTMLVideoElement: u, IDBCursor: u, IDBCursorWithValue: u, IDBDatabase: u, IDBFactory: u, IDBIndex: u, IDBKeyRange: u, IDBObjectStore: u, IDBOpenDBRequest: u, IDBRequest: u, IDBTransaction: u, IDBVersionChangeEvent: u, IdleDeadline: u, IIRFilterNode: u, Image: u, ImageBitmap: u, ImageBitmapRenderingContext: u, ImageCapture: u, ImageData: u, indexedDB: k, innerHeight: k, innerWidth: k, InputEvent: u, IntersectionObserver: u, IntersectionObserverEntry: u, isSecureContext: k, KeyboardEvent: u, KeyframeEffect: u, length: k, localStorage: k, location: k, Location: u, locationbar: k, matchMedia: k, MediaDeviceInfo: u, MediaDevices: u, MediaElementAudioSourceNode: u, MediaEncryptedEvent: u, MediaError: u, MediaKeyMessageEvent: u, MediaKeySession: u, MediaKeyStatusMap: u, MediaKeySystemAccess: u, MediaList: u, MediaQueryList: u, MediaQueryListEvent: u, MediaRecorder: u, MediaSettingsRange: u, MediaSource: u, MediaStream: u, MediaStreamAudioDestinationNode: u, MediaStreamAudioSourceNode: u, MediaStreamEvent: u, MediaStreamTrack: u, MediaStreamTrackEvent: u, menubar: k, MessageChannel: u, MessageEvent: u, MessagePort: u, MIDIAccess: u, MIDIConnectionEvent: u, MIDIInput: u, MIDIInputMap: u, MIDIMessageEvent: u, MIDIOutput: u, MIDIOutputMap: u, MIDIPort: u, MimeType: u, MimeTypeArray: u, MouseEvent: u, moveBy: k, moveTo: k, MutationEvent: u, MutationObserver: u, MutationRecord: u, name: k, NamedNodeMap: u, NavigationPreloadManager: u, navigator: k, Navigator: u, NetworkInformation: u, Node: u, NodeFilter: k, NodeIterator: u, NodeList: u, Notification: u, OfflineAudioCompletionEvent: u, OfflineAudioContext: u, offscreenBuffering: k, OffscreenCanvas: u, open: k, openDatabase: k, Option: u, origin: k, OscillatorNode: u, outerHeight: k, outerWidth: k, PageTransitionEvent: u, pageXOffset: k, pageYOffset: k, PannerNode: u, parent: k, Path2D: u, PaymentAddress: u, PaymentRequest: u, PaymentRequestUpdateEvent: u, PaymentResponse: u, performance: k, Performance: u, PerformanceEntry: u, PerformanceLongTaskTiming: u, PerformanceMark: u, PerformanceMeasure: u, PerformanceNavigation: u, PerformanceNavigationTiming: u, PerformanceObserver: u, PerformanceObserverEntryList: u, PerformancePaintTiming: u, PerformanceResourceTiming: u, PerformanceTiming: u, PeriodicWave: u, Permissions: u, PermissionStatus: u, personalbar: k, PhotoCapabilities: u, Plugin: u, PluginArray: u, PointerEvent: u, PopStateEvent: u, postMessage: k, Presentation: u, PresentationAvailability: u, PresentationConnection: u, PresentationConnectionAvailableEvent: u, PresentationConnectionCloseEvent: u, PresentationConnectionList: u, PresentationReceiver: u, PresentationRequest: u, print: k, ProcessingInstruction: u, ProgressEvent: u, PromiseRejectionEvent: u, prompt: k, PushManager: u, PushSubscription: u, PushSubscriptionOptions: u, queueMicrotask: k, RadioNodeList: u, Range: u, ReadableStream: u, RemotePlayback: u, removeEventListener: k, Request: u, requestAnimationFrame: k, requestIdleCallback: k, resizeBy: k, ResizeObserver: u, ResizeObserverEntry: u, resizeTo: k, Response: u, RTCCertificate: u, RTCDataChannel: u, RTCDataChannelEvent: u, RTCDtlsTransport: u, RTCIceCandidate: u, RTCIceTransport: u, RTCPeerConnection: u, RTCPeerConnectionIceEvent: u, RTCRtpReceiver: u, RTCRtpSender: u, RTCSctpTransport: u, RTCSessionDescription: u, RTCStatsReport: u, RTCTrackEvent: u, screen: k, Screen: u, screenLeft: k, ScreenOrientation: u, screenTop: k, screenX: k, screenY: k, ScriptProcessorNode: u, scroll: k, scrollbars: k, scrollBy: k, scrollTo: k, scrollX: k, scrollY: k, SecurityPolicyViolationEvent: u, Selection: u, ServiceWorker: u, ServiceWorkerContainer: u, ServiceWorkerRegistration: u, sessionStorage: k, ShadowRoot: u, SharedWorker: u, SourceBuffer: u, SourceBufferList: u, speechSynthesis: k, SpeechSynthesisEvent: u, SpeechSynthesisUtterance: u, StaticRange: u, status: k, statusbar: k, StereoPannerNode: u, stop: k, Storage: u, StorageEvent: u, StorageManager: u, styleMedia: k, StyleSheet: u, StyleSheetList: u, SubtleCrypto: u, SVGAElement: u, SVGAngle: u, SVGAnimatedAngle: u, SVGAnimatedBoolean: u, SVGAnimatedEnumeration: u, SVGAnimatedInteger: u, SVGAnimatedLength: u, SVGAnimatedLengthList: u, SVGAnimatedNumber: u, SVGAnimatedNumberList: u, SVGAnimatedPreserveAspectRatio: u, SVGAnimatedRect: u, SVGAnimatedString: u, SVGAnimatedTransformList: u, SVGAnimateElement: u, SVGAnimateMotionElement: u, SVGAnimateTransformElement: u, SVGAnimationElement: u, SVGCircleElement: u, SVGClipPathElement: u, SVGComponentTransferFunctionElement: u, SVGDefsElement: u, SVGDescElement: u, SVGDiscardElement: u, SVGElement: u, SVGEllipseElement: u, SVGFEBlendElement: u, SVGFEColorMatrixElement: u, SVGFEComponentTransferElement: u, SVGFECompositeElement: u, SVGFEConvolveMatrixElement: u, SVGFEDiffuseLightingElement: u, SVGFEDisplacementMapElement: u, SVGFEDistantLightElement: u, SVGFEDropShadowElement: u, SVGFEFloodElement: u, SVGFEFuncAElement: u, SVGFEFuncBElement: u, SVGFEFuncGElement: u, SVGFEFuncRElement: u, SVGFEGaussianBlurElement: u, SVGFEImageElement: u, SVGFEMergeElement: u, SVGFEMergeNodeElement: u, SVGFEMorphologyElement: u, SVGFEOffsetElement: u, SVGFEPointLightElement: u, SVGFESpecularLightingElement: u, SVGFESpotLightElement: u, SVGFETileElement: u, SVGFETurbulenceElement: u, SVGFilterElement: u, SVGForeignObjectElement: u, SVGGElement: u, SVGGeometryElement: u, SVGGradientElement: u, SVGGraphicsElement: u, SVGImageElement: u, SVGLength: u, SVGLengthList: u, SVGLinearGradientElement: u, SVGLineElement: u, SVGMarkerElement: u, SVGMaskElement: u, SVGMatrix: u, SVGMetadataElement: u, SVGMPathElement: u, SVGNumber: u, SVGNumberList: u, SVGPathElement: u, SVGPatternElement: u, SVGPoint: u, SVGPointList: u, SVGPolygonElement: u, SVGPolylineElement: u, SVGPreserveAspectRatio: u, SVGRadialGradientElement: u, SVGRect: u, SVGRectElement: u, SVGScriptElement: u, SVGSetElement: u, SVGStopElement: u, SVGStringList: u, SVGStyleElement: u, SVGSVGElement: u, SVGSwitchElement: u, SVGSymbolElement: u, SVGTextContentElement: u, SVGTextElement: u, SVGTextPathElement: u, SVGTextPositioningElement: u, SVGTitleElement: u, SVGTransform: u, SVGTransformList: u, SVGTSpanElement: u, SVGUnitTypes: u, SVGUseElement: u, SVGViewElement: u, TaskAttributionTiming: u, Text: u, TextEvent: u, TextMetrics: u, TextTrack: u, TextTrackCue: u, TextTrackCueList: u, TextTrackList: u, TimeRanges: u, toolbar: k, top: k, Touch: u, TouchEvent: u, TouchList: u, TrackEvent: u, TransitionEvent: u, TreeWalker: u, UIEvent: u, ValidityState: u, visualViewport: k, VisualViewport: u, VTTCue: u, WaveShaperNode: u, WebAssembly: k, WebGL2RenderingContext: u, WebGLActiveInfo: u, WebGLBuffer: u, WebGLContextEvent: u, WebGLFramebuffer: u, WebGLProgram: u, WebGLQuery: u, WebGLRenderbuffer: u, WebGLRenderingContext: u, WebGLSampler: u, WebGLShader: u, WebGLShaderPrecisionFormat: u, WebGLSync: u, WebGLTexture: u, WebGLTransformFeedback: u, WebGLUniformLocation: u, WebGLVertexArrayObject: u, WebSocket: u, WheelEvent: u, Window: u, Worker: u, WritableStream: u, XMLDocument: u, XMLHttpRequest: u, XMLHttpRequestEventTarget: u, XMLHttpRequestUpload: u, XMLSerializer: u, XPathEvaluator: u, XPathExpression: u, XPathResult: u, XSLTProcessor: u };
for (const n of ["window", "global", "self", "globalThis"]) wr[n] = wr;
function cn(n) {
  let e = wr;
  for (const t of n) if (typeof t != "string" || (e = e[t], !e)) return null;
  return e[Se];
}
class to extends sn {
  constructor(e) {
    super(e), this.markReassigned();
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    switch (e.type) {
      case 0:
      case 1:
        return void (cn([this.name, ...t].slice(0, -1)) || super.deoptimizeArgumentsOnInteractionAtPath(e, t, s));
      case 2: {
        const i = cn([this.name, ...t]);
        return void (i ? i.deoptimizeArgumentsOnCall(e) : super.deoptimizeArgumentsOnInteractionAtPath(e, t, s));
      }
    }
  }
  getLiteralValueAtPath(e, t, s) {
    const i = cn([this.name, ...e]);
    return i ? i.getLiteralValue() : oe;
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    switch (t.type) {
      case 0:
        return e.length === 0 ? this.name !== "undefined" && !cn([this.name]) : !cn([this.name, ...e].slice(0, -1));
      case 1:
        return true;
      case 2: {
        const i = cn([this.name, ...e]);
        return !i || i.hasEffectsWhenCalled(t, s);
      }
    }
  }
}
const da = (n, e) => {
  const { length: t } = n, { length: s } = e;
  return t === 0 ? e : s === 0 ? n : t + s > 6 ? [...n, ...e.slice(0, 5 - n.length), "UnknownKey"] : [...n, ...e];
};
class et extends sn {
  constructor(e, t, s, i, r, o) {
    super(e), this.init = s, this.initPath = i, this.kind = o, this.calledFromTryStatement = false, this.additionalInitializers = null, this.includedPathTracker = new _u(), this.expressionsToBeDeoptimized = [], this.declarations = t ? [t] : [], this.deoptimizationTracker = r.deoptimizationTracker, this.module = r.module;
  }
  addDeclaration(e, t) {
    this.declarations.push(e), this.markInitializersForDeoptimization().push(t);
  }
  consolidateInitializers() {
    if (this.additionalInitializers) for (const e of this.additionalInitializers) e.deoptimizePath(U);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.isReassigned || t.length + this.initPath.length > 6 ? Rt(e) : s.withTrackedEntityAtPath(t, this.init, () => {
      this.init.deoptimizeArgumentsOnInteractionAtPath(e, [...this.initPath, ...t], s);
    }, void 0);
  }
  deoptimizePath(e) {
    if (!this.isReassigned && !this.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(e, this)) if (e.length === 0) {
      this.markReassigned();
      const t = this.expressionsToBeDeoptimized;
      this.expressionsToBeDeoptimized = $e;
      for (const s of t) s.deoptimizeCache();
      this.init.deoptimizePath([...this.initPath, ne]);
    } else this.init.deoptimizePath(da(this.initPath, e));
  }
  getLiteralValueAtPath(e, t, s) {
    return this.isReassigned || e.length + this.initPath.length > 6 ? oe : t.withTrackedEntityAtPath(e, this.init, () => (this.expressionsToBeDeoptimized.push(s), this.init.getLiteralValueAtPath([...this.initPath, ...e], t, s)), oe);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.isReassigned || e.length + this.initPath.length > 6 ? De : s.withTrackedEntityAtPath(e, this.init, () => (this.expressionsToBeDeoptimized.push(i), this.init.getReturnExpressionWhenCalledAtPath([...this.initPath, ...e], t, s, i)), De);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    if (e.length + this.initPath.length > 6) return true;
    switch (t.type) {
      case 0:
        return !!this.isReassigned || !s.accessed.trackEntityAtPathAndGetIfTracked(e, this) && this.init.hasEffectsOnInteractionAtPath([...this.initPath, ...e], t, s);
      case 1:
        return !!this.included || e.length !== 0 && (!!this.isReassigned || !s.assigned.trackEntityAtPathAndGetIfTracked(e, this) && this.init.hasEffectsOnInteractionAtPath([...this.initPath, ...e], t, s));
      case 2:
        return !!this.isReassigned || !(t.withNew ? s.instantiated : s.called).trackEntityAtPathAndGetIfTracked(e, t.args, this) && this.init.hasEffectsOnInteractionAtPath([...this.initPath, ...e], t, s);
    }
  }
  includePath(e, t) {
    var _a2;
    if (!this.includedPathTracker.includePathAndGetIfIncluded(e)) {
      this.module.scope.context.requestTreeshakingPass(), this.included || this.module.scope.context.newlyIncludedVariableInits.add(this.init), super.includePath(e, t);
      for (const s of this.declarations) {
        s.included || s.include(t, false);
        let i = s.parent;
        for (; !i.included && (i.includeNode(t), i.type !== Hs); ) i = i.parent;
        this.kind === "parameter" && (nd(s.parent) || sd(s.parent)) && id(s.parent.parent) && rd(s.parent.parent.callee) && od(s.parent.parent.callee.property) && s.parent.parent.callee.property.name === "then" && Sr(s.parent.parent.callee.object) && s.parent.parent.callee.object.includePath(e, t);
      }
      e.length > 0 && (this.init.includePath(da(this.initPath, e), t), (_a2 = this.additionalInitializers) == null ? void 0 : _a2.forEach((s) => s.includePath(U, t)));
    }
  }
  includeCallArguments(e, t) {
    this.isReassigned || t.includedCallArguments.has(this.init) || this.initPath.length > 0 ? Ur(e, t) : (t.includedCallArguments.add(this.init), this.init.includeCallArguments(e, t), t.includedCallArguments.delete(this.init));
  }
  markCalledFromTryStatement() {
    this.calledFromTryStatement = true;
  }
  markInitializersForDeoptimization() {
    return this.additionalInitializers === null && (this.additionalInitializers = [this.init], this.init = se, this.markReassigned()), this.additionalInitializers;
  }
}
const pd = /* @__PURE__ */ new Set(["class", "const", "let", "var", "using", "await using"]);
class sc extends z {
  constructor() {
    super(...arguments), this.variable = null, this.isVariableReference = false;
  }
  get isTDZAccess() {
    return ue(this.flags, 4) ? ue(this.flags, 8) : null;
  }
  set isTDZAccess(e) {
    this.flags = de(this.flags, 4, true), this.flags = de(this.flags, 8, e);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.variable.deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizePath(e) {
    var _a2;
    e.length !== 0 || this.scope.contains(this.name) || this.disallowImportReassignment(), (_a2 = this.variable) == null ? void 0 : _a2.deoptimizePath(e);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getVariableRespectingTDZ().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    const [r, o] = this.getVariableRespectingTDZ().getReturnExpressionWhenCalledAtPath(e, t, s, i);
    return [r, o || this.isPureFunction(e)];
  }
  hasEffects(e) {
    return this.deoptimized || this.applyDeoptimizations(), !(!this.isPossibleTDZ() || this.variable.kind === "var") || this.scope.context.options.treeshake.unknownGlobalSideEffects && this.variable instanceof to && !this.isPureFunction(G) && this.variable.hasEffectsOnInteractionAtPath(G, Zt, e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    switch (t.type) {
      case 0:
        return this.variable !== null && !this.isPureFunction(e) && this.getVariableRespectingTDZ().hasEffectsOnInteractionAtPath(e, t, s);
      case 1:
        return (e.length > 0 ? this.getVariableRespectingTDZ() : this.variable).hasEffectsOnInteractionAtPath(e, t, s);
      case 2:
        return !this.isPureFunction(e) && this.getVariableRespectingTDZ().hasEffectsOnInteractionAtPath(e, t, s);
    }
  }
  include(e, t) {
    var _a2;
    this.included || this.includeNode(e), t && ((_a2 = this.variable) == null ? void 0 : _a2.includePath(U, e));
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.variable !== null && this.scope.context.includeVariableInModule(this.variable, G, e);
  }
  includePath(e, t) {
    var _a2;
    this.included ? e.length > 0 && ((_a2 = this.variable) == null ? void 0 : _a2.includePath(e, t)) : (this.included = true, this.deoptimized || this.applyDeoptimizations(), this.variable !== null && this.scope.context.includeVariableInModule(this.variable, e, t));
  }
  includeCallArguments(e, t) {
    this.variable.includeCallArguments(e, t);
  }
  isPossibleTDZ() {
    const e = this.isTDZAccess;
    if (e !== null) return e;
    if (!(this.variable instanceof et && this.variable.kind && pd.has(this.variable.kind) && this.variable.module.hasTreeShakingPassStarted)) return this.isTDZAccess = false;
    let t;
    return this.variable.declarations && this.variable.declarations.length === 1 && (t = this.variable.declarations[0]) && this.start < t.start && ha(this) === ha(t) ? this.isTDZAccess = true : this.variable.initReached ? this.isTDZAccess = false : this.isTDZAccess = true;
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.variable instanceof et && (this.variable.module.isExecuted || fn(this.variable.module), this.variable.consolidateInitializers(), this.scope.context.requestTreeshakingPass()), this.isVariableReference && (this.variable.addUsedPlace(this), this.scope.context.requestTreeshakingPass());
  }
  disallowImportReassignment() {
    return this.scope.context.error(ql(this.name, this.scope.context.module.id), this.start);
  }
  getVariableRespectingTDZ() {
    return this.isPossibleTDZ() ? se : this.variable;
  }
  isPureFunction(e) {
    let t = this.scope.context.manualPureFunctions[this.name];
    for (const s of e) {
      if (!t) return false;
      if (t[Ar]) return true;
      t = t[s];
    }
    return t == null ? void 0 : t[Ar];
  }
}
function ha(n) {
  for (; n && !/^Program|Function/.test(n.type); ) n = n.parent;
  return n;
}
class ic extends Ye {
  constructor(e, t) {
    super(), this.object = e, this.path = t;
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.object.deoptimizeArgumentsOnInteractionAtPath(e, [...this.path, ...t], s);
  }
  deoptimizePath(e) {
    this.object.deoptimizePath([...this.path, ...e]);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.object.getLiteralValueAtPath([...this.path, ...e], t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.object.getReturnExpressionWhenCalledAtPath([...this.path, ...e], t, s, i);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return this.object.hasEffectsOnInteractionAtPath([...this.path, ...e], t, s);
  }
}
class pe extends sc {
  constructor() {
    super(...arguments), this.variable = null;
  }
  get isDestructuringDeoptimized() {
    return ue(this.flags, 16777216);
  }
  set isDestructuringDeoptimized(e) {
    this.flags = de(this.flags, 16777216, e);
  }
  addExportedVariables(e, t) {
    t.has(this.variable) && e.push(this.variable);
  }
  bind() {
    !this.variable && Nl(this, this.parent) && (this.variable = this.scope.findVariable(this.name), this.variable.addReference(this), this.isVariableReference = true);
  }
  declare(e, t, s) {
    let i;
    const { treeshake: r } = this.scope.context.options;
    return e === "parameter" ? i = this.scope.addParameterDeclaration(this, t) : (i = this.scope.addDeclaration(this, this.scope.context, s, t, e), e === "var" && r && r.correctVarValueBeforeDeclaration && i.markInitializersForDeoptimization()), [this.variable = i];
  }
  deoptimizeAssignment(e, t) {
    this.deoptimizePath(G), t.deoptimizePath([...e, ne]);
  }
  hasEffectsWhenDestructuring(e, t, s) {
    return t.length > 0 && s.hasEffectsOnInteractionAtPath(t, Zt, e);
  }
  includeDestructuredIfNecessary(e, t, s) {
    t.length > 0 && !this.isDestructuringDeoptimized && (this.isDestructuringDeoptimized = true, s.deoptimizeArgumentsOnInteractionAtPath({ args: [new ic(s, t.slice(0, -1))], type: 0 }, t, xe));
    const { propertyReadSideEffects: i } = this.scope.context.options.treeshake;
    let r = this.included;
    return (r || (r = t.length > 0 && !e.brokenFlow && i && (i === "always" || s.hasEffectsOnInteractionAtPath(t, Zt, Cn())))) && (this.variable && !this.variable.included && this.scope.context.includeVariableInModule(this.variable, G, e), s.includePath(t, e)), !this.included && r && this.includeNode(e), this.included;
  }
  markDeclarationReached() {
    this.variable.initReached = true;
  }
  render(e, { snippets: { getPropertyAccess: t }, useOriginalName: s }, { renderedParentType: i, isCalleeOfRenderedParent: r, isShorthandProperty: o } = ze) {
    if (this.variable) {
      const a = this.variable.getName(t, s);
      a !== this.name && (e.overwrite(this.start, this.end, a, { contentOnly: true, storeName: true }), o && e.prependRight(this.start, `${this.name}: `)), a === "eval" && i === ps && r && e.appendRight(this.start, "0, ");
    }
  }
}
function Ys(n) {
  let e = "";
  do {
    const t = n % 64;
    n = n / 64 | 0, e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$"[t] + e;
  } while (n !== 0);
  return e;
}
function at(n, e, t) {
  let s = n, i = 1;
  for (; e.has(s) || Ci.has(s) || (t == null ? void 0 : t.has(s)); ) s = `${n}$${Ys(i++)}`;
  return e.add(s), s;
}
class rc {
  constructor() {
    this.children = [], this.variables = /* @__PURE__ */ new Map();
  }
  addDeclaration(e, t, s, i, r) {
    var _a2;
    const o = e.name, a = ((_a2 = this.hoistedVariables) == null ? void 0 : _a2.get(o)) || this.variables.get(o);
    if (a) {
      if (r === "var" && a.kind === "var") return a.addDeclaration(e, s), a;
      t.error(Rn(o), e.start);
    }
    const l = new et(e.name, e, s, i, t, r);
    return this.variables.set(o, l), l;
  }
  addHoistedVariable(e, t) {
    (this.hoistedVariables || (this.hoistedVariables = /* @__PURE__ */ new Map())).set(e, t);
  }
  contains(e) {
    return this.variables.has(e);
  }
  findVariable(e) {
    throw new Error("Internal Error: findVariable needs to be implemented by a subclass");
  }
}
class Xe extends rc {
  constructor(e, t) {
    super(), this.parent = e, this.context = t, this.accessedOutsideVariables = /* @__PURE__ */ new Map(), e.children.push(this);
  }
  addAccessedDynamicImport(e) {
    (this.accessedDynamicImports || (this.accessedDynamicImports = /* @__PURE__ */ new Set())).add(e), this.parent instanceof Xe && this.parent.addAccessedDynamicImport(e);
  }
  addAccessedGlobals(e, t) {
    const s = t.get(this) || /* @__PURE__ */ new Set();
    for (const i of e) s.add(i);
    t.set(this, s), this.parent instanceof Xe && this.parent.addAccessedGlobals(e, t);
  }
  addNamespaceMemberAccess(e, t) {
    this.accessedOutsideVariables.set(e, t), this.parent.addNamespaceMemberAccess(e, t);
  }
  addReturnExpression(e) {
    this.parent instanceof Xe && this.parent.addReturnExpression(e);
  }
  addUsedOutsideNames(e, t, s, i) {
    for (const o of this.accessedOutsideVariables.values()) o.included && (e.add(o.getBaseVariableName()), t === "system" && s.has(o) && e.add("exports"));
    const r = i.get(this);
    if (r) for (const o of r) e.add(o);
  }
  contains(e) {
    return this.variables.has(e) || this.parent.contains(e);
  }
  deconflict(e, t, s) {
    const i = /* @__PURE__ */ new Set();
    if (this.addUsedOutsideNames(i, e, t, s), this.accessedDynamicImports) for (const r of this.accessedDynamicImports) r.inlineNamespace && i.add(r.inlineNamespace.getBaseVariableName());
    for (const [r, o] of this.variables) (o.included || o.alwaysRendered) && o.setRenderNames(null, at(r, i, o.forbiddenNames));
    for (const r of this.children) r.deconflict(e, t, s);
  }
  findLexicalBoundary() {
    return this.parent.findLexicalBoundary();
  }
  findGlobal(e) {
    const t = this.parent.findVariable(e);
    return this.accessedOutsideVariables.set(e, t), t;
  }
  findVariable(e) {
    const t = this.variables.get(e) || this.accessedOutsideVariables.get(e);
    if (t) return t;
    const s = this.parent.findVariable(e);
    return this.accessedOutsideVariables.set(e, s), s;
  }
}
function no(n, e) {
  for (const t of n) if (t.hasEffects(e)) return true;
  return false;
}
class Zs extends z {
  constructor() {
    super(...arguments), this.accessedValue = null;
  }
  get computed() {
    return ue(this.flags, 1024);
  }
  set computed(e) {
    this.flags = de(this.flags, 1024, e);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    return e.type === 0 && this.kind === "get" && t.length === 0 || e.type === 1 && this.kind === "set" && t.length === 0 ? this.value.deoptimizeArgumentsOnInteractionAtPath({ args: e.args, type: 2, withNew: false }, G, s) : void this.getAccessedValue()[0].deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizeCache() {
  }
  deoptimizePath(e) {
    this.getAccessedValue()[0].deoptimizePath(e);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getAccessedValue()[0].getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getAccessedValue()[0].getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffects(e) {
    return this.key.hasEffects(e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return this.kind === "get" && t.type === 0 && e.length === 0 || this.kind === "set" && t.type === 1 ? this.value.hasEffectsOnInteractionAtPath(G, { args: t.args, type: 2, withNew: false }, s) : this.getAccessedValue()[0].hasEffectsOnInteractionAtPath(e, t, s);
  }
  getAccessedValue() {
    return this.accessedValue === null ? this.kind === "get" ? (this.accessedValue = De, this.accessedValue = this.value.getReturnExpressionWhenCalledAtPath(G, hs, xe, this)) : this.accessedValue = [this.value, false] : this.accessedValue;
  }
}
Zs.prototype.includeNode = ge, Zs.prototype.applyDeoptimizations = le;
class Qs extends Zs {
  hasEffects(e) {
    return super.hasEffects(e) || no(this.decorators, e);
  }
}
class rn extends Xe {
  constructor(e) {
    super(e, e.context);
  }
  addDeclaration(e, t, s, i, r) {
    var _a2;
    if (r === "var") {
      const o = e.name, a = ((_a2 = this.hoistedVariables) == null ? void 0 : _a2.get(o)) || this.variables.get(o);
      if (a) return a.kind === "var" || r === "var" && a.kind === "parameter" ? (a.addDeclaration(e, s), a) : t.error(Rn(o), e.start);
      const l = this.parent.addDeclaration(e, t, s, i, r);
      return l.markInitializersForDeoptimization(), this.addHoistedVariable(o, l), l;
    }
    return super.addDeclaration(e, t, s, i, r);
  }
}
class ei extends z {
  createScope(e) {
    this.scope = new rn(e);
  }
  hasEffects(e) {
    for (const t of this.body) if (t.hasEffects(e)) return true;
    return false;
  }
  include(e, t) {
    this.included = true;
    for (const s of this.body) (t || s.shouldBeIncluded(e)) && s.include(e, t);
  }
  render(e, t) {
    if (this.body.length > 0) {
      const s = Me(e.original.slice(this.start, this.end), "{") + 1;
      ds(this.body, e, this.start + s, this.end - 1, t);
    } else super.render(e, t);
  }
}
function pa(n) {
  return n.type === "StaticBlock";
}
ei.prototype.includeNode = ge, ei.prototype.applyDeoptimizations = le;
class so extends z {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  createScope(e) {
    this.scope = new Xe(e, e.context);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.getObjectEntity().deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizeCache() {
    this.getObjectEntity().deoptimizeAllProperties();
  }
  deoptimizePath(e) {
    this.getObjectEntity().deoptimizePath(e);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getObjectEntity().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffects(e) {
    var _a2, _b;
    this.deoptimized || this.applyDeoptimizations();
    const t = ((_a2 = this.superClass) == null ? void 0 : _a2.hasEffects(e)) || this.body.hasEffects(e);
    return (_b = this.id) == null ? void 0 : _b.markDeclarationReached(), t || super.hasEffects(e) || no(this.decorators, e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    var _a2;
    return t.type === 2 && e.length === 0 ? !t.withNew || (this.classConstructor === null ? (_a2 = this.superClass) == null ? void 0 : _a2.hasEffectsOnInteractionAtPath(e, t, s) : this.classConstructor.hasEffectsOnInteractionAtPath(e, t, s)) || false : this.getObjectEntity().hasEffectsOnInteractionAtPath(e, t, s);
  }
  include(e, t) {
    var _a2;
    this.included || this.includeNode(e), (_a2 = this.superClass) == null ? void 0 : _a2.include(e, t), this.body.include(e, t);
    for (const s of this.decorators) s.include(e, t);
    this.id && (this.id.markDeclarationReached(), this.id.include(e, t));
  }
  initialise() {
    var _a2;
    super.initialise(), (_a2 = this.id) == null ? void 0 : _a2.declare("class", G, this);
    for (const e of this.body.body) if (e instanceof Qs && e.kind === "constructor") return void (this.classConstructor = e);
    this.classConstructor = null;
  }
  applyDeoptimizations() {
    this.deoptimized = true;
    for (const e of this.body.body) pa(e) || e.static || e instanceof Qs && e.kind === "constructor" || e.deoptimizePath(U);
    this.scope.context.requestTreeshakingPass();
  }
  getObjectEntity() {
    if (this.objectEntity !== null) return this.objectEntity;
    const e = [], t = [];
    for (const s of this.body.body) {
      if (pa(s)) continue;
      const i = s.static ? e : t, r = s.kind;
      if (i === t && !r) continue;
      const o = r === "set" || r === "get" ? r : "init";
      let a;
      if (s.computed) {
        const l = s.key.getLiteralValueAtPath(G, xe, this);
        if (typeof l == "symbol") {
          i.push({ key: ne, kind: o, property: s });
          continue;
        }
        a = String(l);
      } else a = s.key instanceof pe ? s.key.name : String(s.key.value);
      i.push({ key: a, kind: o, property: s });
    }
    return e.unshift({ key: "prototype", kind: "init", property: new Je(t, this.superClass ? new ic(this.superClass, ["prototype"]) : Nt) }), this.objectEntity = new Je(e, this.superClass || Nt);
  }
}
so.prototype.includeNode = Te;
class vn extends so {
  initialise() {
    super.initialise(), this.id !== null && (this.id.variable.isId = true);
  }
  parseNode(e) {
    return e.id !== null && (this.id = new pe(this, this.scope.parent).parseNode(e.id)), super.parseNode(e);
  }
  render(e, t) {
    var _a2;
    const { exportNamesByVariable: s, format: i, snippets: { _: r, getPropertyAccess: o } } = t;
    if (this.id) {
      const { variable: a, name: l } = this.id;
      i === "system" && s.has(a) && e.appendLeft(this.end, `${r}${nn([a], t)};`);
      const c = a.getName(o);
      if (c !== l) return this.decorators.map((d) => d.render(e, t)), (_a2 = this.superClass) == null ? void 0 : _a2.render(e, t), this.body.render(e, { ...t, useOriginalName: (d) => d === a }), e.prependRight(this.start, `let ${c}${r}=${r}`), void e.prependLeft(this.end, ";");
    }
    super.render(e, t);
  }
  applyDeoptimizations() {
    super.applyDeoptimizations();
    const { id: e, scope: t } = this;
    if (e) {
      const { name: s, variable: i } = e;
      for (const r of t.accessedOutsideVariables.values()) r !== i && r.forbidName(s);
    }
  }
}
class fd extends et {
  constructor(e) {
    super("arguments", null, se, G, e, "other");
  }
  addArgumentToBeDeoptimized(e) {
  }
  addReference() {
    this.deoptimizedArguments = [], this.addArgumentToBeDeoptimized = md;
  }
  hasEffectsOnInteractionAtPath(e, { type: t }) {
    return t !== 0 || e.length > 1;
  }
  includePath(e, t) {
    super.includePath(e, t);
    for (const s of this.deoptimizedArguments) s.deoptimizePath(U);
    this.deoptimizedArguments.length = 0;
  }
}
function md(n) {
  var _a2;
  this.included ? n.deoptimizePath(U) : (_a2 = this.deoptimizedArguments) == null ? void 0 : _a2.push(n);
}
const fa = $e, gd = /* @__PURE__ */ new Set([ne]), yd = new Sn(), bd = /* @__PURE__ */ new Set([se]);
class oc extends et {
  constructor(e, t, s, i) {
    super(e, t, se, s, i, "parameter"), this.includedPathTracker = new Tu(), this.argumentsToBeDeoptimized = /* @__PURE__ */ new Set(), this.deoptimizationInteractions = [], this.deoptimizations = new Sn(), this.deoptimizedFields = /* @__PURE__ */ new Set(), this.expressionsDependingOnKnownValue = [], this.knownValue = null, this.knownValueLiteral = oe;
  }
  addArgumentForDeoptimization(e) {
    if (this.updateKnownValue(e), e === se) {
      if (!this.argumentsToBeDeoptimized.has(se)) {
        this.argumentsToBeDeoptimized.add(se);
        for (const { interaction: t } of this.deoptimizationInteractions) Rt(t);
        this.deoptimizationInteractions = fa;
      }
    } else if (this.deoptimizedFields.has(ne)) e.deoptimizePath([...this.initPath, ne]);
    else if (!this.argumentsToBeDeoptimized.has(e)) {
      this.argumentsToBeDeoptimized.add(e);
      for (const t of this.deoptimizedFields) e.deoptimizePath([...this.initPath, t]);
      for (const { interaction: t, path: s } of this.deoptimizationInteractions) e.deoptimizeArgumentsOnInteractionAtPath(t, [...this.initPath, ...s], xe);
    }
  }
  markReassigned() {
    if (!this.isReassigned) {
      super.markReassigned();
      for (const e of this.expressionsDependingOnKnownValue) e.deoptimizeCache();
      this.expressionsDependingOnKnownValue = $e;
    }
  }
  deoptimizeCache() {
    this.markReassigned();
  }
  updateKnownValue(e) {
    if (this.isReassigned) return;
    if (this.knownValue === null) return this.knownValue = e, void (this.knownValueLiteral = e.getLiteralValueAtPath(this.initPath, xe, this));
    if (this.knownValue === e || this.knownValue instanceof pe && e instanceof pe && this.knownValue.variable === e.variable) return;
    const { knownValueLiteral: t } = this;
    typeof t != "symbol" && e.getLiteralValueAtPath(this.initPath, xe, this) === t || this.markReassigned();
  }
  getKnownValue() {
    return this.knownValue || se;
  }
  getLiteralValueAtPath(e, t, s) {
    if (this.isReassigned || e.length + this.initPath.length > 6) return oe;
    const i = this.getKnownValue();
    return this.expressionsDependingOnKnownValue.push(s), t.withTrackedEntityAtPath(e, i, () => i.getLiteralValueAtPath([...this.initPath, ...e], t, s), oe);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    const { type: i } = t;
    return this.isReassigned || i === 1 || e.length + this.initPath.length > 6 ? super.hasEffectsOnInteractionAtPath(e, t, s) : !(i === 2 ? (t.withNew ? s.instantiated : s.called).trackEntityAtPathAndGetIfTracked(e, t.args, this) : s.accessed.trackEntityAtPathAndGetIfTracked(e, this)) && this.getKnownValue().hasEffectsOnInteractionAtPath([...this.initPath, ...e], t, s);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t) {
    if (t.length >= 2 || this.argumentsToBeDeoptimized.has(se) || this.deoptimizationInteractions.length >= 20 || t.length === 1 && (this.deoptimizedFields.has(ne) || e.type === 2 && this.deoptimizedFields.has(t[0])) || this.initPath.length + t.length > 6) Rt(e);
    else if (!this.deoptimizations.trackEntityAtPathAndGetIfTracked(t, e.args)) {
      for (const s of this.argumentsToBeDeoptimized) s.deoptimizeArgumentsOnInteractionAtPath(e, [...this.initPath, ...t], xe);
      this.argumentsToBeDeoptimized.has(se) || this.deoptimizationInteractions.push({ interaction: e, path: t });
    }
  }
  deoptimizePath(e) {
    if (e.length === 0) return void this.markReassigned();
    if (this.deoptimizedFields.has(ne)) return;
    const t = e[0];
    if (!this.deoptimizedFields.has(t)) {
      this.deoptimizedFields.add(t);
      for (const s of this.argumentsToBeDeoptimized) s.deoptimizePath([...this.initPath, t]);
      t === ne && (this.deoptimizationInteractions = fa, this.deoptimizations = yd, this.deoptimizedFields = gd, this.argumentsToBeDeoptimized = bd);
    }
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return e.length === 0 ? this.deoptimizePath(U) : this.deoptimizedFields.has(e[0]) || this.deoptimizePath([e[0]]), De;
  }
  includeArgumentPaths(e, t) {
    this.includedPathTracker.includeAllPaths(e, t, this.initPath);
  }
}
class ac extends oc {
  constructor(e) {
    super("this", null, G, e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return (s.replacedVariableInits.get(this) || se).hasEffectsOnInteractionAtPath(e, t, s);
  }
}
class Ed extends Xe {
  constructor(e) {
    super(e, e.context), this.parent = e;
  }
  addDeclaration(e, t, s, i, r) {
    var _a2;
    if (r === "var") {
      const o = e.name, a = ((_a2 = this.hoistedVariables) == null ? void 0 : _a2.get(o)) || this.variables.get(o);
      if (a) {
        const c = a.kind;
        if (c === "parameter" && a.declarations[0].parent.type === "CatchClause") {
          const d = this.parent.parent.addDeclaration(e, t, xt, i, r);
          return a.renderLikeHoisted(d), this.addHoistedVariable(o, d), d;
        }
        return c === "var" ? (a.addDeclaration(e, s), a) : t.error(Rn(o), e.start);
      }
      const l = this.parent.parent.addDeclaration(e, t, s, i, r);
      return l.markInitializersForDeoptimization(), this.addHoistedVariable(o, l), l;
    }
    return super.addDeclaration(e, t, s, i, r);
  }
}
class xd extends Xe {
  constructor(e) {
    super(e, e.context);
  }
  addDeclaration(e, t, s, i, r) {
    var _a2;
    const o = e.name, a = ((_a2 = this.hoistedVariables) == null ? void 0 : _a2.get(o)) || this.variables.get(o);
    if (a) {
      const c = a.kind;
      if (!(r !== "var" && r !== "function" || c !== "var" && c !== "function" && c !== "parameter")) return a.addDeclaration(e, s), a;
      t.error(Rn(o), e.start);
    }
    const l = new et(e.name, e, s, i, t, r);
    return this.variables.set(o, l), l;
  }
}
class lc extends Xe {
  constructor(e, t) {
    super(e, e.context), this.hasRest = false, this.parameters = [], this.bodyScope = t ? new Ed(this) : new xd(this);
  }
  addParameterDeclaration(e, t) {
    const { name: s, start: i } = e;
    if (this.variables.get(s)) return this.context.error(function(o) {
      return { code: "DUPLICATE_ARGUMENT_NAME", message: `Duplicate argument name "${o}"` };
    }(s), i);
    const r = new oc(s, e, t, this.context);
    return this.variables.set(s, r), this.bodyScope.addHoistedVariable(s, r), r;
  }
  addParameterVariables(e, t) {
    this.parameters = e;
    for (const s of e) for (const i of s) i.alwaysRendered = true;
    this.hasRest = t;
  }
  includeCallArguments({ args: e }, t) {
    let s = false, i = false;
    const r = this.hasRest && this.parameters[this.parameters.length - 1];
    let o = e.length - 1;
    for (let a = 1; a < e.length; a++) {
      const l = e[a];
      l instanceof Qt && !i && (i = true, o = a - 1), i && (l.includePath(U, t), l.include(t, false));
    }
    for (let a = o; a >= 1; a--) {
      const l = this.parameters[a - 1] || r, c = e[a];
      if (l) if (s = false, l.length === 0) i = true;
      else for (const d of l) d.calledFromTryStatement && (s = true), d.included && (i = true, s ? c.include(t, true) : (d.includeArgumentPaths(c, t), c.include(t, false)));
      (i || c.shouldBeIncluded(t)) && (i = true, c.include(t, s));
    }
  }
}
class cc extends lc {
  constructor() {
    super(...arguments), this.returnExpression = null, this.returnExpressions = [];
  }
  addReturnExpression(e) {
    this.returnExpressions.push(e);
  }
  deoptimizeArgumentsOnCall({ args: e }) {
    var _a2;
    const { parameters: t } = this;
    let s = 0;
    for (; s < e.length - 1; s++) {
      const r = e[s + 1];
      if (r instanceof Qt) {
        for (; s < t.length; s++) {
          (_a2 = e[s + 1]) == null ? void 0 : _a2.deoptimizePath(U);
          for (const o of t[s]) o.markReassigned();
        }
        break;
      }
      if (this.hasRest && s >= t.length - 1) r.deoptimizePath(U);
      else {
        const o = t[s];
        if (o) for (const a of o) a.addArgumentForDeoptimization(r);
        this.addArgumentToBeDeoptimized(r);
      }
    }
    const i = this.hasRest ? t.length - 1 : t.length;
    for (; s < i; s++) for (const r of t[s]) r.addArgumentForDeoptimization(xt);
  }
  getReturnExpression() {
    return this.returnExpression === null && this.updateReturnExpression(), this.returnExpression;
  }
  deoptimizeAllParameters() {
    for (const e of this.parameters) for (const t of e) t.deoptimizePath(U), t.markReassigned();
  }
  reassignAllParameters() {
    for (const e of this.parameters) for (const t of e) t.markReassigned();
  }
  addArgumentToBeDeoptimized(e) {
  }
  updateReturnExpression() {
    if (this.returnExpressions.length === 1) this.returnExpression = this.returnExpressions[0];
    else {
      this.returnExpression = se;
      for (const e of this.returnExpressions) e.deoptimizePath(U);
    }
  }
}
class uc extends cc {
  constructor(e, t) {
    super(e, false), this.functionNode = t;
    const { context: s } = e;
    this.variables.set("arguments", this.argumentsVariable = new fd(s)), this.variables.set("this", this.thisVariable = new ac(s));
  }
  findLexicalBoundary() {
    return this;
  }
  includeCallArguments(e, t) {
    if (super.includeCallArguments(e, t), this.argumentsVariable.included) {
      const { args: s } = e;
      for (let i = 1; i < s.length; i++) {
        const r = s[i];
        r && (r.includePath(U, t), r.include(t, false));
      }
    }
  }
  addArgumentToBeDeoptimized(e) {
    this.argumentsVariable.addArgumentToBeDeoptimized(e);
  }
}
class st extends z {
  initialise() {
    var e, t;
    super.initialise(), this.directive && this.directive !== "use strict" && this.parent.type === Hs && this.scope.context.log(Q, (e = this.directive, { code: "MODULE_LEVEL_DIRECTIVE", id: t = this.scope.context.module.id, message: `Module level directives cause errors when bundled, "${e}" in "${Z(t)}" was ignored.` }), this.start);
  }
  removeAnnotations(e) {
    this.expression.removeAnnotations(e);
  }
  render(e, t) {
    super.render(e, t), e.original[this.end - 1] !== ";" && e.appendLeft(this.end, ";");
  }
  shouldBeIncluded(e) {
    return this.directive && this.directive !== "use strict" ? this.parent.type !== Hs : super.shouldBeIncluded(e);
  }
}
st.prototype.includeNode = ge, st.prototype.applyDeoptimizations = le;
class tn extends z {
  get deoptimizeBody() {
    return ue(this.flags, 32768);
  }
  set deoptimizeBody(e) {
    this.flags = de(this.flags, 32768, e);
  }
  get directlyIncluded() {
    return ue(this.flags, 16384);
  }
  set directlyIncluded(e) {
    this.flags = de(this.flags, 16384, e);
  }
  addImplicitReturnExpressionToScope() {
    const e = this.body[this.body.length - 1];
    e && e.type === "ReturnStatement" || this.scope.addReturnExpression(se);
  }
  createScope(e) {
    this.scope = this.parent.preventChildBlockScope ? e : new rn(e);
  }
  hasEffects(e) {
    if (this.deoptimizeBody) return true;
    for (const t of this.body) {
      if (e.brokenFlow) break;
      if (t.hasEffects(e)) return true;
    }
    return false;
  }
  include(e, t) {
    if (!this.deoptimizeBody || !this.directlyIncluded) {
      this.included = true, this.directlyIncluded = true, this.deoptimizeBody && (t = true);
      for (const s of this.body) (t || s.shouldBeIncluded(e)) && s.include(e, t);
    }
  }
  initialise() {
    super.initialise(), this.scope.context.magicString.addSourcemapLocation(this.end - 1);
    const e = this.body[0];
    this.deoptimizeBody = e instanceof st && e.directive === "use asm";
  }
  render(e, t) {
    this.body.length > 0 ? ds(this.body, e, this.start + 1, this.end - 1, t) : super.render(e, t);
  }
}
tn.prototype.includeNode = ge, tn.prototype.applyDeoptimizations = le;
class Ht extends z {
  constructor() {
    super(...arguments), this.declarationInit = null;
  }
  addExportedVariables(e, t) {
    this.argument.addExportedVariables(e, t);
  }
  declare(e, t, s) {
    return this.declarationInit = s, this.argument.declare(e, $s(t), s);
  }
  deoptimizeAssignment(e, t) {
    this.argument.deoptimizeAssignment($s(e), t);
  }
  deoptimizePath(e) {
    e.length === 0 && this.argument.deoptimizePath(G);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return e.length > 0 || this.argument.hasEffectsOnInteractionAtPath(G, t, s);
  }
  hasEffectsWhenDestructuring(e, t, s) {
    return this.argument.hasEffectsWhenDestructuring(e, $s(t), s);
  }
  includeDestructuredIfNecessary(e, t, s) {
    const i = this.argument.includeDestructuredIfNecessary(e, $s(t), s);
    return !this.included && i && this.includeNode(e), this.included;
  }
  include(e, t) {
    this.included || this.includeNode(e), this.argument.include(e, t);
  }
  markDeclarationReached() {
    this.argument.markDeclarationReached();
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.declarationInit !== null && (this.declarationInit.deoptimizePath([ne, ne]), this.scope.context.requestTreeshakingPass());
  }
}
Ht.prototype.includeNode = Te;
const $s = (n) => n.at(-1) === ne ? n : [...n, ne];
class Un extends z {
  constructor() {
    super(...arguments), this.parameterVariableValuesDeoptimized = false, this.includeCallArguments = this.scope.includeCallArguments.bind(this.scope);
  }
  get async() {
    return ue(this.flags, 256);
  }
  set async(e) {
    this.flags = de(this.flags, 256, e);
  }
  get deoptimizedReturn() {
    return ue(this.flags, 512);
  }
  set deoptimizedReturn(e) {
    this.flags = de(this.flags, 512, e);
  }
  get generator() {
    return ue(this.flags, 4194304);
  }
  set generator(e) {
    this.flags = de(this.flags, 4194304, e);
  }
  get hasCachedEffects() {
    return ue(this.flags, 67108864);
  }
  set hasCachedEffects(e) {
    this.flags = de(this.flags, 67108864, e);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    e.type === 2 && t.length === 0 ? this.scope.deoptimizeArgumentsOnCall(e) : this.getObjectEntity().deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizePath(e) {
    this.getObjectEntity().deoptimizePath(e), e.length === 1 && e[0] === ne && (this.scope.getReturnExpression().deoptimizePath(U), this.scope.deoptimizeAllParameters());
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getObjectEntity().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return e.length > 0 ? this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t, s, i) : this.async ? (this.deoptimizedReturn || (this.deoptimizedReturn = true, this.scope.getReturnExpression().deoptimizePath(U), this.scope.context.requestTreeshakingPass()), De) : [this.scope.getReturnExpression(), false];
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    if (e.length > 0 || t.type !== 2) return this.getObjectEntity().hasEffectsOnInteractionAtPath(e, t, s);
    if (this.hasCachedEffects) return true;
    if (this.async) {
      const { propertyReadSideEffects: r } = this.scope.context.options.treeshake, o = this.scope.getReturnExpression();
      if (o.hasEffectsOnInteractionAtPath(["then"], hs, s) || r && (r === "always" || o.hasEffectsOnInteractionAtPath(["then"], Zt, s))) return this.hasCachedEffects = true, true;
    }
    const { propertyReadSideEffects: i } = this.scope.context.options.treeshake;
    for (let r = 0; r < this.params.length; r++) {
      const o = this.params[r];
      if (o.hasEffects(s) || i && o.hasEffectsWhenDestructuring(s, G, t.args[r + 1] || xt)) return this.hasCachedEffects = true, true;
    }
    return false;
  }
  onlyFunctionCallUsed() {
    let e = null;
    return this.parent.type === "VariableDeclarator" && (e = this.parent.id.variable ?? null), this.parent.type === Cl && (e = this.parent.variable), (e == null ? void 0 : e.getOnlyFunctionCallUsed()) ?? false;
  }
  include(e, t) {
    this.included || this.includeNode(e), this.parameterVariableValuesDeoptimized || this.onlyFunctionCallUsed() || (this.parameterVariableValuesDeoptimized = true, this.scope.reassignAllParameters());
    const { brokenFlow: s } = e;
    e.brokenFlow = false, this.body.include(e, t), e.brokenFlow = s;
  }
  initialise() {
    super.initialise(), this.body instanceof tn ? this.body.addImplicitReturnExpressionToScope() : this.scope.addReturnExpression(this.body), this.annotations && this.scope.context.options.treeshake.annotations && (this.annotationNoSideEffects = this.annotations.some((e) => e.type === "noSideEffects"));
  }
  parseNode(e) {
    const { body: t, params: s } = e, { scope: i } = this, { bodyScope: r, context: o } = i, a = this.params = s.map((l) => new (o.getNodeConstructor(l.type))(this, i).parseNode(l));
    return i.addParameterVariables(a.map((l) => l.declare("parameter", G, se)), a[a.length - 1] instanceof Ht), this.body = new (o.getNodeConstructor(t.type))(this, r).parseNode(t), super.parseNode(e);
  }
}
Un.prototype.preventChildBlockScope = true, Un.prototype.includeNode = ge, Un.prototype.applyDeoptimizations = le;
class _i extends Un {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  createScope(e) {
    this.scope = new uc(e, this), this.constructedEntity = new Je(/* @__PURE__ */ Object.create(null), Nt), this.scope.thisVariable.addArgumentForDeoptimization(this.constructedEntity);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    super.deoptimizeArgumentsOnInteractionAtPath(e, t, s), e.type === 2 && t.length === 0 && e.args[0] && this.scope.thisVariable.addArgumentForDeoptimization(e.args[0]);
  }
  hasEffects(e) {
    var _a2;
    return !this.annotationNoSideEffects && !!((_a2 = this.id) == null ? void 0 : _a2.hasEffects(e));
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    if (this.annotationNoSideEffects && e.length === 0 && t.type === 2) return false;
    if (super.hasEffectsOnInteractionAtPath(e, t, s)) return true;
    if (e.length === 0 && t.type === 2) {
      const i = s.replacedVariableInits.get(this.scope.thisVariable);
      s.replacedVariableInits.set(this.scope.thisVariable, t.withNew ? this.constructedEntity : se);
      const { brokenFlow: r, ignore: o, replacedVariableInits: a } = s;
      if (s.ignore = { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: true, this: t.withNew }, this.body.hasEffects(s)) return this.hasCachedEffects = true, true;
      s.brokenFlow = r, i ? a.set(this.scope.thisVariable, i) : a.delete(this.scope.thisVariable), s.ignore = o;
    }
    return false;
  }
  include(e, t) {
    var _a2;
    super.include(e, t), (_a2 = this.id) == null ? void 0 : _a2.include(e, t);
    const s = this.scope.argumentsVariable.included;
    for (const i of this.params) i instanceof pe && !s || i.include(e, t);
  }
  includeNode(e) {
    this.included = true;
    const t = this.scope.argumentsVariable.included;
    for (const s of this.params) s instanceof pe && !t || s.includePath(U, e);
  }
  initialise() {
    var _a2;
    super.initialise(), (_a2 = this.id) == null ? void 0 : _a2.declare("function", G, this);
  }
  getObjectEntity() {
    return this.objectEntity !== null ? this.objectEntity : this.objectEntity = new Je([{ key: "prototype", kind: "init", property: new Je([], Nt) }], Nt);
  }
}
class Pn extends _i {
  initialise() {
    super.initialise(), this.id !== null && (this.id.variable.isId = true);
  }
  onlyFunctionCallUsed() {
    var _a2;
    return ((_a2 = this.id) == null ? void 0 : _a2.variable.getOnlyFunctionCallUsed()) ?? super.onlyFunctionCallUsed();
  }
  parseNode(e) {
    return e.id !== null && (this.id = new pe(this, this.scope.parent).parseNode(e.id)), super.parseNode(e);
  }
}
class Wt extends z {
  include(e, t) {
    this.included = true, this.declaration.include(e, t), t && this.scope.context.includeVariableInModule(this.variable, U, e);
  }
  includePath(e, t) {
    this.included = true, this.declaration.includePath(e, t);
  }
  initialise() {
    super.initialise();
    const e = this.declaration;
    this.declarationName = e.id && e.id.name || this.declaration.name, this.variable = this.scope.addExportDefaultDeclaration(this.declarationName || this.scope.context.getModuleName(), this, this.scope.context), this.scope.context.addExport(this);
  }
  removeAnnotations(e) {
    this.declaration.removeAnnotations(e);
  }
  render(e, t, s) {
    const { start: i, end: r } = s, o = function(a, l) {
      return Ct(a, Me(a, "default", l) + 7);
    }(e.original, this.start);
    if (this.declaration instanceof Pn) this.renderNamedDeclaration(e, o, this.declaration.id === null ? function(a, l) {
      const c = Me(a, "function", l) + 8;
      a = a.slice(c, Me(a, "(", c));
      const d = Me(a, "*");
      return d === -1 ? c : c + d + 1;
    }(e.original, o) : null, t);
    else if (this.declaration instanceof vn) this.renderNamedDeclaration(e, o, this.declaration.id === null ? Me(e.original, "class", i) + 5 : null, t);
    else {
      if (this.variable.getOriginalVariable() !== this.variable) return void kn(this, e, i, r);
      if (!this.variable.included) return e.remove(this.start, o), this.declaration.render(e, t, { renderedSurroundingElement: ct }), void (e.original[this.end - 1] !== ";" && e.appendLeft(this.end, ";"));
      this.renderVariableDeclaration(e, o, t);
    }
    this.declaration.render(e, t);
  }
  renderNamedDeclaration(e, t, s, i) {
    const { exportNamesByVariable: r, format: o, snippets: { getPropertyAccess: a } } = i, l = this.variable.getName(a);
    e.remove(this.start, t), s !== null && e.appendLeft(s, ` ${l}`), o === "system" && this.declaration instanceof vn && r.has(this.variable) && e.appendLeft(this.end, ` ${nn([this.variable], i)};`);
  }
  renderVariableDeclaration(e, t, { format: s, exportNamesByVariable: i, snippets: { cnst: r, getPropertyAccess: o } }) {
    const a = e.original.charCodeAt(this.end - 1) === 59, l = s === "system" && i.get(this.variable);
    l ? (e.overwrite(this.start, t, `${r} ${this.variable.getName(o)} = exports(${JSON.stringify(l[0])}, `), e.appendRight(a ? this.end - 1 : this.end, ")" + (a ? "" : ";"))) : (e.overwrite(this.start, t, `${r} ${this.variable.getName(o)} = `), a || e.appendLeft(this.end, ";"));
  }
}
Wt.prototype.needsBoundaries = true, Wt.prototype.includeNode = ge, Wt.prototype.applyDeoptimizations = le;
const Ad = /[\n\r'\\\u2028\u2029]/, Sd = /([\n\r'\u2028\u2029])/g, $d = /\\/g;
function kt(n) {
  return Ad.test(n) ? n.replace($d, "\\\\").replace(Sd, "\\$1") : n;
}
const Ir = "_interopDefault", Nr = "_interopDefaultCompat", Ms = "_interopNamespace", Ts = "_interopNamespaceCompat", Lt = "_interopNamespaceDefault", ns = "_interopNamespaceDefaultOnly", ti = "_mergeNamespaces", At = "_documentCurrentScript", Mi = { auto: Ir, compat: Nr, default: null, defaultOnly: null, esModule: null }, Ti = (n, e) => n === "esModule" || e && (n === "auto" || n === "compat"), bs = { auto: Ms, compat: Ts, default: Lt, defaultOnly: ns, esModule: null }, vd = (n, e) => n !== "esModule" && Ti(n, e), kr = (n, e, t, s, i, r, o) => {
  const a = new Set(n);
  for (const l of Rr) e.has(l) && a.add(l);
  return Rr.map((l) => a.has(l) ? dc[l](t, s, i, r, o, a) : "").join("");
}, dc = { [At]: (n, { _: e, n: t }) => `var ${At}${e}=${e}typeof document${e}!==${e}'undefined'${e}?${e}document.currentScript${e}:${e}null;${t}`, [Nr](n, e, t) {
  const { _: s, getDirectReturnFunction: i, n: r } = e, [o, a] = i(["e"], { functionReturn: true, lineBreakIndent: null, name: Nr });
  return `${o}${Yi(e)}${s}?${s}${t ? ma(e) : ga(e)}${a}${r}${r}`;
}, [Ir](n, e, t) {
  const { _: s, getDirectReturnFunction: i, n: r } = e, [o, a] = i(["e"], { functionReturn: true, lineBreakIndent: null, name: Ir });
  return `${o}e${s}&&${s}e.__esModule${s}?${s}${t ? ma(e) : ga(e)}${a}${r}${r}`;
}, [Ts](n, e, t, s, i, r) {
  const { _: o, getDirectReturnFunction: a, n: l } = e;
  if (r.has(Lt)) {
    const [c, d] = a(["e"], { functionReturn: true, lineBreakIndent: null, name: Ts });
    return `${c}${Yi(e)}${o}?${o}e${o}:${o}${Lt}(e)${d}${l}${l}`;
  }
  return `function ${Ts}(e)${o}{${l}${n}if${o}(${Yi(e)})${o}return e;${l}` + Zi(n, n, e, t, s, i) + `}${l}${l}`;
}, [ns](n, e, t, s, i) {
  const { getDirectReturnFunction: r, getObject: o, n: a, _: l } = e, [c, d] = r(["e"], { functionReturn: true, lineBreakIndent: null, name: ns });
  return `${c}${Cr(s, ya(i, o([[null, `__proto__:${l}null`], ["default", "e"]], { lineBreakIndent: null }), e))}${d}${a}${a}`;
}, [Lt](n, e, t, s, i) {
  const { _: r, n: o } = e;
  return `function ${Lt}(e)${r}{${o}` + Zi(n, n, e, t, s, i) + `}${o}${o}`;
}, [Ms](n, e, t, s, i, r) {
  const { _: o, getDirectReturnFunction: a, n: l } = e;
  if (r.has(Lt)) {
    const [c, d] = a(["e"], { functionReturn: true, lineBreakIndent: null, name: Ms });
    return `${c}e${o}&&${o}e.__esModule${o}?${o}e${o}:${o}${Lt}(e)${d}${l}${l}`;
  }
  return `function ${Ms}(e)${o}{${l}${n}if${o}(e${o}&&${o}e.__esModule)${o}return e;${l}` + Zi(n, n, e, t, s, i) + `}${l}${l}`;
}, [ti](n, e, t, s, i) {
  const { _: r, cnst: o, n: a } = e, l = o === "var" && t;
  return `function ${ti}(n, m)${r}{${a}${n}${wd(`{${a}${n}${n}${n}if${r}(k${r}!==${r}'default'${r}&&${r}!(k in n))${r}{${a}` + (t ? l ? hc : Nd : pc)(n, n + n + n + n, e) + `${n}${n}${n}}${a}${n}${n}}`, l, n, e)}${a}${n}return ${Cr(s, ya(i, "n", e))};${a}}${a}${a}`;
} }, ma = ({ _: n, getObject: e }) => `e${n}:${n}${e([["default", "e"]], { lineBreakIndent: null })}`, ga = ({ _: n, getPropertyAccess: e }) => `e${e("default")}${n}:${n}e`, Yi = ({ _: n }) => `e${n}&&${n}typeof e${n}===${n}'object'${n}&&${n}'default'${n}in e`, Zi = (n, e, t, s, i, r) => {
  const { _: o, cnst: a, getObject: l, getPropertyAccess: c, n: d, s: p } = t, h = `{${d}` + (s ? Id : pc)(n, e + n + n, t) + `${e}${n}}`;
  return `${e}${a} n${o}=${o}Object.create(null${r ? `,${o}{${o}[Symbol.toStringTag]:${o}${ss(l)}${o}}` : ""});${d}${e}if${o}(e)${o}{${d}${e}${n}${Pd(h, !s, t)}${d}${e}}${d}${e}n${c("default")}${o}=${o}e;${d}${e}return ${Cr(i, "n")}${p}${d}`;
}, Pd = (n, e, { _: t, cnst: s, getFunctionIntro: i, s: r }) => s !== "var" || e ? `for${t}(${s} k in e)${t}${n}` : `Object.keys(e).forEach(${i(["k"], { isAsync: false, name: null })}${n})${r}`, wd = (n, e, t, { _: s, cnst: i, getDirectReturnFunction: r, getFunctionIntro: o, n: a }) => {
  if (e) {
    const [l, c] = r(["e"], { functionReturn: false, lineBreakIndent: { base: t, t }, name: null });
    return `m.forEach(${l}e${s}&&${s}typeof e${s}!==${s}'string'${s}&&${s}!Array.isArray(e)${s}&&${s}Object.keys(e).forEach(${o(["k"], { isAsync: false, name: null })}${n})${c});`;
  }
  return `for${s}(var i${s}=${s}0;${s}i${s}<${s}m.length;${s}i++)${s}{${a}${t}${t}${i} e${s}=${s}m[i];${a}${t}${t}if${s}(typeof e${s}!==${s}'string'${s}&&${s}!Array.isArray(e))${s}{${s}for${s}(${i} k in e)${s}${n}${s}}${a}${t}}`;
}, Id = (n, e, t) => {
  const { _: s, n: i } = t;
  return `${e}if${s}(k${s}!==${s}'default')${s}{${i}` + hc(n, e + n, t) + `${e}}${i}`;
}, hc = (n, e, { _: t, cnst: s, getDirectReturnFunction: i, n: r }) => {
  const [o, a] = i([], { functionReturn: true, lineBreakIndent: null, name: null });
  return `${e}${s} d${t}=${t}Object.getOwnPropertyDescriptor(e,${t}k);${r}${e}Object.defineProperty(n,${t}k,${t}d.get${t}?${t}d${t}:${t}{${r}${e}${n}enumerable:${t}true,${r}${e}${n}get:${t}${o}e[k]${a}${r}${e}});${r}`;
}, Nd = (n, e, { _: t, cnst: s, getDirectReturnFunction: i, n: r }) => {
  const [o, a] = i([], { functionReturn: true, lineBreakIndent: null, name: null });
  return `${e}${s} d${t}=${t}Object.getOwnPropertyDescriptor(e,${t}k);${r}${e}if${t}(d)${t}{${r}${e}${n}Object.defineProperty(n,${t}k,${t}d.get${t}?${t}d${t}:${t}{${r}${e}${n}${n}enumerable:${t}true,${r}${e}${n}${n}get:${t}${o}e[k]${a}${r}${e}${n}});${r}${e}}${r}`;
}, pc = (n, e, { _: t, n: s }) => `${e}n[k]${t}=${t}e[k];${s}`, Cr = (n, e) => n ? `Object.freeze(${e})` : e, ya = (n, e, { _: t, getObject: s }) => n ? `Object.defineProperty(${e},${t}Symbol.toStringTag,${t}${ss(s)})` : e, Rr = Object.keys(dc);
function ss(n) {
  return n([["value", "'Module'"]], { lineBreakIndent: null });
}
class Ge extends z {
  deoptimizeArgumentsOnInteractionAtPath() {
  }
  getLiteralValueAtPath(e) {
    return e.length > 0 || this.value === null && this.scope.context.code.charCodeAt(this.start) !== 110 || typeof this.value == "bigint" || this.scope.context.code.charCodeAt(this.start) === 47 ? oe : this.value;
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return e.length !== 1 ? De : ys(this.members, e[0]);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    switch (t.type) {
      case 0:
        return e.length > (this.value === null ? 0 : 1);
      case 1:
        return true;
      case 2:
        return !!(this.included && this.value instanceof RegExp && (this.value.global || this.value.sticky)) || e.length !== 1 || gs(this.members, e[0], t, s);
    }
  }
  initialise() {
    super.initialise(), this.members = function(e) {
      if (e instanceof RegExp) return ad;
      switch (typeof e) {
        case "boolean":
          return $r;
        case "number":
          return vr;
        case "string":
          return ts;
      }
      return /* @__PURE__ */ Object.create(null);
    }(this.value);
  }
  parseNode(e) {
    return this.value = e.value, this.regex = e.regex, super.parseNode(e);
  }
  render(e) {
    typeof this.value == "string" && e.indentExclusionRanges.push([this.start + 1, this.end - 1]);
  }
}
function fc(n, e, t, s, i) {
  if ("getLiteralValueAtPathAsChainElement" in e) {
    const r = e.getLiteralValueAtPathAsChainElement(G, xe, i);
    if (r === ut || n.optional && r == null) return ut;
  } else if (n.optional && e.getLiteralValueAtPath(G, xe, i) == null) return ut;
  return n.getLiteralValueAtPath(t, s, i);
}
function kd(n) {
  return n.computed ? function(e) {
    return e instanceof Ge ? String(e.value) : null;
  }(n.property) : n.property.name;
}
function mc(n) {
  const e = n.propertyKey, t = n.object;
  if (typeof e == "string") {
    if (t instanceof pe) return [{ key: t.name, pos: t.start }, { key: e, pos: n.property.start }];
    if (t instanceof vt) {
      const s = mc(t);
      return s && [...s, { key: e, pos: n.property.start }];
    }
  }
  return null;
}
Ge.prototype.includeNode = Te;
class vt extends z {
  constructor() {
    super(...arguments), this.variable = null, this.expressionsToBeDeoptimized = [];
  }
  get computed() {
    return ue(this.flags, 1024);
  }
  set computed(e) {
    this.flags = de(this.flags, 1024, e);
  }
  get optional() {
    return ue(this.flags, 128);
  }
  set optional(e) {
    this.flags = de(this.flags, 128, e);
  }
  get assignmentDeoptimized() {
    return ue(this.flags, 16);
  }
  set assignmentDeoptimized(e) {
    this.flags = de(this.flags, 16, e);
  }
  get bound() {
    return ue(this.flags, 32);
  }
  set bound(e) {
    this.flags = de(this.flags, 32, e);
  }
  get isUndefined() {
    return ue(this.flags, 64);
  }
  set isUndefined(e) {
    this.flags = de(this.flags, 64, e);
  }
  bind() {
    this.bound = true;
    const e = mc(this), t = e && this.scope.findVariable(e[0].key);
    if (t == null ? void 0 : t.isNamespace) {
      const s = gc(t, e.slice(1), this.scope.context);
      s ? s === "undefined" ? this.isUndefined = true : (this.variable = s, this.scope.addNamespaceMemberAccess(function(i) {
        let r = i[0].key;
        for (let o = 1; o < i.length; o++) r += "." + i[o].key;
        return r;
      }(e), s)) : super.bind();
    } else super.bind();
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.variable ? this.variable.deoptimizeArgumentsOnInteractionAtPath(e, t, s) : this.isUndefined || (t.length < 6 ? this.object.deoptimizeArgumentsOnInteractionAtPath(e, this.propertyKey === ne ? U : [this.propertyKey, ...t], s) : Rt(e));
  }
  deoptimizeAssignment(e, t) {
    this.deoptimizePath(G), t.deoptimizePath([...e, ne]);
  }
  deoptimizeCache() {
    if (this.propertyKey === this.dynamicPropertyKey) return;
    const { expressionsToBeDeoptimized: e, object: t } = this;
    this.expressionsToBeDeoptimized = $e, this.dynamicPropertyKey = this.propertyKey, t.deoptimizePath(U), this.included && t.includePath(U, nt());
    for (const s of e) s.deoptimizeCache();
  }
  deoptimizePath(e) {
    if (e.length === 0 && this.disallowNamespaceReassignment(), this.variable) this.variable.deoptimizePath(e);
    else if (!this.isUndefined) {
      const { propertyKey: t } = this;
      this.object.deoptimizePath([t === ne ? Gs : t, ...e.length < 6 ? e : [...e.slice(0, 6), ne]]);
    }
  }
  getLiteralValueAtPath(e, t, s) {
    if (this.variable) return this.variable.getLiteralValueAtPath(e, t, s);
    if (this.isUndefined) return;
    const i = this.getDynamicPropertyKey();
    return i !== ne && e.length < 6 ? (i !== this.propertyKey && this.expressionsToBeDeoptimized.push(s), this.object.getLiteralValueAtPath([i, ...e], t, s)) : oe;
  }
  getLiteralValueAtPathAsChainElement(e, t, s) {
    return this.variable ? this.variable.getLiteralValueAtPath(e, t, s) : this.isUndefined ? void 0 : fc(this, this.object, e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    if (this.variable) return this.variable.getReturnExpressionWhenCalledAtPath(e, t, s, i);
    if (this.isUndefined) return [xt, false];
    const r = this.getDynamicPropertyKey();
    return r !== ne && e.length < 6 ? (r !== this.propertyKey && this.expressionsToBeDeoptimized.push(i), this.object.getReturnExpressionWhenCalledAtPath([r, ...e], t, s, i)) : De;
  }
  hasEffects(e) {
    return this.deoptimized || this.applyDeoptimizations(), this.property.hasEffects(e) || this.object.hasEffects(e) || this.hasAccessEffect(e);
  }
  hasEffectsAsChainElement(e) {
    if (this.variable || this.isUndefined) return this.hasEffects(e);
    const t = "hasEffectsAsChainElement" in this.object ? this.object.hasEffectsAsChainElement(e) : this.object.hasEffects(e);
    return t === ut ? ut : this.optional && this.object.getLiteralValueAtPath(G, xe, this) == null ? t || ut : (this.deoptimized || this.applyDeoptimizations(), t || this.property.hasEffects(e) || this.hasAccessEffect(e));
  }
  hasEffectsAsAssignmentTarget(e, t) {
    return t && !this.deoptimized && this.applyDeoptimizations(), this.assignmentDeoptimized || this.applyAssignmentDeoptimization(), this.property.hasEffects(e) || this.object.hasEffects(e) || t && this.hasAccessEffect(e) || this.hasEffectsOnInteractionAtPath(G, this.assignmentInteraction, e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return this.variable ? this.variable.hasEffectsOnInteractionAtPath(e, t, s) : !!this.isUndefined || !(e.length < 6) || this.object.hasEffectsOnInteractionAtPath([this.getDynamicPropertyKey(), ...e], t, s);
  }
  hasEffectsWhenDestructuring(e, t, s) {
    return t.length > 0 && s.hasEffectsOnInteractionAtPath(t, Zt, e);
  }
  include(e, t) {
    this.included || this.includeNode(e), this.object.include(e, t), this.property.include(e, t);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.variable ? this.scope.context.includeVariableInModule(this.variable, G, e) : this.isUndefined || this.object.includePath([this.propertyKey], e);
  }
  includeNodeAsAssignmentTarget(e) {
    this.included = true, this.assignmentDeoptimized || this.applyAssignmentDeoptimization(), this.variable ? this.scope.context.includeVariableInModule(this.variable, G, e) : this.isUndefined || this.object.includePath([this.propertyKey], e);
  }
  includePath(e, t) {
    var _a2;
    this.included || this.includeNode(t), this.variable ? (_a2 = this.variable) == null ? void 0 : _a2.includePath(e, t) : this.isUndefined || this.object.includePath([this.propertyKey, ...e.length < 6 ? e : [...e.slice(0, 6), ne]], t);
  }
  includeAsAssignmentTarget(e, t, s) {
    this.included || this.includeNodeAsAssignmentTarget(e), s && !this.deoptimized && this.applyDeoptimizations(), this.object.include(e, t), this.property.include(e, t);
  }
  includeCallArguments(e, t) {
    var s;
    this.variable ? this.variable.includeCallArguments(e, t) : Sr(this.object) || this.object.variable && !this.object.variable.isReassigned && this.object.variable instanceof et && (s = this.object.variable.init) instanceof z && s.type === "AwaitExpression" && Sr(this.object.variable.init.argument) ? kl(e, t) : Ur(e, t);
  }
  includeDestructuredIfNecessary() {
    this.scope.context.error({ message: "includeDestructuredIfNecessary is currently not supported for MemberExpressions" }, this.start);
  }
  initialise() {
    super.initialise(), this.dynamicPropertyKey = kd(this), this.propertyKey = this.dynamicPropertyKey === null ? ne : this.dynamicPropertyKey, this.accessInteraction = { args: [this.object], type: 0 };
  }
  render(e, t, { renderedParentType: s, isCalleeOfRenderedParent: i, renderedSurroundingElement: r } = ze) {
    if (this.variable || this.isUndefined) {
      const { snippets: { getPropertyAccess: o } } = t;
      let a = this.variable ? this.variable.getName(o) : "undefined";
      s && i && (a = "0, " + a), e.overwrite(this.start, this.end, a, { contentOnly: true, storeName: true });
    } else s && i && e.appendRight(this.start, "0, "), this.object.render(e, t, { renderedSurroundingElement: r }), this.property.render(e, t);
  }
  setAssignedValue(e) {
    this.assignmentInteraction = { args: [this.object, e], type: 1 };
  }
  applyDeoptimizations() {
    this.deoptimized = true;
    const { propertyReadSideEffects: e } = this.scope.context.options.treeshake;
    this.bound && e && !this.variable && !this.isUndefined && (this.object.deoptimizeArgumentsOnInteractionAtPath(this.accessInteraction, [this.propertyKey], xe), this.scope.context.requestTreeshakingPass()), this.variable && (this.variable.addUsedPlace(this), this.scope.context.requestTreeshakingPass());
  }
  applyAssignmentDeoptimization() {
    this.assignmentDeoptimized = true;
    const { propertyReadSideEffects: e } = this.scope.context.options.treeshake;
    this.bound && e && !this.variable && !this.isUndefined && (this.object.deoptimizeArgumentsOnInteractionAtPath(this.assignmentInteraction, [this.propertyKey], xe), this.scope.context.requestTreeshakingPass());
  }
  disallowNamespaceReassignment() {
    this.object instanceof pe && this.scope.findVariable(this.object.name).isNamespace && (this.variable && this.scope.context.includeVariableInModule(this.variable, U, nt()), this.scope.context.log(Q, ql(this.object.name, this.scope.context.module.id), this.start));
  }
  getDynamicPropertyKey() {
    if (this.dynamicPropertyKey === null) {
      this.dynamicPropertyKey = this.propertyKey;
      const e = this.property.getLiteralValueAtPath(G, xe, this);
      return this.dynamicPropertyKey = e === jr ? e : typeof e == "symbol" ? ne : String(e);
    }
    return this.dynamicPropertyKey;
  }
  hasAccessEffect(e) {
    const { propertyReadSideEffects: t } = this.scope.context.options.treeshake;
    return !(this.variable || this.isUndefined) && t && (t === "always" || this.object.hasEffectsOnInteractionAtPath([this.getDynamicPropertyKey()], this.accessInteraction, e));
  }
}
function gc(n, e, t) {
  if (e.length === 0) return n;
  if (!n.isNamespace || n instanceof es) return null;
  const s = e[0].key, [i, r] = n.context.traceExport(s);
  if (!i) {
    if (e.length === 1) {
      const o = n.context.fileName;
      return t.log(Q, Ks(s, t.module.id, o, !!(r == null ? void 0 : r.missingButExportExists)), e[0].pos), "undefined";
    }
    return null;
  }
  return gc(i, e.slice(1), t);
}
const Qi = "ROLLUP_FILE_URL_", er = "import";
class yc extends z {
  constructor() {
    super(...arguments), this.metaProperty = null, this.preliminaryChunkId = null, this.referenceId = null;
  }
  getReferencedFileName(e) {
    const { meta: { name: t }, metaProperty: s } = this;
    return t === er && (s == null ? void 0 : s.startsWith(Qi)) ? e.getFileName(s.slice(16)) : null;
  }
  hasEffects() {
    return false;
  }
  hasEffectsOnInteractionAtPath(e, { type: t }) {
    return e.length > 1 || t !== 0;
  }
  include() {
    this.included || this.includeNode();
  }
  includeNode() {
    if (this.included = true, this.meta.name === er) {
      this.scope.context.addImportMeta(this);
      const e = this.parent, t = this.metaProperty = e instanceof vt && typeof e.propertyKey == "string" ? e.propertyKey : null;
      (t == null ? void 0 : t.startsWith(Qi)) && (this.referenceId = t.slice(16));
    }
  }
  render(e, t) {
    var _a2;
    const { format: s, pluginDriver: i, snippets: r } = t, { scope: { context: { module: o } }, meta: { name: a }, metaProperty: l, parent: c, preliminaryChunkId: d, referenceId: p, start: h, end: f } = this, { id: E } = o;
    if (a !== er) return;
    const g = d;
    if (p) {
      const m = i.getFileName(p), b = Et(Jt(St(g), m)), x = i.hookFirstSync("resolveFileUrl", [{ chunkId: g, fileName: m, format: s, moduleId: E, referenceId: p, relativePath: b }]) || Dd[s](b);
      return void e.overwrite(c.start, c.end, x, { contentOnly: true });
    }
    let y = i.hookFirstSync("resolveImportMeta", [l, { chunkId: g, format: s, moduleId: E }]);
    y || (y = (_a2 = Od[s]) == null ? void 0 : _a2.call(Od, l, { chunkId: g, snippets: r }), t.accessedDocumentCurrentScript || (t.accessedDocumentCurrentScript = bc.includes(s) && y !== "undefined")), typeof y == "string" && (c instanceof vt ? e.overwrite(c.start, c.end, y, { contentOnly: true }) : e.overwrite(h, f, y, { contentOnly: true }));
  }
  setResolution(e, t, s) {
    var _a2;
    this.preliminaryChunkId = s;
    const i = (((_a2 = this.metaProperty) == null ? void 0 : _a2.startsWith(Qi)) ? Rd : Cd)[e];
    i.length > 0 && this.scope.addAccessedGlobals(i, t);
  }
}
const bc = ["cjs", "iife", "umd"], Cd = { amd: ["document", "module", "URL"], cjs: ["document", "require", "URL", At], es: [], iife: ["document", "URL", At], system: ["module"], umd: ["document", "require", "URL", At] }, Rd = { amd: ["document", "require", "URL"], cjs: ["document", "require", "URL"], es: [], iife: ["document", "URL"], system: ["module", "URL"], umd: ["document", "require", "URL"] }, Gn = (n, e = "URL") => `new ${e}(${n}).href`, tr = (n, e = false) => Gn(`'${kt(n)}', ${e ? "typeof document === 'undefined' ? location.href : " : ""}document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT' && document.currentScript.src || document.baseURI`), vs = (n) => (e, { chunkId: t }) => {
  const s = n(t);
  return e === null ? `({ url: ${s} })` : e === "url" ? s : "undefined";
}, Dr = (n) => `require('u' + 'rl').pathToFileURL(${n}).href`, ba = (n) => Dr(`__dirname + '/${kt(n)}'`), nr = (n, e = false) => `${e ? "typeof document === 'undefined' ? location.href : " : ""}(${At} && ${At}.tagName.toUpperCase() === 'SCRIPT' && ${At}.src || new URL('${kt(n)}', document.baseURI).href)`, Dd = { amd: (n) => (n[0] !== "." && (n = "./" + n), Gn(`require.toUrl('${kt(n)}'), document.baseURI`)), cjs: (n) => `(typeof document === 'undefined' ? ${ba(n)} : ${tr(n)})`, es: (n) => Gn(`'${kt(n)}', import.meta.url`), iife: (n) => tr(n), system: (n) => Gn(`'${kt(n)}', module.meta.url`), umd: (n) => `(typeof document === 'undefined' && typeof location === 'undefined' ? ${ba(n)} : ${tr(n, true)})` }, Od = { amd: vs(() => Gn("module.uri, document.baseURI")), cjs: vs((n) => `(typeof document === 'undefined' ? ${Dr("__filename")} : ${nr(n)})`), iife: vs((n) => nr(n)), system: (n, { snippets: { getPropertyAccess: e } }) => n === null ? "module.meta" : `module.meta${e(n)}`, umd: vs((n) => `(typeof document === 'undefined' && typeof location === 'undefined' ? ${Dr("__filename")} : ${nr(n, true)})`) };
class Ec extends sn {
  constructor() {
    super("undefined");
  }
  getLiteralValueAtPath() {
  }
}
class pt extends et {
  constructor(e, t, s) {
    super(e, t, t.declaration, G, s, "other"), this.hasId = false, this.originalId = null, this.originalVariable = null;
    const i = t.declaration;
    (i instanceof Pn || i instanceof vn) && i.id ? (this.hasId = true, this.originalId = i.id) : i instanceof pe && (this.originalId = i);
  }
  addReference(e) {
    this.hasId || (this.name = e.name);
  }
  addUsedPlace(e) {
    const t = this.getOriginalVariable();
    t === this ? super.addUsedPlace(e) : t.addUsedPlace(e);
  }
  forbidName(e) {
    const t = this.getOriginalVariable();
    t === this ? super.forbidName(e) : t.forbidName(e);
  }
  getAssignedVariableName() {
    return this.originalId && this.originalId.name || null;
  }
  getBaseVariableName() {
    const e = this.getOriginalVariable();
    return e === this ? super.getBaseVariableName() : e.getBaseVariableName();
  }
  getDirectOriginalVariable() {
    return !this.originalId || !this.hasId && (this.originalId.isPossibleTDZ() || this.originalId.variable.isReassigned || this.originalId.variable instanceof Ec || "syntheticNamespace" in this.originalId.variable) ? null : this.originalId.variable;
  }
  getName(e) {
    const t = this.getOriginalVariable();
    return t === this ? super.getName(e) : t.getName(e);
  }
  getOriginalVariable() {
    if (this.originalVariable) return this.originalVariable;
    let e, t = this;
    const s = /* @__PURE__ */ new Set();
    do
      s.add(t), e = t, t = e.getDirectOriginalVariable();
    while (t instanceof pt && !s.has(t));
    return this.originalVariable = t || e;
  }
}
class qt extends sn {
  constructor(e) {
    super(e.getModuleName()), this.memberVariables = null, this.mergedNamespaces = [], this.referencedEarly = false, this.references = [], this.context = e, this.module = e.module;
  }
  addReference(e) {
    this.references.push(e), this.name = e.name;
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    var _a2;
    if (t.length > 1 || t.length === 1 && e.type === 2) {
      const i = t[0];
      typeof i == "string" ? (_a2 = this.getMemberVariables()[i]) == null ? void 0 : _a2.deoptimizeArgumentsOnInteractionAtPath(e, t.slice(1), s) : Rt(e);
    }
  }
  deoptimizePath(e) {
    var _a2;
    if (e.length > 1) {
      const t = e[0];
      typeof t == "string" && ((_a2 = this.getMemberVariables()[t]) == null ? void 0 : _a2.deoptimizePath(e.slice(1)));
    }
  }
  getLiteralValueAtPath(e) {
    return e[0] === jr ? "Module" : oe;
  }
  getMemberVariables() {
    if (this.memberVariables) return this.memberVariables;
    const e = /* @__PURE__ */ Object.create(null), t = [...this.context.getExports(), ...this.context.getReexports()].sort();
    for (const s of t) if (s[0] !== "*" && s !== this.module.info.syntheticNamedExports) {
      const [i] = this.context.traceExport(s);
      i && (e[s] = i);
    }
    return this.memberVariables = e;
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    const { type: i } = t;
    if (e.length === 0) return true;
    if (e.length === 1 && i !== 2) return i === 1;
    const r = e[0];
    if (typeof r != "string") return true;
    const o = this.getMemberVariables()[r];
    return !o || o.hasEffectsOnInteractionAtPath(e.slice(1), t, s);
  }
  includePath(e, t) {
    super.includePath(e, t), this.context.includeAllExports();
  }
  prepare(e) {
    this.mergedNamespaces.length > 0 && this.module.scope.addAccessedGlobals([ti], e);
  }
  renderBlock(e) {
    const { exportNamesByVariable: t, format: s, freeze: i, indent: r, symbols: o, snippets: { _: a, cnst: l, getObject: c, getPropertyAccess: d, n: p, s: h } } = e, f = this.getMemberVariables(), E = Object.entries(f).filter(([y, m]) => m.included).map(([y, m]) => this.referencedEarly || m.isReassigned || m === this ? [null, `get ${Di(y)}${a}()${a}{${a}return ${m.getName(d)}${h}${a}}`] : [y, m.getName(d)]);
    E.unshift([null, `__proto__:${a}null`]);
    let g = c(E, { lineBreakIndent: { base: "", t: r } });
    if (this.mergedNamespaces.length > 0) {
      const y = this.mergedNamespaces.map((m) => m.getName(d));
      g = `/*#__PURE__*/${ti}(${g},${a}[${y.join(`,${a}`)}])`;
    } else o && (g = `/*#__PURE__*/Object.defineProperty(${g},${a}Symbol.toStringTag,${a}${ss(c)})`), i && (g = `/*#__PURE__*/Object.freeze(${g})`);
    return g = `${l} ${this.getName(d)}${a}=${a}${g};`, s === "system" && t.has(this) && (g += `${p}${nn([this], e)};`), g;
  }
  renderFirst() {
    return this.referencedEarly;
  }
  setMergedNamespaces(e) {
    this.mergedNamespaces = e;
    const t = this.context.getModuleExecIndex();
    for (const s of this.references) {
      const { context: i } = s.scope;
      if (i.getModuleExecIndex() <= t) {
        this.referencedEarly = true;
        break;
      }
    }
  }
}
qt.prototype.isNamespace = true;
class Ue extends sn {
  constructor(e, t, s) {
    super(t), this.baseVariable = null, this.context = e, this.module = e.module, this.syntheticNamespace = s;
  }
  getBaseVariable() {
    if (this.baseVariable) return this.baseVariable;
    let e = this.syntheticNamespace;
    for (; e instanceof pt || e instanceof Ue; ) {
      if (e instanceof pt) {
        const t = e.getOriginalVariable();
        if (t === e) break;
        e = t;
      }
      e instanceof Ue && (e = e.syntheticNamespace);
    }
    return this.baseVariable = e;
  }
  getBaseVariableName() {
    return this.syntheticNamespace.getBaseVariableName();
  }
  getName(e) {
    return `${this.syntheticNamespace.getName(e)}${e(this.name)}`;
  }
  includePath(e, t) {
    super.includePath(e, t), this.context.includeVariableInModule(this.syntheticNamespace, e, t);
  }
  setRenderNames(e, t) {
    super.setRenderNames(e, t);
  }
}
class Ft {
  constructor(e, t, s) {
    this.options = t, this.inputBase = s, this.defaultVariableName = "", this.namespaceVariableName = "", this.variableName = "", this.fileName = null, this.importAttributes = null, this.id = e.id, this.moduleInfo = e.info, this.renormalizeRenderPath = e.renormalizeRenderPath, this.suggestedVariableName = e.suggestedVariableName;
  }
  getFileName() {
    if (this.fileName) return this.fileName;
    const { paths: e } = this.options;
    return this.fileName = (typeof e == "function" ? e(this.id) : e[this.id]) || (this.renormalizeRenderPath ? Et(Jt(this.inputBase, this.id)) : this.id);
  }
  getImportAttributes(e) {
    return this.importAttributes || (this.importAttributes = xc(["es", "cjs"].includes(this.options.format) && this.options.externalImportAttributes && this.moduleInfo.attributes, e));
  }
  getImportPath(e) {
    return kt(this.renormalizeRenderPath ? Ol(e, this.getFileName(), this.options.format === "amd", false) : this.getFileName());
  }
}
function xc(n, { getObject: e }) {
  if (!n) return null;
  const t = Object.entries(n).map(([s, i]) => [s, `'${i}'`]);
  return t.length > 0 ? e(t, { lineBreakIndent: null }) : null;
}
function Ac(n) {
  return n.endsWith(".js") ? n.slice(0, -3) : n;
}
function Ea(n, e) {
  return n.autoId ? `${n.basePath ? n.basePath + "/" : ""}${Ac(e)}` : n.id ?? "";
}
function Ps(n, e, t, s, i, r, o, a, l = "return ") {
  const { _: c, getDirectReturnFunction: d, getFunctionIntro: p, getPropertyAccess: h, n: f, s: E } = i;
  if (!t) return `${f}${f}${l}${function(y, m, b, x, A) {
    if (y.length > 0) return y[0].local;
    for (const { defaultVariableName: S, importPath: w, isChunk: C, name: R, namedExportsMode: D, namespaceVariableName: v, reexports: I } of m) if (I) return xa(R, I[0].imported, D, C, S, v, b, w, x, A);
  }(n, e, s, o, h)};`;
  let g = "";
  if (t) {
    for (const { defaultVariableName: y, importPath: m, isChunk: b, name: x, namedExportsMode: A, namespaceVariableName: S, reexports: w } of e) if (w) {
      for (const C of w) if (C.reexported !== "*") {
        const R = xa(x, C.imported, A, b, y, S, s, m, o, h);
        if (g && (g += f), C.imported !== "*" && C.needsLiveBinding) {
          const [D, v] = d([], { functionReturn: true, lineBreakIndent: null, name: null });
          g += `Object.defineProperty(exports,${c}${JSON.stringify(C.reexported)},${c}{${f}${r}enumerable:${c}true,${f}${r}get:${c}${D}${R}${v}${f}});`;
        } else C.reexported === "__proto__" ? g += `Object.defineProperty(exports,${c}"__proto__",${c}{${f}${r}enumerable:${c}true,${f}${r}value:${c}${R}${f}});` : g += `exports${h(C.reexported)}${c}=${c}${R};`;
      }
    }
  }
  for (const { exported: y, local: m } of n) {
    const b = `exports${h(y)}`;
    b !== m && (g && (g += f), g += y === "__proto__" ? `Object.defineProperty(exports,${c}"__proto__",${c}{${f}${r}enumerable:${c}true,${f}${r}value:${c}${m}${f}});` : `${b}${c}=${c}${m};`);
  }
  if (t) {
    for (const { name: y, reexports: m } of e) if (m) {
      for (const b of m) if (b.reexported === "*") {
        if (g && (g += f), !b.needsLiveBinding && a) {
          const A = "'__proto__'";
          g += `Object.prototype.hasOwnProperty.call(${y},${c}${A})${c}&&${f}${r}!Object.prototype.hasOwnProperty.call(exports,${c}${A})${c}&&${f}${r}Object.defineProperty(exports,${c}${A},${c}{${f}${r}${r}enumerable:${c}true,${f}${r}${r}value:${c}${y}[${A}]${f}${r}});${f}${f}`;
        }
        const x = `{${f}${r}if${c}(k${c}!==${c}'default'${c}&&${c}!Object.prototype.hasOwnProperty.call(exports,${c}k))${c}${Ld(y, b.needsLiveBinding, r, i)}${E}${f}}`;
        g += `Object.keys(${y}).forEach(${p(["k"], { isAsync: false, name: null })}${x});`;
      }
    }
  }
  return g ? `${f}${f}${g}` : "";
}
function xa(n, e, t, s, i, r, o, a, l, c) {
  if (e === "default") {
    if (!s) {
      const d = o(a), p = Mi[d] ? i : n;
      return Ti(d, l) ? `${p}${c("default")}` : p;
    }
    return t ? `${n}${c("default")}` : n;
  }
  return e === "*" ? (s ? !t : bs[o(a)]) ? r : n : `${n}${c(e)}`;
}
function Aa(n) {
  return n([["value", "true"]], { lineBreakIndent: null });
}
function ws(n, e, t, { _: s, getObject: i }) {
  if (n) {
    if (e) return t ? `Object.defineProperties(exports,${s}${i([["__esModule", Aa(i)], [null, `[Symbol.toStringTag]:${s}${ss(i)}`]], { lineBreakIndent: null })});` : `Object.defineProperty(exports,${s}'__esModule',${s}${Aa(i)});`;
    if (t) return `Object.defineProperty(exports,${s}Symbol.toStringTag,${s}${ss(i)});`;
  }
  return "";
}
const Ld = (n, e, t, { _: s, getDirectReturnFunction: i, n: r }) => {
  if (e) {
    const [o, a] = i([], { functionReturn: true, lineBreakIndent: null, name: null });
    return `Object.defineProperty(exports,${s}k,${s}{${r}${t}${t}enumerable:${s}true,${r}${t}${t}get:${s}${o}${n}[k]${a}${r}${t}})`;
  }
  return `exports[k]${s}=${s}${n}[k]`;
};
function Is(n, e, t, s, i, r, o, a) {
  const { _: l, cnst: c, n: d } = a, p = /* @__PURE__ */ new Set(), h = [], f = (E, g, y) => {
    p.add(g), h.push(`${c} ${E}${l}=${l}/*#__PURE__*/${g}(${y});`);
  };
  for (const { defaultVariableName: E, imports: g, importPath: y, isChunk: m, name: b, namedExportsMode: x, namespaceVariableName: A, reexports: S } of n) if (m) {
    for (const { imported: w, reexported: C } of [...g || [], ...S || []]) if (w === "*" && C !== "*") {
      x || f(A, ns, b);
      break;
    }
  } else {
    const w = e(y);
    let C = false, R = false;
    for (const { imported: D, reexported: v } of [...g || [], ...S || []]) {
      let I, _;
      D === "default" ? C || (C = true, E !== A && (_ = E, I = Mi[w])) : D !== "*" || v === "*" || R || (R = true, I = bs[w], _ = A), I && f(_, I, b);
    }
  }
  return `${kr(p, r, o, a, t, s, i)}${h.length > 0 ? `${h.join(d)}${d}${d}` : ""}`;
}
function Sa(n, e) {
  return n[0] !== "." ? n : e ? (t = n).endsWith(".js") ? t : t + ".js" : Ac(n);
  var t;
}
const _d = /* @__PURE__ */ new Set(["node:assert", "assert", "node:assert/strict", "assert/strict", "node:async_hooks", "async_hooks", "node:buffer", "buffer", "node:child_process", "child_process", "node:cluster", "cluster", "node:console", "console", "node:constants", "constants", "node:crypto", "crypto", "node:dgram", "dgram", "node:diagnostics_channel", "diagnostics_channel", "node:dns", "dns", "node:dns/promises", "dns/promises", "node:domain", "domain", "node:events", "events", "node:fs", "fs", "node:fs/promises", "fs/promises", "node:http", "http", "node:http2", "http2", "node:https", "https", "node:inspector", "inspector", "node:inspector/promises", "inspector/promises", "node:module", "module", "node:net", "net", "node:os", "os", "node:path", "path", "node:path/posix", "path/posix", "node:path/win32", "path/win32", "node:perf_hooks", "perf_hooks", "node:process", "process", "node:querystring", "querystring", "node:quic", "node:readline", "readline", "node:readline/promises", "readline/promises", "node:repl", "repl", "node:sea", "node:sqlite", "node:stream", "stream", "node:stream/consumers", "stream/consumers", "node:stream/promises", "stream/promises", "node:stream/web", "stream/web", "node:string_decoder", "string_decoder", "node:test", "node:test/reporters", "node:timers", "timers", "node:timers/promises", "timers/promises", "node:tls", "tls", "node:trace_events", "trace_events", "node:tty", "tty", "node:url", "url", "node:util", "util", "node:util/types", "util/types", "node:v8", "v8", "node:vm", "vm", "node:wasi", "wasi", "node:worker_threads", "worker_threads", "node:zlib", "zlib"]);
function sr(n, e) {
  const t = e.map(({ importPath: s }) => s).filter((s) => _d.has(s) || s.startsWith("node:"));
  t.length !== 0 && n(Q, function(s) {
    return { code: "MISSING_NODE_BUILTINS", ids: s, message: `Creating a browser bundle that depends on Node.js built-in modules (${$t(s)}). You might need to include https://github.com/FredKSchott/rollup-plugin-polyfill-node` };
  }(t));
}
const Bs = (n, e) => n.split(".").map(e).join("");
function ir(n, e, t, s, { _: i, getPropertyAccess: r }, o) {
  const a = n.split("."), l = a[0] in Object.prototype;
  o && l && o(Q, Xl(a[0])), a[0] = (typeof t == "function" ? t(a[0]) : l ? a[0] : t[a[0]]) || a[0];
  const c = a.pop();
  let d = e, p = [...a.map((h) => (d += r(h), `${d}${i}=${i}${d}${i}||${i}{}`)), `${d}${r(c)}`].join(`,${i}`) + `${i}=${i}${s}`;
  return a.length > 0 && (p = `(${p})`), p;
}
function $a(n) {
  let e = n.length;
  for (; e--; ) {
    const { imports: t, reexports: s } = n[e];
    if (t || s) return n.slice(0, e + 1);
  }
  return [];
}
const wn = "_missingExportShim", Md = ({ dependencies: n, exports: e }) => {
  const t = new Set(e.map((s) => s.exported));
  t.add("default");
  for (const { reexports: s } of n) if (s) for (const i of s) i.reexported !== "*" && t.add(i.reexported);
  return t;
}, Td = (n, e, { _: t, cnst: s, getObject: i, n: r }) => {
  if (n) {
    const o = [...n].map((a) => [a, "1"]);
    return o.unshift([null, `__proto__:${t}null`]), `${r}${e}${s} _starExcludes${t}=${t}${i(o, { lineBreakIndent: { base: e, t: e } })};`;
  }
  return "";
}, Bd = (n, e, { _: t, n: s }) => n.length > 0 ? `${s}${e}var ${n.join(`,${t}`)};` : "", zd = (n, e, t) => io(n.filter((s) => s.hoisted).map((s) => ({ name: s.exported, value: s.local })), e, t);
function io(n, e, { _: t, n: s }) {
  return n.length === 0 ? "" : n.length === 1 ? `exports(${JSON.stringify(n[0].name)},${t}${n[0].value});${s}${s}` : `exports({${s}` + n.map(({ name: i, value: r }) => `${e}${Di(i)}:${t}${r}`).join(`,${s}`) + `${s}});${s}${s}`;
}
const Fd = (n, e, t) => io(n.filter((s) => s.expression).map((s) => ({ name: s.exported, value: s.local })), e, t), Vd = (n, e, t) => io(n.filter((s) => s.local === wn).map((s) => ({ name: s.exported, value: wn })), e, t);
function rr(n, e, t) {
  return n ? `${e}${Bs(n, t)}` : "null";
}
var jd = { amd: function(n, { accessedGlobals: e, dependencies: t, exports: s, hasDefaultExport: i, hasExports: r, id: o, indent: a, intro: l, isEntryFacade: c, isModuleFacade: d, namedExportsMode: p, log: h, outro: f, snippets: E }, { amd: g, esModule: y, externalLiveBindings: m, freeze: b, generatedCode: { symbols: x }, interop: A, reexportProtoFromExternal: S, strict: w }) {
  var _a2;
  sr(h, t);
  const C = t.map((V) => `'${Sa(V.importPath, g.forceJsExtensionForImports)}'`), R = t.map((V) => V.name), { n: D, getNonArrowFunctionIntro: v, _: I } = E;
  r && (p || ((_a2 = s[0]) == null ? void 0 : _a2.local) === "exports.default") && (R.unshift("exports"), C.unshift("'exports'")), e.has("require") && (R.unshift("require"), C.unshift("'require'")), e.has("module") && (R.unshift("module"), C.unshift("'module'"));
  const _ = Ea(g, o), K = (_ ? `'${_}',${I}` : "") + (C.length > 0 ? `[${C.join(`,${I}`)}],${I}` : ""), B = w ? `${I}'use strict';` : "";
  n.prepend(`${l}${Is(t, A, m, b, x, e, a, E)}`);
  const M = Ps(s, t, p, A, E, a, m, S);
  let F = ws(p && r, c && (y === true || y === "if-default-prop" && i), d && x, E);
  F && (F = D + D + F), n.append(`${M}${F}${f}`).indent(a).prepend(`${g.define}(${K}(${v(R, { isAsync: false, name: null })}{${B}${D}${D}`).append(`${D}${D}}));`);
}, cjs: function(n, { accessedGlobals: e, dependencies: t, exports: s, hasDefaultExport: i, hasExports: r, indent: o, intro: a, isEntryFacade: l, isModuleFacade: c, namedExportsMode: d, outro: p, snippets: h }, { compact: f, esModule: E, externalLiveBindings: g, freeze: y, interop: m, generatedCode: { symbols: b }, reexportProtoFromExternal: x, strict: A }) {
  const { _: S, n: w } = h, C = A ? `'use strict';${w}${w}` : "";
  let R = ws(d && r, l && (E === true || E === "if-default-prop" && i), c && b, h);
  R && (R += w + w);
  const D = function(_, { _: K, cnst: B, n: M }, F) {
    let V = "", q = false;
    for (const { importPath: J, name: $, reexports: ie, imports: ee } of _) ie || ee ? (V += F && q ? "," : `${V ? `;${M}` : ""}${B} `, q = true, V += `${$}${K}=${K}require('${J}')`) : (V && (V += F && !q ? "," : `;${M}`), q = false, V += `require('${J}')`);
    return V ? `${V};${M}${M}` : "";
  }(t, h, f), v = Is(t, m, g, y, b, e, o, h);
  n.prepend(`${C}${a}${R}${D}${v}`);
  const I = Ps(s, t, d, m, h, o, g, x, `module.exports${S}=${S}`);
  n.append(`${I}${p}`);
}, es: function(n, { accessedGlobals: e, indent: t, intro: s, outro: i, dependencies: r, exports: o, snippets: a }, { externalLiveBindings: l, freeze: c, generatedCode: { symbols: d }, importAttributesKey: p }) {
  const { n: h } = a, f = function(g, y, { _: m }) {
    const b = [];
    for (const { importPath: x, reexports: A, imports: S, name: w, attributes: C } of g) {
      const R = `'${x}'${C ? `${m}${y}${m}${C}` : ""};`;
      if (A || S) {
        if (S) {
          let D = null, v = null;
          const I = [];
          for (const _ of S) _.imported === "default" ? D = _ : _.imported === "*" ? v = _ : I.push(_);
          v && b.push(`import${m}*${m}as ${v.local} from${m}${R}`), D && I.length === 0 ? b.push(`import ${D.local} from${m}${R}`) : I.length > 0 && b.push(`import ${D ? `${D.local},${m}` : ""}{${m}${I.map((_) => _.imported === _.local ? _.imported : `${ln(_.imported)} as ${_.local}`).join(`,${m}`)}${m}}${m}from${m}${R}`);
        }
        if (A) {
          let D = null;
          const v = [], I = [];
          for (const _ of A) _.reexported === "*" ? D = _ : _.imported === "*" ? v.push(_) : I.push(_);
          if (D && b.push(`export${m}*${m}from${m}${R}`), v.length > 0) {
            S && S.some((_) => _.imported === "*" && _.local === w) || b.push(`import${m}*${m}as ${w} from${m}${R}`);
            for (const _ of v) b.push(`export${m}{${m}${w === _.reexported ? w : `${w} as ${ln(_.reexported)}`} };`);
          }
          I.length > 0 && b.push(`export${m}{${m}${I.map((_) => _.imported === _.reexported ? ln(_.imported) : `${ln(_.imported)} as ${ln(_.reexported)}`).join(`,${m}`)}${m}}${m}from${m}${R}`);
        }
      } else b.push(`import${m}${R}`);
    }
    return b;
  }(r, p, a);
  f.length > 0 && (s += f.join(h) + h + h), (s += kr(null, e, t, a, l, c, d)) && n.prepend(s);
  const E = function(g, { _: y, cnst: m }) {
    const b = [], x = new Array(g.length);
    let A = 0;
    for (const S of g) S.expression && b.push(`${m} ${S.local}${y}=${y}${S.expression};`), x[A++] = S.exported === S.local ? S.local : `${S.local} as ${ln(S.exported)}`;
    return x.length > 0 && b.push(`export${y}{${y}${x.join(`,${y}`)}${y}};`), b;
  }(o, a);
  E.length > 0 && n.append(h + h + E.join(h).trim()), i && n.append(i), n.trim();
}, iife: function(n, { accessedGlobals: e, dependencies: t, exports: s, hasDefaultExport: i, hasExports: r, indent: o, intro: a, namedExportsMode: l, log: c, outro: d, snippets: p }, { compact: h, esModule: f, extend: E, freeze: g, externalLiveBindings: y, reexportProtoFromExternal: m, globals: b, interop: x, name: A, generatedCode: { symbols: S }, strict: w }) {
  var _a2;
  const { _: C, getNonArrowFunctionIntro: R, getPropertyAccess: D, n: v } = p, I = A && A.includes("."), _ = !E && !I;
  if (A && _ && (Zl(K = A) || Yl.test(K))) return j(function(Y) {
    return { code: "ILLEGAL_IDENTIFIER_AS_NAME", message: `Given name "${Y}" is not a legal JS identifier. If you need this, you can try "output.extend: true".`, url: Re("configuration-options/#output-extend") };
  }(A));
  var K;
  sr(c, t);
  const B = $a(t), M = B.map((Y) => Y.globalName || "null"), F = B.map((Y) => Y.name);
  r && !A && c(Q, { code: Ko, message: 'If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.', url: Re(Wo) }), r && (l || ((_a2 = s[0]) == null ? void 0 : _a2.local) === "exports.default") && (E ? (M.unshift(`this${Bs(A, D)}${C}=${C}this${Bs(A, D)}${C}||${C}{}`), F.unshift("exports")) : (M.unshift("{}"), F.unshift("exports")));
  const V = w ? `${o}'use strict';${v}` : "", q = Is(t, x, y, g, S, e, o, p);
  n.prepend(`${a}${q}`);
  let J = `(${R(F, { isAsync: false, name: null })}{${v}${V}${v}`;
  r && (!A || E && l || (J = (_ ? `var ${A}` : `this${Bs(A, D)}`) + `${C}=${C}${J}`), I && (J = function(Y, N, P, { _: ce, getPropertyAccess: X, s: Ae }, Pe, ye) {
    const he = Y.split("."), rt = he[0] in Object.prototype;
    ye && rt && ye(Q, Xl(he[0])), he[0] = (typeof P == "function" ? P(he[0]) : rt ? he[0] : P[he[0]]) || he[0], he.pop();
    let Fe = N;
    return he.map((_e) => (Fe += X(_e), `${Fe}${ce}=${ce}${Fe}${ce}||${ce}{}${Ae}`)).join(Pe ? "," : `
`) + (Pe && he.length > 0 ? ";" : `
`);
  }(A, "this", b, p, h, c) + J));
  let $ = `${v}${v}})(${M.join(`,${C}`)});`;
  r && !E && l && ($ = `${v}${v}${o}return exports;${$}`);
  const ie = Ps(s, t, l, x, p, o, y, m);
  let ee = ws(l && r, f === true || f === "if-default-prop" && i, S, p);
  ee && (ee = v + v + ee), n.append(`${ie}${ee}${d}`).indent(o).prepend(J).append($);
}, system: function(n, { accessedGlobals: e, dependencies: t, exports: s, hasExports: i, indent: r, intro: o, snippets: a, outro: l, usesTopLevelAwait: c }, { externalLiveBindings: d, freeze: p, name: h, generatedCode: { symbols: f }, strict: E, systemNullSetters: g }) {
  const { _: y, getFunctionIntro: m, getNonArrowFunctionIntro: b, n: x, s: A } = a, { importBindings: S, setters: w, starExcludes: C } = function(_, K, B, { _: M, cnst: F, getObject: V, getPropertyAccess: q, n: J }) {
    const $ = [], ie = [];
    let ee = null;
    for (const { imports: Y, reexports: N } of _) {
      const P = [];
      if (Y) for (const ce of Y) $.push(ce.local), ce.imported === "*" ? P.push(`${ce.local}${M}=${M}module;`) : P.push(`${ce.local}${M}=${M}module${q(ce.imported)};`);
      if (N) {
        const ce = [];
        let X = false;
        for (const { imported: Ae, reexported: Pe } of N) Pe === "*" ? X = true : ce.push([Pe, Ae === "*" ? "module" : `module${q(Ae)}`]);
        if (ce.length > 1 || X) if (X) {
          ee || (ee = Md({ dependencies: _, exports: K })), ce.unshift([null, `__proto__:${M}null`]);
          const Ae = V(ce, { lineBreakIndent: null });
          P.push(`${F} setter${M}=${M}${Ae};`, `for${M}(${F} name in module)${M}{`, `${B}if${M}(!_starExcludes[name])${M}setter[name]${M}=${M}module[name];`, "}", "exports(setter);");
        } else {
          const Ae = V(ce, { lineBreakIndent: null });
          P.push(`exports(${Ae});`);
        }
        else {
          const [Ae, Pe] = ce[0];
          P.push(`exports(${JSON.stringify(Ae)},${M}${Pe});`);
        }
      }
      ie.push(P.join(`${J}${B}${B}${B}`));
    }
    return { importBindings: $, setters: ie, starExcludes: ee };
  }(t, s, r, a), R = h ? `'${h}',${y}` : "", D = e.has("module") ? ["exports", "module"] : i ? ["exports"] : [];
  let v = `System.register(${R}[` + t.map(({ importPath: _ }) => `'${_}'`).join(`,${y}`) + `],${y}(${b(D, { isAsync: false, name: null })}{${x}${r}${E ? "'use strict';" : ""}` + Td(C, r, a) + Bd(S, r, a) + `${x}${r}return${y}{${w.length > 0 ? `${x}${r}${r}setters:${y}[${w.map((_) => _ ? `${m(["module"], { isAsync: false, name: null })}{${x}${r}${r}${r}${_}${x}${r}${r}}` : g ? "null" : `${m([], { isAsync: false, name: null })}{}`).join(`,${y}`)}],` : ""}${x}`;
  v += `${r}${r}execute:${y}(${b([], { isAsync: c, name: null })}{${x}${x}`;
  const I = `${r}${r}})${x}${r}}${A}${x}}));`;
  n.prepend(o + kr(null, e, r, a, d, p, f) + zd(s, r, a)).append(`${l}${x}${x}` + Fd(s, r, a) + Vd(s, r, a)).indent(`${r}${r}${r}`).append(I).prepend(v);
}, umd: function(n, { accessedGlobals: e, dependencies: t, exports: s, hasDefaultExport: i, hasExports: r, id: o, indent: a, intro: l, namedExportsMode: c, log: d, outro: p, snippets: h }, { amd: f, compact: E, esModule: g, extend: y, externalLiveBindings: m, freeze: b, interop: x, name: A, generatedCode: { symbols: S }, globals: w, noConflict: C, reexportProtoFromExternal: R, strict: D }) {
  var _a2;
  const { _: v, cnst: I, getFunctionIntro: _, getNonArrowFunctionIntro: K, getPropertyAccess: B, n: M, s: F } = h, V = E ? "f" : "factory", q = E ? "g" : "global";
  if (r && !A) return j({ code: Ko, message: 'You must supply "output.name" for UMD bundles that have exports so that the exports are accessible in environments without a module loader.', url: Re(Wo) });
  sr(d, t);
  const J = t.map((T) => `'${Sa(T.importPath, f.forceJsExtensionForImports)}'`), $ = t.map((T) => `require('${T.importPath}')`), ie = $a(t), ee = ie.map((T) => rr(T.globalName, q, B)), Y = ie.map((T) => T.name);
  (r || C) && (c || r && ((_a2 = s[0]) == null ? void 0 : _a2.local) === "exports.default") && (J.unshift("'exports'"), $.unshift("exports"), ee.unshift(ir(A, q, w, (y ? `${rr(A, q, B)}${v}||${v}` : "") + "{}", h, d)), Y.unshift("exports"));
  const N = Ea(f, o), P = (N ? `'${N}',${v}` : "") + (J.length > 0 ? `[${J.join(`,${v}`)}],${v}` : ""), ce = f.define, X = !c && r ? `module.exports${v}=${v}` : "", Ae = D ? `${v}'use strict';${M}` : "";
  let Pe;
  if (C) {
    const T = E ? "e" : "exports";
    let re;
    !c && r ? re = `${I} ${T}${v}=${v}${ir(A, q, w, `${V}(${ee.join(`,${v}`)})`, h, d)};` : re = `${I} ${T}${v}=${v}${ee.shift()};${M}${a}${a}${V}(${[T, ...ee].join(`,${v}`)});`, Pe = `(${_([], { isAsync: false, name: null })}{${M}${a}${a}${I} current${v}=${v}${function(we, Ve, { _: Ie, getPropertyAccess: Ln }) {
      let on = Ve;
      return we.split(".").map((gu) => on += Ln(gu)).join(`${Ie}&&${Ie}`);
    }(A, q, h)};${M}${a}${a}${re}${M}${a}${a}${T}.noConflict${v}=${v}${_([], { isAsync: false, name: null })}{${v}${rr(A, q, B)}${v}=${v}current;${v}return ${T}${F}${v}};${M}${a}})()`;
  } else Pe = `${V}(${ee.join(`,${v}`)})`, !c && r && (Pe = ir(A, q, w, Pe, h, d));
  const ye = r || C && c || ee.length > 0, he = [V];
  ye && he.unshift(q);
  const rt = ye ? `this,${v}` : "", Fe = ye ? `(${q}${v}=${v}typeof globalThis${v}!==${v}'undefined'${v}?${v}globalThis${v}:${v}${q}${v}||${v}self,${v}` : "", _e = ye ? ")" : "", te = ye ? `${a}typeof exports${v}===${v}'object'${v}&&${v}typeof module${v}!==${v}'undefined'${v}?${v}${X}${V}(${$.join(`,${v}`)})${v}:${M}` : "", Oe = `(${K(he, { isAsync: false, name: null })}{${M}` + te + `${a}typeof ${ce}${v}===${v}'function'${v}&&${v}${ce}.amd${v}?${v}${ce}(${P}${V})${v}:${M}${a}${Fe}${Pe}${_e};${M}})(${rt}(${K(Y, { isAsync: false, name: null })}{${Ae}${M}`, On = M + M + "}));";
  n.prepend(`${l}${Is(t, x, m, b, S, e, a, h)}`);
  const W = Ps(s, t, c, x, h, a, m, R);
  let fe = ws(c && r, g === true || g === "if-default-prop" && i, S, h);
  fe && (fe = M + M + fe), n.append(`${W}${fe}${p}`).trim().indent(a).append(On).prepend(Oe);
} };
function Ud(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var or, va, Pa, ar, wa, Ia, Na, ka, Ca, Ra, Da, Oa = {};
function Bi() {
  if (va) return or;
  va = 1;
  const n = "\\\\/", e = `[^${n}]`, t = "\\.", s = "\\/", i = "[^/]", r = `(?:${s}|$)`, o = `(?:^|${s})`, a = `${t}{1,2}${r}`, l = { DOT_LITERAL: t, PLUS_LITERAL: "\\+", QMARK_LITERAL: "\\?", SLASH_LITERAL: s, ONE_CHAR: "(?=.)", QMARK: i, END_ANCHOR: r, DOTS_SLASH: a, NO_DOT: `(?!${t})`, NO_DOTS: `(?!${o}${a})`, NO_DOT_SLASH: `(?!${t}{0,1}${r})`, NO_DOTS_SLASH: `(?!${a})`, QMARK_NO_DOT: `[^.${s}]`, STAR: `${i}*?`, START_ANCHOR: o, SEP: "/" }, c = { ...l, SLASH_LITERAL: `[${n}]`, QMARK: e, STAR: `${e}*?`, DOTS_SLASH: `${t}{1,2}(?:[${n}]|$)`, NO_DOT: `(?!${t})`, NO_DOTS: `(?!(?:^|[${n}])${t}{1,2}(?:[${n}]|$))`, NO_DOT_SLASH: `(?!${t}{0,1}(?:[${n}]|$))`, NO_DOTS_SLASH: `(?!${t}{1,2}(?:[${n}]|$))`, QMARK_NO_DOT: `[^.${n}]`, START_ANCHOR: `(?:^|[${n}])`, END_ANCHOR: `(?:[${n}]|$)`, SEP: "\\" };
  return or = { MAX_LENGTH: 65536, POSIX_REGEX_SOURCE: { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" }, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { __proto__: null, "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars: (d) => ({ "!": { type: "negate", open: "(?:(?!(?:", close: `))${d.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } }), globChars: (d) => d === true ? c : l }, or;
}
function zi() {
  return Pa || (Pa = 1, function(n) {
    const { REGEX_BACKSLASH: e, REGEX_REMOVE_BACKSLASH: t, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: i } = Bi();
    n.isObject = (r) => r !== null && typeof r == "object" && !Array.isArray(r), n.hasRegexChars = (r) => s.test(r), n.isRegexChar = (r) => r.length === 1 && n.hasRegexChars(r), n.escapeRegex = (r) => r.replace(i, "\\$1"), n.toPosixSlashes = (r) => r.replace(e, "/"), n.isWindows = () => {
      if (typeof navigator < "u" && navigator.platform) {
        const r = navigator.platform.toLowerCase();
        return r === "win32" || r === "windows";
      }
      return !(typeof process > "u" || !process.platform) && process.platform === "win32";
    }, n.removeBackslashes = (r) => r.replace(t, (o) => o === "\\" ? "" : o), n.escapeLast = (r, o, a) => {
      const l = r.lastIndexOf(o, a);
      return l === -1 ? r : r[l - 1] === "\\" ? n.escapeLast(r, o, l - 1) : `${r.slice(0, l)}\\${r.slice(l)}`;
    }, n.removePrefix = (r, o = {}) => {
      let a = r;
      return a.startsWith("./") && (a = a.slice(2), o.prefix = "./"), a;
    }, n.wrapOutput = (r, o = {}, a = {}) => {
      let l = `${a.contains ? "" : "^"}(?:${r})${a.contains ? "" : "$"}`;
      return o.negated === true && (l = `(?:^(?!${l}).*$)`), l;
    }, n.basename = (r, { windows: o } = {}) => {
      const a = r.split(o ? /[\\/]/ : "/"), l = a[a.length - 1];
      return l === "" ? a[a.length - 2] : l;
    };
  }(Oa)), Oa;
}
function Gd() {
  if (wa) return ar;
  wa = 1;
  const n = zi(), { CHAR_ASTERISK: e, CHAR_AT: t, CHAR_BACKWARD_SLASH: s, CHAR_COMMA: i, CHAR_DOT: r, CHAR_EXCLAMATION_MARK: o, CHAR_FORWARD_SLASH: a, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: c, CHAR_LEFT_SQUARE_BRACKET: d, CHAR_PLUS: p, CHAR_QUESTION_MARK: h, CHAR_RIGHT_CURLY_BRACE: f, CHAR_RIGHT_PARENTHESES: E, CHAR_RIGHT_SQUARE_BRACKET: g } = Bi(), y = (b) => b === a || b === s, m = (b) => {
    b.isPrefix !== true && (b.depth = b.isGlobstar ? 1 / 0 : 1);
  };
  return ar = (b, x) => {
    const A = x || {}, S = b.length - 1, w = A.parts === true || A.scanToEnd === true, C = [], R = [], D = [];
    let v, I, _ = b, K = -1, B = 0, M = 0, F = false, V = false, q = false, J = false, $ = false, ie = false, ee = false, Y = false, N = false, P = false, ce = 0, X = { value: "", depth: 0, isGlob: false };
    const Ae = () => K >= S, Pe = () => _.charCodeAt(K + 1), ye = () => (v = I, _.charCodeAt(++K));
    for (; K < S; ) {
      let te;
      if (I = ye(), I !== s) {
        if (ie === true || I === l) {
          for (ce++; Ae() !== true && (I = ye()); ) if (I !== s) if (I !== l) {
            if (ie !== true && I === r && (I = ye()) === r) {
              if (F = X.isBrace = true, q = X.isGlob = true, P = true, w === true) continue;
              break;
            }
            if (ie !== true && I === i) {
              if (F = X.isBrace = true, q = X.isGlob = true, P = true, w === true) continue;
              break;
            }
            if (I === f && (ce--, ce === 0)) {
              ie = false, F = X.isBrace = true, P = true;
              break;
            }
          } else ce++;
          else ee = X.backslashes = true, ye();
          if (w === true) continue;
          break;
        }
        if (I !== a) {
          if (A.noext !== true && (I === p || I === t || I === e || I === h || I === o) && Pe() === c) {
            if (q = X.isGlob = true, J = X.isExtglob = true, P = true, I === o && K === B && (N = true), w === true) {
              for (; Ae() !== true && (I = ye()); ) if (I !== s) {
                if (I === E) {
                  q = X.isGlob = true, P = true;
                  break;
                }
              } else ee = X.backslashes = true, I = ye();
              continue;
            }
            break;
          }
          if (I === e) {
            if (v === e && ($ = X.isGlobstar = true), q = X.isGlob = true, P = true, w === true) continue;
            break;
          }
          if (I === h) {
            if (q = X.isGlob = true, P = true, w === true) continue;
            break;
          }
          if (I === d) {
            for (; Ae() !== true && (te = ye()); ) if (te !== s) {
              if (te === g) {
                V = X.isBracket = true, q = X.isGlob = true, P = true;
                break;
              }
            } else ee = X.backslashes = true, ye();
            if (w === true) continue;
            break;
          }
          if (A.nonegate === true || I !== o || K !== B) {
            if (A.noparen !== true && I === c) {
              if (q = X.isGlob = true, w === true) {
                for (; Ae() !== true && (I = ye()); ) if (I !== c) {
                  if (I === E) {
                    P = true;
                    break;
                  }
                } else ee = X.backslashes = true, I = ye();
                continue;
              }
              break;
            }
            if (q === true) {
              if (P = true, w === true) continue;
              break;
            }
          } else Y = X.negated = true, B++;
        } else {
          if (C.push(K), R.push(X), X = { value: "", depth: 0, isGlob: false }, P === true) continue;
          if (v === r && K === B + 1) {
            B += 2;
            continue;
          }
          M = K + 1;
        }
      } else ee = X.backslashes = true, I = ye(), I === l && (ie = true);
    }
    A.noext === true && (J = false, q = false);
    let he = _, rt = "", Fe = "";
    B > 0 && (rt = _.slice(0, B), _ = _.slice(B), M -= B), he && q === true && M > 0 ? (he = _.slice(0, M), Fe = _.slice(M)) : q === true ? (he = "", Fe = _) : he = _, he && he !== "" && he !== "/" && he !== _ && y(he.charCodeAt(he.length - 1)) && (he = he.slice(0, -1)), A.unescape === true && (Fe && (Fe = n.removeBackslashes(Fe)), he && ee === true && (he = n.removeBackslashes(he)));
    const _e = { prefix: rt, input: b, start: B, base: he, glob: Fe, isBrace: F, isBracket: V, isGlob: q, isExtglob: J, isGlobstar: $, negated: Y, negatedExtglob: N };
    if (A.tokens === true && (_e.maxDepth = 0, y(I) || R.push(X), _e.tokens = R), A.parts === true || A.tokens === true) {
      let te;
      for (let Oe = 0; Oe < C.length; Oe++) {
        const On = te ? te + 1 : B, W = C[Oe], fe = b.slice(On, W);
        A.tokens && (Oe === 0 && B !== 0 ? (R[Oe].isPrefix = true, R[Oe].value = rt) : R[Oe].value = fe, m(R[Oe]), _e.maxDepth += R[Oe].depth), Oe === 0 && fe === "" || D.push(fe), te = W;
      }
      if (te && te + 1 < b.length) {
        const Oe = b.slice(te + 1);
        D.push(Oe), A.tokens && (R[R.length - 1].value = Oe, m(R[R.length - 1]), _e.maxDepth += R[R.length - 1].depth);
      }
      _e.slashes = C, _e.parts = D;
    }
    return _e;
  }, ar;
}
function Hd() {
  if (Na) return Ia;
  Na = 1;
  const n = Bi(), e = zi(), { MAX_LENGTH: t, POSIX_REGEX_SOURCE: s, REGEX_NON_SPECIAL_CHARS: i, REGEX_SPECIAL_CHARS_BACKREF: r, REPLACEMENTS: o } = n, a = (d, p) => typeof p.expandRange == "function" ? p.expandRange(...d, p) : (d.sort(), `[${d.join("-")}]`), l = (d, p) => `Missing ${d}: "${p}" - use "\\\\${p}" to match literal characters`, c = (d, p) => {
    if (typeof d != "string") throw new TypeError("Expected a string");
    d = o[d] || d;
    const h = { ...p }, f = typeof h.maxLength == "number" ? Math.min(t, h.maxLength) : t;
    let E = d.length;
    if (E > f) throw new SyntaxError(`Input length: ${E}, exceeds maximum allowed length: ${f}`);
    const g = { type: "bos", value: "", output: h.prepend || "" }, y = [g], m = h.capture ? "" : "?:", b = n.globChars(h.windows), x = n.extglobChars(b), { DOT_LITERAL: A, PLUS_LITERAL: S, SLASH_LITERAL: w, ONE_CHAR: C, DOTS_SLASH: R, NO_DOT: D, NO_DOT_SLASH: v, NO_DOTS_SLASH: I, QMARK: _, QMARK_NO_DOT: K, STAR: B, START_ANCHOR: M } = b, F = (W) => `(${m}(?:(?!${M}${W.dot ? R : A}).)*?)`, V = h.dot ? "" : D, q = h.dot ? _ : K;
    let J = h.bash === true ? F(h) : B;
    h.capture && (J = `(${J})`), typeof h.noext == "boolean" && (h.noextglob = h.noext);
    const $ = { input: d, index: -1, start: 0, dot: h.dot === true, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: y };
    d = e.removePrefix(d, $), E = d.length;
    const ie = [], ee = [], Y = [];
    let N, P = g;
    const ce = () => $.index === E - 1, X = $.peek = (W = 1) => d[$.index + W], Ae = $.advance = () => d[++$.index] || "", Pe = () => d.slice($.index + 1), ye = (W = "", fe = 0) => {
      $.consumed += W, $.index += fe;
    }, he = (W) => {
      $.output += W.output != null ? W.output : W.value, ye(W.value);
    }, rt = () => {
      let W = 1;
      for (; X() === "!" && (X(2) !== "(" || X(3) === "?"); ) Ae(), $.start++, W++;
      return W % 2 != 0 && ($.negated = true, $.start++, true);
    }, Fe = (W) => {
      $[W]++, Y.push(W);
    }, _e = (W) => {
      $[W]--, Y.pop();
    }, te = (W) => {
      if (P.type === "globstar") {
        const fe = $.braces > 0 && (W.type === "comma" || W.type === "brace"), T = W.extglob === true || ie.length && (W.type === "pipe" || W.type === "paren");
        W.type === "slash" || W.type === "paren" || fe || T || ($.output = $.output.slice(0, -P.output.length), P.type = "star", P.value = "*", P.output = J, $.output += P.output);
      }
      if (ie.length && W.type !== "paren" && (ie[ie.length - 1].inner += W.value), (W.value || W.output) && he(W), P && P.type === "text" && W.type === "text") return P.output = (P.output || P.value) + W.value, void (P.value += W.value);
      W.prev = P, y.push(W), P = W;
    }, Oe = (W, fe) => {
      const T = { ...x[fe], conditions: 1, inner: "" };
      T.prev = P, T.parens = $.parens, T.output = $.output;
      const re = (h.capture ? "(" : "") + T.open;
      Fe("parens"), te({ type: W, value: fe, output: $.output ? "" : C }), te({ type: "paren", extglob: true, value: Ae(), output: re }), ie.push(T);
    }, On = (W) => {
      let fe, T = W.close + (h.capture ? ")" : "");
      if (W.type === "negate") {
        let re = J;
        if (W.inner && W.inner.length > 1 && W.inner.includes("/") && (re = F(h)), (re !== J || ce() || /^\)+$/.test(Pe())) && (T = W.close = `)$))${re}`), W.inner.includes("*") && (fe = Pe()) && /^\.[^\\/.]+$/.test(fe)) {
          const we = c(fe, { ...p, fastpaths: false }).output;
          T = W.close = `)${we})${re})`;
        }
        W.prev.type === "bos" && ($.negatedExtglob = true);
      }
      te({ type: "paren", extglob: true, value: N, output: T }), _e("parens");
    };
    if (h.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(d)) {
      let W = false, fe = d.replace(r, (T, re, we, Ve, Ie, Ln) => Ve === "\\" ? (W = true, T) : Ve === "?" ? re ? re + Ve + (Ie ? _.repeat(Ie.length) : "") : Ln === 0 ? q + (Ie ? _.repeat(Ie.length) : "") : _.repeat(we.length) : Ve === "." ? A.repeat(we.length) : Ve === "*" ? re ? re + Ve + (Ie ? J : "") : J : re ? T : `\\${T}`);
      return W === true && (fe = h.unescape === true ? fe.replace(/\\/g, "") : fe.replace(/\\+/g, (T) => T.length % 2 == 0 ? "\\\\" : T ? "\\" : "")), fe === d && h.contains === true ? ($.output = d, $) : ($.output = e.wrapOutput(fe, $, p), $);
    }
    for (; !ce(); ) {
      if (N = Ae(), N === "\0") continue;
      if (N === "\\") {
        const T = X();
        if (T === "/" && h.bash !== true || T === "." || T === ";") continue;
        if (!T) {
          N += "\\", te({ type: "text", value: N });
          continue;
        }
        const re = /^\\+/.exec(Pe());
        let we = 0;
        if (re && re[0].length > 2 && (we = re[0].length, $.index += we, we % 2 != 0 && (N += "\\")), h.unescape === true ? N = Ae() : N += Ae(), $.brackets === 0) {
          te({ type: "text", value: N });
          continue;
        }
      }
      if ($.brackets > 0 && (N !== "]" || P.value === "[" || P.value === "[^")) {
        if (h.posix !== false && N === ":") {
          const T = P.value.slice(1);
          if (T.includes("[") && (P.posix = true, T.includes(":"))) {
            const re = P.value.lastIndexOf("["), we = P.value.slice(0, re), Ve = P.value.slice(re + 2), Ie = s[Ve];
            if (Ie) {
              P.value = we + Ie, $.backtrack = true, Ae(), g.output || y.indexOf(P) !== 1 || (g.output = C);
              continue;
            }
          }
        }
        (N === "[" && X() !== ":" || N === "-" && X() === "]") && (N = `\\${N}`), N !== "]" || P.value !== "[" && P.value !== "[^" || (N = `\\${N}`), h.posix === true && N === "!" && P.value === "[" && (N = "^"), P.value += N, he({ value: N });
        continue;
      }
      if ($.quotes === 1 && N !== '"') {
        N = e.escapeRegex(N), P.value += N, he({ value: N });
        continue;
      }
      if (N === '"') {
        $.quotes = $.quotes === 1 ? 0 : 1, h.keepQuotes === true && te({ type: "text", value: N });
        continue;
      }
      if (N === "(") {
        Fe("parens"), te({ type: "paren", value: N });
        continue;
      }
      if (N === ")") {
        if ($.parens === 0 && h.strictBrackets === true) throw new SyntaxError(l("opening", "("));
        const T = ie[ie.length - 1];
        if (T && $.parens === T.parens + 1) {
          On(ie.pop());
          continue;
        }
        te({ type: "paren", value: N, output: $.parens ? ")" : "\\)" }), _e("parens");
        continue;
      }
      if (N === "[") {
        if (h.nobracket !== true && Pe().includes("]")) Fe("brackets");
        else {
          if (h.nobracket !== true && h.strictBrackets === true) throw new SyntaxError(l("closing", "]"));
          N = `\\${N}`;
        }
        te({ type: "bracket", value: N });
        continue;
      }
      if (N === "]") {
        if (h.nobracket === true || P && P.type === "bracket" && P.value.length === 1) {
          te({ type: "text", value: N, output: `\\${N}` });
          continue;
        }
        if ($.brackets === 0) {
          if (h.strictBrackets === true) throw new SyntaxError(l("opening", "["));
          te({ type: "text", value: N, output: `\\${N}` });
          continue;
        }
        _e("brackets");
        const T = P.value.slice(1);
        if (P.posix === true || T[0] !== "^" || T.includes("/") || (N = `/${N}`), P.value += N, he({ value: N }), h.literalBrackets === false || e.hasRegexChars(T)) continue;
        const re = e.escapeRegex(P.value);
        if ($.output = $.output.slice(0, -P.value.length), h.literalBrackets === true) {
          $.output += re, P.value = re;
          continue;
        }
        P.value = `(${m}${re}|${P.value})`, $.output += P.value;
        continue;
      }
      if (N === "{" && h.nobrace !== true) {
        Fe("braces");
        const T = { type: "brace", value: N, output: "(", outputIndex: $.output.length, tokensIndex: $.tokens.length };
        ee.push(T), te(T);
        continue;
      }
      if (N === "}") {
        const T = ee[ee.length - 1];
        if (h.nobrace === true || !T) {
          te({ type: "text", value: N, output: N });
          continue;
        }
        let re = ")";
        if (T.dots === true) {
          const we = y.slice(), Ve = [];
          for (let Ie = we.length - 1; Ie >= 0 && (y.pop(), we[Ie].type !== "brace"); Ie--) we[Ie].type !== "dots" && Ve.unshift(we[Ie].value);
          re = a(Ve, h), $.backtrack = true;
        }
        if (T.comma !== true && T.dots !== true) {
          const we = $.output.slice(0, T.outputIndex), Ve = $.tokens.slice(T.tokensIndex);
          T.value = T.output = "\\{", N = re = "\\}", $.output = we;
          for (const Ie of Ve) $.output += Ie.output || Ie.value;
        }
        te({ type: "brace", value: N, output: re }), _e("braces"), ee.pop();
        continue;
      }
      if (N === "|") {
        ie.length > 0 && ie[ie.length - 1].conditions++, te({ type: "text", value: N });
        continue;
      }
      if (N === ",") {
        let T = N;
        const re = ee[ee.length - 1];
        re && Y[Y.length - 1] === "braces" && (re.comma = true, T = "|"), te({ type: "comma", value: N, output: T });
        continue;
      }
      if (N === "/") {
        if (P.type === "dot" && $.index === $.start + 1) {
          $.start = $.index + 1, $.consumed = "", $.output = "", y.pop(), P = g;
          continue;
        }
        te({ type: "slash", value: N, output: w });
        continue;
      }
      if (N === ".") {
        if ($.braces > 0 && P.type === "dot") {
          P.value === "." && (P.output = A);
          const T = ee[ee.length - 1];
          P.type = "dots", P.output += N, P.value += N, T.dots = true;
          continue;
        }
        if ($.braces + $.parens === 0 && P.type !== "bos" && P.type !== "slash") {
          te({ type: "text", value: N, output: A });
          continue;
        }
        te({ type: "dot", value: N, output: A });
        continue;
      }
      if (N === "?") {
        if (!(P && P.value === "(") && h.noextglob !== true && X() === "(" && X(2) !== "?") {
          Oe("qmark", N);
          continue;
        }
        if (P && P.type === "paren") {
          const T = X();
          let re = N;
          (P.value === "(" && !/[!=<:]/.test(T) || T === "<" && !/<([!=]|\w+>)/.test(Pe())) && (re = `\\${N}`), te({ type: "text", value: N, output: re });
          continue;
        }
        if (h.dot !== true && (P.type === "slash" || P.type === "bos")) {
          te({ type: "qmark", value: N, output: K });
          continue;
        }
        te({ type: "qmark", value: N, output: _ });
        continue;
      }
      if (N === "!") {
        if (h.noextglob !== true && X() === "(" && (X(2) !== "?" || !/[!=<:]/.test(X(3)))) {
          Oe("negate", N);
          continue;
        }
        if (h.nonegate !== true && $.index === 0) {
          rt();
          continue;
        }
      }
      if (N === "+") {
        if (h.noextglob !== true && X() === "(" && X(2) !== "?") {
          Oe("plus", N);
          continue;
        }
        if (P && P.value === "(" || h.regex === false) {
          te({ type: "plus", value: N, output: S });
          continue;
        }
        if (P && (P.type === "bracket" || P.type === "paren" || P.type === "brace") || $.parens > 0) {
          te({ type: "plus", value: N });
          continue;
        }
        te({ type: "plus", value: S });
        continue;
      }
      if (N === "@") {
        if (h.noextglob !== true && X() === "(" && X(2) !== "?") {
          te({ type: "at", extglob: true, value: N, output: "" });
          continue;
        }
        te({ type: "text", value: N });
        continue;
      }
      if (N !== "*") {
        N !== "$" && N !== "^" || (N = `\\${N}`);
        const T = i.exec(Pe());
        T && (N += T[0], $.index += T[0].length), te({ type: "text", value: N });
        continue;
      }
      if (P && (P.type === "globstar" || P.star === true)) {
        P.type = "star", P.star = true, P.value += N, P.output = J, $.backtrack = true, $.globstar = true, ye(N);
        continue;
      }
      let W = Pe();
      if (h.noextglob !== true && /^\([^?]/.test(W)) {
        Oe("star", N);
        continue;
      }
      if (P.type === "star") {
        if (h.noglobstar === true) {
          ye(N);
          continue;
        }
        const T = P.prev, re = T.prev, we = T.type === "slash" || T.type === "bos", Ve = re && (re.type === "star" || re.type === "globstar");
        if (h.bash === true && (!we || W[0] && W[0] !== "/")) {
          te({ type: "star", value: N, output: "" });
          continue;
        }
        const Ie = $.braces > 0 && (T.type === "comma" || T.type === "brace"), Ln = ie.length && (T.type === "pipe" || T.type === "paren");
        if (!we && T.type !== "paren" && !Ie && !Ln) {
          te({ type: "star", value: N, output: "" });
          continue;
        }
        for (; W.slice(0, 3) === "/**"; ) {
          const on = d[$.index + 4];
          if (on && on !== "/") break;
          W = W.slice(3), ye("/**", 3);
        }
        if (T.type === "bos" && ce()) {
          P.type = "globstar", P.value += N, P.output = F(h), $.output = P.output, $.globstar = true, ye(N);
          continue;
        }
        if (T.type === "slash" && T.prev.type !== "bos" && !Ve && ce()) {
          $.output = $.output.slice(0, -(T.output + P.output).length), T.output = `(?:${T.output}`, P.type = "globstar", P.output = F(h) + (h.strictSlashes ? ")" : "|$)"), P.value += N, $.globstar = true, $.output += T.output + P.output, ye(N);
          continue;
        }
        if (T.type === "slash" && T.prev.type !== "bos" && W[0] === "/") {
          const on = W[1] !== void 0 ? "|$" : "";
          $.output = $.output.slice(0, -(T.output + P.output).length), T.output = `(?:${T.output}`, P.type = "globstar", P.output = `${F(h)}${w}|${w}${on})`, P.value += N, $.output += T.output + P.output, $.globstar = true, ye(N + Ae()), te({ type: "slash", value: "/", output: "" });
          continue;
        }
        if (T.type === "bos" && W[0] === "/") {
          P.type = "globstar", P.value += N, P.output = `(?:^|${w}|${F(h)}${w})`, $.output = P.output, $.globstar = true, ye(N + Ae()), te({ type: "slash", value: "/", output: "" });
          continue;
        }
        $.output = $.output.slice(0, -P.output.length), P.type = "globstar", P.output = F(h), P.value += N, $.output += P.output, $.globstar = true, ye(N);
        continue;
      }
      const fe = { type: "star", value: N, output: J };
      h.bash !== true ? !P || P.type !== "bracket" && P.type !== "paren" || h.regex !== true ? ($.index !== $.start && P.type !== "slash" && P.type !== "dot" || (P.type === "dot" ? ($.output += v, P.output += v) : h.dot === true ? ($.output += I, P.output += I) : ($.output += V, P.output += V), X() !== "*" && ($.output += C, P.output += C)), te(fe)) : (fe.output = N, te(fe)) : (fe.output = ".*?", P.type !== "bos" && P.type !== "slash" || (fe.output = V + fe.output), te(fe));
    }
    for (; $.brackets > 0; ) {
      if (h.strictBrackets === true) throw new SyntaxError(l("closing", "]"));
      $.output = e.escapeLast($.output, "["), _e("brackets");
    }
    for (; $.parens > 0; ) {
      if (h.strictBrackets === true) throw new SyntaxError(l("closing", ")"));
      $.output = e.escapeLast($.output, "("), _e("parens");
    }
    for (; $.braces > 0; ) {
      if (h.strictBrackets === true) throw new SyntaxError(l("closing", "}"));
      $.output = e.escapeLast($.output, "{"), _e("braces");
    }
    if (h.strictSlashes === true || P.type !== "star" && P.type !== "bracket" || te({ type: "maybe_slash", value: "", output: `${w}?` }), $.backtrack === true) {
      $.output = "";
      for (const W of $.tokens) $.output += W.output != null ? W.output : W.value, W.suffix && ($.output += W.suffix);
    }
    return $;
  };
  return c.fastpaths = (d, p) => {
    const h = { ...p }, f = typeof h.maxLength == "number" ? Math.min(t, h.maxLength) : t, E = d.length;
    if (E > f) throw new SyntaxError(`Input length: ${E}, exceeds maximum allowed length: ${f}`);
    d = o[d] || d;
    const { DOT_LITERAL: g, SLASH_LITERAL: y, ONE_CHAR: m, DOTS_SLASH: b, NO_DOT: x, NO_DOTS: A, NO_DOTS_SLASH: S, STAR: w, START_ANCHOR: C } = n.globChars(h.windows), R = h.dot ? A : x, D = h.dot ? S : x, v = h.capture ? "" : "?:";
    let I = h.bash === true ? ".*?" : w;
    h.capture && (I = `(${I})`);
    const _ = (F) => F.noglobstar === true ? I : `(${v}(?:(?!${C}${F.dot ? b : g}).)*?)`, K = (F) => {
      switch (F) {
        case "*":
          return `${R}${m}${I}`;
        case ".*":
          return `${g}${m}${I}`;
        case "*.*":
          return `${R}${I}${g}${m}${I}`;
        case "*/*":
          return `${R}${I}${y}${m}${D}${I}`;
        case "**":
          return R + _(h);
        case "**/*":
          return `(?:${R}${_(h)}${y})?${D}${m}${I}`;
        case "**/*.*":
          return `(?:${R}${_(h)}${y})?${D}${I}${g}${m}${I}`;
        case "**/.*":
          return `(?:${R}${_(h)}${y})?${g}${m}${I}`;
        default: {
          const V = /^(.*?)\.(\w+)$/.exec(F);
          if (!V) return;
          const q = K(V[1]);
          return q ? q + g + V[2] : void 0;
        }
      }
    }, B = e.removePrefix(d, { negated: false, prefix: "" });
    let M = K(B);
    return M && h.strictSlashes !== true && (M += `${y}?`), M;
  }, Ia = c;
}
function Wd() {
  if (Ca) return ka;
  Ca = 1;
  const n = Gd(), e = Hd(), t = zi(), s = Bi(), i = (r, o, a = false) => {
    if (Array.isArray(r)) {
      const y = r.map((b) => i(b, o, a));
      return (b) => {
        for (const x of y) {
          const A = x(b);
          if (A) return A;
        }
        return false;
      };
    }
    const l = (c = r) && typeof c == "object" && !Array.isArray(c) && r.tokens && r.input;
    var c;
    if (r === "" || typeof r != "string" && !l) throw new TypeError("Expected pattern to be a non-empty string");
    const d = o || {}, p = d.windows, h = l ? i.compileRe(r, o) : i.makeRe(r, o, false, true), f = h.state;
    delete h.state;
    let E = () => false;
    if (d.ignore) {
      const y = { ...o, ignore: null, onMatch: null, onResult: null };
      E = i(d.ignore, y, a);
    }
    const g = (y, m = false) => {
      const { isMatch: b, match: x, output: A } = i.test(y, h, o, { glob: r, posix: p }), S = { glob: r, state: f, regex: h, posix: p, input: y, output: A, match: x, isMatch: b };
      return typeof d.onResult == "function" && d.onResult(S), b === false ? (S.isMatch = false, !!m && S) : E(y) ? (typeof d.onIgnore == "function" && d.onIgnore(S), S.isMatch = false, !!m && S) : (typeof d.onMatch == "function" && d.onMatch(S), !m || S);
    };
    return a && (g.state = f), g;
  };
  return i.test = (r, o, a, { glob: l, posix: c } = {}) => {
    if (typeof r != "string") throw new TypeError("Expected input to be a string");
    if (r === "") return { isMatch: false, output: "" };
    const d = a || {}, p = d.format || (c ? t.toPosixSlashes : null);
    let h = r === l, f = h && p ? p(r) : r;
    return h === false && (f = p ? p(r) : r, h = f === l), h !== false && d.capture !== true || (h = d.matchBase === true || d.basename === true ? i.matchBase(r, o, a, c) : o.exec(f)), { isMatch: !!h, match: h, output: f };
  }, i.matchBase = (r, o, a) => (o instanceof RegExp ? o : i.makeRe(o, a)).test(t.basename(r)), i.isMatch = (r, o, a) => i(o, a)(r), i.parse = (r, o) => Array.isArray(r) ? r.map((a) => i.parse(a, o)) : e(r, { ...o, fastpaths: false }), i.scan = (r, o) => n(r, o), i.compileRe = (r, o, a = false, l = false) => {
    if (a === true) return r.output;
    const c = o || {}, d = c.contains ? "" : "^", p = c.contains ? "" : "$";
    let h = `${d}(?:${r.output})${p}`;
    r && r.negated === true && (h = `^(?!${h}).*$`);
    const f = i.toRegex(h, o);
    return l === true && (f.state = r), f;
  }, i.makeRe = (r, o = {}, a = false, l = false) => {
    if (!r || typeof r != "string") throw new TypeError("Expected a non-empty string");
    let c = { negated: false, fastpaths: true };
    return o.fastpaths === false || r[0] !== "." && r[0] !== "*" || (c.output = e.fastpaths(r, o)), c.output || (c = e(r, o)), i.compileRe(c, o, a, l);
  }, i.toRegex = (r, o) => {
    try {
      const a = o || {};
      return new RegExp(r, a.flags || (a.nocase ? "i" : ""));
    } catch (a) {
      if (o && o.debug === true) throw a;
      return /$^/;
    }
  }, i.constants = s, ka = i;
}
function qd() {
  if (Da) return Ra;
  Da = 1;
  const n = Wd(), e = zi();
  function t(s, i, r = false) {
    return !i || i.windows !== null && i.windows !== void 0 || (i = { ...i, windows: e.isWindows() }), n(s, i, r);
  }
  return Object.assign(t, n), Ra = t;
}
var Kd = Ud(qd());
const hn = { ArrayPattern(n, e) {
  for (const t of e.elements) t && hn[t.type](n, t);
}, AssignmentPattern(n, e) {
  hn[e.left.type](n, e.left);
}, Identifier(n, e) {
  n.push(e.name);
}, MemberExpression() {
}, ObjectPattern(n, e) {
  for (const t of e.properties) t.type === "RestElement" ? hn.RestElement(n, t) : hn[t.value.type](n, t.value);
}, RestElement(n, e) {
  hn[e.argument.type](n, e.argument);
} }, Xd = function(n) {
  const e = [];
  return hn[n.type](e, n), e;
};
let Ee;
new Set("break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl".split(" ")).add("");
const bt = new Array(128).fill(void 0);
function _t(n) {
  return bt[n];
}
bt.push(void 0, null, true, false);
let Hn = bt.length;
function Vt(n) {
  Hn === bt.length && bt.push(bt.length + 1);
  const e = Hn;
  return Hn = bt[e], bt[e] = n, e;
}
let Vn = null;
function Wn() {
  return Vn !== null && Vn.byteLength !== 0 || (Vn = new Uint8Array(Ee.memory.buffer)), Vn;
}
let zs = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && zs.decode();
let lr = 0;
function is(n, e) {
  return function(t, s) {
    return lr += s, lr >= 2146435072 && (zs = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
      throw Error("TextDecoder not available");
    } }, zs.decode(), lr = s), zs.decode(Wn().subarray(t, t + s));
  }(n >>>= 0, e);
}
let ni = 0;
const Fs = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Jd = typeof Fs.encodeInto == "function" ? function(n, e) {
  return Fs.encodeInto(n, e);
} : function(n, e) {
  const t = Fs.encode(n);
  return e.set(t), { read: n.length, written: t.length };
};
function Sc(n, e, t) {
  if (t === void 0) {
    const a = Fs.encode(n), l = e(a.length, 1) >>> 0;
    return Wn().subarray(l, l + a.length).set(a), ni = a.length, l;
  }
  let s = n.length, i = e(s, 1) >>> 0;
  const r = Wn();
  let o = 0;
  for (; o < s; o++) {
    const a = n.charCodeAt(o);
    if (a > 127) break;
    r[i + o] = a;
  }
  if (o !== s) {
    o !== 0 && (n = n.slice(o)), i = t(i, s, s = o + 3 * n.length, 1) >>> 0;
    const a = Wn().subarray(i + o, i + s);
    o += Jd(n, a).written, i = t(i, s, o, 1) >>> 0;
  }
  return ni = o, i;
}
let Mt = null;
function lt() {
  return (Mt === null || Mt.buffer.detached === true || Mt.buffer.detached === void 0 && Mt.buffer !== Ee.memory.buffer) && (Mt = new DataView(Ee.memory.buffer)), Mt;
}
function Yd(n) {
  const e = _t(n);
  return function(t) {
    t < 132 || (bt[t] = Hn, Hn = t);
  }(n), e;
}
function $c(n, e, t) {
  try {
    const l = Ee.__wbindgen_add_to_stack_pointer(-16), c = Sc(n, Ee.__wbindgen_export_1, Ee.__wbindgen_export_2), d = ni;
    Ee.parse(l, c, d, e, t);
    var s = lt().getInt32(l + 0, true), i = lt().getInt32(l + 4, true), r = (o = s, a = i, o >>>= 0, Wn().subarray(o / 1, o / 1 + a)).slice();
    return Ee.__wbindgen_export_0(s, 1 * i, 1), r;
  } finally {
    Ee.__wbindgen_add_to_stack_pointer(16);
  }
  var o, a;
}
const Zd = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function vc(n) {
  if (Ee !== void 0) return Ee;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), n === void 0 && (n = new URL("" + new URL("../assets/bindings_wasm_bg.9w8E-TmY.wasm", import.meta.url).href, import.meta.url));
  const e = function() {
    const i = { wbg: {} };
    return i.wbg.__wbg_buffer_a1a27a0dfa70165d = function(r) {
      return Vt(_t(r).buffer);
    }, i.wbg.__wbg_error_7534b8e9a36f1ab4 = function(r, o) {
      let a, l;
      try {
        a = r, l = o, console.error(is(r, o));
      } finally {
        Ee.__wbindgen_export_0(a, l, 1);
      }
    }, i.wbg.__wbg_length_ab6d22b5ead75c72 = function(r) {
      return _t(r).length;
    }, i.wbg.__wbg_new_8a6f238a6ece86ea = function() {
      return Vt(new Error());
    }, i.wbg.__wbg_new_e52b3efaaa774f96 = function(r) {
      return Vt(new Uint8Array(_t(r)));
    }, i.wbg.__wbg_set_fe4e79d1ed3b0e9b = function(r, o, a) {
      _t(r).set(_t(o), a >>> 0);
    }, i.wbg.__wbg_stack_0ed75d68575b0f3c = function(r, o) {
      const a = Sc(_t(o).stack, Ee.__wbindgen_export_1, Ee.__wbindgen_export_2), l = ni;
      lt().setInt32(r + 4, l, true), lt().setInt32(r + 0, a, true);
    }, i.wbg.__wbindgen_memory = function() {
      return Vt(Ee.memory);
    }, i.wbg.__wbindgen_object_drop_ref = function(r) {
      Yd(r);
    }, i.wbg.__wbindgen_throw = function(r, o) {
      throw new Error(is(r, o));
    }, i;
  }();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const { instance: t, module: s } = await async function(i, r) {
    if (typeof Response == "function" && i instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(i, r);
      } catch (a) {
        if (!i.ok || !Zd.has(i.type) || i.headers.get("Content-Type") === "application/wasm") throw a;
        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", a);
      }
      const o = await i.arrayBuffer();
      return await WebAssembly.instantiate(o, r);
    }
    {
      const o = await WebAssembly.instantiate(i, r);
      return o instanceof WebAssembly.Instance ? { instance: o, module: i } : o;
    }
  }(await n, e);
  return function(i, r) {
    return Ee = i.exports, vc.__wbindgen_wasm_module = r, Mt = null, Vn = null, Ee;
  }(t, s);
}
const Qd = [function(n, e) {
  return { type: "PanicError", start: e[n], end: e[n + 1], message: e.convertString(e[n + 2]) };
}, function(n, e) {
  return { type: "ParseError", start: e[n], end: e[n + 1], message: e.convertString(e[n + 2]) };
}, function(n, e) {
  return { type: "ArrayExpression", start: e[n], end: e[n + 1], elements: me(e[n + 2], e) };
}, function(n, e) {
  return { type: "ArrayPattern", start: e[n], end: e[n + 1], elements: me(e[n + 2], e) };
}, function(n, e) {
  const t = e[n + 2], s = Qe(e[n + 3], e);
  return { type: "ArrowFunctionExpression", start: e[n], end: e[n + 1], async: !(1 & ~t), expression: !(2 & ~t), generator: !(4 & ~t), ...s.length > 0 ? { [un]: s } : {}, params: me(e[n + 4], e), body: L(e[n + 5], e), id: null };
}, function(n, e) {
  return { type: "AssignmentExpression", start: e[n], end: e[n + 1], operator: je[e[n + 2]], left: L(e[n + 3], e), right: L(e[n + 4], e) };
}, function(n, e) {
  return { type: "AssignmentPattern", start: e[n], end: e[n + 1], left: L(e[n + 2], e), right: L(e[n + 3], e) };
}, function(n, e) {
  return { type: "AwaitExpression", start: e[n], end: e[n + 1], argument: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "BinaryExpression", start: e[n], end: e[n + 1], operator: je[e[n + 2]], left: L(e[n + 3], e), right: L(e[n + 4], e) };
}, function(n, e) {
  return { type: "BlockStatement", start: e[n], end: e[n + 1], body: me(e[n + 2], e) };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "BreakStatement", start: e[n], end: e[n + 1], label: t === 0 ? null : L(t, e) };
}, function(n, e) {
  const t = e[n + 2], s = Qe(e[n + 3], e);
  return { type: "CallExpression", start: e[n], end: e[n + 1], optional: !(1 & ~t), ...s.length > 0 ? { [un]: s } : {}, callee: L(e[n + 4], e), arguments: me(e[n + 5], e) };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "CatchClause", start: e[n], end: e[n + 1], param: t === 0 ? null : L(t, e), body: L(e[n + 3], e) };
}, function(n, e) {
  return { type: "ChainExpression", start: e[n], end: e[n + 1], expression: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "ClassBody", start: e[n], end: e[n + 1], body: me(e[n + 2], e) };
}, function(n, e) {
  const t = e[n + 3], s = e[n + 4];
  return { type: "ClassDeclaration", start: e[n], end: e[n + 1], decorators: me(e[n + 2], e), id: t === 0 ? null : L(t, e), superClass: s === 0 ? null : L(s, e), body: L(e[n + 5], e) };
}, function(n, e) {
  const t = e[n + 3], s = e[n + 4];
  return { type: "ClassExpression", start: e[n], end: e[n + 1], decorators: me(e[n + 2], e), id: t === 0 ? null : L(t, e), superClass: s === 0 ? null : L(s, e), body: L(e[n + 5], e) };
}, function(n, e) {
  return { type: "ConditionalExpression", start: e[n], end: e[n + 1], test: L(e[n + 2], e), consequent: L(e[n + 3], e), alternate: L(e[n + 4], e) };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "ContinueStatement", start: e[n], end: e[n + 1], label: t === 0 ? null : L(t, e) };
}, function(n, e) {
  return { type: "DebuggerStatement", start: e[n], end: e[n + 1] };
}, function(n, e) {
  return { type: "Decorator", start: e[n], end: e[n + 1], expression: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "ExpressionStatement", start: e[n], end: e[n + 1], directive: e.convertString(e[n + 2]), expression: L(e[n + 3], e) };
}, function(n, e) {
  return { type: "DoWhileStatement", start: e[n], end: e[n + 1], body: L(e[n + 2], e), test: L(e[n + 3], e) };
}, function(n, e) {
  return { type: "EmptyStatement", start: e[n], end: e[n + 1] };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "ExportAllDeclaration", start: e[n], end: e[n + 1], exported: t === 0 ? null : L(t, e), source: L(e[n + 3], e), attributes: me(e[n + 4], e) };
}, function(n, e) {
  return { type: "ExportDefaultDeclaration", start: e[n], end: e[n + 1], declaration: L(e[n + 2], e) };
}, function(n, e) {
  const t = e[n + 3], s = e[n + 5];
  return { type: "ExportNamedDeclaration", start: e[n], end: e[n + 1], specifiers: me(e[n + 2], e), source: t === 0 ? null : L(t, e), attributes: me(e[n + 4], e), declaration: s === 0 ? null : L(s, e) };
}, function(n, e) {
  const t = L(e[n + 2], e), s = e[n + 3];
  return { type: "ExportSpecifier", start: e[n], end: e[n + 1], local: t, exported: s === 0 ? { ...t } : L(s, e) };
}, function(n, e) {
  return { type: "ExpressionStatement", start: e[n], end: e[n + 1], expression: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "ForInStatement", start: e[n], end: e[n + 1], left: L(e[n + 2], e), right: L(e[n + 3], e), body: L(e[n + 4], e) };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "ForOfStatement", start: e[n], end: e[n + 1], await: !(1 & ~t), left: L(e[n + 3], e), right: L(e[n + 4], e), body: L(e[n + 5], e) };
}, function(n, e) {
  const t = e[n + 2], s = e[n + 3], i = e[n + 4];
  return { type: "ForStatement", start: e[n], end: e[n + 1], init: t === 0 ? null : L(t, e), test: s === 0 ? null : L(s, e), update: i === 0 ? null : L(i, e), body: L(e[n + 5], e) };
}, function(n, e) {
  const t = e[n + 2], s = Qe(e[n + 3], e), i = e[n + 4];
  return { type: "FunctionDeclaration", start: e[n], end: e[n + 1], async: !(1 & ~t), generator: !(2 & ~t), ...s.length > 0 ? { [un]: s } : {}, id: i === 0 ? null : L(i, e), params: me(e[n + 5], e), body: L(e[n + 6], e), expression: false };
}, function(n, e) {
  const t = e[n + 2], s = Qe(e[n + 3], e), i = e[n + 4];
  return { type: "FunctionExpression", start: e[n], end: e[n + 1], async: !(1 & ~t), generator: !(2 & ~t), ...s.length > 0 ? { [un]: s } : {}, id: i === 0 ? null : L(i, e), params: me(e[n + 5], e), body: L(e[n + 6], e), expression: false };
}, function(n, e) {
  return { type: "Identifier", start: e[n], end: e[n + 1], name: e.convertString(e[n + 2]) };
}, function(n, e) {
  const t = e[n + 4];
  return { type: "IfStatement", start: e[n], end: e[n + 1], test: L(e[n + 2], e), consequent: L(e[n + 3], e), alternate: t === 0 ? null : L(t, e) };
}, function(n, e) {
  return { type: "ImportAttribute", start: e[n], end: e[n + 1], key: L(e[n + 2], e), value: L(e[n + 3], e) };
}, function(n, e) {
  return { type: "ImportDeclaration", start: e[n], end: e[n + 1], specifiers: me(e[n + 2], e), source: L(e[n + 3], e), attributes: me(e[n + 4], e) };
}, function(n, e) {
  return { type: "ImportDefaultSpecifier", start: e[n], end: e[n + 1], local: L(e[n + 2], e) };
}, function(n, e) {
  const t = e[n + 3];
  return { type: "ImportExpression", start: e[n], end: e[n + 1], source: L(e[n + 2], e), options: t === 0 ? null : L(t, e) };
}, function(n, e) {
  return { type: "ImportNamespaceSpecifier", start: e[n], end: e[n + 1], local: L(e[n + 2], e) };
}, function(n, e) {
  const t = e[n + 2], s = L(e[n + 3], e);
  return { type: "ImportSpecifier", start: e[n], end: e[n + 1], imported: t === 0 ? { ...s } : L(t, e), local: s };
}, function(n, e) {
  const t = e[n + 3];
  return { type: "JSXAttribute", start: e[n], end: e[n + 1], name: L(e[n + 2], e), value: t === 0 ? null : L(t, e) };
}, function(n, e) {
  return { type: "JSXClosingElement", start: e[n], end: e[n + 1], name: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "JSXClosingFragment", start: e[n], end: e[n + 1] };
}, function(n, e) {
  const t = e[n + 4];
  return { type: "JSXElement", start: e[n], end: e[n + 1], openingElement: L(e[n + 2], e), children: me(e[n + 3], e), closingElement: t === 0 ? null : L(t, e) };
}, function(n, e) {
  return { type: "JSXEmptyExpression", start: e[n], end: e[n + 1] };
}, function(n, e) {
  return { type: "JSXExpressionContainer", start: e[n], end: e[n + 1], expression: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "JSXFragment", start: e[n], end: e[n + 1], openingFragment: L(e[n + 2], e), children: me(e[n + 3], e), closingFragment: L(e[n + 4], e) };
}, function(n, e) {
  return { type: "JSXIdentifier", start: e[n], end: e[n + 1], name: e.convertString(e[n + 2]) };
}, function(n, e) {
  return { type: "JSXMemberExpression", start: e[n], end: e[n + 1], object: L(e[n + 2], e), property: L(e[n + 3], e) };
}, function(n, e) {
  return { type: "JSXNamespacedName", start: e[n], end: e[n + 1], namespace: L(e[n + 2], e), name: L(e[n + 3], e) };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "JSXOpeningElement", start: e[n], end: e[n + 1], selfClosing: !(1 & ~t), name: L(e[n + 3], e), attributes: me(e[n + 4], e) };
}, function(n, e) {
  return { type: "JSXOpeningFragment", start: e[n], end: e[n + 1], attributes: [], selfClosing: false };
}, function(n, e) {
  return { type: "JSXSpreadAttribute", start: e[n], end: e[n + 1], argument: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "JSXSpreadChild", start: e[n], end: e[n + 1], expression: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "JSXText", start: e[n], end: e[n + 1], value: e.convertString(e[n + 2]), raw: e.convertString(e[n + 3]) };
}, function(n, e) {
  return { type: "LabeledStatement", start: e[n], end: e[n + 1], label: L(e[n + 2], e), body: L(e[n + 3], e) };
}, function(n, e) {
  const t = e.convertString(e[n + 2]);
  return { type: "Literal", start: e[n], end: e[n + 1], bigint: t, raw: e.convertString(e[n + 3]), value: BigInt(t) };
}, function(n, e) {
  const t = !(1 & ~e[n + 2]);
  return { type: "Literal", start: e[n], end: e[n + 1], value: t, raw: t ? "true" : "false" };
}, function(n, e) {
  return { type: "Literal", start: e[n], end: e[n + 1], raw: "null", value: null };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "Literal", start: e[n], end: e[n + 1], raw: t === 0 ? void 0 : e.convertString(t), value: new DataView(e.buffer).getFloat64(n + 3 << 2, true) };
}, function(n, e) {
  const t = e.convertString(e[n + 2]), s = e.convertString(e[n + 3]);
  return { type: "Literal", start: e[n], end: e[n + 1], raw: `/${s}/${t}`, regex: { flags: t, pattern: s }, value: new RegExp(s, t) };
}, function(n, e) {
  const t = e[n + 3];
  return { type: "Literal", start: e[n], end: e[n + 1], value: e.convertString(e[n + 2]), raw: t === 0 ? void 0 : e.convertString(t) };
}, function(n, e) {
  return { type: "LogicalExpression", start: e[n], end: e[n + 1], operator: je[e[n + 2]], left: L(e[n + 3], e), right: L(e[n + 4], e) };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "MemberExpression", start: e[n], end: e[n + 1], computed: !(1 & ~t), optional: !(2 & ~t), object: L(e[n + 3], e), property: L(e[n + 4], e) };
}, function(n, e) {
  return { type: "MetaProperty", start: e[n], end: e[n + 1], meta: L(e[n + 2], e), property: L(e[n + 3], e) };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "MethodDefinition", start: e[n], end: e[n + 1], static: !(1 & ~t), computed: !(2 & ~t), decorators: me(e[n + 3], e), key: L(e[n + 4], e), value: L(e[n + 5], e), kind: je[e[n + 6]] };
}, function(n, e) {
  const t = Qe(e[n + 2], e);
  return { type: "NewExpression", start: e[n], end: e[n + 1], ...t.length > 0 ? { [un]: t } : {}, callee: L(e[n + 3], e), arguments: me(e[n + 4], e) };
}, function(n, e) {
  return { type: "ObjectExpression", start: e[n], end: e[n + 1], properties: me(e[n + 2], e) };
}, function(n, e) {
  return { type: "ObjectPattern", start: e[n], end: e[n + 1], properties: me(e[n + 2], e) };
}, function(n, e) {
  return { type: "PrivateIdentifier", start: e[n], end: e[n + 1], name: e.convertString(e[n + 2]) };
}, function(n, e) {
  const t = Qe(e[n + 3], e);
  return { type: "Program", start: e[n], end: e[n + 1], body: me(e[n + 2], e), ...t.length > 0 ? { [Ql]: t } : {}, sourceType: "module" };
}, function(n, e) {
  const t = e[n + 2], s = e[n + 3], i = L(e[n + 4], e);
  return { type: "Property", start: e[n], end: e[n + 1], method: !(1 & ~t), shorthand: !(2 & ~t), computed: !(4 & ~t), key: s === 0 ? { ...i } : L(s, e), value: i, kind: je[e[n + 5]] };
}, function(n, e) {
  const t = e[n + 2], s = e[n + 5];
  return { type: "PropertyDefinition", start: e[n], end: e[n + 1], static: !(1 & ~t), computed: !(2 & ~t), decorators: me(e[n + 3], e), key: L(e[n + 4], e), value: s === 0 ? null : L(s, e) };
}, function(n, e) {
  return { type: "RestElement", start: e[n], end: e[n + 1], argument: L(e[n + 2], e) };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "ReturnStatement", start: e[n], end: e[n + 1], argument: t === 0 ? null : L(t, e) };
}, function(n, e) {
  return { type: "SequenceExpression", start: e[n], end: e[n + 1], expressions: me(e[n + 2], e) };
}, function(n, e) {
  return { type: "SpreadElement", start: e[n], end: e[n + 1], argument: L(e[n + 2], e) };
}, function(n, e) {
  return { type: "StaticBlock", start: e[n], end: e[n + 1], body: me(e[n + 2], e) };
}, function(n, e) {
  return { type: "Super", start: e[n], end: e[n + 1] };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "SwitchCase", start: e[n], end: e[n + 1], test: t === 0 ? null : L(t, e), consequent: me(e[n + 3], e) };
}, function(n, e) {
  return { type: "SwitchStatement", start: e[n], end: e[n + 1], discriminant: L(e[n + 2], e), cases: me(e[n + 3], e) };
}, function(n, e) {
  return { type: "TaggedTemplateExpression", start: e[n], end: e[n + 1], tag: L(e[n + 2], e), quasi: L(e[n + 3], e) };
}, function(n, e) {
  const t = e[n + 2], s = e[n + 3], i = s === 0 ? void 0 : e.convertString(s), r = e.convertString(e[n + 4]);
  return { type: "TemplateElement", start: e[n], end: e[n + 1], tail: !(1 & ~t), value: { cooked: i, raw: r } };
}, function(n, e) {
  return { type: "TemplateLiteral", start: e[n], end: e[n + 1], quasis: me(e[n + 2], e), expressions: me(e[n + 3], e) };
}, function(n, e) {
  return { type: "ThisExpression", start: e[n], end: e[n + 1] };
}, function(n, e) {
  return { type: "ThrowStatement", start: e[n], end: e[n + 1], argument: L(e[n + 2], e) };
}, function(n, e) {
  const t = e[n + 3], s = e[n + 4];
  return { type: "TryStatement", start: e[n], end: e[n + 1], block: L(e[n + 2], e), handler: t === 0 ? null : L(t, e), finalizer: s === 0 ? null : L(s, e) };
}, function(n, e) {
  return { type: "UnaryExpression", start: e[n], end: e[n + 1], operator: je[e[n + 2]], argument: L(e[n + 3], e), prefix: true };
}, function(n, e) {
  const t = e[n + 2];
  return { type: "UpdateExpression", start: e[n], end: e[n + 1], prefix: !(1 & ~t), operator: je[e[n + 3]], argument: L(e[n + 4], e) };
}, function(n, e) {
  return { type: "VariableDeclaration", start: e[n], end: e[n + 1], kind: je[e[n + 2]], declarations: me(e[n + 3], e) };
}, function(n, e) {
  const t = e[n + 3];
  return { type: "VariableDeclarator", start: e[n], end: e[n + 1], id: L(e[n + 2], e), init: t === 0 ? null : L(t, e) };
}, function(n, e) {
  return { type: "WhileStatement", start: e[n], end: e[n + 1], test: L(e[n + 2], e), body: L(e[n + 3], e) };
}, function(n, e) {
  const t = e[n + 2], s = e[n + 3];
  return { type: "YieldExpression", start: e[n], end: e[n + 1], delegate: !(1 & ~t), argument: s === 0 ? null : L(s, e) };
}];
function L(n, e) {
  const t = e[n], s = Qd[t];
  if (!s) throw console.trace(), new Error(`Unknown node type: ${t}`);
  return s(n + 1, e);
}
function me(n, e) {
  if (n === 0) return $e;
  const t = e[n++], s = new Array(t);
  for (let i = 0; i < t; i++) {
    const r = e[n++];
    s[i] = r ? L(r, e) : null;
  }
  return s;
}
function Pc(n) {
  const e = new Uint32Array(n.buffer);
  let t;
  if (typeof Buffer < "u" && n instanceof Buffer) t = (s) => {
    const i = e[s++], r = s << 2;
    return n.toString("utf8", r, r + i);
  };
  else {
    const s = new TextDecoder();
    t = (i) => {
      const r = e[i++], o = i << 2;
      return s.decode(n.subarray(o, o + r));
    };
  }
  return Object.assign(e, { convertString: t });
}
class Fi extends z {
  addExportedVariables(e, t) {
    for (const s of this.elements) s == null ? void 0 : s.addExportedVariables(e, t);
  }
  declare(e, t, s) {
    const i = [], r = Ns(t);
    for (const o of this.elements) o !== null && i.push(...o.declare(e, r, s));
    return i;
  }
  deoptimizeAssignment(e, t) {
    const s = Ns(e);
    for (const i of this.elements) i == null ? void 0 : i.deoptimizeAssignment(s, t);
  }
  deoptimizePath() {
    for (const e of this.elements) e == null ? void 0 : e.deoptimizePath(G);
  }
  hasEffectsWhenDestructuring(e, t, s) {
    const i = Ns(t);
    for (const r of this.elements) if (r == null ? void 0 : r.hasEffectsWhenDestructuring(e, i, s)) return true;
    return false;
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    for (const i of this.elements) if (i == null ? void 0 : i.hasEffectsOnInteractionAtPath(G, t, s)) return true;
    return false;
  }
  includeDestructuredIfNecessary(e, t, s) {
    let i = false;
    const r = Ns(t);
    for (const o of [...this.elements].reverse()) o && (i && !o.included && o.includeNode(e), i = o.includeDestructuredIfNecessary(e, r, s) || i);
    return !this.included && i && this.includeNode(e), this.included;
  }
  markDeclarationReached() {
    for (const e of this.elements) e == null ? void 0 : e.markDeclarationReached();
  }
}
Fi.prototype.includeNode = Te;
const Ns = (n) => n.at(-1) === ne ? n : [...n, An];
class rs extends Un {
  constructor() {
    super(...arguments), this.objectEntity = null;
  }
  get expression() {
    return ue(this.flags, 8388608);
  }
  set expression(e) {
    this.flags = de(this.flags, 8388608, e);
  }
  createScope(e) {
    this.scope = new cc(e, false);
  }
  hasEffects() {
    return false;
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    if (this.annotationNoSideEffects && e.length === 0 && t.type === 2) return false;
    if (super.hasEffectsOnInteractionAtPath(e, t, s)) return true;
    if (t.type === 2) {
      const { ignore: i, brokenFlow: r } = s;
      if (s.ignore = { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: true, this: false }, this.body.hasEffects(s)) return true;
      s.ignore = i, s.brokenFlow = r;
    }
    return false;
  }
  onlyFunctionCallUsed() {
    return this.parent.type === ps && this.parent.callee === this || super.onlyFunctionCallUsed();
  }
  include(e, t) {
    super.include(e, t);
    for (const s of this.params) s instanceof pe || s.include(e, t);
  }
  includeNode(e) {
    this.included = true, this.body.includePath(U, e);
    for (const t of this.params) t instanceof pe || t.includePath(U, e);
  }
  getObjectEntity() {
    return this.objectEntity !== null ? this.objectEntity : this.objectEntity = new Je([], Nt);
  }
}
class Dt extends z {
  addExportedVariables(e, t) {
    for (const s of this.properties) s.type === Rl ? s.value.addExportedVariables(e, t) : s.argument.addExportedVariables(e, t);
  }
  declare(e, t, s) {
    const i = [];
    for (const r of this.properties) i.push(...r.declare(e, t, s));
    return i;
  }
  deoptimizeAssignment(e, t) {
    for (const s of this.properties) s.deoptimizeAssignment(e, t);
  }
  deoptimizePath(e) {
    if (e.length === 0) for (const t of this.properties) t.deoptimizePath(e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    for (const i of this.properties) if (i.hasEffectsOnInteractionAtPath(G, t, s)) return true;
    return false;
  }
  hasEffectsWhenDestructuring(e, t, s) {
    for (const i of this.properties) if (i.hasEffectsWhenDestructuring(e, t, s)) return true;
    return false;
  }
  includeDestructuredIfNecessary(e, t, s) {
    if (!this.properties.length) return this.included;
    const i = this.properties.at(-1);
    let r = i.includeDestructuredIfNecessary(e, t, s);
    const o = i.type === "RestElement";
    for (const a of this.properties.slice(0, -1)) o && r && !a.included && a.includeNode(e), r = a.includeDestructuredIfNecessary(e, t, s) || r;
    return !this.included && r && this.includeNode(e), this.included;
  }
  markDeclarationReached() {
    for (const e of this.properties) e.markDeclarationReached();
  }
  render(e, t) {
    if (this.properties.length > 0) {
      const s = wi(this.properties, e, this.start + 1, this.end - 1);
      let i = null;
      for (const { node: r, separator: o, start: a, end: l } of s) r.included ? (i = o, r.render(e, t)) : kn(r, e, a, l);
      i && e.remove(i, this.end - 1);
    }
  }
}
Dt.prototype.includeNode = ge, Dt.prototype.applyDeoptimizations = le;
class wc extends z {
  constructor() {
    super(...arguments), this.isConstReassignment = false;
  }
  hasEffects(e) {
    var _a2, _b;
    const { deoptimized: t, isConstReassignment: s, left: i, operator: r, right: o } = this;
    return t || this.applyDeoptimizations(), s || o.hasEffects(e) || i.hasEffectsAsAssignmentTarget(e, r !== "=") || ((_b = (_a2 = this.left).hasEffectsWhenDestructuring) == null ? void 0 : _b.call(_a2, e, G, o));
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return this.right.hasEffectsOnInteractionAtPath(e, t, s);
  }
  include(e, t) {
    var _a2;
    const { deoptimized: s, isConstReassignment: i, left: r, right: o, operator: a } = this;
    s || this.applyDeoptimizations(), this.included || this.includeNode(e);
    const l = Cn();
    (t || i || a !== "=" || r.included || r.hasEffectsAsAssignmentTarget(l, false) || ((_a2 = r.hasEffectsWhenDestructuring) == null ? void 0 : _a2.call(r, l, G, o))) && r.includeAsAssignmentTarget(e, t, a !== "="), o.include(e, t);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.right.includePath(U, e);
  }
  initialise() {
    var _a2;
    super.initialise(), this.left instanceof pe && ((_a2 = this.scope.variables.get(this.left.name)) == null ? void 0 : _a2.kind) === "const" && (this.isConstReassignment = true, this.scope.context.log(Q, { code: "CONST_REASSIGN", message: "Cannot reassign a variable declared with `const`" }, this.left.start)), this.left.setAssignedValue(this.right);
  }
  render(e, t, { preventASI: s, renderedParentType: i, renderedSurroundingElement: r } = ze) {
    const { left: o, right: a, start: l, end: c, parent: d } = this;
    if (o.included) o.render(e, t), a.render(e, t);
    else {
      const p = Ct(e.original, Me(e.original, "=", o.end) + 1);
      e.remove(l, p), s && Ii(e, p, a.start), a.render(e, t, { renderedParentType: i || d.type, renderedSurroundingElement: r || d.type });
    }
    if (t.format === "system") if (o instanceof pe) {
      const p = o.variable, h = t.exportNamesByVariable.get(p);
      if (h) return void (h.length === 1 ? Vr(p, l, c, e, t) : wl(p, l, c, d.type !== ct, e, t));
    } else {
      const p = [];
      if (o.addExportedVariables(p, t.exportNamesByVariable), p.length > 0) return void function(h, f, E, g, y, m) {
        const { _: b, getDirectReturnIifeLeft: x } = m.snippets;
        y.prependRight(f, x(["v"], `${nn(h, m)},${b}v`, { needsArrowReturnParens: true, needsWrappedFunction: g })), y.appendLeft(E, ")");
      }(p, l, c, r === ct, e, t);
    }
    o.included && o instanceof Dt && (r === ct || r === Hr) && (e.appendRight(l, "("), e.prependLeft(c, ")"));
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.left.deoptimizeAssignment(G, this.right), this.scope.context.requestTreeshakingPass();
  }
}
class Ic extends z {
  addExportedVariables(e, t) {
    this.left.addExportedVariables(e, t);
  }
  declare(e, t, s) {
    return this.left.declare(e, t, s);
  }
  deoptimizeAssignment(e, t) {
    this.left.deoptimizeAssignment(e, t);
  }
  deoptimizePath(e) {
    e.length === 0 && this.left.deoptimizePath(e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return e.length > 0 || this.left.hasEffectsOnInteractionAtPath(G, t, s);
  }
  hasEffectsWhenDestructuring(e, t, s) {
    return this.left.hasEffectsWhenDestructuring(e, t, s);
  }
  includeDestructuredIfNecessary(e, t, s) {
    let i = this.left.includeDestructuredIfNecessary(e, t, s) || this.included;
    return (i || (i = this.right.shouldBeIncluded(e))) && (this.right.include(e, false), this.left.included || (this.left.includeNode(e), this.left.includeDestructuredIfNecessary(e, t, s))), !this.included && i && this.includeNode(e), this.included;
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.right.includePath(U, e);
  }
  markDeclarationReached() {
    this.left.markDeclarationReached();
  }
  render(e, t, { isShorthandProperty: s } = ze) {
    this.left.render(e, t, { isShorthandProperty: s }), this.right.render(e, t);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.left.deoptimizePath(G), this.right.deoptimizePath(U), this.scope.context.requestTreeshakingPass();
  }
}
class si extends z {
  hasEffects() {
    return this.deoptimized || this.applyDeoptimizations(), true;
  }
  initialise() {
    super.initialise();
    let e = this.parent;
    do
      if (e instanceof _i || e instanceof rs) return;
    while (e = e.parent);
    this.scope.context.usesTopLevelAwait = true;
  }
  include(e, t) {
    this.included || this.includeNode(e), this.argument.include(e, t);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.argument.includePath(eh, e);
  }
  includePath(e, t) {
    this.deoptimized || this.applyDeoptimizations(), this.included || this.includeNode(t), this.argument.includePath(e, t);
  }
}
const eh = ["then"];
function Nc(n) {
  return n === void 0 ? "void 0" : typeof n == "boolean" ? String(n) : typeof n == "string" ? JSON.stringify(n) : typeof n == "number" ? function(e) {
    var _a2;
    if (Object.is(-0, e)) return "-0";
    const t = e.toExponential(), [s, i] = t.split("e"), r = ((_a2 = s.split(".")[1]) == null ? void 0 : _a2.length) || 0, o = `${s.replace(".", "")}e${parseInt(i) - r}`, a = String(e).replace("+", "");
    return o.length < a.length ? o : a;
  }(n) : oe;
}
const th = { "!=": (n, e) => n != e, "!==": (n, e) => n !== e, "%": (n, e) => n % e, "&": (n, e) => n & e, "*": (n, e) => n * e, "**": (n, e) => n ** e, "+": (n, e) => n + e, "-": (n, e) => n - e, "/": (n, e) => n / e, "<": (n, e) => n < e, "<<": (n, e) => n << e, "<=": (n, e) => n <= e, "==": (n, e) => n == e, "===": (n, e) => n === e, ">": (n, e) => n > e, ">=": (n, e) => n >= e, ">>": (n, e) => n >> e, ">>>": (n, e) => n >>> e, "^": (n, e) => n ^ e, "|": (n, e) => n | e }, La = Symbol("Unassigned");
class ro extends z {
  constructor() {
    super(...arguments), this.renderedLiteralValue = La;
  }
  deoptimizeCache() {
    this.renderedLiteralValue = oe;
  }
  getLiteralValueAtPath(e, t, s) {
    if (e.length > 0) return oe;
    const i = this.left.getLiteralValueAtPath(G, t, s);
    if (typeof i == "symbol") return oe;
    if (this.operator === "in" && this.right.variable instanceof qt) {
      const [a] = this.right.variable.context.traceExport(String(i));
      return a instanceof es || a instanceof Ue ? oe : !!a;
    }
    const r = this.right.getLiteralValueAtPath(G, t, s);
    if (typeof r == "symbol") return oe;
    const o = th[this.operator];
    return o ? o(i, r) : oe;
  }
  getRenderedLiteralValue() {
    return this.operator === "in" && this.right.variable instanceof qt ? this.renderedLiteralValue !== La ? this.renderedLiteralValue : this.renderedLiteralValue = Nc(this.getLiteralValueAtPath(G, xe, this)) : oe;
  }
  hasEffects(e) {
    return this.operator === "+" && this.parent instanceof st && this.left.getLiteralValueAtPath(G, xe, this) === "" || super.hasEffects(e);
  }
  hasEffectsOnInteractionAtPath(e, { type: t }) {
    return t !== 0 || e.length > 1;
  }
  include(e, t, s) {
    this.included || this.includeNode(e), typeof this.getRenderedLiteralValue() == "symbol" && (this.left.include(e, t, s), this.right.include(e, t, s));
  }
  includeNode(e) {
    this.included = true, this.operator === "in" && typeof this.getRenderedLiteralValue() == "symbol" && this.right.includePath(U, e);
  }
  removeAnnotations(e) {
    this.left.removeAnnotations(e);
  }
  render(e, t, { renderedSurroundingElement: s } = ze) {
    const i = this.getRenderedLiteralValue();
    typeof i != "symbol" ? e.overwrite(this.start, this.end, i) : (this.left.render(e, t, { renderedSurroundingElement: s }), this.right.render(e, t));
  }
}
ro.prototype.applyDeoptimizations = le;
class ii extends z {
  hasEffects(e) {
    if (this.label) {
      if (!e.ignore.labels.has(this.label.name)) return true;
      e.includedLabels.add(this.label.name);
    } else {
      if (!e.ignore.breaks) return true;
      e.hasBreak = true;
    }
    return e.brokenFlow = true, false;
  }
  include(e, t) {
    this.included = true, this.label ? (this.label.include(e, t), e.includedLabels.add(this.label.name)) : e.hasBreak = true, e.brokenFlow = true;
  }
}
function kc(n, e, t) {
  if (t.arguments.length > 0) if (t.arguments[t.arguments.length - 1].included) for (const s of t.arguments) s.render(n, e);
  else {
    let s = t.arguments.length - 2;
    for (; s >= 0 && !t.arguments[s].included; ) s--;
    if (s >= 0) {
      for (let i = 0; i <= s; i++) t.arguments[i].render(n, e);
      n.remove(Me(n.original, ",", t.arguments[s].end), t.end - 1);
    } else n.remove(Me(n.original, "(", t.callee.end) + 1, t.end - 1);
  }
}
ii.prototype.includeNode = ge, ii.prototype.applyDeoptimizations = le;
class Cc extends z {
  constructor() {
    super(...arguments), this.returnExpression = null, this.deoptimizableDependentExpressions = [], this.expressionsToBeDeoptimized = /* @__PURE__ */ new Set();
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    const { args: i } = e, [r, o] = this.getReturnExpression(s);
    if (o) return;
    const a = i.filter((l) => !!l && l !== se);
    if (a.length !== 0) if (r === se) for (const l of a) l.deoptimizePath(U);
    else s.withTrackedEntityAtPath(t, r, () => {
      for (const l of a) this.expressionsToBeDeoptimized.add(l);
      r.deoptimizeArgumentsOnInteractionAtPath(e, t, s);
    }, null);
  }
  deoptimizeCache() {
    var _a2;
    if (((_a2 = this.returnExpression) == null ? void 0 : _a2[0]) !== se) {
      this.returnExpression = De;
      const { deoptimizableDependentExpressions: e, expressionsToBeDeoptimized: t } = this;
      this.expressionsToBeDeoptimized = Il, this.deoptimizableDependentExpressions = $e;
      for (const s of e) s.deoptimizeCache();
      for (const s of t) s.deoptimizePath(U);
    }
  }
  deoptimizePath(e) {
    if (e.length === 0 || this.scope.context.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(e, this)) return;
    const [t] = this.getReturnExpression();
    t !== se && t.deoptimizePath(e);
  }
  getLiteralValueAtPath(e, t, s) {
    const [i] = this.getReturnExpression(t);
    return i === se ? oe : t.withTrackedEntityAtPath(e, i, () => (this.deoptimizableDependentExpressions.push(s), i.getLiteralValueAtPath(e, t, s)), oe);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    const r = this.getReturnExpression(s);
    return r[0] === se ? r : s.withTrackedEntityAtPath(e, r, () => {
      this.deoptimizableDependentExpressions.push(i);
      const [o, a] = r[0].getReturnExpressionWhenCalledAtPath(e, t, s, i);
      return [o, a || r[1]];
    }, De);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    const { type: i } = t;
    if (i === 2) {
      const { args: a, withNew: l } = t;
      if ((l ? s.instantiated : s.called).trackEntityAtPathAndGetIfTracked(e, a, this)) return false;
    } else if ((i === 1 ? s.assigned : s.accessed).trackEntityAtPathAndGetIfTracked(e, this)) return false;
    const [r, o] = this.getReturnExpression();
    return (i === 1 || !o) && r.hasEffectsOnInteractionAtPath(e, t, s);
  }
}
class oo extends Cc {
  get hasCheckedForWarnings() {
    return ue(this.flags, 268435456);
  }
  set hasCheckedForWarnings(e) {
    this.flags = de(this.flags, 268435456, e);
  }
  get optional() {
    return ue(this.flags, 128);
  }
  set optional(e) {
    this.flags = de(this.flags, 128, e);
  }
  bind() {
    super.bind(), this.interaction = { args: [this.callee instanceof vt && !this.callee.variable ? this.callee.object : null, ...this.arguments], type: 2, withNew: false };
  }
  getLiteralValueAtPathAsChainElement(e, t, s) {
    return fc(this, this.callee, e, t, s);
  }
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    for (const t of this.arguments) if (t.hasEffects(e)) return true;
    return !this.annotationPure && (this.callee.hasEffects(e) || this.callee.hasEffectsOnInteractionAtPath(G, this.interaction, e));
  }
  hasEffectsAsChainElement(e) {
    const t = "hasEffectsAsChainElement" in this.callee ? this.callee.hasEffectsAsChainElement(e) : this.callee.hasEffects(e);
    if (t === ut) return ut;
    if (this.optional && this.callee.getLiteralValueAtPath(G, xe, this) == null) return !this.annotationPure && t || ut;
    this.deoptimized || this.applyDeoptimizations();
    for (const s of this.arguments) if (s.hasEffects(e)) return true;
    return !this.annotationPure && (t || this.callee.hasEffectsOnInteractionAtPath(G, this.interaction, e));
  }
  include(e, t) {
    this.included || this.includeNode(e), t ? (super.include(e, true), t === ec && this.callee instanceof pe && this.callee.variable && this.callee.variable.markCalledFromTryStatement()) : (this.callee.include(e, false), this.callee.includeCallArguments(this.interaction, e));
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.callee.includePath(U, e);
  }
  initialise() {
    super.initialise(), this.annotations && this.scope.context.options.treeshake.annotations && (this.annotationPure = this.annotations.some((e) => e.type === "pure"));
  }
  render(e, t, { renderedSurroundingElement: s } = ze) {
    this.callee.render(e, t, { isCalleeOfRenderedParent: true, renderedSurroundingElement: s }), kc(e, t, this), this.callee instanceof pe && !this.hasCheckedForWarnings && (this.hasCheckedForWarnings = true, this.scope.findVariable(this.callee.name).isNamespace && this.scope.context.log(Q, Wl(this.callee.name), this.start), this.callee.name === "eval" && this.scope.context.log(Q, { code: "EVAL", id: i = this.scope.context.module.id, message: `Use of eval in "${Z(i)}" is strongly discouraged as it poses security risks and may cause issues with minification.`, url: Re("troubleshooting/#avoiding-eval") }, this.start));
    var i;
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.callee.deoptimizeArgumentsOnInteractionAtPath(this.interaction, G, xe), this.scope.context.requestTreeshakingPass();
  }
  getReturnExpression(e = xe) {
    return this.returnExpression === null ? (this.returnExpression = De, this.returnExpression = this.callee.getReturnExpressionWhenCalledAtPath(G, this.interaction, e, this)) : this.returnExpression;
  }
}
class ri extends z {
  createScope(e) {
    this.scope = new lc(e, true);
  }
  parseNode(e) {
    const { body: t, param: s, type: i } = e;
    return this.type = i, s && (this.param = new (this.scope.context.getNodeConstructor(s.type))(this, this.scope).parseNode(s), this.param.declare("parameter", G, se)), this.body = new tn(this, this.scope.bodyScope).parseNode(t), super.parseNode(e);
  }
}
ri.prototype.preventChildBlockScope = true, ri.prototype.includeNode = Te;
class oi extends z {
  deoptimizeCache() {
  }
  getLiteralValueAtPath(e, t, s) {
    const i = this.expression.getLiteralValueAtPathAsChainElement(e, t, s);
    return i === ut ? void 0 : i;
  }
  hasEffects(e) {
    return this.expression.hasEffectsAsChainElement(e) === true;
  }
  includePath(e, t) {
    this.included = true, this.expression.includePath(e, t);
  }
  removeAnnotations(e) {
    this.expression.removeAnnotations(e);
  }
}
oi.prototype.includeNode = ge, oi.prototype.applyDeoptimizations = le;
class nh extends Xe {
  constructor(e, t) {
    const { context: s } = e;
    super(e, s), this.variables.set("this", this.thisVariable = new et("this", null, t, G, s, "other")), this.instanceScope = new Xe(this, s), this.instanceScope.variables.set("this", new ac(s));
  }
  findLexicalBoundary() {
    return this;
  }
}
class ai extends z {
  createScope(e) {
    this.scope = new nh(e, this.parent);
  }
  include(e, t) {
    this.included = true, this.scope.context.includeVariableInModule(this.scope.thisVariable, U, e);
    for (const s of this.body) s.include(e, t);
  }
  parseNode(e) {
    const t = this.body = new Array(e.body.length);
    let s = 0;
    for (const i of e.body) t[s++] = new (this.scope.context.getNodeConstructor(i.type))(this, i.static ? this.scope : this.scope.instanceScope).parseNode(i);
    return super.parseNode(e);
  }
}
ai.prototype.includeNode = ge, ai.prototype.applyDeoptimizations = le;
class li extends so {
  render(e, t, { renderedSurroundingElement: s } = ze) {
    super.render(e, t), s === ct && (e.appendRight(this.start, "("), e.prependLeft(this.end, ")"));
  }
}
function yn(n) {
  return typeof n == "symbol" ? n !== ki && (n === Ni || oe) : !!n;
}
class Vi extends Ye {
  constructor(e) {
    super(), this.expressions = e;
  }
  deoptimizePath(e) {
    for (const t of this.expressions) t.deoptimizePath(e);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return [new Vi(this.expressions.map((r) => r.getReturnExpressionWhenCalledAtPath(e, t, s, i)[0])), false];
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    for (const i of this.expressions) if (i.hasEffectsOnInteractionAtPath(e, t, s)) return true;
    return false;
  }
}
class ci extends z {
  constructor() {
    super(...arguments), this.expressionsToBeDeoptimized = [], this.usedBranch = null;
  }
  get isBranchResolutionAnalysed() {
    return ue(this.flags, 65536);
  }
  set isBranchResolutionAnalysed(e) {
    this.flags = de(this.flags, 65536, e);
  }
  get hasDeoptimizedCache() {
    return ue(this.flags, 33554432);
  }
  set hasDeoptimizedCache(e) {
    this.flags = de(this.flags, 33554432, e);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.consequent.deoptimizeArgumentsOnInteractionAtPath(e, t, s), this.alternate.deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizeCache() {
    if (!this.hasDeoptimizedCache && (this.hasDeoptimizedCache = true, this.usedBranch !== null)) {
      const e = this.usedBranch === this.consequent ? this.alternate : this.consequent;
      this.usedBranch = null, e.deoptimizePath(U), this.included && e.includePath(U, nt());
      const { expressionsToBeDeoptimized: t } = this;
      this.expressionsToBeDeoptimized = $e;
      for (const s of t) s.deoptimizeCache();
    }
  }
  deoptimizePath(e) {
    const t = this.getUsedBranch();
    t ? t.deoptimizePath(e) : (this.consequent.deoptimizePath(e), this.alternate.deoptimizePath(e));
  }
  getLiteralValueAtPath(e, t, s) {
    const i = this.getUsedBranch();
    if (!i) {
      if (this.hasDeoptimizedCache) return oe;
      const r = this.consequent.getLiteralValueAtPath(e, t, s), o = yn(r);
      if (o === oe) return oe;
      const a = this.alternate.getLiteralValueAtPath(e, t, s);
      return o !== yn(a) ? oe : (this.expressionsToBeDeoptimized.push(s), r !== a ? o ? Ni : ki : r);
    }
    return this.expressionsToBeDeoptimized.push(s), i.getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    const r = this.getUsedBranch();
    return r ? (this.expressionsToBeDeoptimized.push(i), r.getReturnExpressionWhenCalledAtPath(e, t, s, i)) : [new Vi([this.consequent.getReturnExpressionWhenCalledAtPath(e, t, s, i)[0], this.alternate.getReturnExpressionWhenCalledAtPath(e, t, s, i)[0]]), false];
  }
  hasEffects(e) {
    if (this.test.hasEffects(e)) return true;
    const t = this.getUsedBranch();
    return t ? t.hasEffects(e) : this.consequent.hasEffects(e) || this.alternate.hasEffects(e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    const i = this.getUsedBranch();
    return i ? i.hasEffectsOnInteractionAtPath(e, t, s) : this.consequent.hasEffectsOnInteractionAtPath(e, t, s) || this.alternate.hasEffectsOnInteractionAtPath(e, t, s);
  }
  include(e, t) {
    this.included = true;
    const s = this.getUsedBranch();
    s === null || t || this.test.shouldBeIncluded(e) ? (this.test.include(e, t), this.consequent.include(e, t), this.alternate.include(e, t)) : s.include(e, t);
  }
  includePath(e, t) {
    this.included = true;
    const s = this.getUsedBranch();
    s === null || this.test.shouldBeIncluded(t) ? (this.consequent.includePath(e, t), this.alternate.includePath(e, t)) : s.includePath(e, t);
  }
  includeCallArguments(e, t) {
    const s = this.getUsedBranch();
    s ? s.includeCallArguments(e, t) : (this.consequent.includeCallArguments(e, t), this.alternate.includeCallArguments(e, t));
  }
  removeAnnotations(e) {
    this.test.removeAnnotations(e);
  }
  render(e, t, { isCalleeOfRenderedParent: s, preventASI: i, renderedParentType: r, renderedSurroundingElement: o } = ze) {
    if (this.test.included) this.test.render(e, t, { renderedSurroundingElement: o }), this.consequent.render(e, t), this.alternate.render(e, t);
    else {
      const a = this.getUsedBranch(), l = Me(e.original, ":", this.consequent.end), c = Ct(e.original, (this.consequent.included ? Me(e.original, "?", this.test.end) : l) + 1);
      i && Ii(e, c, a.start), e.remove(this.start, c), this.consequent.included && e.remove(l, this.end), this.test.removeAnnotations(e), a.render(e, t, { isCalleeOfRenderedParent: s, preventASI: true, renderedParentType: r || this.parent.type, renderedSurroundingElement: o || this.parent.type });
    }
  }
  getUsedBranch() {
    if (this.isBranchResolutionAnalysed) return this.usedBranch;
    this.isBranchResolutionAnalysed = true;
    const e = yn(this.test.getLiteralValueAtPath(G, xe, this));
    return typeof e == "symbol" ? null : this.usedBranch = e ? this.consequent : this.alternate;
  }
}
ci.prototype.includeNode = ge, ci.prototype.applyDeoptimizations = le;
class ui extends z {
  hasEffects(e) {
    if (this.label) {
      if (!e.ignore.labels.has(this.label.name)) return true;
      e.includedLabels.add(this.label.name);
    } else {
      if (!e.ignore.continues) return true;
      e.hasContinue = true;
    }
    return e.brokenFlow = true, false;
  }
  include(e, t) {
    this.included = true, this.label ? (this.label.include(e, t), e.includedLabels.add(this.label.name)) : e.hasContinue = true, e.brokenFlow = true;
  }
}
ui.prototype.includeNode = ge, ui.prototype.applyDeoptimizations = le;
class ao extends z {
  hasEffects() {
    return true;
  }
}
ao.prototype.includeNode = Te;
class lo extends z {
  hasEffects(e) {
    return this.expression.hasEffects(e) || this.expression.hasEffectsOnInteractionAtPath(G, hs, e);
  }
}
function ji(n, e) {
  const { brokenFlow: t, hasBreak: s, hasContinue: i, ignore: r } = n, { breaks: o, continues: a } = r;
  return r.breaks = true, r.continues = true, n.hasBreak = false, n.hasContinue = false, !!e.hasEffects(n) || (r.breaks = o, r.continues = a, n.hasBreak = s, n.hasContinue = i, n.brokenFlow = t, false);
}
function Es(n, e, t) {
  const { brokenFlow: s, hasBreak: i, hasContinue: r } = n;
  n.hasBreak = false, n.hasContinue = false, e.include(n, t, { asSingleStatement: true }), n.hasBreak = i, n.hasContinue = r, n.brokenFlow = s;
}
lo.prototype.includeNode = Te;
class di extends z {
  hasEffects(e) {
    return !!this.test.hasEffects(e) || ji(e, this.body);
  }
  include(e, t) {
    this.included = true, this.test.include(e, t), Es(e, this.body, t);
  }
}
di.prototype.includeNode = ge, di.prototype.applyDeoptimizations = le;
class co extends z {
  hasEffects() {
    return false;
  }
}
co.prototype.includeNode = Te;
class bn extends z {
  hasEffects() {
    return false;
  }
  initialise() {
    super.initialise(), this.scope.context.addExport(this);
  }
  render(e, t, s) {
    e.remove(s.start, s.end);
  }
}
bn.prototype.needsBoundaries = true, bn.prototype.includeNode = ge, bn.prototype.applyDeoptimizations = le;
class qn extends z {
  bind() {
    var _a2;
    (_a2 = this.declaration) == null ? void 0 : _a2.bind();
  }
  hasEffects(e) {
    var _a2;
    return !!((_a2 = this.declaration) == null ? void 0 : _a2.hasEffects(e));
  }
  initialise() {
    super.initialise(), this.scope.context.addExport(this);
  }
  removeAnnotations(e) {
    var _a2;
    (_a2 = this.declaration) == null ? void 0 : _a2.removeAnnotations(e);
  }
  render(e, t, s) {
    const { start: i, end: r } = s;
    if (this.declaration === null) e.remove(i, r);
    else {
      let o = this.declaration.start;
      if (this.declaration instanceof vn) {
        const a = this.declaration.decorators;
        for (const l of a) o = Math.min(o, l.start);
        o <= this.start && (o = this.declaration.start);
      }
      e.remove(this.start, o), this.declaration.render(e, t, { end: r, start: i });
    }
  }
}
qn.prototype.needsBoundaries = true, qn.prototype.includeNode = ge, qn.prototype.applyDeoptimizations = le;
class hi extends z {
}
hi.prototype.includeNode = ge, hi.prototype.applyDeoptimizations = le;
class Rc extends z {
  createScope(e) {
    this.scope = new rn(e);
  }
  hasEffects(e) {
    const { body: t, deoptimized: s, left: i, right: r } = this;
    return s || this.applyDeoptimizations(), !(!i.hasEffectsAsAssignmentTarget(e, false) && !r.hasEffects(e)) || ji(e, t);
  }
  include(e, t) {
    const { body: s, deoptimized: i, left: r, right: o } = this;
    i || this.applyDeoptimizations(), this.included || this.includeNode(e), r.includeAsAssignmentTarget(e, t || true, false), o.include(e, t), Es(e, s, t);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.right.includePath(U, e);
  }
  initialise() {
    super.initialise(), this.left.setAssignedValue(se);
  }
  render(e, t) {
    this.left.render(e, t, jt), this.right.render(e, t, jt), e.original.charCodeAt(this.right.start - 1) === 110 && e.prependLeft(this.right.start, " "), this.body.render(e, t);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.left.deoptimizePath(G), this.scope.context.requestTreeshakingPass();
  }
}
class Dc extends z {
  get await() {
    return ue(this.flags, 131072);
  }
  set await(e) {
    this.flags = de(this.flags, 131072, e);
  }
  createScope(e) {
    this.scope = new rn(e);
  }
  hasEffects() {
    return this.deoptimized || this.applyDeoptimizations(), true;
  }
  include(e, t) {
    const { body: s, deoptimized: i, left: r, right: o } = this;
    i || this.applyDeoptimizations(), this.included || this.includeNode(e), r.includeAsAssignmentTarget(e, t || true, false), o.include(e, t), Es(e, s, t);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.right.includePath(U, e);
  }
  initialise() {
    super.initialise(), this.left.setAssignedValue(se);
  }
  render(e, t) {
    this.left.render(e, t, jt), this.right.render(e, t, jt), e.original.charCodeAt(this.right.start - 1) === 102 && e.prependLeft(this.right.start, " "), this.body.render(e, t);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.left.deoptimizePath(G), this.right.deoptimizePath(U), this.scope.context.requestTreeshakingPass();
  }
}
class pi extends z {
  createScope(e) {
    this.scope = new rn(e);
  }
  hasEffects(e) {
    var _a2, _b, _c2;
    return !!(((_a2 = this.init) == null ? void 0 : _a2.hasEffects(e)) || ((_b = this.test) == null ? void 0 : _b.hasEffects(e)) || ((_c2 = this.update) == null ? void 0 : _c2.hasEffects(e))) || ji(e, this.body);
  }
  include(e, t) {
    var _a2, _b, _c2;
    this.included = true, (_a2 = this.init) == null ? void 0 : _a2.include(e, t, { asSingleStatement: true }), (_b = this.test) == null ? void 0 : _b.include(e, t), (_c2 = this.update) == null ? void 0 : _c2.include(e, t), Es(e, this.body, t);
  }
  render(e, t) {
    var _a2, _b, _c2;
    (_a2 = this.init) == null ? void 0 : _a2.render(e, t, jt), (_b = this.test) == null ? void 0 : _b.render(e, t, jt), (_c2 = this.update) == null ? void 0 : _c2.render(e, t, jt), this.body.render(e, t);
  }
}
pi.prototype.includeNode = ge, pi.prototype.applyDeoptimizations = le;
class uo extends _i {
  createScope(e) {
    super.createScope(this.idScope = new Xe(e, e.context));
  }
  parseNode(e) {
    return e.id !== null && (this.id = new pe(this, this.idScope).parseNode(e.id)), super.parseNode(e);
  }
  onlyFunctionCallUsed() {
    return this.parent.type === ps && this.parent.callee === this && (this.id === null || this.id.variable.getOnlyFunctionCallUsed()) || super.onlyFunctionCallUsed();
  }
  render(e, t, { renderedSurroundingElement: s } = ze) {
    super.render(e, t), s === ct && (e.appendRight(this.start, "("), e.prependLeft(this.end, ")"));
  }
}
class fi extends rn {
  constructor() {
    super(...arguments), this.hoistedDeclarations = [];
  }
  addDeclaration(e, t, s, i, r) {
    return this.hoistedDeclarations.push(e), super.addDeclaration(e, t, s, i, r);
  }
}
const _a = Symbol("unset");
class In extends z {
  constructor() {
    super(...arguments), this.testValue = _a;
  }
  deoptimizeCache() {
    this.testValue = oe;
  }
  hasEffects(e) {
    var _a2;
    if (this.test.hasEffects(e)) return true;
    const t = this.getTestValue();
    if (typeof t == "symbol") {
      const { brokenFlow: s } = e;
      if (this.consequent.hasEffects(e)) return true;
      const i = e.brokenFlow;
      return e.brokenFlow = s, this.alternate === null ? false : !!this.alternate.hasEffects(e) || (e.brokenFlow = e.brokenFlow && i, false);
    }
    return t ? this.consequent.hasEffects(e) : !!((_a2 = this.alternate) == null ? void 0 : _a2.hasEffects(e));
  }
  include(e, t) {
    if (this.included = true, t) this.includeRecursively(t, e);
    else {
      const s = this.getTestValue();
      typeof s == "symbol" ? this.includeUnknownTest(e) : this.includeKnownTest(e, s);
    }
  }
  parseNode(e) {
    return this.consequent = new (this.scope.context.getNodeConstructor(e.consequent.type))(this, this.consequentScope = new fi(this.scope)).parseNode(e.consequent), e.alternate && (this.alternate = new (this.scope.context.getNodeConstructor(e.alternate.type))(this, this.alternateScope = new fi(this.scope)).parseNode(e.alternate)), super.parseNode(e);
  }
  render(e, t) {
    const { snippets: { getPropertyAccess: s } } = t, i = this.getTestValue(), r = [], o = this.test.included, a = !this.scope.context.options.treeshake;
    o ? this.test.render(e, t) : e.remove(this.start, this.consequent.start), this.consequent.included && (a || typeof i == "symbol" || i) ? this.consequent.render(e, t) : (e.overwrite(this.consequent.start, this.consequent.end, o ? ";" : ""), r.push(...this.consequentScope.hoistedDeclarations)), this.alternate && (!this.alternate.included || !a && typeof i != "symbol" && i ? (o && this.shouldKeepAlternateBranch() ? e.overwrite(this.alternate.start, this.end, ";") : e.remove(this.consequent.end, this.end), r.push(...this.alternateScope.hoistedDeclarations)) : (o ? e.original.charCodeAt(this.alternate.start - 1) === 101 && e.prependLeft(this.alternate.start, " ") : e.remove(this.consequent.end, this.alternate.start), this.alternate.render(e, t))), this.renderHoistedDeclarations(r, e, s);
  }
  getTestValue() {
    return this.testValue === _a ? this.testValue = yn(this.test.getLiteralValueAtPath(G, xe, this)) : this.testValue;
  }
  includeKnownTest(e, t) {
    var _a2;
    this.test.shouldBeIncluded(e) && this.test.include(e, false), t && this.consequent.shouldBeIncluded(e) && this.consequent.include(e, false, { asSingleStatement: true }), !t && ((_a2 = this.alternate) == null ? void 0 : _a2.shouldBeIncluded(e)) && this.alternate.include(e, false, { asSingleStatement: true });
  }
  includeRecursively(e, t) {
    var _a2;
    this.test.include(t, e), this.consequent.include(t, e), (_a2 = this.alternate) == null ? void 0 : _a2.include(t, e);
  }
  includeUnknownTest(e) {
    var _a2;
    this.test.include(e, false);
    const { brokenFlow: t } = e;
    let s = false;
    this.consequent.shouldBeIncluded(e) && (this.consequent.include(e, false, { asSingleStatement: true }), s = e.brokenFlow, e.brokenFlow = t), ((_a2 = this.alternate) == null ? void 0 : _a2.shouldBeIncluded(e)) && (this.alternate.include(e, false, { asSingleStatement: true }), e.brokenFlow = e.brokenFlow && s);
  }
  renderHoistedDeclarations(e, t, s) {
    const i = [...new Set(e.map((r) => {
      const o = r.variable;
      return o.included ? o.getName(s) : "";
    }))].filter(Boolean).join(", ");
    if (i) {
      const r = this.parent.type, o = r !== Hs && r !== "BlockStatement";
      t.prependRight(this.start, `${o ? "{ " : ""}var ${i}; `), o && t.appendLeft(this.end, " }");
    }
  }
  shouldKeepAlternateBranch() {
    let e = this.parent;
    do {
      if (e instanceof In && e.alternate) return true;
      if (e instanceof tn) return false;
      e = e.parent;
    } while (e);
    return false;
  }
}
In.prototype.includeNode = ge, In.prototype.applyDeoptimizations = le;
class Oc extends z {
}
class Kn extends z {
  bind() {
  }
  hasEffects() {
    return false;
  }
  initialise() {
    super.initialise(), this.scope.context.addImport(this);
  }
  render(e, t, s) {
    e.remove(s.start, s.end);
  }
}
Kn.prototype.needsBoundaries = true, Kn.prototype.includeNode = ge, Kn.prototype.applyDeoptimizations = le;
class os extends z {
}
function Lc(n, e) {
  return n.renderBaseName !== null && e.has(n) && n.isReassigned;
}
os.prototype.includeNode = ge, os.prototype.applyDeoptimizations = le;
class Ui extends z {
  declareDeclarator(e, t) {
    this.isUsingDeclaration = t, this.id.declare(e, G, this.init || xt);
  }
  deoptimizePath(e) {
    this.id.deoptimizePath(e);
  }
  hasEffects(e) {
    var _a2;
    const t = (_a2 = this.init) == null ? void 0 : _a2.hasEffects(e);
    return this.id.markDeclarationReached(), t || this.isUsingDeclaration || this.id.hasEffects(e) || this.scope.context.options.treeshake.propertyReadSideEffects && this.id.hasEffectsWhenDestructuring(e, G, this.init || xt);
  }
  include(e, t) {
    const { id: s, init: i } = this;
    this.included || this.includeNode(), i == null ? void 0 : i.include(e, t), s.markDeclarationReached(), t ? s.include(e, t) : s.includeDestructuredIfNecessary(e, G, i || xt);
  }
  removeAnnotations(e) {
    var _a2;
    (_a2 = this.init) == null ? void 0 : _a2.removeAnnotations(e);
  }
  render(e, t) {
    const { exportNamesByVariable: s, snippets: { _: i, getPropertyAccess: r } } = t, { end: o, id: a, init: l, start: c } = this, d = a.included || this.isUsingDeclaration;
    if (d) a.render(e, t);
    else {
      const p = Me(e.original, "=", a.end);
      e.remove(c, Ct(e.original, p + 1));
    }
    l ? (a instanceof pe && l instanceof li && !l.id && a.variable.getName(r) !== a.name && e.appendLeft(l.start + 5, ` ${a.name}`), l.render(e, t, d ? ze : { renderedSurroundingElement: ct })) : a instanceof pe && Lc(a.variable, s) && e.appendLeft(o, `${i}=${i}void 0`);
  }
  includeNode() {
    this.included = true;
    const { id: e, init: t } = this;
    if (t && e instanceof pe && t instanceof li && !t.id) {
      const { name: s, variable: i } = e;
      for (const r of t.scope.accessedOutsideVariables.values()) r !== i && r.forbidName(s);
    }
  }
}
function Ma(n) {
  return { fileName: n.getFileName(), ...n.getPreRenderedChunkInfo() };
}
Ui.prototype.applyDeoptimizations = le;
class ho extends z {
  constructor() {
    super(...arguments), this.inlineNamespace = null, this.hasUnknownAccessedKey = false, this.accessedPropKey = /* @__PURE__ */ new Set(), this.attributes = null, this.mechanism = null, this.namespaceExportName = void 0, this.resolution = null, this.resolutionString = null;
  }
  get shouldIncludeDynamicAttributes() {
    return ue(this.flags, 536870912);
  }
  set shouldIncludeDynamicAttributes(e) {
    this.flags = de(this.flags, 536870912, e);
  }
  get withinTopLevelAwait() {
    return ue(this.flags, 134217728);
  }
  set withinTopLevelAwait(e) {
    this.flags = de(this.flags, 134217728, e);
  }
  bind() {
    var _a2;
    this.source.bind(), (_a2 = this.options) == null ? void 0 : _a2.bind();
  }
  getDeterministicImportedNames() {
    const e = this.parent;
    if (e instanceof st) return $e;
    if (e instanceof si) {
      const t = e.parent;
      if (t instanceof st) return $e;
      if (t instanceof Ui) {
        const s = t.id;
        if (s instanceof pe) return this.hasUnknownAccessedKey ? void 0 : [...this.accessedPropKey];
        if (s instanceof Dt) return Ba(s);
      }
      if (t instanceof vt) {
        const s = t.property;
        if (!t.computed && s instanceof pe) return [s.name];
      }
      return;
    }
    if (e instanceof vt) {
      const t = e.parent, s = e.property;
      if (!(t instanceof oo && s instanceof pe)) return;
      const i = s.name;
      if (t.parent instanceof st && ["catch", "finally"].includes(i)) return $e;
      if (i !== "then") return;
      if (t.arguments.length === 0) return $e;
      const r = t.arguments[0];
      if (t.arguments.length !== 1 || !(r instanceof rs || r instanceof uo)) return;
      if (r.params.length === 0) return $e;
      const o = r.params[0];
      return r.params.length === 1 && o instanceof Dt ? Ba(o) : this.hasUnknownAccessedKey ? void 0 : [...this.accessedPropKey];
    }
  }
  hasEffects() {
    return true;
  }
  include(e, t) {
    var _a2;
    this.included || this.includeNode(e), this.source.include(e, t), this.shouldIncludeDynamicAttributes && ((_a2 = this.options) == null ? void 0 : _a2.include(e, t));
  }
  includeNode(e) {
    var _a2;
    this.included = true, this.shouldIncludeDynamicAttributes && ((_a2 = this.options) == null ? void 0 : _a2.includePath(U, e)), this.scope.context.includeDynamicImport(this), this.scope.addAccessedDynamicImport(this);
  }
  includePath(e, t) {
    this.included || this.includeNode(t), this.hasUnknownAccessedKey || (e[0] === ne ? this.hasUnknownAccessedKey = true : typeof e[0] == "string" && this.accessedPropKey.add(e[0]), this.scope.context.includeDynamicImport(this));
  }
  initialise() {
    super.initialise(), this.scope.context.addDynamicImport(this);
    let e = this.parent, t = false, s = false;
    do
      t && (e instanceof _i || e instanceof rs) && (s = false), e instanceof si && (t = true, s = true);
    while (e = e.parent);
    t && s && (this.withinTopLevelAwait = true);
  }
  parseNode(e) {
    return this.sourceAstNode = e.source, super.parseNode(e);
  }
  render(e, t) {
    const { snippets: { _: s, getDirectReturnFunction: i, getObject: r, getPropertyAccess: o }, importAttributesKey: a } = t;
    if (this.inlineNamespace) {
      const [l, c] = i([], { functionReturn: true, lineBreakIndent: null, name: null });
      return void e.overwrite(this.start, this.end, `Promise.resolve().then(${l}${this.inlineNamespace.getName(o)}${c})`);
    }
    if (this.mechanism && (e.overwrite(this.start, Me(e.original, "(", this.start + 6) + 1, this.mechanism.left), e.overwrite(this.end - 1, this.end, this.mechanism.right)), this.resolutionString) {
      if (e.overwrite(this.source.start, this.source.end, this.resolutionString), this.namespaceExportName) {
        const [l, c] = i(["n"], { functionReturn: true, lineBreakIndent: null, name: null });
        e.prependLeft(this.end, `.then(${l}n.${this.namespaceExportName}${c})`);
      }
    } else this.source.render(e, t);
    this.attributes !== true && (this.options && e.overwrite(this.source.end, this.end - 1, "", { contentOnly: true }), this.attributes && e.appendLeft(this.end - 1, `,${s}${r([[a, this.attributes]], { lineBreakIndent: null })}`));
  }
  setExternalResolution(e, t, s, i, r, o, a, l, c, d, p) {
    const { format: h } = s;
    this.inlineNamespace = null, this.resolution = t, this.resolutionString = a, this.namespaceExportName = l, this.attributes = c;
    const f = [...sh[h] || []];
    let E;
    ({ helper: E, mechanism: this.mechanism } = this.getDynamicImportMechanismAndHelper(t, e, s, i, r, d, p)), E && f.push(E), f.length > 0 && this.scope.addAccessedGlobals(f, o);
  }
  setInternalResolution(e) {
    this.inlineNamespace = e;
  }
  getDynamicImportMechanismAndHelper(e, t, { compact: s, dynamicImportInCjs: i, format: r, generatedCode: { arrowFunctions: o }, interop: a }, { _: l, getDirectReturnFunction: c, getDirectReturnIifeLeft: d }, p, h, f) {
    const E = p.hookFirstSync("renderDynamicImport", [{ chunk: Ma(h), customResolution: typeof this.resolution == "string" ? this.resolution : null, format: r, getTargetChunkImports() {
      if (f === null) return null;
      const y = [], m = h.getFileName();
      for (const b of f.dependencies) {
        const x = `'${b.getImportPath(m)}'`;
        b instanceof Ft ? y.push({ fileName: b.getFileName(), resolvedImportPath: x, type: "external" }) : y.push({ chunk: b.getPreRenderedChunkInfo(), fileName: b.getFileName(), resolvedImportPath: x, type: "internal" });
      }
      return y;
    }, moduleId: this.scope.context.module.id, targetChunk: f ? Ma(f) : null, targetModuleId: this.resolution && typeof this.resolution != "string" ? this.resolution.id : null }]);
    if (E) return { helper: null, mechanism: E };
    const g = !this.resolution || typeof this.resolution == "string";
    switch (r) {
      case "cjs": {
        if (i && (!e || typeof e == "string" || e instanceof ve)) return { helper: null, mechanism: null };
        const y = Ta(e, t, a);
        let m = "require(", b = ")";
        y && (m = `/*#__PURE__*/${y}(${m}`, b += ")");
        const [x, A] = c([], { functionReturn: true, lineBreakIndent: null, name: null });
        return m = `Promise.resolve().then(${x}${m}`, b += `${A})`, !o && g && (m = d(["t"], `${m}t${b}`, { needsArrowReturnParens: false, needsWrappedFunction: true }), b = ")"), { helper: y, mechanism: { left: m, right: b } };
      }
      case "amd": {
        const y = s ? "c" : "resolve", m = s ? "e" : "reject", b = Ta(e, t, a), [x, A] = c(["m"], { functionReturn: false, lineBreakIndent: null, name: null }), S = b ? `${x}${y}(/*#__PURE__*/${b}(m))${A}` : y, [w, C] = c([y, m], { functionReturn: false, lineBreakIndent: null, name: null });
        let R = `new Promise(${w}require([`, D = `],${l}${S},${l}${m})${C})`;
        return !o && g && (R = d(["t"], `${R}t${D}`, { needsArrowReturnParens: false, needsWrappedFunction: true }), D = ")"), { helper: b, mechanism: { left: R, right: D } };
      }
      case "system":
        return { helper: null, mechanism: { left: "module.import(", right: ")" } };
    }
    return { helper: null, mechanism: null };
  }
}
function Ta(n, e, t) {
  return e === "external" ? bs[t(n instanceof ve ? n.id : null)] : e === "default" ? ns : null;
}
ho.prototype.applyDeoptimizations = le;
const sh = { amd: ["require"], cjs: ["require"], system: ["module"] };
function Ba(n) {
  const e = [];
  for (const t of n.properties) {
    if (t.type === "RestElement" || t.computed || t.key.type !== "Identifier") return;
    e.push(t.key.name);
  }
  return e;
}
class as extends z {
}
as.prototype.includeNode = ge, as.prototype.applyDeoptimizations = le;
class mi extends z {
}
mi.prototype.includeNode = ge, mi.prototype.applyDeoptimizations = le;
class po extends sc {
  constructor() {
    super(...arguments), this.isNativeElement = false;
  }
  bind() {
    const e = this.getType();
    e === 0 ? (this.variable = this.scope.findVariable(this.name), this.variable.addReference(this)) : e === 1 && (this.isNativeElement = true);
  }
  include(e) {
    this.included || this.includeNode(e);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.variable !== null && this.scope.context.includeVariableInModule(this.variable, G, e);
  }
  includePath(e, t) {
    var _a2;
    this.included ? e.length > 0 && ((_a2 = this.variable) == null ? void 0 : _a2.includePath(e, t)) : (this.included = true, this.variable !== null && this.scope.context.includeVariableInModule(this.variable, e, t));
  }
  render(e, { snippets: { getPropertyAccess: t }, useOriginalName: s }) {
    if (this.variable) {
      const i = this.variable.getName(t, s);
      i !== this.name && e.overwrite(this.start, this.end, i, { contentOnly: true, storeName: true });
    } else this.isNativeElement && this.scope.context.options.jsx.mode !== "preserve" && e.update(this.start, this.end, JSON.stringify(this.name));
  }
  getType() {
    switch (this.parent.type) {
      case "JSXOpeningElement":
      case "JSXClosingElement":
        return this.name.startsWith(this.name.charAt(0).toUpperCase()) ? 0 : 1;
      case "JSXMemberExpression":
        return this.parent.object === this ? 0 : 2;
      case "JSXAttribute":
      case "JSXNamespacedName":
        return 2;
      default:
        throw new Error(`Unexpected parent node type for JSXIdentifier: ${this.parent.type}`);
    }
  }
}
class Gi extends z {
  render(e, t, { jsxMode: s } = ze) {
    if (super.render(e, t), ["classic", "automatic"].includes(s)) {
      const { name: i, value: r } = this, o = i instanceof po ? i.name : `${i.namespace.name}:${i.name.name}`;
      if (s !== "automatic" || o !== "key") {
        const a = Di(o);
        o !== a && e.overwrite(i.start, i.end, a, { contentOnly: true }), r ? (e.overwrite(i.end, r.start, ": ", { contentOnly: true }), r instanceof Ge && typeof r.value == "string" && r.value.includes(`
`) && e.overwrite(r.start, r.end, JSON.stringify(r.value), { contentOnly: true })) : e.appendLeft(i.end, ": true");
      }
    }
  }
}
Gi.prototype.includeNode = Te;
class fo extends z {
  render(e, t) {
    const { mode: s } = this.scope.context.options.jsx;
    s !== "preserve" ? e.overwrite(this.start, this.end, ")", { contentOnly: true }) : super.render(e, t);
  }
}
fo.prototype.includeNode = Te;
class _c extends fo {
}
class Mc extends fo {
}
class gi extends z {
  render(e, t) {
    this.argument.render(e, t);
    const { mode: s } = this.scope.context.options.jsx;
    s !== "preserve" && (e.overwrite(this.start, this.argument.start, "", { contentOnly: true }), e.overwrite(this.argument.end, this.end, "", { contentOnly: true }));
  }
}
class xs extends z {
}
xs.prototype.includeNode = Te;
class Hi extends z {
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.expression.includePath(U, e);
  }
  render(e, t) {
    const { mode: s } = this.scope.context.options.jsx;
    s !== "preserve" && (e.remove(this.start, this.expression.start), e.remove(this.expression.end, this.end)), this.expression.render(e, t);
  }
}
const ih = /^[ \t]*\r?\n[ \t\r\n]*|[ \t]*\r?\n[ \t\r\n]*$/g, rh = /[ \t]*\r?\n[ \t\r\n]*/g;
class As extends z {
  shouldRender() {
    return !!this.getRenderedText();
  }
  render(e) {
    const { mode: t } = this.scope.context.options.jsx;
    t !== "preserve" && e.overwrite(this.start, this.end, JSON.stringify(this.getRenderedText()), { contentOnly: true });
  }
  getRenderedText() {
    return this.renderedText === void 0 && (this.renderedText = this.value.replace(ih, "").replace(rh, " ")), this.renderedText;
  }
}
function oh(n) {
  let e = 0;
  for (const t of n) t instanceof Hi && t.expression instanceof xs || t instanceof As && !t.shouldRender() || e++;
  return e;
}
function Or(n, e, t, s, i) {
  const [r, o] = n.split(".");
  let a;
  return t ? (a = s.scope.context.getImportedJsxFactoryVariable(o ? "default" : r, s.start, t), e && (s.scope.findGlobal(r).includePath(U, i), a.globalName = r)) : a = s.scope.findGlobal(r), s.scope.context.includeVariableInModule(a, U, i), a instanceof et && (a.consolidateInitializers(), a.addUsedPlace(s), s.scope.context.requestTreeshakingPass()), a;
}
As.prototype.includeNode = Te;
class mo extends z {
  constructor() {
    super(...arguments), this.factoryVariable = null, this.factory = null;
  }
  initialise() {
    super.initialise();
    const { importSource: e } = this.jsxMode = this.getRenderingMode();
    e && this.scope.context.addImportSource(e);
  }
  include(e, t) {
    this.included || this.includeNode(e);
    for (const s of this.children) s.include(e, t);
  }
  includeNode(e) {
    this.included = true;
    const { factory: t, importSource: s, mode: i } = this.jsxMode;
    t && (this.factory = t, this.factoryVariable = Or(t, i === "preserve", s, this, e));
  }
  getRenderingMode() {
    const e = this.scope.context.options.jsx, { mode: t, factory: s, importSource: i } = e;
    return t === "automatic" ? { factory: oh(this.children) > 1 ? "jsxs" : "jsx", importSource: e.jsxImportSource, mode: t } : { factory: s, importSource: i, mode: t };
  }
  renderChildren(e, t, s) {
    const { children: i } = this;
    let r = false, o = s, a = null;
    for (const l of i) l instanceof Hi && l.expression instanceof xs || l instanceof As && !l.shouldRender() ? e.remove(o, l.end) : (e.appendLeft(o, ", "), l.render(e, t), a ? r = true : a = l), o = l.end;
    return { childrenEnd: o, firstChild: a, hasMultipleChildren: r };
  }
}
mo.prototype.applyDeoptimizations = le;
class Tc extends mo {
  include(e, t) {
    var _a2;
    super.include(e, t), this.openingElement.include(e, t), (_a2 = this.closingElement) == null ? void 0 : _a2.include(e, t);
  }
  render(e, t) {
    switch (this.jsxMode.mode) {
      case "classic":
        this.renderClassicMode(e, t);
        break;
      case "automatic":
        this.renderAutomaticMode(e, t);
        break;
      default:
        super.render(e, t);
    }
  }
  getRenderingMode() {
    const e = this.scope.context.options.jsx, { mode: t, factory: s, importSource: i } = e;
    if (t === "automatic") {
      let r = false;
      for (const o of this.openingElement.attributes) if (o instanceof gi) r = true;
      else if (r && o.name.name === "key") return { factory: s, importSource: i, mode: "classic" };
    }
    return super.getRenderingMode();
  }
  renderClassicMode(e, t) {
    const { snippets: { getPropertyAccess: s }, useOriginalName: i } = t, { closingElement: r, end: o, factory: a, factoryVariable: l, openingElement: { end: c, selfClosing: d } } = this, [, ...p] = a.split("."), { firstAttribute: h, hasAttributes: f, hasSpread: E, inObject: g, previousEnd: y } = this.renderAttributes(e, t, [l.getName(s, i), ...p].join("."), false);
    this.wrapAttributes(e, g, f, E, h, "null", y), this.renderChildren(e, t, c), d ? e.appendLeft(o, ")") : r.render(e, t);
  }
  renderAutomaticMode(e, t) {
    var _a2;
    const { snippets: { getPropertyAccess: s }, useOriginalName: i } = t, { closingElement: r, end: o, factoryVariable: a, openingElement: { end: l, selfClosing: c } } = this;
    let { firstAttribute: d, hasAttributes: p, hasSpread: h, inObject: f, keyAttribute: E, previousEnd: g } = this.renderAttributes(e, t, a.getName(s, i), true);
    const { firstChild: y, hasMultipleChildren: m, childrenEnd: b } = this.renderChildren(e, t, l);
    if (y && (e.prependRight(y.start, "children: " + (m ? "[" : "")), f || (e.prependRight(y.start, "{ "), f = true), g = r.start, m && e.appendLeft(g, "]")), this.wrapAttributes(e, f, p || !!y, h, d || y, "{}", b), E) {
      const { value: x } = E;
      e.appendLeft(b, ", "), x ? e.move(x.start, x.end, b) : e.appendLeft(b, "true");
    }
    c ? e.appendLeft(((_a2 = E == null ? void 0 : E.value) == null ? void 0 : _a2.end) || o, ")") : r.render(e, t);
  }
  renderAttributes(e, t, s, i) {
    var _a2, _b;
    const { jsxMode: { mode: r }, openingElement: o } = this, { attributes: a, end: l, start: c, name: { start: d, end: p } } = o;
    e.update(c, d, `/*#__PURE__*/${s}(`), o.render(e, t, { jsxMode: r });
    let h = null, f = false, E = false, g = p, y = false, m = null;
    for (const b of a) {
      if (b instanceof Gi) {
        if (i && b.name.name === "key") {
          h = b, e.remove(g, ((_a2 = b.value) == null ? void 0 : _a2.start) || b.end);
          continue;
        }
        e.appendLeft(g, ","), E || (e.prependRight(b.start, "{ "), E = true), y = true;
      } else E ? (y && e.appendLeft(g, " "), e.appendLeft(g, "},"), E = false) : e.appendLeft(g, ","), f = true;
      g = b.end, m || (m = b);
    }
    return e.remove(((_b = a.at(-1)) == null ? void 0 : _b.end) || g, l), { firstAttribute: m, hasAttributes: y, hasSpread: f, inObject: E, keyAttribute: h, previousEnd: g };
  }
  wrapAttributes(e, t, s, i, r, o, a) {
    if (t && e.appendLeft(a, " }"), i) {
      if (s) {
        const { start: l } = r;
        r instanceof gi && e.prependRight(l, "{}, "), e.prependRight(l, "Object.assign("), e.appendLeft(a, ")");
      }
    } else s || e.appendLeft(a, `, ${o}`);
  }
}
class Bc extends mo {
  include(e, t) {
    super.include(e, t), this.openingFragment.include(e, t), this.closingFragment.include(e, t);
  }
  render(e, t) {
    switch (this.jsxMode.mode) {
      case "classic":
        this.renderClassicMode(e, t);
        break;
      case "automatic":
        this.renderAutomaticMode(e, t);
        break;
      default:
        super.render(e, t);
    }
  }
  renderClassicMode(e, t) {
    const { snippets: { getPropertyAccess: s }, useOriginalName: i } = t, { closingFragment: r, factory: o, factoryVariable: a, openingFragment: l, start: c } = this, [, ...d] = o.split(".");
    l.render(e, t), e.prependRight(c, `/*#__PURE__*/${[a.getName(s, i), ...d].join(".")}(`), e.appendLeft(l.end, ", null"), this.renderChildren(e, t, l.end), r.render(e, t);
  }
  renderAutomaticMode(e, t) {
    const { snippets: { getPropertyAccess: s }, useOriginalName: i } = t, { closingFragment: r, factoryVariable: o, openingFragment: a, start: l } = this;
    a.render(e, t), e.prependRight(l, `/*#__PURE__*/${o.getName(s, i)}(`);
    const { firstChild: c, hasMultipleChildren: d, childrenEnd: p } = this.renderChildren(e, t, a.end);
    c ? (e.prependRight(c.start, "{ children: " + (d ? "[" : "")), d && e.appendLeft(r.start, "]"), e.appendLeft(p, " }")) : e.appendLeft(a.end, ", {}"), r.render(e, t);
  }
}
class zc extends z {
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.object.includePath([this.property.name], e);
  }
  includePath(e, t) {
    this.included || this.includeNode(t), this.object.includePath([this.property.name, ...e], t);
  }
}
class go extends z {
}
go.prototype.includeNode = Te;
class yo extends z {
  render(e, t, { jsxMode: s = this.scope.context.options.jsx.mode } = {}) {
    this.name.render(e, t);
    for (const i of this.attributes) i.render(e, t, { jsxMode: s });
  }
}
yo.prototype.includeNode = Te;
class Fc extends z {
  constructor() {
    super(...arguments), this.fragment = null, this.fragmentVariable = null;
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations();
    const t = this.scope.context.options.jsx;
    if (t.mode === "automatic") this.fragment = "Fragment", this.fragmentVariable = Or("Fragment", false, t.jsxImportSource, this, e);
    else {
      const { fragment: s, importSource: i, mode: r } = t;
      s != null && (this.fragment = s, this.fragmentVariable = Or(s, r === "preserve", i, this, e));
    }
  }
  render(e, t) {
    const { mode: s } = this.scope.context.options.jsx;
    if (s !== "preserve") {
      const { snippets: { getPropertyAccess: i }, useOriginalName: r } = t, [, ...o] = this.fragment.split("."), a = [this.fragmentVariable.getName(i, r), ...o].join(".");
      e.update(this.start, this.end, a);
    }
  }
}
class Vc extends z {
  render(e, t) {
    super.render(e, t);
    const { mode: s } = this.scope.context.options.jsx;
    s !== "preserve" && (e.overwrite(this.start, this.expression.start, "...", { contentOnly: true }), e.overwrite(this.expression.end, this.end, "", { contentOnly: true }));
  }
}
class bo extends z {
  hasEffects(e) {
    const { brokenFlow: t, includedLabels: s } = e;
    e.ignore.labels.add(this.label.name), e.includedLabels = /* @__PURE__ */ new Set();
    let i = false;
    return this.body.hasEffects(e) ? i = true : (e.ignore.labels.delete(this.label.name), e.includedLabels.has(this.label.name) && (e.includedLabels.delete(this.label.name), e.brokenFlow = t)), e.includedLabels = /* @__PURE__ */ new Set([...s, ...e.includedLabels]), i;
  }
  include(e, t) {
    this.included || this.includeNode(e);
    const { brokenFlow: s, includedLabels: i } = e;
    e.includedLabels = /* @__PURE__ */ new Set(), this.body.include(e, t), (t || e.includedLabels.has(this.label.name)) && (this.label.include(e, t), e.includedLabels.delete(this.label.name), e.brokenFlow = s), e.includedLabels = /* @__PURE__ */ new Set([...i, ...e.includedLabels]);
  }
  includeNode(e) {
    this.included = true, this.body.includePath(U, e);
  }
  render(e, t) {
    this.label.included ? this.label.render(e, t) : e.remove(this.start, Ct(e.original, Me(e.original, ":", this.label.end) + 1)), this.body.render(e, t);
  }
}
bo.prototype.applyDeoptimizations = le;
class yi extends z {
  constructor() {
    super(...arguments), this.expressionsToBeDeoptimized = [], this.usedBranch = null;
  }
  get isBranchResolutionAnalysed() {
    return ue(this.flags, 65536);
  }
  set isBranchResolutionAnalysed(e) {
    this.flags = de(this.flags, 65536, e);
  }
  get hasDeoptimizedCache() {
    return ue(this.flags, 33554432);
  }
  set hasDeoptimizedCache(e) {
    this.flags = de(this.flags, 33554432, e);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.left.deoptimizeArgumentsOnInteractionAtPath(e, t, s), this.right.deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizeCache() {
    if (this.hasDeoptimizedCache) return;
    if (this.hasDeoptimizedCache = true, this.usedBranch) {
      const s = this.usedBranch === this.left ? this.right : this.left;
      this.usedBranch = null, s.deoptimizePath(U), this.included && s.includePath(U, nt());
    }
    const { scope: { context: e }, expressionsToBeDeoptimized: t } = this;
    this.expressionsToBeDeoptimized = $e;
    for (const s of t) s.deoptimizeCache();
    e.requestTreeshakingPass();
  }
  deoptimizePath(e) {
    const t = this.getUsedBranch();
    t ? t.deoptimizePath(e) : (this.left.deoptimizePath(e), this.right.deoptimizePath(e));
  }
  getLiteralValueAtPath(e, t, s) {
    if (s === this) return oe;
    const i = this.getUsedBranch();
    if (i) return this.expressionsToBeDeoptimized.push(s), i.getLiteralValueAtPath(e, t, s);
    if (!this.hasDeoptimizedCache && !e.length) {
      const r = yn(this.right.getLiteralValueAtPath(e, t, s));
      if (typeof r != "symbol") {
        if (!r && this.operator === "&&") return this.expressionsToBeDeoptimized.push(s), ki;
        if (r && this.operator === "||") return this.expressionsToBeDeoptimized.push(s), Ni;
      }
    }
    return oe;
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    const r = this.getUsedBranch();
    return r ? (this.expressionsToBeDeoptimized.push(i), r.getReturnExpressionWhenCalledAtPath(e, t, s, i)) : [new Vi([this.left.getReturnExpressionWhenCalledAtPath(e, t, s, i)[0], this.right.getReturnExpressionWhenCalledAtPath(e, t, s, i)[0]]), false];
  }
  hasEffects(e) {
    return !!this.left.hasEffects(e) || this.getUsedBranch() !== this.left && this.right.hasEffects(e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    const i = this.getUsedBranch();
    return i ? i.hasEffectsOnInteractionAtPath(e, t, s) : this.left.hasEffectsOnInteractionAtPath(e, t, s) || this.right.hasEffectsOnInteractionAtPath(e, t, s);
  }
  include(e, t) {
    this.included = true;
    const s = this.getUsedBranch();
    t || !s || s === this.right && this.left.shouldBeIncluded(e) ? (this.left.include(e, t), this.right.include(e, t)) : s.include(e, t);
  }
  includePath(e, t) {
    this.included = true;
    const s = this.getUsedBranch();
    !s || s === this.right && this.left.shouldBeIncluded(t) ? (this.left.includePath(e, t), this.right.includePath(e, t)) : s.includePath(e, t);
  }
  removeAnnotations(e) {
    this.left.removeAnnotations(e);
  }
  render(e, t, { isCalleeOfRenderedParent: s, preventASI: i, renderedParentType: r, renderedSurroundingElement: o } = ze) {
    if (this.left.included && this.right.included) this.left.render(e, t, { preventASI: i, renderedSurroundingElement: o }), this.right.render(e, t);
    else {
      const a = Me(e.original, this.operator, this.left.end);
      if (this.right.included) {
        const l = Ct(e.original, a + 2);
        e.remove(this.start, l), i && Ii(e, l, this.right.start), this.left.removeAnnotations(e);
      } else e.remove(function(l, c, d) {
        for (; ; ) {
          if (c >= d || !Du.test(l[d - 1])) return d;
          d--;
        }
      }(e.original, this.left.end, a), this.end);
      this.getUsedBranch().render(e, t, { isCalleeOfRenderedParent: s, preventASI: i, renderedParentType: r || this.parent.type, renderedSurroundingElement: o || this.parent.type });
    }
  }
  getUsedBranch() {
    if (!this.isBranchResolutionAnalysed) {
      this.isBranchResolutionAnalysed = true;
      const e = this.left.getLiteralValueAtPath(G, xe, this), t = yn(e);
      if (typeof t == "symbol") return null;
      this.usedBranch = this.operator === "||" && t || this.operator === "&&" && !t || this.operator === "??" && e != null ? this.left : this.right;
    }
    return this.usedBranch;
  }
}
yi.prototype.includeNode = ge, yi.prototype.applyDeoptimizations = le;
class jc extends z {
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    for (const t of this.arguments) if (t.hasEffects(e)) return true;
    return !this.annotationPure && (this.callee.hasEffects(e) || this.callee.hasEffectsOnInteractionAtPath(G, this.interaction, e));
  }
  hasEffectsOnInteractionAtPath(e, { type: t }) {
    return e.length > 0 || t !== 0;
  }
  include(e, t) {
    this.included || this.includeNode(e), t ? super.include(e, true) : (this.callee.include(e, false), this.callee.includeCallArguments(this.interaction, e));
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.callee.includePath(U, e);
  }
  initialise() {
    super.initialise(), this.interaction = { args: [null, ...this.arguments], type: 2, withNew: true }, this.annotations && this.scope.context.options.treeshake.annotations && (this.annotationPure = this.annotations.some((e) => e.type === "pure"));
  }
  render(e, t) {
    this.callee.render(e, t), kc(e, t, this);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.callee.deoptimizeArgumentsOnInteractionAtPath(this.interaction, G, xe), this.scope.context.requestTreeshakingPass();
  }
}
class Nn extends z {
  constructor() {
    super(...arguments), this.objectEntity = null, this.protoProp = null;
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.getObjectEntity().deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizeCache() {
    this.getObjectEntity().deoptimizeAllProperties();
  }
  deoptimizePath(e) {
    this.getObjectEntity().deoptimizePath(e);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.getObjectEntity().getLiteralValueAtPath(e, t, s);
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t, s, i);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return this.getObjectEntity().hasEffectsOnInteractionAtPath(e, t, s);
  }
  include(e, t) {
    var _a2;
    this.included || this.includeNode(e), this.getObjectEntity().include(e, t), (_a2 = this.protoProp) == null ? void 0 : _a2.include(e, t);
  }
  includeNode(e) {
    var _a2;
    this.included = true, (_a2 = this.protoProp) == null ? void 0 : _a2.includePath(U, e);
  }
  includePath(e, t) {
    this.included || this.includeNode(t), this.getObjectEntity().includePath(e, t);
  }
  render(e, t, { renderedSurroundingElement: s } = ze) {
    if (s !== ct && s !== Hr || (e.appendRight(this.start, "("), e.prependLeft(this.end, ")")), this.properties.length > 0) {
      const i = wi(this.properties, e, this.start + 1, this.end - 1);
      let r = null;
      for (const { node: o, separator: a, start: l, end: c } of i) o.included ? (r = a, o.render(e, t)) : kn(o, e, l, c);
      r && e.remove(r, this.end - 1);
    }
  }
  getObjectEntity() {
    if (this.objectEntity !== null) return this.objectEntity;
    let e = Nt;
    const t = [];
    for (const s of this.properties) {
      if (s instanceof Qt) {
        t.push({ key: ne, kind: "init", property: s });
        continue;
      }
      let i;
      if (s.computed) {
        const r = s.key.getLiteralValueAtPath(G, xe, this);
        if (typeof r == "symbol") {
          t.push({ key: ne, kind: s.kind, property: s });
          continue;
        }
        i = String(r);
      } else if (i = s.key instanceof pe ? s.key.name : String(s.key.value), i === "__proto__" && s.kind === "init") {
        this.protoProp = s, e = s.value instanceof Ge && s.value.value === null ? null : s.value;
        continue;
      }
      t.push({ key: i, kind: s.kind, property: s });
    }
    return this.objectEntity = new Je(t, e);
  }
}
Nn.prototype.applyDeoptimizations = le;
class Uc extends z {
  initialise() {
    const e = this.scope.context.module.id;
    return j(Jr($n(Xs(this.message)), e));
  }
}
class Gc extends z {
  initialise() {
    const e = this.start, t = this.scope.context.module.id, s = Jr($n(Xs(this.message, e)), t);
    this.scope.context.error(s, e);
  }
}
class Eo extends z {
}
Eo.prototype.includeNode = Te;
class bi extends z {
  constructor() {
    super(...arguments), this.hasCachedEffect = null, this.hasLoggedEffect = false;
  }
  hasCachedEffects() {
    return !!this.included && (this.hasCachedEffect === null ? this.hasCachedEffect = this.hasEffects(Cn()) : this.hasCachedEffect);
  }
  hasEffects(e) {
    for (const t of this.body) if (t.hasEffects(e)) {
      if (this.scope.context.options.experimentalLogSideEffects && !this.hasLoggedEffect) {
        this.hasLoggedEffect = true;
        const { code: s, log: i, module: r } = this.scope.context;
        i(Ut, qu(s, r.id, qr(s, t.start, { offsetLine: 1 })), t.start);
      }
      return this.hasCachedEffect = true;
    }
    return false;
  }
  include(e, t) {
    this.included = true;
    for (const s of this.body) (t || s.shouldBeIncluded(e)) && s.include(e, t);
  }
  initialise() {
    if (super.initialise(), this.invalidAnnotations) for (const { start: e, end: t, type: s } of this.invalidAnnotations) this.scope.context.magicString.remove(e, t), s !== "pure" && s !== "noSideEffects" || this.scope.context.log(Q, Ku(this.scope.context.code.slice(e, t), this.scope.context.module.id, s), e);
  }
  render(e, t) {
    let s = this.start;
    if (e.original.startsWith("#!") && (s = Math.min(e.original.indexOf(`
`) + 1, this.end), e.remove(0, s)), this.body.length > 0) {
      for (; e.original[s] === "/" && /[*/]/.test(e.original[s + 1]); ) {
        const i = Yn(e.original.slice(s, this.body[0].start));
        if (i[0] === -1) break;
        s += i[1];
      }
      ds(this.body, e, s, this.end, t);
    } else super.render(e, t);
  }
}
bi.prototype.includeNode = ge, bi.prototype.applyDeoptimizations = le;
class ls extends Zs {
  get method() {
    return ue(this.flags, 262144);
  }
  set method(e) {
    this.flags = de(this.flags, 262144, e);
  }
  get shorthand() {
    return ue(this.flags, 524288);
  }
  set shorthand(e) {
    this.flags = de(this.flags, 524288, e);
  }
  declare(e, t, s) {
    return this.value.declare(e, this.getPathInProperty(t), s);
  }
  deoptimizeAssignment(e, t) {
    var _a2, _b;
    (_b = (_a2 = this.value).deoptimizeAssignment) == null ? void 0 : _b.call(_a2, this.getPathInProperty(e), t);
  }
  hasEffects(e) {
    return this.key.hasEffects(e) || this.value.hasEffects(e);
  }
  hasEffectsWhenDestructuring(e, t, s) {
    var _a2, _b;
    return (_b = (_a2 = this.value).hasEffectsWhenDestructuring) == null ? void 0 : _b.call(_a2, e, this.getPathInProperty(t), s);
  }
  includeDestructuredIfNecessary(e, t, s) {
    const i = this.getPathInProperty(t);
    let r = this.value.includeDestructuredIfNecessary(e, i, s) || this.included;
    return (r || (r = this.key.hasEffects(Cn()))) && (this.key.include(e, false), this.value.included || (this.value.includeNode(e), this.value.includeDestructuredIfNecessary(e, i, s))), !this.included && r && this.includeNode(e), this.included;
  }
  include(e, t) {
    this.included = true, this.key.include(e, t), this.value.include(e, t);
  }
  includePath(e, t) {
    this.included = true, this.value.includePath(e, t);
  }
  markDeclarationReached() {
    this.value.markDeclarationReached();
  }
  render(e, t) {
    this.shorthand || this.key.render(e, t), this.value.render(e, t, { isShorthandProperty: this.shorthand });
  }
  getPathInProperty(e) {
    return e.at(-1) === ne ? e : this.computed ? [...e, ne] : this.key instanceof pe ? [...e, this.key.name] : [...e, String(this.key.value)];
  }
}
ls.prototype.includeNode = ge, ls.prototype.applyDeoptimizations = le;
class xo extends z {
  get computed() {
    return ue(this.flags, 1024);
  }
  set computed(e) {
    this.flags = de(this.flags, 1024, e);
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    var _a2;
    (_a2 = this.value) == null ? void 0 : _a2.deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizePath(e) {
    var _a2;
    (_a2 = this.value) == null ? void 0 : _a2.deoptimizePath(e);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.value ? this.value.getLiteralValueAtPath(e, t, s) : oe;
  }
  getReturnExpressionWhenCalledAtPath(e, t, s, i) {
    return this.value ? this.value.getReturnExpressionWhenCalledAtPath(e, t, s, i) : De;
  }
  hasEffects(e) {
    var _a2;
    return this.key.hasEffects(e) || this.static && !!((_a2 = this.value) == null ? void 0 : _a2.hasEffects(e)) || no(this.decorators, e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return !this.value || this.value.hasEffectsOnInteractionAtPath(e, t, s);
  }
  includeNode(e) {
    var _a2;
    this.included = true, (_a2 = this.value) == null ? void 0 : _a2.includePath(U, e);
    for (const t of this.decorators) t.includePath(U, e);
  }
}
xo.prototype.applyDeoptimizations = le;
class Ao extends z {
  hasEffects(e) {
    var _a2;
    return !(e.ignore.returnYield && !((_a2 = this.argument) == null ? void 0 : _a2.hasEffects(e))) || (e.brokenFlow = true, false);
  }
  include(e, t) {
    var _a2;
    this.included || this.includeNode(e), (_a2 = this.argument) == null ? void 0 : _a2.include(e, t), e.brokenFlow = true;
  }
  includeNode(e) {
    var _a2;
    this.included = true, (_a2 = this.argument) == null ? void 0 : _a2.includePath(U, e);
  }
  initialise() {
    super.initialise(), this.scope.addReturnExpression(this.argument || se);
  }
  render(e, t) {
    this.argument && (this.argument.render(e, t, { preventASI: true }), this.argument.start === this.start + 6 && e.prependLeft(this.start + 6, " "));
  }
}
Ao.prototype.applyDeoptimizations = le;
class Ei extends z {
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.expressions[this.expressions.length - 1].deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizePath(e) {
    this.expressions[this.expressions.length - 1].deoptimizePath(e);
  }
  getLiteralValueAtPath(e, t, s) {
    return this.expressions[this.expressions.length - 1].getLiteralValueAtPath(e, t, s);
  }
  hasEffects(e) {
    for (const t of this.expressions) if (t.hasEffects(e)) return true;
    return false;
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return this.expressions[this.expressions.length - 1].hasEffectsOnInteractionAtPath(e, t, s);
  }
  include(e, t) {
    this.included = true;
    const s = this.expressions[this.expressions.length - 1];
    for (const i of this.expressions) (t || i === s && !(this.parent instanceof st) || i.shouldBeIncluded(e)) && i.include(e, t);
  }
  includePath(e, t) {
    this.included = true, this.expressions[this.expressions.length - 1].includePath(e, t);
  }
  removeAnnotations(e) {
    this.expressions[0].removeAnnotations(e);
  }
  render(e, t, { renderedParentType: s, isCalleeOfRenderedParent: i, preventASI: r } = ze) {
    let o = 0, a = null;
    const l = this.expressions[this.expressions.length - 1];
    for (const { node: c, separator: d, start: p, end: h } of wi(this.expressions, e, this.start, this.end)) if (c.included) if (o++, a = d, o === 1 && r && Ii(e, p, c.start), o === 1) {
      const f = s || this.parent.type;
      c.render(e, t, { isCalleeOfRenderedParent: i && c === l, renderedParentType: f, renderedSurroundingElement: f });
    } else c.render(e, t);
    else kn(c, e, p, h);
    a && e.remove(a, this.end);
  }
}
Ei.prototype.includeNode = ge, Ei.prototype.applyDeoptimizations = le;
class Hc extends z {
  bind() {
    this.variable = this.scope.findVariable("this");
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.variable.deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizePath(e) {
    this.variable.deoptimizePath(e);
  }
  include(e) {
    this.included || this.includeNode(e);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.scope.context.includeVariableInModule(this.variable, G, e);
  }
}
class Xn extends z {
  hasEffects(e) {
    var _a2;
    if ((_a2 = this.test) == null ? void 0 : _a2.hasEffects(e)) return true;
    for (const t of this.consequent) {
      if (e.brokenFlow) break;
      if (t.hasEffects(e)) return true;
    }
    return false;
  }
  include(e, t) {
    var _a2;
    this.included = true, (_a2 = this.test) == null ? void 0 : _a2.include(e, t);
    for (const s of this.consequent) (t || s.shouldBeIncluded(e)) && s.include(e, t);
  }
  render(e, t, s) {
    if (this.test && (this.test.render(e, t), this.test.start === this.start + 4 && e.prependLeft(this.test.start, " ")), this.consequent.length > 0) {
      const i = this.test ? this.test.end : Me(e.original, "default", this.start) + 7, r = Me(e.original, ":", i) + 1;
      ds(this.consequent, e, r, s.end, t);
    }
  }
}
Xn.prototype.needsBoundaries = true, Xn.prototype.includeNode = ge, Xn.prototype.applyDeoptimizations = le;
class xi extends z {
  createScope(e) {
    this.parentScope = e, this.scope = new rn(e);
  }
  hasEffects(e) {
    if (this.discriminant.hasEffects(e)) return true;
    const { brokenFlow: t, hasBreak: s, ignore: i } = e, { breaks: r } = i;
    i.breaks = true, e.hasBreak = false;
    let o = true;
    for (const a of this.cases) {
      if (a.hasEffects(e)) return true;
      o && (o = e.brokenFlow && !e.hasBreak), e.hasBreak = false, e.brokenFlow = t;
    }
    return this.defaultCase !== null && (e.brokenFlow = o), i.breaks = r, e.hasBreak = s, false;
  }
  include(e, t) {
    this.included = true, this.discriminant.include(e, t);
    const { brokenFlow: s, hasBreak: i } = e;
    e.hasBreak = false;
    let r = true, o = t || this.defaultCase !== null && this.defaultCase < this.cases.length - 1;
    for (let a = this.cases.length - 1; a >= 0; a--) {
      const l = this.cases[a];
      if (l.included && (o = true), !o) {
        const c = Cn();
        c.ignore.breaks = true, o = l.hasEffects(c);
      }
      o ? (l.include(e, t), r && (r = e.brokenFlow && !e.hasBreak), e.hasBreak = false, e.brokenFlow = s) : r = s;
    }
    o && this.defaultCase !== null && (e.brokenFlow = r), e.hasBreak = i;
  }
  initialise() {
    super.initialise();
    for (let e = 0; e < this.cases.length; e++) if (this.cases[e].test === null) return void (this.defaultCase = e);
    this.defaultCase = null;
  }
  parseNode(e) {
    return this.discriminant = new (this.scope.context.getNodeConstructor(e.discriminant.type))(this, this.parentScope).parseNode(e.discriminant), super.parseNode(e);
  }
  render(e, t) {
    this.discriminant.render(e, t), this.cases.length > 0 && ds(this.cases, e, this.cases[0].start, this.end - 1, t);
  }
}
xi.prototype.includeNode = ge, xi.prototype.applyDeoptimizations = le;
class So extends Cc {
  get hasCheckedForWarnings() {
    return ue(this.flags, 268435456);
  }
  set hasCheckedForWarnings(e) {
    this.flags = de(this.flags, 268435456, e);
  }
  bind() {
    super.bind();
  }
  hasEffects(e) {
    this.deoptimized || this.applyDeoptimizations();
    for (const t of this.quasi.expressions) if (t.hasEffects(e)) return true;
    return this.tag.hasEffects(e) || this.tag.hasEffectsOnInteractionAtPath(G, this.interaction, e);
  }
  include(e, t) {
    this.included || this.includeNode(e), t ? super.include(e, true) : (this.quasi.include(e, false), this.tag.include(e, false), this.tag.includeCallArguments(this.interaction, e));
  }
  initialise() {
    super.initialise(), this.args = [se, ...this.quasi.expressions], this.interaction = { args: [this.tag instanceof vt && !this.tag.variable ? this.tag.object : null, ...this.args], type: 2, withNew: false };
  }
  render(e, t) {
    if (this.tag.render(e, t, { isCalleeOfRenderedParent: true }), this.quasi.render(e, t), !this.hasCheckedForWarnings && this.tag.type === Wr) {
      this.hasCheckedForWarnings = true;
      const s = this.tag.name;
      this.scope.findVariable(s).isNamespace && this.scope.context.log(Q, Wl(s), this.start);
    }
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.tag.deoptimizeArgumentsOnInteractionAtPath(this.interaction, G, xe), this.scope.context.requestTreeshakingPass();
  }
  getReturnExpression(e = xe) {
    return this.returnExpression === null ? (this.returnExpression = De, this.returnExpression = this.tag.getReturnExpressionWhenCalledAtPath(G, this.interaction, e, this)) : this.returnExpression;
  }
}
So.prototype.includeNode = Te;
class $o extends z {
  get tail() {
    return ue(this.flags, 1048576);
  }
  set tail(e) {
    this.flags = de(this.flags, 1048576, e);
  }
  bind() {
  }
  hasEffects() {
    return false;
  }
  parseNode(e) {
    return this.value = e.value, super.parseNode(e);
  }
  render() {
  }
}
$o.prototype.includeNode = Te;
class Wc extends z {
  deoptimizeArgumentsOnInteractionAtPath() {
  }
  getLiteralValueAtPath(e) {
    return e.length > 0 || this.quasis.length !== 1 ? oe : this.quasis[0].value.cooked;
  }
  getReturnExpressionWhenCalledAtPath(e) {
    return e.length !== 1 ? De : ys(ts, e[0]);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return t.type === 0 ? e.length > 1 : t.type !== 2 || e.length !== 1 || gs(ts, e[0], t, s);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations();
    for (const t of this.expressions) t.includePath(U, e);
  }
  render(e, t) {
    e.indentExclusionRanges.push([this.start, this.end]), super.render(e, t);
  }
}
class qc extends Xe {
  constructor(e, t) {
    super(e, t), this.variables.set("this", new et("this", null, xt, G, t, "other"));
  }
  addDeclaration(e, t, s, i, r) {
    return this.context.module.importDescriptions.has(e.name) && t.error(Rn(e.name), e.start), super.addDeclaration(e, t, s, i, r);
  }
  addExportDefaultDeclaration(e, t, s) {
    const i = new pt(e, t, s);
    return this.variables.set("default", i), i;
  }
  addNamespaceMemberAccess() {
  }
  deconflict(e, t, s) {
    for (const i of this.children) i.deconflict(e, t, s);
  }
  findLexicalBoundary() {
    return this;
  }
  findVariable(e) {
    const t = this.variables.get(e) || this.accessedOutsideVariables.get(e);
    if (t) return t;
    const s = this.context.traceVariable(e) || this.parent.findVariable(e);
    return s instanceof to && this.accessedOutsideVariables.set(e, s), s;
  }
}
class Kc extends z {
  bind() {
    this.variable = this.scope.findVariable("this");
  }
  deoptimizeArgumentsOnInteractionAtPath(e, t, s) {
    this.variable.deoptimizeArgumentsOnInteractionAtPath(e, t, s);
  }
  deoptimizePath(e) {
    this.variable.deoptimizePath(e);
  }
  hasEffectsOnInteractionAtPath(e, t, s) {
    return e.length === 0 ? t.type !== 0 : this.variable.hasEffectsOnInteractionAtPath(e, t, s);
  }
  include(e) {
    this.included || this.includeNode(e);
  }
  includeNode(e) {
    this.included = true, this.deoptimized || this.applyDeoptimizations(), this.scope.context.includeVariableInModule(this.variable, G, e);
  }
  includePath(e, t) {
    this.included ? e.length > 0 && this.variable.includePath(e, t) : (this.included = true, this.scope.context.includeVariableInModule(this.variable, e, t));
    const s = function(i, r) {
      for (; !(i instanceof uc && i.thisVariable === r); ) {
        if (!(i instanceof Xe)) return null;
        i = i.parent;
      }
      return i;
    }(this.scope, this.variable);
    s && s.functionNode.parent instanceof ls && s.functionNode.parent.parent instanceof Nn && s.functionNode.parent.parent.includePath(e, t);
  }
  initialise() {
    super.initialise(), this.alias = this.scope.findLexicalBoundary() instanceof qc ? this.scope.context.moduleContext : null, this.alias === "undefined" && this.scope.context.log(Q, { code: "THIS_IS_UNDEFINED", message: "The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten", url: Re("troubleshooting/#error-this-is-undefined") }, this.start);
  }
  render(e) {
    this.alias !== null && e.overwrite(this.start, this.end, this.alias, { contentOnly: false, storeName: true });
  }
}
class Xc extends z {
  hasEffects() {
    return true;
  }
  include(e, t) {
    this.included || this.includeNode(e), this.argument.include(e, t), e.brokenFlow = true;
  }
  includeNode(e) {
    this.included || (this.included = true, this.argument.includePath(U, e));
  }
  render(e, t) {
    this.argument.render(e, t, { preventASI: true }), this.argument.start === this.start + 5 && e.prependLeft(this.start + 5, " ");
  }
}
class Ai extends z {
  constructor() {
    super(...arguments), this.directlyIncluded = false, this.includedLabelsAfterBlock = null;
  }
  hasEffects(e) {
    var _a2;
    return (this.scope.context.options.treeshake.tryCatchDeoptimization ? this.block.body.length > 0 : this.block.hasEffects(e)) || !!((_a2 = this.finalizer) == null ? void 0 : _a2.hasEffects(e));
  }
  include(e, t) {
    var _a2, _b;
    const s = (_a2 = this.scope.context.options.treeshake) == null ? void 0 : _a2.tryCatchDeoptimization, { brokenFlow: i, includedLabels: r } = e;
    if (this.directlyIncluded && s) {
      if (this.includedLabelsAfterBlock) for (const o of this.includedLabelsAfterBlock) r.add(o);
    } else this.included = true, this.directlyIncluded = true, this.block.include(e, s ? ec : t), r.size > 0 && (this.includedLabelsAfterBlock = [...r]), e.brokenFlow = i;
    this.handler !== null && (this.handler.include(e, t), e.brokenFlow = i), (_b = this.finalizer) == null ? void 0 : _b.include(e, t);
  }
}
Ai.prototype.includeNode = ge, Ai.prototype.applyDeoptimizations = le;
const ah = { "!": (n) => !n, "+": (n) => +n, "-": (n) => -n, delete: () => oe, typeof: (n) => typeof n, void: () => {
}, "~": (n) => ~n }, za = Symbol("Unassigned");
class vo extends z {
  constructor() {
    super(...arguments), this.renderedLiteralValue = za;
  }
  get prefix() {
    return ue(this.flags, 2097152);
  }
  set prefix(e) {
    this.flags = de(this.flags, 2097152, e);
  }
  deoptimizeCache() {
    this.renderedLiteralValue = oe;
  }
  getLiteralValueAtPath(e, t, s) {
    if (e.length > 0) return oe;
    const i = this.argument.getLiteralValueAtPath(G, t, s);
    if (typeof i == "symbol") {
      if (this.operator === "void") return;
      if (this.operator === "!") {
        if (i === ki) return true;
        if (i === Ni) return false;
      }
      return oe;
    }
    return ah[this.operator](i);
  }
  hasEffects(e) {
    return this.deoptimized || this.applyDeoptimizations(), !(this.operator === "typeof" && this.argument instanceof pe) && (this.argument.hasEffects(e) || this.operator === "delete" && this.argument.hasEffectsOnInteractionAtPath(G, Gr, e));
  }
  hasEffectsOnInteractionAtPath(e, { type: t }) {
    return t !== 0 || e.length > (this.operator === "void" ? 0 : 1);
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.operator === "delete" && (this.argument.deoptimizePath(G), this.scope.context.requestTreeshakingPass());
  }
  getRenderedLiteralValue(e) {
    return this.renderedLiteralValue !== za ? this.renderedLiteralValue : this.renderedLiteralValue = e ? oe : Nc(this.getLiteralValueAtPath(G, xe, this));
  }
  include(e, t, s) {
    var _a2;
    this.deoptimized || this.applyDeoptimizations(), this.included = true;
    const i = this.argument instanceof pe && ((_a2 = this.argument.variable) == null ? void 0 : _a2.included);
    (typeof this.getRenderedLiteralValue(t) == "symbol" || this.argument.shouldBeIncluded(e) || i) && (this.argument.include(e, t), this.renderedLiteralValue = oe);
  }
  render(e, t) {
    if (typeof this.renderedLiteralValue == "symbol") super.render(e, t);
    else {
      let s = this.renderedLiteralValue;
      lh.test(e.original[this.start - 1]) || (s = ` ${s}`), e.overwrite(this.start, this.end, s);
    }
  }
}
const lh = /[\s([=%&*+-/<>^|,?:;]/;
vo.prototype.includeNode = Te;
class Po extends z {
  hasEffects(e) {
    return this.deoptimized || this.applyDeoptimizations(), this.argument.hasEffectsAsAssignmentTarget(e, true);
  }
  hasEffectsOnInteractionAtPath(e, { type: t }) {
    return e.length > 1 || t !== 0;
  }
  include(e, t) {
    this.included || this.includeNode(e), this.argument.includeAsAssignmentTarget(e, t, true);
  }
  initialise() {
    super.initialise(), this.argument.setAssignedValue(se);
  }
  render(e, t) {
    const { exportNamesByVariable: s, format: i, snippets: { _: r } } = t;
    if (this.argument.render(e, t), i === "system") {
      const o = this.argument.variable, a = s.get(o);
      if (a) if (this.prefix) a.length === 1 ? Vr(o, this.start, this.end, e, t) : wl(o, this.start, this.end, this.parent.type !== ct, e, t);
      else {
        const l = this.operator[0];
        (function(c, d, p, h, f, E, g) {
          const { _: y } = E.snippets;
          f.prependRight(d, `${nn([c], E, g)},${y}`), h && (f.prependRight(d, "("), f.appendLeft(p, ")"));
        })(o, this.start, this.end, this.parent.type !== ct, e, t, `${r}${l}${r}1`);
      }
    }
  }
  applyDeoptimizations() {
    this.deoptimized = true, this.argument.deoptimizePath(G), this.argument instanceof pe && this.scope.findVariable(this.argument.name).markReassigned(), this.scope.context.requestTreeshakingPass();
  }
}
Po.prototype.includeNode = Te;
class cs extends z {
  deoptimizePath() {
    for (const e of this.declarations) e.deoptimizePath(G);
  }
  hasEffectsOnInteractionAtPath() {
    return false;
  }
  include(e, t, { asSingleStatement: s } = ze) {
    this.included = true;
    for (const i of this.declarations) {
      (t || i.shouldBeIncluded(e)) && i.include(e, t);
      const { id: r, init: o } = i;
      s && r.include(e, t), o && r.included && !o.included && (r instanceof Dt || r instanceof Fi) && o.include(e, t);
    }
  }
  initialise() {
    super.initialise(), this.isUsingDeclaration = this.kind === "await using" || this.kind === "using";
    for (const e of this.declarations) e.declareDeclarator(this.kind, this.isUsingDeclaration);
  }
  removeAnnotations(e) {
    this.declarations[0].removeAnnotations(e);
  }
  render(e, t, s = ze) {
    if (this.isUsingDeclaration || function(i, r) {
      for (const o of i) {
        if (!o.id.included) return false;
        if (o.id.type === Wr) {
          if (r.has(o.id.variable)) return false;
        } else {
          const a = [];
          if (o.id.addExportedVariables(a, r), a.length > 0) return false;
        }
      }
      return true;
    }(this.declarations, t.exportNamesByVariable)) {
      for (const i of this.declarations) i.render(e, t);
      s.isNoStatement || e.original.charCodeAt(this.end - 1) === 59 || e.appendLeft(this.end, ";");
    } else this.renderReplacedDeclarations(e, t);
  }
  renderDeclarationEnd(e, t, s, i, r, o, a) {
    e.original.charCodeAt(this.end - 1) === 59 && e.remove(this.end - 1, this.end), t += ";", s === null ? e.appendLeft(r, t) : (e.original.charCodeAt(i - 1) !== 10 || e.original.charCodeAt(this.end) !== 10 && e.original.charCodeAt(this.end) !== 13 || (i--, e.original.charCodeAt(i) === 13 && i--), i === s + 1 ? e.overwrite(s, r, t) : (e.overwrite(s, s + 1, t), e.remove(i, r))), o.length > 0 && e.appendLeft(r, ` ${nn(o, a)};`);
  }
  renderReplacedDeclarations(e, t) {
    const s = wi(this.declarations, e, this.start + this.kind.length, this.end - (e.original.charCodeAt(this.end - 1) === 59 ? 1 : 0));
    let i, r;
    r = Ct(e.original, this.start + this.kind.length);
    let o = r - 1;
    e.remove(this.start, o);
    let a, l = false, c = false, d = "";
    const p = [], h = function(f, E, g) {
      var _a2;
      let y = null;
      if (E.format === "system") {
        for (const { node: m } of f) m.id instanceof pe && m.init && g.length === 0 && ((_a2 = E.exportNamesByVariable.get(m.id.variable)) == null ? void 0 : _a2.length) === 1 ? (y = m.id.variable, g.push(y)) : m.id.addExportedVariables(g, E.exportNamesByVariable);
        g.length > 1 ? y = null : y && (g.length = 0);
      }
      return y;
    }(s, t, p);
    for (const { node: f, start: E, separator: g, contentEnd: y, end: m } of s) if (f.included) {
      if (f.render(e, t), a = "", !f.id.included || f.id instanceof pe && Lc(f.id.variable, t.exportNamesByVariable)) c && (d += ";"), l = false;
      else {
        if (h && h === f.id.variable) {
          const b = Me(e.original, "=", f.id.end);
          Vr(h, Ct(e.original, b + 1), g === null ? y : g, e, t);
        }
        l ? d += "," : (c && (d += ";"), a += `${this.kind} `, l = true);
      }
      r === o + 1 ? e.overwrite(o, r, d + a) : (e.overwrite(o, o + 1, d), e.appendLeft(r, a)), i = y, r = m, c = true, o = g, d = "";
    } else kn(f, e, E, m);
    this.renderDeclarationEnd(e, d, o, i, r, p, t);
  }
}
cs.prototype.includeNode = ge, cs.prototype.applyDeoptimizations = le;
class Si extends z {
  hasEffects(e) {
    return !!this.test.hasEffects(e) || ji(e, this.body);
  }
  include(e, t) {
    this.included = true, this.test.include(e, t), Es(e, this.body, t);
  }
}
Si.prototype.includeNode = ge, Si.prototype.applyDeoptimizations = le;
class Jc extends z {
  applyDeoptimizations() {
    var _a2;
    this.deoptimized = true, (_a2 = this.argument) == null ? void 0 : _a2.deoptimizePath(U);
  }
  hasEffects(e) {
    var _a2;
    return this.deoptimized || this.applyDeoptimizations(), !(e.ignore.returnYield && !((_a2 = this.argument) == null ? void 0 : _a2.hasEffects(e)));
  }
  includeNode(e) {
    var _a2;
    this.included = true, this.deoptimized || this.applyDeoptimizations(), (_a2 = this.argument) == null ? void 0 : _a2.includePath(U, e);
  }
  render(e, t) {
    this.argument && (this.argument.render(e, t, { preventASI: true }), this.argument.start === this.start + 5 && e.prependLeft(this.start + 5, " "));
  }
}
const ch = ["PanicError", "ParseError", "ArrayExpression", "ArrayPattern", "ArrowFunctionExpression", "AssignmentExpression", "AssignmentPattern", "AwaitExpression", "BinaryExpression", "BlockStatement", "BreakStatement", "CallExpression", "CatchClause", "ChainExpression", "ClassBody", "ClassDeclaration", "ClassExpression", "ConditionalExpression", "ContinueStatement", "DebuggerStatement", "Decorator", "ExpressionStatement", "DoWhileStatement", "EmptyStatement", "ExportAllDeclaration", "ExportDefaultDeclaration", "ExportNamedDeclaration", "ExportSpecifier", "ExpressionStatement", "ForInStatement", "ForOfStatement", "ForStatement", "FunctionDeclaration", "FunctionExpression", "Identifier", "IfStatement", "ImportAttribute", "ImportDeclaration", "ImportDefaultSpecifier", "ImportExpression", "ImportNamespaceSpecifier", "ImportSpecifier", "JSXAttribute", "JSXClosingElement", "JSXClosingFragment", "JSXElement", "JSXEmptyExpression", "JSXExpressionContainer", "JSXFragment", "JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName", "JSXOpeningElement", "JSXOpeningFragment", "JSXSpreadAttribute", "JSXSpreadChild", "JSXText", "LabeledStatement", "Literal", "Literal", "Literal", "Literal", "Literal", "Literal", "LogicalExpression", "MemberExpression", "MetaProperty", "MethodDefinition", "NewExpression", "ObjectExpression", "ObjectPattern", "PrivateIdentifier", "Program", "Property", "PropertyDefinition", "RestElement", "ReturnStatement", "SequenceExpression", "SpreadElement", "StaticBlock", "Super", "SwitchCase", "SwitchStatement", "TaggedTemplateExpression", "TemplateElement", "TemplateLiteral", "ThisExpression", "ThrowStatement", "TryStatement", "UnaryExpression", "UpdateExpression", "VariableDeclaration", "VariableDeclarator", "WhileStatement", "YieldExpression"], uh = [Uc, Gc, eo, Fi, rs, wc, Ic, si, ro, tn, ii, oo, ri, oi, ai, vn, li, ci, ui, ao, lo, st, di, co, bn, Wt, qn, hi, st, Rc, Dc, pi, Pn, uo, pe, In, Oc, Kn, os, ho, as, mi, Gi, _c, Mc, Tc, xs, Hi, Bc, po, zc, go, yo, Fc, gi, Vc, As, bo, Ge, Ge, Ge, Ge, Ge, Ge, yi, vt, yc, Qs, jc, Nn, Dt, Eo, bi, ls, xo, Ht, Ao, Ei, Qt, ei, Hc, Xn, xi, So, $o, Wc, Kc, Xc, Ai, vo, Po, cs, Ui, Si, Jc], dh = [function(n, e, t) {
  n.message = t.convertString(t[e]);
}, function(n, e, t) {
  n.message = t.convertString(t[e]);
}, function(n, e, t) {
  const { scope: s } = n;
  n.elements = be(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.elements = be(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.async = !(1 & ~i), n.expression = !(2 & ~i), n.generator = !(4 & ~i);
  const r = n.annotations = Qe(t[e + 1], t);
  n.annotationNoSideEffects = r.some((a) => a.type === "noSideEffects");
  const o = n.params = be(n, s, t[e + 2], t);
  s.addParameterVariables(o.map((a) => a.declare("parameter", G, se)), o[o.length - 1] instanceof Ht), n.body = O(n, s.bodyScope, t[e + 3], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.operator = je[t[e]], n.left = O(n, s, t[e + 1], t), n.right = O(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.left = O(n, s, t[e], t), n.right = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.argument = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.operator = je[t[e]], n.left = O(n, s, t[e + 1], t), n.right = O(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.body = be(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.label = i === 0 ? null : O(n, s, i, t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.optional = !(1 & ~i), n.annotations = Qe(t[e + 1], t), n.callee = O(n, s, t[e + 2], t), n.arguments = be(n, s, t[e + 3], t);
}, function(n, e, t) {
  var _a2;
  const { scope: s } = n, i = t[e];
  (_a2 = n.param = i === 0 ? null : O(n, s, i, t)) == null ? void 0 : _a2.declare("parameter", G, se), n.body = O(n, s.bodyScope, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.expression = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  if (i) {
    const r = t[i], o = n.body = new Array(r);
    for (let a = 0; a < r; a++) {
      const l = t[i + 1 + a];
      o[a] = O(n, t[l] === 79 || 1 & t[l + 3] ? s : s.instanceScope, l, t);
    }
  } else n.body = [];
}, function(n, e, t) {
  const { scope: s } = n;
  n.decorators = be(n, s, t[e], t);
  const i = t[e + 1];
  n.id = i === 0 ? null : O(n, s.parent, i, t);
  const r = t[e + 2];
  n.superClass = r === 0 ? null : O(n, s, r, t), n.body = O(n, s, t[e + 3], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.decorators = be(n, s, t[e], t);
  const i = t[e + 1];
  n.id = i === 0 ? null : O(n, s, i, t);
  const r = t[e + 2];
  n.superClass = r === 0 ? null : O(n, s, r, t), n.body = O(n, s, t[e + 3], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.test = O(n, s, t[e], t), n.consequent = O(n, s, t[e + 1], t), n.alternate = O(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.label = i === 0 ? null : O(n, s, i, t);
}, function() {
}, function(n, e, t) {
  const { scope: s } = n;
  n.expression = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.directive = t.convertString(t[e]), n.expression = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.body = O(n, s, t[e], t), n.test = O(n, s, t[e + 1], t);
}, function() {
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.exported = i === 0 ? null : O(n, s, i, t), n.source = O(n, s, t[e + 1], t), n.attributes = be(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.declaration = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.specifiers = be(n, s, t[e], t);
  const i = t[e + 1];
  n.source = i === 0 ? null : O(n, s, i, t), n.attributes = be(n, s, t[e + 2], t);
  const r = t[e + 3];
  n.declaration = r === 0 ? null : O(n, s, r, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.local = O(n, s, t[e], t);
  const i = t[e + 1];
  n.exported = i === 0 ? n.local : O(n, s, i, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.expression = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.left = O(n, s, t[e], t), n.right = O(n, s, t[e + 1], t), n.body = O(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.await = !(1 & ~i), n.left = O(n, s, t[e + 1], t), n.right = O(n, s, t[e + 2], t), n.body = O(n, s, t[e + 3], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.init = i === 0 ? null : O(n, s, i, t);
  const r = t[e + 1];
  n.test = r === 0 ? null : O(n, s, r, t);
  const o = t[e + 2];
  n.update = o === 0 ? null : O(n, s, o, t), n.body = O(n, s, t[e + 3], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.async = !(1 & ~i), n.generator = !(2 & ~i);
  const r = n.annotations = Qe(t[e + 1], t);
  n.annotationNoSideEffects = r.some((l) => l.type === "noSideEffects");
  const o = t[e + 2];
  n.id = o === 0 ? null : O(n, s.parent, o, t);
  const a = n.params = be(n, s, t[e + 3], t);
  s.addParameterVariables(a.map((l) => l.declare("parameter", G, se)), a[a.length - 1] instanceof Ht), n.body = O(n, s.bodyScope, t[e + 4], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.async = !(1 & ~i), n.generator = !(2 & ~i);
  const r = n.annotations = Qe(t[e + 1], t);
  n.annotationNoSideEffects = r.some((l) => l.type === "noSideEffects");
  const o = t[e + 2];
  n.id = o === 0 ? null : O(n, n.idScope, o, t);
  const a = n.params = be(n, s, t[e + 3], t);
  s.addParameterVariables(a.map((l) => l.declare("parameter", G, se)), a[a.length - 1] instanceof Ht), n.body = O(n, s.bodyScope, t[e + 4], t);
}, function(n, e, t) {
  n.name = t.convertString(t[e]);
}, function(n, e, t) {
  const { scope: s } = n;
  n.test = O(n, s, t[e], t), n.consequent = O(n, n.consequentScope = new fi(s), t[e + 1], t);
  const i = t[e + 2];
  n.alternate = i === 0 ? null : O(n, n.alternateScope = new fi(s), i, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.key = O(n, s, t[e], t), n.value = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.specifiers = be(n, s, t[e], t), n.source = O(n, s, t[e + 1], t), n.attributes = be(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.local = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.source = O(n, s, t[e], t), n.sourceAstNode = L(t[e], t);
  const i = t[e + 1];
  n.options = i === 0 ? null : O(n, s, i, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.local = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.local = O(n, s, t[e + 1], t), n.imported = i === 0 ? n.local : O(n, s, i, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.name = O(n, s, t[e], t);
  const i = t[e + 1];
  n.value = i === 0 ? null : O(n, s, i, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.name = O(n, s, t[e], t);
}, function() {
}, function(n, e, t) {
  const { scope: s } = n;
  n.openingElement = O(n, s, t[e], t), n.children = be(n, s, t[e + 1], t);
  const i = t[e + 2];
  n.closingElement = i === 0 ? null : O(n, s, i, t);
}, function() {
}, function(n, e, t) {
  const { scope: s } = n;
  n.expression = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.openingFragment = O(n, s, t[e], t), n.children = be(n, s, t[e + 1], t), n.closingFragment = O(n, s, t[e + 2], t);
}, function(n, e, t) {
  n.name = t.convertString(t[e]);
}, function(n, e, t) {
  const { scope: s } = n;
  n.object = O(n, s, t[e], t), n.property = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.namespace = O(n, s, t[e], t), n.name = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.selfClosing = !(1 & ~i), n.name = O(n, s, t[e + 1], t), n.attributes = be(n, s, t[e + 2], t);
}, function(n) {
  n.attributes = [], n.selfClosing = false;
}, function(n, e, t) {
  const { scope: s } = n;
  n.argument = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.expression = O(n, s, t[e], t);
}, function(n, e, t) {
  n.value = t.convertString(t[e]), n.raw = t.convertString(t[e + 1]);
}, function(n, e, t) {
  const { scope: s } = n;
  n.label = O(n, s, t[e], t), n.body = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const s = n.bigint = t.convertString(t[e]);
  n.raw = t.convertString(t[e + 1]), n.value = BigInt(s);
}, function(n, e, t) {
  const s = t[e], i = n.value = !(1 & ~s);
  n.raw = i ? "true" : "false";
}, function(n) {
  n.value = null;
}, function(n, e, t) {
  const s = t[e];
  n.raw = s === 0 ? void 0 : t.convertString(s), n.value = new DataView(t.buffer).getFloat64(e + 1 << 2, true);
}, function(n, e, t) {
  const s = t.convertString(t[e]), i = t.convertString(t[e + 1]);
  n.raw = `/${i}/${s}`, n.regex = { flags: s, pattern: i }, n.value = new RegExp(i, s);
}, function(n, e, t) {
  n.value = t.convertString(t[e]);
  const s = t[e + 1];
  n.raw = s === 0 ? void 0 : t.convertString(s);
}, function(n, e, t) {
  const { scope: s } = n;
  n.operator = je[t[e]], n.left = O(n, s, t[e + 1], t), n.right = O(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.computed = !(1 & ~i), n.optional = !(2 & ~i), n.object = O(n, s, t[e + 1], t), n.property = O(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.meta = O(n, s, t[e], t), n.property = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.static = !(1 & ~i), n.computed = !(2 & ~i), n.decorators = be(n, s, t[e + 1], t), n.key = O(n, s, t[e + 2], t), n.value = O(n, s, t[e + 3], t), n.kind = je[t[e + 4]];
}, function(n, e, t) {
  const { scope: s } = n;
  n.annotations = Qe(t[e], t), n.callee = O(n, s, t[e + 1], t), n.arguments = be(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.properties = be(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.properties = be(n, s, t[e], t);
}, function(n, e, t) {
  n.name = t.convertString(t[e]);
}, function(n, e, t) {
  const { scope: s } = n;
  n.body = be(n, s, t[e], t), n.invalidAnnotations = Qe(t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.method = !(1 & ~i), n.shorthand = !(2 & ~i), n.computed = !(4 & ~i);
  const r = t[e + 1];
  n.value = O(n, s, t[e + 2], t), n.kind = je[t[e + 3]], n.key = r === 0 ? n.value : O(n, s, r, t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.static = !(1 & ~i), n.computed = !(2 & ~i), n.decorators = be(n, s, t[e + 1], t), n.key = O(n, s, t[e + 2], t);
  const r = t[e + 3];
  n.value = r === 0 ? null : O(n, s, r, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.argument = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.argument = i === 0 ? null : O(n, s, i, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.expressions = be(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.argument = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.body = be(n, s, t[e], t);
}, function() {
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.test = i === 0 ? null : O(n, s, i, t), n.consequent = be(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.discriminant = O(n, n.parentScope, t[e], t), n.cases = be(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.tag = O(n, s, t[e], t), n.quasi = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const s = t[e];
  n.tail = !(1 & ~s);
  const i = t[e + 1], r = i === 0 ? void 0 : t.convertString(i), o = t.convertString(t[e + 2]);
  n.value = { cooked: r, raw: o };
}, function(n, e, t) {
  const { scope: s } = n;
  n.quasis = be(n, s, t[e], t), n.expressions = be(n, s, t[e + 1], t);
}, function() {
}, function(n, e, t) {
  const { scope: s } = n;
  n.argument = O(n, s, t[e], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.block = O(n, s, t[e], t);
  const i = t[e + 1];
  n.handler = i === 0 ? null : O(n, s, i, t);
  const r = t[e + 2];
  n.finalizer = r === 0 ? null : O(n, s, r, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.operator = je[t[e]], n.argument = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.prefix = !(1 & ~i), n.operator = je[t[e + 1]], n.argument = O(n, s, t[e + 2], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.kind = je[t[e]], n.declarations = be(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.id = O(n, s, t[e], t);
  const i = t[e + 1];
  n.init = i === 0 ? null : O(n, s, i, t);
}, function(n, e, t) {
  const { scope: s } = n;
  n.test = O(n, s, t[e], t), n.body = O(n, s, t[e + 1], t);
}, function(n, e, t) {
  const { scope: s } = n, i = t[e];
  n.delegate = !(1 & ~i);
  const r = t[e + 1];
  n.argument = r === 0 ? null : O(n, s, r, t);
}];
function O(n, e, t, s) {
  const i = s[t], r = uh[i];
  if (!r) throw console.trace(), new Error(`Unknown node type: ${i}`);
  const o = new r(n, e);
  return o.type = ch[i], o.start = s[t + 1], o.end = s[t + 2], dh[i](o, t + 3, s), o.initialise(), o;
}
function be(n, e, t, s) {
  if (t === 0) return $e;
  const i = s[t++], r = new Array(i);
  for (let o = 0; o < i; o++) {
    const a = s[t++];
    r[o] = a ? O(n, e, a, s) : null;
  }
  return r;
}
const cr = { ArrayExpression: eo, ArrayPattern: Fi, ArrowFunctionExpression: rs, AssignmentExpression: wc, AssignmentPattern: Ic, AwaitExpression: si, BinaryExpression: ro, BlockStatement: tn, BreakStatement: ii, CallExpression: oo, CatchClause: ri, ChainExpression: oi, ClassBody: ai, ClassDeclaration: vn, ClassExpression: li, ConditionalExpression: ci, ContinueStatement: ui, DebuggerStatement: ao, Decorator: lo, DoWhileStatement: di, EmptyStatement: co, ExportAllDeclaration: bn, ExportDefaultDeclaration: Wt, ExportNamedDeclaration: qn, ExportSpecifier: hi, ExpressionStatement: st, ForInStatement: Rc, ForOfStatement: Dc, ForStatement: pi, FunctionDeclaration: Pn, FunctionExpression: uo, Identifier: pe, IfStatement: In, ImportAttribute: Oc, ImportDeclaration: Kn, ImportDefaultSpecifier: os, ImportExpression: ho, ImportNamespaceSpecifier: as, ImportSpecifier: mi, JSXAttribute: Gi, JSXClosingElement: _c, JSXClosingFragment: Mc, JSXElement: Tc, JSXEmptyExpression: xs, JSXExpressionContainer: Hi, JSXFragment: Bc, JSXIdentifier: po, JSXMemberExpression: zc, JSXNamespacedName: go, JSXOpeningElement: yo, JSXOpeningFragment: Fc, JSXSpreadAttribute: gi, JSXSpreadChild: Vc, JSXText: As, LabeledStatement: bo, Literal: Ge, LogicalExpression: yi, MemberExpression: vt, MetaProperty: yc, MethodDefinition: Qs, NewExpression: jc, ObjectExpression: Nn, ObjectPattern: Dt, PanicError: Uc, ParseError: Gc, PrivateIdentifier: Eo, Program: bi, Property: ls, PropertyDefinition: xo, RestElement: Ht, ReturnStatement: Ao, SequenceExpression: Ei, SpreadElement: Qt, StaticBlock: ei, Super: Hc, SwitchCase: Xn, SwitchStatement: xi, TaggedTemplateExpression: So, TemplateElement: $o, TemplateLiteral: Wc, ThisExpression: Kc, ThrowStatement: Xc, TryStatement: Ai, UnaryExpression: vo, UnknownNode: class extends z {
  hasEffects() {
    return true;
  }
  include(n) {
    super.include(n, true);
  }
}, UpdateExpression: Po, VariableDeclaration: cs, VariableDeclarator: Ui, WhileStatement: Si, YieldExpression: Jc };
class hh extends sn {
  constructor(e) {
    super(wn), this.module = e;
  }
  includePath(e, t) {
    super.includePath(e, t), this.module.needsExportShim = true;
  }
}
var Kt;
(function(n) {
  n[n.LOAD_AND_PARSE = 0] = "LOAD_AND_PARSE", n[n.ANALYSE = 1] = "ANALYSE", n[n.GENERATE = 2] = "GENERATE";
})(Kt || (Kt = {}));
const Yc = /* @__PURE__ */ new WeakMap();
function wo(n, e) {
  if (n) {
    const t = Yc.get(n);
    t && function(s) {
      s.encodedMappings === void 0 && s.decodedMappings && (s.encodedMappings = Al(s.decodedMappings)), s.decodedMappings = void 0;
    }(t);
  }
  if (e) for (const t of e) t.missing || wo(t);
}
function En(n) {
  if (!n) return null;
  if (typeof n == "string" && (n = JSON.parse(n)), !n.mappings) return { mappings: [], names: [], sources: [], version: 3 };
  const e = n.mappings, t = Array.isArray(e), s = { decodedMappings: t ? e : void 0, encodedMappings: t ? void 0 : e }, i = { ...n, get mappings() {
    return s.decodedMappings || (s.decodedMappings = s.encodedMappings ? function(r) {
      const { length: o } = r, a = new xu(r), l = [];
      let c = 0, d = 0, p = 0, h = 0, f = 0;
      do {
        const E = a.indexOf(";"), g = [];
        let y = true, m = 0;
        for (c = 0; a.pos < E; ) {
          let b;
          c = _n(a, c), c < m && (y = false), m = c, Bo(a, E) ? (d = _n(a, d), p = _n(a, p), h = _n(a, h), Bo(a, E) ? (f = _n(a, f), b = [c, d, p, h, f]) : b = [c, d, p, h]) : b = [c], g.push(b), a.pos++;
        }
        y || Au(g), l.push(g), a.pos = E + 1;
      } while (a.pos <= o);
      return l;
    }(s.encodedMappings) : [], s.encodedMappings = void 0), s.decodedMappings;
  } };
  return Yc.set(i, s), i;
}
function ur(n) {
  return n.id;
}
const Io = (n, { allowReturnOutsideFunction: e = false, jsx: t = false } = {}) => function(s) {
  const i = L(0, s);
  switch (i.type) {
    case "PanicError":
      return j($n(Xs(i.message)));
    case "ParseError":
      return j($n(Xs(i.message, i.start)));
    default:
      return i;
  }
}(Pc($c(n, e, t))), ph = /* @__PURE__ */ new Set(["assert", "with"]);
function Zc(n) {
  var _a2;
  const { scope: { context: e }, options: t, start: s } = n;
  if (!(t instanceof Nn)) return t && e.module.log(Q, Qo(e.module.id), s), Be;
  const i = (_a2 = t.properties.find((a) => ph.has(Lr(a)))) == null ? void 0 : _a2.value;
  if (!i) return Be;
  if (!(i instanceof Nn)) return e.module.log(Q, (r = e.module.id, { code: Fl, message: `Rollup could not statically analyze the options argument of a dynamic import in "${Z(r)}". Dynamic import options need to be an object with a nested attributes object.` }), s), Be;
  var r;
  const o = i.properties.map((a) => {
    const l = Lr(a);
    return typeof l == "string" && typeof a.value.value == "string" ? [l, a.value.value] : (e.module.log(Q, Qo(e.module.id), a.start), null);
  }).filter((a) => !!a);
  return o.length > 0 ? Object.fromEntries(o) : Be;
}
const Lr = (n) => {
  const e = n.key;
  return e && !n.computed && (e.name || e.value);
};
function Vs(n, e) {
  const t = Object.keys(n);
  return t.length !== Object.keys(e).length || t.some((s) => n[s] !== e[s]);
}
var Qc = "performance" in (typeof globalThis > "u" ? typeof window > "u" ? {} : window : globalThis) ? performance : { now: () => 0 }, eu = { memoryUsage: () => ({ heapUsed: 0 }) };
let us = /* @__PURE__ */ new Map();
function tu(n, e) {
  switch (e) {
    case 1:
      return `# ${n}`;
    case 2:
      return `## ${n}`;
    case 3:
      return n;
    default:
      return `- ${n}`;
  }
}
function fh(n, e = 3) {
  n = tu(n, e);
  const t = eu.memoryUsage().heapUsed, s = Qc.now(), i = us.get(n);
  i === void 0 ? us.set(n, { memory: 0, startMemory: t, startTime: s, time: 0, totalMemory: 0 }) : (i.startMemory = t, i.startTime = s);
}
function mh(n, e = 3) {
  n = tu(n, e);
  const t = us.get(n);
  if (t !== void 0) {
    const s = eu.memoryUsage().heapUsed;
    t.memory += s - t.startMemory, t.time += Qc.now() - t.startTime, t.totalMemory = Math.max(t.totalMemory, s);
  }
}
function gh() {
  const n = {};
  for (const [e, { memory: t, time: s, totalMemory: i }] of us) n[e] = [s, t, i];
  return n;
}
let Le = it, Ce = it;
const yh = ["augmentChunkHash", "buildEnd", "buildStart", "generateBundle", "load", "moduleParsed", "options", "outputOptions", "renderChunk", "renderDynamicImport", "renderStart", "resolveDynamicImport", "resolveFileUrl", "resolveId", "resolveImportMeta", "shouldTransformCachedModule", "transform", "writeBundle"];
function bh(n, e) {
  if (n._hasTimer) return n;
  n._hasTimer = true;
  for (const t of yh) if (t in n) {
    let s = `plugin ${e}`;
    n.name && (s += ` (${n.name})`), s += ` - ${t}`;
    const i = function(...o) {
      Le(s, 4);
      const a = r.apply(this, o);
      return Ce(s, 4), a;
    };
    let r;
    typeof n[t].handler == "function" ? (r = n[t].handler, n[t].handler = i) : (r = n[t], n[t] = i);
  }
  return n;
}
const Fa = { identifier: null, localName: wn };
function dr(n, e, t, s, i = /* @__PURE__ */ new Map()) {
  const r = i.get(e);
  if (r) {
    if (r.has(n)) return s ? [null] : j((o = e, { code: "CIRCULAR_REEXPORT", exporter: a = n.id, message: `"${o}" cannot be exported from "${Z(a)}" as it is a reexport that references itself.` }));
    r.add(n);
  } else i.set(e, /* @__PURE__ */ new Set([n]));
  var o, a;
  return n.getVariableForExportName(e, { importerForSideEffects: t, isExportAllSearch: s, searchedNamesAndModules: i });
}
function Va(n, e) {
  const t = He(e.sideEffectDependenciesByVariable, n, Yt);
  let s = n;
  const i = /* @__PURE__ */ new Set([s]);
  for (; ; ) {
    const r = s.module;
    if (s = s instanceof pt ? s.getDirectOriginalVariable() : s instanceof Ue ? s.syntheticNamespace : null, !s || i.has(s)) break;
    i.add(s), t.add(r);
    const o = r.sideEffectDependenciesByVariable.get(s);
    if (o) for (const a of o) t.add(a);
  }
  return t;
}
class Ne {
  constructor(e, t, s, i, r, o, a, l) {
    this.graph = e, this.id = t, this.options = s, this.alternativeReexportModules = /* @__PURE__ */ new Map(), this.chunkFileNames = /* @__PURE__ */ new Set(), this.chunkNames = [], this.cycles = /* @__PURE__ */ new Set(), this.dependencies = /* @__PURE__ */ new Set(), this.dynamicDependencies = /* @__PURE__ */ new Set(), this.dynamicImporters = [], this.dynamicImports = [], this.execIndex = 1 / 0, this.hasTreeShakingPassStarted = false, this.implicitlyLoadedAfter = /* @__PURE__ */ new Set(), this.implicitlyLoadedBefore = /* @__PURE__ */ new Set(), this.importDescriptions = /* @__PURE__ */ new Map(), this.importMetas = [], this.importedFromNotTreeshaken = false, this.importers = [], this.includedDynamicImporters = [], this.includedDirectTopLevelAwaitingDynamicImporters = /* @__PURE__ */ new Set(), this.includedImports = /* @__PURE__ */ new Set(), this.isExecuted = false, this.isUserDefinedEntryPoint = false, this.needsExportShim = false, this.sideEffectDependenciesByVariable = /* @__PURE__ */ new Map(), this.sourcesWithAttributes = /* @__PURE__ */ new Map(), this.allExportNames = null, this.allExportsIncluded = false, this.ast = null, this.exportAllModules = [], this.exportAllSources = /* @__PURE__ */ new Set(), this.exportNamesByVariable = null, this.exportShimVariable = new hh(this), this.exports = /* @__PURE__ */ new Map(), this.namespaceReexportsByName = /* @__PURE__ */ new Map(), this.reexportDescriptions = /* @__PURE__ */ new Map(), this.relevantDependencies = null, this.syntheticExports = /* @__PURE__ */ new Map(), this.syntheticNamespace = null, this.transformDependencies = [], this.transitiveReexports = null, this.excludeFromSourcemap = /\0/.test(t), this.context = s.moduleContext(t), this.preserveSignature = this.options.preserveEntrySignatures;
    const c = this, { dynamicImports: d, dynamicImporters: p, exportAllSources: h, exports: f, implicitlyLoadedAfter: E, implicitlyLoadedBefore: g, importers: y, reexportDescriptions: m, sourcesWithAttributes: b } = this;
    this.info = { ast: null, attributes: l, code: null, get dynamicallyImportedIdResolutions() {
      return d.map(({ argument: x }) => typeof x == "string" && c.resolvedIds[x]).filter(Boolean);
    }, get dynamicallyImportedIds() {
      return d.map(({ id: x }) => x).filter((x) => x != null);
    }, get dynamicImporters() {
      return p.sort();
    }, get exportedBindings() {
      const x = { ".": [...f.keys()] };
      for (const [A, { source: S }] of m) (x[S] ?? (x[S] = [])).push(A);
      for (const A of h) (x[A] ?? (x[A] = [])).push("*");
      return x;
    }, get exports() {
      return [...f.keys(), ...m.keys(), ...[...h].map(() => "*")];
    }, get hasDefaultExport() {
      return c.ast ? c.exports.has("default") || m.has("default") : null;
    }, id: t, get implicitlyLoadedAfterOneOf() {
      return Array.from(E, ur).sort();
    }, get implicitlyLoadedBefore() {
      return Array.from(g, ur).sort();
    }, get importedIdResolutions() {
      return Array.from(b.keys(), (x) => c.resolvedIds[x]).filter(Boolean);
    }, get importedIds() {
      return Array.from(b.keys(), (x) => {
        var _a2;
        return (_a2 = c.resolvedIds[x]) == null ? void 0 : _a2.id;
      }).filter(Boolean);
    }, get importers() {
      return y.sort();
    }, isEntry: i, isExternal: false, get isIncluded() {
      return e.phase !== Kt.GENERATE ? null : c.isIncluded();
    }, meta: { ...a }, moduleSideEffects: r, syntheticNamedExports: o };
  }
  basename() {
    const e = ht(this.id), t = wt(this.id);
    return Ri(t ? e.slice(0, -t.length) : e);
  }
  bindReferences() {
    this.ast.bind();
  }
  cacheInfoGetters() {
    Jl(this.info, ["dynamicallyImportedIdResolutions", "dynamicallyImportedIds", "dynamicImporters", "exportedBindings", "exports", "hasDefaultExport", "implicitlyLoadedAfterOneOf", "implicitlyLoadedBefore", "importedIdResolutions", "importedIds", "importers"]);
  }
  error(e, t) {
    return t !== void 0 && this.addLocationToLogProps(e, t), j(e);
  }
  estimateSize() {
    let e = 0;
    for (const t of this.ast.body) t.included && (e += t.end - t.start);
    return e;
  }
  getAllExportNames() {
    if (this.allExportNames) return this.allExportNames;
    this.allExportNames = /* @__PURE__ */ new Set([...this.exports.keys(), ...this.reexportDescriptions.keys()]);
    for (const e of this.exportAllModules) if (e instanceof ve) this.allExportNames.add(`*${e.id}`);
    else for (const t of e.getAllExportNames()) t !== "default" && this.allExportNames.add(t);
    return typeof this.info.syntheticNamedExports == "string" && this.allExportNames.delete(this.info.syntheticNamedExports), this.allExportNames;
  }
  getDependenciesToBeIncluded() {
    if (this.relevantDependencies) return this.relevantDependencies;
    this.relevantDependencies = /* @__PURE__ */ new Set();
    const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), s = new Set(this.includedImports);
    if (this.info.isEntry || this.includedDynamicImporters.length > 0 || this.namespace.included || this.implicitlyLoadedAfter.size > 0) for (const i of [...this.getReexports(), ...this.getExports()]) {
      const [r] = this.getVariableForExportName(i);
      (r == null ? void 0 : r.included) && s.add(r);
    }
    for (let i of s) {
      const r = this.sideEffectDependenciesByVariable.get(i);
      if (r) for (const o of r) t.add(o);
      i instanceof Ue ? i = i.getBaseVariable() : i instanceof pt && (i = i.getOriginalVariable()), e.add(i.module);
    }
    if (this.options.treeshake && this.info.moduleSideEffects !== "no-treeshake") this.addRelevantSideEffectDependencies(this.relevantDependencies, e, t);
    else for (const i of this.dependencies) this.relevantDependencies.add(i);
    for (const i of e) this.relevantDependencies.add(i);
    return this.relevantDependencies;
  }
  getExportNamesByVariable() {
    if (this.exportNamesByVariable) return this.exportNamesByVariable;
    const e = /* @__PURE__ */ new Map();
    for (const t of this.getAllExportNames()) {
      let [s] = this.getVariableForExportName(t);
      if (s instanceof pt && (s = s.getOriginalVariable()), !s || !(s.included || s instanceof es)) continue;
      const i = e.get(s);
      i ? i.push(t) : e.set(s, [t]);
    }
    return this.exportNamesByVariable = e;
  }
  getExports() {
    return [...this.exports.keys()];
  }
  getReexports() {
    if (this.transitiveReexports) return this.transitiveReexports;
    this.transitiveReexports = [];
    const e = new Set(this.reexportDescriptions.keys());
    for (const t of this.exportAllModules) if (t instanceof ve) e.add(`*${t.id}`);
    else for (const s of [...t.getReexports(), ...t.getExports()]) s !== "default" && e.add(s);
    return this.transitiveReexports = [...e];
  }
  getRenderedExports() {
    const e = [], t = [];
    for (const s of this.exports.keys()) {
      const [i] = this.getVariableForExportName(s);
      ((i == null ? void 0 : i.included) ? e : t).push(s);
    }
    return { removedExports: t, renderedExports: e };
  }
  getSyntheticNamespace() {
    return this.syntheticNamespace === null && (this.syntheticNamespace = void 0, [this.syntheticNamespace] = this.getVariableForExportName(typeof this.info.syntheticNamedExports == "string" ? this.info.syntheticNamedExports : "default", { onlyExplicit: true })), this.syntheticNamespace ? this.syntheticNamespace : j((e = this.id, t = this.info.syntheticNamedExports, { code: "SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT", exporter: e, message: `Module "${Z(e)}" that is marked with \`syntheticNamedExports: ${JSON.stringify(t)}\` needs ${typeof t == "string" && t !== "default" ? `an explicit export named "${t}"` : "a default export"} that does not reexport an unresolved named export of the same module.` }));
    var e, t;
  }
  getVariableForExportName(e, { importerForSideEffects: t, isExportAllSearch: s, onlyExplicit: i, searchedNamesAndModules: r } = Be) {
    if (e[0] === "*") return e.length === 1 ? [this.namespace] : this.graph.modulesById.get(e.slice(1)).getVariableForExportName("*");
    const o = this.reexportDescriptions.get(e);
    if (o) {
      const [l, c] = dr(o.module, o.localName, t, false, r);
      return l ? (t && (ja(l, t, this), this.info.moduleSideEffects && He(t.sideEffectDependenciesByVariable, l, Yt).add(this)), [l]) : this.error(Ks(o.localName, this.id, o.module.id, !!(c == null ? void 0 : c.missingButExportExists)), o.start);
    }
    const a = this.exports.get(e);
    if (a) {
      if (a === Fa) return [this.exportShimVariable];
      const l = a.localName, c = this.traceVariable(l, { importerForSideEffects: t, searchedNamesAndModules: r });
      return c ? (t && (ja(c, t, this), He(t.sideEffectDependenciesByVariable, c, Yt).add(this)), [c]) : [null, { missingButExportExists: true }];
    }
    if (i) return [null];
    if (e !== "default") {
      const l = this.namespaceReexportsByName.get(e) ?? this.getVariableFromNamespaceReexports(e, t, r);
      if (this.namespaceReexportsByName.set(e, l), l[0]) return l;
    }
    return this.info.syntheticNamedExports ? [He(this.syntheticExports, e, () => new Ue(this.astContext, e, this.getSyntheticNamespace()))] : !s && this.options.shimMissingExports ? (this.shimMissingExport(e), [this.exportShimVariable]) : [null];
  }
  hasEffects() {
    return this.info.moduleSideEffects === "no-treeshake" || this.ast.hasCachedEffects();
  }
  include() {
    const e = nt();
    this.ast.shouldBeIncluded(e) && this.ast.include(e, false);
  }
  includeAllExports(e) {
    if (e && this.namespace.setMergedNamespaces(this.includeAndGetAdditionalMergedNamespaces()), this.allExportsIncluded) return;
    this.allExportsIncluded = true, this.isExecuted || (fn(this), this.graph.needsTreeshakingPass = true);
    const t = nt();
    for (const s of this.exports.keys()) if (e || s !== this.info.syntheticNamedExports) {
      const i = this.getVariableForExportName(s)[0];
      if (!i) return j(Ju(s, this.id));
      this.includeVariable(i, U, t), i.deoptimizePath(U);
    }
    for (const s of this.getReexports()) {
      const [i] = this.getVariableForExportName(s);
      i && (i.deoptimizePath(U), this.includeVariable(i, U, t), i instanceof es && (i.module.reexported = true));
    }
  }
  includeAllInBundle() {
    this.ast.include(nt(), true), this.includeAllExports(false);
  }
  includeExportsByNames(e) {
    this.isExecuted || (fn(this), this.graph.needsTreeshakingPass = true);
    let t = false;
    const s = nt();
    for (const i of e) {
      const r = this.getVariableForExportName(i)[0];
      r && (r.deoptimizePath(U), this.includeVariable(r, U, s)), this.exports.has(i) || this.reexportDescriptions.has(i) || (t = true);
    }
    t && this.namespace.setMergedNamespaces(this.includeAndGetAdditionalMergedNamespaces());
  }
  isIncluded() {
    return this.ast && (this.ast.included || this.namespace.included || this.importedFromNotTreeshaken || this.exportShimVariable.included);
  }
  linkImports() {
    this.addModulesToImportDescriptions(this.importDescriptions), this.addModulesToImportDescriptions(this.reexportDescriptions);
    const e = [];
    for (const t of this.exportAllSources) {
      const s = this.graph.modulesById.get(this.resolvedIds[t].id);
      s instanceof ve ? e.push(s) : this.exportAllModules.push(s);
    }
    this.exportAllModules.push(...e);
  }
  log(e, t, s) {
    this.addLocationToLogProps(t, s), this.options.onLog(e, t);
  }
  render(e) {
    const t = this.magicString.clone();
    this.ast.render(t, e), t.trim();
    const { usesTopLevelAwait: s } = this.astContext;
    return s && e.format !== "es" && e.format !== "system" ? j((i = this.id, r = e.format, { code: "INVALID_TLA_FORMAT", id: i, message: `Module format "${r}" does not support top-level await. Use the "es" or "system" output formats rather.` })) : { source: t, usesTopLevelAwait: s };
    var i, r;
  }
  async setSource({ ast: e, code: t, customTransformCache: s, originalCode: i, originalSourcemap: r, resolvedIds: o, sourcemapChain: a, transformDependencies: l, transformFiles: c, ...d }) {
    if (Le("generate ast", 3), t.startsWith("#!")) {
      const y = t.indexOf(`
`);
      this.shebang = t.slice(2, y);
    }
    this.info.code = t, this.originalCode = i, this.originalSourcemap = En(r), this.sourcemapChain = a.map((y) => y.missing ? y : En(y)), wo(this.originalSourcemap, this.sourcemapChain), c && (this.transformFiles = c), this.transformDependencies = l, this.customTransformCache = s, this.updateOptions(d), this.resolvedIds = o ?? /* @__PURE__ */ Object.create(null);
    const p = this.id;
    this.magicString = new Xt(t, { filename: this.excludeFromSourcemap ? null : p, indentExclusionRanges: [] }), this.astContext = { addDynamicImport: this.addDynamicImport.bind(this), addExport: this.addExport.bind(this), addImport: this.addImport.bind(this), addImportMeta: this.addImportMeta.bind(this), addImportSource: this.addImportSource.bind(this), code: t, deoptimizationTracker: this.graph.deoptimizationTracker, error: this.error.bind(this), fileName: p, getExports: this.getExports.bind(this), getImportedJsxFactoryVariable: this.getImportedJsxFactoryVariable.bind(this), getModuleExecIndex: () => this.execIndex, getModuleName: this.basename.bind(this), getNodeConstructor: (y) => cr[y] || cr.UnknownNode, getReexports: this.getReexports.bind(this), importDescriptions: this.importDescriptions, includeAllExports: () => this.includeAllExports(true), includeDynamicImport: this.includeDynamicImport.bind(this), includeVariableInModule: this.includeVariableInModule.bind(this), log: this.log.bind(this), magicString: this.magicString, manualPureFunctions: this.graph.pureFunctions, module: this, moduleContext: this.context, newlyIncludedVariableInits: this.graph.newlyIncludedVariableInits, options: this.options, requestTreeshakingPass: () => this.graph.needsTreeshakingPass = true, traceExport: (y) => this.getVariableForExportName(y), traceVariable: this.traceVariable.bind(this), usesTopLevelAwait: false }, this.scope = new qc(this.graph.scope, this.astContext), this.namespace = new qt(this.astContext);
    const h = { context: this.astContext, type: "Module" };
    if (e) this.ast = new cr[e.type](h, this.scope).parseNode(e), this.info.ast = e;
    else {
      Ce("generate ast", 3);
      const y = await async function(m, b, x) {
        return $c(m, b, x);
      }(t, false, this.options.jsx !== false);
      Le("generate ast", 3), this.ast = (f = y, E = h, g = this.scope, O(E, g, 0, Pc(f))), Object.defineProperty(this.info, "ast", { get: () => {
        if (this.graph.astLru.has(p)) return this.graph.astLru.get(p);
        {
          const m = this.tryParse();
          return this.options.cache !== false ? (Object.defineProperty(this.info, "ast", { value: m }), m) : (this.graph.astLru.set(p, m), m);
        }
      } });
    }
    var f, E, g;
    Ce("generate ast", 3);
  }
  toJSON() {
    return { ast: this.info.ast, attributes: this.info.attributes, code: this.info.code, customTransformCache: this.customTransformCache, dependencies: Array.from(this.dependencies, ur), id: this.id, meta: this.info.meta, moduleSideEffects: this.info.moduleSideEffects, originalCode: this.originalCode, originalSourcemap: this.originalSourcemap, resolvedIds: this.resolvedIds, sourcemapChain: this.sourcemapChain, syntheticNamedExports: this.info.syntheticNamedExports, transformDependencies: this.transformDependencies, transformFiles: this.transformFiles };
  }
  traceVariable(e, { importerForSideEffects: t, isExportAllSearch: s, searchedNamesAndModules: i } = Be) {
    const r = this.scope.variables.get(e);
    if (r) return r;
    const o = this.importDescriptions.get(e);
    if (o) {
      const a = o.module;
      if (a instanceof Ne && o.name === "*") return a.namespace;
      const [l, c] = dr(a, o.name, t || this, s, i);
      return l || this.error(Ks(o.name, this.id, a.id, !!(c == null ? void 0 : c.missingButExportExists)), o.start);
    }
    return null;
  }
  updateOptions({ meta: e, moduleSideEffects: t, syntheticNamedExports: s }) {
    t != null && (this.info.moduleSideEffects = t), s != null && (this.info.syntheticNamedExports = s), e != null && Object.assign(this.info.meta, e);
  }
  addDynamicImport(e) {
    let t = e.sourceAstNode;
    t.type === "TemplateLiteral" ? t.quasis.length === 1 && typeof t.quasis[0].value.cooked == "string" && (t = t.quasis[0].value.cooked) : t.type === "Literal" && typeof t.value == "string" && (t = t.value), this.dynamicImports.push({ argument: t, id: null, node: e, resolution: null });
  }
  assertUniqueExportName(e, t) {
    (this.exports.has(e) || this.reexportDescriptions.has(e)) && this.error(function(s) {
      return { code: "DUPLICATE_EXPORT", message: `Duplicate export "${s}"` };
    }(e), t);
  }
  addExport(e) {
    if (e instanceof Wt) this.assertUniqueExportName("default", e.start), this.exports.set("default", { identifier: e.variable.getAssignedVariableName(), localName: "default" });
    else if (e instanceof bn) {
      const t = e.source.value;
      if (this.addSource(t, e), e.exported) {
        const s = e.exported instanceof Ge ? e.exported.value : e.exported.name;
        this.assertUniqueExportName(s, e.exported.start), this.reexportDescriptions.set(s, { localName: "*", module: null, source: t, start: e.start });
      } else this.exportAllSources.add(t);
    } else if (e.source instanceof Ge) {
      const t = e.source.value;
      this.addSource(t, e);
      for (const { exported: s, local: i, start: r } of e.specifiers) {
        const o = s instanceof Ge ? s.value : s.name;
        this.assertUniqueExportName(o, r), this.reexportDescriptions.set(o, { localName: i instanceof Ge ? i.value : i.name, module: null, source: t, start: r });
      }
    } else if (e.declaration) {
      const t = e.declaration;
      if (t instanceof cs) for (const s of t.declarations) for (const i of Xd(s.id)) this.assertUniqueExportName(i, s.id.start), this.exports.set(i, { identifier: null, localName: i });
      else {
        const s = t.id.name;
        this.assertUniqueExportName(s, t.id.start), this.exports.set(s, { identifier: null, localName: s });
      }
    } else for (const { local: t, exported: s } of e.specifiers) {
      const i = t.name, r = s instanceof pe ? s.name : s.value;
      this.assertUniqueExportName(r, s.start), this.exports.set(r, { identifier: null, localName: i });
    }
  }
  addImport(e) {
    const t = e.source.value;
    this.addSource(t, e);
    for (const s of e.specifiers) {
      const i = s.local.name;
      (this.scope.variables.has(i) || this.importDescriptions.has(i)) && this.error(Rn(i), s.local.start);
      const r = s instanceof os ? "default" : s instanceof as ? "*" : s.imported instanceof pe ? s.imported.name : s.imported.value;
      this.importDescriptions.set(i, { module: null, name: r, source: t, start: s.start });
    }
  }
  addImportSource(e) {
    e && !this.sourcesWithAttributes.has(e) && this.sourcesWithAttributes.set(e, Be);
  }
  addImportMeta(e) {
    this.importMetas.push(e);
  }
  addLocationToLogProps(e, t) {
    e.id = this.id, e.pos = t;
    let s = this.info.code;
    const i = qr(s, t, { offsetLine: 1 });
    if (i) {
      let { column: r, line: o } = i;
      try {
        ({ column: r, line: o } = function(a, l) {
          const c = a.filter((d) => !d.missing);
          e: for (; c.length > 0; ) {
            const d = c.pop().mappings[l.line - 1];
            if (d) {
              const p = d.filter((E) => E.length > 1), h = p[p.length - 1];
              let f = p[0];
              for (let E of p) {
                if (E[0] >= l.column || E === h) {
                  E = E[0] !== l.column ? f : E, l = { column: E[3], line: E[2] + 1 };
                  continue e;
                }
                f = E;
              }
            }
            throw new Error("Can't resolve original location of error.");
          }
          return l;
        }(this.sourcemapChain, { column: r, line: o })), s = this.originalCode;
      } catch (a) {
        this.options.onLog(Q, function(l, c, d, p, h) {
          return { cause: l, code: "SOURCEMAP_ERROR", id: c, loc: { column: d, file: c, line: p }, message: `Error when using sourcemap for reporting an error: ${l.message}`, pos: h };
        }(a, this.id, r, o, t));
      }
      qs(e, { column: r, line: o }, s, this.id);
    }
  }
  addModulesToImportDescriptions(e) {
    for (const t of e.values()) {
      const { id: s } = this.resolvedIds[t.source];
      t.module = this.graph.modulesById.get(s);
    }
  }
  addRelevantSideEffectDependencies(e, t, s) {
    const i = /* @__PURE__ */ new Set(), r = (o) => {
      for (const a of o) i.has(a) || (i.add(a), t.has(a) ? e.add(a) : (a.info.moduleSideEffects || s.has(a)) && (a instanceof ve || a.hasEffects() ? e.add(a) : r(a.dependencies)));
    };
    r(this.dependencies), r(s);
  }
  addSource(e, t) {
    const s = (i = t.attributes, (i == null ? void 0 : i.length) ? Object.fromEntries(i.map((o) => [Lr(o), o.value.value])) : Be);
    var i;
    const r = this.sourcesWithAttributes.get(e);
    r ? Vs(r, s) && this.log(Q, Ls(r, s, e, this.id), t.start) : this.sourcesWithAttributes.set(e, s);
  }
  getImportedJsxFactoryVariable(e, t, s) {
    const { id: i } = this.resolvedIds[s], r = this.graph.modulesById.get(i), [o] = r.getVariableForExportName(e);
    return o || this.error((a = e, l = i, c = this.id, { code: "MISSING_JSX_EXPORT", exporter: l, id: c, message: `Export "${a}" is not defined in module "${Z(l)}" even though it is needed in "${Z(c)}" to provide JSX syntax. Please check your "jsx" option.`, names: [a], url: Re(Os) }), t);
    var a, l, c;
  }
  getVariableFromNamespaceReexports(e, t, s) {
    let i = null;
    const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    for (const d of this.exportAllModules) {
      if (d.info.syntheticNamedExports === e) continue;
      const [p, h] = dr(d, e, t, true, Eh(s));
      d instanceof ve || (h == null ? void 0 : h.indirectExternal) ? o.add(p) : p instanceof Ue ? i || (i = p) : p && r.set(p, d);
    }
    if (r.size > 0) {
      const d = [...r], p = d[0][0];
      return d.length === 1 ? [p] : (this.options.onLog(Q, (a = e, l = this.id, c = d.map(([, h]) => h.id), { binding: a, code: "NAMESPACE_CONFLICT", ids: c, message: `Conflicting namespaces: "${Z(l)}" re-exports "${a}" from one of the modules ${$t(c.map((h) => Z(h)))} (will be ignored).`, reexporter: l })), [null]);
    }
    var a, l, c;
    if (o.size > 0) {
      const d = [...o], p = d[0];
      return d.length > 1 && this.options.onLog(Q, function(h, f, E, g) {
        return { binding: h, code: "AMBIGUOUS_EXTERNAL_NAMESPACES", ids: g, message: `Ambiguous external namespace resolution: "${Z(f)}" re-exports "${h}" from one of the external modules ${$t(g.map((y) => Z(y)))}, guessing "${Z(E)}".`, reexporter: f };
      }(e, this.id, p.module.id, d.map((h) => h.module.id))), [p, { indirectExternal: true }];
    }
    return i ? [i] : [null];
  }
  includeAndGetAdditionalMergedNamespaces() {
    const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
    for (const s of [this, ...this.exportAllModules]) if (s instanceof ve) {
      const [i] = s.getVariableForExportName("*");
      i.includePath(U, nt()), this.includedImports.add(i), e.add(i);
    } else if (s.info.syntheticNamedExports) {
      const i = s.getSyntheticNamespace();
      i.includePath(U, nt()), this.includedImports.add(i), t.add(i);
    }
    return [...t, ...e];
  }
  includeDynamicImport(e) {
    const t = this.dynamicImports.find((s) => s.node === e).resolution;
    if (t instanceof Ne) {
      t.includedDynamicImporters.includes(this) || (t.includedDynamicImporters.push(this), e.withinTopLevelAwait && t.includedDirectTopLevelAwaitingDynamicImporters.add(this));
      const s = this.options.treeshake ? e.getDeterministicImportedNames() : void 0;
      s ? t.includeExportsByNames(s) : t.includeAllExports(true);
    }
  }
  includeVariable(e, t, s) {
    const { included: i, module: r } = e;
    if (e.includePath(t, s), i) r instanceof Ne && r !== this && Va(e, this);
    else if (this.graph.needsTreeshakingPass = true, r instanceof Ne && (r.isExecuted || fn(r), r !== this)) {
      const o = Va(e, this);
      for (const a of o) a.isExecuted || fn(a);
    }
  }
  includeVariableInModule(e, t, s) {
    this.includeVariable(e, t, s);
    const i = e.module;
    i && i !== this && this.includedImports.add(e);
  }
  shimMissingExport(e) {
    var t, s;
    this.options.onLog(Q, (t = this.id, { binding: s = e, code: "SHIMMED_EXPORT", exporter: t, message: `Missing export "${s}" has been shimmed in module "${Z(t)}".` })), this.exports.set(e, Fa);
  }
  tryParse() {
    try {
      return Io(this.info.code, { jsx: this.options.jsx !== false });
    } catch (e) {
      return this.error(Jr(e, this.id), e.pos);
    }
  }
}
function ja(n, e, t) {
  if (n.module instanceof Ne && n.module !== t) {
    const s = n.module.cycles;
    if (s.size > 0) {
      const i = t.cycles;
      for (const r of i) if (s.has(r)) {
        e.alternativeReexportModules.set(n, t);
        break;
      }
    }
  }
}
const Eh = (n) => n && new Map(Array.from(n, ([e, t]) => [e, new Set(t)])), Ua = (n, e) => e ? `${n}
${e}` : n, Ga = (n, e) => e ? `${n}

${e}` : n, xh = { amd: ks, cjs: ks, es: Ha, iife: ks, system: Ha, umd: ks };
function Ah(n, e, t, s, i, r, o, a, l, c, d, p, h, f) {
  const E = [...n].reverse();
  for (const g of E) g.scope.addUsedOutsideNames(s, i, p, h);
  (function(g, y, m) {
    for (const b of y) {
      for (const x of b.scope.variables.values()) x.included && !(x.renderBaseName || x instanceof pt && x.getOriginalVariable() !== x) && x.setRenderNames(null, at(x.name, g, x.forbiddenNames));
      if (m.has(b)) {
        const x = b.namespace;
        x.setRenderNames(null, at(x.name, g, x.forbiddenNames));
      }
    }
  })(s, E, f), xh[i](s, t, e, r, o, a, l, c, d);
  for (const g of E) g.scope.deconflict(i, p, h);
}
function Ha(n, e, t, s, i, r, o, a, l) {
  for (const c of t.dependencies) (i || c instanceof Ft) && (c.variableName = at(c.suggestedVariableName, n, null));
  for (const c of e) {
    const d = c.module, p = c.name;
    c.isNamespace && (i || d instanceof ve) ? c.setRenderNames(null, (d instanceof ve ? a.get(d) : o.get(d)).variableName) : d instanceof ve && p === "default" ? c.setRenderNames(null, at([...d.exportedVariables].some(([h, f]) => f === "*" && h.included) ? d.suggestedVariableName + "__default" : d.suggestedVariableName, n, c.forbiddenNames)) : c.setRenderNames(null, at(Ri(p), n, c.forbiddenNames));
  }
  for (const c of l) c.setRenderNames(null, at(c.name, n, c.forbiddenNames));
}
function ks(n, e, { deconflictedDefault: t, deconflictedNamespace: s, dependencies: i }, r, o, a, l, c) {
  for (const d of i) d.variableName = at(d.suggestedVariableName, n, null);
  for (const d of s) d.namespaceVariableName = at(`${d.suggestedVariableName}__namespace`, n, null);
  for (const d of t) d.defaultVariableName = s.has(d) && vd(r(d.id), a) ? d.namespaceVariableName : at(`${d.suggestedVariableName}__default`, n, null);
  for (const d of e) {
    const p = d.module;
    if (p instanceof ve) {
      const h = c.get(p), f = d.name;
      if (f === "default") {
        const E = r(p.id), g = Mi[E] ? h.defaultVariableName : h.variableName;
        Ti(E, a) ? d.setRenderNames(g, "default") : d.setRenderNames(null, g);
      } else f === "*" ? d.setRenderNames(null, bs[r(p.id)] ? h.namespaceVariableName : h.variableName) : d.setRenderNames(h.variableName, null);
    } else {
      const h = l.get(p);
      o && d.isNamespace ? d.setRenderNames(null, h.exportMode === "default" ? h.namespaceVariableName : h.variableName) : h.exportMode === "default" ? d.setRenderNames(null, h.variableName) : d.setRenderNames(h.variableName, h.getVariableExportName(d));
    }
  }
}
function Sh(n, { exports: e, name: t, format: s }, i, r) {
  const o = n.getExportNames();
  if (e === "default") {
    if (o.length !== 1 || o[0] !== "default") return j(Zo("default", o, i));
  } else if (e === "none" && o.length > 0) return j(Zo("none", o, i));
  return e === "auto" && (o.length === 0 ? e = "none" : o.length === 1 && o[0] === "default" ? e = "default" : (s !== "es" && s !== "system" && o.includes("default") && r(Q, function(a, l) {
    return { code: "MIXED_EXPORTS", id: a, message: `Entry module "${Z(a)}" is using named and default exports together. Consumers of your bundle will have to use \`${l || "chunk"}.default\` to access the default export, which may not be what you want. Use \`output.exports: "named"\` to disable this warning.`, url: Re(Kr) };
  }(i, t)), e = "named")), e;
}
function $h(n) {
  const e = n.split(`
`), t = e.filter((r) => /^\t+/.test(r)), s = e.filter((r) => /^ {2,}/.test(r));
  if (t.length === 0 && s.length === 0) return null;
  if (t.length >= s.length) return "	";
  const i = s.reduce((r, o) => {
    const a = /^ +/.exec(o)[0].length;
    return Math.min(a, r);
  }, 1 / 0);
  return " ".repeat(i);
}
function nu(n, e, t, s, i, r) {
  const o = n.getDependenciesToBeIncluded();
  for (const a of o) {
    if (a instanceof ve) {
      e.push(r.get(a));
      continue;
    }
    const l = i.get(a);
    l === s ? t.has(a) || (t.add(a), nu(a, e, t, s, i, r)) : e.push(l);
  }
}
const No = "!~{", ko = "}~", Co = new RegExp(`${No}[0-9a-zA-Z_$]{1,16}${ko}`, "g"), Tt = (n, e) => n.replace(Co, (t) => e.get(t) || t), vh = (n, e, t) => n.replace(Co, (s) => s === e ? t : s), Wi = Symbol("bundleKeys"), Ro = { type: "placeholder" };
function _r(n, e, t) {
  return Ws(n) ? j(qe(`Invalid pattern "${n}" for "${e}", patterns can be neither absolute nor relative paths. If you want your files to be stored in a subdirectory, write its name without a leading slash like this: subdirectory/pattern.`)) : n.replace(/\[(\w+)(:\d+)?]/g, (s, i, r) => {
    if (!t.hasOwnProperty(i) || r && i !== "hash") return j(qe(`"[${i}${r || ""}]" is not a valid placeholder in the "${e}" pattern.`));
    const o = t[i](r && Number.parseInt(r.slice(1)));
    return Ws(o) ? j(qe(`Invalid substitution "${o}" for placeholder "[${i}]" in "${e}" pattern, can be neither absolute nor relative path.`)) : o;
  });
}
function Mr(n, { [Wi]: e }) {
  if (!e.has(n.toLowerCase())) return n;
  const t = wt(n);
  n = n.slice(0, Math.max(0, n.length - t.length));
  let s, i = 1;
  for (; e.has((s = n + ++i + t).toLowerCase()); ) ;
  return s;
}
const Ph = /* @__PURE__ */ new Set([".js", ".jsx", ".ts", ".tsx", ".mjs", ".mts", ".cjs", ".cts"]);
function wh(n, e, t, s) {
  return (typeof e == "function" ? e(n.id) : e[n.id]) || (t ? (s(Q, (r = n.id, o = n.variableName, { code: "MISSING_GLOBAL_NAME", id: r, message: `No name was provided for external module "${r}" in "output.globals" \u2013 guessing "${o}".`, names: [o], url: Re("configuration-options/#output-globals") })), n.variableName) : void 0);
  var r, o;
}
class Pt {
  constructor(e, t, s, i, r, o, a, l, c, d, p, h, f, E, g) {
    this.orderedModules = e, this.inputOptions = t, this.outputOptions = s, this.unsetOptions = i, this.pluginDriver = r, this.modulesById = o, this.chunkByModule = a, this.externalChunkByModule = l, this.facadeChunkByModule = c, this.includedNamespaces = d, this.manualChunkAlias = p, this.getPlaceholder = h, this.bundle = f, this.inputBase = E, this.snippets = g, this.dependencies = /* @__PURE__ */ new Set(), this.entryModules = [], this.exportMode = "named", this.facadeModule = null, this.namespaceVariableName = "", this.variableName = "", this.accessedGlobalsByScope = /* @__PURE__ */ new Map(), this.dynamicEntryModules = [], this.dynamicName = null, this.exportNamesByVariable = /* @__PURE__ */ new Map(), this.exports = /* @__PURE__ */ new Set(), this.exportsByName = /* @__PURE__ */ new Map(), this.fileName = null, this.implicitEntryModules = [], this.implicitlyLoadedBefore = /* @__PURE__ */ new Set(), this.imports = /* @__PURE__ */ new Set(), this.includedDynamicImports = null, this.includedReexportsByModule = /* @__PURE__ */ new Map(), this.isEmpty = true, this.name = null, this.needsExportsShim = false, this.preRenderedChunkInfo = null, this.preliminaryFileName = null, this.preliminarySourcemapFileName = null, this.renderedChunkInfo = null, this.renderedDependencies = null, this.renderedModules = /* @__PURE__ */ Object.create(null), this.sortedExportNames = null, this.strictFacade = false, this.allowExtensionModules = /* @__PURE__ */ new Set(), this.execIndex = e.length > 0 ? e[0].execIndex : 1 / 0;
    const y = new Set(e);
    for (const m of e) {
      a.set(m, this), m.namespace.included && !s.preserveModules && d.add(m), this.isEmpty && m.isIncluded() && (this.isEmpty = false), (m.info.isEntry || s.preserveModules) && this.entryModules.push(m);
      for (const b of m.includedDynamicImporters) y.has(b) || (this.dynamicEntryModules.push(m), m.info.syntheticNamedExports && (d.add(m), this.exports.add(m.namespace)));
      m.implicitlyLoadedAfter.size > 0 && this.implicitEntryModules.push(m);
    }
    this.suggestedVariableName = Ri(this.generateVariableName());
  }
  static generateFacade(e, t, s, i, r, o, a, l, c, d, p, h, f, E, g) {
    const y = new Pt([], e, t, s, i, r, o, a, l, c, null, h, f, E, g);
    y.assignFacadeName(p, d), l.has(d) || l.set(d, y);
    for (const m of d.getDependenciesToBeIncluded()) y.dependencies.add(m instanceof Ne ? o.get(m) : a.get(m));
    return !y.dependencies.has(o.get(d)) && d.info.moduleSideEffects && d.hasEffects() && y.dependencies.add(o.get(d)), y.ensureReexportsAreAvailableForModule(d), y.facadeModule = d, y.strictFacade = true, y;
  }
  canModuleBeFacade(e, t) {
    const s = e.getExportNamesByVariable();
    for (const i of this.exports) if (!s.has(i)) return false;
    for (const i of t) if (!(i.module === e || s.has(i) || i instanceof Ue && s.has(i.getBaseVariable()))) return false;
    return true;
  }
  finalizeChunk(e, t, s, i) {
    const r = this.getRenderedChunkInfo(), o = (c) => Tt(c, i), a = r.fileName, l = this.fileName = o(a);
    return { ...r, code: e, dynamicImports: r.dynamicImports.map(o), fileName: l, implicitlyLoadedBefore: r.implicitlyLoadedBefore.map(o), importedBindings: Object.fromEntries(Object.entries(r.importedBindings).map(([c, d]) => [o(c), d])), imports: r.imports.map(o), map: t, preliminaryFileName: a, referencedFiles: r.referencedFiles.map(o), sourcemapFileName: s };
  }
  generateExports() {
    this.sortedExportNames = null;
    const e = new Set(this.exports);
    if (this.facadeModule !== null && (this.facadeModule.preserveSignature !== false || this.strictFacade)) {
      const t = this.facadeModule.getExportNamesByVariable();
      for (const [s, i] of t) {
        this.exportNamesByVariable.set(s, [...i]);
        for (const r of i) this.exportsByName.set(r, s);
        e.delete(s);
      }
    }
    for (const t of this.allowExtensionModules) {
      const s = t.getExportNamesByVariable();
      for (const [i, r] of s) {
        this.exportNamesByVariable.set(i, [...r]);
        for (const o of r) this.exportsByName.set(o, i);
        e.delete(i);
      }
    }
    this.outputOptions.minifyInternalExports ? function(t, s, i) {
      let r = 0;
      for (const o of t) {
        let [a] = o.name;
        if (s.has(a)) do
          a = Ys(++r), a.charCodeAt(0) === 49 && (r += 9 * 64 ** (a.length - 1), a = Ys(r));
        while (Ci.has(a) || s.has(a));
        s.set(a, o), i.set(o, [a]);
      }
    }(e, this.exportsByName, this.exportNamesByVariable) : function(t, s, i) {
      for (const r of t) {
        let o = 0, a = r.name;
        for (; s.has(a); ) a = r.name + "$" + ++o;
        s.set(a, r), i.set(r, [a]);
      }
    }(e, this.exportsByName, this.exportNamesByVariable), (this.outputOptions.preserveModules || this.facadeModule && this.facadeModule.info.isEntry) && (this.exportMode = Sh(this, this.outputOptions, this.facadeModule.id, this.inputOptions.onLog));
  }
  generateFacades() {
    var _a2;
    const e = [], t = /* @__PURE__ */ new Set([...this.entryModules, ...this.implicitEntryModules]), s = new Set(this.dynamicEntryModules.map(({ namespace: i }) => i));
    for (const i of t) {
      if (i.preserveSignature === "allow-extension" && this.canPreserveModuleExports(i) && !i.chunkFileNames.size && i.chunkNames.every(({ isUserDefined: o }) => !o)) {
        this.allowExtensionModules.add(i), this.facadeModule || (this.facadeModule = i, this.strictFacade = false, this.assignFacadeName({}, i, this.outputOptions.preserveModules)), this.facadeChunkByModule.set(i, this);
        continue;
      }
      const r = Array.from(new Set(i.chunkNames.filter(({ isUserDefined: o }) => o).map(({ name: o }) => o)), (o) => ({ name: o }));
      if (r.length === 0 && i.isUserDefinedEntryPoint && r.push({}), r.push(...Array.from(i.chunkFileNames, (o) => ({ fileName: o }))), r.length === 0 && r.push({}), !this.facadeModule) {
        const o = !this.outputOptions.preserveModules && (i.preserveSignature === "strict" || i.preserveSignature === "exports-only" && i.getExportNamesByVariable().size > 0);
        o && !this.canModuleBeFacade(i, s) || (this.facadeModule = i, this.facadeChunkByModule.set(i, this), i.preserveSignature && (this.strictFacade = o), this.assignFacadeName(r.shift(), i, this.outputOptions.preserveModules));
      }
      for (const o of r) e.push(Pt.generateFacade(this.inputOptions, this.outputOptions, this.unsetOptions, this.pluginDriver, this.modulesById, this.chunkByModule, this.externalChunkByModule, this.facadeChunkByModule, this.includedNamespaces, i, o, this.getPlaceholder, this.bundle, this.inputBase, this.snippets));
    }
    for (const i of this.dynamicEntryModules) i.info.syntheticNamedExports || (!this.facadeModule && this.canModuleBeFacade(i, s) ? (this.facadeModule = i, this.facadeChunkByModule.set(i, this), this.strictFacade = true, this.dynamicName = hr(i)) : this.facadeModule === i && !this.strictFacade && this.canModuleBeFacade(i, s) ? this.strictFacade = true : ((_a2 = this.facadeChunkByModule.get(i)) == null ? void 0 : _a2.strictFacade) || (this.includedNamespaces.add(i), this.exports.add(i.namespace)));
    return this.outputOptions.preserveModules || this.addNecessaryImportsForFacades(), e;
  }
  canPreserveModuleExports(e) {
    const t = e.getExportNamesByVariable();
    for (const [s, i] of t) for (const r of i) {
      const o = this.exportsByName.get(r);
      if (o && o !== s) return false;
    }
    for (const [s, i] of t) for (const r of i) this.exportsByName.set(r, s);
    return true;
  }
  getChunkName() {
    return this.name ?? (this.name = this.outputOptions.sanitizeFileName(this.getFallbackChunkName()));
  }
  getExportNames() {
    return this.sortedExportNames ?? (this.sortedExportNames = [...this.exportsByName.keys()].sort());
  }
  getFileName() {
    return this.fileName || this.getPreliminaryFileName().fileName;
  }
  getImportPath(e) {
    return kt(Ol(e, this.getFileName(), this.outputOptions.format === "amd" && !this.outputOptions.amd.forceJsExtensionForImports, true));
  }
  getPreliminaryFileName() {
    var _a2;
    if (this.preliminaryFileName) return this.preliminaryFileName;
    let e, t = null;
    const { chunkFileNames: s, entryFileNames: i, file: r, format: o, preserveModules: a } = this.outputOptions;
    if (r) e = ht(r);
    else if (this.fileName === null) {
      const [l, c] = a || ((_a2 = this.facadeModule) == null ? void 0 : _a2.isUserDefinedEntryPoint) ? [i, "output.entryFileNames"] : [s, "output.chunkFileNames"];
      e = _r(typeof l == "function" ? l(this.getPreRenderedChunkInfo()) : l, c, { format: () => o, hash: (d) => t || (t = this.getPlaceholder(c, d || 8)), name: () => this.getChunkName() }), t || (e = Mr(e, this.bundle));
    } else e = this.fileName;
    return t || (this.bundle[e] = Ro), this.preliminaryFileName = { fileName: e, hashPlaceholder: t };
  }
  getPreliminarySourcemapFileName() {
    if (this.preliminarySourcemapFileName) return this.preliminarySourcemapFileName;
    let e = null, t = null;
    const { sourcemapFileNames: s, format: i } = this.outputOptions;
    if (!s) return null;
    {
      const [r, o] = [s, "output.sourcemapFileNames"];
      e = _r(typeof r == "function" ? r(this.getPreRenderedChunkInfo()) : r, o, { chunkhash: () => this.getPreliminaryFileName().hashPlaceholder || "", format: () => i, hash: (a) => t || (t = this.getPlaceholder(o, a || 8)), name: () => this.getChunkName() }), t || (e = Mr(e, this.bundle));
    }
    return this.preliminarySourcemapFileName = { fileName: e, hashPlaceholder: t };
  }
  getRenderedChunkInfo() {
    return this.renderedChunkInfo ? this.renderedChunkInfo : this.renderedChunkInfo = { ...this.getPreRenderedChunkInfo(), dynamicImports: this.getDynamicDependencies().map(Cs), fileName: this.getFileName(), implicitlyLoadedBefore: Array.from(this.implicitlyLoadedBefore, Cs), importedBindings: Ih(this.getRenderedDependencies(), Cs), imports: Array.from(this.dependencies, Cs), modules: this.renderedModules, referencedFiles: this.getReferencedFiles() };
  }
  getVariableExportName(e) {
    return this.outputOptions.preserveModules && e instanceof qt ? "*" : this.exportNamesByVariable.get(e)[0];
  }
  link() {
    this.dependencies = function(e, t, s, i) {
      const r = [], o = /* @__PURE__ */ new Set();
      for (let l = t.length - 1; l >= 0; l--) {
        const c = t[l];
        if (!o.has(c)) {
          const d = [];
          nu(c, d, o, e, s, i), r.unshift(d);
        }
      }
      const a = /* @__PURE__ */ new Set();
      for (const l of r) for (const c of l) a.add(c);
      return a;
    }(this, this.orderedModules, this.chunkByModule, this.externalChunkByModule);
    for (const e of this.orderedModules) this.addImplicitlyLoadedBeforeFromModule(e), this.setUpChunkImportsAndExportsForModule(e);
  }
  inlineTransitiveImports() {
    const { facadeModule: e, dependencies: t, outputOptions: s } = this, { hoistTransitiveImports: i, preserveModules: r } = s;
    if (i && !r && e !== null) for (const o of t) o instanceof Pt && this.inlineChunkDependencies(o);
  }
  async render() {
    const { exportMode: e, facadeModule: t, inputOptions: { onLog: s }, outputOptions: i, pluginDriver: r, snippets: o } = this, { format: a, preserveModules: l } = i, c = this.getPreliminaryFileName(), d = this.getPreliminarySourcemapFileName(), { accessedGlobals: p, indent: h, magicString: f, renderedSource: E, usedModules: g, usesTopLevelAwait: y } = this.renderModules(c.fileName), m = [...this.getRenderedDependencies().values()], b = e === "none" ? [] : this.getChunkExportDeclarations(a);
    let x = b.length > 0, A = false;
    for (const D of m) {
      const { reexports: v } = D;
      (v == null ? void 0 : v.length) && (x = true, !A && v.some((I) => I.reexported === "default") && (A = true), a === "es" && (D.reexports = v.filter(({ reexported: I }) => !b.find(({ exported: _ }) => _ === I))));
    }
    if (!A) {
      for (const { exported: D } of b) if (D === "default") {
        A = true;
        break;
      }
    }
    const { intro: S, outro: w, banner: C, footer: R } = await async function(D, v, I) {
      try {
        let [K, B, M, F] = await Promise.all([v.hookReduceValue("banner", D.banner(I), [I], Ua), v.hookReduceValue("footer", D.footer(I), [I], Ua), v.hookReduceValue("intro", D.intro(I), [I], Ga), v.hookReduceValue("outro", D.outro(I), [I], Ga)]);
        return M && (M += `

`), F && (F = `

${F}`), K && (K += `
`), B && (B = `
` + B), { banner: K, footer: B, intro: M, outro: F };
      } catch (K) {
        return j((_ = K.message, { code: "ADDON_ERROR", message: `Could not retrieve "${K.hook}". Check configuration of plugin "${K.plugin}".
	Error Message: ${_}` }));
      }
      var _;
    }(i, r, this.getRenderedChunkInfo());
    if (jd[a](E, { accessedGlobals: p, dependencies: m, exports: b, hasDefaultExport: A, hasExports: x, id: c.fileName, indent: h, intro: S, isEntryFacade: l || t !== null && t.info.isEntry, isModuleFacade: t !== null, log: s, namedExportsMode: e !== "default", outro: w, snippets: o, usesTopLevelAwait: y }, i), C && f.prepend(C), a === "es" || a === "cjs") {
      const D = t !== null && t.info.isEntry && t.shebang;
      D && f.prepend(`#!${D}
`);
    }
    return R && f.append(R), { chunk: this, magicString: f, preliminaryFileName: c, preliminarySourcemapFileName: d, usedModules: g };
  }
  addImplicitlyLoadedBeforeFromModule(e) {
    const { chunkByModule: t, implicitlyLoadedBefore: s } = this;
    for (const i of e.implicitlyLoadedBefore) {
      const r = t.get(i);
      r && r !== this && s.add(r);
    }
  }
  addNecessaryImportsForFacades() {
    for (const [e, t] of this.includedReexportsByModule) if (this.includedNamespaces.has(e)) for (const s of t) this.imports.add(s);
  }
  assignFacadeName({ fileName: e, name: t }, s, i) {
    e ? this.fileName = e : this.name = this.outputOptions.sanitizeFileName(t || (i ? this.getPreserveModulesChunkNameFromModule(s) : hr(s)));
  }
  checkCircularDependencyImport(e, t) {
    var _a2;
    const s = e.module;
    if (s instanceof Ne) {
      const i = this.chunkByModule.get(s);
      let r;
      do
        r = t.alternativeReexportModules.get(e), r && (this.chunkByModule.get(r) !== i && this.inputOptions.onLog(Q, Wu(((_a2 = s.getExportNamesByVariable().get(e)) == null ? void 0 : _a2[0]) || "*", s.id, r.id, t.id, this.outputOptions.preserveModules)), t = r);
      while (r);
    }
  }
  ensureReexportsAreAvailableForModule(e) {
    const t = [], s = e.getExportNamesByVariable();
    for (const i of s.keys()) {
      const r = i instanceof Ue, o = r ? i.getBaseVariable() : i;
      if (this.checkCircularDependencyImport(o, e), !(o instanceof qt && this.outputOptions.preserveModules)) {
        const a = o.module;
        if (a instanceof Ne) {
          const l = this.chunkByModule.get(a);
          l && l !== this && (l.exports.add(o), t.push(o), r && this.imports.add(o));
        }
      }
    }
    t.length > 0 && this.includedReexportsByModule.set(e, t);
  }
  generateVariableName() {
    if (this.manualChunkAlias) return this.manualChunkAlias;
    const e = this.entryModules[0] || this.implicitEntryModules[0] || this.dynamicEntryModules[0] || this.orderedModules[this.orderedModules.length - 1];
    return e ? hr(e) : "chunk";
  }
  getChunkExportDeclarations(e) {
    const t = [];
    for (const s of this.getExportNames()) {
      if (s[0] === "*") continue;
      const i = this.exportsByName.get(s);
      if (!(i instanceof Ue)) {
        const l = i.module;
        if (l) {
          const c = this.chunkByModule.get(l);
          if (c !== this) {
            if (!c || e !== "es") continue;
            const d = this.renderedDependencies.get(c);
            if (!d) continue;
            const { imports: p, reexports: h } = d, f = h == null ? void 0 : h.find(({ reexported: g }) => g === s);
            if (!(p == null ? void 0 : p.find(({ imported: g }) => g === (f == null ? void 0 : f.imported)))) continue;
          }
        }
      }
      let r = null, o = false, a = i.getName(this.snippets.getPropertyAccess);
      if (i instanceof et) {
        for (const l of i.declarations) if (l.parent instanceof Pn || l instanceof Wt && l.declaration instanceof Pn) {
          o = true;
          break;
        }
      } else i instanceof Ue && (r = a, e === "es" && (a = i.renderName));
      t.push({ exported: s, expression: r, hoisted: o, local: a });
    }
    return t;
  }
  getDependenciesToBeDeconflicted(e, t, s) {
    var _a2;
    const i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
    for (const a of [...this.exportNamesByVariable.keys(), ...this.imports]) if (e || a.isNamespace) {
      const l = a.module;
      if (l instanceof ve) {
        const c = this.externalChunkByModule.get(l);
        i.add(c), e && (a.name === "default" ? Mi[s(l.id)] && r.add(c) : a.isNamespace && bs[s(l.id)] && (this.imports.has(a) || !((_a2 = this.exportNamesByVariable.get(a)) == null ? void 0 : _a2.every((d) => d[0] === "*"))) && o.add(c));
      } else {
        const c = this.chunkByModule.get(l);
        c !== this && (i.add(c), e && c.exportMode === "default" && a.isNamespace && o.add(c));
      }
    }
    if (t) for (const a of this.dependencies) i.add(a);
    return { deconflictedDefault: r, deconflictedNamespace: o, dependencies: i };
  }
  getDynamicDependencies() {
    return this.getIncludedDynamicImports().map((e) => e.facadeChunk || e.chunk || e.externalChunk || e.resolution).filter((e) => e !== this && (e instanceof Pt || e instanceof Ft));
  }
  getDynamicImportStringAndAttributes(e, t, s) {
    const { externalImportAttributes: i } = this.outputOptions, r = ["es", "cjs"].includes(this.outputOptions.format) && i;
    if (e instanceof ve) {
      const a = this.externalChunkByModule.get(e), l = a.getImportAttributes(this.snippets);
      return [`'${a.getImportPath(t)}'`, l || !!r || null];
    }
    let o = null;
    if (r) {
      const a = Zc(s);
      o = a === Be || xc(a, this.snippets);
    }
    return [e || "", o];
  }
  getFallbackChunkName() {
    return this.manualChunkAlias ? this.manualChunkAlias : this.dynamicName ? this.dynamicName : this.fileName ? Er(this.fileName) : Er(this.orderedModules[this.orderedModules.length - 1].id);
  }
  getImportSpecifiers() {
    const { interop: e } = this.outputOptions, t = /* @__PURE__ */ new Map();
    for (const s of this.imports) {
      const i = s.module;
      let r, o;
      if (i instanceof ve) {
        if (r = this.externalChunkByModule.get(i), o = s.name, o !== "default" && o !== "*" && e(i.id) === "defaultOnly") return j(ta(i.id, o, false));
      } else r = this.chunkByModule.get(i), o = r.getVariableExportName(s);
      He(t, r, Uo).push({ imported: o, local: s.getName(this.snippets.getPropertyAccess) });
    }
    return t;
  }
  getIncludedDynamicImports() {
    if (this.includedDynamicImports) return this.includedDynamicImports;
    const e = [];
    for (const t of this.orderedModules) for (const { node: s, resolution: i } of t.dynamicImports) s.included && e.push(i instanceof Ne ? { chunk: this.chunkByModule.get(i), externalChunk: null, facadeChunk: this.facadeChunkByModule.get(i), node: s, resolution: i } : i instanceof ve ? { chunk: null, externalChunk: this.externalChunkByModule.get(i), facadeChunk: null, node: s, resolution: i } : { chunk: null, externalChunk: null, facadeChunk: null, node: s, resolution: i });
    return this.includedDynamicImports = e;
  }
  getPreRenderedChunkInfo() {
    if (this.preRenderedChunkInfo) return this.preRenderedChunkInfo;
    const { dynamicEntryModules: e, facadeModule: t, implicitEntryModules: s, orderedModules: i } = this;
    return this.preRenderedChunkInfo = { exports: this.getExportNames(), facadeModuleId: t && t.id, isDynamicEntry: e.length > 0, isEntry: !!(t == null ? void 0 : t.info.isEntry), isImplicitEntry: s.length > 0, moduleIds: i.map(({ id: r }) => r), name: this.getChunkName(), type: "chunk" };
  }
  getPreserveModulesChunkNameFromModule(e) {
    const t = su(e);
    if (t) return t;
    const { preserveModulesRoot: s, sanitizeFileName: i } = this.outputOptions, r = i(Et(e.id.split(Nh, 1)[0])), o = wt(r), a = Ph.has(o) ? r.slice(0, -o.length) : r;
    return dt(a) ? s && Ke(a).startsWith(s) ? a.slice(s.length).replace(/^[/\\]/, "") : this.inputBase === "/" && a[0] !== "/" ? Jt(this.inputBase, a.replace(/^[a-zA-Z]:[/\\]/, "/")) : Jt(this.inputBase, a) : this.outputOptions.virtualDirname.replace(/\/$/, "") + "/" + ht(a);
  }
  getReexportSpecifiers() {
    const { externalLiveBindings: e, interop: t } = this.outputOptions, s = /* @__PURE__ */ new Map();
    for (let i of this.getExportNames()) {
      let r, o, a = false;
      if (i[0] === "*") {
        const l = i.slice(1);
        t(l) === "defaultOnly" && this.inputOptions.onLog(Q, Qu(l)), a = e, r = this.externalChunkByModule.get(this.modulesById.get(l)), o = i = "*";
      } else {
        const l = this.exportsByName.get(i);
        if (l instanceof Ue) continue;
        const c = l.module;
        if (c instanceof Ne) {
          if (r = this.chunkByModule.get(c), r === this) continue;
          o = r.getVariableExportName(l), a = l.isReassigned;
        } else {
          if (r = this.externalChunkByModule.get(c), o = l.name, o !== "default" && o !== "*" && t(c.id) === "defaultOnly") return j(ta(c.id, o, true));
          a = e && (o !== "default" || Ti(t(c.id), true));
        }
      }
      He(s, r, Uo).push({ imported: o, needsLiveBinding: a, reexported: i });
    }
    return s;
  }
  getReferencedFiles() {
    const e = /* @__PURE__ */ new Set();
    for (const t of this.orderedModules) for (const s of t.importMetas) {
      const i = s.getReferencedFileName(this.pluginDriver);
      i && e.add(i);
    }
    return [...e];
  }
  getRenderedDependencies() {
    if (this.renderedDependencies) return this.renderedDependencies;
    const e = this.getImportSpecifiers(), t = this.getReexportSpecifiers(), s = /* @__PURE__ */ new Map(), i = this.getFileName();
    for (const r of this.dependencies) {
      const o = e.get(r) || null, a = t.get(r) || null, l = r instanceof Ft || r.exportMode !== "default", c = r.getImportPath(i);
      s.set(r, { attributes: r instanceof Ft ? r.getImportAttributes(this.snippets) : null, defaultVariableName: r.defaultVariableName, globalName: r instanceof Ft && (this.outputOptions.format === "umd" || this.outputOptions.format === "iife") && wh(r, this.outputOptions.globals, (o || a) !== null, this.inputOptions.onLog), importPath: c, imports: o, isChunk: r instanceof Pt, name: r.variableName, namedExportsMode: l, namespaceVariableName: r.namespaceVariableName, reexports: a });
    }
    return this.renderedDependencies = s;
  }
  inlineChunkDependencies(e) {
    for (const t of e.dependencies) this.dependencies.has(t) || (this.dependencies.add(t), t instanceof Pt && this.inlineChunkDependencies(t));
  }
  renderModules(e) {
    var _a2;
    const { accessedGlobalsByScope: t, dependencies: s, exportNamesByVariable: i, includedNamespaces: r, inputOptions: { onLog: o }, isEmpty: a, orderedModules: l, outputOptions: c, pluginDriver: d, renderedModules: p, snippets: h } = this, { compact: f, format: E, freeze: g, generatedCode: { symbols: y }, importAttributesKey: m } = c, { _: b, cnst: x, n: A } = h;
    this.setDynamicImportResolutions(e), this.setImportMetaResolutions(e), this.setIdentifierRenderResolutions();
    const S = new Iu({ separator: `${A}${A}` }), w = function(M, F) {
      if (F.indent !== true) return F.indent;
      for (const V of M) {
        const q = $h(V.originalCode);
        if (q !== null) return q;
      }
      return "	";
    }(l, c), C = [];
    let R = "";
    const D = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Map(), I = { accessedDocumentCurrentScript: false, exportNamesByVariable: i, format: E, freeze: g, importAttributesKey: m, indent: w, pluginDriver: d, snippets: h, symbols: y, useOriginalName: null };
    let _ = false;
    for (const M of l) {
      let F, V = 0;
      if (M.isIncluded() || r.has(M)) {
        const $ = M.render(I);
        !I.accessedDocumentCurrentScript && bc.includes(E) && ((_a2 = this.accessedGlobalsByScope.get(M.scope)) == null ? void 0 : _a2.delete(At)), I.accessedDocumentCurrentScript = false, { source: F } = $, _ || (_ = $.usesTopLevelAwait), V = F.length(), V && (f && F.lastLine().includes("//") && F.append(`
`), v.set(M, F), S.addSource(F), C.push(M));
        const ie = M.namespace;
        if (r.has(M)) {
          const Y = ie.renderBlock(I);
          ie.renderFirst() ? R += A + Y : S.addSource(new Xt(Y));
        }
        const ee = t.get(M.scope);
        if (ee) for (const Y of ee) D.add(Y);
      }
      const { renderedExports: q, removedExports: J } = M.getRenderedExports();
      p[M.id] = { get code() {
        return (F == null ? void 0 : F.toString()) ?? null;
      }, originalLength: M.originalCode.length, removedExports: J, renderedExports: q, renderedLength: V };
    }
    R && S.prepend(R + A + A), this.needsExportsShim && S.prepend(`${A}${x} ${wn}${b}=${b}void 0;${A}${A}`);
    const K = f ? S : S.trim();
    var B;
    return a && this.getExportNames().length === 0 && s.size === 0 && o(Q, { code: "EMPTY_BUNDLE", message: `Generated an empty chunk: "${B = this.getChunkName()}".`, names: [B] }), { accessedGlobals: D, indent: w, magicString: S, renderedSource: K, usedModules: C, usesTopLevelAwait: _ };
  }
  setDynamicImportResolutions(e) {
    const { accessedGlobalsByScope: t, outputOptions: s, pluginDriver: i, snippets: r } = this;
    for (const o of this.getIncludedDynamicImports()) if (o.chunk) {
      const { chunk: a, facadeChunk: l, node: c, resolution: d } = o;
      a === this ? c.setInternalResolution(d.namespace) : c.setExternalResolution((l || a).exportMode, d, s, r, i, t, `'${(l || a).getImportPath(e)}'`, !(l == null ? void 0 : l.strictFacade) && a.exportNamesByVariable.get(d.namespace)[0], null, this, l || a);
    } else {
      const { node: a, resolution: l } = o, [c, d] = this.getDynamicImportStringAndAttributes(l, e, a);
      a.setExternalResolution("external", l, s, r, i, t, c, false, d, this, null);
    }
  }
  setIdentifierRenderResolutions() {
    const { format: e, generatedCode: { symbols: t }, interop: s, preserveModules: i, externalLiveBindings: r } = this.outputOptions, o = /* @__PURE__ */ new Set();
    for (const l of this.getExportNames()) {
      const c = this.exportsByName.get(l);
      e !== "es" && e !== "system" && c.isReassigned && !c.isId ? c.setRenderNames("exports", l) : c instanceof Ue ? o.add(c) : c.setRenderNames(null, null);
    }
    for (const l of this.orderedModules) if (l.needsExportShim) {
      this.needsExportsShim = true;
      break;
    }
    const a = /* @__PURE__ */ new Set(["Object", "Promise"]);
    switch (this.needsExportsShim && a.add(wn), t && a.add("Symbol"), e) {
      case "system":
        a.add("module").add("exports");
        break;
      case "es":
        break;
      case "cjs":
        a.add("module").add("require").add("__filename").add("__dirname");
      default:
        a.add("exports");
        for (const l of Rr) a.add(l);
    }
    Ah(this.orderedModules, this.getDependenciesToBeDeconflicted(e !== "es" && e !== "system", e === "amd" || e === "umd" || e === "iife", s), this.imports, a, e, s, i, r, this.chunkByModule, this.externalChunkByModule, o, this.exportNamesByVariable, this.accessedGlobalsByScope, this.includedNamespaces);
  }
  setImportMetaResolutions(e) {
    const { accessedGlobalsByScope: t, includedNamespaces: s, orderedModules: i, outputOptions: { format: r } } = this;
    for (const o of i) {
      for (const a of o.importMetas) a.setResolution(r, t, e);
      s.has(o) && o.namespace.prepare(t);
    }
  }
  setUpChunkImportsAndExportsForModule(e) {
    const t = new Set(e.includedImports);
    if (!this.outputOptions.preserveModules && this.includedNamespaces.has(e)) {
      const s = e.namespace.getMemberVariables();
      for (const i of Object.values(s)) i.included && t.add(i);
    }
    for (let s of t) {
      s instanceof pt && (s = s.getOriginalVariable()), s instanceof Ue && (s = s.getBaseVariable());
      const i = this.chunkByModule.get(s.module);
      i !== this && (this.imports.add(s), s.module instanceof Ne && (this.checkCircularDependencyImport(s, e), s instanceof qt && this.outputOptions.preserveModules || i.exports.add(s)));
    }
    (this.includedNamespaces.has(e) || e.info.isEntry && e.preserveSignature !== false || e.includedDynamicImporters.some((s) => this.chunkByModule.get(s) !== this)) && this.ensureReexportsAreAvailableForModule(e);
    for (const { node: s, resolution: i } of e.dynamicImports) s.included && i instanceof Ne && this.chunkByModule.get(i) === this && !this.includedNamespaces.has(i) && (this.includedNamespaces.add(i), this.ensureReexportsAreAvailableForModule(i));
  }
}
function hr(n) {
  return su(n) ?? Er(n.id);
}
function su(n) {
  var _a2, _b;
  return ((_a2 = n.chunkNames.find(({ isUserDefined: e }) => e)) == null ? void 0 : _a2.name) ?? ((_b = n.chunkNames[0]) == null ? void 0 : _b.name);
}
function Ih(n, e) {
  const t = {};
  for (const [s, i] of n) {
    const r = /* @__PURE__ */ new Set();
    if (i.imports) for (const { imported: o } of i.imports) r.add(o);
    if (i.reexports) for (const { imported: o } of i.reexports) r.add(o);
    t[e(s)] = [...r];
  }
  return t;
}
const Nh = /[#?]/, Cs = (n) => n.getFileName();
function* iu(n) {
  for (const e of n) yield* e;
}
function kh(n, e, t, s) {
  const { chunkDefinitions: i, modulesInManualChunks: r } = function(b) {
    const x = new Set(b.keys()), A = /* @__PURE__ */ Object.create(null);
    for (const [R, D] of b) Ch(R, A[D] || (A[D] = []), x);
    const S = Object.entries(A), w = new Array(S.length);
    let C = 0;
    for (const [R, D] of S) w[C++] = { alias: R, modules: D };
    return { chunkDefinitions: w, modulesInManualChunks: x };
  }(e), { allEntries: o, dependentEntriesByModule: a, dynamicallyDependentEntriesByDynamicEntry: l, dynamicImportsByEntry: c, dynamicallyDependentEntriesByAwaitedDynamicEntry: d, awaitedDynamicImportsByEntry: p } = function(b) {
    const x = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map(), w = new Set(b), C = new Array(w.size), R = new Array(w.size);
    let D = 0;
    for (const M of w) {
      const F = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
      C[D] = F, R[D] = V;
      const q = /* @__PURE__ */ new Set([M]);
      for (const J of q) {
        He(S, J, Yt).add(D);
        for (const $ of J.getDependenciesToBeIncluded()) $ instanceof ve || q.add($);
        for (const { resolution: $ } of J.dynamicImports) if ($ instanceof Ne && $.includedDynamicImporters.length > 0 && !w.has($)) {
          x.add($), w.add($), F.add($);
          for (const ie of $.includedDirectTopLevelAwaitingDynamicImporters) if (q.has(ie)) {
            A.add($), V.add($);
            break;
          }
        }
        for (const $ of J.implicitlyLoadedBefore) w.has($) || (x.add($), w.add($));
      }
      D++;
    }
    const v = [...w], { awaitedDynamicEntries: I, awaitedDynamicImportsByEntry: _, dynamicEntries: K, dynamicImportsByEntry: B } = function(M, F, V, q, J) {
      const $ = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Set();
      for (const [P, ce] of M.entries()) $.set(ce, P), F.has(ce) && ie.add(P), q.has(ce) && ee.add(P);
      const Y = Wa(V, $), N = Wa(J, $);
      return { awaitedDynamicEntries: ee, awaitedDynamicImportsByEntry: N, dynamicEntries: ie, dynamicImportsByEntry: Y };
    }(v, x, C, A, R);
    return { allEntries: v, awaitedDynamicImportsByEntry: _, dependentEntriesByModule: S, dynamicallyDependentEntriesByAwaitedDynamicEntry: qa(S, I, v, (M) => M.includedDirectTopLevelAwaitingDynamicImporters), dynamicallyDependentEntriesByDynamicEntry: qa(S, K, v, (M) => M.includedDynamicImporters), dynamicImportsByEntry: B };
  }(n), h = function(b) {
    var _a2;
    const x = /* @__PURE__ */ Object.create(null);
    for (const { dependentEntries: A, modules: S } of b) {
      let w = 0n;
      for (const C of A) w |= 1n << BigInt(C);
      (x[_a2 = String(w)] || (x[_a2] = { dependentEntries: new Set(A), modules: [] })).modules.push(...S);
    }
    return Object.values(x);
  }(function* (b, x) {
    for (const [A, S] of b) x.has(A) || (yield { dependentEntries: S, modules: [A] });
  }(a, r)), f = function(b, x) {
    const A = b.map(() => 0n);
    let S = 1n;
    for (const { dependentEntries: w } of x) {
      for (const C of w) A[C] |= S;
      S <<= 1n;
    }
    return A;
  }(o, h), E = Ka(f, l, c, o);
  (function(b, x, A) {
    let S = 1n;
    for (const { dependentEntries: w } of b) {
      for (const C of w) (x[C] & S) === S && (A[C] & S) === 0n && w.delete(C);
      S <<= 1n;
    }
  })(h, E, Ka(f, d, p, o));
  const { chunks: g, sideEffectAtoms: y, sizeByAtom: m } = function(b, x, A, S) {
    var _a2;
    const w = /* @__PURE__ */ Object.create(null), C = /* @__PURE__ */ new Map(), R = new Array(b.length);
    let D = 0n, v = 1n, I = 0;
    for (const { dependentEntries: K, modules: B } of b) {
      let M = 0n, F = -1n;
      for (const $ of K) M |= 1n << BigInt($), F &= x[$] | A[$];
      const V = w[_a2 = String(M)] || (w[_a2] = { containedAtoms: 0n, correlatedAtoms: F, dependencies: /* @__PURE__ */ new Set(), dependentChunks: /* @__PURE__ */ new Set(), dependentEntries: new Set(K), modules: [], pure: true, size: 0 });
      let q = 0, J = true;
      for (const $ of B) C.set($, V), $.isIncluded() && (J && (J = !$.hasEffects()), q += S > 1 ? $.estimateSize() : 1);
      J || (D |= v), R[I++] = q, V.containedAtoms |= v, V.modules.push(...B), V.pure && (V.pure = J), V.size += q, v <<= 1n;
    }
    const _ = Object.values(w);
    return D |= function(K, B, M) {
      const F = /* @__PURE__ */ new Map();
      let V = 0n;
      for (const q of K) {
        const { dependencies: J, modules: $ } = q;
        for (const ie of $) for (const ee of ie.getDependenciesToBeIncluded()) if (ee instanceof ve) {
          if (ee.info.moduleSideEffects) {
            const Y = He(F, ee, () => {
              const N = M;
              return M <<= 1n, V |= N, N;
            });
            q.containedAtoms |= Y, q.correlatedAtoms |= Y;
          }
        } else {
          const Y = B.get(ee);
          Y && Y !== q && (J.add(Y), Y.dependentChunks.add(q));
        }
      }
      return V;
    }(_, C, v), { chunks: _, sideEffectAtoms: D, sizeByAtom: R };
  }(h, f, E, t);
  return i.push(...function(b, x, A, S, w) {
    Le("optimize chunks", 3);
    const C = function(R, D) {
      const v = [], I = [];
      for (const _ of R) (_.size < D ? v : I).push(_);
      return v.length === 0 ? null : (v.sort(Xa), I.sort(Xa), { big: new Set(I), small: new Set(v) });
    }(b, x);
    return C ? (x > 1 && w("info", ea(b.length, C.small.size, "Initially")), function(R, D, v, I) {
      const { small: _ } = R;
      for (const K of _) {
        const B = Rh(K, R, v, I, D <= 1 ? 1 : 1 / 0);
        if (B) {
          const { containedAtoms: M, correlatedAtoms: F, modules: V, pure: q, size: J } = K;
          _.delete(K), Ya(B, D, R).delete(B), B.modules.push(...V), B.size += J, B.pure && (B.pure = q);
          const { dependencies: $, dependentChunks: ie, dependentEntries: ee } = B;
          B.correlatedAtoms &= F, B.containedAtoms |= M;
          for (const Y of K.dependentEntries) ee.add(Y);
          for (const Y of K.dependencies) $.add(Y), Y.dependentChunks.delete(K), Y.dependentChunks.add(B);
          for (const Y of K.dependentChunks) ie.add(Y), Y.dependencies.delete(K), Y.dependencies.add(B);
          $.delete(B), ie.delete(B), Ya(B, D, R).add(B);
        }
      }
    }(C, x, A, S), x > 1 && w("info", ea(C.small.size + C.big.size, C.small.size, "After merging chunks")), Ce("optimize chunks", 3), [...C.small, ...C.big]) : (Ce("optimize chunks", 3), b);
  }(g, t, y, m, s).map(({ modules: b }) => ({ alias: null, modules: b }))), i;
}
function Ch(n, e, t) {
  const s = /* @__PURE__ */ new Set([n]);
  for (const i of s) {
    t.add(i), e.push(i);
    for (const r of i.dependencies) r instanceof ve || t.has(r) || s.add(r);
  }
}
function Wa(n, e) {
  const t = new Array(n.length);
  let s = 0;
  for (const i of n) {
    const r = /* @__PURE__ */ new Set();
    for (const o of i) r.add(e.get(o));
    t[s++] = r;
  }
  return t;
}
function qa(n, e, t, s) {
  const i = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = He(i, r, Yt), a = t[r];
    for (const l of iu([s(a), a.implicitlyLoadedAfter])) for (const c of n.get(l)) o.add(c);
  }
  return i;
}
function Ka(n, e, t, s) {
  const i = s.map((r, o) => e.has(o) ? -1n : 0n);
  for (const [r, o] of e) {
    e.delete(r);
    const a = i[r];
    let l = a;
    for (const c of o) l &= n[c] | i[c];
    if (l !== a) {
      i[r] = l;
      for (const c of t[r]) He(e, c, Yt).add(r);
    }
  }
  return i;
}
function Xa({ size: n }, { size: e }) {
  return n - e;
}
function Rh(n, { big: e, small: t }, s, i, r) {
  let o = null;
  for (const a of iu([t, e])) {
    if (n === a) continue;
    const l = Dh(n, a, r, s, i);
    if (l < r) {
      if (o = a, l === 0) break;
      r = l;
    }
  }
  return o;
}
function Dh(n, e, t, s, i) {
  const r = Ja(n, e, t, s, i);
  return r < t ? r + Ja(e, n, t - r, s, i) : 1 / 0;
}
function Ja(n, e, t, s, i) {
  const { correlatedAtoms: r } = e;
  let o = n.containedAtoms;
  const a = o & s;
  if ((r & a) !== a) return 1 / 0;
  const l = new Set(n.dependencies);
  for (const { dependencies: c, containedAtoms: d } of l) {
    o |= d;
    const p = d & s;
    if ((r & p) !== p) return 1 / 0;
    for (const h of c) {
      if (h === e) return 1 / 0;
      l.add(h);
    }
  }
  return function(c, d, p) {
    let h = 0, f = 0, E = 1n;
    const { length: g } = p;
    for (; f < g; f++) if ((c & E) === E && (h += p[f]), E <<= 1n, h >= d) return 1 / 0;
    return h;
  }(o & ~r, t, i);
}
function Ya(n, e, t) {
  return n.size < e ? t.small : t.big;
}
const Oh = (n, e) => n.execIndex > e.execIndex ? 1 : -1;
function Lh(n) {
  n.sort(Oh);
}
function _h(n) {
  let e = 0;
  const t = [], s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), o = [], a = (c, d) => {
    r.has(c) ? s.has(c) || t.push(function(p, h, f) {
      const E = Symbol(p.id), g = [p.id];
      let y = h;
      for (p.cycles.add(E); y !== p; ) y.cycles.add(E), g.push(y.id), y = f.get(y);
      return g.push(g[0]), g.reverse(), g;
    }(c, d, r)) : (r.set(c, d), l(c));
  }, l = (c) => {
    if (c instanceof Ne) {
      for (const d of c.dependencies) a(d, c);
      for (const d of c.implicitlyLoadedBefore) i.add(d);
      for (const { resolution: d, node: p } of c.dynamicImports) d instanceof Ne && (p.withinTopLevelAwait ? a(d, c) : i.add(d));
      o.push(c);
    }
    c.execIndex = e++, s.add(c);
  };
  for (const c of n) r.has(c) || (r.set(c, null), l(c));
  for (const c of i) r.has(c) || (r.set(c, null), l(c));
  return { cyclePaths: t, orderedModules: o };
}
const Za = (n, e) => e ? `(${n})` : n;
class Qa {
  constructor(e, t) {
    this.isOriginal = true, this.filename = e, this.content = t;
  }
  traceSegment(e, t, s) {
    return { column: t, line: e, name: s, source: this };
  }
}
class $i {
  constructor(e, t) {
    this.sources = t, this.names = e.names, this.mappings = e.mappings;
  }
  traceMappings() {
    const e = [], t = /* @__PURE__ */ new Map(), s = [], i = [], r = /* @__PURE__ */ new Map(), o = [];
    for (const a of this.mappings) {
      const l = [];
      for (const c of a) {
        if (c.length === 1) continue;
        const d = this.sources[c[1]];
        if (!d) continue;
        const p = d.traceSegment(c[2], c[3], c.length === 5 ? this.names[c[4]] : "");
        if (p) {
          const { column: h, line: f, name: E, source: { content: g, filename: y } } = p;
          let m = t.get(y);
          if (m === void 0) m = e.length, e.push(y), t.set(y, m), s[m] = g;
          else if (s[m] == null) s[m] = g;
          else if (g != null && s[m] !== g) return j(Zu(y));
          const b = [c[0], m, f, h];
          if (E) {
            let x = r.get(E);
            x === void 0 && (x = i.length, i.push(E), r.set(E, x)), b[4] = x;
          }
          l.push(b);
        }
      }
      o.push(l);
    }
    return { mappings: o, names: i, sources: e, sourcesContent: s };
  }
  traceSegment(e, t, s) {
    const i = this.mappings[e];
    if (!i) return null;
    let r = 0, o = i.length - 1;
    for (; r <= o; ) {
      const a = r + o >> 1;
      let l = i[a];
      if (l[0] !== t && r === o && (l = i[i[r][0] > t ? Math.max(0, r - 1) : r]), l[0] === t || r === o) {
        if (l.length == 1) return null;
        const c = this.sources[l[1]];
        return c ? c.traceSegment(l[2], l[3], l.length === 5 ? this.names[l[4]] : s) : null;
      }
      l[0] > t ? o = a - 1 : r = a + 1;
    }
    return null;
  }
}
function ru(n) {
  return function(e, t) {
    return t.missing ? (n(Q, (s = t.plugin, { code: Gl, message: `Sourcemap is likely to be incorrect: a plugin (${s}) was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help`, plugin: s, url: Re("troubleshooting/#warning-sourcemap-is-likely-to-be-incorrect") })), new $i({ mappings: [], names: [] }, [e])) : new $i(t, [e]);
    var s;
  };
}
function ou(n, e, t, s, i) {
  let r;
  if (t) {
    const o = t.sources, a = t.sourcesContent || [], l = St(n) || ".", c = t.sourceRoot || ".", d = o.map((p, h) => new Qa(Ke(l, c, p), a[h]));
    r = new $i(t, d);
  } else r = new Qa(n, e);
  return s.reduce(i, r);
}
let el;
const au = (n) => function(e) {
  let t, s;
  try {
    const o = Ee.__wbindgen_add_to_stack_pointer(-16);
    Ee.xxhashBase64Url(o, Vt(e));
    var i = lt().getInt32(o + 0, true), r = lt().getInt32(o + 4, true);
    return t = i, s = r, is(i, r);
  } finally {
    Ee.__wbindgen_add_to_stack_pointer(16), Ee.__wbindgen_export_0(t, s, 1);
  }
}(Tr(n)), Do = { base36: (n) => function(e) {
  let t, s;
  try {
    const o = Ee.__wbindgen_add_to_stack_pointer(-16);
    Ee.xxhashBase36(o, Vt(e));
    var i = lt().getInt32(o + 0, true), r = lt().getInt32(o + 4, true);
    return t = i, s = r, is(i, r);
  } finally {
    Ee.__wbindgen_add_to_stack_pointer(16), Ee.__wbindgen_export_0(t, s, 1);
  }
}(Tr(n)), base64: au, hex: (n) => function(e) {
  let t, s;
  try {
    const o = Ee.__wbindgen_add_to_stack_pointer(-16);
    Ee.xxhashBase16(o, Vt(e));
    var i = lt().getInt32(o + 0, true), r = lt().getInt32(o + 4, true);
    return t = i, s = r, is(i, r);
  } finally {
    Ee.__wbindgen_add_to_stack_pointer(16), Ee.__wbindgen_export_0(t, s, 1);
  }
}(Tr(n)) };
function Tr(n) {
  return typeof n == "string" ? typeof Buffer > "u" ? (el ?? (el = new TextEncoder()), el.encode(n)) : Buffer.from(n) : n;
}
async function Mh(n, e, t, s, i) {
  Le("render chunks", 2), function(E) {
    for (const g of E) g.facadeModule && g.facadeModule.isUserDefinedEntryPoint && g.getPreliminaryFileName();
  }(n);
  const r = await Promise.all(n.map((E) => E.render()));
  Ce("render chunks", 2), Le("transform chunks", 2);
  const o = Do[s.hashCharacters], a = function(E) {
    return Object.fromEntries(E.map((g) => {
      const y = g.getRenderedChunkInfo();
      return [y.fileName, y];
    }));
  }(n), { hashDependenciesByPlaceholder: l, initialHashesByPlaceholder: c, nonHashedChunksWithPlaceholders: d, placeholders: p, renderedChunksByPlaceholder: h } = await async function(E, g, y, m, b, x) {
    const A = [], S = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Set();
    for (const { preliminaryFileName: { hashPlaceholder: D } } of E) D && R.add(D);
    return await Promise.all(E.map(async ({ chunk: D, preliminaryFileName: { fileName: v, hashPlaceholder: I }, preliminarySourcemapFileName: _, magicString: K, usedModules: B }) => {
      const M = { chunk: D, fileName: v, sourcemapFileName: (_ == null ? void 0 : _.fileName) ?? null, ...await Th(K, v, B, g, y, m, x) }, { code: F, map: V } = M;
      if (I) {
        const { containedPlaceholders: J, transformedCode: $ } = ((Y, N) => {
          const P = /* @__PURE__ */ new Set(), ce = Y.replace(Co, (X) => N.has(X) ? (P.add(X), `${No}${"0".repeat(X.length - 5)}${ko}`) : X);
          return { containedPlaceholders: P, transformedCode: ce };
        })(F, R);
        let ie = $;
        const ee = m.hookReduceValueSync("augmentChunkHash", "", [D.getRenderedChunkInfo()], (Y, N) => (N && (Y += N), Y));
        ee && (ie += ee), S.set(I, M), w.set(I, { containedPlaceholders: J, contentHash: b(ie) });
      } else A.push(M);
      const q = _ == null ? void 0 : _.hashPlaceholder;
      V && q && C.set(_.hashPlaceholder, b(V.toString()).slice(0, _.hashPlaceholder.length));
    })), { hashDependenciesByPlaceholder: w, initialHashesByPlaceholder: C, nonHashedChunksWithPlaceholders: A, placeholders: R, renderedChunksByPlaceholder: S };
  }(r, a, s, t, o, i), f = function(E, g, y, m, b, x) {
    const A = new Map(y);
    for (const S of m) {
      const { fileName: w } = E.get(S);
      let C = "";
      const R = /* @__PURE__ */ new Set([S]);
      for (const I of R) {
        const { containedPlaceholders: _, contentHash: K } = g.get(I);
        C += K;
        for (const B of _) R.add(B);
      }
      let D, v;
      do
        v && (C = v), v = x(C).slice(0, S.length), D = vh(w, S, v);
      while (b[Wi].has(D.toLowerCase()));
      b[D] = Ro, A.set(S, v);
    }
    return A;
  }(h, l, c, p, e, o);
  (function(E, g, y, m, b, x) {
    for (const { chunk: A, code: S, fileName: w, sourcemapFileName: C, map: R } of E.values()) {
      let D = Tt(S, g);
      const v = Tt(w, g);
      let I = null;
      R && (x.sourcemapDebugIds && (D += nl(D, R)), I = C ? Tt(C, g) : `${v}.map`, R.file = Tt(R.file, g), D += tl(I, R, b, x)), y[v] = A.finalizeChunk(D, R, I, g);
    }
    for (const { chunk: A, code: S, fileName: w, sourcemapFileName: C, map: R } of m) {
      let D = g.size > 0 ? Tt(S, g) : S, v = null;
      R && (x.sourcemapDebugIds && (D += nl(D, R)), v = C ? Tt(C, g) : `${w}.map`, D += tl(v, R, b, x)), y[w] = A.finalizeChunk(D, R, v, g);
    }
  })(h, f, e, d, t, s), Ce("transform chunks", 2);
}
async function Th(n, e, t, s, i, r, o) {
  let a = null;
  const l = [];
  let c = await r.hookReduceArg0("renderChunk", [n.toString(), s[e], i, { chunks: s }], (b, x, A) => {
    if (x == null) return b;
    if (typeof x == "string" && (x = { code: x, map: void 0 }), x.map !== null) {
      const S = En(x.map);
      l.push(S || { missing: true, plugin: A.name });
    }
    return x.code;
  });
  const { compact: d, dir: p, file: h, sourcemap: f, sourcemapExcludeSources: E, sourcemapFile: g, sourcemapPathTransform: y, sourcemapIgnoreList: m } = i;
  if (d || c[c.length - 1] === `
` || (c += `
`), f) {
    let b;
    Le("sourcemaps", 3), b = h ? Ke(g || h) : p ? Ke(p, e) : Ke(e), a = function(x, A, S, w, C, R) {
      const D = ru(R), v = S.filter((V) => !V.excludeFromSourcemap).map((V) => ou(V.id, V.originalCode, V.originalSourcemap, V.sourcemapChain, D)), I = new $i(A, v), _ = w.reduce(D, I);
      let { sources: K, sourcesContent: B, names: M, mappings: F } = _.traceMappings();
      if (x) {
        const V = St(x);
        K = K.map((q) => Jt(V, q)), x = ht(x);
      }
      B = C ? null : B;
      for (const V of S) wo(V.originalSourcemap, V.sourcemapChain);
      return new Pi({ file: x, mappings: F, names: M, sources: K, sourcesContent: B });
    }(b, n.generateDecodedMap({}), t, l, E, o);
    for (let x = 0; x < a.sources.length; ++x) {
      let A = a.sources[x];
      const S = `${b}.map`, w = m(A, S);
      typeof w != "boolean" && j(qe("sourcemapIgnoreList function must return a boolean.")), w && (a.x_google_ignoreList === void 0 && (a.x_google_ignoreList = []), a.x_google_ignoreList.includes(x) || a.x_google_ignoreList.push(x)), y && (A = y(A, S), typeof A != "string" && j(qe("sourcemapPathTransform function must return a string."))), a.sources[x] = Et(A);
    }
    Ce("sourcemaps", 3);
  }
  return { code: c, map: a };
}
function tl(n, e, t, { sourcemap: s, sourcemapBaseUrl: i }) {
  let r;
  if (s === "inline") r = e.toUrl();
  else {
    const o = ht(n);
    r = i ? new URL(o, i).toString() : o, t.emitFile({ fileName: n, originalFileName: null, source: e.toString(), type: "asset" });
  }
  return s === "hidden" ? "" : `//# sourceMappingURL=${r}
`;
}
function nl(n, e) {
  const t = Do.hex(n), s = [t.slice(0, 8), t.slice(8, 12), "4" + t.slice(12, 15), (3 & parseInt(t.slice(15, 16), 16) | 8).toString(16) + t.slice(17, 20), t.slice(20, 32)].join("-");
  return e.debugId = s, "//# debugId=" + s + `
`;
}
class Bh {
  constructor(e, t, s, i, r) {
    this.outputOptions = e, this.unsetOptions = t, this.inputOptions = s, this.pluginDriver = i, this.graph = r, this.facadeChunkByModule = /* @__PURE__ */ new Map(), this.includedNamespaces = /* @__PURE__ */ new Set();
  }
  async generate(e) {
    Le("GENERATE", 1);
    const t = /* @__PURE__ */ Object.create(null), s = ((i) => {
      const r = /* @__PURE__ */ new Set();
      return new Proxy(i, { deleteProperty: (o, a) => (typeof a == "string" && r.delete(a.toLowerCase()), Reflect.deleteProperty(o, a)), get: (o, a) => a === Wi ? r : Reflect.get(o, a), set: (o, a, l) => (typeof a == "string" && r.add(a.toLowerCase()), Reflect.set(o, a, l)) });
    })(t);
    this.pluginDriver.setOutputBundle(s, this.outputOptions);
    try {
      Le("initialize render", 2), await this.pluginDriver.hookParallel("renderStart", [this.outputOptions, this.inputOptions]), Ce("initialize render", 2), Le("generate chunks", 2);
      const i = /* @__PURE__ */ (() => {
        let o = 0;
        return (a, l) => {
          if (l > 21) return j(qe(`Hashes cannot be longer than 21 characters, received ${l}. Check the "${a}" option.`));
          const c = `${No}${Ys(++o).padStart(l - 5, "0")}${ko}`;
          return c.length > l ? j(qe(`To generate hashes for this number of chunks (currently ${o}), you need a minimum hash size of ${c.length}, received ${l}. Check the "${a}" option.`)) : c;
        };
      })(), r = await this.generateChunks(s, i);
      r.length > 1 && function(o, a) {
        if (o.format === "umd" || o.format === "iife") return j(ke("output.format", Ml, "UMD and IIFE output formats are not supported for code-splitting builds", o.format));
        if (typeof o.file == "string") return j(ke("output.file", Zn, 'when building multiple chunks, the "output.dir" option must be used, not "output.file". To inline dynamic imports, set the "inlineDynamicImports" option'));
        if (o.sourcemapFile) return j(ke("output.sourcemapFile", ju, '"output.sourcemapFile" is only supported for single-file builds'));
        !o.amd.autoId && o.amd.id && a(Q, ke("output.amd.id", _l, 'this option is only properly supported for single-file builds. Use "output.amd.autoId" and "output.amd.basePath" instead'));
      }(this.outputOptions, this.inputOptions.onLog), this.pluginDriver.setChunkInformation(this.facadeChunkByModule);
      for (const o of r) o.generateExports(), o.inlineTransitiveImports();
      Ce("generate chunks", 2), await Mh(r, s, this.pluginDriver, this.outputOptions, this.inputOptions.onLog);
    } catch (i) {
      throw await this.pluginDriver.hookParallel("renderError", [i]), i;
    }
    return ((i) => {
      const r = /* @__PURE__ */ new Set(), o = Object.values(i);
      for (const a of o) a.type === "asset" && a.needsCodeReference && r.add(a.fileName);
      for (const a of o) if (a.type === "chunk") for (const l of a.referencedFiles) r.has(l) && r.delete(l);
      for (const a of r) delete i[a];
    })(s), Le("generate bundle", 2), await this.pluginDriver.hookSeq("generateBundle", [this.outputOptions, s, e]), this.finaliseAssets(s), Ce("generate bundle", 2), Ce("GENERATE", 1), t;
  }
  async addManualChunks(e) {
    const t = /* @__PURE__ */ new Map(), s = await Promise.all(Object.entries(e).map(async ([i, r]) => ({ alias: i, entries: await this.graph.moduleLoader.addAdditionalModules(r, true) })));
    for (const { alias: i, entries: r } of s) for (const o of r) sl(i, o, t);
    return t;
  }
  assignManualChunks(e) {
    const t = [], s = { getModuleIds: () => this.graph.modulesById.keys(), getModuleInfo: this.graph.getModuleInfo };
    for (const r of this.graph.modulesById.values()) if (r instanceof Ne) {
      const o = e(r.id, s);
      typeof o == "string" && t.push([o, r]);
    }
    t.sort(([r], [o]) => r > o ? 1 : r < o ? -1 : 0);
    const i = /* @__PURE__ */ new Map();
    for (const [r, o] of t) sl(r, o, i);
    return i;
  }
  finaliseAssets(e) {
    if (this.outputOptions.validate) {
      for (const t of Object.values(e)) if ("code" in t) try {
        Io(t.code, { jsx: this.inputOptions.jsx !== false });
      } catch (s) {
        this.inputOptions.onLog(Q, Gu(t, s));
      }
    }
    this.pluginDriver.finaliseAssets();
  }
  async generateChunks(e, t) {
    const { experimentalMinChunkSize: s, inlineDynamicImports: i, manualChunks: r, preserveModules: o } = this.outputOptions, a = typeof r == "object" ? await this.addManualChunks(r) : this.assignManualChunks(r), l = function({ compact: m, generatedCode: { arrowFunctions: b, constBindings: x, objectShorthand: A, reservedNamesAsProps: S } }) {
      const { _: w, n: C, s: R } = m ? { _: "", n: "", s: "" } : { _: " ", n: `
`, s: ";" }, D = x ? "const" : "var", v = (B, { isAsync: M, name: F }) => `${M ? "async " : ""}function${F ? ` ${F}` : ""}${w}(${B.join(`,${w}`)})${w}`, I = b ? (B, { isAsync: M, name: F }) => {
        const V = B.length === 1;
        return `${F ? `${D} ${F}${w}=${w}` : ""}${M ? `async${V ? " " : w}` : ""}${V ? B[0] : `(${B.join(`,${w}`)})`}${w}=>${w}`;
      } : v, _ = (B, { functionReturn: M, lineBreakIndent: F, name: V }) => [`${I(B, { isAsync: false, name: V })}${b ? F ? `${C}${F.base}${F.t}` : "" : `{${F ? `${C}${F.base}${F.t}` : w}${M ? "return " : ""}`}`, b ? `${V ? ";" : ""}${F ? `${C}${F.base}` : ""}` : `${R}${F ? `${C}${F.base}` : w}}`], K = S ? (B) => Js.test(B) : (B) => !Ci.has(B) && Js.test(B);
      return { _: w, cnst: D, getDirectReturnFunction: _, getDirectReturnIifeLeft: (B, M, { needsArrowReturnParens: F, needsWrappedFunction: V }) => {
        const [q, J] = _(B, { functionReturn: true, lineBreakIndent: null, name: null });
        return `${Za(`${q}${Za(M, b && F)}${J}`, b || V)}(`;
      }, getFunctionIntro: I, getNonArrowFunctionIntro: v, getObject(B, { lineBreakIndent: M }) {
        const F = M ? `${C}${M.base}${M.t}` : w;
        return `{${B.map(([V, q]) => {
          if (V === null) return `${F}${q}`;
          const J = Di(V);
          return V === q && A && V === J ? F + V : `${F}${J}:${w}${q}`;
        }).join(",")}${B.length === 0 ? "" : M ? `${C}${M.base}` : w}}`;
      }, getPropertyAccess: (B) => K(B) ? `.${B}` : `[${JSON.stringify(B)}]`, n: C, s: R };
    }(this.outputOptions), c = function(m) {
      const b = [];
      for (const x of m.values()) x instanceof Ne && (x.isIncluded() || x.info.isEntry || x.includedDynamicImporters.length > 0) && b.push(x);
      return b;
    }(this.graph.modulesById), d = function(m) {
      if (m.length === 0) return "/";
      if (m.length === 1) return St(m[0]);
      const b = m.slice(1).reduce((x, A) => {
        const S = A.split(/\/+|\\+/);
        let w;
        for (w = 0; x[w] === S[w] && w < Math.min(x.length, S.length); w++) ;
        return x.slice(0, w);
      }, m[0].split(/\/+|\\+/));
      return b.length > 1 ? b.join("/") : "/";
    }(function(m, b) {
      const x = [];
      for (const A of m) (A.info.isEntry || b) && dt(A.id) && x.push(A.id);
      return x;
    }(c, o)), p = function(m, b, x) {
      const A = /* @__PURE__ */ new Map();
      for (const S of m.values()) S instanceof ve && A.set(S, new Ft(S, b, x));
      return A;
    }(this.graph.modulesById, this.outputOptions, d), h = i ? [{ alias: null, modules: c }] : o ? c.map((m) => ({ alias: null, modules: [m] })) : kh(this.graph.entryModules, a, s, this.inputOptions.onLog), f = new Array(h.length), E = /* @__PURE__ */ new Map();
    let g = 0;
    for (const { alias: m, modules: b } of h) {
      Lh(b);
      const x = new Pt(b, this.inputOptions, this.outputOptions, this.unsetOptions, this.pluginDriver, this.graph.modulesById, E, p, this.facadeChunkByModule, this.includedNamespaces, m, t, e, d, l);
      f[g++] = x;
    }
    for (const m of f) m.link();
    const y = [];
    for (const m of f) y.push(...m.generateFacades());
    return [...f, ...y];
  }
}
function sl(n, e, t) {
  const s = t.get(e);
  if (typeof s == "string" && s !== n) return j((i = e.id, r = n, o = s, { code: "INVALID_CHUNK", message: `Cannot assign "${Z(i)}" to the "${r}" chunk as it is already in the "${o}" chunk.` }));
  var i, r, o;
  t.set(e, n);
}
class zh extends rc {
  constructor() {
    super(), this.parent = null, this.variables.set("undefined", new Ec());
  }
  findVariable(e) {
    let t = this.variables.get(e);
    return t || (t = new to(e), this.variables.set(e, t)), t;
  }
}
async function il(n, e, t, s, i, r, o, a, l, c) {
  const d = await function(p, h, f, E, g, y, m, b) {
    let x = null, A = null;
    if (g) {
      x = /* @__PURE__ */ new Set();
      for (const S of g) p === S.source && h === S.importer && x.add(S.plugin);
      A = (S, w) => ({ ...S, resolve: (C, R, { attributes: D, custom: v, isEntry: I, skipSelf: _ } = ze) => (_ ?? (_ = true), _ && g.findIndex((K) => K.plugin === w && K.source === C && K.importer === R) !== -1 ? Promise.resolve(null) : E(C, R, v, I, D || Be, _ ? [...g, { importer: R, plugin: w, source: C }] : g)) });
    }
    return f.hookFirstAndGetPlugin("resolveId", [p, h, { attributes: b, custom: y, isEntry: m }], A, x);
  }(n, e, s, i, r, o, a, l);
  if (d != null) {
    const [p, h] = d;
    return typeof p != "object" || p.resolvedBy ? typeof p == "string" ? { id: p, resolvedBy: h.name } : p : { ...p, resolvedBy: h.name };
  }
  return e === void 0 || dt(n) || n[0] === "." ? async function(p, h, f) {
    return await js(p, h, f) ?? await js(p + ".mjs", h, f) ?? await js(p + ".js", h, f);
  }(e ? Ke(St(e), n) : Ke(n), t, c) : null;
}
async function js(n, e, t) {
  try {
    const s = await t.lstat(n);
    if (!e && s.isSymbolicLink()) return await js(await t.realpath(n), e, t);
    if (e && s.isSymbolicLink() || s.isFile()) {
      const i = ht(n);
      if ((await t.readdir(St(n))).includes(i)) return n;
    }
  } catch {
  }
}
function lu(n) {
  return n.charCodeAt(0) === 65279 ? lu(n.slice(1)) : n;
}
const Oo = "at position ", Lo = "at output position ", Fh = { delete: () => false, get() {
}, has: () => false, set() {
} };
function Rs(n) {
  return n.startsWith(Oo) || n.startsWith(Lo) ? j({ code: "ANONYMOUS_PLUGIN_CACHE", message: "A plugin is trying to use the Rollup cache but is not declaring a plugin name or cacheKey." }) : j({ code: "DUPLICATE_PLUGIN_NAME", message: `The plugin name ${n} is being used twice in the same build. Plugin names must be distinct or provide a cacheKey (please post an issue to the plugin if you are a plugin user).` });
}
const rl = (n, e, t = jh) => {
  const { onwarn: s, onLog: i } = n, r = Vh(t, s);
  if (i) {
    const o = Gt[e];
    return (a, l) => i(a, cu(l), (c, d) => {
      if (c === "error") return j(ft(d));
      Gt[c] >= o && r(c, ft(d));
    });
  }
  return r;
}, Vh = (n, e) => e ? (t, s) => {
  t === Q ? e(cu(s), (i) => n(Q, ft(i))) : n(t, s);
} : n, cu = (n) => (Object.defineProperty(n, "toString", { value: () => n.message, writable: true }), n), ft = (n) => typeof n == "string" ? { message: n } : typeof n == "function" ? ft(n()) : n, jh = (n, { message: e }) => {
  switch (n) {
    case Q:
      return console.warn(e);
    case fs:
      return console.debug(e);
    default:
      return console.info(e);
  }
};
function uu(n, e, t, s, i = /$./) {
  const r = new Set(e), o = Object.keys(n).filter((a) => !(r.has(a) || i.test(a)));
  o.length > 0 && s(Q, function(a, l, c) {
    return { code: "UNKNOWN_OPTION", message: `Unknown ${a}: ${l.join(", ")}. Allowed options: ${c.join(", ")}` };
  }(t, o, [...r].sort()));
}
const Uh = { recommended: { annotations: true, correctVarValueBeforeDeclaration: false, manualPureFunctions: $e, moduleSideEffects: () => true, propertyReadSideEffects: true, tryCatchDeoptimization: true, unknownGlobalSideEffects: false }, safest: { annotations: true, correctVarValueBeforeDeclaration: true, manualPureFunctions: $e, moduleSideEffects: () => true, propertyReadSideEffects: true, tryCatchDeoptimization: true, unknownGlobalSideEffects: true }, smallest: { annotations: true, correctVarValueBeforeDeclaration: false, manualPureFunctions: $e, moduleSideEffects: () => false, propertyReadSideEffects: false, tryCatchDeoptimization: false, unknownGlobalSideEffects: false } }, Gh = { preserve: { factory: null, fragment: null, importSource: null, mode: "preserve" }, "preserve-react": { factory: "React.createElement", fragment: "React.Fragment", importSource: "react", mode: "preserve" }, react: { factory: "React.createElement", fragment: "React.Fragment", importSource: "react", mode: "classic" }, "react-jsx": { factory: "React.createElement", importSource: "react", jsxImportSource: "react/jsx-runtime", mode: "automatic" } }, Hh = { es2015: { arrowFunctions: true, constBindings: true, objectShorthand: true, reservedNamesAsProps: true, symbols: true }, es5: { arrowFunctions: false, constBindings: false, objectShorthand: false, reservedNamesAsProps: true, symbols: false } }, _o = (n, e, t, s, i) => {
  const r = n == null ? void 0 : n.preset;
  if (r) {
    const o = e[r];
    if (o) return { ...o, ...n };
    j(ke(`${t}.preset`, s, `valid values are ${$t(Object.keys(e))}`, r));
  }
  return (/* @__PURE__ */ ((o, a, l, c) => (d) => {
    if (typeof d == "string") {
      const p = o[d];
      if (p) return p;
      j(ke(a, l, `valid values are ${c}${$t(Object.keys(o))}. You can also supply an object for more fine-grained control`, d));
    }
    return /* @__PURE__ */ ((p) => p && typeof p == "object" ? p : {})(d);
  })(e, t, s, i))(n);
}, vi = async (n) => (await async function(e) {
  do
    e = (await Promise.all(e)).flat(1 / 0);
  while (e.some((t) => t == null ? void 0 : t.then));
  return e;
}([n])).filter(Boolean);
async function Wh(n, e, t, s) {
  const i = e.id, r = [];
  let o = n.map === null ? null : En(n.map);
  const a = n.code;
  let l = n.ast;
  const c = [], d = [];
  let p = false;
  const h = () => p = true;
  let f = "", E = n.code;
  const g = (m) => (b, x) => {
    b = ft(b), x && qs(b, x, E, i), b.id = i, b.hook = "transform", m(b);
  };
  let y;
  try {
    y = await t.hookReduceArg0("transform", [E, i], function(m, b, x) {
      let A, S;
      if (typeof b == "string") A = b;
      else {
        if (!b || typeof b != "object") return m;
        if (e.updateOptions(b), b.code == null) return (b.map || b.ast) && s(Q, function(w) {
          return { code: "NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE", message: `The plugin "${w}" returned a "map" or "ast" without returning a "code". This will be ignored.` };
        }(x.name)), m;
        ({ code: A, map: S, ast: l } = b);
      }
      return S !== null && r.push(En(typeof S == "string" ? JSON.parse(S) : S) || { missing: true, plugin: x.name }), E = A, A;
    }, (m, b) => {
      return f = b.name, { ...m, addWatchFile(S) {
        c.push(S), m.addWatchFile(S);
      }, cache: p ? m.cache : (x = m.cache, A = h, { delete: (S) => (A(), x.delete(S)), get: (S) => (A(), x.get(S)), has: (S) => (A(), x.has(S)), set: (S, w) => (A(), x.set(S, w)) }), debug: g(m.debug), emitFile: (S) => (d.push(S), t.emitFile(S)), error: (S, w) => (typeof S == "string" && (S = { message: S }), w && qs(S, w, E, i), S.id = i, S.hook = "transform", m.error(S)), getCombinedSourcemap() {
        const S = function(w, C, R, D, v) {
          return D.length === 0 ? R : En({ version: 3, ...ou(w, C, R, D, ru(v)).traceMappings() });
        }(i, a, o, r, s);
        return S ? (o !== S && (o = S, r.length = 0), new Pi({ ...S, file: null, sourcesContent: S.sourcesContent })) : new Xt(a).generateMap({ hires: true, includeContent: true, source: i });
      }, info: g(m.info), setAssetSource() {
        return this.error({ code: "INVALID_SETASSETSOURCE", message: "setAssetSource cannot be called in transform for caching reasons. Use emitFile with a source, or call setAssetSource in another hook." });
      }, warn: g(m.warn) };
      var x, A;
    });
  } catch (m) {
    return j(Qn(m, f, { hook: "transform", id: i }));
  }
  return !p && d.length > 0 && (e.transformFiles = d), { ast: l, code: y, customTransformCache: p, originalCode: a, originalSourcemap: o, sourcemapChain: r, transformDependencies: c };
}
const pr = "resolveDependencies";
class qh {
  constructor(e, t, s, i) {
    this.graph = e, this.modulesById = t, this.options = s, this.pluginDriver = i, this.implicitEntryModules = /* @__PURE__ */ new Set(), this.indexedEntryModules = [], this.latestLoadModulesPromise = Promise.resolve(), this.moduleLoadPromises = /* @__PURE__ */ new Map(), this.modulesWithLoadedDependencies = /* @__PURE__ */ new Set(), this.nextChunkNamePriority = 0, this.nextEntryModuleIndex = 0, this.resolveId = async (r, o, a, l, c, d = null) => this.getResolvedIdWithDefaults(this.getNormalizedResolvedIdWithoutDefaults(!this.options.external(r, o, false) && await il(r, o, this.options.preserveSymlinks, this.pluginDriver, this.resolveId, d, a, typeof l == "boolean" ? l : !o, c, this.options.fs), o, r), c), this.hasModuleSideEffects = s.treeshake ? s.treeshake.moduleSideEffects : () => true;
  }
  async addAdditionalModules(e, t) {
    const s = this.extendLoadModulesPromise(Promise.all(e.map((i) => this.loadEntryModule(i, false, void 0, null, t))));
    return await this.awaitLoadModulesPromise(), s;
  }
  async addEntryModules(e, t) {
    const s = this.nextEntryModuleIndex;
    this.nextEntryModuleIndex += e.length;
    const i = this.nextChunkNamePriority;
    this.nextChunkNamePriority += e.length;
    const r = await this.extendLoadModulesPromise(Promise.all(e.map(({ id: o, importer: a }) => this.loadEntryModule(o, true, a, null))).then((o) => {
      for (const [a, l] of o.entries()) {
        l.isUserDefinedEntryPoint = l.isUserDefinedEntryPoint || t, al(l, e[a], t, i + a);
        const c = this.indexedEntryModules.find((d) => d.module === l);
        c ? c.index = Math.min(c.index, s + a) : this.indexedEntryModules.push({ index: s + a, module: l });
      }
      return this.indexedEntryModules.sort(({ index: a }, { index: l }) => a > l ? 1 : -1), o;
    }));
    return await this.awaitLoadModulesPromise(), { entryModules: this.indexedEntryModules.map(({ module: o }) => o), implicitEntryModules: [...this.implicitEntryModules], newEntryModules: r };
  }
  async emitChunk({ fileName: e, id: t, importer: s, name: i, implicitlyLoadedAfterOneOf: r, preserveSignature: o }) {
    const a = { fileName: e || null, id: t, importer: s, name: i || null }, l = r ? await this.addEntryWithImplicitDependants(a, r) : (await this.addEntryModules([a], false)).newEntryModules[0];
    return o != null && (l.preserveSignature = o), l;
  }
  async preloadModule(e) {
    return (await this.fetchModule(this.getResolvedIdWithDefaults(e, Be), void 0, false, !e.resolveDependencies || pr)).info;
  }
  addEntryWithImplicitDependants(e, t) {
    const s = this.nextChunkNamePriority++;
    return this.extendLoadModulesPromise(this.loadEntryModule(e.id, false, e.importer, null).then(async (i) => {
      if (al(i, e, false, s), !i.info.isEntry) {
        const r = await Promise.all(t.map((o) => this.loadEntryModule(o, false, e.importer, i.id)));
        if (!i.info.isEntry) {
          this.implicitEntryModules.add(i);
          for (const o of r) i.implicitlyLoadedAfter.add(o);
          for (const o of i.implicitlyLoadedAfter) o.implicitlyLoadedBefore.add(i);
        }
      }
      return i;
    }));
  }
  async addModuleSource(e, t, s) {
    let i;
    try {
      i = await this.graph.fileOperationQueue.run(async () => {
        const a = await this.pluginDriver.hookFirst("load", [e]);
        return a !== null ? a : (this.graph.watchFiles[e] = true, await this.options.fs.readFile(e, { encoding: "utf8" }));
      });
    } catch (a) {
      let l = `Could not load ${e}`;
      throw t && (l += ` (imported by ${Z(t)})`), l += `: ${a.message}`, a.message = l, a;
    }
    const r = typeof i == "string" ? { code: i } : i != null && typeof i == "object" && typeof i.code == "string" ? i : j(function(a) {
      return { code: "BAD_LOADER", message: `Error loading "${Z(a)}": plugin load hook should return a string, a { code, map } object, or nothing/null.` };
    }(e));
    r.code = lu(r.code);
    const o = this.graph.cachedModules.get(e);
    if (!o || o.customTransformCache || o.originalCode !== r.code || await this.pluginDriver.hookFirst("shouldTransformCachedModule", [{ ast: o.ast, code: o.code, id: o.id, meta: o.meta, moduleSideEffects: o.moduleSideEffects, resolvedSources: o.resolvedIds, syntheticNamedExports: o.syntheticNamedExports }])) s.updateOptions(r), await s.setSource(await Wh(r, s, this.pluginDriver, this.options.onLog));
    else {
      if (o.transformFiles) for (const a of o.transformFiles) this.pluginDriver.emitFile(a);
      await s.setSource(o);
    }
  }
  async awaitLoadModulesPromise() {
    let e;
    do
      e = this.latestLoadModulesPromise, await e;
    while (e !== this.latestLoadModulesPromise);
  }
  extendLoadModulesPromise(e) {
    return this.latestLoadModulesPromise = Promise.all([e, this.latestLoadModulesPromise]), this.latestLoadModulesPromise.catch(() => {
    }), e;
  }
  async fetchDynamicDependencies(e, t) {
    const s = await Promise.all(t.map((i) => i.then(async ([r, o]) => o === null ? null : typeof o == "string" ? (r.resolution = o, null) : r.resolution = await this.fetchResolvedDependency(Z(o.id), e.id, o))));
    for (const i of s) i && (e.dynamicDependencies.add(i), i.dynamicImporters.push(e.id));
  }
  async fetchModule({ attributes: e, id: t, meta: s, moduleSideEffects: i, syntheticNamedExports: r }, o, a, l) {
    const c = this.modulesById.get(t);
    if (c instanceof Ne) return o && Vs(e, c.info.attributes) && this.options.onLog(Q, Ls(c.info.attributes, e, t, o)), await this.handleExistingModule(c, a, l), c;
    if (c instanceof ve) return j({ code: "EXTERNAL_MODULES_CANNOT_BE_TRANSFORMED_TO_MODULES", message: `${c.id} is resolved as a module now, but it was an external module before. Please check whether there are conflicts in your Rollup options "external" and "manualChunks", manualChunks cannot include external modules.` });
    const d = new Ne(this.graph, t, this.options, a, i, r, s, e);
    this.modulesById.set(t, d);
    const p = this.addModuleSource(t, o, d).then(() => [this.getResolveStaticDependencyPromises(d), this.getResolveDynamicImportPromises(d), h]), h = ll(p).then(() => this.pluginDriver.hookParallel("moduleParsed", [d.info]));
    h.catch(() => {
    }), this.moduleLoadPromises.set(d, p);
    const f = await p;
    return l ? l === pr && await h : await this.fetchModuleDependencies(d, ...f), d;
  }
  async fetchModuleDependencies(e, t, s, i) {
    this.modulesWithLoadedDependencies.has(e) || (this.modulesWithLoadedDependencies.add(e), await Promise.all([this.fetchStaticDependencies(e, t), this.fetchDynamicDependencies(e, s)]), e.linkImports(), await i);
  }
  fetchResolvedDependency(e, t, s) {
    if (s.external) {
      const { attributes: i, external: r, id: o, moduleSideEffects: a, meta: l } = s;
      let c = this.modulesById.get(o);
      if (c) {
        if (!(c instanceof ve)) return j(function(d, p) {
          return { code: "INVALID_EXTERNAL_ID", message: `"${d}" is imported as an external by "${Z(p)}", but is already an existing non-external module id.` };
        }(e, t));
        Vs(c.info.attributes, i) && this.options.onLog(Q, Ls(c.info.attributes, i, e, t));
      } else c = new ve(this.options, o, a, l, r !== "absolute" && dt(o), i), this.modulesById.set(o, c);
      return Promise.resolve(c);
    }
    return this.fetchModule(s, t, false, false);
  }
  async fetchStaticDependencies(e, t) {
    for (const s of await Promise.all(t.map((i) => i.then(([r, o]) => this.fetchResolvedDependency(r, e.id, o))))) e.dependencies.add(s), s.importers.push(e.id);
    if (!this.options.treeshake || e.info.moduleSideEffects === "no-treeshake") for (const s of e.dependencies) s instanceof Ne && (s.importedFromNotTreeshaken = true);
  }
  getNormalizedResolvedIdWithoutDefaults(e, t, s) {
    const { makeAbsoluteExternalsRelative: i } = this.options;
    if (e) {
      if (typeof e == "object") {
        const a = e.external || this.options.external(e.id, t, true);
        return { ...e, external: a && (a === "relative" || !dt(e.id) || a === true && fr(e.id, s, i) || "absolute") };
      }
      const o = this.options.external(e, t, true);
      return { external: o && (fr(e, s, i) || "absolute"), id: o && i ? ol(e, t) : e };
    }
    const r = i ? ol(s, t) : s;
    return e === false || this.options.external(r, t, true) ? { external: fr(r, s, i) || "absolute", id: r } : null;
  }
  getResolveDynamicImportPromises(e) {
    return e.dynamicImports.map(async (t) => {
      const s = await this.resolveDynamicImport(e, t.argument, e.id, Zc(t.node));
      return s && typeof s != "string" ? (t.node.shouldIncludeDynamicAttributes = !!s.external, t.id = s.id) : t.node.shouldIncludeDynamicAttributes = true, [t, s];
    });
  }
  getResolveStaticDependencyPromises(e) {
    return Array.from(e.sourcesWithAttributes, async ([t, s]) => [t, e.resolvedIds[t] = e.resolvedIds[t] || this.handleInvalidResolvedId(await this.resolveId(t, e.id, Be, false, s), t, e.id, s)]);
  }
  getResolvedIdWithDefaults(e, t) {
    if (!e) return null;
    const s = e.external || false;
    return { attributes: e.attributes || t, external: s, id: e.id, meta: e.meta || {}, moduleSideEffects: e.moduleSideEffects ?? this.hasModuleSideEffects(e.id, !!s), resolvedBy: e.resolvedBy ?? "rollup", syntheticNamedExports: e.syntheticNamedExports ?? false };
  }
  async handleExistingModule(e, t, s) {
    const i = this.moduleLoadPromises.get(e);
    if (s) return s === pr ? ll(i) : i;
    if (t) {
      e.info.isEntry = true, this.implicitEntryModules.delete(e);
      for (const r of e.implicitlyLoadedAfter) r.implicitlyLoadedBefore.delete(e);
      e.implicitlyLoadedAfter.clear();
    }
    return this.fetchModuleDependencies(e, ...await i);
  }
  handleInvalidResolvedId(e, t, s, i) {
    return e === null ? Fr(t) ? j(function(r, o) {
      return { code: Jo, exporter: r, id: o, message: `Could not resolve "${r}" from "${Z(o)}"` };
    }(t, s)) : (this.options.onLog(Q, function(r, o) {
      return { code: Jo, exporter: r, id: o, message: `"${r}" is imported by "${Z(o)}", but could not be resolved \u2013 treating it as an external dependency.`, url: Re("troubleshooting/#warning-treating-module-as-external-dependency") };
    }(t, s)), { attributes: i, external: true, id: t, meta: {}, moduleSideEffects: this.hasModuleSideEffects(t, true), resolvedBy: "rollup", syntheticNamedExports: false }) : (e.external && e.syntheticNamedExports && this.options.onLog(Q, function(r, o) {
      return { code: "EXTERNAL_SYNTHETIC_EXPORTS", exporter: r, message: `External "${r}" cannot have "syntheticNamedExports" enabled (imported by "${Z(o)}").` };
    }(t, s)), e);
  }
  async loadEntryModule(e, t, s, i, r = false) {
    const o = await il(e, s, this.options.preserveSymlinks, this.pluginDriver, this.resolveId, null, Be, true, Be, this.options.fs);
    if (o == null) return j(i === null ? function(l) {
      return { code: Xo, message: `Could not resolve entry module "${Z(l)}".` };
    }(e) : function(l, c) {
      return { code: xr, message: `Module "${Z(l)}" that should be implicitly loaded before "${Z(c)}" could not be resolved.` };
    }(e, i));
    const a = typeof o == "object" && o.external;
    return o === false || a ? j(i === null ? a && r ? { code: "EXTERNAL_MODULES_CANNOT_BE_INCLUDED_IN_MANUAL_CHUNKS", message: `"${e}" cannot be included in manualChunks because it is resolved as an external module by the "external" option or plugins.` } : function(l) {
      return { code: Xo, message: `Entry module "${Z(l)}" cannot be external.` };
    }(e) : function(l, c) {
      return { code: xr, message: `Module "${Z(l)}" that should be implicitly loaded before "${Z(c)}" cannot be external.` };
    }(e, i)) : this.fetchModule(this.getResolvedIdWithDefaults(typeof o == "object" ? o : { id: o }, Be), void 0, t, false);
  }
  async resolveDynamicImport(e, t, s, i) {
    const r = await this.pluginDriver.hookFirst("resolveDynamicImport", [t, s, { attributes: i }]);
    if (typeof t != "string") return typeof r == "string" ? r : r ? this.getResolvedIdWithDefaults(r, i) : null;
    if (r == null) {
      const o = e.resolvedIds[t];
      return o ? (Vs(o.attributes, i) && this.options.onLog(Q, Ls(o.attributes, i, t, s)), o) : e.resolvedIds[t] = this.handleInvalidResolvedId(await this.resolveId(t, e.id, Be, false, i), t, e.id, i);
    }
    return this.handleInvalidResolvedId(this.getResolvedIdWithDefaults(this.getNormalizedResolvedIdWithoutDefaults(r, s, t), i), t, s, i);
  }
}
function ol(n, e) {
  return Fr(n) ? e ? Ke(e, "..", n) : Ke(n) : n;
}
function al(n, { fileName: e, name: t }, s, i) {
  var _a2;
  if (e !== null) n.chunkFileNames.add(e);
  else if (t !== null) {
    let r = 0;
    for (; ((_a2 = n.chunkNames[r]) == null ? void 0 : _a2.priority) < i; ) r++;
    n.chunkNames.splice(r, 0, { isUserDefined: s, name: t, priority: i });
  }
}
function fr(n, e, t) {
  return t === true || t === "ifRelativeSource" && Fr(e) || !dt(n);
}
async function ll(n) {
  const [e, t] = await n;
  return Promise.all([...e, ...t]);
}
function cl(n, e, t, s, i, r, o, a, l) {
  const c = o.sanitizeFileName(n || "asset");
  return Mr(_r(typeof o.assetFileNames == "function" ? o.assetFileNames({ get name() {
    return zt('Accessing the "name" property of emitted assets when generating the file name is deprecated. Use the "names" property instead.', pn, false, l), n;
  }, names: e, get originalFileName() {
    return zt('Accessing the "originalFileName" property of emitted assets when generating the file name is deprecated. Use the "originalFileNames" property instead.', pn, false, l), s;
  }, originalFileNames: i, source: t, type: "asset" }) : o.assetFileNames, "output.assetFileNames", { ext: () => wt(c).slice(1), extname: () => wt(c), hash: (d) => r.slice(0, Math.min(Math.max(0, d || 8), 21)), name: () => c.slice(0, Math.max(0, c.length - wt(c).length)) }), a);
}
function ul(n, { bundle: e }, t) {
  e[Wi].has(n.toLowerCase()) ? t(Q, function(s) {
    return { code: "FILE_NAME_CONFLICT", message: `The emitted file "${s}" overwrites a previously emitted file of the same name.` };
  }(n)) : e[n] = Ro;
}
const Kh = /* @__PURE__ */ new Set(["chunk", "asset", "prebuilt-chunk"]);
function dl(n, e, t) {
  if (!(typeof n == "string" || n instanceof Uint8Array)) {
    const s = e.fileName || e.name || t;
    return j(qe(`Could not set source for ${typeof s == "string" ? `asset "${s}"` : "unnamed asset"}, asset source needs to be a string, Uint8Array or Buffer.`));
  }
  return n;
}
class Xh {
  constructor(e, t, s) {
    this.graph = e, this.options = t, this.facadeChunkByModule = null, this.nextIdBase = 1, this.output = null, this.outputFileEmitters = [], this.emitFile = (i) => function(r) {
      return !!(r && Kh.has(r.type));
    }(i) ? i.type === "prebuilt-chunk" ? this.emitPrebuiltChunk(i) : function(r) {
      const o = r.fileName || r.name;
      return !o || typeof o == "string" && !Ws(o);
    }(i) ? i.type === "chunk" ? this.emitChunk(i) : this.emitAsset(i) : j(qe(`The "fileName" or "name" properties of emitted chunks and assets must be strings that are neither absolute nor relative paths, received "${i.fileName || i.name}".`)) : j(qe(`Emitted files must be of type "asset", "chunk" or "prebuilt-chunk", received "${i && i.type}".`)), this.finaliseAssets = () => {
      for (const [i, r] of this.filesByReferenceId) if (r.type === "asset" && typeof r.fileName != "string") return j(Uu(r.name || i));
    }, this.getFileName = (i) => {
      const r = this.filesByReferenceId.get(i);
      return r ? r.type === "chunk" ? (o = r, a = this.facadeChunkByModule, o.fileName ? o.fileName : a ? a.get(o.module).getFileName() : j({ code: "CHUNK_NOT_GENERATED", message: `Plugin error - Unable to get file name for emitted chunk "${o.fileName || o.name}". You can only get file names once chunks have been generated after the "renderStart" hook.` })) : r.type === "prebuilt-chunk" ? r.fileName : function(l, c) {
        return typeof l.fileName != "string" ? j({ code: "ASSET_NOT_FINALISED", message: `Plugin error - Unable to get file name for asset "${l.name || c}". Ensure that the source is set and that generate is called first. If you reference assets via import.meta.ROLLUP_FILE_URL_<referenceId>, you need to either have set their source after "renderStart" or need to provide an explicit "fileName" when emitting them.` }) : l.fileName;
      }(r, i) : j({ code: "FILE_NOT_FOUND", message: `Plugin error - Unable to get file name for unknown file "${i}".` });
      var o, a;
    }, this.setAssetSource = (i, r) => {
      const o = this.filesByReferenceId.get(i);
      if (!o) return j({ code: "ASSET_NOT_FOUND", message: `Plugin error - Unable to set the source for unknown asset "${i}".` });
      if (o.type !== "asset") return j(qe(`Asset sources can only be set for emitted assets but "${i}" is an emitted chunk.`));
      if (o.source !== void 0) return j({ code: "ASSET_SOURCE_ALREADY_SET", message: `Unable to set the source for asset "${o.name || i}", source already set.` });
      const a = dl(r, o, i);
      if (this.output) this.finalizeAdditionalAsset(o, a, this.output);
      else {
        o.source = a;
        for (const l of this.outputFileEmitters) l.finalizeAdditionalAsset(o, a, l.output);
      }
    }, this.setChunkInformation = (i) => {
      this.facadeChunkByModule = i;
    }, this.setOutputBundle = (i, r) => {
      const o = Do[r.hashCharacters], a = this.output = { bundle: i, fileNamesBySourceHash: /* @__PURE__ */ new Map(), getHash: o, outputOptions: r };
      for (const c of this.filesByReferenceId.values()) c.fileName && ul(c.fileName, a, this.options.onLog);
      const l = /* @__PURE__ */ new Map();
      for (const c of this.filesByReferenceId.values()) c.type === "asset" && c.source !== void 0 ? c.fileName ? this.finalizeAdditionalAsset(c, c.source, a) : He(l, o(c.source), () => []).push(c) : c.type === "prebuilt-chunk" && (this.output.bundle[c.fileName] = this.createPrebuiltChunk(c));
      for (const [c, d] of l) this.finalizeAssetsWithSameSource(d, c, a);
    }, this.filesByReferenceId = s ? new Map(s.filesByReferenceId) : /* @__PURE__ */ new Map(), s == null ? void 0 : s.addOutputFileEmitter(this);
  }
  addOutputFileEmitter(e) {
    this.outputFileEmitters.push(e);
  }
  assignReferenceId(e, t) {
    let s = t;
    do
      s = au(s).slice(0, 8).replaceAll("-", "$");
    while (this.filesByReferenceId.has(s) || this.outputFileEmitters.some(({ filesByReferenceId: i }) => i.has(s)));
    e.referenceId = s, this.filesByReferenceId.set(s, e);
    for (const { filesByReferenceId: i } of this.outputFileEmitters) i.set(s, e);
    return s;
  }
  createPrebuiltChunk(e) {
    return { code: e.code, dynamicImports: [], exports: e.exports || [], facadeModuleId: null, fileName: e.fileName, implicitlyLoadedBefore: [], importedBindings: {}, imports: [], isDynamicEntry: false, isEntry: false, isImplicitEntry: false, map: e.map || null, moduleIds: [], modules: {}, name: e.fileName, preliminaryFileName: e.fileName, referencedFiles: [], sourcemapFileName: e.sourcemapFileName || null, type: "chunk" };
  }
  emitAsset(e) {
    const t = e.source === void 0 ? void 0 : dl(e.source, e, null), s = e.originalFileName || null;
    typeof s == "string" && (this.graph.watchFiles[s] = true);
    const i = { fileName: e.fileName, name: e.name, needsCodeReference: !!e.needsCodeReference, originalFileName: s, referenceId: "", source: t, type: "asset" }, r = this.assignReferenceId(i, e.fileName || e.name || String(this.nextIdBase++));
    if (this.output) this.emitAssetWithReferenceId(i, this.output);
    else for (const o of this.outputFileEmitters) o.emitAssetWithReferenceId(i, o.output);
    return r;
  }
  emitAssetWithReferenceId(e, t) {
    const { fileName: s, source: i } = e;
    s && ul(s, t, this.options.onLog), i !== void 0 && this.finalizeAdditionalAsset(e, i, t);
  }
  emitChunk(e) {
    if (this.graph.phase > Kt.LOAD_AND_PARSE) return j({ code: "INVALID_ROLLUP_PHASE", message: "Cannot emit chunks after module loading has finished." });
    if (typeof e.id != "string") return j(qe(`Emitted chunks need to have a valid string id, received "${e.id}"`));
    const t = { fileName: e.fileName, module: null, name: e.name || e.id, referenceId: "", type: "chunk" };
    return this.graph.moduleLoader.emitChunk(e).then((s) => t.module = s).catch(() => {
    }), this.assignReferenceId(t, e.id);
  }
  emitPrebuiltChunk(e) {
    if (typeof e.code != "string") return j(qe(`Emitted prebuilt chunks need to have a valid string code, received "${e.code}".`));
    if (typeof e.fileName != "string" || Ws(e.fileName)) return j(qe(`The "fileName" property of emitted prebuilt chunks must be strings that are neither absolute nor relative paths, received "${e.fileName}".`));
    const t = { code: e.code, exports: e.exports, fileName: e.fileName, map: e.map, referenceId: "", type: "prebuilt-chunk" }, s = this.assignReferenceId(t, t.fileName);
    return this.output && (this.output.bundle[t.fileName] = this.createPrebuiltChunk(t)), s;
  }
  finalizeAdditionalAsset(e, t, { bundle: s, fileNamesBySourceHash: i, getHash: r, outputOptions: o }) {
    let { fileName: a, name: l, needsCodeReference: c, originalFileName: d, referenceId: p } = e;
    if (!a) {
      const E = r(t);
      a = i.get(E), a || (a = cl(l, l ? [l] : [], t, d, d ? [d] : [], E, o, s, this.options), i.set(E, a));
    }
    const h = { ...e, fileName: a, source: t };
    this.filesByReferenceId.set(p, h);
    const f = s[a];
    if ((f == null ? void 0 : f.type) === "asset") f.needsCodeReference && (f.needsCodeReference = c), l && f.names.push(l), d && f.originalFileNames.push(d);
    else {
      const { options: E } = this;
      s[a] = { fileName: a, get name() {
        return zt('Accessing the "name" property of emitted assets in the bundle is deprecated. Use the "names" property instead.', pn, false, E), l;
      }, names: l ? [l] : [], needsCodeReference: c, get originalFileName() {
        return zt('Accessing the "originalFileName" property of emitted assets in the bundle is deprecated. Use the "originalFileNames" property instead.', pn, false, E), d;
      }, originalFileNames: d ? [d] : [], source: t, type: "asset" };
    }
  }
  finalizeAssetsWithSameSource(e, t, { bundle: s, fileNamesBySourceHash: i, outputOptions: r }) {
    const { names: o, originalFileNames: a } = function(h) {
      const f = [], E = [];
      for (const { name: g, originalFileName: y } of h) typeof g == "string" && f.push(g), y && E.push(y);
      return E.sort(), f.sort((g, y) => g.length - y.length || (g > y ? 1 : g === y ? 0 : -1)), { names: f, originalFileNames: E };
    }(e);
    let l, c = "", d = true;
    for (const h of e) {
      d && (d = h.needsCodeReference);
      const f = cl(h.name, o, h.source, h.originalFileName, a, t, r, s, this.options);
      (!c || f.length < c.length || f.length === c.length && f < c) && (c = f, l = h);
    }
    i.set(t, c);
    for (const h of e) {
      const f = { ...h, fileName: c };
      this.filesByReferenceId.set(h.referenceId, f);
    }
    const { options: p } = this;
    s[c] = { fileName: c, get name() {
      return zt('Accessing the "name" property of emitted assets in the bundle is deprecated. Use the "names" property instead.', pn, false, p), l.name;
    }, names: o, needsCodeReference: d, get originalFileName() {
      return zt('Accessing the "originalFileName" property of emitted assets in the bundle is deprecated. Use the "originalFileNames" property instead.', pn, false, p), l.originalFileName;
    }, originalFileNames: a, source: l.source, type: "asset" };
  }
}
function xn(n, e, t, s, i) {
  return Gt[n] < Gt[i] ? it : (r, o) => {
    o != null && t(Q, { code: "INVALID_LOG_POSITION", message: `Plugin "${s}" tried to add a file position to a log or warning. This is only supported in the "transform" hook at the moment and will be ignored.` }), (r = ft(r)).code && !r.pluginCode && (r.pluginCode = r.code), r.code = e, r.plugin = s, t(n, r);
  };
}
function Jh(n, e, t, s, i, r) {
  const { logLevel: o, onLog: a } = s;
  let l, c = true;
  if (typeof n.cacheKey != "string" && (n.name.startsWith(Oo) || n.name.startsWith(Lo) || r.has(n.name) ? c = false : r.add(n.name)), e) if (c) {
    const h = n.cacheKey || n.name;
    p = e[h] || (e[h] = /* @__PURE__ */ Object.create(null)), l = { delete: (f) => delete p[f], get(f) {
      const E = p[f];
      if (E) return E[0] = 0, E[1];
    }, has(f) {
      const E = p[f];
      return !!E && (E[0] = 0, true);
    }, set(f, E) {
      p[f] = [0, E];
    } };
  } else d = n.name, l = { delete: () => Rs(d), get: () => Rs(d), has: () => Rs(d), set: () => Rs(d) };
  else l = Fh;
  var d, p;
  return { addWatchFile(h) {
    t.watchFiles[h] = true;
  }, cache: l, debug: xn(fs, "PLUGIN_LOG", a, n.name, o), emitFile: i.emitFile.bind(i), error: (h) => j(Qn(ft(h), n.name)), fs: s.fs, getFileName: i.getFileName, getModuleIds: () => t.modulesById.keys(), getModuleInfo: t.getModuleInfo, getWatchFiles: () => Object.keys(t.watchFiles), info: xn(Ut, "PLUGIN_LOG", a, n.name, o), load: (h) => t.moduleLoader.preloadModule(h), meta: { rollupVersion: zr, watchMode: t.watchMode }, parse: Io, resolve: (h, f, { attributes: E, custom: g, isEntry: y, skipSelf: m } = ze) => (m ?? (m = true), t.moduleLoader.resolveId(h, f, g, y, E || Be, m ? [{ importer: f, plugin: n, source: h }] : null)), setAssetSource: i.setAssetSource, warn: xn(Q, "PLUGIN_WARNING", a, n.name, o) };
}
function Br(n) {
  return Array.isArray(n) ? n.filter(Boolean) : n ? [n] : [];
}
function hl(n) {
  if (n instanceof RegExp) return (i) => {
    const r = Et(i), o = n.test(r);
    return n.lastIndex = 0, o;
  };
  const e = process.cwd(), t = function(i, r) {
    return i.startsWith("**") || dt(i) ? Et(i) : Et(Ke(r, i));
  }(n, e), s = Kd(t, { dot: true });
  return (i) => {
    const r = Et(i);
    return s(r);
  };
}
function pl(n) {
  return n instanceof RegExp ? (e) => {
    const t = n.test(e);
    return n.lastIndex = 0, t;
  } : (e) => e.includes(n);
}
function du(n, e) {
  if (n || e) return (t) => !(n == null ? void 0 : n.some((s) => s(t))) && (!!(e == null ? void 0 : e.some((s) => s(t))) || !(e && e.length > 0));
}
function hu(n) {
  return typeof n == "string" || n instanceof RegExp ? { include: [n] } : Array.isArray(n) ? { include: n } : { exclude: n.exclude ? Br(n.exclude) : void 0, include: n.include ? Br(n.include) : void 0 };
}
function pu(n) {
  if (!n) return;
  const { exclude: e, include: t } = hu(n), s = e == null ? void 0 : e.map(hl), i = t == null ? void 0 : t.map(hl);
  return du(s, i);
}
function Yh(n, e) {
  if (!n && !e) return;
  const t = pu(n), s = function(i) {
    if (!i) return;
    const { exclude: r, include: o } = hu(i), a = r == null ? void 0 : r.map(pl), l = o == null ? void 0 : o.map(pl);
    return du(a, l);
  }(e);
  return (i, r) => {
    let o = true;
    return t && (o && (o = t(i))), !!o && (s && (o && (o = s(r))), o);
  };
}
const Zh = Object.keys({ buildEnd: 1, buildStart: 1, closeBundle: 1, closeWatcher: 1, load: 1, moduleParsed: 1, onLog: 1, options: 1, resolveDynamicImport: 1, resolveId: 1, shouldTransformCachedModule: 1, transform: 1, watchChange: 1 });
class Mo {
  constructor(e, t, s, i, r) {
    this.graph = e, this.options = t, this.pluginCache = i, this.sortedPlugins = /* @__PURE__ */ new Map(), this.unfulfilledActions = /* @__PURE__ */ new Set(), this.compiledPluginFilters = { idOnlyFilter: /* @__PURE__ */ new WeakMap(), transformFilter: /* @__PURE__ */ new WeakMap() }, this.fileEmitter = new Xh(e, t, r && r.fileEmitter), this.emitFile = this.fileEmitter.emitFile.bind(this.fileEmitter), this.getFileName = this.fileEmitter.getFileName.bind(this.fileEmitter), this.finaliseAssets = this.fileEmitter.finaliseAssets.bind(this.fileEmitter), this.setChunkInformation = this.fileEmitter.setChunkInformation.bind(this.fileEmitter), this.setOutputBundle = this.fileEmitter.setOutputBundle.bind(this.fileEmitter), this.plugins = [...r ? r.plugins : [], ...s];
    const o = /* @__PURE__ */ new Set();
    if (this.pluginContexts = new Map(this.plugins.map((a) => [a, Jh(a, i, e, t, this.fileEmitter, o)])), r) for (const a of s) for (const l of Zh) l in a && t.onLog(Q, Xu(a.name, l));
  }
  createOutputPluginDriver(e) {
    return new Mo(this.graph, this.options, e, this.pluginCache, this);
  }
  getUnfulfilledHookActions() {
    return this.unfulfilledActions;
  }
  hookFirst(e, t, s, i) {
    return this.hookFirstAndGetPlugin(e, t, s, i).then((r) => r && r[0]);
  }
  async hookFirstAndGetPlugin(e, t, s, i) {
    for (const r of this.getSortedPlugins(e)) {
      if (i == null ? void 0 : i.has(r)) continue;
      const o = await this.runHook(e, t, r, s);
      if (o != null) return [o, r];
    }
    return null;
  }
  hookFirstSync(e, t, s) {
    for (const i of this.getSortedPlugins(e)) {
      const r = this.runHookSync(e, t, i, s);
      if (r != null) return r;
    }
    return null;
  }
  async hookParallel(e, t, s) {
    const i = [];
    for (const r of this.getSortedPlugins(e)) r[e].sequential ? (await Promise.all(i), i.length = 0, await this.runHook(e, t, r, s)) : i.push(this.runHook(e, t, r, s));
    await Promise.all(i);
  }
  hookReduceArg0(e, [t, ...s], i, r) {
    let o = Promise.resolve(t);
    for (const a of this.getSortedPlugins(e)) o = o.then((l) => this.runHook(e, [l, ...s], a, r).then((c) => i.call(this.pluginContexts.get(a), l, c, a)));
    return o;
  }
  hookReduceArg0Sync(e, [t, ...s], i, r) {
    for (const o of this.getSortedPlugins(e)) {
      const a = [t, ...s], l = this.runHookSync(e, a, o, r);
      t = i.call(this.pluginContexts.get(o), t, l, o);
    }
    return t;
  }
  async hookReduceValue(e, t, s, i) {
    const r = [], o = [];
    for (const a of this.getSortedPlugins(e, ep)) a[e].sequential ? (r.push(...await Promise.all(o)), o.length = 0, r.push(await this.runHook(e, s, a))) : o.push(this.runHook(e, s, a));
    return r.push(...await Promise.all(o)), r.reduce(i, await t);
  }
  hookReduceValueSync(e, t, s, i, r) {
    let o = t;
    for (const a of this.getSortedPlugins(e)) {
      const l = this.runHookSync(e, s, a, r);
      o = i.call(this.pluginContexts.get(a), o, l, a);
    }
    return o;
  }
  hookSeq(e, t, s) {
    let i = Promise.resolve();
    for (const r of this.getSortedPlugins(e)) i = i.then(() => this.runHook(e, t, r, s));
    return i.then(tp);
  }
  getSortedPlugins(e, t) {
    return He(this.sortedPlugins, e, () => To(e, this.plugins, t));
  }
  runHook(e, t, s, i) {
    const r = s[e], o = typeof r == "object" ? r.handler : r;
    if (typeof r == "object" && "filter" in r && r.filter) {
      if (e === "transform") {
        const c = r.filter, d = t, p = He(this.compiledPluginFilters.transformFilter, c, () => Yh(c.id, c.code));
        if (p && !p(d[1], d[0])) return Promise.resolve();
      } else if (e === "resolveId" || e === "load") {
        const c = r.filter, d = t, p = He(this.compiledPluginFilters.idOnlyFilter, c, () => function(h) {
          const f = pu(h);
          return f ? (E) => !!f(E) : void 0;
        }(c.id));
        if (p && !p(d[0])) return Promise.resolve();
      }
    }
    let a = this.pluginContexts.get(s);
    i && (a = i(a, s));
    let l = null;
    return Promise.resolve().then(() => {
      if (typeof o != "function") return o;
      const c = o.apply(a, t);
      return (c == null ? void 0 : c.then) ? (l = [s.name, e, t], this.unfulfilledActions.add(l), Promise.resolve(c).then((d) => (this.unfulfilledActions.delete(l), d))) : c;
    }).catch((c) => (l !== null && this.unfulfilledActions.delete(l), j(Qn(c, s.name, { hook: e }))));
  }
  runHookSync(e, t, s, i) {
    const r = s[e], o = typeof r == "object" ? r.handler : r;
    let a = this.pluginContexts.get(s);
    i && (a = i(a, s));
    try {
      return o.apply(a, t);
    } catch (l) {
      return j(Qn(l, s.name, { hook: e }));
    }
  }
}
function To(n, e, t = Qh) {
  const s = [], i = [], r = [];
  for (const o of e) {
    const a = o[n];
    if (a) {
      if (typeof a == "object") {
        if (t(a.handler, n, o), a.order === "pre") {
          s.push(o);
          continue;
        }
        if (a.order === "post") {
          r.push(o);
          continue;
        }
      } else t(a, n, o);
      i.push(o);
    }
  }
  return [...s, ...i, ...r];
}
function Qh(n, e, t) {
  typeof n != "function" && j(function(s, i) {
    return { code: Vl, hook: s, message: `Error running plugin hook "${s}" for plugin "${i}", expected a function hook or an object with a "handler" function.`, plugin: i };
  }(e, t.name));
}
function ep(n, e, t) {
  if (typeof n != "string" && typeof n != "function") return j(function(s, i) {
    return { code: Vl, hook: s, message: `Error running plugin hook "${s}" for plugin "${i}", expected a string, a function hook or an object with a "handler" string or function.`, plugin: i };
  }(e, t.name));
}
function tp() {
}
class np {
  constructor(e) {
    this.maxParallel = e, this.queue = [], this.workerCount = 0;
  }
  run(e) {
    return new Promise((t, s) => {
      this.queue.push({ reject: s, resolve: t, task: e }), this.work();
    });
  }
  async work() {
    if (this.workerCount >= this.maxParallel) return;
    let e;
    for (this.workerCount++; e = this.queue.shift(); ) {
      const { reject: t, resolve: s, task: i } = e;
      try {
        s(await i());
      } catch (r) {
        t(r);
      }
    }
    this.workerCount--;
  }
}
class sp {
  constructor(e, t) {
    var _a2, _b;
    if (this.options = e, this.astLru = function(s) {
      var i, r, o, a = s;
      function l(d, p) {
        ++i > a && (o = r, c(1), ++i), r[d] = p;
      }
      function c(d) {
        i = 0, r = /* @__PURE__ */ Object.create(null), d || (o = /* @__PURE__ */ Object.create(null));
      }
      return c(), { clear: c, has: function(d) {
        return r[d] !== void 0 || o[d] !== void 0;
      }, get: function(d) {
        var p = r[d];
        return p !== void 0 ? p : (p = o[d]) !== void 0 ? (l(d, p), p) : void 0;
      }, set: function(d, p) {
        r[d] !== void 0 ? r[d] = p : l(d, p);
      } };
    }(5), this.cachedModules = /* @__PURE__ */ new Map(), this.deoptimizationTracker = new Sn(), this.entryModules = [], this.modulesById = /* @__PURE__ */ new Map(), this.needsTreeshakingPass = false, this.newlyIncludedVariableInits = /* @__PURE__ */ new Set(), this.phase = Kt.LOAD_AND_PARSE, this.scope = new zh(), this.watchFiles = /* @__PURE__ */ Object.create(null), this.watchMode = false, this.externalModules = [], this.implicitEntryModules = [], this.modules = [], this.getModuleInfo = (s) => {
      const i = this.modulesById.get(s);
      return i ? i.info : null;
    }, e.cache !== false) {
      if ((_a2 = e.cache) == null ? void 0 : _a2.modules) for (const s of e.cache.modules) this.cachedModules.set(s.id, s);
      this.pluginCache = ((_b = e.cache) == null ? void 0 : _b.plugins) || /* @__PURE__ */ Object.create(null);
      for (const s in this.pluginCache) {
        const i = this.pluginCache[s];
        for (const r of Object.values(i)) r[0]++;
      }
    }
    if (t) {
      this.watchMode = true;
      const s = (...r) => this.pluginDriver.hookParallel("watchChange", r), i = () => this.pluginDriver.hookParallel("closeWatcher", []);
      t.onCurrentRun("change", s), t.onCurrentRun("close", i);
    }
    this.pluginDriver = new Mo(this, e, e.plugins, this.pluginCache), this.moduleLoader = new qh(this, this.modulesById, this.options, this.pluginDriver), this.fileOperationQueue = new np(e.maxParallelFileOps), this.pureFunctions = (({ treeshake: s }) => {
      const i = /* @__PURE__ */ Object.create(null);
      for (const r of s ? s.manualPureFunctions : []) {
        let o = i;
        for (const a of r.split(".")) o = o[a] || (o[a] = /* @__PURE__ */ Object.create(null));
        o[Ar] = true;
      }
      return i;
    })(e);
  }
  async build() {
    Le("generate module graph", 2), await this.generateModuleGraph(), Ce("generate module graph", 2), Le("sort and bind modules", 2), this.phase = Kt.ANALYSE, this.sortModules(), Ce("sort and bind modules", 2), Le("mark included statements", 2), this.includeStatements(), Ce("mark included statements", 2), this.phase = Kt.GENERATE;
  }
  getCache() {
    for (const e in this.pluginCache) {
      const t = this.pluginCache[e];
      let s = true;
      for (const [i, r] of Object.entries(t)) r[0] >= this.options.experimentalCacheExpiry ? delete t[i] : s = false;
      s && delete this.pluginCache[e];
    }
    return { modules: this.modules.map((e) => e.toJSON()), plugins: this.pluginCache };
  }
  async generateModuleGraph() {
    var e;
    if ({ entryModules: this.entryModules, implicitEntryModules: this.implicitEntryModules } = await this.moduleLoader.addEntryModules((e = this.options.input, Array.isArray(e) ? e.map((t) => ({ fileName: null, id: t, implicitlyLoadedAfter: [], importer: void 0, name: null })) : Object.entries(e).map(([t, s]) => ({ fileName: null, id: s, implicitlyLoadedAfter: [], importer: void 0, name: t }))), true), this.entryModules.length === 0) throw new Error("You must supply options.input to rollup");
    for (const t of this.modulesById.values()) t.cacheInfoGetters(), t instanceof Ne ? this.modules.push(t) : this.externalModules.push(t);
  }
  includeStatements() {
    const e = [...this.entryModules, ...this.implicitEntryModules];
    for (const t of e) fn(t);
    if (this.options.treeshake) {
      let t = 1;
      this.newlyIncludedVariableInits.clear();
      do {
        Le(`treeshaking pass ${t}`, 3), this.needsTreeshakingPass = false;
        for (const s of this.modules) if (s.isExecuted) {
          s.hasTreeShakingPassStarted = true, s.info.moduleSideEffects === "no-treeshake" ? s.includeAllInBundle() : s.include();
          for (const i of this.newlyIncludedVariableInits) this.newlyIncludedVariableInits.delete(i), i.include(nt(), false);
        }
        if (t === 1) for (const s of e) s.preserveSignature !== false && (s.includeAllExports(false), this.needsTreeshakingPass = true);
        Ce("treeshaking pass " + t++, 3);
      } while (this.needsTreeshakingPass);
    } else for (const t of this.modules) t.includeAllInBundle();
    for (const t of this.externalModules) t.warnUnusedImports();
    for (const t of this.implicitEntryModules) for (const s of t.implicitlyLoadedAfter) s.info.isEntry || s.isIncluded() || j(Yu(s));
  }
  sortModules() {
    const { orderedModules: e, cyclePaths: t } = _h(this.entryModules);
    for (const s of t) this.options.onLog(Q, Hu(s));
    this.modules = e;
    for (const s of this.modules) s.bindReferences();
    this.warnForMissingExports();
  }
  warnForMissingExports() {
    for (const e of this.modules) for (const t of e.importDescriptions.values()) if (t.name !== "*") {
      const [s, i] = t.module.getVariableForExportName(t.name);
      s || e.log(Q, Ks(t.name, e.id, t.module.id, !!(i == null ? void 0 : i.missingButExportExists)), t.start);
    }
  }
}
function fu(n, e) {
  return e();
}
function fl(n, e, t, s) {
  n = To("onLog", n);
  const i = Gt[s], r = (o, a, l = Il) => {
    if (Bl(a), !(Gt[o] < i)) {
      for (const c of n) {
        if (l.has(c)) continue;
        const { onLog: d } = c, p = (h) => Gt[h] < i ? it : (f) => r(h, ft(f), new Set(l).add(c));
        if (("handler" in d ? d.handler : d).call({ debug: p(fs), error: (h) => j(ft(h)), info: p(Ut), meta: { rollupVersion: zr, watchMode: t }, warn: p(Q) }, o, a) === false) return;
      }
      e(o, a);
    }
  };
  return r;
}
const Ze = (n) => () => j(function(e) {
  return { code: "NO_FS_IN_BROWSER", message: `Cannot access the file system (via "${e}") when using the browser build of Rollup. Make sure you supply a plugin with custom resolveId and load hooks to Rollup.`, url: Re("plugin-development/#a-simple-example") };
}(n)), ip = Ze("fs.appendFile"), rp = Ze("fs.copyFile"), op = Ze("fs.mkdir"), ap = Ze("fs.mkdtemp"), lp = Ze("fs.readdir"), cp = Ze("fs.readFile"), up = Ze("fs.realpath"), dp = Ze("fs.rename"), hp = Ze("fs.rmdir"), pp = Ze("fs.stat"), fp = Ze("fs.lstat"), mp = Ze("fs.unlink"), gp = Ze("fs.writeFile");
var yp = Object.freeze({ __proto__: null, appendFile: ip, copyFile: rp, lstat: fp, mkdir: op, mkdtemp: ap, readFile: cp, readdir: lp, realpath: up, rename: dp, rmdir: hp, stat: pp, unlink: mp, writeFile: gp });
const bp = (n) => {
  var _a2;
  return n.cache === true ? void 0 : ((_a2 = n.cache) == null ? void 0 : _a2.cache) || n.cache;
}, Ep = (n) => {
  if (n === true) return () => true;
  if (typeof n == "function") return (e, ...t) => e[0] !== "\0" && n(e, ...t) || false;
  if (n) {
    const e = /* @__PURE__ */ new Set(), t = [];
    for (const s of Br(n)) s instanceof RegExp ? t.push(s) : e.add(s);
    return (s, ...i) => e.has(s) || t.some((r) => r.test(s));
  }
  return () => false;
}, xp = (n) => {
  const e = n.input;
  return e == null ? [] : typeof e == "string" ? [e] : e;
}, Ap = (n) => {
  const e = n.jsx;
  if (!e) return false;
  const t = _o(e, Gh, "jsx", Os, "false, "), { factory: s, importSource: i, mode: r } = t;
  switch (r) {
    case "automatic":
      return { factory: s || "React.createElement", importSource: i || "react", jsxImportSource: t.jsxImportSource || "react/jsx-runtime", mode: "automatic" };
    case "preserve":
      return !i || s || t.fragment || j(ke("jsx", Os, "when preserving JSX and specifying an importSource, you also need to specify a factory or fragment")), { factory: s || null, fragment: t.fragment || null, importSource: i || null, mode: "preserve" };
    default:
      return r && r !== "classic" && j(ke("jsx.mode", Os, 'mode must be "automatic", "classic" or "preserve"', r)), { factory: s || "React.createElement", fragment: t.fragment || "React.Fragment", importSource: i || null, mode: "classic" };
  }
}, Sp = (n) => {
  const e = n.maxParallelFileOps;
  return typeof e == "number" ? e <= 0 ? 1 / 0 : e : 1e3;
}, $p = (n, e) => {
  const t = n.moduleContext;
  if (typeof t == "function") return (s) => t(s) ?? e;
  if (t) {
    const s = /* @__PURE__ */ Object.create(null);
    for (const [i, r] of Object.entries(t)) s[Ke(i)] = r;
    return (i) => s[i] ?? e;
  }
  return () => e;
}, vp = (n) => {
  if (n.treeshake === false) return false;
  const e = _o(n.treeshake, Uh, "treeshake", "configuration-options/#treeshake", "false, true, ");
  return { annotations: e.annotations !== false, correctVarValueBeforeDeclaration: e.correctVarValueBeforeDeclaration === true, manualPureFunctions: e.manualPureFunctions ?? $e, moduleSideEffects: Pp(e.moduleSideEffects), propertyReadSideEffects: e.propertyReadSideEffects === "always" ? "always" : e.propertyReadSideEffects !== false, tryCatchDeoptimization: e.tryCatchDeoptimization !== false, unknownGlobalSideEffects: e.unknownGlobalSideEffects !== false };
}, Pp = (n) => {
  if (typeof n == "boolean") return () => n;
  if (n === "no-external") return (e, t) => !t;
  if (typeof n == "function") return (e, t) => e[0] === "\0" || n(e, t) !== false;
  if (Array.isArray(n)) {
    const e = new Set(n);
    return (t) => e.has(t);
  }
  return n && j(ke("treeshake.moduleSideEffects", "configuration-options/#treeshake-modulesideeffects", 'please use one of false, "no-external", a function or an array')), () => true;
}, wp = /[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g, Ip = /^[a-z]:/i;
function Np(n) {
  const e = Ip.exec(n), t = e ? e[0] : "";
  return t + n.slice(t.length).replace(wp, "_");
}
const kp = (n, e, t) => {
  const { file: s } = n;
  if (typeof s == "string") {
    if (e) return j(ke("output.file", Zn, 'you must set "output.dir" instead of "output.file" when using the "output.preserveModules" option'));
    if (!Array.isArray(t.input)) return j(ke("output.file", Zn, 'you must set "output.dir" instead of "output.file" when providing named inputs'));
  }
  return s;
}, Cp = (n) => {
  const e = n.format;
  switch (e) {
    case void 0:
    case "es":
    case "esm":
    case "module":
      return "es";
    case "cjs":
    case "commonjs":
      return "cjs";
    case "system":
    case "systemjs":
      return "system";
    case "amd":
    case "iife":
    case "umd":
      return e;
    default:
      return j(ke("output.format", Ml, 'Valid values are "amd", "cjs", "system", "es", "iife" or "umd"', e));
  }
}, Rp = (n, e) => {
  const t = n.inlineDynamicImports || false, { input: s } = e;
  return t && (Array.isArray(s) ? s : Object.keys(s)).length > 1 ? j(ke("output.inlineDynamicImports", Tl, 'multiple inputs are not supported when "output.inlineDynamicImports" is true')) : t;
}, Dp = (n, e, t) => {
  const s = n.preserveModules || false;
  if (s) {
    if (e) return j(ke("output.inlineDynamicImports", Tl, 'this option is not supported for "output.preserveModules"'));
    if (t.preserveEntrySignatures === false) return j(ke("preserveEntrySignatures", "configuration-options/#preserveentrysignatures", 'setting this option to false is not supported for "output.preserveModules"'));
  }
  return s;
}, Op = (n) => {
  const { preserveModulesRoot: e } = n;
  if (e != null) return Ke(e);
}, Lp = (n) => {
  const e = { autoId: false, basePath: "", define: "define", forceJsExtensionForImports: false, ...n.amd };
  return (e.autoId || e.basePath) && e.id ? j(ke("output.amd.id", _l, 'this option cannot be used together with "output.amd.autoId"/"output.amd.basePath"')) : e.basePath && !e.autoId ? j(ke("output.amd.basePath", "configuration-options/#output-amd-basepath", 'this option only works with "output.amd.autoId"')) : e.autoId ? { autoId: true, basePath: e.basePath, define: e.define, forceJsExtensionForImports: e.forceJsExtensionForImports } : { autoId: false, define: e.define, forceJsExtensionForImports: e.forceJsExtensionForImports, id: e.id };
}, Ds = (n, e) => {
  const t = n[e];
  return typeof t == "function" ? t : () => t || "";
}, _p = (n, e) => {
  const { dir: t } = n;
  return typeof t == "string" && typeof e == "string" ? j(ke("output.dir", Zn, 'you must set either "output.file" for a single-file build or "output.dir" when generating multiple chunks')) : t;
}, Mp = (n, e) => {
  const t = n.entryFileNames;
  return t == null && e.add("entryFileNames"), t ?? "[name].js";
};
function Tp(n, e) {
  const t = n.exports;
  if (t == null) e.add("exports");
  else if (!["default", "named", "none", "auto"].includes(t)) return j({ code: zl, message: `"output.exports" must be "default", "named", "none", "auto", or left unspecified (defaults to "auto"), received "${t}".`, url: Re(Kr) });
  return t || "auto";
}
const Bp = (n, e) => (n.externalImportAssertions != null && zt('The "output.externalImportAssertions" option is deprecated. Use the "output.externalImportAttributes" option instead.', "configuration-options/#output-externalimportattributes", true, e), n.externalImportAttributes ?? n.externalImportAssertions ?? true), zp = (n) => {
  const e = _o(n.generatedCode, Hh, "output.generatedCode", "configuration-options/#output-generatedcode", "");
  return { arrowFunctions: e.arrowFunctions === true, constBindings: e.constBindings === true, objectShorthand: e.objectShorthand === true, reservedNamesAsProps: e.reservedNamesAsProps !== false, symbols: e.symbols === true };
}, Fp = (n, e) => {
  if (e) return "";
  const t = n.indent;
  return t === false ? "" : t ?? true;
}, ml = /* @__PURE__ */ new Set(["compat", "auto", "esModule", "default", "defaultOnly"]), Vp = (n) => {
  const e = n.interop;
  if (typeof e == "function") {
    const t = /* @__PURE__ */ Object.create(null);
    let s = null;
    return (i) => i === null ? s || mr(s = e(i)) : i in t ? t[i] : mr(t[i] = e(i));
  }
  return e === void 0 ? () => "default" : () => mr(e);
}, mr = (n) => ml.has(n) ? n : j(ke("output.interop", Xr, `use one of ${Array.from(ml, (e) => JSON.stringify(e)).join(", ")}`, n)), jp = (n, e, t) => {
  const s = n.manualChunks;
  if (s) {
    if (e) return j(ke("output.manualChunks", Ho, 'this option is not supported for "output.inlineDynamicImports"'));
    if (t) return j(ke("output.manualChunks", Ho, 'this option is not supported for "output.preserveModules"'));
  }
  return s || {};
}, Up = (n, e, t) => n.minifyInternalExports ?? (t || e === "es" || e === "system"), Gp = (n, e) => {
  const t = n.sourcemapFileNames;
  return t == null && e.add("sourcemapFileNames"), t;
}, Hp = (n) => {
  const { sourcemapBaseUrl: e } = n;
  if (e) return function(s) {
    try {
      new URL(s);
    } catch {
      return false;
    }
    return true;
  }(e) ? (t = e).endsWith("/") ? t : t + "/" : j(ke("output.sourcemapBaseUrl", "configuration-options/#output-sourcemapbaseurl", `must be a valid URL, received ${JSON.stringify(e)}`));
  var t;
};
function qp(n) {
  return async function(e, t) {
    const { options: s, unsetOptions: i } = await async function(l, c) {
      if (!l) throw new Error("You must supply an options object to rollup");
      const d = await async function(f, E) {
        const g = To("options", await vi(f.plugins)), y = f.logLevel || Ut, m = fl(g, rl(f, y), E, y);
        for (const b of g) {
          const { name: x, options: A } = b, S = "handler" in A ? A.handler : A, w = await S.call({ debug: xn(fs, "PLUGIN_LOG", m, x, y), error: (C) => j(Qn(ft(C), x, { hook: "onLog" })), info: xn(Ut, "PLUGIN_LOG", m, x, y), meta: { rollupVersion: zr, watchMode: E }, warn: xn(Q, "PLUGIN_WARNING", m, x, y) }, f);
          w && (f = w);
        }
        return f;
      }(l, c), { options: p, unsetOptions: h } = await async function(f, E) {
        const g = /* @__PURE__ */ new Set(), y = f.context ?? "undefined", m = await vi(f.plugins), b = f.logLevel || Ut, x = fl(m, rl(f, b), E, b), A = f.strictDeprecations || false, S = Sp(f), w = { cache: bp(f), context: y, experimentalCacheExpiry: f.experimentalCacheExpiry ?? 10, experimentalLogSideEffects: f.experimentalLogSideEffects || false, external: Ep(f.external), fs: f.fs ?? yp, input: xp(f), jsx: Ap(f), logLevel: b, makeAbsoluteExternalsRelative: f.makeAbsoluteExternalsRelative ?? "ifRelativeSource", maxParallelFileOps: S, moduleContext: $p(f, y), onLog: x, perf: f.perf || false, plugins: m, preserveEntrySignatures: f.preserveEntrySignatures ?? "exports-only", preserveSymlinks: f.preserveSymlinks || false, shimMissingExports: f.shimMissingExports || false, strictDeprecations: A, treeshake: vp(f) };
        return uu(f, [...Object.keys(w), "onwarn", "watch"], "input options", x, /^(output)$/), { options: w, unsetOptions: g };
      }(d, c);
      return mu(p.plugins, Oo), { options: p, unsetOptions: h };
    }(e, t !== null);
    (function(l) {
      l.perf ? (us = /* @__PURE__ */ new Map(), Le = fh, Ce = mh, l.plugins = l.plugins.map(bh)) : (Le = it, Ce = it);
    })(s), await async function() {
      await vc();
    }();
    const r = new sp(s, t), o = e.cache !== false;
    e.cache && (s.cache = void 0, e.cache = void 0), Le("BUILD", 1), await fu(r.pluginDriver, async () => {
      try {
        Le("initialize", 2), await r.pluginDriver.hookParallel("buildStart", [s]), Ce("initialize", 2), await r.build();
      } catch (l) {
        const c = Object.keys(r.watchFiles);
        c.length > 0 && (l.watchFiles = c);
        try {
          await r.pluginDriver.hookParallel("buildEnd", [l]);
        } catch (d) {
          const p = $n({ ...l, message: `There was an error during the build:
  ${l.message}
Additionally, handling the error in the 'buildEnd' hook caused the following error:
  ${d.message}` });
          throw await r.pluginDriver.hookParallel("closeBundle", [p]), p;
        }
        throw await r.pluginDriver.hookParallel("closeBundle", [l]), l;
      }
      try {
        await r.pluginDriver.hookParallel("buildEnd", []);
      } catch (l) {
        throw await r.pluginDriver.hookParallel("closeBundle", [l]), l;
      }
    }), Ce("BUILD", 1);
    const a = { cache: o ? r.getCache() : void 0, async close() {
      a.closed || (a.closed = true, await r.pluginDriver.hookParallel("closeBundle", []));
    }, closed: false, async [Symbol.asyncDispose]() {
      await this.close();
    }, generate: async (l) => a.closed ? j({ code: "ALREADY_CLOSED", message: 'Bundle is already closed, no more calls to "generate" or "write" are allowed.' }) : gl(false, s, i, l, r), get watchFiles() {
      return Object.keys(r.watchFiles);
    }, write: async (l) => a.closed ? j({ code: "ALREADY_CLOSED", message: 'Bundle is already closed, no more calls to "generate" or "write" are allowed.' }) : gl(true, s, i, l, r) };
    return s.perf && (a.getTimings = gh), a;
  }(n, null);
}
function mu(n, e) {
  for (const [t, s] of n.entries()) s.name || (s.name = `${e}${t + 1}`);
}
async function gl(n, e, t, s, i) {
  const { options: r, outputPluginDriver: o, unsetOptions: a } = await async function(l, c, d, p) {
    if (!l) throw new Error("You must supply an options object");
    const h = await vi(l.plugins);
    mu(h, Lo);
    const f = c.createOutputPluginDriver(h);
    return { ...await Wp(d, p, l, f), outputPluginDriver: f };
  }(s, i.pluginDriver, e, t);
  return fu(0, async () => {
    const l = new Bh(r, a, e, o, i), c = await l.generate(n);
    if (n) {
      if (Le("WRITE", 1), !r.dir && !r.file) return j({ code: "MISSING_OPTION", message: 'You must specify "output.file" or "output.dir" for the build.', url: Re(Zn) });
      await Promise.all(Object.values(c).map((p) => i.fileOperationQueue.run(() => async function(h, f, { fs: { mkdir: E, writeFile: g } }) {
        const y = Ke(f.dir || St(f.file), h.fileName);
        return await E(St(y), { recursive: true }), g(y, h.type === "asset" ? h.source : h.code);
      }(p, r, e)))), await o.hookParallel("writeBundle", [r, c]), Ce("WRITE", 1);
    }
    return d = c, { output: Object.values(d).filter((p) => Object.keys(p).length > 0).sort((p, h) => yl(p) - yl(h)) };
    var d;
  });
}
function Wp(n, e, t, s) {
  return async function(i, r, o) {
    const a = new Set(o), l = i.compact || false, c = Cp(i), d = Rp(i, r), p = Dp(i, d, r), h = kp(i, p, r), f = zp(i), E = Bp(i, r), g = { amd: Lp(i), assetFileNames: i.assetFileNames ?? "assets/[name]-[hash][extname]", banner: Ds(i, "banner"), chunkFileNames: i.chunkFileNames ?? "[name]-[hash].js", compact: l, dir: _p(i, h), dynamicImportInCjs: i.dynamicImportInCjs ?? true, entryFileNames: Mp(i, a), esModule: i.esModule ?? "if-default-prop", experimentalMinChunkSize: i.experimentalMinChunkSize ?? 1, exports: Tp(i, a), extend: i.extend || false, externalImportAssertions: E, externalImportAttributes: E, externalLiveBindings: i.externalLiveBindings ?? true, file: h, footer: Ds(i, "footer"), format: c, freeze: i.freeze ?? true, generatedCode: f, globals: i.globals || {}, hashCharacters: i.hashCharacters ?? "base64", hoistTransitiveImports: i.hoistTransitiveImports ?? true, importAttributesKey: i.importAttributesKey ?? "assert", indent: Fp(i, l), inlineDynamicImports: d, interop: Vp(i), intro: Ds(i, "intro"), manualChunks: jp(i, d, p), minifyInternalExports: Up(i, c, l), name: i.name, noConflict: i.noConflict || false, outro: Ds(i, "outro"), paths: i.paths || {}, plugins: await vi(i.plugins), preserveModules: p, preserveModulesRoot: Op(i), reexportProtoFromExternal: i.reexportProtoFromExternal ?? true, sanitizeFileName: typeof i.sanitizeFileName == "function" ? i.sanitizeFileName : i.sanitizeFileName === false ? (y) => y : Np, sourcemap: i.sourcemap || false, sourcemapBaseUrl: Hp(i), sourcemapDebugIds: i.sourcemapDebugIds || false, sourcemapExcludeSources: i.sourcemapExcludeSources || false, sourcemapFile: i.sourcemapFile, sourcemapFileNames: Gp(i, a), sourcemapIgnoreList: typeof i.sourcemapIgnoreList == "function" ? i.sourcemapIgnoreList : i.sourcemapIgnoreList === false ? () => false : (y) => y.includes("node_modules"), sourcemapPathTransform: i.sourcemapPathTransform, strict: i.strict ?? true, systemNullSetters: i.systemNullSetters ?? true, validate: i.validate || false, virtualDirname: i.virtualDirname || "_virtual" };
    return uu(i, Object.keys(g), "output options", r.onLog), { options: g, unsetOptions: a };
  }(s.hookReduceArg0Sync("outputOptions", [t], (i, r) => r || i, (i) => {
    const r = () => i.error({ code: "CANNOT_EMIT_FROM_OPTIONS_HOOK", message: 'Cannot emit files or set asset sources in the "outputOptions" hook, use the "renderStart" hook instead.' });
    return { ...i, emitFile: r, setAssetSource: r };
  }), n, e);
}
var Jn;
function yl(n) {
  return n.type === "asset" ? Jn.ASSET : n.isEntry ? Jn.ENTRY_CHUNK : Jn.SECONDARY_CHUNK;
}
Symbol.asyncDispose ?? (Symbol.asyncDispose = Symbol("Symbol.asyncDispose")), function(n) {
  n[n.ENTRY_CHUNK = 0] = "ENTRY_CHUNK", n[n.SECONDARY_CHUNK = 1] = "SECONDARY_CHUNK", n[n.ASSET = 2] = "ASSET";
}(Jn || (Jn = {}));
export {
  zr as VERSION,
  qp as rollup
};
