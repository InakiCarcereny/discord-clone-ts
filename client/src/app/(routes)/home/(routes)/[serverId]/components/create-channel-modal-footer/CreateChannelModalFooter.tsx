import { Button } from "@/app/components";

interface CreateChannelModalFooterProps {
  handleOpenOptions: (option: number | null) => void;
}

export function CreateChannelModalFooter({
  handleOpenOptions,
}: CreateChannelModalFooterProps) {
  return (
    <footer className="flex items-center justify-between w-full h-[100px] bg-[#212124] px-4">
      <button
        onClick={() => handleOpenOptions(null)}
        className="text-zinc-300 font-semibold text-sm"
        type="button"
      >
        Cancel
      </button>
      <Button label="Create channel" type="submit" size="text-sm" />
    </footer>
  );
}
