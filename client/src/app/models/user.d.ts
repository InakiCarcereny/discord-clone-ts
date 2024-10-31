export interface User {
  _id?: string;
  username: string;
  email: string;
  name: string;
  day: string;
  month: string;
  year: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type LoginRequest = Pick<User, "username" | "password">;

export type Token = string;
