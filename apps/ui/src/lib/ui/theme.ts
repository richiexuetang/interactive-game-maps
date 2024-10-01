"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: { mode: "dark" },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
