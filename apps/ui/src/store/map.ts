import { Group, Location, Map } from "@/__generated__/graphql";
import { atom } from "jotai";

export const gameSlugAtom = atom<string | null>(null);
export const currentRegionAtom = atom<null | Map>(null);
export const currentMarkersAtom = atom<null | Location[]>(null);
export const currentGroupsAtom = atom<null | Group[]>(null);
export const triggerSubRegionIdAtom = atom<null | string>(null);
export const copyLinkTriggerAtom = atom<null | boolean>(false);
