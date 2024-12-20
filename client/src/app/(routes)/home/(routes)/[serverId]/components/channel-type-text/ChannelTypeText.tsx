"use client";

import { useChannel } from "@/app/(routes)/home/context/channel";
import { CloseModalButton, Separator } from "@/app/components";
import { Hash } from "@/app/icons/Hash";
import { Settings } from "@/app/icons/Settings";
import { Channel } from "@/app/models/channel";
import Link from "next/link";

import { usePathname } from "next/navigation";

interface ChannelTypeTextProps {
  id: string;
  name: string;
  isOpen: string | boolean;
  serverId: string;
  firstChannel: Channel | undefined;
  openModal: () => void;
  closeModal: () => void;
}

export function ChannelTypeText({
  id,
  name,
  openModal,
  isOpen,
  closeModal,
  serverId,
  firstChannel,
}: ChannelTypeTextProps) {
  const open = isOpen === "text";

  const pathname = usePathname();

  const isActive =
    pathname.startsWith(`/home/${serverId}/${id}`) ||
    (pathname === `/home/${serverId}` && firstChannel?._id === id);

  const { deleteChannel } = useChannel();

  return (
    <>
      <Link
        href={`/home/${serverId}/${id}`}
        key={id}
        className={`flex items-center justify-between px-2 py-2 rounded-[4px] hover:bg-[#2f3136] truncate group
          ${isActive ? "bg-zinc-600 text-white" : "text-gray-400"}
        `}
      >
        <div className="flex items-center gap-2">
          <Hash className="text-gray-400 w-5 h-5" />
          <span className={`group-hover:text-white font-semibold text-sm`}>
            {name}
          </span>
        </div>
        <button
          onClick={() => openModal()}
          className="group-hover:block hidden"
        >
          <Settings className="text-gray-400 w-5 h-5" />
        </button>
      </Link>

      {open && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-[#323236] w-[500px] h-[400px] rounded-[4px] px-4 py-4 relative flex flex-col gap-6">
            <header className="flex items-center justify-between w-full">
              <h3 className="text-zinc-300 text-xl font-semibold">
                EDIT CHANNEL
              </h3>
              <CloseModalButton onCloseModal={() => closeModal()} />
            </header>

            <section className="flex items-center justify-between">
              <span className="text-sm text-gray-400 font-semibold">
                DELETE CHANNEL
              </span>
              <button
                onClick={() => {
                  closeModal();
                  deleteChannel(id, serverId);
                }}
                className="bg-red-600 text-white font-semibold text-sm px-6 py-2 rounded-[4px]"
              >
                Delete channel
              </button>
            </section>

            <Separator className="border border-zinc-600 rounded-full w-full" />

            <form className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 font-semibold">
                  CHANNEL NAME
                </span>

                <input
                  type="text"
                  className="bg-zinc-900 text-gray-300 px-4 py-2 rounded-[4px] focus:outline-none text-sm placeholder:text-zinc-600 w-[155px]"
                />
              </div>

              <footer className="flex items-center justify-between bg-[#212124] h-[100px] -mx-4 -mb-10 px-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-zinc-300 text-sm font-semibold"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="bg-[#5865f2] hover:bg-blue-700 duration-200 font-bold py-2 px-8 rounded h-12 text-sm text-white"
                >
                  Save
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
