import CustomInput from "@/components/common/custom-input";
import CustomSelect from "@/components/common/custom-select";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRateForm } from "../hooks/useRateForm";

const currencyOptions = [
  { label: "AUD", value: "AUD" },
  { label: "NGN", value: "NGN" },
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
  { label: "GBP", value: "GBP" },
];

const operatorOptions = [
  { label: "Yusuf Exchange", value: "Yusuf Exchange" },
  { label: "Aminu Forex", value: "Aminu Forex" },
  { label: "Abdul Forex", value: "Abdul Forex" },
];

const CreateRateForm = () => {
  const { form } = useRateForm();

  return (
    <section className="w-full max-w-115 space-y-8">
      <Form {...form}>
        <CustomSelect
          name="buyingCurrency"
          label="Buying Currency"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={currencyOptions}
        />

        <CustomSelect
          name="sellingCurrency"
          label="Selling Currency"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={currencyOptions}
        />

        <CustomSelect
          name="bdcOperator"
          label="BDC Operators"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={operatorOptions}
        />

        <CustomInput
          name="rateAmount"
          containerClassName="px-6 !rounded-xl h-15"
          label="Rate Amount"
          control={form.control}
        />

        <CustomInput
          name="positiveVariance"
          containerClassName="px-6 !rounded-xl h-15"
          label="Positive Variance"
          control={form.control}
        />

        <CustomInput
          name="negativeVariance"
          containerClassName="px-6 !rounded-xl h-15"
          label="Negative Variance"
          control={form.control}
        />

        <CustomInput
          name="minimumVolume"
          containerClassName="px-6 !rounded-xl h-15"
          label="Minimum Volume"
          control={form.control}
        />

        <CustomInput
          name="maximumVolume"
          containerClassName="px-6 !rounded-xl h-15"
          label="Maximum Volume"
          control={form.control}
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

export default CreateRateForm;
