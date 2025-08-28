export type Transaction = {
  id: string;
  customer: string;
  amount: number;
  type: "Money Transfer" | "Bill Payment";
  currency: "AUD";
  status: "Completed" | "Initiated";
  date: string;
};
