import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import React from "react";
import Providers from "./loading";
import { ApolloWrapper } from "@/components/apollo-wrapper";
import theme from "@/lib/ui/theme";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Ritcher Map | Awesome Interactive Game Maps",
  description: "Interactive game maps for Elden Ring, Witcher 3, and more.",
  keywords:
    "game maps, interactive maps, game locations, game guides, Elden Ring, Tears of the Kingdom, Black myth wukong, Witcher 3, Hogwarts Legacy",
  icons: [
    {
      type: "image/png",
      sizes: "32x32",
      href: "https://cdn.mapgenie.io/favicons/mapgenie/favicon-32x32.png",
      url: "https://cdn.mapgenie.io/favicons/mapgenie/favicon-32x32.png",
    },
    {
      type: "favicon",
      sizes: "16x16",
      href: `${process.env.NEXT_PUBLIC_CDN_URL}/favicons/images/favicon.ico`,
      url: `${process.env.NEXT_PUBLIC_CDN_URL}/favicons/images/favicon.ico`,
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
      <body className="min-h-screen bg-background">
        <ApolloWrapper>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Providers>{children}</Providers>
              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
