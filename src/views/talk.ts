import { Hono } from "hono";
import { readFileSync } from "fs";
import { join, dirname } from "path";

const MAW_ROOT = join(dirname(new URL(import.meta.url).pathname), "../..");

export const talkView = new Hono();

// /talk and /talk/:oracle both serve same page (oracle detected from URL in JS)
talkView.get("/", (c) => {
  const html = readFileSync(join(MAW_ROOT, "office/talk.html"), "utf-8");
  return c.html(html);
});
talkView.get("/:oracle", (c) => {
  const html = readFileSync(join(MAW_ROOT, "office/talk.html"), "utf-8");
  return c.html(html);
});
