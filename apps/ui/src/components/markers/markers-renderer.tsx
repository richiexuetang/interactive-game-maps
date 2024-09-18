import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { showMarkerAtom } from "@/store/marker";
import { hiddenCategoriesAtom } from "@/store/category";
import { UserRecord } from "firebase-admin/auth";
import { currentMarkersAtom } from "@/store/map";

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
        if (!hiddenCategories.includes(categoryId.toString()))
          return <Marker key={marker.id} user={user} marker={marker} />;
      })}
    </>
  );
};
