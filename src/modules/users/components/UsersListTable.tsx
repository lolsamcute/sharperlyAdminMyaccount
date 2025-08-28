import { DataTable } from "@/components/common/DataTable";
import TableSearchFilterReport from "@/components/common/table-search-filter-download";
import TableHeading from "@/components/typography/TableHeading";
import { dummyUsers } from "../utils/constants";
import { usersListTableColumn } from "./UsersListTableColumn";

const UsersListTable = () => {
  return (
    <section className="">
      <div className="bg-white p-4 space-y-4">
        <TableHeading text="Users List" />

        <TableSearchFilterReport />

        <DataTable data={dummyUsers} columns={usersListTableColumn} />
      </div>
    </section>
  );
};

export default UsersListTable;
