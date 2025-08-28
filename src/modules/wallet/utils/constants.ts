type WalletTransactionStatus = "Initiated" | "Completed" | "Pending" | "Failed";

export interface WalletFundTransaction {
  id: number;
  customerName: string;
  amount: number;
  transactionType: string;
  currency: string;
  status: WalletTransactionStatus;
  paymentMethod: string;
  dateCreated: string;
}

export const walletFundTransactions: WalletFundTransaction[] = [
  {
    id: 1,
    customerName: "Judith Dimokechukwu",
    amount: 1000,
    transactionType: "Wallet Funding",
    currency: "AUD",
    status: "Initiated",
    paymentMethod: "Bank Transfer",
    dateCreated: "2025-05-27T19:25:00Z",
  },
  {
    id: 2,
    customerName: "Fidelis Nwachukwu",
    amount: 1000,
    transactionType: "Wallet Funding",
    currency: "AUD",
    status: "Completed",
    paymentMethod: "Bank Transfer",
    dateCreated: "2025-05-27T19:25:00Z",
  },
  {
    id: 3,
    customerName: "Annabel Adinnu",
    amount: 1000,
    transactionType: "Wallet Funding",
    currency: "AUD",
    status: "Completed",
    paymentMethod: "Bank Transfer",
    dateCreated: "2025-05-27T19:25:00Z",
  },
];

export interface WalletWithdrawalTransaction {
  id: number;
  customerName: string;
  amount: number;
  transactionType: string;
  currency: string;
  recipientCurrency: string;
  status: WalletTransactionStatus;
  paymentMethod: string;
  dateCreated: string;
}

export const walletWithdrawalTransactions: WalletWithdrawalTransaction[] = [
  {
    id: 1,
    customerName: "Judith Dimokechukwu",
    amount: 1000,
    transactionType: "Withdrawals",
    currency: "AUD",
    recipientCurrency: "NGN",
    status: "Initiated",
    paymentMethod: "Bank Transfer",
    dateCreated: "2025-05-27T19:25:00Z",
  },
  {
    id: 2,
    customerName: "Fidelis Nwachukwu",
    amount: 1000,
    transactionType: "Withdrawals",
    currency: "AUD",
    recipientCurrency: "NGN",
    status: "Completed",
    paymentMethod: "Bank Transfer",
    dateCreated: "2025-05-27T19:25:00Z",
  },
  {
    id: 3,
    customerName: "Annabel Adinnu",
    amount: 1000,
    transactionType: "Withdrawals",
    currency: "AUD",
    recipientCurrency: "NGN",
    status: "Completed",
    paymentMethod: "Bank Transfer",
    dateCreated: "2025-05-27T19:25:00Z",
  },
];

export interface WalletRefundTransaction {
  id: number;
  customerName: string;
  amount: number;
  transactionType: string;
  currency: string;
  status: WalletTransactionStatus;
  dateCreated: string;
}

export const walletRefundTransactions: WalletRefundTransaction[] = [
  {
    id: 1,
    customerName: "Judith Dimokechukwu",
    amount: 1000,
    transactionType: "Withdrawals",
    currency: "AUD",
    status: "Initiated",
    dateCreated: "2025-05-27T19:25:00Z",
  },
  {
    id: 2,
    customerName: "Fidelis Nwachukwu",
    amount: 1000,
    transactionType: "Withdrawals",
    currency: "AUD",
    status: "Completed",
    dateCreated: "2025-05-27T19:25:00Z",
  },
  {
    id: 3,
    customerName: "Annabel Adinnu",
    amount: 1000,
    transactionType: "Withdrawals",
    currency: "AUD",
    status: "Completed",
    dateCreated: "2025-05-27T19:25:00Z",
  },
];
