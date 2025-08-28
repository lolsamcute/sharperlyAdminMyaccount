import { DataTable } from "@/components/common/DataTable";
import HeadingOne from "@/components/typography/HeadingOne";
import { users } from "../utils/constants";
import { userVerificationsPageTableColumn } from "../components/UserVerificationsPageTableColumn";

const Verifications = () => {
  return (
    <section className="space-y-7">
      <HeadingOne text="User Verifications" />
      <section className="bg-white p-4 rounded-lg">
        <DataTable data={users} columns={userVerificationsPageTableColumn} />
      </section>
    </section>
  );
};

export default Verifications;
