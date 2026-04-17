let Fe, L;
let __tla = (async ()=>{
    var de = Object.defineProperty, a = (e, t)=>de(e, "name", {
            value: t,
            configurable: !0
        }), $ = ((e)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
            get: (t, r)=>(typeof require < "u" ? require : t)[r]
        }) : e)(function(e) {
        if (typeof require < "u") return require.apply(this, arguments);
        throw Error('Dynamic require of "' + e + '" is not supported');
    }), pe = (()=>{
        for(var e = new Uint8Array(128), t = 0; t < 64; t++)e[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
        return (r)=>{
            for(var s = r.length, o = new Uint8Array((s - (r[s - 1] == "=") - (r[s - 2] == "=")) * 3 / 4 | 0), n = 0, i = 0; n < s;){
                var l = e[r.charCodeAt(n++)], c = e[r.charCodeAt(n++)], u = e[r.charCodeAt(n++)], d = e[r.charCodeAt(n++)];
                o[i++] = l << 2 | c >> 4, o[i++] = c << 4 | u >> 2, o[i++] = u << 6 | d;
            }
            return o;
        };
    })();
    function j(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    a(j, "_isNumber");
    function g(e) {
        return e.charAt(0).toUpperCase() + e.substring(1);
    }
    a(g, "_capitalize");
    function R(e) {
        return function() {
            return this[e];
        };
    }
    a(R, "_getter");
    var S = [
        "isConstructor",
        "isEval",
        "isNative",
        "isToplevel"
    ], k = [
        "columnNumber",
        "lineNumber"
    ], A = [
        "fileName",
        "functionName",
        "source"
    ], me = [
        "args"
    ], ye = [
        "evalOrigin"
    ], x = S.concat(k, A, me, ye);
    function m(e) {
        if (e) for(var t = 0; t < x.length; t++)e[x[t]] !== void 0 && this["set" + g(x[t])](e[x[t]]);
    }
    a(m, "StackFrame");
    m.prototype = {
        getArgs: a(function() {
            return this.args;
        }, "getArgs"),
        setArgs: a(function(e) {
            if (Object.prototype.toString.call(e) !== "[object Array]") throw new TypeError("Args must be an Array");
            this.args = e;
        }, "setArgs"),
        getEvalOrigin: a(function() {
            return this.evalOrigin;
        }, "getEvalOrigin"),
        setEvalOrigin: a(function(e) {
            if (e instanceof m) this.evalOrigin = e;
            else if (e instanceof Object) this.evalOrigin = new m(e);
            else throw new TypeError("Eval Origin must be an Object or StackFrame");
        }, "setEvalOrigin"),
        toString: a(function() {
            var e = this.getFileName() || "", t = this.getLineNumber() || "", r = this.getColumnNumber() || "", s = this.getFunctionName() || "";
            return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + r + ")" : "[eval]:" + t + ":" + r : s ? s + " (" + e + ":" + t + ":" + r + ")" : e + ":" + t + ":" + r;
        }, "toString")
    };
    m.fromString = a(function(e) {
        var t = e.indexOf("("), r = e.lastIndexOf(")"), s = e.substring(0, t), o = e.substring(t + 1, r).split(","), n = e.substring(r + 1);
        if (n.indexOf("@") === 0) var i = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(n, ""), l = i[1], c = i[2], u = i[3];
        return new m({
            functionName: s,
            args: o || void 0,
            fileName: l,
            lineNumber: c || void 0,
            columnNumber: u || void 0
        });
    }, "StackFrame$$fromString");
    for(w = 0; w < S.length; w++)m.prototype["get" + g(S[w])] = R(S[w]), m.prototype["set" + g(S[w])] = function(e) {
        return function(t) {
            this[e] = !!t;
        };
    }(S[w]);
    var w;
    for(v = 0; v < k.length; v++)m.prototype["get" + g(k[v])] = R(k[v]), m.prototype["set" + g(k[v])] = function(e) {
        return function(t) {
            if (!j(t)) throw new TypeError(e + " must be a Number");
            this[e] = Number(t);
        };
    }(k[v]);
    var v;
    for(b = 0; b < A.length; b++)m.prototype["get" + g(A[b])] = R(A[b]), m.prototype["set" + g(A[b])] = function(e) {
        return function(t) {
            this[e] = String(t);
        };
    }(A[b]);
    var b, N = m;
    function M() {
        var e = /^\s*at .*(\S+:\d+|\(native\))/m, t = /^(eval@)?(\[native code])?$/;
        return {
            parse: a(function(r) {
                if (r.stack && r.stack.match(e)) return this.parseV8OrIE(r);
                if (r.stack) return this.parseFFOrSafari(r);
                throw new Error("Cannot parse given Error object");
            }, "ErrorStackParser$$parse"),
            extractLocation: a(function(r) {
                if (r.indexOf(":") === -1) return [
                    r
                ];
                var s = /(.+?)(?::(\d+))?(?::(\d+))?$/, o = s.exec(r.replace(/[()]/g, ""));
                return [
                    o[1],
                    o[2] || void 0,
                    o[3] || void 0
                ];
            }, "ErrorStackParser$$extractLocation"),
            parseV8OrIE: a(function(r) {
                var s = r.stack.split(`
`).filter(function(o) {
                    return !!o.match(e);
                }, this);
                return s.map(function(o) {
                    o.indexOf("(eval ") > -1 && (o = o.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                    var n = o.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""), i = n.match(/ (\(.+\)$)/);
                    n = i ? n.replace(i[0], "") : n;
                    var l = this.extractLocation(i ? i[1] : n), c = i && n || void 0, u = [
                        "eval",
                        "<anonymous>"
                    ].indexOf(l[0]) > -1 ? void 0 : l[0];
                    return new N({
                        functionName: c,
                        fileName: u,
                        lineNumber: l[1],
                        columnNumber: l[2],
                        source: o
                    });
                }, this);
            }, "ErrorStackParser$$parseV8OrIE"),
            parseFFOrSafari: a(function(r) {
                var s = r.stack.split(`
`).filter(function(o) {
                    return !o.match(t);
                }, this);
                return s.map(function(o) {
                    if (o.indexOf(" > eval") > -1 && (o = o.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), o.indexOf("@") === -1 && o.indexOf(":") === -1) return new N({
                        functionName: o
                    });
                    var n = /((.*".+"[^@]*)?[^@]*)(?:@)/, i = o.match(n), l = i && i[1] ? i[1] : void 0, c = this.extractLocation(o.replace(n, ""));
                    return new N({
                        functionName: l,
                        fileName: c[0],
                        lineNumber: c[1],
                        columnNumber: c[2],
                        source: o
                    });
                }, this);
            }, "ErrorStackParser$$parseFFOrSafari")
        };
    }
    a(M, "ErrorStackParser");
    var ge = new M, he = ge, y = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && !process.browser, W = y && typeof module < "u" && typeof module.exports < "u" && typeof $ < "u" && typeof __dirname < "u", we = y && !W, ve = typeof Deno < "u", B = !y && !ve, be = B && typeof window == "object" && typeof document == "object" && typeof document.createElement == "function" && "sessionStorage" in window && typeof importScripts != "function", Ee = B && typeof importScripts == "function" && typeof self == "object";
    typeof navigator == "object" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("Safari") > -1;
    var I = typeof read == "function" && typeof load == "function", H, D, V, C, _;
    async function T() {
        if (!y || (H = (await import("./9wXp6ZBx.js")).default, C = await import("./9wXp6ZBx.js"), _ = await import("./9wXp6ZBx.js"), V = (await import("./9wXp6ZBx.js")).default, D = await import("./9wXp6ZBx.js"), U = D.sep, typeof $ < "u")) return;
        let e = C, t = await import("./9wXp6ZBx.js"), r = await import("./9wXp6ZBx.js"), s = await import("./9wXp6ZBx.js"), o = {
            fs: e,
            crypto: t,
            ws: r,
            child_process: s
        };
        globalThis.require = function(n) {
            return o[n];
        };
    }
    a(T, "initNodeModules");
    function z(e, t) {
        return D.resolve(t || ".", e);
    }
    a(z, "node_resolvePath");
    function q(e, t) {
        return t === void 0 && (t = location), new URL(e, t).toString();
    }
    a(q, "browser_resolvePath");
    var O;
    y ? O = z : I ? O = a((e)=>e, "resolvePath") : O = q;
    var U;
    y || (U = "/");
    function G(e, t) {
        return e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? {
            response: fetch(e)
        } : {
            binary: _.readFile(e).then((r)=>new Uint8Array(r.buffer, r.byteOffset, r.byteLength))
        };
    }
    a(G, "node_getBinaryResponse");
    function Y(e, t) {
        if (e.startsWith("file://") && (e = e.slice(7)), e.includes("://")) throw new Error("Shell cannot fetch urls");
        return {
            binary: Promise.resolve(new Uint8Array(readbuffer(e)))
        };
    }
    a(Y, "shell_getBinaryResponse");
    function J(e, t) {
        let r = new URL(e, location);
        return {
            response: fetch(r, t ? {
                integrity: t
            } : {})
        };
    }
    a(J, "browser_getBinaryResponse");
    var P;
    y ? P = G : I ? P = Y : P = J;
    async function Z(e, t) {
        let { response: r, binary: s } = P(e, t);
        if (s) return s;
        let o = await r;
        if (!o.ok) throw new Error(`Failed to load '${e}': request failed.`);
        return new Uint8Array(await o.arrayBuffer());
    }
    a(Z, "loadBinaryFile");
    var F;
    if (be) F = a(async (e)=>await import(e).then(async (m)=>{
            await m.__tla;
            return m;
        }), "loadScript");
    else if (Ee) F = a(async (e)=>{
        try {
            globalThis.importScripts(e);
        } catch (t) {
            if (t instanceof TypeError) await import(e).then(async (m)=>{
                await m.__tla;
                return m;
            });
            else throw t;
        }
    }, "loadScript");
    else if (y) F = K;
    else if (I) F = load;
    else throw new Error("Cannot determine runtime environment");
    async function K(e) {
        e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? V.runInThisContext(await (await fetch(e)).text()) : await import(H.pathToFileURL(e).href).then(async (m)=>{
            await m.__tla;
            return m;
        });
    }
    a(K, "nodeLoadScript");
    async function Q(e) {
        if (y) {
            await T();
            let t = await _.readFile(e, {
                encoding: "utf8"
            });
            return JSON.parse(t);
        } else if (I) {
            let t = read(e);
            return JSON.parse(t);
        } else return await (await fetch(e)).json();
    }
    a(Q, "loadLockFile");
    async function X() {
        if (W) return __dirname;
        let e;
        try {
            throw new Error;
        } catch (s) {
            e = s;
        }
        let t = he.parse(e)[0].fileName;
        if (y && !t.startsWith("file://") && (t = `file://${t}`), we) {
            let s = await import("./9wXp6ZBx.js");
            return (await import("./9wXp6ZBx.js")).fileURLToPath(s.dirname(t));
        }
        let r = t.lastIndexOf(U);
        if (r === -1) throw new Error("Could not extract indexURL path from pyodide module location");
        return t.slice(0, r);
    }
    a(X, "calculateDirname");
    function ee(e) {
        return e.substring(0, e.lastIndexOf("/") + 1) || globalThis.location?.toString() || ".";
    }
    a(ee, "calculateInstallBaseUrl");
    function te(e) {
        let t = e.FS, r = e.FS.filesystems.MEMFS, s = e.PATH, o = {
            DIR_MODE: 16895,
            FILE_MODE: 33279,
            mount: a(function(n) {
                if (!n.opts.fileSystemHandle) throw new Error("opts.fileSystemHandle is required");
                return r.mount.apply(null, arguments);
            }, "mount"),
            syncfs: a(async (n, i, l)=>{
                try {
                    let c = o.getLocalSet(n), u = await o.getRemoteSet(n), d = i ? u : c, f = i ? c : u;
                    await o.reconcile(n, d, f), l(null);
                } catch (c) {
                    l(c);
                }
            }, "syncfs"),
            getLocalSet: a((n)=>{
                let i = Object.create(null);
                function l(d) {
                    return d !== "." && d !== "..";
                }
                a(l, "isRealDir");
                function c(d) {
                    return (f)=>s.join2(d, f);
                }
                a(c, "toAbsolute");
                let u = t.readdir(n.mountpoint).filter(l).map(c(n.mountpoint));
                for(; u.length;){
                    let d = u.pop(), f = t.stat(d);
                    t.isDir(f.mode) && u.push.apply(u, t.readdir(d).filter(l).map(c(d))), i[d] = {
                        timestamp: f.mtime,
                        mode: f.mode
                    };
                }
                return {
                    type: "local",
                    entries: i
                };
            }, "getLocalSet"),
            getRemoteSet: a(async (n)=>{
                let i = Object.create(null), l = await Se(n.opts.fileSystemHandle);
                for (let [c, u] of l)c !== "." && (i[s.join2(n.mountpoint, c)] = {
                    timestamp: u.kind === "file" ? new Date((await u.getFile()).lastModified) : new Date,
                    mode: u.kind === "file" ? o.FILE_MODE : o.DIR_MODE
                });
                return {
                    type: "remote",
                    entries: i,
                    handles: l
                };
            }, "getRemoteSet"),
            loadLocalEntry: a((n)=>{
                let i = t.lookupPath(n).node, l = t.stat(n);
                if (t.isDir(l.mode)) return {
                    timestamp: l.mtime,
                    mode: l.mode
                };
                if (t.isFile(l.mode)) return i.contents = r.getFileDataAsTypedArray(i), {
                    timestamp: l.mtime,
                    mode: l.mode,
                    contents: i.contents
                };
                throw new Error("node type not supported");
            }, "loadLocalEntry"),
            storeLocalEntry: a((n, i)=>{
                if (t.isDir(i.mode)) t.mkdirTree(n, i.mode);
                else if (t.isFile(i.mode)) t.writeFile(n, i.contents, {
                    canOwn: !0
                });
                else throw new Error("node type not supported");
                t.chmod(n, i.mode), t.utime(n, i.timestamp, i.timestamp);
            }, "storeLocalEntry"),
            removeLocalEntry: a((n)=>{
                var i = t.stat(n);
                t.isDir(i.mode) ? t.rmdir(n) : t.isFile(i.mode) && t.unlink(n);
            }, "removeLocalEntry"),
            loadRemoteEntry: a(async (n)=>{
                if (n.kind === "file") {
                    let i = await n.getFile();
                    return {
                        contents: new Uint8Array(await i.arrayBuffer()),
                        mode: o.FILE_MODE,
                        timestamp: new Date(i.lastModified)
                    };
                } else {
                    if (n.kind === "directory") return {
                        mode: o.DIR_MODE,
                        timestamp: new Date
                    };
                    throw new Error("unknown kind: " + n.kind);
                }
            }, "loadRemoteEntry"),
            storeRemoteEntry: a(async (n, i, l)=>{
                let c = n.get(s.dirname(i)), u = t.isFile(l.mode) ? await c.getFileHandle(s.basename(i), {
                    create: !0
                }) : await c.getDirectoryHandle(s.basename(i), {
                    create: !0
                });
                if (u.kind === "file") {
                    let d = await u.createWritable();
                    await d.write(l.contents), await d.close();
                }
                n.set(i, u);
            }, "storeRemoteEntry"),
            removeRemoteEntry: a(async (n, i)=>{
                await n.get(s.dirname(i)).removeEntry(s.basename(i)), n.delete(i);
            }, "removeRemoteEntry"),
            reconcile: a(async (n, i, l)=>{
                let c = 0, u = [];
                Object.keys(i.entries).forEach(function(p) {
                    let h = i.entries[p], E = l.entries[p];
                    (!E || t.isFile(h.mode) && h.timestamp.getTime() > E.timestamp.getTime()) && (u.push(p), c++);
                }), u.sort();
                let d = [];
                if (Object.keys(l.entries).forEach(function(p) {
                    i.entries[p] || (d.push(p), c++);
                }), d.sort().reverse(), !c) return;
                let f = i.type === "remote" ? i.handles : l.handles;
                for (let p of u){
                    let h = s.normalize(p.replace(n.mountpoint, "/")).substring(1);
                    if (l.type === "local") {
                        let E = f.get(h), fe = await o.loadRemoteEntry(E);
                        o.storeLocalEntry(p, fe);
                    } else {
                        let E = o.loadLocalEntry(p);
                        await o.storeRemoteEntry(f, h, E);
                    }
                }
                for (let p of d)if (l.type === "local") o.removeLocalEntry(p);
                else {
                    let h = s.normalize(p.replace(n.mountpoint, "/")).substring(1);
                    await o.removeRemoteEntry(f, h);
                }
            }, "reconcile")
        };
        e.FS.filesystems.NATIVEFS_ASYNC = o;
    }
    a(te, "initializeNativeFS");
    var Se = a(async (e)=>{
        let t = [];
        async function r(o) {
            for await (let n of o.values())t.push(n), n.kind === "directory" && await r(n);
        }
        a(r, "collect"), await r(e);
        let s = new Map;
        s.set(".", e);
        for (let o of t){
            let n = (await e.resolve(o)).join("/");
            s.set(n, o);
        }
        return s;
    }, "getFsHandles");
    pe("AGFzbQEAAAABDANfAGAAAW9gAW8BfwMDAgECByECD2NyZWF0ZV9zZW50aW5lbAAAC2lzX3NlbnRpbmVsAAEKEwIHAPsBAPsbCwkAIAD7GvsUAAs=");
    var ke = async function() {
        globalThis.navigator && (/iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && typeof navigator.maxTouchPoints < "u" && navigator.maxTouchPoints > 1);
    }();
    async function re() {
        let e = await ke;
        if (e) return e.exports;
        let t = Symbol("error marker");
        return {
            create_sentinel: a(()=>t, "create_sentinel"),
            is_sentinel: a((r)=>r === t, "is_sentinel")
        };
    }
    a(re, "getSentinelImport");
    function ne(e) {
        let t = {
            noImageDecoding: !0,
            noAudioDecoding: !0,
            noWasmDecoding: !1,
            preRun: ce(e),
            print: e.stdout,
            printErr: e.stderr,
            onExit (r) {
                t.exitCode = r;
            },
            thisProgram: e._sysExecutable,
            arguments: e.args,
            API: {
                config: e
            },
            locateFile: a((r)=>e.indexURL + r, "locateFile"),
            instantiateWasm: ue(e.indexURL)
        };
        return t;
    }
    a(ne, "createSettings");
    function ie(e) {
        return function(t) {
            let r = "/";
            try {
                t.FS.mkdirTree(e);
            } catch (s) {
                console.error(`Error occurred while making a home directory '${e}':`), console.error(s), console.error(`Using '${r}' for a home directory instead`), e = r;
            }
            t.FS.chdir(e);
        };
    }
    a(ie, "createHomeDirectory");
    function oe(e) {
        return function(t) {
            Object.assign(t.ENV, e);
        };
    }
    a(oe, "setEnvironment");
    function ae(e) {
        return e ? [
            async (t)=>{
                t.addRunDependency("fsInitHook");
                try {
                    await e(t.FS, {
                        sitePackages: t.API.sitePackages
                    });
                } finally{
                    t.removeRunDependency("fsInitHook");
                }
            }
        ] : [];
    }
    a(ae, "callFsInitHook");
    function se(e) {
        let t = e.HEAPU32[e._Py_Version >>> 2], r = t >>> 24 & 255, s = t >>> 16 & 255, o = t >>> 8 & 255;
        return [
            r,
            s,
            o
        ];
    }
    a(se, "computeVersionTuple");
    function le(e) {
        let t = Z(e);
        return async (r)=>{
            r.API.pyVersionTuple = se(r);
            let [s, o] = r.API.pyVersionTuple;
            r.FS.mkdirTree("/lib"), r.API.sitePackages = `/lib/python${s}.${o}/site-packages`, r.FS.mkdirTree(r.API.sitePackages), r.addRunDependency("install-stdlib");
            try {
                let n = await t;
                r.FS.writeFile(`/lib/python${s}${o}.zip`, n);
            } catch (n) {
                console.error("Error occurred while installing the standard library:"), console.error(n);
            } finally{
                r.removeRunDependency("install-stdlib");
            }
        };
    }
    a(le, "installStdlib");
    function ce(e) {
        let t;
        return e.stdLibURL != null ? t = e.stdLibURL : t = e.indexURL + "python_stdlib.zip", [
            le(t),
            ie(e.env.HOME),
            oe(e.env),
            te,
            ...ae(e.fsInit)
        ];
    }
    a(ce, "getFileSystemInitializationFuncs");
    function ue(e) {
        if (typeof WasmOffsetConverter < "u") return;
        let { binary: t, response: r } = P(e + "pyodide.asm.wasm"), s = re();
        return function(o, n) {
            return async function() {
                o.sentinel = await s;
                try {
                    let i;
                    r ? i = await WebAssembly.instantiateStreaming(r, o) : i = await WebAssembly.instantiate(await t, o);
                    let { instance: l, module: c } = i;
                    n(l, c);
                } catch (i) {
                    console.warn("wasm instantiation failed!"), console.warn(i);
                }
            }(), {};
        };
    }
    a(ue, "getInstantiateWasmFunc");
    let Ae;
    Ae = "0.28.1";
    L = Ae;
    Fe = async function(e = {}) {
        if (e.lockFileContents && e.lockFileURL) throw new Error("Can't pass both lockFileContents and lockFileURL");
        await T();
        let t = e.indexURL || await X();
        t = O(t), t.endsWith("/") || (t += "/");
        let r = e;
        if (!e.lockFileContents) {
            let f = e.lockFileURL ?? t + "pyodide-lock.json";
            r.lockFileContents = Q(f), r.packageBaseUrl ??= ee(f);
        }
        if (r.indexURL = t, r.cdnUrl = r.packageBaseUrl ?? `https://cdn.jsdelivr.net/pyodide/v${L}/full/`, e.packageCacheDir) {
            let f = O(e.packageCacheDir);
            f.endsWith("/") || (f += "/"), e.packageCacheDir = f;
        }
        let s = {
            fullStdLib: !1,
            jsglobals: globalThis,
            stdin: globalThis.prompt ? globalThis.prompt : void 0,
            args: [],
            env: {},
            packages: [],
            packageCacheDir: r.packageBaseUrl,
            enableRunUntilComplete: !0,
            checkAPIVersion: !0,
            BUILD_ID: "0c0e2ff761547b9adb2156e2c54b8f253cfb8209e53008729249c6f0bed76fff"
        }, o = Object.assign(s, r);
        o.env.HOME ??= "/home/pyodide", o.env.PYTHONINSPECT ??= "1";
        let n = ne(o), i = n.API;
        if (i.lockFilePromise = Promise.resolve(r.lockFileContents), typeof _createPyodideModule != "function") {
            let f = `${o.indexURL}pyodide.asm.js`;
            await F(f);
        }
        let l;
        if (e._loadSnapshot) {
            let f = await e._loadSnapshot;
            ArrayBuffer.isView(f) ? l = f : l = new Uint8Array(f), n.noInitialRun = !0, n.INITIAL_MEMORY = l.length;
        }
        let c = await _createPyodideModule(n);
        if (n.exitCode !== void 0) throw new c.ExitStatus(n.exitCode);
        if (e.pyproxyToStringRepr && i.setPyProxyToStringMethod(!0), e.convertNullToNone && i.setCompatNullToNone(!0), i.version !== L && o.checkAPIVersion) throw new Error(`Pyodide version does not match: '${L}' <==> '${i.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);
        c.locateFile = (f)=>{
            throw f.endsWith(".so") ? new Error(`Failed to find dynamic library "${f}"`) : new Error(`Unexpected call to locateFile("${f}")`);
        };
        let u;
        l && (u = i.restoreSnapshot(l));
        let d = i.finalizeBootstrap(u, e._snapshotDeserializer);
        return i.sys.path.insert(0, ""), i._pyodide.set_excepthook(), await i.packageIndexReady, i.initializeStreams(o.stdin, o.stdout, o.stderr), d;
    };
    a(Fe, "loadPyodide");
})();
export { Fe as loadPyodide, L as version, __tla };
