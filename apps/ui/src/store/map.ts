/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { Group, Location, Map, Region } from "@/__generated__/graphql";

export const defaultState = {
  maxZoom: 0,
  groups: [],
  hiddenCategories: [],
  focusedRegionId: null,
  copySnackbar: false,
  highlightMarkerId: null,
  triggeredMarkerPopup: null,
  searchFilterMarkers: [],
  boundedRegion: null,
};

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
}

export const useMapStore = create<CurrentMapStateDef>()((set) => ({
  currentMap: null,
  setCurrentMap: (map: CurrentMapDef) => {
    set({ currentMap: map });
  },
}));
