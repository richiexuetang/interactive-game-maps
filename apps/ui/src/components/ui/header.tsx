import GitHubIcon from "@mui/icons-material/GitHub";
import LoginIcon from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box, { BoxProps } from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthStore } from "@/store";

export const AppHeader = ({
  trigger,
  ...props
}: { trigger?: React.ReactNode } & BoxProps) => {
  const user = useAuthStore((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const removeUser = useAuthStore((state) => state.removeUser);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOutUser = () => {
    removeUser();
    router.refresh();
  };

  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", sm: "flex-start" },
        gap: 1,
        px: 2,
        flex: 1,
        ...props.sx,
      }}
    >
      {trigger}
      <Image
        src="/images/map-logo.png"
        alt="logo without text"
        width="0"
        height="0"
        sizes="100vw"
        className="w-14 h-6"
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mx: 2,
          fontFamily: "monospace",
          fontWeight: 400,
          letterSpacing: ".25rem",
          color: "inherit",
          textDecoration: "none",
          flexGrow: 1,
        }}
      >
        Ritcher Map
      </Typography>
      <Box
        ml="auto"
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: { xs: 2, md: 3 },
        }}
      >
        <GitHubIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://github.com/richiexuetang/interactive-game-maps",
              "_blank"
            )
          }
        />
      </Box>

      {user ? (
        <IconButton
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              cursor: "pointer",
              width: 32,
              height: 32,
            }}
            src={user?.picture}
          />
        </IconButton>
      ) : (
        <IconButton
          onClick={() =>
            (window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`)
          }
        >
          <LoginIcon />
        </IconButton>
      )}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => router.push("/account")}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={signOutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};
