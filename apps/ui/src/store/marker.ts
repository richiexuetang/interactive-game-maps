import { MarkerLocation } from "@/__generated__/graphql";
import { atom } from "jotai";

export const showMarkerAtom = atom(true);
export const hideFoundAtom = atom(false);
export const searchFilterMarkerAtom = atom<MarkerLocation[]>([]);
export const triggeredMarkerIdAtom = atom<null | string>(null);
