import "../globals.css";
import "../icon.css";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { RootLayout } from "@/components/layout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootLayout>
      <>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
        <Toaster position="top-left" />
      </>
    </RootLayout>
  );
}
