import Image from "next/image";

type Game = {
  gameSlug: string;
  gameTitle: string;
  thumbnailUrl: string;
};

export default async function Page() {
  let data = await fetch(process.env.API_BASE_URL + "/games");
  let mapsData = await fetch(process.env.API_BASE_URL + "/maps");
  let games = await data.json();
  let maps = await mapsData.json();
  console.log(games, maps);

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
      {maps?.map((game: any) => (
        <div key={game.mapSlug}>
          <h2>
            {game.mapTitle}
            {game.gameId}
          </h2>
          <Image
            src={`${process.env.CDN_BASE_URL}${game.thumbnailUrl}`}
            width={500}
            height={500}
            alt={`${game.mapTitle} thumbnail`}
          />
        </div>
      ))}
    </>
  );
}
