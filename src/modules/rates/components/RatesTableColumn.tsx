import { MoreHorizontal } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import type { RateData } from "../utils/types";
import { Badge } from "@/components/ui/badge";

export const ratesTableColumn: ColumnDef<RateData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="mb-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="mb-3"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Amount
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
      <span className="text-charcoal-gray text-xs">{row.original.amount}</span>
    ),
  },
  {
    accessorKey: "buying",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Buying
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Icon icon="circle-flags:au" />
        <span className="text-charcoal-gray text-xs">
          {row.original.buying}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "selling",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Selling
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Icon icon="circle-flags:ng" />
        <span className="text-charcoal-gray text-xs">
          {row.original.selling}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "rateDate",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Rate Date
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
        {row.original.rateDate}
      </span>
    ),
  },
  {
    accessorKey: "operator",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Operator
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
        {row.original.operator}
      </span>
    ),
  },
  {
    accessorKey: "operatorStatus",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Operator Status</span>
    ),
    cell: ({ row }) => {
      const statusOptions: {
        [key in "Inactive" | "Active" | "Failed"]: {
          text: string;
          bg: string;
        };
      } = {
        Inactive: { text: "#FE8F76", bg: "#FEF0ED" },
        Active: { text: "#29C153", bg: "#29C15329" },
        Failed: { text: "#D80027", bg: "#FFCECF" },
      };

      const status = row.getValue("operatorStatus") as
        | "Inactive"
        | "Active"
        | "Failed";
      const styleOptions = statusOptions[status];

      if (!styleOptions) {
        return null;
      }

      return (
        <Badge
          className={`w-20 h-7.5 text-[9px] py-2 px-2.5 font-semibold rounded`}
          style={{
            color: styleOptions.text,
            backgroundColor: styleOptions.bg,
          }}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "minVolume",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Min Volume
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
        {row.original.minVolume}
      </span>
    ),
  },
  {
    accessorKey: "maxVolume",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Max Volume
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
        {row.original.maxVolume}
      </span>
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
    cell: () => {
      return (
        <Button variant="ghost" className="size-8 p-0">
          <MoreHorizontal className="size-4" />
        </Button>
      );
    },
  },
];
