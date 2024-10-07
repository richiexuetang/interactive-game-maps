import { useMutation } from "@apollo/client";
import * as L from "leaflet";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import * as RL from "react-leaflet";
import { PopupCard } from "../cards/popup-card";
import { Location } from "@/__generated__/graphql";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/graphql/constants";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";

interface MarkerProps {
  marker: Location;
}

export const Marker = ({ marker }: MarkerProps) => {
  const map = RL.useMap();
  const params = useParams<{ slug: string; gameSlug: string }>();
  const { id, title, latitude, longitude, category } = marker;

  const currentMap = useMapStore((state) => state.currentMap);
  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);
  const user = useAuthStore((state) => state.user);
  const setFoundLocations = useAuthStore((state) => state.setFoundLocations);
  const { icon } = category!;

  // build div icon
  const div = document.createElement("div");
  div.className = `icon ${icon} ${
    currentMap?.highlightMarkerId === id ? "highlight" : ""
  }`;

  const searchParams = useSearchParams();
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (currentMap?.triggeredMarkerPopup === id && markerRef?.current) {
      map.setView([latitude, longitude]);
      markerRef.current.openPopup();
    }
  }, [currentMap?.triggeredMarkerPopup, id, latitude, longitude, map]);

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
        `game/${params.gameSlug}/map/${params.slug}`
      );
    }
  }, [marker, map, params, searchParams, id, latitude, longitude]);

  useEffect(() => {
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const zoom = searchParams.get("zoom");

    if (lat && lng && zoom) {
      map.flyTo([parseFloat(lat), parseFloat(lng)], parseFloat(zoom));
      window.history.replaceState(
        null,
        "",
        `game/${params.gameSlug}/map/${params.slug}`
      );
    }
  }, [map, params, searchParams]);

  const markerFound = user?.foundLocations.includes(id);

  const handleMarkerFound = () => {
    if (user?.email) {
      const variables = { data: { email: user.email, location: id } };
      let newFoundLocations = [];
      if (markerFound) {
        removeLocation({ variables });
        newFoundLocations = user.foundLocations.filter(
          (location) => location !== id
        );
      } else {
        addLocation({ variables });
        newFoundLocations = [...user.foundLocations, id];
      }

      setFoundLocations(newFoundLocations);
    }
  };

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
      eventHandlers={{
        contextmenu: () => {
          handleMarkerFound();
        },
      }}
    >
      <RL.Popup>
        <PopupCard marker={marker} />
      </RL.Popup>
      <RL.Tooltip>{title}</RL.Tooltip>
    </RL.Marker>
  );
};
