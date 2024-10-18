/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
  username: string;
  picture: string;
  updatedAt: string;
  foundMarkers: Array<{ __typename?: "Location"; id: number }>;
  noteMarkers: NoteMarker[];
  hideFound: boolean;
  favoriteMaps: Array<{ __typename?: "Map"; slug: string }>;
}

export interface AuthStateDef {
  user: UserDef | null;
  setUser: (data: UserDef) => void;
  removeUser: () => void;
  addNote: (note: NoteMarker) => void;
  setNotes: (notes: NoteMarker[]) => void;
  setFavorites: (map: Array<{ __typename?: "Map"; slug: string }>) => void;
  setFoundMarkers: (
    locations: Array<{ __typename?: "Location"; id: number }>
  ) => void;
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
            noteMarkers: [...(state.user!.noteMarkers ?? []), note],
          },
        }));
      },
      setNotes: (noteMarkers: NoteMarker[]) => {
        set((state) => ({
          user: {
            ...state.user!,
            noteMarkers,
          },
        }));
      },
      setFavorites: (
        favoriteMaps: Array<{ __typename?: "Map"; slug: string }>
      ) => {
        set((state) => ({
          user: {
            ...state.user!,
            favoriteMaps,
          },
        }));
      },
      setFoundMarkers: (
        foundMarkers: Array<{ __typename?: "Location"; id: number }>
      ) => {
        set((state) => ({
          user: {
            ...state.user!,
            foundMarkers,
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
