import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { hiddenCategoriesAtom } from "@/store/category";
import { currentMarkersAtom } from "@/store/map";
import { userNoteMarkerAtom } from "@/store/marker";
import { NoteMarker } from "./note-marker";

export const MarkerRenderer = () => {
  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);
  const markers = useAtomValue(currentMarkersAtom);
  const userNoteMarkers = useAtomValue(userNoteMarkerAtom);

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
      {userNoteMarkers.map(({ position, title, description }, index) => (
        <NoteMarker
          position={position}
          title={title}
          description={description}
          index={index}
          key={index}
        />
      ))}
    </>
  );
};
