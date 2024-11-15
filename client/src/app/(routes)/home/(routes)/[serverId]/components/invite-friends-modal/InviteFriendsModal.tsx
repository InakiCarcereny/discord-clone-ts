import { CloseModalButton, Separator } from "@/app/components";
import { useUserInfo } from "../../../profile/context/userInfo";
import { Search } from "@/app/icons/Search";
import { useFriends } from "@/app/(routes)/home/context/friends";

interface InviteFriendsModalProps {
  handleOpenOptions: (option: number | null) => void;
}

export function InviteFriendsModal({
  handleOpenOptions,
}: InviteFriendsModalProps) {
  const { userInfo } = useUserInfo();

  const { friends } = useFriends();

  return (
    <div className="bg-black inset-0 absolute z-50 flex items-center justify-center bg-opacity-60">
      <div className="flex flex-col justify-between bg-[#2b2b30] w-[500px] min-h-[400px] rounded-[4px] relative">
        <div className="flex flex-col gap-8 px-4 pt-3">
          <header className="flex items-center justify-between w-full">
            <h3 className="text-white font-semibold text-sm">
              Invite friends to the server of {userInfo?.name}
            </h3>
            <CloseModalButton onCloseModal={() => handleOpenOptions(null)} />
          </header>

          <div className="w-full flex items-center justify-between bg-zinc-900 text-gray-300 px-2 py-2 rounded-[4px]">
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none text-sm placeholder:text-zinc-600"
            />
            <Search className="text-white h-5 w-5" />
          </div>

          <section className="flex flex-col gap-2">
            <Separator className="border border-zinc-900 rounded-full w-full" />
            {friends.map((friends) => {
              return (
                <div
                  key={friends._id}
                  className="flex items-center justify-between hover:bg-[#323338] hover:text-white duration-200 rounded-[4px] px-2 py-2 group"
                >
                  <span className="text-sm font-semibold text-white">
                    {friends.user1}
                  </span>
                  <button className="text-sm font-semibold text-white px-4 py-2 rounded-[4px] border border-green-500 group-hover:bg-green-700 group-hover:border-green-700">
                    invite
                  </button>
                </div>
              );
            })}
          </section>
        </div>

        <footer className="flex flex-col gap-2 w-full h-[100px] bg-[#212124] px-4 py-4">
          <h4 className="text-xs font-semibold text-zinc-300">
            OR INVITE BY LINK
          </h4>
          <div className="w-full flex items-center justify-between bg-zinc-900 text-gray-300 px-2 py-1 rounded-[4px]">
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none text-sm placeholder:text-zinc-600"
              placeholder="https://discord.gg/invite"
            />
            <button className="bg-[#5865f2] text-white font-semibold text-sm px-4 py-2 rounded-[4px] duration-200 hover:bg-blue-700">
              Copy
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
