import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { roleEditSchema, type RoleEditType } from "../utils/roleValidation";

type UseRoleEditFormReturn = {
  form: ReturnType<typeof useForm<RoleEditType>>;
};

export const useRoleEditForm = (
  defaultValues?: Partial<RoleEditType>
): UseRoleEditFormReturn => {
  const form = useForm<RoleEditType>({
    resolver: zodResolver(roleEditSchema),
    defaultValues: defaultValues || {
      role: "",
      description: "",
      permissions: {
        users: {
          view: false,
          add: false,
          edit: false,
          delete: false,
        },
        transactions: {
          history: false,
          view: false,
          viewSingle: false,
          delete: false,
          export: false,
        },
        settings: {
          overview: false,
          setupRoles: false,
          manageAccess: false,
          grantPrivileges: false,
          revokeRights: false,
        },
      },
      selectAll: false,
    },
  });

  return {
    form,
  };
};
