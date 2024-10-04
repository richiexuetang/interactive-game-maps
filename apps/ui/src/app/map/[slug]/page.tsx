import { gql } from "@apollo/client";
import type { Metadata } from "next";
import Map from "@/components/map/map";

import { getCurrentUser } from "@/lib/firebase/firebase-admin";
import {
  createAppUser,
  fetchGameMapDetails,
  getMetaData,
} from "@/lib/graphql/api";
import { query } from "@/lib/graphql/apollo-client";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { data } = await query({
    query: gql`
      query Map($slug: String!) {
        map(slug: $slug) {
          gameSlug
          title
        }
      }
    `,
    variables: { slug: params.slug },
  });
  const map = data.map;
  const game = await getMetaData(map.gameSlug);

  const { title, description } = game;
  return {
    title: `${map.title} | ${title} | Ritcher Map`,
    description,
    openGraph: {
      type: "website",
      images: [
        process.env.CDN_BASE_URL + `images/games/${map.gameSlug}/preview.png`,
      ],
    },
    icons: {
      icon: [
        {
          type: "image/png",
          sizes: "16x16",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${map.gameSlug}/favicon-16x16.png`,
          url:
            process.env.CDN_BASE_URL +
            `images/games/${map.gameSlug}/favicon-16x16.png`,
        },
        {
          type: "image/png",
          sizes: "32x32",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${map.gameSlug}/favicon-32x32.png`,
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
  console.log("MapPage", params.slug);

  const gameMap = await fetchGameMapDetails(params.slug);
  const currentUser = await getCurrentUser();

  let user = null;
  if (currentUser?.email) {
    user = await createAppUser({
      email: currentUser?.email,
    });
  }

  return <Map mapData={gameMap} user={user} />;
}
