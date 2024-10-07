import { useParams } from "next/navigation";
import * as React from "react";
import { Marker } from "./marker";
import { NoteMarker } from "./note-marker";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";

export const MarkerRenderer = () => {
  const params = useParams<{ slug: string }>();

  const currentMap = useMapStore((state) => state.currentMap);
  const user = useAuthStore((state) => state.user);

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
    currentMap?.boundedRegion?.coordinates
      ? currentMap?.boundedRegion.coordinates[0]
      : null
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
        if (currentMap?.searchFilterMarkers.length > 0) {
          if (
            currentMap?.searchFilterMarkers.find((marker) => marker.id === id)
          ) {
            return <Marker key={id} marker={marker} />;
          }
          return null;
        }
        const markerFound = user?.foundLocations.includes(id);

        if (markerFound && user?.hideFound) return null;
        if (
          categoryId &&
          currentMap.hiddenCategories.includes(categoryId) &&
          id !== currentMap?.triggeredMarkerPopup
        ) {
          return null;
        }

        return <Marker key={id} marker={marker} />;
      })}
      {user?.noteMarkers?.map(
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
