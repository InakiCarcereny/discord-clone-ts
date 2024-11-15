"use client";

import { useServer } from "@/app/(routes)/home/context/server";
import { ServerSelectedSearchBar } from "../server-selected-search-bar/ServerSelectedSearchBar";
import { ServerMebmers } from "../test/Test";

export function ServerContainer({ serverId }: { serverId: string }) {
  const { showMembers } = useServer();

  return (
    <div
      className={`h-screen w-[240px] bg-[#27282c] flex flex-col gap-2 ${
        showMembers ? "" : "hidden"
      }`}
    >
      <ServerSelectedSearchBar />

      <div className="px-2 py-2">
        <ServerMebmers serverId={serverId} />
      </div>
    </div>
  );
}
