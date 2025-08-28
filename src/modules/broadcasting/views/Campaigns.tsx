import { Button } from "@/components/ui/button";
import CreatorsListTable from "../components/CreatorsListTable";
import { Icon } from "@iconify/react/dist/iconify.js";
import HeadingOne from "@/components/typography/HeadingOne";

const Campaigns = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <HeadingOne text="Campaigns" />

        <Button className="bg-primary hover:bg-primary cursor-pointer w-full max-w-64 h-15 rounded-xl flex gap-2 items-center justify-center text-white font-medium text-base">
          <Icon icon="ci:add-plus" width="20" height="20" color="#fff" />
          Add New Creator
        </Button>
      </div>

      <CreatorsListTable />
    </section>
  );
};

export default Campaigns;
