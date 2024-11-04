interface AboutMeInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export function AboutMeInput({ register }: AboutMeInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-zinc-200 font-semibold text-sm"
        htmlFor="description"
      >
        ABOUT ME
      </label>
      <p className="text-sm text-zinc-200">
        You can use Markdown and links that you want
      </p>
      <textarea
        cols={5}
        id="description"
        className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-zinc-400 w-[300px] resize-none h-[120px]"
        {...register("description")}
      />
    </div>
  );
}
