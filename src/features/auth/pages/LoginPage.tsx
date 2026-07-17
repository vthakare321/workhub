import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../../components/common";
import { loginSchema, LoginFormData } from "../validation/login.schema";

import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useAuthStore } from "../store/auth.store";

function LoginPage() {
    const navigate = useNavigate();

const loginMutation = useLogin();

const loginStore = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

 const onSubmit = (data: LoginFormData) => {
  loginMutation.mutate(data, {
    onSuccess: (response) => {
      loginStore(response);

      navigate("/dashboard");
    },

    onError: (error) => {
      console.error(error);
      alert("Invalid username or password");
    },
  });
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          WorkHub Portal
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            placeholder="Enter username"
            {...register("username")}
            error={errors.username?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            {...register("password")}
            error={errors.password?.message}
          />

         <Button
  type="submit"
  isLoading={loginMutation.isPending}
>
  Login
</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;