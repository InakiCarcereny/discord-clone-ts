"use client";

import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import {
  loginRequest,
  registerRequest,
  verifyRequest,
} from "../interceptors/auth";

import { User, LoginRequest } from "../models/user";

import Cookies from "js-cookie";

export interface AuthContextType {
  user: User | null;
  error: string[] | null;
  loading: boolean;
  isAuthenticated: boolean;
  register: (data: User) => Promise<void>;
  login: (data: LoginRequest) => Promise<void>;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const register = async (data: User) => {
    try {
      const res = await registerRequest(data);
      console.log(res);
      setUser(res.data);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) {
        setError([err.message]);
      }
    }
  };

  const login = async (data: LoginRequest) => {
    try {
      const res = await loginRequest(data);
      console.log(res);
      setUser(res.data);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) {
        setError([err.message]);
      }
    }
  };

  useEffect(() => {
    async function getToken() {
      setLoading(true);

      const cookies = Cookies.get();

      if (!cookies) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyRequest(cookies.token);

        if (!res.data) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setLoading(false);
        }
      } catch (err: unknown) {
        setIsAuthenticated(false);
        if (err instanceof Error) {
          setError([err.message]);
        }
      } finally {
        setLoading(false);
      }
    }
    getToken();
  }, []);

  const logOut = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        register,
        login,
        logOut,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
