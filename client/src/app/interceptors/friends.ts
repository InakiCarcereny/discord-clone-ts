import axios from "./axios";

export const getFriendsRequest = async () => axios.get("/friends");

export const deleteFriendRequest = async (friendId: string) =>
  axios.delete(`/friends/${friendId}`);
