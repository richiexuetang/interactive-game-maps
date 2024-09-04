import Image from "next/image";
import Link from "next/link";
import { getClient } from "../../apollo-client";
import { FETCH_REGIONS_BY_GAME } from "../../constants";
import { revalidatePath } from "next/cache";

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
    query: FETCH_REGIONS_BY_GAME,
    variables: { slug: params.slug },
  });
  const { findRegionsByGame: regions } = data;

  return (
    <div>
      {regions.map(({ id, slug, thumbnailUrl, title }: Region) => (
        <div key={id}>
          <Link href={`/map/${slug}`}>
            <Image
              src={process.env.CDN_BASE_URL + thumbnailUrl}
              width={250}
              height={250}
              alt={`${title} thumbnail`}
            />
            <span>{title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
