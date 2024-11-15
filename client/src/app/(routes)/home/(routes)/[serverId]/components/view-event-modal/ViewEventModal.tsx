"use client";

import { CloseModalButton } from "@/app/components";
import { Calendar } from "@/app/icons/Calendar";
import { Separator } from "@/app/icons/Separator";
import { Star } from "@/app/icons/Star";
import { useEvent } from "../../context/event";
import { useState } from "react";
import { useUserInfo } from "../../../profile/context/userInfo";
import { convertToBase64 } from "@/app/utils/convertToBase64";
import { Trash } from "@/app/icons/Trash";
import { Dots } from "@/app/icons/Dots";

interface ViewEventModalProps {
  serverId: string;
  closeModal: () => void;
  handleOpenOptions: (option: number | null) => void;
}

export function ViewEventModal({
  closeModal,
  handleOpenOptions,
  serverId,
}: ViewEventModalProps) {
  const [open, setOpen] = useState<string | boolean>(false);

  const { events, deleteEvent } = useEvent();

  const { userInfo } = useUserInfo();

  const avatarBase64 = userInfo?.avatar
    ? convertToBase64(userInfo.avatar)
    : "null";

  const handleOpen = (eventId: string) => {
    setOpen((prevState) => (prevState === eventId ? false : eventId));
  };

  return (
    <div className="bg-black inset-0 absolute z-50 flex items-center justify-center bg-opacity-60">
      <div className="bg-[#2b2b30] w-[600px] h-[400px] rounded-[4px] relative flex flex-col overflow-hidden overflow-y-auto">
        <header className="flex items-center justify-between w-full bg-zinc-900 h-[65px] px-4 ">
          <div className="flex items-center">
            <h3 className="flex items-center gap-2">
              <Calendar className="text-zinc-300 h-7 w-7" />
              <span className="font-semibold text-zinc-300">
                {events.length > 0 ? `${events.length}` : ""} Events
              </span>
            </h3>
            <Separator className="text-zinc-600" />
            <button
              onClick={() => {
                closeModal();
                handleOpenOptions(4);
              }}
              className="bg-[#5865f2] hover:bg-blue-700 duration-200 font-bold px-2 rounded text-sm text-white"
            >
              Create Event
            </button>
          </div>
          <CloseModalButton onCloseModal={closeModal} />
        </header>

        <section
          className={`w-full h-full flex flex-col gap-2 px-4 py-4 ${
            events.length > 0 ? "" : "items-center justify-center"
          }`}
        >
          {events.length > 0 ? (
            events.map((event) => {
              return (
                <div
                  key={event._id}
                  className="bg-zinc-800 hover:bg-zinc-900 duration-200 w-full h-[150px] rounded-xl flex flex-col gap-3 relative"
                >
                  <div className="flex items-center gap-2 px-4 pt-4">
                    <Calendar className="text-indigo-400 h-6 w-6" />
                    <header className="w-full flex items-center justify-between">
                      <span className="font-semibold text-sm text-indigo-400">
                        Duration {event.timeInit} {event.timeEnd}
                      </span>
                      <img
                        src={avatarBase64}
                        alt=""
                        className="h-6 w-6 rounded-full"
                      />
                    </header>
                  </div>
                  <div className="flex flex-col gap-1 px-4">
                    <span className="text-white font-semibold ">
                      {event.theme}
                    </span>
                    <p className="text-xs text-zinc-500 font-semibold">
                      {event.description}
                    </p>
                  </div>
                  <span className="border-[0.1px] border-zinc-600 rounded-full w-full"></span>
                  <button
                    onClick={() => handleOpen(event._id)}
                    className="px-4"
                  >
                    <Dots className="text-gray-400 h-6 w-6 hover:text-white" />
                  </button>
                  {open === event._id && (
                    <div className="absolute -bottom-4 left-10 bg-zinc-950 w-[150px] h-[50px] z-50 rounded-[4px] px-2 py-2 flex items-center justify-center">
                      <button
                        onClick={() => deleteEvent(event._id, serverId)}
                        className="text-red-400 hover:text-red-700 duration-200 font-semibold flex items-center gap-2"
                      >
                        Cancel event
                        <Trash />
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <>
              <span className="flex items-center justify-center rounded-full bg-zinc-900 px-2 py-2 relative">
                <Calendar className="text-white h-12 w-12" />
              </span>
              <span className="absolute flex right-[325px]">
                <Star className="h-6 w-6" />
              </span>
              <span className="absolute flex right-[250px] top-[165px]">
                <Star className="h-6 w-6" />
              </span>
              <h5 className="text-2xl font-semibold text-white">
                No events proximity.
              </h5>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
