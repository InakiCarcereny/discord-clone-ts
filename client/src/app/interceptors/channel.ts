import axios from "./axios";

import { Channel, Id } from "@/app/models/channel";

export const getChannelsRequest = async (serverId: Id) =>
  axios.get(`/server/${serverId}/channel`);

export const createChannelRequest = async (data: Channel, serverId: Id) =>
  axios.post(`/server/${serverId}/channel`, data);

export const updateChannelRequest = async (data: Channel, serverId: Id) =>
  axios.put(`/server/${serverId}/channel/${data._id}`, data);

export const deleteChannelRequest = async (data: Channel, serverId: Id) =>
  axios.delete(`/server/${serverId}/channel/${data._id}`);
