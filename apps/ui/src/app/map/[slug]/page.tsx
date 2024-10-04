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
  params: { slug: string };
}): Promise<Metadata> {
  const region = await getMapDetails(params.slug);
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
  const mapData = await fetchGameMapDetails(params?.slug);

  const currentUser = await getCurrentUser();

  let user = await getAppUser(currentUser?.email ?? "");

  if (!user && currentUser?.email) {
    const { displayName: username, email } = currentUser;
    user = await createUser({ email, username });
  }

  return <Map user={user} data={mapData} />;
}
