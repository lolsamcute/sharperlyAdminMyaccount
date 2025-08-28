import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
} from "react-router-dom";

import App from "../App";
import AdminLayout from "@/layouts/AdminLayout";
import Wallet from "@/modules/wallet/views/Wallet";
import UserTab from "@/modules/users/views/UserTab";
import AllUsers from "@/modules/users/views/AllUsers";
import LoginPage from "@/modules/auth/views/LoginPage";
import Referrals from "@/modules/users/views/Referrals";
import Dashboard from "@/modules/dashboard/views/Dashboard";
import EditProfile from "@/modules/users/views/EditProfile";
import UserAnalytics from "@/modules/users/views/UserAnalytics";
import Verifications from "@/modules/users/views/Verifications";
import AllTransactions from "@/modules/transactions/views/AllTransactions";
import TransactionDetail from "@/modules/transactions/views/TransactionDetail";
import FundsTransactionDetail from "@/modules/wallet/views/FundsTransactionDetails";
import RefundTransactionDetail from "@/modules/wallet/views/FundsTransactionDetails";
import TransactionAnalytics from "@/modules/transactions/views/TransactionAnalytics";
import WithdrawalTransactionDetail from "@/modules/wallet/views/WithdrawalTransactionDetail";
import MoneyTransfer from "@/modules/transactions/views/MoneyTransfer";
import WalletFunding from "@/modules/transactions/views/WalletFunding";
import TopUsers from "@/modules/transactions/views/TopUsers";
import BillPayment from "@/modules/transactions/views/BillPayment";
import Rates from "@/modules/rates/views/Rates";
import CreateRate from "@/modules/rates/views/CreateRate";
import OfficialBidRate from "@/modules/rates/views/OfficialBidRate";
import ManageOperators from "@/modules/bdc-operators/views/ManageOperators";
import CreateOperator from "@/modules/bdc-operators/views/CreateOperator";
import Location from "@/modules/location/views/Location";
import CreateState from "@/modules/location/views/CreateState";
import CreateCountry from "@/modules/location/views/CreateCountry";
import CreateRegion from "@/modules/location/views/CreateRegion";
import Ratings from "@/modules/ratings/views/Ratings";
import Notifications from "@/modules/notifications/views/Notifications";
import AuditLogs from "@/modules/auditlogs/views/AuditLogs";
import AuditTrailDetail from "@/modules/auditlogs/views/AuditTrailDetail";
import AuditLogDetail from "@/modules/auditlogs/views/AuditLogDetail";
import Settings from "@/modules/settings/views/Settings";
import EditRole from "@/modules/settings/views/EditRole";
import Campaigns from "@/modules/broadcasting/views/Campaigns";
import CreatorDetail from "@/modules/broadcasting/views/CreatorDetail";
import PushNotification from "@/modules/broadcasting/views/PushNotification";
import BulkEmailView from "@/modules/broadcasting/views/BulkEmailView";
import DashboardNotification from "@/modules/broadcasting/views/DashboardNotification";
import DashboardBanner from "@/modules/broadcasting/views/DashboardBanner";

const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      // --- Standard Routes ---
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", element: <Dashboard /> },

      { path: "/notifications", element: <Notifications /> },
      { path: "/ratings", element: <Ratings /> },
      { path: "/audit-logs", element: <AuditLogs /> },
      { path: "/audit-logs/trail/:id", element: <AuditTrailDetail /> },
      { path: "/audit-logs/:id", element: <AuditLogDetail /> },
      { path: "/settings", element: <Settings /> },
      { path: "/settings/edit-role", element: <EditRole /> },

      // --- User Routes --- // Main route
      { path: "/all-users", element: <AllUsers /> },
      {
        path: "/user/:id",
        element: (
          <>
            <UserTab />
          </>
        ),
      },
      { path: "/referrals", element: <Referrals /> },
      { path: "/user-analytics", element: <UserAnalytics /> },
      { path: "/verifications", element: <Verifications /> },
      { path: "/edit-user-profile/:id", element: <EditProfile /> },

      // --- BDC Operators Routes ---
      { path: "/bdc-operators", element: <ManageOperators /> },
      { path: "/bdc-operators/add-new-operator", element: <CreateOperator /> },

      // --- Rates Routes ---
      { path: "/rates", element: <Rates /> },
      { path: "/rates/create", element: <CreateRate /> },
      { path: "/rates/create/official", element: <OfficialBidRate /> },

      // --- Location Routes ---
      { path: "/location", element: <Location /> },
      { path: "/location/create/country", element: <CreateCountry /> },
      { path: "/location/create/state", element: <CreateState /> },
      { path: "/location/create/region", element: <CreateRegion /> },

      // --- Wallet Routes ---
      { path: "/wallets", element: <Wallet /> },
      { path: "/wallets/funds/:id", element: <FundsTransactionDetail /> },
      {
        path: "/wallets/withdrawal/:id",
        element: <WithdrawalTransactionDetail />,
      },
      { path: "/wallets/refund/:id", element: <RefundTransactionDetail /> },

      // --- Transaction Routes ---
      { path: "/all-transactions", element: <AllTransactions /> },
      { path: "/transaction/:id", element: <TransactionDetail /> },
      { path: "/money-transfers", element: <MoneyTransfer /> },
      { path: "/bill-payment", element: <BillPayment /> },
      { path: "/wallet-funding", element: <WalletFunding /> },
      { path: "/analytics", element: <TransactionAnalytics /> },
      { path: "/top-users", element: <TopUsers /> },

      // --- Broadcasting Routes ---
      { path: "/campaigns", element: <Campaigns /> },
      { path: "/campaigns/creator/:id", element: <CreatorDetail /> },
      { path: "/push-notification", element: <PushNotification /> },
      { path: "/dashboard-dialogue", element: <DashboardNotification /> },
      { path: "/bulk-email", element: <BulkEmailView /> },
      { path: "/banners", element: <DashboardBanner /> },
    ],
  },
];

// Unprotected routes
const unprotectedRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];

// Main router configuration
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />, // App component acts as the root boundary
    errorElement: <></>, // A global error element
    children: [...unprotectedRoutes, ...protectedRoutes],
  },
];

// Create the router instance
const router = createBrowserRouter(routes);

export default router;
