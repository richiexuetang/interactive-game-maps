"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: { cssVarPrefix: "ritcher" },
  palette: { mode: "dark", text: { primary: "#fff" } },
  typography: {
    fontFamily: "var(--body-font-family)",
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
});

export default theme;
