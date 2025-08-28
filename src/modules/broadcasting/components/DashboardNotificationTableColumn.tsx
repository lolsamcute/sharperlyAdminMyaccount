import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { ColumnDef } from "@tanstack/react-table";
import type { DashboardNotification } from "../utils/types";

export const dashboardNotificationTableColumn: ColumnDef<DashboardNotification>[] =
  [
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
      accessorKey: "id",
      header: ({ column }) => {
        const isAsc = column.getIsSorted() === "asc";
        const isDesc = column.getIsSorted() === "desc";
        return (
          <Button
            variant="ghost"
            className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
            onClick={() => column.toggleSorting(isAsc)}
          >
            ID
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
          {row.original.id.padStart(2, "0")}
        </span>
      ),
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        const isAsc = column.getIsSorted() === "asc";
        const isDesc = column.getIsSorted() === "desc";
        return (
          <Button
            variant="ghost"
            className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
            onClick={() => column.toggleSorting(isAsc)}
          >
            Title
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
        <div className="text-charcoal-gray text-xs max-w-xs">
          <p className="whitespace-pre-line">{row.original.title}</p>
        </div>
      ),
    },
    {
      accessorKey: "targetUsers",
      header: ({ column }) => {
        const isAsc = column.getIsSorted() === "asc";
        const isDesc = column.getIsSorted() === "desc";
        return (
          <Button
            variant="ghost"
            className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
            onClick={() => column.toggleSorting(isAsc)}
          >
            Target Users
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
          {row.original.targetUsers}
        </span>
      ),
    },
    {
      accessorKey: "banner",
      header: ({ column }) => {
        const isAsc = column.getIsSorted() === "asc";
        const isDesc = column.getIsSorted() === "desc";
        return (
          <Button
            variant="ghost"
            className="text-[#3A3A3A] font-bold text-xs flex items-center gap-1"
            onClick={() => column.toggleSorting(isAsc)}
          >
            Banner
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
        <div className="flex items-center gap-2">
          {row.original.banner === "No Banner" ? (
            <span className="text-charcoal-gray text-xs">
              {row.original.banner}
            </span>
          ) : (
            <Icon icon="mdi:eye" width={16} height={16} color="#6C40E4" />
          )}
        </div>
      ),
    },
    {
      id: "actions",
      header: () => (
        <span className="text-[#3A3A3A] font-bold text-xs">Action</span>
      ),
      cell: ({ row }) => (
        <div className="flex gap-3 items-center">
          <Button
            className={`flex items-center justify-center !text-x font-semibold rounded shadow-none w-22.5 h-7.5 ${
              row.original.status === "Activate"
                ? "bg-green2 text-white hover:bg-green2"
                : "border border-red2 text-red2 bg-white"
            }`}
          >
            {row.original.status}
          </Button>
          <Icon width="20" height="20" color="#0C0033" icon="ri:edit-2-line" />
          <Icon
            width="20"
            height="20"
            icon="ri:delete-bin-6-line"
            color="var(--color-red2)"
          />
        </div>
      ),
    },
  ];
