import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { focusRegionIdAtom, currentMapAtom } from "@/store";

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

  if (!currentMap) return;
  const { regions } = currentMap;

  return (
    <Grid container spacing={1} justifyContent="center" alignContent="center">
      {regions?.map((region) => (
        <div key={region.title} className="flex flex-start">
          <UnderlineButton
            onClick={() => setSubRegionId(region.title)}
            sx={{ fontSize: 12, whiteSpace: "nowrap" }}
            variant="text"
          >
            {region.title}
          </UnderlineButton>
        </div>
      ))}
    </Grid>
  );
};
