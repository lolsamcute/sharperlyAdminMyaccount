import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rateFormSchema, type RateFormType } from "../utils/validations";

type UseRateFormReturn = {
  form: ReturnType<typeof useForm<RateFormType>>;
};

export const useRateForm = (): UseRateFormReturn => {
  const form = useForm<RateFormType>({
    resolver: zodResolver(rateFormSchema),
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
