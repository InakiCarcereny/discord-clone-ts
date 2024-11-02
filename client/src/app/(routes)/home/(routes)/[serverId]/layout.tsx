"use client";

import { ReactNode } from "react";
import { ServerSelectedAside } from "../../components";

export default function ServerLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ serverId: string }>;
}) {
  return (
    <div className="flex">
      <div>
        <ServerSelectedAside />
      </div>
      <div className="flex-grow -my-3">{children}</div>
      <div className="h-screen w-[240px] bg-[#27282c] flex flex-col gap-2 -mx-6 -my-3">
        hola
      </div>
    </div>
  );
}
