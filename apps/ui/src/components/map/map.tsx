"use client";

import {
  MarkerGroup,
  MarkerLocation,
  Region,
} from "@/src/__generated__/graphql";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { createStore } from "jotai";
import { Menu } from "../menu";
import { getFontClassName } from "@/src/lib/font";
import { cn } from "@/src/lib/utils";

const store = createStore();

const DynamicMap = dynamic(() => import("./dynamic-map"), {
  ssr: false,
});

export interface MapProps {
  region: Region;
  groups: MarkerGroup[];
  markers: MarkerLocation[];
  regions: Region[];
}

const Map = ({ region, groups, markers, regions }: MapProps) => {
  return (
    <Provider store={store}>
      <div
        className={cn(
          getFontClassName(region.gameSlug),
          "h-[calc(100vh-1rem)] overflow-hidden"
        )}
      >
        <Menu groups={groups} markers={markers} gameSlug={region.gameSlug} />
        <DynamicMap region={region} markers={markers} regions={regions} />
      </div>
    </Provider>
  );
};

export default Map;
