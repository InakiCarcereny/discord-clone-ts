export interface ButtonProps {
  label: string;
  type?: ButtonType;
  size?: string;
  method?: () => void;
}

export type ButtonType = "submit" | "button";

export function Button({ label, type, size, method }: ButtonProps) {
  return (
    <button
      onClick={method}
      className={` text-white bg-[#5865f2] hover:bg-blue-700 duration-200 font-bold py-2 px-4 rounded h-12 ${
        size ? size : "w-full"
      }`}
      type={type}
    >
      {label}
    </button>
  );
}
