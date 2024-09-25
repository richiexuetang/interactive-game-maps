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
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LinkIcon from "@mui/icons-material/Link";
import { cn } from "@/lib/utils";
import { useAtom, useAtomValue } from "jotai";
import { gameSlugAtom } from "@/store";
import { useCopyToClipboard } from "@/hooks";
import { userAtom } from "@/store/auth";
import { currentRegionAtom } from "@/store/map";
import { toast } from "sonner";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { ADD_TO_USER_FOUND, REMOVE_FROM_USER_FOUND } from "@/lib/constants";
import { useMutation } from "@apollo/client";
import Tooltip from "@mui/material/Tooltip";
import { MarkerLocation } from "@/__generated__/graphql";
import { Modal, styled } from "@mui/material";
import Image from "next/image";

interface PopupCardProps {
  marker: MarkerLocation;
}

const CardContentTypography = styled(Typography)(() => ({
  fontFamily: "var(--body-font-family)",
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

  const gameSlug = useAtomValue(gameSlugAtom);
  const [appUser, setAppUser] = useAtom(userAtom);
  const currentRegion = useAtomValue(currentRegionAtom);

  const markerFound = appUser?.foundLocations.includes(id);
  const router = useRouter();

  const [copiedText, copy] = useCopyToClipboard();

  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const handleLogin = async () => {
    const ok = await signInWithGoogle();
    if (ok) {
      router.refresh();
    }
  };

  const handleCopy = (text: string) => () => {
    copy(text).then(() => {
      toast.success(`Copied ${copiedText}`, {
        action: {
          label: "OK",
          onClick: () => {},
        },
      });
    });
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
          <Avatar>
            <span className={cn(`${gameSlug}-icon ${gameSlug}-icon-${icon}`)} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <LinkIcon
              onClick={handleCopy(
                `${process.env.NEXT_PUBLIC_APP_BASE_URL}map/${
                  currentRegion?.slug
                }?marker=${markerTitle.toLowerCase().replaceAll(" ", "_")}`
              )}
            />
          </IconButton>
        }
        title={markerTitle}
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
      <CardActions disableSpacing>
        {appUser?.email ? (
          <>
            <Tooltip title="Add to favorite">
              <IconButton onClick={() => console.log("")}>
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Found">
              <IconButton onClick={handleMarkerFound}>
                {markerFound ? (
                  <CheckCircleIcon />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
              </IconButton>
            </Tooltip>
          </>
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
