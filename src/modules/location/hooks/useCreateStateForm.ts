import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createStateSchema,
  type CreateStateFormType,
} from "../utils/validations";

type UseCreateStateFormReturn = {
  form: ReturnType<typeof useForm<CreateStateFormType>>;
};

export const useCreateStateForm = (): UseCreateStateFormReturn => {
  const form = useForm<CreateStateFormType>({
    resolver: zodResolver(createStateSchema),
    defaultValues: {
      countryName: "",
      stateName: "",
      capital: "",
    },
  });

  return {
    form,
  };
};
