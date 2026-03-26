import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { MAW_ROOT } from "../paths";

export const supermanView = new Hono();

supermanView.get("/", serveStatic({ root: `${MAW_ROOT}/dist-superman`, path: "/index.html" }));
supermanView.get("/*", serveStatic({
  root: MAW_ROOT,
  rewriteRequestPath: (p) => p.replace(/^\/superman/, "/dist-superman"),
}));
