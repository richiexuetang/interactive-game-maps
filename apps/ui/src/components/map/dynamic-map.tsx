"use client";

import { useQuery } from "@apollo/client";
import { UserRecord } from "firebase-admin/auth";
import { useAtom, useSetAtom } from "jotai";
import { LatLngExpression, Map } from "leaflet";
import * as L from "leaflet";
import { useParams } from "next/navigation";
import * as React from "react";
import * as RL from "react-leaflet";
import "@/lib/leaflet/smooth-wheel-zoom";
import "@/lib/leaflet/context-menu";
import "@/lib/leaflet/full-screen";
import { v4 as uuidv4 } from "uuid";
import { CopyLinkNotifier } from "../event-notifier/copy-link-notifier";
import { RegionLayer } from "../layers/region";
import { MarkerRenderer } from "../markers/markers-renderer";
import { ProgressTracker } from "../progress-tracker";
import { Menu } from "../sidebar/left-sidebar";
import { Game } from "@/__generated__/graphql";
import { GET_CURRENT_USER, GET_MAP_REGIONS } from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";
import {
  userAtom,
  currentMapAtom,
  copySnackbarAtom,
  hiddenCategoriesAtom,
} from "@/store";

interface MapProps {
  user: Pick<UserRecord, "email" | "displayName"> | null;
  mapData: Game;
}

const flatten: any = (ary: any[]) =>
  ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

const DynamicMap = ({ user, mapData }: MapProps) => {
  //#region Hooks
  const params = useParams<{ slug: string }>();
  const [map, setMap] = React.useState<Map | null>(null);

  const { zoom, minZoom, maxZoom, center, maps } = mapData;
  const currentMap = maps?.find((r) => r.slug === params.slug);

  const [appUser, setAppUser] = useAtom(userAtom);
  const [mapConfig, setMapConfig] = useAtom(currentMapAtom);
  const setOpenSnackbar = useSetAtom(copySnackbarAtom);
  const setHiddenCategories = useSetAtom(hiddenCategoriesAtom);

  const { data: userData } = useQuery(GET_CURRENT_USER, {
    variables: { email: user?.email },
  });
  const { data: regionData } = useQuery(GET_MAP_REGIONS, {
    variables: { slug: currentMap!.slug },
  });
  //#endregion

  //#region Lifecycle Hooks
  React.useEffect(() => {
    if (userData?.getUser && !appUser) {
      setAppUser({
        ...userData?.getUser,
      });
    }
  }, [userData, appUser, setAppUser]);

  React.useEffect(() => {
    if (!mapConfig && currentMap) {
      setMapConfig({
        ...currentMap,
        maxZoom,
        groups: mapData.groups ?? [],
        gameSlug: mapData.slug,
      });
      const hiddenCategories = flatten(
        mapData.groups?.map((group) =>
          group.categories?.filter((cat) => cat.id && cat.defaultHidden)
        )
      );
      const ids = hiddenCategories.map(({ id }: any) => id);
      setHiddenCategories([...ids]);
    }
  }, [
    mapConfig,
    currentMap,
    mapData,
    setMapConfig,
    maxZoom,
    setHiddenCategories,
  ]);
  //#endregion

  return (
    <div className={cn("h-[calc(100vh-1rem)]", mapData.slug)}>
      <Menu
        maps={mapData.maps ?? []}
        regions={regionData?.getRegionsByMap}
        map={map}
      />
      <RL.MapContainer
        ref={setMap}
        preferCanvas={true}
        renderer={L.canvas()}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        center={center as LatLngExpression}
        attributionControl={false}
        zoomControl={false}
        scrollWheelZoom={false}
        // @ts-ignore
        fullscreenControl={true}
        fullscreenControlOptions={{ position: "topright" }}
        // @ts-ignore
        smoothWheelZoom={true}
        contextmenu={true}
        contextmenuWidth={140}
        contextmenuItems={[
          {
            text: "Add note",
            callback: ({ latlng }: any) => {
              setAppUser((prev) => ({
                ...prev!,
                noteMarkers: [
                  ...(prev?.noteMarkers ?? []),
                  {
                    title: "",
                    description: "",
                    latitude: latlng.lat,
                    longitude: latlng.lng,
                    id: uuidv4(),
                    mapSlug: params.slug,
                  },
                ],
              }));
            },
          },
          {
            text: "Copy Map View Url",
            callback: () => {
              setOpenSnackbar(true);
            },
          },
        ]}
        smoothSensitivity={15}
        className="w-full h-full"
      >
        <RL.TileLayer
          url={`${process.env.NEXT_PUBLIC_TILES_URL}${currentMap?.tilePath}/{z}/{y}/{x}.jpg`}
        />

        <RL.ZoomControl position="bottomright" />
        <CopyLinkNotifier />
        <MarkerRenderer />
        <ProgressTracker />
        {regionData?.getRegionsByMap?.map((sub: any) => (
          <RegionLayer
            key={sub.title}
            positions={sub.coordinates}
            id={sub.title}
          />
        ))}
      </RL.MapContainer>
    </div>
  );
};

export default DynamicMap;
