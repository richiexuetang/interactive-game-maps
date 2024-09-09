import * as RL from "react-leaflet";
import * as L from "leaflet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
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
  info,
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
          <CardHeader className="py-2 px-4 flex-col items-start">
            <p className="text-sm uppercase font-bold">{title}</p>
            <small className="text-default-500">{category}</small>
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
