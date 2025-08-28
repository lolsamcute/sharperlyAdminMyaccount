import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginFormType } from "../utils/validation";

export const LOGIN_SUCCESS_MESSAGE = "Login successful";

type UseLoginFormReturn = {
  form: ReturnType<typeof useForm<LoginFormType>>;
};

export const useLoginForm = (): UseLoginFormReturn => {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
  });

  return {
    form,
  };
};
