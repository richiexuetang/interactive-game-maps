import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { Region } from "@/src/__generated__/graphql";
import { getMetaData, getRegionsByGame } from "@/src/lib/api";
import { Metadata } from "next";
import { getFontClassName } from "@/src/lib/font";
import { cn } from "@/src/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const game = await getMetaData(params.slug);

  const { title, description, previewUrl, iconUrl } = game;
  return {
    title: `${title} | Ritcher Map`,
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

export default async function RegionPage({
  params,
}: {
  params: { slug: string };
}) {
  revalidatePath("/region");
  const regions = await getRegionsByGame(params.slug);
  const fontClassName = getFontClassName(regions[0].gameSlug);

  return (
    <div
      className={cn(
        "flex gap-5 p-8 flex-wrap content-center justify-center",
        fontClassName
      )}
    >
      {regions.map(({ slug, thumbnailUrl, title }: Region) => (
        <Link
          key={title}
          href={`/map/${slug}`}
          className="flex flex-col items-center"
        >
          <Image
            src={process.env.CDN_BASE_URL + thumbnailUrl}
            width={320}
            height={320}
            alt={`${title} thumbnail`}
          />
          <span className="p-2 w-full h-16 text-center inline-block content-center text-sm bg-primary-400 rounded-b-lg">
            {title}
          </span>
        </Link>
      ))}
    </div>
  );
}
