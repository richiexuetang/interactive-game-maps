import { gql } from "@apollo/client";
import type { Metadata } from "next";
import Map from "@/components/map/map";
import { fetchGameMapDetails } from "@/lib/graphql/api";
import { getClient } from "@/lib/graphql/apollo-client";
import { titleCase } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { mapSlug: string; gameSlug: string };
}): Promise<Metadata> {
  const { gameSlug, mapSlug } = params;

  const { data } = await getClient().query({
    query: gql`
      query MapDetails($slug: String!) {
        mapDetails(slug: $slug) {
          gameSlug
          title
        }
      }
    `,
    variables: { slug: mapSlug },
  });

  const map = data.mapDetails;
  const gameTitle = titleCase(map.gameSlug.replaceAll("-", " "));
  return {
    title: `${map.title} | ${gameTitle} | Ritcher Map`,
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
  return <Map data={mapData} />;
}
