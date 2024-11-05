import axios from "./axios";

import { Server, ServerId } from "@/app/models/server";

export const getServersRequest = async () => axios.get("/server");

export const createServerRequest = async (data: Server) =>
  axios.post("/server", data);

export const deleteServerRequest = async (id: ServerId) =>
  axios.delete(`/server/${id}`);

export const updateServerRequest = async (data: Server, id: ServerId) =>
  axios.put(`/server/${id}`, data);
