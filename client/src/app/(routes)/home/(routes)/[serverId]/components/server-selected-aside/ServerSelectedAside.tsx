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

import { useEffect, useState } from "react";
import { useGetFirstChannel } from "@/app/hooks/useGetFirstChannel";
import { ChannelTypeText } from "../channel-type-text/ChannelTypeText";
import { ChannelTypeVoice } from "../channel-type-voice/ChannelTypeVoice";
import { ArrowRight } from "@/app/icons/ArrowRight";
import { InviteFriendsModal } from "../invite-friends-modal/InviteFriendsModal";
import { useServer } from "@/app/(routes)/home/context/server";

export function ServerSelectedAside({ serverId }: { serverId: string }) {
  const [textVisible, setTextVisible] = useState(true);
  const [voiceVisible, setVoiceVisible] = useState(true);

  const { toggleModal, isOpen, closeModal, openModal } = useModal();
  const { isOpenOptions, handleOpenOptions } = useModalOptions();
  const { channels, getChannels } = useChannel();
  const { showMembers } = useServer();

  const { firstChannel } = useGetFirstChannel(serverId);

  const open = isOpen === "server-options";

  const isMatching = firstChannel === channels[0];

  const toggle = () => () => {
    toggleModal("server-options");
  };

  useEffect(() => {
    getChannels(serverId);
  }, []);

  const handleTextVisibilityChange = () => {
    setTextVisible(!textVisible);
  };

  const handleVoiceVisibilityChange = () => {
    setVoiceVisible(!voiceVisible);
  };

  const channelTypeText = channels.filter(
    (channel) => channel.type[0] === "Text"
  );

  const channelTypeVoice = channels.filter(
    (channel) => channel.type[0] === "Voice"
  );

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

        <section className="flex flex-col gap-2">
          <div
            onClick={handleTextVisibilityChange}
            className="flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>
                {textVisible ? (
                  <ArrowDown className="text-gray-400 h-4 w-4" />
                ) : (
                  <ArrowRight className="text-gray-400 h-4 w-4" />
                )}
              </span>
              <span className="text-xs font-semibold text-gray-400 group-hover:text-white">
                TEXT CHANNELS
              </span>
            </div>
            <button onClick={() => handleOpenOptions(3)}>
              <PlusWithoutBg className="text-gray-400 h-4 w-4" />
            </button>
          </div>

          {textVisible && (
            <ul className="flex flex-col gap-1">
              {channelTypeText.map((channel) => {
                return (
                  <ChannelTypeText
                    key={channel._id}
                    id={channel._id}
                    name={channel.name}
                    isMatching={isMatching}
                    openModal={() => openModal("text")}
                    closeModal={() => closeModal()}
                    isOpen={isOpen}
                    serverId={serverId}
                    firstChannel={firstChannel}
                  />
                );
              })}
            </ul>
          )}
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between group cursor-pointer">
            <div
              onClick={handleVoiceVisibilityChange}
              className="flex items-center gap-2"
            >
              <span>
                {voiceVisible ? (
                  <ArrowDown className="text-gray-400 h-4 w-4" />
                ) : (
                  <ArrowRight className="text-gray-400 h-4 w-4" />
                )}
              </span>
              <span className="text-xs font-semibold text-gray-400 group-hover:text-white">
                VOICE CHANNELS
              </span>
            </div>
            <button>
              <PlusWithoutBg className="text-gray-400 h-4 w-4" />
            </button>
          </div>

          {voiceVisible && (
            <ul className="flex flex-col">
              {channelTypeVoice.map((channel) => {
                return (
                  <ChannelTypeVoice
                    key={channel._id}
                    id={channel._id}
                    name={channel.name}
                    isMatching={isMatching}
                  />
                );
              })}
            </ul>
          )}
        </section>
      </nav>

      {open && (
        <ServerOptionsModal
          closeModal={closeModal}
          handleOpenOptions={handleOpenOptions}
          serverId={serverId}
        />
      )}

      {isOpenOptions === 1 && (
        <InviteFriendsModal handleOpenOptions={handleOpenOptions} />
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
