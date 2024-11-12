import axios from "./axios";

export const getFriendRequestsRequest = async () =>
  axios.get(`/friend-request/friend-requests`);

export const getFriendRecipientRequestsRequest = async () =>
  axios.get(`/friend-request/friend-recipient-requests`);

export const addFriendRequest = async (sender: string, recipient: string) =>
  axios.post(`/friend-request/${sender}/friend-request/${recipient}`);
