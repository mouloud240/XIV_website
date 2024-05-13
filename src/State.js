"use client "
import { create } from "zustand"
export const UseGenerationStore = create((set) => ({
    drawerToggled: false, // Set a default value here
    setDrawerToggled: (drawerToggled) => set({ drawerToggled }),
  }));