import { useChannel } from "../(routes)/home/context/channel";

export function useGetFirstChannel(serverId: string) {
  const { channels } = useChannel();

  const firstChannel = channels.find((channel) => channel.server === serverId);

  return { firstChannel };
}
