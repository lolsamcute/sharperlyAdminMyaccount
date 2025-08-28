import { DataTable } from "@/components/common/DataTable";
import { dashboardNotificationTableColumn } from "./DashboardNotificationTableColumn";
import { dashboardNotificationRecords } from "../utils/constants";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";

export const DashboardNotificationTable = () => {
  return (
    <div className="w-full space-y-5">
      <TableSearchFilterReport />
      <DataTable
        columns={dashboardNotificationTableColumn}
        data={dashboardNotificationRecords}
      />
    </div>
  );
};
