import HeadingOne from "@/components/typography/HeadingOne";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

type RatesHeaderProps = {
  activeTab: "bidding" | "official";
};

const RatesHeader = ({ activeTab }: RatesHeaderProps) => {
  const navigate = useNavigate();

  const navigateToCreateRate = () => {
    navigate(
      activeTab === "bidding" ? "/rates/create" : "/rates/create/official"
    );
  };

  return (
    <section className="flex items-center justify-between">
      <HeadingOne text="Rates" />

      <Button
        onClick={navigateToCreateRate}
        className="bg-primary hover:bg-primary w-full max-w-64 h-15 rounded-xl flex gap-2 items-center justify-center text-white font-medium text-base"
      >
        <Icon icon="ci:add-plus" width="20" height="20" color="#fff" /> New{" "}
        {activeTab === "bidding" ? "Bidding" : "Official"} Rate
      </Button>
    </section>
  );
};

export default RatesHeader;
