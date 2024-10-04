"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CssBaseline, Theme, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { User, Game } from "@/__generated__/graphql";
import { getDesignTokens } from "@/lib/ui/design-tokens";
import "@/styles/leaflet.css";
import "@/styles/icon.css";

export interface MapProps {
  user: User | null;
  mapData: Game;
}

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GQL_URL}`,
  cache: new InMemoryCache(),
});

const RitcherMap = ({ user, mapData }: MapProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./dynamic-map"), {
        ssr: false,
      }),
    []
  );

  const innerTheme = useMemo(() => {
    return getDesignTokens(mapData.slug!);
  }, [mapData.slug]);

  return (
    <ApolloProvider client={client}>
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
          <Map user={user} mapData={mapData} />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default RitcherMap;
