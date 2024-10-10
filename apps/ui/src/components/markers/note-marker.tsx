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
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";

interface NoteMarkerProps {
  latitude: number;
  longitude: number;
  title: string | null;
  description: string | null;
  id?: any;
  position: number;
}

/**
 * User custom note marker
 *
 * @returns
 */
export const NoteMarker = ({
  latitude,
  longitude,
  title,
  description,
  id,
  position,
}: NoteMarkerProps) => {
  //#region Hooks
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      [`${position}-Title`]: title ?? "",
      [`${position}-Description`]: description ?? "",
    },
  });

  const params = useParams<{ mapSlug: string }>();
  const [draggable, setDraggable] = useState(typeof id === "string");
  const [coordinate, setCoordinate] = useState({ latitude, longitude });
  const [editMode, setEditMode] = useState(false);

  const markerRef = useRef<L.Marker>(null);
  const copy = useClipboardCopyFn();

  const currentMap = useMapStore((state) => state.currentMap);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [addNoteMarker, { data }] = useMutation(ADD_USER_NOTE_MARKER);
  const [removeNoteMarker, { data: removedData }] = useMutation(
    REMOVE_USER_NOTE_MARKER
  );
  const [updateNoteMarker, { data: updateData }] = useMutation(
    UPDATE_USER_NOTE_MARKER
  );
  const noteMarkers = user?.noteMarkers ?? [];
  //#endregion

  const div = document.createElement("div");
  div.className = `icon note_marker_1`;

  const onSubmit = async (data: any) => {
    const noteMarker = {
      title: data[`${position}-Title`],
      description: data[`${position}-Description`],
      ...coordinate,
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
            email: user?.email,
            mapSlug: params.mapSlug,
            ...noteMarker,
          },
        },
      });
    }

    setEditMode(false);
    setDraggable(false);
  };

  const handleDelete = () => {
    if (!user) return;

    if (typeof id === "number") {
      removeNoteMarker({
        variables: {
          data: {
            email: user.email,
            id,
          },
        },
      });
    }

    setUser({
      ...user,
      noteMarkers: noteMarkers.filter(({ id: curId }) => curId !== id),
    });
    setEditMode(false);
  };

  const onMoveSave = () => {
    if (draggable) {
      updateNoteMarker({
        variables: {
          data: {
            id,
            title,
            description,
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
          },
        },
      });
    }

    setDraggable(!draggable);
  };

  //#region Lifecycle
  useEffect(() => {
    if (removedData) {
      setUser({
        ...user!,
        noteMarkers: [...(removedData.removeNoteMarker.noteMarkers as any)],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removedData]);

  useEffect(() => {
    if (updateData) {
      setUser({
        ...user!,
        noteMarkers: [
          ...noteMarkers.slice(0, position),
          updateData.updateNoteMarker,
          ...noteMarkers.slice(position + 1),
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateData]);

  useEffect(() => {
    if (data) {
      setUser({ ...user!, noteMarkers: [...noteMarkers, data.addNoteMarker] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  //#endregion

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
                      label="Note Description"
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleDelete} color="error">
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
        position={[coordinate.latitude, coordinate.longitude]}
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
            const { lat, lng } = e.target.getLatLng();
            setCoordinate({ latitude: lat, longitude: lng });
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
                    `{\nlatitude: ${coordinate.latitude.toString()},\nlongitude: ${coordinate.longitude.toString()},\n mapSlug: "${
                      params.mapSlug
                    }",\n title: "${getValues(
                      `${position}-Title`
                    )}",\n description: "${getValues(
                      `${position}-Description`
                    )}"},\n`
                  )
                }
              >
                Copy to clipboard
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
