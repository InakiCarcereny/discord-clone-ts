"use client";

import {
  getUserInfoRequest,
  updataUserInfoRequest,
} from "@/app/interceptors/userInfo";
import { AxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { UserInfo } from "@/app/models/userInfo";

interface UserContextTypes {
  userInfo: UserInfo | null;
  error: string[];
  updateUserInfo: (data: UserInfo) => Promise<void>;
}

export const UserInfoContext = createContext<UserContextTypes | null>(null);

export function useUserInfo() {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }

  return context;
}

export function UserInfoProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const res = await getUserInfoRequest();
        setUserInfo(res.data);
      } catch (err: unknown) {
        if (err instanceof AxiosError && err.response) {
          setError(err.response.data);
        }
      }
    }
    getUserInfo();
  }, []);

  const updateUserInfo = async (data: UserInfo) => {
    try {
      const res = await updataUserInfoRequest(data);
      console.log(res);
      setUserInfo(res.data);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError && err.response) {
        setError(err.response.data);
      }
    }
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, updateUserInfo, error }}>
      {children}
    </UserInfoContext.Provider>
  );
}
