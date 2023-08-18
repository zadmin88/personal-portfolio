import { create } from "zustand";

const useDarkMode = create((set) => ({
  isDark: true,
  toggleDarkMode: (isDark) => set({ isDark: !isDark }),
}));

export default useDarkMode;
