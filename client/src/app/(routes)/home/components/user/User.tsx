import { useAuth } from "@/app/context/auth";

import { useModal } from "@/app/hooks/useModal";

import { userButtons } from "@/app/consts/userButtons";
import { Photo } from "@/app/icons/Photo";
import Link from "next/link";
import { Pencil } from "@/app/icons/Pencil";
import { useUserInfo } from "../../(routes)/profile/context/userInfo";

import { convertToBase64 } from "@/app/utils/convertToBase64";

export function User() {
  const { user } = useAuth();

  const { userInfo } = useUserInfo();

  const { isOpen, toggleModal } = useModal();

  const open = isOpen === "user-modal";

  const avatarBase64 = userInfo?.avatar
    ? convertToBase64(userInfo.avatar)
    : null;

  return (
    <div className="absolute bottom-0 left-[70px] w-[240px] h-[60px] bg-[#202024] border-t border-[#33353b] flex items-center justify-between px-2">
      <button
        onClick={() => toggleModal("user-modal")}
        className="text-white text-xs hover:bg-zinc-600 rounded-[4px] px-1 py-1 flex items-center gap-2"
      >
        {avatarBase64 ? (
          <img src={avatarBase64} alt="" className="h-8 w-8 rounded-full" />
        ) : (
          <Photo className="h-6 w-6 rounded-full" />
        )}
        <div className="flex flex-col items-start">
          <span className="text-sm text-white font-semibold">
            {userInfo?.name}
          </span>
          <span className="text-xs text-gray-400 font-semibold">
            {user?.username}
          </span>
        </div>
      </button>
      <div className="flex items-center">
        {userButtons.map((button) => {
          return (
            <button
              key={button.id}
              className="hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white"
            >
              {button.icon}
            </button>
          );
        })}
      </div>

      {open && (
        <div className="w-[275px] h-[400px] absolute bottom-16 rounded-xl bg-gradient-to-t flex flex-col px-[6px] py-[6px] shadow-xl">
          <div className="flex flex-col w-full h-full rounded-[8px] relative border border-zinc-900/20 overflow-hidden">
            <Link
              href="/home/profile"
              className="bg-zinc-900 rounded-xl px-2 py-2 text-gray-400 font-semibold mb-2"
            >
              <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded-[4px]">
                <Pencil />
                Edit Profile
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
