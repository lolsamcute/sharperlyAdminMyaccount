import CustomInput from "@/components/common/custom-input";
import CustomSelect from "@/components/common/custom-select";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useCreateOperatorForm } from "../hooks/useCreateOperatorForm";

const botOptions = [
  { label: "Not a bot", value: "Not a bot" },
  { label: "Bot", value: "Bot" },
];

const CreateOperatorForm = () => {
  const { form } = useCreateOperatorForm();

  return (
    <section className="w-full max-w-115 space-y-8">
      <Form {...form}>
        <CustomInput
          name="name"
          containerClassName="px-6 !rounded-xl h-15"
          label="Name"
          control={form.control}
        />
        <CustomSelect
          name="bot"
          label="Bot?"
          selectTriggerClassName="px-6 !rounded-xl !h-15"
          control={form.control}
          options={botOptions}
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

export default CreateOperatorForm;
