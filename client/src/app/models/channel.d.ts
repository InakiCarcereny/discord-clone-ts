export interface Channel {
  _id: string;
  name: string;
  server: string;
  type: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type Id = string;
