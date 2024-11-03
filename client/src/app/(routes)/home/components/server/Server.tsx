"use client";

import { Logo } from "@/app/models/logo";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { World } from "@/app/icons/World";
import Image from "next/image";
import { convertToBase64 } from "@/app/utils/convertToBase64";

interface ServerProps {
  id: string;
  name: string;
  logo: Logo;
}

export function Server({ id, name, logo }: ServerProps) {
  const pathname = usePathname();

  if (logo && logo.data && Array.isArray(logo.data.data)) {
    const logoUrl = convertToBase64(logo);

    return (
      <li className="group flex items-center">
        <Link href={`/home/${id}`}>
          <Image
            width={12}
            height={12}
            src={logoUrl}
            alt={name}
            className={`${
              pathname.startsWith(`/home/${id}`) ? "rounded-[15px]" : ""
            } w-12 h-12 duration-200 rounded-3xl hover:rounded-[15px] `}
          />
        </Link>
        <div
          className={`${
            pathname.startsWith(`/home/${id}`) ? "h-10" : "h-2 group-hover:h-6"
          } border-2 border-white rounded-full duration-200 absolute left-0`}
        ></div>

        <div className="absolute left-20 px-2 py-4 text-sm text-white bg-zinc-900 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold items-center gap-2 hidden group-hover:flex z-50">
          <World className="text-pink-600 h-3 w-3" />
          {name}
        </div>
      </li>
    );
  }
}
