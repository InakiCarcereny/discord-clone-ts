"use client";

import { useAuth } from "@/app/context/auth";

import { ReactNode, useEffect } from "react";

import { useRouter } from "next/navigation";

import { FriendsNav, HomeAside, ServerAside, User } from "./components";
import { Separator } from "@/app/components";
import { useHomeLayout } from "@/app/hooks/useHomeLayout";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { showHomeLayout, showUserCard } = useHomeLayout();

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

        {showHomeLayout && <HomeAside />}
      </div>

      <div className="flex flex-col gap-2 w-full h-full">
        {showHomeLayout && <FriendsNav />}
        {showHomeLayout && (
          <Separator className="border border-[#2b2c31] rounded-full" />
        )}
        <main>{children}</main>
      </div>

      {showUserCard ? null : <User />}
    </div>
  );
}
