import { CheckListIcon } from "./icons/check-list-icon";
import Fab from "@mui/material/Fab";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  currentGroupsAtom,
  currentMarkersAtom,
  gameSlugAtom,
} from "@/store/map";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { userAtom } from "@/store/auth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigationIcon from "@mui/icons-material/Navigation";
import { triggeredMarkerIdAtom } from "@/store/marker";
import { useMutation } from "@apollo/client";
import {
  ADD_TO_USER_FOUND,
  ADD_TRACKING_CATEGORY,
  REMOVE_FROM_USER_FOUND,
  REMOVE_TRACKING_CATEGORY,
} from "@/lib/constants";

export const ProgressTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const currentGroups = useAtomValue(currentGroupsAtom);
  const currentMarkers = useAtomValue(currentMarkersAtom);
  const setTriggerMarkerId = useSetAtom(triggeredMarkerIdAtom);
  const gameSlug = useAtomValue(gameSlugAtom);

  const [appUser, setAppUser] = useAtom(userAtom);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const [addTrackingCategory] = useMutation(ADD_TRACKING_CATEGORY);
  const [removeTrackingCategory] = useMutation(REMOVE_TRACKING_CATEGORY);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (e: SelectChangeEvent) => {
    if (appUser) {
      if (
        appUser.trackingCategories &&
        !appUser.trackingCategories?.includes(parseInt(e.target.value))
      ) {
        addTrackingCategory({
          variables: {
            data: {
              email: appUser?.email ?? "",
              categoryId: parseInt(e.target.value),
            },
          },
        });
        setAppUser({
          ...appUser,
          trackingCategories: [
            ...appUser?.trackingCategories,
            parseInt(e.target.value),
          ],
        });
      } else {
        removeTrackingCategory({
          variables: {
            data: {
              email: appUser.email,
              categoryId: parseInt(e.target.value),
            },
          },
        });
        const newTracking = appUser.trackingCategories.filter(
          (category) => category !== parseInt(e.target.value)
        );
        setAppUser({
          ...appUser,
          trackingCategories: newTracking,
        });
      }
    }

    setSelectedCategory(e.target.value);
  };

  const getCategoryInfoById = (id: string) => {
    const group = currentGroups?.find((group) =>
      group.categories?.find((category) => category.id === id)
    );
    const category = group?.categories?.find((category) => category.id === id);
    return category;
  };

  const totalFoundForCategory = (id: string) => {
    let result = 0;
    appUser?.foundLocations.map((location) => {
      const marker = currentMarkers?.find(
        (marker) => marker.id.toString() == location.toString()
      );
      if (marker?.categoryId?.toString() === id) {
        result++;
      }
    });
    return result;
  };

  const totalForCategory = (id: string) => {
    let result = 0;
    currentMarkers?.map((marker) => {
      if (marker.categoryId?.toString() === id) {
        result++;
      }
    });
    return result;
  };

  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const handleMarkerFound = (markerId: number) => {
    if (appUser?.email) {
      if (appUser?.foundLocations?.includes(markerId)) {
        removeLocation({
          variables: { data: { email: appUser.email, location: markerId } },
        });
        const newFoundLocations = appUser.foundLocations.filter(
          (location) => location !== markerId
        );
        setAppUser({ ...appUser, foundLocations: newFoundLocations });
      } else {
        addLocation({
          variables: { data: { email: appUser.email, location: markerId } },
        });
        const newFoundLocations = [...appUser.foundLocations, markerId];
        setAppUser({ ...appUser, foundLocations: newFoundLocations });
      }
    }
  };

  return (
    <div className="absolute top-36 right-2 z-[1000]">
      <Tooltip title="Progress Tracker" placement="left">
        <Fab onClick={handleClick}>
          <CheckListIcon className="h-6 w-6" />
        </Fab>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>Progress Tracker</Typography>
        <Divider />
        <div className="flex flex-col">
          {appUser?.trackingCategories?.map((category) => (
            <div key={category}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <span>{getCategoryInfoById(category.toString())?.title}</span>
                  <span>
                    {totalFoundForCategory(category.toString())}/
                    {totalForCategory(category.toString())}
                  </span>
                </AccordionSummary>
                {currentMarkers?.map((marker) => {
                  if (marker.categoryId !== category) return null;

                  return (
                    <AccordionDetails
                      key={`${category} location`}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        checked={appUser?.foundLocations?.includes(
                          parseInt(marker.id)
                        )}
                        onChange={() => handleMarkerFound(parseInt(marker.id))}
                      />
                      <div className="flex items-center gap-2">
                        <span
                          className={`${gameSlug}-icon ${gameSlug}-icon-${marker.category?.icon}`}
                        />
                        <p>{marker.title}</p>
                      </div>
                      <IconButton>
                        <NavigationIcon
                          sx={{ width: 15, height: 15, cursor: "pointer" }}
                          onClick={() => setTriggerMarkerId(marker.id)}
                        />
                      </IconButton>
                    </AccordionDetails>
                  );
                })}
              </Accordion>
            </div>
          ))}
        </div>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Track category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            label="Track category"
            onChange={handleChange}
          >
            {currentGroups?.map((group) =>
              group.categories?.map((category) => (
                <MenuItem value={category.id} key={category.id}>
                  {category.title}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Popover>
    </div>
  );
};
