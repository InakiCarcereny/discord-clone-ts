"use client";

import { useModal } from "@/app/hooks/useModal";

import { Discord } from "@/app/icons/Discord";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { OpenModalButton } from "../open-modal-button/OpenModalButton";
import { CreateServerModal } from "../create-server-modal/CreateServerModal";
import { Separator } from "@/app/components/separator/Separator";
import { useServer } from "../../context/server";
import { Server } from "../server/Server";

export function ServerAside() {
  const pathname = usePathname();

  const { isOpen, openModal, closeModal } = useModal();

  const { server } = useServer();

  const open = isOpen === "create-server";

  const discordIcon =
    pathname === "/home" ||
    pathname === "/home/addFriend" ||
    pathname === "/home/all" ||
    pathname === "/home/pendent";

  return (
    <aside className="flex flex-col items-center gap-2 w-[70px] h-screen bg-[#1c1c1f] px-2 py-4">
      <Link
        href="/home"
        aria-label="go home"
        className={`bg-[#5865f2] flex items-center justify-center px-2 py-2 hover:rounded-[18px] duration-200 ${
          discordIcon ? "rounded-[18px]" : "rounded-3xl"
        }`}
      >
        <Discord className="w-8 h-8 text-white" />
      </Link>

      <Separator className="border border-zinc-600 rounded-full w-7" />

      <ul className="flex flex-col gap-2">
        {server.map((server) => {
          return (
            <Server
              key={server._id}
              id={server._id}
              name={server.tittle}
              logo={server.logo}
            />
          );
        })}
      </ul>

      <OpenModalButton onOpenModal={() => openModal("create-server")} />

      {open && <CreateServerModal onCloseModal={() => closeModal()} />}
    </aside>
  );
}
