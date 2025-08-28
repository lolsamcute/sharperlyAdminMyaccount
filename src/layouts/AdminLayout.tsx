import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <section>
      <Sidebar />

      <section className="flex-1 ml-79">
        <TopBar />
        <section className="bg-grey-1 rounded-3xl overflow-y-scroll pt-7.5 pb-12.5 px-3 sm:px-5 xl:px-9 mr-10 min-[1440px]:mr-20 font-poppins">
          <Outlet />
        </section>
      </section>
    </section>
  );
};

export default AdminLayout;
