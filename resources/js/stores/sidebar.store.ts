import { create } from "zustand";

type SidebarType = {
    isOpen: boolean;
    firstOpen: boolean;
    toggleSidebar: () => void;
    toggleFirstOpen: () => void;
};

export const useSidebar = create<SidebarType>()((set) => ({
    isOpen: true,
    firstOpen: false,
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
    toggleFirstOpen: () => set({ firstOpen: true})
}));
