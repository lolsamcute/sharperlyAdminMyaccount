import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createOperatorSchema,
  type CreateOperatorFormType,
} from "../utils/validations";

type UseCreateOperatorFormReturn = {
  form: ReturnType<typeof useForm<CreateOperatorFormType>>;
};

export const useCreateOperatorForm = (): UseCreateOperatorFormReturn => {
  const form = useForm<CreateOperatorFormType>({
    resolver: zodResolver(createOperatorSchema),
    defaultValues: {
      name: "",
      bot: "",
    },
  });

  return {
    form,
  };
};
