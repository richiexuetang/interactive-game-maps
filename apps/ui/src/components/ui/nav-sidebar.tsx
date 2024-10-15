import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import React from "react";
import { Circle } from "../mockup-shape";
import { randomBetween } from "../mockup-utils";

export const IconListItem = ({
  icon,
  children,
}: {
  icon: React.ReactElement;
  children: any;
}) => (
  <ListItem>
    <ListItemIcon sx={{ cursor: "pointer" }}>{icon}</ListItemIcon>
    {children}
  </ListItem>
);

export const NavSidebarMockup = () => {
  return (
    <>
      <List>
        <IconListItem icon={<HomeIcon />}>
          <ListItemText
            primary={
              <Circle
                sx={{
                  height: 16,
                  width: randomBetween(56, 136),
                  borderRadius: 1,
                }}
              />
            }
            sx={{
              "@container (max-width: 254px)": {
                width: 0,
                overflow: "hidden",
              },
            }}
          />
        </IconListItem>
      </List>
      <Divider />
      <List>
        <IconListItem icon={<SearchIcon />}>
          <ListItemText
            primary={
              <TextField label="Search for maps..." variant="outlined" />
            }
            sx={{
              "@container (max-width: 254px)": {
                width: 0,
                overflow: "hidden",
              },
            }}
          />
        </IconListItem>
      </List>
      <Divider />
      <List>
        <IconListItem icon={<SettingsIcon />}>
          <ListItemText
            primary={
              <Circle
                sx={{
                  height: 16,
                  width: randomBetween(56, 136),
                  borderRadius: 1,
                }}
              />
            }
            sx={{
              "@container (max-width: 254px)": {
                width: 0,
                overflow: "hidden",
              },
            }}
          />
        </IconListItem>
      </List>
    </>
  );
};
