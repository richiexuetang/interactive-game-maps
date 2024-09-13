"use client";

import { MarkerGroup, MarkerLocation, Region } from "@/__generated__/graphql";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { Menu } from "../menu";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { UserRecord } from "firebase-admin/auth";
import { UserAvatar } from "../user-avatar";

export interface MapProps {
  region: Region;
  groups: MarkerGroup[];
  markers: MarkerLocation[];
  regions: Region[];
  user: UserRecord | null;
}

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
    <Provider>
      <div
        className={cn(
          getFontClassName(region.gameSlug),
          "h-[calc(100vh-1rem)] overflow-hidden"
        )}
      >
        <Menu groups={groups} markers={markers} gameSlug={region.gameSlug} />
        <Map region={region} markers={markers} regions={regions} user={user} />
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
  );
};

export default RitcherMap;
