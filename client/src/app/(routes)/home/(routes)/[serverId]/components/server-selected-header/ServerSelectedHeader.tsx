"use client";

import { Separator } from "@/app/components";
import { useGetFirstChannel } from "@/app/hooks/useGetFirstChannel";
import { Friends } from "@/app/icons/Friends";
import { Hash } from "@/app/icons/Hash";

export function ServerSelectedHeader({ serverId }: { serverId: string }) {
  const { firstChannel } = useGetFirstChannel(serverId);

  return (
    <header className="w-full h-[54px] flex flex-col justify-between">
      <div className="flex items-center justify-between w-full h-full px-4">
        <h3 className="flex items-center gap-1">
          <Hash className="text-gray-400 h-5 w-5" />
          {firstChannel ? (
            <span className="text-sm font-semibold text-white">
              {firstChannel.name}
            </span>
          ) : null}
        </h3>
        <Friends className="text-gray-400 h-6 w-6" />
      </div>
      <Separator className="border border-[#2b2c31] rounded-full w-full" />
    </header>
  );
}
