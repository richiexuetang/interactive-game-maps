import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { showMarkerAtom } from "@/store/marker";
import { hiddenCategoriesAtom } from "@/store/category";
import { UserRecord } from "firebase-admin/auth";
import { currentMarkersAtom } from "@/store/map";
import { LocationType } from "@/__generated__/graphql";
import * as RL from "react-leaflet";
import * as L from "leaflet";

interface MarkerRendererProps {
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
}

export const MarkerRenderer = ({ user }: MarkerRendererProps) => {
  const showMarker = useAtomValue(showMarkerAtom);
  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);
  const markers = useAtomValue(currentMarkersAtom);

  if (!showMarker || !markers) return null;

  return (
    <>
      {markers.map((marker) => {
        const categoryId = marker.categoryId ?? 0;
        if (!hiddenCategories.includes(categoryId.toString())) {
          if (marker.type === LocationType.Text) {
            const iconWidth = marker.title.length * 10;

            const text = L.divIcon({
              className: "map-label",
              iconSize: [iconWidth, 12],
              iconAnchor: [iconWidth / 2, 12],
              html: `${marker.title}`,
            });
            return (
              <RL.Marker
                key={marker.title}
                position={[marker.latitude, marker.longitude]}
                icon={text}
                zIndexOffset={-1000}
              />
            );
          }
          return <Marker key={marker.id} user={user} marker={marker} />;
        }
      })}
    </>
  );
};
