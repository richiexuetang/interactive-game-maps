import * as React from "react";
import { Marker } from "./marker";
import { NoteMarkers } from "./note-markers";
import { TextMarker } from "../leaflet";
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
  const { foundMarkers, hideFound } = user ?? {
    foundMarkers: [],
    hideFound: false,
  };
  const coords = boundedRegion?.coordinates;
  const flattenBounds = getMarkerBounds(coords ? coords[0] : null);

  return (
    <>
      {locations?.map(
        ({ id, categoryId: catId, latitude, longitude, type, title }) => {
          if (type === "TEXT") {
            return (
              <TextMarker
                key={id}
                position={[latitude, longitude]}
                text={title}
                type="MARKER"
              />
            );
          }

          if (
            flattenBounds &&
            pointIsInBounds([latitude, longitude], flattenBounds)
          )
            return null;

          if (searchFilterMarkers.length > 0) {
            if (searchFilterMarkers.find((marker) => marker.id === id)) {
              return <Marker key={id} markerId={id} />;
            }
            return null;
          }

          const markerFound = foundMarkers.map((m) => m.id).includes(id);

          if (
            markerFound &&
            hideFound &&
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

          return <Marker key={id} markerId={id} />;
        }
      )}

      <NoteMarkers />
    </>
  );
};
