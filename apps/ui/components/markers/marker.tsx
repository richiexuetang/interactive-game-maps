import * as RL from "react-leaflet";
import * as L from "leaflet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export const Marker = ({
  title,
  latitude,
  longitude,
  icon,
  category,
  description,
}: any) => {
  var div = document.createElement("div");
  div.className = `icon ${icon}`;

  return (
    <RL.Marker
      position={[latitude, longitude]}
      icon={L.divIcon({
        iconSize: [33, 44],
        iconAnchor: [17, 44],
        popupAnchor: [0, -44],
        tooltipAnchor: [22, -22],
        html: div,
      })}
    >
      <RL.Popup minWidth={90}>
        <Card className="max-w-[400px] shadow-none">
          <CardHeader className="flex gap-3">
            <Image
              alt="ritcher map logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{title}</p>
              <p className="text-small text-default-500">{category}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/richiexuetang"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </RL.Popup>
      <RL.Tooltip>{title}</RL.Tooltip>
    </RL.Marker>
  );
};
