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
    case "hogwarts-legacy":
      return {
        typography: {
          fontFamily: "Hybrid",
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#a99862",
          },
          secondary: {
            main: "#a99862",
          },
          text: {
            primary: "#f8fbfc",
          },
          background: {
            paper: "#2d3038",
            default: "#2d3038",
          },
          divider: "#c3b590",
        },
      };
    case "witcher-3":
      return {
        typography: {
          fontFamily: "din-condensed",
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#d1c68f",
          },
          secondary: {
            main: "#d1c68f",
          },
          text: {
            primary: "#af894d",
          },
          background: {
            paper: "#040404",
            default: "#040404",
          },
          divider: "#d1c68f",
        },
      };
    case "god-of-war-ragnarok":
      return {
        typography: {
          fontFamily: "gill-sans-nova",
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#3372ff",
          },
          secondary: {
            main: "#a99862",
          },
          text: {
            primary: "#e9f3f9",
          },
          background: {
            paper: "#1d1d21",
            default: "#1d1d21",
          },
          divider: "#3372ff",
        },
      };
    case "zelda-tears-of-the-kingdom":
      return {
        typography: {
          fontFamily: "'Open Sans', sans-serif, 'sans-serif'",
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#cab586",
          },
          secondary: {
            main: "#a99862",
          },
          text: {
            primary: "#f8f6e0",
          },
          background: {
            paper: "#231d1b",
            default: "#231d1b",
          },
          divider: "#cab586",
        },
      };

    default:
      return { palette: {} };
  }
};
