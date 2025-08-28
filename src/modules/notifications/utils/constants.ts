import type { Notification } from "./types";

export const notificationsData: Notification[] = [
  {
    id: 1,
    type: "high-priority",
    title: "High-Priority - Transaction Failure Spike",
    description:
      "A spike in failed transactions has been detected in the last 30 minutes. Please review the transaction logs for potential issues with the payment gateway.",
    dateTime: "07 Jun 2018, 12:32PM",
    icon: "lucide:alert-triangle",
    color: "#F04438",
    highlight: true,
  },
  {
    id: 2,
    type: "high-value",
    title: "High-Value Transaction Alert",
    description:
      "A transaction of $15,000 was initiated by user Daniel O.. Awaiting compliance approval. Click to review details.",
    dateTime: "07 Jun 2018, 12:32PM",
    icon: "lucide:badge-dollar-sign",
    color: "#6941C6",
  },
  {
    id: 3,
    type: "kyc-rejection",
    title: "KYC Rejection Summary",
    description:
      "12 KYC applications were rejected today due to incomplete documentation. Kindly follow up with users or review the flagged accounts list.",
    dateTime: "07 Jun 2018, 12:32PM",
    icon: "lucide:users",
    color: "#6941C6",
  },
  {
    id: 4,
    type: "wallet-reconciliation",
    title: "Successful Wallet Reconciliation",
    description:
      "Wallet transactions for June 9, 2025 have been successfully reconciled. No discrepancies found across bank sources.",
    dateTime: "07 Jun 2018, 12:32PM",
    icon: "lucide:wallet",
    color: "#6941C6",
  },
  {
    id: 5,
    type: "kyc-rejection",
    title: "KYC Rejection Summary",
    description:
      "12 KYC applications were rejected today due to incomplete documentation. Kindly follow up with users or review the flagged accounts list.",
    dateTime: "07 Jun 2018, 12:32PM",
    icon: "lucide:users",
    color: "#6941C6",
  },
  {
    id: 6,
    type: "high-priority",
    title: "High-Priority - Transaction Failure Spike",
    description:
      "A spike in failed transactions has been detected in the last 30 minutes. Please review the transaction logs for potential issues with the payment gateway.",
    dateTime: "07 Jun 2018, 12:32PM",
    icon: "lucide:alert-triangle",
    color: "#F04438",
    highlight: true,
  },
  {
    id: 7,
    type: "high-value",
    title: "High-Value Transaction Alert",
    description:
      "A transaction of $15,000 was initiated by user Daniel O.. Awaiting compliance approval. Click to review details.",
    dateTime: "07 Jun 2018, 12:32PM",
    icon: "lucide:badge-dollar-sign",
    color: "#6941C6",
  },
];
