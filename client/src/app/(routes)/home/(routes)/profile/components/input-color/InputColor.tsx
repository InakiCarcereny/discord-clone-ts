import { Pencil } from "@/app/icons/Pencil";

interface InputColorProps {
  color: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export function InputColor({ color, label, register }: InputColorProps) {
  return (
    <div className="flex flex-col gap-1">
      <div
        style={{ background: color }}
        className="bg-zinc-900 rounded-[4px] px-4 py-2 flex items-center gap-2 relative"
      >
        <input {...register} className="w-8 h-8 opacity-0" type="color" />
        <Pencil className="text-gray-400 h-3 w-3 absolute top-1 right-1" />
      </div>
      <span className="text-xs text-zinc-200">{label}</span>
    </div>
  );
}
