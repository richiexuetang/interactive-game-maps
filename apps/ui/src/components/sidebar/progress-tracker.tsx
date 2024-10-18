import ChecklistIcon from "@mui/icons-material/Checklist";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigationIcon from "@mui/icons-material/Navigation";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import React from "react";
import { getBodyFont } from "@/lib/ui/font";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";
import { MarkerFoundCheckbox } from "../fields/marker-found-checkbox";

export const ProgressTracker = () => {
  //#region Hooks
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // zustand
  const currentMap = useMapStore((state) => state.currentMap);
  const user = useAuthStore((state) => state.user);
  const setCurrentMap = useMapStore((state) => state.setCurrentMap);
  const removeUser = useAuthStore((state) => state.removeUser);
  //#endregion

  const open = Boolean(anchorEl);

  if (!currentMap) return null;

  const { groups, locations, gameSlug } = currentMap;
  const foundMarkers = user?.foundMarkers;

  //#region Helper Functions
  const getCategoryInfoById = (categoryId: number) =>
    groups
      ?.find((group: any) =>
        group.categories?.find(({ id }: any) => id === categoryId)
      )
      ?.categories?.find(({ id }: any) => id === categoryId);

  const totalFoundForCategory = (categoryId: number) =>
    foundMarkers?.filter(
      (location) =>
        locations?.find(({ id }) => id == location.id)?.categoryId ===
        categoryId
    ).length;

  const totalForCategory = (id: number) =>
    currentMap?.locations?.filter((marker) => marker.categoryId === id).length;
  //#endregion

  const signOutUser = () => {
    removeUser();
    router.refresh();
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
        <h6 className="p-1 my-2 uppercase text-center">Progress Tracker</h6>

        <Divider />

        {user ? (
          <Box display="flex" flexDirection="column">
            <Button onClick={signOutUser}>Log out</Button>
            {groups?.map(({ categories }: any) =>
              categories?.map(({ id, icon }: any) => {
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
                              <MarkerFoundCheckbox markerId={markerId} />
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
