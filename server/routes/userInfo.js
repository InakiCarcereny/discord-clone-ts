import { Router } from "express";

import { getUserInfo, updateInfo } from "../controllers/userInfo.js";

import upload from "../middlewares/upload.js";
import { isValidate } from "../middlewares/user.js";

import { userInfoSchema } from "../schemas/userInfo.js";

const routes = Router();

routes.get("/", getUserInfo);

routes.put(
  "/",
  upload.fields([{ name: "avatar" }, { name: "banner" }]),
  isValidate(userInfoSchema),
  updateInfo
);

export default routes;
