import BreadCrumb from "@/components/common/BreadCrumb";
import HeadingOne from "@/components/typography/HeadingOne";
import CreateOfficialBidRateForm from "../components/CreateOfficialBidRateForm";

const OfficialBidRate = () => {
  return (
    <section className="space-y-8">
      <div>
        <HeadingOne text="Rates" />

        <BreadCrumb
          route="rates"
          linkName="Official Rates"
          subRoute={"Create new Rate"}
        />
      </div>

      <section className="bg-off-white px-4 pt-6 pb-13.5 rounded-lg">
        <CreateOfficialBidRateForm />
      </section>
    </section>
  );
};

export default OfficialBidRate;
