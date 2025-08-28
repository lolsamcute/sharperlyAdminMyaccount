import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import type { BdcOperatorData } from "../utils/types";
import { Badge } from "@/components/ui/badge";

export const bdcOperatorsTableColumn: ColumnDef<BdcOperatorData>[] = [
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
    accessorKey: "operatorName",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Operator Name
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
        {row.original.operatorName}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Status</span>
    ),
    cell: ({ row }) => {
      const statusOptions: {
        [key in "Inactive" | "Active"]: {
          text: string;
          bg: string;
        };
      } = {
        Inactive: { text: "#FE8F76", bg: "#FEF0ED" },
        Active: { text: "#29C153", bg: "#29C15329" },
      };
      const status = row.getValue("status") as "Inactive" | "Active";
      const styleOptions = statusOptions[status];
      if (!styleOptions) return null;
      return (
        <Badge
          className={`w-20 h-7.5 text-[9px] py-2 px-2.5 font-semibold rounded`}
          style={{ color: styleOptions.text, backgroundColor: styleOptions.bg }}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "bot",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Bot
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
      <span className="text-charcoal-gray text-xs">{row.original.bot}</span>
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
        <div className="flex gap-2 items-center justify-start">
          <Button variant="ghost" className="size-6 p-0">
            <Icon icon="mdi:pencil" width={16} height={16} color="#29C153" />
          </Button>
          <Button variant="ghost" className="size-6 p-0">
            <Icon icon="mdi:delete" width={16} height={16} color="#FE8F76" />
          </Button>
        </div>
      );
    },
  },
];
