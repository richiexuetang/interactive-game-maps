/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Location } from "@/__generated__/graphql";

interface NoteMarker {
  id: string | number;
  latitude: number;
  longitude: number;
  mapSlug: string;
  title: string | null;
  description: string | null;
}

export interface UserDef {
  id: string;
  createdAt: string;
  email: string;
  fullName: string;
  picture: string;
  updatedAt: string;
  foundMarkers: Location[];
  noteMarkers: NoteMarker[];
  hideFound: boolean;
}

export interface AuthStateDef {
  user: UserDef | null;
  setUser: (data: UserDef) => void;
  removeUser: () => void;
}

export const useAuthStore = create(
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
