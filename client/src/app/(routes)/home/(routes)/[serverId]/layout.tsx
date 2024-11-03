import { ReactNode } from "react";
import { ServerSelectedAside } from "../../components";

export default async function ServerLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ serverId: string }>;
}) {
  const serverId = (await params).serverId;
  return (
    <div className="flex">
      <div>
        <ServerSelectedAside serverId={serverId} />
      </div>
      <div className="flex-grow -my-3">{children}</div>
      <div className="h-screen w-[240px] bg-[#27282c] flex flex-col gap-2 -mx-6 -my-3">
        hola
      </div>
    </div>
  );
}
