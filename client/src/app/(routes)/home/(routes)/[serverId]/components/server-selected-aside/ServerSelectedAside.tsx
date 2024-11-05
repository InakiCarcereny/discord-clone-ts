"use client";

import { Separator } from "@/app/components";

import { useModal } from "@/app/hooks/useModal";
import { useModalOptions } from "@/app/hooks/useModalOptions";

import { ServerOptionsButton } from "../server-options-button/ServerOptionsButton";
import { ServerOptionsModal } from "../server-options-modal/ServerOptionsModal";
import { CreateChannelModal } from "../../../../components/create-channel-modal/CreateChannelModal";
import { ServerSettings } from "../server-settings/ServerSettings";
import { CreateEventModal } from "../create-event-modal/CreateEventModal";

export function ServerSelectedAside({ serverId }: { serverId: string }) {
  const { toggleModal, isOpen, closeModal } = useModal();
  const { isOpenOptions, handleOpenOptions } = useModalOptions();

  const open = isOpen === "server-options";

  const toggle = () => () => {
    toggleModal("server-options");
  };

  return (
    <aside className="h-screen w-[240px] bg-[#27282c] flex flex-col -mx-6 -my-3">
      <ServerOptionsButton open={open} toggle={toggle} serverId={serverId} />

      <Separator className="border border-[#1c1d1f] rounded-full w-full" />

      {open && (
        <ServerOptionsModal
          closeModal={closeModal}
          handleOpenOptions={handleOpenOptions}
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
