import CustomSelect from "@/components/common/custom-select";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useCreateStateForm } from "../hooks/useCreateStateForm";

const countryOptions = [
  { label: "Australia", value: "Australia" },
  { label: "Nigeria", value: "Nigeria" },
];
const stateOptions = [
  {
    label: "Australia Capital Territory",
    value: "Australia Capital Territory",
  },
  { label: "Federal Capital Territory", value: "Federal Capital Territory" },
  { label: "Lagos", value: "Lagos" },
  { label: "New South Wales", value: "New South Wales" },
  { label: "Northern Territory", value: "Northern Territory" },
  { label: "Queensland", value: "Queensland" },
  { label: "South Australia", value: "South Australia" },
  { label: "Tasmania", value: "Tasmania" },
  { label: "Victoria", value: "Victoria" },
  { label: "Western Australia", value: "Western Australia" },
];
const capitalOptions = [
  { label: "Canberra", value: "Canberra" },
  { label: "Abuja", value: "Abuja" },
  { label: "Ikeja", value: "Ikeja" },
  { label: "Sydney", value: "Sydney" },
  { label: "Darwin", value: "Darwin" },
  { label: "Brisbane", value: "Brisbane" },
  { label: "Adelaide", value: "Adelaide" },
  { label: "Hobart", value: "Hobart" },
  { label: "Melbourne", value: "Melbourne" },
  { label: "Perth", value: "Perth" },
];

const CreateStateForm = () => {
  const { form } = useCreateStateForm();

  return (
    <section className="w-full max-w-115 space-y-8">
      <Form {...form}>
        <CustomSelect
          name="countryName"
          label="Country Name"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={countryOptions}
        />
        <CustomSelect
          name="stateName"
          label="State Name"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={stateOptions}
        />
        <CustomSelect
          name="capital"
          label="Capital"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={capitalOptions}
        />
      </Form>
      <section className="w-full">
        <Button
          type="submit"
          onClick={form.handleSubmit((data) => console.log(data))}
          className="text-white bg-primary hover:bg-primary text-sm font-medium leading-5 py-2 px-4 flex items-center justify-center h-13.5 rounded-x w-full"
        >
          Submit
        </Button>
      </section>
    </section>
  );
};

export default CreateStateForm;
