import { X } from "lucide-react";
import { useEffect } from "react";
import { FormProvider, Controller } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DashboardBannerImageUpload from "./DashboardBannerImageUpload";
import CustomInput from "@/components/common/custom-input";
import { useDashboardBannerForm } from "../../hooks/useDashboardBannerForm";

import type { DashboardBannerType } from "../../utils/validation";

interface AddDashboardBannerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: DashboardBannerType) => void;
}

const AddDashboardBannerModal = ({
  open,
  onOpenChange,
  onSubmit,
}: AddDashboardBannerModalProps) => {
  const { form } = useDashboardBannerForm();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const submitForm = (data: DashboardBannerType) => {
    onSubmit(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="!max-w-151 rounded-xx font-poppins py-14"
      >
        <DialogHeader className="flex flex-row items-center justify-between mb-8.5 mx-auto w-full max-w-97.5">
          <DialogTitle className="text-lg font-bold text-primary-text">
            Add Dashboard Banner
          </DialogTitle>
          <DialogClose className="cursor-pointer">
            <X size={24} color="#000000" />
          </DialogClose>
        </DialogHeader>
        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit(submitForm)}
            className="space-y-11 w-full mx-auto max-w-97.5"
          >
            <div>
              <label className="block text-base text-secondary-black mb-2">
                Image
              </label>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <DashboardBannerImageUpload
                    value={field.value as File | null}
                    onFileChange={field.onChange}
                  />
                )}
              />
              {errors.image && (
                <p className="text-xs text-red-500 mt-2">
                  {errors.image.message as string}
                </p>
              )}
            </div>
            <div>
              <CustomInput
                control={control}
                name="url"
                type="url"
                label={"External URL"}
                placeholder="Enter URL"
                containerClassName="bg-white border border-black-1 h-15 rounded-xl"
              />
            </div>
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                className="flex-1 !text-warning border border-warning bg-white hover:bg-white rounded-x py-3 font-medium h-13.5"
                type="button"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 rounded-x bg-primary hover:bg-primary text-white py-3 font-medium h-13.5"
                type="submit"
              >
                Proceed
              </Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AddDashboardBannerModal;
