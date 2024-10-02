"use client";

import { useQuery } from "@apollo/client";
import Alert from "@mui/material/Alert";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { UserRecord } from "firebase-admin/auth";
import { useAtom } from "jotai";
import { LatLngExpression, Map } from "leaflet";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as RL from "react-leaflet";
import "@/lib/leaflet/smooth-wheel-zoom";
import "@/lib/leaflet/context-menu";
import "@/lib/leaflet/full-screen";
import { v4 as uuidv4 } from "uuid";
import { MapEventListener } from "./map-event-listener";
import { RegionLayer } from "../layers/region";
import { MarkerRenderer } from "../markers/markers-renderer";
import { Menu } from "../menu";
import { ProgressTracker } from "../progress-tracker";
import { Game } from "@/__generated__/graphql";
import { GET_APP_USER, GET_REGIONS } from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";
import { userAtom, copySnackbarAtom, currentMapAtom } from "@/store";

interface MapProps {
  user: Pick<UserRecord, "email" | "displayName"> | null;
  mapData: Game;
}

const DynamicMap = ({ user, mapData }: MapProps) => {
  const { zoom, minZoom, maxZoom, center, maps } = mapData;
  const params = useParams<{ slug: string }>();
  const [map, setMap] = useState<Map | null>(null);

  const currentMap = maps?.find((r) => r.slug === params.slug);
  const [appUser, setAppUser] = useAtom(userAtom);
  const [mapConfig, setMapConfig] = useAtom(currentMapAtom);

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
    if (!mapConfig && currentMap) {
      setMapConfig({
        ...currentMap,
        maxZoom,
        groups: mapData.groups ?? [],
        gameSlug: mapData.slug,
      });
    }
  }, [mapConfig, currentMap, mapData, setMapConfig, maxZoom]);

  const [openSnackbar, setOpenSnackbar] = useAtom(copySnackbarAtom);

  return (
    <div className={cn("h-[calc(100vh-1rem)]", mapData.slug)}>
      <Snackbar
        open={openSnackbar ?? false}
        autoHideDuration={6000}
        onClose={(_, reason?: SnackbarCloseReason) =>
          setOpenSnackbar(reason === "clickaway" ? openSnackbar : false)
        }
      >
        <Alert
          onClose={(_, reason?: SnackbarCloseReason) =>
            setOpenSnackbar(reason === "clickaway" ? openSnackbar : false)
          }
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Link successfully copied!
        </Alert>
      </Snackbar>
      <Menu
        maps={mapData.maps ?? []}
        regions={regionData?.getRegionsByMap}
        map={map}
      />
      <RL.MapContainer
        ref={setMap}
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

export default DynamicMap;
