export type User = {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Flagged" | "Suspended";
  kycStatus: "Approved" | "Pending" | "Rejected";
  country: string;
  lastTransaction: string;
};

export interface Transaction {
  id: string;
  customer: string;
  amount: number;
  title: string;
  recipient: string;
  status: "Initiated" | "Completed";
  paymentMethod: "Bank Transfer" | "PAY ID" | "Wallet";
  dateCreated: string;
}

export interface Referral {
  id: string;
  name: string;
  email: string;
  codeUsed: string;
  reward: number;
  dateCreated: string;
}

export interface WalletTransaction {
  transactionId: string;
  title: string;
  type: "Withdrawal" | "Funding";
  recipient: string;
  amount: number;
  dateCreated: string;
}

type BonusStatus = "Pending" | "Completed";

export interface ReferralTwo {
  id: number;
  referrer: string;
  referralCode: string;
  referredUser: string;
  dateJoined: string;
  bonusStatus: BonusStatus;
  bonusAmount: string;
}

type Gender = "Male" | "Female";
type Status = "Approved";

export interface UserTwo {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  status: Status;
}
