import { Hono } from "hono";
import { listSessions, capture, sendKeys, selectWindow } from "../ssh";
import { getAggregatedSessions, findPeerForTarget, sendKeysToPeer } from "../peers";
import { processMirror } from "../commands/overview";

export const sessionsApi = new Hono();

sessionsApi.get("/sessions", async (c) => {
  const local = await listSessions();
  const aggregated = await getAggregatedSessions(local);
  return c.json(aggregated);
});

sessionsApi.get("/capture", async (c) => {
  const target = c.req.query("target");
  if (!target) return c.json({ error: "target required" }, 400);
  try {
    return c.json({ content: await capture(target) });
  } catch (e: any) {
    return c.json({ content: "", error: e.message });
  }
});

sessionsApi.get("/mirror", async (c) => {
  const target = c.req.query("target");
  if (!target) return c.text("target required", 400);
  const lines = +(c.req.query("lines") || "40");
  const raw = await capture(target);
  return c.text(processMirror(raw, lines));
});

sessionsApi.post("/send", async (c) => {
  const { target, text } = await c.req.json();
  if (!target || !text) return c.json({ error: "target and text required" }, 400);

  // Check if target is on a peer
  const local = await listSessions();
  const peerUrl = await findPeerForTarget(target, local);

  if (peerUrl) {
    // Route to peer
    const ok = await sendKeysToPeer(peerUrl, target, text);
    if (ok) return c.json({ ok: true, target, text, source: peerUrl });
    return c.json({ error: "Failed to send to peer", target, source: peerUrl }, 502);
  }

  // Send locally
  await sendKeys(target, text);
  return c.json({ ok: true, target, text, source: "local" });
});

sessionsApi.post("/select", async (c) => {
  const { target } = await c.req.json();
  if (!target) return c.json({ error: "target required" }, 400);
  await selectWindow(target);
  return c.json({ ok: true, target });
});
