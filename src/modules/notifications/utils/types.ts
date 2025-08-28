export type NotificationType =
  | "high-priority"
  | "high-value"
  | "kyc-rejection"
  | "wallet-reconciliation";

export interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  description: string;
  dateTime: string;
  icon?: string;
  color?: string;
  highlight?: boolean;
}
