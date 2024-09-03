import { Marker, Popup } from "react-leaflet";
import * as React from "react";

export const MarkerRenderer = ({ markers }: any) => {
  return (
    <>
      {markers.map((marker: any) => (
        <Marker
          key={marker.title}
          position={[markers[0].latitude, markers[0].longitude]}
        >
          <Popup minWidth={90}>
            <span>{marker.title}</span>
          </Popup>
        </Marker>
      ))}
    </>
  );
};
