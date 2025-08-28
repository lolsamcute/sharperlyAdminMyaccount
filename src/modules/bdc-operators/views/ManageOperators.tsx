import BdcOperatorsTableHeader from "../components/BdcOperatorsTableHeader";
import { DataTable } from "@/components/common/DataTable";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { bdcOperatorRecords } from "../utils/constants";
import { bdcOperatorsTableColumn } from "../components/BdcOperatorsTableColumn";
import TableHeading from "@/components/typography/TableHeading";

const ManageOperators = () => {
  return (
    <section className="space-y-8">
      <BdcOperatorsTableHeader />
      <section className="bg-white rounded-x p-4 space-y-8">
        <TableHeading text="Manage Operators" className="!font-semibold" />
        <TableSearchFilterReport />
        <DataTable
          data={bdcOperatorRecords}
          columns={bdcOperatorsTableColumn}
        />
      </section>
    </section>
  );
};

export default ManageOperators;
