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
import { useAtomValue } from "jotai";
import { useAtom, useSetAtom } from "jotai";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import * as React from "react";
import { MediaView } from "./media-view";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";
import { signInWithGoogle } from "@/lib/firebase/auth";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";
import { currentMapAtom, markersRefAtom, openPopupAtom } from "@/store";
import { copySnackbarAtom, userAtom } from "@/store";

const CardContentTypography = styled(Typography)(() => ({
  color: "var(--text-color)",
}));

const StyledCard = styled(Card)(() => ({
  minWidth: 325,
}));

export const CustomPopup = () => {
  const markersRef = useAtomValue(markersRefAtom) as any;
  const openPopup = useAtomValue(openPopupAtom);
  const currentMap = useAtomValue(currentMapAtom);
  const [marker, setMarker] = React.useState<any>(null);
  const setCopyLinkTrigger = useSetAtom(copySnackbarAtom);
  const params = useParams();
  const router = useRouter();

  const copy = useClipboardCopyFn();

  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const [currentUser, setCurrentUser] = useAtom(userAtom);

  useEffect(() => {
    if (openPopup && markersRef[openPopup]) {
      setMarker(
        currentMap?.locations?.find((loc) => loc.id === markersRef[openPopup])
      );
    }
  }, [currentMap?.locations, markersRef, openPopup]);

  if (!marker) return null;
  const {
    id,
    category,
    title: markerTitle,
    media = [],
    description = "",
  } = marker;

  const markerFound = currentUser?.foundLocations.includes(id);

  const handleLogin = async () => {
    const ok = await signInWithGoogle();
    if (ok) {
      router.refresh();
    }
  };

  const handleMarkerFound = () => {
    if (currentUser?.email) {
      const variables = { data: { email: currentUser.email, location: id } };
      let newFoundLocations = [];
      if (markerFound) {
        removeLocation({ variables });
        newFoundLocations = currentUser.foundLocations.filter(
          (location) => location !== id
        );
      } else {
        addLocation({ variables });
        newFoundLocations = [...currentUser.foundLocations, id];
      }
      setCurrentUser({ ...currentUser, foundLocations: newFoundLocations });
    }
  };

  if (!category) return null;
  const { icon, info, title } = category;

  if (marker) {
    return (
      <div className="absolute right-0 bottom-0 bg-white  z-[99999999]">
        <StyledCard>
          <CardHeader
            avatar={
              <Avatar>
                <span className={cn(`icon-${icon}`)} />
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
                      sx={{ width: 18, height: 18 }}
                      onClick={() =>
                        copy(
                          `${process.env.NEXT_PUBLIC_APP_BASE_URL}/map/${params?.slug}?marker=${marker.id}`
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
            {id}
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            {currentUser?.email ? (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={markerFound}
                    onChange={handleMarkerFound}
                  />
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
      </div>
    );
  }
  return null;
};
