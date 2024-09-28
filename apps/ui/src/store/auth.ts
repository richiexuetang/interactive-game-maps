import { NoteMarker } from "@/__generated__/graphql";
import { atom } from "jotai";

interface User {
  email: string;
  foundLocations: number[];
  hideFound: boolean;
  noteMarkers: Partial<NoteMarker>[];
}

export const userAtom = atom<User | null>(null);
