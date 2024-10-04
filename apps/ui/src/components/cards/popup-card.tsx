import { useMutation } from "@apollo/client";
import LinkIcon from "@mui/icons-material/Link";
import LoginIcon from "@mui/icons-material/Login";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import * as React from "react";
import { MediaView } from "./media-view";
import { Location } from "@/__generated__/graphql";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";
import { signInWithGoogle } from "@/lib/firebase/auth";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";
import { copySnackbarAtom, currentMapAtom, userAtom } from "@/store";

interface PopupCardProps {
  marker: Location;
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
  const setCopyLinkTrigger = useSetAtom(copySnackbarAtom);

  const [appUser, setAppUser] = useAtom(userAtom);
  const currentRegion = useAtomValue(currentMapAtom);

  const markerFound = appUser?.foundLocations?.includes(id);
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
      const variables = { email: appUser.email, location: id };
      let newFoundLocations = [];
      if (markerFound) {
        removeLocation({ variables });
        newFoundLocations = appUser.foundLocations?.filter(
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
            <span className={cn(`icon ${icon}`)} />
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
                      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/map/${currentRegion?.slug}?marker=${marker.id}`
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
      {media && media.length > 0 && <MediaView media={media} />}

      <CardContent>
        {description && (
          // @ts-ignore
          <CardContentTypography variant="body2" component="div">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </CardContentTypography>
        )}

        {info && (
          // @ts-ignore
          <CardContentTypography variant="body2" component="div">
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
