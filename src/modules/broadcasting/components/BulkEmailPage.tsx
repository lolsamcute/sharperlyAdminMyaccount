import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useBulkEmailForm } from "../hooks/useBulkEmailForm";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/common/custom-input";
import CustomTextarea from "@/components/common/custom-textarea";
import CustomSelect from "@/components/common/custom-select";
import { categoryOptions, emailTemplateOptions } from "../utils/constants";
import type { BulkEmailType } from "../utils/validation";
import EmailHistory from "./EmailHistory";

const BulkEmailPage = () => {
  const [showHistory, setShowHistory] = useState(false);
  const { form } = useBulkEmailForm();
  const { handleSubmit, control } = form;

  const onSubmit = (data: BulkEmailType) => {
    console.log("Bulk email data:", data);
    // Handle bulk email sending logic here
  };

  const toggleView = () => {
    setShowHistory(!showHistory);
  };

  return (
    <section className="space-y-8 max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Bulk Email</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={toggleView}
            className="border border-primary text-primary bg-white px-6 py-2 rounded-lg font-medium hover:bg-purple-50"
          >
            {showHistory ? "Back to Form" : "View History"}
          </Button>
          {!showHistory && (
            <Button
              type="submit"
              form="bulk-email-form"
              className="bg-primary hover:bg-primary text-white px-6 py-2 rounded-lg font-medium"
            >
              Send Email
            </Button>
          )}
        </div>
      </div>

      {showHistory ? (
        <EmailHistory />
      ) : (
        <Form {...form}>
          <form
            id="bulk-email-form"
            className="space-y-6 bg-white p-6 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomSelect
              control={control}
              name="category"
              label="Destination By Category"
              placeholder="Select Category"
              options={categoryOptions}
              labelClassName="text-base font-normal text-gray-700 mb-2"
              selectTriggerClassName="bg-white border border-black-1 !h-15 rounded-xl placeholder:text-gray-400"
            />

            <CustomInput
              control={control}
              name="emailTitle"
              label="Email Title"
              placeholder="Enter Title"
              inputClassName="placeholder:text-gray-400 text-base leading-5"
              formLabelClassName="text-base font-normal text-gray-700"
              containerClassName="bg-white border border-black-1 h-15 rounded-xl"
            />

            <CustomSelect
              control={control}
              name="emailTemplate"
              label="Email Template"
              placeholder="Select Template"
              options={emailTemplateOptions}
              labelClassName="text-base font-normal text-gray-700 mb-2"
              selectTriggerClassName="bg-white border border-gray-300 h-12 rounded-lg placeholder:text-gray-400"
            />

            <CustomTextarea
              control={control}
              name="message"
              label="Message"
              placeholder="Enter Message"
              teaxtareaClassName="placeholder:text-gray-400 text-base leading-5 min-h-24 resize-none bg-white border border-black-1 rounded-xl"
              formLabelClassName="text-base font-normal text-gray-700"
            />
          </form>
        </Form>
      )}
    </section>
  );
};

export default BulkEmailPage;
