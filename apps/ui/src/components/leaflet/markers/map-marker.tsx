import * as L from "leaflet";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { Popup, useMap, Tooltip, Marker } from "react-leaflet";
import { PopupCard } from "@/components/cards/popup-card";
import { Location } from "@/generated/graphql";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";

export const MapMarker = ({ markerId }: { markerId: number }) => {
  //#region Hooks
  const map = useMap();
  const searchParams = useSearchParams();
  const markerRef = useRef<L.Marker>(null);
  const router = useRouter();
  const pathname = usePathname();

  const { locations, highlightMarkerId, triggeredMarkerPopup } =
    useMapStore((state) => state.currentMap) ?? {};
  const { foundMarkers } = useAuthStore((state) => state.user) ?? {};
  //#endregion

  const marker: Location = locations?.find(
    (loc) => loc.id === markerId
  ) as Location;
  const { id, title, latitude, longitude, category } = marker;

  const { icon } = category!;
  const markerFound = foundMarkers?.map((m) => m.id).includes(id);

  // build div icon
  const div = document.createElement("div");
  div.className = `icon ${icon} ${highlightMarkerId === id ? "highlight" : ""}`;

  //#region Life cycle hooks
  useEffect(() => {
    if (triggeredMarkerPopup === id) {
      map.setView([latitude, longitude]);
      markerRef?.current?.openPopup();
    }
  });

  useEffect(() => {
    const markerSearchParam = searchParams.get("marker");

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const zoom = searchParams.get("zoom");

    if (markerSearchParam) {
      const markerId = parseInt(markerSearchParam);
      if (markerId === id) {
        map.flyTo([latitude, longitude]);
        markerRef?.current?.openPopup();
      }
      router.replace(pathname);
    }

    if (lat && lng && zoom) {
      map.flyTo([parseFloat(lat), parseFloat(lng)], parseFloat(zoom));
      router.replace(pathname);
    }
  });
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
