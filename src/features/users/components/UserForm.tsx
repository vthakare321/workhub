import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Card, Input, Select } from "../../../components/common";

import {
  userSchema,
  UserFormData,
} from "../schemas/user.schema";

type UserFormProps = {
  mode: "create" | "edit";
  defaultValues?: Partial<UserFormData>;
  onSubmit: (data: UserFormData) => void | Promise<void>;
};

function UserForm({
  mode,
  defaultValues,
  onSubmit,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "user",
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset({
        firstName: defaultValues.firstName ?? "",
        lastName: defaultValues.lastName ?? "",
        email: defaultValues.email ?? "",
        role: defaultValues.role ?? "user",
      });
    }
  }, [defaultValues, reset]);

  return (
    <Card
      title={
        mode === "create"
          ? "Create User"
          : "Edit User"
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2"
      >
        <Input
          id="firstName"
          label="First Name"
          {...register("firstName")}
          error={errors.firstName?.message}
        />

        <Input
          id="lastName"
          label="Last Name"
          {...register("lastName")}
          error={errors.lastName?.message}
        />

        <Input
          id="email"
          type="email"
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Select
          id="role"
          label="Role"
          {...register("role")}
          options={[
            {
              label: "Administrator",
              value: "admin",
            },
            {
              label: "Manager",
              value: "moderator",
            },
            {
              label: "Contributor",
              value: "user",
            },
          ]}
          error={errors.role?.message}
        />

        <Button
          type="submit"
          isLoading={isSubmitting}
          className="w-full"
        >
          {mode === "create"
            ? "Create User"
            : "Update User"}
        </Button>
      </form>
    </Card>
  );
}

export default UserForm;