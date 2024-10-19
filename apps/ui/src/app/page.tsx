import { AppLayout } from "@/components/ui/app-layout";
import { GamePage } from "@/features/games/game-page";
import { getClient } from "@/lib/getClient";

export default async function Page() {
  const sdk = getClient();
  const { games } = await sdk.Games({});

  return (
    <AppLayout>
      <GamePage games={games} />
    </AppLayout>
  );
}
