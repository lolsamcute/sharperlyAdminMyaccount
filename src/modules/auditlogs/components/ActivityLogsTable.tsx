import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { auditLogsTableColumn } from "./AuditLogsTableColumn";
import { auditLogs } from "../utils/constants";

const ActivityLogsTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4">
        <div className="flex gap-8 items-center justify-between">
          <TableHeading text="Activity Log" />
        </div>
        <TableSearchFilterReport />
        <DataTable data={auditLogs} columns={auditLogsTableColumn} />
      </div>
    </section>
  );
};

export default ActivityLogsTable;
