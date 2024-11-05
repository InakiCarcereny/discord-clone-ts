import { serverOption } from "@/app/consts/serverOptions";
import { OptionId } from "@/app/hooks/useModalOptions";

interface ServerOptionsModalProps {
  closeModal: () => void;
  handleOpenOptions: (option: OptionId) => void;
}

export function ServerOptionsModal({
  closeModal,
  handleOpenOptions,
}: ServerOptionsModalProps) {
  return (
    <div className="bg-zinc-950 w-[225px] h-[220px] flex flex-col mx-auto mt-2 rounded-[4px] px-2 py-2">
      <ul className="flex flex-col gap-4 w-full">
        {serverOption.map((option, index) => {
          return (
            <li
              key={option.id}
              className={`hover:bg-[#5865f2] hover:text-white px-2 py-1 rounded-[4px] duration-200 w-full ${
                index === 0 ? "text-[#7278be]" : "text-zinc-600 "
              }`}
            >
              <button
                onClick={() => {
                  handleOpenOptions(option.id);
                  closeModal();
                }}
                className="flex items-center justify-between w-full"
              >
                <span className="text-sm font-semibold">{option.label}</span>
                {option.icon}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
