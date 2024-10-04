"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
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

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

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
          <Map user={user} data={data} />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default RitcherMap;
