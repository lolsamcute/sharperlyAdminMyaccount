import { DataTable } from "@/components/common/DataTable";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { customerRecords } from "../utils/constants";
import { topUsersTableColumn } from "./TopUsersTableColumn";

const TopUsersTable = () => {
  return (
    <Tabs defaultValue="Money Transfer" className="w-full">
      <section className="bg-white rounded-x p-4 space-y-8">
        <TabsList className="w-full flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
          <TabsTrigger
            value="Money Transfer"
            className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Money Transfer
          </TabsTrigger>
          <TabsTrigger
            value="Wallet Funding"
            className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Wallet Funding
          </TabsTrigger>
          <TabsTrigger
            value="Airtime"
            className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Airtime
          </TabsTrigger>
          <TabsTrigger
            value="Data"
            className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Data
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

        <TableSearchFilterReport />

        <DataTable data={customerRecords} columns={topUsersTableColumn} />
      </section>
    </Tabs>
  );
};

export default TopUsersTable;
