import { z } from "zod";

export const createRegionSchema = z.object({
  regionName: z.string().min(1, "Select region"),
});

export type CreateRegionFormType = z.infer<typeof createRegionSchema>;

export const createCountrySchema = z.object({
  region: z.string().min(1, "Select region"),
  countryName: z.string().min(1, "Select country"),
  capital: z.string().min(1, "Select capital"),
  mainCurrency: z.string().min(1, "Select currency"),
  symbol: z.string().min(1, "Select symbol"),
  flag: z.any().optional(),
});

export type CreateCountryFormType = z.infer<typeof createCountrySchema>;

export const createStateSchema = z.object({
  countryName: z.string().min(1, "Select country"),
  stateName: z.string().min(1, "Select state"),
  capital: z.string().min(1, "Select capital"),
});

export type CreateStateFormType = z.infer<typeof createStateSchema>;
