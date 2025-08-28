import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  pushNotificationSchema,
  type PushNotificationType,
} from "../utils/validation";

type UsePushNotificationFormReturn = {
  form: ReturnType<typeof useForm<PushNotificationType>>;
};

export const usePushNotificationForm = (): UsePushNotificationFormReturn => {
  const form = useForm<PushNotificationType>({
    resolver: zodResolver(pushNotificationSchema),
    defaultValues: {
      title: "",
      message: "",
      destination: "",
    },
  });

  return {
    form,
  };
};
