"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: { cssVarPrefix: "ritcher" },
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "var(--ritcher-typography-font-family)",
    button: {
      textTransform: "none",
    },
    h3: {
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: "var(--ritcher-typography-font-family)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "var(--ritcher-typography-font-family)",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--ritcher-palette-background-default)",
          ":hover": {
            backgroundColor: "var(--accent-color)",
          },
        },
      },
    },
  },
});

export default theme;
