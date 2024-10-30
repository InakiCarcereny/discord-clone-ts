interface InputRegisterSelectProps {
  number: number;
  register: any;
  value: string;
}

export function InputRegisterSelect({
  number,
  register,
  value,
}: InputRegisterSelectProps) {
  return (
    <div className="w-full">
      <select
        {...register(value)}
        className="bg-zinc-900 text-gray-300 px-4 py-2 rounded-[4px] appearance-none focus:outline-none w-full"
      >
        {Array.from({ length: number }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
