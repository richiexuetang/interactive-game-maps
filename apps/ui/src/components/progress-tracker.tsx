import { CheckListIcon } from "./icons/check-list-icon";
import Fab from "@mui/material/Fab";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { currentGroupsAtom, currentMarkersAtom } from "@/store/map";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Menu,
  styled,
} from "@mui/material";
import { userAtom } from "@/store/auth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigationIcon from "@mui/icons-material/Navigation";
import { triggeredMarkerIdAtom } from "@/store/marker";
import { useMutation } from "@apollo/client";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const currentGroups = useAtomValue(currentGroupsAtom);
  const currentMarkers = useAtomValue(currentMarkersAtom);
  const setTriggerMarkerId = useSetAtom(triggeredMarkerIdAtom);
  const [appUser, setAppUser] = useAtom(userAtom);

  const [toggleUserHideFound] = useMutation(TOGGLE_HIDE_FOUND);
  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCategoryInfoById = (id: number) => {
    const group = currentGroups?.find((group) =>
      group.categories?.find((category) => category.id === id)
    );
    const category = group?.categories?.find((category) => category.id === id);
    return category;
  };

  const totalFoundForCategory = (id: number) => {
    let result = 0;
    appUser?.foundLocations.map((location) => {
      const marker = currentMarkers?.find(
        (marker) => marker.id.toString() == location.toString()
      );
      if (marker?.categoryId === id) {
        result++;
      }
    });
    return result;
  };

  const totalForCategory = (id: number) => {
    let result = 0;
    currentMarkers?.map((marker) => {
      if (marker.categoryId === id) {
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
        <SideFab
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          id="basic-button"
          aria-expanded={open ? "true" : undefined}
        >
          <CheckListIcon className="h-6 w-6" />
        </SideFab>
      </Tooltip>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Typography sx={{ p: 2, color: "var(--text-color)" }}>
          Progress Tracker
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {appUser ? (
          <div className="flex flex-col mb-3">
            <Button
              variant="text"
              startIcon={
                appUser?.hideFound ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              onClick={toggleHideFound}
            >
              {appUser?.hideFound ? "Show Found" : "Hide Found"}
            </Button>
            {currentGroups?.map((group) =>
              group.categories?.map(({ id }) => {
                if (totalForCategory(id) !== 0) {
                  return (
                    <Accordion key={id}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <span className="text-text text-sm p-2">
                          {getCategoryInfoById(id)?.title}
                        </span>
                        <span className="text-text text-sm p-2">
                          {totalFoundForCategory(id) + " / "}
                          {totalForCategory(id)}
                        </span>
                      </AccordionSummary>
                      {currentMarkers?.map(
                        ({ id: markerId, categoryId, title }) => {
                          if (categoryId === id)
                            return (
                              <AccordionDetails
                                key={`${id} location`}
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox
                                  checked={appUser?.foundLocations?.includes(
                                    markerId
                                  )}
                                  onChange={() => handleMarkerFound(markerId)}
                                />
                                <div className="flex items-center gap-2">
                                  <p>{title}</p>
                                </div>
                                <IconButton>
                                  <NavigationIcon
                                    sx={{
                                      width: 15,
                                      height: 15,
                                      cursor: "pointer",
                                    }}
                                    onClick={() => setTriggerMarkerId(markerId)}
                                  />
                                </IconButton>
                              </AccordionDetails>
                            );
                        }
                      )}
                    </Accordion>
                  );
                }
              })
            )}
          </div>
        ) : null}
      </Menu>
    </div>
  );
};
