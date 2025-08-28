import { Button } from "@/components/ui/button";
import { useAccountSettingsForm } from "../hooks/useAccountSettingsForm";
import { Form } from "@/components/ui/form";
import { X } from "lucide-react";
import CustomPasswordInput from "@/components/common/custom-password-input";

const AccountSettingsTab = () => {
  const { form } = useAccountSettingsForm();
  const { handleSubmit, control } = form;

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="bg-white rounded-xl py-16 w-full max-w-151 space-y-8.5">
        <div className="w-full flex items-center justify-between max-w-108.5 mx-auto min-h-8">
          <h2 className="font-bold text-xl text-primary-text">
            Update Your Password
          </h2>

          <X size={24} color="#000000" />
        </div>
        <Form {...form}>
          <form
            className="space-y-6 w-full mx-auto max-w-97.5"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <CustomPasswordInput
              type="password"
              control={control}
              autoComplete="off"
              name="newPassword"
              label="New Password"
              placeholder="Enter New Password"
              inputClassName="placeholder:text-black2 text-base leading-5"
              formLabelClassName="text-base font-normal text-secondary-black"
              containerClassName="bg-white border border-black-1 h-15 rounded-xl"
            />

            <CustomPasswordInput
              type="password"
              control={control}
              autoComplete="off"
              name="confirmPassword"
              label="Confirm New Password"
              placeholder="Confirm New Password"
              inputClassName="placeholder:text-black2 text-base leading-5"
              formLabelClassName="text-base font-normal text-secondary-black"
              containerClassName="bg-white border border-black-1 h-15 rounded-xl"
            />

            <Button
              type="submit"
              className="bg-primary hover:bg-primary rounded-x text-white font-medium text-sm w-full mt-2 h-13.5"
            >
              Update Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AccountSettingsTab;
