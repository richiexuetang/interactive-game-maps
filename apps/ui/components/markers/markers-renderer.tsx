import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { showMarkerAtom } from "@/store/marker";
import { hiddenCategoriesAtom } from "@/store/category";

export const MarkerRenderer = ({ markers, gameSlug }: any) => {
  const showMarker = useAtomValue(showMarkerAtom);
  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);

  if (!showMarker) return null;

  return (
    <>
      {markers.map(
        ({ title, longitude, latitude, category, description }: any) => {
          if (hiddenCategories.includes(category.id)) return null;
          return (
            <Marker
              key={title}
              title={title}
              longitude={longitude}
              latitude={latitude}
              icon={category.icon}
              category={category.title}
              description={description}
              gameSlug={gameSlug}
            />
          );
        }
      )}
    </>
  );
};
