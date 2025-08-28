import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { auditTrailTableColumn } from "./AuditTrailTableColumn";
import { auditTrails } from "../utils/constants";

const AuditTrailTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4">
        <div className="flex gap-8 items-center justify-between">
          <TableHeading text="Audit Trail" />
        </div>
        <TableSearchFilterReport />
        <DataTable data={auditTrails} columns={auditTrailTableColumn} />
      </div>
    </section>
  );
};

export default AuditTrailTable;
