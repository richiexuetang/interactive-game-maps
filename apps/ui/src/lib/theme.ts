"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    cssVarPrefix: "ritcher",
  },
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Crimson Pro, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
