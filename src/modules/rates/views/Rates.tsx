import { useState } from "react";
import RatesHeader from "../components/RatesHeader";
import RatesTable from "../components/RatesTable";

export type RateTabType = "bidding" | "official";

const Rates = () => {
  const [activeTab, setActiveTab] = useState<RateTabType>("bidding");

  return (
    <section className="space-y-8">
      <RatesHeader activeTab={activeTab} />
      <RatesTable activeTab={activeTab} onTabChange={setActiveTab} />
    </section>
  );
};

export default Rates;
