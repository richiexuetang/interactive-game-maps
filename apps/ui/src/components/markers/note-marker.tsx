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
import { Marker, Popup } from "react-leaflet";
import { getBodyFont } from "@/lib/font";
import {
  ADD_USER_NOTE_MARKER,
  REMOVE_USER_NOTE_MARKER,
} from "@/lib/graphql/constants";
import { gameSlugAtom } from "@/store";
import { userAtom } from "@/store/auth";

interface NoteMarkerProps {
  latitude: number;
  longitude: number;
  title: string | null;
  description: string | null;
  id?: any;
}

export const NoteMarker = ({
  latitude,
  longitude,
  title,
  description,
  id,
}: NoteMarkerProps) => {
  const gameSlug = useAtomValue(gameSlugAtom);
  const params = useParams<{ slug: string }>();
  const div = document.createElement("div");
  div.className = `icon note-icon`;

  const [draggable, setDraggable] = useState(
    title === null && description === null
  );
  const [lat, setLat] = useState(latitude);
  const [lng, setLng] = useState(longitude);
  const markerRef = useRef<L.Marker>(null);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [appUser, setAppUser] = useAtom(userAtom);
  const [openForm, setOpenForm] = useState(false);

  const [addNoteMarker, { data }] = useMutation(ADD_USER_NOTE_MARKER);
  const [removeNoteMarker, { data: removedData }] = useMutation(
    REMOVE_USER_NOTE_MARKER
  );

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
    if (data) {
      setAppUser({
        ...appUser!,
        noteMarkers: [...(data.addNoteMarker.noteMarkers as any)],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSave = () => {
    addNoteMarker({
      variables: {
        data: {
          email: appUser?.email,
          description: noteDescription,
          title: noteTitle,
          latitude: lat,
          longitude: lng,
          regionSlug: params.slug,
        },
      },
    });
    setEditMode(false);
  };

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

    const newNoteMarkers = appUser?.noteMarkers.filter(
      (marker) => marker.id !== id
    );
    setAppUser((prev) => ({
      ...prev!,
      noteMarkers: newNoteMarkers ?? [],
    }));
  };

  return (
    <>
      <Modal open={openForm} onClose={() => setOpenForm(false)}>
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
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "var(--text-color)",
                fontFamily: getBodyFont(gameSlug),
              }}
            >
              Edit Note
            </Typography>
            <Divider />
            <Stack spacing={5} sx={{ p: 2 }}>
              <TextField
                required
                label="Note Title"
                variant="outlined"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
              <TextField
                required
                label="Note Description"
                variant="outlined"
                value={noteDescription}
                onChange={(e) => setNoteDescription(e.target.value)}
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleDelete}>
              Delete
            </Button>
            <Button size="small" onClick={handleSave} type="submit">
              Save
            </Button>
          </CardActions>
        </Card>
      </Modal>
      <Marker
        ref={markerRef}
        position={[latitude, longitude] as any}
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
              setOpenForm(true);
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
              <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
                {title}
              </Typography>
              <Divider flexItem />
              <Typography sx={{ color: "text.secondary", fontSize: 10 }}>
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  setOpenForm(true);
                  markerRef.current?.closePopup();
                }}
              >
                Edit
              </Button>
              <Button size="small" onClick={() => setDraggable(!draggable)}>
                {draggable ? "Save" : "Move"}
              </Button>
            </CardActions>
          </Card>
        </Popup>
      </Marker>
    </>
  );
};
