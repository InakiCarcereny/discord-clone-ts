import { CrossWithoutBg } from "@/app/icons/CrossWithoutBg";

import { CreateServerModalProps } from "@/app/models/create-server-modal";

export function CloseModalButton({ onCloseModal }: CreateServerModalProps) {
  return (
    <button
      type="button"
      onClick={onCloseModal}
      className="absolute top-4 right-4"
    >
      <CrossWithoutBg className="w-5 h-5 text-zinc-500" />
    </button>
  );
}