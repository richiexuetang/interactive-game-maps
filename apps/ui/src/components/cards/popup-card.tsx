import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import LoginIcon from "@mui/icons-material/Login";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LinkIcon from "@mui/icons-material/Link";
import { cn } from "@/lib/utils";
import { useAtom, useAtomValue } from "jotai";
import { gameSlugAtom } from "@/store";
import { useCopyToClipboard } from "@/hooks";
import { userAtom } from "@/store/auth";
import { currentRegionAtom } from "@/store/map";
import { toast } from "sonner";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { ADD_TO_USER_FOUND, REMOVE_FROM_USER_FOUND } from "@/lib/constants";
import { useMutation } from "@apollo/client";

export const PopupCard = ({
  media,
  category,
  title,
  description,
  info,
  icon,
  markerId,
}: any) => {
  const gameSlug = useAtomValue(gameSlugAtom);
  const [appUser, setAppUser] = useAtom(userAtom);
  const currentRegion = useAtomValue(currentRegionAtom);

  const markerFound = appUser?.foundLocations.includes(markerId);
  const router = useRouter();

  // eslint-disable-next-line no-unused-vars
  const [_, copy] = useCopyToClipboard();

  const [addLocation] = useMutation(ADD_TO_USER_FOUND);
  const [removeLocation] = useMutation(REMOVE_FROM_USER_FOUND);

  const handleLogin = async () => {
    const ok = await signInWithGoogle();
    if (ok) {
      router.refresh();
    }
  };

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

  const handleMarkerFound = () => {
    if (appUser?.email) {
      const variables = { data: { email: appUser.email, location: markerId } };
      let newFoundLocations = [];
      if (markerFound) {
        removeLocation({ variables });
        newFoundLocations = appUser.foundLocations.filter(
          (location) => location !== markerId
        );
      } else {
        addLocation({ variables });
        newFoundLocations = [...appUser.foundLocations, markerId];
      }
      setAppUser({ ...appUser, foundLocations: newFoundLocations });
    }
  };

  return (
    <Card sx={{ minWidth: 350 }}>
      <CardHeader
        avatar={
          <Avatar>
            <span className={cn(`${gameSlug}-icon ${gameSlug}-icon-${icon}`)} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <LinkIcon
              onClick={handleCopy(
                `${process.env.NEXT_PUBLIC_BASE_URL}map/${currentRegion}?marker=${markerId}`
              )}
            />
          </IconButton>
        }
        title={title}
        subheader={category}
      />
      {media?.length > 0 && (
        <CardMedia
          component="img"
          height="350"
          image={media[0]?.url}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
        {info && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <div
              className="text-xs pb-2"
              dangerouslySetInnerHTML={{ __html: info }}
            />
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {appUser?.email ? (
          <IconButton onClick={handleMarkerFound}>
            {markerFound ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
          </IconButton>
        ) : (
          <IconButton aria-label="login" onClick={handleLogin}>
            <LoginIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};
