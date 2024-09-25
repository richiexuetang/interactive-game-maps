import { atom } from "jotai";

interface User {
  email: string;
  foundLocations: number[];
  photoUrl: string;
  hideFound: boolean;
}

export const userAtom = atom<User | null>(null);
