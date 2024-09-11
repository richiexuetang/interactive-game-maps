import {
  getGroupDetails,
  getMarkerLocations,
  getRegionDetails,
} from "@/lib/api";
import Map from "@/components/map/map";
import { revalidatePath } from "next/cache";
import { getClient } from "@/app/apollo-client";
import { FETCH_GAMES } from "@/app/constants";
import { Game } from "@/app/__generated__/graphql";
import Head from "next/head";

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
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://cdn.mapgenie.io/favicons/black-myth-wukong/favicon-16x16.png"
        />
      </Head>
      <Map
        region={region}
        groups={groupData}
        markers={markers}
        regions={regions}
      />
    </>
  );
}
