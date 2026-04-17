var D = ["LIT", "INC", "POP", "NIP", "SWP", "ROT", "DUP", "OVR", "EQU", "NEQ", "GTH", "LTH", "JMP", "JCN", "JSR", "STH", "LDZ", "STZ", "LDR", "STR", "LDA", "STA", "DEI", "DEO", "ADD", "SUB", "MUL", "DIV", "AND", "ORA", "EOR", "SFT"];
function A(l) {
  if (l === "BRK") return 0;
  for (let i = 0; i < 32; i++) {
    if (l.slice(0, 3) != D[i]) continue;
    let s = 0;
    for (i || (i |= 128); l[3 + s]; ) {
      if (l[3 + s] == "2") i |= 32;
      else if (l[3 + s] == "r") i |= 64;
      else if (l[3 + s] == "k") i |= 128;
      else return -1;
      s++;
    }
    return i;
  }
  return -1;
}
function T(l) {
  return /^([0-9A-Fa-f]{4}|[0-9A-Fa-f]{2})$/.test(l);
}
function I(l) {
  return /\s/.test(l);
}
function w(l) {
  if (T(l)) throw new Error(`label is a number: ${l}`);
  return l;
}
function p(l, i) {
  return l.startsWith("&") ? i + "/" + w(l.slice(1)) : w(l);
}
function k(l, i = { include: () => {
  throw new Error("include not supported");
} }) {
  let s = 0;
  function y() {
    let e = 1;
    for (; e > 0 && s < l.length; ) {
      let t = l[s++];
      t === ")" ? e -= 1 : t === "(" && (e += 1);
    }
  }
  function d() {
    if (s >= l.length) return null;
    let e = "";
    for (; s < l.length; ) {
      let t = l[s++];
      if (t === "(") y();
      else {
        if (I(t) && e.length === 0) continue;
        if (I(t)) return e;
        e += t;
      }
    }
    return e.length > 0 ? e : null;
  }
  let r = 256, h = [];
  function f(...e) {
    if (r < 256) throw Error("unexpected emit");
    for (let t of e) h[r - 256] = t & 255, r += 1;
  }
  function b(...e) {
    if (r < 256) throw Error("unexpected emit");
    for (let t of e) h[r - 256] = t >> 8, h[r - 256 + 1] = t & 255, r += 2;
  }
  let E = [], g = {}, x = {}, c = [], a = "on-reset";
  for (let e = d(); e != null; e = d()) {
    let t = e[0], n = e.substring(1);
    if (!(e === "[" || e === "]")) if (e === "{") f(96, 0, 0), E.push(r - 2);
    else if (e === "?{") f(32, 0, 0), E.push(r - 2);
    else if (e === "}") {
      let o = E.pop();
      if (o == null) throw new Error("unexpected lambda end");
      let u = r;
      r = o, b(u - r - 2), r = u;
    } else if (t === "%") {
      let o = [];
      for (; e != null; ) if (e = d(), e !== "{") {
        if (e === "}") break;
        o.push(e);
      }
      g[w(n)] = o.join(" ");
    } else if (t === "~") l = i.include(n) + `
` + l.substr(s), s = 0;
    else if (t === "#") if (e.length === 3) f(128, parseInt(n, 16));
    else if (e.length === 5) f(160), b(parseInt(n, 16));
    else throw Error(`unexpected literal length: ${e}`);
    else if (t === "|") r = parseInt(n, 16);
    else if (t === "$") r += parseInt(n, 16);
    else if (t === "@") x[w(n)] = r, a = n;
    else if (t === "&") x[p(e, a)] = r;
    else if (t === "," || t === ".") f(128, 0), c.push({ type: t, label: p(n, a), offset: r - 1 });
    else if (t === ";") f(160, 0, 0), c.push({ type: t, label: p(n, a), offset: r - 2 });
    else if (t === "_" || t === "-") f(0), c.push({ type: t, label: p(n, a), offset: r - 1 });
    else if (t === "=") f(0, 0), c.push({ type: t, label: p(n, a), offset: r - 2 });
    else if (t === '"') f(...new TextEncoder().encode(n));
    else if (t === "!") f(64, 0, 0), c.push({ type: t, label: p(n, a), offset: r - 2 });
    else if (t === "?") f(32, 0, 0), c.push({ type: t, label: p(n, a), offset: r - 2 });
    else {
      let o = A(e);
      o >= 0 ? f(o) : g[e] != null ? (l = g[e] + " " + l.slice(s), s = 0) : T(e) ? (e.length === 2 ? f : b)(parseInt(e, 16)) : (f(96, 0, 0), c.push({ type: "", label: p(e, a), offset: r - 2 }));
    }
  }
  for (let { type: e, label: t, offset: n } of c) {
    let o = x[t];
    if (o == null) throw new Error(`unknown reference: ${t}`);
    switch (r = n, e) {
      case ",":
      case "_": {
        let u = o - n - 2;
        f(u >= 0 ? u : 256 + u);
        break;
      }
      case "":
      case "!":
      case "?": {
        let u = o - n - 2;
        b(u >= 0 ? u : 65536 + u);
        break;
      }
      case ".":
      case "-":
        f(o);
        break;
      case ";":
      case "=":
        b(o);
        break;
      default:
        throw new Error("unexpected error");
    }
  }
  for (let e = 0; e < h.length; e++) h[e] = h[e] || 0;
  return new Uint8Array(h);
}
export {
  k as asm
};
