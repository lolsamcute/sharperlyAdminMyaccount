import { DataTable } from "@/components/common/DataTable";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rateRecords } from "../utils/constants";
import { ratesTableColumn } from "./RatesTableColumn";

type RatesTableProps = {
  activeTab: "bidding" | "official";
  onTabChange: (tab: "bidding" | "official") => void;
};

const RatesTable = ({ activeTab, onTabChange }: RatesTableProps) => {
  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => onTabChange(value as "bidding" | "official")}
      className="w-full"
    >
      <section className="bg-white rounded-x p-4 space-y-8">
        <TabsList className="w-full max-w-xs flex-1 space-x-12 rounded-lg h-17.5 p-4 overflow-clip bg-grey-1 border-[0.3px] border-primary">
          <TabsTrigger
            value="bidding"
            className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Bidding Rates
          </TabsTrigger>
          <TabsTrigger
            value="official"
            className="text-secondary-black p-2.5 text-xs font-medium data-[state=active]:shadow-[0px_1px_4px_0px_#4700D640] w-fit flex justify-center h-10 items-center !bg-none data-[state=active]:bg-white data-[state=active]:rounded data-[state=active]:text-primary"
          >
            Official Rates
          </TabsTrigger>
        </TabsList>

        <TableSearchFilterReport />

        <DataTable data={rateRecords} columns={ratesTableColumn} />
      </section>
    </Tabs>
  );
};

export default RatesTable;
