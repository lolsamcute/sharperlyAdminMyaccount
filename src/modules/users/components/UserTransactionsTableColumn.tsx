import { ArrowUpDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { Transaction } from "../utils/types";
import { Link } from "react-router-dom";

export const UserTransactionsTableColumn: ColumnDef<Transaction>[] = [
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
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs text-center block">
        {"$"} {row.original.amount}
      </span>
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Title
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.title}</span>
    ),
  },
  {
    accessorKey: "recipient",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Recipient
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.title}</span>
    ),
  },

  {
    accessorKey: "status",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Status </span>
    ),
    cell: ({ row }) => {
      const statusOptions: {
        [key in "Completed" | "Initiated"]: {
          text: string;
          bg: string;
        };
      } = {
        Completed: { text: "#29C153", bg: "#D7FFE9" },
        Initiated: { text: "#FE8F76", bg: "#FEF0ED" },
      };

      const status = row.getValue("status") as "Completed" | "Initiated";
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
    accessorKey: "paymentMethod",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Payment Method </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.paymentMethod}
      </span>
    ),
  },
  {
    accessorKey: "dateCreated",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Date Created </span>
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
      <span className="text-[#3A3A3A] font-bold text-xs"> Action </span>
    ),
    cell: () => {
      return (
        <Link to={"/user/1"}>
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
