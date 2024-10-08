import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import React from "react";
import { useMapStore } from "@/store/map";

const UnderlineButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "none",
  borderColor: "none",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.grey[900],
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
}));

export const RegionsGrid = () => {
  const currentMap = useMapStore((state) => state.currentMap);
  const setCurrentMap = useMapStore((state) => state.setCurrentMap);

  if (!currentMap || currentMap.regions?.length === 0) return;
  const { regions } = currentMap;

  return (
    <div className="text-center">
      <Divider orientation="horizontal" flexItem />
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignContent="center"
        my={1}
      >
        {regions?.map((region) => (
          <div key={region.title} className="flex flex-start">
            <UnderlineButton
              onClick={() =>
                setCurrentMap({ ...currentMap, focusedRegionId: region.title })
              }
              onContextMenu={(e) => {
                e.preventDefault();
                setCurrentMap({ ...currentMap!, boundedRegion: region });
              }}
              sx={{ fontSize: 14, whiteSpace: "nowrap" }}
              variant="text"
            >
              {region.title}
            </UnderlineButton>
          </div>
        ))}
      </Grid>
      <span className="text-xs">Tip: Right click to focus on that region</span>
    </div>
  );
};
