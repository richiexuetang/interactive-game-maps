import { gql } from "@apollo/client";
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
import { query } from "@/lib/graphql/apollo-client";

export default async function Page() {
  console.log("Page");

  // const { data } = await query({
  //   query: gql(/* GraphQL */ `
  //     query {
  //       games {
  //         slug
  //         title
  //       }
  //     }
  //   `),
  // });

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
        {/* {data?.games?.map(({ title, slug }: Game) => (
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
                    alt={title ?? ""}
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
        ))} */}
      </Grid>
    </Stack>
  );
}
