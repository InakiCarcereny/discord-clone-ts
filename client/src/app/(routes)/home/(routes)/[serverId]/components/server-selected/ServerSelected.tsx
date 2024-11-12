"use client";

import { useGetFirstChannel } from "@/app/hooks/useGetFirstChannel";
import { Hash } from "@/app/icons/Hash";
import { Pencil } from "@/app/icons/Pencil";
import { PlusWithBg } from "@/app/icons/PlusWithBg";
import { EmojiPicker } from "../emoji-picker/EmojiPicker";
import { useRef, useState } from "react";

export function ServerSelected({ serverId }: { serverId: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const { firstChannel } = useGetFirstChannel(serverId);

  const handleEmojiSelect = (emoji: string) => {
    setInputValue((prevState) => prevState + emoji);
    inputRef.current?.focus();
  };

  return (
    <div className="h-full pb-8 px-4 flex flex-col justify-end gap-6">
      {/* {firstChannel ? <div>{firstChannel.name}</div> : null} */}
      <div className="flex flex-col gap-2">
        <Hash className="text-white h-16 w-16 bg-zinc-700/60 rounded-full px-2 py-2" />
        <h1 className="text-white font-semibold text-3xl">
          We welcome you to {firstChannel?.name}!
        </h1>
        <p className="font-semibold text-gray-400 text-sm">
          Here start the #{firstChannel?.name} channel
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
            ref={inputRef}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            className="bg-transparent focus:outline-none w-full placeholder:text-sm placeholder:text-zinc-500 text-white text-sm"
            placeholder={`Send message to #${firstChannel?.name}`}
          />
        </div>
        <EmojiPicker onChange={handleEmojiSelect} />
      </div>
    </div>
  );
}
