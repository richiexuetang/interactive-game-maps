import { FETCH_GAMES } from "@/lib/constants";
import { getClient } from "@/lib/apollo-client";
import { ImageCard } from "@/components/image-card";

export type Game = {
  slug: string;
  title: string;
  thumbnailUrl: string;
  id: string;
};

export default async function Page() {
  const { data } = await getClient().query({
    query: FETCH_GAMES,
  });

  return (
    <div className="flex gap-5 p-8 flex-wrap content-center justify-center">
      {data?.games?.map((game: Game) => (
        <ImageCard
          key={game.slug}
          href={`/region/${game.slug}`}
          imageSrc={process.env.CDN_BASE_URL + game.thumbnailUrl}
          content={game.title}
        />
      ))}
    </div>
  );
}
