"use client";

import { ProgressBar } from "@/components/progress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar height="4px" color="#85716f" stopDelay={1000} />
      {children}
    </>
  );
};

export default Providers;
