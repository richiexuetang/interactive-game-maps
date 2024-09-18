import { Region } from "@/__generated__/graphql";
import { hiddenCategoriesAtom } from "@/store/category";
import { showMarkerAtom } from "@/store/marker";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import React from "react";
import { gameSlugAtom } from "@/store";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
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
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

interface MenuProps {
  regions: Region[];
  subRegions: any[];
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
  "&:hover": {
    opacity: 0.8,
  },
}));

export const Menu = ({ regions, subRegions }: MenuProps) => {
  const params = useParams<{ slug: string }>();
  const [collapseMenu, setCollapseMenu] = useState(false);
  const groups = useAtomValue(currentGroupsAtom);
  const markers = useAtomValue(currentMarkersAtom);
  const router = useRouter();
  const gameSlug = useAtomValue(gameSlugAtom);
  const setShowMarker = useSetAtom(showMarkerAtom);
  const [hiddenCategories, setHiddenCategories] = useAtom(hiddenCategoriesAtom);

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

  const handleChange = (event: SelectChangeEvent) => {
    router.push(`/map/${event.target.value}`);
  };

  // const handleHideFound = () => {
  //   if (appUser?.email) {
  //     const hide = !appUser.hideFound;
  //     toggleHideFound({
  //       variables: { data: { email: appUser.email, hide } },
  //     });
  //     setAppUser({ ...appUser, hideFound: hide });
  //   }
  // };

  const setSubRegionId = useSetAtom(triggerSubRegionIdAtom);
  return (
    <>
      <Paper
        className={cn(
          "absolute z-[1000] top-20 h-10 transition-all duration-200 opacity-100",
          !collapseMenu && "left-96"
        )}
        elevation={0}
      >
        <Tooltip title={chevronText}>
          <IconButton onClick={() => setCollapseMenu(!collapseMenu)}>
            <ChevronIcon />
          </IconButton>
        </Tooltip>
      </Paper>
      {!collapseMenu && (
        <Paper className="overflow-y-scroll absolute left-0 z-[499] w-96 transition-transform h-full">
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
              <Select value={params.slug} onChange={handleChange}>
                {regions?.map((region, index) => (
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
                <Grid key={region.title} size={5} flexGrow={1}>
                  <Button
                    onClick={() => setSubRegionId(region.title)}
                    sx={{ fontSize: 12, whiteSpace: "nowrap" }}
                    variant="text"
                  >
                    {region.title}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Divider orientation="horizontal" flexItem />

            <div className="flex gap-5">
              <Button onClick={() => setShowMarker(true)}>SHOW ALL</Button>
              <Button onClick={() => setShowMarker(false)}>HIDE ALL</Button>
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
                  <h1 className={cn("text-lg uppercase w-full cursor-pointer")}>
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
        </Paper>
      )}
    </>
  );
};
