import { referralsTwo } from "../utils/constants";
import { DataTable } from "@/components/common/DataTable";
import { referralPageTableColumn } from "./ReferralPageTableColumn";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";

const ReferralPageTable = () => {
  return (
    <section className="bg-white p-4 space-y-4 rounded-lg">
      <TableSearchFilterReport />

      <DataTable data={referralsTwo} columns={referralPageTableColumn} />
    </section>
  );
};

export default ReferralPageTable;
