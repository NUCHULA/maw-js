import type { Hono } from "hono";
import { officeView } from "./office";
import { federationView } from "./federation";
import { timemachineView } from "./timemachine";
import { demoView } from "./demo";

// NUCHULA: office view must stay — we serve maw-ui static from maw-js (:3456)
export function mountViews(app: Hono) {
  app.route("/", officeView);
  app.route("/demo", demoView);
  app.route("/timemachine", timemachineView);
  app.route("/federation", federationView);
}
