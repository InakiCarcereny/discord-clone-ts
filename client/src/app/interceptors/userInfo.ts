import axios from "./axios";

import { UserInfo } from "@/app/models/userInfo";

export const getUserInfoRequest = () => axios.get("/info");

export const updataUserInfoRequest = async (data: UserInfo) =>
  axios.put("/info", data);
