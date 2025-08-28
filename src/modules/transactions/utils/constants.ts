import type { CustomerData, WalletFundingTransaction } from "./type";

type TransactionStatus = "Initiated" | "Completed" | "Pending" | "Failed";

export interface Transaction {
  id: number;
  customerName: string;
  amount: number;
  transactionType: string;
  currency: string;
  recipientCurrency: string;
  status: TransactionStatus;
  paymentMethod: string;
  dateCreated: string;
}

export const allTransactions: Transaction[] = [
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
    transactionType: "Money Transfer",
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
    transactionType: "Bills Payment",
    currency: "AUD",
    recipientCurrency: "NGN",
    status: "Completed",
    paymentMethod: "Bank Transfer",
    dateCreated: "2025-05-27T19:25:00Z",
  },
];

export const walletFundingTransactions: WalletFundingTransaction[] = [
  {
    walletHolder: "Oluwaseun Adebayo",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Falake Adebayo",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Temitope Afolabi",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Oluwaseun Adebayo",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Chijioke Okoro",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Franklin Chukwu",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Judith Dimokechukwu",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Chijioke Nwosu",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Chinonso Okafor",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Oluwafemi Adeyemi",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Judith Dimokechukwu",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Franklin Chukwu",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Oluwaseun Adebayo",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Falake Adebayo",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Temitope Afolabi",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Oluwaseun Adebayo",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Chijioke Okoro",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Franklin Chukwu",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Judith Dimokechukwu",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Chijioke Nwosu",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Chinonso Okafor",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Oluwafemi Adeyemi",
    dateCreated: "2025-05-27 19:25pm",
  },
  {
    walletHolder: "Judith Dimokechukwu",
    amount: 100,
    currency: "AUD",
    sourceAccNo: 1749848963,
    sourceName: "Franklin Chukwu",
    dateCreated: "2025-05-27 19:25pm",
  },
];

export const customerRecords: CustomerData[] = [
  {
    customer: "Judith Jidekene",
    email: "judithjideken@gmail.com",
    phone: "07012345678",
    amount: 1500,
    dateCreated: "2025-05-28 10:00am",
  },
  {
    customer: "Michael Thompson",
    email: "mikethompson@gmail.com",
    phone: "07123456789",
    amount: 1200,
    dateCreated: "2025-06-15 2:00pm",
  },
  {
    customer: "Emily Rivera",
    email: "emily.rivera@gmail.com",
    phone: "07234567890",
    amount: 1100,
    dateCreated: "2025-07-22 11:30am",
  },
  {
    customer: "Judith Jidekene",
    email: "judithjideken@gmail.com",
    phone: "07012345678",
    amount: 1000,
    dateCreated: "2025-05-28 10:00am",
  },
  {
    customer: "Michael Thompson",
    email: "mikethompson@gmail.com",
    phone: "07123456789",
    amount: 950,
    dateCreated: "2025-06-15 2:00pm",
  },
  {
    customer: "Emily Rivera",
    email: "emily.rivera@gmail.com",
    phone: "07234567890",
    amount: 900,
    dateCreated: "2025-07-22 11:30am",
  },
  {
    customer: "Judith Jidekene",
    email: "judithjideken@gmail.com",
    phone: "07012345678",
    amount: 880,
    dateCreated: "2025-05-28 10:00am",
  },
  {
    customer: "Michael Thompson",
    email: "mikethompson@gmail.com",
    phone: "07123456789",
    amount: 850,
    dateCreated: "2025-06-15 2:00pm",
  },
  {
    customer: "Emily Rivera",
    email: "emily.rivera@gmail.com",
    phone: "07234567890",
    amount: 800,
    dateCreated: "2025-07-22 11:30am",
  },
  {
    customer: "Judith Jidekene",
    email: "judithjideken@gmail.com",
    phone: "07012345678",
    amount: 750,
    dateCreated: "2025-05-28 10:00am",
  },
];
