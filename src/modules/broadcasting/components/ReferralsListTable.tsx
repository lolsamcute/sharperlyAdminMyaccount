import { DataTable } from "@/components/common/DataTable";
import TableHeading from "@/components/typography/TableHeading";
import { dummyReferrals } from "../utils/constants";
import { referralsTableColumn } from "./ReferralsTableColumn";

const ReferralsListTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4">
        <TableHeading text="Referrals" />
        <DataTable data={dummyReferrals} columns={referralsTableColumn} />
      </div>
    </section>
  );
};

export default ReferralsListTable;
