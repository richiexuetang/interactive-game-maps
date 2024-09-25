import type { LatLngExpression } from "leaflet";
import { Marker, Popup } from "react-leaflet";

interface NoteMarkerProps {
  position: LatLngExpression;
  title: string | null;
  description: string | null;
}

export const NoteMarker = ({
  position,
  title,
  description,
}: NoteMarkerProps) => {
  return (
    <Marker position={position} draggable={true}>
      <Popup>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Popup>
    </Marker>
  );
};
