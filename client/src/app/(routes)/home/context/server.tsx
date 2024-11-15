"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Server, ServerId } from "@/app/models/server";

import {
  createServerRequest,
  deleteServerRequest,
  getServerRequest,
  getServersRequest,
  updateServerRequest,
} from "@/app/interceptors/server";
import { AxiosError, AxiosResponse } from "axios";

interface ServerContextType {
  server: Server[];
  errors: string[];
  showMembers: boolean;
  deleteServer: (data: ServerId) => Promise<void>;
  createServer: (data: Server) => Promise<void>;
  updateServer: (data: Server, serverId: ServerId) => Promise<void>;
  toggleMembers: () => void;
  isOwner: (serverId: ServerId) => Promise<AxiosResponse<Server> | undefined>;
}

export const ServerContext = createContext<ServerContextType | undefined>(
  undefined
);

export function useServer() {
  const context = useContext(ServerContext);

  if (!context) {
    throw new Error("useServer must be used within a ServerProvider");
  }

  return context;
}

export function ServerProvider({ children }: { children: ReactNode }) {
  const [server, setServer] = useState<Server[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [showMembers, setShowMembers] = useState<boolean>(true);

  const toggleMembers = () => {
    setShowMembers((prevState) => !prevState);
  };

  useEffect(() => {
    async function getServers() {
      try {
        const res = await getServersRequest();
        setServer(res.data);
      } catch (err: unknown) {
        if (err instanceof AxiosError && err.response) {
          setErrors(err.response.data);
        }
      }
    }
    getServers();
  }, []);

  const createServer = async (data: Server) => {
    try {
      const res = await createServerRequest(data);
      console.log(res);
      setServer((prevState) => [...prevState, res.data]);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const deleteServer = async (data: ServerId) => {
    try {
      const res = await deleteServerRequest(data);
      if (res.status === 200) {
        setServer((prevState) =>
          prevState.filter((server) => server._id !== data)
        );
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const updateServer = async (data: Server, serverId: string) => {
    try {
      await updateServerRequest(data, serverId);
      setServer((prevState) =>
        prevState.map((server) => (server._id === data._id ? data : server))
      );
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const isOwner = async (
    serverId: string
  ): Promise<AxiosResponse<Server> | undefined> => {
    try {
      const res = await getServerRequest(serverId);
      return res;
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <ServerContext.Provider
      value={{
        server,
        errors,
        deleteServer,
        createServer,
        updateServer,
        isOwner,
        showMembers,
        toggleMembers,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
}
