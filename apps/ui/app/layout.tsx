import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { MainNav } from "@/components/main-nav";

export const metadata: Metadata = {
  title: "Ritcher Map",
  description: "",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextUIProvider>
          <MainNav />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
