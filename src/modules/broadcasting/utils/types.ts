export interface Creator {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive";
  refCode: string;
  dateCreated: string;
  avatar?: string;
}

export interface CreatorProfile extends Creator {
  referrals: number;
  kycStatus: "Approved" | "Pending" | "Rejected";
  successfulTransactions: number;
  accountStatus: "Active" | "Inactive" | "Suspended";
}

export interface Referral {
  id: string;
  fullName: string;
  email: string;
  transactions: number;
  codeUsed: string;
  dateJoined: string;
}

export interface CreatorStats {
  referrals: number;
  kycStatus: string;
  successfulTransactions: number;
  accountStatus: string;
}

export interface EmailHistoryEntry {
  id: string;
  subject: string;
  category: string;
  template: string;
  recipients: number;
  sentDate: string;
  status: "Sent" | "Pending" | "Failed";
}

export interface DashboardNotification {
  id: string;
  title: string;
  targetUsers: string;
  banner: "No Banner" | "With Banner";
  status: "Deactivate" | "Activate";
}
