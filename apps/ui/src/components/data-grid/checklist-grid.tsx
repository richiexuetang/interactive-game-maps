"use client";

import { Checkbox } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { titleCase } from "@/lib/utils";
import { useAuthStore } from "@/store";

interface ChecklistGridProps {
  locations: any;
}

export const ChecklistGrid = ({ locations }: ChecklistGridProps) => {
  const user = useAuthStore((state) => state.user);

  if (!locations) return null;

  const columns: GridColDef[] = [
    {
      field: "found",
      headerName: "Found",
      display: "flex",
      renderCell: (params) => {
        return (
          <Checkbox
            checked={user?.foundMarkers
              .map((m) => m.id)
              .includes(params.id as number)}
          />
        );
      },
      editable: true,
      width: 180,
      type: "boolean",
    },
    { field: "categoryId", headerName: "Category", width: 150 },
    { field: "title", headerName: "Name", width: 150 },
    { field: "mapSlug", headerName: "Map", width: 150 },
    { field: "description", headerName: "Info", width: 650 },
  ];

  const rows: GridRowsProp = locations.map(
    ({ id, title, category, mapSlug, description }: any) => ({
      id,
      found: user?.foundMarkers.map((m) => m.id).includes(id as number),
      title,
      categoryId: category?.title,
      mapSlug: titleCase(mapSlug!.replaceAll("-", " ")),
      description,
    })
  )!;

  return (
    <div className="w-full h-full">
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
