import "../globals.css";
import "../icon.css";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { RootLayout } from "@/src/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootLayout>
      {children}
      <Toaster position="top-left" />
    </RootLayout>
  );
}
