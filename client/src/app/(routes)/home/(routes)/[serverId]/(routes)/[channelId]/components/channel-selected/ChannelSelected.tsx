"use client";

import { useChannel } from "@/app/(routes)/home/context/channel";
import { Pencil } from "@/app/icons/Pencil";
import { PlusWithBg } from "@/app/icons/PlusWithBg";
import { EmojiPicker } from "../../../../components";
import { Hash } from "@/app/icons/Hash";

interface ChannelSelectedProps {
  channelId: string;
}

export function ChannelSelected({ channelId }: ChannelSelectedProps) {
  const { channels } = useChannel();

  const filteredChannels = channels.filter(
    (channel) => channel._id === channelId
  );

  return (
    <>
      {filteredChannels.map((channel) => {
        return (
          <div
            key={channel._id}
            className="h-full pb-8 px-4 flex flex-col justify-end gap-6"
          >
            {/* {firstChannel ? <div>{firstChannel.name}</div> : null} */}
            <div className="flex flex-col gap-2">
              <Hash className="text-white h-16 w-16 bg-zinc-700/60 rounded-full px-2 py-2" />
              <h1 className="text-white font-semibold text-3xl">
                We welcome you to {channel.name}!
              </h1>
              <p className="font-semibold text-gray-400 text-sm">
                Here start the #{channel?.name} channel
              </p>
              <span className="flex items-center gap-2 text-cyan-600 text-sm font-medium">
                <Pencil />
                Edit channel
              </span>
            </div>
            <div className="bg-zinc-700/60 w-full rounded-[4px] px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 w-full">
                <button className="text-gray-400 hover:text-white">
                  <PlusWithBg className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  className="bg-transparent focus:outline-none w-full placeholder:text-sm placeholder:text-zinc-500 text-white text-sm"
                  placeholder={`Send message to #${channel?.name}`}
                />
              </div>
              <EmojiPicker onChange={(emoji: string) => console.log(emoji)} />
            </div>
          </div>
        );
      })}
    </>
  );
}
