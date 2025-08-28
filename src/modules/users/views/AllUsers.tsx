import UsersCardInfo from "../components/UsersCardInfo";
import UsersListTable from "../components/UsersListTable";

const AllUsers = () => {
  return (
    <section className="space-y-8">
      <UsersCardInfo />
      <UsersListTable />
    </section>
  );
};

export default AllUsers;
