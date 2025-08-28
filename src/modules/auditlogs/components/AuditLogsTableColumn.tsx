import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import type { AuditLog } from "../utils/types";
import { Link } from "react-router-dom";

export const auditLogsTableColumn: ColumnDef<AuditLog>[] = [
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
    accessorKey: "admin",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Admin
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.admin}
      </span>
    ),
  },
  {
    accessorKey: "detail",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Detail
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.detail}
      </span>
    ),
  },
  {
    accessorKey: "module",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Module
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.module}
      </span>
    ),
  },
  {
    accessorKey: "ipAddress",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        IP Address
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.ipAddress}
      </span>
    ),
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-[#3A3A3A] font-bold text-[11px]"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Timestamp
        <ArrowUpDown className="ml-1.5 size-2.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-[11px]">
        {row.original.timestamp}
      </span>
    ),
  },
  {
    id: "action",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-[11px]">Action</span>
    ),
    cell: ({ row }) => (
      <Link
        to={`/audit-logs/${row.original.sn}`}
        className="text-primary text-xs font-medium underline"
      >
        View Details
      </Link>
    ),
  },
];
