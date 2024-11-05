import axios from "./axios";

import { Event, Id } from "@/app/models/event";

export const getEventsRequest = async (serverId: Id) =>
  axios.get(`/server/${serverId}/event`);

export const createEventRequest = async (data: Event, serverId: Id) =>
  axios.post(`/server/${serverId}/event`, data._id);

export const updateEventRequest = async (data: Event, serverId: Id) =>
  axios.put(`/server/${serverId}/event/${data._id}`, data);

export const deleteEventRequest = async (data: Event, serverId: Id) =>
  axios.delete(`/server/${serverId}/event/${data}`);
