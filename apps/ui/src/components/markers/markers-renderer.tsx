import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { showMarkerAtom } from "@/store/marker";
import { hiddenCategoriesAtom } from "@/store/category";
import { MarkerLocation } from "@/__generated__/graphql";
import { UserRecord } from "firebase-admin/auth";

interface MarkerRendererProps {
  markers: MarkerLocation[];
  gameSlug: string;
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
}

export const MarkerRenderer = ({
  markers,
  gameSlug,
  user,
}: MarkerRendererProps) => {
  const showMarker = useAtomValue(showMarkerAtom);
  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);

  if (!showMarker) return null;

  return (
    <>
      {markers.map((marker) => {
        const categoryId = marker.categoryId ?? 0;
        if (!hiddenCategories.includes(categoryId.toString())) {
          return (
            <Marker
              key={marker.id}
              gameSlug={gameSlug}
              user={user}
              marker={marker}
            />
          );
        }
      })}
    </>
  );
};
