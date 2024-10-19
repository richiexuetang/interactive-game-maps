import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as L from "leaflet";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getFontClassName } from "@/lib/ui/font";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store";
import { useMapStore } from "@/store/map";
import { HideFoundToggle } from "./components/hide-found-toggle";
import { LoginButton } from "./components/login-button";
import { MapSwitcher } from "./components/map-switcher";
import { MarkerSearch } from "./components/marker-search";
import { RegionsGrid } from "./components/regions-grid";
import { ShowHideButtons } from "./components/show-hide-buttons";
import { SidebarClose } from "./components/sidebar-close";

interface MenuProps {
  map: L.Map | null;
}

export const Menu = ({ map }: MenuProps) => {
  //#region Hooks
  const [showMenu, setShowMenu] = useState(true);

  const currentMap = useMapStore((state) => state.currentMap);
  const setMap = useMapStore((state) => state.setCurrentMap);
  const hidden = currentMap?.hiddenCategories ?? [];
  const user = useAuthStore((state) => state.user);
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
    const cats = groups.find((group: any) => group.id === groupId)?.categories;
    if (!cats) return;

    const count = cats.filter((category: any) =>
      hidden.includes(category.id)
    ).length;

    let newHidden = hidden;
    if (count == cats.length) {
      cats.map(({ id }: any) => {
        newHidden = newHidden.filter((cat) => cat != id);
      });
    } else {
      cats.map(
        ({ id }: any) =>
          !currentMap.hiddenCategories.includes(id) && newHidden.push(id)
      );
    }
    setMap({ ...currentMap, hiddenCategories: newHidden });
  };
  //#endregion

  return (
    <div>
      <SidebarClose showMenu={showMenu} setShowMenu={setShowMenu} />

      {showMenu && (
        <Paper className="overflow-y-scroll absolute left-0 z-[499] w-[425px] h-full !bg-sidebarBackground flex flex-col p-5 gap-4">
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
          <Typography
            className={cn(
              "text-accent text-center",
              getFontClassName(game?.slug)
            )}
          >
            {game?.slug.replaceAll("-", " ").toUpperCase()} INTERACTIVE MAP
          </Typography>
          <Divider orientation="horizontal" flexItem />

          <MapSwitcher />

          <RegionsGrid />

          <Divider orientation="horizontal" flexItem />

          <ShowHideButtons />

          <Divider orientation="horizontal" flexItem />

          {user ? <HideFoundToggle /> : <LoginButton />}

          <Divider orientation="horizontal" flexItem />

          {currentMap?.boundedRegion && (
            <div className="items-center">
              <Chip
                label={currentMap.boundedRegion.title}
                onDelete={() => setMap({ ...currentMap!, boundedRegion: null })}
              />
            </div>
          )}
          <MarkerSearch map={map} />

          <Divider orientation="horizontal" flexItem />

          {currentMap.searchFilterMarkers.length === 0 &&
            groups?.map((group: any, index: any) => {
              const counts: any = {};
              group.categories?.map((category: any) => {
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
                  <Typography
                    className="text-lg uppercase w-full !font-text cursor-pointer"
                    onClick={() => handleGroupHide(group.id)}
                  >
                    {group.title}
                  </Typography>
                  <Grid container spacing={1} sx={{ minWidth: 350 }}>
                    {group.categories?.map((category: any) => {
                      const count = locations?.filter(
                        ({ categoryId }) => categoryId === category.id
                      ).length;
                      if (!count) return null;

                      return (
                        <Grid
                          size={6}
                          key={category.title}
                          className={cn(
                            currentMap.hiddenCategories.includes(category.id) &&
                              "line-through opacity-80"
                          )}
                        >
                          <div
                            className="w-full flex items-center !cursor-pointer uppercase px-2 hover:opacity-80"
                            onClick={() => handleHiddenCategory(category.id)}
                          >
                            <span
                              className={cn(
                                `icon-${category.icon}`,
                                "w-4 h-4 mr-2"
                              )}
                            />
                            <Typography
                              variant="caption"
                              sx={{
                                fontSize: "12px",
                                whiteSpace: "nowrap",
                                fontFamily: "var(--text-font-family)",
                              }}
                            >
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
        </Paper>
      )}
    </div>
  );
};
