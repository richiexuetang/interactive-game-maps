"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import * as React from "react";
import { titleCase } from "@/lib/utils";
import { useAuthStore } from "@/store";

type Checklist = {
  found: number;
  category: {
    title: string;
  };
  title: string;
  mapSlug: string;
  description: string;
};
interface ChecklistGridProps {
  locations: any;
}
export const ChecklistGrid = ({ locations }: ChecklistGridProps) => {
  const user = useAuthStore((state) => state.user);

  const cols = React.useMemo<MRT_ColumnDef<Checklist>[]>(
    () => [
      // {
      //   accessorFn: (row) =>
      //     user?.foundMarkers.map((m) => m.id).includes(row.found),
      //   // accessorKey: "id",
      //   header: "Found",
      //   size: 150,
      //   Cell: ({ renderedCellValue, row }) => <>{renderedCellValue}</>,
      // },
      {
        accessorKey: "category.title",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "title",
        header: "Title",
        size: 200,
      },
      {
        accessorKey: "mapSlug",
        header: "Map",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Info",
        size: 150,
        Cell(props) {
          return (
            <div
              dangerouslySetInnerHTML={{
                __html: props.renderedCellValue ?? "",
              }}
            />
          );
        },
      },
    ],
    []
  );

  const [hideFound, setHideFound] = React.useState(false);

  const filteredLocations = locations.filter((location: any) =>
    hideFound ? !found.map((m) => m.id).includes(location.id as number) : true
  );

  const found = user?.foundMarkers ?? [];

  const data: Checklist[] = filteredLocations.map(
    ({ id, title, category, mapSlug, description }: any) => ({
      id,
      found: found.map((m) => m.id).includes(id as number),
      title,
      category: {
        title: category?.title,
      },
      mapSlug: titleCase(mapSlug!.replaceAll("-", " ")),
      description,
    })
  )!;

  const table = useMaterialReactTable({
    columns: cols,
    data,
  });

  if (!locations) return null;

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
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};
