import Alert from "@mui/material/Alert";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useAtom } from "jotai";
import { useParams } from "next/navigation";
import { SyntheticEvent } from "react";
import { useMapEvents } from "react-leaflet";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { copySnackbarAtom } from "@/store";

/**
 * Displays a snackbar notification when a user copies a link from popup or context menu.
 *
 * @component
 * @returns {React.ReactElement}
 */
export const CopyLinkNotifier = () => {
  const [openSnackbar, setOpenSnackbar] = useAtom(copySnackbarAtom);
  const params = useParams();

  const [text, copy] = useCopyToClipboard();

  const mapEvents = useMapEvents({
    contextmenu: () => {
      const center = mapEvents.getCenter();
      const url = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/map/${
        params.slug
      }?lat=${center.lat}&lng=${center.lng}&zoom=${mapEvents.getZoom()}`;
      copy(url).then(() => {});
    },
  });

  const handleSnackbarClose = (
    _?: Event | SyntheticEvent<any, Event>,
    reason?: SnackbarCloseReason
  ) => {
    setOpenSnackbar(reason === "clickaway" ? openSnackbar : false);
  };

  return (
    <Snackbar
      open={openSnackbar ?? false}
      autoHideDuration={5000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity="success"
        onClose={handleSnackbarClose}
        sx={{ width: "100%" }}
      >
        Link copied to clipboard!
      </Alert>
    </Snackbar>
  );
};
