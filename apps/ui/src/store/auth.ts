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
  fullName: string;
  picture: string;
  updatedAt: string;
  foundLocations: number[];
  noteMarkers: NoteMarker[];
  hideFound: boolean;
}

export interface AuthStateDef {
  user: UserDef | null;
  setUser: (data: UserDef) => void;
  updateFoundLocations: (location: number) => void;
  setNoteMarkers: (noteMarkers: NoteMarker[]) => void;
  setFoundLocations: (foundLocations: number[]) => void;
  toggleHideFound: (hide: boolean) => void;
  removeUser: () => void;
}

export const useAuthStore = create(
  persist<AuthStateDef>(
    (set) => ({
      user: null,
      setUser: (user: UserDef) => {
        set({ user });
      },
      toggleHideFound: (hide) => {
        set((state) => {
          if (state.user) {
            return {
              user: {
                ...state.user,
                hideFound: hide,
              },
            };
          }
          return state;
        });
      },
      setNoteMarkers: (noteMarkers) => {
        set((state) => {
          if (state.user) {
            return {
              user: {
                ...state.user,
                noteMarkers,
              },
            };
          }
          return state;
        });
      },
      setFoundLocations: (foundLocations) => {
        set((state) => {
          if (state.user) {
            return {
              user: {
                ...state.user,
                foundLocations,
              },
            };
          }
          return state;
        });
      },
      updateFoundLocations: (location) => {
        set((state) => {
          if (state.user) {
            return {
              user: {
                ...state.user,
                foundLocations: [...state.user.foundLocations, location],
              },
            };
          }
          return state;
        });
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
