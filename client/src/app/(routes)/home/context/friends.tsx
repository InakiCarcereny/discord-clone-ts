"use client";

import {
  deleteFriendRequest,
  getFriendsRequest,
} from "@/app/interceptors/friends";
import { AxiosError } from "axios";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface FriendsContextType {
  friends: Friends[];
  errors: string[];
  deleteFriend: (friendId: string) => Promise<void>;
}

interface Friends {
  _id: string;
  user1: string;
  user2: string;
  createdAt: Date;
}

export const FriendsContext = createContext<FriendsContextType | undefined>(
  undefined
);

export function useFriends() {
  const context = useContext(FriendsContext);

  if (context === undefined) {
    throw new Error("useFriends must be used within a FriendsProvider");
  }

  return context;
}

export function FriendsProvider({ children }: { children: ReactNode }) {
  const [friends, setFriends] = useState<Friends[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    async function getFriends() {
      try {
        const res = await getFriendsRequest();
        setFriends(res.data);
      } catch (err: unknown) {
        if (err instanceof AxiosError && err.response) {
          setErrors(err.response.data);
        }
      }
    }
    getFriends();
  }, []);

  const deleteFriend = async (friendId: string) => {
    try {
      const res = await deleteFriendRequest(friendId);
      if (res.status === 200) {
        setFriends((prevState) =>
          prevState.filter((friend: Friends) => friend._id !== friendId)
        );
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  return (
    <FriendsContext.Provider value={{ friends, errors, deleteFriend }}>
      {children}
    </FriendsContext.Provider>
  );
}
