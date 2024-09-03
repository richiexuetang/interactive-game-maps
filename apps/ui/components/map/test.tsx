import { useMap, Marker, Popup } from "react-leaflet";
import * as React from "react";

const center = {
  lat: 0.66245,
  lng: -0.9,
};

export const Test = ({ markers }: any) => {
  const map = useMap();
  const [draggable, setDraggable] = React.useState(true);
  const [position, setPosition] = React.useState(center);
  const markerRef = React.useRef<any>(null);

  const eventHandlers = React.useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
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
    <>
      {markers.map((marker: any) => (
        <Marker
          key={marker.title}
          draggable={draggable}
          eventHandlers={eventHandlers}
          position={[markers[0].latitude, markers[0].longitude]}
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
      ))}
    </>
  );
};
