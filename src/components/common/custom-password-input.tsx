import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { type Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

interface CustomPasswordInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
  inputClassName?: string;
  containerClassName?: string;
  formLabelClassName?: string;
}

const CustomPasswordInput: React.FC<
  CustomPasswordInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  name,
  label,
  control,
  inputClassName,
  formLabelClassName,
  containerClassName,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel
            className={cn(
              "text-secondary-black text-base leading-5",
              formLabelClassName
            )}
          >
            {label}
          </FormLabel>
          <FormControl>
            <div
              className={cn(
                "relative flex items-center justify-between bg-grey-1 h-12 px-3",
                containerClassName
              )}
            >
              <Input
                type={showPassword ? "text" : "password"}
                className={cn(
                  "flex-1 py-4 placeholder:text-gray-400 text-xs border-none shadow-none focus-visible:ring-0 focus:ring-0 focus-visible:outline-none",
                  inputClassName
                )}
                {...field}
                {...rest}
              />
              {showPassword ? (
                <EyeOff
                  onClick={togglePasswordVisibility}
                  color="var(--color-gray-500)"
                  size={16}
                />
              ) : (
                <Eye
                  onClick={togglePasswordVisibility}
                  color="var(--color-gray-500)"
                  size={16}
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomPasswordInput;
