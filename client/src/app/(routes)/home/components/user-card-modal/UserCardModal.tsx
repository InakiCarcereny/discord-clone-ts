import { darkenColor } from "@/app/utils/darkenColor";
import { useUserInfo } from "../../(routes)/profile/context/userInfo";
import { convertToBase64 } from "@/app/utils/convertToBase64";
import Link from "next/link";
import { Pencil } from "@/app/icons/Pencil";
import { Dot } from "@/app/icons/Dot";
import { useAuth } from "@/app/context/auth";

interface UserCardModalProps {
  avatarBase64: string | undefined | null;
}

export function UserCardModal({ avatarBase64 }: UserCardModalProps) {
  const { userInfo } = useUserInfo();

  const { user } = useAuth();

  const secondaryColor = userInfo?.secondaryColor;

  const primaryColor = userInfo ? userInfo.primaryColor : "#5865f2";

  const primaryColorDark = darkenColor(primaryColor, 0.4);

  const posterBase64 = userInfo?.banner
    ? convertToBase64(userInfo.banner)
    : null;

  return (
    <div
      style={{
        background: `linear-gradient(to top, ${secondaryColor}, ${primaryColor})`,
      }}
      className="w-[275px] h-[400px] absolute bottom-20 rounded-xl bg-gradient-to-t flex flex-col px-[6px] py-[6px] shadow-xl"
    >
      <div
        style={{ background: primaryColorDark }}
        className="flex flex-col w-full h-full rounded-[8px] relative border border-zinc-900/20 overflow-hidden"
      >
        <img
          src={posterBase64}
          alt=""
          className="w-full h-[100px] object-cover rounded-tl-[6px] rounded-tr-[6px]"
        />
        <img
          src={avatarBase64}
          alt=""
          className="rounded-full h-14 w-14 absolute top-16 left-4 z-50"
        />
        <div className="flex flex-col px-4 mt-10 justify-between h-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-white text-xl font-semibold">
                {userInfo?.name}
              </span>
              <div className="flex items-center gap-1">
                <p className="text-xs text-white font-semibold">
                  {user?.username}
                </p>
                <Dot className="text-white h-2 w-2" />
                <p className="text-xs text-white font-semibold">
                  {userInfo?.nickname}
                </p>
              </div>
            </div>
            <span className="text-sm text-white font-semibold">
              {userInfo?.description}
            </span>
          </div>
          <Link
            href="/home/profile"
            className="bg-zinc-900 rounded-xl px-2 py-2 text-gray-400 font-semibold mb-2"
          >
            <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded-[4px]">
              <Pencil className="w-5 h-5" />
              Edit Profile
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
