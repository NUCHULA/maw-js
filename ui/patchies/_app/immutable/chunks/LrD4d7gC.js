class I {
  constructor() {
    this.resolve = void 0, this.reject = void 0, this.promise = new Promise((e, a) => {
      this.resolve = e, this.reject = a;
    });
  }
  async value() {
    return await this.promise;
  }
}
function R(t, e, a) {
  const s = new XMLHttpRequest();
  s.open("GET", t, true), s.responseType = "arraybuffer", s.onload = () => {
    s.status == 200 || s.status == 0 && s.response ? e(s.response) : a();
  }, s.onerror = a, s.send(null);
}
function _(t, e, a) {
  R(t, (s) => {
    e(new Uint8Array(s));
  }, () => {
    if (a) a();
    else throw new Error(`Loading data file ${t} failed.`);
  });
}
async function D(t) {
  const e = t.map((a) => new Promise((s, l) => {
    _(a.serverFilename, (n) => {
      s({ filename: a.virtualFilename, data: n });
    }, () => {
      console.error(`Error fetching file: ${a.serverFilename}`);
    });
  }));
  return await Promise.all(e);
}
async function k(t) {
  return new Promise((e, a) => {
    _(t + "webchuck.wasm", e, a);
  });
}
const u = ["ck", "txt", "csv", "json", "xml", "html", "js"];
function b(t) {
  const e = t.split(".").pop();
  return u.includes(e);
}
const E = () => new I();
var r;
(function(t) {
  t.CREATE_FILE = "createFile", t.CREATE_DIRECTORY = "createDirectory", t.RUN_CODE = "runChuckCode", t.RUN_CODE_WITH_REPLACEMENT_DAC = "runChuckCodeWithReplacementDac", t.REPLACE_CODE = "replaceChuckCode", t.REPLACE_CODE_WITH_REPLACEMENT_DAC = "replaceChuckCodeWithReplacementDac", t.REMOVE_LAST_CODE = "removeLastCode", t.RUN_FILE = "runChuckFile", t.RUN_FILE_WITH_REPLACEMENT_DAC = "runChuckFileWithReplacementDac", t.RUN_FILE_WITH_ARGS = "runChuckFileWithArgs", t.REPLACE_FILE = "replaceChuckFile", t.REPLACE_FILE_WITH_REPLACEMENT_DAC = "replaceChuckFileWithReplacementDac", t.REPLACE_FILE_WITH_ARGS = "replaceChuckFileWithArgs", t.REMOVE_SHRED = "removeShred", t.IS_SHRED_ACTIVE = "isShredActive", t.SIGNAL_EVENT = "signalChuckEvent", t.BROADCAST_EVENT = "broadcastChuckEvent", t.LISTEN_FOR_EVENT_ONCE = "listenForChuckEventOnce", t.START_LISTENING_FOR_EVENT = "startListeningForChuckEvent", t.STOP_LISTENING_FOR_EVENT = "stopListeningForChuckEvent", t.SET_INT = "setChuckInt", t.GET_INT = "getChuckInt", t.SET_FLOAT = "setChuckFloat", t.GET_FLOAT = "getChuckFloat", t.SET_STRING = "setChuckString", t.GET_STRING = "getChuckString", t.SET_INT_ARRAY = "setGlobalIntArray", t.GET_INT_ARRAY = "getGlobalIntArray", t.SET_INT_ARRAY_VALUE = "setGlobalIntArrayValue", t.GET_INT_ARRAY_VALUE = "getGlobalIntArrayValue", t.SET_ASSOCIATIVE_INT_ARRAY_VALUE = "setGlobalAssociativeIntArrayValue", t.GET_ASSOCIATIVE_INT_ARRAY_VALUE = "getGlobalAssociativeIntArrayValue", t.SET_FLOAT_ARRAY = "setGlobalFloatArray", t.GET_FLOAT_ARRAY = "getGlobalFloatArray", t.SET_FLOAT_ARRAY_VALUE = "setGlobalFloatArrayValue", t.GET_FLOAT_ARRAY_VALUE = "getGlobalFloatArrayValue", t.SET_ASSOCIATIVE_FLOAT_ARRAY_VALUE = "setGlobalAssociativeFloatArrayValue", t.GET_ASSOCIATIVE_FLOAT_ARRAY_VALUE = "getGlobalAssociativeFloatArrayValue", t.SET_PARAM_INT = "setParamInt", t.GET_PARAM_INT = "getParamInt", t.SET_PARAM_FLOAT = "setParamFloat", t.GET_PARAM_FLOAT = "getParamFloat", t.SET_PARAM_STRING = "setParamString", t.GET_PARAM_STRING = "getParamString", t.GET_CHUCK_NOW = "getChuckNow", t.CLEAR_INSTANCE = "clearChuckInstance", t.CLEAR_GLOBALS = "clearGlobals";
})(r || (r = {}));
var c;
(function(t) {
  t.INIT_DONE = "initCallback", t.PRINT = "console print", t.EVENT = "eventCallback", t.INT = "intCallback", t.FLOAT = "floatCallback", t.STRING = "stringCallback", t.INT_ARRAY = "intArrayCallback", t.FLOAT_ARRAY = "floatArrayCallback", t.NEW_SHRED = "newShredCallback", t.REPLACED_SHRED = "replacedShredCallback", t.REMOVED_SHRED = "removedShredCallback";
})(c || (c = {}));
class i extends window.AudioWorkletNode {
  constructor(e, a, s, l = 2) {
    super(a, "chuck-node", { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [l], processorOptions: { chuckID: i.chuckID, srate: a.sampleRate, preloadedFiles: e, wasm: s } }), this.deferredPromises = {}, this.deferredPromiseCounter = 0, this.eventCallbacks = {}, this.eventCallbackCounter = 0, this.isReady = E(), this.chugins = [], this.port.onmessage = this.receiveMessage.bind(this), this.onprocessorerror = (n) => console.error(n), i.chuckID++;
  }
  static async init(e, a, s = 2, l = "https://chuck.stanford.edu/webchuck/src/") {
    let n = false;
    a === void 0 && (a = new AudioContext(), n = true), e = e.concat(i.chuginsToLoad);
    const [d, f, h] = await Promise.all([k(l), a.audioWorklet.addModule(l + "webchuck.js"), D(e)]), o = new i(h, a, d, s);
    return o.chugins = i.chuginsToLoad.map((T) => T.virtualFilename.split("/").pop()), i.chuginsToLoad = [], n && o.connect(a.destination), a.destination.channelCount = s, await o.isReady.promise, o;
  }
  nextDeferID() {
    const e = this.deferredPromiseCounter++;
    return this.deferredPromises[e] = E(), e;
  }
  createFile(e, a, s) {
    this.sendMessage(r.CREATE_FILE, { directory: e, filename: a, data: s });
  }
  createDirectory(e, a) {
    this.sendMessage(r.CREATE_DIRECTORY, { parent: e, name: a });
  }
  async loadFile(e) {
    const a = e.split("/").pop(), s = b(a);
    return fetch(e).then((l) => s ? l.text() : l.arrayBuffer()).then((l) => {
      s ? this.createFile("", a, l) : this.createFile("", a, new Uint8Array(l));
    }).catch((l) => {
      throw new Error(l);
    });
  }
  static loadChugin(e) {
    i.chuginsToLoad.push({ serverFilename: e, virtualFilename: "/chugins/" + e.split("/").pop() });
  }
  loadedChugins() {
    return this.chugins;
  }
  runCode(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.RUN_CODE, { callback: a, code: e }), this.deferredPromises[a].value();
  }
  runCodeWithReplacementDac(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.RUN_CODE_WITH_REPLACEMENT_DAC, { callback: s, code: e, dac_name: a }), this.deferredPromises[s].value();
  }
  replaceCode(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.REPLACE_CODE, { callback: a, code: e }), this.deferredPromises[a].value();
  }
  replaceCodeWithReplacementDac(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.REPLACE_CODE_WITH_REPLACEMENT_DAC, { callback: s, code: e, dac_name: a }), this.deferredPromises[s].value();
  }
  removeLastCode() {
    const e = this.nextDeferID();
    return this.sendMessage(r.REMOVE_LAST_CODE, { callback: e }), this.deferredPromises[e].value();
  }
  runFile(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.RUN_FILE, { callback: a, filename: e }), this.deferredPromises[a].value();
  }
  runFileWithReplacementDac(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.RUN_FILE_WITH_REPLACEMENT_DAC, { callback: s, dac_name: a, filename: e }), this.deferredPromises[s].value();
  }
  runFileWithArgs(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.RUN_FILE_WITH_ARGS, { callback: s, colon_separated_args: a, filename: e }), this.deferredPromises[s].value();
  }
  runFileWithArgsWithReplacementDac(e, a, s) {
    const l = this.nextDeferID();
    return this.sendMessage(r.RUN_FILE_WITH_ARGS, { callback: l, colon_separated_args: a, dac_name: s, filename: e }), this.deferredPromises[l].value();
  }
  replaceFile(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.REPLACE_FILE, { callback: a, filename: e }), this.deferredPromises[a].value();
  }
  replaceFileWithReplacementDac(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.REPLACE_FILE_WITH_REPLACEMENT_DAC, { callback: s, dac_name: a, filename: e }), this.deferredPromises[s].value();
  }
  replaceFileWithArgs(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.REPLACE_FILE_WITH_ARGS, { callback: s, colon_separated_args: a, filename: e }), this.deferredPromises[s].value();
  }
  replaceFileWithArgsWithReplacementDac(e, a, s) {
    const l = this.nextDeferID();
    return this.sendMessage(r.REPLACE_FILE_WITH_ARGS, { callback: l, colon_separated_args: a, dac_name: s, filename: e }), this.deferredPromises[l].value();
  }
  removeShred(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.REMOVE_SHRED, { shred: e, callback: a }), this.deferredPromises[a].value();
  }
  isShredActive(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.IS_SHRED_ACTIVE, { shred: e, callback: a }), this.deferredPromises[a].value();
  }
  signalEvent(e) {
    this.sendMessage(r.SIGNAL_EVENT, { variable: e });
  }
  broadcastEvent(e) {
    this.sendMessage(r.BROADCAST_EVENT, { variable: e });
  }
  listenForEventOnce(e, a) {
    const s = this.eventCallbackCounter++;
    this.eventCallbacks[s] = a, this.sendMessage(r.LISTEN_FOR_EVENT_ONCE, { variable: e, callback: s });
  }
  startListeningForEvent(e, a) {
    const s = this.eventCallbackCounter++;
    return this.eventCallbacks[s] = a, this.sendMessage(r.START_LISTENING_FOR_EVENT, { variable: e, callback: s }), s;
  }
  stopListeningForEvent(e, a) {
    this.sendMessage(r.STOP_LISTENING_FOR_EVENT, { variable: e, callback: a });
  }
  setInt(e, a) {
    this.sendMessage(r.SET_INT, { variable: e, value: a });
  }
  getInt(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.GET_INT, { variable: e, callback: a }), this.deferredPromises[a].value();
  }
  setFloat(e, a) {
    this.sendMessage(r.SET_FLOAT, { variable: e, value: a });
  }
  getFloat(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.GET_FLOAT, { variable: e, callback: a }), this.deferredPromises[a].value();
  }
  setString(e, a) {
    this.sendMessage(r.SET_STRING, { variable: e, value: a });
  }
  getString(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.GET_STRING, { variable: e, callback: a }), this.deferredPromises[a].value();
  }
  setIntArray(e, a) {
    this.sendMessage(r.SET_INT_ARRAY, { variable: e, values: a });
  }
  getIntArray(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.GET_INT_ARRAY, { variable: e, callback: a }), this.deferredPromises[a].value();
  }
  setIntArrayValue(e, a, s) {
    this.sendMessage(r.SET_INT_ARRAY_VALUE, { variable: e, index: a, value: s });
  }
  getIntArrayValue(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.GET_INT_ARRAY_VALUE, { variable: e, index: a, callback: s }), this.deferredPromises[s].value();
  }
  setAssociativeIntArrayValue(e, a, s) {
    this.sendMessage(r.SET_ASSOCIATIVE_INT_ARRAY_VALUE, { variable: e, key: a, value: s });
  }
  getAssociativeIntArrayValue(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.GET_ASSOCIATIVE_INT_ARRAY_VALUE, { variable: e, key: a, callback: s }), this.deferredPromises[s].value();
  }
  setFloatArray(e, a) {
    this.sendMessage(r.SET_FLOAT_ARRAY, { variable: e, values: a });
  }
  getFloatArray(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.GET_FLOAT_ARRAY, { variable: e, callback: a }), this.deferredPromises[a].value();
  }
  setFloatArrayValue(e, a, s) {
    this.sendMessage(r.SET_FLOAT_ARRAY_VALUE, { variable: e, index: a, value: s });
  }
  getFloatArrayValue(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.GET_FLOAT_ARRAY_VALUE, { variable: e, index: a, callback: s }), this.deferredPromises[s].value();
  }
  setAssociativeFloatArrayValue(e, a, s) {
    this.sendMessage(r.SET_ASSOCIATIVE_FLOAT_ARRAY_VALUE, { variable: e, key: a, value: s });
  }
  getAssociativeFloatArrayValue(e, a) {
    const s = this.nextDeferID();
    return this.sendMessage(r.GET_ASSOCIATIVE_FLOAT_ARRAY_VALUE, { variable: e, key: a, callback: s }), this.deferredPromises[s].value();
  }
  setParamInt(e, a) {
    this.sendMessage(r.SET_PARAM_INT, { name: e, value: a });
  }
  getParamInt(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.GET_PARAM_INT, { name: e, callback: a }), this.deferredPromises[a].value();
  }
  setParamFloat(e, a) {
    this.sendMessage(r.SET_PARAM_FLOAT, { name: e, value: a });
  }
  getParamFloat(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.GET_PARAM_FLOAT, { name: e, callback: a }), this.deferredPromises[a].value();
  }
  setParamString(e, a) {
    this.sendMessage(r.SET_PARAM_STRING, { name: e, value: a });
  }
  getParamString(e) {
    const a = this.nextDeferID();
    return this.sendMessage(r.GET_PARAM_STRING, { name: e, callback: a }), this.deferredPromises[a].value();
  }
  now() {
    const e = this.nextDeferID();
    return this.sendMessage(r.GET_CHUCK_NOW, { callback: e }), this.deferredPromises[e].value();
  }
  clearChuckInstance() {
    this.sendMessage(r.CLEAR_INSTANCE);
  }
  clearGlobals() {
    this.sendMessage(r.CLEAR_GLOBALS);
  }
  chuckPrint(e) {
    console.log(e);
  }
  sendMessage(e, a) {
    const s = a ? { type: e, ...a } : { type: e };
    this.port.postMessage(s);
  }
  receiveMessage(e) {
    switch (e.data.type) {
      case c.INIT_DONE:
        this.isReady && this.isReady.resolve && this.isReady.resolve();
        break;
      case c.PRINT:
        this.chuckPrint(e.data.message);
        break;
      case c.EVENT:
        if (e.data.callback in this.eventCallbacks) {
          const s = this.eventCallbacks[e.data.callback];
          s();
        }
        break;
      case c.INT:
      case c.FLOAT:
      case c.STRING:
      case c.INT_ARRAY:
      case c.FLOAT_ARRAY:
        if (e.data.callback in this.deferredPromises) {
          const s = this.deferredPromises[e.data.callback];
          s.resolve && s.resolve(e.data.result), delete this.deferredPromises[e.data.callback];
        }
        break;
      case c.NEW_SHRED:
        if (e.data.callback in this.deferredPromises) {
          const s = this.deferredPromises[e.data.callback];
          e.data.shred > 0 ? s.resolve && s.resolve(e.data.shred) : s.reject && s.reject("Running code failed");
        }
        break;
      case c.REPLACED_SHRED:
        if (e.data.callback in this.deferredPromises) {
          const s = this.deferredPromises[e.data.callback];
          e.data.newShred > 0 ? s.resolve && s.resolve({ newShred: e.data.newShred, oldShred: e.data.oldShred }) : s.reject && s.reject("Replacing code failed");
        }
        break;
      case c.REMOVED_SHRED:
        if (e.data.callback in this.deferredPromises) {
          const s = this.deferredPromises[e.data.callback];
          e.data.shred > 0 ? s.resolve && s.resolve(e.data.shred) : s.reject && s.reject("Removing code failed");
        }
        break;
    }
  }
}
i.chuckID = 1;
i.chuginsToLoad = [];
var A;
(function(t) {
  t[t.BUTTON_DOWN = 1] = "BUTTON_DOWN", t[t.BUTTON_UP = 2] = "BUTTON_UP", t[t.MOUSE_MOTION = 5] = "MOUSE_MOTION", t[t.WHEEL_MOTION = 6] = "WHEEL_MOTION";
})(A || (A = {}));
export {
  i as Chuck,
  I as DeferredPromise
};
