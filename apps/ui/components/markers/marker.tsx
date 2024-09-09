import * as RL from "react-leaflet";
import * as L from "leaflet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  cn,
  Checkbox,
} from "@nextui-org/react";
import { useState } from "react";

export const Marker = ({
  title,
  latitude,
  longitude,
  icon,
  category,
  description,
  gameSlug,
}: any) => {
  // build div icon
  var div = document.createElement("div");
  div.className = `icon ${gameSlug} ${icon}`;

  const [markerFound, setMarkerFound] = useState(false);

  return (
    <RL.Marker
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
          <CardHeader className="flex gap-3">
            <Image
              alt="ritcher map logo"
              height={40}
              radius="sm"
              src={`/markers/${category}.png`}
              width={40}
            />
            <span className={cn(`icon ${category}`, "w-10 h-10")} />
            <div className="flex flex-col">
              <p className="text-md">{title}</p>
              <p className="text-small text-default-500">{category}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </CardBody>
          <Divider />
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
