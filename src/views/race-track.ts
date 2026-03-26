import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { MAW_ROOT } from "../paths";

export const raceTrackView = new Hono();

raceTrackView.get("/", serveStatic({ root: `${MAW_ROOT}/dist-race-track`, path: "/index.html" }));
raceTrackView.get("/*", serveStatic({
  root: MAW_ROOT,
  rewriteRequestPath: (p) => p.replace(/^\/race-track/, "/dist-race-track"),
}));
