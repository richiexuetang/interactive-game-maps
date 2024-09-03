import Image from "next/image";
import { FETCH_GAMES } from "./constants";
import { getClient } from "./apollo-client";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";

type Game = {
  slug: string;
  title: string;
  thumbnailUrl: string;
  id: string;
};

export default async function Page() {
  const { data } = await getClient().query({
    query: FETCH_GAMES,
  });
  const { getGames: games } = data;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <MainNav />
      </header>
      {games?.map((game: Game) => (
        <div key={game.slug}>
          <Link href={`/region/${game.slug}`}>
            <Image
              src={process.env.CDN_BASE_URL + game.thumbnailUrl}
              width={250}
              height={250}
              alt={`${game.title} thumbnail`}
            />
            <h2>{game.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
