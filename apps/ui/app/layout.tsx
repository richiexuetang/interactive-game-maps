import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/theme-switcher";

export const metadata: Metadata = {
  title: "Ritcher Map",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextUIProvider>
            <MainNav />
            <div className="relative flex min-h-screen flex-col text-foreground bg-background">
              {children}
            </div>
            <ThemeSwitcher />
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
