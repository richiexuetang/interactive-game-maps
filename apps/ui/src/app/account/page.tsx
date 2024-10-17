import Stack from "@mui/material/Stack";
import { AccountPage } from "./account-page";
import { AppLayout } from "@/components/ui/app-layout";

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
        <AccountPage />
      </Stack>
    </AppLayout>
  );
}
