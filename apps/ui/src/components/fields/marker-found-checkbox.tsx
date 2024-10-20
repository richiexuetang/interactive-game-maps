import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import {
  useAddFoundLocationMutation,
  useRemoveFoundLocationMutation,
} from "@/generated/client-gql";
import { useAuthStore } from "@/store";
import { useUserStore } from "@/store/user";

export const MarkerFoundCheckbox = ({ markerId }: { markerId: number }) => {
  const auth = useAuthStore((state) => state.auth);
  const user = useUserStore((state) => state.user);
  const setFoundMarkers = useUserStore((state) => state.setFoundMarkers);
  const markerFound = user?.foundMarkers?.map((m) => m.id).includes(markerId);

  const [addLocation] = useAddFoundLocationMutation({
    variables: { data: { email: auth?.email ?? "", location: markerId } },
    onCompleted: (data) =>
      setFoundMarkers(
        data.addFoundLocation.foundMarkers ?? user?.foundMarkers ?? []
      ),
  });
  const [removeLocation] = useRemoveFoundLocationMutation({
    variables: { data: { email: auth?.email ?? "", location: markerId } },
    onCompleted: (data) =>
      setFoundMarkers(data.removeFoundLocation.foundMarkers ?? []),
  });

  const handleMarkerFound = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!auth) return;

    if (e.target.checked) {
      addLocation();
    } else {
      removeLocation();
    }
  };

  return (
    <Checkbox
      disabled={!auth}
      id={markerId.toString()}
      checked={markerFound}
      onChange={handleMarkerFound}
    />
  );
};
