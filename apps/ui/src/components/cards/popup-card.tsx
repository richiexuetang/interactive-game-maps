import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import LoginIcon from "@mui/icons-material/Login";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import { cn } from "@/lib/utils";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { gameSlugAtom } from "@/store";
import { userAtom } from "@/store/auth";
import { copyLinkTriggerAtom, currentRegionAtom } from "@/store/map";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/graphql/constants";
import { useMutation } from "@apollo/client";
import Tooltip from "@mui/material/Tooltip";
import { MarkerLocation } from "@/__generated__/graphql";
import { Box, Checkbox, FormControlLabel, Modal, styled } from "@mui/material";
import Image from "next/image";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";

interface PopupCardProps {
  marker: MarkerLocation;
}

const CardContentTypography = styled(Typography)(() => ({
  color: "var(--text-color)",
}));

const StyledCard = styled(Card)(() => ({
  minWidth: 325,
}));

export const PopupCard = ({ marker }: PopupCardProps) => {
  const {
    id,
    category,
    title: markerTitle,
    media = [],
    description = "",
  } = marker;
  const [open, setOpen] = React.useState(false);
  const setCopyLinkTrigger = useSetAtom(copyLinkTriggerAtom);

  const gameSlug = useAtomValue(gameSlugAtom);
  const [appUser, setAppUser] = useAtom(userAtom);
  const currentRegion = useAtomValue(currentRegionAtom);

  const markerFound = appUser?.foundLocations.includes(id);
  const router = useRouter();

  const copy = useClipboardCopyFn();

  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const handleLogin = async () => {
    const ok = await signInWithGoogle();
    if (ok) {
      router.refresh();
    }
  };

  const handleMarkerFound = () => {
    if (appUser?.email) {
      const variables = { data: { email: appUser.email, location: id } };
      let newFoundLocations = [];
      if (markerFound) {
        removeLocation({ variables });
        newFoundLocations = appUser.foundLocations.filter(
          (location) => location !== id
        );
      } else {
        addLocation({ variables });
        newFoundLocations = [...appUser.foundLocations, id];
      }
      setAppUser({ ...appUser, foundLocations: newFoundLocations });
    }
  };

  if (!category) return null;
  const { icon, info, title } = category;

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "transparent" }}>
            <span className={cn(`${gameSlug}-icon icon ${gameSlug}_${icon}`)} />
          </Avatar>
        }
        title={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {markerTitle}
            <Tooltip title="Copy link">
              <IconButton sx={{ pl: 2 }}>
                <LinkIcon
                  sx={{ width: 15, height: 15 }}
                  onClick={() =>
                    copy(
                      `${process.env.NEXT_PUBLIC_APP_BASE_URL}map/${currentRegion?.slug}?marker=${marker.id}`
                    ).then(() => {
                      setCopyLinkTrigger(true);
                    })
                  }
                />
              </IconButton>
            </Tooltip>
          </Box>
        }
        subheader={title}
      />
      {media && media.length > 0 && (
        <>
          <CardMedia
            onClick={() => setOpen(true)}
            sx={{ cursor: "pointer" }}
            component="img"
            height="350"
            image={media[0]?.url}
            alt={title}
          />
          <Modal open={open} onClose={() => setOpen(false)}>
            <Image
              onClick={() => setOpen(false)}
              src={media[0]?.url}
              fill
              objectFit="none"
              alt={media[0]?.url}
              className="cursor-pointer"
            />
          </Modal>
        </>
      )}

      <CardContent>
        <CardContentTypography variant="body2">
          <div dangerouslySetInnerHTML={{ __html: description ?? "" }} />
        </CardContentTypography>
        {info && (
          <CardContentTypography variant="body2">
            <div
              className="text-xs mt-7 italic"
              dangerouslySetInnerHTML={{ __html: info }}
            />
          </CardContentTypography>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {appUser?.email ? (
          <FormControlLabel
            control={
              <Checkbox checked={markerFound} onChange={handleMarkerFound} />
            }
            label="Found"
          />
        ) : (
          <Tooltip title="Login">
            <IconButton aria-label="login" onClick={handleLogin}>
              <LoginIcon />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </StyledCard>
  );
};
