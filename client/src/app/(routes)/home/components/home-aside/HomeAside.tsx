import { Separator } from "@/app/components";
import { SearchServerModal } from "../search-server-modal/SearchServerModal";
import { NavigateOption } from "../navigate-option/NavigateOption";

import { useModal } from "@/app/hooks/useModal";

import { options } from "@/app/consts/options";

export function HomeAside() {
  const { isOpen, openModal, closeModal } = useModal();

  const open = isOpen === "search";

  return (
    <aside className="h-screen w-[240px] bg-[#27282c] flex flex-col gap-2 py-4 px-2">
      <button
        onClick={() => openModal("search")}
        className="w-full text-sm bg-zinc-900 text-zinc-300 px-2 py-1 rounded-[4px]"
      >
        Search or init a conversation
      </button>

      <Separator className="border border-[#1c1d1f] rounded-full -mx-2" />

      <ul className="flex flex-col gap-2">
        {options.map((option) => {
          return (
            <NavigateOption
              key={option.id}
              id={option.id}
              label={option.label}
              icon={option.icon}
              href={option.href}
            />
          );
        })}
      </ul>

      <div className="flex flex-col gap-2">
        {/* aca va la seccione de mensajes */}
      </div>

      {open && <SearchServerModal onCloseModal={() => closeModal()} />}
    </aside>
  );
}
