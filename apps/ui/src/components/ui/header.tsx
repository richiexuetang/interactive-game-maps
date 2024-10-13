import ZapIcon from "@mui/icons-material/ElectricBolt";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const AppHeader = ({
  trigger,
  ...props
}: { trigger?: React.ReactNode } & BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", sm: "flex-start" },
        gap: 2,
        px: 2,
        flex: 1,
        ...props.sx,
      }}
    >
      {trigger}
      <ZapIcon />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mx: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          flexGrow: 1,
        }}
      >
        Ritcher Map
      </Typography>

      <Box
        ml="auto"
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: { xs: 2, md: 3 },
        }}
      >
        <GitHubIcon />
      </Box>

      <Avatar sx={{ width: 32, height: 32, ml: { xs: 0, sm: 2 } }} />
    </Box>
  );
};
