import Image from "next/image";
import { FETCH_GAMES } from "./constants";
import { getClient } from "./apollo-client";
import Link from "next/link";
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
  const { games } = data;

  console.log(games);
  return (
    <div className="flex gap-5 p-8 flex-wrap content-center justify-center">
      {games?.map((game: Game) => (
        <Link
          key={game.slug}
          href={`/region/${game.slug}`}
          className="flex flex-col items-center"
        >
          <Image
            src={process.env.CDN_BASE_URL + game.thumbnailUrl}
            width={360}
            height={202.5}
            alt={`${game.title} thumbnail`}
            priority={true}
          />
          <h2 className="p-2 bg-slate-700 w-full h-20 text-center inline-block content-center text-sm">
            {game.title}
          </h2>
        </Link>
      ))}
    </div>
  );
}
