import {
  useAddFoundLocationMutation,
  useRemoveFoundLocationMutation,
} from "@/generated/client-gql";
import { useAuthStore } from "@/store";
import Checkbox from "@mui/material/Checkbox";

export const MarkerFoundCheckbox = ({ markerId }: { markerId: number }) => {
  const user = useAuthStore((state) => state.user);
  const setFoundMarkers = useAuthStore((state) => state.setFoundMarkers);
  const markerFound = user?.foundMarkers?.map((m) => m.id).includes(markerId);

  const [addLocation] = useAddFoundLocationMutation({
    variables: { data: { email: user?.email ?? "", location: markerId } },
    onCompleted: (data) =>
      setFoundMarkers(
        data.addFoundLocation.foundMarkers ?? user?.foundMarkers ?? []
      ),
  });
  const [removeLocation] = useRemoveFoundLocationMutation({
    variables: { data: { email: user?.email ?? "", location: markerId } },
    onCompleted: (data) =>
      setFoundMarkers(data.removeFoundLocation.foundMarkers ?? []),
  });

  const handleMarkerFound = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) return;

    if (e.target.checked) {
      addLocation();
    } else {
      removeLocation();
    }
  };

  return (
    <Checkbox
      id={markerId.toString()}
      checked={markerFound}
      onChange={handleMarkerFound}
    />
  );
};
