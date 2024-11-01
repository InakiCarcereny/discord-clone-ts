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
      <div>{children}</div>
      <div>hola</div>
    </div>
  );
}
