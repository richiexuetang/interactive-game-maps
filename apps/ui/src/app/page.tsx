import { gql } from "@apollo/client";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { Game } from "@/__generated__/graphql";
import { GameCard } from "@/components/cards/game-card";
import { Footer } from "@/components/ui/footer";
import { getClient } from "@/lib/graphql/apollo-client";

export default async function Page() {
  const { data } = await getClient().query({
    query: gql(`
    query {
      games {
        slug
        title
      }
    }
  `),
  });

  return (
    <div>
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
          {data?.games?.map((game: Game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </Grid>
      </Stack>
      <Footer />
    </div>
  );
}
