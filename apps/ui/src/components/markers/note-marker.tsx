import { useMutation } from "@apollo/client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import * as L from "leaflet";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Marker, Popup } from "react-leaflet";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";
import { getBodyFont } from "@/lib/font";
import {
  ADD_USER_NOTE_MARKER,
  REMOVE_USER_NOTE_MARKER,
  UPDATE_USER_NOTE_MARKER,
} from "@/lib/graphql/constants";
import { currentMapAtom, userAtom } from "@/store";

interface NoteMarkerProps {
  latitude: number;
  longitude: number;
  title: string | null;
  description: string | null;
  id?: any;
  position: number;
}

export const NoteMarker = ({
  latitude,
  longitude,
  title,
  description,
  id,
  position,
}: NoteMarkerProps) => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      [`${position}-Title`]: title ?? "",
      [`${position}-Description`]: description ?? "",
    },
  });

  const currentMap = useAtomValue(currentMapAtom);
  const params = useParams<{ slug: string }>();
  const div = document.createElement("div");
  div.className = `icon note-icon-1`;

  const [draggable, setDraggable] = useState(typeof id === "string");
  const [lat, setLat] = useState(latitude);
  const [lng, setLng] = useState(longitude);
  const markerRef = useRef<L.Marker>(null);
  const [editMode, setEditMode] = useState(false);
  const [appUser, setAppUser] = useAtom(userAtom);
  const copy = useClipboardCopyFn();
  const [addNoteMarker, { data }] = useMutation(ADD_USER_NOTE_MARKER);
  const [removeNoteMarker, { data: removedData }] = useMutation(
    REMOVE_USER_NOTE_MARKER
  );
  const [updateNoteMarker, { data: updateData }] = useMutation(
    UPDATE_USER_NOTE_MARKER
  );

  const onSubmit = async (data: any) => {
    const noteMarker = {
      title: data[`${position}-Title`],
      description: data[`${position}-Description`],
      latitude: lat,
      longitude: lng,
    };
    if (typeof id === "number") {
      updateNoteMarker({
        variables: {
          data: {
            id,
            ...noteMarker,
          },
        },
      });
    } else {
      addNoteMarker({
        variables: {
          data: {
            email: appUser?.email,
            ...noteMarker,
            mapSlug: params.slug,
          },
        },
      });
    }

    setEditMode(false);
    setDraggable(false);
  };

  useEffect(() => {
    if (removedData) {
      setAppUser({
        ...appUser!,
        noteMarkers: [...(removedData.removeNoteMarker.noteMarkers as any)],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removedData]);

  useEffect(() => {
    if (updateData) {
      const markers = appUser?.noteMarkers ?? [];
      setAppUser({
        ...appUser!,
        noteMarkers: [
          ...markers.slice(0, position),
          updateData.updateNoteMarker,
          ...markers.slice(position + 1),
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateData]);

  useEffect(() => {
    if (data) {
      let markers = appUser?.noteMarkers ?? [];
      markers[position] = data.addNoteMarker;
      setAppUser((prev) => ({
        ...prev!,
        noteMarkers: [...markers],
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleDelete = () => {
    if (typeof id === "number") {
      removeNoteMarker({
        variables: {
          data: {
            email: appUser?.email,
            id,
          },
        },
      });
    }

    const newNoteMarkers = appUser?.noteMarkers?.filter(
      (marker) => marker.id !== id
    );
    setAppUser((prev) => ({
      ...prev!,
      noteMarkers: newNoteMarkers ?? [],
    }));
    setEditMode(false);
  };

  const onMoveSave = () => {
    if (draggable) {
      updateNoteMarker({
        variables: {
          data: {
            id,
            title: title,
            description: description,
            latitude: lat,
            longitude: lng,
          },
        },
      });
    }

    setDraggable(!draggable);
  };
  return (
    <>
      <Modal open={editMode} onClose={() => setEditMode(false)}>
        <Card
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            m: 4,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "var(--text-color)",
                  fontFamily: getBodyFont(currentMap?.gameSlug),
                }}
              >
                Edit Note
              </Typography>
              <Divider />
              <Stack spacing={5} sx={{ p: 2 }}>
                <Controller
                  name={`${position}-Title`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      required
                      label="Note Title"
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name={`${position}-Description`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      required
                      label="Note Description"
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleDelete}>
                Delete
              </Button>
              <Button size="small" type="submit">
                Save
              </Button>
            </CardActions>
          </form>
        </Card>
      </Modal>
      <Marker
        ref={markerRef}
        position={[lat, lng] as any}
        draggable={draggable}
        icon={L.divIcon({
          iconSize: [33, 44],
          iconAnchor: [17, 44],
          popupAnchor: [0, -44],
          tooltipAnchor: [22, -22],
          html: div,
        })}
        eventHandlers={{
          click: () => {
            if ((!title && !description) || editMode) {
              setEditMode(true);
              markerRef.current?.closePopup();
            }
          },
          dragend: (e) => {
            setLat(e.target.getLatLng().lat);
            setLng(e.target.getLatLng().lng);
          },
        }}
      >
        <Popup>
          <Card sx={{ minWidth: 250 }}>
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>{title}</Typography>
              <Divider flexItem />
              <Typography sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
              <Typography
                sx={{ color: "text.secondary", cursor: "pointer" }}
                onClick={() =>
                  copy(
                    `{latitude: ${lat.toString()},\nlongitude: ${lng.toString()},\n mapSlug: "${
                      params.slug
                    }",\n title: "${getValues(
                      `${position}-Title`
                    )}",\n description: "${getValues(
                      `${position}-Description`
                    )}"},`
                  )
                }
              >
                {lat}, {lng}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  setEditMode(true);
                  markerRef.current?.closePopup();
                }}
              >
                Edit
              </Button>
              <Button size="small" onClick={onMoveSave}>
                {draggable ? "Save" : "Move"}
              </Button>
            </CardActions>
          </Card>
        </Popup>
      </Marker>
    </>
  );
};
