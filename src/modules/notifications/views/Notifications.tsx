import HeadingOne from "@/components/typography/HeadingOne";
import BreadCrumb from "@/components/common/BreadCrumb";
import NotificationsList from "../components/NotificationsList";

const Notifications = () => {
  return (
    <section className="w-full px-2 md:px-6 py-6 space-y-8">
      <div>
        <HeadingOne text="Notifications" className="" />
        <BreadCrumb
          route="dashboard"
          linkName="Dashboard"
          subRoute={<span>Notifications</span>}
        />
      </div>

      <div className="w-full">
        <NotificationsList />
      </div>
    </section>
  );
};

export default Notifications;
