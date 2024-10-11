"use client";
import ZapIcon from "@mui/icons-material/ElectricBolt";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const MainNav = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
          <GitHubIcon
            sx={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://github.com/richiexuetang/interactive-game-maps",
                "_blank"
              )
            }
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
