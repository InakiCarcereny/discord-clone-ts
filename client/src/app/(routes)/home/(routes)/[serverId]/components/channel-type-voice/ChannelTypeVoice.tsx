import { Settings } from "@/app/icons/Settings";
import { Volume } from "@/app/icons/Volume";

interface ChannelTypeVoiceProps {
  id: string;
  name: string;
  isMatching: boolean;
}

export function ChannelTypeVoice({
  id,
  name,
  isMatching,
}: ChannelTypeVoiceProps) {
  return (
    <li
      key={id}
      className={`flex items-center justify-between px-2 py-2 rounded-[4px] hover:bg-[#2f3136] group
        `}
    >
      <div className="flex items-center gap-2">
        <Volume className="text-gray-400 w-5 h-5" />
        <span
          className={`group-hover:text-white font-semibold text-gray-400 text-sm`}
        >
          {name}
        </span>
      </div>
      <button className="group-hover:block hidden">
        <Settings className="text-gray-400 w-5 h-5" />
      </button>
    </li>
  );
}
