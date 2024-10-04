import { atom } from "jotai";
import { Location, Map } from "@/__generated__/graphql";
import { Group } from "@/__generated__/graphql";

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
interface User {
  email: string;
  foundLocations: any[];
  hideFound: boolean;
  noteMarkers: NoteMarker[];
}

export const userAtom = atom<User | null>(null);

export const categoriesAtom = atom<string[]>([]);
export const hiddenCategoriesAtom = atom<number[]>([]);

export const currentMapAtom = atom<null | CurrentMap>(null);
export const focusRegionIdAtom = atom<null | string>(null);
export const copySnackbarAtom = atom<null | boolean>(false);

export const searchFilterMarkerAtom = atom<Location[]>([]);
export const triggeredMarkerAtom = atom<null | number>(null);
export const highlightedMarkerAtom = atom<null | number>(null);
