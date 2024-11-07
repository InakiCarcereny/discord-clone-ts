interface ChannelNameInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  selectedIcon: JSX.Element | null;
}

export function ChannelNameInput({
  register,
  selectedIcon,
}: ChannelNameInputProps) {
  return (
    <div className="flex flex-col gap-2 px-4">
      <label htmlFor="channelName" className="text-white font-semibold text-xs">
        CHANNEL NAME
      </label>
      <div className="flex items-center gap-2 w-full bg-zinc-900 px-2 py-1 text-white h-12 rounded-[4px]">
        <span>{selectedIcon}</span>
        <input
          type="text"
          id="channelName"
          className="focus:outline-none text-sm placeholder:text-zinc-600 w-full bg-transparent"
          placeholder="new-channel"
          {...register("name")}
        />
      </div>
    </div>
  );
}
