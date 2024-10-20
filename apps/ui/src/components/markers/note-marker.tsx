import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as L from "leaflet";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Marker, Popup } from "react-leaflet";
import {
  useAddNoteMarkerMutation,
  useRemoveNoteMarkerMutation,
  useUpdateNoteMarkerMutation,
} from "@/generated/client-gql";
import { useClipboardCopyFn } from "@/hooks/use-copy-to-clipboard";
import { getBodyFont } from "@/lib/ui/font";
import { useAuthStore } from "@/store/auth";
import { useMapStore } from "@/store/map";
import { useUserStore } from "@/store/user";

interface NoteMarkerProps {
  latitude: number;
  longitude: number;
  title: string | null;
  description: string | null;
  id?: number | string;
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
  const auth = useAuthStore((state) => state.auth);
  const user = useUserStore((state) => state.user);
  const addNote = useUserStore((state) => state.addNote);
  const setNotes = useUserStore((state) => state.setNotes);

  const [addNoteMarker] = useAddNoteMarkerMutation({
    onCompleted: (data) => addNote(data.addNoteMarker),
  });
  const [removeNoteMarker] = useRemoveNoteMarkerMutation({
    variables: {
      data: {
        email: auth?.email ?? "",
        id: id as number,
      },
    },
    onCompleted: (data) => setNotes(data.removeNoteMarker.noteMarkers),
  });
  const [updateNoteMarker] = useUpdateNoteMarkerMutation({
    variables: {
      data: {
        id: id as number,
        title: getValues(`${position}-Title`),
        description: getValues(`${position}-Description`),
        ...coordinate,
      },
    },
    onCompleted: (data) =>
      setNotes([
        ...(user.noteMarkers?.slice(0, position) ?? []),
        data.updateNoteMarker,
        ...(user.noteMarkers?.slice(position + 1) ?? []),
      ]),
  });
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
            email: auth?.email ?? "",
            mapSlug: params.mapSlug,
            title: getValues(`${position}-Title`),
            description: getValues(`${position}-Description`),
            ...coordinate,
          },
        },
      });
    }

    setEditMode(false);
    setDraggable(false);
  };

  const handleDelete = () => {
    if (typeof id === "number") {
      removeNoteMarker();
    } else {
      setNotes(
        user.noteMarkers?.filter(({ id: curId }: any) => curId !== id) ?? []
      );
    }

    setEditMode(false);
  };

  const onMoveSave = () => {
    if (draggable) {
      updateNoteMarker();
    }

    setDraggable(!draggable);
  };

  return (
    <>
      <Modal open={editMode} onClose={() => setEditMode(false)}>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "1px solid #000",
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
                    // `{\nlatitude: ${coordinate.latitude.toString()},\nlongitude: ${coordinate.longitude.toString()},\n mapSlug: "${
                    //   params.mapSlug
                    // }",\n title: "${getValues(
                    //   `${position}-Title`
                    // )}",\n description: "${getValues(
                    //   `${position}-Description`
                    // )}"},\n`
                    `[${coordinate.latitude}, ${coordinate.longitude}],`
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
