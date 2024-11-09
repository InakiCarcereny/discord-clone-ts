"use client";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Smile } from "@/app/icons/Smile";
import { useState } from "react";

interface EmojiPickerProps {
  onChange: (emoji: string) => void;
}

export function EmojiPicker({ onChange }: EmojiPickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <Smile className="text-gray-400 h-6 w-6" />
      </button>

      <div className="absolute bottom-20 right-64">
        {open && (
          <Picker
            data={data}
            onEmojiSelect={(emoji: any) => onChange(emoji.native)}
          />
        )}
      </div>
    </>
  );
}
