import { DataTable } from "@/components/common/DataTable";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import TableHeading from "@/components/typography/TableHeading";
import { dummyCreators } from "../utils/constants";
import { creatorsTableColumn } from "./CreatorsTableColumn";

const CreatorsListTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4">
        <TableHeading text="Creators" />

        <TableSearchFilterReport />

        <DataTable data={dummyCreators} columns={creatorsTableColumn} />
      </div>
    </section>
  );
};

export default CreatorsListTable;
