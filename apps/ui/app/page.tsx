import Image from "next/image";

type Game = {
  gameSlug: string;
  gameTitle: string;
  thumbnailUrl: string;
};

export default async function Page() {
  let data = await fetch(process.env.API_BASE_URL + "/games");
  let games = await data.json();
  console.log(games);
  return (
    <>
      {games?.map((game: Game) => (
        <div key={game.gameSlug}>
          <h2>{game.gameTitle}</h2>
          <Image
            src={game.thumbnailUrl}
            width={500}
            height={500}
            alt={`${game.gameTitle} thumbnail`}
          />
        </div>
      ))}
    </>
  );
}
