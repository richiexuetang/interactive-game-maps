/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { Group, Location, Map, Region } from "@/__generated__/graphql";

export interface CurrentMapDef extends Map {
  maxZoom: number;
  groups: Group[];
  hiddenCategories: number[];
  focusedRegionId: string | null;
  copySnackbar: boolean;
  // Apply highlight style to marker when hovered during search
  highlightMarkerId: number | null;
  triggeredMarkerPopup: number | null;
  searchFilterMarkers: Location[];
  boundedRegion: Region | null;
}

export interface CurrentMapStateDef {
  currentMap: CurrentMapDef | null;
  setCurrentMap(map: CurrentMapDef): void;
  toggleCopySnackbar(): void;
}

export const useMapStore = create<CurrentMapStateDef>()((set) => ({
  currentMap: null,
  setCurrentMap: (map: CurrentMapDef) => {
    set({ currentMap: map });
  },
  toggleCopySnackbar: () => {
    set((state) => {
      if (state.currentMap) {
        return {
          currentMap: {
            ...state.currentMap,
            copySnackbar: !state.currentMap.copySnackbar,
          },
        };
      }
      return state;
    });
  },
}));
