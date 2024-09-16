import { atom } from "jotai";

interface User {
  email: string;
  foundLocations: number[] | string[];
  photoUrl: string;
}

export const userAtom = atom<User | null>(null);
