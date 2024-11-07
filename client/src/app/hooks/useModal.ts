"use client";

import { useEffect, useState } from "react";

type Modal = string;

export function useModal() {
  const [isOpen, setIsOpen] = useState<string | boolean>(false);

  const openModal = (modal: Modal) => setIsOpen(modal);

  const closeModal = () => setIsOpen(false);

  const toggleModal = (modal: Modal) => {
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
