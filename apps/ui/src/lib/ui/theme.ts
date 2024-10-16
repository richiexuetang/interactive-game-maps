"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: { cssVarPrefix: "ritcher" },
  palette: { mode: "dark", text: { primary: "#fff" } },
  typography: {
    button: {
      textTransform: "none",
    },
    h3: {
      fontSize: "1.25rem",
    },
  },
});

export default theme;
