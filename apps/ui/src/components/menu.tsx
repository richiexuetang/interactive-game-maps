import React from "react";
import { Region } from "@/__generated__/graphql";
import { hiddenCategoriesAtom } from "@/store/category";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import { gameSlugAtom } from "@/store";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useParams, useRouter } from "next/navigation";
import {
  currentGroupsAtom,
  currentMarkersAtom,
  triggerSubRegionIdAtom,
} from "@/store/map";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { cn } from "@/lib/utils";
import Button from "@mui/material/Button";
import { Collapse } from "@mui/material";
import { ShowHideButtons } from "./sidebar/show-hide-buttons";
import { SidebarClose } from "./sidebar/sidebar-close";
import { getBodyFont } from "@/lib/font";

interface MenuProps {
  regions: Region[];
  subRegions: any[];
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

const SidebarDivider = styled(Divider)(() => ({
  borderColor: "var(--border-color)",
}));

export const Menu = ({ regions, subRegions }: MenuProps) => {
  const router = useRouter();
  const params = useParams<{ slug: string }>();

  const [showMenu, setShowMenu] = useState(true);
  const groups = useAtomValue(currentGroupsAtom);
  const markers = useAtomValue(currentMarkersAtom);
  const gameSlug = useAtomValue(gameSlugAtom);
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
    <>
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
              <h1 className="text-accent text-center">
                {gameSlug?.replaceAll("-", " ").toUpperCase()} INTERACTIVE MAP
              </h1>
              <SidebarDivider orientation="horizontal" flexItem />

              <FormControl fullWidth>
                <Select
                  value={params.slug}
                  onChange={(event) =>
                    router.push(`/map/${event.target.value}`)
                  }
                >
                  {regions?.map((region, index) => (
                    <MenuItem key={`${region}${index}`} value={region.slug}>
                      {region.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <SidebarDivider orientation="horizontal" flexItem />

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
                      sx={{ fontSize: 12, whiteSpace: "nowrap" }}
                      variant="text"
                    >
                      {region.title}
                    </UnderlineButton>
                  </div>
                ))}
              </Grid>

              <SidebarDivider orientation="horizontal" flexItem />

              <ShowHideButtons />

              <SidebarDivider orientation="horizontal" flexItem />

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
                              <span
                                className={cn(
                                  "text-xs text-ellipsis whitespace-nowrap overflow-hidden",
                                  getBodyFont(gameSlug)
                                )}
                              >
                                {category.title}
                              </span>
                              <span className="text-xs text-right flex-1">
                                {count}
                              </span>
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
    </>
  );
};
