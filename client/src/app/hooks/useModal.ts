import { useEffect, useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState<string | boolean | null>(null);

  const openModal = (modal: string) => setIsOpen(modal);

  const closeModal = () => setIsOpen(false);

  const toggleModal = (modal: string) => {
    if (isOpen) {
      closeModal();
    } else {
      openModal(modal);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return { openModal, closeModal, toggleModal, isOpen };
}
