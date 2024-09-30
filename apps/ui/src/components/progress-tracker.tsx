import { useMutation } from "@apollo/client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigationIcon from "@mui/icons-material/Navigation";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { CheckListIcon } from "./icons/check-list-icon";
import { signOut } from "@/lib/firebase/auth";
import { getBodyFont, getFontClassName } from "@/lib/font";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
  TOGGLE_HIDE_FOUND,
} from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";
import { userAtom } from "@/store/auth";
import {
  currentGroupsAtom,
  currentMarkersAtom,
  gameSlugAtom,
} from "@/store/map";
import { triggeredMarkerIdAtom } from "@/store/marker";

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
  const gameSlug = useAtomValue(gameSlugAtom);
  const router = useRouter();
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

  const handleSignOut = async () => {
    const isOk = await signOut();

    if (isOk) {
      setAppUser(null);
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className={cn("absolute top-36 right-2 z-[1000] flex flex-col gap-5")}>
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
        <h1
          className={cn(
            gameSlug,
            "text-titleFont text-center p-2 uppercase tracking-widest",
            getFontClassName(gameSlug)
          )}
        >
          Progress Tracker
        </h1>
        <Divider sx={{ mb: 2 }} />
        {appUser ? (
          <div className="flex flex-col mb-3">
            <Button
              variant="text"
              sx={{ p: 2, color: "var(--accent-color)" }}
              startIcon={
                appUser?.hideFound ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              onClick={toggleHideFound}
            >
              {appUser?.hideFound ? "Show Found" : "Hide Found"}
            </Button>
            <Button onClick={handleSignOut}>Log out</Button>
            {currentGroups?.map((group) =>
              group.categories?.map(({ id, icon }) => {
                if (totalForCategory(id) !== 0) {
                  return (
                    <Accordion key={id}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <span
                          className={`${gameSlug}-icon-${icon} ${getBodyFont(
                            gameSlug
                          )}`}
                        />
                        <span className="text-text text-xs p-2">
                          {getCategoryInfoById(id)?.title}
                        </span>
                        <span className="text-text text-xs p-2">
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
                                  size="small"
                                  onChange={() => handleMarkerFound(markerId)}
                                />
                                <span className="flex items-center gap-2 text-xs">
                                  {title}
                                </span>
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
