import BreadCrumb from "@/components/common/BreadCrumb";
import HeadingOne from "@/components/typography/HeadingOne";
import CreateRateForm from "../components/CreateRateForm";

const CreateRate = () => {
  return (
    <section className="space-y-8">
      <div>
        <HeadingOne text="Rates" />

        <BreadCrumb
          route="rates"
          linkName="Bidding Rates"
          subRoute={"Create new Rate"}
        />
      </div>

      <section className="bg-off-white px-4 pt-6 pb-13.5 rounded-lg">
        <CreateRateForm />
      </section>
    </section>
  );
};

export default CreateRate;
