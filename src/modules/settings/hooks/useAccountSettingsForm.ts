import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  accountSettingsSchema,
  type AccountSettingsType,
} from "../utils/validation";

type UseAccountSettingsFormReturn = {
  form: ReturnType<typeof useForm<AccountSettingsType>>;
};

export const useAccountSettingsForm = (): UseAccountSettingsFormReturn => {
  const form = useForm<AccountSettingsType>({
    resolver: zodResolver(accountSettingsSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  return {
    form,
  };
};
