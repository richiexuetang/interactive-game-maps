import L from "leaflet";
import { Marker } from "react-leaflet";

interface TextMarkerProps {
  text: string;
  position: number[] | L.LatLng;
  type: string; // MARKER or REGION
}

/**
 * Used to display a text marker on the map when the type is "TEXT"
 * or when it is a region with center coordinates.
 *
 * @param param0
 */
export const TextMarker = ({ text, position, type }: TextMarkerProps) => {
  return (
    <Marker
      position={position as L.LatLng}
      icon={L.divIcon({
        className: type === "MARKER" ? "marker-text-label" : "map-label",
        iconSize: [text.length * 10, 12],
        iconAnchor: [(text.length * 10) / 2, 12],
        html: `${text}`,
      })}
      zIndexOffset={-1000}
    />
  );
};
