import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { allTransactions } from "../utils/constants";
import { allTransactionsTableColumn } from "./AllTransactionsTableColumn";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BillPaymentTable = () => {
  return (
    <Tabs defaultValue="Airtime" className="w-full">
      <section className="mt-8">
        <div className="bg-white p-4 space-y-4">
          <div className="flex gap-8 items-center justify-between">
            <TableHeading text="Bills Payment History" />

            <TabsList className="w-full flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
              <TabsTrigger
                value="Airtime"
                className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Airtime
              </TabsTrigger>
              <TabsTrigger
                value="Data Bundle"
                className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Data Bundle
              </TabsTrigger>
              <TabsTrigger
                value="Cable TV"
                className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Cable TV
              </TabsTrigger>
              <TabsTrigger
                value="Internet Services"
                className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Internet Services
              </TabsTrigger>
              <TabsTrigger
                value="Electricity"
                className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
              >
                Electricity
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

export default BillPaymentTable;
