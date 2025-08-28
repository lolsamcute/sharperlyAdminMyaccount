import type {
  ServiceToggle,
  BankOption,
  PaymentOption,
  ChatOption,
  Admin,
  Role,
} from "./types";

export const serviceToggles: ServiceToggle[] = [
  { label: "Money Transfer", value: "money_transfer", enabled: true },
  { label: "Airtime", value: "airtime", enabled: true },
  { label: "Wallet Withdrawal", value: "wallet_withdrawal", enabled: true },
  { label: "Internet Services", value: "internet_services", enabled: true },
  { label: "Wallet Funding", value: "wallet_funding", enabled: true },
  { label: "Cable TV", value: "cable_tv", enabled: true },
  { label: "Data Subscription", value: "data_subscription", enabled: true },
  { label: "Electricity", value: "electricity", enabled: true },
  { label: "Campaigns", value: "campaigns", enabled: true },
];

export const bankOptions: BankOption[] = [
  { label: "Access Bank", value: "access_bank" },
  { label: "GTBank", value: "gtbank" },
  { label: "Zenith Bank", value: "zenith_bank" },
];

export const paymentOptions: PaymentOption[] = [
  { label: "Monova", value: "monova" },
  { label: "Flutterwave", value: "flutterwave" },
  { label: "Paystack", value: "paystack" },
];

export const chatOptions: ChatOption[] = [
  { label: "Tawkto", value: "tawkto" },
  { label: "Intercom", value: "intercom" },
  { label: "Zendesk", value: "zendesk" },
];

export const adminList: Admin[] = [
  {
    name: "Chibuike Marvelous",
    email: "chibuikemarvelous@sharperly.com",
    role: "CEO",
  },
  { name: "SamuelSalami", email: "samuelsalami@sharperly.com", role: "CTO" },
  {
    name: "Elizabeth Nana",
    email: "elizabethnana@sharperly.com",
    role: "Product Manager",
  },
];

export const roleList: Role[] = [
  { role: "CEO", type: "Custom", admins: "1 Admin", description: "---" },
  {
    role: "Product Manager",
    type: "Custom",
    admins: "1 Admin",
    description:
      "Oversees feature rollouts, dashboard updates, and prioritizes internal tools based on business goals.",
  },
  {
    role: "Customer Support",
    type: "Custom",
    admins: "2 Admin",
    description:
      "Resolves user complaints, handles refund requests, and responds to wallet or transaction issues.",
  },
  {
    role: "CTO",
    type: "Custom",
    admins: "1 Admin",
    description:
      "Manages platform integrations, API services, and ensures system performance meets financial standards.",
  },
  {
    role: "Compliance Officer",
    type: "Custom",
    admins: "1 Admin",
    description:
      "Ensures KYC/AML policies are enforced and approves identity verification or high-risk transactions.",
  },
];
