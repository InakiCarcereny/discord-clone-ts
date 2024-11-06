import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputRegisterProps {
  label: string;
  placeholder?: string;
  type: string;
  id: string;
  required?: string;
  value?: RegExp;
  message?: string;
  error?: Record<string, unknown> | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormReturn<FieldValues>["register"] | any;
  size?: string;
}

type UseFormReturn<TFieldValues extends FieldValues = FieldValues> = {
  register: UseFormRegister<TFieldValues>;
};

export function InputRegister({
  label,
  placeholder,
  type,
  id,
  required,
  value,
  message,
  error,
  register,
  size,
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
        placeholder={placeholder}
        type={type}
        id={id}
        className={`rounded-[4px] bg-zinc-900 px-2 py-1 text-white h-12 focus:outline-none text-sm placeholder:text-zinc-300 ${
          size ? size : "w-full"
        }`}
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
