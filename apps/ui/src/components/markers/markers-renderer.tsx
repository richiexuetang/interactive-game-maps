import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { hiddenCategoriesAtom } from "@/store/category";
import { currentMarkersAtom } from "@/store/map";
import { NoteMarker } from "./note-marker";
import { userAtom } from "@/store/auth";
import { useParams } from "next/navigation";

export const MarkerRenderer = () => {
  const params = useParams<{ slug: string }>();

  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);
  const markers = useAtomValue(currentMarkersAtom);
  const appUser = useAtomValue(userAtom);

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
      {appUser?.noteMarkers.map(
        (
          { latitude, longitude, title, description, regionSlug, id },
          index
        ) => {
          if (params.slug === regionSlug) {
            return (
              <NoteMarker
                latitude={latitude ?? 0}
                longitude={longitude ?? 0}
                title={title ?? ""}
                description={description ?? ""}
                key={index}
                id={id}
              />
            );
          }
        }
      )}
    </>
  );
};
