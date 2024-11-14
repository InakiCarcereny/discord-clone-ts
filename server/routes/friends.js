import { Router } from "express";

import { getFriends, deleteFriend } from "../controllers/friends.js";

const routes = Router();

routes.get("/", getFriends);

routes.delete("/:id", deleteFriend);

export default routes;
