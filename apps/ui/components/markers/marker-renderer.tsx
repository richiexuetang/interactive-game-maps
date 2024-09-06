import { Marker, Popup, Tooltip, useMap } from "react-leaflet";
import * as React from "react";

export const MarkerRenderer = ({ markers }: any) => {
  const map = useMap();
  const [draggable, setDraggable] = React.useState(true);
  const [position, setPosition] = React.useState([
    0.1867672473697175, -0.68389892578125,
  ]);
  const markerRef = React.useRef<any>(null);

  const eventHandlers = React.useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          console.log(marker.getLatLng());
          alert(map.getBounds().getCenter());
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
          position={[marker.latitude, marker.longitude]}
        >
          <Popup minWidth={90}>
            <span>{marker.title}</span>
          </Popup>
          <Tooltip>{marker.title}</Tooltip>
        </Marker>
      ))}
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position as any}
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
    </>
  );
};
