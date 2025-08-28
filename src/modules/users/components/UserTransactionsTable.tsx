import { transactions } from "../utils/constants";
import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { UserTransactionsTableColumn } from "./UserTransactionsTableColumn";

const UserTransactionsTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4">
        <TableHeading text="All Transactions" />

        <TableSearchFilterReport />

        <DataTable data={transactions} columns={UserTransactionsTableColumn} />
      </div>
    </section>
  );
};

export default UserTransactionsTable;
