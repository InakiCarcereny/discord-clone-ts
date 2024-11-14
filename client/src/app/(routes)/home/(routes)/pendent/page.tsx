"use client";

import { Search } from "@/app/icons/Search";
import { useFriendRequest } from "../../context/friendRequest";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CrossWithoutBg } from "@/app/icons/CrossWithoutBg";
import { Tick } from "@/app/icons/Tick";
import { useAuth } from "@/app/context/auth";

export default function Pendent() {
  const { friendRequest, recipientRequest, acceptFriend } = useFriendRequest();

  const { user } = useAuth();

  const filteredFriendRequest = friendRequest.filter(
    (friendReq) => friendReq.status === "pending"
  );

  const filteredRecipientRequest = recipientRequest.filter(
    (friendReq) => friendReq.status === "pending"
  );

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
          PENDINGS -{" "}
          {filteredFriendRequest.length + filteredRecipientRequest.length}
        </h3>
        <Table>
          <TableBody>
            {filteredRecipientRequest.map((friendReq) => (
              <TableRow
                key={friendReq._id}
                className="flex items-center justify-between hover:rounded-[4px] hover:bg-[#2b2c31] border-t border-b border-zinc-600"
              >
                <TableCell className="font-semibold text-white flex items-center gap-2">
                  {friendReq.sender}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (user?.id) {
                        acceptFriend(user?.id, friendReq._id);
                      }
                    }}
                    className="rounded-full flex items-center justify-center bg-zinc-800/60 px-2 py-2 text-gray-400 hover:text-green-500"
                  >
                    <Tick className="h-6 w-6" />
                  </button>

                  <button className="rounded-full flex items-center justify-center bg-zinc-800/60 px-2 py-2 text-gray-400 hover:text-red-500">
                    <CrossWithoutBg className="h-6 w-6" />
                  </button>
                </TableCell>
              </TableRow>
            ))}

            {filteredFriendRequest.map((friendReq) => (
              <TableRow
                key={friendReq._id}
                className="flex items-center justify-between hover:rounded-[4px] hover:bg-[#2b2c31] border-b border-zinc-600"
              >
                <TableCell className="font-semibold text-white flex items-center gap-2">
                  {friendReq.recipient}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <button className="rounded-full flex items-center justify-center bg-zinc-800/60 px-2 py-2 text-gray-400 hover:text-red-500">
                    <CrossWithoutBg className="h-6 w-6" />
                  </button>
                  {friendReq.sender === user?.id ? null : (
                    <button className="rounded-full flex items-center justify-center bg-zinc-800/60 px-2 py-2 text-gray-400 hover:text-green-500">
                      <Tick className="h-6 w-6" />
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
