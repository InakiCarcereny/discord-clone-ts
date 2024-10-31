import { PlusWithoutBg } from "@/app/icons/PlusWithoutBg";

interface OpenModalButtonProps {
  onOpenModal: () => void;
}

export function OpenModalButton({ onOpenModal }: OpenModalButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onOpenModal}
        aria-label="Open modal to create server"
        className="hover:bg-green-600 hover:text-white bg-[#33353b] flex justify-center items-center rounded-3xl duration-200 px-2 py-2 hover:rounded-[18px] text-green-600 focus:outline-none"
      >
        <PlusWithoutBg className="w-8 h-8" />
      </button>
    </div>
  );
}
