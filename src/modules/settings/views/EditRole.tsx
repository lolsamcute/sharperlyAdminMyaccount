import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/common/custom-select";
import { Checkbox } from "@/components/ui/checkbox";
import { useRoleEditForm } from "../hooks/useRoleEditForm";
import { Form } from "@/components/ui/form";
import CustomTextArea from "@/components/common/custom-textarea";
import HeadingOne from "@/components/typography/HeadingOne";

const roleOptions = [
  { label: "CTO", value: "CTO" },
  { label: "Admin", value: "Admin" },
  { label: "Manager", value: "Manager" },
];

// Type for permission group keys
type PermissionGroupKey = "users" | "transactions" | "settings";

const permissionGroups = [
  {
    key: "users" as const,
    label: "Users",
    permissions: [
      { key: "view" as const, label: "View User" },
      { key: "add" as const, label: "Add User" },
      { key: "edit" as const, label: "Edit User" },
      { key: "delete" as const, label: "Delete User" },
    ],
  },
  {
    key: "transactions" as const,
    label: "Transactions",
    permissions: [
      { key: "history" as const, label: "Transaction History" },
      { key: "view" as const, label: "View Transactions" },
      { key: "viewSingle" as const, label: "View Transaction" },
      { key: "delete" as const, label: "Delete Transaction" },
      { key: "export" as const, label: "Export Transaction" },
    ],
  },
  {
    key: "settings" as const,
    label: "Settings",
    permissions: [
      { key: "overview" as const, label: "Admin Permissions Overview" },
      { key: "setupRoles" as const, label: "Setting Up Admin Roles" },
      { key: "manageAccess" as const, label: "Managing User Access" },
      {
        key: "grantPrivileges" as const,
        label: "Granting Elevated Privileges",
      },
      { key: "revokeRights" as const, label: "Revoking Admin Rights" },
    ],
  },
] as const;

const EditRole = () => {
  const { form } = useRoleEditForm();
  const { control, setValue, watch, handleSubmit } = form;

  const selectAll = watch("selectAll");

  // Helper to get and set permission values with type safety
  const getPermissionValue = (
    groupKey: PermissionGroupKey,
    permKey: string
  ): boolean => {
    const permissions = watch("permissions");
    const group = permissions[groupKey];
    return group && typeof group === "object" && permKey in group
      ? (group as Record<string, boolean>)[permKey]
      : false;
  };

  const setPermissionValue = (
    groupKey: PermissionGroupKey,
    permKey: string,
    value: boolean
  ) => {
    const currentPermissions = watch("permissions");
    setValue("permissions", {
      ...currentPermissions,
      [groupKey]: {
        ...currentPermissions[groupKey],
        [permKey]: value,
      },
    });
  };

  // Handle select all permissions
  const handleSelectAll = (checked: boolean) => {
    setValue("selectAll", checked);
    permissionGroups.forEach((group) => {
      group.permissions.forEach((perm) => {
        setPermissionValue(group.key, perm.key, checked);
      });
    });
  };

  return (
    <section className="space-y-8 font-poppins">
      <HeadingOne text="Edit Role" />

      <div className="bg-white rounded-x p-8 w-full">
        <Form {...form}>
          <div className="mb-6 space-y-8 w-full max-w-142.5">
            <CustomSelect
              name="role"
              label="Select Role"
              placeholder="Select Role"
              selectTriggerClassName="w-full h-15 !border !border-black-1 rounded-lg px-4 text-secondary-black text-base font-medium bg-white"
              labelClassName="font-medium text-base text-secondary-black mb-2 block"
              control={control}
              options={roleOptions}
            />

            <CustomTextArea
              name="description"
              label="Role Description"
              control={control}
              placeholder="Enter role description"
              teaxtareaClassName="w-full h-22 !border !border-black-1 rounded-lg px-4 text-secondary-black text-base font-medium bg-white"
            />
          </div>
          <div className="mb-6 w-full max-w-207.5">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-medium text-lg text-black">
                Select Role Permission
              </span>
              <Checkbox
                checked={selectAll}
                onCheckedChange={handleSelectAll}
                className={`border-primary rounded-md size-5.5 border-2 ${
                  selectAll ? "bg-primary" : "bg-white"
                }`}
              />
              <span className="font-medium text-base text-secondary-black">
                Select All Permissions
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {permissionGroups.map((group) => (
                <div key={group.key}>
                  <span className="font-bold text-base text-secondary-black mb-2 block">
                    {group.label}
                  </span>
                  <div className="space-y-4">
                    {group.permissions.map((perm) => (
                      <div key={perm.key} className="flex items-center gap-3">
                        <Checkbox
                          checked={getPermissionValue(group.key, perm.key)}
                          onCheckedChange={(checked) =>
                            setPermissionValue(
                              group.key,
                              perm.key,
                              checked as boolean
                            )
                          }
                          className={`border-primary rounded-md size-5.5 border-2  ${
                            getPermissionValue(group.key, perm.key)
                              ? "bg-primary ring-2 ring-primary"
                              : "bg-white"
                          }`}
                        />
                        <span className="text-base text-secondary-black font-medium">
                          {perm.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-12.5">
            <Button
              type="button"
              variant="outline"
              className="border border-warning text-warning bg-white p-2.5 rounded-x font-medium h-13.5 w-full max-w-42.5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-white p-2.5 rounded-x font-medium h-13.5 w-full max-w-52"
              onClick={handleSubmit((data) => console.log(data))}
            >
              Update Role
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default EditRole;
