export type RateData = {
  amount: string;
  buying: string;
  selling: string;
  rateDate: string;
  operator: string;
  operatorStatus: "Active" | "Inactive";
  minVolume: number;
  maxVolume: number;
  dateCreated: string;
};
