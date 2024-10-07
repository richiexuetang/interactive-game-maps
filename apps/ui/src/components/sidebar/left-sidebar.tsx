import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as L from "leaflet";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MapSwitcher } from "./components/map-switcher";
import { MarkerSearch } from "./components/marker-search";
import { RegionsGrid } from "./components/regions-grid";
import { ShowHideButtons } from "./components/show-hide-buttons";
import { SidebarClose } from "./components/sidebar-close";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useMapStore } from "@/store/map";

interface MenuProps {
  map: L.Map | null;
}

export const Menu = ({ map }: MenuProps) => {
  //#region Hooks
  const [showMenu, setShowMenu] = useState(true);

  const currentMap = useMapStore((state) => state.currentMap);
  const setMap = useMapStore((state) => state.setCurrentMap);
  const hidden = currentMap?.hiddenCategories ?? [];
  //#endregion

  if (!currentMap) return;

  const { game, groups, locations, hiddenCategories } = currentMap;

  //#region Helpers
  const handleHiddenCategory = (categoryId: number) => {
    const alreadyHidden = hiddenCategories.includes(categoryId);
    if (!alreadyHidden) {
      setMap({
        ...currentMap,
        hiddenCategories: [...hidden, categoryId],
      });
      return;
    }
    setMap({
      ...currentMap,
      hiddenCategories: [
        ...hidden.filter((category) => category != categoryId),
      ],
    });
  };

  /**
   * Hide entire group's categories as long as it is not all hidden already
   *
   * @param groupId
   * @returns
   */
  const handleGroupHide = (groupId: number) => {
    const cats = groups.find((group) => group.id === groupId)?.categories;
    if (!cats) return;

    const count = cats.filter((category) =>
      hidden.includes(category.id)
    ).length;

    if (count == cats.length) {
      cats.map(
        ({ id }) =>
          hidden.includes(id) &&
          setMap({
            ...currentMap,
            hiddenCategories: hidden.filter((c) => c !== id),
          })
      );
    } else {
      cats.map(
        ({ id }) =>
          !currentMap.hiddenCategories.includes(id) &&
          setMap({ ...currentMap, hiddenCategories: [...hidden, id] })
      );
    }
  };
  //#endregion

  return (
    <div className={`${game?.slug} sidebar overflow-scroll z-[100000]`}>
      <SidebarClose showMenu={showMenu} setShowMenu={setShowMenu} />

      {showMenu && (
        <Collapse in={showMenu} orientation="horizontal">
          <Paper className="overflow-y-scroll absolute left-0 z-[499] w-96 h-full !bg-sidebarBackground">
            <div className="relative flex flex-col p-5 gap-4 items-center">
              <Link href={`/game/${game?.slug}`}>
                <Image
                  src={`/images/games/${game?.slug}/logo-512.png`}
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
                  getFontClassName(game?.slug)
                )}
              >
                {game?.slug.replaceAll("-", " ").toUpperCase()} INTERACTIVE MAP
              </h1>
              <Divider orientation="horizontal" flexItem />

              <MapSwitcher />

              <RegionsGrid />

              <Divider orientation="horizontal" flexItem />

              <ShowHideButtons />

              <Divider orientation="horizontal" flexItem />

              {currentMap?.boundedRegion && (
                <Chip
                  label={currentMap.boundedRegion.title}
                  onDelete={() =>
                    setMap({ ...currentMap!, boundedRegion: null })
                  }
                />
              )}
              <MarkerSearch map={map} />

              <Divider orientation="horizontal" flexItem />

              {groups?.map((group, index) => {
                const counts: any = {};
                group.categories?.map((category) => {
                  const count = locations?.filter(
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
                        const count = locations?.filter(
                          ({ categoryId }) => categoryId === category.id
                        ).length;
                        if (!count) return null;

                        return (
                          <Grid
                            size={6}
                            key={category.title}
                            className={cn(
                              currentMap.hiddenCategories.includes(
                                category.id
                              ) && "line-through opacity-80"
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
