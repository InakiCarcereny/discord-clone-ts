import { ReactNode } from "react";
import { ServerSelectedAside } from "../../components";
import { Test } from "./components/test/Test";
import { ServerSelectedHeader } from "./components";
import { Separator } from "@/app/components";
import { Search } from "@/app/icons/Search";

export default async function ServerLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ serverId: string }>;
}) {
  const serverId = (await params).serverId;
  return (
    <div className="flex">
      <ServerSelectedAside serverId={serverId} />
      <div className="flex flex-col flex-grow">
        <ServerSelectedHeader serverId={serverId} />
        <div>{children}</div>
      </div>

      <div className="h-screen w-[240px] bg-[#27282c] flex flex-col gap-2">
        <div className="w-full h-[54px] bg-[#2f3136] flex flex-col justify-between">
          <div className="bg-zinc-900 w-[235px] rounded-[4px] px-2 py-1 my-auto flex items-center justify-between">
            <input
              type="text"
              className="bg-transparent focus:outline-none placeholder:text-sm w-full text-sm text-white font-semibold"
              placeholder="Search"
            />
            <Search className="text-gray-400 h-5 w-5" />
          </div>
          <Separator className="border border-[#2b2c31] rounded-full w-full" />
        </div>

        <div className="px-2 py-2">
          <Test serverId={serverId} />
        </div>
      </div>
    </div>
  );
}
