import { create } from "zustand";

export interface SidebarState {
    isOpen: boolean;
    handleOpenOrClose: () => void;
    handleClose: () => void;
    isMinimal: boolean;
    handleSidebarChange: () => void;
}

export const useSidebarStore = create<SidebarState>()((set) => ({
    isOpen: false,
    isMinimal: false,
    handleOpenOrClose: () => set((state) => ({...state, isOpen: !state.isOpen})),
    handleClose: () => set((state) => ({...state, isOpen: false})),
    handleSidebarChange: () => set((state) => ({...state, isMinimal: !state.isMinimal}))
}));