import BillPayment from "../components/BillPayment";
import DashboardCardInfo from "../components/DashboardCardInfo";
import DashboardHeader from "../components/DashboardHeader";
import RateChart from "../components/RateChart";
import RecentTransactions from "../components/RecentTransactions";
import TransactionSummary from "../components/TransactionSummary";
import UsersChart from "../components/UsersChart";
import WalletTransactionTrends from "../components/WalletTransactionTrends";

const Dashboard = () => {
  return (
    <section>
      <DashboardHeader />
      <DashboardCardInfo />
      <section className="mt-8 flex gap-4">
        <BillPayment />
        <TransactionSummary />
      </section>
      <section className="mt-8 flex gap-4">
        <UsersChart />
        <RateChart />
      </section>
      <WalletTransactionTrends />
      <RecentTransactions />
    </section>
  );
};

export default Dashboard;
