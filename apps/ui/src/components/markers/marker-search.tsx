import { useState } from "react";
import { SearchIcon } from "../icons/search-icon";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { searchFilterMarkerAtom, triggeredMarkerIdAtom } from "@/store/marker";
import { useDebounceCallback } from "@/hooks/use-debounce-callback";
import { useMap } from "react-leaflet";
import { currentMarkersAtom, gameSlugAtom } from "@/store/map";
import React from "react";
import { Fab, List, Tooltip } from "@mui/material";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Avatar } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { MapPinIcon } from "../icons/map-pin-icon";
import { cn } from "@/lib/utils";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export const MarkerSearch = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const gameSlug = useAtomValue(gameSlugAtom);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchFilterMarker, setSearchFilterMarker] = useAtom(
    searchFilterMarkerAtom
  );
  const [showFiltered, setShowFiltered] = useState(false);
  const markers = useAtomValue(currentMarkersAtom);

  const setTriggeredMarkerId = useSetAtom(triggeredMarkerIdAtom);
  const map = useMap();
  const debounced = useDebounceCallback(setSearchFilterMarker, 500);

  const inputSearchChange = (input: string) => {
    setSearchKeyword(input);
    let filtered =
      markers?.filter((marker) =>
        marker.title.toLowerCase().includes(input.toLowerCase())
      ) ?? [];
    if (input === "") {
      filtered = [];
    }
    debounced(filtered);
  };

  return (
    <div className="absolute top-20 right-2 z-[1000]">
      <Tooltip title="Search..." placement="left">
        <Fab onClick={handleClick}>
          <SearchIcon className="h-5 w-5" />
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
        <Box padding={2}>
          <TextField
            label="Search for markers..."
            placeholder=""
            onFocus={() => setShowFiltered(true)}
            value={searchKeyword}
            onChange={(e) => inputSearchChange(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="h-5 w-5" />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
        </Box>
        {searchFilterMarker?.length > 0 && showFiltered && (
          <List>
            {searchFilterMarker.map((marker) => (
              <ListItem
                key={marker.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="navigate"
                    onClick={() => {
                      map.panTo([marker.latitude, marker.longitude]);
                      setTriggeredMarkerId(marker.id);
                      setShowFiltered(false);
                    }}
                  >
                    <MapPinIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <span
                      className={cn(
                        `${gameSlug}-icon ${gameSlug}-icon-${marker.category?.icon}`
                      )}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={marker.title}
                  secondary={marker.category?.title}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Popover>
    </div>
  );
};
