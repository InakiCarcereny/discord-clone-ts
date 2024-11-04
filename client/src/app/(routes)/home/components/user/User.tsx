import { useAuth } from "@/app/context/auth";
import { useModal } from "@/app/hooks/useModal";
import { Headphones } from "@/app/icons/Headphones";
import { Microphone } from "@/app/icons/Microphone";
import { Settings } from "@/app/icons/Settings";

import { convertToBase64 } from "@/app/utils/convertToBase64";

export function User() {
  const { user } = useAuth();

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="absolute bottom-0 left-[70px] w-[240px] h-[75px] bg-[#202024] border-t border-[#33353b]">
      <button
        onClick={() => openModal("user-modal")}
        className="text-white text-xs hover:bg-zinc-600 rounded-[4px] px-1 flex items-center gap-2"
      >
        {/* {avatarBase64 ? (
          <img src={avatarBase64} alt="" className="h-8 w-8 rounded-full" />
        ) : (
          <Photo className="h-8 w-8 rounded-full" />
        )} */}
        <div className="flex flex-col items-start">
          <span className="text-sm text-white font-semibold">
            {user?.username}
          </span>
          <span className="text-xs text-gray-400 font-semibold">
            {/* {user?.username} */}
          </span>
        </div>
      </button>
      <div className="flex items-center">
        <Microphone className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-7 w-7" />
        <Headphones className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-8 w-8" />
        <Settings className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-7 w-7" />
      </div>
    </div>
  );
}
