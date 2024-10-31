import Link from "next/link";
import { ReactNode } from "react";

interface NavigateOptionProps {
  id: number;
  label: string;
  icon: ReactNode;
  href: string;
}

export function NavigateOption({ id, label, icon, href }: NavigateOptionProps) {
  return (
    <li className="w-full" key={id}>
      <Link
        href={href}
        className="flex items-center gap-4 hover:bg-[#323338] hover:text-white duration-200 px-3 py-2 rounded-[4px]"
      >
        <span className="text-zinc-400">{icon}</span>
        <span className="font-medium text-base text-zinc-400">{label}</span>
      </Link>
    </li>
  );
}
