import { Router } from "express";

import {
  getEvent,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.js";

import { EventSchema } from "../schemas/event.js";

import { isValidate } from "../middlewares/user.js";

const routes = Router();

routes.get("/:id/event/:id", getEvent);

routes.get("/:id/event", getEvents);

routes.post("/:id/event", isValidate(EventSchema), createEvent);

routes.put("/:id/event/:id", isValidate(EventSchema), updateEvent);

routes.delete("/:id/event/:id", deleteEvent);

export default routes;
