import { ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../utils/types";

export const usersListTableColumn: ColumnDef<User>[] = [
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
    accessorKey: "name",
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
      <span className="text-charcoal-gray text-xs">{row.original.name}</span>
    ),
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
    accessorKey: "status",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Status </span>
    ),
    cell: ({ row }) => {
      const statusOptions: {
        [key in "Active" | "Suspended" | "Flagged"]: {
          text: string;
          bg: string;
        };
      } = {
        Active: { text: "#29C153", bg: "#D7FFE9" },
        Suspended: { text: "#F7CB45", bg: "#FFF8E5" },
        Flagged: { text: "#FE8F76", bg: "#FEF0ED" },
      };

      const status = row.getValue("status") as
        | "Active"
        | "Suspended"
        | "Flagged";
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
    accessorKey: "kycStatus",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> KYC Status </span>
    ),
    cell: ({ row }) => {
      const kycStatusOptions: {
        [key in "Approved" | "Pending" | "Rejected"]: {
          text: string;
          bg: string;
        };
      } = {
        Approved: { text: "#29C153", bg: "#D7FFE9" },
        Pending: { text: "#F7CB45", bg: "#FFF8E5" },
        Rejected: { text: "#FE8F76", bg: "#FEF0ED" },
      };

      const status = row.getValue("kycStatus") as
        | "Approved"
        | "Pending"
        | "Rejected";
      const styleOptions = kycStatusOptions[status];

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
    accessorKey: "country",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs"> Country </span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.country}</span>
    ),
  },
  {
    accessorKey: "lastTransaction",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Last Transaction</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.lastTransaction}
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
