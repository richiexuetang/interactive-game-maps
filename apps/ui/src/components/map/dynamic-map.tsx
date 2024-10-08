"use client";

import * as L from "leaflet";
import { useParams } from "next/navigation";
import * as React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "@/lib/leaflet/smooth-wheel-zoom";
import "@/lib/leaflet/context-menu";
import "@/lib/leaflet/full-screen";
import { v4 as uuidv4 } from "uuid";
import { CopyLinkNotifier } from "../event-notifier/copy-link-notifier";
import { RegionLayer } from "../layers/region";
import { MarkersRenderer } from "../markers/markers-renderer";
import { Menu, ProgressTracker } from "../sidebar";
import { Category, Map } from "@/__generated__/graphql";
import { mapContainerOptions } from "@/lib/leaflet/map-container-options";
import { cn, flatten } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { defaultState, useMapStore } from "@/store/map";

const DynamicMap = ({ data }: { data: Map }) => {
  //#region Hooks
  const params = useParams<{ mapSlug: string; gameSlug: string }>();
  const [map, setMap] = React.useState<L.Map | null>(null);

  const { center, zoom, minZoom, maxZoom } = data;

  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const setCurrentMap = useMapStore((state) => state.setCurrentMap);
  const currentMap = useMapStore((state) => state.currentMap);
  //#endregion

  //#region Lifecycle
  React.useEffect(() => {
    if (currentMap && currentMap.slug === data.slug) return;
    if (!data || !data.game || !data.game.groups) return;

    const { groups, slug } = data.game;
    const defaultHidden = flatten(
      groups.map(({ categories }) =>
        categories?.filter(({ id, defaultHidden }) => id && defaultHidden)
      )
    );

    setCurrentMap({
      ...defaultState,
      ...data,
      groups: groups,
      gameSlug: slug ?? "",
      hiddenCategories: defaultHidden.map(({ id }: Category) => id),
    });
  }, [data, currentMap, setCurrentMap]);
  //#endregion

  if (!currentMap) return null;

  return (
    <div className={cn("h-[calc(100vh-1rem)]", params.gameSlug)}>
      <Menu map={map} />

      <MapContainer
        ref={setMap}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        center={center as L.LatLngExpression}
        {...mapContainerOptions}
        // @ts-ignore
        contextmenuItems={[
          {
            text: `${user ? "Add Note" : ""}`,
            callback: ({ latlng }: any) => {
              if (!user) return;

              setUser({
                ...user,
                noteMarkers: [
                  ...user.noteMarkers,
                  {
                    title: "",
                    description: "",
                    latitude: latlng.lat,
                    longitude: latlng.lng,
                    id: uuidv4(),
                    mapSlug: params.mapSlug,
                  },
                ],
              });
            },
          },
          {
            text: "Copy Map View Url",
            callback: () =>
              setCurrentMap({ ...currentMap, copySnackbar: true }),
          },
        ]}
        className="w-full h-full"
      >
        <TileLayer
          url={`${process.env.NEXT_PUBLIC_TILES_URL}${params.gameSlug}/${params.mapSlug}/{z}/{y}/{x}.jpg`}
        />
        <CopyLinkNotifier />
        <ZoomControl position="bottomright" />

        <MarkersRenderer />
        <ProgressTracker />
        {data.regions?.map(({ title, coordinates, centerX, centerY }) => (
          <RegionLayer
            key={title}
            id={title}
            positions={coordinates}
            centerX={centerX}
            centerY={centerY}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default DynamicMap;
