import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "@/lib/leaflet/canvas-markers";
import { useMapStore } from "@/store";

export const MarkersCanvasLayer = () => {
  const map = useMap();
  const { locations } = useMapStore((state) => state.currentMap) || {};

  useEffect(() => {
    if (!map) return;

    // @ts-expect-error
    const ciLayer = new L.MarkersCanvas();

    ciLayer.addTo(map);
    // ciLayer.addOnClickListener(function (e: any, data: any) {
    //   console.log(data);
    // });
    // ciLayer.addOnHoverListener(function (e: any, data: any) {
    //   console.log(data[0].data._leaflet_id);
    // });

    var icon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [20, 18],
      iconAnchor: [10, 9],
    });

    var markers: any[] = [];
    locations?.forEach(({ latitude, longitude }, i) => {
      const marker = L.marker([latitude, longitude], { icon: icon }).bindPopup(
        "I Am " + i
      );
      markers.push(marker);
    });

    ciLayer.addMarkers(markers);
  });

  return null;
};
