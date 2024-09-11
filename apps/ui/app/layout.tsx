import type { Metadata } from "next";
import "./globals.css";
import "./icon.css";
import { NextUIProvider } from "@nextui-org/react";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ritcher Map",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
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
            <div className="relative flex flex-col text-foreground bg-background">
              {children}
            </div>
            <Toaster position="top-left" />

            <ThemeSwitcher />
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
