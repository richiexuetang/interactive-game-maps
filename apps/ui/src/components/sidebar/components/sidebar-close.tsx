import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { cn } from "@/lib/utils";

interface SidebarCloseProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarClosePaper = styled(Paper)(() => ({
  top: "80px",
  height: "40px",
  zIndex: 499,
  position: "absolute",
}));

export const SidebarClose = ({ showMenu, setShowMenu }: SidebarCloseProps) => {
  const ChevronIcon = showMenu ? ChevronLeftIcon : ChevronRightIcon;
  const chevronText = showMenu ? "Collapse" : "Expand";

  return (
    <SidebarClosePaper
      className={cn(showMenu && "left-[425px]", "!bg-sidebarBackground")}
    >
      <Tooltip title={chevronText}>
        <IconButton onClick={() => setShowMenu((prev) => !prev)}>
          <ChevronIcon />
        </IconButton>
      </Tooltip>
    </SidebarClosePaper>
  );
};
