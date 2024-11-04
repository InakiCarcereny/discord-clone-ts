import { CloseModalButton } from "@/app/components";
import { UploadImage } from "@/app/icons/UploadImage";

interface PosterModalProps {
  closeModal: () => void;
  poster: string | null;
  handlePosterSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PosterModal({
  closeModal,
  poster,
  handlePosterSelect,
}: PosterModalProps) {
  return (
    <div className="inset-0 absolute z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#2b2b30] w-[400px] h-[400px] rounded-[4px] px-4 py-4 relative flex flex-col gap-4">
        <header className="flex items-center justify-between w-full">
          <h3 className="text-white text-xl font-semibold">Select an image</h3>
          <CloseModalButton onCloseModal={() => closeModal()} />
        </header>
        <div className="bg-zinc-900 w-full h-full rounded-[4px] flex items-center justify-center flex-col gap-8">
          <div className="rounded-full bg-[#5865f2] h-36 w-36 flex items-center justify-center max-w-full max-h-full">
            {poster ? (
              <img src={poster} alt="poster" className="h-full w-full" />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <UploadImage className="text-white h-12 w-12" />
                <input
                  type="file"
                  className="opacity-0 w-full h-full"
                  onChange={handlePosterSelect}
                />
              </div>
            )}
          </div>
          <span className="font-semibold text-sm text-zinc-300">
            Upload image
          </span>
        </div>
      </div>
    </div>
  );
}
