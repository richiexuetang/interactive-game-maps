import StarRateIcon from "@mui/icons-material/StarRate";
import { ButtonBase, IconButton, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
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
          alignItems: "center",
          my: 3,
          pb: 8,
          height: "1000px",
        }}
      >
        <Box sx={{ m: 8, display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <TextField
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
            />
            <ButtonBase sx={{ p: 1, border: "1px solid white" }}>
              A-Z
            </ButtonBase>
            <ButtonBase sx={{ p: 1 }}>Latest</ButtonBase>
            <IconButton>
              <StarRateIcon />
            </IconButton>
          </Box>
          <Grid container spacing={4}>
            {games?.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </Grid>
        </Box>
      </Stack>
    </AppLayout>
  );
}
