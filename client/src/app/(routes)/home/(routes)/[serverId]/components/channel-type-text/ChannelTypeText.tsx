import { Hash } from "@/app/icons/Hash";
import { Settings } from "@/app/icons/Settings";

interface ChannelTypeTextProps {
  id: string;
  name: string;
  isMatching: boolean;
  openModal: () => void;
  isOpen: string | boolean;
}

export function ChannelTypeText({
  id,
  name,
  isMatching,
  openModal,
  isOpen,
}: ChannelTypeTextProps) {
  const open = isOpen === "text";

  return (
    <>
      <li
        key={id}
        className={`flex items-center justify-between px-2 py-2 rounded-[4px] hover:bg-[#2f3136] group

        `}
      >
        <div className="flex items-center gap-2">
          <Hash className="text-gray-400 w-5 h-5" />
          <span
            className={`group-hover:text-white font-semibold text-gray-400 text-sm truncate `}
          >
            {name}
          </span>
        </div>
        <button onClick={openModal} className="group-hover:block hidden">
          <Settings className="text-gray-400 w-5 h-5" />
        </button>
      </li>

      {open && (
        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-10 z-50"></div>
      )}
    </>
  );
}
