import { MarkerLocation } from "@/__generated__/graphql";
import { atom } from "jotai";
import { LatLngExpression } from "leaflet";

interface NoteMarker {
  position: LatLngExpression;
  title: string | null;
  description: string | null;
}

export const searchFilterMarkerAtom = atom<MarkerLocation[]>([]);
export const triggeredMarkerIdAtom = atom<null | number>(null);
export const userNoteMarkerAtom = atom<NoteMarker[]>([]);
