import CustomSelect from "@/components/common/custom-select";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useCreateRegionForm } from "../hooks/useCreateRegionForm";

const regionOptions = [
  { label: "Africa", value: "Africa" },
  { label: "Oceania", value: "Oceania" },
];

const CreateRegionForm = () => {
  const { form } = useCreateRegionForm();

  return (
    <section className="w-full max-w-115 space-y-8">
      <Form {...form}>
        <CustomSelect
          name="regionName"
          label="Region Name"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={regionOptions}
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

export default CreateRegionForm;
