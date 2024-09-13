import {
  createAppUser,
  getAppUser,
  getGroupDetails,
  getMarkerLocations,
  getMetaData,
  getRegionDetails,
} from "@/lib/api";
import Map from "@/components/map/map";
import { revalidatePath } from "next/cache";
import { getClient } from "@/lib/apollo-client";
import { FETCH_GAMES } from "@/lib/constants";
import { Game } from "@/__generated__/graphql";

import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/firebase/firebase-admin";

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
  const currentUser = await getCurrentUser();

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

  const appUser = await getAppUser(currentUser?.email ?? "");
  const foundLocations = appUser ? appUser.foundLocations : [];
  if (!appUser && currentUser?.email) {
    await createAppUser({ email: currentUser?.email });
  }

  console.log(foundLocations);

  return (
    <Map
      region={region}
      groups={groupData}
      markers={markers}
      regions={regions}
      user={currentUser}
    />
  );
}
