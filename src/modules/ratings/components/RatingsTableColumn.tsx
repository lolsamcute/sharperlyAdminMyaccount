import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import type { RatingFeedback } from "../utils/types";

export const ratingsTableColumn: ColumnDef<RatingFeedback>[] = [
  {
    accessorKey: "sn",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        S/N
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">{row.original.sn}</span>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.name}
      </span>
    ),
  },
  {
    accessorKey: "rate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Rate
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.rate}
      </span>
    ),
  },
  {
    accessorKey: "comment",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Comment
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.comment}
      </span>
    ),
  },
  {
    accessorKey: "dateTime",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date & Time
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.dateTime}
      </span>
    ),
  },
];
