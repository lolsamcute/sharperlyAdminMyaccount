import CustomSelect from "@/components/common/custom-select";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useCreateCountryForm } from "../hooks/useCreateCountryForm";

const regionOptions = [
  { label: "Africa", value: "Africa" },
  { label: "Oceania", value: "Oceania" },
];
const countryOptions = [
  { label: "Australia", value: "Australia" },
  { label: "Nigeria", value: "Nigeria" },
];
const capitalOptions = [
  { label: "Canberra", value: "Canberra" },
  { label: "Abuja", value: "Abuja" },
];
const currencyOptions = [
  { label: "Australian Dollar", value: "Australian Dollar" },
  { label: "Naira", value: "Naira" },
];
const symbolOptions = [
  { label: "$", value: "$" },
  { label: "₦", value: "₦" },
];

const CreateCountryForm = () => {
  const { form } = useCreateCountryForm();

  return (
    <section className="w-full max-w-115 space-y-8">
      <Form {...form}>
        <CustomSelect
          name="region"
          label="Select Region"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={regionOptions}
        />
        <CustomSelect
          name="countryName"
          label="Country Name"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={countryOptions}
        />
        <CustomSelect
          name="capital"
          label="Capital"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={capitalOptions}
        />
        <CustomSelect
          name="mainCurrency"
          label="Main Currency"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={currencyOptions}
        />
        <CustomSelect
          name="symbol"
          label="Symbol"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={symbolOptions}
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-secondary-black">
            Country Flag
          </label>
          <input
            type="file"
            name="flag"
            className="w-full bg-stone-100 rounded-xl h-15 px-6 text-xs"
          />
        </div>
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

export default CreateCountryForm;
