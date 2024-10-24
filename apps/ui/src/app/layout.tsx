import { ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import React from "react";
import { ApolloWrapper } from "@/components/apollo-wrapper";
import AppRouterCacheProvider from "@/components/app-router";
import theme from "@/lib/ui/theme";
import LoaderProviders from "./loading";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Ritcher Map | Awesome Interactive Game Maps",
  description:
    "Interactive game maps for Elden Ring, Witcher 3, Hogwarts Legacy, God of War, Black Myth Wukong and more.",
  keywords:
    "game maps, interactive maps, game locations, game guides, Elden Ring, Tears of the Kingdom, Black myth wukong, Witcher 3, Hogwarts Legacy",
  openGraph: {
    type: "website",
    siteName: "Ritcher Map",
    url: "https://ritcher-map.app",
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
      <body className="min-h-screen bg-background">
        <ApolloWrapper>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <LoaderProviders>
                {children}
                <Analytics />
                <SpeedInsights />
              </LoaderProviders>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
