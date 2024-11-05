"use client";

import { Button, CloseModalButton } from "@/app/components";

import { typeChannelOptions } from "@/app/consts/typeChannelOptions";

import { useState } from "react";

interface CreateChannelModalProps {
  handleOpenOptions: (option: number | null) => void;
  closeModal: () => void;
}

export function CreateChannelModal({
  handleOpenOptions,
  closeModal,
}: CreateChannelModalProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null);

  const handleSelectOption = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <div
      onClick={closeModal}
      className="bg-black inset-0 absolute z-50 flex items-center justify-center bg-opacity-60"
    >
      <form className="flex flex-col gap-6 bg-[#2b2b30] w-[500px] min-h-[400px] rounded-[4px] px-4 py-4 relative overflow-hidden">
        <header className="flex items-center justify-between w-full">
          <h3 className="text-white text-xl font-semibold">Create channel</h3>
          <CloseModalButton onCloseModal={() => handleOpenOptions(null)} />
        </header>

        <div className="flex flex-col gap-6">
          <span className="text-xs text-zinc-300 font-semibold">
            CHANNEL TYPE
          </span>
          <ul className="flex flex-col gap-4">
            {typeChannelOptions.map((option) => {
              return (
                <li
                  onClick={() => {
                    handleSelectOption(option.id);
                    setSelectedIcon(option.icon);
                  }}
                  key={option.id}
                  className={`flex items-center justify-between gap-4 hover:bg-[#252529] rounded-[4px] px-2 py-1 cursor-pointer ${
                    selectedOption === option.id ? "bg-zinc-700" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span>{option.icon}</span>
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold text-zinc-300">
                        {option.label}
                      </span>
                      <p className="text-zinc-500 font-semibold text-sm">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <input
                    onChange={() => handleSelectOption(option.id)}
                    checked={selectedOption === option.id}
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer"
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="channelName"
            className="text-white font-semibold text-xs"
          >
            CHANNEL NAME
          </label>
          <div className="flex items-center gap-2 w-full bg-zinc-900 px-2 py-1 text-white h-12 rounded-[4px]">
            <span>{selectedIcon}</span>
            <input
              type="text"
              id="channelName"
              className="focus:outline-none text-sm placeholder:text-zinc-600 w-full bg-transparent"
              placeholder="new-channel"
            />
          </div>
        </div>

        <footer className="flex items-center justify-between w-full h-[100px] bg-[#212124] -mx-4 -mb-4 px-4">
          <button className="text-zinc-300 font-semibold text-sm">
            Cancel
          </button>
          <Button label="Create channel" type="submit" size="text-sm" />
        </footer>
      </form>
    </div>
  );
}
