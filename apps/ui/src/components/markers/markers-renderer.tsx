import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { hiddenCategoriesAtom } from "@/store/category";
import { currentMarkersAtom } from "@/store/map";

export const MarkerRenderer = () => {
  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);
  const markers = useAtomValue(currentMarkersAtom);

  if (!markers) return null;

  return (
    <>
      {markers.map((marker) => {
        const { id, categoryId } = marker;
        if (categoryId && hiddenCategories.includes(categoryId)) {
          return null;
        }
        return <Marker key={id} marker={marker} />;
      })}
    </>
  );
};
