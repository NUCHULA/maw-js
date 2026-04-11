import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { MAW_ROOT } from "../paths";

export const officeView = new Hono();

officeView.get("/assets/*", serveStatic({ root: `${MAW_ROOT}/ui/office` }));
officeView.get("/favicon.svg", serveStatic({ root: `${MAW_ROOT}/ui/office`, path: "/favicon.svg" }));
officeView.get("/*", serveStatic({ root: `${MAW_ROOT}/ui/office`, path: "/index.html" }));
