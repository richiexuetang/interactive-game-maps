import * as RL from "react-leaflet";
import * as L from "leaflet";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { MarkerLocation } from "@/__generated__/graphql";
import { triggeredMarkerIdAtom } from "@/store/marker";
import { useAtomValue } from "jotai";
import { gameSlugAtom } from "@/store";
import { userAtom } from "@/store/auth";
import { PopupCard } from "../cards/popup-card";

interface MarkerProps {
  marker: MarkerLocation;
}

export const Marker = ({ marker }: MarkerProps) => {
  const gameSlug = useAtomValue(gameSlugAtom);
  const { id, title, latitude, longitude, category } = marker;

  const { icon } = category!;

  const appUser = useAtomValue(userAtom);
  const triggeredMarkerId = useAtomValue(triggeredMarkerIdAtom);

  useEffect(() => {
    if (triggeredMarkerId === id && markerRef) {
      markerRef.current.openPopup();
    }
  }, [id, triggeredMarkerId]);

  // build div icon
  const div = document.createElement("div");
  div.className = `icon ${gameSlug} ${icon}`;

  const map = RL.useMap();
  const searchParams = useSearchParams();
  const markerRef = useRef<any>(null);

  useEffect(() => {
    const markerTitle = searchParams.get("marker");
    if (
      markerTitle &&
      title.toLowerCase().replaceAll(" ", "_") === markerTitle
    ) {
      map.flyTo([latitude, longitude]);
      if (markerRef?.current) {
        markerRef.current.openPopup();
      }
    }
  }, [latitude, longitude, map, searchParams, title]);

  const markerFound = appUser?.foundLocations.includes(id);

  if (markerFound && appUser?.hideFound) return null;

  return (
    <RL.Marker
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
      <RL.Popup>
        <PopupCard marker={marker} />
      </RL.Popup>
      <RL.Tooltip>{title}</RL.Tooltip>
    </RL.Marker>
  );
};
