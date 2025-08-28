import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { ratingsTableColumn } from "./RatingsTableColumn";
import { ratingsData } from "../utils/constants";

const RatingsTable = () => {
  return (
    <section className="mt-8">
      <div className="bg-white p-4 space-y-4">
        <div className="flex gap-8 items-center justify-between">
          <TableHeading text="All Ratings & Feedback" />
        </div>
        <TableSearchFilterReport />
        <DataTable data={ratingsData} columns={ratingsTableColumn} />
      </div>
    </section>
  );
};

export default RatingsTable;
