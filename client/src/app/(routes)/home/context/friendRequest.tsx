"use client";

import {
  addFriendRequest,
  getFriendRecipientRequestsRequest,
  getFriendRequestsRequest,
} from "@/app/interceptors/friendRequest";
import { AxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface FriendRequestContextType {
  friendRequest: FriendRequest[];
  recipientRequest: FriendRequest[];
  errors: string[];
  addFriend: (sender: string, recipient: string) => Promise<void>;
}

export interface FriendRequest {
  _id: string;
  sender: string;
  recipient: string;
  status: string;
  createdAt: Date;
}

export const FriendRequestContext =
  createContext<FriendRequestContextType | null>(null);

export function useFriendRequest() {
  const context = useContext(FriendRequestContext);

  if (!context) {
    throw new Error(
      "useFriendRequest must be used within a FriendRequestProvider"
    );
  }

  return context;
}

export function FriendRequestProvider({ children }: { children: ReactNode }) {
  const [friendRequest, setFriendRequest] = useState<FriendRequest[]>([]);
  const [recipientRequest, setRecipientRequest] = useState<FriendRequest[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    async function getFriendRequests() {
      try {
        const res = await getFriendRequestsRequest();
        setFriendRequest(res.data);
      } catch (err: unknown) {
        if (err instanceof AxiosError && err.response) {
          setErrors(err.response.data);
        }
      }
    }
    getFriendRequests();
  }, []);

  useEffect(() => {
    async function getFriendRecipientRequests() {
      try {
        const res = await getFriendRecipientRequestsRequest();
        setRecipientRequest(res.data);
      } catch (err: unknown) {
        if (err instanceof AxiosError && err.response) {
          setErrors(err.response.data);
        }
      }
    }
    getFriendRecipientRequests();
  }, []);

  const addFriend = async (sender: string, recipient: string) => {
    try {
      const res = await addFriendRequest(sender, recipient);
      setFriendRequest((prevState) => [...prevState, res.data]);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  // const acceptFriend = async (recipient: string, requestId: string) => {
  //   try {
  //     const res = await acceptFriendRequest(recipient, requestId);
  //   } catch (err: unknown) {
  //     if (err instanceof AxiosError && err.response) {
  //       setErrors(err.response.data);
  //     }
  //   }
  // };

  return (
    <FriendRequestContext.Provider
      value={{
        friendRequest,
        recipientRequest,
        addFriend,
        errors,
      }}
    >
      {children}
    </FriendRequestContext.Provider>
  );
}
