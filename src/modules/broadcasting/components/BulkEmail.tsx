import { useBulkEmailForm } from "../hooks/useBulkEmailForm";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/common/custom-input";
import CustomTextarea from "@/components/common/custom-textarea";
import CustomSelect from "@/components/common/custom-select";
import { categoryOptions, emailTemplateOptions } from "../utils/constants";
import type { BulkEmailType } from "../utils/validation";

interface BulkEmailProps {
  onClose?: () => void;
}

const BulkEmail = ({ onClose }: BulkEmailProps) => {
  const { form } = useBulkEmailForm();
  const { handleSubmit, control } = form;

  const onSubmit = (data: BulkEmailType) => {
    console.log("Bulk email data:", data);
    // Handle bulk email sending logic here
    if (onClose) onClose();
  };

  return (
    <section className="space-y-8 max-w-97.5">
      <Form {...form}>
        <form
          id="bulk-email-form"
          className="space-y-6 bg-white rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomSelect
            control={control}
            name="category"
            label="Destination By Category"
            placeholder="Select Category"
            options={categoryOptions}
            labelClassName="text-base font-normal text-gray-700 mb-2"
            selectTriggerClassName="bg-white border border-gray-300 !h-15 rounded-lg placeholder:text-gray-400"
          />

          <CustomInput
            control={control}
            name="emailTitle"
            label="Email Title"
            placeholder="Enter Title"
            inputClassName="placeholder:text-gray-400 text-base leading-5"
            formLabelClassName="text-base font-normal text-gray-700"
            containerClassName="bg-white border border-gray-300 !h-15 rounded-lg"
          />

          <CustomSelect
            control={control}
            name="emailTemplate"
            label="Email Template"
            placeholder="Select Template"
            options={emailTemplateOptions}
            labelClassName="text-base font-normal text-gray-700 mb-2"
            selectTriggerClassName="bg-white border border-gray-300 !h-15 rounded-lg placeholder:text-gray-400"
          />

          <CustomTextarea
            control={control}
            name="message"
            label="Message"
            placeholder="Enter Message"
            teaxtareaClassName="placeholder:text-gray-400 text-base leading-5 min-h-32 resize-none bg-white border border-gray-300 rounded-lg"
            formLabelClassName="text-base font-normal text-gray-700"
          />
        </form>
      </Form>
    </section>
  );
};

export default BulkEmail;
