import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createRegionSchema,
  type CreateRegionFormType,
} from "../utils/validations";

type UseCreateRegionFormReturn = {
  form: ReturnType<typeof useForm<CreateRegionFormType>>;
};

export const useCreateRegionForm = (): UseCreateRegionFormReturn => {
  const form = useForm<CreateRegionFormType>({
    resolver: zodResolver(createRegionSchema),
    defaultValues: {
      regionName: "",
    },
  });

  return {
    form,
  };
};
