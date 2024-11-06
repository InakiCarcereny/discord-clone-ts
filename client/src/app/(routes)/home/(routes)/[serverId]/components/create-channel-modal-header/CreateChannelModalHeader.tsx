import { CloseModalButton } from "@/app/components";

interface CreateChannelModalHeaderProps {
  handleOpenOptions: (option: number | null) => void;
}

export function CreateChannelModalHeader({
  handleOpenOptions,
}: CreateChannelModalHeaderProps) {
  return (
    <header className="flex items-center justify-between w-full px-4 py-4">
      <h3 className="text-white text-xl font-semibold">Create channel</h3>
      <CloseModalButton onCloseModal={() => handleOpenOptions(null)} />
    </header>
  );
}
