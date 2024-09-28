import {
  createAppUser,
  fetchGameRegionDetails,
  getAppUser,
  getMetaData,
  getRegionDetails,
} from "@/lib/graphql/api";
import Map from "@/components/map/map";

import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/firebase/firebase-admin";
import { revalidatePath } from "next/cache";
import "@/styles/leaflet.css";
import "@/styles/icon.css";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const region = await getRegionDetails(params.slug);
  const game = await getMetaData(region.gameSlug);

  const { title, description } = game;
  return {
    title: `${region.title} | ${title} | Ritcher Map`,
    description,
    openGraph: {
      type: "website",
      images: [
        process.env.CDN_BASE_URL +
          `images/games/${region.gameSlug}/preview.png`,
      ],
    },
    icons: {
      icon: [
        {
          type: "image/png",
          sizes: "16x16",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${region.gameSlug}/favicon-16x16.png`,
          url:
            process.env.CDN_BASE_URL +
            `images/games/${region.gameSlug}/favicon-16x16.png`,
        },
        {
          type: "image/png",
          sizes: "32x32",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${region.gameSlug}/favicon-32x32.png`,
          url:
            process.env.CDN_BASE_URL +
            `images/games/${params.slug}/favicon-32x32.png`,
        },
      ],
      apple:
        process.env.CDN_BASE_URL +
        `images/games/${params.slug}/apple-touch-icon.png`,
    },
  };
}

export default async function MapPage({
  params,
}: {
  params: { slug: string };
}) {
  revalidatePath("/map");
  const gameRegion = await fetchGameRegionDetails(params.slug);
  const currentUser = await getCurrentUser();

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
      regionData={gameRegion}
      user={{
        email: currentUser?.email,
        photoURL: currentUser?.photoURL,
        displayName: currentUser?.displayName,
      }}
    />
  );
}