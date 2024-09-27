import { MarkerGroup, MarkerLocation, Region } from "@/__generated__/graphql";
import { atom } from "jotai";

export const gameSlugAtom = atom<string | null>(null);
export const currentRegionAtom = atom<null | Region>(null);
export const currentMarkersAtom = atom<null | MarkerLocation[]>(null);
export const currentGroupsAtom = atom<null | MarkerGroup[]>(null);
export const triggerSubRegionIdAtom = atom<null | string>(null);
export const copyLinkTriggerAtom = atom<null | boolean>(false);
