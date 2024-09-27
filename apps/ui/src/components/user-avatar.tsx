import { signOut } from "@/lib/firebase/auth";
import { userAtom } from "@/store/auth";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";

interface UserAvatarProps {
  imageSrc: string;
  name: string;
}

export function UserAvatar({ imageSrc, name }: UserAvatarProps) {
  const router = useRouter();
  const setAppUser = useSetAtom(userAtom);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    const isOk = await signOut();

    if (isOk) {
      setAppUser(null);
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="absolute top-2 right-2 z-[1000] flex flex-col gap-5">
      <IconButton
        onClick={handleClick}
        size="medium"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar alt={name} src={imageSrc} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
