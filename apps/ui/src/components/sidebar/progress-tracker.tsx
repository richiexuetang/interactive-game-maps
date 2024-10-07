import { useMutation } from "@apollo/client";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigationIcon from "@mui/icons-material/Navigation";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import React from "react";
import { getBodyFont } from "@/lib/font";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
  TOGGLE_HIDE_FOUND,
} from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";

export const ProgressTracker = () => {
  //#region Hooks
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentMap = useMapStore((state) => state.currentMap);
  const setCurrentMap = useMapStore((state) => state.setCurrentMap);

  const [toggleUserHideFound] = useMutation(TOGGLE_HIDE_FOUND);
  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);
  const removeUser = useAuthStore((state) => state.removeUser);
  const user = useAuthStore((state) => state.user);
  const setFoundLocations = useAuthStore((state) => state.setFoundLocations);
  const toggleHide = useAuthStore((state) => state.toggleHideFound);

  //#endregion

  if (!currentMap) return null;

  const { groups, locations, gameSlug } = currentMap;
  const foundLocations = user?.foundLocations;
  const email = user?.email;

  //#region Helper Functions
  const getCategoryInfoById = (categoryId: number) =>
    groups
      ?.find((group) => group.categories?.find(({ id }) => id === categoryId))
      ?.categories?.find(({ id }) => id === categoryId);

  const totalFoundForCategory = (categoryId: number) =>
    foundLocations?.filter(
      (location) =>
        locations?.find(({ id }) => id.toString() == location.toString())
          ?.categoryId === categoryId
    ).length;

  const totalForCategory = (id: number) =>
    currentMap?.locations?.filter((marker) => marker.categoryId === id).length;
  //#endregion

  const handleMarkerFound = (markerId: number) => {
    if (email) {
      let newFoundLocations: number[] = user.foundLocations;
      const data = {
        variables: { data: { email, location: markerId } },
      };
      if (foundLocations?.includes(markerId)) {
        removeLocation(data);
        newFoundLocations.filter((location) => location !== markerId);
      } else {
        addLocation(data);
        newFoundLocations.push(markerId);
      }
      setFoundLocations(newFoundLocations);
    }
  };

  const toggleHideFound = () => {
    if (user) {
      const hide = !user.hideFound;

      toggleUserHideFound({
        variables: { data: { email, hide } },
      });
      toggleHide(hide);
    }
  };

  const signOutUser = async () => {
    removeUser();
    router.back();
  };

  return (
    <div className={cn("absolute top-16 right-2 z-[1000] flex flex-col gap-5")}>
      <Tooltip title="Progress Tracker" placement="left">
        <Fab
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setAnchorEl(e.currentTarget)
          }
          aria-controls={open ? "progress-tracker-menu" : undefined}
          aria-haspopup="true"
          id="progress-tracker-button"
          aria-expanded={open ? "true" : undefined}
        >
          <ChecklistIcon />
        </Fab>
      </Tooltip>

      <Menu
        id="progress-tracker-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "progress-tracker-button",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            p: 1,
            textTransform: "uppercase",
            textAlign: "center",
            wordSpacing: "0.2rem",
          }}
        >
          Progress Tracker
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {user ? (
          <Box display="flex" flexDirection="column">
            <Button
              variant="text"
              sx={{ color: "var(--accent-color)" }}
              startIcon={
                user?.hideFound ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              onClick={toggleHideFound}
            >
              {user?.hideFound ? "Show Found" : "Hide Found"}
            </Button>
            <Button onClick={signOutUser}>Log out</Button>
            {groups?.map(({ categories }) =>
              categories?.map(({ id, icon }) => {
                if (totalForCategory(id) !== 0) {
                  return (
                    <Accordion key={id}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <span
                          className={`icon-${icon} ${getBodyFont(gameSlug)}`}
                        />
                        <span className="text-text text-xs p-2">
                          {getCategoryInfoById(id)?.title}
                        </span>
                        <span className="text-text text-xs p-2">
                          {totalFoundForCategory(id) + " / "}
                          {totalForCategory(id)}
                        </span>
                      </AccordionSummary>
                      {locations?.map(({ id: markerId, categoryId, title }) => {
                        if (categoryId === id)
                          return (
                            <AccordionDetails
                              key={`${markerId} location`}
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Checkbox
                                checked={user?.foundLocations?.includes(
                                  markerId
                                )}
                                size="small"
                                onChange={() => handleMarkerFound(markerId)}
                              />
                              <span className="items-center text-xs">
                                {title}
                              </span>
                              <IconButton>
                                <NavigationIcon
                                  sx={{
                                    width: 15,
                                    height: 15,
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    setCurrentMap({
                                      ...currentMap,
                                      triggeredMarkerPopup: markerId,
                                    })
                                  }
                                />
                              </IconButton>
                            </AccordionDetails>
                          );
                      })}
                    </Accordion>
                  );
                }
              })
            )}
          </Box>
        ) : null}
      </Menu>
    </div>
  );
};
