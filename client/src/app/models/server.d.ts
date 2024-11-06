import { Logo } from "../models/logo";

export interface Server {
  _id: ServerId;
  tittle: string;
  logo: Logo;
  user: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ServerId = string;
