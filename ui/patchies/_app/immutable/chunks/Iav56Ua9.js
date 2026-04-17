import { D as b, E as h, F as k, G as E, S as T } from "./CeQCqUQ_.js";
function u(r, i) {
  return r === i || (r == null ? void 0 : r[T]) === i;
}
function d(r = {}, i, a, S) {
  return b(() => {
    var f, s;
    return h(() => {
      f = s, s = (S == null ? void 0 : S()) || [], k(() => {
        r !== a(...s) && (i(r, ...s), f && u(a(...f), r) && i(null, ...f));
      });
    }), () => {
      E(() => {
        s && u(a(...s), r) && i(null, ...s);
      });
    };
  }), r;
}
export {
  d as b
};
