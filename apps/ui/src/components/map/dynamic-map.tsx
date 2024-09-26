"use client";

import { useEffect } from "react";
import * as RL from "react-leaflet";
import "@/lib/leaflet/smooth-wheel-zoom";
import "@/lib/leaflet/context-menu";
import { MarkerRenderer } from "../markers/markers-renderer";
import { UserRecord } from "firebase-admin/auth";
import { UserAvatar } from "../user-avatar";
import { Menu } from "../menu";
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
import { GET_APP_USER, GET_SUB_REGIONS } from "@/lib/graphql/constants";
import { userAtom } from "@/store/auth";
import { SubRegion } from "../layers/sub-region";
import { Game } from "@/__generated__/graphql";
import { useParams } from "next/navigation";
import { LatLngExpression } from "leaflet";
import { userNoteMarkerAtom } from "@/store/marker";
import { getFontClassName } from "@/lib/font";

interface MapProps {
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
  regionData: Game;
}

const Map = ({ user, regionData }: MapProps) => {
  const { zoom, minZoom, maxZoom, center } = regionData;
  const params = useParams<{ slug: string }>();

  const region = regionData.regions?.find((r) => r.slug === params.slug);

  const [game, setGame] = useAtom(gameSlugAtom);
  const [appUser, setAppUser] = useAtom(userAtom);
  const setUserNoteMarkerAtom = useSetAtom(userNoteMarkerAtom);
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
    if (userData?.getUser && !appUser) {
      setAppUser({
        ...userData?.getUser,
      });
    }
  }, [userData, appUser, setAppUser]);

  useEffect(() => {
    if (!game) {
      setGame(regionData.slug);
    }
  }, [game, regionData.slug, setGame]);

  useEffect(() => {
    if (!currentRegion && region) {
      setCurrentRegion(region);
      if (region.locations) {
        setCurrentMarkers([...region.locations]);
      }
      if (regionData.groups) {
        setCurrentGroups([...regionData.groups]);
      }
    }
  }, [
    currentRegion,
    region,
    regionData.groups,
    setCurrentGroups,
    setCurrentMarkers,
    setCurrentRegion,
  ]);

  return (
    <div
      className={cn(
        getFontClassName(regionData.slug),
        "h-[calc(100vh-1rem)]",
        regionData.slug
      )}
    >
      <Menu
        regions={regionData.regions ?? []}
        subRegions={subRegionData?.getSubRegionsByRegion}
      />
      <RL.MapContainer
        preferCanvas={true}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        center={center as LatLngExpression}
        attributionControl={false}
        zoomControl={false}
        scrollWheelZoom={false}
        // @ts-ignore
        smoothWheelZoom={true}
        contextmenu={true}
        contextmenuWidth={140}
        contextmenuItems={[
          {
            text: "Add note",
            callback: ({ latlng }: any) => {
              setUserNoteMarkerAtom((prev) => [
                ...prev,
                {
                  position: latlng,
                  title: null,
                  description: null,
                },
              ]);
            },
          },
          {
            text: "Zoom in",
          },
          {
            text: "Zoom out",
          },
        ]}
        smoothSensitivity={15}
        className="w-full h-full"
      >
        <RL.TileLayer
          url={`${process.env.NEXT_PUBLIC_TILES_URL}${region?.tilePath}/{z}/{y}/{x}.jpg`}
        />
        <RL.ZoomControl position="bottomright" />
        <MarkerRenderer />
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
