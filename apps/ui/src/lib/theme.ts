"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // typography: {
  //   fontFamily: "var(--font-roboto)",
  // },
  cssVariables: {
    cssVarPrefix: "ritcher",
  },
  palette: {
    mode: "dark",
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
