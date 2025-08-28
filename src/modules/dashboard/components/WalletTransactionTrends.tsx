import WalletTransactionTrendChart from "./WalletTransactionTrendChart";

const WalletTransactionTrends = () => {
  return (
    <section className="w-full bg-white rounded-xl p-6 mt-8">
      <h2 className="capitalize font-semibold text-xl text-primary2 leading-6">
        Wallet Transactions Trends
      </h2>

      <WalletTransactionTrendChart />
    </section>
  );
};

export default WalletTransactionTrends;
