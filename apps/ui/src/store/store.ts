import { atom } from "jotai";
import { Group, Location, Map, Region } from "@/__generated__/graphql";

interface CurrentMap extends Map {
  maxZoom: number;
  groups: Group[];
}

export const categoriesAtom = atom<string[]>([]);
export const hiddenCategoriesAtom = atom<number[]>([]);

export const currentMapAtom = atom<null | CurrentMap>(null);
export const focusRegionIdAtom = atom<null | string>(null);
export const boundedRegionAtom = atom<null | Region>(null);
export const copySnackbarAtom = atom<null | boolean>(false);

export const searchFilterMarkerAtom = atom<Location[]>([]);
export const triggeredMarkerAtom = atom<null | number>(null);
export const highlightedMarkerAtom = atom<null | number>(null);
export const markersRefAtom = atom<object>({});
export const openPopupAtom = atom<null | number>(null);
