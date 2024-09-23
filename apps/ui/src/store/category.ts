import { atom } from "jotai";

export const categoriesAtom = atom<string[]>([]);
export const hiddenCategoriesAtom = atom<number[]>([]);
export const hiddenGroupsAtom = atom<string[]>([]);
