import { Separator } from "@/app/icons/Separator";
import { friendStates } from "@/app/consts/friendStates";
import { Greeting } from "@/app/icons/Greeting";
import Link from "next/link";
import { Tray } from "@/app/icons/Tray";

export function FriendsNav() {
  return (
    <header className="w-full flex items-center justify-between">
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
                className="text-gray-400 font-semibold hover:bg-[#2b2c31] px-2 py-1 rounded-[4px]"
              >
                <Link href={`/home/friends/${friend.id}`}>{friend.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <button className="bg-[#15803d] rounded-[4px] px-2 text-white font-semibold truncate">
          Add friend
        </button>
        <Separator className="text-gray-400" />
        <button className="text-gray-400 hover:text-white">
          <Tray className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
}
