import { z } from "zod";

export const createOperatorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  bot: z.string().min(1, "Bot is required"),
});

export type CreateOperatorFormType = z.infer<typeof createOperatorSchema>;
