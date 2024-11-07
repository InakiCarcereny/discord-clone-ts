"use client";

import { useGetFirstChannel } from "@/app/hooks/useGetFirstChannel";

export function ServerSelected({ serverId }: { serverId: string }) {
  const { firstChannel } = useGetFirstChannel(serverId);

  return <div>{firstChannel ? <div>{firstChannel.name}</div> : null}</div>;
}
