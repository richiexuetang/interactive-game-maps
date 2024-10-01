import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { ShowHideButtons } from "./sidebar/show-hide-buttons";
import { SidebarClose } from "./sidebar/sidebar-close";
import { Map, Region } from "@/__generated__/graphql";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";
import {
  gameSlugAtom,
  hiddenCategoriesAtom,
  triggeredRegionFocusAtom,
} from "@/store";
import {
  currentGroupsAtom,
  currentMarkersAtom,
  triggerSubRegionIdAtom,
} from "@/store/map";

interface MenuProps {
  maps: Map[];
  regions: Region[];
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

export const Menu = ({ maps, regions: subRegions }: MenuProps) => {
  const router = useRouter();
  const params = useParams<{ slug: string }>();

  const [showMenu, setShowMenu] = useState(true);
  const groups = useAtomValue(currentGroupsAtom);
  const markers = useAtomValue(currentMarkersAtom);
  const gameSlug = useAtomValue(gameSlugAtom);
  const setRegionFocus = useSetAtom(triggeredRegionFocusAtom);
  const setSubRegionId = useSetAtom(triggerSubRegionIdAtom);
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
    const group = groups?.find((group) => group.id === groupId);
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
    <div className={`${gameSlug} sidebar`}>
      <SidebarClose showMenu={showMenu} setShowMenu={setShowMenu} />

      {showMenu && (
        <Collapse in={showMenu} orientation="horizontal">
          <Paper className="overflow-y-scroll absolute left-0 z-[499] w-96 h-full !bg-sidebarBackground">
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
              <h1
                className={cn(
                  "text-accent text-center",
                  getFontClassName(gameSlug)
                )}
              >
                {gameSlug?.replaceAll("-", " ").toUpperCase()} INTERACTIVE MAP
              </h1>
              <Divider orientation="horizontal" flexItem />

              <FormControl fullWidth>
                <Select
                  value={params.slug}
                  onChange={(event) =>
                    router.push(`/map/${event.target.value}`)
                  }
                >
                  {maps?.map((region, index) => (
                    <MenuItem key={`${region}${index}`} value={region.slug}>
                      {region.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Divider orientation="horizontal" flexItem />

              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignContent="center"
              >
                {subRegions?.map((region) => (
                  <div key={region.title} className="flex flex-start">
                    <UnderlineButton
                      onClick={() => setSubRegionId(region.title)}
                      onContextMenu={() => {
                        setRegionFocus(region.id);
                      }}
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

              {groups?.map((group, index) => {
                const counts: any = {};
                group.categories?.map((category) => {
                  const count = markers?.filter(
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
                        const count = markers?.filter(
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
                                className={cn(
                                  `${gameSlug}-icon-${category.icon}`,
                                  "mr-1"
                                )}
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
                              {/* <span className="text-[10px] text-right flex-1">
                                {count}
                              </span> */}
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
