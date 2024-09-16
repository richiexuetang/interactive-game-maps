import { CheckListIcon } from "./icons/check-list-icon";
import Fab from "@mui/material/Fab";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useAtomValue } from "jotai";
import { currentGroupsAtom } from "@/store/map";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export const ProgressTracker = () => {
  const [tracking, setTracking] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const currentGroups = useAtomValue(currentGroupsAtom);

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

  const handleChange = (e: SelectChangeEvent) => {
    if (!tracking.includes(e.target.value)) {
      setTracking((prev) => [...prev, e.target.value]);
    }
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="absolute top-36 right-2 z-[1000]">
      <Tooltip title="Progress Tracker" placement="left">
        <Fab onClick={handleClick}>
          <CheckListIcon className="h-6 w-6" />
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
        <Typography sx={{ p: 2 }}>Progress Tracker</Typography>
        <Divider />
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Track category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            label="Track category"
            onChange={handleChange}
          >
            {currentGroups?.map((group) =>
              group.categories?.map((category) => (
                <MenuItem value={category.id} key={category.id}>
                  {category.title}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Popover>
    </div>
  );
};
