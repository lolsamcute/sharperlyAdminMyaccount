import { Button } from "@/components/ui/button";
import { usePushNotificationForm } from "../hooks/usePushNotificationForm";
import { Form } from "@/components/ui/form";
import { X } from "lucide-react";
import CustomInput from "@/components/common/custom-input";
import CustomTextarea from "@/components/common/custom-textarea";
import CustomSelect from "@/components/common/custom-select";
import { destinationOptions } from "../utils/constants";
import type { PushNotificationType } from "../utils/validation";

const SendPushNotification = () => {
  const { form } = usePushNotificationForm();
  const { handleSubmit, control } = form;

  const onSubmit = (data: PushNotificationType) => {
    console.log("Push notification data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="bg-white rounded-xl py-16 w-full max-w-151 space-y-8.5">
        <div className="w-full flex items-center justify-between max-w-108.5 mx-auto min-h-8">
          <h2 className="font-bold text-xl text-primary-text">
            Send Push Notification
          </h2>

          <button className="cursor-pointer">
            <X size={24} color="#000000" />
          </button>
        </div>

        <Form {...form}>
          <form
            className="space-y-6 w-full mx-auto max-w-97.5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomInput
              control={control}
              name="title"
              label="Title"
              placeholder="Enter Title"
              inputClassName="placeholder:text-gray-400 text-base leading-5"
              formLabelClassName="text-base font-normal text-secondary-black"
              containerClassName="bg-white border border-black-1 h-15 rounded-xl"
            />

            <CustomTextarea
              control={control}
              name="message"
              label="Message"
              placeholder="Enter Message"
              teaxtareaClassName="placeholder:text-gray-400 text-base leading-5 min-h-24 resize-none bg-white border border-black-1 rounded-xl"
              formLabelClassName="text-base font-normal text-secondary-black"
            />

            <CustomSelect
              control={control}
              name="destination"
              label="Notification Destination"
              placeholder="Select Destination"
              options={destinationOptions}
              labelClassName="text-base font-normal text-secondary-black"
              selectTriggerClassName="bg-white border border-black-1 !h-15 rounded-xl placeholder:text-gray-400"
            />

            <Button
              type="submit"
              className="bg-primary hover:bg-primary rounded-x text-white font-medium text-sm w-full h-13.5 mt-2 py-2 px-4"
            >
              Send Notification
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SendPushNotification;
