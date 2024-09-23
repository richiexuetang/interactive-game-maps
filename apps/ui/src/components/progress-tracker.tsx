import { CheckListIcon } from "./icons/check-list-icon";
import Fab from "@mui/material/Fab";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
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
  Button,
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Popper,
  Select,
  SelectChangeEvent,
  styled,
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
  TOGGLE_HIDE_FOUND,
} from "@/lib/constants";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SideFab = styled(Fab)(() => ({
  backgroundColor: "var(--sidebar-background-color)",
  "&:hover": {
    opacity: 0.8,
    backgroundColor: "var(--sidebar-background-color)",
  },
}));

export const ProgressTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const currentGroups = useAtomValue(currentGroupsAtom);
  const currentMarkers = useAtomValue(currentMarkersAtom);
  const setTriggerMarkerId = useSetAtom(triggeredMarkerIdAtom);
  const gameSlug = useAtomValue(gameSlugAtom);
  const [appUser, setAppUser] = useAtom(userAtom);

  const [addTrackingCategory] = useMutation(ADD_TRACKING_CATEGORY);
  const [removeTrackingCategory] = useMutation(REMOVE_TRACKING_CATEGORY);
  const [toggleUserHideFound] = useMutation(TOGGLE_HIDE_FOUND);
  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

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

  const getCategoryInfoById = (id: number) => {
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

  const toggleHideFound = () => {
    if (appUser) {
      const hide = !appUser.hideFound;

      toggleUserHideFound({
        variables: { data: { email: appUser.email, hide } },
      });
      setAppUser({ ...appUser, hideFound: hide });
    }
  };

  return (
    <div className="absolute top-36 right-2 z-[1000] flex flex-col gap-5">
      <Tooltip title="Progress Tracker" placement="left">
        <SideFab onClick={handleClick}>
          <CheckListIcon className="h-6 w-6" />
        </SideFab>
      </Tooltip>
      <Popper
        disablePortal={true}
        id={id}
        open={open}
        anchorEl={anchorEl}
        sx={{
          width: 275,
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 1,
          bgcolor: "black",
          p: 2,
        }}
      >
        <Typography sx={{ p: 2, color: "white", fontFamily: "CrimsonPro" }}>
          Progress Tracker
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {appUser ? (
          <div className="flex flex-col mb-3">
            <Button
              startIcon={
                appUser?.hideFound ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              onClick={toggleHideFound}
            >
              {appUser?.hideFound ? "Show Found" : "Hide Found"}
            </Button>
            {appUser?.trackingCategories?.map((category) => (
              <Accordion key={category}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <span>{getCategoryInfoById(category)?.title}</span>
                  <span className="ml-5">
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
                        checked={appUser?.foundLocations?.includes(marker.id)}
                        onChange={() => handleMarkerFound(marker.id)}
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
            ))}
            <FormControl fullWidth sx={{ mt: 2 }}>
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
          </div>
        ) : null}
      </Popper>
    </div>
  );
};
