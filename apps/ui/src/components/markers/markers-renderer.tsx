import { useAtomValue } from "jotai";
import { useParams } from "next/navigation";
import * as React from "react";
import { Marker } from "./marker";
import { NoteMarker } from "./note-marker";
import {
  boundedRegionAtom,
  currentMapAtom,
  hiddenCategoriesAtom,
  searchFilterMarkerAtom,
  triggeredMarkerAtom,
  userAtom,
} from "@/store";

export const MarkerRenderer = () => {
  const params = useParams<{ slug: string }>();

  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);
  const currentMap = useAtomValue(currentMapAtom);
  const appUser = useAtomValue(userAtom);
  const boundedRegion = useAtomValue(boundedRegionAtom);
  const triggeredMarkerId = useAtomValue(triggeredMarkerAtom);
  const searchMarkers = useAtomValue(searchFilterMarkerAtom);

  if (!currentMap) return null;

  function getMarkerBounds(arr: number[][] | null) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) return null;

    const minX = Math.min(...arr.map((subArr) => subArr[0]));
    const minY = Math.min(...arr.map((subArr) => subArr[1]));
    const maxX = Math.max(...arr.map((subArr) => subArr[0]));
    const maxY = Math.max(...arr.map((subArr) => subArr[1]));

    return [minX, minY, maxX, maxY];
  }
  const flattenBounds = getMarkerBounds(
    boundedRegion?.coordinates ? boundedRegion.coordinates[0] : null
  );

  return (
    <>
      {currentMap.locations?.map((marker) => {
        const { id, categoryId, latitude, longitude } = marker;

        if (flattenBounds) {
          if (
            latitude < flattenBounds[0] ||
            latitude > flattenBounds[2] ||
            longitude < flattenBounds[1] ||
            longitude > flattenBounds[3]
          ) {
            return null;
          }
        }
        if (searchMarkers.length) {
          if (searchMarkers.find((marker) => marker.id === id)) {
            return <Marker key={id} marker={marker} />;
          }
          return null;
        }
        const markerFound = appUser?.foundLocations.includes(id);

        if (markerFound && appUser?.hideFound) return null;
        if (
          categoryId &&
          hiddenCategories.includes(categoryId) &&
          id !== triggeredMarkerId
        ) {
          return null;
        }

        return <Marker key={id} marker={marker} />;
      })}
      {appUser?.noteMarkers?.map(
        ({ latitude, longitude, title, description, mapSlug, id }, index) => {
          if (params.slug === mapSlug) {
            return (
              <NoteMarker
                latitude={latitude ?? 0}
                longitude={longitude ?? 0}
                title={title ?? ""}
                description={description ?? ""}
                key={index}
                id={id}
                position={index}
              />
            );
          }
        }
      )}
    </>
  );
};
