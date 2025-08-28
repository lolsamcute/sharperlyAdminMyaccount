import { Link } from "react-router-dom";
import { ArrowUpDown } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import type { Transaction } from "../utils/constants";

export const allTransactionsTableColumn: ColumnDef<Transaction>[] = [
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
    accessorKey: "customerName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Customer
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.customerName}
      </span>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        $ {row.original.amount}
      </span>
    ),
  },
  {
    accessorKey: "transactionType",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Type
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.transactionType}
      </span>
    ),
  },

  {
    accessorKey: "currency",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-[11px]"> Currency </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.currency}
      </span>
    ),
  },
  {
    accessorKey: "recipientCurrency",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-[11px]">
        {" "}
        Recipient Currency{" "}
      </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.recipientCurrency}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-[11px]"> Status </span>
    ),
    cell: ({ row }) => {
      const statusOptions: {
        [key in "Initiated" | "Completed" | "Failed"]: {
          text: string;
          bg: string;
        };
      } = {
        Initiated: { text: "#FE8F76", bg: "#FEF0ED" },
        Completed: { text: "#29C153", bg: "#29C15329" },
        Failed: { text: "#D80027", bg: "#FFCECF" },
      };

      const status = row.getValue("status") as
        | "Initiated"
        | "Completed"
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
    accessorKey: "paymentMethod",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-[11px]">
        {" "}
        Payment Method{" "}
      </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.paymentMethod}
      </span>
    ),
  },
  {
    accessorKey: "dateCreated",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-[11px]">
        {" "}
        Date Created{" "}
      </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.dateCreated}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-[11px]"> Action </span>
    ),
    cell: () => {
      return (
        <Link to={"/transaction/2"}>
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
