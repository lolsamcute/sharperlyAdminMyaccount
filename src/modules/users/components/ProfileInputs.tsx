import CustomInput from "@/components/common/custom-input";
import CustomSelect from "@/components/common/custom-select";
import { useUpdateProfileForm } from "../hooks/useUpdateProfileForm";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

const ProfileInputs = () => {
  const { form } = useUpdateProfileForm();

  return (
    <section className="w-full max-w-115 space-y-8">
      <Form {...form}>
        <CustomInput
          name="name"
          containerClassName="px-6 !rounded-xl h-15"
          label="Name"
          control={form.control}
        />
        <CustomInput
          name="middleName"
          containerClassName="px-6 !rounded-xl h-15"
          label="Middle Name"
          control={form.control}
        />
        <CustomInput
          name="lastName"
          containerClassName="px-6 !rounded-xl h-15"
          label="Last Name"
          control={form.control}
        />
        <CustomSelect
          name="gender"
          label="Gender"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={genderOptions}
        />
        <CustomInput
          containerClassName="px-6 !rounded-xl h-15"
          label="Username"
          name="username"
          control={form.control}
        />
        <CustomInput
          containerClassName="px-6 !rounded-xl h-15"
          label="Email Address"
          name="email"
          control={form.control}
        />
        <section className="w-full flex gap-1.5 items-end">
          <div className="flex gap-1.5 items-center justify-center w-23.5 rounded-xl bg-grey-1 h-15">
            <img
              width={16}
              height={16}
              alt="country"
              src="https://res.cloudinary.com/sharperly/image/upload/v1754313442/Sharperly%20Admin/australia_icon.svg"
            />
            <span className="block text-secondary-black text-base leading-5">
              +61
            </span>
          </div>
          <CustomInput
            name="phone"
            control={form.control}
            containerClassName="px-6 !rounded-xl h-15 min-w-90.5"
          />
        </section>

        <CustomInput
          containerClassName="px-6 !rounded-xl h-15"
          label="Referral Code"
          name="referralCode"
          control={form.control}
        />
      </Form>

      <section className="flex items-center gap-3">
        <Button className="border border-warning text-warning text-sm font-medium leading-5 bg-white hover:bg-white p-2.5 flex items-center justify-center h-13.5 rounded-x w-50">
          Cancel
        </Button>
        <Button className="text-white bg-primary hover:bg-primary text-sm font-medium leading-5 py-2 px-4 flex items-center justify-center h-13.5 rounded-x w-50 flex-1">
          Update Profile
        </Button>
      </section>
    </section>
  );
};

export default ProfileInputs;
