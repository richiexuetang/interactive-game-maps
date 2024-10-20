"use client";

import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { GameCard } from "@/components/cards/game-card";
import { GamePageToolbar } from "@/components/game-page-toolbar";
import { GamesQuery } from "@/generated/graphql";

export const GamePage = ({ games }: { games: GamesQuery["games"] }) => {
  const [displayedGames, setDisplayedGames] = useState(games);

  return (
    <Stack
      direction="column"
      sx={{
        m: 15,
        pb: 8,
        gap: 3,
      }}
    >
      <GamePageToolbar
        setGames={setDisplayedGames}
        games={displayedGames}
        allGames={games}
      />
      <Grid container spacing={4}>
        {displayedGames?.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </Grid>
    </Stack>
  );
};
