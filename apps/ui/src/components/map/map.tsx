"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { MapDataQuery } from "@/generated/graphql";
import "@/styles/leaflet.css";
import "@/styles/icon.css";

export interface MapProps {
  data: MapDataQuery["mapData"];
}

const RitcherMap = ({ data }: MapProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./dynamic-map"), {
        ssr: false,
      }),
    []
  );

  return <Map data={data} />;
};

export default RitcherMap;
