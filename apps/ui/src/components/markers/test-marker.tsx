import * as React from "react";
import { Marker, Popup, useMap } from "react-leaflet";

export const TestMarker = ({ center }: any) => {
  const map = useMap();

  const [draggable, setDraggable] = React.useState(false);
  const [position, setPosition] = React.useState(center);
  const markerRef = React.useRef<any>(null);
  const eventHandlers = React.useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          console.log(marker.getLatLng());
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = React.useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
};
