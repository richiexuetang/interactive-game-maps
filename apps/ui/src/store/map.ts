import { atom } from "jotai";
import { Group, Location, Map } from "@/__generated__/graphql";

interface CurrentMap extends Map {
  maxZoom: number;
}

export const gameSlugAtom = atom<string | null>(null);
export const currentMapAtom = atom<null | CurrentMap>(null);
export const currentMarkersAtom = atom<null | Location[]>(null);
export const currentGroupsAtom = atom<null | Group[]>(null);
export const triggerSubRegionIdAtom = atom<null | string>(null);
export const copyLinkTriggerAtom = atom<null | boolean>(false);
