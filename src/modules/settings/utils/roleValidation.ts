import { z } from "zod";

export const roleEditSchema = z.object({
  role: z.string().min(1, "Role is required"),
  description: z.string().min(1, "Description is required"),
  permissions: z.object({
    users: z.object({
      view: z.boolean(),
      add: z.boolean(),
      edit: z.boolean(),
      delete: z.boolean(),
    }),
    transactions: z.object({
      history: z.boolean(),
      view: z.boolean(),
      viewSingle: z.boolean(),
      delete: z.boolean(),
      export: z.boolean(),
    }),
    settings: z.object({
      overview: z.boolean(),
      setupRoles: z.boolean(),
      manageAccess: z.boolean(),
      grantPrivileges: z.boolean(),
      revokeRights: z.boolean(),
    }),
  }),
  selectAll: z.boolean().optional(),
});

export type RoleEditType = z.infer<typeof roleEditSchema>;
