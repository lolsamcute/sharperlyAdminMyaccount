import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dashboardBannerSchema } from "../utils/validation";
import type { DashboardBannerType } from "../utils/validation";

export const useDashboardBannerForm = () => {
  const form = useForm<DashboardBannerType>({
    resolver: zodResolver(dashboardBannerSchema),
    defaultValues: {
      image: undefined,
      url: "",
    },
  });

  return { form };
};
