import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { ColumnDef } from "@tanstack/react-table";
import type { StateData } from "../utils/types";

export const stateTableColumn: ColumnDef<StateData>[] = [
  {
    accessorKey: "sn",
    header: () => <span className="text-[#3A3A3A] font-bold text-xs">S/N</span>,
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.sn}</span>
    ),
  },
  {
    accessorKey: "stateName",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          State Name
          <div className="flex flex-col gap-0.5">
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              color={isAsc ? "#D2D6E8" : "#313131"}
              className="size-1.5"
            />
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              className="rotate-180 size-1.5"
              color={isDesc ? "#D2D6E8" : "#313131"}
            />
          </div>
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.stateName}
      </span>
    ),
  },
  {
    accessorKey: "capital",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Capital
          <div className="flex flex-col gap-0.5">
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              color={isAsc ? "#D2D6E8" : "#313131"}
              className="size-1.5"
            />
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              className="rotate-180 size-1.5"
              color={isDesc ? "#D2D6E8" : "#313131"}
            />
          </div>
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.capital}</span>
    ),
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Country
          <div className="flex flex-col gap-0.5">
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              color={isAsc ? "#D2D6E8" : "#313131"}
              className="size-1.5"
            />
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              className="rotate-180 size-1.5"
              color={isDesc ? "#D2D6E8" : "#313131"}
            />
          </div>
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.country}</span>
    ),
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Date Created
          <div className="flex flex-col gap-0.5">
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              color={isAsc ? "#D2D6E8" : "#313131"}
              className="size-1.5"
            />
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              className="rotate-180 size-1.5"
              color={isDesc ? "#D2D6E8" : "#313131"}
            />
          </div>
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.dateCreated}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Action</span>
    ),
    cell: () => (
      <div className="flex gap-2 items-center">
        <Button variant="ghost" className="size-6 p-0">
          <Icon icon="mdi:pencil" width={16} height={16} color="#29C153" />
        </Button>
        <Button variant="ghost" className="size-6 p-0">
          <Icon icon="mdi:delete" width={16} height={16} color="#FE8F76" />
        </Button>
      </div>
    ),
  },
];
