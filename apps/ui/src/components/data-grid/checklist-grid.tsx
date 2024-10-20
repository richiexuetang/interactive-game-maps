"use client";

import { CheckBox } from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  type MRT_ColumnDef,
} from "material-react-table";
import * as React from "react";
import {
  useAddFoundLocationMutation,
  useRemoveFoundLocationMutation,
} from "@/generated/client-gql";
import { titleCase } from "@/lib/utils";
import { useAuthStore } from "@/store";
import { useUserStore } from "@/store/user";

type ChecklistItem = {
  id: number;
  found: boolean;
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
  const auth = useAuthStore((state) => state.auth);
  const user = useUserStore((state) => state.user);

  const setFoundMarkers = useUserStore((state) => state.setFoundMarkers);

  const [addLocation] = useAddFoundLocationMutation({
    onCompleted: (data) =>
      setFoundMarkers(
        data.addFoundLocation.foundMarkers ?? user.foundMarkers ?? []
      ),
  });
  const [removeLocation] = useRemoveFoundLocationMutation({
    onCompleted: (data) =>
      setFoundMarkers(data.removeFoundLocation.foundMarkers ?? []),
  });

  const handleMarkerFound = (markerId: number) => {
    if (!auth) return;

    if (!user.foundMarkers?.map((m) => m.id).includes(markerId)) {
      addLocation({
        variables: { data: { email: auth?.email ?? "", location: markerId } },
      });
    } else {
      removeLocation({
        variables: { data: { email: auth?.email ?? "", location: markerId } },
      });
    }
  };

  const cols = React.useMemo<MRT_ColumnDef<ChecklistItem>[]>(
    () => [
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

  const found = user?.foundMarkers ?? [];

  const data: ChecklistItem[] = locations.map(
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

  if (!locations) return null;

  return (
    <div className="w-full h-full">
      <div className="m-10 flex flex-col">
        <MaterialReactTable
          columns={cols}
          data={data}
          enableRowActions
          renderRowActionMenuItems={({ row, table }) => [
            <MRT_ActionMenuItem
              icon={
                row.original.found ? <CheckBox /> : <CheckBoxOutlineBlankIcon />
              }
              key="found"
              label="Found"
              onClick={() => handleMarkerFound(row.original.id)}
              table={table}
            />,
          ]}
        />
      </div>
    </div>
  );
};
