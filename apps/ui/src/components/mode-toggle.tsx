"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { useLoaded } from "@/src/hooks/use-loaded";
import { Button } from "./ui/button";

export function ModeToggle() {
  const loaded = useLoaded();
  const { setTheme, theme } = useTheme();

  return (
    <>
      {loaded && (
        <Button
          variant="ghost"
          className="h-8 w-8 px-0"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          ) : (
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          )}
        </Button>
      )}
    </>
  );
}
