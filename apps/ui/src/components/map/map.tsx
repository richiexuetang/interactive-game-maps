"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CssBaseline, Theme, ThemeProvider, createTheme } from "@mui/material";
import { UserRecord } from "firebase-admin/auth";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Game } from "@/__generated__/graphql";
import { getDesignTokens } from "@/lib/ui/design-tokens";

export interface MapProps {
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
  regionData: Game;
}

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GQL_URL}`,
  cache: new InMemoryCache(),
});

const RitcherMap = ({ user, regionData }: MapProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./dynamic-map"), {
        ssr: false,
      }),
    []
  );

  const innerTheme = useMemo(() => {
    return getDesignTokens(regionData.slug);
  }, [regionData.slug]);

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
          <Map user={user} mapData={regionData} />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default RitcherMap;
