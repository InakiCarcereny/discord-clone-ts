import { ChannelSelected } from "./components";

export default async function Channel({
  params,
}: {
  params: { channelId: string };
}) {
  const channelId = (await params).channelId;

  return (
    <>
      <ChannelSelected channelId={channelId} />
    </>
  );
}
