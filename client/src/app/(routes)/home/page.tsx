"use client";

import { Search } from "@/app/icons/Search";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useUserInfo } from "./(routes)/profile/context/userInfo";
import { Message } from "@/app/icons/Message";
import { Dots } from "@/app/icons/Dots";
import { convertToBase64 } from "@/app/utils/convertToBase64";

export default function Home() {
  const { userInfo } = useUserInfo();

  const avatarBase64 = convertToBase64(userInfo?.avatar);

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
        <h3 className="font-semibold text-sm text-zinc-300">ONLINE - 8</h3>
        <Table>
          <TableBody>
            <TableRow className="flex items-center justify-between hover:rounded-[4px] hover:bg-[#2b2c31]">
              <TableCell className="font-semibold text-white flex items-center gap-2">
                <img
                  src={avatarBase64}
                  alt=""
                  className="h-8 w-8 rounded-full"
                />
                {userInfo?.name}
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="rounded-full flex items-center justify-center bg-zinc-900 px-2 py-2 text-gray-400 hover:text-white">
                  <Message className="h-6 w-6" />
                </button>
                <button className="rounded-full flex items-center justify-center bg-zinc-900 px-2 py-2 text-gray-400 hover:text-white">
                  <Dots className="h-6 w-6" />
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
