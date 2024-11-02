// import { useServer } from "../../context/server";

import { Separator } from "@/app/components";
import { useModal } from "@/app/hooks/useModal";
import { ArrowDown } from "@/app/icons/ArrowDown";
import { Calendar } from "@/app/icons/Calendar";
import { CrossWithoutBg } from "@/app/icons/CrossWithoutBg";
import { Friend } from "@/app/icons/Friend";
import { PlusWithBg } from "@/app/icons/PlusWithBg";
import { Settings } from "@/app/icons/Settings";
import { Trash } from "@/app/icons/Trash";

const serverOption = [
  {
    id: 1,
    label: "Invite people",
    icon: Friend({ className: "w-5 h-5" }),
  },
  {
    id: 2,
    label: "Server settings",
    icon: Settings({ className: "w-5 h-5" }),
  },
  {
    id: 3,
    label: "Create channel",
    icon: PlusWithBg({ className: "w-5 h-5" }),
  },
  {
    id: 4,
    label: "Create event",
    icon: Calendar({ className: "w-5 h-5" }),
  },
  {
    id: 5,
    label: "Delete server",
    icon: Trash({ className: "w-5 h-5" }),
  },
];

export function ServerSelectedAside() {
  // const { server } = useServer();
  const { toggleModal, isOpen } = useModal();

  const open = isOpen === "server-options";

  const toggle = () => () => {
    toggleModal("server-options");
  };

  return (
    <aside className="h-screen w-[240px] bg-[#27282c] flex flex-col -mx-6 -my-3">
      <button
        onClick={toggle()}
        className="w-full h-[52px] duration-200 hover:bg-[#323338] flex items-center justify-between text-zinc-300 font-semibold text-sm px-4 truncate"
      >
        Summer
        {open ? (
          <CrossWithoutBg className="w-5 h-5 text-zinc-300" />
        ) : (
          <ArrowDown className="w-7 h-7 text-zinc-300" />
        )}
      </button>
      <Separator className="border border-[#1c1d1f] rounded-full w-full" />

      {open && (
        <div className="bg-zinc-950 w-[225px] h-[220px] flex flex-col mx-auto mt-2 rounded-[4px] px-2 py-2">
          <ul className="flex flex-col gap-4 w-full">
            {serverOption.map((option, index) => {
              return (
                <li
                  key={option.id}
                  className={`hover:bg-[#5865f2] hover:text-white text-zinc-600 px-2 py-1 rounded-[4px] duration-200 w-full ${
                    index === 0 ? "text-[#7278be]" : ""
                  }  ${index === 4 ? "text-red-500" : ""}`}
                >
                  <button className="flex items-center justify-between w-full">
                    <span className="text-sm font-semibold">
                      {option.label}
                    </span>

                    {option.icon}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </aside>
  );
}
