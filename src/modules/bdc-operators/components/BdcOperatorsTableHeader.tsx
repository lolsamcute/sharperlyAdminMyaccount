import HeadingOne from "@/components/typography/HeadingOne";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const BdcOperatorsTableHeader = () => {
  const navigate = useNavigate();

  const handleAddOperator = () => {
    navigate("/bdc-operators/add-new-operator");
  };

  return (
    <section className="flex items-center justify-between mb-6">
      <HeadingOne text="BDC Operators" />
      <Button
        className="bg-primary hover:bg-primary cursor-pointer w-full max-w-64 h-15 rounded-xl flex gap-2 items-center justify-center text-white font-medium text-base"
        onClick={handleAddOperator}
      >
        <Icon icon="ci:add-plus" width="20" height="20" color="#fff" />
        Add Operator
      </Button>
    </section>
  );
};

export default BdcOperatorsTableHeader;
