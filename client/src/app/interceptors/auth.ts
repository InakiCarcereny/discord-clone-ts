import axios from "./axios";

import { User, LoginRequest, Token } from "../models/user";

export const registerRequest = async (data: User) =>
  axios.post("/auth/register", data);

export const loginRequest = async (data: LoginRequest) =>
  axios.post("/auth/login", data);

export const verifyRequest = async (token?: Token) => {
  return axios.get(`/auth/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
