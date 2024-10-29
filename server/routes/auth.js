import { Router } from "express";

import { isValidate } from "../middlewares/user.js";
import { registerSchema, loginSchema } from "../schemas/auth.js";

import { login, logout, register, verify } from "../controllers/auth.js";

const routes = Router();

routes.post("/register", isValidate(registerSchema), register);

routes.post("/login", isValidate(loginSchema), login);

routes.get("/verify", verify);

routes.post("/logout", logout);

export default routes;
