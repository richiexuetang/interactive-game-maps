import Image from "next/image";
import Link from "next/link";
import { Region } from "@/__generated__/graphql";
import { getMetaData, getRegionsByGame } from "@/lib/api";
import { Metadata } from "next";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";

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
  const regions = await getRegionsByGame(params.slug);
  const fontClassName = getFontClassName(params.slug);

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
          className="flex flex-col items-center h-auto w-auto"
        >
          <Image
            src={process.env.CDN_BASE_URL + thumbnailUrl}
            width={320}
            height={320}
            className="w-auto h-full"
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
