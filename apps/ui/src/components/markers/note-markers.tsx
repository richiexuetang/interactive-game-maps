import { useMutation } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { NoteMarker } from "./note-marker";
import { ADD_USER_NOTE_MARKER } from "@/lib/graphql/constants";
import { useAuthStore } from "@/store";

export const NoteMarkers = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const noteMarkers = user?.noteMarkers;
  const params = useParams<{ mapSlug: string }>();

  const [addNoteMarker, { data }] = useMutation(ADD_USER_NOTE_MARKER);

  useEffect(() => {
    if (data && user) {
      setUser({
        ...user,
        noteMarkers: [...user?.noteMarkers, data.addNoteMarker],
      });
    }
  }, [data]);

  if (!noteMarkers) return null;

  return (
    <>
      {noteMarkers.map(
        ({ latitude, longitude, title, description, mapSlug, id }, index) => {
          if (params.mapSlug === mapSlug) {
            return (
              <NoteMarker
                latitude={latitude ?? 0}
                longitude={longitude ?? 0}
                title={title ?? ""}
                description={description ?? ""}
                key={index}
                id={id}
                position={index}
                addNoteMarker={addNoteMarker}
              />
            );
          }
        }
      )}
    </>
  );
};
