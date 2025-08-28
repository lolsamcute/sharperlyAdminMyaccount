import { z } from "zod";

const GenderEnum = z.enum(["Female", "Male", "Other"]);

export const userProfileSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long." }),
  gender: GenderEnum,
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .regex(/^[a-z0-9-]+$/, {
      message:
        "Username can only contain lowercase letters, numbers, and hyphens.",
    }),
  email: z.email({ message: "Invalid email address." }),
  phone: z.string().regex(/^\d{9}$/, {
    message:
      "Please enter a valid 9-digit Australian phone number (e.g., 412345678).",
  }),
  dateOfBirth: z
    .string({ message: "Date of birth is required" })
    .refine((val) => {
      const date = new Date(val);
      return !isNaN(date.getTime()) && date < new Date();
    }, "Invalid date of birth"),

  referralCode: z.string().optional(),
});

export type UserProfileFormType = z.infer<typeof userProfileSchema>;
