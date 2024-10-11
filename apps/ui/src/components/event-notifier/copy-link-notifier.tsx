import Alert from "@mui/material/Alert";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useParams } from "next/navigation";
import { SyntheticEvent } from "react";
import { useMapEvents } from "react-leaflet";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";
import { useMapStore } from "@/store/map";

/**
 * Displays a snackbar notification when a user copies a link from popup or context menu.
 *
 * @component
 * @returns {React.ReactElement}
 */
export const CopyLinkNotifier = () => {
  const currentMap = useMapStore((state) => state.currentMap);
  const setCurrentMap = useMapStore((state) => state.setCurrentMap);
  const params = useParams();

  const copy = useClipboardCopyFn();

  const mapEvents = useMapEvents({
    contextmenu: () => {
      const center = mapEvents.getCenter();
      const url = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/game/${
        params.gameSlug
      }/map/${params.mapSlug}?lat=${center.lat}&lng=${
        center.lng
      }&zoom=${mapEvents.getZoom()}`;
      copy(url).then(() => {});
    },
  });

  const handleSnackbarClose = (
    _?: Event | SyntheticEvent<any, Event>,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      setCurrentMap({
        ...currentMap!,
        copySnackbar: !currentMap?.copySnackbar,
      });
    }
  };

  return (
    <Snackbar
      open={currentMap?.copySnackbar! ?? false}
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
