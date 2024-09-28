import { ReactNode } from "react";
import { RootLayout } from "@/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootLayout>
      <>{children}</>
    </RootLayout>
  );
}
