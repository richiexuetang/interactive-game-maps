import { FETCH_GAMES } from "@/lib/constants";
import { getClient } from "@/lib/apollo-client";
import { ImageCard } from "@/components/image-card";
import { revalidatePath } from "next/cache";

export type Game = {
  slug: string;
  title: string;
  thumbnailUrl: string;
  id: string;
};

export default async function Page() {
  revalidatePath("/");
  const { data } = await getClient().query({
    query: FETCH_GAMES,
  });

  return (
    <div className="flex gap-5 p-8 flex-wrap content-center justify-center">
      {data?.games?.map(({ title, slug }: Game) => (
        <ImageCard
          key={slug}
          href={`/region/${slug}`}
          imageSrc={
            process.env.CDN_BASE_URL + `images/games/${slug}/thumbnail.png`
          }
          content={title}
        />
      ))}
    </div>
  );
}
