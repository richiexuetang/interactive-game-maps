"use client";

import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/leaflet/smooth-wheel-zoom";
import { MarkerLocation, Region } from "@/app/__generated__/graphql";
import { MarkerRenderer } from "../markers/markers-renderer";
import data from "@/lib/geo.json";

const { MapContainer } = ReactLeaflet;

const Map = ({
  region,
  markers,
}: {
  region: Region;
  markers: MarkerLocation[];
}) => {
  const {
    tilePath,
    gameSlug,
    id,
    slug,
    thumbnailUrl,
    defaultZoom: zoom,
    ...rest
  } = region;

  console.log(markers);
  useEffect(() => {
    (async function init() {
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-icon-2x.png`,
        iconUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-icon.png`,
        shadowUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-shadow.png`,
      });
    })();
  }, []);

  const mimeType = gameSlug === "witcher-3" ? "png" : "jpg";
  const first = gameSlug === "black-myth-wukong" ? "y" : "x";
  const second = gameSlug === "black-myth-wukong" ? "x" : "y";

  return (
    <MapContainer
      zoom={zoom}
      {...rest}
      attributionControl={false}
      zoomControl={false}
      scrollWheelZoom={false}
      // @ts-ignore
      smoothWheelZoom={true}
      smoothSensitivity={15}
      className="w-full h-full !bg-black"
    >
      <ReactLeaflet.TileLayer
        url={`${process.env.NEXT_PUBLIC_TILES_URL}${tilePath}/{z}/{${first}}/{${second}}.${mimeType}`}
      />
      <ReactLeaflet.GeoJSON data={data as any} />
      <MarkerRenderer markers={markers} gameSlug={gameSlug} />
    </MapContainer>
  );
};

export default Map;
