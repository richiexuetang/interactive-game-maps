import {
  createAppUser,
  fetchGameRegionDetails,
  getAppUser,
  getGroupDetails,
  getMarkerLocations,
  getMetaData,
  getRegionDetails,
} from "@/lib/api";
import Map from "@/components/map/map";
import { getClient } from "@/lib/apollo-client";
import { FETCH_GAMES } from "@/lib/constants";
import { Game, Region } from "@/__generated__/graphql";

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
  const gameRegion = await fetchGameRegionDetails(params.slug);
  const currentUser = await getCurrentUser();

  const region = gameRegion.regions.find(
    (region: Region) => region.slug === params.slug
  );

  const appUser = await getAppUser(currentUser?.email ?? "");
  if (!appUser && currentUser?.email) {
    const displayName = currentUser?.displayName;
    const name = displayName?.split(" ");
    await createAppUser({
      email: currentUser?.email,
      photoUrl: currentUser?.photoURL,
      firstName: name ? name[0] : "",
      lastName: name ? name[1] : "",
    });
  }

  return (
    <Map
      region={region}
      regionData={gameRegion}
      user={{
        email: currentUser?.email,
        photoURL: currentUser?.photoURL,
        displayName: currentUser?.displayName,
      }}
    />
  );
}
