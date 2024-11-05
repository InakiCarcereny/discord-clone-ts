"use client";

import { convertToBase64 } from "@/app/utils/convertToBase64";
import { useServer } from "../../context/server";
import Link from "next/link";
import Image from "next/image";

import { CreateServerModalProps } from "@/app/models/create-server-modal";
import { useState } from "react";
import { DefaultServer } from "@/app/icons/DefaultServer";

export function SearchServerModal({ onCloseModal }: CreateServerModalProps) {
  const [search, setSearch] = useState("");

  const { server } = useServer();

  const filteredServers = server.filter((server) => {
    return server.tittle.toLowerCase().includes(search);
  });

  return (
    <div className="inset-0 absolute z-50 flex items-center justify-center bg-black bg-opacity-60 focus:outline-none">
      <div className="bg-[#212124] w-[600px] h-[450px] rounded-[8px] px-4 py-4 flex flex-col gap-4 overflow-y-auto over relative">
        <input
          type="text"
          className="bg-zinc-900 w-full h-20 rounded-[4px] placeholder:text-zinc-600 text-xl px-4 py-4 focus:outline-none text-white"
          placeholder="Where do you want to go?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className="flex flex-col gap-4">
          {filteredServers.map((server) => {
            const logoUrl = convertToBase64(server.logo);

            return (
              <li
                key={server._id}
                className="flex flex-col hover:bg-[#323338] hover:text-white text-zinc-600 duration-200 rounded-[4px] px-2 py-2"
              >
                <Link
                  onClick={onCloseModal}
                  href={`/home/${server._id}`}
                  className="flex items-center gap-4"
                >
                  {logoUrl ? (
                    <Image
                      width={10}
                      height={10}
                      src={logoUrl}
                      alt={server.tittle}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <DefaultServer className="w-10 h-10 rounded-full" />
                  )}
                  <span className="text-sm font-semibold">{server.tittle}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
