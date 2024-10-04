import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { focusRegionIdAtom, currentMapAtom, boundedRegionAtom } from "@/store";

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
  const currentMap = useAtomValue(currentMapAtom);
  const setSubRegionId = useSetAtom(focusRegionIdAtom);
  const setBoundedRegion = useSetAtom(boundedRegionAtom);

  if (!currentMap || currentMap.regions?.length === 0) return;
  const { regions } = currentMap;

  return (
    <>
      <Divider orientation="horizontal" flexItem />
      <Grid container spacing={1} justifyContent="center" alignContent="center">
        {regions?.map((region) => (
          <div key={region.title} className="flex flex-start">
            <UnderlineButton
              onClick={() => setSubRegionId(region.title)}
              onContextMenu={(e) => {
                e.preventDefault();
                setBoundedRegion(region);
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
    </>
  );
};
