"use client";

import {
  MarkerGroup,
  MarkerLocation,
  Region,
} from "@/app/__generated__/graphql";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { createStore } from "jotai";
import { Menu } from "../menu";

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
      <div className="h-[calc(100vh-1rem)] overflow-hidden">
        <Menu groups={groups} markers={markers} gameSlug={region.gameSlug} />
        <DynamicMap region={region} markers={markers} regions={regions} />
      </div>
    </Provider>
  );
};

export default Map;
