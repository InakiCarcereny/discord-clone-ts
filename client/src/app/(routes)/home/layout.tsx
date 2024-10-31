"use client";

import { useAuth } from "@/app/context/auth";

import { ReactNode, useEffect } from "react";

import { useRouter } from "next/navigation";

import { FriendsNav, HomeAside, ServerAside } from "./components";
import { Separator } from "@/app/components";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { loading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    }
  }, [loading, isAuthenticated, router]);

  return (
    <div className="w-screen h-screen flex bg-[#2f3136]">
      <div className="flex">
        <ServerAside />

        <HomeAside />
      </div>

      <div className="flex flex-col gap-2 px-6 py-3 w-full h-full">
        <FriendsNav />
        <Separator className="border border-[#2b2c31] rounded-full -mx-6" />
        <main>{children}</main>
      </div>

      <div></div>

      <div></div>
    </div>
  );
}
