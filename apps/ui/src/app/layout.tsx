import theme from "@/lib/ui/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Ritcher Map | Awesome Interactive Game Maps",
  description: "",
  keywords:
    "game maps, interactive maps, game locations, game guides, Elden Ring, Tears of the Kingdom, Black myth wukong, Witcher 3, Hogwarts Legacy",
  icons: [
    {
      type: "image/png",
      sizes: "32x32",
      href: "https://cdn.mapgenie.io/favicons/mapgenie/favicon-32x32.png",
      url: "https://cdn.mapgenie.io/favicons/mapgenie/favicon-32x32.png",
    },
  ],
  openGraph: {
    type: "website",
    title: "Ritcher Map | Awesome Interactive Game Maps",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <body className="min-h-screen">
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </body>
    </html>
  );
}