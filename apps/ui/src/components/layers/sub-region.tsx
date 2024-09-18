import { triggerSubRegionIdAtom } from "@/store/map";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { Marker, Polygon, useMap } from "react-leaflet";
import * as L from "leaflet";

export const SubRegion = ({ positions, id }: any) => {
  const [triggerSubRegionId, setTriggerSubRegionId] = useAtom(
    triggerSubRegionIdAtom
  );
  const polygonRef = useRef<any>(null);
  const map = useMap();

  useEffect(() => {
    if (triggerSubRegionId && triggerSubRegionId === id) {
      const bounds = polygonRef?.current?.getBounds();
      map.fitBounds(bounds);
      setTriggerSubRegionId(null);
    }
  }, [id, map, setTriggerSubRegionId, triggerSubRegionId]);

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
      {polygonRef?.current?.getBounds()?.getCenter() && (
        <Marker
          key={id}
          position={polygonRef?.current?.getBounds()?.getCenter()}
          icon={text}
          zIndexOffset={-1000}
        />
      )}
    </>
  );
};
