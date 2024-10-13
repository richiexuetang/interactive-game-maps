"use client";

import { gql, useMutation } from "@apollo/client";
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
import { useEffect } from "react";
import { GamesQuery } from "@/generated/graphql";
import { ADD_FAVORITE } from "@/lib/graphql/constants";
import { useAuthStore } from "@/store";

export const GameCard = ({ game }: { game: GamesQuery["games"][number] }) => {
  const { slug, title } = game;
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [addFavorite, { data: addData }] = useMutation(ADD_FAVORITE);

  const [removeFavorite, { data: removeData }] = useMutation(gql`
    mutation RemoveFavorite($data: AddFavoriteInput!) {
      removeFavorite(data: $data) {
        email
        favoriteMaps {
          title
          id
          slug
        }
      }
    }
  `);

  useEffect(() => {
    if (addData) {
      setUser({
        ...user!,
        favoriteMaps: addData?.addFavorite?.favoriteMaps as any[],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addData]);
  useEffect(() => {
    if (removeData) {
      setUser({
        ...user!,
        favoriteMaps: removeData?.removeFavorite?.favoriteMaps as any[],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeData]);

  const handleFavorite = (e: any) => {
    e.preventDefault();

    if (user?.favoriteMaps?.some((fav) => fav.slug === game.slug)) {
      removeFavorite({
        variables: {
          data: {
            email: user?.email,
            gameSlug: game.slug,
          },
        },
      });
    } else {
      addFavorite({
        variables: {
          data: {
            email: user?.email,
            gameSlug: game.slug,
          },
        },
      });
    }
  };
  return (
    <Grid key={slug} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card>
        <CardActionArea component="div">
          {user && (
            <IconButton
              sx={{ position: "absolute", right: 0, top: 0 }}
              onClick={handleFavorite}
            >
              {user?.favoriteMaps?.some((fav) => fav.slug === game.slug) ? (
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
