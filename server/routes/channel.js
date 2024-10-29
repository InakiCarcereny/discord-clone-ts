import { Router } from "express";

import {
  getChannel,
  getChannels,
  createChannel,
  updateChannel,
  deleteChannel,
} from "../controllers/channel.js";

import { channelSchema } from "../schemas/channel.js";

import { isValidate } from "../middlewares/user.js";

const routes = Router();

routes.get("/:id/channel/:id", getChannel);

routes.get("/:id/channel", getChannels);

routes.post("/:id/channel", isValidate(channelSchema), createChannel);

routes.put("/:id/channel/:id", isValidate(channelSchema), updateChannel);

routes.delete("/:id/channel/:id", deleteChannel);

export default routes;
