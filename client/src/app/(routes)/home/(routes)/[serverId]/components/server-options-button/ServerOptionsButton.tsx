import { ArrowDown } from "@/app/icons/ArrowDown";
import { CrossWithoutBg } from "@/app/icons/CrossWithoutBg";
import { useServer } from "@/app/(routes)/home/context/server";

interface ServerOptionsButtonProps {
  open: boolean;
  toggle: () => () => void;
  serverId: string;
}

export function ServerOptionsButton({
  open,
  toggle,
  serverId,
}: ServerOptionsButtonProps) {
  const { server } = useServer();

  const filteredServers = server.filter((server) => server._id === serverId);

  return (
    <button
      onClick={toggle()}
      className="w-full h-[52px] duration-200 hover:bg-[#323338] flex items-center justify-between text-zinc-300 font-semibold text-sm px-4 truncate"
    >
      {filteredServers.map((server) => (
        <span key={server._id}>{server.tittle}</span>
      ))}
      {open ? (
        <CrossWithoutBg className="w-5 h-5 text-zinc-300" />
      ) : (
        <ArrowDown className="w-7 h-7 text-zinc-300" />
      )}
    </button>
  );
}
