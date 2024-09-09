import { MarkerGroup, MarkerLocation } from "@/app/__generated__/graphql";
import { hiddenCategoriesAtom } from "@/store/category";
import { hiddenGroupsAtom } from "@/store/group";
import { showMarkerAtom } from "@/store/marker";
import { Checkbox } from "@nextui-org/checkbox";
import { useAtom } from "jotai";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@nextui-org/theme";
import { Tooltip } from "@nextui-org/react";

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

  const toggleShowMarker = () => setShowMarker(!showMarker);
  const handleHiddenCategory = (category: string) => {
    if (hiddenCategories.includes(category)) {
      const newCategories = hiddenCategories.filter(
        (category) => category != category
      );
      setHiddenCategories(newCategories);
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
        className={cn("absolute z-[1000] top-20", !collapseMenu && "left-96")}
      >
        <Tooltip content={chevronText}>
          <ChevronIcon
            onClick={() => setCollapseMenu(!collapseMenu)}
            className="w-8 h-8 cursor-pointer"
          />
        </Tooltip>
      </div>
      {!collapseMenu && (
        <div className="overflow-y-scroll absolute left-0 z-[499] w-96 transition-transform bg-zinc-900 border-r-blue-50 border-1 border-l-0 h-full">
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

            <Checkbox isSelected={!showMarker} onValueChange={toggleShowMarker}>
              {showMarker ? "Hide All" : "Show All"}
            </Checkbox>
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
                <div key={group.title} className="flex flex-wrap w-full">
                  <h1
                    className="text-lg w-full uppercase"
                    onClick={() => handleHideGroup(group.title)}
                  >
                    {group.title}
                  </h1>
                  <div className="flex flex-col cursor-pointer flex-wrap">
                    {group.categories?.map((category) => {
                      const count = markers?.filter(
                        ({ categoryId }) => categoryId == parseInt(category.id)
                      ).length;

                      if (count === 0) return null;

                      return (
                        <div
                          key={category.title}
                          className="cursor-pointer flex-grow"
                          onClick={() => handleHiddenCategory(category.id)}
                        >
                          <span className="text-sm text-ellipsis whitespace-nowrap">
                            {category.title} {count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
