"use client";

import { Button } from "@/app/components";
import { InputLogin } from "../input-login/InputLogin";

import { useForm } from "react-hook-form";

import { useAuth } from "@/app/context/auth";

interface FormValues {
  username: string;
  password: string;
}

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { login } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    login(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <InputLogin
        label="USERNAME *"
        type="username"
        id="username"
        required="Username is required"
        value={/^[a-zA-Z0-9]+$/}
        message="Invalid name"
        error={errors.username}
        register={register}
      />
      <InputLogin
        label="PASSWORD *"
        type="password"
        id="password"
        required="Password is required"
        value={/^[a-zA-Z0-9]+$/}
        message="Invalid password"
        error={errors.password}
        register={register}
      />

      <span className="text-sm text-cyan-600 font-semibold">
        Dont remember your password?
      </span>

      <Button type="submit" label="Log in" />
    </form>
  );
}
