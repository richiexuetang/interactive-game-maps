import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { hiddenCategoriesAtom } from "@/store/category";
import { currentMarkersAtom } from "@/store/map";
import { NoteMarker } from "./note-marker";
import { userAtom } from "@/store/auth";
import { useParams } from "next/navigation";
import { userNoteMarkerAtom } from "@/store/marker";

export const MarkerRenderer = () => {
  const params = useParams<{ slug: string }>();

  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);
  const markers = useAtomValue(currentMarkersAtom);
  const appUser = useAtomValue(userAtom);
  const noteMarkers = useAtomValue(userNoteMarkerAtom);

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
        ({ latitude, longitude, title, description, regionSlug }, index) => {
          if (params.slug === regionSlug) {
            return (
              <NoteMarker
                position={[latitude, longitude]}
                title={title}
                description={description}
                index={index}
                key={index}
              />
            );
          }
        }
      )}
      {noteMarkers.map(({ position, title, description }, index) => (
        <NoteMarker
          position={position as any}
          title={title}
          description={description}
          index={index}
          key={index}
        />
      ))}
    </>
  );
};
