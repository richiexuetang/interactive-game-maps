"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { titleCase } from "@/lib/utils";
import { useAuthStore } from "@/store";
import { MarkerFoundCheckbox } from "../fields/marker-found-checkbox";

interface ChecklistGridProps {
  locations: any;
}
export const ChecklistGrid = ({ locations }: ChecklistGridProps) => {
  const user = useAuthStore((state) => state.user);
  const [hideFound, setHideFound] = React.useState(false);

  const filteredLocations = locations.filter((location: any) =>
    hideFound ? !found.map((m) => m.id).includes(location.id as number) : true
  );
  if (!locations) return null;

  const columns: GridColDef[] = [
    {
      field: "found",
      headerName: "Found",
      display: "flex",
      renderCell: (params) => {
        return (
          <MarkerFoundCheckbox markerId={parseInt(params.id.toString())} />
        );
      },
      editable: true,
      width: 75,
      type: "boolean",
    },
    { field: "categoryId", headerName: "Category", width: 100 },
    { field: "title", headerName: "Name", width: 250 },
    { field: "mapSlug", headerName: "Map", width: 150 },
    {
      field: "description",
      headerName: "Info",
      width: 650,
      renderCell(params) {
        return <div dangerouslySetInnerHTML={{ __html: params.value }} />;
      },
    },
  ];

  const found = user?.foundMarkers ?? [];

  const rows: GridRowsProp = filteredLocations.map(
    ({ id, title, category, mapSlug, description }: any) => ({
      id,
      found: found.map((m) => m.id).includes(id as number),
      title,
      categoryId: category?.title,
      mapSlug: titleCase(mapSlug!.replaceAll("-", " ")),
      description,
    })
  )!;

  return (
    <div className="w-full h-full">
      <div className="m-10 flex flex-col">
        <FormControlLabel
          control={
            <Checkbox
              checked={hideFound}
              onChange={() => setHideFound((prev) => !prev)}
            />
          }
          label="Hide Found Items"
        />
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};
