import { Hono } from "hono";
import { getFederationStatus } from "../peers";

export const federationApi = new Hono();

federationApi.get("/federation/status", async (c) => {
  const status = await getFederationStatus();
  return c.json(status);
});
