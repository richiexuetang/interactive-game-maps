import "../globals.css";
import { MainNav } from "@/src/components/main-nav";
import { ReactNode } from "react";
import { RootLayout } from "@/src/components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ritcher Map | Awesome Interactive Game Maps",
  description: "",
  icons: [
    {
      type: "image/png",
      sizes: "32x32",
      href: "https://cdn.mapgenie.io/favicons/mapgenie/favicon-32x32.png",
      url: "https://cdn.mapgenie.io/favicons/mapgenie/favicon-32x32.png",
    },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootLayout>
      <MainNav />
      <div className="relative flex flex-col text-foreground bg-background">
        {children}
      </div>
    </RootLayout>
  );
}
