import type { Hono } from "hono";
import { officeView } from "./office";
import { bitView } from "./8bit";
import { warRoomView } from "./war-room";
import { raceTrackView } from "./race-track";
import { supermanView } from "./superman";

export function mountViews(app: Hono) {
  app.route("/office-8bit", bitView);
  app.route("/war-room", warRoomView);
  app.route("/race-track", raceTrackView);
  app.route("/superman", supermanView);
  // office must be last (catches /)
  app.route("/", officeView);
}
