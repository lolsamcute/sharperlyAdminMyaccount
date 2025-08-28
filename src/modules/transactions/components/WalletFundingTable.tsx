import { DataTable } from "@/components/common/DataTable";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import TableHeading from "@/components/typography/TableHeading";
import { walletFundingTransactions } from "../utils/constants";
import { walletFundingTableColumn } from "./WalletFundingTableColumn";

const WalletFundingTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4">
        <TableHeading text="Wallet Funding" />

        <TableSearchFilterReport />

        <DataTable
          data={walletFundingTransactions}
          columns={walletFundingTableColumn}
        />
      </div>
    </section>
  );
};

export default WalletFundingTable;
