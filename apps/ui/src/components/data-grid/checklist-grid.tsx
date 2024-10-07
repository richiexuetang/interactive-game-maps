import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { Location } from "@/__generated__/graphql";

const columns: GridColDef[] = [
  { field: "found", headerName: "Found", width: 150 },
  { field: "title", headerName: "Name", width: 150 },
  { field: "categoryId", headerName: "Category", width: 150 },
  { field: "mapSlug", headerName: "Map", width: 150 },
  { field: "description", headerName: "Info", width: 150 },
];

interface ChecklistGridProps {
  locations: Location[];
}

export const ChecklistGrid = ({ locations }: ChecklistGridProps) => {
  const rows: GridRowsProp = locations.map((location) => ({
    id: location.id,
    found: "No",
    title: location.title,
    categoryId: location.category?.title,
    mapSlug: location.mapSlug,
    description: location.description,
  }));

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
