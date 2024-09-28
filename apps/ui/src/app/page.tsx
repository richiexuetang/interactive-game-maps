import { FETCH_GAMES } from "@/lib/graphql/constants";
import { getClient } from "@/lib/graphql/apollo-client";
import { Game } from "@/__generated__/graphql";
import Grid from "@mui/material/Grid2";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Image from "next/image";

export default async function Page() {
  const { data } = await getClient().query({
    query: FETCH_GAMES,
  });

  return (
    <Stack
      direction="column"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        my: 6,
      }}
    >
      <Image src="/images/logo.png" width={200} height={100} alt="app logo" />
      <Grid container spacing={3} sx={{ m: 5 }}>
        {data?.games?.map(({ title, slug }: Game) => (
          <Grid key={slug} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Link href={`/region/${slug}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      process.env.CDN_BASE_URL +
                      `images/games/${slug}/thumbnail.png`
                    }
                    alt={title}
                  />
                  <CardContent
                    sx={{
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                    }}
                  >
                    <Typography variant="body1">{title}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
