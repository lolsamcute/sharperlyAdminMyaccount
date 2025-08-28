import BreadCrumb from "@/components/common/BreadCrumb";
import HeadingOne from "@/components/typography/HeadingOne";
import CreateRegionForm from "../components/CreateRegionForm";

const CreateRegion = () => {
  return (
    <section className="space-y-8">
      <div>
        <HeadingOne text="Location" />
        <BreadCrumb
          route="location"
          linkName="Region"
          subRoute={"Add Region"}
        />
      </div>
      <section className="bg-off-white px-4 pt-6 pb-13.5 rounded-lg space-y-8">
        <HeadingOne text="Add New Region" className="!text-lg" level={2} />
        <CreateRegionForm />
      </section>
    </section>
  );
};

export default CreateRegion;
