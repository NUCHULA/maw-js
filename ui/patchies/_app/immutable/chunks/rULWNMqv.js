const e = { "/~": "div~" }, n = Object.fromEntries(Object.entries(e).map(([t, o]) => [o, t]));
function c(t) {
  return e[t] ?? t;
}
function r(t) {
  return n[t] ?? t;
}
export {
  r as a,
  c as o
};
