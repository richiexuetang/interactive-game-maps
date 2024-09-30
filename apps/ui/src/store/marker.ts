import { Location } from "@/__generated__/graphql";
import { atom } from "jotai";

export const searchFilterMarkerAtom = atom<Location[]>([]);
export const triggeredMarkerIdAtom = atom<null | number>(null);
export const triggeredRegionFocusAtom = atom<null | number>(null);
