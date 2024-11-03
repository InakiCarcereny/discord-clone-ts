import { useEffect, useState } from "react";

export type OptionId = number | null;

export function useModalOptions() {
  const [isOpenOptions, setIsOpenOptions] = useState<number | null>(null);

  const handleOpenOptions = (option: OptionId) => {
    setIsOpenOptions((prevState) => (prevState === option ? null : option));
  };

  useEffect(() => {
    if (isOpenOptions) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpenOptions(null);
        }
      };

      addEventListener("keydown", handleKeyDown);

      return () => {
        removeEventListener("keydown", handleKeyDown);
      };
    }
  });

  return { isOpenOptions, handleOpenOptions };
}
