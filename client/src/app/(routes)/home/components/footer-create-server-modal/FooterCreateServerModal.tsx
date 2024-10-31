import { CreateServerModalProps } from "@/app/models/create-server-modal.d";

export function FooterCreateServerModal({
  onCloseModal,
}: CreateServerModalProps) {
  return (
    <footer className="flex items-center justify-between bg-[#212124] h-[75px] -mx-4 -mb-10 px-4">
      <button
        type="button"
        onClick={onCloseModal}
        className="text-zinc-300 text-sm font-semibold"
      >
        Back
      </button>

      <button
        type="submit"
        className="bg-[#5865f2] hover:bg-blue-700 duration-200 font-bold py-2 px-8 rounded h-12 text-sm text-white"
      >
        Create
      </button>
    </footer>
  );
}
