import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bulkEmailSchema, type BulkEmailType } from "../utils/validation";

type UseBulkEmailFormReturn = {
  form: ReturnType<typeof useForm<BulkEmailType>>;
};

export const useBulkEmailForm = (): UseBulkEmailFormReturn => {
  const form = useForm<BulkEmailType>({
    resolver: zodResolver(bulkEmailSchema),
    defaultValues: {
      category: "",
      emailTitle: "",
      emailTemplate: "",
      message: "",
    },
  });

  return {
    form,
  };
};
