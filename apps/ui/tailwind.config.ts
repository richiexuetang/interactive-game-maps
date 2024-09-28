import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bodyBackground: "var(--body-background)",
        mapBackground: "var(--map-background)",
        text: "var(--text-color)",
        background: "var(--app-background)",
        foreground: "hsl(var(--foreground))",
        sidebarBackground: "var(--sidebar-background-color)",
        titleFont: "var(--title-font-color)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: "var(--accent-color)",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        body: "var(--body-font-family)",
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
};

export default config;
