import type { Transaction } from "../utils/types";
import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import { recentTransactionTableColumns } from "./RecentTransactionsTableColumn";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";

const RecentTransactions = () => {
  const data: Transaction[] = [
    {
      id: "1",
      customer: "Judith Dimokechukwu",
      amount: 1000,
      type: "Money Transfer",
      currency: "AUD",
      status: "Initiated",
      date: "2025-05-27 19:25pm",
    },
    {
      id: "2",
      customer: "Judith Dimokechukwu",
      amount: 90000,
      type: "Bill Payment",
      currency: "AUD",
      status: "Completed",
      date: "2025-05-27 19:25pm",
    },
    {
      id: "3",
      customer: "Judith Dimokechukwu",
      amount: 7000,
      type: "Money Transfer",
      currency: "AUD",
      status: "Completed",
      date: "2025-05-27 19:25pm",
    },
    {
      id: "4",
      customer: "Judith Dimokechukwu",
      amount: 3000,
      type: "Money Transfer",
      currency: "AUD",
      status: "Initiated",
      date: "2025-05-27 19:25pm",
    },
    {
      id: "5",
      customer: "Judith Dimokechukwu",
      amount: 1500,
      type: "Money Transfer",
      currency: "AUD",
      status: "Initiated",
      date: "2025-05-27 19:25pm",
    },
    {
      id: "6",
      customer: "Judith Dimokechukwu",
      amount: 5000,
      type: "Money Transfer",
      currency: "AUD",
      status: "Completed",
      date: "2025-05-27 19:25pm",
    },
  ];

  return (
    <section className="w-full bg-white mt-8 py-3.5 px-4 rounded-x space-y-6">
      <div className="flex items-center justify-between">
        <TableHeading text="Recent Transactions" />
        <span className="uppercase text-primary text-sm -tracking-[5%] font-bold">
          SEE ALL
        </span>
      </div>

      <TableSearchFilterReport />

      <DataTable data={data} columns={recentTransactionTableColumns} />
    </section>
  );
};

export default RecentTransactions;
