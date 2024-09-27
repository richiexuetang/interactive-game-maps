"use client";

import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { UserRecord } from "firebase-admin/auth";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Game } from "@/__generated__/graphql";

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

  return (
    <ApolloProvider client={client}>
      <Provider>
        <Map user={user} regionData={regionData} />
      </Provider>
    </ApolloProvider>
  );
};

export default RitcherMap;
