var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { D as r, a as s, b as a } from "./BqjX9efs.js";
class i {
  constructor(t) {
    __publicField(this, "tone");
    __publicField(this, "_bpm", r);
    __publicField(this, "_beatsPerBar", s[0]);
    __publicField(this, "_denominator", s[1]);
    __publicField(this, "ppq", a);
    this.tone = t, this.tone.getTransport().bpm.value = this._bpm;
  }
  get seconds() {
    return this.tone.getTransport().seconds;
  }
  get ticks() {
    return this.tone.getTransport().ticks;
  }
  get bpm() {
    return this._bpm;
  }
  get isPlaying() {
    return this.tone.getTransport().state === "started";
  }
  get ticksPerBeat() {
    return this.ppq * (4 / this._denominator);
  }
  get bar() {
    const t = Math.floor(this.ticks / this.ticksPerBeat);
    return Math.floor(t / this._beatsPerBar);
  }
  get beat() {
    return Math.floor(this.ticks / this.ticksPerBeat) % this._beatsPerBar;
  }
  get phase() {
    return this.ticks % this.ticksPerBeat / this.ticksPerBeat;
  }
  get beatsPerBar() {
    return this._beatsPerBar;
  }
  get denominator() {
    return this._denominator;
  }
  async play() {
    await this.tone.start(), this.tone.getTransport().start();
  }
  pause() {
    this.tone.getTransport().pause();
  }
  stop() {
    this.tone.getTransport().stop(), this.tone.getTransport().seconds = 0;
  }
  seek(t) {
    this.tone.getTransport().seconds = Math.max(0, t);
  }
  setBpm(t) {
    this._bpm = t, this.tone.getTransport().bpm.value = t;
  }
  setTimeSignature(t, e = 4) {
    this._beatsPerBar = Math.max(1, Math.floor(t)), this._denominator = Math.max(1, Math.floor(e)), this.tone.getTransport().timeSignature = [this._beatsPerBar, this._denominator];
  }
  async setDspEnabled(t) {
    const e = this.tone.getContext().rawContext;
    t ? await e.resume() : await e.suspend();
  }
}
export {
  i as ToneTransport
};
