"use client";

import { SyntheticEvent, useEffect } from "react";
import * as RL from "react-leaflet";
import "@/lib/leaflet/smooth-wheel-zoom";
import "@/lib/leaflet/context-menu";
import "@/lib/leaflet/full-screen";
import { MarkerRenderer } from "../markers/markers-renderer";
import { UserRecord } from "firebase-admin/auth";
import { Menu } from "../menu";
import { cn } from "@/lib/utils";
import { useAtom, useSetAtom } from "jotai";
import { gameSlugAtom } from "@/store";
import {
  copyLinkTriggerAtom,
  currentGroupsAtom,
  currentMarkersAtom,
  currentRegionAtom,
} from "@/store/map";
import { MarkerSearch } from "../markers/marker-search";
import { ProgressTracker } from "../progress-tracker";
import { useQuery } from "@apollo/client";
import { GET_APP_USER, GET_REGIONS } from "@/lib/graphql/constants";
import { userAtom } from "@/store/auth";
import { SubRegion } from "../layers/sub-region";
import { Game } from "@/__generated__/graphql";
import { useParams } from "next/navigation";
import { LatLngExpression } from "leaflet";
import { getFontClassName } from "@/lib/font";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { MapEventListener } from "./map-event-listener";
import { v4 as uuidv4 } from "uuid";

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
  const [currentRegion, setCurrentRegion] = useAtom(currentRegionAtom);
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
    if (!currentRegion && currentMap) {
      setCurrentRegion(currentMap);
      if (currentMap.locations) {
        setCurrentMarkers([...currentMap.locations]);
      }
      if (mapData.groups) {
        setCurrentGroups([...mapData.groups]);
      }
    }
  }, [
    currentRegion,
    currentMap,
    mapData.groups,
    setCurrentGroups,
    setCurrentMarkers,
    setCurrentRegion,
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
    <div
      className={cn(
        getFontClassName(mapData.slug),
        "h-[calc(100vh-1rem)]",
        mapData.slug
      )}
    >
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
      <Menu
        maps={mapData.maps ?? []}
        subRegions={regionData?.getRegionsByMap}
      />
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
                    regionSlug: params.slug,
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
          <SubRegion
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
