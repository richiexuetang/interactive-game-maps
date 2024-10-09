import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { cn } from "@/lib/utils";

interface SidebarCloseProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarClosePaper = styled(Paper)(() => ({
  top: "45px",
  height: "65px",
  width: "35px",
  zIndex: 500,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  borderRadius: 0,
}));

export const SidebarClose = ({ showMenu, setShowMenu }: SidebarCloseProps) => {
  const ChevronIcon = showMenu ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <SidebarClosePaper className={cn(showMenu && "left-[425px]")}>
      <IconButton onClick={() => setShowMenu((prev) => !prev)} size="small">
        <ChevronIcon />
      </IconButton>
    </SidebarClosePaper>
  );
};
