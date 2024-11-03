"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavigateOptionProps {
  id: number;
  label: string;
  icon: ReactNode;
  href: string;
}

export function NavigateOption({ id, label, icon, href }: NavigateOptionProps) {
  const pathname = usePathname();

  return (
    <li className="w-full" key={id}>
      <Link
        href={href}
        className={`flex items-center gap-4 hover:bg-[#323338] hover:text-white duration-200 px-3 py-2 rounded-[4px] ${
          pathname.startsWith(href) ? "text-white bg-zinc-600" : "text-zinc-400"
        }`}
      >
        <span>{icon}</span>
        <span className="font-medium text-base">{label}</span>
      </Link>
    </li>
  );
}
