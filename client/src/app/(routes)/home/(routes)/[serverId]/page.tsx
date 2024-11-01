import { ServerSelected } from "./components/server-selected/ServerSelected";

export default async function Server({
  params,
}: {
  params: Promise<{ serverId: string }>;
}) {
  const serverId = (await params).serverId;

  return (
    <>
      <ServerSelected serverId={serverId} />
    </>
  );
}
