import { MarkerGroup, MarkerLocation, Region } from "@/__generated__/graphql";
import { atom } from "jotai";

export const gameSlugAtom = atom<string | null>(null);
export const currentRegionAtom = atom<null | Region>(null);
export const currentMarkersAtom = atom<null | MarkerLocation[]>(null);
export const currentGroupsAtom = atom<null | MarkerGroup[]>(null);
