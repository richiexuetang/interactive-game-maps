import * as React from "react";
import { Marker } from "./marker";
import { NoteMarkers } from "./note-markers";
import { getMarkerBounds, pointIsInBounds } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";

/**
 * Handles rendering of markers (user note markers and game location markers)
 *
 * @returns
 */
export const MarkersRenderer = () => {
  const currentMap = useMapStore((state) => state.currentMap);
  const user = useAuthStore((state) => state.user);

  if (!currentMap) return null;

  const {
    locations,
    boundedRegion,
    searchFilterMarkers,
    hiddenCategories,
    triggeredMarkerPopup,
  } = currentMap;
  const coords = boundedRegion?.coordinates;
  const flattenBounds = getMarkerBounds(coords ? coords[0] : null);

  return (
    <>
      {locations?.map((marker) => {
        const { id, categoryId: catId, latitude, longitude } = marker;

        if (
          flattenBounds &&
          pointIsInBounds([latitude, longitude], flattenBounds)
        )
          return null;

        if (searchFilterMarkers.length > 0) {
          if (searchFilterMarkers.find((marker) => marker.id === id)) {
            return <Marker key={id} marker={marker} />;
          }
          return null;
        }

        const markerFound = user?.foundLocations.includes(id);

        if (
          markerFound &&
          user?.hideFound &&
          currentMap.triggeredMarkerPopup !== id
        )
          return null;
        if (
          catId &&
          hiddenCategories.includes(catId) &&
          id !== triggeredMarkerPopup
        ) {
          return null;
        }

        return <Marker key={id} marker={marker} />;
      })}

      <NoteMarkers />
    </>
  );
};
