import { useAtom } from "jotai";
import * as L from "leaflet";
import { useEffect, useRef, useState } from "react";
import { Marker, Polygon, useMap } from "react-leaflet";
import { focusRegionIdAtom } from "@/store";

export const RegionLayer = ({ positions, id }: any) => {
  const [triggerRegion, setTriggerRegion] = useAtom(focusRegionIdAtom);
  const polygonRef = useRef<L.Polygon | null>(null);
  const map = useMap();
  const [center, setCenter] = useState<L.LatLng | null>(null);

  useEffect(() => {
    if (polygonRef?.current) {
      const center = polygonRef.current.getBounds().getCenter();
      setCenter(center);
    }
  }, [polygonRef]);

  useEffect(() => {
    if (triggerRegion && triggerRegion === id) {
      const bounds = polygonRef?.current?.getBounds();
      if (bounds) {
        map.fitBounds(bounds);
      }
      setTriggerRegion(null);
    }
  }, [id, map, setTriggerRegion, triggerRegion]);

  const iconWidth = id.length * 10;

  const text = L.divIcon({
    className: "map-label",
    iconSize: [iconWidth, 12],
    iconAnchor: [iconWidth / 2, 12],
    html: `${id}`,
  });

  return (
    <>
      <Polygon
        ref={polygonRef}
        positions={positions}
        pathOptions={{ fillColor: "transparent", color: "transparent" }}
      />
      {center && (
        <Marker key={id} position={center} icon={text} zIndexOffset={-1000} />
      )}
    </>
  );
};