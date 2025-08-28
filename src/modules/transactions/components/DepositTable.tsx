import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { allTransactions } from "../utils/constants";
import { allTransactionsTableColumn } from "./AllTransactionsTableColumn";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DepositTable = () => {
  return (
    <Tabs defaultValue="With Bid" className="w-full">
      <section className="mt-8">
        <div className="bg-white p-4 space-y-4">
          <div className="flex gap-20 items-center justify-between w-150">
            <TableHeading text="Deposit History" />

            <TabsList className="w-full max-w-117.5 flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
              <TabsTrigger
                value="With Bid"
                className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                With Bid
              </TabsTrigger>
              <TabsTrigger
                value="Without Bid"
                className="text-secondary-black p-2.5 text-base font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-16 flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Without Bid
              </TabsTrigger>
            </TabsList>
          </div>

          <TableSearchFilterReport />

          <DataTable
            data={allTransactions}
            columns={allTransactionsTableColumn}
          />
        </div>
      </section>
    </Tabs>
  );
};

export default DepositTable;
