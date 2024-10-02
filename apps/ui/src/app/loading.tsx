"use client";

import * as React from "react";
import { AppProgressBar as ProgressBar } from "@/components/ui/app-progress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Suspense>
      {children}
      <ProgressBar
        height="4px"
        color="#85716f"
        options={{ showSpinner: true }}
        stopDelay={1000}
      />
    </React.Suspense>
  );
};

export default Providers;
