import * as L from "leaflet";
import { useEffect, useRef, useState } from "react";
import { Marker, Polygon, useMap } from "react-leaflet";
import { useMapStore } from "@/store/map";

interface RegionLayerProps {
  positions?: number[][][] | null;
  id: string;
  centerX?: number | null;
  centerY?: number | null;
}

export const RegionLayer = ({
  positions,
  id,
  centerX,
  centerY,
}: RegionLayerProps) => {
  const polygonRef = useRef<L.Polygon | null>(null);
  const map = useMap();
  const [center, setCenter] = useState<L.LatLng | null>(null);
  const currentMap = useMapStore((state) => state.currentMap);
  const setCurrentMap = useMapStore((state) => state.setCurrentMap);

  //#region Hooks
  useEffect(() => {
    if (polygonRef?.current) {
      const center = polygonRef.current.getBounds().getCenter();
      setCenter(center);
    }
  }, [polygonRef]);

  useEffect(() => {
    if (currentMap?.focusedRegionId && currentMap.focusedRegionId === id) {
      const bounds = polygonRef?.current?.getBounds();
      if (bounds) {
        map.fitBounds(bounds);
      }
      setCurrentMap({ ...currentMap, focusedRegionId: null });
    }
  }, [currentMap, currentMap?.focusedRegionId, id, map, setCurrentMap]);
  //#endregion

  const iconWidth = id.length * 10;

  const text = L.divIcon({
    className: "map-label",
    iconSize: [iconWidth, 12],
    iconAnchor: [iconWidth / 2, 12],
    html: `${id}`,
  });

  if (!positions) return null;

  return (
    <>
      <Polygon
        ref={polygonRef}
        positions={positions as any}
        pathOptions={{ fillColor: "transparent", color: "transparent" }}
      />
      {center &&
        (centerX && centerY ? (
          <Marker
            position={[centerY, centerX]}
            icon={text}
            zIndexOffset={-1000}
          />
        ) : (
          <Marker position={center} icon={text} zIndexOffset={-1000} />
        ))}
    </>
  );
};
