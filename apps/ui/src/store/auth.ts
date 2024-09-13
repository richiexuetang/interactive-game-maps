import { atom } from "jotai";

interface User {
  email: string;
  foundLocations: number[];
  photoUrl: string;
}

export const userAtom = atom<User | null>(null);
