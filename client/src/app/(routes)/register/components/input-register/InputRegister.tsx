import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputRegisterProps {
  label: string;
  type: string;
  id: string;
  required: string;
  value: RegExp;
  message: string;
  error: Record<string, unknown> | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormReturn<FieldValues>["register"] | any;
}

type UseFormReturn<TFieldValues extends FieldValues = FieldValues> = {
  register: UseFormRegister<TFieldValues>;
};

export function InputRegister({
  label,
  type,
  id,
  required,
  value,
  message,
  error,
  register,
}: InputRegisterProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label
          htmlFor={id}
          className={`text-xs font-semibold ${
            error ? "text-red-500" : "text-zinc-300"
          }`}
        >
          {label}
        </label>
        {error && (
          <p className="text-xs text-red-500 font-semibold">
            {error.message as string}
          </p>
        )}
      </div>
      <input
        type={type}
        id={id}
        className="w-full rounded-[4px] bg-zinc-900 px-2 py-1 text-white h-12 focus:outline-none text-sm"
        {...register(id, {
          required: required,
          pattern: {
            value: value,
            message: message,
          },
        })}
      />
    </div>
  );
}
