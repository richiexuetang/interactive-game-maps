import type { Metadata } from "next";
import Map from "@/components/map/map";

import {
  fetchGameMapDetails,
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

  return <Map data={mapData} />;
}
