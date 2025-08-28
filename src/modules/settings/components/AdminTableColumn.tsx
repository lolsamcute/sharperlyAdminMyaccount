import type { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";

export type Admin = {
  name: string;
  email: string;
  role: string;
};

export const adminTableColumn: ColumnDef<Admin>[] = [
  {
    accessorKey: "name",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Name</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.name}</span>
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
    accessorKey: "role",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Role</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.role}</span>
    ),
  },
  {
    id: "action",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Action</span>
    ),
    cell: () => <Ellipsis size={16} color="var(--color-primary)" />,
  },
];
