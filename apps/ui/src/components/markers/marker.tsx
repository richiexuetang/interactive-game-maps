import { useMutation } from "@apollo/client";
import { useAtom, useAtomValue } from "jotai";
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
import { userAtom } from "@/store/auth";
import { highlightedMarkerIdAtom, triggeredMarkerIdAtom } from "@/store/marker";

interface MarkerProps {
  marker: Location;
}

export const Marker = ({ marker }: MarkerProps) => {
  const map = RL.useMap();
  const params = useParams<{ slug: string }>();
  const { id, title, latitude, longitude, category } = marker;
  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);
  const [appUser, setAppUser] = useAtom(userAtom);
  const highlightMarker = useAtomValue(highlightedMarkerIdAtom);
  const { icon } = category!;

  const triggeredMarkerId = useAtomValue(triggeredMarkerIdAtom);
  // build div icon
  const div = document.createElement("div");
  div.className = `icon ${icon} ${highlightMarker === id ? "highlight" : ""}`;

  const searchParams = useSearchParams();
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (triggeredMarkerId === id && markerRef?.current) {
      map.setView([latitude, longitude]);
      markerRef.current.openPopup();
    }
  }, [id, latitude, longitude, map, triggeredMarkerId]);

  useEffect(() => {
    const markerId = searchParams.get("marker");
    if (markerId && id.toString() === markerId) {
      map.flyTo([latitude, longitude]);
      if (markerRef?.current) {
        markerRef.current.openPopup();
      }
    }
    window.history.replaceState(null, "", "/map/" + params.slug);
  }, [id, latitude, longitude, map, params.slug, searchParams]);

  useEffect(() => {
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const zoom = searchParams.get("zoom");

    if (lat && lng && zoom) {
      map.flyTo([parseFloat(lat), parseFloat(lng)], parseFloat(zoom));
    }
    window.history.replaceState(null, "", "/map/" + params.slug);
  }, [map, params.slug, searchParams]);

  const markerFound = appUser?.foundLocations.includes(id);

  const handleMarkerFound = () => {
    if (appUser?.email) {
      const variables = { data: { email: appUser.email, location: id } };
      let newFoundLocations = [];
      if (markerFound) {
        removeLocation({ variables });
        newFoundLocations = appUser.foundLocations.filter(
          (location) => location !== id
        );
      } else {
        addLocation({ variables });
        newFoundLocations = [...appUser.foundLocations, id];
      }
      setAppUser({ ...appUser, foundLocations: newFoundLocations });
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
