import * as RL from "react-leaflet";
import * as L from "leaflet";
import { Divider } from "@nextui-org/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCopyToClipboard } from "usehooks-ts";
import { Link1Icon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Media } from "@/__generated__/graphql";
import { useAtomValue } from "jotai";
import { userAtom } from "@/store/auth";
import { Button } from "../ui/button";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

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
  media,
}: any) => {
  const appUser = useAtomValue(userAtom);

  const [markerFound, setMarkerFound] = useState(false);
  const [copiedText, copy] = useCopyToClipboard();

  const router = useRouter();

  // build div icon
  const div = document.createElement("div");
  div.className = `icon ${gameSlug} ${icon}`;

  const map = RL.useMap();
  const searchParams = useSearchParams();
  const markerRef = useRef<any>(null);

  const handleCopy = (text: string) => () => {
    copy(text).then(() => {
      toast.success("Copied", {
        action: {
          label: "OK",
          onClick: () => {},
        },
      });
    });
  };

  const handleLogin = async () => {
    const isOk = await signInWithGoogle();

    if (isOk) router.back();
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

  const handleMarkerFound = () => {
    // if (appUser?.email) {
    //   if (markerFound) {
    //     await addToUserFound({ email: appUser?.email, location: id });
    //   } else {
    //     await removeFromUserFound({ email: appUser?.email, location: id });
    //   }
    // }

    setMarkerFound(!markerFound);
  };
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
      <RL.Popup>
        <Card className="shadow-none -mx-7 -my-4">
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription className="text-xs">
                  {category}
                </CardDescription>
              </div>
              <div className="flex px-5">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link1Icon
                        className="cursor-pointer h-5 w-5"
                        onClick={handleCopy(
                          `http://localhost:3000/map/chapter-3?marker=${id}`
                        )}
                      />
                    </TooltipTrigger>
                    <TooltipContent>Copy link</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardHeader>
          {description ? <Divider /> : null}
          <CardContent className="leading-5">
            {media.length > 0 &&
              media.map((m: Media) => (
                <Image
                  key={m.url}
                  src={m.url!}
                  alt={m.url!}
                  width={300}
                  height={300}
                  className="py-3"
                />
              ))}
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div dangerouslySetInnerHTML={{ __html: info }} />
          </CardContent>
          {description ? <Divider /> : null}
          <CardFooter
            className="py-2 justify-center hover:bg-secondary cursor-pointer"
            onClick={handleMarkerFound}
          >
            {appUser?.email ? (
              <>
                <Checkbox checked={markerFound} />
                <div className="ml-2 space-y-1 leading-none">
                  <label>Found</label>
                </div>
              </>
            ) : (
              <Button
                variant="link"
                className="uppercase"
                onClick={handleLogin}
              >
                Login to track found locations
              </Button>
            )}
          </CardFooter>
        </Card>
      </RL.Popup>
      <RL.Tooltip>{title}</RL.Tooltip>
    </RL.Marker>
  );
};
