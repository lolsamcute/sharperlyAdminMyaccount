import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createCountrySchema,
  type CreateCountryFormType,
} from "../utils/validations";

type UseCreateCountryFormReturn = {
  form: ReturnType<typeof useForm<CreateCountryFormType>>;
};

export const useCreateCountryForm = (): UseCreateCountryFormReturn => {
  const form = useForm<CreateCountryFormType>({
    resolver: zodResolver(createCountrySchema),
    defaultValues: {
      region: "",
      countryName: "",
      capital: "",
      mainCurrency: "",
      symbol: "",
      flag: undefined,
    },
  });

  return {
    form,
  };
};
