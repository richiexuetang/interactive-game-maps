import { MarkerLocation } from "@/__generated__/graphql";
import { atom } from "jotai";

export const showMarkerAtom = atom(true);
export const searchFilterMarkerAtom = atom<MarkerLocation[]>([]);
export const triggeredMarkerIdAtom = atom<null | number>(null);
