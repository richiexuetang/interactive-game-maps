import { MarkerGroup, MarkerLocation } from "@/src/__generated__/graphql";
import { hiddenCategoriesAtom } from "@/src/store/category";
import { showMarkerAtom } from "@/src/store/marker";
import { Checkbox } from "@/src/components/ui/checkbox";
import { useAtom, useAtomValue } from "jotai";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@nextui-org/theme";
import { Divider } from "@nextui-org/react";
import { regionsAtom } from "@/src/store/region";
import { buttonVariants } from "./ui/button";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

interface MenuProps {
  groups: MarkerGroup[];
  markers: MarkerLocation[];
  gameSlug: string;
}

export const Menu = ({ groups, markers, gameSlug }: MenuProps) => {
  const [collapseMenu, setCollapseMenu] = useState(false);

  const [showMarker, setShowMarker] = useAtom(showMarkerAtom);
  const [hiddenCategories, setHiddenCategories] = useAtom(hiddenCategoriesAtom);
  const currentRegions = useAtomValue(regionsAtom);

  const toggleShowMarker = () => {
    if (!showMarker) {
      setHiddenCategories([]);
    } else {
      groups.map((group) => {
        group.categories?.map((category) => {
          setHiddenCategories((prev) => [...prev, category.id]);
        });
      });
    }
    setShowMarker(!showMarker);
  };

  const handleHiddenCategory = (category: string) => {
    if (hiddenCategories.includes(category)) {
      setHiddenCategories(
        hiddenCategories.filter((category) => category != category)
      );
    } else {
      setHiddenCategories((prev) => [...prev, category]);
    }
  };

  const ChevronIcon = collapseMenu ? ChevronRightIcon : ChevronLeftIcon;
  const chevronText = collapseMenu ? "Expand" : "Collapse";

  return (
    <>
      <div
        className={cn(
          "absolute z-[1000] top-20 bg-neutral-500 h-12 transition-all duration-200 opacity-100 border-1 border-l-0",
          !collapseMenu && "left-96"
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ChevronIcon
                onClick={() => setCollapseMenu(!collapseMenu)}
                className="mt-3 w-6 h-6 cursor-pointer"
              />
            </TooltipTrigger>
            <TooltipContent>{chevronText}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {!collapseMenu && (
        <div className="overflow-y-scroll absolute left-0 z-[499] w-96 transition-transform bg-neutral-600 h-full">
          <div className="relative flex flex-col p-5 gap-4 items-center">
            <Link href={`/region/${gameSlug}`}>
              <Image
                src={`/images/games/${gameSlug}/logo-512.png`}
                width="360"
                height="70"
                alt="sidebar logo"
                className="cursor-pointer"
              />
            </Link>

            <Divider />
            <div className="grid grid-cols-3 gap-4">
              {currentRegions.regions.map((region) => (
                <div key={region.id}>
                  <Link
                    href={`/map/${region.slug}`}
                    className={cn(buttonVariants({ variant: "link" }))}
                  >
                    {region.title}
                  </Link>
                </div>
              ))}
            </div>
            <Divider />
            <div className="flex gap-2">
              <Checkbox
                checked={!showMarker}
                onCheckedChange={toggleShowMarker}
              />
              <label>{showMarker ? "Hide All" : "Show All"}</label>
            </div>
            <Divider />
            {groups?.map((group) => {
              const counts: any = {};

              group.categories?.map((category) => {
                const count = markers?.filter(
                  ({ categoryId }) => categoryId == parseInt(category.id)
                ).length;
                counts[`${category.title}`] = count;
              });

              const sumValues = Object.values(counts).reduce(
                (a: any, b: any) => a + b,
                0
              );

              if (sumValues === 0) return null;

              return (
                <React.Fragment key={group.id}>
                  <h1 className="text-lg uppercase w-full">{group.title}</h1>
                  <div key={group.title} className="grid grid-cols-2 gap-2">
                    {group.categories?.map((category) => {
                      const count = markers?.filter(
                        ({ categoryId }) => categoryId == parseInt(category.id)
                      ).length;

                      if (count === 0) return null;
                      return (
                        <div
                          key={category.title}
                          className={cn(
                            "flex min-w-44 w-full cursor-pointer justify-between pr-2",
                            hiddenCategories.includes(category.id) &&
                              "line-through"
                          )}
                          onClick={() => handleHiddenCategory(category.id)}
                        >
                          <span
                            className={cn(
                              `${gameSlug}-icon ${gameSlug}-icon-${category.icon}`
                            )}
                          />
                          <span className="pl-5 text-sm text-ellipsis whitespace-nowrap">
                            {category.title}
                          </span>
                          <span className="text-sm">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
