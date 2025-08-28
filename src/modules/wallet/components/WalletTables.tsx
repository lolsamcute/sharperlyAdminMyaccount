import TableHeading from "@/components/typography/TableHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { DataTable } from "@/components/common/DataTable";
import {
  walletFundTransactions,
  walletRefundTransactions,
  walletWithdrawalTransactions,
} from "../utils/constants";
import { walletFundTransactionTableColumn } from "./WalletFundTransactionTableColumn";
import { walletWithdrawalTransactionTableColumn } from "./WalletWithdrawalTransactionTableColumn";
import { walletRefundTransactionTableColumn } from "./WalletRefundTransactionTable";

const WalletTables = () => {
  return (
    <Tabs defaultValue="Refund" className="w-full">
      <section className="mt-12.5 bg-white rounded-x p-4 space-y-8">
        <TabsList className="w-full max-w-117.5 flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
          <TabsTrigger
            value="Funds"
            className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Funds
          </TabsTrigger>
          <TabsTrigger
            value="Withdrawal"
            className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Withdrawal
          </TabsTrigger>
          <TabsTrigger
            value="Refund"
            className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Refund
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-7">
          <TableHeading text="Wallet Transaction" />
          <div className="flex-1 w-full">
            <TableSearchFilterReport />
          </div>
        </div>

        <TabsContent value="Funds">
          <DataTable
            data={walletFundTransactions}
            columns={walletFundTransactionTableColumn}
          />
        </TabsContent>
        <TabsContent value="Withdrawal">
          <DataTable
            data={walletWithdrawalTransactions}
            columns={walletWithdrawalTransactionTableColumn}
          />
        </TabsContent>
        <TabsContent value="Refund">
          <DataTable
            data={walletRefundTransactions}
            columns={walletRefundTransactionTableColumn}
          />
        </TabsContent>
      </section>
    </Tabs>
  );
};

export default WalletTables;
