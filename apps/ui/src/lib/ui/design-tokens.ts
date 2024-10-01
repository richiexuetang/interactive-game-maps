export const getDesignTokens = (slug: string): any => {
  switch (slug) {
    case "black-myth-wukong":
      return {
        typography: {
          fontFamily: "CrimsonPro",
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#757259",
          },
          secondary: {
            main: "#d3c0a3",
          },
          text: {
            primary: "#deddda",
          },
          background: {
            paper: "#090708",
            default: "#090708",
          },
          divider: "#757259",
        },
      };
    case "elden-ring":
      return {
        typography: {
          fontFamily: "Noto Sans",
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#c3b590",
          },
          secondary: {
            main: "#c3b590",
          },
          text: {
            primary: "#e4e4e5",
          },
          background: {
            paper: "#232423",
            default: "#232423",
          },
          divider: "#c3b590",
        },
      };
    default:
      return { palette: {} };
  }
};
