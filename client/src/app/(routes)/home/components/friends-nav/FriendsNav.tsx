"use client";

import { Separator } from "@/app/icons/Separator";
import { friendStates } from "@/app/consts/friendStates";
import { Greeting } from "@/app/icons/Greeting";
import Link from "next/link";
import { Tray } from "@/app/icons/Tray";

import { usePathname } from "next/navigation";

export function FriendsNav() {
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between px-6 pt-3">
      <nav>
        <ul className="flex items-center gap-3">
          <li className="flex items-center gap-2">
            <Greeting className="text-gray-400" />
            <span className="text-zinc-300 font-semibold ">Friends</span>
            <Separator className="text-gray-400" />
          </li>
          {friendStates.map((friend) => {
            return (
              <li
                key={friend.id}
                className={`font-semibold hover:bg-[#2b2c31] px-2 py-1 rounded-[4px] ${
                  pathname === friend.href
                    ? "bg-zinc-600 text-white"
                    : "text-gray-400"
                }`}
              >
                <Link href={friend.href}>{friend.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/home/addFriend">
          <button
            className={` rounded-[4px] px-2 font-semibold truncate ${
              pathname === "/home/addFriend"
                ? "text-green-500 bg-transparent"
                : "bg-[#15803d] text-white"
            }`}
          >
            Add friend
          </button>
        </Link>
        <Separator className="text-gray-400" />
        <button className="text-gray-400 hover:text-white">
          <Tray className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
}
