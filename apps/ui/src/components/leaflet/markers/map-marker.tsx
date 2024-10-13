import * as L from "leaflet";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Popup, useMap, Tooltip, Marker } from "react-leaflet";
import { PopupCard } from "@/components/cards/popup-card";
import { Location } from "@/generated/graphql";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";

export const MapMarker = ({ markerId }: { markerId: number }) => {
  //#region Hooks
  const map = useMap();
  const params = useParams<{ mapSlug: string; gameSlug: string }>();
  const searchParams = useSearchParams();
  const markerRef = useRef<L.Marker>(null);
  //#endregion

  const currentMap = useMapStore((state) => state.currentMap);
  const user = useAuthStore((state) => state.user);

  const marker: Location = currentMap?.locations?.find(
    (loc) => loc.id === markerId
  ) as Location;
  const { id, title, latitude, longitude, category } = marker;

  const { icon } = category!;
  const markerFound = user?.foundMarkers?.map((m) => m.id).includes(id);

  // build div icon
  const div = document.createElement("div");
  div.className = `icon ${icon} ${
    currentMap?.highlightMarkerId === id ? "highlight" : ""
  }`;

  //#region Life cycle hooks
  useEffect(() => {
    if (currentMap?.triggeredMarkerPopup === id && markerRef?.current) {
      map.setView([latitude, longitude]);
      markerRef.current.openPopup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMap?.triggeredMarkerPopup]);

  useEffect(() => {
    const markerId = searchParams.get("marker");
    if (markerId && id.toString() === markerId) {
      map.flyTo([latitude, longitude]);
      if (markerRef?.current) {
        markerRef.current.openPopup();
      }
      window.history.replaceState(
        null,
        "",
        `game/${params.gameSlug}/map/${params.mapSlug}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marker, map, params, searchParams]);

  useEffect(() => {
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const zoom = searchParams.get("zoom");

    if (lat && lng && zoom) {
      map.flyTo([parseFloat(lat), parseFloat(lng)], parseFloat(zoom));
    }
  }, [map, searchParams]);
  //#endregion

  return (
    <Marker
      ref={markerRef}
      position={[latitude, longitude]}
      opacity={markerFound ? 0.5 : 1}
      icon={L.divIcon({
        iconSize: [33, 44],
        iconAnchor: [17, 44],
        popupAnchor: [0, -44],
        tooltipAnchor: [22, -22],
        html: div,
      })}
      zIndexOffset={100 - longitude} // so markers don't glitch out while zooming
    >
      <Popup>
        <PopupCard marker={marker} />
      </Popup>
      <Tooltip>{title}</Tooltip>
    </Marker>
  );
};
