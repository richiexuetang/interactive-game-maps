import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UserDef {
  id: string;
  createdAt: string;
  email: string;
  fullName: string;
  picture: string;
  updatedAt: string;
}

export interface AuthStateDef {
  user: UserDef | null;
  setUser: (data: UserDef) => void;
  removeUser: () => void;
}

export const useAuthState = create(
  persist<AuthStateDef>(
    (set) => ({
      user: null,
      setUser: (user: UserDef) => {
        set({ user });
      },
      removeUser: () => {
        set({ user: null });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
