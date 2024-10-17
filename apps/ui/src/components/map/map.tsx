"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, extendTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { MapDataQuery } from "@/generated/graphql";
import { getDesignTokens } from "@/lib/ui/design-tokens";
import "@/styles/leaflet.css";
import "@/styles/icon.css";
import theme from "@/lib/ui/theme";

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
    // eslint-disable-next-line no-unused-vars
    const { vars, ...baseTheme } = theme;
    const tokens = getDesignTokens(data.game?.slug ?? "");
    return extendTheme(baseTheme, tokens);
  }, [data]);

  return (
    <ThemeProvider theme={innerTheme}>
      <CssBaseline />
      <Map data={data} />
    </ThemeProvider>
  );
};

export default RitcherMap;
