"use client";

import {
  createChannelRequest,
  deleteChannelRequest,
  getChannelsRequest,
} from "@/app/interceptors/channel";
import { AxiosError } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

import { Channel, Id } from "@/app/models/channel";

interface ChannelContextTypes {
  channels: Channel[];
  errors: string[];
  createChannel: (data: Channel, id: Id) => Promise<void>;
  deleteChannel: (data: Channel, id: Id) => Promise<void>;
  getChannels: (id: Id) => Promise<void>;
}

export const ChannelContext = createContext<ChannelContextTypes | null>(null);

export function useChannel() {
  const context = useContext(ChannelContext);

  if (!context) {
    throw new Error("useChannel must be used within a ChannelProvider");
  }

  return context;
}

export function ChannelProvider({ children }: { children: ReactNode }) {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  async function getChannels(id: Id) {
    try {
      const res = await getChannelsRequest(id);
      console.log(res);
      setChannels(res.data);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  }

  const createChannel = async (data: Channel, id: Id): Promise<void> => {
    try {
      const res = await createChannelRequest(data, id);
      console.log(res);
      setChannels((prevState: Channel[]): Channel[] => [
        ...prevState,
        res.data,
      ]);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const deleteChannel = async (data: Channel, id: Id) => {
    try {
      const res = await deleteChannelRequest(data, id);
      if (res.status === 200) {
        setChannels((prevState) =>
          prevState.filter((channel: Channel) => channel._id !== data._id)
        );
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  return (
    <ChannelContext.Provider
      value={{
        channels,
        errors,
        createChannel,
        deleteChannel,
        getChannels,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
