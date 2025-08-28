import { ArrowUpDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import type { Transaction } from "../utils/types";
import { Icon } from "@iconify/react/dist/iconify.js";

export const recentTransactionTableColumns: ColumnDef<Transaction>[] = [
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
    accessorKey: "customer",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Customer
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.customer}
      </span>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return (
        <span className="text-charcoal-gray text-xs font-normal">
          {formatted}
        </span>
      );
    },
  },
  {
    accessorKey: "type",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Type </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.type}</span>
    ),
  },
  {
    accessorKey: "currency",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Currency </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.currency}
      </span>
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
            status.toLowerCase() === "completed"
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
    accessorKey: "date",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Date Created </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.date}</span>
    ),
  },
  {
    id: "actions",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Action </span>
    ),
    cell: () => {
      return (
        <Icon
          width="24"
          height="24"
          color="#8756E9"
          icon="solar:eye-linear"
          className="mx-auto"
        />
      );
    },
  },
];
