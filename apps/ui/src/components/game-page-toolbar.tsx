"use client";

import StarRateIcon from "@mui/icons-material/StarRate";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { GamesQuery } from "@/generated/graphql";
import { useDebounceCallback } from "@/hooks/use-debounce-callback";
import { inBoth } from "@/lib/utils";
import { useUserStore } from "@/store/user";

interface GamePageToolbarProps {
  setGames: React.Dispatch<React.SetStateAction<GamesQuery["games"]>>;
  games: GamesQuery["games"];
  allGames: GamesQuery["games"];
}

export const GamePageToolbar = ({
  setGames,
  games,
  allGames,
}: GamePageToolbarProps) => {
  const user = useUserStore((state) => state.user);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const debounced = useDebounceCallback(setGames, 500);

  const filterUserFavorite = () => {
    if (showFavorites) {
      setGames(allGames);
    } else {
      const common = inBoth(games, user?.favoriteMaps || []);
      setGames(common);
    }
    setShowFavorites((prev) => !prev);
  };

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    let filtered =
      allGames?.filter((game) =>
        game.title.toLowerCase().includes(input.toLowerCase())
      ) ?? [];
    if (input === "") {
      filtered = allGames;
    }
    debounced(filtered);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
      <TextField
        size="small"
        placeholder="Search..."
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        sx={{
          "--radius": "0.5rem",
          "--ring": "var(--mui-palette-text-primary)",
          "--input":
            "rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)",
          "& legend": {
            display: "none",
          },
          "& label": {
            position: "initial",
            transform: "none",
            pointerEvents: "auto",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "text.primary",
            "&.Mui-focused, &.Mui-error": {
              color: "text.primary",
            },
          },
          "& .MuiFormHelperText-root": {
            marginInline: 0,
            mt: 1,
            fontSize: "0.875rem",
          },
          "& .MuiOutlinedInput-root:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--input)",
            },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--input)",
              borderWidth: "1px",
              outline: "2px solid var(--ring)",
              outlineOffset: "2px",
            },
          "& .Mui-error": {
            "--input": "var(--mui-palette-error-main)",
            "--ring": "var(--mui-palette-error-main)",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            top: 0,
            borderColor: "var(--input)",
            borderRadius: "calc(var(--radius) - 2px)",
          },
          "& .MuiInputBase-root": {
            mt: 1,
          },
          "& .MuiInputBase-input": {
            minHeight: 40,
            boxSizing: "border-box",
            px: 1.5,
            py: 1,
          },
        }}
        onChange={handleInputSearch}
      />

      {user && (
        <IconButton onClick={filterUserFavorite}>
          <StarRateIcon />
        </IconButton>
      )}
    </Box>
  );
};
