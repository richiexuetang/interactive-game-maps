import { Popup, useMap, Marker as RlMarker } from "react-leaflet";
import * as React from "react";
import { Marker } from "./marker";
import { useAtomValue } from "jotai";
import { showMarkerAtom } from "@/store/marker";

export const MarkerRenderer = ({ markers }: any) => {
  const map = useMap();
  const showMarker = useAtomValue(showMarkerAtom);

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
          console.log(map.getCenter());
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = React.useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  if (!showMarker) return null;

  return (
    <>
      {markers.map(
        ({ title, longitude, latitude, category, description }: any) => (
          <Marker
            key={title}
            title={title}
            longitude={longitude}
            latitude={latitude}
            icon={category.icon}
            category={category.title}
            description={description}
          />
        )
      )}
      <RlMarker
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
      </RlMarker>
    </>
  );
};
