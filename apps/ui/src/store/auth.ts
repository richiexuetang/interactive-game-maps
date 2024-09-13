import { atom } from "jotai";

interface User {
  email: string;
}

export const userAtom = atom<User | null>(null);
