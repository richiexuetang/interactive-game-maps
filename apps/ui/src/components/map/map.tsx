"use client";

import { MarkerGroup, MarkerLocation, Region } from "@/__generated__/graphql";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { Menu } from "../menu";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { UserAvatar } from "../user-avatar";
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
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <ApolloProvider client={client}>
      <Provider>
        <div
          className={cn(
            getFontClassName(region.gameSlug),
            "h-[calc(100vh-1rem)] overflow-hidden"
          )}
        >
          <Menu
            groups={groups}
            markers={markers}
            gameSlug={region.gameSlug}
            regions={regions}
          />
          <Map region={region} markers={markers} user={user} />
          {user && (
            <div className="z-[1000] absolute top-2 right-2">
              <UserAvatar
                imageSrc={user.photoURL ?? ""}
                name={user.displayName ?? ""}
              />
            </div>
          )}
        </div>
      </Provider>
    </ApolloProvider>
  );
};

export default RitcherMap;
