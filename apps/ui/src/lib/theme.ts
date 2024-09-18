"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // typography: {
  //   fontFamily: "var(--font-roboto)",
  // },
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
