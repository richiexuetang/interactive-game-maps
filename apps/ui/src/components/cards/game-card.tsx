"use client";

import { useMutation } from "@apollo/client";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { GamesQuery } from "@/generated/graphql";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "@/lib/graphql/constants";
import { useAuthStore } from "@/store";

export const GameCard = ({ game }: { game: GamesQuery["games"][number] }) => {
  const { slug, title } = game;
  const user = useAuthStore((state) => state.user);
  const setFavorites = useAuthStore((state) => state.setFavorites);

  //#region graphql
  const [addFavorite] = useMutation(ADD_FAVORITE, {
    variables: { data: { email: user?.email, gameSlug: game.slug } },
    onCompleted: (data) => setFavorites(data.addFavorite.favoriteMaps),
  });

  const [removeFavorite] = useMutation(REMOVE_FAVORITE, {
    variables: { data: { email: user?.email, gameSlug: game.slug } },
    onCompleted: (data) => setFavorites(data.removeFavorite.favoriteMaps),
  });
  //#endregion

  const toggleFavorite = (e: any) => {
    e.preventDefault();
    if (!user?.email) return;

    if (user.favoriteMaps?.some(({ slug }) => slug === game.slug)) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  return (
    <Grid key={slug} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card>
        <CardActionArea component="div">
          {user && (
            <IconButton
              sx={{ position: "absolute", right: 0, top: 0 }}
              onClick={toggleFavorite}
            >
              {user?.favoriteMaps.some(({ slug }) => slug === game.slug) ? (
                <StarIcon />
              ) : (
                <StarOutlineIcon />
              )}
            </IconButton>
          )}
          <Link href={`/game/${slug}`}>
            <CardMedia
              component="img"
              height="140"
              image={
                process.env.NEXT_PUBLIC_CDN_BASE_URL +
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
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
