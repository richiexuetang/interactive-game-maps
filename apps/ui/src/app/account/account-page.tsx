"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";

export const AccountPage = () => {
  const user = useAuthStore((state) => state.auth);
  const router = useRouter();

  if (!user) router.push("/");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">{user?.username}&apos;s Account</Typography>
      <Typography variant="body2">{user?.email}</Typography>
      <Button>Reset Progress</Button>
      <span>Favorite games:</span>
      <span>Progress:</span>
    </Box>
  );
};
