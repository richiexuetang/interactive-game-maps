import { create } from "zustand";
import { Group, Map } from "@/__generated__/graphql";

export interface CurrentMapDef extends Map {
  maxZoom: number;
  groups: Group[];
}

export interface CurrentMapStateDef {
  currentMap: CurrentMapDef | null;
  // eslint-disable-next-line no-unused-vars
  setCurrentMap(map: CurrentMapDef): void;
}

export const useMapState = create((set) => ({
  currentMap: null,
  setCurrentMap: (map: CurrentMapDef) => {
    set({ currentMap: map });
  },
}));
