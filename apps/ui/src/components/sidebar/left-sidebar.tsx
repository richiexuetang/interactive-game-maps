import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import * as L from "leaflet";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MapSwitcher } from "./components/map-switcher";
import { MarkerSearch } from "./components/marker-search";
import { ShowHideButtons } from "./components/show-hide-buttons";
import { SidebarClose } from "./components/sidebar-close";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";
import {
  hiddenCategoriesAtom,
  focusRegionIdAtom,
  currentMapAtom,
} from "@/store";

interface MenuProps {
  map: L.Map | null;
}

const UnderlineButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "none",
  borderColor: "none",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.grey[900],
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
}));

export const Menu = ({ map }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(true);
  const currentMap = useAtomValue(currentMapAtom);
  const setSubRegionId = useSetAtom(focusRegionIdAtom);
  const [hiddenCategories, setHiddenCategories] = useAtom(hiddenCategoriesAtom);

  const handleHiddenCategory = (categoryId: number) => {
    if (hiddenCategories.includes(categoryId)) {
      const newHidden = hiddenCategories.filter(
        (category) => category != categoryId
      );
      setHiddenCategories([...newHidden]);
    } else {
      setHiddenCategories((prev) => [...prev, categoryId]);
    }
  };

  const handleGroupHide = (groupId: number) => {
    const group = currentMap?.groups?.find((group) => group.id === groupId);
    const categories = group?.categories;

    let count = 0;
    categories?.map((category) => {
      if (hiddenCategories.includes(category.id)) {
        count++;
      }
    });

    if (count !== categories?.length! || count == 0) {
      categories?.map((category) => {
        if (!hiddenCategories.includes(category.id)) {
          setHiddenCategories((prev) => [...prev, category.id]);
        }
      });
    } else {
      categories?.map((category) => {
        if (hiddenCategories.includes(category.id)) {
          setHiddenCategories((prev) => prev.filter((c) => c !== category.id));
        }
      });
    }
  };

  return (
    <div
      className={`${currentMap?.gameSlug} sidebar overflow-scroll z-[100000]`}
    >
      <SidebarClose showMenu={showMenu} setShowMenu={setShowMenu} />

      {showMenu && (
        <Collapse in={showMenu} orientation="horizontal">
          <Paper className="overflow-y-scroll absolute left-0 z-[499] w-96 h-full !bg-sidebarBackground">
            <div className="relative flex flex-col p-5 gap-4 items-center">
              <Link href={`/region/${currentMap?.gameSlug}`}>
                <Image
                  src={`/images/games/${currentMap?.gameSlug}/logo-512.png`}
                  width="360"
                  height="70"
                  alt="sidebar logo"
                  className="cursor-pointer"
                  priority
                />
              </Link>
              <h1
                className={cn(
                  "text-accent text-center",
                  getFontClassName(currentMap?.gameSlug)
                )}
              >
                {currentMap?.gameSlug?.replaceAll("-", " ").toUpperCase()}{" "}
                INTERACTIVE MAP
              </h1>
              <Divider orientation="horizontal" flexItem />

              <MapSwitcher />
              <Divider orientation="horizontal" flexItem />

              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignContent="center"
              >
                {currentMap?.regions?.map((region) => (
                  <div key={region.title} className="flex flex-start">
                    <UnderlineButton
                      onClick={() => setSubRegionId(region.title)}
                      sx={{ fontSize: 12, whiteSpace: "nowrap" }}
                      variant="text"
                    >
                      {region.title}
                    </UnderlineButton>
                  </div>
                ))}
              </Grid>

              <Divider orientation="horizontal" flexItem />

              <ShowHideButtons />

              <Divider orientation="horizontal" flexItem />

              <MarkerSearch map={map} />
              {currentMap?.groups?.map((group, index) => {
                const counts: any = {};
                group.categories?.map((category) => {
                  const count = currentMap?.locations?.filter(
                    ({ categoryId }) => categoryId == category.id
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
                      className="text-lg uppercase w-full text-text cursor-pointer"
                      onClick={() => handleGroupHide(group.id)}
                    >
                      {group.title}
                    </h1>
                    <Grid container spacing={1} sx={{ minWidth: 350 }}>
                      {group.categories?.map((category) => {
                        const count = currentMap?.locations?.filter(
                          ({ categoryId }) => categoryId === category.id
                        ).length;
                        if (!count) return null;

                        return (
                          <Grid
                            size={6}
                            key={category.title}
                            className={cn(
                              hiddenCategories.includes(category.id) &&
                                "line-through opacity-80"
                            )}
                          >
                            <div
                              className="w-full flex items-center !cursor-pointer uppercase px-2 py-1 hover:opacity-80"
                              onClick={() => handleHiddenCategory(category.id)}
                            >
                              <span
                                className={cn(`icon-${category.icon}`, "mr-1")}
                              />
                              <Typography variant="caption">
                                {category.title}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{ flex: 1, textAlign: "right" }}
                              >
                                {count}
                              </Typography>
                            </div>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </React.Fragment>
                );
              })}
            </div>
          </Paper>
        </Collapse>
      )}
    </div>
  );
};
