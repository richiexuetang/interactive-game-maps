import type { Metadata } from "next";
import Map from "@/components/map/map";
import { getClient } from "@/lib/getClient";
import { fetchGameMapDetails } from "@/lib/graphql/api";
import { titleCase } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { mapSlug: string; gameSlug: string };
}): Promise<Metadata> {
  const { gameSlug, mapSlug } = params;
  const sdk = getClient();
  const { mapData } = await sdk.MapDetails({ slug: mapSlug });

  const gameTitle = titleCase(gameSlug.replaceAll("-", " "));
  return {
    title: `${mapData.title} | ${mapData.game?.title} | Ritcher Map`,
    description: `${gameTitle} Interactive Map - All Hidden Collectibles, Bosses, Secret Easter Eggs, Equipment, Upgrades, Quest Locations & more! Use the progress tracker to get 100% completion!`,
    openGraph: {
      type: "website",
      images: [
        process.env.CDN_BASE_URL + `images/games/${gameSlug}/preview.png`,
      ],
    },
    icons: {
      icon: [
        {
          type: "image/png",
          sizes: "16x16",
          href: `/images/games/${gameSlug}/favicon-16x16.png`,
          url: `/images/games/${gameSlug}/favicon-16x16.png`,
        },
        {
          type: "image/png",
          sizes: "32x32",
          href: `/images/games/${gameSlug}/favicon-32x32.png`,
          url: `/images/games/${mapSlug}/favicon-32x32.png`,
        },
      ],
      apple: `/images/games/${mapSlug}/apple-touch-icon.png`,
    },
  };
}

export default async function MapPage({
  params,
}: {
  params: { mapSlug: string };
}) {
  const mapData = await fetchGameMapDetails(params?.mapSlug);
  if (!mapData) return null;

  return <Map data={mapData} />;
}
