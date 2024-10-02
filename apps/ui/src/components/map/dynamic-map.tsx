"use client";

import { useQuery } from "@apollo/client";
import Alert from "@mui/material/Alert";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { UserRecord } from "firebase-admin/auth";
import { useAtom, useSetAtom } from "jotai";
import { LatLngExpression } from "leaflet";
import { useParams } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";
import * as RL from "react-leaflet";
import "@/lib/leaflet/smooth-wheel-zoom";
import "@/lib/leaflet/context-menu";
import "@/lib/leaflet/full-screen";
import { v4 as uuidv4 } from "uuid";
import { MapEventListener } from "./map-event-listener";
import { RegionLayer } from "../layers/region";
import { MarkerSearch } from "../markers/marker-search";
import { MarkerRenderer } from "../markers/markers-renderer";
import { Menu } from "../menu";
import { ProgressTracker } from "../progress-tracker";
import { Game } from "@/__generated__/graphql";
import { GET_APP_USER, GET_REGIONS } from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";
import { gameSlugAtom } from "@/store";
import { userAtom } from "@/store/auth";
import {
  copyLinkTriggerAtom,
  currentGroupsAtom,
  currentMarkersAtom,
  currentMapAtom,
} from "@/store/map";

interface MapProps {
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
  mapData: Game;
}

const Map = ({ user, mapData }: MapProps) => {
  const { zoom, minZoom, maxZoom, center, maps } = mapData;
  const params = useParams<{ slug: string }>();

  const currentMap = maps?.find((r) => r.slug === params.slug);
  const [game, setGame] = useAtom(gameSlugAtom);
  const [appUser, setAppUser] = useAtom(userAtom);
  const [mapConfig, setMapConfig] = useAtom(currentMapAtom);
  const setCurrentMarkers = useSetAtom(currentMarkersAtom);
  const setCurrentGroups = useSetAtom(currentGroupsAtom);

  const { data: userData } = useQuery(GET_APP_USER, {
    variables: { email: user?.email },
  });
  const { data: regionData } = useQuery(GET_REGIONS, {
    variables: { slug: currentMap!.slug },
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
      setGame(mapData.slug);
    }
  }, [game, mapData.slug, setGame]);

  useEffect(() => {
    if (!mapConfig && currentMap) {
      setMapConfig({ ...currentMap, maxZoom: maxZoom });
      if (currentMap.locations) {
        setCurrentMarkers([...currentMap.locations]);
      }
      if (mapData.groups) {
        setCurrentGroups([...mapData.groups]);
      }
    }
  }, [
    mapConfig,
    currentMap,
    mapData.groups,
    setCurrentGroups,
    setCurrentMarkers,
    setMapConfig,
    maxZoom,
  ]);

  const [openSnackbar, setOpenSnackbar] = useAtom(copyLinkTriggerAtom);

  const handleClose = (
    event?: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div className={cn("h-[calc(100vh-1rem)]", mapData.slug)}>
      <Snackbar
        open={openSnackbar ?? false}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Link successfully copied!
        </Alert>
      </Snackbar>
      <Menu maps={mapData.maps ?? []} regions={regionData?.getRegionsByMap} />
      <RL.MapContainer
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
        <MarkerRenderer />
        <MarkerSearch />
        <ProgressTracker />
        <MapEventListener regionSlug={params.slug} />
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

export default Map;
