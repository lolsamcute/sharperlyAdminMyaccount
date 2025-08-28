import BreadCrumb from "@/components/common/BreadCrumb";
import HeadingOne from "@/components/typography/HeadingOne";
import CreateStateForm from "../components/CreateStateForm";

const CreateState = () => {
  return (
    <section className="space-y-8">
      <div>
        <HeadingOne text="Location" />
        <BreadCrumb route="location" linkName="State" subRoute={"Add State"} />
      </div>
      <section className="bg-off-white px-4 pt-6 pb-13.5 rounded-lg space-y-8">
        <HeadingOne text="Add New State" className="!text-lg" level={2} />
        <CreateStateForm />
      </section>
    </section>
  );
};

export default CreateState;
