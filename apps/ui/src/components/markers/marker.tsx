import * as RL from "react-leaflet";
import * as L from "leaflet";
import Divider from "@mui/material/Divider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCopyToClipboard } from "@/hooks";
import { Link1Icon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { MarkerLocation } from "@/__generated__/graphql";
import { Button } from "../ui/button";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useMutation } from "@apollo/client";
import { ADD_TO_USER_FOUND, REMOVE_FROM_USER_FOUND } from "@/lib/constants";
import { UserRecord } from "firebase-admin/auth";
import { triggeredMarkerIdAtom } from "@/store/marker";
import { useAtom, useAtomValue } from "jotai";
import { ZoomImage } from "../zoom-image";
import { gameSlugAtom } from "@/store";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { userAtom } from "@/store/auth";
import { currentRegionAtom } from "@/store/map";

interface MarkerProps {
  marker: MarkerLocation;
  user: Pick<UserRecord, "email" | "photoURL" | "displayName"> | null;
}

export const Marker = ({ marker, user }: MarkerProps) => {
  const gameSlug = useAtomValue(gameSlugAtom);
  const router = useRouter();
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

  const [appUser, setAppUser] = useAtom(userAtom);
  const currentRegion = useAtomValue(currentRegionAtom);

  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const triggeredMarkerId = useAtomValue(triggeredMarkerIdAtom);

  useEffect(() => {
    if (triggeredMarkerId === id && markerRef) {
      markerRef.current.openPopup();
    }
  }, [id, triggeredMarkerId]);

  // eslint-disable-next-line no-unused-vars
  const [_, copy] = useCopyToClipboard();

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
    const ok = await signInWithGoogle();
    if (ok) {
      router.refresh();
    }
  };

  useEffect(() => {
    const markerId = searchParams.get("marker");
    if (markerId && id === parseInt(markerId)) {
      map.flyTo([latitude, longitude]);
      if (markerRef) {
        markerRef.current.openPopup();
      }
    }
  }, [id, latitude, longitude, map, searchParams]);

  const handleMarkerFound = () => {
    if (appUser?.email) {
      const variables = { data: { email: appUser.email, location: id } };
      let newFoundLocations = [];
      if (markerFound) {
        removeLocation({ variables });
        newFoundLocations = appUser.foundLocations.filter(
          (location) => location !== id
        );
      } else {
        addLocation({ variables });
        newFoundLocations = [...appUser.foundLocations, id];
      }
      setAppUser({ ...appUser, foundLocations: newFoundLocations });
    }
  };

  const markerFound = appUser?.foundLocations.includes(id);

  if (markerFound && appUser?.hideFound) return null;

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
        <Card className="shadow-none -mx-7 -my-4 min-w-96">
          <CardHeader>
            <div className="flex justify-between gap-4">
              <div>
                <CardTitle className="text-large">{title}</CardTitle>
                <CardDescription className="text-xs">
                  {category?.title}
                </CardDescription>
              </div>
              <div className="flex px-5">
                <Link1Icon
                  className="cursor-pointer h-5 w-5"
                  onClick={handleCopy(
                    `${process.env.NEXT_PUBLIC_BASE_URL}map/${currentRegion}?marker=${id}`
                  )}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="leading-5">
            <div className="flex flex-wrap gap-2">
              {media &&
                media?.length > 0 &&
                media.map(({ url, mimeType }) => {
                  if (mimeType === "mp4") {
                    return (
                      <video
                        key={url}
                        src={url}
                        width="750"
                        height="500"
                        controls
                      ></video>
                    );
                  }
                  return <ZoomImage src={url} key={url} />;
                })}
            </div>
            {description && (
              <div
                className="text-md"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </CardContent>
          {description ? <Divider flexItem /> : null}
          <CardFooter className="justify-center">
            <div className="flex flex-col">
              {info && (
                <div
                  className="text-xs pb-2"
                  dangerouslySetInnerHTML={{ __html: info }}
                />
              )}

              <div className="hover:bg-secondary cursor-pointer flex justify-center">
                {user?.email ? (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={markerFound}
                          onChange={handleMarkerFound}
                        />
                      }
                      label="Found"
                    />
                  </FormGroup>
                ) : (
                  <Button
                    variant="link"
                    className="uppercase"
                    onClick={handleLogin}
                  >
                    Login to track progress
                  </Button>
                )}
              </div>
            </div>
          </CardFooter>
        </Card>
      </RL.Popup>
      <RL.Tooltip>{title}</RL.Tooltip>
    </RL.Marker>
  );
};
