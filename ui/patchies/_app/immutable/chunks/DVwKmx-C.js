var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e, _t2, _a2, _e2;
import "./DsnmJJEf.js";
import { D as xt, F as Ke, E as wt, as as It, aJ as St, p as k, e as $, a as y, g as O, b as c, c as M, aj as J, ak as ze, z as l, B as f, al as Ce, ai as Le, f as g, d as v, s as u, r as d, t as ee, n as ye, b5 as Ve, aq as Qe, bp as kt } from "./CeQCqUQ_.js";
import { a as E, s as oe } from "./DMf1efOI.js";
import { i as Z } from "./CmAffBVh.js";
import { e as Ee, i as Mt } from "./DyVjpqx_.js";
import { s as Ne, a as Me, c as Ze, r as Te, b as Fe } from "./C66EmW7x.js";
import { c as be } from "./av5sMLXc.js";
import { s as D, r as V, p as et, b as je, a as ct, c as Ct } from "./C_-niZe9.js";
import { I as L } from "./CefFKWAt.js";
import { a as $t, B as Tt } from "./CEcmg3Xt.js";
import { b as Ae } from "./jdr7bsmJ.js";
import { a as Ue, D as tt, b as at, c as st, d as nt, g as At, S as zt, e as Nt, h as Pt } from "./Btif9Z9d.js";
import { R as Be, C as Ot } from "./BSpKvSVU.js";
import { T as We, a as Ge } from "./BqXdNy4d.js";
import { d as dt, w, r as Et } from "./CjsEYB_8.js";
function qe(t, e, a) {
  xt(() => {
    var n = Ke(() => e(t, a == null ? void 0 : a()) || {});
    if (a && (n == null ? void 0 : n.update)) {
      var o = false, r = {};
      wt(() => {
        var s = a();
        It(s), o && St(r, s) && (r = s, n.update(s));
      }), o = true;
    }
    if (n == null ? void 0 : n.destroy) return () => n.destroy();
  });
}
function Dt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" }]];
  L(t, D({ name: "activity" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Vt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M2 10v3" }], ["path", { d: "M6 6v11" }], ["path", { d: "M10 3v18" }], ["path", { d: "M14 8v7" }], ["path", { d: "M18 5v13" }], ["path", { d: "M22 10v3" }]];
  L(t, D({ name: "audio-lines" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Lt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "m16 18 6-6-6-6" }], ["path", { d: "m8 6-6 6 6 6" }]];
  L(t, D({ name: "code" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Ft(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]];
  L(t, D({ name: "copy" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Rt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M12 20v2" }], ["path", { d: "M12 2v2" }], ["path", { d: "M17 20v2" }], ["path", { d: "M17 2v2" }], ["path", { d: "M2 12h2" }], ["path", { d: "M2 17h2" }], ["path", { d: "M2 7h2" }], ["path", { d: "M20 12h2" }], ["path", { d: "M20 17h2" }], ["path", { d: "M20 7h2" }], ["path", { d: "M7 20v2" }], ["path", { d: "M7 2v2" }], ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }], ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]];
  L(t, D({ name: "cpu" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function jt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]];
  L(t, D({ name: "disc-3" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Ht(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }], ["path", { d: "M2 12h20" }]];
  L(t, D({ name: "globe" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Ut(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }], ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }], ["path", { d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }]];
  L(t, D({ name: "hand" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function ot(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }], ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }]];
  L(t, D({ name: "key-round" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Bt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" }]];
  L(t, D({ name: "layers" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Wt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }]];
  L(t, D({ name: "layout-grid" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Gt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }], ["path", { d: "M9 18h6" }], ["path", { d: "M10 22h4" }]];
  L(t, D({ name: "lightbulb" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Jt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }]];
  L(t, D({ name: "message-square" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Kt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M9 18V5l12-2v13" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["circle", { cx: "18", cy: "16", r: "3" }]];
  L(t, D({ name: "music" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function qt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" }], ["path", { d: "M2 14h20" }], ["path", { d: "M6 14v4" }], ["path", { d: "M10 14v4" }], ["path", { d: "M14 14v4" }], ["path", { d: "M18 14v4" }]];
  L(t, D({ name: "piano" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Xt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M5 7 3 5" }], ["path", { d: "M9 6V3" }], ["path", { d: "m13 7 2-2" }], ["circle", { cx: "9", cy: "13", r: "3" }], ["path", { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }], ["path", { d: "M16 16h2" }]];
  L(t, D({ name: "projector" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Yt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M10 5H3" }], ["path", { d: "M12 19H3" }], ["path", { d: "M14 3v4" }], ["path", { d: "M16 17v4" }], ["path", { d: "M21 12h-9" }], ["path", { d: "M21 19h-5" }], ["path", { d: "M21 5h-7" }], ["path", { d: "M8 10v4" }], ["path", { d: "M8 12H3" }]];
  L(t, D({ name: "sliders-horizontal" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Qt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }], ["path", { d: "M20 2v4" }], ["path", { d: "M22 4h-4" }], ["circle", { cx: "4", cy: "20", r: "2" }]];
  L(t, D({ name: "sparkles" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
function Zt(t, e) {
  k(e, true);
  /**
  * @license @lucide/svelte v0.575.0 - ISC
  *
  * ISC License
  *
  * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
  *
  * Permission to use, copy, modify, and/or distribute this software for any
  * purpose with or without fee is hereby granted, provided that the above
  * copyright notice and this permission notice appear in all copies.
  *
  * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  *
  * ---
  *
  * The MIT License (MIT) (for portions derived from Feather)
  *
  * Copyright (c) 2013-2026 Cole Bemis
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  *
  */
  let a = V(e, ["$$slots", "$$events", "$$legacy"]);
  const n = [["circle", { cx: "10", cy: "7", r: "1" }], ["circle", { cx: "4", cy: "20", r: "1" }], ["path", { d: "M4.7 19.3 19 5" }], ["path", { d: "m21 3-3 1 2 2Z" }], ["path", { d: "M9.26 7.68 5 12l2 5" }], ["path", { d: "m10 14 5 2 3.5-3.5" }], ["path", { d: "m18 12 1-1 1 1-1 1Z" }]];
  L(t, D({ name: "usb" }, () => a, { get iconNode() {
    return n;
  }, children: (o, r) => {
    var s = $(), i = y(s);
    E(i, () => e.children ?? O), c(o, s);
  }, $$slots: { default: true } })), M();
}
const ea = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Xe = (t = 21) => {
  let e = "", a = crypto.getRandomValues(new Uint8Array(t |= 0));
  for (; t--; ) e += ea[a[t] & 63];
  return e;
};
const ta = 768;
function aa() {
  return Et(false, (t) => {
    if (typeof window > "u") return;
    const e = window.matchMedia(`(max-width: ${ta - 1}px)`);
    t(e.matches);
    const a = (n) => t(n.matches);
    return e.addEventListener("change", a), () => e.removeEventListener("change", a);
  });
}
const sa = aa(), na = w(true), oa = w(false), ia = w(true), ut = w(null), ra = dt(ut, (t) => t !== null), la = w(null), ca = w(null), da = w(null), ua = w({}), it = typeof localStorage < "u" ? localStorage.getItem("ai-features-visible") : null, He = w(it === null ? true : it === "true");
typeof localStorage < "u" && He.subscribe((t) => {
  localStorage.setItem("ai-features-visible", String(t));
});
const vt = w(false), va = w(false), pa = w(false), ha = typeof localStorage < "u" ? localStorage.getItem("patchies-sidebar-open") : null, pt = w(ha === "true"), rt = typeof localStorage < "u" ? localStorage.getItem("patchies-sidebar-view") : null, fa = rt === "preview" ? "files" : rt || "files", ht = w(fa), Re = 256, ft = 180, gt = 1e3;
function ga() {
  if (typeof localStorage > "u") return Re;
  const t = localStorage.getItem("patchies-sidebar-width");
  if (!t) return Re;
  const e = parseInt(t, 10);
  return isNaN(e) || e < ft || e > gt ? Re : e;
}
const mt = w(ga());
typeof localStorage < "u" && (pt.subscribe((t) => {
  localStorage.setItem("patchies-sidebar-open", String(t));
}), ht.subscribe((t) => {
  localStorage.setItem("patchies-sidebar-view", t);
}), mt.subscribe((t) => {
  localStorage.setItem("patchies-sidebar-width", String(t));
}));
const _t = w(false), ma = w(null), _a = w(false), ba = w(false), ya = dt([vt, _t], ([t, e]) => t || e), xa = w(/* @__PURE__ */ new Set()), wa = w(/* @__PURE__ */ new Set()), Ia = typeof localStorage < "u" ? localStorage.getItem("patchies-current-patch-name") : null, bt = w(Ia);
typeof localStorage < "u" && bt.subscribe((t) => {
  t ? localStorage.setItem("patchies-current-patch-name", t) : localStorage.removeItem("patchies-current-patch-name");
});
function Sa() {
  if (typeof localStorage > "u") return Xe();
  const t = localStorage.getItem("patchies-current-patch-id");
  if (t) return t;
  const e = Xe();
  return localStorage.setItem("patchies-current-patch-id", e), e;
}
const Ye = w(Sa());
typeof localStorage < "u" && Ye.subscribe((t) => {
  localStorage.setItem("patchies-current-patch-id", t);
});
function ka() {
  const t = Xe();
  return Ye.set(t), t;
}
function yt() {
  if (typeof localStorage > "u") return [];
  try {
    const t = localStorage.getItem("patchies-saved-patches");
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
}
function Ma() {
  if (typeof localStorage > "u") return [];
  try {
    const t = localStorage.getItem("patchies-saved-folders");
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
}
const $e = w(yt()), De = w(Ma());
typeof localStorage < "u" && De.subscribe((t) => {
  localStorage.setItem("patchies-saved-folders", JSON.stringify(t));
});
function Ca(t) {
  $e.update((e) => {
    if (e.includes(t)) return e;
    const a = [...e, t];
    return localStorage.setItem("patchies-saved-patches", JSON.stringify(a)), a;
  });
}
function $a(t) {
  De.update((e) => e.includes(t) ? e : [...e, t]);
}
function Ta(t) {
  $e.update((e) => {
    const a = e.filter((n) => n !== t);
    return localStorage.setItem("patchies-saved-patches", JSON.stringify(a)), a;
  });
}
function Aa(t) {
  const e = t + "/";
  if (De.update((a) => a.filter((n) => n !== t && !n.startsWith(e))), $e.update((a) => {
    const n = a.filter((o) => !o.startsWith(e));
    return localStorage.setItem("patchies-saved-patches", JSON.stringify(n)), n;
  }), typeof localStorage < "u") {
    const a = yt();
    for (const n of a) n.startsWith(e) && localStorage.removeItem(`patchies-patch-${n}`);
  }
}
function za(t, e) {
  $e.update((a) => {
    const n = a.indexOf(t);
    if (n === -1) return a;
    const o = [...a];
    return o[n] = e, localStorage.setItem("patchies-saved-patches", JSON.stringify(o)), o;
  });
}
function Na(t, e) {
  const a = t + "/", n = e + "/";
  De.update((o) => o.map((r) => r === t ? e : r.startsWith(a) ? n + r.slice(a.length) : r)), $e.update((o) => {
    const r = o.map((s) => {
      if (s.startsWith(a)) {
        const i = n + s.slice(a.length);
        if (typeof localStorage < "u") {
          const h = localStorage.getItem(`patchies-patch-${s}`);
          h && (localStorage.setItem(`patchies-patch-${i}`, h), localStorage.removeItem(`patchies-patch-${s}`));
        }
        return i;
      }
      return s;
    });
    return localStorage.setItem("patchies-saved-patches", JSON.stringify(r)), r;
  });
}
function Pa(t, e) {
  if (typeof localStorage < "u") {
    const a = localStorage.getItem(`patchies-patch-${t}`);
    a && (localStorage.setItem(`patchies-patch-${e}`, a), localStorage.removeItem(`patchies-patch-${t}`));
  }
  $e.update((a) => {
    const n = a.map((o) => o === t ? e : o);
    return localStorage.setItem("patchies-saved-patches", JSON.stringify(n)), n;
  });
}
function Oa(t, e) {
  const a = t + "/", n = e + "/";
  De.update((o) => o.map((r) => r === t ? e : r.startsWith(a) ? n + r.slice(a.length) : r)), $e.update((o) => {
    const r = o.map((s) => {
      if (s.startsWith(a)) {
        const i = n + s.slice(a.length);
        if (typeof localStorage < "u") {
          const h = localStorage.getItem(`patchies-patch-${s}`);
          h && (localStorage.setItem(`patchies-patch-${i}`, h), localStorage.removeItem(`patchies-patch-${s}`));
        }
        return i;
      }
      return s;
    });
    return localStorage.setItem("patchies-saved-patches", JSON.stringify(r)), r;
  });
}
function Ea(t) {
  const e = t.split("/");
  return e[e.length - 1];
}
function Da(t) {
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.slice(0, e);
}
const on = Object.freeze(Object.defineProperty({ __proto__: null, SIDEBAR_DEFAULT_WIDTH: Re, SIDEBAR_MAX_WIDTH: gt, SIDEBAR_MIN_WIDTH: ft, addSavedFolder: $a, addSavedPatch: Ca, audioSourceConnections: wa, connectingFromAcceptsFloat: _a, connectingFromHandleId: ma, connectingFromIsAudioParam: ba, currentPatchId: Ye, currentPatchName: bt, generateNewPatchId: ka, getSaveBaseName: Ea, getSaveParentFolder: Da, helpModeObject: ut, isAiFeaturesVisible: He, isBottomBarVisible: na, isCablesVisible: ia, isConnecting: _t, isConnectionMode: vt, isFpsMonitorVisible: oa, isHelpMode: ra, isMobile: sa, isObjectBrowserOpen: va, isSettingsOpen: pa, isSidebarOpen: pt, moveSavedFolder: Oa, moveSavedPatch: Pa, nodeLabelsStore: ua, patchObjectTypes: xa, removeSavedFolder: Aa, removeSavedPatch: Ta, renameSavedFolder: Na, renameSavedPatch: za, requestFitView: da, requestFocusNodeId: ca, savedFolders: De, savedPatches: $e, selectedNodeInfo: la, shouldShowHandles: ya, sidebarView: ht, sidebarWidth: mt }, Symbol.toStringTag, { value: "Module" }));
function rn(...t) {
  return t.filter(Boolean).join(" ");
}
const Va = typeof document < "u";
let lt = 0;
class La {
  constructor() {
    __privateAdd(this, _e, J(ze([])));
    __privateAdd(this, _t2, J(ze([])));
    __privateAdd(this, _a2, (e) => {
      const a = this.toasts.findIndex((n) => n.id === e);
      return a === -1 ? null : a;
    });
    __publicField(this, "addToast", (e) => {
      Va && this.toasts.unshift(e);
    });
    __publicField(this, "updateToast", ({ id: e, data: a, type: n, message: o }) => {
      const r = this.toasts.findIndex((i) => i.id === e), s = this.toasts[r];
      this.toasts[r] = { ...s, ...a, id: e, title: o, type: n, updated: true };
    });
    __publicField(this, "create", (e) => {
      var _a3;
      const { message: a, ...n } = e, o = typeof (e == null ? void 0 : e.id) == "number" || e.id && ((_a3 = e.id) == null ? void 0 : _a3.length) > 0 ? e.id : lt++, r = e.dismissable === void 0 ? true : e.dismissable, s = e.type === void 0 ? "default" : e.type;
      return Ke(() => {
        this.toasts.find((h) => h.id === o) ? this.updateToast({ id: o, data: e, type: s, message: a, dismissable: r }) : this.addToast({ ...n, id: o, title: a, dismissable: r, type: s });
      }), o;
    });
    __publicField(this, "dismiss", (e) => (Ke(() => {
      if (e === void 0) {
        this.toasts = this.toasts.map((n) => ({ ...n, dismiss: true }));
        return;
      }
      const a = this.toasts.findIndex((n) => n.id === e);
      this.toasts[a] && (this.toasts[a] = { ...this.toasts[a], dismiss: true });
    }), e));
    __publicField(this, "remove", (e) => {
      if (e === void 0) {
        this.toasts = [];
        return;
      }
      const a = __privateGet(this, _a2).call(this, e);
      if (a !== null) return this.toasts.splice(a, 1), e;
    });
    __publicField(this, "message", (e, a) => this.create({ ...a, type: "default", message: e }));
    __publicField(this, "error", (e, a) => this.create({ ...a, type: "error", message: e }));
    __publicField(this, "success", (e, a) => this.create({ ...a, type: "success", message: e }));
    __publicField(this, "info", (e, a) => this.create({ ...a, type: "info", message: e }));
    __publicField(this, "warning", (e, a) => this.create({ ...a, type: "warning", message: e }));
    __publicField(this, "loading", (e, a) => this.create({ ...a, type: "loading", message: e }));
    __publicField(this, "promise", (e, a) => {
      if (!a) return;
      let n;
      a.loading !== void 0 && (n = this.create({ ...a, promise: e, type: "loading", message: typeof a.loading == "string" ? a.loading : a.loading() }));
      const o = e instanceof Promise ? e : e();
      let r = n !== void 0;
      return o.then((s) => {
        if (typeof s == "object" && s && "ok" in s && typeof s.ok == "boolean" && !s.ok) {
          r = false;
          const i = Fa(s);
          this.create({ id: n, type: "error", message: i });
        } else if (a.success !== void 0) {
          r = false;
          const i = typeof a.success == "function" ? a.success(s) : a.success;
          this.create({ id: n, type: "success", message: i });
        }
      }).catch((s) => {
        if (a.error !== void 0) {
          r = false;
          const i = typeof a.error == "function" ? a.error(s) : a.error;
          this.create({ id: n, type: "error", message: i });
        }
      }).finally(() => {
        var _a3;
        r && (this.dismiss(n), n = void 0), (_a3 = a.finally) == null ? void 0 : _a3.call(a);
      }), n;
    });
    __publicField(this, "custom", (e, a) => {
      const n = (a == null ? void 0 : a.id) || lt++;
      return this.create({ component: e, id: n, ...a }), n;
    });
    __publicField(this, "removeHeight", (e) => {
      this.heights = this.heights.filter((a) => a.toastId !== e);
    });
    __publicField(this, "setHeight", (e) => {
      const a = __privateGet(this, _a2).call(this, e.toastId);
      if (a === null) {
        this.heights.push(e);
        return;
      }
      this.heights[a] = e;
    });
    __publicField(this, "reset", () => {
      this.toasts = [], this.heights = [];
    });
  }
  get toasts() {
    return l(__privateGet(this, _e));
  }
  set toasts(e) {
    f(__privateGet(this, _e), e, true);
  }
  get heights() {
    return l(__privateGet(this, _t2));
  }
  set heights(e) {
    f(__privateGet(this, _t2), e, true);
  }
}
_e = new WeakMap();
_t2 = new WeakMap();
_a2 = new WeakMap();
function Fa(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`;
}
const de = new La();
function Ra(t, e) {
  return de.create({ message: t, ...e });
}
class ln {
  constructor() {
    __privateAdd(this, _e2, Ce(() => de.toasts.filter((e) => !e.dismiss)));
  }
  get toasts() {
    return l(__privateGet(this, _e2));
  }
}
_e2 = new WeakMap();
const ja = Ra, Ha = Object.assign(ja, { success: de.success, info: de.info, warning: de.warning, error: de.error, custom: de.custom, message: de.message, promise: de.promise, dismiss: de.dismiss, loading: de.loading, getActiveToasts: () => de.toasts.filter((t) => !t.dismiss) });
var Ua = (t, e) => e.onSelect(null), Ba = g('<button class="cursor-pointer font-mono text-[11px] text-zinc-700 transition-colors hover:text-zinc-400">\u2715 clear</button>'), Wa = (t, e, a) => e.onSelect(e.selectedMoodId === l(a).id ? null : l(a).id), Ga = g('<span class="absolute top-2 right-2.5 z-[1] text-[11px]">\u2726</span>'), Ja = g('<button><span class="relative z-[1] text-[1.1rem] font-bold text-zinc-100"> </span> <span class="mood-tagline relative z-[1] font-mono text-[9px] leading-[1.4] text-white/28 svelte-abipdt"> </span> <!></button>'), Ka = g('<div><div class="mb-4 flex items-baseline gap-3"><span class="sparks-heading font-serif text-[clamp(2rem,5vw,3.8rem)] leading-[1.1] text-zinc-100 italic">How should it feel?</span> <!></div> <div class="mood-grid grid grid-cols-2 gap-2 sm:grid-cols-4"></div></div>');
function cn(t, e) {
  k(e, true);
  var a = Ka(), n = v(a), o = u(v(n), 2);
  {
    var r = (i) => {
      var h = Ba();
      h.__click = [Ua, e], c(i, h);
    };
    Z(o, (i) => {
      e.selectedMoodId && i(r);
    });
  }
  d(n);
  var s = u(n, 2);
  Ee(s, 21, () => e.moods, (i) => i.id, (i, h) => {
    var I = Ja();
    const T = Ce(() => e.selectedMoodId === l(h).id);
    let U;
    I.__click = [Wa, e, h];
    let F;
    var K = v(I), B = v(K, true);
    d(K);
    var R = u(K, 2), j = v(R, true);
    d(R);
    var ie = u(R, 2);
    {
      var re = (H) => {
        var W = Ga();
        Me(W, "", {}, { color: "var(--tile-accent)" }), c(H, W);
      };
      Z(ie, (H) => {
        l(T) && H(re);
      });
    }
    d(I), ee((H, W) => {
      U = Ne(I, 1, "mood-tile cursor-pointer svelte-abipdt", null, U, H), F = Me(I, "", F, W), oe(B, l(h).name), oe(j, l(h).tagline);
    }, [() => ({ "mood-tile-active": l(T) }), () => ({ background: l(h).gradient, "--tile-accent": l(h).accentColor, "--tile-glow": l(h).glowColor })]), c(i, I);
  }), d(s), d(a), c(t, a), M();
}
Le(["click"]);
var qa = (t, e) => e.selectedOutputIds.clear(), Xa = g('<button class="cursor-pointer font-mono text-[11px] text-zinc-700 transition-colors hover:text-zinc-400">\u2715 clear</button>'), Ya = (t, e, a, n) => l(e) ? a.selectedOutputIds.delete(l(n).id) : a.selectedOutputIds.add(l(n).id), Qa = g('<button><span class="output-icon text-[1.2rem] leading-none text-zinc-600 transition-colors svelte-hefra3"><!></span> <span class="output-name text-xs font-semibold text-zinc-400 transition-colors svelte-hefra3"> </span> <span class="mx-1.5 text-center font-mono text-[9px] leading-[1.3] text-zinc-700"> </span></button>'), Za = g('<div><div class="mb-4 flex items-baseline gap-3"><span class="sparks-heading font-serif text-[clamp(2rem,5vw,3.8rem)] leading-[1.1] text-zinc-100 italic">What do you want to make?</span> <!></div> <div class="output-grid grid auto-rows-[1fr] grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"></div></div>');
function dn(t, e) {
  k(e, true);
  const a = { "2d-visual": Bt, video: $t, sound: Vt, music: Kt, gestures: Ut, code: Lt, "low-level": Rt, dsp: Dt, lighting: Gt, projection: Xt, midi: qt, serial: Zt, ai: Qt, sampling: jt, connections: Ht, ui: Yt };
  var n = Za(), o = v(n), r = u(v(o), 2);
  {
    var s = (h) => {
      var I = Xa();
      I.__click = [qa, e], c(h, I);
    };
    Z(r, (h) => {
      e.selectedOutputIds.size > 0 && h(s);
    });
  }
  d(o);
  var i = u(o, 2);
  Ee(i, 21, () => e.outputs, (h) => h.id, (h, I) => {
    var T = Qa();
    const U = Ce(() => e.selectedOutputIds.has(l(I).id)), F = Ce(() => a[l(I).id]);
    let K;
    T.__click = [Ya, U, e, I];
    var B = v(T), R = v(B);
    be(R, () => l(F), (W, ue) => {
      ue(W, { size: 18 });
    }), d(B);
    var j = u(B, 2), ie = v(j, true);
    d(j);
    var re = u(j, 2), H = v(re, true);
    d(re), d(T), ee((W) => {
      K = Ne(T, 1, "output-tile cursor-pointer svelte-hefra3", null, K, W), oe(ie, l(I).name), oe(H, l(I).description);
    }, [() => ({ "output-tile-active": l(U) })]), c(h, T);
  }), d(i), d(n), c(t, n), M();
}
Le(["click"]);
function es(t, e) {
  navigator.clipboard.writeText(`${e.vision.title}

${e.vision.vision}

Objects: ${e.vision.nodes.join(", ")}`);
}
function ts(t, e) {
  var _a3;
  const a = `I want to explore this idea: "${e.vision.title}"

${e.vision.vision}

Suggested objects: ${e.vision.nodes.join(", ")}

Let's brainstorm this together. Don't create anything yet.`;
  (_a3 = e.onChat) == null ? void 0 : _a3.call(e, a), e.onClose();
}
function as(t, e) {
  var _a3;
  (_a3 = e.onScatter) == null ? void 0 : _a3.call(e, e.vision.nodes), e.onClose();
}
var ss = (t, e) => (t.key === "Escape" || t.key === "Esc") && e.onClose(), ns = (t) => t.stopPropagation(), os = g('<span class="flip-node-chip font-mono text-[10px] svelte-1i9xyep"> </span>'), is = g("<button><!> scatter</button>"), rs = g("<!> <!>", 1), ls = g("<button><!> chat</button>"), cs = g("<!> <!>", 1), ds = g('<button class="flip-cta w-full cursor-pointer font-mono svelte-1i9xyep"><!> copy</button>'), us = g("<!> <!>", 1), vs = g('<div class="flip-backdrop svelte-1i9xyep" role="dialog" aria-modal="true" tabindex="-1"><div class="flip-card svelte-1i9xyep" role="presentation"><span class="fc fc-tl svelte-1i9xyep" aria-hidden="true"></span> <span class="fc fc-tr svelte-1i9xyep" aria-hidden="true"></span> <span class="fc fc-bl svelte-1i9xyep" aria-hidden="true"></span> <span class="fc fc-br svelte-1i9xyep" aria-hidden="true"></span> <span class="flip-roman font-mono svelte-1i9xyep" aria-hidden="true"> </span> <button class="flip-close cursor-pointer font-mono svelte-1i9xyep">\u2715</button> <div class="flip-glow svelte-1i9xyep" aria-hidden="true"></div> <div class="relative z-[1] pb-[22px]"><p class="flip-eyebrow font-mono svelte-1i9xyep"> </p> <h3 class="mb-3.5 pr-3 font-serif text-[clamp(1.25rem,3vw,1.55rem)] leading-[1.2] italic"> </h3> <p class="text-[0.82rem] leading-[1.75] text-zinc-600"> </p></div> <div class="mb-3.5 flex items-center gap-2.5" aria-hidden="true"><span class="flip-divider-line svelte-1i9xyep"></span> <span class="font-mono text-[9px] tracking-[0.25em] text-zinc-700 uppercase">aspects</span> <span class="flip-divider-line svelte-1i9xyep"></span></div> <div class="mb-[22px] flex flex-wrap gap-1.5"></div> <div class="flip-ctas svelte-1i9xyep"><!> <!> <!></div></div></div>');
function ps(t, e) {
  k(e, true);
  const a = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], n = Ce(() => a[e.index] ?? "I");
  function o(m) {
    m.focus();
  }
  var r = vs();
  r.__click = function(...m) {
    var _a3;
    (_a3 = e.onClose) == null ? void 0 : _a3.apply(this, m);
  }, r.__keydown = [ss, e];
  var s = v(r);
  s.__click = [ns];
  let i;
  var h = u(v(s), 8), I = v(h, true);
  d(h);
  var T = u(h, 2);
  T.__click = function(...m) {
    var _a3;
    (_a3 = e.onClose) == null ? void 0 : _a3.apply(this, m);
  };
  var U = u(T, 4), F = v(U), K = v(F);
  d(F);
  var B = u(F, 2);
  let R;
  var j = v(B, true);
  d(B);
  var ie = u(B, 2), re = v(ie, true);
  d(ie), d(U);
  var H = u(U, 4);
  Ee(H, 20, () => e.vision.nodes, (m) => m, (m, te) => {
    var ae = os(), ve = v(ae, true);
    d(ae), ee(() => oe(ve, te)), c(m, ae);
  }), d(H);
  var W = u(H, 2), ue = v(W);
  be(ue, () => Be, (m, te) => {
    te(m, { children: (ae, ve) => {
      var ce = rs(), se = y(ce);
      be(se, () => We, (q, N) => {
        N(q, { class: "flex-1", children: (X, we) => {
          var x = is();
          let p;
          x.__click = [as, e];
          var _ = v(x);
          Wt(_, { size: 11 }), ye(), d(x), ee((A) => {
            p = Ne(x, 1, "flip-cta w-full cursor-pointer font-mono svelte-1i9xyep", null, p, A), x.disabled = !e.onScatter;
          }, [() => ({ "flip-cta--disabled": !e.onScatter })]), c(X, x);
        }, $$slots: { default: true } });
      });
      var pe = u(se, 2);
      be(pe, () => Ge, (q, N) => {
        N(q, { class: "z-[200]", children: (X, we) => {
          ye();
          var x = Ve("Scatter nodes onto your board");
          c(X, x);
        }, $$slots: { default: true } });
      }), c(ae, ce);
    }, $$slots: { default: true } });
  });
  var xe = u(ue, 2);
  be(xe, () => Be, (m, te) => {
    te(m, { children: (ae, ve) => {
      var ce = cs(), se = y(ce);
      be(se, () => We, (q, N) => {
        N(q, { class: "flex-1", children: (X, we) => {
          var x = ls();
          let p;
          x.__click = [ts, e];
          var _ = v(x);
          Jt(_, { size: 11 }), ye(), d(x), ee((A) => {
            p = Ne(x, 1, "flip-cta w-full cursor-pointer font-mono svelte-1i9xyep", null, p, A), x.disabled = !e.onChat;
          }, [() => ({ "flip-cta--disabled": !e.onChat })]), c(X, x);
        }, $$slots: { default: true } });
      });
      var pe = u(se, 2);
      be(pe, () => Ge, (q, N) => {
        N(q, { class: "z-[200]", children: (X, we) => {
          ye();
          var x = Ve("Open this idea in AI chat");
          c(X, x);
        }, $$slots: { default: true } });
      }), c(ae, ce);
    }, $$slots: { default: true } });
  });
  var z = u(xe, 2);
  be(z, () => Be, (m, te) => {
    te(m, { children: (ae, ve) => {
      var ce = us(), se = y(ce);
      be(se, () => We, (q, N) => {
        N(q, { class: "flex-1", children: (X, we) => {
          var x = ds();
          x.__click = [es, e];
          var p = v(x);
          Ft(p, { size: 11 }), ye(), d(x), c(X, x);
        }, $$slots: { default: true } });
      });
      var pe = u(se, 2);
      be(pe, () => Ge, (q, N) => {
        N(q, { class: "z-[200]", children: (X, we) => {
          ye();
          var x = Ve("Copy idea to clipboard");
          c(X, x);
        }, $$slots: { default: true } });
      }), c(ae, ce);
    }, $$slots: { default: true } });
  }), d(W), d(s), d(r), qe(r, (m) => o == null ? void 0 : o(m)), ee((m, te) => {
    i = Me(s, "", i, m), oe(I, l(n)), oe(K, `vision \xB7 ${l(n) ?? ""}`), R = Me(B, "", R, te), oe(j, e.vision.title), oe(re, e.vision.vision);
  }, [() => ({ "--card-accent": e.accentColor, "--card-glow": e.glowColor }), () => ({ color: e.textColor })]), c(t, r), M();
}
Le(["click", "keydown"]);
function hs(t) {
  const e = (t.packIds ?? []).flatMap((a) => {
    var _a3;
    return ((_a3 = Tt.find((n) => n.id === a)) == null ? void 0 : _a3.objects) ?? [];
  });
  return [.../* @__PURE__ */ new Set([...e, ...t.nodes ?? []])];
}
function fs(t, e, a) {
  Ct(He, false), a(false), Ha.success("All AI features hidden. Re-enable in Settings (\u2318,) under AI \u2192 Show AI features.");
}
var gs = (t, e) => e(false), ms = (t, e) => e(false), _s = (t, e) => f(e, "gemini"), bs = (t, e) => f(e, "openrouter"), ys = g('<p class="ai-hint svelte-1nu4crg">Get a free API key at <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" class="ai-link svelte-1nu4crg">Google AI Studio</a>. Keys are stored in localStorage.</p> <div class="ai-input-wrap svelte-1nu4crg"><!> <input id="gemini-key-input" type="password" autocomplete="off" placeholder="AIza..." class="ai-input svelte-1nu4crg"/></div>', 1), xs = g('<p class="ai-hint svelte-1nu4crg">Get an API key at <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" class="ai-link svelte-1nu4crg">openrouter.ai/keys</a>. Keys are stored in localStorage.</p> <div class="ai-input-wrap svelte-1nu4crg"><!> <input id="openrouter-key-input" type="password" autocomplete="off" placeholder="sk-or-..." class="ai-input svelte-1nu4crg"/></div>', 1), ws = (t, e) => f(e, !l(e)), Is = g('<div class="ai-model-row svelte-1nu4crg"><span class="ai-model-label svelte-1nu4crg">text</span> <input type="text" class="ai-model-input svelte-1nu4crg"/></div> <div class="ai-model-row ai-model-row--sep svelte-1nu4crg"><span class="ai-model-label svelte-1nu4crg">image</span> <input type="text" class="ai-model-input svelte-1nu4crg"/></div>', 1), Ss = g('<div class="ai-model-row svelte-1nu4crg"><span class="ai-model-label svelte-1nu4crg">text</span> <input type="text" class="ai-model-input svelte-1nu4crg"/></div> <div class="ai-model-row ai-model-row--sep svelte-1nu4crg"><span class="ai-model-label svelte-1nu4crg">image</span> <input type="text" class="ai-model-input svelte-1nu4crg"/></div> <p class="ai-model-note svelte-1nu4crg">STT, TTS, and Lyria require a separate Gemini key.</p>', 1), ks = g('<div class="ai-models-box svelte-1nu4crg"><!></div>'), Ms = g('<p class="ai-error svelte-1nu4crg"> </p>'), Cs = (t, e) => e(false), $s = g(`<div role="presentation"><div class="ai-backdrop svelte-1nu4crg"></div> <div class="ai-card svelte-1nu4crg" role="dialog" aria-modal="true" aria-labelledby="ai-dialog-title" tabindex="-1"><span class="ac ac-tl svelte-1nu4crg" aria-hidden="true"></span> <span class="ac ac-tr svelte-1nu4crg" aria-hidden="true"></span> <span class="ac ac-bl svelte-1nu4crg" aria-hidden="true"></span> <span class="ac ac-br svelte-1nu4crg" aria-hidden="true"></span> <div class="ai-glow svelte-1nu4crg" aria-hidden="true"></div> <div class="ai-header svelte-1nu4crg"><div><p class="ai-eyebrow svelte-1nu4crg">patchies \xB7 ai</p> <h2 id="ai-dialog-title" class="ai-title svelte-1nu4crg">Provider Settings</h2></div> <button class="ai-close svelte-1nu4crg" aria-label="Close">\u2715</button></div> <div class="ai-tabs svelte-1nu4crg"><button>Google Gemini</button> <button>OpenRouter</button></div> <form autocomplete="off" class="ai-body svelte-1nu4crg"><!> <button type="button" class="ai-models-toggle svelte-1nu4crg"><span>Default models</span> <!></button> <!> <!> <div class="ai-footer svelte-1nu4crg"><button type="button" class="ai-hide-btn svelte-1nu4crg">Don't want AI features? Hide them.</button> <div class="ai-actions svelte-1nu4crg"><button type="button" class="ai-btn-cancel svelte-1nu4crg">Cancel</button> <button type="submit" class="ai-btn-save svelte-1nu4crg">Save & Continue</button></div></div></form></div></div>`);
function Ts(t, e) {
  k(e, true);
  const [a, n] = ct(), o = () => je(Ue, "$aiSettings", a), r = () => je(He, "$isAiFeaturesVisible", a);
  let s = et(e, "open", 15, false), i = et(e, "class", 3, ""), h = J(ze(o().provider)), I = J(""), T = J(ze(o().geminiTextModel)), U = J(ze(o().geminiImageModel)), F = J(""), K = J(ze(o().openRouterTextModel)), B = J(ze(o().openRouterImageModel)), R = J(false), j = J(null), ie = false;
  Qe(() => {
    s() && !ie && (f(h, o().provider, true), f(I, o().geminiApiKey, true), f(T, o().geminiTextModel, true), f(U, o().geminiImageModel, true), f(F, o().openRouterApiKey, true), f(K, o().openRouterTextModel, true), f(B, o().openRouterImageModel, true), f(R, false), f(j, null)), ie = s();
  }), Qe(() => {
    if (!s()) return;
    function z(m) {
      m.key === "Escape" && s(false);
    }
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  });
  function re() {
    if (f(j, null), l(h) === "gemini") {
      const z = l(I).trim();
      if (!z) {
        f(j, "API key cannot be empty");
        return;
      }
      if (!z.startsWith("AIza")) {
        f(j, 'Invalid Gemini API key format. Keys start with "AIza"');
        return;
      }
      Ue.updateSettings({ provider: "gemini", geminiApiKey: z, geminiTextModel: l(T).trim() || at, geminiImageModel: l(U).trim() || tt });
    } else {
      const z = l(F).trim();
      if (!z) {
        f(j, "API key cannot be empty");
        return;
      }
      Ue.updateSettings({ provider: "openrouter", openRouterApiKey: z, openRouterTextModel: l(K).trim() || nt, openRouterImageModel: l(B).trim() || st });
    }
    s(false), e.onSaveAndContinue();
  }
  const H = (z) => (m) => {
    m.key === "Enter" && (m.preventDefault(), z());
  };
  var W = $(), ue = y(W);
  {
    var xe = (z) => {
      var m = $s(), te = v(m);
      te.__click = [gs, s];
      var ae = u(te, 2), ve = u(v(ae), 10), ce = u(v(ve), 2);
      ce.__click = [ms, s], d(ve);
      var se = u(ve, 2), pe = v(se);
      pe.__click = [_s, h];
      var q = u(pe, 2);
      q.__click = [bs, h], d(se);
      var N = u(se, 2), X = v(N);
      {
        var we = (b) => {
          var C = ys(), Y = u(y(C), 2), me = v(Y);
          ot(me, { class: "ai-input-icon" });
          var fe = u(me, 2);
          Te(fe);
          var ne = Ce(() => H(re));
          fe.__keydown = function(...Q) {
            var _a3;
            (_a3 = l(ne)) == null ? void 0 : _a3.apply(this, Q);
          }, d(Y), Ae(fe, () => l(I), (Q) => f(I, Q)), c(b, C);
        }, x = (b) => {
          var C = xs(), Y = u(y(C), 2), me = v(Y);
          ot(me, { class: "ai-input-icon" });
          var fe = u(me, 2);
          Te(fe);
          var ne = Ce(() => H(re));
          fe.__keydown = function(...Q) {
            var _a3;
            (_a3 = l(ne)) == null ? void 0 : _a3.apply(this, Q);
          }, d(Y), Ae(fe, () => l(F), (Q) => f(F, Q)), c(b, C);
        };
        Z(X, (b) => {
          l(h) === "gemini" ? b(we) : b(x, false);
        });
      }
      var p = u(X, 2);
      p.__click = [ws, R];
      var _ = u(v(p), 2);
      {
        let b = Ce(() => ["h-3 w-3 transition-transform", l(R) && "rotate-180"]);
        Ot(_, { get class() {
          return l(b);
        } });
      }
      d(p);
      var A = u(p, 2);
      {
        var he = (b) => {
          var C = ks(), Y = v(C);
          {
            var me = (ne) => {
              var Q = Is(), _e3 = y(Q), le = u(v(_e3), 2);
              Te(le), d(_e3);
              var Se = u(_e3, 2), ge = u(v(Se), 2);
              Te(ge), d(Se), ee(() => {
                Fe(le, "placeholder", at), Fe(ge, "placeholder", tt);
              }), Ae(le, () => l(T), (ke) => f(T, ke)), Ae(ge, () => l(U), (ke) => f(U, ke)), c(ne, Q);
            }, fe = (ne) => {
              var Q = Ss(), _e3 = y(Q), le = u(v(_e3), 2);
              Te(le), d(_e3);
              var Se = u(_e3, 2), ge = u(v(Se), 2);
              Te(ge), d(Se), ye(2), ee(() => {
                Fe(le, "placeholder", nt), Fe(ge, "placeholder", st);
              }), Ae(le, () => l(K), (ke) => f(K, ke)), Ae(ge, () => l(B), (ke) => f(B, ke)), c(ne, Q);
            };
            Z(Y, (ne) => {
              l(h) === "gemini" ? ne(me) : ne(fe, false);
            });
          }
          d(C), c(b, C);
        };
        Z(A, (b) => {
          l(R) && b(he);
        });
      }
      var G = u(A, 2);
      {
        var S = (b) => {
          var C = Ms(), Y = v(C, true);
          d(C), ee(() => oe(Y, l(j))), c(b, C);
        };
        Z(G, (b) => {
          l(j) && b(S);
        });
      }
      var P = u(G, 2), Pe = v(P);
      Pe.__click = [fs, r, s];
      var Ie = u(Pe, 2), Oe = v(Ie);
      Oe.__click = [Cs, s], ye(2), d(Ie), d(P), d(N), d(ae), d(m), ee(() => {
        Ne(m, 1, `ai-root ${i() ?? ""}`, "svelte-1nu4crg"), Ne(pe, 1, Ze(["ai-tab", l(h) === "gemini" && "ai-tab--active"]), "svelte-1nu4crg"), Ne(q, 1, Ze(["ai-tab", l(h) === "openrouter" && "ai-tab--active"]), "svelte-1nu4crg");
      }), kt("submit", N, (b) => {
        b.preventDefault(), re();
      }), c(z, m);
    };
    Z(ue, (z) => {
      s() && z(xe);
    });
  }
  c(t, W), M(), n();
}
Le(["click", "keydown"]);
const As = { accentColor: "#f97316", glowColor: "rgba(249,115,22,0.06)", textColor: "#fed7aa" }, un = w(As), vn = w(null), Je = w([]);
var zs = (t, e) => t.key === "Enter" && e(), Ns = g('<span class="generating-dot svelte-w5chza"></span> stop', 1), Ps = g('<p class="mb-4 font-mono text-xs text-red-500 svelte-w5chza"> </p>'), Os = g('<div class="vision-card vision-skeleton svelte-w5chza"></div>'), Es = g('<div class="visions-grid svelte-w5chza"></div>'), Ds = g('<span class="rounded-[3px] border border-white/6 bg-white/4 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 svelte-w5chza"> </span>'), Vs = g('<button class="vision-card cursor-pointer text-left svelte-w5chza"><div class="vision-top-line svelte-w5chza"></div> <h3 class="font-serif text-[1.1rem] leading-[1.2] italic svelte-w5chza"> </h3> <p class="flex-1 text-[0.8rem] leading-[1.65] text-zinc-500 svelte-w5chza"> </p> <div class="mt-auto flex flex-wrap gap-1 pt-4 svelte-w5chza"></div> <span class="vision-tap-hint font-mono text-[10px] tracking-[0.05em] svelte-w5chza">tap to explore \u2192</span></button>'), Ls = g('<div class="visions-grid svelte-w5chza"></div>'), Fs = (t, e) => f(e, true), Rs = g('<div class="vision-idle-prompt w-full svelte-w5chza"><p class="mb-3 font-serif text-2xl text-zinc-800 italic svelte-w5chza">Generation needs an AI key</p> <p class="mb-5 font-mono text-[11px] text-zinc-700 svelte-w5chza">Sparks uses your own API key \u2014 nothing is shared with Patchies servers.</p> <button class="cursor-pointer rounded-md border border-zinc-700 px-4 py-2 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200 svelte-w5chza">Set up AI Provider \u2192</button></div>'), js = g('<button class="vision-idle-prompt w-full cursor-pointer svelte-w5chza"><span class="font-serif text-2xl text-zinc-800 italic transition-colors group-hover:text-zinc-600 svelte-w5chza">Click \u2726 imagine to dream up ideas \u2192</span></button>'), Hs = g('<div class="svelte-w5chza"><!></div>'), Us = g('<section class="vision-section border-y border-white/5 bg-black/20 px-8 pt-8 pb-10 svelte-w5chza"><div class="mx-auto max-w-4xl svelte-w5chza"><div class="mb-5 flex flex-wrap items-center gap-4 max-[600px]:flex-col max-[600px]:items-stretch svelte-w5chza"><div class="flex-1 svelte-w5chza"><h2 class="sparks-heading font-serif text-[clamp(2rem,5vw,3.8rem)] leading-[1.1] text-zinc-200 italic svelte-w5chza">Dream a build</h2> <p class="mt-0.5 font-mono text-[11px] text-zinc-700 svelte-w5chza">three what-ifs based on your picks</p></div> <div class="flex min-w-0 flex-1 items-center gap-2 svelte-w5chza"><input type="text" placeholder="try: stranger, lo-fi, for a gallery opening" class="steer-input max-w-[340px] min-w-0 flex-1 rounded-md border border-white/8 bg-white/3 px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors outline-none placeholder:text-zinc-700 focus:text-zinc-200 svelte-w5chza"/> <button class="generate-btn flex cursor-pointer items-center gap-1.5 rounded-md border bg-transparent px-3.5 py-1.5 font-mono text-xs whitespace-nowrap transition-all disabled:cursor-not-allowed disabled:opacity-40 svelte-w5chza"><!></button></div></div> <!> <!></div></section> <div class="svelte-w5chza"><!></div> <!>', 1);
function pn(t, e) {
  k(e, true);
  const [a, n] = ct(), o = () => je(Pt, "$hasAIApiKey", a), r = () => je(Je, "$sparksVisions", a);
  let s = J(false), i = J(""), h = J(null), I = null, T = J(false);
  function U(p) {
    return document.body.appendChild(p), { destroy() {
      p.remove();
    } };
  }
  let F = J(null), K = J(0);
  function B(p, _) {
    f(F, p, true), f(K, _, true);
  }
  async function R() {
    if (l(s)) {
      I == null ? void 0 : I.abort();
      return;
    }
    if (!o()) {
      f(T, true);
      return;
    }
    f(s, true), Je.set([]), f(h, null), I = new AbortController();
    const p = e.selectedMood ? `MOOD: ${e.selectedMood.name} \u2014 ${e.selectedMood.tagline}
${e.selectedMood.description}` : "", _ = e.selectedOutputIds.size > 0 ? `OUTPUT FOCUS \u2014 each idea MUST use at least one object from these categories:
${[...e.selectedOutputIds].map((G) => {
      const S = e.outputs.find((P) => P.id === G);
      return S ? `- ${S.name}: ${hs(S).join(", ")}` : "";
    }).filter(Boolean).join(`
`)}` : "", A = l(i).trim() ? `CREATIVE DIRECTION FROM USER: "${l(i).trim()}"` : "", he = `You are a creative director for Patchies \u2014 a visual/audio patching environment where artists connect nodes to build audio-visual experiences.

Your task: Generate 3 "what if..." ideas \u2014 concrete, surprising premises for things someone could build. Each has a specific "what if..." question as the hook, and 1\u20132 sentences that make the premise feel tangible without explaining how to build it.

The goal: one concrete anchor (the what-if) + open implementation. Not too abstract, not too prescriptive.

${p}
${_}
${A}

AVAILABLE PATCHIES OBJECTS (suggest nodes only from this list):
${zt}

Respond ONLY with a valid JSON array of exactly 3 ideas:
[
  {
    "title": "What if [specific, concrete premise in under 10 words]?",
    "vision": "1\u20132 sentences. Describe the specific experience \u2014 what happens, what the person does, sees, or hears. Concrete enough to picture immediately. Never mention code, nodes, or how it works.",
    "nodes": ["node1", "node2", "node3"]
  }
]

Good title examples:
- "What if your heartbeat set the tempo?"
- "What if turning off the lights tuned the bass?"
- "What if the longer you held still, the louder it got?"
- "What if your audience's phones were the only instrument?"

Bad titles (too vague \u2014 no anchor):
- "What if shadows had meaning?" \u2014 unpictureable
- "What if sound became visual?" \u2014 generic

Rules:
- Title must be a specific what-if you can immediately picture
- Vision answers it with concrete specificity: what exactly happens
- Never use words: patch, node, code, connect, map, route, signal
- Vary scale: one intimate/personal, one performative, one unexpected
- Avoid: "pulsing", "ethereal", "sonic journey", "immersive", "generative"
- Try cross-domain combinations that feel fresh, e.g. assembly + projection = ?
- ${A || "Prioritise ideas that feel genuinely new and a little strange"}
${_ ? `
CRITICAL \u2014 OUTPUT FOCUS ENFORCEMENT: Every idea's "nodes" array MUST contain AT LEAST one object from the OUTPUT FOCUS list. This is a hard requirement. Do not suggest nodes outside that list unless supplementing it.` : ""}`;
    try {
      const G = At();
      let S = "";
      await G.generateText([{ role: "user", content: he }], { signal: I.signal, temperature: 1.1, onToken: (P) => {
        S += P;
      } }), Je.set(JSON.parse(Nt(S.trim())));
    } catch (G) {
      (G == null ? void 0 : G.name) !== "AbortError" && f(h, G instanceof Error ? G.message : "Generation failed", true);
    } finally {
      f(s, false), I = null;
    }
  }
  var j = Us(), ie = y(j), re = v(ie), H = v(re), W = u(v(H), 2), ue = v(W);
  Te(ue), ue.__keydown = [zs, R];
  var xe = u(ue, 2);
  xe.__click = R;
  let z;
  var m = v(xe);
  {
    var te = (p) => {
      var _ = Ns();
      ye(), c(p, _);
    }, ae = (p) => {
      var _ = $(), A = y(_);
      {
        var he = (S) => {
          var P = Ve("\u21BA again");
          c(S, P);
        }, G = (S) => {
          var P = Ve("\u2726 imagine");
          c(S, P);
        };
        Z(A, (S) => {
          r().length > 0 ? S(he) : S(G, false);
        }, true);
      }
      c(p, _);
    };
    Z(m, (p) => {
      l(s) ? p(te) : p(ae, false);
    });
  }
  d(xe), d(W), d(H);
  var ve = u(H, 2);
  {
    var ce = (p) => {
      var _ = Ps(), A = v(_, true);
      d(_), ee(() => oe(A, l(h))), c(p, _);
    };
    Z(ve, (p) => {
      l(h) && p(ce);
    });
  }
  var se = u(ve, 2);
  {
    var pe = (p) => {
      var _ = Es();
      Ee(_, 20, () => [0, 1, 2], (A) => A, (A, he) => {
        var G = Os();
        let S;
        ee((P) => S = Me(G, "", S, P), [() => ({ "animation-delay": `${he * 120}ms` })]), c(A, G);
      }), d(_), c(p, _);
    }, q = (p) => {
      var _ = $(), A = y(_);
      {
        var he = (S) => {
          var P = Ls();
          Ee(P, 5, r, Mt, (Pe, Ie, Oe) => {
            var b = Vs();
            b.__click = () => B(l(Ie), Oe);
            let C;
            var Y = u(v(b), 2);
            let me;
            var fe = v(Y, true);
            d(Y);
            var ne = u(Y, 2), Q = v(ne, true);
            d(ne);
            var _e3 = u(ne, 2);
            Ee(_e3, 20, () => l(Ie).nodes, (le) => le, (le, Se) => {
              var ge = Ds(), ke = v(ge, true);
              d(ge), ee(() => oe(ke, Se)), c(le, ge);
            }), d(_e3), ye(2), d(b), ee((le, Se) => {
              C = Me(b, "", C, le), me = Me(Y, "", me, Se), oe(fe, l(Ie).title), oe(Q, l(Ie).vision);
            }, [() => ({ "--card-accent": e.accentColor, "animation-delay": `${Oe * 80}ms` }), () => ({ color: e.textColor })]), c(Pe, b);
          }), d(P), c(S, P);
        }, G = (S) => {
          var P = $(), Pe = y(P);
          {
            var Ie = (b) => {
              var C = Rs(), Y = u(v(C), 4);
              Y.__click = [Fs, T], d(C), c(b, C);
            }, Oe = (b) => {
              var C = js();
              C.__click = R, c(b, C);
            };
            Z(Pe, (b) => {
              o() ? b(Oe, false) : b(Ie);
            }, true);
          }
          c(S, P);
        };
        Z(A, (S) => {
          r().length > 0 ? S(he) : S(G, false);
        }, true);
      }
      c(p, _);
    };
    Z(se, (p) => {
      l(s) && r().length === 0 ? p(pe) : p(q, false);
    });
  }
  d(re), d(ie);
  var N = u(ie, 2), X = v(N);
  Ts(X, { onSaveAndContinue: R, get open() {
    return l(T);
  }, set open(p) {
    f(T, p, true);
  } }), d(N), qe(N, (p) => U == null ? void 0 : U(p));
  var we = u(N, 2);
  {
    var x = (p) => {
      var _ = Hs(), A = v(_);
      ps(A, { get vision() {
        return l(F);
      }, get index() {
        return l(K);
      }, get accentColor() {
        return e.accentColor;
      }, get glowColor() {
        return e.glowColor;
      }, get textColor() {
        return e.textColor;
      }, onClose: () => f(F, null), get onScatter() {
        return e.onScatter;
      }, get onChat() {
        return e.onChat;
      } }), d(_), qe(_, (he) => U == null ? void 0 : U(he)), c(p, _);
    };
    Z(we, (p) => {
      l(F) && p(x);
    });
  }
  ee((p) => z = Me(xe, "", z, p), [() => ({ "border-color": `color-mix(in srgb, ${e.accentColor ?? ""} 35%, transparent)`, color: l(s) ? e.accentColor : void 0 })]), Ae(ue, () => l(i), (p) => f(i, p)), c(t, j), M(), n();
}
Le(["keydown", "click"]);
const hn = [{ id: "dark", name: "Dark", tagline: "Heavy. Slow. Threatening.", description: "Deep bass drones that fill a room. Monochrome visuals that shift like smoke. The kind of patch that makes people uncomfortable in the best way.", nodes: ["osc~", "glsl", "lfo"], gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1030 50%, #0d0d1a 100%)", accentColor: "#818cf8", glowColor: "rgba(99, 102, 241, 0.15)", textColor: "#c7d2fe" }, { id: "euphoric", name: "Euphoric", tagline: "Bright. Fast. Alive.", description: "Festival energy in a patch. Audio-reactive explosions of color, strudel patterns that accelerate, visuals that peak with the drop.", nodes: ["fft~", "strudel", "p5"], gradient: "linear-gradient(135deg, #1a0f00 0%, #2d1a00 50%, #1a1200 100%)", accentColor: "#fbbf24", glowColor: "rgba(251, 191, 36, 0.15)", textColor: "#fde68a" }, { id: "glitchy", name: "Glitchy", tagline: "Broken. Wrong. Perfect.", description: "Corrupted video feeds, stuttering audio, visuals that fight against themselves. Deliberately malfunctioning systems are the most interesting ones.", nodes: ["glsl", "webcam", "js"], gradient: "linear-gradient(135deg, #000d00 0%, #001a04 50%, #000e00 100%)", accentColor: "#4ade80", glowColor: "rgba(74, 222, 128, 0.12)", textColor: "#86efac" }, { id: "meditative", name: "Meditative", tagline: "Slow. Looping. Breathable.", description: "Long reverb tails that blur into silence. Hydra visuals that drift without destination. Time stretches. The patch breathes on its own.", nodes: ["hydra", "reverb~", "lfo"], gradient: "linear-gradient(135deg, #001214 0%, #001e20 50%, #001012 100%)", accentColor: "#22d3ee", glowColor: "rgba(34, 211, 238, 0.1)", textColor: "#a5f3fc" }, { id: "chaotic", name: "Chaotic", tagline: "Too much. All at once.", description: "Every frequency band triggering something different. DMX strobing. Strudel patterns racing. Controlled overwhelm \u2014 the audience doesn't know where to look.", nodes: ["fft", "serial.dmx", "strudel"], gradient: "linear-gradient(135deg, #1a0000 0%, #2d0000 50%, #1a0500 100%)", accentColor: "#f87171", glowColor: "rgba(248, 113, 113, 0.14)", textColor: "#fca5a5" }, { id: "dreamy", name: "Dreamy", tagline: "Soft. Drifting. Hazy.", description: "Delay trails that smear the past into the present. Hydra textures like oil on water. Something ambient that forgets it started.", nodes: ["hydra", "delay~", "p5"], gradient: "linear-gradient(135deg, #0d0014 0%, #160020 50%, #0a0012 100%)", accentColor: "#c084fc", glowColor: "rgba(192, 132, 252, 0.12)", textColor: "#e9d5ff" }, { id: "industrial", name: "Industrial", tagline: "Mechanical. Rhythmic. Cold.", description: "Clock-driven light rigs, oscillators that clank rather than sing. The beauty of machinery doing exactly what it was told.", nodes: ["serial.dmx", "osc~", "transport"], gradient: "linear-gradient(135deg, #0f0d0a 0%, #1a1610 50%, #100e0a 100%)", accentColor: "#fb923c", glowColor: "rgba(249, 115, 22, 0.12)", textColor: "#fed7aa" }, { id: "playful", name: "Playful", tagline: "Interactive. Light. Joyful.", description: "Sliders that feel good to touch. Canvases that react to cursor position. Patches that invite people to break them.", nodes: ["p5", "slider", "canvas"], gradient: "linear-gradient(135deg, #0a1200 0%, #111e00 50%, #0b1300 100%)", accentColor: "#a3e635", glowColor: "rgba(163, 230, 53, 0.12)", textColor: "#d9f99d" }], fn = [{ id: "2d-visual", name: "2D Visual", description: "Canvas, P5.js, 2D graphics", packIds: ["2d"] }, { id: "video", name: "Video", description: "Three.js, Hydra, shaders", packIds: ["video-synthesis"] }, { id: "sound", name: "Sound", description: "Synthesis and effects", packIds: ["signal-generators", "audio-effects"] }, { id: "music", name: "Music", description: "Composition and sequencing", packIds: ["music"], nodes: ["bytebeat~"] }, { id: "gestures", name: "Gestures", description: "Webcam, body & hand tracking", packIds: ["vision"], nodes: ["webcam"] }, { id: "code", name: "Code", description: "Scripting & workers", packIds: ["scripting"], nodes: ["js", "worker"] }, { id: "low-level", name: "Low-Level", description: "VMs, assembly, bytecode", packIds: ["low-level"], nodes: ["wgpu.compute"] }, { id: "dsp", name: "DSP", description: "Custom signal processors", packIds: ["signal-processors"] }, { id: "lighting", name: "Lighting", description: "DMX lights & LED strips", nodes: ["serial.dmx"] }, { id: "projection", name: "Projection", description: "Projection mapping", nodes: ["projmap"] }, { id: "midi", name: "MIDI", description: "MIDI controllers", packIds: ["midi"] }, { id: "serial", name: "Serial", description: "Sensors & physical I/O", nodes: ["serial", "serial.term"] }, { id: "ai", name: "AI", description: "Text, sound and image gen", packIds: ["ai"] }, { id: "sampling", name: "Sampling", description: "Samplers, pads, loops & tables", packIds: ["audio-samples"], nodes: ["soundfile~"] }, { id: "connections", name: "Connections", description: "Live Video, MQTT, RTC, I/O", packIds: ["networking"] }, { id: "ui", name: "UI", description: "Custom controls & interfaces", packIds: ["ui"], nodes: ["canvas.dom", "p5", "keyboard"] }];
export {
  Aa as $,
  da as A,
  Yt as B,
  Lt as C,
  Kt as D,
  Vt as E,
  Dt as F,
  Ht as G,
  Rt as H,
  xa as I,
  va as J,
  la as K,
  Jt as L,
  cn as M,
  Gt as N,
  dn as O,
  qt as P,
  Qt as Q,
  un as R,
  ln as S,
  vn as T,
  Zt as U,
  pn as V,
  As as W,
  sa as X,
  mt as Y,
  ca as Z,
  ua as _,
  qe as a,
  Ea as a0,
  Ta as a1,
  Oa as a2,
  Pa as a3,
  Da as a4,
  De as a5,
  Na as a6,
  za as a7,
  $a as a8,
  gt as a9,
  ft as aa,
  ut as ab,
  Ts as ac,
  on as ad,
  Ca as b,
  Ye as c,
  rn as d,
  Ha as e,
  He as f,
  na as g,
  oa as h,
  ia as i,
  pa as j,
  vt as k,
  _t as l,
  hn as m,
  ma as n,
  fn as o,
  bt as p,
  ka as q,
  ba as r,
  $e as s,
  de as t,
  _a as u,
  wa as v,
  ht as w,
  pt as x,
  Ft as y,
  ya as z
};
