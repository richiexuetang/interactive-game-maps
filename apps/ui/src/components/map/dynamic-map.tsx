"use client";

import { useEffect } from "react";
import Leaflet from "leaflet";
import * as RL from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/lib/leaflet/smooth-wheel-zoom";
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
import { useQuery } from "@apollo/client";
import { GET_APP_USER, GET_SUB_REGIONS } from "@/lib/constants";
import { userAtom } from "@/store/auth";
import { SubRegion } from "../layers/sub-region";

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
  const [appUser, setAppUser] = useAtom(userAtom);
  const [currentRegion, setCurrentRegion] = useAtom(currentRegionAtom);
  const setCurrentMarkers = useSetAtom(currentMarkersAtom);
  const setCurrentGroups = useSetAtom(currentGroupsAtom);

  const { data: userData } = useQuery(GET_APP_USER, {
    variables: { email: user?.email },
  });
  const { data: subRegionData } = useQuery(GET_SUB_REGIONS, {
    variables: { slug: region?.slug ?? "" },
  });

  useEffect(() => {
    if (userData && !appUser) {
      const data = userData?.getUser;
      setAppUser({
        ...data,
      });
    }
  }, [userData, appUser, setAppUser]);

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
    <div className={cn(getFontClassName(gameSlug), "h-[calc(100vh-1rem)] ")}>
      <Menu
        regions={regions}
        subRegions={subRegionData?.getSubRegionsByRegion}
      />
      <RL.MapContainer
        {...rest}
        attributionControl={false}
        zoomControl={false}
        scrollWheelZoom={false}
        // @ts-ignore
        smoothWheelZoom={true}
        smoothSensitivity={15}
        className="w-full h-full !bg-accent"
      >
        <RL.TileLayer
          url={`${process.env.NEXT_PUBLIC_TILES_URL}${tilePath}/{z}/{y}/{x}.jpg`}
        />
        <MarkerRenderer user={user!} />
        <MarkerSearch />
        <ProgressTracker />
        {subRegionData?.getSubRegionsByRegion?.map((sub: any) => (
          <SubRegion
            key={sub.title}
            positions={sub.coordinates}
            id={sub.title}
          />
        ))}
      </RL.MapContainer>
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
