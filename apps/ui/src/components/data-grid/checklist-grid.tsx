"use client";

import { useMutation } from "@apollo/client";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import {
  ADD_TO_USER_FOUND,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/graphql/constants";
import { titleCase } from "@/lib/utils";
import { useAuthStore } from "@/store";

interface ChecklistGridProps {
  locations: any;
}

export const ChecklistGrid = ({ locations }: ChecklistGridProps) => {
  const user = useAuthStore((state) => state.user);
  const setFoundMarkers = useAuthStore((state) => state.setFoundMarkers);
  const [addFound] = useMutation(ADD_TO_USER_FOUND, {
    onCompleted: (data) => setFoundMarkers(data.addFoundLocation.foundMarkers),
  });
  const [removeFound] = useMutation(REMOVE_FROM_USER_FOUND, {
    onCompleted: (data) =>
      setFoundMarkers(data.removeFoundLocation.foundMarkers),
  });

  if (!locations) return null;

  const handleFoundChange = (id: number, found: boolean) => {
    if (found) {
      addFound({ variables: { data: { email: user?.email, location: id } } });
    } else {
      removeFound({
        variables: { data: { email: user?.email, location: id } },
      });
    }
  };

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
            disabled={!user}
            onChange={(e) =>
              handleFoundChange(params.id as number, e.target.checked)
            }
          />
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
      <div className="m-10">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};
