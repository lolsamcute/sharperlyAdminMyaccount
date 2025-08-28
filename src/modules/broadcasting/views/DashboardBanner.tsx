import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";
import HeadingOne from "@/components/typography/HeadingOne";
import AddDashboardBannerModal from "../components/forms/AddDashboardBannerModal";

const DashboardBanner = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddBanner = () => setModalOpen(true);
  const handleModalSubmit = (data: { image: File | null; url?: string }) => {
    console.log(data, "data");
    // Handle banner upload logic here
    // e.g. upload to server, show toast, etc.
    setModalOpen(false);
  };

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <HeadingOne text="Dashboard Banner" />
        <Button
          className="bg-primary hover:bg-primary cursor-pointer w-full max-w-64 h-15 rounded-xl flex gap-2 items-center justify-center text-white font-medium text-base"
          onClick={handleAddBanner}
        >
          <Icon icon="ci:add-plus" width="20" height="20" color="#fff" />
          Add New Banner
        </Button>
      </div>

      <div className="bg-white w-full rounded-x min-h-190 py-15 px-10"></div>

      <AddDashboardBannerModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSubmit={handleModalSubmit}
      />
    </section>
  );
};

export default DashboardBanner;
