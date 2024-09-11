import * as RL from "react-leaflet";
import * as L from "leaflet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Checkbox,
  Tooltip,
} from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCopyToClipboard } from "usehooks-ts";
import { Link1Icon } from "@radix-ui/react-icons";
import { toast } from "sonner";

export const Marker = ({
  title,
  latitude,
  longitude,
  icon,
  category,
  description,
  gameSlug,
  info,
  id,
}: any) => {
  const [markerFound, setMarkerFound] = useState(false);
  const [copiedText, copy] = useCopyToClipboard();

  // build div icon
  const div = document.createElement("div");
  div.className = `icon ${gameSlug} ${icon}`;

  const map = RL.useMap();
  const searchParams = useSearchParams();
  const markerRef = useRef<any>(null);

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toast.success("Copied", {
          description: "",
          action: {
            label: "Ok",
            onClick: () => console.log("Undo"),
          },
        });
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const markerId = searchParams.get("marker");
    if (markerId && id == markerId) {
      map.flyTo([latitude, longitude]);
      if (markerRef) {
        markerRef.current.openPopup();
      }
    }
  }, [searchParams]);

  return (
    <RL.Marker
      ref={markerRef}
      position={[latitude, longitude]}
      opacity={markerFound ? 0.5 : 1}
      icon={L.divIcon({
        iconSize: [33, 44],
        iconAnchor: [17, 44],
        popupAnchor: [0, -44],
        tooltipAnchor: [22, -22],
        html: div,
      })}
      zIndexOffset={100 - longitude} // so markers don't glitch out while zooming
    >
      <RL.Popup minWidth={90}>
        <Card className="max-w-[400px] shadow-none">
          <CardHeader className="py-2 px-4 flex items-start">
            <div className="flex-col">
              <p className="text-sm uppercase font-bold">{title}</p>
              <small className="text-default-500">{category}</small>
            </div>
            <div className="flex pl-5">
              <Tooltip content="Copy link">
                <Link1Icon
                  className="cursor-pointer"
                  onClick={handleCopy(
                    `http://localhost:3000/map/chapter-3?marker=${id}`
                  )}
                />
              </Tooltip>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div dangerouslySetInnerHTML={{ __html: info }} />
          </CardBody>
          <Divider className="my-2" />
          <CardFooter className="justify-center">
            <Checkbox
              isSelected={markerFound}
              onValueChange={() => setMarkerFound(!markerFound)}
            >
              Found
            </Checkbox>
          </CardFooter>
        </Card>
      </RL.Popup>
      <RL.Tooltip>{title}</RL.Tooltip>
    </RL.Marker>
  );
};
