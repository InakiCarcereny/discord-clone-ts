export interface ButtonProps {
  label: string;
  type?: ButtonType;
}

export type ButtonType = "submit" | "button";

export function Button({ label, type }: ButtonProps) {
  return (
    <button
      className="text-white bg-[#5865f2] hover:bg-blue-700 duration-200 font-bold py-2 px-4 rounded h-12 w-full"
      type={type}
    >
      {label}
    </button>
  );
}
