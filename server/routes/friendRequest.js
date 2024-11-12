import { Router } from "express";

import {
  createRequest,
  acceptRequest,
  rejectRequest,
  getFriendRequests,
  getFriendRecipientRequests,
} from "../controllers/friendRequest.js";

const routes = Router();

routes.get("/friend-requests", getFriendRequests);
routes.get("/friend-recipient-requests", getFriendRecipientRequests);

routes.post(
  "/:senderUsername/friend-request/:recipientUsername",
  createRequest
);

routes.post("/:id/accept-friend-request/:requestId", acceptRequest);

routes.post("/reject-friend-request/:requestId", rejectRequest);

export default routes;
