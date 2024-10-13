import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { GameCard } from "@/components/cards/game-card";
import { AppLayout } from "@/components/ui/app-layout";
import { getClient } from "@/lib/getClient";

export default async function Page() {
  const sdk = getClient();
  const { games } = await sdk.Games({});

  return (
    <AppLayout>
      <Stack
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          my: 3,
          pb: 8,
        }}
      >
        <Image
          src="/images/logo.png"
          width={200}
          height={100}
          alt="app logo"
          className="my-8"
        />
        <Grid container spacing={3} sx={{ m: 8 }}>
          {games?.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </Grid>
      </Stack>
    </AppLayout>
  );
}
