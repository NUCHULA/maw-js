import "../chunks/DsnmJJEf.js";
import { i as m } from "../chunks/B58RwAno.js";
import { o as h } from "../chunks/DMf1efOI.js";
import { p as c, f as w, b as u, c as l, y as a, z as e, A as g, B as f } from "../chunks/CeQCqUQ_.js";
import { b as v } from "../chunks/Iav56Ua9.js";
var y = w('<canvas id="output"></canvas>');
function R(p, d) {
  c(d, false);
  let t = g(), o;
  function s() {
    var _a;
    (_a = window.opener) == null ? void 0 : _a.postMessage({ type: "outputReady" }, "*");
  }
  h(() => {
    var _a, _b;
    a(t, e(t).width = ((_a = window.visualViewport) == null ? void 0 : _a.width) ?? window.innerWidth), a(t, e(t).height = ((_b = window.visualViewport) == null ? void 0 : _b.height) ?? window.innerHeight), a(t, e(t).style.width = "100%"), a(t, e(t).style.height = "100%"), a(t, e(t).style.minHeight = "100vh"), a(t, e(t).style.objectFit = "cover"), o = e(t).getContext("bitmaprenderer"), window.addEventListener("message", (n) => {
      n.data.type === "renderOutput" && o.transferFromImageBitmap(n.data.bitmap);
    }), s();
    const i = new BroadcastChannel("patchies-ipc");
    return i.addEventListener("message", (n) => {
      n.data.type === "ping" && s();
    }), () => i.close();
  }), m();
  var r = y();
  v(r, (i) => f(t, i), () => e(t)), u(p, r), l();
}
export {
  R as component
};
