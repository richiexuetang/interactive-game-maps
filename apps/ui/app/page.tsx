import Image from "next/image";
import { FETCH_GAMES } from "./constants";
import { getClient } from "./apollo-client";
import Link from "next/link";

type Game = {
  gameSlug: string;
  gameTitle: string;
  thumbnailUrl: string;
  id: string;
};

export default async function Page() {
  const { data } = await getClient().query({
    query: FETCH_GAMES,
  });

  return (
    <>
      {data.games?.map((game: Game) => (
        <div key={game.gameSlug}>
          <Link href={`/game/${game.id}`}>
            <Image
              src={process.env.CDN_BASE_URL + game.thumbnailUrl}
              width={250}
              height={250}
              alt={`${game.gameTitle} thumbnail`}
            />
            <h2>{game.gameTitle}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
