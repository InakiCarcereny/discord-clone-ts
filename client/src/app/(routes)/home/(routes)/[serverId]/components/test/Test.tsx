"use client";

import { useIsOwner } from "@/app/hooks/useIsOwner";
import { useUserInfo } from "../../../profile/context/userInfo";
import { Crown } from "@/app/icons/Crown";
import { convertToBase64 } from "@/app/utils/convertToBase64";

export function ServerMebmers({ serverId }: { serverId: string }) {
  const { owner } = useIsOwner(serverId);

  const { userInfo } = useUserInfo();

  const avatarBase64 = userInfo?.avatar
    ? convertToBase64(userInfo.avatar)
    : undefined;

  return (
    <>
      <h3 className="text-gray-400 font-semibold text-sm px-2">ONLINE - 1</h3>

      <section className="flex items-center gap-4 hover:bg-white/10 duration-200 rounded-[4px] px-2 py-1 cursor-pointer mt-2">
        <img src={avatarBase64} alt="" className="h-8 w-8 rounded-full" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">
            {userInfo?.name}
          </span>
          <p className="text-xs font-semibold text-gray-400">
            {userInfo?.nickname}
          </p>
        </div>
        {owner ? <Crown className="text-yellow-500 h-5 w-5" /> : null}
      </section>
    </>
  );
}
