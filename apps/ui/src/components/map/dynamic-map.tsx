"use client";

import { useAtom, useSetAtom } from "jotai";
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
import { Menu, ProgressTracker } from "../sidebar";
import { User, Map } from "@/__generated__/graphql";
import { cn } from "@/lib/utils";
import {
  userAtom,
  currentMapAtom,
  copySnackbarAtom,
  hiddenCategoriesAtom,
} from "@/store";

interface MapProps {
  user: User | null;
  data: Map;
}

const flatten: any = (ary: any[]) =>
  ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

const DynamicMap = ({ user, data }: MapProps) => {
  //#region Hooks
  const params = useParams<{ slug: string }>();
  const [map, setMap] = React.useState<L.Map | null>(null);

  const { center, zoom, minZoom, maxZoom } = data;

  const [appUser, setAppUser] = useAtom(userAtom);
  const [mapConfig, setMapConfig] = useAtom(currentMapAtom);
  const setOpenSnackbar = useSetAtom(copySnackbarAtom);
  const setHiddenCategories = useSetAtom(hiddenCategoriesAtom);

  //#endregion

  //#region Lifecycle Hooks
  React.useEffect(() => {
    if (user && !appUser) {
      setAppUser({
        ...user,
        noteMarkers: user.noteMarkers ?? [],
        foundLocations: user.foundLocations ?? [],
      });
    }
  }, [user, appUser, setAppUser]);

  React.useEffect(() => {
    if (!mapConfig) {
      const groups = data.game?.groups ?? [];
      setMapConfig({
        ...data,
        groups,
        gameSlug: data.game?.slug ?? "",
      });
      const hiddenCategories = flatten(
        groups.map((group) =>
          group.categories?.filter((cat) => cat.id && cat.defaultHidden)
        )
      );
      const ids = hiddenCategories.map(({ id }: any) => id);
      setHiddenCategories([...ids]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, mapConfig]);
  //#endregion

  return (
    <div className={cn("h-[calc(100vh-1rem)]", data.game?.slug)}>
      <Menu map={map} />
      <RL.MapContainer
        ref={setMap}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        center={center as L.LatLngExpression}
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
          url={`${process.env.NEXT_PUBLIC_TILES_URL}${data?.tilePath}/{z}/{y}/{x}.jpg`}
        />

        <RL.ZoomControl position="bottomright" />
        <CopyLinkNotifier />
        <MarkerRenderer />
        <ProgressTracker />
        {data.regions?.map(({ title, coordinates, centerX, centerY }) => (
          <RegionLayer
            key={title}
            positions={coordinates}
            id={title}
            centerX={centerX}
            centerY={centerY}
          />
        ))}
      </RL.MapContainer>
    </div>
  );
};

export default DynamicMap;
