import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { walletTransactions } from "../utils/constants";
import { userWalletTransactionsTableColumn } from "./UserWalletTransactionsTableColumn";

const UserWalletTransactionsTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4">
        <TableHeading text="Wallet Transactions" />

        <TableSearchFilterReport />

        <DataTable
          data={walletTransactions}
          columns={userWalletTransactionsTableColumn}
        />
      </div>
    </section>
  );
};

export default UserWalletTransactionsTable;
