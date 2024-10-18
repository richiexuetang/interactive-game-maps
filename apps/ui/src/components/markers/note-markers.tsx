import { useParams } from "next/navigation";
import { useAuthStore } from "@/store";
import { NoteMarker } from "./note-marker";

export const NoteMarkers = () => {
  const user = useAuthStore((state) => state.user);
  const noteMarkers = user?.noteMarkers;
  const params = useParams<{ mapSlug: string }>();

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
              />
            );
          }
        }
      )}
    </>
  );
};
