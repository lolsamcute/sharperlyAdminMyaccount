import type { Creator, Referral, DashboardNotification } from "./types";

export const destinationOptions = [
  { label: "All Users", value: "all_users" },
  { label: "Active Users", value: "active_users" },
  { label: "Inactive Users", value: "inactive_users" },
  { label: "Creators", value: "creators" },
  { label: "Referrals", value: "referrals" },
];

export const categoryOptions = [
  { label: "Marketing", value: "marketing" },
  { label: "Promotional", value: "promotional" },
  { label: "Transactional", value: "transactional" },
  { label: "Updates", value: "updates" },
  { label: "Newsletter", value: "newsletter" },
];

export const emailTemplateOptions = [
  { label: "Welcome Template", value: "welcome_template" },
  { label: "Promotional Template", value: "promotional_template" },
  { label: "Newsletter Template", value: "newsletter_template" },
  { label: "Update Template", value: "update_template" },
  { label: "Custom Template", value: "custom_template" },
];

export const dummyCreators: Creator[] = [
  {
    id: "1",
    fullName: "Anabel Adindu",
    email: "anabeladindu@sharperly.com",
    phone: "+1 (382) 453-8782",
    status: "Active",
    refCode: "ANN234",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    id: "2",
    fullName: "Anabel Adindu",
    email: "anabeladindu@sharperly.com",
    phone: "+1 (382) 453-8782",
    status: "Active",
    refCode: "ANN234",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    id: "3",
    fullName: "Anabel Adindu",
    email: "anabeladindu@sharperly.com",
    phone: "+1 (382) 453-8782",
    status: "Active",
    refCode: "ANN234",
    dateCreated: "2025-03-01 17:50:36",
  },
];

export const dummyReferrals: Referral[] = [
  {
    id: "1",
    fullName: "Cynthia James",
    email: "cynthiajames@sharperly.com",
    transactions: 2,
    codeUsed: "ANN234",
    dateJoined: "2025-03-01 17:50:36",
  },
  {
    id: "2",
    fullName: "Promise Ukpe",
    email: "promiseukpe@sharperly.com",
    transactions: 2,
    codeUsed: "ANN234",
    dateJoined: "2025-03-01 17:50:36",
  },
  {
    id: "3",
    fullName: "John Johnson",
    email: "johnjohnson@sharperly.com",
    transactions: 1,
    codeUsed: "ANN234",
    dateJoined: "2025-03-01 17:50:36",
  },
];

export const dashboardNotificationRecords: DashboardNotification[] = [
  {
    id: "1",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "All Users",
    banner: "No Banner",
    status: "Deactivate",
  },
  {
    id: "2",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "New Users",
    banner: "No Banner",
    status: "Deactivate",
  },
  {
    id: "3",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "Wallet Holders",
    banner: "No Banner",
    status: "Activate",
  },
  {
    id: "4",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "All Users",
    banner: "No Banner",
    status: "Activate",
  },
  {
    id: "5",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "New Users",
    banner: "No Banner",
    status: "Activate",
  },
  {
    id: "6",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "All Users",
    banner: "No Banner",
    status: "Activate",
  },
  {
    id: "7",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "All Users",
    banner: "No Banner",
    status: "Activate",
  },
  {
    id: "8",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "All Users",
    banner: "No Banner",
    status: "Activate",
  },
  {
    id: "9",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "Wallet Holders",
    banner: "With Banner",
    status: "Activate",
  },
  {
    id: "10",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "New Users",
    banner: "With Banner",
    status: "Activate",
  },
  {
    id: "11",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "All Users",
    banner: "No Banner",
    status: "Activate",
  },
  {
    id: "12",
    title:
      "Heads up! New features just dropped\nYou can now fund your wallet with cards or send money faster with our updated exchange rate dashboard.",
    targetUsers: "Wallet Holders",
    banner: "With Banner",
    status: "Activate",
  },
];
