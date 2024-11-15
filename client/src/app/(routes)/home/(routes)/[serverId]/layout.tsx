import { ReactNode } from "react";
import { ServerSelectedAside } from "../../components";
import { ServerContainer, ServerSelectedHeader } from "./components";

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
      <ServerSelectedAside serverId={serverId} />
      <div className="flex flex-col flex-grow">
        <ServerSelectedHeader serverId={serverId} />
        <div className="flex-grow">{children}</div>
      </div>

      <ServerContainer serverId={serverId} />
    </div>
  );
}
