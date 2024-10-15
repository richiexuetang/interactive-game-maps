"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { Theme, ThemeProvider, createTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { MapDataQuery } from "@/generated/graphql";
import { getDesignTokens } from "@/lib/ui/design-tokens";
import "@/styles/leaflet.css";
import "@/styles/icon.css";

export interface MapProps {
  data: MapDataQuery["mapData"];
}

const RitcherMap = ({ data }: MapProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./dynamic-map"), {
        ssr: false,
      }),
    []
  );

  const innerTheme = useMemo(() => {
    return getDesignTokens(data.game?.slug ?? "");
  }, [data]);

  return (
    <ThemeProvider
      theme={(theme: Theme) =>
        createTheme({
          ...theme,
          ...innerTheme,
        })
      }
    >
      <CssBaseline />
      <Map data={data} />
    </ThemeProvider>
  );
};

export default RitcherMap;
