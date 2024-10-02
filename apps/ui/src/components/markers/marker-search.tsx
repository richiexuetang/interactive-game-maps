import { Fab, List, Tooltip } from "@mui/material";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { useState } from "react";
import { useMap } from "react-leaflet";
import { MapPinIcon } from "../icons/map-pin-icon";
import { SearchIcon } from "../icons/search-icon";
import { useDebounceCallback } from "@/hooks/use-debounce-callback";
import { cn } from "@/lib/utils";
import { currentMarkersAtom } from "@/store/map";
import { searchFilterMarkerAtom, triggeredMarkerIdAtom } from "@/store/marker";

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
                      map.setView([marker.latitude, marker.longitude], 13);
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
                    <span className={cn(`${marker.category?.icon}`)} />
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
