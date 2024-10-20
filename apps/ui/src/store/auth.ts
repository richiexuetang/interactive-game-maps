/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AuthDef {
  id: string;
  createdAt: string;
  email: string;
  username: string;
  picture: string;
  updatedAt: string;
}

export interface AuthStateDef {
  auth: AuthDef | null;
  setUser: (data: AuthDef) => void;
  removeUser: () => void;
}

export const useAuthStore = create(
  persist<AuthStateDef>(
    (set) => ({
      auth: null,
      setUser: (user: AuthDef) => {
        set({ auth: user });
      },
      removeUser: () => {
        set({ auth: null });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
