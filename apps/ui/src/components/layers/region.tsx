import * as L from "leaflet";
import { useEffect, useRef, useState } from "react";
import { Polygon, useMap } from "react-leaflet";
import { TextMarker } from "../leaflet";
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
    if (currentMap?.focusedRegionId === id && polygonRef?.current) {
      map.fitBounds(polygonRef.current.getBounds());

      setCurrentMap({ ...currentMap, focusedRegionId: null });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMap?.focusedRegionId, id, map]);
  //#endregion

  const position = center ? center : [centerX ?? 0, centerY ?? 0];
  return (
    <>
      {positions && (
        <Polygon
          ref={polygonRef}
          positions={positions as any}
          pathOptions={{ fillColor: "transparent", color: "transparent" }}
        />
      )}

      {center && <TextMarker position={position} text={id} type="REGION" />}
    </>
  );
};
