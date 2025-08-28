import type { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";

export type Role = {
  role: string;
  type: string;
  admins: string;
  description: string;
};

export const roleTableColumn: ColumnDef<Role>[] = [
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
    accessorKey: "type",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Type</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.type}</span>
    ),
  },
  {
    accessorKey: "admins",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Admins</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.admins}</span>
    ),
  },
  {
    accessorKey: "description",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Description</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.description}
      </span>
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
