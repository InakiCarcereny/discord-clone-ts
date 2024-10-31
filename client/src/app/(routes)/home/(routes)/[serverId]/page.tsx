export default async function Server({
  params,
}: {
  params: Promise<{ serverId: string }>;
}) {
  const serverId = (await params).serverId;

  return <div>{serverId}</div>;
}
