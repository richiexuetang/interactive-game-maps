import { Region } from "@/__generated__/graphql";
import { hiddenCategoriesAtom, hiddenGroupsAtom } from "@/store/category";
import { hideFoundAtom, showMarkerAtom } from "@/store/marker";
import { Checkbox } from "@/components/ui/checkbox";
import { useAtom, useAtomValue } from "jotai";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { gameSlugAtom } from "@/store";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import { useParams, useRouter } from "next/navigation";
import {
  currentGroupsAtom,
  currentMarkersAtom,
  currentRegionAtom,
} from "@/store/map";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { cn } from "@/lib/utils";

interface MenuProps {
  regions: Region[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const Menu = ({ regions }: MenuProps) => {
  const params = useParams<{ slug: string }>();
  const [collapseMenu, setCollapseMenu] = useState(false);
  const groups = useAtomValue(currentGroupsAtom);
  const currentRegion = useAtomValue(currentRegionAtom);
  const markers = useAtomValue(currentMarkersAtom);

  const router = useRouter();
  const gameSlug = useAtomValue(gameSlugAtom);
  const [showMarker, setShowMarker] = useAtom(showMarkerAtom);
  const [hideFound, setHideFound] = useAtom(hideFoundAtom);
  const [hiddenCategories, setHiddenCategories] = useAtom(hiddenCategoriesAtom);
  const [hiddenGroups, setHiddenGroups] = useAtom(hiddenGroupsAtom);

  const toggleShowMarker = () => {
    if (!showMarker) {
      setHiddenCategories([]);
    } else {
      groups?.map((group) => {
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

  const toggleHideShowGroup = (groupId: string) => {
    const group = groups?.find((group) => group.id === groupId);
    const groupCategories = group?.categories?.map((category) => category.id);
    if (hiddenGroups.includes(groupId)) {
      setHiddenGroups(hiddenGroups.filter((group) => group !== groupId));
      setHiddenCategories(
        hiddenCategories.filter(
          (category) => !groupCategories?.includes(category)
        )
      );
    } else {
      setHiddenGroups((prev) => [...prev, groupId]);
      groupCategories?.map((category) =>
        setHiddenCategories((prev) => [...prev, category])
      );
    }
  };
  const ChevronIcon = collapseMenu ? ChevronRightIcon : ChevronLeftIcon;
  const chevronText = collapseMenu ? "Expand" : "Collapse";

  const handleChange = (event: SelectChangeEvent) => {
    router.push(`/map/${event.target.value}`);
  };

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
                priority
              />
            </Link>
            <Divider orientation="horizontal" flexItem />

            <FormControl fullWidth>
              <Select
                value={params.slug || "chapter-1"}
                onChange={handleChange}
              >
                {regions?.map((region, index) => (
                  <MenuItem key={`${region}${index}`} value={region.slug}>
                    {region.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Divider orientation="horizontal" flexItem />

            <div className="flex gap-5">
              <div className="flex gap-2 align-middle contents-center">
                <Checkbox
                  id="hideShowCheckbox"
                  checked={!showMarker}
                  onCheckedChange={toggleShowMarker}
                />
                <label htmlFor="hideShowCheckbox" className="-mt-1">
                  Hide All
                </label>
              </div>
              <div className="flex gap-2 align-middle contents-center">
                <Checkbox
                  id="showFoundCheckbox"
                  checked={hideFound}
                  onCheckedChange={() => setHideFound(!hideFound)}
                />
                <label htmlFor="showFoundCheckbox" className="-mt-1">
                  Hide Found
                </label>
              </div>
            </div>

            <Divider orientation="horizontal" flexItem />

            {groups?.map((group, index) => {
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
                <React.Fragment key={`${group.id}_${index}`}>
                  <h1
                    className={cn(
                      "text-lg uppercase w-full cursor-pointer",
                      hiddenGroups.includes(group.id) && "line-through"
                    )}
                    onClick={() => toggleHideShowGroup(group.id)}
                  >
                    {group.title}
                  </h1>
                  <Grid container spacing={1} sx={{ minWidth: 350 }}>
                    {group.categories?.map((category) => {
                      const count = markers?.filter(
                        ({ categoryId }) => categoryId == parseInt(category.id)
                      ).length;

                      if (count === 0) return null;
                      return (
                        <Grid
                          size={6}
                          key={category.title}
                          className={cn(
                            "cursor-pointer",
                            hiddenCategories.includes(category.id) &&
                              "line-through"
                          )}
                          onClick={() => handleHiddenCategory(category.id)}
                        >
                          <Item>
                            <span
                              className={cn(
                                `${gameSlug}-icon ${gameSlug}-icon-${category.icon}`
                              )}
                            />
                            <span className="text-sm text-ellipsis whitespace-nowrap">
                              {category.title}
                            </span>
                            <span className="text-sm"> {" " + count}</span>
                          </Item>
                        </Grid>
                      );
                    })}
                  </Grid>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
