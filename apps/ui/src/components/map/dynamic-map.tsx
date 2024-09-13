"use client";

import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/leaflet/smooth-wheel-zoom";
import { MarkerLocation, Region } from "@/__generated__/graphql";
import { MarkerRenderer } from "../markers/markers-renderer";
import { UserRecord } from "firebase-admin/auth";

const { MapContainer } = ReactLeaflet;

interface MapProps {
  region: Region;
  markers: MarkerLocation[];
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
}

const Map = ({ region, markers, user }: MapProps) => {
  const { tilePath, gameSlug, id, slug, thumbnailUrl, zoom, ...rest } = region;

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
      className="w-full h-full !bg-accent"
    >
      <ReactLeaflet.TileLayer
        url={`${process.env.NEXT_PUBLIC_TILES_URL}${tilePath}/{z}/{${first}}/{${second}}.${mimeType}`}
      />
      <MarkerRenderer markers={markers} gameSlug={gameSlug} user={user!} />
    </MapContainer>
  );
};

export default Map;
