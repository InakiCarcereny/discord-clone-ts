import { Dot } from "@/app/icons/Dot";

interface UserCardPreviewProps {
  secondaryColor: string;
  primaryColor: string;
  primaryColorDark: string;
  poster: string | null;
  avatar: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: any;
}

export function UserCardPreview({
  secondaryColor,
  primaryColor,
  primaryColorDark,
  poster,
  avatar,
  watch,
}: UserCardPreviewProps) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-sm text-zinc-200 font-semibold">PREVIEW</h4>
      <div
        style={{
          background: `linear-gradient(to top, ${secondaryColor}, ${primaryColor})`,
        }}
        className="w-[275px] h-[400px] rounded-xl bg-gradient-to-t p-[6px] shadow-xl"
      >
        <div
          style={{ background: primaryColorDark }}
          className="flex flex-col h-full rounded-lg border border-zinc-900/20"
        >
          <img
            src={poster}
            alt="Profile poster"
            className="w-full h-[100px] object-cover rounded-t-lg"
          />
          <div className="relative p-4 flex-1">
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-full h-14 w-14 absolute top-[-20px] left-4"
            />
            <div className="mt-10">
              <span className="text-white text-xl font-semibold">
                {watch("name")}
              </span>
              <div className="flex items-center text-white gap-1 text-xs font-semibold">
                <p>{/* {user?.username} */}</p>
                <Dot className="text-white h-2 w-2" />
                <p>{watch("pronouns")}</p>
              </div>
              <p className="text-white text-sm mt-2 whitespace-pre-line break-words">
                {watch("description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
