import { MarkerGroup, MarkerLocation } from "@/app/__generated__/graphql";
import { hiddenCategoriesAtom } from "@/store/category";
import { hiddenGroupsAtom } from "@/store/group";
import { showMarkerAtom } from "@/store/marker";
import { Checkbox } from "@nextui-org/checkbox";
import { useAtom, useAtomValue } from "jotai";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@nextui-org/theme";
import { Divider, Tooltip } from "@nextui-org/react";
import { regionsAtom } from "@/store/region";

interface MenuProps {
  groups: MarkerGroup[];
  markers: MarkerLocation[];
  gameSlug: string;
}

export const Menu = ({ groups, markers, gameSlug }: MenuProps) => {
  const [collapseMenu, setCollapseMenu] = useState(false);

  const [showMarker, setShowMarker] = useAtom(showMarkerAtom);
  const [hiddenCategories, setHiddenCategories] = useAtom(hiddenCategoriesAtom);
  const [hiddenGroups, setHiddenGroups] = useAtom(hiddenGroupsAtom);
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

  const handleHideGroup = (group: string) => {
    if (hiddenGroups.includes(group)) {
      const newGroups = hiddenGroups.filter((group) => group != group);
      setHiddenGroups(newGroups);
    } else {
      setHiddenGroups((prev) => [...prev, group]);
    }
  };

  const ChevronIcon = collapseMenu ? ChevronRightIcon : ChevronLeftIcon;
  const chevronText = collapseMenu ? "Expand" : "Collapse";

  return (
    <>
      <div
        className={cn(
          "absolute z-[1000] top-20 bg-[#090708] h-12 transition-all duration-200 opacity-100",
          !collapseMenu && "left-96"
        )}
      >
        <Tooltip content={chevronText}>
          <ChevronIcon
            onClick={() => setCollapseMenu(!collapseMenu)}
            className="mt-3 w-6 h-6 cursor-pointer"
          />
        </Tooltip>
      </div>
      {!collapseMenu && (
        <div className="overflow-y-scroll absolute left-0 z-[499] w-96 transition-transform bg-[#090708] h-full">
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
                  <Link href={`/map/${region.slug}`} className="text-sm">
                    {region.title}
                  </Link>
                </div>
              ))}
            </div>
            <Divider />
            <Checkbox isSelected={!showMarker} onValueChange={toggleShowMarker}>
              {showMarker ? "Hide All" : "Show All"}
            </Checkbox>
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
                <>
                  <h1
                    className="text-lg uppercase w-full"
                    onClick={() => handleHideGroup(group.title)}
                  >
                    {group.title}
                  </h1>
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
                          <span className={cn(`icon icon-${category.icon}`)} />
                          <span className="pl-5 text-sm text-ellipsis whitespace-nowrap">
                            {category.title}
                          </span>
                          <span className="text-sm">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
