/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { UserQuery } from "@/generated/graphql";

interface NoteMarker {
  id: string | number;
  latitude: number;
  longitude: number;
  mapSlug: string;
  title: string | null;
  description: string | null;
}

export interface UserDef {
  foundMarkers: UserQuery["user"]["foundMarkers"];
  noteMarkers: UserQuery["user"]["noteMarkers"] | any[];
  hideFound: boolean;
  favoriteMaps: UserQuery["user"]["favoriteMaps"];
}

export interface UserStateDef {
  user: UserDef;
  setUser: (data: UserDef) => void;
  addNote: (note: any) => void;
  setNotes: (notes: UserQuery["user"]["noteMarkers"]) => void;
  setFavorites: (map: UserQuery["user"]["favoriteMaps"]) => void;
  setFoundMarkers: (locations: UserQuery["user"]["foundMarkers"] | any) => void;
}

export const useUserStore = create<UserStateDef>()((set) => ({
  user: {
    foundMarkers: [],
    noteMarkers: [],
    hideFound: false,
    favoriteMaps: [],
  },
  setUser: (user: UserDef) => {
    set({ user });
  },
  addNote: (note: any) => {
    set((state) => ({
      user: {
        ...state.user!,
        noteMarkers: [...(state.user!.noteMarkers ?? []), note],
      },
    }));
  },
  setNotes: (noteMarkers: UserQuery["user"]["noteMarkers"]) => {
    set((state) => ({
      user: {
        ...state.user!,
        noteMarkers,
      },
    }));
  },
  setFavorites: (favoriteMaps: UserQuery["user"]["favoriteMaps"]) => {
    set((state) => ({
      user: {
        ...state.user!,
        favoriteMaps,
      },
    }));
  },
  setFoundMarkers: (foundMarkers: UserQuery["user"]["foundMarkers"]) => {
    set((state) => ({
      user: {
        ...state.user!,
        foundMarkers,
      },
    }));
  },
}));
