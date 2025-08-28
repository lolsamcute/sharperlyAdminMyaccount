import { Link } from "react-router-dom";
import { ArrowUpDown } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import type { WalletFundingTransaction } from "../utils/type";

export const walletFundingTableColumn: ColumnDef<WalletFundingTransaction>[] = [
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
    accessorKey: "walletHolder",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Wallet Holder
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.walletHolder}
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
      <span className="text-charcoal-gray text-xs">
        $ {row.original.amount}
      </span>
    ),
  },
  {
    accessorKey: "currency",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Currency
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.currency}
      </span>
    ),
  },

  {
    accessorKey: "sourceAccNo",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Source Acc No </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.sourceAccNo}
      </span>
    ),
  },
  {
    accessorKey: "sourceName",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Source Name</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.sourceName}
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
        <Link to={"/wallets/funds/2"}>
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
