import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useParams, useRouter } from "next/navigation";
import { useMapStore } from "@/store/map";

export const MapSwitcher = () => {
  const params = useParams();
  const router = useRouter();
  const currentMap = useMapStore((state) => state.currentMap);

  return (
    <FormControl fullWidth>
      <Select
        value={params.mapSlug}
        onChange={(event) =>
          router.replace(`/${params.gameSlug}/map/${event.target.value}`)
        }
      >
        {currentMap?.game?.maps?.map(({ title, slug }, index) => (
          <MenuItem key={`${title}${index}`} value={slug}>
            {title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
