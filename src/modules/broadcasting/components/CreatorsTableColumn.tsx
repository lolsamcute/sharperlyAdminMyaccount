import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { Creator } from "../utils/types";
import { Link } from "react-router-dom";

export const creatorsTableColumn: ColumnDef<Creator>[] = [
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
    accessorKey: "fullName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Full Name
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.fullName}
      </span>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Email</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.email}</span>
    ),
  },
  {
    accessorKey: "phone",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Phone</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.phone}</span>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Status</span>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as "Active" | "Inactive";

      return (
        <Badge
          className={`w-16 h-6 text-[9px] py-1 px-2 font-medium rounded ${
            status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "refCode",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        REF Code
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.refCode}</span>
    ),
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date Created
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
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
    cell: ({ row }) => {
      return (
        <Link to={`/campaigns/creator/${row.original.id}`}>
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
