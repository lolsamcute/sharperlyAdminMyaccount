import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import type { ColumnDef } from "@tanstack/react-table";

interface EmailHistoryEntry {
  id: string;
  subject: string;
  category: string;
  template: string;
  recipients: number;
  sentDate: string;
  status: "Sent" | "Pending" | "Failed";
}

const dummyEmailHistory: EmailHistoryEntry[] = [
  {
    id: "1",
    subject: "Welcome to Sharperly",
    category: "Marketing",
    template: "Welcome Template",
    recipients: 1250,
    sentDate: "2025-08-19 14:30:00",
    status: "Sent",
  },
  {
    id: "2",
    subject: "Monthly Newsletter",
    category: "Newsletter",
    template: "Newsletter Template",
    recipients: 850,
    sentDate: "2025-08-18 10:15:00",
    status: "Sent",
  },
  {
    id: "3",
    subject: "Special Promotion",
    category: "Promotional",
    template: "Promotional Template",
    recipients: 500,
    sentDate: "2025-08-17 16:45:00",
    status: "Failed",
  },
];

const emailHistoryColumns: ColumnDef<EmailHistoryEntry>[] = [
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "template",
    header: "Template",
  },
  {
    accessorKey: "recipients",
    header: "Recipients",
  },
  {
    accessorKey: "sentDate",
    header: "Sent Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as EmailHistoryEntry["status"];
      const statusColors = {
        Sent: "bg-green-100 text-green-600",
        Pending: "bg-yellow-100 text-yellow-600",
        Failed: "bg-red-100 text-red-600",
      };

      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
        >
          {status}
        </span>
      );
    },
  },
];

const EmailHistory = () => {
  return (
    <section className="space-y-6">
      <div className="bg-white p-6 space-y-4 rounded-lg">
        <TableHeading text="Email History" />
        <TableSearchFilterReport />
        <DataTable data={dummyEmailHistory} columns={emailHistoryColumns} />
      </div>
    </section>
  );
};

export default EmailHistory;
