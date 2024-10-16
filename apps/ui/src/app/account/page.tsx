import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { GameCard } from "@/components/cards/game-card";
import { AppLayout } from "@/components/ui/app-layout";
import { getClient } from "@/lib/getClient";

export default async function Page() {
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
          width="0"
          height="0"
          alt="app logo"
          sizes="100vw"
          className="w-36 h-28"
        />
      </Stack>
    </AppLayout>
  );
}
