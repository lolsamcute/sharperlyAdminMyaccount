import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  officialBidRateSchema,
  type OfficialBidRateFormType,
} from "../utils/validations";

type UseOfficialBidRateFormReturn = {
  form: ReturnType<typeof useForm<OfficialBidRateFormType>>;
};

export const useOfficialBidRateForm = (): UseOfficialBidRateFormReturn => {
  const form = useForm<OfficialBidRateFormType>({
    resolver: zodResolver(officialBidRateSchema),
    defaultValues: {
      buyingCurrency: "",
      sellingCurrency: "",
      bdcOperator: "",
      rateAmount: "",
      positiveVariance: "",
      negativeVariance: "",
      minimumVolume: "",
      maximumVolume: "",
    },
  });

  return {
    form,
  };
};
