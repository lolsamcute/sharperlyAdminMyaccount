import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import type { Referral } from "../utils/types";

export const referralsTableColumn: ColumnDef<Referral>[] = [
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
    accessorKey: "transactions",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Transactions</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs text-center block">
        {row.original.transactions}
      </span>
    ),
  },
  {
    accessorKey: "codeUsed",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Code Used</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.codeUsed}
      </span>
    ),
  },
  {
    accessorKey: "dateJoined",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Date Joined</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.dateJoined}
      </span>
    ),
  },
];
