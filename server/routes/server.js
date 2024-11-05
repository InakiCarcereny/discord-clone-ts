import { Router } from "express";

import {
  getServer,
  getServers,
  createServer,
  updateServer,
  deleteServer,
} from "../controllers/server.js";

import upload from "../middlewares/upload.js";
import { isValidate } from "../middlewares/user.js";

import { serverSchema } from "../schemas/server.js";

const routes = Router();

routes.get("/:id", getServer);

routes.get("/", getServers);

routes.post("/", upload.single("logo"), isValidate(serverSchema), createServer);

routes.put(
  "/:id",
  upload.single("logo"),
  isValidate(serverSchema),
  updateServer
);

routes.delete("/:id", deleteServer);

export default routes;
