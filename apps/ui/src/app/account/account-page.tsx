"use client";
import { Box, Button, Typography } from "@mui/material";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";

export const AccountPage = () => {
  const user = useAuthStore((state) => state.user);
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
