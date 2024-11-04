import { Button } from "@/app/components";

interface PosterInputProps {
  openModal: (modal: string) => void;
}

export function PosterInput({ openModal }: PosterInputProps) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="poster" className="text-xs text-zinc-300 font-semibold">
        PROFILE POSTER
      </label>
      <div className="flex items-center gap-4">
        <Button
          method={() => openModal("poster-modal")}
          label="Change poster"
          type="button"
          size="w-[145px] text-sm"
        />
        <button type="button" className="text-sm font-semibold text-zinc-300">
          Delete poster
        </button>
      </div>
    </div>
  );
}
