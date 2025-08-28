import BreadCrumb from "@/components/common/BreadCrumb";
import HeadingOne from "@/components/typography/HeadingOne";
import CreateCountryForm from "../components/CreateCountryForm";

const CreateCountry = () => {
  return (
    <section className="space-y-8">
      <div>
        <HeadingOne text="Location" />
        <BreadCrumb
          route="location"
          linkName="Country"
          subRoute={"Add Country"}
        />
      </div>
      <section className="bg-off-white px-4 pt-6 pb-13.5 rounded-lg space-y-8">
        <HeadingOne text="Add New Country" className="!text-lg" level={2} />
        <CreateCountryForm />
      </section>
    </section>
  );
};

export default CreateCountry;
