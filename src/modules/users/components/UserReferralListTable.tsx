import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import { userReferralListTableColumn } from "./UserReferralListTableColumn";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import { referrals } from "../utils/constants";

const UserReferralListTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4 rounded-lg">
        <TableHeading text="All Referred" />

        <TableSearchFilterReport />

        <DataTable data={referrals} columns={userReferralListTableColumn} />
      </div>
    </section>
  );
};

export default UserReferralListTable;
