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
import { MarkerLocation } from "@/__generated__/graphql";
import { Button } from "../ui/button";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@apollo/client";
import {
  ADD_TO_USER_FOUND,
  GET_APP_USER,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/constants";
import { UserRecord } from "firebase-admin/auth";
import { hideFoundAtom } from "@/store/marker";
import { useAtomValue } from "jotai";

interface MarkerProps {
  gameSlug: string;
  marker: MarkerLocation;
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
}

export const Marker = ({ gameSlug, marker, user }: MarkerProps) => {
  const {
    id,
    title,
    media = [],
    latitude,
    longitude,
    category,
    description,
  } = marker;

  const { icon, info } = category!;

  const { data: userData } = useQuery(GET_APP_USER, {
    variables: { email: user?.email },
  });
  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const hideFound = useAtomValue(hideFoundAtom);
  const [markerFound, setMarkerFound] = useState(
    userData?.foundLocations?.includes(id)
  );
  const [_, copy] = useCopyToClipboard();

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
    await signInWithGoogle();
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

  useEffect(() => {
    if (userData?.getUser.foundLocations) {
      setMarkerFound(userData.getUser.foundLocations?.includes(parseInt(id)));
    }
  }, [userData]);

  const handleMarkerFound = () => {
    if (user?.email) {
      if (markerFound) {
        removeLocation({
          variables: { data: { email: user.email, location: parseInt(id) } },
        });
      } else {
        addLocation({
          variables: { data: { email: user.email, location: parseInt(id) } },
        });
      }
    }

    setMarkerFound(!markerFound);
  };

  if (markerFound && hideFound) return null;

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
                  {category?.title}
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
            {media &&
              media?.length > 0 &&
              media.map((m) => (
                <Image
                  key={m.url}
                  src={m.url!}
                  alt={m.url!}
                  width={300}
                  height={300}
                  className="py-3"
                />
              ))}
            {description && (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
            {info && <div dangerouslySetInnerHTML={{ __html: info }} />}
          </CardContent>
          {description ? <Divider /> : null}
          <CardFooter
            className="py-2 justify-center hover:bg-secondary cursor-pointer"
            onClick={handleMarkerFound}
          >
            {user?.email ? (
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
