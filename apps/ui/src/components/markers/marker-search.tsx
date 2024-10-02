import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

import { ListItemButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Map } from "leaflet";
import React, { useState } from "react";
import { useDebounceCallback } from "@/hooks/use-debounce-callback";
import { cn } from "@/lib/utils";
import { currentMarkersAtom } from "@/store/map";
import {
  highlightedMarkerIdAtom,
  searchFilterMarkerAtom,
  triggeredMarkerIdAtom,
} from "@/store/marker";

export const MarkerSearch = ({ map }: { map: Map | null }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchFilterMarker, setSearchFilterMarker] = useAtom(
    searchFilterMarkerAtom
  );
  const [showFiltered, setShowFiltered] = useState(false);
  const markers = useAtomValue(currentMarkersAtom);
  const setHighlightedMarker = useSetAtom(highlightedMarkerIdAtom);
  const setTriggeredMarkerId = useSetAtom(triggeredMarkerIdAtom);
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
            <>
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
                      <React.Fragment>
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
                        <div
                          dangerouslySetInnerHTML={{
                            __html: marker.description ?? "",
                          }}
                        />
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      )}
    </>
  );
};
