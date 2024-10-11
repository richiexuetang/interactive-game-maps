import { useMutation } from "@apollo/client";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useParams } from "next/navigation";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { getBodyFont } from "@/lib/font";
import {
  ADD_USER_NOTE_MARKER,
  REMOVE_USER_NOTE_MARKER,
  UPDATE_USER_NOTE_MARKER,
} from "@/lib/graphql/constants";
import { useAuthStore } from "@/store";

const NoteMarkerCard = styled(Card)(() => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  m: 4,
  border: "1px solid #000",
  bgcolor: "background.paper",
  boxShadow: "24",
}));

interface NoteMarkerFormProps {
  position: number;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  setDraggable: React.Dispatch<React.SetStateAction<boolean>>;
  coordinate: any;
  id: any;
}

export const NoteMarkerForm = ({
  position,
  editMode,
  setEditMode,
  title,
  description,
  setDraggable,
  coordinate,
  id,
}: NoteMarkerFormProps) => {
  const params = useParams();
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      [`${position}-Title`]: title ?? "",
      [`${position}-Description`]: description ?? "",
    },
  });
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

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
      noteMarkers: user?.noteMarkers.filter(({ id: curId }) => curId !== id),
    });
    setEditMode(false);
  };

  return (
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
                fontFamily: getBodyFont(params.gameSlug),
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
  );
};
