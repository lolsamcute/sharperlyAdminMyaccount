import { Link } from "react-router-dom";
import { ArrowUpDown } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import type { UserTwo } from "../utils/types";

export const userVerificationsPageTableColumn: ColumnDef<UserTwo>[] = [
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
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.email}</span>
    ),
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        First Name
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.firstName}
      </span>
    ),
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Name
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.lastName}
      </span>
    ),
  },

  {
    accessorKey: "gender",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Gender </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.gender}</span>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Status </span>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          className={`w-20 h-7.5 text-[9px] py-2 px-2.5 font-semibold rounded ${
            status.toLowerCase() === "approved"
              ? "bg-[#29C15329] text-[#29C153]"
              : "bg-[#FEF0ED] text-[#FE8F76]"
          }`}
        >
          {status}
        </Badge>
      );
    },
  },

  {
    id: "actions",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Action </span>
    ),
    cell: () => {
      return (
        <Link to={"#"}>
          <Icon
            width="24"
            height="24"
            color="#8756E9"
            icon="solar:eye-linear"
            className="mx-auto"
          />
        </Link>
      );
    },
  },
];
