import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useAtomValue } from "jotai";
import { useParams, useRouter } from "next/navigation";
import { currentMapAtom } from "@/store";

export const MapSwitcher = () => {
  const params = useParams();
  const router = useRouter();
  const currentMap = useAtomValue(currentMapAtom);

  return (
    <FormControl fullWidth>
      <Select
        value={params.slug}
        onChange={(event) => router.replace(`/map/${event.target.value}`)}
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
