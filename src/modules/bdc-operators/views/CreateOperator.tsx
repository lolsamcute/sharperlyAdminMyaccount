import BreadCrumb from "@/components/common/BreadCrumb";
import HeadingOne from "@/components/typography/HeadingOne";
import CreateOperatorForm from "../components/CreateOperatorForm";

const CreateOperator = () => {
  return (
    <section className="space-y-8">
      <div>
        <HeadingOne text="BDC Operators" />
        <BreadCrumb
          route="bdc-operators"
          linkName="BDC Operator"
          subRoute={"Add new Operator"}
        />
      </div>
      <section className="bg-off-white space-y-8 px-4 pt-6 pb-13.5 rounded-lg min-h-187">
        <HeadingOne level={2} text="Add New Operator" className="!text-lg" />
        <CreateOperatorForm />
      </section>
    </section>
  );
};

export default CreateOperator;
