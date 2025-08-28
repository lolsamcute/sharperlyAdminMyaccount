import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";
import HeadingOne from "@/components/typography/HeadingOne";
import { DashboardNotificationTable } from "../components/DashboardNotificationTable";

const DashboardNotification = () => {
  const navigate = useNavigate();

  const handleNavigateToAddNotification = () => navigate("/push-notification");

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <HeadingOne text="Campaigns" />

        <Button
          onClick={handleNavigateToAddNotification}
          className="bg-primary hover:bg-primary cursor-pointer w-full max-w-64 h-15 rounded-xl flex gap-2 items-center justify-center text-white font-medium text-base"
        >
          <Icon icon="ci:add-plus" width="20" height="20" color="#fff" />
          Create New Notification
        </Button>
      </div>
      <div className="bg-white py-6 px-3 rounded-lg border">
        <DashboardNotificationTable />
      </div>
    </section>
  );
};

export default DashboardNotification;
