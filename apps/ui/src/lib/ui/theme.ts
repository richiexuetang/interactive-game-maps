"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: { mode: "dark", text: { primary: "#e4e4e5" } },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
