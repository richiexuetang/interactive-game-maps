import Image from "next/image";
import Link from "next/link";
import { getClient } from "../../apollo-client";
import { FETCH_GAMES } from "../../constants";
import { revalidatePath } from "next/cache";
import { Game } from "../../__generated__/graphql";

interface Region {
  slug: string;
  title: string;
  thumbnailUrl: string;
  id: string;
  minZoom: number;
  maxZoom: number;
  defaultZoom: number;
  tilePath: number;
}

export default async function RegionPage({
  params,
}: {
  params: { slug: string };
}) {
  revalidatePath("/region");
  const { data } = await getClient().query({
    query: FETCH_GAMES,
  });
  const { games } = data;

  const regions = games?.find(
    (game: Game) => game.slug === params.slug
  ).regions;

  return (
    <div className="flex gap-5 justify-between">
      {regions.map(({ slug, thumbnailUrl, title }: Region) => (
        <Link
          key={title}
          href={`/map/${slug}`}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={process.env.CDN_BASE_URL + thumbnailUrl}
            width={320}
            height={320}
            alt={`${title} thumbnail`}
          />
          <span className="text-center">{title}</span>
        </Link>
      ))}
    </div>
  );
}
