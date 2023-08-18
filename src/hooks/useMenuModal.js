import { create } from "zustand";

const useMenuModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleMenu: (isOpen) => set({ isOpen: !isOpen }),
}));

export default useMenuModal;
