import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { allTransactions } from "../utils/constants";
import { allTransactionsTableColumn } from "./AllTransactionsTableColumn";

const TransactionHistoryTable = () => {
  return (
    <section className="mt-8">
      <div className="bg-white p-4 space-y-4">
        <TableHeading text="Transaction History" />

        <TableSearchFilterReport />

        <DataTable
          data={allTransactions}
          columns={allTransactionsTableColumn}
        />
      </div>
    </section>
  );
};

export default TransactionHistoryTable;
