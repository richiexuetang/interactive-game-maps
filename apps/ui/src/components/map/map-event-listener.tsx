import { useMapEvents } from "react-leaflet";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";

export const MapEventListener = ({ regionSlug }: any) => {
  const copy = useClipboardCopyFn();

  const mapEvents = useMapEvents({
    contextmenu: () => {
      const center = mapEvents.getCenter();
      const url = `${
        process.env.NEXT_PUBLIC_APP_BASE_URL
      }map/${regionSlug}?lat=${center.lat}&lng=${
        center.lng
      }&zoom=${mapEvents.getZoom()}`;
      copy(url).then(() => {});
    },
  });

  return null;
};
