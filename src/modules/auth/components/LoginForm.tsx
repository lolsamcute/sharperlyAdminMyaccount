import { Mail } from "lucide-react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useLoginForm } from "../hooks/useLoginForm";
import type { LoginFormType } from "../utils/validation";
import CustomInput from "@/components/common/custom-input";
import CustomPasswordInput from "@/components/common/custom-password-input";

const LoginForm = () => {
  const { form } = useLoginForm();

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
  };

  return (
    <section className="w-full font-poppins">
      <h1 className="text-black font-medium text-2xl text-center">
        Admin Login
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-6.5 w-full mx-auto max-w-92"
        >
          <CustomInput
            name="email"
            placeholder="Email"
            control={form.control}
            containerClassName="rounded-lg"
            append={<Mail size={20} color="var(--color-gray-400)" />}
          />
          <CustomPasswordInput
            name="password"
            control={form.control}
            placeholder="Password"
            containerClassName="rounded-lg"
          />

          <Button
            type="submit"
            className="mt-10.5 bg-primary hover:bg-primary rounded-xl py-5 h-12 w-full text-white text-base text-center flex justify-center items-center"
          >
            Login
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default LoginForm;
