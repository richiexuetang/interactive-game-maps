import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useState } from "react";
import { useDebounceCallback } from "@/hooks";
import { cn } from "@/lib/utils";
import {
  currentMapAtom,
  highlightedMarkerAtom,
  searchFilterMarkerAtom,
  triggeredMarkerAtom,
} from "@/store";

export const MarkerSearch = ({ map }: any) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const setHighlightedMarker = useSetAtom(highlightedMarkerAtom);
  const [searchFilterMarker, setSearchFilterMarker] = useAtom(
    searchFilterMarkerAtom
  );
  const setTriggeredMarkerId = useSetAtom(triggeredMarkerAtom);
  const [showFiltered, setShowFiltered] = useState(false);
  const currentMap = useAtomValue(currentMapAtom);
  const debounced = useDebounceCallback(setSearchFilterMarker, 500);

  const inputSearchChange = (input: string) => {
    setSearchKeyword(input);
    let filtered =
      currentMap?.locations?.filter((marker) =>
        marker.title.toLowerCase().includes(input.toLowerCase())
      ) ?? [];
    if (input === "") {
      filtered = [];
    }
    debounced(filtered);
  };

  return (
    <>
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
                      <span className={cn(`icon-${marker.category?.icon}`)} />
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
    </>
  );
};
