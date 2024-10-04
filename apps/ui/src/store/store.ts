import { atom } from "jotai";
import { Group, Location, Map, Region, User } from "@/__generated__/graphql";

interface CurrentMap extends Map {
  maxZoom: number;
  groups: Group[];
}

interface NoteMarker {
  id: string | number;
  latitude: number;
  longitude: number;
  mapSlug: string;
  title: string | null;
  description: string | null;
}

interface AppUser extends Omit<User, "noteMarkers" | "foundLocations"> {
  noteMarkers: NoteMarker[] | null;
  foundLocations: number[];
}

export const userAtom = atom<AppUser | null>(null);

export const categoriesAtom = atom<string[]>([]);
export const hiddenCategoriesAtom = atom<number[]>([]);

export const currentMapAtom = atom<null | CurrentMap>(null);
export const focusRegionIdAtom = atom<null | string>(null);
export const boundedRegionAtom = atom<null | Region>(null);
export const copySnackbarAtom = atom<null | boolean>(false);

export const searchFilterMarkerAtom = atom<Location[]>([]);
export const triggeredMarkerAtom = atom<null | number>(null);
export const highlightedMarkerAtom = atom<null | number>(null);
