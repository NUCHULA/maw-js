import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { MAW_ROOT } from "../paths";

export const patchiesView = new Hono();

patchiesView.get("/assets/*", serveStatic({ root: `${MAW_ROOT}/ui/patchies` }));
patchiesView.get("/favicon.svg", serveStatic({ root: `${MAW_ROOT}/ui/patchies`, path: "/favicon.svg" }));
patchiesView.get("/*", serveStatic({ root: `${MAW_ROOT}/ui/patchies`, path: "/index.html" }));
