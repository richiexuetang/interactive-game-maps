import { useAtomValue, useSetAtom } from "jotai";
import * as L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "@/lib/leaflet/markers-canvas";
import {
  currentMapAtom,
  hiddenCategoriesAtom,
  markersRefAtom,
  openPopupAtom,
} from "@/store";

export default function CanvasMarker() {
  const map = useMap();
  const currentMap = useAtomValue(currentMapAtom);
  const setMarkersRef = useSetAtom(markersRefAtom);
  const setOpenPopup = useSetAtom(openPopupAtom);
  const hiddenCategories = useAtomValue(hiddenCategoriesAtom);

  useEffect(() => {
    if (!map || !currentMap) return;

    // @ts-ignore
    const ciLayer = L.canvasIconLayer({}).addTo(map);

    ciLayer.addOnClickListener(function (e: any, data: any) {
      setOpenPopup(data[0].data._leaflet_id);
    });

    currentMap.locations?.forEach(
      ({ category, categoryId, latitude, longitude, title, id }) => {
        if (categoryId && hiddenCategories.includes(categoryId)) return;

        const icon = L.icon({
          iconUrl: `/markers/${currentMap.game?.slug}/${category?.icon}.png`,
          iconSize: [33, 44],
          iconAnchor: [17, 44],
          popupAnchor: [0, -44],
          tooltipAnchor: [22, -22],
        });
        const marker = L.marker([latitude, longitude], {
          icon: icon,
        }).bindTooltip(title);

        ciLayer.addMarker(marker);
        setMarkersRef((prev) => ({
          ...prev,
          // @ts-ignore
          [marker._leaflet_id]: id,
        }));
      }
    );
  }, [currentMap, map, setMarkersRef, setOpenPopup]);

  return null;
}
