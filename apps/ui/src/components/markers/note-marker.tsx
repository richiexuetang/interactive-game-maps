import { userNoteMarkerAtom } from "@/store/marker";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAtom, useSetAtom } from "jotai";
import type { LatLngExpression } from "leaflet";
import * as L from "leaflet";
import { useState } from "react";
import { Marker, Popup } from "react-leaflet";

interface NoteMarkerProps {
  position: LatLngExpression;
  title: string | null;
  description: string | null;
  index: number;
}

export const NoteMarker = ({
  position,
  title,
  description,
  index,
}: NoteMarkerProps) => {
  const div = document.createElement("div");
  div.className = `icon note-icon`;

  const [draggable, setDraggable] = useState(
    title === null && description === null
  );
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [userNoteAtom, setUserNoteAtom] = useAtom(userNoteMarkerAtom);
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    const otherNotes = userNoteAtom.filter((_, i) => i !== index);
    setUserNoteAtom([
      ...otherNotes,
      { title: noteTitle, description: noteDescription, position },
    ]);
    setEditMode(false);
  };

  const handleDelete = () => {
    const otherNotes = userNoteAtom.filter((_, i) => i !== index);
    setUserNoteAtom([...otherNotes]);
  };

  return (
    <Marker
      position={position}
      draggable={draggable}
      icon={L.divIcon({
        iconSize: [33, 44],
        iconAnchor: [17, 44],
        popupAnchor: [0, -44],
        tooltipAnchor: [22, -22],
        html: div,
      })}
    >
      <Popup>
        {(!title && !description) || editMode ? (
          <Card sx={{ minWidth: 500 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Edit Note
              </Typography>
              <Divider flexItem />
              <Stack spacing={5} sx={{ p: 2 }}>
                <TextField
                  label="Note Title"
                  variant="outlined"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                />
                <TextField
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
              <Button size="small" onClick={handleSave}>
                Save
              </Button>
            </CardActions>
          </Card>
        ) : (
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
              <Button size="small" onClick={() => setEditMode(true)}>
                Edit
              </Button>
              <Button size="small" onClick={() => setDraggable(!draggable)}>
                {draggable ? "Save" : "Move"}
              </Button>
            </CardActions>
          </Card>
        )}
      </Popup>
    </Marker>
  );
};
