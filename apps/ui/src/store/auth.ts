import { NoteMarker } from "@/__generated__/graphql";
import { atom } from "jotai";

interface User {
  email: string;
  foundLocations: number[];
  photoUrl: string;
  hideFound: boolean;
  noteMarkers: NoteMarker[];
}

export const userAtom = atom<User | null>(null);
