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
import React, { useState } from "react";
import { useDebounceCallback } from "@/hooks";
import { cn } from "@/lib/utils";
import { useMapStore } from "@/store/map";

export const MarkerSearch = ({ map }: any) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const setCurrentMap = useMapStore((state) => state.setCurrentMap);
  const currentMap = useMapStore((state) => state.currentMap);
  const [showFiltered, setShowFiltered] = useState(false);
  const debounced = useDebounceCallback(setCurrentMap, 500);

  const inputSearchChange = (input: string) => {
    setSearchKeyword(input);
    let filtered =
      currentMap?.locations?.filter((marker) =>
        marker.title.toLowerCase().includes(input.toLowerCase())
      ) ?? [];
    if (input === "") {
      filtered = [];
    }
    debounced({ ...currentMap!, searchFilterMarkers: filtered });
  };

  return (
    <>
      <TextField
        fullWidth
        label="Search for markers..."
        variant="outlined"
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
                      setCurrentMap({
                        ...currentMap!,
                        searchFilterMarkers: [],
                      });
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
      {currentMap &&
        currentMap.searchFilterMarkers.length > 0 &&
        showFiltered && (
          <List>
            {currentMap?.searchFilterMarkers.map((marker) => (
              <React.Fragment key={marker.id}>
                <ListItem
                  onPointerEnter={() => {
                    setCurrentMap({
                      ...currentMap!,
                      highlightMarkerId: marker.id,
                    });
                  }}
                  onPointerLeave={() =>
                    setCurrentMap({
                      ...currentMap!,
                      highlightMarkerId: null,
                    })
                  }
                  alignItems="flex-start"
                  onClick={() => {
                    map?.setView([marker.latitude, marker.longitude], 13);
                    setCurrentMap({
                      ...currentMap!,
                      triggeredMarkerPopup: marker.id,
                    });
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
