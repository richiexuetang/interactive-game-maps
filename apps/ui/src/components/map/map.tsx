"use client";

import { CssBaseline, Theme, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { Map, User } from "@/__generated__/graphql";
import { getDesignTokens } from "@/lib/ui/design-tokens";
import "@/styles/leaflet.css";
import "@/styles/icon.css";

export interface MapProps {
  user: User | null;
  data: Map;
}

const RitcherMap = ({ user, data }: MapProps) => {
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
    <Provider>
      <ThemeProvider
        theme={(theme: Theme) =>
          createTheme({
            ...theme,
            ...innerTheme,
          })
        }
      >
        <CssBaseline />
        <Map user={user} data={data} />
      </ThemeProvider>
    </Provider>
  );
};

export default RitcherMap;
