import { Button } from "@/app/components";

interface AvatarInputProps {
  openModal: (modal: string) => void;
}

export function AvatarInput({ openModal }: AvatarInputProps) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="avatar" className="text-xs text-zinc-300 font-semibold">
        AVATAR
      </label>
      <div className="flex items-center gap-4">
        <Button
          method={() => openModal("avatar-modal")}
          label="Change avatar"
          type="button"
          size="w-[145px] text-sm"
        />
        <button type="button" className="text-sm font-semibold text-zinc-300">
          Delete avatar
        </button>
      </div>
    </div>
  );
}
