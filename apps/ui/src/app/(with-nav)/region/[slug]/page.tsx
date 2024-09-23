import { Region } from "@/__generated__/graphql";
import { getMetaData, getRegionsByGame } from "@/lib/api";
import { Metadata } from "next";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";
import { ImageCard } from "@/components/image-card";
import { revalidatePath } from "next/cache";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  revalidatePath("/region");
  const game = await getMetaData(params.slug);

  const { title, description } = game;
  return {
    title: `${title} | Ritcher Map`,
    description,
    openGraph: {
      type: "website",
      images: [
        process.env.CDN_BASE_URL + `images/games/${params.slug}/preview.png`,
      ],
    },
    icons: {
      icon: [
        {
          type: "image/png",
          sizes: "16x16",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${params.slug}/favicon-16x16.png`,
          url:
            process.env.CDN_BASE_URL +
            `images/games/${params.slug}/favicon-16x16.png`,
        },
        {
          type: "image/png",
          sizes: "32x32",
          href:
            process.env.CDN_BASE_URL +
            `images/games/${params.slug}/favicon-32x32.png`,
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

export default async function RegionPage({
  params,
}: {
  params: { slug: string };
}) {
  revalidatePath("/region");
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
        <ImageCard
          key={slug}
          imageSrc={process.env.CDN_BASE_URL + thumbnailUrl}
          href={`/map/${slug}`}
          content={title}
        />
      ))}
    </div>
  );
}
