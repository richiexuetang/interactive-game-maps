"use client";

import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerRenderer } from "../markers/marker-renderer";

const { MapContainer } = ReactLeaflet;

const Map = ({ width, height, tilePath, markers, ...rest }: any) => {
  useEffect(() => {
    (async function init() {
      // @ts-ignore
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-icon-2x.png`,
        iconUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-icon.png`,
        shadowUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-shadow.png`,
      });
    })();
  }, []);

  return (
    <MapContainer
      {...rest}
      attributionControl={false}
      zoomControl={false}
      className="w-full h-full"
    >
      <ReactLeaflet.TileLayer
        url={`${process.env.NEXT_PUBLIC_TILES_URL}${tilePath}/{z}/{y}/{x}.jpg`}
      />
      <MarkerRenderer markers={markers} />
    </MapContainer>
  );
};

export default Map;
