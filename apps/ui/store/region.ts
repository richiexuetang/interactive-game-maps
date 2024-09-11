import { Region } from "@/app/__generated__/graphql";
import { atom } from "jotai";

interface RegionsAtom {
  gameSlug: null | string;
  regions: Region[];
}
export const regionsAtom = atom<RegionsAtom>({ gameSlug: null, regions: [] });
