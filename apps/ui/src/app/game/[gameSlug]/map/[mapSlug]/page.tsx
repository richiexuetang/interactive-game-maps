import type { Metadata } from "next";
import Map from "@/components/map/map";

import { getCurrentUser } from "@/lib/firebase/firebase-admin";
import {
  createUser,
  fetchGameMapDetails,
  getAppUser,
  getMapDetails,
  getMetaData,
} from "@/lib/graphql/api";

export async function generateMetadata({
  params,
}: {
  params: { mapSlug: string };
}): Promise<Metadata> {
  const region = await getMapDetails(params.mapSlug);
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
            `images/games/${params.mapSlug}/favicon-32x32.png`,
        },
      ],
      apple:
        process.env.CDN_BASE_URL +
        `images/games/${params.mapSlug}/apple-touch-icon.png`,
    },
  };
}

export default async function MapPage({
  params,
}: {
  params: { mapSlug: string };
}) {
  const mapData = await fetchGameMapDetails(params?.mapSlug);

  const currentUser = await getCurrentUser();

  let user = await getAppUser(currentUser?.email ?? "");

  if (!user && currentUser?.email) {
    const { displayName: username, email } = currentUser;
    user = await createUser({ email, username });
  }

  return <Map user={user} data={mapData} />;
}
