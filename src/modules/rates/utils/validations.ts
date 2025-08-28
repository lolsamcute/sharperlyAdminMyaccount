import { z } from "zod";

export const officialBidRateSchema = z.object({
  buyingCurrency: z.string().min(1, "Please select a buying currency"),
  sellingCurrency: z.string().min(1, "Please select a selling currency"),
  bdcOperator: z.string().min(1, "Please select a BDC operator"),
  rateAmount: z.string().min(1, "Rate amount is required"),
  positiveVariance: z.string().min(1, "Positive variance is required"),
  negativeVariance: z.string().min(1, "Negative variance is required"),
  minimumVolume: z.string().min(1, "Minimum volume is required"),
  maximumVolume: z.string().min(1, "Maximum volume is required"),
});

export type OfficialBidRateFormType = z.infer<typeof officialBidRateSchema>;

export const rateFormSchema = z.object({
  buyingCurrency: z.string().min(1, "Please select a buying currency"),
  sellingCurrency: z.string().min(1, "Please select a selling currency"),
  bdcOperator: z.string().min(1, "Please select a BDC operator"),
  rateAmount: z.string().min(1, "Rate amount is required"),
  positiveVariance: z.string().min(1, "Positive variance is required"),
  negativeVariance: z.string().min(1, "Negative variance is required"),
  minimumVolume: z.string().min(1, "Minimum volume is required"),
  maximumVolume: z.string().min(1, "Maximum volume is required"),
});

export type RateFormType = z.infer<typeof rateFormSchema>;
