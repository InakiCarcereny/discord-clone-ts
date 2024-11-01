"use client";

import { useServer } from "@/app/(routes)/home/context/server";

export function ServerSelected({ serverId }: { serverId: string }) {
  const { server } = useServer();

  const filteredServer = server.filter((server) => server._id === serverId);

  return (
    <div>
      {filteredServer.map((server) => {
        return <div key={server._id}>{server.tittle}</div>;
      })}
    </div>
  );
}
