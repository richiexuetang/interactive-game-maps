"use client";

import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/leaflet/smooth-wheel-zoom";
import { MarkerGroup, MarkerLocation, Region } from "@/__generated__/graphql";
import { MarkerRenderer } from "../markers/markers-renderer";
import { UserRecord } from "firebase-admin/auth";
import { UserAvatar } from "../user-avatar";
import { Menu } from "../menu";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useAtom, useSetAtom } from "jotai";
import { gameSlugAtom } from "@/store";
import {
  currentGroupsAtom,
  currentMarkersAtom,
  currentRegionAtom,
} from "@/store/map";
import { MarkerSearch } from "../markers/marker-search";
import { ProgressTracker } from "../progress-tracker";
import data from "@/data/geo.json";

const { MapContainer } = ReactLeaflet;

interface MapProps {
  region: Region;
  markers: MarkerLocation[];
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
  groups: MarkerGroup[];
  regions: Region[];
}

const Map = ({ region, markers, user, groups, regions }: MapProps) => {
  // eslint-disable-next-line no-unused-vars
  const { tilePath, gameSlug, id, slug, thumbnailUrl, ...rest } = region;

  const [game, setGame] = useAtom(gameSlugAtom);
  const [currentRegion, setCurrentRegion] = useAtom(currentRegionAtom);
  const setCurrentMarkers = useSetAtom(currentMarkersAtom);
  const setCurrentGroups = useSetAtom(currentGroupsAtom);

  useEffect(() => {
    if (!game || game !== gameSlug) {
      setGame(gameSlug);
    }
  }, [game, gameSlug, setGame]);

  useEffect(() => {
    if (!currentRegion || currentRegion.id !== region.id) {
      setCurrentRegion(region);
      setCurrentMarkers([...markers]);
      setCurrentGroups([...groups]);
    }
  }, [
    currentRegion,
    groups,
    markers,
    region,
    setCurrentGroups,
    setCurrentMarkers,
    setCurrentRegion,
  ]);

  useEffect(() => {
    (async function init() {
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-icon-2x.png`,
        iconUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-icon.png`,
        shadowUrl: `${process.env.NEXT_PUBLIC_CDN_URL}leaflet/marker-shadow.png`,
      });
    })();
  }, []);

  return (
    <div
      className={cn(
        getFontClassName(gameSlug),
        "h-[calc(100vh-1rem)] overflow-hidden"
      )}
    >
      <Menu regions={regions} />
      <MapContainer
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
          url={`${process.env.NEXT_PUBLIC_TILES_URL}${tilePath}/{z}/{y}/{x}.jpg`}
        />
        <MarkerRenderer user={user!} />
        <MarkerSearch />
        <ProgressTracker />
        <ReactLeaflet.GeoJSON
          data={data as any}
          style={{ color: "transparent", weight: 0, opacity: 0 }}
        />
      </MapContainer>
      {user?.email && (
        <div className="z-[1000] absolute top-2 right-2">
          <UserAvatar
            imageSrc={user.photoURL ?? ""}
            name={user.displayName ?? ""}
          />
        </div>
      )}
    </div>
  );
};

export default Map;
