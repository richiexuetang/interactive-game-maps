import {
  getGroupDetails,
  getMarkerLocations,
  getMetaData,
  getRegionDetails,
} from "@/src/lib/api";
import Map from "@/src/components/map/map";
import { revalidatePath } from "next/cache";
import { getClient } from "@/src/lib/apollo-client";
import { FETCH_GAMES } from "@/src/lib/constants";
import { Game } from "@/src/__generated__/graphql";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const region = await getRegionDetails(params.slug);
  const game = await getMetaData(region.gameSlug);

  const { title, description, previewUrl, iconUrl } = game;
  return {
    title: `${region.title} | ${title} | Ritcher Map`,
    description,
    openGraph: {
      type: "website",
      images: [previewUrl],
    },
    icons: [
      {
        type: "image/png",
        sizes: "32x32",
        href: iconUrl,
        url: iconUrl,
      },
    ],
  };
}

export default async function MapPage({
  params,
}: {
  params: { slug: string };
}) {
  revalidatePath("/map");
  const { data } = await getClient().query({
    query: FETCH_GAMES,
  });
  const { games } = data;
  const region = await getRegionDetails(params.slug);
  const groupData = await getGroupDetails(region.gameSlug);
  const markers = await getMarkerLocations(region.slug);
  const regions = games.find(
    (game: Game) => game.slug === region.gameSlug
  ).regions;

  return (
    <Map
      region={region}
      groups={groupData}
      markers={markers}
      regions={regions}
    />
  );
}
