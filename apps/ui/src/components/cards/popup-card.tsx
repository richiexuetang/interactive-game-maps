import LinkIcon from "@mui/icons-material/Link";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useParams } from "next/navigation";
import * as React from "react";
import showdown from "showdown";
import { Location } from "@/generated/graphql";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { MediaView } from "./media-view";
import { MarkerFoundCheckbox } from "../fields/marker-found-checkbox";

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

  const converter = new showdown.Converter();

  //#region Hooks
  const params = useParams();

  const auth = useAuthStore((state) => state.auth);
  const [open, setOpen] = React.useState(false);
  const copy = useClipboardCopyFn();
  //#endregion

  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
  };

  if (!category) return null;
  const { icon, info, title } = category;

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
            <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
              {markerTitle}
            </Typography>
            <Tooltip title={open ? "Link Copied" : "Copy link"}>
              <IconButton sx={{ ml: 2 }}>
                <LinkIcon
                  sx={{ width: 18, height: 18 }}
                  onClick={() =>
                    copy(
                      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/game/${params.gameSlug}/map/${params?.mapSlug}?marker=${marker.id}`
                    ).then(() => {
                      setOpen(true);

                      setTimeout(() => {
                        setOpen(false);
                      }, 3000);
                    })
                  }
                />
              </IconButton>
            </Tooltip>
          </Box>
        }
        subheader={<Typography variant="caption">{title}</Typography>}
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
              dangerouslySetInnerHTML={{ __html: converter.makeHtml(info) }}
            />
          </CardContent>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {auth?.email ? (
          <FormControlLabel
            control={<MarkerFoundCheckbox markerId={id} />}
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
