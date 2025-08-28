import WalletTransactionTrendChart from "./WalletTransactionTrendChart";

const WalletTransactionTrends = () => {
  return (
    <section className="w-full bg-white rounded-lg p-6 mt-8 border border-gray-100 shadow-sm">
      <h2 className="font-semibold text-lg text-gray-900 leading-6">
        Wallet Transactions Trends
      </h2>

      <WalletTransactionTrendChart />
    </section>
  );
};

export default WalletTransactionTrends;
