import { ReactNode } from "react";
import { ServerSelectedAside } from "../../components";
import { ServerMebmers } from "./components/test/Test";
import { ServerSelectedHeader, ServerSelectedSearchBar } from "./components";

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

      <div className="h-screen w-[240px] bg-[#27282c] flex flex-col gap-2">
        <ServerSelectedSearchBar />

        <div className="px-2 py-2">
          <ServerMebmers serverId={serverId} />
        </div>
      </div>
    </div>
  );
}
