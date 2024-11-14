"use client";

import { Search } from "@/app/icons/Search";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Message } from "@/app/icons/Message";
import { Trash } from "@/app/icons/Trash";
import { useAuth } from "@/app/context/auth";
import { useFriends } from "./context/friends";

export default function Home() {
  const { friends, deleteFriend } = useFriends();

  const { user } = useAuth();

  return (
    <div className="mx-10 mt-1 flex flex-col gap-8">
      <header className="flex items-center justify-between w-full bg-zinc-900 text-gray-300 rounded-[4px] px-4 py-2">
        <input
          type="search"
          className="focus:outline-none text-sm placeholder:text-zinc-600 w-full bg-transparent"
          placeholder="Search"
        />
        <Search className="text-white h-6 w-6" />
      </header>

      <section className="flex flex-col gap-2">
        <h3 className="font-semibold text-sm text-zinc-300">
          ONLINE - {friends.length}
        </h3>
        <Table>
          <TableBody>
            {friends.map((friend) => (
              <TableRow
                key={friend._id}
                className="flex items-center justify-between hover:rounded-[4px] hover:bg-[#2b2c31] border-t border-zinc-600 relative"
              >
                <TableCell className="font-semibold text-white flex items-center gap-2">
                  {friend.user1 === user?.id ? friend.user2 : friend.user1}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <button className="rounded-full flex items-center justify-center bg-zinc-800/60 px-2 py-2 text-gray-400 hover:text-white">
                    <Message className="h-6 w-6" />
                  </button>

                  <button
                    onClick={() => deleteFriend(friend._id)}
                    className="rounded-full flex items-center justify-center bg-zinc-800/60 px-2 py-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash className="h-6 w-6" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
