import HeadingOne from "@/components/typography/HeadingOne";
import WalletFundingCardInfo from "../components/WalletFundingCardInfo";
import WalletFundingTable from "../components/WalletFundingTable";

const WalletFunding = () => {
  return (
    <section className="space-y-8">
      <HeadingOne text="Wallet Funding" />

      <WalletFundingCardInfo />

      <WalletFundingTable />
    </section>
  );
};

export default WalletFunding;
