export type WalletFundingTransaction = {
  walletHolder: string;
  amount: number;
  currency: "AUD";
  sourceAccNo: number;
  sourceName: string;
  dateCreated: string;
};

export type CustomerData = {
  customer: string;
  email: string;
  phone: string;
  amount: number;
  dateCreated: string;
};
