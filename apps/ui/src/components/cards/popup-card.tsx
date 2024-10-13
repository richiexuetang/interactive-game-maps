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
import Tooltip from "@mui/material/Tooltip";
import { useParams } from "next/navigation";
import * as React from "react";
import { MediaView } from "./media-view";
import { Location } from "@/__generated__/graphql";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/graphql/constants";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";

interface PopupCardProps {
  marker: Location;
}

export const PopupCard = ({ marker }: PopupCardProps) => {
  const {
    id,
    category,
    title: markerTitle,
    media = [],
    description = "",
  } = marker;

  //#region Hooks
  const params = useParams();

  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const setCurrentMap = useMapStore((state) => state.setCurrentMap);
  const currentMap = useMapStore((state) => state.currentMap);

  const copy = useClipboardCopyFn();

  const [addLocation, { data }] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation, { data: removeData }] = useMutation(
    REMOVE_FROM_USER_FOUND
  );
  //#endregion

  //#region Lifecycle Hooks
  React.useEffect(() => {
    if (!data || !user) return;

    setUser({
      ...user!,
      foundMarkers: data.addFoundLocation.foundMarkers ?? [],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  React.useEffect(() => {
    if (!removeData || !user) return;

    setUser({
      ...user!,
      foundMarkers: removeData.removeFoundLocation.foundMarkers ?? [],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeData]);
  //#endregion

  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
  };

  const handleMarkerFound = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) return;

    const { email } = user;
    const variables = { data: { email, location: id } };
    if (e.target.checked) {
      addLocation({ variables });
    } else {
      removeLocation({ variables });
    }
  };

  if (!category) return null;
  const { icon, info, title } = category;
  const markerFound = user?.foundMarkers?.map((m) => m.id).includes(id);

  return (
    <Card sx={{ minWidth: 325 }}>
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
              <IconButton sx={{ ml: 2 }}>
                <LinkIcon
                  sx={{ width: 18, height: 18 }}
                  onClick={() =>
                    copy(
                      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/game/${params.gameSlug}/map/${params?.mapSlug}?marker=${marker.id}`
                    ).then(() => {
                      setCurrentMap({ ...currentMap!, copySnackbar: true });
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
          <CardContent
            sx={{
              p: "0 !important",
              color: "var(--text-color)",
              fontSize: "0.875rem",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </CardContent>
        )}

        {info && (
          <CardContent sx={{ p: "0 !important", color: "var(--text-color)" }}>
            <div
              className="text-xs mt-7 italic"
              dangerouslySetInnerHTML={{ __html: info }}
            />
          </CardContent>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {user?.email ? (
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
    </Card>
  );
};
