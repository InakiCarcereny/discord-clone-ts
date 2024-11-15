"use client";

import {
  acceptFriendRequest,
  addFriendRequest,
  deleteFriendRequestRequest,
  getFriendRecipientRequestsRequest,
  getFriendRequestsRequest,
  rejectFriendRequest,
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
  acceptFriend: (recipient: string, requestId: string) => Promise<void>;
  rejectFriend: (recipient: string, requestId: string) => Promise<void>;
  deleteFriendRequest: (requestId: string) => Promise<void>;
}

export interface FriendRequest {
  _id: string;
  sender: string;
  recipient: string;
  status: string;
  createdAt: Date;
}

export const FriendRequestContext = createContext<
  FriendRequestContextType | undefined
>(undefined);

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

  const acceptFriend = async (recipient: string, requestId: string) => {
    try {
      const res = await acceptFriendRequest(recipient, requestId);
      setFriendRequest((prevState) => [...prevState, res.data]);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const rejectFriend = async (recipient: string, requestId: string) => {
    try {
      const res = await rejectFriendRequest(recipient, requestId);
      if (res.status === 200) {
        setFriendRequest((prevState) =>
          prevState.filter((friend: FriendRequest) => friend._id !== requestId)
        );
      }
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const deleteFriendRequest = async (sender: string, requestId: string) => {
    try {
      const res = await deleteFriendRequestRequest(sender, requestId);
      if (res.status === 200) {
        setFriendRequest((prevState) =>
          prevState.filter((friend: FriendRequest) => friend._id !== requestId)
        );
      }
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  return (
    <FriendRequestContext.Provider
      value={{
        friendRequest,
        recipientRequest,
        addFriend,
        errors,
        acceptFriend,
        rejectFriend,
        deleteFriendRequest,
      }}
    >
      {children}
    </FriendRequestContext.Provider>
  );
}
