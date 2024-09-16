"use client";

import { MarkerGroup, MarkerLocation, Region } from "@/__generated__/graphql";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { UserRecord } from "firebase-admin/auth";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export interface MapProps {
  region: Region;
  groups: MarkerGroup[];
  markers: MarkerLocation[];
  regions: Region[];
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
}

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GQL_URL}`,
  cache: new InMemoryCache(),
});

const RitcherMap = ({ region, groups, markers, regions, user }: MapProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./dynamic-map"), {
        ssr: false,
      }),
    []
  );

  return (
    <ApolloProvider client={client}>
      <Provider>
        <Map
          region={region}
          markers={markers}
          user={user}
          groups={groups}
          regions={regions}
        />
      </Provider>
    </ApolloProvider>
  );
};

export default RitcherMap;
