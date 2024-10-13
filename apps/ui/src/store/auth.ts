/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Location, Map } from "@/generated/graphql";

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
  favoriteMaps: Map[];
}

export interface AuthStateDef {
  user: UserDef | null;
  setUser: (data: UserDef) => void;
  removeUser: () => void;
  addNote: (note: NoteMarker) => void;
}

export const useAuthStore = create(
  persist<AuthStateDef>(
    (set) => ({
      user: null,
      setUser: (user: UserDef) => {
        set({ user });
      },
      addNote: (note: NoteMarker) => {
        set((state) => ({
          user: {
            ...state.user!,
            noteMarkers: [...state.user!.noteMarkers, note],
          },
        }));
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
