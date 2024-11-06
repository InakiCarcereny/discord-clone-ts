interface ChannelTypeOptionProps {
  id: number;
  icon: JSX.Element;
  description: string;
  label: string;
  handleSelectOption: (option: number) => void;
  selectedOption: number | null;
  setSelectedIcon: (icon: JSX.Element) => void;
}

export function ChannelTypeOption({
  id,
  icon,
  description,
  label,
  handleSelectOption,
  selectedOption,
  setSelectedIcon,
}: ChannelTypeOptionProps) {
  return (
    <li
      onClick={() => {
        handleSelectOption(id);
        setSelectedIcon(icon);
      }}
      key={id}
      className={`flex items-center justify-between gap-4 hover:bg-[#252529] rounded-[4px] px-2 py-1 cursor-pointer ${
        selectedOption === id ? "bg-zinc-700" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <span>{icon}</span>
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold text-zinc-300">{label}</span>
          <p className="text-zinc-500 font-semibold text-sm">{description}</p>
        </div>
      </div>
      <input
        onChange={() => handleSelectOption(id)}
        checked={selectedOption === id}
        type="checkbox"
        className="w-5 h-5 cursor-pointer"
        // {...register("text")}
      />
    </li>
  );
}
