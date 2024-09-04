import Image from "next/image";
import { FETCH_GAMES } from "./constants";
import { getClient } from "./apollo-client";
import Link from "next/link";
import { revalidatePath } from "next/cache";

type Game = {
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
  const { getGames: games } = data;

  return (
    <div className="flex gap-5 justify-between m-5">
      {games?.map((game: Game) => (
        <div key={game.slug}>
          <Link
            href={`/region/${game.slug}`}
            className="flex flex-col items-center"
          >
            <Image
              src={process.env.CDN_BASE_URL + game.thumbnailUrl}
              width={480}
              height={270}
              alt={`${game.title} thumbnail`}
              priority={true}
            />
            <h2 className="p-3 bg-slate-700 w-full text-center">
              {game.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
