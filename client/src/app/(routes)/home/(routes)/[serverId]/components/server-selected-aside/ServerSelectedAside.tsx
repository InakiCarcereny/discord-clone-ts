"use client";

import { Separator } from "@/app/components";

import { useModal } from "@/app/hooks/useModal";
import { useModalOptions } from "@/app/hooks/useModalOptions";

import { ServerOptionsButton } from "../server-options-button/ServerOptionsButton";
import { ServerOptionsModal } from "../server-options-modal/ServerOptionsModal";
import { CreateChannelModal } from "../../../../components/create-channel-modal/CreateChannelModal";
import { ServerSettings } from "../server-settings/ServerSettings";
import { CreateEventModal } from "../create-event-modal/CreateEventModal";
import { Calendar } from "@/app/icons/Calendar";
import { ArrowDown } from "@/app/icons/ArrowDown";
import { PlusWithoutBg } from "@/app/icons/PlusWithoutBg";
import { useChannel } from "@/app/(routes)/home/context/channel";
import { Settings } from "@/app/icons/Settings";
import { Hash } from "@/app/icons/Hash";
import { useEffect } from "react";
import { useGetFirstChannel } from "@/app/hooks/useGetFirstChannel";

export function ServerSelectedAside({ serverId }: { serverId: string }) {
  const { toggleModal, isOpen, closeModal } = useModal();
  const { isOpenOptions, handleOpenOptions } = useModalOptions();
  const { channels, getChannels } = useChannel();

  const { firstChannel } = useGetFirstChannel(serverId);

  const open = isOpen === "server-options";

  const isMatching = firstChannel === channels[0];

  const toggle = () => () => {
    toggleModal("server-options");
  };

  useEffect(() => {
    getChannels(serverId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className="h-screen w-[240px] bg-[#27282c] flex flex-col">
      <ServerOptionsButton open={open} toggle={toggle} serverId={serverId} />

      <Separator className="border border-[#1c1d1f] rounded-full w-full" />

      <nav className="flex flex-col gap-4 px-2 mt-3">
        <button
          onClick={() => toggleModal("calendar")}
          className="flex items-center gap-2 rounded-[4px] hover:bg-[#2f3136] px-2 py-1"
        >
          <Calendar className="text-gray-400 h-6 w-6" />
          <span className="text-gray-400 text-base font-semibold">
            Calendar
          </span>
        </button>

        <Separator className="border border-zinc-700 rounded-full w-full" />

        <article className="flex flex-col gap-2">
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-2">
              <button>
                <ArrowDown className="text-gray-400 h-4 w-4" />
              </button>
              <span className="text-xs font-semibold text-gray-400 group-hover:text-white">
                TEXT CHANNELS
              </span>
            </div>
            <button>
              <PlusWithoutBg className="text-gray-400 h-4 w-4" />
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            {channels.map((channel) => {
              return (
                <li
                  key={channel._id}
                  className={`flex items-center justify-between px-2 py-1 rounded-[4px] hover:bg-[#2f3136] group ${
                    isMatching ? "bg-zinc-700" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Hash className="text-gray-400 w-5 h-5" />
                    <span
                      className={`group-hover:text-white font-semibold text-gray-400 text-sm ${
                        isMatching ? "text-white" : ""
                      }`}
                    >
                      {channel.name}
                    </span>
                  </div>
                  <button className="group-hover:block hidden">
                    <Settings className="text-gray-400 w-5 h-5" />
                  </button>
                </li>
              );
            })}
          </ul>
        </article>
      </nav>

      {open && (
        <ServerOptionsModal
          closeModal={closeModal}
          handleOpenOptions={handleOpenOptions}
          serverId={serverId}
        />
      )}

      {isOpenOptions === 2 && (
        <ServerSettings
          handleOpenOptions={handleOpenOptions}
          serverId={serverId}
        />
      )}

      {isOpenOptions === 3 && (
        <CreateChannelModal
          handleOpenOptions={handleOpenOptions}
          closeModal={() => closeModal()}
          serverId={serverId}
        />
      )}

      {isOpenOptions === 4 && (
        <CreateEventModal
          handleOpenOptions={handleOpenOptions}
          serverId={serverId}
        />
      )}
    </aside>
  );
}
