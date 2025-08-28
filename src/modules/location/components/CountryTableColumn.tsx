import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { ColumnDef } from "@tanstack/react-table";
import type { CountryData } from "../utils/types";

export const countryTableColumn: ColumnDef<CountryData>[] = [
  {
    accessorKey: "sn",
    header: () => <span className="text-[#3A3A3A] font-bold text-xs">S/N</span>,
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.sn}</span>
    ),
  },
  {
    accessorKey: "flag",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Flag</span>
    ),
    cell: ({ row }) => <Icon icon={row.original.flag} width={24} height={24} />,
  },
  {
    accessorKey: "countryName",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Country Name
          <div className="flex flex-col gap-0.5">
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              color={isAsc ? "#D2D6E8" : "#313131"}
              className="size-1.5"
            />
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              className="rotate-180 size-1.5"
              color={isDesc ? "#D2D6E8" : "#313131"}
            />
          </div>
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs font-bold">
        {row.original.countryName}
      </span>
    ),
  },
  {
    accessorKey: "capital",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Capital</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.capital}</span>
    ),
  },
  {
    accessorKey: "region",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Region</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.region}</span>
    ),
  },
  {
    accessorKey: "mainCurrency",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Main Currency</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">
        {row.original.mainCurrency}
      </span>
    ),
  },
  {
    accessorKey: "symbol",
    header: () => (
      <span className="text-[#3A3A3A] font-bold text-xs">Symbol</span>
    ),
    cell: ({ row }) => (
      <span className="text-charcoal-gray text-xs">{row.original.symbol}</span>
    ),
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc";
      const isDesc = column.getIsSorted() === "desc";
      return (
        <Button
          variant="ghost"
          className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Date Created
          <div className="flex flex-col gap-0.5">
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              color={isAsc ? "#D2D6E8" : "#313131"}
              className="size-1.5"
            />
            <Icon
              icon="bxs:up-arrow"
              width={4}
              height={4}
              className="rotate-180 size-1.5"
              color={isDesc ? "#D2D6E8" : "#313131"}
            />
          </div>
        </Button>
      );
    },
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
    cell: () => (
      <div className="flex gap-2 items-center">
        <Button variant="ghost" className="size-6 p-0">
          <Icon icon="mdi:pencil" width={16} height={16} color="#29C153" />
        </Button>
        <Button variant="ghost" className="size-6 p-0">
          <Icon icon="mdi:delete" width={16} height={16} color="#FE8F76" />
        </Button>
      </div>
    ),
  },
];
