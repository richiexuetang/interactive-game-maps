import type { Metadata } from "next";
import clsx from "clsx";
import { ThemeSwitcher } from "@/src/components/theme-switcher";
import { ReactNode } from "react";
import { ThemeProvider } from "@/src/components/theme-provider";

export const metadata: Metadata = {
  title: "Ritcher Map",
  description: "",
};

export function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx("min-h-screen bg-background font-sans antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
