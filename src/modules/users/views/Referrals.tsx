import ReferralCardInfo from "../components/ReferralCardInfo";
import ReferralPageHeader from "../components/ReferralPageHeader";
import ReferralPageTable from "../components/ReferralPageTable";

const Referrals = () => {
  return (
    <section className="space-y-8">
      <ReferralPageHeader />
      <ReferralCardInfo />
      <ReferralPageTable />
    </section>
  );
};

export default Referrals;
