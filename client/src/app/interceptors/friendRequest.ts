import axios from "./axios";

export const getFriendRequestsRequest = async () =>
  axios.get(`/friend-request/friend-requests`);

export const getFriendRecipientRequestsRequest = async () =>
  axios.get(`/friend-request/friend-recipient-requests`);

export const addFriendRequest = async (sender: string, recipient: string) =>
  axios.post(`/friend-request/${sender}/friend-request/${recipient}`);

export const acceptFriendRequest = async (
  recipient: string,
  requestId: string
) =>
  axios.post(`/friend-request/${recipient}/accept-friend-request/${requestId}`);

export const rejectFriendRequest = async (
  recipient: string,
  requestId: string
) =>
  axios.post(`/friend-request/${recipient}/reject-friend-request/${requestId}`);

export const deleteFriendRequestRequest = async (
  sender: string,
  requestId: string
) =>
  axios.delete(`/friend-request/${sender}/delete-friend-request/${requestId}`);
