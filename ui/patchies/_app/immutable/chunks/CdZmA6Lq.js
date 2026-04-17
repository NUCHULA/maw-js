import { g as M, s as U, v as A } from "./Ctl3mBGF.js";
const H = 320;
async function F(D) {
  const { objectNodes: v, simplifiedEdges: f, basePosition: p, nodeIdCounter: C, edgeIdCounter: T } = D, r = [], u = [];
  let m = C;
  v.forEach((e, i) => {
    const s = `${e.type}-${m++}`;
    r.push(s);
    const n = e.position || { x: i * H, y: 0 }, c = { x: p.x + n.x, y: p.y + n.y };
    let t = e.data ?? M(e.type);
    const d = typeof t.code == "string" ? t.code : null, o = ["tone~", "dsp~", "elem~", "sonic~", "hydra"], a = ["p5", "js", "canvas", "canvas.dom"];
    if ((o.includes(e.type) || a.includes(e.type)) && d) {
      const l = d.match(/setPortCount\((\d+)(?:,\s*(\d+))?\)/);
      if (l) {
        const h = parseInt(l[1] || "0", 10), I = parseInt(l[2] || "0", 10);
        o.includes(e.type) ? t = { ...t, messageInletCount: h, messageOutletCount: I } : t = { ...t, inletCount: h, outletCount: I };
      }
    }
    if (e.type === "glsl" && d) {
      const l = U(d);
      t = { ...t, glUniformDefs: l };
    }
    const w = { id: s, type: e.type, position: c, data: t };
    u.push(w);
  });
  let y = T;
  const E = f.filter((e) => {
    const i = e.source >= 0 && e.source < r.length, s = e.target >= 0 && e.target < r.length;
    return !i || !s ? (console.warn(`Invalid edge indices: source=${e.source}, target=${e.target}, max=${r.length - 1}`), false) : true;
  }).map((e) => {
    var _a;
    const i = r[e.source], s = r[e.target], n = u.find((t) => t.id === s);
    let c = e.targetHandle;
    if (!c && (n == null ? void 0 : n.type) === "glsl" && ((_a = n.data) == null ? void 0 : _a.glUniformDefs) && Array.isArray(n.data.glUniformDefs)) {
      const t = n.data.glUniformDefs, o = f.filter((a) => a.target === e.target).indexOf(e);
      if (o >= 0 && o < t.length) {
        const a = t[o];
        c = `${a.type === "sampler2D" ? "video" : "message"}-in-${o}-${a.name}-${a.type}`;
      }
    }
    return { id: `edge-${y++}`, source: i, target: s, sourceHandle: e.sourceHandle, targetHandle: c };
  }), $ = new Map(u.map((e) => [e.id, e.type ?? ""])), { valid: x, invalid: g } = A(E, (e) => $.get(e));
  return g.length > 0 && console.warn(`[AI multi-object] Filtered ${g.length} invalid edge(s):`, g.map((e) => e.reason)), { newNodes: u, newEdges: x, invalidEdges: g, nextNodeIdCounter: m, nextEdgeIdCounter: y };
}
export {
  F as handleMultiObjectInsert
};
