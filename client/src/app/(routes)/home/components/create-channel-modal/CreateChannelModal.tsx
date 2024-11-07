"use client";

import { typeChannelOptions } from "@/app/consts/typeChannelOptions";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { useChannel } from "../../context/channel";
import {
  ChannelNameInput,
  ChannelTypeOption,
  CreateChannelModalFooter,
  CreateChannelModalHeader,
} from "../../(routes)/[serverId]/components";

interface CreateChannelModalProps {
  handleOpenOptions: (option: number | null) => void;
  closeModal: () => void;
  serverId: string;
}

interface FormValues {
  name: string;
  type: string;
}

export function CreateChannelModal({
  handleOpenOptions,
  closeModal,
  serverId,
}: CreateChannelModalProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null);

  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const { createChannel } = useChannel();

  const handleSelectOption = (option: number, label: string) => {
    setSelectedOption(option);
    setValue("type", label);
    setSelectedIcon(
      typeChannelOptions.find((opt) => opt.id === option)?.icon || null
    );
  };

  const onSubmit = handleSubmit(async (data) => {
    createChannel(data, serverId);
    closeModal();
  });

  return (
    <div
      onClick={closeModal}
      className="bg-black inset-0 absolute z-50 flex items-center justify-center bg-opacity-60"
    >
      <div className="flex flex-col gap-4 overflow-hidden relative bg-[#2b2b30] w-[500px] min-h-[400px] rounded-[4px]">
        <CreateChannelModalHeader handleOpenOptions={handleOpenOptions} />

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 px-4">
            <span className="text-xs text-zinc-300 font-semibold">
              CHANNEL TYPE
            </span>
            <ul className="flex flex-col gap-4">
              {typeChannelOptions.map((option) => {
                return (
                  <ChannelTypeOption
                    key={option.id}
                    id={option.id}
                    icon={option.icon}
                    description={option.description}
                    label={option.label}
                    handleSelectOption={handleSelectOption}
                    selectedOption={selectedOption}
                  />
                );
              })}
            </ul>
          </div>

          <ChannelNameInput register={register} selectedIcon={selectedIcon} />
          <CreateChannelModalFooter handleOpenOptions={handleOpenOptions} />
        </form>
      </div>
    </div>
  );
}
