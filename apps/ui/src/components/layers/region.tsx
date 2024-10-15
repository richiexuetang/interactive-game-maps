import * as L from "leaflet";
import { useEffect, useRef } from "react";
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
  const { focusedRegionId } = useMapStore((state) => state.currentMap) || {};
  const setFocusedRegionId = useMapStore((state) => state.setFocusedRegionId);

  //#region Hooks
  useEffect(() => {
    if (focusedRegionId === id) {
      map.fitBounds(polygonRef.current?.getBounds()!);

      setFocusedRegionId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedRegionId]);
  //#endregion

  const center = polygonRef?.current?.getBounds().getCenter();

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
