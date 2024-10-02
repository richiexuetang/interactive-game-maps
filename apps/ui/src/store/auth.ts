import { atom } from "jotai";

interface NoteMarker {
  id: string | number;
  latitude: number;
  longitude: number;
  mapSlug: string;
  title: string | null;
  description: string | null;
}
interface User {
  email: string;
  foundLocations: number[];
  hideFound: boolean;
  noteMarkers: NoteMarker[];
}

export const userAtom = atom<User | null>(null);
