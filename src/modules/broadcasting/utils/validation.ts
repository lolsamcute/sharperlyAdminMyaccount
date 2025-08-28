import { z } from "zod";

export const pushNotificationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  message: z.string().min(1, "Message is required"),
  destination: z.string().min(1, "Notification destination is required"),
});

export const bulkEmailSchema = z.object({
  category: z.string().min(1, "Category is required"),
  emailTitle: z.string().min(1, "Email title is required"),
  emailTemplate: z.string().min(1, "Email template is required"),
  message: z.string().min(1, "Message is required"),
});

export const dashboardBannerSchema = z.object({
  image: z.instanceof(File, { message: "Image is required" }),
  url: z.string().url({ message: "Enter a valid URL" }).optional(),
});

export type DashboardBannerType = z.infer<typeof dashboardBannerSchema>;

export type PushNotificationType = z.infer<typeof pushNotificationSchema>;
export type BulkEmailType = z.infer<typeof bulkEmailSchema>;
