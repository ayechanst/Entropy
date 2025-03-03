import { ReactNode } from "react";
import { create } from "zustand";

interface ModalState {
  content: ReactNode | null;
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const useModalState = create<ModalState>((set) => ({
  content: null,
  isOpen: false,
  openModal: (content) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
}));
