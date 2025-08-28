import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userProfileSchema,
  type UserProfileFormType,
} from "../utils/validations";

type UseUpdateProfileFormReturn = {
  form: ReturnType<typeof useForm<UserProfileFormType>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
};

export const useUpdateProfileForm = (): UseUpdateProfileFormReturn => {
  const form = useForm<UserProfileFormType>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: "",
      middleName: "",
      lastName: "",
      gender: "Male",
      username: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      referralCode: "",
    },
  });

  //   const { reset } = form;

  return {
    form,
  };
};
