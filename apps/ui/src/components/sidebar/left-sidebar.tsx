import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import * as L from "leaflet";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { ShowHideButtons } from "./show-hide-buttons";
import { SidebarClose } from "./sidebar-close";
import { Map, Region } from "@/__generated__/graphql";
import { useDebounceCallback } from "@/hooks";
import { getFontClassName } from "@/lib/font";
import { cn } from "@/lib/utils";
import {
  hiddenCategoriesAtom,
  highlightedMarkerAtom,
  searchFilterMarkerAtom,
  triggeredMarkerAtom,
  focusRegionIdAtom,
  currentMapAtom,
} from "@/store";

interface MenuProps {
  maps: Map[];
  regions: Region[];
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

export const Menu = ({ maps, regions: subRegions, map }: MenuProps) => {
  const router = useRouter();
  const params = useParams<{ slug: string }>();

  const [showMenu, setShowMenu] = useState(true);
  const currentMap = useAtomValue(currentMapAtom);
  const setSubRegionId = useSetAtom(focusRegionIdAtom);
  const [hiddenCategories, setHiddenCategories] = useAtom(hiddenCategoriesAtom);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchFilterMarker, setSearchFilterMarker] = useAtom(
    searchFilterMarkerAtom
  );
  const [showFiltered, setShowFiltered] = useState(false);
  const setHighlightedMarker = useSetAtom(highlightedMarkerAtom);
  const setTriggeredMarkerId = useSetAtom(triggeredMarkerAtom);
  const debounced = useDebounceCallback(setSearchFilterMarker, 500);

  const inputSearchChange = (input: string) => {
    setSearchKeyword(input);
    let filtered =
      currentMap?.locations?.filter((marker) =>
        marker?.title?.toLowerCase().includes(input.toLowerCase())
      ) ?? [];
    if (input === "") {
      filtered = [];
    }
    debounced(filtered);
  };

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

              <TextField
                fullWidth
                label="Search for markers..."
                variant="filled"
                onFocus={() => setShowFiltered(true)}
                value={searchKeyword}
                onChange={(e) => inputSearchChange(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        {searchKeyword.length ? (
                          <ClearIcon
                            onClick={() => {
                              setSearchKeyword("");
                              setSearchFilterMarker([]);
                            }}
                            sx={{ cursor: "pointer" }}
                          />
                        ) : (
                          <SearchIcon />
                        )}
                      </InputAdornment>
                    ),
                  },
                }}
              />

              {searchFilterMarker?.length > 0 && showFiltered && (
                <List>
                  {searchFilterMarker.map((marker) => (
                    <React.Fragment key={marker.id}>
                      <ListItem
                        onPointerEnter={() => {
                          setHighlightedMarker(marker.id);
                        }}
                        onPointerLeave={() => setHighlightedMarker(null)}
                        alignItems="flex-start"
                        onClick={() => {
                          map?.setView([marker.latitude, marker.longitude], 13);
                          setTriggeredMarkerId(marker.id);
                        }}
                        key={marker.id}
                        sx={{ cursor: "pointer" }}
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemAvatar>
                            <Avatar>
                              <span
                                className={cn(`icon-${marker.category?.icon}`)}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={marker.title}
                            secondary={
                              <Typography
                                component="span"
                                variant="body2"
                                sx={{
                                  color: "text.primary",
                                  display: "inline",
                                  lineHeight: 2,
                                }}
                              >
                                {marker.category?.title}
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              )}
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
