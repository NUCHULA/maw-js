import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { MAW_ROOT } from "../paths";

export const warRoomView = new Hono();

warRoomView.get("/", serveStatic({ root: `${MAW_ROOT}/dist-war-room`, path: "/index.html" }));
warRoomView.get("/*", serveStatic({
  root: MAW_ROOT,
  rewriteRequestPath: (p) => p.replace(/^\/war-room/, "/dist-war-room"),
}));
